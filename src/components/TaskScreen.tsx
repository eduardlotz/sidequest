import { AnimatePresence, LayoutGroup, motion } from "motion/react";
import { useRef } from "react";
import { TextMorph } from "torph/react";
import type {
  CompletionEntry,
  HydratedActiveTask,
} from "../hooks/useTaskRun";
import type { TaskDefinition } from "../data/tasks";
import { ActiveTaskCard } from "./ActiveTaskCard";
import { TaskPreviewDeck } from "./TaskPreviewDeck";
import styles from "../App.module.css";

type Props = {
  activeTask: HydratedActiveTask | null;
  activeTaskCompletions: CompletionEntry[];
  offeredTasks: TaskDefinition[];
  animateEntrance: boolean;
  reduceMotion: boolean;
  shuffling: boolean;
  onSelect: (taskId: string) => void;
  onShuffleAnimationComplete: () => void;
  onReplace: () => void;
  onPause: (pausedAt: number) => void;
  onResume: (resumedAt: number) => void;
  onComplete: (durationMs: number, gameTitle: string) => void;
};

export function TaskScreen({
  activeTask,
  activeTaskCompletions,
  offeredTasks,
  animateEntrance,
  reduceMotion,
  shuffling,
  onSelect,
  onShuffleAnimationComplete,
  onReplace,
  onPause,
  onResume,
  onComplete,
}: Props) {
  const isActive = Boolean(activeTask);
  const wasActiveRef = useRef(isActive);
  const deckSessionRef = useRef(0);
  if (wasActiveRef.current && !isActive) {
    deckSessionRef.current += 1;
  }
  wasActiveRef.current = isActive;

  const deckKey = `deck-session-${deckSessionRef.current}`;
  const activeKey = activeTask
    ? `active-${activeTask.assignment.assignmentId}`
    : "active";

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
              key={activeKey}
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
                previousCompletions={activeTaskCompletions}
                reduceMotion={reduceMotion}
                onReplace={onReplace}
                onPause={onPause}
                onResume={onResume}
                onComplete={onComplete}
              />
            </motion.div>
          ) : (
            <motion.div
              className={styles.deckWrap}
              key={deckKey}
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, scale: 0.985 }
              }
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 1, scale: 1, pointerEvents: "none" }}
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : { type: "spring", stiffness: 350, damping: 34, mass: 0.78 }
              }
            >
              <TaskPreviewDeck
                tasks={offeredTasks}
                animateEntrance={animateEntrance}
                reduceMotion={reduceMotion}
                shuffling={shuffling}
                onSelect={onSelect}
                onShuffleAnimationComplete={onShuffleAnimationComplete}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </LayoutGroup>
    </section>
  );
}
