import {
  AnimatePresence,
  arc,
  animate,
  motion,
  type PanInfo,
  useMotionValue,
  useMotionValueEvent,
  useSpring,
} from "motion/react";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
import type { HydratedActiveTask } from "../hooks/useTaskRun";
import { formatRunningDuration } from "../lib/format";
import { AnimatedElapsedTime } from "./AnimatedElapsedTime";
import { CheckIcon } from "./Icons";
import { DifficultyDots } from "./DifficultyDots";
import {
  PAUSED_TIMER_TOP_RATIO,
  PhysicsRope,
  RUNNING_TIMER_TOP_RATIO,
  type RopeCut,
  type RopeMode,
  type RopePoint,
  type RopeRelease,
  type TimerPose,
} from "./PhysicsRope";
import styles from "../App.module.css";

type Props = {
  item: HydratedActiveTask;
  reduceMotion: boolean;
  onReplace: () => void;
  onComplete: (durationMs: number, gameTitle: string) => void;
};

type Phase = "running" | "paused" | "cutting" | "completed";
type Point = { x: number; y: number };

const PAUSE_PULL_DISTANCE = 44;

const activeCardArc = arc({
  strength: 0.2,
  peak: 0.52,
  direction: "cw",
});

export function ActiveTaskCard({
  item,
  reduceMotion,
  onReplace,
  onComplete,
}: Props) {
  const { task, assignment } = item;
  const [phase, setPhase] = useState<Phase>("running");
  const [ropeMode, setRopeMode] = useState<RopeMode>("running");
  const [timerSettling, setTimerSettling] = useState(false);
  const [cut, setCut] = useState<RopeCut | null>(null);
  const [gameTitle, setGameTitle] = useState("");
  const [gameTitleFocused, setGameTitleFocused] = useState(false);
  const [savedGameTitle, setSavedGameTitle] = useState("");
  const [elapsedMs, setElapsedMs] = useState(
    () => Date.now() - assignment.startedAt,
  );
  const [cutTrail, setCutTrail] = useState<Point[] | null>(null);
  const dropOnStartRef = useRef(
    !reduceMotion && Date.now() - assignment.startedAt < 2500,
  );
  const initialTimerOffsetRef = useRef<RopePoint>(
    initialTimerDropOffset(dropOnStartRef.current),
  );
  const rigRef = useRef<HTMLDivElement>(null);
  const ropePointsRef = useRef<RopePoint[]>([]);
  const ropeTargetRef = useRef<RopePoint>(initialTimerOffsetRef.current);
  const timerDraggingRef = useRef(false);
  const timerDragVelocityRef = useRef<RopePoint>({ x: 0, y: 0 });
  const ropeReleaseRef = useRef<RopeRelease | null>(null);
  const ropeReleaseSequenceRef = useRef(0);
  const dragOriginRef = useRef<RopePoint>(initialTimerOffsetRef.current);
  const dragTargetRef = useRef<RopePoint>(initialTimerOffsetRef.current);
  const timerReturningRef = useRef(false);
  const timerReturnModeRef = useRef<RopeMode>("running");
  const timerReturnStartedAtRef = useRef(0);
  const timerReturnLastAtRef = useRef(0);
  const timerReturnVelocityRef = useRef<RopePoint>({ x: 0, y: 0 });
  const timerAnimationRef = useRef<Array<{ stop: () => void }>>([]);
  const timerAnimationSequenceRef = useRef(0);
  const pausedAtRef = useRef<number | null>(null);
  const pausedTotalRef = useRef(0);
  const cutGestureRef = useRef(false);
  const exitStartedRef = useRef(false);
  const lastCutPointRef = useRef<Point | null>(null);
  const trailClearTimeoutRef = useRef<number | null>(null);
  const exitTimeoutRef = useRef<number | null>(null);
  const x = useMotionValue(initialTimerOffsetRef.current.x);
  const y = useMotionValue(initialTimerOffsetRef.current.y);
  const timerRotationTarget = useMotionValue(0);
  const timerRotation = useSpring(timerRotationTarget, {
    stiffness: 175,
    damping: 18,
    mass: 0.72,
  });
  const tiltXTarget = useMotionValue(0);
  const tiltYTarget = useMotionValue(0);
  const tiltX = useSpring(tiltXTarget, {
    stiffness: 105,
    damping: 19,
    mass: 0.86,
  });
  const tiltY = useSpring(tiltYTarget, {
    stiffness: 105,
    damping: 19,
    mass: 0.86,
  });

  const readElapsed = useCallback(() => {
    const now = Date.now();
    const openPause = pausedAtRef.current ? now - pausedAtRef.current : 0;
    return Math.max(
      0,
      now - assignment.startedAt - pausedTotalRef.current - openPause,
    );
  }, [assignment.startedAt]);

  useEffect(() => {
    const update = () => setElapsedMs(readElapsed());
    update();
    const interval = window.setInterval(update, 250);
    return () => window.clearInterval(interval);
  }, [readElapsed]);

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
  ) {
    ropeReleaseSequenceRef.current += 1;
    ropeReleaseRef.current = {
      mode,
      offset,
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
    pausedAtRef.current = Date.now();
    setElapsedMs(readElapsed());
    setRopeMode("paused");
    setPhase("paused");
  }

  function continueTimer() {
    timerReturningRef.current = false;
    timerDraggingRef.current = true;
    ropeReleaseRef.current = null;
    timerDragVelocityRef.current = { x: 0, y: 0 };
    if (pausedAtRef.current !== null) {
      pausedTotalRef.current += Date.now() - pausedAtRef.current;
      pausedAtRef.current = null;
    }
    setRopeMode("running");
    setPhase("running");
    settleTimerTo({ x: 0, y: 0 }, { x: 0, y: 0 });
  }

  function beginExit(next: "cutting" | "completed", ropeCut?: RopeCut) {
    if (exitStartedRef.current || phase === "cutting" || phase === "completed")
      return;
    const resolvedGameTitle = gameTitle.trim();
    if (next === "completed" && !resolvedGameTitle) return;
    if (next === "cutting" && !ropeCut) return;
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
    if (next === "completed") setSavedGameTitle(resolvedGameTitle);
    setPhase(next);
    exitTimeoutRef.current = window.setTimeout(
      () => {
        if (next === "completed") onComplete(duration, resolvedGameTitle);
        else onReplace();
      },
      reduceMotion ? 80 : next === "completed" ? 1700 : 1200,
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
    const shouldPause =
      phase === "running" && pullDistance >= PAUSE_PULL_DISTANCE;
    const destinationMode: RopeMode = shouldPause ? "paused" : ropeMode;
    const retracted = projectTimerToRope(requested, destinationMode, rigHeight);

    if (shouldPause) pause();

    timerDragVelocityRef.current = info.velocity;
    beginPhysicalReturn(destinationMode, retracted, info.velocity);
  }

  function tiltActiveCard(event: ReactPointerEvent<HTMLElement>) {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    tiltXTarget.set((0.5 - py) * 12);
    tiltYTarget.set((px - 0.5) * 15);
    card.style.setProperty("--shine-x", `${px * 100}%`);
    card.style.setProperty("--shine-y", `${py * 100}%`);
  }

  function resetActiveCardTilt() {
    tiltXTarget.set(0);
    tiltYTarget.set(0);
  }

  function pointerInRig(event: ReactPointerEvent<HTMLDivElement>): Point {
    const rect = event.currentTarget.getBoundingClientRect();
    return { x: event.clientX - rect.left, y: event.clientY - rect.top };
  }

  function startCut(event: ReactPointerEvent<HTMLDivElement>) {
    const target = event.target as HTMLElement;
    if (
      exitStartedRef.current ||
      target.closest("button") ||
      target.closest("[data-timer-drag]")
    )
      return;
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
    const ropeCut = segmentCutsRope(previous, point, ropePointsRef.current);
    if (ropeCut) {
      cutGestureRef.current = false;
      beginExit("cutting", ropeCut);
      clearCutTrailAfter(240);
    }
  }

  function endCut() {
    cutGestureRef.current = false;
    lastCutPointRef.current = null;
    clearCutTrailAfter(130);
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
        }
        return;
      }

      if (!timerDraggingRef.current) {
        x.set(pose.x);
        y.set(pose.y);
      }
    },
    [reduceMotion, timerRotationTarget, x, y],
  );

  const exiting = phase === "cutting" || phase === "completed";
  const completed = phase === "completed";

  return (
    <div className={styles.activeExperience} data-phase={phase}>
      <div className={styles.activeCardStage} data-difficulty={task.difficulty}>
        <motion.article
          className={styles.activeQuestCard}
          data-difficulty={task.difficulty}
          data-completed={completed || undefined}
          layoutId={`task-card-${task.id}`}
          layoutCrossfade={false}
          transition={
            reduceMotion
              ? { duration: 0 }
              : {
                  type: "spring",
                  stiffness: 220,
                  damping: 23,
                  mass: 0.96,
                  layout: {
                    type: "spring",
                    stiffness: 88,
                    damping: 16,
                    mass: 1.08,
                    path: activeCardArc,
                  },
                }
          }
          initial={false}
          animate={{ scale: completed ? 1.025 : 1 }}
          style={{
            rotate: completed ? -2 : -3.5,
            rotateX: tiltX,
            rotateY: tiltY,
            transformPerspective: 1200,
          }}
          onPointerMove={reduceMotion ? undefined : tiltActiveCard}
          onPointerLeave={reduceMotion ? undefined : resetActiveCardTilt}
          aria-label={`Active ${task.difficulty} quest: ${task.title}`}
        >
          <span className={styles.cardShimmer} aria-hidden="true" />
          <span className={styles.cardDifficulty}>
            <DifficultyDots difficulty={task.difficulty} />
            {capitalize(task.difficulty)}
          </span>
          <span className={styles.activeTitle} role="heading" aria-level={2}>
            {task.title}
          </span>

          <AnimatePresence mode="wait">
            {completed ? (
              <motion.div
                className={styles.completionMark}
                key="complete"
                initial={
                  reduceMotion ? false : { opacity: 0, scale: 0.5, rotate: -18 }
                }
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 330, damping: 19 }}
              >
                <span className={styles.completionBadge}>
                  <CheckIcon />
                  <BayerDither reduceMotion={reduceMotion} />
                </span>
                <strong>{formatRunningDuration(elapsedMs)}</strong>
                <small>{savedGameTitle || "Quest complete"}</small>
              </motion.div>
            ) : (
              <motion.span
                className={styles.cardBrand}
                key="brand"
                aria-hidden="true"
              >
                <img
                  src={`${import.meta.env.BASE_URL}sidequest-wordmark.svg`}
                  alt=""
                  width="837"
                  height="550"
                />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.article>
      </div>

      <div
        className={styles.timerRig}
        ref={rigRef}
        onPointerDown={startCut}
        onPointerMove={moveCut}
        onPointerUp={endCut}
        onPointerCancel={endCut}
      >
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
        <svg className={styles.cutSvg} aria-hidden="true">
          <AnimatePresence>
            {cutTrail && cutTrail.length > 1 && (
              <motion.path
                className={styles.cutTrail}
                d={cutTrailPath(cutTrail)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: reduceMotion ? 0 : 0.13 }}
              />
            )}
          </AnimatePresence>
        </svg>

        <motion.div
          className={styles.timerPosition}
          data-timer-drag
          drag={(phase === "running" || phase === "paused") && !exiting}
          dragConstraints={{ left: -190, right: 190, top: -130, bottom: 130 }}
          dragElastic={0.06}
          dragMomentum={false}
          style={{ x, y }}
          onDragStart={() => {
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
        </motion.div>

        <AnimatePresence>
          {phase === "paused" && !timerSettling && (
            <motion.form
              className={styles.pausePanel}
              onSubmit={(event) => {
                event.preventDefault();
                beginExit("completed");
              }}
              initial={
                reduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: 14, scale: 0.96 }
              }
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8 }}
            >
              <span>Timer paused</span>
              <label className={styles.gameTitleField}>
                <span>Which game did you play?</span>
                <span className={styles.gameTitleInputWrap}>
                  <AnimatePresence initial={false}>
                    {gameTitleFocused && (
                      <motion.span
                        aria-hidden="true"
                        className={styles.gameTitleFocusBackground}
                        initial={
                          reduceMotion
                            ? { opacity: 0 }
                            : { opacity: 0, scale: 0.94 }
                        }
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.94 }}
                        layout
                        transition={
                          reduceMotion
                            ? { duration: 0 }
                            : {
                                layout: {
                                  type: "spring",
                                  stiffness: 520,
                                  damping: 34,
                                  mass: 0.45,
                                },
                                opacity: { duration: 0.12 },
                                scale: {
                                  duration: 0.14,
                                  ease: [0.2, 0.8, 0.2, 1],
                                },
                              }
                        }
                      />
                    )}
                  </AnimatePresence>
                  <input
                    aria-describedby="game-title-count"
                    autoComplete="off"
                    maxLength={36}
                    placeholder="Game title"
                    required
                    size={Math.max(gameTitle.length, "Game title".length, 1)}
                    type="text"
                    value={gameTitle}
                    onBlur={() => setGameTitleFocused(false)}
                    onChange={(event) => setGameTitle(event.target.value)}
                    onFocus={() => setGameTitleFocused(true)}
                  />
                </span>
                <small className={styles.gameTitleCount} id="game-title-count">
                  {gameTitle.length} / 36
                </small>
              </label>
              <div className={styles.pauseActions}>
                <button
                  className={styles.saveAction}
                  type="submit"
                  disabled={!gameTitle.trim()}
                >
                  Save quest
                </button>
                <button
                  className={styles.continueAction}
                  type="button"
                  onClick={continueTimer}
                >
                  Continue
                </button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>

        {phase === "running" && !timerSettling && (
          <p className={styles.timerHint}>
            <strong>Pull the timer to pause.</strong>
            <span>Swipe through the red rope to cancel.</span>
          </p>
        )}
      </div>
    </div>
  );
}

function BayerDither({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <motion.svg
      aria-hidden="true"
      className={styles.bayerDither}
      viewBox="0 0 64 64"
      preserveAspectRatio="none"
      animate={
        reduceMotion
          ? { opacity: 0.28 }
          : {
              opacity: [0.22, 0.36],
              x: [0, 0.8],
              y: [0, -0.8],
            }
      }
      transition={
        reduceMotion
          ? { duration: 0 }
          : {
              duration: 2.8,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            }
      }
    >
      <defs>
        <pattern
          id="bayer-16-pattern"
          width="16"
          height="16"
          patternUnits="userSpaceOnUse"
        >
          {Array.from({ length: 256 }, (_, index) => {
            const column = index % 16;
            const row = Math.floor(index / 16);
            const threshold = bayerThreshold(column, row);
            return (
              <rect
                fill="currentColor"
                key={index}
                opacity={0.08 + (threshold / 255) * 0.62}
                x={column}
                y={row}
                width="1"
                height="1"
              />
            );
          })}
        </pattern>
      </defs>
      <rect width="64" height="64" fill="url(#bayer-16-pattern)" />
    </motion.svg>
  );
}

function bayerThreshold(x: number, y: number) {
  let value = 0;
  for (let bit = 0; bit < 4; bit += 1) {
    const xBit = (x >> bit) & 1;
    const yBit = (y >> bit) & 1;
    value = (value << 2) | ((xBit ^ yBit) << 1) | yBit;
  }
  return value;
}

function appendTrailPoint(trail: Point[], point: Point) {
  const previous = trail[trail.length - 1];
  if (previous && Math.hypot(point.x - previous.x, point.y - previous.y) < 2) {
    return trail;
  }
  return [...trail.slice(-31), point];
}

function cutTrailPath(points: Point[]) {
  if (points.length < 2) return "";
  if (points.length === 2) {
    return `M ${points[0].x} ${points[0].y} L ${points[1].x} ${points[1].y}`;
  }

  let path = `M ${points[0].x} ${points[0].y}`;
  for (let index = 1; index < points.length - 1; index += 1) {
    const point = points[index];
    const next = points[index + 1];
    const midpoint = { x: (point.x + next.x) / 2, y: (point.y + next.y) / 2 };
    path += ` Q ${point.x} ${point.y} ${midpoint.x} ${midpoint.y}`;
  }
  const last = points[points.length - 1];
  return `${path} L ${last.x} ${last.y}`;
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

function capitalize(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function initialTimerDropOffset(shouldDrop: boolean): RopePoint {
  if (!shouldDrop) return { x: 0, y: 0 };

  const compactLayout = window.matchMedia("(max-width: 820px)").matches;
  const rigHeight = window.innerHeight * (compactLayout ? 0.52 : 1);
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
    (mode === "paused" ? PAUSED_TIMER_TOP_RATIO : RUNNING_TIMER_TOP_RATIO);
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
