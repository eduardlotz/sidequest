import type { GameCapabilityId } from "./gameTypes";
import type { GameGenreId } from "./gameGenres";

export type CustomGameCompatibility = {
  capabilityIds: readonly GameCapabilityId[];
  match?: "all" | "any";
  genreIds?: readonly GameGenreId[];
  requirement?: CapabilityRequirement;
};

export type CapabilityRequirement = GameCapabilityId
  | { all: readonly CapabilityRequirement[] }
  | { any: readonly CapabilityRequirement[] };

export function requirementUsesCapability(requirement: CapabilityRequirement, id: GameCapabilityId): boolean {
  return typeof requirement === "string" ? requirement === id
    : ("all" in requirement ? requirement.all : requirement.any)
      .some(child => requirementUsesCapability(child, id));
}

export function compatibilityUsesCapability(compatibility: CustomGameCompatibility, id: GameCapabilityId): boolean {
  return compatibility.requirement ? requirementUsesCapability(compatibility.requirement, id)
    : compatibility.capabilityIds.includes(id);
}

export function matchesRequirement(capabilities: ReadonlySet<GameCapabilityId>, requirement: CapabilityRequirement): boolean {
  if (typeof requirement === "string") return capabilities.has(requirement);
  if ("all" in requirement) return requirement.all.length > 0
    && requirement.all.every((child) => matchesRequirement(capabilities, child));
  return requirement.any.length > 0
    && requirement.any.some((child) => matchesRequirement(capabilities, child));
}

export function matchesGameCapabilities(
  capabilities: ReadonlySet<GameCapabilityId>,
  compatibility?: CustomGameCompatibility,
) {
  if (!compatibility) return false;
  if (compatibility.requirement) return matchesRequirement(capabilities, compatibility.requirement);
  if (compatibility.capabilityIds.length === 0) return false;
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

/** Remaining requirements retain their AND/OR structure, including nested alternatives. */
export function missingCapabilityRequirement(
  capabilities: ReadonlySet<GameCapabilityId>,
  requirement: CapabilityRequirement,
): CapabilityRequirement | undefined {
  if (matchesRequirement(capabilities, requirement)) return undefined;
  if (typeof requirement === "string") return requirement;
  const children = ("all" in requirement ? requirement.all : requirement.any)
    .flatMap(child => {
      const missing = missingCapabilityRequirement(capabilities, child);
      return missing === undefined ? [] : [missing];
    });
  if (children.length === 1) return children[0];
  return "all" in requirement ? { all: children } : { any: children };
}

export function compatibilityRequirement(compatibility: CustomGameCompatibility): CapabilityRequirement {
  return compatibility.requirement ?? (compatibility.match === "any"
    ? { any: compatibility.capabilityIds }
    : { all: compatibility.capabilityIds });
}
