import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import type { QuestDefinition } from "../../../../data/quests";
import { getQuestCardAccentStyle } from "../../../../data/questColors";
import { useTiltEffect } from "../../../../hooks/useTiltEffect";
import { CARD_LAYOUT_TRANSITION } from "../../../../lib/cardMotion";
import { playSound } from "../../../../lib/sound";
import styles from "../../../../App.module.css";
import { QuestCardBack } from "../../../../shared/quest-card/QuestCardBack/QuestCardBack";
import { SelectionCardBody } from "../SelectionCard/SelectionCard";
import {
  MOBILE_VIEWPORT_QUERY,
  useMediaQuery,
} from "../../../../shared/hooks/useMediaQuery";
import { SELECTION_HANDOFF_EASE } from "../../../../shared/motion/transitions";

export type QuestOfferItem = QuestDefinition;
type QuestEntryMotion = "bottom" | "shared";

type Props = {
  items: readonly QuestOfferItem[];
  entryMotion: QuestEntryMotion;
  layoutSessionId: string;
  reduceMotion: boolean;
  returningQuestId?: string;
  returningToMoods: boolean;
  onSelectionStart: () => void;
  onSelect: (questId: string) => void;
};

type CardProps = {
  entryMotion: QuestEntryMotion;
  item: QuestOfferItem;
  index: number;
  isMobile: boolean;
  isTopCard: boolean;
  stackPosition: "front" | "middle" | "back";
  reduceMotion: boolean;
  returningToMoods: boolean;
  selected: boolean;
  selectionStarted: boolean;
  sharedLayoutId: string;
  layoutSessionId: string;
  onCycle: (direction: -1 | 1, focusNext?: boolean) => void;
  onSelect: (questId: string) => void;
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

export function QuestOfferDeck({
  items,
  entryMotion,
  layoutSessionId,
  reduceMotion,
  returningQuestId,
  returningToMoods,
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
  const deckRef = useRef<HTMLDivElement>(null);
  const selectionFrameRef = useRef<number | null>(null);
  const isMobile = useMediaQuery(MOBILE_VIEWPORT_QUERY);

  useEffect(() => {
    setSelectedId(null);
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

  function selectCard(questId: string) {
    if (selectedId) return;
    playSound("cardSelect");
    onSelectionStart();
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
    if (selectedId || items.length < 2) return;
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
        const slotLayoutId = `quest-offer-slot-${layoutSessionId}-${index}`;

        return (
          <motion.div
            className={styles.previewCardSlot}
            data-position={
              index === 0 ? "left" : index === 2 ? "right" : "center"
            }
            data-stack-position={stackPosition}
            key={`quest-offer-slot-${index}`}
          >
            <AnimatePresence mode="sync">
              <QuestOfferCard
                entryMotion={entryMotion}
                item={item}
                index={index}
                isMobile={isMobile}
                isTopCard={stackOffset === 0}
                key={item.id}
                layoutSessionId={layoutSessionId}
                stackPosition={stackPosition}
                reduceMotion={reduceMotion}
                returningToMoods={returningToMoods}
                selected={selectedId === item.id}
                selectionStarted={selectedId !== null}
                sharedLayoutId={slotLayoutId}
                onCycle={cycleCard}
                onSelect={selectCard}
              />
            </AnimatePresence>
          </motion.div>
        );
      })}

      <span className={styles.srOnly} aria-live="polite">
        {isMobile && items[activeCardIndex]
          ? t("ui.offers.cardStatus", {
              current: activeCardIndex + 1,
              total: items.length,
              name: items[activeCardIndex].name,
              title: items[activeCardIndex].title,
            })
          : selectedId
            ? t("ui.offers.opening", {
                title:
                  items.find((item) => item.id === selectedId)?.title ??
                  t("ui.offers.hiddenQuest"),
              })
            : ""}
      </span>
    </div>
  );
}

function QuestOfferCard({
  entryMotion,
  item,
  index,
  isMobile,
  isTopCard,
  layoutSessionId,
  stackPosition,
  reduceMotion,
  returningToMoods,
  selected,
  selectionStarted,
  sharedLayoutId,
  onCycle,
  onSelect,
}: CardProps) {
  const { t } = useTranslation();
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

  const centerOffsetX = isMobile
    ? 0
    : index === 0
      ? 150
      : index === 2
        ? -150
        : 0;
  const centerStaggerDelay = isMobile
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
      drag={isMobile && isTopCard && !selectionStarted ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragDirectionLock
      // dragElastic={0.34}
      dragElastic={1}
      dragMomentum={false}
      // dragMomentum={true}
      onPointerDown={() => {
        suppressClickRef.current = false;
      }}
      onDrag={(_, info) => {
        if (Math.abs(info.offset.x) > 8) suppressClickRef.current = true;
      }}
      onDragEnd={(_, info) => {
        // always cycle forwards no matter drag direction
        const direction =
          info.offset.x < -100 || info.velocity.x < -800
            ? 1
            : info.offset.x > 100 || info.velocity.x > 800
              ? 1
              : 0;
        if (direction) onCycle(direction);

        window.setTimeout(() => {
          suppressClickRef.current = false;
        }, 0);
      }}
      style={{
        rotate: isMobile ? 0 : (CARD_ROTATIONS[index] ?? 0),
      }}
      initial={
        reduceMotion
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
        opacity: (selectionStarted && !selected) || returningToMoods ? 0 : 1,
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
        data-flow-focus={(isMobile ? isTopCard : index === 1) || undefined}
        data-sound-card
        data-quest-id={item.id}
        data-selected={selected || undefined}
        type="button"
        tabIndex={isMobile && !isTopCard ? -1 : undefined}
        style={getQuestCardAccentStyle(item.id, item.moodId)}
        onClick={() => {
          if (suppressClickRef.current || (isMobile && !isTopCard)) return;
          resetTilt();
          onSelect(item.id);
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
        aria-label={t("ui.offers.selectQuest", {
          name: item.name,
          title: item.title,
        })}
        aria-pressed={selected}
      >
        <motion.span
          className={styles.previewCardTilt}
          style={{ rotateX, rotateY, transformPerspective: 1_000 }}
        >
          <SelectionCardBody
            animateContentOnMount={false}
            className={styles.questSelectionCardBody}
            contentClassName={styles.questSelectionCardContent}
            contentKey={`quest-${item.id}`}
            layoutId={sharedLayoutId}
            reduceMotion={reduceMotion}
          >
            <span className={styles.cardShimmer} aria-hidden="true" />
            <QuestCardBack
              minimumDurationMinutes={item.minimumDurationMinutes}
              moodTitle={t(`moods.${item.moodId}.title`)}
              name={item.name}
              suggestedDurationMinutes={item.suggestedDurationMinutes}
              title={item.title}
              variant="summary"
            />
          </SelectionCardBody>
        </motion.span>
      </button>
    </motion.div>
  );
}
