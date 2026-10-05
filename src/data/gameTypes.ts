import type { MoodId } from "./questTypes";

export const GAME_CAPABILITY_IDS = [
  "open-world",
  "missions-or-levels",
  "rounds-or-matches",
  "whole-matches",
  "combat-loadouts",
  "weapon-pickups",
  "equipment-upgrades",
  "bot-modes",
  "replayable-tutorials",
  "combat-spells",
  "space-exploration",
  "free-space-flight",
  "dynamic-weather",
  "swimming",
  "diving",
  "moving-patrols",
  "stealth-takedowns",
  "theft-or-loot",
  "placeable-gadgets",
  "replayable-encounters",
  "decoration",
  "level-editors",
  "inventory-storage",
  "material-gathering",
  "practice-ranges",
  "boss-fights",
  "stealth",
  "puzzles",
  "building",
  "crafting",
  "fishing",
  "cooking",
  "grow-crops",
  "animal-care",
  "free-driving",
  "racing",
  "advanced-traversal",
  "customization",
  "photo-mode",
  "online-teamplay",
  "local-multiplayer",
  "collectibles",
  "choices-or-lore",
  "optional-dialogue",
  "readable-journal",
  "trading",
  "hunting",
  "animal-companions",
  "skate-tricks",
  "sports-goals",
  "extraction-runs",
  "platforming",
  "character-abilities",
  "tactical-gadgets",
  "scouting-tools",
  "remote-scouting",
  "lanes-and-towers",
  "time-trials",
  "rhythm-play",
  "card-decks",
  "card-mulligan",
  "unit-command",
  "automation",
] as const;

export type GameCapabilityId = (typeof GAME_CAPABILITY_IDS)[number];

export const GAME_ICON_IDS = [
  "sports",
  "cozy",
  "survival",
  "boss",
  "cards",
  "racing",
  "platformer",
  "action",
  "arcade",
  "building",
  "radiation",
  "space",
  "fighting",
  "shooter",
  "strategy",
  "adventure",
  "exploration",
  "puzzle",
  "rhythm",
  "rpg",
  "zombie",
  "horror",
  "ghost",
  "vampire",
  "slasher-mask",
  "haunted-house",
  "castle",
  "stealth",
  "multiplayer",
  "simulation",
  "equipment",
  "crafting",
  "fishing",
  "cooking",
  "farming",
  "customization",
  "photography",
  "local-co-op",
  "collectibles",
  "lore",
  "robot",
  "dragon",
  "magic-wand",
  "mountain",
  "anchor",
  "paw",
] as const;

export type GameIconId = (typeof GAME_ICON_IDS)[number];
export const EXTRA_GAME_COLOR_IDS = ["violet", "teal", "rose", "orange"] as const;
export type GameColorId = MoodId | (typeof EXTRA_GAME_COLOR_IDS)[number];
export type GameSource = "curated" | "custom";

export type GameReference = {
  installmentId?: string;
  installmentIds?: readonly string[];
  id: string;
  name: string;
  source: GameSource;
  iconId?: GameIconId;
  colorId?: GameColorId;
};

export type CuratedGameDefinition = {
  id: string;
  name: string;
  artwork?: string;
  iconId?: GameIconId;
  colorId?: GameColorId;
  isSeries?: boolean;
  installments: readonly { id: string; name: string }[];
  compatibleQuestIds: readonly string[];
  exclusiveQuestIds: readonly string[];
};
