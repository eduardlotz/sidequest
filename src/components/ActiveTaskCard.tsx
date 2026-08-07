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
import { useTiltEffect } from "../hooks/useTiltEffect";
import {
  calculateCompletionPoints,
  RED_ROPE_BUNDLE_COST,
  sanitizeGameTitle,
  type CompletedSession,
  type Quest,
  type QuestSession,
} from "../stores/useQuestStore";
import { getQuestCardAccentStyle } from "../data/questColors";
import { CARD_LAYOUT_TRANSITION } from "../lib/cardMotion";
import { formatRunningDuration } from "../lib/format";
import { playSound } from "../lib/sound";
import {
  completionRemainingTime,
  isDownwardActivationPull,
} from "../lib/timerRopeMechanics";
import { AnimatedElapsedTime } from "./AnimatedElapsedTime";
import { CompletionCheckIcon } from "./CompletionCheckIcon";
import { CoinIcon, InfoIcon } from "./Icons";
import { QuestCardBack } from "./QuestCardBack";
import { QuestCardMeta } from "./QuestCardMeta";
import { QuestTips } from "./QuestTips";
import { RopePurchaseRow } from "./RopePurchaseRow";
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
} from "./PhysicsRope";
import styles from "../App.module.css";

type Props = {
  quest: Quest;
  session: QuestSession;
  previousCompletions: readonly CompletedSession[];
  layoutSessionId: string;
  coins: number;
  redRopes: number;
  debugMode: boolean;
  reduceMotion: boolean;
  onDiscard: () => boolean;
  onReturnToSelection: () => boolean;
  onStart: (startedAt: number) => void;
  onPause: (pausedAt: number) => void;
  onResume: (resumedAt: number) => void;
  onComplete: (gameTitle: string) => void;
  onCoinFlightStart: (pointsAwarded: number) => void;
  onCoinHit: (pointsReceived: number) => void;
  onPurchaseRedRopes: () => boolean;
};

type Phase =
  | "ready"
  | "running"
  | "paused"
  | "completion-preview"
  | "cutting"
  | "completed";
type Point = { x: number; y: number };

const PAUSE_PULL_DISTANCE = 44;
const COMPLETION_FLIP_DURATION_MS = 900;
const COMPLETION_FACE_REVEAL_MS = 225;
const COMPLETION_HOLD_DURATION_MS = 850;
const COIN_FLIGHT_COUNT = 6;
const CUT_TRAIL_CLEAR_DELAY_MS = 210;
const CUT_TRAIL_FADE_DURATION_MS = 60;
const CANCELLATION_BLOCKED_DURATION_MS = 3_000;
const CUT_TRAIL_MAX_WIDTH_PX = 10;
const CUT_TRAIL_WIDTH_PEAK = 0.75;
const CARD_FOCUS_DISMISS_DISTANCE = 96;
const CARD_FOCUS_DISMISS_VELOCITY = 700;
const MOBILE_VIEWPORT_QUERY = "(max-width: 820px)";

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
  previousCompletions,
  layoutSessionId,
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
  onPurchaseRedRopes,
}: Props) {
  const { t } = useTranslation();
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
  const readyEntranceDropRef = useRef(
    initiallyReady &&
      !reduceMotion &&
      Date.now() - assignment.revealedAt < 2_500,
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
    elapsedForAssignment(assignment, Date.now()),
  );
  const [gameTitle, setGameTitle] = useState("");
  const [cancellationBlocked, setCancellationBlocked] = useState(false);
  const [animateReveal] = useState(
    () => !reduceMotion && Date.now() - assignment.revealedAt < 1_500,
  );
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
  const startedAtRef = useRef<number | null>(assignment.startedAt);
  const pausedAtRef = useRef<number | null>(assignment.pausedAt);
  const pausedTotalRef = useRef(assignment.pausedTotalMs);
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

    if (
      !isMobileViewport ||
      phase === "completion-preview" ||
      phase === "cutting" ||
      phase === "completed"
    ) {
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
      phase === "completion-preview" ||
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

  function beginCompletionPreview() {
    if (
      exitStartedRef.current ||
      phase !== "paused" ||
      (!debugMode && elapsedMs < task.minimumDurationMinutes * 60_000)
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
    setPhase("completion-preview");
  }

  function saveCompletionPreview() {
    if (phase !== "completion-preview") return;
    const award = calculateCompletionPoints(elapsedMs);
    const cardRect = cardProjectionRef.current?.getBoundingClientRect();
    const triggerRect = document
      .querySelector<HTMLElement>("[data-profile-trigger]")
      ?.getBoundingClientRect();
    const start = cardRect
      ? {
          x: cardRect.left + cardRect.width / 2,
          y: cardRect.top + cardRect.height * 0.58,
        }
      : { x: window.innerWidth / 2, y: window.innerHeight / 2 };
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
        onComplete(gameTitle);
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

  function finishCoinFlight(index: number) {
    if (!coinFlight || coinFlightFinishedRef.current) return;
    const pointsReceived = Math.round(
      (coinFlight.award * (index + 1)) / COIN_FLIGHT_COUNT,
    );
    onCoinHit(pointsReceived);
    if (index !== COIN_FLIGHT_COUNT - 1) return;
    coinFlightFinishedRef.current = true;
    completionFinalizeTimeoutRef.current = window.setTimeout(() => {
      onComplete(gameTitle);
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
      phase === "completion-preview" ||
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
    setTimerDragging(false);
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

  const exiting =
    phase === "completion-preview" ||
    phase === "cutting" ||
    phase === "completed";
  const previewingCompletion = phase === "completion-preview";
  const completed = phase === "completed";
  const minimumDurationMs = task.minimumDurationMinutes * 60_000;
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
  const displayedGameTitle = sanitizeGameTitle(gameTitle);
  const cardFocusAvailable = isMobileViewport && revealFinished && !exiting;
  const hasNoRopes = redRopes <= 0;
  const readyUiVisible =
    phase === "ready" && ropeMode !== "resumePullback" && !timerDragging;
  const canCutRope =
    (phase === "running" || phase === "paused") && (debugMode || redRopes > 0);
  const returnTooltipId = `back-to-selection-tooltip-${assignment.sessionId}`;
  const priorCompletionRows = previousCompletions.slice(0, 3);

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
      style={getQuestCardAccentStyle(task.id, task.moodId)}
      data-card-focused={cardFocused ? "true" : undefined}
      data-no-ropes={hasNoRopes ? "true" : undefined}
      data-phase={phase}
      data-reveal-complete={revealFinished ? "true" : undefined}
      data-timer-entrance={timerEntranceSettling ? "dropping" : "settled"}
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
      <AnimatePresence>
        {previewingCompletion && (
          <motion.p
            className={styles.completionPrompt}
            initial={reduceMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
          >
            <Trans
              i18nKey="ui.timer.completionPreviewPrompt"
              components={{ strong: <strong /> }}
            />
          </motion.p>
        )}
      </AnimatePresence>
      {completed && coinFlight
        ? Array.from({ length: COIN_FLIGHT_COUNT }, (_, index) => (
            <FlyingCoin
              end={coinFlight.end}
              index={index}
              isMobileViewport={isMobileViewport}
              key={`coin-flight-${index}`}
              reduceMotion={reduceMotion}
              start={coinFlight.start}
              onComplete={() => finishCoinFlight(index)}
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
        style={getQuestCardAccentStyle(task.id, task.moodId)}
      >
        <motion.div
          ref={cardProjectionRef}
          className={styles.activeCardProjection}
          layoutId={`task-card-${layoutSessionId}-${task.id}`}
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
            scale:
              previewingCompletion || completed
                ? isMobileViewport
                  ? 1
                  : 0.95
                : 1,
            x: previewingCompletion || completed ? completionOffset.x : 0,
            y: previewingCompletion || completed ? completionOffset.y : 0,
            rotate: cardFocused || previewingCompletion || completed ? 0 : -3.5,
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
              <QuestCardBack
                minimumDurationMinutes={task.minimumDurationMinutes}
                moodTitle={task.mood.title}
                name={task.name}
                suggestedDurationMinutes={task.suggestedDurationMinutes}
                title={task.title}
                variant="summary"
              />
            </div>

            <div className={styles.revealFront}>
              <motion.div
                className={styles.completionFlip}
                initial={false}
                animate={{
                  rotateY: completed ? 540 : previewingCompletion ? 180 : 0,
                }}
                transition={
                  reduceMotion
                    ? { duration: 0 }
                    : {
                        duration: completed
                          ? COMPLETION_FLIP_DURATION_MS / 1000
                          : previewingCompletion
                            ? 0.74
                            : 0,
                        ease: [0.55, 0.06, 0.15, 0.86],
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
                    if (event.pointerType === "mouse") setCardHoverArmed(true);
                  }}
                  onPointerOut={(event) => {
                    handleCardPointerLeave(event);
                  }}
                  aria-label={t("ui.quest.activeLabel", {
                    mood: task.mood.title,
                    title: task.title,
                  })}
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
                    <QuestCardMeta
                      minimumDurationMinutes={task.minimumDurationMinutes}
                      moodTitle={task.mood.title}
                      name={task.name}
                      suggestedDurationMinutes={task.suggestedDurationMinutes}
                    />

                    <motion.div className={styles.questDetails} initial={false}>
                      <h2 className={styles.questTitle}>{task.title}</h2>
                      <p className={styles.questDescription}>
                        {task.completion}
                      </p>
                      <QuestTips tips={task.tips} />
                    </motion.div>

                    <span className={styles.cardBrand} aria-hidden="true">
                      <img
                        src={`${import.meta.env.BASE_URL}sidequest-wordmark.svg`}
                        alt=""
                        width="837"
                        height="550"
                      />
                    </span>
                  </motion.div>
                  {cardFocusAvailable && !cardFocused && (
                    <button
                      ref={cardFocusTriggerRef}
                      className={styles.cardFocusTrigger}
                      type="button"
                      aria-label={t("ui.quest.focusCard", {
                        title: task.title,
                      })}
                      onClick={() => setCardFocused(true)}
                    />
                  )}
                </article>
                {revealFinished && (
                  <section
                    className={`${styles.activeQuestCard} ${styles.completionCardBack}`}
                    aria-hidden={
                      previewingCompletion || completed ? undefined : "true"
                    }
                  >
                    <QuestCardBack variant="pattern" />
                    {(previewingCompletion || completed) && (
                      <div
                        className={styles.completionBackContent}
                        data-finished={showFinishedFace || undefined}
                      >
                        <QuestCardMeta
                          minimumDurationMinutes={task.minimumDurationMinutes}
                          moodTitle={task.mood.title}
                          suggestedDurationMinutes={
                            task.suggestedDurationMinutes
                          }
                        />
                        <div className={styles.completionBackSummary}>
                          <h2>{task.name}</h2>
                          <p>{task.title}</p>
                        </div>
                        <AnimatePresence mode="wait" initial={false}>
                          {showFinishedFace ? (
                            <motion.div
                              className={styles.completedCardResult}
                              key="completed-card-result"
                              role="status"
                              aria-live="polite"
                              initial={reduceMotion ? false : { opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: reduceMotion ? 0 : 0.2 }}
                            >
                              <CompletionCheckIcon />
                              <span>{t("ui.timer.yourTime")}</span>
                              <strong>
                                {formatRunningDuration(elapsedMs)}
                              </strong>
                              {displayedGameTitle && (
                                <b>{displayedGameTitle}</b>
                              )}
                            </motion.div>
                          ) : (
                            <motion.form
                              className={styles.completionTitleForm}
                              key="completion-title-form"
                              onSubmit={(event) => {
                                event.preventDefault();
                                saveCompletionPreview();
                              }}
                              initial={reduceMotion ? false : { opacity: 0 }}
                              animate={{ opacity: 1 }}
                            >
                              <span>{t("ui.timer.yourTime")}</span>
                              <strong>
                                {formatRunningDuration(elapsedMs)}
                              </strong>
                              <input
                                autoFocus
                                className={styles.completionGameTitleInput}
                                type="text"
                                value={gameTitle}
                                maxLength={80}
                                aria-label={t("ui.timer.gameTitleLabel")}
                                placeholder={t("ui.timer.addGameTitle")}
                                onChange={(event) =>
                                  setGameTitle(event.target.value)
                                }
                              />
                              <button
                                className={`${styles.drawerActionButton} ${styles.completionSaveAction}`}
                                data-variant="white"
                                type="submit"
                              >
                                {t("ui.timer.saveCompletion")}
                              </button>
                            </motion.form>
                          )}
                        </AnimatePresence>
                      </div>
                    )}
                  </section>
                )}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className={styles.timerRig}
        ref={rigRef}
        animate={{
          opacity: previewingCompletion || completed || !revealFinished ? 0 : 1,
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
            {(readyUiVisible || (phase === "paused" && !timerDragging)) &&
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

        <AnimatePresence>
          {phase === "paused" && !timerDragging && (
            <motion.form
              className={styles.pausePanel}
              data-cut-ignore
              onSubmit={(event) => {
                event.preventDefault();
                if (!canComplete) return;
                beginCompletionPreview();
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
                  <p>
                    {hasNoRopes
                      ? t("ui.timer.noRopesRemaining")
                      : t("ui.timer.redRopesRemaining", {
                          count: redRopes,
                        })}
                  </p>
                  {hasNoRopes && coins >= RED_ROPE_BUNDLE_COST && (
                    <RopePurchaseRow
                      coins={coins}
                      onPurchase={onPurchaseRedRopes}
                      variant="black"
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
              className={`${styles.moodEditControl} ${styles.timerReturnControl}`}
              initial={reduceMotion ? false : { opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduceMotion ? 0 : -3 }}
              transition={{ duration: reduceMotion ? 0 : 0.16 }}
            >
              <button
                type="button"
                aria-describedby={
                  isMobileViewport ? undefined : returnTooltipId
                }
                onClick={returnToSelection}
              >
                <span>{t("ui.timer.backToSelection")}</span>
              </button>
              {/* {!isMobileViewport && (
                <span
                  className={styles.moodEditTooltip}
                  id={returnTooltipId}
                  role="tooltip"
                >
                  {t("ui.timer.backToSelectionTooltip")}
                </span>
              )} */}
            </motion.span>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {!exiting &&
            !timerDragging &&
            (phase !== "ready" || readyUiVisible) &&
            (phase !== "paused" || canComplete) &&
            !(
              phase === "running" &&
              priorCompletionRows.length > 0 &&
              !hasNoRopes
            ) && (
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
                          count: task.minimumDurationMinutes,
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
                {phase === "ready" && hasNoRopes && (
                  <span>{t("ui.timer.noRopesRemaining")}</span>
                )}
                {(phase === "running" || phase === "paused") && (
                  <span>
                    {hasNoRopes
                      ? t("ui.timer.noRopesRemaining")
                      : t("ui.timer.cutStop")}
                  </span>
                )}
                {hasNoRopes && coins >= RED_ROPE_BUNDLE_COST && (
                  <RopePurchaseRow
                    coins={coins}
                    onPurchase={onPurchaseRedRopes}
                    variant="black"
                  />
                )}
              </motion.div>
            )}
        </AnimatePresence>

        <AnimatePresence>
          {phase === "running" &&
            !timerDragging &&
            !hasNoRopes &&
            priorCompletionRows.length > 0 && (
              <motion.section
                className={styles.previousCompletionPanel}
                aria-label={t("ui.timer.previousCompletions")}
                initial={reduceMotion ? false : { opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -3 }}
              >
                <p>{t("ui.timer.previousCompletions")}</p>
                <ol>
                  {priorCompletionRows.map((completion) => (
                    <li key={completion.id}>
                      <strong>
                        {completion.gameTitle ?? t("ui.history.noGameTitle")}
                      </strong>
                      <time>
                        {formatRunningDuration(completion.durationMs)}
                      </time>
                    </li>
                  ))}
                </ol>
              </motion.section>
            )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

function FlyingCoin({
  end,
  index,
  isMobileViewport,
  onComplete,
  reduceMotion,
  start,
}: {
  end: Point;
  index: number;
  isMobileViewport: boolean;
  onComplete: () => void;
  reduceMotion: boolean;
  start: Point;
}) {
  const rotationDirection = isMobileViewport ? 1 : -1;
  const arcX =
    start.x + (end.x - start.x) * 0.43 + rotationDirection * (54 + index * 9);
  const arcY = Math.min(start.y, end.y) - 105 - index * 10;

  return (
    <motion.span
      className={styles.flyingCoin}
      aria-hidden="true"
      initial={{
        left: start.x,
        opacity: 0,
        scale: 0.55,
        top: start.y,
      }}
      animate={
        reduceMotion
          ? { left: end.x, opacity: 0, scale: 1, top: end.y }
          : {
              left: [start.x, arcX, end.x],
              opacity: [0, 1, 1, 0],
              rotate: [0, rotationDirection * 180, rotationDirection * 420],
              scale: [0.55, 2, 1.6, 0.3],
              top: [start.y, arcY, end.y],
            }
      }
      transition={{
        delay: reduceMotion ? 0 : 0.34 + index * 0.11,
        duration: reduceMotion ? 0 : 0.78,
        ease: [0.35, 0.02, 0.16, 1],
      }}
      onAnimationComplete={onComplete}
    >
      <CoinIcon />
    </motion.span>
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
  useFullMobileRig: boolean,
): RopePoint {
  const compactLayout = window.matchMedia("(max-width: 820px)").matches;
  const rigHeight =
    window.innerHeight * (compactLayout && !useFullMobileRig ? 0.52 : 1);
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
