import { CURATED_GAMES_BY_ID } from "./games";
import { QUEST_ACCENT_BY_MOOD } from "./questColors";
import type { GameColorId, GameIconId, GameReference } from "./gameTypes";

export const GAME_COLOR_IDS: readonly GameColorId[] = ["challenge", "low-energy", "curious", "connect", "progress", "create", "restless", "relax", "nostalgic"];

export type ResolvedGameVisual =
  | { kind: "artwork"; src: string }
  | {
      kind: "icon";
      iconId: GameIconId;
      color: string;
      rgb: string;
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
  const accent = QUEST_ACCENT_BY_MOOD[colorId];
  return {
    kind: "icon",
    iconId: game.iconId ?? "adventure",
    color: accent.color,
    rgb: accent.rgb,
  };
}

export function gameColor(colorId: GameColorId) {
  return QUEST_ACCENT_BY_MOOD[colorId];
}
