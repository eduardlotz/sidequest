import { GAME_GENRE_IDS } from "../../data/gameGenres";
import { QUEST_TYPES, type QuestTypeId } from "../../data/questTraits";
import { QUEST_CONNECTION_MODE_IDS, QUEST_PLAY_STYLE_IDS } from "../../data/questPoolTraits";
import type { QuestCoreDefinition } from "../../data/questTypes";
import type { QuestPoolPreferences } from "./model";

export function defaultPoolPreferences(): QuestPoolPreferences {
  return {
    genreIds: [...GAME_GENRE_IDS],
    typeIds: Object.keys(QUEST_TYPES) as QuestTypeId[],
    connectionModeIds: [...QUEST_CONNECTION_MODE_IDS],
    styleIds: [...QUEST_PLAY_STYLE_IDS],
  };
}
export function matchesPoolPreferences(quest: QuestCoreDefinition, preferences: QuestPoolPreferences) {
  // Pool genre is authored independently of custom-game compatibility.
  const genres = quest.gameGenreIds;
  return preferences.typeIds.includes(quest.type) && preferences.genreIds.length > 0 &&
    (!genres.length || genres.some(id => preferences.genreIds.includes(id))) &&
    quest.connectionModeIds.some(id => preferences.connectionModeIds.includes(id)) &&
    quest.playStyleIds.some(id => preferences.styleIds.includes(id));
}
export function sanitizePoolPreferences(value: unknown): QuestPoolPreferences {
  if (!value || typeof value !== "object") return defaultPoolPreferences();
  const data = value as Record<string, unknown>;
  const defaults = defaultPoolPreferences();
  function selection<T extends string>(stored: unknown, allowed: readonly T[]): T[] {
    return Array.isArray(stored) ? [...new Set(stored.filter((id): id is T => typeof id === "string" && allowed.includes(id as T)))] : [...allowed];
  }
  return {
    genreIds: selection(data.genreIds, defaults.genreIds),
    typeIds: selection(data.typeIds, defaults.typeIds),
    connectionModeIds: selection(data.connectionModeIds, defaults.connectionModeIds),
    styleIds: selection(data.styleIds, defaults.styleIds),
  };
}

// Versions before 20 stored connection modes and play styles in one selection.
export function migrateLegacyPoolPreferences(value: unknown): QuestPoolPreferences {
  if (!value || typeof value !== "object") return defaultPoolPreferences();
  const data = value as Record<string, unknown>;
  const legacyStyleIds = data.styleIds;
  if (Array.isArray(data.connectionModeIds) || !Array.isArray(legacyStyleIds)) {
    return sanitizePoolPreferences(data);
  }

  function group<T extends string>(allowed: readonly T[]): T[] {
    if (legacyStyleIds.length === 0) return [];
    const selected = allowed.filter((id) => legacyStyleIds.includes(id));
    return selected.length ? selected : [...allowed];
  }

  return sanitizePoolPreferences({
    ...data,
    connectionModeIds: group(QUEST_CONNECTION_MODE_IDS),
    styleIds: group(QUEST_PLAY_STYLE_IDS),
  });
}
