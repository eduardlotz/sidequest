import { defineMoodDeck } from "./defineMoodDeck";

export const CHALLENGE_QUESTS = defineMoodDeck("challenge", [
  {
    id: "challenge-first-try-counts",
    title: "Pick a Fight",
    objective: "Play a fighting game",
    completion:
      "Choose the fighting game and character that most tempt you tonight. Complete a best-of-five set against another player or one full arcade run.",
    durationMinutes: 30,
    rewardPoints: 200,
    tipIds: ["fixedKit", "threeAttempts"],
  },
  {
    id: "challenge-one-step-harder",
    title: "Lock and Load",
    objective: "Play a competitive shooter",
    completion:
      "Choose the PvP shooter whose movement, weapons, or match rhythm sounds best right now. Complete three full matches without switching games.",
    durationMinutes: 35,
    rewardPoints: 220,
    tipIds: ["fixedKit", "basicTools"],
  },
  {
    id: "challenge-beat-your-ghost",
    title: "Green Light",
    objective: "Play a racing game",
    completion:
      "Choose a racing game based on the car, track, or driving style you want tonight. Complete three races or record one valid time-trial result.",
    durationMinutes: 25,
    rewardPoints: 180,
    tipIds: ["minimalHud", "threeAttempts"],
  },
  {
    id: "challenge-pressure-proof",
    title: "Call the Play",
    objective: "Play a strategy, tactics, or card game",
    completion:
      "Choose a competitive game where reading an opponent matters more than reflexes. Complete one full match or scenario.",
    durationMinutes: 30,
    rewardPoints: 200,
    tipIds: ["noRestart", "firstInstinct"],
  },
  {
    id: "challenge-thin-margin",
    title: "Match Day",
    objective: "Play a sports game",
    completion:
      "Choose the sport, team, or athlete you most want to control tonight. Complete one full match, event, or tournament round.",
    durationMinutes: 30,
    rewardPoints: 200,
    tipIds: ["holdYourRole", "letItStand"],
  },
  {
    id: "challenge-adapt-on-contact",
    title: "Beat Your Ghost",
    objective: "Play the game with your clearest personal best",
    completion:
      "Choose a game that records times, scores, ranks, streaks, or challenge results. Beat one target or complete three honest attempts.",
    durationMinutes: 25,
    rewardPoints: 180,
    tipIds: ["minimalHud", "noRestart"],
  },
  {
    id: "challenge-return-to-the-wall",
    title: "The Wall",
    objective: "Return to the game that stopped you at one hard encounter",
    completion:
      "Choose an owned game you paused at a boss, race, puzzle, mission, or rank barrier. Give that exact obstacle three deliberate attempts, or stop early when you clear it.",
    durationMinutes: 35,
    rewardPoints: 220,
    tipIds: ["noRestart", "basicTools"],
  },
  {
    id: "challenge-one-notch-higher",
    title: "Raise the Stakes",
    objective: "Play a familiar game one difficulty step above your usual setting",
    completion:
      "Choose the owned game whose core loop you know best, raise its difficulty by exactly one available step, and finish one level, mission, match, or run segment without lowering it.",
    durationMinutes: 35,
    rewardPoints: 220,
    tipIds: ["noRecovery", "fixedKit"],
  },
  {
    id: "challenge-three-life-window",
    title: "Three Lives",
    objective: "Choose a game with fast failure and make three attempts count",
    completion:
      "Launch an owned game with short runs, rounds, or retryable sections. Make no more than three attempts and record your furthest checkpoint, highest wave, or clearest result from the three.",
    durationMinutes: 25,
    rewardPoints: 180,
    tipIds: ["threeAttempts", "noRestart"],
  },
  {
    id: "challenge-neglected-tool",
    title: "The Other Tool",
    objective: "Play the game with a weapon, class, or ability you usually ignore",
    completion:
      "Choose an owned game with meaningful loadout choices, equip one neglected option, and complete one full activity while keeping it central to your approach.",
    durationMinutes: 30,
    rewardPoints: 200,
    tipIds: ["oneTool", "underdogKit"],
  },
  {
    id: "challenge-silent-route",
    title: "Quiet Entry",
    objective: "Choose a game where staying unseen is possible",
    completion:
      "Launch an owned game with stealth and cross one guarded area or finish one objective without a full alarm. If discovered, finish the route and make one more attempt rather than restarting repeatedly.",
    durationMinutes: 30,
    rewardPoints: 200,
    tipIds: ["noCombat", "minimalHud"],
  },
  {
    id: "challenge-rationed-run",
    title: "Travel Light",
    objective: "Play the game where every resource decision can matter",
    completion:
      "Choose an owned game with healing, ammunition, energy, cards, or consumables. Enter one complete activity carrying or using no more than half your normal supply and reach its result screen or next checkpoint.",
    durationMinutes: 35,
    rewardPoints: 220,
    tipIds: ["keepReserve", "basicTools"],
  },
  {
    id: "challenge-boss-rematch",
    title: "Face the Boss Again",
    objective: "Return to the owned game with the most memorable boss you can replay",
    completion:
      "Choose a game that offers a boss rematch, chapter replay, arena, or nearby save. Reach that opponent and either defeat it once or complete three focused attempts.",
    durationMinutes: 35,
    rewardPoints: 220,
    tipIds: ["noRestart", "fixedKit"],
  },
  {
    id: "challenge-precision-passage",
    title: "Needle Thread",
    objective: "Choose the game that asks for your most precise inputs",
    completion:
      "Launch an owned platformer, rhythm game, action game, puzzler, or simulator with a demanding sequence. Clear one precision passage or make five complete attempts from the same start point.",
    durationMinutes: 25,
    rewardPoints: 180,
    tipIds: ["minimalHud", "threeAttempts"],
  },
  {
    id: "challenge-no-hint-hour",
    title: "No Hint Window",
    objective: "Reopen the game with a puzzle you have been tempted to look up",
    completion:
      "Choose an owned game with one unresolved puzzle, route, deduction, or system. Work on it for 30 minutes without external hints, ending when you solve it or can state one new concrete theory.",
    durationMinutes: 30,
    rewardPoints: 200,
    tipIds: ["noOutsideHelp", "noRestart"],
  },
  {
    id: "challenge-weak-link-drill",
    title: "Weak Link",
    objective: "Play the game that exposes one skill you keep avoiding",
    completion:
      "Choose an owned game where you can name one weak skill—defense, aiming, economy, timing, navigation, or execution. Practice it in a safe mode, then finish one activity while deliberately using it.",
    durationMinutes: 35,
    rewardPoints: 220,
    tipIds: ["oneMove", "threeAttempts"],
  },
  {
    id: "challenge-daily-trial",
    title: "Today's Trial",
    objective: "Choose an owned game offering a daily or weekly challenge",
    completion:
      "Open the first owned game whose current timed challenge sounds genuinely playable tonight. Complete that challenge once or submit one valid result before browsing another game.",
    durationMinutes: 25,
    rewardPoints: 180,
    tipIds: ["fixedKit", "letItStand"],
  },
  {
    id: "challenge-underdog-kit",
    title: "Underdog Kit",
    objective: "Play the game with the option you trust least",
    completion:
      "Choose an owned game with characters, teams, decks, vehicles, or builds. Select the viable option you feel least confident using and finish three short rounds or one full mission with it.",
    durationMinutes: 30,
    rewardPoints: 200,
    tipIds: ["underdogKit", "noUpgrades"],
  },
  {
    id: "challenge-no-restart-recovery",
    title: "Play It Out",
    objective: "Choose a game where recovering from mistakes is part of the skill",
    completion:
      "Launch an owned game with runs, matches, missions, or management scenarios. Continue through the first serious setback without reloading or restarting and reach one natural result.",
    durationMinutes: 35,
    rewardPoints: 220,
    tipIds: ["noRestart", "letItStand"],
  },
  {
    id: "challenge-pattern-reader",
    title: "Read the Pattern",
    objective: "Play the game whose enemies or systems reward careful observation",
    completion:
      "Choose an owned game with readable attack, movement, rhythm, or production patterns. Identify one repeating signal and use it to clear an encounter, phase, song, or cycle.",
    durationMinutes: 30,
    rewardPoints: 200,
    tipIds: ["noOutsideHelp", "oneMove"],
  },
  {
    id: "challenge-last-stand",
    title: "Hold the Line",
    objective: "Choose a game built around waves, defense, or mounting pressure",
    completion:
      "Launch an owned game with a survival, defense, horde, siege, or escalation mode. Hold one position or plan through three complete waves, ending at the next clear result.",
    durationMinutes: 30,
    rewardPoints: 200,
    tipIds: ["noRecovery", "keepReserve"],
  },
  {
    id: "challenge-ranked-nerves",
    title: "One Ranked Result",
    objective: "Play the competitive game whose ranked mode makes you hesitate",
    completion:
      "Choose one owned game with a ranked or rated queue and complete exactly one full match, race, event, or placement result without warming up in another game.",
    durationMinutes: 25,
    rewardPoints: 180,
    tipIds: ["fixedKit", "letItStand"],
  },
  {
    id: "challenge-nearby-achievement",
    title: "Almost Unlocked",
    objective: "Choose the game with one demanding achievement already within reach",
    completion:
      "Find an owned game with a skill-based achievement whose requirement is nearly met or immediately attemptable. Pursue only that condition until it unlocks or three full attempts end.",
    durationMinutes: 35,
    rewardPoints: 220,
    tipIds: ["oneTrack", "noOutsideHelp"],
  },
  {
    id: "challenge-survival-shift",
    title: "Survive the Shift",
    objective: "Play the game where lasting until safety feels uncertain",
    completion:
      "Choose an owned survival, horror, extraction, management, or action game with a visible cycle. Survive one night, expedition, shift, floor, or evacuation and stop at the safe boundary.",
    durationMinutes: 40,
    rewardPoints: 250,
    tipIds: ["keepReserve", "cleanExit"],
  },
  {
    id: "challenge-one-mechanic-master",
    title: "One Move Deeper",
    objective: "Return to a game with one advanced mechanic you never learned",
    completion:
      "Choose an owned game containing a parry, drift, cancel, counter, combo, automation, or tactical command you usually skip. Learn its input, then use it successfully three times in one activity.",
    durationMinutes: 30,
    rewardPoints: 200,
    tipIds: ["oneMove", "fixedKit"],
  },
  {
    id: "challenge-clean-combo",
    title: "Make It Connect",
    objective: "Choose a game where a deliberate sequence matters more than speed",
    completion:
      "Launch an owned game with chained moves, actions, notes, orders, or production steps. Define one short sequence and execute it cleanly three times during a complete round or activity.",
    durationMinutes: 25,
    rewardPoints: 180,
    tipIds: ["firstTake", "threeAttempts"],
  },
  {
    id: "challenge-damage-budget",
    title: "Damage Budget",
    objective: "Play the game where defense deserves more attention than offense",
    completion:
      "Choose an owned game with visible health, integrity, casualties, or defensive errors. Finish one short encounter or event while losing no more than one quarter of the available total.",
    durationMinutes: 25,
    rewardPoints: 180,
    tipIds: ["damageBudget", "noRecovery"],
  },
  {
    id: "challenge-unknown-ruleset",
    title: "Unplayed Mode",
    objective: "Choose the game with a mode whose rules you never tried",
    completion:
      "Launch an owned game containing an untouched mode, variant, ruleset, scenario, or difficulty preset. Read its opening rules once and complete one full result without switching back to the familiar mode.",
    durationMinutes: 30,
    rewardPoints: 200,
    tipIds: ["noOutsideHelp", "letItStand"],
  },
  {
    id: "challenge-audacious-route",
    title: "The Risky Route",
    objective: "Play the game where you can choose a visibly harder path",
    completion:
      "Choose an owned game with branching routes, optional danger, contested objectives, or high-risk rewards. Take one harder path on purpose and reach its endpoint or survive one complete attempt.",
    durationMinutes: 35,
    rewardPoints: 220,
    tipIds: ["noMap", "noRecovery"],
  },
  {
    id: "challenge-tension-you-avoid",
    title: "Stay With the Tension",
    objective: "Choose the owned game you avoid because its atmosphere gets under your skin",
    completion:
      "Launch a tense, eerie, stressful, or high-stakes game you have been postponing. Continue without changing games until the next save room, checkpoint, completed day, or 25 active minutes.",
    durationMinutes: 25,
    rewardPoints: 180,
    tipIds: ["noRestart", "measuredPace"],
  }
]);
