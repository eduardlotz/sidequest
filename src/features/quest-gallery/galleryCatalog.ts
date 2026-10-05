import type { QuestDefinition } from "../../data/quests";
import type { Quest, QuestProgress } from "../../domain/quest/model";
import { questOfferId } from "../../domain/quest/rules";
import { hydrateQuest } from "../../localization/catalog";
import type { AppLanguage } from "../../localization/i18n";

export function hydrateGalleryQuest(
  definition: QuestDefinition,
  progress: QuestProgress | undefined,
  language: AppLanguage,
) {
  const identity = progress?.lastCompletion ?? progress?.seenOffer;
  return hydrateQuest(
    definition.id,
    identity && definition.moodIds.includes(identity.moodId) ? identity.moodId : definition.moodIds[0],
    definition.curated ? identity?.game ?? null : null,
    language,
  );
}

export function galleryQuestOfferId(
  quest: Quest,
  progress: QuestProgress | undefined,
) {
  // Replay and card handoff retain the saved game even when gallery copy is generic.
  const identity = progress?.lastCompletion ?? progress?.seenOffer;
  return questOfferId(
    quest.mood.id,
    quest.id,
    identity?.game?.id ?? quest.game?.id ?? null,
  );
}
