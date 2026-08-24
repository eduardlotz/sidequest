import { motion } from "motion/react";
import { CoinIcon } from "../../../../shared/ui/Icons/Icons";
import type { Point } from "../../model/activeQuestMath";
import styles from "./FlyingCoin.module.css";

type Props = {
  end: Point;
  index: number;
  isMobileViewport: boolean;
  onComplete: () => void;
  reduceMotion: boolean;
  start: Point;
};

export function FlyingCoin({
  end,
  index,
  isMobileViewport,
  onComplete,
  reduceMotion,
  start,
}: Props) {
  const rotationDirection = isMobileViewport ? 1 : -1;
  const arcX =
    start.x + (end.x - start.x) * 0.43 + rotationDirection * (54 + index * 9);
  const arcY = Math.min(start.y, end.y) - 105 - index * 10;

  return (
    <motion.span
      className={styles.flyingCoin}
      aria-hidden="true"
      initial={{ left: start.x, opacity: 0, scale: 0.55, top: start.y }}
      animate={
        reduceMotion
          ? { left: end.x, opacity: 0, scale: 1, top: end.y }
          : {
              left: [start.x, arcX, end.x],
              opacity: [0, 1, 1, 0],
              rotate: [0, rotationDirection * 180, rotationDirection * 420],
              scale: [0.55, 2, 1.6, 0.3],
              top: [start.y, arcY, end.y],
            }
      }
      transition={{
        delay: reduceMotion ? 0 : 0.34 + index * 0.11,
        duration: reduceMotion ? 0 : 0.78,
        ease: [0.35, 0.02, 0.16, 1],
      }}
      onAnimationComplete={onComplete}
    >
      <CoinIcon />
    </motion.span>
  );
}
