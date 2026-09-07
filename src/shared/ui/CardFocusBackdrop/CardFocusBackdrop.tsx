import type { RefObject } from "react";
import styles from "./CardFocusBackdrop.module.css";

export function CardFocusBackdrop({
  label,
  onClose,
  ref,
  variant = "clear",
}: {
  label: string;
  onClose: () => void;
  ref: RefObject<HTMLButtonElement | null>;
  variant?: "clear" | "dim";
}) {
  return (
    <button
      ref={ref}
      className={styles.backdrop}
      type="button"
      aria-label={label}
      data-variant={variant}
      onClick={onClose}
    />
  );
}
