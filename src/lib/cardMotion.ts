import { arc } from "motion/react";

export const CARD_LAYOUT_TRANSITION = {
  type: "spring" as const,
  stiffness: 88,
  damping: 16,
  mass: 1.08,
  path: arc({
    strength: 0.2,
    peak: 0.52,
    direction: "cw",
  }),
};
