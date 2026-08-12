import { AnimatePresence, useReducedMotion } from "motion/react";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useShallow } from "zustand/react/shallow";
import { AppHeader } from "./app/AppHeader";
import { useCoinBalanceAnimation } from "./app/hooks/useCoinBalanceAnimation";
import { HistoryScreen } from "./features/history/components/HistoryScreen/HistoryScreen";
import { QuestScreen } from "./features/quest-flow/QuestScreen";
import { InteractiveDotBackground } from "./shared/ui/InteractiveDotBackground/InteractiveDotBackground";
import { useQuestStore } from "./stores/useQuestStore";
import styles from "./App.module.css";

export function App() {
  const { t } = useTranslation();
  const reduceMotion = Boolean(useReducedMotion());
  const [historyOpen, setHistoryOpen] = useState(false);
  const profileTriggerRef = useRef<HTMLButtonElement>(null);
  const { currentSession, points, selectedMoodId } = useQuestStore(
    useShallow((state) => ({
      currentSession: state.currentSession,
      points: state.profile.points,
      selectedMoodId: state.selectedMoodId,
    })),
  );
  const coinBalanceAnimation = useCoinBalanceAnimation(points);

  function closeHistory() {
    setHistoryOpen(false);
    window.requestAnimationFrame(() => profileTriggerRef.current?.focus());
  }

  return (
    <div
      className={styles.app}
      data-screen={
        currentSession ? "active" : selectedMoodId ? "quests" : "moods"
      }
    >
      <InteractiveDotBackground reduceMotion={reduceMotion} />

      <a className={styles.skipLink} href="#main-content">
        {t("ui.nav.skipToContent")}
      </a>

      <AppHeader
        coinPulse={coinBalanceAnimation.pulse}
        displayedCoins={coinBalanceAnimation.displayedBalance}
        historyOpen={historyOpen}
        profileTriggerRef={profileTriggerRef}
        reduceMotion={reduceMotion}
        onOpenHistory={() => setHistoryOpen(true)}
      />

      <main className={styles.main} id="main-content">
        <AnimatePresence mode="wait" initial={false}>
          {historyOpen ? (
            <HistoryScreen
              key="history"
              reduceMotion={reduceMotion}
              onClose={closeHistory}
            />
          ) : (
            <QuestScreen
              key="quests"
              reduceMotion={reduceMotion}
              onCoinFlightStart={coinBalanceAnimation.startFlight}
              onCoinHit={coinBalanceAnimation.receivePoints}
            />
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
