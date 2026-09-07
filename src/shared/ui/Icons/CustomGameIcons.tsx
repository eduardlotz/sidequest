import type { IconProps } from "@phosphor-icons/react";
import type { ReactNode } from "react";
function FilledSymbol({
  children,
  size = 24,
  color = "currentColor",
  mirrored,
  style,
  weight: _weight,
  ...props
}: IconProps & { children: ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 256 256"
      fill={color}
      aria-hidden="true"
      {...props}
      style={{ ...style, ...(mirrored ? { transform: "scaleX(-1)" } : {}) }}
    >
      {children}
    </svg>
  );
}
export function ZombieIcon({ children, ...props }: IconProps) {
  return (
    <FilledSymbol {...props}>
      {children}
      <path
        fillRule="evenodd"
        d="M72 35C85 20 109 16 132 19c26-3 49 13 54 35l14 8c13 6 19 19 16 33l-7 31 10 18c7 13 1 28-13 32l-13 4-6 30c-2 13-13 23-26 23H91c-17 0-30-13-31-30l-2-19-13-8c-13-8-18-22-12-36l10-23-5-26c-4-25 10-47 34-56Zm20 58a15 15 0 1 0 0 30 15 15 0 0 0 0-30Zm61-2-9 9-9-9-8 8 9 9-9 9 8 8 9-9 9 9 8-8-9-9 9-9-8-8Zm-48 61v13H88v-13H78v13H67v11h11v13h10v-13h17v13h10v-13h17v13h10v-13h11v-11h-11v-13h-10v13h-17v-13h-10ZM89 48v10h23v-10H89Zm31 5v10h27V53h-27Z"
      />
    </FilledSymbol>
  );
}
export function VampireIcon({ children, ...props }: IconProps) {
  return (
    <FilledSymbol {...props}>
      {children}
      <path
        fillRule="evenodd"
        d="M55 89C49 44 82 16 128 16s79 28 73 73l26-17v48c0 18-11 32-28 36-9 31-37 62-71 80-34-18-62-49-71-80-17-4-28-18-28-36V72l26 17Zm17 6 17 13c11 8 22 12 31 10l-6-14-42-9Zm112 0-42 9-6 14c9 2 20-2 31-10l17-13ZM84 150c6 23 24 37 44 37s38-14 44-37H84Zm15 4h15l-7 21-8-21Zm43 0h15l-8 21-7-21ZM78 61l50 25 50-25c-24 5-38 4-50-10-12 14-26 15-50 10Z"
      />
    </FilledSymbol>
  );
}
export function SlasherMaskIcon({ children, ...props }: IconProps) {
  return (
    <FilledSymbol {...props}>
      {children}
      <path
        fillRule="evenodd"
        d="M128 16c-52 0-85 36-85 89 0 63 38 125 85 135 47-10 85-72 85-135 0-53-33-89-85-89ZM74 93c-7 5-9 17-3 24 9 9 32 2 40-11-8-13-25-20-37-13Zm108 0c-12-7-29 0-37 13 8 13 31 20 40 11 6-7 4-19-3-24Zm-60 27-10 28h32l-10-28h-12Zm-35 30a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm82 0a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm-61 22a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm40 0a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm-20 18a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm-6-143v20h12V47h-12Z"
      />
    </FilledSymbol>
  );
}
export function HauntedHouseIcon({ children, ...props }: IconProps) {
  return (
    <FilledSymbol {...props}>
      {children}
      <path
        fillRule="evenodd"
        d="m128 16 48 52h24V42h16v54l20 23v13h-20v92H40v-92H20v-13l48-51 28 24V53l32-37Zm-8 46v25h16V62h-16ZM65 144v28h25v-28H65Zm101 0v28h25v-28h-25Zm-38 22c-12 0-20 9-20 20v38h40v-38c0-11-8-20-20-20Zm-7-58v26h14v-26h-14Z"
      />
    </FilledSymbol>
  );
}
