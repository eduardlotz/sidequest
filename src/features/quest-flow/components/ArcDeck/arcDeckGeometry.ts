export type ArcCardShape = "landscape" | "portrait";

// Spacing affects both the rendered arc and pointer/wheel travel per card.
export const ARC_GEOMETRY = {
  landscape: {
    compact: { radiusX: 650, radiusY: 1000, angle: 26, cardGap: 330 },
    paired: { radiusX: 1050, radiusY: 1000, angle: 28, cardGap: 520 },
    wide: { radiusX: 1050, radiusY: 1000, angle: 28, cardGap: 520 },
  },
  portrait: {
    compact: { radiusX: 880, radiusY: 1000, angle: 20, cardGap: 300 },
    paired: { radiusX: 1023.3, radiusY: 1000, angle: 20, cardGap: 350 },
    wide: { radiusX: 994, radiusY: 1000, angle: 20, cardGap: 340 },
  },
} as const;
