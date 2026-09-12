import { animate, motion, useMotionValue } from "motion/react";
import {
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  type PointerEvent,
  type ReactNode,
  type Ref,
} from "react";
import { useTiltEffect } from "../../../hooks/useTiltEffect";
import { createCardFlip, type CardFlipDirection } from "../../../lib/cardMotion";
import { CARD_CLICK_FLIP_EASE, CARD_FLIP_EASE } from "../../motion/transitions";
import { QuestCardBack } from "../QuestCardBack/QuestCardBack";
import styles from "./InteractiveQuestCard.module.css";

export const COMPLETION_FLIP_DURATION_MS = 1_200;
const CLICK_FLIP_DURATION_MS = 720;
const CARD_TRIPLE_CLICK_WINDOW_MS = 520;

type CompletionCallbacks = { onHidden: () => void; onReveal: () => void };
export type InteractiveQuestCardHandle = {
  complete: (callbacks: CompletionCallbacks) => void;
  pulse: (direction: number) => void;
};

type Props = {
  ref?: Ref<InteractiveQuestCardHandle>;
  hitAreaRef?: Ref<HTMLElement>;
  children: ReactNode;
  overlay?: ReactNode;
  controls?: ReactNode;
  className?: string;
  label: string;
  reduceMotion: boolean;
  flipOnClick?: "single" | "triple" | false;
  press?: boolean;
  disabled?: boolean;
  hoverEnabled?: boolean;
  floating?: boolean;
  floatPaused?: boolean;
  showBack?: boolean;
  onPointerLeave?: (event: PointerEvent<HTMLElement>) => void;
  onActivate?: () => void;
};

export function InteractiveQuestCard({
  ref,
  hitAreaRef,
  children,
  overlay,
  controls,
  className,
  label,
  reduceMotion,
  flipOnClick = false,
  press = true,
  disabled = false,
  hoverEnabled = true,
  floating = false,
  floatPaused = false,
  showBack = true,
  onPointerLeave,
  onActivate,
}: Props) {
  const [cardFlipActive, setCardFlipActive] = useState(false);
  const cardClickTimesRef = useRef<number[]>([]);
  const cardFlipAnimationRef = useRef<{ stop: () => void } | null>(null);
  const cardFlipDirectionRef = useRef<CardFlipDirection>(1);
  const pulseRotation = useMotionValue(0);
  const pulseAnimationRef = useRef<{ stop: () => void } | null>(null);
  const {
    handlePointerEnter,
    handlePointerDown,
    handlePointerLeave,
    handlePointerMove,
    handlePointerUp,
    freezeTilt,
    unfreezeTilt,
    rotateX,
    rotateY,
    scale,
  } = useTiltEffect({
    hoverScale: 1.012,
    maxTilt: 16,
    press: press
      ? {
          maxTilt: 30,
          onStart: (direction) => {
            cardFlipDirectionRef.current = direction;
          },
          scale: 0.985,
        }
      : undefined,
    reduceMotion,
  });

  const startFlip = useCallback(
    (
      direction: CardFlipDirection,
      completion?: { onHidden: () => void; onReveal: () => void },
    ) => {
      const flipDirection = cardFlipAnimationRef.current
        ? cardFlipDirectionRef.current
        : direction;
      cardFlipDirectionRef.current = flipDirection;
      cardFlipAnimationRef.current?.stop();
      freezeTilt();
      const poseAt = createCardFlip(flipDirection, {
        rotateX: rotateX.get(),
        rotateY: rotateY.get(),
        scale: scale.get(),
      });
      let prepared = false;
      let revealed = false;
      const prepareResult = () => {
        if (!completion || prepared) return;
        prepared = true;
        completion.onHidden();
      };
      const revealResult = () => {
        if (!completion || revealed) return;
        prepareResult();
        revealed = true;
        completion.onReveal();
      };
      const finish = () => {
        rotateX.set(0);
        rotateY.set(0);
        scale.set(1);
        revealResult();
        cardFlipAnimationRef.current = null;
        setCardFlipActive(false);
        if (!completion) unfreezeTilt();
      };

      if (reduceMotion) {
        finish();
        return;
      }

      setCardFlipActive(true);
      cardFlipAnimationRef.current = animate(0, 1, {
        duration:
          (completion ? COMPLETION_FLIP_DURATION_MS : CLICK_FLIP_DURATION_MS) /
          1_000,
        ease: completion ? CARD_FLIP_EASE : CARD_CLICK_FLIP_EASE,
        onUpdate: (progress) => {
          const pose = poseAt(progress);
          rotateX.set(pose.rotateX);
          rotateY.set(pose.rotateY);
          scale.set(pose.scale);
          const angle = ((pose.rotateY % 360) + 360) % 360;
          const frontHidden = angle >= 90 && angle <= 270;
          if (frontHidden) prepareResult();
          else if (prepared) revealResult();
        },
        onComplete: finish,
      });
    },
    [
      scale,
      rotateX,
      rotateY,
      freezeTilt,
      reduceMotion,
      unfreezeTilt,
    ],
  );

  const handleCardClick = useCallback(() => {
    if (!disabled) onActivate?.();
    if (
      reduceMotion ||
      disabled ||
      !flipOnClick ||
      cardFlipActive
    )
      return;

    const now = performance.now();
    const recentClicks = cardClickTimesRef.current.filter(
      (clickedAt) => now - clickedAt <= CARD_TRIPLE_CLICK_WINDOW_MS,
    );
    recentClicks.push(now);

    if (recentClicks.length >= (flipOnClick === "single" ? 1 : 3)) {
      cardClickTimesRef.current = [];
      startFlip(cardFlipDirectionRef.current);
      return;
    }

    cardClickTimesRef.current = recentClicks;
  }, [
    cardFlipActive,
    disabled,
    flipOnClick,
    reduceMotion,
    startFlip,
    onActivate,
  ]);

  useImperativeHandle(
    ref,
    () => ({
      complete: (callbacks) => startFlip(1, callbacks),
      pulse: (direction) => {
        pulseAnimationRef.current?.stop();
        if (reduceMotion) {
          pulseRotation.set(0);
          return;
        }
        pulseAnimationRef.current = animate(pulseRotation, 0, {
          type: "spring",
          stiffness: 500,
          damping: 12,
          velocity: direction * 75,
        });
      },
    }),
    [startFlip, reduceMotion, pulseRotation],
  );

  useEffect(() => () => {
    cardFlipAnimationRef.current?.stop();
    pulseAnimationRef.current?.stop();
  }, []);

  return (
    <article
      ref={hitAreaRef}
      className={[styles.hitArea, className].filter(Boolean).join(" ")}
      aria-label={label}
      data-sound-card
      data-flow-focus
      data-sound-skip={!hoverEnabled || disabled || undefined}
      data-flipping={cardFlipActive || undefined}
      data-floating={(floating && !reduceMotion) || undefined}
      data-float-paused={floatPaused || cardFlipActive || undefined}
      tabIndex={onActivate ? 0 : -1}
      role={onActivate ? "button" : undefined}
      onKeyDown={(event) => {
        if (!onActivate || disabled || (event.key !== "Enter" && event.key !== " ")) return;
        event.preventDefault();
        handleCardClick();
      }}
      onPointerEnter={(event) => {
        if (hoverEnabled && !disabled && !cardFlipActive)
          handlePointerEnter(event);
      }}
      onPointerDown={(event) => {
        if (!disabled && !cardFlipActive) handlePointerDown(event);
      }}
      onPointerMove={(event) => {
        if (hoverEnabled && !disabled && !cardFlipActive)
          handlePointerMove(event);
      }}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerLeave}
      onPointerLeave={(event) => {
        handlePointerLeave(event);
        onPointerLeave?.(event);
      }}
      onClick={handleCardClick}
    >
      <motion.div className={styles.float} style={{ rotate: pulseRotation }}>
        <motion.div className={styles.surface} style={{ rotateX, rotateY, scale }}>
          <div className={styles.front}>
            {children}
            {overlay}
          </div>
          {showBack && <QuestCardBack className={styles.back} />}
        </motion.div>
      </motion.div>
      {controls}
    </article>
  );
}
