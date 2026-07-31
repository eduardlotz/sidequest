import type { QuestTip } from "../questTypes";

export const QUEST_TIPS = {
  oneTrack: {
    title: "One Track",
    description:
      "Ignore every unrelated mission, activity, and marker until this quest reaches its finish.",
  },
  noOutsideHelp: {
    title: "No Outside Help",
    description:
      "Use no walkthrough, build guide, solution, wiki, or external map during the quest.",
  },
  letItStand: {
    title: "Let It Stand",
    description:
      "Once the game reveals an outcome, do not undo, reroll, or reload it.",
  },
  minimalHud: {
    title: "Minimal HUD",
    description:
      "Hide every optional HUD element the game lets you disable for the duration of the quest.",
  },
  noMap: {
    title: "No Map",
    description:
      "Navigate without opening the map or following a route overlay.",
  },
  longWay: {
    title: "The Long Way",
    description:
      "Use no fast travel, teleport, or menu-based travel during the quest.",
  },
  measuredPace: {
    title: "Measured Pace",
    description:
      "Do not sprint, boost, or skip traversal unless the game requires it to proceed.",
  },
  fixedKit: {
    title: "Fixed Kit",
    description:
      "Do not change character, loadout, deck, vehicle, or equipped tools after the quest begins.",
  },
  basicTools: {
    title: "Basic Tools",
    description:
      "Leave your strongest or rarest option unused and play with ordinary equipment.",
  },
  noRecovery: {
    title: "No Recovery",
    description:
      "Use no optional healing, repair, or recovery item during the quest.",
  },
  keepReserve: {
    title: "Keep One in Reserve",
    description:
      "Name one limited resource before starting and finish with at least one use remaining.",
  },
  cleanExit: {
    title: "Clean Exit",
    description:
      "After the goal resolves, reach a safe or neutral state without starting another objective.",
  },
  useWhatYouFind: {
    title: "Use What You Find",
    description:
      "Use at least one tool, item, resource, or opportunity found after the quest begins.",
  },
  helpFirst: {
    title: "Help First",
    description:
      "Complete one assist, handoff, rescue, or resource share before pursuing your own result.",
  },
  holdYourRole: {
    title: "Hold Your Role",
    description:
      "Take one team responsibility and keep it until the shared result is recorded.",
  },
  oneMoreCorner: {
    title: "One More Corner",
    description:
      "Take one optional detour beside the quest route before reaching the main finish.",
  },
  noRestart: {
    title: "Play It Out",
    description:
      "Accept mistakes and continue from the next valid state instead of restarting or reloading.",
  },
  noUpgrades: {
    title: "As You Are",
    description:
      "Buy, unlock, and equip no upgrades until the quest is complete.",
  },
  spendTheGoodStuff: {
    title: "Use the Good Stuff",
    description:
      "Spend one item, ability, or resource you usually save for a more important moment.",
  },
  noCombat: {
    title: "Another Way Through",
    description:
      "Avoid optional combat and solve resistance through movement, dialogue, stealth, or patience.",
  },
  firstInstinct: {
    title: "First Instinct",
    description:
      "Take the first sincere dialogue, route, or tactical choice without comparing alternatives.",
  },
  oppositeInstinct: {
    title: "The Other Instinct",
    description:
      "When a meaningful choice appears, take the option opposite to your usual habit.",
  },
  landmarksOnly: {
    title: "Landmarks Only",
    description:
      "Navigate by visible places and remembered shapes instead of markers or route lines.",
  },
  listenFirst: {
    title: "Listen First",
    description:
      "Pause when the world speaks; let dialogue and environmental sound guide the next action.",
  },
  followTheLocal: {
    title: "Follow the Local",
    description:
      "Let an NPC, creature, traffic flow, or resident routine determine your route for a while.",
  },
  oneTool: {
    title: "One Tool",
    description:
      "Use one weapon, verb, tool, or interaction as the main answer throughout the quest.",
  },
  localMaterials: {
    title: "Local Materials",
    description:
      "Build or customize only with materials already present in the current place.",
  },
  onePalette: {
    title: "One Palette",
    description:
      "Limit the result to one dominant color family and one contrasting accent.",
  },
  noUndo: {
    title: "No Undo",
    description:
      "Keep every placed, painted, built, or customized choice instead of erasing it.",
  },
  firstTake: {
    title: "First Take",
    description:
      "Keep the first complete version, performance, route, or image without polishing another take.",
  },
  oneRoom: {
    title: "One Room",
    description:
      "Keep every change inside one room, plot, block, screen, or similarly contained space.",
  },
  photoProof: {
    title: "Bring Back One Image",
    description:
      "Capture one screenshot at the finish that shows what changed or where the quest led.",
  },
  leaveAGift: {
    title: "Leave a Gift",
    description:
      "Leave behind one useful object, improvement, message, or resource for someone else.",
  },
  stayTogether: {
    title: "Stay Together",
    description:
      "Remain within sight or support range of another player until the shared activity ends.",
  },
  quietLobby: {
    title: "No Microphone Needed",
    description:
      "Keep voice chat off and communicate only through movement, pings, emotes, or short text.",
  },
  borrowedStyle: {
    title: "Borrow Their Style",
    description:
      "Copy one visible route, build, rhythm, or technique from another player for this quest.",
  },
  threeAttempts: {
    title: "Three Attempts",
    description:
      "Give the same challenge three committed attempts before changing strategy, gear, or target.",
  },
  damageBudget: {
    title: "Damage Budget",
    description:
      "Set a small damage allowance and continue the attempt until it is spent or the goal is reached.",
  },
  underdogKit: {
    title: "Underdog Kit",
    description:
      "Use a character, vehicle, card, or loadout you consider weaker than your usual favorite.",
  },
  oneMove: {
    title: "One Move Deeper",
    description:
      "Center the whole quest on one mechanic and deliberately use it in three different situations.",
  },
  noShopping: {
    title: "No Shopping",
    description:
      "Buy nothing during the quest; solve each need with what is already owned or found.",
  },
  noLooting: {
    title: "Travel Light",
    description:
      "Collect no optional loot and leave inventory management alone until the quest ends.",
  },
  noMarkers: {
    title: "No Markers",
    description:
      "Disable objective markers and follow only information provided inside the world.",
  },
  worldAudio: {
    title: "World Audio",
    description:
      "Lower the music and let environmental sound and effects become the main guide.",
  },
  groundLevel: {
    title: "Ground Level",
    description:
      "Keep the camera close to the character or street instead of using overhead or distant views.",
  },
} as const satisfies Record<string, QuestTip>;

export type QuestTipId = keyof typeof QUEST_TIPS;

export function resolveQuestTips(
  tipIds: readonly QuestTipId[],
): readonly QuestTip[] {
  return tipIds.map((tipId) => QUEST_TIPS[tipId]);
}
