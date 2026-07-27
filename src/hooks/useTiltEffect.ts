import { useMotionValue } from "motion/react";
import {
  useCallback,
  useEffect,
  useRef,
  type PointerEvent as ReactPointerEvent,
} from "react";

type Options = {
  maxGlare?: number;
  maxTilt?: number;
  reduceMotion: boolean;
};

type TiltState = {
  angle: number;
  glareOpacity: number;
  rotateX: number;
  rotateY: number;
};

const TRACKING_RESPONSE_MS = 90;
const RESET_RESPONSE_MS = 170;
const REST_ANGLE = 180;

export function useTiltEffect({
  maxGlare = 0.34,
  maxTilt = 18,
  reduceMotion,
}: Options) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const frameRef = useRef<number | null>(null);
  const lastFrameAtRef = useRef(0);
  const activeRef = useRef(false);
  const cardRef = useRef<HTMLElement | null>(null);
  const currentRef = useRef<TiltState>(restingState());
  const targetRef = useRef<TiltState>(restingState());

  const resetTilt = useCallback(
    (card: HTMLElement | null) => {
      cardRef.current = card;
      activeRef.current = false;
      targetRef.current = {
        angle: currentRef.current.angle,
        glareOpacity: 0,
        rotateX: 0,
        rotateY: 0,
      };
      if (reduceMotion) {
        currentRef.current = restingState();
        targetRef.current = restingState();
        rotateX.set(0);
        rotateY.set(0);
        updateGlare(cardRef.current, REST_ANGLE, 0);
        return;
      }
      scheduleFrame();
    },
    [reduceMotion, rotateX, rotateY],
  );

  useEffect(
    () => () => {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    },
    [],
  );

  useEffect(() => {
    if (!reduceMotion) return;
    if (frameRef.current !== null) {
      window.cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }
    activeRef.current = false;
    lastFrameAtRef.current = 0;
    currentRef.current = restingState();
    targetRef.current = restingState();
    rotateX.set(0);
    rotateY.set(0);
    updateGlare(cardRef.current, REST_ANGLE, 0);
  }, [reduceMotion, rotateX, rotateY]);

  useEffect(() => {
    function resetWhenPointerLeavesCard(event: PointerEvent) {
      if (!activeRef.current) return;
      const card = cardRef.current;
      const target = document.elementFromPoint(event.clientX, event.clientY);
      if (card && target && (target === card || card.contains(target))) return;
      resetTilt(card);
    }

    function resetWhenWindowBlurs() {
      if (activeRef.current) resetTilt(cardRef.current);
    }

    window.addEventListener("pointermove", resetWhenPointerLeavesCard, {
      passive: true,
    });
    window.addEventListener("blur", resetWhenWindowBlurs);
    return () => {
      window.removeEventListener("pointermove", resetWhenPointerLeavesCard);
      window.removeEventListener("blur", resetWhenWindowBlurs);
    };
  }, [resetTilt]);

  function readPointerTarget(event: ReactPointerEvent<HTMLElement>) {
    if (
      reduceMotion ||
      (event.pointerType !== "mouse" && event.pointerType !== "pen")
    ) {
      return false;
    }

    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const percentageX = clamp01((event.clientX - rect.left) / rect.width);
    const percentageY = clamp01((event.clientY - rect.top) / rect.height);
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    cardRef.current = card;
    targetRef.current = {
      angle:
        Math.atan2(event.clientX - centerX, -(event.clientY - centerY)) *
        (180 / Math.PI),
      glareOpacity: percentageY * maxGlare,
      rotateX: percentageY * maxTilt - maxTilt / 2,
      rotateY: maxTilt / 2 - percentageX * maxTilt,
    };
    return true;
  }

  function scheduleFrame() {
    if (frameRef.current !== null) return;
    frameRef.current = window.requestAnimationFrame(updateTilt);
  }

  function updateTilt(now: number) {
    frameRef.current = null;
    const previousTime = lastFrameAtRef.current || now - 1000 / 60;
    const deltaMs = Math.min(34, Math.max(1, now - previousTime));
    const responseMs = activeRef.current
      ? TRACKING_RESPONSE_MS
      : RESET_RESPONSE_MS;
    const blend = 1 - Math.exp(-deltaMs / responseMs);
    const current = currentRef.current;
    const target = targetRef.current;

    current.rotateX += (target.rotateX - current.rotateX) * blend;
    current.rotateY += (target.rotateY - current.rotateY) * blend;
    current.glareOpacity +=
      (target.glareOpacity - current.glareOpacity) * blend;
    current.angle += shortestAngleDelta(current.angle, target.angle) * blend;
    lastFrameAtRef.current = now;

    rotateX.set(current.rotateX);
    rotateY.set(current.rotateY);
    updateGlare(cardRef.current, current.angle, current.glareOpacity);

    if (isSettled(current, target)) {
      currentRef.current = { ...target };
      rotateX.set(target.rotateX);
      rotateY.set(target.rotateY);
      updateGlare(cardRef.current, target.angle, target.glareOpacity);
      lastFrameAtRef.current = 0;
      return;
    }

    scheduleFrame();
  }

  function handlePointerEnter(event: ReactPointerEvent<HTMLElement>) {
    if (!readPointerTarget(event)) return;
    activeRef.current = true;
    scheduleFrame();
  }

  function handlePointerMove(event: ReactPointerEvent<HTMLElement>) {
    if (!readPointerTarget(event)) return;
    activeRef.current = true;
    scheduleFrame();
  }

  function handlePointerLeave(event: ReactPointerEvent<HTMLElement>) {
    resetTilt(event.currentTarget);
  }

  return {
    handlePointerEnter,
    handlePointerLeave,
    handlePointerMove,
    resetTilt: () => resetTilt(cardRef.current),
    rotateX,
    rotateY,
  };
}

function clamp01(value: number) {
  return Math.min(1, Math.max(0, value));
}

function restingState(): TiltState {
  return {
    angle: REST_ANGLE,
    glareOpacity: 0,
    rotateX: 0,
    rotateY: 0,
  };
}

function shortestAngleDelta(from: number, to: number) {
  return ((to - from + 540) % 360) - 180;
}

function isSettled(current: TiltState, target: TiltState) {
  return (
    Math.abs(current.rotateX - target.rotateX) < 0.01 &&
    Math.abs(current.rotateY - target.rotateY) < 0.01 &&
    Math.abs(current.glareOpacity - target.glareOpacity) < 0.001 &&
    Math.abs(shortestAngleDelta(current.angle, target.angle)) < 0.05
  );
}

function updateGlare(
  card: HTMLElement | null,
  angle: number,
  opacity: number,
) {
  card?.style.setProperty("--shine-angle", `${angle}deg`);
  card?.style.setProperty("--shine-opacity", `${opacity}`);
}
