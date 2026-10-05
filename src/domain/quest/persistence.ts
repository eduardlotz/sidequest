import { MOODS_BY_ID, type MoodId } from "../../data/moods";
import { CURATED_GAMES_BY_ID } from "../../data/games";
import { GAME_ICON_IDS } from "../../data/gameTypes";
import type { GameReference } from "../../data/gameTypes";
import { GAME_COLOR_IDS } from "../../data/gameVisuals";
import { QUEST_CORES_BY_ID } from "../../data/quests";
import { historicalQuest, refreshActiveQuestTiming, sanitizeSnapshot, snapshotQuest } from "./snapshot";
import { sanitizePoolPreferences } from "./pool";
import { createDefaultQuestState } from "./rules";
import {
  AVATAR_THEMES,
  QUEST_OFFER_COUNT,
  STORED_COMPLETION_LIMIT,
  type CompletedSession,
  type PersistedQuestState,
  type QuestOffer,
  type QuestProgress,
  type QuestSession,
} from "./model";

const record = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);
const count = (value: unknown, fallback = 0) =>
  typeof value === "number" && Number.isSafeInteger(value) && value >= 0
    ? value : fallback;
const nullableCount = (value: unknown) => count(value, -1) >= 0 ? value as number : null;
const mood = (value: unknown): value is MoodId =>
  typeof value === "string" && Object.hasOwn(MOODS_BY_ID, value);
const quest = (value: unknown): value is string =>
  typeof value === "string" && Object.hasOwn(QUEST_CORES_BY_ID, value);

function gameReference(value: unknown) {
  if (value === null) return true;
  return record(value) && typeof value.id === "string" && !!value.id
    && typeof value.name === "string" && !!value.name
    && (value.source === "curated" || value.source === "custom")
    && (value.iconId === undefined || GAME_ICON_IDS.includes(value.iconId as typeof GAME_ICON_IDS[number]))
    && (value.colorId === undefined || GAME_COLOR_IDS.includes(value.colorId as typeof GAME_COLOR_IDS[number]));
}

function liveGameReference(value: unknown) {
  return gameReference(value) && (value === null || !record(value)
    || value.source !== "curated" || Object.hasOwn(CURATED_GAMES_BY_ID, value.id as string));
}

function offer(value: unknown): value is QuestOffer {
  if (!record(value) || !mood(value.moodId) || !quest(value.questId)
      || !liveGameReference(value.game) || typeof value.id !== "string" || !value.id
      || (value.role !== "library" && value.role !== "inspiration" && value.role !== "directed")) return false;
  const definition = QUEST_CORES_BY_ID[value.questId];
  return definition.moodIds.includes(value.moodId)
    && (value.game === null ? definition.universal : definition.gameBindable);
}

function session(value: unknown): value is QuestSession {
  return record(value) && typeof value.sessionId === "string" && !!value.sessionId
    && mood(value.moodId) && typeof value.questId === "string" && Boolean(QUEST_CORES_BY_ID[value.questId] || historicalQuest(value.questId) || sanitizeSnapshot(value.snapshot, value.questId)) && gameReference(value.game)
    && count(value.revealedAt, -1) >= 0
    && (value.startedAt === null || count(value.startedAt, -1) >= 0)
    && (value.pausedAt === null || count(value.pausedAt, -1) >= 0)
    && count(value.pausedTotalMs, -1) >= 0
    ;
}

function archivedGame(value: unknown): GameReference | null {
  if (!record(value) || typeof value.id !== "string" || !value.id
      || typeof value.name !== "string" || !value.name
      || (value.source !== "curated" && value.source !== "custom")) return null;
  const exactId = typeof value.installmentId === "string" && value.installmentId
    ? value.installmentId : CURATED_GAMES_BY_ID[value.id]?.installments.find(entry => entry.name === value.name)?.id;
  return {
    id: value.id,
    name: value.name,
    source: value.source,
    ...(exactId ? { installmentId: exactId } : {}),
    ...(Array.isArray(value.installmentIds)
      ? { installmentIds: [...new Set(value.installmentIds.filter((id): id is string => typeof id === "string" && !!id))] } : {}),
    ...(GAME_ICON_IDS.includes(value.iconId as typeof GAME_ICON_IDS[number])
      ? { iconId: value.iconId as typeof GAME_ICON_IDS[number] } : {}),
    ...(GAME_COLOR_IDS.includes(value.colorId as typeof GAME_COLOR_IDS[number])
      ? { colorId: value.colorId as typeof GAME_COLOR_IDS[number] } : {}),
  };
}

// Retired quest/game IDs remain in historical records so their earned coins survive.
function completion(value: unknown): CompletedSession | null {
  if (!(record(value) && typeof value.id === "string" && !!value.id
    && mood(value.moodId) && typeof value.questId === "string" && !!value.questId
    && count(value.durationMs, -1) >= 0
    && count(value.pointsAwarded, -1) >= 0 && count(value.completedAt, -1) >= 0)) return null;
  return {
    id: value.id,
    moodId: value.moodId,
    questId: value.questId,
    game: archivedGame(value.game),
    durationMs: value.durationMs as number,
    pointsAwarded: value.pointsAwarded as number,
    completedAt: value.completedAt as number,
    snapshot: sanitizeSnapshot(value.snapshot, value.questId) ?? historicalQuest(value.questId),
  };
}

function progress(value: unknown): QuestProgress | null {
  if (!record(value)) return null;
  const lastCompletion = completion(value.lastCompletion);
  return {
    seenOffer: offer(value.seenOffer) ? value.seenOffer : null,
    seenAt: count(value.seenAt),
    favorite: value.favorite === true,
    totalPlayedMs: count(value.totalPlayedMs),
    coinsEarned: count(value.coinsEarned),
    longestSessionMs: count(value.longestSessionMs),
    bestTimeMs: nullableCount(value.bestTimeMs),
    lastCompletion,
  };
}

function countsByKey(value: unknown, validKey: (key: string) => boolean): Record<string, number> {
  const result: Record<string, number> = {};
  if (!record(value)) return result;
  for (const [key, total] of Object.entries(value)) {
    if (validKey(key) && count(total, -1) >= 0) result[key] = total as number;
  }
  return result;
}

function uniqueOffers(value: unknown): QuestOffer[] {
  if (!Array.isArray(value)) return [];
  const ids = new Set<string>();
  return value.filter((entry): entry is QuestOffer => {
    if (!offer(entry) || ids.has(entry.id) || ids.size >= QUEST_OFFER_COUNT) return false;
    ids.add(entry.id);
    return true;
  });
}

/**
 * Use this on both version changes and same-version hydration. Add future
 * fields from defaults, retain currency/preferences/history, and invalidate
 * only live cards or sessions whose catalogue identities disappeared.
 */
export function migrateQuestState(value: unknown): PersistedQuestState {
  const defaults = createDefaultQuestState();
  if (!record(value)) return defaults;
  const savedProfile = record(value.profile) ? value.profile : {};
  const savedStats = record(value.stats) ? value.stats : {};
  const savedSelection = record(value.gameSelection) && typeof value.gameSelection.gameId === "string"
    && (value.gameSelection.installmentId === null
      || typeof value.gameSelection.installmentId === "string")
    ? { gameId: value.gameSelection.gameId,
        installmentId: value.gameSelection.installmentId as string | null }
    : null;
  // New Horizons is now the standalone Animal Crossing entry. Keep a saved
  // selection of that installment instead of clearing it during hydration.
  const selection = savedSelection?.gameId === "animal-crossing"
    && savedSelection.installmentId === "new-horizons"
    ? { ...savedSelection, installmentId: null } : savedSelection;
  const blacklistedQuestIds = Array.isArray(value.blacklistedQuestIds)
    ? [...new Set(value.blacklistedQuestIds.filter((id): id is string => typeof id === "string" && !!id))] : [];
  const blacklist = new Set(blacklistedQuestIds);
  const liveOffers = (value: unknown) => uniqueOffers(value)
    .filter((offer) => !blacklist.has(offer.questId));
  const offeredQuests = liveOffers(value.offeredQuests);
  const offerSetsByMoodId: PersistedQuestState["offerSetsByMoodId"] = {};
  if (record(value.offerSetsByMoodId)) {
    for (const [id, offers] of Object.entries(value.offerSetsByMoodId)) {
      if (mood(id)) offerSetsByMoodId[id] = liveOffers(offers);
    }
  }
  const questProgressById: PersistedQuestState["questProgressById"] = {};
  if (record(value.questProgressById)) {
    for (const [id, saved] of Object.entries(value.questProgressById)) {
      const normalized = progress(saved);
      if (normalized) questProgressById[id] = normalized;
    }
  }
  return {
    freeShufflesRemaining: Math.min(count(value.freeShufflesRemaining, defaults.freeShufflesRemaining), defaults.freeShufflesRemaining),
    blacklistedQuestIds,
    gameSelection: selection,
    poolPreferences: sanitizePoolPreferences(value.poolPreferences),
    profile: {
      points: count(savedProfile.points, count(savedProfile.coins)),
      avatarTheme: AVATAR_THEMES.includes(savedProfile.avatarTheme as typeof AVATAR_THEMES[number])
        ? savedProfile.avatarTheme as typeof AVATAR_THEMES[number]
        : defaults.profile.avatarTheme,
      debugMode: typeof savedProfile.debugMode === "boolean"
        ? savedProfile.debugMode : defaults.profile.debugMode,
    },
    selectedMoodId: selection ? null : mood(value.selectedMoodId) ? value.selectedMoodId : null,
    moodSelectedAt: nullableCount(value.moodSelectedAt),
    offeredQuests,
    offerSetsByMoodId,
    offerLibraryRevision: count(value.offerLibraryRevision),
    currentSession: session(value.currentSession) ? { ...value.currentSession,
      game: archivedGame(value.currentSession.game),
      snapshot: refreshActiveQuestTiming(sanitizeSnapshot(value.currentSession.snapshot, value.currentSession.questId)
        ?? historicalQuest(value.currentSession.questId)
        ?? snapshotQuest(value.currentSession.questId, archivedGame(value.currentSession.game))),
    } : null,
    completedSessions: Array.isArray(value.completedSessions)
      ? value.completedSessions.map(completion)
          .filter((entry): entry is CompletedSession => entry !== null)
          .slice(0, STORED_COMPLETION_LIMIT) : [],
    questProgressById,
    stats: {
      completedQuestCount: count(savedStats.completedQuestCount),
      uniqueCompletedQuestCount: count(savedStats.uniqueCompletedQuestCount),
      totalPlayedMs: count(savedStats.totalPlayedMs),
      totalCoinsCollected: count(savedStats.totalCoinsCollected),
      cancelledQuestCount: count(savedStats.cancelledQuestCount),
      repeatedCompletionCount: count(savedStats.repeatedCompletionCount),
      completionCountsByQuestId: countsByKey(savedStats.completionCountsByQuestId, () => true),
      completionCountsByMoodId: countsByKey(savedStats.completionCountsByMoodId, mood),
      latestCompletionAtByMoodId: countsByKey(savedStats.latestCompletionAtByMoodId, mood),
      favoriteMoodId: mood(savedStats.favoriteMoodId) ? savedStats.favoriteMoodId : null,
    },
  };
}
