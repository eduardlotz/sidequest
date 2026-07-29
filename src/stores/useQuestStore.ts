import { useStore } from "zustand";
import {
  createJSONStorage,
  persist,
  type PersistStorage,
} from "zustand/middleware";
import { createStore, type StateCreator } from "zustand/vanilla";
import { QUESTS, QUESTS_BY_ID, type QuestDefinition } from "../data/quests";
import {
  QUEST_GENRES,
  type QuestArchetype,
  type QuestGenre,
} from "../data/questTaxonomy";

export const STORE_KEY = "sidequest.quests";
export const STORE_VERSION = 3;
export const RECENT_DRAW_WINDOW = 12;
export const STORED_RECENT_LIMIT = 30;

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
  onboardingComplete: boolean;
  selectedGenres: QuestGenre[];
  onlinePreference: OnlinePreference | null;
  avatarTheme: AvatarTheme;
};

export type ProfileInput = {
  selectedGenres: readonly QuestGenre[];
  onlinePreference: OnlinePreference;
  avatarTheme?: AvatarTheme;
};

export type QuestProgress = {
  completionCount: number;
};

export type QuestSession = {
  sessionId: string;
  questId: string;
  revealedAt: number;
  startedAt: number | null;
  pausedAt: number | null;
  pausedTotalMs: number;
};

export type QuestState = {
  profile: UserProfile;
  progressByQuestId: Record<string, QuestProgress>;
  currentSession: QuestSession | null;
  offeredQuestIds: string[];
  recentQuestIds: string[];
};

type QuestActions = {
  completeOnboarding: (profileInput: ProfileInput) => boolean;
  updateProfile: (profileInput: ProfileInput) => boolean;
  revealQuest: (questId: string) => void;
  startQuest: (startedAt: number) => void;
  pauseQuest: (pausedAt: number) => void;
  resumeQuest: (resumedAt: number) => void;
  discardCurrentSession: () => void;
  completeQuest: () => boolean | null;
};

export type QuestStore = QuestState & QuestActions;

export type PersistedQuestState = Pick<
  QuestState,
  | "profile"
  | "progressByQuestId"
  | "currentSession"
  | "offeredQuestIds"
  | "recentQuestIds"
>;

export type Quest = QuestDefinition & {
  completionCount: number;
};

type StoreOptions = {
  random?: () => number;
  now?: () => number;
  createSessionId?: () => string;
};

export const DEFAULT_PROFILE: UserProfile = {
  onboardingComplete: false,
  selectedGenres: [],
  onlinePreference: null,
  avatarTheme: "default",
};

function createDefaultState(): QuestState {
  return {
    profile: { ...DEFAULT_PROFILE },
    progressByQuestId: {},
    currentSession: null,
    offeredQuestIds: [],
    recentQuestIds: [],
  };
}

function createQuestState(options: Required<StoreOptions>): StateCreator<QuestStore> {
  return (set, get) => ({
    ...createDefaultState(),
    completeOnboarding: (profileInput) => {
      const profile = validatedProfile(profileInput, "default");
      if (!profile) return false;
      set({
        profile,
        offeredQuestIds: generateQuestOffers(profile, [], options.random),
        currentSession: null,
        recentQuestIds: [],
      });
      return true;
    },
    updateProfile: (profileInput) => {
      const state = get();
      const profile = validatedProfile(
        profileInput,
        state.profile.avatarTheme,
      );
      if (!profile) return false;
      set({
        profile,
        offeredQuestIds: state.currentSession
          ? state.offeredQuestIds
          : generateQuestOffers(
              profile,
              state.recentQuestIds,
              options.random,
            ),
      });
      return true;
    },
    revealQuest: (questId) => {
      set((state) => {
        if (
          state.currentSession ||
          !state.offeredQuestIds.includes(questId) ||
          !QUESTS_BY_ID[questId]
        ) {
          return state;
        }

        return {
          currentSession: {
            sessionId: options.createSessionId(),
            questId,
            revealedAt: options.now(),
            startedAt: null,
            pausedAt: null,
            pausedTotalMs: 0,
          },
          recentQuestIds: appendRecent(state.recentQuestIds, questId),
        };
      });
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
        const recentQuestIds = appendRecent(
          state.recentQuestIds,
          session.questId,
        );

        if (session.startedAt === null) {
          const slot = state.offeredQuestIds.indexOf(session.questId);
          if (slot === -1) {
            return {
              currentSession: null,
              offeredQuestIds: generateQuestOffers(
                state.profile,
                recentQuestIds,
                options.random,
              ),
              recentQuestIds,
            };
          }

          const retainedIds = state.offeredQuestIds.filter(
            (_, index) => index !== slot,
          );
          const replacement = chooseReplacementQuest(
            state.profile,
            recentQuestIds,
            retainedIds,
            options.random,
          );
          const offeredQuestIds = [...state.offeredQuestIds];
          if (replacement) offeredQuestIds[slot] = replacement.id;

          return {
            currentSession: null,
            offeredQuestIds,
            recentQuestIds,
          };
        }

        return {
          currentSession: null,
          offeredQuestIds: generateQuestOffers(
            state.profile,
            recentQuestIds,
            options.random,
          ),
          recentQuestIds,
        };
      });
    },
    completeQuest: () => {
      const state = get();
      const session = state.currentSession;
      if (!session || session.startedAt === null) return null;
      const quest = QUESTS_BY_ID[session.questId];
      if (!quest) return null;

      const completionCount =
        (state.progressByQuestId[quest.id]?.completionCount ?? 0) + 1;
      const recentQuestIds = appendRecent(
        state.recentQuestIds,
        session.questId,
      );

      set({
        progressByQuestId: {
          ...state.progressByQuestId,
          [quest.id]: { completionCount },
        },
        currentSession: null,
        offeredQuestIds: generateQuestOffers(
          state.profile,
          recentQuestIds,
          options.random,
        ),
        recentQuestIds,
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
        progressByQuestId,
        currentSession,
        offeredQuestIds,
        recentQuestIds,
      }) => ({
        profile,
        progressByQuestId,
        currentSession,
        offeredQuestIds,
        recentQuestIds,
      }),
      migrate: (persistedState, version) =>
        migratePersistedQuestState(persistedState, version),
      merge: (persistedState, currentState) => ({
        ...currentState,
        ...sanitizePersistedQuestState(
          persistedState,
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
  progressByQuestId: Record<string, QuestProgress>,
): Quest | null {
  const definition = QUESTS_BY_ID[questId];
  if (!definition) return null;
  return {
    ...definition,
    completionCount: progressByQuestId[questId]?.completionCount ?? 0,
  };
}

export function generateQuestOffers(
  profile: UserProfile,
  recentQuestIds: readonly string[],
  random: () => number = Math.random,
  excludedIds: ReadonlySet<string> = new Set(),
  count = 3,
) {
  if (!profile.onboardingComplete || profile.selectedGenres.length === 0) {
    return [];
  }

  const selectedGenres = new Set(profile.selectedGenres);
  const eligible = QUESTS.filter(
    (quest) =>
      selectedGenres.has(quest.primaryGenre) &&
      (profile.onlinePreference !== "exclude" || !quest.requiresOnline),
  );
  const preferred = eligible.filter((quest) => !excludedIds.has(quest.id));
  const pool = preferred.length >= count ? preferred : eligible;
  return chooseDiverseQuests(pool, recentQuestIds, count, random).map(
    (quest) => quest.id,
  );
}

export function migratePersistedQuestState(
  _persistedState: unknown,
  version: number,
): PersistedQuestState {
  if (version !== 2 && version !== STORE_VERSION) return createDefaultState();
  return sanitizePersistedQuestState(_persistedState, Math.random);
}

export function sanitizePersistedQuestState(
  value: unknown,
  random: () => number = Math.random,
): PersistedQuestState {
  if (!isRecord(value)) return createDefaultState();

  const profile = profileFromUnknown(value.profile);
  if (!profile.onboardingComplete) {
    return {
      ...createDefaultState(),
      profile,
    };
  }

  const progressByQuestId = progressFromUnknown(value.progressByQuestId);
  const currentSession = sessionFromUnknown(value.currentSession);
  const recentQuestIds = stringArray(value.recentQuestIds)
    .filter((id) => Boolean(QUESTS_BY_ID[id]))
    .slice(-STORED_RECENT_LIMIT);
  const offeredQuestIds = uniqueStrings(value.offeredQuestIds).filter(
    (id) => Boolean(QUESTS_BY_ID[id]),
  );

  if (offeredQuestIds.length < 3) {
    const generated = generateQuestOffers(
      profile,
      recentQuestIds,
      random,
      new Set(offeredQuestIds),
    );
    for (const questId of generated) {
      if (offeredQuestIds.includes(questId)) continue;
      offeredQuestIds.push(questId);
      if (offeredQuestIds.length === 3) break;
    }
  }

  return {
    profile,
    progressByQuestId,
    currentSession,
    offeredQuestIds: offeredQuestIds.slice(0, 3),
    recentQuestIds,
  };
}

function validatedProfile(
  input: ProfileInput,
  fallbackAvatar: AvatarTheme,
): UserProfile | null {
  const selectedGenres = Array.from(
    new Set(input.selectedGenres.filter(isQuestGenre)),
  );
  if (
    selectedGenres.length === 0 ||
    !isOnlinePreference(input.onlinePreference)
  ) {
    return null;
  }
  return {
    onboardingComplete: true,
    selectedGenres,
    onlinePreference: input.onlinePreference,
    avatarTheme: isAvatarTheme(input.avatarTheme)
      ? input.avatarTheme
      : fallbackAvatar,
  };
}

function profileFromUnknown(value: unknown): UserProfile {
  if (!isRecord(value)) return { ...DEFAULT_PROFILE };
  const selectedGenres = uniqueStrings(value.selectedGenres).filter(
    isQuestGenre,
  );
  const hadCompletedProfile =
    value.onboardingComplete === true && selectedGenres.length > 0;
  const onlinePreference = isOnlinePreference(value.onlinePreference)
    ? value.onlinePreference
    : hadCompletedProfile
      ? "include"
      : null;
  const onboardingComplete =
    hadCompletedProfile && onlinePreference !== null;
  return {
    onboardingComplete,
    selectedGenres,
    onlinePreference,
    avatarTheme: isAvatarTheme(value.avatarTheme)
      ? value.avatarTheme
      : "default",
  };
}

function progressFromUnknown(value: unknown) {
  if (!isRecord(value)) return {};
  const progressByQuestId: Record<string, QuestProgress> = {};

  for (const [questId, progress] of Object.entries(value)) {
    if (!QUESTS_BY_ID[questId] || !isRecord(progress)) continue;
    const storedCount = finiteNumber(progress.completionCount);
    const completionCount =
      storedCount === null
        ? legacyCompletionCount(progress.completedGames)
        : Math.max(0, Math.floor(storedCount));
    if (completionCount > 0) {
      progressByQuestId[questId] = { completionCount };
    }
  }

  return progressByQuestId;
}

function sessionFromUnknown(value: unknown): QuestSession | null {
  if (!isRecord(value)) return null;
  if (
    typeof value.sessionId !== "string" ||
    !value.sessionId ||
    typeof value.questId !== "string" ||
    !QUESTS_BY_ID[value.questId]
  ) {
    return null;
  }
  const revealedAt = finiteNumber(value.revealedAt);
  if (revealedAt === null) return null;
  const storedStartedAt = finiteNumber(value.startedAt);
  const startedAt =
    storedStartedAt === null ? null : Math.max(revealedAt, storedStartedAt);
  const storedPausedAt = finiteNumber(value.pausedAt);

  return {
    sessionId: value.sessionId,
    questId: value.questId,
    revealedAt,
    startedAt,
    pausedAt:
      startedAt === null || storedPausedAt === null
        ? null
        : Math.max(startedAt, storedPausedAt),
    pausedTotalMs: Math.max(0, finiteNumber(value.pausedTotalMs) ?? 0),
  };
}

function chooseReplacementQuest(
  profile: UserProfile,
  recentQuestIds: readonly string[],
  retainedIds: readonly string[],
  random: () => number,
) {
  const replacementIds = generateQuestOffers(
    profile,
    recentQuestIds,
    random,
    new Set(retainedIds),
    1,
  );
  return replacementIds.length > 0
    ? QUESTS_BY_ID[replacementIds[0]]
    : null;
}

function chooseDiverseQuests(
  pool: readonly QuestDefinition[],
  recentQuestIds: readonly string[],
  count: number,
  random: () => number,
) {
  const chosen: QuestDefinition[] = [];
  const chosenIds = new Set<string>();
  const chosenGenres = new Set<QuestGenre>();
  const chosenArchetypes = new Set<QuestArchetype>();
  const recent = new Set(recentQuestIds.slice(-RECENT_DRAW_WINDOW));

  while (chosen.length < count) {
    const available = pool.filter((quest) => !chosenIds.has(quest.id));
    if (available.length === 0) break;
    const fresh = available.filter((quest) => !recent.has(quest.id));
    const candidates = fresh.length > 0 ? fresh : available;
    const scores = candidates.map((quest) => ({
      quest,
      score:
        (chosenGenres.has(quest.primaryGenre) ? 0 : 2) +
        (chosenArchetypes.has(quest.archetype) ? 0 : 1),
    }));
    const bestScore = Math.max(...scores.map(({ score }) => score));
    const best = scores
      .filter(({ score }) => score === bestScore)
      .map(({ quest }) => quest);
    const selected = best[randomIndex(best.length, random)];
    if (!selected) break;

    chosen.push(selected);
    chosenIds.add(selected.id);
    chosenGenres.add(selected.primaryGenre);
    chosenArchetypes.add(selected.archetype);
  }

  return chosen;
}

function appendRecent(recentQuestIds: readonly string[], questId: string) {
  return [...recentQuestIds, questId].slice(-STORED_RECENT_LIMIT);
}

function legacyCompletionCount(value: unknown) {
  if (!Array.isArray(value)) return 0;
  return value.filter(
    (entry) =>
      isRecord(entry) &&
      finiteNumber(entry.highscoreMs) !== null &&
      finiteNumber(entry.achievedAt) !== null &&
      (typeof entry.title === "string" || entry.title === null),
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

function uniqueStrings(value: unknown) {
  return Array.from(new Set(stringArray(value)));
}

function stringArray(value: unknown): string[] {
  return Array.isArray(value)
    ? value.filter((entry): entry is string => typeof entry === "string")
    : [];
}

function isQuestGenre(value: unknown): value is QuestGenre {
  return (
    typeof value === "string" &&
    (QUEST_GENRES as readonly string[]).includes(value)
  );
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
