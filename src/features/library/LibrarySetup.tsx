import { useState } from "react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { useShallow } from "zustand/react/shallow";
import { CURATED_GAMES } from "../../data/games";
import { NAV_ENTRY_SPRING } from "../../shared/motion/transitions";
import { SolidButton } from "../../shared/ui/SolidButton/SolidButton";
import { GameVisual } from "../../shared/ui/GameVisual/GameVisual";
import { GameGenreIcon } from "../../shared/ui/Icons/Icons";
import { useLibraryStore } from "../../stores/useLibraryStore";
import { LibraryCollectionEditor } from "./components/LibraryCollectionEditor/LibraryCollectionEditor";
import { ChevronIcon } from "./components/LibraryIcons";
import styles from "./LibrarySetup.module.css";

export function LibrarySetup({ reduceMotion }: { reduceMotion: boolean }) {
  const { t } = useTranslation();
  const [personal, setPersonal] = useState(false);
  const [editing, setEditing] = useState(false);
  const { completeSetup, startWithDevsCollection, gameCount } = useLibraryStore(
    useShallow((state) => ({
      completeSetup: state.completeSetup,
      startWithDevsCollection: state.startWithDevsCollection,
      gameCount: state.customGames.length + state.selectedCuratedGameIds.length,
    })),
  );
  return (
    <motion.section
      className={styles.setup}
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={reduceMotion ? { duration: 0 } : NAV_ENTRY_SPRING}
      aria-labelledby="library-setup-title"
    >
      <header className={styles.intro}>
        {personal && !editing ? (
          <button
            type="button"
            className={styles.back}
            onClick={() => setPersonal(false)}
          >
            {t("ui.library.backToStart")}
          </button>
        ) : null}
        <h1 id="library-setup-title">
          {t(personal ? "ui.library.personalTitle" : "ui.library.setupTitle")}
        </h1>
        <p>
          {t(
            personal
              ? "ui.library.personalDescription"
              : "ui.library.setupDescription",
          )}
        </p>
      </header>
      {personal ? (
        <>
          <LibraryCollectionEditor onEditingChange={setEditing} />
          {!editing ? (
            <footer className={styles.footer}>
              <span>
                {t("ui.library.setupSelection", { count: gameCount })}
              </span>
              <SolidButton type="button" onClick={completeSetup}>
                {t(
                  gameCount
                    ? "ui.library.startSidequests"
                    : "ui.library.continueWithoutGames",
                )}
              </SolidButton>
            </footer>
          ) : null}
        </>
      ) : (
        <div className={styles.choices}>
          <div className={styles.choiceCard}>
          <button
            type="button"
            className={styles.choice}
            onClick={startWithDevsCollection}
          >
            <span className={styles.gameStack} aria-hidden="true">
              {CURATED_GAMES.slice(0, 3).map((game) => (
                <GameVisual
                  key={game.id}
                  game={{ ...game, source: "curated" }}
                />
              ))}
            </span>
            <span className={styles.choiceCopy}>
              <strong>{t("ui.library.curatedHeading")}</strong>
              <span>
                {t("ui.library.devStartDescription", {
                  count: CURATED_GAMES.length,
                })}
              </span>
            </span>
            <ChevronIcon />
          </button>
          <button
            type="button"
            className={styles.choice}
            onClick={() => setPersonal(true)}
          >
            <span className={styles.personalIcon}>
              <GameGenreIcon icon="multiplayer" />
            </span>
            <span className={styles.choiceCopy}>
              <strong>{t("ui.library.personalTitle")}</strong>
              <span>{t("ui.library.personalStartDescription")}</span>
            </span>
            <ChevronIcon />
          </button>
          </div>
          <button type="button" className={styles.skip} onClick={completeSetup}>
            {t("ui.library.continueWithoutGames")}
          </button>
        </div>
      )}
    </motion.section>
  );
}
