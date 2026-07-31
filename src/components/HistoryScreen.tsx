import { motion } from "motion/react";
import { formatRunningDuration, formatScore } from "../lib/format";
import type { CompletedQuest } from "../stores/useQuestStore";
import { CheckIcon } from "./Icons";
import styles from "../App.module.css";

type Props = {
  completedQuests: CompletedQuest[];
  legacyCompletionCount: number;
  reduceMotion: boolean;
};

export function HistoryScreen({
  completedQuests,
  legacyCompletionCount,
  reduceMotion,
}: Props) {
  const hasCurrentCompletions = completedQuests.length > 0;

  return (
    <section className={styles.historyScreen} aria-labelledby="history-title">
      <header className={styles.historySummary}>
        <h2 className={styles.srOnly} id="history-title">
          Quest history
        </h2>
        <p>
          <span>{completedQuests.length}</span>{" "}
          {completedQuests.length === 1
            ? "completed session"
            : "completed sessions"}
        </p>
      </header>

      <div className={styles.historyContent}>
        {legacyCompletionCount > 0 && (
          <aside
            className={styles.legacyCompletionSummary}
            aria-label="Earlier quest history"
          >
            <strong>{legacyCompletionCount}</strong>{" "}
            {legacyCompletionCount === 1
              ? "completion from an earlier Sidequest version"
              : "completions from an earlier Sidequest version"}
          </aside>
        )}

        {!hasCurrentCompletions ? (
          <div className={styles.historyEmpty}>
            <span className={styles.emptyCheck} aria-hidden="true">
              <CheckIcon />
            </span>
            <h2>No completed sessions yet</h2>
            <p>
              Completed quests will appear here with their time and reward.
            </p>
          </div>
        ) : (
          <motion.ol className={styles.historyList} layout>
            {completedQuests.map((completion) => (
              <HistoryQuest
                completion={completion}
                key={completion.id}
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
  completion,
  reduceMotion,
}: {
  completion: CompletedQuest;
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
      <article className={styles.historySession}>
        <span className={styles.historyMood}>{completion.mood.title}</span>
        <header className={styles.historyQuestRow}>
          <span className={styles.rowContent}>
            <strong>{completion.quest.title}</strong>
            <span className={styles.historyObjective}>
              {completion.quest.objective}
            </span>
          </span>
          <span className={styles.historySessionMeta}>
            <strong>{formatRunningDuration(completion.durationMs)}</strong>
            <strong className={styles.historyPointsAwarded}>
              +{formatScore(completion.pointsAwarded)} points
            </strong>
          </span>
        </header>
      </article>
    </motion.li>
  );
}
