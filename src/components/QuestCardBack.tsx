import type { PlayerMotivation } from "../data/deckTypes";
import {
  QUEST_MARK_BY_MOTIVATION,
  markAssetUrl,
} from "../data/questMarks";
import styles from "../App.module.css";

type Props = {
  motivation?: PlayerMotivation;
};

export function QuestCardBack({ motivation = "experience" }: Props) {
  const mark = markAssetUrl(QUEST_MARK_BY_MOTIVATION[motivation]);

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
    </span>
  );
}
