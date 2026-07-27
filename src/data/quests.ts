import { ACTION_QUESTS } from "./questCatalog/action";
import { BUILDING_QUESTS } from "./questCatalog/building";
import { PLATFORMER_QUESTS } from "./questCatalog/platformer";
import { PUZZLE_QUESTS } from "./questCatalog/puzzle";
import { ROGUELIKE_QUESTS } from "./questCatalog/roguelike";
import { RPG_QUESTS } from "./questCatalog/rpg";
import { SHOOTER_QUESTS } from "./questCatalog/shooter";
import { SIMULATION_QUESTS } from "./questCatalog/simulation";
import { SPORTS_QUESTS } from "./questCatalog/sports";
import { SURVIVAL_QUESTS } from "./questCatalog/survival";
import {
  QUEST_ARCHETYPES,
  QUEST_GENRES,
  type QuestGenre,
} from "./questTaxonomy";
import type { QuestDefinition } from "./questTypes";

export type { QuestDefinition } from "./questTypes";

export const QUESTS = [
  ...RPG_QUESTS,
  ...ROGUELIKE_QUESTS,
  ...SHOOTER_QUESTS,
  ...SPORTS_QUESTS,
  ...SURVIVAL_QUESTS,
  ...BUILDING_QUESTS,
  ...SIMULATION_QUESTS,
  ...ACTION_QUESTS,
  ...PLATFORMER_QUESTS,
  ...PUZZLE_QUESTS,
] as const satisfies readonly QuestDefinition[];

export const QUESTS_BY_ID = Object.fromEntries(
  QUESTS.map((quest) => [quest.id, quest]),
) as Record<string, QuestDefinition>;

function validateCatalog() {
  if (QUESTS.length !== 300) {
    throw new Error(`Expected 300 built-in quests, received ${QUESTS.length}.`);
  }

  const ids = new Set<string>();
  const titles = new Set<string>();
  const objectives = new Set<string>();
  const genreCounts = new Map<QuestGenre, number>();

  for (const quest of QUESTS) {
    const normalizedTitle = normalizeAuthoredText(quest.title);
    const normalizedObjective = normalizeAuthoredText(quest.objective);

    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(quest.id)) {
      throw new Error(`Quest ${quest.id} needs a lowercase kebab-case ID.`);
    }
    if (ids.has(quest.id)) throw new Error(`Duplicate quest ID: ${quest.id}`);
    if (titles.has(normalizedTitle)) {
      throw new Error(`Duplicate quest title: ${quest.title}`);
    }
    if (objectives.has(normalizedObjective)) {
      throw new Error(`Duplicate quest objective: ${quest.id}`);
    }

    ids.add(quest.id);
    titles.add(normalizedTitle);
    objectives.add(normalizedObjective);
    genreCounts.set(
      quest.primaryGenre,
      (genreCounts.get(quest.primaryGenre) ?? 0) + 1,
    );

    if (!quest.title.trim() || !quest.objective.trim()) {
      throw new Error(`Quest ${quest.id} needs a title and objective.`);
    }
    if (
      quest.requirements.length < 1 ||
      quest.requirements.length > 4 ||
      quest.requirements.some(
        (requirement) => !requirement.trim() || requirement !== requirement.trim(),
      ) ||
      new Set(quest.requirements).size !== quest.requirements.length
    ) {
      throw new Error(`Quest ${quest.id} has invalid requirements.`);
    }
    if (
      new Set(quest.compatibleGenres).size !== quest.compatibleGenres.length ||
      (quest.compatibleGenres as readonly QuestGenre[]).includes(
        quest.primaryGenre,
      )
    ) {
      throw new Error(`Quest ${quest.id} has invalid compatible genres.`);
    }
    if (new Set(quest.settings).size !== quest.settings.length) {
      throw new Error(`Quest ${quest.id} has duplicate settings.`);
    }
    if (!QUEST_ARCHETYPES.includes(quest.archetype)) {
      throw new Error(`Quest ${quest.id} has an invalid archetype.`);
    }
  }

  for (const genre of QUEST_GENRES) {
    if (genreCounts.get(genre) !== 30) {
      throw new Error(`Expected exactly 30 ${genre} quests.`);
    }

    const genreQuests = QUESTS.filter(
      (quest) => quest.primaryGenre === genre,
    );
    for (const archetype of QUEST_ARCHETYPES) {
      const count = genreQuests.filter(
        (quest) => quest.archetype === archetype,
      ).length;
      if (count !== 6) {
        throw new Error(
          `Expected exactly 6 ${genre}/${archetype} quests, received ${count}.`,
        );
      }
    }

    const onlineCount = genreQuests.filter(
      (quest) => quest.requiresOnline,
    ).length;
    if (onlineCount < 4 || onlineCount > 6) {
      throw new Error(
        `Expected 4–6 online ${genre} quests, received ${onlineCount}.`,
      );
    }
  }
}

function normalizeAuthoredText(value: string) {
  return value.trim().normalize("NFKC").toLocaleLowerCase();
}

if (import.meta.env.DEV) validateCatalog();
