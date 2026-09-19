import { motion, useTransform, type MotionValue } from "motion/react";
import { useEffect, useId } from "react";
import { useTranslation } from "react-i18next";
import type { MoodId } from "../../../../data/moods";
import { getMoodArtStyle } from "../../../../data/questColors";
import { useTiltEffect } from "../../../../hooks/useTiltEffect";
import { moodCardLayoutId } from "../../../../lib/cardMotion";
import { SELECTION_HANDOFF_EASE } from "../../../../shared/motion/transitions";
import { usePlayLayout } from "../../usePlayLayout";
import styles from "./ArcDeck.module.css";
import { MoodIllustration } from "../MoodIllustration/MoodIllustration";
import { SelectionCardBody } from "../SelectionCard/SelectionCard";
import type { ArcDeckItem } from "./ArcDeck";
import { loopDistance, modulo } from "./arcDeckMath";
import { MoodCardFilters } from "./MoodCardFilters";

type Props = {
  activeIndex: number;
  index: number;
  item: ArcDeckItem;
  itemCount: number;
  layerPresent: boolean;
  layoutSessionId: number | string;
  position: MotionValue<number>;
  reduceMotion: boolean;
  richEffects: boolean;
  revealCards: boolean;
  returningFromQuests: boolean;
  selectedId: MoodId | null;
  onCenter: (index: number, focus?: boolean) => void;
  onSelect: (id: MoodId, focusNext?: boolean) => void;
};

const CARD_CENTER_STAGGER_SECONDS = 0.025;

const ARC = {
  compact: {
    radiusX: 650,
    radiusY: 1000,
    angle: 26,
  },
  desktop: {
    radiusX: 1050,
    radiusY: 1000,
    angle: 28,
  },
};

const MOOD_QUEST_EASE = [0.16, 1, 0.3, 1] as const;
const MOOD_QUEST_DURATION = 0.56;

const TILT_VARIANTS = {
  rest: {
    scale: 1,
    y: 0,
  },
  hover: {
    scale: 1.035,
    y: -8,
  },
  focus: {
    scale: 1.025,
    y: -5,
  },
  pressed: {
    scale: 0.985,
    y: 2,
  },
};

const TILT_TRANSITION = {
  type: "spring" as const,
  stiffness: 300,
  damping: 24,
  mass: 0.74,
};

function getOutsidePose(distance: number, radiusX: number) {
  const absoluteDistance = Math.min(2, Math.abs(distance));

  if (distance === 0) {
    return {
      opacity: 0,
      scale: 0.82,
      x: 0,
      y: 0,
      filter: "none",
    };
  }

  const direction = Math.sign(distance);

  return {
    opacity: 0,
    scale: 0.9,

    x: direction * (radiusX * 0.1 + absoluteDistance * 12),
    y: 0,
    filter: "none",
  };
}

// TODO: check if all of math is needed + fix perf issues in safari

export function ArcCard({
  activeIndex,
  index,
  item,
  itemCount,
  layerPresent,
  layoutSessionId,
  position,
  reduceMotion,
  richEffects,
  revealCards,
  returningFromQuests,
  selectedId,
  onCenter,
  onSelect,
}: Props) {
  const { t } = useTranslation();
  const { isCompact } = usePlayLayout();

  const shadingId = useId().replace(/:/g, "");
  const textFilterId = `${shadingId}-mood-text`;

  /*
   * Continuous arc position.
   *
   * These values move while the deck itself rotates.
   * They have nothing to do with entering/exiting the mood screen.
   */
  const distance = useTransform(position, (latest) =>
    loopDistance(index - latest, itemCount),
  );

  const arc = isCompact ? ARC.compact : ARC.desktop;

  const angle = useTransform(distance, (value) => value * arc.angle);

  const x = useTransform(angle, (degrees) => {
    const radians = (degrees * Math.PI) / 180;
    return Math.sin(radians) * arc.radiusX;
  });

  const y = useTransform(angle, (degrees) => {
    const radians = (degrees * Math.PI) / 180;
    return (1 - Math.cos(radians)) * arc.radiusY - 42;
  });

  const rotate = useTransform(angle, (degrees) => degrees);

  // Actual 3D carousel rotation.
  // Left cards turn right, right cards turn left.
  const rotateYOuter = useTransform(distance, (value) => -value * 35);
  // const rotateXOuter = useTransform(distance, (value) => -value * -20);
  // const rotateXOuter = -10;
  // const rotateXOuter = -15;
  const rotateZOuter = useTransform(distance, (value) => -value * -10);

  // Push cards farther away from the viewer as they leave the center.
  const z = useTransform(distance, (value) => -Math.abs(value) * 15);

  const scale = useTransform(distance, (value) =>
    Math.max(0.4, 1 - Math.abs(value) * 0.15),
  );

  const contentOpacity = useTransform(distance, (value) =>
    Math.max(0.1, 1 - Math.abs(value) * 0.7),
  );

  const zIndex = useTransform(distance, (value) =>
    Math.round(30 - Math.abs(value) * 5),
  );

  /*
   * Discrete card state.
   *
   * This represents the card's current logical position relative
   * to activeIndex rather than its animated MotionValue position.
   */
  const discreteDistance = loopDistance(index - activeIndex, itemCount);

  const absoluteDistance = Math.min(2, Math.abs(discreteDistance));

  const center = discreteDistance === 0;
  const visible = Math.abs(discreteDistance) <= 2;
  const interactive = Math.abs(discreteDistance) <= 1;

  const selected = selectedId === item.id;

  /*
   * The mood layer disappears either after selecting a mood
   * or when the entire layer is removed.
   */
  const foregroundExiting = Boolean(selectedId) || !layerPresent;

  /*
   * The selected card keeps its content visible during the
   * shared layout handoff to the quest screen.
   */
  const primaryExit = selected || (!selectedId && center);

  const outsidePose = getOutsidePose(discreteDistance, arc.radiusX);

  const positionDelay =
    foregroundExiting || returningFromQuests || revealCards
      ? absoluteDistance * CARD_CENTER_STAGGER_SECONDS
      : 0;

  const canTilt =
    richEffects && !reduceMotion && center && !selectedId && layerPresent;

  const {
    handlePointerEnter,
    handlePointerDown,
    handlePointerUp,
    handlePointerLeave,
    handlePointerMove,
    resetTilt,
    rotateX,
    rotateY,
  } = useTiltEffect({
    maxTilt: 14,
    press: {
      maxTilt: 30,
      scale: 1,
    },
    reduceMotion: !richEffects || reduceMotion || !center,
  });

  const illustrationX = useTransform(rotateY, (value) => value * -1.7);

  const illustrationY = useTransform(rotateX, (value) => value * 1.35);

  useEffect(() => {
    if (!center || selectedId) {
      resetTilt();
    }
  }, [center, resetTilt, selectedId]);

  return (
    <motion.div
      className={styles.arcCardSlot}
      data-center={center || undefined}
      data-visible={visible || undefined}
      style={{
        pointerEvents:
          interactive && !selectedId && layerPresent && (revealCards || center)
            ? "auto"
            : "none",

        x,
        y,
        z,
        rotate,
        rotateY: rotateYOuter,
        // rotateX: rotateXOuter,
        // rotateZ: rotateZOuter,
        scale,
        zIndex,

        transformStyle: "preserve-3d",
      }}
    >
      <motion.div
        className={styles.moodCardExit}
        initial={reduceMotion ? false : outsidePose}
        animate={
          // foregroundExiting
          //   ? outsidePose
          //   : {
          //       opacity: visible && (revealCards || center) ? 1 : 0,

          //       scale: revealCards || center ? 1 : 0.92,

          //       x: 0,
          //       y: 0,

          //       filter:
          //         !richEffects || reduceMotion || returningFromQuests
          //           ? "none"
          //           : visible && !revealCards && !center
          //             ? "blur(5px)"
          //             : "blur(0px)",
          //     }
          {
            opacity: 1,
            scale: 1,
            y: 0,
            x: 0,
            z: 0,
            rotate: 0,
            rotateY: 0,
            rotateX: 0,
            rotateZ: 0,
            filter: "none",
          }
        }
        transition={
          reduceMotion
            ? {
                duration: 0,
              }
            : {
                x: {
                  duration: MOOD_QUEST_DURATION,
                  ease: MOOD_QUEST_EASE,
                  delay: positionDelay,
                },

                y: {
                  duration: MOOD_QUEST_DURATION,
                  ease: MOOD_QUEST_EASE,
                  delay: positionDelay,
                },

                scale: {
                  duration: MOOD_QUEST_DURATION,
                  ease: MOOD_QUEST_EASE,
                  delay: positionDelay,
                },

                opacity: {
                  duration: MOOD_QUEST_DURATION,
                  ease: MOOD_QUEST_EASE,
                  delay: positionDelay,
                },

                filter: {
                  duration: foregroundExiting || returningFromQuests ? 0 : 0.3,

                  ease: SELECTION_HANDOFF_EASE,

                  delay: positionDelay,
                },
              }
        }
      >
        <motion.button
          className={styles.arcCardHitArea}
          data-flow-focus={center || undefined}
          data-selected={selected || undefined}
          data-sound-card={center || undefined}
          data-sound-skip={!center || undefined}
          type="button"
          tabIndex={center ? 0 : -1}
          aria-current={center ? "true" : undefined}
          aria-label={t("ui.arc.cardLabel", {
            action: t(center ? "ui.arc.choose" : "ui.arc.center"),
            title: item.title,
            subtitle: item.subtitle,
          })}
          animate="rest"
          style={getMoodArtStyle(item.id)}
          whileHover={canTilt ? "hover" : undefined}
          whileFocus={canTilt ? "focus" : undefined}
          whileTap={reduceMotion || !center ? undefined : "pressed"}
          onClick={(event) => {
            const keyboardClick = event.detail === 0;

            if (center) {
              onSelect(item.id, keyboardClick);

              return;
            }

            onCenter(index, keyboardClick);
          }}
          onKeyDown={(event) => {
            if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") {
              return;
            }

            event.preventDefault();

            const direction = event.key === "ArrowRight" ? 1 : -1;

            onCenter(modulo(activeIndex + direction, itemCount), true);
          }}
          onPointerEnter={canTilt ? handlePointerEnter : undefined}
          onPointerDown={canTilt ? handlePointerDown : undefined}
          onPointerUp={canTilt ? handlePointerUp : undefined}
          onPointerCancel={canTilt ? handlePointerLeave : undefined}
          onPointerMove={canTilt ? handlePointerMove : undefined}
          onPointerLeave={canTilt ? handlePointerLeave : undefined}
        >
          {richEffects && <MoodCardFilters textFilterId={textFilterId} />}

          <motion.span
            className={styles.moodCardTiltSurface}
            style={
              richEffects
                ? {
                    rotateX,
                    rotateY,
                    transformPerspective: 1_000,
                  }
                : undefined
            }
            variants={TILT_VARIANTS}
            transition={TILT_TRANSITION}
          >
            <SelectionCardBody
              className={styles.moodSelectionCardBody}
              contentKey={`mood-${item.id}`}
              contentClassName={styles.moodSelectionCardContent}
              contentVisible={!foregroundExiting || primaryExit}
              layoutId={moodCardLayoutId(layoutSessionId, item.id)}
              reduceMotion={reduceMotion}
            >
              <motion.span
                className={styles.moodCardVisual}
                style={{
                  opacity: contentOpacity,
                }}
              >
                <span className={styles.arcCardContent}>
                  <strong
                    className={styles.arcCardTitle}
                    style={
                      richEffects
                        ? {
                            filter: `url("#${textFilterId}")`,
                          }
                        : undefined
                    }
                  >
                    {item.title}
                  </strong>

                  <span
                    className={styles.arcCardDescription}
                    style={
                      richEffects
                        ? {
                            filter: `url("#${textFilterId}")`,
                          }
                        : undefined
                    }
                  >
                    {item.subtitle}
                  </span>
                </span>

                <motion.span
                  className={styles.moodIllustrationLayer}
                  style={
                    richEffects
                      ? {
                          x: illustrationX,
                          y: illustrationY,
                        }
                      : undefined
                  }
                >
                  <MoodIllustration
                    className={styles.moodIllustration}
                    moodId={item.id}
                  />
                </motion.span>
              </motion.span>
            </SelectionCardBody>
          </motion.span>
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
