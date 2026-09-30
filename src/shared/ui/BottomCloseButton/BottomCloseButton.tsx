import type { ButtonHTMLAttributes } from "react";
import { XIcon } from "@phosphor-icons/react/dist/csr/X";
import { SolidButton } from "../SolidButton/SolidButton";
import styles from "./BottomCloseButton.module.css";

export function BottomCloseButton({
  label,
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { label: string }) {
  return (
    <SolidButton
      {...props}
      className={[styles.close, className].filter(Boolean).join(" ")}
      aria-label={label}
      iconLeft={<XIcon weight="bold" />}
      size="medium"
      variant="secondary"
    />
  );
}
