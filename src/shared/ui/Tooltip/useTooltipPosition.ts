import { useLayoutEffect, type RefObject } from "react";

const TOOLTIP_MAX_WIDTH = 300;
const VIEWPORT_PADDING = 16;
const TOOLTIP_GAP = 8;

export function useTooltipPosition(
  trigger: RefObject<HTMLElement | null>,
  bubble: RefObject<HTMLSpanElement | null>,
  open: boolean,
) {
  useLayoutEffect(() => {
    if (!open) return;
    function position() {
      const triggerElement = trigger.current;
      const tooltip = bubble.current;
      if (!triggerElement || !tooltip) return;
      const triggerRect = triggerElement.getBoundingClientRect();
      tooltip.style.width = "max-content";
      tooltip.style.maxWidth = `${Math.min(TOOLTIP_MAX_WIDTH, window.innerWidth - VIEWPORT_PADDING * 2)}px`;
      const tooltipRect = tooltip.getBoundingClientRect();
      const centeredLeft = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2;
      const left = Math.max(VIEWPORT_PADDING, Math.min(centeredLeft,
        window.innerWidth - tooltipRect.width - VIEWPORT_PADDING));
      const spaceBelow = window.innerHeight - triggerRect.bottom;
      const showAbove = spaceBelow < tooltipRect.height + TOOLTIP_GAP && triggerRect.top > spaceBelow;
      const top = showAbove ? triggerRect.top - tooltipRect.height - TOOLTIP_GAP
        : triggerRect.bottom + TOOLTIP_GAP;
      tooltip.style.left = `${left}px`;
      tooltip.style.top = `${Math.max(VIEWPORT_PADDING, top)}px`;
    }
    position();
    window.addEventListener("resize", position);
    window.addEventListener("scroll", position, true);
    return () => {
      window.removeEventListener("resize", position);
      window.removeEventListener("scroll", position, true);
    };
  }, [trigger, bubble, open]);
}
