import { ReactNode } from "react";
import { useTiltEffect } from "../../../hooks/useTiltEffect";
import { motion } from "motion/react";
import styles from "./TiltedElement.module.css";

interface Props {
  children: ReactNode;
}

export const TiltedElement = (props: Props) => {
  const {
    handlePointerEnter,
    handlePointerLeave,
    handlePointerMove,
    rotateX,
    rotateY,
  } = useTiltEffect({ maxGlare: 0, maxTilt: 14, reduceMotion: false });

  return (
    <motion.span
      aria-hidden="true"
      className={styles.tiltedOuter}
      initial="rest"
      animate="rest"
      whileHover="hover"
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <motion.span
        className={styles.tiltedInner}
        style={{ rotateX, rotateY, transformPerspective: 600 }}
        variants={{
          rest: { scale: 1 },
          hover: { scale: 1.05 },
        }}
        transition={{ type: "spring", stiffness: 280, damping: 23, mass: 0.7 }}
      >
        {props.children}
      </motion.span>
    </motion.span>
  );
};
