import { FLEXIBLE_GAME_COMPATIBILITY } from "./questCompatibility";
import type { CuratedGameDefinition } from "../gameTypes";
import { exclusiveQuestsByGame } from "../quests/exclusive";
import { RETIRED_QUEST_IDS } from "../quests/retired";
import { validateContext } from "../quests/validation";
import { QUEST_CORES_BY_ID } from "../quests";

function game(
  id: keyof typeof exclusiveQuestsByGame,
  name: string,
  installments: CuratedGameDefinition["installments"] = [],
  visual?: Pick<CuratedGameDefinition, "iconId" | "colorId">,
): CuratedGameDefinition {
  const exclusiveQuests = exclusiveQuestsByGame[id].filter(quest => !RETIRED_QUEST_IDS.has(quest.id));
  const listedInstallmentIds = new Set(
    installments.map((installment) => installment.id),
  );
  const bindings = FLEXIBLE_GAME_COMPATIBILITY.filter(row => row.gameId === id);
  const bindingIds = new Set<string>();
  for (const row of bindings) {
    const quest = QUEST_CORES_BY_ID[row.questId];
    if ((row.installmentId !== null && !listedInstallmentIds.has(row.installmentId))
      || (installments.length > 0 && row.installmentId === null)
      || !quest?.gameBindable || quest.curated || RETIRED_QUEST_IDS.has(row.questId) || !row.contexts.length) {
      throw new Error(`${id} has an invalid flexible installment binding for ${row.questId}`);
    }
    const key = `${row.installmentId}:${row.questId}`;
    if (bindingIds.has(key)) throw new Error(`${id} has a duplicate flexible binding ${key}`);
    bindingIds.add(key);
    row.contexts.forEach(context => validateContext(context, row.questId));
  }
  const questInstallmentIds = new Set(
    exclusiveQuests.flatMap((quest) => quest.curated?.installmentIds ?? []),
  );

  for (const installmentId of questInstallmentIds) {
    if (!listedInstallmentIds.has(installmentId)) {
      throw new Error(`${id} is missing quested installment ${installmentId}`);
    }
  }
  for (const installmentId of listedInstallmentIds) {
    if (!questInstallmentIds.has(installmentId)) {
      throw new Error(
        `${id} lists installment ${installmentId} without a dedicated quest`,
      );
    }
    const dedicatedCount = new Set(exclusiveQuests.filter((quest) =>
      quest.curated?.installmentIds.length === 1
      && quest.curated.installmentIds[0] === installmentId
    ).map((quest) => quest.id)).size;
    if (dedicatedCount < 10) {
      throw new Error(`${id} installment ${installmentId} has only ${dedicatedCount} dedicated quests`);
    }
  }
  if (!installments.length && new Set(exclusiveQuests.map((quest) => quest.id)).size < 10) {
    throw new Error(`${id} has fewer than ten distinct dedicated quests`);
  }

  return {
    id,
    name,
    artwork: `games/${id}.jpg`,
    ...(visual ?? {}),
    isSeries: installments.length > 0,
    installments,
    compatibleQuestIds: [...new Set(FLEXIBLE_GAME_COMPATIBILITY.filter(row => row.gameId === id).map(row => row.questId))],
    exclusiveQuestIds: exclusiveQuests.map((quest) => quest.id),
  };
}

// Every flexible registration names an exact installment and complete supported contexts.
export const CURATED_GAMES: readonly CuratedGameDefinition[] = [
  game("stardew-valley", "Stardew Valley"),
  game(
    "the-sims",
    "The Sims",
    [
      { id: "sims-3", name: "The Sims 3" },
      { id: "sims-4", name: "The Sims 4" },
    ],
  ),
  game(
    "animal-crossing",
    "Animal Crossing: New Horizons",
  ),
  game(
    "zelda",
    "The Legend of Zelda",
    [
      { id: "botw", name: "Breath of the Wild" },
      { id: "totk", name: "Tears of the Kingdom" },
    ],
  ),
  game(
    "no-mans-sky",
    "No Man’s Sky",
    [],
  ),
  game(
    "minecraft",
    "Minecraft",
    [],
  ),
  game(
    "cyberpunk-2077",
    "Cyberpunk 2077",
    [],
  ),
  game(
    "red-dead-redemption",
    "Red Dead Redemption",
    [
      { id: "rdr-1", name: "Red Dead Redemption" },
      { id: "rdr-2", name: "Red Dead Redemption 2" },
    ],
  ),
  game(
    "kingdom-come-deliverance",
    "Kingdom Come: Deliverance",
    [
      { id: "kcd-1", name: "Kingdom Come: Deliverance" },
      { id: "kcd-2", name: "Kingdom Come: Deliverance II" },
    ],
  ),
  game(
    "rocket-league",
    "Rocket League",
    [],
  ),
  game(
    "skate",
    "Skate",
    [
      { id: "skate-3", name: "Skate 3" },
      { id: "skate-2025", name: "skate." },
    ],
  ),
  game(
    "fortnite",
    "Fortnite",
    [],
  ),
  game(
    "far-cry",
    "Far Cry",
    [
      { id: "fc-primal", name: "Far Cry Primal" },
      { id: "fc-3", name: "Far Cry 3" },
      { id: "fc-4", name: "Far Cry 4" },
      { id: "fc-5", name: "Far Cry 5" },
    ],
  ),
  game(
    "gta",
    "Grand Theft Auto",
    [
      { id: "gta-sa", name: "Grand Theft Auto: San Andreas" },
      { id: "gta-iv", name: "Grand Theft Auto IV" },
      { id: "gta-v", name: "Grand Theft Auto V" },
    ],
  ),
  game("crimson-desert", "Crimson Desert", [], {
    iconId: "adventure",
    colorId: "explore",
  }),
  game(
    "ea-sports-fc",
    "EA SPORTS FC",
    [
      { id: "fc-25", name: "EA SPORTS FC 25" },
      { id: "fc-26", name: "EA SPORTS FC 26" },
      { id: "fc-27", name: "EA SPORTS FC 27" },
    ],
    { iconId: "sports", colorId: "restless" },
  ),
  game(
    "hotline-miami",
    "Hotline Miami",
    [
      { id: "hotline-miami-1", name: "Hotline Miami" },
      { id: "hotline-miami-2", name: "Hotline Miami 2: Wrong Number" },
    ],
    { iconId: "slasher-mask", colorId: "restless" },
  ),
  game(
    "fallout",
    "Fallout",
    [
      { id: "fallout-4", name: "Fallout 4" },
      { id: "fallout-76", name: "Fallout 76" },
    ],
    { iconId: "radiation", colorId: "progress" },
  ),
];

const registeredGameIds = new Set(CURATED_GAMES.map(game => game.id));
if (registeredGameIds.size !== CURATED_GAMES.length) throw new Error("Duplicate curated game identity");
for (const quest of Object.values(QUEST_CORES_BY_ID)) {
  if (quest.curated && !registeredGameIds.has(quest.curated.gameId)) {
    throw new Error(`Quest ${quest.id} references an unregistered curated game`);
  }
}
for (const row of FLEXIBLE_GAME_COMPATIBILITY) {
  if (!registeredGameIds.has(row.gameId)) throw new Error(`Binding ${row.questId} references an unregistered game`);
}
