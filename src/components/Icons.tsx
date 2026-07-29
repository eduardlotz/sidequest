import type { ReactNode, SVGProps } from "react";

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

export function HistoryIcon(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="M3.4 12a8.6 8.6 0 1 0 2.7-6.3L3.5 8.2" />
      <path d="M3.5 3.8v4.4h4.4M12 8.5V13l3 1.8" />
    </svg>
  );
}

export function ShuffleIcon(props: IconProps) {
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

export function TargetIcon(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
    </svg>
  );
}

export function SparkIcon(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="M12 3c.7 4.4 3.1 6.8 7.5 7.5-4.4.7-6.8 3.1-7.5 7.5-.7-4.4-3.1-6.8-7.5-7.5C8.9 9.8 11.3 7.4 12 3Z" />
      <path d="M19 3v4M17 5h4" />
    </svg>
  );
}

export function ModifierIcon({
  modifierId,
  ...props
}: IconProps & { modifierId: string }) {
  const paths: Record<string, ReactNode> = {
    minimalist: <path d="M5 12h14M8 8h8M10 16h4" />,
    pacifist: <path d="M12 3v18M5 7l7-4 7 4-7 5-7-5Zm0 0v8l7 6 7-6V7" />,
    explorer: <path d="m14.7 9.3-2 5.4-5.4 2 2-5.4 5.4-2Z M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18Z" />,
    survivor: <path d="M12 21s7-4.4 7-11a4 4 0 0 0-7-2.7A4 4 0 0 0 5 10c0 6.6 7 11 7 11Z" />,
    fashion: <path d="m8 5 4-2 4 2 4 3-3 3v9H7v-9L4 8l4-3Z M10 4.2c.4 1.2 1 1.8 2 1.8s1.6-.6 2-1.8" />,
    "new-toys": <path d="m14 4 6 6-3 3-2-2-6.5 6.5-3-3L12 8l-2-2 4-2Z M5 19l2-2" />,
    hardcore: <path d="M12 3 4 7v5c0 4.7 3.2 7.5 8 9 4.8-1.5 8-4.3 8-9V7l-8-4Z M9 12l2 2 4-5" />,
    roleplay: <path d="M5 5h14v10H9l-4 4V5Z M9 9h6M9 12h4" />,
    "minimal-hud": <path d="M4 8V4h4M16 4h4v4M20 16v4h-4M8 20H4v-4M8 12h8" />,
    "night-shift": <path d="M19 15.5A8 8 0 0 1 8.5 5 8 8 0 1 0 19 15.5Z M17 4v3M15.5 5.5h3" />,
  };

  return <svg {...defaults} {...props}>{paths[modifierId]}</svg>;
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
