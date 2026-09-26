import { useStore } from "zustand";
import {
  createJSONStorage,
  persist,
  type PersistStorage,
} from "zustand/middleware";
import { createStore, type StateCreator } from "zustand/vanilla";
import { MOODS_BY_ID, type MoodId } from "../data/moods";
import { sanitizePoolPreferences } from "../domain/quest/pool";
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
  RED_ROPE_BUNDLE_COST,
  RED_ROPE_BUNDLE_SIZE,
  STORED_COMPLETION_LIMIT,
  STORE_KEY,
  STORE_VERSION,
  type CompletedSession,
  type PersistedQuestState,
  type QuestState,
  type QuestStore,
} from "../domain/quest/model";
import {
  isPersistedQuestState,
} from "../domain/quest/persistence";
import { resetOnInvalidStorage } from "./resetOnInvalidStorage";
import {
  activeSessionDurationMs,
  calculateCompletionPoints,
  createDefaultQuestState,
  generateGameQuestOffers,
  isGameSelectionAvailable,
  generateQuestOffers,
  moodSelectionExpired,
  moodWindowState,
  questGamesForSelection,
  rotateSessionOffer,
  safeAdd,
  sameQuestOffers,
  questTimeLimitMs,
  statsAfterCompletion,
} from "../domain/quest/rules";

export * from "../domain/quest/model";
export {
  activeSessionDurationMs,
  calculateCompletionPoints,
  canCompleteQuest,
  generateQuestOffers,
  minimumQuestDurationMs,
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
    return state.gameSelection
      ? generateGameQuestOffers(null,
          questGamesForSelection(state.gameSelection, options.getLibraryGames()),
          options.random, excludedOfferIds, undefined, state.poolPreferences,
          previousQuestIds)
      : generateQuestOffers(moodId, options.getLibraryGames(), options.random,
          excludedOfferIds, undefined, undefined, state.poolPreferences,
          previousQuestIds);
  }
  return (set, get) => ({
    ...createDefaultState(),
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
      const offeredQuests = state.selectedMoodId || state.gameSelection
        ? offersForSelection(state.selectedMoodId, { ...state, poolPreferences })
        : [];
      set({
        poolPreferences,
        offeredQuests,
        offerSetsByMoodId: state.selectedMoodId
          ? { [state.selectedMoodId]: offeredQuests }
          : {},
      });
    },
    restartCurrentQuest: () => {
      const state = get();
      const session = state.currentSession;
      if (
        !session ||
        QUEST_CORES_BY_ID[session.questId]?.type !== "countdown" ||
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
      if (state.currentSession || !quest || !identity) return false;
      const now = options.now();
      const moodId = identity.moodId;
      set({
        currentSession: {
          sessionId: options.createSessionId(),
          moodId,
          questId,
          game: identity.game,
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
        cachedOffers !== undefined
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
      if (state.currentSession) return;
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
      if (
        !offer ||
        !quest ||
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
        if (!session || session.startedAt !== null) return state;
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
          !session ||
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
                questTimeLimitMs(session.questId),
            ),
          },
        };
      });
    },
    resumeQuest: (resumedAt) => {
      set((state) => {
        const session = state.currentSession;
        if (
          !session ||
          session.startedAt === null ||
          session.pausedAt === null
        ) {
          return state;
        }
        if (
          activeSessionDurationMs(session, resumedAt) >=
          questTimeLimitMs(session.questId)
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
      if (
        !session ||
        session.startedAt === null ||
        (QUEST_CORES_BY_ID[session.questId]?.type !== "countdown" &&
          state.profile.redRopes < 1)
      ) {
        return false;
      }

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
            profile: {
              ...state.profile,
              redRopes:
                QUEST_CORES_BY_ID[session.questId]?.type === "countdown"
                  ? state.profile.redRopes
                  : state.profile.redRopes - 1,
            },
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
    purchaseRedRopes: () => {
      const state = get();
      if (
        state.profile.points < RED_ROPE_BUNDLE_COST ||
        state.profile.redRopes > Number.MAX_SAFE_INTEGER - RED_ROPE_BUNDLE_SIZE
      ) {
        return false;
      }

      set({
        profile: {
          ...state.profile,
          points: state.profile.points - RED_ROPE_BUNDLE_COST,
          redRopes: state.profile.redRopes + RED_ROPE_BUNDLE_SIZE,
        },
      });
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

      const quest = QUEST_CORES_BY_ID[session.questId];
      if (!quest || !quest.moodIds.includes(session.moodId)) return null;

      const completedAt = options.now();
      const durationMs = activeSessionDurationMs(session, completedAt);
      if (durationMs >= questTimeLimitMs(session.questId)) return null;
      if (durationMs < quest.minimumDurationMinutes * 60_000) {
        return null;
      }

      const pointsAwarded = calculateCompletionPoints(durationMs);
      const completedSession: CompletedSession = {
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
      storage: resetOnInvalidStorage(storage, STORE_VERSION, isPersistedQuestState),
      version: STORE_VERSION,
      merge: (persisted, current) => {
        if (!isPersistedQuestState(persisted)) return current;
        const state = { ...current, ...persisted };
        // Library edits can invalidate a selection without invalidating progress.
        if (!state.currentSession && state.gameSelection && !isGameSelectionAvailable(
          state.gameSelection, options.getLibraryGames(), options.getCuratedGamePreferences(),
        )) {
          return { ...state, gameSelection: null, moodSelectedAt: null,
            offeredQuests: [], offerSetsByMoodId: {} };
        }
        return state;
      },
      partialize: ({
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
