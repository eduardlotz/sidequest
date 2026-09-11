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
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 20,
    "genres": [],
    "translations": {
      "en": {
        "name": "Still Unfinished",
        "objective": "Return to the **oldest unfinished story game you still have installed**. Read the recap or quest log and pick up the thread of its main story. There is no chapter quota today."
      },
      "de": {
        "name": "Noch nicht zu Ende",
        "objective": "Kehre zum **ältesten noch unfertigen Storyspiel zurück, das installiert ist**. Lies die Zusammenfassung oder das Questlog und finde wieder in die Hauptgeschichte hinein. Du musst heute kein Kapitel schaffen."
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
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 15,
    "genres": [],
    "translations": {
      "en": {
        "name": "Loose Ends",
        "objective": "Open an **RPG with side quests already waiting in your journal**. Spend this session with the people and places from those unfinished stories instead of looking for new quests."
      },
      "de": {
        "name": "Offene Geschichten",
        "objective": "Starte ein **Rollenspiel mit offenen Nebenquests im Tagebuch**. Widme diese Runde den Menschen und Orten aus diesen Geschichten, statt neue Quests zu suchen."
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
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 20,
    "genres": [],
    "translations": {
      "en": {
        "name": "The Missing Piece",
        "objective": "Choose a **collection set with one missing item whose location is already shown**. Go after that item and **claim the completed set or its reward**. Leave other collections for another session."
      },
      "de": {
        "name": "Das fehlende Stück",
        "objective": "Nimm eine **Sammlung mit genau einem fehlenden Gegenstand, dessen Ort angezeigt wird**. Hole ihn und **schließe die Sammlung ab oder hole ihre Belohnung**. Andere Sammlungen sind später dran."
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
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 25,
    "genres": [],
    "translations": {
      "en": {
        "name": "Put It to Use",
        "objective": "Open a **game with a character or vehicle one short unlock task away**. Finish the displayed task, then **use the unlock in one complete round or race**."
      },
      "de": {
        "name": "Gleich ausprobieren",
        "objective": "Starte ein **Spiel, in dem für eine Figur oder ein Fahrzeug nur eine kurze Freischaltaufgabe fehlt**. Erledige sie und **spiele mit der Freischaltung eine ganze Runde oder ein Rennen**."
      }
    }
  }
] satisfies readonly AuthoredQuestDefinition[];
