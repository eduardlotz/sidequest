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
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 15,
    "genres": [],
    "translations": {
      "en": {
        "name": "Let the Story Run",
        "objective": "Continue a **visual novel with auto-read**. **Let the dialogue play** and make choices as they come. Stop whenever you like."
      },
      "de": {
        "name": "Die Geschichte läuft",
        "objective": "Setze eine **Visual Novel mit automatischem Textlauf** fort. **Lass die Dialoge laufen** und entscheide, wenn du gefragt wirst. Hör auf, wann du möchtest."
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
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "genres": [],
    "translations": {
      "en": {
        "name": "Museum Visit",
        "objective": "Visit a peaceful **museum or gallery in a game**. **Browse the exhibits** and linger at whatever catches your eye."
      },
      "de": {
        "name": "Museumsbesuch",
        "objective": "Besuche ein ruhiges **Museum oder eine Galerie in einem Spiel**. **Schau dir die Ausstellungsstücke an** und bleib bei denen stehen, die dich interessieren."
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
        "objective": "Open **digital solitaire without a timer**. Play the first deal until **you clear the cards or run out of moves**. Undo and hints are allowed."
      },
      "de": {
        "name": "Eine Partie",
        "objective": "Öffne **digitales Solitaire ohne Zeitlimit**. Spiele die erste Auslage, bis **alle Karten abgelegt sind oder kein Zug mehr möglich ist**. Rückgängig und Hinweise sind erlaubt."
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
  },

  {
    "id": "hidden-object-browse",
    "moodIds": [
      "low-energy"
    ],
    "type": "inspiration",
    "tags": [],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "genres": [],
    "translations": {
      "en": {
        "name": "Hidden Details",
        "objective": "Open **a hidden-object game without a timer**. **Browse the scene for hidden details** and use hints whenever you like. Stop when you have seen enough."
      },
      "de": {
        "name": "Versteckte Details",
        "objective": "Starte **ein Wimmelbildspiel ohne Zeitlimit**. **Suche in der Szene nach versteckten Details** und nutze Hinweise nach Bedarf. Hör auf, wenn du genug gesehen hast."
      }
    }
  },
] satisfies readonly AuthoredQuestDefinition[];
