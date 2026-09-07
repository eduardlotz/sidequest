import type { IconProps } from "@phosphor-icons/react";
import type { GameCapabilityId } from "../../../data/gameTypes";
import { AlienIcon } from "@phosphor-icons/react/dist/csr/Alien";
import { BackpackIcon } from "@phosphor-icons/react/dist/csr/Backpack";
import { BookOpenIcon } from "@phosphor-icons/react/dist/csr/BookOpen";
import { TargetIcon } from "@phosphor-icons/react/dist/csr/Target";
import { CameraIcon } from "@phosphor-icons/react/dist/csr/Camera";
import { CookingPotIcon } from "@phosphor-icons/react/dist/csr/CookingPot";
import { CrosshairIcon } from "@phosphor-icons/react/dist/csr/Crosshair";
import { DetectiveIcon } from "@phosphor-icons/react/dist/csr/Detective";
import { FishIcon } from "@phosphor-icons/react/dist/csr/Fish";
import { FlagIcon } from "@phosphor-icons/react/dist/csr/Flag";
import { GameControllerIcon } from "@phosphor-icons/react/dist/csr/GameController";
import { HammerIcon } from "@phosphor-icons/react/dist/csr/Hammer";
import { HandFistIcon } from "@phosphor-icons/react/dist/csr/HandFist";
import { LegoIcon } from "@phosphor-icons/react/dist/csr/Lego";
import { MapTrifoldIcon } from "@phosphor-icons/react/dist/csr/MapTrifold";
import { PersonSimpleRunIcon } from "@phosphor-icons/react/dist/csr/PersonSimpleRun";
import { PersonSimpleSwimIcon } from "@phosphor-icons/react/dist/csr/PersonSimpleSwim";
import { PlanetIcon } from "@phosphor-icons/react/dist/csr/Planet";
import { PlantIcon } from "@phosphor-icons/react/dist/csr/Plant";
import { PuzzlePieceIcon } from "@phosphor-icons/react/dist/csr/PuzzlePiece";
import { SteeringWheelIcon } from "@phosphor-icons/react/dist/csr/SteeringWheel";
import { SwordIcon } from "@phosphor-icons/react/dist/csr/Sword";
import { TShirtIcon } from "@phosphor-icons/react/dist/csr/TShirt";
import { TreasureChestIcon } from "@phosphor-icons/react/dist/csr/TreasureChest";
import { UsersIcon } from "@phosphor-icons/react/dist/csr/Users";
const activities = {
  "open-world": MapTrifoldIcon,
  "missions-or-levels": FlagIcon,
  "rounds-or-matches": GameControllerIcon,
  combat: SwordIcon,
  "boss-fights": AlienIcon,
  stealth: DetectiveIcon,
  "equipment-loadouts": BackpackIcon,
  puzzles: PuzzlePieceIcon,
  building: LegoIcon,
  crafting: HammerIcon,
  fishing: FishIcon,
  cooking: CookingPotIcon,
  "farming-or-care": PlantIcon,
  "driving-or-racing": SteeringWheelIcon,
  "advanced-traversal": PersonSimpleRunIcon,
  customization: TShirtIcon,
  "photo-mode": CameraIcon,
  "online-teamplay": UsersIcon,
  "local-multiplayer": GameControllerIcon,
  collectibles: TreasureChestIcon,
  "choices-or-lore": BookOpenIcon,
  pistols: CrosshairIcon,
  bows: TargetIcon,
  "melee-weapons": SwordIcon,
  "fist-fights": HandFistIcon,
  rifles: CrosshairIcon,
  "space-exploration": PlanetIcon,
  swimming: PersonSimpleSwimIcon,
} satisfies Record<GameCapabilityId, React.ComponentType<IconProps>>;
export function GameActivityIcon({
  capability,
  ...props
}: IconProps & { capability: GameCapabilityId }) {
  const Icon = activities[capability];
  return <Icon size={24} {...props} weight="duotone" aria-hidden />;
}
