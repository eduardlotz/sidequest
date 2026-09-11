import type { AuthoredQuestDefinition } from "../questTypes";

export const curiousQuests = [
  {
    "id": "genre-swap",
    "moodIds": [
      "curious"
    ],
    "type": "inspiration",
    "tags": [
      "first-play"
    ],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 20,
    "genres": [],
    "translations": {
      "en": {
        "name": "A Different Genre",
        "objective": "Open an **installed game from a genre you rarely play**. Start with its introduction and follow the parts that feel unfamiliar, without needing to get good at it today."
      },
      "de": {
        "name": "Ein anderes Genre",
        "objective": "Starte ein **installiertes Spiel aus einem Genre, das du selten spielst**. Fang mit der Einführung an und probiere aus, was dir ungewohnt vorkommt. Du musst heute noch nicht gut darin werden."
      }
    }
  },
  {
    "id": "same-era",
    "moodIds": [
      "curious"
    ],
    "type": "inspiration",
    "tags": [
      "story"
    ],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 20,
    "genres": [],
    "translations": {
      "en": {
        "name": "The Same Era",
        "objective": "Choose a **historical game set in the era of a film or series you recently watched**. Explore how the game portrays its streets, clothing, and daily life while you play."
      },
      "de": {
        "name": "Dieselbe Epoche",
        "objective": "Nimm ein **historisches Spiel aus der Zeit eines Films oder einer Serie, die du kürzlich gesehen hast**. Achte beim Spielen darauf, wie Straßen, Kleidung und Alltag dargestellt werden."
      }
    }
  },
  {
    "id": "least-used-character",
    "moodIds": [
      "curious"
    ],
    "type": "experiment",
    "tags": [
      "new-approach",
      "one-round"
    ],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "genres": [],
    "translations": {
      "en": {
        "name": "Someone New",
        "objective": "Open a **roster game with short rounds**. Choose an unlocked character you have not played, read their abilities, and **use one unfamiliar ability during a complete round**."
      },
      "de": {
        "name": "Jemand Neues",
        "objective": "Starte ein **Spiel mit Figurenwahl und kurzen Runden**. Nimm eine freigeschaltete Figur, die du noch nicht gespielt hast, lies ihre Fähigkeiten und **setze eine unbekannte Fähigkeit in einer vollständigen Runde ein**."
      }
    }
  },
  {
    "id": "one-variable",
    "moodIds": [
      "curious"
    ],
    "type": "experiment",
    "tags": [
      "new-approach"
    ],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 20,
    "genres": [],
    "translations": {
      "en": {
        "name": "Change One Variable",
        "objective": "Choose a **simulation with a short resettable scenario and result screen**. Run it once, change one available setting, then **replay the same scenario and compare the results**. Keep the other settings unchanged."
      },
      "de": {
        "name": "Eine Variable ändern",
        "objective": "Nimm eine **Simulation mit einem kurzen wiederholbaren Szenario und Ergebnisanzeige**. Spiele es einmal, ändere eine Einstellung und **wiederhole dasselbe Szenario, um die Ergebnisse zu vergleichen**. Lass die übrigen Einstellungen gleich."
      }
    }
  }
] satisfies readonly AuthoredQuestDefinition[];
