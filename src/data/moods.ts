import type { MoodDefinition, MoodId } from "./questTypes";

export const MOODS = [
  { id: "relax", title: "Relax", subtitle: "Familiar, gentle play" },
  { id: "explore", title: "Explore", subtitle: "A new world or way to play" },
  {
    id: "progress",
    title: "Progress",
    subtitle: "Move an unfinished game forward",
  },
  { id: "create", title: "Create", subtitle: "Build, customize, or compose" },
  { id: "challenge", title: "Challenge", subtitle: "Test one skill" },
  { id: "connect", title: "Connect", subtitle: "Play with or around others" },
  {
    id: "nostalgic",
    title: "Nostalgic",
    subtitle: "Return to an old favorite",
  },
  {
    id: "overwhelmed",
    title: "Overwhelmed",
    subtitle: "Let one rule make the choice",
  },
  { id: "restless", title: "Restless", subtitle: "Put the energy into motion" },
  { id: "focused", title: "Focused", subtitle: "Stay with one clear goal" },
  {
    id: "curious",
    title: "Curious",
    subtitle: "Try an unfamiliar idea",
  },
  {
    id: "low-energy",
    title: "Low Energy",
    subtitle: "Easy to start, easy to stop",
  },
] as const satisfies readonly MoodDefinition[];

export const MOODS_BY_ID = Object.fromEntries(
  MOODS.map((mood) => [mood.id, mood]),
) as Record<MoodId, MoodDefinition>;

export type { MoodDefinition, MoodId } from "./questTypes";
