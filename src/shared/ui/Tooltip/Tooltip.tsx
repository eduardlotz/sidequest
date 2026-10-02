import { cloneElement, useId, useRef, useState, type ReactElement } from "react";
import { useTooltipPosition } from "./useTooltipPosition";
import styles from "./Tooltip.module.css";

export function Tooltip({ children, content }: {
  children: ReactElement<{ "aria-describedby"?: string }>;
  content: string;
}) {
  const id = useId();
  const trigger = useRef<HTMLSpanElement>(null);
  const bubble = useRef<HTMLSpanElement>(null);
  const [open, setOpen] = useState(false);
  useTooltipPosition(trigger, bubble, open);
  const show = () => bubble.current?.showPopover();
  const hide = () => bubble.current?.hidePopover();
  return (
    <span
      className={styles.trigger}
      ref={trigger}
      onMouseEnter={show}
      onMouseLeave={() => { if (!trigger.current?.contains(document.activeElement)) hide(); }}
      onFocus={show}
      onBlur={hide}
      onPointerDown={hide}
      onKeyDown={(event) => { if (event.key === "Escape") hide(); }}
    >
      {cloneElement(children, { "aria-describedby": id })}
      <span
        ref={bubble}
        className={styles.bubble}
        popover="manual"
        role="tooltip"
        id={id}
        onToggle={(event) => setOpen(event.newState === "open")}
      >
        {content}
      </span>
    </span>
  );
}
