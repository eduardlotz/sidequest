import { useEffect, useId, useRef, useState } from "react";
import { InfoIcon } from "@phosphor-icons/react/dist/csr/Info";
import styles from "./InfoLabel.module.css";

const TOOLTIP_MAX_WIDTH = 300;
const VIEWPORT_PADDING = 16;
const TOOLTIP_GAP = 8;

export function InfoLabel({ label, hint }: { label: string; hint?: string }) {
  const id = useId();
  const trigger = useRef<HTMLButtonElement>(null);
  const bubble = useRef<HTMLSpanElement>(null);
  const [open, setOpen] = useState(false);

  function position() {
    const triggerElement = trigger.current;
    const tooltip = bubble.current;

    if (!triggerElement || !tooltip) return;

    const triggerRect = triggerElement.getBoundingClientRect();

    // Let the content determine its natural width first.
    tooltip.style.width = "max-content";
    tooltip.style.maxWidth = `${Math.min(
      TOOLTIP_MAX_WIDTH,
      window.innerWidth - VIEWPORT_PADDING * 2,
    )}px`;

    const tooltipRect = tooltip.getBoundingClientRect();

    const centeredLeft =
      triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2;

    const left = Math.max(
      VIEWPORT_PADDING,
      Math.min(
        centeredLeft,
        window.innerWidth - tooltipRect.width - VIEWPORT_PADDING,
      ),
    );

    const spaceBelow = window.innerHeight - triggerRect.bottom;
    const showAbove =
      spaceBelow < tooltipRect.height + TOOLTIP_GAP &&
      triggerRect.top > spaceBelow;

    const top = showAbove
      ? triggerRect.top - tooltipRect.height - TOOLTIP_GAP
      : triggerRect.bottom + TOOLTIP_GAP;

    tooltip.style.left = `${left}px`;
    tooltip.style.top = `${Math.max(VIEWPORT_PADDING, top)}px`;
  }

  useEffect(() => {
    if (!open) return;

    position();

    window.addEventListener("resize", position);
    window.addEventListener("scroll", position, true);

    return () => {
      window.removeEventListener("resize", position);
      window.removeEventListener("scroll", position, true);
    };
  }, [open]);

  return (
    <span className={styles.label}>
      <span>{label}</span>

      {hint && (
        <>
          <button
            ref={trigger}
            className={styles.trigger}
            type="button"
            popoverTarget={id}
            aria-label={label}
            aria-describedby={open ? id : undefined}
            aria-expanded={open}
          >
            <InfoIcon weight="bold" />
          </button>

          <span
            ref={bubble}
            className={styles.bubble}
            popover="auto"
            role="tooltip"
            id={id}
            onToggle={(event) => setOpen(event.newState === "open")}
          >
            {hint}
          </span>
        </>
      )}
    </span>
  );
}
