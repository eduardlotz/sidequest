import type { MoodDefinition, MoodId } from "./questTypes";

export const MOODS = [
  {
    id: "relax",
    title: "Relax",
    subtitle: "I want to unwind with something familiar and gentle",
  },
  {
    id: "explore",
    title: "Explore",
    subtitle: "I want a game that can still surprise me",
  },
  {
    id: "progress",
    title: "Progress",
    subtitle: "I want to move a game forward that I left unfinished",
  },
  {
    id: "create",
    title: "Create",
    subtitle: "I want to make something that feels like mine",
  },
  {
    id: "challenge",
    title: "Challenge",
    subtitle: "I want a game to push back and test me",
  },
  {
    id: "connect",
    title: "Connect",
    subtitle: "I want to feel connected to other people while playing",
  },
  {
    id: "nostalgic",
    title: "Nostalgic",
    subtitle: "I want to revisit a game tied to a good memory",
  },
  {
    id: "overwhelmed",
    title: "Overwhelmed",
    subtitle: "I want to play but cannot handle choosing right now",
  },
  {
    id: "restless",
    title: "Restless",
    subtitle: "I have too much energy and need to move",
  },
  {
    id: "focused",
    title: "Focused",
    subtitle: "I want one clear goal I can sink into",
  },
  {
    id: "curious",
    title: "Curious",
    subtitle: "I want to try something unfamiliar and understand it",
  },
  {
    id: "low-energy",
    title: "Low Energy",
    subtitle: "I want to play without much attention or effort",
  },
] as const satisfies readonly MoodDefinition[];

export const MOODS_BY_ID = Object.fromEntries(
  MOODS.map((mood) => [mood.id, mood]),
) as Record<MoodId, MoodDefinition>;

export type { MoodDefinition, MoodId } from "./questTypes";
