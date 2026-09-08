import { useRef, useState, type ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { useShallow } from "zustand/react/shallow";
import { CURATED_GAMES } from "../../../../data/games";
import type {
  CustomGame,
  CustomGameInput,
} from "../../../../domain/library/model";
import { DEFAULT_CURATED_PREFERENCES } from "../../../../domain/library/model";
import { customGameQuestIds } from "../../../../domain/library/rules";
import { GameVisual } from "../../../../shared/ui/GameVisual/GameVisual";
import { FlowFrame } from "../../../../shared/ui/FlowFrame/FlowFrame";
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useReducedMotion,
} from "motion/react";
import {
  LIBRARY_LAYOUT_SPRING,
  LIBRARY_SELECTION_SPRING,
} from "../../../../shared/motion/transitions";
import { LibraryStep } from "../LibraryStep";
import { useLibraryStore } from "../../../../stores/useLibraryStore";
import { CustomGameEditor } from "../CustomGameEditor/CustomGameEditor";
import { EditIcon, PlusIcon, RemoveIcon } from "../LibraryIcons";
import { InfoLabel } from "../../../../shared/ui/InfoLabel/InfoLabel";
import { SolidButton } from "../../../../shared/ui/SolidButton/SolidButton";
import { GameControllerIcon } from "@phosphor-icons/react/dist/csr/GameController";
import { CuratedSelectionMark } from "../CuratedSelectionMark/CuratedSelectionMark";
import styles from "./LibraryCollectionEditor.module.css";

type EditorTarget = { kind: "new" } | { kind: "edit"; gameId: string } | null;

export function LibraryCollectionEditor({
  footer,
  title,
}: {
  footer?: ReactNode;
  title?: ReactNode;
}) {
  const { t } = useTranslation();
  const reduced = useReducedMotion();
  const {
    addCustomGame,
    customGames,
    removeCustomGame,
    selectedCuratedGameIds,
    curatedGamePreferences,
    toggleCuratedInstallment,
    toggleCuratedGame,
    updateCustomGame,
  } = useLibraryStore(
    useShallow((state) => ({
      addCustomGame: state.addCustomGame,
      customGames: state.customGames,
      removeCustomGame: state.removeCustomGame,
      selectedCuratedGameIds: state.selectedCuratedGameIds,
      curatedGamePreferences: state.curatedGamePreferences,
      toggleCuratedInstallment: state.toggleCuratedInstallment,
      toggleCuratedGame: state.toggleCuratedGame,
      updateCustomGame: state.updateCustomGame,
    })),
  );
  const [editorTarget, setEditorTarget] = useState<EditorTarget>(null);
  const overviewScroll = useRef(0);
  const overviewScrollRef = useRef<HTMLDivElement>(null);
  const editingGame =
    editorTarget?.kind === "edit"
      ? customGames.find((game) => game.id === editorTarget.gameId)
      : undefined;
  const editorKey =
    editorTarget?.kind === "new"
      ? "new"
      : editingGame
        ? `edit-${editingGame.id}`
        : "collection";

  function saveCustomGame(input: CustomGameInput) {
    if (!editorTarget) return;
    const saved =
      editorTarget.kind === "edit"
        ? updateCustomGame(editorTarget.gameId, input)
        : addCustomGame(input);
    if (saved) setEditorTarget(null);
  }

  function openEditor(target: Exclude<EditorTarget, null>) {
    overviewScroll.current =
      overviewScrollRef.current?.scrollTop ?? overviewScroll.current;
    setEditorTarget(target);
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      <LibraryStep key={editorKey}>
        {editorKey !== "collection" ? (
          <CustomGameEditor
            key={editingGame?.id ?? "new"}
            game={editingGame}
            onCancel={() => setEditorTarget(null)}
            onSave={saveCustomGame}
          />
        ) : (
          <FlowFrame
            title={title}
            footer={footer}
            initialScrollTop={overviewScroll.current}
            scrollElementRef={overviewScrollRef}
          >
            <div className={styles.collectionEditor}>
              <section className={styles.collectionSection}>
                <div className={styles.sectionHeader}>
                  <h3>
                    <InfoLabel
                      label={t("ui.library.curatedHeading")}
                      hint={t("ui.library.collectionHint")}
                    />
                  </h3>
                  <span className={styles.optional}>
                    {t("ui.library.optional")}
                  </span>
                </div>
                <LayoutGroup id="curated-library-games">
                  <div className={styles.curatedList}>
                    {CURATED_GAMES.map((game, index) => {
                      const selected = selectedCuratedGameIds.includes(game.id);
                      const previousSelected = selectedCuratedGameIds.includes(
                        CURATED_GAMES[index - 1]?.id ?? "",
                      );
                      const nextSelected = selectedCuratedGameIds.includes(
                        CURATED_GAMES[index + 1]?.id ?? "",
                      );
                      const preferences =
                        curatedGamePreferences[game.id] ??
                        DEFAULT_CURATED_PREFERENCES;
                      return (
                        <motion.div
                          className={styles.curatedEntry}
                          data-selected={selected || undefined}
                          data-previous-selected={
                            previousSelected || undefined
                          }
                          data-next-selected={nextSelected || undefined}
                          key={game.id}
                          layout
                          transition={{
                            layout: reduced
                              ? { duration: 0 }
                              : LIBRARY_LAYOUT_SPRING,
                          }}
                        >
                          <button
                            className={styles.curatedGame}
                            type="button"
                            aria-pressed={selected}
                            onClick={() => toggleCuratedGame(game.id)}
                          >
                            <span className={styles.curatedVisualFrame}>
                              <motion.span
                                className={styles.curatedVisualScale}
                                initial={false}
                                animate={{ scale: selected ? 0.82 : 1 }}
                                transition={
                                  reduced
                                    ? { duration: 0 }
                                    : LIBRARY_SELECTION_SPRING
                                }
                              >
                                <GameVisual
                                  className={styles.curatedVisual}
                                  game={{
                                    id: game.id,
                                    name: game.name,
                                    source: "curated",
                                  }}
                                />
                              </motion.span>
                            </span>
                            <span className={styles.gameName}>
                              {game.name}
                              <span className={styles.gameKind}>
                                {t(
                                  game.isSeries
                                    ? "ui.library.series"
                                    : "ui.library.game",
                                )}
                              </span>
                            </span>
                            <CuratedSelectionMark
                              pending={
                                selected &&
                                game.isSeries &&
                                preferences.installmentIds.length === 0
                              }
                              selected={selected}
                            />
                          </button>
                          <AnimatePresence initial={false}>
                            {selected && game.installments.length ? (
                              <motion.div
                                className={styles.curatedOptionsClip}
                                initial={
                                  reduced ? false : { height: 0, opacity: 0 }
                                }
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={
                                  reduced
                                    ? { duration: 0 }
                                    : {
                                        height: LIBRARY_LAYOUT_SPRING,
                                        opacity: { duration: 0.16 },
                                      }
                                }
                              >
                                <div className={styles.curatedOptions}>
                                  <span>{t("ui.library.installments")}</span>
                                  <div className={styles.installmentChips}>
                                    {game.installments.map((entry) => {
                                      const installmentSelected =
                                        preferences.installmentIds.includes(
                                          entry.id,
                                        );
                                      return (
                                        <button
                                          key={entry.id}
                                          type="button"
                                          aria-pressed={installmentSelected}
                                          onClick={() =>
                                            toggleCuratedInstallment(
                                              game.id,
                                              entry.id,
                                            )
                                          }
                                        >
                                          <span
                                            className={styles.chipDot}
                                            aria-hidden
                                          />
                                          <span>{entry.name}</span>
                                        </button>
                                      );
                                    })}
                                  </div>
                                </div>
                              </motion.div>
                            ) : null}
                          </AnimatePresence>
                        </motion.div>
                      );
                    })}
                  </div>
                </LayoutGroup>
              </section>
              <section className={styles.collectionSection}>
                <div className={styles.sectionHeader}>
                  <h3>
                    <InfoLabel
                      label={t("ui.library.customHeading")}
                      hint={t("ui.library.customDescription")}
                    />
                  </h3>
                </div>
                {customGames.length ? (
                  <>
                    <div className={styles.customGameList}>
                      {customGames.map((game) => (
                        <CustomGameRow
                          game={game}
                          key={game.id}
                          onEdit={() =>
                            openEditor({ kind: "edit", gameId: game.id })
                          }
                          onRemove={() => removeCustomGame(game.id)}
                        />
                      ))}
                    </div>

                    <div className={styles.emptyState}>
                      <SolidButton
                        className={styles.addButton}
                        iconLeft={<PlusIcon />}
                        size="small"
                        variant="highContrast"
                        onClick={() => openEditor({ kind: "new" })}
                      >
                        {t("ui.library.addGame")}
                      </SolidButton>
                    </div>
                  </>
                ) : (
                  <div className={styles.emptyState}>
                    <GameControllerIcon weight="duotone" aria-hidden />
                    <strong>{t("ui.library.noCustomGames")}</strong>
                    <SolidButton
                      variant="highContrast"
                      iconLeft={<PlusIcon />}
                      size="small"
                      onClick={() => openEditor({ kind: "new" })}
                    >
                      {t("ui.library.addGame")}
                    </SolidButton>
                  </div>
                )}
              </section>
            </div>
          </FlowFrame>
        )}
      </LibraryStep>
    </AnimatePresence>
  );
}

function CustomGameRow({
  game,
  onEdit,
  onRemove,
}: {
  game: CustomGame;
  onEdit: () => void;
  onRemove: () => void;
}) {
  const { t } = useTranslation();
  const [confirming, setConfirming] = useState(false);
  return (
    <div
      className={styles.customGameRow}
      data-confirming={confirming || undefined}
    >
      <GameVisual game={{ ...game, source: "custom" }} />
      <div className={styles.customCopy}>
        <strong>{game.name}</strong>
        <span>
          {t("ui.library.questCount", {
            count: customGameQuestIds(game).length,
          })}
        </span>
      </div>
      <div className={styles.customGameActions}>
        {confirming ? (
          <>
            <button type="button" onClick={() => setConfirming(false)}>
              {t("ui.library.cancel")}
            </button>
            <button
              type="button"
              className={styles.removeConfirmation}
              onClick={onRemove}
            >
              {t("ui.library.confirmRemove")}
            </button>
          </>
        ) : (
          <>
            <button
              type="button"
              onClick={onEdit}
              aria-label={t("ui.library.editGame", { game: game.name })}
              title={t("ui.library.edit")}
            >
              <EditIcon />
            </button>
            <button
              type="button"
              onClick={() => setConfirming(true)}
              aria-label={t("ui.library.removeGame", { game: game.name })}
              title={t("ui.library.remove")}
            >
              <RemoveIcon />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
