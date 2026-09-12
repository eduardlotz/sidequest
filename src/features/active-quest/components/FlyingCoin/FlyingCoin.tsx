import { arc, motion, useMotionValue } from "motion/react";
import { useMemo, useRef, useState } from "react";
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
  const [flying, setFlying] = useState(false);
  const delivered = useRef(false);
  const impact = useRef<CoinImpact>({ xVelocity: 0, yVelocity: 0 });
  const flightPath = useMemo(() => arc({
    direction: "ccw",
    peak: 0.24 + index * 0.015,
    rotate: 0.96,
    strength: 0.76,
  }), [index]);
  const dx = end.x - start.x;
  const dy = end.y - start.y;
  const angle = -Math.PI / 2 + index * 2.399963;
  const radius = (isMobileViewport ? 62 : 94) + (index % 3) * 19;
  const burstScale = (isMobileViewport ? 1.6 : 2.1) + (index % 3) * 0.55;

  return (
    <motion.span
      className={styles.flyingCoin}
      aria-hidden="true"
      initial={{ opacity: 0, scale: 0 }}
      animate={
        reduceMotion
          ? { opacity: 0, scale: 1, x: dx, y: dy }
          : flying ? {
              opacity: [1, 1, 0],
              rotate: [-65, -220, -560],
              scale: [burstScale, (isMobileViewport ? 6 : 8) + (index % 3) * 0.5, 1],
              x: dx,
              y: dy,
            } : {
              opacity: [0, 1, 1],
              rotate: -65,
              scale: [0, burstScale * 1.12, burstScale],
              x: Math.cos(angle) * radius,
              y: Math.sin(angle) * radius,
            }
      }
      transition={reduceMotion ? { duration: 0 } : flying ? {
        delay: index * 0.06,
        duration: 1.02,
        ease: [0.55, 0.08, 0.82, 0.52],
        opacity: { inherit: true, times: [0, 0.93, 1] },
        path: flightPath,
      } : {
        delay: index * 0.04,
        duration: 0.26,
        ease: [0.16, 1, 0.3, 1],
        opacity: { inherit: true, times: [0, 0.15, 1] },
      }}
      style={{ left: start.x, top: start.y, x, y }}
      onUpdate={() => {
        if (!flying) return;
        const xVelocity = x.getVelocity();
        const yVelocity = y.getVelocity();
        if (Math.hypot(xVelocity, yVelocity) > 0) {
          impact.current = { xVelocity, yVelocity };
        }
      }}
      onAnimationComplete={() => {
        if (!flying && !reduceMotion) {
          setFlying(true);
          return;
        }
        if (delivered.current) return;
        delivered.current = true;
        onComplete(impact.current);
      }}
    >
      <CoinIcon />
    </motion.span>
  );
}
