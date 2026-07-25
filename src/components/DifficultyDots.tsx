import type { QuestDifficulty } from "../data/quests";
import styles from "../App.module.css";

const DOT_COUNT: Record<QuestDifficulty, number> = {
  easy: 1,
  medium: 2,
  hard: 3,
};

export function DifficultyDots({ difficulty }: { difficulty: QuestDifficulty }) {
  return (
    <span className={styles.difficultyDots} aria-hidden="true">
      {Array.from({ length: DOT_COUNT[difficulty] }, (_, index) => (
        <i key={index} />
      ))}
    </span>
  );
}
