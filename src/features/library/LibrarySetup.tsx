import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";
import { GlobeIcon } from "@phosphor-icons/react/dist/csr/Globe";
import { InfoIcon } from "@phosphor-icons/react/dist/csr/Info";

import { SolidButton } from "../../shared/ui/SolidButton/SolidButton";
import { PillButton } from "../../shared/ui/PillButton/PillButton";
import { useLibraryStore } from "../../stores/useLibraryStore";
import { LibraryCollectionEditor } from "./components/LibraryCollectionEditor/LibraryCollectionEditor";
import { LibraryStep } from "./components/LibraryStep";
import {
  ResponsiveDrawer,
  ResponsiveDrawerContainer,
} from "../../shared/ui/ResponsiveDrawer/ResponsiveDrawer";
import { AboutPanel } from "../../app/AboutPanel";
import { QuestCard } from "../../shared/quest-card/QuestCard/QuestCard";
import { localizeQuest } from "../../localization/catalog";
import { normalizeLanguage } from "../../localization/i18n";
import styles from "./LibrarySetup.module.css";
import { WordmarkSkewedLogo } from "../../assets/wordmark-skewed";
import { TiltedElement } from "../../shared/ui/TiltedElement/TiltedElement";

export function LibrarySetup({ reduceMotion }: { reduceMotion: boolean }) {
  const { t, i18n } = useTranslation();
  const [personal, setPersonal] = useState(false);
  const [container, setContainer] = useState<HTMLDivElement | null>(null);
  const completeSetup = useLibraryStore((s) => s.completeSetup);
  const language = normalizeLanguage(i18n.resolvedLanguage ?? i18n.language);
  const previews = [
    // localizeQuest("village-payday", language),
    localizeQuest("back-then", language),
    localizeQuest("a-little-walk", language),
  ].filter((q) => q !== null && q !== undefined);
  return (
    <section
      className={styles.setup}
      aria-label={t("ui.library.personalTitle")}
    >
      <AnimatePresence mode="wait" initial={false}>
        <LibraryStep key={personal ? "library" : "welcome"}>
          {personal ? (
            <LibraryCollectionEditor
              title={t("ui.library.overviewIntro")}
              footer={
                <>
                  <PillButton onClick={() => setPersonal(false)}>
                    {t("ui.library.back")}
                  </PillButton>
                  <SolidButton variant="primary" onClick={completeSetup}>
                    {t("ui.library.finishSetup")}
                  </SolidButton>
                </>
              }
            />
          ) : (
            <div className={styles.welcome}>
              <h1>{t("ui.library.welcome")}</h1>
              <div className={styles.wordmark} aria-label="sidesidequest">
                <TiltedElement>
                  <WordmarkSkewedLogo width={260} />
                </TiltedElement>
              </div>
              <p>{t("ui.library.welcomeDescription")}</p>
              <div className={styles.links}>
                <ResponsiveDrawer
                  desktopDirection="left"
                  mobileContainer={container}
                  variant="about"
                  trigger={
                    <PillButton>
                      <InfoIcon weight="bold" />
                      {t("ui.library.moreInformation")}
                    </PillButton>
                  }
                >
                  <AboutPanel reduceMotion={reduceMotion} />
                </ResponsiveDrawer>
                <PillButton
                  onClick={() =>
                    void i18n.changeLanguage(language === "en" ? "de" : "en")
                  }
                >
                  <GlobeIcon weight="bold" />
                  {t("ui.library.changeLanguage")}
                </PillButton>
              </div>
              <div className={styles.start}>
                <SolidButton
                  variant="primary"
                  onClick={() => setPersonal(true)}
                >
                  {t("ui.library.createLibrary")}
                </SolidButton>
                <PillButton onClick={completeSetup}>
                  {t("ui.library.startWithoutSetup")} ›
                </PillButton>
              </div>
              <div className={styles.previews} aria-hidden="true">
                {previews.map((q, index) => (
                  <span key={q.id} className={styles.previewCard}>
                    <QuestCard
                      genres={[]}
                      // game={{
                      //   id: "minecraft",
                      //   name: "Minecraft",
                      //   source: "curated",
                      // }}
                      minimumDurationMinutes={q.minimumDurationMinutes}
                      suggestedDurationMinutes={q.suggestedDurationMinutes}
                      moodTitle={t(
                        index
                          ? "ui.library.previewRelax"
                          : "ui.library.previewNostalgia",
                      )}
                      name={q.name}
                      objective={q.objective}
                      style={
                        {
                          "--accent": index ? "#55eadc" : "#c38cff",
                          "--accent-rgb": index ? "85 234 220" : "195 140 255",
                        } as React.CSSProperties
                      }
                    />
                  </span>
                ))}
              </div>
            </div>
          )}
        </LibraryStep>
      </AnimatePresence>
      <ResponsiveDrawerContainer setContainer={setContainer} />
    </section>
  );
}
