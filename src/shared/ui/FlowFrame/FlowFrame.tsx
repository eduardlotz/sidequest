import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from "react";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { CaretDownIcon } from "@phosphor-icons/react/dist/csr/CaretDown";
import styles from "./FlowFrame.module.css";

type Props = {
  children: ReactNode;
  title?: ReactNode;
  titleInContent?: boolean;
  footer?: ReactNode;
  floating?: ReactNode;
  identityRef?: RefObject<HTMLElement | null>;
  initialScrollTop?: number;
  selectionIndicator?: ReactNode;
  scrollElementRef?: RefObject<HTMLDivElement | null>;
};

// Mask the scrolling content itself: the fade always reveals the actual parent
// surface (including the dot pattern), instead of painting a second background.
export function FlowFrame({
  children,
  title,
  titleInContent = false,
  footer,
  floating,
  identityRef,
  initialScrollTop = 0,
  selectionIndicator,
  scrollElementRef,
}: Props) {
  const { t } = useTranslation();
  const scrollRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState({ top: false, bottom: false });
  const [identityHidden, setIdentityHidden] = useState(false);
  const reduced = useReducedMotion();
  const transition = { duration: reduced ? 0 : 0.2, ease: "easeOut" as const };
  const setScrollRef = useCallback(
    (node: HTMLDivElement | null) => {
      scrollRef.current = node;
      if (scrollElementRef) scrollElementRef.current = node;
    },
    [scrollElementRef],
  );
  useLayoutEffect(() => {
    const node = scrollRef.current!;
    node.scrollTop = initialScrollTop;
    const frame = window.requestAnimationFrame(() => {
      node.scrollTop = initialScrollTop;
    });
    return () => window.cancelAnimationFrame(frame);
  }, [initialScrollTop]);
  useEffect(() => {
    const node = scrollRef.current!;
    const update = () => {
      const top = Math.max(0, node.scrollTop);
      const bottom = node.scrollHeight - node.clientHeight - top > 28;
      setEdges((previous) =>
        previous.top === top > 8 && previous.bottom === bottom
          ? previous
          : { top: top > 8, bottom },
      );
    };
    const resize = new ResizeObserver(update);
    resize.observe(node);
    resize.observe(contentRef.current!);
    const identity = identityRef?.current;
    const observer = identity
      ? new IntersectionObserver(
        ([entry]) => {
          setIdentityHidden(
            entry.intersectionRatio < 0.15 &&
            entry.boundingClientRect.top < (entry.rootBounds?.top ?? 0),
          );
        },
        { root: node, threshold: [0, 0.15, 1] },
      )
      : null;
    if (identity) observer?.observe(identity);
    node.addEventListener("scroll", update, { passive: true });
    update();
    return () => {
      resize.disconnect();
      observer?.disconnect();
      node.removeEventListener("scroll", update);
    };
  }, [identityRef]);
  const showIdentity = Boolean(floating && identityHidden);
  const showSelectionIndicator =
    selectionIndicator !== undefined && selectionIndicator !== null;
  return (
    <section className={styles.frame}>
      {title && !titleInContent && (
        <header className={styles.heading}>
          <motion.div
            animate={{
              opacity: showIdentity ? 0 : 1,
              y: showIdentity ? -4 : 0,
            }}
            transition={transition}
            aria-hidden={showIdentity}
          >
            {title}
          </motion.div>
          <AnimatePresence initial={false}>
            {showIdentity && (
              <motion.div
                key="identity"
                className={styles.floating}
                initial={{ opacity: 0, y: 6, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -4, scale: 0.97 }}
                transition={transition}
              >
                {floating}
              </motion.div>
            )}
          </AnimatePresence>
        </header>
      )}
      <div
        className={styles.viewport}
        data-selection={showSelectionIndicator || undefined}
      >
        <motion.div
          className={styles.scroll}
          ref={setScrollRef}
          initial={false}
          animate={{
            "--fade-top": edges.top ? "48px" : "0px",
            "--fade-bottom": edges.bottom ? "64px" : "0px",
          }}
          transition={transition}
        >
          <div className={styles.content} data-flow-part="content" ref={contentRef}>
            {titleInContent && title && <div data-library-part="intro"><span data-library-part="infoIcon" aria-hidden>i</span>{title}</div>}
            {children}
          </div>
        </motion.div>
        {titleInContent && showIdentity && <div className={styles.floating}>{floating}</div>}
        <AnimatePresence initial={false}>
          {showSelectionIndicator ? (
            <motion.output
              className={styles.selectionIndicator}
              aria-live="polite"
              data-above-scroll={edges.bottom || undefined}
              initial={reduced ? false : { opacity: 0, y: 5, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 4, scale: 0.9 }}
              transition={transition}
            >
              {selectionIndicator}
            </motion.output>
          ) : null}
          {edges.bottom && (
            <motion.button
              key="scroll"
              type="button"
              className={styles.down}
              initial={{ opacity: 0, y: 6, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 5, scale: 0.85 }}
              whileHover={reduced ? undefined : { scale: 1.06 }}
              whileTap={reduced ? undefined : { scale: 0.92 }}
              transition={transition}
              aria-label={t("ui.library.scrollDown")}
              onClick={() =>
                scrollRef.current?.scrollBy({
                  top: scrollRef.current.clientHeight * 0.65,
                  behavior: reduced ? "instant" : "smooth",
                })
              }
            >
              <CaretDownIcon weight="bold" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
      {footer && <footer className={styles.footer} data-flow-part="footer">{footer}</footer>}
    </section>
  );
}
