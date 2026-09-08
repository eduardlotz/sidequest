import { CheckIcon } from "@phosphor-icons/react/dist/csr/Check";
import { PlusIcon } from "@phosphor-icons/react/dist/csr/Plus";
import { motion, useReducedMotion } from "motion/react";
import { LIBRARY_SELECTION_SPRING } from "../../../../shared/motion/transitions";
import styles from "./CuratedSelectionMark.module.css";

type SelectionState = "inactive" | "pending" | "selected";

export function CuratedSelectionMark({
  pending,
  selected,
}: {
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
    <span className={styles.mark} data-state={state} aria-hidden>
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
      </motion.span>
    </span>
  );
}
