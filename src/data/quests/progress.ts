import type { AuthoredQuestDefinition } from "../questTypes";

export const progressQuests = [
  {
    "id": "oldest-unfinished",
    "moodIds": [
      "progress"
    ],
    "type": "inspiration",
    "tags": [
      "current-save",
      "story"
    ],
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 20,
    "translations": {
      "en": {
        "name": "Still Unfinished",
        "objective": "Open your **oldest installed, unfinished story game**. Read its recap or quest log and **pick up the main story**. No chapter target today."
      },
      "de": {
        "name": "Noch nicht fertig",
        "objective": "Starte dein **ältestes installiertes, unfertiges Storyspiel**. Lies die Zusammenfassung oder das Questlog und **spiele die Hauptgeschichte weiter**. Du musst heute kein Kapitel schaffen."
      }
    }
  },
  {
    "id": "smallest-quest",
    "moodIds": [
      "progress"
    ],
    "type": "inspiration",
    "tags": [
      "current-save"
    ],
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 20,
    "translations": {
      "en": {
        "name": "Loose Ends",
        "objective": "Open **an RPG with unfinished side quests**. **Return to their people and places** and follow those stories for a while. Leave new quests for later."
      },
      "de": {
        "name": "Offene Geschichten",
        "objective": "Starte **ein Rollenspiel mit offenen Nebenquests**. Such dir eine aus, deren Figur oder Ort dich interessiert, und **folge ihrer Geschichte ein Stück weiter**. Neue Quests können warten."
      }
    }
  },
  {
    "id": "final-piece",
    "moodIds": [
      "progress"
    ],
    "type": "objective",
    "tags": [
      "collectibles"
    ],
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 20,
    "translations": {
      "en": {
        "name": "The Missing Piece",
        "objective": "Choose **a collection missing one item** with a known location. **Find that item and complete the set**. Claim its reward if there is one."
      },
      "de": {
        "name": "Das fehlende Stück",
        "objective": "Wähle **eine Sammlung mit einem fehlenden Item**, dessen Ort bekannt ist. **Finde das Item und vervollständige die Sammlung**. Hole ihre Belohnung, falls es eine gibt."
      }
    }
  },
  {
    "id": "next-unlock",
    "moodIds": [
      "progress"
    ],
    "type": "objective",
    "tags": [
      "current-save"
    ],
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 30,
    "translations": {
      "en": {
        "name": "Put It to Use",
        "objective": "Find **a character or vehicle one short task from unlocking**. Complete that task and **use the unlock in a full round or race**."
      },
      "de": {
        "name": "Gleich ausprobieren",
        "objective": "Such **eine Figur oder ein Fahrzeug kurz vor der Freischaltung**. Erledige die letzte kurze Aufgabe und **spiele damit eine ganze Runde oder ein Rennen**."
      }
    }
  },

  {
    "id": "unfinished-small-adventure",
    "moodIds": [
      "progress"
    ],
    "type": "inspiration",
    "tags": [
      "current-save",
      "story"
    ],
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 20,
    "translations": {
      "en": {
        "name": "A Small Adventure",
        "objective": "Continue **a short adventure you already started**. **Follow its next story thread** without checking how much remains. Stop at a save point when you like."
      },
      "de": {
        "name": "Ein kleines Abenteuer",
        "objective": "Setze **ein begonnenes kurzes Abenteuer** fort. **Spiel die nächste Szene oder Mission**, ohne nachzuschlagen, wie viel noch kommt. Hör an einem Speicherpunkt auf, wenn es reicht."
      }
    }
  },
  {
    "id": "second-session",
    "moodIds": [
      "progress"
    ],
    "type": "objective",
    "tags": [
      "current-save",
      "first-play"
    ],
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 20,
    "translations": {
      "en": {
        "name": "The Second Session",
        "objective": "Open **a game you stopped after its first session**. Load that save, review the controls if needed, and **reach the next save point or finish one objective**."
      },
      "de": {
        "name": "Die zweite Session",
        "objective": "Starte **ein Spiel, das du nach der ersten Session liegen gelassen hast**. Lade den Spielstand, sieh dir bei Bedarf die Steuerung an und **erreiche den nächsten Speicherpunkt oder schließe ein Ziel ab**."
      }
    }
  },
  {
    "id": "chapter-left-open",
    "moodIds": [
      "progress"
    ],
    "type": "objective",
    "tags": [
      "current-save",
      "story"
    ],
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 30,
    "translations": {
      "en": {
        "name": "Close the Chapter",
        "objective": "Return to **a story game with a chapter already in progress**. Follow its main path and **finish that chapter or episode**. Leave the next one for another session."
      },
      "de": {
        "name": "Kapitel abschließen",
        "objective": "Kehre zu **einem Storyspiel mit einem begonnenen Kapitel** zurück. Folge dem Hauptweg und **beende dieses Kapitel oder diese Episode**. Das nächste kommt in einer anderen Session."
      }
    }
  },
] satisfies readonly AuthoredQuestDefinition[];
