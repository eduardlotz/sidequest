import { describe, expect, test } from "bun:test";
import { MODIFIERS_BY_ID } from "../data/modifiers";
import { questsForMood } from "../data/quests";
import {
  DEFAULT_PROFILE,
  MOOD_RESET_MS,
  QUEST_OFFER_COUNT,
  SHUFFLE_COST,
  STORE_VERSION,
  createQuestStore,
  hydrateCompletedQuest,
  hydrateQuest,
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

  test("only reveals an offered quest and assigns one compatible modifier", () => {
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
    expect(store.getState().currentSession?.modifierIds).toHaveLength(1);
  });

  test("can assign three unique compatible modifiers", () => {
    const { store } = makeStore(() => 0.999);
    store.getState().selectMood("challenge");
    const offeredId = store.getState().offeredQuestIds[0];

    expect(store.getState().revealQuest(offeredId)).toBe(true);
    const modifierIds = store.getState().currentSession!.modifierIds;
    expect(modifierIds).toHaveLength(3);
    expect(new Set(modifierIds).size).toBe(3);
    expect(
      modifierIds.every((modifierId) => Boolean(MODIFIERS_BY_ID[modifierId])),
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

  test("only completes while paused, saves followed subset, and awards points once", () => {
    const { store, setNow } = makeStore(() => 0);
    store.getState().selectMood("relax");
    const questId = store.getState().offeredQuestIds[0];
    store.getState().revealQuest(questId);
    const assignedIds = [...store.getState().currentSession!.modifierIds];
    store.getState().startQuest(1_100);

    expect(store.getState().completeQuest(900, assignedIds)).toBeNull();
    store.getState().pauseQuest(2_000);
    setNow(2_100);

    const followedId = assignedIds[0];
    const expectedPoints =
      questsForMood("relax").find((quest) => quest.id === questId)!
        .rewardPoints + MODIFIERS_BY_ID[followedId].bonusPoints;
    expect(
      store.getState().completeQuest(900.8, [
        followedId,
        followedId,
        "not-assigned",
      ]),
    ).toBe(true);

    expect(store.getState().profile.points).toBe(expectedPoints);
    expect(store.getState().currentSession).toBeNull();
    expect(store.getState().completedSessions).toHaveLength(1);
    expect(store.getState().completedSessions[0]).toMatchObject({
      id: "session-1",
      moodId: "relax",
      questId,
      modifierIds: assignedIds,
      followedModifierIds: [followedId],
      durationMs: 900,
      pointsAwarded: expectedPoints,
      completedAt: 2_100,
    });
    expect(store.getState().completeQuest(900, [followedId])).toBeNull();
    expect(store.getState().profile.points).toBe(expectedPoints);
  });

  test("keeps the same offers after discarding instead of granting a free shuffle", () => {
    const { store } = makeStore();
    store.getState().selectMood("connect");
    const offers = [...store.getState().offeredQuestIds];
    store.getState().revealQuest(offers[0]);

    store.getState().discardCurrentSession();
    expect(store.getState().currentSession).toBeNull();
    expect(store.getState().offeredQuestIds).toEqual(offers);
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

  test("sanitizes malformed v4 profile, offers, completion modifiers, and numbers", () => {
    const quest = questsForMood("relax")[0];
    const modifierId = MODIFIERS_BY_ID["modifier-one-track"].id;
    const sanitized = sanitizePersistedQuestState(
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
            modifierIds: [modifierId, modifierId, "missing"],
            followedModifierIds: [modifierId, "missing"],
            durationMs: -5,
            pointsAwarded: -10,
            completedAt: 2_000,
          },
        ],
        legacyCompletionCount: -3,
      },
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
      modifierIds: [modifierId],
      followedModifierIds: [modifierId],
      durationMs: 0,
      pointsAwarded: 0,
    });
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
    const modifierId = "modifier-one-track";
    const sanitized = sanitizePersistedQuestState(
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
          modifierIds: [modifierId],
          revealedAt: 1_100,
          startedAt: 1_200,
          pausedAt: 1_300,
          pausedTotalMs: 25,
        },
        completedSessions: [],
        legacyCompletionCount: 2,
      },
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
      modifierIds: [modifierId],
      startedAt: 1_200,
      pausedAt: 1_300,
      pausedTotalMs: 25,
    });
    expect(sanitized.profile.points).toBe(50);
    expect(sanitized.legacyCompletionCount).toBe(2);
  });

  test("hydrates offered, active, and completed quest views", () => {
    const quest = questsForMood("relax")[0];
    const modifierId = "modifier-one-track";
    const completion = {
      id: "completion-1",
      moodId: "relax" as const,
      questId: quest.id,
      modifierIds: [modifierId],
      followedModifierIds: [modifierId],
      durationMs: 1_000,
      pointsAwarded: quest.rewardPoints + MODIFIERS_BY_ID[modifierId].bonusPoints,
      completedAt: 2_000,
    };

    expect(hydrateQuest(quest.id, [completion])?.completionCount).toBe(1);
    expect(
      hydrateQuest(quest.id, [completion], [modifierId])?.modifiers[0].id,
    ).toBe(modifierId);
    expect(hydrateCompletedQuest(completion)).toMatchObject({
      id: "completion-1",
      quest: { id: quest.id },
      mood: { id: "relax" },
      modifiers: [{ id: modifierId }],
      followedModifiers: [{ id: modifierId }],
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
