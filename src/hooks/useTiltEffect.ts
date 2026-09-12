import { useMotionValue } from "motion/react";
import {
  useCallback,
  useEffect,
  useRef,
  type PointerEvent as ReactPointerEvent,
} from "react";

type Options = {
  hoverScale?: number;
  maxGlare?: number;
  maxTilt?: number;
  press?: {
    maxTilt: number;
    onStart?: (direction: -1 | 1) => void;
    scale: number;
  };
  reduceMotion: boolean;
};

type TiltState = {
  angle: number;
  glareOpacity: number;
  rotateX: number;
  rotateY: number;
  scale: number;
};

const PRESS_RESPONSE_MS = 48;
const TRACKING_RESPONSE_MS = 90;
const RESET_RESPONSE_MS = 170;
const REST_ANGLE = 180;

export function useTiltEffect({
  hoverScale = 1,
  maxGlare = 0.34,
  maxTilt = 18,
  press,
  reduceMotion,
}: Options) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const scale = useMotionValue(1);
  const frameRef = useRef<number | null>(null);
  const lastFrameAtRef = useRef(0);
  const activeRef = useRef(false);
  const pressedRef = useRef(false);
  const cardRef = useRef<HTMLElement | null>(null);
  const currentRef = useRef<TiltState>(restingState());
  const targetRef = useRef<TiltState>(restingState());

  const resetTilt = useCallback(
    (card: HTMLElement | null) => {
      if (frozenRef.current) return;

      cardRef.current = card;
      activeRef.current = false;
      pressedRef.current = false;

      targetRef.current = {
        angle: currentRef.current.angle,
        glareOpacity: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
      };
      if (reduceMotion) {
        currentRef.current = restingState();
        targetRef.current = restingState();
        rotateX.set(0);
        rotateY.set(0);
        scale.set(1);
        updateGlare(cardRef.current, REST_ANGLE, 0);
        return;
      }
      scheduleFrame();
    },
    [reduceMotion, rotateX, rotateY, scale],
  );

  const frozenRef = useRef(false);

  const freezeTilt = useCallback(() => {
    frozenRef.current = true;

    if (frameRef.current !== null) {
      window.cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }

    lastFrameAtRef.current = 0;
  }, []);

  const unfreezeTilt = useCallback(() => {
    frozenRef.current = false;
    // The flip may have driven these same values while pointer tracking was frozen.
    currentRef.current.rotateX = rotateX.get();
    currentRef.current.rotateY = rotateY.get();
    currentRef.current.scale = scale.get();
    resetTilt(cardRef.current);
  }, [resetTilt, rotateX, rotateY, scale]);

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
    pressedRef.current = false;
    lastFrameAtRef.current = 0;
    currentRef.current = restingState();
    targetRef.current = restingState();
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
    updateGlare(cardRef.current, REST_ANGLE, 0);
  }, [reduceMotion, rotateX, rotateY, scale]);

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

  function readPointerTarget(
    event: ReactPointerEvent<HTMLElement>,
    tilt = maxTilt,
    nextScale = hoverScale,
    includeTouch = false,
  ) {
    if (
      reduceMotion ||
      frozenRef.current ||
      (!includeTouch &&
        event.pointerType !== "mouse" &&
        event.pointerType !== "pen")
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
      rotateX: tilt / 2 - percentageY * tilt,
      rotateY: percentageX * tilt - tilt / 2,
      scale: nextScale,
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
    const responseMs = pressedRef.current
      ? PRESS_RESPONSE_MS
      : activeRef.current
        ? TRACKING_RESPONSE_MS
        : RESET_RESPONSE_MS;
    const blend = 1 - Math.exp(-deltaMs / responseMs);
    const current = currentRef.current;
    const target = targetRef.current;

    current.rotateX += (target.rotateX - current.rotateX) * blend;
    current.rotateY += (target.rotateY - current.rotateY) * blend;
    current.scale += (target.scale - current.scale) * blend;
    current.glareOpacity +=
      (target.glareOpacity - current.glareOpacity) * blend;
    current.angle += shortestAngleDelta(current.angle, target.angle) * blend;
    lastFrameAtRef.current = now;

    rotateX.set(current.rotateX);
    rotateY.set(current.rotateY);
    scale.set(current.scale);
    updateGlare(cardRef.current, current.angle, current.glareOpacity);

    if (isSettled(current, target)) {
      currentRef.current = { ...target };
      rotateX.set(target.rotateX);
      rotateY.set(target.rotateY);
      scale.set(target.scale);
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
    if (
      !readPointerTarget(
        event,
        pressedRef.current && press ? press.maxTilt : maxTilt,
        pressedRef.current && press ? press.scale : hoverScale,
        pressedRef.current && Boolean(press),
      )
    )
      return;
    activeRef.current = true;
    scheduleFrame();
  }

  function handlePointerDown(event: ReactPointerEvent<HTMLElement>) {
    if (!press) return;
    if (!readPointerTarget(event, press.maxTilt, press.scale, true)) return;

    press.onStart?.(targetRef.current.rotateY < 0 ? -1 : 1);
    pressedRef.current = true;
    activeRef.current = true;
    scheduleFrame();
  }

  function handlePointerUp(event: ReactPointerEvent<HTMLElement>) {
    if (!pressedRef.current) return;
    pressedRef.current = false;

    if (
      (event.pointerType === "mouse" || event.pointerType === "pen") &&
      readPointerTarget(event)
    ) {
      activeRef.current = true;
      scheduleFrame();
      return;
    }

    resetTilt(event.currentTarget);
  }

  function handlePointerLeave(event: ReactPointerEvent<HTMLElement>) {
    resetTilt(event.currentTarget);
  }

  return {
    handlePointerEnter,
    handlePointerDown,
    handlePointerLeave,
    handlePointerMove,
    handlePointerUp,
    resetTilt: () => resetTilt(cardRef.current),
    freezeTilt,
    unfreezeTilt,
    rotateX,
    rotateY,
    scale,
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
    scale: 1,
  };
}

function shortestAngleDelta(from: number, to: number) {
  return ((to - from + 540) % 360) - 180;
}

function isSettled(current: TiltState, target: TiltState) {
  return (
    Math.abs(current.rotateX - target.rotateX) < 0.01 &&
    Math.abs(current.rotateY - target.rotateY) < 0.01 &&
    Math.abs(current.scale - target.scale) < 0.001 &&
    Math.abs(current.glareOpacity - target.glareOpacity) < 0.001 &&
    Math.abs(shortestAngleDelta(current.angle, target.angle)) < 0.05
  );
}

function updateGlare(card: HTMLElement | null, angle: number, opacity: number) {
  card?.style.setProperty("--shine-angle", `${angle}deg`);
  card?.style.setProperty("--shine-opacity", `${opacity}`);
}
