import type { AuthoredQuestDefinition, MoodId } from "../questTypes";

type GameQuest = {
  id: string;
  moods: readonly MoodId[];
  minutes: number;
  minimum?: number;
  installments?: readonly string[];
  sources?: readonly string[];
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
    minimumDurationMinutes: quest.minimum ?? 2,
    suggestedDurationMinutes: quest.minutes,
    genres: [],
    universal: false,
    curated: {
      gameId,
      installmentIds: quest.installments ?? [],
      sourceIds: quest.sources ?? [],
    },
    translations: {
      en: { ...quest.en, gameObjective: quest.en.objective },
      de: { ...quest.de, gameObjective: quest.de.objective },
    },
  }));
}
