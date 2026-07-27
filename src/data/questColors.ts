import type { CSSProperties } from "react";
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
