import { LowEnergyQuests } from "./low-energy";
import { RelaxQuests } from "./relax";
import { ExploreQuests } from "./explore";
import { ProgressQuests } from "./progress";
import { ChallengeQuests } from "./challenge";
import { RestlessQuests } from "./restless";
import { ConnectQuests } from "./connect";
import { FocusedQuests } from "./focused";
import { NostalgicQuests } from "./nostalgic";
import { CreateQuests } from "./create";
import { OverwhelmedQuests } from "./overwhelmed";
import { CuriousQuests } from "./curious";
import { GamesNoMansSkyQuests } from "./games/no-mans-sky";
import { GamesMinecraftQuests } from "./games/minecraft";
import { GamesCyberpunk2077Quests } from "./games/cyberpunk-2077";
import { GamesRedDeadRedemptionQuests } from "./games/red-dead-redemption";
import { GamesKingdomComeDeliveranceQuests } from "./games/kingdom-come-deliverance";
import { GamesRocketLeagueQuests } from "./games/rocket-league";
import { GamesSkateQuests } from "./games/skate";
import { GamesFortniteQuests } from "./games/fortnite";
import { GamesFarCryQuests } from "./games/far-cry";
import { GamesGtaQuests } from "./games/gta";
import { GamesStardewValleyQuests } from "./games/stardew-valley";
import { GamesTheSimsQuests } from "./games/the-sims";
import { GamesAnimalCrossingQuests } from "./games/animal-crossing";
import { GamesZeldaQuests } from "./games/zelda";
import { GamesCrimsonDesertQuests } from "./games/crimson-desert";
import { GamesEaSportsFcQuests } from "./games/ea-sports-fc";
import { GamesHotlineMiamiQuests } from "./games/hotline-miami";
import { GamesFalloutQuests } from "./games/fallout";
import { TimedQuests } from "./timed";

// Direct assembly of the authored records. No revision overrides or fallback copies.
export const AUTHORED_QUESTS = [
  ...LowEnergyQuests,
  ...RelaxQuests,
  ...ExploreQuests,
  ...ProgressQuests,
  ...ChallengeQuests,
  ...RestlessQuests,
  ...ConnectQuests,
  ...FocusedQuests,
  ...NostalgicQuests,
  ...CreateQuests,
  ...OverwhelmedQuests,
  ...CuriousQuests,
  ...GamesNoMansSkyQuests,
  ...GamesMinecraftQuests,
  ...GamesCyberpunk2077Quests,
  ...GamesRedDeadRedemptionQuests,
  ...GamesKingdomComeDeliveranceQuests,
  ...GamesRocketLeagueQuests,
  ...GamesSkateQuests,
  ...GamesFortniteQuests,
  ...GamesFarCryQuests,
  ...GamesGtaQuests,
  ...GamesStardewValleyQuests,
  ...GamesTheSimsQuests,
  ...GamesAnimalCrossingQuests,
  ...GamesZeldaQuests,
  ...GamesCrimsonDesertQuests,
  ...GamesEaSportsFcQuests,
  ...GamesHotlineMiamiQuests,
  ...GamesFalloutQuests,
  ...TimedQuests,
];
