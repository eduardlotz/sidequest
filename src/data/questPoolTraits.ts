import { AUTHORED_QUESTS } from "./quests/catalog";
import type { GameGenreId } from "./gameGenres";
export const QUEST_CONNECTION_MODES = {
  online: { en: "Online", de: "Online" },
  offline: { en: "Offline", de: "Offline" },
} as const;
export type QuestConnectionModeId = keyof typeof QUEST_CONNECTION_MODES;
export const QUEST_CONNECTION_MODE_IDS = Object.keys(QUEST_CONNECTION_MODES) as QuestConnectionModeId[];

export const QUEST_PLAY_STYLES = {
  solo: { en: "Solo", de: "Solo" },
  "co-op": { en: "With others", de: "Mit anderen" },
  team: { en: "Team", de: "Team" },
  squad: { en: "Squad", de: "Squad" },
} as const;
export type QuestPlayStyleId = keyof typeof QUEST_PLAY_STYLES;
export const QUEST_PLAY_STYLE_IDS = Object.keys(QUEST_PLAY_STYLES) as QuestPlayStyleId[];
export type QuestPoolPlayId = QuestConnectionModeId | QuestPlayStyleId;
export type QuestPoolTraits = { genreIds: readonly GameGenreId[]; styleIds: readonly QuestPoolPlayId[] };
export function isQuestConnectionModeId(id: QuestPoolPlayId): id is QuestConnectionModeId {
  return id === "online" || id === "offline";
}
export function isQuestPlayStyleId(id: QuestPoolPlayId): id is QuestPlayStyleId {
  return !isQuestConnectionModeId(id);
}
// Legacy projections for display and saved-format compatibility. Eligibility uses
// the complete contexts in the canonical authoring record.
export const QUEST_POOL_TRAITS: Record<string, QuestPoolTraits> = Object.fromEntries(
  AUTHORED_QUESTS.map(quest => [quest.id, {
    genreIds: quest.gameGenreIds ?? [],
    styleIds: [...new Set<QuestPoolPlayId>(quest.experience.contexts.flatMap(context => [
      context.connection,
      context.people === "alone" ? "solo" : "co-op",
      ...(context.formation === "none" ? [] : [context.formation]),
    ]))],
  }]),
);
