import type { AuthoredQuestDefinition } from "../questTypes";

export const connectQuests = [
  {
    "id": "co-op-check-in",
    "moodIds": [
      "connect"
    ],
    "type": "inspiration",
    "tags": [
      "co-op"
    ],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 20,
    "genres": [],
    "translations": {
      "en": {
        "name": "Back Together",
        "objective": "Open a **co-op game you already share with someone**. Join their save or invite them into yours and spend this session following what they want to play."
      },
      "de": {
        "name": "Wieder zusammen",
        "objective": "Starte ein **Koop-Spiel, das du schon mit jemandem spielst**. Tritt dem Spielstand der Person bei oder lade sie zu dir ein und richte dich heute danach, was sie spielen möchte."
      }
    }
  },
  {
    "id": "pass-the-controller",
    "moodIds": [
      "connect"
    ],
    "type": "inspiration",
    "tags": [
      "local-play"
    ],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 20,
    "genres": [],
    "translations": {
      "en": {
        "name": "Pass the Controller",
        "objective": "With someone nearby, open a **local game built around short turns**. Trade the controller after each turn and talk through the good and ridiculous moments together."
      },
      "de": {
        "name": "Controller weitergeben",
        "objective": "Starte mit jemandem vor Ort ein **Spiel mit kurzen Zügen oder Versuchen**. Gebt den Controller nach jedem Zug weiter und kommentiert zusammen, was klappt oder völlig schiefgeht."
      }
    }
  },
  {
    "id": "public-event",
    "moodIds": [
      "connect"
    ],
    "type": "objective",
    "tags": [
      "co-op",
      "support"
    ],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 20,
    "genres": [],
    "translations": {
      "en": {
        "name": "Join the Event",
        "objective": "Open an **online game with an active public event on the map**. Join that event, contribute to its shared objective, and **stay through the result or reward**. Winning is not required."
      },
      "de": {
        "name": "Beim Event dabei",
        "objective": "Starte ein **Online-Spiel mit einem laufenden öffentlichen Event auf der Karte**. Mach beim gemeinsamen Ziel mit und **bleib bis zum Ergebnis oder zur Belohnung**. Ein Sieg ist nicht nötig."
      }
    }
  },
  {
    "id": "team-signals",
    "moodIds": [
      "connect"
    ],
    "type": "objective",
    "tags": [
      "co-op",
      "support"
    ],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 20,
    "genres": [],
    "translations": {
      "en": {
        "name": "On the Same Page",
        "objective": "Choose a **co-op mission with a ping system**. Use pings to point out a route, a threat, and supplies as your team reaches them. **Stay with the team until the mission ends**; no need to use voice chat."
      },
      "de": {
        "name": "Auf einer Wellenlänge",
        "objective": "Wähle eine **Koop-Mission mit Ping-System**. Markiere unterwegs einen Weg, eine Gefahr und Vorräte, wenn dein Team sie erreicht. **Bleib bis zum Missionsende beim Team**; Sprachchat ist nicht nötig."
      }
    }
  }
] satisfies readonly AuthoredQuestDefinition[];
