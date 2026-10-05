import { AUTHORED_QUESTS } from "./catalog";

function forGame(gameId: string) {
  return AUTHORED_QUESTS.filter(quest => quest.curated?.gameId === gameId);
}

export const exclusiveQuestsByGame = {
  "no-mans-sky": forGame("no-mans-sky"),
  "minecraft": forGame("minecraft"),
  "cyberpunk-2077": forGame("cyberpunk-2077"),
  "red-dead-redemption": forGame("red-dead-redemption"),
  "kingdom-come-deliverance": forGame("kingdom-come-deliverance"),
  "rocket-league": forGame("rocket-league"),
  "skate": forGame("skate"),
  "fortnite": forGame("fortnite"),
  "far-cry": forGame("far-cry"),
  "gta": forGame("gta"),
  "stardew-valley": forGame("stardew-valley"),
  "the-sims": forGame("the-sims"),
  "animal-crossing": forGame("animal-crossing"),
  "zelda": forGame("zelda"),
  "crimson-desert": forGame("crimson-desert"),
  "ea-sports-fc": forGame("ea-sports-fc"),
  "hotline-miami": forGame("hotline-miami"),
  "fallout": forGame("fallout"),
};

export const exclusiveQuests = Object.values(exclusiveQuestsByGame).flat();
