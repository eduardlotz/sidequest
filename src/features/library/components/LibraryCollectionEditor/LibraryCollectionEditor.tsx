import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useShallow } from "zustand/react/shallow";
import { CURATED_GAMES } from "../../../../data/games";
import type {
  CustomGame,
  CustomGameInput,
} from "../../../../domain/library/model";
import { GameVisual } from "../../../../shared/ui/GameVisual/GameVisual";
import { CheckIcon } from "../../../../shared/ui/Icons/Icons";
import { SolidButton } from "../../../../shared/ui/SolidButton/SolidButton";
import { useLibraryStore } from "../../../../stores/useLibraryStore";
import { CustomGameEditor } from "../CustomGameEditor/CustomGameEditor";
import styles from "./LibraryCollectionEditor.module.css";

type EditorTarget = "new" | string | null;

export function LibraryCollectionEditor() {
  const { t } = useTranslation();
  const {
    addCustomGame,
    customGames,
    removeCustomGame,
    selectedCuratedGameIds,
    toggleCuratedGame,
    updateCustomGame,
  } = useLibraryStore(
    useShallow((state) => ({
      addCustomGame: state.addCustomGame,
      customGames: state.customGames,
      removeCustomGame: state.removeCustomGame,
      selectedCuratedGameIds: state.selectedCuratedGameIds,
      toggleCuratedGame: state.toggleCuratedGame,
      updateCustomGame: state.updateCustomGame,
    })),
  );
  const [editorTarget, setEditorTarget] = useState<EditorTarget>(null);
  const editingGame =
    editorTarget && editorTarget !== "new"
      ? customGames.find((game) => game.id === editorTarget)
      : undefined;

  function saveCustomGame(input: CustomGameInput) {
    if (editingGame) {
      updateCustomGame(editingGame.id, input);
    } else {
      addCustomGame(input);
    }
    setEditorTarget(null);
  }

  return (
    <div className={styles.collectionEditor}>
      <section className={styles.collectionSection}>
        <div className={styles.sectionIntro}>
          <h3>{t("ui.library.curatedHeading")}</h3>
          <p>{t("ui.library.curatedDescription")}</p>
        </div>
        <div className={styles.curatedGrid}>
          {CURATED_GAMES.map((game) => {
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
                  size="tile"
                />
                <span className={styles.curatedGameName}>{game.name}</span>
                <span className={styles.selectionMark} aria-hidden="true">
                  <CheckIcon />
                </span>
              </button>
            );
          })}
        </div>
      </section>

      <section className={styles.collectionSection}>
        <div className={styles.customHeadingRow}>
          <div className={styles.sectionIntro}>
            <h3>{t("ui.library.customHeading")}</h3>
            <p>{t("ui.library.customDescription")}</p>
          </div>
          {editorTarget === null ? (
            <SolidButton
              type="button"
              variant="soft"
              onClick={() => setEditorTarget("new")}
            >
              {t("ui.library.addGame")}
            </SolidButton>
          ) : null}
        </div>

        {editorTarget ? (
          <CustomGameEditor
            key={editingGame?.id ?? "new"}
            game={editingGame}
            onCancel={() => setEditorTarget(null)}
            onSave={saveCustomGame}
          />
        ) : customGames.length > 0 ? (
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
  return (
    <div className={styles.customGameRow}>
      <GameVisual game={{ ...game, source: "custom" }} />
      <div>
        <strong>{game.name}</strong>
        <span>
          {t("ui.library.capabilityCount", {
            count: game.capabilityIds.length,
          })}
        </span>
      </div>
      <div className={styles.customGameActions}>
        <button type="button" onClick={onEdit}>
          {t("ui.library.edit")}
        </button>
        <button type="button" onClick={onRemove}>
          {t("ui.library.remove")}
        </button>
      </div>
    </div>
  );
}
