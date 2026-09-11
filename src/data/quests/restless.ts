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
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 15,
    "genres": [],
    "translations": {
      "en": {
        "name": "Keep Moving",
        "objective": "Open a game with **free running, swinging, or grappling**. **Chain the moves that keep you going**. Leave mission markers for another session."
      },
      "de": {
        "name": "In Bewegung",
        "objective": "Starte ein Spiel mit **freiem Rennen, Schwingen oder Greifhaken**. **Verbinde die Bewegungen, die dich in Fahrt halten**. Missionsmarkierungen kommen ein andermal dran."
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
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 15,
    "genres": [],
    "translations": {
      "en": {
        "name": "Flat Out",
        "objective": "Open **an arcade racer with quick races**. Take your usual car and **head straight to the track**. Spend this session racing instead of tuning."
      },
      "de": {
        "name": "Vollgas",
        "objective": "Starte **ein Arcade-Rennspiel mit schnellen Rennen**. Nimm deinen gewohnten Wagen und **fahr direkt auf die Strecke**. Diese Session gehört dem Fahren statt dem Tuning."
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
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 15,
    "genres": [],
    "translations": {
      "en": {
        "name": "Three Songs",
        "objective": "Open **a rhythm game**. Pick an easy song, one at your usual difficulty, and one a step harder. **Finish all three without restarting**."
      },
      "de": {
        "name": "Drei Songs",
        "objective": "Starte **ein Rhythmusspiel**. Wähle einen leichten Song, einen auf deiner üblichen Stufe und einen etwas schwereren. **Spiele alle drei ohne Neustart zu Ende**."
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
        "objective": "Open **a skating game with trick combos**. On a familiar stretch, **land five different tricks in one line without falling**. Stop after success or three attempts."
      },
      "de": {
        "name": "Fünfer-Line",
        "objective": "Starte **ein Skatespiel mit Trickkombos**. **Lande fünf verschiedene Tricks in einer Line ohne Sturz** auf einem vertrauten Abschnitt. Nach Erfolg oder drei Versuchen ist Schluss."
      }
    }
  },

  {
    "id": "arcade-brawler-burst",
    "moodIds": [
      "restless"
    ],
    "type": "inspiration",
    "tags": [],
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 15,
    "genres": [],
    "translations": {
      "en": {
        "name": "Into the Brawl",
        "objective": "Open **an arcade brawler with short stages**. Pick a familiar character and **jump into the next fight**. Leave scores and character comparisons for later."
      },
      "de": {
        "name": "Rein ins Getümmel",
        "objective": "Starte **ein Arcade-Prügelspiel mit kurzen Abschnitten**. Nimm eine vertraute Figur und **stürz dich ins nächste Gerangel**. Punkte und Figurenvergleiche kommen später."
      }
    }
  },
] satisfies readonly AuthoredQuestDefinition[];
