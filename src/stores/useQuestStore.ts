import { useStore } from "zustand";
import {
  createJSONStorage,
  persist,
  type PersistStorage,
} from "zustand/middleware";
import { createStore, type StateCreator } from "zustand/vanilla";
import {
  MOODS_BY_ID,
  type MoodDefinition,
  type MoodId,
} from "../data/moods";
import {
  QUESTS_BY_ID,
  questsForMood,
  type QuestDefinition,
} from "../data/quests";

export const STORE_KEY = "sidequest.quests";
export const STORE_VERSION = 6;
export const MOOD_RESET_MS = 4 * 60 * 60 * 1_000;
export const SHUFFLE_COST = 25;
export const QUEST_OFFER_COUNT = 3;
export const STORED_COMPLETION_LIMIT = 500;

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
  avatarTheme: AvatarTheme;
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
};

export type QuestState = {
  profile: UserProfile;
  selectedMoodId: MoodId | null;
  moodSelectedAt: number | null;
  offeredQuestIds: string[];
  offerSetsByMoodId: Partial<Record<MoodId, string[]>>;
  currentSession: QuestSession | null;
  completedSessions: CompletedSession[];
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
  discardCurrentSession: () => void;
  completeQuest: (durationMs: number) => boolean | null;
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
  avatarTheme: "default",
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

      const quest = QUESTS_BY_ID[questId];
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
      set((state) => {
        const session = state.currentSession;
        if (!session) return state;
        const rotatedOffers = rotateSessionOffer(
          state,
          session,
          options.random,
        );
        return moodWindowState(
          {
            ...state,
            ...rotatedOffers,
            currentSession: null,
          },
          options.now(),
        );
      });
    },
    completeQuest: (durationMs) => {
      const state = get();
      const session = state.currentSession;
      if (
        !session ||
        session.startedAt === null ||
        session.pausedAt === null
      ) {
        return null;
      }

      const quest = QUESTS_BY_ID[session.questId];
      if (!quest || quest.moodId !== session.moodId) return null;

      const pointsAwarded = safeNonNegativeInteger(quest.rewardPoints);
      const completedSession: CompletedSession = {
        id: session.sessionId,
        moodId: session.moodId,
        questId: session.questId,
        durationMs: safeNonNegativeInteger(durationMs),
        pointsAwarded,
        completedAt: options.now(),
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
            points: safeNonNegativeInteger(
              state.profile.points + pointsAwarded,
            ),
          },
          currentSession: null,
          completedSessions: [
            completedSession,
            ...state.completedSessions.filter(
              (completion) => completion.id !== completedSession.id,
            ),
          ].slice(0, STORED_COMPLETION_LIMIT),
        },
        options.now(),
      );

      set(nextState);
      return true;
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
        legacyCompletionCount,
      }) => ({
        profile,
        selectedMoodId,
        moodSelectedAt,
        offeredQuestIds,
        offerSetsByMoodId,
        currentSession,
        completedSessions,
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

export function hydrateQuest(
  questId: string,
  completedSessions: readonly CompletedSession[],
): Quest | null {
  const quest = QUESTS_BY_ID[questId];
  if (!quest) return null;
  const mood = MOODS_BY_ID[quest.moodId];
  if (!mood) return null;

  return {
    ...quest,
    mood,
    completionCount: completedSessions.filter(
      (completion) => completion.questId === questId,
    ).length,
  };
}

export function hydrateCompletedQuest(
  completion: CompletedSession,
): CompletedQuest | null {
  const quest = QUESTS_BY_ID[completion.questId];
  const mood = MOODS_BY_ID[completion.moodId];
  if (!quest || !mood || quest.moodId !== mood.id) return null;

  return {
    ...completion,
    mood,
    quest,
  };
}

export function generateQuestOffers(
  moodId: MoodId,
  random: () => number = Math.random,
  excludedIds: ReadonlySet<string> = new Set(),
  count = QUEST_OFFER_COUNT,
) {
  const eligible = questsForMood(moodId);
  const preferred = eligible.filter((quest) => !excludedIds.has(quest.id));
  const pool = preferred.length >= count ? preferred : eligible;
  return sampleWithoutReplacement(pool, count, random).map(
    (quest) => quest.id,
  );
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
  if (version === STORE_VERSION || version === 4) {
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
      completedSessions: completionsFromUnknown(value.completedSessions),
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
    completedSessions: completionsFromUnknown(value.completedSessions),
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
      avatarTheme: avatarThemeFromUnknown(
        isRecord(value.profile) ? value.profile.avatarTheme : undefined,
      ),
    },
    selectedMoodId: null,
    moodSelectedAt: null,
    offeredQuestIds: [],
    offerSetsByMoodId: {},
    currentSession: null,
    completedSessions: [],
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
    (questId) => QUESTS_BY_ID[questId]?.moodId === moodId,
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
  return {
    points: safeNonNegativeInteger(value.points),
    avatarTheme: avatarThemeFromUnknown(value.avatarTheme),
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
  const quest = QUESTS_BY_ID[value.questId];
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
    const quest = QUESTS_BY_ID[entry.questId];
    if (!quest || quest.moodId !== entry.moodId) continue;

    const completedAt = finiteNumber(entry.completedAt);
    if (completedAt === null) continue;
    ids.add(entry.id);
    completions.push({
      id: entry.id,
      moodId: entry.moodId,
      questId: entry.questId,
      durationMs: safeNonNegativeInteger(entry.durationMs),
      pointsAwarded: safeNonNegativeInteger(entry.pointsAwarded),
      completedAt,
    });
    if (completions.length === STORED_COMPLETION_LIMIT) break;
  }

  return completions;
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
  return number === null ? 0 : Math.max(0, Math.floor(number));
}
