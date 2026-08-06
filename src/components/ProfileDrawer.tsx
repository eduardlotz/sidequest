import { motion } from "motion/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Drawer } from "vaul";
import styles from "../App.module.css";
import { formatScore } from "../lib/format";
import { applySoundEnabled, readSoundEnabled } from "../lib/sound";
import { localizeMood } from "../localization/catalog";
import { normalizeLanguage } from "../localization/i18n";
import type { QuestStats, UserProfile } from "../stores/useQuestStore";
import { InfoIcon } from "./Icons";
import { RopePurchaseRow } from "./RopePurchaseRow";

type Props = {
  onDebugModeChange: (enabled: boolean) => void;
  onOpenHistory: () => void;
  onPurchaseRedRopes: () => boolean;
  open: boolean;
  profile: UserProfile;
  reduceMotion: boolean;
  stats: QuestStats;
  totalCoinsCollected: number;
};

type ThemeChoice = "light" | "dark" | "auto";

export function ProfileDrawer({
  onDebugModeChange,
  onOpenHistory,
  onPurchaseRedRopes,
  open,
  profile,
  reduceMotion,
  stats,
  totalCoinsCollected,
}: Props) {
  const { i18n, t } = useTranslation();
  const language = normalizeLanguage(i18n.resolvedLanguage ?? i18n.language);
  const favoriteMood = stats.favoriteMoodId
    ? localizeMood(stats.favoriteMoodId, language)
    : null;
  const [soundEnabled, setSoundEnabled] = useState(readSoundEnabled);
  const [themeChoice, setThemeChoice] = useState<ThemeChoice>("light");

  function changeSound(enabled: boolean) {
    setSoundEnabled(enabled);
    applySoundEnabled(enabled);
  }

  return (
    <section
      className={styles.profileDrawer}
      data-open={open || undefined}
      data-profile-drawer
      aria-labelledby="profile-title"
    >
      <header className={styles.profileDrawerHeader} data-profile-drawer-header>
        <div className={styles.profileDrawerTitleRow}>
          <Drawer.Title asChild>
            <h2 id="profile-title">{t("ui.profile.title")}</h2>
          </Drawer.Title>
        </div>
        <Drawer.Description className={styles.srOnly}>
          {t("ui.profile.description")}
        </Drawer.Description>
      </header>

      <motion.div
        className={styles.profileDrawerBody}
        data-profile-drawer-body
        initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: 8 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.16 }}
      >
        <section className={styles.profileSection}>
          <h3 className={styles.profileSectionLabel}>
            {t("ui.profile.redRopes")}
          </h3>
          <dl className={styles.profileMetrics}>
            <ProfileMetric
              label={t("ui.profile.owned")}
              value={formatScore(profile.redRopes, language)}
            />
          </dl>
          <RopePurchaseRow
            coins={profile.points}
            onPurchase={onPurchaseRedRopes}
          />
        </section>

        <section className={styles.profileSection}>
          <h3 className={styles.profileSectionLabel}>
            {t("ui.profile.statistics")}
          </h3>
          <dl className={styles.profileMetrics}>
            <ProfileMetric
              label={t("ui.profile.completedQuests")}
              value={formatScore(stats.completedQuestCount, language)}
            />
            <ProfileMetric
              label={t("ui.profile.timePlayed")}
              value={formatPlayedTime(stats.totalPlayedMs, t, language)}
            />
            <ProfileMetric
              label={t("ui.profile.coinsCollected")}
              value={formatScore(totalCoinsCollected, language)}
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
          <button
            className={styles.openHistoryButton}
            type="button"
            onClick={onOpenHistory}
          >
            {t("ui.profile.openHistory")}
          </button>
        </section>

        <section className={styles.profileSection}>
          <h3 className={styles.profileSectionLabel}>
            {t("ui.profile.settings")}
          </h3>
          <div className={styles.profileSettingRow}>
            <span>{t("ui.profile.theme")}</span>
            <div
              className={styles.themeSegmentedControl}
              role="group"
              aria-label={t("ui.profile.theme")}
            >
              {(["light", "dark", "auto"] as const).map((choice) => (
                <button
                  data-active={themeChoice === choice || undefined}
                  type="button"
                  aria-pressed={themeChoice === choice}
                  key={choice}
                  onClick={() => setThemeChoice(choice)}
                >
                  {t(`ui.profile.theme${capitalize(choice)}`)}
                </button>
              ))}
            </div>
          </div>
          <div className={styles.profileSettingRow}>
            <span>{t("ui.profile.sound")}</span>
            <SettingToggle
              checked={soundEnabled}
              label={t("ui.profile.soundLabel")}
              onChange={changeSound}
            />
          </div>
          <div
            className={`${styles.profileSettingRow} ${styles.profileSettingRowWithTooltip}`}
          >
            <span className={styles.settingLabelWithInfo}>
              {t("ui.profile.debugMode")}
              <span className={styles.infoPopover}>
                <button
                  type="button"
                  aria-label={t("ui.profile.debugModeInfoLabel")}
                  aria-describedby="debug-mode-info"
                >
                  <InfoIcon />
                </button>
              </span>
            </span>
            <span
              className={styles.settingInfoTooltip}
              id="debug-mode-info"
              role="tooltip"
            >
              {t("ui.profile.debugModeDescription")}
            </span>
            <SettingToggle
              checked={profile.debugMode}
              label={t("ui.profile.debugModeLabel")}
              onChange={onDebugModeChange}
            />
          </div>
        </section>
      </motion.div>
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

function SettingToggle({
  checked,
  label,
  onChange,
}: {
  checked: boolean;
  label: string;
  onChange: (checked: boolean) => void;
}) {
  return (
    <button
      className={styles.settingToggle}
      data-active={checked || undefined}
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onChange(!checked)}
    >
      <span aria-hidden="true" />
    </button>
  );
}

function formatPlayedTime(
  milliseconds: number,
  t: ReturnType<typeof useTranslation>["t"],
  language: "en" | "de",
) {
  const totalMinutes = Math.floor(milliseconds / 60_000);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  if (hours > 0) {
    return t("ui.profile.timePlayedHours", {
      hours: formatScore(hours, language),
      minutes: formatScore(minutes, language),
    });
  }
  return t("ui.profile.timePlayedMinutes", {
    minutes: formatScore(minutes, language),
  });
}

function capitalize(value: string) {
  return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
}
