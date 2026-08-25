import { useEffect, useRef, useState } from "react";
import type { CoinImpact } from "../../features/active-quest/components/FlyingCoin/FlyingCoin";
import { playSound } from "../../lib/sound";

export function useCoinBalanceAnimation(points: number) {
  const [animatedBalance, setAnimatedBalance] = useState<number | null>(null);
  const [impact, setImpact] = useState<CoinImpact | null>(null);
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

  function receivePoints(pointsReceived: number, nextImpact?: CoinImpact) {
    setAnimatedBalance(points + pointsReceived);
    setImpact(nextImpact ?? null);
    setPulse((value) => value + 1);
    playSound("coinHit");
  }

  return {
    displayedBalance: animatedBalance ?? points,
    impact,
    pulse,
    receivePoints,
    startFlight,
  };
}
