import type { QuestDefinition } from "../questTypes";

export const SIMULATION_QUESTS = [
  {
    "id": "use-what-you-own",
    "title": "Use What You Own",
    "objective": "Complete one job or contract without buying, renting, crafting, or upgrading equipment.",
    "primaryGenre": "simulation",
    "compatibleGenres": [],
    "requirements": [
      "jobs or contracts",
      "equipment economy"
    ],
    "archetype": "adaptation",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "manual-override",
    "title": "Manual Override",
    "objective": "Complete one full job with an assist or automation feature you normally rely on disabled. Finish without damage or penalties.",
    "primaryGenre": "simulation",
    "compatibleGenres": [
      "sports"
    ],
    "requirements": [
      "jobs or events",
      "optional assists or automation",
      "penalties"
    ],
    "archetype": "performance",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "the-perfect-shift",
    "title": "The Perfect Shift",
    "objective": "Complete one short job while following its core tracked rules. Finish without major damage or a failed need; minor delays, fines, or complaints are allowed.",
    "primaryGenre": "simulation",
    "compatibleGenres": [],
    "requirements": [
      "jobs",
      "simulation rules",
      "tracked penalties"
    ],
    "archetype": "performance",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "take-their-next-job",
    "title": "Take Their Next Job",
    "objective": "Let a teammate choose a job they need help with, then take the supporting role and stay with it until the shared result is complete.",
    "primaryGenre": "simulation",
    "compatibleGenres": [
      "sports"
    ],
    "requirements": [
      "online co-op jobs",
      "distinct player roles",
      "shared completion"
    ],
    "archetype": "support",
    "settings": [],
    "requiresOnline": true
  },
  {
    "id": "convoy-pace",
    "title": "Convoy Pace",
    "objective": "Travel one complete route with a teammate who has the slower vehicle or setup. Match their pace, warn them of hazards, and arrive together.",
    "primaryGenre": "simulation",
    "compatibleGenres": [
      "sports"
    ],
    "requirements": [
      "online vehicle convoy",
      "shared route",
      "different vehicle performance"
    ],
    "archetype": "support",
    "settings": [],
    "requiresOnline": true
  },
  {
    "id": "cover-the-busy-station",
    "title": "Cover the Busy Station",
    "objective": "Take over the task or station with the longest queue in a shared job and keep it clear until the job reaches its next milestone.",
    "primaryGenre": "simulation",
    "compatibleGenres": [
      "building"
    ],
    "requirements": [
      "online co-op workflow",
      "multiple stations or tasks",
      "visible queues or workload"
    ],
    "archetype": "support",
    "settings": [],
    "requiresOnline": true
  },
  {
    "id": "the-recovery-call",
    "title": "The Recovery Call",
    "objective": "Respond to one stranded, damaged, or delayed worker, vehicle, or customer and return them to normal service without abandoning your current operation.",
    "primaryGenre": "simulation",
    "compatibleGenres": [
      "building"
    ],
    "requirements": [
      "managed agents or vehicles",
      "breakdowns or delays",
      "recovery actions"
    ],
    "archetype": "support",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "teach-the-short-route",
    "title": "Teach the Short Route",
    "objective": "Guide a teammate through one route or procedure you know well, letting them lead the final section and complete the result themselves.",
    "primaryGenre": "simulation",
    "compatibleGenres": [],
    "requirements": [
      "online co-op",
      "repeatable routes or procedures",
      "shared jobs"
    ],
    "archetype": "support",
    "settings": [],
    "requiresOnline": true
  },
  {
    "id": "split-the-workload",
    "title": "Split the Workload",
    "objective": "Divide one shared job into two clear responsibilities, take the less familiar one, and finish with neither player waiting on the other.",
    "primaryGenre": "simulation",
    "compatibleGenres": [
      "building"
    ],
    "requirements": [
      "online co-op job",
      "parallel responsibilities",
      "shared completion"
    ],
    "archetype": "support",
    "settings": [],
    "requiresOnline": true
  },
  {
    "id": "unfamiliar-controls",
    "title": "Unfamiliar Controls",
    "objective": "Complete one short job using a different valid camera, route-planning view, or tool mode than your usual choice. Keep it until the result is recorded.",
    "primaryGenre": "simulation",
    "compatibleGenres": [
      "sports"
    ],
    "requirements": [
      "jobs or events",
      "multiple camera or tool modes",
      "recorded completion"
    ],
    "archetype": "adaptation",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "weather-the-change",
    "title": "Weather the Change",
    "objective": "Choose one short operation affected by current conditions. Adjust its route, schedule, or technique before starting, then complete the job without restarting.",
    "primaryGenre": "simulation",
    "compatibleGenres": [
      "sports"
    ],
    "requirements": [
      "dynamic conditions",
      "adjustable operations",
      "jobs or events"
    ],
    "archetype": "adaptation",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "the-backup-vehicle",
    "title": "The Backup Vehicle",
    "objective": "Complete one job with a capable vehicle, tool, or character you own but rarely use. Make only the minimum setup changes needed to begin.",
    "primaryGenre": "simulation",
    "compatibleGenres": [
      "sports"
    ],
    "requirements": [
      "selectable equipment or vehicles",
      "jobs or events",
      "owned alternatives"
    ],
    "archetype": "adaptation",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "new-order-of-operations",
    "title": "New Order of Operations",
    "objective": "Complete a familiar multi-step job by changing the order of two flexible steps. Confirm that the final result still meets the job's requirements.",
    "primaryGenre": "simulation",
    "compatibleGenres": [
      "building"
    ],
    "requirements": [
      "multi-step jobs",
      "flexible task order",
      "quality or completion checks"
    ],
    "archetype": "adaptation",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "recover-dont-restart",
    "title": "Recover, Don't Restart",
    "objective": "When the next manageable mistake or delay occurs, correct it within the same job and finish instead of reloading or restarting.",
    "primaryGenre": "simulation",
    "compatibleGenres": [
      "sports"
    ],
    "requirements": [
      "jobs or events",
      "recoverable mistakes",
      "restart option"
    ],
    "archetype": "adaptation",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "take-the-long-assignment",
    "title": "Take the Long Assignment",
    "objective": "Choose one job that visits an area or station you have not used recently, complete its main work, and return or report in.",
    "primaryGenre": "simulation",
    "compatibleGenres": [],
    "requirements": [
      "selectable jobs",
      "multiple locations",
      "job completion"
    ],
    "archetype": "expedition",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "inspect-the-whole-line",
    "title": "Inspect the Whole Line",
    "objective": "Follow one service, vehicle, or product through its complete route, fix the first issue you find, and watch it reach the destination.",
    "primaryGenre": "simulation",
    "compatibleGenres": [
      "building"
    ],
    "requirements": [
      "observable routes or workflows",
      "management tools",
      "editable operations"
    ],
    "archetype": "expedition",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "first-route-on-the-board",
    "title": "First Route on the Board",
    "objective": "Pick a route, venue, or assignment you have never completed and finish one standard run without consulting an external guide.",
    "primaryGenre": "simulation",
    "compatibleGenres": [
      "sports"
    ],
    "requirements": [
      "multiple routes or venues",
      "jobs or events",
      "recorded completion"
    ],
    "archetype": "expedition",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "follow-the-night-shift",
    "title": "Follow the Night Shift",
    "objective": "Run one familiar operation at a different time of day and adapt to the visibility, traffic, demand, or staffing you encounter.",
    "primaryGenre": "simulation",
    "compatibleGenres": [
      "sports"
    ],
    "requirements": [
      "time-of-day variation",
      "jobs or operations",
      "changing conditions"
    ],
    "archetype": "expedition",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "check-the-far-end",
    "title": "Check the Far End",
    "objective": "Visit the most distant active part of your operation, resolve one local need, and return with the system still running.",
    "primaryGenre": "simulation",
    "compatibleGenres": [
      "building"
    ],
    "requirements": [
      "distributed operation",
      "direct travel",
      "local maintenance or service"
    ],
    "archetype": "expedition",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "one-job-one-loop",
    "title": "One Job, One Loop",
    "objective": "Choose a job with several stops and plan a route that visits each once before returning. Complete it without unnecessary backtracking.",
    "primaryGenre": "simulation",
    "compatibleGenres": [],
    "requirements": [
      "multi-stop jobs",
      "route planning",
      "direct travel"
    ],
    "archetype": "expedition",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "cut-the-empty-miles",
    "title": "Cut the Empty Miles",
    "objective": "Change one route or job sequence so a vehicle or worker completes the same result with less travel. Run it once to verify the saving.",
    "primaryGenre": "simulation",
    "compatibleGenres": [
      "building"
    ],
    "requirements": [
      "editable routes or schedules",
      "measurable travel",
      "repeatable jobs"
    ],
    "archetype": "optimization",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "match-tool-to-task",
    "title": "Match Tool to Task",
    "objective": "Replace one oversized, undersized, or poorly suited tool in an active job with a better fit, then complete the next work cycle.",
    "primaryGenre": "simulation",
    "compatibleGenres": [],
    "requirements": [
      "multiple tools or vehicles",
      "repeatable work",
      "equipment performance"
    ],
    "archetype": "optimization",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "smooth-the-schedule",
    "title": "Smooth the Schedule",
    "objective": "Adjust one schedule so its busiest period has fewer queues, idle workers, or missed requests. Observe one full busy period afterward.",
    "primaryGenre": "simulation",
    "compatibleGenres": [
      "building"
    ],
    "requirements": [
      "editable schedules",
      "changing demand",
      "visible workload"
    ],
    "archetype": "optimization",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "fewer-hands-same-result",
    "title": "Fewer Hands, Same Result",
    "objective": "Complete one repeatable operation with one fewer active worker, vehicle, or station by improving its order or timing.",
    "primaryGenre": "simulation",
    "compatibleGenres": [
      "building"
    ],
    "requirements": [
      "repeatable operations",
      "assignable resources",
      "adjustable timing or workflow"
    ],
    "archetype": "optimization",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "the-clean-handoff",
    "title": "The Clean Handoff",
    "objective": "Arrange a shared job so one teammate can take over your role without stopping the operation. Switch roles once and complete the next milestone.",
    "primaryGenre": "simulation",
    "compatibleGenres": [
      "building"
    ],
    "requirements": [
      "online co-op workflow",
      "interchangeable roles",
      "shared milestones"
    ],
    "archetype": "optimization",
    "settings": [],
    "requiresOnline": true
  },
  {
    "id": "use-the-return-trip",
    "title": "Use the Return Trip",
    "objective": "Give one normally empty return journey a useful passenger, cargo, service, or maintenance purpose, then complete the round trip.",
    "primaryGenre": "simulation",
    "compatibleGenres": [],
    "requirements": [
      "round-trip jobs",
      "cargo passengers or service tasks",
      "route planning"
    ],
    "archetype": "optimization",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "steady-hands",
    "title": "Steady Hands",
    "objective": "Complete one normal job with no collisions, spills, dropped loads, or abrupt emergency stops. Minor time penalties do not invalidate the run.",
    "primaryGenre": "simulation",
    "compatibleGenres": [
      "sports"
    ],
    "requirements": [
      "precision jobs",
      "tracked damage or handling errors",
      "job completion"
    ],
    "archetype": "performance",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "right-on-schedule",
    "title": "Right on Schedule",
    "objective": "Complete one timed route or service within its expected window without skipping required steps or breaking tracked rules.",
    "primaryGenre": "simulation",
    "compatibleGenres": [],
    "requirements": [
      "scheduled jobs",
      "tracked rules",
      "time windows"
    ],
    "archetype": "performance",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "one-pass-inspection",
    "title": "One-Pass Inspection",
    "objective": "Prepare one vehicle, workspace, or operation and pass its next quality or readiness check without returning to make corrections.",
    "primaryGenre": "simulation",
    "compatibleGenres": [],
    "requirements": [
      "preparation tasks",
      "quality or readiness checks",
      "correctable setup"
    ],
    "archetype": "performance",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "leave-it-ready",
    "title": "Leave It Ready",
    "objective": "Complete one job, then refuel, restock, park, clean, or reset the equipment so the same job could begin again immediately.",
    "primaryGenre": "simulation",
    "compatibleGenres": [],
    "requirements": [
      "jobs",
      "persistent equipment state",
      "service or reset actions"
    ],
    "archetype": "performance",
    "settings": [],
    "requiresOnline": false
  }
] as const satisfies readonly QuestDefinition[];
