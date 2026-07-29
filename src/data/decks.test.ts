import { describe, expect, test } from "bun:test";
import {
  MODIFIERS,
  MOODS,
  OBJECTIVES,
  modifierFitsObjective,
  objectivesForMood,
  type QuestTag,
} from "./decks";

describe("v3 quest decks", () => {
  test("ships the pilot catalog sizes", () => {
    expect(MOODS).toHaveLength(8);
    expect(OBJECTIVES).toHaveLength(30);
    expect(MODIFIERS).toHaveLength(10);
  });

  test("uses unique stable IDs", () => {
    for (const items of [MOODS, OBJECTIVES, MODIFIERS]) {
      const ids = items.map((item) => item.id);
      expect(new Set(ids).size).toBe(ids.length);
      for (const id of ids) {
        expect(/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id)).toBe(true);
      }
    }
  });

  test("keeps every objective within the 20 to 60 minute target", () => {
    for (const objective of OBJECTIVES) {
      expect(objective.sessionMinutes[0] >= 20).toBe(true);
      expect(objective.sessionMinutes[1] <= 60).toBe(true);
      expect(
        objective.sessionMinutes[0] <= objective.sessionMinutes[1],
      ).toBe(true);
    }
  });

  test("gives every mood a useful objective loop", () => {
    for (const mood of MOODS) {
      expect(objectivesForMood(mood.id, true).length >= 6).toBe(true);
      expect(objectivesForMood(mood.id, false).every(
        (objective) => !objective.requiresOnline,
      )).toBe(true);
    }
  });

  test("only offers modifiers that fit the objective tags", () => {
    const combatObjective = OBJECTIVES.find((objective) =>
      (objective.tags as readonly QuestTag[]).includes("combat"),
    );
    expect(Boolean(combatObjective)).toBe(true);
    expect(
      modifierFitsObjective("pacifist", combatObjective!.id),
    ).toBe(false);

    const explorationObjective = OBJECTIVES.find((objective) =>
      (objective.tags as readonly QuestTag[]).includes("exploration"),
    );
    expect(Boolean(explorationObjective)).toBe(true);
    expect(
      modifierFitsObjective("explorer", explorationObjective!.id),
    ).toBe(true);
  });
});
