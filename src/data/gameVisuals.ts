import { MOOD_IDS } from "./questTypes";
import { CURATED_GAMES_BY_ID } from "./games";
import type { GameColorId, GameIconId, GameReference } from "./gameTypes";

export const GAME_COLOR_IDS: readonly GameColorId[] = MOOD_IDS;
export const GAME_PICKER_COLOR_IDS: readonly GameColorId[] = GAME_COLOR_IDS;

// Game identity has its own palette; mood and quest accents remain independent.
const GAME_PALETTE: Record<GameColorId, { color: string; foreground: string }> = {
  relax: { color: "#9CCBB4", foreground: "#1D252D" },
  explore: { color: "#C58A38", foreground: "#1D252D" },
  progress: { color: "#2973CA", foreground: "#FFFFFF" },
  create: { color: "#C85A91", foreground: "#FFFFFF" },
  challenge: { color: "#CE4B53", foreground: "#FFFFFF" },
  connect: { color: "#BACA49", foreground: "#1D252D" },
  nostalgic: { color: "#B4A0C9", foreground: "#1D252D" },
  overwhelmed: { color: "#DEA17F", foreground: "#1D252D" },
  restless: { color: "#E8C153", foreground: "#1D252D" },
  focused: { color: "#6156AA", foreground: "#FFFFFF" },
  curious: { color: "#25857E", foreground: "#FFFFFF" },
  "low-energy": { color: "#8394AF", foreground: "#1D252D" },
};

export type ResolvedGameVisual =
  | { kind: "artwork"; src: string }
  | {
      kind: "icon";
      iconId: GameIconId;
      color: string;
      rgb: string;
      foreground: string;
    };

export function resolveGameVisual(
  game: Pick<GameReference, "id" | "source" | "iconId" | "colorId">,
): ResolvedGameVisual {
  if (game.source === "curated") {
    const curatedGame = CURATED_GAMES_BY_ID[game.id];
    if (curatedGame) {
      return {
        kind: "artwork",
        src: `${import.meta.env.BASE_URL}${curatedGame.artwork}`,
      };
    }
  }

  const colorId = game.colorId ?? "explore";
  const accent = gameColor(colorId);
  return {
    kind: "icon",
    iconId: game.iconId ?? "adventure",
    color: accent.color,
    rgb: accent.rgb,
    foreground: accent.foreground,
  };
}

export function gameColor(colorId: GameColorId) {
  const palette = GAME_PALETTE[colorId];
  const rgb = [1, 3, 5].map(offset => parseInt(palette.color.slice(offset, offset + 2), 16)).join(" ");
  return { ...palette, rgb };

}
