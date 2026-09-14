import type { MoodId } from "../../../../data/moods";

type MoodIllustrationProps = {
  moodId: MoodId;
  className?: string;
};

const illustrationAssets = import.meta.glob<string>(
  "../../../../assets/mood-illustrations/*.webp",
  { eager: true, query: "?url", import: "default" },
);

export function MoodIllustration({
  moodId,
  className,
}: MoodIllustrationProps) {
  const assetPath = `../../../../assets/mood-illustrations/${moodId}`;
  const source = illustrationAssets[`${assetPath}.webp`];
  const source2x = illustrationAssets[`${assetPath}@2x.webp`];

  return (
    <img
      alt=""
      aria-hidden="true"
      className={className}
      decoding="async"
      draggable={false}
      height={302}
      src={source}
      srcSet={`${source} 1x, ${source2x} 2x`}
      width={445}
    />
  );
}

export type { MoodIllustrationProps };
