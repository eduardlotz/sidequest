import { defineMoodDeck } from "./defineMoodDeck";

export const RESTLESS_QUESTS = defineMoodDeck("restless", [
  {
    id: "instant-movement",
    title: "Move Before Thinking",
    objective: "Choose the game that gets a character moving fastest",
    completion:
      "Pick an installed game that can place you in direct control within two minutes. Begin moving immediately and reach one visible destination without opening optional menus.",
    durationMinutes: 25,
    rewardPoints: 180,
    tipIds: ["minimalHud", "noMap"],
  },
  {
    id: "speed-line",
    title: "Fastest Line",
    objective: "Turn restless energy into one clean race",
    completion:
      "Choose a racing, skating, flying, skiing, or time-trial game with a familiar short course. Complete three attempts using the same vehicle or character.",
    durationMinutes: 25,
    rewardPoints: 200,
    tipIds: ["fixedKit", "threeAttempts"],
  },
  {
    id: "destruction-break",
    title: "Make Some Debris",
    objective: "Play something where the world reacts to force",
    completion:
      "Choose a game with satisfying destruction, demolition, impacts, or breakable systems. Complete one activity while deliberately changing the environment in three visible places.",
    durationMinutes: 25,
    rewardPoints: 180,
    tipIds: ["oneTool", "photoProof"],
  },
  {
    id: "rhythm-release",
    title: "Follow the Beat",
    objective: "Use rhythm to give excess energy a shape",
    completion:
      "Choose a rhythm, music, dance, drumming, or beat-driven game and complete three songs or one full set without changing difficulty between tracks.",
    durationMinutes: 25,
    rewardPoints: 180,
    tipIds: ["fixedKit", "firstTake"],
  },
  {
    id: "short-rogue-run",
    title: "Burn One Run",
    objective: "Spend the energy on a run that resets cleanly",
    completion:
      "Choose a roguelike, arcade, survival, or score-run game that starts quickly. Complete one run without restarting and accept the ending it produces.",
    durationMinutes: 30,
    rewardPoints: 200,
    tipIds: ["noRestart", "letItStand"],
  },
  {
    id: "parkour-route",
    title: "The Floor Is Optional",
    objective: "Choose a game where traversal is expressive",
    completion:
      "Pick a game with climbing, wall-running, grappling, vaulting, or acrobatics. Travel between two landmarks while touching ordinary ground as little as the game allows.",
    durationMinutes: 30,
    rewardPoints: 220,
    tipIds: ["noMap", "oneMove"],
  },
  {
    id: "arena-sprint",
    title: "Into the Arena",
    objective: "Choose the quickest path to active opposition",
    completion:
      "Pick a fighting, shooter, action, sports, or arena game with a fast queue or replayable encounter. Complete one full match or combat arena using the first viable loadout.",
    durationMinutes: 25,
    rewardPoints: 200,
    tipIds: ["fixedKit", "letItStand"],
  },
  {
    id: "combo-chase",
    title: "Keep It Connected",
    objective: "Give the energy to one expanding combo",
    completion:
      "Choose a game with a visible combo, chain, multiplier, or flow system. Complete one activity while trying to extend the chain farther on each of three attempts.",
    durationMinutes: 25,
    rewardPoints: 200,
    tipIds: ["oneMove", "threeAttempts"],
  },
  {
    id: "chase-sequence",
    title: "Something Is Behind You",
    objective: "Play a game built around pursuit or escape",
    completion:
      "Choose a game with a chase, pursuit, getaway, extraction, or timed escape available nearby. Complete that sequence once without pausing or reloading.",
    durationMinutes: 25,
    rewardPoints: 200,
    tipIds: ["noRestart", "cleanExit"],
  },
  {
    id: "boss-now",
    title: "Straight to the Boss",
    objective: "Skip the wandering and face one major opponent",
    completion:
      "Choose a game with a boss replay, arena, chapter select, or save near a major enemy. Reach that fight and complete it or make three committed attempts.",
    durationMinutes: 30,
    rewardPoints: 220,
    tipIds: ["threeAttempts", "fixedKit"],
  },
  {
    id: "sports-quarter",
    title: "One Period of Pressure",
    objective: "Turn restlessness into a short competitive result",
    completion:
      "Choose a sports game with adjustable match length and play the shortest setting that still records a result. Keep the first team and tactics selected.",
    durationMinutes: 25,
    rewardPoints: 180,
    tipIds: ["fixedKit", "letItStand"],
  },
  {
    id: "flight-loop",
    title: "Leave the Ground",
    objective: "Choose a game that makes open air playable",
    completion:
      "Pick a flying, gliding, spaceflight, wingsuit, or aerial game. Complete one uninterrupted route through the air and land or dock safely afterward.",
    durationMinutes: 30,
    rewardPoints: 200,
    tipIds: ["minimalHud", "cleanExit"],
  },
  {
    id: "vehicle-switch-off",
    title: "Stay in the Vehicle",
    objective: "Play one journey without leaving the machine",
    completion:
      "Choose a game with a car, ship, bike, mech, train, or other vehicle already accessible. Complete one route while remaining in the same vehicle whenever possible.",
    durationMinutes: 30,
    rewardPoints: 200,
    tipIds: ["fixedKit", "longWay"],
  },
  {
    id: "swarm-clear",
    title: "Clear the Screen",
    objective: "Choose a game that can fill the screen with targets",
    completion:
      "Pick an action, horde, bullet-heaven, musou, tower-defense, or arcade game. Survive or clear one complete wave set using one main tool.",
    durationMinutes: 30,
    rewardPoints: 220,
    tipIds: ["oneTool", "keepReserve"],
  },
  {
    id: "timed-objective",
    title: "Beat the Clock Once",
    objective: "Give the energy a visible countdown",
    completion:
      "Choose a game with a time trial, timed mission, speed challenge, or daily clock. Record one valid result, then make two attempts to improve it.",
    durationMinutes: 25,
    rewardPoints: 200,
    tipIds: ["threeAttempts", "letItStand"],
  },
  {
    id: "movement-only-win",
    title: "Win With Position",
    objective: "Choose a challenge where movement matters more than upgrades",
    completion:
      "Pick a game with dodging, racing lines, platforming, stealth routes, or spatial survival. Complete one activity without buying or equipping an upgrade.",
    durationMinutes: 30,
    rewardPoints: 220,
    tipIds: ["noUpgrades", "minimalHud"],
  },
  {
    id: "loudest-game",
    title: "Turn It Up",
    objective: "Choose the game with the most physical soundtrack",
    completion:
      "Pick the installed game whose music, engines, weapons, crowds, or impacts feel most energizing. Complete one activity with audio leading the pace.",
    durationMinutes: 25,
    rewardPoints: 180,
    tipIds: ["listenFirst", "fixedKit"],
  },
  {
    id: "quick-reaction",
    title: "Hands First",
    objective: "Use a game that asks for immediate reactions",
    completion:
      "Choose an action, rhythm, arcade, shooter, or sports game you already understand. Complete one fast activity without tutorials, guides, or build changes.",
    durationMinutes: 25,
    rewardPoints: 200,
    tipIds: ["basicTools", "noOutsideHelp"],
  },
  {
    id: "vertical-climb",
    title: "Only Up From Here",
    objective: "Put the energy into gaining height",
    completion:
      "Choose a game with a tower, mountain, vertical level, climbing route, or ascent challenge. Reach one higher named landmark without fast travel.",
    durationMinutes: 30,
    rewardPoints: 220,
    tipIds: ["longWay", "noMap"],
  },
  {
    id: "trick-session",
    title: "Land One New Thing",
    objective: "Choose a game where motion can become a trick",
    completion:
      "Pick a skating, driving, snowboarding, biking, fighting, or movement game. Land one trick, combo, or maneuver you have not completed in this session.",
    durationMinutes: 30,
    rewardPoints: 220,
    tipIds: ["oneMove", "threeAttempts"],
  },
  {
    id: "rapid-puzzle",
    title: "Think at Speed",
    objective: "Choose a puzzle that moves before certainty arrives",
    completion:
      "Pick a falling-block, rhythm-puzzle, action-puzzle, word, or timed logic game. Complete three rounds without pausing to search for an optimal strategy.",
    durationMinutes: 25,
    rewardPoints: 180,
    tipIds: ["noOutsideHelp", "firstInstinct"],
  },
  {
    id: "aggressive-route",
    title: "Take the Direct Route",
    objective: "Choose a game where forward pressure is useful",
    completion:
      "Pick an action game with a clear nearby objective. Reach it by the most direct playable route and complete the encounter without optional detours.",
    durationMinutes: 30,
    rewardPoints: 220,
    tipIds: ["oneTrack", "fixedKit"],
  },
  {
    id: "mech-weight",
    title: "Heavy Machinery",
    objective: "Use the energy through something massive",
    completion:
      "Choose a game with mechs, tanks, giant creatures, heavy equipment, or weighty vehicles. Complete one mission or match without switching away from the heaviest available role.",
    durationMinutes: 30,
    rewardPoints: 220,
    tipIds: ["fixedKit", "holdYourRole"],
  },
  {
    id: "crowd-route",
    title: "Through the Crowd",
    objective: "Play where movement must react to many bodies",
    completion:
      "Choose a game with traffic, crowds, swarms, team movement, or busy public space. Cross one area while avoiding collisions or unnecessary fights.",
    durationMinutes: 30,
    rewardPoints: 200,
    tipIds: ["noCombat", "minimalHud"],
  },
  {
    id: "streak-attempt",
    title: "Three in a Row",
    objective: "Turn restlessness into a short streak",
    completion:
      "Choose a game with rapid rounds, levels, songs, or encounters. Complete three consecutive results using the same character or loadout, regardless of wins.",
    durationMinutes: 30,
    rewardPoints: 200,
    tipIds: ["fixedKit", "letItStand"],
  },
  {
    id: "escape-the-hub",
    title: "Out the Door",
    objective: "Leave a familiar hub without planning the whole trip",
    completion:
      "Choose an in-progress world game, load the latest save, and take the first exit from the current hub. Follow it until one activity or discovery resolves.",
    durationMinutes: 30,
    rewardPoints: 200,
    tipIds: ["firstInstinct", "noMap"],
  },
  {
    id: "one-life-motion",
    title: "Keep Moving Until It Ends",
    objective: "Choose a run where stopping is the main danger",
    completion:
      "Pick an endless, survival, chase, platform, or arcade mode. Keep the character moving throughout one run and accept the first complete result.",
    durationMinutes: 25,
    rewardPoints: 200,
    tipIds: ["noRestart", "letItStand"],
  },
  {
    id: "role-with-tempo",
    title: "Set the Pace",
    objective: "Take the team role that controls momentum",
    completion:
      "Choose a multiplayer or squad game and play one result as the initiator, scout, driver, support, or other role that keeps the group moving.",
    durationMinutes: 30,
    rewardPoints: 220,
    tipIds: ["holdYourRole", "helpFirst"],
  },
  {
    id: "physical-finish",
    title: "Finish Out of Breath",
    objective: "Choose a game that can ask something physical",
    completion:
      "Pick a motion, dance, fitness, rhythm, VR, or highly active control game. Complete one routine, song set, or 20 active minutes at a sustainable pace.",
    durationMinutes: 20,
    rewardPoints: 180,
    tipIds: ["firstTake", "cleanExit"],
  },
  {
    id: "restless-landing",
    title: "Spend the Last Spark",
    objective: "Use the energy and finish somewhere calm",
    completion:
      "Choose the most kinetic game you can start quickly. Complete one intense activity, then move the character to a quiet or safe place before stopping.",
    durationMinutes: 30,
    rewardPoints: 220,
    tipIds: ["oneTrack", "cleanExit"],
  }
]);
