import { MOOD_IDS, type MoodId, type MoodQuestDefinition } from "../questTypes";
import { CHALLENGE_QUESTS } from "./challenge";
import { CONNECT_QUESTS } from "./connect";
import { CREATE_QUESTS } from "./create";
import { CURIOUS_QUESTS } from "./curious";
import { EXPLORE_QUESTS } from "./explore";
import { FOCUSED_QUESTS } from "./focused";
import { LOW_ENERGY_QUESTS } from "./low-energy";
import { NOSTALGIC_QUESTS } from "./nostalgic";
import { OVERWHELMED_QUESTS } from "./overwhelmed";
import { PROGRESS_QUESTS } from "./progress";
import { RELAX_QUESTS } from "./relax";
import { RESTLESS_QUESTS } from "./restless";

export type {
  MoodId,
  MoodQuestDefinition as QuestDefinition,
} from "../questTypes";

const MOOD_DECKS = [
  RELAX_QUESTS,
  EXPLORE_QUESTS,
  PROGRESS_QUESTS,
  CREATE_QUESTS,
  CHALLENGE_QUESTS,
  CONNECT_QUESTS,
  NOSTALGIC_QUESTS,
  OVERWHELMED_QUESTS,
  RESTLESS_QUESTS,
  FOCUSED_QUESTS,
  CURIOUS_QUESTS,
  LOW_ENERGY_QUESTS,
] as const;

export const QUESTS: readonly MoodQuestDefinition[] = MOOD_DECKS.flat();

export const QUESTS_BY_ID = Object.fromEntries(
  QUESTS.map((quest) => [quest.id, quest]),
) as Record<string, MoodQuestDefinition>;

export const QUESTS_BY_MOOD = MOOD_IDS.reduce(
  (decks, moodId) => {
    decks[moodId] = QUESTS.filter((quest) => quest.moodId === moodId);
    return decks;
  },
  {} as Record<MoodId, readonly MoodQuestDefinition[]>,
);

export function questsForMood(
  moodId: MoodId,
): readonly MoodQuestDefinition[] {
  return QUESTS_BY_MOOD[moodId];
}
