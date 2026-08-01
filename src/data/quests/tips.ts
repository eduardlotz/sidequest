import type { QuestTip } from "../questTypes";

export const QUEST_TIPS = {
  oneTrack: {
    title: "Stay on One Goal",
    description: "Skip unrelated missions and markers until the goal is done.",
  },
  noOutsideHelp: {
    title: "No Outside Help",
    description: "Use no guides, wikis, solution videos, or external maps.",
  },
  letItStand: {
    title: "Let It Stand",
    description: "Accept the first result; do not reload or reroll it.",
  },
  minimalHud: {
    title: "Minimal HUD",
    description: "Hide the optional HUD elements you do not need.",
  },
  noMap: {
    title: "No Map",
    description: "Navigate without opening the map or route overlay.",
  },
  longWay: {
    title: "No Fast Travel",
    description: "Travel through the world instead of using menu shortcuts.",
  },
  measuredPace: {
    title: "Move Without Rushing",
    description: "Avoid sprinting, boosting, or skipping the journey.",
  },
  fixedKit: {
    title: "Keep Your Setup",
    description: "Do not change character, loadout, deck, or vehicle.",
  },
  basicTools: {
    title: "Use Basic Gear",
    description: "Leave your strongest or rarest option unused.",
  },
  noRecovery: {
    title: "No Optional Recovery",
    description: "Use no optional healing or repair items.",
  },
  keepReserve: {
    title: "Keep One in Reserve",
    description: "Finish with one use of a limited resource left.",
  },
  cleanExit: {
    title: "Stop Cleanly",
    description: "End somewhere safe without starting another objective.",
  },
  useWhatYouFind: {
    title: "Use What You Find",
    description: "Use one useful thing found after the quest begins.",
  },
  helpFirst: {
    title: "Help First",
    description: "Assist, rescue, or share before chasing your own result.",
  },
  holdYourRole: {
    title: "Keep Your Role",
    description: "Hold one team responsibility through the full result.",
  },
  oneMoreCorner: {
    title: "Take One Detour",
    description: "Explore one optional turn beside the main route.",
  },
  noRestart: {
    title: "Play It Out",
    description: "Continue after mistakes instead of restarting or reloading.",
  },
  noUpgrades: {
    title: "No Upgrades",
    description: "Buy, unlock, and equip no upgrades during the quest.",
  },
  spendTheGoodStuff: {
    title: "Spend the Good Stuff",
    description: "Use one valuable resource you usually save.",
  },
  noCombat: {
    title: "Avoid Optional Combat",
    description: "Use movement, dialogue, stealth, or patience instead.",
  },
  firstInstinct: {
    title: "First Instinct",
    description: "Take the first sincere choice without comparing alternatives.",
  },
  oppositeInstinct: {
    title: "Opposite Instinct",
    description: "Choose the meaningful option opposite to your usual habit.",
  },
  landmarksOnly: {
    title: "Landmarks Only",
    description: "Navigate by visible places instead of route lines.",
  },
  listenFirst: {
    title: "Listen First",
    description: "Let dialogue and world sounds guide the next action.",
  },
  followTheLocal: {
    title: "Follow a Local",
    description: "Let one resident or creature determine your route.",
  },
  oneTool: {
    title: "One Main Tool",
    description: "Use one tool or action as your main answer.",
  },
  localMaterials: {
    title: "Local Materials",
    description: "Build only with materials already in the current place.",
  },
  onePalette: {
    title: "One Palette",
    description: "Use one color family and one contrasting accent.",
  },
  noUndo: {
    title: "No Undo",
    description: "Keep every placed, painted, or customized choice.",
  },
  firstTake: {
    title: "Keep the First Take",
    description: "Keep the first complete version without another polish pass.",
  },
  oneRoom: {
    title: "One Space",
    description: "Keep every change inside one small bounded area.",
  },
  photoProof: {
    title: "Bring Back One Image",
    description: "Capture one screenshot showing the finished result.",
  },
  leaveAGift: {
    title: "Leave a Gift",
    description: "Leave one useful improvement or resource for someone else.",
  },
  stayTogether: {
    title: "Stay Together",
    description: "Remain within sight or support range of another player.",
  },
  quietLobby: {
    title: "No Microphone Needed",
    description: "Communicate through pings, movement, emotes, or short text.",
  },
  borrowedStyle: {
    title: "Borrow Their Style",
    description: "Copy one visible route, build, rhythm, or technique.",
  },
  threeAttempts: {
    title: "Three Attempts",
    description: "Give the same challenge three complete attempts.",
  },
  damageBudget: {
    title: "Damage Budget",
    description: "Set a damage limit and stop when it is spent.",
  },
  underdogKit: {
    title: "Underdog Option",
    description: "Use a viable option weaker than your usual favorite.",
  },
  oneMove: {
    title: "One Move Deeper",
    description: "Use one mechanic deliberately in three situations.",
  },
  noShopping: {
    title: "No Shopping",
    description: "Buy nothing; use only what you own or find.",
  },
  noLooting: {
    title: "No Optional Loot",
    description: "Leave optional loot and inventory management alone.",
  },
  noMarkers: {
    title: "No Markers",
    description: "Disable markers and follow information inside the world.",
  },
  worldAudio: {
    title: "World Audio",
    description: "Lower the music and listen to the environment.",
  },
  groundLevel: {
    title: "Ground Level",
    description: "Keep the camera close instead of overhead or distant.",
  },
} as const satisfies Record<string, QuestTip>;

export type QuestTipId = keyof typeof QUEST_TIPS;

export function resolveQuestTips(
  tipIds: readonly QuestTipId[],
): readonly QuestTip[] {
  return tipIds.map((tipId) => QUEST_TIPS[tipId]);
}
