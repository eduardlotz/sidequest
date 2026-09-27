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
import {
  DEFAULT_CURATED_PREFERENCES,
  DEFAULT_LIBRARY_STATE,
  LIBRARY_STORE_VERSION,
  type CustomGameInput,
  type PersistedLibraryState,
} from "./model";

/**
 * Keep library choices through schema and catalogue changes. Retired curated
 * IDs and installments are filtered, while custom games and their overrides
 * are normalized field by field instead of resetting the entire library.
 */
export function migrateLibraryState(
  value: unknown,
  fromVersion = LIBRARY_STORE_VERSION,
): PersistedLibraryState {
  if (!isRecord(value)) return { ...DEFAULT_LIBRARY_STATE };
  const selectedCuratedGameIds = uniqueStrings(value.selectedCuratedGameIds)
    .filter((id) => Boolean(CURATED_GAMES_BY_ID[id]));
  const curatedGamePreferences: PersistedLibraryState["curatedGamePreferences"] = {};
  if (isRecord(value.curatedGamePreferences)) {
    for (const [id, saved] of Object.entries(value.curatedGamePreferences)) {
      const game = CURATED_GAMES_BY_ID[id];
      if (!game || !isRecord(saved)) continue;
      curatedGamePreferences[id] = {
        ...DEFAULT_CURATED_PREFERENCES,
        installmentIds: uniqueStrings(saved.installmentIds)
          .filter((installmentId) => game.installments.some((item) => item.id === installmentId)),
      };
    }
  }
  const customGames: PersistedLibraryState["customGames"] = [];
  const seenIds = new Set<string>();
  if (Array.isArray(value.customGames)) {
    for (const saved of value.customGames) {
      if (!isRecord(saved) || typeof saved.id !== "string" || !saved.id
          || seenIds.has(saved.id)) continue;
      const input = sanitizeCustomGameInput(saved);
      if (!input) continue;
      customGames.push({ id: saved.id, ...input });
      seenIds.add(saved.id);
    }
  }
  const revision = Number.isSafeInteger(value.revision) && (value.revision as number) >= 0
    ? value.revision as number : 0;
  return {
    setupCompleted: typeof value.setupCompleted === "boolean"
      ? value.setupCompleted : DEFAULT_LIBRARY_STATE.setupCompleted,
    selectedCuratedGameIds,
    curatedGamePreferences,
    customGames,
    revision: revision + (fromVersion === LIBRARY_STORE_VERSION ? 0 : 1),
  };
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
      // Unknown IDs remain saved for history/future catalogue merges; eligibility
      // only reads overrides for quests that currently exist.
      if (typeof enabled !== "boolean" || !questId) continue;
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
