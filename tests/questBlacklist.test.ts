import { describe, expect, test } from "bun:test";
import { QUEST_CORES } from "../src/data/quests";
import { MOODS } from "../src/data/moods";
import { createQuestStore } from "../src/stores/useQuestStore";
import { createDefaultQuestState, generateQuestOffers, rotateSessionOffer } from "../src/domain/quest/rules";
import { migrateQuestState } from "../src/domain/quest/persistence";
import type { PersistedQuestState, QuestSession } from "../src/domain/quest/model";
import type { StorageValue } from "zustand/middleware";

const options = { now: () => 1_000, random: () => 0, createSessionId: () => "session",
  getLibraryGames: () => [], getLibraryRevision: () => 0, getCuratedGamePreferences: () => ({}) };

describe("quest blacklist", () => {
  test("excludes an unstarted quest, replaces its card, and preserves progress and currency", () => {
    const store = createQuestStore(undefined, options);
    store.getState().selectMood("relax");
    const original = store.getState().offeredQuests;
    const offer = original[0];
    store.getState().revealQuest(offer.id);
    const profile = store.getState().profile;
    expect(store.getState().excludeCurrentQuest()).toBe(true);
    const state = store.getState();
    expect(state.currentSession).toBeNull();
    expect(state.blacklistedQuestIds).toEqual([offer.questId]);
    expect(state.offeredQuests).toHaveLength(3);
    expect(state.offeredQuests.some((entry) => entry.questId === offer.questId)).toBe(false);
    expect(state.offeredQuests).toEqual(expect.arrayContaining(original.slice(1)));
    expect(state.profile).toEqual(profile);
    expect(state.questProgressById[offer.questId]).toBeDefined();
    expect(state.stats.cancelledQuestCount).toBe(0);
    expect(state.repeatQuest(offer.questId)).toBe(false);
    state.setQuestBlacklisted(offer.questId, false);
    expect(store.getState().repeatQuest(offer.questId)).toBe(true);
  });

  test("filters every mood cache, shuffles, preference changes, and library refreshes", () => {
    const store = createQuestStore(undefined, options);
    for (const mood of MOODS) store.getState().selectMood(mood.id);
    const id = store.getState().offerSetsByMoodId.relax![0].questId;
    store.getState().setQuestBlacklisted(id, true);
    for (const offers of Object.values(store.getState().offerSetsByMoodId)) {
      expect(offers!.some((offer) => offer.questId === id)).toBe(false);
    }
    for (const mood of MOODS) {
      store.getState().selectMood(mood.id);
      store.getState().dealNewCards();
      expect(store.getState().offeredQuests.some((offer) => offer.questId === id)).toBe(false);
    }
    store.getState().savePoolPreferences(store.getState().poolPreferences);
    store.setState({ offerLibraryRevision: -1 });
    store.getState().refreshLibraryOffers();
    expect(store.getState().offeredQuests.some((offer) => offer.questId === id)).toBe(false);
  });

  test("blocks quests across games and never falls back to them when the pool is empty", () => {
    const quest = QUEST_CORES.find((quest) => quest.gameBindable && quest.universal)!;
    const games = ["first", "second"].map((id) => ({ id, name: id, source: "custom" as const, questIds: [quest.id] }));
    const store = createQuestStore(undefined, { ...options, getLibraryGames: () => games });
    store.getState().chooseGame("first");
    expect(store.getState().offeredQuests[0].questId).toBe(quest.id);
    store.getState().setQuestBlacklisted(quest.id, true);
    expect(store.getState().offeredQuests).toEqual([]);
    store.getState().chooseGame("second");
    expect(store.getState().offeredQuests).toEqual([]);
    store.getState().dealNewCards();
    expect(store.getState().offeredQuests).toEqual([]);
    store.getState().setQuestBlacklisted(quest.id, false);
    expect(store.getState().offeredQuests[0].questId).toBe(quest.id);
    expect(generateQuestOffers(null, [], () => 0, undefined, undefined,
      new Set(QUEST_CORES.map((quest) => quest.id)))).toEqual([]);
  });

  test("a running quest stays active when excluded from the gallery and cancellation rotates without blocked quests", () => {
    const store = createQuestStore(undefined, options);
    store.getState().selectMood("relax");
    const offer = store.getState().offeredQuests[0];
    store.getState().revealQuest(offer.id);
    store.getState().startQuest(1_000);
    const session = store.getState().currentSession!;
    expect(store.getState().excludeCurrentQuest()).toBe(false);
    store.getState().setQuestBlacklisted(offer.questId, true);
    expect(store.getState().currentSession).toEqual(session);
    expect(store.getState().discardCurrentSession()).toBe(true);
    expect(store.getState().profile.redRopes).toBe(4);
    expect(store.getState().stats.cancelledQuestCount).toBe(1);
    expect(store.getState().offeredQuests.some((entry) => entry.questId === offer.questId)).toBe(false);

    const state = createDefaultQuestState();
    state.selectedMoodId = "relax";
    state.offeredQuests = generateQuestOffers("relax", [], () => 0);
    state.offerSetsByMoodId.relax = state.offeredQuests;
    state.blacklistedQuestIds = QUEST_CORES.map((quest) => quest.id)
      .filter((id) => state.offeredQuests.slice(1).every((offer) => offer.questId !== id));
    const rotatingSession: QuestSession = { ...session, questId: state.offeredQuests[0].questId };
    const rotated = rotateSessionOffer(state, rotatingSession, [], () => 0);
    expect(rotated.offeredQuests.some((offer) => state.blacklistedQuestIds.includes(offer.questId))).toBe(false);
  });

  test("saves and restores the blacklist, sanitizes corrupt IDs, and preserves older saved progress", () => {
    let saved: StorageValue<PersistedQuestState> | null = null;
    const storage = { getItem: () => saved,
      setItem: (_: string, value: StorageValue<PersistedQuestState>) => { saved = value; },
      removeItem: () => { saved = null; } };
    const store = createQuestStore(storage, options);
    store.getState().selectMood("relax");
    const offer = store.getState().offeredQuests[0];
    store.getState().setQuestBlacklisted(offer.questId, true);
    const restored = createQuestStore(storage, options).getState();
    expect(restored.blacklistedQuestIds).toEqual([offer.questId]);
    expect(restored.offeredQuests.some((entry) => entry.questId === offer.questId)).toBe(false);
    const migrated = migrateQuestState({ ...restored, blacklistedQuestIds: [offer.questId, offer.questId, "retired", 123],
      offeredQuests: [offer], offerSetsByMoodId: { relax: [offer] } });
    expect(migrated.blacklistedQuestIds).toEqual([offer.questId]);
    expect(migrated.offeredQuests).toEqual([]);
    expect(migrated.offerSetsByMoodId.relax).toEqual([]);
    const old = migrateQuestState({ ...restored, blacklistedQuestIds: undefined });
    expect(old.blacklistedQuestIds).toEqual([]);
    expect(old.profile).toEqual(restored.profile);
  });
});
