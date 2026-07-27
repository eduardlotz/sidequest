import type { SVGProps } from "react";

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
