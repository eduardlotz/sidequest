import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  BallCollider,
  Physics,
  RigidBody,
  useRapier,
  useRopeJoint,
  type RapierRigidBody,
} from "@react-three/rapier";
import {
  createRef,
  useEffect,
  useMemo,
  useRef,
  type MutableRefObject,
  type RefObject,
} from "react";
import * as THREE from "three";
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
  velocity: RopePoint;
};
export type RopeRelease = {
  mode: RopeMode;
  offset: RopePoint;
  preserveOffset?: boolean;
  sequence: number;
  velocity: RopePoint;
};

type Props = {
  cutAvailable: boolean;
  cut: RopeCut | null;
  dragVelocityRef: MutableRefObject<RopePoint>;
  draggingRef: MutableRefObject<boolean>;
  isMobileViewport: boolean;
  mode: RopeMode;
  onTimerMove: (pose: TimerPose) => void;
  reduceMotion: boolean;
  releaseRef: MutableRefObject<RopeRelease | null>;
  screenPointsRef: MutableRefObject<RopePoint[]>;
  targetRef: MutableRefObject<RopePoint>;
};

type SimulationProps = Omit<Props, "cutAvailable"> & {
  initialOffset: RopePoint;
  lowerPathRef: RefObject<SVGPathElement | null>;
  upperPathRef: RefObject<SVGPathElement | null>;
};

type RopeJointRef = ReturnType<typeof useRopeJoint>;

const ROPE_LINKS = 8;
const CURVE_POINTS = 36;
export const RUNNING_TIMER_TOP_RATIO = 0.35;
export const PAUSED_TIMER_TOP_RATIO = 0.17;
export const MOBILE_PAUSED_TIMER_TOP_RATIO = 0.185;
export const READY_TIMER_TOP_RATIO = 0.17;
export const RESUME_PULLBACK_TIMER_TOP_RATIO = 0.11;

export function PhysicsRope({
  cutAvailable,
  cut,
  dragVelocityRef,
  draggingRef,
  isMobileViewport,
  mode,
  onTimerMove,
  reduceMotion,
  releaseRef,
  screenPointsRef,
  targetRef,
}: Props) {
  const upperPathRef = useRef<SVGPathElement>(null);
  const lowerPathRef = useRef<SVGPathElement>(null);
  const initialRunningOffsetRef = useRef(targetRef.current);
  const hasPausedRef = useRef(false);
  if (mode !== "running") hasPausedRef.current = true;
  const initialOffset = mode === "running" && !hasPausedRef.current
    ? initialRunningOffsetRef.current
    : targetRef.current;

  return (
    <div
      className={styles.ropeCanvas}
      data-cut-available={cutAvailable ? "true" : "false"}
      aria-hidden="true"
    >
      <Canvas
        orthographic
        camera={{ position: [0, 0, 10], zoom: 100 }}
        dpr={1}
        gl={{ alpha: true, antialias: false, powerPreference: "low-power" }}
      >
        <Physics gravity={[0, -36, 0]} interpolate timeStep={1 / 60}>
          <RopeSimulation
            key={`${mode}-${isMobileViewport ? "mobile" : "desktop"}`}
            cut={cut}
            dragVelocityRef={dragVelocityRef}
            draggingRef={draggingRef}
            initialOffset={initialOffset}
            isMobileViewport={isMobileViewport}
            lowerPathRef={lowerPathRef}
            mode={mode}
            onTimerMove={onTimerMove}
            reduceMotion={reduceMotion}
            releaseRef={releaseRef}
            screenPointsRef={screenPointsRef}
            targetRef={targetRef}
            upperPathRef={upperPathRef}
          />
        </Physics>
      </Canvas>
      <svg className={styles.ropeVisual} aria-hidden="true">
        <path ref={upperPathRef} className={styles.ropePath} />
        <path ref={lowerPathRef} className={styles.ropePath} />
      </svg>
    </div>
  );
}

function RopeSimulation({
  cut,
  dragVelocityRef,
  draggingRef,
  initialOffset,
  isMobileViewport,
  lowerPathRef,
  mode,
  onTimerMove,
  reduceMotion,
  releaseRef,
  screenPointsRef,
  targetRef,
  upperPathRef,
}: SimulationProps) {
  const { viewport, size } = useThree();
  const { world } = useRapier();
  const bodyRefs = useMemo(
    () => Array.from(
      { length: ROPE_LINKS + 1 },
      () => createRef<RapierRigidBody>() as RefObject<RapierRigidBody>,
    ),
    [],
  );
  const jointRefs = useRef<Array<RopeJointRef | undefined>>([]);
  const upperTipRef = useRef<RapierRigidBody>(null!);
  const lowerTipRef = useRef<RapierRigidBody>(null!);
  const smoothed = useRef<THREE.Vector3[]>([]);
  const elasticPoints = useRef<THREE.Vector3[]>([]);
  const cutHandled = useRef(false);
  const handledReleaseSequence = useRef(0);
  const previousEndpointRef = useRef<RopePoint | null>(null);
  const anchorY = viewport.height / 2 + 0.08;
  const timerTopRatio = mode === "paused" || mode === "ready"
    ? mode === "ready"
      ? READY_TIMER_TOP_RATIO
      : isMobileViewport
        ? MOBILE_PAUSED_TIMER_TOP_RATIO
        : PAUSED_TIMER_TOP_RATIO
    : mode === "resumePullback"
      ? RESUME_PULLBACK_TIMER_TOP_RATIO
      : RUNNING_TIMER_TOP_RATIO;
  const runningTargetY = viewport.height / 2 -
    viewport.height * RUNNING_TIMER_TOP_RATIO;
  const targetY = viewport.height / 2 - viewport.height * timerTopRatio;
  const segmentLength = (anchorY - targetY) * 1.025 / ROPE_LINKS;
  const initialTargetRef = useRef(
    offsetToWorld(initialOffset, runningTargetY, size, viewport),
  );
  const cutTopology = cut ? resolveCutTopology(cut.curveT, segmentLength) : null;
  const cutWorldPoint = cut
    ? screenToWorld(cut.point, size, viewport)
    : null;
  const segmentProps = {
    angularDamping: 4,
    colliders: false as const,
    linearDamping: 1.35,
  };

  useFrame((_, delta) => {
    const bodies = bodyRefs.map((bodyRef) => bodyRef.current);
    if (bodies.some((body) => !body)) return;

    const endpoint = bodies[ROPE_LINKS];
    if (!endpoint) return;

    const target = offsetToWorld(
      targetRef.current,
      runningTargetY,
      size,
      viewport,
    );

    const dragging = draggingRef.current && !cutTopology;
    const anchor = new THREE.Vector3(0, anchorY, 0);
    const release = releaseRef.current;

    if (
      !cutTopology &&
      release?.mode === mode &&
      release.sequence !== handledReleaseSequence.current
    ) {
      const requestedTarget = offsetToWorld(
        release.offset,
        runningTargetY,
        size,
        viewport,
      );
      const direction = requestedTarget.clone().sub(anchor);
      if (direction.lengthSq() < 0.0001) direction.set(0, -1, 0);
      direction.normalize();
      const releasedTarget = release.preserveOffset
        ? requestedTarget
        : anchor.clone().addScaledVector(
            direction,
            segmentLength * ROPE_LINKS * 0.985,
          );
      const tangentialVelocity = new THREE.Vector3(
        release.velocity.x / Math.max(1, size.width) * viewport.width,
        -release.velocity.y / Math.max(1, size.height) * viewport.height,
        0,
      );
      tangentialVelocity.addScaledVector(
        direction,
        -tangentialVelocity.dot(direction),
      );
      tangentialVelocity.multiplyScalar(0.48);
      tangentialVelocity.clampLength(0, viewport.height * 0.68);

      bodies.slice(1).forEach((body, index) => {
        const ratio = (index + 1) / ROPE_LINKS;
        const position = anchor.clone().lerp(releasedTarget, ratio);
        body?.setTranslation(position, true);
        body?.setLinvel(tangentialVelocity.clone().multiplyScalar(ratio), true);
        body?.wakeUp();
      });
      smoothed.current = Array.from({ length: ROPE_LINKS + 1 }, (_, index) =>
        anchor.clone().lerp(releasedTarget, index / ROPE_LINKS)
      );
      elasticPoints.current = [];
      handledReleaseSequence.current = release.sequence;
    }

    if (cutTopology && !cutHandled.current) {
      const joint = jointRefs.current[cutTopology.linkIndex]?.current;
      if (joint) {
        if (world.getImpulseJoint(joint.handle)) {
          world.removeImpulseJoint(joint, true);
        }
        bodies.slice(cutTopology.linkIndex + 1).forEach((body) => body?.wakeUp());
        cutHandled.current = true;
      }
    }

    const livePoints = bodies.map((body) => bodyPoint(body));

    if (smoothed.current.length !== livePoints.length) {
      smoothed.current = livePoints.map((point) => point.clone());
    }

    const followDelta = reduceMotion ? 1 : Math.min(1, delta * 24);
    smoothed.current.forEach((point, index) => {
      const livePoint = livePoints[index];
      const distance = point.distanceTo(livePoint);
      const speed = Math.min(1, followDelta * (0.82 + Math.min(1, distance) * 1.8));
      point.lerp(livePoint, speed);
    });
    let timerRopePoints: RopePoint[] = [];

    if (!cutTopology) {
      let controls = smoothed.current;
      if (dragging) {
        const elasticTargets = stretchRopePoints(
          smoothed.current,
          target,
          dragVelocityRef.current,
          size,
          viewport,
        );
        if (elasticPoints.current.length !== elasticTargets.length) {
          elasticPoints.current = smoothed.current.map((point) => point.clone());
        }
        const elasticFollow = reduceMotion ? 1 : Math.min(1, delta * 13);
        elasticPoints.current.forEach((point, index) => {
          point.lerp(elasticTargets[index], elasticFollow * (0.62 + index / ROPE_LINKS * 0.38));
        });
        elasticPoints.current[0].copy(elasticTargets[0]);
        elasticPoints.current[ROPE_LINKS].copy(target);
        controls = elasticPoints.current;
        dragVelocityRef.current = {
          x: THREE.MathUtils.damp(dragVelocityRef.current.x, 0, 9, delta),
          y: THREE.MathUtils.damp(dragVelocityRef.current.y, 0, 9, delta),
        };
      } else {
        elasticPoints.current = [];
        dragVelocityRef.current = { x: 0, y: 0 };
      }
      const renderedPoints = sampleCurve(controls).map(
        (point) => worldToScreen(point, size, viewport),
      );
      const physicalLength = bodyPoint(endpoint).distanceTo(anchor);
      const visualLength = target.distanceTo(anchor);
      const stretchProgress = dragging
        ? Math.min(1, Math.max(0, visualLength - physicalLength) / (viewport.height * 0.075))
        : 0;
      updateRopePath(
        upperPathRef.current,
        renderedPoints,
        ropeStrokeWidth(size, stretchProgress),
      );
      hideRopePath(lowerPathRef.current);
      screenPointsRef.current = renderedPoints;
      timerRopePoints = renderedPoints;
    } else {
      const fallbackTip = cutWorldPoint ?? smoothed.current[cutTopology.linkIndex];
      const upperTip = upperTipRef.current ? bodyPoint(upperTipRef.current) : fallbackTip;
      const lowerTip = lowerTipRef.current ? bodyPoint(lowerTipRef.current) : fallbackTip;
      const upperControls = [
        ...smoothed.current.slice(0, cutTopology.linkIndex + 1),
        upperTip,
      ];
      const lowerControls = [
        lowerTip,
        ...smoothed.current.slice(cutTopology.linkIndex + 1),
      ];

      const upperPoints = sampleCurve(upperControls).map(
        (point) => worldToScreen(point, size, viewport),
      );
      const lowerPoints = sampleCurve(lowerControls).map(
        (point) => worldToScreen(point, size, viewport),
      );
      updateRopePath(
        upperPathRef.current,
        upperPoints,
        ropeStrokeWidth(size, 0),
      );
      updateRopePath(
        lowerPathRef.current,
        lowerPoints,
        ropeStrokeWidth(size, 0),
      );
      timerRopePoints = lowerPoints;
    }

    const endpointScreen = worldToScreen(bodyPoint(endpoint), size, viewport);
    const previousEndpoint = previousEndpointRef.current;
    const endpointVelocity = previousEndpoint
      ? {
          x: (endpointScreen.x - previousEndpoint.x) / Math.max(delta, 1 / 240),
          y: (endpointScreen.y - previousEndpoint.y) / Math.max(delta, 1 / 240),
        }
      : { x: 0, y: 0 };
    previousEndpointRef.current = endpointScreen;
    onTimerMove({
      x: endpointScreen.x - size.width / 2,
      y: endpointScreen.y - size.height * RUNNING_TIMER_TOP_RATIO,
      mode,
      rotation: timerRotationFromRope(
        timerRopePoints,
        dragging ? dragVelocityRef.current.x : 0,
      ),
      velocity: {
        x: THREE.MathUtils.clamp(endpointVelocity.x, -1200, 1200),
        y: THREE.MathUtils.clamp(endpointVelocity.y, -1200, 1200),
      },
    });
  });

  return (
    <>
      <RigidBody
        ref={bodyRefs[0]}
        type="fixed"
        position={[0, anchorY, 0]}
        colliders={false}
      />

      {Array.from({ length: ROPE_LINKS - 1 }, (_, index) => {
        const bodyIndex = index + 1;
        const bodyRatio = bodyIndex / ROPE_LINKS;
        const initialPosition: [number, number, number] = [
          initialTargetRef.current.x * bodyRatio,
          anchorY + (initialTargetRef.current.y - anchorY) * bodyRatio,
          0,
        ];
        return (
          <RigidBody
            key={`rope-body-${bodyIndex}`}
            ref={bodyRefs[bodyIndex]}
            position={initialPosition}
            {...segmentProps}
          >
            <BallCollider args={[0.035]} mass={0.055} collisionGroups={0} />
          </RigidBody>
        );
      })}

      <RigidBody
        ref={bodyRefs[ROPE_LINKS]}
        type="dynamic"
        position={[
          initialTargetRef.current.x,
          initialTargetRef.current.y,
          0,
        ]}
        ccd
        {...segmentProps}
      >
        <BallCollider args={[0.08]} mass={1.65} collisionGroups={0} />
      </RigidBody>

      {Array.from({ length: ROPE_LINKS }, (_, index) => (
        <RopeLink
          key={`rope-link-${index}`}
          body1={bodyRefs[index]}
          body2={bodyRefs[index + 1]}
          index={index}
          jointRefs={jointRefs}
          length={segmentLength}
        />
      ))}

      {cutTopology && cutWorldPoint && (
        <CutTips
          body1={bodyRefs[cutTopology.linkIndex]}
          body2={bodyRefs[cutTopology.linkIndex + 1]}
          lowerLength={cutTopology.lowerLength}
          lowerTipRef={lowerTipRef}
          position={cutWorldPoint}
          upperLength={cutTopology.upperLength}
          upperTipRef={upperTipRef}
        />
      )}
    </>
  );
}

function RopeLink({
  body1,
  body2,
  index,
  jointRefs,
  length,
}: {
  body1: RefObject<RapierRigidBody>;
  body2: RefObject<RapierRigidBody>;
  index: number;
  jointRefs: MutableRefObject<Array<RopeJointRef | undefined>>;
  length: number;
}) {
  const joint = useRopeJoint(body1, body2, [[0, 0, 0], [0, 0, 0], length]);

  useEffect(() => {
    jointRefs.current[index] = joint;
    return () => {
      jointRefs.current[index] = undefined;
    };
  }, [index, joint, jointRefs]);

  return null;
}

function CutTips({
  body1,
  body2,
  lowerLength,
  lowerTipRef,
  position,
  upperLength,
  upperTipRef,
}: {
  body1: RefObject<RapierRigidBody>;
  body2: RefObject<RapierRigidBody>;
  lowerLength: number;
  lowerTipRef: RefObject<RapierRigidBody>;
  position: THREE.Vector3;
  upperLength: number;
  upperTipRef: RefObject<RapierRigidBody>;
}) {
  useRopeJoint(body1, upperTipRef, [[0, 0, 0], [0, 0, 0], upperLength]);
  useRopeJoint(lowerTipRef, body2, [[0, 0, 0], [0, 0, 0], lowerLength]);
  const initialPosition: [number, number, number] = [position.x, position.y, 0];
  const tipProps = {
    angularDamping: 3.2,
    canSleep: false,
    colliders: false as const,
    linearDamping: 1.4,
  };

  return (
    <>
      <RigidBody ref={upperTipRef} position={initialPosition} {...tipProps}>
        <BallCollider args={[0.022]} mass={0.018} collisionGroups={0} />
      </RigidBody>
      <RigidBody ref={lowerTipRef} position={initialPosition} {...tipProps}>
        <BallCollider args={[0.022]} mass={0.018} collisionGroups={0} />
      </RigidBody>
    </>
  );
}

function resolveCutTopology(curveT: number, segmentLength: number) {
  const linkPosition = Math.max(0.001, Math.min(ROPE_LINKS - 0.001, curveT * ROPE_LINKS));
  const linkIndex = Math.min(ROPE_LINKS - 1, Math.floor(linkPosition));
  const localT = linkPosition - linkIndex;
  return {
    linkIndex,
    lowerLength: Math.max(0.012, segmentLength * (1 - localT)),
    upperLength: Math.max(0.012, segmentLength * localT),
  };
}

function bodyPoint(body: RapierRigidBody | null) {
  const position = body?.translation();
  return new THREE.Vector3(position?.x ?? 0, position?.y ?? 0, position?.z ?? 0);
}

function sampleCurve(points: THREE.Vector3[]) {
  if (points.length < 2) return points;
  const curve = new THREE.CatmullRomCurve3(points, false, "centripetal");
  return curve.getPoints(Math.max(12, Math.round(CURVE_POINTS * points.length / (ROPE_LINKS + 1))));
}

function stretchRopePoints(
  points: THREE.Vector3[],
  target: THREE.Vector3,
  velocity: RopePoint,
  size: { width: number; height: number },
  viewport: { width: number; height: number },
) {
  const endpoint = points.at(-1);
  if (!endpoint || points.length < 2) return points;
  const delta = target.clone().sub(endpoint);
  const velocityWorld = new THREE.Vector3(
    velocity.x / Math.max(1, size.width) * viewport.width,
    -velocity.y / Math.max(1, size.height) * viewport.height,
    0,
  );
  return points.map((point, index) => {
    const ratio = index / (points.length - 1);
    const lag = Math.sin(Math.PI * ratio) * -0.018;
    return point.clone()
      .addScaledVector(delta, Math.pow(ratio, 1.42))
      .addScaledVector(velocityWorld, lag);
  });
}

function timerRotationFromRope(points: RopePoint[], horizontalVelocity: number) {
  if (points.length < 2) return 0;
  const end = points[points.length - 1];
  const tangent = points[Math.max(0, points.length - 5)];
  const ropeAngle = Math.atan2(end.x - tangent.x, end.y - tangent.y) * 180 / Math.PI;
  const velocityTilt = THREE.MathUtils.clamp(horizontalVelocity * 0.0014, -2, 2);
  return THREE.MathUtils.clamp(ropeAngle * 0.18 + velocityTilt, -10, 10);
}

function screenToWorld(
  point: RopePoint,
  size: { width: number; height: number },
  viewport: { width: number; height: number },
) {
  return new THREE.Vector3(
    (point.x / Math.max(1, size.width) - 0.5) * viewport.width,
    (0.5 - point.y / Math.max(1, size.height)) * viewport.height,
    0,
  );
}

function offsetToWorld(
  offset: RopePoint,
  targetY: number,
  size: { width: number; height: number },
  viewport: { width: number; height: number },
) {
  return new THREE.Vector3(
    offset.x / Math.max(1, size.width) * viewport.width,
    targetY - offset.y / Math.max(1, size.height) * viewport.height,
    0,
  );
}

function worldToScreen(
  point: THREE.Vector3,
  size: { width: number; height: number },
  viewport: { width: number; height: number },
) {
  return {
    x: (point.x / viewport.width + 0.5) * size.width,
    y: (0.5 - point.y / viewport.height) * size.height,
  };
}

function updateRopePath(path: SVGPathElement | null, points: RopePoint[], width: number) {
  if (!path) return;
  if (points.length < 2) {
    hideRopePath(path);
    return;
  }
  path.style.display = "";
  path.setAttribute(
    "d",
    points.map((point, index) =>
      `${index === 0 ? "M" : "L"}${point.x.toFixed(1)} ${point.y.toFixed(1)}`
    ).join(" "),
  );
  path.setAttribute("stroke-width", width.toFixed(2));
}

function hideRopePath(path: SVGPathElement | null) {
  if (path) path.style.display = "none";
}

function ropeStrokeWidth(
  size: { width: number; height: number },
  stretchProgress: number,
) {
  const restingWidth = Math.max(5, Math.min(size.width, size.height) * 0.0115);
  return restingWidth * (1 - stretchProgress * 0.32);
}
