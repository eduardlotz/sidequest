import type { MoodDefinition } from "./deckTypes";

export const MOODS = [
  {
    id: "relax",
    displayName: "Relax",
    description: "Take your time and enjoy being in the game.",
    tags: ["relaxation", "atmosphere", "building", "collection"],
  },
  {
    id: "adventure",
    displayName: "Adventure",
    description: "Go somewhere new and follow your curiosity.",
    tags: ["exploration", "discovery", "narrative", "challenge"],
  },
  {
    id: "challenge",
    displayName: "Challenge",
    description: "Overcome something that asks for your full attention.",
    tags: ["challenge", "mastery", "combat", "progression"],
  },
  {
    id: "story",
    displayName: "Story",
    description: "Move a world, character, or relationship forward.",
    tags: ["narrative", "atmosphere", "discovery", "progression"],
  },
  {
    id: "strategy",
    displayName: "Strategy",
    description: "Think ahead and make a system work better.",
    tags: ["strategy", "optimization", "systems", "progression"],
  },
  {
    id: "creative",
    displayName: "Creative",
    description: "Build, shape, or express something that feels like yours.",
    tags: ["creativity", "building", "customization", "experimentation"],
  },
  {
    id: "competitive",
    displayName: "Competitive",
    description: "Test yourself, improve, and play to win.",
    tags: ["competition", "mastery", "challenge", "social"],
  },
  {
    id: "chaos",
    displayName: "Chaos",
    description: "Try the entertaining idea and see what happens.",
    tags: ["experimentation", "combat", "creativity", "challenge"],
  },
] as const satisfies readonly MoodDefinition[];

export const MOODS_BY_ID = Object.fromEntries(
  MOODS.map((mood) => [mood.id, mood]),
) as unknown as Record<(typeof MOODS)[number]["id"], MoodDefinition>;
