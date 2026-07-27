import type { AvatarTheme } from "../stores/useQuestStore";
import type { QuestGenre } from "./questTaxonomy";

const GENERIC_MARK = "sidequest-mark.svg";
const TEST_MARKS = {
  wizard: "quest-marks/wizard.svg",
  partyHat: "quest-marks/party-hat.svg",
  baseballCap: "quest-marks/baseball-cap.svg",
  cowboyHat: "quest-marks/cowboy-hat.svg",
} as const;

export const QUEST_MARK_BY_GENRE: Record<QuestGenre, string> = {
  rpg: TEST_MARKS.wizard,
  roguelike: TEST_MARKS.wizard,
  shooter: TEST_MARKS.cowboyHat,
  sports: TEST_MARKS.baseballCap,
  survival: TEST_MARKS.cowboyHat,
  building: TEST_MARKS.partyHat,
  simulation: TEST_MARKS.baseballCap,
  action: TEST_MARKS.cowboyHat,
  platformer: TEST_MARKS.partyHat,
  puzzle: TEST_MARKS.wizard,
};

export const AVATAR_MARK_BY_THEME: Record<AvatarTheme, string> = {
  default: GENERIC_MARK,
  wizard: TEST_MARKS.wizard,
  "party-hat": TEST_MARKS.partyHat,
  cook: GENERIC_MARK,
  "baseball-cap": TEST_MARKS.baseballCap,
  plumbob: GENERIC_MARK,
  tuxedo: GENERIC_MARK,
  "graduation-hat": GENERIC_MARK,
  crown: GENERIC_MARK,
  "pirate-hat": GENERIC_MARK,
  "cowboy-hat": TEST_MARKS.cowboyHat,
};

export function markAssetUrl(asset: string) {
  return `${import.meta.env.BASE_URL}${asset}`;
}
