import type { GameCapabilityId } from "./gameTypes";

// Suggestions describe common systems, never automatically selected activities.
export const GAME_GENRES = {
  adventure: { title: { en: "Adventure", de: "Abenteuer" }, activities: ["open-world", "missions-or-levels", "advanced-traversal", "choices-or-lore", "collectibles"] },
  platformer: { title: { en: "Platformer", de: "Plattformer" }, activities: ["platforming", "missions-or-levels", "collectibles", "boss-fights", "time-trials"] },
  shooter: { title: { en: "Shooter", de: "Shooter" }, activities: ["combat-loadouts", "whole-matches", "rounds-or-matches", "online-teamplay", "character-abilities", "tactical-gadgets", "scouting-tools"] },
  moba: { title: { en: "MOBA", de: "MOBA" }, activities: ["whole-matches", "online-teamplay", "character-abilities", "lanes-and-towers", "scouting-tools"] },
  rpg: { title: { en: "RPG", de: "Rollenspiel" }, activities: ["missions-or-levels", "choices-or-lore", "combat-loadouts", "combat-spells", "crafting", "trading"] },
  roguelike: { title: { en: "Roguelike", de: "Roguelike" }, activities: ["missions-or-levels", "combat-loadouts", "boss-fights", "character-abilities", "card-decks"] },
  strategy: { title: { en: "Strategy", de: "Strategie" }, activities: ["unit-command", "missions-or-levels", "rounds-or-matches", "building", "card-decks"] },
  simulation: { title: { en: "Simulation", de: "Simulation" }, activities: ["building", "grow-crops", "animal-care", "trading", "automation"] },
  puzzle: { title: { en: "Puzzle", de: "Rätsel" }, activities: ["puzzles", "missions-or-levels"] },
  racing: { title: { en: "Racing", de: "Rennspiel" }, activities: ["racing", "free-driving", "time-trials", "customization"] },
  sports: { title: { en: "Sports", de: "Sport" }, activities: ["sports-goals", "skate-tricks", "rounds-or-matches", "whole-matches", "online-teamplay", "local-multiplayer"] },
  rhythm: { title: { en: "Rhythm", de: "Rhythmus" }, activities: ["rhythm-play", "rounds-or-matches"] },
  survival: { title: { en: "Survival", de: "Survival" }, activities: ["open-world", "crafting", "building", "cooking", "hunting", "extraction-runs"] },
  sandbox: { title: { en: "Sandbox", de: "Sandbox" }, activities: ["open-world", "building", "crafting", "customization", "automation"] },
  narrative: { title: { en: "Narrative", de: "Storyspiel" }, activities: ["choices-or-lore", "missions-or-levels", "puzzles"] },
  fighting: { title: { en: "Fighting", de: "Kampfspiel" }, activities: ["rounds-or-matches", "character-abilities", "local-multiplayer"] },
  stealth: { title: { en: "Stealth", de: "Schleichspiel" }, activities: ["stealth", "missions-or-levels", "tactical-gadgets", "scouting-tools"] },
  cozy: { title: { en: "Cozy", de: "Cozy" }, activities: ["open-world", "fishing", "cooking", "grow-crops", "animal-care", "choices-or-lore"] },
} as const satisfies Record<string, {
  title: Record<"en" | "de", string>;
  activities: readonly GameCapabilityId[];
}>;

export type GameGenreId = keyof typeof GAME_GENRES;
export const GAME_GENRE_IDS = Object.keys(GAME_GENRES) as GameGenreId[];

export function isGameGenreId(value: string): value is GameGenreId {
  return Object.hasOwn(GAME_GENRES, value);
}

export function suggestedGameCapabilities(genres: readonly GameGenreId[]) {
  return new Set<GameCapabilityId>(genres.flatMap((id) => [...GAME_GENRES[id].activities]));
}
