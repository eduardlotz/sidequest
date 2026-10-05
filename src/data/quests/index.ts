import { AUTHORED_QUESTS } from "./catalog";
import { validateQuest } from "./validation";
import {
  MOOD_IDS,
  type AuthoredQuestDefinition,
  type MoodId,
  type MoodQuestDefinition,
  type QuestCoreDefinition,
  type QuestTranslation,
} from "../questTypes";
import { isQuestTypeAllowed } from "../questTraits";
import { QUEST_POOL_TRAITS, isQuestConnectionModeId, isQuestPlayStyleId } from "../questPoolTraits";
export type {
  AuthoredQuestDefinition,
  MoodId,
  MoodQuestDefinition as QuestDefinition,
  QuestCoreDefinition,
  QuestTranslation,
} from "../questTypes";

export const QUEST_CATALOG = AUTHORED_QUESTS;

// Catch authoring mistakes at the catalogue boundary, before any screen or store
// can use an incompatible pairing. Eligibility also consults the same table.
const seenQuestIds = new Set<string>();
for (const quest of QUEST_CATALOG) {
  validateQuest(quest);
  if (seenQuestIds.has(quest.id)) {
    throw new Error(`Duplicate quest identity ${quest.id}`);
  }
  seenQuestIds.add(quest.id);
  if (quest.moodIds.some((moodId) => !isQuestTypeAllowed(quest.type, moodId))) {
    throw new Error(`Quest ${quest.id} has a mood incompatible with ${quest.type}`);
  }
  if (!QUEST_POOL_TRAITS[quest.id]) {
    throw new Error(`Quest ${quest.id} is missing pool metadata`);
  }
  const styles = QUEST_POOL_TRAITS[quest.id].styleIds;
  if (!styles.some(isQuestConnectionModeId) || !styles.some(isQuestPlayStyleId)) {
    throw new Error(`Quest ${quest.id} needs both a connection mode and a play style`);
  }
}

export const QUEST_TRANSLATIONS_BY_ID = Object.fromEntries(
  QUEST_CATALOG.map(({ id, translations }) => [id, translations]),
) as Record<string, Readonly<Record<"en" | "de", QuestTranslation>>>;

export const QUESTS: readonly MoodQuestDefinition[] = QUEST_CATALOG.map(
  ({ translations, ...quest }) => ({
    ...quest,
    experience: quest.experience,
    rarity: quest.rarity ?? "standard",
    gameGenreIds: quest.gameGenreIds ?? QUEST_POOL_TRAITS[quest.id].genreIds,
    connectionModeIds: QUEST_POOL_TRAITS[quest.id].styleIds.filter(isQuestConnectionModeId),
    playStyleIds: QUEST_POOL_TRAITS[quest.id].styleIds.filter(isQuestPlayStyleId),
    universal: quest.universal !== false,
    gameBindable: Boolean(
      translations.en.gameObjective && translations.de.gameObjective,
    ),
    customGameCompatibility: quest.customGameCompatibility
      ? {
          ...quest.customGameCompatibility,
          match: quest.customGameCompatibility.match ?? "all",
        }
      : undefined,
    ...translations.en,
  }),
);

export const QUESTS_BY_ID = Object.fromEntries(
  QUESTS.map((quest) => [quest.id, quest]),
) as Record<string, MoodQuestDefinition>;

export const QUEST_CORES: readonly QuestCoreDefinition[] = QUESTS.map(
  ({
    id,
    experience,
    rarity,
    moodIds,
    type,
    tags,
    minimumDurationMinutes,
    maximumDurationMinutes,
    suggestedDurationMinutes,
    gameGenreIds,
    connectionModeIds,
    playStyleIds,
    universal,
    gameBindable,
    customGameCompatibility,
    customGameOverrideOnly,
    curated,
  }) => ({
    id,
    experience,
    rarity,
    moodIds,
    type,
    tags,
    minimumDurationMinutes,
    maximumDurationMinutes,
    suggestedDurationMinutes,
    gameGenreIds,
    connectionModeIds,
    playStyleIds,
    universal,
    gameBindable,
    customGameCompatibility,
    customGameOverrideOnly,
    curated,
  }),
);

export const QUEST_CORES_BY_ID = Object.fromEntries(
  QUEST_CORES.map((quest) => [quest.id, quest]),
) as Record<string, QuestCoreDefinition>;

export const QUESTS_BY_MOOD = MOOD_IDS.reduce(
  (decks, moodId) => {
    decks[moodId] = QUESTS.filter((quest) => quest.moodIds.includes(moodId) && isQuestTypeAllowed(quest.type, moodId));
    return decks;
  },
  {} as Record<MoodId, readonly MoodQuestDefinition[]>,
);

export function questsForMood(moodId: MoodId): readonly MoodQuestDefinition[] {
  return QUESTS_BY_MOOD[moodId];
}

export function questCoresForMood(
  moodId: MoodId,
): readonly QuestCoreDefinition[] {
  return QUEST_CORES.filter((quest) => quest.moodIds.includes(moodId) && isQuestTypeAllowed(quest.type, moodId));
}
