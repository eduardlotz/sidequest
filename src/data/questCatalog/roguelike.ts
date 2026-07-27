import type { QuestDefinition } from "../questTypes";

export const ROGUELIKE_QUESTS = [
  {
    "id": "the-strangers-build",
    "title": "The Stranger's Build",
    "objective": "Take the first upgrade you would normally skip, then shape the rest of the run around it until you defeat an elite or boss.",
    "primaryGenre": "roguelike",
    "compatibleGenres": [
      "rpg"
    ],
    "requirements": [
      "run-based upgrades",
      "elite enemies or bosses"
    ],
    "archetype": "adaptation",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "empty-pockets",
    "title": "Empty Pockets",
    "objective": "At the next shop, spend all your currency before leaving. Reach the following shop or boss using what you bought—no selling, rerolling, or replacing it.",
    "primaryGenre": "roguelike",
    "compatibleGenres": [
      "rpg"
    ],
    "requirements": [
      "shops",
      "currency",
      "run-based equipment or upgrades"
    ],
    "archetype": "adaptation",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "take-the-first-offer",
    "title": "Take the First Offer",
    "objective": "Reach the next boss without rerolling, skipping, or replacing any reward. Accept the first eligible option at every choice.",
    "primaryGenre": "roguelike",
    "compatibleGenres": [],
    "requirements": [
      "run-based rewards",
      "reward choices",
      "bosses"
    ],
    "archetype": "performance",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "share-the-power",
    "title": "Share the Power",
    "objective": "Give or leave the next useful drop for a teammate whose build benefits from it more. Defeat the next elite or complete the next event together.",
    "primaryGenre": "roguelike",
    "compatibleGenres": [
      "rpg"
    ],
    "requirements": [
      "online co-op",
      "shareable drops",
      "build-based equipment or upgrades"
    ],
    "archetype": "support",
    "settings": [],
    "requiresOnline": true
  },
  {
    "id": "set-up-the-finisher",
    "title": "Set Up the Finisher",
    "objective": "Apply control, a status effect, or a defense break to an elite so a teammate can land the finishing blow. Then reach the next safe room together.",
    "primaryGenre": "roguelike",
    "compatibleGenres": [
      "rpg",
      "action"
    ],
    "requirements": [
      "online co-op",
      "elite enemies",
      "control, status, or defense-break effects"
    ],
    "archetype": "support",
    "settings": [],
    "requiresOnline": true
  },
  {
    "id": "emergency-reserve",
    "title": "Emergency Reserve",
    "objective": "Hold one healing or revive resource until a teammate is in danger. Use it on them, then clear the current room with both players still in the run.",
    "primaryGenre": "roguelike",
    "compatibleGenres": [
      "rpg"
    ],
    "requirements": [
      "online co-op",
      "shareable healing or revives",
      "room-based combat"
    ],
    "archetype": "support",
    "settings": [],
    "requiresOnline": true
  },
  {
    "id": "cover-the-weakness",
    "title": "Cover the Weakness",
    "objective": "Choose one upgrade that covers a teammate's missing defense, range, control, or recovery. Demonstrate the benefit in the next two encounters.",
    "primaryGenre": "roguelike",
    "compatibleGenres": [
      "rpg"
    ],
    "requirements": [
      "online co-op",
      "visible teammate builds",
      "upgrade choices"
    ],
    "archetype": "support",
    "settings": [],
    "requiresOnline": true
  },
  {
    "id": "keep-the-summon-standing",
    "title": "Keep the Summon Standing",
    "objective": "Bring a summon or companion through three encounters and use one ability, item, or positioning choice to keep it active until the next checkpoint.",
    "primaryGenre": "roguelike",
    "compatibleGenres": [
      "rpg"
    ],
    "requirements": [
      "summons or companions",
      "room-based encounters",
      "checkpoints"
    ],
    "archetype": "support",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "leave-a-trail",
    "title": "Leave a Trail",
    "objective": "Mark three useful pickups for a teammate, let them claim at least one, and reach the next checkpoint without splitting up.",
    "primaryGenre": "roguelike",
    "compatibleGenres": [
      "rpg"
    ],
    "requirements": [
      "online co-op",
      "ping or marker system",
      "shareable pickups"
    ],
    "archetype": "support",
    "settings": [],
    "requiresOnline": true
  },
  {
    "id": "the-late-pivot",
    "title": "The Late Pivot",
    "objective": "After the next major reward, replace one part of your current plan with it. Trigger the new effect in two encounters, then reach a checkpoint.",
    "primaryGenre": "roguelike",
    "compatibleGenres": [
      "rpg"
    ],
    "requirements": [
      "run-based builds",
      "major rewards",
      "checkpoints"
    ],
    "archetype": "adaptation",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "the-status-you-ignore",
    "title": "The Status You Ignore",
    "objective": "Take one upgrade for a status effect you rarely use. Trigger that effect in three encounters and reach the next reward room.",
    "primaryGenre": "roguelike",
    "compatibleGenres": [
      "rpg",
      "action"
    ],
    "requirements": [
      "status effects",
      "upgrade choices",
      "room-based encounters"
    ],
    "archetype": "adaptation",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "change-of-tempo",
    "title": "Change of Tempo",
    "objective": "Add one close-range option to a ranged build, or one ranged option to a close-range build. Use both options before clearing the next two encounters.",
    "primaryGenre": "roguelike",
    "compatibleGenres": [
      "rpg",
      "shooter"
    ],
    "requirements": [
      "close-range and ranged options",
      "run-based builds",
      "combat encounters"
    ],
    "archetype": "adaptation",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "one-slot-wildcard",
    "title": "One-Slot Wildcard",
    "objective": "Put the next eligible pickup into one equipment slot you normally keep fixed. Use its effect once, then clear two encounters before deciding whether to keep it.",
    "primaryGenre": "roguelike",
    "compatibleGenres": [
      "rpg"
    ],
    "requirements": [
      "swappable equipment slots",
      "item pickups",
      "combat encounters"
    ],
    "archetype": "adaptation",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "the-unopened-door",
    "title": "The Unopened Door",
    "objective": "At the next branch, take the route you have not visited this run. Claim its first reward or event, then reach the next checkpoint.",
    "primaryGenre": "roguelike",
    "compatibleGenres": [],
    "requirements": [
      "branching routes",
      "rewards or events",
      "checkpoints"
    ],
    "archetype": "expedition",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "the-risky-room",
    "title": "The Risky Room",
    "objective": "Enter the next optional challenge room whose risk is shown in advance. Claim its reward, then make it to the following safe room.",
    "primaryGenre": "roguelike",
    "compatibleGenres": [],
    "requirements": [
      "optional challenge rooms",
      "visible risk",
      "safe rooms"
    ],
    "archetype": "expedition",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "survey-the-fork",
    "title": "Survey the Fork",
    "objective": "At the next fork, reveal the first room or node on both available paths before committing to one. Follow your choice until you claim a reward.",
    "primaryGenre": "roguelike",
    "compatibleGenres": [],
    "requirements": [
      "branching map",
      "revealed rooms or nodes",
      "rewards"
    ],
    "archetype": "expedition",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "event-hunter",
    "title": "Event Hunter",
    "objective": "Choose the next visible event or noncombat node over a standard fight. Resolve it, then survive the following combat encounter.",
    "primaryGenre": "roguelike",
    "compatibleGenres": [
      "rpg"
    ],
    "requirements": [
      "route selection",
      "event or noncombat nodes",
      "combat encounters"
    ],
    "archetype": "expedition",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "map-edge",
    "title": "Map Edge",
    "objective": "Travel to the furthest visible unexplored room or node you can reasonably reach. Claim one reward there, then reach an exit or checkpoint.",
    "primaryGenre": "roguelike",
    "compatibleGenres": [],
    "requirements": [
      "visible run map",
      "unexplored rooms or nodes",
      "exits or checkpoints"
    ],
    "archetype": "expedition",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "two-paths-meet",
    "title": "Two Paths Meet",
    "objective": "At the next safe branch, explore different short routes from your teammate, each claim one useful pickup, and regroup before the next major encounter.",
    "primaryGenre": "roguelike",
    "compatibleGenres": [
      "rpg"
    ],
    "requirements": [
      "online co-op",
      "branching areas",
      "shared checkpoints"
    ],
    "archetype": "expedition",
    "settings": [],
    "requiresOnline": true
  },
  {
    "id": "buy-the-missing-piece",
    "title": "Buy the Missing Piece",
    "objective": "At the next shop, identify whether your build most needs defense, damage, mobility, or recovery. Buy one item for that need and trigger it in the next encounter.",
    "primaryGenre": "roguelike",
    "compatibleGenres": [
      "rpg"
    ],
    "requirements": [
      "shops",
      "build-based items",
      "combat encounters"
    ],
    "archetype": "optimization",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "trim-the-deck",
    "title": "Trim the Deck",
    "objective": "Remove or replace the weakest card, item, or upgrade in your build, then defeat the next elite or clear the next three encounters.",
    "primaryGenre": "roguelike",
    "compatibleGenres": [
      "rpg"
    ],
    "requirements": [
      "removable or replaceable build elements",
      "elite enemies or room-based encounters"
    ],
    "archetype": "optimization",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "resource-conversion",
    "title": "Resource Conversion",
    "objective": "Turn one spare resource into defense, damage, mobility, or recovery. Use the result in two encounters and reach the next checkpoint.",
    "primaryGenre": "roguelike",
    "compatibleGenres": [
      "rpg"
    ],
    "requirements": [
      "convertible resources",
      "multiple upgrade paths",
      "checkpoints"
    ],
    "archetype": "optimization",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "threshold-hunter",
    "title": "Threshold Hunter",
    "objective": "Choose one upgrade that completes a set, level, stack, or synergy threshold. Activate the completed effect before the next checkpoint.",
    "primaryGenre": "roguelike",
    "compatibleGenres": [
      "rpg"
    ],
    "requirements": [
      "stacking or set-based upgrades",
      "upgrade choices",
      "checkpoints"
    ],
    "archetype": "optimization",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "cooldown-relay",
    "title": "Cooldown Relay",
    "objective": "Arrange two abilities or items so one is ready while the other recovers. Alternate between them through two encounters, then reach the next reward.",
    "primaryGenre": "roguelike",
    "compatibleGenres": [
      "rpg",
      "action"
    ],
    "requirements": [
      "cooldown-based abilities or items",
      "swappable build",
      "combat encounters"
    ],
    "archetype": "optimization",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "the-safe-investment",
    "title": "The Safe Investment",
    "objective": "Keep your currency until the next shop, make one lasting upgrade instead of several temporary purchases, and reach the following checkpoint.",
    "primaryGenre": "roguelike",
    "compatibleGenres": [
      "rpg"
    ],
    "requirements": [
      "currency",
      "shops",
      "lasting and temporary purchases"
    ],
    "archetype": "optimization",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "one-more-room",
    "title": "One More Room",
    "objective": "When you next reach a safe stopping point, enter one additional room or encounter, clear it, and end at the next safe point.",
    "primaryGenre": "roguelike",
    "compatibleGenres": [],
    "requirements": [
      "room-based progression",
      "safe stopping points",
      "combat encounters"
    ],
    "archetype": "performance",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "steady-start",
    "title": "Steady Start",
    "objective": "Clear the first two encounters of the next area without using healing. Healing is allowed again as soon as the second encounter ends.",
    "primaryGenre": "roguelike",
    "compatibleGenres": [
      "action"
    ],
    "requirements": [
      "area transitions",
      "healing resources",
      "combat encounters"
    ],
    "archetype": "performance",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "earn-the-exit",
    "title": "Earn the Exit",
    "objective": "Before taking the next available exit, complete one optional encounter, event, or elite challenge and claim its reward.",
    "primaryGenre": "roguelike",
    "compatibleGenres": [],
    "requirements": [
      "optional challenges",
      "available exits",
      "rewards"
    ],
    "archetype": "performance",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "recovery-run",
    "title": "Recovery Run",
    "objective": "After dropping below half health, recover above half using only resources found during the run, then clear the next encounter.",
    "primaryGenre": "roguelike",
    "compatibleGenres": [
      "rpg"
    ],
    "requirements": [
      "health recovery",
      "run-based resources",
      "combat encounters"
    ],
    "archetype": "performance",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "keep-the-streak",
    "title": "Keep the Streak",
    "objective": "Clear three consecutive encounters without restarting or rerolling a reward. Stop when the third encounter's reward is secured.",
    "primaryGenre": "roguelike",
    "compatibleGenres": [],
    "requirements": [
      "consecutive encounters",
      "rewards",
      "rerolls or restart options"
    ],
    "archetype": "performance",
    "settings": [],
    "requiresOnline": false
  }
] as const satisfies readonly QuestDefinition[];

