import { useStore } from "zustand";
import {
  createJSONStorage,
  persist,
  type PersistStorage,
} from "zustand/middleware";
import { createStore, type StateCreator } from "zustand/vanilla";
import {
  MODIFIERS_BY_ID,
  MOODS_BY_ID,
  OBJECTIVES_BY_ID,
  modifierFitsObjective,
  objectivesForMood,
  type ModifierDefinition,
  type MoodDefinition,
  type MoodId,
  type ObjectiveDefinition,
} from "../data/decks";
import { QUESTS_BY_ID as LEGACY_QUESTS_BY_ID } from "../data/quests";

export const STORE_KEY = "sidequest.quests";
export const STORE_VERSION = 6;
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
export type OnlinePreference = "include" | "exclude";

export type UserProfile = {
  onlinePreference: OnlinePreference;
  avatarTheme: AvatarTheme;
};

export type ProfileInput = {
  onlinePreference: OnlinePreference;
  avatarTheme?: AvatarTheme;
};

export type QuestSession = {
  sessionId: string;
  moodId: MoodId;
  objectiveId: string;
  modifierIds: string[];
  revealedAt: number;
  startedAt: number | null;
  pausedAt: number | null;
  pausedTotalMs: number;
};

export type CompletedSession = {
  id: string;
  moodId: MoodId;
  objectiveId: string;
  modifierIds: string[];
  durationMs: number;
  completedAt: number;
};

export type LegacyCompletion = {
  questId: string;
  title: string;
  completionCount: number;
};

export type QuestState = {
  profile: UserProfile;
  selectedMoodId: MoodId | null;
  currentSession: QuestSession | null;
  completedSessions: CompletedSession[];
  legacyCompletions: LegacyCompletion[];
};

type QuestActions = {
  updateProfile: (profileInput: ProfileInput) => boolean;
  selectMood: (moodId: MoodId) => boolean;
  editMood: () => void;
  selectObjective: (objectiveId: string) => boolean;
  toggleModifier: (modifierId: string) => boolean;
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
  | "currentSession"
  | "completedSessions"
  | "legacyCompletions"
>;

export type Quest = ObjectiveDefinition & {
  mood: MoodDefinition;
  modifiers: ModifierDefinition[];
  completionCount: number;
};

export type CompletedQuest = CompletedSession & {
  mood: MoodDefinition;
  objective: ObjectiveDefinition;
  modifiers: ModifierDefinition[];
};

type StoreOptions = {
  now?: () => number;
  createSessionId?: () => string;
};

export const DEFAULT_PROFILE: UserProfile = {
  onlinePreference: "include",
  avatarTheme: "default",
};

function createDefaultState(): QuestState {
  return {
    profile: { ...DEFAULT_PROFILE },
    selectedMoodId: null,
    currentSession: null,
    completedSessions: [],
    legacyCompletions: [],
  };
}

function createQuestState(
  options: Required<StoreOptions>,
): StateCreator<QuestStore> {
  return (set, get) => ({
    ...createDefaultState(),
    updateProfile: (profileInput) => {
      const state = get();
      const profile = validatedProfile(profileInput, state.profile.avatarTheme);
      if (!profile) return false;
      set({ profile });
      return true;
    },
    selectMood: (moodId) => {
      const state = get();
      if (
        state.currentSession ||
        !MOODS_BY_ID[moodId]
      ) {
        return false;
      }
      set({ selectedMoodId: moodId });
      return true;
    },
    editMood: () => {
      if (get().currentSession) return;
      set({ selectedMoodId: null });
    },
    selectObjective: (objectiveId) => {
      const state = get();
      const moodId = state.selectedMoodId;
      if (!moodId || state.currentSession || !OBJECTIVES_BY_ID[objectiveId]) {
        return false;
      }
      const eligible = objectivesForMood(
        moodId,
        state.profile.onlinePreference !== "exclude",
      );
      if (!eligible.some((objective) => objective.id === objectiveId)) {
        return false;
      }
      set({
        currentSession: {
          sessionId: options.createSessionId(),
          moodId,
          objectiveId,
          modifierIds: [],
          revealedAt: options.now(),
          startedAt: null,
          pausedAt: null,
          pausedTotalMs: 0,
        },
      });
      return true;
    },
    toggleModifier: (modifierId) => {
      const session = get().currentSession;
      if (!session || session.startedAt !== null) return false;
      if (!modifierFitsObjective(modifierId, session.objectiveId)) {
        return false;
      }
      const modifierIds = session.modifierIds.includes(modifierId)
        ? session.modifierIds.filter((id) => id !== modifierId)
        : [...session.modifierIds, modifierId];
      set({
        currentSession: {
          ...session,
          modifierIds,
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
    discardCurrentSession: () => set({ currentSession: null }),
    completeQuest: (durationMs) => {
      const state = get();
      const session = state.currentSession;
      if (!session || session.startedAt === null) return null;
      const completedSession: CompletedSession = {
        id: session.sessionId,
        moodId: session.moodId,
        objectiveId: session.objectiveId,
        modifierIds: session.modifierIds,
        durationMs: Math.max(0, Math.floor(durationMs)),
        completedAt: options.now(),
      };
      set({
        currentSession: null,
        completedSessions: [
          completedSession,
          ...state.completedSessions.filter(
            (completion) => completion.id !== completedSession.id,
          ),
        ].slice(0, STORED_COMPLETION_LIMIT),
      });
      return true;
    },
  });
}

export function createQuestStore(
  storage?: PersistStorage<PersistedQuestState>,
  storeOptions: StoreOptions = {},
) {
  const options: Required<StoreOptions> = {
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
        currentSession,
        completedSessions,
        legacyCompletions,
      }) => ({
        profile,
        selectedMoodId,
        currentSession,
        completedSessions,
        legacyCompletions,
      }),
      migrate: (persistedState, version) =>
        migratePersistedQuestState(persistedState, version),
      merge: (persistedState, currentState) => ({
        ...currentState,
        ...sanitizePersistedQuestState(persistedState),
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
  session: QuestSession,
  completedSessions: readonly CompletedSession[],
): Quest | null {
  const mood = MOODS_BY_ID[session.moodId];
  const objective = OBJECTIVES_BY_ID[session.objectiveId];
  if (!mood || !objective) return null;
  return {
    ...objective,
    mood,
    modifiers: session.modifierIds.flatMap((modifierId) => {
      const modifier = MODIFIERS_BY_ID[modifierId];
      return modifier ? [modifier] : [];
    }),
    completionCount: completedSessions.filter(
      (completion) => completion.objectiveId === objective.id,
    ).length,
  };
}

export function hydrateCompletedQuest(
  completion: CompletedSession,
): CompletedQuest | null {
  const mood = MOODS_BY_ID[completion.moodId];
  const objective = OBJECTIVES_BY_ID[completion.objectiveId];
  if (!mood || !objective) return null;
  return {
    ...completion,
    mood,
    objective,
    modifiers: completion.modifierIds.flatMap((modifierId) => {
      const modifier = MODIFIERS_BY_ID[modifierId];
      return modifier ? [modifier] : [];
    }),
  };
}

export function migratePersistedQuestState(
  persistedState: unknown,
  version: number,
): PersistedQuestState {
  if (version === STORE_VERSION) {
    return sanitizePersistedQuestState(persistedState);
  }
  if (version === 4 || version === 5) {
    return sanitizePersistedQuestState(persistedState);
  }
  if (version === 2 || version === 3) {
    return migrateLegacyQuestState(persistedState);
  }
  return createDefaultState();
}

export function sanitizePersistedQuestState(
  value: unknown,
): PersistedQuestState {
  if (!isRecord(value)) return createDefaultState();

  const profile = profileFromUnknown(value.profile);
  const storedMoodId = isMoodId(value.selectedMoodId)
    ? value.selectedMoodId
    : null;
  const currentSession = sessionFromUnknown(value.currentSession);
  const selectedMoodId = currentSession?.moodId ?? storedMoodId;

  return {
    profile,
    selectedMoodId,
    currentSession,
    completedSessions: completionsFromUnknown(value.completedSessions),
    legacyCompletions: legacyCompletionsFromUnknown(value.legacyCompletions),
  };
}

function migrateLegacyQuestState(value: unknown): PersistedQuestState {
  if (!isRecord(value)) return createDefaultState();
  return {
    profile: profileFromUnknown(value.profile),
    selectedMoodId: null,
    currentSession: null,
    completedSessions: [],
    legacyCompletions: legacyProgressFromUnknown(value.progressByQuestId),
  };
}

function validatedProfile(
  input: ProfileInput,
  fallbackAvatar: AvatarTheme,
): UserProfile | null {
  if (!isOnlinePreference(input.onlinePreference)) return null;
  return {
    onlinePreference: input.onlinePreference,
    avatarTheme: isAvatarTheme(input.avatarTheme)
      ? input.avatarTheme
      : fallbackAvatar,
  };
}

function profileFromUnknown(value: unknown): UserProfile {
  if (!isRecord(value)) return { ...DEFAULT_PROFILE };
  return {
    onlinePreference: isOnlinePreference(value.onlinePreference)
      ? value.onlinePreference
      : "include",
    avatarTheme: isAvatarTheme(value.avatarTheme)
      ? value.avatarTheme
      : "default",
  };
}

function modifierIdsFromUnknown(
  value: Record<string, unknown>,
  objectiveId: string,
) {
  const candidates = Array.isArray(value.modifierIds)
    ? value.modifierIds
    : typeof value.modifierId === "string"
      ? [value.modifierId]
      : [];
  const modifierIds: string[] = [];
  for (const candidate of candidates) {
    if (
      typeof candidate === "string" &&
      !modifierIds.includes(candidate) &&
      modifierFitsObjective(candidate, objectiveId)
    ) {
      modifierIds.push(candidate);
    }
  }
  return modifierIds;
}

function sessionFromUnknown(value: unknown): QuestSession | null {
  if (!isRecord(value)) return null;
  if (
    typeof value.sessionId !== "string" ||
    !value.sessionId ||
    !isMoodId(value.moodId) ||
    typeof value.objectiveId !== "string" ||
    !OBJECTIVES_BY_ID[value.objectiveId] ||
    !objectivesForMood(value.moodId, true).some(
      (objective) => objective.id === value.objectiveId,
    )
  ) {
    return null;
  }
  const revealedAt = finiteNumber(value.revealedAt);
  if (revealedAt === null) return null;
  const storedStartedAt = finiteNumber(value.startedAt);
  const startedAt =
    storedStartedAt === null ? null : Math.max(revealedAt, storedStartedAt);
  const storedPausedAt = finiteNumber(value.pausedAt);
  const modifierIds = modifierIdsFromUnknown(value, value.objectiveId);

  return {
    sessionId: value.sessionId,
    moodId: value.moodId,
    objectiveId: value.objectiveId,
    modifierIds,
    revealedAt,
    startedAt,
    pausedAt:
      startedAt === null || storedPausedAt === null
        ? null
        : Math.max(startedAt, storedPausedAt),
    pausedTotalMs: Math.max(0, finiteNumber(value.pausedTotalMs) ?? 0),
  };
}

function completionsFromUnknown(value: unknown): CompletedSession[] {
  if (!Array.isArray(value)) return [];
  const completions: CompletedSession[] = [];
  const ids = new Set<string>();

  for (const entry of value) {
    if (!isRecord(entry)) continue;
    if (
      typeof entry.id !== "string" ||
      !entry.id ||
      ids.has(entry.id) ||
      !isMoodId(entry.moodId) ||
      typeof entry.objectiveId !== "string" ||
      !OBJECTIVES_BY_ID[entry.objectiveId]
    ) {
      continue;
    }
    const durationMs = finiteNumber(entry.durationMs);
    const completedAt = finiteNumber(entry.completedAt);
    if (durationMs === null || completedAt === null) continue;
    const modifierIds = modifierIdsFromUnknown(entry, entry.objectiveId);
    ids.add(entry.id);
    completions.push({
      id: entry.id,
      moodId: entry.moodId,
      objectiveId: entry.objectiveId,
      modifierIds,
      durationMs: Math.max(0, Math.floor(durationMs)),
      completedAt,
    });
    if (completions.length === STORED_COMPLETION_LIMIT) break;
  }
  return completions;
}

function legacyProgressFromUnknown(value: unknown): LegacyCompletion[] {
  if (!isRecord(value)) return [];
  const completions: LegacyCompletion[] = [];
  for (const [questId, progress] of Object.entries(value)) {
    const quest = LEGACY_QUESTS_BY_ID[questId];
    if (!quest || !isRecord(progress)) continue;
    const storedCount = finiteNumber(progress.completionCount);
    const completionCount =
      storedCount === null
        ? legacyCompletionCount(progress.completedGames)
        : Math.max(0, Math.floor(storedCount));
    if (completionCount > 0) {
      completions.push({
        questId,
        title: quest.title,
        completionCount,
      });
    }
  }
  return completions.sort((a, b) => a.title.localeCompare(b.title));
}

function legacyCompletionsFromUnknown(value: unknown): LegacyCompletion[] {
  if (!Array.isArray(value)) return [];
  const completions: LegacyCompletion[] = [];
  const ids = new Set<string>();
  for (const entry of value) {
    if (
      !isRecord(entry) ||
      typeof entry.questId !== "string" ||
      !entry.questId ||
      ids.has(entry.questId) ||
      typeof entry.title !== "string" ||
      !entry.title.trim()
    ) {
      continue;
    }
    const storedCount = finiteNumber(entry.completionCount);
    const completionCount =
      storedCount === null ? 0 : Math.max(0, Math.floor(storedCount));
    if (completionCount === 0) continue;
    ids.add(entry.questId);
    completions.push({
      questId: entry.questId,
      title: entry.title.trim(),
      completionCount,
    });
  }
  return completions;
}

function legacyCompletionCount(value: unknown) {
  if (!Array.isArray(value)) return 0;
  return value.filter(
    (entry) =>
      isRecord(entry) &&
      finiteNumber(entry.highscoreMs) !== null &&
      finiteNumber(entry.achievedAt) !== null,
  ).length;
}

function isMoodId(value: unknown): value is MoodId {
  return typeof value === "string" && Boolean(MOODS_BY_ID[value as MoodId]);
}

function isAvatarTheme(value: unknown): value is AvatarTheme {
  return (
    typeof value === "string" &&
    (AVATAR_THEMES as readonly string[]).includes(value)
  );
}

function isOnlinePreference(value: unknown): value is OnlinePreference {
  return value === "include" || value === "exclude";
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function finiteNumber(value: unknown) {
  return typeof value === "number" && Number.isFinite(value) ? value : null;
}
