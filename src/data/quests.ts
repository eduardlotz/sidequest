import {
  QUEST_ARCHETYPES,
  QUEST_GENRES,
  type QuestArchetype,
  type QuestGenre,
  type QuestSetting,
} from "./questTaxonomy";

export type QuestDefinition = {
  id: string;
  title: string;
  objective: string;
  primaryGenre: QuestGenre;
  compatibleGenres: readonly QuestGenre[];
  requirements: readonly string[];
  archetype: QuestArchetype;
  settings: readonly QuestSetting[];
  requiresOnline: boolean;
};

export const QUESTS = [
  {
    id: "a-thief-with-standards",
    title: "A Thief With Standards",
    objective:
      "Steal one valuable item from a guarded location, escape without harming anyone, and sell it somewhere else.",
    primaryGenre: "rpg",
    compatibleGenres: ["action"],
    requirements: ["theft", "stealth", "guarded locations", "merchants"],
    archetype: "performance",
    settings: [],
    requiresOnline: false,
  },
  {
    id: "the-oldest-promise",
    title: "The Oldest Promise",
    objective:
      "Return to the side quest you have ignored the longest and finish its next objective without using fast travel.",
    primaryGenre: "rpg",
    compatibleGenres: ["action"],
    requirements: ["quest log", "side quests", "open world", "fast travel"],
    archetype: "expedition",
    settings: [],
    requiresOnline: false,
  },
  {
    id: "forbidden-school",
    title: "The Forbidden School",
    objective:
      "Complete the next combat encounter using only the spell or ability category you have invested in the least.",
    primaryGenre: "rpg",
    compatibleGenres: ["roguelike"],
    requirements: [
      "magic",
      "ability categories",
      "character progression",
      "combat",
    ],
    archetype: "adaptation",
    settings: ["fantasy"],
    requiresOnline: false,
  },
  {
    id: "the-strangers-build",
    title: "The Stranger's Build",
    objective:
      "Take the first upgrade you would normally skip, then shape the rest of the run around it until you defeat an elite or boss.",
    primaryGenre: "roguelike",
    compatibleGenres: ["rpg"],
    requirements: ["run-based upgrades", "elite enemies or bosses"],
    archetype: "adaptation",
    settings: [],
    requiresOnline: false,
  },
  {
    id: "empty-pockets",
    title: "Empty Pockets",
    objective:
      "At the next shop, spend all your currency before leaving. Reach the following shop or boss using what you bought—no selling, rerolling, or replacing it.",
    primaryGenre: "roguelike",
    compatibleGenres: ["rpg"],
    requirements: [
      "shops",
      "currency",
      "run-based equipment or upgrades",
    ],
    archetype: "adaptation",
    settings: [],
    requiresOnline: false,
  },
  {
    id: "take-the-first-offer",
    title: "Take the First Offer",
    objective:
      "Reach the next boss without rerolling, skipping, or replacing any reward. Accept the first eligible option at every choice.",
    primaryGenre: "roguelike",
    compatibleGenres: [],
    requirements: ["run-based rewards", "reward choices", "bosses"],
    archetype: "performance",
    settings: [],
    requiresOnline: false,
  },
  {
    id: "borrowed-arsenal",
    title: "Borrowed Arsenal",
    objective:
      "After your first elimination, use only weapons dropped by defeated enemies until you defeat three more.",
    primaryGenre: "shooter",
    compatibleGenres: ["action"],
    requirements: ["combat", "dropped weapons", "interchangeable equipment"],
    archetype: "adaptation",
    settings: [],
    requiresOnline: false,
  },
  {
    id: "nobody-saw-you-leave",
    title: "Nobody Saw You Leave",
    objective:
      "Enter a guarded area, take its objective or most valuable item, and leave without triggering combat.",
    primaryGenre: "shooter",
    compatibleGenres: ["action", "rpg"],
    requirements: [
      "stealth",
      "guarded areas",
      "retrievable objective or item",
    ],
    archetype: "performance",
    settings: [],
    requiresOnline: false,
  },
  {
    id: "back-the-underdog",
    title: "Back the Underdog",
    objective:
      "After the opening minute, identify the teammate at the bottom of the scoreboard. Help them earn an elimination, score, or objective contribution—and win the round.",
    primaryGenre: "shooter",
    compatibleGenres: ["sports"],
    requirements: [
      "online team mode",
      "scoreboard",
      "assists or shared objectives",
    ],
    archetype: "support",
    settings: [],
    requiresOnline: true,
  },
  {
    id: "guardian-angel",
    title: "Guardian Angel",
    objective:
      "Choose one teammate at the start of a round. Keep them alive until the round ends and help them earn at least one elimination or objective contribution.",
    primaryGenre: "shooter",
    compatibleGenres: ["action"],
    requirements: [
      "team mode",
      "revives or healing",
      "eliminations or shared objectives",
    ],
    archetype: "support",
    settings: [],
    requiresOnline: true,
  },
  {
    id: "make-every-shot-count",
    title: "Make Every Shot Count",
    objective:
      "Complete the next combat encounter without reloading early. Empty every magazine before switching weapons or reloading, and finish the encounter alive.",
    primaryGenre: "shooter",
    compatibleGenres: ["action"],
    requirements: ["combat", "limited magazines", "manual reloading"],
    archetype: "performance",
    settings: [],
    requiresOnline: false,
  },
  {
    id: "keep-moving",
    title: "Keep Moving",
    objective:
      "Win the next combat encounter without remaining in the same cover position for more than ten seconds. Move to a new position after every elimination.",
    primaryGenre: "shooter",
    compatibleGenres: ["action"],
    requirements: ["combat", "cover or combat positions", "eliminations"],
    archetype: "adaptation",
    settings: [],
    requiresOnline: false,
  },
  {
    id: "change-the-playbook",
    title: "Change the Playbook",
    objective:
      "Finish a full match using a formation, team, or strategy you have never used before. Do not switch back during the match.",
    primaryGenre: "sports",
    compatibleGenres: [],
    requirements: [
      "selectable teams",
      "formations",
      "tactical strategies",
    ],
    archetype: "adaptation",
    settings: [],
    requiresOnline: false,
  },
  {
    id: "make-them-the-star",
    title: "Make Them the Star",
    objective:
      "Choose the lowest-rated player in your active lineup. Help them score or create a scoring play, then win or draw the match.",
    primaryGenre: "sports",
    compatibleGenres: [],
    requirements: ["team roster", "player ratings", "scoring or assists"],
    archetype: "support",
    settings: [],
    requiresOnline: false,
  },
  {
    id: "the-counterplan",
    title: "The Counterplan",
    objective:
      "After the first period or half, identify the opponent's most effective player. Change your tactics and finish the match without letting them score again.",
    primaryGenre: "sports",
    compatibleGenres: [],
    requirements: ["team sports", "match statistics", "tactical control"],
    archetype: "optimization",
    settings: [],
    requiresOnline: false,
  },
  {
    id: "night-supply-run",
    title: "Night Supply Run",
    objective:
      "Leave your safest shelter after dark, gather one resource you are short on, and return without using a vehicle.",
    primaryGenre: "survival",
    compatibleGenres: ["action"],
    requirements: ["shelter", "day/night cycle", "resource gathering"],
    archetype: "expedition",
    settings: [],
    requiresOnline: false,
  },
  {
    id: "pack-light",
    title: "Pack Light",
    objective:
      "Leave shelter carrying only one weapon and one healing item. Return with enough materials to craft one meaningful upgrade.",
    primaryGenre: "survival",
    compatibleGenres: [],
    requirements: ["inventory", "gathering", "crafting", "shelter"],
    archetype: "expedition",
    settings: [],
    requiresOnline: false,
  },
  {
    id: "the-backup-plan",
    title: "The Backup Plan",
    objective:
      "Travel beyond your usual safe area and create an emergency stash or shelter using only materials gathered during the trip. Return to your main shelter afterward.",
    primaryGenre: "survival",
    compatibleGenres: ["building"],
    requirements: [
      "open world",
      "gathering",
      "storage or shelter building",
    ],
    archetype: "expedition",
    settings: [],
    requiresOnline: false,
  },
  {
    id: "fix-the-bottleneck",
    title: "Fix the Bottleneck",
    objective:
      "Find the slowest step in one production chain and automate everything from raw input to storage. Once started, make no manual transfers.",
    primaryGenre: "building",
    compatibleGenres: ["simulation"],
    requirements: ["production chains", "automation", "storage"],
    archetype: "optimization",
    settings: [],
    requiresOnline: false,
  },
  {
    id: "no-new-land",
    title: "No New Land",
    objective:
      "Improve the output or wellbeing of one settlement without expanding its footprint or purchasing additional land.",
    primaryGenre: "building",
    compatibleGenres: ["simulation"],
    requirements: [
      "construction",
      "settlement management",
      "measurable output or wellbeing",
    ],
    archetype: "optimization",
    settings: [],
    requiresOnline: false,
  },
  {
    id: "double-without-moving",
    title: "Double Without Moving",
    objective:
      "Double the output of one production chain without moving or demolishing its existing structures. Use only upgrades and additions.",
    primaryGenre: "building",
    compatibleGenres: ["simulation"],
    requirements: ["production chains", "upgrades", "measurable output"],
    archetype: "optimization",
    settings: [],
    requiresOnline: false,
  },
  {
    id: "use-what-you-own",
    title: "Use What You Own",
    objective:
      "Complete one job or contract without buying, renting, crafting, or upgrading equipment.",
    primaryGenre: "simulation",
    compatibleGenres: [],
    requirements: ["jobs or contracts", "equipment economy"],
    archetype: "adaptation",
    settings: [],
    requiresOnline: false,
  },
  {
    id: "manual-override",
    title: "Manual Override",
    objective:
      "Complete one full job with an assist or automation feature you normally rely on disabled. Finish without damage or penalties.",
    primaryGenre: "simulation",
    compatibleGenres: ["sports"],
    requirements: [
      "jobs or events",
      "optional assists or automation",
      "penalties",
    ],
    archetype: "performance",
    settings: [],
    requiresOnline: false,
  },
  {
    id: "the-perfect-shift",
    title: "The Perfect Shift",
    objective:
      "Complete one full job while obeying every optional rule the game tracks. Finish without damage, fines, failed needs, or complaints.",
    primaryGenre: "simulation",
    compatibleGenres: [],
    requirements: ["jobs", "simulation rules", "tracked penalties"],
    archetype: "performance",
    settings: [],
    requiresOnline: false,
  },
  {
    id: "the-other-entrance",
    title: "The Other Entrance",
    objective:
      "Reach an objective through a route you have never used before, then leave the area by a different route.",
    primaryGenre: "action",
    compatibleGenres: ["rpg", "shooter"],
    requirements: ["open levels", "alternate routes", "defined objectives"],
    archetype: "expedition",
    settings: [],
    requiresOnline: false,
  },
  {
    id: "improvised-escape",
    title: "Improvised Escape",
    objective:
      "Trigger a high-alert pursuit and escape to safety without defeating any of the enemies chasing you.",
    primaryGenre: "action",
    compatibleGenres: ["shooter", "rpg"],
    requirements: [
      "alert or wanted system",
      "pursuit",
      "safe-state recovery",
    ],
    archetype: "performance",
    settings: [],
    requiresOnline: false,
  },
  {
    id: "environmental-advantage",
    title: "Environmental Advantage",
    objective:
      "Finish one combat encounter using only traps, hazards, vehicles, thrown objects, or other environmental tools for the final blows.",
    primaryGenre: "action",
    compatibleGenres: ["shooter", "rpg"],
    requirements: [
      "combat",
      "interactive environment",
      "environmental damage",
    ],
    archetype: "adaptation",
    settings: [],
    requiresOnline: false,
  },
  {
    id: "never-break-stride",
    title: "Never Break Stride",
    objective:
      "Reach the next major checkpoint without standing still for more than three seconds or returning to a previous platform.",
    primaryGenre: "platformer",
    compatibleGenres: ["action"],
    requirements: ["continuous movement", "checkpoints", "platforming"],
    archetype: "performance",
    settings: [],
    requiresOnline: false,
  },
  {
    id: "the-scenic-route",
    title: "The Scenic Route",
    objective:
      "Reach the next checkpoint after taking every visible optional path along the way. Do not use a guide.",
    primaryGenre: "platformer",
    compatibleGenres: ["action"],
    requirements: ["branching paths", "checkpoints", "optional routes"],
    archetype: "expedition",
    settings: [],
    requiresOnline: false,
  },
  {
    id: "one-clean-run",
    title: "One Clean Run",
    objective:
      "Collect one optional secret or collectible and reach the next checkpoint without dying or restarting.",
    primaryGenre: "platformer",
    compatibleGenres: ["action"],
    requirements: [
      "collectibles or secrets",
      "checkpoints",
      "failure or restart state",
    ],
    archetype: "performance",
    settings: [],
    requiresOnline: false,
  },
  {
    id: "no-second-chances",
    title: "No Second Chances",
    objective:
      "Solve one complete puzzle without using a hint, undo, or restart.",
    primaryGenre: "puzzle",
    compatibleGenres: [],
    requirements: ["discrete puzzles", "hint or undo systems"],
    archetype: "performance",
    settings: [],
    requiresOnline: false,
  },
  {
    id: "observe-first",
    title: "Observe First",
    objective:
      "Spend one uninterrupted minute studying the next puzzle before making an input. Then solve it with no hints and at most one restart.",
    primaryGenre: "puzzle",
    compatibleGenres: [],
    requirements: ["discrete puzzles", "restartable state"],
    archetype: "performance",
    settings: [],
    requiresOnline: false,
  },
  {
    id: "reverse-your-habit",
    title: "Reverse Your Habit",
    objective:
      "Begin the next puzzle with the tool, rule, or move you normally save for last. Complete it without undoing that first decision.",
    primaryGenre: "puzzle",
    compatibleGenres: [],
    requirements: ["multiple tools, rules, or opening moves"],
    archetype: "adaptation",
    settings: [],
    requiresOnline: false,
  },
] as const satisfies readonly QuestDefinition[];

export const QUESTS_BY_ID = Object.fromEntries(
  QUESTS.map((quest) => [quest.id, quest]),
) as Record<string, QuestDefinition>;

function validateCatalog() {
  if (QUESTS.length !== 33) {
    throw new Error(`Expected 33 built-in quests, received ${QUESTS.length}.`);
  }

  const ids = new Set<string>();
  const genreCounts = new Map<QuestGenre, number>();
  for (const quest of QUESTS) {
    if (ids.has(quest.id)) throw new Error(`Duplicate quest ID: ${quest.id}`);
    ids.add(quest.id);
    genreCounts.set(
      quest.primaryGenre,
      (genreCounts.get(quest.primaryGenre) ?? 0) + 1,
    );

    if (!quest.title.trim() || !quest.objective.trim()) {
      throw new Error(`Quest ${quest.id} needs a title and objective.`);
    }
    if (new Set(quest.requirements).size !== quest.requirements.length) {
      throw new Error(`Quest ${quest.id} has duplicate requirements.`);
    }
    if (!QUEST_ARCHETYPES.includes(quest.archetype)) {
      throw new Error(`Quest ${quest.id} has an invalid archetype.`);
    }
  }

  for (const genre of QUEST_GENRES) {
    const expectedCount = genre === "shooter" ? 6 : 3;
    if (genreCounts.get(genre) !== expectedCount) {
      throw new Error(`Expected exactly ${expectedCount} ${genre} quests.`);
    }
  }
}

if (import.meta.env.DEV) validateCatalog();
