import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import styles from "./SolidButton.module.css";

type SolidButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  size?: "small" | "medium" | "large";
  variant?:
    | "soft"
    | "secondary"
    | "highlighted"
    | "primary"
    | "ghost"
    | "highContrast";
};

export const SolidButton = forwardRef<HTMLButtonElement, SolidButtonProps>(
  function SolidButton(
    {
      children,
      className,
      iconLeft,
      iconRight,
      size = "small",
      variant = "soft",
      type = "button",
      ...props
    },
    ref,
  ) {
    return (
      <button
        {...props}
        type={type}
        className={[styles.button, className].filter(Boolean).join(" ")}
        data-icon-left={iconLeft ? "true" : undefined}
        data-icon-right={iconRight ? "true" : undefined}
        data-size={size}
        data-variant={variant}
        ref={ref}
      >
        {iconLeft ? (
          <span className={styles.icon} aria-hidden="true">
            {iconLeft}
          </span>
        ) : null}
        {children}
        {iconRight ? (
          <span className={styles.icon} aria-hidden="true">
            {iconRight}
          </span>
        ) : null}
      </button>
    );
  },
);
