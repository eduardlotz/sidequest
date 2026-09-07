import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Drawer } from "vaul";
import { WordmarkLogo } from "../assets/wordmark";
import { ResponsiveNestedDrawer } from "../shared/ui/ResponsiveDrawer/ResponsiveDrawer";
import { TiltedElement } from "../shared/ui/TiltedElement/TiltedElement";
import { QuestSourcesPanel } from "./QuestSourcesPanel";
import styles from "./AboutPanel.module.css";

type Props = {
  presentation?: "drawer" | "page";
  reduceMotion: boolean;
};

export function AboutPanel({ presentation = "drawer", reduceMotion }: Props) {
  const { t } = useTranslation();
  const [sourcesOpen, setSourcesOpen] = useState(false);

  if (presentation === "page" && sourcesOpen) {
    return (
      <QuestSourcesPanel
        presentation="page"
        onBack={() => setSourcesOpen(false)}
      />
    );
  }

  const title = <h2 id="about-title">{t("ui.about.title")}</h2>;
  const description = <p>{t("ui.about.description")}</p>;

  return (
    <section
      className={styles.aboutContent}
      data-presentation={presentation}
      aria-labelledby="about-title"
    >
      <header className={styles.aboutIntro}>
        {presentation === "drawer" ? (
          <>
            <Drawer.Title asChild>{title}</Drawer.Title>
            <Drawer.Description asChild>{description}</Drawer.Description>
          </>
        ) : (
          <>
            {title}
            {description}
          </>
        )}
      </header>

      <div className={styles.aboutBody}>
        <section className={styles.aboutSection}>
          <h3>{t("ui.about.stepsHeading")}</h3>
          <ol className={styles.aboutSteps}>
            <li>{t("ui.about.step1")}</li>
            <li>{t("ui.about.step2")}</li>
            <li>{t("ui.about.step3")}</li>
          </ol>
        </section>

        <section className={styles.aboutSection}>
          <h3>{t("ui.about.mismatchHeading")}</h3>
          <p>{t("ui.about.mismatchBody")}</p>
          <p>{t("ui.about.difficultyBody")}</p>
        </section>

        <section className={styles.aboutSection}>
          <h3>{t("ui.about.libraryHeading")}</h3>
          <p>{t("ui.about.libraryBody")}</p>
          <p>{t("ui.about.libraryChoice")}</p>
        </section>

        <section className={styles.aboutSection}>
          <h3>{t("ui.about.sourcesHeading")}</h3>
          <p>{t("ui.about.sourcesBody")}</p>
          {presentation === "drawer" ? (
            <ResponsiveNestedDrawer
              variant="about"
              trigger={
                <button type="button" className={styles.sourcesButton}>
                  {t("ui.about.sourcesButton")}
                </button>
              }
            >
              <QuestSourcesPanel />
            </ResponsiveNestedDrawer>
          ) : (
            <button
              type="button"
              className={styles.sourcesButton}
              onClick={() => setSourcesOpen(true)}
            >
              {t("ui.about.sourcesButton")}
            </button>
          )}
        </section>

        <section className={styles.aboutSection}>
          <h3>{t("ui.about.coinsHeading")}</h3>
          <p>{t("ui.about.coinEarning")}</p>
          <p>{t("ui.about.coinSpending")}</p>
        </section>
      </div>

      <footer className={styles.aboutCredit}>
        <span>
          {t("ui.about.madeBy")}{" "}
          <a href="https://eduardlotz.de" rel="noreferrer" target="_blank">
            Eduard Lotz
          </a>
        </span>
        <TiltedElement
          className={styles.aboutWordmarkTilt}
          innerClassName={styles.aboutWordmarkVisual}
          reduceMotion={reduceMotion}
        >
          <WordmarkLogo width={80} />
        </TiltedElement>
      </footer>
    </section>
  );
}
