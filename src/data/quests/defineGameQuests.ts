import type { QuestTypeId, QuestTagId } from "../questTraits";
import type { AuthoredQuestDefinition, MoodId } from "../questTypes";
import type { QuestRarity } from "../questRarity";

type GameQuest = {
  id: string;
  rarity?: QuestRarity;
  moods: readonly MoodId[];
  type: QuestTypeId;
  tags: readonly QuestTagId[];
  minutes: number;
  minimum?: number;
  installments?: readonly string[];
  en: { name: string; objective: string };
  de: { name: string; objective: string };
};

export function defineGameQuests(
  gameId: string,
  quests: readonly GameQuest[],
): AuthoredQuestDefinition[] {
  return quests.map((quest) => ({
    id: `${gameId}-${quest.id}`,
    rarity: quest.rarity,
    moodIds: quest.moods,
    type: quest.type,
    tags: quest.tags,
    minimumDurationMinutes: quest.minimum ?? 2,
    suggestedDurationMinutes: quest.minutes,
    universal: false,
    curated: {
      gameId,
      installmentIds: quest.installments ?? [],
    },
    translations: {
      en: { ...quest.en, gameObjective: quest.en.objective },
      de: { ...quest.de, gameObjective: quest.de.objective },
    },
  }));
}
