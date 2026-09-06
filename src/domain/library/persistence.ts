import {
  GAME_CAPABILITY_IDS,
  GAME_ICON_IDS,
  type GameCapabilityId,
  type GameColorId,
  type GameIconId,
} from "../../data/gameTypes";
import { CURATED_GAMES_BY_ID } from "../../data/games";
import { GAME_COLOR_IDS } from "../../data/gameVisuals";
import { QUEST_CORES_BY_ID } from "../../data/quests";
import {
  DEFAULT_LIBRARY_STATE,
  LIBRARY_STORE_VERSION,
  type CustomGame,
  type LibraryState,
  type PersistedLibraryState,
  type CuratedGamePreferences,
} from "./model";

export function migratePersistedLibraryState(
  persistedState: unknown,
  version: number,
): PersistedLibraryState {
  return version === LIBRARY_STORE_VERSION
    ? sanitizePersistedLibraryState(persistedState)
    : { ...DEFAULT_LIBRARY_STATE };
}

export function sanitizePersistedLibraryState(
  value: unknown,
): PersistedLibraryState {
  if (!isRecord(value)) return { ...DEFAULT_LIBRARY_STATE };
  const selectedCuratedGameIds = uniqueStrings(value.selectedCuratedGameIds)
    .filter((id) => Boolean(CURATED_GAMES_BY_ID[id]));
  const customGames = Array.isArray(value.customGames)
    ? value.customGames.flatMap((entry) => {
        const game = customGameFromUnknown(entry);
        return game ? [game] : [];
      })
    : [];

  const curatedGamePreferences: Record<string, CuratedGamePreferences> = {};
  if (isRecord(value.curatedGamePreferences)) {
    for (const [gameId, stored] of Object.entries(value.curatedGamePreferences)) {
      const game = CURATED_GAMES_BY_ID[gameId];
      if (!game || !isRecord(stored)) continue;
      curatedGamePreferences[gameId] = {
        questMode: stored.questMode === "curated-and-flexible" ? "curated-and-flexible" : "curated-only",
        installmentIds: uniqueStrings(stored.installmentIds).filter((id) =>
          game.installments.some((entry) => entry.id === id)),
      };
    }
  }

  return {
    setupCompleted: value.setupCompleted === true,
    selectedCuratedGameIds,
    curatedGamePreferences,
    customGames: uniqueCustomGames(customGames),
    revision: safeNonNegativeInteger(value.revision),
  };
}

function customGameFromUnknown(value: unknown): CustomGame | null {
  if (!isRecord(value) || typeof value.id !== "string" || !value.id) return null;
  const name = sanitizedGameName(value.name);
  if (!name) return null;
  const questOverrides: Record<string, boolean> = {};
  if (isRecord(value.questOverrides)) {
    for (const [questId, enabled] of Object.entries(value.questOverrides)) {
      if (typeof enabled !== "boolean" || !QUEST_CORES_BY_ID[questId]) continue;
      questOverrides[questId] = enabled;
    }
  }
  return {
    id: value.id,
    name,
    iconId: isGameIconId(value.iconId) ? value.iconId : "adventure",
    colorId: isGameColorId(value.colorId) ? value.colorId : "explore",
    capabilityIds: uniqueStrings(value.capabilityIds).filter(
      isGameCapabilityId,
    ),
    questOverrides,
  };
}

export function sanitizedGameName(value: unknown) {
  return typeof value === "string" ? value.trim().slice(0, 80) : "";
}

function uniqueCustomGames(games: CustomGame[]) {
  const ids = new Set<string>();
  return games.filter((game) => {
    if (ids.has(game.id)) return false;
    ids.add(game.id);
    return true;
  });
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

function safeNonNegativeInteger(value: unknown) {
  return typeof value === "number" && Number.isFinite(value)
    ? Math.max(0, Math.floor(value))
    : 0;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}
