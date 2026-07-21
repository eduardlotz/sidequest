import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { Drawer } from "vaul";
import styles from "./App.module.css";
import { CheckIcon } from "./components/Icons";
import { HistoryScreen } from "./components/HistoryScreen";
import { TaskScreen } from "./components/TaskScreen";
import { TASKS } from "./data/tasks";
import { useTaskRun } from "./hooks/useTaskRun";

type Toast = {
  id: string;
  title: string;
  points: number;
};

export function App() {
  const {
    activeTask,
    completedTasks,
    offeredTasks,
    selectTask,
    replaceTask,
    completeTask,
  } = useTaskRun();
  const reduceMotion = Boolean(useReducedMotion());
  const [toast, setToast] = useState<Toast | null>(null);
  const [historyOpen, setHistoryOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [introComplete, setIntroComplete] = useState(reduceMotion);
  const desktop = useDesktopSheet();
  const completedQuestCount = completedTasks.length;

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
    if (!activeTask) return;
    setToast({
      id: activeTask.assignment.assignmentId,
      title: activeTask.task.title,
      points: activeTask.task.points,
    });
    completeTask(durationMs, gameTitle);
  }

  return (
    <div className={styles.app}>
      <a className={styles.skipLink} href="#main-content">Skip to content</a>

      <header className={styles.topNavigation} aria-label="Main navigation">
        <motion.div
          className={styles.navActionSlot}
          initial={reduceMotion ? false : { opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={reduceMotion ? { duration: 0 } : {
            type: "spring",
            stiffness: 280,
            damping: 24,
            mass: 0.75,
            delay: 0.04,
          }}
        >
          <Drawer.Root
            direction={desktop ? "left" : "bottom"}
            open={aboutOpen}
            onOpenChange={setAboutOpen}
            shouldScaleBackground={false}
          >
            <Drawer.Trigger asChild>
              <button className={styles.navAction} type="button">
                How does it work?
              </button>
            </Drawer.Trigger>
            <Drawer.Portal>
              <Drawer.Overlay className={styles.drawerOverlay} />
              <Drawer.Content
                className={`${styles.floatingDrawer} ${styles.aboutDrawer}`}
                data-direction={desktop ? "left" : "bottom"}
              >
                {!desktop && <div className={styles.drawerHandle} aria-hidden="true" />}
                <AboutSidequest />
              </Drawer.Content>
            </Drawer.Portal>
          </Drawer.Root>
        </motion.div>

        <span className={styles.brandMark} aria-hidden="true">
          <img src={`${import.meta.env.BASE_URL}sidequest-mark.svg`} alt="" />
        </span>

        <motion.div
          className={styles.navActionSlot}
          initial={reduceMotion ? false : { opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={reduceMotion ? { duration: 0 } : {
            type: "spring",
            stiffness: 280,
            damping: 24,
            mass: 0.75,
            delay: 0.1,
          }}
        >
          <Drawer.Root
            direction={desktop ? "right" : "bottom"}
            open={historyOpen}
            onOpenChange={setHistoryOpen}
            shouldScaleBackground={false}
          >
            <Drawer.Trigger asChild>
              <button className={styles.navAction} type="button">
                History
              </button>
            </Drawer.Trigger>
            <Drawer.Portal>
              <Drawer.Overlay className={styles.drawerOverlay} />
              <Drawer.Content
                className={`${styles.floatingDrawer} ${styles.historyDrawer}`}
                data-direction={desktop ? "right" : "bottom"}
              >
                <Drawer.Title className={styles.srOnly}>Quest history</Drawer.Title>
                <Drawer.Description className={styles.srOnly}>
                  Completed sidequests with games and completion times.
                </Drawer.Description>
                {!desktop && <div className={styles.drawerHandle} aria-hidden="true" />}
                <HistoryScreen
                  completedTasks={completedTasks}
                  reduceMotion={reduceMotion}
                  totalTaskCount={TASKS.length}
                />
              </Drawer.Content>
            </Drawer.Portal>
          </Drawer.Root>
        </motion.div>
      </header>

      <main className={styles.main} id="main-content">
        <TaskScreen
          activeTask={activeTask}
          offeredTasks={offeredTasks}
          completedQuestCount={completedQuestCount}
          totalQuestCount={TASKS.length}
          animateEntrance={!introComplete}
          reduceMotion={reduceMotion}
          onSelect={selectTask}
          onReplace={replaceTask}
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
              <span aria-hidden="true"><CheckIcon /></span>
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
      <Drawer.Title asChild>
        <h2 id="about-title">How it works</h2>
      </Drawer.Title>
      <Drawer.Description>
        Choose a sidequest and turn any gaming session into a small adventure.
      </Drawer.Description>
      <ol className={styles.aboutSteps}>
        <li>
          <span>1</span>
          <div><strong>Choose a quest</strong><p>Pick an easy, medium, or hard sidequest.</p></div>
        </li>
        <li>
          <span>2</span>
          <div><strong>Start the timer</strong><p>Play until you complete the objective.</p></div>
        </li>
        <li>
          <span>3</span>
          <div><strong>Save your result</strong><p>Add the game you played. Every repeat stays grouped under the same quest.</p></div>
        </li>
      </ol>
    </section>
  );
}

function useDesktopSheet() {
  const [desktop, setDesktop] = useState(() => window.matchMedia("(min-width: 821px)").matches);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 821px)");
    const update = () => setDesktop(media.matches);
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return desktop;
}
