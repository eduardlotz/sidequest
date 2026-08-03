import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { formatRunningDuration, formatScore } from "../lib/format";
import { normalizeLanguage } from "../localization/i18n";
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
  const { t } = useTranslation();
  const hasCurrentCompletions = completedQuests.length > 0;

  return (
    <section className={styles.historyScreen} aria-labelledby="history-title">
      <header className={styles.historySummary}>
        <h2 className={styles.srOnly} id="history-title">
          {t("ui.history.title")}
        </h2>
        <p>
          <span>{completedQuests.length}</span>{" "}
          {t("ui.history.completedSessions", {
            count: completedQuests.length,
          })}
        </p>
      </header>

      <div className={styles.historyContent}>
        {legacyCompletionCount > 0 && (
          <aside
            className={styles.legacyCompletionSummary}
            aria-label={t("ui.history.earlierLabel")}
          >
            <strong>{legacyCompletionCount}</strong>{" "}
            {t("ui.history.earlierCompletions", {
              count: legacyCompletionCount,
            })}
          </aside>
        )}

        {!hasCurrentCompletions ? (
          <div className={styles.historyEmpty}>
            <span className={styles.emptyCheck} aria-hidden="true">
              <CheckIcon />
            </span>
            <h2>{t("ui.history.emptyTitle")}</h2>
            <p>{t("ui.history.emptyDescription")}</p>
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
  const { i18n, t } = useTranslation();
  const language = normalizeLanguage(i18n.resolvedLanguage ?? i18n.language);

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
              {t("ui.history.pointsAwarded", {
                points: formatScore(completion.pointsAwarded, language),
              })}
            </strong>
          </span>
        </header>
      </article>
    </motion.li>
  );
}
