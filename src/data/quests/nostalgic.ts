import { defineMoodQuests } from "./defineMoodQuests";

export const nostalgicQuests = defineMoodQuests("nostalgic", [
  {
    id: "childhood-save",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 20,
    genres: ["Retro", "Story"],
    translations: {
      en: {
        name: "Childhood Save",
        objective:
          "Open a game you played often as a child and continue any save you can still access. Reach **one new checkpoint** without looking up what you used to do next.",
      },
      de: {
        name: "Kindheitsspielstand",
        objective:
          "Öffne ein Spiel, das du als Kind oft gespielt hast, und setze einen noch erreichbaren Spielstand fort. Erreiche **einen neuen Speicherpunkt**, ohne den nächsten Schritt nachzuschlagen.",
      },
    },
  },
  {
    id: "first-console",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 15,
    genres: ["Retro", "Platformer"],
    translations: {
      en: {
        name: "First Console",
        objective:
          "Choose a game from the earliest console or device you remember using. Start from its beginning and finish **the first level, race, or match**.",
      },
      de: {
        name: "Erste Konsole",
        objective:
          "Nimm ein Spiel von der frühesten Konsole oder dem ersten Gerät, an das du dich erinnerst. Starte von vorn und beende **das erste Level, Rennen oder Match**.",
      },
    },
  },
  {
    id: "classic-route",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 15,
    genres: ["Racing", "Retro"],
    translations: {
      en: {
        name: "Classic Route",
        objective:
          "Open an older racing game with a track you remember. Drive **one full race** using the car or vehicle you chose most often back then.",
      },
      de: {
        name: "Klassische Strecke",
        objective:
          "Öffne ein älteres Rennspiel mit einer Strecke, an die du dich erinnerst. Fahre **ein vollständiges Rennen** mit dem Fahrzeug, das du damals am häufigsten gewählt hast.",
      },
    },
  },
  {
    id: "old-high-score",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 20,
    genres: ["Arcade", "Retro"],
    translations: {
      en: {
        name: "Old High Score",
        objective:
          "Return to an arcade-style game whose scoring you still understand. Make **three complete attempts** and keep the best score without restarting a weak run.",
      },
      de: {
        name: "Alter Highscore",
        objective:
          "Kehre zu einem Arcade-Spiel zurück, dessen Punkte du noch verstehst. Spiele **drei vollständige Versuche** und behalte das beste Ergebnis, ohne einen schwachen Lauf neu zu starten.",
      },
    },
  },
  {
    id: "the-movie-years",
    minimumDurationMinutes: 8,
    suggestedDurationMinutes: 25,
    genres: ["Story", "Adventure"],
    translations: {
      en: {
        name: "The Movie Years",
        objective:
          "Choose a game that takes place in **the same time period as a movie you have watched**. Complete one scene, mission, or chapter that could belong beside that movie.",
      },
      de: {
        name: "Wie im Film",
        objective:
          "Nimm ein Spiel, das **zur selben Zeit wie ein Film spielt, den du gesehen hast**. Beende eine Szene, Mission oder ein Kapitel, das neben diesen Film passen könnte.",
      },
    },
  },
  {
    id: "back-then",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 20,
    genres: ["Multiplayer", "Retro"],
    translations: {
      en: {
        name: "Back Then",
        objective:
          "Open a game tied to a person you used to play with, even if you play alone today. Recreate **one mode, map, or rule set** you both chose and finish one round.",
      },
      de: {
        name: "Wie damals",
        objective:
          "Öffne ein Spiel, das du mit einer bestimmten Person verbindest, auch wenn du heute allein spielst. Stelle **einen damaligen Modus, eine Karte oder Regel** nach und beende eine Runde.",
      },
    },
  },
  {
    id: "screenshot-return",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 20,
    genres: ["Open World", "Adventure"],
    translations: {
      en: {
        name: "Screenshot Return",
        objective:
          "Choose **the oldest saved screenshot from a game you can still launch**. Return to the place shown, match the old camera angle, and **capture a new screenshot from the same spot**.",
      },
      de: {
        name: "Zurück zum Foto",
        objective:
          "Nimm **den ältesten gespeicherten Screenshot aus einem Spiel, das du noch starten kannst**. Such den gezeigten Ort, stell denselben Blickwinkel nach und **mach dort einen neuen Screenshot**.",
      },
    },
  },
  {
    id: "series-beginning",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 20,
    genres: ["Retro", "Adventure"],
    translations: {
      en: {
        name: "Series Beginning",
        objective:
          "Pick **the oldest installed entry from a series you still play**. Start a new save with the defaults and finish **its opening level, mission, or match**.",
      },
      de: {
        name: "Anfang der Reihe",
        objective:
          "Nimm **den ältesten installierten Teil einer Reihe, die du noch spielst**. Starte mit den Vorgaben einen neuen Spielstand und beende **das erste Level, die erste Mission oder das erste Match**.",
      },
    },
  },
  {
    id: "old-main",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 20,
    genres: ["Fighting", "Multiplayer"],
    translations: {
      en: {
        name: "Old Main",
        objective:
          "Open a **roster game you played often years ago** and choose the character, team, or vehicle you used most back then. Finish **three rounds without switching away**.",
      },
      de: {
        name: "Alter Main",
        objective:
          "Starte ein früher oft gespieltes **Spiel mit Figuren-, Team- oder Fahrzeugauswahl** und nimm deine damalige Wahl. Beende **drei Runden ohne Wechsel**.",
      },
    },
  },
  {
    id: "remaster-reunion",
    minimumDurationMinutes: 8,
    suggestedDurationMinutes: 25,
    genres: ["Adventure"],
    translations: {
      en: {
        name: "Remaster Reunion",
        objective:
          "Choose a **remake or remaster of a game whose original you finished**. Start from the beginning with default settings and reach **the first checkpoint or completed scene**.",
      },
      de: {
        name: "Wiedersehen im Remaster",
        objective:
          "Nimm das **Remake oder Remaster eines Spiels, dessen Original du beendet hast**. Starte mit den Vorgaben von vorn und erreiche **den ersten Speicherpunkt oder das Ende der ersten Szene**.",
      },
    },
  },
  {
    id: "old-cheat-code",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 20,
    genres: ["Retro", "Arcade"],
    translations: {
      en: {
        name: "Old Cheat Code",
        objective:
          "Open a **game from childhood with a cheat or modifier you still remember**. Enable that option, start the first available level, and **finish the level with the cheat active**.",
      },
      de: {
        name: "Alter Cheatcode",
        objective:
          "Starte ein **Spiel aus deiner Kindheit mit einem Cheat oder Modifikator, den du noch kennst**. Aktiviere ihn, nimm das erste verfügbare Level und **spiele es mit dem Cheat zu Ende**.",
      },
    },
  },
]);
