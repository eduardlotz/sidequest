export const DIFFICULTIES = ["easy", "medium", "hard"] as const;

export type QuestDifficulty = (typeof DIFFICULTIES)[number];

export type QuestDefinition = {
  id: string;
  title: string;
  difficulty: QuestDifficulty;
  points: number;
};

type QuestSeed = readonly [
  legacyId: string,
  id: string,
  title: string,
];

const POINTS: Record<QuestDifficulty, number> = {
  easy: 25,
  medium: 50,
  hard: 100,
};

const questGroups: Record<QuestDifficulty, readonly QuestSeed[]> = {
  easy: [
    ["easy-001", "craft-a-tool", "Craft a tool"],
    ["easy-002", "kill-a-zombie", "Kill a zombie"],
    ["easy-003", "cut-down-a-tree", "Cut down a tree"],
    ["easy-004", "ride-a-bicycle", "Ride a bicycle"],
    ["easy-005", "ride-an-animal", "Ride an animal"],
    ["easy-006", "drive-a-car", "Drive a car"],
    ["easy-007", "travel-by-boat", "Travel by boat"],
    ["easy-008", "light-a-fire", "Light a fire"],
    ["easy-009", "cook-a-meal", "Cook a meal"],
    ["easy-010", "catch-a-fish", "Catch a fish"],
    ["easy-011", "pick-a-lock", "Pick a lock"],
    ["easy-012", "open-a-treasure-chest", "Open a treasure chest"],
    ["easy-013", "pet-an-animal", "Pet an animal"],
    ["easy-014", "get-intoxicated", "Get intoxicated"],
    ["easy-015", "steal-an-item", "Steal an item"],
    ["easy-016", "break-a-window", "Break a window"],
    ["easy-017", "set-a-trap", "Set a trap"],
    ["easy-018", "plant-a-seed", "Plant a seed"],
    ["easy-019", "repair-an-item", "Repair an item"],
    ["easy-020", "buy-a-weapon", "Buy a weapon"],
    ["easy-021", "sell-a-stolen-item", "Sell a stolen item"],
    ["easy-022", "throw-an-explosive", "Throw an explosive"],
    ["easy-023", "read-a-book", "Read a book"],
    [
      "easy-024",
      "play-a-musical-instrument",
      "Play a musical instrument",
    ],
    ["easy-025", "take-a-photograph", "Take a photograph"],
    ["easy-026", "swim-underwater", "Swim underwater"],
    ["easy-027", "climb-onto-a-roof", "Climb onto a roof"],
    ["easy-028", "hide-inside-a-container", "Hide inside a container"],
    ["easy-029", "wear-a-disguise", "Wear a disguise"],
    ["easy-030", "dance-with-someone", "Dance with someone"],
    ["easy-031", "feed-a-wild-animal", "Feed a wild animal"],
    ["easy-032", "cast-a-spell", "Cast a spell"],
    ["easy-033", "use-a-healing-item", "Use a healing item"],
    ["easy-034", "eat-raw-food", "Eat raw food"],
    ["easy-035", "drink-from-a-river", "Drink from a river"],
    ["easy-036", "sleep-outdoors", "Sleep outdoors"],
    ["easy-037", "enter-a-cave", "Enter a cave"],
    ["easy-038", "cross-a-river", "Cross a river"],
    ["easy-039", "ring-a-bell", "Ring a bell"],
    [
      "easy-040",
      "knock-someone-unconscious",
      "Knock someone unconscious",
    ],
  ],
  medium: [
    [
      "medium-001",
      "dive-deep-enough-to-see-fish",
      "Dive deep enough to see fish",
    ],
    ["medium-002", "travel-in-time", "Travel in time"],
    ["medium-003", "ride-a-dragon", "Ride a dragon"],
    ["medium-004", "build-a-shelter", "Build a shelter"],
    ["medium-005", "tame-a-wild-animal", "Tame a wild animal"],
    [
      "medium-006",
      "craft-an-item-from-gathered-materials",
      "Craft an item from gathered materials",
    ],
    [
      "medium-007",
      "cook-a-meal-from-gathered-ingredients",
      "Cook a meal from gathered ingredients",
    ],
    ["medium-008", "reach-an-island", "Reach an island"],
    ["medium-009", "climb-a-mountain", "Climb a mountain"],
    ["medium-010", "rob-a-store", "Rob a store"],
    ["medium-011", "escape-from-prison", "Escape from prison"],
    ["medium-012", "get-arrested", "Get arrested"],
    ["medium-013", "start-a-chain-reaction", "Start a chain reaction"],
    ["medium-014", "hunt-a-large-animal", "Hunt a large animal"],
    [
      "medium-015",
      "survive-a-night-outdoors",
      "Survive a night outdoors",
    ],
    ["medium-016", "cross-a-desert", "Cross a desert"],
    ["medium-017", "find-a-hidden-room", "Find a hidden room"],
    [
      "medium-018",
      "solve-an-environmental-puzzle",
      "Solve an environmental puzzle",
    ],
    ["medium-019", "rescue-a-captive", "Rescue a captive"],
    ["medium-020", "recruit-a-companion", "Recruit a companion"],
    ["medium-021", "steal-a-guarded-item", "Steal a guarded item"],
    [
      "medium-022",
      "enter-a-restricted-area-undetected",
      "Enter a restricted area undetected",
    ],
    [
      "medium-023",
      "escape-a-fight-without-attacking",
      "Escape a fight without attacking",
    ],
    [
      "medium-024",
      "kill-an-enemy-with-a-trap",
      "Kill an enemy with a trap",
    ],
    [
      "medium-025",
      "kill-an-enemy-with-its-own-weapon",
      "Kill an enemy with its own weapon",
    ],
    [
      "medium-026",
      "make-two-enemies-fight-each-other",
      "Make two enemies fight each other",
    ],
    [
      "medium-027",
      "build-a-working-machine",
      "Build a working machine",
    ],
    [
      "medium-028",
      "grow-a-plant-to-maturity",
      "Grow a plant to maturity",
    ],
    ["medium-029", "brew-a-potion", "Brew a potion"],
    [
      "medium-030",
      "perform-for-an-audience",
      "Perform for an audience",
    ],
    ["medium-031", "win-a-race", "Win a race"],
    ["medium-032", "win-a-match", "Win a match"],
    ["medium-033", "score-from-long-range", "Score from long range"],
    [
      "medium-034",
      "jump-a-vehicle-over-an-obstacle",
      "Jump a vehicle over an obstacle",
    ],
    [
      "medium-035",
      "land-an-aircraft-away-from-a-runway",
      "Land an aircraft away from a runway",
    ],
    ["medium-036", "follow-a-treasure-map", "Follow a treasure map"],
    [
      "medium-037",
      "find-underwater-treasure",
      "Find underwater treasure",
    ],
    [
      "medium-038",
      "restore-power-to-a-building",
      "Restore power to a building",
    ],
    ["medium-039", "sink-a-boat", "Sink a boat"],
    ["medium-040", "summon-a-creature", "Summon a creature"],
  ],
  hard: [
    ["hard-001", "win-a-tournament", "Win a tournament"],
    [
      "hard-002",
      "defeat-a-boss-without-healing",
      "Defeat a boss without healing",
    ],
    [
      "hard-003",
      "clear-a-dungeon-without-leaving",
      "Clear a dungeon without leaving",
    ],
    ["hard-004", "build-a-castle", "Build a castle"],
    [
      "hard-005",
      "build-a-vehicle-from-parts",
      "Build a vehicle from parts",
    ],
    [
      "hard-006",
      "reach-the-highest-accessible-point",
      "Reach the highest accessible point",
    ],
    ["hard-007", "cross-the-map-on-foot", "Cross the map on foot"],
    [
      "hard-008",
      "survive-a-full-day-on-gathered-supplies",
      "Survive a full day on gathered supplies",
    ],
    [
      "hard-009",
      "complete-a-mission-without-violence",
      "Complete a mission without violence",
    ],
    [
      "hard-010",
      "win-a-fight-without-taking-damage",
      "Win a fight without taking damage",
    ],
    [
      "hard-011",
      "escape-from-a-maximum-security-prison",
      "Escape from a maximum-security prison",
    ],
    ["hard-012", "rob-a-guarded-vault", "Rob a guarded vault"],
    ["hard-013", "kill-a-dragon", "Kill a dragon"],
    ["hard-014", "defeat-the-final-boss", "Defeat the final boss"],
    [
      "hard-015",
      "reach-maximum-wanted-level-and-escape",
      "Reach maximum wanted level and escape",
    ],
    [
      "hard-016",
      "survive-an-extreme-weather-event",
      "Survive an extreme weather event",
    ],
    [
      "hard-017",
      "spend-a-night-in-enemy-territory",
      "Spend a night in enemy territory",
    ],
    [
      "hard-018",
      "deliver-cargo-across-the-map-undamaged",
      "Deliver cargo across the map undamaged",
    ],
    [
      "hard-019",
      "climb-the-tallest-mountain",
      "Climb the tallest mountain",
    ],
    [
      "hard-020",
      "win-a-race-without-crashing",
      "Win a race without crashing",
    ],
    [
      "hard-021",
      "win-a-match-without-conceding",
      "Win a match without conceding",
    ],
    [
      "hard-022",
      "complete-an-obstacle-course-without-falling",
      "Complete an obstacle course without falling",
    ],
    [
      "hard-023",
      "score-three-times-in-one-match",
      "Score three times in one match",
    ],
    [
      "hard-024",
      "finish-first-in-a-battle-royale",
      "Finish first in a battle royale",
    ],
    [
      "hard-025",
      "clear-an-enemy-camp-undetected",
      "Clear an enemy camp undetected",
    ],
    [
      "hard-026",
      "kill-three-enemies-with-one-explosion",
      "Kill three enemies with one explosion",
    ],
    [
      "hard-027",
      "defeat-a-boss-using-only-melee-attacks",
      "Defeat a boss using only melee attacks",
    ],
    ["hard-028", "hunt-an-apex-predator", "Hunt an apex predator"],
    [
      "hard-029",
      "steal-an-artifact-and-escape",
      "Steal an artifact and escape",
    ],
    ["hard-030", "complete-a-heist", "Complete a heist"],
    [
      "hard-031",
      "build-a-working-factory",
      "Build a working factory",
    ],
    ["hard-032", "host-a-feast", "Host a feast"],
    ["hard-033", "capture-a-fortress", "Capture a fortress"],
    ["hard-034", "travel-into-space", "Travel into space"],
    ["hard-035", "walk-on-a-moon", "Walk on a moon"],
    ["hard-036", "reach-the-ocean-floor", "Reach the ocean floor"],
    [
      "hard-037",
      "win-an-aerial-dogfight",
      "Win an aerial dogfight",
    ],
    [
      "hard-038",
      "destroy-a-giant-structure",
      "Destroy a giant structure",
    ],
    [
      "hard-039",
      "travel-to-another-dimension",
      "Travel to another dimension",
    ],
    [
      "hard-040",
      "bring-someone-back-from-the-dead",
      "Bring someone back from the dead",
    ],
  ],
};

const QUEST_SEEDS = DIFFICULTIES.flatMap((difficulty) =>
  questGroups[difficulty].map(([legacyId, id, title]) => ({
    legacyId,
    definition: {
      id,
      title,
      difficulty,
      points: POINTS[difficulty],
    },
  })),
);

export const QUESTS: QuestDefinition[] = QUEST_SEEDS.map(
  ({ definition }) => definition,
);

export const QUESTS_BY_ID = Object.fromEntries(
  QUESTS.map((quest) => [quest.id, quest]),
) as Record<string, QuestDefinition>;

export const QUEST_ID_BY_LEGACY_ID = Object.fromEntries(
  QUEST_SEEDS.map(({ legacyId, definition }) => [legacyId, definition.id]),
) as Record<string, string>;
