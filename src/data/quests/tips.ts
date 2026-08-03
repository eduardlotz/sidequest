import type { QuestTip } from "../questTypes";

export const QUEST_TIPS = {
  oneTrack: {
    title: "Stay on One Goal",
    description: "Ignore side missions and map markers so the quest stays on one clear goal.",
  },
  noOutsideHelp: {
    title: "No Outside Help",
    description: "Rely only on the game: no guides, wikis, solution videos, or external maps.",
  },
  letItStand: {
    title: "Let It Stand",
    description: "Accept the first honest result, even when reloading or rerolling could improve it.",
  },
  minimalHud: {
    title: "Minimal HUD",
    description: "Hide optional HUD elements and keep only the information needed for this quest.",
  },
  noMap: {
    title: "No Map",
    description: "Navigate through landmarks and memory without opening a map or route overlay.",
  },
  longWay: {
    title: "No Fast Travel",
    description: "Travel through the playable world instead of skipping the journey through a menu.",
  },
  measuredPace: {
    title: "Move Without Rushing",
    description: "Avoid sprinting, boosting, or skipping ahead; let the journey set the pace.",
  },
  fixedKit: {
    title: "Keep Your Setup",
    description: "Keep the current character, loadout, deck, or vehicle for the entire quest.",
  },
  basicTools: {
    title: "Use Basic Gear",
    description: "Leave your strongest or rarest option unused and solve the quest with ordinary gear.",
  },
  noRecovery: {
    title: "No Optional Recovery",
    description: "Use no optional healing or repair items; recover only when the game requires it.",
  },
  keepReserve: {
    title: "Keep One in Reserve",
    description: "Finish with at least one use of a limited resource still available.",
  },
  cleanExit: {
    title: "Stop Cleanly",
    description: "End at a safe save point or result screen without starting something new.",
  },
  useWhatYouFind: {
    title: "Use What You Find",
    description: "Make one useful item, tool, or resource found during the quest part of your plan.",
  },
  helpFirst: {
    title: "Help First",
    description: "Assist, rescue, or share with someone before pursuing your own result.",
  },
  holdYourRole: {
    title: "Keep Your Role",
    description: "Choose one team responsibility and keep serving it through the complete result.",
  },
  oneMoreCorner: {
    title: "Take One Detour",
    description: "Take one optional turn beside the main route, then return to the quest.",
  },
  noRestart: {
    title: "Play It Out",
    description: "Continue after mistakes and adapt instead of restarting, reloading, or abandoning the attempt.",
  },
  noUpgrades: {
    title: "No Upgrades",
    description: "Buy, unlock, and equip no upgrades until the current quest is finished.",
  },
  spendTheGoodStuff: {
    title: "Spend the Good Stuff",
    description: "Spend one valuable item, ability, or currency you would normally keep for later.",
  },
  noCombat: {
    title: "Avoid Optional Combat",
    description: "Avoid fights that are not required; use movement, dialogue, stealth, or patience instead.",
  },
  firstInstinct: {
    title: "First Instinct",
    description: "Take the first sincere choice that feels right without comparing every alternative.",
  },
  oppositeInstinct: {
    title: "Opposite Instinct",
    description: "Choose one meaningful option opposite to your usual habit and accept its outcome.",
  },
  landmarksOnly: {
    title: "Landmarks Only",
    description: "Navigate by visible places, signs, and terrain instead of following route lines.",
  },
  listenFirst: {
    title: "Listen First",
    description: "Pause for dialogue and world sounds, then let them guide your next action.",
  },
  followTheLocal: {
    title: "Follow a Local",
    description: "Follow one resident or creature and let their movement determine your next destination.",
  },
  oneTool: {
    title: "One Main Tool",
    description: "Choose one tool or action and make it your main answer throughout the quest.",
  },
  localMaterials: {
    title: "Local Materials",
    description: "Build only with materials already available in the current place or nearby storage.",
  },
  onePalette: {
    title: "One Palette",
    description: "Limit the result to one color family plus a single contrasting accent.",
  },
  noUndo: {
    title: "No Undo",
    description: "Keep every placed, painted, or customized choice and adapt around imperfect decisions.",
  },
  firstTake: {
    title: "Keep the First Take",
    description: "Keep the first complete version and resist adding a second polish pass.",
  },
  oneRoom: {
    title: "One Space",
    description: "Keep every action and change inside one small, clearly bounded area.",
  },
  photoProof: {
    title: "Bring Back One Image",
    description: "Capture one screenshot that clearly shows the finished result or final stopping point.",
  },
  leaveAGift: {
    title: "Leave a Gift",
    description: "Leave one useful improvement, route, tool, or resource for another player.",
  },
  stayTogether: {
    title: "Stay Together",
    description: "Remain within sight, communication, or support range of another player throughout the activity.",
  },
  quietLobby: {
    title: "No Microphone Needed",
    description: "Keep the microphone off and communicate through pings, movement, emotes, or short text.",
  },
  borrowedStyle: {
    title: "Borrow Their Style",
    description: "Copy one visible route, build, rhythm, or technique before adapting it yourself.",
  },
  threeAttempts: {
    title: "Three Attempts",
    description: "Give the same challenge three complete attempts without changing the target between them.",
  },
  damageBudget: {
    title: "Damage Budget",
    description: "Choose a clear damage limit before starting and stop the attempt when it is spent.",
  },
  underdogKit: {
    title: "Underdog Option",
    description: "Use a viable character, tool, or build weaker than your usual favorite.",
  },
  oneMove: {
    title: "One Move Deeper",
    description: "Choose one mechanic and use it deliberately in three different situations.",
  },
  noShopping: {
    title: "No Shopping",
    description: "Buy nothing during the quest; use only what you already own or find.",
  },
  noLooting: {
    title: "No Optional Loot",
    description: "Ignore optional loot and keep inventory management to only what progress requires.",
  },
  noMarkers: {
    title: "No Markers",
    description: "Disable optional markers and follow directions, signs, and clues inside the world.",
  },
  worldAudio: {
    title: "World Audio",
    description: "Lower the music enough to notice environmental sounds, voices, machinery, and distant activity.",
  },
  groundLevel: {
    title: "Ground Level",
    description: "Keep the camera close to the character or world instead of overhead or distant.",
  },
} as const satisfies Record<string, QuestTip>;

export type QuestTipId = keyof typeof QUEST_TIPS;

export function resolveQuestTips(
  tipIds: readonly QuestTipId[],
): readonly QuestTip[] {
  return tipIds.map((tipId) => QUEST_TIPS[tipId]);
}
