import type { QuestTranslation } from "../data/quests";
import {
  buildQuestPrompt,
  QUEST_INSTRUCTIONS,
} from "../data/quests/instructions";
import { germanQuestNames } from "./questNames.de";

export const germanQuestTranslations = Object.fromEntries(
  Object.entries(QUEST_INSTRUCTIONS).map(([id, instruction]) => {
    const name = germanQuestNames[id as keyof typeof germanQuestNames];
    if (!name) throw new Error(`Missing German quest name: ${id}`);
    return [id, { name, ...buildQuestPrompt(id, "de", instruction.de) }];
  }),
) as Record<string, QuestTranslation>;
