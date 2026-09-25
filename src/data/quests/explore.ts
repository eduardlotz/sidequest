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
    "translations": {
      "en": {
        "name": "Deep Dive",
        "objective": "Open **an underwater exploration game**. Leave the waters around your base and **follow an unfamiliar reef or tunnel**. Turn back before your air runs low."
      },
      "de": {
        "name": "Tauchgang",
        "objective": "Starte **ein Spiel mit Unterwasser-Erkundung**. Schwimm von deiner Basis weg und **folge einem Riff oder Tunnel, den du noch nicht kennst**. Kehr um, bevor dir die Luft ausgeht."
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
    "translations": {
      "en": {
        "name": "Beyond That Door",
        "objective": "Open a game with **unexplored exits marked on its map**. Enter the nearest reachable new room and **find its next exit** before checking the map again."
      },
      "de": {
        "name": "Hinter der Tür",
        "objective": "Starte ein Spiel, dessen Karte **einen noch unerforschten Ausgang** zeigt. Geh durch den nächsten erreichbaren Ausgang und **finde einen Weg aus dem neuen Raum**, bevor du wieder auf die Karte schaust."
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
    "translations": {
      "en": {
        "name": "Over the Rooftops",
        "objective": "Open **a city game with climbable buildings**. Climb to an unfamiliar roof, **cross to a second building**, and find a way down."
      },
      "de": {
        "name": "Über die Dächer",
        "objective": "Starte **ein Stadtspiel, in dem du auf Gebäude klettern kannst**. Steig auf ein Dach, auf dem du noch nicht warst, **gelang von dort auf ein zweites Gebäude** und such einen Weg nach unten."
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
    "translations": {
      "en": {
        "name": "Next Stop",
        "objective": "Open a game with **public transport and explorable stops**. Take an unfamiliar line and get off somewhere new. **Wander the streets around the stop**."
      },
      "de": {
        "name": "Nächste Haltestelle",
        "objective": "Starte ein Spiel, in dem du **mit Bus oder Bahn neue Orte erreichen kannst**. Nimm eine Linie, die du noch nicht kennst, steig an einer neuen Haltestelle aus und **schau dich in den Straßen dort um**."
      }
    }
  },
] satisfies readonly AuthoredQuestDefinition[];
