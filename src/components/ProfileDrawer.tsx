import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { Drawer } from "vaul";
import {
  RED_ROPE_BUNDLE_COST,
  RED_ROPE_BUNDLE_SIZE,
  type QuestStats,
  type UserProfile,
} from "../stores/useQuestStore";
import styles from "../App.module.css";
import { formatScore } from "../lib/format";
import { localizeMood } from "../localization/catalog";
import { normalizeLanguage } from "../localization/i18n";

type Props = {
  onDebugModeChange: (enabled: boolean) => void;
  onOpenHistory: () => void;
  onPurchaseRedRopes: () => boolean;
  open: boolean;
  profile: UserProfile;
  reduceMotion: boolean;
  stats: QuestStats;
};

export function ProfileDrawer({
  onDebugModeChange,
  onOpenHistory,
  onPurchaseRedRopes,
  open,
  profile,
  reduceMotion,
  stats,
}: Props) {
  const { i18n, t } = useTranslation();
  const language = normalizeLanguage(i18n.resolvedLanguage ?? i18n.language);
  const formattedPoints = formatScore(profile.points, language);
  const favoriteMood = stats.favoriteMoodId
    ? localizeMood(stats.favoriteMoodId, language)
    : null;
  const canPurchaseRopes = profile.points >= RED_ROPE_BUNDLE_COST;

  return (
    <section
      className={styles.profileDrawer}
      data-open={open || undefined}
      aria-labelledby="profile-title"
    >
      <header className={styles.profileDrawerHeader}>
        <div className={styles.profileDrawerTitleRow}>
          <Drawer.Title asChild>
            <h2 id="profile-title">{t("ui.profile.title")}</h2>
          </Drawer.Title>
          <p
            className={styles.profilePointBalance}
            aria-label={t("ui.profile.pointsLabel", {
              points: formattedPoints,
            })}
          >
            <span>{t("ui.profile.points")}</span>
            <strong>{formattedPoints}</strong>
          </p>
        </div>
        <Drawer.Description className={styles.srOnly}>
          {t("ui.profile.description")}
        </Drawer.Description>
      </header>

      <div className={styles.profileDrawerBody}>
        <motion.div
          className={styles.profileOverview}
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: 8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.16 }}
        >
          <section className={styles.redRopeSection}>
            <div>
              <span>{t("ui.profile.redRopes")}</span>
              <strong className={styles.redRopeCount}>
                <span className={styles.redRopeMultiplier} aria-hidden="true">
                  x
                </span>
                {formatScore(profile.redRopes, language)}
              </strong>
            </div>
            <button
              className={styles.purchaseRopesButton}
              type="button"
              disabled={!canPurchaseRopes}
              aria-label={t("ui.profile.buyRopesLabel", {
                count: RED_ROPE_BUNDLE_SIZE,
                points: formatScore(RED_ROPE_BUNDLE_COST, language),
                available: formattedPoints,
              })}
              onClick={onPurchaseRedRopes}
            >
              <span>
                {t("ui.profile.buyRopes", {
                  count: RED_ROPE_BUNDLE_SIZE,
                })}
              </span>
              <small>
                {t("ui.task.costsPoints", {
                  points: formatScore(RED_ROPE_BUNDLE_COST, language),
                })}
              </small>
            </button>
          </section>

          <dl className={styles.profileMetrics}>
            <ProfileMetric
              label={t("ui.profile.completedQuests")}
              value={formatScore(stats.uniqueCompletedQuestCount, language)}
            />
            <ProfileMetric
              label={t("ui.profile.timePlayed")}
              value={t("ui.profile.timePlayedMinutes", {
                minutes: formatScore(
                  Math.floor(stats.totalPlayedMs / 60_000),
                  language,
                ),
              })}
            />
            <ProfileMetric
              label={t("ui.profile.cancelledQuests")}
              value={formatScore(stats.cancelledQuestCount, language)}
            />
            <ProfileMetric
              label={t("ui.profile.repeatedQuests")}
              value={formatScore(stats.repeatedCompletionCount, language)}
            />
            <ProfileMetric
              label={t("ui.profile.favoriteMood")}
              value={favoriteMood?.title ?? t("ui.profile.noFavoriteMood")}
            />
          </dl>

          <section className={styles.debugModeSection}>
            <div>
              <span>{t("ui.profile.debugMode")}</span>
              <small>{t("ui.profile.debugModeDescription")}</small>
            </div>
            <button
              className={styles.debugModeToggle}
              data-active={profile.debugMode ? "true" : undefined}
              type="button"
              role="switch"
              aria-checked={profile.debugMode}
              aria-label={t("ui.profile.debugModeLabel")}
              onClick={() => onDebugModeChange(!profile.debugMode)}
            >
              <span aria-hidden="true" />
              <strong>
                {t(
                  profile.debugMode
                    ? "ui.profile.debugModeOn"
                    : "ui.profile.debugModeOff",
                )}
              </strong>
            </button>
          </section>

          <button
            className={styles.openHistoryButton}
            type="button"
            onClick={onOpenHistory}
          >
            {t("ui.profile.openHistory")}
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function ProfileMetric({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt>{label}</dt>
      <dd>{value}</dd>
    </div>
  );
}
