import { defineMoodDeck } from "./defineMoodDeck";

export const LOW_ENERGY_QUESTS = defineMoodDeck("low-energy", [
  {
    id: "bed-friendly",
    title: "Playable From Here",
    objective: "Choose a game comfortable from your current position",
    completion:
      "Pick an installed game fully playable with the controller and screen already in front of you. Complete one gentle activity without changing setup or posture.",
    durationMinutes: 25,
    rewardPoints: 150,
    tipIds: ["fixedKit", "cleanExit"],
  },
  {
    id: "turns-wait",
    title: "Nothing Moves Without You",
    objective: "Let every decision wait for your attention",
    completion:
      "Pick a turn-based, card, tactics, puzzle, or planning game where time stops until you act. Complete one encounter or 30 active minutes at your own pace.",
    durationMinutes: 30,
    rewardPoints: 180,
    tipIds: ["measuredPace", "firstInstinct"],
  },
  {
    id: "story-mode",
    title: "Let the Story Do the Work",
    objective: "Use a narrative game with low execution pressure",
    completion:
      "Choose a game or mode led by dialogue, story, and simple choices. Enable its most supportive settings and complete one chapter, scene, or 30 active minutes.",
    durationMinutes: 30,
    rewardPoints: 170,
    tipIds: ["listenFirst", "minimalHud"],
  },
  {
    id: "auto-support",
    title: "Let the Systems Help",
    objective: "Choose a game with automation or assists",
    completion:
      "Pick a game offering auto-battle, driving assists, aim help, hints, delegation, or simulation automation. Enable one supportive feature and complete one activity with it.",
    durationMinutes: 30,
    rewardPoints: 160,
    tipIds: ["fixedKit", "letItStand"],
  },
  {
    id: "one-hand-loop",
    title: "A Small Input Loop",
    objective: "Play something built around minimal physical effort",
    completion:
      "Choose a game or mode manageable with one hand, a small button set, touch, mouse-only input, or slow commands. Complete one contained loop.",
    durationMinutes: 25,
    rewardPoints: 150,
    tipIds: ["oneTool", "measuredPace"],
  },
  {
    id: "visual-novel-scene",
    title: "Read One Scene",
    objective: "Choose a game that primarily asks you to listen or read",
    completion:
      "Pick a visual novel, interactive story, dialogue-heavy RPG, or narrative adventure. Complete one scene without skipping text or seeking an optimal branch.",
    durationMinutes: 30,
    rewardPoints: 170,
    tipIds: ["listenFirst", "firstInstinct"],
  },
  {
    id: "easy-puzzle",
    title: "One Unhurried Question",
    objective: "Choose a puzzle without a clock or enemies",
    completion:
      "Pick a puzzle, exploration, construction, or logic game with no strict time pressure. Solve one complete problem, using an in-game hint if needed.",
    durationMinutes: 30,
    rewardPoints: 170,
    tipIds: ["measuredPace", "letItStand"],
  },
  {
    id: "gentle-management",
    title: "Tend, Do Not Expand",
    objective: "Choose a management game with one calm routine",
    completion:
      "Pick a farm, shop, settlement, aquarium, garden, or management game. Complete one maintenance cycle without expanding territory or starting a large project.",
    durationMinutes: 30,
    rewardPoints: 170,
    tipIds: ["oneRoom", "noShopping"],
  },
  {
    id: "walking-only",
    title: "Walk the Whole Way",
    objective: "Let traversal become the entire low-energy session",
    completion:
      "Choose a game with a safe or familiar route between two places. Walk there without sprinting or fast travel and stop after reaching the destination.",
    durationMinutes: 30,
    rewardPoints: 180,
    tipIds: ["measuredPace", "longWay"],
  },
  {
    id: "familiar-save",
    title: "The Save That Knows You",
    objective: "Return to the most comfortable current save",
    completion:
      "Choose the in-progress game whose world and controls require the least explanation. Complete the nearest familiar activity and save again before leaving.",
    durationMinutes: 30,
    rewardPoints: 170,
    tipIds: ["fixedKit", "cleanExit"],
  },
  {
    id: "photo-stroll",
    title: "One Quiet Photograph",
    objective: "Choose a game where looking can be enough",
    completion:
      "Pick a visually inviting game with photo mode or screenshots. Stay within one area until you capture one image that feels restful, then stop.",
    durationMinutes: 25,
    rewardPoints: 160,
    tipIds: ["minimalHud", "photoProof"],
  },
  {
    id: "music-and-menu",
    title: "Stay for the Sound",
    objective: "Let a familiar soundtrack carry a short session",
    completion:
      "Choose a game whose music or ambience already feels comforting. Complete one low-stakes activity with the soundtrack audible and no second-screen media.",
    durationMinutes: 25,
    rewardPoints: 160,
    tipIds: ["listenFirst", "minimalHud"],
  },
  {
    id: "no-failure-mode",
    title: "Nothing to Lose",
    objective: "Choose an activity where failure has little cost",
    completion:
      "Pick a sandbox, practice, creative, exploration, story, or forgiving mode. Complete one activity where mistakes do not erase meaningful progress.",
    durationMinutes: 25,
    rewardPoints: 150,
    tipIds: ["letItStand", "cleanExit"],
  },
  {
    id: "one-day-sim",
    title: "One In-Game Day",
    objective: "Use a life simulation's natural daily boundary",
    completion:
      "Choose a life, farm, shop, school, or schedule-based game. Play exactly one in-game day and go to sleep, save, or close at its end.",
    durationMinutes: 30,
    rewardPoints: 170,
    tipIds: ["oneTrack", "cleanExit"],
  },
  {
    id: "short-episode",
    title: "One Episode Only",
    objective: "Choose a game divided into small story units",
    completion:
      "Pick a narrative, adventure, mystery, or episodic game with a chapter under 40 minutes. Complete one episode and remain through its closing screen.",
    durationMinutes: 40,
    rewardPoints: 200,
    tipIds: ["listenFirst", "cleanExit"],
  },
  {
    id: "cozy-craft",
    title: "Make One Useful Thing",
    objective: "Choose a crafting task with a visible gentle finish",
    completion:
      "Pick a game where required materials are already nearby or owned. Craft one useful object, place or use it, and leave the inventory afterward.",
    durationMinutes: 25,
    rewardPoints: 160,
    tipIds: ["localMaterials", "oneTool"],
  },
  {
    id: "home-base-only",
    title: "Do Not Leave Home",
    objective: "Keep the whole session inside a safe base",
    completion:
      "Choose a game with a home, ship, camp, hub, garage, or base. Repair, decorate, organize, or speak to someone there without beginning an expedition.",
    durationMinutes: 30,
    rewardPoints: 170,
    tipIds: ["oneRoom", "cleanExit"],
  },
  {
    id: "ambient-company",
    title: "A World in the Background",
    objective: "Choose a game that can provide gentle company",
    completion:
      "Pick a familiar world with low-stakes wandering, building, or routine. Play one calm activity with no requirement to optimize or advance the main story.",
    durationMinutes: 30,
    rewardPoints: 160,
    tipIds: ["measuredPace", "minimalHud"],
  },
  {
    id: "one-conversation",
    title: "Talk to One Person",
    objective: "Let a single character hold the session",
    completion:
      "Choose a game with a companion, resident, crew member, or visual-novel character you like. Complete one full conversation and any immediate small request they make.",
    durationMinutes: 25,
    rewardPoints: 160,
    tipIds: ["listenFirst", "helpFirst"],
  },
  {
    id: "slow-vehicle",
    title: "Let the Vehicle Carry You",
    objective: "Choose travel that requires little urgency",
    completion:
      "Pick a driving, sailing, train, flight, or space game with a calm route. Complete one journey using assists or cruise-like controls when available.",
    durationMinutes: 30,
    rewardPoints: 170,
    tipIds: ["longWay", "minimalHud"],
  },
  {
    id: "known-puzzle-type",
    title: "A Puzzle You Already Speak",
    objective: "Return to a familiar puzzle language",
    completion:
      "Choose a puzzle game whose rules you already know. Complete three ordinary boards or one larger puzzle without changing modes or seeking a harder tier.",
    durationMinutes: 25,
    rewardPoints: 160,
    tipIds: ["fixedKit", "measuredPace"],
  },
  {
    id: "supportive-role",
    title: "Help Without Leading",
    objective: "Choose a team role with clear supportive actions",
    completion:
      "Pick a co-op or multiplayer game and complete one result as healer, builder, transporter, defender, or another support role without taking command.",
    durationMinutes: 30,
    rewardPoints: 190,
    tipIds: ["holdYourRole", "helpFirst"],
  },
  {
    id: "collect-nearby",
    title: "Only What Is Close",
    objective: "Choose a tiny collection task around the current save",
    completion:
      "Pick an in-progress game with a few visible nearby resources or collectibles. Gather only those within the current area and stop before traveling onward.",
    durationMinutes: 25,
    rewardPoints: 160,
    tipIds: ["oneRoom", "noMap"],
  },
  {
    id: "default-everything",
    title: "No Settings Decisions",
    objective: "Accept the game's current setup exactly as it is",
    completion:
      "Choose a familiar installed game and begin the nearest activity without changing difficulty, controls, loadout, character, or display settings.",
    durationMinutes: 25,
    rewardPoints: 160,
    tipIds: ["fixedKit", "letItStand"],
  },
  {
    id: "replay-favorite-level",
    title: "The Level That Feels Easy",
    objective: "Replay a section whose shape you remember",
    completion:
      "Choose a game with a favorite replayable level, track, song, puzzle, or mission. Complete it once using the familiar route and stop after the result.",
    durationMinutes: 25,
    rewardPoints: 160,
    tipIds: ["fixedKit", "cleanExit"],
  },
  {
    id: "gentle-weather",
    title: "Weather to Rest In",
    objective: "Choose a world with the atmosphere you need",
    completion:
      "Pick a game offering calm rain, sunlight, snow, night, fog, or another soothing weather state. Stay in one area and complete one local activity within it.",
    durationMinutes: 30,
    rewardPoints: 170,
    tipIds: ["measuredPace", "photoProof"],
  },
  {
    id: "watch-systems",
    title: "Let It Run",
    objective: "Choose a game where observing is part of play",
    completion:
      "Pick a simulation, automation, city, ecosystem, or management game. Make one small adjustment, then watch a full cycle before deciding whether anything else is needed.",
    durationMinutes: 30,
    rewardPoints: 170,
    tipIds: ["oneMove", "letItStand"],
  },
  {
    id: "old-tutorial-area",
    title: "A Place With No Surprises",
    objective: "Return to an opening area that feels safe",
    completion:
      "Choose a familiar game with a replayable tutorial, first town, early track, or opening level. Complete that area using ordinary equipment and no added challenge.",
    durationMinutes: 25,
    rewardPoints: 150,
    tipIds: ["basicTools", "cleanExit"],
  },
  {
    id: "low-reading",
    title: "Follow the Shapes",
    objective: "Choose a game that communicates through movement and image",
    completion:
      "Pick a platformer, racer, rhythm, arcade, exploration, or visual puzzle game with little required reading. Complete one activity by following its visible cues.",
    durationMinutes: 25,
    rewardPoints: 160,
    tipIds: ["minimalHud", "firstInstinct"],
  },
  {
    id: "energy-honest-exit",
    title: "Enough Is a Finish",
    objective: "Choose a game that respects a short low-energy visit",
    completion:
      "Pick the game whose smallest meaningful activity fits how you feel now. Complete that one unit, save deliberately, and leave without adding a second goal.",
    durationMinutes: 25,
    rewardPoints: 170,
    tipIds: ["oneTrack", "cleanExit"],
  }
]);
