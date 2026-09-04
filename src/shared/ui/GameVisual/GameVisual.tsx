import type { CSSProperties } from "react";
import type { GameReference } from "../../../data/gameTypes";
import { resolveGameVisual } from "../../../data/gameVisuals";
import { GameGenreIcon } from "../Icons/Icons";
import styles from "./GameVisual.module.css";

type Props = {
  className?: string;
  game: GameReference;
  size?: "card" | "row" | "tile";
};

type GameVisualStyle = CSSProperties & {
  "--game-color"?: string;
  "--game-color-rgb"?: string;
};

export function GameVisual({ className, game, size = "row" }: Props) {
  const visual = resolveGameVisual(game);
  const classes = [styles.visual, className].filter(Boolean).join(" ");

  if (visual.kind === "artwork") {
    return (
      <span className={classes} data-size={size} data-visual="artwork">
        <img src={visual.src} alt="" aria-hidden="true" />
      </span>
    );
  }

  return (
    <span
      className={classes}
      data-size={size}
      data-visual="icon"
      style={
        {
          "--game-color": visual.color,
          "--game-color-rgb": visual.rgb,
        } as GameVisualStyle
      }
    >
      <GameGenreIcon icon={visual.iconId} />
    </span>
  );
}
