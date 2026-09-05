import { defineMoodQuests } from "./defineMoodQuests";

export const curiousQuests = defineMoodQuests("curious", [
  {
    id: "strange-mechanic",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 20,
    genres: ["Puzzle", "Simulation"],
    translations: {
      en: {
        name: "Strange Mechanic",
        objective:
          "Open a game you own but do not know well and find one mechanic that surprises you. Use that **same mechanic five times** and notice what changes each time.",
      },
      de: {
        name: "Seltsame Mechanik",
        objective:
          "Öffne ein Spiel, das du besitzt, aber kaum kennst, und finde eine Mechanik, die dich überrascht. Nutze **dieselbe Mechanik fünfmal** und beobachte, was sich jeweils verändert.",
      },
    },
  },
  {
    id: "first-save",
    minimumDurationMinutes: 8,
    suggestedDurationMinutes: 25,
    genres: ["Indie", "Adventure"],
    translations: {
      en: {
        name: "First Save",
        objective:
          "Choose an installed game you have never opened. Start with its defaults and play until you reach **the first real save point or completed objective**, then stop before the next one.",
      },
      de: {
        name: "Erster Spielstand",
        objective:
          "Wähle ein installiertes Spiel, das du noch nie gestartet hast. Behalte die Voreinstellungen und spiele bis zum **ersten regulären Speicherpunkt oder abgeschlossenen Ziel**. Hör dort auf, bevor du weiterspielst.",
      },
    },
  },
  {
    id: "same-era",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 20,
    genres: ["Historical", "Story"],
    translations: {
      en: {
        name: "Same Era",
        objective:
          "Pick a game that takes place in **the same historical era as a film or series you watched**. Complete one mission or scene and compare one detail the two portray differently.",
      },
      de: {
        name: "Gleiche Epoche",
        objective:
          "Wähle ein Spiel, das in **derselben historischen Epoche spielt wie ein Film oder eine Serie, die du gesehen hast**. Beende eine Mission oder Szene und vergleiche ein Detail, das beide unterschiedlich darstellen.",
      },
    },
  },
  {
    id: "genre-swap",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 20,
    genres: ["Indie", "Strategy"],
    translations: {
      en: {
        name: "Genre Swap",
        objective:
          "Choose an installed game from a genre you rarely play. Finish **its tutorial and first challenge** without changing the default difficulty.",
      },
      de: {
        name: "Genrewechsel",
        objective:
          "Nimm ein installiertes Spiel aus einem Genre, das du selten spielst. Beende **sein Tutorial und die erste Herausforderung**, ohne den vorgegebenen Schwierigkeitsgrad zu ändern.",
      },
    },
  },
  {
    id: "least-used-character",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 20,
    genres: ["Roster", "Multiplayer"],
    translations: {
      en: {
        name: "Least-Used Character",
        objective:
          "Open a game with a roster and choose the character you have used least. Play **three complete rounds or one mission** without switching away from them.",
      },
      de: {
        name: "Selten gespielt",
        objective:
          "Starte ein Spiel mit Charakterauswahl und nimm die Figur, die du am seltensten spielst. Beende mit ihr **drei Runden oder eine Mission**, ohne sie zu wechseln.",
      },
    },
  },
  {
    id: "follow-the-lore",
    customGameCompatibility: { capabilityIds: ["choices-or-lore"] },
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 20,
    genres: ["Lore", "RPG"],
    translations: {
      en: {
        name: "Follow the Lore",
        objective:
          "Open a game with a codex, journal, or archive and read **three related entries**. Then visit one place, person, or object mentioned in them inside the game.",
        gameObjective:
          "In **{{game}}**, read or listen to three pieces of dialogue or lore. Follow **one person, place, or event** mentioned in them and note one connection.",
      },
      de: {
        name: "Der Geschichte folgen",
        objective:
          "Starte ein Spiel mit Kodex, Journal oder Archiv und lies **drei zusammengehörige Einträge**. Suche danach im Spiel einen Ort, eine Person oder einen Gegenstand auf, der darin erwähnt wird.",
        gameObjective:
          "Lies oder höre dir in **{{game}}** drei Dialoge oder Texte zur Spielwelt an. Geh den Hinweisen zu **einer darin erwähnten Person, einem Ort oder einem Ereignis** nach und merke dir einen Zusammenhang.",
      },
    },
  },
  {
    id: "developer-commentary",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 25,
    genres: ["Adventure"],
    translations: {
      en: {
        name: "Developer Commentary",
        objective:
          "Choose a **game with developer commentary and replayable levels**. Enable commentary, start the first level with unheard markers, trigger every marker, and **finish that level with commentary still on**.",
      },
      de: {
        name: "Entwicklerkommentar",
        objective:
          "Wähle ein **Spiel mit Entwicklerkommentar und wiederholbaren Leveln**. Schalte den Kommentar ein und starte das erste Level, in dem du noch nicht alle Kommentare gehört hast. Aktiviere dort jede Kommentarstelle und **beende das Level mit eingeschaltetem Kommentar**.",
      },
    },
  },
  {
    id: "skipped-lesson",
    minimumDurationMinutes: 3,
    suggestedDurationMinutes: 15,
    genres: ["Strategy", "Simulation"],
    translations: {
      en: {
        name: "Skipped Lesson",
        objective:
          "Open a familiar **strategy or simulation game with optional advanced tutorials**. Choose the first unfinished lesson, accept all defaults, and **complete the tutorial from start to success screen**.",
      },
      de: {
        name: "Übersprungene Lektion",
        objective:
          "Starte ein vertrautes **Strategie- oder Simulationsspiel mit optionalen Tutorials für Fortgeschrittene**. Nimm die erste noch nicht abgeschlossene Lektion, behalte alle Voreinstellungen und **spiele sie bis zum Erfolgsbildschirm**.",
      },
    },
  },
  {
    id: "workshop-pick",
    minimumDurationMinutes: 8,
    suggestedDurationMinutes: 25,
    genres: ["Sandbox", "Modding"],
    translations: {
      en: {
        name: "Workshop Pick",
        objective:
          "Open a **game with a built-in mod workshop and direct launch button**. Install the highest featured mod you have not tried, launch it with defaults, and **complete its first level or objective**.",
      },
      de: {
        name: "Aus dem Workshop",
        objective:
          "Starte ein **Spiel mit eingebautem Mod-Workshop und direkter Startfunktion**. Installiere die erste empfohlene Mod, die du noch nicht kennst, starte sie mit den Voreinstellungen und **beende ihr erstes Level oder Ziel**.",
      },
    },
  },
  {
    id: "one-variable",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 20,
    genres: ["Simulation", "Sandbox"],
    translations: {
      en: {
        name: "One Variable",
        objective:
          "Choose a **simulation with a resettable scenario, numeric settings, and results**. Run the defaults once, double the first value that allows it, run again, and **compare the two result screens**.",
      },
      de: {
        name: "Eine Variable",
        objective:
          "Wähle eine **Simulation mit wiederholbarem Szenario, einstellbaren Zahlenwerten und Ergebnisanzeige**. Lass das Szenario einmal mit den Voreinstellungen laufen. Verdopple dann den ersten Wert, bei dem das möglich ist, starte erneut und **vergleiche beide Ergebnisse**.",
      },
    },
  },
  {
    id: "accessibility-trial",
    minimumDurationMinutes: 3,
    suggestedDurationMinutes: 15,
    genres: [],
    translations: {
      en: {
        name: "Accessibility Trial",
        objective:
          "Open a **game with accessibility options and short replayable levels**. Enable the first listed feature you have never used, complete the first level, and **leave the option on until the result screen**.",
      },
      de: {
        name: "Neue Spielhilfe",
        objective:
          "Starte ein **Spiel mit Bedienungshilfen und kurzen wiederholbaren Leveln**. Aktiviere die erste gelistete Hilfe, die du noch nie genutzt hast, beende das erste Level und **lass sie bis zum Ergebnis eingeschaltet**.",
      },
    },
  },
]);
