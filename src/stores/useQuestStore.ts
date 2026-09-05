import { useStore } from "zustand";
import {
  createJSONStorage,
  persist,
  type PersistStorage,
} from "zustand/middleware";
import { createStore, type StateCreator } from "zustand/vanilla";
import { MOODS_BY_ID } from "../data/moods";
import { QUEST_CORES_BY_ID } from "../data/quests";
import { libraryGamesFromState } from "../domain/library/rules";
import { libraryStore } from "./useLibraryStore";
import {
  QUEST_OFFER_COUNT,
  RED_ROPE_BUNDLE_COST,
  RED_ROPE_BUNDLE_SIZE,
  NEW_CARDS_COST,
  STORED_COMPLETION_LIMIT,
  STORE_KEY,
  STORE_VERSION,
  type CompletedSession,
  type PersistedQuestState,
  type QuestState,
  type QuestStore,
} from "../domain/quest/model";
import {
  migratePersistedQuestState,
  sanitizePersistedQuestState,
} from "../domain/quest/persistence";
import {
  activeSessionDurationMs,
  calculateCompletionPoints,
  createDefaultQuestState,
  generateQuestOffers,
  moodSelectionExpired,
  moodWindowState,
  rotateSessionOffer,
  safeAdd,
  sameQuestOffers,
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
export {
  migratePersistedQuestState,
  sanitizePersistedQuestState,
} from "../domain/quest/persistence";

type StoreOptions = {
  random?: () => number;
  now?: () => number;
  createSessionId?: () => string;
  getLibraryGames?: () => ReturnType<typeof libraryGamesFromState>;
  getLibraryRevision?: () => number;
};

function createDefaultState(): QuestState {
  return createDefaultQuestState();
}

function createQuestState(
  options: Required<StoreOptions>,
): StateCreator<QuestStore> {
  return (set, get) => ({
    ...createDefaultState(),
    selectMood: (moodId) => {
      const state = get();
      if (state.currentSession || !MOODS_BY_ID[moodId]) return false;

      const now = options.now();
      const expired = moodSelectionExpired(state.moodSelectedAt, now);
      const libraryRevision = options.getLibraryRevision();
      const libraryChanged = state.offerLibraryRevision !== libraryRevision;
      const offerSetsByMoodId =
        expired || libraryChanged ? {} : { ...state.offerSetsByMoodId };
      const cachedOffers = offerSetsByMoodId[moodId];
      const offeredQuests =
        cachedOffers?.length === QUEST_OFFER_COUNT
          ? [...cachedOffers]
          : generateQuestOffers(
              moodId,
              options.getLibraryGames(),
              options.random,
            );
      if (offeredQuests.length !== QUEST_OFFER_COUNT) return false;

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
        offeredQuests: [],
      });
      return true;
    },
    refreshMoodWindow: () => {
      set((state) => moodWindowState(state, options.now()));
    },
    refreshLibraryOffers: () => {
      const state = get();
      const libraryRevision = options.getLibraryRevision();
      if (state.offerLibraryRevision === libraryRevision) return;
      if (state.currentSession) return;
      if (!state.selectedMoodId) {
        set({
          offeredQuests: [],
          offerSetsByMoodId: {},
          offerLibraryRevision: libraryRevision,
        });
        return;
      }
      const offeredQuests = generateQuestOffers(
        state.selectedMoodId,
        options.getLibraryGames(),
        options.random,
      );
      set({
        offeredQuests,
        offerSetsByMoodId: {
          [state.selectedMoodId]: offeredQuests,
        },
        offerLibraryRevision: libraryRevision,
      });
    },
    dealNewCards: () => {
      const state = get();
      const now = options.now();
      if (
        state.currentSession ||
        !state.selectedMoodId ||
        moodSelectionExpired(state.moodSelectedAt, now) ||
        (state.profile.points < NEW_CARDS_COST &&
          state.profile.debugMode === false)
      ) {
        if (
          !state.currentSession &&
          state.selectedMoodId &&
          moodSelectionExpired(state.moodSelectedAt, now)
        ) {
          set(moodWindowState(state, now));
        }
        return false;
      }

      const offeredQuests = generateQuestOffers(
        state.selectedMoodId,
        options.getLibraryGames(),
        options.random,
        new Set(state.offeredQuests.map((offer) => offer.id)),
      );
      if (
        offeredQuests.length !== QUEST_OFFER_COUNT ||
        sameQuestOffers(offeredQuests, state.offeredQuests)
      ) {
        return false;
      }

      set({
        profile: {
          ...state.profile,
          points: state.profile.debugMode
            ? state.profile.points
            : state.profile.points - NEW_CARDS_COST,
        },
        offeredQuests,
        offerSetsByMoodId: {
          ...state.offerSetsByMoodId,
          [state.selectedMoodId]: offeredQuests,
        },
      });
      return true;
    },
    revealQuest: (offerId) => {
      const state = get();
      const now = options.now();
      if (
        state.currentSession ||
        !state.selectedMoodId ||
        moodSelectionExpired(state.moodSelectedAt, now)
      ) {
        if (
          !state.currentSession &&
          state.selectedMoodId &&
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
      if (
        !offer ||
        !quest ||
        !quest.moodIds.includes(state.selectedMoodId) ||
        offer.moodId !== state.selectedMoodId
      ) {
        return false;
      }

      set({
        currentSession: {
          sessionId: options.createSessionId(),
          moodId: state.selectedMoodId,
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
            pausedAt: Math.max(session.startedAt, pausedAt),
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
        (!state.profile.debugMode && state.profile.redRopes < 1)
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
              redRopes: state.profile.debugMode
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
      if (
        !state.profile.debugMode &&
        durationMs < quest.minimumDurationMinutes * 60_000
      ) {
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
      partialize: ({
        profile,
        selectedMoodId,
        moodSelectedAt,
        offeredQuests,
        offerSetsByMoodId,
        offerLibraryRevision,
        currentSession,
        completedSessions,
        stats,
      }) => ({
        profile,
        selectedMoodId,
        moodSelectedAt,
        offeredQuests,
        offerSetsByMoodId,
        offerLibraryRevision,
        currentSession,
        completedSessions,
        stats,
      }),
      migrate: (persistedState, version) =>
        migratePersistedQuestState(
          persistedState,
          version,
          options.now(),
          options.random,
          options.getLibraryGames(),
        ),
      merge: (persistedState, currentState) => ({
        ...currentState,
        ...sanitizePersistedQuestState(
          persistedState,
          options.now(),
          options.random,
          options.getLibraryGames(),
        ),
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
