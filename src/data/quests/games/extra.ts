import { worldBatches } from "./extra-worlds";
import { seriesBatches } from "./extra-series";
import { actionBatches } from "./extra-action";
import { sportBatches } from "./extra-sports";
import type { AuthoredQuestDefinition } from "../../questTypes";
import type { QuestPoolTraits } from "../../questPoolTraits";

const batches = { ...worldBatches, ...seriesBatches, ...actionBatches, ...sportBatches };

export const extraGameQuestsByGame = Object.fromEntries(
  Object.entries(batches).map(([gameId, value]) => [gameId, value.quests]),
) as Record<string, AuthoredQuestDefinition[]>;

export const EXTRA_QUEST_POOL_TRAITS = Object.assign(
  {}, ...Object.values(batches).map((value) => value.traits),
) as Record<string, QuestPoolTraits>;
