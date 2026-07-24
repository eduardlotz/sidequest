import { arc, motion } from "motion/react";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import type { TaskDefinition } from "../data/tasks";
import { useTiltEffect } from "../hooks/useTiltEffect";
import { DifficultyDots } from "./DifficultyDots";
import styles from "../App.module.css";

type Props = {
  tasks: TaskDefinition[];
  animateEntrance: boolean;
  reduceMotion: boolean;
  onSelect: (taskId: string) => void;
};

type CardProps = {
  task: TaskDefinition;
  index: number;
  isMobile: boolean;
  isTopCard: boolean;
  stackPosition: "front" | "middle" | "back";
  reduceMotion: boolean;
  selected: boolean;
  selectionStarted: boolean;
  animateEntrance: boolean;
  onCycle: (direction: -1 | 1, focusNext?: boolean) => void;
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
  animateEntrance,
  reduceMotion,
  onSelect,
}: Props) {
  const [shouldAnimateEntrance] = useState(animateEntrance);
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const deckRef = useRef<HTMLDivElement>(null);
  const isMobile = useMobileLayout();

  function selectCard(taskId: string) {
    if (selectedTaskId) return;
    setSelectedTaskId(taskId);
    window.requestAnimationFrame(() => onSelect(taskId));
  }

  function cycleCard(direction: -1 | 1, focusNext = false) {
    if (selectedTaskId || tasks.length < 2) return;
    setActiveCardIndex(
      (current) => (current + direction + tasks.length) % tasks.length,
    );
    if (focusNext) {
      window.requestAnimationFrame(() => {
        deckRef.current
          ?.querySelector<HTMLButtonElement>(
            '[data-stack-position="front"] button',
          )
          ?.focus();
      });
    }
  }

  return (
    <div className={styles.previewState}>
      <header className={styles.deckIntro}>
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
      <div className={styles.deck} aria-label="Quest choices" ref={deckRef}>
        {tasks.map((task, index) => {
          const stackOffset =
            (index - activeCardIndex + tasks.length) % tasks.length;
          const stackPosition =
            stackOffset === 0
              ? "front"
              : stackOffset === 1
                ? "middle"
                : "back";

          return (
            <div
              className={styles.previewCardSlot}
              data-position={
                index === 0 ? "left" : index === 2 ? "right" : "center"
              }
              data-stack-position={stackPosition}
              key={task.id}
            >
              <PreviewTaskCard
                task={task}
                index={index}
                isMobile={isMobile}
                isTopCard={stackOffset === 0}
                stackPosition={stackPosition}
                reduceMotion={reduceMotion}
                selected={selectedTaskId === task.id}
                selectionStarted={selectedTaskId !== null}
                animateEntrance={shouldAnimateEntrance}
                onCycle={cycleCard}
                onSelect={selectCard}
              />
            </div>
          );
        })}
        <span className={styles.srOnly} aria-live="polite">
          {isMobile && tasks[activeCardIndex]
            ? `Card ${activeCardIndex + 1} of ${tasks.length}: ${tasks[activeCardIndex].title}`
            : ""}
        </span>
      </div>
    </div>
  );
}

function PreviewTaskCard({
  task,
  index,
  isMobile,
  isTopCard,
  stackPosition,
  reduceMotion,
  selected,
  selectionStarted,
  animateEntrance,
  onCycle,
  onSelect,
}: CardProps) {
  const [entranceComplete, setEntranceComplete] = useState(
    reduceMotion || !animateEntrance,
  );
  const suppressClickRef = useRef(false);
  const {
    handlePointerEnter,
    handlePointerLeave,
    handlePointerMove,
    rotateX,
    rotateY,
  } = useTiltEffect({
    maxTilt: 18,
    reduceMotion: reduceMotion || selectionStarted || isMobile,
  });

  return (
    <motion.div
      className={styles.previewCardProjection}
      data-position={index === 0 ? "left" : index === 2 ? "right" : "center"}
      data-stack-position={stackPosition}
      key={task.id}
      layoutId={`task-card-${task.id}`}
      layoutCrossfade={false}
      drag={isMobile && isTopCard && !selectionStarted ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragDirectionLock
      dragElastic={0.34}
      dragMomentum={false}
      onPointerDown={() => {
        suppressClickRef.current = false;
      }}
      onDrag={(_, info) => {
        if (Math.abs(info.offset.x) > 8) suppressClickRef.current = true;
      }}
      onDragEnd={(_, info) => {
        const direction =
          info.offset.x < -64 || info.velocity.x < -500
            ? 1
            : info.offset.x > 64 || info.velocity.x > 500
              ? -1
              : 0;
        if (direction) onCycle(direction);
        window.setTimeout(() => {
          suppressClickRef.current = false;
        }, 0);
      }}
      style={
        {
          "--card-rotation": `${cardRotations[index] ?? 0}deg`,
        } as CSSProperties
      }
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
        y: 0,
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
        tabIndex={isMobile && !isTopCard ? -1 : undefined}
        onClick={() => {
          if (suppressClickRef.current || (isMobile && !isTopCard)) return;
          onSelect(task.id);
        }}
        onKeyDown={(event) => {
          if (!isMobile || !isTopCard) return;
          if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault();
            onCycle(event.key === "ArrowRight" ? 1 : -1, true);
          }
        }}
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

function useMobileLayout() {
  const [isMobile, setIsMobile] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(max-width: 820px)").matches,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 820px)");
    const update = () => setIsMobile(mediaQuery.matches);
    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  return isMobile;
}
