import type { QuestDefinition } from "../questTypes";

export const ACTION_QUESTS = [
  {
    "id": "the-other-entrance",
    "title": "The Other Entrance",
    "objective": "Reach an objective through a route you have never used before, then leave the area by a different route.",
    "primaryGenre": "action",
    "compatibleGenres": [
      "rpg",
      "shooter"
    ],
    "requirements": [
      "open levels",
      "alternate routes",
      "defined objectives"
    ],
    "archetype": "expedition",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "improvised-escape",
    "title": "Improvised Escape",
    "objective": "Trigger a high-alert pursuit and escape to safety without defeating any of the enemies chasing you.",
    "primaryGenre": "action",
    "compatibleGenres": [
      "shooter",
      "rpg"
    ],
    "requirements": [
      "alert or wanted system",
      "pursuit",
      "safe-state recovery"
    ],
    "archetype": "performance",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "environmental-advantage",
    "title": "Environmental Advantage",
    "objective": "Finish one combat encounter using only traps, hazards, vehicles, thrown objects, or other environmental tools for the final blows.",
    "primaryGenre": "action",
    "compatibleGenres": [
      "shooter",
      "rpg"
    ],
    "requirements": [
      "combat",
      "interactive environment",
      "environmental damage"
    ],
    "archetype": "adaptation",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "get-them-home",
    "title": "Get Them Home",
    "objective": "Choose the teammate carrying the objective, weakest equipment, or least health and escort them to the next safe point before pursuing your own goal.",
    "primaryGenre": "action",
    "compatibleGenres": [
      "shooter",
      "survival"
    ],
    "requirements": [
      "online co-op",
      "shared objectives or safe points",
      "player status information"
    ],
    "archetype": "support",
    "settings": [],
    "requiresOnline": true
  },
  {
    "id": "set-up-the-finish",
    "title": "Set Up the Finish",
    "objective": "Create an opening with a distraction, stun, launch, or exposed weak point, then let a teammate land the decisive action.",
    "primaryGenre": "action",
    "compatibleGenres": [
      "shooter",
      "rpg"
    ],
    "requirements": [
      "online co-op combat",
      "setup abilities or interactions",
      "shared enemies"
    ],
    "archetype": "support",
    "settings": [],
    "requiresOnline": true
  },
  {
    "id": "no-one-left-downed",
    "title": "No One Left Downed",
    "objective": "During the next co-op encounter, revive or rescue every teammate you can reach and finish with the whole group active.",
    "primaryGenre": "action",
    "compatibleGenres": [
      "shooter",
      "survival"
    ],
    "requirements": [
      "online team mode",
      "downed state",
      "revives or rescues"
    ],
    "archetype": "support",
    "settings": [],
    "requiresOnline": true
  },
  {
    "id": "follow-their-lead",
    "title": "Follow Their Lead",
    "objective": "Let a teammate choose the route and pace to the next objective. Cover their approach and only redirect if the team would fail.",
    "primaryGenre": "action",
    "compatibleGenres": [
      "rpg",
      "shooter"
    ],
    "requirements": [
      "online co-op",
      "open routes",
      "shared objective"
    ],
    "archetype": "support",
    "settings": [],
    "requiresOnline": true
  },
  {
    "id": "protect-the-specialist",
    "title": "Protect the Specialist",
    "objective": "Keep the teammate using the most specialized tool or ability safe until they use it successfully on the shared objective.",
    "primaryGenre": "action",
    "compatibleGenres": [
      "shooter",
      "rpg"
    ],
    "requirements": [
      "online co-op",
      "distinct roles or abilities",
      "shared objective"
    ],
    "archetype": "support",
    "settings": [],
    "requiresOnline": true
  },
  {
    "id": "the-companions-moment",
    "title": "The Companion's Moment",
    "objective": "Bring an allied companion into the next suitable encounter and create a safe opportunity for their ability to make a meaningful contribution.",
    "primaryGenre": "action",
    "compatibleGenres": [
      "rpg"
    ],
    "requirements": [
      "controllable or commandable companion",
      "companion abilities",
      "combat encounters"
    ],
    "archetype": "support",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "switch-the-approach",
    "title": "Switch the Approach",
    "objective": "If the next objective begins in stealth, finish it openly; if it begins openly, break contact and finish from concealment.",
    "primaryGenre": "action",
    "compatibleGenres": [
      "shooter",
      "rpg"
    ],
    "requirements": [
      "stealth and open combat",
      "multi-stage objectives",
      "alert states"
    ],
    "archetype": "adaptation",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "borrowed-toolkit",
    "title": "Borrowed Toolkit",
    "objective": "Complete one encounter using a weapon, ability set, or gadget category you have equipped but rarely rely on.",
    "primaryGenre": "action",
    "compatibleGenres": [
      "rpg",
      "shooter"
    ],
    "requirements": [
      "multiple combat tools",
      "selectable loadout",
      "combat encounters"
    ],
    "archetype": "adaptation",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "turn-the-chase-around",
    "title": "Turn the Chase Around",
    "objective": "Let one manageable enemy group pursue you into a better position, then complete the encounter there instead of returning to your starting ground.",
    "primaryGenre": "action",
    "compatibleGenres": [
      "shooter",
      "rpg"
    ],
    "requirements": [
      "mobile enemies",
      "open combat spaces",
      "combat encounters"
    ],
    "archetype": "adaptation",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "use-the-first-opening",
    "title": "Use the First Opening",
    "objective": "In the next encounter, commit to the first viable route, tool, or weak point the game reveals and build your approach around it.",
    "primaryGenre": "action",
    "compatibleGenres": [
      "rpg",
      "shooter"
    ],
    "requirements": [
      "multiple approaches",
      "environmental or enemy openings",
      "combat or traversal objective"
    ],
    "archetype": "adaptation",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "fight-from-the-middle",
    "title": "Fight From the Middle",
    "objective": "Complete the next encounter while moving between close and long range instead of staying at your preferred distance. Change range at least twice.",
    "primaryGenre": "action",
    "compatibleGenres": [
      "shooter",
      "rpg"
    ],
    "requirements": [
      "ranged and close-range options",
      "combat encounters",
      "mobile positioning"
    ],
    "archetype": "adaptation",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "follow-the-moving-target",
    "title": "Follow the Moving Target",
    "objective": "Track a moving person, creature, convoy, or signal to its destination without using the map's direct objective path.",
    "primaryGenre": "action",
    "compatibleGenres": [
      "rpg",
      "shooter"
    ],
    "requirements": [
      "trackable moving target",
      "open routes",
      "navigation"
    ],
    "archetype": "expedition",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "beyond-the-last-checkpoint",
    "title": "Beyond the Last Checkpoint",
    "objective": "Continue past your most recently visited safe point, discover one new named place or meaningful landmark, and return or secure a new checkpoint.",
    "primaryGenre": "action",
    "compatibleGenres": [
      "rpg",
      "survival"
    ],
    "requirements": [
      "explorable world",
      "discoverable locations",
      "safe points or checkpoints"
    ],
    "archetype": "expedition",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "the-rooftop-line",
    "title": "The Rooftop Line",
    "objective": "Reach the next objective using an elevated route for most of the journey, then descend only when you are close enough to act.",
    "primaryGenre": "action",
    "compatibleGenres": [
      "platformer",
      "shooter"
    ],
    "requirements": [
      "vertical traversal",
      "alternate routes",
      "defined objectives"
    ],
    "archetype": "expedition",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "three-stops-one-purpose",
    "title": "Three Stops, One Purpose",
    "objective": "Visit three nearby optional locations that serve the same goal—supplies, information, allies, or upgrades—then use what you gained at the main objective.",
    "primaryGenre": "action",
    "compatibleGenres": [
      "rpg"
    ],
    "requirements": [
      "open areas",
      "optional locations",
      "main objectives"
    ],
    "archetype": "expedition",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "leave-by-water",
    "title": "Leave by Water",
    "objective": "Reach or leave one objective area using a different traversal system than you arrived with, such as swimming, climbing, gliding, or a vehicle.",
    "primaryGenre": "action",
    "compatibleGenres": [
      "rpg",
      "platformer"
    ],
    "requirements": [
      "multiple traversal systems",
      "open objective areas",
      "defined objectives"
    ],
    "archetype": "expedition",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "one-tool-two-problems",
    "title": "One Tool, Two Problems",
    "objective": "Use the same gadget, ability, or environmental interaction to solve one traversal problem and one combat or objective problem.",
    "primaryGenre": "action",
    "compatibleGenres": [
      "platformer",
      "puzzle"
    ],
    "requirements": [
      "multi-purpose tools or abilities",
      "traversal",
      "combat or interactive objectives"
    ],
    "archetype": "optimization",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "shorten-the-return",
    "title": "Shorten the Return",
    "objective": "Reach a nearby objective normally, then unlock or discover a faster route back to your starting area and use it.",
    "primaryGenre": "action",
    "compatibleGenres": [
      "rpg",
      "platformer"
    ],
    "requirements": [
      "interconnected map",
      "shortcuts or alternate routes",
      "defined objectives"
    ],
    "archetype": "optimization",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "save-the-strong-tool",
    "title": "Save the Strong Tool",
    "objective": "Handle the ordinary threats in the next encounter with basic options, then use your strongest limited tool on the clearest high-value target.",
    "primaryGenre": "action",
    "compatibleGenres": [
      "rpg",
      "shooter"
    ],
    "requirements": [
      "limited-use powerful tools",
      "mixed enemy threats",
      "combat encounters"
    ],
    "archetype": "optimization",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "break-the-chain",
    "title": "Break the Chain",
    "objective": "Identify the alarm, reinforcement, healing, or support source in the next encounter and disable it before dealing with the remaining threats.",
    "primaryGenre": "action",
    "compatibleGenres": [
      "shooter",
      "rpg"
    ],
    "requirements": [
      "combat support systems or enemies",
      "target prioritization",
      "combat encounters"
    ],
    "archetype": "optimization",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "carry-less-return-with-more",
    "title": "Carry Less, Return With More",
    "objective": "Leave a safe point with one inventory slot or tool slot deliberately free, fill it with something useful during the next objective, and return.",
    "primaryGenre": "action",
    "compatibleGenres": [
      "rpg",
      "survival"
    ],
    "requirements": [
      "limited inventory",
      "collectible supplies or equipment",
      "safe points"
    ],
    "archetype": "optimization",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "two-jobs-one-route",
    "title": "Two Jobs, One Route",
    "objective": "Choose two nearby objectives or needs and complete both on one outward journey before returning to a safe point.",
    "primaryGenre": "action",
    "compatibleGenres": [
      "rpg"
    ],
    "requirements": [
      "multiple active objectives",
      "open map",
      "safe points"
    ],
    "archetype": "optimization",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "clean-entry-clean-exit",
    "title": "Clean Entry, Clean Exit",
    "objective": "Enter one hostile area, complete its objective, and return outside without triggering a second alert after the objective is secured.",
    "primaryGenre": "action",
    "compatibleGenres": [
      "shooter",
      "rpg"
    ],
    "requirements": [
      "hostile areas",
      "alert system",
      "retrievable or completable objectives"
    ],
    "archetype": "performance",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "keep-the-combo-alive",
    "title": "Keep the Combo Alive",
    "objective": "Carry one combo, flow, or momentum chain from the first threat to the last in a short encounter. Brief safe pauses are allowed if the game preserves the chain.",
    "primaryGenre": "action",
    "compatibleGenres": [
      "platformer"
    ],
    "requirements": [
      "combo or momentum system",
      "combat encounters",
      "visible chain state"
    ],
    "archetype": "performance",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "finish-what-you-start",
    "title": "Finish What You Start",
    "objective": "Choose one optional encounter or activity already visible nearby and complete it through its clear end state without switching to another objective.",
    "primaryGenre": "action",
    "compatibleGenres": [
      "rpg"
    ],
    "requirements": [
      "optional activities",
      "visible completion states",
      "open objective choice"
    ],
    "archetype": "performance",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "untouched-supplies",
    "title": "Untouched Supplies",
    "objective": "Complete the next short encounter without using a healing or recovery item, then restock or recover normally once the area is safe.",
    "primaryGenre": "action",
    "compatibleGenres": [
      "rpg",
      "shooter"
    ],
    "requirements": [
      "combat encounters",
      "healing or recovery items",
      "safe state"
    ],
    "archetype": "performance",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "the-last-second-is-yours",
    "title": "The Last Second Is Yours",
    "objective": "Complete one timed escape, chase, defense, or traversal sequence successfully after choosing a route before the countdown begins.",
    "primaryGenre": "action",
    "compatibleGenres": [
      "platformer",
      "shooter"
    ],
    "requirements": [
      "timed sequences",
      "route choice",
      "clear success state"
    ],
    "archetype": "performance",
    "settings": [],
    "requiresOnline": false
  }
] as const satisfies readonly QuestDefinition[];

