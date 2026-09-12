import { GAME_GENRE_IDS } from "../../data/gameGenres";
import { QUEST_TYPES, type QuestTypeId } from "../../data/questTraits";
import { QUEST_PLAY_STYLE_IDS, QUEST_POOL_TRAITS } from "../../data/questPoolTraits";
import { isQuestUnlocked } from "../../data/questPacks";
import type { MoodId, QuestCoreDefinition } from "../../data/questTypes";
import type { QuestPoolPreferences } from "./model";

export function defaultPoolPreferences(): QuestPoolPreferences {
  return { genreIds: [...GAME_GENRE_IDS], typeIds: Object.keys(QUEST_TYPES) as QuestTypeId[], styleIds: [...QUEST_PLAY_STYLE_IDS] };
}
export function matchesPoolPreferences(quest: QuestCoreDefinition, preferences: QuestPoolPreferences) {
  const traits = QUEST_POOL_TRAITS[quest.id];
  return preferences.typeIds.includes(quest.type) && preferences.genreIds.length > 0 &&
    Boolean(traits && (!traits.genreIds.length || traits.genreIds.some(id => preferences.genreIds.includes(id))) &&
      traits.styleIds.some(id => preferences.styleIds.includes(id)));
}
export function questAvailableInPool(quest: QuestCoreDefinition, moodId: MoodId, ownedPackIds: readonly string[], preferences: QuestPoolPreferences) {
  return isQuestUnlocked(quest.id, moodId, ownedPackIds) && matchesPoolPreferences(quest, preferences);
}
export function sanitizePoolPreferences(value: unknown): QuestPoolPreferences {
  if (!value || typeof value !== "object") return defaultPoolPreferences();
  const data = value as Record<string, unknown>;
  const defaults = defaultPoolPreferences();
  function selection<T extends string>(stored: unknown, allowed: readonly T[]): T[] {
    return Array.isArray(stored) ? [...new Set(stored.filter((id): id is T => typeof id === "string" && allowed.includes(id as T)))] : [...allowed];
  }
  return { genreIds: selection(data.genreIds, defaults.genreIds), typeIds: selection(data.typeIds, defaults.typeIds), styleIds: selection(data.styleIds, defaults.styleIds) };
}
