import type { QuestDefinition } from "../questTypes";

export const BUILDING_QUESTS = [
  {
    "id": "fix-the-bottleneck",
    "title": "Fix the Bottleneck",
    "objective": "Find the slowest step in one production chain and automate everything from raw input to storage. Once started, make no manual transfers.",
    "primaryGenre": "building",
    "compatibleGenres": [
      "simulation"
    ],
    "requirements": [
      "production chains",
      "automation",
      "storage"
    ],
    "archetype": "optimization",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "no-new-land",
    "title": "No New Land",
    "objective": "Improve the output or wellbeing of one settlement without expanding its footprint or purchasing additional land.",
    "primaryGenre": "building",
    "compatibleGenres": [
      "simulation"
    ],
    "requirements": [
      "construction",
      "settlement management",
      "measurable output or wellbeing"
    ],
    "archetype": "optimization",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "double-without-moving",
    "title": "Double Without Moving",
    "objective": "Double the output of one production chain without moving or demolishing its existing structures. Use only upgrades and additions.",
    "primaryGenre": "building",
    "compatibleGenres": [
      "simulation"
    ],
    "requirements": [
      "production chains",
      "upgrades",
      "measurable output"
    ],
    "archetype": "optimization",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "build-their-missing-piece",
    "title": "Build Their Missing Piece",
    "objective": "Ask a teammate what is slowing their work, then build or connect one structure that removes that problem. Confirm together that it works before moving on.",
    "primaryGenre": "building",
    "compatibleGenres": [
      "survival",
      "simulation"
    ],
    "requirements": [
      "online co-op building",
      "shared construction",
      "functional structures"
    ],
    "archetype": "support",
    "settings": [],
    "requiresOnline": true
  },
  {
    "id": "the-helpful-neighbor",
    "title": "The Helpful Neighbor",
    "objective": "Deliver enough materials for another player's next meaningful upgrade, then help place or activate it without changing the rest of their build.",
    "primaryGenre": "building",
    "compatibleGenres": [
      "survival"
    ],
    "requirements": [
      "online shared world",
      "transferable materials",
      "construction or upgrades"
    ],
    "archetype": "support",
    "settings": [],
    "requiresOnline": true
  },
  {
    "id": "handoff-ready",
    "title": "Handoff Ready",
    "objective": "Prepare one unfinished shared project so a teammate can complete it immediately: supply its inputs, clear its access, and explain the final step.",
    "primaryGenre": "building",
    "compatibleGenres": [
      "simulation"
    ],
    "requirements": [
      "online co-op building",
      "shared projects",
      "resource storage"
    ],
    "archetype": "support",
    "settings": [],
    "requiresOnline": true
  },
  {
    "id": "shared-safety-net",
    "title": "Shared Safety Net",
    "objective": "Add one backup for a shared system that has failed before, then let a teammate trigger a safe test while you watch the recovery.",
    "primaryGenre": "building",
    "compatibleGenres": [
      "simulation",
      "survival"
    ],
    "requirements": [
      "online shared systems",
      "failure states",
      "redundant infrastructure"
    ],
    "archetype": "support",
    "settings": [],
    "requiresOnline": true
  },
  {
    "id": "connect-the-outlier",
    "title": "Connect the Outlier",
    "objective": "Find the least accessible home, station, or workplace and give it a practical route to the settlement's main service area.",
    "primaryGenre": "building",
    "compatibleGenres": [
      "simulation"
    ],
    "requirements": [
      "settlement building",
      "routes or transport",
      "residents or workplaces"
    ],
    "archetype": "support",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "finish-their-wing",
    "title": "Finish Their Wing",
    "objective": "Join a teammate's incomplete build and finish one clearly agreed section using its existing style and layout instead of redesigning it.",
    "primaryGenre": "building",
    "compatibleGenres": [
      "survival"
    ],
    "requirements": [
      "online co-op building",
      "shared structures",
      "construction pieces"
    ],
    "archetype": "support",
    "settings": [],
    "requiresOnline": true
  },
  {
    "id": "work-with-the-land",
    "title": "Work With the Land",
    "objective": "Complete one small functional build on awkward terrain while preserving its major slopes, rocks, water, or vegetation.",
    "primaryGenre": "building",
    "compatibleGenres": [
      "simulation",
      "survival"
    ],
    "requirements": [
      "freeform construction",
      "terrain constraints",
      "functional structures"
    ],
    "archetype": "adaptation",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "second-choice-material",
    "title": "Second-Choice Material",
    "objective": "Build the next needed structure with a material you have plenty of but rarely choose. Make it fully functional before replacing anything.",
    "primaryGenre": "building",
    "compatibleGenres": [
      "survival"
    ],
    "requirements": [
      "multiple building materials",
      "resource inventory",
      "functional construction"
    ],
    "archetype": "adaptation",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "repair-dont-replace",
    "title": "Repair, Don't Replace",
    "objective": "Restore one damaged, obsolete, or poorly placed system to useful service through repairs and additions, without demolishing its core.",
    "primaryGenre": "building",
    "compatibleGenres": [
      "simulation"
    ],
    "requirements": [
      "editable structures",
      "repairs or upgrades",
      "functional systems"
    ],
    "archetype": "adaptation",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "the-temporary-detour",
    "title": "The Temporary Detour",
    "objective": "Keep one active production or service running while you reroute a blocked connection. Remove the temporary path after the normal flow is restored.",
    "primaryGenre": "building",
    "compatibleGenres": [
      "simulation"
    ],
    "requirements": [
      "active networks",
      "rerouting",
      "production or services"
    ],
    "archetype": "adaptation",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "one-way-workflow",
    "title": "One-Way Workflow",
    "objective": "Rework one compact area so materials, vehicles, or workers can pass through it without doubling back. Run one successful cycle to prove the route.",
    "primaryGenre": "building",
    "compatibleGenres": [
      "simulation"
    ],
    "requirements": [
      "editable layouts",
      "movement or material flow",
      "repeatable cycles"
    ],
    "archetype": "adaptation",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "build-around-it",
    "title": "Build Around It",
    "objective": "Add a useful structure beside one fixed obstacle or protected feature, keeping access to both and avoiding demolition.",
    "primaryGenre": "building",
    "compatibleGenres": [
      "simulation",
      "survival"
    ],
    "requirements": [
      "freeform construction",
      "fixed obstacles",
      "access routes"
    ],
    "archetype": "adaptation",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "scout-before-groundbreaking",
    "title": "Scout Before Groundbreaking",
    "objective": "Visit three plausible sites for your next small project, choose one for a stated practical reason, and place its functional first section.",
    "primaryGenre": "building",
    "compatibleGenres": [
      "survival",
      "simulation"
    ],
    "requirements": [
      "explorable map",
      "construction",
      "placeable structures"
    ],
    "archetype": "expedition",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "the-remote-outpost",
    "title": "The Remote Outpost",
    "objective": "Travel beyond your main developed area and establish a compact outpost with storage, safe access, and one useful service.",
    "primaryGenre": "building",
    "compatibleGenres": [
      "survival"
    ],
    "requirements": [
      "large buildable map",
      "storage",
      "functional utilities or services"
    ],
    "archetype": "expedition",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "follow-the-resource",
    "title": "Follow the Resource",
    "objective": "Trace one resource from where it enters your territory to where it is consumed, then add one useful stop or connection along that route.",
    "primaryGenre": "building",
    "compatibleGenres": [
      "simulation"
    ],
    "requirements": [
      "resource logistics",
      "explorable settlement",
      "editable connections"
    ],
    "archetype": "expedition",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "reclaim-the-forgotten-corner",
    "title": "Reclaim the Forgotten Corner",
    "objective": "Find an unused edge of your developed area and turn it into a small functional space that connects cleanly to the rest of the build.",
    "primaryGenre": "building",
    "compatibleGenres": [
      "simulation"
    ],
    "requirements": [
      "expandable construction area",
      "functional structures",
      "connections or paths"
    ],
    "archetype": "expedition",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "supply-line-field-test",
    "title": "Supply-Line Field Test",
    "objective": "Follow one long delivery route in person from source to destination, fix the first weakness you encounter, and watch one shipment arrive.",
    "primaryGenre": "building",
    "compatibleGenres": [
      "simulation"
    ],
    "requirements": [
      "logistics routes",
      "direct map traversal",
      "editable infrastructure"
    ],
    "archetype": "expedition",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "build-from-the-destination",
    "title": "Build From the Destination",
    "objective": "Start at an underserved destination and work backward until it is connected to the nearest useful supply, road, or service.",
    "primaryGenre": "building",
    "compatibleGenres": [
      "simulation"
    ],
    "requirements": [
      "network construction",
      "services or resources",
      "map traversal"
    ],
    "archetype": "expedition",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "one-less-step",
    "title": "One Less Step",
    "objective": "Remove one repeated transfer, stop, or handling step from an active workflow, then complete a full cycle through the shorter route.",
    "primaryGenre": "building",
    "compatibleGenres": [
      "simulation"
    ],
    "requirements": [
      "repeatable workflows",
      "editable logistics",
      "observable production cycles"
    ],
    "archetype": "optimization",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "idle-no-more",
    "title": "Idle No More",
    "objective": "Find one machine, worker, or service that waits too often and adjust its inputs, route, or schedule until it completes two cycles without avoidable downtime.",
    "primaryGenre": "building",
    "compatibleGenres": [
      "simulation"
    ],
    "requirements": [
      "measurable activity",
      "editable inputs or schedules",
      "repeatable cycles"
    ],
    "archetype": "optimization",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "waste-into-value",
    "title": "Waste Into Value",
    "objective": "Take one excess output, by-product, or neglected resource and give it a useful destination. Confirm that one full batch is consumed.",
    "primaryGenre": "building",
    "compatibleGenres": [
      "simulation"
    ],
    "requirements": [
      "multiple resources",
      "production by-products or surplus",
      "editable logistics"
    ],
    "archetype": "optimization",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "clean-expansion",
    "title": "Clean Expansion",
    "objective": "Add one complete production or service module without blocking existing access, disconnecting utilities, or leaving unused pieces behind.",
    "primaryGenre": "building",
    "compatibleGenres": [
      "simulation"
    ],
    "requirements": [
      "modular construction",
      "active utilities or routes",
      "functional modules"
    ],
    "archetype": "performance",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "build-under-budget",
    "title": "Build Under Budget",
    "objective": "Set aside a reasonable resource or money budget for one needed structure, then finish it within that budget and make it operational.",
    "primaryGenre": "building",
    "compatibleGenres": [
      "simulation"
    ],
    "requirements": [
      "construction costs",
      "resource or money totals",
      "functional structures"
    ],
    "archetype": "performance",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "keep-the-lights-on",
    "title": "Keep the Lights On",
    "objective": "Upgrade or extend one active utility network without interrupting service, then verify the new connection under normal load.",
    "primaryGenre": "building",
    "compatibleGenres": [
      "simulation"
    ],
    "requirements": [
      "utility networks",
      "live demand",
      "network upgrades"
    ],
    "archetype": "performance",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "first-try-blueprint",
    "title": "First-Try Blueprint",
    "objective": "Plan one compact functional module before placing anything, then build it without moving or demolishing a placed piece. Additions are allowed.",
    "primaryGenre": "building",
    "compatibleGenres": [
      "simulation"
    ],
    "requirements": [
      "freeform placement",
      "functional construction",
      "move or demolition tools"
    ],
    "archetype": "performance",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "complete-circuit",
    "title": "Complete Circuit",
    "objective": "Create one complete circular route for people, vehicles, or materials and prove it with a full trip that never reverses direction.",
    "primaryGenre": "building",
    "compatibleGenres": [
      "simulation"
    ],
    "requirements": [
      "route construction",
      "moving agents or resources",
      "observable trips"
    ],
    "archetype": "performance",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "no-interrupted-service",
    "title": "No Interrupted Service",
    "objective": "Replace one overloaded connection while its system remains active. Finish with normal service restored and no stranded users or items.",
    "primaryGenre": "building",
    "compatibleGenres": [
      "simulation"
    ],
    "requirements": [
      "active networks",
      "replaceable connections",
      "service or logistics demand"
    ],
    "archetype": "performance",
    "settings": [],
    "requiresOnline": false
  }
] as const satisfies readonly QuestDefinition[];
