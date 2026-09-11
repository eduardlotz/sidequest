import type { MoodId } from "./questTypes";

export const GAME_CAPABILITY_IDS = [
  "open-world",
  "missions-or-levels",
  "rounds-or-matches",
  "combat-loadouts",
  "combat-spells",
  "space-exploration",
  "swimming",
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
  "trading",
  "hunting",
  "animal-companions",
  "skate-tricks",
  "sports-goals",
  "extraction-runs"
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
