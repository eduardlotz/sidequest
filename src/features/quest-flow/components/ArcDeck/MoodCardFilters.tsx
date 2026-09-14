import styles from "./ArcDeck.module.css";

type MoodCardFiltersProps = {
  textFilterId: string;
};

export function MoodCardFilters({
  textFilterId,
}: MoodCardFiltersProps) {
  return (
    <svg
      className={styles.moodCardFilterDefinitions}
      aria-hidden="true"
      focusable="false"
      width="0"
      height="0"
    >
      <defs>
        <InnerBevelFilter
          id={textFilterId}
          blur={0.65}
          offset={0.7}
          highlightOpacity={0.45}
          shadowOpacity={0.3}
          outerShadow
        />
      </defs>
    </svg>
  );
}

type InnerBevelFilterProps = {
  id: string;
  blur: number;
  offset: number;
  highlightOpacity: number;
  shadowOpacity: number;
  outerShadow?: boolean;
};

function InnerBevelFilter({
  id,
  blur,
  offset,
  highlightOpacity,
  shadowOpacity,
  outerShadow = false,
}: InnerBevelFilterProps) {
  return (
    <filter
      id={id}
      x="-25%"
      y="-50%"
      width="150%"
      height="200%"
      colorInterpolationFilters="sRGB"
    >
      {outerShadow && (
        <feDropShadow
          in="SourceGraphic"
          dx="0"
          dy="2"
          stdDeviation="2"
          floodColor="#030906"
          floodOpacity="0.38"
          result="outerDepth"
        />
      )}
      <feGaussianBlur in="SourceAlpha" stdDeviation={blur} result="softAlpha" />
      <feOffset in="softAlpha" dx={offset} dy={offset} result="lowerAlpha" />
      <feComposite
        in="SourceAlpha"
        in2="lowerAlpha"
        operator="out"
        result="lightEdge"
      />
      <feFlood floodColor="#ffffff" floodOpacity={highlightOpacity} />
      <feComposite in2="lightEdge" operator="in" result="innerLight" />
      <feOffset in="softAlpha" dx={-offset} dy={-offset} result="upperAlpha" />
      <feComposite
        in="SourceAlpha"
        in2="upperAlpha"
        operator="out"
        result="darkEdge"
      />
      <feFlood floodColor="#000000" floodOpacity={shadowOpacity} />
      <feComposite in2="darkEdge" operator="in" result="innerDark" />
      <feMerge>
        <feMergeNode in={outerShadow ? "outerDepth" : "SourceGraphic"} />
        <feMergeNode in="innerLight" />
        <feMergeNode in="innerDark" />
      </feMerge>
    </filter>
  );
}
