import { defineMoodDeck } from "./defineMoodDeck";

export const PROGRESS_QUESTS = defineMoodDeck("progress", [
  {
    id: "progress-break-the-blocker",
    title: "Still Unopened",
    objective: "Play a game you bought but never started",
    completion:
      "Find a purchased game with no meaningful playtime and launch the first one that still creates curiosity. Reach its first real playable objective after setup and tutorials.",
    durationMinutes: 45,
    rewardPoints: 250,
    tipIds: ["oneTrack", "noOutsideHelp"],
  },
  {
    id: "progress-clean-finish",
    title: "The Honest Hour",
    objective: "Give a dismissed game one real hour",
    completion:
      "Choose a game you quit after roughly ten minutes or never judged fairly. Give it 60 active minutes, including one reasonable controls or accessibility adjustment. Stop early only for technical failure or genuine discomfort.",
    durationMinutes: 60,
    rewardPoints: 250,
    tipIds: ["oneTrack", "cleanExit"],
  },
  {
    id: "progress-one-tier-better",
    title: "Return to Save",
    objective: "Continue a game you left after a few sessions",
    completion:
      "Choose a game you stopped after only one to three sessions and resume its existing save instead of restarting. Reach the next checkpoint, chapter, unlock, or 45 active minutes.",
    durationMinutes: 45,
    rewardPoints: 250,
    tipIds: ["fixedKit", "basicTools"],
  },
  {
    id: "progress-three-step-plan",
    title: "Armory Run",
    objective: "Play a solo shooter for unlocks, not story",
    completion:
      "Choose a single-player shooter with weapons, upgrades, challenges, or collectibles still available. Unlock one item, finish one weapon challenge, or collect three useful things without making story progress the goal.",
    durationMinutes: 45,
    rewardPoints: 250,
    tipIds: ["fixedKit", "noUpgrades"],
  },
  {
    id: "progress-recovery-run",
    title: "Finish Line in Sight",
    objective: "Play the unfinished game closest to closure",
    completion:
      "Choose the game nearest to a campaign ending, chapter ending, major unlock, or other meaningful milestone. Reach it or give the attempt one focused hour.",
    durationMinutes: 60,
    rewardPoints: 250,
    tipIds: ["noRestart", "useWhatYouFind"],
  },
  {
    id: "progress-two-birds",
    title: "Justify the Install",
    objective: "Test the game you keep installed but keep skipping",
    completion:
      "Choose a large or long-installed game you repeatedly pass over. Play one complete activity or 45 active minutes before deciding whether it deserves to stay installed.",
    durationMinutes: 45,
    rewardPoints: 250,
    tipIds: ["cleanExit", "letItStand"],
  },
  {
    id: "progress-wake-the-sleeping-save",
    title: "Wake the Sleeping Save",
    objective: "Return to the save that has been waiting longest",
    completion:
      "Choose an owned game with an old save you still care about. Spend no more than ten minutes recovering the controls and context, then reach one new checkpoint without restarting.",
    durationMinutes: 40,
    rewardPoints: 220,
    tipIds: ["oneTrack", "fixedKit"],
  },
  {
    id: "progress-honor-the-oldest-promise",
    title: "Oldest Promise",
    objective: "Resolve the oldest task still sitting in a quest log",
    completion:
      "Choose an owned game with an active journal or mission list. Find the oldest accepted task you can reasonably reach and complete it, or carry it to its next named milestone within 45 minutes.",
    durationMinutes: 45,
    rewardPoints: 230,
    tipIds: ["oneTrack", "cleanExit"],
  },
  {
    id: "progress-open-the-black-box",
    title: "Open the Black Box",
    objective: "Learn one system that made a good game feel intimidating",
    completion:
      "Choose an owned strategy, role-playing, simulation, or tactics game you paused because one system felt opaque. Learn only that system, then make one successful decision with it in live play.",
    durationMinutes: 45,
    rewardPoints: 230,
    tipIds: ["noOutsideHelp", "oneTool"],
  },
  {
    id: "progress-revisit-the-wall",
    title: "The Former Wall",
    objective: "Return to the obstacle that once ended a run",
    completion:
      "Choose an owned game you left at a boss, puzzle, race, mission, or difficult encounter. Give the obstacle three focused attempts with one changed approach, and finish when you pass it or complete the third attempt.",
    durationMinutes: 35,
    rewardPoints: 210,
    tipIds: ["noRestart", "basicTools"],
  },
  {
    id: "progress-clear-one-map-pocket",
    title: "One Blank Pocket",
    objective: "Reveal one small place left unfinished on a familiar map",
    completion:
      "Choose an owned game with a partially explored world or level map. Enter the smallest nearby blank pocket, reveal one landmark or boundary there, and return to a known safe point.",
    durationMinutes: 30,
    rewardPoints: 180,
    tipIds: ["noMap", "oneMoreCorner"],
  },
  {
    id: "progress-open-the-expansion-door",
    title: "The Extra Door",
    objective: "Begin an owned expansion you never entered",
    completion:
      "Choose an owned game with an expansion, episode, campaign, or substantial add-on you have not started. Enter it with an existing eligible save and complete its first self-contained activity.",
    durationMinutes: 50,
    rewardPoints: 240,
    tipIds: ["oneTrack", "noOutsideHelp"],
  },
  {
    id: "progress-let-the-other-hero-grow",
    title: "The Other Hero",
    objective: "Advance a neglected character or class once",
    completion:
      "Choose an owned game with multiple characters, classes, teams, or profiles. Play the least-developed option that genuinely interests you until it earns one level, unlock, completed match, or mission result.",
    durationMinutes: 35,
    rewardPoints: 200,
    tipIds: ["fixedKit", "noUpgrades"],
  },
  {
    id: "progress-rebuild-muscle-memory",
    title: "Hands Remember",
    objective: "Recover the controls of a game you want back in your rotation",
    completion:
      "Choose an owned action game whose controls you have forgotten but whose movement still appeals to you. Practice in a safe space for ten minutes, then complete one ordinary encounter or course without reopening the control guide.",
    durationMinutes: 30,
    rewardPoints: 170,
    tipIds: ["basicTools", "noOutsideHelp"],
  },
  {
    id: "progress-follow-the-remembered-thread",
    title: "The Thread You Remember",
    objective: "Continue the story that still leaves one question in your mind",
    completion:
      "Choose an owned story game whose characters or unresolved question you can still name. Review the current journal or recap for no more than five minutes, then complete the next scene, case, or chapter.",
    durationMinutes: 50,
    rewardPoints: 240,
    tipIds: ["noMap", "oneTrack"],
  },
  {
    id: "progress-shake-off-the-rust",
    title: "Friendly Rust",
    objective: "Re-enter a competitive game without protecting your old form",
    completion:
      "Choose an owned competitive game you once enjoyed but have avoided because you feel rusty. Complete three unranked matches or rounds while practicing one specific fundamental.",
    durationMinutes: 35,
    rewardPoints: 190,
    tipIds: ["threeAttempts", "noRestart"],
  },
  {
    id: "progress-claim-the-nearby-feat",
    title: "Nearly Yours",
    objective: "Finish one accomplishment already close to completion",
    completion:
      "Choose an owned game with an achievement, challenge, collection entry, or mastery task already near completion. Finish exactly one of those accomplishments and view its completed state.",
    durationMinutes: 35,
    rewardPoints: 200,
    tipIds: ["oneTrack", "fixedKit"],
  },
  {
    id: "progress-return-to-the-gift",
    title: "The Gifted Hour",
    objective: "Play the owned game that came with someone's thought behind it",
    completion:
      "Choose a game that was gifted, recommended, or shared with you by someone you value. Play from its current state until you complete one named objective or 45 focused minutes.",
    durationMinutes: 45,
    rewardPoints: 220,
    tipIds: ["cleanExit", "measuredPace"],
  },
  {
    id: "progress-choose-the-short-road",
    title: "The Short Road",
    objective: "Advance the briefest unfinished campaign in your library",
    completion:
      "Choose the owned unfinished campaign you believe has the shortest remaining path, without researching exact hours. Complete its next mission, episode, run, or chapter.",
    durationMinutes: 50,
    rewardPoints: 230,
    tipIds: ["noMarkers", "oneTrack"],
  },
  {
    id: "progress-cross-the-middle",
    title: "Across the Middle",
    objective: "Give momentum to a campaign stranded far from both beginning and end",
    completion:
      "Choose an owned campaign with a save that feels somewhere in its middle. Follow only its central objective until one full chapter, mission, or major story beat closes.",
    durationMinutes: 55,
    rewardPoints: 240,
    tipIds: ["noRestart", "letItStand"],
  },
  {
    id: "progress-unpack-and-move",
    title: "Unpack and Move",
    objective: "Turn an overloaded inventory into one usable plan",
    completion:
      "Choose an owned game whose crowded inventory or loadout makes returning feel tiring. Prepare one practical setup using only items already held, then complete one encounter or activity with it.",
    durationMinutes: 30,
    rewardPoints: 180,
    tipIds: ["fixedKit", "noLooting"],
  },
  {
    id: "progress-prove-one-technique",
    title: "Make It Stick",
    objective: "Turn one half-learned technique into a reliable action",
    completion:
      "Choose an owned game where you understand a useful move, tool, combo, or tactic but rarely execute it. Practice it briefly, then land or apply it successfully three times in normal play.",
    durationMinutes: 30,
    rewardPoints: 190,
    tipIds: ["oneMove", "threeAttempts"],
  },
  {
    id: "progress-play-the-missing-link",
    title: "The Missing Link",
    objective: "Start the owned entry that fills a gap in a series you know",
    completion:
      "Choose an unplayed owned game that sits between, before, or beside series entries you already enjoyed. Reach the end of its first chapter, mission, case, or complete run.",
    durationMinutes: 50,
    rewardPoints: 240,
    tipIds: ["oneTrack", "noOutsideHelp"],
  },
  {
    id: "progress-earn-the-specific-upgrade",
    title: "One Purchase Away",
    objective: "Earn and use a specific upgrade already within reach",
    completion:
      "Choose an owned game where one useful ability, tool, building, or equipment upgrade is close enough to earn tonight. Acquire that exact upgrade and use it in one meaningful situation.",
    durationMinutes: 45,
    rewardPoints: 220,
    tipIds: ["spendTheGoodStuff", "oneTrack"],
  },
  {
    id: "progress-remove-one-barrier",
    title: "Lower the Threshold",
    objective: "Revisit a good game after removing the friction that pushed you away",
    completion:
      "Choose an owned game abandoned because of readable text, controls, camera, difficulty, audio, or another specific friction. Change one relevant setting, then complete one ordinary activity with the new setup.",
    durationMinutes: 30,
    rewardPoints: 180,
    tipIds: ["minimalHud", "noRecovery"],
  },
  {
    id: "progress-finish-a-favorites-loose-end",
    title: "Favorite's Loose End",
    objective: "Complete one overlooked piece of a game you already love",
    completion:
      "Choose an owned favorite with an unfinished character episode, optional area, side story, challenge set, or alternate mode. Complete one self-contained piece you have never finished.",
    durationMinutes: 45,
    rewardPoints: 220,
    tipIds: ["cleanExit", "oneTrack"],
  },
  {
    id: "progress-take-the-road-not-used",
    title: "The Road Not Used",
    objective: "Advance through a branch you skipped the first time",
    completion:
      "Choose an owned game with chapter selection, branching routes, alternate missions, or meaningful route choices. Enter one path you have not taken and reach its next checkpoint or ending.",
    durationMinutes: 45,
    rewardPoints: 220,
    tipIds: ["oneMoreCorner", "noMap"],
  },
  {
    id: "progress-rescue-the-secondary-save",
    title: "Second Save, First Choice",
    objective: "Advance the alternate save that still represents a good idea",
    completion:
      "Choose an owned game with multiple saves or campaigns and return to the secondary one whose experiment still sounds interesting. Reach one new checkpoint without switching back to the main save.",
    durationMinutes: 40,
    rewardPoints: 210,
    tipIds: ["letItStand", "noRestart"],
  },
  {
    id: "progress-transfer-a-strength",
    title: "Borrowed Skill",
    objective: "Use a strength from one game to advance another",
    completion:
      "Choose an owned game you have neglected that shares a system with one you know well, such as timing, routing, deck reading, stealth, or resource planning. Apply that familiar strength until one encounter or objective is complete.",
    durationMinutes: 35,
    rewardPoints: 200,
    tipIds: ["basicTools", "oneMove"],
  },
  {
    id: "progress-spend-the-hoarded-resource",
    title: "Use What You Saved",
    objective: "Advance by spending a resource you always postpone using",
    completion:
      "Choose an owned game with currency, consumables, skill points, crafting parts, or favors you have been hoarding. Spend a meaningful portion on one clear advantage, then complete an activity where that choice matters.",
    durationMinutes: 35,
    rewardPoints: 200,
    tipIds: ["spendTheGoodStuff", "noShopping"],
  }
]);
