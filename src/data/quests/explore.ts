import { defineMoodDeck } from "./defineMoodDeck";

export const EXPLORE_QUESTS = defineMoodDeck("explore", [
  {
    id: "explore-wrong-turn",
    title: "Blind Scroll",
    objective: "Let chance choose one installed game",
    completion:
      "Open your installed library, scroll continuously for three seconds without reading, stop, and launch the first playable title centered on screen. Play one complete activity or 25 active minutes.",
    durationMinutes: 25,
    rewardPoints: 180,
    tipIds: ["noMap", "oneMoreCorner"],
  },
  {
    id: "explore-follow-the-signal",
    title: "Stars Above",
    objective: "Play a game set beyond Earth",
    completion:
      "Choose an owned game set in space, on another planet, or aboard a spacecraft and launch the first strong match that comes to mind. Reach one location, encounter, or discovery.",
    durationMinutes: 35,
    rewardPoints: 220,
    tipIds: ["landmarksOnly", "noMap"],
  },
  {
    id: "explore-edge-of-known",
    title: "Old Kingdom",
    objective: "Enter a mythic or fantasy world",
    completion:
      "Choose a game with castles, magic, monsters, legends, or ancient ruins and launch it. Complete one quest, expedition, chapter, or dungeon section.",
    durationMinutes: 40,
    rewardPoints: 250,
    tipIds: ["longWay", "oneMoreCorner"],
  },
  {
    id: "explore-mechanic-safari",
    title: "Neon After Dark",
    objective: "Play a game set in a city with a pulse",
    completion:
      "Choose a game set in a modern, futuristic, cyberpunk, or noir city and launch the one whose streets you most want to see. Complete one activity in a single district.",
    durationMinutes: 35,
    rewardPoints: 220,
    tipIds: ["useWhatYouFind", "oneTool"],
  },
  {
    id: "explore-landmark-navigation",
    title: "Into the Wild",
    objective: "Disappear into an untamed game world",
    completion:
      "Choose a game dominated by wilderness, ocean, desert, jungle, mountains, or prehistoric nature. Reach one landmark or survive one complete expedition.",
    durationMinutes: 40,
    rewardPoints: 250,
    tipIds: ["landmarksOnly", "minimalHud"],
  },
  {
    id: "explore-behind-the-obvious",
    title: "Another Time",
    objective: "Play a game set in history—or rewrite it",
    completion:
      "Choose a game set in a historical era or an alternate version of history that interests you tonight. Complete one event, battle, journey, or chapter there.",
    durationMinutes: 40,
    rewardPoints: 250,
    tipIds: ["oneMoreCorner", "noOutsideHelp"],
  },
  {
    id: "explore-below-surface",
    title: "Below the Surface",
    objective: "Choose a game that can take you underwater",
    completion:
      "Pick an owned game with an ocean, lake, flooded place, submarine, reef, or underwater passage. Reach one submerged location and discover, collect, or complete something there.",
    durationMinutes: 35,
    rewardPoints: 220,
    tipIds: ["noMap", "oneMoreCorner"],
  },
  {
    id: "explore-world-underfoot",
    title: "World Underfoot",
    objective: "Enter a game that hides something underground",
    completion:
      "Choose a game with caves, tunnels, mines, buried cities, bunkers, or deep facilities. Enter one underground area and reach a landmark, chamber, exit, or clear discovery.",
    durationMinutes: 40,
    rewardPoints: 230,
    tipIds: ["groundLevel", "noMap"],
  },
  {
    id: "explore-borrowed-body",
    title: "Borrowed Body",
    objective: "Play from a perspective that is not human",
    completion:
      "Choose an owned game where you can be an animal, creature, machine, spirit, object, or other nonhuman presence. Use one ability that only this form makes possible and finish one activity.",
    durationMinutes: 30,
    rewardPoints: 200,
    tipIds: ["fixedKit", "firstInstinct"],
  },
  {
    id: "explore-other-camera",
    title: "Another Pair of Eyes",
    objective: "Choose a game with a viewpoint you rarely use",
    completion:
      "Pick a game shown from a camera perspective you have played less lately: first-person, side view, top-down, isometric, fixed camera, or something stranger. Complete one level, encounter, or 30 active minutes.",
    durationMinutes: 30,
    rewardPoints: 200,
    tipIds: ["groundLevel", "minimalHud"],
  },
  {
    id: "explore-genre-detour",
    title: "Genre Detour",
    objective: "Visit the shelf you usually pass by",
    completion:
      "Identify a genre in your owned library that you rarely choose, then launch the title in it with the clearest immediate appeal. Complete its first activity or play for 35 active minutes.",
    durationMinutes: 35,
    rewardPoints: 220,
    tipIds: ["oppositeInstinct", "letItStand"],
  },
  {
    id: "explore-physical-rule",
    title: "Touch the Rules",
    objective: "Play a game built around an unusual physical interaction",
    completion:
      "Choose a game where pushing, stacking, swinging, drawing, reshaping, balancing, grappling, or manipulating objects matters. Use its central interaction to solve one complete situation.",
    durationMinutes: 30,
    rewardPoints: 210,
    tipIds: ["oneTool", "noOutsideHelp"],
  },
  {
    id: "explore-follow-clue",
    title: "Follow One Clue",
    objective: "Choose a game that lets you investigate",
    completion:
      "Pick an owned game with mysteries, tracks, evidence, hidden objects, environmental clues, or unanswered questions. Follow one clue until it produces a discovery or a new concrete lead.",
    durationMinutes: 35,
    rewardPoints: 220,
    tipIds: ["noOutsideHelp", "noMarkers"],
  },
  {
    id: "explore-command-view",
    title: "See the Whole Board",
    objective: "Choose a game where you guide more than one character",
    completion:
      "Pick a strategy, tactics, management, squad, party, or simulation game where you direct a group or system. Make one plan and carry it through one turn, encounter, day, or objective.",
    durationMinutes: 40,
    rewardPoints: 230,
    tipIds: ["oneTrack", "letItStand"],
  },
  {
    id: "explore-play-by-ear",
    title: "Play by Ear",
    objective: "Choose a game where sound changes how you play",
    completion:
      "Pick a game with rhythm, musical input, sound-based navigation, reactive audio, or important listening cues. Complete one song, stage, encounter, or sound-led discovery.",
    durationMinutes: 25,
    rewardPoints: 190,
    tipIds: ["listenFirst", "minimalHud"],
  },
  {
    id: "explore-movement-language",
    title: "Movement Is the Map",
    objective: "Choose a game because of how it lets you move",
    completion:
      "Pick an owned game featuring a movement style you want to feel: climbing, gliding, skating, swinging, teleporting, drifting, bouncing, or another distinct motion. Cross one complete area using it.",
    durationMinutes: 30,
    rewardPoints: 210,
    tipIds: ["noMap", "measuredPace"],
  },
  {
    id: "explore-words-have-weight",
    title: "Words Have Weight",
    objective: "Choose a game where conversation can change the outcome",
    completion:
      "Pick a game with dialogue choices, persuasion, relationships, interrogation, or branching conversations. Complete one exchange that produces a visible reaction, decision, or consequence.",
    durationMinutes: 30,
    rewardPoints: 210,
    tipIds: ["firstInstinct", "letItStand"],
  },
  {
    id: "explore-small-world-big-idea",
    title: "Small World, Big Idea",
    objective: "Choose the simplest-looking game with a strange premise",
    completion:
      "Find an owned game with spare visuals, a compact scope, or a very simple interface but an idea you cannot explain immediately. Play until its central rule becomes clear or for 30 active minutes.",
    durationMinutes: 30,
    rewardPoints: 200,
    tipIds: ["oneRoom", "noMap"],
  },
  {
    id: "explore-never-same-twice",
    title: "Never the Same Twice",
    objective: "Choose a game that creates a fresh situation for you",
    completion:
      "Pick a game with generated worlds, shuffled levels, changing scenarios, random encounters, or improvised runs. Start one fresh attempt and play until its first major outcome.",
    durationMinutes: 35,
    rewardPoints: 220,
    tipIds: ["noRestart", "letItStand"],
  },
  {
    id: "explore-one-word-door",
    title: "One-Word Door",
    objective: "Let the shortest title in your library open the night",
    completion:
      "Find an owned game with a one-word title; if several qualify, choose the word that creates the strongest question. Launch it and complete one activity or 30 active minutes.",
    durationMinutes: 30,
    rewardPoints: 190,
    tipIds: ["oppositeInstinct", "firstInstinct"],
  },
  {
    id: "explore-color-beacon",
    title: "Color Beacon",
    objective: "Choose a cover by the color that pulls you in",
    completion:
      "Name a color you want to see tonight, then scan your owned library and launch the first cover where that color clearly leads. Find one scene, effect, object, or place inside the game that echoes it.",
    durationMinutes: 30,
    rewardPoints: 190,
    tipIds: ["onePalette", "noMap"],
  },
  {
    id: "explore-earliest-release",
    title: "Before Your Habits",
    objective: "Play one of the oldest-designed games you own",
    completion:
      "Choose an owned game whose original release is earlier than most of your library, including ports or remasters. Reach one checkpoint, clear one stage, or play for 30 active minutes.",
    durationMinutes: 30,
    rewardPoints: 200,
    tipIds: ["basicTools", "noOutsideHelp"],
  },
  {
    id: "explore-genre-collision",
    title: "Two Genres Walk In",
    objective: "Choose a game that combines things you do not expect together",
    completion:
      "Pick an owned game that blends two genres, systems, tones, or play styles in a way that feels unusual. Reach one moment where both sides of the combination are visible.",
    durationMinutes: 40,
    rewardPoints: 230,
    tipIds: ["fixedKit", "oppositeInstinct"],
  },
  {
    id: "explore-no-straight-line",
    title: "No Straight Line",
    objective: "Choose a game that lets you decide where to go next",
    completion:
      "Pick a game with branching routes, open maps, selectable stages, multiple objectives, or a non-linear structure. Choose one path for curiosity alone and follow it to a landmark or endpoint.",
    durationMinutes: 40,
    rewardPoints: 230,
    tipIds: ["noMap", "oneMoreCorner"],
  },
  {
    id: "explore-failure-teaches",
    title: "What Failure Knows",
    objective: "Choose a game where losing reveals something new",
    completion:
      "Pick a game where failed attempts uncover information, open routes, change the world, or teach a readable pattern. Complete one attempt and use what it taught you in the next.",
    durationMinutes: 35,
    rewardPoints: 220,
    tipIds: ["noRestart", "letItStand"],
  },
  {
    id: "explore-unusual-job",
    title: "An Unusual Shift",
    objective: "Try the strangest job your library can offer",
    completion:
      "Choose a game that casts you as a worker, operator, caretaker, merchant, investigator, builder, driver, or another defined role unlike your day. Complete one full task or work cycle.",
    durationMinutes: 35,
    rewardPoints: 220,
    tipIds: ["holdYourRole", "fixedKit"],
  },
  {
    id: "explore-without-combat",
    title: "Another Kind of Action",
    objective: "Choose a game where progress does not depend on fighting",
    completion:
      "Pick an owned game or mode centered on movement, conversation, building, solving, trading, performance, observation, or care. Complete one meaningful activity without defeating an enemy.",
    durationMinutes: 30,
    rewardPoints: 210,
    tipIds: ["noCombat", "helpFirst"],
  },
  {
    id: "explore-scale-shift",
    title: "Change the Scale",
    objective: "Choose a game that makes you feel unusually tiny or vast",
    completion:
      "Pick a game where the playable character, world, or objects create a striking sense of scale. Reach one scene that clearly makes you feel smaller or larger than usual.",
    durationMinutes: 30,
    rewardPoints: 210,
    tipIds: ["groundLevel", "photoProof"],
  },
  {
    id: "explore-rule-you-doubt",
    title: "That Cannot Work",
    objective: "Choose the game with the premise you most want to test",
    completion:
      "Scan your owned games for a mechanic or premise that sounds implausible, awkward, or too strange to work. Launch it and play until you can name one reason it succeeds or fails.",
    durationMinutes: 35,
    rewardPoints: 220,
    tipIds: ["noOutsideHelp", "noRestart"],
  },
  {
    id: "explore-opposite-choice",
    title: "The Other Instinct",
    objective: "Choose a game that invites a different kind of decision",
    completion:
      "Pick a game with meaningful choices and take one path unlike your usual instinct: merciful instead of forceful, direct instead of cautious, communal instead of solitary, or the reverse. Reach its visible consequence.",
    durationMinutes: 40,
    rewardPoints: 230,
    tipIds: ["oppositeInstinct", "letItStand"],
  }
]);
