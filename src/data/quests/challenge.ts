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
    "translations": {
      "en": {
        "name": "One Life",
        "objective": "Open **a roguelike where death ends the run**. **Spend the resources you usually hoard** and see how far they take you."
      },
      "de": {
        "name": "Ein Leben",
        "objective": "Starte **ein Roguelike, bei dem der Tod deinen Run beendet**. **Verbrauch die Vorräte, die du sonst für später aufhebst**, und schau, wie weit du kommst."
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
    "translations": {
      "en": {
        "name": "A Step Harder",
        "objective": "Open **a rhythm game**. Choose songs just above your usual difficulty and **take on the harder patterns**. No required combo or score."
      },
      "de": {
        "name": "Eine Stufe schwerer",
        "objective": "Starte **ein Rhythmusspiel**. Wähle Songs eine Stufe über deinem üblichen Schwierigkeitsgrad und **probier die schwereren Muster aus**. Du brauchst weder eine perfekte Kombo noch eine bestimmte Punktzahl."
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
    "translations": {
      "en": {
        "name": "Beat Your Lap",
        "objective": "In **a racing time trial**, set a clean lap on a familiar short track. Keep the same setup and **beat your time within three more attempts**. Stop after the third result."
      },
      "de": {
        "name": "Schlag deine Zeit",
        "objective": "Fahr in **einem Rennspiel mit Zeitfahren** eine saubere Runde auf einer kurzen Strecke, die du kennst. Behalte dein Setup und **versuch, deine Zeit in drei weiteren Runden zu schlagen**. Danach ist Schluss."
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
    "translations": {
      "en": {
        "name": "Land the Combo",
        "objective": "Open **a fighting game with combo trials**. Learn an unfinished combo and **land it in a CPU match**. Finish that match or stop after three full matches."
      },
      "de": {
        "name": "Die Kombo landen",
        "objective": "Starte **ein Kampfspiel mit Kombo-Training**. Üb eine Kombo, die du noch nicht sicher kannst, und **lande sie in einem Match gegen die CPU**. Spiel das Match zu Ende oder hör nach drei Matches auf."
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
    "translations": {
      "en": {
        "name": "Tricky Jumps",
        "objective": "Open **a precision platformer with quick retries**. Pick an unlocked section and **work through its tricky jumps**. Take breaks between attempts whenever you like."
      },
      "de": {
        "name": "Knifflige Sprünge",
        "objective": "Starte **einen Plattformer mit schnellem Movement und kniffligen Abschnitten**. Such dir einen freigeschalteten Abschnitt und **probier dich an seinen Sprüngen**. Mach zwischen den Versuchen Pause, wann du möchtest."
      }
    }
  },
] satisfies readonly AuthoredQuestDefinition[];
