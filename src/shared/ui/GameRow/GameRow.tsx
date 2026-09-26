import type { ReactNode } from "react";
import type { GameReference } from "../../../data/gameTypes";
import { GameVisual } from "../GameVisual/GameVisual";
import styles from "./GameRow.module.css";

type Props = {
  game: GameReference;
  title?: string;
  children?: ReactNode;
  actions?: ReactNode;
  className?: string;
  onClick?: () => void;
};

export function GameRow({ game, title = game.name, children, actions, className, onClick }: Props) {
  const content = <>
    <GameVisual game={game} />
    <span className={styles.copy}>
      <strong>{title}</strong>
      {children}
    </span>
    {actions}
  </>;
  const classes = [styles.row, className].filter(Boolean).join(" ");
  return onClick ? (
    <button className={classes} type="button" onClick={onClick}>{content}</button>
  ) : (
    <div className={classes}>{content}</div>
  );
}
