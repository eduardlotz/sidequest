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
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 15,
    "genres": [],
    "translations": {
      "en": {
        "name": "A Different Genre",
        "objective": "Open **an installed game from an unfamiliar genre**. Start its introduction and **try what feels new**. You do not need to master it today."
      },
      "de": {
        "name": "Ein anderes Genre",
        "objective": "Starte **ein installiertes Spiel aus einem ungewohnten Genre**. Beginne mit der Einführung und **probiere Neues aus**. Du musst es heute noch nicht meistern."
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
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 15,
    "genres": [],
    "translations": {
      "en": {
        "name": "The Same Era",
        "objective": "Choose **a historical game** from the era of a film or series you watched recently. **Explore its streets, clothing, and daily life**."
      },
      "de": {
        "name": "Dieselbe Epoche",
        "objective": "Wähle **ein historisches Spiel** aus der Zeit eines kürzlich gesehenen Films oder einer Serie. **Erkunde seine Straßen, Kleidung und den Alltag**."
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
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 15,
    "genres": [],
    "translations": {
      "en": {
        "name": "Someone New",
        "objective": "Open **a character-based game with short rounds**. Pick an unplayed, unlocked character and read their abilities. **Use an unfamiliar ability and finish the round**."
      },
      "de": {
        "name": "Jemand Neues",
        "objective": "Starte **ein Spiel mit Figurenwahl und kurzen Runden**. Wähle eine ungespielte, freigeschaltete Figur und lies ihre Fähigkeiten. **Nutze eine unbekannte Fähigkeit und beende die Runde**."
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
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 20,
    "genres": [],
    "translations": {
      "en": {
        "name": "Change One Variable",
        "objective": "Open **a simulation with a short replayable scenario**. Finish it, change one setting, and **replay it to compare the results**. Keep everything else the same."
      },
      "de": {
        "name": "Eine Variable ändern",
        "objective": "Starte **eine Simulation mit kurzem wiederholbarem Szenario**. Beende es, ändere eine Einstellung und **vergleiche die Ergebnisse einer Wiederholung**. Lass alles andere gleich."
      }
    }
  },

  {
    "id": "different-viewpoint-session",
    "moodIds": [
      "curious"
    ],
    "type": "inspiration",
    "tags": [
      "story"
    ],
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 20,
    "genres": [],
    "translations": {
      "en": {
        "name": "Another Perspective",
        "objective": "Open **an adventure with several playable viewpoints**. Choose an unlocked chapter for another character and **see the world through their eyes**."
      },
      "de": {
        "name": "Eine andere Perspektive",
        "objective": "Starte **ein Abenteuerspiel mit mehreren spielbaren Perspektiven**. Wähle ein freigeschaltetes Kapitel einer anderen Figur und **sieh die Welt durch ihre Augen**."
      }
    }
  },
] satisfies readonly AuthoredQuestDefinition[];
