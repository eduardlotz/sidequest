import { CURATED_GAMES, CURATED_GAMES_BY_ID } from "../../data/games";
import { QUEST_CORES } from "../../data/quests";
import type { GameCapabilityId } from "../../data/gameTypes";
import type {
  CustomGame,
  LibraryGame,
  LibraryState,
} from "./model";

export function libraryGamesFromState(state: LibraryState): LibraryGame[] {
  const curatedGames = state.selectedCuratedGameIds.flatMap((gameId) => {
    const game = CURATED_GAMES_BY_ID[gameId];
    return game
      ? [
          {
            id: game.id,
            name: game.name,
            source: "curated" as const,
            questIds: Array.from(
              new Set([...game.compatibleQuestIds, ...game.exclusiveQuestIds]),
            ),
          },
        ]
      : [];
  });
  const customGames = state.customGames.map((game) => ({
    id: game.id,
    name: game.name,
    source: "custom" as const,
    iconId: game.iconId,
    colorId: game.colorId,
    questIds: customGameQuestIds(game),
  }));
  return [...curatedGames, ...customGames];
}

export function customGameQuestIds(game: CustomGame): string[] {
  const capabilities = new Set<GameCapabilityId>(game.capabilityIds);
  return QUEST_CORES.filter((quest) => {
    const override = game.questOverrides[quest.id];
    if (override !== undefined) return override && quest.gameBindable;
    if (!quest.gameBindable || !quest.customGameCompatibility) return false;
    const { capabilityIds, match } = quest.customGameCompatibility;
    return match === "any"
      ? capabilityIds.some((capability) => capabilities.has(capability))
      : capabilityIds.every((capability) => capabilities.has(capability));
  }).map((quest) => quest.id);
}

export function hasLibraryGames(state: LibraryState) {
  return (
    state.selectedCuratedGameIds.some((id) => Boolean(CURATED_GAMES_BY_ID[id])) ||
    state.customGames.length > 0
  );
}

export function allCuratedGamesSelected(state: LibraryState) {
  return CURATED_GAMES.every((game) =>
    state.selectedCuratedGameIds.includes(game.id),
  );
}
