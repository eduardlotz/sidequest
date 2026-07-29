import { motion } from "motion/react";
import type {
  CompletedQuest,
  LegacyCompletion,
} from "../stores/useQuestStore";
import { formatRunningDuration } from "../lib/format";
import { CheckIcon } from "./Icons";
import styles from "../App.module.css";

type Props = {
  completedQuests: CompletedQuest[];
  legacyCompletions: LegacyCompletion[];
  reduceMotion: boolean;
};

export function HistoryScreen({
  completedQuests,
  legacyCompletions,
  reduceMotion,
}: Props) {
  const legacyCount = legacyCompletions.reduce(
    (total, quest) => total + quest.completionCount,
    0,
  );
  const totalCompletions = completedQuests.length + legacyCount;

  return (
    <section className={styles.historyScreen} aria-labelledby="history-title">
      <header className={styles.historySummary}>
        <h2 className={styles.srOnly} id="history-title">Quest history</h2>
        <p>
          <span>{totalCompletions}</span>{" "}
          {totalCompletions === 1 ? "sidequest" : "sidequests"} completed
        </p>
      </header>

      <div className={styles.historyContent}>
        {totalCompletions === 0 ? (
          <div className={styles.historyEmpty}>
            <span className={styles.emptyCheck} aria-hidden="true">
              <CheckIcon />
            </span>
            <h2>No completed sidequests yet</h2>
            <p>Your completed mood and objective combinations will appear here.</p>
          </div>
        ) : (
          <>
            {completedQuests.length > 0 && (
              <motion.ol className={styles.historyList} layout>
                {completedQuests.map((quest) => (
                  <motion.li
                    className={styles.historyRow}
                    layout
                    initial={
                      reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }
                    }
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: reduceMotion ? 0 : 0.2 }}
                    key={quest.id}
                  >
                    <div className={styles.historyQuestRow}>
                      <span className={styles.rowContent}>
                        <strong>{quest.objective.title}</strong>
                        <small>
                          {quest.mood.displayName}
                          {quest.modifiers.length > 0
                            ? ` · ${quest.modifiers
                                .map((modifier) => modifier.title)
                                .join(" + ")}`
                            : ""}
                        </small>
                      </span>
                      <strong className={styles.historyCompletionCount}>
                        {formatRunningDuration(quest.durationMs)}
                      </strong>
                    </div>
                  </motion.li>
                ))}
              </motion.ol>
            )}

            {legacyCompletions.length > 0 && (
              <section
                className={styles.legacyHistory}
                aria-labelledby="legacy-history-title"
              >
                <h3 id="legacy-history-title">Earlier sidequests</h3>
                <ol className={styles.historyList}>
                  {legacyCompletions.map((quest) => (
                    <li className={styles.historyRow} key={quest.questId}>
                      <div className={styles.historyQuestRow}>
                        <span className={styles.rowContent}>
                          <strong>{quest.title}</strong>
                        </span>
                        <strong className={styles.historyCompletionCount}>
                          {quest.completionCount}×
                        </strong>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>
            )}
          </>
        )}
      </div>
    </section>
  );
}
