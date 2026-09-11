import type { IconProps } from "@phosphor-icons/react";
import type { GameCapabilityId } from "../../../data/gameTypes";
import { AlienIcon } from "@phosphor-icons/react/dist/csr/Alien";
import { BinocularsIcon } from "@phosphor-icons/react/dist/csr/Binoculars";
import { BookOpenIcon } from "@phosphor-icons/react/dist/csr/BookOpen";
import { CameraIcon } from "@phosphor-icons/react/dist/csr/Camera";
import { CoinsIcon } from "@phosphor-icons/react/dist/csr/Coins";
import { CookingPotIcon } from "@phosphor-icons/react/dist/csr/CookingPot";
import { DetectiveIcon } from "@phosphor-icons/react/dist/csr/Detective";
import { DoorOpenIcon } from "@phosphor-icons/react/dist/csr/DoorOpen";
import { FishIcon } from "@phosphor-icons/react/dist/csr/Fish";
import { FlagIcon } from "@phosphor-icons/react/dist/csr/Flag";
import { GameControllerIcon } from "@phosphor-icons/react/dist/csr/GameController";
import { HammerIcon } from "@phosphor-icons/react/dist/csr/Hammer";
import { LegoIcon } from "@phosphor-icons/react/dist/csr/Lego";
import { MagicWandIcon } from "@phosphor-icons/react/dist/csr/MagicWand";
import { MapTrifoldIcon } from "@phosphor-icons/react/dist/csr/MapTrifold";
import { PawPrintIcon } from "@phosphor-icons/react/dist/csr/PawPrint";
import { PersonSimpleRunIcon } from "@phosphor-icons/react/dist/csr/PersonSimpleRun";
import { PersonSimpleSnowboardIcon } from "@phosphor-icons/react/dist/csr/PersonSimpleSnowboard";
import { PersonSimpleSwimIcon } from "@phosphor-icons/react/dist/csr/PersonSimpleSwim";
import { PlanetIcon } from "@phosphor-icons/react/dist/csr/Planet";
import { PlantIcon } from "@phosphor-icons/react/dist/csr/Plant";
import { PuzzlePieceIcon } from "@phosphor-icons/react/dist/csr/PuzzlePiece";
import { SoccerBallIcon } from "@phosphor-icons/react/dist/csr/SoccerBall";
import { SteeringWheelIcon } from "@phosphor-icons/react/dist/csr/SteeringWheel";
import { SwordIcon } from "@phosphor-icons/react/dist/csr/Sword";
import { TShirtIcon } from "@phosphor-icons/react/dist/csr/TShirt";
import { TreasureChestIcon } from "@phosphor-icons/react/dist/csr/TreasureChest";
import { UsersIcon } from "@phosphor-icons/react/dist/csr/Users";

const activities = {
  "open-world": MapTrifoldIcon,
  "missions-or-levels": FlagIcon,
  "rounds-or-matches": GameControllerIcon,
  "combat-loadouts": SwordIcon,
  "combat-spells": MagicWandIcon,
  "space-exploration": PlanetIcon,
  "swimming": PersonSimpleSwimIcon,
  "boss-fights": AlienIcon,
  "stealth": DetectiveIcon,
  "puzzles": PuzzlePieceIcon,
  "building": LegoIcon,
  "crafting": HammerIcon,
  "fishing": FishIcon,
  "cooking": CookingPotIcon,
  "grow-crops": PlantIcon,
  "animal-care": PawPrintIcon,
  "free-driving": SteeringWheelIcon,
  "racing": SteeringWheelIcon,
  "advanced-traversal": PersonSimpleRunIcon,
  "customization": TShirtIcon,
  "photo-mode": CameraIcon,
  "online-teamplay": UsersIcon,
  "local-multiplayer": GameControllerIcon,
  "collectibles": TreasureChestIcon,
  "choices-or-lore": BookOpenIcon,
  "trading": CoinsIcon,
  "hunting": BinocularsIcon,
  "animal-companions": PawPrintIcon,
  "skate-tricks": PersonSimpleSnowboardIcon,
  "sports-goals": SoccerBallIcon,
  "extraction-runs": DoorOpenIcon,
} satisfies Record<GameCapabilityId, React.ComponentType<IconProps>>;

export function GameActivityIcon({ capability, ...props }: IconProps & { capability: GameCapabilityId }) {
  const Icon = activities[capability];
  return <Icon size={24} {...props} weight="duotone" aria-hidden />;
}
