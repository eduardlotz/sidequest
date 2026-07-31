import type { MoodId } from "../data/moods";

type MoodIllustrationProps = {
  moodId: MoodId;
  className?: string;
};

export function MoodIllustration({
  moodId,
  className,
}: MoodIllustrationProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      focusable="false"
      viewBox="0 0 160 160"
      xmlns="http://www.w3.org/2000/svg"
    >
      {illustrationForMood(moodId)}
    </svg>
  );
}

function illustrationForMood(moodId: MoodId) {
  switch (moodId) {
    case "relax":
      return (
        <g opacity="0.7" transform="scale(.8)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M56.3313 75.0537C-4.26035 22.9793 85.3651 -27.8393 99.8817 49.9581C115.03 -27.8393 204.024 23.6068 143.432 75.0537C219.171 48.7032 218.54 150.969 143.432 124.618C204.024 176.693 115.03 227.512 99.8817 149.714C85.3651 228.139 -3.6292 176.693 56.3313 124.618C-18.7771 151.597 -18.7771 48.7032 56.3313 75.0537ZM88.5209 100.15C88.5209 93.8756 93.5702 88.2293 99.8817 88.2293C106.193 88.2293 111.874 93.8756 111.874 100.15C111.874 106.424 106.193 111.443 99.8817 111.443C93.5702 111.443 88.5209 106.424 88.5209 100.15Z"
            fill="#EB5757"
          />
          <circle cx="100" cy="99.9746" r="30" fill="#FBFB29" />
          <circle
            cx="100"
            cy="99.9746"
            r="28"
            fill="none"
            stroke="rgb(255 255 255 / 0.28)"
            strokeWidth="4"
          />
        </g>
      );

    case "explore":
      return (
        <g strokeLinecap="round" strokeLinejoin="round">
          <circle
            cx="80"
            cy="80"
            r="50"
            fill="#173f46"
            stroke="#63c5b5"
            strokeWidth="7"
          />
          <path
            d="M91 68 116 43 100 84 69 99 84 69Z"
            fill="#ff735d"
            stroke="#ffb13c"
            strokeWidth="5"
          />
          <path d="m69 99-25 19 18-37 22-12Z" fill="#f2eadf" />
          <circle cx="80" cy="80" r="7" fill="#f5ce4a" />
          <path
            d="M80 17v12M80 131v12M17 80h12M131 80h12"
            stroke="#f5ce4a"
            strokeWidth="7"
          />
        </g>
      );

    case "progress":
      return (
        <g strokeLinecap="round" strokeLinejoin="round">
          <path
            d="M24 126h34V96h34V66h34"
            fill="none"
            stroke="#6759c9"
            strokeWidth="18"
          />
          <path
            d="m75 82 43-43M94 39h24v24"
            fill="none"
            stroke="#67d1c5"
            strokeWidth="10"
          />
          <circle cx="31" cy="119" r="10" fill="#ffb43c" />
          <circle cx="65" cy="89" r="10" fill="#ff765f" />
          <circle cx="99" cy="59" r="10" fill="#f5cf45" />
        </g>
      );

    case "create":
      return (
        <g strokeLinejoin="round">
          <path
            d="M80 25c6 29 16 39 45 45-29 6-39 16-45 45-6-29-16-39-45-45 29-6 39-16 45-45Z"
            fill="#ff745d"
            stroke="#ffb33e"
            strokeWidth="6"
          />
          <path
            d="M126 92c3 15 8 20 23 23-15 3-20 8-23 23-3-15-8-20-23-23 15-3 20-8 23-23Z"
            fill="#67cfc4"
          />
          <path
            d="M33 18c2 11 6 15 17 17-11 2-15 6-17 17-2-11-6-15-17-17 11-2 15-6 17-17Z"
            fill="#f5d047"
          />
        </g>
      );

    case "challenge":
      return (
        <g strokeLinecap="round" strokeLinejoin="round">
          <path
            d="m91 15-50 76h34l-8 54 52-81H84Z"
            fill="#f4d23f"
            stroke="#ff764f"
            strokeWidth="8"
          />
          <path
            d="M27 43 16 32M134 126l11 11M132 33l12-12"
            stroke="#8d61d4"
            strokeWidth="8"
          />
        </g>
      );

    case "connect":
      return (
        <g fill="none" strokeWidth="14">
          <circle cx="58" cy="80" r="34" stroke="#ff735d" />
          <circle cx="102" cy="80" r="34" stroke="#62c9bb" />
          <path
            d="M70 48a34 34 0 0 1 0 64M90 48a34 34 0 0 0 0 64"
            stroke="#f4cf3f"
            strokeLinecap="round"
          />
        </g>
      );
  }
}

export type { MoodIllustrationProps };
