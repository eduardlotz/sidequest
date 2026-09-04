import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { useShallow } from "zustand/react/shallow";
import { NAV_ENTRY_SPRING } from "../../shared/motion/transitions";
import { SolidButton } from "../../shared/ui/SolidButton/SolidButton";
import { useLibraryStore } from "../../stores/useLibraryStore";
import { LibraryCollectionEditor } from "./components/LibraryCollectionEditor/LibraryCollectionEditor";
import styles from "./LibrarySetup.module.css";

export function LibrarySetup({ reduceMotion }: { reduceMotion: boolean }) {
  const { t } = useTranslation();
  const { completeSetup, customGameCount, selectedCuratedGameCount } =
    useLibraryStore(
      useShallow((state) => ({
        completeSetup: state.completeSetup,
        customGameCount: state.customGames.length,
        selectedCuratedGameCount: state.selectedCuratedGameIds.length,
      })),
    );
  const gameCount = customGameCount + selectedCuratedGameCount;

  return (
    <motion.section
      className={styles.setup}
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={reduceMotion ? { duration: 0 } : NAV_ENTRY_SPRING}
      aria-labelledby="library-setup-title"
    >
      <header className={styles.intro}>
        <span>{t("ui.library.setupEyebrow")}</span>
        <h1 id="library-setup-title">{t("ui.library.setupTitle")}</h1>
        <p>{t("ui.library.setupDescription")}</p>
      </header>

      <div className={styles.panel}>
        <LibraryCollectionEditor />
        <footer className={styles.footer}>
          <p>{t("ui.library.setupSelection", { count: gameCount })}</p>
          <SolidButton
            type="button"
            disabled={gameCount === 0}
            onClick={completeSetup}
          >
            {t("ui.library.startSidequests")}
          </SolidButton>
        </footer>
      </div>
    </motion.section>
  );
}
