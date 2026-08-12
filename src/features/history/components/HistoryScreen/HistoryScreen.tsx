import { motion } from "motion/react";
import { useEffect, useMemo, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useShallow } from "zustand/react/shallow";
import appStyles from "../../../../App.module.css";
import { getQuestCardAccentStyle } from "../../../../data/questColors";
import type { QuestDefinition } from "../../../../data/quests";
import { useTiltEffect } from "../../../../hooks/useTiltEffect";
import { formatRunningDuration } from "../../../../lib/format";
import { normalizeLanguage } from "../../../../localization/i18n";
import { hydrateCompletedQuest } from "../../../../localization/catalog";
import type { CompletedQuest } from "../../../../domain/quest/model";
import { useQuestStore } from "../../../../stores/useQuestStore";
import styles from "./HistoryScreen.module.css";
import { CheckIcon } from "../../../../shared/ui/Icons/Icons";
import { QuestCardMeta } from "../../../../shared/quest-card/QuestCardMeta/QuestCardMeta";
import { QuestTips } from "../../../../shared/quest-card/QuestTips/QuestTips";
import { SolidButton } from "../../../../shared/ui/SolidButton/SolidButton";
import { WordmarkLogo } from "../../../../assets/wordmark";

type Props = {
  onClose: () => void;
  reduceMotion: boolean;
};

type HistoryContentProps = {
  completedQuests: readonly CompletedQuest[];
  directStartDisabled?: boolean;
  legacyCompletionCount?: number;
  onClose: () => void;
  onStartQuest: (questId: string) => boolean | void;
  reduceMotion: boolean;
};

type QuestHistoryGroup = {
  completions: CompletedQuest[];
  newestCompletionAt: number;
  quest: QuestDefinition;
};

export function HistoryScreen({ onClose, reduceMotion }: Props) {
  const { i18n } = useTranslation();
  const language = normalizeLanguage(i18n.resolvedLanguage ?? i18n.language);
  const {
    completedSessions,
    currentSession,
    legacyCompletionCount,
    replayQuest,
  } = useQuestStore(
    useShallow((state) => ({
      completedSessions: state.completedSessions,
      currentSession: state.currentSession,
      legacyCompletionCount: state.legacyCompletionCount,
      replayQuest: state.replayQuest,
    })),
  );
  const completedQuests = useMemo(
    () =>
      completedSessions.flatMap((completion) => {
        const quest = hydrateCompletedQuest(completion, language);
        return quest ? [quest] : [];
      }),
    [completedSessions, language],
  );

  function startQuest(questId: string) {
    if (!replayQuest(questId)) return;
    onClose();
  }

  return (
    <HistoryContent
      completedQuests={completedQuests}
      directStartDisabled={Boolean(currentSession)}
      legacyCompletionCount={legacyCompletionCount}
      reduceMotion={reduceMotion}
      onClose={onClose}
      onStartQuest={startQuest}
    />
  );
}

function HistoryContent({
  completedQuests,
  directStartDisabled = false,
  legacyCompletionCount = 0,
  onClose,
  onStartQuest,
  reduceMotion,
}: HistoryContentProps) {
  const { t } = useTranslation();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const groups = useMemo(
    () => groupCompletionsByQuest(completedQuests),
    [completedQuests],
  );

  useEffect(() => {
    const focusCloseButton = () =>
      closeButtonRef.current?.focus({ preventScroll: true });
    const focusFrame = window.requestAnimationFrame(focusCloseButton);
    const focusAfterDrawer = window.setTimeout(focusCloseButton, 420);
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      event.preventDefault();
      onClose();
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      window.cancelAnimationFrame(focusFrame);
      window.clearTimeout(focusAfterDrawer);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <motion.section
      className={styles.screen}
      aria-labelledby="history-title"
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: reduceMotion ? 0 : 0.22 }}
    >
      <SolidButton
        ref={closeButtonRef}
        className={styles.closeButton}
        type="button"
        onClick={onClose}
      >
        {t("ui.history.close")}
      </SolidButton>

      <div className={styles.content}>
        <header className={styles.header}>
          <h1 id="history-title">{t("ui.history.title")}</h1>
          <p>
            {t("ui.history.completedQuestSummary", {
              count: groups.length,
            })}
            <span aria-hidden="true"> · </span>
            {t("ui.history.completedSessionSummary", {
              count: completedQuests.length,
            })}
          </p>
        </header>

        {legacyCompletionCount > 0 ? (
          <aside
            className={styles.legacyNote}
            aria-label={t("ui.history.earlierLabel")}
          >
            {t("ui.history.earlierCompletions", {
              count: legacyCompletionCount,
            })}
          </aside>
        ) : null}

        {groups.length === 0 ? (
          <div className={styles.empty}>
            <span className={styles.emptyCheck} aria-hidden="true">
              <CheckIcon />
            </span>
            <h2>{t("ui.history.emptyTitle")}</h2>
            <p>{t("ui.history.emptyDescription")}</p>
          </div>
        ) : (
          <motion.ol className={styles.questList} layout>
            {groups.map((group, index) => (
              <HistoryQuestGroup
                directStartDisabled={directStartDisabled}
                group={group}
                index={index}
                key={group.quest.id}
                onStartQuest={onStartQuest}
                reduceMotion={reduceMotion}
              />
            ))}
          </motion.ol>
        )}
      </div>
    </motion.section>
  );
}

function HistoryQuestGroup({
  directStartDisabled,
  group,
  index,
  onStartQuest,
  reduceMotion,
}: {
  directStartDisabled: boolean;
  group: QuestHistoryGroup;
  index: number;
  onStartQuest: (questId: string) => boolean | void;
  reduceMotion: boolean;
}) {
  const { t } = useTranslation();
  const headingId = `history-quest-${group.quest.id}`;
  const unavailableId = `history-unavailable-${group.quest.id}`;

  return (
    <motion.li
      className={styles.questGroup}
      layout
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: reduceMotion ? 0 : 0.32,
        delay: reduceMotion ? 0 : Math.min(index * 0.045, 0.24),
      }}
    >
      <div className={styles.questColumn}>
        <HistoryQuestCard
          moodTitle={group.completions[0]?.mood.title ?? ""}
          quest={group.quest}
          reduceMotion={reduceMotion}
          titleId={headingId}
        />
        <SolidButton
          className={styles.startButton}
          type="button"
          aria-label={t("ui.history.repeatQuestLabel", {
            title: group.quest.title,
          })}
          aria-describedby={directStartDisabled ? unavailableId : undefined}
          disabled={directStartDisabled}
          onClick={() => onStartQuest(group.quest.id)}
        >
          {t("ui.history.repeatQuest")}
        </SolidButton>
        {directStartDisabled ? (
          <p className={styles.startUnavailable} id={unavailableId}>
            {t("ui.history.repeatQuestUnavailable")}
          </p>
        ) : null}
      </div>

      <section className={styles.sessions} aria-labelledby={headingId}>
        <p className={styles.sessionCount}>
          {t("ui.history.questSessions", {
            count: group.completions.length,
          })}
        </p>
        <CompletionGrid completions={group.completions} />
      </section>
    </motion.li>
  );
}

function HistoryQuestCard({
  moodTitle,
  quest,
  reduceMotion,
  titleId,
}: {
  moodTitle: string;
  quest: QuestDefinition;
  reduceMotion: boolean;
  titleId: string;
}) {
  const { t } = useTranslation();
  const {
    handlePointerEnter,
    handlePointerLeave,
    handlePointerMove,
    rotateX,
    rotateY,
  } = useTiltEffect({
    maxTilt: 18,
    reduceMotion,
  });

  return (
    <div
      className={styles.questCardStage}
      data-history-quest-card={quest.id}
      style={getQuestCardAccentStyle(quest.id, quest.moodId)}
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onPointerOut={handlePointerLeave}
    >
      <motion.article
        className={`${appStyles.activeQuestCard} ${styles.questCard}`}
        aria-labelledby={titleId}
        style={{ rotateX, rotateY, transformPerspective: 1_000 }}
      >
        <span className={appStyles.cardShimmer} aria-hidden="true" />
        <QuestCardMeta
          minimumDurationMinutes={quest.minimumDurationMinutes}
          moodTitle={moodTitle}
          name={quest.name}
          suggestedDurationMinutes={quest.suggestedDurationMinutes}
        />

        <div className={appStyles.questDetails}>
          <h2 className={appStyles.questTitle} id={titleId}>
            {quest.title}
          </h2>
          <p className={appStyles.questDescription}>
            {quest.objective}
          </p>
          <QuestTips tips={quest.tips} />
        </div>

        <span className={appStyles.cardBrand} aria-hidden="true">
          <WordmarkLogo />
        </span>
      </motion.article>
    </div>
  );
}

function CompletionGrid({
  completions,
}: {
  completions: readonly CompletedQuest[];
}) {
  const { i18n, t } = useTranslation();
  const language = normalizeLanguage(i18n.resolvedLanguage ?? i18n.language);
  const labels = {
    completedAt: t("ui.history.completedAt"),
    game: t("ui.history.game"),
    mood: t("ui.history.mood"),
    timePlayed: t("ui.history.timePlayed"),
  };

  return (
    <div
      className={styles.completionGrid}
      role="table"
      aria-label={t("ui.history.completionDetails")}
    >
      <div className={styles.gridHeader} role="row">
        <span role="columnheader">{labels.game}</span>
        <span role="columnheader">{labels.completedAt}</span>
        <span role="columnheader">{labels.mood}</span>
        <span role="columnheader">{labels.timePlayed}</span>
      </div>

      <div className={styles.gridBody} role="rowgroup">
        {completions.map((completion) => {
          const gameTitle = readGameTitle(completion);
          const completedDate = validDate(completion.completedAt);
          return (
            <div className={styles.gridRow} role="row" key={completion.id}>
              <span
                className={styles.gameTitle}
                data-label={labels.game}
                role="cell"
              >
                {gameTitle || (
                  <span aria-label={t("ui.history.noGameTitle")}>—</span>
                )}
              </span>
              <time
                data-label={labels.completedAt}
                dateTime={completedDate?.toISOString()}
                role="cell"
              >
                {formatPrettyDate(completion.completedAt, language)}
              </time>
              <span data-label={labels.mood} role="cell">
                {completion.mood.title}
              </span>
              <span
                className={styles.duration}
                data-label={labels.timePlayed}
                role="cell"
              >
                {formatRunningDuration(completion.durationMs)}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function groupCompletionsByQuest(
  completions: readonly CompletedQuest[],
): QuestHistoryGroup[] {
  const groups = new Map<string, QuestHistoryGroup>();

  for (const completion of completions) {
    const current = groups.get(completion.questId);
    if (current) {
      current.completions.push(completion);
      current.newestCompletionAt = Math.max(
        current.newestCompletionAt,
        completion.completedAt,
      );
      continue;
    }

    groups.set(completion.questId, {
      completions: [completion],
      newestCompletionAt: completion.completedAt,
      quest: completion.quest,
    });
  }

  return Array.from(groups.values())
    .map((group) => ({
      ...group,
      completions: group.completions.sort(
        (left, right) => right.completedAt - left.completedAt,
      ),
    }))
    .sort((left, right) => right.newestCompletionAt - left.newestCompletionAt);
}

function readGameTitle(completion: CompletedQuest) {
  return completion.gameTitle?.trim() ?? "";
}

function formatPrettyDate(timestamp: number, language: "en" | "de") {
  const date = validDate(timestamp);
  if (!date) return "—";
  return new Intl.DateTimeFormat(language === "de" ? "de-DE" : "en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).format(date);
}

function validDate(timestamp: number) {
  const date = new Date(timestamp);
  return Number.isNaN(date.getTime()) ? null : date;
}
