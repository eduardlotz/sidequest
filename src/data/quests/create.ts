import type { AuthoredQuestDefinition } from "../questTypes";

export const createQuests = [
  {
    "id": "tiny-home",
    "moodIds": [
      "create"
    ],
    "type": "inspiration",
    "tags": [
      "building"
    ],
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 20,
    "genres": [],
    "translations": {
      "en": {
        "name": "Tiny Home",
        "objective": "Open **a sandbox building game**. **Start a smaller home than usual** and try different layouts. It can stay unfinished."
      },
      "de": {
        "name": "Kleines Zuhause",
        "objective": "Starte **ein Sandbox-Bauspiel**. **Beginne ein kleineres Haus als sonst** und probiere Grundrisse aus. Es darf unfertig bleiben."
      }
    }
  },
  {
    "id": "one-room",
    "moodIds": [
      "create"
    ],
    "type": "inspiration",
    "tags": [
      "decorating"
    ],
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 20,
    "genres": [],
    "translations": {
      "en": {
        "name": "Around One Object",
        "objective": "Open **a game with rooms you can redecorate**. Pick an object already there and **let its color or shape guide your changes**."
      },
      "de": {
        "name": "Um einen Gegenstand",
        "objective": "Starte **ein Spiel mit umgestaltbaren Räumen**. Wähle einen vorhandenen Gegenstand und **lass seine Farbe oder Form deine Änderungen bestimmen**."
      }
    }
  },
  {
    "id": "short-course",
    "moodIds": [
      "create"
    ],
    "type": "creation",
    "tags": [
      "level-editor"
    ],
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 30,
    "genres": [],
    "translations": {
      "en": {
        "name": "A Short Course",
        "objective": "In a **game with a playable level editor**, build a start, three obstacles, and a finish. Keep the route short, **complete a test run, and save the level**."
      },
      "de": {
        "name": "Ein kurzer Parcours",
        "objective": "Baue in einem **Spiel mit spielbarem Leveleditor** einen Start, drei Hindernisse und ein Ziel. Halte die Strecke kurz, **schaffe einen Probelauf und speichere das Level**."
      }
    }
  },
  {
    "id": "eight-bars",
    "moodIds": [
      "create"
    ],
    "type": "creation",
    "tags": [
      "rhythm"
    ],
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 30,
    "genres": [],
    "translations": {
      "en": {
        "name": "Eight Bars",
        "objective": "Open a **game with an in-game music sequencer**. Make an eight-bar loop with a beat and melody, **play it once from start to finish, and save it**."
      },
      "de": {
        "name": "Acht Takte",
        "objective": "Starte ein **Spiel mit einem Musik-Sequencer**. Baue einen Loop aus acht Takten mit Beat und Melodie, **höre ihn einmal ganz an und speichere ihn**."
      }
    }
  },

  {
    "id": "workshop-inspiration",
    "moodIds": [
      "create"
    ],
    "type": "inspiration",
    "tags": [
      "building"
    ],
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 20,
    "genres": [],
    "translations": {
      "en": {
        "name": "Borrow an Idea",
        "objective": "Open **a building game with a community gallery**. Browse a few small creations and **try your own version of one idea** with your existing tools. It can stay unfinished."
      },
      "de": {
        "name": "Eine Idee aufgreifen",
        "objective": "Starte **ein Bauspiel mit Community-Galerie**. Schau dir ein paar kleine Kreationen an und **probiere deine eigene Version einer Idee** mit vorhandenen Werkzeugen. Sie darf unfertig bleiben."
      }
    }
  },
] satisfies readonly AuthoredQuestDefinition[];
