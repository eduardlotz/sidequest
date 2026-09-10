import {
  animate,
  useMotionValue,
  useTransform,
  type PanInfo,
} from "motion/react";
import { useEffect, useRef } from "react";

const clamp = (value: number, limit: number) =>
  Math.max(-limit, Math.min(limit, value));

type Options = {
  reduceMotion: boolean;
  onCycle: () => void;
  onExit: () => void;
  onReturn: () => void;
  onComplete: () => void;
};

export function useQuestCardDrag({
  reduceMotion,
  onCycle,
  onExit,
  onReturn,
  onComplete,
}: Options) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, (value) =>
    reduceMotion ? 0 : clamp(-value * 0.045, 8),
  );
  const rotateY = useTransform(x, (value) =>
    reduceMotion ? 0 : clamp(value * 0.055, 10),
  );
  const rotate = useTransform(x, (value) =>
    reduceMotion ? 0 : clamp(value * 0.025, 7),
  );
  const suppressClick = useRef(false);
  const animation = useRef<ReturnType<typeof animate> | null>(null);
  const resetClickTimer = useRef<number | null>(null);

  useEffect(
    () => () => {
      animation.current?.stop();
      if (resetClickTimer.current !== null)
        window.clearTimeout(resetClickTimer.current);
    },
    [],
  );

  function moveTo(
    nextX: number,
    nextY: number,
    returning: boolean,
    onComplete: () => void,
  ) {
    animation.current?.stop();
    const fromX = x.get();
    const fromY = y.get();
    animation.current = animate(0, 1, {
      ...(returning
        ? {
            type: "spring" as const,
            stiffness: 420,
            damping: 34,
            mass: 0.58,
            restDelta: 0.5,
            restSpeed: 25,
          }
        : { duration: 0.2, ease: [0.22, 0.8, 0.24, 1] as const }),
      onUpdate: (progress) => {
        x.set(fromX + (nextX - fromX) * progress);
        y.set(fromY + (nextY - fromY) * progress);
      },
      onComplete,
    });
  }

  function finish(
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) {
    const offsetDistance = Math.hypot(info.offset.x, info.offset.y);
    const velocity = Math.hypot(info.velocity.x, info.velocity.y);

    const flicked = offsetDistance > 58 || velocity > 520;

    if (flicked) {
      suppressClick.current = true;

      const directionX = info.offset.x + info.velocity.x * 0.12;
      const directionY = info.offset.y + info.velocity.y * 0.12;
      const directionLength = Math.hypot(directionX, directionY) || 1;

      const unitX = directionX / directionLength;
      const unitY = directionY / directionLength;

      // Same size assumption as the previous implementation.
      const cardWidth = Math.min(window.innerWidth * 0.8, 300);
      const cardExtent = cardWidth / 2 + 12;

      // Distance from viewport center until the card has cleared an edge.
      // For a purely horizontal swipe this resolves to:
      //
      // (window.innerWidth + cardWidth) / 2 + 12
      //
      // which is the same as the previous implementation.
      const exitX =
        Math.abs(unitX) < 0.001
          ? Infinity
          : (window.innerWidth / 2 + cardExtent) / Math.abs(unitX);

      const exitY =
        Math.abs(unitY) < 0.001
          ? Infinity
          : (window.innerHeight / 2 + cardExtent) / Math.abs(unitY);

      const exitDistance = Math.max(
        Math.min(exitX, exitY),
        offsetDistance + 140,
      );

      onExit();
      onCycle();

      if (reduceMotion) {
        x.set(0);
        y.set(0);
        onComplete();
      } else {
        moveTo(unitX * exitDistance, unitY * exitDistance, false, () => {
          onReturn();
          moveTo(0, 0, true, onComplete);
        });
      }
    } else {
      moveTo(0, 0, true, () => {});
    }

    resetClickTimer.current = window.setTimeout(() => {
      suppressClick.current = false;
      resetClickTimer.current = null;
    }, 0);
  }

  return {
    x,
    y,
    rotateX,
    rotateY,
    rotate,
    suppressClick,
    onPointerDown: () => {
      suppressClick.current = false;
    },
    onDrag: (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      if (Math.hypot(info.offset.x, info.offset.y) > 8)
        suppressClick.current = true;
    },
    onDragEnd: finish,
  };
}
