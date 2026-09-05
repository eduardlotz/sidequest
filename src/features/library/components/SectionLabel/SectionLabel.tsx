import { useId, useState } from "react";
import { InfoIcon } from "../../../../shared/ui/Icons/Icons";
import styles from "./SectionLabel.module.css";

export function SectionLabel({ label, hint }: { label: string; hint: string }) {
  const id = useId();
  const [open, setOpen] = useState(false);
  return (
    <span className={styles.label}>
      <span>{label}</span>
      <button
        className={styles.trigger}
        type="button"
        aria-label={label}
        aria-describedby={open ? id : undefined}
        aria-expanded={open}
        onPointerEnter={(event) => {
          if (event.pointerType === "mouse") setOpen(true);
        }}
        onPointerLeave={(event) => {
          if (event.pointerType === "mouse") setOpen(false);
        }}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        onClick={() => setOpen(true)}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            event.stopPropagation();
            setOpen(false);
          }
        }}
      >
        <InfoIcon />
      </button>
      {open ? (
        <span className={styles.bubble} role="tooltip" id={id}>
          {hint}
        </span>
      ) : null}
    </span>
  );
}
