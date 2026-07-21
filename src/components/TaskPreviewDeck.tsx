import { arc, motion, useMotionValue, useSpring } from "motion/react";
import { useState, type PointerEvent } from "react";
import type { TaskDefinition } from "../data/tasks";
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
  hoverOffset: number;
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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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
            onPointerEnter={() => !selectedTaskId && setHoveredIndex(index)}
            onPointerLeave={() =>
              setHoveredIndex((current) => (current === index ? null : current))
            }
          >
            <PreviewTaskCard
              task={task}
              index={index}
              reduceMotion={reduceMotion}
              selected={selectedTaskId === task.id}
              selectionStarted={selectedTaskId !== null}
              hoverOffset={cardHoverOffset(index, hoveredIndex)}
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
  hoverOffset,
  animateEntrance,
  onSelect,
}: CardProps) {
  const [entranceComplete, setEntranceComplete] = useState(
    reduceMotion || !animateEntrance,
  );
  const tiltXTarget = useMotionValue(0);
  const tiltYTarget = useMotionValue(0);
  const tiltX = useSpring(tiltXTarget, {
    stiffness: 92,
    damping: 17,
    mass: 0.92,
  });
  const tiltY = useSpring(tiltYTarget, {
    stiffness: 92,
    damping: 17,
    mass: 0.92,
  });

  function handleTilt(event: PointerEvent<HTMLButtonElement>) {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    tiltXTarget.set((0.5 - py) * 15);
    tiltYTarget.set((px - 0.5) * 19);
    card.style.setProperty("--shine-x", `${px * 100}%`);
    card.style.setProperty("--shine-y", `${py * 100}%`);
  }

  function resetTilt() {
    tiltXTarget.set(0);
    tiltYTarget.set(0);
  }

  return (
    <motion.button
      className={styles.previewCard}
      data-difficulty={task.difficulty}
      data-position={index === 0 ? "left" : index === 2 ? "right" : "center"}
      data-selected={selected || undefined}
      key={task.id}
      layoutId={`task-card-${task.id}`}
      layoutCrossfade={false}
      type="button"
      style={{
        rotate: cardRotations[index] ?? 0,
        rotateX: tiltX,
        rotateY: tiltY,
        transformPerspective: 1100,
      }}
      onClick={() => onSelect(task.id)}
      onPointerMove={reduceMotion || selectionStarted ? undefined : handleTilt}
      onPointerLeave={reduceMotion ? undefined : resetTilt}
      aria-label={`${difficultyLabel(task.difficulty)}, ${task.title}`}
      aria-pressed={selected}
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
        x: reduceMotion ? 0 : hoverOffset,
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
    </motion.button>
  );
}

function cardHoverOffset(index: number, hoveredIndex: number | null) {
  if (hoveredIndex === null || index === hoveredIndex) return 0;
  const distance = Math.abs(index - hoveredIndex);
  return (index < hoveredIndex ? -1 : 1) * (distance === 1 ? 42 : 66);
}

function difficultyLabel(value: string) {
  if (value === "easy") return "Easy";
  if (value === "medium") return "Medium";
  return "Hard";
}
