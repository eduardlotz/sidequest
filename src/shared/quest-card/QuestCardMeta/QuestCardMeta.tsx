import { useTranslation } from "react-i18next";
import styles from "../QuestCard/QuestCard.module.css";
import type { GameReference } from "../../../data/gameTypes";
import { GameVisual } from "../../ui/GameVisual/GameVisual";

type Props = {
  durationFormat?: "long" | "short";
  game?: GameReference | null;
  minimumDurationMinutes: number;
  moodTitle: string;
  name?: string;
  suggestedDurationMinutes: number;
};

export function QuestCardMeta({
  durationFormat = "short",
  game = null,
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
          {game ? (
            <span className={styles.questCardGame}>
              <GameVisual game={game} size="card" />
              <span>{game.name}</span>
            </span>
          ) : null}
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
