import { defineMoodDeck } from "./defineMoodDeck";

export const RELAX_QUESTS = defineMoodDeck("relax", [
  {
    id: "relax-soft-landing",
    title: "Back to Childhood",
    objective: "Return to a game from your early years",
    completion:
      "Choose the game you connect most strongly with childhood or your teenage years and launch it before browsing anything else. Complete one level, match, mission, or 30 active minutes.",
    durationMinutes: 30,
    rewardPoints: 200,
    tipIds: ["minimalHud", "cleanExit"],
  },
  {
    id: "relax-scenic-route",
    title: "Old Reliable",
    objective: "Play the game your hands still remember",
    completion:
      "Choose a game whose controls or core loop you could explain from memory and launch it within 60 seconds. Complete one familiar activity without changing games.",
    durationMinutes: 25,
    rewardPoints: 180,
    tipIds: ["longWay", "noMap"],
  },
  {
    id: "relax-care-shift",
    title: "Soundtrack Doorway",
    objective: "Return to the game you can already hear",
    completion:
      "Think of a game soundtrack, menu sound, voice line, or ambient sound you remember clearly and launch that game. Stay for one complete musical or atmospheric section.",
    durationMinutes: 20,
    rewardPoints: 150,
    tipIds: ["listenFirst", "measuredPace"],
  },
  {
    id: "relax-one-good-loop",
    title: "Familiar Place",
    objective: "Visit a game world that feels like home",
    completion:
      "Choose the game containing the place, hub, town, track, or map you would most happily revisit tonight. Reach it and complete one activity there.",
    durationMinutes: 30,
    rewardPoints: 200,
    tipIds: ["fixedKit", "oneTrack"],
  },
  {
    id: "relax-small-wonder",
    title: "Lost Favorite",
    objective: "Reopen a game you once loved",
    completion:
      "Choose a former favorite you have not opened in a long time, even if you no longer remember the controls. Play for 30 minutes or until one full mission, round, or level ends.",
    durationMinutes: 30,
    rewardPoints: 200,
    tipIds: ["oneMoreCorner", "minimalHud"],
  },
  {
    id: "relax-three-loose-ends",
    title: "Series Homecoming",
    objective: "Return to a series that already matters to you",
    completion:
      "Choose a franchise you care about, then launch the entry you have revisited least. Reach its first clear checkpoint or complete one round.",
    durationMinutes: 25,
    rewardPoints: 180,
    tipIds: ["oneTrack", "cleanExit"],
  },
  {
    id: "relax-next-save",
    title: "The Next Save",
    objective: "Resume the game with the easiest next step",
    completion:
      "Choose an in-progress game whose next action you can name without opening it. Continue from your latest save and stop after the next checkpoint, save point, or completed round.",
    durationMinutes: 25,
    rewardPoints: 180,
    tipIds: ["oneTrack", "cleanExit"],
  },
  {
    id: "relax-gentlest-mode",
    title: "Gentlest Mode",
    objective: "Choose the game that lets you lower the pressure",
    completion:
      "Pick an owned game with a forgiving difficulty, assist setting, practice space, or low-stakes mode. Use it and complete one level, round, scene, or 25 active minutes.",
    durationMinutes: 25,
    rewardPoints: 150,
    tipIds: ["minimalHud", "letItStand"],
  },
  {
    id: "relax-pause-anytime",
    title: "Pause Anytime",
    objective: "Play something that will wait for you",
    completion:
      "Choose a game you can pause, suspend, or leave safely whenever you need to. Settle into one activity and finish it or play for 30 active minutes.",
    durationMinutes: 30,
    rewardPoints: 180,
    tipIds: ["cleanExit", "measuredPace"],
  },
  {
    id: "relax-turn-by-turn",
    title: "Your Turn, Your Time",
    objective: "Choose a game that waits between decisions",
    completion:
      "Pick an owned turn-based, card-based, puzzle, tactics, or planning game where nothing advances until you act. Complete one encounter, puzzle, match, or 30 active minutes.",
    durationMinutes: 30,
    rewardPoints: 200,
    tipIds: ["firstInstinct", "noOutsideHelp"],
  },
  {
    id: "relax-easy-victory",
    title: "A Win Within Reach",
    objective: "Play the game most likely to give you one easy success",
    completion:
      "Choose a game, stage, mode, or opponent where a small victory feels comfortably within reach. Earn one clear win, clear, score target, or successful outcome.",
    durationMinutes: 20,
    rewardPoints: 150,
    tipIds: ["basicTools", "cleanExit"],
  },
  {
    id: "relax-quietest-game",
    title: "Quiet Company",
    objective: "Choose the least demanding game in your library",
    completion:
      "Scan your owned games for the one that asks for the least urgency, precision, reading, or management tonight. Launch it and complete one calm activity or 30 active minutes.",
    durationMinutes: 30,
    rewardPoints: 180,
    tipIds: ["minimalHud", "measuredPace"],
  },
  {
    id: "relax-tend-one-thing",
    title: "Tend One Thing",
    objective: "Play a game where you can care for something small",
    completion:
      "Choose a game that lets you tend, repair, feed, grow, decorate, maintain, or improve something. Finish one small act of care and leave it visibly better than you found it.",
    durationMinutes: 25,
    rewardPoints: 180,
    tipIds: ["oneTool", "localMaterials"],
  },
  {
    id: "relax-put-things-right",
    title: "Put Things Right",
    objective: "Choose a game with a satisfying bit of order",
    completion:
      "Pick a game where you can sort, clean, arrange, connect, repair, inventory, or organize. Complete one contained space, set, route, or arrangement.",
    durationMinutes: 25,
    rewardPoints: 180,
    tipIds: ["oneRoom", "noUndo"],
  },
  {
    id: "relax-slow-journey",
    title: "Take the Slow Way",
    objective: "Play the game where travel can be the whole session",
    completion:
      "Choose a game with walking, driving, sailing, flying, riding, or another unhurried way to move. Travel from one recognizable point to another without fast travel.",
    durationMinutes: 30,
    rewardPoints: 200,
    tipIds: ["longWay", "noMap"],
  },
  {
    id: "relax-story-carries-you",
    title: "Let the Story Carry You",
    objective: "Choose a game that asks you mainly to follow along",
    completion:
      "Pick an owned game or mode led by story, dialogue, discovery, or simple choices rather than constant execution. Reach the end of one scene, conversation, chapter, or 30 active minutes.",
    durationMinutes: 30,
    rewardPoints: 180,
    tipIds: ["minimalHud", "firstInstinct"],
  },
  {
    id: "relax-one-puzzle",
    title: "One Thought at a Time",
    objective: "Choose a game with one unrushed problem to solve",
    completion:
      "Pick a game containing puzzles, exploration problems, construction, or planning without a strict timer. Solve one complete problem or make one clearly working solution.",
    durationMinutes: 30,
    rewardPoints: 200,
    tipIds: ["noOutsideHelp", "noRestart"],
  },
  {
    id: "relax-friendly-face",
    title: "A Friendly Face",
    objective: "Play the game with someone you are glad to see",
    completion:
      "Choose a game because one companion, creature, shopkeeper, teammate, or protagonist feels welcoming tonight. Find them and complete one activity, conversation, or match in their company.",
    durationMinutes: 25,
    rewardPoints: 180,
    tipIds: ["followTheLocal", "helpFirst"],
  },
  {
    id: "relax-solo-room",
    title: "A Room of Your Own",
    objective: "Choose a game you can enjoy entirely by yourself",
    completion:
      "Pick an owned game or mode with no matchmaking, voice chat, team obligation, or live audience. Complete one private activity, level, run, or 30 active minutes.",
    durationMinutes: 30,
    rewardPoints: 180,
    tipIds: ["oneRoom", "minimalHud"],
  },
  {
    id: "relax-forgiving-restart",
    title: "Nothing Lost",
    objective: "Play something where mistakes are easy to release",
    completion:
      "Choose a game with quick retries, generous checkpoints, reversible choices, or little penalty for failure. Attempt one section until it ends once, successfully or not.",
    durationMinutes: 25,
    rewardPoints: 180,
    tipIds: ["noRestart", "letItStand"],
  },
  {
    id: "relax-soft-colors",
    title: "Soft Colors",
    objective: "Choose the game whose palette feels easiest on you",
    completion:
      "Look across your owned games and choose the cover, screenshot, or remembered scene with the gentlest colors for tonight. Reach a place with that visual mood and stay through one activity.",
    durationMinutes: 25,
    rewardPoints: 150,
    tipIds: ["onePalette", "minimalHud"],
  },
  {
    id: "relax-good-weather",
    title: "Better Weather",
    objective: "Step into the game with the weather you want",
    completion:
      "Choose a game that can give you sunlight, rain, snow, fog, a clear night, or another weather mood you want to inhabit. Reach that atmosphere and complete one activity there.",
    durationMinutes: 30,
    rewardPoints: 180,
    tipIds: ["longWay", "photoProof"],
  },
  {
    id: "relax-small-routine",
    title: "Small Routine",
    objective: "Choose a game with a soothing repeatable ritual",
    completion:
      "Pick a game with a short routine you enjoy, such as a daily visit, route, round, harvest, delivery, or preparation. Perform that routine once from beginning to end.",
    durationMinutes: 20,
    rewardPoints: 150,
    tipIds: ["oneTrack", "fixedKit"],
  },
  {
    id: "relax-watch-and-wander",
    title: "Watch and Wander",
    objective: "Play the game that rewards simply looking around",
    completion:
      "Choose a game where observation, photography, collecting sights, or slow exploration can matter. Find three details you have never noticed and finish at a safe stopping point.",
    durationMinutes: 25,
    rewardPoints: 180,
    tipIds: ["minimalHud", "oneMoreCorner"],
  },
  {
    id: "relax-one-button-deeper",
    title: "Simple in the Hands",
    objective: "Choose the game with the fewest controls to remember",
    completion:
      "Pick an owned game or mode whose essential actions fit comfortably in your hands tonight. Complete one level, round, song, scene, or 25 active minutes without adding complexity.",
    durationMinutes: 25,
    rewardPoints: 150,
    tipIds: ["oneTool", "basicTools"],
  },
  {
    id: "relax-safe-home-base",
    title: "Stay at Base",
    objective: "Choose a game with useful things to do before the next mission",
    completion:
      "Pick an in-progress game with a hub, camp, ship, menu, workshop, or home base. Spend the session preparing, talking, crafting, customizing, or organizing there, then save before departing.",
    durationMinutes: 25,
    rewardPoints: 180,
    tipIds: ["oneRoom", "cleanExit"],
  },
  {
    id: "relax-low-volume",
    title: "Low Volume Evening",
    objective: "Choose a game that still works quietly",
    completion:
      "Pick a game you can comfortably follow at low volume, with captions, or without sound. Complete one contained activity while keeping the room as quiet as you need it.",
    durationMinutes: 25,
    rewardPoints: 150,
    tipIds: ["worldAudio", "measuredPace"],
  },
  {
    id: "relax-kindest-save-file",
    title: "The Kindest Save File",
    objective: "Return to the progress that feels least complicated",
    completion:
      "Among your active games, choose the save with the fewest urgent problems, open objectives, or difficult encounters. Make one modest piece of progress and save again somewhere calm.",
    durationMinutes: 30,
    rewardPoints: 200,
    tipIds: ["fixedKit", "cleanExit"],
  },
  {
    id: "relax-comforting-repetition",
    title: "Again, Because It Feels Good",
    objective: "Repeat an activity you enjoy without chasing progress",
    completion:
      "Choose a game with a replayable race, level, song, route, match, puzzle, or encounter you enjoy for its own sake. Complete it once without improving a record or unlocking anything.",
    durationMinutes: 20,
    rewardPoints: 150,
    tipIds: ["fixedKit", "firstTake"],
  },
  {
    id: "relax-clean-exit",
    title: "A Clean Exit",
    objective: "Choose the game with the clearest stopping point",
    completion:
      "Pick a game offering a chapter, day, run, match, level, or other boundary you can finish within an hour. Play exactly one complete unit and stop at its closing screen or save.",
    durationMinutes: 40,
    rewardPoints: 220,
    tipIds: ["cleanExit", "oneTrack"],
  }
]);
