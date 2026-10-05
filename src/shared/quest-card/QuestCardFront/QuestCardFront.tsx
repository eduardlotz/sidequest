import { useTranslation } from "react-i18next";
import { useState, type CSSProperties } from "react";
import type { QuestTypeId, QuestTagId } from "../../../data/questTraits";
import styles from "../QuestCard/QuestCard.module.css";
import { WordmarkSkewedLogo } from "../../../assets/wordmark-skewed";
import { QuestCardMeta } from "../QuestCardMeta/QuestCardMeta";
import { QuestObjectiveText } from "../QuestObjectiveText/QuestObjectiveText";
import type { GameReference } from "../../../data/gameTypes";
import { formatRunningDuration } from "../../../lib/format";
import {
  QUEST_COIN_MULTIPLIERS,
  type QuestRarity,
} from "../../../data/questRarity";
import type { QuestExperience } from "../../../data/questTypes";
import { QuestMetadataChips } from "../QuestMetadataChips";

type Props = {
  experience?: QuestExperience;
  favorite?: boolean;
  favoriteInteraction?: boolean;
  unknown?: boolean;
  rarity?: QuestRarity;
  bestTimeMs?: number | null;
  game: GameReference | null;
  type: QuestTypeId;
  tags: readonly QuestTagId[];
  minimumDurationMinutes: number;
  durationPresentation?: "estimate" | "range";
  moodTitle: string;
  name: string;
  objective: string;
  suggestedDurationMinutes: number;
  maximumDurationMinutes?: number;
  showWordmarkLogo?: boolean;
};

export function QuestCardFront({
  experience,
  favorite = false,
  favoriteInteraction = false,
  unknown = false,
  rarity = "standard",
  bestTimeMs,
  game,
  type,
  tags,
  minimumDurationMinutes,
  durationPresentation,
  moodTitle,
  name,
  objective,
  suggestedDurationMinutes,
  maximumDurationMinutes,
  showWordmarkLogo = true,
}: Props) {
  const { t } = useTranslation();

  return (
    <>
      <span className={styles.questCardFrontContent}>
        {unknown ? (
          <>
            <span className={styles.questCardMood}>
              {t("ui.gallery.unknown")}
            </span>
            <span className={styles.questCardDivider} />
          </>
        ) : (
          <QuestCardMeta
            favorite={favorite}
            favoriteInteraction={favoriteInteraction}
            durationFormat="long"
            durationLabel={
              type === "countdown"
                ? t("ui.timer.countdownLimit", {
                    minutes: maximumDurationMinutes ?? suggestedDurationMinutes,
                  })
                : type === "speedrun"
                  ? t("ui.timer.stopwatch")
                  : undefined
            }
            game={game}
            minimumDurationMinutes={minimumDurationMinutes}
            durationPresentation={durationPresentation}
            moodTitle={moodTitle}
            suggestedDurationMinutes={suggestedDurationMinutes}
            maximumDurationMinutes={maximumDurationMinutes}
          />
        )}
        <span
          className={styles.questCardFrontCopy}
          data-meta-presentation={unknown ? undefined : "chips"}
        >
          <strong className={styles.questCardFrontName}>
            {unknown ? t("ui.gallery.unknown") : name}
          </strong>
          <span className={styles.questCardFrontObjective}>
            {unknown ? (
              t("ui.gallery.unknownCard")
            ) : (
              <QuestObjectiveText objective={objective} />
            )}
          </span>
          {!unknown && (
            <QuestMetadataChips
              experience={experience}
              tags={tags}
              reward={
                rarity === "special" ? (
                  <span
                    className={styles.specialBadge}
                    aria-label={t("ui.quest.specialReward", {
                      multiplier: QUEST_COIN_MULTIPLIERS[rarity],
                    })}
                  >
                    <span aria-hidden="true">
                      {QUEST_COIN_MULTIPLIERS[rarity]}×
                    </span>
                  </span>
                ) : undefined
              }
            />
          )}
          {!unknown && bestTimeMs != null && (
            <span className={styles.questCardRecord}>
              {t("ui.gallery.personalBest")}{" "}
              <strong>{formatRunningDuration(bestTimeMs)}</strong>
            </span>
          )}
        </span>
      </span>
      {showWordmarkLogo && (
        <span className={styles.cardBrand} aria-hidden="true">
          <WordmarkSkewedLogo />
        </span>
      )}
    </>
  );
}
