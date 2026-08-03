import { describe, expect, test } from "bun:test";
import { MOODS, MOODS_BY_ID } from "./moods";
import {
  QUESTS,
  QUESTS_BY_ID,
  QUESTS_BY_MOOD,
  questsForMood,
} from "./quests";

const wordCount = (value: string) => value.trim().split(/\s+/).length;

describe("mood quest catalog", () => {
  test("contains exactly twelve moods with thirty-six quests each", () => {
    expect(MOODS).toHaveLength(12);
    expect(new Set(MOODS.map((mood) => mood.id)).size).toBe(12);
    expect(QUESTS).toHaveLength(432);

    for (const mood of MOODS) {
      expect(questsForMood(mood.id)).toHaveLength(36);
      expect(QUESTS_BY_MOOD[mood.id]).toHaveLength(36);
      expect(MOODS_BY_ID[mood.id].id).toBe(mood.id);
    }
  });

  test("keeps authored fields unique, complete, and within the reward range", () => {
    expect(new Set(QUESTS.map((quest) => quest.id)).size).toBe(QUESTS.length);
    expect(new Set(QUESTS.map((quest) => quest.name)).size).toBe(QUESTS.length);
    expect(new Set(QUESTS.map((quest) => quest.title)).size).toBe(QUESTS.length);
    expect(new Set(QUESTS.map((quest) => quest.objective)).size).toBe(
      QUESTS.length,
    );

    for (const quest of QUESTS) {
      expect(/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(quest.id)).toBe(true);
      expect(quest.name.trim().length > 0).toBe(true);
      expect(quest.title.trim().length > 0).toBe(true);
      expect(quest.objective.trim().length > 0).toBe(true);
      expect(quest.completion.trim().length > 0).toBe(true);
      expect(wordCount(quest.name) <= 4).toBe(true);
      expect(quest.name.length <= 32).toBe(true);
      expect(quest.name === quest.title).toBe(false);
      expect(/[.!?]$/.test(quest.name)).toBe(false);
      expect(wordCount(quest.title) <= 6).toBe(true);
      expect(wordCount(quest.objective) <= 14).toBe(true);
      expect(wordCount(quest.completion) <= 12).toBe(true);
      expect("motivation" in quest).toBe(false);
      expect(quest.tips).toHaveLength(2);
      expect(quest.tipIds).toHaveLength(2);
      expect(new Set(quest.tips.map((tip) => tip.title)).size).toBe(2);
      expect(
        quest.tips.every(
          (tip) =>
            tip.title.trim().length > 0 &&
            tip.description.trim().length > 0 &&
            wordCount(tip.title) <= 5 &&
            wordCount(tip.description) <= 15,
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
      expect(quest.minimumDurationMinutes >= 5).toBe(true);
      expect(quest.minimumDurationMinutes <= 30).toBe(true);
      expect(quest.minimumDurationMinutes % 5).toBe(0);
      expect(quest.suggestedDurationMinutes >= 15).toBe(true);
      expect(quest.suggestedDurationMinutes <= 60).toBe(true);
      expect(quest.suggestedDurationMinutes % 5).toBe(0);
      expect(
        quest.suggestedDurationMinutes >= quest.minimumDurationMinutes,
      ).toBe(true);
      expect(quest.rewardPoints >= 100).toBe(true);
      expect(quest.rewardPoints <= 250).toBe(true);
      expect(QUESTS_BY_ID[quest.id].id).toBe(quest.id);
    }
  });

  test("uses varied mood-aware minimums with shorter restorative sessions", () => {
    const restorativeMoodIds = [
      "relax",
      "low-energy",
      "overwhelmed",
      "nostalgic",
    ] as const;

    for (const moodId of restorativeMoodIds) {
      const durations = QUESTS_BY_MOOD[moodId].map(
        (quest) => quest.minimumDurationMinutes,
      );
      expect(Math.min(...durations)).toBe(5);
      expect(Math.max(...durations) <= 25).toBe(true);
      expect(new Set(durations).size >= 4).toBe(true);
    }

    for (const mood of MOODS) {
      expect(
        new Set(
          QUESTS_BY_MOOD[mood.id].map(
            (quest) => quest.minimumDurationMinutes,
          ),
        ).size >= 4,
      ).toBe(true);
    }

    const averageDuration =
      QUESTS.reduce(
        (total, quest) => total + quest.minimumDurationMinutes,
        0,
      ) / QUESTS.length;
    expect(averageDuration < 20).toBe(true);

    expect(
      QUESTS.some((quest) => quest.suggestedDurationMinutes === 15),
    ).toBe(true);
    expect(
      QUESTS.some((quest) => quest.suggestedDurationMinutes === 60),
    ).toBe(true);
  });

  test("separates the points minimum from a genre-aware session suggestion", () => {
    expect(QUESTS_BY_ID["challenge-one-step-harder"]).toMatchObject({
      minimumDurationMinutes: 25,
      suggestedDurationMinutes: 35,
    });
    expect(QUESTS_BY_ID["challenge-pressure-proof"]).toMatchObject({
      minimumDurationMinutes: 20,
      suggestedDurationMinutes: 60,
    });

    for (const quest of QUESTS) {
      expect(
        /\b\d+\s+(?:active\s+)?minutes?\b/i.test(
          `${quest.title} ${quest.objective} ${quest.completion}`,
        ),
      ).toBe(false);
    }
  });

  test("names a recognizable game or game group before giving the finish", () => {
    const gameCue =
      /\b(game|games|library|save|campaign|level|quest|mode|world|series|shooter|fighter|fighting|racing|sport|sandbox|sim|simulation|simulator|RPG|JRPG|roguelike|strategy|tactics|card|deck|platformer|rhythm|puzzle|builder|building|survival|horror|arcade|match|track|chapter|console|character|developer|studio|controller|MMO|tabletop|pinball|FMV|favorite|achievement|map|cover|flight|novel|adventure)\b/i;

    for (const quest of QUESTS) {
      expect(gameCue.test(`${quest.title} ${quest.objective}`)).toBe(true);
      expect(
        /\b(choose|pick|select|browse) (?:an? |the )?(?:owned |installed )?game\b/i.test(
          quest.completion,
        ),
      ).toBe(false);
    }
  });

  test("keeps fixed tips compatible with the core quest", () => {
    const setupChangingLanguage =
      /\b(customize|customization|new build|themed deck|change (?:the )?(?:camera|controls|setup)|restore (?:your )?(?:settings|setup)|character backstory|neglected character)\b/i;

    for (const quest of QUESTS) {
      const coreCopy = `${quest.title} ${quest.objective} ${quest.completion}`;
      if (quest.tips.some((tip) => tip.title === "Keep Your Setup")) {
        expect(setupChangingLanguage.test(coreCopy)).toBe(false);
      }
      if (quest.tips.some((tip) => tip.title === "Stay Together")) {
        expect(
          /\b(co-op|multiplayer|player|shared|team|controller)\b/i.test(coreCopy),
        ).toBe(true);
      }
      if (quest.tips.some((tip) => tip.title === "Ground Level")) {
        expect(/\b(isometric|overhead|from above)\b/i.test(coreCopy)).toBe(
          false,
        );
      }
      if (quest.tips.some((tip) => tip.title === "Help First")) {
        expect(
          /\b(co-op|multiplayer|player|team|shared|stranger|companion|resident|support)\b/i.test(
            coreCopy,
          ),
        ).toBe(true);
      }
    }
  });

  test("covers the concrete game-choice triggers from the product brief", () => {
    expect(
      /childhood|teenage/i.test(
        `${QUESTS_BY_ID["relax-soft-landing"].title} ${QUESTS_BY_ID["relax-soft-landing"].objective}`,
      ),
    ).toBe(true);
    expect(
      /library|installed.*row/i.test(
        `${QUESTS_BY_ID["explore-wrong-turn"].title} ${QUESTS_BY_ID["explore-wrong-turn"].objective}`,
      ),
    ).toBe(true);
    expect(
      /game you bought but never started/i.test(
        QUESTS_BY_ID["progress-break-the-blocker"].objective,
      ),
    ).toBe(true);
    expect(QUESTS_BY_ID["progress-clean-finish"]).toMatchObject({
      minimumDurationMinutes: 30,
      suggestedDurationMinutes: 60,
      rewardPoints: 250,
    });
    expect(
      /solo shooter.*unlock/i.test(
        `${QUESTS_BY_ID["progress-three-step-plan"].objective} ${QUESTS_BY_ID["progress-three-step-plan"].completion}`,
      ),
    ).toBe(true);
    expect(
      /fighting (?:set|game)/i.test(
        `${QUESTS_BY_ID["challenge-first-try-counts"].title} ${QUESTS_BY_ID["challenge-first-try-counts"].objective}`,
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
      /former friends-only game/i.test(
        QUESTS_BY_ID["connect-lift-the-lowest"].objective,
      ),
    ).toBe(true);
    expect(
      /old group game.*public matchmaking/i.test(
        QUESTS_BY_ID["connect-follow-their-lead"].objective,
      ),
    ).toBe(true);
  });
});
