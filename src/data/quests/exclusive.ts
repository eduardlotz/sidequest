import { noMansSkyQuests } from "./games/no-mans-sky";
import { minecraftQuests } from "./games/minecraft";
import { cyberpunkQuests } from "./games/cyberpunk-2077";
import { redDeadQuests } from "./games/red-dead-redemption";
import { kingdomComeQuests } from "./games/kingdom-come-deliverance";
import { skyrimQuests } from "./games/skyrim";
import { rocketLeagueQuests } from "./games/rocket-league";
import { skateQuests } from "./games/skate";
import { fortniteQuests } from "./games/fortnite";

export const exclusiveQuestsByGame = {
  "no-mans-sky": noMansSkyQuests,
  "minecraft": minecraftQuests,
  "cyberpunk-2077": cyberpunkQuests,
  "red-dead-redemption": redDeadQuests,
  "kingdom-come-deliverance": kingdomComeQuests,
  skyrim: skyrimQuests,
  "rocket-league": rocketLeagueQuests,
  skate: skateQuests,
  fortnite: fortniteQuests,
};

export const exclusiveQuests = Object.values(exclusiveQuestsByGame).flat();
