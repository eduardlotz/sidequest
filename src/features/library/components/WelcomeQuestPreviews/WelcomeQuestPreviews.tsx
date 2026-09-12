import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { CURATED_GAMES_BY_ID } from "../../../../data/games";
import { QUEST_CORES } from "../../../../data/quests";
import { getMoodAccentStyle } from "../../../../data/questColors";
import { createQuestOffer } from "../../../../domain/quest/rules";
import type { QuestOffer } from "../../../../domain/quest/model";
import { hydrateQuest } from "../../../../localization/catalog";
import { normalizeLanguage } from "../../../../localization/i18n";
import { InteractiveQuestCard } from "../../../../shared/quest-card/InteractiveQuestCard/InteractiveQuestCard";
import { QuestCard } from "../../../../shared/quest-card/QuestCard/QuestCard";
import { SELECTION_HANDOFF_EASE } from "../../../../shared/motion/transitions";
import styles from "./WelcomeQuestPreviews.module.css";

// Store only the choices; hydrate their copy again when the language changes.
export function createWelcomePreviewOffers(): QuestOffer[] {
  const gameQuests = QUEST_CORES.filter(
    (quest) => quest.curated && quest.gameBindable && CURATED_GAMES_BY_ID[quest.curated.gameId],
  );
  const flexibleQuests = QUEST_CORES.filter((quest) => quest.universal && !quest.curated);
  return [pick(gameQuests), pick(flexibleQuests)].flatMap((quest) => {
    if (!quest) return [];
    const moodId = pick(quest.moodIds);
    if (!moodId) return [];
    const game = quest.curated ? CURATED_GAMES_BY_ID[quest.curated.gameId] : null;
    return [createQuestOffer(moodId, quest.id, game
      ? { id: game.id, name: game.name, source: "curated" }
      : null)];
  });
}

function pick<T>(items: readonly T[]): T | undefined {
  return items[Math.floor(Math.random() * items.length)];
}

export function WelcomeQuestPreviews({
  offers,
  reduceMotion,
}: {
  offers: readonly QuestOffer[];
  reduceMotion: boolean;
}) {
  const { t, i18n } = useTranslation();
  const language = normalizeLanguage(i18n.resolvedLanguage ?? i18n.language);
  return (
    <motion.div
      className={styles.previews}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.09 } },
        exit: {},
      }}
    >
      {offers.map((offer) => {
        const quest = hydrateQuest(offer.questId, offer.moodId, offer.game, language);
        if (!quest) return null;
        return (
          <div
            className={styles.previewCard}
            key={offer.id}
            style={getMoodAccentStyle(offer.moodId)}
          >
            <motion.div
              className={styles.previewEntrance}
              variants={{
                hidden: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 28 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: reduceMotion ? 0 : 0.46, ease: SELECTION_HANDOFF_EASE },
                },
                exit: {
                  opacity: 0,
                  y: reduceMotion ? 0 : -8,
                  transition: { duration: reduceMotion ? 0 : 0.18 },
                },
              }}
            >
              <InteractiveQuestCard
                flipOnClick="triple"
                reduceMotion={reduceMotion}
                label={t("ui.quest.activeLabel", {
                  mood: quest.mood.title,
                  title: quest.name,
                  game: quest.game?.name ?? "",
                })}
              >
                <QuestCard
                  game={quest.game}
                  genres={quest.genres}
                  type={quest.type}
                  tags={quest.tags}
                  minimumDurationMinutes={quest.minimumDurationMinutes}
                  suggestedDurationMinutes={quest.suggestedDurationMinutes}
                  moodTitle={quest.mood.title}
                  name={quest.name}
                  objective={quest.objective}
                />
              </InteractiveQuestCard>
            </motion.div>
          </div>
        );
      })}
    </motion.div>
  );
}
