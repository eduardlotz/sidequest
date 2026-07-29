import { describe, expect, test } from "bun:test";
import {
  MODIFIERS,
  objectivesForMood,
} from "../data/decks";
import {
  DEFAULT_PROFILE,
  STORE_VERSION,
  createQuestStore,
  hydrateCompletedQuest,
  migratePersistedQuestState,
} from "./useQuestStore";

function makeStore() {
  let now = 1_000;
  let session = 0;
  const store = createQuestStore(undefined, {
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

describe("v3 quest store", () => {
  test("starts ready and updates the online preference from profile", () => {
    const { store } = makeStore();
    expect(store.getState().profile).toEqual(DEFAULT_PROFILE);
    expect(
      store.getState().updateProfile({
        onlinePreference: "exclude",
      }),
    ).toBe(true);
    expect(store.getState().profile).toMatchObject({
      onlinePreference: "exclude",
    });
  });

  test("selects a mood and creates a ready objective session", () => {
    const { store } = makeStore();
    expect(store.getState().selectMood("adventure")).toBe(true);
    const objective = objectivesForMood("adventure", true)[0];
    expect(store.getState().selectObjective(objective.id)).toBe(true);
    expect(store.getState().currentSession).toEqual({
      sessionId: "session-1",
      moodId: "adventure",
      objectiveId: objective.id,
      modifierIds: [],
      revealedAt: 1_000,
      startedAt: null,
      pausedAt: null,
      pausedTotalMs: 0,
    });
  });

  test("only changes the mood while no session is open", () => {
    const { store } = makeStore();
    store.getState().selectMood("relax");
    const objective = objectivesForMood("relax", true)[0];
    store.getState().selectObjective(objective.id);
    expect(store.getState().selectMood("chaos")).toBe(false);
    store.getState().discardCurrentSession();
    store.getState().editMood();
    expect(store.getState().selectedMoodId).toBeNull();
  });

  test("adds and removes compatible modifiers before starting", () => {
    const { store } = makeStore();
    store.getState().selectMood("adventure");
    const objective = objectivesForMood("adventure", true).find((candidate) =>
      candidate.tags.includes("exploration"),
    )!;
    store.getState().selectObjective(objective.id);

    expect(store.getState().toggleModifier("explorer")).toBe(true);
    expect(store.getState().toggleModifier("minimalist")).toBe(true);
    expect(store.getState().currentSession?.modifierIds).toEqual([
      "explorer",
      "minimalist",
    ]);
    expect(store.getState().toggleModifier("explorer")).toBe(true);
    expect(store.getState().currentSession?.modifierIds).toEqual([
      "minimalist",
    ]);
    store.getState().startQuest(1_100);
    expect(store.getState().toggleModifier("explorer")).toBe(false);
    expect(store.getState().currentSession?.modifierIds).toEqual([
      "minimalist",
    ]);
  });

  test("rejects a modifier that conflicts with objective tags", () => {
    const { store } = makeStore();
    store.getState().selectMood("challenge");
    const objective = objectivesForMood("challenge", true).find((candidate) =>
      candidate.tags.includes("combat"),
    )!;
    store.getState().selectObjective(objective.id);
    expect(store.getState().toggleModifier("pacifist")).toBe(false);
    expect(store.getState().currentSession?.modifierIds).toEqual([]);
  });

  test("completes the timer session and keeps the selected mood", () => {
    const { store, setNow } = makeStore();
    store.getState().selectMood("creative");
    const objective = objectivesForMood("creative", true)[0];
    store.getState().selectObjective(objective.id);
    const modifier = MODIFIERS.find((candidate) =>
      candidate.id === "minimalist"
    )!;
    store.getState().toggleModifier(modifier.id);
    store.getState().startQuest(1_100);
    store.getState().pauseQuest(2_000);
    store.getState().resumeQuest(2_400);
    setNow(3_000);

    expect(store.getState().completeQuest(1_500)).toBe(true);
    expect(store.getState().currentSession).toBeNull();
    expect(store.getState().selectedMoodId).toBe("creative");
    expect(store.getState().completedSessions[0]).toMatchObject({
      id: "session-1",
      moodId: "creative",
      objectiveId: objective.id,
      modifierIds: ["minimalist"],
      durationMs: 1_500,
      completedAt: 3_000,
    });
    expect(
      hydrateCompletedQuest(store.getState().completedSessions[0])?.objective.id,
    ).toBe(objective.id);
  });

  test("migrates a version-4 single modifier into the additive model", () => {
    const objective = objectivesForMood("story", true).find((candidate) =>
      candidate.tags.includes("narrative"),
    )!;
    const sanitized = migratePersistedQuestState(
      {
        profile: {
          onboardingComplete: true,
          onlinePreference: "include",
          avatarTheme: "default",
        },
        selectedMoodId: "story",
        currentSession: {
          sessionId: "saved-session",
          moodId: "story",
          objectiveId: objective.id,
          modifierId: "roleplay",
          revealedAt: 100,
          startedAt: null,
          pausedAt: null,
          pausedTotalMs: 0,
        },
        completedSessions: [],
        legacyCompletions: [],
      },
      4,
    );
    expect(sanitized.selectedMoodId).toBe("story");
    expect(sanitized.currentSession?.startedAt).toBeNull();
    expect(sanitized.currentSession?.modifierIds).toEqual(["roleplay"]);
  });

  test("migrates v3 completion counts into legacy history", () => {
    const migrated = migratePersistedQuestState(
      {
        profile: {
          onboardingComplete: true,
          selectedGenres: ["rpg"],
          onlinePreference: "include",
          avatarTheme: "default",
        },
        progressByQuestId: {
          "a-thief-with-standards": { completionCount: 2 },
        },
        currentSession: {
          sessionId: "legacy-running",
          questId: "a-thief-with-standards",
        },
      },
      3,
    );
    expect(migrated.profile.onlinePreference).toBe("include");
    expect(migrated.currentSession).toBeNull();
    expect(migrated.legacyCompletions).toEqual([
      {
        questId: "a-thief-with-standards",
        title: "A Thief With Standards",
        completionCount: 2,
      },
    ]);
  });

  test("unknown versions reset safely", () => {
    expect(migratePersistedQuestState({}, 999)).toEqual({
      profile: DEFAULT_PROFILE,
      selectedMoodId: null,
      currentSession: null,
      completedSessions: [],
      legacyCompletions: [],
    });
  });
});
