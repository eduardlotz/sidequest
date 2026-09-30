import type { QuestTypeId, QuestTagId } from "../../../data/questTraits";
import { motion, type HTMLMotionProps } from "motion/react";
import type { CSSProperties, ReactNode } from "react";
import styles from "./QuestCard.module.css";
import { QuestCardFront } from "../QuestCardFront/QuestCardFront";
import type { GameReference } from "../../../data/gameTypes";
import type { QuestRarity } from "../../../data/questRarity";

const FOIL_SPARKLES = [
  [9, 8, 2.4], [85, 12, 3.6], [31, 20, 1.6], [92, 33, 2.5],
  [12, 42, 2], [76, 48, 3], [23, 58, 2.4], [87, 64, 1.8],
  [49, 69, 3.8], [8, 76, 2.8], [69, 80, 2], [33, 87, 3],
  [91, 91, 3.6], [56, 95, 2],
] as const;

type Props = {
  children?: ReactNode;
  className?: string;
  completed?: boolean;
  unknown?: boolean;
  rarity?: QuestRarity;
  bestTimeMs?: number | null;
  game?: GameReference | null;
  type: QuestTypeId;
  tags: readonly QuestTagId[];
  minimumDurationMinutes: number;
  moodTitle: string;
  name: string;
  objective: string;
  style?: HTMLMotionProps<"span">["style"];
  suggestedDurationMinutes: number;
  showWordmarkLogo?: boolean;
};

export function QuestCard({
  children,
  className,
  completed = false,
  unknown = false,
  rarity = "standard",
  bestTimeMs,
  game = null,
  type,
  tags,
  minimumDurationMinutes,
  moodTitle,
  name,
  objective,
  style,
  suggestedDurationMinutes,
  showWordmarkLogo = true,
}: Props) {
  return (
    <motion.span
      className={[styles.questCardSurface, !unknown && rarity === "special" && styles.specialCard, className].filter(Boolean).join(" ")}
      data-rarity={unknown ? undefined : rarity}
      data-completed={completed || undefined}
      data-unknown={unknown || undefined}
      style={style}
    >
      <span className={styles.cardShimmer} aria-hidden="true">
        {!unknown && rarity === "special" && (
          <>
            <span className={styles.foilCorner} data-foil-corner="top-left" />
            <span className={styles.foilCorner} data-foil-corner="top-right" />
            <span className={styles.foilCorner} data-foil-corner="bottom-right" />
            <span className={styles.foilCorner} data-foil-corner="bottom-left" />
          </>
        )}
      </span>
      {!unknown && rarity === "special" && (
        <span className={styles.foilSparkles} aria-hidden="true">
          {FOIL_SPARKLES.map(([x, y, size], index) => (
            <span
              className={styles.foilSparkle}
              key={index}
              style={{
                left: `${x}%`,
                top: `${y}%`,
                "--sparkle-size": `${size}cqw`,
                "--sparkle-delay": `${-index * 0.47}s`,
              } as CSSProperties}
            />
          ))}
        </span>
      )}
      <QuestCardFront
        unknown={unknown}
        rarity={rarity}
        bestTimeMs={bestTimeMs}
        game={game}
        type={type}
        tags={tags}
        minimumDurationMinutes={minimumDurationMinutes}
        moodTitle={moodTitle}
        name={name}
        objective={objective}
        suggestedDurationMinutes={suggestedDurationMinutes}
        showWordmarkLogo={showWordmarkLogo}
      />
      {children}
    </motion.span>
  );
}
