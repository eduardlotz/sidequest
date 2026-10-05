import { type ButtonHTMLAttributes, type ComponentProps, type ReactNode } from "react";
import { CoinIcon } from "../Icons/Icons";
import { SolidButton } from "../SolidButton/SolidButton";
import styles from "./CoinPriceButton.module.css";

type Props = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> & {
  label: ReactNode;
  price: ReactNode;
  tone?: "neutral" | "inverse";
  variant?: ComponentProps<typeof SolidButton>["variant"];
};

export function CoinPriceButton({
  className,
  label,
  price,
  tone = "inverse",
  variant = "primary",
  ...props
}: Props) {
  return (
    <SolidButton
      {...props}
      className={className}
      size="medium"
      variant={variant}
      data-tone={tone}
    >
      <span className={styles.content}>
        <span className={styles.label}>{label}</span>
        <span className={styles.price}>
          {price}
          <CoinIcon />
        </span>
      </span>
    </SolidButton>
  );
}
