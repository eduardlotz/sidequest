import completionCheckSvg from "../assets/completion-check.svg?raw";
import styles from "../App.module.css";

export function CompletionCheckIcon() {
  return (
    <span
      className={styles.completionCheckIcon}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: completionCheckSvg }}
    />
  );
}
