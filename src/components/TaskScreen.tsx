import { AnimatePresence, LayoutGroup, motion } from "motion/react";
import { TextMorph } from "torph/react";
import type { HydratedActiveTask } from "../hooks/useTaskRun";
import type { TaskDefinition } from "../data/tasks";
import { ActiveTaskCard } from "./ActiveTaskCard";
import { TaskPreviewDeck } from "./TaskPreviewDeck";
import styles from "../App.module.css";

type Props = {
  activeTask: HydratedActiveTask | null;
  offeredTasks: TaskDefinition[];
  completedQuestCount: number;
  totalQuestCount: number;
  animateEntrance: boolean;
  reduceMotion: boolean;
  onSelect: (taskId: string) => void;
  onReplace: () => void;
  onComplete: (durationMs: number, gameTitle: string) => void;
};

export function TaskScreen({
  activeTask,
  offeredTasks,
  completedQuestCount,
  totalQuestCount,
  animateEntrance,
  reduceMotion,
  onSelect,
  onReplace,
  onComplete,
}: Props) {
  return (
    <section
      className={styles.screen}
      data-active={activeTask ? "true" : undefined}
      aria-labelledby="task-screen-title"
    >
      <h1 className={styles.srOnly} id="task-screen-title">
          <TextMorph
            as="span"
            disabled={reduceMotion}
            respectReducedMotion
            duration={300}
          >
            {activeTask ? "Current task" : "Choose a task"}
          </TextMorph>
      </h1>

      <LayoutGroup id="task-selection">
        <AnimatePresence initial={animateEntrance} mode="sync">
          {activeTask ? (
            <motion.div
              className={styles.activeWrap}
              key="active"
              initial={reduceMotion ? false : { opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{
                opacity: 0,
              }}
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : { duration: 0.18, ease: "easeOut" }
              }
            >
              <ActiveTaskCard
                item={activeTask}
                reduceMotion={reduceMotion}
                onReplace={onReplace}
                onComplete={onComplete}
              />
            </motion.div>
          ) : (
            <motion.div
              className={styles.deckWrap}
              key="deck"
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, scale: 0.985 }
              }
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 1, scale: 1 }}
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : { type: "spring", stiffness: 350, damping: 34, mass: 0.78 }
              }
            >
              <TaskPreviewDeck
                tasks={offeredTasks}
                completedQuestCount={completedQuestCount}
                totalQuestCount={totalQuestCount}
                animateEntrance={animateEntrance}
                reduceMotion={reduceMotion}
                onSelect={onSelect}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </LayoutGroup>
    </section>
  );
}
