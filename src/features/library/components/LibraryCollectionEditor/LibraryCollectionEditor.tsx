import { useId, useRef, useState, type ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { useShallow } from "zustand/react/shallow";
import { CURATED_GAMES } from "../../../../data/games";
import type {
  CustomGame,
  CustomGameInput,
} from "../../../../domain/library/model";
import { DEFAULT_CURATED_PREFERENCES } from "../../../../domain/library/model";
import {
  customGameQuestIds,
  curatedGameQuestIds,
} from "../../../../domain/library/rules";
import { GameVisual } from "../../../../shared/ui/GameVisual/GameVisual";
import { SelectionMark } from "../../../../shared/ui/SelectionMark/SelectionMark";
import { FlowFrame } from "../../../../shared/ui/FlowFrame/FlowFrame";
import { AnimatePresence } from "motion/react";
import { LibraryStep } from "../LibraryStep";
import { useLibraryStore } from "../../../../stores/useLibraryStore";
import { CustomGameEditor } from "../CustomGameEditor/CustomGameEditor";
import { EditIcon, PlusIcon, RemoveIcon } from "../LibraryIcons";
import { InfoLabel } from "../../../../shared/ui/InfoLabel/InfoLabel";
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
  const collectionId = useId();
  const {
    addCustomGame,
    customGames,
    removeCustomGame,
    selectedCuratedGameIds,
    curatedGamePreferences,
    setCuratedQuestMode,
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
      setCuratedQuestMode: state.setCuratedQuestMode,
      toggleCuratedInstallment: state.toggleCuratedInstallment,
      toggleCuratedGame: state.toggleCuratedGame,
      updateCustomGame: state.updateCustomGame,
    })),
  );
  const [editorTarget, setEditorTarget] = useState<EditorTarget>(null);
  const overviewScroll = useRef(0);
  const questCounts = useLibraryStore(
    useShallow((state) =>
      CURATED_GAMES.map((game) => curatedGameQuestIds(state, game.id).length),
    ),
  );
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
            onScrollPositionChange={(top) => {
              overviewScroll.current = top;
            }}
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
                <div className={styles.curatedList}>
                  {CURATED_GAMES.map((game) => {
                    const selected = selectedCuratedGameIds.includes(game.id);
                    const preferences =
                      curatedGamePreferences[game.id] ??
                      DEFAULT_CURATED_PREFERENCES;
                    return (
                      <div className={styles.curatedEntry} key={game.id}>
                        <button
                          className={styles.curatedGame}
                          key={game.id}
                          type="button"
                          aria-pressed={selected}
                          onClick={() => toggleCuratedGame(game.id)}
                        >
                          <GameVisual
                            game={{
                              id: game.id,
                              name: game.name,
                              source: "curated",
                            }}
                          />
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
                          <SelectionMark selected={selected} />
                        </button>
                        {selected ? (
                          <details
                            className={styles.curatedOptions}
                            ref={(node) => {
                              if (node && !node.dataset.initialized) {
                                node.open = Boolean(
                                  game.installments.length &&
                                  !preferences.installmentIds.length,
                                );
                                node.dataset.initialized = "true";
                              }
                            }}
                          >
                            <summary>{t("ui.library.configureGame")}</summary>
                            <fieldset className={styles.questMode}>
                              <legend>
                                {t("ui.library.questMode", { game: game.name })}
                              </legend>
                              {(
                                [
                                  "curated-only",
                                  "curated-and-flexible",
                                ] as const
                              ).map((mode) => (
                                <label key={mode}>
                                  <input
                                    type="radio"
                                    name={`${collectionId}-quest-mode-${game.id}`}
                                    checked={preferences.questMode === mode}
                                    onChange={() =>
                                      setCuratedQuestMode(game.id, mode)
                                    }
                                  />
                                  {t(
                                    mode === "curated-only"
                                      ? "ui.library.curatedOnly"
                                      : "ui.library.curatedAndFlexible",
                                  )}
                                </label>
                              ))}
                            </fieldset>
                            {game.installments.length ? (
                              <fieldset className={styles.installments}>
                                <legend>{t("ui.library.installments")}</legend>
                                {game.installments.map((entry) => (
                                  <label key={entry.id}>
                                    <input
                                      type="checkbox"
                                      checked={preferences.installmentIds.includes(
                                        entry.id,
                                      )}
                                      onChange={() =>
                                        toggleCuratedInstallment(
                                          game.id,
                                          entry.id,
                                        )
                                      }
                                    />
                                    {entry.name}
                                  </label>
                                ))}
                              </fieldset>
                            ) : null}
                            <p className={styles.selectionHint}>
                              {game.installments.length &&
                              !preferences.installmentIds.length
                                ? t("ui.library.chooseInstallment")
                                : t("ui.library.questCount", {
                                    count:
                                      questCounts[CURATED_GAMES.indexOf(game)],
                                  })}
                            </p>
                          </details>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              </section>
              <section className={styles.collectionSection}>
                <div className={styles.sectionHeader}>
                  <h3>
                    <InfoLabel
                      label={t("ui.library.customHeading")}
                      hint={t("ui.library.customDescription")}
                    />
                  </h3>
                  <button
                    className={styles.addButton}
                    type="button"
                    onClick={() => setEditorTarget({ kind: "new" })}
                  >
                    <PlusIcon />
                    {t("ui.library.addGame")}
                  </button>
                </div>
                {customGames.length ? (
                  <div className={styles.customGameList}>
                    {customGames.map((game) => (
                      <CustomGameRow
                        game={game}
                        key={game.id}
                        onEdit={() =>
                          setEditorTarget({ kind: "edit", gameId: game.id })
                        }
                        onRemove={() => removeCustomGame(game.id)}
                      />
                    ))}
                  </div>
                ) : (
                  <p className={styles.emptyState}>
                    {t("ui.library.noCustomGames")}
                  </p>
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
