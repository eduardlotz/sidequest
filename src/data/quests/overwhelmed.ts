import { defineMoodDeck } from "./defineMoodDeck";

export const OVERWHELMED_QUESTS = defineMoodDeck("overwhelmed", [
  {
    id: "smallest-install",
    title: "Smallest Door",
    objective: "Let the smallest installed game narrow the choice",
    completion:
      "Sort or scan your installed games by size and choose one of the three smallest that can deliver a complete activity. Launch it immediately and finish one contained result.",
    durationMinutes: 20,
    rewardPoints: 150,
    tipIds: ["oneTrack", "cleanExit"],
  },
  {
    id: "shortest-promised-time",
    title: "Twenty Minutes Is Enough",
    objective: "Choose the game that can finish something fastest",
    completion:
      "Pick an owned game with a level, round, puzzle, or day you can complete within 20 minutes. Start before changing any settings and stop at the first clear finish.",
    durationMinutes: 20,
    rewardPoints: 150,
    tipIds: ["fixedKit", "cleanExit"],
  },
  {
    id: "no-setup-needed",
    title: "Already Ready",
    objective: "Play the game requiring no preparation tonight",
    completion:
      "Choose an installed game with working controls, a usable save, and no required update or account setup. Begin its nearest activity and complete one natural unit.",
    durationMinutes: 25,
    rewardPoints: 180,
    tipIds: ["oneTrack", "fixedKit"],
  },
  {
    id: "nearest-checkpoint",
    title: "One Step From Here",
    objective: "Resume the save with the clearest immediate action",
    completion:
      "Choose the in-progress game whose next action you can state in one sentence. Load it and do only that action, stopping at the next checkpoint or safe state.",
    durationMinutes: 25,
    rewardPoints: 180,
    tipIds: ["oneTrack", "cleanExit"],
  },
  {
    id: "fewest-buttons",
    title: "Light in the Hands",
    objective: "Choose the game with the lightest control demand",
    completion:
      "Pick a game or mode built around a small set of inputs. Complete one level, scene, puzzle, or 25 active minutes without opening advanced move lists.",
    durationMinutes: 25,
    rewardPoints: 180,
    tipIds: ["oneTool", "minimalHud"],
  },
  {
    id: "first-installed-row",
    title: "First Playable Row",
    objective: "Reduce the library to the first visible row",
    completion:
      "Open the installed-games view and consider only the first fully visible row. Choose the first title there that can produce a complete activity and play that activity once.",
    durationMinutes: 25,
    rewardPoints: 180,
    tipIds: ["firstInstinct", "oneTrack"],
  },
  {
    id: "one-letter-shelf",
    title: "One Letter Only",
    objective: "Use one letter to make the library small",
    completion:
      "Use the first letter of your current weekday and consider only owned games beginning with it. Choose the shortest playable match and complete one activity.",
    durationMinutes: 25,
    rewardPoints: 180,
    tipIds: ["letItStand", "cleanExit"],
  },
  {
    id: "single-cover-pull",
    title: "The Cover That Calms",
    objective: "Let one visual reaction choose without analysis",
    completion:
      "Look at no more than six installed game covers and choose the one that creates the clearest sense of relief. Launch it and remain for one complete activity.",
    durationMinutes: 30,
    rewardPoints: 180,
    tipIds: ["firstInstinct", "minimalHud"],
  },
  {
    id: "safe-mode",
    title: "Lowest Stakes",
    objective: "Use the most forgiving mode already available",
    completion:
      "Choose a game offering story mode, practice, sandbox, bots, or another low-stakes option. Enter that mode and complete one self-contained objective without raising difficulty.",
    durationMinutes: 25,
    rewardPoints: 150,
    tipIds: ["letItStand", "cleanExit"],
  },
  {
    id: "no-inventory-session",
    title: "Hands Off the Inventory",
    objective: "Play without managing equipment or resources",
    completion:
      "Choose a game or mode where the current loadout is already usable. Complete one activity without opening inventory, crafting, build, or upgrade screens.",
    durationMinutes: 30,
    rewardPoints: 200,
    tipIds: ["fixedKit", "noLooting"],
  },
  {
    id: "one-marker-only",
    title: "The Nearest Marker",
    objective: "Let one nearby objective contain the whole session",
    completion:
      "Choose an in-progress game with a visible nearby marker. Travel to the closest one, complete only that objective, and leave from the next safe state.",
    durationMinutes: 30,
    rewardPoints: 200,
    tipIds: ["oneTrack", "cleanExit"],
  },
  {
    id: "closest-completion",
    title: "Nearest Finish",
    objective: "Choose the game closest to a meaningful ending",
    completion:
      "Compare only current chapter, mission, or run progress in three games. Launch the one nearest a natural finish and complete that unit without starting another.",
    durationMinutes: 40,
    rewardPoints: 220,
    tipIds: ["oneTrack", "cleanExit"],
  },
  {
    id: "tutorial-free",
    title: "No Relearning Tonight",
    objective: "Return to controls you already understand",
    completion:
      "Choose a game whose core controls you remember without a tutorial. Complete one familiar activity using the current settings and loadout exactly as found.",
    durationMinutes: 25,
    rewardPoints: 180,
    tipIds: ["fixedKit", "basicTools"],
  },
  {
    id: "single-screen-game",
    title: "One Screen at a Time",
    objective: "Play something whose whole problem fits on screen",
    completion:
      "Choose a puzzle, arcade, tactics, card, or compact game with one visible board or arena. Finish one board, round, or attempt before considering anything else.",
    durationMinutes: 25,
    rewardPoints: 180,
    tipIds: ["minimalHud", "noOutsideHelp"],
  },
  {
    id: "pause-guaranteed",
    title: "It Will Wait",
    objective: "Choose a game that can pause whenever you need",
    completion:
      "Pick a solo game with reliable pause or suspend behavior. Start one activity, use pause once deliberately, then return and finish the same activity.",
    durationMinutes: 30,
    rewardPoints: 180,
    tipIds: ["measuredPace", "cleanExit"],
  },
  {
    id: "no-dialogue-choice",
    title: "Let the Game Lead",
    objective: "Play something that does not ask you to shape the story",
    completion:
      "Choose a linear, arcade, rhythm, racing, or authored game with few narrative choices. Follow its next level or scene through one clear finish.",
    durationMinutes: 30,
    rewardPoints: 180,
    tipIds: ["oneTrack", "letItStand"],
  },
  {
    id: "one-match-contract",
    title: "Exactly One Match",
    objective: "Make one result the entire commitment",
    completion:
      "Choose the multiplayer, sports, fighting, racing, or strategy game with the quickest familiar queue. Play exactly one complete match and leave after the result screen.",
    durationMinutes: 25,
    rewardPoints: 180,
    tipIds: ["fixedKit", "cleanExit"],
  },
  {
    id: "one-room-boundary",
    title: "Stay in One Room",
    objective: "Choose a game where one space can hold the session",
    completion:
      "Pick a game with a room, base, plot, workshop, or small zone that needs attention. Improve or complete one thing there without leaving the area.",
    durationMinutes: 25,
    rewardPoints: 180,
    tipIds: ["oneRoom", "oneTool"],
  },
  {
    id: "single-verb",
    title: "One Verb",
    objective: "Choose by the action you can tolerate right now",
    completion:
      "Decide between moving, building, solving, talking, fighting, or tending. Choose one installed game centered on that verb and complete its smallest meaningful loop.",
    durationMinutes: 25,
    rewardPoints: 180,
    tipIds: ["oneTool", "oneTrack"],
  },
  {
    id: "visible-timer",
    title: "Stop Is Already Decided",
    objective: "Use a firm short boundary instead of judging energy",
    completion:
      "Choose any installed game that can begin within two minutes. Play one continuous 20-minute session, then stop at the next safe point without extending the decision.",
    durationMinutes: 25,
    rewardPoints: 180,
    tipIds: ["oneTrack", "cleanExit"],
  },
  {
    id: "platform-recent",
    title: "Let the Console Remember",
    objective: "Use recent-play history as the whole shortlist",
    completion:
      "Consider only the three most recently played games shown by the platform. Choose the one with the clearest next action and finish that action once.",
    durationMinutes: 25,
    rewardPoints: 180,
    tipIds: ["firstInstinct", "oneTrack"],
  },
  {
    id: "controller-ready",
    title: "The Controller Is Enough",
    objective: "Choose something fully playable from where you are sitting",
    completion:
      "Pick a game that needs no keyboard, phone, headset, guide, or setup beyond the controller already in hand. Complete one level, match, or 25 active minutes.",
    durationMinutes: 25,
    rewardPoints: 180,
    tipIds: ["fixedKit", "cleanExit"],
  },
  {
    id: "no-update-door",
    title: "No Waiting Room",
    objective: "Play the first suitable game that is ready now",
    completion:
      "Check only whether installed games can launch without an update. Choose the first ready game that offers a complete activity and begin it immediately.",
    durationMinutes: 25,
    rewardPoints: 180,
    tipIds: ["firstInstinct", "oneTrack"],
  },
  {
    id: "familiar-interface",
    title: "Menus You Know",
    objective: "Return to the game whose interface needs no thought",
    completion:
      "Choose a game where you already know how to save, start an activity, and stop safely. Complete one familiar unit without visiting settings or customization.",
    durationMinutes: 25,
    rewardPoints: 180,
    tipIds: ["fixedKit", "minimalHud"],
  },
  {
    id: "one-save-only",
    title: "One Save File",
    objective: "Let a single existing save answer the question",
    completion:
      "Choose the first game you find with exactly one obvious current save or campaign. Load it and reach the next save point without comparing other games.",
    durationMinutes: 30,
    rewardPoints: 200,
    tipIds: ["oneTrack", "letItStand"],
  },
  {
    id: "finite-run",
    title: "A Run With an Ending",
    objective: "Choose a game that naturally resets after one attempt",
    completion:
      "Pick a roguelike, arcade, score attack, race, puzzle run, or survival mode with a clear endpoint. Complete one run and accept its result.",
    durationMinutes: 30,
    rewardPoints: 200,
    tipIds: ["noRestart", "letItStand"],
  },
  {
    id: "default-build",
    title: "Use the Default",
    objective: "Remove the loadout decision from the session",
    completion:
      "Choose a game offering a default, recommended, starter, or saved build. Use it unchanged through one complete match, mission, or run.",
    durationMinutes: 30,
    rewardPoints: 200,
    tipIds: ["fixedKit", "noUpgrades"],
  },
  {
    id: "default-difficulty",
    title: "Recommended Means Decided",
    objective: "Accept the game's recommended difficulty",
    completion:
      "Choose a game with a recommended or normal difficulty and start the nearest activity at that setting. Do not reopen difficulty options during the quest.",
    durationMinutes: 30,
    rewardPoints: 180,
    tipIds: ["letItStand", "fixedKit"],
  },
  {
    id: "fewest-open-threads",
    title: "The Quietest Save",
    objective: "Play the save with the fewest competing objectives",
    completion:
      "Choose an in-progress game whose current screen shows the smallest number of active quests, markers, or systems. Complete the single clearest objective there.",
    durationMinutes: 30,
    rewardPoints: 200,
    tipIds: ["oneTrack", "minimalHud"],
  },
  {
    id: "stop-rule-first",
    title: "Exit Written First",
    objective: "Choose the stopping point before choosing the game",
    completion:
      "Name one finish—one match, one chapter, one save point, or 30 minutes—then choose the first installed game that fits it. Stop exactly at the boundary you named.",
    durationMinutes: 30,
    rewardPoints: 200,
    tipIds: ["firstInstinct", "cleanExit"],
  }
]);
