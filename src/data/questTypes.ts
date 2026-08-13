export const MOOD_IDS = [
  "relax",
  "explore",
  "progress",
  "create",
  "challenge",
  "connect",
  "nostalgic",
  "overwhelmed",
  "restless",
  "focused",
  "curious",
  "low-energy",
] as const;

export type MoodId = (typeof MOOD_IDS)[number];

export type MoodDefinition = {
  id: MoodId;
  title: string;
  subtitle: string;
};

export type QuestTipScope = "gameplay" | "game-selection";

export type QuestTip = {
  scope: QuestTipScope;
  title: string;
  description: string;
};

export type QuestTranslation = {
  name: string;
  title: string;
  objective: string;
  tips: readonly [QuestTip, QuestTip];
};

export type AuthoredQuestDefinition = {
  moodId: MoodId;
  minimumDurationMinutes: number;
  suggestedDurationMinutes: number;
  rewardPoints: number;
  translations: Readonly<Record<"en" | "de", QuestTranslation>>;
};

export type MoodQuestDefinition = {
  id: string;
  moodId: MoodId;
  name: string;
  title: string;
  objective: string;
  minimumDurationMinutes: number;
  suggestedDurationMinutes: number;
  rewardPoints: number;
  tips: readonly QuestTip[];
};

export type QuestCoreDefinition = Pick<
  MoodQuestDefinition,
  | "id"
  | "moodId"
  | "minimumDurationMinutes"
  | "suggestedDurationMinutes"
  | "rewardPoints"
>;
