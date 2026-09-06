import type { MoodDefinition, MoodId } from "../../data/moods";
import type { QuestDefinition } from "../../data/quests";
import type { GameReference } from "../../data/gameTypes";

export const STORE_KEY = "sidequest.quests";
export const STORE_VERSION = 12;
export const MOOD_RESET_MS = 4 * 60 * 60 * 1_000;
export const NEW_CARDS_COST = 25;
export const QUEST_OFFER_COUNT = 3;
export const STORED_COMPLETION_LIMIT = 500;
export const INITIAL_RED_ROPES = 3;
export const RED_ROPE_BUNDLE_SIZE = 1;
export const RED_ROPE_BUNDLE_COST = 10;
export const POINTS_PER_MINUTE = 5;
export const POINTS_DURATION_CAP_MS = 60 * 60 * 1_000;
export const MAX_COMPLETION_POINTS = 300;

export const AVATAR_THEMES = [
  "default",
  "wizard",
  "party-hat",
  "cook",
  "baseball-cap",
  "plumbob",
  "tuxedo",
  "graduation-hat",
  "crown",
  "pirate-hat",
  "cowboy-hat",
] as const;

export type AvatarTheme = (typeof AVATAR_THEMES)[number];

export type UserProfile = {
  points: number;
  redRopes: number;
  avatarTheme: AvatarTheme;
  debugMode: boolean;
};

export type QuestSession = {
  sessionId: string;
  moodId: MoodId;
  questId: string;
  game: GameReference | null;
  revealedAt: number;
  startedAt: number | null;
  pausedAt: number | null;
  pausedTotalMs: number;
};

export type CompletedSession = {
  id: string;
  moodId: MoodId;
  questId: string;
  game: GameReference | null;
  durationMs: number;
  pointsAwarded: number;
  completedAt: number;
};

export type QuestOffer = {
  id: string;
  moodId: MoodId;
  questId: string;
  game: GameReference | null;
};

export type QuestStats = {
  completedQuestCount: number;
  uniqueCompletedQuestCount: number;
  totalPlayedMs: number;
  cancelledQuestCount: number;
  repeatedCompletionCount: number;
  completionCountsByQuestId: Record<string, number>;
  completionCountsByMoodId: Partial<Record<MoodId, number>>;
  latestCompletionAtByMoodId: Partial<Record<MoodId, number>>;
  favoriteMoodId: MoodId | null;
};

export type QuestState = {
  profile: UserProfile;
  selectedMoodId: MoodId | null;
  moodSelectedAt: number | null;
  offeredQuests: QuestOffer[];
  offerSetsByMoodId: Partial<Record<MoodId, QuestOffer[]>>;
  offerLibraryRevision: number;
  currentSession: QuestSession | null;
  completedSessions: CompletedSession[];
  stats: QuestStats;
};

export type QuestActions = {
  selectMood: (moodId: MoodId) => boolean;
  editMood: () => boolean;
  refreshMoodWindow: () => void;
  refreshLibraryOffers: () => void;
  dealNewCards: () => boolean;
  revealQuest: (offerId: string) => boolean;
  startQuest: (startedAt: number) => void;
  pauseQuest: (pausedAt: number) => void;
  resumeQuest: (resumedAt: number) => void;
  returnCurrentSessionToSelection: () => boolean;
  discardCurrentSession: () => boolean;
  purchaseRedRopes: () => boolean;
  setDebugMode: (enabled: boolean) => void;
  completeQuest: () => CompletedSession | null;
};

export type QuestStore = QuestState & QuestActions;

export type PersistedQuestState = Pick<
  QuestState,
  | "profile"
  | "selectedMoodId"
  | "moodSelectedAt"
  | "offeredQuests"
  | "offerSetsByMoodId"
  | "offerLibraryRevision"
  | "currentSession"
  | "completedSessions"
  | "stats"
>;

export type Quest = QuestDefinition & {
  mood: MoodDefinition;
  game: GameReference | null;
};

export const DEFAULT_PROFILE: UserProfile = {
  points: 0,
  redRopes: INITIAL_RED_ROPES,
  avatarTheme: "default",
  debugMode: false,
};

export const DEFAULT_QUEST_STATS: QuestStats = {
  completedQuestCount: 0,
  uniqueCompletedQuestCount: 0,
  totalPlayedMs: 0,
  cancelledQuestCount: 0,
  repeatedCompletionCount: 0,
  completionCountsByQuestId: {},
  completionCountsByMoodId: {},
  latestCompletionAtByMoodId: {},
  favoriteMoodId: null,
};
