import type { AuthoredQuestDefinition } from "../questTypes";

export const exploreQuests = [
  {
    "id": "a-side-street",
    "moodIds": [
      "explore"
    ],
    "type": "inspiration",
    "tags": [
      "free-roam",
      "exploration"
    ],
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 15,
    "genres": [],
    "translations": {
      "en": {
        "name": "A Side Street",
        "objective": "Open a game with **a city you barely know**. Leave the mission route and **follow alleys, stairs, and open doors**. See where they lead."
      },
      "de": {
        "name": "Eine Nebenstraße",
        "objective": "Starte ein Spiel mit **einer Stadt, die du kaum kennst**. Verlasse den Missionsweg und **folge Gassen, Treppen und offenen Türen**. Schau, wohin sie führen."
      }
    }
  },
  {
    "id": "deep-dive",
    "moodIds": [
      "explore"
    ],
    "type": "inspiration",
    "tags": [
      "diving",
      "exploration"
    ],
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 20,
    "genres": [],
    "translations": {
      "en": {
        "name": "Deep Dive",
        "objective": "Open **an underwater exploration game**. Leave the waters around your base and **follow an unfamiliar reef or tunnel**. Turn back before your air runs low."
      },
      "de": {
        "name": "Tauchgang",
        "objective": "Starte **ein Spiel mit Unterwasser-Erkundung**. Verlasse die Gewässer um deine Basis und **folge einem unbekannten Riff oder Tunnel**. Kehre um, bevor die Luft knapp wird."
      }
    }
  },
  {
    "id": "unmapped-door",
    "moodIds": [
      "explore"
    ],
    "type": "objective",
    "tags": [
      "exploration"
    ],
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 20,
    "genres": [],
    "translations": {
      "en": {
        "name": "Beyond That Door",
        "objective": "Open a game with **unexplored exits marked on its map**. Enter the nearest reachable new room and **find its next exit** before checking the map again."
      },
      "de": {
        "name": "Hinter der Tür",
        "objective": "Starte ein Spiel mit **markierten unerforschten Ausgängen auf der Karte**. Betritt den nächsten erreichbaren neuen Raum und **finde seinen nächsten Ausgang**, bevor du wieder die Karte öffnest."
      }
    }
  },
  {
    "id": "rooftop-route",
    "moodIds": [
      "explore"
    ],
    "type": "objective",
    "tags": [
      "traversal",
      "exploration"
    ],
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 20,
    "genres": [],
    "translations": {
      "en": {
        "name": "Over the Rooftops",
        "objective": "Open **a city game with climbable buildings**. Climb to an unfamiliar roof, **cross to a second building**, and find a way down."
      },
      "de": {
        "name": "Über die Dächer",
        "objective": "Starte **ein Stadtspiel mit erkletterbaren Gebäuden**. Steig auf ein unbekanntes Dach, **wechsle auf ein zweites Gebäude** und suche einen Abstieg."
      }
    }
  },

  {
    "id": "follow-the-transit",
    "moodIds": [
      "explore"
    ],
    "type": "inspiration",
    "tags": [
      "exploration"
    ],
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 20,
    "genres": [],
    "translations": {
      "en": {
        "name": "Next Stop",
        "objective": "Open a game with **public transport and explorable stops**. Take an unfamiliar line and get off somewhere new. **Wander the streets around the stop**."
      },
      "de": {
        "name": "Nächste Haltestelle",
        "objective": "Starte ein Spiel mit **Nahverkehr und erkundbaren Haltestellen**. Nimm eine unbekannte Linie und steige an einem neuen Ort aus. **Streife durch die umliegenden Straßen**."
      }
    }
  },
] satisfies readonly AuthoredQuestDefinition[];
