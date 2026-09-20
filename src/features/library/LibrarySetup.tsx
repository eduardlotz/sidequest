import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { GlobeIcon } from "@phosphor-icons/react/dist/csr/Globe";
import { InfoIcon } from "@phosphor-icons/react/dist/csr/Info";
import { CaretRightIcon } from "@phosphor-icons/react/dist/csr/CaretRight";

import { SolidButton } from "../../shared/ui/SolidButton/SolidButton";
import { useLibraryStore } from "../../stores/useLibraryStore";
import { LibraryCollectionEditor } from "./components/LibraryCollectionEditor/LibraryCollectionEditor";
import { LibraryStep } from "./components/LibraryStep";
import { AboutPanel } from "../../app/AboutPanel";
import { normalizeLanguage } from "../../localization/i18n";
import styles from "./LibrarySetup.module.css";
import flowStyles from "./components/LibraryFlowElements.module.css";
import { WordmarkSkewedLogo } from "../../assets/wordmark-skewed";
import { TiltedElement } from "../../shared/ui/TiltedElement/TiltedElement";
import type { ThemeChoice } from "../../lib/theme";
import { ContrastIcon } from "../../shared/ui/Icons/Icons";

import {
  WelcomeQuestPreviews,
  createWelcomePreviewOffers,
} from "./components/WelcomeQuestPreviews/WelcomeQuestPreviews";
import { SELECTION_HANDOFF_EASE } from "../../shared/motion/transitions";
import { FullscreenDialog } from "../../shared/ui/FullscreenDialog/FullscreenDialog";

export function LibrarySetup({
  onThemeChange,
  reduceMotion,
  themeChoice,
}: {
  onThemeChange: (choice: ThemeChoice) => void;
  reduceMotion: boolean;
  themeChoice: ThemeChoice;
}) {
  const { t, i18n } = useTranslation();
  const [personal, setPersonal] = useState(false);
  const [welcomeEntered, setWelcomeEntered] = useState(reduceMotion);
  const [informationOpen, setInformationOpen] = useState(false);
  const informationTriggerRef = useRef<HTMLButtonElement>(null);
  const setupRef = useRef<HTMLElement>(null);

  const completeSetup = useLibraryStore((s) => s.completeSetup);
  const language = normalizeLanguage(i18n.resolvedLanguage ?? i18n.language);
  const [previewOffers] = useState(createWelcomePreviewOffers);
  const welcomeItem = {
    hidden: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.38,
        ease: SELECTION_HANDOFF_EASE,
      },
    },
    exit: {
      opacity: 0,
      y: reduceMotion ? 0 : -6,
      transition: { duration: reduceMotion ? 0 : 0.18 },
    },
  };
  const nextTheme = nextThemeChoice(themeChoice);

  useEffect(() => {
    // The app suppresses its first presence entrance; explicitly start this stagger.
    if (reduceMotion) {
      setWelcomeEntered(true);
      return;
    }
    const frame = window.requestAnimationFrame(() => setWelcomeEntered(true));
    return () => window.cancelAnimationFrame(frame);
  }, [reduceMotion]);

  useLayoutEffect(() => {
    setupRef.current?.scrollTo({ top: 0 });
  }, [personal]);

  return (
    <section
      className={`${flowStyles.elements} ${styles.setup}`}
      data-presentation="page"
      ref={setupRef}
      aria-label={t("ui.library.personalTitle")}
    >
      <AnimatePresence mode="wait">
        <LibraryStep key={personal ? "library" : "welcome"}>
          {personal ? (
            <LibraryCollectionEditor
              title={t("ui.library.overviewIntro")}
              footer={
                <>
                  <SolidButton
                    size="large"
                    variant="primary"
                    onClick={completeSetup}
                  >
                    {t("ui.library.finishSetup")}
                  </SolidButton>
                  <SolidButton
                    size="large"
                    variant="ghost"
                    // iconLeft={<ChevronLeftIcon />}
                    onClick={() => setPersonal(false)}
                  >
                    {t("ui.library.cancel")}
                  </SolidButton>
                </>
              }
            />
          ) : (
            <motion.div
              className={styles.welcome}
              initial="hidden"
              animate={welcomeEntered ? "visible" : "hidden"}
              exit="exit"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: reduceMotion ? 0 : 0.065 },
                },
                exit: {},
              }}
              aria-hidden={informationOpen || undefined}
              inert={informationOpen || undefined}
            >
              <motion.h1 variants={welcomeItem}>
                {t("ui.library.welcome")}
              </motion.h1>
              <motion.div
                className={styles.wordmark}
                aria-label="sidesidequest"
                variants={welcomeItem}
              >
                <TiltedElement>
                  <WordmarkSkewedLogo width={260} />
                </TiltedElement>
              </motion.div>
              <motion.p variants={welcomeItem}>
                {t("ui.library.welcomeDescription")}
              </motion.p>
              <motion.div className={styles.links} variants={welcomeItem}>
                <SolidButton
                  aria-label={t("ui.library.changeThemeTo", {
                    theme: t(`ui.profile.theme${capitalize(nextTheme)}`),
                  })}
                  iconLeft={<ContrastIcon />}
                  size="medium"
                  variant="secondary"
                  onClick={() => onThemeChange(nextTheme)}
                >
                  {t("ui.library.changeTheme")}
                </SolidButton>

                <SolidButton
                  iconLeft={<GlobeIcon weight="bold" />}
                  size="medium"
                  variant="secondary"
                  onClick={() =>
                    void i18n.changeLanguage(language === "en" ? "de" : "en")
                  }
                >
                  {t("ui.library.changeLanguage")}
                </SolidButton>
                <SolidButton
                  ref={informationTriggerRef}
                  iconLeft={<InfoIcon weight="bold" />}
                  size="medium"
                  variant="secondary"
                  onClick={() => setInformationOpen(true)}
                >
                  {t("ui.library.moreInformation")}
                </SolidButton>
              </motion.div>
              <motion.div className={styles.start} variants={welcomeItem}>
                <SolidButton
                  size="large"
                  variant="primary"
                  onClick={() => setPersonal(true)}
                >
                  {t("ui.library.createLibrary")}
                </SolidButton>
                <SolidButton
                  iconRight={<CaretRightIcon weight="bold" />}
                  size="large"
                  variant="ghost"
                  onClick={completeSetup}
                >
                  {t("ui.library.startWithoutSetup")}
                </SolidButton>
              </motion.div>
              <WelcomeQuestPreviews
                offers={previewOffers}
                reduceMotion={reduceMotion}
              />
            </motion.div>
          )}
        </LibraryStep>
      </AnimatePresence>
      <FullscreenDialog
        closeLabel={t("ui.library.closeInformation")}
        label={t("ui.about.title")}
        onOpenChange={setInformationOpen}
        open={informationOpen}
        reduceMotion={reduceMotion}
        triggerRef={informationTriggerRef}
      >
        <AboutPanel reduceMotion={reduceMotion} />
      </FullscreenDialog>
    </section>
  );
}

function nextThemeChoice(choice: ThemeChoice): ThemeChoice {
  if (choice === "auto") return "light";
  return choice === "light" ? "dark" : "auto";
}

function capitalize(value: string) {
  return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
}
