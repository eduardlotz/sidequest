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

export type MoodArtStyle = CSSProperties & {
  "--mood-card-bg": string;
  "--mood-card-border": string;
  "--mood-card-copy": string;
  "--mood-card-muted": string;
  "--mood-art-1": string;
  "--mood-art-2": string;
  "--mood-art-3": string;
  "--mood-art-4": string;
};

export const QUEST_ACCENT_BY_MOOD: Record<MoodId, QuestAccent> = {
  relax: { color: "#65D6B4", rgb: "101 214 180" },
  explore: { color: "#F7B955", rgb: "247 185 85" },
  progress: { color: "#55A9FF", rgb: "85 169 255" },
  create: { color: "#FF7AD9", rgb: "255 122 217" },
  challenge: { color: "#FF626B", rgb: "255 98 107" },
  connect: { color: "#C8F04A", rgb: "200 240 74" },
  nostalgic: { color: "#C88BFF", rgb: "200 139 255" },
  overwhelmed: { color: "#FF9F6E", rgb: "255 159 110" },
  restless: { color: "#FFCF4A", rgb: "255 207 74" },
  focused: { color: "#6E8BFF", rgb: "110 139 255" },
  curious: { color: "#4FE0C1", rgb: "79 224 193" },
  "low-energy": { color: "#9BA7C9", rgb: "155 167 201" },
};

const MOOD_ART_BY_MOOD: Record<
  MoodId,
  readonly [string, string, string, string]
> = {
  relax: ["#15271f", "#315545", "#6f9f85", "#cce7d5"],
  explore: ["#291f0e", "#62491c", "#ad7d31", "#f0cb72"],
  progress: ["#101d2b", "#294f72", "#6094bd", "#c8e0f3"],
  create: ["#2c1527", "#71385f", "#bd729f", "#f3c5e3"],
  challenge: ["#2b1317", "#73303a", "#bd6873", "#f2c2c7"],
  connect: ["#1d260f", "#4d6526", "#91ad55", "#dae9ae"],
  nostalgic: ["#21152d", "#573b70", "#9472ad", "#dcc8e9"],
  overwhelmed: ["#2d1b12", "#74452d", "#bc7b55", "#f0cbb4"],
  restless: ["#2b230f", "#6d5927", "#b69b55", "#eee0ae"],
  focused: ["#161a2e", "#384a78", "#748dbd", "#cbd6ef"],
  curious: ["#102724", "#28645b", "#63a89b", "#c2e9e1"],
  "low-energy": ["#191c28", "#3d455f", "#7e88a7", "#d0d5e4"],
};

export function getMoodArtStyle(moodId: MoodId): MoodArtStyle {
  const [shade1, shade2, shade3, shade4] = MOOD_ART_BY_MOOD[moodId];
  return {
    "--mood-card-bg": shade1,
    "--mood-card-border": shade3,
    "--mood-card-copy": shade4,
    "--mood-card-muted": shade3,
    "--mood-art-1": shade1,
    "--mood-art-2": shade2,
    "--mood-art-3": shade3,
    "--mood-art-4": shade4,
  };
}

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
