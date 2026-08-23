import { MOODS_BY_ID, type MoodDefinition, type MoodId } from "../data/moods";
import {
  QUESTS_BY_ID,
  QUEST_TRANSLATIONS_BY_ID,
  type QuestDefinition,
} from "../data/quests";
import type { Quest } from "../domain/quest/model";
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
  const quest = QUESTS_BY_ID[questId];
  const translations = QUEST_TRANSLATIONS_BY_ID[questId];
  if (!quest || !translations) return null;
  const translation = translations[normalizeLanguage(language)];
  return {
    ...quest,
    ...translation,
  };
}

export function hydrateQuest(
  questId: string,
  language: AppLanguage,
): Quest | null {
  const quest = localizeQuest(questId, language);
  if (!quest) return null;
  const mood = localizeMood(quest.moodId, language);
  if (!mood) return null;

  return {
    ...quest,
    mood,
  };
}
