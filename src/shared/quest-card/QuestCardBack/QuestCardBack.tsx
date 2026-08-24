import { motion } from "motion/react";
import styles from "../QuestCard/QuestCard.module.css";
import { Logo } from "../../../assets/logo";

type Props = {
  className?: string;
};

export function QuestCardBack({ className }: Props) {
  return (
    <motion.span
      className={[styles.questCardSurface, className].filter(Boolean).join(" ")}
      aria-hidden="true"
    >
      <span className={styles.questCardBackContent}>
        <span className={styles.questCardBackPattern}>
          {Array.from({ length: 35 }, (_, index) => (
            <Logo key={index} />
          ))}
        </span>
      </span>
    </motion.span>
  );
}
