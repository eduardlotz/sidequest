import type { CuratedGameDefinition } from "../gameTypes";
import { exclusiveQuestsByGame } from "../quests/exclusive";

function game(
  id: keyof typeof exclusiveQuestsByGame,
  name: string,
  compatibleQuestIds: readonly string[],
  installments: CuratedGameDefinition["installments"] = [],
  visual?: Pick<CuratedGameDefinition, "iconId" | "colorId">,
): CuratedGameDefinition {
  const exclusiveQuests = exclusiveQuestsByGame[id];
  const listedInstallmentIds = new Set(
    installments.map((installment) => installment.id),
  );
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
    compatibleQuestIds,
    exclusiveQuestIds: exclusiveQuests.map((quest) => quest.id),
  };
}

// A series match must work across its supported installments; tags never opt in.
export const CURATED_GAMES: readonly CuratedGameDefinition[] = [
  game("stardew-valley", "Stardew Valley", [
    "going-fishing",
    "fish-two-waters",
    "first-recipe",
    "cook-a-new-dish",
    "one-patch-at-a-time",
    "care-first",
    "plant-a-small-row",
    "garden-pattern",
    "animals-off-the-clock",
    "fish-at-home",
  ]),
  game(
    "the-sims",
    "The Sims",
    ["build-a-memory", "two-color-look"],
    [
      { id: "sims-3", name: "The Sims 3" },
      { id: "sims-4", name: "The Sims 4" },
    ],
  ),
  game(
    "animal-crossing",
    "Animal Crossing: New Horizons",
    ["going-fishing", "fish-two-waters", "two-color-look"],
  ),
  game(
    "zelda",
    "The Legend of Zelda",
    [
      "a-little-walk",
      "beyond-the-map",
      "movement-new-line",
      "movement-two-approaches",
      "open-world-follow-the-edge",
    ],
    [
      { id: "botw", name: "Breath of the Wild" },
      { id: "totk", name: "Tears of the Kingdom" },
    ],
  ),
  game(
    "no-mans-sky",
    "No Man’s Sky",
    [
      "a-little-walk",
      "beyond-the-map",
      "planet-compare",
      "swim-return-trip",
      "build-with-three-materials",
      "build-a-memory",
      "craft-from-storage",
      "craft-unused-recipe",
      "going-fishing",
      "fish-two-waters",
      "first-recipe",
      "cook-a-new-dish",
      "drive-one-route-twice",
      "two-color-look",
      "photo-three-angles",
      "photo-small-detail",
      "trade-three-kinds",
      "follow-one-character",
      "open-world-follow-the-edge",
      "space-neighboring-stop",
      "swim-surface-checkpoints",
      "building-go-up",
      "cook-from-the-pantry",
      "photo-route-story",
    ],
    [],
  ),
  game(
    "minecraft",
    "Minecraft",
    [
      "a-little-walk",
      "beyond-the-map",
      "swim-return-trip",
      "build-with-three-materials",
      "build-a-memory",
      "craft-from-storage",
      "craft-unused-recipe",
      "going-fishing",
      "fish-two-waters",
      "first-recipe",
      "one-patch-at-a-time",
      "starter-gear",
      "one-slot-swap",
      "open-world-follow-the-edge",
      "loadout-opposite-range",
      "swim-surface-checkpoints",
      "building-go-up",
      "cook-from-the-pantry",
      "automation-remove-the-detour",
    ],
    [],
  ),
  game(
    "cyberpunk-2077",
    "Cyberpunk 2077",
    [
      "a-little-walk",
      "beyond-the-map",
      "main-mission",
      "starter-gear",
      "one-slot-swap",
      "quiet-entry-exit",
      "watch-one-patrol",
      "drive-one-route-twice",
      "two-color-look",
      "photo-three-angles",
      "photo-small-detail",
      "trade-three-kinds",
      "follow-one-character",
      "movement-new-line",
      "open-world-follow-the-edge",
      "mission-change-the-approach",
      "loadout-opposite-range",
      "photo-route-story",
      "lore-follow-a-reference",
    ],
    [],
  ),
  game(
    "red-dead-redemption",
    "Red Dead Redemption",
    [
      "a-little-walk",
      "beyond-the-map",
      "main-mission",
      "starter-gear",
      "one-slot-swap",
      "hunt-single-species",
      "trade-three-kinds",
      "open-world-follow-the-edge",
      "mission-change-the-approach",
      "loadout-opposite-range",
    ],
    [
      { id: "rdr-1", name: "Red Dead Redemption" },
      { id: "rdr-2", name: "Red Dead Redemption 2" },
    ],
  ),
  game(
    "kingdom-come-deliverance",
    "Kingdom Come: Deliverance",
    [
      "a-little-walk",
      "beyond-the-map",
      "main-mission",
      "starter-gear",
      "one-slot-swap",
      "quiet-entry-exit",
      "watch-one-patrol",
      "craft-from-storage",
      "craft-unused-recipe",
      "hunt-single-species",
      "trade-three-kinds",
      "follow-one-character",
      "open-world-follow-the-edge",
      "mission-change-the-approach",
      "loadout-opposite-range",
      "lore-follow-a-reference",
    ],
    [
      { id: "kcd-1", name: "Kingdom Come: Deliverance" },
      { id: "kcd-2", name: "Kingdom Come: Deliverance II" },
    ],
  ),
  game(
    "rocket-league",
    "Rocket League",
    [
      "default-round",
      "quick-matches",
      "sports-answer-back",
      "two-color-look",
      "follow-a-teammate",
      "sports-defend-first",
    ],
    [],
  ),
  game(
    "skate",
    "Skate",
    [
      "skate-two-approaches",
      "skate-flip-into-grind",
      "two-color-look",
      "a-little-walk",
    ],
    [
      { id: "skate-3", name: "Skate 3" },
      { id: "skate-2025", name: "skate." },
    ],
  ),
  game(
    "fortnite",
    "Fortnite",
    [
      "default-round",
      "quick-matches",
      "two-color-look",
      "follow-a-teammate",
      "squad-call-one-plan",
    ],
    [],
  ),
  game(
    "far-cry",
    "Far Cry",
    [
      "a-little-walk",
      "beyond-the-map",
      "main-mission",
      "starter-gear",
      "one-slot-swap",
      "quiet-entry-exit",
      "watch-one-patrol",
      "story-without-rushing",
      "return-to-old-main",
      "favorite-weapon-session",
      "weapon-distance-compare",
      "stealth-familiar-ground",
      "shooter-hold-a-crossing",
      "shooter-open-with-information",
      "open-world-follow-the-edge",
      "mission-change-the-approach",
      "loadout-opposite-range",
    ],
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
      "a-little-walk",
      "beyond-the-map",
      "main-mission",
      "story-without-rushing",
      "return-to-old-main",
      "drive-one-route-twice",
      "drive-a-familiar-district",
      "drive-with-landmarks",
      "open-world-follow-the-edge",
    ],
    [
      { id: "gta-sa", name: "Grand Theft Auto: San Andreas" },
      { id: "gta-iv", name: "Grand Theft Auto IV" },
      { id: "gta-v", name: "Grand Theft Auto V" },
    ],
  ),
  game("crimson-desert", "Crimson Desert", [], [], {
    iconId: "adventure",
    colorId: "explore",
  }),
  game(
    "ea-sports-fc",
    "EA SPORTS FC",
    [],
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
    [],
    [
      { id: "hotline-miami-1", name: "Hotline Miami" },
      { id: "hotline-miami-2", name: "Hotline Miami 2: Wrong Number" },
    ],
    { iconId: "slasher-mask", colorId: "restless" },
  ),
  game(
    "fallout",
    "Fallout",
    [],
    [
      { id: "fallout-4", name: "Fallout 4" },
      { id: "fallout-76", name: "Fallout 76" },
    ],
    { iconId: "radiation", colorId: "progress" },
  ),
];
