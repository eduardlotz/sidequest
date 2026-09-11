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
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 15,
    "genres": [],
    "translations": {
      "en": {
        "name": "Childhood Save",
        "objective": "Open **a game you loved as a child**. Visit the first level or place you remember and **play it like you used to**. Progress can wait."
      },
      "de": {
        "name": "Spielstand von früher",
        "objective": "Starte **ein Lieblingsspiel aus deiner Kindheit**. Besuche das Level oder den Ort, der dir zuerst einfällt, und **spiele wie damals**. Fortschritt kann warten."
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
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 15,
    "genres": [],
    "translations": {
      "en": {
        "name": "Back Then",
        "objective": "Open **a game tied to an old gaming friend**. **Return to your shared map, mode, or character**, even if you are playing alone today."
      },
      "de": {
        "name": "Weißt du noch",
        "objective": "Starte **ein Spiel aus einer früheren Spielfreundschaft**. **Kehre zu eurer Karte, eurem Modus oder eurer Figur zurück**, auch wenn du heute allein spielst."
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
    "suggestedDurationMinutes": 10,
    "genres": [],
    "translations": {
      "en": {
        "name": "Same Place Again",
        "objective": "Find **an old screenshot from a playable game**. Return to that spot and match its camera angle. **Save a new screenshot beside the old one**."
      },
      "de": {
        "name": "Wieder am selben Ort",
        "objective": "Such **einen alten Screenshot aus einem noch spielbaren Spiel**. Kehre an den Ort zurück und stelle den Blickwinkel nach. **Speichere ein neues Bild neben dem alten**."
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
        "objective": "Open **an older racing game**. Take a car you used to drive to a familiar track and **finish one race**. Your placing does not matter."
      },
      "de": {
        "name": "Die alte Strecke",
        "objective": "Starte **ein älteres Rennspiel**. Nimm einen Wagen von früher auf eine vertraute Strecke und **fahre ein Rennen zu Ende**. Deine Platzierung ist egal."
      }
    }
  },

  {
    "id": "return-to-first-character",
    "moodIds": [
      "nostalgic"
    ],
    "type": "inspiration",
    "tags": [
      "replay"
    ],
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 20,
    "genres": [],
    "translations": {
      "en": {
        "name": "Your First Character",
        "objective": "Load **your first character or an early save**. Revisit a place where you learned the game and **play with your old setup**. Change only what you need."
      },
      "de": {
        "name": "Deine erste Figur",
        "objective": "Lade **deine erste Figur oder einen frühen Spielstand**. Besuche einen Ort, an dem du das Spiel gelernt hast, und **spiele mit deinem alten Setup**. Ändere nur das Nötigste."
      }
    }
  },
] satisfies readonly AuthoredQuestDefinition[];
