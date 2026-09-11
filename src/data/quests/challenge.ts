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
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 20,
    "genres": [],
    "translations": {
      "en": {
        "name": "One Life",
        "objective": "Launch a **roguelike where a death ends the run**. Take a run seriously from the first room: spend the resources you normally hoard and see how far you can push it."
      },
      "de": {
        "name": "Ein Leben",
        "objective": "Starte ein **Roguelike, in dem der Tod den Durchlauf beendet**. Spiele von Anfang an auf Risiko: Nutze die Vorräte, die du sonst aufhebst, und schau, wie weit du kommst."
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
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 15,
    "genres": [],
    "translations": {
      "en": {
        "name": "Just Beyond Comfortable",
        "objective": "Open a **rhythm game** and play songs just above the difficulty you usually clear. Use the session to chase difficult patterns, without a required combo or score."
      },
      "de": {
        "name": "Knapp über dem Limit",
        "objective": "Starte ein **Rhythmusspiel** und spiele Songs knapp über der Schwierigkeit, die du normalerweise schaffst. Geh die schwierigen Muster an, ohne eine bestimmte Kombo oder Punktzahl erreichen zu müssen."
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
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "genres": [],
    "translations": {
      "en": {
        "name": "Beat Your Lap",
        "objective": "In a **racing game with time trials**, set a clean lap on a familiar short track. Keep the car and settings, then **beat that lap within three more attempts**. The third result also ends the session."
      },
      "de": {
        "name": "Schlag deine Runde",
        "objective": "Fahre in einem **Rennspiel mit Zeitfahren** eine saubere Runde auf einer bekannten kurzen Strecke. Behalte Wagen und Einstellungen und **unterbiete die Zeit in höchstens drei weiteren Versuchen**. Nach dem dritten Ergebnis endet die Runde auch ohne Verbesserung."
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
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 20,
    "genres": [],
    "translations": {
      "en": {
        "name": "From Practice to Match",
        "objective": "Open a **fighting game with combo trials and CPU matches**. Learn one unfinished combo trial, then **land that combo in a CPU match**. Play at most three matches; finish the match in which you land it."
      },
      "de": {
        "name": "Vom Training ins Match",
        "objective": "Starte ein **Kampfspiel mit Kombo-Training und CPU-Matches**. Lerne eine noch offene Trainingskombo und **lande sie in einem CPU-Match**. Spiele höchstens drei Matches und beende das Match, in dem sie gelingt."
      }
    }
  }
] satisfies readonly AuthoredQuestDefinition[];
