import styles from "../QuestCard/QuestCard.module.css";
import { WordmarkLogo } from "../../../assets/wordmark";
import { QuestCardMeta } from "../QuestCardMeta/QuestCardMeta";
import { QuestObjectiveText } from "../QuestObjectiveText/QuestObjectiveText";
import type { GameReference } from "../../../data/gameTypes";

type Props = {
  game: GameReference | null;
  genres: readonly string[];
  minimumDurationMinutes: number;
  moodTitle: string;
  name: string;
  objective: string;
  suggestedDurationMinutes: number;
};

export function QuestCardFront({
  game,
  genres,
  minimumDurationMinutes,
  moodTitle,
  name,
  objective,
  suggestedDurationMinutes,
}: Props) {
  return (
    <>
      <span className={styles.questCardFrontContent}>
        <QuestCardMeta
          durationFormat="long"
          game={game}
          minimumDurationMinutes={minimumDurationMinutes}
          moodTitle={moodTitle}
          suggestedDurationMinutes={suggestedDurationMinutes}
        />
        <span className={styles.questCardFrontCopy}>
          <strong className={styles.questCardFrontName}>{name}</strong>
          <span className={styles.questCardFrontObjective}>
            <QuestObjectiveText objective={objective} />
          </span>
          {genres.length > 0 ? (
            <span className={styles.questCardGenres}>
              {genres.map((genre, index) => (
                <span
                  className={styles.questCardGenre}
                  key={`${genre}-${index}`}
                >
                  {genre}
                </span>
              ))}
            </span>
          ) : null}
        </span>
      </span>
      <span className={styles.cardBrand} aria-hidden="true">
        <WordmarkLogo />
      </span>
    </>
  );
}
