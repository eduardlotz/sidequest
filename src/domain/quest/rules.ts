import { MOODS, type MoodId } from "../../data/moods";
import { QUEST_CORES_BY_ID, questCoresForMood } from "../../data/quests";
import type { GameReference } from "../../data/gameTypes";
import type { LibraryGame } from "../library/model";
import { defaultPoolPreferences, questAvailableInPool } from "./pool";
import {
  DEFAULT_PROFILE,
  DEFAULT_QUEST_STATS,
  MAX_COMPLETION_POINTS,
  MOOD_RESET_MS,
  POINTS_DURATION_CAP_MS,
  POINTS_PER_MINUTE,
  QUEST_OFFER_COUNT,
  QUEST_OFFER_ROLES,
  type QuestOfferRole,
  type CompletedSession,
  type QuestOffer,
  type QuestSession,
  type QuestState,
  type QuestStats,
  type QuestPoolPreferences,
} from "./model";

export function createDefaultQuestState(): QuestState {
  return {
    ownedPackIds: [],
    poolPreferences: defaultPoolPreferences(),
    profile: { ...DEFAULT_PROFILE },
    selectedMoodId: null,
    moodSelectedAt: null,
    offeredQuests: [],
    offerSetsByMoodId: {},
    offerLibraryRevision: 0,
    currentSession: null,
    completedSessions: [],
    questProgressById: {},
    stats: cloneQuestStats(DEFAULT_QUEST_STATS),
  };
}

export function generateQuestOffers(
  moodId: MoodId,
  libraryGames: readonly LibraryGame[] = [],
  random: () => number = Math.random,
  excludedOfferIds: ReadonlySet<string> = new Set(),
  roles: readonly QuestOfferRole[] = QUEST_OFFER_ROLES,
  excludedQuestIds: ReadonlySet<string> = new Set(),
  ownedPackIds: readonly string[] = [],
  preferences: QuestPoolPreferences = defaultPoolPreferences(),
): QuestOffer[] {
  const pools = questOfferPools(moodId, libraryGames, ownedPackIds, preferences);
  const selected: QuestOffer[] = [];
  const selectedQuestIds = new Set(excludedQuestIds);

  function pick(pool: readonly QuestOffer[], role: QuestOfferRole) {
    const available = pool.filter((offer) => !selectedQuestIds.has(offer.questId));
    const fresh = available.filter((offer) => !excludedOfferIds.has(offer.id));
    const candidates = fresh.length ? fresh : available;
    // Choose a game first so large curated catalogues do not dominate the deal.
    const gameIds = Array.from(new Set(candidates.map((offer) => offer.game?.id ?? null)));
    const gameId = sampleWithoutReplacement(gameIds, 1, random)[0];
    const offer = sampleWithoutReplacement(
      candidates.filter((candidate) => (candidate.game?.id ?? null) === gameId),
      1,
      random,
    )[0];
    if (!offer) return false;
    selected.push({ ...offer, role });
    selectedQuestIds.add(offer.questId);
    return true;
  }

  for (const role of roles) {
    if (role === "library") {
      // Authored for the selected game first; exact compatible templates second.
      // An empty or incompatible library still receives three distinct choices.
      pick(pools.curated, role) || pick(pools.bound, role) ||
        pick(pools.directed, role) || pick(pools.inspiration, role);
    } else {
      pick(pools[role], role) || pick([...pools.directed, ...pools.inspiration, ...pools.bound], role);
    }
  }
  return selected;
}

function questOfferPools(moodId: MoodId, libraryGames: readonly LibraryGame[], ownedPackIds: readonly string[], preferences: QuestPoolPreferences) {
  const eligible = questCoresForMood(moodId).filter(quest => questAvailableInPool(quest, moodId, ownedPackIds, preferences));
  const eligibleById = new Map(eligible.map((quest) => [quest.id, quest]));
  const bound = libraryGames.flatMap((game) => game.questIds.flatMap((id) => {
    const quest = eligibleById.get(id);
    return quest?.gameBindable && (!quest.curated || quest.curated.gameId === game.id)
      ? [createQuestOffer(moodId, id, game, "library")]
      : [];
  }));
  const universal = eligible.filter((quest) => quest.universal);
  return {
    curated: bound.filter((offer) => QUEST_CORES_BY_ID[offer.questId].curated),
    bound,
    inspiration: universal.filter((quest) => quest.type === "inspiration")
      .map((quest) => createQuestOffer(moodId, quest.id, null, "inspiration")),
    directed: universal.filter((quest) => quest.type !== "inspiration")
      .map((quest) => createQuestOffer(moodId, quest.id, null, "directed")),
  };
}

export function isQuestOfferSetValid(
  moodId: MoodId,
  offers: readonly QuestOffer[],
  libraryGames: readonly LibraryGame[],
  ownedPackIds: readonly string[] = [],
  preferences: QuestPoolPreferences = defaultPoolPreferences(),
) {
  if (offers.length > QUEST_OFFER_COUNT || new Set(offers.map(offer => offer.questId)).size !== offers.length) return false;
  const pools = questOfferPools(moodId, libraryGames, ownedPackIds, preferences);
  const eligible = [...pools.curated, ...pools.bound, ...pools.directed, ...pools.inspiration];
  return offers.length === Math.min(QUEST_OFFER_COUNT, new Set(eligible.map(offer => offer.questId)).size) &&
    offers.every(offer => eligible.some(candidate => candidate.id === offer.id));
}

export function createQuestOffer(
  moodId: MoodId,
  questId: string,
  game: LibraryGame | GameReference | null,
  role: QuestOfferRole = game ? "library" : QUEST_CORES_BY_ID[questId]?.type === "inspiration" ? "inspiration" : "directed",
): QuestOffer {
  const gameReference = game ? gameReferenceFrom(game) : null;
  return {
    id: questOfferId(moodId, questId, gameReference?.id ?? null),
    role,
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
  return Math.min(questTimeLimitMs(session.questId), safeNonNegativeInteger(
    endedAt - session.startedAt - session.pausedTotalMs,
  ));
}

export function questTimeLimitMs(questId: string) {
  const quest = QUEST_CORES_BY_ID[questId];
  return quest?.type === "countdown" ? (quest.maximumDurationMinutes ?? quest.suggestedDurationMinutes) * 60_000 : Infinity;
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
  if (activeSessionDurationMs(session, now) >= questTimeLimitMs(session.questId)) return false;
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
    totalCoinsCollected: safeAdd(stats.totalCoinsCollected, completion.pointsAwarded),
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
    storedOffers !== undefined
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
    [moodOffers[slotIndex].role],
    new Set(
      moodOffers
        .filter((_, index) => index !== slotIndex)
        .map((offer) => offer.questId),
    ),
    state.ownedPackIds,
    state.poolPreferences,
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
