import { motion, useIsPresent } from "motion/react";
import { forwardRef, type ReactNode } from "react";
import { SELECTION_HANDOFF_EASE } from "../../../../shared/motion/transitions";

export const SELECTION_LAYER_EXIT_DURATION = 0.28;

type Props = {
  children: ReactNode | ((present: boolean) => ReactNode);
  className: string;
  enterFromOpacity?: number;
  enterDuration?: number;
  exitDuration?: number;
  exitOpacity?: number;
  hidden?: boolean;
  reduceMotion: boolean;
  zIndex: number;
};

export const SelectionLayer = forwardRef<HTMLDivElement, Props>(
  function SelectionLayer(
    {
      children,
      className,
      enterFromOpacity,
      enterDuration = SELECTION_LAYER_EXIT_DURATION,
      exitDuration = SELECTION_LAYER_EXIT_DURATION,
      exitOpacity = 0,
      hidden = false,
      reduceMotion,
      zIndex,
    },
    ref,
  ) {
    const present = useIsPresent();

    return (
      <motion.div
        className={className}
        ref={ref}
        aria-hidden={hidden || !present || undefined}
        initial={
          reduceMotion || enterFromOpacity === undefined
            ? false
            : { opacity: enterFromOpacity }
        }
        animate={{ opacity: 1 }}
        exit={{
          opacity: reduceMotion ? 1 : exitOpacity,
          transition: {
            duration: reduceMotion ? 0 : exitDuration,
            ease: SELECTION_HANDOFF_EASE,
          },
        }}
        style={{ pointerEvents: present ? undefined : "none", zIndex }}
        transition={{
          duration: reduceMotion ? 0 : enterDuration,
          ease: SELECTION_HANDOFF_EASE,
        }}
      >
        {typeof children === "function" ? children(present) : children}
      </motion.div>
    );
  },
);
