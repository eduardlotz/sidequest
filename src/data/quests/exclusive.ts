import { noMansSkyQuests } from "./games/no-mans-sky";
import { minecraftQuests } from "./games/minecraft";
import { cyberpunkQuests } from "./games/cyberpunk-2077";
import { redDeadQuests } from "./games/red-dead-redemption";
import { kingdomComeQuests } from "./games/kingdom-come-deliverance";
import { skyrimQuests } from "./games/skyrim";
import { rocketLeagueQuests } from "./games/rocket-league";
import { skateQuests } from "./games/skate";
import { fortniteQuests } from "./games/fortnite";
import { farCryQuests } from "./games/far-cry";
import { gtaQuests } from "./games/gta";
import { assassinsCreedQuests } from "./games/assassins-creed";
import { battlefieldQuests } from "./games/battlefield";
import { hitmanQuests } from "./games/hitman";
import { stardewValleyQuests } from "./games/stardew-valley";
import { theSimsQuests } from "./games/the-sims";
import { animalCrossingQuests } from "./games/animal-crossing";
import { baldursGate3Quests } from "./games/baldurs-gate-3";
import { zeldaQuests } from "./games/zelda";

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
  "far-cry": farCryQuests,
  gta: gtaQuests,
  "assassins-creed": assassinsCreedQuests,
  battlefield: battlefieldQuests,
  hitman: hitmanQuests,
  "stardew-valley": stardewValleyQuests,
  "the-sims": theSimsQuests,
  "animal-crossing": animalCrossingQuests,
  "baldurs-gate-3": baldursGate3Quests,
  zelda: zeldaQuests,
};

export const exclusiveQuests = Object.values(exclusiveQuestsByGame).flat();
