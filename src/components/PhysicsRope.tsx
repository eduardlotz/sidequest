import {
  useEffect,
  useRef,
  type MutableRefObject,
  type RefObject,
} from "react";
import styles from "../App.module.css";

export type RopePoint = { x: number; y: number };

export type RopeCut = {
  curveT: number;
  point: RopePoint;
  swipeX: number;
};

export type RopeMode = "ready" | "running" | "paused" | "resumePullback";
export type TimerPose = RopePoint & {
  mode: RopeMode;
  rotation: number;
  settled: boolean;
  velocity: RopePoint;
};
export type RopeRelease = {
  mode: RopeMode;
  sequence: number;
  velocity: RopePoint;
};

type Props = {
  cut: RopeCut | null;
  draggingRef: MutableRefObject<boolean>;
  isMobileViewport: boolean;
  mode: RopeMode;
  onTimerMove: (pose: TimerPose) => void;
  red: boolean;
  reduceMotion: boolean;
  releaseRef: MutableRefObject<RopeRelease | null>;
  screenPointsRef: MutableRefObject<RopePoint[]>;
  targetRef: MutableRefObject<RopePoint>;
};

type VerletPoint = {
  inverseMass: number;
  previousX: number;
  previousY: number;
  x: number;
  y: number;
};

type CutState = {
  linkIndex: number;
  localT: number;
  lowerTip: VerletPoint;
  upperTip: VerletPoint;
};

type RopeState = {
  accumulator: number;
  anchorX: number;
  currentLength: number;
  cut: CutState | null;
  handledReleaseSequence: number;
  height: number;
  isMobileViewport: boolean;
  lastFrameAt: number;
  lengthVelocity: number;
  mode: RopeMode;
  points: VerletPoint[];
  settledSteps: number;
  velocity: RopePoint;
  width: number;
};

const ROPE_LINKS = 8;
const CURVE_POINTS = 36;
const FIXED_TIME_STEP = 1 / 120;
const MAX_FRAME_DELTA = 1 / 30;
const MAX_STEPS_PER_FRAME = 5;
const CONSTRAINT_ITERATIONS = 7;
const ANCHOR_OFFSET_Y = -8;
const GRAVITY = 3_600;
const LINK_INVERSE_MASS = 1 / 0.055;
const TIMER_INVERSE_MASS = 1 / 1.65;
const CUT_TIP_INVERSE_MASS = 1 / 0.018;
const RELEASE_VELOCITY_TRANSFER = 0.48;
const MAX_RELEASE_SPEED = 1_200;
const MAX_STRETCH_MIN = 54;
const MAX_STRETCH_MAX = 76;
const DRAG_LENGTH_STIFFNESS = 560;
const DRAG_LENGTH_DAMPING = 34;
const RETURN_LENGTH_STIFFNESS = 108;
const RETURN_LENGTH_DAMPING = 10.5;
const PAUSED_RETURN_LENGTH_STIFFNESS = 92;
const PAUSED_RETURN_LENGTH_DAMPING = 15.5;
const GRAB_STIFFNESS = 720;
const GRAB_DAMPING = 38;

export const RUNNING_TIMER_TOP_RATIO = 0.325;
export const PAUSED_TIMER_TOP_RATIO = 0.155;
export const READY_TIMER_TOP_RATIO = 0.17;
export const RESUME_PULLBACK_TIMER_TOP_RATIO = 0.11;
export const MOBILE_RUNNING_TIMER_TOP_RATIO = 0.3675;
export const MOBILE_READY_TIMER_TOP_RATIO = 0.1615;
export const MOBILE_PAUSED_TIMER_TOP_RATIO =
  MOBILE_READY_TIMER_TOP_RATIO * 0.6;

export function PhysicsRope({
  cut,
  draggingRef,
  isMobileViewport,
  mode,
  onTimerMove,
  red,
  reduceMotion,
  releaseRef,
  screenPointsRef,
  targetRef,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const upperPathRef = useRef<SVGPathElement>(null);
  const lowerPathRef = useRef<SVGPathElement>(null);
  const latestRef = useRef({
    cut,
    draggingRef,
    isMobileViewport,
    mode,
    onTimerMove,
    reduceMotion,
    releaseRef,
    screenPointsRef,
    targetRef,
  });
  latestRef.current = {
    cut,
    draggingRef,
    isMobileViewport,
    mode,
    onTimerMove,
    reduceMotion,
    releaseRef,
    screenPointsRef,
    targetRef,
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const width = Math.max(1, rect.width || window.innerWidth);
    const height = Math.max(1, rect.height || window.innerHeight);
    const state = createRopeState(
      width,
      height,
      targetRef.current,
      mode,
      isMobileViewport,
    );
    let animationFrame = 0;

    function resizeSimulation() {
      const nextRect = container?.getBoundingClientRect();
      if (!nextRect) return;
      const nextWidth = Math.max(1, nextRect.width);
      const nextHeight = Math.max(1, nextRect.height);
      if (nextWidth === state.width && nextHeight === state.height) return;

      const nextAnchorX = nextWidth / 2;
      const horizontalShift = nextAnchorX - state.anchorX;
      for (const point of state.points) {
        point.x += horizontalShift;
        point.previousX += horizontalShift;
      }
      if (state.cut) {
        shiftPointX(state.cut.upperTip, horizontalShift);
        shiftPointX(state.cut.lowerTip, horizontalShift);
      }
      state.anchorX = nextAnchorX;
      state.width = nextWidth;
      state.height = nextHeight;
    }

    const resizeObserver = new ResizeObserver(resizeSimulation);
    resizeObserver.observe(container);

    function frame(frameAt: number) {
      const latest = latestRef.current;
      resizeSimulation();
      state.mode = latest.mode;
      state.isMobileViewport = latest.isMobileViewport;
      handleCut(state, latest.cut);
      handleRelease(state, latest.releaseRef.current);

      const frameDelta = state.lastFrameAt === 0
        ? 1 / 60
        : Math.min(MAX_FRAME_DELTA, (frameAt - state.lastFrameAt) / 1_000);
      state.lastFrameAt = frameAt;
      state.accumulator += Math.max(0, frameDelta);

      let steps = 0;
      while (
        state.accumulator >= FIXED_TIME_STEP &&
        steps < MAX_STEPS_PER_FRAME
      ) {
        stepRope(state, latest);
        state.accumulator -= FIXED_TIME_STEP;
        steps += 1;
      }
      if (steps === MAX_STEPS_PER_FRAME) state.accumulator = 0;

      renderRope(
        state,
        upperPathRef,
        lowerPathRef,
        latest.screenPointsRef,
        latest.onTimerMove,
        latest.draggingRef.current,
      );
      animationFrame = window.requestAnimationFrame(frame);
    }

    animationFrame = window.requestAnimationFrame(frame);
    return () => {
      window.cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={styles.ropeCanvas}
      data-rope-red={red ? "true" : "false"}
      aria-hidden="true"
    >
      <svg className={styles.ropeVisual} aria-hidden="true">
        <path ref={upperPathRef} className={styles.ropePath} />
        <path ref={lowerPathRef} className={styles.ropePath} />
      </svg>
    </div>
  );
}

function createRopeState(
  width: number,
  height: number,
  initialOffset: RopePoint,
  mode: RopeMode,
  isMobileViewport: boolean,
): RopeState {
  const anchorX = width / 2;
  const endpoint = {
    x: anchorX + initialOffset.x,
    y: height * RUNNING_TIMER_TOP_RATIO + initialOffset.y,
  };
  const points = Array.from({ length: ROPE_LINKS + 1 }, (_, index) => {
    const ratio = index / ROPE_LINKS;
    const x = anchorX + (endpoint.x - anchorX) * ratio;
    const y = ANCHOR_OFFSET_Y + (endpoint.y - ANCHOR_OFFSET_Y) * ratio;
    return createPoint(
      x,
      y,
      index === 0
        ? 0
        : index === ROPE_LINKS
          ? TIMER_INVERSE_MASS
          : LINK_INVERSE_MASS,
    );
  });
  const baseLength = ropeLengthForMode(mode, height, isMobileViewport);

  return {
    accumulator: 0,
    anchorX,
    currentLength: Math.max(
      baseLength,
      distanceBetween(points[0], points[ROPE_LINKS]),
    ),
    cut: null,
    handledReleaseSequence: 0,
    height,
    isMobileViewport,
    lastFrameAt: 0,
    lengthVelocity: 0,
    mode,
    points,
    settledSteps: 0,
    velocity: { x: 0, y: 0 },
    width,
  };
}

function stepRope(
  state: RopeState,
  latest: {
    cut: RopeCut | null;
    draggingRef: MutableRefObject<boolean>;
    isMobileViewport: boolean;
    mode: RopeMode;
    onTimerMove: (pose: TimerPose) => void;
    reduceMotion: boolean;
    releaseRef: MutableRefObject<RopeRelease | null>;
    screenPointsRef: MutableRefObject<RopePoint[]>;
    targetRef: MutableRefObject<RopePoint>;
  },
) {
  const dragging = latest.draggingRef.current && !state.cut;
  const baseLength = ropeLengthForMode(
    state.mode,
    state.height,
    state.isMobileViewport,
  );
  const grabTarget = timerOffsetToScreen(
    latest.targetRef.current,
    state.width,
    state.height,
  );
  const requestedLength = Math.hypot(
    grabTarget.x - state.anchorX,
    grabTarget.y - ANCHOR_OFFSET_Y,
  );
  const maxStretch = Math.max(
    MAX_STRETCH_MIN,
    Math.min(MAX_STRETCH_MAX, state.height * 0.085),
  );
  const desiredLength = dragging
    ? Math.max(baseLength, Math.min(baseLength + maxStretch, requestedLength))
    : baseLength;
  const returningToPaused = !dragging && state.mode === "paused";
  const lengthStiffness = dragging
    ? DRAG_LENGTH_STIFFNESS
    : returningToPaused
      ? PAUSED_RETURN_LENGTH_STIFFNESS
      : RETURN_LENGTH_STIFFNESS;
  const lengthDamping = dragging
    ? DRAG_LENGTH_DAMPING
    : returningToPaused
      ? PAUSED_RETURN_LENGTH_DAMPING
      : RETURN_LENGTH_DAMPING;
  state.lengthVelocity +=
    ((desiredLength - state.currentLength) * lengthStiffness -
      state.lengthVelocity * lengthDamping) * FIXED_TIME_STEP;
  state.currentLength = Math.max(
    state.height * 0.07,
    state.currentLength + state.lengthVelocity * FIXED_TIME_STEP,
  );

  for (let index = 1; index < state.points.length; index += 1) {
    integratePoint(
      state.points[index],
      index === ROPE_LINKS && dragging ? grabTarget : null,
      index === ROPE_LINKS,
      latest.reduceMotion,
    );
  }
  if (state.cut) {
    integratePoint(state.cut.upperTip, null, false, latest.reduceMotion);
    integratePoint(state.cut.lowerTip, null, false, latest.reduceMotion);
  }

  const segmentLength = state.currentLength / ROPE_LINKS;
  for (let iteration = 0; iteration < CONSTRAINT_ITERATIONS; iteration += 1) {
    pinAnchor(state);
    for (let index = 0; index < ROPE_LINKS; index += 1) {
      if (state.cut?.linkIndex === index) continue;
      constrainDistance(
        state.points[index],
        state.points[index + 1],
        segmentLength,
      );
    }
    if (state.cut) {
      constrainDistance(
        state.points[state.cut.linkIndex],
        state.cut.upperTip,
        segmentLength * state.cut.localT,
      );
      constrainDistance(
        state.cut.lowerTip,
        state.points[state.cut.linkIndex + 1],
        segmentLength * (1 - state.cut.localT),
      );
    }
  }
  pinAnchor(state);

  const endpoint = state.points[ROPE_LINKS];
  state.velocity = {
    x: clamp(
      (endpoint.x - endpoint.previousX) / FIXED_TIME_STEP,
      -MAX_RELEASE_SPEED,
      MAX_RELEASE_SPEED,
    ),
    y: clamp(
      (endpoint.y - endpoint.previousY) / FIXED_TIME_STEP,
      -MAX_RELEASE_SPEED,
      MAX_RELEASE_SPEED,
    ),
  };

  const speed = Math.hypot(state.velocity.x, state.velocity.y);
  const lengthSettled =
    Math.abs(state.currentLength - desiredLength) < 1.5 &&
    Math.abs(state.lengthVelocity) < 8;
  if (!dragging && !state.cut && lengthSettled && speed < 42) {
    state.settledSteps += 1;
  } else {
    state.settledSteps = 0;
  }
}

function integratePoint(
  point: VerletPoint,
  grabTarget: RopePoint | null,
  timerMass: boolean,
  reduceMotion: boolean,
) {
  const damping = reduceMotion ? 0.965 : timerMass ? 0.986 : 0.989;
  const velocityX = (point.x - point.previousX) * damping;
  const velocityY = (point.y - point.previousY) * damping;
  let accelerationX = 0;
  let accelerationY = GRAVITY;

  if (grabTarget) {
    const physicalVelocityX = velocityX / FIXED_TIME_STEP;
    const physicalVelocityY = velocityY / FIXED_TIME_STEP;
    accelerationX +=
      (grabTarget.x - point.x) * GRAB_STIFFNESS -
      physicalVelocityX * GRAB_DAMPING;
    accelerationY +=
      (grabTarget.y - point.y) * GRAB_STIFFNESS -
      physicalVelocityY * GRAB_DAMPING;
  }

  point.previousX = point.x;
  point.previousY = point.y;
  point.x += velocityX + accelerationX * FIXED_TIME_STEP ** 2;
  point.y += velocityY + accelerationY * FIXED_TIME_STEP ** 2;
}

function constrainDistance(
  first: VerletPoint,
  second: VerletPoint,
  maximumDistance: number,
) {
  const deltaX = second.x - first.x;
  const deltaY = second.y - first.y;
  const distance = Math.hypot(deltaX, deltaY);
  if (distance <= maximumDistance || distance < 0.0001) return;

  const totalInverseMass = first.inverseMass + second.inverseMass;
  if (totalInverseMass <= 0) return;
  const correction = (distance - maximumDistance) / distance;
  const firstShare = first.inverseMass / totalInverseMass;
  const secondShare = second.inverseMass / totalInverseMass;
  first.x += deltaX * correction * firstShare;
  first.y += deltaY * correction * firstShare;
  second.x -= deltaX * correction * secondShare;
  second.y -= deltaY * correction * secondShare;
}

function handleRelease(state: RopeState, release: RopeRelease | null) {
  if (!release || release.sequence === state.handledReleaseSequence) return;
  state.mode = release.mode;
  const velocity = clampVector(release.velocity, MAX_RELEASE_SPEED);
  const endpoint = state.points[ROPE_LINKS];
  endpoint.previousX =
    endpoint.x - velocity.x * RELEASE_VELOCITY_TRANSFER * FIXED_TIME_STEP;
  endpoint.previousY =
    endpoint.y - velocity.y * RELEASE_VELOCITY_TRANSFER * FIXED_TIME_STEP;
  state.velocity = velocity;
  state.handledReleaseSequence = release.sequence;
  state.settledSteps = 0;
}

function handleCut(state: RopeState, cut: RopeCut | null) {
  if (!cut || state.cut) return;
  const linkPosition = Math.max(
    0.001,
    Math.min(ROPE_LINKS - 0.001, cut.curveT * ROPE_LINKS),
  );
  const linkIndex = Math.min(ROPE_LINKS - 1, Math.floor(linkPosition));
  const localT = linkPosition - linkIndex;
  state.cut = {
    linkIndex,
    localT,
    lowerTip: createPoint(cut.point.x, cut.point.y, CUT_TIP_INVERSE_MASS),
    upperTip: createPoint(cut.point.x, cut.point.y, CUT_TIP_INVERSE_MASS),
  };
}

function renderRope(
  state: RopeState,
  upperPathRef: RefObject<SVGPathElement | null>,
  lowerPathRef: RefObject<SVGPathElement | null>,
  screenPointsRef: MutableRefObject<RopePoint[]>,
  onTimerMove: (pose: TimerPose) => void,
  dragging: boolean,
) {
  let timerRopePoints: RopePoint[];
  if (!state.cut) {
    const controls = state.points.map(pointToRopePoint);
    const renderedPoints = sampleCurve(controls);
    updateRopePath(
      upperPathRef.current,
      renderedPoints,
      ropeStrokeWidth(state, dragging),
    );
    hideRopePath(lowerPathRef.current);
    screenPointsRef.current = renderedPoints;
    timerRopePoints = renderedPoints;
  } else {
    const upperControls = [
      ...state.points
        .slice(0, state.cut.linkIndex + 1)
        .map(pointToRopePoint),
      pointToRopePoint(state.cut.upperTip),
    ];
    const lowerControls = [
      pointToRopePoint(state.cut.lowerTip),
      ...state.points
        .slice(state.cut.linkIndex + 1)
        .map(pointToRopePoint),
    ];
    const upperPoints = sampleCurve(upperControls);
    const lowerPoints = sampleCurve(lowerControls);
    updateRopePath(upperPathRef.current, upperPoints, ropeStrokeWidth(state, false));
    updateRopePath(lowerPathRef.current, lowerPoints, ropeStrokeWidth(state, false));
    timerRopePoints = lowerPoints;
  }

  const endpoint = state.points[ROPE_LINKS];
  onTimerMove({
    mode: state.mode,
    rotation: timerRotationFromRope(timerRopePoints, state.velocity.x),
    settled: state.settledSteps >= 10,
    velocity: state.velocity,
    x: endpoint.x - state.width / 2,
    y: endpoint.y - state.height * RUNNING_TIMER_TOP_RATIO,
  });
}

function pinAnchor(state: RopeState) {
  const anchor = state.points[0];
  anchor.x = state.anchorX;
  anchor.y = ANCHOR_OFFSET_Y;
  anchor.previousX = state.anchorX;
  anchor.previousY = ANCHOR_OFFSET_Y;
}

function ropeLengthForMode(
  mode: RopeMode,
  height: number,
  isMobileViewport: boolean,
) {
  const topRatio = mode === "paused"
    ? isMobileViewport
      ? MOBILE_PAUSED_TIMER_TOP_RATIO
      : PAUSED_TIMER_TOP_RATIO
    : mode === "ready"
      ? isMobileViewport
        ? MOBILE_READY_TIMER_TOP_RATIO
        : READY_TIMER_TOP_RATIO
      : mode === "resumePullback"
        ? RESUME_PULLBACK_TIMER_TOP_RATIO
        : isMobileViewport
          ? MOBILE_RUNNING_TIMER_TOP_RATIO
          : RUNNING_TIMER_TOP_RATIO;
  return (height * topRatio + Math.abs(ANCHOR_OFFSET_Y)) * 1.025;
}

function timerOffsetToScreen(
  offset: RopePoint,
  width: number,
  height: number,
): RopePoint {
  return {
    x: width / 2 + offset.x,
    y: height * RUNNING_TIMER_TOP_RATIO + offset.y,
  };
}

function createPoint(
  x: number,
  y: number,
  inverseMass: number,
): VerletPoint {
  return { inverseMass, previousX: x, previousY: y, x, y };
}

function pointToRopePoint(point: VerletPoint): RopePoint {
  return { x: point.x, y: point.y };
}

function shiftPointX(point: VerletPoint, shift: number) {
  point.x += shift;
  point.previousX += shift;
}

function distanceBetween(first: VerletPoint, second: VerletPoint) {
  return Math.hypot(second.x - first.x, second.y - first.y);
}

function clamp(value: number, minimum: number, maximum: number) {
  return Math.max(minimum, Math.min(maximum, value));
}

function clampVector(point: RopePoint, maximumLength: number): RopePoint {
  const length = Math.hypot(point.x, point.y);
  if (length <= maximumLength || length === 0) return point;
  const scale = maximumLength / length;
  return { x: point.x * scale, y: point.y * scale };
}

function sampleCurve(points: RopePoint[]) {
  if (points.length < 3) return points;
  const samples = Math.max(
    12,
    Math.round(CURVE_POINTS * points.length / (ROPE_LINKS + 1)),
  );
  return Array.from({ length: samples + 1 }, (_, sampleIndex) => {
    const progress = sampleIndex / samples * (points.length - 1);
    const index = Math.min(points.length - 2, Math.floor(progress));
    const t = progress - index;
    const first = points[Math.max(0, index - 1)];
    const second = points[index];
    const third = points[Math.min(points.length - 1, index + 1)];
    const fourth = points[Math.min(points.length - 1, index + 2)];
    return {
      x: catmullRom(first.x, second.x, third.x, fourth.x, t),
      y: catmullRom(first.y, second.y, third.y, fourth.y, t),
    };
  });
}

function catmullRom(
  first: number,
  second: number,
  third: number,
  fourth: number,
  t: number,
) {
  const t2 = t * t;
  const t3 = t2 * t;
  return 0.5 * (
    2 * second +
    (-first + third) * t +
    (2 * first - 5 * second + 4 * third - fourth) * t2 +
    (-first + 3 * second - 3 * third + fourth) * t3
  );
}

function timerRotationFromRope(
  points: RopePoint[],
  horizontalVelocity: number,
) {
  if (points.length < 2) return 0;
  const end = points[points.length - 1];
  const tangent = points[Math.max(0, points.length - 5)];
  const ropeAngle = Math.atan2(end.x - tangent.x, end.y - tangent.y) *
    180 /
    Math.PI;
  const velocityTilt = clamp(horizontalVelocity * 0.0022, -3, 3);
  return clamp(ropeAngle * 0.24 + velocityTilt, -12, 12);
}

function updateRopePath(
  path: SVGPathElement | null,
  points: RopePoint[],
  width: number,
) {
  if (!path) return;
  if (points.length < 2) {
    hideRopePath(path);
    return;
  }
  path.style.display = "";
  path.setAttribute(
    "d",
    points
      .map((point, index) =>
        `${index === 0 ? "M" : "L"}${point.x.toFixed(1)} ${point.y.toFixed(1)}`
      )
      .join(" "),
  );
  path.setAttribute("stroke-width", width.toFixed(2));
}

function hideRopePath(path: SVGPathElement | null) {
  if (path) path.style.display = "none";
}

function ropeStrokeWidth(state: RopeState, dragging: boolean) {
  const restingWidth = Math.max(
    6.75,
    Math.min(state.width, state.height) * 0.0155,
  );
  if (!dragging) return restingWidth;
  const baseLength = ropeLengthForMode(
    state.mode,
    state.height,
    state.isMobileViewport,
  );
  const stretchProgress = clamp(
    (state.currentLength - baseLength) / (state.height * 0.075),
    0,
    1,
  );
  return restingWidth * (1 - stretchProgress * 0.32);
}
