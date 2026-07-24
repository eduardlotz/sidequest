import { useEffect, useMemo, useState } from "react";
import {
  DIFFICULTIES,
  TASKS,
  TASKS_BY_ID,
  type TaskDefinition,
  type TaskDifficulty,
} from "../data/tasks";

const STORAGE_KEY = "sidequest.run.v1";
const RECENT_DRAW_WINDOW = 36;
const STORED_RECENT_LIMIT = 60;

export type ActiveTask = {
  assignmentId: string;
  taskId: string;
  startedAt: number;
};

export type CompletionEntry = {
  entryId: string;
  startedAt: number;
  completedAt: number;
  durationMs: number;
  gameTitle: string;
  points: number;
};

export type CompletedTask = {
  taskId: string;
  entries: CompletionEntry[];
};

type TaskRunState = {
  active: ActiveTask[];
  completed: CompletedTask[];
  recentTaskIds: string[];
};

type TaskRunModel = {
  runState: TaskRunState;
  offerIds: string[];
};

const emptyState: TaskRunState = {
  active: [],
  completed: [],
  recentTaskIds: [],
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function finiteNumber(value: unknown) {
  return typeof value === "number" && Number.isFinite(value) ? value : null;
}

function assignmentFrom(value: unknown): ActiveTask | null {
  if (!isRecord(value) || typeof value.taskId !== "string") return null;
  if (!TASKS_BY_ID.has(value.taskId)) return null;
  const startedAt = finiteNumber(value.startedAt);
  if (startedAt === null) return null;

  return {
    assignmentId:
      typeof value.assignmentId === "string"
        ? value.assignmentId
        : crypto.randomUUID(),
    taskId: value.taskId,
    startedAt,
  };
}

function completionEntryFrom(
  value: unknown,
  taskId: string,
): CompletionEntry | null {
  if (!isRecord(value)) return null;
  const completedAt = finiteNumber(value.completedAt);
  if (completedAt === null) return null;
  const definition = TASKS_BY_ID.get(taskId);
  if (!definition) return null;

  const startedAt = finiteNumber(value.startedAt);
  const durationMs = finiteNumber(value.durationMs);
  const points = finiteNumber(value.points);
  const resolvedDuration = Math.max(
    0,
    durationMs ?? (startedAt === null ? 0 : completedAt - startedAt),
  );
  return {
    entryId:
      typeof value.entryId === "string"
        ? value.entryId
        : typeof value.assignmentId === "string"
          ? value.assignmentId
          : crypto.randomUUID(),
    startedAt: startedAt ?? completedAt - resolvedDuration,
    completedAt,
    durationMs: resolvedDuration,
    gameTitle:
      typeof value.gameTitle === "string" && value.gameTitle.trim()
        ? value.gameTitle.trim()
        : "Unknown game",
    points: points ?? definition.points,
  };
}

function completionGroupFrom(value: unknown): CompletedTask | null {
  if (!isRecord(value) || typeof value.taskId !== "string") return null;
  if (!TASKS_BY_ID.has(value.taskId)) return null;

  const entries = Array.isArray(value.entries)
    ? value.entries
        .map((entry) => completionEntryFrom(entry, value.taskId as string))
        .filter((entry): entry is CompletionEntry => entry !== null)
    : [completionEntryFrom(value, value.taskId)].filter(
        (entry): entry is CompletionEntry => entry !== null,
      );

  if (entries.length === 0) return null;
  return {
    taskId: value.taskId,
    entries: entries.sort((a, b) => b.completedAt - a.completedAt),
  };
}

function mergeCompletionGroups(groups: CompletedTask[]) {
  const merged = new Map<string, CompletedTask>();
  for (const group of groups) {
    const current = merged.get(group.taskId);
    if (current) current.entries.push(...group.entries);
    else merged.set(group.taskId, { ...group, entries: [...group.entries] });
  }

  return [...merged.values()]
    .map((group) => ({
      ...group,
      entries: group.entries.sort((a, b) => b.completedAt - a.completedAt),
    }))
    .sort((a, b) => b.entries[0].completedAt - a.entries[0].completedAt);
}

function readState(): TaskRunState {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) return emptyState;
    const parsed = JSON.parse(stored) as unknown;
    if (!isRecord(parsed)) return emptyState;

    const active = Array.isArray(parsed.active)
      ? parsed.active
          .map(assignmentFrom)
          .filter((item): item is ActiveTask => item !== null)
          .sort((a, b) => b.startedAt - a.startedAt)
          .slice(0, 1)
      : [];
    const completed = Array.isArray(parsed.completed)
      ? mergeCompletionGroups(
          parsed.completed
            .map(completionGroupFrom)
            .filter((item): item is CompletedTask => item !== null),
        )
      : [];
    const recentTaskIds = Array.isArray(parsed.recentTaskIds)
      ? parsed.recentTaskIds
          .filter(
            (id): id is string =>
              typeof id === "string" && TASKS_BY_ID.has(id),
          )
          .slice(-STORED_RECENT_LIMIT)
      : [];

    return { active, completed, recentTaskIds };
  } catch {
    return emptyState;
  }
}

function chooseTask(
  state: TaskRunState,
  difficulty: TaskDifficulty,
  alreadyOffered: ReadonlySet<string>,
) {
  const blocked = new Set([
    ...state.active.map((item) => item.taskId),
    ...alreadyOffered,
  ]);
  const recent = new Set(state.recentTaskIds.slice(-RECENT_DRAW_WINDOW));
  const difficultyPool = TASKS.filter(
    (task) => task.difficulty === difficulty && !blocked.has(task.id),
  );
  const freshPool = difficultyPool.filter((task) => !recent.has(task.id));
  const pool = freshPool.length > 0 ? freshPool : difficultyPool;
  return pool[Math.floor(Math.random() * pool.length)];
}

function createOffers(
  state: TaskRunState,
  excludedIds: ReadonlySet<string> = new Set(),
) {
  const offered = new Set(excludedIds);
  return DIFFICULTIES.flatMap((difficulty) => {
    const task = chooseTask(state, difficulty, offered);
    if (!task) return [];
    offered.add(task.id);
    return [task.id];
  });
}

function initialModel(): TaskRunModel {
  const runState = readState();
  return { runState, offerIds: createOffers(runState) };
}

export function useTaskRun() {
  const [model, setModel] = useState<TaskRunModel>(initialModel);
  const { runState, offerIds } = model;

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(runState));
  }, [runState]);

  const activeTask = useMemo<HydratedActiveTask | null>(() => {
    const assignment = runState.active[0];
    const task = assignment ? TASKS_BY_ID.get(assignment.taskId) : null;
    return assignment && task ? { assignment, task } : null;
  }, [runState.active]);

  const offeredTasks = useMemo(
    () =>
      offerIds.flatMap((id) => {
        const task = TASKS_BY_ID.get(id);
        return task ? [task] : [];
      }),
    [offerIds],
  );

  const completedTasks = useMemo(
    () =>
      runState.completed.flatMap((completion) => {
        const task = TASKS_BY_ID.get(completion.taskId);
        return task ? [{ completion, task }] : [];
      }),
    [runState.completed],
  );

  function selectTask(taskId: string) {
    setModel((current) => {
      if (current.runState.active.length > 0) return current;
      if (!current.offerIds.includes(taskId) || !TASKS_BY_ID.has(taskId)) {
        return current;
      }
      const assignment: ActiveTask = {
        assignmentId: crypto.randomUUID(),
        taskId,
        startedAt: Date.now(),
      };
      return {
        ...current,
        runState: {
          ...current.runState,
          active: [assignment],
          recentTaskIds: [
            ...current.runState.recentTaskIds,
            taskId,
          ].slice(-STORED_RECENT_LIMIT),
        },
      };
    });
  }

  function replaceTask() {
    setModel((current) => {
      if (current.runState.active.length === 0) return current;
      const runState = { ...current.runState, active: [] };
      return { runState, offerIds: createOffers(runState) };
    });
  }

  function shuffleTasks() {
    setModel((current) => {
      if (current.runState.active.length > 0) return current;
      const excludedIds = new Set(current.offerIds);
      const runState = {
        ...current.runState,
        recentTaskIds: [
          ...current.runState.recentTaskIds,
          ...current.offerIds,
        ].slice(-STORED_RECENT_LIMIT),
      };
      return {
        runState,
        offerIds: createOffers(runState, excludedIds),
      };
    });
  }

  function completeTask(durationOverrideMs: number, gameTitle: string) {
    setModel((current) => {
      const assignment = current.runState.active[0];
      if (!assignment) return current;
      const task = TASKS_BY_ID.get(assignment.taskId);
      if (!task) return current;
      const completedAt = Date.now();
      const title = gameTitle.trim();
      if (!title) return current;
      const entry: CompletionEntry = {
        entryId: assignment.assignmentId,
        startedAt: assignment.startedAt,
        completedAt,
        durationMs: Math.max(
          0,
          durationOverrideMs,
        ),
        gameTitle: title,
        points: task.points,
      };
      const existingGroup = current.runState.completed.find(
        (completion) => completion.taskId === assignment.taskId,
      );
      const completion: CompletedTask = existingGroup
        ? { ...existingGroup, entries: [entry, ...existingGroup.entries] }
        : { taskId: assignment.taskId, entries: [entry] };
      const runState = {
        ...current.runState,
        active: [],
        completed: [
          completion,
          ...current.runState.completed.filter(
            (item) => item.taskId !== assignment.taskId,
          ),
        ],
      };
      return { runState, offerIds: createOffers(runState) };
    });
  }

  return {
    activeTask,
    completedTasks,
    offeredTasks,
    selectTask,
    shuffleTasks,
    replaceTask,
    completeTask,
  };
}

export type HydratedActiveTask = {
  assignment: ActiveTask;
  task: TaskDefinition;
};

export type HydratedCompletedTask = {
  completion: CompletedTask;
  task: TaskDefinition;
};
