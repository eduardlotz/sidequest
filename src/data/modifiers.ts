import type { ModifierDefinition } from "./deckTypes";

export const MODIFIERS = [
  {
    id: "minimalist",
    title: "Minimalist",
    instruction: "Use only basic equipment or the simplest tools available.",
  },
  {
    id: "pacifist",
    title: "Pacifist",
    instruction: "Avoid unnecessary combat and choose peaceful solutions.",
    excludedTags: ["combat", "competition"],
  },
  {
    id: "explorer",
    title: "Explorer",
    instruction: "Do not use fast travel.",
    compatibleTags: ["exploration", "discovery"],
  },
  {
    id: "survivor",
    title: "Survivor",
    instruction: "Heal only when it is absolutely necessary.",
    compatibleTags: ["challenge", "combat", "exploration"],
  },
  {
    id: "fashion",
    title: "Fashion",
    instruction: "Wear the outfit you like most, even if it is not optimal.",
    compatibleTags: ["customization", "creativity", "atmosphere"],
  },
  {
    id: "new-toys",
    title: "New Toys",
    instruction: "Use a weapon, tool, or ability you have never really tried.",
    compatibleTags: ["experimentation", "mastery", "combat"],
  },
  {
    id: "hardcore",
    title: "Hardcore",
    instruction: "Increase the difficulty for this session.",
    compatibleTags: ["challenge", "mastery", "competition"],
  },
  {
    id: "roleplay",
    title: "Roleplay",
    instruction: "Make every choice as your character would.",
    compatibleTags: ["narrative", "atmosphere", "exploration"],
  },
  {
    id: "minimal-hud",
    title: "Minimal HUD",
    instruction: "Disable as much of the interface as the game allows.",
    compatibleTags: ["exploration", "discovery", "challenge", "atmosphere"],
  },
  {
    id: "night-shift",
    title: "Night Shift",
    instruction: "Complete the objective at night if the game makes that possible.",
  },
] as const satisfies readonly ModifierDefinition[];

export const MODIFIERS_BY_ID = Object.fromEntries(
  MODIFIERS.map((modifier) => [modifier.id, modifier]),
) as Record<string, ModifierDefinition>;
