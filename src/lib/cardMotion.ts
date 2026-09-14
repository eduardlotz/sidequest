import { arc } from "motion/react";
import { SELECTION_HANDOFF_EASE } from "../shared/motion/transitions";

const CARD_ARC_STRENGTH = 0.32;
const CARD_ARC_PEAK = 0.52;

export const CARD_LAYOUT_TRANSITION = {
  type: "spring" as const,
  stiffness: 54,
  damping: 11,
  mass: 1.26,
  restDelta: 0.001,
  restSpeed: 0.001,
  path: arc({
    strength: CARD_ARC_STRENGTH,
    peak: CARD_ARC_PEAK,
    direction: "cw",
  }),
};

// A timed spring keeps the return responsive when its visible motion ends.
export const CARD_RETURN_TRANSITION = {
  type: "spring" as const,
  duration: 1,
  bounce: 0.12,
};

export const CARD_RETURN_LAYOUT_TRANSITION = {
  ...CARD_RETURN_TRANSITION,
  path: arc({
    strength: CARD_ARC_STRENGTH,
    peak: 1 - CARD_ARC_PEAK,
    direction: "ccw",
  }),
};

export const CARD_DISPLAY_TRANSITION = {
  scale: { duration: 0.62, ease: SELECTION_HANDOFF_EASE },
  rotate: { type: "spring" as const, stiffness: 220, damping: 23, mass: 0.96 },
};

export type CardFlipDirection = -1 | 1;

export type CardFlipPose = {
  rotateX: number;
  rotateY: number;
  scale: number;
};

export type CardSurfacePose = CardFlipPose & { y: number };

export type CardReturnPose = {
  scale: number;
  rotate: number;
  surface: CardSurfacePose;
};

export function createCardFlip(
  direction: CardFlipDirection,
  start: CardFlipPose,
) {
  // Keep one continuous turn, including when completion interrupts a click flip.
  const turns =
    direction > 0
      ? Math.max(1, Math.floor(start.rotateY / 360) + 1)
      : Math.min(-1, Math.ceil(start.rotateY / 360) - 1);
  const endRotation = turns * 360;
  const rotationDistance = endRotation - start.rotateY;

  return (progress: number): CardFlipPose => {
    const amount = Math.min(1, Math.max(0, progress));
    const settle = amount * amount * (3 - 2 * amount);

    return {
      rotateX: start.rotateX * (1 - settle),
      rotateY: start.rotateY + rotationDistance * amount,
      scale: start.scale + (1 - start.scale) * settle,
    };
  };
}

export function moodCardLayoutId(
  sessionId: number | string,
  moodId: string,
) {
  return `mood-card-${sessionId}-${moodId}`;
}
