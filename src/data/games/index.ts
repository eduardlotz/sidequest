import { CURATED_GAMES } from "./catalog";

export { CURATED_GAMES } from "./catalog";
export type {
  CuratedGameDefinition,
  GameCapabilityId,
  GameColorId,
  GameIconId,
  GameReference,
  GameSource,
} from "../gameTypes";
export {
  GAME_CAPABILITY_IDS,
  GAME_ICON_IDS,
} from "../gameTypes";

export const CURATED_GAMES_BY_ID = Object.fromEntries(
  CURATED_GAMES.map((game) => [game.id, game]),
) as Record<string, (typeof CURATED_GAMES)[number]>;
