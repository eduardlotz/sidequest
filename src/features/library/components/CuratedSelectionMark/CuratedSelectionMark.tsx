import { useId } from "react";
import { CheckIcon } from "@phosphor-icons/react/dist/csr/Check";
import { PlusIcon } from "@phosphor-icons/react/dist/csr/Plus";
import { motion, useReducedMotion } from "motion/react";
import { LIBRARY_SELECTION_SPRING } from "../../../../shared/motion/transitions";
import styles from "./CuratedSelectionMark.module.css";

type SelectionState = "inactive" | "pending" | "selected";

export function CuratedSelectionMark({
  pending,
  selected,
  appearance = "default",
}: {
  appearance?: "default" | "drawer";
  pending?: boolean;
  selected: boolean;
}) {
  const reduced = useReducedMotion();
  const state: SelectionState = pending
    ? "pending"
    : selected
      ? "selected"
      : "inactive";
  const transition = reduced ? { duration: 0 } : LIBRARY_SELECTION_SPRING;

  return (
    <span className={styles.mark} data-state={state} data-appearance={appearance} aria-hidden>
      <motion.span
        className={styles.dottedRing}
        initial={false}
        animate={{
          opacity: state === "pending" ? 1 : 0,
          rotate: state === "pending" ? 90 : 0,
          scale: state === "pending" ? 1 : 0.72,
        }}
        transition={transition}
      />
      <motion.span
        className={styles.circle}
        initial={false}
        animate={{ scale: state === "pending" ? 0.3 : 1 }}
        transition={transition}
      >
        {appearance === "drawer" ? <DrawerStatusCircle state={state} /> : <>
        <motion.span
          className={styles.glyph}
          initial={false}
          animate={{
            opacity: state === "inactive" ? 1 : 0,
            rotate: state === "inactive" ? 0 : -18,
            scale: state === "inactive" ? 1 : 0.25,
          }}
          transition={transition}
        >
          <PlusIcon weight="bold" />
        </motion.span>
        <motion.span
          className={styles.glyph}
          initial={false}
          animate={{
            opacity: state === "selected" ? 1 : 0,
            rotate: state === "selected" ? 0 : 18,
            scale: state === "selected" ? 1 : 0.25,
          }}
          transition={transition}
        >
          <CheckIcon weight="bold" />
        </motion.span>
        </>}
      </motion.span>
    </span>
  );
}

function DrawerStatusCircle({ state }: { state: SelectionState }) {
  const maskId = useId();
  const reduced = useReducedMotion();
  return <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <defs><mask id={maskId} maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16" style={{ maskType: "luminance" }}>
      <rect width="16" height="16" fill="white" />
      <motion.path d="M8 3.75C7.58579 3.75 7.25 4.08579 7.25 4.5V7.25H4.5C4.08579 7.25 3.75 7.58579 3.75 8C3.75 8.41421 4.08579 8.75 4.5 8.75H7.25V11.5C7.25 11.9142 7.58579 12.25 8 12.25C8.41421 12.25 8.75 11.9142 8.75 11.5V8.75H11.5C11.9142 8.75 12.25 8.41421 12.25 8C12.25 7.58579 11.9142 7.25 11.5 7.25H8.75V4.5C8.75 4.08579 8.41421 3.75 8 3.75Z" fill="black" initial={false} animate={{ opacity: state === "inactive" ? 1 : 0 }} transition={{ duration: reduced ? 0 : 0.16 }} />
      <motion.path d="M11.3643 5.58301C11.0717 5.29032 10.5968 5.28983 10.3037 5.58203L7.05273 8.8252L5.69727 7.46973C5.40441 7.17694 4.9296 7.17698 4.63672 7.46973C4.34387 7.7626 4.34389 8.23738 4.63672 8.53027L6.52344 10.417C6.81615 10.7096 7.29104 10.7094 7.58398 10.417L11.3633 6.64453C11.6563 6.35189 11.6568 5.87612 11.3643 5.58301Z" fill="black" initial={false} animate={{ opacity: state === "selected" ? 1 : 0 }} transition={{ duration: reduced ? 0 : 0.16 }} />
    </mask></defs>
    <circle cx="8" cy="8" r="8" fill="currentColor" mask={`url(#${maskId})`} />
  </svg>;
}
