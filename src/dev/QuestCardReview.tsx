import { createRoot } from "react-dom/client";
import { useState } from "react";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import { AUTHORED_QUESTS } from "../data/quests/catalog";
import { CURATED_GAMES_BY_ID } from "../data/games";
import { getMoodAccentStyle } from "../data/questColors";
import { MOODS_BY_ID } from "../data/moods";
import { englishUi, germanUi, germanMoods } from "../localization/resources";
import { QuestCard } from "../shared/quest-card/QuestCard/QuestCard";
import cardStyles from "../shared/quest-card/QuestCard/QuestCard.module.css";
import "../styles/global.css";
import "./QuestCardReview.css";

// Independent review view: reads authored cards, never loads the player's stores
// or the app's language/theme persistence.
const reviewI18n = i18next.createInstance();
void reviewI18n.init({
  lng: "de", fallbackLng: "en", initAsync: false,
  resources: { en: { translation: { ui: englishUi } }, de: { translation: { ui: germanUi } } },
  interpolation: { escapeValue: false },
});
const reviewIds = ["three-fast-laps", "team-signals", "workshop-inspiration"];
const reviewOptions = new URLSearchParams(window.location.search);
const selectedIds = reviewOptions.get("quests")?.split(",") ?? reviewIds;
const reviewQuests = reviewOptions.get("catalog") === "all"
  ? AUTHORED_QUESTS
  : selectedIds.flatMap(id => AUTHORED_QUESTS.filter(quest => quest.id === id));
const showGame = reviewOptions.get("bound") === "1";

function Review() {
  const [language, setLanguage] = useState<"de" | "en">("de");
  function changeLanguage(next: "de" | "en") {
    void reviewI18n.changeLanguage(next);
    document.documentElement.lang = next;
    setLanguage(next);
  }
  return <I18nextProvider i18n={reviewI18n}>
    <main className="quest-review">
      <header className="quest-review-header">
        <div><p>Sidequest</p><h1>{language === "de" ? "Quest-Karten · Entwurf" : "Quest cards · Draft"}</h1></div>
        <nav aria-label="Language"><button aria-pressed={language === "de"} onClick={() => changeLanguage("de")}>DE</button><button aria-pressed={language === "en"} onClick={() => changeLanguage("en")}>EN</button></nav>
      </header>
      <div className="quest-review-cards">
        {reviewQuests.map(quest => {
          const moodId = quest.moodIds[0];
          const copy = quest.translations[language];
          const moodTitle = language === "de" ? germanMoods[moodId].title : MOODS_BY_ID[moodId].title;
          const curatedGame = showGame && quest.curated ? CURATED_GAMES_BY_ID[quest.curated.gameId] : null;
          const game = curatedGame ? { id: curatedGame.id, name: curatedGame.name, source: "curated" as const } : null;
          const objective = game ? (copy.gameObjective ?? copy.objective).replaceAll("{{game}}", game.name) : copy.objective;
          return <article className={cardStyles.questCardFrame} style={getMoodAccentStyle(moodId)} key={quest.id} data-quest-id={quest.id} aria-label={copy.name}>
            <QuestCard {...quest} {...copy} objective={objective} game={game} moodTitle={moodTitle} />
          </article>;
        })}
      </div>
      <p className="quest-review-note">{language === "de" ? "Spielkontext & Genre · Aktivitäten, Regeln & Voraussetzungen" : "Play context & genre · Activities, rules & prerequisites"}</p>
    </main>
  </I18nextProvider>;
}

createRoot(document.getElementById("root")!).render(<Review />);
