import { AnimatePresence, motion } from "motion/react";
import { formatRunningDuration } from "../lib/format";
import styles from "../App.module.css";

type Props = {
  elapsedMs: number;
  reduceMotion: boolean;
};

export function AnimatedElapsedTime({ elapsedMs, reduceMotion }: Props) {
  const formatted = formatRunningDuration(elapsedMs);

  return (
    <div
      className={styles.elapsedTime}
      role="timer"
      aria-live="off"
      aria-label={`Elapsed time ${formatted}`}
    >
      <span className={styles.timerDigits} aria-hidden="true">
        {formatted.split("").map((character, index) =>
          character === ":" ? (
            <span className={styles.timerColon} key={`colon-${index}`}>:</span>
          ) : (
            <span className={styles.timerDigitCell} key={`digit-${index}`}>
              <AnimatePresence initial={false} mode="popLayout">
                <motion.span
                  className={styles.timerDigit}
                  key={character}
                  initial={reduceMotion ? false : { y: "72%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  exit={reduceMotion ? { opacity: 0 } : { y: "-72%", opacity: 0 }}
                  transition={reduceMotion ? { duration: 0 } : {
                    type: "spring",
                    stiffness: 360,
                    damping: 32,
                    mass: 0.72,
                  }}
                >
                  {character}
                </motion.span>
              </AnimatePresence>
            </span>
          ),
        )}
      </span>
    </div>
  );
}
