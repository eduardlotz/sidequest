import type { AuthoredQuestDefinition } from "../questTypes";
import { validateQuest } from "./validation";

/** Every live record owns its complete specification; edits are never overridden. */
export function defineQuests(quests: readonly AuthoredQuestDefinition[]): readonly AuthoredQuestDefinition[] {
  quests.forEach(validateQuest);
  return quests;
}
