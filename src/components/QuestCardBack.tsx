import { markAssetUrl } from "../data/questMarks";
import { useTranslation } from "react-i18next";
import styles from "../App.module.css";

type Props =
  | {
      durationMinutes: number;
      title: string;
      variant: "summary";
    }
  | {
      title: string;
      variant: "completion";
    };

export function QuestCardBack({
  title,
  ...props
}: Props) {
  const { t } = useTranslation();
  const mark = markAssetUrl("sidequest-mark.svg");
  const summary = props.variant === "summary";

  return (
    <span
      className={styles.questCardBackContent}
      data-summary={summary ? "true" : undefined}
      aria-hidden="true"
    >
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
      {summary ? (
        <span className={styles.questCardBackSummary}>
          <strong className={styles.questCardBackTitle}>{title}</strong>
          <span className={styles.questCardBackEstimate}>
            {t("ui.quest.estimateMinutes", {
              count: props.durationMinutes,
            })}
          </span>
        </span>
      ) : (
        <strong className={styles.questCardBackTitle}>{title}</strong>
      )}
    </span>
  );
}
