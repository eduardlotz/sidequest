export const QUEST_GENRES = [
  "rpg",
  "roguelike",
  "shooter",
  "sports",
  "survival",
  "building",
  "simulation",
  "action",
  "platformer",
  "puzzle",
] as const;

export type QuestGenre = (typeof QUEST_GENRES)[number];

export const QUEST_GENRE_LABELS: Record<QuestGenre, string> = {
  rpg: "RPG",
  roguelike: "Roguelike & Roguelite",
  shooter: "Shooter",
  sports: "Sports",
  survival: "Survival",
  building: "Building & Automation",
  simulation: "Simulation",
  action: "Action & Adventure",
  platformer: "Platformer",
  puzzle: "Puzzle",
};

export const QUEST_ARCHETYPES = [
  "support",
  "adaptation",
  "expedition",
  "optimization",
  "performance",
] as const;

export type QuestArchetype = (typeof QUEST_ARCHETYPES)[number];

export const QUEST_SETTINGS = ["fantasy"] as const;

export type QuestSetting = (typeof QUEST_SETTINGS)[number];
