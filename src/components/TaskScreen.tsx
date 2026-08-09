import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useIsPresent,
} from "motion/react";
import {
  forwardRef,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { useTranslation } from "react-i18next";
import { MOODS, type MoodDefinition, type MoodId } from "../data/moods";
import type { QuestDefinition } from "../data/quests";
import { formatScore } from "../lib/format";
import { playSound } from "../lib/sound";
import { localizeMood } from "../localization/catalog";
import { normalizeLanguage } from "../localization/i18n";
import type {
  CompletedSession,
  Quest,
  QuestSession,
} from "../stores/useQuestStore";
import { ActiveTaskCard } from "./ActiveTaskCard";
import { ArcDeck, type ArcDeckItem } from "./ArcDeck";
import { CoinIcon } from "./Icons";
import { QuestOfferDeck } from "./QuestOfferDeck";
import { SolidButton } from "./SolidButton";
import styles from "../App.module.css";

const NAV_ITEM_TRANSITION = {
  type: "spring" as const,
  stiffness: 280,
  damping: 24,
  mass: 0.75,
};

const SELECTION_LAYER_EXIT_DURATION = 0.28;
const SELECTION_RESET_FADE_OUT_DURATION = 0.22;
const SELECTION_RESET_FADE_IN_DURATION = 0.28;

type SelectionLayerProps = {
  children: ReactNode | ((present: boolean) => ReactNode);
  className: string;
  enterFromOpacity?: number;
  enterDuration?: number;
  exitDuration?: number;
  exitOpacity?: number;
  hidden?: boolean;
  reduceMotion: boolean;
  zIndex: number;
};

const SelectionLayer = forwardRef<HTMLDivElement, SelectionLayerProps>(
  function SelectionLayer(
    {
      children,
      className,
      enterFromOpacity,
      enterDuration = SELECTION_LAYER_EXIT_DURATION,
      exitDuration = SELECTION_LAYER_EXIT_DURATION,
      exitOpacity = 0,
      hidden = false,
      reduceMotion,
      zIndex,
    },
    ref,
  ) {
    const present = useIsPresent();

    return (
      <motion.div
        className={className}
        ref={ref}
        aria-hidden={hidden || !present || undefined}
        initial={
          reduceMotion || enterFromOpacity === undefined
            ? false
            : { opacity: enterFromOpacity }
        }
        animate={{ opacity: 1 }}
        exit={{
          opacity: reduceMotion ? 1 : exitOpacity,
          transition: {
            duration: reduceMotion ? 0 : exitDuration,
            ease: [0.22, 0.8, 0.24, 1],
          },
        }}
        style={{
          pointerEvents: present ? undefined : "none",
          zIndex,
        }}
        transition={{
          duration: reduceMotion ? 0 : enterDuration,
          ease: [0.22, 0.8, 0.24, 1],
        }}
      >
        {typeof children === "function" ? children(present) : children}
      </motion.div>
    );
  },
);

type Props = {
  currentQuest: Quest | null;
  currentSession: QuestSession | null;
  previousCompletions: readonly CompletedSession[];
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
  onComplete: (gameTitle: string) => void;
  onCoinFlightStart: (pointsAwarded: number) => void;
  onCoinHit: (pointsReceived: number) => void;
  onPurchaseRedRopes: () => boolean;
};

export function TaskScreen({
  currentQuest,
  currentSession,
  previousCompletions,
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
  const selectionLayoutSessionId = `${layoutSessionIdRef.current}-selection`;
  const questEntryMotion =
    returnedFromActive || previousSelectionModeRef.current === "quests"
      ? "bottom"
      : "shared";
  const [shuffleRotation, setShuffleRotation] = useState(0);
  const [editingMood, setEditingMood] = useState(false);
  const [selectionPresenceGeneration, setSelectionPresenceGeneration] =
    useState(0);
  const [questSelectionClosing, setQuestSelectionClosing] = useState(false);
  const editMoodFrameRef = useRef<number | null>(null);
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
    if (!isActive && selectedMood) setQuestSelectionClosing(false);
  }, [isActive, selectedMood]);

  useEffect(
    () => () => {
      if (editMoodFrameRef.current !== null) {
        window.cancelAnimationFrame(editMoodFrameRef.current);
      }
    },
    [],
  );

  function shuffleCards() {
    if (!onShuffle()) return;
    playSound("shuffle");
    setShuffleRotation((rotation) => rotation + 360);
  }

  function selectMood(moodId: MoodId) {
    const selected = onSelectMood(moodId);
    if (selected) {
      setEditingMood(false);
      setQuestSelectionClosing(false);
    }
    return selected;
  }

  function editMood() {
    if (editingMood || editMoodFrameRef.current !== null) return;
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
    <section
      className={styles.screen}
      data-active={isActive ? "true" : undefined}
      aria-labelledby="task-screen-title"
    >
      <h1 className={styles.srOnly} id="task-screen-title">
        {isActive
          ? t("ui.task.currentQuest")
          : selectedMood
            ? t("ui.task.chooseMoodQuest", { mood: selectedMood.title })
            : t("ui.task.selectMood")}
      </h1>

      <LayoutGroup id="quest-flow">
        <AnimatePresence
          initial={animateEntrance}
          mode={returnedFromActive ? "wait" : "popLayout"}
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
              <ActiveTaskCard
                quest={currentQuest}
                session={currentSession}
                previousCompletions={previousCompletions}
                layoutSessionId={layoutSessionIdRef.current}
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

                        <motion.div
                          className={styles.questShuffleControl}
                          initial={reduceMotion ? false : { opacity: 0 }}
                          animate={{
                            opacity: selectionControlsExiting ? 0 : 1,
                          }}
                          exit={{ opacity: 0 }}
                          transition={{
                            duration: reduceMotion ? 0 : 0.18,
                          }}
                        >
                          <SolidButton
                            data-sound-click-skip
                            type="button"
                            disabled={points < shuffleCost}
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
                            <strong>
                              {formatScore(shuffleCost, language)}
                            </strong>
                            <CoinIcon />
                          </span>
                        </motion.div>
                      </header>

                      <QuestOfferDeck
                        items={offeredQuests}
                        entryMotion={questEntryMotion}
                        layoutSessionId={layoutSessionIdRef.current}
                        reduceMotion={reduceMotion}
                        returningQuestId={
                          returnedFromActive
                            ? lastActiveQuestIdRef.current
                            : undefined
                        }
                        returningToMoods={editingMood}
                        onSelectionStart={() => setQuestSelectionClosing(true)}
                        onSelect={onRevealQuest}
                      />
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
    </section>
  );
}
