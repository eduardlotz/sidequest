import { useTranslation } from "react-i18next";
import styles from "../../../App.module.css";

type Props = {
  durationFormat?: "long" | "short";
  minimumDurationMinutes: number;
  moodTitle: string;
  name?: string;
  suggestedDurationMinutes: number;
};

export function QuestCardMeta({
  durationFormat = "short",
  minimumDurationMinutes,
  moodTitle,
  name,
  suggestedDurationMinutes,
}: Props) {
  const { t } = useTranslation();
  const duration =
    minimumDurationMinutes === suggestedDurationMinutes
      ? t(
          durationFormat === "long"
            ? "ui.quest.durationSingleLong"
            : "ui.quest.durationSingle",
          {
            count: minimumDurationMinutes,
          },
        )
      : t(
          durationFormat === "long"
            ? "ui.quest.durationRangeLong"
            : "ui.quest.durationRange",
          {
            minimum: minimumDurationMinutes,
            suggested: suggestedDurationMinutes,
          },
        );

  return (
    <>
      <span className={styles.questCardMeta}>
        <span className={styles.questCardIdentity}>
          <strong className={styles.questCardMood}>{moodTitle}</strong>
          {name ? (
            <span className={styles.questCardName}>{name}</span>
          ) : null}
        </span>
        <span className={styles.questCardDuration}>{duration}</span>
      </span>
      <span className={styles.questCardDivider} aria-hidden="true" />
    </>
  );
}
