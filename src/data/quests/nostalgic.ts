import type { AuthoredQuestDefinition } from "../questTypes";

export const nostalgicQuests = [
  {
    "id": "childhood-save",
    "moodIds": [
      "nostalgic"
    ],
    "type": "inspiration",
    "tags": [
      "replay"
    ],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 20,
    "genres": [],
    "translations": {
      "en": {
        "name": "Childhood Save",
        "objective": "Reopen a **game you spent afternoons with as a child**. Visit the level or place you still picture first and play it the way you remember. No progress required."
      },
      "de": {
        "name": "Spielstand von früher",
        "objective": "Öffne ein **Spiel, mit dem du als Kind ganze Nachmittage verbracht hast**. Besuche das Level oder den Ort, der dir zuerst einfällt, und spiele wie damals. Du musst nichts voranbringen."
      }
    }
  },
  {
    "id": "back-then",
    "moodIds": [
      "nostalgic"
    ],
    "type": "inspiration",
    "tags": [
      "replay"
    ],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 20,
    "genres": [],
    "translations": {
      "en": {
        "name": "Back Then",
        "objective": "Choose a **game tied to someone you used to play with**. Return to the map, mode, or character you shared, even if you are playing alone today."
      },
      "de": {
        "name": "Weißt du noch",
        "objective": "Nimm ein **Spiel, das dich an jemanden erinnert, mit dem du früher gespielt hast**. Kehre zu eurer Karte, eurem Modus oder eurer Figur zurück, auch wenn du heute allein spielst."
      }
    }
  },
  {
    "id": "screenshot-return",
    "moodIds": [
      "nostalgic"
    ],
    "type": "objective",
    "tags": [
      "photography",
      "replay"
    ],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "genres": [],
    "translations": {
      "en": {
        "name": "Same Place Again",
        "objective": "Find an **old screenshot from a game you can still launch**. Return to that location, match the original camera angle, and **save a new screenshot beside the old one**."
      },
      "de": {
        "name": "Wieder am selben Ort",
        "objective": "Suche einen **alten Screenshot aus einem Spiel, das du noch starten kannst**. Kehre an den Ort zurück, stelle den damaligen Blickwinkel nach und **speichere ein neues Bild neben dem alten**."
      }
    }
  },
  {
    "id": "classic-route",
    "moodIds": [
      "nostalgic"
    ],
    "type": "objective",
    "tags": [
      "racing",
      "replay"
    ],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "genres": [],
    "translations": {
      "en": {
        "name": "The Old Route",
        "objective": "Open an **older racing game with a track and car you remember using**. Bring that car back to the track and **finish one race**, whatever your place."
      },
      "de": {
        "name": "Die alte Strecke",
        "objective": "Starte ein **älteres Rennspiel mit einer Strecke und einem Wagen von damals**. Fahre mit diesem Wagen **ein Rennen auf der Strecke zu Ende**, egal auf welchem Platz."
      }
    }
  }
] satisfies readonly AuthoredQuestDefinition[];
