import { RadioactiveIcon } from "@phosphor-icons/react/dist/csr/Radioactive";
import { CastleTurretIcon } from "@phosphor-icons/react/dist/csr/CastleTurret";
import { GhostIcon } from "@phosphor-icons/react/dist/csr/Ghost";
import type { IconProps } from "@phosphor-icons/react";
import type { GameIconId } from "../../../data/gameTypes";
import { BackpackIcon } from "@phosphor-icons/react/dist/csr/Backpack";
import { BiohazardIcon } from "@phosphor-icons/react/dist/csr/Biohazard";
import { BookOpenIcon } from "@phosphor-icons/react/dist/csr/BookOpen";
import { BoxingGloveIcon } from "@phosphor-icons/react/dist/csr/BoxingGlove";
import { CameraIcon } from "@phosphor-icons/react/dist/csr/Camera";
import { CampfireIcon } from "@phosphor-icons/react/dist/csr/Campfire";
import { CardsIcon } from "@phosphor-icons/react/dist/csr/Cards";
import { CoffeeIcon } from "@phosphor-icons/react/dist/csr/Coffee";
import { CookingPotIcon } from "@phosphor-icons/react/dist/csr/CookingPot";
import { CrosshairIcon } from "@phosphor-icons/react/dist/csr/Crosshair";
import { CraneTowerIcon } from "@phosphor-icons/react/dist/csr/CraneTower";
import { CrownIcon } from "@phosphor-icons/react/dist/csr/Crown";
import { DiceFiveIcon } from "@phosphor-icons/react/dist/csr/DiceFive";
import { DropIcon } from "@phosphor-icons/react/dist/csr/Drop";
import { EyeSlashIcon } from "@phosphor-icons/react/dist/csr/EyeSlash";
import { FishIcon } from "@phosphor-icons/react/dist/csr/Fish";
import { FlagIcon } from "@phosphor-icons/react/dist/csr/Flag";
import { FlagCheckeredIcon } from "@phosphor-icons/react/dist/csr/FlagCheckered";
import { GameControllerIcon } from "@phosphor-icons/react/dist/csr/GameController";
import { GearSixIcon } from "@phosphor-icons/react/dist/csr/GearSix";
import { HammerIcon } from "@phosphor-icons/react/dist/csr/Hammer";
import { HouseLineIcon } from "@phosphor-icons/react/dist/csr/HouseLine";
import { JoystickIcon } from "@phosphor-icons/react/dist/csr/Joystick";
import { LightningIcon } from "@phosphor-icons/react/dist/csr/Lightning";
import { MapTrifoldIcon } from "@phosphor-icons/react/dist/csr/MapTrifold";
import { MaskSadIcon } from "@phosphor-icons/react/dist/csr/MaskSad";
import { MusicNotesIcon } from "@phosphor-icons/react/dist/csr/MusicNotes";
import { PersonSimpleRunIcon } from "@phosphor-icons/react/dist/csr/PersonSimpleRun";
import { PlanetIcon } from "@phosphor-icons/react/dist/csr/Planet";
import { PlantIcon } from "@phosphor-icons/react/dist/csr/Plant";
import { PuzzlePieceIcon } from "@phosphor-icons/react/dist/csr/PuzzlePiece";
import { SkullIcon } from "@phosphor-icons/react/dist/csr/Skull";
import { StrategyIcon } from "@phosphor-icons/react/dist/csr/Strategy";
import { TShirtIcon } from "@phosphor-icons/react/dist/csr/TShirt";
import { TreasureChestIcon } from "@phosphor-icons/react/dist/csr/TreasureChest";
import { TrophyIcon } from "@phosphor-icons/react/dist/csr/Trophy";
import { UsersIcon } from "@phosphor-icons/react/dist/csr/Users";

const icons = {
  zombie: BiohazardIcon,
  vampire: DropIcon,
  "slasher-mask": MaskSadIcon,
  "haunted-house": HouseLineIcon,
  ghost: GhostIcon,
  castle: CastleTurretIcon,
  space: PlanetIcon,
  radiation: RadioactiveIcon,
  action: LightningIcon,
  adventure: FlagIcon,
  arcade: JoystickIcon,
  building: CraneTowerIcon,
  cards: CardsIcon,
  cozy: CoffeeIcon,
  exploration: MapTrifoldIcon,
  fighting: BoxingGloveIcon,
  horror: SkullIcon,
  multiplayer: UsersIcon,
  platformer: PersonSimpleRunIcon,
  puzzle: PuzzlePieceIcon,
  racing: FlagCheckeredIcon,
  rhythm: MusicNotesIcon,
  rpg: DiceFiveIcon,
  shooter: CrosshairIcon,
  simulation: GearSixIcon,
  sports: TrophyIcon,
  strategy: StrategyIcon,
  survival: CampfireIcon,
  boss: CrownIcon,
  stealth: EyeSlashIcon,
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
