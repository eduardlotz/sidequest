import { defineMoodDeck } from "./defineMoodDeck";

export const FOCUSED_QUESTS = defineMoodDeck("focused", [
  {
    id: "single-campaign-thread",
    title: "One Story Thread",
    objective: "Choose one campaign and stay inside its next chapter",
    completion:
      "Pick an in-progress campaign whose next main objective is clear. Complete that objective without accepting, tracking, or beginning any side activity.",
    durationMinutes: 45,
    rewardPoints: 250,
    tipIds: ["oneTrack", "cleanExit"],
  },
  {
    id: "deep-puzzle",
    title: "Stay With the Problem",
    objective: "Give one difficult puzzle uninterrupted attention",
    completion:
      "Choose a game with an unresolved puzzle, logic board, mystery, or construction problem. Work on that single problem for up to 45 minutes without outside help.",
    durationMinutes: 45,
    rewardPoints: 250,
    tipIds: ["noOutsideHelp", "oneTrack"],
  },
  {
    id: "boss-study",
    title: "Learn One Opponent",
    objective: "Focus on understanding one boss or rival",
    completion:
      "Choose a game with a boss, duel, race ghost, or difficult opponent available. Use three attempts to identify and answer one recurring pattern.",
    durationMinutes: 40,
    rewardPoints: 250,
    tipIds: ["threeAttempts", "oneMove"],
  },
  {
    id: "build-one-function",
    title: "One Working System",
    objective: "Build a single useful system from start to finish",
    completion:
      "Choose a builder, factory, automation, management, or sandbox game. Create one complete functioning chain and watch it finish a full cycle before stopping.",
    durationMinutes: 45,
    rewardPoints: 250,
    tipIds: ["oneTrack", "oneTool"],
  },
  {
    id: "achievement-line",
    title: "One Achievement Line",
    objective: "Commit the session to one nearby achievement",
    completion:
      "Choose a game with a specific achievement or challenge you can explain before launching. Pursue only that requirement and stop after one completion or three honest attempts.",
    durationMinutes: 40,
    rewardPoints: 250,
    tipIds: ["oneTrack", "noOutsideHelp"],
  },
  {
    id: "chapter-with-notes",
    title: "Read the Chapter",
    objective: "Choose a story game deserving close attention",
    completion:
      "Pick a narrative game with an unread chapter, case, episode, or scene. Complete it without second-screen distractions and let every conversation finish naturally.",
    durationMinutes: 45,
    rewardPoints: 240,
    tipIds: ["listenFirst", "firstInstinct"],
  },
  {
    id: "one-deck-session",
    title: "Do Not Touch the Deck",
    objective: "Learn one card or strategy build through use",
    completion:
      "Choose a card, tactics, auto-battler, or strategy game and lock one existing deck or composition. Play three rounds without changing it between results.",
    durationMinutes: 40,
    rewardPoints: 240,
    tipIds: ["fixedKit", "letItStand"],
  },
  {
    id: "one-character-session",
    title: "A Single Point of View",
    objective: "Stay with one character for the full session",
    completion:
      "Choose a game with multiple characters, classes, or heroes. Select one before the first activity and complete three encounters without switching.",
    durationMinutes: 40,
    rewardPoints: 240,
    tipIds: ["fixedKit", "oneMove"],
  },
  {
    id: "collectible-set",
    title: "Complete the Small Set",
    objective: "Find one bounded group of collectibles",
    completion:
      "Choose a game with a named set, district, page, cache, or collection that is already partly complete. Finish that set without pursuing collectibles elsewhere.",
    durationMinutes: 45,
    rewardPoints: 250,
    tipIds: ["oneTrack", "noMap"],
  },
  {
    id: "route-mastery",
    title: "One Route, Repeated",
    objective: "Learn a route deeply instead of sampling many",
    completion:
      "Choose a racing, stealth, platforming, speedrun, or traversal game. Repeat one short route three times with the same equipment and improve one detail each run.",
    durationMinutes: 35,
    rewardPoints: 230,
    tipIds: ["fixedKit", "threeAttempts"],
  },
  {
    id: "skill-lab",
    title: "Practice One Move",
    objective: "Make one mechanic reliable through deliberate repetition",
    completion:
      "Choose a game with a practice area or replayable encounter. Use one move, tool, combo, or technique successfully ten times before entering one real activity.",
    durationMinutes: 35,
    rewardPoints: 230,
    tipIds: ["oneMove", "fixedKit"],
  },
  {
    id: "one-city-block",
    title: "Finish the Block",
    objective: "Concentrate every building decision in one area",
    completion:
      "Choose a city, colony, home, or settlement game and select one block or district. Make it functional and visually finished without expanding beyond its boundary.",
    durationMinutes: 45,
    rewardPoints: 250,
    tipIds: ["oneRoom", "localMaterials"],
  },
  {
    id: "questline-only",
    title: "Follow the Same Name",
    objective: "Continue one named questline without branching",
    completion:
      "Choose an RPG or adventure game with an unfinished named questline. Complete its next step while ignoring unrelated markers, loot routes, and conversations.",
    durationMinutes: 45,
    rewardPoints: 250,
    tipIds: ["oneTrack", "noLooting"],
  },
  {
    id: "ranked-set",
    title: "A Deliberate Set",
    objective: "Play a short competitive set with one learning goal",
    completion:
      "Choose a competitive game and name one skill to observe. Play exactly three ranked or serious matches using the same role, then stop regardless of record.",
    durationMinutes: 45,
    rewardPoints: 250,
    tipIds: ["fixedKit", "threeAttempts"],
  },
  {
    id: "craft-one-object",
    title: "From Parts to Object",
    objective: "Craft one meaningful item completely",
    completion:
      "Choose a crafting or survival game and name one object before launching. Gather only its required materials, make it, and place or use it once.",
    durationMinutes: 40,
    rewardPoints: 240,
    tipIds: ["oneTrack", "localMaterials"],
  },
  {
    id: "photo-one-subject",
    title: "Study One Subject",
    objective: "Build a photo session around one visual subject",
    completion:
      "Choose a game with a place, creature, vehicle, character, or weather effect worth studying. Capture three distinct images of that single subject within one area.",
    durationMinutes: 35,
    rewardPoints: 220,
    tipIds: ["oneRoom", "photoProof"],
  },
  {
    id: "strategy-one-plan",
    title: "Commit to the Plan",
    objective: "Play one strategy match around a declared approach",
    completion:
      "Choose a strategy or tactics game and state one plan before starting. Complete one match or scenario without abandoning that plan after early trouble.",
    durationMinutes: 45,
    rewardPoints: 250,
    tipIds: ["letItStand", "noRestart"],
  },
  {
    id: "language-immersion",
    title: "Listen for Every Clue",
    objective: "Choose a dialogue or deduction game for close reading",
    completion:
      "Pick a mystery, visual novel, RPG, or narrative game where words carry mechanics. Complete one case or chapter without skipping text or consulting a guide.",
    durationMinutes: 45,
    rewardPoints: 250,
    tipIds: ["listenFirst", "noOutsideHelp"],
  },
  {
    id: "save-rescue",
    title: "Understand the Save Again",
    objective: "Reconstruct one abandoned save through play",
    completion:
      "Choose an old in-progress game and spend the session only on understanding its character, location, and current objective. Complete that objective without restarting the campaign.",
    durationMinutes: 45,
    rewardPoints: 250,
    tipIds: ["fixedKit", "oneTrack"],
  },
  {
    id: "economy-balance",
    title: "Close the Loop",
    objective: "Stabilize one resource economy",
    completion:
      "Choose a management, strategy, simulation, or survival game with one unstable resource. Make its production reliably meet demand for one full cycle.",
    durationMinutes: 45,
    rewardPoints: 250,
    tipIds: ["oneTrack", "keepReserve"],
  },
  {
    id: "one-dungeon",
    title: "The Whole Dungeon",
    objective: "Choose one contained expedition and finish it",
    completion:
      "Pick a game with a dungeon, raid wing, cave, mission, or expedition sized for one session. Enter with the current kit and leave only after its recorded finish.",
    durationMinutes: 50,
    rewardPoints: 250,
    tipIds: ["fixedKit", "cleanExit"],
  },
  {
    id: "single-soundscape",
    title: "Hear the Whole Place",
    objective: "Explore one location through attentive listening",
    completion:
      "Choose a game with rich ambient sound and spend the session inside one region. Find three distinct sound sources and complete one local activity.",
    durationMinutes: 35,
    rewardPoints: 220,
    tipIds: ["worldAudio", "oneRoom"],
  },
  {
    id: "one-conversation-tree",
    title: "Stay in the Conversation",
    objective: "Follow one character's dialogue as far as it goes",
    completion:
      "Choose a game with an NPC or companion you want to understand. Complete every currently available conversation with that character before doing another objective.",
    durationMinutes: 35,
    rewardPoints: 220,
    tipIds: ["listenFirst", "oneTrack"],
  },
  {
    id: "precision-score",
    title: "One Number to Improve",
    objective: "Focus on a single measurable performance",
    completion:
      "Choose a game with a lap time, score, accuracy, combo, or clear time. Record a baseline and use two more attempts to improve only that number.",
    durationMinutes: 30,
    rewardPoints: 220,
    tipIds: ["threeAttempts", "fixedKit"],
  },
  {
    id: "map-pocket",
    title: "Know This Corner",
    objective: "Learn one small region completely",
    completion:
      "Choose an open-world or exploration game and define one visible district or map pocket. Visit its edges and complete one activity without fast travel.",
    durationMinutes: 40,
    rewardPoints: 240,
    tipIds: ["noMap", "longWay"],
  },
  {
    id: "system-experiment",
    title: "Change One Variable",
    objective: "Test one game system with controlled attention",
    completion:
      "Choose a systemic game and name one variable—weapon, material, tactic, route, or rule. Hold everything else steady through three tests and observe the difference.",
    durationMinutes: 40,
    rewardPoints: 240,
    tipIds: ["fixedKit", "oneMove"],
  },
  {
    id: "one-room-makeover",
    title: "Complete the Room",
    objective: "Finish one creative space rather than expanding",
    completion:
      "Choose a decorating, building, life-sim, or sandbox game. Redesign one room or compact space and stop when every visible part supports the same idea.",
    durationMinutes: 45,
    rewardPoints: 250,
    tipIds: ["oneRoom", "onePalette"],
  },
  {
    id: "credits-push",
    title: "Reach the Closing Screen",
    objective: "Use deep focus to finish a game already near its end",
    completion:
      "Choose a game whose main story is within one or two objectives of completion. Follow only the critical path and reach the credits or final result.",
    durationMinutes: 60,
    rewardPoints: 250,
    tipIds: ["oneTrack", "cleanExit"],
  },
  {
    id: "manual-mastery",
    title: "Read, Then Use",
    objective: "Learn one overlooked system from the game itself",
    completion:
      "Choose a game with an in-game manual, codex, tutorial archive, or move list. Study one mechanic there and demonstrate it successfully in a real activity.",
    durationMinutes: 35,
    rewardPoints: 230,
    tipIds: ["noOutsideHelp", "oneMove"],
  },
  {
    id: "focus-cooldown",
    title: "Close the Session Properly",
    objective: "Finish focused play with a deliberate handoff",
    completion:
      "Choose the game containing the most important unfinished task you can complete tonight. Finish it, save deliberately, and write or remember the exact next action before leaving.",
    durationMinutes: 45,
    rewardPoints: 250,
    tipIds: ["oneTrack", "cleanExit"],
  }
]);
