import { arc, motion, useMotionValue } from "motion/react";
import { useMemo, useRef } from "react";
import { CoinIcon } from "../../../../shared/ui/Icons/Icons";
import type { Point } from "../../model/activeQuestMath";
import styles from "./FlyingCoin.module.css";

/* -------------------------------------------------------------------------- */
/*                                Configuration                               */
/* -------------------------------------------------------------------------- */

const COIN_COUNT = 6;

// Flight
const FLIGHT_DURATION = 1.4;
const FLIGHT_STAGGER = 0.113;
const FLIGHT_EASE = [0.62, 0.3, 0.85, 0.72] as const;

// Arc
const ARC_PEAK = 0.23;
const ARC_PEAK_VARIATION = 0.008;
const ARC_ROTATE = 0.94;
const ARC_ROTATE_VARIATION = 0.015;
const ARC_STRENGTH = 0.74;

// Initial burst
const BURST_X_DESKTOP = 15;
const BURST_X_MOBILE = 10;
const BURST_Y_DESKTOP = 36;
const BURST_Y_MOBILE = 26;
const BURST_Y_VARIATION_DESKTOP = 4;
const BURST_Y_VARIATION_MOBILE = 3;

// Scale / depth
const PEAK_SCALE_DESKTOP = 7;
const PEAK_SCALE_MOBILE = 5.5;
const PEAK_SCALE_VARIATION = 0.45;

const LAUNCH_SCALE = 1.7;
const PRE_PEAK_SCALE = 2.2;
const EXIT_SCALE = 2.8;

// Rotation
const FINAL_ROTATION = -470;

/* -------------------------------------------------------------------------- */

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

  const delivered = useRef(false);
  const impact = useRef<CoinImpact>({
    xVelocity: 0,
    yVelocity: 0,
  });

  const dx = end.x - start.x;
  const dy = end.y - start.y;

  // Centers six coins around 0:
  // -2.5, -1.5, -0.5, 0.5, 1.5, 2.5
  const lane = index - (COIN_COUNT - 1) / 2;

  const delay = index * FLIGHT_STAGGER;

  const flightPath = useMemo(
    () =>
      arc({
        direction: "ccw",
        peak: ARC_PEAK + Math.abs(lane) * ARC_PEAK_VARIATION,
        rotate: ARC_ROTATE + lane * ARC_ROTATE_VARIATION,
        strength: ARC_STRENGTH,
      }),
    [lane],
  );

  /*
   * Small fan burst at launch.
   *
   * The coins spread briefly before converging back onto their
   * individual arc paths.
   */
  const burstX = lane * (isMobileViewport ? BURST_X_MOBILE : BURST_X_DESKTOP);

  const burstY =
    -(isMobileViewport ? BURST_Y_MOBILE : BURST_Y_DESKTOP) -
    Math.abs(lane) *
      (isMobileViewport ? BURST_Y_VARIATION_MOBILE : BURST_Y_VARIATION_DESKTOP);

  /*
   * Large foreground scale is intentional.
   * Variation keeps the coins from looking like exact duplicates.
   */
  const peakScale =
    (isMobileViewport ? PEAK_SCALE_MOBILE : PEAK_SCALE_DESKTOP) +
    (index % 3) * PEAK_SCALE_VARIATION;

  return (
    <motion.span
      aria-hidden="true"
      className={styles.flyingCoin}
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              x: 0,
              y: 0,
            }
      }
      animate={
        reduceMotion
          ? {
              opacity: 0,
              x: dx,
              y: dy,
            }
          : {
              opacity: [0, 1, 1, 1, 0],
              x: dx,
              y: dy,
            }
      }
      transition={
        reduceMotion
          ? {
              duration: 0,
            }
          : {
              delay,
              duration: FLIGHT_DURATION,
              ease: FLIGHT_EASE,
              path: flightPath,

              opacity: {
                delay,
                duration: FLIGHT_DURATION,
                ease: FLIGHT_EASE,
                times: [0, 0.035, 0.88, 0.97, 1],
              },
            }
      }
      style={{
        left: start.x,
        top: start.y,
        x,
        y,
      }}
      onUpdate={() => {
        const xVelocity = x.getVelocity();
        const yVelocity = y.getVelocity();

        if (Math.hypot(xVelocity, yVelocity) > 0) {
          impact.current = {
            xVelocity,
            yVelocity,
          };
        }
      }}
      onAnimationComplete={() => {
        if (delivered.current) return;

        delivered.current = true;
        onComplete(impact.current);
      }}
    >
      <motion.span
        className={styles.coinBurst}
        initial={
          reduceMotion
            ? false
            : {
                x: 0,
                y: 0,
                scale: 0,
                rotate: 0,
              }
        }
        animate={
          reduceMotion
            ? {
                x: 0,
                y: 0,
                scale: 1,
                rotate: 0,
              }
            : {
                x: [0, burstX, burstX * 0.75, burstX * 0.35, 0, 0],

                y: [0, burstY, burstY * 0.72, burstY * 0.3, 0, 0],

                scale: [
                  0,
                  LAUNCH_SCALE,
                  PRE_PEAK_SCALE,
                  peakScale,
                  peakScale * 0.94,
                  EXIT_SCALE,
                  1,
                ],

                rotate: [
                  0,
                  FINAL_ROTATION * 0.04,
                  FINAL_ROTATION * 0.17,
                  FINAL_ROTATION * 0.38,
                  FINAL_ROTATION * 0.64,
                  FINAL_ROTATION * 0.85,
                  FINAL_ROTATION,
                ],
              }
        }
        transition={
          reduceMotion
            ? {
                duration: 0,
              }
            : {
                delay,
                duration: FLIGHT_DURATION,

                x: {
                  delay,
                  duration: FLIGHT_DURATION,
                  ease: FLIGHT_EASE,
                  times: [0, 0.09, 0.18, 0.3, 0.44, 1],
                },

                y: {
                  delay,
                  duration: FLIGHT_DURATION,
                  ease: FLIGHT_EASE,
                  times: [0, 0.09, 0.18, 0.3, 0.44, 1],
                },

                scale: {
                  delay,
                  duration: FLIGHT_DURATION,
                  ease: [0.2, 0.72, 0.2, 1],
                  times: [0, 0.07, 0.18, 0.43, 0.62, 0.84, 1],
                },

                rotate: {
                  delay,
                  duration: FLIGHT_DURATION,
                  ease: "linear",
                  times: [0, 0.08, 0.2, 0.4, 0.62, 0.82, 1],
                },
              }
        }
      >
        <CoinIcon />
      </motion.span>
    </motion.span>
  );
}
