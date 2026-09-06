import type { CuratedGameDefinition } from "../gameTypes";
import { exclusiveQuestsByGame } from "../quests/exclusive";

function game(
  id: keyof typeof exclusiveQuestsByGame,
  name: string,
  compatibleQuestIds: readonly string[],
  installments: CuratedGameDefinition["installments"] = [],
): CuratedGameDefinition {
  return {
    id, name, artwork: `games/${id}.jpg`,
    isSeries: installments.length > 0,
    installments,
    compatibleQuestIds: ["one-new-thing", "share-one-discovery", "revisit-a-favorite", ...compatibleQuestIds],
    exclusiveQuestIds: exclusiveQuestsByGame[id].map((quest) => quest.id),
  };
}

// Explicit matches only; a feature in one installment is not a series guarantee.
export const CURATED_GAMES: readonly CuratedGameDefinition[] = [
  game("far-cry", "Far Cry", ["a-little-walk", "beyond-the-map", "main-mission", "next-checkpoint", "no-healing"], [{"id": "fc-3", "name": "Far Cry 3"}, {"id": "fc-4", "name": "Far Cry 4"}, {"id": "fc-5", "name": "Far Cry 5"}, {"id": "fc-6", "name": "Far Cry 6"}]),
  game("gta", "Grand Theft Auto", ["a-little-walk", "beyond-the-map", "main-mission", "next-checkpoint", "no-healing"], [{"id": "gta-iv", "name": "Grand Theft Auto IV"}, {"id": "gta-v", "name": "Grand Theft Auto V"}]),
  game("no-mans-sky", "No Man’s Sky", ["a-little-walk", "beyond-the-map", "going-fishing", "first-recipe", "upgrade-time"], []),
  game("minecraft", "Minecraft", ["a-little-walk", "beyond-the-map", "going-fishing", "first-recipe"], []),
  game("assassins-creed", "Assassin’s Creed", ["a-little-walk", "beyond-the-map", "main-mission", "next-checkpoint", "no-healing"], [{"id": "ac-ii", "name": "Assassin’s Creed II"}, {"id": "ac-brotherhood", "name": "Brotherhood"}, {"id": "ac-revelations", "name": "Revelations"}, {"id": "ac-iii", "name": "Assassin’s Creed III"}, {"id": "ac-black-flag", "name": "Black Flag"}, {"id": "ac-unity", "name": "Unity"}, {"id": "ac-syndicate", "name": "Syndicate"}, {"id": "ac-origins", "name": "Origins"}, {"id": "ac-odyssey", "name": "Odyssey"}, {"id": "ac-valhalla", "name": "Valhalla"}, {"id": "ac-mirage", "name": "Mirage"}, {"id": "ac-shadows", "name": "Shadows"}]),
  game("cyberpunk-2077", "Cyberpunk 2077", ["a-little-walk", "beyond-the-map", "main-mission", "next-checkpoint", "no-healing", "upgrade-time", "one-tracked-quest"], []),
  game("crimson-desert", "Crimson Desert", ["a-little-walk", "beyond-the-map", "main-mission", "next-checkpoint", "no-healing", "going-fishing", "first-recipe", "upgrade-time", "boss-practice"], []),
  game("battlefield", "Battlefield", ["co-op-check-in", "help-a-stranger", "support-round", "default-round"], [{"id": "bf-3", "name": "Battlefield 3"}, {"id": "bf-4", "name": "Battlefield 4"}, {"id": "bf-1", "name": "Battlefield 1"}, {"id": "bf-v", "name": "Battlefield V"}, {"id": "bf-2042", "name": "Battlefield 2042"}, {"id": "bf-6", "name": "Battlefield 6"}]),
  game("red-dead-redemption", "Red Dead Redemption", ["a-little-walk", "beyond-the-map", "main-mission", "next-checkpoint", "no-healing"], [{"id": "rdr-1", "name": "Red Dead Redemption"}, {"id": "rdr-2", "name": "Red Dead Redemption 2"}]),
  game("kingdom-come-deliverance", "Kingdom Come: Deliverance", ["a-little-walk", "beyond-the-map", "main-mission", "next-checkpoint", "no-healing", "first-recipe"], [{"id": "kcd-1", "name": "Kingdom Come: Deliverance"}, {"id": "kcd-2", "name": "Kingdom Come: Deliverance II"}]),
];
