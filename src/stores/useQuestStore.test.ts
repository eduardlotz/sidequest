import { describe, expect, test } from "bun:test";
import { questsForMood } from "../data/quests";
import {
  hydrateCompletedQuest,
  hydrateQuest,
} from "../localization/catalog";
import {
  DEFAULT_PROFILE,
  MOOD_RESET_MS,
  QUEST_OFFER_COUNT,
  SHUFFLE_COST,
  STORE_VERSION,
  createQuestStore,
  migratePersistedQuestState,
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

  test("only completes while paused and awards base quest points once", () => {
    const { store, setNow } = makeStore(() => 0);
    store.getState().selectMood("relax");
    const questId = store.getState().offeredQuestIds[0];
    store.getState().revealQuest(questId);
    store.getState().startQuest(1_100);

    expect(store.getState().completeQuest(900)).toBeNull();
    store.getState().pauseQuest(2_000);
    setNow(2_100);

    const expectedPoints =
      questsForMood("relax").find((quest) => quest.id === questId)!.rewardPoints;
    const offersBeforeCompletion = [...store.getState().offeredQuestIds];
    expect(store.getState().completeQuest(900.8)).toBe(true);

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
      durationMs: 900,
      pointsAwarded: expectedPoints,
      completedAt: 2_100,
    });
    expect(store.getState().completeQuest(900)).toBeNull();
    expect(store.getState().profile.points).toBe(expectedPoints);
  });

  test("replaces only the discarded quest for free", () => {
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

    store.getState().discardCurrentSession();
    const rotatedOffers = store.getState().offeredQuestIds;
    expect(store.getState().currentSession).toBeNull();
    expect(rotatedOffers).toHaveLength(QUEST_OFFER_COUNT);
    expect(rotatedOffers).not.toContain(discardedQuestId);
    expect(rotatedOffers[0]).toBe(offers[0]);
    expect(rotatedOffers[1]).not.toBe(offers[1]);
    expect(rotatedOffers[2]).toBe(offers[2]);
    expect(store.getState().offerSetsByMoodId.connect).toEqual(rotatedOffers);
    expect(store.getState().profile.points).toBe(SHUFFLE_COST);
  });

  test("resets an idle mood at exactly four hours without touching profile or history", () => {
    const { store, setNow } = makeStore();
    store.getState().selectMood("explore");
    store.setState({
      profile: { avatarTheme: "wizard", points: 345 },
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
      });
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

    expect(migrated.profile).toEqual({ avatarTheme: "wizard", points: 75 });
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
      legacyCompletionCount: 0,
    });
  });
});
