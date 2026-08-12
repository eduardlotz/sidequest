export type TimerPullVector = { x: number; y: number };

export type CompletionRemainingTime =
  | { kind: "ready" }
  | { kind: "less-than-minute" }
  | { kind: "minutes"; count: number };

export const DOWNWARD_ACTIVATION_HALF_ANGLE_DEGREES = 60;

export function isDownwardActivationPull(
  offset: TimerPullVector,
  halfAngleDegrees = DOWNWARD_ACTIVATION_HALF_ANGLE_DEGREES,
) {
  const distance = Math.hypot(offset.x, offset.y);
  if (distance === 0 || offset.y <= 0) return false;
  const minimumDownwardShare = Math.cos(halfAngleDegrees * Math.PI / 180);
  return offset.y / distance >= minimumDownwardShare;
}

export function completionRemainingTime(
  remainingMs: number,
): CompletionRemainingTime {
  const remaining = Math.max(0, remainingMs);
  if (remaining === 0) return { kind: "ready" };
  if (remaining < 60_000) return { kind: "less-than-minute" };
  return { kind: "minutes", count: Math.ceil(remaining / 60_000) };
}
