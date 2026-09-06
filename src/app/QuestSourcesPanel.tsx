import { useTranslation } from "react-i18next";
import { Drawer } from "vaul";
import { CURATED_GAMES } from "../data/games";
import { QUEST_CATALOG } from "../data/quests";
import { QUEST_SOURCES } from "../data/questSources";
import { ChevronLeftIcon } from "../shared/ui/Icons/Icons";
import styles from "./AboutPanel.module.css";

export function QuestSourcesPanel() {
  const { t, i18n } = useTranslation();
  const language = i18n.resolvedLanguage?.startsWith("de") ? "de" : "en";
  return (
    <section className={styles.aboutContent} aria-labelledby="quest-sources-title">
      <header className={styles.aboutIntro}>
        <Drawer.Close asChild>
          <button className={styles.sourcesButton} type="button">
            <ChevronLeftIcon />{t("ui.about.sourcesBack")}
          </button>
        </Drawer.Close>
        <Drawer.Title asChild><h2 id="quest-sources-title">{t("ui.about.sourcesTitle")}</h2></Drawer.Title>
        <Drawer.Description>{t("ui.about.sourcesDescription")}</Drawer.Description>
      </header>
      <div className={styles.aboutBody}>
        <p className={styles.sourcesHint}>{t("ui.about.sourcesLinkHint")}</p>
        {CURATED_GAMES.map((game) => {
          const sources = QUEST_SOURCES.filter((source) => source.gameId === game.id);
          if (!sources.length) return null;
          return (
            <section className={styles.aboutSection} key={game.id}>
              <h3>{game.name}</h3>
              <ul className={styles.sourcesList}>
                {sources.map((source) => {
                  const quests = QUEST_CATALOG.filter((quest) => quest.curated?.sourceIds.includes(source.id));
                  return (
                    <li key={source.id}>
                      <span className={styles.sourceScope}>r/{source.subreddit} · {source.scope}</span>
                      <a href={source.url} target="_blank" rel="noopener noreferrer"
                        aria-label={`${t("ui.about.sourcesOpen")}: ${source.title}`}>{source.title}</a>
                      <p>{source.note[language]}</p>
                      <span className={styles.sourcesHint}>
                        {quests.length ? `${t("ui.about.sourcesQuestNames")}: ${quests.map((quest) => quest.translations[language].name).join(", ")}` : t("ui.about.sourcesResearchOnly")}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}
      </div>
    </section>
  );
}
