import { useCallback, useEffect, useRef, useState } from "react";
import type { PanInfo } from "motion/react";

const DISMISS_DISTANCE = 96;
const DISMISS_VELOCITY = 700;

export function useCardFocus(enabled = true) {
  const [focused, setFocused] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const backdropRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    setFocused(false);
    window.requestAnimationFrame(() => triggerRef.current?.focus());
  }, []);

  const open = useCallback(() => {
    if (enabled) setFocused(true);
  }, [enabled]);

  useEffect(() => {
    if (enabled || !focused) return;
    setFocused(false);
  }, [enabled, focused]);

  useEffect(() => {
    if (!focused) return;
    const frame = window.requestAnimationFrame(() =>
      backdropRef.current?.focus(),
    );
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") close();
    }
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [close, focused]);

  function dismissFromDrag(
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) {
    if (!focused) return;
    const distance = Math.hypot(info.offset.x, info.offset.y);
    const velocity = Math.hypot(info.velocity.x, info.velocity.y);
    if (distance >= DISMISS_DISTANCE || velocity >= DISMISS_VELOCITY) close();
  }

  return {
    backdropRef,
    close,
    dismissFromDrag,
    focused,
    open,
    triggerRef,
  };
}
