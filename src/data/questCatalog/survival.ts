import type { QuestDefinition } from "../questTypes";

export const SURVIVAL_QUESTS = [
  {
    "id": "night-supply-run",
    "title": "Night Supply Run",
    "objective": "Leave your safest shelter after dark, gather one resource you are short on, and return without using a vehicle.",
    "primaryGenre": "survival",
    "compatibleGenres": [
      "action"
    ],
    "requirements": [
      "shelter",
      "day/night cycle",
      "resource gathering"
    ],
    "archetype": "expedition",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "pack-light",
    "title": "Pack Light",
    "objective": "Leave shelter carrying only one weapon and one healing item. Return with enough materials to craft one meaningful upgrade.",
    "primaryGenre": "survival",
    "compatibleGenres": [],
    "requirements": [
      "inventory",
      "gathering",
      "crafting",
      "shelter"
    ],
    "archetype": "expedition",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "the-backup-plan",
    "title": "The Backup Plan",
    "objective": "Travel beyond your usual safe area and create an emergency stash or shelter using only materials gathered during the trip. Return to your main shelter afterward.",
    "primaryGenre": "survival",
    "compatibleGenres": [
      "building"
    ],
    "requirements": [
      "open world",
      "gathering",
      "storage or shelter building"
    ],
    "archetype": "expedition",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "stock-the-commons",
    "title": "Stock the Commons",
    "objective": "Deposit one scarce resource and one recovery item into shared storage, then complete a short supply trip with a teammate without taking either item back.",
    "primaryGenre": "survival",
    "compatibleGenres": [
      "building"
    ],
    "requirements": [
      "online co-op",
      "shared storage",
      "resource gathering"
    ],
    "archetype": "support",
    "settings": [],
    "requiresOnline": true
  },
  {
    "id": "bring-them-home",
    "title": "Bring Them Home",
    "objective": "Accompany an injured, encumbered, or under-equipped teammate from the field to shelter. Both of you must arrive with at least one gathered resource.",
    "primaryGenre": "survival",
    "compatibleGenres": [
      "action"
    ],
    "requirements": [
      "online co-op",
      "injury, encumbrance, or equipment systems",
      "shelter"
    ],
    "archetype": "support",
    "settings": [],
    "requiresOnline": true
  },
  {
    "id": "field-medic",
    "title": "Field Medic",
    "objective": "Give a teammate one healing, warmth, food, or repair item before an outing. Complete the outing together with the item used or safely returned.",
    "primaryGenre": "survival",
    "compatibleGenres": [
      "action"
    ],
    "requirements": [
      "online co-op",
      "shareable recovery items",
      "survival outings"
    ],
    "archetype": "support",
    "settings": [],
    "requiresOnline": true
  },
  {
    "id": "build-the-welcome-fire",
    "title": "Build the Welcome Fire",
    "objective": "Add one source of warmth, light, rest, or storage that benefits a survivor or companion at camp. Complete one of their needs using it.",
    "primaryGenre": "survival",
    "compatibleGenres": [
      "building"
    ],
    "requirements": [
      "survivors or companions",
      "camp improvements",
      "tracked needs"
    ],
    "archetype": "support",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "watch-their-back",
    "title": "Watch Their Back",
    "objective": "Take a survivor or companion on a gathering trip. Handle one threat or hazard while they carry or collect something useful, then return together.",
    "primaryGenre": "survival",
    "compatibleGenres": [
      "action"
    ],
    "requirements": [
      "survivors or companions",
      "resource gathering",
      "threats or hazards"
    ],
    "archetype": "support",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "companion-care",
    "title": "Companion Care",
    "objective": "Feed, heal, repair, or rest a companion until one tracked need improves, then complete a short trip or encounter together.",
    "primaryGenre": "survival",
    "compatibleGenres": [
      "rpg"
    ],
    "requirements": [
      "companions",
      "tracked companion needs",
      "trips or encounters"
    ],
    "archetype": "support",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "use-the-weather",
    "title": "Use the Weather",
    "objective": "Choose one resource or task helped by the current weather, temperature, tide, or season. Complete it and return to shelter before the condition changes.",
    "primaryGenre": "survival",
    "compatibleGenres": [
      "simulation"
    ],
    "requirements": [
      "changing environmental conditions",
      "condition-sensitive resources or tasks",
      "shelter"
    ],
    "archetype": "adaptation",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "improvised-tool",
    "title": "Improvised Tool",
    "objective": "Set aside your most-used gathering tool for one outing. Use another available method to collect enough material for one useful craft, then return.",
    "primaryGenre": "survival",
    "compatibleGenres": [
      "rpg"
    ],
    "requirements": [
      "multiple gathering methods",
      "crafting",
      "shelter or safe return"
    ],
    "archetype": "adaptation",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "foraged-supper",
    "title": "Foraged Supper",
    "objective": "During one outing, find and use one safe source of food or drink instead of packed supplies. Return with one extra serving or ingredient.",
    "primaryGenre": "survival",
    "compatibleGenres": [
      "rpg"
    ],
    "requirements": [
      "foraging",
      "hunger or thirst",
      "portable food or ingredients"
    ],
    "archetype": "adaptation",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "temporary-roof",
    "title": "Temporary Roof",
    "objective": "Use a cave, abandoned structure, vehicle, or improvised shelter instead of your main base to recover from one weather, fatigue, or danger state. Leave when safe.",
    "primaryGenre": "survival",
    "compatibleGenres": [
      "action"
    ],
    "requirements": [
      "temporary shelter locations",
      "weather, fatigue, or danger states",
      "recovery"
    ],
    "archetype": "adaptation",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "change-the-defense",
    "title": "Change the Defense",
    "objective": "Face the next familiar threat with a different defense: avoidance, a trap, terrain, armor, or a new tool. Survive the encounter and keep the new defense available.",
    "primaryGenre": "survival",
    "compatibleGenres": [
      "action"
    ],
    "requirements": [
      "repeatable threats",
      "multiple defensive methods",
      "survival encounters"
    ],
    "archetype": "adaptation",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "swap-the-jobs",
    "title": "Swap the Jobs",
    "objective": "Exchange one usual gathering, crafting, navigation, or defense responsibility with a teammate. Finish one supply run with both players doing the new job.",
    "primaryGenre": "survival",
    "compatibleGenres": [
      "building"
    ],
    "requirements": [
      "online co-op",
      "divisible survival roles",
      "supply runs"
    ],
    "archetype": "adaptation",
    "settings": [],
    "requiresOnline": true
  },
  {
    "id": "one-trip-three-needs",
    "title": "One Trip, Three Needs",
    "objective": "Plan one route that gathers items for three current needs such as food, fuel, repair, medicine, or crafting. Return with something for all three.",
    "primaryGenre": "survival",
    "compatibleGenres": [
      "simulation"
    ],
    "requirements": [
      "multiple survival needs",
      "resource gathering",
      "inventory"
    ],
    "archetype": "optimization",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "close-the-loop",
    "title": "Close the Loop",
    "objective": "Gather one raw resource, process it into a finished item, and store or reuse every byproduct before starting another task.",
    "primaryGenre": "survival",
    "compatibleGenres": [
      "building",
      "simulation"
    ],
    "requirements": [
      "resource processing",
      "byproducts",
      "storage or reuse"
    ],
    "archetype": "optimization",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "lighter-pack",
    "title": "Lighter Pack",
    "objective": "Remove redundant gear until at least three inventory slots are free. Complete a gathering trip and return with all three slots meaningfully filled.",
    "primaryGenre": "survival",
    "compatibleGenres": [
      "rpg"
    ],
    "requirements": [
      "slot-based inventory",
      "equipment storage",
      "resource gathering"
    ],
    "archetype": "optimization",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "safer-route",
    "title": "Safer Route",
    "objective": "Improve one hazardous route with markers, lights, a cache, cleared obstacles, or defenses. Travel it once in each direction after the improvement.",
    "primaryGenre": "survival",
    "compatibleGenres": [
      "building"
    ],
    "requirements": [
      "persistent open world",
      "route improvements",
      "hazardous travel"
    ],
    "archetype": "optimization",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "stretch-the-rations",
    "title": "Stretch the Rations",
    "objective": "Turn raw or basic food into prepared meals with greater total value. Finish with more usable nutrition or servings than you started with.",
    "primaryGenre": "survival",
    "compatibleGenres": [
      "simulation"
    ],
    "requirements": [
      "cooking or food processing",
      "measurable food value",
      "survival needs"
    ],
    "archetype": "optimization",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "the-ready-shelf",
    "title": "The Ready Shelf",
    "objective": "Place one recovery item, one food or warmth item, and one repair or defense item together in an emergency stash. Complete a short outing without borrowing from it.",
    "primaryGenre": "survival",
    "compatibleGenres": [
      "building"
    ],
    "requirements": [
      "storage",
      "multiple survival item types",
      "survival outings"
    ],
    "archetype": "optimization",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "follow-the-smoke",
    "title": "Follow the Smoke",
    "objective": "Investigate a distant signal, light, smoke plume, sound, or structure. Identify its source, take one useful discovery, and return to shelter.",
    "primaryGenre": "survival",
    "compatibleGenres": [
      "action"
    ],
    "requirements": [
      "distant world signals or landmarks",
      "exploration",
      "shelter"
    ],
    "archetype": "expedition",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "map-the-waterline",
    "title": "Map the Waterline",
    "objective": "Locate a new reliable source of water, food, or fuel, mark or connect it for future trips, then return with one sample.",
    "primaryGenre": "survival",
    "compatibleGenres": [
      "building"
    ],
    "requirements": [
      "open world",
      "renewable resource sources",
      "markers, maps, or connections"
    ],
    "archetype": "expedition",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "answer-the-beacon",
    "title": "Answer the Beacon",
    "objective": "Travel to a teammate's distant marker, deliver one needed supply or repair, and return to shelter together by a safe route.",
    "primaryGenre": "survival",
    "compatibleGenres": [
      "action"
    ],
    "requirements": [
      "online co-op",
      "player markers",
      "shareable supplies or repairs"
    ],
    "archetype": "expedition",
    "settings": [],
    "requiresOnline": true
  },
  {
    "id": "last-light-return",
    "title": "Last-Light Return",
    "objective": "Before sunset, leave shelter for one named resource and return with it before full darkness. Use any route or transport available.",
    "primaryGenre": "survival",
    "compatibleGenres": [
      "action"
    ],
    "requirements": [
      "day/night cycle",
      "resource gathering",
      "shelter"
    ],
    "archetype": "performance",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "fire-without-waste",
    "title": "Fire Without Waste",
    "objective": "Light one fire or power one station with a single fuel load. Finish one complete cooking, warmth, or crafting task before it goes out, without adding fuel.",
    "primaryGenre": "survival",
    "compatibleGenres": [
      "simulation"
    ],
    "requirements": [
      "fuel-based fire or station",
      "timed processing task",
      "fuel management"
    ],
    "archetype": "performance",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "quiet-harvest",
    "title": "Quiet Harvest",
    "objective": "Collect one needed resource from a guarded or dangerous area without alerting or fighting the nearby threat, then return to safety.",
    "primaryGenre": "survival",
    "compatibleGenres": [
      "action"
    ],
    "requirements": [
      "resource gathering",
      "avoidable threats",
      "stealth or evasion"
    ],
    "archetype": "performance",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "storm-ready",
    "title": "Storm Ready",
    "objective": "Before the next forecast hazard begins, place one repair item, one recovery item, and enough fuel or food for the event inside your shelter.",
    "primaryGenre": "survival",
    "compatibleGenres": [
      "building"
    ],
    "requirements": [
      "forecast hazards",
      "shelter storage",
      "repair, recovery, and fuel or food items"
    ],
    "archetype": "performance",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "no-one-left-outside",
    "title": "No One Left Outside",
    "objective": "When the next environmental hazard is announced, help every active teammate reach shelter before it begins. Finish when the last player is safely inside.",
    "primaryGenre": "survival",
    "compatibleGenres": [
      "action"
    ],
    "requirements": [
      "online co-op",
      "forecast environmental hazards",
      "shared shelter"
    ],
    "archetype": "performance",
    "settings": [],
    "requiresOnline": true
  },
  {
    "id": "clean-evacuation",
    "title": "Clean Evacuation",
    "objective": "Move one valuable stack, essential tool, or vulnerable survivor from a threatened base to a backup location without losing it along the way.",
    "primaryGenre": "survival",
    "compatibleGenres": [
      "building",
      "action"
    ],
    "requirements": [
      "base threats",
      "movable resources, tools, or survivors",
      "backup storage or shelter"
    ],
    "archetype": "performance",
    "settings": [],
    "requiresOnline": false
  }
] as const satisfies readonly QuestDefinition[];

