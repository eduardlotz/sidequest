import { motion, useReducedMotion } from "motion/react";
import { useRef, type ReactNode } from "react";
export function LibraryStep({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  return (
    <motion.div
      ref={ref}
      tabIndex={-1}
      style={{ height: "100%", minHeight: 0, outline: "none" }}
      initial={reduced ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: reduced ? 0 : -8 }}
      transition={{ duration: reduced ? 0 : 0.22, ease: "easeOut" }}
      onAnimationComplete={(definition) => {
        if (
          typeof definition === "object" &&
          "opacity" in definition &&
          definition.opacity === 1 &&
          !ref.current?.contains(document.activeElement)
        )
          ref.current?.focus({ preventScroll: true });
      }}
    >
      {children}
    </motion.div>
  );
}
