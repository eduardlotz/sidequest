import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useMotionValue,
} from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  MOODS,
  type MoodDefinition,
  type MoodId,
} from "../../../../data/moods";
import { localizeMood } from "../../../../localization/catalog";
import { normalizeLanguage } from "../../../../localization/i18n";
import type { GameSelection, Quest, QuestSession } from "../../../../domain/quest/model";
import type { LibraryGame } from "../../../../domain/library/model";
import { ActiveQuestCard } from "../../../active-quest/components/ActiveQuestCard/ActiveQuestCard";
import type { CoinImpact } from "../../../active-quest/components/FlyingCoin/FlyingCoin";
import { ArcDeck, type ArcDeckItem } from "../ArcDeck/ArcDeck";
import { SegmentedControl } from "../../../../shared/ui/SegmentedControl/SegmentedControl";
import { SolidButton } from "../../../../shared/ui/SolidButton/SolidButton";
import {
  QuestOfferDeck,
  QUEST_CARD_PRESENCE_DURATION,
  type NewCardsPhase,
  type QuestOfferItem,
} from "../QuestOfferDeck/QuestOfferDeck";
import { VisuallyHidden } from "../../../../shared/ui/VisuallyHidden/VisuallyHidden";
import { PlayLayout } from "../../PlayLayout";
import styles from "../../QuestFlowLayout.module.css";
import { NAV_ENTRY_SPRING } from "../../../../shared/motion/transitions";
import { questOfferId, questGamesForSelection } from "../../../../domain/quest/rules";
import type { CardReturnPose } from "../../../../lib/cardMotion";
import {
  QuestGallery,
  type QuestGalleryView,
} from "../../../quest-gallery/QuestGallery";
import {
  SelectionLayer,
  SELECTION_LAYER_EXIT_DURATION,
} from "../SelectionLayer/SelectionLayer";
import { GameSelectionStep, gamePickerItemId } from "../GameSelectionStep/GameSelectionStep";

const NAV_ITEM_TRANSITION = NAV_ENTRY_SPRING;

const MOOD_QUEST_HANDOFF_DURATION = 0.56;
const SELECTION_RESET_FADE_OUT_DURATION = MOOD_QUEST_HANDOFF_DURATION;
const SELECTION_RESET_FADE_IN_DURATION = MOOD_QUEST_HANDOFF_DURATION;
const NEW_CARDS_SWAP_DELAY_MS = 560;
const NEW_CARDS_COMPLETE_DELAY_MS = 1_500;

type ReturnTransition = {
  action: "back" | "cancel";
  destination: "selection" | "gallery";
  sessionId: string;
  offerId: string;
  pose: CardReturnPose;
  finished: boolean;
};

type Props = {
  galleryOpen: boolean;
  onGalleryOpenChange: (open: boolean) => void;
  onOpenLibrary: () => void;
  libraryGames: readonly LibraryGame[];
  gameSelection: GameSelection | null;
  currentQuest: Quest | null;
  currentSession: QuestSession | null;
  selectedMood: MoodDefinition | null;
  offeredQuests: readonly QuestOfferItem[];
  points: number;
  redRopes: number;
  debugMode: boolean;
  animateEntrance: boolean;
  reduceMotion: boolean;
  onSelectMood: (moodId: MoodId) => boolean;
  onChooseGame: (gameId: string, installmentId?: string) => boolean;
  onEditGame: () => boolean;
  onEditMood: () => void;
  onRevealQuest: (offerId: string) => boolean;
  onRepeatQuest: (questId: string) => boolean;
  onReturnToSelection: () => boolean;
  onNewCards: () => boolean;
  onDiscard: () => boolean;
  onStart: (startedAt: number) => void;
  onPause: (pausedAt: number) => void;
  onResume: (resumedAt: number) => void;
  onComplete: () => void;
  onCoinFlightStart: (pointsAwarded: number) => void;
  onCoinHit: (pointsReceived: number, impact?: CoinImpact) => void;
  onPurchaseRedRopes: () => boolean;
};

export function QuestScreenContent({
  galleryOpen,
  onGalleryOpenChange,
  onOpenLibrary,
  libraryGames,
  gameSelection,
  currentQuest,
  currentSession,
  selectedMood,
  offeredQuests,
  points,
  redRopes,
  debugMode,
  animateEntrance,
  reduceMotion,
  onSelectMood,
  onChooseGame,
  onEditGame,
  onEditMood,
  onRevealQuest,
  onRepeatQuest,
  onReturnToSelection,
  onNewCards,
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
  const [galleryView, setGalleryView] = useState<QuestGalleryView>({
    filter: "all",
    query: "",
    focusedId: null,
    moodIds: [],
    genreIds: [],
    playStyleIds: [],
    connectionModeIds: [],
    typeIds: [],
    gameId: null,
    tagIds: [],
  });
  const galleryPosition = useMotionValue(0);
  const [activeSource, setActiveSource] = useState<"selection" | "gallery">(
    "selection",
  );
  const isActive = Boolean(currentQuest && currentSession);
  const gameReady = Boolean(gameSelection);
  const questReady = Boolean(selectedMood || gameReady);
  const [pickerMode, setPickerMode] = useState<"mood" | "game">(
    gameSelection ? "game" : "mood",
  );
  const [returnTransition, setReturnTransition] =
    useState<ReturnTransition | null>(null);
  const isReturning =
    returnTransition !== null &&
    returnTransition.sessionId === currentSession?.sessionId &&
    !returnTransition.finished;
  const selectionReturn =
    returnTransition?.destination === "selection" ? returnTransition : null;
  const galleryReturn =
    returnTransition?.destination === "gallery" ? returnTransition : null;
  const showActive = isActive && !isReturning;
  const wasActiveRef = useRef(isActive);
  const returnedFromActive = wasActiveRef.current && !isActive;
  const lastActiveSessionIdRef = useRef(currentSession?.sessionId ?? "initial");
  const currentOfferId =
    currentQuest && currentSession
      ? questOfferId(
          currentSession.moodId,
          currentSession.questId,
          currentSession.game?.id ?? null,
        )
      : undefined;
  const lastActiveQuestIdRef = useRef(currentOfferId);
  const layoutSessionIdRef = useRef(
    currentSession ? `active-${currentSession.sessionId}` : "initial",
  );
  if (currentSession?.sessionId) {
    lastActiveSessionIdRef.current = currentSession.sessionId;
  }
  if (currentOfferId) {
    lastActiveQuestIdRef.current = currentOfferId;
  }
  if (returnedFromActive && !returnTransition) {
    layoutSessionIdRef.current = `deck-after-${lastActiveSessionIdRef.current}`;
  }
  const lastSelectedMoodIdRef = useRef<MoodId | undefined>(selectedMood?.id);
  if (selectedMood) {
    lastSelectedMoodIdRef.current = selectedMood.id;
  }
  const lastSelectedGameIdRef = useRef<string | undefined>(undefined);
  if (gameSelection) {
    lastSelectedGameIdRef.current = gamePickerItemId(gameSelection.gameId, gameSelection.installmentId);
  }
  const previousSelectionModeRef = useRef<"moods" | "quests">(
    questReady ? "quests" : "moods",
  );
  const questEntryMotion = selectionReturn
    ? "return"
    : returnedFromActive || gameReady || previousSelectionModeRef.current === "quests"
      ? "bottom"
      : "shared";
  const [newCardsSequence, setNewCardsSequence] = useState(0);
  const [newCardsPhase, setNewCardsPhase] = useState<NewCardsPhase>("idle");
  const isDealingNewCards = newCardsPhase !== "idle";
  const [editingSelection, setEditingSelection] = useState(false);
  const [selectionPresenceGeneration, setSelectionPresenceGeneration] =
    useState(0);
  const [questDeckGeneration, setQuestDeckGeneration] = useState(0);
  const [questSelectionClosing, setQuestSelectionClosing] = useState(false);
  const [activeHandoffStarted, setActiveHandoffStarted] = useState(isActive);
  const [activeEntryRotation, setActiveEntryRotation] = useState(0);
  const selectionLayoutSessionId = `${layoutSessionIdRef.current}-selection`;
  const questLayoutSessionId = `${layoutSessionIdRef.current}-quests-${questDeckGeneration}`;
  const galleryLayoutSessionId = `${questLayoutSessionId}-gallery`;
  const editSelectionFrameRef = useRef<number | null>(null);
  const newCardsSwapTimeoutRef = useRef<number | null>(null);
  const newCardsCompletionTimeoutRef = useRef<number | null>(null);
  const handoffFrameRef = useRef<number | null>(null);
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
    previousSelectionModeRef.current = questReady ? "quests" : "moods";
  }, [isActive, questReady]);

  useEffect(() => {
    if (questReady) setEditingSelection(false);
  }, [questReady]);

  useEffect(() => {
    if (questReady || !editingSelection) return;
    setQuestDeckGeneration((generation) => generation + 1);
  }, [editingSelection, questReady]);

  useEffect(() => {
    if (!isActive && questReady) setQuestSelectionClosing(false);
  }, [isActive, questReady]);

  useEffect(
    () => () => {
      if (editSelectionFrameRef.current !== null) {
        window.cancelAnimationFrame(editSelectionFrameRef.current);
      }
      if (newCardsSwapTimeoutRef.current !== null) {
        window.clearTimeout(newCardsSwapTimeoutRef.current);
      }
      if (newCardsCompletionTimeoutRef.current !== null) {
        window.clearTimeout(newCardsCompletionTimeoutRef.current);
      }
      if (handoffFrameRef.current !== null) {
        window.cancelAnimationFrame(handoffFrameRef.current);
      }
    },
    [],
  );

  function dealNewCards() {
    if (isDealingNewCards || isReturning) return;
    setReturnTransition(null);
    if (reduceMotion) {
      onNewCards();
      return;
    }

    setNewCardsPhase("outgoing");
    setNewCardsSequence((sequence) => sequence + 1);
    newCardsSwapTimeoutRef.current = window.setTimeout(() => {
      setNewCardsPhase("incoming");
      onNewCards();
      newCardsSwapTimeoutRef.current = null;
    }, NEW_CARDS_SWAP_DELAY_MS);
    newCardsCompletionTimeoutRef.current = window.setTimeout(() => {
      setQuestDeckGeneration((generation) => generation + 1);
      setNewCardsPhase("idle");
      newCardsCompletionTimeoutRef.current = null;
    }, NEW_CARDS_COMPLETE_DELAY_MS);
  }

  function resetSelectionTransition() {
    setReturnTransition(null);
    setNewCardsSequence(0);
    setNewCardsPhase("idle");
    setEditingSelection(false);
    setQuestSelectionClosing(false);
  }

  function selectMood(moodId: MoodId) {
    const selected = onSelectMood(moodId);
    if (selected) resetSelectionTransition();
    return selected;
  }

  function chooseGame(gameId: string, installmentId?: string) {
    const selected = onChooseGame(gameId, installmentId);
    if (selected) resetSelectionTransition();
    return selected;
  }

  function changePickerMode(mode: "mood" | "game") {
    if (isDealingNewCards || isReturning || pickerMode === mode) return;
    setPickerMode(mode);
  }

  function editSelection() {
    if (
      editingSelection ||
      isDealingNewCards ||
      isReturning ||
      editSelectionFrameRef.current !== null
    ) return;
    const edit = gameReady ? onEditGame : onEditMood;
    setEditingSelection(true);
    setReturnTransition(null);
    setSelectionPresenceGeneration((generation) => generation + 1);
    if (reduceMotion) {
      edit();
      return;
    }
    editSelectionFrameRef.current = window.requestAnimationFrame(() => {
      editSelectionFrameRef.current = null;
      edit();
    });
  }

  function beginReturn(pose: CardReturnPose, action: "back" | "cancel") {
    if (isReturning || !currentSession || !currentOfferId) return false;
    if (
      activeSource !== "gallery" &&
      (!questReady ||
        !offeredQuests.some((item) => item.offerId === currentOfferId))
    ) {
      return action === "back" ? onReturnToSelection() : onDiscard();
    }
    if (
      reduceMotion &&
      !(action === "back" ? onReturnToSelection() : onDiscard())
    ) {
      return false;
    }

    setQuestSelectionClosing(false);
    setReturnTransition({
      action,
      destination: activeSource,
      sessionId: currentSession.sessionId,
      offerId: currentOfferId,
      pose,
      finished: reduceMotion,
    });
    if (activeSource === "gallery") onGalleryOpenChange(true);
    return true;
  }

  function prepareSelection(
    previewRotation: number,
    source: "selection" | "gallery",
  ) {
    if (editSelectionFrameRef.current !== null) {
      window.cancelAnimationFrame(editSelectionFrameRef.current);
      editSelectionFrameRef.current = null;
    }
    if (newCardsSwapTimeoutRef.current !== null) {
      window.clearTimeout(newCardsSwapTimeoutRef.current);
      newCardsSwapTimeoutRef.current = null;
    }
    if (newCardsCompletionTimeoutRef.current !== null) {
      window.clearTimeout(newCardsCompletionTimeoutRef.current);
      newCardsCompletionTimeoutRef.current = null;
    }
    if (handoffFrameRef.current !== null) {
      window.cancelAnimationFrame(handoffFrameRef.current);
      handoffFrameRef.current = null;
    }
    setReturnTransition(null);
    setNewCardsSequence(0);
    setNewCardsPhase("idle");
    setEditingSelection(false);
    setQuestSelectionClosing(true);
    setActiveHandoffStarted(false);
    setActiveEntryRotation(previewRotation);
    setActiveSource(source);
  }

  function revealSelection(id: string, source: "selection" | "gallery") {
    const revealed =
      source === "gallery" ? onRepeatQuest(id) : onRevealQuest(id);
    if (!revealed) {
      setQuestSelectionClosing(false);
      setActiveHandoffStarted(true);
      return false;
    }
    if (source === "gallery") onGalleryOpenChange(false);
    handoffFrameRef.current = window.requestAnimationFrame(() => {
      handoffFrameRef.current = null;
      setActiveHandoffStarted(true);
    });
    return true;
  }

  function finishReturn() {
    if (!returnTransition || returnTransition.finished) return;
    if (currentSession?.sessionId !== returnTransition.sessionId) return;

    // Keep the original offer in its slot until the shared card and timer exit finish.
    const returned =
      returnTransition.action === "back" ? onReturnToSelection() : onDiscard();
    setReturnTransition(
      returned ? { ...returnTransition, finished: true } : null,
    );
  }

  const selectionControlsExiting = editingSelection || questSelectionClosing;

  return (
    <PlayLayout
      className={styles.screen}
      data-active-handoff={
        showActive && !reduceMotion
          ? activeHandoffStarted
            ? "started"
            : "pending"
          : undefined
      }
      aria-labelledby="task-screen-title"
    >
      <VisuallyHidden as="h1" id="task-screen-title">
        {galleryOpen
          ? t("ui.gallery.title")
          : showActive
            ? t("ui.task.currentQuest")
            : selectedMood
              ? t("ui.task.chooseMoodQuest", { mood: selectedMood.title })
              : gameReady
                ? t("ui.task.chooseGameQuest", { game: questGamesForSelection(gameSelection, libraryGames)[0]?.name ?? "" })
                : pickerMode === "mood"
                  ? t("ui.task.selectMood")
                  : t("ui.task.selectGame")}
      </VisuallyHidden>

      <LayoutGroup id="quest-flow">
        <AnimatePresence
          initial={animateEntrance}
          custom={
            isReturning
              ? "return"
              : showActive && activeSource === "gallery"
                ? "gallery-selection"
                : undefined
          }
          mode="popLayout"
          onExitComplete={finishReturn}
        >
          {currentQuest && currentSession && showActive && (
            <motion.div
              className={styles.activeWrap}
              key={`active-${currentSession.sessionId}`}
              inert={galleryOpen}
              style={{ visibility: galleryOpen ? "hidden" : undefined }}
              initial={reduceMotion ? false : { opacity: 1 }}
              animate={{ opacity: 1 }}
              exit="exit"
              variants={{
                exit: (reason: string | undefined) => ({
                  opacity: reason === "return" ? 1 : reduceMotion ? 0.999 : 0,
                  pointerEvents: "none",
                }),
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.26,
                ease: [0.42, 0, 1, 1],
              }}
            >
              <ActiveQuestCard
                quest={currentQuest}
                session={currentSession}
                layoutSessionId={
                  activeSource === "gallery"
                    ? galleryLayoutSessionId
                    : questLayoutSessionId
                }
                entryRotation={activeEntryRotation}
                returnLabel={t(
                  activeSource === "gallery"
                    ? "ui.gallery.overview"
                    : "ui.timer.backToSelection",
                )}
                coins={points}
                redRopes={redRopes}
                debugMode={debugMode}
                reduceMotion={reduceMotion}
                onDiscard={onDiscard}
                onReturnToSelection={beginReturn}
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
          )}
          {galleryOpen ? (
            <motion.div
              className={styles.galleryWrap}
              key={`gallery-${lastActiveSessionIdRef.current}`}
              inert={isReturning}
              aria-busy={isReturning || undefined}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit="exit"
              variants={{
                exit: (reason: string | undefined) =>
                  reason === "gallery-selection"
                    ? { opacity: 0.999, scale: 1, pointerEvents: "none" }
                    : {
                        opacity: 0,
                        scale: reduceMotion ? 1 : 0.985,
                        pointerEvents: "none",
                      },
              }}
              transition={{
                opacity: {
                  duration: reduceMotion ? 0 : 0.24,
                  ease: [0.4, 0, 0.2, 1],
                },
                scale: {
                  duration: reduceMotion ? 0 : 0.32,
                  ease: [0.16, 1, 0.3, 1],
                },
              }}
            >
              <QuestGallery
                view={galleryView}
                onViewChange={setGalleryView}
                position={galleryPosition}
                layoutSessionId={
                  currentSession && !isReturning
                    ? `${galleryLayoutSessionId}-browse`
                    : galleryLayoutSessionId
                }
                returnPose={galleryReturn?.pose}
                returningQuestId={galleryReturn?.offerId}
                returning={isReturning}
                reduceMotion={reduceMotion}
                onClose={() => {
                  if (isReturning) return;
                  setReturnTransition(null);
                  onGalleryOpenChange(false);
                }}
                onSelectionStart={(rotation) =>
                  prepareSelection(rotation, "gallery")
                }
                onRepeat={(questId) => revealSelection(questId, "gallery")}
              />
            </motion.div>
          ) : !showActive ? (
            <motion.div
              className={styles.deckWrap}
              key={`deck-session-${layoutSessionIdRef.current}-${lastActiveSessionIdRef.current}`}
              inert={isReturning}
              aria-busy={isReturning || undefined}
              initial={
                reduceMotion || selectionReturn
                  ? false
                  : { opacity: 0, scale: 0.985 }
              }
              animate={{ opacity: 1, scale: 1 }}
              exit={{
                opacity: reduceMotion
                  ? 1
                  : questSelectionClosing
                    ? 0.999
                    : 0,
                scale: 1,
                pointerEvents: "none",
                transition: {
                  duration: reduceMotion ? 0 : QUEST_CARD_PRESENCE_DURATION,
                  ease: [0.16, 1, 0.3, 1],
                },
              }}
            >
              <AnimatePresence
                initial={Boolean(selectionReturn)}
                key={`selection-presence-${selectionPresenceGeneration}`}
                mode={editingSelection ? "sync" : "popLayout"}
                presenceAffectsLayout={false}
              >
                {questReady ? (
                  <SelectionLayer
                    className={styles.questSelectionScreen}
                    exitDuration={
                      editingSelection
                        ? SELECTION_RESET_FADE_OUT_DURATION
                        : questSelectionClosing
                          ? QUEST_CARD_PRESENCE_DURATION
                          : SELECTION_LAYER_EXIT_DURATION
                    }
                    exitOpacity={questSelectionClosing ? 0.999 : 0}
                    key="quests"
                    hidden={selectionControlsExiting}
                    reduceMotion={reduceMotion}
                    zIndex={1}
                  >
                    <>
                      <div className={styles.questDeckGroup}>
                        {offeredQuests.length ? <QuestOfferDeck
                          items={offeredQuests}
                          entryMotion={questEntryMotion}
                          layoutSessionId={questLayoutSessionId}
                          reduceMotion={reduceMotion}
                          returningQuestId={
                            selectionReturn?.offerId ??
                            (returnedFromActive
                              ? lastActiveQuestIdRef.current
                              : undefined)
                          }
                          returnPose={selectionReturn?.pose}
                          returning={isReturning}
                          returningToMoods={editingSelection}
                          newCardsSequence={newCardsSequence}
                          newCardsPhase={newCardsPhase}
                          onSelectionStart={(rotation) =>
                            prepareSelection(rotation, "selection")
                          }
                          onSelect={(questId) =>
                            revealSelection(questId, "selection")
                          }
                        /> : (
                          <div className={styles.emptyQuestDeck}>
                            <p>{t("ui.task.noMatchingQuestsBody")}</p>
                          </div>
                        )}

                        {offeredQuests.length > 0 && <motion.div
                          className={styles.newCardsControl}
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
                            size="medium"
                            variant="primary"
                            aria-label={t("ui.task.newCardsLabel")}
                            onClick={dealNewCards}
                          >
                            {t("ui.task.newCards")}
                          </SolidButton>
                        </motion.div>}

                        <span className={styles.moodEditControl}>
                          <SolidButton
                            className={styles.moodEditButton}
                            size="medium"
                            type="button"
                            variant="soft"
                            onClick={editSelection}
                          >
                            {t(gameReady ? "ui.task.changeGame" : "ui.task.changeMood")}
                          </SolidButton>
                        </span>
                      </div>
                    </>
                  </SelectionLayer>
                ) : pickerMode === "mood" ? (
                  <SelectionLayer
                    className={styles.selectionScreen}
                    enterDuration={SELECTION_RESET_FADE_IN_DURATION}
                    enterFromOpacity={0}
                    exitDuration={MOOD_QUEST_HANDOFF_DURATION}
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
                          <p>{t("ui.task.pickerIntro")}</p>
                        </motion.header>

                        <ArcDeck
                          items={moodItems}
                          initialItemId={lastSelectedMoodIdRef.current}
                          label={t("ui.task.moodCards")}
                          layerPresent={present}
                          layoutSessionId={selectionLayoutSessionId}
                          reduceMotion={reduceMotion}
                          returningFromQuests={editingSelection}
                          onSelect={selectMood}
                        />
                      </>
                    )}
                  </SelectionLayer>
                ) : (
                  <SelectionLayer
                    className={styles.selectionScreen}
                    key="games"
                    enterFromOpacity={0}
                    enterDuration={SELECTION_RESET_FADE_IN_DURATION}
                    exitDuration={MOOD_QUEST_HANDOFF_DURATION}
                    reduceMotion={reduceMotion}
                    zIndex={2}
                  >
                    {(present) => (
                      <>
                        <motion.header className={styles.selectionHeader}
                          initial={reduceMotion ? false : { opacity: 0 }}
                          animate={{ opacity: present ? 1 : 0 }}
                          transition={{ duration: reduceMotion ? 0 : 0.2 }}>
                          <p>{t("ui.task.pickerIntro")}</p>
                        </motion.header>
                        <GameSelectionStep games={libraryGames} onSelect={chooseGame}
                          onOpenLibrary={onOpenLibrary} layerPresent={present}
                          layoutSessionId={selectionLayoutSessionId} reduceMotion={reduceMotion}
                          returningFromQuests={editingSelection}
                          initialItemId={lastSelectedGameIdRef.current} />
                      </>
                    )}
                  </SelectionLayer>
                )}
              </AnimatePresence>
              {!questReady && (
                <div className={styles.pickerToggle}>
                  <SegmentedControl
                    label={t("ui.task.pickerMode")}
                    value={pickerMode}
                    options={[
                      { value: "mood", label: t("ui.task.mood") },
                      { value: "game", label: t("ui.task.game") },
                    ]}
                    onChange={changePickerMode}
                  />
                </div>
              )}
            </motion.div>
          ) : null}
        </AnimatePresence>
      </LayoutGroup>
    </PlayLayout>
  );
}
