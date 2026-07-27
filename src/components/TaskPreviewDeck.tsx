import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import type { QuestDefinition } from "../data/quests";
import { getQuestAccentStyle } from "../data/questColors";
import { QUEST_GENRE_LABELS } from "../data/questTaxonomy";
import { useTiltEffect } from "../hooks/useTiltEffect";
import { CARD_LAYOUT_TRANSITION } from "../lib/cardMotion";
import { playSound } from "../lib/sound";
import { QuestCardBack } from "./QuestCardBack";
import styles from "../App.module.css";

type Props = {
  quests: QuestDefinition[];
  animateEntrance: boolean;
  reduceMotion: boolean;
  onReveal: (questId: string) => void;
};

type CardProps = {
  quest: QuestDefinition;
  index: number;
  isMobile: boolean;
  isTopCard: boolean;
  stackPosition: "front" | "middle" | "back";
  reduceMotion: boolean;
  selected: boolean;
  selectionStarted: boolean;
  animateEntrance: boolean;
  onCycle: (direction: -1 | 1, focusNext?: boolean) => void;
  onReveal: (questId: string) => void;
};

const cardRotations = [-9, 0, 9];

export function TaskPreviewDeck({
  quests,
  animateEntrance,
  reduceMotion,
  onReveal,
}: Props) {
  const questSetKey = quests.map((quest) => quest.id).join("-");
  const [shouldAnimateEntrance] = useState(animateEntrance);
  const [selectedQuestId, setSelectedQuestId] = useState<string | null>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const deckRef = useRef<HTMLDivElement>(null);
  const isMobile = useMobileLayout();

  useEffect(() => {
    setSelectedQuestId(null);
    setActiveCardIndex(0);
  }, [questSetKey]);

  function selectCard(questId: string) {
    if (selectedQuestId) return;
    playSound("cardSelect");
    setSelectedQuestId(questId);
    window.requestAnimationFrame(() => onReveal(questId));
  }

  function cycleCard(direction: -1 | 1, focusNext = false) {
    if (selectedQuestId || quests.length < 2) return;
    playSound("slide");
    setActiveCardIndex(
      (current) => (current + direction + quests.length) % quests.length,
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

      <div className={styles.deck} aria-label="Hidden quest choices" ref={deckRef}>
        {quests.map((quest, index) => {
          const stackOffset =
            (index - activeCardIndex + quests.length) % quests.length;
          const stackPosition =
            stackOffset === 0 ? "front" : stackOffset === 1 ? "middle" : "back";

          return (
            <div
              className={styles.previewCardSlot}
              data-position={
                index === 0 ? "left" : index === 2 ? "right" : "center"
              }
              data-stack-position={stackPosition}
              key={quest.id}
              style={getQuestAccentStyle(quest.primaryGenre)}
            >
              <PreviewQuestCard
                quest={quest}
                index={index}
                isMobile={isMobile}
                isTopCard={stackOffset === 0}
                stackPosition={stackPosition}
                reduceMotion={reduceMotion}
                selected={selectedQuestId === quest.id}
                selectionStarted={selectedQuestId !== null}
                animateEntrance={shouldAnimateEntrance}
                onCycle={cycleCard}
                onReveal={selectCard}
              />
            </div>
          );
        })}
        <span className={styles.srOnly} aria-live="polite">
          {isMobile && quests[activeCardIndex]
            ? `Card ${activeCardIndex + 1} of ${quests.length}: hidden ${
                QUEST_GENRE_LABELS[quests[activeCardIndex].primaryGenre]
              } sidequest`
            : ""}
        </span>
      </div>
    </div>
  );
}

function PreviewQuestCard({
  quest,
  index,
  isMobile,
  isTopCard,
  stackPosition,
  reduceMotion,
  selected,
  selectionStarted,
  animateEntrance,
  onCycle,
  onReveal,
}: CardProps) {
  const [entranceComplete, setEntranceComplete] = useState(
    reduceMotion || !animateEntrance,
  );
  const suppressClickRef = useRef(false);
  const {
    handlePointerEnter,
    handlePointerLeave,
    handlePointerMove,
    resetTilt,
    rotateX,
    rotateY,
  } = useTiltEffect({
    maxTilt: 18,
    reduceMotion: reduceMotion || isMobile,
  });

  useEffect(() => {
    if (selectionStarted) resetTilt();
  }, [resetTilt, selectionStarted]);

  return (
    <motion.div
      className={styles.previewCardProjection}
      data-position={index === 0 ? "left" : index === 2 ? "right" : "center"}
      data-stack-position={stackPosition}
      layoutId={`task-card-${quest.id}`}
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
      style={{ rotate: isMobile ? 0 : cardRotations[index] ?? 0 }}
      initial={
        reduceMotion || !animateEntrance
          ? false
          : { opacity: 0, y: 72, scale: 0.92 }
      }
      animate={{
        opacity: selectionStarted && !selected ? 0.35 : 1,
        x: 0,
        y: 0,
        scale: 1,
      }}
      exit={
        selected
          ? { opacity: 1, scale: 1 }
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
              layout: CARD_LAYOUT_TRANSITION,
            }
      }
      onAnimationComplete={() => setEntranceComplete(true)}
    >
      <button
        className={styles.previewCardHitArea}
        data-sound-card
        data-quest-id={quest.id}
        data-selected={selected || undefined}
        type="button"
        tabIndex={isMobile && !isTopCard ? -1 : undefined}
        onClick={() => {
          if (suppressClickRef.current || (isMobile && !isTopCard)) return;
          onReveal(quest.id);
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
        aria-label={`Reveal hidden ${
          QUEST_GENRE_LABELS[quest.primaryGenre]
        } sidequest`}
        aria-pressed={selected}
      >
        <motion.span
          className={styles.previewCard}
          style={{ rotateX, rotateY, transformPerspective: 1000 }}
        >
          <span className={styles.cardShimmer} aria-hidden="true" />
          <QuestCardBack
            genre={quest.primaryGenre}
            revealGenreOnHover
          />
        </motion.span>
      </button>
    </motion.div>
  );
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
