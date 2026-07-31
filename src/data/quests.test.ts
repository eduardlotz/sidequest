import { describe, expect, test } from "bun:test";
import { MOODS, MOODS_BY_ID } from "./moods";
import {
  QUESTS,
  QUESTS_BY_ID,
  QUESTS_BY_MOOD,
  questsForMood,
} from "./quests";

describe("mood quest catalog", () => {
  test("contains exactly twelve moods with thirty quests each", () => {
    expect(MOODS).toHaveLength(12);
    expect(new Set(MOODS.map((mood) => mood.id)).size).toBe(12);
    expect(QUESTS).toHaveLength(360);

    for (const mood of MOODS) {
      expect(questsForMood(mood.id)).toHaveLength(30);
      expect(QUESTS_BY_MOOD[mood.id]).toHaveLength(30);
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
      expect("motivation" in quest).toBe(false);
      expect(quest.tips).toHaveLength(2);
      expect(new Set(quest.tips.map((tip) => tip.title)).size).toBe(2);
      expect(
        quest.tips.every(
          (tip) =>
            tip.title.trim().length > 0 && tip.description.trim().length > 0,
        ),
      ).toBe(true);
      expect(
        quest.tips.every(
          (tip) =>
            !/\b(library|launch|choose a game|pick a game)\b/i.test(
              `${tip.title} ${tip.description}`,
            ) && !("bonusPoints" in tip),
        ),
      ).toBe(true);
      expect(quest.durationMinutes >= 20).toBe(true);
      expect(quest.durationMinutes <= 60).toBe(true);
      expect(quest.rewardPoints >= 100).toBe(true);
      expect(quest.rewardPoints <= 250).toBe(true);
      expect(QUESTS_BY_ID[quest.id].id).toBe(quest.id);
    }
  });

  test("answers which game to launch instead of assuming one is running", () => {
    const selectionLanguage =
      /\b(game|games|shooter|fighting|racing|sport|sandbox|library|world|series|franchise|title|save|campaign|mode)\b/i;
    const selectionAction =
      /\b(choose|pick|find|identify|scan|launch|open|play|return|think of|among)\b/i;

    for (const quest of QUESTS) {
      expect(
        selectionLanguage.test(`${quest.objective} ${quest.completion}`),
      ).toBe(true);
      expect(selectionAction.test(quest.completion)).toBe(true);
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
