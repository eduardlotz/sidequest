import type { AuthoredQuestDefinition } from "../questTypes";

export const challengeQuests = [
  {
    "id": "one-life",
    "moodIds": [
      "challenge"
    ],
    "type": "inspiration",
    "tags": [
      "one-life"
    ],
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 20,
    "genres": [],
    "translations": {
      "en": {
        "name": "One Life",
        "objective": "Open **a roguelike where death ends the run**. **Spend the resources you usually hoard** and see how far they take you."
      },
      "de": {
        "name": "Ein Leben",
        "objective": "Starte **ein Roguelike, in dem der Tod den Durchlauf beendet**. **Nutze die Vorräte, die du sonst aufhebst**, und schau, wie weit du kommst."
      }
    }
  },
  {
    "id": "full-combo-try",
    "moodIds": [
      "challenge"
    ],
    "type": "inspiration",
    "tags": [
      "rhythm"
    ],
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 20,
    "genres": [],
    "translations": {
      "en": {
        "name": "A Step Harder",
        "objective": "Open **a rhythm game**. Choose songs just above your usual difficulty and **take on the harder patterns**. No required combo or score."
      },
      "de": {
        "name": "Eine Stufe schwerer",
        "objective": "Starte **ein Rhythmusspiel**. Wähle Songs knapp über deiner üblichen Schwierigkeit und **probier die schwereren Muster**. Keine Pflichtkombo und kein Punkteziel."
      }
    }
  },
  {
    "id": "three-fast-laps",
    "moodIds": [
      "challenge"
    ],
    "type": "challenge",
    "tags": [
      "racing",
      "three-attempts"
    ],
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 25,
    "genres": [],
    "translations": {
      "en": {
        "name": "Beat Your Lap",
        "objective": "In **a racing time trial**, set a clean lap on a familiar short track. Keep the same setup and **beat your time within three more attempts**. Stop after the third result."
      },
      "de": {
        "name": "Schlag deine Runde",
        "objective": "Fahre in **einem Rennspiel mit Zeitfahren** eine saubere Runde auf einer vertrauten kurzen Strecke. Behalte dein Setup und **unterbiete die Zeit in drei weiteren Versuchen**. Nach dem dritten Ergebnis ist Schluss."
      }
    }
  },
  {
    "id": "match-combo",
    "moodIds": [
      "challenge"
    ],
    "type": "challenge",
    "tags": [
      "three-attempts"
    ],
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 25,
    "genres": [],
    "translations": {
      "en": {
        "name": "Land the Combo",
        "objective": "Open **a fighting game with combo trials**. Learn an unfinished combo and **land it in a CPU match**. Finish that match or stop after three full matches."
      },
      "de": {
        "name": "Die Kombo landen",
        "objective": "Starte **ein Kampfspiel mit Kombo-Training**. Lerne eine offene Kombo und **lande sie in einem CPU-Match**. Beende dieses Match oder hör nach drei ganzen Matches auf."
      }
    }
  },

  {
    "id": "precision-platformer-session",
    "moodIds": [
      "challenge"
    ],
    "type": "inspiration",
    "tags": [
      "traversal"
    ],
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 20,
    "genres": [],
    "translations": {
      "en": {
        "name": "Tricky Jumps",
        "objective": "Open **a precision platformer with quick retries**. Pick an unlocked section and **work through its tricky jumps**. Take breaks between attempts whenever you like."
      },
      "de": {
        "name": "Knifflige Sprünge",
        "objective": "Starte **einen Präzisionsplattformer mit schnellen Wiederholungen**. Wähle einen freigeschalteten Abschnitt und **probier seine kniffligen Sprünge**. Mach zwischen den Versuchen Pause, wann du möchtest."
      }
    }
  },
] satisfies readonly AuthoredQuestDefinition[];
