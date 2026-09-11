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
    "genres": [],
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
    "genres": [],
    "translations": {
      "en": {
        "name": "Loose Ends",
        "objective": "Open **an RPG with unfinished side quests**. **Return to their people and places** and follow those stories for a while. Leave new quests for later."
      },
      "de": {
        "name": "Offene Geschichten",
        "objective": "Starte **ein Rollenspiel mit offenen Nebenquests**. **Besuche ihre Figuren und Orte wieder** und folge diesen Geschichten eine Weile. Neue Quests kommen später."
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
    "genres": [],
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
    "genres": [],
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
    "genres": [],
    "translations": {
      "en": {
        "name": "A Small Adventure",
        "objective": "Continue **a short adventure you already started**. **Follow its next story thread** without checking how much remains. Stop at a save point when you like."
      },
      "de": {
        "name": "Ein kleines Abenteuer",
        "objective": "Setze **ein begonnenes kurzes Abenteuer** fort. **Folge dem nächsten Erzählstrang**, ohne nachzuschlagen, wie viel noch fehlt. Hör an einem Speicherpunkt auf, wenn es reicht."
      }
    }
  },
] satisfies readonly AuthoredQuestDefinition[];
