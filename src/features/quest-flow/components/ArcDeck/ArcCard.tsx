import { motion, useTransform, type MotionValue } from "motion/react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import type { MoodId } from "../../../../data/moods";
import { getMoodArtStyle } from "../../../../data/questColors";
import { useTiltEffect } from "../../../../hooks/useTiltEffect";
import { moodCardLayoutId } from "../../../../lib/cardMotion";
import { SELECTION_HANDOFF_EASE } from "../../../../shared/motion/transitions";
import styles from "../../../../App.module.css";
import { MoodIllustration } from "../MoodIllustration/MoodIllustration";
import { SelectionCardBody } from "../SelectionCard/SelectionCard";
import type { ArcDeckItem } from "./ArcDeck";
import { loopDistance, modulo } from "./arcDeckMath";

type Props = {
  activeIndex: number;
  index: number;
  item: ArcDeckItem;
  itemCount: number;
  layerPresent: boolean;
  layoutSessionId: number | string;
  mobile: boolean;
  position: MotionValue<number>;
  reduceMotion: boolean;
  revealCards: boolean;
  returningFromQuests: boolean;
  selectedId: MoodId | null;
  onCenter: (index: number, focus?: boolean) => void;
  onSelect: (id: MoodId, focusNext?: boolean) => void;
};

const CARD_CENTER_STAGGER_SECONDS = 0.035;
const MOBILE_CARD_GAP = 330;
const DESKTOP_CARD_GAP = 520;
const MOOD_POSITION_TRANSITION = {
  type: "spring" as const,
  stiffness: 260,
  damping: 30,
  mass: 0.82,
  restDelta: 0.01,
  restSpeed: 0.01,
};

export function ArcCard({
  activeIndex,
  index,
  item,
  itemCount,
  layerPresent,
  layoutSessionId,
  mobile,
  position,
  reduceMotion,
  revealCards,
  returningFromQuests,
  selectedId,
  onCenter,
  onSelect,
}: Props) {
  const { t } = useTranslation();
  const distance = useTransform(position, (latest) =>
    loopDistance(index - latest, itemCount),
  );
  const x = useTransform(
    distance,
    (value) => value * (mobile ? MOBILE_CARD_GAP : DESKTOP_CARD_GAP),
  );
  const y = useTransform(distance, (value) => -42 + Math.abs(value) * 92);
  const rotate = useTransform(distance, (value) => value * 11);
  const scale = useTransform(distance, (value) =>
    Math.max(0.78, 1 - Math.abs(value) * 0.1),
  );
  const contentOpacity = useTransform(distance, (value) =>
    Math.max(0.12, 1 - Math.abs(value) * 0.72),
  );
  const zIndex = useTransform(distance, (value) =>
    Math.round(30 - Math.abs(value) * 5),
  );
  const discreteDistance = loopDistance(index - activeIndex, itemCount);
  const visible = Math.abs(discreteDistance) <= 2;
  const interactive = Math.abs(discreteDistance) <= 1;
  const center = index === activeIndex;
  const selected = selectedId === item.id;
  const foregroundExiting = Boolean(selectedId) || !layerPresent;
  const primaryExit = selected || (!selectedId && center);
  const absoluteDistance = Math.min(2, Math.abs(discreteDistance));
  const centerStaggerDelay = absoluteDistance * CARD_CENTER_STAGGER_SECONDS;
  const direction = discreteDistance < 0 ? -1 : 1;
  const returningOffsetX = center ? 0 : direction * (32 + absoluteDistance * 10);
  const returningOffsetY = center ? 36 : 28;
  const moodExitX = primaryExit ? 0 : direction * (42 + absoluteDistance * 12);
  const moodExitY = primaryExit ? 32 : 44;
  const positionDelay = foregroundExiting
    ? centerStaggerDelay
    : revealCards
      ? centerStaggerDelay
      : 0;
  const {
    handlePointerEnter,
    handlePointerLeave,
    handlePointerMove,
    resetTilt,
    rotateX,
    rotateY,
  } = useTiltEffect({ maxTilt: 14, reduceMotion: reduceMotion || !center });
  const illustrationX = useTransform(rotateY, (value) => value * -1.7);
  const illustrationY = useTransform(rotateX, (value) => value * 1.35);

  useEffect(() => {
    if (!center || selectedId) resetTilt();
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
        rotate,
        scale,
        x,
        y,
        zIndex,
      }}
    >
      <motion.div
        className={styles.moodCardExit}
        initial={
          reduceMotion
            ? false
            : {
                filter: "none",
                opacity: 0,
                scale: returningFromQuests ? 0.96 : 0.94,
                x: returningFromQuests ? returningOffsetX : 0,
                y: returningFromQuests ? returningOffsetY : 56,
              }
        }
        animate={
          foregroundExiting
            ? {
                filter: "none",
                opacity: 0,
                scale: primaryExit ? 0.96 : 0.94,
                x: moodExitX,
                y: moodExitY,
              }
            : {
                filter:
                  returningFromQuests
                    ? "none"
                    : visible && !revealCards && !center
                      ? "blur(5px)"
                      : "blur(0px)",
                opacity: visible && (revealCards || center) ? 1 : 0,
                scale: revealCards || center ? 1 : 0.92,
                x:
                  revealCards || center
                    ? 0
                    : returningFromQuests
                      ? returningOffsetX
                      : 0,
                y:
                  revealCards || center
                    ? 0
                    : returningFromQuests
                      ? returningOffsetY
                      : 72,
              }
        }
        transition={
          reduceMotion
            ? { duration: 0 }
            : {
                x: { ...MOOD_POSITION_TRANSITION, delay: positionDelay },
                y: { ...MOOD_POSITION_TRANSITION, delay: positionDelay },
                scale: { ...MOOD_POSITION_TRANSITION, delay: positionDelay },
                opacity: {
                  duration: foregroundExiting ? 0.26 : 0.28,
                  ease: SELECTION_HANDOFF_EASE,
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
          whileHover={reduceMotion || !center ? undefined : "hover"}
          whileFocus={reduceMotion || !center ? undefined : "focus"}
          onClick={(event) => {
            const keyboardClick = event.detail === 0;
            if (center) onSelect(item.id, keyboardClick);
            else onCenter(index, keyboardClick);
          }}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
              event.preventDefault();
              const direction = event.key === "ArrowRight" ? 1 : -1;
              onCenter(modulo(activeIndex + direction, itemCount), true);
            }
          }}
          onPointerEnter={handlePointerEnter}
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
        >
          <motion.span
            className={styles.moodCardTiltSurface}
            style={{ rotateX, rotateY, transformPerspective: 1_000 }}
            variants={{
              rest: { scale: 1, y: 0 },
              hover: { scale: 1.035, y: -8 },
              focus: { scale: 1.025, y: -5 },
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 24,
              mass: 0.74,
            }}
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
                style={{ opacity: contentOpacity }}
              >
                <span className={styles.arcCardContent}>
                  <strong className={styles.arcCardTitle}>{item.title}</strong>
                  <span className={styles.arcCardDescription}>{item.subtitle}</span>
                </span>
                <motion.span
                  className={styles.moodIllustrationLayer}
                  style={{ x: illustrationX, y: illustrationY }}
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
