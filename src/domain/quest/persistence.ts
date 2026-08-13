import { MOODS_BY_ID, type MoodId } from "../../data/moods";
import { QUEST_CORES_BY_ID } from "../../data/quests";
import {
  AVATAR_THEMES,
  DEFAULT_PROFILE,
  INITIAL_RED_ROPES,
  QUEST_OFFER_COUNT,
  STORED_COMPLETION_LIMIT,
  STORE_VERSION,
  type AvatarTheme,
  type CompletedSession,
  type PersistedQuestState,
  type QuestSession,
  type QuestStats,
  type UserProfile,
} from "./model";
import {
  createDefaultQuestState,
  favoriteMoodId,
  finiteNumber,
  generateQuestOffers,
  moodSelectionExpired,
  safeAdd,
  safeNonNegativeInteger,
  sanitizeGameTitle,
  uniqueStrings,
} from "./rules";

export function migratePersistedQuestState(
  persistedState: unknown,
  version: number,
  now: number = Date.now(),
  random: () => number = Math.random,
): PersistedQuestState {
  return version === STORE_VERSION
    ? sanitizePersistedQuestState(persistedState, now, random)
    : createDefaultQuestState();
}

export function sanitizePersistedQuestState(
  value: unknown,
  now: number = Date.now(),
  random: () => number = Math.random,
): PersistedQuestState {
  if (!isRecord(value)) return createDefaultQuestState();

  const profile = profileFromUnknown(value.profile);
  const completedSessions = completionsFromUnknown(value.completedSessions);
  const stats = statsFromUnknown(value.stats, completedSessions);
  const currentSession = sessionFromUnknown(value.currentSession);
  const storedMoodId = isMoodId(value.selectedMoodId)
    ? value.selectedMoodId
    : null;
  const selectedMoodId = currentSession?.moodId ?? storedMoodId;
  const storedMoodSelectedAt = finiteNumber(value.moodSelectedAt);
  const moodSelectedAt =
    currentSession && storedMoodSelectedAt === null
      ? currentSession.revealedAt
      : storedMoodSelectedAt;
  const expired = !currentSession && moodSelectionExpired(moodSelectedAt, now);

  if (expired) {
    return {
      profile,
      selectedMoodId: null,
      moodSelectedAt: null,
      offeredQuestIds: [],
      offerSetsByMoodId: {},
      currentSession,
      completedSessions,
      stats,
    };
  }

  const offerSetsByMoodId = offerSetsFromUnknown(value.offerSetsByMoodId, random);
  if (selectedMoodId && !offerSetsByMoodId[selectedMoodId]) {
    offerSetsByMoodId[selectedMoodId] = sanitizedOfferSet(
      selectedMoodId,
      value.offeredQuestIds,
      random,
    );
  }
  const offeredQuestIds = selectedMoodId
    ? [...(offerSetsByMoodId[selectedMoodId] ?? [])]
    : [];

  return {
    profile,
    selectedMoodId,
    moodSelectedAt,
    offeredQuestIds,
    offerSetsByMoodId,
    currentSession,
    completedSessions,
    stats,
  };
}

function offerSetsFromUnknown(
  value: unknown,
  random: () => number,
): Partial<Record<MoodId, string[]>> {
  if (!isRecord(value)) return {};
  const offerSets: Partial<Record<MoodId, string[]>> = {};

  for (const [moodId, offers] of Object.entries(value)) {
    if (!isMoodId(moodId) || !Array.isArray(offers)) continue;
    offerSets[moodId] = sanitizedOfferSet(moodId, offers, random);
  }

  return offerSets;
}

function sanitizedOfferSet(
  moodId: MoodId,
  value: unknown,
  random: () => number,
) {
  const offeredQuestIds = uniqueStrings(value).filter(
    (questId) => QUEST_CORES_BY_ID[questId]?.moodId === moodId,
  );
  if (offeredQuestIds.length < QUEST_OFFER_COUNT) {
    const generated = generateQuestOffers(
      moodId,
      random,
      new Set(offeredQuestIds),
    );
    for (const questId of generated) {
      if (offeredQuestIds.includes(questId)) continue;
      offeredQuestIds.push(questId);
      if (offeredQuestIds.length === QUEST_OFFER_COUNT) break;
    }
  }
  return offeredQuestIds.slice(0, QUEST_OFFER_COUNT);
}

function profileFromUnknown(value: unknown): UserProfile {
  if (!isRecord(value)) return { ...DEFAULT_PROFILE };
  const storedRedRopes = finiteNumber(value.redRopes);
  return {
    points: safeNonNegativeInteger(value.points),
    redRopes:
      storedRedRopes === null
        ? INITIAL_RED_ROPES
        : safeNonNegativeInteger(storedRedRopes),
    avatarTheme: avatarThemeFromUnknown(value.avatarTheme),
    debugMode: value.debugMode === true,
  };
}

function sessionFromUnknown(value: unknown): QuestSession | null {
  if (!isRecord(value)) return null;
  if (
    typeof value.sessionId !== "string" ||
    !value.sessionId ||
    !isMoodId(value.moodId) ||
    typeof value.questId !== "string"
  ) {
    return null;
  }
  const quest = QUEST_CORES_BY_ID[value.questId];
  if (!quest || quest.moodId !== value.moodId) return null;

  const revealedAt = finiteNumber(value.revealedAt);
  if (revealedAt === null) return null;
  const storedStartedAt = finiteNumber(value.startedAt);
  const startedAt =
    storedStartedAt === null ? null : Math.max(revealedAt, storedStartedAt);
  const storedPausedAt = finiteNumber(value.pausedAt);

  return {
    sessionId: value.sessionId,
    moodId: value.moodId,
    questId: value.questId,
    revealedAt,
    startedAt,
    pausedAt:
      startedAt === null || storedPausedAt === null
        ? null
        : Math.max(startedAt, storedPausedAt),
    pausedTotalMs: safeNonNegativeInteger(value.pausedTotalMs),
  };
}

function completionsFromUnknown(value: unknown): CompletedSession[] {
  if (!Array.isArray(value)) return [];
  const completions: CompletedSession[] = [];
  const ids = new Set<string>();

  for (const entry of value) {
    if (
      !isRecord(entry) ||
      typeof entry.id !== "string" ||
      !entry.id ||
      ids.has(entry.id) ||
      !isMoodId(entry.moodId) ||
      typeof entry.questId !== "string"
    ) {
      continue;
    }
    const quest = QUEST_CORES_BY_ID[entry.questId];
    if (!quest || quest.moodId !== entry.moodId) continue;

    const completedAt = finiteNumber(entry.completedAt);
    if (completedAt === null) continue;
    const gameTitle = sanitizeGameTitle(entry.gameTitle);
    ids.add(entry.id);
    completions.push({
      id: entry.id,
      moodId: entry.moodId,
      questId: entry.questId,
      durationMs: safeNonNegativeInteger(entry.durationMs),
      pointsAwarded: safeNonNegativeInteger(entry.pointsAwarded),
      completedAt: safeNonNegativeInteger(completedAt),
      ...(gameTitle ? { gameTitle } : {}),
    });
    if (completions.length === STORED_COMPLETION_LIMIT) break;
  }

  return completions;
}

function statsFromUnknown(
  value: unknown,
  completedSessions: readonly CompletedSession[],
): QuestStats {
  const storedStats = isRecord(value) ? value : {};
  const completionCountsByQuestId: Record<string, number> = {};
  if (isRecord(storedStats.completionCountsByQuestId)) {
    for (const [questId, storedCount] of Object.entries(
      storedStats.completionCountsByQuestId,
    )) {
      if (!QUEST_CORES_BY_ID[questId]) continue;
      const count = safeNonNegativeInteger(storedCount);
      if (count > 0) completionCountsByQuestId[questId] = count;
    }
  }

  const historyCountsByQuestId: Record<string, number> = {};
  for (const completion of completedSessions) {
    historyCountsByQuestId[completion.questId] = safeAdd(
      historyCountsByQuestId[completion.questId] ?? 0,
      1,
    );
  }
  for (const [questId, historyCount] of Object.entries(historyCountsByQuestId)) {
    completionCountsByQuestId[questId] = Math.max(
      completionCountsByQuestId[questId] ?? 0,
      historyCount,
    );
  }

  const completionCountsByMoodId: Partial<Record<MoodId, number>> = {};
  let completedQuestCount = 0;
  let repeatedCompletionCount = 0;
  for (const [questId, count] of Object.entries(completionCountsByQuestId)) {
    const quest = QUEST_CORES_BY_ID[questId];
    if (!quest) continue;
    completedQuestCount = safeAdd(completedQuestCount, count);
    repeatedCompletionCount = safeAdd(
      repeatedCompletionCount,
      Math.max(0, count - 1),
    );
    completionCountsByMoodId[quest.moodId] = safeAdd(
      completionCountsByMoodId[quest.moodId] ?? 0,
      count,
    );
  }

  const latestCompletionAtByMoodId: Partial<Record<MoodId, number>> = {};
  if (isRecord(storedStats.latestCompletionAtByMoodId)) {
    for (const [moodId, storedCompletedAt] of Object.entries(
      storedStats.latestCompletionAtByMoodId,
    )) {
      if (!isMoodId(moodId)) continue;
      const completedAt = finiteNumber(storedCompletedAt);
      if (completedAt !== null) {
        latestCompletionAtByMoodId[moodId] = safeNonNegativeInteger(completedAt);
      }
    }
  }
  for (const completion of completedSessions) {
    latestCompletionAtByMoodId[completion.moodId] = Math.max(
      latestCompletionAtByMoodId[completion.moodId] ?? 0,
      completion.completedAt,
    );
  }

  const historyDurationMs = completedSessions.reduce(
    (total, completion) => safeAdd(total, completion.durationMs),
    0,
  );

  return {
    completedQuestCount,
    uniqueCompletedQuestCount: Object.keys(completionCountsByQuestId).length,
    totalPlayedMs: Math.max(
      safeNonNegativeInteger(storedStats.totalPlayedMs),
      historyDurationMs,
    ),
    cancelledQuestCount: safeNonNegativeInteger(storedStats.cancelledQuestCount),
    repeatedCompletionCount,
    completionCountsByQuestId,
    completionCountsByMoodId,
    latestCompletionAtByMoodId,
    favoriteMoodId: favoriteMoodId(
      completionCountsByMoodId,
      latestCompletionAtByMoodId,
    ),
  };
}

function isMoodId(value: unknown): value is MoodId {
  return typeof value === "string" && Boolean(MOODS_BY_ID[value as MoodId]);
}

function avatarThemeFromUnknown(value: unknown): AvatarTheme {
  return isAvatarTheme(value) ? value : "default";
}

function isAvatarTheme(value: unknown): value is AvatarTheme {
  return (
    typeof value === "string" &&
    (AVATAR_THEMES as readonly string[]).includes(value)
  );
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}
