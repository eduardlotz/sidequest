import { defineQuests } from "./defineQuests";

export const TimedQuests = defineQuests([
  {
    "id": "countdown-pocket-shelter",
    "moodIds": ["create", "challenge"],
    "type": "countdown",
    "tags": ["building"],
    "minimumDurationMinutes": 0,
    "suggestedDurationMinutes": 8,
    "maximumDurationMinutes": 8,
    "universal": true,
    "translations": {
      "en": {
        "name": "Pocket Shelter",
        "objective": "Open a **building game**. Build a shelter with **a roof, a door, and a light** before eight minutes are up. Pause the timer when it's ready.",
        "gameObjective": "Open **{{game}}**. Build a shelter with **a roof, a door, and a light** before eight minutes are up. Pause the timer when it's ready."
      },
      "de": {
        "name": "Mini-Unterschlupf",
        "objective": "Starte ein **Bauspiel**. Baue in acht Minuten einen Unterschlupf mit **Dach, Tür und Licht**. Pausiere den Timer, sobald er fertig ist.",
        "gameObjective": "Starte **{{game}}**. Baue in acht Minuten einen Unterschlupf mit **Dach, Tür und Licht**. Pausiere den Timer, sobald er fertig ist."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["building", "decoration"]
    },
    "experience": {
      "family": "shelter-building",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["building"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Roof, door and light parts ready",
          "de": "Dach-, Tür- und Lichtbauteile bereit",
          "chips": {"en": ["Building parts"], "de": ["Bauteile"]},
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
    "gameGenreIds": ["simulation", "survival", "sandbox"]
  },
  {
    "id": "countdown-five-colors",
    "moodIds": ["curious", "focused"],
    "type": "countdown",
    "tags": ["photography"],
    "minimumDurationMinutes": 0,
    "suggestedDurationMinutes": 5,
    "maximumDurationMinutes": 5,
    "universal": true,
    "translations": {
      "en": {
        "name": "Five Colors",
        "objective": "Open a game with **photo mode**. Take five pictures of **five differently colored subjects** within five minutes. Pause after the fifth photo.",
        "gameObjective": "Open **{{game}}**. Take five pictures of **five differently colored subjects** within five minutes. Pause after the fifth photo."
      },
      "de": {
        "name": "Fünf Farben",
        "objective": "Starte ein Spiel mit **Fotomodus**. Fotografiere in fünf Minuten **fünf verschiedenfarbige Motive**. Pausiere nach dem fünften Bild.",
        "gameObjective": "Starte **{{game}}**. Fotografiere in fünf Minuten **fünf verschiedenfarbige Motive**. Pausiere nach dem fünften Bild."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["photo-mode"]
    },
    "experience": {
      "family": "color-photography",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["photography"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Fotomodus und mehrere erreichbare Motive",
          "en": "Photo mode and several reachable subjects",
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
    "gameGenreIds": ["adventure", "simulation", "sandbox"]
  },
  {
    "id": "countdown-clean-inventory",
    "moodIds": ["focused"],
    "type": "countdown",
    "tags": [],
    "minimumDurationMinutes": 0,
    "suggestedDurationMinutes": 3,
    "maximumDurationMinutes": 3,
    "universal": true,
    "translations": {
      "en": {
        "name": "Clear the Clutter",
        "objective": "Open a game with **inventory storage**. Put **ten unused items into storage** before three minutes are up. Pause once the tenth item is stored.",
        "gameObjective": "Open **{{game}}**. Put **ten unused items into storage** before three minutes are up. Pause once the tenth item is stored."
      },
      "de": {
        "name": "Platz schaffen",
        "objective": "Starte ein Spiel mit **Lager und Inventar**. Verstaue in drei Minuten **zehn ungenutzte Gegenstände** im Lager. Pausiere nach dem zehnten Gegenstand.",
        "gameObjective": "Starte **{{game}}**. Verstaue in drei Minuten **zehn ungenutzte Gegenstände** im Lager. Pausiere nach dem zehnten Gegenstand."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["inventory-storage"]
    },
    "experience": {
      "family": "inventory-storage",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "en": "Ten unused inventory items; reachable storage",
          "de": "Zehn ungenutzte Gegenstände; erreichbares Lager",
          "chips": {"en": ["Unused items", "Storage"], "de": ["Ungenutzte Gegenstände", "Lager"]},
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
    "gameGenreIds": ["rpg", "survival", "sandbox"]
  },
  {
    "id": "countdown-three-puzzles",
    "moodIds": ["challenge", "focused"],
    "type": "countdown",
    "tags": ["puzzles", "no-hints"],
    "minimumDurationMinutes": 0,
    "suggestedDurationMinutes": 10,
    "maximumDurationMinutes": 10,
    "universal": true,
    "translations": {
      "en": {
        "name": "Puzzle Sprint",
        "objective": "Open a **short-puzzle game**. Solve **three puzzles without hints** within ten minutes. Pause the timer after the third solution.",
        "gameObjective": "Open **{{game}}**. Solve **three puzzles without hints** within ten minutes. Pause the timer after the third solution."
      },
      "de": {
        "name": "Rätsel-Sprint",
        "objective": "Starte ein Spiel mit **kurzen Rätseln**. Löse in zehn Minuten **drei Rätsel ohne Hinweise**. Pausiere nach der dritten Lösung.",
        "gameObjective": "Starte **{{game}}**. Löse in zehn Minuten **drei Rätsel ohne Hinweise**. Pausiere nach der dritten Lösung."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["puzzles"]
    },
    "experience": {
      "family": "puzzle-solving",
      "cardMetadata": { "genreIds": ["puzzle"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["puzzles"],
      "rules": ["no-hints"],
      "prerequisites": [
        {
          "en": "Three unsolved short puzzles available",
          "de": "Drei offene kurze Rätsel verfügbar",
          "chips": {"en": ["Short puzzles"], "de": ["Kurze Rätsel"]},
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
    "gameGenreIds": ["puzzle"]
  },
  {
    "id": "countdown-fish-trio",
    "moodIds": ["challenge", "curious"],
    "type": "countdown",
    "tags": ["fishing"],
    "minimumDurationMinutes": 0,
    "suggestedDurationMinutes": 8,
    "maximumDurationMinutes": 8,
    "universal": true,
    "translations": {
      "en": {
        "name": "Quick Catch",
        "objective": "Open a game with **fishing** and stand by the water. Catch **three fish** within eight minutes. Pause after landing the third.",
        "gameObjective": "Open **{{game}}**. Catch **three fish** within eight minutes. Pause after landing the third."
      },
      "de": {
        "name": "Schneller Fang",
        "objective": "Starte ein Spiel mit **Angeln** und stell dich ans Wasser. Fange in acht Minuten **drei Fische**. Pausiere nach dem dritten Fang.",
        "gameObjective": "Starte **{{game}}**. Fange in acht Minuten **drei Fische**. Pausiere nach dem dritten Fang."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["fishing"]
    },
    "experience": {
      "family": "fishing",
      "cardMetadata": { "genreIds": ["simulation", "cozy"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["fishing"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Rod and bait; reachable fishing water",
          "de": "Angel und Köder; erreichbare Angelstelle",
          "chips": {"en": ["Rod", "Bait"], "de": ["Angel", "Köder"]},
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
    "gameGenreIds": ["simulation", "cozy"]
  },
  {
    "id": "countdown-rooftop",
    "moodIds": ["restless", "challenge"],
    "type": "countdown",
    "tags": ["traversal", "on-foot"],
    "minimumDurationMinutes": 0,
    "suggestedDurationMinutes": 5,
    "maximumDurationMinutes": 5,
    "universal": true,
    "translations": {
      "en": {
        "name": "Rooftop Rush",
        "objective": "Open a game with **climbing**. Pick a visible rooftop from street level, then start the timer. **Reach that roof on foot** within five minutes and pause.",
        "gameObjective": "Open **{{game}}**. Pick a visible rooftop from street level, then start the timer. **Reach that roof on foot** within five minutes and pause."
      },
      "de": {
        "name": "Aufs Dach",
        "objective": "Starte ein Spiel mit **Klettern**. Wähle von der Straße aus ein sichtbares Dach und starte den Timer. **Erreiche das Dach zu Fuß** in fünf Minuten und pausiere.",
        "gameObjective": "Starte **{{game}}**. Wähle von der Straße aus ein sichtbares Dach und starte den Timer. **Erreiche das Dach zu Fuß** in fünf Minuten und pausiere."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["advanced-traversal", "open-world"]
    },
    "experience": {
      "family": "rooftop-traversal",
      "cardMetadata": { "genreIds": ["adventure", "platformer"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["traversal", "on-foot"],
      "rules": [],
      "prerequisites": [
        {
          "en": "A reachable roof visible from the street",
          "de": "Erreichbares Dach von der Straße sichtbar",
          "chips": {"en": ["Reachable roof"], "de": ["Erreichbares Dach"]},
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
    "gameGenreIds": ["adventure", "platformer"]
  },
  {
    "id": "countdown-cook-three",
    "moodIds": ["focused", "challenge"],
    "type": "countdown",
    "tags": ["cooking"],
    "minimumDurationMinutes": 0,
    "suggestedDurationMinutes": 7,
    "maximumDurationMinutes": 7,
    "universal": true,
    "translations": {
      "en": {
        "name": "Three-Course Dash",
        "objective": "Open a game with **cooking**. With ingredients ready for three unlocked recipes, **cook three different dishes within seven minutes**.",
        "gameObjective": "Open **{{game}}**. With ingredients ready for three unlocked recipes, **cook three different dishes within seven minutes**."
      },
      "de": {
        "name": "Küchen-Sprint",
        "objective": "Starte ein Spiel mit **Kochen**. Halte die Zutaten für drei freigeschaltete Rezepte bereit und **koche drei verschiedene Gerichte in sieben Minuten**.",
        "gameObjective": "Starte **{{game}}**. Halte die Zutaten für drei freigeschaltete Rezepte bereit und **koche drei verschiedene Gerichte in sieben Minuten**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["cooking"]
    },
    "experience": {
      "family": "recipe-cooking",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["cooking"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Three unlocked recipes; all ingredients ready",
          "de": "Drei bekannte Rezepte; alle Zutaten bereit",
          "chips": {"en": ["Recipes"], "de": ["Rezepte"]},
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
    "gameGenreIds": ["simulation", "cozy", "survival"]
  },
  {
    "id": "countdown-secret-route",
    "moodIds": ["challenge", "focused"],
    "type": "countdown",
    "tags": ["stealth", "no-detection"],
    "minimumDurationMinutes": 0,
    "suggestedDurationMinutes": 6,
    "maximumDurationMinutes": 6,
    "universal": true,
    "translations": {
      "en": {
        "name": "Quick Heist",
        "objective": "Open a **stealth game with theft**. Pick one reachable item in a nearby guarded room. **Steal that item and leave unseen within six minutes**.",
        "gameObjective": "Open **{{game}}**. Pick one reachable item in a nearby guarded room. **Steal that item and leave unseen within six minutes**."
      },
      "de": {
        "name": "Schneller Beutezug",
        "objective": "Starte ein **Schleichspiel mit Diebstahl**. Wähle einen erreichbaren Gegenstand in einem bewachten Raum in der Nähe. **Stiehl ihn und verlasse den Raum in sechs Minuten unentdeckt**.",
        "gameObjective": "Starte **{{game}}**. Wähle einen erreichbaren Gegenstand in einem bewachten Raum in der Nähe. **Stiehl ihn und verlasse den Raum in sechs Minuten unentdeckt**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["stealth", "theft-or-loot"]
    },
    "experience": {
      "family": "stealth-theft",
      "cardMetadata": { "genreIds": ["stealth"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["stealth"],
      "rules": ["no-detection"],
      "prerequisites": [
        {
          "en": "Guarded room with one reachable item to steal",
          "de": "Bewachter Raum mit erreichbarem Diebesgut",
          "chips": {"en": ["Guarded loot"], "de": ["Bewachte Beute"]},
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
    "id": "countdown-small-garden",
    "moodIds": ["create", "focused"],
    "type": "countdown",
    "tags": ["farming"],
    "minimumDurationMinutes": 0,
    "suggestedDurationMinutes": 5,
    "maximumDurationMinutes": 5,
    "universal": true,
    "translations": {
      "en": {
        "name": "Garden Dash",
        "objective": "Open a game with **crop planting**. Prepare soil, then **plant and water nine crops** within five minutes. Pause after watering the last one.",
        "gameObjective": "Open **{{game}}**. Prepare soil, then **plant and water nine crops** within five minutes. Pause after watering the last one."
      },
      "de": {
        "name": "Garten-Sprint",
        "objective": "Starte ein **Farmspiel**. Bereite ein kleines Beet vor und **pflanz und gieß neun Pflanzen in fünf Minuten**. Pausiere nach der letzten Pflanze.",
        "gameObjective": "Starte **{{game}}**. Bereite ein kleines Beet vor und **pflanz und gieß neun Pflanzen in fünf Minuten**. Pausiere nach der letzten Pflanze."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["grow-crops"]
    },
    "experience": {
      "family": "crop-planting",
      "cardMetadata": { "genreIds": ["simulation", "cozy"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["farming"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Nine seeds; soil tools; watering available",
          "de": "Neun Samen; Bodenwerkzeug; Gießen möglich",
          "chips": {"en": ["Nine seeds", "Soil tools"], "de": ["Neun Samen", "Bodenwerkzeug"]},
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
    "gameGenreIds": ["simulation", "cozy"]
  },
  {
    "id": "speedrun-first-level",
    "moodIds": ["challenge", "progress"],
    "type": "speedrun",
    "tags": ["traversal"],
    "minimumDurationMinutes": 0,
    "suggestedDurationMinutes": 10,
    "universal": true,
    "translations": {
      "en": {
        "name": "Opening Level",
        "objective": "Open a **platformer you know** and select its first level. Start at the level entrance and **reach the exit as quickly as you can**. Pause as soon as you finish.",
        "gameObjective": "Choose the **familiar first level in {{game}}**. Start at its entrance and **reach the exit as quickly as you can**. Pause as soon as you finish."
      },
      "de": {
        "name": "Erstes Level",
        "objective": "Starte einen **bekannten Plattformer** und wähle das erste Level. Beginne am Eingang und **erreiche den Ausgang so schnell wie möglich**. Pausiere direkt am Ziel.",
        "gameObjective": "Wähle in **{{game}} das bekannte erste Level**. Beginne am Eingang und **erreiche den Ausgang so schnell wie möglich**. Pausiere direkt am Ziel."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["platforming", "missions-or-levels", "replayable-encounters"]
    },
    "experience": {
      "family": "platform-level",
      "cardMetadata": { "genreIds": ["platformer"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["traversal"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Familiar replayable first level",
          "de": "Bekanntes wiederholbares erstes Level",
          "chips": {"en": ["First level"], "de": ["Erstes Level"]},
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
    "id": "speedrun-one-lap",
    "moodIds": ["challenge", "restless"],
    "type": "speedrun",
    "tags": ["racing"],
    "minimumDurationMinutes": 0,
    "suggestedDurationMinutes": 5,
    "universal": true,
    "translations": {
      "en": {
        "name": "One Fast Lap",
        "objective": "Open **a racing game with time trials**. Choose a familiar track and car. **Drive one clean lap from the starting line as quickly as possible**, then pause at the finish. Keep the setup for future attempts.",
        "gameObjective": "In **{{game}}** time trials, choose a familiar track and car. **Drive one clean lap from the starting line as quickly as possible**, then pause at the finish. Keep the setup for future attempts."
      },
      "de": {
        "name": "Eine schnelle Runde",
        "objective": "Starte **ein Rennspiel mit Zeitfahren**. Wähle eine vertraute Strecke und einen Wagen. **Fahr ab der Startlinie eine saubere Runde so schnell wie möglich** und pausiere im Ziel. Behalte das Setup für weitere Versuche.",
        "gameObjective": "Wähle in **{{game}}** im Zeitfahren eine vertraute Strecke und einen Wagen. **Fahr ab der Startlinie eine saubere Runde so schnell wie möglich** und pausiere im Ziel. Behalte das Setup für weitere Versuche."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["racing", "time-trials"]
    },
    "experience": {
      "family": "race-lap",
      "cardMetadata": { "genreIds": ["racing"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["racing"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Time-trial mode; selected car and track",
          "de": "Zeitfahrmodus; Auto und Strecke gewählt",
          "chips": {"en": ["Time-trial mode"], "de": ["Zeitfahrmodus"]},
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
    "gameGenreIds": ["racing"]
  },
  {
    "id": "speedrun-village-loop",
    "moodIds": ["restless", "focused"],
    "type": "speedrun",
    "tags": ["traversal", "no-fast-travel", "on-foot"],
    "minimumDurationMinutes": 0,
    "suggestedDurationMinutes": 10,
    "universal": true,
    "translations": {
      "en": {
        "name": "Town Circuit",
        "objective": "Open an **open-world game**. Pick two landmarks in one town. Start at the first, **run to the second and back without fast travel**, then pause. Keep this route for repeats.",
        "gameObjective": "Open **{{game}}**. Pick two landmarks in one town. Start at the first, **run to the second and back without fast travel**, then pause. Keep this route for repeats."
      },
      "de": {
        "name": "Ortsrunde",
        "objective": "Starte ein **Open-World-Spiel**. Wähle zwei Orte in einer Stadt. **Laufe vom ersten zum zweiten und zurück, ohne Schnellreise**, und pausiere. Nutze bei Wiederholungen dieselbe Strecke.",
        "gameObjective": "Starte **{{game}}**. Wähle zwei Orte in einer Stadt. **Laufe vom ersten zum zweiten und zurück, ohne Schnellreise**, und pausiere. Nutze bei Wiederholungen dieselbe Strecke."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["open-world"]
    },
    "experience": {
      "family": "landmark-running",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["traversal"],
      "rules": ["no-fast-travel", "on-foot"],
      "prerequisites": [
        {
          "en": "Two reachable town landmarks",
          "de": "Zwei erreichbare Orte im selben Ort",
          "chips": {"en": ["Town landmarks"], "de": ["Orte im selben Ort"]},
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
    "gameGenreIds": ["adventure", "sandbox", "cozy"]
  },
  {
    "id": "speedrun-training-targets",
    "moodIds": ["challenge", "focused"],
    "type": "speedrun",
    "tags": ["one-weapon"],
    "minimumDurationMinutes": 0,
    "suggestedDurationMinutes": 5,
    "universal": true,
    "translations": {
      "en": {
        "name": "Target Circuit",
        "objective": "Open a **shooter with a training range**. Choose one weapon and five targets. **Hit all five once**, then pause. Repeat with the same weapon and targets.",
        "gameObjective": "At the training range in **{{game}}**, choose a weapon and five fixed targets. **Hit all five once as quickly as possible**, then pause. Keep the weapon and targets for repeats."
      },
      "de": {
        "name": "Zielparcours",
        "objective": "Starte einen **Shooter mit Schießstand**. Wähle eine Waffe und fünf Ziele. **Triff jedes Ziel einmal** und pausiere. Behalte Waffe und Ziele bei Wiederholungen bei.",
        "gameObjective": "Wähle im Schießstand von **{{game}}** eine Waffe und fünf feste Ziele. **Triff jedes Ziel einmal so schnell wie möglich** und pausiere. Behalte Waffe und Ziele bei Wiederholungen bei."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["practice-ranges", "combat-loadouts"]
    },
    "experience": {
      "family": "target-practice",
      "cardMetadata": { "genreIds": ["shooter"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": [],
      "rules": ["one-weapon"],
      "prerequisites": [
        {
          "en": "Available range with five fixed targets",
          "de": "Schießstand mit fünf festen Zielen verfügbar",
          "chips": {"en": ["Practice range"], "de": ["Schießstand"]},
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
    "gameGenreIds": ["shooter"]
  },
  {
    "id": "speedrun-known-puzzle",
    "moodIds": ["focused", "challenge"],
    "type": "speedrun",
    "tags": ["puzzles", "no-hints"],
    "minimumDurationMinutes": 0,
    "suggestedDurationMinutes": 10,
    "universal": true,
    "translations": {
      "en": {
        "name": "Familiar Puzzle",
        "objective": "Open a **replayable puzzle** and choose a familiar level. Reset it, start the timer, and **solve it without hints**. Pause on the solution and replay this level to improve.",
        "gameObjective": "In **{{game}}**, choose a familiar resettable puzzle. Reset it, start the timer, and **solve it without hints**. Keep that puzzle for later attempts."
      },
      "de": {
        "name": "Bekanntes Rätsel",
        "objective": "Wähle in einem **Rätselspiel, in dem du Level erneut spielen kannst**, ein bekanntes Level. Setz es zurück, starte den Timer und **löse es ohne Hinweise**. Pausier die Zeit und spiel dasselbe Level erneut, wenn du schneller werden willst.",
        "gameObjective": "Wähle in **{{game}}** ein bekanntes zurücksetzbares Rätsel. Setz es zurück, starte den Timer und **löse es ohne Hinweise**. Behalte dasselbe Rätsel für spätere Versuche."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["puzzles", "replayable-encounters"]
    },
    "experience": {
      "family": "puzzle-replay",
      "cardMetadata": { "genreIds": ["puzzle"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["puzzles"],
      "rules": ["no-hints"],
      "prerequisites": [
        {
          "en": "Familiar resettable puzzle",
          "de": "Bekanntes zurücksetzbares Rätsel",
          "chips": {"en": ["Resettable puzzle"], "de": ["Zurücksetzbares Rätsel"]},
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
    "gameGenreIds": ["puzzle"]
  },
  {
    "id": "speedrun-boss-rematch",
    "moodIds": ["challenge", "focused"],
    "type": "speedrun",
    "tags": ["boss", "replay"],
    "minimumDurationMinutes": 0,
    "suggestedDurationMinutes": 15,
    "universal": true,
    "translations": {
      "en": {
        "name": "Boss Rematch",
        "objective": "Open a game with **repeatable boss fights**. Choose one boss, difficulty, and loadout. **Defeat that boss**, then pause immediately. Keep the same conditions for repeats.",
        "gameObjective": "Open **{{game}}**. Choose one boss, difficulty, and loadout. **Defeat that boss**, then pause immediately. Keep the same conditions for repeats."
      },
      "de": {
        "name": "Boss-Revanche",
        "objective": "Starte ein Spiel mit **wiederholbaren Bosskämpfen**. Wähle Boss, Schwierigkeit und Ausrüstung. **Besiege den Boss** und pausiere sofort. Behalte die Bedingungen bei Wiederholungen bei.",
        "gameObjective": "Starte **{{game}}**. Wähle Boss, Schwierigkeit und Ausrüstung. **Besiege den Boss** und pausiere sofort. Behalte die Bedingungen bei Wiederholungen bei."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["boss-fights", "replayable-encounters"]
    },
    "experience": {
      "family": "boss-rematch",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["boss"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Repeatable boss; selected loadout",
          "de": "Wiederholbarer Boss; Ausrüstung gewählt",
          "chips": {"en": ["Replayable boss"], "de": ["Boss wiederholbar"]},
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
    "gameGenreIds": ["adventure", "rpg", "platformer", "roguelike", "shooter"]
  },
  {
    "id": "speedrun-resource-stack",
    "moodIds": ["progress", "restless"],
    "type": "speedrun",
    "tags": [],
    "minimumDurationMinutes": 0,
    "suggestedDurationMinutes": 10,
    "universal": true,
    "translations": {
      "en": {
        "name": "Ten to Gather",
        "objective": "Open a game with **gatherable resources**. Choose a resource and starting spot. **Gather ten fresh units**, then pause. Start repeats at the same spot without using stored resources.",
        "gameObjective": "Open **{{game}}**. Choose a resource and starting spot. **Gather ten fresh units**, then pause. Start repeats at the same spot without using stored resources."
      },
      "de": {
        "name": "Zehn sammeln",
        "objective": "Starte ein Spiel, in dem du **Rohstoffe sammeln kannst**. Leg Rohstoff und Startpunkt fest. **Sammle zehn Stück davon**, ohne Vorräte zu verwenden, und pausiere. Beginne weitere Läufe am selben Ort.",
        "gameObjective": "Starte **{{game}}**. Leg Rohstoff und Startpunkt fest. **Sammle zehn Stück davon**, ohne Vorräte zu verwenden, und pausiere. Beginne weitere Läufe am selben Ort."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["material-gathering"]
    },
    "experience": {
      "family": "resource-gathering",
      "cardMetadata": { "genreIds": ["strategy", "survival"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "en": "Gathering tool; known resource spot",
          "de": "Sammelwerkzeug; bekannte Rohstoffstelle",
          "chips": {"en": ["Gathering tool", "Resource spot"], "de": ["Sammelwerkzeug", "Rohstoffstelle"]},
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
    "gameGenreIds": ["strategy", "survival"]
  },
  {
    "id": "speedrun-practice-course",
    "moodIds": ["restless", "challenge"],
    "type": "speedrun",
    "tags": ["traversal"],
    "minimumDurationMinutes": 0,
    "suggestedDurationMinutes": 10,
    "universal": true,
    "translations": {
      "en": {
        "name": "Movement Course",
        "objective": "Open a game with a **fixed movement course**. Start at its entrance and **reach the finish without skipping checkpoints**. Pause at the end and keep the same course for repeats.",
        "gameObjective": "Open **{{game}}**. Start at its entrance and **reach the finish without skipping checkpoints**. Pause at the end and keep the same course for repeats."
      },
      "de": {
        "name": "Bewegungsparcours",
        "objective": "Starte ein Spiel mit einem **festen Bewegungsparcours**. Lauf am Eingang los und **erreiche das Ziel, ohne einen Checkpoint auszulassen**. Pausier dort und nutze denselben Parcours für weitere Läufe.",
        "gameObjective": "Starte **{{game}}**. Lauf am Eingang los und **erreiche das Ziel, ohne einen Checkpoint auszulassen**. Pausier dort und nutze denselben Parcours für weitere Läufe."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["time-trials", "advanced-traversal"]
    },
    "experience": {
      "family": "movement-course",
      "cardMetadata": { "genreIds": ["adventure"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["traversal"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Fixed repeatable movement course",
          "de": "Fester wiederholbarer Bewegungsparcours",
          "chips": {"en": ["Movement course"], "de": ["Bewegungsparcours"]},
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
    "gameGenreIds": ["adventure"]
  },
  {
    "id": "speedrun-clear-room",
    "moodIds": ["challenge", "focused"],
    "type": "speedrun",
    "tags": ["loadout"],
    "minimumDurationMinutes": 0,
    "suggestedDurationMinutes": 10,
    "universal": true,
    "translations": {
      "en": {
        "name": "Room Clear",
        "objective": "Open a game with **replayable combat rooms**. Pick one room and a fixed loadout. **Defeat every enemy in the room**, then pause. Keep the same room and loadout for repeats.",
        "gameObjective": "Open **{{game}}**. Pick one room and a fixed loadout. **Defeat every enemy in the room**, then pause. Keep the same room and loadout for repeats."
      },
      "de": {
        "name": "Raum räumen",
        "objective": "Starte ein Spiel mit **wiederholbaren Kampfräumen**. Wähle einen Raum und feste Ausrüstung. **Besiege alle Gegner im Raum** und pausiere. Behalte Raum und Ausrüstung bei Wiederholungen bei.",
        "gameObjective": "Starte **{{game}}**. Wähle einen Raum und feste Ausrüstung. **Besiege alle Gegner im Raum** und pausiere. Behalte Raum und Ausrüstung bei Wiederholungen bei."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["combat-loadouts", "replayable-encounters"]
    },
    "experience": {
      "family": "room-combat",
      "cardMetadata": { "genreIds": ["shooter", "fighting"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["loadout"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Resettable combat room; fixed loadout",
          "de": "Zurücksetzbarer Kampfraum; feste Ausrüstung",
          "chips": {"en": ["Combat room", "Fixed loadout"], "de": ["Kampfraum", "Feste Ausrüstung"]},
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
    "gameGenreIds": ["shooter", "fighting"]
  }
]);
