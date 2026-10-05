import { useEffect, useId, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { CaretDownIcon, InfoIcon } from "@phosphor-icons/react";
import { LIBRARY_LAYOUT_SPRING } from "../../motion/transitions";
import { Tooltip } from "../Tooltip/Tooltip";
import styles from "./FilterAccordion.module.css";

export function FilterAccordion({ title, hint, summary, forceOpen = false, children }: {
  title: string;
  hint?: string;
  summary?: ReactNode;
  forceOpen?: boolean;
  children: ReactNode;
}) {
  const id = useId();
  const [open, setOpen] = useState(forceOpen);
  // Reveal new validation/search results without preventing a later user collapse.
  useEffect(() => {
    if (forceOpen) setOpen(true);
  }, [forceOpen]);
  const expanded = open;
  const reduced = useReducedMotion();
  const transition = reduced ? { duration: 0 } : LIBRARY_LAYOUT_SPRING;
  return <div className={styles.accordion}>
    <div className={styles.header}>
      <button type="button" className={styles.trigger} aria-expanded={expanded} aria-controls={id}
        aria-labelledby={`${id}-title${summary ? ` ${id}-summary` : ""}`}
        onClick={() => setOpen(!open)}>
        <motion.span initial={false} animate={{ rotate: expanded ? 180 : 0 }} transition={transition} aria-hidden>
          <CaretDownIcon weight="bold" />
        </motion.span>
      </button>
      <span className={styles.title} id={`${id}-title`}>{title}</span>
      {hint && <Tooltip content={hint} openOnClick><button className={styles.info} type="button" aria-label={title}><InfoIcon weight="bold" /></button></Tooltip>}
      {summary && <span className={styles.summary} id={`${id}-summary`}>{summary}</span>}
    </div>
    <motion.div id={id} initial={false} animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
      transition={transition} className={styles.clip} aria-hidden={!expanded} inert={!expanded}>
      <div className={styles.content}>{children}</div>
    </motion.div>
  </div>;
}
