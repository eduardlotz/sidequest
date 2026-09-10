import { useRef, useState, type ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { useShallow } from "zustand/react/shallow";
import { AnimatePresence } from "motion/react";
import { FolderStarIcon } from "@phosphor-icons/react/dist/csr/FolderStar";
import { FolderUserIcon } from "@phosphor-icons/react/dist/csr/FolderUser";
import { CURATED_GAMES } from "../../../../data/games";
import type {
  CustomGame,
  CustomGameInput,
} from "../../../../domain/library/model";
import { customGameQuestIds } from "../../../../domain/library/rules";
import { useLibraryStore } from "../../../../stores/useLibraryStore";
import { ResponsiveNestedDrawer } from "../../../../shared/ui/ResponsiveDrawer/ResponsiveDrawer";
import { GameVisual } from "../../../../shared/ui/GameVisual/GameVisual";
import { FlowFrame } from "../../../../shared/ui/FlowFrame/FlowFrame";
import { InfoLabel } from "../../../../shared/ui/InfoLabel/InfoLabel";
import { SolidButton } from "../../../../shared/ui/SolidButton/SolidButton";
import { LibraryDrawerFrame } from "../LibraryDrawerFrame/LibraryDrawerFrame";
import { LibraryStep } from "../LibraryStep";
import { CuratedGameEditor } from "../CuratedGameEditor/CuratedGameEditor";
import { CustomGameEditor } from "../CustomGameEditor/CustomGameEditor";
import { EditIcon, RemoveIcon } from "../LibraryIcons";
import styles from "./LibraryCollectionEditor.module.css";

type EditorTarget =
  | { kind: "curated" }
  | { kind: "new" }
  | { kind: "edit"; gameId: string }
  | null;

export function LibraryCollectionEditor({
  footer,
  title,
  presentation = "page",
}: {
  presentation?: "page" | "drawer";
  footer?: ReactNode;
  title?: ReactNode;
}) {
  const { t } = useTranslation();
  const {
    addCustomGame,
    customGames,
    removeCustomGame,
    selectedCuratedGameIds,
    updateCustomGame,
  } = useLibraryStore(
    useShallow((state) => ({
      addCustomGame: state.addCustomGame,
      customGames: state.customGames,
      removeCustomGame: state.removeCustomGame,
      selectedCuratedGameIds: state.selectedCuratedGameIds,
      updateCustomGame: state.updateCustomGame,
    })),
  );
  const [editorTarget, setEditorTarget] = useState<EditorTarget>(null);
  const overviewScroll = useRef(0);
  const overviewScrollRef = useRef<HTMLDivElement>(null);
  const selectedCuratedGames = CURATED_GAMES.filter((game) =>
    selectedCuratedGameIds.includes(game.id),
  );
  const editingGame =
    editorTarget?.kind === "edit"
      ? customGames.find((game) => game.id === editorTarget.gameId)
      : undefined;
  const editorKey =
    editorTarget?.kind === "curated"
      ? "curated"
      : editorTarget?.kind === "new"
        ? "new"
        : editingGame
          ? `edit-${editingGame.id}`
          : "collection";

  function closeEditor() {
    setEditorTarget(null);
  }

  function saveCustomGame(input: CustomGameInput) {
    if (!editorTarget || editorTarget.kind === "curated") return;
    const saved =
      editorTarget.kind === "edit"
        ? updateCustomGame(editorTarget.gameId, input)
        : addCustomGame(input);
    if (saved) closeEditor();
  }

  function openEditor(target: Exclude<EditorTarget, null>) {
    overviewScroll.current =
      overviewScrollRef.current?.scrollTop ?? overviewScroll.current;
    setEditorTarget(target);
  }

  const editor = editorKey === "curated" ? (
    <CuratedGameEditor presentation={presentation} onClose={closeEditor} />
  ) : editorKey !== "collection" ? (
    <CustomGameEditor
      key={editingGame?.id ?? "new"}
      game={editingGame}
      presentation={presentation}
      onCancel={closeEditor}
      onSave={saveCustomGame}
    />
  ) : null;

  return (
    <>
      <AnimatePresence mode="wait" initial={false}>
        <LibraryStep key={presentation === "drawer" ? "collection" : editorKey}>
          {presentation !== "drawer" && editor ? editor : (
            <FlowFrame
              titleInContent
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
                    {selectedCuratedGames.length ? (
                      <SolidButton
                        size="small"
                        variant="highlighted"
                        onClick={() => openEditor({ kind: "curated" })}
                      >
                        {t("ui.library.adjust")}
                      </SolidButton>
                    ) : (
                      <span className={styles.optional}>
                        {t("ui.library.optional")}
                      </span>
                    )}
                  </div>
                  {selectedCuratedGames.length ? (
                    <div className={styles.gameList}>
                      {selectedCuratedGames.map((game) => (
                        <div className={styles.gameRow} key={game.id}>
                          <GameVisual
                            game={{ id: game.id, name: game.name, source: "curated" }}
                          />
                          <div className={styles.gameCopy}>
                            <strong>{game.name}</strong>
                            <span>
                              {t(game.isSeries ? "ui.library.series" : "ui.library.game")}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className={styles.emptyState}>
                      <FolderStarIcon aria-hidden />
                      <strong>{t("ui.library.noCuratedGames")}</strong>
                      <SolidButton
                        size="medium"
                        variant="highlighted"
                        onClick={() => openEditor({ kind: "curated" })}
                      >
                        {t("ui.library.selectGame")}
                      </SolidButton>
                    </div>
                  )}
                </section>
                <section className={styles.collectionSection}>
                  <div className={styles.sectionHeader}>
                    <h3>
                      <InfoLabel
                        label={t("ui.library.customHeading")}
                        hint={t("ui.library.customDescription")}
                      />
                    </h3>
                    {customGames.length ? (
                      <SolidButton
                        size="small"
                        variant="highlighted"
                        onClick={() => openEditor({ kind: "new" })}
                      >
                        {t("ui.library.add")}
                      </SolidButton>
                    ) : (
                      <span className={styles.optional}>
                        {t("ui.library.optional")}
                      </span>
                    )}
                  </div>
                  {customGames.length ? (
                    <div className={styles.gameList}>
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
                  ) : (
                    <div className={styles.emptyState}>
                      <FolderUserIcon aria-hidden />
                      <strong>{t("ui.library.noCustomGames")}</strong>
                      <SolidButton
                        size="medium"
                        variant="highlighted"
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
      {presentation === "drawer" && (
        <ResponsiveNestedDrawer
          open={editorKey !== "collection"}
          onOpenChange={(open) => {
            if (!open) closeEditor();
          }}
        >
          <LibraryDrawerFrame
            title={t(
              editorKey === "curated"
                ? "ui.library.curatedHeading"
                : editingGame ? "ui.library.editGameTitle" : "ui.library.addGame",
            )}
          >
            {editor}
          </LibraryDrawerFrame>
        </ResponsiveNestedDrawer>
      )}
    </>
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
      className={styles.gameRow}
      data-confirming={confirming || undefined}
    >
      <GameVisual game={{ ...game, source: "custom" }} />
      <div className={styles.gameCopy}>
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
              data-action="remove"
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
              data-action="remove"
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
