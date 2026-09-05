import { useReducedMotion } from "motion/react";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useShallow } from "zustand/react/shallow";
import { AppHeader } from "./app/AppHeader";
import { useCoinBalanceAnimation } from "./app/hooks/useCoinBalanceAnimation";
import { QuestScreen } from "./features/quest-flow/QuestScreen";
import { LibrarySetup } from "./features/library/LibrarySetup";
import { InteractiveDotBackground } from "./shared/ui/InteractiveDotBackground/InteractiveDotBackground";
import { useQuestStore } from "./stores/useQuestStore";
import { useLibraryStore } from "./stores/useLibraryStore";
import styles from "./App.module.css";

export function App() {
  const { t } = useTranslation();
  const reduceMotion = Boolean(useReducedMotion());
  const profileTriggerRef = useRef<HTMLButtonElement>(null);
  const { currentSession, points, selectedMoodId } = useQuestStore(
    useShallow((state) => ({
      currentSession: state.currentSession,
      points: state.profile.points,
      selectedMoodId: state.selectedMoodId,
    })),
  );
  const coinBalanceAnimation = useCoinBalanceAnimation(points);
  const setupCompleted = useLibraryStore((state) => state.setupCompleted);

  return (
    <div
      className={styles.app}
      data-screen={
        !setupCompleted
          ? "setup"
          : currentSession
            ? "active"
            : selectedMoodId
              ? "quests"
              : "moods"
      }
    >
      <InteractiveDotBackground />

      <a className={styles.skipLink} href="#main-content">
        {t("ui.nav.skipToContent")}
      </a>

      <AppHeader
        coinImpact={coinBalanceAnimation.impact}
        coinPulse={coinBalanceAnimation.pulse}
        displayedCoins={coinBalanceAnimation.displayedBalance}
        profileTriggerRef={profileTriggerRef}
        reduceMotion={reduceMotion}
      />

      <main className={styles.main} id="main-content">
        {setupCompleted ? (
          <QuestScreen
            reduceMotion={reduceMotion}
            onCoinFlightStart={coinBalanceAnimation.startFlight}
            onCoinHit={coinBalanceAnimation.receivePoints}
          />
        ) : (
          <LibrarySetup reduceMotion={reduceMotion} />
        )}
      </main>
    </div>
  );
}
