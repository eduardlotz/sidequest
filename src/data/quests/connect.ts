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
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 15,
    "genres": [],
    "translations": {
      "en": {
        "name": "Back Together",
        "objective": "Open **a co-op game you share with someone**. Join each other’s save and **follow what they want to play today**."
      },
      "de": {
        "name": "Wieder zusammen",
        "objective": "Starte **ein Koop-Spiel, das du mit jemandem teilst**. Besucht euren gemeinsamen Spielstand und **spielt heute das, worauf die andere Person Lust hat**."
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
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 15,
    "genres": [],
    "translations": {
      "en": {
        "name": "Pass the Controller",
        "objective": "With someone nearby, open **a local game with short turns**. **Pass the controller after each turn** and talk about what goes well or hilariously wrong."
      },
      "de": {
        "name": "Controller weitergeben",
        "objective": "Starte mit jemandem vor Ort **ein Spiel mit kurzen Zügen**. **Gebt den Controller nach jedem Zug weiter** und kommentiert, was klappt oder völlig schiefgeht."
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
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 20,
    "genres": [],
    "translations": {
      "en": {
        "name": "Join the Event",
        "objective": "Join **an active public event in an online game**. Help with its shared objective and **stay through the result or reward**. Winning is not required."
      },
      "de": {
        "name": "Beim Event dabei",
        "objective": "Besuche **ein laufendes öffentliches Event in einem Onlinespiel**. Hilf beim gemeinsamen Ziel und **bleib bis zum Ergebnis oder zur Belohnung**. Ein Sieg ist nicht nötig."
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
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 30,
    "genres": [],
    "translations": {
      "en": {
        "name": "Team Signals",
        "objective": "Start **a co-op mission with pings**. Mark a route, a threat, and supplies along the way. **Stay with the team until the mission ends**. Voice chat is optional."
      },
      "de": {
        "name": "Teamsignale",
        "objective": "Starte **eine Koop-Mission mit Pings**. Markiere unterwegs einen Weg, eine Gefahr und Vorräte. **Bleib bis zum Missionsende beim Team**. Sprachchat ist freiwillig."
      }
    }
  },

  {
    "id": "shared-puzzle-table",
    "moodIds": [
      "connect"
    ],
    "type": "inspiration",
    "tags": [
      "puzzles",
      "local-play"
    ],
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 20,
    "genres": [],
    "translations": {
      "en": {
        "name": "Think Together",
        "objective": "Open **a puzzle game with someone beside you**. Let one person control it and **take turns suggesting moves**. Talk through your ideas and use hints together."
      },
      "de": {
        "name": "Gemeinsam knobeln",
        "objective": "Starte **ein Rätselspiel mit jemandem neben dir**. Eine Person übernimmt die Steuerung und **ihr schlagt abwechselnd Züge vor**. Sprecht über eure Ideen und nutzt gemeinsam Hinweise."
      }
    }
  },
] satisfies readonly AuthoredQuestDefinition[];
