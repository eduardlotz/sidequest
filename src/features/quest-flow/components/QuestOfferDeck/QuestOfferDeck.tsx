import { animate, motion, useMotionValue } from "motion/react";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { useTranslation } from "react-i18next";
import type { QuestDefinition } from "../../../../data/quests";
import { getMoodAccentStyle } from "../../../../data/questColors";
import { useTiltEffect } from "../../../../hooks/useTiltEffect";
import { CARD_LAYOUT_TRANSITION } from "../../../../lib/cardMotion";
import { playSound } from "../../../../lib/sound";
import { VisuallyHidden } from "../../../../shared/ui/VisuallyHidden/VisuallyHidden";
import styles from "./QuestOfferDeck.module.css";
import { QuestCard } from "../../../../shared/quest-card/QuestCard/QuestCard";
import { QuestCardBack } from "../../../../shared/quest-card/QuestCardBack/QuestCardBack";
import { plainObjectiveText } from "../../../../shared/quest-card/QuestObjectiveText/QuestObjectiveText";
import { SELECTION_HANDOFF_EASE } from "../../../../shared/motion/transitions";
import { usePlayLayout } from "../../usePlayLayout";

export type QuestOfferItem = QuestDefinition;
export type QuestShufflePhase = "idle" | "outgoing" | "incoming";
type QuestEntryMotion = "bottom" | "shared";

type Props = {
  items: readonly QuestOfferItem[];
  entryMotion: QuestEntryMotion;
  layoutSessionId: string;
  reduceMotion: boolean;
  returningQuestId?: string;
  returningToMoods: boolean;
  shuffleSequence: number;
  shufflePhase: QuestShufflePhase;
  onSelectionStart: (previewRotation: number) => void;
  onSelect: (questId: string) => void;
};

type CardProps = {
  entryMotion: QuestEntryMotion;
  item: QuestOfferItem;
  index: number;
  isTopCard: boolean;
  stackPosition: "front" | "middle" | "back";
  reduceMotion: boolean;
  returningToMoods: boolean;
  shuffleSequence: number;
  shufflePhase: QuestShufflePhase;
  selected: boolean;
  selectionStarted: boolean;
  layoutSessionId: string;
  onCycle: (direction: -1 | 1, focusNext?: boolean) => void;
  onSelect: (questId: string, previewRotation: number) => void;
  onSwipeComplete: (questId: string) => void;
  onSwipeReturnStart: (questId: string) => void;
  onSwipeStart: (questId: string) => void;
};

const CARD_ROTATIONS = [-9, 0, 9];
const CARD_FADE_EASE = SELECTION_HANDOFF_EASE;
const CARD_POSITION_TRANSITION = {
  type: "spring" as const,
  stiffness: 230,
  damping: 25,
  mass: 0.9,
  restDelta: 0.001,
  restSpeed: 0.001,
};
const MOOD_HANDOFF_TRANSITION = {
  type: "spring" as const,
  stiffness: 250,
  damping: 29,
  mass: 0.82,
  restDelta: 0.01,
  restSpeed: 0.01,
};
const CARD_CENTER_STAGGER_SECONDS = 0.04;
const MOOD_HANDOFF_OFFSET_Y = -48;
const SHUFFLE_CARD_STAGGER_SECONDS = 0.11;

export function QuestOfferDeck({
  items,
  entryMotion,
  layoutSessionId,
  reduceMotion,
  returningQuestId,
  returningToMoods,
  shuffleSequence,
  shufflePhase,
  onSelectionStart,
  onSelect,
}: Props) {
  const { t } = useTranslation();
  const itemKey = items.map((item) => item.id).join("-");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(() =>
    returningQuestId
      ? Math.max(
          0,
          items.findIndex((item) => item.id === returningQuestId),
        )
      : 0,
  );
  const [swipingIds, setSwipingIds] = useState<ReadonlySet<string>>(
    () => new Set(),
  );
  const [returningSwipeIds, setReturningSwipeIds] = useState<
    ReadonlySet<string>
  >(() => new Set());
  const deckRef = useRef<HTMLDivElement>(null);
  const selectionFrameRef = useRef<number | null>(null);
  const { isCompact } = usePlayLayout();
  const shuffling = shufflePhase !== "idle";

  useEffect(() => {
    setSelectedId(null);
    setSwipingIds(new Set());
    setReturningSwipeIds(new Set());
    setActiveCardIndex(
      returningQuestId
        ? Math.max(
            0,
            items.findIndex((item) => item.id === returningQuestId),
          )
        : 0,
    );
  }, [itemKey]);

  useEffect(
    () => () => {
      if (selectionFrameRef.current !== null) {
        window.cancelAnimationFrame(selectionFrameRef.current);
      }
    },
    [],
  );

  function selectCard(questId: string, previewRotation: number) {
    if (selectedId || shuffling) return;
    playSound("cardSelect");
    onSelectionStart(previewRotation);
    setSelectedId(questId);
    if (reduceMotion) {
      onSelect(questId);
      return;
    }
    selectionFrameRef.current = window.requestAnimationFrame(() => {
      selectionFrameRef.current = null;
      onSelect(questId);
    });
  }

  function cycleCard(direction: -1 | 1, focusNext = false) {
    if (selectedId || shuffling || items.length < 2) return;
    playSound("cardHover");
    setActiveCardIndex(
      (current) => (current + direction + items.length) % items.length,
    );
    if (focusNext) {
      window.requestAnimationFrame(() => {
        deckRef.current
          ?.querySelector<HTMLButtonElement>(
            '[data-stack-position="front"] button',
          )
          ?.focus({ preventScroll: true });
      });
    }
  }

  return (
    <div
      className={styles.deck}
      aria-label={t("ui.offers.deckLabel")}
      ref={deckRef}
    >
      {items.map((item, index) => {
        const stackOffset =
          (index - activeCardIndex + items.length) % items.length;
        const stackPosition =
          stackOffset === 0 ? "front" : stackOffset === 1 ? "middle" : "back";
        return (
          <motion.div
            className={styles.previewCardSlot}
            data-position={
              index === 0 ? "left" : index === 2 ? "right" : "center"
            }
            data-stack-position={stackPosition}
            data-swipe-exiting={swipingIds.has(item.id) || undefined}
            data-swipe-returning={returningSwipeIds.has(item.id) || undefined}
            key={`quest-offer-slot-${index}`}
          >
            <QuestOfferCard
              entryMotion={entryMotion}
              item={item}
              index={index}
              isTopCard={stackOffset === 0}
              key={`${layoutSessionId}-${index}`}
              layoutSessionId={layoutSessionId}
              stackPosition={stackPosition}
              reduceMotion={reduceMotion}
              returningToMoods={returningToMoods}
              shuffleSequence={shuffleSequence}
              shufflePhase={shufflePhase}
              selected={selectedId === item.id}
              selectionStarted={selectedId !== null}
              onCycle={cycleCard}
              onSelect={selectCard}
              onSwipeComplete={(questId) =>
                setReturningSwipeIds((ids) => {
                  const next = new Set(ids);
                  next.delete(questId);
                  return next;
                })
              }
              onSwipeReturnStart={(questId) => {
                setSwipingIds((ids) => {
                  const next = new Set(ids);
                  next.delete(questId);
                  return next;
                });
                setReturningSwipeIds((ids) => new Set(ids).add(questId));
              }}
              onSwipeStart={(questId) =>
                setSwipingIds((ids) => new Set(ids).add(questId))
              }
            />
          </motion.div>
        );
      })}

      <VisuallyHidden aria-live="polite">
        {isCompact && items[activeCardIndex]
          ? t("ui.offers.cardStatus", {
              current: activeCardIndex + 1,
              total: items.length,
              name: items[activeCardIndex].name,
              title: plainObjectiveText(items[activeCardIndex].objective),
            })
          : selectedId
            ? t("ui.offers.opening", {
                title:
                  items.find((item) => item.id === selectedId)?.name ??
                  t("ui.offers.hiddenQuest"),
              })
            : ""}
      </VisuallyHidden>
    </div>
  );
}

function QuestOfferCard({
  entryMotion,
  item,
  index,
  isTopCard,
  layoutSessionId,
  stackPosition,
  reduceMotion,
  returningToMoods,
  shuffleSequence,
  shufflePhase,
  selected,
  selectionStarted,
  onCycle,
  onSelect,
  onSwipeComplete,
  onSwipeReturnStart,
  onSwipeStart,
}: CardProps) {
  const { t } = useTranslation();
  const { isCompact } = usePlayLayout();
  const shuffling = shufflePhase !== "idle";
  const suppressClickRef = useRef(false);
  const swipeX = useMotionValue(0);
  const swipeAnimationRef = useRef<ReturnType<typeof animate> | null>(null);
  const {
    handlePointerEnter,
    handlePointerLeave,
    handlePointerMove,
    resetTilt,
    rotateX,
    rotateY,
  } = useTiltEffect({
    maxTilt: 18,
    reduceMotion,
  });

  useEffect(() => {
    if (selectionStarted) resetTilt();
  }, [resetTilt, selectionStarted]);

  useEffect(
    () => () => {
      swipeAnimationRef.current?.stop();
    },
    [],
  );

  const centerOffsetX = isCompact
    ? 0
    : index === 0
      ? 150
      : index === 2
        ? -150
        : 0;
  const centerStaggerDelay = isCompact
    ? stackPosition === "front"
      ? 0
      : stackPosition === "middle"
        ? CARD_CENTER_STAGGER_SECONDS
        : CARD_CENTER_STAGGER_SECONDS * 2
    : Math.abs(index - 1) * CARD_CENTER_STAGGER_SECONDS;
  const moodHandoffActive =
    !selectionStarted && (entryMotion === "shared" || returningToMoods);
  const positionTransition = moodHandoffActive
    ? MOOD_HANDOFF_TRANSITION
    : CARD_POSITION_TRANSITION;
  const positionDelay = selectionStarted
    ? 0
    : moodHandoffActive
      ? centerStaggerDelay
      : index * 0.05;

  return (
    <motion.div
      className={styles.previewCardProjection}
      data-mood-handoff={moodHandoffActive || undefined}
      data-position={index === 0 ? "left" : index === 2 ? "right" : "center"}
      data-selected={selected || undefined}
      data-stack-position={stackPosition}
      layoutId={`quest-card-${layoutSessionId}-${item.id}`}
      layoutCrossfade={false}
      initial={
        reduceMotion || shuffleSequence > 0
          ? false
          : entryMotion === "shared"
            ? {
                filter: "blur(0px)",
                opacity: 0,
                x: centerOffsetX,
                y: MOOD_HANDOFF_OFFSET_Y,
                scale: 0.96,
              }
            : {
                filter: "blur(5px)",
                opacity: 0,
                y: 72,
                scale: 0.92,
              }
      }
      animate={{
        filter: moodHandoffActive
          ? "blur(0px)"
          : selectionStarted && !selected
            ? "blur(5px)"
            : "blur(0px)",
        opacity:
          (selectionStarted && !selected) || returningToMoods ? 0 : 1,
        x:
          selectionStarted && !selected
            ? index === 0
              ? -210
              : index === 2
                ? 210
                : 0
            : returningToMoods
              ? centerOffsetX
              : 0,
        y:
          selectionStarted && !selected
            ? index === 1
              ? -150
              : 120
            : returningToMoods
              ? MOOD_HANDOFF_OFFSET_Y
              : 0,
        scale:
          selectionStarted && !selected ? 0.72 : returningToMoods ? 0.96 : 1,
      }}
      exit={
        returningToMoods
          ? {
              filter: "blur(0px)",
              opacity: 0,
              x: centerOffsetX,
              y: MOOD_HANDOFF_OFFSET_Y,
              scale: 0.96,
            }
          : selectionStarted
            ? selected
              ? {
                  filter: "blur(0px)",
                  opacity: 0,
                  scale: 1,
                  transition: { opacity: { duration: 0 } },
                }
              : {
                  filter: "blur(5px)",
                  opacity: 0,
                  y: reduceMotion ? 0 : index === 1 ? -150 : 120,
                  x: reduceMotion
                    ? 0
                    : index === 0
                      ? -210
                      : index === 2
                        ? 210
                        : 0,
                  scale: reduceMotion ? 1 : 0.72,
                }
            : { filter: "blur(0px)", opacity: 1, y: 0, scale: 1 }
      }
      transition={
        reduceMotion
          ? { duration: 0 }
          : {
              layout: CARD_LAYOUT_TRANSITION,
              x: {
                ...positionTransition,
                delay: positionDelay,
              },
              y: {
                ...positionTransition,
                delay: positionDelay,
              },
              scale: {
                ...positionTransition,
                delay: positionDelay,
              },
              opacity: {
                duration: moodHandoffActive ? 0.28 : 0.26,
                ease: CARD_FADE_EASE,
                delay: positionDelay,
              },
              filter: {
                duration: moodHandoffActive ? 0 : 0.24,
                ease: CARD_FADE_EASE,
                delay: positionDelay,
              },
          }
      }
    >
      <button
        className={styles.previewCardHitArea}
        data-flow-focus={(isCompact ? isTopCard : index === 1) || undefined}
        data-sound-card
        data-quest-id={item.id}
        data-selected={selected || undefined}
        type="button"
        disabled={shuffling}
        tabIndex={isCompact && !isTopCard ? -1 : undefined}
        style={getMoodAccentStyle(item.moodId)}
        onClick={() => {
          if (suppressClickRef.current || (isCompact && !isTopCard)) return;
          resetTilt();
          onSelect(item.id, CARD_ROTATIONS[index]);
        }}
        onKeyDown={(event) => {
          if (!isCompact || !isTopCard) return;
          if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault();
            onCycle(event.key === "ArrowRight" ? 1 : -1, true);
          }
        }}
        onPointerEnter={handlePointerEnter}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        onPointerOut={handlePointerLeave}
        aria-label={t("ui.offers.selectQuest", {
          name: item.name,
          title: plainObjectiveText(item.objective),
        })}
        aria-pressed={selected}
      >
        <motion.span
          className={styles.previewCardTilt}
          drag={
            isCompact &&
            isTopCard &&
            !selectionStarted &&
            !shuffling
              ? "x"
              : false
          }
          dragConstraints={{ left: 0, right: 0 }}
          dragDirectionLock
          dragElastic={1}
          dragMomentum={false}
          onPointerDown={() => {
            suppressClickRef.current = false;
          }}
          onDrag={(_, info) => {
            if (Math.abs(info.offset.x) > 8) suppressClickRef.current = true;
          }}
          onDragEnd={(_, info) => {
            const flicked =
              Math.abs(info.offset.x) > 58 || Math.abs(info.velocity.x) > 520;

            if (flicked) {
              const direction =
                info.offset.x < 0 || info.velocity.x < -520 ? -1 : 1;
              const compactCardWidth = Math.min(window.innerWidth * 0.8, 300);
              const exitDistance = Math.max(
                (window.innerWidth + compactCardWidth) / 2 + 12,
                Math.abs(info.offset.x) + 140,
              );

              onSwipeStart(item.id);
              onCycle(1);

              if (reduceMotion) {
                swipeX.set(0);
                onSwipeComplete(item.id);
              } else {
                swipeAnimationRef.current?.stop();
                swipeAnimationRef.current = animate(
                  swipeX,
                  direction * exitDistance,
                  {
                    duration: 0.2,
                    ease: [0.22, 0.8, 0.24, 1],
                    onComplete: () => {
                      onSwipeReturnStart(item.id);
                      swipeAnimationRef.current = animate(swipeX, 0, {
                        type: "spring",
                        stiffness: 420,
                        damping: 34,
                        mass: 0.58,
                        restDelta: 0.5,
                        restSpeed: 25,
                        onComplete: () => onSwipeComplete(item.id),
                      });
                    },
                  },
                );
              }
            }

            window.setTimeout(() => {
              suppressClickRef.current = false;
            }, 0);
          }}
          style={{
            x: swipeX,
            rotate: isCompact ? 0 : (CARD_ROTATIONS[index] ?? 0),
            rotateX,
            rotateY,
            transformPerspective: 1_000,
          }}
        >
          <span
            className={styles.shuffleCard}
            key={`shuffle-card-${shuffleSequence}`}
            data-shuffling={shuffling || undefined}
            data-shuffle-phase={
              shufflePhase === "idle" ? undefined : shufflePhase
            }
            style={
              {
                "--shuffle-delay": `${index * SHUFFLE_CARD_STAGGER_SECONDS}s`,
                "--shuffle-drop-rotate": `${(index - 1) * 2.2}deg`,
                "--shuffle-enter-rotate": `${(1 - index) * 2.2}deg`,
              } as CSSProperties
            }
            onAnimationEnd={(event) => {
              if (
                event.target !== event.currentTarget ||
                shuffleSequence < 1 ||
                reduceMotion ||
                (isCompact && shufflePhase !== "incoming")
              ) {
                return;
              }
              playSound("shuffle");
            }}
          >
            <QuestCard
              className={`${styles.questSelectionCard} ${styles.shuffleCardFront}`}
              genres={item.genres}
              minimumDurationMinutes={item.minimumDurationMinutes}
              moodTitle={t(`moods.${item.moodId}.title`)}
              name={item.name}
              objective={item.objective}
              suggestedDurationMinutes={item.suggestedDurationMinutes}
            >
              <span
                className={styles.shuffleShine}
                aria-hidden="true"
              />
            </QuestCard>
            <QuestCardBack className={styles.shuffleCardBack} />
          </span>
        </motion.span>
      </button>
    </motion.div>
  );
}
