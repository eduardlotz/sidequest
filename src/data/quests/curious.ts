import { defineQuests } from "./defineQuests";

export const CuriousQuests = defineQuests([
  {
    "id": "genre-swap",
    "moodIds": ["curious"],
    "type": "inspiration",
    "tags": ["first-play"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "A Different Genre",
        "objective": "Open **an installed game from an unfamiliar genre**. Start its introduction and **try what feels new**. You do not need to master it today.",
        "gameObjective": "If **{{game}}** belongs to a genre you rarely play, enter its introduction and **try what feels new**."
      },
      "de": {
        "name": "Ein anderes Genre",
        "objective": "Starte **ein installiertes Spiel aus einem Genre, das du kaum spielst**. Spiel den Einstieg und **probier eine Mechanik aus, die dir neu ist**. Du musst sie heute nicht meistern.",
        "gameObjective": "Wenn **{{game}}** zu einem ungewohnten Genre gehört, beginne seinen Einstieg und **probier aus, was neu wirkt**."
      }
    },
    "experience": {
      "family": "unfamiliar-introduction",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "open",
      "activities": [],
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
    "gameGenreIds": [],
    "customGameOverrideOnly": true
  },
  {
    "id": "same-era",
    "moodIds": ["curious"],
    "type": "inspiration",
    "tags": ["story"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "The Same Era",
        "objective": "Choose **a historical game** from the era of a film or series you watched recently. **Explore its streets, clothing, and daily life**.",
        "gameObjective": "If **{{game}}** shares the historical era of a film or series you watched recently, **explore its streets, clothes and daily life**."
      },
      "de": {
        "name": "Dieselbe Epoche",
        "objective": "Wähle **ein historisches Spiel**, das zur Zeit eines Films oder einer Serie spielt, die du kürzlich gesehen hast. **Schau dir Straßen, Kleidung und Alltag im Spiel an**.",
        "gameObjective": "Wenn **{{game}}** in der Epoche eines kürzlich gesehenen Films oder einer Serie spielt, **schau dir Straßen, Kleidung und Alltag an**."
      }
    },
    "experience": {
      "family": "story",
      "cardMetadata": { "genreIds": ["adventure", "narrative"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Historical setting matches a recently watched film or series",
          "de": "Historische Epoche passend zu kürzlich gesehenem Film oder Serie",
          "chips": {"en": ["Historical setting"], "de": ["Historische Epoche"]},
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
    "id": "least-used-character",
    "moodIds": ["curious"],
    "type": "experiment",
    "tags": ["abilities", "one-round"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Someone New",
        "objective": "Open **a character-based game with short rounds**. Pick an unplayed, unlocked character and read their abilities. **Use an unfamiliar ability and finish the round**.",
        "gameObjective": "With short standalone rounds and character selection in **{{game}}**, pick an unplayed unlocked character. **Try an unfamiliar ability and finish the round**."
      },
      "de": {
        "name": "Jemand Neues",
        "objective": "Starte **ein Spiel mit Figurenwahl und kurzen Runden**. Wähle eine ungespielte, freigeschaltete Figur und lies ihre Fähigkeiten. **Nutze eine unbekannte Fähigkeit und beende die Runde**.",
        "gameObjective": "Wähle in **{{game}}** in einem Modus mit eigenständigen kurzen Runden eine ungespielte freigeschaltete Figur. **Probier eine unbekannte Fähigkeit und beende die Runde**."
      }
    },
    "experience": {
      "family": "try-unfamiliar-character",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["abilities"],
      "rules": ["one-round"],
      "prerequisites": [
        {
          "de": "Freigeschaltete ungespielte Figur und kurze Solo- oder Bot-Runde",
          "en": "Unlocked unused character and a short solo or bot round",
          "chips": {"en": ["Unused character"], "de": ["Ungespielte Figur"]},
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
    "gameGenreIds": ["shooter", "rpg", "roguelike", "fighting", "moba"],
    "customGameCompatibility": {
      "capabilityIds": ["character-abilities", "rounds-or-matches"]
    }
  },
  {
    "id": "one-variable",
    "moodIds": ["curious"],
    "type": "experiment",
    "tags": ["new-approach"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Change One Variable",
        "objective": "Open **a simulation with a short replayable scenario**. Finish it, change one setting, and **replay it to compare the results**. Keep everything else the same.",
        "gameObjective": "With a short replayable simulation scenario in **{{game}}**, finish it, change one setting and **replay it to compare results**."
      },
      "de": {
        "name": "Eine Variable ändern",
        "objective": "Starte **eine Simulation mit kurzem wiederholbarem Szenario**. Beende es, ändere eine Einstellung und **vergleiche die Ergebnisse einer Wiederholung**. Lass alles andere gleich.",
        "gameObjective": "Beende in **{{game}}** ein kurzes wiederholbares Simulationsszenario, ändere einen Wert und **vergleiche die Ergebnisse einer Wiederholung**."
      }
    },
    "experience": {
      "family": "simulation-comparison",
      "cardMetadata": { "genreIds": ["simulation"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["new-approach"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Short replayable simulation scenario with adjustable setting",
          "de": "Kurzes wiederholbares Simulationsszenario mit veränderbarer Einstellung",
          "chips": {"en": ["Adjustable simulation"], "de": ["Simulation einstellbar"]},
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
    "gameGenreIds": ["simulation"],
    "customGameOverrideOnly": true
  },
  {
    "id": "different-viewpoint-session",
    "moodIds": ["curious"],
    "type": "inspiration",
    "tags": ["story"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Another Perspective",
        "objective": "Open **an adventure with several playable viewpoints**. Choose an unlocked chapter for another character and **see the world through their eyes**.",
        "gameObjective": "With another playable viewpoint unlocked in **{{game}}**, choose its chapter and **see the world through that character’s eyes**."
      },
      "de": {
        "name": "Eine andere Perspektive",
        "objective": "Starte **ein Abenteuerspiel mit mehreren spielbaren Figuren**. Wähle ein freigeschaltetes Kapitel einer anderen Figur und **spiel es aus ihrer Perspektive**.",
        "gameObjective": "Wähle in **{{game}}** ein freigeschaltetes Kapitel einer anderen spielbaren Figur und **sieh die Welt aus ihrer Perspektive**."
      }
    },
    "experience": {
      "family": "story",
      "cardMetadata": { "genreIds": ["adventure", "narrative"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Unlocked chapter for another playable character",
          "de": "Freigeschaltetes Kapitel einer anderen spielbaren Figur",
          "chips": {"en": ["Alternate character"], "de": ["Andere Figur"]},
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
    "id": "break-the-seal",
    "moodIds": ["curious"],
    "type": "inspiration",
    "tags": ["first-play"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Break the Seal",
        "objective": "Choose an installed game you have never started. Begin with its default difficulty, adjust accessibility options as needed, and **spend this session discovering its introduction**. Continue only while you are curious.",
        "gameObjective": "If you have never started **{{game}}**, begin with its default difficulty and **discover its introduction**, adjusting accessibility as needed."
      },
      "de": {
        "name": "Endlich anfangen",
        "objective": "Wähle ein installiertes Spiel, das du noch nie gestartet hast. Starte mit dem normalen Schwierigkeitsgrad, passe Barrierefreiheitsoptionen bei Bedarf an und **spiel den Einstieg**. Mach nur weiter, solange du neugierig bist.",
        "gameObjective": "Wenn du **{{game}}** noch nie gestartet hast, beginne mit der Standardschwierigkeit und **entdecke den Einstieg**. Passe Barrierefreiheitsoptionen bei Bedarf an."
      }
    },
    "experience": {
      "family": "first-introduction",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "open",
      "activities": [],
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
    "gameGenreIds": [],
    "customGameOverrideOnly": true
  },
  {
    "id": "forgotten-install",
    "moodIds": ["curious"],
    "type": "inspiration",
    "tags": ["first-play", "exploration"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Forgotten Install",
        "objective": "Open an installed game whose title you barely remember. Skip reviews and guides, enter its first playable section, and **learn what kind of game it is by playing**.",
        "gameObjective": "If you barely remember installing **{{game}}**, enter its first playable section and **discover what kind of game it is through play**."
      },
      "de": {
        "name": "Vergessene Installation",
        "objective": "Starte ein installiertes Spiel, an dessen Titel du dich kaum erinnerst. Lass Tests und Guides aus, beginne den ersten spielbaren Abschnitt und **finde beim Spielen heraus, was für ein Spiel es ist**.",
        "gameObjective": "Wenn du dich kaum an die Installation von **{{game}}** erinnerst, beginne den ersten spielbaren Abschnitt und **finde beim Spielen heraus, was für ein Spiel es ist**."
      }
    },
    "experience": {
      "family": "exploration",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "open",
      "activities": ["exploration"],
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
    "gameGenreIds": [],
    "customGameOverrideOnly": true
  },
  {
    "id": "one-slot-swap",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["loadout", "new-approach"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Weapon Swap",
        "objective": "Open a **game with selectable weapons**. Equip a weapon you rarely use and **finish one fight with it**. Keep the rest of your gear.",
        "gameObjective": "Open **{{game}}**. Equip a weapon you rarely use and **finish one fight with it**. Keep the rest of your gear."
      },
      "de": {
        "name": "Waffenwechsel",
        "objective": "Starte ein **Spiel mit wählbaren Waffen**. Rüste eine selten genutzte Waffe aus und **beende einen Kampf damit**. Behalte den Rest deiner Ausrüstung.",
        "gameObjective": "Starte **{{game}}**. Rüste eine selten genutzte Waffe aus und **beende einen Kampf damit**. Behalte den Rest deiner Ausrüstung."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["combat-loadouts"]
    },
    "experience": {
      "family": "try-unfamiliar-weapon",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["loadout"],
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
    "gameGenreIds": ["shooter", "rpg", "roguelike"]
  },
  {
    "id": "spell-new-opener",
    "moodIds": ["curious"],
    "type": "experiment",
    "tags": ["spells", "new-approach"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "A Different Spell",
        "objective": "Open a **game with damage spells**. Equip a spell you rarely use and **open the next fight with it**. Finish the fight however you like.",
        "gameObjective": "Open **{{game}}**. Equip a spell you rarely use and **open the next fight with it**. Finish the fight however you like."
      },
      "de": {
        "name": "Ein anderer Zauber",
        "objective": "Starte ein **Spiel mit Schadenszaubern**. Rüste einen selten genutzten Zauber aus und **beginne den nächsten Kampf damit**. Beende den Kampf, wie du möchtest.",
        "gameObjective": "Starte **{{game}}**. Rüste einen selten genutzten Zauber aus und **beginne den nächsten Kampf damit**. Beende den Kampf, wie du möchtest."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["combat-spells"]
    },
    "experience": {
      "family": "try-unfamiliar-spell",
      "cardMetadata": { "genreIds": ["rpg"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["spells"],
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
    "gameGenreIds": ["rpg"]
  },
  {
    "id": "watch-one-patrol",
    "moodIds": ["curious", "explore"],
    "type": "objective",
    "tags": ["stealth"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Through the Gap",
        "objective": "Open a **game with moving patrols and stealth**. Watch a patrol from cover, then **use its next pass to enter the area it guards**.",
        "gameObjective": "Open **{{game}}**. Watch a patrol from cover, then **use its next pass to enter the area it guards**."
      },
      "de": {
        "name": "Durch die Lücke",
        "objective": "Starte ein **Spiel mit beweglichen Patrouillen und Schleichen**. Beobachte eine Patrouille aus der Deckung und **nutze ihren nächsten Durchgang, um in den bewachten Bereich zu gelangen**.",
        "gameObjective": "Starte **{{game}}**. Beobachte eine Patrouille aus der Deckung und **nutze ihren nächsten Durchgang, um in den bewachten Bereich zu gelangen**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["moving-patrols", "stealth"]
    },
    "experience": {
      "family": "guarded-entry",
      "cardMetadata": { "genreIds": ["stealth"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["stealth"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Moving patrol guarding an entrance",
          "de": "Bewegliche Patrouille an einem Zugang",
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
    "id": "craft-unused-recipe",
    "moodIds": ["curious", "progress"],
    "type": "objective",
    "tags": ["crafting", "new-approach"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Unused Recipe",
        "objective": "Open a **game with crafting**. Choose an unused recipe, get missing materials nearby, and **craft it once**.",
        "gameObjective": "Open **{{game}}**. Choose an unused recipe, get missing materials nearby, and **craft it once**."
      },
      "de": {
        "name": "Neues Rezept",
        "objective": "Starte ein **Spiel mit Crafting**. Wähle ein ungenutztes Rezept, besorge fehlende Materialien in der Nähe und **stelle es einmal her**.",
        "gameObjective": "Starte **{{game}}**. Wähle ein ungenutztes Rezept, besorge fehlende Materialien in der Nähe und **stelle es einmal her**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["crafting"]
    },
    "experience": {
      "family": "new-crafting-recipe",
      "cardMetadata": { "genreIds": ["rpg", "survival"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["crafting"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Ungenutztes Rezept mit erreichbaren Materialien",
          "en": "Unused recipe with reachable materials",
          "chips": {"en": ["Unused recipe"], "de": ["Ungenutztes Rezept"]},
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
    "gameGenreIds": ["rpg", "survival"]
  },
  {
    "id": "cook-a-new-dish",
    "moodIds": ["curious", "progress"],
    "type": "objective",
    "tags": ["cooking", "new-approach"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "A New Dish",
        "objective": "Open a **game with cooking**. Choose an unused recipe, find missing ingredients nearby, and **cook it once**.",
        "gameObjective": "Open **{{game}}**. Choose an unused recipe, find missing ingredients nearby, and **cook it once**."
      },
      "de": {
        "name": "Ein neues Gericht",
        "objective": "Starte ein **Spiel mit Kochen**. Wähle ein ungenutztes Rezept, besorge fehlende Zutaten in der Nähe und **koche es einmal**.",
        "gameObjective": "Starte **{{game}}**. Wähle ein ungenutztes Rezept, besorge fehlende Zutaten in der Nähe und **koche es einmal**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["cooking"]
    },
    "experience": {
      "family": "new-cooking-recipe",
      "cardMetadata": { "genreIds": ["simulation", "cozy"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["cooking"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Ungenutztes Rezept mit erreichbaren Zutaten",
          "en": "Unused recipe with reachable ingredients",
          "chips": {"en": ["Unused recipe"], "de": ["Ungenutztes Rezept"]},
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
    "id": "weapon-distance-compare",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["loadout", "vs-bots"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Find Its Range",
        "objective": "Open a **game with selectable weapons**. Use one owned weapon in a close fight and a distant fight against bots or solo enemies. **Finish both and compare its handling**.",
        "gameObjective": "Open **{{game}}**. Use one owned weapon in a close fight and a distant fight against bots or solo enemies. **Finish both and compare its handling**."
      },
      "de": {
        "name": "Die passende Distanz",
        "objective": "Starte ein **Spiel mit wählbaren Waffen**. Nimm dieselbe Waffe in einen nahen und einen weiter entfernten Kampf gegen Bots oder Solo-Gegner. **Spiel beide zu Ende und achte darauf, auf welche Distanz sie dir besser liegt**.",
        "gameObjective": "Starte **{{game}}**. Nimm dieselbe Waffe in einen nahen und einen weiter entfernten Kampf gegen Bots oder Solo-Gegner. **Spiel beide zu Ende und achte darauf, auf welche Distanz sie dir besser liegt**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["combat-loadouts"]
    },
    "experience": {
      "family": "weapon-distance-comparison",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["loadout"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Eigene Waffe und Solo-Gegner auf zwei unterschiedlichen Distanzen",
          "en": "Owned weapon and solo opponents at two different distances",
          "chips": {"en": ["Weapon"], "de": ["Waffe"]},
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
    "id": "spell-follow-up",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["spells", "new-approach"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Two Spell Openers",
        "objective": "Open a **game with damage spells**. Use two unlocked spells to open separate solo fights against the same enemy type. **Finish both and compare range or casting time**.",
        "gameObjective": "Open **{{game}}**. Use two unlocked spells to open separate solo fights against the same enemy type. **Finish both and compare range or casting time**."
      },
      "de": {
        "name": "Zwei Zauber zum Start",
        "objective": "Starte ein **Spiel mit Schadenszaubern**. Beginne zwei Solo-Kämpfe gegen denselben Gegnertyp mit je einem anderen freigeschalteten Zauber. **Spiel beide zu Ende und vergleiche Reichweite und Zauberzeit**.",
        "gameObjective": "Starte **{{game}}**. Beginne zwei Solo-Kämpfe gegen denselben Gegnertyp mit je einem anderen freigeschalteten Zauber. **Spiel beide zu Ende und vergleiche Reichweite und Zauberzeit**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["combat-spells"]
    },
    "experience": {
      "family": "spell-opener-comparison",
      "cardMetadata": { "genreIds": ["rpg"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["spells"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Zwei Schadenszauber und erreichbare Gegner desselben Typs",
          "en": "Two damage spells and reachable enemies of the same type",
          "chips": {"en": ["Damage spells"], "de": ["Schadenszauber"]},
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
    "gameGenreIds": ["rpg"]
  },
  {
    "id": "underwater-look",
    "moodIds": ["curious", "explore"],
    "type": "inspiration",
    "tags": ["diving", "exploration"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Under the Surface",
        "objective": "Open a **game with underwater exploration**. **Follow the shoreline underwater** and see what changes beneath it. Surface whenever you need air.",
        "gameObjective": "Open **{{game}}**. **Follow the shoreline underwater** and see what changes beneath it. Surface whenever you need air."
      },
      "de": {
        "name": "Unter der Oberfläche",
        "objective": "Starte ein **Spiel mit Unterwasser-Erkundung**. **Folge dem Ufer unter Wasser** und schau, was sich unter der Oberfläche verändert. Tauch auf, wenn du Luft brauchst.",
        "gameObjective": "Starte **{{game}}**. **Folge dem Ufer unter Wasser** und schau, was sich unter der Oberfläche verändert. Tauch auf, wenn du Luft brauchst."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["diving", "open-world"]
    },
    "experience": {
      "family": "underwater-exploration",
      "cardMetadata": { "genreIds": ["adventure"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["diving", "exploration"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Diveable shoreline; air supply",
          "de": "Betauchbares Ufer; Luftversorgung",
          "chips": {"en": ["Shore", "Air supply"], "de": ["Ufer", "Luftversorgung"]},
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
    "id": "puzzle-use-the-hint",
    "moodIds": ["curious", "progress"],
    "type": "objective",
    "tags": ["puzzles"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Put the Hint to Work",
        "objective": "Open a **puzzle game with hints**. Read one hint for an unfinished puzzle and **use it to solve the puzzle**. Take more hints if needed.",
        "gameObjective": "Open **{{game}}**. Read one hint for an unfinished puzzle and **use it to solve the puzzle**. Take more hints if needed."
      },
      "de": {
        "name": "Den Hinweis nutzen",
        "objective": "Starte ein **Rätselspiel mit Hinweisen**. Lies einen Hinweis zu einem offenen Rätsel und **nutze ihn zum Lösen**. Weitere Hinweise sind erlaubt.",
        "gameObjective": "Starte **{{game}}**. Lies einen Hinweis zu einem offenen Rätsel und **nutze ihn zum Lösen**. Weitere Hinweise sind erlaubt."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["puzzles"]
    },
    "experience": {
      "family": "solve-with-hint",
      "cardMetadata": { "genreIds": ["puzzle"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["puzzles"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Offenes Rätsel mit Hinweisen im Spiel",
          "en": "Unfinished puzzle with in-game hints",
          "chips": {"en": ["In-game hints"], "de": ["Spielhinweise"]},
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
    "id": "fish-change-bait",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["fishing", "new-approach"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Two Baits",
        "objective": "Open a **fishing game with selectable bait**. At one spot, cast once with your usual bait and once with another owned bait. **Compare both casts**, even if nothing bites.",
        "gameObjective": "Open **{{game}}**. At one spot, cast once with your usual bait and once with another owned bait. **Compare both casts**, even if nothing bites."
      },
      "de": {
        "name": "Zwei Köder",
        "objective": "Starte ein **Angelspiel mit wählbaren Ködern**. Wirf an einem Ort einmal mit deinem üblichen und einmal mit einem anderen vorhandenen Köder aus. **Vergleiche beide Würfe**, auch wenn nichts anbeißt.",
        "gameObjective": "Starte **{{game}}**. Wirf an einem Ort einmal mit deinem üblichen und einmal mit einem anderen vorhandenen Köder aus. **Vergleiche beide Würfe**, auch wenn nichts anbeißt."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["fishing"]
    },
    "experience": {
      "family": "bait-comparison",
      "cardMetadata": { "genreIds": ["simulation", "cozy"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["fishing"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Angelstelle und zwei vorhandene Köder",
          "en": "Fishing spot and two owned bait types",
          "chips": {"en": ["Two bait types"], "de": ["Zwei Köder"]},
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
    "gameGenreIds": ["simulation", "cozy"]
  },
  {
    "id": "race-another-car",
    "moodIds": ["curious"],
    "type": "experiment",
    "tags": ["racing", "new-approach"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Another Car",
        "objective": "Open a **racing game with selectable vehicles**. Take a rarely used, unlocked vehicle to a familiar solo or CPU race. **Finish and compare your braking points**. Leave the tuning unchanged.",
        "gameObjective": "Open **{{game}}**. Take a rarely used, unlocked vehicle to a familiar solo or CPU race. **Finish and compare your braking points**. Leave the tuning unchanged."
      },
      "de": {
        "name": "Ein anderer Wagen",
        "objective": "Starte ein **Rennspiel mit wählbaren Fahrzeugen**. Nimm ein selten genutztes, freigeschaltetes Fahrzeug in ein vertrautes Solo- oder CPU-Rennen. **Beende es und vergleiche deine Bremspunkte**. Lass das Tuning gleich.",
        "gameObjective": "Starte **{{game}}**. Nimm ein selten genutztes, freigeschaltetes Fahrzeug in ein vertrautes Solo- oder CPU-Rennen. **Beende es und vergleiche deine Bremspunkte**. Lass das Tuning gleich."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["racing"]
    },
    "experience": {
      "family": "try-unfamiliar-car",
      "cardMetadata": { "genreIds": ["racing"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["racing"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Selten genutztes Fahrzeug und vertraute Strecke",
          "en": "Rarely used vehicle and familiar track",
          "chips": {"en": ["Rarely used vehicle"], "de": ["Ungewohntes Fahrzeug"]},
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
    "gameGenreIds": ["racing"]
  },
  {
    "id": "movement-two-approaches",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["traversal", "new-approach"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Two Ways Up",
        "objective": "Open a **game with climbing or movement abilities**. Pick a ledge you can safely revisit. **Reach it by two different routes or moves** and compare the approaches.",
        "gameObjective": "Open **{{game}}**. Pick a ledge you can safely revisit. **Reach it by two different routes or moves** and compare the approaches."
      },
      "de": {
        "name": "Zwei Wege hinauf",
        "objective": "Starte ein **Spiel mit Klettern oder Bewegungsfähigkeiten**. Wähle einen sicher wiederholt erreichbaren Vorsprung. **Finde zwei verschiedene Wege oder Bewegungen, mit denen du ihn erreichst** und vergleiche beide.",
        "gameObjective": "Starte **{{game}}**. Wähle einen sicher wiederholt erreichbaren Vorsprung. **Finde zwei verschiedene Wege oder Bewegungen, mit denen du ihn erreichst** und vergleiche beide."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["advanced-traversal"]
    },
    "experience": {
      "family": "alternate-traversal-comparison",
      "cardMetadata": { "genreIds": ["adventure"], "playStyleIds": [] },
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
        }
      ]
    },
    "gameGenreIds": ["adventure"]
  },
  {
    "id": "dialogue-follow-a-topic",
    "moodIds": ["curious", "explore"],
    "type": "objective",
    "tags": ["dialogue"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Follow the Topic",
        "objective": "Open a **game with optional dialogue**. Find an unread optional conversation topic. **Follow it through to the end**, including any available follow-up questions.",
        "gameObjective": "Open **{{game}}**. Find an unread optional conversation topic. **Follow it through to the end**, including any available follow-up questions."
      },
      "de": {
        "name": "Beim Thema bleiben",
        "objective": "Starte ein **Spiel mit optionalen Dialogen**. Such ein ungelesenes optionales Gesprächsthema. **Verfolge es bis zum Ende**, einschließlich verfügbarer Nachfragen.",
        "gameObjective": "Starte **{{game}}**. Such ein ungelesenes optionales Gesprächsthema. **Verfolge es bis zum Ende**, einschließlich verfügbarer Nachfragen."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["optional-dialogue"]
    },
    "experience": {
      "family": "follow-dialogue-topic",
      "cardMetadata": { "genreIds": ["narrative"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["dialogue"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Ungelesenes optionales Gesprächsthema",
          "en": "Unread optional conversation topic",
          "chips": {"en": ["Optional dialogue"], "de": ["Optionaler Dialog"]},
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
    "gameGenreIds": ["narrative"]
  },
  {
    "id": "companion-cover-the-flank",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["new-approach"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Two Directions",
        "objective": "Open a **game with commandable animal combat companions**. In a solo encounter, send your companion toward an enemy while you approach from another direction. **Finish the fight and observe which way the enemy turned**.",
        "gameObjective": "In **{{game}}**: In a solo encounter, send your companion toward an enemy while you approach from another direction. **Finish the fight and observe which way the enemy turned**."
      },
      "de": {
        "name": "Zwei Richtungen",
        "objective": "Starte ein **Spiel mit befehligbaren Tierbegleitern im Kampf**. Schick deinen Tierbegleiter in einem Solo-Kampf von einer Seite auf einen Gegner zu und näher dich von der anderen. **Spiel den Kampf zu Ende und achte darauf, wen der Gegner angreift**.",
        "gameObjective": "In **{{game}}**: Schick deinen Tierbegleiter in einem Solo-Kampf von einer Seite auf einen Gegner zu und näher dich von der anderen. **Spiel den Kampf zu Ende und achte darauf, wen der Gegner angreift**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["animal-companions"]
    },
    "experience": {
      "family": "companion-flank",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "de": "Befehligbarer Tierbegleiter und Solo-Kampf",
          "en": "Commandable animal companion and solo encounter",
          "chips": {"en": ["Animal companion"], "de": ["Tierbegleiter"]},
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
    "gameGenreIds": ["adventure", "rpg", "shooter"]
  },
  {
    "id": "skate-two-approaches",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["skating", "new-approach"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Other Direction",
        "objective": "Open a **skating game with grinds**. Choose a short rail you can approach from both ends. **Land a grind from each direction**, noticing how the approach changes your entry and landing.",
        "gameObjective": "In **{{game}}**: Choose a short rail you can approach from both ends. **Land a grind from each direction**, noticing how the approach changes your entry and landing."
      },
      "de": {
        "name": "Andere Richtung",
        "objective": "Starte ein **Skatespiel mit Grinds**. Wähle ein kurzes Geländer, das du von beiden Enden anfahren kannst. **Lande aus jeder Richtung einen Grind** und achte darauf, wie sich Einstieg und Landung ändern.",
        "gameObjective": "In **{{game}}**: Wähle ein kurzes Geländer, das du von beiden Enden anfahren kannst. **Lande aus jeder Richtung einen Grind** und achte darauf, wie sich Einstieg und Landung ändern."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["skate-tricks"]
    },
    "experience": {
      "family": "grind-direction-comparison",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["skating"],
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
    "gameGenreIds": ["sports"]
  },
  {
    "id": "sports-play-the-pass",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["vs-bots", "new-approach"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Pass Before the Shot",
        "objective": "Open a **sports game with controllable teammates and CPU opponents**. In a CPU match with controllable teammates, try setting up your shots with a pass. **Complete the match after using that approach**, regardless of how many shots score.",
        "gameObjective": "In **{{game}}**: In a CPU match with controllable teammates, try setting up your shots with a pass. **Complete the match after using that approach**, regardless of how many shots score."
      },
      "de": {
        "name": "Pass vor dem Schuss",
        "objective": "Starte ein **Sportspiel mit steuerbaren Mitspielern und CPU-Gegnern**. Bereite in einer Partie gegen die CPU mindestens einen Schuss mit einem Pass vor. **Spiel das Match zu Ende**. Die Zahl der Tore ist egal.",
        "gameObjective": "In **{{game}}**: Bereite in einer Partie gegen die CPU mindestens einen Schuss mit einem Pass vor. **Spiel das Match zu Ende**. Die Zahl der Tore ist egal."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["sports-goals", "bot-modes", "whole-matches"]
    },
    "experience": {
      "family": "pass-build",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "en": "Solo / bot mode available",
          "de": "Solo- / Bot-Modus verfügbar",
          "chips": {"en": ["Bot mode"], "de": ["Bot-Modus"]},
          "critical": true
        },
        {
          "en": "Controllable teammates; CPU match",
          "de": "Steuerbare Mitspieler; CPU-Match",
          "chips": {"en": ["CPU match"], "de": ["CPU-Match"]},
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
    "id": "platform-pick-a-landing",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["traversal", "new-approach"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Pick Your Landing",
        "objective": "Open a **game with platforming obstacles**. Choose a jump you can safely repeat. Land near one edge of the destination platform, then repeat toward its middle. **Complete both landings and compare the room left for the next jump**.",
        "gameObjective": "In **{{game}}**: Choose a jump you can safely repeat. Land near one edge of the destination platform, then repeat toward its middle. **Complete both landings and compare the room left for the next jump**."
      },
      "de": {
        "name": "Den Landepunkt wählen",
        "objective": "Starte ein **Spiel mit Sprunghindernissen**. Such dir einen Sprung, den du leicht wiederholen kannst. Lande einmal nah am Rand und einmal in der Mitte der Plattform. **Schaff beide Landungen und schau, welche dir mehr Platz für den nächsten Sprung lässt**.",
        "gameObjective": "In **{{game}}**: Such dir einen Sprung, den du leicht wiederholen kannst. Lande einmal nah am Rand und einmal in der Mitte der Plattform. **Schaff beide Landungen und schau, welche dir mehr Platz für den nächsten Sprung lässt**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["platforming"]
    },
    "experience": {
      "family": "traversal",
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
        }
      ]
    },
    "gameGenreIds": ["adventure", "platformer"]
  },
  {
    "id": "shooter-open-with-information",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["gadgets", "scouting", "vs-bots", "new-approach"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Look Before Breaching",
        "objective": "Open a **shooter with scouting tools and breaching gadgets**. In solo, training, or bot play where you can scout and open a route, inspect the other side first. **Use an available breaching gadget, move through the opening, and finish the encounter**.",
        "gameObjective": "In **{{game}}**: In solo, training, or bot play where you can scout and open a route, inspect the other side first. **Use an available breaching gadget, move through the opening, and finish the encounter**."
      },
      "de": {
        "name": "Vor dem Öffnen schauen",
        "objective": "Starte ein **Shooter mit Aufklärungswerkzeugen und Breach-Gadgets**. Späh in einem Solo-, Trainings- oder Bot-Modus erst auf die andere Seite eines Durchgangs. **Öffne ihn dann mit einem Breach-Gadget, geh hindurch und spiel den Kampf zu Ende**.",
        "gameObjective": "In **{{game}}**: Späh in einem Solo-, Trainings- oder Bot-Modus erst auf die andere Seite eines Durchgangs. **Öffne ihn dann mit einem Breach-Gadget, geh hindurch und spiel den Kampf zu Ende**."
      }
    },
    "experience": {
      "family": "gadgets",
      "cardMetadata": { "genreIds": ["shooter"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["gadgets", "scouting"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Solo / bot mode available",
          "de": "Solo- / Bot-Modus verfügbar",
          "chips": {"en": ["Bot mode"], "de": ["Bot-Modus"]},
          "critical": true
        },
        {
          "en": "Scouting tool and breaching gadget; solo, training or bot encounter",
          "de": "Aufklärungswerkzeug und Breach-Gadget; Solo-, Trainings- oder Bot-Kampf",
          "chips": {"en": ["Scouting tool", "Gadget"], "de": ["Aufklärungswerkzeug", "Gadget"]},
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
    "gameGenreIds": ["shooter"],
    "customGameOverrideOnly": true
  },
  {
    "id": "lane-watch-the-wave",
    "moodIds": ["curious"],
    "type": "experiment",
    "tags": ["lanes", "vs-bots", "new-approach"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "What Moves the Wave",
        "objective": "Open a **MOBA with a solo practice mode**. In solo practice, watch one minion wave meet without attacking. On the next wave, help your minions attack. **Compare where each wave meets the next enemy group**.",
        "gameObjective": "In **{{game}}**: In solo practice, watch one minion wave meet without attacking. On the next wave, help your minions attack. **Compare where each wave meets the next enemy group**."
      },
      "de": {
        "name": "Was die Wave bewegt",
        "objective": "Starte ein **MOBA mit Solo-Übungsmodus**. Beobachte im Solo-Übungsmodus eine Minion-Wave beim Zusammentreffen, ohne anzugreifen. Hilf deinen Minions bei der nächsten Wave. **Vergleiche, wo beide Waves auf die nächste Gegnergruppe treffen**.",
        "gameObjective": "In **{{game}}**: Beobachte im Solo-Übungsmodus eine Minion-Wave beim Zusammentreffen, ohne anzugreifen. Hilf deinen Minions bei der nächsten Wave. **Vergleiche, wo beide Waves auf die nächste Gegnergruppe treffen**."
      }
    },
    "experience": {
      "family": "lanes",
      "cardMetadata": { "genreIds": ["moba"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["lanes"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Solo practice mode available",
          "de": "Solo-Übungsmodus verfügbar",
          "chips": {"en": ["Practice mode"], "de": ["Übungsmodus"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "solo-practice"
        },
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "solo-practice"
        }
      ]
    },
    "gameGenreIds": ["moba"],
    "customGameOverrideOnly": true
  },
  {
    "id": "time-trial-compare-a-route",
    "moodIds": ["curious"],
    "type": "experiment",
    "tags": ["time-trial", "new-approach"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Where Time Goes",
        "objective": "Open a **game with timed routes and alternative paths**. On an unlocked short time-trial route with a branch, take one path and then the other using the same setup. **Finish both runs and compare the times**. Neither needs to set a record.",
        "gameObjective": "In **{{game}}**: On an unlocked short time-trial route with a branch, take one path and then the other using the same setup. **Finish both runs and compare the times**. Neither needs to set a record."
      },
      "de": {
        "name": "Wo die Zeit bleibt",
        "objective": "Starte ein **Spiel mit Zeitstrecken und alternativen Wegen**. Nimm auf einer freigeschalteten kurzen Zeitstrecke mit Abzweigung einmal den einen und einmal den anderen Weg mit demselben Setup. **Beende beide Läufe und vergleiche die Zeiten**. Keiner muss ein Rekord sein.",
        "gameObjective": "In **{{game}}**: Nimm auf einer freigeschalteten kurzen Zeitstrecke mit Abzweigung einmal den einen und einmal den anderen Weg mit demselben Setup. **Beende beide Läufe und vergleiche die Zeiten**. Keiner muss ein Rekord sein."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["time-trials"]
    },
    "experience": {
      "family": "time-trial-route-comparison",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["time-trial"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Kurze Zeitstrecke mit zwei spielbaren Wegen",
          "en": "Short timed course with two playable routes",
          "chips": {"en": ["Alternate routes"], "de": ["Alternative Wege"]},
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
    "gameGenreIds": ["adventure", "platformer", "racing", "sports"]
  },
  {
    "id": "rhythm-one-unplayed-song",
    "moodIds": ["curious", "explore"],
    "type": "objective",
    "tags": ["rhythm"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "A Song You Skipped",
        "objective": "Open a **rhythm game with unlocked songs**. Choose an unlocked song you have not played and a comfortable difficulty. **Play through to its result screen** without restarting to fix mistakes.",
        "gameObjective": "In **{{game}}**: Choose an unlocked song you have not played and a comfortable difficulty. **Play through to its result screen** without restarting to fix mistakes."
      },
      "de": {
        "name": "Ein übersehener Song",
        "objective": "Starte ein **Rhythmusspiel mit freigeschalteten Songs**. Wähle einen freigeschalteten, noch ungespielten Song und einen angenehmen Schwierigkeitsgrad. **Spiele bis zur Ergebnisanzeige**, ohne wegen Fehlern neu zu starten.",
        "gameObjective": "In **{{game}}**: Wähle einen freigeschalteten, noch ungespielten Song und einen angenehmen Schwierigkeitsgrad. **Spiele bis zur Ergebnisanzeige**, ohne wegen Fehlern neu zu starten."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["rhythm-play"]
    },
    "experience": {
      "family": "rhythm",
      "cardMetadata": { "genreIds": ["rhythm"], "playStyleIds": [] },
      "finish": "outcome",
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
    "id": "deck-one-card-swap",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["cards", "new-approach", "vs-bots"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "One Card Different",
        "objective": "Open a **game with editable decks and card battles**. Swap one card in an existing legal deck for another available card. **Finish a solo or bot battle with the changed deck** and notice what choices the swap creates.",
        "gameObjective": "In **{{game}}**: Swap one card in an existing legal deck for another available card. **Finish a solo or bot battle with the changed deck** and notice what choices the swap creates."
      },
      "de": {
        "name": "Eine Karte anders",
        "objective": "Starte ein **Spiel mit bearbeitbaren Decks und Kartenkämpfen**. Tausche eine Karte in einem bestehenden gültigen Deck gegen eine andere verfügbare Karte. **Beende mit dem veränderten Deck einen Solo- oder Bot-Kampf** und achte auf neue Entscheidungsmöglichkeiten.",
        "gameObjective": "In **{{game}}**: Tausche eine Karte in einem bestehenden gültigen Deck gegen eine andere verfügbare Karte. **Beende mit dem veränderten Deck einen Solo- oder Bot-Kampf** und achte auf neue Entscheidungsmöglichkeiten."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["card-decks"]
    },
    "experience": {
      "family": "single-card-swap",
      "cardMetadata": { "genreIds": ["card"], "playStyleIds": [] },
      "finish": "outcome",
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
    "id": "automation-follow-an-item",
    "moodIds": ["curious", "focused"],
    "type": "objective",
    "tags": ["automation"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Follow One Item",
        "objective": "Open a **game with automated production lines**. Choose a working production line and follow one material from its input through the machines. **Identify the steps it passes and watch a finished item reach the output**.",
        "gameObjective": "In **{{game}}**: Choose a working production line and follow one material from its input through the machines. **Identify the steps it passes and watch a finished item reach the output**."
      },
      "de": {
        "name": "Einem Item folgen",
        "objective": "Starte ein **Spiel mit automatisierten Produktionsketten**. Wähle eine laufende Produktionskette und folge einem Material vom Eingang durch die Maschinen. **Schau zu, wie es verarbeitet wird und am Ende ein fertiges Item herauskommt**.",
        "gameObjective": "In **{{game}}**: Wähle eine laufende Produktionskette und folge einem Material vom Eingang durch die Maschinen. **Schau zu, wie es verarbeitet wird und am Ende ein fertiges Item herauskommt**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["automation"]
    },
    "experience": {
      "family": "trace-production-chain",
      "cardMetadata": { "genreIds": ["simulation", "sandbox"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["automation"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Laufende Produktionskette mit sichtbaren Verarbeitungsschritten",
          "en": "Working production line with visible processing steps",
          "chips": {"en": ["Production steps"], "de": ["Produktionsschritte"]},
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
    "gameGenreIds": ["simulation", "sandbox"]
  },
  {
    "id": "match-one-unfamiliar-option",
    "moodIds": ["curious"],
    "type": "experiment",
    "tags": ["abilities", "vs-bots"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "translations": {
      "en": {
        "name": "One New Choice",
        "objective": "Open a **game with selectable characters and full bot matches**. In a full bot match, choose an unlocked character you have not used recently. **Use their abilities throughout the match and reach its final result**, noticing one decision you make differently from your usual character.",
        "gameObjective": "In **{{game}}**: In a full bot match, choose an unlocked character you have not used recently. **Use their abilities throughout the match and reach its final result**, noticing one decision you make differently from your usual character."
      },
      "de": {
        "name": "Eine neue Wahl",
        "objective": "Starte ein **Spiel mit wählbaren Figuren und vollständigen Bot-Matches**. Nimm in einem Bot-Match eine freigeschaltete Figur, die du länger nicht gespielt hast. **Setz ihre Fähigkeiten ein und spiel bis zum Ergebnis**. Achte darauf, was du anders machst als mit deiner üblichen Figur.",
        "gameObjective": "In **{{game}}**: Nimm in einem Bot-Match eine freigeschaltete Figur, die du länger nicht gespielt hast. **Setz ihre Fähigkeiten ein und spiel bis zum Ergebnis**. Achte darauf, was du anders machst als mit deiner üblichen Figur."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["whole-matches", "character-abilities", "bot-modes"]
    },
    "experience": {
      "family": "try-unfamiliar-character",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["abilities"],
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
    "gameGenreIds": ["shooter", "rpg", "roguelike", "fighting", "moba"]
  },
  {
    "id": "mission-change-the-approach",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["new-approach", "loadout"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Change the Approach",
        "objective": "Open a **game with replayable missions and selectable equipment**. Replay a short mission with an owned weapon or tool you did not use the first time. **Finish the mission and notice which encounter changed most**.",
        "gameObjective": "In **{{game}}**: Replay a short mission with an owned weapon or tool you did not use the first time. **Finish the mission and notice which encounter changed most**."
      },
      "de": {
        "name": "Anders herangehen",
        "objective": "Starte ein **Spiel mit wiederholbaren Missionen und wählbarer Ausrüstung**. Wiederhole eine kurze Mission mit einer Waffe oder einem Werkzeug, das du beim ersten Mal nicht benutzt hast. **Spiel sie zu Ende und achte darauf, bei welchem Kampf dir die andere Ausrüstung am meisten geholfen hat**.",
        "gameObjective": "In **{{game}}**: Wiederhole eine kurze Mission mit einer Waffe oder einem Werkzeug, das du beim ersten Mal nicht benutzt hast. **Spiel sie zu Ende und achte darauf, bei welchem Kampf dir die andere Ausrüstung am meisten geholfen hat**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["missions-or-levels", "replayable-encounters", "combat-loadouts"]
    },
    "experience": {
      "family": "replay-mission-with-new-gear",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["loadout"],
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
    "gameGenreIds": ["adventure", "shooter", "rpg", "stealth"]
  },
  {
    "id": "round-role-swap",
    "moodIds": ["curious", "connect"],
    "type": "objective",
    "tags": ["new-approach", "support"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Swap Your Role",
        "objective": "Open an **online team game with short rounds**. For one full round, take an available role different from your usual one, such as support, defense, or initiation. **Finish the round while playing toward that role's job**, not your usual score pattern.",
        "gameObjective": "In **{{game}}**: For one full round, take an available role different from your usual one, such as support, defense, or initiation. **Finish the round while playing toward that role's job**, not your usual score pattern."
      },
      "de": {
        "name": "Rolle tauschen",
        "objective": "Starte ein **Online-Teamspiel mit kurzen Runden**. Übernimm für eine ganze Runde eine Rolle, die du sonst nicht spielst, etwa Support oder Verteidigung. **Kümmere dich um diese Aufgabe und spiel die Runde zu Ende**. Deine üblichen Punkte sind heute egal.",
        "gameObjective": "In **{{game}}**: Übernimm für eine ganze Runde eine Rolle, die du sonst nicht spielst, etwa Support oder Verteidigung. **Kümmere dich um diese Aufgabe und spiel die Runde zu Ende**. Deine üblichen Punkte sind heute egal."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["online-teamplay", "rounds-or-matches"]
    },
    "experience": {
      "family": "support",
      "cardMetadata": { "genreIds": [], "playStyleIds": ["co-op"] },
      "finish": "outcome",
      "activities": ["support"],
      "rules": [],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "online",
          "people": "others",
          "participation": "co-op",
          "formation": "squad"
        }
      ]
    },
    "gameGenreIds": ["shooter", "moba", "fighting", "sports"]
  },
  {
    "id": "loadout-opposite-range",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["loadout", "new-approach"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Opposite Range",
        "objective": "Open a **game with selectable combat equipment**. Choose an owned weapon meant for a different range than your usual choice. In solo or bot play, **finish one encounter while adapting your position to that range**.",
        "gameObjective": "In **{{game}}**: Choose an owned weapon meant for a different range than your usual choice. In solo or bot play, **finish one encounter while adapting your position to that range**."
      },
      "de": {
        "name": "Andere Distanz",
        "objective": "Starte ein **Spiel mit wählbarer Kampfausrüstung**. Nimm eine vorhandene Waffe für eine andere Distanz als deine übliche Wahl. **Pass deine Position an die neue Reichweite an und beende damit einen Solo- oder Bot-Kampf**.",
        "gameObjective": "In **{{game}}**: Nimm eine vorhandene Waffe für eine andere Distanz als deine übliche Wahl. **Pass deine Position an die neue Reichweite an und beende damit einen Solo- oder Bot-Kampf**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["combat-loadouts"]
    },
    "experience": {
      "family": "try-opposite-range",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["loadout"],
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
    "gameGenreIds": ["shooter", "rpg", "roguelike"]
  },
  {
    "id": "boss-read-before-striking",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["boss"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Read Before Striking",
        "objective": "Open **a game with a repeatable boss fight**. Watch an attack that often catches you, then **try a different response and play out the attempt**. You do not need to win.",
        "gameObjective": "In a repeatable boss fight in **{{game}}**, watch an attack that often catches you, then **try a different response and play out the attempt**. You do not need to win."
      },
      "de": {
        "name": "Erst lesen, dann schlagen",
        "objective": "Starte **ein Spiel mit einem wiederholbaren Bosskampf**. Beobachte zunächst einen Angriff, der dich oft erwischt. **Probier eine andere Reaktion darauf aus und spiel den Versuch weiter**. Du musst den Boss nicht besiegen.",
        "gameObjective": "Beobachte in einem wiederholbaren Bosskampf in **{{game}}** zunächst einen Angriff, der dich oft erwischt. **Probier eine andere Reaktion darauf aus und spiel den Versuch weiter**. Du musst den Boss nicht besiegen."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["boss-fights", "replayable-encounters"]
    },
    "experience": {
      "family": "boss-response-experiment",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["boss"],
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
    "gameGenreIds": ["adventure", "rpg", "platformer", "roguelike", "shooter"]
  },
  {
    "id": "lore-follow-a-reference",
    "moodIds": ["curious", "explore"],
    "type": "objective",
    "tags": ["story", "exploration"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Follow the Reference",
        "objective": "Open a **game with readable lore and explorable locations**. Read one unlocked entry that names a person, place, or event, then **visit a related location or character in the game world**.",
        "gameObjective": "In **{{game}}**: Read one unlocked lore entry that names a person, place, or event, then **visit a related location or character in the game world**."
      },
      "de": {
        "name": "Der Erwähnung folgen",
        "objective": "Starte ein **Spiel mit lesbarer Lore und erkundbaren Orten**. Lies einen freigeschalteten Eintrag, der eine Person, einen Ort oder ein Ereignis erwähnt, und **besuche danach einen passenden Ort oder eine passende Figur in der Spielwelt**.",
        "gameObjective": "In **{{game}}**: Lies einen freigeschalteten Lore-Eintrag, der eine Person, einen Ort oder ein Ereignis erwähnt, und **besuche danach einen passenden Ort oder eine passende Figur in der Spielwelt**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["readable-journal", "open-world"]
    },
    "experience": {
      "family": "lore-linked-visit",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["story", "exploration"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Freigeschalteter Eintrag über einen erreichbaren Ort oder eine Figur",
          "en": "Unlocked entry about a reachable location or character",
          "chips": {"en": ["Codex entry"], "de": ["Kodexeintrag"]},
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
    "id": "curious-ability-first",
    "moodIds": ["curious"],
    "type": "experiment",
    "tags": ["abilities", "new-approach"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Ability First",
        "objective": "Open **a character game with a familiar unlocked ability**. Open one normal encounter by using that ability before your usual attack and **finish the encounter after testing the new order**.",
        "gameObjective": "In **{{game}}**, open a normal solo encounter with a familiar unlocked ability instead of your usual attack. **Finish the encounter and notice what the different opening changes**."
      },
      "de": {
        "name": "Fähigkeit zuerst",
        "objective": "Starte **ein Spiel mit einer Figur, deren freigeschaltete Fähigkeit du gut kennst**. Beginne einen normalen Kampf mit dieser Fähigkeit statt mit deinem üblichen Angriff. **Spiel den Kampf zu Ende und achte darauf, ob dieser Einstieg etwas verändert**.",
        "gameObjective": "Beginne in **{{game}}** einen normalen Solo-Kampf mit einer vertrauten freigeschalteten Fähigkeit statt mit deinem üblichen Angriff. **Spiel den Kampf zu Ende und achte darauf, was der andere Einstieg verändert**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["character-abilities", "missions-or-levels"],
      "match": "all"
    },
    "experience": {
      "family": "ability-opening",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["abilities"],
      "rules": [],
      "prerequisites": [
        {
          "en": "a character game with a familiar unlocked ability",
          "de": "ein Spiel mit einer Figur, deren freigeschaltete Fähigkeit du gut kennst",
          "chips": {"en": ["Character ability"], "de": ["Figurenfähigkeit"]},
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
    "gameGenreIds": ["shooter", "moba", "rpg"]
  },
  {
    "id": "curious-enemy-weapon",
    "moodIds": ["curious"],
    "type": "experiment",
    "tags": ["loadout", "new-approach"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Borrowed Weapon",
        "objective": "Open **a solo combat game where enemies drop usable weapons**. Take a different weapon from their loot. **Try it in the next encounter and finish that fight using it**.",
        "gameObjective": "In solo play in **{{game}}**, take a different usable weapon dropped by a defeated enemy. **Try it in the next encounter and finish that fight using it**."
      },
      "de": {
        "name": "Geliehene Waffe",
        "objective": "Starte **ein Solo-Kampfspiel, in dem Gegner nutzbare Waffen fallen lassen**. Nimm eine andere Waffe aus der Beute. **Probier sie im nächsten Kampf aus und spiel ihn damit zu Ende**.",
        "gameObjective": "Nimm in **{{game}}** im Solo-Spiel eine andere nutzbare Waffe, die ein besiegter Gegner fallen lässt. **Probier sie im nächsten Kampf aus und spiel ihn damit zu Ende**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["weapon-pickups", "combat-loadouts"]
    },
    "experience": {
      "family": "enemy-weapon-trial",
      "cardMetadata": { "genreIds": ["shooter", "rpg"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["loadout"],
      "rules": [],
      "prerequisites": [
        {
          "en": "a solo combat game where defeated enemies drop usable weapons",
          "de": "ein Solo-Kampfspiel, in dem besiegte Gegner nutzbare Waffen fallen lassen",
          "chips": {"en": ["Weapon drops"], "de": ["Waffenfunde"]},
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
    "gameGenreIds": ["shooter", "rpg"]
  },
  {
    "id": "curious-two-photo-lenses",
    "moodIds": ["curious"],
    "type": "experiment",
    "tags": ["photography", "new-approach"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Two Lenses",
        "objective": "Open **a game with photo mode and focal-length controls**. Keep one subject still, photograph it with two very different focal lengths, and **save both images for comparison**.",
        "gameObjective": "Open **{{game}}**. Keep one subject still, photograph it with two very different focal lengths, and **save both images for comparison**."
      },
      "de": {
        "name": "Zwei Brennweiten",
        "objective": "Starte **ein Spiel mit Fotomodus und Brennweitensteuerung**. Lass ein Motiv stehen, fotografiere es mit zwei sehr unterschiedlichen Brennweiten und **speichere beide Bilder zum Vergleich**.",
        "gameObjective": "Starte **{{game}}**. Lass ein Motiv stehen, fotografiere es mit zwei sehr unterschiedlichen Brennweiten und **speichere beide Bilder zum Vergleich**."
      }
    },
    "experience": {
      "family": "photo-focal-length-comparison",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["photography"],
      "rules": [],
      "prerequisites": [
        {
          "en": "a game with photo mode and focal-length controls",
          "de": "ein Spiel mit Fotomodus und Brennweitensteuerung",
          "chips": {"en": ["Focal-length controls"], "de": ["Brennweitensteuerung"]},
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
    "gameGenreIds": ["adventure", "sandbox"],
    "customGameOverrideOnly": true
  },
  {
    "id": "curious-hud-comparison",
    "moodIds": ["curious"],
    "type": "experiment",
    "tags": ["new-approach"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "HUD Comparison",
        "objective": "Open **an open world with optional navigation UI and a short familiar route**. Travel the route with guidance, return, hide the guidance, then **travel it again and compare what you notice**.",
        "gameObjective": "Open **{{game}}**. Travel the route with guidance, return, hide the guidance, then **travel it again and compare what you notice**."
      },
      "de": {
        "name": "HUD-Vergleich",
        "objective": "Starte **eine offene Welt mit optionaler Navigationsanzeige und einer kurzen vertrauten Route**. Geh einen vertrauten Weg erst mit Wegführung. Lauf zurück, blende sie aus und **geh den Weg noch einmal**. Achte darauf, was dir ohne Führung auffällt.",
        "gameObjective": "Starte **{{game}}**. Geh einen vertrauten Weg erst mit Wegführung. Lauf zurück, blende sie aus und **geh den Weg noch einmal**. Achte darauf, was dir ohne Führung auffällt."
      }
    },
    "experience": {
      "family": "navigation-comparison",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "en": "an open world with optional navigation UI and a short familiar route",
          "de": "eine offene Welt mit optionaler Navigationsanzeige und einer kurzen vertrauten Route",
          "chips": {"en": ["Optional navigation"], "de": ["Wegführung optional"]},
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
    "gameGenreIds": ["adventure", "rpg", "sandbox"],
    "customGameOverrideOnly": true
  },
  {
    "id": "curious-reverse-spell-order",
    "rarity": "special",
    "moodIds": ["curious"],
    "type": "experiment",
    "tags": ["spells", "new-approach"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Reverse the Spells",
        "objective": "Open **a solo game with two damage spells you normally combine**. Try your usual two-spell combo on one enemy, then reverse the order on another of the same kind. **Finish the encounter and compare what changed** before switching back.",
        "gameObjective": "Open **{{game}}**. Try your usual two-spell combo on one enemy, then reverse the order on another of the same kind. **Finish the encounter and compare what changed** before switching back."
      },
      "de": {
        "name": "Zauberfolge umkehren",
        "objective": "Starte **ein Solo-Spiel mit zwei Schadenszaubern, die du normalerweise kombinierst**. Nutze deine gewohnte Zweierkombination an einem Gegner und kehre die Reihenfolge bei einem weiteren derselben Art um. **Beende den Kampf und vergleiche, was sich verändert hat**, bevor du zurückwechselst.",
        "gameObjective": "Starte **{{game}}**. Nutze deine gewohnte Zweierkombination an einem Gegner und kehre die Reihenfolge bei einem weiteren derselben Art um. **Beende den Kampf und vergleiche, was sich verändert hat**, bevor du zurückwechselst."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["combat-spells"],
      "match": "all"
    },
    "experience": {
      "family": "spell-order-comparison",
      "cardMetadata": { "genreIds": ["rpg", "roguelike"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["spells"],
      "rules": [],
      "prerequisites": [
        {
          "en": "a solo game with two damage spells you normally combine",
          "de": "ein Solo-Spiel mit zwei Schadenszaubern, die du normalerweise kombinierst",
          "chips": {"en": ["Damage spells"], "de": ["Schadenszauber"]},
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
    "gameGenreIds": ["rpg", "roguelike"]
  },
  {
    "id": "curious-known-world-adaptation",
    "moodIds": ["curious"],
    "type": "inspiration",
    "tags": ["first-play", "story"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Known World",
        "objective": "Open an unstarted game based on a story or setting you already know. **Enter its introduction** and notice what becomes playable, explorable, or different in the adaptation. Guides can wait.",
        "gameObjective": "If you know the world or story behind **{{game}}** but have not started the game, **discover its introduction** and see how it handles the original."
      },
      "de": {
        "name": "Bekannte Welt",
        "objective": "Starte ein ungestartetes Spiel zu einer Geschichte oder Welt, die du kennst. **Spiel den Einstieg** und schau, was das Spiel aus der Geschichte oder Welt macht, die du schon kennst. Guides können warten.",
        "gameObjective": "Wenn du die Welt oder Geschichte von **{{game}}** schon kennst, das Spiel selbst aber noch nicht, **entdecke den Einstieg** und schau, wie es mit der Vorlage umgeht."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["choices-or-lore", "missions-or-levels"],
      "match": "all"
    },
    "experience": {
      "family": "familiar-world-first-play",
      "cardMetadata": { "genreIds": ["adventure", "narrative"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "an unstarted game based on a story or setting you already know",
          "de": "ein ungestartetes Spiel zu einer Geschichte oder Welt, die du kennst",
          "chips": {"en": ["Story adaptation"], "de": ["Story-Adaption"]},
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
    "gameGenreIds": ["adventure", "narrative"]
  },
  {
    "id": "curious-skipped-installment",
    "moodIds": ["curious"],
    "type": "inspiration",
    "tags": ["first-play"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Skipped Installment",
        "objective": "Open an installed entry from a series you know but skipped. Begin with its defaults and **see which familiar ideas it keeps, changes, or abandons**. There is no need to catch up first.",
        "gameObjective": "If you skipped **{{game}}** in a series you know, begin with its defaults. **Discover what it does with the familiar ideas**. There is no need to catch up first."
      },
      "de": {
        "name": "Übersprungener Teil",
        "objective": "Starte einen installierten Teil einer bekannten Reihe, den du ausgelassen hast. Starte mit den Standardeinstellungen und schau, **welche Ideen aus den anderen Teilen hier wieder auftauchen und was sich verändert hat**. Du musst vorher nichts nachholen.",
        "gameObjective": "Wenn du **{{game}}** als Teil einer bekannten Reihe ausgelassen hast, fang mit den Standardeinstellungen an. **Entdecke, was es aus den vertrauten Ideen macht**. Du musst vorher nichts nachholen."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["missions-or-levels"],
      "match": "all"
    },
    "experience": {
      "family": "skipped-installment",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "open",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "en": "an installed entry from a series you know but skipped",
          "de": "einen installierten Teil einer bekannten Reihe, den du ausgelassen hast",
          "chips": {"en": ["Skipped series entry"], "de": ["Ausgelassener Teil"]},
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
    "gameGenreIds": []
  },
  {
    "id": "curious-neglected-demo",
    "moodIds": ["curious"],
    "type": "inspiration",
    "tags": ["first-play"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Forgotten Demo",
        "objective": "Open an installed demo or trial you never opened. **Enter its first playable section** and learn what it values through play. Leave as soon as your question about it is answered.",
        "gameObjective": "If **{{game}}** is an installed demo or trial you have not opened, **try its introduction** and see what interests you."
      },
      "de": {
        "name": "Vergessene Demo",
        "objective": "Starte eine installierte Demo oder Testversion, die du nie geöffnet hast. **Spiel den ersten Abschnitt der Demo** und find dabei heraus, was das Spiel von dir verlangt. Hör auf, wenn du genug gesehen hast.",
        "gameObjective": "Wenn **{{game}}** eine installierte Demo oder Testversion ist, die du noch nicht geöffnet hast, **probier ihren Einstieg aus** und schau, was dich neugierig macht."
      }
    },
    "experience": {
      "family": "demo",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "open",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "en": "an installed demo or trial you never opened",
          "de": "eine installierte Demo oder Testversion, die du nie geöffnet hast",
          "chips": {"en": ["Demo"], "de": ["Demo"]},
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
    "id": "curious-simulation-recovery",
    "moodIds": ["curious"],
    "type": "experiment",
    "tags": ["new-approach"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Recovery Test",
        "objective": "Open **a simulation with a short resettable scenario**. Let one visible resource or system fall below its safe level, restore it, and **observe whether the scenario returns to stability**.",
        "gameObjective": "Open **{{game}}**. Let one visible resource or system fall below its safe level, restore it, and **observe whether the scenario returns to stability**."
      },
      "de": {
        "name": "Erholungstest",
        "objective": "Starte **eine Simulation mit einem kurzen zurücksetzbaren Szenario**. Lass eine Ressource oder einen Wert bewusst in den kritischen Bereich fallen. Bring ihn zurück und **schau, ob sich das Szenario wieder fängt**.",
        "gameObjective": "Starte **{{game}}**. Lass eine Ressource oder einen Wert bewusst in den kritischen Bereich fallen. Bring ihn zurück und **schau, ob sich das Szenario wieder fängt**."
      }
    },
    "experience": {
      "family": "simulation-recovery",
      "cardMetadata": { "genreIds": ["simulation", "strategy"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["new-approach"],
      "rules": [],
      "prerequisites": [
        {
          "en": "a simulation with a short resettable scenario",
          "de": "eine Simulation mit einem kurzen zurücksetzbaren Szenario",
          "chips": {"en": ["Resettable simulation"], "de": ["Simulation zurücksetzbar"]},
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
    "gameGenreIds": ["simulation", "strategy"],
    "customGameOverrideOnly": true
  },
  {
    "id": "curious-unplayed-mode",
    "moodIds": ["curious"],
    "type": "inspiration",
    "tags": ["new-approach"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Unplayed Mode",
        "objective": "Open a familiar game with an unlocked mode you never tried. Read its short rules, keep the defaults, and **see how the familiar mechanics feel inside that structure**.",
        "gameObjective": "Try an unlocked mode you have never played in **{{game}}**. Read its short rules and **discover how the familiar mechanics feel there**."
      },
      "de": {
        "name": "Ungespielter Modus",
        "objective": "Starte ein vertrautes Spiel mit einem freigeschalteten ungespielten Modus. Lies die kurzen Regeln, lass die Standardeinstellungen an und **probier den Modus aus**. Schau, was sich gegenüber deinem gewohnten Spiel verändert.",
        "gameObjective": "Probier in **{{game}}** einen freigeschalteten Modus aus, den du noch nie gespielt hast. Lies seine kurzen Regeln und **entdecke, wie sich die vertrauten Mechaniken darin anfühlen**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["rounds-or-matches"],
      "match": "all"
    },
    "experience": {
      "family": "new-mode",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "open",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "en": "a familiar game with an unlocked mode you never tried",
          "de": "ein vertrautes Spiel mit einem freigeschalteten ungespielten Modus",
          "chips": {"en": ["Unplayed mode"], "de": ["Ungespielter Modus"]},
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
    "gameGenreIds": []
  },
  {
    "id": "curious-enemy-journal",
    "moodIds": ["curious"],
    "type": "objective",
    "tags": ["story"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Enemy Journal",
        "objective": "Open **a game with a bestiary or enemy codex and reachable combat**. Read one unlocked enemy entry, find that enemy, and **finish an encounter after observing one described behavior**.",
        "gameObjective": "Open **{{game}}**. Read one unlocked enemy entry, find that enemy, and **finish an encounter after observing one described behavior**."
      },
      "de": {
        "name": "Gegnereintrag",
        "objective": "Starte **ein Spiel mit Bestiarium oder Gegnerkodex und erreichbarem Kampf**. Lies einen freigeschalteten Eintrag über einen Gegner und such ihn im Spiel. **Achte im Kampf auf eines der beschriebenen Verhaltensmuster und spiel ihn zu Ende**.",
        "gameObjective": "Starte **{{game}}**. Lies einen freigeschalteten Eintrag über einen Gegner und such ihn im Spiel. **Achte im Kampf auf eines der beschriebenen Verhaltensmuster und spiel ihn zu Ende**."
      }
    },
    "experience": {
      "family": "bestiary-in-play",
      "cardMetadata": { "genreIds": ["adventure", "rpg"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Bestiarium-Eintrag und erreichbarer Gegner aus dem Eintrag",
          "en": "Bestiary entry and a reachable enemy described in it",
          "chips": {"en": ["Bestiary"], "de": ["Bestiarium"]},
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
    "gameGenreIds": ["adventure", "rpg"],
    "customGameOverrideOnly": true
  },
  {
    "id": "curious-gadget-before-weapon",
    "moodIds": ["curious"],
    "type": "experiment",
    "tags": ["gadgets", "new-approach"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Gadget First",
        "objective": "Open **a solo mission with an unlocked tactical gadget**. Open an encounter with the gadget before drawing a weapon and **finish that encounter after testing the new opening**.",
        "gameObjective": "In **{{game}}**, open a solo encounter with an unlocked tactical gadget instead of your weapon. **Finish the encounter and notice what the opening changes**."
      },
      "de": {
        "name": "Gadget zuerst",
        "objective": "Starte **eine Solo-Mission mit einem freigeschalteten taktischen Gadget**. Eröffne eine Begegnung mit dem Gadget, bevor du die Waffe ziehst. **Spiel den Kampf zu Ende und achte darauf, was dieser Einstieg verändert**.",
        "gameObjective": "Eröffne in **{{game}}** eine Solo-Begegnung mit einem freigeschalteten taktischen Gadget statt mit deiner Waffe. **Spiel den Kampf zu Ende und achte darauf, was der Einstieg verändert**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["tactical-gadgets", "missions-or-levels"],
      "match": "all"
    },
    "experience": {
      "family": "gadget-opening",
      "cardMetadata": { "genreIds": ["shooter", "stealth"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["gadgets"],
      "rules": [],
      "prerequisites": [
        {
          "en": "a solo mission with an unlocked tactical gadget",
          "de": "eine Solo-Mission mit einem freigeschalteten taktischen Gadget",
          "chips": {"en": ["Tactical gadget"], "de": ["Taktisches Gadget"]},
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
    "id": "curious-mulligan-comparison",
    "moodIds": ["curious"],
    "type": "experiment",
    "tags": ["cards", "new-approach"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Mulligan Comparison",
        "objective": "Open **a card game with a familiar deck and solo or bot matches**. Keep the first playable hand in one match, mulligan in the next, and **finish both matches to compare the openings**.",
        "gameObjective": "Open **{{game}}**. Keep the first playable hand in one match, mulligan in the next, and **finish both matches to compare the openings**."
      },
      "de": {
        "name": "Mulligan-Vergleich",
        "objective": "Starte **ein Kartenspiel mit vertrautem Deck und Solo- oder Bot-Matches**. Behalte im ersten Match die erste spielbare Hand und nutze im zweiten den Mulligan. **Spiel beide Matches zu Ende und vergleiche, wie du gestartet bist**.",
        "gameObjective": "Starte **{{game}}**. Behalte im ersten Match die erste spielbare Hand und nutze im zweiten den Mulligan. **Spiel beide Matches zu Ende und vergleiche, wie du gestartet bist**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["card-decks", "card-mulligan", "rounds-or-matches"]
    },
    "experience": {
      "family": "mulligan-comparison",
      "cardMetadata": { "genreIds": ["card"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["cards"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Vertrautes Deck, Mulligan und Solo- oder Bot-Matches",
          "en": "Familiar deck, mulligan and solo or bot matches",
          "chips": {"en": ["Mulligan"], "de": ["Mulligan"]},
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
    "id": "curious-two-difficulties",
    "moodIds": ["curious"],
    "type": "experiment",
    "tags": ["replay", "new-approach"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Two Difficulties",
        "objective": "Open **a game with a short replayable checkpoint and adjustable difficulty**. Finish the section on your usual setting, move one step up or down, then **finish it again and compare what changed**.",
        "gameObjective": "Open **{{game}}**. Finish the section on your usual setting, move one step up or down, then **finish it again and compare what changed**."
      },
      "de": {
        "name": "Zwei Schwierigkeiten",
        "objective": "Starte **ein Spiel mit einem kurzen Abschnitt, den du auf verschiedenen Schwierigkeitsgraden erneut spielen kannst**. Beende den Abschnitt auf deiner üblichen Stufe, geh eine Stufe höher oder tiefer und **beende ihn erneut und vergleiche die Unterschiede**.",
        "gameObjective": "Starte **{{game}}**. Beende den Abschnitt auf deiner üblichen Stufe, geh eine Stufe höher oder tiefer und **beende ihn erneut und vergleiche die Unterschiede**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["missions-or-levels", "replayable-encounters"]
    },
    "experience": {
      "family": "difficulty-comparison",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "de": "Kurzer wiederholbarer Abschnitt mit wechselbarer Schwierigkeit",
          "en": "Short replayable section with adjustable difficulty",
          "chips": {"en": ["Adjustable difficulty"], "de": ["Schwierigkeit wählbar"]},
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
  }
]);
