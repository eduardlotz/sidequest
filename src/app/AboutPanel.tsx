import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { Drawer } from "vaul";
import { WordmarkLogo } from "../assets/wordmark";
import { useTiltEffect } from "../hooks/useTiltEffect";
import styles from "./AboutPanel.module.css";

type Props = {
  reduceMotion: boolean;
};

export function AboutPanel({ reduceMotion }: Props) {
  const { t } = useTranslation();
  const {
    handlePointerEnter,
    handlePointerLeave,
    handlePointerMove,
    rotateX,
    rotateY,
  } = useTiltEffect({ maxGlare: 0, maxTilt: 14, reduceMotion });

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
          <h3>{t("ui.about.libraryHeading")}</h3>
          <p>{t("ui.about.libraryBody")}</p>
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
        <motion.span
          aria-hidden="true"
          className={styles.aboutWordmarkTilt}
          initial="rest"
          animate="rest"
          whileHover="hover"
          onPointerEnter={handlePointerEnter}
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
        >
          <motion.span
            className={styles.aboutWordmarkVisual}
            style={{ rotateX, rotateY, transformPerspective: 600 }}
            variants={{
              rest: { scale: 1 },
              hover: { scale: 1.05 },
            }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : { type: "spring", stiffness: 280, damping: 23, mass: 0.7 }
            }
          >
            <WordmarkLogo width={80} />
          </motion.span>
        </motion.span>
      </footer>
    </section>
  );
}
