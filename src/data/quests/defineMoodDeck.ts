import type { MoodId, MoodQuestDefinition } from "../questTypes";
import { QUEST_INSTRUCTIONS } from "./instructions";
import { ENGLISH_QUEST_NAMES } from "./names";
import { resolveQuestTips, type QuestTipId } from "./tips";

export type MoodQuestDraft = Omit<
  MoodQuestDefinition,
  "moodId" | "name" | "objective" | "completion" | "tips"
> & {
  tipIds: readonly [QuestTipId, QuestTipId];
};

export function defineMoodDeck(
  moodId: MoodId,
  quests: readonly MoodQuestDraft[],
): readonly MoodQuestDefinition[] {
  return quests.map(({ tipIds, ...quest }) => {
    const name =
      ENGLISH_QUEST_NAMES[
        quest.id as keyof typeof ENGLISH_QUEST_NAMES
      ];
    if (!name) throw new Error(`Missing English quest name: ${quest.id}`);
    const instruction = QUEST_INSTRUCTIONS[quest.id];
    if (!instruction) {
      throw new Error(`Missing localized quest instruction: ${quest.id}`);
    }

    return {
      ...quest,
      moodId,
      name,
      objective: instruction.en.objective,
      completion: instruction.en.completion,
      tipIds,
      tips: resolveQuestTips(tipIds),
    };
  });
}
