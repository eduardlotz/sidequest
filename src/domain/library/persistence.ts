import {
  GAME_CAPABILITY_IDS,
  GAME_ICON_IDS,
  type GameCapabilityId,
  type GameColorId,
  type GameIconId,
} from "../../data/gameTypes";
import { CURATED_GAMES_BY_ID } from "../../data/games";
import { isGameGenreId } from "../../data/gameGenres";
import { GAME_COLOR_IDS } from "../../data/gameVisuals";
import { QUEST_CORES_BY_ID } from "../../data/quests";
import {
  type CustomGameInput,
  type PersistedLibraryState,
} from "./model";

export function isPersistedLibraryState(value: unknown): value is PersistedLibraryState {
  if (!isRecord(value) || typeof value.setupCompleted !== "boolean"
      || !Number.isSafeInteger(value.revision) || (value.revision as number) < 0
      || !Array.isArray(value.selectedCuratedGameIds)
      || value.selectedCuratedGameIds.some((id) => typeof id !== "string" || !CURATED_GAMES_BY_ID[id])
      || new Set(value.selectedCuratedGameIds).size !== value.selectedCuratedGameIds.length
      || !isRecord(value.curatedGamePreferences) || !Array.isArray(value.customGames)) return false;
  if (!Object.entries(value.curatedGamePreferences).every(([gameId, entry]) => {
    const game = CURATED_GAMES_BY_ID[gameId];
    return game && isRecord(entry) && entry.questMode === "curated-and-flexible"
      && Array.isArray(entry.installmentIds)
      && entry.installmentIds.every((id) => typeof id === "string"
        && game.installments.some((installment) => installment.id === id))
      && new Set(entry.installmentIds).size === entry.installmentIds.length;
  })) return false;
  if (new Set(value.customGames.map((game) => isRecord(game) ? game.id : null)).size !== value.customGames.length) return false;
  return value.customGames.every((game) => {
    if (!isRecord(game) || typeof game.id !== "string" || !game.id
        || typeof game.name !== "string" || !game.name.trim() || game.name !== game.name.trim()
        || game.name.length > 80 || !isGameIconId(game.iconId) || !isGameColorId(game.colorId)
        || !Array.isArray(game.capabilityIds) || !game.capabilityIds.length
        || !game.capabilityIds.every((id) => typeof id === "string" && isGameCapabilityId(id))
        || !Array.isArray(game.genreIds)
        || !game.genreIds.every((id) => typeof id === "string" && isGameGenreId(id))
        || !isRecord(game.questOverrides)) return false;
    return Object.entries(game.questOverrides).every(([id, enabled]) =>
      typeof enabled === "boolean" && Boolean(QUEST_CORES_BY_ID[id]?.customGameCompatibility));
  });
}

export function sanitizeCustomGameInput(
  value: unknown,
): CustomGameInput | null {
  if (!isRecord(value)) return null;
  const name = sanitizedGameName(value.name);
  if (!name) return null;
  const questOverrides: Record<string, boolean> = {};
  if (isRecord(value.questOverrides)) {
    for (const [questId, enabled] of Object.entries(value.questOverrides)) {
      if (
        typeof enabled !== "boolean" ||
        !Object.hasOwn(QUEST_CORES_BY_ID, questId)
      )
        continue;
      const quest = QUEST_CORES_BY_ID[questId];
      if (!quest.gameBindable || !quest.customGameCompatibility) continue;
      questOverrides[questId] = enabled;
    }
  }
  return {
    name,
    iconId: isGameIconId(value.iconId) ? value.iconId : "adventure",
    colorId: isGameColorId(value.colorId) ? value.colorId : "explore",
    capabilityIds: uniqueStrings(value.capabilityIds).filter(
      isGameCapabilityId,
    ),
    genreIds: uniqueStrings(value.genreIds).filter(isGameGenreId),
    questOverrides,
  };
}

export function sanitizedGameName(value: unknown) {
  return typeof value === "string" ? value.trim().slice(0, 80) : "";
}

function uniqueStrings(value: unknown): string[] {
  return Array.from(
    new Set(
      Array.isArray(value)
        ? value.filter((entry): entry is string => typeof entry === "string")
        : [],
    ),
  );
}

function isGameCapabilityId(value: string): value is GameCapabilityId {
  return (GAME_CAPABILITY_IDS as readonly string[]).includes(value);
}

function isGameIconId(value: unknown): value is GameIconId {
  return (
    typeof value === "string" &&
    (GAME_ICON_IDS as readonly string[]).includes(value)
  );
}

function isGameColorId(value: unknown): value is GameColorId {
  return (
    typeof value === "string" &&
    (GAME_COLOR_IDS as readonly string[]).includes(value)
  );
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
