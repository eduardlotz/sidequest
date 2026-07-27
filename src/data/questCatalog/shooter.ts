import type { QuestDefinition } from "../questTypes";

export const SHOOTER_QUESTS = [
  {
    "id": "borrowed-arsenal",
    "title": "Borrowed Arsenal",
    "objective": "After your first elimination, use only weapons dropped by defeated enemies until you defeat three more.",
    "primaryGenre": "shooter",
    "compatibleGenres": [
      "action"
    ],
    "requirements": [
      "combat",
      "dropped weapons",
      "interchangeable equipment"
    ],
    "archetype": "adaptation",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "nobody-saw-you-leave",
    "title": "Nobody Saw You Leave",
    "objective": "Enter a guarded area, take its objective or most valuable item, and leave without triggering combat.",
    "primaryGenre": "shooter",
    "compatibleGenres": [
      "action",
      "rpg"
    ],
    "requirements": [
      "stealth",
      "guarded areas",
      "retrievable objective or item"
    ],
    "archetype": "performance",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "back-the-underdog",
    "title": "Back the Underdog",
    "objective": "After the opening minute, identify the teammate at the bottom of the scoreboard. Help them earn an elimination, score, or objective contribution—and win the round.",
    "primaryGenre": "shooter",
    "compatibleGenres": [
      "sports"
    ],
    "requirements": [
      "online team mode",
      "scoreboard",
      "assists or shared objectives"
    ],
    "archetype": "support",
    "settings": [],
    "requiresOnline": true
  },
  {
    "id": "guardian-angel",
    "title": "Guardian Angel",
    "objective": "Choose one teammate at the start of a round. Keep them alive until the round ends and help them earn at least one elimination or objective contribution.",
    "primaryGenre": "shooter",
    "compatibleGenres": [
      "action"
    ],
    "requirements": [
      "online team mode",
      "revives or healing",
      "eliminations or shared objectives"
    ],
    "archetype": "support",
    "settings": [],
    "requiresOnline": true
  },
  {
    "id": "make-every-shot-count",
    "title": "Make Every Shot Count",
    "objective": "Complete the next combat encounter without reloading early. Empty every magazine before switching weapons or reloading, and finish the encounter alive.",
    "primaryGenre": "shooter",
    "compatibleGenres": [
      "action"
    ],
    "requirements": [
      "combat",
      "limited magazines",
      "manual reloading"
    ],
    "archetype": "performance",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "keep-moving",
    "title": "Keep Moving",
    "objective": "Win the next combat encounter without remaining in the same cover position for more than ten seconds. Move to a new position after every elimination.",
    "primaryGenre": "shooter",
    "compatibleGenres": [
      "action"
    ],
    "requirements": [
      "combat",
      "cover or combat positions",
      "eliminations"
    ],
    "archetype": "adaptation",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "make-the-opening",
    "title": "Make the Opening",
    "objective": "Mark, suppress, distract, or break the defenses of a threat so a teammate can secure the elimination. Then help capture or advance the current objective.",
    "primaryGenre": "shooter",
    "compatibleGenres": [
      "action"
    ],
    "requirements": [
      "online team mode",
      "assists",
      "suppression, marking, distractions, or defense breaks"
    ],
    "archetype": "support",
    "settings": [],
    "requiresOnline": true
  },
  {
    "id": "bring-them-back",
    "title": "Bring Them Back",
    "objective": "Revive or resupply a teammate, then stay with them until both of you contribute to the next objective or encounter.",
    "primaryGenre": "shooter",
    "compatibleGenres": [
      "action"
    ],
    "requirements": [
      "online team mode",
      "revives or resupply",
      "shared objectives"
    ],
    "archetype": "support",
    "settings": [],
    "requiresOnline": true
  },
  {
    "id": "escort-the-carrier",
    "title": "Escort the Carrier",
    "objective": "Choose the teammate carrying or controlling the objective. Stay close enough to protect or assist them until they reach a checkpoint, score, or handoff.",
    "primaryGenre": "shooter",
    "compatibleGenres": [
      "sports"
    ],
    "requirements": [
      "online objective mode",
      "carried or controlled objective",
      "assists or protection"
    ],
    "archetype": "support",
    "settings": [],
    "requiresOnline": true
  },
  {
    "id": "two-person-crossfire",
    "title": "Two-Person Crossfire",
    "objective": "Take a different angle from one teammate and help create an elimination from both positions. Regroup after each of you earns an assist or elimination.",
    "primaryGenre": "shooter",
    "compatibleGenres": [
      "action"
    ],
    "requirements": [
      "online team mode",
      "assists or eliminations",
      "open combat positions"
    ],
    "archetype": "support",
    "settings": [],
    "requiresOnline": true
  },
  {
    "id": "scavenger-loadout",
    "title": "Scavenger Loadout",
    "objective": "Pick up one weapon you find during the next area and use it for two eliminations or one objective defense before replacing it.",
    "primaryGenre": "shooter",
    "compatibleGenres": [
      "action",
      "roguelike"
    ],
    "requirements": [
      "weapon pickups",
      "eliminations or objective defense",
      "interchangeable weapons"
    ],
    "archetype": "adaptation",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "range-shift",
    "title": "Range Shift",
    "objective": "After your next elimination, change to a clearly different engagement range. Earn one more elimination or finish the encounter from the new range.",
    "primaryGenre": "shooter",
    "compatibleGenres": [
      "action"
    ],
    "requirements": [
      "multiple weapon ranges",
      "combat",
      "eliminations"
    ],
    "archetype": "adaptation",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "the-counter-tool",
    "title": "The Counter-Tool",
    "objective": "When one enemy type, weapon, or defense stops you, change exactly one tool or attachment to counter it. Use the change successfully before the encounter ends.",
    "primaryGenre": "shooter",
    "compatibleGenres": [
      "action"
    ],
    "requirements": [
      "swappable tools or attachments",
      "varied enemy types or defenses",
      "combat"
    ],
    "archetype": "adaptation",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "field-requisition",
    "title": "Field Requisition",
    "objective": "Begin the next objective with your usual loadout, then replace one weapon or tool with the first useful option found there. Complete the objective using both.",
    "primaryGenre": "shooter",
    "compatibleGenres": [
      "action"
    ],
    "requirements": [
      "weapon or tool pickups",
      "objectives",
      "interchangeable loadout"
    ],
    "archetype": "adaptation",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "the-unused-route",
    "title": "The Unused Route",
    "objective": "Approach the next objective by a route you have not used this session. Secure the objective or reach its checkpoint before returning to your usual path.",
    "primaryGenre": "shooter",
    "compatibleGenres": [
      "action"
    ],
    "requirements": [
      "open levels",
      "multiple routes",
      "defined objectives"
    ],
    "archetype": "expedition",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "high-ground-recon",
    "title": "High-Ground Recon",
    "objective": "Reach a safe elevated position, identify three threats or entry points, then descend and complete the next objective using one thing you observed.",
    "primaryGenre": "shooter",
    "compatibleGenres": [
      "action"
    ],
    "requirements": [
      "open combat spaces",
      "elevated positions",
      "visible threats or routes"
    ],
    "archetype": "expedition",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "sweep-and-return",
    "title": "Sweep and Return",
    "objective": "Search three optional rooms or side areas for supplies or intel, then return to the main route and reach the next checkpoint.",
    "primaryGenre": "shooter",
    "compatibleGenres": [
      "action"
    ],
    "requirements": [
      "optional side areas",
      "supplies or intel",
      "checkpoints"
    ],
    "archetype": "expedition",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "forward-cache",
    "title": "Forward Cache",
    "objective": "Travel beyond the current safe point, locate one ammo, equipment, or healing cache, and return to the objective route with something useful from it.",
    "primaryGenre": "shooter",
    "compatibleGenres": [
      "action",
      "survival"
    ],
    "requirements": [
      "open mission areas",
      "supply caches",
      "safe points or objective route"
    ],
    "archetype": "expedition",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "breach-and-circle-back",
    "title": "Breach and Circle Back",
    "objective": "Enter the next hostile area through a side entrance, complete one objective interaction, and leave by the main route after the area is secure.",
    "primaryGenre": "shooter",
    "compatibleGenres": [
      "action"
    ],
    "requirements": [
      "multiple entrances",
      "hostile areas",
      "objective interactions"
    ],
    "archetype": "expedition",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "signal-chaser",
    "title": "Signal Chaser",
    "objective": "Investigate the next optional signal, distress call, bounty marker, or activity you can reach. Resolve it, then continue to your original objective.",
    "primaryGenre": "shooter",
    "compatibleGenres": [
      "action"
    ],
    "requirements": [
      "optional map activities",
      "mission objectives",
      "open mission areas"
    ],
    "archetype": "expedition",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "loadout-with-a-job",
    "title": "Loadout With a Job",
    "objective": "Give each equipped weapon or tool one clear job such as range, armor, crowds, or escape. Use every job once before the next checkpoint.",
    "primaryGenre": "shooter",
    "compatibleGenres": [
      "action"
    ],
    "requirements": [
      "multi-slot loadout",
      "varied combat needs",
      "checkpoints"
    ],
    "archetype": "optimization",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "fix-the-ammo-economy",
    "title": "Fix the Ammo Economy",
    "objective": "Pair two weapons that use different ammo or recovery systems. Clear the next encounter and finish with both weapons still usable.",
    "primaryGenre": "shooter",
    "compatibleGenres": [
      "action",
      "survival"
    ],
    "requirements": [
      "multiple ammo or recovery systems",
      "multi-weapon loadout",
      "combat encounters"
    ],
    "archetype": "optimization",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "utility-before-damage",
    "title": "Utility Before Damage",
    "objective": "Use two non-damage tools to create openings in the next encounter, then clear it with your normal weapons.",
    "primaryGenre": "shooter",
    "compatibleGenres": [
      "action"
    ],
    "requirements": [
      "non-damage tools",
      "combat encounters",
      "multi-tool loadout"
    ],
    "archetype": "optimization",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "tune-one-weakness",
    "title": "Tune One Weakness",
    "objective": "Change one attachment, perk, or setting to improve your weakest range, defense, recoil, or mobility. Earn three eliminations or contributions before changing it again.",
    "primaryGenre": "shooter",
    "compatibleGenres": [
      "action"
    ],
    "requirements": [
      "customizable loadout",
      "attachments, perks, or settings",
      "eliminations or contributions"
    ],
    "archetype": "optimization",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "two-range-kit",
    "title": "Two-Range Kit",
    "objective": "Build a loadout that covers two distinct ranges without duplicating a weapon's role. Use each range to solve one threat in the same encounter.",
    "primaryGenre": "shooter",
    "compatibleGenres": [
      "action"
    ],
    "requirements": [
      "multi-weapon loadout",
      "distinct engagement ranges",
      "combat"
    ],
    "archetype": "optimization",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "quiet-setup",
    "title": "Quiet Setup",
    "objective": "Before the next firefight, place or prepare one defensive tool and one escape option. Use at least one of them, then finish the encounter.",
    "primaryGenre": "shooter",
    "compatibleGenres": [
      "action"
    ],
    "requirements": [
      "placeable or prepared tools",
      "combat encounters",
      "defense or mobility options"
    ],
    "archetype": "optimization",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "hold-then-move",
    "title": "Hold, Then Move",
    "objective": "Defend one approach long enough to stop two threats, then relocate as soon as the objective advances. Finish the encounter from the new position.",
    "primaryGenre": "shooter",
    "compatibleGenres": [
      "action"
    ],
    "requirements": [
      "defensible positions",
      "advancing objectives",
      "combat"
    ],
    "archetype": "performance",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "calm-under-pressure",
    "title": "Calm Under Pressure",
    "objective": "The first time you reach low health, get to cover, recover, and finish the same encounter without restarting or loading a checkpoint.",
    "primaryGenre": "shooter",
    "compatibleGenres": [
      "action"
    ],
    "requirements": [
      "health recovery",
      "cover or safe positions",
      "restartable encounters"
    ],
    "archetype": "performance",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "two-tool-clear",
    "title": "Two-Tool Clear",
    "objective": "Earn one elimination or disable one threat with each of two different weapons or tools, then complete the current encounter.",
    "primaryGenre": "shooter",
    "compatibleGenres": [
      "action"
    ],
    "requirements": [
      "multi-slot loadout",
      "eliminations or threat disables",
      "combat encounters"
    ],
    "archetype": "performance",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "clean-extraction",
    "title": "Clean Extraction",
    "objective": "Take one mission item, resource, or rescued character from its pickup point to the exit without dropping or abandoning it. Finish the extraction alive.",
    "primaryGenre": "shooter",
    "compatibleGenres": [
      "action",
      "survival"
    ],
    "requirements": [
      "extraction objectives",
      "carried items, resources, or escorts",
      "defined exits"
    ],
    "archetype": "performance",
    "settings": [],
    "requiresOnline": false
  }
] as const satisfies readonly QuestDefinition[];
