import type { CompletedSession, QuestProgress } from "./model";
import { safeAdd } from "./rules";
import { QUEST_CORES_BY_ID } from "../../data/quests";

export function createQuestProgress(seenAt: number): QuestProgress {
  return {
    seenOffer: null,
    seenAt,
    favorite: false,
    totalPlayedMs: 0,
    coinsEarned: 0,
    longestSessionMs: 0,
    bestTimeMs: null,
    lastCompletion: null,
  };
}

export function progressAfterCompletion(
  previous: QuestProgress | undefined,
  completion: CompletedSession,
): QuestProgress {
  const progress = previous ?? createQuestProgress(completion.completedAt);
  return {
    ...progress,
    seenAt: Math.min(progress.seenAt, completion.completedAt),
    totalPlayedMs: safeAdd(progress.totalPlayedMs, completion.durationMs),
    coinsEarned: safeAdd(progress.coinsEarned, completion.pointsAwarded),
    longestSessionMs: Math.max(progress.longestSessionMs, completion.durationMs),
    bestTimeMs: QUEST_CORES_BY_ID[completion.questId]?.type === "speedrun"
      ? Math.min(progress.bestTimeMs ?? Infinity, completion.durationMs) : null,
    lastCompletion: !progress.lastCompletion ||
      completion.completedAt >= progress.lastCompletion.completedAt
      ? completion : progress.lastCompletion,
  };
}
