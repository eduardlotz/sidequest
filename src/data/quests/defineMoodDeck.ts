import type { MoodId, MoodQuestDefinition } from "../questTypes";
import { buildQuestPrompt, QUEST_INSTRUCTIONS } from "./instructions";
import { applyQuestTipReview } from "./tipReview";
import { ENGLISH_QUEST_NAMES } from "./names";
import { resolveQuestTips, type QuestTipId } from "./tips";

export type MoodQuestDraft = Omit<
  MoodQuestDefinition,
  "moodId" | "name" | "title" | "objective" | "completion" | "tips"
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
    const prompt = buildQuestPrompt(quest.id, "en", instruction.en);
    const reviewedTipIds = applyQuestTipReview(quest.id, tipIds);

    return {
      ...quest,
      moodId,
      name,
      ...prompt,
      tipIds: reviewedTipIds,
      tips: resolveQuestTips(reviewedTipIds),
    };
  });
}
