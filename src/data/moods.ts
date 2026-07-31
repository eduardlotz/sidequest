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
  {
    id: "nostalgic",
    title: "Nostalgic",
    subtitle: "Something worth returning to",
  },
  {
    id: "overwhelmed",
    title: "Overwhelmed",
    subtitle: "Make the choice smaller",
  },
  { id: "restless", title: "Restless", subtitle: "Use the energy" },
  { id: "focused", title: "Focused", subtitle: "Stay with one thing" },
  {
    id: "curious",
    title: "Curious",
    subtitle: "Follow the strange pull",
  },
  {
    id: "low-energy",
    title: "Low Energy",
    subtitle: "Meet yourself where you are",
  },
] as const satisfies readonly MoodDefinition[];

export const MOODS_BY_ID = Object.fromEntries(
  MOODS.map((mood) => [mood.id, mood]),
) as Record<MoodId, MoodDefinition>;

export type { MoodDefinition, MoodId } from "./questTypes";
