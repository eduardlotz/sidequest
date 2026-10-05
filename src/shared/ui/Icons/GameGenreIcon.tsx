import type { IconProps } from "@phosphor-icons/react";
import type { ComponentType } from "react";
import type { GameGenreId } from "../../../data/gameGenres";
import { GhostIcon } from "@phosphor-icons/react/dist/csr/Ghost";
import { GlobeIcon } from "@phosphor-icons/react/dist/csr/Globe";
import { BuildingsIcon } from "@phosphor-icons/react/dist/csr/Buildings";
import { CardsIcon } from "@phosphor-icons/react/dist/csr/Cards";
import { CompassIcon } from "@phosphor-icons/react/dist/csr/Compass";
import { PersonSimpleRunIcon } from "@phosphor-icons/react/dist/csr/PersonSimpleRun";
import { CrosshairIcon } from "@phosphor-icons/react/dist/csr/Crosshair";
import { FlagIcon } from "@phosphor-icons/react/dist/csr/Flag";
import { SwordIcon } from "@phosphor-icons/react/dist/csr/Sword";
import { ArrowClockwiseIcon } from "@phosphor-icons/react/dist/csr/ArrowClockwise";
import { StrategyIcon } from "@phosphor-icons/react/dist/csr/Strategy";
import { GearSixIcon } from "@phosphor-icons/react/dist/csr/GearSix";
import { PuzzlePieceIcon } from "@phosphor-icons/react/dist/csr/PuzzlePiece";
import { SteeringWheelIcon } from "@phosphor-icons/react/dist/csr/SteeringWheel";
import { SoccerBallIcon } from "@phosphor-icons/react/dist/csr/SoccerBall";
import { MusicNotesIcon } from "@phosphor-icons/react/dist/csr/MusicNotes";
import { TentIcon } from "@phosphor-icons/react/dist/csr/Tent";
import { CubeIcon } from "@phosphor-icons/react/dist/csr/Cube";
import { BookOpenIcon } from "@phosphor-icons/react/dist/csr/BookOpen";
import { DetectiveIcon } from "@phosphor-icons/react/dist/csr/Detective";
import { LeafIcon } from "@phosphor-icons/react/dist/csr/Leaf";

const genreIcons = {
  horror: GhostIcon, mmo: GlobeIcon, management: BuildingsIcon, card: CardsIcon,
  adventure: CompassIcon, platformer: PersonSimpleRunIcon, shooter: CrosshairIcon,
  moba: FlagIcon, rpg: SwordIcon, roguelike: ArrowClockwiseIcon, strategy: StrategyIcon,
  simulation: GearSixIcon, puzzle: PuzzlePieceIcon, racing: SteeringWheelIcon,
  sports: SoccerBallIcon, rhythm: MusicNotesIcon, survival: TentIcon, sandbox: CubeIcon,
  narrative: BookOpenIcon, fighting: SwordIcon, stealth: DetectiveIcon, cozy: LeafIcon,
} satisfies Record<GameGenreId, ComponentType<IconProps>>;

export function GameGenreIcon({ genre, ...props }: IconProps & { genre: GameGenreId }) {
  const Icon = genreIcons[genre];
  return <Icon {...props} size={12} weight="fill" aria-hidden />;
}
