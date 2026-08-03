import { AnimatePresence, motion, type Variants } from "motion/react";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { formatRunningDuration } from "../lib/format";
import styles from "../App.module.css";

type Props = {
  elapsedMs: number;
  reduceMotion: boolean;
};

const DIGIT_TRANSITION_DURATION = 0.55;
const DIGIT_STAGGER_PORTION = 0.3;
const NUMERIC_EASING_STOPS = [
  0, 0.1052, 0.3155, 0.532, 0.7112, 0.8414, 0.9265, 0.9765, 1.0023, 1.013,
  1.0151, 1.0133, 1.01, 1.0068, 1.0041, 1.0022, 1.001,
] as const;

type TimerToken = {
  character: string;
  slot: number;
};

function numericEasing(progress: number) {
  const position = progress * (NUMERIC_EASING_STOPS.length - 1);
  const lowerIndex = Math.floor(position);
  const upperIndex = Math.min(
    lowerIndex + 1,
    NUMERIC_EASING_STOPS.length - 1,
  );
  const remainder = position - lowerIndex;
  const lower = NUMERIC_EASING_STOPS[lowerIndex];
  const upper = NUMERIC_EASING_STOPS[upperIndex];

  return lower + (upper - lower) * remainder;
}

function tokenize(value: string): TimerToken[] {
  return [...value].map((character, index) => ({
    character,
    slot: value.length - index - 1,
  }));
}

const digitVariants: Variants = {
  enter: (delay = 0) => ({
    opacity: 0,
    y: "0.35em",
    scale: 0.6,
    rotate: 2,
    filter: "blur(0.1em)",
    transition: {
      delay,
      duration: DIGIT_TRANSITION_DURATION,
      ease: numericEasing,
    },
  }),
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    filter: "blur(0em)",
    transition: {
      delay,
      duration: DIGIT_TRANSITION_DURATION,
      ease: numericEasing,
    },
  }),
  exit: (delay = 0) => ({
    opacity: 0,
    y: "-0.35em",
    scale: 0.6,
    rotate: 2,
    filter: "blur(0.1em)",
    transition: {
      delay,
      duration: DIGIT_TRANSITION_DURATION,
      ease: numericEasing,
    },
  }),
};

export function AnimatedElapsedTime({ elapsedMs, reduceMotion }: Props) {
  const { t } = useTranslation();
  const formatted = formatRunningDuration(elapsedMs);
  const tokens = tokenize(formatted);
  const previousFormattedRef = useRef(formatted);
  const previousCharacters = new Map(
    tokenize(previousFormattedRef.current).map(({ character, slot }) => [
      slot,
      character,
    ]),
  );
  const changedSlots = tokens
    .filter(
      ({ character, slot }) =>
        character !== ":" && previousCharacters.get(slot) !== character,
    )
    .map(({ slot }) => slot);

  useEffect(() => {
    previousFormattedRef.current = formatted;
  }, [formatted]);

  return (
    <div
      className={styles.elapsedTime}
      role="timer"
      aria-live="off"
      aria-label={t("ui.timer.elapsed", { time: formatted })}
    >
      <span className={styles.timerDigits} aria-hidden="true">
        {tokens.map(({ character, slot }) => {
          if (character === ":") {
            return (
              <span
                className={styles.timerColon}
                data-timer-slot={slot}
                key={`slot-${slot}`}
              >
                {character}
              </span>
            );
          }

          const changedIndex = changedSlots.indexOf(slot);
          const staggerStep =
            changedSlots.length > 0
              ? (DIGIT_TRANSITION_DURATION * DIGIT_STAGGER_PORTION) /
                changedSlots.length
              : 0;
          const delay = Math.max(0, changedIndex) * staggerStep;

          return (
            <span
              className={styles.timerDigitCell}
              data-timer-slot={slot}
              key={`slot-${slot}`}
            >
              {reduceMotion ? (
                <span className={styles.timerDigit}>{character}</span>
              ) : (
                <AnimatePresence initial={false} custom={delay}>
                  <motion.span
                    className={styles.timerDigit}
                    custom={delay}
                    data-timer-digit={character}
                    initial="enter"
                    animate="visible"
                    exit="exit"
                    key={character}
                    variants={digitVariants}
                  >
                    {character}
                  </motion.span>
                </AnimatePresence>
              )}
            </span>
          );
        })}
      </span>
    </div>
  );
}
