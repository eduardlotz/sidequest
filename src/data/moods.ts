import type { MoodDefinition, MoodId } from "./questTypes";

export const MOODS = [
  { id: "relax", title: "Relax", subtitle: "Something that knows you" },
  { id: "explore", title: "Explore", subtitle: "Somewhere else" },
  {
    id: "progress",
    title: "Progress",
    subtitle: "Make owning it count",
  },
  { id: "create", title: "Create", subtitle: "Build, design, or experiment" },
  { id: "challenge", title: "Challenge", subtitle: "Pick your arena" },
  { id: "connect", title: "Connect", subtitle: "Play around people" },
] as const satisfies readonly MoodDefinition[];

export const MOODS_BY_ID = Object.fromEntries(
  MOODS.map((mood) => [mood.id, mood]),
) as Record<MoodId, MoodDefinition>;

export type { MoodDefinition, MoodId } from "./questTypes";
