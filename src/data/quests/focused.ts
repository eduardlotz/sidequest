import type { AuthoredQuestDefinition } from "../questTypes";

export const focusedQuests = [
  {
    "id": "headphones-on",
    "moodIds": [
      "focused"
    ],
    "type": "inspiration",
    "tags": [
      "puzzles"
    ],
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 20,
    "genres": [],
    "translations": {
      "en": {
        "name": "Listen Closely",
        "objective": "Open **a puzzle or detective game with sound clues**. Put on headphones if you have them and **follow what you hear**."
      },
      "de": {
        "name": "Genau hinhören",
        "objective": "Starte **ein Rätsel- oder Detektivspiel mit akustischen Hinweisen**. Setze Kopfhörer auf, falls du welche hast, und **folge den Geräuschen**."
      }
    }
  },
  {
    "id": "one-build",
    "moodIds": [
      "focused"
    ],
    "type": "inspiration",
    "tags": [
      "loadout"
    ],
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 20,
    "genres": [],
    "translations": {
      "en": {
        "name": "One Build",
        "objective": "Open **a deckbuilder or build-based RPG**. Take a setup you already enjoy and **play to its strengths**. Leave new builds for later."
      },
      "de": {
        "name": "Ein Build",
        "objective": "Starte **ein Deckbuilding-Spiel oder Rollenspiel mit Builds**. Nimm ein vertrautes Setup und **spiele seine Stärken aus**. Neue Builds kommen später."
      }
    }
  },
  {
    "id": "fix-the-bottleneck",
    "moodIds": [
      "focused"
    ],
    "type": "objective",
    "tags": [
      "automation"
    ],
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 30,
    "genres": [],
    "translations": {
      "en": {
        "name": "Find the Bottleneck",
        "objective": "Open **an automation save with a stalled line**. Find and restore its missing input. **Watch three products reach the output**."
      },
      "de": {
        "name": "Finde den Engpass",
        "objective": "Öffne **einen Automatisierungs-Spielstand mit einer stillstehenden Linie**. Finde und behebe die fehlende Zufuhr. **Warte auf drei fertige Produkte am Ausgang**."
      }
    }
  },
  {
    "id": "one-lead",
    "moodIds": [
      "focused"
    ],
    "type": "objective",
    "tags": [
      "story"
    ],
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 20,
    "genres": [],
    "translations": {
      "en": {
        "name": "Follow One Lead",
        "objective": "Continue **a detective game with an open lead and evidence board**. Follow its clues and conversations until **one new piece of evidence is recorded**."
      },
      "de": {
        "name": "Eine Spur verfolgen",
        "objective": "Setze **ein Detektivspiel mit offener Spur und Beweistafel** fort. Folge ihren Hinweisen und Gesprächen, bis **ein neuer Beweis festgehalten wird**."
      }
    }
  },

  {
    "id": "turn-based-one-front",
    "moodIds": [
      "focused"
    ],
    "type": "inspiration",
    "tags": [],
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 25,
    "genres": [],
    "translations": {
      "en": {
        "name": "One Front",
        "objective": "Open **a turn-based strategy save with several fronts**. **Focus on one region or group of units**. Handle the other fronts only when needed."
      },
      "de": {
        "name": "Eine Front",
        "objective": "Öffne **einen rundenbasierten Strategiespielstand mit mehreren Fronten**. **Kümmere dich um eine Region oder Einheitengruppe**. Versorge die anderen Fronten nur nach Bedarf."
      }
    }
  },
] satisfies readonly AuthoredQuestDefinition[];
