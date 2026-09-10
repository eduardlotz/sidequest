import { useMotionValue, useSpring } from "motion/react";
import { useLayoutEffect, useRef, useState } from "react";

const clamp = (value: number, min: number, max: number) =>
  Math.max(min, Math.min(max, value));
const toRadians = (angle: number) => angle * Math.PI / 180;
const CARD_ANGLE = 17;

export function useQuestArc(count: number, compact: boolean, reduceMotion: boolean) {
  const deckRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(320);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [origin, setOrigin] = useState({ x: 0, y: 0 });
  const targetAngle = useMotionValue(0);
  const springAngle = useSpring(targetAngle, { stiffness: 125, damping: 26, mass: 0.8 });
  const spin = reduceMotion ? targetAngle : springAngle;
  const radius = cardWidth * 2.75;
  const cardHeight = cardWidth / 0.7;
  const middle = Math.max(0, (count - 1) / 2);
  const outerAngle = middle * CARD_ANGLE;

  // Find the angle at which the entire end card fits, including its rotated corners.
  let low = 0;
  let high = outerAngle;
  for (let step = 0; step < 16; step += 1) {
    const angle = (low + high) / 2;
    const radians = toRadians(angle);
    const rightEdge = radius * Math.sin(radians) +
      (cardWidth * Math.cos(radians) + cardHeight * Math.sin(radians)) / 2;
    if (rightEdge <= viewportWidth / 2 - 24) low = angle;
    else high = angle;
  }
  const maxSpin = Math.max(0, outerAngle - low);

  useLayoutEffect(() => {
    const deck = deckRef.current;
    if (!deck) return;
    const measure = () => {
      setViewportWidth(deck.clientWidth);
      const bounds = deck.getBoundingClientRect();
      setOrigin({ x: bounds.left + bounds.width / 2, y: bounds.top });
      const card = deck.querySelector<HTMLElement>("[data-quest-slot]");
      if (card) setCardWidth(card.offsetWidth);
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(deck);
    const card = deck.querySelector<HTMLElement>("[data-quest-slot]");
    if (card) observer.observe(card);
    return () => observer.disconnect();
  }, [compact, count]);

  useLayoutEffect(() => {
    targetAngle.set(clamp(targetAngle.get(), -maxSpin, maxSpin));
  }, [maxSpin, targetAngle]);

  function spinToPointer(clientX: number) {
    const deck = deckRef.current;
    if (!deck || compact) return;
    const bounds = deck.getBoundingClientRect();
    const position = clamp((clientX - bounds.left) / bounds.width * 2 - 1, -1, 1);
    targetAngle.set(-Math.sign(position) * Math.pow(Math.abs(position), 1.35) * maxSpin);
  }

  function focusCard(index: number) {
    if (!compact) targetAngle.set(clamp(-(index - middle) * CARD_ANGLE, -maxSpin, maxSpin));
  }

  return {
    deckRef,
    cardWidth,
    origin,
    spin,
    pivotY: radius + cardHeight / 2,
    spinToPointer,
    focusCard,
    resetSpin: () => targetAngle.set(0),
    positionFor: (index: number) => {
      const angle = (index - middle) * CARD_ANGLE;
      const radians = toRadians(angle);
      return {
        x: compact ? 0 : radius * Math.sin(radians),
        y: compact ? 0 : radius * (1 - Math.cos(radians)),
        rotation: compact ? 0 : angle,
        depth: count - Math.abs(index - middle),
      };
    },
  };
}
