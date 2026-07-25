import { useStore } from "zustand";
import {
  createJSONStorage,
  persist,
  type PersistStorage,
  type StateStorage,
} from "zustand/middleware";
import { createStore, type StateCreator } from "zustand/vanilla";
import {
  DIFFICULTIES,
  QUESTS,
  QUESTS_BY_ID,
  QUEST_ID_BY_LEGACY_ID,
  type QuestDefinition,
  type QuestDifficulty,
} from "../data/quests";

const STORE_KEY = "sidequest.quests";
const LEGACY_STORE_KEY = "sidequest.run.v1";
const STORE_VERSION = 1;
const RECENT_DRAW_WINDOW = 36;
const STORED_RECENT_LIMIT = 60;

export type CompletedGame = {
  id: string;
  title: string;
  highscoreMs: number;
  achievedAt: number;
};

export type Quest = QuestDefinition & {
  completedGames: CompletedGame[];
};

export type ActiveRun = {
  assignmentId: string;
  questId: string;
  startedAt: number;
  pausedAt: number | null;
  pausedTotalMs: number;
};

export type CompletionOutcome =
  | "new-title"
  | "new-highscore"
  | "not-improved";

type QuestState = {
  quests: Record<string, Quest>;
  activeRun: ActiveRun | null;
  offeredQuestIds: string[];
  recentQuestIds: string[];
};

type QuestActions = {
  selectQuest: (questId: string) => void;
  replaceQuest: () => void;
  pauseQuest: (pausedAt: number) => void;
  resumeQuest: (resumedAt: number) => void;
  shuffleQuests: () => void;
  completeQuest: (
    durationMs: number,
    gameTitle: string,
  ) => CompletionOutcome | null;
};

export type QuestStore = QuestState & QuestActions;

type PersistedQuestState = Pick<
  QuestState,
  "quests" | "activeRun" | "recentQuestIds"
>;

const createQuestState: StateCreator<QuestStore> = (set, get) => {
  const quests = createQuestDocuments();
  const initialState: QuestState = {
    quests,
    activeRun: null,
    offeredQuestIds: createOffers(quests, null, []),
    recentQuestIds: [],
  };

  return {
    ...initialState,
    selectQuest: (questId) => {
      set((state) => {
        if (state.activeRun) return state;
        if (!state.offeredQuestIds.includes(questId) || !state.quests[questId]) {
          return state;
        }

        return {
          activeRun: {
            assignmentId: crypto.randomUUID(),
            questId,
            startedAt: Date.now(),
            pausedAt: null,
            pausedTotalMs: 0,
          },
          recentQuestIds: [...state.recentQuestIds, questId].slice(
            -STORED_RECENT_LIMIT,
          ),
        };
      });
    },
    replaceQuest: () => {
      set((state) => {
        if (!state.activeRun) return state;
        return {
          activeRun: null,
          offeredQuestIds: createOffers(
            state.quests,
            null,
            state.recentQuestIds,
          ),
        };
      });
    },
    pauseQuest: (pausedAt) => {
      set((state) => {
        const run = state.activeRun;
        if (!run || run.pausedAt !== null) return state;
        return {
          activeRun: {
            ...run,
            pausedAt: Math.max(run.startedAt, pausedAt),
          },
        };
      });
    },
    resumeQuest: (resumedAt) => {
      set((state) => {
        const run = state.activeRun;
        if (!run || run.pausedAt === null) return state;
        return {
          activeRun: {
            ...run,
            pausedAt: null,
            pausedTotalMs:
              run.pausedTotalMs + Math.max(0, resumedAt - run.pausedAt),
          },
        };
      });
    },
    shuffleQuests: () => {
      set((state) => {
        if (state.activeRun) return state;
        const recentQuestIds = [
          ...state.recentQuestIds,
          ...state.offeredQuestIds,
        ].slice(-STORED_RECENT_LIMIT);
        return {
          offeredQuestIds: createOffers(
            state.quests,
            null,
            recentQuestIds,
            new Set(state.offeredQuestIds),
          ),
          recentQuestIds,
        };
      });
    },
    completeQuest: (durationMs, gameTitle) => {
      const state = get();
      const run = state.activeRun;
      if (!run) return null;
      const quest = state.quests[run.questId];
      const title = cleanGameTitle(gameTitle);
      if (!quest || !title) return null;

      const update = upsertGameHighscore(quest.completedGames, {
        id: gameIdFromTitle(title),
        title,
        highscoreMs: Math.max(0, durationMs),
        achievedAt: Date.now(),
      });
      const quests =
        update.outcome === "not-improved"
          ? state.quests
          : {
              ...state.quests,
              [quest.id]: {
                ...quest,
                completedGames: update.completedGames,
              },
            };

      set({
        quests,
        activeRun: null,
        offeredQuestIds: createOffers(
          quests,
          null,
          state.recentQuestIds,
        ),
      });
      return update.outcome;
    },
  };
};

export function createQuestStore(
  storage?: PersistStorage<PersistedQuestState>,
) {
  if (!storage) return createStore<QuestStore>()(createQuestState);

  return createStore<QuestStore>()(
    persist(createQuestState, {
      name: STORE_KEY,
      storage,
      version: STORE_VERSION,
      partialize: ({ quests, activeRun, recentQuestIds }) => ({
        quests,
        activeRun,
        recentQuestIds,
      }),
      migrate: (persistedState, version) =>
        version === 0
          ? migrateLegacyRunState(persistedState)
          : (persistedState as PersistedQuestState),
      merge: (persistedState, currentState) => {
        const persisted = persistedState as PersistedQuestState;
        return {
          ...currentState,
          ...persisted,
          offeredQuestIds: createOffers(
            persisted.quests,
            persisted.activeRun,
            persisted.recentQuestIds,
          ),
        };
      },
    }),
  );
}

const browserStorage = createJSONStorage<PersistedQuestState>(() =>
  legacyAwareStorage(window.localStorage),
);

export const questStore = createQuestStore(browserStorage);

export function useQuestStore<T>(selector: (state: QuestStore) => T) {
  return useStore(questStore, selector);
}

export function getCompletionOutcome(
  completedGames: readonly CompletedGame[],
  gameTitle: string,
  durationMs: number,
): CompletionOutcome {
  const gameId = gameIdFromTitle(gameTitle);
  const existing = completedGames.find((game) => game.id === gameId);

  if (!existing) return "new-title";
  return Math.max(0, durationMs) < existing.highscoreMs
    ? "new-highscore"
    : "not-improved";
}

export function migrateLegacyRunState(value: unknown): PersistedQuestState {
  const quests = createQuestDocuments();
  if (!isRecord(value)) {
    return { quests, activeRun: null, recentQuestIds: [] };
  }

  if (Array.isArray(value.completed)) {
    for (const group of value.completed) {
      if (!isRecord(group)) continue;
      const questId = resolveQuestId(group.taskId);
      if (!questId) continue;
      const entries = Array.isArray(group.entries) ? group.entries : [group];
      let completedGames = quests[questId].completedGames;

      for (const entry of entries) {
        const game = legacyCompletedGameFrom(entry);
        if (!game) continue;
        completedGames = upsertGameHighscore(completedGames, game).completedGames;
      }

      quests[questId] = { ...quests[questId], completedGames };
    }
  }

  const activeRun = Array.isArray(value.active)
    ? value.active
        .map(legacyActiveRunFrom)
        .filter((run): run is ActiveRun => run !== null)
        .sort((a, b) => b.startedAt - a.startedAt)[0] ?? null
    : null;
  const recentQuestIds = Array.isArray(value.recentTaskIds)
    ? value.recentTaskIds
        .flatMap((id) => {
          const questId = resolveQuestId(id);
          return questId ? [questId] : [];
        })
        .slice(-STORED_RECENT_LIMIT)
    : [];

  return { quests, activeRun, recentQuestIds };
}

function createQuestDocuments() {
  return Object.fromEntries(
    QUESTS.map((quest) => [
      quest.id,
      { ...quest, completedGames: [] satisfies CompletedGame[] },
    ]),
  ) as Record<string, Quest>;
}

function createOffers(
  quests: Record<string, Quest>,
  activeRun: ActiveRun | null,
  recentQuestIds: readonly string[],
  excludedIds: ReadonlySet<string> = new Set(),
) {
  const offered = new Set(excludedIds);
  return DIFFICULTIES.flatMap((difficulty) => {
    const quest = chooseQuest(
      quests,
      activeRun,
      recentQuestIds,
      difficulty,
      offered,
    );
    if (!quest) return [];
    offered.add(quest.id);
    return [quest.id];
  });
}

function chooseQuest(
  quests: Record<string, Quest>,
  activeRun: ActiveRun | null,
  recentQuestIds: readonly string[],
  difficulty: QuestDifficulty,
  alreadyOffered: ReadonlySet<string>,
) {
  const blocked = new Set([
    ...(activeRun ? [activeRun.questId] : []),
    ...alreadyOffered,
  ]);
  const recent = new Set(recentQuestIds.slice(-RECENT_DRAW_WINDOW));
  const difficultyPool = Object.values(quests).filter(
    (quest) => quest.difficulty === difficulty && !blocked.has(quest.id),
  );
  const freshPool = difficultyPool.filter((quest) => !recent.has(quest.id));
  const pool = freshPool.length > 0 ? freshPool : difficultyPool;
  return pool[Math.floor(Math.random() * pool.length)];
}

function upsertGameHighscore(
  completedGames: readonly CompletedGame[],
  candidate: CompletedGame,
) {
  const existingIndex = completedGames.findIndex(
    (game) => game.id === candidate.id,
  );

  if (existingIndex === -1) {
    return {
      completedGames: sortCompletedGames([candidate, ...completedGames]),
      outcome: "new-title" as const,
    };
  }

  const existing = completedGames[existingIndex];
  if (candidate.highscoreMs >= existing.highscoreMs) {
    return {
      completedGames: [...completedGames],
      outcome: "not-improved" as const,
    };
  }

  const updated = {
    ...candidate,
    id: existing.id,
    title: existing.title,
  };
  return {
    completedGames: sortCompletedGames(
      completedGames.map((game, index) =>
        index === existingIndex ? updated : game,
      ),
    ),
    outcome: "new-highscore" as const,
  };
}

function legacyAwareStorage(storage: Storage): StateStorage {
  return {
    getItem: (name) => {
      try {
        const current = storage.getItem(name);
        if (current) {
          JSON.parse(current);
          return current;
        }
      } catch {
        // Fall through to the previous raw store.
      }

      try {
        const legacy = storage.getItem(LEGACY_STORE_KEY);
        if (!legacy) return null;
        return JSON.stringify({
          state: JSON.parse(legacy) as unknown,
          version: 0,
        });
      } catch {
        return null;
      }
    },
    setItem: (name, value) => {
      try {
        storage.setItem(name, value);
      } catch {
        // The in-memory store remains usable when browser storage is unavailable.
      }
    },
    removeItem: (name) => {
      try {
        storage.removeItem(name);
      } catch {
        // The in-memory store remains usable when browser storage is unavailable.
      }
    },
  };
}

function legacyActiveRunFrom(value: unknown): ActiveRun | null {
  if (!isRecord(value)) return null;
  const questId = resolveQuestId(value.taskId);
  const startedAt = finiteNumber(value.startedAt);
  if (!questId || startedAt === null) return null;
  const storedPausedAt = finiteNumber(value.pausedAt);

  return {
    assignmentId:
      typeof value.assignmentId === "string"
        ? value.assignmentId
        : crypto.randomUUID(),
    questId,
    startedAt,
    pausedAt:
      storedPausedAt === null ? null : Math.max(startedAt, storedPausedAt),
    pausedTotalMs: Math.max(0, finiteNumber(value.pausedTotalMs) ?? 0),
  };
}

function legacyCompletedGameFrom(value: unknown): CompletedGame | null {
  if (!isRecord(value)) return null;
  const title =
    typeof value.gameTitle === "string"
      ? cleanGameTitle(value.gameTitle)
      : "";
  const highscoreMs = finiteNumber(value.durationMs);
  const achievedAt = finiteNumber(value.completedAt);
  if (!title || highscoreMs === null || achievedAt === null) return null;

  return {
    id: gameIdFromTitle(title),
    title,
    highscoreMs: Math.max(0, highscoreMs),
    achievedAt,
  };
}

function resolveQuestId(value: unknown) {
  if (typeof value !== "string") return null;
  if (QUESTS_BY_ID[value]) return value;
  return QUEST_ID_BY_LEGACY_ID[value] ?? null;
}

export function cleanGameTitle(gameTitle: string) {
  return gameTitle.trim().replace(/\s+/gu, " ");
}

function gameIdFromTitle(gameTitle: string) {
  return cleanGameTitle(gameTitle).normalize("NFKC").toLocaleLowerCase();
}

function sortCompletedGames(completedGames: CompletedGame[]) {
  return completedGames.sort((a, b) => b.achievedAt - a.achievedAt);
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function finiteNumber(value: unknown) {
  return typeof value === "number" && Number.isFinite(value) ? value : null;
}
