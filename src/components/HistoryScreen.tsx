import { motion } from "motion/react";
import type { Quest } from "../stores/useQuestStore";
import { CheckIcon } from "./Icons";
import styles from "../App.module.css";

type Props = {
  completedQuests: Quest[];
  reduceMotion: boolean;
  totalQuestCount: number;
};

export function HistoryScreen({
  completedQuests,
  reduceMotion,
  totalQuestCount,
}: Props) {
  const completedPercentage = totalQuestCount > 0
    ? Math.round(completedQuests.length / totalQuestCount * 100)
    : 0;

  return (
    <section className={styles.historyScreen} aria-labelledby="history-title">
      <header className={styles.historySummary}>
        <h2 className={styles.srOnly} id="history-title">Quest history</h2>
        <p>
          <span>{completedQuests.length}</span> of{" "}
          <strong>{totalQuestCount}</strong>{" "}
          sidequests completed
        </p>
        <CompletionBadge percentage={completedPercentage} />
      </header>

      <div className={styles.historyContent}>
        {completedQuests.length === 0 ? (
          <div className={styles.historyEmpty}>
            <span className={styles.emptyCheck} aria-hidden="true"><CheckIcon /></span>
            <h2>No completed sidequests yet</h2>
            <p>Completed quests will appear here with their completion count.</p>
          </div>
        ) : (
          <motion.ol className={styles.historyList} layout>
            {completedQuests.map((quest) => (
              <HistoryQuest
                quest={quest}
                key={quest.id}
                reduceMotion={reduceMotion}
              />
            ))}
          </motion.ol>
        )}
      </div>
    </section>
  );
}

function HistoryQuest({
  quest,
  reduceMotion,
}: {
  quest: Quest;
  reduceMotion: boolean;
}) {
  return (
    <motion.li
      className={styles.historyRow}
      layout
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: reduceMotion ? 0 : 0.2 }}
    >
      <div className={styles.historyQuestRow}>
        <span className={styles.rowContent}>
          <strong>{quest.title}</strong>
        </span>
        <strong className={styles.historyCompletionCount}>
          {quest.completionCount}{" "}
          {quest.completionCount === 1 ? "completion" : "completions"}
        </strong>
      </div>
    </motion.li>
  );
}

function CompletionBadge({ percentage }: { percentage: number }) {
  const radius = 17;
  const circumference = 2 * Math.PI * radius;
  const clampedPercentage = Math.max(0, Math.min(100, percentage));

  return (
    <span className={styles.historyCompletionBadge} aria-label={`${clampedPercentage}% completed`}>
      <svg viewBox="0 0 44 44" aria-hidden="true">
        <circle className={styles.badgeTrack} cx="22" cy="22" r={radius} />
        <circle
          className={styles.badgeProgress}
          cx="22"
          cy="22"
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - clampedPercentage / 100)}
        />
      </svg>
      <strong>{clampedPercentage}%</strong>
    </span>
  );
}
