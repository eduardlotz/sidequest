import { SegmentedControl } from "../../../../shared/ui/SegmentedControl/SegmentedControl";
import { SolidButton } from "../../../../shared/ui/SolidButton/SolidButton";
import {
  CircleHalfIcon,
  CoffeeIcon,
  DevicesIcon,
  EarIcon,
  GameControllerIcon,
  GlobeIcon,
  MoonIcon,
  SunIcon,
  WrenchIcon,
} from "@phosphor-icons/react";
import { QuestPoolSettings } from "../QuestPoolSettings/QuestPoolSettings";
import { InfoLabel } from "../../../../shared/ui/InfoLabel/InfoLabel";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./ProfileDrawer.module.css";
import { formatScore } from "../../../../lib/format";
import { applySoundEnabled, readSoundEnabled } from "../../../../lib/sound";
import { localizeMood } from "../../../../localization/catalog";
import {
  normalizeLanguage,
  SUPPORTED_LANGUAGES,
} from "../../../../localization/i18n";
import type { ThemeChoice } from "../../../../lib/theme";
import type { QuestStats, UserProfile } from "../../../../domain/quest/model";
import { ChevronLeftIcon, CoinIcon } from "../../../../shared/ui/Icons/Icons";
import { ResponsiveNestedDrawer } from "../../../../shared/ui/ResponsiveDrawer/ResponsiveDrawer";
import { RopePurchaseRow } from "../../../active-quest/components/RopePurchaseRow/RopePurchaseRow";
import { GameLibraryDrawer } from "../GameLibraryDrawer/GameLibraryDrawer";
import { ProfilePanel } from "./ProfilePanel";

const THEME_ICONS = {
  light: SunIcon,
  dark: MoonIcon,
  auto: DevicesIcon,
} as const;

type Props = {
  onDebugModeChange: (enabled: boolean) => void;
  onPurchaseRedRopes: () => boolean;
  onThemeChange: (theme: ThemeChoice) => void;
  profile: UserProfile;
  stats: QuestStats;
  totalCoinsCollected: number;
  themeChoice: ThemeChoice;
};

export function ProfileDrawer({
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
      headerAction={
        <span className={styles.profileCoins}>
          {formatScore(profile.points, language)}
          <CoinIcon aria-hidden />
        </span>
      }
    >
      <section className={styles.profileSection}>
        <div className={styles.profileSettingRow}>
          <span className={styles.settingLabelWithInfo}>
            <GlobeIcon aria-hidden weight="bold" />
            {t("ui.profile.language")}
          </span>
          <SegmentedControl
            label={t("ui.profile.language")}
            value={language}
            options={SUPPORTED_LANGUAGES.map((choice) => ({
              value: choice,
              label: t(choice === "en" ? "ui.nav.english" : "ui.nav.german"),
            }))}
            onChange={(choice) => void i18n.changeLanguage(choice)}
          />
        </div>
        <div className={styles.profileSettingRow}>
          <span className={styles.settingLabelWithInfo}>
            <CircleHalfIcon aria-hidden weight="bold" />
            {t("ui.profile.theme")}
          </span>
          <SegmentedControl
            label={t("ui.profile.theme")}
            value={themeChoice}
            options={(["light", "dark", "auto"] as const).map((choice) => {
              const Icon = THEME_ICONS[choice];
              return {
                value: choice,
                label: t(`ui.profile.theme${capitalize(choice)}`),
                icon: <Icon aria-hidden weight="bold" size={16} />,
              };
            })}
            onChange={onThemeChange}
          />
        </div>
        <div className={styles.profileSettingRow}>
          <span className={styles.settingLabelWithInfo}>
            <EarIcon aria-hidden weight="bold" />
            {t("ui.profile.sound")}
          </span>
          <SettingToggle
            checked={soundEnabled}
            label={t("ui.profile.soundLabel")}
            onChange={changeSound}
          />
        </div>
        {/* <div className={styles.profileSettingRow}>
          <span className={styles.settingLabelWithInfo}>
            <CoffeeIcon aria-hidden weight="bold" />
            <InfoLabel
              label={t("ui.profile.debugMode")}
              hint={t("ui.profile.debugModeDescription")}
            />
          </span>
          <SettingToggle
            checked={profile.debugMode}
            label={t("ui.profile.debugModeLabel")}
            onChange={onDebugModeChange}
          />
        </div> */}
      </section>
      <section className={styles.profileSection}>
        <div className={styles.profileNavigation}>
          <ResponsiveNestedDrawer
            trigger={
              <SolidButton
                size="medium"
                variant="soft"
                iconLeft={<GameControllerIcon weight="bold" />}
                iconRight={<ChevronLeftIcon className={styles.forwardIcon} />}
              >
                {t("ui.library.drawerTitle")}
              </SolidButton>
            }
          >
            <GameLibraryDrawer />
          </ResponsiveNestedDrawer>
          <ResponsiveNestedDrawer
            trigger={
              <SolidButton
                size="medium"
                variant="soft"
                iconLeft={<WrenchIcon weight="bold" />}
                iconRight={<ChevronLeftIcon className={styles.forwardIcon} />}
              >
                {t("ui.pool.title")}
              </SolidButton>
            }
          >
            <QuestPoolSettings />
          </ResponsiveNestedDrawer>
        </div>
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

      <section className={styles.profileSection}>
        <dl className={`${styles.profileMetrics} ${styles.ropeMetric}`}>
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
