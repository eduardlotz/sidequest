import type { ReactNode, SVGProps } from "react";
import type { GameCapabilityId, GameIconId } from "../../../data/gameTypes";

type Props = SVGProps<SVGSVGElement> & { icon: GameIconId };

// All game and feature symbols share a 24px grid and the same optical weight.
const glyphs: Record<GameIconId, ReactNode> = {
  action: (
    <>
      <path d="m13 7-5 6h4l-1 4 5-6h-4l1-4Z" />
      <path d="M12 3V2M19 5l1-1M21 12h1M19 19l1 1M12 21v1M5 19l-1 1M3 12H2M5 5 4 4" />
    </>
  ),
  adventure: (
    <>
      <path d="M6 21V4c4-3 8 3 13 0v9c-5 3-9-3-13 0M3 21h6" />
    </>
  ),
  arcade: (
    <>
      <rect x="3" y="14" width="18" height="7" rx="2" />
      <circle cx="9" cy="5" r="2.5" />
      <path d="M9 7.5V14M6 18h6M17 17v1" />
    </>
  ),
  building: (
    <>
      <path d="M4 5h16v14H4zM4 12h16M12 5v7M8 12v7M16 12v7" />
      <path d="M8 5V3M16 5V3" />
    </>
  ),
  cards: (
    <>
      <rect x="8" y="3" width="12" height="16" rx="2" />
      <path d="m14 7 3 4-3 4-3-4 3-4ZM5 6H4a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h11" />
    </>
  ),
  cozy: (
    <>
      <path d="M4 10h12v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-6ZM16 11h2a3 3 0 0 1 0 6h-2M7 3v3M12 4v2" />
    </>
  ),
  exploration: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m15 7-1 7-5 3 1-7 5-3ZM10 10l4 4" />
    </>
  ),
  fighting: (
    <>
      <path d="m8 13 9-10h4v4L11 16M6 11l7 7M3 18l3 3 4-4-3-3-4 4Z" />
      <path d="m12 12 6-6" />
    </>
  ),
  horror: (
    <>
      <path d="M8 20v-3a7.5 7.5 0 1 1 8 0v3H8ZM12 17v3" />
      <circle cx="8.5" cy="11" r="1.5" />
      <circle cx="15.5" cy="11" r="1.5" />
    </>
  ),
  multiplayer: (
    <>
      <circle cx="9" cy="7" r="3" />
      <path d="M3 20v-2a6 6 0 0 1 12 0v2H3ZM16 4a3 3 0 0 1 0 6M18 14a5 5 0 0 1 3 4v2h-3" />
    </>
  ),
  platformer: (
    <>
      <path d="M3 19h5v-4h6v-4h7M5 11a8 8 0 0 1 12-6M14 3l4 2-2 4" />
    </>
  ),
  puzzle: (
    <>
      <path d="M9 4H4v6a2.5 2.5 0 1 1 0 5v5h6a2.5 2.5 0 1 1 5 0h5v-6a2.5 2.5 0 1 0 0-5V4h-6a2.5 2.5 0 1 0-5 0Z" />
    </>
  ),
  racing: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="2.5" />
      <path d="M4 9.5h6M14 9.5h6M10 13.5l-3 5M14 13.5l3 5" />
    </>
  ),
  rhythm: (
    <>
      <path d="M10 17V6l10-3v11M10 10l10-3" />
      <ellipse cx="7" cy="17.5" rx="3" ry="2.5" />
      <ellipse cx="17" cy="14.5" rx="3" ry="2.5" />
    </>
  ),
  rpg: (
    <>
      <path d="m12 3 8 5v8l-8 5-8-5V8l8-5ZM4 8l8 2 8-2M12 10v11M4 16l8-6 8 6" />
    </>
  ),
  shooter: (
    <>
      <path d="M9 4H4v5M15 4h5v5M20 15v5h-5M9 20H4v-5M12 8v8M8 12h8" />
      <circle cx="12" cy="12" r="5" />
    </>
  ),
  simulation: (
    <>
      <path d="m3 10 9-7 9 7M5 9v12h14V9M10 21v-7h4v7M11 8h2" />
    </>
  ),
  sports: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m12 8 4 3-1.5 4.5h-5L8 11l4-3ZM12 8V3.5M16 11l4-2M14.5 15.5l2.5 4M9.5 15.5l-2.5 4M8 11l-4-2" />
    </>
  ),
  strategy: (
    <>
      <path d="M7 3v4h3V3h4v4h3V3h3v7l-4 3v4l2 4H6l2-4v-4l-4-3V3h3ZM8 17h8" />
    </>
  ),
  survival: (
    <>
      <path d="M15 5c0 4-2 4-2 7-2-1-3-3-3-5-3 3-5 5-5 8a7 7 0 0 0 14 0c0-4-3-5-4-10Z" />
      <path d="M10 18a3 3 0 0 1 2-4 3 3 0 0 1 2 4" />
    </>
  ),
  boss: (
    <>
      <path d="M7 7 3 3v8a9 9 0 0 0 18 0V3l-4 4a10 10 0 0 0-10 0ZM7 11l2 1M17 11l-2 1M9 17v-2h6v2" />
    </>
  ),
  stealth: (
    <>
      <path d="M3 8c3 0 5 2 9 2s6-2 9-2l-1 7a4 4 0 0 1-7 1l-1-1-1 1a4 4 0 0 1-7-1L3 8ZM6 12l3 1M18 12l-3 1" />
    </>
  ),
  equipment: (
    <>
      <rect x="5" y="6" width="14" height="15" rx="4" />
      <path d="M9 6V5a3 3 0 0 1 6 0v1M5 11h14M9 11v2M15 11v2M9 17h6" />
    </>
  ),
  crafting: (
    <>
      <path d="m4 18 10-10 3 3L7 21l-3-3ZM11 5l4-3 7 7-3 4-8-8ZM12 10l3 3" />
    </>
  ),
  fishing: (
    <>
      <path d="M6 12c3-5 9-7 15 0-6 7-12 5-15 0ZM6 12l-3-4v8l3-4ZM13 7l-2-3M13 17l-2 3" />
      <path d="M17 11v.1" strokeWidth="2.5" />
    </>
  ),
  cooking: (
    <>
      <path d="M5 11h14v5a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4v-5ZM2 13h3M19 13h3M4 8h16M10 8V6h4v2M8 3V2M16 3V2" />
    </>
  ),
  farming: (
    <>
      <path d="M12 21v-8M12 15c-6 0-9-3-9-8 6 0 9 3 9 8ZM12 12c0-6 3-9 9-9 0 6-3 9-9 9ZM8 21h8" />
    </>
  ),
  customization: (
    <>
      <path d="m8 4-5 3 3 5 2-1v10h8V11l2 1 3-5-5-3a4 4 0 0 1-8 0Z" />
      <path d="M11 15h2" />
    </>
  ),
  photography: (
    <>
      <path d="m8 7 2-3h4l2 3h3a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h3Z" />
      <circle cx="12" cy="13" r="3.5" />
    </>
  ),
  "local-co-op": (
    <>
      <path d="M7 7h10a4 4 0 0 1 4 3l1 7a2.5 2.5 0 0 1-4 2l-3-3H9l-3 3a2.5 2.5 0 0 1-4-2l1-7a4 4 0 0 1 4-3ZM12 3v4M5 12h4M7 10v4M16 11v.1M18 13v.1" />
    </>
  ),
  collectibles: (
    <>
      <path d="m12 3 7 4 2 6-9 8-9-8 2-6 7-4ZM5 7h14M3 13h18M9 7l-2 6 5 8 5-8-2-6" />
    </>
  ),
  lore: (
    <>
      <path d="M12 6c-3-2-6-2-9-2v15c3 0 6 0 9 2 3-2 6-2 9-2V4c-3 0-6 0-9 2ZM12 6v15M7 9h1M7 13h1M16 9h1M16 13h1" />
    </>
  ),
};

const capabilityIcons = {
  "open-world": "exploration",
  "missions-or-levels": "adventure",
  "rounds-or-matches": "arcade",
  combat: "fighting",
  "boss-fights": "boss",
  stealth: "stealth",
  "equipment-loadouts": "equipment",
  puzzles: "puzzle",
  building: "building",
  crafting: "crafting",
  fishing: "fishing",
  cooking: "cooking",
  "farming-or-care": "farming",
  "driving-or-racing": "racing",
  "advanced-traversal": "platformer",
  customization: "customization",
  "photo-mode": "photography",
  "online-teamplay": "multiplayer",
  "local-multiplayer": "local-co-op",
  collectibles: "collectibles",
  "choices-or-lore": "lore",
} satisfies Record<GameCapabilityId, GameIconId>;

export function GameIcon({ icon, ...props }: Props) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {glyphs[icon]}
    </svg>
  );
}

export function GameCapabilityIcon({
  capability,
  ...props
}: SVGProps<SVGSVGElement> & { capability: GameCapabilityId }) {
  return <GameIcon icon={capabilityIcons[capability]} {...props} />;
}
