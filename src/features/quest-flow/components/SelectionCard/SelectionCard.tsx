import { AnimatePresence, motion } from "motion/react";
import type { ReactNode } from "react";
import { CARD_LAYOUT_TRANSITION } from "../../../../lib/cardMotion";
import styles from "./SelectionCard.module.css";
import { SELECTION_HANDOFF_EASE } from "../../../../shared/motion/transitions";

type SelectionCardBodyProps = {
  children?: ReactNode;
  className?: string;
  contentClassName?: string;
  contentKey?: string;
  contentVisible?: boolean;
  layoutId: string;
  reduceMotion: boolean;
};

type SelectionCardContentProps = {
  children: ReactNode;
  className?: string;
  contentKey: string;
  reduceMotion: boolean;
  visible: boolean;
};

const CONTENT_EASE = SELECTION_HANDOFF_EASE;

export function SelectionCardBody({
  children,
  className,
  contentClassName,
  contentKey,
  contentVisible = true,
  layoutId,
  reduceMotion,
}: SelectionCardBodyProps) {
  return (
    <motion.span
      className={joinClassNames(styles.selectionCardBody, className)}
      layoutId={layoutId}
      layoutCrossfade={false}
      transition={{
        layout: reduceMotion ? { duration: 0 } : CARD_LAYOUT_TRANSITION,
      }}
    >
      {children && contentKey ? (
        <SelectionCardContent
          className={contentClassName}
          contentKey={contentKey}
          reduceMotion={reduceMotion}
          visible={contentVisible}
        >
          {children}
        </SelectionCardContent>
      ) : null}
    </motion.span>
  );
}

function SelectionCardContent({
  children,
  className,
  contentKey,
  reduceMotion,
  visible,
}: SelectionCardContentProps) {
  return (
    <AnimatePresence initial mode="sync">
      {visible ? (
        <motion.span
          className={joinClassNames(styles.selectionCardContent, className)}
          key={contentKey}
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: reduceMotion ? 0 : 0.32,
            ease: CONTENT_EASE,
          }}
        >
          {children}
        </motion.span>
      ) : null}
    </AnimatePresence>
  );
}

function joinClassNames(...names: Array<string | undefined>) {
  return names.filter(Boolean).join(" ");
}
