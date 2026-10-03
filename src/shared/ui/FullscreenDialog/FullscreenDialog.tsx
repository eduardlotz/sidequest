import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from "react";
import { AnimatePresence, motion, useIsPresent, usePresenceData } from "motion/react";
import { BottomCloseButton } from "../BottomCloseButton/BottomCloseButton";
import styles from "./FullscreenDialog.module.css";

type SurfaceProps = {
  children: ReactNode;
  closeLabel: string;
  label: string;
  closeOnOutsideClick?: boolean;
  contentLayout?: "scroll" | "full";
  handoffOnSelection?: boolean;
  initialFocusRef?: RefObject<HTMLElement | null>;
  inert?: boolean;
  reduceMotion: boolean;
  showCloseButton?: boolean;
  triggerRef?: RefObject<HTMLElement | null>;
};

type Props = SurfaceProps & {
  onOpenChange: (open: boolean) => void;
  open: boolean;
};

export function FullscreenDialog({ onOpenChange, open, ...props }: Props) {
  return (
    <AnimatePresence initial={false}>
      {open ? (
        <FullscreenDialogSurface {...props} onClose={() => onOpenChange(false)} />
      ) : null}
    </AnimatePresence>
  );
}

// Gallery shares this root under its existing presence owner, preserving card handoffs.
export const FullscreenDialogSurface = forwardRef<HTMLDivElement,
  SurfaceProps & { onClose: () => void }
>(function FullscreenDialogSurface({
  children,
  closeLabel,
  label,
  closeOnOutsideClick = false,
  contentLayout = "scroll",
  handoffOnSelection = false,
  initialFocusRef,
  inert,
  onClose,
  reduceMotion,
  showCloseButton = true,
  triggerRef,
}, forwardedRef) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState({ top: false, bottom: false });
  const isPresent = useIsPresent();
  const exitReason = usePresenceData();
  const handingOff = handoffOnSelection && !isPresent && exitReason === "gallery-selection";
  const handingOffRef = useRef(false);
  handingOffRef.current = handingOff;
  useImperativeHandle(forwardedRef, () => dialogRef.current!, []);

  useLayoutEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const firstControl = dialog.querySelector<HTMLElement>('button:not([disabled]), input, [tabindex="0"]');
    (initialFocusRef?.current ?? firstControl ?? dialog).focus({ preventScroll: true });
    return () => {
      document.body.style.overflow = previousOverflow;
      if (!handingOffRef.current) {
        window.requestAnimationFrame(() => {
          const target = triggerRef?.current ?? previousFocus;
          if (target instanceof HTMLElement && target.isConnected) target.focus({ preventScroll: true });
        });
      }
    };
  }, [initialFocusRef, triggerRef]);

  useEffect(() => {
    if (!isPresent || inert) return;
    const dismissOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape" || event.defaultPrevented) return;
      const dialogs = document.querySelectorAll('[data-fullscreen-dialog]:not([inert])');
      if (dialogs[dialogs.length - 1] !== dialogRef.current) return;
      // Drawers and tooltips handle Escape first; also close when focus is outside the root.
      event.preventDefault();
      onClose();
    };
    window.addEventListener("keydown", dismissOnEscape);
    return () => window.removeEventListener("keydown", dismissOnEscape);
  }, [inert, isPresent, onClose]);

  useEffect(() => {
    const node = scrollRef.current;
    if (!node) return;
    const updateEdges = () => {
      const top = node.scrollTop > 8;
      const bottom = node.scrollHeight - node.clientHeight - Math.max(0, node.scrollTop) > 8;
      setEdges((previous) => previous.top === top && previous.bottom === bottom ? previous : { top, bottom });
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
    <motion.div
      ref={dialogRef}
      className={styles.dialog}
      role="dialog"
      aria-modal="true"
      aria-label={label}
      aria-busy={inert || undefined}
      tabIndex={-1}
      inert={inert || !isPresent}
      data-fullscreen-dialog=""
      data-handoff={handingOff || undefined}
      onClick={(event) => {
        if (closeOnOutsideClick && event.target === event.currentTarget) onClose();
      }}
      onKeyDown={(event) => {
        if (event.defaultPrevented || !(event.target instanceof Element)) return;
        // Vaul keeps ownership of keyboard events in its unchanged portaled drawers.
        if (event.target.closest('[role="dialog"]') !== event.currentTarget) return;
        if (event.key === "Tab") {
          const controls = Array.from(event.currentTarget.querySelectorAll<HTMLElement>(
            'button:not([disabled]), input:not([disabled]), a[href], [tabindex="0"]',
          )).filter((node) => !node.closest('[inert]') && node.getClientRects().length > 0);
          const first = controls[0];
          const last = controls[controls.length - 1];
          if (!first) {
            event.preventDefault();
            event.currentTarget.focus();
          } else if (event.shiftKey && (document.activeElement === first || document.activeElement === event.currentTarget)) {
            event.preventDefault();
            last.focus();
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
          }
        }
      }}
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit="exit"
      variants={{
        exit: (reason: string | undefined) => ({
          opacity: handoffOnSelection && reason === "gallery-selection" ? 0.999 : 0,
          pointerEvents: "none",
        }),
      }}
      transition={{ duration: reduceMotion ? 0 : 0.24, ease: [0.4, 0, 0.2, 1] }}
    >
      <motion.div
        className={styles.panel}
        initial={reduceMotion ? false : { scale: 0.98 }}
        animate={{ scale: 1 }}
        exit="exit"
        variants={{
          exit: (reason: string | undefined) => ({
            scale: reduceMotion || (handoffOnSelection && reason === "gallery-selection") ? 1 : 0.985,
          }),
        }}
        transition={{ duration: reduceMotion ? 0 : 0.32, ease: [0.16, 1, 0.3, 1] }}
      >
        {showCloseButton ? <BottomCloseButton label={closeLabel} onClick={onClose} /> : null}
        {contentLayout === "full" ? children : (
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
            transition={{ duration: reduceMotion ? 0 : 0.2, ease: "easeOut" }}
          >
            {children}
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
});
