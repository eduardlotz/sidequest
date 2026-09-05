import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useShallow } from "zustand/react/shallow";
import { CURATED_GAMES } from "../../../../data/games";
import type {
  CustomGame,
  CustomGameInput,
} from "../../../../domain/library/model";
import { customGameQuestIds } from "../../../../domain/library/rules";
import { GameVisual } from "../../../../shared/ui/GameVisual/GameVisual";
import { CheckIcon } from "../../../../shared/ui/Icons/Icons";
import { useLibraryStore } from "../../../../stores/useLibraryStore";
import { CustomGameEditor } from "../CustomGameEditor/CustomGameEditor";
import { EditIcon, PlusIcon, RemoveIcon, SearchIcon } from "../LibraryIcons";
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
    toggleCuratedGame,
    selectAllCuratedGames,
    updateCustomGame,
  } = useLibraryStore(
    useShallow((state) => ({
      addCustomGame: state.addCustomGame,
      customGames: state.customGames,
      removeCustomGame: state.removeCustomGame,
      selectedCuratedGameIds: state.selectedCuratedGameIds,
      toggleCuratedGame: state.toggleCuratedGame,
      selectAllCuratedGames: state.selectAllCuratedGames,
      updateCustomGame: state.updateCustomGame,
    })),
  );
  const [editorTarget, setEditorTarget] = useState<EditorTarget>(null);
  useEffect(() => {
    onEditingChange?.(editorTarget !== null);
  }, [editorTarget, onEditingChange]);
  const [search, setSearch] = useState("");
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
        <label className={styles.searchField}>
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
        </label>
        <div className={styles.curatedList}>
          {filteredGames.map((game) => {
            const selected = selectedCuratedGameIds.includes(game.id);
            return (
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
            <button
              type="button"
              className={styles.removeConfirmation}
              onClick={onRemove}
            >
              {t("ui.library.confirmRemove")}
            </button>
            <button type="button" onClick={() => setConfirming(false)}>
              {t("ui.library.cancel")}
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
