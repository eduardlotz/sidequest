import { useEffect, useRef, useState, type ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { useReducedMotion } from "motion/react";
import { CaretDownIcon } from "@phosphor-icons/react/dist/csr/CaretDown";
import styles from "./FlowFrame.module.css";

export function FlowFrame({ children, title, footer, floating, onScrollChange }: {
  children: ReactNode; title?: ReactNode; footer?: ReactNode; floating?: ReactNode;
  onScrollChange?: (top: number) => void;
}) {
  const {t}=useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState({ top: false, bottom: false });
  const reduced = useReducedMotion();
  useEffect(() => {
    const node = ref.current!;
    const update = () => {
      setEdges({ top: node.scrollTop > 8, bottom: node.scrollHeight - node.clientHeight - node.scrollTop > 28 });
      onScrollChange?.(node.scrollTop);
    };
    const observer = new ResizeObserver(update);
    observer.observe(node); observer.observe(content.current!);
    node.addEventListener("scroll", update, { passive: true }); update();
    return () => { observer.disconnect(); node.removeEventListener("scroll", update); };
  }, [onScrollChange]);
  return <section className={styles.frame}>
    {title && <header className={styles.heading}>{title}</header>}
    <div className={styles.viewport} data-top={edges.top} data-bottom={edges.bottom}>
      <div className={styles.scroll} ref={ref}><div className={styles.content} ref={content}>{children}</div></div>
      {floating && <div className={styles.floating}>{floating}</div>}
      {edges.bottom && <button type="button" className={styles.down} aria-label={t("ui.library.scrollDown")} onClick={() => ref.current?.scrollBy({ top: ref.current.clientHeight * .65, behavior: reduced ? "instant" : "smooth" })}><CaretDownIcon weight="bold" /></button>}
    </div>
    {footer && <footer className={styles.footer}>{footer}</footer>}
  </section>;
}
