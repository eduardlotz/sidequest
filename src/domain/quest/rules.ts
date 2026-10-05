import { MOODS, type MoodId } from "../../data/moods";
import { flexibleGameContexts } from "../../data/games/questCompatibility";
import type { QuestCoreDefinition } from "../../data/questTypes";
import { QUEST_CORES_BY_ID, questCoresForMood } from "../../data/quests";
import { CURATED_GAMES_BY_ID } from "../../data/games";
import { QUEST_COIN_MULTIPLIERS } from "../../data/questRarity";
import type { GameReference } from "../../data/gameTypes";
import type { CuratedGamePreferences, LibraryGame } from "../library/model";
import { defaultPoolPreferences, matchesPoolPreferences } from "./pool";
import {
  DEFAULT_PROFILE,
  DEFAULT_QUEST_STATS,
  INITIAL_FREE_SHUFFLES,
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
  type GameSelection,
} from "./model";

export function isGameSelectionAvailable(
  selection: GameSelection,
  libraryGames: readonly LibraryGame[],
  preferences: Readonly<Record<string, CuratedGamePreferences>>,
): boolean {
  const game = libraryGames.find((entry) => entry.id === selection.gameId);
  if (!game) return false;
  const installments = CURATED_GAMES_BY_ID[game.id]?.installments ?? [];
  if (!installments.length) return selection.installmentId === null;
  const { installmentId } = selection;
  return installmentId !== null
    && installments.some((entry) => entry.id === installmentId)
    && Boolean(preferences[game.id]?.installmentIds.includes(installmentId));
}

export function gameForInstallment(
  game: LibraryGame,
  installmentId: string,
): LibraryGame | null {
  const installment = CURATED_GAMES_BY_ID[game.id]?.installments.find(
    (entry) => entry.id === installmentId,
  );
  if (!installment) return null;
  return {
    ...game,
    name: installment.name,
    installmentId,
    installmentIds: [installmentId],
    questIds: game.questIds.filter((id) => {
      const curated = QUEST_CORES_BY_ID[id]?.curated;
      return curated ? curated.installmentIds.length === 0 || curated.installmentIds.includes(installmentId) : flexibleGameContexts(game.id, id, [installmentId]).length > 0;
    }),
  };
}

export function questGamesForSelection(
  selection: GameSelection | null,
  libraryGames: readonly LibraryGame[],
): LibraryGame[] {
  if (!selection) return [];
  const game = libraryGames.find((entry) => entry.id === selection.gameId);
  if (!game) return [];
  if (!CURATED_GAMES_BY_ID[game.id]?.installments.length) return [game];
  const installment = selection.installmentId
    ? gameForInstallment(game, selection.installmentId)
    : null;
  return installment ? [installment] : [];
}

export function createDefaultQuestState(): QuestState {
  return {
    freeShufflesRemaining: INITIAL_FREE_SHUFFLES,
    blacklistedQuestIds: [],
    poolPreferences: defaultPoolPreferences(),
    profile: { ...DEFAULT_PROFILE },
    gameSelection: null,
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
  moodId: MoodId | null,
  libraryGames: readonly LibraryGame[] = [],
  random: () => number = Math.random,
  excludedOfferIds: ReadonlySet<string> = new Set(),
  roles: readonly QuestOfferRole[] = QUEST_OFFER_ROLES,
  excludedQuestIds: ReadonlySet<string> = new Set(),
  preferences: QuestPoolPreferences = defaultPoolPreferences(),
  previousQuestIds: ReadonlySet<string> = new Set(),
  boundOnly = false,
  reservedExperiences: ReadonlySet<string> = new Set(),
): QuestOffer[] {
  const pools = questOfferPools(moodId, libraryGames, preferences);
  const selected: QuestOffer[] = [];
  const selectedQuestIds = new Set(excludedQuestIds);

  const selectedFamilies = new Set<string>();
  const selectedExperiences = new Set(reservedExperiences);
  function pick(pool: readonly QuestOffer[], role: QuestOfferRole) {
    const available = pool.filter((offer) => !selectedQuestIds.has(offer.questId)
      && !selectedExperiences.has(experienceKey(offer.questId)));
    const differentFamilies = available.filter((offer) => !selectedFamilies.has(QUEST_CORES_BY_ID[offer.questId].experience.family));
    const varied = differentFamilies.length ? differentFamilies : available;
    const novel = varied.filter((offer) => !excludedOfferIds.has(offer.id) && !previousQuestIds.has(offer.questId));
    const fresh = varied.filter((offer) => !excludedOfferIds.has(offer.id));
    const candidates = novel.length ? novel : fresh.length ? fresh : varied;
    // Choose games uniformly, then identities uniformly (not one ticket per mood).
    const gameIds = Array.from(new Set(candidates.map((offer) => offer.game?.id ?? null)));
    const gameId = sampleWithoutReplacement(gameIds, 1, random)[0];
    const gameCandidates = candidates.filter((candidate) => (candidate.game?.id ?? null) === gameId);
    const questId = sampleWithoutReplacement(Array.from(new Set(gameCandidates.map((offer) => offer.questId))), 1, random)[0];
    const offer = sampleWithoutReplacement(gameCandidates.filter((candidate) => candidate.questId === questId), 1, random)[0];
    if (!offer) return false;
    selected.push({ ...offer, role });
    selectedQuestIds.add(offer.questId);
    selectedFamilies.add(QUEST_CORES_BY_ID[offer.questId].experience.family);
    selectedExperiences.add(experienceKey(offer.questId));
    return true;
  }
  function pickLibrary() {
    return pick(pools.curated, "library") || pick(pools.bound, "library");
  }

  for (const role of roles) {
    if (role === "library") {
      pickLibrary() ||
        (!boundOnly && (pick(pools.directed, role) || pick(pools.inspiration, role)));
    } else {
      pick(pools[role], role);
    }
  }
  return selected;
}

export function generateGameQuestOffers(
  moodId: MoodId | null,
  libraryGames: readonly LibraryGame[],
  random: () => number = Math.random,
  excludedOfferIds: ReadonlySet<string> = new Set(),
  excludedQuestIds: ReadonlySet<string> = new Set(),
  preferences: QuestPoolPreferences = defaultPoolPreferences(),
  previousQuestIds: ReadonlySet<string> = new Set(),
  reservedExperiences: ReadonlySet<string> = new Set(),
) {
  return generateQuestOffers(
    moodId,
    libraryGames,
    random,
    excludedOfferIds,
    Array(QUEST_OFFER_COUNT).fill("library") as QuestOfferRole[],
    excludedQuestIds,
    preferences,
    previousQuestIds,
    true,
    reservedExperiences,
  );
}

export function questOfferPools(moodId: MoodId | null, libraryGames: readonly LibraryGame[], preferences: QuestPoolPreferences) {
  const moodIds = moodId ? [moodId] : MOODS.map((mood) => mood.id);
  const eligible = moodIds.flatMap((id) =>
    questCoresForMood(id)
      .filter((quest) => matchesPoolPreferences(quest, preferences))
      .map((quest) => ({ quest, moodId: id })),
  );
  const bound = libraryGames.flatMap(game => game.questIds.flatMap(id => {
    const quest = QUEST_CORES_BY_ID[id];
    if (!quest?.gameBindable || (quest.curated && quest.curated.gameId !== game.id)) return [];
    const contexts = game.source === "curated" && !quest.curated
      ? flexibleGameContexts(game.id, id, game.installmentId ? [game.installmentId] : game.installmentIds ?? [])
      : quest.experience.contexts;
    if (!contexts.length || !matchesPoolPreferences({ ...quest, experience: { ...quest.experience, contexts } }, preferences)) return [];
    return moodIds.filter(id => quest.moodIds.includes(id)).map(mood => createQuestOffer(mood, id, game, "library"));
  }));
  const universal = eligible.filter(({ quest }) => quest.universal);
  return {
    curated: bound.filter((offer) => QUEST_CORES_BY_ID[offer.questId].curated),
    bound,
    inspiration: universal.filter(({ quest }) => quest.type === "inspiration")
      .map(({ quest, moodId: offerMoodId }) => createQuestOffer(offerMoodId, quest.id, null, "inspiration")),
    directed: universal.filter(({ quest }) => quest.type !== "inspiration")
      .map(({ quest, moodId: offerMoodId }) => createQuestOffer(offerMoodId, quest.id, null, "directed")),
  };
}

export function isSessionEligible(session: QuestSession, selection: GameSelection | null,
  libraryGames: readonly LibraryGame[], preferences: QuestPoolPreferences, banned: ReadonlySet<string>) {
  if (banned.has(session.questId)) return false;
  const available = selection ? questGamesForSelection(selection, libraryGames) : libraryGames;
  const exactId = session.game?.installmentId;
  const games = exactId ? available.flatMap(game => {
    if (game.id !== session.game?.id || !game.installmentIds?.includes(exactId)) return [];
    const exact = gameForInstallment(game, exactId);
    return exact ? [exact] : [];
  }) : available;
  const pools = questOfferPools(session.moodId, games, preferences);
  const offers = [...pools.bound, ...(!selection ? [...pools.directed, ...pools.inspiration] : [])];
  return offers.some(offer => offer.questId === session.questId
    && (offer.game?.id ?? null) === (session.game?.id ?? null));
}

export function poolPreviewCounts(preferences: QuestPoolPreferences, libraryGames: readonly LibraryGame[], moodId: MoodId | null, banned: ReadonlySet<string>, boundOnly = false) {
  return preparePoolPreview(libraryGames, moodId, banned, boundOnly)(preferences);
}

/** Build the route's candidate set once; each draft/option count only filters it. */
export function preparePoolPreview(libraryGames: readonly LibraryGame[], moodId: MoodId | null, banned: ReadonlySet<string>, boundOnly = false) {
  const pools = questOfferPools(moodId, libraryGames, defaultPoolPreferences());
  const candidates = [...pools.bound, ...(!boundOnly ? [...pools.inspiration, ...pools.directed] : [])]
    .filter(offer => !banned.has(offer.questId))
    .map(offer => {
      const original = QUEST_CORES_BY_ID[offer.questId];
      const contexts = offer.game?.source === "curated" && !original.curated
        ? flexibleGameContexts(offer.game.id, offer.questId, offer.game.installmentId ? [offer.game.installmentId] : offer.game.installmentIds ?? [])
        : original.experience.contexts;
      return { offer, quest: { ...original, experience: { ...original.experience, contexts } } };
    });
  return (preferences: QuestPoolPreferences) => {
    const eligible = candidates.filter(({ quest }) => matchesPoolPreferences(quest, preferences));
    const bound = eligible.filter(({ offer }) => offer.game);
    return {
      quests: new Set(eligible.map(({ offer }) => offer.questId)).size,
      libraryQuests: new Set(bound.map(({ offer }) => offer.questId)).size,
      games: new Set(bound.map(({ offer }) => offer.game!.id)).size,
    };
  };
}

export function experienceKey(questId: string) {
  const experience = QUEST_CORES_BY_ID[questId]?.experience;
  return experience ? `${experience.family}:${experience.finish}` : questId;
}

export function countGameQuestsBySource(
  game: LibraryGame,
  preferences: QuestPoolPreferences = defaultPoolPreferences(),
  blacklistedQuestIds: ReadonlySet<string> = new Set(),
) {
  const bound = new Set(questOfferPools(null, [game], preferences).bound
    .filter((offer) => !blacklistedQuestIds.has(offer.questId)).map((offer) => offer.questId));
  let curated = 0;
  let flexible = 0;
  for (const questId of bound) {
    if (QUEST_CORES_BY_ID[questId].curated) curated += 1;
    else flexible += 1;
  }
  return { curated, flexible };
}

export function isQuestOfferSetValid(
  moodId: MoodId,
  offers: readonly QuestOffer[],
  libraryGames: readonly LibraryGame[],
  preferences: QuestPoolPreferences = defaultPoolPreferences(),
  blacklistedQuestIds: ReadonlySet<string> = new Set(),
) {
  if (offers.length > QUEST_OFFER_COUNT
    || offers.some(offer => !QUEST_OFFER_ROLES.includes(offer.role))
    || new Set(offers.map(offer => offer.questId)).size !== offers.length) return false;
  const pools = questOfferPools(moodId, libraryGames, preferences);
  const byRole = {
    library: [...pools.bound, ...pools.directed, ...pools.inspiration],
    inspiration: pools.inspiration,
    directed: pools.directed,
  };
  const occupiedIds = new Set(offers.map(offer => offer.questId));
  const occupiedExperiences = new Set(offers.map(offer => experienceKey(offer.questId)));
  if (new Set(offers.map(offer => offer.role)).size !== offers.length
    || occupiedExperiences.size !== offers.length) return false;
  const eligibleForRole = (role: QuestOfferRole) => byRole[role]
    .filter(offer => !blacklistedQuestIds.has(offer.questId));
  return offers.every(offer => eligibleForRole(offer.role)
    .some(candidate => sameOfferContext(candidate, offer)))
    && QUEST_OFFER_ROLES.every(role => offers.some(offer => offer.role === role)
      || !eligibleForRole(role).some(offer => !occupiedIds.has(offer.questId)
        && !occupiedExperiences.has(experienceKey(offer.questId))));
}

export function isGameOfferSetValid(
  moodId: MoodId | null,
  offers: readonly QuestOffer[],
  libraryGames: readonly LibraryGame[],
  preferences: QuestPoolPreferences = defaultPoolPreferences(),
  blacklistedQuestIds: ReadonlySet<string> = new Set(),
) {
  const bound = questOfferPools(moodId, libraryGames, preferences).bound
    .filter((offer) => !blacklistedQuestIds.has(offer.questId));
  return offers.length === Math.min(QUEST_OFFER_COUNT, new Set(bound.map((offer) => experienceKey(offer.questId))).size) &&
    new Set(offers.map((offer) => offer.questId)).size === offers.length &&
    new Set(offers.map((offer) => experienceKey(offer.questId))).size === offers.length &&
    offers.every((offer) => bound.some((candidate) => sameOfferContext(candidate, offer)));
}

function sameOfferContext(candidate: QuestOffer, saved: QuestOffer) {
  return candidate.id === saved.id
    && candidate.game?.name === saved.game?.name
    && candidate.game?.installmentId === saved.game?.installmentId
    && candidate.game?.iconId === saved.game?.iconId
    && candidate.game?.colorId === saved.game?.colorId
    && JSON.stringify([...(candidate.game?.installmentIds ?? [])].sort())
      === JSON.stringify([...(saved.game?.installmentIds ?? [])].sort());
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
    ...(game.installmentId ? { installmentId: game.installmentId } : {}),
    ...(game.installmentIds ? { installmentIds: game.installmentIds } : {}),
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
  return Math.min(questTimeLimitMs(session.questId, session.snapshot?.definition), safeNonNegativeInteger(
    endedAt - session.startedAt - session.pausedTotalMs,
  ));
}

export function questTimeLimitMs(questId: string, definition?: QuestCoreDefinition) {
  const quest = definition ?? QUEST_CORES_BY_ID[questId];
  return quest?.type === "countdown" ? (quest.maximumDurationMinutes ?? quest.suggestedDurationMinutes) * 60_000 : Infinity;
}

export function canCompleteQuest(
  session: QuestSession | null,
  now: number = Date.now(),
) {
  if (!session || session.recovery || session.startedAt === null || session.pausedAt === null) {
    return false;
  }
  const quest = session.snapshot?.definition ?? QUEST_CORES_BY_ID[session.questId];
  return Boolean(quest) && activeSessionDurationMs(session, now) < questTimeLimitMs(session.questId, quest);
}

export function calculateCompletionPoints(durationMs: number, questId?: string, definition?: QuestCoreDefinition) {
  const quest = definition ?? (questId ? QUEST_CORES_BY_ID[questId] : undefined);
  const elapsedMs = safeNonNegativeInteger(durationMs);
  const timed = quest?.type === "countdown" || quest?.type === "speedrun";
  let basePoints: number;
  if (timed) {
    const rewardDurationMs = (quest.type === "countdown" ? quest.maximumDurationMinutes ?? quest.suggestedDurationMinutes : quest.suggestedDurationMinutes) * 60_000;
    const maximumPoints = Math.floor((rewardDurationMs * POINTS_PER_MINUTE) / 60_000);
    basePoints = Math.min(MAX_COMPLETION_POINTS, Math.max(
      0,
      maximumPoints - Math.floor((elapsedMs * POINTS_PER_MINUTE) / 60_000),
    ));
  } else {
    basePoints = Math.min(MAX_COMPLETION_POINTS, Math.floor(
      (Math.min(elapsedMs, POINTS_DURATION_CAP_MS) * POINTS_PER_MINUTE) / 60_000,
    ));
  }
  const rarity = quest?.rarity;
  return basePoints * QUEST_COIN_MULTIPLIERS[rarity ?? "standard"];
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
  const storedOffers = state.gameSelection
    ? state.offeredQuests
    : state.offerSetsByMoodId[session.moodId];
  const moodOffers =
    storedOffers !== undefined
      ? [...storedOffers]
      : state.selectedMoodId === session.moodId || state.gameSelection
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

  const excludedIds = new Set(moodOffers.map((offer) => offer.id));
  const excludedQuestIds = new Set([...state.blacklistedQuestIds, ...moodOffers
    .filter((_, index) => index !== slotIndex).map((offer) => offer.questId)]);
  const reservedExperiences = new Set(moodOffers.filter((_, index) => index !== slotIndex).map(offer => experienceKey(offer.questId)));
  const replacement = (state.gameSelection
    ? generateGameQuestOffers(null, questGamesForSelection(state.gameSelection, libraryGames),
        random, excludedIds, excludedQuestIds, state.poolPreferences, new Set([session.questId]), reservedExperiences)
    : generateQuestOffers(session.moodId, libraryGames, random, excludedIds,
        [moodOffers[slotIndex].role], excludedQuestIds, state.poolPreferences, new Set([session.questId]), false, reservedExperiences))[0];
  if (!replacement) {
    const pools = questOfferPools(state.gameSelection ? null : session.moodId,
      state.gameSelection ? questGamesForSelection(state.gameSelection, libraryGames) : libraryGames, state.poolPreferences);
    const eligible = state.gameSelection ? pools.bound : [...pools.bound, ...pools.directed, ...pools.inspiration];
    if (!state.blacklistedQuestIds.includes(session.questId) && eligible.some(offer => offer.id === moodOffers[slotIndex].id)) {
      return { offeredQuests: state.offeredQuests, offerSetsByMoodId: state.offerSetsByMoodId };
    }
    moodOffers.splice(slotIndex, 1);
  } else {
    moodOffers[slotIndex] = replacement;
  }
  return {
    offeredQuests:
      (state.selectedMoodId === session.moodId || state.gameSelection)
        ? moodOffers
        : state.offeredQuests,
    offerSetsByMoodId: state.gameSelection
      ? state.offerSetsByMoodId
      : { ...state.offerSetsByMoodId, [session.moodId]: moodOffers },
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
    return state.gameSelection
      ? state
      : { ...state, selectedMoodId: state.currentSession.moodId };
  }
  if (!moodSelectionExpired(state.moodSelectedAt, now)) return state;
  if (state.gameSelection) {
    return { ...state, moodSelectedAt: null };
  }
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
