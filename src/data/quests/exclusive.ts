import { extraGameQuestsByGame } from "./games/extra";
import { noMansSkyQuests } from "./games/no-mans-sky";
import { minecraftQuests } from "./games/minecraft";
import { cyberpunkQuests } from "./games/cyberpunk-2077";
import { redDeadQuests } from "./games/red-dead-redemption";
import { kingdomComeQuests } from "./games/kingdom-come-deliverance";
import { rocketLeagueQuests } from "./games/rocket-league";
import { skateQuests } from "./games/skate";
import { fortniteQuests } from "./games/fortnite";
import { farCryQuests } from "./games/far-cry";
import { gtaQuests } from "./games/gta";
import { stardewValleyQuests } from "./games/stardew-valley";
import { theSimsQuests } from "./games/the-sims";
import { animalCrossingQuests } from "./games/animal-crossing";
import { zeldaQuests } from "./games/zelda";
import { crimsonDesertQuests } from "./games/crimson-desert";
import { eaSportsFcQuests } from "./games/ea-sports-fc";
import { hotlineMiamiQuests } from "./games/hotline-miami";
import { falloutQuests } from "./games/fallout";

function withExtra(gameId: string, quests: typeof noMansSkyQuests) {
  return [...quests, ...(extraGameQuestsByGame[gameId] ?? [])];
}

export const exclusiveQuestsByGame = {
  "no-mans-sky": withExtra("no-mans-sky", noMansSkyQuests),
  "minecraft": withExtra("minecraft", minecraftQuests),
  "cyberpunk-2077": withExtra("cyberpunk-2077", cyberpunkQuests),
  "red-dead-redemption": withExtra("red-dead-redemption", redDeadQuests),
  "kingdom-come-deliverance": withExtra("kingdom-come-deliverance", kingdomComeQuests),
  "rocket-league": withExtra("rocket-league", rocketLeagueQuests),
  skate: withExtra("skate", skateQuests),
  fortnite: withExtra("fortnite", fortniteQuests),
  "far-cry": withExtra("far-cry", farCryQuests),
  gta: withExtra("gta", gtaQuests),
  "stardew-valley": withExtra("stardew-valley", stardewValleyQuests),
  "the-sims": withExtra("the-sims", theSimsQuests),
  "animal-crossing": withExtra("animal-crossing", animalCrossingQuests),
  zelda: withExtra("zelda", zeldaQuests),
  "crimson-desert": withExtra("crimson-desert", crimsonDesertQuests),
  "ea-sports-fc": withExtra("ea-sports-fc", eaSportsFcQuests),
  "hotline-miami": withExtra("hotline-miami", hotlineMiamiQuests),
  fallout: withExtra("fallout", falloutQuests),
};

export const exclusiveQuests = Object.values(exclusiveQuestsByGame).flat();
