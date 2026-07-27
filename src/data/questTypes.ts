import type {
  QuestArchetype,
  QuestGenre,
  QuestSetting,
} from "./questTaxonomy";

export type QuestDefinition = {
  id: string;
  title: string;
  objective: string;
  primaryGenre: QuestGenre;
  compatibleGenres: readonly QuestGenre[];
  requirements: readonly string[];
  archetype: QuestArchetype;
  settings: readonly QuestSetting[];
  requiresOnline: boolean;
};
