import { describe, expect, test } from "bun:test";
import {
  MODIFIERS,
  MODIFIERS_BY_ID,
  compatibleModifiersForQuest,
  drawRandomModifiers,
} from "./modifiers";
import { MOODS, MOODS_BY_ID } from "./moods";
import {
  QUESTS,
  QUESTS_BY_ID,
  QUESTS_BY_MOOD,
  questsForMood,
} from "./quests";

describe("mood quest catalog", () => {
  test("contains exactly six moods with six quests each", () => {
    expect(MOODS).toHaveLength(6);
    expect(new Set(MOODS.map((mood) => mood.id)).size).toBe(6);
    expect(QUESTS).toHaveLength(36);

    for (const mood of MOODS) {
      expect(questsForMood(mood.id)).toHaveLength(6);
      expect(QUESTS_BY_MOOD[mood.id]).toHaveLength(6);
      expect(MOODS_BY_ID[mood.id].id).toBe(mood.id);
    }
  });

  test("keeps authored fields unique, complete, and within the reward range", () => {
    expect(new Set(QUESTS.map((quest) => quest.id)).size).toBe(QUESTS.length);
    expect(new Set(QUESTS.map((quest) => quest.title)).size).toBe(QUESTS.length);
    expect(new Set(QUESTS.map((quest) => quest.objective)).size).toBe(
      QUESTS.length,
    );

    for (const quest of QUESTS) {
      expect(/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(quest.id)).toBe(true);
      expect(quest.title.trim().length > 0).toBe(true);
      expect(quest.objective.trim().length > 0).toBe(true);
      expect(quest.completion.trim().length > 0).toBe(true);
      expect(quest.motivation.trim().length > 0).toBe(true);
      expect(quest.compatibilityTags.length > 0).toBe(true);
      expect(quest.durationMinutes >= 20).toBe(true);
      expect(quest.durationMinutes <= 60).toBe(true);
      expect(quest.rewardPoints >= 100).toBe(true);
      expect(quest.rewardPoints <= 250).toBe(true);
      expect(QUESTS_BY_ID[quest.id].id).toBe(quest.id);
    }
  });

  test("answers which game to launch instead of assuming one is running", () => {
    const selectionLanguage =
      /\b(game|shooter|fighting|racing|sport|sandbox|library|world|series|franchise)\b/i;

    for (const quest of QUESTS) {
      expect(selectionLanguage.test(quest.objective)).toBe(true);
      expect(/\b(choose|launch|open|play|return|think of)\b/i.test(
        quest.completion,
      )).toBe(true);
    }
  });

  test("covers the concrete game-choice triggers from the product brief", () => {
    expect(
      /childhood|teenage/i.test(
        QUESTS_BY_ID["relax-soft-landing"].completion,
      ),
    ).toBe(true);
    expect(
      /installed library/i.test(
        QUESTS_BY_ID["explore-wrong-turn"].completion,
      ),
    ).toBe(true);
    expect(
      /game you bought but never started/i.test(
        QUESTS_BY_ID["progress-break-the-blocker"].objective,
      ),
    ).toBe(true);
    expect(QUESTS_BY_ID["progress-clean-finish"]).toMatchObject({
      durationMinutes: 60,
      rewardPoints: 250,
    });
    expect(
      /solo shooter.*unlocks/i.test(
        QUESTS_BY_ID["progress-three-step-plan"].objective,
      ),
    ).toBe(true);
    expect(
      /fighting game/i.test(
        QUESTS_BY_ID["challenge-first-try-counts"].objective,
      ),
    ).toBe(true);
    expect(
      /competitive shooter/i.test(
        QUESTS_BY_ID["challenge-one-step-harder"].objective,
      ),
    ).toBe(true);
    expect(
      /racing game/i.test(
        QUESTS_BY_ID["challenge-beat-your-ghost"].objective,
      ),
    ).toBe(true);
    expect(
      /friends-only game.*yourself/i.test(
        QUESTS_BY_ID["connect-lift-the-lowest"].objective,
      ),
    ).toBe(true);
    expect(
      /old group game.*random players/i.test(
        QUESTS_BY_ID["connect-follow-their-lead"].objective,
      ),
    ).toBe(true);
  });
});

describe("quest modifiers", () => {
  test("uses the confirmed bonus range and exports an ID map", () => {
    expect(MODIFIERS.length > 0).toBe(true);

    for (const modifier of MODIFIERS) {
      expect(modifier.bonusPoints >= 50).toBe(true);
      expect(modifier.bonusPoints <= 100).toBe(true);
      expect(MODIFIERS_BY_ID[modifier.id].id).toBe(modifier.id);
    }
  });

  test("only exposes tag-compatible gated modifiers", () => {
    const familiarPlace = QUESTS_BY_ID["relax-one-good-loop"];
    const compatibleIds = compatibleModifiersForQuest(familiarPlace).map(
      (modifier) => modifier.id,
    );

    expect(compatibleIds).toContain("modifier-one-track");
    expect(compatibleIds).toContain("modifier-minimal-hud");
    expect(compatibleIds).toContain("modifier-no-map");
    expect(compatibleIds).toContain("modifier-no-sprint");
    expect(compatibleIds).toContain("modifier-no-fast-travel");
    expect(compatibleIds.includes("modifier-no-healing")).toBe(false);
  });

  test("gives every quest enough candidates for a one-to-three draw", () => {
    for (const quest of QUESTS) {
      expect(compatibleModifiersForQuest(quest).length >= 3).toBe(true);
    }
  });

  test("draws one to three unique, mutually compatible modifiers", () => {
    const quest = QUESTS_BY_ID["explore-edge-of-known"];
    const one = drawRandomModifiers(quest, () => 0);
    expect(one).toHaveLength(1);

    const values = [0.999, 0.25, 0.75, 0.45];
    let valueIndex = 0;
    const three = drawRandomModifiers(
      quest,
      () => values[valueIndex++] ?? 0.5,
    );

    expect(three).toHaveLength(3);
    expect(new Set(three.map((modifier) => modifier.id)).size).toBe(3);

    const groups = three
      .map((modifier) => modifier.exclusiveGroup)
      .filter((group): group is string => Boolean(group));
    expect(new Set(groups).size).toBe(groups.length);
  });
});
