import { MOODS, type MoodId } from "../../data/moods";
import { QUEST_CORES_BY_ID, questCoresForMood } from "../../data/quests";
import {
  DEFAULT_PROFILE,
  DEFAULT_QUEST_STATS,
  MAX_COMPLETION_POINTS,
  MAX_GAME_TITLE_LENGTH,
  MOOD_RESET_MS,
  POINTS_DURATION_CAP_MS,
  POINTS_PER_MINUTE,
  QUEST_OFFER_COUNT,
  type CompletedSession,
  type QuestSession,
  type QuestState,
  type QuestStats,
} from "./model";

export function createDefaultQuestState(): QuestState {
  return {
    profile: { ...DEFAULT_PROFILE },
    selectedMoodId: null,
    moodSelectedAt: null,
    offeredQuestIds: [],
    offerSetsByMoodId: {},
    currentSession: null,
    completedSessions: [],
    stats: cloneQuestStats(DEFAULT_QUEST_STATS),
    legacyCompletionCount: 0,
  };
}

export function generateQuestOffers(
  moodId: MoodId,
  random: () => number = Math.random,
  excludedIds: ReadonlySet<string> = new Set(),
  count = QUEST_OFFER_COUNT,
) {
  const eligible = questCoresForMood(moodId);
  const preferred = eligible.filter((quest) => !excludedIds.has(quest.id));
  const pool = preferred.length >= count ? preferred : eligible;
  return sampleWithoutReplacement(pool, count, random).map(
    (quest) => quest.id,
  );
}

export function activeSessionDurationMs(
  session: QuestSession,
  now: number = Date.now(),
) {
  if (session.startedAt === null) return 0;
  const endedAt = session.pausedAt ?? now;
  return safeNonNegativeInteger(
    endedAt - session.startedAt - session.pausedTotalMs,
  );
}

export function minimumQuestDurationMs(questId: string) {
  const quest = QUEST_CORES_BY_ID[questId];
  return quest
    ? safeNonNegativeInteger(quest.minimumDurationMinutes * 60_000)
    : null;
}

export function canCompleteQuest(
  session: QuestSession | null,
  now: number = Date.now(),
  debugMode: boolean = false,
) {
  if (!session || session.startedAt === null || session.pausedAt === null) {
    return false;
  }
  if (debugMode) return true;
  const minimumDurationMs = minimumQuestDurationMs(session.questId);
  return (
    minimumDurationMs !== null &&
    activeSessionDurationMs(session, now) >= minimumDurationMs
  );
}

export function calculateCompletionPoints(durationMs: number) {
  const scoringDurationMs = Math.min(
    safeNonNegativeInteger(durationMs),
    POINTS_DURATION_CAP_MS,
  );
  return Math.min(
    MAX_COMPLETION_POINTS,
    Math.floor((scoringDurationMs * POINTS_PER_MINUTE) / 60_000),
  );
}

export function sanitizeGameTitle(value: unknown) {
  if (typeof value !== "string") return undefined;
  const normalized = value.trim().replace(/\s+/g, " ");
  if (!normalized) return undefined;
  return normalized.slice(0, MAX_GAME_TITLE_LENGTH).trim() || undefined;
}

export function replayOfferSet(
  moodId: MoodId,
  questId: string,
  cachedOffers: readonly string[] | undefined,
  random: () => number,
) {
  const validCachedOffers = uniqueStrings(cachedOffers).filter(
    (candidateId) => QUEST_CORES_BY_ID[candidateId]?.moodId === moodId,
  );
  if (
    validCachedOffers.length === QUEST_OFFER_COUNT &&
    validCachedOffers.includes(questId)
  ) {
    return validCachedOffers;
  }

  const offeredQuestIds = [
    questId,
    ...validCachedOffers.filter((candidateId) => candidateId !== questId),
  ].slice(0, QUEST_OFFER_COUNT);
  if (offeredQuestIds.length < QUEST_OFFER_COUNT) {
    const generated = generateQuestOffers(
      moodId,
      random,
      new Set(offeredQuestIds),
    );
    for (const generatedQuestId of generated) {
      if (offeredQuestIds.includes(generatedQuestId)) continue;
      offeredQuestIds.push(generatedQuestId);
      if (offeredQuestIds.length === QUEST_OFFER_COUNT) break;
    }
  }
  return offeredQuestIds;
}

export function statsAfterCompletion(
  stats: QuestStats,
  completion: CompletedSession,
): QuestStats {
  const previousQuestCount =
    stats.completionCountsByQuestId[completion.questId] ?? 0;
  const completionCountsByQuestId = {
    ...stats.completionCountsByQuestId,
    [completion.questId]: safeAdd(previousQuestCount, 1),
  };
  const completionCountsByMoodId = {
    ...stats.completionCountsByMoodId,
    [completion.moodId]: safeAdd(
      stats.completionCountsByMoodId[completion.moodId] ?? 0,
      1,
    ),
  };
  const latestCompletionAtByMoodId = {
    ...stats.latestCompletionAtByMoodId,
    [completion.moodId]: Math.max(
      stats.latestCompletionAtByMoodId[completion.moodId] ?? 0,
      completion.completedAt,
    ),
  };

  return {
    completedQuestCount: safeAdd(stats.completedQuestCount, 1),
    uniqueCompletedQuestCount: safeAdd(
      stats.uniqueCompletedQuestCount,
      previousQuestCount === 0 ? 1 : 0,
    ),
    totalPlayedMs: safeAdd(stats.totalPlayedMs, completion.durationMs),
    cancelledQuestCount: stats.cancelledQuestCount,
    repeatedCompletionCount: safeAdd(
      stats.repeatedCompletionCount,
      previousQuestCount > 0 ? 1 : 0,
    ),
    completionCountsByQuestId,
    completionCountsByMoodId,
    latestCompletionAtByMoodId,
    favoriteMoodId: favoriteMoodId(
      completionCountsByMoodId,
      latestCompletionAtByMoodId,
    ),
  };
}

export function rotateSessionOffer(
  state: QuestState,
  session: QuestSession,
  random: () => number,
): Pick<QuestState, "offeredQuestIds" | "offerSetsByMoodId"> {
  const storedOffers = state.offerSetsByMoodId[session.moodId];
  const moodOffers =
    storedOffers?.length === QUEST_OFFER_COUNT
      ? [...storedOffers]
      : state.selectedMoodId === session.moodId
        ? [...state.offeredQuestIds]
        : [];
  const slotIndex = moodOffers.indexOf(session.questId);
  if (slotIndex < 0) {
    return {
      offeredQuestIds: state.offeredQuestIds,
      offerSetsByMoodId: state.offerSetsByMoodId,
    };
  }

  const replacementId = generateQuestOffers(
    session.moodId,
    random,
    new Set(moodOffers),
    1,
  )[0];
  if (!replacementId) {
    return {
      offeredQuestIds: state.offeredQuestIds,
      offerSetsByMoodId: state.offerSetsByMoodId,
    };
  }

  moodOffers[slotIndex] = replacementId;
  return {
    offeredQuestIds:
      state.selectedMoodId === session.moodId
        ? moodOffers
        : state.offeredQuestIds,
    offerSetsByMoodId: {
      ...state.offerSetsByMoodId,
      [session.moodId]: moodOffers,
    },
  };
}

export function cloneQuestStats(stats: QuestStats): QuestStats {
  return {
    ...stats,
    completionCountsByQuestId: { ...stats.completionCountsByQuestId },
    completionCountsByMoodId: { ...stats.completionCountsByMoodId },
    latestCompletionAtByMoodId: { ...stats.latestCompletionAtByMoodId },
  };
}

export function moodWindowState(
  state: QuestState,
  now: number,
): Partial<QuestState> {
  if (state.currentSession) {
    return { ...state, selectedMoodId: state.currentSession.moodId };
  }
  if (!moodSelectionExpired(state.moodSelectedAt, now)) return state;
  return {
    ...state,
    selectedMoodId: null,
    moodSelectedAt: null,
    offeredQuestIds: [],
    offerSetsByMoodId: {},
  };
}

export function moodSelectionExpired(selectedAt: number | null, now: number) {
  return selectedAt === null || now - selectedAt >= MOOD_RESET_MS;
}

export function favoriteMoodId(
  completionCountsByMoodId: Partial<Record<MoodId, number>>,
  latestCompletionAtByMoodId: Partial<Record<MoodId, number>>,
) {
  let favorite: MoodId | null = null;
  let favoriteCount = 0;
  let favoriteCompletedAt = 0;

  for (const mood of MOODS) {
    const count = completionCountsByMoodId[mood.id] ?? 0;
    const completedAt = latestCompletionAtByMoodId[mood.id] ?? 0;
    if (
      count > favoriteCount ||
      (count > 0 && count === favoriteCount && completedAt > favoriteCompletedAt)
    ) {
      favorite = mood.id;
      favoriteCount = count;
      favoriteCompletedAt = completedAt;
    }
  }

  return favorite;
}

function sampleWithoutReplacement<T>(
  values: readonly T[],
  count: number,
  random: () => number,
) {
  const available = [...values];
  const selected: T[] = [];
  while (selected.length < count && available.length > 0) {
    const index = randomIndex(available.length, random);
    selected.push(available.splice(index, 1)[0]);
  }
  return selected;
}

function randomIndex(length: number, random: () => number) {
  if (length <= 1) return 0;
  const value = random();
  const normalized = Number.isFinite(value)
    ? Math.max(0, Math.min(0.999999999, value))
    : 0;
  return Math.floor(normalized * length);
}

export function sameStringArray(a: readonly string[], b: readonly string[]) {
  return a.length === b.length && a.every((value, index) => value === b[index]);
}

export function uniqueStrings(value: unknown): string[] {
  return Array.from(
    new Set(
      Array.isArray(value)
        ? value.filter((entry): entry is string => typeof entry === "string")
        : [],
    ),
  );
}

export function safeNonNegativeInteger(value: unknown) {
  const number = finiteNumber(value);
  return number === null
    ? 0
    : Math.min(Number.MAX_SAFE_INTEGER, Math.max(0, Math.floor(number)));
}

export function safeAdd(left: number, right: number) {
  return Math.min(
    Number.MAX_SAFE_INTEGER,
    safeNonNegativeInteger(left) + safeNonNegativeInteger(right),
  );
}

export function finiteNumber(value: unknown) {
  return typeof value === "number" && Number.isFinite(value) ? value : null;
}
