import {
  AnimatePresence,
  animate,
  motion,
  type PanInfo,
  type Variants,
  useMotionValue,
  useMotionValueEvent,
  useSpring,
} from "motion/react";
import NumberFlow, {
  NumberFlowGroup,
  type Format,
} from "@number-flow/react";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { useTiltEffect } from "../hooks/useTiltEffect";
import {
  type Quest,
  type QuestSession,
} from "../stores/useQuestStore";
import {
  MODIFIERS,
  modifierFitsObjective,
} from "../data/decks";
import { getCardAccentStyle } from "../data/questColors";
import { CARD_LAYOUT_TRANSITION } from "../lib/cardMotion";
import { formatRunningDuration } from "../lib/format";
import { playSound } from "../lib/sound";
import { CompletionCheckIcon } from "./CompletionCheckIcon";
import {
  CheckIcon,
  ModifierIcon,
  SparkIcon,
  TargetIcon,
  TimerIcon,
} from "./Icons";
import { QuestCardBack } from "./QuestCardBack";
import {
  PAUSED_TIMER_TOP_RATIO,
  PhysicsRope,
  READY_TIMER_TOP_RATIO,
  RESUME_PULLBACK_TIMER_TOP_RATIO,
  RUNNING_TIMER_TOP_RATIO,
  type RopeCut,
  type RopeMode,
  type RopePoint,
  type RopeRelease,
  type TimerPose,
} from "./PhysicsRope";
import styles from "../App.module.css";

type Props = {
  quest: Quest;
  session: QuestSession;
  reduceMotion: boolean;
  onToggleModifier: (modifierId: string) => void;
  onDiscard: () => void;
  onStart: (startedAt: number) => void;
  onPause: (pausedAt: number) => void;
  onResume: (resumedAt: number) => void;
  onComplete: (durationMs: number) => void;
};

type Phase = "ready" | "running" | "paused" | "cutting" | "completed";
type Point = { x: number; y: number };

const PAUSE_PULL_DISTANCE = 44;
const COMPLETION_FLIP_DURATION_MS = 740;
const COMPLETION_FACE_REVEAL_MS = 340;
const COMPLETION_HOLD_DURATION_MS = 1500;
const CUT_TRAIL_CLEAR_DELAY_MS = 210;
const CUT_TRAIL_FADE_DURATION_MS = 60;
const CUT_TRAIL_MAX_WIDTH_PX = 10;
const CUT_TRAIL_WIDTH_PEAK = 0.75;
const CARD_FOCUS_DISMISS_DISTANCE = 96;
const CARD_FOCUS_DISMISS_VELOCITY = 700;
const MOBILE_VIEWPORT_QUERY = "(max-width: 820px)";
const TIMER_TWO_DIGIT_FORMAT: Format = {
  minimumIntegerDigits: 2,
};
const TIMER_BASE_SIXTY_DIGITS = {
  1: { max: 5 },
};

const pausePanelVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.035,
      duration: 0.16,
      staggerChildren: 0.075,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.14,
      staggerChildren: 0.045,
      staggerDirection: -1,
    },
  },
};

const pausePanelItemVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    transition: { duration: 0.18, ease: "easeOut" },
    y: 0,
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.14, ease: "easeOut" },
    y: 6,
  },
};

export function ActiveTaskCard({
  quest,
  session,
  reduceMotion,
  onToggleModifier,
  onDiscard,
  onStart,
  onPause,
  onResume,
  onComplete,
}: Props) {
  const task = quest;
  const assignment = session;
  const initiallyReady = assignment.startedAt === null;
  const initiallyPaused =
    assignment.startedAt !== null && assignment.pausedAt !== null;
  const [phase, setPhase] = useState<Phase>(
    initiallyReady ? "ready" : initiallyPaused ? "paused" : "running",
  );
  const isMobileViewport = useMobileViewport();
  const [cardFocused, setCardFocused] = useState(false);
  const [cardHoverArmed, setCardHoverArmed] = useState(false);
  const [ropeMode, setRopeMode] = useState<RopeMode>(
    initiallyReady ? "ready" : initiallyPaused ? "paused" : "running",
  );
  const readyEntranceDropRef = useRef(false);
  const [timerSettling, setTimerSettling] = useState(
    readyEntranceDropRef.current,
  );
  const [timerEntranceSettling, setTimerEntranceSettling] = useState(
    readyEntranceDropRef.current,
  );
  const [cut, setCut] = useState<RopeCut | null>(null);
  const [showFinishedFace, setShowFinishedFace] = useState(false);
  const [completionOffset, setCompletionOffset] = useState<Point>({
    x: 0,
    y: 0,
  });
  const [elapsedMs, setElapsedMs] = useState(() =>
    elapsedForAssignment(assignment, Date.now()),
  );
  const elapsedSeconds = Math.max(0, Math.floor(elapsedMs / 1_000));
  const timerHours = Math.floor(elapsedSeconds / 3_600);
  const timerMinutes = Math.floor((elapsedSeconds % 3_600) / 60);
  const timerSeconds = elapsedSeconds % 60;
  const [animateReveal] = useState(
    () => !reduceMotion && Date.now() - assignment.revealedAt < 1_500,
  );
  const revealSoundPlayedRef = useRef(false);
  const [revealFinished, setRevealFinished] = useState(!animateReveal);
  const [cutTrail, setCutTrail] = useState<Point[] | null>(null);
  const dropOnStartRef = useRef(
    readyEntranceDropRef.current ||
      (!initiallyReady &&
        !initiallyPaused &&
        !reduceMotion &&
        assignment.startedAt !== null &&
        Date.now() - assignment.startedAt < 2500),
  );
  const initialTimerOffsetRef = useRef<RopePoint>(
    initialTimerOffset(
      dropOnStartRef.current,
      initiallyReady
        ? READY_TIMER_TOP_RATIO
        : initiallyPaused
          ? PAUSED_TIMER_TOP_RATIO
          : RUNNING_TIMER_TOP_RATIO,
    ),
  );
  const rigRef = useRef<HTMLDivElement>(null);
  const cardProjectionRef = useRef<HTMLDivElement>(null);
  const cardHitAreaRef = useRef<HTMLElement>(null);
  const cardFocusTriggerRef = useRef<HTMLButtonElement>(null);
  const cardFocusBackdropRef = useRef<HTMLButtonElement>(null);
  const ropePointsRef = useRef<RopePoint[]>([]);
  const ropeTargetRef = useRef<RopePoint>(initialTimerOffsetRef.current);
  const timerDraggingRef = useRef(false);
  const timerDragVelocityRef = useRef<RopePoint>({ x: 0, y: 0 });
  const ropeReleaseRef = useRef<RopeRelease | null>(null);
  const ropeReleaseSequenceRef = useRef(0);
  const dragOriginRef = useRef<RopePoint>(initialTimerOffsetRef.current);
  const dragTargetRef = useRef<RopePoint>(initialTimerOffsetRef.current);
  const timerReturningRef = useRef(false);
  const timerReturnModeRef = useRef<RopeMode>(
    initiallyReady ? "ready" : initiallyPaused ? "paused" : "running",
  );
  const timerReturnStartedAtRef = useRef(0);
  const timerReturnLastAtRef = useRef(0);
  const timerReturnVelocityRef = useRef<RopePoint>({ x: 0, y: 0 });
  const timerEntranceStartedAtRef = useRef(0);
  const timerAnimationRef = useRef<Array<{ stop: () => void }>>([]);
  const timerAnimationSequenceRef = useRef(0);
  const resumePendingRef = useRef(false);
  const startPendingRef = useRef(false);
  const startedAtRef = useRef<number | null>(assignment.startedAt);
  const pausedAtRef = useRef<number | null>(assignment.pausedAt);
  const pausedTotalRef = useRef(assignment.pausedTotalMs);
  const cutGestureRef = useRef(false);
  const exitStartedRef = useRef(false);
  const lastCutPointRef = useRef<Point | null>(null);
  const trailClearTimeoutRef = useRef<number | null>(null);
  const exitTimeoutRef = useRef<number | null>(null);
  const completionRevealTimeoutRef = useRef<number | null>(null);
  const x = useMotionValue(initialTimerOffsetRef.current.x);
  const y = useMotionValue(initialTimerOffsetRef.current.y);
  const timerRotationTarget = useMotionValue(0);
  const timerRotation = useSpring(timerRotationTarget, {
    stiffness: 175,
    damping: 18,
    mass: 0.72,
  });
  const {
    handlePointerEnter: handleCardPointerEnter,
    handlePointerLeave: handleCardPointerLeave,
    handlePointerMove: handleCardPointerMove,
    rotateX: cardRotateX,
    rotateY: cardRotateY,
  } = useTiltEffect({
    maxTilt: 16,
    reduceMotion,
  });

  const readElapsed = useCallback(() => {
    if (startedAtRef.current === null) return 0;
    const now = Date.now();
    const openPause =
      pausedAtRef.current === null ? 0 : now - pausedAtRef.current;
    return Math.max(
      0,
      now - startedAtRef.current - pausedTotalRef.current - openPause,
    );
  }, []);

  useEffect(() => {
    if (phase === "ready") {
      setElapsedMs(0);
      return;
    }
    const update = () => setElapsedMs(readElapsed());
    update();
    const interval = window.setInterval(update, 250);
    return () => window.clearInterval(interval);
  }, [phase, readElapsed]);

  useEffect(() => {
    if (!cardFocused) return;

    if (!isMobileViewport || phase === "cutting" || phase === "completed") {
      setCardFocused(false);
      return;
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setCardFocused(false);
      window.requestAnimationFrame(() => cardFocusTriggerRef.current?.focus());
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [cardFocused, isMobileViewport, phase]);

  useEffect(() => {
    if (!cardFocused) return;
    const frame = window.requestAnimationFrame(() => {
      cardFocusBackdropRef.current?.focus();
    });
    return () => window.cancelAnimationFrame(frame);
  }, [cardFocused]);

  useEffect(() => {
    if (cardHoverArmed) return;

    function armHoverOutsideCard(event: PointerEvent) {
      if (event.pointerType !== "mouse") return;
      const card = cardHitAreaRef.current;
      const target = event.target;
      if (card && target instanceof Node && card.contains(target)) return;
      setCardHoverArmed(true);
    }

    window.addEventListener("pointermove", armHoverOutsideCard, {
      passive: true,
    });
    return () => window.removeEventListener("pointermove", armHoverOutsideCard);
  }, [cardHoverArmed]);

  const updateRope = useCallback(() => {
    ropeTargetRef.current = { x: x.get(), y: y.get() };
  }, [x, y]);

  useMotionValueEvent(x, "change", updateRope);
  useMotionValueEvent(y, "change", updateRope);

  useEffect(() => {
    updateRope();
  }, [updateRope]);

  useEffect(
    () => () => {
      if (trailClearTimeoutRef.current !== null) {
        window.clearTimeout(trailClearTimeoutRef.current);
      }
      if (exitTimeoutRef.current !== null) {
        window.clearTimeout(exitTimeoutRef.current);
      }
      if (completionRevealTimeoutRef.current !== null) {
        window.clearTimeout(completionRevealTimeoutRef.current);
      }
      timerAnimationSequenceRef.current += 1;
      timerAnimationRef.current.forEach((control) => control.stop());
    },
    [],
  );

  function stopTimerAnimation() {
    timerAnimationSequenceRef.current += 1;
    timerAnimationRef.current.forEach((control) => control.stop());
    timerAnimationRef.current = [];
  }

  function queueRopeRelease(
    mode: RopeMode,
    offset: RopePoint,
    velocity: RopePoint,
    preserveOffset = false,
  ) {
    ropeReleaseSequenceRef.current += 1;
    ropeReleaseRef.current = {
      mode,
      offset,
      preserveOffset,
      sequence: ropeReleaseSequenceRef.current,
      velocity,
    };
  }

  function beginPhysicalReturn(
    mode: RopeMode,
    offset: RopePoint,
    velocity: RopePoint,
  ) {
    stopTimerAnimation();
    const now = performance.now();
    timerReturningRef.current = true;
    timerReturnModeRef.current = mode;
    timerReturnStartedAtRef.current = now;
    timerReturnLastAtRef.current = now;
    timerReturnVelocityRef.current = {
      x: Math.max(-900, Math.min(900, velocity.x)) * 0.14,
      y: Math.max(-900, Math.min(900, velocity.y)) * 0.14,
    };
    setTimerSettling(true);
    queueRopeRelease(mode, offset, velocity);
  }

  function settleTimerTo(target: RopePoint, velocity: RopePoint) {
    stopTimerAnimation();
    const sequence = timerAnimationSequenceRef.current;
    const springVelocity = {
      x: Math.max(-900, Math.min(900, velocity.x)),
      y: Math.max(-900, Math.min(900, velocity.y)),
    };
    setTimerSettling(true);

    if (reduceMotion) {
      x.set(target.x);
      y.set(target.y);
      timerDraggingRef.current = false;
      setTimerSettling(false);
      return;
    }

    const xControl = animate(x, target.x, {
      type: "spring",
      stiffness: 235,
      damping: 24,
      mass: 0.82,
      velocity: springVelocity.x,
    });
    const yControl = animate(y, target.y, {
      type: "spring",
      stiffness: 235,
      damping: 24,
      mass: 0.82,
      velocity: springVelocity.y,
    });
    timerAnimationRef.current = [xControl, yControl];

    Promise.all([xControl, yControl]).then(() => {
      if (timerAnimationSequenceRef.current !== sequence) return;
      timerAnimationRef.current = [];
      timerDraggingRef.current = false;
      setTimerSettling(false);
    });
  }

  function pause() {
    if (pausedAtRef.current !== null || phase !== "running") return;
    playSound("toggleOff");
    const pausedAt = Date.now();
    pausedAtRef.current = pausedAt;
    onPause(pausedAt);
    setElapsedMs(readElapsed());
    setRopeMode("paused");
    setPhase("paused");
  }

  function startFromButton() {
    if (phase !== "ready" || startedAtRef.current !== null) return;
    const startedAt = Date.now();
    const entranceOffset = initialTimerOffset(
      !reduceMotion,
      RUNNING_TIMER_TOP_RATIO,
    );
    startedAtRef.current = startedAt;
    pausedAtRef.current = null;
    playSound("toggleOn");
    x.set(entranceOffset.x);
    y.set(entranceOffset.y);
    ropeTargetRef.current = entranceOffset;
    timerRotationTarget.set(0);
    timerEntranceStartedAtRef.current = performance.now();
    setTimerEntranceSettling(!reduceMotion);
    setTimerSettling(!reduceMotion);
    setRopeMode("running");
    setPhase("running");
    onStart(startedAt);
  }

  function finishPullback(pose: TimerPose) {
    if (!resumePendingRef.current && !startPendingRef.current) return;
    const starting = startPendingRef.current;
    const capturedStartedAt = starting ? startedAtRef.current : null;
    resumePendingRef.current = false;
    startPendingRef.current = false;
    playSound("toggleOn");
    if (!starting && pausedAtRef.current !== null) {
      const resumedAt = Date.now();
      pausedTotalRef.current += resumedAt - pausedAtRef.current;
      pausedAtRef.current = null;
      onResume(resumedAt);
    }
    const offset = { x: pose.x, y: pose.y };
    x.set(offset.x);
    y.set(offset.y);
    ropeTargetRef.current = offset;
    timerDraggingRef.current = false;
    timerReturningRef.current = false;
    setTimerSettling(false);
    queueRopeRelease("running", offset, pose.velocity, true);
    setRopeMode("running");
    setPhase("running");
    if (capturedStartedAt !== null) onStart(capturedStartedAt);
  }

  function beginExit(next: "cutting" | "completed", ropeCut?: RopeCut) {
    if (exitStartedRef.current || phase === "cutting" || phase === "completed")
      return;
    if (next === "cutting" && !ropeCut) return;
    if (next === "cutting") playSound("cut");
    else if (!reduceMotion) playSound("cardFlip");
    stopTimerAnimation();
    timerReturningRef.current = false;
    timerDraggingRef.current = false;
    setTimerSettling(false);
    exitStartedRef.current = true;
    if (pausedAtRef.current === null) pausedAtRef.current = Date.now();
    const duration = readElapsed();
    if (next === "cutting") {
      setCut(ropeCut ?? null);
    }
    setElapsedMs(duration);
    if (next === "completed") {
      const cardRect = cardProjectionRef.current?.getBoundingClientRect();
      if (cardRect) {
        setCompletionOffset({
          x: window.innerWidth / 2 - (cardRect.left + cardRect.width / 2),
          y: window.innerHeight / 2 - (cardRect.top + cardRect.height / 2),
        });
      }
      setShowFinishedFace(reduceMotion);
      if (reduceMotion) {
        playSound("completion");
      } else {
        completionRevealTimeoutRef.current = window.setTimeout(() => {
          setShowFinishedFace(true);
          playSound("completion");
          completionRevealTimeoutRef.current = null;
        }, COMPLETION_FACE_REVEAL_MS);
      }
    }
    setPhase(next);
    exitTimeoutRef.current = window.setTimeout(
      () => {
        if (next === "completed") onComplete(duration);
        else onDiscard();
      },
      next === "completed"
        ? reduceMotion
          ? COMPLETION_HOLD_DURATION_MS
          : COMPLETION_FLIP_DURATION_MS + COMPLETION_HOLD_DURATION_MS
        : reduceMotion
          ? 80
          : 1200,
    );
  }

  function onTimerDrag(
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) {
    timerDragVelocityRef.current = info.velocity;
    const requestedX = dragOriginRef.current.x + info.offset.x;
    const requestedY = dragOriginRef.current.y + info.offset.y;
    const constrained = constrainTimerOffset(
      requestedX,
      requestedY,
      rigRef.current?.clientHeight ?? window.innerHeight,
      dragOriginRef.current,
    );
    dragTargetRef.current = constrained;
    x.set(constrained.x);
    y.set(constrained.y);
  }

  function settleTimerPull(
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) {
    const rigHeight = rigRef.current?.clientHeight ?? window.innerHeight;
    const requested = dragTargetRef.current;
    const pullDistance = timerPullExtension(
      dragOriginRef.current,
      requested,
      rigHeight,
    );
    const readyPullDistance = Math.max(pullDistance, info.offset.y);
    const shouldPause =
      phase === "running" && pullDistance >= PAUSE_PULL_DISTANCE;
    const shouldResume =
      phase === "paused" && pullDistance >= PAUSE_PULL_DISTANCE;
    const shouldStart =
      phase === "ready" && readyPullDistance >= PAUSE_PULL_DISTANCE;
    const destinationMode: RopeMode =
      shouldResume || shouldStart
        ? "resumePullback"
        : shouldPause
          ? "paused"
          : ropeMode;
    const retracted = projectTimerToRope(requested, destinationMode, rigHeight);

    if (shouldPause) pause();
    if (shouldResume) {
      resumePendingRef.current = true;
      setRopeMode("resumePullback");
    }
    if (shouldStart) {
      const startedAt = Date.now();
      startedAtRef.current = startedAt;
      startPendingRef.current = true;
      setRopeMode("resumePullback");
    }

    timerDragVelocityRef.current = info.velocity;
    beginPhysicalReturn(destinationMode, retracted, info.velocity);
  }

  function pointerInRig(event: ReactPointerEvent<HTMLDivElement>): Point {
    const rect = event.currentTarget.getBoundingClientRect();
    return { x: event.clientX - rect.left, y: event.clientY - rect.top };
  }

  function startCut(event: ReactPointerEvent<HTMLDivElement>) {
    const target = event.target as HTMLElement;
    if (
      exitStartedRef.current ||
      phase === "ready" ||
      target.closest("button") ||
      target.closest("[data-timer-drag]")
    )
      return;
    if (trailClearTimeoutRef.current !== null) {
      window.clearTimeout(trailClearTimeoutRef.current);
      trailClearTimeoutRef.current = null;
    }
    cutGestureRef.current = true;
    const point = pointerInRig(event);
    lastCutPointRef.current = point;
    setCutTrail([point]);
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function moveCut(event: ReactPointerEvent<HTMLDivElement>) {
    if (!cutGestureRef.current || !lastCutPointRef.current) return;
    const point = pointerInRig(event);
    const previous = lastCutPointRef.current;
    lastCutPointRef.current = point;
    setCutTrail((trail) => appendTrailPoint(trail ?? [previous], point));
    const ropeCut = exitStartedRef.current
      ? null
      : segmentCutsRope(previous, point, ropePointsRef.current);
    if (ropeCut) {
      beginExit("cutting", ropeCut);
    }
  }

  function endCut() {
    cutGestureRef.current = false;
    lastCutPointRef.current = null;
    clearCutTrailAfter(CUT_TRAIL_CLEAR_DELAY_MS);
  }

  function clearCutTrailAfter(delay: number) {
    if (trailClearTimeoutRef.current !== null) {
      window.clearTimeout(trailClearTimeoutRef.current);
    }
    trailClearTimeoutRef.current = window.setTimeout(() => {
      setCutTrail(null);
      trailClearTimeoutRef.current = null;
    }, delay);
  }

  const syncTimerToPhysics = useCallback(
    (pose: TimerPose) => {
      timerRotationTarget.set(reduceMotion ? 0 : pose.rotation);

      if (timerEntranceSettling && pose.mode === "running") {
        const now = performance.now();
        if (timerEntranceStartedAtRef.current === 0) {
          timerEntranceStartedAtRef.current = now;
        }
        const elapsed = now - timerEntranceStartedAtRef.current;
        const distanceFromRest = Math.hypot(pose.x, pose.y);
        const speed = Math.hypot(pose.velocity.x, pose.velocity.y);
        const physicallySettled =
          elapsed > 480 && distanceFromRest < 22 && speed < 130;

        if (physicallySettled || elapsed > 2_400) {
          setTimerEntranceSettling(false);
          setTimerSettling(false);
        }
      }

      if (
        timerReturningRef.current &&
        pose.mode === timerReturnModeRef.current
      ) {
        const now = performance.now();
        const elapsed = now - timerReturnStartedAtRef.current;
        if (reduceMotion) {
          x.set(pose.x);
          y.set(pose.y);
          timerReturningRef.current = false;
          timerDraggingRef.current = false;
          setTimerSettling(false);
          finishPullback(pose);
          return;
        }

        const delta = Math.min(
          1 / 30,
          Math.max(1 / 240, (now - timerReturnLastAtRef.current) / 1000),
        );
        timerReturnLastAtRef.current = now;
        const velocity = timerReturnVelocityRef.current;
        const stiffness = 125;
        const damping = 16;
        const nextVelocity = {
          x:
            velocity.x +
            ((pose.x - x.get()) * stiffness - velocity.x * damping) * delta,
          y:
            velocity.y +
            ((pose.y - y.get()) * stiffness - velocity.y * damping) * delta,
        };
        const nextX = x.get() + nextVelocity.x * delta;
        const nextY = y.get() + nextVelocity.y * delta;
        timerReturnVelocityRef.current = nextVelocity;
        x.set(nextX);
        y.set(nextY);

        const remainingDistance = Math.hypot(pose.x - nextX, pose.y - nextY);
        if ((elapsed > 280 && remainingDistance < 4.5) || elapsed > 620) {
          x.set(pose.x);
          y.set(pose.y);
          timerReturningRef.current = false;
          timerDraggingRef.current = false;
          setTimerSettling(false);
          finishPullback(pose);
        }
        return;
      }

      if (!timerDraggingRef.current) {
        x.set(pose.x);
        y.set(pose.y);
      }
    },
    [reduceMotion, timerEntranceSettling, timerRotationTarget, x, y],
  );

  const exiting = phase === "cutting" || phase === "completed";
  const completed = phase === "completed";
  const timerVisible =
    phase === "running" ||
    phase === "paused" ||
    phase === "cutting" ||
    phase === "completed";
  const cardFocusAvailable = isMobileViewport && revealFinished && !exiting;

  useEffect(() => {
    if (!animateReveal || revealSoundPlayedRef.current) return;
    revealSoundPlayedRef.current = true;
    playSound("cardFlip");
  }, [animateReveal]);

  function closeCardFocus() {
    setCardFocused(false);
    window.requestAnimationFrame(() => cardFocusTriggerRef.current?.focus());
  }

  function finishCardFocusDrag(
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) {
    if (!cardFocused) return;
    const distance = Math.hypot(info.offset.x, info.offset.y);
    const velocity = Math.hypot(info.velocity.x, info.velocity.y);
    if (
      distance >= CARD_FOCUS_DISMISS_DISTANCE ||
      velocity >= CARD_FOCUS_DISMISS_VELOCITY
    ) {
      closeCardFocus();
    }
  }

  return (
    <div
      className={styles.activeExperience}
      data-card-focused={cardFocused ? "true" : undefined}
      data-phase={phase}
      data-reveal-complete={revealFinished ? "true" : undefined}
      data-timer-entrance={timerEntranceSettling ? "dropping" : "settled"}
      data-rope-mode={ropeMode}
    >
      <AnimatePresence>
        {cardFocused && (
          <motion.button
            ref={cardFocusBackdropRef}
            className={styles.cardFocusBackdrop}
            type="button"
            aria-label="Close focused quest card"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.22 }}
            onClick={closeCardFocus}
          />
        )}
      </AnimatePresence>

      <div
        className={styles.activeCardStage}
        style={getCardAccentStyle(task.id)}
      >
        <motion.div
          ref={cardProjectionRef}
          className={styles.activeCardProjection}
          layoutId={`task-card-${task.id}`}
          layoutCrossfade={false}
          drag={cardFocused}
          dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
          dragElastic={0.5}
          dragMomentum={false}
          dragTransition={{ bounceStiffness: 320, bounceDamping: 28 }}
          onDragEnd={finishCardFocusDrag}
          whileDrag={{ scale: reduceMotion ? 1 : 1.018 }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : {
                  type: "spring",
                  stiffness: 220,
                  damping: 23,
                  mass: 0.96,
                  layout: CARD_LAYOUT_TRANSITION,
                  scale: {
                    duration: COMPLETION_FLIP_DURATION_MS / 1000,
                    ease: [0.42, 0, 0.18, 1],
                  },
                  x: {
                    duration: 0.62,
                    ease: [0.22, 0.8, 0.24, 1],
                  },
                  y: {
                    duration: 0.62,
                    ease: [0.22, 0.8, 0.24, 1],
                  },
                }
          }
          initial={false}
          animate={{
            scale: completed ? 1.025 : 1,
            x: completed ? completionOffset.x : 0,
            y: completed ? completionOffset.y : 0,
            rotate: cardFocused ? 0 : completed ? -2 : -3.5,
          }}
        >
          <motion.div
            className={styles.revealFlip}
            initial={{ rotateY: animateReveal ? 0 : 180 }}
            animate={{ rotateY: 180 }}
            transition={
              animateReveal
                ? {
                    duration: 0.68,
                    ease: [0.55, 0.06, 0.15, 0.86],
                  }
                : { duration: 0 }
            }
            onAnimationComplete={() => {
              if (readyEntranceDropRef.current) {
                timerEntranceStartedAtRef.current = performance.now();
              }
              setRevealFinished(true);
            }}
          >
            <div
              className={`${styles.activeQuestCard} ${styles.revealBack}`}
              aria-hidden="true"
            >
              <QuestCardBack motivation={task.motivation} />
            </div>

            <div className={styles.revealFront}>
              <div
                className={styles.completionFlip}
                data-flipping={completed && !reduceMotion ? "true" : undefined}
              >
                <article
                  ref={cardHitAreaRef}
                  className={styles.activeCardHitArea}
                  data-sound-card
                  data-hover-ready={cardHoverArmed ? "true" : undefined}
                  data-sound-skip={cardHoverArmed ? undefined : "true"}
                  onPointerEnter={(event) => {
                    if (cardHoverArmed) handleCardPointerEnter(event);
                  }}
                  onPointerMove={(event) => {
                    if (cardHoverArmed) handleCardPointerMove(event);
                  }}
                  onPointerLeave={(event) => {
                    handleCardPointerLeave(event);
                    if (event.pointerType === "mouse") setCardHoverArmed(true);
                  }}
                  onPointerOut={(event) => {
                    handleCardPointerLeave(event);
                  }}
                  aria-label={`Active ${task.mood.displayName} quest: ${task.title}`}
                >
                  <motion.div
                    className={styles.activeQuestCard}
                    data-completed={showFinishedFace || undefined}
                    style={{
                      rotateX: completed ? 0 : cardRotateX,
                      rotateY: completed ? 0 : cardRotateY,
                      transformPerspective: 1000,
                    }}
                  >
                    <span className={styles.cardShimmer} aria-hidden="true" />
                    <header className={styles.questCardHeader}>
                      <h2 className={styles.activeTitle}>{task.title}</h2>
                      <span className={styles.questDuration}>
                        <TimerIcon />
                        {task.sessionMinutes[0]}–{task.sessionMinutes[1]}
                      </span>
                    </header>

                    <motion.div className={styles.questDetails} initial={false}>
                      <p className={styles.questObjective}>{task.objective}</p>
                      <ul
                        className={styles.questSupportDetails}
                        aria-label="Quest details"
                      >
                        <li className={styles.questSupportItem}>
                          <TargetIcon />
                          <p>{task.goal}</p>
                        </li>
                        <li className={styles.questSupportItem}>
                          <SparkIcon />
                          <p>{task.reward}</p>
                        </li>
                        {task.modifiers.map((modifier) => (
                          <li
                            className={styles.questSupportItem}
                            key={modifier.id}
                          >
                            <CheckIcon />
                            <div>
                              <strong>{modifier.title}</strong>
                              <p>{modifier.instruction}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </motion.div>

                    {!showFinishedFace && (
                      <span className={styles.cardBrand} aria-hidden="true">
                        <img
                          src={`${import.meta.env.BASE_URL}sidequest-wordmark.svg`}
                          alt=""
                          width="837"
                          height="550"
                        />
                      </span>
                    )}

                    <AnimatePresence>
                      {showFinishedFace && (
                        <motion.div
                          className={styles.completionOverlay}
                          role="status"
                          aria-live="polite"
                          initial={reduceMotion ? false : { opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: reduceMotion ? 0 : 0.24 }}
                        >
                          <motion.div
                            className={styles.completionMark}
                            initial={
                              reduceMotion ? false : { opacity: 0, y: 16 }
                            }
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 24,
                            }}
                          >
                            <CompletionCheckIcon />
                            <span className={styles.completionTime}>
                              <strong>
                                {formatRunningDuration(elapsedMs)}
                              </strong>
                            </span>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                  {cardFocusAvailable && !cardFocused && (
                    <button
                      ref={cardFocusTriggerRef}
                      className={styles.cardFocusTrigger}
                      type="button"
                      aria-label={`Focus quest card: ${task.title}`}
                      onClick={() => setCardFocused(true)}
                    />
                  )}
                </article>
                <div
                  className={`${styles.activeQuestCard} ${styles.completionCardBack}`}
                  aria-hidden="true"
                >
                  <QuestCardBack motivation={task.motivation} />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className={styles.timerRig}
        ref={rigRef}
        animate={{ opacity: completed || !revealFinished ? 0 : 1 }}
        transition={{ duration: reduceMotion ? 0 : 0.16, ease: "easeOut" }}
        style={{
          pointerEvents:
            completed || !revealFinished || timerEntranceSettling
              ? "none"
              : "auto",
        }}
        onPointerDown={startCut}
        onPointerMove={moveCut}
        onPointerUp={endCut}
        onPointerCancel={endCut}
      >
        {revealFinished && timerVisible && (
          <PhysicsRope
            cut={phase === "cutting" ? cut : null}
            dragVelocityRef={timerDragVelocityRef}
            draggingRef={timerDraggingRef}
            mode={ropeMode}
            onTimerMove={syncTimerToPhysics}
            reduceMotion={reduceMotion}
            releaseRef={ropeReleaseRef}
            screenPointsRef={ropePointsRef}
            targetRef={ropeTargetRef}
          />
        )}
        <svg className={styles.cutSvg} aria-hidden="true">
          <AnimatePresence>
            {cutTrail && cutTrail.length > 1 && (
              <motion.path
                className={styles.cutTrail}
                d={cutTrailShape(cutTrail)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: reduceMotion
                    ? 0
                    : CUT_TRAIL_FADE_DURATION_MS / 1000,
                }}
              />
            )}
          </AnimatePresence>
        </svg>

        <AnimatePresence>
          {timerVisible && (
            <motion.div
              className={styles.timerPosition}
              data-timer-drag
              drag={
                (phase === "running" || phase === "paused") &&
                ropeMode !== "resumePullback" &&
                !timerEntranceSettling &&
                !exiting
              }
              dragConstraints={{
                left: -190,
                right: 190,
                top: -130,
                bottom: 130,
              }}
              dragElastic={0.06}
              dragMomentum={false}
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.12 }}
              style={{ x, y }}
              onDragStart={() => {
                playSound("timerGrab");
                stopTimerAnimation();
                timerReturningRef.current = false;
                setTimerSettling(true);
                timerDraggingRef.current = true;
                timerDragVelocityRef.current = { x: 0, y: 0 };
                ropeReleaseRef.current = null;
                dragOriginRef.current = { x: x.get(), y: y.get() };
                dragTargetRef.current = dragOriginRef.current;
              }}
              onDrag={onTimerDrag}
              onDragEnd={settleTimerPull}
              whileDrag={{ scale: 1.035, cursor: "grabbing" }}
            >
              <motion.div
                className={styles.timerCapsule}
                animate={{
                  opacity: phase === "cutting" && reduceMotion ? 0 : 1,
                }}
                style={{ rotate: timerRotation }}
                transition={{ duration: reduceMotion ? 0.08 : 0.16 }}
              >
                <span className={styles.grabDots} aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
                <div
                  className={styles.elapsedTime}
                  role="timer"
                  aria-live="off"
                  aria-label={`Elapsed time ${formatRunningDuration(elapsedMs)}`}
                >
                  <NumberFlowGroup>
                    <div className={styles.timerDigits} aria-hidden="true">
                      {timerHours > 0 && (
                        <NumberFlow
                          animated={!reduceMotion}
                          format={TIMER_TWO_DIGIT_FORMAT}
                          trend={1}
                          value={timerHours}
                        />
                      )}
                      <NumberFlow
                        animated={!reduceMotion}
                        digits={TIMER_BASE_SIXTY_DIGITS}
                        format={TIMER_TWO_DIGIT_FORMAT}
                        prefix={timerHours > 0 ? ":" : undefined}
                        trend={1}
                        value={timerMinutes}
                      />
                      <NumberFlow
                        animated={!reduceMotion}
                        digits={TIMER_BASE_SIXTY_DIGITS}
                        format={TIMER_TWO_DIGIT_FORMAT}
                        prefix=":"
                        trend={1}
                        value={timerSeconds}
                      />
                    </div>
                  </NumberFlowGroup>
                </div>
              </motion.div>
              <AnimatePresence>
                {phase === "paused" && !timerSettling && (
                  <motion.span
                    className={styles.timerStatus}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: reduceMotion ? 0 : 0.12 }}
                  >
                    Paused
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {phase === "ready" && !timerSettling && (
            <motion.section
              className={styles.readyPanel}
              aria-labelledby="modifier-title"
              initial={reduceMotion ? false : "hidden"}
              animate="visible"
              exit={reduceMotion ? { opacity: 0 } : "exit"}
              variants={pausePanelVariants}
            >
              <motion.div
                className={styles.modifierIntro}
                variants={pausePanelItemVariants}
              >
                <h3 id="modifier-title">Optional modifier</h3>
                <p>Add any twists you want, or leave them all unchecked.</p>
              </motion.div>
              <motion.div
                className={styles.modifierChoices}
                role="group"
                aria-label="Optional modifier"
                variants={pausePanelItemVariants}
              >
                {MODIFIERS.filter((modifier) =>
                  modifierFitsObjective(modifier.id, task.id),
                ).map((modifier) => {
                  const selected = assignment.modifierIds.includes(modifier.id);
                  return (
                    <button
                      type="button"
                      aria-pressed={selected}
                      data-selected={selected || undefined}
                      key={modifier.id}
                      onClick={() => onToggleModifier(modifier.id)}
                    >
                      <span className={styles.modifierChoiceTop}>
                        <span
                          className={styles.modifierIcon}
                          aria-hidden="true"
                        >
                          <ModifierIcon modifierId={modifier.id} />
                        </span>
                        <span
                          className={styles.modifierCheck}
                          aria-hidden="true"
                        >
                          {selected && <CheckIcon />}
                        </span>
                      </span>
                      <span className={styles.modifierChoiceCopy}>
                        <strong>{modifier.title}</strong>
                        <small>{modifier.instruction}</small>
                      </span>
                    </button>
                  );
                })}
              </motion.div>
              <motion.button
                className={styles.startTimerAction}
                data-sound-click-skip
                type="button"
                variants={pausePanelItemVariants}
                onClick={startFromButton}
              >
                Start timer
              </motion.button>
            </motion.section>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {phase === "paused" && !timerSettling && (
            <motion.form
              className={styles.pausePanel}
              onSubmit={(event) => {
                event.preventDefault();
                beginExit("completed");
              }}
              initial={reduceMotion ? false : "hidden"}
              animate="visible"
              exit={reduceMotion ? { opacity: 0 } : "exit"}
              variants={pausePanelVariants}
            >
              <motion.button
                className={styles.saveAction}
                data-sound-click-skip
                type="submit"
                variants={pausePanelItemVariants}
              >
                Complete quest
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {!exiting && !timerSettling && (
            <motion.p
              className={styles.timerHint}
              key={phase}
              initial={reduceMotion ? false : { opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduceMotion ? 0 : -3 }}
              transition={{
                duration: reduceMotion ? 0 : 0.16,
                ease: "easeOut",
              }}
            >
              <span>
                {phase === "ready"
                  ? "Choose a modifier, then start."
                  : `Pull the timer to ${
                      phase === "paused" ? "resume" : "pause"
                    }.`}
              </span>
              <span>
                {phase === "ready"
                  ? "Cut the rope to choose another."
                  : "Cut the rope to stop."}
              </span>
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

function useMobileViewport() {
  const [isMobileViewport, setIsMobileViewport] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia(MOBILE_VIEWPORT_QUERY).matches,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(MOBILE_VIEWPORT_QUERY);
    const update = () => setIsMobileViewport(mediaQuery.matches);
    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  return isMobileViewport;
}

function appendTrailPoint(trail: Point[], point: Point) {
  const previous = trail[trail.length - 1];
  if (previous && Math.hypot(point.x - previous.x, point.y - previous.y) < 2) {
    return trail;
  }
  return [...trail.slice(-31), point];
}

function cutTrailShape(points: Point[]) {
  if (points.length < 2) return "";

  const distances = [0];
  for (let index = 1; index < points.length; index += 1) {
    const previous = points[index - 1];
    const point = points[index];
    distances.push(
      distances[index - 1] +
        Math.hypot(point.x - previous.x, point.y - previous.y),
    );
  }
  const totalDistance = distances[distances.length - 1];

  const edges = points.map((point, index) => {
    const previous = points[Math.max(0, index - 1)];
    const next = points[Math.min(points.length - 1, index + 1)];
    const tangentX = next.x - previous.x;
    const tangentY = next.y - previous.y;
    const tangentLength = Math.hypot(tangentX, tangentY) || 1;
    const progress = totalDistance === 0 ? 1 : distances[index] / totalDistance;
    const widthProgress =
      progress <= CUT_TRAIL_WIDTH_PEAK
        ? progress / CUT_TRAIL_WIDTH_PEAK
        : (1 - progress) / (1 - CUT_TRAIL_WIDTH_PEAK);
    const halfWidth = (CUT_TRAIL_MAX_WIDTH_PX / 2) * widthProgress;
    const normalX = -tangentY / tangentLength;
    const normalY = tangentX / tangentLength;

    return {
      left: {
        x: point.x + normalX * halfWidth,
        y: point.y + normalY * halfWidth,
      },
      right: {
        x: point.x - normalX * halfWidth,
        y: point.y - normalY * halfWidth,
      },
    };
  });

  const leftEdge = edges
    .map(({ left }) => `${left.x.toFixed(2)} ${left.y.toFixed(2)}`)
    .join(" L ");
  const rightEdge = [...edges]
    .reverse()
    .map(({ right }) => `${right.x.toFixed(2)} ${right.y.toFixed(2)}`)
    .join(" L ");

  return `M ${leftEdge} L ${rightEdge} Z`;
}

function segmentCutsRope(
  a: Point,
  b: Point,
  ropePoints: RopePoint[],
): RopeCut | null {
  if (ropePoints.length < 2 || Math.hypot(b.x - a.x, b.y - a.y) < 3)
    return null;

  let firstHit: (RopeCut & { swipeT: number }) | null = null;
  for (let index = 2; index < ropePoints.length - 3; index += 1) {
    const hit = segmentIntersection(
      a,
      b,
      ropePoints[index],
      ropePoints[index + 1],
    );
    if (!hit || (firstHit && hit.swipeT >= firstHit.swipeT)) continue;
    firstHit = {
      curveT: (index + hit.ropeT) / (ropePoints.length - 1),
      point: hit.point,
      swipeT: hit.swipeT,
      swipeX: b.x - a.x,
    };
  }

  if (!firstHit) return null;
  return {
    curveT: firstHit.curveT,
    point: firstHit.point,
    swipeX: firstHit.swipeX,
  };
}

function segmentIntersection(a: Point, b: Point, c: Point, d: Point) {
  const swipe = { x: b.x - a.x, y: b.y - a.y };
  const rope = { x: d.x - c.x, y: d.y - c.y };
  const denominator = cross(swipe, rope);
  if (Math.abs(denominator) < 0.0001) return null;

  const offset = { x: c.x - a.x, y: c.y - a.y };
  const swipeT = cross(offset, rope) / denominator;
  const ropeT = cross(offset, swipe) / denominator;
  if (swipeT < 0 || swipeT > 1 || ropeT < 0 || ropeT > 1) return null;

  return {
    point: {
      x: a.x + swipe.x * swipeT,
      y: a.y + swipe.y * swipeT,
    },
    ropeT,
    swipeT,
  };
}

function cross(a: Point, b: Point) {
  return a.x * b.y - a.y * b.x;
}

function elapsedForAssignment(assignment: QuestSession, now: number) {
  if (assignment.startedAt === null) return 0;
  const openPause =
    assignment.pausedAt === null ? 0 : now - assignment.pausedAt;
  return Math.max(
    0,
    now - assignment.startedAt - assignment.pausedTotalMs - openPause,
  );
}

function initialTimerOffset(
  shouldDrop: boolean,
  restingTopRatio: number,
): RopePoint {
  const compactLayout = window.matchMedia("(max-width: 820px)").matches;
  const rigHeight = window.innerHeight * (compactLayout ? 0.52 : 1);
  if (!shouldDrop) {
    return {
      x: 0,
      y: rigHeight * (restingTopRatio - RUNNING_TIMER_TOP_RATIO),
    };
  }

  const timerHeight = compactLayout
    ? 94
    : Math.min(162, Math.max(116, window.innerWidth * 0.11));

  return {
    x: 6,
    y: -(rigHeight * RUNNING_TIMER_TOP_RATIO + timerHeight + 22),
  };
}

function constrainTimerOffset(
  offsetX: number,
  offsetY: number,
  rigHeight: number,
  origin: RopePoint,
) {
  const baseLength = rigHeight * RUNNING_TIMER_TOP_RATIO;
  const pulledX = offsetX;
  const pulledY = baseLength + offsetY + 8;
  const distance = Math.hypot(pulledX, pulledY);
  const restingLength = Math.hypot(origin.x, baseLength + origin.y + 8);
  if (distance <= restingLength) return { x: offsetX, y: offsetY };

  const maxStretch = Math.max(54, Math.min(76, rigHeight * 0.085));
  const overpull = distance - restingLength;
  const stretchedLength = maxStretch * (1 - Math.exp(-overpull / maxStretch));
  const resistedLength = restingLength + stretchedLength;
  return {
    x: (pulledX / distance) * resistedLength,
    y: (pulledY / distance) * resistedLength - baseLength - 8,
  };
}

function timerPullExtension(
  origin: RopePoint,
  target: RopePoint,
  rigHeight: number,
) {
  const baseLength = rigHeight * RUNNING_TIMER_TOP_RATIO;
  const originLength = Math.hypot(origin.x, baseLength + origin.y + 8);
  const targetLength = Math.hypot(target.x, baseLength + target.y + 8);
  return Math.max(0, targetLength - originLength);
}

function projectTimerToRope(
  target: RopePoint,
  mode: RopeMode,
  rigHeight: number,
) {
  const runningTop = rigHeight * RUNNING_TIMER_TOP_RATIO;
  const modeTop =
    rigHeight *
    (mode === "paused"
      ? PAUSED_TIMER_TOP_RATIO
      : mode === "ready"
        ? READY_TIMER_TOP_RATIO
        : mode === "resumePullback"
          ? RESUME_PULLBACK_TIMER_TOP_RATIO
          : RUNNING_TIMER_TOP_RATIO);
  const fromAnchor = {
    x: target.x,
    y: runningTop + target.y + 8,
  };
  const distance = Math.max(1, Math.hypot(fromAnchor.x, fromAnchor.y));
  const ropeLength = (modeTop + 8) * 1.025 * 0.985;
  return {
    x: (fromAnchor.x / distance) * ropeLength,
    y: (fromAnchor.y / distance) * ropeLength - runningTop - 8,
  };
}
