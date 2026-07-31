import type { CSSProperties } from "react";
import type { MoodId } from "./moods";

type QuestAccent = {
  color: string;
  rgb: `${number} ${number} ${number}`;
};

export type QuestAccentStyle = CSSProperties & {
  "--accent": string;
  "--accent-rgb": string;
};

export const QUEST_ACCENT_BY_MOOD: Record<MoodId, QuestAccent> = {
  relax: { color: "#65D6B4", rgb: "101 214 180" },
  explore: { color: "#F7B955", rgb: "247 185 85" },
  progress: { color: "#55A9FF", rgb: "85 169 255" },
  create: { color: "#FF7AD9", rgb: "255 122 217" },
  challenge: { color: "#FF626B", rgb: "255 98 107" },
  connect: { color: "#C8F04A", rgb: "200 240 74" },
};

export function getMoodAccentStyle(moodId: MoodId): QuestAccentStyle {
  const accent = QUEST_ACCENT_BY_MOOD[moodId];
  return {
    "--accent": accent.color,
    "--accent-rgb": accent.rgb,
  };
}

const QUEST_CARD_ACCENTS = [
  { color: "#31FF6C", rgb: "49 255 108" },
  { color: "#FF626B", rgb: "255 98 107" },
  { color: "#55A9FF", rgb: "85 169 255" },
  { color: "#F7B955", rgb: "247 185 85" },
  { color: "#A78BFA", rgb: "167 139 250" },
  { color: "#FF7AD9", rgb: "255 122 217" },
  { color: "#43D7D1", rgb: "67 215 209" },
  { color: "#C8F04A", rgb: "200 240 74" },
] as const satisfies readonly QuestAccent[];

export function getQuestCardAccentStyle(
  questId: string,
  moodId: MoodId,
): QuestAccentStyle {
  let hash = 2166136261;
  for (const character of questId) {
    hash ^= character.charCodeAt(0);
    hash = Math.imul(hash, 16777619);
  }
  const moodAccent = QUEST_ACCENT_BY_MOOD[moodId];
  const accent =
    QUEST_CARD_ACCENTS[Math.abs(hash) % QUEST_CARD_ACCENTS.length] ??
    moodAccent;
  return {
    "--accent": accent.color,
    "--accent-rgb": accent.rgb,
  };
}
