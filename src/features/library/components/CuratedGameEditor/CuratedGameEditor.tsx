import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { Drawer } from "vaul";
import { useStore } from "zustand";
import { useShallow } from "zustand/react/shallow";
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useReducedMotion,
} from "motion/react";
import { CURATED_GAMES } from "../../../../data/games";
import { DEFAULT_CURATED_PREFERENCES } from "../../../../domain/library/model";
import {
  createLibraryStore,
  LibraryStoreContext,
} from "../../../../stores/useLibraryStore";
import {
  LIBRARY_LAYOUT_SPRING,
  LIBRARY_SELECTION_SPRING,
} from "../../../../shared/motion/transitions";
import { FlowFrame } from "../../../../shared/ui/FlowFrame/FlowFrame";
import { GameVisual } from "../../../../shared/ui/GameVisual/GameVisual";
import { InfoLabel } from "../../../../shared/ui/InfoLabel/InfoLabel";
import { SolidButton } from "../../../../shared/ui/SolidButton/SolidButton";
import { CuratedSelectionMark } from "../CuratedSelectionMark/CuratedSelectionMark";
import styles from "./CuratedGameEditor.module.css";

export function CuratedGameEditor({
  onClose,
  presentation = "page",
}: {
  onClose: () => void;
  presentation?: "page" | "drawer";
}) {
  const { t } = useTranslation();
  const reduced = useReducedMotion();
  const collectionStore = useContext(LibraryStoreContext);
  // Keep this step's changes separate from the surrounding library draft.
  const [draftStore] = useState(() => {
    const draft = createLibraryStore();
    const { selectedCuratedGameIds, curatedGamePreferences } =
      collectionStore.getState();
    draft.setState({ selectedCuratedGameIds, curatedGamePreferences });
    return draft;
  });
  const {
    selectedCuratedGameIds,
    curatedGamePreferences,
    toggleCuratedGame,
    toggleCuratedInstallment,
  } = useStore(
    draftStore,
    useShallow((state) => ({
      selectedCuratedGameIds: state.selectedCuratedGameIds,
      curatedGamePreferences: state.curatedGamePreferences,
      toggleCuratedGame: state.toggleCuratedGame,
      toggleCuratedInstallment: state.toggleCuratedInstallment,
    })),
  );

  function saveSelection() {
    const { selectedCuratedGameIds, curatedGamePreferences } =
      draftStore.getState();
    collectionStore.setState((state) => ({
      selectedCuratedGameIds,
      curatedGamePreferences,
      revision: state.revision + 1,
    }));
    onClose();
  }

  const saveButton = (
    <SolidButton size="large" variant="primary" onClick={saveSelection}>
      {t("ui.library.saveSelection")}
    </SolidButton>
  );
  const cancelButton = (
    <SolidButton size="large" variant="ghost" onClick={onClose}>
      {t("ui.library.cancel")}
    </SolidButton>
  );

  return (
    <FlowFrame
      title={
        presentation === "page" ? t("ui.library.curatedHeading") : undefined
      }
      footer={
        <>
          {presentation === "drawer" ? (
            <Drawer.Close asChild>{saveButton}</Drawer.Close>
          ) : (
            saveButton
          )}
          {presentation === "drawer" ? (
            <Drawer.Close asChild>{cancelButton}</Drawer.Close>
          ) : (
            cancelButton
          )}
        </>
      }
    >
      <div className={styles.editor}>
        <section className={styles.collectionSection}>
          <div className={styles.sectionHeader}>
            <h3>
              <InfoLabel
                label={t("ui.library.supportedGames")}
                hint={t("ui.library.collectionHint")}
              />
            </h3>
            <span className={styles.optional}>
              {`${selectedCuratedGameIds.length}/${CURATED_GAMES.length}`}
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
                    data-previous-selected={previousSelected || undefined}
                    data-next-selected={nextSelected || undefined}
                    key={game.id}
                    layout
                    transition={{
                      layout: reduced ? { duration: 0 } : LIBRARY_LAYOUT_SPRING,
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
                            reduced ? { duration: 0 } : LIBRARY_SELECTION_SPRING
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
                        appearance="drawer"
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
                          initial={reduced ? false : { height: 0, opacity: 0 }}
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
                                  preferences.installmentIds.includes(entry.id);
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
      </div>
    </FlowFrame>
  );
}
