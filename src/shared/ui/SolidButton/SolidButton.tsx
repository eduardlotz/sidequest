import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import styles from "./SolidButton.module.css";

type SolidButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  variant?: "surface" | "soft" | "primary";
};

export const SolidButton = forwardRef<HTMLButtonElement, SolidButtonProps>(
  function SolidButton(
    {
      children,
      className,
      iconLeft,
      iconRight,
      variant = "surface",
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
        data-variant={variant}
        ref={ref}
      >
        {iconLeft ? (
          <span className={styles.icon} aria-hidden="true">
            {iconLeft}
          </span>
        ) : null}
        <span>{children}</span>
        {iconRight ? (
          <span className={styles.icon} aria-hidden="true">
            {iconRight}
          </span>
        ) : null}
      </button>
    );
  },
);
