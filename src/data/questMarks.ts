import type { AvatarTheme } from "../domain/quest/model";

const GENERIC_MARK = "sidequest-mark.svg";
const TEST_MARKS = {
  wizard: "quest-marks/wizard.svg",
  partyHat: "quest-marks/party-hat.svg",
  baseballCap: "quest-marks/baseball-cap.svg",
  cowboyHat: "quest-marks/cowboy-hat.svg",
} as const;

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
