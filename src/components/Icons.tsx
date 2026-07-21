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
