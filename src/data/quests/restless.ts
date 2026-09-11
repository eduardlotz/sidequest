import type { AuthoredQuestDefinition } from "../questTypes";

export const restlessQuests = [
  {
    "id": "keep-moving",
    "moodIds": [
      "restless"
    ],
    "type": "inspiration",
    "tags": [
      "traversal"
    ],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 15,
    "genres": [],
    "translations": {
      "en": {
        "name": "Keep Moving",
        "objective": "Open a **movement game with free running, swinging, or grappling**. Leave mission markers aside and spend this session chaining the moves that keep you in motion."
      },
      "de": {
        "name": "In Bewegung",
        "objective": "Starte ein **Spiel mit freiem Rennen, Schwingen oder Greifhaken**. Lass Missionsmarkierungen links liegen und verbinde die Bewegungen, mit denen du am besten in Fahrt bleibst."
      }
    }
  },
  {
    "id": "flat-out-race",
    "moodIds": [
      "restless"
    ],
    "type": "inspiration",
    "tags": [
      "racing"
    ],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 15,
    "genres": [],
    "translations": {
      "en": {
        "name": "Flat Out",
        "objective": "Pick an **arcade racer with quick races**. Jump into the car you already use and go straight to the track; spend this session racing instead of tuning."
      },
      "de": {
        "name": "Vollgas",
        "objective": "Nimm ein **Arcade-Rennspiel mit schnellen Rennen**. Steig in deinen gewohnten Wagen und fahr direkt auf die Strecke. Diese Runde gehört dem Fahren statt dem Tuning."
      }
    }
  },
  {
    "id": "three-songs",
    "moodIds": [
      "restless"
    ],
    "type": "objective",
    "tags": [
      "rhythm"
    ],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "genres": [],
    "translations": {
      "en": {
        "name": "Three Songs",
        "objective": "Open a **rhythm game** and queue three songs: a warm-up, one at your usual difficulty, and one a step higher. **Play all three to their result screens**, with no restarts."
      },
      "de": {
        "name": "Drei Songs",
        "objective": "Starte ein **Rhythmusspiel** und wähle drei Songs: einen zum Aufwärmen, einen auf deiner üblichen Stufe und einen etwas schwereren. **Spiele alle drei bis zum Ergebnis**, ohne neu zu starten."
      }
    }
  },
  {
    "id": "five-trick-line",
    "moodIds": [
      "restless"
    ],
    "type": "challenge",
    "tags": [
      "skating",
      "three-attempts"
    ],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "genres": [],
    "translations": {
      "en": {
        "name": "Five in a Line",
        "objective": "Open a **skating game that links tricks into a combo**. Use a familiar stretch and **bank five different tricks in one line without bailing**. Give it three attempts, then accept the result."
      },
      "de": {
        "name": "Fünf in einer Line",
        "objective": "Nimm ein **Skatespiel, das Tricks zu einer Kombo verbindet**. Nutze einen bekannten Abschnitt und **lande fünf verschiedene Tricks in einer Line ohne Sturz**. Nach drei Versuchen akzeptierst du das Ergebnis."
      }
    }
  }
] satisfies readonly AuthoredQuestDefinition[];
