import { useId, useRef, useState } from "react";
import { InfoIcon } from "@phosphor-icons/react/dist/csr/Info";
import styles from "./InfoLabel.module.css";
import tooltipStyles from "../Tooltip/Tooltip.module.css";
import { useTooltipPosition } from "../Tooltip/useTooltipPosition";

export function InfoLabel({ label, hint }: { label: string; hint?: string }) {
  const id = useId();
  const trigger = useRef<HTMLButtonElement>(null);
  const bubble = useRef<HTMLSpanElement>(null);
  const [open, setOpen] = useState(false);

  useTooltipPosition(trigger, bubble, open);

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
            className={tooltipStyles.bubble}
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
