declare module "bun:test" {
  export function describe(name: string, run: () => void): void;
  export function test(name: string, run: () => void | Promise<void>): void;
  export function expect(actual: unknown): {
    toBe(expected: unknown): void;
    toEqual(expected: unknown): void;
    toHaveLength(expected: number): void;
    toMatchObject(expected: object): void;
    toBeNull(): void;
    not: {
      toBe(expected: unknown): void;
      toContain(expected: unknown): void;
    };
    toContain(expected: unknown): void;
  };
}
