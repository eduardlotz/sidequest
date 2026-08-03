import type { MoodId, MoodQuestDefinition } from "../questTypes";
import { ENGLISH_QUEST_NAMES } from "./names";
import { resolveQuestTips, type QuestTipId } from "./tips";

export type MoodQuestDraft = Omit<
  MoodQuestDefinition,
  "moodId" | "name" | "tips"
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

    return {
      ...quest,
      moodId,
      name,
      tipIds,
      tips: resolveQuestTips(tipIds),
    };
  });
}
