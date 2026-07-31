import { markAssetUrl } from "../data/questMarks";
import styles from "../App.module.css";

type Props = {
  title?: string;
  revealTitle?: boolean;
};

export function QuestCardBack({
  title,
  revealTitle = false,
}: Props) {
  const mark = markAssetUrl("sidequest-mark.svg");

  return (
    <span className={styles.questCardBackContent} aria-hidden="true">
      <span className={styles.questCardBackPattern}>
        {Array.from({ length: 35 }, (_, index) => (
          <img
            src={mark}
            alt=""
            width="58"
            height="58"
            key={index}
          />
        ))}
      </span>
      {revealTitle && title && (
        <strong className={styles.questCardBackTitle}>{title}</strong>
      )}
    </span>
  );
}
