export const MOOD_IDS = [
  "relax",
  "explore",
  "progress",
  "create",
  "challenge",
  "connect",
] as const;

export type MoodId = (typeof MOOD_IDS)[number];

export type CompatibilityTag =
  | `mode:${string}`
  | `play:${string}`
  | `system:${string}`
  | `allow:${string}`;

export type MoodDefinition = {
  id: MoodId;
  title: string;
  subtitle: string;
};

export type MoodQuestDefinition = {
  id: string;
  moodId: MoodId;
  title: string;
  objective: string;
  completion: string;
  durationMinutes: number;
  rewardPoints: number;
  motivation: string;
  compatibilityTags: readonly CompatibilityTag[];
};

export type ModifierDefinition = {
  id: string;
  title: string;
  instruction: string;
  bonusPoints: number;
  requiredTags?: readonly CompatibilityTag[];
  excludedTags?: readonly CompatibilityTag[];
  exclusiveGroup?: string;
};
