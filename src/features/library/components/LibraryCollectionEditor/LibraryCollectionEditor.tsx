import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useShallow } from "zustand/react/shallow";
import { CURATED_GAMES } from "../../../../data/games";
import type {
  CustomGame,
  CustomGameInput,
} from "../../../../domain/library/model";
import { DEFAULT_CURATED_PREFERENCES } from "../../../../domain/library/model";
import { customGameQuestIds, curatedGameQuestIds } from "../../../../domain/library/rules";
import { GameVisual } from "../../../../shared/ui/GameVisual/GameVisual";
import { CheckIcon } from "../../../../shared/ui/Icons/Icons";
import { useLibraryStore } from "../../../../stores/useLibraryStore";
import { CustomGameEditor } from "../CustomGameEditor/CustomGameEditor";
import { EditIcon, PlusIcon, RemoveIcon } from "../LibraryIcons";
import { SectionLabel } from "../SectionLabel/SectionLabel";
import styles from "./LibraryCollectionEditor.module.css";

type EditorTarget = "new" | string | null;

function searchableGameName(value: string) {
  return value
    .normalize("NFKD")
    .toLocaleLowerCase()
    .replace(/[^\p{L}\p{N}]/gu, "");
}

export function LibraryCollectionEditor({
  onEditingChange,
}: {
  onEditingChange?: (editing: boolean) => void;
}) {
  const { t } = useTranslation();
  const {
    addCustomGame,
    customGames,
    removeCustomGame,
    selectedCuratedGameIds,
    curatedGamePreferences,
    setCuratedQuestMode,
    toggleCuratedInstallment,
    toggleCuratedGame,
    selectAllCuratedGames,
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
      selectAllCuratedGames: state.selectAllCuratedGames,
      updateCustomGame: state.updateCustomGame,
    })),
  );
  const [editorTarget, setEditorTarget] = useState<EditorTarget>(null);
  useEffect(() => {
    onEditingChange?.(editorTarget !== null);
  }, [editorTarget, onEditingChange]);
  const [search] = useState("");
  const questCounts = useLibraryStore(useShallow((state) =>
    CURATED_GAMES.map((game) => curatedGameQuestIds(state, game.id).length),
  ));
  const editingGame =
    editorTarget && editorTarget !== "new"
      ? customGames.find((game) => game.id === editorTarget)
      : undefined;
  const allSelected = CURATED_GAMES.every((game) =>
    selectedCuratedGameIds.includes(game.id),
  );
  const filteredGames = CURATED_GAMES.filter((game) =>
    [game.name, game.id].some((name) =>
      searchableGameName(name).includes(searchableGameName(search)),
    ),
  );

  function saveCustomGame(input: CustomGameInput) {
    const saved = editingGame
      ? updateCustomGame(editingGame.id, input)
      : addCustomGame(input);
    if (saved) setEditorTarget(null);
  }

  if (editorTarget)
    return (
      <CustomGameEditor
        key={editingGame?.id ?? "new"}
        game={editingGame}
        onCancel={() => setEditorTarget(null)}
        onSave={saveCustomGame}
      />
    );

  return (
    <div className={styles.collectionEditor}>
      <section className={styles.collectionSection}>
        <div className={styles.sectionHeader}>
          <h3>
            <SectionLabel
              label={t("ui.library.curatedHeading")}
              hint={t("ui.library.collectionHint")}
            />
          </h3>
          <button
            className={styles.quietAction}
            type="button"
            onClick={() => selectAllCuratedGames(!allSelected)}
          >
            {t(allSelected ? "ui.library.removeAll" : "ui.library.addAll")}
          </button>
        </div>
        {/* <label className={styles.searchField}>
          <SearchIcon />
          <input
            type="search"
            value={search}
            placeholder={t("ui.library.searchGames")}
            aria-label={t("ui.library.searchGames")}
            onChange={(event) => setSearch(event.target.value)}
          />
          <span>
            {selectedCuratedGameIds.length}/{CURATED_GAMES.length}
          </span>
        </label> */}
        <div className={styles.curatedList}>
          {filteredGames.map((game) => {
            const selected = selectedCuratedGameIds.includes(game.id);
            const preferences = curatedGamePreferences[game.id] ?? DEFAULT_CURATED_PREFERENCES;
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
                  game={{ id: game.id, name: game.name, source: "curated" }}
                />
                <span className={styles.gameName}>{game.name}</span>
                <span className={styles.gameKind}>
                  {t(game.isSeries ? "ui.library.series" : "ui.library.game")}
                </span>
                <span className={styles.selectionMark} aria-hidden="true">
                  {selected ? <CheckIcon /> : <PlusIcon />}
                </span>
              </button>
              {selected ? (
                <div className={styles.curatedOptions}>
                  <fieldset className={styles.questMode}>
                    <legend>{t("ui.library.questMode", { game: game.name })}</legend>
                    {(["curated-only", "curated-and-flexible"] as const).map((mode) => (
                      <label key={mode}>
                        <input type="radio" name={`quest-mode-${game.id}`} checked={preferences.questMode === mode}
                          onChange={() => setCuratedQuestMode(game.id, mode)} />
                        {t(mode === "curated-only" ? "ui.library.curatedOnly" : "ui.library.curatedAndFlexible")}
                      </label>
                    ))}
                  </fieldset>
                  {game.installments.length ? (
                    <fieldset className={styles.installments}>
                      <legend>{t("ui.library.installments")}</legend>
                      {game.installments.map((entry) => (
                        <label key={entry.id}>
                          <input type="checkbox" checked={preferences.installmentIds.includes(entry.id)}
                            onChange={() => toggleCuratedInstallment(game.id, entry.id)} />
                          {entry.name}
                        </label>
                      ))}
                    </fieldset>
                  ) : null}
                  <p className={styles.selectionHint}>
                    {game.installments.length && !preferences.installmentIds.length
                      ? t("ui.library.chooseInstallment")
                      : t("ui.library.questCount", { count: questCounts[CURATED_GAMES.indexOf(game)] })}
                  </p>
                </div>
              ) : null}
              </div>
            );
          })}
          {filteredGames.length === 0 ? (
            <p className={styles.emptyState}>
              {t("ui.library.noSearchResults")}
            </p>
          ) : null}
        </div>
      </section>
      <section className={styles.collectionSection}>
        <div className={styles.sectionHeader}>
          <h3>
            <SectionLabel
              label={t("ui.library.customHeading")}
              hint={t("ui.library.customDescription")}
            />
          </h3>
          <button
            className={styles.addButton}
            type="button"
            onClick={() => setEditorTarget("new")}
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
                onEdit={() => setEditorTarget(game.id)}
                onRemove={() => removeCustomGame(game.id)}
              />
            ))}
          </div>
        ) : (
          <p className={styles.emptyState}>{t("ui.library.noCustomGames")}</p>
        )}
      </section>
    </div>
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
