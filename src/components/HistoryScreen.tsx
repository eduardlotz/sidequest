import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import type { HydratedCompletedTask } from "../hooks/useTaskRun";
import { formatRunningDuration } from "../lib/format";
import { CheckIcon } from "./Icons";
import styles from "../App.module.css";

type Props = {
  completedTasks: HydratedCompletedTask[];
  reduceMotion: boolean;
  totalTaskCount: number;
};

export function HistoryScreen({ completedTasks, reduceMotion, totalTaskCount }: Props) {
  const [expandedTaskIds, setExpandedTaskIds] = useState(
    () => new Set(completedTasks.map((item) => item.task.id)),
  );
  const completedPercentage = totalTaskCount > 0
    ? Math.round(completedTasks.length / totalTaskCount * 100)
    : 0;

  useEffect(() => {
    setExpandedTaskIds((current) => {
      const next = new Set(current);
      completedTasks.forEach((item) => next.add(item.task.id));
      return next;
    });
  }, [completedTasks]);

  function toggleTask(taskId: string) {
    setExpandedTaskIds((current) => {
      const next = new Set(current);
      if (next.has(taskId)) next.delete(taskId);
      else next.add(taskId);
      return next;
    });
  }

  return (
    <section className={styles.historyScreen} aria-labelledby="history-title">
      <header className={styles.historySummary}>
        <h2 className={styles.srOnly} id="history-title">Quest history</h2>
        <p>
          <span>{completedTasks.length}</span> of <strong>{totalTaskCount}</strong>{" "}
          sidequests completed
        </p>
        <CompletionBadge percentage={completedPercentage} />
      </header>

      <div className={styles.historyContent}>
        {completedTasks.length === 0 ? (
          <div className={styles.historyEmpty}>
            <span className={styles.emptyCheck} aria-hidden="true"><CheckIcon /></span>
            <h2>No completed sidequests yet</h2>
            <p>Saved quests will appear here with every game you played.</p>
          </div>
        ) : (
          <motion.ol className={styles.historyList} layout>
            <AnimatePresence initial={false}>
              {completedTasks.map((item) => {
                const expanded = expandedTaskIds.has(item.task.id);
                return (
                  <HistoryAccordion
                    expanded={expanded}
                    item={item}
                    key={item.task.id}
                    reduceMotion={reduceMotion}
                    onToggle={() => toggleTask(item.task.id)}
                  />
                );
              })}
            </AnimatePresence>
          </motion.ol>
        )}
      </div>
    </section>
  );
}

function HistoryAccordion({
  expanded,
  item,
  onToggle,
  reduceMotion,
}: {
  expanded: boolean;
  item: HydratedCompletedTask;
  onToggle: () => void;
  reduceMotion: boolean;
}) {
  const { completion, task } = item;
  const panelId = `history-entries-${task.id}`;

  return (
    <motion.li
      className={styles.historyRow}
      layout
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: reduceMotion ? 0 : 0.2 }}
    >
      <button
        className={styles.historyAccordionButton}
        type="button"
        aria-expanded={expanded}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span className={styles.rowContent}>
          <strong>{task.title}</strong>
        </span>
        <span className={styles.accordionChevron} aria-hidden="true">⌃</span>
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            className={styles.historyEntryPanel}
            id={panelId}
            initial={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 310, damping: 31, mass: 0.8 }}
          >
            <ul className={styles.historyEntries}>
              {completion.entries.map((entry) => (
                <li className={styles.historyEntry} key={entry.entryId}>
                  <strong>{entry.gameTitle}</strong>
                  <time dateTime={`PT${Math.round(entry.durationMs / 1000)}S`}>
                    {formatRunningDuration(entry.durationMs)}
                  </time>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
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
