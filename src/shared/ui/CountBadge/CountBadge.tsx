import styles from "./CountBadge.module.css";

export function CountBadge({ label }: { label: string }) {
  return <span className={styles.badge}>{label}</span>;
}
