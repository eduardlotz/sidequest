import type { QuestTypeId, QuestTagId } from "../questTraits";
import type { AuthoredQuestDefinition, MoodId } from "../questTypes";

type GameQuest = {
  id: string;
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
    moodIds: quest.moods,
    type: quest.type,
    tags: quest.tags,
    minimumDurationMinutes: quest.minimum ?? 2,
    suggestedDurationMinutes: quest.minutes,
    genres: [],
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
