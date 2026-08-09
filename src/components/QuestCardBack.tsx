import { markAssetUrl } from "../data/questMarks";
import styles from "../App.module.css";
import { QuestCardMeta } from "./QuestCardMeta";
import { Logo } from "../assets/logo";

type Props =
  | {
      minimumDurationMinutes: number;
      moodTitle: string;
      name: string;
      suggestedDurationMinutes: number;
      title: string;
      variant: "summary";
    }
  | {
      variant: "pattern";
    };

export function QuestCardBack(props: Props) {
  const summary = props.variant === "summary";

  return (
    <span
      className={styles.questCardBackContent}
      data-summary={summary ? "true" : undefined}
      aria-hidden="true"
    >
      <span className={styles.questCardBackPattern}>
        {Array.from({ length: 35 }, (_, index) => (
          <Logo key={index} />
        ))}
      </span>
      {summary ? (
        <span className={styles.questCardBackSummaryFace}>
          <QuestCardMeta
            durationFormat="long"
            minimumDurationMinutes={props.minimumDurationMinutes}
            moodTitle={props.moodTitle}
            suggestedDurationMinutes={props.suggestedDurationMinutes}
          />
          <span className={styles.questCardBackSummaryCopy}>
            <strong className={styles.questCardBackSummaryName}>
              {props.name}
            </strong>
            <span className={styles.questCardBackSummaryTitle}>
              {props.title}
            </span>
          </span>
        </span>
      ) : null}
    </span>
  );
}
