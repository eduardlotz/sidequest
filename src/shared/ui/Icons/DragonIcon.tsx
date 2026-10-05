import type { IconProps } from "@phosphor-icons/react";

// The installed icon set has no dragon. Keep its filled silhouette and 256px grid.
export function DragonIcon({ size = 24, weight: _weight, mirrored, color = "currentColor", ...props }: IconProps) {
  return <svg {...props} width={size} height={size} viewBox="0 0 256 256" fill={color} aria-hidden>
    <g transform={mirrored ? "translate(256 0) scale(-1 1)" : undefined}>
      <path fillRule="evenodd" d="M48 224c0-53 13-81 44-108L64 96l39-10-9-42 39 26 27-42 7 53c16 5 26 17 31 34l36 20c7 4 8 13 2 19l-25 22h-30l-7 19-13-19h-13c-21 0-34 18-34 48H48Zm119-101a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
      <path d="m51 124-22 6 17 24-23 16 19 12c2-22 5-42 9-58Z" />
    </g>
  </svg>;
}
