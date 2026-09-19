import completionCoinPng from "../../../../assets/completion-coin.png";
import styles from "./CompletionCoinIcon.module.css";

export function CompletionCoinIcon() {
  return (
    <img
      className={styles.completionCoinIcon}
      src={completionCoinPng}
      alt=""
      aria-hidden="true"
      draggable={false}
    />
  );
}
