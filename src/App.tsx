import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import { Drawer } from "vaul";
import { useShallow } from "zustand/react/shallow";
import styles from "./App.module.css";
import { CheckIcon } from "./components/Icons";
import { HistoryScreen } from "./components/HistoryScreen";
import { TaskScreen } from "./components/TaskScreen";
import { QUESTS } from "./data/quests";
import { useQuestStore } from "./stores/useQuestStore";

type Toast = {
  id: string;
  title: string;
  points: number;
};

export function App() {
  const {
    activeRun,
    completeQuest,
    offeredQuestIds,
    pauseQuest,
    quests,
    replaceQuest,
    resumeQuest,
    selectQuest,
    shuffleQuests,
  } = useQuestStore(
    useShallow((state) => ({
      activeRun: state.activeRun,
      completeQuest: state.completeQuest,
      offeredQuestIds: state.offeredQuestIds,
      pauseQuest: state.pauseQuest,
      quests: state.quests,
      replaceQuest: state.replaceQuest,
      resumeQuest: state.resumeQuest,
      selectQuest: state.selectQuest,
      shuffleQuests: state.shuffleQuests,
    })),
  );
  const reduceMotion = Boolean(useReducedMotion());
  const [toast, setToast] = useState<Toast | null>(null);
  const [historyOpen, setHistoryOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [introComplete, setIntroComplete] = useState(reduceMotion);
  const [shuffling, setShuffling] = useState(false);
  const [brandRotation, setBrandRotation] = useState(0);
  const desktop = useDesktopSheet();
  const activeQuest = activeRun ? (quests[activeRun.questId] ?? null) : null;
  const offeredQuests = useMemo(
    () => offeredQuestIds.flatMap((id) => (quests[id] ? [quests[id]] : [])),
    [offeredQuestIds, quests],
  );
  const completedQuests = useMemo(
    () =>
      Object.values(quests)
        .filter((quest) => quest.completedGames.length > 0)
        .sort(
          (a, b) =>
            b.completedGames[0].achievedAt - a.completedGames[0].achievedAt,
        ),
    [quests],
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

  function handleComplete(durationMs: number, gameTitle: string) {
    if (!activeQuest || !activeRun) return;
    setToast({
      id: activeRun.assignmentId,
      title: activeQuest.title,
      points: activeQuest.points,
    });
    completeQuest(durationMs, gameTitle);
  }

  function handleShuffle() {
    if (activeRun || shuffling) return;
    setBrandRotation((rotation) => rotation + 360);
    if (reduceMotion) {
      shuffleQuests();
      return;
    }
    setShuffling(true);
  }

  function handleShuffleAnimationComplete() {
    if (!shuffling) return;
    shuffleQuests();
    setShuffling(false);
  }

  return (
    <div className={styles.app}>
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
            onOpenChange={setAboutOpen}
            shouldScaleBackground={false}
          >
            <Drawer.Trigger asChild>
              <button
                className={styles.navAction}
                data-active={aboutOpen || undefined}
                type="button"
              >
                About
              </button>
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
          type="button"
          aria-label="Shuffle quest choices"
          title="Shuffle quest choices"
          disabled={Boolean(activeRun) || shuffling}
          onClick={handleShuffle}
        >
          <motion.img
            src={`${import.meta.env.BASE_URL}sidequest-mark.svg`}
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
          <Drawer.Root
            direction={desktop ? "right" : "bottom"}
            open={historyOpen}
            onOpenChange={setHistoryOpen}
            shouldScaleBackground={false}
          >
            <Drawer.Trigger asChild>
              <button
                className={styles.navAction}
                data-active={historyOpen || undefined}
                type="button"
              >
                History
              </button>
            </Drawer.Trigger>
            <Drawer.Portal>
              <Drawer.Overlay className={styles.drawerOverlay} />
              <Drawer.Content
                className={`${styles.floatingDrawer} ${styles.historyDrawer}`}
                data-direction={desktop ? "right" : "bottom"}
              >
                <Drawer.Title className={styles.srOnly}>
                  Quest history
                </Drawer.Title>
                <Drawer.Description className={styles.srOnly}>
                  Completed sidequests with games and completion times.
                </Drawer.Description>
                {!desktop && (
                  <div className={styles.drawerHandle} aria-hidden="true" />
                )}
                <HistoryScreen
                  completedQuests={completedQuests}
                  reduceMotion={reduceMotion}
                  totalQuestCount={QUESTS.length}
                />
              </Drawer.Content>
            </Drawer.Portal>
          </Drawer.Root>
        </motion.div>
      </header>

      <main className={styles.main} id="main-content">
        <TaskScreen
          activeQuest={activeQuest}
          activeRun={activeRun}
          offeredQuests={offeredQuests}
          animateEntrance={!introComplete}
          reduceMotion={reduceMotion}
          shuffling={shuffling}
          onSelect={selectQuest}
          onShuffleAnimationComplete={handleShuffleAnimationComplete}
          onReplace={replaceQuest}
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
              aria-label={`Completed ${toast.title} for ${toast.points} points`}
            >
              <span aria-hidden="true">
                <CheckIcon />
              </span>
              <strong>Complete · +{toast.points} points</strong>
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
          A small companion app for your video games.
        </Drawer.Description>
      </header>

      <div className={styles.aboutBody}>
        <section className={styles.aboutSection}>
          {/* <h3>Start a quest, choose a game</h3> */}
          <ol className={styles.aboutSteps}>
            <li>Choose a sidequest</li>
            <li>Complete the objective in any game you like</li>
            <li>Stop the timer and enter the title of the video game</li>
          </ol>
        </section>

        <section className={styles.aboutSection}>
          <h3>Already completed the quest?</h3>
          <p>
            Pick another game for the same task or try to beat your own record.
          </p>
          <p>
            How difficult a task really is also depends on the game you choose.
          </p>
        </section>

        <section className={styles.aboutSection}>
          <h3>Don't like the quest?</h3>
          <p>Cut the red rope to cancel the quest and pick a new one.</p>
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
