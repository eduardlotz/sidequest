import {
  MOOD_IDS,
  PLAYER_MOTIVATIONS,
  QUEST_TAGS,
  type MoodDefinition,
  type MoodId,
  type ModifierDefinition,
  type ObjectiveDefinition,
  type QuestTag,
} from "./deckTypes";
import { MODIFIERS, MODIFIERS_BY_ID } from "./modifiers";
import { MOODS, MOODS_BY_ID } from "./moods";
import { OBJECTIVES, OBJECTIVES_BY_ID } from "./objectives";

export type {
  ModifierDefinition,
  MoodDefinition,
  MoodId,
  ObjectiveDefinition,
  PlayerMotivation,
  QuestTag,
} from "./deckTypes";

export {
  MODIFIERS,
  MODIFIERS_BY_ID,
  MOODS,
  MOODS_BY_ID,
  OBJECTIVES,
  OBJECTIVES_BY_ID,
};

export function objectivesForMood(
  moodId: MoodId,
  includeOnline: boolean,
): ObjectiveDefinition[] {
  const mood = MOODS_BY_ID[moodId];
  if (!mood) return [];
  const moodTags = new Set<QuestTag>(mood.tags);
  return OBJECTIVES.filter(
    (objective) =>
      (includeOnline || !objective.requiresOnline) &&
      objective.tags.some((tag) => moodTags.has(tag)),
  );
}

export function modifierFitsObjective(
  modifierId: string,
  objectiveId: string,
) {
  const modifier = MODIFIERS_BY_ID[modifierId];
  const objective = OBJECTIVES_BY_ID[objectiveId];
  if (!modifier || !objective) return false;
  const tags = new Set<QuestTag>(objective.tags);
  if (modifier.excludedTags?.some((tag) => tags.has(tag))) return false;
  if (!modifier.compatibleTags?.length) return true;
  return modifier.compatibleTags.some((tag) => tags.has(tag));
}

function validateDecks() {
  if (MOODS.length !== 8) {
    throw new Error(`Expected 8 pilot moods, received ${MOODS.length}.`);
  }
  if (OBJECTIVES.length !== 30) {
    throw new Error(
      `Expected 30 pilot objectives, received ${OBJECTIVES.length}.`,
    );
  }
  if (MODIFIERS.length !== 10) {
    throw new Error(
      `Expected 10 pilot modifiers, received ${MODIFIERS.length}.`,
    );
  }

  validateIds(MOODS);
  validateIds(OBJECTIVES);
  validateIds(MODIFIERS);

  const validMoodIds = new Set<string>(MOOD_IDS);
  const validTags = new Set<string>(QUEST_TAGS);
  const validMotivations = new Set<string>(PLAYER_MOTIVATIONS);

  for (const mood of MOODS as readonly MoodDefinition[]) {
    validateTags(mood, validTags);
    if (!validMoodIds.has(mood.id)) {
      throw new Error(`Mood ${mood.id} is not part of the mood taxonomy.`);
    }
    if (objectivesForMood(mood.id, true).length < 6) {
      throw new Error(`Mood ${mood.id} needs at least 6 compatible objectives.`);
    }
  }

  for (const objective of OBJECTIVES as readonly ObjectiveDefinition[]) {
    validateTags(objective, validTags);
    if (!validMotivations.has(objective.motivation)) {
      throw new Error(`Objective ${objective.id} has an invalid motivation.`);
    }
    const [minimum, maximum] = objective.sessionMinutes;
    if (minimum < 20 || maximum > 60 || minimum > maximum) {
      throw new Error(`Objective ${objective.id} has an invalid session length.`);
    }
    if (
      !objective.title.trim() ||
      !objective.hint.trim() ||
      !objective.objective.trim() ||
      !objective.goal.trim() ||
      !objective.reward.trim() ||
      objective.worksWellWith.length === 0
    ) {
      throw new Error(`Objective ${objective.id} is missing authored content.`);
    }
  }

  for (const modifier of MODIFIERS as readonly ModifierDefinition[]) {
    validateTags(
      {
        id: modifier.id,
        tags: [
          ...(modifier.compatibleTags ?? []),
          ...(modifier.excludedTags ?? []),
        ],
      },
      validTags,
    );
  }
}

function validateIds(items: readonly { id: string }[]) {
  const ids = new Set<string>();
  for (const { id } of items) {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id)) {
      throw new Error(`${id} needs a lowercase kebab-case ID.`);
    }
    if (ids.has(id)) throw new Error(`Duplicate deck ID: ${id}`);
    ids.add(id);
  }
}

function validateTags(
  item: { id: string; tags: readonly string[] },
  validTags: ReadonlySet<string>,
) {
  if (new Set(item.tags).size !== item.tags.length) {
    throw new Error(`${item.id} has duplicate tags.`);
  }
  for (const tag of item.tags) {
    if (!validTags.has(tag)) {
      throw new Error(`${item.id} uses an unknown tag: ${tag}`);
    }
  }
}

if (import.meta.env.DEV) validateDecks();
