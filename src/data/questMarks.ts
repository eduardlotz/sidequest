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
  rpg: "quest-hats/rpg-hat.svg",
  roguelike: "quest-hats/rpg-hat.svg",
  shooter: "quest-hats/shooter-hat.svg",
  sports: "quest-hats/rpg-hat.svg",
  survival: "quest-hats/shooter-hat.svg",
  building: "quest-hats/building-hat.svg",
  simulation: "quest-hats/simulation-hat.svg",
  action: "quest-hats/adventure-hat.svg",
  platformer: "quest-hats/adventure-hat.svg",
  puzzle: "quest-hats/simulator-hat.svg",
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
