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
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 20,
    "genres": [],
    "translations": {
      "en": {
        "name": "Listen Closely",
        "objective": "Open a **puzzle or detective game where sound carries clues**. Put on headphones if available and give this session to listening and following those clues."
      },
      "de": {
        "name": "Genau hinhören",
        "objective": "Starte ein **Rätsel- oder Detektivspiel, in dem Geräusche Hinweise geben**. Setze Kopfhörer auf, wenn du welche hast, und widme dich in dieser Runde diesen Spuren."
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
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 20,
    "genres": [],
    "translations": {
      "en": {
        "name": "One Build",
        "objective": "Return to a **deckbuilder or build-based RPG** with a setup you already enjoy. Play around what that setup does well and leave the search for a replacement build for later."
      },
      "de": {
        "name": "Ein Build",
        "objective": "Kehre in ein **Deckbuilding-Spiel oder Rollenspiel mit Builds** zurück, in dem du schon ein gern gespieltes Setup hast. Spiele seine Stärken aus; die Suche nach einem neuen Build hat Zeit."
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
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 20,
    "genres": [],
    "translations": {
      "en": {
        "name": "Find the Bottleneck",
        "objective": "Open an **automation save with a stalled production line**. Trace the missing input back to its source and restore the supply. Finish when **three products arrive at that line’s output**."
      },
      "de": {
        "name": "Finde den Engpass",
        "objective": "Öffne einen **Automatisierungs-Spielstand mit einer stillstehenden Produktionslinie**. Verfolge die fehlende Zufuhr bis zur Ursache und stelle sie wieder her. **Drei Produkte am Ausgang der Linie** beenden die Aufgabe."
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
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 20,
    "genres": [],
    "translations": {
      "en": {
        "name": "Follow One Lead",
        "objective": "Continue a **detective game with an active lead and evidence board**. Follow the current lead through its clues and conversations until **one new piece of evidence is recorded**."
      },
      "de": {
        "name": "Eine Spur verfolgen",
        "objective": "Setze ein **Detektivspiel mit einer offenen Spur und einer Beweistafel** fort. Folge ihren Hinweisen und Gesprächen, bis **ein neuer Beweis festgehalten wird**."
      }
    }
  }
] satisfies readonly AuthoredQuestDefinition[];
