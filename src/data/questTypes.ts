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

export type QuestTip = {
  title: string;
  description: string;
};

export type MoodQuestDefinition = {
  id: string;
  moodId: MoodId;
  name: string;
  title: string;
  objective: string;
  completion: string;
  minimumDurationMinutes: number;
  suggestedDurationMinutes: number;
  rewardPoints: number;
  tipIds: readonly [string, string];
  tips: readonly QuestTip[];
};

export type QuestCoreDefinition = Pick<
  MoodQuestDefinition,
  | "id"
  | "moodId"
  | "minimumDurationMinutes"
  | "suggestedDurationMinutes"
  | "rewardPoints"
  | "tipIds"
>;

export type QuestTranslation = Pick<
  MoodQuestDefinition,
  "name" | "title" | "objective" | "completion"
>;
