import type { GameCapabilityId } from "./gameTypes";

export function matchesGameCapabilities(
  capabilities: ReadonlySet<GameCapabilityId>,
  compatibility?: {
    capabilityIds: readonly GameCapabilityId[];
    match?: "all" | "any";
  },
) {
  if (!compatibility) return false;
  return compatibility.match === "any"
    ? compatibility.capabilityIds.some((id) => capabilities.has(id))
    : compatibility.capabilityIds.every((id) => capabilities.has(id));
}
