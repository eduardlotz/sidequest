import type { MoodId } from "./questTypes";

// Type describes the session; mood describes how that session should feel.
export const QUEST_TYPES = {
  inspiration: {
    title: { en: "Inspiration", de: "Inspiration" },
    moods: ["low-energy", "relax", "explore", "progress", "challenge", "restless", "connect", "focused", "nostalgic", "create", "overwhelmed", "curious"],
  },
  objective: {
    title: { en: "Objective", de: "Aufgabe" },
    moods: ["low-energy", "relax", "explore", "progress", "restless", "connect", "focused", "nostalgic", "overwhelmed", "curious"],
  },
  experiment: {
    title: { en: "Experiment", de: "Experiment" },
    moods: ["explore", "curious", "focused", "create"],
  },
  creation: {
    title: { en: "Creation", de: "Gestaltung" },
    moods: ["create", "relax", "focused", "progress"],
  },
  challenge: {
    title: { en: "Challenge", de: "Herausforderung" },
    moods: ["challenge", "focused", "restless"],
  },
} as const satisfies Record<string, { title: Record<"en" | "de", string>; moods: readonly MoodId[] }>;

export type QuestTypeId = keyof typeof QUEST_TYPES;

export function isQuestTypeAllowed(type: QuestTypeId, moodId: MoodId) {
  return (QUEST_TYPES[type].moods as readonly MoodId[]).includes(moodId);
}

// Authored scan labels, independent of eligibility. A label never enables a quest.
export const QUEST_TAGS = {
  abilities: { en: "Abilities", de: "Fähigkeiten" },
  gadgets: { en: "Gadgets", de: "Gadgets" },
  scouting: { en: "Scouting", de: "Aufklärung" },
  lanes: { en: "Lanes", de: "Lanes" },
  "full-match": { en: "Full match", de: "Ganzes Match" },
  "time-trial": { en: "Time trial", de: "Zeitrennen" },
  cards: { en: "Cards", de: "Karten" },
  units: { en: "Units", de: "Einheiten" },
  "free-roam": { en: "Free roam", de: "Freies Erkunden" },
  "on-foot": { en: "On foot", de: "Zu Fuß" },
  "no-fast-travel": { en: "No fast travel", de: "Keine Schnellreise" },
  "no-timer": { en: "No time limit", de: "Ohne Zeitlimit" },
  fishing: { en: "Fishing", de: "Angeln" },
  cooking: { en: "Cooking", de: "Kochen" },
  farming: { en: "Farming", de: "Feldarbeit" },
  animals: { en: "Animal care", de: "Tierpflege" },
  crafting: { en: "Crafting", de: "Herstellen" },
  building: { en: "Building", de: "Bauen" },
  decorating: { en: "Decorating", de: "Einrichten" },
  photography: { en: "Photo mode", de: "Fotomodus" },
  outfit: { en: "Outfit", de: "Outfit" },
  trading: { en: "Trading", de: "Handeln" },
  hunting: { en: "Hunting", de: "Jagd" },
  stealth: { en: "Stealth", de: "Schleichen" },
  "no-detection": { en: "Stay unseen", de: "Unentdeckt" },
  "no-kills": { en: "No kills", de: "Ohne Töten" },
  "one-weapon": { en: "One weapon", de: "Eine Waffe" },
  "no-healing": { en: "No healing items", de: "Keine Heilitems" },
  spells: { en: "Spells", de: "Zauber" },
  loadout: { en: "Loadout", de: "Ausrüstung" },
  boss: { en: "Boss fight", de: "Bosskampf" },
  parry: { en: "Parrying", de: "Parieren" },
  "three-attempts": { en: "Up to 3 attempts", de: "Bis zu 3 Versuche" },
  "one-round": { en: "One round", de: "Eine Runde" },
  "one-life": { en: "One life", de: "Ein Leben" },
  "no-hints": { en: "No hints", de: "Ohne Hinweise" },
  puzzles: { en: "Puzzles", de: "Rätsel" },
  driving: { en: "Driving", de: "Fahren" },
  racing: { en: "Racing", de: "Rennen" },
  traversal: { en: "Movement", de: "Fortbewegung" },
  skating: { en: "Skate tricks", de: "Skate-Tricks" },
  rhythm: { en: "Rhythm", de: "Rhythmus" },
  "co-op": { en: "Co-op", de: "Koop" },
  "local-play": { en: "Local play", de: "Zusammen vor Ort" },
  support: { en: "Team support", de: "Team unterstützen" },
  "vs-bots": { en: "Against bots", de: "Gegen Bots" },
  extraction: { en: "Extraction", de: "Extraktion" },
  exploration: { en: "New places", de: "Neue Orte" },
  space: { en: "Space travel", de: "Raumfahrt" },
  diving: { en: "Diving", de: "Tauchen" },
  collectibles: { en: "Collectibles", de: "Sammelobjekte" },
  story: { en: "Story", de: "Geschichte" },
  dialogue: { en: "Dialogue", de: "Dialoge" },
  replay: { en: "Replay", de: "Erneut spielen" },
  "current-save": { en: "Continue save", de: "Spielstand fortsetzen" },
  "first-play": { en: "First play", de: "Zum ersten Mal" },
  "new-approach": { en: "New approach", de: "Anders spielen" },
  automation: { en: "Automation", de: "Automatisierung" },
  "level-editor": { en: "Level editor", de: "Leveleditor" },
  "two-colors": { en: "Two colors", de: "Zwei Farben" },
} as const;

export type QuestTagId = keyof typeof QUEST_TAGS;
