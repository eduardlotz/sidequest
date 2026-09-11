import type { GameCapabilityId } from "./gameTypes";
import type { GameGenreId } from "./gameGenres";

export type CustomGameCompatibility = {
  capabilityIds: readonly GameCapabilityId[];
  match?: "all" | "any";
  genreIds?: readonly GameGenreId[];
};

export function matchesGameCapabilities(
  capabilities: ReadonlySet<GameCapabilityId>,
  compatibility?: CustomGameCompatibility,
) {
  if (!compatibility || compatibility.capabilityIds.length === 0) return false;
  return compatibility.match === "any"
    ? compatibility.capabilityIds.some((id) => capabilities.has(id))
    : compatibility.capabilityIds.every((id) => capabilities.has(id));
}

export function matchesCustomGame(
  capabilities: ReadonlySet<GameCapabilityId>,
  genres: ReadonlySet<GameGenreId>,
  compatibility?: CustomGameCompatibility,
) {
  if (!matchesGameCapabilities(capabilities, compatibility)) return false;
  return !compatibility?.genreIds?.length ||
    compatibility.genreIds.some((id) => genres.has(id));
}
