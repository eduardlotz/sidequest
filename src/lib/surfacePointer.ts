type Point = { x: number; y: number };

/** Map a screen point onto a unit square projected through CSS transforms. */
export function pointerOnSurface(
  pointer: Point,
  [topLeft, topRight, bottomRight, bottomLeft]: readonly [Point, Point, Point, Point],
): Point | null {
  const dx1 = topRight.x - bottomRight.x;
  const dx2 = bottomLeft.x - bottomRight.x;
  const dx3 = topLeft.x - topRight.x + bottomRight.x - bottomLeft.x;
  const dy1 = topRight.y - bottomRight.y;
  const dy2 = bottomLeft.y - bottomRight.y;
  const dy3 = topLeft.y - topRight.y + bottomRight.y - bottomLeft.y;
  const determinant = dx1 * dy2 - dx2 * dy1;
  if (Math.abs(determinant) < 0.000001) return null;

  const perspectiveX = (dx3 * dy2 - dx2 * dy3) / determinant;
  const perspectiveY = (dx1 * dy3 - dx3 * dy1) / determinant;
  const a = topRight.x - topLeft.x + perspectiveX * topRight.x;
  const b = bottomLeft.x - topLeft.x + perspectiveY * bottomLeft.x;
  const d = topRight.y - topLeft.y + perspectiveX * topRight.y;
  const e = bottomLeft.y - topLeft.y + perspectiveY * bottomLeft.y;
  const localX = pointer.x - topLeft.x;
  const localY = pointer.y - topLeft.y;
  const inverseA = a - pointer.x * perspectiveX;
  const inverseB = b - pointer.x * perspectiveY;
  const inverseD = d - pointer.y * perspectiveX;
  const inverseE = e - pointer.y * perspectiveY;
  const inverseDeterminant = inverseA * inverseE - inverseB * inverseD;
  if (Math.abs(inverseDeterminant) < 0.000001) return null;

  return {
    x: (localX * inverseE - inverseB * localY) / inverseDeterminant,
    y: (inverseA * localY - localX * inverseD) / inverseDeterminant,
  };
}

export function readFoilPointer(card: HTMLElement, pointer: Point): Point | null {
  const corners = card.querySelectorAll<HTMLElement>("[data-foil-corner]");
  if (corners.length !== 4) return null;
  const [topLeft, topRight, bottomRight, bottomLeft] = Array.from(
    corners,
    (corner) => corner.getBoundingClientRect(),
  );
  return pointerOnSurface(pointer, [topLeft, topRight, bottomRight, bottomLeft]);
}
