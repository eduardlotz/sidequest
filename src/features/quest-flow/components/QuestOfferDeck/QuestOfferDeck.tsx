import { motion } from "motion/react";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { useTranslation } from "react-i18next";
import type { Quest } from "../../../../domain/quest/model";
import { getMoodAccentStyle } from "../../../../data/questColors";
import { useTiltEffect } from "../../../../hooks/useTiltEffect";
import {
  CARD_DISPLAY_TRANSITION,
  CARD_LAYOUT_TRANSITION,
  CARD_RETURN_LAYOUT_TRANSITION,
  CARD_RETURN_TRANSITION,
  questCardLayoutId,
  type CardReturnPose,
} from "../../../../lib/cardMotion";
import { playSound } from "../../../../lib/sound";
import { VisuallyHidden } from "../../../../shared/ui/VisuallyHidden/VisuallyHidden";
import styles from "./QuestOfferDeck.module.css";
import { QuestCard } from "../../../../shared/quest-card/QuestCard/QuestCard";
import cardStyles from "../../../../shared/quest-card/QuestCard/QuestCard.module.css";
import { QuestCardBack } from "../../../../shared/quest-card/QuestCardBack/QuestCardBack";
import { plainObjectiveText } from "../../../../shared/quest-card/QuestObjectiveText/QuestObjectiveText";
import { SELECTION_HANDOFF_EASE } from "../../../../shared/motion/transitions";
import { usePlayLayout } from "../../usePlayLayout";
import { useQuestCardDrag } from "./useQuestCardDrag";
import { useQuestStore } from "../../../../stores/useQuestStore";
import { InfoText } from "../../../../shared/ui/InfoText/InfoText";

export type QuestOfferItem = Quest & { offerId: string };
export type NewCardsPhase = "idle" | "outgoing" | "incoming";
type QuestEntryMotion = "bottom" | "shared" | "return";

type Props = {
  items: readonly QuestOfferItem[];
  entryMotion: QuestEntryMotion;
  layoutSessionId: string;
  reduceMotion: boolean;
  returningQuestId?: string;
  returnPose?: CardReturnPose;
  returning: boolean;
  returningToMoods: boolean;
  newCardsSequence: number;
  newCardsPhase: NewCardsPhase;
  onSelectionStart: (previewRotation: number) => void;
  onSelect: (questId: string) => boolean;
};

type CardProps = {
  entryMotion: QuestEntryMotion;
  item: QuestOfferItem;
  index: number;
  isTopCard: boolean;
  stackPosition: "front" | "middle" | "back";
  reduceMotion: boolean;
  returnPose?: CardReturnPose;
  returning: boolean;
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
// const CARD_CENTER_STAGGER_SECONDS = 0.04;
const CARD_CENTER_STAGGER_SECONDS = 0.08;
const MOOD_HANDOFF_OFFSET_Y = 50;
const NEW_CARDS_STAGGER_SECONDS = 0.12;
const CARD_REST_POSE = {
  filter: "blur(0px)",
  opacity: 1,
  x: 0,
  y: 0,
  scale: 1,
};

function cardDeparturePose(index: number, reduceMotion: boolean) {
  return {
    // filter: "blur(5px)",
    // opacity: 0,
    // x: reduceMotion ? 0 : index === 0 ? -210 : index === 2 ? 210 : 0,
    // y: reduceMotion ? 0 : index === 1 ? -150 : 120,
    // scale: reduceMotion ? 1 : 0.72,
    filter: "blur(8px)",
    opacity: 0,
    // x: reduceMotion ? 0 : index === 0 ? -70 : index === 2 ? 70 : 0,
    x: 0,
    y: reduceMotion ? 0 : MOOD_HANDOFF_OFFSET_Y,
    scale: reduceMotion ? 1 : 0.95,
  };
}

export function QuestOfferDeck({
  items,
  entryMotion,
  layoutSessionId,
  reduceMotion,
  returningQuestId,
  returnPose,
  returning,
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
  const deckRef = useRef<HTMLDivElement>(null);
  const selectionFrameRef = useRef<number | null>(null);
  const { isCompact } = usePlayLayout();
  const dealingNewCards = newCardsPhase !== "idle";
  const markQuestsSeen = useQuestStore((state) => state.markQuestsSeen);

  useEffect(() => {
    if (returningToMoods || dealingNewCards) return;
    const visibleItems = isCompact
      ? items.slice(activeCardIndex, activeCardIndex + 1)
      : items;
    markQuestsSeen(visibleItems.map((item) => item.id));
  }, [
    activeCardIndex,
    dealingNewCards,
    isCompact,
    items,
    markQuestsSeen,
    returningToMoods,
  ]);

  useEffect(() => {
    setSelectedId(null);
    setSwipingIds(new Set());
    setReturningSwipeIds(new Set());
    const returningIndex = items.findIndex(
      (item) => item.offerId === returningQuestId,
    );
    setActiveCardIndex((current) =>
      returningIndex >= 0
        ? returningIndex
        : returnPose
          ? Math.min(current, Math.max(0, items.length - 1))
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
    if (selectedId || dealingNewCards || returning) return;
    playSound("cardSelect");
    onSelectionStart(previewRotation);
    setSelectedId(questId);
    const reveal = () => {
      if (!onSelect(questId)) setSelectedId(null);
    };
    if (reduceMotion) {
      reveal();
      return;
    }
    selectionFrameRef.current = window.requestAnimationFrame(() => {
      selectionFrameRef.current = null;
      reveal();
    });
  }

  function cycleCard(direction: -1 | 1, focusNext = false) {
    if (selectedId || dealingNewCards || returning || items.length < 2) return;
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
      {!items.length && <InfoText>{t("ui.pool.empty")}</InfoText>}
      {items.map((item, index) => {
        const displayIndex =
          items.length === 1 ? 1 : items.length === 2 ? index * 2 : index;
        const stackOffset =
          (index - activeCardIndex + items.length) % items.length;
        const stackPosition =
          stackOffset === 0 ? "front" : stackOffset === 1 ? "middle" : "back";
        return (
          <motion.div
            className={`${cardStyles.questCardFrame} ${styles.previewCardSlot}`}
            data-position={
              displayIndex === 0
                ? "left"
                : displayIndex === 2
                  ? "right"
                  : "center"
            }
            data-stack-position={stackPosition}
            data-swipe-exiting={swipingIds.has(item.offerId) || undefined}
            data-swipe-returning={
              returningSwipeIds.has(item.offerId) || undefined
            }
            key={`quest-offer-slot-${index}`}
          >
            <QuestOfferCard
              entryMotion={entryMotion}
              item={item}
              index={displayIndex}
              isTopCard={stackOffset === 0}
              key={`${layoutSessionId}-${index}`}
              layoutSessionId={layoutSessionId}
              stackPosition={stackPosition}
              reduceMotion={reduceMotion}
              returnPose={
                item.offerId === returningQuestId ? returnPose : undefined
              }
              returning={returning}
              returningToMoods={returningToMoods}
              newCardsSequence={newCardsSequence}
              newCardsPhase={newCardsPhase}
              selected={selectedId === item.offerId}
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
  item,
  index,
  isTopCard,
  layoutSessionId,
  stackPosition,
  reduceMotion,
  returnPose,
  returning,
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
  const personalBest = useQuestStore(
    (state) => state.questProgressById[item.id]?.bestTimeMs,
  );
  const { isCompact } = usePlayLayout();
  const dealingNewCards = newCardsPhase !== "idle";
  const drag = useQuestCardDrag({
    reduceMotion,
    onCycle: () => onCycle(1),
    onExit: () => onSwipeStart(item.offerId),
    onReturn: () => onSwipeReturnStart(item.offerId),
    onComplete: () => onSwipeComplete(item.offerId),
  });

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
    reduceMotion,
  });

  useEffect(() => {
    if (selectionStarted) resetTilt();
  }, [resetTilt, selectionStarted]);

  const centerOffsetX = isCompact
    ? 0
    : index === 0
      ? -70
      : index === 2
        ? 70
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
  const returningFromActive =
    entryMotion === "return" && !selectionStarted && !returningToMoods;
  const positionTransition = returningFromActive
    ? CARD_RETURN_TRANSITION
    : moodHandoffActive
      ? MOOD_HANDOFF_TRANSITION
      : CARD_POSITION_TRANSITION;
  const positionDelay =
    selectionStarted || entryMotion === "return"
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
      layoutId={questCardLayoutId(layoutSessionId, item.offerId)}
      layoutCrossfade={false}
      initial={
        reduceMotion || newCardsSequence > 0
          ? false
          : entryMotion === "return"
            ? returnPose
              ? false
              : cardDeparturePose(index, reduceMotion)
            : entryMotion === "shared"
              ? {
                  filter: "blur(0px)",
                  opacity: 0,
                  // x: 0,
                  x: centerOffsetX,
                  y: MOOD_HANDOFF_OFFSET_Y,
                  scale: 0.95,
                }
              : {
                  filter: "blur(8px)",
                  opacity: 0,
                  x: centerOffsetX,
                  y: 50,
                  scale: 0.9,
                }
      }
      animate={
        selectionStarted && !selected
          ? cardDeparturePose(index, reduceMotion)
          : returningToMoods
            ? {
                filter: "blur(8px)",
                opacity: 0,
                x: centerOffsetX,
                y: MOOD_HANDOFF_OFFSET_Y,
                scale: 0.96,
              }
            : CARD_REST_POSE
      }
      exit={
        returningToMoods
          ? {
              filter: "blur(8px)",
              opacity: 0,
              x: centerOffsetX,
              y: MOOD_HANDOFF_OFFSET_Y,
              scale: 0.96,
            }
          : selectionStarted
            ? selected
              ? {
                  filter: "blur(8px)",
                  opacity: 0,
                  scale: 1,
                  transition: { opacity: { duration: 0 } },
                }
              : cardDeparturePose(index, reduceMotion)
            : CARD_REST_POSE
      }
      transition={
        reduceMotion
          ? { duration: 0 }
          : {
              layout: returnPose
                ? CARD_RETURN_LAYOUT_TRANSITION
                : CARD_LAYOUT_TRANSITION,
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
                duration: returningFromActive
                  ? 0.5
                  : moodHandoffActive
                    ? 0.5
                    : 0.3,
                ease: CARD_FADE_EASE,
                delay: positionDelay,
              },
              filter: {
                duration: returningFromActive
                  ? 0.7
                  : moodHandoffActive
                    ? 0.5
                    : 0.6,
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
        data-offer-id={item.offerId}
        data-selected={selected || undefined}
        data-returning={(returning && returnPose !== undefined) || undefined}
        type="button"
        disabled={dealingNewCards || returning}
        tabIndex={isCompact && !isTopCard ? -1 : undefined}
        style={getMoodAccentStyle(item.mood.id)}
        onClick={() => {
          if (suppressClickRef.current || (isCompact && !isTopCard)) return;
          resetTilt();
          onSelect(item.offerId, isCompact ? 0 : (CARD_ROTATIONS[index] ?? 0));
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
          className={styles.previewCardDisplay}
          initial={
            reduceMotion || !returnPose
              ? false
              : { scale: returnPose.scale, rotate: returnPose.rotate }
          }
          animate={{
            scale: 1,
            rotate: isCompact ? 0 : (CARD_ROTATIONS[index] ?? 0),
          }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : returnPose
                ? CARD_RETURN_TRANSITION
                : CARD_DISPLAY_TRANSITION
          }
        >
          <motion.span
            className={styles.previewCardTilt}
            drag={
              isCompact &&
              isTopCard &&
              !selectionStarted &&
              !dealingNewCards &&
              !returning
            }
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={1}
            dragMomentum={false}
            onPointerDown={() => {
              suppressClickRef.current = false;
            }}
            onDrag={(event, info) => {
              if (Math.hypot(info.offset.x, info.offset.y) > 8) {
                suppressClickRef.current = true;
              }
              drag.onDrag(event, info);
            }}
            onDragEnd={drag.onDragEnd}
            style={{
              x: drag.x,
              y: drag.y,
              rotate: isCompact ? drag.rotate : 0,
              rotateX: isCompact ? drag.rotateX : rotateX,
              rotateY: isCompact ? drag.rotateY : rotateY,
              transformPerspective: 1000,
            }}
          >
            <motion.span
              className={styles.newCardsCard}
              key={`new-cards-${newCardsSequence}`}
              initial={reduceMotion || !returnPose ? false : returnPose.surface}
              animate={{ y: 0, rotateX: 0, rotateY: 0, scale: 1 }}
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : returnPose
                    ? CARD_RETURN_TRANSITION
                    : CARD_DISPLAY_TRANSITION.scale
              }
              data-new-cards-phase={
                newCardsPhase === "idle" ? undefined : newCardsPhase
              }
              style={
                {
                  "--new-cards-delay": `${index * NEW_CARDS_STAGGER_SECONDS}s`,
                  "--new-cards-drop-rotate": `${(index - 1) * 2.2}deg`,
                  "--new-cards-enter-rotate": `${(1 - index) * 2.2}deg`,
                } as CSSProperties
              }
              onAnimationEnd={(event) => {
                if (
                  event.target !== event.currentTarget ||
                  newCardsSequence < 1 ||
                  reduceMotion ||
                  newCardsPhase !== "incoming"
                )
                  return;
                playSound("newCards");
              }}
            >
              <QuestCard
                bestTimeMs={personalBest}
                className={`${styles.questSelectionCard} ${styles.newCardsCardFront}`}
                genres={item.genres}
                type={item.type}
                tags={item.tags}
                game={item.game}
                minimumDurationMinutes={item.minimumDurationMinutes}
                moodTitle={item.mood.title}
                name={item.name}
                objective={item.objective}
                suggestedDurationMinutes={item.suggestedDurationMinutes}
              >
                <span className={styles.newCardsShine} aria-hidden="true" />
              </QuestCard>
              <QuestCardBack className={styles.newCardsCardBack} />
            </motion.span>
          </motion.span>
        </motion.span>
      </button>
    </motion.div>
  );
}
