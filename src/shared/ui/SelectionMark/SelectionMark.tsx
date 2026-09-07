import { CheckCircleIcon } from "@phosphor-icons/react/dist/csr/CheckCircle";
import { PlusCircleIcon } from "@phosphor-icons/react/dist/csr/PlusCircle";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import styles from "./SelectionMark.module.css";
export function SelectionMark({
  selected,
  pending,
}: {
  selected: boolean;
  pending?: boolean;
}) {
  const Icon = selected ? CheckCircleIcon : PlusCircleIcon;
  const reduced = useReducedMotion();
  return (
    <span
      className={styles.mark}
      data-pending={pending || undefined}
      data-selected={selected}
      aria-hidden
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={`${selected}-${pending}`}
          initial={{ opacity: 0, scale: reduced ? 1 : 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: reduced ? 1 : 0.7 }}
          transition={{ duration: reduced ? 0 : 0.1 }}
        >
          {pending ? <span className={styles.pendingDot} /> : <Icon weight="fill" />}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
