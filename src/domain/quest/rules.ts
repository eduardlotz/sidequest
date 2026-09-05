import { MOODS, type MoodId } from "../../data/moods";
import { QUEST_CORES_BY_ID, questCoresForMood } from "../../data/quests";
import type { GameReference } from "../../data/gameTypes";
import type { LibraryGame } from "../library/model";
import {
  DEFAULT_PROFILE,
  DEFAULT_QUEST_STATS,
  MAX_COMPLETION_POINTS,
  MOOD_RESET_MS,
  POINTS_DURATION_CAP_MS,
  POINTS_PER_MINUTE,
  QUEST_OFFER_COUNT,
  type CompletedSession,
  type QuestOffer,
  type QuestSession,
  type QuestState,
  type QuestStats,
} from "./model";

export function createDefaultQuestState(): QuestState {
  return {
    profile: { ...DEFAULT_PROFILE },
    selectedMoodId: null,
    moodSelectedAt: null,
    offeredQuests: [],
    offerSetsByMoodId: {},
    offerLibraryRevision: 0,
    currentSession: null,
    completedSessions: [],
    stats: cloneQuestStats(DEFAULT_QUEST_STATS),
  };
}

export function generateQuestOffers(
  moodId: MoodId,
  libraryGames: readonly LibraryGame[] = [],
  random: () => number = Math.random,
  excludedOfferIds: ReadonlySet<string> = new Set(),
  count = QUEST_OFFER_COUNT,
  gameBoundTarget = Math.min(2, count),
  excludedQuestIds: ReadonlySet<string> = new Set(),
): QuestOffer[] {
  const eligible = questCoresForMood(moodId);
  const eligibleById = new Map(eligible.map((quest) => [quest.id, quest]));
  const selected: QuestOffer[] = [];
  const selectedQuestIds = new Set(excludedQuestIds);
  const usedGameIds = new Set<string>();
  const boundPool = libraryGames.flatMap((game) =>
    game.questIds.flatMap((questId) =>
      eligibleById.get(questId)?.gameBindable
        ? [createQuestOffer(moodId, questId, game)]
        : [],
    ),
  );
  const universalPool = eligible
    .filter((quest) => quest.universal)
    .map((quest) => createQuestOffer(moodId, quest.id, null));

  function pick(pool: readonly QuestOffer[], preferDifferentGame = false) {
    const available = pool.filter(
      (offer) => !selectedQuestIds.has(offer.questId),
    );
    const fresh = available.filter((offer) => !excludedOfferIds.has(offer.id));
    const candidates = fresh.length ? fresh : available;
    const differentGames = preferDifferentGame
      ? candidates.filter(
          (offer) => offer.game && !usedGameIds.has(offer.game.id),
        )
      : [];
    const choices = differentGames.length ? differentGames : candidates;
    // Choose a game first so a large quest catalogue does not dominate the deal.
    const gameIds = Array.from(
      new Set(choices.map((offer) => offer.game?.id ?? null)),
    );
    const gameId = sampleWithoutReplacement(gameIds, 1, random)[0];
    const offer = sampleWithoutReplacement(
      choices.filter((candidate) => (candidate.game?.id ?? null) === gameId),
      1,
      random,
    )[0];
    if (!offer) return false;
    selected.push(offer);
    selectedQuestIds.add(offer.questId);
    if (offer.game) usedGameIds.add(offer.game.id);
    return true;
  }

  const boundCount = Math.max(0, Math.min(count, gameBoundTarget));
  for (let index = 0; index < boundCount; index += 1) {
    if (!pick(boundPool, true)) break;
  }
  // Unbound cards also cover empty libraries and features with no matching mood.
  while (selected.length < count && pick(universalPool)) {
    /* Fill open slots. */
  }
  while (selected.length < count && pick(boundPool, true)) {
    /* Sparse catalogue fallback. */
  }
  return sampleWithoutReplacement(selected, selected.length, random);
}

export function createQuestOffer(
  moodId: MoodId,
  questId: string,
  game: LibraryGame | GameReference | null,
): QuestOffer {
  const gameReference = game ? gameReferenceFrom(game) : null;
  return {
    id: questOfferId(moodId, questId, gameReference?.id ?? null),
    moodId,
    questId,
    game: gameReference,
  };
}

export function questOfferId(
  moodId: MoodId,
  questId: string,
  gameId: string | null,
) {
  return `${moodId}:${questId}:${gameId ?? "universal"}`;
}

function gameReferenceFrom(game: LibraryGame | GameReference): GameReference {
  return {
    id: game.id,
    name: game.name,
    source: game.source,
    ...(game.iconId ? { iconId: game.iconId } : {}),
    ...(game.colorId ? { colorId: game.colorId } : {}),
  };
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
  libraryGames: readonly LibraryGame[],
  random: () => number,
): Pick<QuestState, "offeredQuests" | "offerSetsByMoodId"> {
  const storedOffers = state.offerSetsByMoodId[session.moodId];
  const moodOffers =
    storedOffers?.length === QUEST_OFFER_COUNT
      ? [...storedOffers]
      : state.selectedMoodId === session.moodId
        ? [...state.offeredQuests]
        : [];
  const slotIndex = moodOffers.findIndex(
    (offer) =>
      offer.questId === session.questId &&
      (offer.game?.id ?? null) === (session.game?.id ?? null),
  );
  if (slotIndex < 0) {
    return {
      offeredQuests: state.offeredQuests,
      offerSetsByMoodId: state.offerSetsByMoodId,
    };
  }

  const replacement = generateQuestOffers(
    session.moodId,
    libraryGames,
    random,
    new Set(moodOffers.map((offer) => offer.id)),
    1,
    session.game ? 1 : 0,
    new Set(
      moodOffers
        .filter((_, index) => index !== slotIndex)
        .map((offer) => offer.questId),
    ),
  )[0];
  if (!replacement) {
    return {
      offeredQuests: state.offeredQuests,
      offerSetsByMoodId: state.offerSetsByMoodId,
    };
  }

  moodOffers[slotIndex] = replacement;
  return {
    offeredQuests:
      state.selectedMoodId === session.moodId
        ? moodOffers
        : state.offeredQuests,
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
    offeredQuests: [],
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
      (count > 0 &&
        count === favoriteCount &&
        completedAt > favoriteCompletedAt)
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

export function sameQuestOffers(
  a: readonly QuestOffer[],
  b: readonly QuestOffer[],
) {
  const ids = new Set(b.map((offer) => offer.id));
  return a.length === b.length && a.every((offer) => ids.has(offer.id));
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
