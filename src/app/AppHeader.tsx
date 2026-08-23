import { motion } from "motion/react";
import { useMemo, useState, type RefObject } from "react";
import { useTranslation } from "react-i18next";
import { Drawer } from "vaul";
import { useShallow } from "zustand/react/shallow";
import { Logo } from "../assets/logo";
import { formatScore } from "../lib/format";
import { playSound } from "../lib/sound";
import { normalizeLanguage } from "../localization/i18n";
import { ProfileDrawer } from "../features/profile/components/ProfileDrawer/ProfileDrawer";
import { useQuestStore } from "../stores/useQuestStore";
import {
  DESKTOP_VIEWPORT_QUERY,
  useMediaQuery,
} from "../shared/hooks/useMediaQuery";
import { NAV_ENTRY_SPRING } from "../shared/motion/transitions";
import { CoinIcon } from "../shared/ui/Icons/Icons";
import { SolidButton } from "../shared/ui/SolidButton/SolidButton";
import styles from "../App.module.css";
import { useThemeChoice } from "./hooks/useThemeChoice";
import { AboutPanel } from "./AboutPanel";

const MOBILE_DRAWER_SNAP_POINTS = [0.78, 1];
const MOBILE_DEFAULT_SNAP_POINT = MOBILE_DRAWER_SNAP_POINTS[0];

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
  const desktop = useMediaQuery(DESKTOP_VIEWPORT_QUERY);
  const { changeTheme, themeChoice } = useThemeChoice();
  const [aboutOpen, setAboutOpen] = useState(false);
  const [aboutSnapPoint, setAboutSnapPoint] = useState<
    number | string | null
  >(MOBILE_DEFAULT_SNAP_POINT);
  const [profileOpen, setProfileOpen] = useState(false);
  const [profileSnapPoint, setProfileSnapPoint] = useState<
    number | string | null
  >(MOBILE_DEFAULT_SNAP_POINT);
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

  function handleAboutOpenChange(open: boolean) {
    if (open === aboutOpen) return;
    if (open && !desktop) setAboutSnapPoint(MOBILE_DEFAULT_SNAP_POINT);
    playSound(open ? "drawerOpen" : "drawerClose");
    setAboutOpen(open);
  }

  function handleProfileOpenChange(open: boolean) {
    if (open === profileOpen) return;
    if (open && !desktop) setProfileSnapPoint(MOBILE_DEFAULT_SNAP_POINT);
    playSound(open ? "drawerOpen" : "drawerClose");
    setProfileOpen(open);
  }

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
          <Drawer.Root
            activeSnapPoint={desktop ? undefined : aboutSnapPoint}
            setActiveSnapPoint={desktop ? undefined : setAboutSnapPoint}
            container={desktop ? undefined : mobileDrawerContainer}
            direction={desktop ? "left" : "bottom"}
            open={aboutOpen}
            onOpenChange={handleAboutOpenChange}
            snapPoints={desktop ? undefined : MOBILE_DRAWER_SNAP_POINTS}
            shouldScaleBackground={false}
          >
            <Drawer.Trigger asChild>
              <SolidButton
                data-active={aboutOpen || undefined}
                data-sound-click-skip
                type="button"
              >
                {t("ui.nav.about")}
              </SolidButton>
            </Drawer.Trigger>
            <Drawer.Portal>
              <Drawer.Overlay className={styles.drawerOverlay} />
              <Drawer.Content
                className={`${styles.floatingDrawer} ${styles.mobileSnapDrawer}`}
                data-direction={desktop ? "left" : "bottom"}
                data-mobile-snap={
                  desktop
                    ? undefined
                    : aboutSnapPoint === 1
                      ? "full"
                      : "default"
                }
              >
                {!desktop && <Drawer.Handle className={styles.drawerHandle} />}
                <AboutPanel />
              </Drawer.Content>
            </Drawer.Portal>
          </Drawer.Root>
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
          <Drawer.Root
            activeSnapPoint={desktop ? undefined : profileSnapPoint}
            setActiveSnapPoint={desktop ? undefined : setProfileSnapPoint}
            container={desktop ? undefined : mobileDrawerContainer}
            direction={desktop ? "right" : "bottom"}
            open={profileOpen}
            onOpenChange={handleProfileOpenChange}
            snapPoints={desktop ? undefined : MOBILE_DRAWER_SNAP_POINTS}
            shouldScaleBackground={false}
          >
            <div className={styles.profileTriggerImpact}>
              <Drawer.Trigger asChild>
                <SolidButton
                  ref={profileTriggerRef}
                  data-profile-trigger
                  data-active={profileOpen || undefined}
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
              </Drawer.Trigger>
            </div>
            <Drawer.Portal>
              <Drawer.Overlay className={styles.drawerOverlay} />
              <Drawer.Content
                className={`${styles.floatingDrawer} ${styles.mobileSnapDrawer} ${styles.profileFloatingDrawer}`}
                data-direction={desktop ? "right" : "bottom"}
                data-mobile-snap={
                  desktop
                    ? undefined
                    : profileSnapPoint === 1
                      ? "full"
                      : "default"
                }
              >
                {!desktop && <Drawer.Handle className={styles.drawerHandle} />}
                <ProfileDrawer
                  onDebugModeChange={setDebugMode}
                  onPurchaseRedRopes={purchaseRedRopes}
                  onThemeChange={changeTheme}
                  profile={profile}
                  stats={stats}
                  totalCoinsCollected={totalCoinsCollected}
                  themeChoice={themeChoice}
                />
              </Drawer.Content>
            </Drawer.Portal>
          </Drawer.Root>
        </div>
      </motion.div>
      </header>
      <div
        ref={setMobileDrawerContainer}
        className={styles.mobileDrawerContainer}
      />
    </>
  );
}
