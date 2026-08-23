import {
  MOOD_IDS,
  type MoodId,
  type MoodQuestDefinition,
  type QuestCoreDefinition,
  type QuestTranslation,
} from "../questTypes";
import { ALL_QUESTS } from "./catalog";

export type {
  AuthoredQuestDefinition,
  MoodId,
  MoodQuestDefinition as QuestDefinition,
  QuestCoreDefinition,
  QuestTranslation,
} from "../questTypes";

type CatalogEntry = {
  id: string;
  moodId: MoodId;
  minimumDurationMinutes: number;
  suggestedDurationMinutes: number;
  genres: readonly string[];
  translations: Readonly<Record<"en" | "de", QuestTranslation>>;
};

const moodQuestCounts = Object.fromEntries(
  MOOD_IDS.map((moodId) => [moodId, 0]),
) as Record<MoodId, number>;

function generatedQuestId(moodId: MoodId): string {
  moodQuestCounts[moodId] += 1;
  return `${moodId}-${String(moodQuestCounts[moodId]).padStart(3, "0")}`;
}

export const QUEST_CATALOG: readonly CatalogEntry[] = ALL_QUESTS.map(
  (quest) => ({
    ...quest,
    id: generatedQuestId(quest.moodId),
  }),
);

export const QUEST_TRANSLATIONS_BY_ID = Object.fromEntries(
  QUEST_CATALOG.map(({ id, translations }) => [id, translations]),
) as Record<string, Readonly<Record<"en" | "de", QuestTranslation>>>;

export const QUESTS: readonly MoodQuestDefinition[] = QUEST_CATALOG.map(
  ({ translations, ...quest }) => ({
    ...quest,
    ...translations.en,
  }),
);

export const QUESTS_BY_ID = Object.fromEntries(
  QUESTS.map((quest) => [quest.id, quest]),
) as Record<string, MoodQuestDefinition>;

export const QUEST_CORES: readonly QuestCoreDefinition[] = QUESTS.map(
  ({
    id,
    moodId,
    minimumDurationMinutes,
    suggestedDurationMinutes,
    genres,
  }) => ({
    id,
    moodId,
    minimumDurationMinutes,
    suggestedDurationMinutes,
    genres,
  }),
);

export const QUEST_CORES_BY_ID = Object.fromEntries(
  QUEST_CORES.map((quest) => [quest.id, quest]),
) as Record<string, QuestCoreDefinition>;

export const QUESTS_BY_MOOD = MOOD_IDS.reduce(
  (decks, moodId) => {
    decks[moodId] = QUESTS.filter((quest) => quest.moodId === moodId);
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
  return QUEST_CORES.filter((quest) => quest.moodId === moodId);
}
