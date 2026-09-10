export type MoodBoxOrigin = {
  centerX: number;
  centerY: number;
  width: number;
};

export type DeckRevealStage = "boxed" | "lifted" | "spread" | "ready";

export const BOX_LID_OPEN_SECONDS = 0.52;
export const BOX_CARDS_LIFT_MS = 280;
export const BOX_FADE_DELAY_SECONDS = 0.6;
export const BOX_DISMISS_SECONDS = 0.94;
export const BOX_CARDS_SPREAD_MS = 940;
export const BOX_REVEAL_COMPLETE_MS = 1_720;
export const NEW_CARDS_STAGGER_SECONDS = 0.055;
export const NEW_CARDS_OUT_SECONDS = 0.34;
export const NEW_CARDS_IN_SECONDS = 0.44;
export const NEW_CARDS_SHINE_SECONDS = 0.24;

export function newCardsTiming(count: number) {
  const stagger = Math.max(0, count - 1) * NEW_CARDS_STAGGER_SECONDS;
  const swap = Math.ceil((NEW_CARDS_OUT_SECONDS + stagger) * 1_000) + 40;
  return {
    swap,
    complete: swap + Math.ceil((stagger + NEW_CARDS_IN_SECONDS + NEW_CARDS_SHINE_SECONDS) * 1_000) + 40,
  };
}
