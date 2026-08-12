import { useEffect, useState } from "react";

export function useIntroReady(reduceMotion: boolean) {
  const [introReady, setIntroReady] = useState(reduceMotion);

  useEffect(() => {
    if (reduceMotion) {
      setIntroReady(true);
      return;
    }
    const timeout = window.setTimeout(() => setIntroReady(true), 1000);
    return () => window.clearTimeout(timeout);
  }, [reduceMotion]);

  return introReady;
}
