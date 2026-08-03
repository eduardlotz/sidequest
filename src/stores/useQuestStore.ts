import { useStore } from "zustand";
import {
  createJSONStorage,
  persist,
  type PersistStorage,
} from "zustand/middleware";
import { createStore, type StateCreator } from "zustand/vanilla";
import {
  MOODS,
  MOODS_BY_ID,
  type MoodDefinition,
  type MoodId,
} from "../data/moods";
import {
  QUEST_CORES_BY_ID,
  questCoresForMood,
  type QuestDefinition,
} from "../data/quests";

export const STORE_KEY = "sidequest.quests";
export const STORE_VERSION = 8;
export const MOOD_RESET_MS = 4 * 60 * 60 * 1_000;
export const SHUFFLE_COST = 25;
export const QUEST_OFFER_COUNT = 3;
export const STORED_COMPLETION_LIMIT = 500;
export const INITIAL_RED_ROPES = 3;
export const RED_ROPE_BUNDLE_SIZE = 3;
export const RED_ROPE_BUNDLE_COST = 50;
export const POINTS_PER_MINUTE = 5;
export const POINTS_DURATION_CAP_MS = 60 * 60 * 1_000;
export const MAX_COMPLETION_POINTS = 300;
export const MAX_GAME_TITLE_LENGTH = 80;

export const AVATAR_THEMES = [
  "default",
  "wizard",
  "party-hat",
  "cook",
  "baseball-cap",
  "plumbob",
  "tuxedo",
  "graduation-hat",
  "crown",
  "pirate-hat",
  "cowboy-hat",
] as const;

export type AvatarTheme = (typeof AVATAR_THEMES)[number];

export type UserProfile = {
  points: number;
  redRopes: number;
  avatarTheme: AvatarTheme;
  debugMode: boolean;
};

export type QuestSession = {
  sessionId: string;
  moodId: MoodId;
  questId: string;
  revealedAt: number;
  startedAt: number | null;
  pausedAt: number | null;
  pausedTotalMs: number;
};

export type CompletedSession = {
  id: string;
  moodId: MoodId;
  questId: string;
  durationMs: number;
  pointsAwarded: number;
  completedAt: number;
  gameTitle?: string;
};

export type QuestStats = {
  completedQuestCount: number;
  uniqueCompletedQuestCount: number;
  totalPlayedMs: number;
  cancelledQuestCount: number;
  repeatedCompletionCount: number;
  completionCountsByQuestId: Record<string, number>;
  completionCountsByMoodId: Partial<Record<MoodId, number>>;
  latestCompletionAtByMoodId: Partial<Record<MoodId, number>>;
  favoriteMoodId: MoodId | null;
};

export type QuestState = {
  profile: UserProfile;
  selectedMoodId: MoodId | null;
  moodSelectedAt: number | null;
  offeredQuestIds: string[];
  offerSetsByMoodId: Partial<Record<MoodId, string[]>>;
  currentSession: QuestSession | null;
  completedSessions: CompletedSession[];
  stats: QuestStats;
  legacyCompletionCount: number;
};

type QuestActions = {
  selectMood: (moodId: MoodId) => boolean;
  editMood: () => boolean;
  refreshMoodWindow: () => void;
  shuffleOffers: () => boolean;
  revealQuest: (questId: string) => boolean;
  startQuest: (startedAt: number) => void;
  pauseQuest: (pausedAt: number) => void;
  resumeQuest: (resumedAt: number) => void;
  discardCurrentSession: () => boolean;
  purchaseRedRopes: () => boolean;
  setDebugMode: (enabled: boolean) => void;
  replayQuest: (questId: string) => boolean;
  completeQuest: (gameTitle?: string) => CompletedSession | null;
};

export type QuestStore = QuestState & QuestActions;

export type PersistedQuestState = Pick<
  QuestState,
  | "profile"
  | "selectedMoodId"
  | "moodSelectedAt"
  | "offeredQuestIds"
  | "offerSetsByMoodId"
  | "currentSession"
  | "completedSessions"
  | "stats"
  | "legacyCompletionCount"
>;

export type Quest = QuestDefinition & {
  mood: MoodDefinition;
  completionCount: number;
};

export type CompletedQuest = CompletedSession & {
  mood: MoodDefinition;
  quest: QuestDefinition;
};

type StoreOptions = {
  random?: () => number;
  now?: () => number;
  createSessionId?: () => string;
};

export const DEFAULT_PROFILE: UserProfile = {
  points: 0,
  redRopes: INITIAL_RED_ROPES,
  avatarTheme: "default",
  debugMode: false,
};

export const DEFAULT_QUEST_STATS: QuestStats = {
  completedQuestCount: 0,
  uniqueCompletedQuestCount: 0,
  totalPlayedMs: 0,
  cancelledQuestCount: 0,
  repeatedCompletionCount: 0,
  completionCountsByQuestId: {},
  completionCountsByMoodId: {},
  latestCompletionAtByMoodId: {},
  favoriteMoodId: null,
};

function createDefaultState(): QuestState {
  return {
    profile: { ...DEFAULT_PROFILE },
    selectedMoodId: null,
    moodSelectedAt: null,
    offeredQuestIds: [],
    offerSetsByMoodId: {},
    currentSession: null,
    completedSessions: [],
    stats: cloneQuestStats(DEFAULT_QUEST_STATS),
    legacyCompletionCount: 0,
  };
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
    discardCurrentSession: () => {
      const state = get();
      const session = state.currentSession;
      if (
        !session ||
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

export function generateQuestOffers(
  moodId: MoodId,
  random: () => number = Math.random,
  excludedIds: ReadonlySet<string> = new Set(),
  count = QUEST_OFFER_COUNT,
) {
  const eligible = questCoresForMood(moodId);
  const preferred = eligible.filter((quest) => !excludedIds.has(quest.id));
  const pool = preferred.length >= count ? preferred : eligible;
  return sampleWithoutReplacement(pool, count, random).map(
    (quest) => quest.id,
  );
}

export function activeSessionDurationMs(
  session: QuestSession,
  now: number = Date.now(),
) {
  if (session.startedAt === null) return 0;
  const endedAt = session.pausedAt ?? now;
  return safeNonNegativeInteger(
    endedAt - session.startedAt - session.pausedTotalMs,
  );
}

export function minimumQuestDurationMs(questId: string) {
  const quest = QUEST_CORES_BY_ID[questId];
  return quest
    ? safeNonNegativeInteger(quest.minimumDurationMinutes * 60_000)
    : null;
}

export function canCompleteQuest(
  session: QuestSession | null,
  now: number = Date.now(),
  debugMode: boolean = false,
) {
  if (
    !session ||
    session.startedAt === null ||
    session.pausedAt === null
  ) {
    return false;
  }
  if (debugMode) return true;
  const minimumDurationMs = minimumQuestDurationMs(session.questId);
  return (
    minimumDurationMs !== null &&
    activeSessionDurationMs(session, now) >= minimumDurationMs
  );
}

export function calculateCompletionPoints(durationMs: number) {
  const scoringDurationMs = Math.min(
    safeNonNegativeInteger(durationMs),
    POINTS_DURATION_CAP_MS,
  );
  return Math.min(
    MAX_COMPLETION_POINTS,
    Math.floor((scoringDurationMs * POINTS_PER_MINUTE) / 60_000),
  );
}

export function sanitizeGameTitle(value: unknown) {
  if (typeof value !== "string") return undefined;
  const normalized = value.trim().replace(/\s+/g, " ");
  if (!normalized) return undefined;
  return normalized.slice(0, MAX_GAME_TITLE_LENGTH).trim() || undefined;
}

function replayOfferSet(
  moodId: MoodId,
  questId: string,
  cachedOffers: readonly string[] | undefined,
  random: () => number,
) {
  const validCachedOffers = uniqueStrings(cachedOffers).filter(
    (candidateId) => QUEST_CORES_BY_ID[candidateId]?.moodId === moodId,
  );
  if (
    validCachedOffers.length === QUEST_OFFER_COUNT &&
    validCachedOffers.includes(questId)
  ) {
    return validCachedOffers;
  }

  const offeredQuestIds = [
    questId,
    ...validCachedOffers.filter((candidateId) => candidateId !== questId),
  ].slice(0, QUEST_OFFER_COUNT);
  if (offeredQuestIds.length < QUEST_OFFER_COUNT) {
    const generated = generateQuestOffers(
      moodId,
      random,
      new Set(offeredQuestIds),
    );
    for (const generatedQuestId of generated) {
      if (offeredQuestIds.includes(generatedQuestId)) continue;
      offeredQuestIds.push(generatedQuestId);
      if (offeredQuestIds.length === QUEST_OFFER_COUNT) break;
    }
  }
  return offeredQuestIds;
}

function statsAfterCompletion(
  stats: QuestStats,
  completion: CompletedSession,
): QuestStats {
  const previousQuestCount =
    stats.completionCountsByQuestId[completion.questId] ?? 0;
  const completionCountsByQuestId = {
    ...stats.completionCountsByQuestId,
    [completion.questId]: safeAdd(previousQuestCount, 1),
  };
  const completionCountsByMoodId = {
    ...stats.completionCountsByMoodId,
    [completion.moodId]: safeAdd(
      stats.completionCountsByMoodId[completion.moodId] ?? 0,
      1,
    ),
  };
  const latestCompletionAtByMoodId = {
    ...stats.latestCompletionAtByMoodId,
    [completion.moodId]: Math.max(
      stats.latestCompletionAtByMoodId[completion.moodId] ?? 0,
      completion.completedAt,
    ),
  };

  return {
    completedQuestCount: safeAdd(stats.completedQuestCount, 1),
    uniqueCompletedQuestCount: safeAdd(
      stats.uniqueCompletedQuestCount,
      previousQuestCount === 0 ? 1 : 0,
    ),
    totalPlayedMs: safeAdd(stats.totalPlayedMs, completion.durationMs),
    cancelledQuestCount: stats.cancelledQuestCount,
    repeatedCompletionCount: safeAdd(
      stats.repeatedCompletionCount,
      previousQuestCount > 0 ? 1 : 0,
    ),
    completionCountsByQuestId,
    completionCountsByMoodId,
    latestCompletionAtByMoodId,
    favoriteMoodId: favoriteMoodId(
      completionCountsByMoodId,
      latestCompletionAtByMoodId,
    ),
  };
}

function rotateSessionOffer(
  state: QuestState,
  session: QuestSession,
  random: () => number,
): Pick<QuestState, "offeredQuestIds" | "offerSetsByMoodId"> {
  const storedOffers = state.offerSetsByMoodId[session.moodId];
  const moodOffers = storedOffers?.length === QUEST_OFFER_COUNT
    ? [...storedOffers]
    : state.selectedMoodId === session.moodId
      ? [...state.offeredQuestIds]
      : [];
  const slotIndex = moodOffers.indexOf(session.questId);
  if (slotIndex < 0) {
    return {
      offeredQuestIds: state.offeredQuestIds,
      offerSetsByMoodId: state.offerSetsByMoodId,
    };
  }

  const replacementId = generateQuestOffers(
    session.moodId,
    random,
    new Set(moodOffers),
    1,
  )[0];
  if (!replacementId) {
    return {
      offeredQuestIds: state.offeredQuestIds,
      offerSetsByMoodId: state.offerSetsByMoodId,
    };
  }

  moodOffers[slotIndex] = replacementId;
  return {
    offeredQuestIds:
      state.selectedMoodId === session.moodId
        ? moodOffers
        : state.offeredQuestIds,
    offerSetsByMoodId: {
      ...state.offerSetsByMoodId,
      [session.moodId]: moodOffers,
    },
  };
}

export function migratePersistedQuestState(
  persistedState: unknown,
  version: number,
  now: number = Date.now(),
  random: () => number = Math.random,
): PersistedQuestState {
  if (
    version === STORE_VERSION ||
    version === 7 ||
    version === 6 ||
    version === 4
  ) {
    return sanitizePersistedQuestState(persistedState, now, random);
  }
  if (version === 5) {
    const sanitized = sanitizePersistedQuestState(
      persistedState,
      now,
      random,
    );
    const session = sanitized.currentSession;

    if (!session) {
      return {
        ...sanitized,
        selectedMoodId: null,
        moodSelectedAt: null,
        offeredQuestIds: [],
        offerSetsByMoodId: {},
      };
    }

    const offeredQuestIds = generateQuestOffers(
      session.moodId,
      random,
      new Set([session.questId]),
    );
    return {
      ...sanitized,
      offeredQuestIds,
      offerSetsByMoodId: {
        [session.moodId]: offeredQuestIds,
      },
    };
  }
  if (version === 2 || version === 3) {
    return migrateLegacyQuestState(persistedState);
  }
  return createDefaultState();
}

export function sanitizePersistedQuestState(
  value: unknown,
  now: number = Date.now(),
  random: () => number = Math.random,
): PersistedQuestState {
  if (!isRecord(value)) return createDefaultState();

  const profile = profileFromUnknown(value.profile);
  const completedSessions = completionsFromUnknown(value.completedSessions);
  const stats = statsFromUnknown(value.stats, completedSessions);
  const currentSession = sessionFromUnknown(value.currentSession);
  const storedMoodId = isMoodId(value.selectedMoodId)
    ? value.selectedMoodId
    : null;
  const selectedMoodId = currentSession?.moodId ?? storedMoodId;
  const storedMoodSelectedAt = finiteNumber(value.moodSelectedAt);
  const moodSelectedAt =
    currentSession && storedMoodSelectedAt === null
      ? currentSession.revealedAt
      : storedMoodSelectedAt;
  const expired =
    !currentSession && moodSelectionExpired(moodSelectedAt, now);

  if (expired) {
    return {
      profile,
      selectedMoodId: null,
      moodSelectedAt: null,
      offeredQuestIds: [],
      offerSetsByMoodId: {},
      currentSession,
      completedSessions,
      stats,
      legacyCompletionCount: safeNonNegativeInteger(
        value.legacyCompletionCount,
      ),
    };
  }

  const offerSetsByMoodId = offerSetsFromUnknown(
    value.offerSetsByMoodId,
    random,
  );
  if (selectedMoodId && !offerSetsByMoodId[selectedMoodId]) {
    offerSetsByMoodId[selectedMoodId] = sanitizedOfferSet(
      selectedMoodId,
      value.offeredQuestIds,
      random,
    );
  }
  const offeredQuestIds = selectedMoodId
    ? [...(offerSetsByMoodId[selectedMoodId] ?? [])]
    : [];

  return {
    profile,
    selectedMoodId,
    moodSelectedAt,
    offeredQuestIds,
    offerSetsByMoodId,
    currentSession,
    completedSessions,
    stats,
    legacyCompletionCount: safeNonNegativeInteger(
      value.legacyCompletionCount,
    ),
  };
}

function migrateLegacyQuestState(value: unknown): PersistedQuestState {
  if (!isRecord(value)) return createDefaultState();
  return {
    profile: {
      points: 0,
      redRopes: INITIAL_RED_ROPES,
      avatarTheme: avatarThemeFromUnknown(
        isRecord(value.profile) ? value.profile.avatarTheme : undefined,
      ),
      debugMode: false,
    },
    selectedMoodId: null,
    moodSelectedAt: null,
    offeredQuestIds: [],
    offerSetsByMoodId: {},
    currentSession: null,
    completedSessions: [],
    stats: cloneQuestStats(DEFAULT_QUEST_STATS),
    legacyCompletionCount: legacyProgressCount(value.progressByQuestId),
  };
}

function offerSetsFromUnknown(
  value: unknown,
  random: () => number,
): Partial<Record<MoodId, string[]>> {
  if (!isRecord(value)) return {};
  const offerSets: Partial<Record<MoodId, string[]>> = {};

  for (const [moodId, offers] of Object.entries(value)) {
    if (!isMoodId(moodId) || !Array.isArray(offers)) continue;
    offerSets[moodId] = sanitizedOfferSet(moodId, offers, random);
  }

  return offerSets;
}

function sanitizedOfferSet(
  moodId: MoodId,
  value: unknown,
  random: () => number,
) {
  const offeredQuestIds = uniqueStrings(value).filter(
    (questId) => QUEST_CORES_BY_ID[questId]?.moodId === moodId,
  );
  if (offeredQuestIds.length < QUEST_OFFER_COUNT) {
    const generated = generateQuestOffers(
      moodId,
      random,
      new Set(offeredQuestIds),
    );
    for (const questId of generated) {
      if (offeredQuestIds.includes(questId)) continue;
      offeredQuestIds.push(questId);
      if (offeredQuestIds.length === QUEST_OFFER_COUNT) break;
    }
  }
  return offeredQuestIds.slice(0, QUEST_OFFER_COUNT);
}

function profileFromUnknown(value: unknown): UserProfile {
  if (!isRecord(value)) return { ...DEFAULT_PROFILE };
  const storedRedRopes = finiteNumber(value.redRopes);
  return {
    points: safeNonNegativeInteger(value.points),
    redRopes:
      storedRedRopes === null
        ? INITIAL_RED_ROPES
        : safeNonNegativeInteger(storedRedRopes),
    avatarTheme: avatarThemeFromUnknown(value.avatarTheme),
    debugMode: value.debugMode === true,
  };
}

function sessionFromUnknown(value: unknown): QuestSession | null {
  if (!isRecord(value)) return null;
  if (
    typeof value.sessionId !== "string" ||
    !value.sessionId ||
    !isMoodId(value.moodId) ||
    typeof value.questId !== "string"
  ) {
    return null;
  }
  const quest = QUEST_CORES_BY_ID[value.questId];
  if (!quest || quest.moodId !== value.moodId) return null;

  const revealedAt = finiteNumber(value.revealedAt);
  if (revealedAt === null) return null;
  const storedStartedAt = finiteNumber(value.startedAt);
  const startedAt =
    storedStartedAt === null ? null : Math.max(revealedAt, storedStartedAt);
  const storedPausedAt = finiteNumber(value.pausedAt);

  return {
    sessionId: value.sessionId,
    moodId: value.moodId,
    questId: value.questId,
    revealedAt,
    startedAt,
    pausedAt:
      startedAt === null || storedPausedAt === null
        ? null
        : Math.max(startedAt, storedPausedAt),
    pausedTotalMs: safeNonNegativeInteger(value.pausedTotalMs),
  };
}

function completionsFromUnknown(value: unknown): CompletedSession[] {
  if (!Array.isArray(value)) return [];
  const completions: CompletedSession[] = [];
  const ids = new Set<string>();

  for (const entry of value) {
    if (
      !isRecord(entry) ||
      typeof entry.id !== "string" ||
      !entry.id ||
      ids.has(entry.id) ||
      !isMoodId(entry.moodId) ||
      typeof entry.questId !== "string"
    ) {
      continue;
    }
    const quest = QUEST_CORES_BY_ID[entry.questId];
    if (!quest || quest.moodId !== entry.moodId) continue;

    const completedAt = finiteNumber(entry.completedAt);
    if (completedAt === null) continue;
    const gameTitle = sanitizeGameTitle(entry.gameTitle);
    ids.add(entry.id);
    completions.push({
      id: entry.id,
      moodId: entry.moodId,
      questId: entry.questId,
      durationMs: safeNonNegativeInteger(entry.durationMs),
      pointsAwarded: safeNonNegativeInteger(entry.pointsAwarded),
      completedAt: safeNonNegativeInteger(completedAt),
      ...(gameTitle ? { gameTitle } : {}),
    });
    if (completions.length === STORED_COMPLETION_LIMIT) break;
  }

  return completions;
}

function statsFromUnknown(
  value: unknown,
  completedSessions: readonly CompletedSession[],
): QuestStats {
  const storedStats = isRecord(value) ? value : {};
  const completionCountsByQuestId: Record<string, number> = {};
  if (isRecord(storedStats.completionCountsByQuestId)) {
    for (const [questId, storedCount] of Object.entries(
      storedStats.completionCountsByQuestId,
    )) {
      if (!QUEST_CORES_BY_ID[questId]) continue;
      const count = safeNonNegativeInteger(storedCount);
      if (count > 0) completionCountsByQuestId[questId] = count;
    }
  }

  const historyCountsByQuestId: Record<string, number> = {};
  for (const completion of completedSessions) {
    historyCountsByQuestId[completion.questId] = safeAdd(
      historyCountsByQuestId[completion.questId] ?? 0,
      1,
    );
  }
  for (const [questId, historyCount] of Object.entries(
    historyCountsByQuestId,
  )) {
    completionCountsByQuestId[questId] = Math.max(
      completionCountsByQuestId[questId] ?? 0,
      historyCount,
    );
  }

  const completionCountsByMoodId: Partial<Record<MoodId, number>> = {};
  let completedQuestCount = 0;
  let repeatedCompletionCount = 0;
  for (const [questId, count] of Object.entries(
    completionCountsByQuestId,
  )) {
    const quest = QUEST_CORES_BY_ID[questId];
    if (!quest) continue;
    completedQuestCount = safeAdd(completedQuestCount, count);
    repeatedCompletionCount = safeAdd(
      repeatedCompletionCount,
      Math.max(0, count - 1),
    );
    completionCountsByMoodId[quest.moodId] = safeAdd(
      completionCountsByMoodId[quest.moodId] ?? 0,
      count,
    );
  }

  const latestCompletionAtByMoodId: Partial<Record<MoodId, number>> = {};
  if (isRecord(storedStats.latestCompletionAtByMoodId)) {
    for (const [moodId, storedCompletedAt] of Object.entries(
      storedStats.latestCompletionAtByMoodId,
    )) {
      if (!isMoodId(moodId)) continue;
      const completedAt = finiteNumber(storedCompletedAt);
      if (completedAt !== null) {
        latestCompletionAtByMoodId[moodId] =
          safeNonNegativeInteger(completedAt);
      }
    }
  }
  for (const completion of completedSessions) {
    latestCompletionAtByMoodId[completion.moodId] = Math.max(
      latestCompletionAtByMoodId[completion.moodId] ?? 0,
      completion.completedAt,
    );
  }

  const historyDurationMs = completedSessions.reduce(
    (total, completion) => safeAdd(total, completion.durationMs),
    0,
  );

  return {
    completedQuestCount,
    uniqueCompletedQuestCount: Object.keys(completionCountsByQuestId).length,
    totalPlayedMs: Math.max(
      safeNonNegativeInteger(storedStats.totalPlayedMs),
      historyDurationMs,
    ),
    cancelledQuestCount: safeNonNegativeInteger(
      storedStats.cancelledQuestCount,
    ),
    repeatedCompletionCount,
    completionCountsByQuestId,
    completionCountsByMoodId,
    latestCompletionAtByMoodId,
    favoriteMoodId: favoriteMoodId(
      completionCountsByMoodId,
      latestCompletionAtByMoodId,
    ),
  };
}

function favoriteMoodId(
  completionCountsByMoodId: Partial<Record<MoodId, number>>,
  latestCompletionAtByMoodId: Partial<Record<MoodId, number>>,
) {
  let favorite: MoodId | null = null;
  let favoriteCount = 0;
  let favoriteCompletedAt = 0;

  for (const mood of MOODS) {
    const count = completionCountsByMoodId[mood.id] ?? 0;
    const completedAt = latestCompletionAtByMoodId[mood.id] ?? 0;
    if (
      count > favoriteCount ||
      (count > 0 &&
        count === favoriteCount &&
        completedAt > favoriteCompletedAt)
    ) {
      favorite = mood.id;
      favoriteCount = count;
      favoriteCompletedAt = completedAt;
    }
  }

  return favorite;
}

function cloneQuestStats(stats: QuestStats): QuestStats {
  return {
    ...stats,
    completionCountsByQuestId: { ...stats.completionCountsByQuestId },
    completionCountsByMoodId: { ...stats.completionCountsByMoodId },
    latestCompletionAtByMoodId: {
      ...stats.latestCompletionAtByMoodId,
    },
  };
}

function moodWindowState(
  state: QuestState,
  now: number,
): Partial<QuestState> {
  if (state.currentSession) {
    return {
      ...state,
      selectedMoodId: state.currentSession.moodId,
    };
  }
  if (!moodSelectionExpired(state.moodSelectedAt, now)) {
    return state;
  }
  return {
    ...state,
    selectedMoodId: null,
    moodSelectedAt: null,
    offeredQuestIds: [],
    offerSetsByMoodId: {},
  };
}

function moodSelectionExpired(
  selectedAt: number | null,
  now: number,
) {
  return selectedAt === null || now - selectedAt >= MOOD_RESET_MS;
}

function sampleWithoutReplacement<T>(
  values: readonly T[],
  count: number,
  random: () => number,
) {
  const available = [...values];
  const selected: T[] = [];
  while (selected.length < count && available.length > 0) {
    const index = randomIndex(available.length, random);
    selected.push(available.splice(index, 1)[0]);
  }
  return selected;
}

function legacyProgressCount(value: unknown): number {
  if (!isRecord(value)) return 0;
  return Object.values(value).reduce<number>((total, progress) => {
    if (!isRecord(progress)) return total;
    const storedCount = finiteNumber(progress.completionCount);
    if (storedCount !== null) {
      return total + safeNonNegativeInteger(storedCount);
    }
    return total + legacyCompletedGamesCount(progress.completedGames);
  }, 0);
}

function legacyCompletedGamesCount(value: unknown) {
  if (!Array.isArray(value)) return 0;
  return value.filter(
    (entry) =>
      isRecord(entry) &&
      finiteNumber(entry.highscoreMs) !== null &&
      finiteNumber(entry.achievedAt) !== null,
  ).length;
}

function randomIndex(length: number, random: () => number) {
  if (length <= 1) return 0;
  const value = random();
  const normalized = Number.isFinite(value)
    ? Math.max(0, Math.min(0.999999999, value))
    : 0;
  return Math.floor(normalized * length);
}

function sameStringArray(a: readonly string[], b: readonly string[]) {
  return a.length === b.length && a.every((value, index) => value === b[index]);
}

function uniqueStrings(value: unknown): string[] {
  return Array.from(
    new Set(
      Array.isArray(value)
        ? value.filter(
            (entry): entry is string => typeof entry === "string",
          )
        : [],
    ),
  );
}

function isMoodId(value: unknown): value is MoodId {
  return (
    typeof value === "string" &&
    Boolean(MOODS_BY_ID[value as MoodId])
  );
}

function avatarThemeFromUnknown(value: unknown): AvatarTheme {
  return isAvatarTheme(value) ? value : "default";
}

function isAvatarTheme(value: unknown): value is AvatarTheme {
  return (
    typeof value === "string" &&
    (AVATAR_THEMES as readonly string[]).includes(value)
  );
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function finiteNumber(value: unknown) {
  return typeof value === "number" && Number.isFinite(value) ? value : null;
}

function safeNonNegativeInteger(value: unknown) {
  const number = finiteNumber(value);
  return number === null
    ? 0
    : Math.min(Number.MAX_SAFE_INTEGER, Math.max(0, Math.floor(number)));
}

function safeAdd(left: number, right: number) {
  return Math.min(
    Number.MAX_SAFE_INTEGER,
    safeNonNegativeInteger(left) + safeNonNegativeInteger(right),
  );
}
