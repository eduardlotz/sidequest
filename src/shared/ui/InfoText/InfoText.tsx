import type { ReactNode } from "react";
import { CheckCircleIcon } from "@phosphor-icons/react";
import styles from "./InfoText.module.css";

export function InfoText({ children, completed = false, icon, className = "" }: {
  children: ReactNode;
  completed?: boolean;
  icon?: ReactNode;
  className?: string;
}) {
  return <div className={`${styles.info} ${className}`} role="status">
    <span>{children}</span>
    {completed && <CheckCircleIcon className={styles.check} weight="fill" aria-hidden />}
    {!completed && icon && <span className={styles.icon} aria-hidden>{icon}</span>}
  </div>;
}
