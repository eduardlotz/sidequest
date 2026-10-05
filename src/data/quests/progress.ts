import { defineQuests } from "./defineQuests";

export const ProgressQuests = defineQuests([
  {
    "id": "oldest-unfinished",
    "moodIds": ["progress"],
    "type": "inspiration",
    "tags": ["current-save", "story"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Still Unfinished",
        "objective": "Open your **oldest installed, unfinished story game**. Read its recap or quest log and **pick up the main story**. No chapter target today.",
        "gameObjective": "On your oldest unfinished story save in **{{game}}**, read the recap or quest log and **pick up the main story**."
      },
      "de": {
        "name": "Noch nicht fertig",
        "objective": "Starte dein **ältestes installiertes, unfertiges Storyspiel**. Lies die Zusammenfassung oder das Questlog und **spiele die Hauptgeschichte weiter**. Du musst heute kein Kapitel schaffen.",
        "gameObjective": "Lies in **{{game}}** in deinem ältesten unfertigen Storyspielstand die Zusammenfassung oder das Questlog und **spiele die Hauptgeschichte weiter**."
      }
    },
    "experience": {
      "family": "resume-old-story",
      "cardMetadata": { "genreIds": ["rpg", "narrative"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Unfertiger Story-Spielstand",
          "en": "Unfinished story save",
          "chips": {"en": ["Story save"], "de": ["Story-Spielstand"]},
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
    "gameGenreIds": ["rpg", "narrative"],
    "customGameCompatibility": {
      "capabilityIds": ["missions-or-levels", "choices-or-lore"]
    }
  },
  {
    "id": "smallest-quest",
    "moodIds": ["progress"],
    "type": "inspiration",
    "tags": ["current-save"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Loose Ends",
        "objective": "Open **an RPG with unfinished side quests**. **Return to their people and places** and follow those stories for a while. Leave new quests for later.",
        "gameObjective": "In **{{game}}**, **return to the people and places of an unfinished side quest** and follow its story for a while."
      },
      "de": {
        "name": "Offene Geschichten",
        "objective": "Starte **ein Rollenspiel mit offenen Nebenquests**. Such dir eine aus, deren Figur oder Ort dich interessiert, und **folge ihrer Geschichte ein Stück weiter**. Neue Quests können warten.",
        "gameObjective": "**Kehre in {{game}} zu den Figuren und Orten einer offenen Nebenquest zurück** und folge ihrer Geschichte ein Stück weiter."
      }
    },
    "experience": {
      "family": "side-story-roaming",
      "cardMetadata": { "genreIds": ["rpg"], "playStyleIds": [] },
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
    "gameGenreIds": ["rpg"],
    "customGameCompatibility": {
      "capabilityIds": ["missions-or-levels", "choices-or-lore"]
    }
  },
  {
    "id": "final-piece",
    "moodIds": ["progress"],
    "type": "objective",
    "tags": ["collectibles"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "The Missing Piece",
        "objective": "Choose **a collection missing one item** with a known location. **Find that item and complete the set**. Claim its reward if there is one.",
        "gameObjective": "With a collection missing just one item and its location known in **{{game}}**, **find it and complete the set**."
      },
      "de": {
        "name": "Das fehlende Stück",
        "objective": "Wähle **eine Sammlung mit einem fehlenden Item**, dessen Ort bekannt ist. **Finde das Item und vervollständige die Sammlung**. Hole ihre Belohnung, falls es eine gibt.",
        "gameObjective": "**Finde in {{game}} den letzten Gegenstand einer Sammlung mit bekanntem Fundort und vervollständige sie**."
      }
    },
    "experience": {
      "family": "complete-collection",
      "cardMetadata": { "genreIds": ["adventure"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["collectibles"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Sammlung, der genau ein erreichbares Teil fehlt",
          "en": "Collection missing one reachable item",
          "chips": {"en": ["Incomplete collection"], "de": ["Unfertige Sammlung"]},
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
    "gameGenreIds": ["adventure"],
    "customGameCompatibility": {
      "capabilityIds": ["collectibles"]
    }
  },
  {
    "id": "next-unlock",
    "moodIds": ["progress"],
    "type": "objective",
    "tags": ["current-save"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "translations": {
      "en": {
        "name": "Put It to Use",
        "objective": "Find **a character or vehicle one short task from unlocking**. Complete that task and **use the unlock in a full round or race**.",
        "gameObjective": "With a character or vehicle one short task from unlocking in **{{game}}**, **finish that task and use the unlock in a full round or race**."
      },
      "de": {
        "name": "Gleich ausprobieren",
        "objective": "Such **eine Figur oder ein Fahrzeug kurz vor der Freischaltung**. Erledige die letzte kurze Aufgabe und **spiele damit eine ganze Runde oder ein Rennen**.",
        "gameObjective": "**Erledige in {{game}} die letzte kurze Freischaltaufgabe für eine Figur oder ein Fahrzeug und nutze es in einer ganzen Runde oder einem Rennen**."
      }
    },
    "experience": {
      "family": "unlock-and-use",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "en": "Existing save",
          "de": "Vorhandener Spielstand",
          "chips": {"en": ["Existing save"], "de": ["Spielstand"]},
          "critical": true
        },
        {
          "en": "Character or vehicle one short task from unlocking; playable round or race",
          "de": "Figur oder Fahrzeug eine kurze Aufgabe vor Freischaltung; spielbare Runde oder Rennen",
          "chips": {"en": ["Near an unlock"], "de": ["Kurz vor Freischaltung"]},
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
    "gameGenreIds": ["racing", "shooter", "fighting", "moba"],
    "customGameOverrideOnly": true,
    "rarity": "special"
  },
  {
    "id": "unfinished-small-adventure",
    "moodIds": ["progress"],
    "type": "inspiration",
    "tags": ["current-save", "story"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "A Small Adventure",
        "objective": "Continue **a short adventure you already started**. **Follow its next story thread** without checking how much remains. Stop at a save point when you like.",
        "gameObjective": "In a short adventure you already started in **{{game}}**, **follow its next story thread** without checking how much remains."
      },
      "de": {
        "name": "Ein kleines Abenteuer",
        "objective": "Setze **ein begonnenes kurzes Abenteuer** fort. **Spiel die nächste Szene oder Mission**, ohne nachzuschlagen, wie viel noch kommt. Hör an einem Speicherpunkt auf, wenn es reicht.",
        "gameObjective": "**Folge in {{game}} im begonnenen kurzen Abenteuer dem nächsten Storyfaden**, ohne nachzuschlagen, wie viel noch kommt."
      }
    },
    "experience": {
      "family": "resume-short-adventure",
      "cardMetadata": { "genreIds": ["adventure", "narrative"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["story"],
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
    "gameGenreIds": ["adventure", "narrative"],
    "customGameCompatibility": {
      "capabilityIds": ["missions-or-levels", "choices-or-lore"]
    }
  },
  {
    "id": "second-session",
    "moodIds": ["progress"],
    "type": "objective",
    "tags": ["current-save", "first-play"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "The Second Session",
        "objective": "Open **a game you stopped after its first session**. Load that save, review the controls if needed, and **reach the next save point or finish one objective**.",
        "gameObjective": "Open **{{game}}**, which you set aside after its first session. Refresh the controls if needed, then **reach the next save point or finish one small objective**."
      },
      "de": {
        "name": "Die zweite Session",
        "objective": "Starte **ein Spiel, das du nach der ersten Session liegen gelassen hast**. Lade den Spielstand, sieh dir bei Bedarf die Steuerung an und **erreiche den nächsten Speicherpunkt oder schließe ein Ziel ab**.",
        "gameObjective": "Starte **{{game}}**, das du nach der ersten Session liegen gelassen hast. Frisch bei Bedarf die Steuerung auf und **erreiche den nächsten Speicherpunkt oder schließe ein kleines Ziel ab**."
      }
    },
    "experience": {
      "family": "second-first-impression",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
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
    "id": "chapter-left-open",
    "moodIds": ["progress"],
    "type": "objective",
    "tags": ["current-save", "story"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "translations": {
      "en": {
        "name": "Close the Chapter",
        "objective": "Return to **a story game with a chapter already in progress**. Follow its main path and **finish that chapter or episode**. Leave the next one for another session.",
        "gameObjective": "On a story chapter already in progress in **{{game}}**, follow its main path and **finish the chapter or episode**."
      },
      "de": {
        "name": "Kapitel abschließen",
        "objective": "Kehre zu **einem Storyspiel mit einem begonnenen Kapitel** zurück. Folge dem Hauptweg und **beende dieses Kapitel oder diese Episode**. Das nächste kommt in einer anderen Session.",
        "gameObjective": "Folge in **{{game}}** in einem begonnenen Storykapitel dem Hauptweg und **beende dieses Kapitel oder diese Episode**."
      }
    },
    "experience": {
      "family": "finish-short-chapter",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Existing save",
          "de": "Vorhandener Spielstand",
          "chips": {"en": ["Existing save"], "de": ["Spielstand"]},
          "critical": true
        },
        {
          "en": "Short chapter already in progress",
          "de": "Kurzes bereits begonnenes Kapitel",
          "chips": {"en": ["Started chapter"], "de": ["Begonnenes Kapitel"]},
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
    "gameGenreIds": ["adventure", "rpg", "narrative"],
    "customGameCompatibility": {
      "capabilityIds": ["missions-or-levels", "choices-or-lore"]
    },
    "rarity": "special"
  },
  {
    "id": "main-mission",
    "moodIds": ["progress", "focused"],
    "type": "objective",
    "tags": ["current-save"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Move the Story",
        "objective": "Open a **game with a short main mission available**. Continue your current save and **finish the next main mission**.",
        "gameObjective": "Open **{{game}}**. Continue your current save and **finish the next main mission**."
      },
      "de": {
        "name": "Story weiterspielen",
        "objective": "Starte ein **Spiel mit einer verfügbaren kurzen Hauptmission**. Setze deinen Spielstand fort und **schließe die nächste Hauptmission ab**.",
        "gameObjective": "Starte **{{game}}**. Setze deinen Spielstand fort und **schließe die nächste Hauptmission ab**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["missions-or-levels"]
    },
    "experience": {
      "family": "main-mission",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Current save; short next mission",
          "de": "Spielstand; kurze nächste Hauptmission",
          "chips": {"en": ["Main mission"], "de": ["Hauptmission"]},
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
    "gameGenreIds": ["adventure", "platformer", "shooter", "rpg", "strategy", "narrative", "stealth"]
  },
  {
    "id": "craft-from-storage",
    "moodIds": ["progress", "overwhelmed", "low-energy"],
    "type": "objective",
    "tags": ["crafting"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "From Storage",
        "objective": "Open a **game with crafting**. Pick a recipe you have all the materials for and **craft it once**. Gather and buy nothing.",
        "gameObjective": "Open **{{game}}**. Pick a recipe you have all the materials for and **craft it once**. Gather and buy nothing."
      },
      "de": {
        "name": "Aus dem Vorrat",
        "objective": "Starte ein **Spiel mit Crafting**. Wähle ein Rezept mit vollständig vorhandenen Materialien und **stelle es einmal her**. Sammle und kaufe nichts dazu.",
        "gameObjective": "Starte **{{game}}**. Wähle ein Rezept mit vollständig vorhandenen Materialien und **stelle es einmal her**. Sammle und kaufe nichts dazu."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["crafting"]
    },
    "experience": {
      "family": "ready-recipe",
      "cardMetadata": { "genreIds": ["rpg", "survival"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["crafting"],
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
    "gameGenreIds": ["rpg", "survival"]
  },
  {
    "id": "one-missing-collectible",
    "moodIds": ["progress", "focused"],
    "type": "objective",
    "tags": ["collectibles"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "One Gap Less",
        "objective": "Open a **game with collectibles**. Pick an item missing from your collection and **find it without guides or outside help**.",
        "gameObjective": "Open **{{game}}**. Pick an item missing from your collection and **find it without guides or outside help**."
      },
      "de": {
        "name": "Eine Lücke weniger",
        "objective": "Starte ein **Spiel mit Sammelobjekten**. Wähle ein noch fehlendes Sammelobjekt und **finde es ohne Guides oder Hilfe von außen**.",
        "gameObjective": "Starte **{{game}}**. Wähle ein noch fehlendes Sammelobjekt und **finde es ohne Guides oder Hilfe von außen**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["collectibles"]
    },
    "experience": {
      "family": "known-missing-collectible",
      "cardMetadata": { "genreIds": ["adventure"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["collectibles"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Bekanntes fehlendes Sammelobjekt mit einem Hinweis auf seinen Fundort",
          "en": "Known missing collectible with a lead to its location",
          "chips": {"en": ["Location clue"], "de": ["Fundorthinweis"]},
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
    "id": "craft-and-use-tool",
    "moodIds": ["progress", "focused"],
    "type": "objective",
    "tags": ["crafting"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Made for a Job",
        "objective": "Open a **game with craftable tools or consumables**. Choose an unlocked recipe with owned materials and a use nearby. **Craft the item and use it once**.",
        "gameObjective": "Open **{{game}}**. Choose an unlocked recipe with owned materials and a use nearby. **Craft the item and use it once**."
      },
      "de": {
        "name": "Für einen Zweck",
        "objective": "Starte ein **Spiel mit herstellbaren Werkzeugen oder Verbrauchsitems**. Wähle ein Rezept für ein Werkzeug oder Verbrauchsitem, das du gleich in der Nähe brauchen kannst. **Stell es aus deinen Vorräten her und setz es einmal ein**.",
        "gameObjective": "Starte **{{game}}**. Wähle ein Rezept für ein Werkzeug oder Verbrauchsitem, das du gleich in der Nähe brauchen kannst. **Stell es aus deinen Vorräten her und setz es einmal ein**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["crafting"]
    },
    "experience": {
      "family": "craft-and-use-tool",
      "cardMetadata": { "genreIds": ["rpg", "survival"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["crafting"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Bekanntes Rezept, Material und eine Gelegenheit, das Werkzeug zu nutzen",
          "en": "Known recipe, materials and an opportunity to use the tool",
          "chips": {"en": ["Recipe"], "de": ["Rezept"]},
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
    "id": "cook-for-the-road",
    "moodIds": ["progress", "focused"],
    "type": "objective",
    "tags": ["cooking"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Food for the Road",
        "objective": "Open a **game with cooking**. Use a known recipe and owned ingredients to **cook one edible portion**. Eat it during play when its effect helps.",
        "gameObjective": "Open **{{game}}**. Use a known recipe and owned ingredients to **cook one edible portion**. Eat it during play when its effect helps."
      },
      "de": {
        "name": "Proviant",
        "objective": "Starte ein **Spiel mit Kochen**. Koch aus vorhandenen Zutaten **eine Portion Proviant nach einem Rezept, das du kennst**. Iss sie unterwegs, wenn du ihre Wirkung gebrauchen kannst.",
        "gameObjective": "Starte **{{game}}**. Koch aus vorhandenen Zutaten **eine Portion Proviant nach einem Rezept, das du kennst**. Iss sie unterwegs, wenn du ihre Wirkung gebrauchen kannst."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["cooking"]
    },
    "experience": {
      "family": "cook-and-use-food",
      "cardMetadata": { "genreIds": ["simulation", "cozy"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["cooking"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Zutaten und ein Gericht, dessen Effekt dir auf deinem nächsten Weg hilft",
          "en": "Ingredients and a dish whose effect helps on your next route",
          "chips": {"en": ["Ingredients"], "de": ["Zutaten"]},
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
    "id": "plant-a-small-row",
    "moodIds": ["progress", "overwhelmed"],
    "type": "objective",
    "tags": ["farming"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "One New Row",
        "objective": "Open a **game with crop planting**. Use owned seeds to **plant one small row**. Water it if needed. Leave the harvest for another session.",
        "gameObjective": "Open **{{game}}**. Use owned seeds to **plant one small row**. Water it if needed. Leave the harvest for another session."
      },
      "de": {
        "name": "Eine neue Reihe",
        "objective": "Starte ein **Spiel mit anbaubaren Nutzpflanzen**. Nutze vorhandene Samen und **bepflanze eine kleine Reihe**. Gieße bei Bedarf. Die Ernte kommt in einer anderen Session.",
        "gameObjective": "Starte **{{game}}**. Nutze vorhandene Samen und **bepflanze eine kleine Reihe**. Gieße bei Bedarf. Die Ernte kommt in einer anderen Session."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["grow-crops"]
    },
    "experience": {
      "family": "plant-a-small-row",
      "cardMetadata": { "genreIds": ["simulation", "cozy"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["farming"],
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
    "gameGenreIds": ["simulation", "cozy"]
  },
  {
    "id": "merchant-after-the-hunt",
    "moodIds": ["progress", "focused"],
    "type": "objective",
    "tags": ["hunting", "trading"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "From Hunt to Market",
        "objective": "Open a **game with hunting and merchants**. Near a merchant who buys animal materials, hunt one spotted animal your gear can handle. **Collect and sell its materials**.",
        "gameObjective": "Open **{{game}}**. Near a merchant who buys animal materials, hunt one spotted animal your gear can handle. **Collect and sell its materials**."
      },
      "de": {
        "name": "Von der Jagd zum Markt",
        "objective": "Starte ein **Spiel mit Jagd und Händlern**. Such dir nahe einem Händler ein Tier, das du mit deiner Ausrüstung jagen kannst. **Erleg es, sammle die Materialien und verkauf sie**.",
        "gameObjective": "Starte **{{game}}**. Such dir nahe einem Händler ein Tier, das du mit deiner Ausrüstung jagen kannst. **Erleg es, sammle die Materialien und verkauf sie**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["hunting", "trading"]
    },
    "experience": {
      "family": "hunt-and-trade",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["hunting", "trading"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Wild in der Nähe und ein erreichbarer Händler für die Beute",
          "en": "Nearby wildlife and a reachable buyer for the loot",
          "chips": {"en": ["Wildlife", "Buyer"], "de": ["Wildtiere", "Händler"]},
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
    "gameGenreIds": ["rpg", "simulation", "survival", "cozy"]
  },
  {
    "id": "platform-next-checkpoint",
    "moodIds": ["progress", "overwhelmed", "relax"],
    "type": "objective",
    "tags": ["traversal", "current-save"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "The Next Checkpoint",
        "objective": "Open a **platformer with checkpoints**. On a level with checkpoints, continue from your current position and **activate the next checkpoint**. Use retries and assists if needed. Leave the rest of the level for later.",
        "gameObjective": "In **{{game}}**: On a level with checkpoints, continue from your current position and **activate the next checkpoint**. Use retries and assists if needed. Leave the rest of the level for later."
      },
      "de": {
        "name": "Der nächste Checkpoint",
        "objective": "Starte ein **Plattformer mit Checkpoints**. Mach an deiner aktuellen Stelle weiter und **erreich den nächsten Checkpoint**. Wiederholungen und Hilfen sind erlaubt. Den Rest des Levels kannst du später spielen.",
        "gameObjective": "In **{{game}}**: Mach an deiner aktuellen Stelle weiter und **erreich den nächsten Checkpoint**. Wiederholungen und Hilfen sind erlaubt. Den Rest des Levels kannst du später spielen."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["platforming"],
      "genreIds": ["platformer"]
    },
    "experience": {
      "family": "platform-checkpoint",
      "cardMetadata": { "genreIds": ["platformer"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["traversal"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Nächster Checkpoint in einem begonnenen Abschnitt",
          "en": "Next checkpoint in a section already started",
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
    "gameGenreIds": ["platformer"]
  },
  {
    "id": "platform-collect-a-detour",
    "moodIds": ["progress", "explore"],
    "type": "objective",
    "tags": ["collectibles", "traversal"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Worth the Jump",
        "objective": "Open a **game with platforming and tracked collectibles**. Choose a visible, uncollected item reached by a short jumping detour. **Collect it and return to stable ground**. Skip items that need abilities you have not unlocked.",
        "gameObjective": "In **{{game}}**: Choose a visible, uncollected item reached by a short jumping detour. **Collect it and return to stable ground**. Skip items that need abilities you have not unlocked."
      },
      "de": {
        "name": "Den Sprung wert",
        "objective": "Starte ein **Spiel mit Sprungpassagen und erfassten Sammelobjekten**. Wähle ein sichtbares, noch nicht gesammeltes Item an einem kurzen Sprungabstecher. **Sammle es und kehre auf sicheren Boden zurück**. Lass Items aus, die noch gesperrte Fähigkeiten benötigen.",
        "gameObjective": "In **{{game}}**: Wähle ein sichtbares, noch nicht gesammeltes Item an einem kurzen Sprungabstecher. **Sammle es und kehre auf sicheren Boden zurück**. Lass Items aus, die noch gesperrte Fähigkeiten benötigen."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["platforming", "collectibles"]
    },
    "experience": {
      "family": "platform-collectible-detour",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["collectibles", "traversal"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Sichtbares Sammelobjekt neben dem Hauptweg",
          "en": "Visible collectible beside the main route",
          "chips": {"en": ["Visible collectible"], "de": ["Sichtbares Sammelobjekt"]},
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
    "gameGenreIds": ["adventure", "platformer", "racing"]
  },
  {
    "id": "time-trial-set-a-baseline",
    "moodIds": ["progress", "focused"],
    "type": "objective",
    "tags": ["time-trial"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Your Starting Time",
        "objective": "Open a **game with replayable time trials**. Choose a short, unlocked timed route with a result screen. **Finish one run and record its time in the game**. Mistakes are fine. Keep this time as a reference for later.",
        "gameObjective": "In **{{game}}**: Choose a short, unlocked timed route with a result screen. **Finish one run and record its time in the game**. Mistakes are fine. Keep this time as a reference for later."
      },
      "de": {
        "name": "Deine Ausgangszeit",
        "objective": "Starte ein **Spiel mit Zeitstrecken und Ergebnisbildschirm**. Wähle eine kurze freigeschaltete Strecke. **Beende einen Lauf und halte seine Zeit im Spiel fest**. Fehler sind okay; die Zeit ist dein Ausgangspunkt für später.",
        "gameObjective": "Wähle in **{{game}}** eine kurze freigeschaltete Zeitstrecke mit Ergebnisbildschirm. **Beende einen Lauf und halte seine Zeit im Spiel fest**. Fehler sind okay; die Zeit ist dein Ausgangspunkt für später."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["time-trials"]
    },
    "experience": {
      "family": "time-trial-baseline",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["time-trial"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Kurze Strecke mit Zeitmessung",
          "en": "Short timed route",
          "chips": {"en": ["Timed route"], "de": ["Zeitstrecke"]},
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
    "id": "match-stay-to-the-result",
    "moodIds": ["progress", "overwhelmed"],
    "type": "objective",
    "tags": ["full-match"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "translations": {
      "en": {
        "name": "Through the Result",
        "objective": "Open a **game with full matches**. Use your familiar mode and setup. **Play one whole match through its final result**, including every round. A win is not required. Allow enough time to finish even if it runs longer than expected.",
        "gameObjective": "In **{{game}}**: Use your familiar mode and setup. **Play one whole match through its final result**, including every round. A win is not required. Allow enough time to finish even if it runs longer than expected."
      },
      "de": {
        "name": "Bis zum Ergebnis",
        "objective": "Starte **ein Spiel mit ganzen Matches**. Such dir einen vertrauten Modus und **spiel ein Match bis zum Ergebnis zu Ende**, einschließlich aller Runden. Du musst nicht gewinnen.",
        "gameObjective": "Starte **{{game}}** in einem vertrauten Modus und **spiel ein Match bis zum Ergebnis zu Ende**, einschließlich aller Runden. Du musst nicht gewinnen."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["whole-matches"]
    },
    "experience": {
      "family": "finish-full-match",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["full-match"],
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
    "gameGenreIds": ["card", "shooter", "moba", "strategy", "sports", "fighting"]
  },
  {
    "id": "progress-resume-main-thread",
    "moodIds": ["progress", "overwhelmed"],
    "type": "objective",
    "tags": ["current-save", "story"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Resume the Thread",
        "objective": "Open **an unfinished story save with an active main objective**. Review the current objective, continue from the existing save, and **complete its next marked step**. Do not restart the campaign.",
        "gameObjective": "Open **{{game}}**. Review the current objective, continue from the existing save, and **complete its next marked step**. Do not restart the campaign."
      },
      "de": {
        "name": "Den Faden aufnehmen",
        "objective": "Starte **einen unfertigen Story-Spielstand mit aktivem Hauptziel**. Lies das aktuelle Ziel, setze den vorhandenen Spielstand fort und **schließe den nächsten markierten Schritt ab**. Starte die Kampagne nicht neu.",
        "gameObjective": "Starte **{{game}}**. Lies das aktuelle Ziel, setze den vorhandenen Spielstand fort und **schließe den nächsten markierten Schritt ab**. Starte die Kampagne nicht neu."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["missions-or-levels"],
      "match": "all"
    },
    "experience": {
      "family": "resume-main-step",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Unfertiger Spielstand mit aktivem Hauptziel",
          "en": "Unfinished save with an active main objective",
          "chips": {"en": ["Main objective"], "de": ["Hauptziel"]},
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
    "id": "progress-turn-in-a-mission",
    "moodIds": ["progress"],
    "type": "objective",
    "tags": ["current-save", "story"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Turn It In",
        "objective": "Open **a save with a finished mission ready to turn in**. Return to its character or terminal and **complete the turn-in through its reward screen**. Do not accept another mission yet.",
        "gameObjective": "Open **{{game}}**. Return to its character or terminal and **complete the turn-in through its reward screen**. Do not accept another mission yet."
      },
      "de": {
        "name": "Auftrag abgeben",
        "objective": "Starte **einen Spielstand mit einem erledigten Auftrag, den du noch abgeben musst**. Geh zurück zur Person oder zum Terminal und **gib den Auftrag ab, bis du die Belohnung bekommst**. Nimm noch keinen neuen an.",
        "gameObjective": "Starte **{{game}}**. Geh zurück zur Person oder zum Terminal und **gib den Auftrag ab, bis du die Belohnung bekommst**. Nimm noch keinen neuen an."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["missions-or-levels", "choices-or-lore"],
      "match": "all"
    },
    "experience": {
      "family": "mission-turn-in",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Erledigter Auftrag, der noch abgegeben werden muss",
          "en": "Completed mission awaiting turn-in",
          "chips": {"en": ["Mission turn-in"], "de": ["Auftrag abgeben"]},
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
    "id": "progress-claim-and-use-reward",
    "moodIds": ["progress"],
    "type": "objective",
    "tags": ["current-save", "loadout"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Claim and Use",
        "objective": "Open **a save with a completed mission reward still unclaimed**. Claim that reward, equip or activate it, and **finish one normal encounter using it**.",
        "gameObjective": "Open **{{game}}**. Claim that reward, equip or activate it, and **finish one normal encounter using it**."
      },
      "de": {
        "name": "Abholen und nutzen",
        "objective": "Starte **einen Spielstand mit einer noch nicht abgeholten Missionsbelohnung**. Hol die Belohnung ab, rüste oder aktiviere sie und **nutze sie in einem normalen Kampf, den du zu Ende spielst**.",
        "gameObjective": "Starte **{{game}}**. Hol die Belohnung ab, rüste oder aktiviere sie und **nutze sie in einem normalen Kampf, den du zu Ende spielst**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["missions-or-levels", "combat-loadouts"],
      "match": "all"
    },
    "experience": {
      "family": "claim-and-use-gear",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["loadout"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Nicht abgeholte Ausrüstungsbelohnung und erreichbarer Kampf",
          "en": "Unclaimed equipment reward and reachable encounter",
          "chips": {"en": ["Unclaimed reward"], "de": ["Offene Belohnung"]},
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
    "id": "progress-spend-one-skill-point",
    "moodIds": ["progress"],
    "type": "objective",
    "tags": ["abilities", "current-save"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Spend One Point",
        "objective": "Open **a game with an unspent skill point and usable unlocked abilities**. Choose one affordable ability, unlock it, and **finish an encounter after using the new ability once**.",
        "gameObjective": "Open **{{game}}**. Choose one affordable ability, unlock it, and **finish an encounter after using the new ability once**."
      },
      "de": {
        "name": "Einen Punkt ausgeben",
        "objective": "Starte **ein Spiel mit einem freien Fähigkeitspunkt und Fähigkeiten, die du im Kampf nutzen kannst**. Wähle eine Fähigkeit, die du mit dem Punkt freischalten kannst. Schalte sie frei, **nutze sie einmal in einem Kampf und spiel ihn zu Ende**.",
        "gameObjective": "Starte **{{game}}**. Wähle eine Fähigkeit, die du mit dem Punkt freischalten kannst. Schalte sie frei, **nutze sie einmal in einem Kampf und spiel ihn zu Ende**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["character-abilities", "missions-or-levels"],
      "match": "all"
    },
    "experience": {
      "family": "unlock-and-use-ability",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["abilities"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Freier Skill-Punkt für eine aktiv nutzbare Fähigkeit",
          "en": "Unspent skill point for an active ability",
          "chips": {"en": ["Skill point"], "de": ["Skillpunkt"]},
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
    "gameGenreIds": ["adventure", "rpg", "roguelike"]
  },
  {
    "id": "progress-craft-the-upgrade",
    "moodIds": ["progress"],
    "type": "objective",
    "tags": ["crafting"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Craft the Upgrade",
        "objective": "Open **a crafting game with an upgrade whose missing materials are nearby**. Gather what is missing and **craft the upgrade**.",
        "gameObjective": "Open **{{game}}** with an upgrade whose missing materials are nearby. Gather what is missing and **craft the upgrade**."
      },
      "de": {
        "name": "Upgrade herstellen",
        "objective": "Starte **ein Crafting-Spiel mit einem Upgrade, für das du die fehlenden Materialien in der Nähe findest**. Besorg dir den Rest und **stell das Upgrade her**.",
        "gameObjective": "Starte **{{game}}** mit einem Upgrade, für das du die fehlenden Materialien in der Nähe findest. Besorg dir den Rest und **stell das Upgrade her**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["crafting", "equipment-upgrades"]
    },
    "experience": {
      "family": "craft-upgrade",
      "cardMetadata": { "genreIds": ["rpg", "survival"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["crafting"],
      "rules": [],
      "prerequisites": [
        {
          "en": "a game with a reachable upgrade recipe",
          "de": "ein Spiel mit einem Upgrade, für das du die fehlenden Materialien in der Nähe findest",
          "chips": {"en": ["Upgrade recipe"], "de": ["Upgrade-Rezept"]},
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
    "id": "progress-clear-one-cluster",
    "moodIds": ["progress"],
    "type": "objective",
    "tags": ["collectibles"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Clear One Cluster",
        "objective": "Open **a game with several revealed collectibles close together**. Choose one small visible cluster and **collect every item in that cluster**. Leave distant icons alone.",
        "gameObjective": "Open **{{game}}**. Choose one small visible cluster and **collect every item in that cluster**. Leave distant icons alone."
      },
      "de": {
        "name": "Eine Gruppe abschließen",
        "objective": "Starte **ein Spiel mit mehreren auf der Karte sichtbaren Sammelobjekten nahe beieinander**. Such dir eine kleine Gruppe auf der Karte aus und **sammle alle Objekte darin ein**. Die weiter entfernten können warten.",
        "gameObjective": "Starte **{{game}}**. Such dir eine kleine Gruppe auf der Karte aus und **sammle alle Objekte darin ein**. Die weiter entfernten können warten."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["collectibles"],
      "match": "all"
    },
    "experience": {
      "family": "collectible-cluster",
      "cardMetadata": { "genreIds": ["adventure", "platformer"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["collectibles"],
      "rules": [],
      "prerequisites": [
        {
          "en": "a game with several revealed collectibles close together",
          "de": "ein Spiel mit mehreren auf der Karte sichtbaren Sammelobjekten nahe beieinander",
          "chips": {"en": ["Marked collectibles"], "de": ["Markierte Sammelobjekte"]},
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
    "id": "progress-fill-one-loadout-gap",
    "moodIds": ["progress"],
    "type": "objective",
    "tags": ["loadout"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Fill One Gap",
        "objective": "Open **a game with an incomplete saved loadout**. Identify one empty or clearly outdated slot, obtain or equip an available improvement, and **save the completed loadout**.",
        "gameObjective": "Open **{{game}}**. Identify one empty or clearly outdated slot, obtain or equip an available improvement, and **save the completed loadout**."
      },
      "de": {
        "name": "Eine Lücke schließen",
        "objective": "Starte **ein Spiel mit einer unvollständigen gespeicherten Ausrüstung**. Such in deiner gespeicherten Ausrüstung einen leeren oder veralteten Platz. **Rüste dort etwas Besseres aus und speichere das Loadout**.",
        "gameObjective": "Starte **{{game}}**. Such in deiner gespeicherten Ausrüstung einen leeren oder veralteten Platz. **Rüste dort etwas Besseres aus und speichere das Loadout**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["combat-loadouts"],
      "match": "all"
    },
    "experience": {
      "family": "fill-loadout-gap",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["loadout"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Lücke im Loadout und passende Ausrüstung im Inventar",
          "en": "Loadout gap and suitable equipment already owned",
          "chips": {"en": ["Equipment"], "de": ["Ausrüstung"]},
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
    "gameGenreIds": ["shooter", "rpg", "roguelike"]
  },
  {
    "id": "progress-one-relationship-step",
    "moodIds": ["progress"],
    "type": "objective",
    "tags": ["dialogue"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "One Relationship Step",
        "objective": "Open **a story or life sim with a reachable known character**. Complete one available conversation, gift, or shared scene and **reach its relationship update or scene ending**.",
        "gameObjective": "Open **{{game}}**. Complete one available conversation, gift, or shared scene and **reach its relationship update or scene ending**."
      },
      "de": {
        "name": "Ein Beziehungsschritt",
        "objective": "Starte **ein Story- oder Lebenssimulationsspiel mit einer Figur, die du schon kennst und erreichen kannst**. Sprich mit der Figur, mach ihr ein Geschenk oder erlebe eine gemeinsame Szene. **Spiel weiter, bis sich eure Beziehung aktualisiert oder die Szene endet**.",
        "gameObjective": "Starte **{{game}}**. Sprich mit der Figur, mach ihr ein Geschenk oder erlebe eine gemeinsame Szene. **Spiel weiter, bis sich eure Beziehung aktualisiert oder die Szene endet**."
      }
    },
    "experience": {
      "family": "relationship-step",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["dialogue"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Erreichbare bekannte Figur mit Beziehungssystem",
          "en": "Reachable known character with a relationship system",
          "chips": {"en": ["Relationship system"], "de": ["Beziehungssystem"]},
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
    "gameGenreIds": ["narrative", "simulation", "cozy"],
    "customGameOverrideOnly": true
  },
  {
    "id": "progress-finish-one-event",
    "moodIds": ["progress"],
    "type": "objective",
    "tags": ["racing"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "translations": {
      "en": {
        "name": "Finish One Event",
        "objective": "Open **a racing game with an unfinished event**. Use any eligible vehicle and assists, then **finish every race in that one event**. Placement does not matter.",
        "gameObjective": "Open **{{game}}**. Use any eligible vehicle and assists, then **finish every race in that one event**. Placement does not matter."
      },
      "de": {
        "name": "Ein Event beenden",
        "objective": "Starte **ein Rennspiel mit einem unfertigen Event**. Nutze ein zugelassenes Fahrzeug und beliebige Hilfen und **beende jedes Rennen in diesem einen Event**. Die Platzierung ist egal.",
        "gameObjective": "Starte **{{game}}**. Nutze ein zugelassenes Fahrzeug und beliebige Hilfen und **beende jedes Rennen in diesem einen Event**. Die Platzierung ist egal."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["racing"],
      "match": "all"
    },
    "experience": {
      "family": "finish-race-event",
      "cardMetadata": { "genreIds": ["racing"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["racing"],
      "rules": [],
      "prerequisites": [
        {
          "en": "a racing game with an unfinished event",
          "de": "ein Rennspiel mit einem unfertigen Event",
          "chips": {"en": ["Unfinished event"], "de": ["Unfertiges Event"]},
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
    "gameGenreIds": ["racing"],
    "rarity": "special"
  },
  {
    "id": "progress-reach-the-boss-door",
    "moodIds": ["progress"],
    "type": "objective",
    "tags": ["boss", "current-save"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Reach the Boss Door",
        "objective": "Open **an unfinished save approaching a known boss**. Continue the route, handle the encounters in the way, and **reach the boss entrance or pre-fight checkpoint**. Save the fight for later.",
        "gameObjective": "Open **{{game}}**. Continue the route, handle the encounters in the way, and **reach the boss entrance or pre-fight checkpoint**. Save the fight for later."
      },
      "de": {
        "name": "Bis zur Bosstür",
        "objective": "Starte **einen unfertigen Spielstand vor einem bekannten Boss**. Setze deinen Weg fort, komm an den Gegnern unterwegs vorbei und **erreiche den Bosseingang oder den Kontrollpunkt davor**. Heb dir den Kampf für später auf.",
        "gameObjective": "Starte **{{game}}**. Setze deinen Weg fort, komm an den Gegnern unterwegs vorbei und **erreiche den Bosseingang oder den Kontrollpunkt davor**. Heb dir den Kampf für später auf."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["boss-fights", "missions-or-levels"],
      "match": "all"
    },
    "experience": {
      "family": "reach-boss-entrance",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["boss"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Begonnener Weg zu einem bekannten Boss",
          "en": "Route already started toward a known boss",
          "chips": {"en": ["Boss route"], "de": ["Weg zum Boss"]},
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
    "gameGenreIds": ["adventure", "rpg", "roguelike"]
  },
  {
    "id": "progress-upgrade-and-test-tool",
    "moodIds": ["progress"],
    "type": "objective",
    "tags": ["gadgets", "current-save"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Upgrade and Test",
        "objective": "Open **a game with an owned gadget and an affordable upgrade**. Upgrade it and **use its new effect in an encounter**.",
        "gameObjective": "Open **{{game}}** with an owned gadget and an affordable upgrade. Upgrade it and **use its new effect in an encounter**."
      },
      "de": {
        "name": "Verbessern und testen",
        "objective": "Starte **ein Spiel mit einem Gadget, für das du dir ein Upgrade leisten kannst**. Verbessere es und **probier die neue Wirkung in einem Kampf aus**.",
        "gameObjective": "Starte **{{game}}** mit einem Gadget, für das du dir ein Upgrade leisten kannst. Verbessere es und **probier die neue Wirkung in einem Kampf aus**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["tactical-gadgets", "equipment-upgrades", "combat-loadouts"]
    },
    "experience": {
      "family": "upgrade-and-use-gadget",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["gadgets"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Freigeschaltetes Gadget mit bezahlbarem Upgrade",
          "en": "Unlocked gadget with an affordable upgrade",
          "chips": {"en": ["Gadget upgrade"], "de": ["Gadget-Upgrade"]},
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
    "gameGenreIds": ["adventure", "shooter", "stealth"]
  },
  {
    "id": "progress-postgame-thread",
    "moodIds": ["progress"],
    "type": "inspiration",
    "tags": ["current-save", "story"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "After the Credits",
        "objective": "Open a finished story game with postgame activities untouched. Return to the completed save and **follow one postgame character, area, or activity** that still interests you. The main story can remain finished.",
        "gameObjective": "Open {{game}}. Return to the completed save and **follow one postgame character, area, or activity** that still interests you. The main story can remain finished."
      },
      "de": {
        "name": "Nach dem Abspann",
        "objective": "Starte ein durchgespieltes Storyspiel, in dem noch etwas zu entdecken ist. Lade deinen Spielstand nach dem Abspann und such dir eine Figur, einen Ort oder eine Aktivität aus, auf die du noch Lust hast. **Folge diesem einen Faden, solange er dich interessiert**.",
        "gameObjective": "Starte {{game}}. Lade deinen Spielstand nach dem Abspann und such dir eine Figur, einen Ort oder eine Aktivität aus, auf die du noch Lust hast. **Folge diesem einen Faden, solange er dich interessiert**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["missions-or-levels", "choices-or-lore"],
      "match": "all"
    },
    "experience": {
      "family": "postgame-roaming",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "open",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Spielstand nach dem Abspann mit offenen Aktivitäten",
          "en": "Postgame save with unfinished activities",
          "chips": {"en": ["Postgame save"], "de": ["Nach dem Abspann"]},
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
    "id": "progress-recap-then-continue",
    "moodIds": ["progress"],
    "type": "inspiration",
    "tags": ["current-save", "story"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Recap Then Continue",
        "objective": "Open an unfinished game with an in-game recap. Read or watch the current recap, then **load the furthest save and follow the thread** it just refreshed. Do not restart the opening.",
        "gameObjective": "Open {{game}}. Read or watch the current recap, then **load the furthest save and follow the thread** it just refreshed. Do not restart the opening."
      },
      "de": {
        "name": "Rückblick und weiter",
        "objective": "Starte ein unfertiges Spiel mit Rückblick im Spiel. Lies oder schau dir den Rückblick an. Lade dann deinen neuesten Spielstand und **spiel dort weiter, wo die Geschichte aufgehört hat**. Fang nicht noch einmal von vorn an.",
        "gameObjective": "Starte {{game}}. Lies oder schau dir den Rückblick an. Lade dann deinen neuesten Spielstand und **spiel dort weiter, wo die Geschichte aufgehört hat**. Fang nicht noch einmal von vorn an."
      }
    },
    "experience": {
      "family": "resume-with-recap",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "open",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Unfertiger Spielstand und Rückblick im Spiel",
          "en": "Unfinished save and an in-game recap",
          "chips": {"en": ["Story recap"], "de": ["Story-Rückblick"]},
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
    "gameGenreIds": ["adventure", "rpg", "narrative"],
    "customGameOverrideOnly": true
  },
  {
    "id": "progress-one-resource-trip",
    "moodIds": ["progress"],
    "type": "objective",
    "tags": ["crafting"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "One Supply Trip",
        "objective": "Open **a crafting game with one known nearby resource and an unfinished recipe**. Gather only the missing resource, return to your base, and **craft the item once**. Leave other gathering for another trip.",
        "gameObjective": "Open **{{game}}**. Gather only the missing resource, return to your base, and **craft the item once**. Leave other gathering for another trip."
      },
      "de": {
        "name": "Ein Vorratsweg",
        "objective": "Starte **ein Crafting-Spiel mit einem Rezept, für das dir noch ein Rohstoff aus der Nähe fehlt**. Sammle nur den fehlenden Rohstoff, kehre zur Basis zurück und **stelle den Gegenstand einmal her**. Andere Vorräte kommen später dran.",
        "gameObjective": "Starte **{{game}}**. Sammle nur den fehlenden Rohstoff, kehre zur Basis zurück und **stelle den Gegenstand einmal her**. Andere Vorräte kommen später dran."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["crafting", "open-world"],
      "match": "all"
    },
    "experience": {
      "family": "gather-and-craft",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["crafting"],
      "rules": [],
      "prerequisites": [
        {
          "en": "a crafting game with one known nearby resource and an unfinished recipe",
          "de": "ein Crafting-Spiel mit einem Rezept, für das dir noch ein Rohstoff aus der Nähe fehlt",
          "chips": {"en": ["Unfinished recipe"], "de": ["Offenes Rezept"]},
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
    "gameGenreIds": ["survival", "sandbox", "rpg"]
  }
]);
