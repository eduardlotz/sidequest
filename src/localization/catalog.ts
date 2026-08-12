import { MOODS_BY_ID, type MoodDefinition, type MoodId } from "../data/moods";
import { QUESTS_BY_ID, type QuestDefinition } from "../data/quests";
import type {
  CompletedQuest,
  CompletedSession,
  Quest,
} from "../domain/quest/model";
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
  if (!quest) return null;
  const t = translator(language);
  return {
    ...quest,
    name: t(`quests.${quest.id}.name`, { defaultValue: quest.name }),
    title: t(`quests.${quest.id}.title`, { defaultValue: quest.title }),
    objective: t(`quests.${quest.id}.objective`, {
      defaultValue: quest.objective,
    }),
    completion: t(`quests.${quest.id}.completion`, {
      defaultValue: quest.completion,
    }),
    tips: quest.tipIds.map((tipId, index) => ({
      title: t(`tips.${tipId}.title`, {
        defaultValue: quest.tips[index]?.title ?? tipId,
      }),
      description: t(`tips.${tipId}.description`, {
        defaultValue: quest.tips[index]?.description ?? "",
      }),
    })),
  };
}

export function hydrateQuest(
  questId: string,
  completedSessions: readonly CompletedSession[],
  language: AppLanguage,
): Quest | null {
  const quest = localizeQuest(questId, language);
  if (!quest) return null;
  const mood = localizeMood(quest.moodId, language);
  if (!mood) return null;

  return {
    ...quest,
    mood,
    completionCount: completedSessions.filter(
      (completion) => completion.questId === questId,
    ).length,
  };
}

export function hydrateCompletedQuest(
  completion: CompletedSession,
  language: AppLanguage,
): CompletedQuest | null {
  const quest = localizeQuest(completion.questId, language);
  const mood = localizeMood(completion.moodId, language);
  if (!quest || !mood || quest.moodId !== mood.id) return null;

  return {
    ...completion,
    mood,
    quest,
  };
}
