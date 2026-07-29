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
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
  type WheelEvent,
} from "react";
import type { PlayerMotivation } from "../data/deckTypes";
import { playSound } from "../lib/sound";
import { TimerIcon } from "./Icons";
import { QuestCardBack } from "./QuestCardBack";
import styles from "../App.module.css";

export type ArcDeckItem = {
  id: string;
  title: string;
  description?: string;
  hint?: string;
  meta?: string;
  ariaLabel?: string;
  kind: "mood" | "objective";
  motivation: PlayerMotivation;
  style: CSSProperties;
  layoutId?: string;
};

type Props = {
  items: readonly ArcDeckItem[];
  label: string;
  selectLabel: string;
  reduceMotion: boolean;
  onSelect: (id: string) => void;
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

type ArcCardProps = {
  activeIndex: number;
  index: number;
  item: ArcDeckItem;
  itemCount: number;
  mobile: boolean;
  position: MotionValue<number>;
  reduceMotion: boolean;
  selectedId: string | null;
  onCycle: (direction: -1 | 1, focusCenter?: boolean) => void;
};

const SELECT_ANIMATION_MS = 480;
const WHEEL_SETTLE_MS = 84;
const MAX_WHEEL_ADVANCE = 3.25;

export function ArcDeck({
  items,
  label,
  selectLabel,
  reduceMotion,
  onSelect,
}: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const position = useMotionValue(0);
  const targetRef = useRef(0);
  const animationRef = useRef<{ stop: () => void } | null>(null);
  const wheelReleaseRef = useRef<number | null>(null);
  const dragRef = useRef<DragState | null>(null);
  const lastSoundIndexRef = useRef(0);
  const deckRef = useRef<HTMLDivElement>(null);
  const mobile = useMobileLayout();
  const itemKey = items.map((item) => item.id).join("|");
  const cardGap = mobile ? 296 : 372;

  useEffect(() => {
    animationRef.current?.stop();
    position.set(0);
    targetRef.current = 0;
    setActiveIndex(0);
    setSelectedId(null);
    lastSoundIndexRef.current = 0;
  }, [itemKey, position]);

  useEffect(
    () => () => {
      animationRef.current?.stop();
      if (wheelReleaseRef.current !== null) {
        window.clearTimeout(wheelReleaseRef.current);
      }
    },
    [],
  );

  useMotionValueEvent(position, "change", (latest) => {
    if (items.length === 0) return;
    const nextIndex = modulo(Math.round(latest), items.length);
    setActiveIndex((current) => (current === nextIndex ? current : nextIndex));
    if (nextIndex !== lastSoundIndexRef.current && !selectedId) {
      lastSoundIndexRef.current = nextIndex;
      playSound("slide");
    }
  });

  function moveTo(next: number, focusCenter = false) {
    if (selectedId || items.length < 2) return;
    animationRef.current?.stop();
    targetRef.current = next;
    if (reduceMotion) {
      position.set(next);
      if (focusCenter) focusActiveCard();
      return;
    }
    animationRef.current = animate(position, next, {
      type: "spring",
      stiffness: 310,
      damping: 34,
      mass: 0.72,
      restDelta: 0.002,
      restSpeed: 0.002,
      onComplete: () => {
        animationRef.current = null;
        if (focusCenter) focusActiveCard();
      },
    });
  }

  function snapToNearest(focusCenter = false) {
    moveTo(Math.round(targetRef.current), focusCenter);
  }

  function cycle(direction: -1 | 1, focusCenter = false) {
    moveTo(Math.round(targetRef.current) + direction, focusCenter);
  }

  function focusActiveCard() {
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        deckRef.current
          ?.querySelector<HTMLElement>("[data-center][role='option']")
          ?.focus();
      });
    });
  }

  function handleWheel(event: WheelEvent<HTMLDivElement>) {
    if (selectedId || items.length < 2) return;
    event.preventDefault();
    const rawDistance =
      Math.abs(event.deltaX) > Math.abs(event.deltaY)
        ? event.deltaX
        : event.deltaY;
    const pixelDistance = event.deltaMode === 1 ? rawDistance * 16 : rawDistance;
    const advance = clamp(
      pixelDistance / (mobile ? 112 : 138),
      -MAX_WHEEL_ADVANCE,
      MAX_WHEEL_ADVANCE,
    );
    if (Math.abs(advance) < 0.01) return;

    moveTo(targetRef.current + advance);
    if (wheelReleaseRef.current !== null) {
      window.clearTimeout(wheelReleaseRef.current);
    }
    wheelReleaseRef.current = window.setTimeout(() => {
      wheelReleaseRef.current = null;
      snapToNearest();
    }, WHEEL_SETTLE_MS);
  }

  function handlePointerDown(event: ReactPointerEvent<HTMLDivElement>) {
    if (selectedId || items.length < 2 || event.button !== 0) return;
    if (
      event.target instanceof Element &&
      event.target.closest("[data-deck-select]")
    ) {
      return;
    }
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
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;
    const now = performance.now();
    const elapsed = Math.max(1, now - drag.lastAt);
    const movement = event.clientX - drag.startX;
    drag.velocityX = (event.clientX - drag.lastX) / elapsed;
    drag.lastX = event.clientX;
    drag.lastAt = now;
    if (Math.abs(movement) > 7) {
      drag.moved = true;
    }
    const next = drag.startPosition - movement / cardGap;
    targetRef.current = next;
    position.set(next);
  }

  function finishPointer(event: ReactPointerEvent<HTMLDivElement>) {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;
    const projectedAdvance = clamp(
      (-drag.velocityX * 190) / cardGap,
      -2.5,
      2.5,
    );
    targetRef.current = position.get() + projectedAdvance;
    dragRef.current = null;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    snapToNearest();
  }

  function select(itemId: string) {
    if (selectedId) return;
    setSelectedId(itemId);
    if (!reduceMotion) playSound("cardFlip");
    if (reduceMotion) {
      onSelect(itemId);
      return;
    }
    window.setTimeout(() => onSelect(itemId), SELECT_ANIMATION_MS);
  }

  const activeItem = items[activeIndex];

  return (
    <div
      className={styles.arcDeck}
      ref={deckRef}
      role="listbox"
      aria-label={label}
      aria-orientation="horizontal"
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
            mobile={mobile}
            position={position}
            reduceMotion={reduceMotion}
            selectedId={selectedId}
            onCycle={cycle}
          />
        ))}
      </div>

      <button
        className={styles.arcDeckSelect}
        data-deck-select
        data-sound-click-skip
        type="button"
        disabled={!activeItem || Boolean(selectedId)}
        aria-label={
          activeItem
            ? `${selectLabel}: ${activeItem.hint ?? activeItem.title}`
            : selectLabel
        }
        onClick={() => {
          if (activeItem) select(activeItem.id);
        }}
      >
        {selectLabel}
      </button>

      <span className={styles.srOnly} aria-live="polite">
        {activeItem
          ? `${activeIndex + 1} of ${items.length}: ${
              activeItem.hint ?? activeItem.title
            }`
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
  mobile,
  position,
  reduceMotion,
  selectedId,
  onCycle,
}: ArcCardProps) {
  const distance = useTransform(position, (latest) =>
    loopDistance(index - latest, itemCount),
  );
  const x = useTransform(distance, (value) => {
    const angle = value * (mobile ? 0.4 : 0.36);
    return Math.sin(angle) * (mobile ? 760 : 1_060);
  });
  const y = useTransform(distance, (value) => {
    const angle = value * (mobile ? 0.4 : 0.36);
    const arcOffset = (1 - Math.cos(angle)) * (mobile ? 260 : 360);
    const centerLift =
      Math.max(0, 1 - Math.abs(value)) * (mobile ? 22 : 26);
    return arcOffset - centerLift;
  });
  const scale = useTransform(distance, (value) => {
    const emphasis = Math.max(0, 1 - Math.abs(value));
    return 1 + emphasis * (mobile ? 0.055 : 0.075);
  });
  const rotate = useTransform(distance, (value) => {
    const angle = value * (mobile ? 0.4 : 0.36);
    return (angle * 180) / Math.PI * 0.62;
  });
  const opacity = useTransform(distance, (value) => {
    const absoluteDistance = Math.abs(value);
    const fadeStart = 0.18;
    const fadeEnd = mobile ? 1.28 : 1.42;
    if (absoluteDistance >= fadeEnd) return 0;
    if (absoluteDistance <= fadeStart) return 1;
    const progress =
      (absoluteDistance - fadeStart) / (fadeEnd - fadeStart);
    return 1 - progress * 0.72;
  });
  const blur = useTransform(distance, (value) => {
    const absoluteDistance = Math.abs(value);
    const blurStart = 0.12;
    if (absoluteDistance <= blurStart) return "blur(0px)";
    const blurAmount = Math.min(
      mobile ? 5.5 : 6.5,
      (absoluteDistance - blurStart) * (mobile ? 4.6 : 4.9),
    );
    return `blur(${blurAmount}px)`;
  });
  const zIndex = useTransform(distance, (value) =>
    Math.round(30 - Math.abs(value) * 4),
  );
  const discreteDistance = loopDistance(index - activeIndex, itemCount);
  const visible = Math.abs(discreteDistance) <= 1;
  const center = index === activeIndex;
  const selected = selectedId === item.id;

  return (
    <motion.div
      className={styles.arcCardSlot}
      data-center={center || undefined}
      data-visible={visible || undefined}
      style={{
        ...item.style,
        filter: blur,
        opacity,
        pointerEvents: visible && !selectedId ? "auto" : "none",
        rotate,
        scale,
        x,
        y,
        zIndex,
      }}
      role="option"
      aria-selected={center}
      aria-label={
        item.ariaLabel ??
        [item.title, item.description].filter(Boolean).join(". ")
      }
      tabIndex={center ? 0 : -1}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault();
          onCycle(event.key === "ArrowRight" ? 1 : -1, true);
        }
      }}
    >
      <motion.div
        className={styles.arcCardFlip}
        layoutId={item.layoutId}
        layoutCrossfade={false}
        animate={{ rotateY: selected ? 180 : 0 }}
        transition={{
          duration: reduceMotion ? 0 : SELECT_ANIMATION_MS / 1_000,
          ease: [0.55, 0.06, 0.15, 0.86],
        }}
      >
        <span
          className={`${styles.arcCard} ${styles.arcCardFace} ${styles.arcCardFront}`}
          data-kind={item.kind}
        >
          <span className={styles.cardShimmer} aria-hidden="true" />
          <span className={styles.arcCardContent}>
            <strong className={styles.arcCardTitle}>
              {item.hint ?? item.title}
            </strong>
            {item.description && (
              <span className={styles.arcCardDescription}>
                {item.description}
              </span>
            )}
            {item.meta && (
              <span className={styles.arcCardMeta}>
                <TimerIcon />
                {item.meta}
              </span>
            )}
          </span>
          <span className={styles.cardBrand} aria-hidden="true">
            <img
              src={`${import.meta.env.BASE_URL}sidequest-wordmark.svg`}
              alt=""
              width="837"
              height="550"
            />
          </span>
        </span>

        <span
          className={`${styles.arcCard} ${styles.arcCardFace} ${styles.arcCardBack}`}
          aria-hidden="true"
        >
          <QuestCardBack motivation={item.motivation} />
        </span>
      </motion.div>
    </motion.div>
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
