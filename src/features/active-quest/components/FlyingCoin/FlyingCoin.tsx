import { arc, motion, useMotionValue } from "motion/react";
import { CoinIcon } from "../../../../shared/ui/Icons/Icons";
import type { Point } from "../../model/activeQuestMath";
import styles from "./FlyingCoin.module.css";

type Props = {
  end: Point;
  index: number;
  isMobileViewport: boolean;
  onComplete: (impact: CoinImpact) => void;
  reduceMotion: boolean;
  start: Point;
};

export type CoinImpact = {
  xVelocity: number;
  yVelocity: number;
};

export function FlyingCoin({
  end,
  index,
  isMobileViewport,
  onComplete,
  reduceMotion,
  start,
}: Props) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const dx = end.x - start.x;
  const dy = end.y - start.y;

  return (
    <motion.span
      className={styles.flyingCoin}
      aria-hidden="true"
      initial={{ opacity: 0, scale: 1 }}
      animate={
        reduceMotion
          ? { opacity: 0, scale: 1, x: dx, y: dy }
          : {
              opacity: [0, 1, 1, 0],
              rotate: [0, -220, -560],
              scale: [1, isMobileViewport ? 6 : 8, 1],
              x: dx,
              y: dy,
            }
      }
      transition={{
        delay: reduceMotion ? 0 : 0.28 + index * 0.1,
        duration: reduceMotion ? 0 : 1.02,
        ease: [0.55, 0.08, 0.82, 0.52],
        opacity: { inherit: true, times: [0, 0.08, 0.93, 1] },
        path: arc({
          direction: "ccw",
          peak: 0.24 + index * 0.015,
          rotate: 0.96,
          strength: 0.76,
        }),
      }}
      style={{ left: start.x, top: start.y, x, y }}
      onAnimationComplete={() =>
        onComplete({
          xVelocity: x.getVelocity(),
          yVelocity: y.getVelocity(),
        })
      }
    >
      <CoinIcon />
    </motion.span>
  );
}
