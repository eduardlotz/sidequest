import { AnimatePresence, LayoutGroup, motion } from "motion/react";
import { useMemo } from "react";
import {
  MOODS,
  type MoodDefinition,
  type MoodId,
  type ObjectiveDefinition,
  type PlayerMotivation,
} from "../data/decks";
import {
  getCardAccentStyle,
  getMoodAccentStyle,
} from "../data/questColors";
import type { Quest, QuestSession } from "../stores/useQuestStore";
import { ActiveTaskCard } from "./ActiveTaskCard";
import { ArcDeck, type ArcDeckItem } from "./ArcDeck";
import styles from "../App.module.css";

type Props = {
  currentQuest: Quest | null;
  currentSession: QuestSession | null;
  selectedMood: MoodDefinition | null;
  objectives: readonly ObjectiveDefinition[];
  animateEntrance: boolean;
  reduceMotion: boolean;
  onSelectMood: (moodId: MoodId) => void;
  onEditMood: () => void;
  onSelectObjective: (objectiveId: string) => void;
  onToggleModifier: (modifierId: string) => void;
  onDiscard: () => void;
  onStart: (startedAt: number) => void;
  onPause: (pausedAt: number) => void;
  onResume: (resumedAt: number) => void;
  onComplete: (durationMs: number) => void;
};

const MOOD_MOTIVATION: Record<MoodId, PlayerMotivation> = {
  relax: "experience",
  adventure: "discover",
  challenge: "overcome",
  story: "experience",
  strategy: "improve",
  creative: "create",
  competitive: "overcome",
  chaos: "discover",
};

export function TaskScreen({
  currentQuest,
  currentSession,
  selectedMood,
  objectives,
  animateEntrance,
  reduceMotion,
  onSelectMood,
  onEditMood,
  onSelectObjective,
  onToggleModifier,
  onDiscard,
  onStart,
  onPause,
  onResume,
  onComplete,
}: Props) {
  const isActive = Boolean(currentQuest && currentSession);
  const moodItems = useMemo<ArcDeckItem[]>(
    () =>
      MOODS.map((mood) => ({
        id: mood.id,
        title: mood.displayName,
        description: mood.description,
        kind: "mood",
        motivation: MOOD_MOTIVATION[mood.id],
        style: getMoodAccentStyle(mood.id),
      })),
    [],
  );
  const objectiveItems = useMemo<ArcDeckItem[]>(
    () =>
      selectedMood
          ? objectives.map((objective) => ({
            id: objective.id,
            title: objective.title,
            hint: objective.hint,
            meta: `${objective.sessionMinutes[0]}–${objective.sessionMinutes[1]}`,
            ariaLabel: `${objective.hint} ${objective.sessionMinutes[0]} to ${objective.sessionMinutes[1]} minutes`,
            kind: "objective",
            motivation: objective.motivation,
            style: getCardAccentStyle(objective.id),
            layoutId: `task-card-${objective.id}`,
          }))
        : [],
    [objectives, selectedMood],
  );

  return (
    <section
      className={styles.screen}
      data-active={isActive ? "true" : undefined}
      aria-labelledby="task-screen-title"
    >
      <h1 className={styles.srOnly} id="task-screen-title">
        {isActive
          ? "Current quest"
          : selectedMood
            ? "Choose an objective"
            : "Choose a mood"}
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
                reduceMotion={reduceMotion}
                onToggleModifier={onToggleModifier}
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
              key={selectedMood ? `objectives-${selectedMood.id}` : "moods"}
              initial={
                reduceMotion ? false : { opacity: 0, scale: 0.985, y: 12 }
              }
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{
                opacity: 0,
                scale: reduceMotion ? 1 : 0.99,
                y: reduceMotion ? 0 : -10,
                pointerEvents: "none",
              }}
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : { type: "spring", stiffness: 350, damping: 34, mass: 0.78 }
              }
            >
              <div className={styles.selectionScreen}>
                <header className={styles.selectionHeader}>
                  {selectedMood ? (
                    <>
                      <div className={styles.selectedMood}>
                        <strong>{selectedMood.displayName}</strong>
                        <button type="button" onClick={onEditMood}>
                          Edit
                        </button>
                      </div>
                      <h2>What do you want to do?</h2>
                    </>
                  ) : (
                    <h2>How do you want to play?</h2>
                  )}
                </header>

                <ArcDeck
                  items={selectedMood ? objectiveItems : moodItems}
                  label={
                    selectedMood
                      ? `Objectives for ${selectedMood.displayName}`
                      : "Choose a mood"
                  }
                  selectLabel={selectedMood ? "Start objective" : "Choose mood"}
                  reduceMotion={reduceMotion}
                  onSelect={(id) => {
                    if (selectedMood) onSelectObjective(id);
                    else onSelectMood(id as MoodId);
                  }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </LayoutGroup>
    </section>
  );
}
