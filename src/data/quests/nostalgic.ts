import { defineMoodDeck } from "./defineMoodDeck";

export const NOSTALGIC_QUESTS = defineMoodDeck("nostalgic", [
  {
    id: "first-game-memory",
    title: "The First Controller",
    objective: "Return to your earliest clear game memory",
    completion:
      "Choose the game, remake, sequel, or closest available relative connected to your earliest memory of holding a controller. Launch it and complete one recognizable level, match, or 25 active minutes.",
    durationMinutes: 25,
    rewardPoints: 180,
    tipIds: ["minimalHud", "cleanExit"],
  },
  {
    id: "menu-music-door",
    title: "The Menu You Can Hum",
    objective: "Follow a remembered menu theme back into a game",
    completion:
      "Think of a menu melody or startup sound you can still hear internally. Launch that game without comparing alternatives and stay through one complete activity after the music welcomes you back.",
    durationMinutes: 25,
    rewardPoints: 180,
    tipIds: ["listenFirst", "oneTrack"],
  },
  {
    id: "old-console-era",
    title: "One Console Ago",
    objective: "Play something that belongs to an earlier hardware era",
    completion:
      "Choose an owned game originally released for an older console or computer generation that mattered to you. Keep its original visual mode when possible and finish one level or 30 active minutes.",
    durationMinutes: 30,
    rewardPoints: 200,
    tipIds: ["basicTools", "letItStand"],
  },
  {
    id: "series-beginning",
    title: "Back to Chapter One",
    objective: "Return to the beginning of a series you followed",
    completion:
      "Choose a series you know through sequels and launch its earliest entry available to you. Reach the first major checkpoint while noticing what the series had before it grew larger.",
    durationMinutes: 35,
    rewardPoints: 220,
    tipIds: ["oneTrack", "noOutsideHelp"],
  },
  {
    id: "forgotten-save",
    title: "Message From an Old Save",
    objective: "Open the save file that feels most like a time capsule",
    completion:
      "Choose a game with an old dated save and load the oldest file that still works. Explore its immediate surroundings and complete the nearest contained activity without correcting the old character or inventory.",
    durationMinutes: 30,
    rewardPoints: 200,
    tipIds: ["fixedKit", "letItStand"],
  },
  {
    id: "childhood-coop-solo",
    title: "The Second Controller",
    objective: "Revisit a game once shared with someone else",
    completion:
      "Choose a game strongly associated with a sibling, parent, friend, or couch co-op partner. Play one activity alone or with anyone available, letting the remembered person shape the choice.",
    durationMinutes: 30,
    rewardPoints: 200,
    tipIds: ["helpFirst", "cleanExit"],
  },
  {
    id: "first-hard-win",
    title: "The Victory That Stayed",
    objective: "Return to a challenge you were once proud to beat",
    completion:
      "Choose the game containing an early boss, track, puzzle, or opponent you still remember overcoming. Replay that challenge or its nearest equivalent for up to three focused attempts.",
    durationMinutes: 30,
    rewardPoints: 220,
    tipIds: ["threeAttempts", "fixedKit"],
  },
  {
    id: "rental-weekend",
    title: "Borrowed for a Weekend",
    objective: "Play a game that once felt temporarily yours",
    completion:
      "Choose a game you first knew through a rental, loan, demo kiosk, or borrowed copy. Launch it and complete the section you most associate with that limited time.",
    durationMinutes: 25,
    rewardPoints: 180,
    tipIds: ["firstInstinct", "cleanExit"],
  },
  {
    id: "demo-memory",
    title: "The Demo You Replayed",
    objective: "Return to a game whose beginning carried the whole promise",
    completion:
      "Choose a game you once knew mainly through a demo, trial, opening level, or preview build. Replay its opening and stop at the first boundary beyond what you originally knew.",
    durationMinutes: 30,
    rewardPoints: 200,
    tipIds: ["oneTrack", "firstTake"],
  },
  {
    id: "old-avatar",
    title: "Former Self",
    objective: "Visit a character you made years ago",
    completion:
      "Choose a game containing an old custom character, profile, house, team, or avatar. Load it unchanged and complete one activity using exactly the identity your earlier self left behind.",
    durationMinutes: 30,
    rewardPoints: 200,
    tipIds: ["fixedKit", "noUndo"],
  },
  {
    id: "lost-mode",
    title: "The Mode That Vanished",
    objective: "Find the closest surviving version of a mode you miss",
    completion:
      "Choose a game with a mode, playlist, ruleset, or social ritual you used to love. Play that mode if it survives, or its closest current equivalent, through one complete result.",
    durationMinutes: 30,
    rewardPoints: 200,
    tipIds: ["letItStand", "cleanExit"],
  },
  {
    id: "remembered-map",
    title: "Map in Your Bones",
    objective: "Return to a place you could once navigate from memory",
    completion:
      "Choose the game with a map, hub, town, or track you once knew instinctively. Travel from one remembered landmark to another without opening the map.",
    durationMinutes: 30,
    rewardPoints: 200,
    tipIds: ["noMap", "landmarksOnly"],
  },
  {
    id: "credits-memory",
    title: "The Ending You Remember",
    objective: "Revisit a game whose ending still has emotional weight",
    completion:
      "Choose a completed game with a replayable final chapter, epilogue, or late save. Experience one closing sequence and remain through the credits or natural final screen.",
    durationMinutes: 40,
    rewardPoints: 250,
    tipIds: ["oneTrack", "cleanExit"],
  },
  {
    id: "licensed-childhood",
    title: "Saturday-Morning Game",
    objective: "Reopen a game tied to a film, show, toy, or comic",
    completion:
      "Choose an owned licensed game connected to media you loved earlier in life. Play one complete level while accepting its oddities as part of the memory rather than grading it now.",
    durationMinutes: 25,
    rewardPoints: 180,
    tipIds: ["letItStand", "basicTools"],
  },
  {
    id: "handheld-evening",
    title: "Small-Screen Memory",
    objective: "Play something that once fit into a pocket",
    completion:
      "Choose a handheld-origin game or a game you strongly associate with portable play. Use its simplest display and control setup and complete one short stage, day, or match.",
    durationMinutes: 25,
    rewardPoints: 180,
    tipIds: ["minimalHud", "fixedKit"],
  },
  {
    id: "seasonal-memory",
    title: "That Time of Year",
    objective: "Return to a game linked to a particular season",
    completion:
      "Choose the game that most strongly evokes a summer break, winter holiday, rainy autumn, or another recurring season. Play until one scene confirms that atmosphere.",
    durationMinutes: 30,
    rewardPoints: 200,
    tipIds: ["measuredPace", "photoProof"],
  },
  {
    id: "family-game",
    title: "The Family Score",
    objective: "Revisit a game that lived in the family room",
    completion:
      "Choose a game once played with family, watched by family, or discussed around the same screen. Complete one round or level using the most familiar rules and settings.",
    durationMinutes: 25,
    rewardPoints: 180,
    tipIds: ["fixedKit", "letItStand"],
  },
  {
    id: "old-friend-pick",
    title: "Their Favorite",
    objective: "Let an old friend's taste choose tonight's game",
    completion:
      "Think of someone you used to play with and choose the game they championed most strongly. Play one activity in the style or role they preferred.",
    durationMinutes: 30,
    rewardPoints: 200,
    tipIds: ["borrowedStyle", "cleanExit"],
  },
  {
    id: "retired-strategy",
    title: "Your Old Opening",
    objective: "Reuse a strategy you once performed automatically",
    completion:
      "Choose a strategy, card, tactics, or competitive game where you remember an old opening. Use it unchanged through one complete match or scenario.",
    durationMinutes: 35,
    rewardPoints: 220,
    tipIds: ["fixedKit", "letItStand"],
  },
  {
    id: "classic-roster",
    title: "Names From the Old Roster",
    objective: "Play with a team or athlete from a remembered season",
    completion:
      "Choose a sports game with a historic roster, classic team, or familiar athlete. Finish one short match using that remembered lineup without substitutions made for optimization.",
    durationMinutes: 30,
    rewardPoints: 200,
    tipIds: ["fixedKit", "letItStand"],
  },
  {
    id: "old-racing-line",
    title: "The Track Comes Back",
    objective: "Drive a course your hands may still remember",
    completion:
      "Choose a racing game containing a track from an earlier favorite. Run three laps with the first suitable vehicle and let muscle memory return before checking the time.",
    durationMinutes: 25,
    rewardPoints: 180,
    tipIds: ["fixedKit", "threeAttempts"],
  },
  {
    id: "first-rpg-town",
    title: "The First Safe Town",
    objective: "Visit an early role-playing hub that felt like home",
    completion:
      "Choose an RPG whose first town, camp, ship, or hub remains vivid. Reach that place from an available save and complete one local conversation or errand.",
    durationMinutes: 35,
    rewardPoints: 220,
    tipIds: ["noMap", "followTheLocal"],
  },
  {
    id: "old-horror-courage",
    title: "Braver Than Before",
    objective: "Return to a scary game you once avoided or endured",
    completion:
      "Choose a horror game connected to an old fear and play one contained section with the lights and audio set however feels right now. Stop at the next safe room or save.",
    durationMinutes: 30,
    rewardPoints: 220,
    tipIds: ["noRestart", "cleanExit"],
  },
  {
    id: "dated-save-name",
    title: "A Date in the Save List",
    objective: "Let an old timestamp choose the session",
    completion:
      "Choose the game with the save timestamp that surprises you most. Load it, preserve the existing choices, and reach one new save point without reorganizing the past.",
    durationMinutes: 30,
    rewardPoints: 200,
    tipIds: ["letItStand", "noUndo"],
  },
  {
    id: "dormant-achievement",
    title: "Almost Since Then",
    objective: "Finish something left nearly complete years ago",
    completion:
      "Choose a game with an old achievement, challenge, or collectible set already close to completion. Make one honest attempt to close that specific gap and stop afterward.",
    durationMinutes: 40,
    rewardPoints: 250,
    tipIds: ["oneTrack", "noOutsideHelp"],
  },
  {
    id: "original-vs-remaster",
    title: "Before the Remaster",
    objective: "Compare a remembered original with its newer form",
    completion:
      "Choose a game available in original and remastered form. Play the same opening area in one version for 15 minutes, then the other for 15, ending with the one whose feel you prefer.",
    durationMinutes: 30,
    rewardPoints: 220,
    tipIds: ["basicTools", "firstTake"],
  },
  {
    id: "original-settings",
    title: "How You Used to Play",
    objective: "Restore the settings that defined an older play habit",
    completion:
      "Choose a familiar game and use its original difficulty, camera, control scheme, or display mode as closely as available. Complete one activity without modern convenience changes.",
    durationMinutes: 30,
    rewardPoints: 200,
    tipIds: ["fixedKit", "minimalHud"],
  },
  {
    id: "muscle-memory-mechanic",
    title: "The Move Your Hands Kept",
    objective: "Center a session on one remembered mechanic",
    completion:
      "Choose a game where one jump, combo, drift, build order, or interaction still feels stored in your hands. Use it successfully in three different moments.",
    durationMinutes: 25,
    rewardPoints: 200,
    tipIds: ["oneMove", "threeAttempts"],
  },
  {
    id: "legacy-character",
    title: "Your Former Main",
    objective: "Play the character you once selected first",
    completion:
      "Choose a game with a character, class, fighter, hero, or vehicle you used to main. Keep that choice for one full match, mission, or run without updating the build.",
    durationMinutes: 30,
    rewardPoints: 200,
    tipIds: ["fixedKit", "noUpgrades"],
  },
  {
    id: "one-last-revisit",
    title: "Leave the Light On",
    objective: "Give a dormant favorite one complete return",
    completion:
      "Choose the old favorite game you are least likely to reinstall or reopen again soon. Complete one representative activity, take one screenshot, and leave from a safe stopping point.",
    durationMinutes: 35,
    rewardPoints: 220,
    tipIds: ["photoProof", "cleanExit"],
  }
]);
