import { motion } from "motion/react";
import { useMemo, useState, type RefObject } from "react";
import { useTranslation } from "react-i18next";
import { useShallow } from "zustand/react/shallow";
import { Logo } from "../assets/logo";
import { formatScore } from "../lib/format";
import { normalizeLanguage } from "../localization/i18n";
import { ProfileDrawer } from "../features/profile/components/ProfileDrawer/ProfileDrawer";
import { useQuestStore } from "../stores/useQuestStore";
import { NAV_ENTRY_SPRING } from "../shared/motion/transitions";
import { CoinIcon } from "../shared/ui/Icons/Icons";
import { SolidButton } from "../shared/ui/SolidButton/SolidButton";
import {
  ResponsiveDrawer,
  ResponsiveDrawerContainer,
} from "../shared/ui/ResponsiveDrawer/ResponsiveDrawer";
import styles from "./AppHeader.module.css";
import { useThemeChoice } from "./hooks/useThemeChoice";
import { AboutPanel } from "./AboutPanel";

type Props = {
  displayedCoins: number;
  profileTriggerRef: RefObject<HTMLButtonElement | null>;
  coinPulse: number;
  reduceMotion: boolean;
};

export function AppHeader({
  displayedCoins,
  profileTriggerRef,
  coinPulse,
  reduceMotion,
}: Props) {
  const { i18n, t } = useTranslation();
  const language = normalizeLanguage(i18n.resolvedLanguage ?? i18n.language);
  const {
    completedSessions,
    profile,
    purchaseRedRopes,
    setDebugMode,
    stats,
  } = useQuestStore(
    useShallow((state) => ({
      completedSessions: state.completedSessions,
      profile: state.profile,
      purchaseRedRopes: state.purchaseRedRopes,
      setDebugMode: state.setDebugMode,
      stats: state.stats,
    })),
  );
  const { changeTheme, themeChoice } = useThemeChoice();
  const [mobileDrawerContainer, setMobileDrawerContainer] =
    useState<HTMLDivElement | null>(null);
  const [brandRotation, setBrandRotation] = useState(0);
  const totalCoinsCollected = useMemo(
    () =>
      completedSessions.reduce(
        (total, completion) => total + completion.pointsAwarded,
        0,
      ),
    [completedSessions],
  );
  const formattedPoints = formatScore(displayedCoins, language);
  const nextLanguage = language === "en" ? "de" : "en";
  const nextLanguageName = t(
    nextLanguage === "de" ? "ui.nav.german" : "ui.nav.english",
  );

  return (
    <>
      <header
        className={styles.topNavigation}
        aria-label={t("ui.nav.mainNavigation")}
      >
        <motion.div
          className={styles.navActionSlot}
          initial={reduceMotion ? false : { opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={
            reduceMotion ? { duration: 0 } : { ...NAV_ENTRY_SPRING, delay: 0.04 }
          }
        >
          <div className={styles.navActionGroup}>
            <ResponsiveDrawer
              desktopDirection="left"
              mobileContainer={mobileDrawerContainer}
              variant="about"
              trigger={
                <SolidButton
                  data-sound-click-skip
                  type="button"
                >
                  {t("ui.nav.about")}
                </SolidButton>
              }
            >
              <AboutPanel reduceMotion={reduceMotion} />
            </ResponsiveDrawer>
            <SolidButton
              type="button"
              aria-label={t("ui.nav.switchLanguage", {
                language: nextLanguageName,
              })}
              lang={nextLanguage}
              onClick={() => void i18n.changeLanguage(nextLanguage)}
            >
              {nextLanguage.toUpperCase()}
            </SolidButton>
          </div>
        </motion.div>

        <button
          className={styles.brandMark}
          data-sound-click-skip
          type="button"
          aria-label={t("ui.nav.spinLogo")}
          title={t("ui.nav.spinLogo")}
          onClick={() => setBrandRotation((rotation) => rotation + 360)}
        >
          <motion.div
            animate={{ rotate: brandRotation }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : {
                    type: "spring",
                    stiffness: 190,
                    damping: 18,
                    mass: 0.72,
                  }
            }
          >
            <Logo />
          </motion.div>
        </button>

        <motion.div
          className={styles.navActionSlot}
          initial={reduceMotion ? false : { opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={
            reduceMotion ? { duration: 0 } : { ...NAV_ENTRY_SPRING, delay: 0.1 }
          }
        >
          <div className={styles.navActionGroup}>
            <ResponsiveDrawer
              desktopDirection="right"
              mobileContainer={mobileDrawerContainer}
              variant="profile"
              trigger={
                <SolidButton
                  ref={profileTriggerRef}
                  className={styles.profileTriggerImpact}
                  data-profile-trigger
                  data-sound-click-skip
                  type="button"
                  aria-label={t("ui.nav.profileLabel", {
                    points: formattedPoints,
                  })}
                >
                  <span className={styles.coinTriggerBalance}>
                    <motion.strong
                      key={`coin-label-${coinPulse}`}
                      initial={{ scaleX: 1 }}
                      animate={
                        coinPulse === 0 || reduceMotion
                          ? { scaleX: 1 }
                          : { scaleX: [1, 1.18, 0.94, 1.035, 1] }
                      }
                      transition={{ duration: reduceMotion ? 0 : 0.38 }}
                    >
                      {formattedPoints}
                    </motion.strong>
                    <motion.span
                      className={styles.coinTriggerIconImpact}
                      key={`coin-icon-${coinPulse}`}
                      initial={{ scale: 1 }}
                      animate={
                        coinPulse === 0 || reduceMotion
                          ? { scale: 1 }
                          : { scale: [1, 1.18, 0.94, 1.035, 1] }
                      }
                      transition={{ duration: reduceMotion ? 0 : 0.38 }}
                    >
                      <CoinIcon />
                    </motion.span>
                  </span>
                </SolidButton>
              }
            >
              <ProfileDrawer
                onDebugModeChange={setDebugMode}
                onPurchaseRedRopes={purchaseRedRopes}
                onThemeChange={changeTheme}
                profile={profile}
                stats={stats}
                totalCoinsCollected={totalCoinsCollected}
                themeChoice={themeChoice}
              />
            </ResponsiveDrawer>
          </div>
        </motion.div>
      </header>
      <ResponsiveDrawerContainer setContainer={setMobileDrawerContainer} />
    </>
  );
}
