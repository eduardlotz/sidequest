import { defineQuests } from "./defineQuests";

export const OverwhelmedQuests = defineQuests([
  {
    "id": "ten-minute-save",
    "moodIds": ["overwhelmed", "low-energy"],
    "type": "inspiration",
    "tags": ["current-save"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Just Continue",
        "objective": "Open your **most recently played game with a Continue button**. **Pick up where you left off** with the same save, settings, and equipment.",
        "gameObjective": "On your most recent save in **{{game}}**, **pick up where you left off with the same settings and equipment**."
      },
      "de": {
        "name": "Einfach fortsetzen",
        "objective": "Starte dein **zuletzt gespieltes Spiel, das du direkt fortsetzen kannst**. **Spiel mit deinem bisherigen Spielstand und Setup weiter**, genau dort, wo du aufgehört hast.",
        "gameObjective": "**Setz in {{game}} deinen letzten Spielstand mit denselben Einstellungen und Ausrüstungsgegenständen fort**."
      }
    },
    "experience": {
      "family": "story",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "open",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "en": "Existing save",
          "de": "Vorhandener Spielstand",
          "chips": {"en": ["Existing save"], "de": ["Spielstand"]},
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
    "id": "tutorial-return",
    "moodIds": ["overwhelmed"],
    "type": "inspiration",
    "tags": ["replay"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Back to the Start",
        "objective": "Open **a familiar game with a replayable tutorial**. Use its default setup and **follow the tutorial at your own pace**.",
        "gameObjective": "With a replayable tutorial in **{{game}}**, use its default setup and **follow it at your own pace**."
      },
      "de": {
        "name": "Zurück zum Anfang",
        "objective": "Starte **ein vertrautes Spiel mit wiederholbarem Tutorial**. Nutze die Standardeinstellungen und **folge dem Tutorial in deinem Tempo**.",
        "gameObjective": "**Folge in {{game}} einem wiederholbaren Tutorial in deinem Tempo** und nutze sein Standardsetup."
      }
    },
    "experience": {
      "family": "replay-tutorial",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "open",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "en": "Familiar replayable tutorial with default setup",
          "de": "Vertrautes wiederholbares Tutorial mit Standardsetup",
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
    "gameGenreIds": [],
    "customGameCompatibility": {
      "capabilityIds": ["replayable-tutorials"]
    }
  },
  {
    "id": "todays-puzzle",
    "moodIds": ["overwhelmed"],
    "type": "objective",
    "tags": ["puzzles", "no-timer"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Today’s Puzzle",
        "objective": "Open your last-played **puzzle game with an untimed daily puzzle**. **Solve today’s puzzle** with any hints you need. Ignore streaks and leaderboards.",
        "gameObjective": "With an untimed daily puzzle in **{{game}}**, **solve today’s puzzle** with any hints you need."
      },
      "de": {
        "name": "Das heutige Rätsel",
        "objective": "Starte dein zuletzt gespieltes **Rätselspiel mit täglichem Rätsel ohne Zeitlimit**. **Löse das heutige Rätsel** mit beliebigen Hinweisen. Serien und Ranglisten sind egal.",
        "gameObjective": "**Löse in {{game}} das heutige Tagesrätsel ohne Zeitlimit** mit beliebigen Hinweisen."
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
          "en": "Untimed daily puzzle with hints available",
          "de": "Tagesrätsel ohne Zeitlimit mit Hinweisen verfügbar",
          "chips": {"en": ["Daily puzzle"], "de": ["Tagesrätsel"]},
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
    "id": "one-corner",
    "moodIds": ["overwhelmed"],
    "type": "objective",
    "tags": ["decorating"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "One Corner",
        "objective": "Open **a decorating game with a furnished room**. Rearrange the corner by its entrance using furniture you own. **Make one small, clear space and save the arrangement**.",
        "gameObjective": "In **{{game}}**, rearrange the corner by a furnished room’s entrance using furniture you own. **Make one small, clear space and save the arrangement**."
      },
      "de": {
        "name": "Eine Ecke",
        "objective": "Starte **ein Einrichtungsspiel mit einem möblierten Raum**. Räum die Ecke am Eingang mit deinen vorhandenen Möbeln neu ein. **Mach daraus einen kleinen, übersichtlichen Platz und speichere die Anordnung**.",
        "gameObjective": "Räum in **{{game}}** die Ecke am Eingang eines möblierten Raums mit deinen vorhandenen Möbeln neu ein. **Mach daraus einen kleinen, übersichtlichen Platz und speichere die Anordnung**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["decoration"]
    },
    "experience": {
      "family": "arrange-entry-corner",
      "cardMetadata": { "genreIds": ["simulation", "sandbox"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["decorating"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Furnished room you can redecorate",
          "de": "Möblierter Raum, den du umgestalten kannst",
          "chips": {"en": ["Furnished room"], "de": ["Möblierter Raum"]},
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
    "id": "one-known-bot-mode",
    "moodIds": ["overwhelmed"],
    "type": "inspiration",
    "tags": ["vs-bots"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Ease Back In",
        "objective": "Open **a familiar solo or bot mode**. Keep your usual setup and **get comfortable with the controls again**. No difficulty changes or required wins.",
        "gameObjective": "In a familiar solo or bot mode in **{{game}}**, keep your usual setup and **get comfortable with the controls again**."
      },
      "de": {
        "name": "Wieder reinkommen",
        "objective": "Starte **einen vertrauten Solo- oder Bot-Modus**. Behalte dein Setup und **gewöhn dich beim Spielen wieder an die Steuerung**.",
        "gameObjective": "Behalte in **{{game}}** in einem vertrauten Solo- oder Bot-Modus dein Setup und **gewöhn dich beim Spielen wieder an die Steuerung**."
      }
    },
    "experience": {
      "family": "familiar-mode",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
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
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["card", "shooter", "moba", "strategy", "sports", "fighting"],
    "customGameOverrideOnly": true
  },
  {
    "id": "default-round",
    "moodIds": ["overwhelmed", "low-energy"],
    "type": "objective",
    "tags": ["one-round"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "One Round",
        "objective": "Open a **familiar game with short rounds**. Keep your setup and **play one full, standalone round**. Accept the result and stop there.",
        "gameObjective": "Open **{{game}}**. Keep your setup and **play one full, standalone round**. Accept the result and stop there."
      },
      "de": {
        "name": "Eine Runde",
        "objective": "Starte ein **vertrautes Spiel mit kurzen Runden**. Behalte dein Setup und **spiel eine ganze Runde**. Nimm das Ergebnis an und hör danach auf.",
        "gameObjective": "Starte **{{game}}**. Behalte dein Setup und **spiel eine ganze Runde**. Nimm das Ergebnis an und hör danach auf."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["rounds-or-matches"]
    },
    "experience": {
      "family": "standalone-round",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["one-round"],
      "prerequisites": [],
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
    "gameGenreIds": ["card", "shooter", "moba", "strategy", "sports", "rhythm", "fighting"]
  },
  {
    "id": "trade-three-kinds",
    "moodIds": ["overwhelmed", "low-energy", "progress"],
    "type": "objective",
    "tags": ["trading"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Clear the Pack",
        "objective": "Open a **game with a nearby merchant**. **Sell the unused items you already meant to clear out**.",
        "gameObjective": "Open **{{game}}**. **Sell the unused items you already meant to clear out**."
      },
      "de": {
        "name": "Platz im Gepäck",
        "objective": "Starte ein **Spiel mit einem Händler in der Nähe**. **Verkauf die ungenutzten Gegenstände, die du ohnehin aussortieren wolltest**.",
        "gameObjective": "Starte **{{game}}**. **Verkauf die ungenutzten Gegenstände, die du ohnehin aussortieren wolltest**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["trading"]
    },
    "experience": {
      "family": "sell-unwanted-items",
      "cardMetadata": { "genreIds": ["rpg"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["trading"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Händler in der Nähe, der deine ungenutzten Items kauft",
          "en": "Nearby merchant who buys your unwanted items",
          "chips": {"en": ["Merchant"], "de": ["Händler"]},
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
    "gameGenreIds": ["rpg"]
  },
  {
    "id": "one-mode-evening",
    "moodIds": ["overwhelmed", "restless"],
    "type": "inspiration",
    "tags": [],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Stay in the Mode",
        "objective": "Open a **game with short standalone rounds**. Keep a familiar mode and setup and **spend the session playing**. Finish each round before deciding whether to start another.",
        "gameObjective": "Open **{{game}}**. Keep a familiar mode and setup and **spend the session playing**. Finish each round before deciding whether to start another."
      },
      "de": {
        "name": "Beim Modus bleiben",
        "objective": "Starte ein **Spiel mit kurzen eigenständigen Runden**. Such dir einen vertrauten Modus aus und **bleib für diese Session dabei**. Behalte dein Setup und spiel jede Runde zu Ende.",
        "gameObjective": "Starte **{{game}}**. Such dir einen vertrauten Modus aus und **bleib für diese Session dabei**. Behalte dein Setup und spiel jede Runde zu Ende."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["rounds-or-matches"]
    },
    "experience": {
      "family": "standalone-roaming",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "open",
      "activities": [],
      "rules": [],
      "prerequisites": [],
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
    "gameGenreIds": ["card", "shooter", "moba", "strategy", "sports", "rhythm", "fighting"]
  },
  {
    "id": "character-comfort-pick",
    "moodIds": ["overwhelmed", "low-energy"],
    "type": "inspiration",
    "tags": ["abilities"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "translations": {
      "en": {
        "name": "Comfort Pick",
        "objective": "Open a **game with selectable characters and a forgiving mode**. Choose your most familiar character in a forgiving mode you already use. **Play with the abilities you know**, without comparing the whole roster or chasing a performance target. Finish each match normally.",
        "gameObjective": "In **{{game}}**: Choose your most familiar character in a forgiving mode you already use. **Play with the abilities you know**, without comparing the whole roster or chasing a performance target. Finish each match normally."
      },
      "de": {
        "name": "Vertraute Wahl",
        "objective": "Starte **ein Spiel mit Figurenwahl und einem entspannten Modus**. Nimm die Figur, die du am besten kennst, und **spiel mit ihren vertrauten Fähigkeiten**.",
        "gameObjective": "Nimm in **{{game}}** in einem entspannten Modus die Figur, die du am besten kennst, und **spiel mit ihren vertrauten Fähigkeiten**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["character-abilities", "whole-matches"]
    },
    "experience": {
      "family": "abilities",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "open",
      "activities": ["abilities"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Vertraute Figur und entspannter Modus",
          "en": "Familiar character and forgiving mode",
          "chips": {"en": ["Forgiving mode"], "de": ["Entspannter Modus"]},
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
    "gameGenreIds": ["shooter", "rpg", "roguelike", "fighting", "moba"]
  },
  {
    "id": "deck-play-the-familiar",
    "moodIds": ["overwhelmed", "low-energy"],
    "type": "inspiration",
    "tags": ["cards", "vs-bots"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "The Deck You Know",
        "objective": "Open a **card game with a familiar saved deck**. Pick a saved deck you already understand and a forgiving solo or bot mode. **Enjoy its familiar combinations** without rebuilding it or studying new lists.",
        "gameObjective": "In **{{game}}**: Pick a saved deck you already understand and a forgiving solo or bot mode. **Enjoy its familiar combinations** without rebuilding it or studying new lists."
      },
      "de": {
        "name": "Dein vertrautes Deck",
        "objective": "Starte **ein Kartenspiel mit deinem vertrauten Deck**. Nimm einen entspannten Solo- oder Bot-Modus und **spiel die Kombinationen, die du schon kennst**.",
        "gameObjective": "Nimm in **{{game}}** dein vertrautes Deck in einen entspannten Solo- oder Bot-Modus und **spiel die Kombinationen, die du schon kennst**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["card-decks"]
    },
    "experience": {
      "family": "cards",
      "cardMetadata": { "genreIds": ["card"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["cards"],
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
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["card"]
  },
  {
    "id": "automation-one-line-only",
    "moodIds": ["overwhelmed"],
    "type": "inspiration",
    "tags": ["automation"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Stay With This Line",
        "objective": "Open **an automation game with an existing factory**. Return to a working production line and **watch and tend that line**. Expansion plans and the rest of the factory can wait.",
        "gameObjective": "In **{{game}}**: Return to one production line that already works. **Spend the session watching and tending that line**, leaving expansion plans and the rest of the factory for later."
      },
      "de": {
        "name": "Bei dieser Kette bleiben",
        "objective": "Starte ein **Automatisierungsspiel mit einer bestehenden Fabrik**. Kehre zu einer bereits funktionierenden Produktionskette zurück. **Schau der Kette beim Laufen zu und greif ein, wenn sie stockt**. Ausbaupläne und der Rest der Fabrik kommen später.",
        "gameObjective": "In **{{game}}**: Kehre zu einer bereits funktionierenden Produktionskette zurück. **Schau der Kette beim Laufen zu und greif ein, wenn sie stockt**. Ausbaupläne und der Rest der Fabrik kommen später."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["automation"]
    },
    "experience": {
      "family": "automation",
      "cardMetadata": { "genreIds": ["simulation", "sandbox"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["automation"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Bestehende Fabrik mit funktionierender Produktionslinie",
          "en": "Existing factory with a working production line",
          "chips": {"en": ["Working factory"], "de": ["Laufende Fabrik"]},
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
    "id": "overwhelmed-defaults-only",
    "moodIds": ["overwhelmed"],
    "type": "inspiration",
    "tags": [],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Use the Defaults",
        "objective": "Open **an installed game with a short introduction**. Use the recommended settings and **let the introduction lead you into play**. Adjust the controls for your comfort.",
        "gameObjective": "Use the recommended settings in **{{game}}** and **let its short introduction lead you into play**. Adjust the controls for your comfort."
      },
      "de": {
        "name": "Bei Standard bleiben",
        "objective": "Starte **ein installiertes Spiel mit einer kurzen Einführung**. Nimm die empfohlenen Einstellungen und **lass dich von der Einführung ins Spiel führen**. Passe die Bedienung so an, dass sie für dich bequem ist.",
        "gameObjective": "Nimm in **{{game}}** die empfohlenen Einstellungen und **lass dich von der kurzen Einführung ins Spiel führen**. Passe die Bedienung so an, dass sie für dich bequem ist."
      }
    },
    "experience": {
      "family": "first-introduction",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "open",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "en": "an installed game with a short introduction",
          "de": "ein installiertes Spiel mit kurzer Einführung",
          "chips": {"en": ["Short introduction"], "de": ["Kurze Einführung"]},
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
    "id": "overwhelmed-familiar-fifteen",
    "moodIds": ["overwhelmed"],
    "type": "inspiration",
    "tags": ["replay"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Familiar Fifteen",
        "objective": "Open a game you can control without thinking. Return to a familiar mode or area and **let muscle memory choose the actions**. There is nothing to prepare or prove.",
        "gameObjective": "Open {{game}}. Return to a familiar mode or area and **let muscle memory choose the actions**. There is nothing to prepare or prove."
      },
      "de": {
        "name": "Vertraute Viertelstunde",
        "objective": "Starte ein Spiel, das du ohne Nachdenken steuern kannst. Kehre in einen vertrauten Modus oder Bereich zurück und **mach einfach das, was du noch aus Gewohnheit kannst**. Es gibt nichts vorzubereiten oder zu beweisen.",
        "gameObjective": "Starte {{game}}. Kehre in einen vertrauten Modus oder Bereich zurück und **mach einfach das, was du noch aus Gewohnheit kannst**. Es gibt nichts vorzubereiten oder zu beweisen."
      }
    },
    "experience": {
      "family": "revisit",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "open",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "en": "a game you can control without thinking",
          "de": "ein Spiel, das du ohne Nachdenken steuern kannst",
          "chips": {"en": ["Familiar controls"], "de": ["Vertraute Steuerung"]},
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
    "id": "overwhelmed-nearest-side-activity",
    "moodIds": ["overwhelmed"],
    "type": "objective",
    "tags": ["current-save"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Nearest Activity",
        "objective": "Open **an open-world save with a small activity nearby**. Go to that activity and **complete it**. The other markers can wait.",
        "gameObjective": "In **{{game}}**, choose a small activity near your current save and **complete it**. The other markers can wait."
      },
      "de": {
        "name": "Nächste Aktivität",
        "objective": "Starte **einen Open-World-Spielstand mit einer kleinen Aktivität in der Nähe**. Geh zu dieser Aktivität und **schließe sie ab**. Die übrigen Marker können warten.",
        "gameObjective": "Such dir in **{{game}}** eine kleine Aktivität in der Nähe deines aktuellen Spielstands aus und **schließe sie ab**. Die übrigen Marker können warten."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["open-world", "missions-or-levels"],
      "match": "all"
    },
    "experience": {
      "family": "nearby-side-activity",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "de": "Kleine sichtbare Aktivität in der Nähe",
          "en": "Small visible activity nearby",
          "chips": {"en": ["Nearby activity"], "de": ["Aktivität in der Nähe"]},
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
    "gameGenreIds": ["adventure", "rpg", "sandbox"]
  },
  {
    "id": "overwhelmed-pinned-recipe",
    "moodIds": ["overwhelmed"],
    "type": "objective",
    "tags": ["crafting"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Pinned Recipe",
        "objective": "Open **a game with one recipe already pinned or tracked**. Follow only its listed materials and **craft that pinned item once**. Ignore every other recipe and upgrade.",
        "gameObjective": "Open **{{game}}**. Follow only its listed materials and **craft that pinned item once**. Ignore every other recipe and upgrade."
      },
      "de": {
        "name": "Angeheftetes Rezept",
        "objective": "Starte **ein Spiel mit einem bereits angehefteten oder verfolgten Rezept**. Folge nur den aufgelisteten Materialien und **stelle dieses angeheftete Item einmal her**. Ignoriere alle anderen Rezepte und Upgrades.",
        "gameObjective": "Starte **{{game}}**. Folge nur den aufgelisteten Materialien und **stelle dieses angeheftete Item einmal her**. Ignoriere alle anderen Rezepte und Upgrades."
      }
    },
    "experience": {
      "family": "crafting",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["crafting"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Bereits verfolgtes Rezept mit erreichbaren Materialien",
          "en": "Recipe already tracked with reachable materials",
          "chips": {"en": ["Tracked recipe"], "de": ["Verfolgtes Rezept"]},
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
    "gameGenreIds": ["rpg", "survival", "sandbox"],
    "customGameOverrideOnly": true
  },
  {
    "id": "overwhelmed-recommended-loadout",
    "moodIds": ["overwhelmed"],
    "type": "objective",
    "tags": ["loadout"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Recommended Loadout",
        "objective": "Open **a game offering a recommended or default loadout**. Equip it without comparison and **finish one normal encounter or round**. Keep the suggested choices throughout.",
        "gameObjective": "Equip the recommended or default loadout in **{{game}}** and **finish one normal encounter or standalone round**."
      },
      "de": {
        "name": "Empfohlene Ausrüstung",
        "objective": "Starte **ein Spiel mit empfohlener oder Standardausrüstung**. Rüste sie ohne Vergleich aus und **spiel einen normalen Kampf oder eine Runde zu Ende**. Behalte die Vorschläge bis zum Ende.",
        "gameObjective": "Rüste in **{{game}}** das empfohlene oder Standard-Loadout aus und **spiel einen normalen Kampf oder eine eigenständige Runde zu Ende**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["combat-loadouts"],
      "match": "all"
    },
    "experience": {
      "family": "default-loadout-encounter",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["loadout"],
      "rules": [],
      "prerequisites": [
        {
          "en": "a game offering a recommended or default loadout",
          "de": "ein Spiel mit empfohlener oder Standardausrüstung",
          "chips": {"en": ["Default loadout"], "de": ["Standardausrüstung"]},
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
    "gameGenreIds": ["shooter", "rpg", "roguelike"]
  },
  {
    "id": "overwhelmed-assist-one-level",
    "moodIds": ["overwhelmed"],
    "type": "objective",
    "tags": ["traversal", "no-timer"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Assist Mode",
        "objective": "Open **a platformer with accessibility assists**. Enable the assists that remove current friction and **finish one familiar level**. Ignore score and collectibles.",
        "gameObjective": "Open **{{game}}**. Enable the assists that remove current friction and **finish one familiar level**. Ignore score and collectibles."
      },
      "de": {
        "name": "Hilfsmodus",
        "objective": "Starte **ein Plattformspiel mit Barrierefreiheitshilfen**. Aktiviere die Hilfen, die aktuelle Hürden senken, und **beende ein vertrautes Level**. Punkte und Sammelobjekte sind egal.",
        "gameObjective": "Starte **{{game}}**. Aktiviere die Hilfen, die aktuelle Hürden senken, und **beende ein vertrautes Level**. Punkte und Sammelobjekte sind egal."
      }
    },
    "experience": {
      "family": "traversal",
      "cardMetadata": { "genreIds": ["platformer"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["traversal"],
      "rules": [],
      "prerequisites": [
        {
          "en": "a platformer with accessibility assists",
          "de": "ein Plattformspiel mit Barrierefreiheitshilfen",
          "chips": {"en": ["Accessibility assists"], "de": ["Spielhilfen"]},
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
    "customGameOverrideOnly": true
  },
  {
    "id": "overwhelmed-auto-deck-battle",
    "moodIds": ["overwhelmed"],
    "type": "objective",
    "tags": ["cards", "vs-bots"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Auto Deck",
        "objective": "Open a **card game with an auto-built legal deck**. Accept that deck and **play one solo or bot battle**. Use any normal hand choices.",
        "gameObjective": "Accept an automatically built legal deck in **{{game}}** and **play one solo or bot battle with it**."
      },
      "de": {
        "name": "Automatisches Deck",
        "objective": "Starte ein **Kartenspiel mit automatisch gebautem gültigem Deck**. Nimm das Deck und **spiel einen Solo- oder Bot-Kampf**. Nutze die üblichen Möglichkeiten bei der Starthand.",
        "gameObjective": "Nimm in **{{game}}** ein automatisch gebautes, gültiges Deck und **spiel damit einen Solo- oder Bot-Kampf**."
      }
    },
    "experience": {
      "family": "cards",
      "cardMetadata": { "genreIds": ["card"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["cards"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Automatischer Deckbau und Solo- oder Bot-Kampf",
          "en": "Automatic deck builder and a solo or bot battle",
          "chips": {"en": ["Auto deck builder"], "de": ["Automatischer Deckbau"]},
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
    "id": "overwhelmed-checkpoint-and-decide",
    "moodIds": ["overwhelmed"],
    "type": "inspiration",
    "tags": ["current-save"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Easy Exit Points",
        "objective": "Open an unfinished game with frequent checkpoints. **Continue the existing save** and let its frequent stopping points keep the session easy to leave whenever you have had enough.",
        "gameObjective": "Open {{game}}. **Continue the existing save** and let its frequent stopping points keep the session easy to leave whenever you have had enough."
      },
      "de": {
        "name": "Jederzeit aufhören",
        "objective": "Starte **ein unfertiges Spiel mit häufigen Checkpoints**. Lade deinen Spielstand und **spiel in kleinen Abschnitten weiter**. Die Checkpoints geben dir immer wieder eine Gelegenheit für eine Pause.",
        "gameObjective": "Lade in **{{game}}** einen unfertigen Spielstand mit häufigen Checkpoints und **spiel in kleinen Abschnitten weiter**. Die Checkpoints geben dir immer wieder eine Gelegenheit für eine Pause."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["missions-or-levels"],
      "match": "all"
    },
    "experience": {
      "family": "frequent-checkpoint-play",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "open",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "de": "Unfertiger Spielstand mit häufigen Checkpoints",
          "en": "Unfinished save with frequent checkpoints",
          "chips": {"en": ["Frequent checkpoints"], "de": ["Häufige Checkpoints"]},
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
    "gameGenreIds": ["adventure", "platformer", "shooter"]
  }
]);
