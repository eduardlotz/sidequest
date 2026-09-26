import { motion, useTransform, type MotionValue } from "motion/react";
import { useEffect, type CSSProperties, type ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { useTiltEffect } from "../../../../hooks/useTiltEffect";
import { SELECTION_HANDOFF_EASE } from "../../../../shared/motion/transitions";
import { usePlayLayout } from "../../usePlayLayout";
import styles from "./ArcDeck.module.css";
import type { ArcCarouselItem } from "./ArcCarousel";
import { loopDistance, modulo } from "./arcDeckMath";
import { ARC_GEOMETRY, type ArcCardShape } from "./arcDeckGeometry";

export type ArcCardBodyProps<Item extends ArcCarouselItem> = {
  item: Item;
  layoutSessionId: number | string;
  reduceMotion: boolean;
  shaded: boolean;
  centeredTiltEffects: boolean;
  contentVisible: boolean;
  contentOpacity: MotionValue<number>;
  illustrationX: MotionValue<number>;
  illustrationY: MotionValue<number>;
};

type Props<Item extends ArcCarouselItem> = {
  cardShape: ArcCardShape;
  cardStyle?: CSSProperties;
  renderBody: (props: ArcCardBodyProps<Item>) => ReactNode;
  activeIndex: number;
  index: number;
  item: Item;
  itemCount: number;
  layerPresent: boolean;
  layoutSessionId: number | string;
  position: MotionValue<number>;
  reduceMotion: boolean;
  richEffects: boolean;
  tiltEffects: boolean;
  revealCards: boolean;
  returningFromQuests: boolean;
  selectedId: Item["id"] | null;
  onCenter: (index: number, focus?: boolean) => void;
  onSelect: (id: Item["id"], focusNext?: boolean) => void;
};

const CARD_CENTER_STAGGER_SECONDS = 0.025;

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

export function ArcCard<Item extends ArcCarouselItem>({
  cardShape,
  cardStyle,
  renderBody,
  activeIndex,
  index,
  item,
  itemCount,
  layerPresent,
  layoutSessionId,
  position,
  reduceMotion,
  richEffects,
  tiltEffects,
  revealCards,
  returningFromQuests,
  selectedId,
  onCenter,
  onSelect,
}: Props<Item>) {
  const { t } = useTranslation();
  const { mode } = usePlayLayout();


  /*
   * Continuous arc position.
   *
   * These values move while the deck itself rotates.
   * They have nothing to do with entering/exiting the mood screen.
   */
  const distance = useTransform(position, (latest) =>
    loopDistance(index - latest, itemCount),
  );

  const arc = ARC_GEOMETRY[cardShape][mode];

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
  const centeredTiltEffects = tiltEffects && center;
  const shaded = richEffects;

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
    centeredTiltEffects && !reduceMotion && !selectedId && layerPresent;

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
    reduceMotion: !centeredTiltEffects || reduceMotion,
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
      data-shaded={shaded || undefined}
      data-tilt-effects={centeredTiltEffects || undefined}
      data-visible={visible || undefined}
      style={{
        pointerEvents:
          interactive && !selectedId && layerPresent && (revealCards || center)
            ? "auto"
            : "none",

        x,
        y,
        rotate,
        scale,
        zIndex,
        ...(richEffects
          ? {
              z,
              rotateY: rotateYOuter,
              transformStyle: "preserve-3d" as const,
            }
          : {}),
      }}
    >
      <motion.div
        className={styles.moodCardExit}
        initial={reduceMotion ? false : outsidePose}
        animate={
          foregroundExiting && !primaryExit
            ? outsidePose
            : {
                opacity: visible && (revealCards || center) ? 1 : 0,
                scale: revealCards || center ? 1 : 0.92,
                x: 0,
                y: 0,
                filter:
                  !shaded || reduceMotion || returningFromQuests
                    ? "none"
                    : "blur(0px)",
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
          style={cardStyle}
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
          <motion.span
            className={styles.moodCardTiltSurface}
            style={
              centeredTiltEffects
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
            {renderBody({
              item, layoutSessionId, reduceMotion, shaded, centeredTiltEffects,
              contentVisible: !foregroundExiting || primaryExit,
              contentOpacity, illustrationX, illustrationY,
            })}
          </motion.span>
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
