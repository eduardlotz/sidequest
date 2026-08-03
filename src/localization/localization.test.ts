import { describe, expect, test } from "bun:test";
import { MOODS } from "../data/moods";
import {
  QUESTS,
  QUEST_CORES,
  type QuestTranslation,
} from "../data/quests";
import { QUEST_TIPS } from "../data/quests/tips";
import { localizeMood, localizeQuest } from "./catalog";
import { normalizeLanguage } from "./i18n";
import { germanQuestTranslations } from "./questTranslations.de";
import {
  englishUi,
  germanMoods,
  germanTips,
  germanUi,
} from "./resources";

function flattenedKeys(value: object, prefix = ""): string[] {
  return Object.entries(value).flatMap(([key, child]) => {
    const path = prefix ? `${prefix}.${key}` : key;
    return typeof child === "string"
      ? [path]
      : flattenedKeys(child as object, path);
  });
}

describe("localization resources", () => {
  test("keeps locale-independent quest data separate from authored copy", () => {
    expect(QUEST_CORES).toHaveLength(QUESTS.length);
    for (const quest of QUEST_CORES) {
      expect(Object.keys(quest).sort()).toEqual(
        ["durationMinutes", "id", "moodId", "rewardPoints", "tipIds"].sort(),
      );
      expect(quest.tipIds).toHaveLength(2);
      expect("title" in quest).toBe(false);
      expect("objective" in quest).toBe(false);
      expect("completion" in quest).toBe(false);
    }
  });

  test("contains a complete German translation for every stable quest id", () => {
    const questIds = QUESTS.map((quest) => quest.id).sort();
    expect(Object.keys(germanQuestTranslations).sort()).toEqual(questIds);

    let changedFields = 0;
    for (const quest of QUESTS) {
      const translation = germanQuestTranslations[
        quest.id as keyof typeof germanQuestTranslations
      ] as QuestTranslation;
      for (const field of ["title", "objective", "completion"] as const) {
        expect(translation[field].trim().length > 0).toBe(true);
        expect(translation[field]).not.toContain("__SIDEQUEST_FIELD__");
        expect(
          /\b(?:Sie|Ihnen|Ihr|Ihre|Ihren|Ihrem|Ihrer|Ihres)\b/.test(
            translation[field],
          ),
        ).toBe(false);
        if (translation[field] !== quest[field]) changedFields += 1;
      }
    }
    expect(changedFields > 1_200).toBe(true);
  });

  test("keeps German mood, tip, and UI resources in exact parity", () => {
    expect(Object.keys(germanMoods).sort()).toEqual(
      MOODS.map((mood) => mood.id).sort(),
    );
    expect(Object.keys(germanTips).sort()).toEqual(
      Object.keys(QUEST_TIPS).sort(),
    );
    expect(flattenedKeys(germanUi).sort()).toEqual(
      flattenedKeys(englishUi).sort(),
    );
  });

  test("resolves the same quest and mood ids into either language", () => {
    const questId = "relax-soft-landing";
    const englishQuest = localizeQuest(questId, "en");
    const germanQuest = localizeQuest(questId, "de");
    const englishMood = localizeMood("relax", "en");
    const germanMood = localizeMood("relax", "de");

    expect(englishQuest).toMatchObject({
      id: questId,
      title: "Play a Childhood Favorite",
    });
    expect(germanQuest).toMatchObject({
      id: questId,
      title: "Spiele ein Lieblingsspiel deiner Kindheit",
    });
    expect(germanQuest?.rewardPoints).toBe(englishQuest?.rewardPoints);
    expect(germanQuest?.tips[0].title).not.toBe(englishQuest?.tips[0].title);
    expect(englishMood?.id).toBe(germanMood?.id);
    expect(englishMood?.title).toBe("Relax");
    expect(germanMood?.title).toBe("Entspannung");
  });

  test("normalizes supported language variants and defaults to English", () => {
    expect(normalizeLanguage("de-DE")).toBe("de");
    expect(normalizeLanguage("en-GB")).toBe("en");
    expect(normalizeLanguage("fr")).toBe("en");
    expect(normalizeLanguage(null)).toBe("en");
  });
});
