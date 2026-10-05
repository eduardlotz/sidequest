import { flexibleGameContexts } from "../../data/games/questCompatibility";
import { CURATED_GAMES, CURATED_GAMES_BY_ID } from "../../data/games";
import { QUEST_CORES, QUEST_CORES_BY_ID } from "../../data/quests";
import type { GameCapabilityId } from "../../data/gameTypes";
import { matchesCustomGame } from "../../data/gameCompatibility";
import {
  DEFAULT_CURATED_PREFERENCES,
  type CustomGame,
  type LibraryGame,
  type LibraryState,
} from "./model";

export const CUSTOM_GAME_QUESTS = QUEST_CORES.filter(
  (quest) => !quest.curated && quest.gameBindable
    && (quest.customGameCompatibility || quest.customGameOverrideOnly),
);

export const AUTOMATIC_CUSTOM_GAME_QUESTS = CUSTOM_GAME_QUESTS.filter(
  (quest) => Boolean(quest.customGameCompatibility),
);

export function curatedGameQuestIds(
  state: Pick<LibraryState, "curatedGamePreferences">,
  gameId: string,
): string[] {
  const game = CURATED_GAMES_BY_ID[gameId];
  if (!game) return [];
  const preferences =
    state.curatedGamePreferences[gameId] ?? DEFAULT_CURATED_PREFERENCES;
  // Dedicated series quests wait for an explicit installment, while the
  // flexible catalogue remains available for every selected game.
  const canUseDedicated =
    !game.installments.length || preferences.installmentIds.length > 0;
  const dedicated = canUseDedicated
    ? game.exclusiveQuestIds.filter((id) => {
        const curated = QUEST_CORES_BY_ID[id]?.curated;
        return (
          curated?.gameId === gameId &&
          (!curated.installmentIds.length ||
            curated.installmentIds.some((id) =>
              preferences.installmentIds.includes(id),
            ))
        );
      })
    : [];
  const flexible = game.compatibleQuestIds.filter(id => QUEST_CORES_BY_ID[id] && flexibleGameContexts(gameId, id, preferences.installmentIds).length > 0);
  return Array.from(new Set([...dedicated, ...flexible]));
}

export function libraryGamesFromState(state: Pick<LibraryState, "selectedCuratedGameIds" | "curatedGamePreferences" | "customGames">): LibraryGame[] {
  const curatedGames = state.selectedCuratedGameIds.flatMap((gameId) => {
    const game = CURATED_GAMES_BY_ID[gameId];
    return game
      ? [
          {
            id: game.id,
            name: game.name,
            source: "curated" as const,
            iconId: game.iconId,
            colorId: game.colorId,
            installmentIds: state.curatedGamePreferences[gameId]?.installmentIds ?? [],
            questIds: curatedGameQuestIds(state, gameId),
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
  const genres = new Set(game.genreIds);
  return CUSTOM_GAME_QUESTS.filter((quest) => {
    const override = game.questOverrides[quest.id];
    if (override !== undefined) return override;
    return matchesCustomGame(capabilities, genres, quest.customGameCompatibility);
  }).map((quest) => quest.id);
}

export function hasLibraryGames(state: LibraryState) {
  return (
    state.selectedCuratedGameIds.some((id) =>
      Boolean(CURATED_GAMES_BY_ID[id]),
    ) || state.customGames.length > 0
  );
}

export function hasCustomGameActivities(game: Pick<CustomGame, "capabilityIds" | "questOverrides">): boolean {
  return game.capabilityIds.length > 0 || CUSTOM_GAME_QUESTS.some(quest => game.questOverrides[quest.id] === true);
}

export function allCuratedGamesSelected(state: LibraryState) {
  return CURATED_GAMES.every((game) =>
    state.selectedCuratedGameIds.includes(game.id),
  );
}
