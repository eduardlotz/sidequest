import { defineQuests } from "./defineQuests";

export const RelaxQuests = defineQuests([
  {
    "id": "scenic-drive",
    "moodIds": ["relax"],
    "type": "inspiration",
    "tags": ["driving", "no-timer"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Scenic Drive",
        "objective": "Open a **free-roam driving game**. Pick a familiar car and **drive wherever looks interesting**.",
        "gameObjective": "With free-roam driving available in **{{game}}**, take a familiar car and **drive wherever looks interesting**."
      },
      "de": {
        "name": "Ruhige Ausfahrt",
        "objective": "Starte ein **Spiel mit freien Autofahrten**. Nimm einen vertrauten Wagen und **fahr dahin, wo es interessant aussieht**.",
        "gameObjective": "Nimm in **{{game}}** mit verfügbaren freien Fahrten einen vertrauten Wagen und **fahr dahin, wo es interessant aussieht**."
      }
    },
    "experience": {
      "family": "driving",
      "cardMetadata": { "genreIds": ["racing"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["driving"],
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
    "gameGenreIds": ["racing"],
    "customGameCompatibility": {
      "capabilityIds": ["free-driving"]
    }
  },
  {
    "id": "space-drift",
    "moodIds": ["relax"],
    "type": "inspiration",
    "tags": ["space", "free-roam"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Between the Stars",
        "objective": "Open a **space game with free flight**. Leave the station and **drift through space** for a while. Take in the planets, ships, and whatever you pass.",
        "gameObjective": "With free flight available in **{{game}}**, leave a station and **drift through space**. Take in the planets, ships and whatever you pass."
      },
      "de": {
        "name": "Zwischen den Sternen",
        "objective": "Starte ein **Weltraumspiel mit freiem Flug**. Verlasse die Station und **treib eine Weile durchs All**. Schau dir Planeten, Schiffe und deine Umgebung an.",
        "gameObjective": "Verlasse in **{{game}}** mit verfügbarem freiem Flug eine Station und **treib durchs All**. Schau dir Planeten, Schiffe und deine Umgebung an."
      }
    },
    "experience": {
      "family": "space",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "open",
      "activities": ["space", "free-roam"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Free flight from a station available",
          "de": "Freier Flug ab einer Station möglich",
          "chips": {"en": ["Space station"], "de": ["Raumstation"]},
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
    "gameGenreIds": ["adventure", "simulation", "sandbox"],
    "customGameCompatibility": {
      "capabilityIds": ["free-space-flight"]
    }
  },
  {
    "id": "three-small-puzzles",
    "moodIds": ["relax"],
    "type": "objective",
    "tags": ["puzzles", "no-timer"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Three Puzzles",
        "objective": "Open a **relaxed puzzle game** and solve **three short puzzles**. Pick any comfortable difficulty and use hints if you want.",
        "gameObjective": "In **{{game}}**, **solve three short puzzles** at a comfortable difficulty. Hints are welcome."
      },
      "de": {
        "name": "Drei Rätsel",
        "objective": "Starte ein **entspanntes Rätselspiel** und löse **drei kurze Rätsel**. Wähle eine angenehme Schwierigkeit und nutze Hinweise, wenn du möchtest.",
        "gameObjective": "**Löse in {{game}} drei kurze Rätsel** auf einer angenehmen Schwierigkeit. Hinweise sind willkommen."
      }
    },
    "experience": {
      "family": "puzzle-set",
      "cardMetadata": { "genreIds": ["puzzle"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["puzzles"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Three short puzzles with hints available",
          "de": "Drei kurze Rätsel mit Hinweisen verfügbar",
          "chips": {"en": ["Hints"], "de": ["Hinweise"]},
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
    "gameGenreIds": ["puzzle"],
    "customGameCompatibility": {
      "capabilityIds": ["puzzles"]
    }
  },
  {
    "id": "familiar-level",
    "moodIds": ["relax", "overwhelmed"],
    "type": "objective",
    "tags": ["traversal"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Familiar Level",
        "objective": "Open a **platformer you already know** and replay a familiar level. Use any assists you like and **reach the end**. Ignore scores and collectibles.",
        "gameObjective": "Replay a familiar platforming level in **{{game}}** and **reach the end**. Use any assists you like."
      },
      "de": {
        "name": "Vertrautes Level",
        "objective": "Starte einen **Plattformer, den du gut kennst**, und spiele ein vertrautes Level noch einmal. Nutze beliebige Hilfen und **erreiche das Ende**. Punkte und Sammelobjekte sind egal.",
        "gameObjective": "Spiel in **{{game}}** ein vertrautes Plattformlevel erneut und **erreiche das Ende**. Nutze beliebige Hilfen."
      }
    },
    "experience": {
      "family": "familiar-platform-level",
      "cardMetadata": { "genreIds": ["platformer"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["traversal"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Familiar replayable platforming level",
          "de": "Vertrautes wiederholbares Plattform-Level",
          "chips": {"en": ["Platforming level"], "de": ["Plattform-Level"]},
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
    "gameGenreIds": ["platformer"],
    "customGameCompatibility": {
      "capabilityIds": ["platforming", "missions-or-levels"]
    }
  },
  {
    "id": "small-town-routine",
    "moodIds": ["relax"],
    "type": "inspiration",
    "tags": [],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Around Town",
        "objective": "Open **a gentle life sim** and visit a town you know. **Drop by familiar shops and neighbors**. Follow the day without an errands list.",
        "gameObjective": "Visit a familiar town in **{{game}}** and **drop by its shops and neighbors**. Follow the day without an errands list."
      },
      "de": {
        "name": "Im Ort unterwegs",
        "objective": "Starte **eine ruhige Lebenssimulation** und besuche einen vertrauten Ort. **Schau bei bekannten Läden und Nachbarn vorbei**. Lass den Tag ohne Aufgabenliste laufen.",
        "gameObjective": "Besuche in **{{game}}** einen vertrauten Ort und **schau bei seinen Läden und Nachbarn vorbei**. Lass den Tag ohne Aufgabenliste laufen."
      }
    },
    "experience": {
      "family": "town-roaming",
      "cardMetadata": { "genreIds": ["simulation", "cozy"], "playStyleIds": [] },
      "finish": "open",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "en": "Familiar accessible town with shops and neighbors",
          "de": "Vertrauter zugänglicher Ort mit Läden und Nachbarn",
          "chips": {"en": ["Town"], "de": ["Ort"]},
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
    "gameGenreIds": ["simulation", "cozy"],
    "customGameCompatibility": {
      "capabilityIds": ["open-world", "choices-or-lore"]
    }
  },
  {
    "id": "a-little-walk",
    "moodIds": ["relax", "low-energy", "nostalgic"],
    "type": "inspiration",
    "tags": ["free-roam", "on-foot"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "A Little Walk",
        "objective": "Open a **freely explorable game**. Walk through a place you like and **follow the scenery instead of objectives**. Go wherever looks interesting.",
        "gameObjective": "Open **{{game}}**. Walk through a place you like and **follow the scenery instead of objectives**. Go wherever looks interesting."
      },
      "de": {
        "name": "Ein kleiner Spaziergang",
        "objective": "Starte ein **Spiel mit offener Welt**. Geh an einen Ort, den du magst, und **schau dich dort um, statt einem Ziel zu folgen**. Lauf weiter, wenn dich etwas neugierig macht.",
        "gameObjective": "Starte **{{game}}**. Geh an einen Ort, den du magst, und **schau dich dort um, statt einem Ziel zu folgen**. Lauf weiter, wenn dich etwas neugierig macht."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["open-world"]
    },
    "experience": {
      "family": "free-roam",
      "cardMetadata": { "genreIds": ["adventure"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["free-roam"],
      "rules": ["on-foot"],
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
    "gameGenreIds": ["adventure"]
  },
  {
    "id": "puzzle-small-step",
    "moodIds": ["relax", "low-energy", "overwhelmed"],
    "type": "objective",
    "tags": ["puzzles", "no-timer"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "One Puzzle",
        "objective": "Open a **relaxed puzzle game**. Pick one untimed puzzle and **solve just that one**. Use hints whenever you like.",
        "gameObjective": "Open **{{game}}**. Pick one untimed puzzle and **solve just that one**. Use hints whenever you like."
      },
      "de": {
        "name": "Ein Rätsel",
        "objective": "Starte ein **entspanntes Rätselspiel**. Nimm ein Rätsel ohne Zeitlimit und **löse nur dieses eine**. Nutze Hinweise, wann du möchtest.",
        "gameObjective": "Starte **{{game}}**. Nimm ein Rätsel ohne Zeitlimit und **löse nur dieses eine**. Nutze Hinweise, wann du möchtest."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["puzzles"]
    },
    "experience": {
      "family": "one-puzzle",
      "cardMetadata": { "genreIds": ["puzzle"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["puzzles"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Ein Rätsel ohne Zeitlimit",
          "en": "One untimed puzzle",
          "chips": {"en": ["Untimed puzzle"], "de": ["Rätsel ohne Zeitlimit"]},
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
    "id": "going-fishing",
    "moodIds": ["relax", "low-energy"],
    "type": "objective",
    "tags": ["fishing"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Three Fish",
        "objective": "Open a **game with fishing**. Head to a fishing spot and **catch three fish** of any kind.",
        "gameObjective": "Open **{{game}}**. Head to a fishing spot and **catch three fish** of any kind."
      },
      "de": {
        "name": "Drei Fische",
        "objective": "Starte ein **Spiel mit Angeln**. Geh zu einer Angelstelle und **fange drei beliebige Fische**.",
        "gameObjective": "Starte **{{game}}**. Geh zu einer Angelstelle und **fange drei beliebige Fische**."
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
          "de": "Angel und Köder bereit",
          "en": "Rod and bait ready",
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
    "id": "first-recipe",
    "moodIds": ["relax", "low-energy", "overwhelmed", "progress"],
    "type": "objective",
    "tags": ["cooking"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "From the Pantry",
        "objective": "Open a **game with cooking**. Use ingredients you already have and **cook one portion of a known recipe**.",
        "gameObjective": "Open **{{game}}**. Use ingredients you already have and **cook one portion of a known recipe**."
      },
      "de": {
        "name": "Aus der Vorratskammer",
        "objective": "Starte ein **Spiel mit Kochen**. Nutze vorhandene Zutaten und **koche eine Portion nach einem bekannten Rezept**.",
        "gameObjective": "Starte **{{game}}**. Nutze vorhandene Zutaten und **koche eine Portion nach einem bekannten Rezept**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["cooking"]
    },
    "experience": {
      "family": "cooking",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["cooking"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Bekanntes Rezept; Zutaten vorhanden",
          "en": "Known recipe; ingredients owned",
          "chips": {"en": ["Recipe", "Ingredients"], "de": ["Rezept", "Zutaten"]},
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
    "id": "one-patch-at-a-time",
    "moodIds": ["relax", "progress", "low-energy", "overwhelmed"],
    "type": "objective",
    "tags": ["farming"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "One Patch",
        "objective": "Open a **game with farming**. Choose one planted patch. **Harvest its ripe crops and replant the empty spaces**. Leave the rest of the farm for later.",
        "gameObjective": "Open **{{game}}**. Choose one planted patch. **Harvest its ripe crops and replant the empty spaces**. Leave the rest of the farm for later."
      },
      "de": {
        "name": "Ein Beet",
        "objective": "Starte ein **Spiel mit Landwirtschaft**. Wähle ein bepflanztes Beet. **Ernte alles Reife und säe freie Stellen neu ein**. Der Rest des Hofs kommt später.",
        "gameObjective": "Starte **{{game}}**. Wähle ein bepflanztes Beet. **Ernte alles Reife und säe freie Stellen neu ein**. Der Rest des Hofs kommt später."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["grow-crops"]
    },
    "experience": {
      "family": "harvest-replant",
      "cardMetadata": { "genreIds": ["simulation", "cozy"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["farming"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Kleines reifes Beet; Samen zum Nachsäen",
          "en": "Small ripe plot; seeds to replant",
          "chips": {"en": ["Ripe crops", "Seeds"], "de": ["Reife Pflanzen", "Samen"]},
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
    "id": "photo-small-detail",
    "moodIds": ["relax", "create"],
    "type": "creation",
    "tags": ["photography"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "A Small Detail",
        "objective": "Open a **game with photo mode**. Find a small detail nearby and **take a close-up that fills the frame**.",
        "gameObjective": "Open **{{game}}**. Find a small detail nearby and **take a close-up that fills the frame**."
      },
      "de": {
        "name": "Ein kleines Detail",
        "objective": "Starte ein **Spiel mit Fotomodus**. Such ein kleines Detail in deiner Nähe und **mach eine bildfüllende Nahaufnahme**.",
        "gameObjective": "Starte **{{game}}**. Such ein kleines Detail in deiner Nähe und **mach eine bildfüllende Nahaufnahme**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["photo-mode"]
    },
    "experience": {
      "family": "detail-photo",
      "cardMetadata": { "genreIds": ["sandbox"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["photography"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Fotomodus verfügbar",
          "en": "Photo mode available",
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
    "gameGenreIds": ["sandbox"]
  },
  {
    "id": "follow-the-water",
    "moodIds": ["relax", "explore"],
    "type": "inspiration",
    "tags": ["free-roam", "on-foot"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Along the Water",
        "objective": "Open a **freely explorable game**. Find a nearby river or shore and **follow the water on foot**. Take the bends and little paths without choosing a destination.",
        "gameObjective": "Open **{{game}}**. Find a nearby river or shore and **follow the water on foot**. Take the bends and little paths without choosing a destination."
      },
      "de": {
        "name": "Am Wasser entlang",
        "objective": "Starte ein **frei erkundbares Spiel**. Such einen nahen Fluss oder ein Ufer und **folge dem Wasser zu Fuß**. Nimm Biegungen und kleine Wege, ohne ein Ziel festzulegen.",
        "gameObjective": "Starte **{{game}}**. Such einen nahen Fluss oder ein Ufer und **folge dem Wasser zu Fuß**. Nimm Biegungen und kleine Wege, ohne ein Ziel festzulegen."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["open-world"]
    },
    "experience": {
      "family": "waterfront-walk",
      "cardMetadata": { "genreIds": ["adventure"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["free-roam"],
      "rules": ["on-foot"],
      "prerequisites": [
        {
          "de": "Ein Uferweg in der Nähe",
          "en": "Nearby walkable riverbank or shore",
          "chips": {"en": ["Shore"], "de": ["Ufer"]},
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
    "id": "stay-on-this-planet",
    "moodIds": ["relax", "overwhelmed"],
    "type": "inspiration",
    "tags": ["space", "free-roam"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Stay Planetside",
        "objective": "Open a **space game with landable planets**. **Explore around your landing spot** and follow the terrain that draws you farther.",
        "gameObjective": "In **{{game}}**, **explore around your landing spot** and follow the terrain that draws you farther."
      },
      "de": {
        "name": "Auf diesem Planeten",
        "objective": "Starte ein **Weltraumspiel mit begehbaren Planeten**. **Erkunde die Umgebung deines Landeplatzes** und lass dich vom Gelände weiterführen.",
        "gameObjective": "**Erkunde in {{game}} die Umgebung deines Landeplatzes** und lass dich vom Gelände weiterführen."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["space-exploration"]
    },
    "experience": {
      "family": "landing-site-roam",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "open",
      "activities": ["space", "free-roam"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Ein begehbarer Planet mit sicherem Landeplatz",
          "en": "Landable planet with a safe landing site",
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
    "id": "waterfront-break",
    "moodIds": ["relax", "low-energy"],
    "type": "inspiration",
    "tags": ["diving", "free-roam"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "A Dip Nearby",
        "objective": "Open a **freely explorable game with swimming**. Visit safe water nearby and **swim along its edge**. Stay close to places where you can climb out.",
        "gameObjective": "Open **{{game}}**. Visit safe water nearby and **swim along its edge**. Stay close to places where you can climb out."
      },
      "de": {
        "name": "Kurz ins Wasser",
        "objective": "Starte ein **frei erkundbares Spiel mit Schwimmen**. Besuche eine sichere Wasserstelle in der Nähe und **schwimme am Rand entlang**. Bleib nah an erreichbaren Ausstiegen.",
        "gameObjective": "Starte **{{game}}**. Besuche eine sichere Wasserstelle in der Nähe und **schwimme am Rand entlang**. Bleib nah an erreichbaren Ausstiegen."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["swimming", "open-world"]
    },
    "experience": {
      "family": "shore-swimming",
      "cardMetadata": { "genreIds": ["adventure"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["diving", "free-roam"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Sichere Wasserstelle mit erreichbaren Ausstiegen",
          "en": "Safe water with reachable exits",
          "chips": {"en": ["Swimming spot"], "de": ["Badestelle"]},
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
    "id": "favorite-dish-session",
    "moodIds": ["relax", "nostalgic"],
    "type": "inspiration",
    "tags": ["cooking", "replay"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Back in the Kitchen",
        "objective": "Open a **game with cooking**. Return to a familiar kitchen with ingredients already on hand. **Make old favorite dishes** without searching for new recipes.",
        "gameObjective": "Open **{{game}}**. Return to a familiar kitchen with ingredients already on hand. **Make old favorite dishes** without searching for new recipes."
      },
      "de": {
        "name": "Zurück in die Küche",
        "objective": "Starte ein **Spiel mit Kochen**. Kehre mit vorhandenen Zutaten in eine vertraute Küche zurück. **Koche Gerichte, die du früher gern gemacht hast**, ohne nach neuen Rezepten zu suchen.",
        "gameObjective": "Starte **{{game}}**. Kehre mit vorhandenen Zutaten in eine vertraute Küche zurück. **Koche Gerichte, die du früher gern gemacht hast**, ohne nach neuen Rezepten zu suchen."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["cooking"]
    },
    "experience": {
      "family": "cooking",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "open",
      "activities": ["cooking"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Vertraute Küche; Zutaten für Lieblingsrezepte",
          "en": "Familiar kitchen; ingredients for favorite recipes",
          "chips": {"en": ["Kitchen", "Ingredients"], "de": ["Küche", "Zutaten"]},
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
    "id": "animals-off-the-clock",
    "moodIds": ["relax", "low-energy"],
    "type": "inspiration",
    "tags": ["animals"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Around the Animals",
        "objective": "Open a **game with animals in your care**. Visit your settled animals and **take care of their everyday needs**. Enjoy their company without expanding or adopting more.",
        "gameObjective": "Open **{{game}}**. Visit your settled animals and **take care of their everyday needs**. Enjoy their company without expanding or adopting more."
      },
      "de": {
        "name": "Bei den Tieren",
        "objective": "Starte ein **Spiel mit Tieren in deiner Obhut**. Besuche deine Tiere und **kümmere dich um ihre Alltagsbedürfnisse**. Verbringe Zeit bei ihnen, ohne auszubauen oder neue Tiere aufzunehmen.",
        "gameObjective": "Starte **{{game}}**. Besuche deine Tiere und **kümmere dich um ihre Alltagsbedürfnisse**. Verbringe Zeit bei ihnen, ohne auszubauen oder neue Tiere aufzunehmen."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["animal-care"]
    },
    "experience": {
      "family": "animals",
      "cardMetadata": { "genreIds": ["simulation", "cozy"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["animals"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Eigene Tiere und ihre Versorgung verfügbar",
          "en": "Kept animals and their care available",
          "chips": {"en": ["Animals"], "de": ["Tiere"]},
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
    "id": "collection-on-the-way",
    "moodIds": ["relax"],
    "type": "inspiration",
    "tags": ["collectibles"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Along the Way",
        "objective": "Open a **game with collectibles**. Play a familiar, forgiving area and **collect what you pass along the way**. Missed items can stay missed today.",
        "gameObjective": "Open **{{game}}**. Play a familiar, forgiving area and **collect what you pass along the way**. Missed items can stay missed today."
      },
      "de": {
        "name": "Am Wegesrand",
        "objective": "Starte ein **Spiel mit Sammelobjekten**. Spiel einen leichten Abschnitt, den du gut kennst, und **nimm die Sammelobjekte mit, die dir unterwegs begegnen**. Verpasste Items bleiben heute liegen.",
        "gameObjective": "Starte **{{game}}**. Spiel einen leichten Abschnitt, den du gut kennst, und **nimm die Sammelobjekte mit, die dir unterwegs begegnen**. Verpasste Items bleiben heute liegen."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["collectibles"]
    },
    "experience": {
      "family": "collectibles",
      "cardMetadata": { "genreIds": ["adventure"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["collectibles"],
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
    "gameGenreIds": ["adventure"]
  },
  {
    "id": "sports-familiar-fixture",
    "moodIds": ["relax", "overwhelmed"],
    "type": "inspiration",
    "tags": ["vs-bots"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "A Friendly Fixture",
        "objective": "Open a **sports game with CPU opponents**. Choose a familiar team and a comfortable CPU difficulty. **Play for the rhythm of the game**, taking scoring chances as they come without requiring a win.",
        "gameObjective": "In **{{game}}**: Choose a familiar team and a comfortable CPU difficulty. **Play for the rhythm of the game**, taking scoring chances as they come without requiring a win."
      },
      "de": {
        "name": "Ein lockeres Spiel",
        "objective": "Starte ein **Sportspiel mit CPU-Gegnern**. Wähle ein vertrautes Team und eine angenehme CPU-Schwierigkeit. **Spiel im vertrauten Rhythmus** und nutze Torchancen, wie sie kommen. Ein Sieg ist nicht nötig.",
        "gameObjective": "Wähle in **{{game}}** ein vertrautes Team und eine angenehme CPU-Schwierigkeit. **Spiel im vertrauten Rhythmus** und nutze Torchancen, wie sie kommen. Ein Sieg ist nicht nötig."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["sports-goals", "bot-modes", "whole-matches"]
    },
    "experience": {
      "family": "sports-roaming",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "open",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "en": "Solo / bot mode available",
          "de": "Solo- / Bot-Modus verfügbar",
          "chips": {"en": ["Bot mode"], "de": ["Bot-Modus"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "team",
          "mode": "CPU team controlled by one human"
        },
        {
          "connection": "offline",
          "people": "alone",
          "participation": "co-op",
          "formation": "team",
          "mode": "bot teammates and CPU opponents"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "platform-familiar-rhythm",
    "moodIds": ["relax", "nostalgic"],
    "type": "inspiration",
    "tags": ["traversal", "replay"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "The Rhythm Returns",
        "objective": "Open a **game with familiar platforming areas**. Return to a forgiving section and **let its jumps come back to you as you play**. Use assists and retries as you like.",
        "gameObjective": "In **{{game}}**, return to a familiar, forgiving platforming section and **let its jumps come back to you as you play**. Use assists and retries as you like."
      },
      "de": {
        "name": "Der Rhythmus kommt zurück",
        "objective": "Starte ein **Spiel mit vertrauten Sprungpassagen**. Kehre zu einem leichten Abschnitt zurück und **lass dir seine Sprünge beim Spielen wieder einfallen**. Nutze Hilfen und neue Versuche, wie du magst.",
        "gameObjective": "Kehre in **{{game}}** zu einem vertrauten, leichten Plattformabschnitt zurück und **lass dir seine Sprünge beim Spielen wieder einfallen**. Nutze Hilfen und neue Versuche, wie du magst."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["platforming"]
    },
    "experience": {
      "family": "familiar-platforming",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "open",
      "activities": ["traversal"],
      "rules": [],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "platformer", "rhythm"]
  },
  {
    "id": "rhythm-comfort-set",
    "moodIds": ["relax", "low-energy"],
    "type": "inspiration",
    "tags": ["rhythm"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "A Comfortable Tempo",
        "objective": "Open a **rhythm game with selectable difficulty**. Where you can choose difficulty, play songs you already enjoy on an easy setting or no-fail mode if available. **Play for the music and familiar patterns**, without a combo or score requirement.",
        "gameObjective": "In **{{game}}**: Where you can choose difficulty, play songs you already enjoy on an easy setting or no-fail mode if available. **Play for the music and familiar patterns**, without a combo or score requirement."
      },
      "de": {
        "name": "Angenehmes Tempo",
        "objective": "Starte ein **Rhythmusspiel mit wählbarem Schwierigkeitsgrad**. Spiel vertraute Lieblingssongs auf einer leichten Stufe oder, wenn möglich, ohne Scheitern. **Konzentrier dich auf die Musik und bekannte Muster**. Kombo und Punkte sind egal.",
        "gameObjective": "In **{{game}}**: Spiel vertraute Lieblingssongs auf einer leichten Stufe oder, wenn möglich, ohne Scheitern. **Konzentrier dich auf die Musik und bekannte Muster**. Kombo und Punkte sind egal."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["rhythm-play"]
    },
    "experience": {
      "family": "rhythm",
      "cardMetadata": { "genreIds": ["rhythm"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["rhythm"],
      "rules": [],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["rhythm"]
  },
  {
    "id": "relax-road-without-warping",
    "moodIds": ["relax"],
    "type": "inspiration",
    "tags": ["free-roam", "no-fast-travel"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Take the Road",
        "objective": "Open an open world with a road you know. **Travel along it on foot or by an in-world vehicle**. Let side views and weather set the pace without opening fast travel.",
        "gameObjective": "In {{game}}, **follow a familiar road on foot or in a vehicle**. Let the scenery set the pace without using fast travel."
      },
      "de": {
        "name": "Nimm die Straße",
        "objective": "Starte eine offene Welt mit einer vertrauten Straße. **Folge der Straße zu Fuß oder mit einem Fahrzeug**. Schau, was du unterwegs entdeckst, und lass die Schnellreise aus.",
        "gameObjective": "Folge in {{game}} **einer vertrauten Straße zu Fuß oder mit einem Fahrzeug**. Schau, was du unterwegs entdeckst, und lass die Schnellreise aus."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["open-world"],
      "match": "all"
    },
    "experience": {
      "family": "familiar-road",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "open",
      "activities": ["free-roam"],
      "rules": ["no-fast-travel"],
      "prerequisites": [
        {
          "de": "Eine vertraute Straße",
          "en": "A familiar road",
          "chips": {"en": ["Familiar road"], "de": ["Vertraute Straße"]},
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
    "id": "relax-watch-the-weather",
    "moodIds": ["relax"],
    "type": "inspiration",
    "tags": ["free-roam", "no-timer"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Weather Watch",
        "objective": "Open a game world with changing weather. Stay near a safe place and **watch the light, wind, or rain change** while you wander nearby.",
        "gameObjective": "In **{{game}}**, stay near a safe place with changing weather and **watch the light, wind and rain as you wander**."
      },
      "de": {
        "name": "Wetter beobachten",
        "objective": "Starte eine Spielwelt mit wechselndem Wetter. Bleib in der Nähe eines sicheren Ortes und beobachte beim Umhergehen, **wie sich Licht, Wind oder Regen verändern**.",
        "gameObjective": "Bleib in **{{game}}** mit wechselndem Wetter in der Nähe eines sicheren Ortes und **beobachte beim Umhergehen Licht, Wind und Regen**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["open-world", "dynamic-weather"]
    },
    "experience": {
      "family": "weather-roam",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "open",
      "activities": ["free-roam"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Wechselndes Wetter; sicherer Ort zum Umhergehen",
          "en": "Changing weather; safe place to wander",
          "chips": {"en": ["Changing weather"], "de": ["Wechselndes Wetter"]},
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
    "id": "relax-soften-one-corner",
    "moodIds": ["relax", "create"],
    "type": "creation",
    "tags": ["decorating"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Soften a Corner",
        "objective": "Open **a game with a room you can decorate**. Choose one small corner and **finish a cozy arrangement with items you own**. Leave the rest unchanged.",
        "gameObjective": "Open **{{game}}**. Choose one small corner and **finish a cozy arrangement with items you own**. Leave the rest unchanged."
      },
      "de": {
        "name": "Eine Ecke verschönern",
        "objective": "Starte **ein Spiel mit einem dekorierbaren Raum**. Wähle eine kleine Ecke und **richte sie mit Gegenständen, die du schon hast, gemütlich ein**. Lass den Rest unverändert.",
        "gameObjective": "Starte **{{game}}**. Wähle eine kleine Ecke und **richte sie mit Gegenständen, die du schon hast, gemütlich ein**. Lass den Rest unverändert."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["decoration"],
      "match": "all"
    },
    "experience": {
      "family": "cozy-corner",
      "cardMetadata": { "genreIds": ["simulation", "sandbox"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["decorating"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Dekorierbarer Raum; vorhandene Möbel",
          "en": "Decoratable room; owned furniture",
          "chips": {"en": ["Furniture"], "de": ["Möbel"]},
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
    "gameGenreIds": ["simulation", "sandbox"]
  },
  {
    "id": "relax-golden-hour-photo",
    "moodIds": ["relax"],
    "type": "creation",
    "tags": ["photography"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Golden Hour",
        "objective": "Open a **game with photo mode**. Find warm or soft light nearby and **save a photo built around that light**.",
        "gameObjective": "Open **{{game}}**. Find warm or soft light nearby and **save one photo built around that light**. Any subject works."
      },
      "de": {
        "name": "Goldene Stunde",
        "objective": "Starte ein **Spiel mit Fotomodus**. Such in der Nähe warmes oder weiches Licht und **mach ein Foto, bei dem dieses Licht im Mittelpunkt steht**.",
        "gameObjective": "Starte **{{game}}**. Such in der Nähe einen Ort mit warmem oder weichem Licht und **mach ein Foto, bei dem dieses Licht im Mittelpunkt steht**. Das Motiv ist dir überlassen."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["photo-mode"],
      "match": "all"
    },
    "experience": {
      "family": "light-photo",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["photography"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Fotomodus; warmes oder weiches Licht erreichbar",
          "en": "Photo mode; reachable warm or soft light",
          "chips": {"en": ["Soft light"], "de": ["Weiches Licht"]},
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
    "id": "relax-build-a-rest-stop",
    "moodIds": ["relax"],
    "type": "creation",
    "tags": ["building"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Rest Stop",
        "objective": "Open **a building game with a settled world**. Use materials already nearby and **finish a small place to sit, sleep, or shelter**. Keep it functional and simple.",
        "gameObjective": "Open **{{game}}**. Use materials already nearby and **finish a small place to sit, sleep, or shelter**. Keep it functional and simple."
      },
      "de": {
        "name": "Rastplatz",
        "objective": "Starte **ein Bauspiel mit einer bestehenden Welt**. Nimm Material aus der Nähe und **bau einen einfachen Rastplatz mit einem Sitzplatz, Bett oder Unterstand**. Hauptsache, du kannst ihn nutzen.",
        "gameObjective": "Starte **{{game}}**. Nimm Material aus der Nähe und **bau einen einfachen Rastplatz mit einem Sitzplatz, Bett oder Unterstand**. Hauptsache, du kannst ihn nutzen."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["building"],
      "match": "all"
    },
    "experience": {
      "family": "rest-stop-building",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["building"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Bauteile oder Materialien bereit",
          "en": "Building pieces or materials ready",
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
    "id": "relax-quiet-orbit",
    "moodIds": ["relax"],
    "type": "inspiration",
    "tags": ["space", "free-roam"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Quiet Orbit",
        "objective": "Open a space game with free flight. Leave combat and missions aside. **Fly around one planet, moon, or station** and take in the scale.",
        "gameObjective": "In {{game}}, **fly freely around a planet, moon or station** and take in the surroundings. Leave combat and missions for later."
      },
      "de": {
        "name": "Ruhige Umlaufbahn",
        "objective": "Starte ein Weltraumspiel mit freiem Flug. Lass Kämpfe und Missionen aus. **Flieg um einen Planeten, Mond oder eine Station** und schau dir an, wie weit das All um dich herum reicht.",
        "gameObjective": "Flieg in {{game}} **frei um einen Planeten, Mond oder eine Station** und schau dir die Umgebung an. Lass Kämpfe und Missionen für später."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["free-space-flight"]
    },
    "experience": {
      "family": "space",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "open",
      "activities": ["space", "free-roam"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Freier Weltraumflug möglich",
          "en": "Free space flight available",
          "chips": {"en": ["Space flight"], "de": ["Weltraumflug"]},
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
  }
]);
