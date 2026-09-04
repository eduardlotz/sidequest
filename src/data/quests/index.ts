import {
  MOOD_IDS,
  type AuthoredQuestDefinition,
  type MoodId,
  type MoodQuestDefinition,
  type QuestCoreDefinition,
  type QuestTranslation,
} from "../questTypes";
import { challengeQuests } from "./challenge";
import { connectQuests } from "./connect";
import { createQuests } from "./create";
import { curiousQuests } from "./curious";
import { exploreQuests } from "./explore";
import { focusedQuests } from "./focused";
import { lowEnergyQuests } from "./low-energy";
import { nostalgicQuests } from "./nostalgic";
import { overwhelmedQuests } from "./overwhelmed";
import { progressQuests } from "./progress";
import { relaxQuests } from "./relax";
import { restlessQuests } from "./restless";

export type {
  AuthoredQuestDefinition,
  MoodId,
  MoodQuestDefinition as QuestDefinition,
  QuestCoreDefinition,
  QuestTranslation,
} from "../questTypes";

const MOOD_QUESTS = {
  relax: relaxQuests,
  explore: exploreQuests,
  progress: progressQuests,
  create: createQuests,
  challenge: challengeQuests,
  connect: connectQuests,
  nostalgic: nostalgicQuests,
  overwhelmed: overwhelmedQuests,
  restless: restlessQuests,
  focused: focusedQuests,
  curious: curiousQuests,
  "low-energy": lowEnergyQuests,
} satisfies Record<MoodId, readonly AuthoredQuestDefinition[]>;

export const QUEST_CATALOG: readonly AuthoredQuestDefinition[] =
  MOOD_IDS.flatMap((moodId) => MOOD_QUESTS[moodId]);

export const QUEST_TRANSLATIONS_BY_ID = Object.fromEntries(
  QUEST_CATALOG.map(({ id, translations }) => [id, translations]),
) as Record<string, Readonly<Record<"en" | "de", QuestTranslation>>>;

export const QUESTS: readonly MoodQuestDefinition[] = QUEST_CATALOG.map(
  ({ translations, ...quest }) => ({
    ...quest,
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
    moodIds,
    minimumDurationMinutes,
    suggestedDurationMinutes,
    genres,
    universal,
    gameBindable,
    customGameCompatibility,
  }) => ({
    id,
    moodIds,
    minimumDurationMinutes,
    suggestedDurationMinutes,
    genres,
    universal,
    gameBindable,
    customGameCompatibility,
  }),
);

export const QUEST_CORES_BY_ID = Object.fromEntries(
  QUEST_CORES.map((quest) => [quest.id, quest]),
) as Record<string, QuestCoreDefinition>;

export const QUESTS_BY_MOOD = MOOD_IDS.reduce(
  (decks, moodId) => {
    decks[moodId] = QUESTS.filter((quest) => quest.moodIds.includes(moodId));
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
  return QUEST_CORES.filter((quest) => quest.moodIds.includes(moodId));
}
