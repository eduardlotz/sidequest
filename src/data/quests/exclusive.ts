import { farCryQuests } from "./games/far-cry";
import { gtaQuests } from "./games/gta";
import { noMansSkyQuests } from "./games/no-mans-sky";
import { minecraftQuests } from "./games/minecraft";
import { assassinsCreedQuests } from "./games/assassins-creed";
import { cyberpunkQuests } from "./games/cyberpunk-2077";
import { crimsonDesertQuests } from "./games/crimson-desert";
import { battlefieldQuests } from "./games/battlefield";
import { redDeadQuests } from "./games/red-dead-redemption";
import { kingdomComeQuests } from "./games/kingdom-come-deliverance";

export const exclusiveQuestsByGame = {
  "far-cry": farCryQuests,
  "gta": gtaQuests,
  "no-mans-sky": noMansSkyQuests,
  "minecraft": minecraftQuests,
  "assassins-creed": assassinsCreedQuests,
  "cyberpunk-2077": cyberpunkQuests,
  "crimson-desert": crimsonDesertQuests,
  "battlefield": battlefieldQuests,
  "red-dead-redemption": redDeadQuests,
  "kingdom-come-deliverance": kingdomComeQuests,
};

export const exclusiveQuests = Object.values(exclusiveQuestsByGame).flat();
