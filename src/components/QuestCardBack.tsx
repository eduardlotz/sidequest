import { QUEST_MARK_BY_GENRE, markAssetUrl } from "../data/questMarks";
import {
  QUEST_GENRE_LABELS,
  type QuestGenre,
} from "../data/questTaxonomy";
import styles from "../App.module.css";

type Props = {
  genre: QuestGenre;
  revealGenreOnHover?: boolean;
};

export function QuestCardBack({
  genre,
  revealGenreOnHover = false,
}: Props) {
  const mark = markAssetUrl(QUEST_MARK_BY_GENRE[genre]);

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
      {revealGenreOnHover && (
        <strong className={styles.questCardBackGenre}>
          {QUEST_GENRE_LABELS[genre]}
        </strong>
      )}
    </span>
  );
}
