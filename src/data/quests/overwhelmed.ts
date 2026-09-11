import type { AuthoredQuestDefinition } from "../questTypes";

export const overwhelmedQuests = [
  {
    "id": "ten-minute-save",
    "moodIds": [
      "overwhelmed"
    ],
    "type": "inspiration",
    "tags": [
      "current-save"
    ],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 10,
    "genres": [],
    "translations": {
      "en": {
        "name": "Just Continue",
        "objective": "Open the **most recently played game with a Continue button** and use it. Keep your existing save, settings, and equipment; follow the game from where you left off."
      },
      "de": {
        "name": "Einfach fortsetzen",
        "objective": "Starte das **zuletzt gespielte Spiel mit einer Fortsetzen-Taste** und drücke sie. Behalte Spielstand, Einstellungen und Ausrüstung und spiele dort weiter, wo du aufgehört hast."
      }
    }
  },
  {
    "id": "tutorial-return",
    "moodIds": [
      "overwhelmed"
    ],
    "type": "inspiration",
    "tags": [
      "replay"
    ],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 10,
    "genres": [],
    "translations": {
      "en": {
        "name": "Back to the Start",
        "objective": "Open a **familiar game with a replayable tutorial**. Start that tutorial and follow its instructions at your own pace, using the default setup."
      },
      "de": {
        "name": "Zurück zum Anfang",
        "objective": "Starte ein **bekanntes Spiel mit wiederholbarem Tutorial**. Öffne das Tutorial mit den Standardeinstellungen und folge seinen Anweisungen in deinem Tempo."
      }
    }
  },
  {
    "id": "todays-puzzle",
    "moodIds": [
      "overwhelmed"
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
        "name": "Today’s Puzzle",
        "objective": "Open your most recently played **puzzle game with one untimed daily puzzle**. Take today’s puzzle, use any hints you need, and **finish that puzzle**. Ignore streaks and leaderboards."
      },
      "de": {
        "name": "Das heutige Rätsel",
        "objective": "Öffne dein zuletzt gespieltes **Rätselspiel mit einem täglichen Rätsel ohne Zeitlimit**. Nimm das heutige, nutze alle nötigen Hinweise und **löse dieses Rätsel**. Serien und Ranglisten können warten."
      }
    }
  },
  {
    "id": "one-corner",
    "moodIds": [
      "overwhelmed"
    ],
    "type": "objective",
    "tags": [
      "decorating"
    ],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "genres": [],
    "translations": {
      "en": {
        "name": "One Corner",
        "objective": "Open a **decorating game with an existing furnished room**. Use the corner nearest the door and rearrange three objects already there. **Save the room** without shopping for more furniture."
      },
      "de": {
        "name": "Eine Ecke",
        "objective": "Starte ein **Einrichtungsspiel mit einem bereits möblierten Raum**. Nimm die Ecke neben der Tür und stelle drei vorhandene Gegenstände um. **Speichere den Raum**, ohne neue Möbel zu kaufen."
      }
    }
  }
] satisfies readonly AuthoredQuestDefinition[];
