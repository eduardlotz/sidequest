import {
  ZombieIcon,
  VampireIcon,
  SlasherMaskIcon,
  HauntedHouseIcon,
} from "./CustomGameIcons";
import { RadioactiveIcon } from "@phosphor-icons/react/dist/csr/Radioactive";
import { CastleTurretIcon } from "@phosphor-icons/react/dist/csr/CastleTurret";
import { GhostIcon } from "@phosphor-icons/react/dist/csr/Ghost";
import type { IconProps } from "@phosphor-icons/react";
import type { GameIconId } from "../../../data/gameTypes";
import { AlienIcon } from "@phosphor-icons/react/dist/csr/Alien";
import { BackpackIcon } from "@phosphor-icons/react/dist/csr/Backpack";
import { BicycleIcon } from "@phosphor-icons/react/dist/csr/Bicycle";
import { BombIcon } from "@phosphor-icons/react/dist/csr/Bomb";
import { BookOpenIcon } from "@phosphor-icons/react/dist/csr/BookOpen";
import { CameraIcon } from "@phosphor-icons/react/dist/csr/Camera";
import { CampfireIcon } from "@phosphor-icons/react/dist/csr/Campfire";
import { ClubIcon } from "@phosphor-icons/react/dist/csr/Club";
import { CookingPotIcon } from "@phosphor-icons/react/dist/csr/CookingPot";
import { CowboyHatIcon } from "@phosphor-icons/react/dist/csr/CowboyHat";
import { CrosshairIcon } from "@phosphor-icons/react/dist/csr/Crosshair";
import { CrownIcon } from "@phosphor-icons/react/dist/csr/Crown";
import { CubeIcon } from "@phosphor-icons/react/dist/csr/Cube";
import { DetectiveIcon } from "@phosphor-icons/react/dist/csr/Detective";
import { DiamondIcon } from "@phosphor-icons/react/dist/csr/Diamond";
import { FishIcon } from "@phosphor-icons/react/dist/csr/Fish";
import { FlagIcon } from "@phosphor-icons/react/dist/csr/Flag";
import { FootballIcon } from "@phosphor-icons/react/dist/csr/Football";
import { GameControllerIcon } from "@phosphor-icons/react/dist/csr/GameController";
import { HammerIcon } from "@phosphor-icons/react/dist/csr/Hammer";
import { HouseIcon } from "@phosphor-icons/react/dist/csr/House";
import { LegoIcon } from "@phosphor-icons/react/dist/csr/Lego";
import { MapTrifoldIcon } from "@phosphor-icons/react/dist/csr/MapTrifold";
import { MusicNotesIcon } from "@phosphor-icons/react/dist/csr/MusicNotes";
import { PersonSimpleRunIcon } from "@phosphor-icons/react/dist/csr/PersonSimpleRun";
import { PlanetIcon } from "@phosphor-icons/react/dist/csr/Planet";
import { PlantIcon } from "@phosphor-icons/react/dist/csr/Plant";
import { PuzzlePieceIcon } from "@phosphor-icons/react/dist/csr/PuzzlePiece";
import { SkullIcon } from "@phosphor-icons/react/dist/csr/Skull";
import { SwordIcon } from "@phosphor-icons/react/dist/csr/Sword";
import { TShirtIcon } from "@phosphor-icons/react/dist/csr/TShirt";
import { TreasureChestIcon } from "@phosphor-icons/react/dist/csr/TreasureChest";
import { UsersIcon } from "@phosphor-icons/react/dist/csr/Users";
const icons = {
  zombie: ZombieIcon,
  vampire: VampireIcon,
  "slasher-mask": SlasherMaskIcon,
  "haunted-house": HauntedHouseIcon,
  ghost: GhostIcon,
  castle: CastleTurretIcon,
  space: PlanetIcon,
  radiation: RadioactiveIcon,
  action: BombIcon,
  adventure: FlagIcon,
  arcade: CubeIcon,
  building: LegoIcon,
  cards: ClubIcon,
  cozy: CowboyHatIcon,
  exploration: MapTrifoldIcon,
  fighting: SwordIcon,
  horror: SkullIcon,
  multiplayer: UsersIcon,
  platformer: PersonSimpleRunIcon,
  puzzle: PuzzlePieceIcon,
  racing: BicycleIcon,
  rhythm: MusicNotesIcon,
  rpg: DiamondIcon,
  shooter: CrosshairIcon,
  simulation: HouseIcon,
  sports: FootballIcon,
  strategy: CrownIcon,
  survival: CampfireIcon,
  boss: AlienIcon,
  stealth: DetectiveIcon,
  equipment: BackpackIcon,
  crafting: HammerIcon,
  fishing: FishIcon,
  cooking: CookingPotIcon,
  farming: PlantIcon,
  customization: TShirtIcon,
  photography: CameraIcon,
  "local-co-op": GameControllerIcon,
  collectibles: TreasureChestIcon,
  lore: BookOpenIcon,
} satisfies Record<GameIconId, React.ComponentType<IconProps>>;
export function GameIcon({ icon, ...props }: IconProps & { icon: GameIconId }) {
  const Icon = icons[icon];
  return <Icon size={24} {...props} weight="fill" aria-hidden />;
}
