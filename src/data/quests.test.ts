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
    expect(
      new Set(QUESTS.map((quest) => `${quest.title}\n${quest.objective}`)).size,
    ).toBe(QUESTS.length);

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
      expect(wordCount(quest.title) >= 4).toBe(true);
      expect(wordCount(quest.title) <= 11).toBe(true);
      expect(/[.!?]/.test(quest.title)).toBe(false);
      expect(wordCount(quest.objective) >= 15).toBe(true);
      expect(wordCount(quest.objective) <= 40).toBe(true);
      expect(wordCount(quest.completion) <= 40).toBe(true);
      expect(quest.completion).toBe(quest.objective);
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
      expect([1, 2, 5, 10]).toContain(quest.minimumDurationMinutes);
      expect(quest.suggestedDurationMinutes >= 5).toBe(true);
      expect(quest.suggestedDurationMinutes <= 30).toBe(true);
      expect(quest.suggestedDurationMinutes % 5).toBe(0);
      expect(
        quest.suggestedDurationMinutes >= quest.minimumDurationMinutes,
      ).toBe(true);
      expect(quest.rewardPoints >= 100).toBe(true);
      expect(quest.rewardPoints <= 250).toBe(true);
      expect(QUESTS_BY_ID[quest.id].id).toBe(quest.id);
    }
  });

  test("keeps most quest minimums tiny and reserves longer gates for substantial play", () => {
    const averageDuration =
      QUESTS.reduce(
        (total, quest) => total + quest.minimumDurationMinutes,
        0,
      ) / QUESTS.length;
    expect(averageDuration < 4).toBe(true);
    expect(
      QUESTS.filter((quest) => quest.minimumDurationMinutes <= 2).length >=
        QUESTS.length * 0.7,
    ).toBe(true);
    expect(
      QUESTS.filter((quest) => quest.minimumDurationMinutes === 10).length <
        QUESTS.length * 0.15,
    ).toBe(true);

    expect(
      QUESTS.some((quest) => quest.suggestedDurationMinutes === 5),
    ).toBe(true);
    expect(
      QUESTS.some((quest) => quest.suggestedDurationMinutes === 30),
    ).toBe(true);
  });

  test("separates the points minimum from a genre-aware session suggestion", () => {
    expect(QUESTS_BY_ID["challenge-one-step-harder"]).toMatchObject({
      minimumDurationMinutes: 5,
      suggestedDurationMinutes: 15,
    });
    expect(QUESTS_BY_ID["challenge-pressure-proof"]).toMatchObject({
      minimumDurationMinutes: 10,
      suggestedDurationMinutes: 30,
    });

    for (const quest of QUESTS) {
      expect(
        /\b\d+\s+(?:active\s+)?minutes?\b/i.test(
          `${quest.title} ${quest.objective} ${quest.completion}`,
        ),
      ).toBe(false);
    }
  });

  test("keeps the current title and objective fields readable", () => {
    for (const quest of QUESTS) {
      const objectiveSentenceMarks = (quest.objective.match(/[.!?]/g) ?? [])
        .length;
      expect(objectiveSentenceMarks >= 1).toBe(true);
      expect(objectiveSentenceMarks <= 3).toBe(true);
      expect(/[.!?]$/.test(quest.objective)).toBe(true);
      expect(/[.!?]/.test(quest.title)).toBe(false);
      expect(
        /^(?:open|choose|pick|select|browse|look at|think of|find) (?:an? |the )?(?:owned |installed )?game\b/i.test(
          quest.title,
        ),
      ).toBe(false);
      expect(
        /\b(?:result screen|save immediately|clear stopping point|activity's ending|until it feels right)\b/i.test(
          quest.title,
        ),
      ).toBe(false);
      expect(
        /\b(?:clear stopp?ing point|natural result|natural ending|activity's ending|reach that moment|decide whether|test the idea|return somewhere safe)\b/i.test(
          quest.objective,
        ),
      ).toBe(false);
    }
  });

  test("keeps optional tips distinct from the required objective", () => {
    const repeatedCoreByTip = {
      threeAttempts:
        /\bthree (?:attempts|tries|times|rounds|laps|runs|tracks|songs)\b/i,
      noRestart:
        /\b(?:without|do not|don't|no) (?:restarting|restart|reloading|reload)|play each attempt through/i,
      oneTrack:
        /\b(?:only|exactly) (?:one|that) (?:goal|task|objective)|do nothing else|ignore everything/i,
      cleanExit:
        /\b(?:save and stop|stop at|without starting a second|do not start another|stop before restarting)\b/i,
      fixedKit:
        /\b(?:same|current|unchanged|without changing|change nothing) (?:character|vehicle|loadout|gear|setup|build|team|deck|kit)/i,
      oppositeInstinct: /\bopposite\b/i,
      noMap: /\b(?:without opening|put the map away|no) (?:the )?map\b/i,
      longWay: /\bwithout (?:using )?fast travel\b/i,
      oneMove: /\bthree (?:different )?(?:moves|times)|one (?:move|mechanic)\b/i,
      holdYourRole: /\b(?:support )?role\b/i,
      helpFirst: /\b(?:help|assist) .*first\b/i,
      leaveAGift: /\b(?:give|gift)\b/i,
    } as const;

    for (const quest of QUESTS) {
      for (const [tipId, repeatedCore] of Object.entries(repeatedCoreByTip)) {
        if (quest.tipIds.includes(tipId as (typeof quest.tipIds)[number])) {
          expect(repeatedCore.test(quest.objective)).toBe(false);
        }
      }
    }
  });

  test("keeps Relaxing card titles concise and puts the complete play direction in the objective", () => {
    for (const quest of QUESTS_BY_MOOD.relax) {
      expect(wordCount(quest.title) >= 4).toBe(true);
      expect(wordCount(quest.title) <= 11).toBe(true);
      expect(/[.!?]/.test(quest.title)).toBe(false);

      expect(wordCount(quest.objective) >= 15).toBe(true);
      expect(wordCount(quest.objective) <= 40).toBe(true);
      expect(/[.!?]$/.test(quest.objective)).toBe(true);
      expect(quest.completion).toBe(quest.objective);

      expect(quest.tips).toHaveLength(2);
      expect(new Set(quest.tipIds).size).toBe(2);
      expect(
        quest.tips.every(
          (tip) =>
            wordCount(tip.title) <= 5 && wordCount(tip.description) <= 15,
        ),
      ).toBe(true);
    }

    expect(QUESTS_BY_ID["relax-turn-by-turn"].tipIds).not.toContain(
      "firstInstinct",
    );
    expect(QUESTS_BY_ID["relax-one-puzzle"].tipIds).not.toContain(
      "noRestart",
    );
    expect(QUESTS_BY_ID["relax-gentle-platformer"].tipIds).not.toContain(
      "measuredPace",
    );
  });

  test("keeps fixed tips compatible with the core quest", () => {
    const setupChangingLanguage =
      /\b(customize|customization|new build|themed deck|change (?:the )?(?:camera|controls|setup)|restore (?:your )?(?:settings|setup)|character backstory|neglected character)\b/i;

    for (const quest of QUESTS) {
      const coreCopy = `${quest.name} ${quest.title} ${quest.objective} ${quest.completion}`;
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
          /\b(co-op|multiplayer|player|team|shared|stranger|companion|resident|support|character|company)\b/i.test(
            coreCopy,
          ),
        ).toBe(true);
      }
    }
  });

  test("covers the concrete game-choice triggers from the product brief", () => {
    const questCopy = (id: string) => {
      const quest = QUESTS_BY_ID[id];
      return `${quest.title} ${quest.objective}`;
    };

    expect(
      /childhood|growing up/i.test(questCopy("relax-soft-landing")),
    ).toBe(true);
    expect(
      /library|installed/i.test(questCopy("explore-wrong-turn")),
    ).toBe(true);
    expect(
      /game you bought but never started/i.test(
        questCopy("progress-break-the-blocker"),
      ),
    ).toBe(true);
    expect(QUESTS_BY_ID["progress-clean-finish"]).toMatchObject({
      minimumDurationMinutes: 10,
      suggestedDurationMinutes: 30,
      rewardPoints: 250,
    });
    expect(
      /solo shooter.*unlock/i.test(questCopy("progress-three-step-plan")),
    ).toBe(true);
    expect(
      /fighting (?:set|game)/i.test(questCopy("challenge-first-try-counts")),
    ).toBe(true);
    expect(
      /competitive shooter/i.test(questCopy("challenge-one-step-harder")),
    ).toBe(true);
    expect(
      /racing game/i.test(questCopy("challenge-beat-your-ghost")),
    ).toBe(true);
    expect(
      /game your old group once played together/i.test(
        questCopy("connect-lift-the-lowest"),
      ),
    ).toBe(true);
    expect(
      /old group game.*public matchmaking/i.test(
        questCopy("connect-follow-their-lead"),
      ),
    ).toBe(true);
  });
});
