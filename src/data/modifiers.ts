import type {
  ModifierDefinition,
  MoodQuestDefinition,
} from "./questTypes";

export const MODIFIERS = [
  {
    id: "modifier-one-track",
    title: "One Track",
    instruction:
      "Do not begin or switch to an unrelated tracked activity before this quest is complete.",
    bonusPoints: 50,
  },
  {
    id: "modifier-no-outside-help",
    title: "No Outside Help",
    instruction:
      "Use no walkthrough, build guide, solution, or external map during the quest.",
    bonusPoints: 60,
  },
  {
    id: "modifier-let-it-stand",
    title: "Let It Stand",
    instruction:
      "Once the game reveals an outcome, do not undo, reroll, or reload it.",
    bonusPoints: 80,
  },
  {
    id: "modifier-minimal-hud",
    title: "Minimal HUD",
    instruction:
      "Hide every optional HUD element the game lets you disable for the duration of the quest.",
    bonusPoints: 80,
    requiredTags: ["allow:minimal-hud"],
    exclusiveGroup: "navigation",
  },
  {
    id: "modifier-no-map",
    title: "No Map",
    instruction:
      "Navigate without opening the map or following a route overlay.",
    bonusPoints: 80,
    requiredTags: ["allow:no-map"],
    exclusiveGroup: "navigation",
  },
  {
    id: "modifier-no-fast-travel",
    title: "The Long Way",
    instruction:
      "Use no fast travel, teleport, or menu-based travel during the quest.",
    bonusPoints: 80,
    requiredTags: ["allow:no-fast-travel"],
    exclusiveGroup: "travel",
  },
  {
    id: "modifier-no-sprint",
    title: "Measured Pace",
    instruction:
      "Do not sprint, boost, or skip traversal unless the game requires it to proceed.",
    bonusPoints: 60,
    requiredTags: ["allow:no-sprint"],
    exclusiveGroup: "travel",
  },
  {
    id: "modifier-fixed-kit",
    title: "Fixed Kit",
    instruction:
      "Once the quest starts, do not change character, loadout, deck, vehicle, or equipped tools.",
    bonusPoints: 60,
    requiredTags: ["allow:fixed-kit"],
    exclusiveGroup: "loadout",
  },
  {
    id: "modifier-basic-tools",
    title: "Basic Tools",
    instruction:
      "Leave your strongest or rarest option unused and complete the quest with ordinary tools.",
    bonusPoints: 80,
    requiredTags: ["allow:basic-tools"],
    exclusiveGroup: "loadout",
  },
  {
    id: "modifier-no-healing",
    title: "No Recovery",
    instruction:
      "Use no optional healing or recovery item during the quest.",
    bonusPoints: 100,
    requiredTags: ["allow:no-healing"],
    exclusiveGroup: "survival",
  },
  {
    id: "modifier-save-one-resource",
    title: "Keep One in Reserve",
    instruction:
      "Choose one limited resource before starting and finish with at least one use remaining.",
    bonusPoints: 60,
    requiredTags: ["allow:save-resource"],
    exclusiveGroup: "survival",
  },
  {
    id: "modifier-clean-exit",
    title: "Clean Exit",
    instruction:
      "After the main goal resolves, reach a safe or neutral state without starting another fight or objective.",
    bonusPoints: 60,
    requiredTags: ["allow:clean-exit"],
    exclusiveGroup: "finish",
  },
  {
    id: "modifier-found-tool",
    title: "Use What You Find",
    instruction:
      "Use at least one tool, item, resource, or opportunity acquired after the quest begins.",
    bonusPoints: 60,
    requiredTags: ["allow:found-tool"],
    exclusiveGroup: "inventory",
  },
  {
    id: "modifier-help-first",
    title: "Help First",
    instruction:
      "Complete one assist, handoff, rescue, or resource share before pursuing your own contribution.",
    bonusPoints: 60,
    requiredTags: ["allow:help-first"],
    exclusiveGroup: "team",
  },
  {
    id: "modifier-role-lock",
    title: "Hold Your Role",
    instruction:
      "Choose one team responsibility and keep it until the shared result is recorded.",
    bonusPoints: 60,
    requiredTags: ["allow:role-lock"],
    exclusiveGroup: "team",
  },
  {
    id: "modifier-side-path",
    title: "One More Corner",
    instruction:
      "Complete one optional detour beside the quest route before reaching the main finish.",
    bonusPoints: 60,
    requiredTags: ["allow:side-path"],
    exclusiveGroup: "route",
  },
] as const satisfies readonly ModifierDefinition[];

export const MODIFIERS_BY_ID = Object.fromEntries(
  MODIFIERS.map((modifier) => [modifier.id, modifier]),
) as Record<string, ModifierDefinition>;

export function compatibleModifiersForQuest(
  quest: MoodQuestDefinition,
): readonly ModifierDefinition[] {
  const questTags = new Set(quest.compatibilityTags);

  return (MODIFIERS as readonly ModifierDefinition[]).filter(
    (modifier) =>
      (modifier.requiredTags?.every((tag) => questTags.has(tag)) ?? true) &&
      (modifier.excludedTags?.every((tag) => !questTags.has(tag)) ?? true),
  );
}

export function drawRandomModifiers(
  quest: MoodQuestDefinition,
  random: () => number = Math.random,
): ModifierDefinition[] {
  const candidates = [...compatibleModifiersForQuest(quest)];
  const targetCount = 1 + randomIndex(3, random);
  const selected: ModifierDefinition[] = [];

  while (selected.length < targetCount && candidates.length > 0) {
    const [choice] = candidates.splice(randomIndex(candidates.length, random), 1);
    selected.push(choice);

    if (choice.exclusiveGroup) {
      for (let index = candidates.length - 1; index >= 0; index -= 1) {
        if (candidates[index].exclusiveGroup === choice.exclusiveGroup) {
          candidates.splice(index, 1);
        }
      }
    }
  }

  return selected;
}

function randomIndex(length: number, random: () => number): number {
  const value = random();

  if (!Number.isFinite(value) || value < 0 || value >= 1) {
    throw new RangeError("Random source must return a number from 0 up to 1.");
  }

  return Math.floor(value * length);
}

export type { ModifierDefinition } from "./questTypes";
