import { useTranslation } from "react-i18next";
import { Drawer } from "vaul";
import { WordmarkLogo } from "../assets/wordmark";
import styles from "../App.module.css";

export function AboutPanel() {
  const { t } = useTranslation();

  return (
    <section className={styles.aboutContent} aria-labelledby="about-title">
      <header className={styles.aboutIntro}>
        <Drawer.Title asChild>
          <h2 id="about-title">{t("ui.about.title")}</h2>
        </Drawer.Title>
        <Drawer.Description>{t("ui.about.description")}</Drawer.Description>
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
        <WordmarkLogo width={80} />
      </footer>
    </section>
  );
}
