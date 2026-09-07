import { useEffect, useId, useRef, useState } from "react";
import { InfoIcon } from "@phosphor-icons/react/dist/csr/Info";
import styles from "./SectionLabel.module.css";

export function SectionLabel({ label, hint }: { label: string; hint: string }) {
  const id = useId();
  const trigger = useRef<HTMLButtonElement>(null);
  const bubble = useRef<HTMLSpanElement>(null);
  const [open, setOpen] = useState(false);
  function position() {
    if (!trigger.current || !bubble.current) return;
    const rect = trigger.current.getBoundingClientRect();
    const tooltip = bubble.current;
    const width = Math.min(300, window.innerWidth - 32);
    tooltip.style.width = `${width}px`;
    tooltip.style.left = `${Math.max(16, Math.min(rect.left - 16, window.innerWidth - width - 16))}px`;
    const height = tooltip.offsetHeight;
    tooltip.style.top = `${rect.bottom + height + 16 > window.innerHeight ? Math.max(16, rect.top - height - 8) : rect.bottom + 8}px`;
  }
  useEffect(() => {
    if(!open) return;
    position();
    window.addEventListener("resize", position);
    window.addEventListener("scroll", position, true);
    return () => { window.removeEventListener("resize", position); window.removeEventListener("scroll", position, true); };
  }, [open]);
  return <span className={styles.label}>
    <span>{label}</span>
    <button ref={trigger} className={styles.trigger} type="button" popoverTarget={id} aria-label={label} aria-describedby={open ? id : undefined} aria-expanded={open} onClick={position}>
      <InfoIcon weight="duotone" />
    </button>
    <span ref={bubble} className={styles.bubble} popover="auto" role="tooltip" id={id} onToggle={event => setOpen(event.newState === "open")}>{hint}</span>
  </span>;
}
