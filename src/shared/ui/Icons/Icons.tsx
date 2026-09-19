import { type ImgHTMLAttributes, type SVGProps } from "react";
import coinPng from "../../../assets/coin.png";

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

export function ContrastIcon(props: IconProps) {
  return (
    <svg
      {...defaults}
      height="24"
      width="24"
      viewBox="0 0 16 16"
      strokeWidth={1.6}
    >
      <path
        d="M14.6468 8C14.6468 9.96 13.7935 11.7333 12.4335 12.94C11.2602 14.0067 9.70685 14.6467 8.00018 14.6467C4.33352 14.6467 1.35352 11.6667 1.35352 8C1.35352 4.33333 4.33352 1.35333 8.00018 1.35333C9.70685 1.35333 11.2602 1.99333 12.4335 3.06C13.7935 4.26667 14.6468 6.04 14.6468 8Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.97986 10.9267C7.96652 12.0267 7.14652 12.2933 6.37986 11.9867C4.79986 11.3533 3.68652 9.80666 3.68652 8C3.68652 6.19333 4.79986 4.64666 6.37986 4.00666C7.14652 3.7 7.96652 3.97333 7.97986 5.06666V10.9267Z"
        fill="currentColor"
        stroke="none"
      />
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

type CoinIconProps = Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  "alt" | "src"
>;

export function CoinIcon({ style, ...props }: CoinIconProps) {
  return (
    <img
      src={coinPng}
      alt=""
      data-coin-icon
      draggable={false}
      width={22}
      height={22}
      aria-hidden="true"
      {...props}
      style={{
        display: "block",
        objectFit: "contain",
        ...style,
      }}
    />
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

export { GameIcon as GameGenreIcon } from "./GameIcon";
