import { motion } from "motion/react";
import { useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useShallow } from "zustand/react/shallow";
import { NEW_CARDS_COST } from "../../domain/quest/model";
import { QuestScreenContent } from "./components/QuestScreenContent/QuestScreenContent";
import {
  hydrateQuest,
  localizeMood,
} from "../../localization/catalog";
import { normalizeLanguage } from "../../localization/i18n";
import { useQuestStore } from "../../stores/useQuestStore";
import styles from "./QuestFlowLayout.module.css";
import { useIntroReady } from "../../app/hooks/useIntroReady";
import { useMoodWindowRefresh } from "../../app/hooks/useMoodWindowRefresh";
import type { CoinImpact } from "../active-quest/components/FlyingCoin/FlyingCoin";
import { questOfferId } from "../../domain/quest/rules";
import { useLibraryStore } from "../../stores/useLibraryStore";

type Props = {
  reduceMotion: boolean;
  onCoinFlightStart: (pointsAwarded: number) => void;
  onCoinHit: (pointsReceived: number, impact?: CoinImpact) => void;
};

export function QuestScreen({
  reduceMotion,
  onCoinFlightStart,
  onCoinHit,
}: Props) {
  const { i18n } = useTranslation();
  const language = normalizeLanguage(i18n.resolvedLanguage ?? i18n.language);
  const {
    completeQuest,
    currentSession,
    discardCurrentSession,
    editMood,
    moodSelectedAt,
    offeredQuests,
    pauseQuest,
    profile,
    purchaseRedRopes,
    refreshMoodWindow,
    refreshLibraryOffers,
    revealQuest,
    returnCurrentSessionToSelection,
    resumeQuest,
    selectMood,
    selectedMoodId,
    dealNewCards,
    startQuest,
  } = useQuestStore(
    useShallow((state) => ({
      completeQuest: state.completeQuest,
      currentSession: state.currentSession,
      discardCurrentSession: state.discardCurrentSession,
      editMood: state.editMood,
      moodSelectedAt: state.moodSelectedAt,
      offeredQuests: state.offeredQuests,
      pauseQuest: state.pauseQuest,
      profile: state.profile,
      purchaseRedRopes: state.purchaseRedRopes,
      refreshMoodWindow: state.refreshMoodWindow,
      refreshLibraryOffers: state.refreshLibraryOffers,
      revealQuest: state.revealQuest,
      returnCurrentSessionToSelection: state.returnCurrentSessionToSelection,
      resumeQuest: state.resumeQuest,
      selectMood: state.selectMood,
      selectedMoodId: state.selectedMoodId,
      dealNewCards: state.dealNewCards,
      startQuest: state.startQuest,
    })),
  );
  const introReady = useIntroReady(reduceMotion);
  const libraryRevision = useLibraryStore((state) => state.revision);
  const hasCurrentSession = Boolean(currentSession);
  useMoodWindowRefresh(currentSession, moodSelectedAt, refreshMoodWindow);

  useEffect(() => {
    refreshLibraryOffers();
  }, [hasCurrentSession, libraryRevision, refreshLibraryOffers]);

  const currentQuest = currentSession
    ? hydrateQuest(
        currentSession.questId,
        currentSession.moodId,
        currentSession.game,
        language,
      )
    : null;
  const selectedMood = selectedMoodId
    ? localizeMood(selectedMoodId, language)
    : null;
  const offeredQuestItems = useMemo(
    () =>
      offeredQuests.flatMap((offer) => {
        const quest = hydrateQuest(
          offer.questId,
          offer.moodId,
          offer.game,
          language,
        );
        return quest
          ? [
              {
                ...quest,
                offerId: questOfferId(
                  offer.moodId,
                  offer.questId,
                  offer.game?.id ?? null,
                ),
              },
            ]
          : [];
      }),
    [language, offeredQuests],
  );
  return (
    <motion.div
      className={styles.questScreen}
      key="tasks"
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: reduceMotion ? 0 : 0.18 }}
    >
      <QuestScreenContent
        currentQuest={currentQuest}
        currentSession={currentSession}
        selectedMood={selectedMood}
        offeredQuests={offeredQuestItems}
        points={profile.points}
        redRopes={profile.redRopes}
        debugMode={profile.debugMode}
        newCardsCost={NEW_CARDS_COST}
        animateEntrance={!introReady}
        reduceMotion={reduceMotion}
        onSelectMood={selectMood}
        onEditMood={editMood}
        onRevealQuest={revealQuest}
        onReturnToSelection={returnCurrentSessionToSelection}
        onNewCards={dealNewCards}
        onDiscard={discardCurrentSession}
        onStart={startQuest}
        onPause={pauseQuest}
        onResume={resumeQuest}
        onComplete={completeQuest}
        onCoinFlightStart={onCoinFlightStart}
        onCoinHit={onCoinHit}
        onPurchaseRedRopes={purchaseRedRopes}
      />
    </motion.div>
  );
}
