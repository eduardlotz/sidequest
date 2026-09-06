import type { IconProps } from "@phosphor-icons/react";
import type { GameCapabilityId, GameIconId } from "../../../data/gameTypes";
import { AlienIcon } from "@phosphor-icons/react/dist/csr/Alien";
import { BackpackIcon } from "@phosphor-icons/react/dist/csr/Backpack";
import { BicycleIcon } from "@phosphor-icons/react/dist/csr/Bicycle";
import { BombIcon } from "@phosphor-icons/react/dist/csr/Bomb";
import { BookOpenIcon } from "@phosphor-icons/react/dist/csr/BookOpen";
import { TargetIcon } from "@phosphor-icons/react/dist/csr/Target";
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
import { HandFistIcon } from "@phosphor-icons/react/dist/csr/HandFist";
import { HouseIcon } from "@phosphor-icons/react/dist/csr/House";
import { LegoIcon } from "@phosphor-icons/react/dist/csr/Lego";
import { MapTrifoldIcon } from "@phosphor-icons/react/dist/csr/MapTrifold";
import { MusicNotesIcon } from "@phosphor-icons/react/dist/csr/MusicNotes";
import { PersonSimpleRunIcon } from "@phosphor-icons/react/dist/csr/PersonSimpleRun";
import { PersonSimpleSwimIcon } from "@phosphor-icons/react/dist/csr/PersonSimpleSwim";
import { PlanetIcon } from "@phosphor-icons/react/dist/csr/Planet";
import { PlantIcon } from "@phosphor-icons/react/dist/csr/Plant";
import { PuzzlePieceIcon } from "@phosphor-icons/react/dist/csr/PuzzlePiece";
import { SkullIcon } from "@phosphor-icons/react/dist/csr/Skull";
import { SteeringWheelIcon } from "@phosphor-icons/react/dist/csr/SteeringWheel";
import { SwordIcon } from "@phosphor-icons/react/dist/csr/Sword";
import { TShirtIcon } from "@phosphor-icons/react/dist/csr/TShirt";
import { TreasureChestIcon } from "@phosphor-icons/react/dist/csr/TreasureChest";
import { UsersIcon } from "@phosphor-icons/react/dist/csr/Users";
const icons = {
"action": BombIcon,
"adventure": FlagIcon,
"arcade": CubeIcon,
"building": LegoIcon,
"cards": ClubIcon,
"cozy": CowboyHatIcon,
"exploration": MapTrifoldIcon,
"fighting": SwordIcon,
"horror": SkullIcon,
"multiplayer": UsersIcon,
"platformer": PersonSimpleRunIcon,
"puzzle": PuzzlePieceIcon,
"racing": BicycleIcon,
"rhythm": MusicNotesIcon,
"rpg": DiamondIcon,
"shooter": CrosshairIcon,
"simulation": HouseIcon,
"sports": FootballIcon,
"strategy": CrownIcon,
"survival": CampfireIcon,
"boss": AlienIcon,
"stealth": DetectiveIcon,
"equipment": BackpackIcon,
"crafting": HammerIcon,
"fishing": FishIcon,
"cooking": CookingPotIcon,
"farming": PlantIcon,
"customization": TShirtIcon,
"photography": CameraIcon,
"local-co-op": GameControllerIcon,
"collectibles": TreasureChestIcon,
"lore": BookOpenIcon,
} satisfies Record<GameIconId, React.ComponentType<IconProps>>;
const activities = {
"open-world": MapTrifoldIcon,
"missions-or-levels": FlagIcon,
"rounds-or-matches": GameControllerIcon,
"combat": SwordIcon,
"boss-fights": AlienIcon,
"stealth": DetectiveIcon,
"equipment-loadouts": BackpackIcon,
"puzzles": PuzzlePieceIcon,
"building": LegoIcon,
"crafting": HammerIcon,
"fishing": FishIcon,
"cooking": CookingPotIcon,
"farming-or-care": PlantIcon,
"driving-or-racing": SteeringWheelIcon,
"advanced-traversal": PersonSimpleRunIcon,
"customization": TShirtIcon,
"photo-mode": CameraIcon,
"online-teamplay": UsersIcon,
"local-multiplayer": GameControllerIcon,
"collectibles": TreasureChestIcon,
"choices-or-lore": BookOpenIcon,
"pistols": CrosshairIcon,
"bows": TargetIcon,
"melee-weapons": SwordIcon,
"fist-fights": HandFistIcon,
"rifles": CrosshairIcon,
"space-exploration": PlanetIcon,
"swimming": PersonSimpleSwimIcon,
} satisfies Record<GameCapabilityId, React.ComponentType<IconProps>>;
export function GameIcon({icon,...props}: IconProps & {icon:GameIconId}) { const Icon=icons[icon]; return <Icon size={24} weight="duotone" aria-hidden {...props}/>; }
export function GameCapabilityIcon({capability,...props}: IconProps & {capability:GameCapabilityId}) { const Icon=activities[capability]; return <Icon size={24} weight="duotone" aria-hidden {...props}/>; }
