export function loopDistance(distance: number, length: number) {
  if (length <= 1) return 0;
  const half = length / 2;
  return modulo(distance + half, length) - half;
}

export function modulo(value: number, length: number) {
  return ((value % length) + length) % length;
}

export function clamp(value: number, minimum: number, maximum: number) {
  return Math.max(minimum, Math.min(maximum, value));
}
