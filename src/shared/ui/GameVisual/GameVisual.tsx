import { useEffect, useRef, type CSSProperties } from "react";
import type { GameReference } from "../../../data/gameTypes";
import { resolveGameVisual } from "../../../data/gameVisuals";
import { GameIcon } from "../Icons/GameIcon";
import styles from "./GameVisual.module.css";

type Props = {
  className?: string;
  colorTransitionKey?: string;
  game: GameReference;
  iconTransitionKey?: string;
  size?: "card" | "row" | "picker" | "hero";
};

type GameVisualStyle = CSSProperties & {
  "--game-color"?: string;
  "--game-icon-color"?: string;
  "--game-color-rgb"?: string;
};

export function GameVisual({
  className,
  colorTransitionKey,
  game,
  iconTransitionKey,
  size = "row",
}: Props) {
  const previousColorTransitionKey = useRef(colorTransitionKey);
  const previousIconTransitionKey = useRef(iconTransitionKey);
  const visual = resolveGameVisual(game);
  const colorChanged =
    colorTransitionKey !== undefined &&
    previousColorTransitionKey.current !== undefined &&
    previousColorTransitionKey.current !== colorTransitionKey;
  const classes = [
    styles.visual,
    colorChanged ? styles.visualChanging : undefined,
    className,
  ]
    .filter(Boolean)
    .join(" ");
  const iconChanged =
    iconTransitionKey !== undefined &&
    previousIconTransitionKey.current !== undefined &&
    previousIconTransitionKey.current !== iconTransitionKey;

  useEffect(() => {
    previousColorTransitionKey.current = colorTransitionKey;
    previousIconTransitionKey.current = iconTransitionKey;
  }, [colorTransitionKey, iconTransitionKey]);

  if (visual.kind === "artwork") {
    return (
      <span className={classes} data-size={size} data-visual="artwork">
        <img
          src={visual.src}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
        />
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
          "--game-icon-color": visual.foreground,
          "--game-color-rgb": visual.rgb,
        } as GameVisualStyle
      }
    >
      <span
        className={[
          styles.iconGlyph,
          iconChanged ? styles.iconGlyphChanging : undefined,
        ]
          .filter(Boolean)
          .join(" ")}
        key={iconTransitionKey ?? "static-icon"}
      >
        <GameIcon icon={visual.iconId} />
      </span>
    </span>
  );
}
