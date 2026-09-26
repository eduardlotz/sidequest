import { MOODS_BY_ID } from "../../data/moods";
import { QUEST_CORES_BY_ID } from "../../data/quests";
import { GAME_GENRE_IDS } from "../../data/gameGenres";
import { QUEST_TYPES } from "../../data/questTraits";
import { QUEST_CONNECTION_MODE_IDS, QUEST_PLAY_STYLE_IDS } from "../../data/questPoolTraits";
import { AVATAR_THEMES, QUEST_OFFER_COUNT, type PersistedQuestState } from "./model";
import { GAME_ICON_IDS } from "../../data/gameTypes";
import { GAME_COLOR_IDS } from "../../data/gameVisuals";

const record = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);
const integer = (value: unknown): value is number =>
  typeof value === "number" && Number.isSafeInteger(value) && value >= 0;
const nullableInteger = (value: unknown) => value === null || integer(value);
const mood = (value: unknown): value is keyof typeof MOODS_BY_ID =>
  typeof value === "string" && Object.hasOwn(MOODS_BY_ID, value);
const quest = (value: unknown) =>
  typeof value === "string" && Object.hasOwn(QUEST_CORES_BY_ID, value);
const uniqueStrings = (value: unknown, allowed: readonly string[]) =>
  Array.isArray(value) && value.every((id) => typeof id === "string" && allowed.includes(id))
  && new Set(value).size === value.length;
const countRecord = (value: unknown, keys: (id: string) => boolean) =>
  record(value) && Object.entries(value).every(([id, count]) => keys(id) && integer(count));

function gameReference(value: unknown) {
  return value === null || (record(value) && typeof value.id === "string" && !!value.id
    && typeof value.name === "string" && !!value.name
    && (value.source === "curated" || value.source === "custom")
    && (value.iconId === undefined || GAME_ICON_IDS.includes(value.iconId as typeof GAME_ICON_IDS[number]))
    && (value.colorId === undefined || GAME_COLOR_IDS.includes(value.colorId as typeof GAME_COLOR_IDS[number])));
}

function offer(value: unknown) {
  if (!record(value) || !mood(value.moodId) || !quest(value.questId)
      || !gameReference(value.game) || typeof value.id !== "string" || !value.id) return false;
  const definition = QUEST_CORES_BY_ID[value.questId as string];
  return definition.moodIds.includes(value.moodId)
    && (value.game === null ? definition.universal : definition.gameBindable)
    && (value.role === "library" || value.role === "inspiration" || value.role === "directed");
}

function session(value: unknown) {
  return record(value) && typeof value.sessionId === "string" && !!value.sessionId
    && mood(value.moodId) && quest(value.questId) && gameReference(value.game)
    && integer(value.revealedAt) && nullableInteger(value.startedAt)
    && nullableInteger(value.pausedAt) && integer(value.pausedTotalMs)
    && QUEST_CORES_BY_ID[value.questId as string].moodIds.includes(value.moodId);
}

function completion(value: unknown) {
  return record(value) && typeof value.id === "string" && !!value.id
    && mood(value.moodId) && quest(value.questId) && gameReference(value.game)
    && integer(value.durationMs) && integer(value.pointsAwarded)
    && integer(value.completedAt)
    && QUEST_CORES_BY_ID[value.questId as string].moodIds.includes(value.moodId);
}

export function isPersistedQuestState(value: unknown): value is PersistedQuestState {
  if (!record(value)) return false;
  const profile = value.profile;
  const pool = value.poolPreferences;
  const selection = value.gameSelection;
  const stats = value.stats;
  if (!record(profile) || !integer(profile.points) || !integer(profile.redRopes)
      || !AVATAR_THEMES.includes(profile.avatarTheme as typeof AVATAR_THEMES[number])
      || typeof profile.debugMode !== "boolean") return false;
  if (!record(pool)
      || !uniqueStrings(pool.genreIds, GAME_GENRE_IDS)
      || !uniqueStrings(pool.typeIds, Object.keys(QUEST_TYPES))
      || !uniqueStrings(pool.connectionModeIds, QUEST_CONNECTION_MODE_IDS)
      || !uniqueStrings(pool.styleIds, QUEST_PLAY_STYLE_IDS)) return false;
  if (selection !== null && (!record(selection) || typeof selection.gameId !== "string"
      || !selection.gameId || (selection.installmentId !== null
        && typeof selection.installmentId !== "string"))) return false;
  if (selection && value.selectedMoodId !== null) return false;
  if (value.selectedMoodId !== null && !mood(value.selectedMoodId)) return false;
  if (!nullableInteger(value.moodSelectedAt) || !integer(value.offerLibraryRevision)) return false;
  if (!Array.isArray(value.offeredQuests) || value.offeredQuests.length > QUEST_OFFER_COUNT
      || !value.offeredQuests.every(offer)
      || new Set(value.offeredQuests.map((entry) => entry.id)).size !== value.offeredQuests.length) return false;
  if (!record(value.offerSetsByMoodId) || !Object.entries(value.offerSetsByMoodId)
      .every(([id, offers]) => mood(id) && Array.isArray(offers)
        && offers.length <= QUEST_OFFER_COUNT && offers.every(offer))) return false;
  if (value.currentSession !== null && !session(value.currentSession)) return false;
  if (!Array.isArray(value.completedSessions) || !value.completedSessions.every(completion)) return false;
  if (!record(value.questProgressById) || !Object.entries(value.questProgressById)
      .every(([id, progress]) => quest(id) && record(progress)
        && (progress.seenOffer === null || offer(progress.seenOffer))
        && integer(progress.seenAt) && typeof progress.favorite === "boolean"
        && integer(progress.totalPlayedMs) && integer(progress.coinsEarned)
        && integer(progress.longestSessionMs) && nullableInteger(progress.bestTimeMs)
        && (progress.lastCompletion === null || completion(progress.lastCompletion)))) return false;
  if (!record(stats) || !integer(stats.completedQuestCount)
      || !integer(stats.uniqueCompletedQuestCount) || !integer(stats.totalPlayedMs)
      || !integer(stats.totalCoinsCollected) || !integer(stats.cancelledQuestCount)
      || !integer(stats.repeatedCompletionCount)
      || !countRecord(stats.completionCountsByQuestId, quest)
      || !countRecord(stats.completionCountsByMoodId, mood)
      || !countRecord(stats.latestCompletionAtByMoodId, mood)
      || (stats.favoriteMoodId !== null && !mood(stats.favoriteMoodId))) return false;
  return true;
}
