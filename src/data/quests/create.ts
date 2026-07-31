import { defineMoodDeck } from "./defineMoodDeck";

export const CREATE_QUESTS = defineMoodDeck("create", [
  {
    id: "create-new-build-old-parts",
    title: "Blank Ground",
    objective: "Play a sandbox where you can build from nothing",
    completion:
      "Choose a building, survival, simulation, or sandbox game and start with an empty patch of ground. Finish one small structure or self-contained space.",
    durationMinutes: 35,
    rewardPoints: 220,
    tipIds: ["localMaterials", "oneRoom"],
  },
  {
    id: "create-function-first",
    title: "Make It Yours",
    objective: "Play a game with something worth customizing",
    completion:
      "Choose a game where you can design a character, vehicle, home, room, outfit, or loadout. Complete one coherent look and use it once.",
    durationMinutes: 30,
    rewardPoints: 200,
    tipIds: ["onePalette", "fixedKit"],
  },
  {
    id: "create-rule-of-three",
    title: "Machine Mind",
    objective: "Play a game about automation or production",
    completion:
      "Choose a factory, logistics, management, or automation game. Build one complete chain that turns an input into a useful output.",
    durationMinutes: 40,
    rewardPoints: 250,
    tipIds: ["oneTool", "noUndo"],
  },
  {
    id: "create-strategy-remix",
    title: "New Build",
    objective: "Play a game where you can invent a fresh build",
    completion:
      "Choose a game with decks, skills, equipment, classes, or vehicle tuning. Create one combination you have not used before and test it through one complete result.",
    durationMinutes: 35,
    rewardPoints: 220,
    tipIds: ["underdogKit", "fixedKit"],
  },
  {
    id: "create-make-a-landmark",
    title: "Level Maker",
    objective: "Play a game that lets you design the challenge",
    completion:
      "Choose a game with a level, track, park, scenario, or map editor. Make one short playable creation and complete a test run.",
    durationMinutes: 40,
    rewardPoints: 250,
    tipIds: ["firstTake", "noOutsideHelp"],
  },
  {
    id: "create-before-and-after",
    title: "Photo Walk",
    objective: "Play the game with the world you most want to frame",
    completion:
      "Choose a game with photo mode, a free camera, or a clean screenshot option. Capture three clearly different images in one location or short route.",
    durationMinutes: 25,
    rewardPoints: 180,
    tipIds: ["minimalHud", "photoProof"],
  },
  {
    id: "create-tell-a-room-sized-story",
    title: "Room-Sized Story",
    objective: "Build one space that quietly reveals who lives there",
    completion:
      "Choose an owned housing, life-simulation, building, or decorating game. Finish one room or compact space for an imagined resident, using no more than seven placed objects to communicate their routine.",
    durationMinutes: 40,
    rewardPoints: 220,
    tipIds: ["oneRoom", "onePalette"],
  },
  {
    id: "create-make-the-useful-prototype",
    title: "Useful, Not Pretty",
    objective: "Prototype an idea before taste can slow it down",
    completion:
      "Choose an owned building, engineering, management, or sandbox game. Make the roughest small creation that can perform one named job, prove it works once, and stop before decorating or optimizing it.",
    durationMinutes: 30,
    rewardPoints: 190,
    tipIds: ["oneTool", "firstTake"],
  },
  {
    id: "create-build-around-the-flaw",
    title: "Keep the Crooked Part",
    objective: "Turn an awkward obstacle into the center of a design",
    completion:
      "Choose an owned game with construction, terrain, settlement, park, or base design. Find one inconvenient slope, ruin, tree, machine, boundary, or existing feature and finish a small design that preserves it as the focal point.",
    durationMinutes: 45,
    rewardPoints: 230,
    tipIds: ["letItStand", "noUndo"],
  },
  {
    id: "create-design-one-livable-block",
    title: "A Livable Block",
    objective: "Make one tiny neighborhood feel complete",
    completion:
      "Choose an owned city, colony, settlement, or community-building game. Finish one compact block or cluster that includes a place to live, a useful service, and a path connecting them, without expanding beyond its boundary.",
    durationMinutes: 45,
    rewardPoints: 230,
    tipIds: ["localMaterials", "oneRoom"],
  },
  {
    id: "create-shape-a-seasonal-garden",
    title: "Garden for This Season",
    objective: "Arrange a small living space around today's weather or season",
    completion:
      "Choose an owned farming, life-simulation, housing, or building game with plants or outdoor decoration. Finish one compact garden using a palette and layout inspired by the season or weather outside today.",
    durationMinutes: 35,
    rewardPoints: 200,
    tipIds: ["onePalette", "localMaterials"],
  },
  {
    id: "create-dress-for-an-npc",
    title: "Borrowed Wardrobe",
    objective: "Create a look inspired by a character who is not the hero",
    completion:
      "Choose an owned game with clothing, armor, character, or avatar customization. Build one playable look inspired by a minor character, faction, creature, or place in that world, then use it through one complete scene or activity.",
    durationMinutes: 30,
    rewardPoints: 190,
    tipIds: ["fixedKit", "onePalette"],
  },
  {
    id: "create-take-an-honest-portrait",
    title: "Off-Duty Portrait",
    objective: "Photograph a character between heroic moments",
    completion:
      "Choose an owned game with photo tools or clean screenshots and a character you find expressive. Capture one finished portrait during rest, travel, weather, conversation, or another ordinary moment, using no combat pose.",
    durationMinutes: 25,
    rewardPoints: 170,
    tipIds: ["minimalHud", "firstTake"],
  },
  {
    id: "create-chase-one-kind-of-light",
    title: "Light Chaser",
    objective: "Choose a world for one specific quality of light",
    completion:
      "Choose an owned game whose world can offer the light you want tonight—soft, harsh, neon, foggy, golden, or cold. Travel within one area until you capture a single image where that light changes an ordinary subject.",
    durationMinutes: 25,
    rewardPoints: 170,
    tipIds: ["minimalHud", "photoProof"],
  },
  {
    id: "create-stage-a-three-frame-story",
    title: "Three Frames, One Event",
    objective: "Tell a tiny story with three connected images",
    completion:
      "Choose an owned game with photo tools, replay tools, or clean screenshots. Capture exactly three images showing a beginning, a change, and an aftermath from one short event.",
    durationMinutes: 30,
    rewardPoints: 190,
    tipIds: ["firstTake", "noUndo"],
  },
  {
    id: "create-curate-the-odd-shelf",
    title: "Museum of Oddities",
    objective: "Curate a display from overlooked things already collected",
    completion:
      "Choose an owned game with housing, display, inventory placement, or a personal hub. Arrange exactly five strange, sentimental, or visually related objects into one deliberate exhibit and view it from the visitor's approach.",
    durationMinutes: 30,
    rewardPoints: 190,
    tipIds: ["localMaterials", "oneRoom"],
  },
  {
    id: "create-build-a-creatures-home",
    title: "Home for One Creature",
    objective: "Design a habitat around how one inhabitant actually lives",
    completion:
      "Choose an owned zoo, park, aquarium, colony, life-simulation, or building game. Finish one compact habitat or living area shaped around a single creature's movement, shelter, and favorite activity.",
    durationMinutes: 40,
    rewardPoints: 220,
    tipIds: ["localMaterials", "leaveAGift"],
  },
  {
    id: "create-embrace-one-sided-balance",
    title: "Beautifully Unbalanced",
    objective: "Make a deliberate asymmetrical composition",
    completion:
      "Choose an owned game with architecture, settlement, park, room, or visual layout tools. Finish one small composition with most visual weight on one side and a single counterpoint on the other.",
    durationMinutes: 35,
    rewardPoints: 200,
    tipIds: ["noUndo", "letItStand"],
  },
  {
    id: "create-run-a-kind-economy",
    title: "Enough for Everyone",
    objective: "Design a system around wellbeing instead of maximum output",
    completion:
      "Choose an owned management, colony, city, strategy, or simulation game. Improve one small district, team, or production area while prioritizing rest, access, safety, or spare capacity over peak efficiency, then observe one stable cycle.",
    durationMinutes: 45,
    rewardPoints: 230,
    tipIds: ["helpFirst", "keepReserve"],
  },
  {
    id: "create-invent-a-team-identity",
    title: "A Team With a Verb",
    objective: "Shape a team around one action you want it known for",
    completion:
      "Choose an owned sports, tactics, strategy, management, or party-based game. Pick one verb such as press, protect, pass, ambush, rescue, or outlast, shape the available roles or formation around it, and complete one match or mission.",
    durationMinutes: 40,
    rewardPoints: 220,
    tipIds: ["holdYourRole", "onePalette"],
  },
  {
    id: "create-roleplay-a-local",
    title: "Live Like a Local",
    objective: "Invent one ordinary day inside an open world",
    completion:
      "Choose an owned open-world, role-playing, survival, or life-simulation game. Give your character an ordinary local role, then complete a route with one workplace, one meal or rest stop, and a return home without chasing formal objectives.",
    durationMinutes: 35,
    rewardPoints: 200,
    tipIds: ["followTheLocal", "noMap"],
  },
  {
    id: "create-solve-it-sideways",
    title: "The Sideways Solution",
    objective: "Solve a familiar problem with an overlooked tool",
    completion:
      "Choose an owned immersive, sandbox, strategy, puzzle, or action game with flexible systems. Select one tool or ability you usually ignore and use it as the central part of a successful encounter or objective.",
    durationMinutes: 35,
    rewardPoints: 210,
    tipIds: ["basicTools", "noOutsideHelp"],
  },
  {
    id: "create-draw-with-a-route",
    title: "Drawn in Motion",
    objective: "Make a route whose shape matters as much as its destination",
    completion:
      "Choose an owned driving, skating, flying, traversal, logistics, or open-world game. Plan and complete one continuous route shaped like a loop, spiral, wave, or letter, using the map or your movement trail as the canvas.",
    durationMinutes: 30,
    rewardPoints: 190,
    tipIds: ["noMap", "photoProof"],
  },
  {
    id: "create-compose-a-place-theme",
    title: "Music for One Place",
    objective: "Make a short sound that belongs to a location",
    completion:
      "Choose an owned game with instruments, sequencing, music construction, note blocks, or expressive sound tools. Compose and perform or play back a piece no longer than 30 seconds for one specific in-game place.",
    durationMinutes: 30,
    rewardPoints: 200,
    tipIds: ["worldAudio", "oneRoom"],
  },
  {
    id: "create-sculpt-for-one-view",
    title: "The Chosen View",
    objective: "Shape a landscape for one exact viewpoint",
    completion:
      "Choose an owned game with terrain, landscaping, construction, or world-shaping tools. Select one standing point, then finish a small scene whose silhouette, path, and focal object work from that viewpoint only.",
    durationMinutes: 40,
    rewardPoints: 220,
    tipIds: ["groundLevel", "firstTake"],
  },
  {
    id: "create-repair-with-a-new-idea",
    title: "Creative Repair",
    objective: "Rework one old creation instead of starting over",
    completion:
      "Choose an owned game containing a base, city, vehicle, farm, character setup, or other creation you made earlier. Identify its least satisfying part and rebuild only that part around one new idea, then use or observe the revised result once.",
    durationMinutes: 40,
    rewardPoints: 220,
    tipIds: ["useWhatYouFind", "localMaterials"],
  },
  {
    id: "create-stage-a-silent-scene",
    title: "Silent Scene",
    objective: "Arrange a moment that communicates without dialogue",
    completion:
      "Choose an owned game with posing, furnishing, character placement, replay, sandbox, or photo tools. Stage and capture one scene where distance, posture, props, or lighting makes the relationship between two subjects understandable without text.",
    durationMinutes: 30,
    rewardPoints: 200,
    tipIds: ["minimalHud", "firstTake"],
  },
  {
    id: "create-design-for-the-smallest-user",
    title: "Smallest User First",
    objective: "Build something around the least powerful inhabitant",
    completion:
      "Choose an owned management, colony, city, park, simulation, or building game. Find the slowest, youngest, weakest, least mobile, or least privileged user and finish one path, service, shelter, or space designed around their needs.",
    durationMinutes: 40,
    rewardPoints: 220,
    tipIds: ["groundLevel", "basicTools"],
  },
  {
    id: "create-invent-a-personal-ritual",
    title: "A Ritual of Your Own",
    objective: "Give a familiar game a small repeatable ceremony",
    completion:
      "Choose an owned game you know well enough to bend away from its formal goals. Invent a three-part ritual tied to its world, perform it once from beginning to end, and finish at a personally meaningful place.",
    durationMinutes: 30,
    rewardPoints: 190,
    tipIds: ["firstTake", "noUndo"],
  },
  {
    id: "create-leave-a-kind-trace",
    title: "Leave It Better",
    objective: "Transform one place without claiming or conquering it",
    completion:
      "Choose an owned sandbox, survival, building, farming, or open-world game. Improve one neglected public, wild, shared, or transitional place with a shelter, path, light, garden, repair, or supply, then leave the area without expanding it.",
    durationMinutes: 35,
    rewardPoints: 210,
    tipIds: ["leaveAGift", "cleanExit"],
  }
]);
