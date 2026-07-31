import { defineMoodDeck } from "./defineMoodDeck";

export const CURIOUS_QUESTS = defineMoodDeck("curious", [
  {
    id: "strangest-installed",
    title: "The Strangest Cover",
    objective: "Open the installed game you understand least",
    completion:
      "Scan only installed titles and choose the one whose name, cover, or premise gives you the least certainty. Launch it without reading a review and reach its first complete activity.",
    durationMinutes: 30,
    rewardPoints: 200,
    tipIds: ["noOutsideHelp", "firstInstinct"],
  },
  {
    id: "untried-mechanic",
    title: "A Verb You Have Not Used",
    objective: "Choose a game built around an unfamiliar action",
    completion:
      "Pick an owned game centered on a mechanic you rarely play—negotiating, programming, climbing, photographing, cooking, commanding, or another unusual verb. Complete its first meaningful use.",
    durationMinutes: 35,
    rewardPoints: 220,
    tipIds: ["oneTool", "noOutsideHelp"],
  },
  {
    id: "genre-hybrid",
    title: "Two Genres at Once",
    objective: "Play the game whose categories seem least compatible",
    completion:
      "Choose an owned game that combines two genres you would not naturally pair. Play one complete activity and identify the moment where both halves matter together.",
    durationMinutes: 35,
    rewardPoints: 220,
    tipIds: ["noOutsideHelp", "letItStand"],
  },
  {
    id: "unknown-developer",
    title: "A New Name in the Credits",
    objective: "Try a game from a developer you have never played",
    completion:
      "Choose an owned game made by a studio or creator unfamiliar to you. Complete its opening activity and remain through the first credits or creator identification you encounter.",
    durationMinutes: 35,
    rewardPoints: 220,
    tipIds: ["noOutsideHelp", "firstTake"],
  },
  {
    id: "physics-question",
    title: "What Happens If...",
    objective: "Choose a game with systems worth poking",
    completion:
      "Pick a physics, sandbox, immersive-sim, builder, or systemic game. Ask one specific interaction question before launching and test it three different ways.",
    durationMinutes: 35,
    rewardPoints: 230,
    tipIds: ["oneMove", "letItStand"],
  },
  {
    id: "unread-lore-object",
    title: "Read the Object",
    objective: "Let one overlooked item open a world",
    completion:
      "Choose a lore-rich game and inspect one item, artifact, book, card, or environmental detail you normally pass. Follow its clue until it leads to one place or interaction.",
    durationMinutes: 35,
    rewardPoints: 220,
    tipIds: ["oneTrack", "noOutsideHelp"],
  },
  {
    id: "npc-routine",
    title: "Where Do They Go?",
    objective: "Follow one non-player character's routine",
    completion:
      "Choose a simulation, RPG, open-world, or stealth game with active NPCs. Follow one resident without interfering until their routine repeats or reaches a clear endpoint.",
    durationMinutes: 30,
    rewardPoints: 210,
    tipIds: ["followTheLocal", "minimalHud"],
  },
  {
    id: "alternate-camera",
    title: "Shift the View",
    objective: "Experience a familiar game through a different view",
    completion:
      "Choose a game with multiple camera modes, characters, vehicles, or perspectives. Use one you normally avoid through a complete activity without switching back.",
    durationMinutes: 30,
    rewardPoints: 210,
    tipIds: ["fixedKit", "groundLevel"],
  },
  {
    id: "procedural-surprise",
    title: "A World Not Seen Before",
    objective: "Let generation create tonight's unknown",
    completion:
      "Choose a procedural, roguelike, sandbox, strategy, or survival game and begin a fresh generated run or map. Follow the first unusual feature until one activity resolves.",
    durationMinutes: 35,
    rewardPoints: 230,
    tipIds: ["noRestart", "letItStand"],
  },
  {
    id: "community-mod",
    title: "Someone Else Changed the Rules",
    objective: "Try one community-made variation",
    completion:
      "Choose a game with installed or easily available community content already in your library. Play one mod, map, scenario, or ruleset through its first complete result without checking ratings.",
    durationMinutes: 35,
    rewardPoints: 220,
    tipIds: ["noOutsideHelp", "letItStand"],
  },
  {
    id: "accessibility-transform",
    title: "A Different Way to Sense It",
    objective: "Use an accessibility option that changes play",
    completion:
      "Choose a familiar game with navigation audio, contrast modes, assists, remapping, slow motion, or other accessibility tools. Enable one unfamiliar option and complete an activity with it.",
    durationMinutes: 30,
    rewardPoints: 210,
    tipIds: ["fixedKit", "listenFirst"],
  },
  {
    id: "language-switch",
    title: "Hear It Differently",
    objective: "Experience familiar material in another language",
    completion:
      "Choose a dialogue-rich game with language options. Switch voice or text to another available language and complete one scene while observing how tone and rhythm change.",
    durationMinutes: 30,
    rewardPoints: 210,
    tipIds: ["listenFirst", "firstTake"],
  },
  {
    id: "oldest-untouched",
    title: "Still at Zero Minutes",
    objective: "Open the oldest owned game you never started",
    completion:
      "Find the oldest purchase, claim, or installation with no meaningful playtime. Launch it without outside research and reach the first save, result, or 30 active minutes.",
    durationMinutes: 30,
    rewardPoints: 220,
    tipIds: ["noOutsideHelp", "oneTrack"],
  },
  {
    id: "one-star-review-question",
    title: "Why Did They Hate It?",
    objective: "Investigate a game with a sharply divided reputation",
    completion:
      "Choose an owned game you remember people disagreeing about. Play one complete activity while looking for the specific design choice that could create both affection and frustration.",
    durationMinutes: 35,
    rewardPoints: 220,
    tipIds: ["noOutsideHelp", "letItStand"],
  },
  {
    id: "unusual-protagonist",
    title: "Not the Usual Hero",
    objective: "Choose a game with an unfamiliar kind of protagonist",
    completion:
      "Pick an owned game where you play as an animal, object, vehicle, group, villain, child, machine, or other unusual viewpoint. Complete one activity that only this protagonist could perform.",
    durationMinutes: 35,
    rewardPoints: 220,
    tipIds: ["fixedKit", "firstInstinct"],
  },
  {
    id: "side-system",
    title: "The Game Beside the Game",
    objective: "Explore one substantial system you usually ignore",
    completion:
      "Choose a familiar game with cooking, fishing, cards, housing, photography, crafting, or another side system. Complete one full loop there without advancing the main quest.",
    durationMinutes: 35,
    rewardPoints: 220,
    tipIds: ["oneTrack", "oneTool"],
  },
  {
    id: "soundtrack-before-cover",
    title: "Choose With Your Ears",
    objective: "Let audio identify an unexpected game",
    completion:
      "Sample only music or remembered sound from three owned games without looking at progression. Choose the one with the strongest auditory pull and complete one activity there.",
    durationMinutes: 30,
    rewardPoints: 200,
    tipIds: ["listenFirst", "minimalHud"],
  },
  {
    id: "forgotten-demo",
    title: "The Trial Became a Game",
    objective: "Return to something you only sampled",
    completion:
      "Choose a full game you previously touched only through a demo, free weekend, tutorial, or opening minutes. Continue beyond the old boundary and reach one new checkpoint.",
    durationMinutes: 35,
    rewardPoints: 220,
    tipIds: ["oneTrack", "noOutsideHelp"],
  },
  {
    id: "mechanic-without-tutorial",
    title: "Touch the Rule",
    objective: "Learn an unfamiliar system by interacting",
    completion:
      "Choose a game with a mechanic you do not yet understand. Skip external explanations and use direct experimentation until you produce one repeatable result.",
    durationMinutes: 35,
    rewardPoints: 230,
    tipIds: ["noOutsideHelp", "oneMove"],
  },
  {
    id: "map-edge",
    title: "Beyond the Printed Edge",
    objective: "Investigate one place the route does not emphasize",
    completion:
      "Choose an exploration game and travel toward a visible boundary, dead end, roof, shoreline, or background landmark. Reach it without map guidance and document what is there.",
    durationMinutes: 35,
    rewardPoints: 220,
    tipIds: ["noMap", "photoProof"],
  },
  {
    id: "object-history",
    title: "Who Put This Here?",
    objective: "Build a session around one unexplained object",
    completion:
      "Choose a detailed world and find one object or structure whose presence raises a question. Search only the surrounding area for an in-world answer.",
    durationMinutes: 30,
    rewardPoints: 210,
    tipIds: ["oneRoom", "noOutsideHelp"],
  },
  {
    id: "ruleset-random",
    title: "Read the Rules After",
    objective: "Enter an unfamiliar mode before mastering it",
    completion:
      "Choose a game with an unplayed mode, variant, playlist, or challenge. Begin with default settings, complete one result, and only then inspect the formal rules.",
    durationMinutes: 30,
    rewardPoints: 210,
    tipIds: ["fixedKit", "letItStand"],
  },
  {
    id: "opposite-dialogue",
    title: "Say What You Never Say",
    objective: "Use dialogue to discover a different version of a character",
    completion:
      "Choose a choice-driven game and take the response opposite to your normal instinct at the next three meaningful decisions. Accept every resulting consequence.",
    durationMinutes: 35,
    rewardPoints: 230,
    tipIds: ["oppositeInstinct", "letItStand"],
  },
  {
    id: "small-studio",
    title: "A Tiny Team's Big Idea",
    objective: "Try an owned game made by a very small team",
    completion:
      "Choose an indie or solo-developed game in your library whose central idea is immediately legible. Complete its first activity and notice where scope became invention.",
    durationMinutes: 35,
    rewardPoints: 220,
    tipIds: ["noOutsideHelp", "firstTake"],
  },
  {
    id: "historical-setting",
    title: "Before Your Lifetime",
    objective: "Enter a period you know little about",
    completion:
      "Choose an owned game grounded in a historical period unfamiliar to you. Reach one place, tool, custom, or conflict that could only belong to that setting.",
    durationMinutes: 40,
    rewardPoints: 230,
    tipIds: ["noOutsideHelp", "listenFirst"],
  },
  {
    id: "future-rule",
    title: "One Impossible Technology",
    objective: "Choose a game around a speculative idea",
    completion:
      "Pick a science-fiction or speculative game and identify one technology, society, or rule that changes ordinary behavior. Complete one activity where that idea directly matters.",
    durationMinutes: 40,
    rewardPoints: 230,
    tipIds: ["oneTrack", "noOutsideHelp"],
  },
  {
    id: "hidden-ending-door",
    title: "The Choice You Left Closed",
    objective: "Explore one alternate outcome in a completed game",
    completion:
      "Choose a game you finished with a nearby alternate scene, branch, route, or ending. Pursue one path you did not take and accept its result without reloading.",
    durationMinutes: 45,
    rewardPoints: 250,
    tipIds: ["oppositeInstinct", "letItStand"],
  },
  {
    id: "player-made-level",
    title: "A Stranger Built This",
    objective: "Let another player's design choose the challenge",
    completion:
      "Choose a game with user-made levels, tracks, puzzles, missions, or worlds. Select one without sorting by popularity and complete it or make three honest attempts.",
    durationMinutes: 35,
    rewardPoints: 220,
    tipIds: ["noOutsideHelp", "threeAttempts"],
  },
  {
    id: "one-system-collision",
    title: "Make Two Rules Meet",
    objective: "Create an interaction the game did not explicitly request",
    completion:
      "Choose a systemic game and combine two mechanics, tools, characters, or environmental rules that are usually used separately. Produce one visible emergent result.",
    durationMinutes: 35,
    rewardPoints: 230,
    tipIds: ["oneMove", "useWhatYouFind"],
  },
  {
    id: "curiosity-souvenir",
    title: "Bring Back an Answer",
    objective: "Finish a curious session with one concrete discovery",
    completion:
      "Choose the installed game currently raising the clearest question in your mind. Play only until you can answer that question, then capture one image of the evidence.",
    durationMinutes: 35,
    rewardPoints: 230,
    tipIds: ["oneTrack", "photoProof"],
  }
]);
