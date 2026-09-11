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
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 15,
    "genres": [],
    "translations": {
      "en": {
        "name": "Just Continue",
        "objective": "Open your **most recently played game with a Continue button**. **Pick up where you left off** with the same save, settings, and equipment."
      },
      "de": {
        "name": "Einfach fortsetzen",
        "objective": "Starte dein **zuletzt gespieltes Spiel mit Fortsetzen-Taste**. **Spiele dort weiter, wo du aufgehört hast**, mit demselben Spielstand, denselben Einstellungen und derselben Ausrüstung."
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
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 15,
    "genres": [],
    "translations": {
      "en": {
        "name": "Back to the Start",
        "objective": "Open **a familiar game with a replayable tutorial**. Use its default setup and **follow the tutorial at your own pace**."
      },
      "de": {
        "name": "Zurück zum Anfang",
        "objective": "Starte **ein vertrautes Spiel mit wiederholbarem Tutorial**. Nutze die Standardeinstellungen und **folge dem Tutorial in deinem Tempo**."
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
        "objective": "Open your last-played **puzzle game with an untimed daily puzzle**. **Solve today’s puzzle** with any hints you need. Ignore streaks and leaderboards."
      },
      "de": {
        "name": "Das heutige Rätsel",
        "objective": "Starte dein zuletzt gespieltes **Rätselspiel mit täglichem Rätsel ohne Zeitlimit**. **Löse das heutige Rätsel** mit beliebigen Hinweisen. Serien und Ranglisten sind egal."
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
        "objective": "Open **a decorating game with a furnished room**. Rearrange three objects in the corner nearest the door and **save the room**. Buy no new furniture."
      },
      "de": {
        "name": "Eine Ecke",
        "objective": "Starte **ein Einrichtungsspiel mit möbliertem Raum**. Stelle drei Gegenstände in der Ecke neben der Tür um und **speichere den Raum**. Kaufe keine neuen Möbel."
      }
    }
  },

  {
    "id": "one-known-bot-mode",
    "moodIds": [
      "overwhelmed"
    ],
    "type": "inspiration",
    "tags": [
      "vs-bots"
    ],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 20,
    "genres": [],
    "translations": {
      "en": {
        "name": "Ease Back In",
        "objective": "Open **a familiar solo or bot mode**. Keep your usual setup and **get comfortable with the controls again**. No difficulty changes or required wins."
      },
      "de": {
        "name": "Wieder reinkommen",
        "objective": "Starte **einen vertrauten Solo- oder Bot-Modus**. Behalte dein Setup und **werde wieder mit der Steuerung vertraut**. Kein neuer Schwierigkeitsgrad und kein Pflichtsieg."
      }
    }
  },
] satisfies readonly AuthoredQuestDefinition[];
