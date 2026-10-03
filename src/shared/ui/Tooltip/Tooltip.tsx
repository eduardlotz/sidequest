import { cloneElement, useEffect, useState, type ReactElement } from "react";
import {
  autoUpdate,
  flip,
  FloatingPortal,
  offset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
} from "@floating-ui/react";
import styles from "./Tooltip.module.css";

export function Tooltip({ children, content, openOnClick = false }: {
  children: ReactElement<Record<string, unknown>>;
  content: string;
  openOnClick?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const { refs, floatingStyles, context } = useFloating({
    open,
    onOpenChange: setOpen,
    placement: "bottom",
    strategy: "fixed",
    middleware: [offset(8), flip(), shift({ padding: 16 })],
    whileElementsMounted: autoUpdate,
  });
  const hover = useHover(context, { move: false, mouseOnly: true });
  const focus = useFocus(context);
  const click = useClick(context, { enabled: openOnClick, ignoreMouse: true });
  const dismiss = useDismiss(context, { escapeKey: false });
  const role = useRole(context, { role: "tooltip" });
  const { getReferenceProps, getFloatingProps } = useInteractions([hover, focus, click, dismiss, role]);

  useEffect(() => {
    if (!open) return;
    // Dismiss the hint before Vaul handles Escape, without changing the drawers.
    const dismissHint = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      event.preventDefault();
      event.stopPropagation();
      setOpen(false);
    };
    window.addEventListener("keydown", dismissHint, true);
    return () => window.removeEventListener("keydown", dismissHint, true);
  }, [open]);

  return (
    <>
      {cloneElement(children, getReferenceProps({ ...children.props, ref: refs.setReference }))}
      {open ? (
        <FloatingPortal>
          <div ref={refs.setFloating} style={floatingStyles} className={styles.positioner} {...getFloatingProps()}>
            <div className={styles.bubble}>{content}</div>
          </div>
        </FloatingPortal>
      ) : null}
    </>
  );
}
