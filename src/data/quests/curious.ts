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
          "Nimm ein installiertes Spiel, das du noch nie geöffnet hast. Starte mit den Vorgaben und spiele bis zum **ersten echten Speicherpunkt oder abgeschlossenen Ziel**, dann höre vor dem nächsten auf.",
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
          "Nimm ein Spiel aus **derselben historischen Epoche wie ein Film oder eine Serie, die du gesehen hast**. Beende eine Mission oder Szene und vergleiche ein unterschiedlich dargestelltes Detail.",
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
        name: "Seltenste Figur",
        objective:
          "Öffne ein Spiel mit Figuren-Auswahl und nimm die von dir am seltensten gespielte Figur. Beende mit ihr **drei Runden oder eine Mission**, ohne zu wechseln.",
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
          "In **{{game}}**, open the nearest unread lore entry. Follow **one person, place, or event** through three linked entries and stop after the third.",
      },
      de: {
        name: "Der Geschichte folgen",
        objective:
          "Öffne ein Spiel mit Kodex, Journal oder Archiv und lies **drei zusammengehörige Einträge**. Besuche danach im Spiel einen darin erwähnten Ort, Menschen oder Gegenstand.",
        gameObjective:
          "\u00D6ffne in **{{game}}** den n\u00E4chsten ungelesenen Lore-Eintrag. Folge **einer Person, einem Ort oder Ereignis** durch drei verkn\u00FCpfte Eintr\u00E4ge und h\u00F6re nach dem dritten auf.",
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
          "Nimm ein **Spiel mit Entwicklerkommentar und wiederholbaren Leveln**. Schalte den Kommentar ein, starte das erste Level mit ungehörten Markierungen, löse alle aus und **beende das Level mit aktivem Kommentar**.",
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
          "Starte ein vertrautes **Strategie- oder Simulationsspiel mit optionalen Fortgeschrittenen-Tutorials**. Nimm die erste offene Lektion, behalte alle Vorgaben und **spiele sie bis zum Erfolgsbildschirm**.",
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
          "Starte ein **Spiel mit eingebautem Mod-Workshop und direktem Start**. Installiere den obersten vorgestellten Mod, den du noch nicht kennst, starte mit den Vorgaben und **beende sein erstes Level oder Ziel**.",
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
          "Nimm eine **Simulation mit zurücksetzbarem Szenario, Zahlenwerten und Ergebnis**. Starte mit den Vorgaben, verdopple danach den ersten Wert, der sich verdoppeln lässt, starte erneut und **vergleiche beide Ergebnisse**.",
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
