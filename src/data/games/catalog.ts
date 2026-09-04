import type { CuratedGameDefinition } from "../gameTypes";

export const CURATED_GAMES: readonly CuratedGameDefinition[] = [
  {
    id: "crimson-desert",
    name: "Crimson Desert",
    artwork: "games/crimson-desert.jpg",
    compatibleQuestIds: [
      "a-little-walk",
      "going-fishing",
      "first-recipe",
      "beyond-the-map",
      "follow-the-lore",
      "next-checkpoint",
      "upgrade-time",
      "boss-practice",
      "no-healing",
      "starter-gear",
      "one-tracked-quest",
      "twenty-enemies",
      "main-mission",
    ],
    exclusiveQuestIds: [
      "crimson-desert-pywel-detour",
      "crimson-desert-three-ways-to-fight",
    ],
  },
  {
    id: "battlefield",
    name: "Battlefield",
    artwork: "games/battlefield.jpg",
    compatibleQuestIds: [
      "starter-gear",
      "co-op-check-in",
      "help-a-stranger",
      "support-round",
      "old-rival",
      "default-round",
      "twenty-enemies",
    ],
    exclusiveQuestIds: [
      "battlefield-conquest-duty",
      "battlefield-class-duty",
    ],
  },
  {
    id: "rocket-league",
    name: "Rocket League",
    artwork: "games/rocket-league.jpg",
    compatibleQuestIds: [
      "three-wins",
      "co-op-check-in",
      "old-rival",
      "quick-matches",
      "default-round",
      "score-block",
      "replay-review",
      "signature-vehicle",
    ],
    exclusiveQuestIds: [
      "rocket-league-small-pads-only",
      "rocket-league-fresh-preset",
    ],
  },
];
