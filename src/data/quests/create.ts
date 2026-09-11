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
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 25,
    "genres": [],
    "translations": {
      "en": {
        "name": "Tiny Home",
        "objective": "Open a **sandbox building game** and start a home in a space smaller than you usually use. Play with the layout and see what you want to fit inside. It can stay unfinished."
      },
      "de": {
        "name": "Kleines Zuhause",
        "objective": "Starte ein **Sandbox-Bauspiel** und beginne ein Haus auf weniger Platz als sonst. Probiere Grundrisse aus und schau, was du darin unterbringen möchtest. Es darf unfertig bleiben."
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
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 20,
    "genres": [],
    "translations": {
      "en": {
        "name": "Around One Object",
        "objective": "Open a **game with furnished rooms you can redecorate**. Pick an object already in the room and let its color or shape guide the changes around it."
      },
      "de": {
        "name": "Um einen Gegenstand",
        "objective": "Starte ein **Spiel mit eingerichteten Räumen, die du umgestalten kannst**. Nimm einen Gegenstand im Raum und lass dich bei den Änderungen von seiner Farbe oder Form leiten."
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
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 25,
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
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 25,
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
  }
] satisfies readonly AuthoredQuestDefinition[];
