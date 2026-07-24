import { arc, motion } from "motion/react";
import { useState } from "react";
import type { TaskDefinition } from "../data/tasks";
import { useTiltEffect } from "../hooks/useTiltEffect";
import { DifficultyDots } from "./DifficultyDots";
import styles from "../App.module.css";

type Props = {
  tasks: TaskDefinition[];
  completedQuestCount: number;
  totalQuestCount: number;
  animateEntrance: boolean;
  reduceMotion: boolean;
  onSelect: (taskId: string) => void;
};

type CardProps = {
  task: TaskDefinition;
  index: number;
  reduceMotion: boolean;
  selected: boolean;
  selectionStarted: boolean;
  animateEntrance: boolean;
  onSelect: (taskId: string) => void;
};

const cardRotations = [-9, 0, 9];
const selectionArc = arc({
  strength: 0.2,
  peak: 0.52,
  direction: "cw",
});

export function TaskPreviewDeck({
  tasks,
  completedQuestCount,
  totalQuestCount,
  animateEntrance,
  reduceMotion,
  onSelect,
}: Props) {
  const [shouldAnimateEntrance] = useState(animateEntrance);
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);
  const completedPercentage =
    totalQuestCount > 0
      ? Math.round((completedQuestCount / totalQuestCount) * 100)
      : 0;

  function selectCard(taskId: string) {
    if (selectedTaskId) return;
    setSelectedTaskId(taskId);
    window.requestAnimationFrame(() => onSelect(taskId));
  }

  return (
    <div className={styles.previewState}>
      <header className={styles.deckIntro}>
        <motion.p
          className={styles.completionText}
          initial={
            reduceMotion || !shouldAnimateEntrance
              ? false
              : { opacity: 0, y: -10 }
          }
          animate={{ opacity: 1, y: 0 }}
          exit={
            reduceMotion
              ? { opacity: 0 }
              : {
                  opacity: 0,
                  y: -8,
                  transition: { duration: 0.13, ease: [0.4, 0, 1, 1] },
                }
          }
          transition={
            reduceMotion
              ? { duration: 0 }
              : {
                  type: "spring",
                  stiffness: 270,
                  damping: 24,
                  mass: 0.72,
                  delay: shouldAnimateEntrance ? 0.12 : 0,
                }
          }
        >
          <span>You&apos;ve completed</span>
          <strong>{completedPercentage}%</strong>
          <span>of all</span>
          <span>
            <strong>sidequests</strong>.
          </span>
        </motion.p>
        <motion.h2
          initial={
            reduceMotion || !shouldAnimateEntrance
              ? false
              : { opacity: 0, y: -12 }
          }
          animate={{ opacity: 1, y: 0 }}
          exit={
            reduceMotion
              ? { opacity: 0 }
              : {
                  opacity: 0,
                  y: -12,
                  transition: {
                    duration: 0.15,
                    delay: 0.025,
                    ease: [0.4, 0, 1, 1],
                  },
                }
          }
          transition={
            reduceMotion
              ? { duration: 0 }
              : {
                  type: "spring",
                  stiffness: 250,
                  damping: 23,
                  mass: 0.8,
                  delay: shouldAnimateEntrance ? 0.19 : 0,
                }
          }
        >
          Choose your next sidequest
        </motion.h2>
      </header>
      <div className={styles.deck} aria-label="Quest choices">
        {tasks.map((task, index) => (
          <div
            className={styles.previewCardSlot}
            data-position={
              index === 0 ? "left" : index === 2 ? "right" : "center"
            }
            key={task.id}
          >
            <PreviewTaskCard
              task={task}
              index={index}
              reduceMotion={reduceMotion}
              selected={selectedTaskId === task.id}
              selectionStarted={selectedTaskId !== null}
              animateEntrance={shouldAnimateEntrance}
              onSelect={selectCard}
            />
          </div>
        ))}
      </div>
      <motion.span
        className={styles.supportNote}
        initial={
          reduceMotion || !shouldAnimateEntrance ? false : { opacity: 0 }
        }
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.14 }}
      >
        Support the project
      </motion.span>
    </div>
  );
}

function PreviewTaskCard({
  task,
  index,
  reduceMotion,
  selected,
  selectionStarted,
  animateEntrance,
  onSelect,
}: CardProps) {
  const [entranceComplete, setEntranceComplete] = useState(
    reduceMotion || !animateEntrance,
  );
  const {
    handlePointerEnter,
    handlePointerLeave,
    handlePointerMove,
    rotateX,
    rotateY,
  } = useTiltEffect({
    maxTilt: 18,
    reduceMotion: reduceMotion || selectionStarted,
  });

  return (
    <motion.div
      className={styles.previewCardProjection}
      data-position={index === 0 ? "left" : index === 2 ? "right" : "center"}
      key={task.id}
      layoutId={`task-card-${task.id}`}
      layoutCrossfade={false}
      style={{ rotate: cardRotations[index] ?? 0 }}
      initial={
        reduceMotion || !animateEntrance
          ? false
          : {
              opacity: 0,
              y: 72,
              scale: 0.92,
            }
      }
      animate={{
        opacity: selectionStarted && !selected ? 0.35 : 1,
        x: 0,
        y: index === 1 ? -12 : 8,
        scale: selected ? 1.035 : 1,
      }}
      exit={
        selected
          ? {
              opacity: 1,
              scale: 1.035,
            }
          : {
              opacity: 0,
              y: reduceMotion ? 0 : index === 1 ? -150 : 120,
              x: reduceMotion ? 0 : index === 0 ? -210 : index === 2 ? 210 : 0,
              scale: reduceMotion ? 1 : 0.72,
            }
      }
      transition={
        reduceMotion
          ? { duration: 0 }
          : {
              type: "spring",
              stiffness: 250,
              damping: 23,
              mass: 0.88,
              delay:
                selectionStarted || entranceComplete ? 0 : 0.38 + index * 0.08,
              layout: {
                type: "spring",
                stiffness: 88,
                damping: 16,
                mass: 1.08,
                path: selectionArc,
              },
            }
      }
      onAnimationComplete={() => setEntranceComplete(true)}
    >
      <button
        className={styles.previewCardHitArea}
        data-selected={selected || undefined}
        type="button"
        onClick={() => onSelect(task.id)}
        onPointerEnter={handlePointerEnter}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        onPointerOut={handlePointerLeave}
        aria-label={`${difficultyLabel(task.difficulty)}, ${task.title}`}
        aria-pressed={selected}
      >
        <motion.span
          className={styles.previewCard}
          data-difficulty={task.difficulty}
          style={{
            rotateX,
            rotateY,
            transformPerspective: 1000,
          }}
        >
          <span className={styles.cardShimmer} aria-hidden="true" />
          <span className={styles.cardDifficulty}>
            <DifficultyDots difficulty={task.difficulty} />
            {difficultyLabel(task.difficulty)}
          </span>
          <span className={styles.previewTitle}>{task.title}</span>
          <span className={styles.cardBrand} aria-hidden="true">
            <img
              src={`${import.meta.env.BASE_URL}sidequest-wordmark.svg`}
              alt=""
              width="837"
              height="550"
            />
          </span>
        </motion.span>
      </button>
    </motion.div>
  );
}

function difficultyLabel(value: string) {
  if (value === "easy") return "Easy";
  if (value === "medium") return "Medium";
  return "Hard";
}
