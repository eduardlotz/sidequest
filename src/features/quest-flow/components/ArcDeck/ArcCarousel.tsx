import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
} from "motion/react";
import {
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
  type CSSProperties,
  type ReactNode,
  type WheelEvent,
} from "react";
import { useTranslation } from "react-i18next";
import { playSound } from "../../../../lib/sound";
import {
  DESKTOP_VIEWPORT_QUERY,
  useMediaQuery,
} from "../../../../shared/hooks/useMediaQuery";
import { VisuallyHidden } from "../../../../shared/ui/VisuallyHidden/VisuallyHidden";
import { usePlayLayout } from "../../usePlayLayout";
import styles from "./ArcDeck.module.css";
import { ArcCard, type ArcCardBodyProps } from "./ArcCard";
import { clamp, loopDistance, modulo } from "./arcDeckMath";
import { ARC_GEOMETRY, type ArcCardShape } from "./arcDeckGeometry";

export type ArcCarouselItem = {
  id: string;
  title: string;
  subtitle: string;
};

export type ArcCarouselProps<Item extends ArcCarouselItem> = {
  items: readonly Item[];
  initialItemId?: Item["id"];
  cardShape?: ArcCardShape;
  cardStyle?: (item: Item) => CSSProperties;
  renderCardBody: (props: ArcCardBodyProps<Item>) => ReactNode;
  label: string;
  layerPresent: boolean;
  layoutSessionId: number | string;
  reduceMotion: boolean;
  returningFromQuests: boolean;
  onSelect: (id: Item["id"]) => boolean;
};

type DragState = {
  pointerId: number;
  startX: number;
  startPosition: number;
  startTarget: number;
  lastAt: number;
  samples: { x: number; at: number }[];
  moved: boolean;
};

const WHEEL_SETTLE_MS = 90;
const DRAG_SNAP_DISTANCE_PX = 70;
const FLICK_MIN_DISTANCE_PX = 18;
const FLICK_VELOCITY_PX_PER_MS = 0.65;
const FLICK_WINDOW_MS = 100;
const CAROUSEL_REVEAL_DELAY_MS = 240;

function isSafariBrowser() {
  if (typeof navigator === "undefined") return false;
  const { userAgent, vendor } = navigator;
  return (
    /Safari/i.test(userAgent) &&
    /Apple/i.test(vendor) &&
    !/(Chrome|Chromium|CriOS|FxiOS|EdgiOS|OPiOS|Android)/i.test(userAgent)
  );
}

export function ArcCarousel<Item extends ArcCarouselItem>({
  cardShape = "landscape",
  cardStyle,
  renderCardBody,
  items,
  initialItemId,
  label,
  layerPresent,
  layoutSessionId,
  reduceMotion,
  returningFromQuests,
  onSelect,
}: ArcCarouselProps<Item>) {
  const { t } = useTranslation();
  const initialIndex = Math.max(
    0,
    items.findIndex((item) => item.id === initialItemId),
  );
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const activeIndexRef = useRef(initialIndex);
  const [selectedId, setSelectedId] = useState<Item["id"] | null>(null);
  const position = useMotionValue(initialIndex);
  const targetRef = useRef(initialIndex);
  const animationRef = useRef<{ stop: () => void } | null>(null);
  const wheelTimeoutRef = useRef<number | null>(null);
  const dragRef = useRef<DragState | null>(null);
  const suppressClickRef = useRef(false);
  const selectionFrameRef = useRef<number | null>(null);
  const revealTimeoutRef = useRef<number | null>(null);
  const deckRef = useRef<HTMLDivElement>(null);
  const { mode } = usePlayLayout();
  const richEffectsAvailable = useMediaQuery(
    `${DESKTOP_VIEWPORT_QUERY} and (hover: hover) and (pointer: fine)`,
  );
  const safariPerformanceMode = isSafariBrowser();
  const richEffects = richEffectsAvailable && !safariPerformanceMode;
  const [revealCards, setRevealCards] = useState(
    reduceMotion || !initialItemId,
  );
  const itemKey = items.map((item) => item.id).join("|");
  const { cardGap } = ARC_GEOMETRY[cardShape][mode];

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

  useEffect(() => {
    // Switching picker views can interrupt the two-frame mood selection delay.
    if (layerPresent || selectionFrameRef.current === null) return;
    window.cancelAnimationFrame(selectionFrameRef.current);
    selectionFrameRef.current = null;
    setSelectedId(null);
  }, [layerPresent]);

  useMotionValueEvent(position, "change", (latest) => {
    if (items.length === 0) return;
    const nextIndex = modulo(Math.round(latest), items.length);
    if (activeIndexRef.current === nextIndex) return;
    activeIndexRef.current = nextIndex;
    setActiveIndex(nextIndex);
    if (!selectedId) playSound("moodStep");
  });

  function moveTo(next: number, focus = false) {
    if (!layerPresent || selectedId || items.length < 2) return;
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
    // event.preventDefault();
    if (selectedId || items.length < 2 || dragRef.current) return;
    const raw =
      Math.abs(event.deltaX) > Math.abs(event.deltaY)
        ? event.deltaX
        : event.deltaY;
    const pixels = event.deltaMode === 1 ? raw * 16 : raw;
    const advance = clamp(pixels / (cardGap * 0.5), -1.25, 1.25);
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
    if (selectedId || items.length < 2 || event.button !== 0 || dragRef.current)
      return;
    animationRef.current?.stop();
    if (wheelTimeoutRef.current !== null) {
      window.clearTimeout(wheelTimeoutRef.current);
      wheelTimeoutRef.current = null;
    }
    const now = performance.now();
    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startPosition: position.get(),
      startTarget: Math.round(targetRef.current),
      lastAt: now,
      samples: [{ x: event.clientX, at: now }],
      moved: false,
    };
  }

  function handlePointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;
    const now = performance.now();
    const movement = event.clientX - drag.startX;
    drag.lastAt = now;
    drag.samples.push({ x: event.clientX, at: now });
    while (
      drag.samples.length > 2 &&
      drag.samples[1].at < now - FLICK_WINDOW_MS
    ) {
      drag.samples.shift();
    }

    if (Math.abs(movement) > 7 && !drag.moved) {
      drag.moved = true;
      event.currentTarget.setPointerCapture(event.pointerId);
    }
    if (!drag.moved) return;

    const next = drag.startPosition - movement / cardGap;
    position.set(next);
  }

  function finishPointer(
    event: ReactPointerEvent<HTMLDivElement>,
    cancelled = false,
  ) {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;
    const now = performance.now();
    const releaseX = cancelled
      ? drag.samples[drag.samples.length - 1].x
      : event.clientX;
    const movement = releaseX - drag.startX;
    const recentSample = drag.samples.find(
      (sample) => sample.at >= now - FLICK_WINDOW_MS,
    );
    const recentMovement = recentSample ? releaseX - recentSample.x : 0;
    const recentDuration = recentSample ? Math.max(1, now - recentSample.at) : 1;
    const quickFlick =
      !cancelled &&
      now - drag.lastAt <= FLICK_WINDOW_MS &&
      Math.abs(movement) >= FLICK_MIN_DISTANCE_PX &&
      Math.sign(recentMovement) === Math.sign(movement) &&
      Math.abs(recentMovement / recentDuration) >= FLICK_VELOCITY_PX_PER_MS;
    const shouldAdvance =
      !cancelled && (Math.abs(movement) >= DRAG_SNAP_DISTANCE_PX || quickFlick);
    const steps = shouldAdvance
      ? Math.max(1, Math.round(Math.abs(movement) / cardGap))
      : 0;
    const next = drag.startTarget - Math.sign(movement) * steps;
    suppressClickRef.current = drag.moved || Math.abs(movement) > 7;
    if (suppressClickRef.current) {
      window.setTimeout(() => {
        suppressClickRef.current = false;
      }, 0);
    }
    dragRef.current = null;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    moveTo(next);
  }

  function select(itemId: Item["id"], focusNext = false) {
    if (suppressClickRef.current) {
      suppressClickRef.current = false;
      return;
    }
    if (!layerPresent || selectedId || selectionFrameRef.current !== null) return;
    setSelectedId(itemId);
    playSound("cardSelect");
    if (reduceMotion) {
      if (!onSelect(itemId)) setSelectedId(null);
    } else {
      selectionFrameRef.current = window.requestAnimationFrame(() => {
        selectionFrameRef.current = window.requestAnimationFrame(() => {
          selectionFrameRef.current = null;
          if (!onSelect(itemId)) setSelectedId(null);
        });
      });
    }
    if (focusNext) {
      moveFocusToNextStep(reduceMotion ? 0 : 620);
    }
  }

  return (
    <div
      className={styles.arcDeck}
      data-card-shape={cardShape}
      data-low-power={!richEffects || undefined}
      data-rich-effects={richEffects || undefined}
      ref={deckRef}
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      onWheel={handleWheel}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={finishPointer}
      onPointerCancel={(event) => finishPointer(event, true)}
    >
      <div className={styles.arcDeckTrack}>
        {items.map((item, index) => (
          <ArcCard
            cardShape={cardShape}
            cardStyle={cardStyle?.(item)}
            renderBody={renderCardBody}
            activeIndex={activeIndex}
            index={index}
            item={item}
            itemCount={items.length}
            key={item.id}
            layerPresent={layerPresent}
            layoutSessionId={layoutSessionId}
            position={position}
            reduceMotion={reduceMotion}
            richEffects={richEffects}
            tiltEffects={!reduceMotion}
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

      <VisuallyHidden aria-live="polite">
        {items[activeIndex]
          ? t("ui.arc.status", {
              current: activeIndex + 1,
              total: items.length,
              title: items[activeIndex].title,
              subtitle: items[activeIndex].subtitle,
            })
          : t("ui.arc.noCards")}
      </VisuallyHidden>
    </div>
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

function moveFocusToNextStep(delay: number) {
  window.setTimeout(() => {
    const destinations =
      document.querySelectorAll<HTMLElement>("[data-flow-focus]");
    destinations.item(destinations.length - 1)?.focus({ preventScroll: true });
  }, delay);
}
