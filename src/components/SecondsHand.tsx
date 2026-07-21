import { motion, useAnimationFrame, useMotionValue } from "motion/react";
import styles from "../App.module.css";

type Props = {
  startedAt: number;
  reduceMotion: boolean;
};

export function SecondsHand({ startedAt, reduceMotion }: Props) {
  const rotation = useMotionValue(secondsAngle(startedAt));

  useAnimationFrame(() => {
    if (!reduceMotion) rotation.set(secondsAngle(startedAt));
  });

  const reducedAngle = secondsAngle(startedAt);
  return (
    <div className={styles.handStage} aria-hidden="true">
      <motion.span
        className={styles.secondsHand}
        style={{ rotate: reduceMotion ? reducedAngle : rotation }}
      />
      <span className={styles.handPin} />
    </div>
  );
}

function secondsAngle(startedAt: number) {
  return ((Math.max(0, Date.now() - startedAt) / 1000) % 60) * 6;
}
