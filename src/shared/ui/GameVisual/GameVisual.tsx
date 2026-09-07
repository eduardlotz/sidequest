import { useId, type CSSProperties } from "react";
import type { GameReference } from "../../../data/gameTypes";
import { resolveGameVisual } from "../../../data/gameVisuals";
import { GameIcon } from "../Icons/GameIcon";
import styles from "./GameVisual.module.css";

type Props = {
  className?: string;
  game: GameReference;
  size?: "card" | "row" | "picker" | "hero";
};

type GameVisualStyle = CSSProperties & {
  "--game-color"?: string;
  "--game-color-rgb"?: string;
};

export function GameVisual({ className, game, size = "row" }: Props) {
  const effectId = useId();
  const visual = resolveGameVisual(game);
  const classes = [styles.visual, className].filter(Boolean).join(" ");

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
          "--game-color-rgb": visual.rgb,
        } as GameVisualStyle
      }
    >
      <GameIcon icon={visual.iconId} style={{ fill: `url(#${effectId}-fill)`, filter: `url(#${effectId}-relief)` }}>
        <defs>
          <linearGradient id={`${effectId}-fill`} x1="0" y1="0" x2="0.65" y2="1">
            <stop stopColor="white" />
            <stop offset="1" stopColor="currentColor" />
          </linearGradient>
          <filter id={`${effectId}-relief`} x="-25%" y="-25%" width="150%" height="160%" colorInterpolationFilters="sRGB">
            <feDropShadow dx="0" dy="5" stdDeviation="3" floodColor="#24101a" floodOpacity=".3" result="shadow" />
            <feOffset in="SourceAlpha" dy="-2" result="shifted" />
            <feComposite in="SourceAlpha" in2="shifted" operator="out" result="rim" />
            <feFlood floodColor={visual.color} floodOpacity=".45" />
            <feComposite in2="rim" operator="in" result="inner" />
            <feMerge><feMergeNode in="shadow" /><feMergeNode in="inner" /></feMerge>
          </filter>
        </defs>
      </GameIcon>
    </span>
  );
}
