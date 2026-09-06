import type { MoodId } from "./questTypes";

export const GAME_CAPABILITY_IDS = [
  "open-world",
  "missions-or-levels",
  "rounds-or-matches",
  "combat",
  "boss-fights",
  "stealth",
  "equipment-loadouts",
  "puzzles",
  "building",
  "crafting",
  "fishing",
  "cooking",
  "farming-or-care",
  "driving-or-racing",
  "advanced-traversal",
  "customization",
  "photo-mode",
  "online-teamplay",
  "local-multiplayer",
  "collectibles",
  "choices-or-lore",
] as const;

export type GameCapabilityId = (typeof GAME_CAPABILITY_IDS)[number];

export const GAME_ICON_IDS = [
  "action",
  "adventure",
  "arcade",
  "building",
  "cards",
  "cozy",
  "exploration",
  "fighting",
  "horror",
  "multiplayer",
  "platformer",
  "puzzle",
  "racing",
  "rhythm",
  "rpg",
  "shooter",
  "simulation",
  "sports",
  "strategy",
  "survival",
  "boss",
  "stealth",
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
] as const;

export type GameIconId = (typeof GAME_ICON_IDS)[number];
export type GameColorId = MoodId;
export type GameSource = "curated" | "custom";

export type GameReference = {
  id: string;
  name: string;
  source: GameSource;
  iconId?: GameIconId;
  colorId?: GameColorId;
};

export type CuratedGameDefinition = {
  id: string;
  name: string;
  artwork: string;
  isSeries?: boolean;
  installments: readonly { id: string; name: string }[];
  compatibleQuestIds: readonly string[];
  exclusiveQuestIds: readonly string[];
};
