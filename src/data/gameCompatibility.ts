import type { GameCapabilityId } from "./gameTypes";

export function matchesGameCapabilities(
  capabilities: ReadonlySet<GameCapabilityId>,
  compatibility?: {
    capabilityIds: readonly GameCapabilityId[];
    match?: "all" | "any";
  },
) {
  const expanded = new Set(capabilities);
  if (["pistols", "rifles", "bows", "melee-weapons", "fist-fights"].some(id => capabilities.has(id as GameCapabilityId))) expanded.add("combat");
  if (!compatibility) return false;
  return compatibility.match === "any"
    ? compatibility.capabilityIds.some((id) => expanded.has(id))
    : compatibility.capabilityIds.every((id) => expanded.has(id));
}
