import { useEffect, useRef, useState } from "react";
import { playSound } from "../../lib/sound";

export function useCoinBalanceAnimation(points: number) {
  const [animatedBalance, setAnimatedBalance] = useState<number | null>(null);
  const [pulse, setPulse] = useState(0);
  const animationTargetRef = useRef<number | null>(null);

  useEffect(() => {
    if (animationTargetRef.current !== points) return;
    animationTargetRef.current = null;
    setAnimatedBalance(null);
  }, [points]);

  function startFlight(pointsAwarded: number) {
    animationTargetRef.current = points + pointsAwarded;
    setAnimatedBalance(points);
  }

  function receivePoints(pointsReceived: number) {
    setAnimatedBalance(points + pointsReceived);
    setPulse((value) => value + 1);
    playSound("coinHit");
  }

  return {
    displayedBalance: animatedBalance ?? points,
    pulse,
    receivePoints,
    startFlight,
  };
}
