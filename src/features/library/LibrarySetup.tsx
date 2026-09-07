import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useTranslation } from "react-i18next";
import { CircleHalfTiltIcon } from "@phosphor-icons/react/dist/csr/CircleHalfTilt";
import { GlobeIcon } from "@phosphor-icons/react/dist/csr/Globe";
import { InfoIcon } from "@phosphor-icons/react/dist/csr/Info";
import { XIcon } from "@phosphor-icons/react/dist/csr/X";

import { SolidButton } from "../../shared/ui/SolidButton/SolidButton";
import { PillButton } from "../../shared/ui/PillButton/PillButton";
import { useLibraryStore } from "../../stores/useLibraryStore";
import { LibraryCollectionEditor } from "./components/LibraryCollectionEditor/LibraryCollectionEditor";
import { LibraryStep } from "./components/LibraryStep";
import { AboutPanel } from "../../app/AboutPanel";
import { QuestCard } from "../../shared/quest-card/QuestCard/QuestCard";
import { localizeQuest } from "../../localization/catalog";
import { normalizeLanguage } from "../../localization/i18n";
import styles from "./LibrarySetup.module.css";
import { WordmarkSkewedLogo } from "../../assets/wordmark-skewed";
import { TiltedElement } from "../../shared/ui/TiltedElement/TiltedElement";
import { useCardFocus } from "../../shared/hooks/useCardFocus";
import { CardFocusBackdrop } from "../../shared/ui/CardFocusBackdrop/CardFocusBackdrop";
import type { ThemeChoice } from "../../lib/theme";

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
  const [informationOpen, setInformationOpen] = useState(false);
  const informationTriggerRef = useRef<HTMLButtonElement>(null);
  const [edges, setEdges] = useState({ top: false, bottom: false });
  const scrollRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const transition = { duration: reduced ? 0 : 0.2, ease: "easeOut" as const };

  const completeSetup = useLibraryStore((s) => s.completeSetup);
  const language = normalizeLanguage(i18n.resolvedLanguage ?? i18n.language);
  const previews = [
    localizeQuest("minecraft-village-payday", language),
    localizeQuest("a-little-walk", language),
  ].filter((q) => q !== null && q !== undefined);
  const nextTheme = nextThemeChoice(themeChoice);
  const closeInformation = useCallback(() => {
    setInformationOpen(false);
    window.requestAnimationFrame(() => informationTriggerRef.current?.focus());
  }, []);

  useEffect(() => {
    if (!informationOpen) return;
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") closeInformation();
    }
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [closeInformation, informationOpen]);

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
                  <SolidButton variant="primary" onClick={completeSetup}>
                    {t("ui.library.finishSetup")}
                  </SolidButton>
                  <SolidButton
                    variant="flat"
                    onClick={() => setPersonal(false)}
                  >
                    {t("ui.library.back")}
                  </SolidButton>
                </>
              }
            />
          ) : (
            <div
              className={styles.welcome}
              aria-hidden={informationOpen || undefined}
              inert={informationOpen || undefined}
            >
              <h1>{t("ui.library.welcome")}</h1>
              <div className={styles.wordmark} aria-label="sidesidequest">
                <TiltedElement>
                  <WordmarkSkewedLogo width={260} />
                </TiltedElement>
              </div>
              <p>{t("ui.library.welcomeDescription")}</p>
              <div className={styles.links}>
                <PillButton
                  ref={informationTriggerRef}
                  onClick={() => setInformationOpen(true)}
                >
                  <InfoIcon weight="bold" />
                  {t("ui.library.moreInformation")}
                </PillButton>
                <PillButton
                  onClick={() =>
                    void i18n.changeLanguage(language === "en" ? "de" : "en")
                  }
                >
                  <GlobeIcon weight="bold" />
                  {t("ui.library.changeLanguage")}
                </PillButton>
                <PillButton
                  aria-label={t("ui.library.changeThemeTo", {
                    theme: t(`ui.profile.theme${capitalize(nextTheme)}`),
                  })}
                  onClick={() => onThemeChange(nextTheme)}
                >
                  <CircleHalfTiltIcon weight="fill" />
                  {t("ui.library.changeTheme")}
                </PillButton>
              </div>
              <div className={styles.start}>
                <SolidButton
                  variant="primary"
                  onClick={() => setPersonal(true)}
                >
                  {t("ui.library.createLibrary")}
                </SolidButton>
                <SolidButton variant="flat" onClick={completeSetup}>
                  {t("ui.library.startWithoutSetup")} ›
                </SolidButton>
              </div>
              <div className={styles.previews}>
                {previews.map((q, index) => (
                  <PreviewQuestCard
                    index={index}
                    key={q.id}
                    quest={q}
                    reduceMotion={reduceMotion}
                  />
                ))}
              </div>
            </div>
          )}
        </LibraryStep>
      </AnimatePresence>
      <AnimatePresence initial={false}>
        {informationOpen ? (
          <motion.div
            className={styles.informationPage}
            role="dialog"
            aria-modal="true"
            aria-label={t("ui.about.title")}
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
            transition={{
              duration: reduceMotion ? 0 : 0.22,
              ease: "easeOut",
            }}
          >
            <button
              autoFocus
              className={styles.informationClose}
              type="button"
              aria-label={t("ui.library.closeInformation")}
              onClick={closeInformation}
            >
              <XIcon weight="bold" />
            </button>
            <motion.div
              className={styles.scroll}
              ref={scrollRef}
              initial={false}
              animate={{
                "--fade-top": "48px",
                "--fade-bottom": "64px",
              }}
              transition={transition}
            >
              <AboutPanel presentation="page" reduceMotion={reduceMotion} />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}

type PreviewQuest = NonNullable<ReturnType<typeof localizeQuest>>;

function PreviewQuestCard({
  index,
  quest,
  reduceMotion,
}: {
  index: number;
  quest: PreviewQuest;
  reduceMotion: boolean;
}) {
  const { t } = useTranslation();
  const focus = useCardFocus();
  const game =
    index === 0
      ? { id: "minecraft", name: "Minecraft", source: "curated" as const }
      : null;
  const accent =
    index === 0
      ? { color: "#55eadc", rgb: "85 234 220" }
      : { color: "#c38cff", rgb: "195 140 255" };

  const card = (
    <motion.span
      className={styles.previewProjection}
      drag={focus.focused}
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.5}
      dragMomentum={false}
      onDragEnd={focus.dismissFromDrag}
      whileDrag={{ scale: reduceMotion ? 1 : 1.018 }}
    >
      <TiltedElement
        ariaHidden={false}
        className={styles.previewTilt}
        innerClassName={styles.previewTiltInner}
        hoverScale={1.012}
        maxGlare={0.34}
        maxTilt={16}
        perspective={1_000}
        reduceMotion={reduceMotion || focus.focused}
      >
        <QuestCard
          game={game}
          genres={quest.genres}
          minimumDurationMinutes={quest.minimumDurationMinutes}
          suggestedDurationMinutes={quest.suggestedDurationMinutes}
          moodTitle={t("ui.library.previewRelax")}
          name={quest.name}
          objective={quest.objective}
          style={
            {
              "--accent": accent.color,
              "--accent-rgb": accent.rgb,
            } as CSSProperties
          }
        />
      </TiltedElement>
    </motion.span>
  );

  return (
    <span className={styles.previewCard}>
      {!focus.focused ? card : null}
      {focus.focused
        ? createPortal(
            <span className={styles.previewFocusPortal}>
              <CardFocusBackdrop
                label={t("ui.quest.closeFocusedCard")}
                onClose={focus.close}
                ref={focus.backdropRef}
                variant="dim"
              />
              <span className={styles.previewCard} data-focused>
                {card}
              </span>
            </span>,
            document.body,
          )
        : null}
    </span>
  );
}

function nextThemeChoice(choice: ThemeChoice): ThemeChoice {
  if (choice === "auto") return "light";
  return choice === "light" ? "dark" : "auto";
}

function capitalize(value: string) {
  return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
}
