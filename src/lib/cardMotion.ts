import { arc } from "motion/react";

export const CARD_LAYOUT_TRANSITION = {
  type: "spring" as const,
  stiffness: 54,
  damping: 11,
  mass: 1.26,
  restDelta: 0.001,
  restSpeed: 0.001,
  path: arc({
    strength: 0.32,
    peak: 0.52,
    direction: "cw",
  }),
};

export function moodCardLayoutId(
  sessionId: number | string,
  moodId: string,
) {
  return `mood-card-${sessionId}-${moodId}`;
}

export function moodOfferSlotLayoutId(
  sessionId: number | string,
  slotIndex: number,
) {
  return `mood-offer-slot-${sessionId}-${slotIndex}`;
}
