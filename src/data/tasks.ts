export const CATEGORIES = [
  "Action",
  "Adventure",
  "Survival",
  "Travel",
  "Nature",
  "Craft",
  "Food",
  "Social",
  "Sports",
  "Oddball",
] as const;

export type TaskCategory = (typeof CATEGORIES)[number];
export type TaskDifficulty = "easy" | "medium" | "hard";

export type TaskDefinition = {
  id: string;
  title: string;
  category: TaskCategory;
  difficulty: TaskDifficulty;
  points: number;
};

type DifficultyGroup = Record<TaskDifficulty, readonly string[]>;

const POINTS: Record<TaskDifficulty, number> = {
  easy: 25,
  medium: 50,
  hard: 100,
};

const taskGroups: Record<TaskCategory, DifficultyGroup> = {
  Action: {
    easy: [
      "Defeat an enemy",
      "Use a bow or crossbow",
      "Break a destructible object",
      "Block or parry an attack",
      "Throw an item",
      "Deal fire damage",
    ],
    medium: [
      "Defeat an enemy without healing",
      "Win a fight using only a melee weapon",
      "Land a hit from high ground",
      "Disarm or stagger an opponent",
      "Defeat an enemy with an environmental hazard",
      "Escape a fight without defeating anyone",
    ],
    hard: [
      "Defeat a boss without using a healing item",
      "Clear an enemy camp without being detected",
      "Win a fight with a weapon you rarely use",
      "Survive a maximum-alert encounter",
      "Defeat an enemy without taking damage",
      "Trick an enemy into attacking an ally",
    ],
  },
  Adventure: {
    easy: [
      "Open a treasure chest",
      "Enter a cave",
      "Climb to a high viewpoint",
      "Read a note, book, or inscription",
      "Discover a named location",
      "Cross a bridge",
    ],
    medium: [
      "Find a hidden room",
      "Complete a side quest",
      "Reach somewhere using an alternate route",
      "Solve an environmental puzzle",
      "Follow a map to a landmark",
      "Explore a place after dark",
    ],
    hard: [
      "Reach the highest accessible point",
      "Find a secret without using a guide",
      "Complete a dungeon without leaving",
      "Cross the map without fast travel",
      "Return to an early area and find something new",
      "Finish a quest with an unexpected outcome",
    ],
  },
  Survival: {
    easy: [
      "Light a fire",
      "Restore your health",
      "Find safe shelter",
      "Fill a water container",
      "Sleep until morning",
      "Collect a basic resource",
    ],
    medium: [
      "Survive a full night outdoors",
      "Recover from a status effect",
      "Prepare for dangerous weather",
      "Build a temporary shelter",
      "Travel while carrying very little",
      "Escape an animal attack",
    ],
    hard: [
      "Survive a day using only gathered supplies",
      "Return to safety with critically low health",
      "Cross a dangerous region without a vehicle",
      "Survive an extreme weather event",
      "Spend a night in enemy territory",
      "Recover your lost equipment after defeat",
    ],
  },
  Travel: {
    easy: [
      "Drive a car",
      "Ride a bicycle",
      "Travel by boat",
      "Ride an animal",
      "Board a train",
      "Swim across a body of water",
    ],
    medium: [
      "Complete a journey without fast travel",
      "Jump a vehicle over an obstacle",
      "Reach a destination in an unfamiliar vehicle",
      "Reach a destination without following a road",
      "Cross a border or enter a new region",
      "Travel during a storm",
    ],
    hard: [
      "Complete a long trip without damaging your vehicle",
      "Reach an island without using a marked route",
      "Cross the map using only public transport",
      "Land an aircraft somewhere unusual",
      "Finish a race in a vehicle you found",
      "Travel from the lowest point to the highest point",
    ],
  },
  Nature: {
    easy: [
      "Go fishing",
      "Cut down a tree",
      "Pick a flower",
      "Watch the sunrise",
      "Find a waterfall",
      "Spot a wild animal",
    ],
    medium: [
      "Catch a fish you have never caught before",
      "Plant a seed and help it grow",
      "Follow an animal without frightening it",
      "Find food in the wild",
      "Reach a snowy area",
      "Photograph or observe a rare animal",
    ],
    hard: [
      "Catch the rarest fish available to you",
      "Climb a mountain without using a marked path",
      "Cross a forest without harming wildlife",
      "Discover an unfamiliar natural biome",
      "Tame a wild animal",
      "Witness a rare natural event",
    ],
  },
  Craft: {
    easy: [
      "Craft a tool",
      "Repair a damaged item",
      "Cook a meal",
      "Make a healing item",
      "Upgrade a piece of equipment",
      "Build a storage container",
    ],
    medium: [
      "Craft an item from gathered materials only",
      "Improve your home or base",
      "Create a complete outfit",
      "Build a working machine",
      "Make ammunition or projectiles",
      "Craft an item you have never used before",
    ],
    hard: [
      "Craft a top-tier item",
      "Build a self-sufficient base",
      "Create something using a rare material",
      "Fully upgrade a favorite item",
      "Build a vehicle from parts",
      "Craft an item at an unfamiliar crafting station",
    ],
  },
  Food: {
    easy: [
      "Eat cooked meat",
      "Drink something",
      "Harvest a fruit or vegetable",
      "Buy food from a vendor",
      "Eat at a table",
      "Bake something",
    ],
    medium: [
      "Cook a meal using a rare ingredient",
      "Share food with another character",
      "Order or prepare a drink at a bar",
      "Eat a food with a temporary effect",
      "Catch and cook your own dinner",
      "Prepare a meal from a recipe",
    ],
    hard: [
      "Cook the most valuable meal available to you",
      "Host a feast",
      "Learn a rare recipe",
      "Prepare a meal entirely from home-grown ingredients",
      "Prepare a balanced meal",
      "Find and consume a legendary food or drink",
    ],
  },
  Social: {
    easy: [
      "Pet a dog",
      "Help a stranger",
      "Trade with a merchant",
      "Wave or emote at someone",
      "Give someone a gift",
      "Talk to a guard",
    ],
    medium: [
      "Improve your relationship with a character",
      "Recruit a companion",
      "Resolve a problem without violence",
      "Dance with another character",
      "Complete a favor for a stranger",
      "Convince someone to change their mind",
    ],
    hard: [
      "Reconcile a rivalry",
      "Reach the highest relationship level with someone",
      "Complete a mission with a companion",
      "Save a hostile character",
      "Win a difficult negotiation",
      "Bring a separated group back together",
    ],
  },
  Sports: {
    easy: [
      "Score a goal or point",
      "Jump over an obstacle",
      "Climb a wall",
      "Throw a ball",
      "Complete a lap",
      "Go for a swim",
    ],
    medium: [
      "Win a race",
      "Land a difficult trick",
      "Hit a distant target",
      "Complete an obstacle course",
      "Beat your previous score",
      "Win a match without conceding a point",
    ],
    hard: [
      "Set a new personal record",
      "Win an event on the hardest available setting",
      "Complete a course without making a mistake",
      "Win after falling behind",
      "Finish an endurance event",
      "Earn the top rank in a competitive activity",
    ],
  },
  Oddball: {
    easy: [
      "Wear a hat",
      "Ring a bell",
      "Sit on a bench",
      "Play a musical instrument",
      "Take a photograph",
      "Knock over a chair",
    ],
    medium: [
      "Steal a wheel of cheese",
      "Wear an outfit that does not match",
      "Make an NPC laugh or react",
      "Put an object somewhere it clearly does not belong",
      "Start a chain reaction",
      "Spend a minute acting like an ordinary citizen",
    ],
    hard: [
      "Get arrested for something ridiculous",
      "Complete a serious mission in a silly outfit",
      "Cause chaos without directly hurting anyone",
      "Find a use for a useless object",
      "Reach a restricted place using an absurd method",
      "Turn a minor accident into a major spectacle",
    ],
  },
};

const difficulties: TaskDifficulty[] = ["easy", "medium", "hard"];

export const TASKS: TaskDefinition[] = CATEGORIES.flatMap((category) =>
  difficulties.flatMap((difficulty) =>
    taskGroups[category][difficulty].map((title, index) => ({
      id: `${category.toLowerCase()}-${difficulty}-${index + 1}`,
      title,
      category,
      difficulty,
      points: POINTS[difficulty],
    })),
  ),
);

export const TASKS_BY_ID = new Map(TASKS.map((task) => [task.id, task]));
