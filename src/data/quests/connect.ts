import { defineMoodDeck } from "./defineMoodDeck";

export const CONNECT_QUESTS = defineMoodDeck("connect", [
  {
    id: "connect-lift-the-lowest",
    title: "Old Squad, Solo",
    objective: "Play a former friends-only game by yourself",
    completion:
      "Choose a game you mainly associate with old friends and launch its solo mode while that group is unavailable. Complete one full activity on your own.",
    durationMinutes: 35,
    rewardPoints: 220,
    tipIds: ["fixedKit", "letItStand"],
  },
  {
    id: "connect-follow-their-lead",
    title: "Old Squad, New Lobby",
    objective: "Play an old group game with random players",
    completion:
      "Choose a game you used to play with friends, enter its public matchmaking, and stay with the random team through one complete result screen.",
    durationMinutes: 35,
    rewardPoints: 220,
    tipIds: ["quietLobby", "holdYourRole"],
  },
  {
    id: "connect-share-the-upgrade",
    title: "Their Recommendation",
    objective: "Play the game a friend wanted you to try",
    completion:
      "Choose one game a friend recommended, gifted, or repeatedly mentioned and launch it without checking reviews first. Reach its first meaningful result or play 30 active minutes.",
    durationMinutes: 30,
    rewardPoints: 200,
    tipIds: ["borrowedStyle", "noOutsideHelp"],
  },
  {
    id: "connect-rescue-route",
    title: "Open Matchmaking",
    objective: "Play a co-op game with strangers",
    completion:
      "Choose a co-op or team game with public matchmaking and queue for its shortest complete activity. Stay through the shared result.",
    durationMinutes: 35,
    rewardPoints: 220,
    tipIds: ["helpFirst", "quietLobby"],
  },
  {
    id: "connect-set-up-the-finish",
    title: "Shared World",
    objective: "Play a game where other people are already present",
    completion:
      "Choose an MMO, shared-world game, public sandbox, or populated server. Join one public event, group objective, or communal space.",
    durationMinutes: 40,
    rewardPoints: 250,
    tipIds: ["helpFirst", "oneMoreCorner"],
  },
  {
    id: "connect-trade-roles",
    title: "One Name, One Game",
    objective: "Let one person choose the game in your memory",
    completion:
      "Think of one person you miss playing with, then launch the game most strongly associated with them. Invite them if available; otherwise complete one activity solo or with randoms.",
    durationMinutes: 35,
    rewardPoints: 220,
    tipIds: ["firstInstinct", "cleanExit"],
  },
  {
    id: "connect-global-ghost",
    title: "Chase a Ghost",
    objective: "Choose a game where another player's recorded run can lead yours",
    completion:
      "Launch an owned game with ghosts, leaderboard replays, shared routes, or recorded attempts. Follow one player's run through the same course or challenge and submit one complete result of your own.",
    durationMinutes: 25,
    rewardPoints: 180,
    tipIds: ["minimalHud", "letItStand"],
  },
  {
    id: "connect-daily-crowd",
    title: "Same Challenge, Same Day",
    objective: "Play the owned game with a challenge many people receive today",
    completion:
      "Choose a game offering a global daily puzzle, run, race, scenario, or objective. Complete it once and view the shared result or comparison screen before leaving.",
    durationMinutes: 25,
    rewardPoints: 180,
    tipIds: ["letItStand", "noRestart"],
  },
  {
    id: "connect-player-made-door",
    title: "Made by a Player",
    objective: "Choose a game containing levels, maps, scenarios, or stories made by its community",
    completion:
      "Launch an owned game with user-created content, choose one recent or lightly played creation instead of a featured favorite, and finish it or reach its published endpoint.",
    durationMinutes: 30,
    rewardPoints: 200,
    tipIds: ["noOutsideHelp", "leaveAGift"],
  },
  {
    id: "connect-leave-a-signal",
    title: "Leave a Signal",
    objective: "Play a game where your actions can help an unseen player later",
    completion:
      "Choose an owned game with messages, signs, gifts, shared resources, graves, hints, or asynchronous traces. Leave one useful signal through the game's own system and reach the next checkpoint.",
    durationMinutes: 30,
    rewardPoints: 200,
    tipIds: ["leaveAGift", "cleanExit"],
  },
  {
    id: "connect-shared-save-return",
    title: "Shared Save",
    objective: "Return to a world or character that someone helped you shape",
    completion:
      "Choose an owned game with a save, team, build, settlement, or character once created alongside someone else. Reopen it and complete one activity that visibly changes its current state.",
    durationMinutes: 35,
    rewardPoints: 220,
    tipIds: ["holdYourRole", "stayTogether"],
  },
  {
    id: "connect-watched-first",
    title: "From Watching to Playing",
    objective: "Play the game you first knew as someone else's performance",
    completion:
      "Choose an owned game you originally encountered through a stream, tournament, sibling, friend, or video. Play the mode or opening section you remember watching until one complete result.",
    durationMinutes: 30,
    rewardPoints: 200,
    tipIds: ["borrowedStyle", "fixedKit"],
  },
  {
    id: "connect-creator-signature",
    title: "Follow the Creator",
    objective: "Choose a game because you recognize one of the people or teams behind it",
    completion:
      "Pick a developer, designer, writer, artist, composer, studio, or small team whose work interests you, then launch one owned game carrying that signature. Complete one chapter, match, mission, or 30 active minutes.",
    durationMinutes: 30,
    rewardPoints: 200,
    tipIds: ["borrowedStyle", "noOutsideHelp"],
  },
  {
    id: "connect-showpiece-session",
    title: "The Game You Would Show",
    objective: "Play the owned game you would most enjoy introducing to a curious visitor",
    completion:
      "Imagine someone asks why games matter to you, choose the title you would open first, and play one self-contained scene, level, match, or activity that demonstrates your answer.",
    durationMinutes: 25,
    rewardPoints: 180,
    tipIds: ["photoProof", "firstTake"],
  },
  {
    id: "connect-community-mod",
    title: "Community Remix",
    objective: "Choose a game transformed by something its players made",
    completion:
      "Launch an owned game with a safe installed mod, workshop item, custom ruleset, fan patch, or community scenario. Use that creation through one complete activity or visible endpoint.",
    durationMinutes: 35,
    rewardPoints: 220,
    tipIds: ["letItStand", "noOutsideHelp"],
  },
  {
    id: "connect-same-seed",
    title: "Same Starting Point",
    objective: "Play a game where others can begin from the same seed or setup",
    completion:
      "Choose an owned game with a fixed seed, shared scenario, generated puzzle code, or standardized opening. Complete one run from a publicly available or built-in setup and view its final result.",
    durationMinutes: 35,
    rewardPoints: 220,
    tipIds: ["fixedKit", "letItStand"],
  },
  {
    id: "connect-common-language",
    title: "Join the Conversation Late",
    objective: "Choose the owned game people discussed while you stayed outside it",
    completion:
      "Launch one owned game whose characters, choices, strategies, or moments you have heard others reference but never understood firsthand. Reach the first scene or system that makes one reference clearer.",
    durationMinutes: 40,
    rewardPoints: 250,
    tipIds: ["noOutsideHelp", "oneTrack"],
  },
  {
    id: "connect-friends-leaderboard",
    title: "Names on the Board",
    objective: "Play the game where familiar names still appear in recorded results",
    completion:
      "Choose an owned game with a friends leaderboard, old club table, saved scores, or shared records. Complete the same event as one familiar name and post one valid result beside theirs.",
    durationMinutes: 25,
    rewardPoints: 180,
    tipIds: ["fixedKit", "letItStand"],
  },
  {
    id: "connect-asynchronous-turn",
    title: "Your Turn Waiting",
    objective: "Choose a game that lets people share play at different times",
    completion:
      "Launch an owned game with asynchronous matches, correspondence turns, shared planning, or delayed challenges. Take one meaningful turn or complete one pending action and submit it.",
    durationMinutes: 20,
    rewardPoints: 150,
    tipIds: ["measuredPace", "letItStand"],
  },
  {
    id: "connect-community-build",
    title: "Add One Piece",
    objective: "Play a game with a shared goal larger than one player's session",
    completion:
      "Choose an owned game with a community construction, global campaign, faction effort, server project, or collective event. Contribute one visible unit of progress and reach its confirmation screen.",
    durationMinutes: 35,
    rewardPoints: 220,
    tipIds: ["localMaterials", "leaveAGift"],
  },
  {
    id: "connect-replay-company",
    title: "Learn Beside a Replay",
    objective: "Choose a game where another player's decisions can accompany yours",
    completion:
      "Launch an owned game with match replays, solution traces, shared timelines, or spectator recordings. Watch one short segment, then play the same map, matchup, puzzle, or scenario to one complete result.",
    durationMinutes: 30,
    rewardPoints: 200,
    tipIds: ["borrowedStyle", "oneMove"],
  },
  {
    id: "connect-pass-it-on",
    title: "Worth Recommending",
    objective: "Play the owned game you would most thoughtfully recommend to one person",
    completion:
      "Picture one person whose taste you understand, choose the game in your library that fits them, and complete one representative activity before deciding the single reason you would recommend it.",
    durationMinutes: 30,
    rewardPoints: 200,
    tipIds: ["photoProof", "cleanExit"],
  },
  {
    id: "connect-quiet-lobby",
    title: "No Microphone Needed",
    objective: "Choose a multiplayer game where cooperation can happen without voice chat",
    completion:
      "Launch an owned team or co-op game with public play and usable pings, emotes, gestures, or visible roles. Complete one shared activity using only those in-game signals.",
    durationMinutes: 30,
    rewardPoints: 200,
    tipIds: ["quietLobby", "helpFirst"],
  },
  {
    id: "connect-borrow-their-style",
    title: "Borrow Their Style",
    objective: "Play a game using the approach of someone you remember watching",
    completion:
      "Choose an owned game associated with a friend, relative, creator, rival, or teammate whose playstyle differed from yours. Use their characteristic role, route, character, or strategy through one full activity.",
    durationMinutes: 30,
    rewardPoints: 200,
    tipIds: ["borrowedStyle", "fixedKit"],
  },
  {
    id: "connect-community-tactic",
    title: "Try What Players Discovered",
    objective: "Choose a game because its community found a strategy you have never tested",
    completion:
      "Recall one build, route, technique, formation, or solution you learned from other players, then launch its game and use that idea through one complete encounter or scenario.",
    durationMinutes: 35,
    rewardPoints: 220,
    tipIds: ["borrowedStyle", "threeAttempts"],
  },
  {
    id: "connect-fandom-doorway",
    title: "A World You Share",
    objective: "Play a game connected to a story, sport, hobby, or universe people care about together",
    completion:
      "Choose an owned game tied to a wider fandom that matters to you, then complete one chapter, event, match, case, or journey that expresses what draws people to that world.",
    durationMinutes: 35,
    rewardPoints: 220,
    tipIds: ["followTheLocal", "noOutsideHelp"],
  },
  {
    id: "connect-small-kindness",
    title: "One Helpful Act",
    objective: "Choose a game where you can make a stranger's session easier",
    completion:
      "Launch an owned online game where helping is visible. Complete one activity after reviving, guiding, supplying, protecting, teaching through play, or sincerely commending another player once.",
    durationMinutes: 35,
    rewardPoints: 220,
    tipIds: ["helpFirst", "leaveAGift"],
  },
  {
    id: "connect-parallel-company",
    title: "Play Beside a Voice",
    objective: "Choose a game calm enough to share attention with recorded company",
    completion:
      "Pick an owned game whose familiar loop works while listening to a saved podcast, interview, stream archive, or voice message that makes you feel accompanied. Complete one full in-game activity before the audio ends.",
    durationMinutes: 40,
    rewardPoints: 220,
    tipIds: ["stayTogether", "quietLobby"],
  },
  {
    id: "connect-memory-reconstruction",
    title: "Rebuild the Memory",
    objective: "Choose a game containing a shared moment you can still picture",
    completion:
      "Recall a funny mistake, dramatic win, strange discovery, or quiet place from playing near someone else. Launch that owned game and revisit the same map, mode, location, or closest available equivalent.",
    durationMinutes: 30,
    rewardPoints: 200,
    tipIds: ["firstTake", "noUndo"],
  },
  {
    id: "connect-one-viewer-clip",
    title: "For One Future Viewer",
    objective: "Play the game whose next moment you would most like to show someone",
    completion:
      "Choose an owned game with a scene, system, performance, or surprise worth sharing. Complete one activity and save a single screenshot or short clip that communicates why you chose it.",
    durationMinutes: 30,
    rewardPoints: 200,
    tipIds: ["photoProof", "firstTake"],
  }
]);
