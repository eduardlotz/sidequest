import type { QuestTypeId, QuestTagId } from "./questTraits";
import type { CustomGameCompatibility } from "./gameCompatibility";
import type { QuestConnectionModeId, QuestPlayStyleId } from "./questPoolTraits";
import type { GameGenreId } from "./gameGenres";
import type { QuestRarity } from "./questRarity";
import type { QuestPlayContext } from "./questContexts";
import type { GamePlatformId } from "./gamePlatforms";

export type QuestFinish = "open" | "outcome" | "attempt";
export type QuestPrerequisite = {
  en: string;
  de: string;
  critical: boolean;
  /** Legacy saved field; sentence labels are no longer rendered as chips. */
  chip?: Readonly<Record<"en" | "de", string>>;
  /** Short scan labels; complete conditions stay in en/de above. */
  chips?: Readonly<Record<"en" | "de", readonly string[]>>;
};
export type QuestExperience = {
  /** Authored scan hierarchy; optional only for older saved snapshots. */
  cardMetadata?: {
    genreIds: readonly GameGenreId[];
    playStyleIds: readonly ("co-op" | "local-play")[];
    platformIds?: readonly GamePlatformId[];
  };
  family: string;
  finish: QuestFinish;
  activities: readonly QuestTagId[];
  rules: readonly QuestTagId[];
  prerequisites: readonly QuestPrerequisite[];
  contexts: readonly QuestPlayContext[];
};

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
  gameGenreIds?: readonly GameGenreId[];
  id: string;
  rarity?: QuestRarity;
  moodIds: readonly MoodId[];
  type: QuestTypeId;
  tags: readonly QuestTagId[];
  minimumDurationMinutes: number;
  maximumDurationMinutes?: number;
  suggestedDurationMinutes: number;
  universal?: boolean;
  curated?: CuratedQuestDetails;
  customGameCompatibility?: CustomGameCompatibility;
  /** Only the player's explicit per-game approval can enable this session. */
  customGameOverrideOnly?: true;
  translations: Readonly<Record<"en" | "de", QuestTranslation>>;
  experience: QuestExperience;
};

export type MoodQuestDefinition = {
  experience: QuestExperience;
  id: string;
  rarity: QuestRarity;
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
  customGameOverrideOnly?: true;
};

export type QuestCoreDefinition = Pick<
  MoodQuestDefinition,
  | "id"
  | "rarity"
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
  | "customGameOverrideOnly"
  | "curated"
  | "experience"
>;
