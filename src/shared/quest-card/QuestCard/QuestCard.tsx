import type { QuestTypeId, QuestTagId } from "../../../data/questTraits";
import { motion, type HTMLMotionProps } from "motion/react";
import type { ReactNode } from "react";
import styles from "./QuestCard.module.css";
import { QuestCardFront } from "../QuestCardFront/QuestCardFront";
import type { GameReference } from "../../../data/gameTypes";

type Props = {
  children?: ReactNode;
  className?: string;
  completed?: boolean;
  unknown?: boolean;
  bestTimeMs?: number | null;
  game?: GameReference | null;
  genres: readonly string[];
  type: QuestTypeId;
  tags: readonly QuestTagId[];
  minimumDurationMinutes: number;
  moodTitle: string;
  name: string;
  objective: string;
  style?: HTMLMotionProps<"span">["style"];
  suggestedDurationMinutes: number;
};

export function QuestCard({
  children,
  className,
  completed = false,
  unknown = false,
  bestTimeMs,
  game = null,
  genres,
  type,
  tags,
  minimumDurationMinutes,
  moodTitle,
  name,
  objective,
  style,
  suggestedDurationMinutes,
}: Props) {
  return (
    <motion.span
      className={[styles.questCardSurface, className].filter(Boolean).join(" ")}
      data-completed={completed || undefined}
      data-unknown={unknown || undefined}
      style={style}
    >
      <span className={styles.cardShimmer} aria-hidden="true" />
      <QuestCardFront
        unknown={unknown}
        bestTimeMs={bestTimeMs}
        game={game}
        genres={genres}
        type={type}
        tags={tags}
        minimumDurationMinutes={minimumDurationMinutes}
        moodTitle={moodTitle}
        name={name}
        objective={objective}
        suggestedDurationMinutes={suggestedDurationMinutes}
      />
      {children}
    </motion.span>
  );
}
