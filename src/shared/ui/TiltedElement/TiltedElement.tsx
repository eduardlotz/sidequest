import type { ReactNode } from "react";
import { useTiltEffect } from "../../../hooks/useTiltEffect";
import { motion } from "motion/react";
import styles from "./TiltedElement.module.css";

interface Props {
  ariaHidden?: boolean;
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  maxGlare?: number;
  maxTilt?: number;
  perspective?: number;
  reduceMotion?: boolean;
  hoverScale?: number;
  hoverY?: number;
}

export const TiltedElement = ({
  ariaHidden = true,
  children,
  className,
  innerClassName,
  maxGlare = 0,
  maxTilt = 14,
  perspective = 600,
  reduceMotion = false,
  hoverScale = 1.05,
  hoverY = 0,
}: Props) => {
  const {
    handlePointerEnter,
    handlePointerLeave,
    handlePointerMove,
    rotateX,
    rotateY,
  } = useTiltEffect({ maxGlare, maxTilt, reduceMotion });

  return (
    <motion.span
      aria-hidden={ariaHidden || undefined}
      className={[styles.tiltedOuter, className].filter(Boolean).join(" ")}
      initial="rest"
      animate="rest"
      whileHover="hover"
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <motion.span
        className={[styles.tiltedInner, innerClassName]
          .filter(Boolean)
          .join(" ")}
        style={{ rotateX, rotateY, transformPerspective: perspective }}
        variants={{
          rest: { scale: 1 },
          hover: {
            scale: reduceMotion ? 1 : hoverScale,
            y: reduceMotion ? 0 : hoverY,
          },
        }}
        transition={
          reduceMotion
            ? { duration: 0 }
            : { type: "spring", stiffness: 280, damping: 23, mass: 0.7 }
        }
      >
        {children}
      </motion.span>
    </motion.span>
  );
};
