import { motion } from "motion/react";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useShallow } from "zustand/react/shallow";
import { SHUFFLE_COST } from "../../domain/quest/model";
import { QuestScreenContent } from "./components/QuestScreenContent/QuestScreenContent";
import {
  hydrateQuest,
  localizeMood,
  localizeQuest,
} from "../../localization/catalog";
import { normalizeLanguage } from "../../localization/i18n";
import { useQuestStore } from "../../stores/useQuestStore";
import styles from "../../App.module.css";
import { useIntroReady } from "../../app/hooks/useIntroReady";
import { useMoodWindowRefresh } from "../../app/hooks/useMoodWindowRefresh";

type Props = {
  reduceMotion: boolean;
  onCoinFlightStart: (pointsAwarded: number) => void;
  onCoinHit: (pointsReceived: number) => void;
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
    completedSessions,
    currentSession,
    discardCurrentSession,
    editMood,
    moodSelectedAt,
    offeredQuestIds,
    pauseQuest,
    profile,
    purchaseRedRopes,
    refreshMoodWindow,
    revealQuest,
    returnCurrentSessionToSelection,
    resumeQuest,
    selectMood,
    selectedMoodId,
    shuffleOffers,
    startQuest,
  } = useQuestStore(
    useShallow((state) => ({
      completeQuest: state.completeQuest,
      completedSessions: state.completedSessions,
      currentSession: state.currentSession,
      discardCurrentSession: state.discardCurrentSession,
      editMood: state.editMood,
      moodSelectedAt: state.moodSelectedAt,
      offeredQuestIds: state.offeredQuestIds,
      pauseQuest: state.pauseQuest,
      profile: state.profile,
      purchaseRedRopes: state.purchaseRedRopes,
      refreshMoodWindow: state.refreshMoodWindow,
      revealQuest: state.revealQuest,
      returnCurrentSessionToSelection: state.returnCurrentSessionToSelection,
      resumeQuest: state.resumeQuest,
      selectMood: state.selectMood,
      selectedMoodId: state.selectedMoodId,
      shuffleOffers: state.shuffleOffers,
      startQuest: state.startQuest,
    })),
  );
  const introReady = useIntroReady(reduceMotion);
  useMoodWindowRefresh(currentSession, moodSelectedAt, refreshMoodWindow);

  const currentQuest = currentSession
    ? hydrateQuest(currentSession.questId, completedSessions, language)
    : null;
  const selectedMood = selectedMoodId
    ? localizeMood(selectedMoodId, language)
    : null;
  const offeredQuests = useMemo(
    () =>
      offeredQuestIds.flatMap((id) => {
        const quest = localizeQuest(id, language);
        return quest ? [quest] : [];
      }),
    [language, offeredQuestIds],
  );
  const previousCompletions = useMemo(
    () =>
      currentSession
        ? completedSessions.filter(
            (completion) => completion.questId === currentSession.questId,
          )
        : [],
    [completedSessions, currentSession],
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
        previousCompletions={previousCompletions}
        selectedMood={selectedMood}
        offeredQuests={offeredQuests}
        points={profile.points}
        redRopes={profile.redRopes}
        debugMode={profile.debugMode}
        shuffleCost={SHUFFLE_COST}
        animateEntrance={!introReady}
        reduceMotion={reduceMotion}
        onSelectMood={selectMood}
        onEditMood={editMood}
        onRevealQuest={revealQuest}
        onReturnToSelection={returnCurrentSessionToSelection}
        onShuffle={shuffleOffers}
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
