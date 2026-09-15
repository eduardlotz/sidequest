import { AnimatePresence, LayoutGroup, motion, useMotionValue } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  MOODS,
  type MoodDefinition,
  type MoodId,
} from "../../../../data/moods";
import { localizeMood } from "../../../../localization/catalog";
import { normalizeLanguage } from "../../../../localization/i18n";
import type { Quest, QuestSession } from "../../../../domain/quest/model";
import { ActiveQuestCard } from "../../../active-quest/components/ActiveQuestCard/ActiveQuestCard";
import type { CoinImpact } from "../../../active-quest/components/FlyingCoin/FlyingCoin";
import { ArcDeck, type ArcDeckItem } from "../ArcDeck/ArcDeck";
import { SolidButton } from "../../../../shared/ui/SolidButton/SolidButton";
import {
  QuestOfferDeck,
  type NewCardsPhase,
  type QuestOfferItem,
} from "../QuestOfferDeck/QuestOfferDeck";
import { VisuallyHidden } from "../../../../shared/ui/VisuallyHidden/VisuallyHidden";
import { PlayLayout } from "../../PlayLayout";
import styles from "../../QuestFlowLayout.module.css";
import { NAV_ENTRY_SPRING } from "../../../../shared/motion/transitions";
import { questOfferId } from "../../../../domain/quest/rules";
import type { CardReturnPose } from "../../../../lib/cardMotion";
import {
  QuestGallery,
  type QuestGalleryView,
} from "../../../quest-gallery/QuestGallery";
import {
  SelectionLayer,
  SELECTION_LAYER_EXIT_DURATION,
} from "../SelectionLayer/SelectionLayer";

const NAV_ITEM_TRANSITION = NAV_ENTRY_SPRING;

const SELECTION_RESET_FADE_OUT_DURATION = 0.22;
const SELECTION_RESET_FADE_IN_DURATION = 0.28;
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
  });
  const galleryPosition = useMotionValue(0);
  const [activeSource, setActiveSource] = useState<"selection" | "gallery">(
    "selection",
  );
  const isActive = Boolean(currentQuest && currentSession);
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
  const previousSelectionModeRef = useRef<"moods" | "quests">(
    selectedMood ? "quests" : "moods",
  );
  const questEntryMotion = selectionReturn
    ? "return"
    : returnedFromActive || previousSelectionModeRef.current === "quests"
      ? "bottom"
      : "shared";
  const [newCardsSequence, setNewCardsSequence] = useState(0);
  const [newCardsPhase, setNewCardsPhase] = useState<NewCardsPhase>("idle");
  const isDealingNewCards = newCardsPhase !== "idle";
  const [editingMood, setEditingMood] = useState(false);
  const [selectionPresenceGeneration, setSelectionPresenceGeneration] =
    useState(0);
  const [questDeckGeneration, setQuestDeckGeneration] = useState(0);
  const [questSelectionClosing, setQuestSelectionClosing] = useState(false);
  const [activeHandoffStarted, setActiveHandoffStarted] = useState(isActive);
  const [activeEntryRotation, setActiveEntryRotation] = useState(0);
  const selectionLayoutSessionId = `${layoutSessionIdRef.current}-selection`;
  const questLayoutSessionId = `${layoutSessionIdRef.current}-quests-${questDeckGeneration}`;
  const galleryLayoutSessionId = `${questLayoutSessionId}-gallery`;
  const editMoodFrameRef = useRef<number | null>(null);
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

  function selectMood(moodId: MoodId) {
    const selected = onSelectMood(moodId);
    if (selected) {
      setReturnTransition(null);
      setNewCardsSequence(0);
      setNewCardsPhase("idle");
      setEditingMood(false);
      setQuestSelectionClosing(false);
    }
    return selected;
  }

  function editMood() {
    if (
      editingMood ||
      isDealingNewCards ||
      isReturning ||
      editMoodFrameRef.current !== null
    ) {
      return;
    }
    setEditingMood(true);
    setReturnTransition(null);
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

  function beginReturn(pose: CardReturnPose, action: "back" | "cancel") {
    if (isReturning || !currentSession || !currentOfferId) return false;
    if (
      activeSource !== "gallery" &&
      (!selectedMood ||
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
    if (editMoodFrameRef.current !== null) {
      window.cancelAnimationFrame(editMoodFrameRef.current);
      editMoodFrameRef.current = null;
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
    setEditingMood(false);
    setQuestSelectionClosing(true);
    setActiveHandoffStarted(false);
    setActiveEntryRotation(previewRotation);
    setActiveSource(source);
  }

  function revealSelection(id: string, source: "selection" | "gallery") {
    const revealed = source === "gallery" ? onRepeatQuest(id) : onRevealQuest(id);
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

  const selectionControlsExiting = editingMood || questSelectionClosing;

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
              : t("ui.task.selectMood")}
      </VisuallyHidden>

      <LayoutGroup id="quest-flow">
        <AnimatePresence
          initial={animateEntrance}
          custom={isReturning ? "return" : undefined}
          mode={
            returnedFromActive && !returnTransition && !galleryOpen ? "wait" : "sync"
          }
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
                  activeSource === "gallery" ? galleryLayoutSessionId : questLayoutSessionId
                }
                entryRotation={activeEntryRotation}
                returnLabel={t(
                  activeSource === "gallery" ? "ui.gallery.overview" : "ui.timer.backToSelection",
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
              initial={false}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, pointerEvents: "none" }}
              transition={{ duration: reduceMotion ? 0 : 0.26 }}
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
                opacity: reduceMotion ? 1 : 0,
                scale: 1,
                pointerEvents: "none",
              }}
            >
              <AnimatePresence
                initial={Boolean(selectionReturn)}
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
                      <div className={styles.questDeckGroup}>
                        <QuestOfferDeck
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
                          returningToMoods={editingMood}
                          newCardsSequence={newCardsSequence}
                          newCardsPhase={newCardsPhase}
                          onSelectionStart={(rotation) =>
                            prepareSelection(rotation, "selection")
                          }
                          onSelect={(questId) =>
                            revealSelection(questId, "selection")
                          }
                        />

                        <motion.div
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
                        </motion.div>

                        <span className={styles.moodEditControl}>
                          <SolidButton
                            className={styles.moodEditButton}
                            size="medium"
                            type="button"
                            variant="soft"
                            aria-describedby="change-mood-tooltip"
                            onClick={editMood}
                          >
                            {t("ui.task.changeMood")}
                          </SolidButton>
                        </span>
                      </div>
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
          ) : null}
        </AnimatePresence>
      </LayoutGroup>
    </PlayLayout>
  );
}
