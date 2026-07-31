import type { MoodId, MoodQuestDefinition } from "../questTypes";
import { resolveQuestTips, type QuestTipId } from "./tips";

export type MoodQuestDraft = Omit<
  MoodQuestDefinition,
  "moodId" | "tips"
> & {
  tipIds: readonly [QuestTipId, QuestTipId];
};

export function defineMoodDeck(
  moodId: MoodId,
  quests: readonly MoodQuestDraft[],
): readonly MoodQuestDefinition[] {
  return quests.map(({ tipIds, ...quest }) => ({
    ...quest,
    moodId,
    tips: resolveQuestTips(tipIds),
  }));
}
