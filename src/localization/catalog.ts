import { MOODS_BY_ID, type MoodDefinition, type MoodId } from "../data/moods";
import {
  QUESTS_BY_ID,
  QUEST_TRANSLATIONS_BY_ID,
  type QuestDefinition,
} from "../data/quests";
import { flexibleGameContexts } from "../data/games/questCompatibility";
import { historicalQuest } from "../domain/quest/snapshot";
import type { QuestSnapshot } from "../domain/quest/model";
import type { Quest } from "../domain/quest/model";
import type { GameReference } from "../data/gameTypes";
import i18n, { normalizeLanguage, type AppLanguage } from "./i18n";

function translator(language: AppLanguage) {
  return i18n.getFixedT(normalizeLanguage(language));
}

export function localizeMood(
  moodId: MoodId,
  language: AppLanguage,
): MoodDefinition | null {
  const mood = MOODS_BY_ID[moodId];
  if (!mood) return null;
  const t = translator(language);
  return {
    id: mood.id,
    title: t(`moods.${mood.id}.title`, { defaultValue: mood.title }),
    subtitle: t(`moods.${mood.id}.subtitle`, { defaultValue: mood.subtitle }),
  };
}

export function localizeQuest(
  questId: string,
  language: AppLanguage,
): QuestDefinition | null {
  const archived = historicalQuest(questId);
  const quest = QUESTS_BY_ID[questId] ?? archived?.definition;
  const translations = QUEST_TRANSLATIONS_BY_ID[questId] ?? archived?.translations;
  if (!quest || !translations) return null;
  const translation = translations[normalizeLanguage(language)];
  return {
    ...quest,
    ...translation,
  };
}

export function hydrateQuest(
  questId: string,
  moodId: MoodId,
  game: GameReference | null,
  language: AppLanguage,
  snapshot?: QuestSnapshot,
): Quest | null {
  const quest = snapshot
    ? { ...snapshot.definition, ...snapshot.translations[normalizeLanguage(language)] }
    : localizeQuest(questId, language);
  if (!quest) return null;
  if (!quest.moodIds.includes(moodId)) return null;
  const mood = localizeMood(moodId, language);
  if (!mood) return null;
  if (game && !quest.gameObjective) return null;

  return {
    ...quest,
    experience: game?.source === "curated" && !quest.curated && !snapshot
      ? { ...quest.experience, contexts: flexibleGameContexts(game.id, questId, game.installmentId ? [game.installmentId] : game.installmentIds ?? []) } : quest.experience,
    objective: game
      ? quest.gameObjective!.replaceAll("{{game}}", () => game.name)
      : quest.objective,
    mood,
    game,
  };
}
