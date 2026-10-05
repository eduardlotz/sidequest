import { GAME_GENRE_IDS } from "../../data/gameGenres";
import { QUEST_TYPES, type QuestTypeId } from "../../data/questTraits";
import { QUEST_CONNECTION_MODE_IDS, QUEST_PLAY_STYLE_IDS } from "../../data/questPoolTraits";
import { QUEST_ORIGINS, QUEST_PEOPLE, QUEST_PARTICIPATION, QUEST_FORMATIONS, matchesPlayContext, type QuestPlayContext } from "../../data/questContexts";
import type { QuestCoreDefinition } from "../../data/questTypes";
import type { QuestPoolPreferences } from "./model";

export const POOL_OPTIONS = {
  originIds: Object.keys(QUEST_ORIGINS) as (keyof typeof QUEST_ORIGINS)[],
  genreIds: GAME_GENRE_IDS,
  typeIds: Object.keys(QUEST_TYPES) as QuestTypeId[],
  connectionModeIds: QUEST_CONNECTION_MODE_IDS,
  peopleIds: Object.keys(QUEST_PEOPLE) as (keyof typeof QUEST_PEOPLE)[],
  participationIds: Object.keys(QUEST_PARTICIPATION) as (keyof typeof QUEST_PARTICIPATION)[],
  formationIds: Object.keys(QUEST_FORMATIONS) as (keyof typeof QUEST_FORMATIONS)[],
};
export type PoolGroup = keyof typeof POOL_OPTIONS;
export const POOL_GROUPS = Object.keys(POOL_OPTIONS) as PoolGroup[];
export function defaultPoolPreferences(): QuestPoolPreferences {
  return {
    originIds: [...POOL_OPTIONS.originIds], genreIds: [...GAME_GENRE_IDS],
    typeIds: [...POOL_OPTIONS.typeIds], connectionModeIds: [...QUEST_CONNECTION_MODE_IDS],
    peopleIds: [...POOL_OPTIONS.peopleIds], participationIds: [...POOL_OPTIONS.participationIds],
    formationIds: [...POOL_OPTIONS.formationIds], allGroups: [...POOL_GROUPS],
  };
}
export function invalidPoolGroups(preferences: QuestPoolPreferences) {
  return POOL_GROUPS.filter((group) => !preferences[group].length);
}
export function matchesPoolPreferences(quest: QuestCoreDefinition, preferences: QuestPoolPreferences) {
  return preferences.originIds.includes(quest.curated ? "curated" : "flexible")
    && preferences.typeIds.includes(quest.type)
    && preferences.genreIds.length > 0
    && (!quest.gameGenreIds.length || quest.gameGenreIds.some((id) => preferences.genreIds.includes(id)))
    && quest.experience.contexts.some((context) => matchesPlayContext(context, preferences)
      && matchesLegacyContext(context, preferences));
}
export function matchesLegacyContext(context: QuestPlayContext, preferences: QuestPoolPreferences) {
  return !preferences.legacyStyleIds || preferences.legacyStyleIds.some((id) =>
    id === "solo" ? context.people === "alone" : id === "co-op" ? context.people === "others" : context.formation === id);
}
// The gallery's source facet remains independent of saved pool preferences.
export function matchesQuestSource(quest: Pick<QuestCoreDefinition, "curated">, source: "all" | "curated" | "flexible") {
  return source === "all" || (source === "curated" ? Boolean(quest.curated) : !quest.curated);
}
export function sanitizePoolPreferences(value: unknown): QuestPoolPreferences {
  const defaults = defaultPoolPreferences();
  if (!value || typeof value !== "object") return defaults;
  const data = value as Record<string, unknown>;
  const old = !Array.isArray(data.originIds);
  function selection<T extends string>(stored: unknown, allowed: readonly T[]): T[] {
    return Array.isArray(stored) ? [...new Set(stored.filter((id): id is T => typeof id === "string" && allowed.includes(id as T)))] : [...allowed];
  }
  const result = { ...defaults, allGroups: [] as string[] };
  for (const group of POOL_GROUPS) {
    const options = POOL_OPTIONS[group];
    const stored = data[group];
    const oldOptions = group === "genreIds" ? options.filter((id) => !["horror", "mmo", "management"].includes(id)) : options;
    const allIntent = Array.isArray(data.allGroups) ? data.allGroups.includes(group)
      : Array.isArray(stored) && oldOptions.every((id) => stored.includes(id));
    const selected = allIntent ? [...options] : selection(stored, options);
    // The group key determines the element type, checked against its own options above.
    Object.assign(result, { [group]: selected });
    if (selected.length === options.length) result.allGroups.push(group);
  }
  if (old) {
    result.originIds = data.questSource === "curated" ? ["curated"] : data.questSource === "flexible" ? ["flexible"] : [...defaults.originIds];
    if (result.originIds.length < 2) result.allGroups = result.allGroups.filter((id) => id !== "originIds");
    const styles = selection(data.styleIds, QUEST_PLAY_STYLE_IDS);
    if (styles.length !== QUEST_PLAY_STYLE_IDS.length) {
      result.legacyStyleIds = styles;
      if (styles.every((id) => id === "solo" || id === "co-op")) {
        result.peopleIds = styles.map((id) => id === "solo" ? "alone" : "others");
        result.allGroups = result.allGroups.filter((id) => id !== "peopleIds");
      } else if (styles.every((id) => id === "team" || id === "squad")) {
        result.formationIds = styles as ("team" | "squad")[];
        result.allGroups = result.allGroups.filter((id) => id !== "formationIds");
      }
    }
  } else if (Array.isArray(data.legacyStyleIds)) {
    result.legacyStyleIds = selection(data.legacyStyleIds, QUEST_PLAY_STYLE_IDS);
  }
  return result;
}
