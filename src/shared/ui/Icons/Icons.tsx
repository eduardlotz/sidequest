import { useId, type SVGProps } from "react";
import type { GameIconId } from "../../../data/gameTypes";

type IconProps = SVGProps<SVGSVGElement>;

const defaults = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.9,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function TimerIcon(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <circle cx="12" cy="13" r="8" />
      <path d="M12 9v4l2.6 1.7M9 2h6M12 5V2" />
    </svg>
  );
}

export function NewCardsIcon(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="M16 3h5v5M4 20 21 3M21 16v5h-5M15 15l6 6M4 4l5 5" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

export function InfoIcon(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5" />
      <path d="M12 8h.01" strokeWidth="2.8" />
    </svg>
  );
}

export function CoinIcon({ style, ...props }: IconProps) {
  const rawId = useId();
  const id = rawId.replace(/:/g, "");
  const coinGradientId = `coin-gradient-${id}`;
  const coinHighlightId = `coin-highlight-${id}`;
  const coinShadowId = `coin-shadow-${id}`;

  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden="true"
      {...props}
      style={{
        filter: "drop-shadow(0 2px 3px rgb(33 33 33 / 0.18))",
        overflow: "visible",
        ...style,
      }}
    >
      <defs>
        <radialGradient
          id={coinGradientId}
          cx="0"
          cy="0"
          r="1"
          gradientTransform="translate(87.5 4.16) rotate(70.71) scale(176.58 141.71)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E8FF64" />
          <stop offset="1" stopColor="#C5D85C" />
        </radialGradient>
        <linearGradient
          id={coinHighlightId}
          x1="83.33"
          y1="25"
          x2="145.83"
          y2="170.83"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="0.18" stopColor="white" stopOpacity="0" />
          <stop offset="0.49" stopColor="white" />
          <stop offset="0.64" stopColor="white" stopOpacity="0" />
          <stop offset="1" stopColor="white" stopOpacity="0.45" />
        </linearGradient>
        <filter
          id={coinShadowId}
          x="10"
          y="8"
          width="180"
          height="188"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feDropShadow dx="0" dy="5" stdDeviation="3.5" floodColor="#767B24" floodOpacity="0.28" />
          <feDropShadow dx="0" dy="-2" stdDeviation="1.5" floodColor="white" floodOpacity="0.55" />
        </filter>
      </defs>
      <g filter={`url(#${coinShadowId})`}>
        <circle cx="100" cy="100" r="82.5" fill={`url(#${coinGradientId})`} />
        <circle
          cx="100"
          cy="100"
          r="77.5"
          stroke={`url(#${coinGradientId})`}
          strokeWidth="10"
        />
        <circle
          cx="100"
          cy="100"
          r="82.5"
          fill={`url(#${coinHighlightId})`}
          fillOpacity="0.5"
        />
        <path
          d="M120.131 77c13.275 0 26.993 8.89 26.993 23.125s-13.718 23.125-26.993 23.125-26.992-8.89-26.992-23.125S106.857 77 120.131 77Zm0 7.5c-10.765 0-19.492 6.996-19.492 15.625 0 8.562 8.591 15.516 19.24 15.624h.252c1.261 0 2.494-.095 3.689-.279-3.975-2.334-6.807-8.38-6.807-15.47 0-6.895 2.677-12.801 6.48-15.269a24.913 24.913 0 0 0-3.362-.231ZM79.742 77c13.275 0 26.992 8.89 26.992 23.125S93.017 123.25 79.742 123.25 52.75 114.36 52.75 100.125 66.468 77 79.742 77Zm0 7.5c-10.765 0-19.492 6.996-19.492 15.625 0 8.562 8.591 15.516 19.24 15.624h.252c1.261 0 2.494-.095 3.689-.279-3.976-2.334-6.808-8.379-6.808-15.47 0-6.895 2.678-12.801 6.48-15.269a24.91 24.91 0 0 0-3.361-.231Z"
          fill="#D4E95D"
        />
      </g>
    </svg>
  );
}

export function ChevronLeftIcon(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="m14.5 5-7 7 7 7" />
    </svg>
  );
}

export function SettingsIcon(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1a1.7 1.7 0 0 0 1.9.3A1.7 1.7 0 0 0 10 3v-.2h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z" />
    </svg>
  );
}

export function SoundOnIcon(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="M11 5 7 9H4v6h3l4 4V5Z" />
      <path d="M15 9.5a4 4 0 0 1 0 5M17.8 6.8a7.5 7.5 0 0 1 0 10.4" />
    </svg>
  );
}

export function SoundOffIcon(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="M11 5 7 9H4v6h3l4 4V5Z" />
      <path d="m15.5 10 4 4M19.5 10l-4 4" />
    </svg>
  );
}

export function GameGenreIcon({
  icon,
  ...props
}: IconProps & { icon: GameIconId }) {
  return (
    <svg {...defaults} {...props}>
      {gameGenreIconPaths(icon)}
    </svg>
  );
}

function gameGenreIconPaths(icon: GameIconId) {
  switch (icon) {
    case "action":
      return <path d="m13 2-8 11h6l-1 9 9-12h-6V2Z" />;
    case "adventure":
      return (
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="m15.7 8.3-2.1 5.3-5.3 2.1 2.1-5.3 5.3-2.1Z" />
        </>
      );
    case "arcade":
      return (
        <>
          <path d="M7 5h10l2 16H5L7 5Z" />
          <path d="M9 2h6M12 5V2M8 15h3M9.5 13.5v3M15.5 14.5h.01M17 17h.01" />
        </>
      );
    case "building":
      return (
        <>
          <path d="M4 21V8l8-5 8 5v13" />
          <path d="M8 21v-6h8v6M8 10h.01M12 10h.01M16 10h.01" />
        </>
      );
    case "cards":
      return (
        <>
          <rect x="7" y="3" width="12" height="17" rx="2" />
          <path d="m11 9 2-2 2 2-2 2-2-2ZM5 7 3.4 8.2a2 2 0 0 0-.4 2.7l5.4 7.2" />
        </>
      );
    case "cozy":
      return (
        <>
          <path d="M5 11a7 7 0 0 1 14 0v7H5v-7Z" />
          <path d="M8 18v3M16 18v3M9 11h.01M15 11h.01M10 14h4" />
        </>
      );
    case "exploration":
      return (
        <>
          <path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3V6Z" />
          <path d="M9 3v15M15 6v15" />
        </>
      );
    case "fighting":
      return (
        <>
          <path d="m5 19 5-5M14 10l5-5M4 4l16 16M14 4l6 6M4 14l6 6" />
        </>
      );
    case "horror":
      return (
        <>
          <path d="M5 20V10a7 7 0 0 1 14 0v10l-3-2-2 2-2-2-2 2-2-2-3 2Z" />
          <path d="M9 11h.01M15 11h.01M10 15h4" />
        </>
      );
    case "multiplayer":
      return (
        <>
          <circle cx="8" cy="9" r="3" />
          <circle cx="16" cy="9" r="3" />
          <path d="M2.5 20a5.5 5.5 0 0 1 11 0M10.5 20a5.5 5.5 0 0 1 11 0" />
        </>
      );
    case "platformer":
      return (
        <>
          <path d="M3 20h7M14 15h7M3 10h7M14 5h7" />
          <circle cx="8" cy="6" r="2" />
          <path d="m9.5 7.5 3 3" />
        </>
      );
    case "puzzle":
      return (
        <path d="M4 4h6a2 2 0 1 0 4 0h6v6a2 2 0 1 1 0 4v6h-6a2 2 0 1 0-4 0H4v-6a2 2 0 1 0 0-4V4Z" />
      );
    case "racing":
      return (
        <>
          <path d="M3 16h18l-2-6-4-3H9l-4 3-2 6Z" />
          <path d="M6 16v3M18 16v3M7 12h10M2 8h3M19 8h3" />
        </>
      );
    case "rhythm":
      return (
        <>
          <path d="M9 18V5l10-2v13" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="16" cy="16" r="3" />
        </>
      );
    case "rpg":
      return (
        <>
          <path d="m12 3 7 3v5c0 4.7-2.8 8.2-7 10-4.2-1.8-7-5.3-7-10V6l7-3Z" />
          <path d="M9 12h6M12 9v6" />
        </>
      );
    case "shooter":
      return (
        <>
          <circle cx="12" cy="12" r="7" />
          <circle cx="12" cy="12" r="2" />
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
        </>
      );
    case "simulation":
      return (
        <>
          <rect x="3" y="4" width="18" height="13" rx="2" />
          <path d="M8 21h8M12 17v4M7 13l3-3 3 2 4-5" />
        </>
      );
    case "sports":
      return (
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="m12 7 3 2v4l-3 2-3-2V9l3-2ZM5 8l4 1M15 9l4-1M9 13l-2 5M15 13l2 5" />
        </>
      );
    case "strategy":
      return (
        <>
          <path d="M4 20h16M7 20v-5h10v5M9 15V9h6v6M11 9V4h2v5" />
          <path d="M4 4h4v4H4zM16 4h4v4h-4z" />
        </>
      );
    case "survival":
      return (
        <>
          <path d="M12 22c4-2.4 6-5.5 6-9a6 6 0 1 0-12 0c0 3.5 2 6.6 6 9Z" />
          <path d="M12 17c-1.8-1.3-2.7-2.8-2.7-4.4A2.7 2.7 0 0 1 12 10a2.7 2.7 0 0 1 2.7 2.6c0 1.6-.9 3.1-2.7 4.4Z" />
        </>
      );
  }
}
