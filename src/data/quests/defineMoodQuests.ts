import type {
  AuthoredQuestDefinition,
  MoodId,
} from "../questTypes";

type MoodQuestInput = Omit<AuthoredQuestDefinition, "moodIds"> & {
  additionalMoodIds?: readonly MoodId[];
};

export function defineMoodQuests(
  moodId: MoodId,
  quests: readonly MoodQuestInput[],
): readonly AuthoredQuestDefinition[] {
  return quests.map(({ additionalMoodIds = [], ...quest }) => ({
    ...quest,
    moodIds: Array.from(new Set([moodId, ...additionalMoodIds])),
  }));
}
