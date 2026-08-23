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

export type QuestTranslation = {
  name: string;
  objective: string;
};

export type AuthoredQuestDefinition = {
  moodId: MoodId;
  minimumDurationMinutes: number;
  suggestedDurationMinutes: number;
  genres: readonly string[];
  translations: Readonly<Record<"en" | "de", QuestTranslation>>;
};

export type MoodQuestDefinition = {
  id: string;
  moodId: MoodId;
  name: string;
  objective: string;
  minimumDurationMinutes: number;
  suggestedDurationMinutes: number;
  genres: readonly string[];
};

export type QuestCoreDefinition = Pick<
  MoodQuestDefinition,
  | "id"
  | "moodId"
  | "minimumDurationMinutes"
  | "suggestedDurationMinutes"
  | "genres"
>;
