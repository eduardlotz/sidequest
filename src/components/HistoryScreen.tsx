import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { formatRunningDuration } from "../lib/format";
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
  const [expandedQuestIds, setExpandedQuestIds] = useState(
    () => new Set(completedQuests.map((quest) => quest.id)),
  );
  const completedPercentage = totalQuestCount > 0
    ? Math.round(completedQuests.length / totalQuestCount * 100)
    : 0;

  useEffect(() => {
    setExpandedQuestIds((current) => {
      const next = new Set(current);
      completedQuests.forEach((quest) => next.add(quest.id));
      return next;
    });
  }, [completedQuests]);

  function toggleQuest(questId: string) {
    setExpandedQuestIds((current) => {
      const next = new Set(current);
      if (next.has(questId)) next.delete(questId);
      else next.add(questId);
      return next;
    });
  }

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
            <p>Saved quests will appear here with every game you played.</p>
          </div>
        ) : (
          <motion.ol className={styles.historyList} layout>
            <AnimatePresence initial={false}>
              {completedQuests.map((quest) => {
                const expanded = expandedQuestIds.has(quest.id);
                return (
                  <HistoryAccordion
                    expanded={expanded}
                    quest={quest}
                    key={quest.id}
                    reduceMotion={reduceMotion}
                    onToggle={() => toggleQuest(quest.id)}
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
  quest,
  onToggle,
  reduceMotion,
}: {
  expanded: boolean;
  quest: Quest;
  onToggle: () => void;
  reduceMotion: boolean;
}) {
  const panelId = `history-entries-${quest.id}`;

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
        data-cuelume-toggle
        type="button"
        aria-expanded={expanded}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span className={styles.rowContent}>
          <strong>{quest.title}</strong>
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
              {quest.completedGames.map((game) => (
                <li className={styles.historyEntry} key={game.id}>
                  <strong>{game.title}</strong>
                  <time dateTime={`PT${Math.round(game.highscoreMs / 1000)}S`}>
                    {formatRunningDuration(game.highscoreMs)}
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
