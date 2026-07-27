import type { QuestDefinition } from "../questTypes";

export const PLATFORMER_QUESTS = [
  {
    "id": "never-break-stride",
    "title": "Never Break Stride",
    "objective": "Reach the next checkpoint using a route that never returns to a previous platform. Take as long as you need to plan each move.",
    "primaryGenre": "platformer",
    "compatibleGenres": [
      "action"
    ],
    "requirements": [
      "continuous movement",
      "checkpoints",
      "platforming"
    ],
    "archetype": "performance",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "the-scenic-route",
    "title": "The Scenic Route",
    "objective": "Explore one visible optional path on the way to the next checkpoint, then rejoin the main route by any safe connection.",
    "primaryGenre": "platformer",
    "compatibleGenres": [
      "action"
    ],
    "requirements": [
      "branching paths",
      "checkpoints",
      "optional routes"
    ],
    "archetype": "expedition",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "one-clean-run",
    "title": "One Clean Run",
    "objective": "Collect one optional secret or collectible and reach the next checkpoint without dying or restarting.",
    "primaryGenre": "platformer",
    "compatibleGenres": [
      "action"
    ],
    "requirements": [
      "collectibles or secrets",
      "checkpoints",
      "failure or restart state"
    ],
    "archetype": "performance",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "hold-the-door",
    "title": "Hold the Door",
    "objective": "Reach the next co-op gate first, keep its route safe or open, and wait until every teammate crosses before continuing.",
    "primaryGenre": "platformer",
    "compatibleGenres": [
      "action",
      "puzzle"
    ],
    "requirements": [
      "online co-op platforming",
      "shared gates or checkpoints",
      "team traversal"
    ],
    "archetype": "support",
    "settings": [],
    "requiresOnline": true
  },
  {
    "id": "be-the-second-jump",
    "title": "Be the Second Jump",
    "objective": "Let a teammate attempt each unfamiliar obstacle first, then follow close enough to demonstrate an alternative route or recover the team if they miss.",
    "primaryGenre": "platformer",
    "compatibleGenres": [
      "action"
    ],
    "requirements": [
      "online co-op platforming",
      "recoverable falls or respawns",
      "shared route"
    ],
    "archetype": "support",
    "settings": [],
    "requiresOnline": true
  },
  {
    "id": "carry-the-key",
    "title": "Carry the Key",
    "objective": "Take responsibility for the shared key, object, or activation tool and deliver it to the next gate while teammates choose the route.",
    "primaryGenre": "platformer",
    "compatibleGenres": [
      "puzzle",
      "action"
    ],
    "requirements": [
      "online co-op",
      "carried shared objects",
      "gated traversal"
    ],
    "archetype": "support",
    "settings": [],
    "requiresOnline": true
  },
  {
    "id": "match-the-slowest-pace",
    "title": "Match the Slowest Pace",
    "objective": "Stay with the teammate farthest behind through the next platforming section and cross its finish within a few seconds of each other.",
    "primaryGenre": "platformer",
    "compatibleGenres": [
      "action"
    ],
    "requirements": [
      "online co-op platforming",
      "shared section finish",
      "player position visibility"
    ],
    "archetype": "support",
    "settings": [],
    "requiresOnline": true
  },
  {
    "id": "save-the-bounce",
    "title": "Save the Bounce",
    "objective": "Use a boost, launch, switch, or moving platform to help a teammate reach one optional ledge, then reunite at the next checkpoint.",
    "primaryGenre": "platformer",
    "compatibleGenres": [
      "puzzle",
      "action"
    ],
    "requirements": [
      "online co-op",
      "cooperative traversal interactions",
      "optional ledges or routes"
    ],
    "archetype": "support",
    "settings": [],
    "requiresOnline": true
  },
  {
    "id": "guide-the-companion",
    "title": "Guide the Companion",
    "objective": "Bring an allied companion, creature, or escort safely through the next traversal section and finish with both of you at the checkpoint.",
    "primaryGenre": "platformer",
    "compatibleGenres": [
      "action",
      "puzzle"
    ],
    "requirements": [
      "AI companion or escort",
      "platforming sections",
      "shared checkpoints"
    ],
    "archetype": "support",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "take-the-lower-line",
    "title": "Take the Lower Line",
    "objective": "Use the lowest viable route through the next branching section and rejoin the main path at its next checkpoint.",
    "primaryGenre": "platformer",
    "compatibleGenres": [
      "action"
    ],
    "requirements": [
      "branching vertical routes",
      "checkpoints",
      "platforming"
    ],
    "archetype": "adaptation",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "swap-your-movement-tool",
    "title": "Swap Your Movement Tool",
    "objective": "Complete one short section with a movement ability, character, or form you use less often, then return to your usual choice at the checkpoint.",
    "primaryGenre": "platformer",
    "compatibleGenres": [
      "action"
    ],
    "requirements": [
      "multiple movement options",
      "selectable abilities or characters",
      "checkpoints"
    ],
    "archetype": "adaptation",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "land-and-look",
    "title": "Land and Look",
    "objective": "After every major landing in the next section, choose your following platform before moving again. Reach the checkpoint with no blind jumps.",
    "primaryGenre": "platformer",
    "compatibleGenres": [
      "puzzle"
    ],
    "requirements": [
      "discrete platforms",
      "route visibility",
      "checkpoints"
    ],
    "archetype": "adaptation",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "recover-the-run",
    "title": "Recover the Run",
    "objective": "When you miss the intended platform, use a recovery move or lower route to keep going and reach the next checkpoint without manually restarting.",
    "primaryGenre": "platformer",
    "compatibleGenres": [
      "action"
    ],
    "requirements": [
      "recoverable falls",
      "alternate lower routes or recovery moves",
      "checkpoints"
    ],
    "archetype": "adaptation",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "touch-the-moving-platforms",
    "title": "Touch the Moving Platforms",
    "objective": "Use every visible moving-platform type in the next section at least once, then reach its checkpoint by any safe route.",
    "primaryGenre": "platformer",
    "compatibleGenres": [
      "puzzle"
    ],
    "requirements": [
      "multiple moving-platform types",
      "visible routes",
      "checkpoints"
    ],
    "archetype": "adaptation",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "jump-later",
    "title": "Jump Later",
    "objective": "Complete the next timing-focused section by deliberately waiting for the second safe cycle at each new obstacle instead of taking the first opening.",
    "primaryGenre": "platformer",
    "compatibleGenres": [
      "puzzle"
    ],
    "requirements": [
      "cyclical obstacles",
      "timed platforming",
      "section checkpoint"
    ],
    "archetype": "adaptation",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "follow-the-collectible-line",
    "title": "Follow the Collectible Line",
    "objective": "Choose one visible trail of coins, pickups, or markers and follow it until it ends or rejoins the main route, then reach the next checkpoint.",
    "primaryGenre": "platformer",
    "compatibleGenres": [
      "action"
    ],
    "requirements": [
      "visible collectible trails",
      "branching routes",
      "checkpoints"
    ],
    "archetype": "expedition",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "above-the-main-path",
    "title": "Above the Main Path",
    "objective": "Reach one optional ledge or room visibly above the normal route, collect or activate what is there, and return to the main path.",
    "primaryGenre": "platformer",
    "compatibleGenres": [
      "action"
    ],
    "requirements": [
      "vertical optional areas",
      "collectibles or switches",
      "returnable routes"
    ],
    "archetype": "expedition",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "find-the-shortcut-back",
    "title": "Find the Shortcut Back",
    "objective": "Explore past the next checkpoint until you open a shortcut that reconnects to an earlier safe area, then use it once.",
    "primaryGenre": "platformer",
    "compatibleGenres": [
      "action"
    ],
    "requirements": [
      "interconnected levels",
      "unlockable shortcuts",
      "checkpoints or safe areas"
    ],
    "archetype": "expedition",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "one-room-off-route",
    "title": "One Room Off Route",
    "objective": "Enter one optional room or challenge beside the main path, reach its clear end, and return before advancing the story route.",
    "primaryGenre": "platformer",
    "compatibleGenres": [
      "puzzle",
      "action"
    ],
    "requirements": [
      "optional rooms or challenges",
      "main route",
      "clear completion states"
    ],
    "archetype": "expedition",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "ride-it-to-the-end",
    "title": "Ride It to the End",
    "objective": "Stay with one moving platform, rail, current, creature, or vehicle from its earliest reachable point to its final stop.",
    "primaryGenre": "platformer",
    "compatibleGenres": [
      "action"
    ],
    "requirements": [
      "moving traversal carriers",
      "reachable route start",
      "defined final stop"
    ],
    "archetype": "expedition",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "link-the-movement",
    "title": "Link the Movement",
    "objective": "Cross the next section by chaining two different movement abilities wherever the terrain allows, and finish at the checkpoint with momentum.",
    "primaryGenre": "platformer",
    "compatibleGenres": [
      "action"
    ],
    "requirements": [
      "multiple movement abilities",
      "chainable traversal",
      "checkpoints"
    ],
    "archetype": "optimization",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "skip-the-wait",
    "title": "Skip the Wait",
    "objective": "Find one safe way past a repeating obstacle without waiting through its full cycle, then reach the next checkpoint using that route.",
    "primaryGenre": "platformer",
    "compatibleGenres": [
      "puzzle",
      "action"
    ],
    "requirements": [
      "repeating obstacles",
      "alternate timing or routes",
      "checkpoints"
    ],
    "archetype": "optimization",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "open-the-return-path",
    "title": "Open the Return Path",
    "objective": "While moving forward, activate one ladder, door, lift, bridge, or shortcut that would make a future return easier. Use it before ending the quest.",
    "primaryGenre": "platformer",
    "compatibleGenres": [
      "action",
      "puzzle"
    ],
    "requirements": [
      "unlockable traversal shortcuts",
      "interconnected levels",
      "backtracking"
    ],
    "archetype": "optimization",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "fewest-safe-landings",
    "title": "Fewest Safe Landings",
    "objective": "Look over the next short section, choose a route with fewer landings than the obvious path, and reach its checkpoint successfully.",
    "primaryGenre": "platformer",
    "compatibleGenres": [
      "puzzle"
    ],
    "requirements": [
      "multiple visible routes",
      "discrete platforms",
      "checkpoints"
    ],
    "archetype": "optimization",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "collect-on-the-way",
    "title": "Collect on the Way",
    "objective": "Reach one visible optional pickup without leaving your route to the next checkpoint more than once, then finish the section.",
    "primaryGenre": "platformer",
    "compatibleGenres": [
      "action"
    ],
    "requirements": [
      "visible optional pickups",
      "branching routes",
      "checkpoints"
    ],
    "archetype": "optimization",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "one-switch-two-runners",
    "title": "One Switch, Two Runners",
    "objective": "Coordinate one co-op switch or moving platform so both players cross during the same activation, then reach the checkpoint together.",
    "primaryGenre": "platformer",
    "compatibleGenres": [
      "puzzle"
    ],
    "requirements": [
      "online co-op",
      "shared timed mechanisms",
      "team checkpoints"
    ],
    "archetype": "optimization",
    "settings": [],
    "requiresOnline": true
  },
  {
    "id": "three-jumps-ahead",
    "title": "Three Jumps Ahead",
    "objective": "For one short platforming section, keep your next three landing points planned before each takeoff and reach the checkpoint without a blind correction.",
    "primaryGenre": "platformer",
    "compatibleGenres": [
      "puzzle"
    ],
    "requirements": [
      "visible platform sequence",
      "air control",
      "checkpoints"
    ],
    "archetype": "performance",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "keep-the-power-up",
    "title": "Keep the Power-Up",
    "objective": "Carry one temporary movement power-up, mount, or form from where you find it to the next checkpoint without losing it.",
    "primaryGenre": "platformer",
    "compatibleGenres": [
      "action"
    ],
    "requirements": [
      "temporary movement power-ups",
      "loss conditions",
      "checkpoints"
    ],
    "archetype": "performance",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "hit-the-middle",
    "title": "Hit the Middle",
    "objective": "Land near the center of each major platform in the next short section and reach its checkpoint. Small corrective steps after landing are allowed.",
    "primaryGenre": "platformer",
    "compatibleGenres": [],
    "requirements": [
      "discrete major platforms",
      "precise landing control",
      "checkpoints"
    ],
    "archetype": "performance",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "one-cycle-each",
    "title": "One Cycle Each",
    "objective": "Cross each new repeating hazard in the next section within one full cycle of first reaching it, then finish at the checkpoint.",
    "primaryGenre": "platformer",
    "compatibleGenres": [
      "puzzle"
    ],
    "requirements": [
      "repeating hazards",
      "timed traversal",
      "checkpoints"
    ],
    "archetype": "performance",
    "settings": [],
    "requiresOnline": false
  }
] as const satisfies readonly QuestDefinition[];
