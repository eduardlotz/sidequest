import { flexibleGameContexts } from "../../data/games/questCompatibility";
import type { GameReference } from "../../data/gameTypes";
import { QUESTS_BY_ID, QUEST_TRANSLATIONS_BY_ID } from "../../data/quests";
import { ARCHIVED_QUESTS } from "../../data/quests/archived";
import type { QuestSnapshot } from "./model";

export function snapshotQuest(id: string, game?: GameReference | null): QuestSnapshot | undefined {
  const original = QUESTS_BY_ID[id];
  const definition = original && game?.source === "curated" && !original.curated
    ? { ...original, experience: { ...original.experience, contexts: flexibleGameContexts(game.id, id, game.installmentId ? [game.installmentId] : game.installmentIds ?? []) } } : original;
  const translations = QUEST_TRANSLATIONS_BY_ID[id];
  return definition && translations ? { definition: structuredClone(definition), translations: structuredClone(translations), catalogRevision: "2026-10-05" } : undefined;
}

/** Refresh ordinary timing only for the current session; history keeps its snapshot. */
export function refreshActiveQuestTiming(snapshot: QuestSnapshot | undefined): QuestSnapshot | undefined {
  if (!snapshot) return snapshot;
  const saved = snapshot.definition;
  const live = QUESTS_BY_ID[saved.id];
  if (!live || saved.type === "countdown" || saved.type === "speedrun"
    || live.type === "countdown" || live.type === "speedrun"
    || (saved.minimumDurationMinutes === live.minimumDurationMinutes
      && saved.suggestedDurationMinutes === live.suggestedDurationMinutes)) return snapshot;
  return {
    ...snapshot,
    definition: {
      ...saved,
      minimumDurationMinutes: live.minimumDurationMinutes,
      suggestedDurationMinutes: live.suggestedDurationMinutes,
    },
  };
}

export function historicalQuest(id: string) { return ARCHIVED_QUESTS[id]; }

export function sanitizeSnapshot(value: unknown, id: string): QuestSnapshot | undefined {
  if (!value || typeof value !== "object") return undefined;
  const candidate = value as Partial<QuestSnapshot>;
  const definition = candidate.definition;
  if (definition?.id !== id || !Array.isArray(definition.moodIds)
    || !Number.isFinite(definition.minimumDurationMinutes) || definition.minimumDurationMinutes < 0
    || !Number.isFinite(definition.suggestedDurationMinutes) || definition.suggestedDurationMinutes <= 0
    || !candidate.translations?.en?.objective || !candidate.translations?.de?.objective
    || !candidate.translations.en.name || !candidate.translations.de.name
    || !["inspiration", "objective", "experiment", "creation", "challenge", "countdown", "speedrun"].includes(definition.type)) return undefined;
  return candidate as QuestSnapshot;
}
