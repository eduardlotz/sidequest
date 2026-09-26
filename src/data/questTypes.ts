import type { QuestTypeId, QuestTagId } from "./questTraits";
import type { CustomGameCompatibility } from "./gameCompatibility";
import type { QuestConnectionModeId, QuestPlayStyleId } from "./questPoolTraits";
import type { GameGenreId } from "./gameGenres";

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
};

export type AuthoredQuestDefinition = {
  id: string;
  moodIds: readonly MoodId[];
  type: QuestTypeId;
  tags: readonly QuestTagId[];
  minimumDurationMinutes: number;
  maximumDurationMinutes?: number;
  suggestedDurationMinutes: number;
  universal?: boolean;
  curated?: CuratedQuestDetails;
  customGameCompatibility?: CustomGameCompatibility;
  translations: Readonly<Record<"en" | "de", QuestTranslation>>;
};

export type MoodQuestDefinition = {
  id: string;
  moodIds: readonly MoodId[];
  type: QuestTypeId;
  tags: readonly QuestTagId[];
  name: string;
  objective: string;
  gameObjective?: string;
  minimumDurationMinutes: number;
  maximumDurationMinutes?: number;
  suggestedDurationMinutes: number;
  gameGenreIds: readonly GameGenreId[];
  connectionModeIds: readonly QuestConnectionModeId[];
  playStyleIds: readonly QuestPlayStyleId[];
  universal: boolean;
  gameBindable: boolean;
  curated?: CuratedQuestDetails;
  customGameCompatibility?: CustomGameCompatibility & { match: "all" | "any" };
};

export type QuestCoreDefinition = Pick<
  MoodQuestDefinition,
  | "id"
  | "moodIds"
  | "type"
  | "tags"
  | "minimumDurationMinutes"
  | "maximumDurationMinutes"
  | "suggestedDurationMinutes"
  | "gameGenreIds"
  | "connectionModeIds"
  | "playStyleIds"
  | "universal"
  | "gameBindable"
  | "customGameCompatibility"
  | "curated"
>;
