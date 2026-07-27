import type { QuestDefinition } from "../questTypes";

export const SPORTS_QUESTS = [
  {
    "id": "change-the-playbook",
    "title": "Change the Playbook",
    "objective": "Finish a full match using a formation, team, or strategy you have never used before. Do not switch back during the match.",
    "primaryGenre": "sports",
    "compatibleGenres": [],
    "requirements": [
      "selectable teams",
      "formations",
      "tactical strategies"
    ],
    "archetype": "adaptation",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "make-them-the-star",
    "title": "Make Them the Star",
    "objective": "Choose the lowest-rated player in your active lineup. Help them score or create a scoring play, then win or draw the match.",
    "primaryGenre": "sports",
    "compatibleGenres": [],
    "requirements": [
      "team roster",
      "player ratings",
      "scoring or assists"
    ],
    "archetype": "support",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "the-counterplan",
    "title": "The Counterplan",
    "objective": "After the first period or half, identify the opponent's most effective player. Change one tactic to limit their next scoring chance, then finish the match.",
    "primaryGenre": "sports",
    "compatibleGenres": [],
    "requirements": [
      "team sports",
      "match statistics",
      "tactical control"
    ],
    "archetype": "optimization",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "play-the-provider",
    "title": "Play the Provider",
    "objective": "Create a scoring attempt for two different teammates during one match. Finish after at least one attempt becomes a score or clear chance.",
    "primaryGenre": "sports",
    "compatibleGenres": [],
    "requirements": [
      "team sports",
      "passing or assists",
      "scoring attempts"
    ],
    "archetype": "support",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "cover-the-runner",
    "title": "Cover the Runner",
    "objective": "Use a screen, block, draft, tow, or defensive play to help a teammate gain a position or reach a scoring area. Both of you must finish the play or event.",
    "primaryGenre": "sports",
    "compatibleGenres": [
      "simulation"
    ],
    "requirements": [
      "online team mode",
      "supporting maneuvers",
      "positions or scoring areas"
    ],
    "archetype": "support",
    "settings": [],
    "requiresOnline": true
  },
  {
    "id": "feed-the-hot-hand",
    "title": "Feed the Hot Hand",
    "objective": "Identify the teammate creating the most danger or progress. Set them up for two more attempts, then finish the match without taking over their role.",
    "primaryGenre": "sports",
    "compatibleGenres": [],
    "requirements": [
      "team sports",
      "match flow or statistics",
      "passing or assists"
    ],
    "archetype": "support",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "recovery-partner",
    "title": "Recovery Partner",
    "objective": "Cover for a teammate's missed challenge, lost possession, or poor position once, then turn the recovery into a scoring attempt or gained place.",
    "primaryGenre": "sports",
    "compatibleGenres": [],
    "requirements": [
      "team sports or team racing",
      "recoveries or defensive cover",
      "scoring attempts or positions"
    ],
    "archetype": "support",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "share-the-podium",
    "title": "Share the Podium",
    "objective": "Help a teammate improve their position with drafting, towing, defense, or a clean handoff. Finish the event with both players recording a valid result.",
    "primaryGenre": "sports",
    "compatibleGenres": [
      "simulation"
    ],
    "requirements": [
      "online team event",
      "supporting maneuvers",
      "recorded finishing positions"
    ],
    "archetype": "support",
    "settings": [],
    "requiresOnline": true
  },
  {
    "id": "the-weather-plan",
    "title": "The Weather Plan",
    "objective": "Adjust one tactic, equipment choice, or setup for the current weather or surface. Complete the event without changing it back.",
    "primaryGenre": "sports",
    "compatibleGenres": [
      "simulation"
    ],
    "requirements": [
      "dynamic weather or surfaces",
      "adjustable tactics, equipment, or setup",
      "events"
    ],
    "archetype": "adaptation",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "switch-sides",
    "title": "Switch Sides",
    "objective": "When the opponent creates two chances through the same area, change one assignment or tactic. Stop their next attempt there and finish the match.",
    "primaryGenre": "sports",
    "compatibleGenres": [],
    "requirements": [
      "team sports",
      "tactical assignments",
      "opponent attacks"
    ],
    "archetype": "adaptation",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "different-discipline",
    "title": "Different Discipline",
    "objective": "Enter a short event using a vehicle, equipment class, or play style you have not used this session. Record a valid finish before switching back.",
    "primaryGenre": "sports",
    "compatibleGenres": [
      "simulation"
    ],
    "requirements": [
      "multiple disciplines or equipment classes",
      "short events",
      "recorded finishes"
    ],
    "archetype": "adaptation",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "read-the-human",
    "title": "Read the Human",
    "objective": "After the first exchange, choose a different counter for the next comparable opening, route, or play. Finish the online match after testing it once.",
    "primaryGenre": "sports",
    "compatibleGenres": [],
    "requirements": [
      "online head-to-head mode",
      "repeatable plays or routes",
      "defensive counters"
    ],
    "archetype": "adaptation",
    "settings": [],
    "requiresOnline": true
  },
  {
    "id": "pace-yourself",
    "title": "Pace Yourself",
    "objective": "Complete the opening segment below maximum effort, then improve your pace or score in the next segment. Finish the event cleanly.",
    "primaryGenre": "sports",
    "compatibleGenres": [
      "simulation"
    ],
    "requirements": [
      "segmented events",
      "measurable pace or score",
      "valid finishes"
    ],
    "archetype": "adaptation",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "one-adjustment-only",
    "title": "One Adjustment Only",
    "objective": "Change exactly one setup, tactic, or equipment setting, then improve one lap, attempt, or tracked statistic by any amount.",
    "primaryGenre": "sports",
    "compatibleGenres": [
      "simulation"
    ],
    "requirements": [
      "adjustable setup or tactics",
      "repeatable attempts",
      "tracked performance"
    ],
    "archetype": "optimization",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "lineup-balance",
    "title": "Lineup Balance",
    "objective": "Make one substitution or lineup change that covers your weakest speed, defense, size, or skill. Create one successful play through that change.",
    "primaryGenre": "sports",
    "compatibleGenres": [],
    "requirements": [
      "team roster",
      "substitutions or lineup changes",
      "player attributes"
    ],
    "archetype": "optimization",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "the-smarter-line",
    "title": "The Smarter Line",
    "objective": "Choose one corner, obstacle, or sequence and take a safer or shorter line through it. Improve that segment once, then record a clean finish.",
    "primaryGenre": "sports",
    "compatibleGenres": [
      "simulation",
      "platformer"
    ],
    "requirements": [
      "repeatable routes",
      "timed or scored segments",
      "valid finishes"
    ],
    "archetype": "optimization",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "complete-the-team-shape",
    "title": "Complete the Team Shape",
    "objective": "Before an online team match, choose a position or tactical role the lineup is missing. Make two contributions from that role before the match ends.",
    "primaryGenre": "sports",
    "compatibleGenres": [],
    "requirements": [
      "online team mode",
      "selectable positions or roles",
      "tracked contributions"
    ],
    "archetype": "optimization",
    "settings": [],
    "requiresOnline": true
  },
  {
    "id": "training-transfer",
    "title": "Training Transfer",
    "objective": "Practice one tracked skill in a drill or warm-up, then use it successfully once in the next match or event.",
    "primaryGenre": "sports",
    "compatibleGenres": [
      "simulation"
    ],
    "requirements": [
      "practice or training mode",
      "tracked skills",
      "matches or events"
    ],
    "archetype": "optimization",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "a-new-venue",
    "title": "A New Venue",
    "objective": "Choose a course, track, arena, or stadium you have not played recently and complete one full short event there.",
    "primaryGenre": "sports",
    "compatibleGenres": [
      "simulation"
    ],
    "requirements": [
      "selectable venues",
      "short events",
      "recorded finishes"
    ],
    "archetype": "expedition",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "course-scout",
    "title": "Course Scout",
    "objective": "Use a practice lap, preview, or opening section to identify three difficult features. Complete a valid run while applying a plan for at least one of them.",
    "primaryGenre": "sports",
    "compatibleGenres": [
      "simulation"
    ],
    "requirements": [
      "courses or tracks",
      "practice or preview option",
      "valid runs"
    ],
    "archetype": "expedition",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "away-day",
    "title": "Away Day",
    "objective": "Join an online match on an arena, map, course, or track you have not used this session. Record one positive contribution and finish the event.",
    "primaryGenre": "sports",
    "compatibleGenres": [],
    "requirements": [
      "online events",
      "selectable or rotating venues",
      "tracked contributions"
    ],
    "archetype": "expedition",
    "settings": [],
    "requiresOnline": true
  },
  {
    "id": "trail-to-the-event",
    "title": "Trail to the Event",
    "objective": "In an open sports world, travel to an unplayed event under your own power and complete it before using fast travel again.",
    "primaryGenre": "sports",
    "compatibleGenres": [
      "simulation"
    ],
    "requirements": [
      "open world",
      "world events",
      "fast travel"
    ],
    "archetype": "expedition",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "find-a-new-line",
    "title": "Find a New Line",
    "objective": "Link three different terrain features or obstacles along a route you have not used before, then land or finish the full line.",
    "primaryGenre": "sports",
    "compatibleGenres": [
      "platformer"
    ],
    "requirements": [
      "traversal sports",
      "terrain features or obstacles",
      "scored or valid lines"
    ],
    "archetype": "expedition",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "the-local-circuit",
    "title": "The Local Circuit",
    "objective": "Complete two nearby short events in the same discipline without fast travel between them. Stop after recording a valid result in both.",
    "primaryGenre": "sports",
    "compatibleGenres": [
      "simulation"
    ],
    "requirements": [
      "open world or event map",
      "nearby short events",
      "fast travel"
    ],
    "archetype": "expedition",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "clean-sequence",
    "title": "Clean Sequence",
    "objective": "Complete one possession or play with a setup action, a pass or transition, and a scoring attempt without turning the ball or objective over.",
    "primaryGenre": "sports",
    "compatibleGenres": [],
    "requirements": [
      "team sports",
      "possession or structured plays",
      "scoring attempts"
    ],
    "archetype": "performance",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "three-part-run",
    "title": "Three-Part Run",
    "objective": "Perform three distinct maneuvers in one continuous run, then reach the finish or landing without resetting.",
    "primaryGenre": "sports",
    "compatibleGenres": [
      "platformer"
    ],
    "requirements": [
      "trick or traversal sports",
      "distinct maneuvers",
      "continuous runs"
    ],
    "archetype": "performance",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "pressure-possession",
    "title": "Pressure Possession",
    "objective": "Keep control through one direct challenge from an online opponent, then turn it into a pass, shot, score, or gained position before the play ends.",
    "primaryGenre": "sports",
    "compatibleGenres": [],
    "requirements": [
      "online competitive mode",
      "contested possession or position",
      "scoring or progress actions"
    ],
    "archetype": "performance",
    "settings": [],
    "requiresOnline": true
  },
  {
    "id": "a-clean-finish",
    "title": "A Clean Finish",
    "objective": "Complete one race, run, routine, or round without a penalty, invalidation, or restart. Your finishing position or score does not matter.",
    "primaryGenre": "sports",
    "compatibleGenres": [
      "simulation"
    ],
    "requirements": [
      "penalty or invalidation system",
      "recorded events",
      "restart option"
    ],
    "archetype": "performance",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "personal-best-segment",
    "title": "Personal-Best Segment",
    "objective": "Improve one lap sector, hole, drill, split, or short challenge by any amount. Stop when the new segment result is recorded.",
    "primaryGenre": "sports",
    "compatibleGenres": [
      "simulation"
    ],
    "requirements": [
      "repeatable segments",
      "recorded performance",
      "personal results"
    ],
    "archetype": "performance",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "score-from-recovery",
    "title": "Score From Recovery",
    "objective": "After losing possession, missing an attempt, or dropping a position, recover and create one valid scoring chance or regained place before the event ends.",
    "primaryGenre": "sports",
    "compatibleGenres": [],
    "requirements": [
      "recoverable possession or position",
      "scoring chances or positions",
      "events"
    ],
    "archetype": "performance",
    "settings": [],
    "requiresOnline": false
  }
] as const satisfies readonly QuestDefinition[];
