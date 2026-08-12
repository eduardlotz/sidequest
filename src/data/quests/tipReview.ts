import type { QuestTipId } from "./tips";

type TipReplacement = Partial<Record<QuestTipId, QuestTipId>>;

/** Literal-player review: replace tips that repeat or obstruct the core quest. */
const QUEST_TIP_REPLACEMENTS: Readonly<Record<string, TipReplacement>> = {
  "explore-edge-of-known": { oneMoreCorner: "landmarksOnly" },
  "explore-words-have-weight": {
    firstInstinct: "fullDialogue",
    letItStand: "listenFirst",
  },
  "explore-never-same-twice": { letItStand: "useWhatYouFind" },
  "explore-one-word-door": {
    oppositeInstinct: "worldAudio",
    firstInstinct: "minimalHud",
  },
  "explore-color-beacon": { onePalette: "photoProof" },
  "explore-unfamiliar-cockpit": { fixedKit: "cockpitView" },
  "explore-wordless-world": { noOutsideHelp: "minimalHud" },

  "progress-three-step-plan": { noUpgrades: "basicTools" },
  "progress-clear-one-map-pocket": { noMap: "photoProof" },
  "progress-let-the-other-hero-grow": {
    oneTrack: "oneMove",
    noUpgrades: "basicTools",
  },
  "progress-shake-off-the-rust": { threeAttempts: "defaultSetup" },
  "progress-claim-the-nearby-feat": {
    oneTrack: "noOutsideHelp",
    fixedKit: "letItStand",
  },
  "progress-choose-the-short-road": { oneTrack: "memoryFirst" },
  "progress-prove-one-technique": { threeAttempts: "noRestart" },
  "progress-earn-the-specific-upgrade": { oneTrack: "noLooting" },
  "progress-spend-the-hoarded-resource": {
    spendTheGoodStuff: "firstInstinct",
    noShopping: "letItStand",
  },
  "progress-roguelike-meta-step": { spendTheGoodStuff: "useWhatYouFind" },
  "progress-complete-a-season": { oneTrack: "measuredPace" },
  "progress-open-the-endgame": {
    oneTrack: "noLooting",
    fixedKit: "letItStand",
  },
  "progress-master-one-recipe": {
    localMaterials: "firstInstinct",
    noShopping: "letItStand",
  },
  "progress-fix-one-crisis": { oneTrack: "letItStand" },
  "progress-honor-the-oldest-promise": {
    oneTrack: "noLooting",
    cleanExit: "memoryFirst",
  },

  "create-function-first": { onePalette: "firstTake" },
  "create-rule-of-three": { noUndo: "letItStand" },
  "create-tell-a-room-sized-story": { oneRoom: "beforeAfter" },
  "create-chase-one-kind-of-light": { photoProof: "worldAudio" },
  "create-design-one-livable-block": { oneRoom: "beforeAfter" },
  "create-compose-a-place-theme": { oneRoom: "firstTake" },
  "create-sculpt-for-one-view": { groundLevel: "photoProof" },
  "create-leave-a-kind-trace": { leaveAGift: "beforeAfter" },
  "create-boss-arena": { oneRoom: "beforeAfter" },
  "create-racing-livery": { onePalette: "photoProof" },
  "create-factory-blueprint": { oneRoom: "useWhatYouFind" },

  "challenge-first-try-counts": {
    fixedKit: "basicTools",
    threeAttempts: "letItStand",
  },
  "challenge-one-step-harder": { fixedKit: "noRestart" },
  "challenge-pressure-proof": { firstInstinct: "defendFirst" },
  "challenge-three-life-window": {
    threeAttempts: "keepReserve",
    noRestart: "basicTools",
  },
  "challenge-neglected-tool": { oneTool: "noRestart" },
  "challenge-boss-rematch": { basicTools: "keepReserve" },
  "challenge-precision-passage": { threeAttempts: "noRestart" },
  "challenge-no-hint-hour": {
    noOutsideHelp: "talkItThrough",
    noRestart: "minimalHud",
  },
  "challenge-underdog-kit": { underdogKit: "keepReserve" },
  "challenge-no-restart-recovery": {
    noRestart: "keepReserve",
    letItStand: "basicTools",
  },
  "challenge-clean-combo": { threeAttempts: "noRestart" },
  "challenge-damage-budget": { damageBudget: "keepReserve" },
  "challenge-tactics-iron-plan": {
    noUndo: "defendFirst",
    noRestart: "keepReserve",
  },
  "challenge-rhythm-clean-song": { threeAttempts: "soundTiming" },
  "challenge-speedrun-one-split": { threeAttempts: "minimalHud" },

  "connect-shared-save-return": {
    holdYourRole: "beforeAfter",
    stayTogether: "matchBase",
  },
  "connect-player-made-door": { leaveAGift: "photoProof" },
  "connect-leave-a-signal": { leaveAGift: "photoProof" },
  "connect-asynchronous-turn": { measuredPace: "boardScan" },
  "connect-replay-company": {
    borrowedStyle: "firstInstinct",
    oneMove: "letItStand",
  },
  "connect-quiet-lobby": { quietLobby: "holdYourRole" },
  "connect-borrow-their-style": { borrowedStyle: "letItStand" },
  "connect-community-tactic": { borrowedStyle: "noOutsideHelp" },
  "connect-parallel-company": { quietLobby: "worldAudio" },
  "connect-one-viewer-clip": { photoProof: "letItStand" },
  "connect-coop-puzzle": { stayTogether: "talkItThrough" },
  "connect-support-the-lowest": {
    helpFirst: "quietLobby",
    holdYourRole: "stayTogether",
  },

  "old-avatar": { fixedKit: "memoryFirst", noUndo: "photoProof" },
  "retired-strategy": { fixedKit: "memoryFirst" },
  "old-racing-line": { threeAttempts: "worldAudio" },
  "first-rpg-town": { followTheLocal: "fullDialogue" },
  "old-horror-courage": { cleanExit: "worldAudio" },
  "dormant-achievement": { oneTrack: "memoryFirst" },
  "legacy-character": { fixedKit: "memoryFirst" },
  "nostalgic-arcade-credit": { noRestart: "minimalHud" },
  "nostalgic-startup-sounds": { firstInstinct: "memoryFirst" },
  "nostalgic-old-guide-memory": {
    noOutsideHelp: "worldAudio",
    noMap: "photoProof",
  },

  "no-setup-needed": { fixedKit: "minimalHud" },
  "first-installed-row": { firstInstinct: "worldAudio" },
  "single-cover-pull": { firstInstinct: "worldAudio" },
  "one-marker-only": { oneTrack: "noLooting" },
  "one-match-contract": { cleanExit: "letItStand" },
  "one-room-boundary": { oneRoom: "beforeAfter" },
  "platform-recent": { firstInstinct: "letItStand" },
  "no-update-door": { firstInstinct: "letItStand" },
  "default-build": { fixedKit: "minimalHud", noUpgrades: "letItStand" },
  "default-difficulty": {
    letItStand: "knownGround",
    fixedKit: "minimalHud",
  },
  "fewest-open-threads": { oneTrack: "noLooting" },
  "stop-rule-first": { cleanExit: "worldAudio" },
  "overwhelmed-saved-preset": {
    fixedKit: "minimalHud",
    letItStand: "worldAudio",
  },

  "restless-pinball-table": { threeAttempts: "soundTiming" },
  "restless-hack-and-slash": { fixedKit: "keepReserve" },

  "single-campaign-thread": { oneTrack: "noLooting" },
  "build-one-function": { oneTrack: "localMaterials" },
  "achievement-line": { oneTrack: "noLooting" },
  "one-character-session": { fixedKit: "letItStand" },
  "collectible-set": { oneTrack: "photoProof" },
  "one-city-block": { oneRoom: "beforeAfter" },
  "questline-only": { oneTrack: "fullDialogue" },
  "ranked-set": { threeAttempts: "letItStand" },
  "craft-one-object": { oneTrack: "useWhatYouFind" },
  "photo-one-subject": { photoProof: "firstTake" },
  "one-dungeon": { cleanExit: "noLooting" },
  "one-conversation-tree": { oneTrack: "fullDialogue" },
  "map-pocket": { noMap: "photoProof" },
  "one-room-makeover": { oneRoom: "beforeAfter" },
  "credits-push": { oneTrack: "fullDialogue", cleanExit: "letEndingPlay" },
  "focused-factory-bottleneck": { oneTrack: "useWhatYouFind" },
  "focused-detective-case": { oneTrack: "fullDialogue" },
  "focused-rhythm-set": { fixedKit: "soundTiming" },
  "focused-speedrun-segment": { threeAttempts: "minimalHud" },

  "npc-routine": { followTheLocal: "worldAudio" },
  "procedural-surprise": { letItStand: "useWhatYouFind" },
  "ruleset-random": { letItStand: "noOutsideHelp" },
  "map-edge": { photoProof: "groundLevel" },
  "object-history": { oneRoom: "photoProof" },
  "curious-fmv-game": {
    firstInstinct: "fullDialogue",
    letItStand: "listenFirst",
  },

  "easy-puzzle": {
    measuredPace: "talkItThrough",
    letItStand: "noOutsideHelp",
  },
  "photo-stroll": { photoProof: "groundLevel" },
  "one-day-sim": { oneTrack: "worldAudio", cleanExit: "favoriteSetup" },
  "home-base-only": { oneRoom: "firstInstinct", cleanExit: "letItStand" },
  "one-conversation": { followTheLocal: "fullDialogue" },
  "collect-nearby": { oneRoom: "photoProof" },
  "default-everything": { fixedKit: "minimalHud" },
  "low-energy-idle-check-in": {
    oneMove: "firstInstinct",
    cleanExit: "letItStand",
  },
  "low-energy-solitaire": {
    letItStand: "boardScan",
    cleanExit: "minimalHud",
  },
  "low-energy-auto-battler": { fixedKit: "boardScan" },
  "low-energy-jrpg-turns": { cleanExit: "defendFirst" },
};

export function applyQuestTipReview(
  questId: string,
  tipIds: readonly [QuestTipId, QuestTipId],
): readonly [QuestTipId, QuestTipId] {
  const replacements = QUEST_TIP_REPLACEMENTS[questId];
  if (!replacements) return tipIds;

  return tipIds.map((tipId) => replacements[tipId] ?? tipId) as [
    QuestTipId,
    QuestTipId,
  ];
}
