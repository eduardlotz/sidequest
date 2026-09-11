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
    installments, compatibleQuestIds,
    exclusiveQuestIds: exclusiveQuestsByGame[id].map((quest) => quest.id),
  };
}

// A series match must work across its supported installments; tags never opt in.
export const CURATED_GAMES: readonly CuratedGameDefinition[] = [
  game("no-mans-sky", "No Man’s Sky", [
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
    "follow-one-character"
], []),
  game("minecraft", "Minecraft", [
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
    "care-first",
    "starter-gear",
    "one-slot-swap"
], []),
  game("cyberpunk-2077", "Cyberpunk 2077", [
    "a-little-walk",
    "beyond-the-map",
    "main-mission",
    "one-level-no-detours",
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
    "movement-new-line"
], []),
  game("red-dead-redemption", "Red Dead Redemption", [
    "a-little-walk",
    "beyond-the-map",
    "main-mission",
    "one-level-no-detours",
    "starter-gear",
    "one-slot-swap",
    "hunt-single-species",
    "trade-three-kinds"
], [{"id": "rdr-1", "name": "Red Dead Redemption"}, {"id": "rdr-2", "name": "Red Dead Redemption 2"}]),
  game("kingdom-come-deliverance", "Kingdom Come: Deliverance", [
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
    "follow-one-character"
], [{"id": "kcd-1", "name": "Kingdom Come: Deliverance"}, {"id": "kcd-2", "name": "Kingdom Come: Deliverance II"}]),
  game("skyrim", "The Elder Scrolls V: Skyrim", [
    "a-little-walk",
    "beyond-the-map",
    "main-mission",
    "starter-gear",
    "one-slot-swap",
    "spell-single-school",
    "spell-new-opener",
    "quiet-entry-exit",
    "watch-one-patrol",
    "craft-from-storage",
    "craft-unused-recipe",
    "first-recipe",
    "cook-a-new-dish",
    "hunt-single-species",
    "trade-three-kinds",
    "follow-one-character"
], []),
  game("rocket-league", "Rocket League", [
    "default-round",
    "quick-matches",
    "sports-answer-back",
    "two-color-look",
    "follow-a-teammate"
], []),
  game("skate", "Skate", [
    "skate-two-approaches",
    "skate-flip-into-grind",
    "two-color-look",
    "a-little-walk"
], [{"id": "skate-3", "name": "Skate 3"}, {"id": "skate-2025", "name": "skate. (2025)"}]),
  game("fortnite", "Fortnite", [
    "default-round",
    "quick-matches",
    "two-color-look",
    "follow-a-teammate"
], []),
];
