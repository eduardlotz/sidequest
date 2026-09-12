export const SELECTION_HANDOFF_EASE = [0.22, 0.8, 0.24, 1] as const;

export const NAV_ENTRY_SPRING = {
  type: "spring",
  stiffness: 280,
  damping: 24,
  mass: 0.75,
} as const;

export const LIBRARY_SELECTION_SPRING = {
  type: "spring",
  stiffness: 420,
  damping: 24,
  mass: 0.72,
} as const;

export const LIBRARY_LAYOUT_SPRING = {
  type: "spring",
  stiffness: 330,
  damping: 30,
  mass: 0.82,
} as const;

export const CARD_FLIP_EASE = [0.2, 0.62, 0.3, 1] as const;

export const CARD_CLICK_FLIP_EASE = [0.32, 0, 0.22, 1] as const;
