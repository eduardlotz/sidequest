import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import { Drawer } from "vaul";
import { useShallow } from "zustand/react/shallow";
import styles from "./App.module.css";
import { CheckIcon } from "./components/Icons";
import { InteractiveDotBackground } from "./components/InteractiveDotBackground";
import { ProfileDrawer } from "./components/ProfileDrawer";
import { SolidButton } from "./components/SolidButton";
import { TaskScreen } from "./components/TaskScreen";
import { MOODS_BY_ID } from "./data/moods";
import { QUESTS_BY_ID } from "./data/quests";
import { AVATAR_MARK_BY_THEME, markAssetUrl } from "./data/questMarks";
import { formatScore } from "./lib/format";
import { playSound } from "./lib/sound";
import {
  MOOD_RESET_MS,
  SHUFFLE_COST,
  hydrateCompletedQuest,
  hydrateQuest,
  useQuestStore,
} from "./stores/useQuestStore";

type Toast = {
  id: string;
  title: string;
};

export function App() {
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
    refreshMoodWindow,
    revealQuest,
    resumeQuest,
    selectMood,
    selectedMoodId,
    shuffleOffers,
    startQuest,
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
      refreshMoodWindow: state.refreshMoodWindow,
      revealQuest: state.revealQuest,
      resumeQuest: state.resumeQuest,
      selectMood: state.selectMood,
      selectedMoodId: state.selectedMoodId,
      shuffleOffers: state.shuffleOffers,
      startQuest: state.startQuest,
    })),
  );
  const reduceMotion = Boolean(useReducedMotion());
  const [toast, setToast] = useState<Toast | null>(null);
  const [profileOpen, setProfileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [introComplete, setIntroComplete] = useState(reduceMotion);
  const [brandRotation, setBrandRotation] = useState(0);
  const desktop = useDesktopSheet();
  const currentQuest = currentSession
    ? hydrateQuest(currentSession.questId, completedSessions)
    : null;
  const selectedMood = selectedMoodId
    ? MOODS_BY_ID[selectedMoodId] ?? null
    : null;
  const offeredQuests = useMemo(
    () =>
      offeredQuestIds.flatMap((id) => {
        const quest = QUESTS_BY_ID[id];
        return quest ? [quest] : [];
      }),
    [offeredQuestIds],
  );
  const completedQuests = useMemo(
    () =>
      completedSessions.flatMap((completion) => {
        const quest = hydrateCompletedQuest(completion);
        return quest ? [quest] : [];
      }),
    [completedSessions],
  );

  useEffect(() => {
    if (!toast) return;
    const timeout = window.setTimeout(() => setToast(null), 2500);
    return () => window.clearTimeout(timeout);
  }, [toast]);

  useEffect(() => {
    if (reduceMotion) {
      setIntroComplete(true);
      return;
    }
    const timeout = window.setTimeout(() => setIntroComplete(true), 1000);
    return () => window.clearTimeout(timeout);
  }, [reduceMotion]);

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

  function handleComplete(durationMs: number) {
    if (!currentQuest || !currentSession) return;
    const nextToast = {
      id: currentSession.sessionId,
      title: currentQuest.title,
    };
    if (completeQuest(durationMs)) setToast(nextToast);
  }

  function handleAboutOpenChange(open: boolean) {
    if (open === aboutOpen) return;
    playSound(open ? "drawerOpen" : "drawerClose");
    setAboutOpen(open);
  }

  function handleProfileOpenChange(open: boolean) {
    if (open === profileOpen) return;
    playSound(open ? "drawerOpen" : "drawerClose");
    setProfileOpen(open);
  }

  return (
    <div className={styles.app}>
      <InteractiveDotBackground reduceMotion={reduceMotion} />

      <a className={styles.skipLink} href="#main-content">
        Skip to content
      </a>

      <header className={styles.topNavigation} aria-label="Main navigation">
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
                About
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
        </motion.div>

        <button
          className={styles.brandMark}
          data-sound-click-skip
          type="button"
          aria-label="Spin Sidequest logo"
          title="Spin Sidequest logo"
          onClick={() => setBrandRotation((rotation) => rotation + 360)}
        >
          <motion.img
            src={markAssetUrl(AVATAR_MARK_BY_THEME[profile.avatarTheme])}
            alt=""
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
          />
        </button>

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
              shouldScaleBackground={false}
            >
              <Drawer.Trigger asChild>
                <SolidButton
                  data-active={profileOpen || undefined}
                  data-sound-click-skip
                  type="button"
                  aria-label={`Your profile, ${formatScore(profile.points)} points`}
                >
                  {formatScore(profile.points)} points
                </SolidButton>
              </Drawer.Trigger>
              <Drawer.Portal>
                <Drawer.Overlay className={styles.drawerOverlay} />
                <Drawer.Content
                  className={styles.floatingDrawer}
                  data-direction={desktop ? "right" : "bottom"}
                >
                  {!desktop && (
                    <div className={styles.drawerHandle} aria-hidden="true" />
                  )}
                  <ProfileDrawer
                    completedQuests={completedQuests}
                    legacyCompletionCount={legacyCompletionCount}
                    open={profileOpen}
                    profile={profile}
                    reduceMotion={reduceMotion}
                  />
                </Drawer.Content>
              </Drawer.Portal>
            </Drawer.Root>
          </div>
        </motion.div>
      </header>

      <main className={styles.main} id="main-content">
        <TaskScreen
          currentQuest={currentQuest}
          currentSession={currentSession}
          selectedMood={selectedMood}
          offeredQuests={offeredQuests}
          points={profile.points}
          shuffleCost={SHUFFLE_COST}
          animateEntrance={!introComplete}
          reduceMotion={reduceMotion}
          onSelectMood={selectMood}
          onEditMood={editMood}
          onRevealQuest={revealQuest}
          onShuffle={shuffleOffers}
          onDiscard={discardCurrentSession}
          onStart={startQuest}
          onPause={pauseQuest}
          onResume={resumeQuest}
          onComplete={handleComplete}
        />
      </main>

      <div className={styles.toastRegion} aria-live="polite" aria-atomic="true">
        <AnimatePresence>
          {toast && (
            <motion.div
              className={styles.toast}
              key={toast.id}
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
              transition={{ duration: reduceMotion ? 0 : 0.18 }}
              role="status"
              aria-label={`Quest complete: ${toast.title}`}
            >
              <span aria-hidden="true">
                <CheckIcon />
              </span>
              <strong>Quest complete</strong>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function AboutSidequest() {
  return (
    <section className={styles.aboutContent} aria-labelledby="about-title">
      <header className={styles.aboutIntro}>
        <Drawer.Title asChild>
          <h2 id="about-title">Welcome to sidequest</h2>
        </Drawer.Title>
        <Drawer.Description>
          A small companion for choosing what to play.
        </Drawer.Description>
      </header>

      <div className={styles.aboutBody}>
        <section className={styles.aboutSection}>
          <ol className={styles.aboutSteps}>
            <li>Choose how you feel right now</li>
            <li>Pick one of the three quests that brings a game to mind</li>
            <li>Use the quest-specific tips and start the rope timer</li>
            <li>Pause when you are ready to complete the quest</li>
            <li>Spend earned points when you need a fresh set of cards</li>
          </ol>
        </section>

        <section className={styles.aboutSection}>
          <h3>Less choosing, more playing</h3>
          <p>
            Your mood resets after four hours, while points and completed
            sessions stay in your local profile.
          </p>
        </section>
      </div>

      <footer className={styles.aboutCredit}>
        Made by{" "}
        <a href="https://eduardlotz.de" rel="noreferrer" target="_blank">
          Eduard Lotz
        </a>
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
