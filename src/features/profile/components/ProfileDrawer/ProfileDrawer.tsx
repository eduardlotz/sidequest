import { useLibraryStore } from "../../../../stores/useLibraryStore";
import { SolidButton } from "../../../../shared/ui/SolidButton/SolidButton";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./ProfileDrawer.module.css";
import { formatScore } from "../../../../lib/format";
import { applySoundEnabled, readSoundEnabled } from "../../../../lib/sound";
import { localizeMood } from "../../../../localization/catalog";
import { normalizeLanguage } from "../../../../localization/i18n";
import type { ThemeChoice } from "../../../../lib/theme";
import type {
  CompletedSession,
  QuestStats,
  UserProfile,
} from "../../../../domain/quest/model";
import { ChevronLeftIcon, CoinIcon, InfoIcon } from "../../../../shared/ui/Icons/Icons";
import { ResponsiveNestedDrawer } from "../../../../shared/ui/ResponsiveDrawer/ResponsiveDrawer";
import { RopePurchaseRow } from "../../../active-quest/components/RopePurchaseRow/RopePurchaseRow";
import { GameLibraryDrawer } from "../GameLibraryDrawer/GameLibraryDrawer";
import { QuestHistoryDrawer } from "../QuestHistoryDrawer/QuestHistoryDrawer";
import { ProfilePanel } from "./ProfilePanel";

type Props = {
  onDebugModeChange: (enabled: boolean) => void;
  onPurchaseRedRopes: () => boolean;
  onThemeChange: (theme: ThemeChoice) => void;
  completedSessions: readonly CompletedSession[];
  profile: UserProfile;
  stats: QuestStats;
  totalCoinsCollected: number;
  themeChoice: ThemeChoice;
};

export function ProfileDrawer({
  completedSessions,
  onDebugModeChange,
  onPurchaseRedRopes,
  onThemeChange,
  profile,
  stats,
  totalCoinsCollected,
  themeChoice,
}: Props) {
  const { i18n, t } = useTranslation();
  const language = normalizeLanguage(i18n.resolvedLanguage ?? i18n.language);
  const favoriteMood = stats.favoriteMoodId
    ? localizeMood(stats.favoriteMoodId, language)
    : null;
  const curatedCount = useLibraryStore(state => state.selectedCuratedGameIds.length);
  const customCount = useLibraryStore(state => state.customGames.length);
  const [soundEnabled, setSoundEnabled] = useState(readSoundEnabled);

  function changeSound(enabled: boolean) {
    setSoundEnabled(enabled);
    applySoundEnabled(enabled);
  }

  return (
    <ProfilePanel
      description={t("ui.profile.description")}
      title={t("ui.profile.title")}
      titleId="profile-title"
      overview
      headerAction={<span className={styles.profileCoins}>{formatScore(profile.points, language)}<CoinIcon aria-hidden /></span>}
    >
      <section className={styles.profileSection}>
        <div className={styles.profileSettingRow}>
          <span>{t("ui.profile.theme")}</span>
          <div
            className={styles.themeSegmentedControl}
            role="group"
            aria-label={t("ui.profile.theme")}
          >
            {(["light", "dark", "auto"] as const).map((choice) => (
              <button
                type="button"
                aria-pressed={themeChoice === choice}
                key={choice}
                onClick={() => onThemeChange(choice)}
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
      <section className={styles.profileSection}>
        <div className={styles.profileNavigation}>
          <ResponsiveNestedDrawer
            trigger={
              <button type="button">
                <span>
                  <strong>{t("ui.library.drawerTitle")}</strong>
                  <small>{t("ui.library.profileSummaryCounts", { curated: curatedCount, custom: customCount })}</small>
                </span>
                <ChevronLeftIcon aria-hidden="true" />
              </button>
            }
          >
            <GameLibraryDrawer />
          </ResponsiveNestedDrawer>
        </div>
      </section>

      <section className={styles.profileSection}>
        <dl className={styles.profileMetrics}>
          <ProfileMetric
            label={t("ui.profile.redRopes")}
            value={formatScore(profile.redRopes, language)}
          />
        </dl>
        <RopePurchaseRow
          label={t("ui.profile.buyOneRope")}
          coins={profile.points}
          onPurchase={onPurchaseRedRopes}
        />
      </section>

      <section className={styles.profileSection}>
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
      </section>

      <div className={styles.historyAction}>
        <ResponsiveNestedDrawer trigger={<SolidButton size="medium" variant="soft" iconRight={<ChevronLeftIcon className={styles.forwardIcon} />}>{t("ui.profile.viewHistory")}</SolidButton>}>
          <QuestHistoryDrawer completedSessions={completedSessions} />
        </ResponsiveNestedDrawer>
      </div>
    </ProfilePanel>
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
