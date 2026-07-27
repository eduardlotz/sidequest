import { AnimatePresence, LayoutGroup, motion } from "motion/react";
import { useRef } from "react";
import type { Quest, QuestSession } from "../stores/useQuestStore";
import { ActiveTaskCard } from "./ActiveTaskCard";
import { TaskPreviewDeck } from "./TaskPreviewDeck";
import styles from "../App.module.css";

type Props = {
  currentQuest: Quest | null;
  currentSession: QuestSession | null;
  offeredQuests: Quest[];
  animateEntrance: boolean;
  reduceMotion: boolean;
  onReveal: (questId: string) => void;
  onDiscard: () => void;
  onStart: (startedAt: number) => void;
  onPause: (pausedAt: number) => void;
  onResume: (resumedAt: number) => void;
  onComplete: (durationMs: number, gameTitle: string) => void;
};

export function TaskScreen({
  currentQuest,
  currentSession,
  offeredQuests,
  animateEntrance,
  reduceMotion,
  onReveal,
  onDiscard,
  onStart,
  onPause,
  onResume,
  onComplete,
}: Props) {
  const isActive = Boolean(currentQuest && currentSession);
  const wasActiveRef = useRef(isActive);
  const deckSessionRef = useRef(0);
  if (wasActiveRef.current && !isActive) {
    deckSessionRef.current += 1;
  }
  wasActiveRef.current = isActive;

  return (
    <section
      className={styles.screen}
      data-active={isActive ? "true" : undefined}
      aria-labelledby="task-screen-title"
    >
      {/* TODO: fix this mess */}
      <h1 className={styles.srOnly} id="task-screen-title">
        {isActive ? "Current quest" : "Choose a quest"}
      </h1>

      <LayoutGroup id="task-selection">
        <AnimatePresence initial={animateEntrance} mode="sync">
          {currentQuest && currentSession ? (
            <motion.div
              className={styles.activeWrap}
              key={`active-${currentSession.sessionId}`}
              initial={reduceMotion ? false : { opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : { duration: 0.18, ease: "easeOut" }
              }
            >
              <ActiveTaskCard
                quest={currentQuest}
                session={currentSession}
                previousCompletions={currentQuest.completedGames}
                reduceMotion={reduceMotion}
                onDiscard={onDiscard}
                onStart={onStart}
                onPause={onPause}
                onResume={onResume}
                onComplete={onComplete}
              />
            </motion.div>
          ) : (
            <motion.div
              className={styles.deckWrap}
              key={`deck-session-${deckSessionRef.current}`}
              initial={reduceMotion ? false : { opacity: 0, scale: 0.985 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 1, scale: 1, pointerEvents: "none" }}
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : { type: "spring", stiffness: 350, damping: 34, mass: 0.78 }
              }
            >
              <TaskPreviewDeck
                quests={offeredQuests}
                animateEntrance={animateEntrance}
                reduceMotion={reduceMotion}
                onReveal={onReveal}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </LayoutGroup>
    </section>
  );
}
