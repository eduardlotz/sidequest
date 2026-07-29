export const MOOD_IDS = [
  "relax",
  "adventure",
  "challenge",
  "story",
  "strategy",
  "creative",
  "competitive",
  "chaos",
] as const;

export type MoodId = (typeof MOOD_IDS)[number];

export const QUEST_TAGS = [
  "atmosphere",
  "building",
  "challenge",
  "collection",
  "combat",
  "competition",
  "creativity",
  "customization",
  "discovery",
  "experimentation",
  "exploration",
  "mastery",
  "narrative",
  "optimization",
  "progression",
  "protection",
  "relaxation",
  "social",
  "strategy",
  "systems",
] as const;

export type QuestTag = (typeof QUEST_TAGS)[number];

export const PLAYER_MOTIVATIONS = [
  "discover",
  "improve",
  "create",
  "overcome",
  "experience",
] as const;

export type PlayerMotivation = (typeof PLAYER_MOTIVATIONS)[number];

export type MoodDefinition = {
  id: MoodId;
  displayName: string;
  description: string;
  tags: readonly QuestTag[];
};

export type ObjectiveDefinition = {
  id: string;
  title: string;
  hint: string;
  objective: string;
  goal: string;
  worksWellWith: readonly string[];
  sessionMinutes: readonly [number, number];
  reward: string;
  motivation: PlayerMotivation;
  tags: readonly QuestTag[];
  requiresOnline: boolean;
};

export type ModifierDefinition = {
  id: string;
  title: string;
  instruction: string;
  compatibleTags?: readonly QuestTag[];
  excludedTags?: readonly QuestTag[];
};
