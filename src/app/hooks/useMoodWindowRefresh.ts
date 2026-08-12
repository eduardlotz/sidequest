import { useEffect } from "react";
import { MOOD_RESET_MS, type QuestSession } from "../../domain/quest/model";

export function useMoodWindowRefresh(
  currentSession: QuestSession | null,
  moodSelectedAt: number | null,
  refresh: () => void,
) {
  useEffect(() => {
    refresh();

    function handleVisibilityChange() {
      if (document.visibilityState === "visible") refresh();
    }

    window.addEventListener("focus", refresh);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    const remaining =
      currentSession || moodSelectedAt === null
        ? null
        : Math.max(0, moodSelectedAt + MOOD_RESET_MS - Date.now());
    const timeout =
      remaining === null
        ? null
        : window.setTimeout(refresh, Math.min(remaining + 25, 2_147_483_647));

    return () => {
      window.removeEventListener("focus", refresh);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (timeout !== null) window.clearTimeout(timeout);
    };
  }, [currentSession, moodSelectedAt, refresh]);
}
