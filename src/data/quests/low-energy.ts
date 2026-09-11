import type { AuthoredQuestDefinition } from "../questTypes";

export const lowEnergyQuests = [
  {
    "id": "auto-read-chapter",
    "moodIds": [
      "low-energy"
    ],
    "type": "inspiration",
    "tags": [
      "dialogue"
    ],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 15,
    "genres": [],
    "translations": {
      "en": {
        "name": "Let the Story Run",
        "objective": "Continue a **visual novel with auto-read**. Let the dialogue play and make choices as they come, without setting a chapter target. Stop at a pause that suits you."
      },
      "de": {
        "name": "Die Geschichte läuft",
        "objective": "Setze eine **Visual Novel mit automatischem Textlauf** fort. Lass die Dialoge laufen und entscheide, wenn du gefragt wirst. Du musst kein Kapitel schaffen; hör an einer passenden Pause auf."
      }
    }
  },
  {
    "id": "five-exhibits",
    "moodIds": [
      "low-energy"
    ],
    "type": "inspiration",
    "tags": [
      "free-roam"
    ],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 15,
    "genres": [],
    "translations": {
      "en": {
        "name": "Museum Visit",
        "objective": "Open a **game with a museum or gallery you can walk through peacefully**. Browse the exhibits already on display and linger at the ones that catch your eye."
      },
      "de": {
        "name": "Museumsbesuch",
        "objective": "Starte ein **Spiel mit einem Museum oder einer Galerie, durch die du in Ruhe gehen kannst**. Schau dir die vorhandenen Ausstellungsstücke an und bleib bei denen stehen, die dich interessieren."
      }
    }
  },
  {
    "id": "one-solitaire-hand",
    "moodIds": [
      "low-energy"
    ],
    "type": "objective",
    "tags": [
      "one-round",
      "no-timer"
    ],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "genres": [],
    "translations": {
      "en": {
        "name": "One Hand",
        "objective": "Open **digital solitaire in an untimed mode**. Accept the first deal and play one hand, using undo or hints freely. Finish when **you clear the cards or have no moves left**."
      },
      "de": {
        "name": "Eine Partie",
        "objective": "Öffne **digitales Solitaire ohne Zeitlimit**. Nimm die erste Auslage und spiele eine Partie; Rückgängig und Hinweise sind erlaubt. **Alle Karten abgelegt oder kein Zug mehr möglich** beendet die Aufgabe."
      }
    }
  },
  {
    "id": "small-jigsaw",
    "moodIds": [
      "low-energy"
    ],
    "type": "objective",
    "tags": [
      "puzzles",
      "no-timer"
    ],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "genres": [],
    "translations": {
      "en": {
        "name": "Small Jigsaw",
        "objective": "Choose a **digital jigsaw of no more than fifty pieces**. Use the preview image and any sorting help, then **put the last piece in place**."
      },
      "de": {
        "name": "Kleines Puzzle",
        "objective": "Nimm ein **digitales Puzzle mit höchstens fünfzig Teilen**. Nutze das Vorschaubild und Sortierhilfen und **setze das letzte Teil ein**."
      }
    }
  }
] satisfies readonly AuthoredQuestDefinition[];
