export const SELECTION_HANDOFF_EASE = [0.22, 0.8, 0.24, 1] as const;

export const NAV_ENTRY_SPRING = {
  type: "spring",
  stiffness: 280,
  damping: 24,
  mass: 0.75,
} as const;

export const CARD_FLIP_EASE = [0.55, 0.06, 0.15, 0.86] as const;
