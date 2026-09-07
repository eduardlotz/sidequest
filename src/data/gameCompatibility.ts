import { COMBAT_CAPABILITY_IDS, type GameCapabilityId } from "./gameTypes";

export function matchesGameCapabilities(
  capabilities: ReadonlySet<GameCapabilityId>,
  compatibility?: {
    capabilityIds: readonly GameCapabilityId[];
    match?: "all" | "any";
  },
) {
  const expanded = new Set(capabilities);
  if (COMBAT_CAPABILITY_IDS.some((id) => capabilities.has(id)))
    expanded.add("combat");
  if (!compatibility) return false;
  return compatibility.match === "any"
    ? compatibility.capabilityIds.some((id) => expanded.has(id))
    : compatibility.capabilityIds.every((id) => expanded.has(id));
}
