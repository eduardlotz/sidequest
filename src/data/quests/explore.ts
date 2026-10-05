import { defineQuests } from "./defineQuests";

export const ExploreQuests = defineQuests([
  {
    "id": "a-side-street",
    "moodIds": ["explore"],
    "type": "inspiration",
    "tags": ["free-roam", "exploration"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "A Side Street",
        "objective": "Open a game with **a city you barely know**. Leave the mission route and **follow alleys, stairs, and open doors**. See where they lead.",
        "gameObjective": "In a city you barely know in **{{game}}**, leave the mission route and **follow alleys, stairs and open doors**."
      },
      "de": {
        "name": "Eine Nebenstraße",
        "objective": "Starte ein Spiel mit **einer Stadt, die du kaum kennst**. Verlasse den Missionsweg und **folge Gassen, Treppen und offenen Türen**. Schau, wohin sie führen.",
        "gameObjective": "Verlass in **{{game}}** in einer kaum bekannten Stadt den Missionsweg und **folge Gassen, Treppen und offenen Türen**."
      }
    },
    "experience": {
      "family": "city-side-streets",
      "cardMetadata": { "genreIds": ["adventure"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["free-roam", "exploration"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Explorable city streets and accessible doors",
          "de": "Erkundbare Stadtstraßen und zugängliche Türen",
          "chips": {"en": ["City streets"], "de": ["Stadtstraßen"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        },
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure"],
    "customGameCompatibility": {
      "capabilityIds": ["open-world"]
    }
  },
  {
    "id": "deep-dive",
    "moodIds": ["explore"],
    "type": "inspiration",
    "tags": ["diving", "exploration"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Deep Dive",
        "objective": "Open **an underwater exploration game**. **Follow an unfamiliar reef or tunnel** and see what lies beneath the surface. Replenish your air as needed.",
        "gameObjective": "In **{{game}}**, **follow an unfamiliar reef or tunnel** and see what lies beneath the surface. Replenish your air as needed."
      },
      "de": {
        "name": "Tauchgang",
        "objective": "Starte ein **Spiel mit Unterwasser-Erkundung**. **Folge einem Riff oder Tunnel, den du noch nicht kennst**, und schau, was du unter der Oberfläche entdeckst. Hol Luft, wenn du sie brauchst.",
        "gameObjective": "**Folge in {{game}} einem Riff oder Tunnel, den du noch nicht kennst**, und schau, was du unter der Oberfläche entdeckst. Hol Luft, wenn du sie brauchst."
      }
    },
    "experience": {
      "family": "diving",
      "cardMetadata": { "genreIds": ["adventure"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["diving", "exploration"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Erreichbares Riff oder Tunnel; Luftversorgung bereit",
          "en": "Reachable reef or tunnel; air supplies ready",
          "chips": {"en": ["Reef", "Air supply"], "de": ["Riff", "Luftversorgung"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        },
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure"],
    "customGameCompatibility": {
      "capabilityIds": ["diving", "open-world"]
    }
  },
  {
    "id": "unmapped-door",
    "moodIds": ["explore"],
    "type": "objective",
    "tags": ["exploration"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Beyond That Door",
        "objective": "Open a game with **unexplored exits marked on its map**. Enter the nearest reachable new room and **find its next exit** before checking the map again.",
        "gameObjective": "With an unexplored exit marked on the map in **{{game}}**, enter its reachable new room and **find the next exit before checking the map again**."
      },
      "de": {
        "name": "Hinter der Tür",
        "objective": "Starte ein Spiel, dessen Karte **einen noch unerforschten Ausgang** zeigt. Geh durch den nächsten erreichbaren Ausgang und **finde einen Weg aus dem neuen Raum**, bevor du wieder auf die Karte schaust.",
        "gameObjective": "Betritt in **{{game}}** hinter einem markierten unerforschten Ausgang den erreichbaren neuen Raum und **finde den nächsten Ausgang, bevor du wieder auf die Karte schaust**."
      }
    },
    "experience": {
      "family": "unmapped-room",
      "cardMetadata": { "genreIds": ["adventure", "narrative"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["exploration"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Map marks reachable unexplored room exits",
          "de": "Karte markiert erreichbare unerforschte Raumausgänge",
          "chips": {"en": ["Map"], "de": ["Karte"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "narrative"],
    "customGameOverrideOnly": true
  },
  {
    "id": "rooftop-route",
    "moodIds": ["explore"],
    "type": "objective",
    "tags": ["traversal", "exploration"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Over the Rooftops",
        "objective": "Open **a city game with climbable buildings**. Climb to an unfamiliar roof, **cross to a second building**, and find a way down.",
        "gameObjective": "With climbable city buildings in **{{game}}**, **climb onto an unfamiliar roof, cross to a second building and find a way down**."
      },
      "de": {
        "name": "Über die Dächer",
        "objective": "Starte **ein Stadtspiel, in dem du auf Gebäude klettern kannst**. Steig auf ein Dach, auf dem du noch nicht warst, **gelang von dort auf ein zweites Gebäude** und such einen Weg nach unten.",
        "gameObjective": "**Kletter in {{game}} auf ein unbekanntes Stadtdach, gelang auf ein zweites Gebäude und such einen Weg nach unten**."
      }
    },
    "experience": {
      "family": "rooftop-crossing",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["traversal", "exploration"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Two reachable climbable buildings",
          "de": "Zwei erreichbare erkletterbare Gebäude",
          "chips": {"en": ["Climbable buildings"], "de": ["Erkletterbare Gebäude"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        },
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "platformer", "simulation", "sandbox"],
    "customGameCompatibility": {
      "capabilityIds": ["advanced-traversal", "open-world"]
    }
  },
  {
    "id": "follow-the-transit",
    "moodIds": ["explore"],
    "type": "inspiration",
    "tags": ["exploration"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Next Stop",
        "objective": "Open a game with **public transport and explorable stops**. Take an unfamiliar line and get off somewhere new. **Wander the streets around the stop**.",
        "gameObjective": "With public transport and explorable stops in **{{game}}**, ride an unfamiliar line. Get off somewhere new and **wander the streets around the stop**."
      },
      "de": {
        "name": "Nächste Haltestelle",
        "objective": "Starte ein Spiel, in dem du **mit Bus oder Bahn neue Orte erreichen kannst**. Nimm eine Linie, die du noch nicht kennst, steig an einer neuen Haltestelle aus und **schau dich in den Straßen dort um**.",
        "gameObjective": "Nimm in **{{game}}** eine unbekannte öffentliche Verkehrslinie mit erkundbaren Haltestellen. Steig an einem neuen Ort aus und **schau dich in den Straßen dort um**."
      }
    },
    "experience": {
      "family": "transit-roaming",
      "cardMetadata": { "genreIds": ["adventure", "simulation"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["exploration"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Rideable public transport with explorable stops",
          "de": "Nutzbare öffentliche Verkehrsmittel mit erkundbaren Haltestellen",
          "chips": {"en": ["Transit"], "de": ["Nahverkehr"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        },
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "simulation"],
    "customGameOverrideOnly": true
  },
  {
    "id": "beyond-the-map",
    "moodIds": ["explore", "curious"],
    "type": "objective",
    "tags": ["exploration"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Beyond the Map",
        "objective": "Open a **freely explorable game**. Pick an unvisited landmark and **find your own way there**, using the world around you to navigate.",
        "gameObjective": "Open **{{game}}**. Pick an unvisited landmark and **find your own way there**, using the world around you to navigate."
      },
      "de": {
        "name": "Abseits der Karte",
        "objective": "Starte ein **frei erkundbares Spiel**. Such dir einen Ort, an dem du noch nicht warst, und **find selbst einen Weg dorthin**. Orientier dich an der Spielwelt.",
        "gameObjective": "Starte **{{game}}**. Such dir einen Ort, an dem du noch nicht warst, und **find selbst einen Weg dorthin**. Orientier dich an der Spielwelt."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["open-world"]
    },
    "experience": {
      "family": "world-navigation",
      "cardMetadata": { "genreIds": ["adventure"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["exploration"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Ein unbesuchter Ort, zu dem du einen Weg finden kannst",
          "en": "Unvisited landmark with a traversable route",
          "chips": {"en": ["Landmark"], "de": ["Wahrzeichen"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        },
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure"]
  },
  {
    "id": "planet-compare",
    "moodIds": ["explore", "curious"],
    "type": "experiment",
    "tags": ["space", "exploration"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Two Worlds",
        "objective": "Open a **space game with landable planets**. Explore two different-looking planets and **compare the terrain you travel through**.",
        "gameObjective": "Open **{{game}}**. Explore two different-looking planets and **compare the terrain you travel through**."
      },
      "de": {
        "name": "Zwei Welten",
        "objective": "Starte ein **Weltraumspiel mit begehbaren Planeten**. Erkunde zwei unterschiedlich aussehende Planeten und **vergleiche ihr Gelände**.",
        "gameObjective": "Starte **{{game}}**. Erkunde zwei unterschiedlich aussehende Planeten und **vergleiche ihr Gelände**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["space-exploration"]
    },
    "experience": {
      "family": "planet-terrain-comparison",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["space", "exploration"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Zwei unterschiedlich aussehende Planeten in Reichweite",
          "en": "Two different-looking landable planets in reach",
          "chips": {"en": ["Planets"], "de": ["Planeten"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        },
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "survival", "sandbox"]
  },
  {
    "id": "fish-two-waters",
    "moodIds": ["explore"],
    "type": "objective",
    "tags": ["fishing", "exploration"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Another Fishing Spot",
        "objective": "Open a **game with several fishing spots**. Leave your usual fishing spot and **catch one fish somewhere different**.",
        "gameObjective": "Open **{{game}}**. Leave your usual fishing spot and **catch one fish somewhere different**."
      },
      "de": {
        "name": "Eine andere Angelstelle",
        "objective": "Starte ein **Spiel mit mehreren Angelstellen**. Verlasse deinen üblichen Angelplatz und **fange an einer anderen Stelle einen Fisch**.",
        "gameObjective": "Starte **{{game}}**. Verlasse deinen üblichen Angelplatz und **fange an einer anderen Stelle einen Fisch**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["fishing"]
    },
    "experience": {
      "family": "new-fishing-spot",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["fishing", "exploration"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Angel bereit; eine andere Angelstelle erreichbar",
          "en": "Rod ready; another fishing spot reachable",
          "chips": {"en": ["Rod"], "de": ["Angel"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        },
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "simulation", "cozy"]
  },
  {
    "id": "movement-new-line",
    "moodIds": ["explore", "restless"],
    "type": "objective",
    "tags": ["traversal", "new-approach"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "A New Way Up",
        "objective": "Open a **game with climbing or movement abilities**. Pick a reachable ledge or platform and **find a new route there**.",
        "gameObjective": "Open **{{game}}**. Pick a reachable ledge or platform and **find a new route there**."
      },
      "de": {
        "name": "Ein neuer Weg",
        "objective": "Starte ein **Spiel mit Klettern oder Bewegungsfähigkeiten**. Wähle einen erreichbaren Vorsprung oder eine Plattform und **finde einen neuen Weg dorthin**.",
        "gameObjective": "Starte **{{game}}**. Wähle einen erreichbaren Vorsprung oder eine Plattform und **finde einen neuen Weg dorthin**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["advanced-traversal"]
    },
    "experience": {
      "family": "new-traversal-route",
      "cardMetadata": { "genreIds": ["adventure", "platformer"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["traversal"],
      "rules": [],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        },
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "platformer"]
  },
  {
    "id": "view-from-below",
    "moodIds": ["explore", "curious"],
    "type": "objective",
    "tags": ["exploration", "traversal"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Above and Below",
        "objective": "Open a **game with exploration and climbing**. Look around the foot of a climbable hill or structure. Climb up and **find a landmark hidden from below**.",
        "gameObjective": "Open **{{game}}**. Look around the foot of a climbable hill or structure. Climb up and **find a landmark hidden from below**."
      },
      "de": {
        "name": "Oben und unten",
        "objective": "Starte ein **Spiel mit Erkundung und Klettern**. Schau dich am Fuß eines Hügels oder Bauwerks um. Kletter hinauf und **find oben einen Ort, den du von unten nicht sehen konntest**.",
        "gameObjective": "Starte **{{game}}**. Schau dich am Fuß eines Hügels oder Bauwerks um. Kletter hinauf und **find oben einen Ort, den du von unten nicht sehen konntest**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["open-world", "advanced-traversal"]
    },
    "experience": {
      "family": "climb-for-view",
      "cardMetadata": { "genreIds": ["adventure"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["exploration", "traversal"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Erreichbarer Aussichtspunkt mit verdecktem Gelände darunter",
          "en": "Reachable viewpoint revealing terrain hidden from below",
          "chips": {"en": ["Viewpoint"], "de": ["Aussichtspunkt"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        },
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure"]
  },
  {
    "id": "planet-horizon-loop",
    "moodIds": ["explore", "focused"],
    "type": "inspiration",
    "tags": ["space", "exploration"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Beyond the Landing",
        "objective": "Open a **space game with landable planets**. On a safe planet, **walk out toward the formations on the horizon** and let the terrain draw you farther.",
        "gameObjective": "Open **{{game}}**. On a safe planet, **walk out toward the formations on the horizon** and let the terrain draw you farther."
      },
      "de": {
        "name": "Jenseits des Landeplatzes",
        "objective": "Starte ein **Weltraumspiel mit begehbaren Planeten**. **Geh auf einem sicheren Planeten auf die Formen am Horizont zu** und lass dich vom Gelände weiterführen.",
        "gameObjective": "Starte **{{game}}**. **Geh auf einem sicheren Planeten auf die Formen am Horizont zu** und lass dich vom Gelände weiterführen."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["space-exploration"]
    },
    "experience": {
      "family": "landing-site-roam",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "open",
      "activities": ["space", "exploration"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Sicherer begehbarer Planet",
          "en": "Safe landable planet",
          "chips": {"en": ["Planet"], "de": ["Planet"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        },
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "survival", "sandbox"]
  },
  {
    "id": "stealth-second-passage",
    "moodIds": ["explore", "curious"],
    "type": "experiment",
    "tags": ["stealth", "no-detection"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Another Way Past",
        "objective": "Open a **game with patrolling guards**. In a replayable solo area, revisit a familiar patrol. **Sneak past unseen by a different route**.",
        "gameObjective": "Open **{{game}}**. In a replayable solo area, revisit a familiar patrol. **Sneak past unseen by a different route**."
      },
      "de": {
        "name": "Anders vorbeikommen",
        "objective": "Starte ein **Spiel mit patrouillierenden Wachen**. Besuche in einem wiederholbaren Solo-Bereich eine bekannte Patrouille. **Schleiche auf einem anderen Weg ungesehen vorbei**.",
        "gameObjective": "Starte **{{game}}**. Besuche in einem wiederholbaren Solo-Bereich eine bekannte Patrouille. **Schleiche auf einem anderen Weg ungesehen vorbei**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["stealth", "moving-patrols", "replayable-encounters"]
    },
    "experience": {
      "family": "alternate-stealth-route",
      "cardMetadata": { "genreIds": ["stealth"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["stealth"],
      "rules": ["no-detection"],
      "prerequisites": [
        {
          "de": "Bekannte Patrouille; anderer Weg im wiederholbaren Solo-Bereich",
          "en": "Familiar patrol; alternate route in a replayable solo area",
          "chips": {"en": ["Patrol"], "de": ["Patrouille"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["stealth"]
  },
  {
    "id": "drive-with-landmarks",
    "moodIds": ["explore", "focused"],
    "type": "objective",
    "tags": ["driving", "exploration"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "By Landmarks",
        "objective": "Open a **game with free driving**. Choose two nearby places visible from the road. **Drive between them without a navigation waypoint**. Find your way back from any wrong turns.",
        "gameObjective": "Open **{{game}}**. Choose two nearby places visible from the road. **Drive between them without a navigation waypoint**. Find your way back from any wrong turns."
      },
      "de": {
        "name": "Nach Orientierungspunkten",
        "objective": "Starte ein **Spiel mit freien Autofahrten**. Such dir zwei Orte in der Nähe, die du von der Straße erkennen kannst. **Fahr ohne Wegpunkt von einem zum anderen**. Wenn du falsch abbiegst, find selbst zurück.",
        "gameObjective": "Starte **{{game}}**. Such dir zwei Orte in der Nähe, die du von der Straße erkennen kannst. **Fahr ohne Wegpunkt von einem zum anderen**. Wenn du falsch abbiegst, find selbst zurück."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["free-driving"]
    },
    "experience": {
      "family": "driving-navigation",
      "cardMetadata": { "genreIds": ["adventure", "racing"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["driving", "exploration"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Zwei Orte, die du von der Straße erkennen kannst",
          "en": "Two landmarks visible from the road",
          "chips": {"en": ["Landmarks"], "de": ["Wahrzeichen"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        },
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "racing"]
  },
  {
    "id": "collectible-new-corner",
    "moodIds": ["explore", "progress"],
    "type": "objective",
    "tags": ["collectibles", "exploration"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "One Unvisited Corner",
        "objective": "Open a **freely explorable game with collectibles**. Pick a nearby area with gaps in its collection. Check its side paths and **find one new tracked item**.",
        "gameObjective": "Open **{{game}}**. Pick a nearby area with gaps in its collection. Check its side paths and **find one new tracked item**."
      },
      "de": {
        "name": "Eine neue Ecke",
        "objective": "Starte ein **frei erkundbares Spiel mit Sammelobjekten**. Wähle ein nahes Gebiet mit Lücken in seiner Sammlung. Suche an Seitenwegen und **finde ein Sammelobjekt, das dir noch fehlt**.",
        "gameObjective": "Starte **{{game}}**. Wähle ein nahes Gebiet mit Lücken in seiner Sammlung. Suche an Seitenwegen und **finde ein Sammelobjekt, das dir noch fehlt**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["collectibles", "open-world"]
    },
    "experience": {
      "family": "new-area-collectible",
      "cardMetadata": { "genreIds": ["adventure", "racing"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["collectibles", "exploration"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Erreichbares Gebiet mit noch fehlenden Sammelobjekten",
          "en": "Reachable area with missing collectibles",
          "chips": {"en": ["Missing collectibles"], "de": ["Fehlende Sammelobjekte"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        },
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "racing"]
  },
  {
    "id": "hunt-familiar-terrain",
    "moodIds": ["explore"],
    "type": "inspiration",
    "tags": ["hunting", "exploration"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Read the Terrain",
        "objective": "Open a **game with animal hunting**. Head into a hunting area you can already reach. **Look for how the terrain shelters its wildlife** and follow sightings while you play. You do not need a rare animal or a full bag.",
        "gameObjective": "In **{{game}}**: Head into a hunting area you can already reach. **Look for how the terrain shelters its wildlife** and follow sightings while you play. You do not need a rare animal or a full bag."
      },
      "de": {
        "name": "Das Gelände lesen",
        "objective": "Starte ein **Spiel mit Tierjagd**. Geh in ein bereits erreichbares Jagdgebiet. **Achte darauf, wo das Gelände Wildtieren Schutz bietet**, und folge Sichtungen beim Spielen. Seltene Tiere oder eine volle Tasche sind kein Ziel.",
        "gameObjective": "In **{{game}}**: Geh in ein bereits erreichbares Jagdgebiet. **Achte darauf, wo das Gelände Wildtieren Schutz bietet**, und folge Sichtungen beim Spielen. Seltene Tiere oder eine volle Tasche sind kein Ziel."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["hunting"]
    },
    "experience": {
      "family": "hunting",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "open",
      "activities": ["hunting", "exploration"],
      "rules": [],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        },
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "simulation", "survival"]
  },
  {
    "id": "skate-find-a-spot",
    "moodIds": ["explore", "restless"],
    "type": "inspiration",
    "tags": ["skating"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "A Spot to Skate",
        "objective": "Open a **skating game with grinds and flip tricks**. Find a ledge, rail, or bank you have not spent much time on. **Build your skating session around that spot** and try the approaches its shape suggests.",
        "gameObjective": "In **{{game}}**: Find a ledge, rail, or bank you have not spent much time on. **Build your skating session around that spot** and try the approaches its shape suggests."
      },
      "de": {
        "name": "Ein Spot zum Skaten",
        "objective": "Starte ein **Skatespiel mit Grinds und Flip-Tricks**. Such dir eine Kante, ein Geländer oder eine Schräge, an der du selten fährst. **Bleib für diese Session dort und probier verschiedene Anfahrten und Tricks aus**.",
        "gameObjective": "In **{{game}}**: Such dir eine Kante, ein Geländer oder eine Schräge, an der du selten fährst. **Bleib für diese Session dort und probier verschiedene Anfahrten und Tricks aus**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["skate-tricks"]
    },
    "experience": {
      "family": "skating",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["skating"],
      "rules": [],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        },
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "extract-branch-and-return",
    "moodIds": ["explore", "curious"],
    "type": "experiment",
    "tags": ["extraction", "exploration"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "One Side Route",
        "objective": "Open a **game with solo extraction runs**. On a solo map you already know, try one nearby side path away from your usual loot route. **Rejoin a known route and head for extraction**. Extraction or elimination ends the run.",
        "gameObjective": "In **{{game}}**: On a solo map you already know, try one nearby side path away from your usual loot route. **Rejoin a known route and head for extraction**. Extraction or elimination ends the run."
      },
      "de": {
        "name": "Ein Seitenweg",
        "objective": "Starte ein **Spiel mit Solo-Extraktionsrunden**. Probiere auf einer bekannten Solo-Karte einen nahen Seitenweg abseits deiner üblichen Beuteroute aus. **Kehre auf einen bekannten Weg zurück und geh zur Extraktion**. Extraktion oder Ausscheiden beendet die Runde.",
        "gameObjective": "In **{{game}}**: Probiere auf einer bekannten Solo-Karte einen nahen Seitenweg abseits deiner üblichen Beuteroute aus. **Kehre auf einen bekannten Weg zurück und geh zur Extraktion**. Extraktion oder Ausscheiden beendet die Runde."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["extraction-runs"]
    },
    "experience": {
      "family": "extraction-route-trial",
      "cardMetadata": { "genreIds": ["survival", "shooter"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["extraction", "exploration"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Vertraute Solo-Map mit erreichbarer Extraktion",
          "en": "Familiar solo map with reachable extraction",
          "chips": {"en": ["Extraction point"], "de": ["Extraktionspunkt"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        },
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["survival", "shooter"]
  },
  {
    "id": "platform-look-for-branch",
    "moodIds": ["explore", "curious"],
    "type": "objective",
    "tags": ["exploration", "traversal"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Off the Main Line",
        "objective": "Open a **platformer with optional paths**. **Follow a reachable ledge or side passage you usually skip to its end**.",
        "gameObjective": "Open **{{game}}**. **Follow a reachable ledge or side passage you usually skip to its end**."
      },
      "de": {
        "name": "Neben der Hauptroute",
        "objective": "Starte ein **Plattformer mit optionalen Wegen**. **Folge einem erreichbaren Vorsprung oder Seitengang, den du sonst auslässt, bis zum Ende**.",
        "gameObjective": "Starte **{{game}}**. **Folge einem erreichbaren Vorsprung oder Seitengang, den du sonst auslässt, bis zum Ende**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["platforming", "missions-or-levels"],
      "genreIds": ["platformer"]
    },
    "experience": {
      "family": "platform-side-path",
      "cardMetadata": { "genreIds": ["platformer"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["exploration", "traversal"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Erreichbarer optionaler Weg",
          "en": "Reachable optional path",
          "chips": {"en": ["Side path"], "de": ["Nebenweg"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["platformer"]
  },
  {
    "id": "scout-a-new-angle",
    "moodIds": ["explore", "curious"],
    "type": "experiment",
    "tags": ["scouting", "exploration", "new-approach"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "A Different View",
        "objective": "Open a **game with a controllable scouting camera or drone**. View a room from two positions in solo or training play and **try an approach you discovered through those views**.",
        "gameObjective": "In **{{game}}**, view a room from two positions with a camera or drone and **try an approach you discovered through those views**. Use solo or training play."
      },
      "de": {
        "name": "Ein anderer Blick",
        "objective": "Starte ein **Spiel mit einer steuerbaren Aufklärungskamera oder Drohne**. Sieh dir in einem Solo- oder Trainingsbereich einen Raum aus zwei Positionen an und **probier einen Zugang aus, den du dadurch entdeckt hast**.",
        "gameObjective": "Sieh dir in **{{game}}** mit Kamera oder Drohne einen Raum aus zwei Positionen an. **Probier einen Zugang aus, den du dadurch entdeckt hast**. Bleib im Solo- oder Trainingsbereich."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["remote-scouting"],
      "genreIds": ["shooter", "stealth"]
    },
    "experience": {
      "family": "scout-route-comparison",
      "cardMetadata": { "genreIds": ["shooter", "stealth"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["scouting", "exploration"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Steuerbare Kamera oder Drohne; Solo-/Trainingsbereich",
          "en": "Controllable camera or drone; solo/training area",
          "chips": {"en": ["Camera or drone"], "de": ["Kamera oder Drohne"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "stealth"]
  },
  {
    "id": "open-world-follow-the-edge",
    "moodIds": ["explore", "curious"],
    "type": "objective",
    "tags": ["exploration", "on-foot"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Follow the Edge",
        "objective": "Open a **freely explorable game**. Follow a wall, coast, or cliff on foot and **reach a landmark from a direction you have not tried**.",
        "gameObjective": "Open **{{game}}**. Follow a wall, coast, or cliff on foot and **reach a landmark from a direction you have not tried**."
      },
      "de": {
        "name": "Dem Rand folgen",
        "objective": "Starte ein **frei erkundbares Spiel**. Folge einer Mauer, Küste oder Klippe zu Fuß und **erreiche einen Ort aus einer Richtung, die du noch nicht ausprobiert hast**.",
        "gameObjective": "Starte **{{game}}**. Folge einer Mauer, Küste oder Klippe zu Fuß und **erreiche einen Ort aus einer Richtung, die du noch nicht ausprobiert hast**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["open-world"]
    },
    "experience": {
      "family": "edge-led-route",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["exploration"],
      "rules": ["on-foot"],
      "prerequisites": [
        {
          "de": "Begehbarer Weg entlang einer Mauer, Küste oder Klippe",
          "en": "Walkable route along a wall, coast or cliff",
          "chips": {"en": ["Coastal path"], "de": ["Küstenweg"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        },
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "simulation", "survival", "sandbox"]
  },
  {
    "id": "space-neighboring-stop",
    "moodIds": ["explore", "low-energy"],
    "type": "objective",
    "tags": ["space", "exploration"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "The Next Stop",
        "objective": "Open a **space game with a familiar destination nearby**. Travel there and **land or dock**. Take a look around when you arrive.",
        "gameObjective": "In **{{game}}**, travel to a familiar nearby destination and **land or dock**. Take a look around when you arrive."
      },
      "de": {
        "name": "Der nächste Halt",
        "objective": "Starte ein **Weltraumspiel mit einem vertrauten Reiseziel in der Nähe**. Reise dorthin und **lande oder docke an**. Schau dich am Ziel um.",
        "gameObjective": "Reise in **{{game}}** zu einem vertrauten Ziel in der Nähe und **lande oder docke an**. Schau dich am Ziel um."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["space-exploration"]
    },
    "experience": {
      "family": "familiar-space-stop",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["space", "exploration"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Bekanntes Ziel mit Landeplatz oder Dock in Reichweite",
          "en": "Known destination with a landing site or dock in reach",
          "chips": {"en": ["Landing site"], "de": ["Landeplatz"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        },
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "simulation", "sandbox"]
  },
  {
    "id": "explore-cross-a-district",
    "moodIds": ["explore"],
    "type": "inspiration",
    "tags": ["exploration", "on-foot"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Cross a District",
        "objective": "Open an open world with distinct districts or regions. Start near one border and **cross the neighboring district on foot**. Let its streets, terrain, and local activity decide the route.",
        "gameObjective": "Open {{game}}. Start near one border and **cross the neighboring district on foot**. Let its streets, terrain, and local activity decide the route."
      },
      "de": {
        "name": "Durch ein Viertel",
        "objective": "Starte eine offene Welt mit mehreren Vierteln oder Regionen. Beginne nahe einer Grenze und **durchquere das benachbarte Viertel zu Fuß**. Lass Straßen, Gelände und lokale Ereignisse den Weg bestimmen.",
        "gameObjective": "Starte {{game}}. Beginne nahe einer Grenze und **durchquere das benachbarte Viertel zu Fuß**. Lass Straßen, Gelände und lokale Ereignisse den Weg bestimmen."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["open-world"],
      "match": "all"
    },
    "experience": {
      "family": "district-roaming",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "open",
      "activities": ["exploration"],
      "rules": ["on-foot"],
      "prerequisites": [
        {
          "de": "Ein benachbartes Viertel oder Gebiet erreichbar",
          "en": "Neighboring district or region reachable",
          "chips": {"en": ["Neighboring district"], "de": ["Nachbarviertel"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        },
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "rpg", "sandbox"]
  },
  {
    "id": "explore-leave-the-route",
    "moodIds": ["explore"],
    "type": "inspiration",
    "tags": ["exploration"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Leave the Route",
        "objective": "Open an open world with a journey already marked. Start toward the marker, then **take one promising side road**. Explore it without worrying about the original arrival time.",
        "gameObjective": "Open {{game}}. Start toward the marker, then **take one promising side road**. Explore it without worrying about the original arrival time."
      },
      "de": {
        "name": "Den Weg verlassen",
        "objective": "Starte eine offene Welt mit einem bereits markierten Ziel. Geh erst in Richtung Zielmarkierung und **bieg dann auf einen Seitenweg ab**, der interessant aussieht. Erkunde ihn, ohne dich um dein ursprüngliches Ziel zu kümmern.",
        "gameObjective": "Starte {{game}}. Geh erst in Richtung Zielmarkierung und **bieg dann auf einen Seitenweg ab**, der interessant aussieht. Erkunde ihn, ohne dich um dein ursprüngliches Ziel zu kümmern."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["open-world"],
      "match": "all"
    },
    "experience": {
      "family": "mission-side-roaming",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "open",
      "activities": ["exploration"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Markiertes Ziel; erreichbarer Seitenweg",
          "en": "Marked destination; reachable side path",
          "chips": {"en": ["Side path"], "de": ["Nebenweg"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        },
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "rpg", "sandbox"]
  },
  {
    "id": "explore-round-the-headland",
    "moodIds": ["explore"],
    "type": "objective",
    "tags": ["diving", "exploration"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Round the Headland",
        "objective": "Open a **game with open-water swimming**. Choose a headland whose far side you have not seen and **swim around to that side**. Stay within safe water.",
        "gameObjective": "In **{{game}}**, choose a headland whose far side you have not seen and **swim around to that side**. Stay within safe water."
      },
      "de": {
        "name": "Um die Landzunge",
        "objective": "Starte **ein Spiel mit Schwimmen im offenen Wasser**. Such dir eine Landzunge, hinter die du noch nicht geschaut hast, und **schwimm bis zu ihrer anderen Seite**. Bleib in sicherem Wasser.",
        "gameObjective": "Such dir in **{{game}}** eine Landzunge, hinter die du noch nicht geschaut hast, und **schwimm bis zu ihrer anderen Seite**. Bleib in sicherem Wasser."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["swimming", "open-world"],
      "match": "all"
    },
    "experience": {
      "family": "headland-swim",
      "cardMetadata": { "genreIds": ["adventure", "survival"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["diving", "exploration"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Eine sicher umschwimmbare Landzunge",
          "en": "Headland with a safe swimming route",
          "chips": {"en": ["Headland"], "de": ["Landzunge"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        },
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "survival"]
  },
  {
    "id": "explore-follow-the-rails",
    "moodIds": ["explore"],
    "type": "inspiration",
    "tags": ["on-foot", "exploration"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Follow the Rails",
        "objective": "Open a freely explorable world with tracks or a transit line. **Follow the line in either direction** and inspect what the normal route passes by. No destination is required.",
        "gameObjective": "Open {{game}}. **Follow the line in either direction** and inspect what the normal route passes by. No destination is required."
      },
      "de": {
        "name": "Den Schienen folgen",
        "objective": "Starte eine offene Welt mit Gleisen oder einer Bahnlinie. **Folge den Gleisen in eine Richtung** und schau, an welchen Orten du vorbeikommst. Du musst kein bestimmtes Ziel erreichen.",
        "gameObjective": "Starte {{game}}. **Folge den Gleisen in eine Richtung** und schau, an welchen Orten du vorbeikommst. Du musst kein bestimmtes Ziel erreichen."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["open-world"],
      "match": "all"
    },
    "experience": {
      "family": "rail-roaming",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "open",
      "activities": ["exploration"],
      "rules": ["on-foot"],
      "prerequisites": [
        {
          "de": "Begehbarer Weg entlang einer Bahnlinie",
          "en": "Walkable route along a rail line",
          "chips": {"en": ["Rail line"], "de": ["Bahnlinie"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        },
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "simulation", "sandbox"]
  },
  {
    "id": "explore-side-entrance",
    "moodIds": ["explore"],
    "type": "objective",
    "tags": ["exploration"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Side Entrance",
        "objective": "Open **a mission area with more than one approach**. Circle the outside before entering and **cross the boundary through a different entrance than the obvious one**.",
        "gameObjective": "Open **{{game}}**. Circle the outside before entering and **cross the boundary through a different entrance than the obvious one**."
      },
      "de": {
        "name": "Seiteneingang",
        "objective": "Starte **ein Missionsgebiet mit mehreren Zugängen**. Geh erst außen herum und **betritt das Gebiet durch einen anderen als den offensichtlichen Eingang**.",
        "gameObjective": "Starte **{{game}}**. Geh erst außen herum und **betritt das Gebiet durch einen anderen als den offensichtlichen Eingang**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["missions-or-levels", "open-world"],
      "match": "all"
    },
    "experience": {
      "family": "alternate-mission-entry",
      "cardMetadata": { "genreIds": ["adventure", "stealth"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["exploration"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Missionsgebiet mit mehreren zugänglichen Eingängen",
          "en": "Mission area with several accessible entrances",
          "chips": {"en": ["Multiple entrances"], "de": ["Mehrere Eingänge"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "stealth"]
  },
  {
    "id": "explore-one-cave-chamber",
    "moodIds": ["explore"],
    "type": "objective",
    "tags": ["exploration", "on-foot"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "One Cave Chamber",
        "objective": "Open **a game with a reachable cave or ruin**. Enter carefully and **reach the first distinct chamber or room**. Leave deeper paths for another session.",
        "gameObjective": "Open **{{game}}**. Enter carefully and **reach the first distinct chamber or room**. Leave deeper paths for another session."
      },
      "de": {
        "name": "Eine Höhlenkammer",
        "objective": "Starte **ein Spiel mit einer erreichbaren Höhle oder Ruine**. Geh vorsichtig in die Höhle oder Ruine und **erreiche den ersten größeren Raum**. Den Rest kannst du ein andermal erkunden.",
        "gameObjective": "Starte **{{game}}**. Geh vorsichtig in die Höhle oder Ruine und **erreiche den ersten größeren Raum**. Den Rest kannst du ein andermal erkunden."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["open-world"],
      "match": "all"
    },
    "experience": {
      "family": "cave-chamber",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["exploration"],
      "rules": ["on-foot"],
      "prerequisites": [
        {
          "de": "Erreichbare Höhle oder Ruine",
          "en": "Reachable cave or ruin",
          "chips": {"en": ["Cave or ruin"], "de": ["Höhle oder Ruine"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        },
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "rpg", "survival"]
  },
  {
    "id": "explore-neighboring-moon",
    "moodIds": ["explore"],
    "type": "objective",
    "tags": ["space", "exploration"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Neighboring Moon",
        "objective": "Open a **space game with an unvisited moon or planet in reach**. Travel there and **land somewhere new**.",
        "gameObjective": "In **{{game}}**, travel to an unvisited moon or planet in reach and **land somewhere new**."
      },
      "de": {
        "name": "Der Nachbarmond",
        "objective": "Starte **ein Weltraumspiel mit einem unbesuchten Mond oder Planeten in Reichweite**. Reise dorthin und **lande an einem Ort, den du noch nicht kennst**.",
        "gameObjective": "Reise in **{{game}}** zu einem unbesuchten Mond oder Planeten in Reichweite und **lande an einem Ort, den du noch nicht kennst**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["space-exploration"],
      "match": "all"
    },
    "experience": {
      "family": "new-space-destination",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["space", "exploration"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Unbesuchter begehbarer Mond oder Planet in Reichweite",
          "en": "Unvisited landable moon or planet in reach",
          "chips": {"en": ["Moon or planet"], "de": ["Mond oder Planet"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        },
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "simulation", "sandbox"]
  },
  {
    "id": "explore-unasked-question",
    "moodIds": ["explore", "curious"],
    "type": "experiment",
    "tags": ["dialogue", "new-approach"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Unasked Question",
        "objective": "Open **a story game with an available conversation**. Choose a dialogue branch you normally skip and **follow it until the conversation returns or ends**. Accept the response you receive.",
        "gameObjective": "Open **{{game}}**. Choose a dialogue branch you normally skip and **follow it until the conversation returns or ends**. Accept the response you receive."
      },
      "de": {
        "name": "Die ungefragte Frage",
        "objective": "Starte **ein Storyspiel, in dem ein Gespräch auf dich wartet**. Nimm in einem Gespräch einen Dialogzweig, den du sonst überspringst, und **folge ihm bis zum Ende oder zurück zum Hauptgespräch**. Bleib bei deiner Wahl.",
        "gameObjective": "Starte **{{game}}**. Nimm in einem Gespräch einen Dialogzweig, den du sonst überspringst, und **folge ihm bis zum Ende oder zurück zum Hauptgespräch**. Bleib bei deiner Wahl."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["optional-dialogue"]
    },
    "experience": {
      "family": "unfamiliar-dialogue",
      "cardMetadata": { "genreIds": ["narrative", "rpg"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["dialogue"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Noch nicht gewählter Dialogzweig verfügbar",
          "en": "Previously unchosen dialogue branch available",
          "chips": {"en": ["Dialogue choice"], "de": ["Dialogwahl"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["narrative", "rpg"]
  },
  {
    "id": "explore-scout-three-landmarks",
    "moodIds": ["explore"],
    "type": "objective",
    "tags": ["scouting", "exploration"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Scout the Way",
        "objective": "Open a **game with a scouting tool**. **Scout a route to one promising landmark, then follow the approach you found**.",
        "gameObjective": "Open **{{game}}**. **Scout a route to one promising landmark, then follow the approach you found**."
      },
      "de": {
        "name": "Erst spähen",
        "objective": "Starte ein **Spiel mit Aufklärungswerkzeug**. **Späh einen Weg zu einem interessanten Ort aus und probier den gefundenen Zugang aus**.",
        "gameObjective": "Starte **{{game}}**. **Späh einen Weg zu einem interessanten Ort aus und probier den gefundenen Zugang aus**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["scouting-tools"],
      "match": "all"
    },
    "experience": {
      "family": "scouted-journey",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["scouting", "exploration"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Aufklärungswerkzeug; erreichbarer Ort",
          "en": "Scouting tool; reachable destination",
          "chips": {"en": ["Scouting tool"], "de": ["Aufklärungswerkzeug"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "shooter", "moba"]
  },
  {
    "id": "explore-deliberate-wrong-turn",
    "moodIds": ["explore"],
    "type": "inspiration",
    "tags": ["driving", "exploration"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Wrong Turn",
        "objective": "Open a driving game with open roads. At the next junction, **take the road you do not recognize**. Keep driving while it offers new scenery.",
        "gameObjective": "Open {{game}}. At the next junction, **take the road you do not recognize**. Keep driving while it offers new scenery."
      },
      "de": {
        "name": "Absichtlich falsch",
        "objective": "Starte ein Fahrspiel mit offenen Straßen. **Nimm an der nächsten Kreuzung die Straße, die du nicht kennst**. Fahr weiter, solange sie neue Eindrücke bietet.",
        "gameObjective": "Starte {{game}}. **Nimm an der nächsten Kreuzung die Straße, die du nicht kennst**. Fahr weiter, solange sie neue Eindrücke bietet."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["free-driving"],
      "match": "all"
    },
    "experience": {
      "family": "unfamiliar-road",
      "cardMetadata": { "genreIds": ["racing", "sandbox"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["driving", "exploration"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Offene Straße mit unbekannter Abzweigung",
          "en": "Open road with an unfamiliar junction",
          "chips": {"en": ["Junction"], "de": ["Abzweigung"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        },
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["racing", "sandbox"]
  },
  {
    "id": "explore-alternate-platform-route",
    "moodIds": ["explore"],
    "type": "experiment",
    "tags": ["traversal", "new-approach"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Alternate Route",
        "objective": "Open **a platforming area with branching obstacles**. Avoid your usual line and **reach the next checkpoint by another visible route**. Use assists if needed.",
        "gameObjective": "Open **{{game}}**. Avoid your usual line and **reach the next checkpoint by another visible route**. Use assists if needed."
      },
      "de": {
        "name": "Alternative Route",
        "objective": "Starte **einen Plattformabschnitt mit verzweigten Hindernissen**. Meide deine gewohnte Linie und **erreiche den nächsten Kontrollpunkt über einen anderen sichtbaren Weg**. Nutze bei Bedarf Hilfen.",
        "gameObjective": "Starte **{{game}}**. Meide deine gewohnte Linie und **erreiche den nächsten Kontrollpunkt über einen anderen sichtbaren Weg**. Nutze bei Bedarf Hilfen."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["platforming"],
      "match": "all"
    },
    "experience": {
      "family": "alternate-platform-route",
      "cardMetadata": { "genreIds": ["platformer", "adventure"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["traversal"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Verzweigter Abschnitt mit erreichbarem Checkpoint",
          "en": "Branching section with reachable checkpoint",
          "chips": {"en": ["Checkpoint"], "de": ["Checkpoint"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["platformer", "adventure"]
  },
  {
    "id": "explore-hudless-landmark",
    "moodIds": ["explore", "curious"],
    "type": "experiment",
    "tags": [],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "By Landmarks",
        "objective": "Open **an open world with optional navigation UI**. Hide the minimap or route line, choose a visible landmark, and **reach it using the world itself for direction**.",
        "gameObjective": "Open **{{game}}**. Hide the minimap or route line, choose a visible landmark, and **reach it using the world itself for direction**."
      },
      "de": {
        "name": "Nach Landmarken",
        "objective": "Starte **eine offene Welt mit optionaler Navigationsanzeige**. Blende Minimap oder Routenlinie aus, wähle eine Landmarke in Sichtweite und **finde sie nur anhand dessen, was du im Spiel siehst**.",
        "gameObjective": "Starte **{{game}}**. Blende Minimap oder Routenlinie aus, wähle eine Landmarke in Sichtweite und **finde sie nur anhand dessen, was du im Spiel siehst**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["open-world"],
      "match": "all"
    },
    "experience": {
      "family": "world-navigation",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "de": "Navigationsanzeige abschaltbar; Ziel in Sichtweite",
          "en": "Navigation UI can be hidden; destination in sight",
          "chips": {"en": ["Hideable navigation"], "de": ["Wegführung abschaltbar"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        },
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "rpg", "sandbox"]
  },
  {
    "id": "explore-visible-wreck",
    "moodIds": ["explore"],
    "type": "objective",
    "tags": ["diving", "exploration"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Visible Wreck",
        "objective": "Open a **game with diving and a reachable underwater structure**. **Dive inside and explore its nearest accessible room**. Surface for air as needed.",
        "gameObjective": "In **{{game}}**, **dive into a reachable wreck or underwater structure and explore its nearest accessible room**. Replenish your air as needed."
      },
      "de": {
        "name": "Sichtbares Wrack",
        "objective": "Starte ein **Spiel mit Tauchen und einer erreichbaren Unterwasserstruktur**. **Tauch hinein und erkunde den nächsten zugänglichen Raum**. Hol nach Bedarf Luft.",
        "gameObjective": "**Tauch in {{game}} in ein erreichbares Wrack oder anderes Unterwasserbauwerk und erkunde seinen nächsten zugänglichen Raum**. Hol nach Bedarf Luft."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["diving", "open-world"]
    },
    "experience": {
      "family": "wreck-exploration",
      "cardMetadata": { "genreIds": ["adventure", "survival"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["diving", "exploration"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Reachable underwater structure; air supply",
          "de": "Erreichbare Unterwasserstruktur; Luftversorgung",
          "chips": {"en": ["Air supply"], "de": ["Luftversorgung"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        },
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "survival"]
  },
  {
    "id": "explore-new-biome-photo",
    "moodIds": ["create", "relax"],
    "type": "creation",
    "tags": ["photography", "exploration"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "New Biome Photo",
        "objective": "Open **an explorable game with photo mode**. Enter a biome or district you have not photographed and **save one image that clearly shows its character**.",
        "gameObjective": "Open **{{game}}**. Enter a biome or district you have not photographed and **save one image that clearly shows its character**."
      },
      "de": {
        "name": "Foto aus neuem Gebiet",
        "objective": "Starte **ein erkundbares Spiel mit Fotomodus**. Betritt ein Biom oder Viertel, das du noch nicht fotografiert hast, und **mach ein Foto, an dem man das Gebiet sofort erkennt**.",
        "gameObjective": "Starte **{{game}}**. Betritt ein Biom oder Viertel, das du noch nicht fotografiert hast, und **mach ein Foto, an dem man das Gebiet sofort erkennt**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["photo-mode", "open-world"],
      "match": "all"
    },
    "experience": {
      "family": "place-character-photo",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["photography", "exploration"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Fotomodus; noch nicht fotografiertes Gebiet erreichbar",
          "en": "Photo mode; reachable area not photographed before",
          "chips": {"en": ["Photo mode"], "de": ["Fotomodus"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        },
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "island-crossing",
    "moodIds": ["explore", "restless"],
    "type": "objective",
    "tags": ["exploration"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "customGameCompatibility": {
      "capabilityIds": ["swimming", "open-world"]
    },
    "translations": {
      "en": {
        "name": "Across to the Island",
        "objective": "Open a **game with a reachable island and swimming**. **Swim across and find a place to land on the island**.",
        "gameObjective": "With a reachable island nearby in **{{game}}**, **swim across and find a place to land**."
      },
      "de": {
        "name": "Hinüber zur Insel",
        "objective": "Starte ein **Spiel mit einer erreichbaren Insel und Schwimmen**. **Schwimm hinüber und finde eine Stelle, an der du an Land kommst**.",
        "gameObjective": "Mit einer erreichbaren Insel in **{{game}}**: **Schwimm hinüber und finde einen Platz zum Anlanden**."
      }
    },
    "experience": {
      "family": "water-crossing",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["exploration"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Reachable island nearby",
          "de": "Erreichbare Insel in der Nähe",
          "chips": {"en": ["Island"], "de": ["Insel"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        },
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "survival", "sandbox"]
  }
]);
