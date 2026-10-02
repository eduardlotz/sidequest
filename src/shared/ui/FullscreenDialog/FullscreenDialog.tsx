import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from "react";
import { AnimatePresence, motion } from "motion/react";

import { BottomCloseButton } from "../BottomCloseButton/BottomCloseButton";
import styles from "./FullscreenDialog.module.css";

type Props = {
  closeOnOutsideClick?: boolean;
  children: ReactNode;
  closeLabel: string;
  label: string;
  initialFocusRef?: RefObject<HTMLElement | null>;
  onOpenChange: (open: boolean) => void;
  open: boolean;
  reduceMotion: boolean;
  showCloseButton?: boolean;
  triggerRef?: RefObject<HTMLElement | null>;
};

export function FullscreenDialog({
  closeOnOutsideClick = false,
  children,
  closeLabel,
  label,
  initialFocusRef,
  onOpenChange,
  open,
  reduceMotion,
  showCloseButton = true,
  triggerRef,
}: Props) {
  return (
    <AnimatePresence initial={false}>
      {open ? (
        <FullscreenDialogSurface
          closeOnOutsideClick={closeOnOutsideClick}
          closeLabel={closeLabel}
          label={label}
          initialFocusRef={initialFocusRef}
          onClose={() => onOpenChange(false)}
          reduceMotion={reduceMotion}
          showCloseButton={showCloseButton}
          triggerRef={triggerRef}
        >
          {children}
        </FullscreenDialogSurface>
      ) : null}
    </AnimatePresence>
  );
}

function FullscreenDialogSurface({
  closeOnOutsideClick,
  children,
  closeLabel,
  label,
  initialFocusRef,
  onClose,
  reduceMotion,
  showCloseButton,
  triggerRef,
}: Omit<Props, "onOpenChange" | "open"> & { onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState({ top: false, bottom: false });

  useLayoutEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    dialog.showModal();
    initialFocusRef?.current?.focus();
    return () => {
      dialog.close();
      window.requestAnimationFrame(() => triggerRef?.current?.focus());
    };
  }, [initialFocusRef, triggerRef]);

  useEffect(() => {
    const node = scrollRef.current;
    if (!node) return;

    const updateEdges = () => {
      const top = Math.max(0, node.scrollTop);
      const bottom = node.scrollHeight - node.clientHeight - top > 8;
      setEdges((previous) =>
        previous.top === top > 8 && previous.bottom === bottom
          ? previous
          : { top: top > 8, bottom },
      );
    };

    node.scrollTop = 0;
    const resize = new ResizeObserver(updateEdges);
    resize.observe(node);
    if (node.firstElementChild) resize.observe(node.firstElementChild);
    node.addEventListener("scroll", updateEdges, { passive: true });
    updateEdges();

    return () => {
      resize.disconnect();
      node.removeEventListener("scroll", updateEdges);
    };
  }, []);

  return (
    <motion.dialog
      ref={dialogRef}
      className={styles.dialog}
      aria-label={label}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
      transition={{
        duration: reduceMotion ? 0 : 0.22,
        ease: "easeOut",
      }}
    >
      {showCloseButton ? (
        <BottomCloseButton
          autoFocus
          label={closeLabel}
          onClick={onClose}
        />
      ) : null}
      <motion.div
        className={styles.scroll}
        onClick={(event) => {
          if (closeOnOutsideClick && event.target === event.currentTarget) onClose();
        }}
        ref={scrollRef}
        initial={false}
        animate={{
          "--fade-top": edges.top ? "48px" : "0px",
          "--fade-bottom": edges.bottom ? "64px" : "0px",
        }}
        transition={{
          duration: reduceMotion ? 0 : 0.2,
          ease: "easeOut",
        }}
      >
        {children}
      </motion.div>
    </motion.dialog>
  );
}
