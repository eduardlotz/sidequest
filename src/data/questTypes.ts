import type { GameCapabilityId } from "./gameTypes";

export const MOOD_IDS = [
  "low-energy",
  "relax",
  "explore",
  "progress",
  "challenge",
  "restless",
  "connect",
  "focused",
  "nostalgic",
  "create",
  "overwhelmed",
  "curious",
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
  gameObjective?: string;
};

export type CuratedQuestDetails = {
  gameId: string;
  installmentIds: readonly string[];
  sourceIds: readonly string[];
};

export type AuthoredQuestDefinition = {
  id: string;
  moodIds: readonly MoodId[];
  minimumDurationMinutes: number;
  suggestedDurationMinutes: number;
  genres: readonly string[];
  universal?: boolean;
  curated?: CuratedQuestDetails;
  customGameCompatibility?: {
    capabilityIds: readonly GameCapabilityId[];
    match?: "all" | "any";
  };
  translations: Readonly<Record<"en" | "de", QuestTranslation>>;
};

export type MoodQuestDefinition = {
  id: string;
  moodIds: readonly MoodId[];
  name: string;
  objective: string;
  gameObjective?: string;
  minimumDurationMinutes: number;
  suggestedDurationMinutes: number;
  genres: readonly string[];
  universal: boolean;
  gameBindable: boolean;
  curated?: CuratedQuestDetails;
  customGameCompatibility?: {
    capabilityIds: readonly GameCapabilityId[];
    match: "all" | "any";
  };
};

export type QuestCoreDefinition = Pick<
  MoodQuestDefinition,
  | "id"
  | "moodIds"
  | "minimumDurationMinutes"
  | "suggestedDurationMinutes"
  | "genres"
  | "universal"
  | "gameBindable"
  | "customGameCompatibility"
  | "curated"
>;
