import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Drawer } from "vaul";
import { useShallow } from "zustand/react/shallow";
import styles from "./App.module.css";
import { CoinIcon } from "./components/Icons";
import { HistoryScreen } from "./components/HistoryScreen";
import { InteractiveDotBackground } from "./components/InteractiveDotBackground";
import { ProfileDrawer } from "./components/ProfileDrawer";
import { SolidButton } from "./components/SolidButton";
import { TaskScreen } from "./components/TaskScreen";
import { AVATAR_MARK_BY_THEME, markAssetUrl } from "./data/questMarks";
import { formatScore } from "./lib/format";
import { playSound } from "./lib/sound";
import {
  applyThemeChoice,
  DARK_THEME_MEDIA_QUERY,
  readThemeChoice,
  saveThemeChoice,
  type ThemeChoice,
} from "./lib/theme";
import {
  hydrateCompletedQuest,
  hydrateQuest,
  localizeMood,
  localizeQuest,
} from "./localization/catalog";
import { normalizeLanguage } from "./localization/i18n";
import {
  MOOD_RESET_MS,
  SHUFFLE_COST,
  useQuestStore,
} from "./stores/useQuestStore";
import { Logo } from "./assets/logo";
import { WordmarkLogo } from "./assets/wordmark";

export function App() {
  const { i18n, t } = useTranslation();
  const language = normalizeLanguage(i18n.resolvedLanguage ?? i18n.language);
  const {
    completeQuest,
    completedSessions,
    currentSession,
    discardCurrentSession,
    editMood,
    legacyCompletionCount,
    moodSelectedAt,
    offeredQuestIds,
    pauseQuest,
    profile,
    purchaseRedRopes,
    refreshMoodWindow,
    replayQuest,
    revealQuest,
    returnCurrentSessionToSelection,
    resumeQuest,
    selectMood,
    selectedMoodId,
    setDebugMode,
    shuffleOffers,
    startQuest,
    stats,
  } = useQuestStore(
    useShallow((state) => ({
      completeQuest: state.completeQuest,
      completedSessions: state.completedSessions,
      currentSession: state.currentSession,
      discardCurrentSession: state.discardCurrentSession,
      editMood: state.editMood,
      legacyCompletionCount: state.legacyCompletionCount,
      moodSelectedAt: state.moodSelectedAt,
      offeredQuestIds: state.offeredQuestIds,
      pauseQuest: state.pauseQuest,
      profile: state.profile,
      purchaseRedRopes: state.purchaseRedRopes,
      refreshMoodWindow: state.refreshMoodWindow,
      replayQuest: state.replayQuest,
      revealQuest: state.revealQuest,
      returnCurrentSessionToSelection: state.returnCurrentSessionToSelection,
      resumeQuest: state.resumeQuest,
      selectMood: state.selectMood,
      selectedMoodId: state.selectedMoodId,
      setDebugMode: state.setDebugMode,
      shuffleOffers: state.shuffleOffers,
      startQuest: state.startQuest,
      stats: state.stats,
    })),
  );
  const reduceMotion = Boolean(useReducedMotion());
  const [themeChoice, setThemeChoice] = useState<ThemeChoice>(readThemeChoice);
  const [profileOpen, setProfileOpen] = useState(false);
  const [historyOpen, setHistoryOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [introComplete, setIntroComplete] = useState(reduceMotion);
  const [brandRotation, setBrandRotation] = useState(0);
  const [animatedCoinBalance, setAnimatedCoinBalance] = useState<number | null>(
    null,
  );
  const [coinPulse, setCoinPulse] = useState(0);
  const [profileCompactSnap, setProfileCompactSnap] = useState(() =>
    typeof window === "undefined"
      ? "640px"
      : `${Math.min(640, window.innerHeight)}px`,
  );
  const [profileActiveSnapPoint, setProfileActiveSnapPoint] = useState<
    number | string | null
  >(profileCompactSnap);
  const coinAnimationTargetRef = useRef<number | null>(null);
  const profileTriggerRef = useRef<HTMLButtonElement>(null);
  const desktop = useDesktopSheet();
  const currentQuest = currentSession
    ? hydrateQuest(currentSession.questId, completedSessions, language)
    : null;
  const selectedMood = selectedMoodId
    ? localizeMood(selectedMoodId, language)
    : null;
  const offeredQuests = useMemo(
    () =>
      offeredQuestIds.flatMap((id) => {
        const quest = localizeQuest(id, language);
        return quest ? [quest] : [];
      }),
    [language, offeredQuestIds],
  );
  const completedQuests = useMemo(
    () =>
      completedSessions.flatMap((completion) => {
        const quest = hydrateCompletedQuest(completion, language);
        return quest ? [quest] : [];
      }),
    [completedSessions, language],
  );
  const displayedCoins = animatedCoinBalance ?? profile.points;
  const formattedPoints = formatScore(displayedCoins, language);
  const totalCoinsCollected = useMemo(
    () =>
      completedSessions.reduce(
        (total, completion) => total + completion.pointsAwarded,
        0,
      ),
    [completedSessions],
  );
  const previousCompletions = useMemo(
    () =>
      currentSession
        ? completedSessions.filter(
            (completion) => completion.questId === currentSession.questId,
          )
        : [],
    [completedSessions, currentSession],
  );
  useEffect(() => {
    const media = window.matchMedia(DARK_THEME_MEDIA_QUERY);
    const applyTheme = () => applyThemeChoice(themeChoice, media.matches);

    applyTheme();
    media.addEventListener("change", applyTheme);
    return () => media.removeEventListener("change", applyTheme);
  }, [themeChoice]);

  useEffect(() => {
    if (reduceMotion) {
      setIntroComplete(true);
      return;
    }
    const timeout = window.setTimeout(() => setIntroComplete(true), 1000);
    return () => window.clearTimeout(timeout);
  }, [reduceMotion]);

  useEffect(() => {
    if (
      coinAnimationTargetRef.current !== null &&
      profile.points === coinAnimationTargetRef.current
    ) {
      coinAnimationTargetRef.current = null;
      setAnimatedCoinBalance(null);
    }
  }, [profile.points]);

  useEffect(() => {
    if (!profileOpen || desktop) return;

    const drawer = document.querySelector<HTMLElement>("[data-profile-drawer]");
    const header = drawer?.querySelector<HTMLElement>(
      "[data-profile-drawer-header]",
    );
    const body = drawer?.querySelector<HTMLElement>(
      "[data-profile-drawer-body]",
    );
    if (!drawer || !header || !body) return;

    const updateCompactSnap = () => {
      const naturalHeight = Math.ceil(header.scrollHeight + body.scrollHeight);
      const nextSnap = `${Math.min(naturalHeight, window.innerHeight)}px`;
      setProfileCompactSnap(nextSnap);
      setProfileActiveSnapPoint((current) =>
        current === 1 ? current : nextSnap,
      );
    };

    updateCompactSnap();
    const observer = new ResizeObserver(updateCompactSnap);
    observer.observe(header);
    observer.observe(body);
    window.addEventListener("resize", updateCompactSnap);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateCompactSnap);
    };
  }, [desktop, language, profileOpen]);

  useEffect(() => {
    const refresh = () => refreshMoodWindow();
    refresh();

    function handleVisibilityChange() {
      if (document.visibilityState === "visible") refresh();
    }

    window.addEventListener("focus", refresh);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    const remaining =
      currentSession || moodSelectedAt === null
        ? null
        : Math.max(0, moodSelectedAt + MOOD_RESET_MS - Date.now());
    const timeout =
      remaining === null
        ? null
        : window.setTimeout(refresh, Math.min(remaining + 25, 2_147_483_647));

    return () => {
      window.removeEventListener("focus", refresh);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (timeout !== null) window.clearTimeout(timeout);
    };
  }, [currentSession, moodSelectedAt, refreshMoodWindow]);

  function handleComplete(gameTitle: string) {
    completeQuest(gameTitle);
  }

  function handleCoinFlightStart(pointsAwarded: number) {
    coinAnimationTargetRef.current = profile.points + pointsAwarded;
    setAnimatedCoinBalance(profile.points);
  }

  function handleCoinHit(pointsReceived: number) {
    setAnimatedCoinBalance(profile.points + pointsReceived);
    setCoinPulse((pulse) => pulse + 1);
    playSound("coinHit");
  }

  function handleOpenHistory() {
    handleProfileOpenChange(false);
    setHistoryOpen(true);
  }

  function handleCloseHistory() {
    setHistoryOpen(false);
    window.requestAnimationFrame(() => profileTriggerRef.current?.focus());
  }

  function handleReplayQuest(questId: string) {
    if (!replayQuest(questId)) return;
    setHistoryOpen(false);
  }

  function handleAboutOpenChange(open: boolean) {
    if (open === aboutOpen) return;
    playSound(open ? "drawerOpen" : "drawerClose");
    setAboutOpen(open);
  }

  function handleProfileOpenChange(open: boolean) {
    if (open === profileOpen) return;
    playSound(open ? "drawerOpen" : "drawerClose");
    if (open && !desktop) setProfileActiveSnapPoint(profileCompactSnap);
    setProfileOpen(open);
  }

  function toggleLanguage() {
    void i18n.changeLanguage(language === "en" ? "de" : "en");
  }

  function handleThemeChange(choice: ThemeChoice) {
    saveThemeChoice(choice);
    applyThemeChoice(choice);
    setThemeChoice(choice);
  }

  const nextLanguage = language === "en" ? "de" : "en";
  const nextLanguageName = t(
    nextLanguage === "de" ? "ui.nav.german" : "ui.nav.english",
  );

  return (
    <div
      className={styles.app}
      data-screen={
        currentSession ? "active" : selectedMoodId ? "quests" : "moods"
      }
    >
      <InteractiveDotBackground reduceMotion={reduceMotion} />

      <a className={styles.skipLink} href="#main-content">
        {t("ui.nav.skipToContent")}
      </a>

      <header
        className={styles.topNavigation}
        aria-label={t("ui.nav.mainNavigation")}
      >
        <motion.div
          className={styles.navActionSlot}
          initial={reduceMotion ? false : { opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : {
                  type: "spring",
                  stiffness: 280,
                  damping: 24,
                  mass: 0.75,
                  delay: 0.04,
                }
          }
        >
          <div className={styles.navActionGroup}>
            <Drawer.Root
              direction={desktop ? "left" : "bottom"}
              open={aboutOpen}
              onOpenChange={handleAboutOpenChange}
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
                  className={`${styles.floatingDrawer} ${styles.aboutDrawer}`}
                  data-direction={desktop ? "left" : "bottom"}
                >
                  {!desktop && (
                    <div className={styles.drawerHandle} aria-hidden="true" />
                  )}
                  <AboutSidequest />
                </Drawer.Content>
              </Drawer.Portal>
            </Drawer.Root>
            <SolidButton
              type="button"
              aria-label={t("ui.nav.switchLanguage", {
                language: nextLanguageName,
              })}
              lang={nextLanguage}
              onClick={toggleLanguage}
            >
              {nextLanguage.toUpperCase()}
            </SolidButton>
          </div>
        </motion.div>

        {!historyOpen && (
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
        )}

        <motion.div
          className={styles.navActionSlot}
          initial={reduceMotion ? false : { opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : {
                  type: "spring",
                  stiffness: 280,
                  damping: 24,
                  mass: 0.75,
                  delay: 0.1,
                }
          }
        >
          <div className={styles.navActionGroup}>
            <Drawer.Root
              direction={desktop ? "right" : "bottom"}
              open={profileOpen}
              onOpenChange={handleProfileOpenChange}
              activeSnapPoint={desktop ? undefined : profileActiveSnapPoint}
              setActiveSnapPoint={
                desktop ? undefined : setProfileActiveSnapPoint
              }
              snapPoints={desktop ? undefined : [profileCompactSnap, 1]}
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
                  className={`${styles.floatingDrawer} ${styles.profileFloatingDrawer}`}
                  data-direction={desktop ? "right" : "bottom"}
                  onEscapeKeyDown={(event) => event.preventDefault()}
                >
                  {!desktop && (
                    <div className={styles.drawerHandle} aria-hidden="true" />
                  )}
                  <ProfileDrawer
                    onDebugModeChange={setDebugMode}
                    onOpenHistory={handleOpenHistory}
                    onPurchaseRedRopes={purchaseRedRopes}
                    onThemeChange={handleThemeChange}
                    open={profileOpen}
                    profile={profile}
                    reduceMotion={reduceMotion}
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

      <main className={styles.main} id="main-content">
        <AnimatePresence mode="wait" initial={false}>
          {historyOpen ? (
            <HistoryScreen
              completedQuests={completedQuests}
              directStartDisabled={Boolean(currentSession)}
              key="history"
              legacyCompletionCount={legacyCompletionCount}
              reduceMotion={reduceMotion}
              onClose={handleCloseHistory}
              onStartQuest={handleReplayQuest}
            />
          ) : (
            <motion.div
              className={styles.taskMainView}
              key="tasks"
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.18 }}
            >
              <TaskScreen
                currentQuest={currentQuest}
                currentSession={currentSession}
                previousCompletions={previousCompletions}
                selectedMood={selectedMood}
                offeredQuests={offeredQuests}
                points={profile.points}
                redRopes={profile.redRopes}
                debugMode={profile.debugMode}
                shuffleCost={SHUFFLE_COST}
                animateEntrance={!introComplete}
                reduceMotion={reduceMotion}
                onSelectMood={selectMood}
                onEditMood={editMood}
                onRevealQuest={revealQuest}
                onReturnToSelection={returnCurrentSessionToSelection}
                onShuffle={shuffleOffers}
                onDiscard={discardCurrentSession}
                onStart={startQuest}
                onPause={pauseQuest}
                onResume={resumeQuest}
                onComplete={handleComplete}
                onCoinFlightStart={handleCoinFlightStart}
                onCoinHit={handleCoinHit}
                onPurchaseRedRopes={purchaseRedRopes}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

function AboutSidequest() {
  const { t } = useTranslation();

  return (
    <section className={styles.aboutContent} aria-labelledby="about-title">
      <header className={styles.aboutIntro}>
        <Drawer.Title asChild>
          <h2 id="about-title">{t("ui.about.title")}</h2>
        </Drawer.Title>
        <Drawer.Description>{t("ui.about.description")}</Drawer.Description>
      </header>

      <div className={styles.aboutBody}>
        <section className={styles.aboutSection}>
          <ol className={styles.aboutSteps}>
            <li>{t("ui.about.step1")}</li>
            <li>{t("ui.about.step2")}</li>
            <li>{t("ui.about.step3")}</li>
            <li>{t("ui.about.step4")}</li>
            <li>{t("ui.about.step5")}</li>
          </ol>
        </section>

        <section className={styles.aboutSection}>
          <h3>{t("ui.about.lessChoosing")}</h3>
          <p>{t("ui.about.moodReset")}</p>
        </section>
      </div>

      <footer className={styles.aboutCredit}>
        <span>
          {t("ui.about.madeBy")}{" "}
          <a href="https://eduardlotz.de" rel="noreferrer" target="_blank">
            Eduard Lotz
          </a>
        </span>

        <WordmarkLogo width={80} />
      </footer>
    </section>
  );
}

function useDesktopSheet() {
  const [desktop, setDesktop] = useState(
    () => window.matchMedia("(min-width: 821px)").matches,
  );

  useEffect(() => {
    const media = window.matchMedia("(min-width: 821px)");
    const update = () => setDesktop(media.matches);
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return desktop;
}
