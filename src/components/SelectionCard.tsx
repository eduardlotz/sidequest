import { AnimatePresence, motion } from "motion/react";
import type { ReactNode } from "react";
import { CARD_LAYOUT_TRANSITION } from "../lib/cardMotion";
import styles from "../App.module.css";

type SelectionCardBodyProps = {
  animateContentOnMount?: boolean;
  children?: ReactNode;
  className?: string;
  contentClassName?: string;
  contentKey?: string;
  contentVisible?: boolean;
  layoutId: string;
  reduceMotion: boolean;
  visible?: boolean;
};

type SelectionCardContentProps = {
  animateOnMount?: boolean;
  children: ReactNode;
  className?: string;
  contentKey: string;
  reduceMotion: boolean;
  visible: boolean;
};

const CONTENT_EASE = [0.22, 0.8, 0.24, 1] as const;

export function SelectionCardBody({
  animateContentOnMount = true,
  children,
  className,
  contentClassName,
  contentKey,
  contentVisible = true,
  layoutId,
  reduceMotion,
  visible = true,
}: SelectionCardBodyProps) {
  return (
    <motion.span
      className={joinClassNames(styles.selectionCardBody, className)}
      layoutId={layoutId}
      layoutCrossfade={false}
      style={{ visibility: visible ? "visible" : "hidden" }}
      transition={{
        layout: reduceMotion ? { duration: 0 } : CARD_LAYOUT_TRANSITION,
      }}
    >
      {children && contentKey ? (
        <SelectionCardContent
          animateOnMount={animateContentOnMount}
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
  animateOnMount = true,
  children,
  className,
  contentKey,
  reduceMotion,
  visible,
}: SelectionCardContentProps) {
  return (
    <AnimatePresence initial={animateOnMount} mode="sync">
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
