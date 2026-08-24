import { type ButtonHTMLAttributes, type ReactNode } from "react";
import { CoinIcon } from "../Icons/Icons";
import styles from "./CoinPriceButton.module.css";

type Props = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> & {
  label: ReactNode;
  price: ReactNode;
  tone?: "neutral" | "inverse";
};

export function CoinPriceButton({
  className,
  label,
  price,
  tone = "neutral",
  ...props
}: Props) {
  return (
    <button
      {...props}
      className={[styles.button, className].filter(Boolean).join(" ")}
      data-tone={tone}
    >
      <span className={styles.label}>{label}</span>
      <span className={styles.price}>
        {price}
        <CoinIcon />
      </span>
    </button>
  );
}
