import type { ButtonHTMLAttributes, ReactNode } from "react";
import { SelectionMark } from "../SelectionMark/SelectionMark";
import styles from "./SelectionRow.module.css";

export function SelectionRow({ selected, icon, count, children, className, ...props }: {
  selected: boolean;
  icon?: ReactNode;
  count?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button {...props} type="button" role="checkbox" aria-checked={selected}
    className={[styles.row, className].filter(Boolean).join(" ")}>
    {icon && <span className={styles.icon} aria-hidden="true">{icon}</span>}
    <span className={styles.copy}>{children}</span>
    {count !== undefined && <span className={styles.count}>{count}</span>}
    <SelectionMark appearance="drawer" selected={selected} />
  </button>;
}
