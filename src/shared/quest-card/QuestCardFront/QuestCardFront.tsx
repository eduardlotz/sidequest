import { useTranslation } from "react-i18next";
import { QUEST_TYPES, QUEST_TAGS } from "../../../data/questTraits";
import type { QuestTypeId, QuestTagId } from "../../../data/questTraits";
import styles from "../QuestCard/QuestCard.module.css";
import { WordmarkLogo } from "../../../assets/wordmark";
import { QuestCardMeta } from "../QuestCardMeta/QuestCardMeta";
import { QuestObjectiveText } from "../QuestObjectiveText/QuestObjectiveText";
import type { GameReference } from "../../../data/gameTypes";
import { formatRunningDuration } from "../../../lib/format";

type Props = {
  unknown?: boolean;
  bestTimeMs?: number | null;
  game: GameReference | null;
  genres: readonly string[];
  type: QuestTypeId;
  tags: readonly QuestTagId[];
  minimumDurationMinutes: number;
  moodTitle: string;
  name: string;
  objective: string;
  suggestedDurationMinutes: number;
};

export function QuestCardFront({
  unknown = false,
  bestTimeMs,
  game,
  genres,
  type,
  tags,
  minimumDurationMinutes,
  moodTitle,
  name,
  objective,
  suggestedDurationMinutes,
}: Props) {
  const { i18n, t } = useTranslation();
  const language = i18n.resolvedLanguage?.startsWith("de") ? "de" : "en";
  const labels = [QUEST_TYPES[type].title[language], ...Array.from(new Set([
    ...tags.map((tag) => QUEST_TAGS[tag][language]),
    ...genres,
  ])).slice(0, 2)];
  return (
    <>
      <span className={styles.questCardFrontContent}>
        {unknown ? <>
          <span className={styles.questCardMood}>{t("ui.gallery.unknown")}</span>
          <span className={styles.questCardDivider} />
        </> : <QuestCardMeta
          durationFormat="long"
          durationLabel={type === "countdown" ? t("ui.timer.countdownLimit", { minutes: suggestedDurationMinutes }) : type === "speedrun" ? t("ui.timer.stopwatch") : undefined}
          game={game}
          minimumDurationMinutes={minimumDurationMinutes}
          moodTitle={moodTitle}
          suggestedDurationMinutes={suggestedDurationMinutes}
        />}
        <span className={styles.questCardFrontCopy}>
          <strong className={styles.questCardFrontName}>{unknown ? t("ui.gallery.unknown") : name}</strong>
          <span className={styles.questCardFrontObjective}>
            {unknown ? t("ui.gallery.unknownCard") : <QuestObjectiveText objective={objective} />}
          </span>
          {!unknown && <span className={styles.questCardGenres}>
            {labels.map((label) => (
              <span className={styles.questCardGenre} key={label}>{label}</span>
            ))}
          </span>}
          {!unknown && bestTimeMs != null && <span className={styles.questCardRecord}>
            {t("ui.gallery.personalBest")} <strong>{formatRunningDuration(bestTimeMs)}</strong>
          </span>}
        </span>
      </span>
      <span className={styles.cardBrand} aria-hidden="true">
        <WordmarkLogo />
      </span>
    </>
  );
}
