import type { QuestDefinition } from "../questTypes";

export const RPG_QUESTS = [
  {
    "id": "a-thief-with-standards",
    "title": "A Thief With Standards",
    "objective": "Steal one valuable item from a guarded location, escape without harming anyone, and sell it somewhere else.",
    "primaryGenre": "rpg",
    "compatibleGenres": [
      "action"
    ],
    "requirements": [
      "theft",
      "stealth",
      "guarded locations",
      "merchants"
    ],
    "archetype": "performance",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "the-oldest-promise",
    "title": "The Oldest Promise",
    "objective": "Return to the side quest you have ignored the longest and finish its next objective without using fast travel.",
    "primaryGenre": "rpg",
    "compatibleGenres": [
      "action"
    ],
    "requirements": [
      "quest log",
      "side quests",
      "open world",
      "fast travel"
    ],
    "archetype": "expedition",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "forbidden-school",
    "title": "The Forbidden School",
    "objective": "Complete the next combat encounter using only the spell or ability category you have invested in the least.",
    "primaryGenre": "rpg",
    "compatibleGenres": [
      "roguelike"
    ],
    "requirements": [
      "magic",
      "ability categories",
      "character progression",
      "combat"
    ],
    "archetype": "adaptation",
    "settings": [
      "fantasy"
    ],
    "requiresOnline": false
  },
  {
    "id": "second-wind",
    "title": "Second Wind",
    "objective": "During the next party encounter, choose the ally who takes the first major hit. Restore, protect, or revive them once, then finish the encounter with both of you standing.",
    "primaryGenre": "rpg",
    "compatibleGenres": [
      "action"
    ],
    "requirements": [
      "online co-op",
      "party combat",
      "healing, protection, or revives"
    ],
    "archetype": "support",
    "settings": [],
    "requiresOnline": true
  },
  {
    "id": "everyone-gets-a-turn",
    "title": "Everyone Gets a Turn",
    "objective": "In one encounter, use a heal, buff, or control effect that benefits two different allies. Finish the encounter with the party still together.",
    "primaryGenre": "rpg",
    "compatibleGenres": [],
    "requirements": [
      "party of at least three",
      "party combat",
      "healing, buffs, or control effects"
    ],
    "archetype": "support",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "scouts-report",
    "title": "Scout's Report",
    "objective": "Move ahead of your party, identify three useful threats, routes, or resources, then regroup and use at least one of those findings to help clear the next encounter.",
    "primaryGenre": "rpg",
    "compatibleGenres": [
      "action",
      "survival"
    ],
    "requirements": [
      "party exploration",
      "open areas",
      "threats, routes, or resources"
    ],
    "archetype": "support",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "shared-burden",
    "title": "Shared Burden",
    "objective": "Give, craft, or equip one meaningful upgrade for a companion, then complete the next encounter in which they put it to use.",
    "primaryGenre": "rpg",
    "compatibleGenres": [],
    "requirements": [
      "companions",
      "companion equipment or upgrades",
      "combat"
    ],
    "archetype": "support",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "open-the-way",
    "title": "Open the Way",
    "objective": "Break a defense, distract a threat, or control an enemy so a teammate can complete an objective interaction or land a decisive attack. Then finish the encounter together.",
    "primaryGenre": "rpg",
    "compatibleGenres": [
      "action",
      "shooter"
    ],
    "requirements": [
      "online co-op",
      "party combat",
      "defense breaks, distractions, or control effects"
    ],
    "archetype": "support",
    "settings": [],
    "requiresOnline": true
  },
  {
    "id": "camp-quartermaster",
    "title": "Camp Quartermaster",
    "objective": "Prepare or place one useful consumable for a party member or companion. Both of you must use something from the supply before reaching the next checkpoint.",
    "primaryGenre": "rpg",
    "compatibleGenres": [
      "survival"
    ],
    "requirements": [
      "party members or companions",
      "crafting or shared supplies",
      "consumables"
    ],
    "archetype": "support",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "hand-me-down-hero",
    "title": "Hand-Me-Down Hero",
    "objective": "Equip the next usable item you would normally sell or dismantle, then complete one quest objective before replacing it.",
    "primaryGenre": "rpg",
    "compatibleGenres": [
      "roguelike"
    ],
    "requirements": [
      "equipment drops",
      "quest objectives",
      "interchangeable equipment"
    ],
    "archetype": "adaptation",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "opposite-approach",
    "title": "Opposite Approach",
    "objective": "Resolve the next quest step with a different system than the previous one: combat, dialogue, stealth, crafting, or exploration. Reach the following checkpoint using the new approach.",
    "primaryGenre": "rpg",
    "compatibleGenres": [
      "action"
    ],
    "requirements": [
      "quests with multiple approaches",
      "checkpoints or quest stages"
    ],
    "archetype": "adaptation",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "the-unplanned-recruit",
    "title": "The Unplanned Recruit",
    "objective": "Add the companion you have used least to the party and complete their next full encounter without changing the lineup.",
    "primaryGenre": "rpg",
    "compatibleGenres": [],
    "requirements": [
      "companion roster",
      "party selection",
      "combat encounters"
    ],
    "archetype": "adaptation",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "one-skill-sideways",
    "title": "One Skill Sideways",
    "objective": "Replace one familiar ability with an unused one. Use the new ability to create an opening, escape danger, or finish an enemy before the encounter ends.",
    "primaryGenre": "rpg",
    "compatibleGenres": [
      "action",
      "roguelike"
    ],
    "requirements": [
      "swappable abilities",
      "combat",
      "multiple ability options"
    ],
    "archetype": "adaptation",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "fill-the-party-gap",
    "title": "Fill the Party Gap",
    "objective": "After seeing your party's choices, take one role or utility the group is missing. Complete the next objective and make that contribution at least twice.",
    "primaryGenre": "rpg",
    "compatibleGenres": [],
    "requirements": [
      "online co-op",
      "selectable roles or builds",
      "shared objectives"
    ],
    "archetype": "adaptation",
    "settings": [],
    "requiresOnline": true
  },
  {
    "id": "unmarked-detour",
    "title": "Unmarked Detour",
    "objective": "Leave the route to your current objective, discover one unvisited location or map marker, then complete the nearest encounter or activity before returning.",
    "primaryGenre": "rpg",
    "compatibleGenres": [
      "action"
    ],
    "requirements": [
      "open world",
      "discoverable locations",
      "side activities or encounters"
    ],
    "archetype": "expedition",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "roadside-story",
    "title": "Roadside Story",
    "objective": "Travel toward your next objective without fast travel. Stop at the first dynamic event or stranger you encounter, resolve it, then continue to the objective.",
    "primaryGenre": "rpg",
    "compatibleGenres": [
      "action"
    ],
    "requirements": [
      "open world",
      "dynamic events",
      "quest objectives"
    ],
    "archetype": "expedition",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "border-crossing",
    "title": "Border Crossing",
    "objective": "Enter an unexplored map region, activate its first landmark or travel point, and complete one nearby activity before saving or returning to safety.",
    "primaryGenre": "rpg",
    "compatibleGenres": [
      "action"
    ],
    "requirements": [
      "open world",
      "fogged or unexplored map",
      "landmarks or travel points"
    ],
    "archetype": "expedition",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "follow-the-landmark",
    "title": "Follow the Landmark",
    "objective": "Choose a visible landmark you have not visited, reach it without placing a custom map marker, and finish one encounter or discovery there.",
    "primaryGenre": "rpg",
    "compatibleGenres": [
      "action"
    ],
    "requirements": [
      "open world",
      "visible landmarks",
      "discoveries or encounters"
    ],
    "archetype": "expedition",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "rally-point",
    "title": "Rally Point",
    "objective": "Travel with a teammate to a location neither of you has unlocked, activate its landmark or checkpoint, and complete one nearby activity together.",
    "primaryGenre": "rpg",
    "compatibleGenres": [
      "action"
    ],
    "requirements": [
      "online co-op",
      "shared open world",
      "discoverable checkpoints or landmarks"
    ],
    "archetype": "expedition",
    "settings": [],
    "requiresOnline": true
  },
  {
    "id": "one-slot-better",
    "title": "One Slot Better",
    "objective": "Improve your lowest-value equipment slot by one meaningful step, then complete an encounter in which the upgraded item contributes.",
    "primaryGenre": "rpg",
    "compatibleGenres": [
      "roguelike"
    ],
    "requirements": [
      "equipment slots",
      "item comparison",
      "equipment upgrades"
    ],
    "archetype": "optimization",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "clean-rotation",
    "title": "Clean Rotation",
    "objective": "Choose three abilities that interact well. Use all three in the intended sequence twice during one encounter, then finish the encounter.",
    "primaryGenre": "rpg",
    "compatibleGenres": [
      "action"
    ],
    "requirements": [
      "multiple active abilities",
      "combat",
      "ability synergies"
    ],
    "archetype": "optimization",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "inventory-triage",
    "title": "Inventory Triage",
    "objective": "Sell, store, or dismantle at least five items you no longer need. Use the space, currency, or materials gained for one upgrade, then test it in the next encounter.",
    "primaryGenre": "rpg",
    "compatibleGenres": [
      "survival"
    ],
    "requirements": [
      "inventory management",
      "selling, storage, or dismantling",
      "upgrades"
    ],
    "archetype": "optimization",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "fix-the-party-weak-link",
    "title": "Fix the Party's Weak Link",
    "objective": "Identify the companion or attribute furthest behind, make one focused upgrade, and complete an encounter where that improvement matters.",
    "primaryGenre": "rpg",
    "compatibleGenres": [],
    "requirements": [
      "party or character progression",
      "comparable attributes",
      "upgrades"
    ],
    "archetype": "optimization",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "spend-with-a-purpose",
    "title": "Spend With a Purpose",
    "objective": "Choose one immediate goal such as defense, mobility, healing, or damage. Spend your next upgrade resource only toward that goal, then demonstrate it in one encounter.",
    "primaryGenre": "rpg",
    "compatibleGenres": [
      "roguelike"
    ],
    "requirements": [
      "upgrade resources",
      "multiple upgrade paths",
      "combat"
    ],
    "archetype": "optimization",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "complementary-build",
    "title": "Complementary Build",
    "objective": "Choose one ability or item that complements a teammate's build. Trigger the combined effect twice, then complete the activity together.",
    "primaryGenre": "rpg",
    "compatibleGenres": [
      "roguelike"
    ],
    "requirements": [
      "online co-op",
      "build customization",
      "combinable party effects"
    ],
    "archetype": "optimization",
    "settings": [],
    "requiresOnline": true
  },
  {
    "id": "no-loose-ends",
    "title": "No Loose Ends",
    "objective": "Complete the current quest stage and one visible optional objective before leaving the area. Stop when both are marked complete.",
    "primaryGenre": "rpg",
    "compatibleGenres": [
      "action"
    ],
    "requirements": [
      "quest stages",
      "optional objectives",
      "objective tracking"
    ],
    "archetype": "performance",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "words-before-weapons",
    "title": "Words Before Weapons",
    "objective": "Resolve the next hostile situation through dialogue, stealth, surrender, or disengagement, then reach the next quest checkpoint without starting a new fight.",
    "primaryGenre": "rpg",
    "compatibleGenres": [
      "action"
    ],
    "requirements": [
      "noncombat resolutions",
      "hostile encounters",
      "quest checkpoints"
    ],
    "archetype": "performance",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "controlled-retreat",
    "title": "Controlled Retreat",
    "objective": "When your health first drops below half, disengage, recover, and return to finish the same encounter without loading an earlier save.",
    "primaryGenre": "rpg",
    "compatibleGenres": [
      "action"
    ],
    "requirements": [
      "combat",
      "health recovery",
      "disengagement"
    ],
    "archetype": "performance",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "make-it-count",
    "title": "Make It Count",
    "objective": "Save one limited or high-impact ability for the strongest enemy in the next encounter. Use it there, then clear the encounter with the threat defeated.",
    "primaryGenre": "rpg",
    "compatibleGenres": [
      "action",
      "roguelike"
    ],
    "requirements": [
      "limited or high-impact abilities",
      "strong enemies",
      "combat encounters"
    ],
    "archetype": "performance",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "clean-handoff",
    "title": "Clean Handoff",
    "objective": "Begin an objective interaction, let a teammate take over, and protect or assist them until it completes. Finish the stage without resetting the objective.",
    "primaryGenre": "rpg",
    "compatibleGenres": [
      "action"
    ],
    "requirements": [
      "online co-op",
      "shared objective interactions",
      "protection or assistance"
    ],
    "archetype": "performance",
    "settings": [],
    "requiresOnline": true
  }
] as const satisfies readonly QuestDefinition[];

