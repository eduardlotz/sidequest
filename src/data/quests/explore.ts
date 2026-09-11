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
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 20,
    "genres": [],
    "translations": {
      "en": {
        "name": "A Side Street",
        "objective": "Open a **game with a city you have barely explored**. Leave the mission route and follow alleys, stairways, and open doorways. Let the city decide where this session goes."
      },
      "de": {
        "name": "Eine Nebenstraße",
        "objective": "Starte ein **Spiel mit einer Stadt, die du kaum kennst**. Verlasse den Missionsweg und folge Gassen, Treppen und offenen Türen. Schau, wohin dich die Stadt führt."
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
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 20,
    "genres": [],
    "translations": {
      "en": {
        "name": "Deep Dive",
        "objective": "Choose an **underwater exploration game** and head beyond the waters around your base. Follow an unfamiliar reef or tunnel, turning back when your air supply calls for it."
      },
      "de": {
        "name": "Tauchgang",
        "objective": "Nimm ein **Spiel mit Unterwasser-Erkundung** und verlasse die Gewässer um deine Basis. Folge einem unbekannten Riff oder Tunnel und kehre um, wenn dein Luftvorrat es verlangt."
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
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "genres": [],
    "translations": {
      "en": {
        "name": "Beyond That Door",
        "objective": "Continue a **game whose map shows unexplored room exits**. Follow the nearest reachable open edge, enter the new room, and **find its next exit or passage** before returning to the map."
      },
      "de": {
        "name": "Hinter der Tür",
        "objective": "Setze ein **Spiel fort, dessen Karte unerforschte Raumausgänge zeigt**. Gehe zum nächsten erreichbaren offenen Rand, betritt den neuen Raum und **finde seinen nächsten Ausgang oder Durchgang**, bevor du wieder die Karte öffnest."
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
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "genres": [],
    "translations": {
      "en": {
        "name": "Over the Rooftops",
        "objective": "In a **city game with climbable buildings**, look for a roof you have not visited. Find a way up from the street, then **cross to a second building and look for a route down**."
      },
      "de": {
        "name": "Über die Dächer",
        "objective": "Suche in einem **Stadtspiel mit erkletterbaren Gebäuden** ein Dach, auf dem du noch nicht warst. Finde einen Weg von der Straße hinauf, **wechsle auf ein zweites Gebäude und suche dort einen Abstieg**."
      }
    }
  }
] satisfies readonly AuthoredQuestDefinition[];
