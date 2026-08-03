import { describe, expect, test } from "bun:test";
import { questsForMood } from "../data/quests";
import {
  hydrateCompletedQuest,
  hydrateQuest,
} from "../localization/catalog";
import {
  DEFAULT_PROFILE,
  DEFAULT_QUEST_STATS,
  INITIAL_RED_ROPES,
  MAX_COMPLETION_POINTS,
  MAX_GAME_TITLE_LENGTH,
  MOOD_RESET_MS,
  POINTS_DURATION_CAP_MS,
  QUEST_OFFER_COUNT,
  RED_ROPE_BUNDLE_COST,
  RED_ROPE_BUNDLE_SIZE,
  SHUFFLE_COST,
  STORED_COMPLETION_LIMIT,
  STORE_VERSION,
  activeSessionDurationMs,
  calculateCompletionPoints,
  canCompleteQuest,
  createQuestStore,
  migratePersistedQuestState,
  sanitizeGameTitle,
  sanitizePersistedQuestState,
} from "./useQuestStore";

function makeStore(random: () => number = () => 0) {
  let now = 1_000;
  let session = 0;
  const store = createQuestStore(undefined, {
    random,
    now: () => now,
    createSessionId: () => `session-${++session}`,
  });
  return {
    store,
    setNow(value: number) {
      now = value;
    },
  };
}

describe("mood quest store", () => {
  test("starts with a zero-point local profile and no selection", () => {
    const { store } = makeStore();

    expect(store.getState().profile).toEqual(DEFAULT_PROFILE);
    expect(store.getState().selectedMoodId).toBeNull();
    expect(store.getState().moodSelectedAt).toBeNull();
    expect(store.getState().offeredQuestIds).toEqual([]);
    expect(store.getState().offerSetsByMoodId).toEqual({});
    expect(store.getState().currentSession).toBeNull();
  });

  test("selects a mood and persists exactly three unique mood offers", () => {
    const { store } = makeStore(() => 0.25);

    expect(store.getState().selectMood("relax")).toBe(true);
    const state = store.getState();
    const eligibleIds = new Set(
      questsForMood("relax").map((quest) => quest.id),
    );

    expect(state.selectedMoodId).toBe("relax");
    expect(state.moodSelectedAt).toBe(1_000);
    expect(state.offeredQuestIds).toHaveLength(QUEST_OFFER_COUNT);
    expect(new Set(state.offeredQuestIds).size).toBe(QUEST_OFFER_COUNT);
    expect(state.offeredQuestIds.every((id) => eligibleIds.has(id))).toBe(true);
    expect(state.offerSetsByMoodId.relax).toEqual(state.offeredQuestIds);
  });

  test("edits the mood without clearing its active offer window", () => {
    const { store } = makeStore();
    store.getState().selectMood("explore");
    const offers = [...store.getState().offeredQuestIds];

    expect(store.getState().editMood()).toBe(true);
    expect(store.getState().selectedMoodId).toBeNull();
    expect(store.getState().moodSelectedAt).toBe(1_000);
    expect(store.getState().offeredQuestIds).toEqual([]);
    expect(store.getState().offerSetsByMoodId.explore).toEqual(offers);

    store.getState().selectMood("explore");
    store.getState().revealQuest(store.getState().offeredQuestIds[0]);
    expect(store.getState().editMood()).toBe(false);
    expect(store.getState().selectedMoodId).toBe("explore");
  });

  test("returns to the same mood without granting a free reroll", () => {
    const { store, setNow } = makeStore(() => 0);
    store.getState().selectMood("relax");
    const originalOffers = [...store.getState().offeredQuestIds];

    setNow(2_000);
    store.getState().editMood();
    expect(store.getState().selectMood("relax")).toBe(true);

    expect(store.getState().offeredQuestIds).toEqual(originalOffers);
    expect(store.getState().moodSelectedAt).toBe(1_000);
    expect(store.getState().profile.points).toBe(0);
  });

  test("restores each mood's own offers when changing moods and returning", () => {
    const { store, setNow } = makeStore(() => 0.4);
    store.getState().selectMood("relax");
    const relaxOffers = [...store.getState().offeredQuestIds];

    setNow(2_000);
    store.getState().editMood();
    store.getState().selectMood("challenge");
    const challengeOffers = [...store.getState().offeredQuestIds];

    setNow(3_000);
    store.getState().editMood();
    store.getState().selectMood("relax");
    expect(store.getState().offeredQuestIds).toEqual(relaxOffers);

    store.getState().editMood();
    store.getState().selectMood("challenge");
    expect(store.getState().offeredQuestIds).toEqual(challengeOffers);
    expect(store.getState().moodSelectedAt).toBe(1_000);
    expect(store.getState().profile.points).toBe(0);
  });

  test("does not shuffle without enough points", () => {
    const { store } = makeStore();
    store.getState().selectMood("progress");
    const before = [...store.getState().offeredQuestIds];

    expect(store.getState().shuffleOffers()).toBe(false);
    expect(store.getState().profile.points).toBe(0);
    expect(store.getState().offeredQuestIds).toEqual(before);
  });

  test("atomically spends points for a distinct three-card shuffle", () => {
    const { store } = makeStore();
    store.getState().selectMood("progress");
    const before = [...store.getState().offeredQuestIds];
    store.setState({
      profile: {
        ...store.getState().profile,
        points: SHUFFLE_COST,
      },
    });

    expect(store.getState().shuffleOffers()).toBe(true);
    const after = store.getState().offeredQuestIds;
    expect(after).toHaveLength(QUEST_OFFER_COUNT);
    expect(new Set(after).size).toBe(QUEST_OFFER_COUNT);
    expect(after.every((id) => !before.includes(id))).toBe(true);
    expect(store.getState().profile.points).toBe(0);
    expect(store.getState().offerSetsByMoodId.progress).toEqual(after);

    store.getState().editMood();
    store.getState().selectMood("progress");
    expect(store.getState().offeredQuestIds).toEqual(after);
  });

  test("only reveals an offered quest and preserves its authored tips", () => {
    const { store } = makeStore(() => 0);
    store.getState().selectMood("create");
    const offeredId = store.getState().offeredQuestIds[0];
    const hiddenId = questsForMood("create").find(
      (quest) => !store.getState().offeredQuestIds.includes(quest.id),
    )!.id;

    expect(store.getState().revealQuest(hiddenId)).toBe(false);
    expect(store.getState().revealQuest(offeredId)).toBe(true);
    expect(store.getState().currentSession).toMatchObject({
      sessionId: "session-1",
      moodId: "create",
      questId: offeredId,
      revealedAt: 1_000,
      startedAt: null,
      pausedAt: null,
      pausedTotalMs: 0,
    });
    expect(
      Boolean(
        questsForMood("create").find((quest) => quest.id === offeredId)?.tips
          .length,
      ),
    ).toBe(true);
  });

  test("persists start, pause, and resume timestamps", () => {
    const { store } = makeStore();
    store.getState().selectMood("relax");
    store.getState().revealQuest(store.getState().offeredQuestIds[0]);

    store.getState().startQuest(1_200);
    expect(store.getState().currentSession?.startedAt).toBe(1_200);
    store.getState().pauseQuest(2_000);
    expect(store.getState().currentSession?.pausedAt).toBe(2_000);
    store.getState().resumeQuest(2_500);
    expect(store.getState().currentSession?.pausedAt).toBeNull();
    expect(store.getState().currentSession?.pausedTotalMs).toBe(500);
  });

  test("only completes while paused at the card minimum and calculates points from active time", () => {
    const { store, setNow } = makeStore(() => 0);
    store.getState().selectMood("relax");
    const questId = store.getState().offeredQuestIds[0];
    const quest = questsForMood("relax").find(
      (candidate) => candidate.id === questId,
    )!;
    const minimumDurationMs = quest.minimumDurationMinutes * 60_000;
    store.getState().revealQuest(questId);
    store.getState().startQuest(1_100);

    expect(store.getState().completeQuest()).toBeNull();
    store.getState().pauseQuest(1_100 + minimumDurationMs);
    setNow(1_200 + minimumDurationMs);

    const expectedPoints = calculateCompletionPoints(minimumDurationMs);
    const offersBeforeCompletion = [...store.getState().offeredQuestIds];
    const pausedSession = store.getState().currentSession;
    expect(activeSessionDurationMs(pausedSession!)).toBe(minimumDurationMs);
    expect(canCompleteQuest(pausedSession)).toBe(true);
    const completion = store
      .getState()
      .completeQuest("  Outer   Wilds\nEchoes  ");

    expect(completion).toMatchObject({
      id: "session-1",
      moodId: "relax",
      questId,
      durationMs: minimumDurationMs,
      pointsAwarded: expectedPoints,
      completedAt: 1_200 + minimumDurationMs,
      gameTitle: "Outer Wilds Echoes",
    });
    expect(store.getState().profile.points).toBe(expectedPoints);
    expect(store.getState().currentSession).toBeNull();
    expect(store.getState().offeredQuestIds).toHaveLength(QUEST_OFFER_COUNT);
    expect(store.getState().offeredQuestIds).not.toContain(questId);
    expect(store.getState().offeredQuestIds.slice(1)).toEqual(
      offersBeforeCompletion.slice(1),
    );
    expect(store.getState().offerSetsByMoodId.relax).toEqual(
      store.getState().offeredQuestIds,
    );
    expect(store.getState().completedSessions).toHaveLength(1);
    expect(store.getState().completedSessions[0]).toMatchObject({
      id: "session-1",
      moodId: "relax",
      questId,
      durationMs: minimumDurationMs,
      pointsAwarded: expectedPoints,
      completedAt: 1_200 + minimumDurationMs,
      gameTitle: "Outer Wilds Echoes",
    });
    expect(store.getState().stats).toMatchObject({
      completedQuestCount: 1,
      uniqueCompletedQuestCount: 1,
      totalPlayedMs: minimumDurationMs,
      repeatedCompletionCount: 0,
      completionCountsByQuestId: { [questId]: 1 },
      completionCountsByMoodId: { relax: 1 },
      favoriteMoodId: "relax",
    });
    expect(store.getState().completeQuest()).toBeNull();
    expect(store.getState().profile.points).toBe(expectedPoints);
  });

  test("rejects completion one millisecond before the card minimum", () => {
    const { store, setNow } = makeStore(() => 0);
    store.getState().selectMood("relax");
    const questId = store.getState().offeredQuestIds[0];
    const quest = questsForMood("relax").find(
      (candidate) => candidate.id === questId,
    )!;
    const startedAt = 1_100;
    const pausedAt =
      startedAt + quest.minimumDurationMinutes * 60_000 - 1;
    store.getState().revealQuest(questId);
    store.getState().startQuest(startedAt);
    store.getState().pauseQuest(pausedAt);
    setNow(pausedAt + 1_000);

    expect(canCompleteQuest(store.getState().currentSession)).toBe(false);
    expect(store.getState().completeQuest("Game")).toBeNull();
    expect(store.getState().currentSession?.questId).toBe(questId);
    expect(store.getState().completedSessions).toEqual([]);
    expect(store.getState().profile.points).toBe(0);
    expect(store.getState().stats).toEqual(DEFAULT_QUEST_STATS);
  });

  test("debug mode bypasses the minimum while preserving time-based points", () => {
    const { store, setNow } = makeStore(() => 0);
    store.getState().selectMood("relax");
    const questId = store.getState().offeredQuestIds[0];
    store.getState().revealQuest(questId);
    store.getState().startQuest(1_100);
    store.getState().pauseQuest(1_100);
    setNow(1_100);

    expect(canCompleteQuest(store.getState().currentSession)).toBe(false);
    store.getState().setDebugMode(true);
    expect(store.getState().profile.debugMode).toBe(true);
    expect(
      canCompleteQuest(store.getState().currentSession, 1_100, true),
    ).toBe(true);

    const completion = store.getState().completeQuest("Debug Game");
    expect(completion).toMatchObject({
      questId,
      durationMs: 0,
      pointsAwarded: 0,
      gameTitle: "Debug Game",
    });
    expect(store.getState().profile.points).toBe(0);
    expect(store.getState().stats.completedQuestCount).toBe(1);
  });

  test("caps completion points at 60 minutes while preserving full active time", () => {
    const { store, setNow } = makeStore(() => 0);
    store.getState().selectMood("challenge");
    const questId = store.getState().offeredQuestIds[0];
    const startedAt = 1_100;
    const durationMs = POINTS_DURATION_CAP_MS + 15 * 60_000;
    store.getState().revealQuest(questId);
    store.getState().startQuest(startedAt);
    store.getState().pauseQuest(startedAt + durationMs);
    setNow(startedAt + durationMs + 500);

    const completion = store.getState().completeQuest();
    expect(completion?.durationMs).toBe(durationMs);
    expect(completion?.pointsAwarded).toBe(MAX_COMPLETION_POINTS);
    expect(store.getState().profile.points).toBe(MAX_COMPLETION_POINTS);
    expect(store.getState().stats.totalPlayedMs).toBe(durationMs);
  });

  test("sanitizes and limits optional game titles", () => {
    expect(sanitizeGameTitle("  \n \t  ")).toBe(undefined);
    expect(sanitizeGameTitle("  A\n\tGame  Title  ")).toBe("A Game Title");
    expect(sanitizeGameTitle("x".repeat(MAX_GAME_TITLE_LENGTH + 12))).toBe(
      "x".repeat(MAX_GAME_TITLE_LENGTH),
    );
  });

  test("spends one red rope, tracks cancellation, and rotates only the discarded slot", () => {
    const { store } = makeStore();
    store.getState().selectMood("connect");
    const offers = [...store.getState().offeredQuestIds];
    const discardedQuestId = offers[1];
    store.setState({
      profile: {
        ...store.getState().profile,
        points: SHUFFLE_COST,
      },
    });
    store.getState().revealQuest(discardedQuestId);

    expect(store.getState().discardCurrentSession()).toBe(true);
    const rotatedOffers = store.getState().offeredQuestIds;
    expect(store.getState().currentSession).toBeNull();
    expect(rotatedOffers).toHaveLength(QUEST_OFFER_COUNT);
    expect(rotatedOffers).not.toContain(discardedQuestId);
    expect(rotatedOffers[0]).toBe(offers[0]);
    expect(rotatedOffers[1]).not.toBe(offers[1]);
    expect(rotatedOffers[2]).toBe(offers[2]);
    expect(store.getState().offerSetsByMoodId.connect).toEqual(rotatedOffers);
    expect(store.getState().profile.points).toBe(SHUFFLE_COST);
    expect(store.getState().profile.redRopes).toBe(INITIAL_RED_ROPES - 1);
    expect(store.getState().stats.cancelledQuestCount).toBe(1);
  });

  test("refuses cancellation at zero red ropes without changing the session", () => {
    const { store } = makeStore();
    store.getState().selectMood("connect");
    const questId = store.getState().offeredQuestIds[0];
    store.getState().revealQuest(questId);
    store.setState({
      profile: { ...store.getState().profile, redRopes: 0 },
    });
    const offersBefore = [...store.getState().offeredQuestIds];

    expect(store.getState().discardCurrentSession()).toBe(false);
    expect(store.getState().currentSession?.questId).toBe(questId);
    expect(store.getState().offeredQuestIds).toEqual(offersBefore);
    expect(store.getState().stats.cancelledQuestCount).toBe(0);
  });

  test("debug mode allows cancellation at zero ropes without spending any", () => {
    const { store } = makeStore();
    store.getState().selectMood("connect");
    const questId = store.getState().offeredQuestIds[0];
    store.getState().revealQuest(questId);
    store.setState({
      profile: {
        ...store.getState().profile,
        redRopes: 0,
        debugMode: true,
      },
    });

    expect(store.getState().discardCurrentSession()).toBe(true);
    expect(store.getState().currentSession).toBeNull();
    expect(store.getState().profile.redRopes).toBe(0);
    expect(store.getState().stats.cancelledQuestCount).toBe(1);
  });

  test("purchases three red ropes atomically for 50 points", () => {
    const { store } = makeStore();

    expect(RED_ROPE_BUNDLE_SIZE).toBe(3);
    expect(RED_ROPE_BUNDLE_COST).toBe(50);

    expect(store.getState().purchaseRedRopes()).toBe(false);
    store.setState({
      profile: {
        ...store.getState().profile,
        points: RED_ROPE_BUNDLE_COST,
      },
    });
    expect(store.getState().purchaseRedRopes()).toBe(true);
    expect(store.getState().profile).toMatchObject({
      points: 0,
      redRopes: INITIAL_RED_ROPES + RED_ROPE_BUNDLE_SIZE,
    });
  });

  test("replays a known quest in ready state with exact-slot offer context", () => {
    const { store } = makeStore(() => 0);
    const quest = questsForMood("curious")[5];

    expect(store.getState().replayQuest("missing-quest")).toBe(false);
    expect(store.getState().replayQuest(quest.id)).toBe(true);
    expect(store.getState().currentSession).toMatchObject({
      moodId: "curious",
      questId: quest.id,
      revealedAt: 1_000,
      startedAt: null,
      pausedAt: null,
    });
    expect(store.getState().selectedMoodId).toBe("curious");
    expect(store.getState().offeredQuestIds).toHaveLength(QUEST_OFFER_COUNT);
    expect(store.getState().offeredQuestIds[0]).toBe(quest.id);
    expect(store.getState().offerSetsByMoodId.curious).toEqual(
      store.getState().offeredQuestIds,
    );
    expect(store.getState().replayQuest(questsForMood("relax")[0].id)).toBe(
      false,
    );

    expect(store.getState().discardCurrentSession()).toBe(true);
    expect(store.getState().offeredQuestIds).not.toContain(quest.id);
  });

  test("tracks unique quests, repeat completions, and favorite-mood ties by recency", () => {
    const { store, setNow } = makeStore(() => 0);
    const relaxQuest = questsForMood("relax")[0];
    const challengeQuest = questsForMood("challenge")[0];

    function completeReplay(quest: typeof relaxQuest) {
      expect(store.getState().replayQuest(quest.id)).toBe(true);
      const revealedAt = store.getState().currentSession!.revealedAt;
      const startedAt = revealedAt + 1;
      const pausedAt = startedAt + quest.minimumDurationMinutes * 60_000;
      store.getState().startQuest(startedAt);
      store.getState().pauseQuest(pausedAt);
      setNow(pausedAt + 1);
      expect(store.getState().completeQuest() === null).toBe(false);
    }

    completeReplay(relaxQuest);
    completeReplay(relaxQuest);
    completeReplay(challengeQuest);
    expect(store.getState().stats.favoriteMoodId).toBe("relax");
    completeReplay(challengeQuest);

    expect(store.getState().stats).toMatchObject({
      completedQuestCount: 4,
      uniqueCompletedQuestCount: 2,
      repeatedCompletionCount: 2,
      completionCountsByQuestId: {
        [relaxQuest.id]: 2,
        [challengeQuest.id]: 2,
      },
      completionCountsByMoodId: {
        relax: 2,
        challenge: 2,
      },
      favoriteMoodId: "challenge",
    });
  });

  test("resets an idle mood at exactly four hours without touching profile or history", () => {
    const { store, setNow } = makeStore();
    store.getState().selectMood("explore");
    store.setState({
      profile: {
        avatarTheme: "wizard",
        points: 345,
        redRopes: INITIAL_RED_ROPES,
        debugMode: true,
      },
      legacyCompletionCount: 7,
    });

    setNow(1_000 + MOOD_RESET_MS - 1);
    store.getState().refreshMoodWindow();
    expect(store.getState().selectedMoodId).toBe("explore");

    setNow(1_000 + MOOD_RESET_MS);
    store.getState().refreshMoodWindow();
    expect(store.getState().selectedMoodId).toBeNull();
    expect(store.getState().moodSelectedAt).toBeNull();
    expect(store.getState().offeredQuestIds).toEqual([]);
    expect(store.getState().offerSetsByMoodId).toEqual({});
    expect(store.getState().profile).toEqual({
      avatarTheme: "wizard",
      points: 345,
      redRopes: INITIAL_RED_ROPES,
      debugMode: true,
    });
    expect(store.getState().legacyCompletionCount).toBe(7);
  });

  test("preserves ready, running, and paused sessions past mood expiry", () => {
    const { store, setNow } = makeStore();
    store.getState().selectMood("challenge");
    store.getState().revealQuest(store.getState().offeredQuestIds[0]);
    setNow(1_000 + MOOD_RESET_MS);

    store.getState().refreshMoodWindow();
    expect(store.getState().currentSession?.startedAt).toBeNull();
    expect(store.getState().selectedMoodId).toBe("challenge");

    store.getState().startQuest(1_000 + MOOD_RESET_MS);
    store.getState().refreshMoodWindow();
    expect(store.getState().currentSession?.startedAt).toBe(
      1_000 + MOOD_RESET_MS,
    );

    store.getState().pauseQuest(1_100 + MOOD_RESET_MS);
    store.getState().refreshMoodWindow();
    expect(store.getState().currentSession?.pausedAt).toBe(
      1_100 + MOOD_RESET_MS,
    );
  });

  test("applies an expired mood reset as soon as an active session is discarded", () => {
    const { store, setNow } = makeStore();
    store.getState().selectMood("connect");
    store.getState().revealQuest(store.getState().offeredQuestIds[0]);
    setNow(1_000 + MOOD_RESET_MS);

    store.getState().discardCurrentSession();
    expect(store.getState().currentSession).toBeNull();
    expect(store.getState().selectedMoodId).toBeNull();
    expect(store.getState().offeredQuestIds).toEqual([]);
    expect(store.getState().offerSetsByMoodId).toEqual({});
  });
});

describe("mood quest persistence", () => {
  test("migrates v2 and v3 profiles and aggregate legacy completion counts", () => {
    for (const version of [2, 3]) {
      const migrated = migratePersistedQuestState(
        {
          profile: {
            onboardingComplete: true,
            selectedGenres: ["rpg"],
            onlinePreference: "include",
            avatarTheme: "wizard",
          },
          progressByQuestId: {
            first: { completionCount: 2 },
            second: {
              completedGames: [
                { highscoreMs: 10, achievedAt: 20 },
                { highscoreMs: 11, achievedAt: 21 },
              ],
            },
          },
          currentSession: {
            sessionId: "old-session",
            questId: "old-quest",
          },
        },
        version,
        5_000,
        () => 0,
      );

      expect(migrated.profile).toEqual({
        avatarTheme: "wizard",
        points: 0,
        redRopes: INITIAL_RED_ROPES,
        debugMode: false,
      });
      expect(migrated.stats).toEqual(DEFAULT_QUEST_STATS);
      expect(migrated.legacyCompletionCount).toBe(4);
      expect(migrated.selectedMoodId).toBeNull();
      expect(migrated.offerSetsByMoodId).toEqual({});
      expect(migrated.currentSession).toBeNull();
      expect(migrated.completedSessions).toEqual([]);
    }
  });

  test("migrates malformed v4 data and removes obsolete modifier fields", () => {
    const quest = questsForMood("relax")[0];
    const sanitized = migratePersistedQuestState(
      {
        profile: { avatarTheme: "wizard", points: -42.9 },
        selectedMoodId: "relax",
        moodSelectedAt: 1_000,
        offeredQuestIds: [
          quest.id,
          quest.id,
          questsForMood("explore")[0].id,
        ],
        currentSession: null,
        completedSessions: [
          {
            id: "completion-1",
            moodId: "relax",
            questId: quest.id,
            modifierIds: ["modifier-one-track", "missing"],
            followedModifierIds: ["modifier-one-track", "missing"],
            durationMs: -5,
            pointsAwarded: -10,
            completedAt: 2_000,
          },
        ],
        legacyCompletionCount: -3,
      },
      4,
      1_001,
      () => 0,
    );

    expect(sanitized.profile).toEqual({
      avatarTheme: "wizard",
      points: 0,
      redRopes: INITIAL_RED_ROPES,
      debugMode: false,
    });
    expect(sanitized.offeredQuestIds).toHaveLength(QUEST_OFFER_COUNT);
    expect(new Set(sanitized.offeredQuestIds).size).toBe(QUEST_OFFER_COUNT);
    expect(
      sanitized.offeredQuestIds.every(
        (id) => questsForMood("relax").some((quest) => quest.id === id),
      ),
    ).toBe(true);
    expect(sanitized.offerSetsByMoodId.relax).toEqual(
      sanitized.offeredQuestIds,
    );
    expect(sanitized.completedSessions[0]).toMatchObject({
      durationMs: 0,
      pointsAwarded: 0,
    });
    expect("modifierIds" in sanitized.completedSessions[0]).toBe(false);
    expect("followedModifierIds" in sanitized.completedSessions[0]).toBe(false);
    expect(sanitized.legacyCompletionCount).toBe(0);
  });

  test("preserves and sanitizes per-mood offers while the mood picker is open", () => {
    const relaxQuest = questsForMood("relax")[0];
    const challengeQuest = questsForMood("challenge")[0];
    const sanitized = sanitizePersistedQuestState(
      {
        profile: DEFAULT_PROFILE,
        selectedMoodId: null,
        moodSelectedAt: 1_000,
        offeredQuestIds: [],
        offerSetsByMoodId: {
          relax: [
            relaxQuest.id,
            relaxQuest.id,
            challengeQuest.id,
          ],
          challenge: [challengeQuest.id],
          missing: [relaxQuest.id],
        },
        currentSession: null,
        completedSessions: [],
        legacyCompletionCount: 0,
      },
      1_001,
      () => 0,
    );

    expect(sanitized.selectedMoodId).toBeNull();
    expect(sanitized.offeredQuestIds).toEqual([]);
    expect(sanitized.moodSelectedAt).toBe(1_000);
    expect(sanitized.offerSetsByMoodId.relax).toHaveLength(
      QUEST_OFFER_COUNT,
    );
    expect(
      sanitized.offerSetsByMoodId.relax?.every(
        (id) => questsForMood("relax").some((quest) => quest.id === id),
      ),
    ).toBe(true);
    expect(sanitized.offerSetsByMoodId.challenge).toHaveLength(
      QUEST_OFFER_COUNT,
    );
    expect("missing" in sanitized.offerSetsByMoodId).toBe(false);
  });

  test("preserves a valid active v4 session beyond the mood window", () => {
    const quest = questsForMood("progress")[0];
    const sanitized = migratePersistedQuestState(
      {
        profile: { avatarTheme: "default", points: 50 },
        selectedMoodId: "progress",
        moodSelectedAt: 1_000,
        offeredQuestIds: questsForMood("progress")
          .slice(0, QUEST_OFFER_COUNT)
          .map((candidate) => candidate.id),
        currentSession: {
          sessionId: "saved-session",
          moodId: "progress",
          questId: quest.id,
          modifierIds: ["modifier-one-track"],
          revealedAt: 1_100,
          startedAt: 1_200,
          pausedAt: 1_300,
          pausedTotalMs: 25,
        },
        completedSessions: [
          {
            id: "old-completion",
            moodId: "progress",
            questId: quest.id,
            modifierIds: ["modifier-one-track"],
            followedModifierIds: ["modifier-one-track"],
            durationMs: 900,
            pointsAwarded: 300,
            completedAt: 1_400,
          },
        ],
        legacyCompletionCount: 2,
      },
      4,
      1_000 + MOOD_RESET_MS,
      () => 0,
    );

    expect(sanitized.selectedMoodId).toBe("progress");
    expect(sanitized.offerSetsByMoodId.progress).toEqual(
      sanitized.offeredQuestIds,
    );
    expect(sanitized.currentSession).toMatchObject({
      sessionId: "saved-session",
      moodId: "progress",
      questId: quest.id,
      startedAt: 1_200,
      pausedAt: 1_300,
      pausedTotalMs: 25,
    });
    expect(sanitized.profile.points).toBe(50);
    expect(sanitized.completedSessions[0]).toMatchObject({
      id: "old-completion",
      pointsAwarded: 300,
    });
    expect("modifierIds" in sanitized.currentSession!).toBe(false);
    expect("modifierIds" in sanitized.completedSessions[0]).toBe(false);
    expect(sanitized.legacyCompletionCount).toBe(2);
  });

  test("refreshes idle v5 offer caches for the expanded mood catalog", () => {
    const oldOffers = questsForMood("relax")
      .slice(0, QUEST_OFFER_COUNT)
      .map((quest) => quest.id);
    const migrated = migratePersistedQuestState(
      {
        profile: { avatarTheme: "wizard", points: 75 },
        selectedMoodId: "relax",
        moodSelectedAt: 1_000,
        offeredQuestIds: oldOffers,
        offerSetsByMoodId: { relax: oldOffers },
        currentSession: null,
        completedSessions: [],
        legacyCompletionCount: 3,
      },
      5,
      1_001,
      () => 0,
    );

    expect(migrated.profile).toEqual({
      avatarTheme: "wizard",
      points: 75,
      redRopes: INITIAL_RED_ROPES,
      debugMode: false,
    });
    expect(migrated.selectedMoodId).toBeNull();
    expect(migrated.moodSelectedAt).toBeNull();
    expect(migrated.offeredQuestIds).toEqual([]);
    expect(migrated.offerSetsByMoodId).toEqual({});
    expect(migrated.legacyCompletionCount).toBe(3);
  });

  test("preserves an active v5 quest while refreshing its return offers", () => {
    const quest = questsForMood("relax")[0];
    const migrated = migratePersistedQuestState(
      {
        profile: DEFAULT_PROFILE,
        selectedMoodId: "relax",
        moodSelectedAt: 1_000,
        offeredQuestIds: [quest.id],
        offerSetsByMoodId: { relax: [quest.id] },
        currentSession: {
          sessionId: "active-v5",
          moodId: "relax",
          questId: quest.id,
          revealedAt: 1_100,
          startedAt: null,
          pausedAt: null,
          pausedTotalMs: 0,
        },
        completedSessions: [],
        legacyCompletionCount: 0,
      },
      5,
      1_200,
      () => 0,
    );

    expect(migrated.currentSession).toMatchObject({
      sessionId: "active-v5",
      moodId: "relax",
      questId: quest.id,
    });
    expect(migrated.offeredQuestIds).toHaveLength(QUEST_OFFER_COUNT);
    expect(migrated.offeredQuestIds).not.toContain(quest.id);
    expect(migrated.offerSetsByMoodId.relax).toEqual(
      migrated.offeredQuestIds,
    );
  });

  test("migrates v6 profiles with three ropes and derives exact completion stats", () => {
    const relaxQuest = questsForMood("relax")[0];
    const challengeQuest = questsForMood("challenge")[0];
    const migrated = migratePersistedQuestState(
      {
        profile: { avatarTheme: "wizard", points: 125 },
        selectedMoodId: null,
        moodSelectedAt: null,
        offeredQuestIds: [],
        offerSetsByMoodId: {},
        currentSession: null,
        completedSessions: [
          {
            id: "relax-2",
            moodId: "relax",
            questId: relaxQuest.id,
            durationMs: 2_000,
            pointsAwarded: 10,
            completedAt: 4_000,
            gameTitle: "  Game   Two ",
          },
          {
            id: "challenge-1",
            moodId: "challenge",
            questId: challengeQuest.id,
            durationMs: 3_000,
            pointsAwarded: 15,
            completedAt: 3_000,
          },
          {
            id: "relax-1",
            moodId: "relax",
            questId: relaxQuest.id,
            durationMs: 1_000,
            pointsAwarded: 5,
            completedAt: 2_000,
          },
        ],
        legacyCompletionCount: 7,
      },
      6,
      5_000,
      () => 0,
    );

    expect(migrated.profile).toEqual({
      avatarTheme: "wizard",
      points: 125,
      redRopes: INITIAL_RED_ROPES,
      debugMode: false,
    });
    expect(migrated.completedSessions[0].gameTitle).toBe("Game Two");
    expect(migrated.stats).toMatchObject({
      completedQuestCount: 3,
      uniqueCompletedQuestCount: 2,
      totalPlayedMs: 6_000,
      cancelledQuestCount: 0,
      repeatedCompletionCount: 1,
      completionCountsByQuestId: {
        [relaxQuest.id]: 2,
        [challengeQuest.id]: 1,
      },
      completionCountsByMoodId: { relax: 2, challenge: 1 },
      favoriteMoodId: "relax",
    });
    expect(migrated.legacyCompletionCount).toBe(7);
  });

  test("preserves the local debug preference when migrating v7", () => {
    const migrated = migratePersistedQuestState(
      {
        profile: {
          avatarTheme: "default",
          points: 25,
          redRopes: 0,
          debugMode: true,
        },
      },
      7,
      5_000,
      () => 0,
    );

    expect(migrated.profile).toEqual({
      avatarTheme: "default",
      points: 25,
      redRopes: 0,
      debugMode: true,
    });
  });

  test("sanitizes persisted stats without letting the 500-entry history cap lower aggregates", () => {
    const quest = questsForMood("relax")[0];
    const storedCompletionCount = STORED_COMPLETION_LIMIT + 200;
    const completedSessions = Array.from(
      { length: STORED_COMPLETION_LIMIT + 1 },
      (_, index) => ({
        id: `completion-${index}`,
        moodId: "relax",
        questId: quest.id,
        durationMs: 1_000,
        pointsAwarded: 1,
        completedAt: index + 1,
      }),
    );
    const sanitized = sanitizePersistedQuestState(
      {
        profile: { avatarTheme: "default", points: 0, redRopes: 2 },
        completedSessions,
        stats: {
          completedQuestCount: 1,
          uniqueCompletedQuestCount: 99,
          totalPlayedMs: 900_000,
          cancelledQuestCount: 12,
          repeatedCompletionCount: 0,
          completionCountsByQuestId: {
            [quest.id]: storedCompletionCount,
            missing: 9_999,
          },
          completionCountsByMoodId: { challenge: 9_999 },
          latestCompletionAtByMoodId: { relax: 900 },
          favoriteMoodId: "challenge",
        },
      },
      2_000,
      () => 0,
    );

    expect(sanitized.completedSessions).toHaveLength(
      STORED_COMPLETION_LIMIT,
    );
    expect(sanitized.stats).toMatchObject({
      completedQuestCount: storedCompletionCount,
      uniqueCompletedQuestCount: 1,
      totalPlayedMs: 900_000,
      cancelledQuestCount: 12,
      repeatedCompletionCount: storedCompletionCount - 1,
      completionCountsByQuestId: { [quest.id]: storedCompletionCount },
      completionCountsByMoodId: { relax: storedCompletionCount },
      latestCompletionAtByMoodId: { relax: 900 },
      favoriteMoodId: "relax",
    });
  });

  test("hydrates offered, active, and completed quest views", () => {
    const quest = questsForMood("relax")[0];
    const completion = {
      id: "completion-1",
      moodId: "relax" as const,
      questId: quest.id,
      durationMs: 1_000,
      pointsAwarded: quest.rewardPoints,
      completedAt: 2_000,
    };

    expect(hydrateQuest(quest.id, [completion], "en")?.completionCount).toBe(1);
    expect(hydrateQuest(quest.id, [completion], "en")?.tips).toEqual(quest.tips);
    expect(hydrateCompletedQuest(completion, "en")).toMatchObject({
      id: "completion-1",
      quest: { id: quest.id },
      mood: { id: "relax" },
    });
  });

  test("resets unknown persistence versions safely", () => {
    expect(
      migratePersistedQuestState({}, STORE_VERSION + 99, 1_000, () => 0),
    ).toEqual({
      profile: DEFAULT_PROFILE,
      selectedMoodId: null,
      moodSelectedAt: null,
      offeredQuestIds: [],
      offerSetsByMoodId: {},
      currentSession: null,
      completedSessions: [],
      stats: DEFAULT_QUEST_STATS,
      legacyCompletionCount: 0,
    });
  });
});
