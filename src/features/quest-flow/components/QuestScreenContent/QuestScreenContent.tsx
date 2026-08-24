import {
  AnimatePresence,
  LayoutGroup,
  motion,
} from "motion/react";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useTranslation } from "react-i18next";
import { MOODS, type MoodDefinition, type MoodId } from "../../../../data/moods";
import type { QuestDefinition } from "../../../../data/quests";
import { formatScore } from "../../../../lib/format";
import { localizeMood } from "../../../../localization/catalog";
import { normalizeLanguage } from "../../../../localization/i18n";
import type { Quest, QuestSession } from "../../../../domain/quest/model";
import { ActiveQuestCard } from "../../../active-quest/components/ActiveQuestCard/ActiveQuestCard";
import { ArcDeck, type ArcDeckItem } from "../ArcDeck/ArcDeck";
import { CoinIcon } from "../../../../shared/ui/Icons/Icons";
import { SolidButton } from "../../../../shared/ui/SolidButton/SolidButton";
import { QuestOfferDeck } from "../QuestOfferDeck/QuestOfferDeck";
import { VisuallyHidden } from "../../../../shared/ui/VisuallyHidden/VisuallyHidden";
import { PlayLayout } from "../../PlayLayout";
import styles from "../../QuestFlowLayout.module.css";
import {
  NAV_ENTRY_SPRING,
} from "../../../../shared/motion/transitions";
import {
  SelectionLayer,
  SELECTION_LAYER_EXIT_DURATION,
} from "../SelectionLayer/SelectionLayer";

const NAV_ITEM_TRANSITION = NAV_ENTRY_SPRING;

const SELECTION_RESET_FADE_OUT_DURATION = 0.22;
const SELECTION_RESET_FADE_IN_DURATION = 0.28;
const SHUFFLE_SWAP_DELAY_MS = 560;
const SHUFFLE_COMPLETE_DELAY_MS = 1_350;

type Props = {
  currentQuest: Quest | null;
  currentSession: QuestSession | null;
  selectedMood: MoodDefinition | null;
  offeredQuests: readonly QuestDefinition[];
  points: number;
  redRopes: number;
  debugMode: boolean;
  shuffleCost: number;
  animateEntrance: boolean;
  reduceMotion: boolean;
  onSelectMood: (moodId: MoodId) => boolean;
  onEditMood: () => void;
  onRevealQuest: (questId: string) => void;
  onReturnToSelection: () => boolean;
  onShuffle: () => boolean;
  onDiscard: () => boolean;
  onStart: (startedAt: number) => void;
  onPause: (pausedAt: number) => void;
  onResume: (resumedAt: number) => void;
  onComplete: () => void;
  onCoinFlightStart: (pointsAwarded: number) => void;
  onCoinHit: (pointsReceived: number) => void;
  onPurchaseRedRopes: () => boolean;
};

export function QuestScreenContent({
  currentQuest,
  currentSession,
  selectedMood,
  offeredQuests,
  points,
  redRopes,
  debugMode,
  shuffleCost,
  animateEntrance,
  reduceMotion,
  onSelectMood,
  onEditMood,
  onRevealQuest,
  onReturnToSelection,
  onShuffle,
  onDiscard,
  onStart,
  onPause,
  onResume,
  onComplete,
  onCoinFlightStart,
  onCoinHit,
  onPurchaseRedRopes,
}: Props) {
  const { i18n, t } = useTranslation();
  const language = normalizeLanguage(i18n.resolvedLanguage ?? i18n.language);
  const isActive = Boolean(currentQuest && currentSession);
  const wasActiveRef = useRef(isActive);
  const returnedFromActive = wasActiveRef.current && !isActive;
  const lastActiveSessionIdRef = useRef(currentSession?.sessionId ?? "initial");
  const lastActiveQuestIdRef = useRef(currentQuest?.id);
  const layoutSessionIdRef = useRef(
    currentSession ? `active-${currentSession.sessionId}` : "initial",
  );
  if (currentSession?.sessionId) {
    lastActiveSessionIdRef.current = currentSession.sessionId;
  }
  if (currentQuest?.id) {
    lastActiveQuestIdRef.current = currentQuest.id;
  }
  if (returnedFromActive) {
    layoutSessionIdRef.current = `deck-after-${lastActiveSessionIdRef.current}`;
  }
  const lastSelectedMoodIdRef = useRef<MoodId | undefined>(selectedMood?.id);
  if (selectedMood) {
    lastSelectedMoodIdRef.current = selectedMood.id;
  }
  const previousSelectionModeRef = useRef<"moods" | "quests">(
    selectedMood ? "quests" : "moods",
  );
  const questEntryMotion =
    returnedFromActive || previousSelectionModeRef.current === "quests"
      ? "bottom"
      : "shared";
  const [shuffleSequence, setShuffleSequence] = useState(0);
  const [isShuffling, setIsShuffling] = useState(false);
  const [editingMood, setEditingMood] = useState(false);
  const [selectionPresenceGeneration, setSelectionPresenceGeneration] =
    useState(0);
  const [questDeckGeneration, setQuestDeckGeneration] = useState(0);
  const [questSelectionClosing, setQuestSelectionClosing] = useState(false);
  const [activeHandoffStarted, setActiveHandoffStarted] = useState(isActive);
  const [activeEntryRotation, setActiveEntryRotation] = useState(0);
  const selectionLayoutSessionId = `${layoutSessionIdRef.current}-selection`;
  const questLayoutSessionId =
    `${layoutSessionIdRef.current}-quests-${questDeckGeneration}`;
  const editMoodFrameRef = useRef<number | null>(null);
  const shuffleTimeoutRef = useRef<number | null>(null);
  const shuffleCompletionTimeoutRef = useRef<number | null>(null);
  const moodItems = useMemo<ArcDeckItem[]>(
    () =>
      MOODS.flatMap((mood) => {
        const localizedMood = localizeMood(mood.id, language);
        return localizedMood
          ? [
              {
                id: localizedMood.id,
                title: localizedMood.title,
                subtitle: localizedMood.subtitle,
              },
            ]
          : [];
      }),
    [language],
  );

  useEffect(() => {
    wasActiveRef.current = isActive;
  }, [isActive]);

  useEffect(() => {
    if (isActive) return;
    previousSelectionModeRef.current = selectedMood ? "quests" : "moods";
  }, [isActive, selectedMood]);

  useEffect(() => {
    if (selectedMood) setEditingMood(false);
  }, [selectedMood]);

  useEffect(() => {
    if (selectedMood || !editingMood) return;
    setQuestDeckGeneration((generation) => generation + 1);
  }, [editingMood, selectedMood]);

  useEffect(() => {
    if (!isActive && selectedMood) setQuestSelectionClosing(false);
  }, [isActive, selectedMood]);

  useEffect(
    () => () => {
      if (editMoodFrameRef.current !== null) {
        window.cancelAnimationFrame(editMoodFrameRef.current);
      }
      if (shuffleTimeoutRef.current !== null) {
        window.clearTimeout(shuffleTimeoutRef.current);
      }
      if (shuffleCompletionTimeoutRef.current !== null) {
        window.clearTimeout(shuffleCompletionTimeoutRef.current);
      }
    },
    [],
  );

  function shuffleCards() {
    if (isShuffling) return;
    if (reduceMotion) {
      onShuffle();
      return;
    }

    setIsShuffling(true);
    setShuffleSequence((sequence) => sequence + 1);
    shuffleTimeoutRef.current = window.setTimeout(() => {
      onShuffle();
      shuffleTimeoutRef.current = null;
    }, SHUFFLE_SWAP_DELAY_MS);
    shuffleCompletionTimeoutRef.current = window.setTimeout(() => {
      setQuestDeckGeneration((generation) => generation + 1);
      setIsShuffling(false);
      shuffleCompletionTimeoutRef.current = null;
    }, SHUFFLE_COMPLETE_DELAY_MS);
  }

  function selectMood(moodId: MoodId) {
    const selected = onSelectMood(moodId);
    if (selected) {
      setShuffleSequence(0);
      setIsShuffling(false);
      setEditingMood(false);
      setQuestSelectionClosing(false);
    }
    return selected;
  }

  function editMood() {
    if (editingMood || isShuffling || editMoodFrameRef.current !== null) return;
    setEditingMood(true);
    setSelectionPresenceGeneration((generation) => generation + 1);
    if (reduceMotion) {
      onEditMood();
      return;
    }
    editMoodFrameRef.current = window.requestAnimationFrame(() => {
      editMoodFrameRef.current = null;
      onEditMood();
    });
  }

  const selectionControlsExiting = editingMood || questSelectionClosing;

  return (
    <PlayLayout
      className={styles.screen}
      data-active-handoff={
        isActive && !reduceMotion
          ? activeHandoffStarted
            ? "started"
            : "pending"
          : undefined
      }
      aria-labelledby="task-screen-title"
    >
      <VisuallyHidden as="h1" id="task-screen-title">
        {isActive
          ? t("ui.task.currentQuest")
          : selectedMood
            ? t("ui.task.chooseMoodQuest", { mood: selectedMood.title })
            : t("ui.task.selectMood")}
      </VisuallyHidden>

      <LayoutGroup id="quest-flow">
        <AnimatePresence
          initial={animateEntrance}
          mode={returnedFromActive ? "wait" : "sync"}
        >
          {currentQuest && currentSession ? (
            <motion.div
              className={styles.activeWrap}
              key={`active-${currentSession.sessionId}`}
              initial={reduceMotion ? false : { opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{
                opacity: reduceMotion ? 0.999 : 0,
                pointerEvents: "none",
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.26,
                ease: [0.42, 0, 1, 1],
              }}
            >
              <ActiveQuestCard
                quest={currentQuest}
                session={currentSession}
                layoutSessionId={questLayoutSessionId}
                entryRotation={activeEntryRotation}
                coins={points}
                redRopes={redRopes}
                debugMode={debugMode}
                reduceMotion={reduceMotion}
                onDiscard={onDiscard}
                onReturnToSelection={onReturnToSelection}
                onStart={onStart}
                onPause={onPause}
                onResume={onResume}
                onComplete={onComplete}
                onCoinFlightStart={onCoinFlightStart}
                onCoinHit={onCoinHit}
                onLayoutHandoffStart={() => setActiveHandoffStarted(true)}
                onPurchaseRedRopes={onPurchaseRedRopes}
              />
            </motion.div>
          ) : (
            <motion.div
              className={styles.deckWrap}
              key={`deck-session-${layoutSessionIdRef.current}`}
              initial={reduceMotion ? false : { opacity: 0, scale: 0.985 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{
                opacity: reduceMotion ? 1 : 0,
                scale: 1,
                pointerEvents: "none",
                // transition: {
                //   duration: reduceMotion ? 0 : 0.22,
                //   ease: [0.22, 0.8, 0.24, 1],
                // },
              }}
              // transition={
              //   reduceMotion
              //     ? { duration: 0 }
              //     : { type: "spring", stiffness: 350, damping: 34, mass: 0.78 }
              // }
            >
              <AnimatePresence
                initial={false}
                key={`selection-presence-${selectionPresenceGeneration}`}
                mode="sync"
                presenceAffectsLayout={false}
              >
                {selectedMood ? (
                  <SelectionLayer
                    className={styles.questSelectionScreen}
                    exitDuration={
                      editingMood
                        ? SELECTION_RESET_FADE_OUT_DURATION
                        : SELECTION_LAYER_EXIT_DURATION
                    }
                    exitOpacity={0}
                    key="quests"
                    hidden={selectionControlsExiting}
                    reduceMotion={reduceMotion}
                    zIndex={1}
                  >
                    <>
                      <header className={styles.questSelectionHeader}>
                        <motion.p
                          className={styles.questSelectionPrompt}
                          initial={
                            reduceMotion ? false : { opacity: 0, y: -14 }
                          }
                          animate={
                            selectionControlsExiting
                              ? { opacity: 0, y: -14 }
                              : { opacity: 1, y: 0 }
                          }
                          exit={{ opacity: 0, y: -14 }}
                          transition={
                            reduceMotion ? { duration: 0 } : NAV_ITEM_TRANSITION
                          }
                        >
                          <span>{t("ui.task.choosePrefix")}</span>
                          <span className={styles.moodEditControl}>
                            <button
                              type="button"
                              aria-describedby="change-mood-tooltip"
                              onClick={editMood}
                            >
                              {selectedMood.title}
                            </button>
                            <span
                              className={styles.moodEditTooltip}
                              id="change-mood-tooltip"
                              role="tooltip"
                            >
                              {t("ui.task.changeMood")}
                            </span>
                          </span>
                          <span>{t("ui.task.chooseSuffix")}</span>
                        </motion.p>
                      </header>

                      <QuestOfferDeck
                        items={offeredQuests}
                        entryMotion={questEntryMotion}
                        layoutSessionId={questLayoutSessionId}
                        reduceMotion={reduceMotion}
                        returningQuestId={
                          returnedFromActive
                            ? lastActiveQuestIdRef.current
                            : undefined
                        }
                        returningToMoods={editingMood}
                        shuffleSequence={shuffleSequence}
                        shuffling={isShuffling}
                        onSelectionStart={(previewRotation) => {
                          setShuffleSequence(0);
                          setIsShuffling(false);
                          setQuestSelectionClosing(true);
                          setActiveHandoffStarted(false);
                          setActiveEntryRotation(previewRotation);
                        }}
                        onSelect={(questId) => {
                          onRevealQuest(questId);
                          window.requestAnimationFrame(() =>
                            setActiveHandoffStarted(true),
                          );
                        }}
                      />

                      <motion.div
                        className={styles.questShuffleControl}
                        initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                        animate={{
                          opacity: selectionControlsExiting ? 0 : 1,
                          y: selectionControlsExiting ? 8 : 0,
                        }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{
                          duration: reduceMotion ? 0 : 0.18,
                        }}
                      >
                        <SolidButton
                          data-sound-click-skip
                          type="button"
                          variant="soft"
                          disabled={isShuffling || points < shuffleCost}
                          aria-label={t("ui.task.shuffleLabel", {
                            cost: formatScore(shuffleCost, language),
                            available: formatScore(points, language),
                          })}
                          onClick={shuffleCards}
                        >
                          {t("ui.task.shuffleCards")}
                        </SolidButton>
                        <span className={styles.inlineCoinCopy}>
                          <span>{t("ui.task.shufflePricePrefix")}</span>
                          <strong>{formatScore(shuffleCost, language)}</strong>
                          <CoinIcon />
                        </span>
                      </motion.div>
                    </>
                  </SelectionLayer>
                ) : (
                  <SelectionLayer
                    className={styles.selectionScreen}
                    enterDuration={SELECTION_RESET_FADE_IN_DURATION}
                    enterFromOpacity={editingMood ? 0 : undefined}
                    key="moods"
                    reduceMotion={reduceMotion}
                    zIndex={2}
                  >
                    {(present) => (
                      <>
                        <motion.header
                          className={styles.selectionHeader}
                          initial={reduceMotion ? false : { opacity: 0 }}
                          animate={{ opacity: present ? 1 : 0 }}
                          transition={{ duration: reduceMotion ? 0 : 0.2 }}
                        >
                          <p>{t("ui.task.selectMood")}</p>
                        </motion.header>

                        <ArcDeck
                          items={moodItems}
                          initialItemId={lastSelectedMoodIdRef.current}
                          label={t("ui.task.moodCards")}
                          layerPresent={present}
                          layoutSessionId={selectionLayoutSessionId}
                          reduceMotion={reduceMotion}
                          returningFromQuests={editingMood}
                          onSelect={selectMood}
                        />
                      </>
                    )}
                  </SelectionLayer>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </LayoutGroup>
    </PlayLayout>
  );
}
