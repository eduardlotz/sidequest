import { defineQuests } from "./defineQuests";

export const LowEnergyQuests = defineQuests([
  {
    "id": "auto-read-chapter",
    "moodIds": ["low-energy"],
    "type": "inspiration",
    "tags": ["dialogue"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Let the Story Run",
        "objective": "Continue a **visual novel with auto-read**. **Let the dialogue play** and make choices as they come.",
        "gameObjective": "With auto-read available in **{{game}}**, **let the dialogue play** and make choices as they come."
      },
      "de": {
        "name": "Die Geschichte läuft",
        "objective": "Setze eine **Visual Novel mit Auto-Modus** fort. **Lass die Dialoge weiterlaufen** und entscheide, wenn das Spiel dich fragt.",
        "gameObjective": "**Lass in {{game}} mit verfügbarem Auto-Modus den Dialog laufen** und entscheide, wenn das Spiel dich fragt."
      }
    },
    "experience": {
      "family": "dialogue",
      "cardMetadata": { "genreIds": ["narrative"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["dialogue"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Visual novel with auto-read",
          "de": "Visual Novel mit Auto-Modus",
          "chips": {"en": ["Visual Novel"], "de": ["Visual Novel"]},
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
    "gameGenreIds": ["narrative"],
    "customGameOverrideOnly": true
  },
  {
    "id": "five-exhibits",
    "moodIds": ["low-energy"],
    "type": "inspiration",
    "tags": ["free-roam"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Museum Visit",
        "objective": "Visit a peaceful **museum or gallery in a game**. **Browse the exhibits** and linger at whatever catches your eye.",
        "gameObjective": "Visit a peaceful museum or gallery in **{{game}}**. **Browse the exhibits** and linger at whatever catches your eye."
      },
      "de": {
        "name": "Museumsbesuch",
        "objective": "Besuche ein ruhiges **Museum oder eine Galerie in einem Spiel**. **Schau dir die Ausstellungsstücke an** und bleib bei denen stehen, die dich interessieren.",
        "gameObjective": "Besuche in **{{game}}** ein ruhiges Museum oder eine Galerie. **Schau dir die Ausstellungsstücke an** und bleib bei dem, was dich interessiert."
      }
    },
    "experience": {
      "family": "museum-browsing",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "open",
      "activities": ["free-roam"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Peaceful museum or gallery available",
          "de": "Ruhiges Museum oder Galerie zugänglich",
          "chips": {"en": ["Museum", "Gallery"], "de": ["Museum", "Galerie"]},
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
    "gameGenreIds": [],
    "customGameOverrideOnly": true
  },
  {
    "id": "one-solitaire-hand",
    "moodIds": ["low-energy"],
    "type": "objective",
    "tags": ["one-round", "no-timer"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "One Hand",
        "objective": "Open **digital solitaire without a timer**. Play the first deal until **you clear the cards or run out of moves**. Undo and hints are allowed.",
        "gameObjective": "In **{{game}}**, play an untimed solitaire deal until **you clear the cards or run out of moves**. Undo and hints are allowed."
      },
      "de": {
        "name": "Eine Partie",
        "objective": "Öffne **eine Partie Solitaire ohne Zeitlimit**. Spiel die Auslage, bis **alle Karten abgelegt sind oder du nicht mehr ziehen kannst**. Hinweise und Rückgängig sind erlaubt.",
        "gameObjective": "Spiel in **{{game}}** eine Solitaire-Auslage ohne Zeitlimit, bis **alle Karten abgelegt sind oder du nicht mehr ziehen kannst**. Hinweise und Rückgängig sind erlaubt."
      }
    },
    "experience": {
      "family": "solitaire",
      "cardMetadata": { "genreIds": ["card"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["cards"],
      "rules": ["one-round"],
      "prerequisites": [
        {
          "en": "Untimed solitaire; hints and undo available",
          "de": "Solitaire ohne Zeitlimit; Hinweise und Rückgängig verfügbar",
          "chips": {"en": ["Solitaire"], "de": ["Solitaire"]},
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
    "gameGenreIds": ["card"],
    "customGameOverrideOnly": true
  },
  {
    "id": "small-jigsaw",
    "moodIds": ["low-energy"],
    "type": "objective",
    "tags": ["puzzles", "no-timer"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Small Jigsaw",
        "objective": "Choose a **digital jigsaw of no more than fifty pieces**. Use the preview image and any sorting help, then **put the last piece in place**.",
        "gameObjective": "In **{{game}}**, choose a jigsaw with no more than fifty pieces. Use the preview and sorting help and **put the last piece in place**."
      },
      "de": {
        "name": "Kleines Puzzle",
        "objective": "Nimm ein **digitales Puzzle mit höchstens fünfzig Teilen**. Nutze das Vorschaubild und Sortierhilfen und **setze das letzte Teil ein**.",
        "gameObjective": "Wähle in **{{game}}** ein Puzzle mit höchstens fünfzig Teilen. Nutze Vorschau und Sortierhilfen und **setze das letzte Teil ein**."
      }
    },
    "experience": {
      "family": "puzzles",
      "cardMetadata": { "genreIds": ["puzzle"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["puzzles"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Jigsaw of at most 50 pieces; preview and sorting help",
          "de": "Puzzle mit höchstens 50 Teilen; Vorschau und Sortierhilfe",
          "chips": {"en": ["Small jigsaw"], "de": ["Kleines Puzzle"]},
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
    "customGameOverrideOnly": true
  },
  {
    "id": "hidden-object-browse",
    "moodIds": ["low-energy"],
    "type": "inspiration",
    "tags": [],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Hidden Details",
        "objective": "Open **an untimed hidden-object game**. **Browse the scene for hidden details** and use hints whenever you like.",
        "gameObjective": "In an untimed hidden-object scene in **{{game}}**, **browse for hidden details**. Use hints whenever you like."
      },
      "de": {
        "name": "Versteckte Details",
        "objective": "Starte **ein Wimmelbildspiel ohne Zeitlimit**. **Such in der Szene nach versteckten Details** und nutze Hinweise, wann du möchtest.",
        "gameObjective": "**Such in {{game}} in einer Wimmelbildszene ohne Zeitlimit nach versteckten Details**. Nutze Hinweise, wann du möchtest."
      }
    },
    "experience": {
      "family": "hidden-object",
      "cardMetadata": { "genreIds": ["puzzle"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["puzzles"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Untimed hidden-object scene with hints",
          "de": "Wimmelbildszene ohne Zeitlimit mit Hinweisen",
          "chips": {"en": ["Hidden objects"], "de": ["Wimmelbild"]},
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
    "customGameOverrideOnly": true
  },
  {
    "id": "story-without-rushing",
    "moodIds": ["low-energy", "overwhelmed"],
    "type": "inspiration",
    "tags": ["current-save", "story"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Let It Unfold",
        "objective": "Open a **familiar story game**. Continue your current mission and **take time for its conversations**.",
        "gameObjective": "In **{{game}}**, continue your current mission and **take time for its conversations**."
      },
      "de": {
        "name": "In Ruhe weiterspielen",
        "objective": "Starte ein **vertrautes Storyspiel**. Spiel deinen aktuellen Auftrag weiter und **nimm dir Zeit für die Gespräche unterwegs**.",
        "gameObjective": "Spiel in **{{game}}** deinen aktuellen Auftrag weiter und **nimm dir Zeit für die Gespräche unterwegs**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["missions-or-levels"],
      "genreIds": ["adventure", "rpg", "narrative"]
    },
    "experience": {
      "family": "story",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "open",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Laufender Auftrag mit Gesprächen",
          "en": "Current mission with conversations",
          "chips": {"en": ["Current mission"], "de": ["Laufender Auftrag"]},
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
    "gameGenreIds": ["adventure", "rpg", "narrative"]
  },
  {
    "id": "puzzle-familiar-rules",
    "moodIds": ["low-energy", "relax"],
    "type": "inspiration",
    "tags": ["puzzles"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Rules You Know",
        "objective": "Open a **puzzle game with familiar rules**. **Settle into solving** and use whatever help you enjoy.",
        "gameObjective": "In **{{game}}**, **solve puzzles with familiar rules at your own pace** and use whatever help you enjoy."
      },
      "de": {
        "name": "Bekannte Regeln",
        "objective": "Starte ein **Rätselspiel mit Regeln, die du kennst**. **Löse Rätsel in deinem Tempo** und nutze die Hilfen, die dir gefallen.",
        "gameObjective": "**Löse in {{game}} Rätsel mit vertrauten Regeln in deinem Tempo** und nutze die Hilfen, die dir gefallen."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["puzzles"]
    },
    "experience": {
      "family": "puzzles",
      "cardMetadata": { "genreIds": ["puzzle"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["puzzles"],
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
    "gameGenreIds": ["puzzle"]
  },
  {
    "id": "low-energy-one-conversation",
    "moodIds": ["low-energy"],
    "type": "objective",
    "tags": ["dialogue"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "One Conversation",
        "objective": "Open **a story game with a conversation nearby**. Speak to the character and **follow their story through the conversation**.",
        "gameObjective": "In **{{game}}**, speak to a nearby character and **follow their story through the conversation**."
      },
      "de": {
        "name": "Ein Gespräch",
        "objective": "Starte **ein Storyspiel mit einem Gespräch in deiner Nähe**. Sprich mit der Figur und **hör dir ihre Geschichte bis zum Ende an**.",
        "gameObjective": "Sprich in **{{game}}** mit einer Figur in deiner Nähe und **hör dir ihre Geschichte bis zum Gesprächsende an**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["optional-dialogue"]
    },
    "experience": {
      "family": "nearby-conversation",
      "cardMetadata": { "genreIds": ["narrative", "rpg"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["dialogue"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Gespräch in der Nähe",
          "en": "Nearby conversation",
          "chips": {"en": ["Conversation"], "de": ["Gespräch"]},
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
    "id": "low-energy-bot-round",
    "moodIds": ["low-energy", "overwhelmed"],
    "type": "objective",
    "tags": ["one-round", "vs-bots"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Easy Bot Round",
        "objective": "Open **a familiar game with short bot rounds**. Keep the default setup and **finish one round against bots**. The result does not matter.",
        "gameObjective": "Open **{{game}}**. Keep the default setup and **finish one round against bots**. The result does not matter."
      },
      "de": {
        "name": "Leichte Bot-Runde",
        "objective": "Starte **ein vertrautes Spiel mit kurzen Bot-Runden**. Behalte die Standardausrüstung und **beende eine Runde gegen Bots**. Das Ergebnis ist egal.",
        "gameObjective": "Starte **{{game}}**. Behalte die Standardausrüstung und **beende eine Runde gegen Bots**. Das Ergebnis ist egal."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["rounds-or-matches", "bot-modes"]
    },
    "experience": {
      "family": "bot-round",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["one-round"],
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
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "sports", "fighting"]
  },
  {
    "id": "low-energy-ready-harvest",
    "moodIds": ["low-energy"],
    "type": "objective",
    "tags": ["farming"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Ready to Harvest",
        "objective": "Open **a farming game with a small plot of ripe crops**. **Harvest that plot** and leave the rest of the farm for later.",
        "gameObjective": "In **{{game}}**, **harvest a small plot of ripe crops** and leave the rest of the farm for later."
      },
      "de": {
        "name": "Erntebereit",
        "objective": "Starte **ein Farmspiel mit einem kleinen Beet voller reifer Pflanzen**. **Ernte dieses Beet**; der Rest des Hofs kommt später.",
        "gameObjective": "**Ernte in {{game}} ein kleines Beet mit reifen Pflanzen**; der Rest des Hofs kommt später."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["grow-crops"],
      "match": "all"
    },
    "experience": {
      "family": "ready-harvest",
      "cardMetadata": { "genreIds": ["simulation", "cozy"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["farming"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Ein kleines Beet mit reifen Pflanzen",
          "en": "Small plot with ripe crops",
          "chips": {"en": ["Ripe crops"], "de": ["Reife Pflanzen"]},
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
    "id": "low-energy-feed-the-pen",
    "moodIds": ["low-energy", "relax"],
    "type": "objective",
    "tags": ["animals"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Feed the Pen",
        "objective": "Open a **game with animals you already keep**. **Feed the hungry animals in one enclosure**.",
        "gameObjective": "In **{{game}}**, **feed the hungry animals in one of your enclosures**."
      },
      "de": {
        "name": "Fütterungszeit",
        "objective": "Starte ein **Spiel mit Tieren, die du bereits hältst**. **Füttere die hungrigen Tiere in einem Gehege**.",
        "gameObjective": "**Füttere in {{game}} die hungrigen Tiere in einem deiner Gehege**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["animal-care"],
      "match": "all"
    },
    "experience": {
      "family": "enclosure-feeding",
      "cardMetadata": { "genreIds": ["simulation", "cozy"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["animals"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Eigene Tiere und Futter für ein Gehege",
          "en": "Kept animals and feed for one enclosure",
          "chips": {"en": ["Animals", "Feed"], "de": ["Tiere", "Futter"]},
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
    "id": "low-energy-nearby-drive",
    "moodIds": ["low-energy"],
    "type": "objective",
    "tags": ["driving", "no-timer"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Nearby Drive",
        "objective": "Open **a driving game with a familiar vehicle**. Pick a destination in sight and **drive there** using your usual assists.",
        "gameObjective": "In **{{game}}**, take a familiar vehicle and **drive to a destination in sight** using your usual assists."
      },
      "de": {
        "name": "Kurze Ausfahrt",
        "objective": "Starte **ein Fahrspiel mit einem vertrauten Fahrzeug**. Such dir ein Ziel in Sichtweite und **fahr dorthin**. Nutze deine gewohnten Fahrhilfen.",
        "gameObjective": "Nimm in **{{game}}** ein vertrautes Fahrzeug und **fahr zu einem Ziel in Sichtweite**. Nutze deine gewohnten Fahrhilfen."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["free-driving"],
      "match": "all"
    },
    "experience": {
      "family": "nearby-drive",
      "cardMetadata": { "genreIds": ["racing", "sandbox"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["driving"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Vertrautes Fahrzeug; Ziel in Sichtweite",
          "en": "Familiar vehicle; visible destination",
          "chips": {"en": ["Vehicle"], "de": ["Fahrzeug"]},
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
    "id": "low-energy-training-return",
    "moodIds": ["low-energy"],
    "type": "objective",
    "tags": ["replay"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Training Return",
        "objective": "Open **a game whose tutorial can be replayed**. Replay one short tutorial section and **reach its completion screen**. Treat it as a controls refresher.",
        "gameObjective": "Open **{{game}}**. Replay one short tutorial section and **reach its completion screen**. Treat it as a controls refresher."
      },
      "de": {
        "name": "Zurück ins Training",
        "objective": "Starte **ein Spiel mit wiederholbarem Tutorial**. Wiederhole einen kurzen Teil des Tutorials und **spiel ihn bis zum Ende**. Frisch dabei einfach die Steuerung auf.",
        "gameObjective": "Starte **{{game}}**. Wiederhole einen kurzen Teil des Tutorials und **spiel ihn bis zum Ende**. Frisch dabei einfach die Steuerung auf."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["replayable-tutorials"]
    },
    "experience": {
      "family": "replay-tutorial",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "de": "Kurzer wiederholbarer Tutorial-Abschnitt",
          "en": "Short replayable tutorial section",
          "chips": {"en": ["Tutorial"], "de": ["Tutorial"]},
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
    "gameGenreIds": ["adventure", "shooter", "platformer"]
  },
  {
    "id": "low-energy-one-lore-page",
    "moodIds": ["low-energy"],
    "type": "objective",
    "tags": ["story"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "One Lore Page",
        "objective": "Open a **game with an unlocked journal or codex**. **Read one unread entry** and follow its story.",
        "gameObjective": "Open **{{game}}**. **Read one unread entry** and follow its story."
      },
      "de": {
        "name": "Eine Lore-Seite",
        "objective": "Starte ein **Spiel mit freigeschaltetem Journal oder Kodex**. **Lies einen ungelesenen Eintrag** und folge seiner Geschichte.",
        "gameObjective": "Starte **{{game}}**. **Lies einen ungelesenen Eintrag** und folge seiner Geschichte."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["readable-journal"]
    },
    "experience": {
      "family": "lore-reading",
      "cardMetadata": { "genreIds": ["narrative", "rpg"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Ein ungelesener Journal- oder Kodexeintrag",
          "en": "Unread journal or codex entry",
          "chips": {"en": ["Journal", "Codex"], "de": ["Journal", "Kodex"]},
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
    "id": "low-energy-nearby-photo",
    "moodIds": ["relax", "create"],
    "type": "creation",
    "tags": ["photography"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Nearby Photo",
        "objective": "Open **a game with photo mode already unlocked**. Photograph the first nearby subject that catches your eye and **save one shot**. Do not travel for a better scene.",
        "gameObjective": "Open **{{game}}**. Photograph the first nearby subject that catches your eye and **save one shot**. Do not travel for a better scene."
      },
      "de": {
        "name": "Foto in der Nähe",
        "objective": "Starte **ein Spiel mit bereits freigeschaltetem Fotomodus**. Fotografiere das erste Motiv in deiner Nähe, das dir auffällt, und **speichere ein Bild**. Reise nicht für eine bessere Szene.",
        "gameObjective": "Starte **{{game}}**. Fotografiere das erste Motiv in deiner Nähe, das dir auffällt, und **speichere ein Bild**. Reise nicht für eine bessere Szene."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["photo-mode"],
      "match": "all"
    },
    "experience": {
      "family": "nearby-photo",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["photography"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Fotomodus freigeschaltet",
          "en": "Photo mode unlocked",
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
    "id": "low-energy-one-song",
    "moodIds": ["low-energy"],
    "type": "objective",
    "tags": ["rhythm"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "One Familiar Song",
        "objective": "Open **a rhythm game with a song you know**. Use a comfortable difficulty and **finish the song once**. Ignore rank and combo.",
        "gameObjective": "Open **{{game}}**. Use a comfortable difficulty and **finish the song once**. Ignore rank and combo."
      },
      "de": {
        "name": "Ein vertrauter Song",
        "objective": "Starte **ein Rhythmusspiel mit einem bekannten Song**. Nutze einen angenehmen Schwierigkeitsgrad und **beende den Song einmal**. Rang und Kombo sind egal.",
        "gameObjective": "Starte **{{game}}**. Nutze einen angenehmen Schwierigkeitsgrad und **beende den Song einmal**. Rang und Kombo sind egal."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["rhythm-play"],
      "match": "all"
    },
    "experience": {
      "family": "rhythm",
      "cardMetadata": { "genreIds": ["rhythm"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["rhythm"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Vertrauter Song freigeschaltet",
          "en": "Familiar song unlocked",
          "chips": {"en": ["Familiar song"], "de": ["Vertrauter Song"]},
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
    "gameGenreIds": ["rhythm"]
  },
  {
    "id": "low-energy-known-deck",
    "moodIds": ["low-energy", "overwhelmed"],
    "type": "objective",
    "tags": ["cards", "vs-bots"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Known Deck",
        "objective": "Open a **card game with a solo or bot mode**. **Play one game with a deck you know well**.",
        "gameObjective": "In a **solo or bot mode in {{game}}**, **play one game with a deck you know well**."
      },
      "de": {
        "name": "Vertrautes Deck",
        "objective": "Starte ein **Kartenspiel mit Solo- oder Bot-Modus**. **Spiel eine Partie mit einem Deck, das du gut kennst**.",
        "gameObjective": "**Spiel in {{game}} im Solo- oder Bot-Modus eine Partie mit einem Deck, das du gut kennst**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["card-decks"],
      "match": "all"
    },
    "experience": {
      "family": "familiar-deck",
      "cardMetadata": { "genreIds": ["card", "roguelike"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["cards"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Familiar legal deck; solo/bot mode",
          "de": "Vertrautes gültiges Deck; Solo-/Bot-Modus",
          "chips": {"en": ["Deck", "Bot mode"], "de": ["Deck", "Bot-Modus"]},
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
    "gameGenreIds": ["card", "roguelike"]
  }
]);
