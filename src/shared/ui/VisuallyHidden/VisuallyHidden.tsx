import type { ComponentPropsWithoutRef, ElementType } from "react";
import styles from "./VisuallyHidden.module.css";

type Props<TElement extends ElementType> = {
  as?: TElement;
} & Omit<ComponentPropsWithoutRef<TElement>, "as">;

export const visuallyHiddenClassName = styles.srOnly;

export function VisuallyHidden<TElement extends ElementType = "span">({
  as,
  className,
  ...props
}: Props<TElement>) {
  const Component = as ?? "span";

  return (
    <Component
      {...props}
      className={[styles.srOnly, className].filter(Boolean).join(" ")}
    />
  );
}
