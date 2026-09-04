import {
  AnimatePresence,
  motion,
  type PanInfo,
  type Variants,
  useMotionValue,
  useSpring,
} from "motion/react";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { Trans, useTranslation } from "react-i18next";
import { useTiltEffect } from "../../../../hooks/useTiltEffect";
import {
  RED_ROPE_BUNDLE_COST,
  type Quest,
  type QuestSession,
} from "../../../../domain/quest/model";
import { calculateCompletionPoints } from "../../../../domain/quest/rules";
import { getMoodAccentStyle } from "../../../../data/questColors";
import { CARD_LAYOUT_TRANSITION } from "../../../../lib/cardMotion";
import { formatRunningDuration } from "../../../../lib/format";
import { playSound } from "../../../../lib/sound";
import {
  completionRemainingTime,
  isDownwardActivationPull,
} from "../../../../lib/timerRopeRules";
import { AnimatedElapsedTime } from "../AnimatedElapsedTime/AnimatedElapsedTime";
import { CompletionCheckIcon } from "../CompletionCheckIcon/CompletionCheckIcon";
import { CoinIcon, InfoIcon } from "../../../../shared/ui/Icons/Icons";
import { SolidButton } from "../../../../shared/ui/SolidButton/SolidButton";
import { QuestCardBack } from "../../../../shared/quest-card/QuestCardBack/QuestCardBack";
import { QuestCard } from "../../../../shared/quest-card/QuestCard/QuestCard";
import { RopePurchaseRow } from "../RopePurchaseRow/RopePurchaseRow";
import { FlyingCoin, type CoinImpact } from "../FlyingCoin/FlyingCoin";
import {
  MOBILE_PAUSED_TIMER_TOP_RATIO,
  MOBILE_READY_TIMER_TOP_RATIO,
  MOBILE_RUNNING_TIMER_TOP_RATIO,
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
} from "../PhysicsRope/PhysicsRope";
import styles from "./ActiveQuestCard.module.css";
import { usePlayLayout } from "../../../quest-flow/usePlayLayout";
import {
  CARD_FLIP_EASE,
  SELECTION_HANDOFF_EASE,
} from "../../../../shared/motion/transitions";
import {
  appendTrailPoint,
  constrainTimerOffset,
  cutTrailShape,
  elapsedForSession,
  initialTimerOffset,
  segmentCutsRope,
  timerPullExtension,
  type Point,
} from "../../model/activeQuestMath";
import { questOfferId } from "../../../../domain/quest/rules";

type Props = {
  quest: Quest;
  session: QuestSession;
  layoutSessionId: string;
  entryRotation: number;
  coins: number;
  redRopes: number;
  debugMode: boolean;
  reduceMotion: boolean;
  onDiscard: () => boolean;
  onReturnToSelection: () => boolean;
  onStart: (startedAt: number) => void;
  onPause: (pausedAt: number) => void;
  onResume: (resumedAt: number) => void;
  onComplete: () => void;
  onCoinFlightStart: (pointsAwarded: number) => void;
  onCoinHit: (pointsReceived: number, impact?: CoinImpact) => void;
  onLayoutHandoffStart: () => void;
  onPurchaseRedRopes: () => boolean;
};

type Phase = "ready" | "running" | "paused" | "cutting" | "completed";
const PAUSE_PULL_DISTANCE = 44;
const COMPLETION_FLIP_DURATION_MS = 900;
const COMPLETION_FACE_REVEAL_MS = 225;
const COMPLETION_HOLD_DURATION_MS = 850;
const COIN_FLIGHT_COUNT = 6;
const CUT_TRAIL_CLEAR_DELAY_MS = 210;
const CUT_TRAIL_FADE_DURATION_MS = 60;
const CANCELLATION_BLOCKED_DURATION_MS = 3_000;
const CARD_FOCUS_DISMISS_DISTANCE = 96;
const CARD_FOCUS_DISMISS_VELOCITY = 700;
const CARD_FOCUS_SCALE_MULTIPLIER = 1.02;

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

export function ActiveQuestCard({
  quest,
  session,
  layoutSessionId,
  entryRotation,
  coins,
  redRopes,
  debugMode,
  reduceMotion,
  onDiscard,
  onReturnToSelection,
  onStart,
  onPause,
  onResume,
  onComplete,
  onCoinFlightStart,
  onCoinHit,
  onLayoutHandoffStart,
  onPurchaseRedRopes,
}: Props) {
  const { t } = useTranslation();
  const initiallyReady = session.startedAt === null;
  const initiallyPaused =
    session.startedAt !== null && session.pausedAt !== null;
  const [phase, setPhase] = useState<Phase>(
    initiallyReady ? "ready" : initiallyPaused ? "paused" : "running",
  );
  const { isCompact: isMobileViewport } = usePlayLayout();
  const activeCardScale = isMobileViewport ? 1.15 : 1.25;
  const [cardFocused, setCardFocused] = useState(false);
  const [cardHoverArmed, setCardHoverArmed] = useState(false);
  const [ropeMode, setRopeMode] = useState<RopeMode>(
    initiallyReady ? "ready" : initiallyPaused ? "paused" : "running",
  );
  const readyEntranceDropRef = useRef(
    initiallyReady && !reduceMotion && Date.now() - session.revealedAt < 2_500,
  );
  const [timerSettling, setTimerSettling] = useState(
    readyEntranceDropRef.current,
  );
  const [timerDragging, setTimerDragging] = useState(false);
  const [timerEntranceSettling, setTimerEntranceSettling] = useState(
    readyEntranceDropRef.current,
  );
  const [cut, setCut] = useState<RopeCut | null>(null);
  const [showFinishedFace, setShowFinishedFace] = useState(false);
  const [coinFlight, setCoinFlight] = useState<{
    award: number;
    end: Point;
    start: Point;
  } | null>(null);
  const [completionOffset, setCompletionOffset] = useState<Point>({
    x: 0,
    y: 0,
  });
  const [elapsedMs, setElapsedMs] = useState(() =>
    elapsedForSession(session, Date.now()),
  );
  const [cancellationBlocked, setCancellationBlocked] = useState(false);
  const [animateReveal] = useState(
    () => !reduceMotion && Date.now() - session.revealedAt < 1_500,
  );
  const [revealFinished, setRevealFinished] = useState(!animateReveal);
  const [cutTrail, setCutTrail] = useState<Point[] | null>(null);
  const dropOnStartRef = useRef(
    readyEntranceDropRef.current ||
      (!initiallyReady &&
        !initiallyPaused &&
        !reduceMotion &&
        session.startedAt !== null &&
        Date.now() - session.startedAt < 2500),
  );
  const initialTimerOffsetRef = useRef<RopePoint>(
    initialTimerOffset(
      dropOnStartRef.current,
      initiallyReady
        ? isMobileViewport
          ? MOBILE_READY_TIMER_TOP_RATIO
          : READY_TIMER_TOP_RATIO
        : initiallyPaused
          ? isMobileViewport
            ? MOBILE_PAUSED_TIMER_TOP_RATIO
            : PAUSED_TIMER_TOP_RATIO
          : isMobileViewport
            ? MOBILE_RUNNING_TIMER_TOP_RATIO
            : RUNNING_TIMER_TOP_RATIO,
      initiallyReady || initiallyPaused,
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
  const ropeReleaseRef = useRef<RopeRelease | null>(null);
  const ropeReleaseSequenceRef = useRef(0);
  const dragOriginRef = useRef<RopePoint>(initialTimerOffsetRef.current);
  const dragTargetRef = useRef<RopePoint>(initialTimerOffsetRef.current);
  const timerReturningRef = useRef(false);
  const timerReturnModeRef = useRef<RopeMode>(
    initiallyReady ? "ready" : initiallyPaused ? "paused" : "running",
  );
  const timerReturnStartedAtRef = useRef(0);
  const timerEntranceStartedAtRef = useRef(0);
  const resumePendingRef = useRef(false);
  const startPendingRef = useRef(false);
  const startedAtRef = useRef<number | null>(session.startedAt);
  const pausedAtRef = useRef<number | null>(session.pausedAt);
  const pausedTotalRef = useRef(session.pausedTotalMs);
  const cutGestureRef = useRef(false);
  const exitStartedRef = useRef(false);
  const cutGestureStartRef = useRef<Point | null>(null);
  const lastCutPointRef = useRef<Point | null>(null);
  const trailClearTimeoutRef = useRef<number | null>(null);
  const cancellationBlockedTimeoutRef = useRef<number | null>(null);
  const exitTimeoutRef = useRef<number | null>(null);
  const completionRevealTimeoutRef = useRef<number | null>(null);
  const completionFinalizeTimeoutRef = useRef<number | null>(null);
  const coinFlightFinishedRef = useRef(false);
  const x = useMotionValue(initialTimerOffsetRef.current.x);
  const y = useMotionValue(initialTimerOffsetRef.current.y);
  const timerRotationTarget = useMotionValue(0);
  const timerRotation = useSpring(timerRotationTarget, {
    stiffness: 230,
    damping: 17,
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

  useEffect(() => {
    if (!animateReveal || revealFinished) return;
    const frame = window.requestAnimationFrame(() => {
      onLayoutHandoffStart();
      if (readyEntranceDropRef.current) {
        timerEntranceStartedAtRef.current = performance.now();
      }
      setRevealFinished(true);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [animateReveal, onLayoutHandoffStart, revealFinished]);

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
    if (redRopes < 1 && !debugMode) return;
    setCancellationBlocked(false);
    if (cancellationBlockedTimeoutRef.current !== null) {
      window.clearTimeout(cancellationBlockedTimeoutRef.current);
      cancellationBlockedTimeoutRef.current = null;
    }
  }, [debugMode, redRopes]);

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

  useEffect(
    () => () => {
      if (trailClearTimeoutRef.current !== null) {
        window.clearTimeout(trailClearTimeoutRef.current);
      }
      if (cancellationBlockedTimeoutRef.current !== null) {
        window.clearTimeout(cancellationBlockedTimeoutRef.current);
      }
      if (exitTimeoutRef.current !== null) {
        window.clearTimeout(exitTimeoutRef.current);
      }
      if (completionRevealTimeoutRef.current !== null) {
        window.clearTimeout(completionRevealTimeoutRef.current);
      }
      if (completionFinalizeTimeoutRef.current !== null) {
        window.clearTimeout(completionFinalizeTimeoutRef.current);
      }
    },
    [],
  );

  function queueRopeRelease(mode: RopeMode, velocity: RopePoint) {
    ropeReleaseSequenceRef.current += 1;
    ropeReleaseRef.current = {
      mode,
      sequence: ropeReleaseSequenceRef.current,
      velocity,
    };
  }

  function beginPhysicalReturn(mode: RopeMode, velocity: RopePoint) {
    const now = performance.now();
    timerReturningRef.current = true;
    timerReturnModeRef.current = mode;
    timerReturnStartedAtRef.current = now;
    timerDraggingRef.current = false;
    setTimerSettling(true);
    queueRopeRelease(mode, velocity);
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

  function resume() {
    if (pausedAtRef.current === null || phase !== "paused") return false;
    playSound("toggleOn");
    const resumedAt = Date.now();
    pausedTotalRef.current += resumedAt - pausedAtRef.current;
    pausedAtRef.current = null;
    onResume(resumedAt);
    setPhase("running");
    return true;
  }

  function toggleTimerFromKeyboard() {
    if (
      timerSettling ||
      timerEntranceSettling ||
      phase === "cutting" ||
      phase === "completed" ||
      ropeMode === "resumePullback"
    ) {
      return;
    }

    if (phase === "running") {
      pause();
      return;
    }

    if (phase === "ready") {
      playSound("toggleOn");
      const startedAt = Date.now();
      startedAtRef.current = startedAt;
      onStart(startedAt);
      setPhase("running");
    } else if (!resume()) {
      return;
    }

    setRopeMode("running");
  }

  function finishPullback(pose: TimerPose) {
    if (!resumePendingRef.current && !startPendingRef.current) return;
    const starting = startPendingRef.current;
    const capturedStartedAt = starting ? startedAtRef.current : null;
    resumePendingRef.current = false;
    startPendingRef.current = false;
    if (starting) playSound("toggleOn");
    ropeTargetRef.current = { x: pose.x, y: pose.y };
    timerDraggingRef.current = false;
    setTimerDragging(false);
    timerReturningRef.current = true;
    timerReturnModeRef.current = "running";
    timerReturnStartedAtRef.current = performance.now();
    setTimerSettling(true);
    queueRopeRelease("running", pose.velocity);
    setRopeMode("running");
    setPhase("running");
    if (capturedStartedAt !== null) onStart(capturedStartedAt);
  }

  function beginExit(next: "cutting", ropeCut?: RopeCut) {
    if (exitStartedRef.current || phase === "cutting" || phase === "completed")
      return;
    if (next === "cutting" && !ropeCut) return;
    if (next === "cutting" && startedAtRef.current === null) return;
    if (next === "cutting" && redRopes < 1 && !debugMode) {
      showCancellationBlocked();
      return;
    }
    if (next === "cutting") playSound("cut");
    timerReturningRef.current = false;
    timerDraggingRef.current = false;
    setTimerDragging(false);
    setTimerSettling(false);
    exitStartedRef.current = true;
    if (pausedAtRef.current === null) pausedAtRef.current = Date.now();
    const duration = readElapsed();
    if (next === "cutting") {
      setCut(ropeCut ?? null);
    }
    setElapsedMs(duration);
    setPhase(next);
    exitTimeoutRef.current = window.setTimeout(
      () => {
        onDiscard();
      },
      reduceMotion ? 80 : 1200,
    );
  }

  function completeQuest() {
    if (
      exitStartedRef.current ||
      phase !== "paused" ||
      (!debugMode && elapsedMs < quest.minimumDurationMinutes * 60_000)
    ) {
      return;
    }
    exitStartedRef.current = true;
    timerReturningRef.current = false;
    timerDraggingRef.current = false;
    setTimerDragging(false);
    setTimerSettling(false);
    setCardFocused(false);
    const duration = readElapsed();
    setElapsedMs(duration);
    const cardRect = cardProjectionRef.current?.getBoundingClientRect();
    if (cardRect) {
      setCompletionOffset({
        x: window.innerWidth / 2 - (cardRect.left + cardRect.width / 2),
        y: window.innerHeight / 2 + 40 - (cardRect.top + cardRect.height / 2),
      });
    }
    const award = calculateCompletionPoints(duration);
    const triggerRect = document
      .querySelector<HTMLElement>("[data-profile-trigger]")
      ?.getBoundingClientRect();
    const start = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const end = triggerRect
      ? {
          x: triggerRect.left + triggerRect.width / 2,
          y: triggerRect.top + triggerRect.height / 2,
        }
      : { x: window.innerWidth - 52, y: 50 };

    coinFlightFinishedRef.current = false;
    onCoinFlightStart(award);
    setPhase("completed");
    if (reduceMotion) {
      setShowFinishedFace(true);
      playSound("completion");
      onCoinHit(award);
      completionFinalizeTimeoutRef.current = window.setTimeout(() => {
        onComplete();
        completionFinalizeTimeoutRef.current = null;
      }, COMPLETION_HOLD_DURATION_MS);
      return;
    }

    setCoinFlight({ award, start, end });
    completionRevealTimeoutRef.current = window.setTimeout(() => {
      setShowFinishedFace(true);
      playSound("completion");
      completionRevealTimeoutRef.current = null;
    }, COMPLETION_FACE_REVEAL_MS);
  }

  function finishCoinFlight(index: number, impact: CoinImpact) {
    if (!coinFlight || coinFlightFinishedRef.current) return;
    const pointsReceived = Math.round(
      (coinFlight.award * (index + 1)) / COIN_FLIGHT_COUNT,
    );
    onCoinHit(pointsReceived, impact);
    if (index !== COIN_FLIGHT_COUNT - 1) return;
    coinFlightFinishedRef.current = true;
    completionFinalizeTimeoutRef.current = window.setTimeout(() => {
      onComplete();
      completionFinalizeTimeoutRef.current = null;
    }, COMPLETION_HOLD_DURATION_MS);
  }

  function returnToSelection() {
    if (phase !== "ready" || exitStartedRef.current) return;
    exitStartedRef.current = true;
    setCardFocused(false);
    if (!onReturnToSelection()) {
      exitStartedRef.current = false;
    }
  }

  function showCancellationBlocked() {
    setCancellationBlocked(true);
    if (cancellationBlockedTimeoutRef.current !== null) {
      window.clearTimeout(cancellationBlockedTimeoutRef.current);
    }
    cancellationBlockedTimeoutRef.current = window.setTimeout(() => {
      setCancellationBlocked(false);
      cancellationBlockedTimeoutRef.current = null;
    }, CANCELLATION_BLOCKED_DURATION_MS);
  }

  function onTimerDrag(
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) {
    if (!timerDraggingRef.current) return;
    const requestedX = dragOriginRef.current.x + info.offset.x;
    const requestedY = dragOriginRef.current.y + info.offset.y;
    const constrained = constrainTimerOffset(
      requestedX,
      requestedY,
      rigRef.current?.clientHeight ?? window.innerHeight,
      dragOriginRef.current,
    );
    dragTargetRef.current = constrained;
    ropeTargetRef.current = constrained;
  }

  function startTimerDrag() {
    if (
      timerEntranceSettling ||
      phase === "cutting" ||
      phase === "completed" ||
      ropeMode === "resumePullback"
    ) {
      return;
    }
    playSound("timerGrab");
    timerReturningRef.current = false;
    setTimerSettling(true);
    timerDraggingRef.current = true;
    setTimerDragging(true);
    ropeReleaseRef.current = null;
    dragOriginRef.current = { x: x.get(), y: y.get() };
    dragTargetRef.current = dragOriginRef.current;
    ropeTargetRef.current = dragOriginRef.current;
  }

  function settleTimerPull(
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) {
    if (!timerDraggingRef.current) return;
    const rigHeight = rigRef.current?.clientHeight ?? window.innerHeight;
    const requested = dragTargetRef.current;
    const pullDistance = timerPullExtension(
      dragOriginRef.current,
      requested,
      rigHeight,
    );
    const inActivationSector = isDownwardActivationPull(info.offset);
    const shouldPause =
      phase === "running" &&
      inActivationSector &&
      pullDistance >= PAUSE_PULL_DISTANCE;
    const shouldResume =
      phase === "paused" &&
      inActivationSector &&
      pullDistance >= PAUSE_PULL_DISTANCE;
    const shouldStart =
      phase === "ready" &&
      inActivationSector &&
      pullDistance >= PAUSE_PULL_DISTANCE;
    const destinationMode: RopeMode =
      shouldResume || shouldStart
        ? "resumePullback"
        : shouldPause
          ? "paused"
          : ropeMode;
    if (shouldPause) pause();
    if (shouldResume && resume()) {
      resumePendingRef.current = true;
      setRopeMode("resumePullback");
    }
    if (shouldStart) {
      const startedAt = Date.now();
      startedAtRef.current = startedAt;
      startPendingRef.current = true;
      setRopeMode("resumePullback");
    }

    timerDraggingRef.current = false;
    beginPhysicalReturn(destinationMode, info.velocity);
    setTimerDragging(false);
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
      target.closest("[data-cut-ignore]") ||
      target.closest("[data-timer-drag]")
    )
      return;
    if (trailClearTimeoutRef.current !== null) {
      window.clearTimeout(trailClearTimeoutRef.current);
      trailClearTimeoutRef.current = null;
    }
    cutGestureRef.current = true;
    const point = pointerInRig(event);
    cutGestureStartRef.current = point;
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

  function endCut(event: ReactPointerEvent<HTMLDivElement>) {
    const start = cutGestureStartRef.current;
    const end = pointerInRig(event);
    const cardRect = cardProjectionRef.current?.getBoundingClientRect();
    const tappedPausedCard =
      event.type === "pointerup" &&
      cutGestureRef.current &&
      start !== null &&
      phase === "paused" &&
      isMobileViewport &&
      cardRect !== undefined &&
      Math.hypot(end.x - start.x, end.y - start.y) < 8 &&
      event.clientX >= cardRect.left &&
      event.clientX <= cardRect.right &&
      event.clientY >= cardRect.top &&
      event.clientY <= cardRect.bottom;

    cutGestureRef.current = false;
    cutGestureStartRef.current = null;
    lastCutPointRef.current = null;
    clearCutTrailAfter(CUT_TRAIL_CLEAR_DELAY_MS);
    if (tappedPausedCard) setCardFocused(true);
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
      x.set(pose.x);
      y.set(pose.y);

      if (timerEntranceSettling && pose.mode === "ready") {
        const now = performance.now();
        if (timerEntranceStartedAtRef.current === 0) {
          timerEntranceStartedAtRef.current = now;
        }
        const elapsed = now - timerEntranceStartedAtRef.current;
        const rigHeight = rigRef.current?.clientHeight ?? window.innerHeight;
        const readyTopRatio = isMobileViewport
          ? MOBILE_READY_TIMER_TOP_RATIO
          : READY_TIMER_TOP_RATIO;
        const restingY = -rigHeight * (RUNNING_TIMER_TOP_RATIO - readyTopRatio);
        const distanceFromRest = Math.hypot(pose.x, pose.y - restingY);
        const speed = Math.hypot(pose.velocity.x, pose.velocity.y);
        const settled = elapsed > 480 && distanceFromRest < 22 && speed < 130;
        const timedOut = elapsed > 2_400;

        if (settled || timedOut) {
          readyEntranceDropRef.current = false;
          setTimerEntranceSettling(false);
          setTimerSettling(false);
        }
      }

      if (
        timerReturningRef.current &&
        pose.mode === timerReturnModeRef.current
      ) {
        const elapsed = performance.now() - timerReturnStartedAtRef.current;
        const activating = resumePendingRef.current || startPendingRef.current;
        const rigHeight = rigRef.current?.clientHeight ?? window.innerHeight;
        const pullbackY =
          -rigHeight *
          (RUNNING_TIMER_TOP_RATIO - RESUME_PULLBACK_TIMER_TOP_RATIO);
        const reachedActivationApex =
          activating &&
          elapsed > 120 &&
          pose.y <= pullbackY + Math.max(14, rigHeight * 0.02);
        const readyToAdvance =
          reachedActivationApex || (pose.settled && elapsed > 180);
        const timedOut = elapsed > (activating ? 700 : 2_400);
        if (readyToAdvance || timedOut) {
          if (resumePendingRef.current || startPendingRef.current) {
            finishPullback(pose);
          } else {
            timerReturningRef.current = false;
            timerDraggingRef.current = false;
            setTimerSettling(false);
          }
        }
        return;
      }
    },
    [
      isMobileViewport,
      reduceMotion,
      timerEntranceSettling,
      timerRotationTarget,
      x,
      y,
    ],
  );

  const exiting = phase === "cutting" || phase === "completed";
  const completed = phase === "completed";
  const minimumDurationMs = quest.minimumDurationMinutes * 60_000;
  const canComplete = debugMode || elapsedMs >= minimumDurationMs;
  const completionRemainingMs = Math.max(0, minimumDurationMs - elapsedMs);
  const completionRemaining = completionRemainingTime(completionRemainingMs);
  const completionRemainingLabel =
    completionRemaining.kind === "less-than-minute"
      ? t("ui.timer.lessThanMinute")
      : completionRemaining.kind === "minutes"
        ? t("ui.quest.durationSingleLong", {
            count: completionRemaining.count,
          })
        : "";
  const completionAward = calculateCompletionPoints(elapsedMs);
  const cardFocusAvailable = isMobileViewport && revealFinished && !exiting;
  const hasNoRopes = redRopes <= 0;
  const timerInteractionUiVisible =
    !timerDragging && ropeMode !== "resumePullback";
  const readyUiVisible =
    phase === "ready" &&
    revealFinished &&
    timerInteractionUiVisible;
  const canCutRope =
    (phase === "running" || phase === "paused") && (debugMode || redRopes > 0);
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
      className={styles.activeQuest}
      style={getMoodAccentStyle(quest.mood.id)}
      data-card-focused={cardFocused ? "true" : undefined}
      data-phase={phase}
      data-reveal-complete={revealFinished ? "true" : undefined}
      data-rope-mode={ropeMode}
    >
      {completed && (
        <motion.div
          className={styles.completionCelebration}
          aria-hidden="true"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.86 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: reduceMotion ? 0 : 0.5, ease: "easeOut" }}
        />
      )}
      {completed && coinFlight
        ? Array.from({ length: COIN_FLIGHT_COUNT }, (_, index) => (
            <FlyingCoin
              end={coinFlight.end}
              index={index}
              isMobileViewport={isMobileViewport}
              key={`coin-flight-${index}`}
              reduceMotion={reduceMotion}
              start={coinFlight.start}
              onComplete={(impact) => finishCoinFlight(index, impact)}
            />
          ))
        : null}
      {cardFocused && (
        <button
          ref={cardFocusBackdropRef}
          className={styles.cardFocusBackdrop}
          type="button"
          aria-label={t("ui.quest.closeFocusedCard")}
          onClick={closeCardFocus}
        />
      )}

      <div
        className={styles.activeCardStage}
        style={getMoodAccentStyle(quest.mood.id)}
      >
        <motion.div
          ref={cardProjectionRef}
          className={styles.activeCardProjection}
          layoutId={`quest-card-${layoutSessionId}-${questOfferId(
            session.moodId,
            quest.id,
            session.game?.id ?? null,
          )}`}
          layoutCrossfade={false}
          onLayoutAnimationStart={() => {
            onLayoutHandoffStart();
            if (revealFinished) return;
            if (readyEntranceDropRef.current) {
              timerEntranceStartedAtRef.current = performance.now();
            }
            setRevealFinished(true);
          }}
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
                  x: {
                    duration: 0.62,
                    ease: SELECTION_HANDOFF_EASE,
                  },
                  y: {
                    duration: 0.62,
                    ease: SELECTION_HANDOFF_EASE,
                  },
                }
          }
          initial={false}
          animate={{
            x: completed ? completionOffset.x : 0,
            y: completed ? completionOffset.y : 0,
          }}
        >
          <motion.div
            className={styles.activeCardDisplay}
            initial={
              reduceMotion ? false : { scale: 1, rotate: entryRotation }
            }
            animate={{
              scale: completed
                ? activeCardScale * 0.96
                : cardFocused
                  ? activeCardScale * CARD_FOCUS_SCALE_MULTIPLIER
                  : activeCardScale,
              rotate: cardFocused || completed || !revealFinished ? 0 : -3.5,
            }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : {
                    scale: completed
                      ? {
                          duration: COMPLETION_FLIP_DURATION_MS / 1000,
                          ease: [0.42, 0, 0.18, 1],
                        }
                      : { duration: 0.62, ease: SELECTION_HANDOFF_EASE },
                    rotate: {
                      type: "spring",
                      stiffness: 220,
                      damping: 23,
                      mass: 0.96,
                    },
                  }
            }
          >
            <AnimatePresence>
              {completed && (
                <motion.p
                  className={styles.completionAwardBanner}
                  role="status"
                  aria-label={t("ui.timer.coinsEarnedLabel", {
                    points: completionAward,
                  })}
                  initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: reduceMotion ? 0 : 0.28 }}
                >
                  <span>{t("ui.timer.coinsEarned")}</span>
                  <strong>{completionAward}</strong>
                  <CoinIcon />
                </motion.p>
              )}
            </AnimatePresence>
            <div className={styles.revealFlip}>
              <div className={styles.revealFront}>
                <motion.div
                  className={styles.completionFlip}
                  initial={false}
                  animate={{
                    rotateY: completed ? 360 : 0,
                  }}
                  transition={
                    reduceMotion
                      ? { duration: 0 }
                      : {
                          duration: completed
                            ? COMPLETION_FLIP_DURATION_MS / 1000
                            : 0,
                          ease: CARD_FLIP_EASE,
                        }
                  }
                >
                  <article
                    ref={cardHitAreaRef}
                    className={styles.activeCardHitArea}
                    data-sound-card
                    data-flow-focus
                    data-hover-ready={cardHoverArmed ? "true" : undefined}
                    data-sound-skip={cardHoverArmed ? undefined : "true"}
                    tabIndex={-1}
                    onPointerEnter={(event) => {
                      if (cardHoverArmed) handleCardPointerEnter(event);
                    }}
                    onPointerMove={(event) => {
                      if (cardHoverArmed) handleCardPointerMove(event);
                    }}
                    onPointerLeave={(event) => {
                      handleCardPointerLeave(event);
                      if (event.pointerType === "mouse")
                        setCardHoverArmed(true);
                    }}
                    onPointerOut={(event) => {
                      handleCardPointerLeave(event);
                    }}
                    aria-label={t("ui.quest.activeLabel", {
                      mood: quest.mood.title,
                      title: quest.name,
                      game: quest.game?.name ?? "",
                    })}
                  >
                    <QuestCard
                      className={styles.activeQuestCard}
                      completed={showFinishedFace}
                      genres={quest.genres}
                      game={quest.game}
                      minimumDurationMinutes={quest.minimumDurationMinutes}
                      moodTitle={quest.mood.title}
                      name={quest.name}
                      objective={quest.objective}
                      suggestedDurationMinutes={quest.suggestedDurationMinutes}
                      style={{
                        rotateX: completed ? 0 : cardRotateX,
                        rotateY: completed ? 0 : cardRotateY,
                        transformPerspective: 1000,
                      }}
                    />
                    <AnimatePresence initial={false}>
                      {showFinishedFace && (
                        <motion.div
                          className={`${styles.completedCardResult} ${styles.completedFrontResult}`}
                          key="completed-card-result"
                          role="status"
                          aria-live="polite"
                          initial={reduceMotion ? false : { opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: reduceMotion ? 0 : 0.2 }}
                        >
                          <CompletionCheckIcon />
                          <span>{t("ui.timer.yourTime")}</span>
                          <strong>{formatRunningDuration(elapsedMs)}</strong>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    {cardFocusAvailable && !cardFocused && (
                      <button
                        ref={cardFocusTriggerRef}
                        className={styles.cardFocusTrigger}
                        type="button"
                        aria-label={t("ui.quest.focusCard", {
                          title: quest.name,
                        })}
                        onClick={() => setCardFocused(true)}
                      />
                    )}
                  </article>
                  {revealFinished && (
                    <QuestCardBack
                      className={`${styles.activeQuestCard} ${styles.completionCardBack}`}
                    />
                  )}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className={styles.timerRig}
        ref={rigRef}
        animate={{
          opacity: completed || !revealFinished ? 0 : 1,
        }}
        transition={{ duration: reduceMotion ? 0 : 0.16, ease: "easeOut" }}
        style={{
          pointerEvents:
            exiting || !revealFinished || timerEntranceSettling
              ? "none"
              : "auto",
        }}
        onPointerDown={startCut}
        onPointerMove={moveCut}
        onPointerUp={endCut}
        onPointerCancel={endCut}
      >
        {revealFinished && (
          <PhysicsRope
            cut={phase === "cutting" ? cut : null}
            draggingRef={timerDraggingRef}
            isMobileViewport={isMobileViewport}
            mode={ropeMode}
            onTimerMove={syncTimerToPhysics}
            red={phase === "cutting" || canCutRope}
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

        <motion.div
          className={styles.timerPosition}
          data-timer-drag
          role="button"
          tabIndex={0}
          aria-disabled={
            timerSettling ||
            timerEntranceSettling ||
            exiting ||
            ropeMode === "resumePullback"
          }
          aria-label={
            phase === "ready"
              ? t("ui.timer.start")
              : phase === "paused"
                ? t("ui.timer.resume")
                : phase === "running"
                  ? t("ui.timer.pause")
                  : t("ui.timer.unavailable")
          }
          style={{ x, y }}
          onPanStart={startTimerDrag}
          onPan={onTimerDrag}
          onPanEnd={settleTimerPull}
          onKeyDown={(event) => {
            if (event.key !== "Enter" && event.key !== " ") return;
            event.preventDefault();
            toggleTimerFromKeyboard();
          }}
          whileTap={{ scale: 1.025, cursor: "grabbing" }}
        >
          <motion.div
            className={styles.timerCapsule}
            animate={{ opacity: phase === "cutting" && reduceMotion ? 0 : 1 }}
            style={{ rotate: timerRotation }}
            transition={{ duration: reduceMotion ? 0.08 : 0.16 }}
          >
            <span className={styles.grabDots} aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <AnimatedElapsedTime
              elapsedMs={elapsedMs}
              reduceMotion={reduceMotion}
            />
          </motion.div>
          <AnimatePresence>
            {(readyUiVisible ||
              (phase === "paused" && timerInteractionUiVisible)) &&
              !cancellationBlocked && (
                <motion.span
                  className={styles.timerStatus}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: reduceMotion ? 0 : 0.12 }}
                >
                  {phase === "ready"
                    ? t("ui.timer.ready")
                    : t("ui.timer.paused")}
                </motion.span>
              )}
          </AnimatePresence>
          <AnimatePresence>
            {cancellationBlocked && !exiting && (
              <motion.span
                className={styles.cancellationBlockedInfo}
                role="status"
                initial={reduceMotion ? false : { opacity: 0, y: 3 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: reduceMotion ? 0 : -2 }}
                transition={{ duration: reduceMotion ? 0 : 0.22 }}
              >
                {t("ui.timer.noRedRopes")}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>

        <div className={styles.timerActionArea}>
          <AnimatePresence>
            {phase === "paused" && timerInteractionUiVisible && (
              <motion.form
                className={styles.pausePanel}
                data-cut-ignore
                onSubmit={(event) => {
                  event.preventDefault();
                  if (!canComplete) return;
                  completeQuest();
                }}
                initial={reduceMotion ? false : "hidden"}
                animate="visible"
                exit={reduceMotion ? { opacity: 0 } : "exit"}
                variants={pausePanelVariants}
              >
                {canComplete ? (
                  <>
                    <motion.p
                      className={styles.completionReward}
                      aria-label={t("ui.timer.coinsEarnedLabel", {
                        points: completionAward,
                      })}
                      variants={pausePanelItemVariants}
                    >
                      <span>{t("ui.timer.coinsEarned")}</span>
                      <strong>{completionAward}</strong>
                      <CoinIcon />
                    </motion.p>
                    <motion.button
                      className={styles.saveAction}
                      type="submit"
                      variants={pausePanelItemVariants}
                    >
                      {t("ui.timer.completeQuest")}
                    </motion.button>
                  </>
                ) : (
                  <motion.div
                    className={styles.pauseMinimumCard}
                    role="status"
                    variants={pausePanelItemVariants}
                  >
                    <span className={styles.pauseInfoIcon} aria-hidden="true">
                      <InfoIcon />
                    </span>
                    <p>
                      <Trans
                        i18nKey="ui.timer.completeAvailableIn"
                        values={{
                          time: completionRemainingLabel,
                        }}
                        components={{ strong: <strong /> }}
                      />
                    </p>
                    <p>{t("ui.timer.pullContinue")}</p>
                    <p className={styles.ropeAvailability}>
                      <Trans
                        i18nKey={
                          hasNoRopes
                            ? "ui.timer.noRopesRemaining"
                            : "ui.timer.redRopesRemaining"
                        }
                        count={redRopes}
                        values={{ count: redRopes }}
                        components={{ strong: <strong /> }}
                      />
                    </p>
                    {hasNoRopes && coins >= RED_ROPE_BUNDLE_COST && (
                      <RopePurchaseRow
                        coins={coins}
                        context="pause"
                        onPurchase={onPurchaseRedRopes}
                        tone="inverse"
                      />
                    )}
                  </motion.div>
                )}
              </motion.form>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {readyUiVisible && !exiting && (
              <motion.span
                className={styles.timerReturnControl}
                initial={reduceMotion ? false : { opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: reduceMotion ? 0 : -3 }}
                transition={{ duration: reduceMotion ? 0 : 0.16 }}
              >
                <SolidButton
                  type="button"
                  variant="soft"
                  onClick={returnToSelection}
                >
                  <span>{t("ui.timer.backToSelection")}</span>
                </SolidButton>
              </motion.span>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {!exiting &&
              timerInteractionUiVisible &&
              (phase !== "ready" || readyUiVisible) &&
              (phase !== "paused" || canComplete) && (
                <motion.div
                  className={styles.timerHint}
                  data-cut-ignore
                  key={phase}
                  initial={reduceMotion ? false : { opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: reduceMotion ? 0 : -3 }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.16,
                    ease: "easeOut",
                  }}
                >
                {phase === "ready" ? (
                  <span className={styles.readyTimerInstructions}>
                    <Trans
                      i18nKey="ui.timer.readyInstructions"
                      values={{
                        time: t("ui.quest.durationSingleLong", {
                          count: quest.minimumDurationMinutes,
                        }),
                      }}
                      components={{ br: <br />, strong: <strong /> }}
                    />
                  </span>
                ) : (
                  <span>
                    {phase === "paused"
                      ? t("ui.timer.pullResume")
                      : t("ui.timer.pullPause")}
                  </span>
                )}
                {phase === "ready" && (
                  <span className={styles.ropeAvailability}>
                    <Trans
                      i18nKey={
                        hasNoRopes
                          ? "ui.timer.noRopesRemaining"
                          : "ui.timer.redRopesRemaining"
                      }
                      count={redRopes}
                      values={{ count: redRopes }}
                      components={{ strong: <strong /> }}
                    />
                  </span>
                )}
                {(phase === "running" || phase === "paused") && (
                  <span
                    className={
                      hasNoRopes ? styles.ropeAvailability : undefined
                    }
                  >
                    {hasNoRopes ? (
                      <Trans
                        i18nKey="ui.timer.noRopesRemaining"
                        components={{ strong: <strong /> }}
                      />
                    ) : (
                      t("ui.timer.cutStop")
                    )}
                  </span>
                )}
                {hasNoRopes && coins >= RED_ROPE_BUNDLE_COST && (
                  <RopePurchaseRow
                    coins={coins}
                    context="timer"
                    onPurchase={onPurchaseRedRopes}
                    tone="inverse"
                  />
                )}
                </motion.div>
              )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
