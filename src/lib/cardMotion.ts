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

export type CardFlipDirection = -1 | 1;

export type CardFlipPose = {
  rotateX: number;
  rotateY: number;
  scale: number;
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
