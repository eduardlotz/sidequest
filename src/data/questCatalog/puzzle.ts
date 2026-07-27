import type { QuestDefinition } from "../questTypes";

export const PUZZLE_QUESTS = [
  {
    "id": "no-second-chances",
    "title": "No Second Chances",
    "objective": "Solve one complete puzzle without using a hint, undo, or restart.",
    "primaryGenre": "puzzle",
    "compatibleGenres": [],
    "requirements": [
      "discrete puzzles",
      "hint or undo systems"
    ],
    "archetype": "performance",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "observe-first",
    "title": "Observe First",
    "objective": "Spend one uninterrupted minute studying the next puzzle before making an input. Then solve it with no hints and at most one restart.",
    "primaryGenre": "puzzle",
    "compatibleGenres": [],
    "requirements": [
      "discrete puzzles",
      "restartable state"
    ],
    "archetype": "performance",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "reverse-your-habit",
    "title": "Reverse Your Habit",
    "objective": "Begin the next puzzle with the tool, rule, or move you normally save for last. Complete it without undoing that first decision.",
    "primaryGenre": "puzzle",
    "compatibleGenres": [],
    "requirements": [
      "multiple tools, rules, or opening moves"
    ],
    "archetype": "adaptation",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "let-them-call-it",
    "title": "Let Them Call It",
    "objective": "In the next co-op puzzle, let a teammate explain the plan before anyone acts. Follow their plan through one full attempt, then adjust together if needed.",
    "primaryGenre": "puzzle",
    "compatibleGenres": [
      "platformer"
    ],
    "requirements": [
      "online co-op puzzles",
      "shared inputs",
      "repeatable attempts"
    ],
    "archetype": "support",
    "settings": [],
    "requiresOnline": true
  },
  {
    "id": "be-the-memory",
    "title": "Be the Memory",
    "objective": "Take responsibility for remembering symbols, positions, or rules while a teammate handles inputs. Complete one puzzle without swapping roles.",
    "primaryGenre": "puzzle",
    "compatibleGenres": [],
    "requirements": [
      "online co-op puzzles",
      "information sharing",
      "distinct observation and input roles"
    ],
    "archetype": "support",
    "settings": [],
    "requiresOnline": true
  },
  {
    "id": "ask-before-acting",
    "title": "Ask Before Acting",
    "objective": "For one shared puzzle, confirm each irreversible or costly move with your teammate and reach the solution with a plan both players understand.",
    "primaryGenre": "puzzle",
    "compatibleGenres": [],
    "requirements": [
      "online co-op puzzles",
      "irreversible or costly moves",
      "shared solution state"
    ],
    "archetype": "support",
    "settings": [],
    "requiresOnline": true
  },
  {
    "id": "switch-the-explainer",
    "title": "Switch the Explainer",
    "objective": "Solve one two-part co-op puzzle with one player explaining the first part and the other explaining the second. The listener handles the inputs.",
    "primaryGenre": "puzzle",
    "compatibleGenres": [
      "platformer"
    ],
    "requirements": [
      "online co-op puzzles",
      "multi-part puzzle",
      "shared inputs"
    ],
    "archetype": "support",
    "settings": [],
    "requiresOnline": true
  },
  {
    "id": "give-the-final-move",
    "title": "Give the Final Move",
    "objective": "Set up a shared puzzle so a teammate can recognize and make the final move themselves. Offer a hint only if they request one.",
    "primaryGenre": "puzzle",
    "compatibleGenres": [],
    "requirements": [
      "online co-op puzzles",
      "shared puzzle state",
      "distinct final move"
    ],
    "archetype": "support",
    "settings": [],
    "requiresOnline": true
  },
  {
    "id": "restore-the-missing-link",
    "title": "Restore the Missing Link",
    "objective": "Find one blocked device, route, or character whose progress depends on a nearby puzzle, solve it, and verify that their path or function is restored.",
    "primaryGenre": "puzzle",
    "compatibleGenres": [
      "action",
      "platformer"
    ],
    "requirements": [
      "world-integrated puzzles",
      "blocked routes or devices",
      "visible restored state"
    ],
    "archetype": "support",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "start-from-the-edge",
    "title": "Start From the Edge",
    "objective": "On the next grid, board, or spatial puzzle, make your first meaningful move at an edge or corner and solve without undoing that opening.",
    "primaryGenre": "puzzle",
    "compatibleGenres": [],
    "requirements": [
      "spatial puzzle",
      "edge or corner positions",
      "undo or restart system"
    ],
    "archetype": "adaptation",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "change-the-representation",
    "title": "Change the Representation",
    "objective": "Translate the next puzzle into a different form—notes, groups, a route, colors, or a spoken rule—then use that representation to solve it.",
    "primaryGenre": "puzzle",
    "compatibleGenres": [],
    "requirements": [
      "logic or pattern puzzle",
      "observable information",
      "discrete solution"
    ],
    "archetype": "adaptation",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "solve-the-other-side-first",
    "title": "Solve the Other Side First",
    "objective": "Begin with the half, color, room, or rule set you would normally leave until later, then connect it to the rest of the solution.",
    "primaryGenre": "puzzle",
    "compatibleGenres": [
      "platformer"
    ],
    "requirements": [
      "multi-part puzzle",
      "separable regions or rule sets",
      "combined solution"
    ],
    "archetype": "adaptation",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "keep-the-mistake",
    "title": "Keep the Mistake",
    "objective": "If your next non-terminal move is wrong, leave it in place long enough to find a valid recovery. Solve without restarting unless the state becomes unwinnable.",
    "primaryGenre": "puzzle",
    "compatibleGenres": [],
    "requirements": [
      "recoverable puzzle states",
      "restart option",
      "clear unwinnable state"
    ],
    "archetype": "adaptation",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "use-the-unused-rule",
    "title": "Use the Unused Rule",
    "objective": "Identify one valid mechanic or rule you have not needed recently and make it part of the solution to the next compatible puzzle.",
    "primaryGenre": "puzzle",
    "compatibleGenres": [],
    "requirements": [
      "multiple puzzle mechanics",
      "selectable compatible puzzles",
      "discrete solutions"
    ],
    "archetype": "adaptation",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "follow-one-clue-to-the-end",
    "title": "Follow One Clue to the End",
    "objective": "Choose one clue, symbol, or mechanism in an open puzzle area and follow every connection it reveals until you reach a solved state or clear reward.",
    "primaryGenre": "puzzle",
    "compatibleGenres": [
      "action"
    ],
    "requirements": [
      "open puzzle area",
      "connected clues or mechanisms",
      "visible completion or reward"
    ],
    "archetype": "expedition",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "clear-the-side-room",
    "title": "Clear the Side Room",
    "objective": "Find one optional puzzle beside your current route, solve it, collect or activate its result, and return to the main path.",
    "primaryGenre": "puzzle",
    "compatibleGenres": [
      "action",
      "platformer"
    ],
    "requirements": [
      "optional world puzzles",
      "main route",
      "visible puzzle reward"
    ],
    "archetype": "expedition",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "map-the-mechanism",
    "title": "Map the Mechanism",
    "objective": "Trace an unfamiliar mechanism from every input to its outputs before changing it, then solve the puzzle using the route you mapped.",
    "primaryGenre": "puzzle",
    "compatibleGenres": [
      "platformer",
      "building"
    ],
    "requirements": [
      "connected mechanisms",
      "observable inputs and outputs",
      "interactive puzzle"
    ],
    "archetype": "expedition",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "the-door-left-behind",
    "title": "The Door Left Behind",
    "objective": "Return to one nearby puzzle gate or locked route you previously left behind, open it, and step through to confirm what it unlocks.",
    "primaryGenre": "puzzle",
    "compatibleGenres": [
      "action",
      "platformer"
    ],
    "requirements": [
      "persistent puzzle gates",
      "backtracking",
      "unlockable routes"
    ],
    "archetype": "expedition",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "from-output-to-input",
    "title": "From Output to Input",
    "objective": "Start at the visible target state, trace backward through the available rules or connections, then execute the solution forward.",
    "primaryGenre": "puzzle",
    "compatibleGenres": [],
    "requirements": [
      "visible target state",
      "traceable rules or connections",
      "discrete solution"
    ],
    "archetype": "expedition",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "three-puzzles-one-system",
    "title": "Three Puzzles, One System",
    "objective": "Complete three short nearby puzzles that share one mechanic, naming what changed between them before finishing the last.",
    "primaryGenre": "puzzle",
    "compatibleGenres": [],
    "requirements": [
      "short puzzle sequence",
      "shared mechanic",
      "multiple discrete completions"
    ],
    "archetype": "expedition",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "remove-a-move",
    "title": "Remove a Move",
    "objective": "Solve one familiar puzzle, replay or revise it with one fewer move, action, or placed piece, and keep the improved solution.",
    "primaryGenre": "puzzle",
    "compatibleGenres": [],
    "requirements": [
      "replayable puzzles",
      "move or action count",
      "multiple valid solutions"
    ],
    "archetype": "optimization",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "one-rule-at-a-time",
    "title": "One Rule at a Time",
    "objective": "Separate the next puzzle into rule groups, satisfy one group without breaking the previous ones, and continue until the whole state is solved.",
    "primaryGenre": "puzzle",
    "compatibleGenres": [],
    "requirements": [
      "multi-rule puzzle",
      "persistent puzzle state",
      "discrete solution"
    ],
    "archetype": "optimization",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "reuse-the-setup",
    "title": "Reuse the Setup",
    "objective": "Position one piece, tool, or mechanism so it contributes to at least two parts of the same solution, then complete the puzzle.",
    "primaryGenre": "puzzle",
    "compatibleGenres": [
      "platformer",
      "building"
    ],
    "requirements": [
      "reusable puzzle elements",
      "multi-part solution",
      "interactive puzzle"
    ],
    "archetype": "optimization",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "lock-the-certainties",
    "title": "Lock the Certainties",
    "objective": "Identify and place every immediately certain answer or safe move before making a guess, then solve the remaining puzzle.",
    "primaryGenre": "puzzle",
    "compatibleGenres": [],
    "requirements": [
      "deduction puzzle",
      "placeable answers or moves",
      "discrete solution"
    ],
    "archetype": "optimization",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "share-the-minimum-clue",
    "title": "Share the Minimum Clue",
    "objective": "Complete one information-sharing puzzle while each player communicates only the detail needed for the next decision, checking understanding before acting.",
    "primaryGenre": "puzzle",
    "compatibleGenres": [],
    "requirements": [
      "online co-op puzzle",
      "split information",
      "spoken or text communication"
    ],
    "archetype": "optimization",
    "settings": [],
    "requiresOnline": true
  },
  {
    "id": "solve-the-bottleneck-clue",
    "title": "Solve the Bottleneck Clue",
    "objective": "Find the one unresolved clue or mechanism blocking the most other progress, solve it first, and use what it opens to finish the puzzle.",
    "primaryGenre": "puzzle",
    "compatibleGenres": [
      "action"
    ],
    "requirements": [
      "interdependent clues or mechanisms",
      "visible blocked progress",
      "discrete solution"
    ],
    "archetype": "optimization",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "explain-it-back",
    "title": "Explain It Back",
    "objective": "Before making the final move, state the rule or pattern that proves it is correct, then complete the puzzle and verify the result.",
    "primaryGenre": "puzzle",
    "compatibleGenres": [],
    "requirements": [
      "logic or pattern puzzle",
      "distinct final move",
      "visible solved state"
    ],
    "archetype": "performance",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "three-clean-steps",
    "title": "Three Clean Steps",
    "objective": "Choose a puzzle where you can see at least three actions ahead, execute those three without undoing, and continue normally to the solution.",
    "primaryGenre": "puzzle",
    "compatibleGenres": [],
    "requirements": [
      "multi-step puzzle",
      "undo system",
      "discrete solution"
    ],
    "archetype": "performance",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "one-hint-you-write",
    "title": "One Hint You Write",
    "objective": "Before starting the next puzzle, write or say one general hint to your future self. Solve using only that hint and the information in the puzzle.",
    "primaryGenre": "puzzle",
    "compatibleGenres": [],
    "requirements": [
      "self-contained puzzle",
      "discrete solution",
      "optional hint system"
    ],
    "archetype": "performance",
    "settings": [],
    "requiresOnline": false
  },
  {
    "id": "finish-without-guessing",
    "title": "Finish Without Guessing",
    "objective": "Solve one deduction or pattern puzzle while making each move from visible evidence. If a guess becomes necessary, pause and choose another compatible puzzle.",
    "primaryGenre": "puzzle",
    "compatibleGenres": [],
    "requirements": [
      "deduction or pattern puzzles",
      "selectable puzzles",
      "visible evidence"
    ],
    "archetype": "performance",
    "settings": [],
    "requiresOnline": false
  }
] as const satisfies readonly QuestDefinition[];
