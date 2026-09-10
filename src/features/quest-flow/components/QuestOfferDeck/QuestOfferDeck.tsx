import { motion } from "motion/react";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { useTranslation } from "react-i18next";
import type { Quest } from "../../../../domain/quest/model";
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
import { useQuestArc } from "./useQuestArc";
import { useQuestCardDrag } from "./useQuestCardDrag";
import {
  BOX_CARDS_LIFT_MS,
  BOX_CARDS_SPREAD_MS,
  BOX_REVEAL_COMPLETE_MS,
  NEW_CARDS_STAGGER_SECONDS,
  NEW_CARDS_OUT_SECONDS,
  NEW_CARDS_IN_SECONDS,
  NEW_CARDS_SHINE_SECONDS,
  type DeckRevealStage,
  type MoodBoxOrigin,
} from "./questDeckMotion";

export type QuestOfferItem = Quest & { offerId: string };
export type NewCardsPhase = "idle" | "outgoing" | "incoming";
type QuestEntryMotion = "bottom" | "box";

type Props = {
  items: readonly QuestOfferItem[];
  entryMotion: QuestEntryMotion;
  boxOrigin: MoodBoxOrigin | null;
  onReady: () => void;
  layoutSessionId: string;
  reduceMotion: boolean;
  returningQuestId?: string;
  returningToMoods: boolean;
  newCardsSequence: number;
  newCardsPhase: NewCardsPhase;
  onSelectionStart: (previewRotation: number) => void;
  onSelect: (questId: string) => void;
};

type CardProps = {
  entryMotion: QuestEntryMotion;
  revealStage: DeckRevealStage;
  boxX: number;
  boxY: number;
  boxScale: number;
  liftY: number;
  item: QuestOfferItem;
  index: number;
  centerIndex: number;
  arcX: number;
  arcY: number;
  rotation: number;
  onFocusCard: () => void;
  isTopCard: boolean;
  stackPosition: "front" | "middle" | "back";
  reduceMotion: boolean;
  returningToMoods: boolean;
  newCardsSequence: number;
  newCardsPhase: NewCardsPhase;
  selected: boolean;
  selectionStarted: boolean;
  layoutSessionId: string;
  onCycle: (direction: -1 | 1, focusNext?: boolean) => void;
  onSelect: (questId: string, previewRotation: number) => void;
  onSwipeComplete: (questId: string) => void;
  onSwipeReturnStart: (questId: string) => void;
  onSwipeStart: (questId: string) => void;
};

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

export function QuestOfferDeck({
  items,
  entryMotion,
  boxOrigin,
  onReady,
  layoutSessionId,
  reduceMotion,
  returningQuestId,
  returningToMoods,
  newCardsSequence,
  newCardsPhase,
  onSelectionStart,
  onSelect,
}: Props) {
  const { t } = useTranslation();
  const itemKey = items.map((item) => item.offerId).join("-");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(() =>
    returningQuestId
      ? Math.max(
          0,
          items.findIndex((item) => item.offerId === returningQuestId),
        )
      : 0,
  );
  const [swipingIds, setSwipingIds] = useState<ReadonlySet<string>>(
    () => new Set(),
  );
  const [returningSwipeIds, setReturningSwipeIds] = useState<
    ReadonlySet<string>
  >(() => new Set());
  const selectionFrameRef = useRef<number | null>(null);
  const { isCompact } = usePlayLayout();
  const dealingNewCards = newCardsPhase !== "idle";
  const { deckRef, cardWidth, origin, spin, pivotY, spinToPointer, focusCard, resetSpin, positionFor } =
    useQuestArc(items.length, isCompact, reduceMotion);
  const centerIndex = Math.floor(items.length / 2);
  const [revealStage, setRevealStage] = useState<DeckRevealStage>(() =>
    entryMotion === "box" && !reduceMotion ? "boxed" : "ready",
  );
  const revealing = revealStage !== "ready";
  const onReadyRef = useRef(onReady);
  onReadyRef.current = onReady;

  useEffect(() => {
    if (entryMotion !== "box" || reduceMotion) {
      setRevealStage("ready");
      onReadyRef.current();
      return;
    }
    const lift = window.setTimeout(() => setRevealStage("lifted"), BOX_CARDS_LIFT_MS);
    const spread = window.setTimeout(() => setRevealStage("spread"), BOX_CARDS_SPREAD_MS);
    const complete = window.setTimeout(() => {
      setRevealStage("ready");
      onReadyRef.current();
    }, BOX_REVEAL_COMPLETE_MS);
    return () => {
      window.clearTimeout(lift);
      window.clearTimeout(spread);
      window.clearTimeout(complete);
    };
  }, [entryMotion, reduceMotion]);

  useEffect(() => {
    setSelectedId(null);
    setSwipingIds(new Set());
    setReturningSwipeIds(new Set());
    setActiveCardIndex(
      returningQuestId
        ? Math.max(
            0,
            items.findIndex((item) => item.offerId === returningQuestId),
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
    if (selectedId || dealingNewCards || revealing) return;
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
    if (selectedId || dealingNewCards || revealing || items.length < 2) return;
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
      aria-label={t("ui.offers.deckLabel", { count: items.length })}
      data-reveal-stage={revealStage}
      ref={deckRef}
      onPointerMove={(event) => {
        if (event.pointerType === "mouse" && !selectedId && !dealingNewCards && !revealing) {
          spinToPointer(event.clientX);
        }
      }}
      onPointerLeave={() => { if (!selectedId) resetSpin(); }}
    >
      {items.length === 0 && <p className={styles.emptyDeck} role="status">{t("ui.offers.emptyLibrary")}</p>}
      <motion.div className={styles.arcTrack} style={{ rotate: isCompact || revealing ? 0 : spin, transformOrigin: `0px ${pivotY}px` }}>
      {items.map((item, index) => {
        const stackOffset =
          (index - activeCardIndex + items.length) % items.length;
        const stackPosition =
          stackOffset === 0 ? "front" : stackOffset === 1 ? "middle" : "back";
        const arc = positionFor(index);
        return (
          <motion.div
            className={styles.previewCardSlot}
            data-quest-slot
            data-stack-hidden={isCompact && stackOffset > 2 && !swipingIds.has(item.offerId) && !returningSwipeIds.has(item.offerId) || undefined}
            aria-hidden={isCompact && stackOffset !== 0 || undefined}
            style={isCompact ? undefined : { x: arc.x, y: arc.y, zIndex: arc.depth }}
            data-stack-position={stackPosition}
            data-swipe-exiting={swipingIds.has(item.offerId) || undefined}
            data-swipe-returning={
              returningSwipeIds.has(item.offerId) || undefined
            }
            key={`quest-offer-slot-${index}`}
          >
            <QuestOfferCard
              entryMotion={entryMotion}
              revealStage={revealStage}
              boxX={(boxOrigin?.centerX ?? origin.x) - origin.x}
              boxY={(boxOrigin?.centerY ?? 0) - origin.y - cardWidth / 0.7 / 2}
              boxScale={Math.min(0.6, (boxOrigin?.width ?? cardWidth) * 0.32 / cardWidth)}
              liftY={window.innerHeight * 0.44 - origin.y - cardWidth / 0.7 / 2}
              item={item}
              index={index}
              centerIndex={centerIndex}
              arcX={arc.x}
              arcY={arc.y}
              rotation={arc.rotation}
              onFocusCard={() => focusCard(index)}
              isTopCard={stackOffset === 0}
              key={`${layoutSessionId}-${index}`}
              layoutSessionId={layoutSessionId}
              stackPosition={stackPosition}
              reduceMotion={reduceMotion}
              returningToMoods={returningToMoods}
              newCardsSequence={newCardsSequence}
              newCardsPhase={newCardsPhase}
              selected={selectedId === item.offerId}
              selectionStarted={selectedId !== null}
              onCycle={cycleCard}
              onSelect={(offerId, rotation) => selectCard(offerId, rotation + (isCompact ? 0 : spin.get()))}
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

      </motion.div>
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
                  items.find((item) => item.offerId === selectedId)?.name ??
                  t("ui.offers.hiddenQuest"),
              })
            : ""}
      </VisuallyHidden>
    </div>
  );
}

function QuestOfferCard({
  entryMotion,
  revealStage,
  boxX,
  boxY,
  boxScale,
  liftY,
  item,
  index,
  centerIndex,
  arcX,
  arcY,
  rotation,
  onFocusCard,
  isTopCard,
  layoutSessionId,
  stackPosition,
  reduceMotion,
  returningToMoods,
  newCardsSequence,
  newCardsPhase,
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
  const dealingNewCards = newCardsPhase !== "idle";
  const drag = useQuestCardDrag({
    reduceMotion,
    onCycle: () => onCycle(1),
    onExit: () => onSwipeStart(item.offerId),
    onReturn: () => onSwipeReturnStart(item.offerId),
    onComplete: () => onSwipeComplete(item.offerId),
  });
  const {
    handlePointerEnter,
    handlePointerLeave,
    handlePointerMove,
    resetTilt,
    rotateX,
    rotateY,
  } = useTiltEffect({
    maxTilt: 18,
    reduceMotion: reduceMotion || isCompact,
  });

  useEffect(() => {
    if (selectionStarted) resetTilt();
  }, [resetTilt, selectionStarted]);

  const stacked = revealStage === "boxed" || revealStage === "lifted";
  const boxed = revealStage === "boxed";
  const revealing = revealStage !== "ready";
  const stackDepth = Math.abs(index - centerIndex) * 3;
  const centerOffsetX = -arcX;
  const centerStaggerDelay = isCompact
    ? stackPosition === "front"
      ? 0
      : stackPosition === "middle"
        ? CARD_CENTER_STAGGER_SECONDS
        : CARD_CENTER_STAGGER_SECONDS * 2
    : Math.abs(index - centerIndex) * CARD_CENTER_STAGGER_SECONDS;
  const moodHandoffActive =
    !selectionStarted && (revealing || returningToMoods);
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
      data-selected={selected || undefined}
      data-stack-position={stackPosition}
      layoutId={`quest-card-${layoutSessionId}-${item.offerId}`}
      layoutCrossfade={false}
      initial={
        reduceMotion || newCardsSequence > 0
          ? false
          : entryMotion === "box"
            ? {
                filter: "blur(0px)",
                opacity: 0,
                x: boxX - arcX,
                y: boxY - arcY + stackDepth,
                scale: boxScale,
                rotate: 0,
                rotateX: 30,
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
          (selectionStarted && !selected) || returningToMoods || boxed ? 0 : 1,
        x:
          selectionStarted && !selected
            ? Math.sign(index - centerIndex) * 210
            : returningToMoods
              ? centerOffsetX
              : stacked ? (boxed ? boxX : 0) - arcX : 0,
        y:
          selectionStarted && !selected
            ? index === centerIndex ? -150 : 120
            : returningToMoods
              ? MOOD_HANDOFF_OFFSET_Y
              : stacked ? (boxed ? boxY : liftY) - arcY + stackDepth : 0,
        scale:
          selectionStarted && !selected ? 0.72 : returningToMoods ? 0.96 : boxed ? boxScale : stacked ? 0.72 : 1,
        rotate: stacked ? 0 : rotation,
        rotateX: boxed ? 30 : 0,
      }}
      exit={
        returningToMoods
          ? {
              filter: "blur(0px)",
              opacity: 0,
              x: centerOffsetX,
              y: MOOD_HANDOFF_OFFSET_Y - arcY,
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
                  y: reduceMotion ? 0 : index === centerIndex ? -150 : 120,
                  x: reduceMotion
                    ? 0
                    : Math.sign(index - centerIndex) * 210,
                  scale: reduceMotion ? 1 : 0.72,
                }
            : { filter: "blur(0px)", opacity: 1, y: 0, scale: 1 }
      }
      transition={
        reduceMotion || boxed
          ? { duration: 0 }
          : {
              layout: CARD_LAYOUT_TRANSITION,
              x: { ...positionTransition, delay: revealing ? 0 : positionDelay },
              y: { ...positionTransition, delay: revealing ? 0 : positionDelay },
              scale: { ...positionTransition, delay: revealing ? 0 : positionDelay },
              rotate: { ...positionTransition, delay: revealing ? 0 : positionDelay },
              rotateX: { duration: 0.42, ease: CARD_FADE_EASE },
              opacity: {
                duration: moodHandoffActive ? 0.28 : 0.26,
                ease: CARD_FADE_EASE,
                delay: revealing ? 0 : positionDelay,
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
        data-flow-focus={(isCompact ? isTopCard : index === centerIndex) || undefined}
        data-sound-card
        data-quest-id={item.id}
        data-offer-id={item.offerId}
        data-selected={selected || undefined}
        type="button"
        disabled={dealingNewCards || revealing || returningToMoods}
        tabIndex={isCompact && !isTopCard ? -1 : undefined}
        style={getMoodAccentStyle(item.mood.id)}
        onClick={() => {
          if (drag.suppressClick.current || (isCompact && !isTopCard)) return;
          resetTilt();
          onSelect(item.offerId, rotation);
        }}
        onKeyDown={(event) => {
          if (!isCompact || !isTopCard) return;
          if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault();
            onCycle(event.key === "ArrowRight" ? 1 : -1, true);
          }
        }}
        onFocus={(event) => {
          if (event.currentTarget.matches(":focus-visible")) onFocusCard();
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
          drag={isCompact && isTopCard && !selectionStarted && !dealingNewCards && !revealing}
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragElastic={1}
          dragMomentum={false}
          onPointerDown={drag.onPointerDown}
          onDrag={drag.onDrag}
          onDragEnd={drag.onDragEnd}
          style={{
            x: drag.x,
            y: drag.y,
            rotate: isCompact ? drag.rotate : 0,
            rotateX: isCompact ? drag.rotateX : rotateX,
            rotateY: isCompact ? drag.rotateY : rotateY,
            transformPerspective: 1_000,
          }}
        >
          <span
            className={styles.newCardsCard}
            key={`new-cards-${newCardsSequence}`}
            data-new-cards-phase={
              newCardsPhase === "idle" ? undefined : newCardsPhase
            }
            style={
              {
                "--new-cards-delay": `${index * NEW_CARDS_STAGGER_SECONDS}s`,
                "--new-cards-out-duration": `${NEW_CARDS_OUT_SECONDS}s`,
                "--new-cards-in-duration": `${NEW_CARDS_IN_SECONDS}s`,
                "--new-cards-shine-duration": `${NEW_CARDS_SHINE_SECONDS}s`,
                "--new-cards-drop-rotate": `${(index - centerIndex) * 2.2}deg`,
                "--new-cards-enter-rotate": `${(centerIndex - index) * 2.2}deg`,
              } as CSSProperties
            }
            onAnimationEnd={(event) => {
              if (
                event.target !== event.currentTarget ||
                newCardsSequence < 1 ||
                reduceMotion ||
                newCardsPhase !== "incoming"
              ) {
                return;
              }
              playSound("newCards");
            }}
          >
            <QuestCard
              className={`${styles.questSelectionCard} ${styles.newCardsCardFront}`}
              genres={item.genres}
              game={item.game}
              minimumDurationMinutes={item.minimumDurationMinutes}
              moodTitle={item.mood.title}
              name={item.name}
              objective={item.objective}
              suggestedDurationMinutes={item.suggestedDurationMinutes}
            >
              <span
                className={styles.newCardsShine}
                aria-hidden="true"
              />
            </QuestCard>
            <QuestCardBack className={styles.newCardsCardBack} />
          </span>
        </motion.span>
      </button>
    </motion.div>
  );
}
