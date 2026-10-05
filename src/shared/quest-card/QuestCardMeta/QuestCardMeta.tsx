import { useTranslation } from "react-i18next";
import styles from "../QuestCard/QuestCard.module.css";
import type { GameReference } from "../../../data/gameTypes";
import { GameVisual } from "../../ui/GameVisual/GameVisual";
import { QuestFavoriteSticker } from "../QuestFavoriteSticker";

type Props = {
  favorite?: boolean;
  favoriteInteraction?: boolean;
  durationFormat?: "long" | "short";
  durationPresentation?: "estimate" | "range";
  durationLabel?: string;
  game?: GameReference | null;
  minimumDurationMinutes: number;
  maximumDurationMinutes?: number;
  moodTitle: string;
  name?: string;
  suggestedDurationMinutes: number;
};

export function QuestCardMeta({
  favorite = false,
  favoriteInteraction = false,
  durationFormat = "short",
  durationPresentation = "estimate",
  durationLabel,
  game = null,
  minimumDurationMinutes,
  moodTitle,
  name,
  suggestedDurationMinutes,
}: Props) {
  const { t } = useTranslation();
  const duration = durationPresentation === "estimate"
    ? t(durationFormat === "long" ? "ui.quest.estimateLong" : "ui.quest.estimate", { count: suggestedDurationMinutes })
    : minimumDurationMinutes === suggestedDurationMinutes
      ? t(durationFormat === "long" ? "ui.quest.durationSingleLong" : "ui.quest.durationSingle", { count: minimumDurationMinutes })
      : t(durationFormat === "long" ? "ui.quest.durationRangeLong" : "ui.quest.durationRange", { minimum: minimumDurationMinutes, suggested: suggestedDurationMinutes });

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
        <span className={styles.questCardDuration}>{durationLabel ?? duration}</span>
        <span className={styles.favoriteSpot}>
          <QuestFavoriteSticker favorite={favorite} particles={favoriteInteraction} />
        </span>
      </span>
      <span className={styles.questCardDivider} aria-hidden="true" />
    </>
  );
}
