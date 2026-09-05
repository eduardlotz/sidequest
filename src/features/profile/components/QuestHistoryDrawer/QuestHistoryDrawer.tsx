import { useTranslation } from "react-i18next";
import type { CompletedSession } from "../../../../domain/quest/model";
import {
  formatCompletedAt,
  formatRunningDuration,
  formatScore,
} from "../../../../lib/format";
import { hydrateQuest } from "../../../../localization/catalog";
import { normalizeLanguage } from "../../../../localization/i18n";
import { GameVisual } from "../../../../shared/ui/GameVisual/GameVisual";
import { ProfilePanel } from "../ProfileDrawer/ProfilePanel";
import styles from "./QuestHistoryDrawer.module.css";

export function QuestHistoryDrawer({
  completedSessions,
}: {
  completedSessions: readonly CompletedSession[];
}) {
  const { i18n, t } = useTranslation();
  const language = normalizeLanguage(i18n.resolvedLanguage ?? i18n.language);

  return (
    <ProfilePanel
      description={t("ui.history.description")}
      showBack
      title={t("ui.history.title")}
      titleId="quest-history-title"
    >
      {completedSessions.length === 0 ? (
        <div className={styles.emptyState}>
          <strong>{t("ui.history.emptyTitle")}</strong>
          <p>{t("ui.history.emptyBody")}</p>
        </div>
      ) : (
        <ol className={styles.historyList}>
          {completedSessions.map((completion) => {
            const quest = hydrateQuest(
              completion.questId,
              completion.moodId,
              completion.game,
              language,
            );
            if (!quest) return null;
            return (
              <li key={completion.id}>
                <div className={styles.historyIdentity}>
                  {completion.game ? (
                    <GameVisual game={completion.game} />
                  ) : (
                    <span className={styles.universalMark} aria-hidden="true">
                      {quest.mood.title.charAt(0)}
                    </span>
                  )}
                  <div>
                    <strong>{quest.name}</strong>
                    <span>
                      {completion.game?.name ?? t("ui.history.anyGame")}
                    </span>
                  </div>
                </div>
                <dl className={styles.historyMeta}>
                  <div>
                    <dt>{t("ui.history.mood")}</dt>
                    <dd>{quest.mood.title}</dd>
                  </div>
                  <div>
                    <dt>{t("ui.history.duration")}</dt>
                    <dd>{formatRunningDuration(completion.durationMs)}</dd>
                  </div>
                  <div>
                    <dt>{t("ui.history.reward")}</dt>
                    <dd>
                      {t("ui.history.coins", {
                        count: formatScore(completion.pointsAwarded, language),
                      })}
                    </dd>
                  </div>
                </dl>
                <time dateTime={new Date(completion.completedAt).toISOString()}>
                  {formatCompletedAt(completion.completedAt, language)}
                </time>
              </li>
            );
          })}
        </ol>
      )}
    </ProfilePanel>
  );
}
