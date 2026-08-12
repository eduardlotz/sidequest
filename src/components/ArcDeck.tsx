import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
  type MotionValue,
} from "motion/react";
import {
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
  type WheelEvent,
} from "react";
import { useTranslation } from "react-i18next";
import type { MoodId } from "../data/moods";
import { getMoodArtStyle } from "../data/questColors";
import { useTiltEffect } from "../hooks/useTiltEffect";
import { moodCardLayoutId } from "../lib/cardMotion";
import { playSound } from "../lib/sound";
import styles from "../App.module.css";
import { MoodIllustration } from "./MoodIllustration";
import { SelectionCardBody } from "./SelectionCard";

export type ArcDeckItem = {
  id: MoodId;
  title: string;
  subtitle: string;
};

type Props = {
  items: readonly ArcDeckItem[];
  initialItemId?: MoodId;
  label: string;
  layerPresent: boolean;
  layoutSessionId: number | string;
  reduceMotion: boolean;
  returningFromQuests: boolean;
  onSelect: (id: MoodId) => boolean;
};

type DragState = {
  pointerId: number;
  startX: number;
  startPosition: number;
  lastX: number;
  lastAt: number;
  velocityX: number;
  moved: boolean;
};

type CardProps = {
  activeIndex: number;
  index: number;
  item: ArcDeckItem;
  itemCount: number;
  layerPresent: boolean;
  layoutSessionId: number | string;
  mobile: boolean;
  position: MotionValue<number>;
  reduceMotion: boolean;
  revealCards: boolean;
  returningFromQuests: boolean;
  selectedId: MoodId | null;
  onCenter: (index: number, focus?: boolean) => void;
  onSelect: (id: MoodId, focusNext?: boolean) => void;
};

const WHEEL_SETTLE_MS = 90;
const CAROUSEL_REVEAL_DELAY_MS = 240;
const CARD_CENTER_STAGGER_SECONDS = 0.035;
const MOOD_FADE_EASE = [0.22, 0.8, 0.24, 1] as const;
const MOOD_POSITION_TRANSITION = {
  type: "spring" as const,
  stiffness: 260,
  damping: 30,
  mass: 0.82,
  restDelta: 0.01,
  restSpeed: 0.01,
};
const MOBILE_CARD_GAP = 330;
const DESKTOP_CARD_GAP = 520;

export function ArcDeck({
  items,
  initialItemId,
  label,
  layerPresent,
  layoutSessionId,
  reduceMotion,
  returningFromQuests,
  onSelect,
}: Props) {
  const { t } = useTranslation();
  const initialIndex = Math.max(
    0,
    items.findIndex((item) => item.id === initialItemId),
  );
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const activeIndexRef = useRef(initialIndex);
  const [selectedId, setSelectedId] = useState<MoodId | null>(null);
  const position = useMotionValue(initialIndex);
  const targetRef = useRef(initialIndex);
  const animationRef = useRef<{ stop: () => void } | null>(null);
  const wheelTimeoutRef = useRef<number | null>(null);
  const dragRef = useRef<DragState | null>(null);
  const suppressClickRef = useRef(false);
  const selectionFrameRef = useRef<number | null>(null);
  const revealTimeoutRef = useRef<number | null>(null);
  const deckRef = useRef<HTMLDivElement>(null);
  const mobile = useMobileLayout();
  const [revealCards, setRevealCards] = useState(
    reduceMotion || !initialItemId,
  );
  const itemKey = items.map((item) => item.id).join("|");
  const cardGap = mobile ? MOBILE_CARD_GAP : DESKTOP_CARD_GAP;

  useEffect(() => {
    animationRef.current?.stop();
    position.set(initialIndex);
    targetRef.current = initialIndex;
    activeIndexRef.current = initialIndex;
    setActiveIndex(initialIndex);
    setSelectedId(null);
    setRevealCards(reduceMotion || !initialItemId);
    if (revealTimeoutRef.current !== null) {
      window.clearTimeout(revealTimeoutRef.current);
      revealTimeoutRef.current = null;
    }
    if (initialItemId && !reduceMotion) {
      revealTimeoutRef.current = window.setTimeout(() => {
        revealTimeoutRef.current = null;
        setRevealCards(true);
      }, CAROUSEL_REVEAL_DELAY_MS);
    }
  }, [initialIndex, initialItemId, itemKey, position, reduceMotion]);

  useEffect(
    () => () => {
      animationRef.current?.stop();
      if (wheelTimeoutRef.current !== null) {
        window.clearTimeout(wheelTimeoutRef.current);
      }
      if (selectionFrameRef.current !== null) {
        window.cancelAnimationFrame(selectionFrameRef.current);
      }
      if (revealTimeoutRef.current !== null) {
        window.clearTimeout(revealTimeoutRef.current);
      }
    },
    [],
  );

  useMotionValueEvent(position, "change", (latest) => {
    if (items.length === 0) return;
    const nextIndex = modulo(Math.round(latest), items.length);
    if (activeIndexRef.current === nextIndex) return;
    activeIndexRef.current = nextIndex;
    setActiveIndex(nextIndex);
    if (!selectedId) playSound("moodStep");
  });

  function moveTo(next: number, focus = false) {
    if (selectedId || items.length < 2) return;
    animationRef.current?.stop();
    targetRef.current = next;
    if (reduceMotion) {
      position.set(next);
      if (focus) focusCenterCard();
      return;
    }
    animationRef.current = animate(position, next, {
      type: "spring",
      stiffness: 300,
      damping: 32,
      mass: 0.74,
      restDelta: 0.002,
      restSpeed: 0.002,
      onComplete: () => {
        animationRef.current = null;
        if (focus) focusCenterCard();
      },
    });
  }

  function centerIndex(index: number, focus = false) {
    const current = Math.round(targetRef.current);
    const currentIndex = modulo(current, items.length);
    const distance = loopDistance(index - currentIndex, items.length);
    moveTo(current + distance, focus);
  }

  function focusCenterCard() {
    window.requestAnimationFrame(() => {
      deckRef.current
        ?.querySelector<HTMLButtonElement>("[data-center] button")
        ?.focus({ preventScroll: true });
    });
  }

  function handleWheel(event: WheelEvent<HTMLDivElement>) {
    event.preventDefault();
    if (selectedId || items.length < 2) return;
    const raw =
      Math.abs(event.deltaX) > Math.abs(event.deltaY)
        ? event.deltaX
        : event.deltaY;
    const pixels = event.deltaMode === 1 ? raw * 16 : raw;
    const advance = clamp(pixels / (mobile ? 110 : 136), -2.5, 2.5);
    if (Math.abs(advance) < 0.01) return;
    moveTo(targetRef.current + advance);
    if (wheelTimeoutRef.current !== null) {
      window.clearTimeout(wheelTimeoutRef.current);
    }
    wheelTimeoutRef.current = window.setTimeout(() => {
      wheelTimeoutRef.current = null;
      moveTo(Math.round(targetRef.current));
    }, WHEEL_SETTLE_MS);
  }

  function handlePointerDown(event: ReactPointerEvent<HTMLDivElement>) {
    if (selectedId || items.length < 2 || event.button !== 0) return;
    animationRef.current?.stop();
    targetRef.current = position.get();
    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startPosition: position.get(),
      lastX: event.clientX,
      lastAt: performance.now(),
      velocityX: 0,
      moved: false,
    };
  }

  function handlePointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;
    const now = performance.now();
    const movement = event.clientX - drag.startX;
    const elapsed = Math.max(1, now - drag.lastAt);
    drag.velocityX = (event.clientX - drag.lastX) / elapsed;
    drag.lastX = event.clientX;
    drag.lastAt = now;

    if (Math.abs(movement) > 7 && !drag.moved) {
      drag.moved = true;
      event.currentTarget.setPointerCapture(event.pointerId);
    }
    if (!drag.moved) return;

    const next = drag.startPosition - movement / cardGap;
    targetRef.current = next;
    position.set(next);
  }

  function finishPointer(event: ReactPointerEvent<HTMLDivElement>) {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;
    const projected = clamp(
      position.get() + (-drag.velocityX * 180) / cardGap,
      position.get() - 2.5,
      position.get() + 2.5,
    );
    suppressClickRef.current = drag.moved;
    if (drag.moved) {
      window.setTimeout(() => {
        suppressClickRef.current = false;
      }, 0);
    }
    targetRef.current = projected;
    dragRef.current = null;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    moveTo(Math.round(projected));
  }

  function select(itemId: MoodId, focusNext = false) {
    if (suppressClickRef.current) {
      suppressClickRef.current = false;
      return;
    }
    if (selectedId || selectionFrameRef.current !== null) return;
    setSelectedId(itemId);
    playSound("cardSelect");
    if (reduceMotion) {
      if (!onSelect(itemId)) setSelectedId(null);
    } else {
      selectionFrameRef.current = window.requestAnimationFrame(() => {
        selectionFrameRef.current = null;
        if (!onSelect(itemId)) setSelectedId(null);
      });
    }
    if (focusNext) {
      moveFocusToNextStep(reduceMotion ? 0 : 620);
    }
  }

  return (
    <div
      className={styles.arcDeck}
      ref={deckRef}
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      onWheel={handleWheel}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={finishPointer}
      onPointerCancel={finishPointer}
    >
      <div className={styles.arcDeckTrack}>
        {items.map((item, index) => (
          <ArcCard
            activeIndex={activeIndex}
            index={index}
            item={item}
            itemCount={items.length}
            key={item.id}
            layerPresent={layerPresent}
            layoutSessionId={layoutSessionId}
            mobile={mobile}
            position={position}
            reduceMotion={reduceMotion}
            revealCards={revealCards}
            returningFromQuests={returningFromQuests}
            selectedId={selectedId}
            onCenter={centerIndex}
            onSelect={select}
          />
        ))}
      </div>

      <motion.div
        className={styles.moodDeckControls}
        aria-hidden="true"
        animate={{ opacity: selectedId || !layerPresent ? 0 : 1 }}
        transition={{ duration: reduceMotion ? 0 : 0.18 }}
      >
        <MoodArrow />
        <span>{t("ui.arc.dragOrScroll")}</span>
        <MoodArrow right />
      </motion.div>

      <span className={styles.srOnly} aria-live="polite">
        {items[activeIndex]
          ? t("ui.arc.status", {
              current: activeIndex + 1,
              total: items.length,
              title: items[activeIndex].title,
              subtitle: items[activeIndex].subtitle,
            })
          : t("ui.arc.noCards")}
      </span>
    </div>
  );
}

function ArcCard({
  activeIndex,
  index,
  item,
  itemCount,
  layerPresent,
  layoutSessionId,
  mobile,
  position,
  reduceMotion,
  revealCards,
  returningFromQuests,
  selectedId,
  onCenter,
  onSelect,
}: CardProps) {
  const { t } = useTranslation();
  const distance = useTransform(position, (latest) =>
    loopDistance(index - latest, itemCount),
  );
  const x = useTransform(
    distance,
    (value) => value * (mobile ? MOBILE_CARD_GAP : DESKTOP_CARD_GAP),
  );
  const y = useTransform(distance, (value) => -42 + Math.abs(value) * 92);
  const rotate = useTransform(distance, (value) => value * 11);
  const scale = useTransform(distance, (value) =>
    Math.max(0.78, 1 - Math.abs(value) * 0.1),
  );
  const contentOpacity = useTransform(distance, (value) =>
    Math.max(0.12, 1 - Math.abs(value) * 0.72),
  );
  const zIndex = useTransform(distance, (value) =>
    Math.round(30 - Math.abs(value) * 5),
  );
  const discreteDistance = loopDistance(index - activeIndex, itemCount);
  const visible = Math.abs(discreteDistance) <= 2;
  const interactive = Math.abs(discreteDistance) <= 1;
  const center = index === activeIndex;
  const selected = selectedId === item.id;
  const foregroundExiting = Boolean(selectedId) || !layerPresent;
  const primaryExit = selected || (!selectedId && center);
  const absoluteDistance = Math.min(2, Math.abs(discreteDistance));
  const centerStaggerDelay = absoluteDistance * CARD_CENTER_STAGGER_SECONDS;
  const direction = discreteDistance < 0 ? -1 : 1;
  const returningOffsetX = center ? 0 : direction * (32 + absoluteDistance * 10);
  const returningOffsetY = center ? 36 : 28;
  const moodExitX = primaryExit
    ? 0
    : direction * (42 + absoluteDistance * 12);
  const moodExitY = primaryExit ? 32 : 44;
  const positionDelay = foregroundExiting
    ? centerStaggerDelay
    : revealCards
      ? centerStaggerDelay
      : 0;
  const {
    handlePointerEnter,
    handlePointerLeave,
    handlePointerMove,
    resetTilt,
    rotateX,
    rotateY,
  } = useTiltEffect({
    maxTilt: 14,
    reduceMotion: reduceMotion || !center,
  });
  const illustrationX = useTransform(rotateY, (value) => value * -1.7);
  const illustrationY = useTransform(rotateX, (value) => value * 1.35);

  useEffect(() => {
    if (!center || selectedId) resetTilt();
  }, [center, resetTilt, selectedId]);

  return (
    <motion.div
      className={styles.arcCardSlot}
      data-center={center || undefined}
      data-visible={visible || undefined}
      style={{
        pointerEvents:
          interactive && !selectedId && layerPresent && (revealCards || center)
            ? "auto"
            : "none",
        rotate,
        scale,
        x,
        y,
        zIndex,
      }}
    >
      <motion.div
        className={styles.moodCardExit}
        initial={
          reduceMotion
            ? false
            : {
                filter: "none",
                opacity: 0,
                scale: returningFromQuests ? 0.96 : 0.94,
                x: returningFromQuests ? returningOffsetX : 0,
                y: returningFromQuests ? returningOffsetY : 56,
              }
        }
        animate={
          foregroundExiting
            ? {
                filter: "none",
                opacity: 0,
                scale: primaryExit ? 0.96 : 0.94,
                x: moodExitX,
                y: moodExitY,
              }
            : {
                filter:
                  returningFromQuests
                    ? "none"
                    : visible && !revealCards && !center
                    ? "blur(5px)"
                    : "blur(0px)",
                opacity: visible && (revealCards || center) ? 1 : 0,
                scale: revealCards || center ? 1 : 0.92,
                x:
                  revealCards || center
                    ? 0
                    : returningFromQuests
                      ? returningOffsetX
                      : 0,
                y:
                  revealCards || center
                    ? 0
                    : returningFromQuests
                      ? returningOffsetY
                      : 72,
              }
        }
        transition={
          reduceMotion
            ? { duration: 0 }
            : {
                x: {
                  ...MOOD_POSITION_TRANSITION,
                  delay: positionDelay,
                },
                y: {
                  ...MOOD_POSITION_TRANSITION,
                  delay: positionDelay,
                },
                scale: {
                  ...MOOD_POSITION_TRANSITION,
                  delay: positionDelay,
                },
                opacity: {
                  duration: foregroundExiting ? 0.26 : 0.28,
                  ease: MOOD_FADE_EASE,
                  delay: positionDelay,
                },
                filter: {
                  duration:
                    foregroundExiting || returningFromQuests ? 0 : 0.3,
                  ease: MOOD_FADE_EASE,
                  delay: positionDelay,
                },
              }
        }
      >
        <motion.button
          className={styles.arcCardHitArea}
          data-flow-focus={center || undefined}
          data-selected={selected || undefined}
          data-sound-card={center || undefined}
          data-sound-skip={!center || undefined}
          type="button"
          tabIndex={center ? 0 : -1}
          aria-current={center ? "true" : undefined}
          aria-label={t("ui.arc.cardLabel", {
            action: t(center ? "ui.arc.choose" : "ui.arc.center"),
            title: item.title,
            subtitle: item.subtitle,
          })}
          animate="rest"
          style={{
            ...getMoodArtStyle(item.id),
          }}
          whileHover={
            reduceMotion || !center ? undefined : "hover"
          }
          whileFocus={
            reduceMotion || !center ? undefined : "focus"
          }
          onClick={(event) => {
            const keyboardClick = event.detail === 0;
            if (center) onSelect(item.id, keyboardClick);
            else onCenter(index, keyboardClick);
          }}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
              event.preventDefault();
              const direction = event.key === "ArrowRight" ? 1 : -1;
              onCenter(modulo(activeIndex + direction, itemCount), true);
            }
          }}
          onPointerEnter={handlePointerEnter}
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
        >
          <motion.span
            className={styles.moodCardTiltSurface}
            style={{
              rotateX,
              rotateY,
              transformPerspective: 1_000,
            }}
            variants={{
              rest: { scale: 1, y: 0 },
              hover: { scale: 1.035, y: -8 },
              focus: { scale: 1.025, y: -5 },
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 24,
              mass: 0.74,
            }}
          >
            <SelectionCardBody
              className={styles.moodSelectionCardBody}
              contentKey={`mood-${item.id}`}
              contentClassName={styles.moodSelectionCardContent}
              contentVisible={!foregroundExiting || primaryExit}
              layoutId={moodCardLayoutId(layoutSessionId, item.id)}
              reduceMotion={reduceMotion}
            >
              <motion.span
                className={styles.moodCardVisual}
                style={{ opacity: contentOpacity }}
              >
                <span className={styles.arcCardContent}>
                  <strong className={styles.arcCardTitle}>{item.title}</strong>
                  <span className={styles.arcCardDescription}>
                    {item.subtitle}
                  </span>
                </span>
                <motion.span
                  className={styles.moodIllustrationLayer}
                  style={{
                    x: illustrationX,
                    y: illustrationY,
                  }}
                >
                  <MoodIllustration
                    className={styles.moodIllustration}
                    moodId={item.id}
                  />
                </motion.span>
              </motion.span>
            </SelectionCardBody>
          </motion.span>
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

function MoodArrow({ right = false }: { right?: boolean }) {
  return (
    <svg
      className={styles.moodArrow}
      data-right={right || undefined}
      focusable="false"
      viewBox="0 0 59 35"
    >
      <path
        d="M51.6755 13.9379C48.4719 13.2713 31.8891 14.3571 24.4896 16.7861C17.0901 19.2152 11.5636 21.9061 10.09 23.088M13.6143 11.3061C12.261 13.6443 9.60736 18.8428 8.89146 22.1563C9.03014 23.5733 10.188 24.4533 11.9153 25.1972C13.6426 25.9412 15.9043 26.5224 20.9361 27.6298"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.5"
      />
    </svg>
  );
}

function loopDistance(distance: number, length: number) {
  if (length <= 1) return 0;
  const half = length / 2;
  return modulo(distance + half, length) - half;
}

function modulo(value: number, length: number) {
  return ((value % length) + length) % length;
}

function clamp(value: number, minimum: number, maximum: number) {
  return Math.max(minimum, Math.min(maximum, value));
}

function moveFocusToNextStep(delay: number) {
  window.setTimeout(() => {
    const destinations =
      document.querySelectorAll<HTMLElement>("[data-flow-focus]");
    destinations
      .item(destinations.length - 1)
      ?.focus({ preventScroll: true });
  }, delay);
}

function useMobileLayout() {
  const [mobile, setMobile] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(max-width: 820px)").matches,
  );

  useEffect(() => {
    const media = window.matchMedia("(max-width: 820px)");
    const update = () => setMobile(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return mobile;
}
