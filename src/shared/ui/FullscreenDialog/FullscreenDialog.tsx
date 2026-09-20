import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from "react";
import { AnimatePresence, motion } from "motion/react";
import { XIcon } from "@phosphor-icons/react/dist/csr/X";

import { SolidButton } from "../SolidButton/SolidButton";
import styles from "./FullscreenDialog.module.css";

type Props = {
  children: ReactNode;
  closeLabel: string;
  label: string;
  onOpenChange: (open: boolean) => void;
  open: boolean;
  reduceMotion: boolean;
  triggerRef?: RefObject<HTMLElement | null>;
};

export function FullscreenDialog({
  children,
  closeLabel,
  label,
  onOpenChange,
  open,
  reduceMotion,
  triggerRef,
}: Props) {
  return (
    <AnimatePresence initial={false}>
      {open ? (
        <FullscreenDialogSurface
          closeLabel={closeLabel}
          label={label}
          onClose={() => onOpenChange(false)}
          reduceMotion={reduceMotion}
          triggerRef={triggerRef}
        >
          {children}
        </FullscreenDialogSurface>
      ) : null}
    </AnimatePresence>
  );
}

function FullscreenDialogSurface({
  children,
  closeLabel,
  label,
  onClose,
  reduceMotion,
  triggerRef,
}: Omit<Props, "onOpenChange" | "open"> & { onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState({ top: false, bottom: false });

  useLayoutEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    dialog.showModal();
    return () => {
      dialog.close();
      window.requestAnimationFrame(() => triggerRef?.current?.focus());
    };
  }, [triggerRef]);

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
      <SolidButton
        autoFocus
        className={styles.close}
        aria-label={closeLabel}
        iconLeft={<XIcon weight="bold" />}
        size="medium"
        variant="secondary"
        onClick={onClose}
      />
      <motion.div
        className={styles.scroll}
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
