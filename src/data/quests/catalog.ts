import type { AuthoredQuestDefinition } from "../questTypes";
import { curatedQuests } from "./curated";
import { relaxQuests } from "./relax";

export const ALL_QUESTS: readonly AuthoredQuestDefinition[] = [
  ...relaxQuests,
  ...curatedQuests,
];
