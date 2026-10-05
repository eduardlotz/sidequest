/** Display-only platform restrictions, independent of quest matching. */
export const GAME_PLATFORMS = {
  switch: { en: "Switch", de: "Switch" },
  "wii-u": { en: "Wii U", de: "Wii U" },
  pc: { en: "PC", de: "PC" },
} as const;

export type GamePlatformId = keyof typeof GAME_PLATFORMS;
