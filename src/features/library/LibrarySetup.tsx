import {
  useCallback,
  useEffect,
  useLayoutEffect,
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
import { CaretRightIcon } from "@phosphor-icons/react/dist/csr/CaretRight";
import { XIcon } from "@phosphor-icons/react/dist/csr/X";

import { SolidButton } from "../../shared/ui/SolidButton/SolidButton";
import { useLibraryStore } from "../../stores/useLibraryStore";
import { LibraryCollectionEditor } from "./components/LibraryCollectionEditor/LibraryCollectionEditor";
import { LibraryStep } from "./components/LibraryStep";
import { AboutPanel } from "../../app/AboutPanel";
import { QuestCard } from "../../shared/quest-card/QuestCard/QuestCard";
import { localizeQuest } from "../../localization/catalog";
import { normalizeLanguage } from "../../localization/i18n";
import styles from "./LibrarySetup.module.css";
import flowStyles from "./components/LibraryFlowElements.module.css";
import { WordmarkSkewedLogo } from "../../assets/wordmark-skewed";
import { TiltedElement } from "../../shared/ui/TiltedElement/TiltedElement";
import { useCardFocus } from "../../shared/hooks/useCardFocus";
import { CardFocusBackdrop } from "../../shared/ui/CardFocusBackdrop/CardFocusBackdrop";
import type { ThemeChoice } from "../../lib/theme";
import { ChevronLeftIcon, ContrastIcon } from "../../shared/ui/Icons/Icons";

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
  const setupRef = useRef<HTMLElement>(null);
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
  const resetInformationScroll = useCallback(() => {
    window.requestAnimationFrame(() => {
      const node = scrollRef.current;
      if (!node) return;
      node.scrollTop = 0;
      setEdges({
        top: false,
        bottom: node.scrollHeight - node.clientHeight > 8,
      });
    });
  }, []);

  useLayoutEffect(() => {
    setupRef.current?.scrollTo({ top: 0 });
  }, [personal]);

  useEffect(() => {
    if (!informationOpen) return;
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") closeInformation();
    }
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [closeInformation, informationOpen]);

  useEffect(() => {
    if (!informationOpen || !scrollRef.current) return;
    const node = scrollRef.current;
    const update = () => {
      const top = Math.max(0, node.scrollTop);
      const bottom = node.scrollHeight - node.clientHeight - top > 8;
      setEdges((previous) =>
        previous.top === top > 8 && previous.bottom === bottom
          ? previous
          : { top: top > 8, bottom },
      );
    };
    const resize = new ResizeObserver(update);
    resize.observe(node);
    if (node.firstElementChild) resize.observe(node.firstElementChild);
    node.addEventListener("scroll", update, { passive: true });
    update();
    return () => {
      resize.disconnect();
      node.removeEventListener("scroll", update);
    };
  }, [informationOpen]);

  return (
    <section
      className={`${flowStyles.elements} ${styles.setup}`}
      data-presentation="page"
      ref={setupRef}
      aria-label={t("ui.library.personalTitle")}
    >
      <AnimatePresence mode="wait" initial={false}>
        <LibraryStep key={personal ? "library" : "welcome"}>
          {personal ? (
            <LibraryCollectionEditor
              title={t("ui.library.overviewIntro")}
              footer={
                <>
                  <SolidButton size="large" variant="primary" onClick={completeSetup}>
                    {t("ui.library.finishSetup")}
                  </SolidButton>
                  <SolidButton
                    size="large"
                    variant="ghost"
                    iconLeft={<ChevronLeftIcon />}
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
                <SolidButton
                  ref={informationTriggerRef}
                  iconLeft={<InfoIcon weight="bold" />}
                  size="medium"
                  variant="soft"
                  onClick={() => setInformationOpen(true)}
                >
                  {t("ui.library.moreInformation")}
                </SolidButton>
                <SolidButton
                  iconLeft={<GlobeIcon weight="bold" />}
                  size="medium"
                  variant="soft"
                  onClick={() =>
                    void i18n.changeLanguage(language === "en" ? "de" : "en")
                  }
                >
                  {t("ui.library.changeLanguage")}
                </SolidButton>
                <SolidButton
                  aria-label={t("ui.library.changeThemeTo", {
                    theme: t(`ui.profile.theme${capitalize(nextTheme)}`),
                  })}
                  iconLeft={<ContrastIcon />}
                  size="medium"
                  variant="soft"
                  onClick={() => onThemeChange(nextTheme)}
                >
                  {t("ui.library.changeTheme")}
                </SolidButton>
              </div>
              <div className={styles.start}>
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
            <SolidButton
              autoFocus
              className={styles.informationClose}
              aria-label={t("ui.library.closeInformation")}
              iconLeft={<XIcon weight="bold" />}
              size="medium"
              variant="soft"
              onClick={closeInformation}
            />
            <motion.div
              className={styles.scroll}
              ref={scrollRef}
              initial={false}
              animate={{
                "--fade-top": edges.top ? "48px" : "0px",
                "--fade-bottom": edges.bottom ? "64px" : "0px",
              }}
              transition={transition}
            >
              <AboutPanel
                presentation="page"
                reduceMotion={reduceMotion}
                onPageChange={resetInformationScroll}
              />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
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

  return <span className={styles.previewCard}>{card}</span>;
}
