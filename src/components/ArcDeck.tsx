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
import type { MoodId } from "../data/moods";
import { useTiltEffect } from "../hooks/useTiltEffect";
import {
  moodCardLayoutId,
  moodOfferSlotLayoutId,
} from "../lib/cardMotion";
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
  selectedId: MoodId | null;
  onCenter: (index: number, focus?: boolean) => void;
  onSelect: (id: MoodId, focusNext?: boolean) => void;
};

const WHEEL_SETTLE_MS = 90;
const CAROUSEL_REVEAL_DELAY_MS = 240;
const MOOD_FADE_EASE = [0.22, 0.8, 0.24, 1] as const;
const MOOD_POSITION_TRANSITION = {
  type: "spring" as const,
  stiffness: 230,
  damping: 25,
  mass: 0.9,
  restDelta: 0.001,
  restSpeed: 0.001,
};
const FAKE_CARD_POSES = [
  { x: -8, y: 9, rotate: -4.2 },
  { x: 8, y: 7, rotate: 3.1 },
  { x: -2, y: 12, rotate: -1.2 },
] as const;

export function ArcDeck({
  items,
  initialItemId,
  label,
  layerPresent,
  layoutSessionId,
  reduceMotion,
  onSelect,
}: Props) {
  const initialIndex = Math.max(
    0,
    items.findIndex((item) => item.id === initialItemId),
  );
  const [activeIndex, setActiveIndex] = useState(initialIndex);
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
  const cardGap = mobile ? 282 : 360;

  useEffect(() => {
    animationRef.current?.stop();
    position.set(initialIndex);
    targetRef.current = initialIndex;
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
    setActiveIndex((current) => {
      if (current !== nextIndex && !selectedId) playSound("moodStep");
      return nextIndex;
    });
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
        <span className={styles.moodCardStack} aria-hidden="true">
          {FAKE_CARD_POSES.map((pose, index) => (
            <motion.span
              className={styles.moodFakeCardSlot}
              key={index}
              style={{
                rotate: pose.rotate,
                x: pose.x,
                y: pose.y,
                zIndex: index,
              }}
            >
              <SelectionCardBody
                layoutId={moodOfferSlotLayoutId(layoutSessionId, index)}
                reduceMotion={reduceMotion}
              />
            </motion.span>
          ))}
        </span>

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
        <span>Drag or Scroll</span>
        <MoodArrow right />
      </motion.div>

      <span className={styles.srOnly} aria-live="polite">
        {items[activeIndex]
          ? `${activeIndex + 1} of ${items.length}: ${
              items[activeIndex].title
            }. ${items[activeIndex].subtitle}`
          : "No cards available"}
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
  selectedId,
  onCenter,
  onSelect,
}: CardProps) {
  const distance = useTransform(position, (latest) =>
    loopDistance(index - latest, itemCount),
  );
  const x = useTransform(distance, (value) => value * (mobile ? 282 : 360));
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
                filter: "blur(0px)",
                opacity: 0,
                scale: 0.94,
                x: 0,
                y: 56,
              }
        }
        animate={
          foregroundExiting
            ? primaryExit
              ? {
                  filter: "blur(0px)",
                  opacity: 0,
                  scale: 0.95,
                  x: 0,
                  y: 24,
                }
              : {
                  filter: "blur(0px)",
                  opacity: 0,
                  scale: 0.95,
                  x: discreteDistance < 0 ? -46 : 46,
                  y: 24,
                }
            : {
                filter:
                  visible && !revealCards && !center
                    ? "blur(5px)"
                    : "blur(0px)",
                opacity: visible && (revealCards || center) ? 1 : 0,
                scale: revealCards || center ? 1 : 0.92,
                x: 0,
                y: revealCards || center ? 0 : 72,
              }
        }
        transition={
          reduceMotion
            ? { duration: 0 }
            : foregroundExiting
              ? primaryExit
                ? {
                    opacity: {
                      duration: 0.42,
                      ease: MOOD_FADE_EASE,
                    },
                    filter: { duration: 0 },
                    scale: MOOD_POSITION_TRANSITION,
                    x: { duration: 0 },
                    y: MOOD_POSITION_TRANSITION,
                  }
                : {
                    opacity: {
                      duration: 0.42,
                      ease: MOOD_FADE_EASE,
                    },
                    filter: { duration: 0 },
                    scale: MOOD_POSITION_TRANSITION,
                    x: MOOD_POSITION_TRANSITION,
                    y: MOOD_POSITION_TRANSITION,
                  }
              : {
                  x: MOOD_POSITION_TRANSITION,
                  y: MOOD_POSITION_TRANSITION,
                  scale: MOOD_POSITION_TRANSITION,
                  opacity: {
                    duration: 0.32,
                    ease: MOOD_FADE_EASE,
                  },
                  filter: {
                    duration: 0.3,
                    ease: MOOD_FADE_EASE,
                  },
                }
        }
      >
        <motion.button
          className={styles.arcCardHitArea}
          data-flow-focus={center || undefined}
          data-selected={selected || undefined}
          type="button"
          tabIndex={center ? 0 : -1}
          aria-current={center ? "true" : undefined}
          aria-label={`${center ? "Choose" : "Center"} ${item.title}. ${
            item.subtitle
          }`}
          style={{
            rotateX,
            rotateY,
            transformPerspective: 1_000,
          }}
          whileHover={
            reduceMotion || !center ? undefined : { scale: 1.035, y: -8 }
          }
          whileFocus={
            reduceMotion || !center ? undefined : { scale: 1.025, y: -5 }
          }
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 24,
            mass: 0.74,
          }}
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
          onPointerOut={handlePointerLeave}
        >
          <SelectionCardBody
            contentKey={`mood-${item.id}`}
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
              <MoodIllustration
                className={styles.moodIllustration}
                moodId={item.id}
              />
            </motion.span>
          </SelectionCardBody>
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
