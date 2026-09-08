import { CheckCircleIcon } from "@phosphor-icons/react/dist/csr/CheckCircle";
import { PlusCircleIcon } from "@phosphor-icons/react/dist/csr/PlusCircle";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import styles from "./SelectionMark.module.css";
export function SelectionMark({
  selected,
  pending,
  appearance = "default",
}: {
  selected: boolean;
  appearance?: "default" | "drawer";
  pending?: boolean;
}) {
  const Icon = selected ? CheckCircleIcon : PlusCircleIcon;
  const reduced = useReducedMotion();
  return (
    <span
      className={styles.mark}
      data-appearance={appearance}
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
          {pending ? <span className={styles.pendingDot} /> : <>{appearance === "drawer" ? <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d={selected ? "M8 0C12.4182 3.76233e-05 15.9999 3.5818 16 8C16 12.4183 12.4182 16 8 16C3.58172 16 0 12.4183 0 8C6.85485e-05 3.58178 3.58176 0 8 0ZM11.3643 5.58301C11.0717 5.29032 10.5968 5.28983 10.3037 5.58203L7.05273 8.8252L5.69727 7.46973C5.40441 7.17694 4.9296 7.17698 4.63672 7.46973C4.34387 7.7626 4.34389 8.23738 4.63672 8.53027L6.52344 10.417C6.81615 10.7096 7.29104 10.7094 7.58398 10.417L11.3633 6.64453C11.6563 6.35189 11.6568 5.87612 11.3643 5.58301Z" : "M8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0ZM8 3.75C7.58579 3.75 7.25 4.08579 7.25 4.5V7.25H4.5C4.08579 7.25 3.75 7.58579 3.75 8C3.75 8.41421 4.08579 8.75 4.5 8.75H7.25V11.5C7.25 11.9142 7.58579 12.25 8 12.25C8.41421 12.25 8.75 11.9142 8.75 11.5V8.75H11.5C11.9142 8.75 12.25 8.41421 12.25 8C12.25 7.58579 11.9142 7.25 11.5 7.25H8.75V4.5C8.75 4.08579 8.41421 3.75 8 3.75Z"} fill={selected ? "#0D86FF" : "#8B8B92"} /></svg> : <Icon weight="fill" />}</>}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
