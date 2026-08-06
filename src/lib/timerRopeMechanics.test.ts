import { describe, expect, test } from "bun:test";
import {
  DOWNWARD_ACTIVATION_HALF_ANGLE_DEGREES,
  isDownwardActivationPull,
} from "./timerRopeMechanics";

describe("timer rope activation sector", () => {
  test("accepts straight-down and downward diagonal pulls", () => {
    expect(isDownwardActivationPull({ x: 0, y: 60 })).toBe(true);
    expect(isDownwardActivationPull({ x: -50, y: 50 })).toBe(true);
    expect(isDownwardActivationPull({ x: 50, y: 50 })).toBe(true);
  });

  test("rejects sideways and upward pulls", () => {
    expect(isDownwardActivationPull({ x: 60, y: 0 })).toBe(false);
    expect(isDownwardActivationPull({ x: -60, y: 10 })).toBe(false);
    expect(isDownwardActivationPull({ x: 20, y: -60 })).toBe(false);
  });

  test("uses the edge of the configured downward cone", () => {
    const radians = DOWNWARD_ACTIVATION_HALF_ANGLE_DEGREES * Math.PI / 180;
    expect(
      isDownwardActivationPull({
        x: Math.sin(radians) * 100,
        y: Math.cos(radians) * 100,
      }),
    ).toBe(true);
    expect(isDownwardActivationPull({ x: 90, y: 40 })).toBe(false);
  });
});
