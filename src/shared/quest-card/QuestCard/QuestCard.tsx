import { motion, type HTMLMotionProps } from "motion/react";
import type { ReactNode } from "react";
import styles from "../../../App.module.css";
import { QuestCardFront } from "../QuestCardFront/QuestCardFront";

type Props = {
  children?: ReactNode;
  className?: string;
  completed?: boolean;
  genres: readonly string[];
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
  genres,
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
      style={style}
    >
      <span className={styles.cardShimmer} aria-hidden="true" />
      <QuestCardFront
        genres={genres}
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
