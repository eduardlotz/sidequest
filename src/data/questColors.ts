import type { CSSProperties } from "react";
import type { MoodId } from "./deckTypes";
import type { QuestGenre } from "./questTaxonomy";

type QuestAccent = {
  color: string;
  rgb: `${number} ${number} ${number}`;
};

export const QUEST_ACCENT_BY_GENRE: Record<QuestGenre, QuestAccent> = {
  rpg: { color: "#A78BFA", rgb: "167 139 250" },
  roguelike: { color: "#269E5F", rgb: "38 158 95" },
  shooter: { color: "#FF5C68", rgb: "255 92 104" },
  sports: { color: "#4EA8FF", rgb: "78 168 255" },
  survival: { color: "#FFB547", rgb: "255 181 71" },
  building: { color: "#FF8A4C", rgb: "255 138 76" },
  simulation: { color: "#43D7D1", rgb: "67 215 209" },
  action: { color: "#C8F04A", rgb: "200 240 74" },
  platformer: { color: "#FF7AD9", rgb: "255 122 217" },
  puzzle: { color: "#47E6A3", rgb: "71 230 163" },
};

export type QuestAccentStyle = CSSProperties & {
  "--accent": string;
  "--accent-rgb": string;
};

export function getQuestAccentStyle(genre: QuestGenre): QuestAccentStyle {
  const accent = QUEST_ACCENT_BY_GENRE[genre];

  return {
    "--accent": accent.color,
    "--accent-rgb": accent.rgb,
  };
}

export const QUEST_ACCENT_BY_MOOD: Record<MoodId, QuestAccent> = {
  relax: { color: "#65D6B4", rgb: "101 214 180" },
  adventure: { color: "#F7B955", rgb: "247 185 85" },
  challenge: { color: "#FF626B", rgb: "255 98 107" },
  story: { color: "#A78BFA", rgb: "167 139 250" },
  strategy: { color: "#55A9FF", rgb: "85 169 255" },
  creative: { color: "#FF7AD9", rgb: "255 122 217" },
  competitive: { color: "#C8F04A", rgb: "200 240 74" },
  chaos: { color: "#FF8A4C", rgb: "255 138 76" },
};

export function getMoodAccentStyle(moodId: MoodId): QuestAccentStyle {
  const accent = QUEST_ACCENT_BY_MOOD[moodId];
  return {
    "--accent": accent.color,
    "--accent-rgb": accent.rgb,
  };
}

const CARD_ACCENTS = [
  { color: "#31FF6C", rgb: "49 255 108" },
  { color: "#FF626B", rgb: "255 98 107" },
  { color: "#55A9FF", rgb: "85 169 255" },
  { color: "#F7B955", rgb: "247 185 85" },
  { color: "#A78BFA", rgb: "167 139 250" },
  { color: "#FF7AD9", rgb: "255 122 217" },
  { color: "#43D7D1", rgb: "67 215 209" },
  { color: "#C8F04A", rgb: "200 240 74" },
  { color: "#FF8A4C", rgb: "255 138 76" },
  { color: "#65D6B4", rgb: "101 214 180" },
] as const satisfies readonly QuestAccent[];

export function getCardAccentStyle(cardId: string): QuestAccentStyle {
  let hash = 2166136261;
  for (const character of cardId) {
    hash ^= character.charCodeAt(0);
    hash = Math.imul(hash, 16777619);
  }
  const accent = CARD_ACCENTS[Math.abs(hash) % CARD_ACCENTS.length];
  return {
    "--accent": accent.color,
    "--accent-rgb": accent.rgb,
  };
}
