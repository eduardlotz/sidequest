import { useStore } from "zustand";
import {
  createJSONStorage,
  persist,
  type PersistStorage,
} from "zustand/middleware";
import { createStore, type StateCreator } from "zustand/vanilla";
import { MOODS_BY_ID, type MoodId } from "../data/moods";
import { invalidPoolGroups, sanitizePoolPreferences } from "../domain/quest/pool";
import { snapshotQuest } from "../domain/quest/snapshot";
import { QUEST_CORES_BY_ID } from "../data/quests";
import { libraryGamesFromState } from "../domain/library/rules";
import type { CuratedGamePreferences } from "../domain/library/model";
import { libraryStore } from "./useLibraryStore";
import {
  createQuestProgress,
  progressAfterCompletion,
} from "../domain/quest/progress";
import {
  QUEST_OFFER_COUNT,
  QUEST_OFFER_ROLES,
  QUEST_SHUFFLE_COST,
  STORED_COMPLETION_LIMIT,
  STORE_KEY,
  STORE_VERSION,
  type CompletedSession,
  type PersistedQuestState,
  type QuestState,
  type QuestOffer,
  type QuestStore,
} from "../domain/quest/model";
import { migrateQuestState } from "../domain/quest/persistence";
import {
  activeSessionDurationMs,
  calculateCompletionPoints,
  canCompleteQuest,
  createDefaultQuestState,
  generateGameQuestOffers,
  isGameSelectionAvailable,
  isGameOfferSetValid,
  isQuestOfferSetValid,
  generateQuestOffers,
  moodSelectionExpired,
  moodWindowState,
  questGamesForSelection,
  gameForInstallment,
  rotateSessionOffer,
  safeAdd,
  sameQuestOffers,
  questTimeLimitMs,
  questOfferPools,
  isSessionEligible,
  experienceKey,
  statsAfterCompletion,
} from "../domain/quest/rules";

export * from "../domain/quest/model";
export {
  activeSessionDurationMs,
  calculateCompletionPoints,
  canCompleteQuest,
  generateQuestOffers,
} from "../domain/quest/rules";

type StoreOptions = {
  random?: () => number;
  now?: () => number;
  createSessionId?: () => string;
  getLibraryGames?: () => ReturnType<typeof libraryGamesFromState>;
  getLibraryRevision?: () => number;
  getCuratedGamePreferences?: () => Record<string, CuratedGamePreferences>;
};

function createDefaultState(): QuestState {
  return createDefaultQuestState();
}

function createQuestState(
  options: Required<StoreOptions>,
): StateCreator<QuestStore> {
  function offersForSelection(
    moodId: MoodId | null,
    state: QuestState,
    excludedOfferIds?: ReadonlySet<string>,
    previousQuestIds?: ReadonlySet<string>,
  ) {
    const exclusions = new Set(state.blacklistedQuestIds);
    return state.gameSelection
      ? generateGameQuestOffers(null,
          questGamesForSelection(state.gameSelection, options.getLibraryGames()),
          options.random, excludedOfferIds, exclusions, state.poolPreferences,
          previousQuestIds)
      : generateQuestOffers(moodId, options.getLibraryGames(), options.random,
          excludedOfferIds, undefined, exclusions, state.poolPreferences,
          previousQuestIds);
  }
  function refreshBlacklistedOffers(state: QuestState) {
    const blacklist = new Set(state.blacklistedQuestIds);
    function refill(moodId: MoodId | null, offers: QuestOffer[], gameBound: boolean) {
      const kept = offers.filter((offer) => !blacklist.has(offer.questId));
      if (kept.length === QUEST_OFFER_COUNT) return kept;
      const exclusions = new Set([...blacklist, ...kept.map((offer) => offer.questId)]);
      const reservedExperiences = new Set(kept.map(offer => experienceKey(offer.questId)));
      const replacements = gameBound
        ? generateGameQuestOffers(null,
            questGamesForSelection(state.gameSelection, options.getLibraryGames()),
            options.random, undefined, exclusions, state.poolPreferences, undefined, reservedExperiences)
        : generateQuestOffers(moodId, options.getLibraryGames(), options.random,
            undefined, QUEST_OFFER_ROLES.filter((role) => !kept.some((offer) => offer.role === role)),
            exclusions, state.poolPreferences, undefined, false, reservedExperiences);
      const next = offers.flatMap((offer) => {
        if (!blacklist.has(offer.questId)) return [offer];
        const replacement = replacements.shift();
        return replacement ? [replacement] : [];
      });
      return [...next, ...replacements].slice(0, QUEST_OFFER_COUNT);
    }
    const offerSetsByMoodId = { ...state.offerSetsByMoodId };
    for (const moodId of Object.keys(offerSetsByMoodId) as MoodId[]) {
      offerSetsByMoodId[moodId] = refill(moodId, offerSetsByMoodId[moodId] ?? [], false);
    }
    const offeredQuests = state.gameSelection
      ? refill(null, state.offeredQuests, true)
      : state.selectedMoodId
        ? (offerSetsByMoodId[state.selectedMoodId] ?? refill(state.selectedMoodId, state.offeredQuests, false))
        : [];
    if (state.selectedMoodId) offerSetsByMoodId[state.selectedMoodId] = offeredQuests;
    return { offeredQuests, offerSetsByMoodId };
  }
  return (set, get) => ({
    ...createDefaultState(),
    setQuestBlacklisted: (questId, blacklisted) => {
      const state = get();
      if (!Object.hasOwn(QUEST_CORES_BY_ID, questId)) return false;
      if (state.blacklistedQuestIds.includes(questId) === blacklisted) return true;
      const blacklistedQuestIds = blacklisted
        ? [...state.blacklistedQuestIds, questId]
        : state.blacklistedQuestIds.filter((id) => id !== questId);
      const next = { ...state, blacklistedQuestIds };
      set({ blacklistedQuestIds, ...refreshBlacklistedOffers(next) });
      return true;
    },
    excludeCurrentQuest: () => {
      const state = get();
      const session = state.currentSession;
      if (!session) return false;
      state.setQuestBlacklisted(session.questId, true);
      if (session.startedAt === null) return get().returnCurrentSessionToSelection();
      set({ currentSession: null, stats: {
        ...get().stats,
        cancelledQuestCount: safeAdd(get().stats.cancelledQuestCount, 1),
      } });
      return true;
    },
    chooseGame: (gameId, installmentId) => {
      const state = get();
      const gameSelection = { gameId, installmentId: installmentId ?? null };
      if (state.currentSession || !isGameSelectionAvailable(
        gameSelection, options.getLibraryGames(), options.getCuratedGamePreferences(),
      )) return false;
      const nextState = { ...state, gameSelection };
      set({
        gameSelection,
        selectedMoodId: null,
        moodSelectedAt: options.now(),
        offeredQuests: offersForSelection(null, nextState),
        offerSetsByMoodId: {},
        offerLibraryRevision: options.getLibraryRevision(),
      });
      return true;
    },
    editGame: () => {
      if (get().currentSession) return false;
      set({ gameSelection: null, moodSelectedAt: null,
        offeredQuests: [], offerSetsByMoodId: {} });
      return true;
    },
    savePoolPreferences: (preferences) => {
      const state = get();
      const poolPreferences = sanitizePoolPreferences(preferences);
      if (invalidPoolGroups(poolPreferences).length) return;
      const offeredQuests = state.selectedMoodId || state.gameSelection
        ? offersForSelection(state.selectedMoodId, { ...state, poolPreferences })
        : [];
      set({
        poolPreferences,
        ...(state.currentSession && !isSessionEligible(state.currentSession, state.gameSelection,
          options.getLibraryGames(), poolPreferences, new Set(state.blacklistedQuestIds))
          ? { currentSession: { ...state.currentSession, recovery: true,
            pausedAt: state.currentSession.startedAt === null ? null : state.currentSession.pausedAt ?? options.now() } } : {}),
        offeredQuests,
        offerSetsByMoodId: state.selectedMoodId
          ? { [state.selectedMoodId]: offeredQuests }
          : {},
      });
    },
    recoverCurrentSession: () => {
      const state = get();
      if (!state.currentSession?.recovery) return false;
      const next = { ...state, currentSession: null };
      const selectionAvailable = !state.gameSelection || isGameSelectionAvailable(
        state.gameSelection, options.getLibraryGames(), options.getCuratedGamePreferences(),
      );
      const offeredQuests = selectionAvailable ? offersForSelection(state.selectedMoodId, next) : [];
      set({ currentSession: null, offeredQuests,
        ...(!selectionAvailable ? { gameSelection: null, moodSelectedAt: null } : {}),
        offerSetsByMoodId: state.selectedMoodId ? { [state.selectedMoodId]: offeredQuests } : {},
      });
      return true;
    },
    restartCurrentQuest: () => {
      const state = get();
      const session = state.currentSession;
      if (
        !session ||
        (session.snapshot?.definition ?? QUEST_CORES_BY_ID[session.questId])?.type !== "countdown" || session.recovery ||
        session.pausedAt === null
      )
        return false;
      set({
        currentSession: {
          ...session,
          sessionId: options.createSessionId(),
          revealedAt: options.now(),
          startedAt: null,
          pausedAt: null,
          pausedTotalMs: 0,
        },
      });
      return true;
    },
    toggleQuestFavorite: (questId) => {
      const state = get();
      const progress = state.questProgressById[questId];
      if (!progress || !Object.hasOwn(QUEST_CORES_BY_ID, questId)) return;
      set({
        questProgressById: {
          ...state.questProgressById,
          [questId]: { ...progress, favorite: !progress.favorite },
        },
      });
    },
    repeatQuest: (questId) => {
      const state = get();
      const quest = QUEST_CORES_BY_ID[questId];
      const identity =
        state.questProgressById[questId]?.lastCompletion ??
        state.questProgressById[questId]?.seenOffer;
      if (state.currentSession || !quest || !identity || state.blacklistedQuestIds.includes(questId)) return false;
      const now = options.now();
      const availableGames = state.gameSelection ? questGamesForSelection(state.gameSelection, options.getLibraryGames()) : options.getLibraryGames();
      const games = identity.game?.installmentId
        ? availableGames.filter(game => game.id === identity.game!.id && game.installmentIds?.includes(identity.game!.installmentId!))
          .flatMap(game => { const exact = gameForInstallment(game, identity.game!.installmentId!); return exact ? [exact] : []; })
        : availableGames;
      const pools = questOfferPools(state.selectedMoodId, games, state.poolPreferences);
      const eligible = [...pools.bound, ...(!state.gameSelection ? [...pools.directed, ...pools.inspiration] : [])]
        .find(offer => offer.questId === questId && (offer.game?.id ?? null) === (identity.game?.id ?? null));
      if (!eligible) return false;
      const moodId = eligible.moodId;
      set({
        currentSession: {
          sessionId: options.createSessionId(),
          moodId,
          questId,
          snapshot: snapshotQuest(questId, eligible.game),
          game: eligible.game,
          revealedAt: now,
          startedAt: null,
          pausedAt: null,
          pausedTotalMs: 0,
        },
      });
      return true;
    },
    markQuestsSeen: (questIds) => {
      const state = get();
      const unseenIds = questIds.filter(
        (id) =>
          Object.hasOwn(QUEST_CORES_BY_ID, id) &&
          (!state.questProgressById[id] ||
            state.questProgressById[id].seenOffer?.id !==
              state.offeredQuests.find((offer) => offer.questId === id)?.id),
      );
      if (!unseenIds.length) return;
      const seenAt = options.now();
      set({
        questProgressById: {
          ...state.questProgressById,
          ...Object.fromEntries(
            unseenIds.map((id) => [
              id,
              {
                ...(state.questProgressById[id] ?? createQuestProgress(seenAt)),
                seenOffer:
                  state.offeredQuests.find((offer) => offer.questId === id) ??
                  null,
              },
            ]),
          ),
        },
      });
    },
    selectMood: (moodId) => {
      const state = get();
      if (state.currentSession || !MOODS_BY_ID[moodId] || state.gameSelection) return false;

      const now = options.now();
      const expired = moodSelectionExpired(state.moodSelectedAt, now);
      const libraryRevision = options.getLibraryRevision();
      const libraryChanged = state.offerLibraryRevision !== libraryRevision;
      const offerSetsByMoodId =
        expired || libraryChanged ? {} : { ...state.offerSetsByMoodId };
      const cachedOffers = offerSetsByMoodId[moodId];
      const offeredQuests =
        cachedOffers !== undefined && isQuestOfferSetValid(moodId, cachedOffers,
          options.getLibraryGames(), state.poolPreferences, new Set(state.blacklistedQuestIds))
          ? [...cachedOffers]
          : offersForSelection(moodId, state);

      set({
        selectedMoodId: moodId,
        moodSelectedAt: expired ? now : state.moodSelectedAt,
        offeredQuests,
        offerLibraryRevision: libraryRevision,
        offerSetsByMoodId: {
          ...offerSetsByMoodId,
          [moodId]: offeredQuests,
        },
      });
      return true;
    },
    editMood: () => {
      if (get().currentSession) return false;
      set({
        selectedMoodId: null,
        moodSelectedAt: null,
        offeredQuests: [],
      });
      return true;
    },
    refreshMoodWindow: () => {
      const state = get();
      const now = options.now();
      if (!state.currentSession && state.gameSelection && moodSelectionExpired(state.moodSelectedAt, now)) {
        set({ moodSelectedAt: now, offeredQuests: offersForSelection(null, state) });
      } else {
        set(moodWindowState(state, now));
      }
    },
    refreshLibraryOffers: () => {
      const state = get();
      const libraryRevision = options.getLibraryRevision();
      if (state.offerLibraryRevision === libraryRevision) return;
      if (state.currentSession) {
        const session = state.currentSession;
        const eligible = isSessionEligible(session, state.gameSelection, options.getLibraryGames(),
          state.poolPreferences, new Set(state.blacklistedQuestIds));
        set({ offerLibraryRevision: libraryRevision, offerSetsByMoodId: {},
          ...(!eligible ? { currentSession: { ...session, recovery: true,
            pausedAt: session.startedAt === null ? null : session.pausedAt ?? options.now() } } : {}),
        });
        return;
      }
      const selection = state.gameSelection;
      const gameSelection = selection && isGameSelectionAvailable(
        selection, options.getLibraryGames(), options.getCuratedGamePreferences(),
      ) ? selection : null;
      if (!state.selectedMoodId && !gameSelection) {
        set({
          gameSelection,
          offeredQuests: [],
          offerSetsByMoodId: {},
          offerLibraryRevision: libraryRevision,
        });
        return;
      }
      const refreshedState = { ...state, gameSelection };
      const offeredQuests = offersForSelection(state.selectedMoodId, refreshedState);
      set({
        gameSelection,
        offeredQuests,
        offerSetsByMoodId: {
          ...(state.selectedMoodId ? { [state.selectedMoodId]: offeredQuests } : {}),
        },
        offerLibraryRevision: libraryRevision,
      });
    },
    dealNewCards: () => {
      const state = get();
      const now = options.now();
      if (
        state.currentSession ||
        (!state.selectedMoodId && !state.gameSelection) ||
        moodSelectionExpired(state.moodSelectedAt, now)
      ) {
        if (
          !state.currentSession &&
          (state.selectedMoodId || state.gameSelection) &&
          moodSelectionExpired(state.moodSelectedAt, now)
        ) {
          set(moodWindowState(state, now));
        }
        return false;
      }

      const cost = state.freeShufflesRemaining > 0 ? 0 : QUEST_SHUFFLE_COST;
      if (state.profile.points < cost) return false;

      const offeredQuests = offersForSelection(
        state.selectedMoodId,
        state,
        new Set(state.offeredQuests.map((offer) => offer.id)),
        new Set(state.offeredQuests.map((offer) => offer.questId)),
      );
      if (sameQuestOffers(offeredQuests, state.offeredQuests)) {
        return false;
      }

      set({
        offeredQuests,
        freeShufflesRemaining: Math.max(0, state.freeShufflesRemaining - 1),
        profile: { ...state.profile, points: state.profile.points - cost },
        offerSetsByMoodId: {
          ...state.offerSetsByMoodId,
          ...(state.selectedMoodId ? { [state.selectedMoodId]: offeredQuests } : {}),
        },
      });
      return true;
    },
    revealQuest: (offerId) => {
      const state = get();
      const now = options.now();
      if (
        state.currentSession ||
        (!state.selectedMoodId && !state.gameSelection) ||
        moodSelectionExpired(state.moodSelectedAt, now)
      ) {
        if (
          !state.currentSession &&
          (state.selectedMoodId || state.gameSelection) &&
          moodSelectionExpired(state.moodSelectedAt, now)
        ) {
          set(moodWindowState(state, now));
        }
        return false;
      }

      const offer = state.offeredQuests.find(
        (candidate) => candidate.id === offerId,
      );
      const quest = offer ? QUEST_CORES_BY_ID[offer.questId] : null;
      const eligibleGame = offer?.game && (state.gameSelection
        ? questGamesForSelection(state.gameSelection, options.getLibraryGames())
        : options.getLibraryGames())
        .find((game) => game.id === offer.game?.id && game.questIds.includes(offer.questId));
      const eligible = questOfferPools(state.selectedMoodId, eligibleGame ? [eligibleGame] : [], state.poolPreferences);
      if (
        !offer || ![...eligible.bound, ...eligible.directed, ...eligible.inspiration].some(candidate => candidate.id === offer.id) ||
        !quest ||
        state.blacklistedQuestIds.includes(offer.questId) ||
        !quest.moodIds.includes(offer.moodId) ||
        (state.selectedMoodId && offer.moodId !== state.selectedMoodId) ||
        (offer.game ? !eligibleGame : Boolean(state.gameSelection) || !quest.universal)
      ) {
        return false;
      }

      set({
        questProgressById: {
          ...state.questProgressById,
          [offer.questId]: {
            ...(state.questProgressById[offer.questId] ??
              createQuestProgress(now)),
            seenOffer: offer,
          },
        },
        currentSession: {
          sessionId: options.createSessionId(),
          moodId: offer.moodId,
          questId: offer.questId,
          snapshot: snapshotQuest(offer.questId, offer.game),
          game: offer.game,
          revealedAt: now,
          startedAt: null,
          pausedAt: null,
          pausedTotalMs: 0,
        },
      });
      return true;
    },
    startQuest: (startedAt) => {
      set((state) => {
        const session = state.currentSession;
        if (!session || session.recovery || session.startedAt !== null) return state;
        return {
          currentSession: {
            ...session,
            startedAt: Math.max(session.revealedAt, startedAt),
          },
        };
      });
    },
    pauseQuest: (pausedAt) => {
      set((state) => {
        const session = state.currentSession;
        if (
          !session || session.recovery ||
          session.startedAt === null ||
          session.pausedAt !== null
        ) {
          return state;
        }
        return {
          currentSession: {
            ...session,
            pausedAt: Math.min(
              Math.max(session.startedAt, pausedAt),
              session.startedAt +
                session.pausedTotalMs +
                questTimeLimitMs(session.questId, session.snapshot?.definition),
            ),
          },
        };
      });
    },
    resumeQuest: (resumedAt) => {
      set((state) => {
        const session = state.currentSession;
        if (
          !session || session.recovery ||
          session.startedAt === null ||
          session.pausedAt === null
        ) {
          return state;
        }
        if (
          activeSessionDurationMs(session, resumedAt) >=
          questTimeLimitMs(session.questId, session.snapshot?.definition)
        )
          return state;
        return {
          currentSession: {
            ...session,
            pausedAt: null,
            pausedTotalMs:
              session.pausedTotalMs + Math.max(0, resumedAt - session.pausedAt),
          },
        };
      });
    },
    returnCurrentSessionToSelection: () => {
      const state = get();
      const session = state.currentSession;
      if (!session || session.startedAt !== null) return false;

      const now = options.now();
      set({
        currentSession: null,
        moodSelectedAt: moodSelectionExpired(state.moodSelectedAt, now)
          ? now
          : state.moodSelectedAt,
      });
      return true;
    },
    discardCurrentSession: () => {
      const state = get();
      const session = state.currentSession;
      if (!session || session.recovery) return false;
      const quest = session.snapshot?.definition ?? QUEST_CORES_BY_ID[session.questId];
      if (!quest) return false;

      const rotatedOffers = rotateSessionOffer(
        state,
        session,
        options.getLibraryGames(),
        options.random,
      );
      set(
        moodWindowState(
          {
            ...state,
            ...rotatedOffers,
            currentSession: null,
            stats: {
              ...state.stats,
              cancelledQuestCount: safeAdd(state.stats.cancelledQuestCount, 1),
            },
          },
          options.now(),
        ),
      );
      return true;
    },
    setDebugMode: (enabled) => {
      set((state) => ({
        profile: {
          ...state.profile,
          debugMode: enabled,
        },
      }));
    },
    completeQuest: () => {
      const state = get();
      const session = state.currentSession;
      if (!session || session.startedAt === null || session.pausedAt === null) {
        return null;
      }

      const quest = session.snapshot?.definition ?? QUEST_CORES_BY_ID[session.questId];
      if (!quest || !quest.moodIds.includes(session.moodId)) return null;

      const completedAt = options.now();
      const durationMs = activeSessionDurationMs(session, completedAt);
      if (!canCompleteQuest(session, completedAt)) return null;

      const pointsAwarded = calculateCompletionPoints(durationMs, session.questId, session.snapshot?.definition);
      const completedSession: CompletedSession = {
        snapshot: session.snapshot,
        id: session.sessionId,
        moodId: session.moodId,
        questId: session.questId,
        game: session.game,
        durationMs,
        pointsAwarded,
        completedAt,
      };
      const rotatedOffers = rotateSessionOffer(
        state,
        session,
        options.getLibraryGames(),
        options.random,
      );
      const nextState = moodWindowState(
        {
          ...state,
          ...rotatedOffers,
          profile: {
            ...state.profile,
            points: safeAdd(state.profile.points, pointsAwarded),
          },
          currentSession: null,
          completedSessions: [
            completedSession,
            ...state.completedSessions.filter(
              (completion) => completion.id !== completedSession.id,
            ),
          ].slice(0, STORED_COMPLETION_LIMIT),
          questProgressById: {
            ...state.questProgressById,
            [session.questId]: progressAfterCompletion(
              state.questProgressById[session.questId],
              completedSession,
            ),
          },
          stats: statsAfterCompletion(state.stats, completedSession),
        },
        completedAt,
      );

      set(nextState);
      return completedSession;
    },
  });
}

export function createQuestStore(
  storage?: PersistStorage<PersistedQuestState>,
  storeOptions: StoreOptions = {},
) {
  const options: Required<StoreOptions> = {
    random: storeOptions.random ?? Math.random,
    now: storeOptions.now ?? Date.now,
    createSessionId:
      storeOptions.createSessionId ?? (() => crypto.randomUUID()),
    getCuratedGamePreferences:
      storeOptions.getCuratedGamePreferences ??
      (() => libraryStore.getState().curatedGamePreferences),
    getLibraryGames:
      storeOptions.getLibraryGames ??
      (() => libraryGamesFromState(libraryStore.getState())),
    getLibraryRevision:
      storeOptions.getLibraryRevision ??
      (() => libraryStore.getState().revision),
  };
  const stateCreator = createQuestState(options);
  if (!storage) return createStore<QuestStore>()(stateCreator);

  return createStore<QuestStore>()(
    persist(stateCreator, {
      name: STORE_KEY,
      storage,
      version: STORE_VERSION,
      migrate: (persisted) => migrateQuestState(persisted),
      merge: (persisted, current) => {
        const migrated = migrateQuestState(persisted);
        const state = {
          ...current,
          ...migrated,
        };
        // Library edits can invalidate a selection without invalidating progress.
        if (!state.currentSession && state.gameSelection && !isGameSelectionAvailable(
          state.gameSelection, options.getLibraryGames(), options.getCuratedGamePreferences(),
        )) {
          return { ...state, gameSelection: null, moodSelectedAt: null,
            offeredQuests: [], offerSetsByMoodId: {} };
        }
        const blacklist = new Set(state.blacklistedQuestIds);
        for (const moodId of Object.keys(state.offerSetsByMoodId) as MoodId[]) {
          if (!isQuestOfferSetValid(moodId, state.offerSetsByMoodId[moodId] ?? [], options.getLibraryGames(), state.poolPreferences, blacklist)) {
            state.offerSetsByMoodId[moodId] = generateQuestOffers(moodId, options.getLibraryGames(), options.random, undefined, undefined, blacklist, state.poolPreferences);
          }
        }
        if (state.currentSession) {
          const session = state.currentSession;
          if (!isSessionEligible(session, state.gameSelection, options.getLibraryGames(), state.poolPreferences, blacklist)) {
            state.currentSession = { ...session, recovery: true, pausedAt: session.startedAt === null ? null : session.pausedAt ?? options.now() };
          }
        }
        if (state.gameSelection) {
          const games = questGamesForSelection(state.gameSelection, options.getLibraryGames());
          if (!isGameOfferSetValid(null, state.offeredQuests, games, state.poolPreferences, blacklist)) {
            state.offeredQuests = generateGameQuestOffers(null, games, options.random,
              undefined, blacklist, state.poolPreferences);
          }
        } else if (state.selectedMoodId && !isQuestOfferSetValid(state.selectedMoodId,
          state.offeredQuests, options.getLibraryGames(), state.poolPreferences, blacklist)) {
          state.offeredQuests = generateQuestOffers(state.selectedMoodId, options.getLibraryGames(),
            options.random, undefined, undefined, blacklist, state.poolPreferences);
          state.offerSetsByMoodId[state.selectedMoodId] = state.offeredQuests;
        }
        return state;
      },
      partialize: ({
        freeShufflesRemaining,
        blacklistedQuestIds,
        gameSelection,
        poolPreferences,
        profile,
        selectedMoodId,
        moodSelectedAt,
        offeredQuests,
        offerSetsByMoodId,
        offerLibraryRevision,
        currentSession,
        completedSessions,
        questProgressById,
        stats,
      }) => ({
        freeShufflesRemaining,
        blacklistedQuestIds,
        gameSelection,
        poolPreferences,
        profile,
        selectedMoodId,
        moodSelectedAt,
        offeredQuests,
        offerSetsByMoodId,
        offerLibraryRevision,
        currentSession,
        completedSessions,
        questProgressById,
        stats,
      }),
    }),
  );
}

const browserStorage =
  typeof window === "undefined"
    ? undefined
    : createJSONStorage<PersistedQuestState>(() => window.localStorage);

export const questStore = createQuestStore(browserStorage);

export function useQuestStore<T>(selector: (state: QuestStore) => T) {
  return useStore(questStore, selector);
}
