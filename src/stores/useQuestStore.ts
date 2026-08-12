import { useStore } from "zustand";
import {
  createJSONStorage,
  persist,
  type PersistStorage,
} from "zustand/middleware";
import { createStore, type StateCreator } from "zustand/vanilla";
import { MOODS_BY_ID } from "../data/moods";
import { QUEST_CORES_BY_ID } from "../data/quests";
import {
  QUEST_OFFER_COUNT,
  RED_ROPE_BUNDLE_COST,
  RED_ROPE_BUNDLE_SIZE,
  SHUFFLE_COST,
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
  replayOfferSet,
  rotateSessionOffer,
  safeAdd,
  sameStringArray,
  sanitizeGameTitle,
  statsAfterCompletion,
} from "../domain/quest/rules";

export * from "../domain/quest/model";
export {
  activeSessionDurationMs,
  calculateCompletionPoints,
  canCompleteQuest,
  generateQuestOffers,
  minimumQuestDurationMs,
  sanitizeGameTitle,
} from "../domain/quest/rules";
export {
  migratePersistedQuestState,
  sanitizePersistedQuestState,
} from "../domain/quest/persistence";

type StoreOptions = {
  random?: () => number;
  now?: () => number;
  createSessionId?: () => string;
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
      const offerSetsByMoodId = expired
        ? {}
        : { ...state.offerSetsByMoodId };
      const cachedOffers = offerSetsByMoodId[moodId];
      const offeredQuestIds =
        cachedOffers?.length === QUEST_OFFER_COUNT
          ? [...cachedOffers]
          : generateQuestOffers(moodId, options.random);
      if (offeredQuestIds.length !== QUEST_OFFER_COUNT) return false;

      set({
        selectedMoodId: moodId,
        moodSelectedAt: expired ? now : state.moodSelectedAt,
        offeredQuestIds,
        offerSetsByMoodId: {
          ...offerSetsByMoodId,
          [moodId]: offeredQuestIds,
        },
      });
      return true;
    },
    editMood: () => {
      if (get().currentSession) return false;
      set({
        selectedMoodId: null,
        offeredQuestIds: [],
      });
      return true;
    },
    refreshMoodWindow: () => {
      set((state) => moodWindowState(state, options.now()));
    },
    shuffleOffers: () => {
      const state = get();
      const now = options.now();
      if (
        state.currentSession ||
        !state.selectedMoodId ||
        moodSelectionExpired(state.moodSelectedAt, now) ||
        state.profile.points < SHUFFLE_COST
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

      const offeredQuestIds = generateQuestOffers(
        state.selectedMoodId,
        options.random,
        new Set(state.offeredQuestIds),
      );
      if (
        offeredQuestIds.length !== QUEST_OFFER_COUNT ||
        sameStringArray(offeredQuestIds, state.offeredQuestIds)
      ) {
        return false;
      }

      set({
        profile: {
          ...state.profile,
          points: state.profile.points - SHUFFLE_COST,
        },
        offeredQuestIds,
        offerSetsByMoodId: {
          ...state.offerSetsByMoodId,
          [state.selectedMoodId]: offeredQuestIds,
        },
      });
      return true;
    },
    revealQuest: (questId) => {
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

      const quest = QUEST_CORES_BY_ID[questId];
      if (
        !quest ||
        quest.moodId !== state.selectedMoodId ||
        !state.offeredQuestIds.includes(questId)
      ) {
        return false;
      }

      set({
        currentSession: {
          sessionId: options.createSessionId(),
          moodId: state.selectedMoodId,
          questId,
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
              session.pausedTotalMs +
              Math.max(0, resumedAt - session.pausedAt),
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
              cancelledQuestCount: safeAdd(
                state.stats.cancelledQuestCount,
                1,
              ),
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
        state.profile.redRopes >
          Number.MAX_SAFE_INTEGER - RED_ROPE_BUNDLE_SIZE
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
    replayQuest: (questId) => {
      const state = get();
      const quest = QUEST_CORES_BY_ID[questId];
      if (state.currentSession || !quest) return false;

      const now = options.now();
      const expired = moodSelectionExpired(state.moodSelectedAt, now);
      const offerSetsByMoodId = expired
        ? {}
        : { ...state.offerSetsByMoodId };
      const offeredQuestIds = replayOfferSet(
        quest.moodId,
        quest.id,
        offerSetsByMoodId[quest.moodId],
        options.random,
      );
      if (offeredQuestIds.length !== QUEST_OFFER_COUNT) return false;

      set({
        selectedMoodId: quest.moodId,
        moodSelectedAt: expired ? now : state.moodSelectedAt,
        offeredQuestIds,
        offerSetsByMoodId: {
          ...offerSetsByMoodId,
          [quest.moodId]: offeredQuestIds,
        },
        currentSession: {
          sessionId: options.createSessionId(),
          moodId: quest.moodId,
          questId: quest.id,
          revealedAt: now,
          startedAt: null,
          pausedAt: null,
          pausedTotalMs: 0,
        },
      });
      return true;
    },
    completeQuest: (gameTitle) => {
      const state = get();
      const session = state.currentSession;
      if (
        !session ||
        session.startedAt === null ||
        session.pausedAt === null
      ) {
        return null;
      }

      const quest = QUEST_CORES_BY_ID[session.questId];
      if (!quest || quest.moodId !== session.moodId) return null;

      const completedAt = options.now();
      const durationMs = activeSessionDurationMs(session, completedAt);
      if (
        !state.profile.debugMode &&
        durationMs < quest.minimumDurationMinutes * 60_000
      ) {
        return null;
      }

      const sanitizedGameTitle = sanitizeGameTitle(gameTitle);
      const pointsAwarded = calculateCompletionPoints(durationMs);
      const completedSession: CompletedSession = {
        id: session.sessionId,
        moodId: session.moodId,
        questId: session.questId,
        durationMs,
        pointsAwarded,
        completedAt,
        ...(sanitizedGameTitle ? { gameTitle: sanitizedGameTitle } : {}),
      };
      const rotatedOffers = rotateSessionOffer(
        state,
        session,
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
        offeredQuestIds,
        offerSetsByMoodId,
        currentSession,
        completedSessions,
        stats,
        legacyCompletionCount,
      }) => ({
        profile,
        selectedMoodId,
        moodSelectedAt,
        offeredQuestIds,
        offerSetsByMoodId,
        currentSession,
        completedSessions,
        stats,
        legacyCompletionCount,
      }),
      migrate: (persistedState, version) =>
        migratePersistedQuestState(
          persistedState,
          version,
          options.now(),
          options.random,
        ),
      merge: (persistedState, currentState) => ({
        ...currentState,
        ...sanitizePersistedQuestState(
          persistedState,
          options.now(),
          options.random,
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
