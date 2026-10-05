import { defineQuests } from "../defineQuests";

export const GamesNoMansSkyQuests = defineQuests([
  {
    "id": "no-mans-sky-planet-field-card",
    "moodIds": ["create", "focused"],
    "type": "creation",
    "tags": ["photography", "exploration"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "no-mans-sky",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Planet Field Card",
        "objective": "On a planet with land animals in **No Man’s Sky**, scan one unfamiliar animal, plant, and mineral. **Save a photo of the animal in its habitat** and check that all three appear in Discoveries.",
        "gameObjective": "On a planet with land animals in **No Man’s Sky**, scan one unfamiliar animal, plant, and mineral. **Save a photo of the animal in its habitat** and check that all three appear in Discoveries."
      },
      "de": {
        "name": "Steckbrief eines Planeten",
        "objective": "Scanne in **No Man’s Sky** auf einem Planeten mit Landtieren ein unbekanntes Tier, eine Pflanze und ein Mineral. **Speichere ein Foto des Tiers in seinem Lebensraum** und prüfe, ob alle drei unter Entdeckungen stehen.",
        "gameObjective": "Scanne in **No Man’s Sky** auf einem Planeten mit Landtieren ein unbekanntes Tier, eine Pflanze und ein Mineral. **Speichere ein Foto des Tiers in seinem Lebensraum** und prüfe, ob alle drei unter Entdeckungen stehen."
      }
    },
    "experience": {
      "family": "field-photo",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["photography", "exploration"],
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
          "formation": "none",
          "mode": "independent shared-world play"
        }
      ]
    },
    "gameGenreIds": ["adventure", "survival", "sandbox"]
  },
  {
    "id": "no-mans-sky-salvage-repair",
    "moodIds": ["progress", "focused"],
    "type": "objective",
    "tags": ["crafting"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "universal": false,
    "curated": {
      "gameId": "no-mans-sky",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Back in Service",
        "objective": "Use a crashed ship you already claimed in **No Man’s Sky**. Pick one damaged slot with materials available nearby. **Gather or refine those materials and repair the slot**, buying no supplies.",
        "gameObjective": "Use a crashed ship you already claimed in **No Man’s Sky**. Pick one damaged slot with materials available nearby. **Gather or refine those materials and repair the slot**, buying no supplies."
      },
      "de": {
        "name": "Wieder einsatzbereit",
        "objective": "Such dir in **No Man’s Sky** ein Schiffswrack aus, das du schon beansprucht hast. Wähle ein beschädigtes Bauteil, für das du die Materialien in der Nähe findest. **Sammle oder veredle sie und repariere das Bauteil**, ohne Vorräte zu kaufen.",
        "gameObjective": "Such dir in **No Man’s Sky** ein Schiffswrack aus, das du schon beansprucht hast. Wähle ein beschädigtes Bauteil, für das du die Materialien in der Nähe findest. **Sammle oder veredle sie und repariere das Bauteil**, ohne Vorräte zu kaufen."
      }
    },
    "experience": {
      "family": "ship-repair",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["crafting"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Beanspruchtes Wrack mit reparierbarem Bauteil und erreichbaren Materialien",
          "en": "Claimed wreck with a repairable slot and reachable materials",
          "chips": {"en": ["Claimed wreck", "Repair slot"], "de": ["Wrack im Besitz", "Reparaturplatz"]},
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
          "formation": "none",
          "mode": "independent shared-world play"
        }
      ]
    },
    "gameGenreIds": ["adventure", "survival", "sandbox"]
  },
  {
    "id": "no-mans-sky-new-companion",
    "moodIds": ["relax", "explore"],
    "type": "inspiration",
    "tags": ["animals", "exploration"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "no-mans-sky",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Meet a Creature",
        "objective": "On a planet in No Man’s Sky, bring Creature Pellets and spend time with the animals you meet. **Feed an approachable creature** and see whether you want it along for your travels. Adoption is optional.",
        "gameObjective": "On a planet in No Man’s Sky, bring Creature Pellets and spend time with the animals you meet. **Feed an approachable creature** and see whether you want it along for your travels. Adoption is optional."
      },
      "de": {
        "name": "Tierbegegnung",
        "objective": "Nimm in No Man’s Sky Kreaturenpellets mit auf einen Planeten und schau dir die Tiere an, denen du begegnest. **Füttere ein zutrauliches Wesen** und schau, ob du es auf Reisen dabeihaben möchtest. Du musst es nicht adoptieren.",
        "gameObjective": "Nimm in No Man’s Sky Kreaturenpellets mit auf einen Planeten und schau dir die Tiere an, denen du begegnest. **Füttere ein zutrauliches Wesen** und schau, ob du es auf Reisen dabeihaben möchtest. Du musst es nicht adoptieren."
      }
    },
    "experience": {
      "family": "companion-roaming",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "open",
      "activities": ["animals", "exploration"],
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
          "formation": "none",
          "mode": "independent shared-world play"
        }
      ]
    },
    "gameGenreIds": ["adventure", "survival", "sandbox"]
  },
  {
    "id": "no-mans-sky-cronus-tasting",
    "moodIds": ["curious", "create"],
    "type": "experiment",
    "tags": ["cooking"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "no-mans-sky",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "For the Cook",
        "objective": "With a Nutrient Processor and Anomaly access in **No Man’s Sky**, cook a dish from ingredients you already own. **Offer a serving to Cronus and hear his verdict**. No particular rating is required.",
        "gameObjective": "With a Nutrient Processor and Anomaly access in **No Man’s Sky**, cook a dish from ingredients you already own. **Offer a serving to Cronus and hear his verdict**. No particular rating is required."
      },
      "de": {
        "name": "Für den Koch",
        "objective": "Koch in **No Man’s Sky** mit vorhandenen Zutaten ein Gericht im Nährstoffprozessor. Besuch danach Cronus in der Anomalie. **Gib ihm eine Portion und hör dir sein Urteil an**. Eine bestimmte Bewertung brauchst du nicht.",
        "gameObjective": "Koch in **No Man’s Sky** mit vorhandenen Zutaten ein Gericht im Nährstoffprozessor. Besuch danach Cronus in der Anomalie. **Gib ihm eine Portion und hör dir sein Urteil an**. Eine bestimmte Bewertung brauchst du nicht."
      }
    },
    "experience": {
      "family": "food-verdict",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["cooking"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Nährstoffprozessor, Zutaten und Zugang zur Anomalie",
          "en": "Nutrient Processor, ingredients and Anomaly access",
          "chips": {"en": ["Nutrient Processor", "Anomaly"], "de": ["Nährstoffprozessor", "Anomalie"]},
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
          "formation": "none",
          "mode": "independent shared-world play"
        }
      ]
    },
    "gameGenreIds": ["adventure", "survival", "sandbox"]
  },
  {
    "id": "no-mans-sky-seafood-supper",
    "moodIds": ["relax", "progress"],
    "type": "objective",
    "tags": ["fishing", "cooking"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "no-mans-sky",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Today's Catch",
        "objective": "Bring a Fishing Rig and Nutrient Processor to the coast in **No Man’s Sky**. Catch a fish the processor accepts, then **cook and eat one serving from that catch**.",
        "gameObjective": "Bring a Fishing Rig and Nutrient Processor to the coast in **No Man’s Sky**. Catch a fish the processor accepts, then **cook and eat one serving from that catch**."
      },
      "de": {
        "name": "Frisch gefangen",
        "objective": "Nimm in **No Man’s Sky** Angelausrüstung und Nährstoffprozessor mit zur Küste. Fange einen Fisch, den du im Prozessor verarbeiten kannst, und **koche und iss eine Portion aus diesem Fang**.",
        "gameObjective": "Nimm in **No Man’s Sky** Angelausrüstung und Nährstoffprozessor mit zur Küste. Fange einen Fisch, den du im Prozessor verarbeiten kannst, und **koche und iss eine Portion aus diesem Fang**."
      }
    },
    "experience": {
      "family": "catch-cooking",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["fishing", "cooking"],
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
          "formation": "none",
          "mode": "independent shared-world play"
        }
      ]
    },
    "gameGenreIds": ["adventure", "survival", "sandbox"]
  },
  {
    "id": "no-mans-sky-exocraft-recovery",
    "moodIds": ["restless", "explore"],
    "type": "objective",
    "tags": ["driving", "exploration"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "no-mans-sky",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Ground Crew",
        "objective": "With an Exocraft ready in **No Man’s Sky**, mark a nearby Buried Technology Module with your visor. Drive there, dig up the Salvaged Data, and **return to your ship in the same Exocraft** without summoning either vehicle.",
        "gameObjective": "With an Exocraft ready in **No Man’s Sky**, mark a nearby Buried Technology Module with your visor. Drive there, dig up the Salvaged Data, and **return to your ship in the same Exocraft** without summoning either vehicle."
      },
      "de": {
        "name": "Bodenteam",
        "objective": "Markiere in **No Man’s Sky** ein vergrabenes Technologiemodul in der Nähe deines Schiffs. Fahr mit deinem Exofahrzeug hin, grab die Daten aus und **kehr mit demselben Fahrzeug zum Schiff zurück**. Ruf unterwegs kein anderes Fahrzeug.",
        "gameObjective": "Markiere in **No Man’s Sky** ein vergrabenes Technologiemodul in der Nähe deines Schiffs. Fahr mit deinem Exofahrzeug hin, grab die Daten aus und **kehr mit demselben Fahrzeug zum Schiff zurück**. Ruf unterwegs kein anderes Fahrzeug."
      }
    },
    "experience": {
      "family": "exocraft-expedition",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["driving", "exploration"],
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
          "formation": "none",
          "mode": "independent shared-world play"
        }
      ]
    },
    "gameGenreIds": ["adventure", "survival", "sandbox"]
  },
  {
    "id": "no-mans-sky-bytebeat-one-loop",
    "moodIds": ["create", "curious"],
    "type": "experiment",
    "tags": ["rhythm", "building"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "no-mans-sky",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "A ByteBeat Loop",
        "objective": "In **No Man’s Sky**, with the ByteBeat blueprint and materials ready, power one device. **Try two melodies or rhythms, then leave your preferred loop playing**.",
        "gameObjective": "In **No Man’s Sky**, with the ByteBeat blueprint and materials ready, power one device. **Try two melodies or rhythms, then leave your preferred loop playing**."
      },
      "de": {
        "name": "Ein ByteBeat-Loop",
        "objective": "**No Man’s Sky**: Versorge mit vorhandenem ByteBeat-Bauplan und Material ein Gerät mit Strom. **Probier zwei Melodien oder Rhythmen aus und lass deinen bevorzugten Loop laufen**.",
        "gameObjective": "**No Man’s Sky**: Versorge mit vorhandenem ByteBeat-Bauplan und Material ein Gerät mit Strom. **Probier zwei Melodien oder Rhythmen aus und lass deinen bevorzugten Loop laufen**."
      }
    },
    "experience": {
      "family": "music-loop",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["rhythm", "building"],
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
          "formation": "none",
          "mode": "independent shared-world play"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox", "survival"]
  },
  {
    "id": "no-mans-sky-mineral-hotspot-start",
    "moodIds": ["create", "progress"],
    "type": "creation",
    "tags": ["automation", "building"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "universal": false,
    "curated": {
      "gameId": "no-mans-sky",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Your First Extractor",
        "objective": "In **No Man’s Sky**, with a Survey Device, Mineral Extractor and Supply Depot blueprints ready, find a mineral hotspot near your base. **Power an extractor, connect a depot and collect its first stored minerals**. Have the building materials ready.",
        "gameObjective": "In **No Man’s Sky**, with a Survey Device, Mineral Extractor and Supply Depot blueprints ready, find a mineral hotspot near your base. **Power an extractor, connect a depot and collect its first stored minerals**. Have the building materials ready."
      },
      "de": {
        "name": "Dein erster Extraktor",
        "objective": "**No Man’s Sky**: Such mit vorhandenem Analysegerät und Bauplänen für Mineralextraktor und Vorratsdepot einen Mineral-Hotspot nahe deiner Basis. **Versorge den Extraktor mit Strom, verbinde das Depot und hol die ersten gespeicherten Mineralien ab**. Halte Baumaterial bereit.",
        "gameObjective": "**No Man’s Sky**: Such mit vorhandenem Analysegerät und Bauplänen für Mineralextraktor und Vorratsdepot einen Mineral-Hotspot nahe deiner Basis. **Versorge den Extraktor mit Strom, verbinde das Depot und hol die ersten gespeicherten Mineralien ab**. Halte Baumaterial bereit."
      }
    },
    "experience": {
      "family": "mineral-extractor",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["automation", "building"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Survey Device installed; extractor, depot and pipe blueprints; materials and power ready",
          "de": "Analysegerät installiert; Extraktor-, Depot- und Rohrbaupläne; Material und Strom bereit",
          "chips": {"en": ["Survey Device", "Mineral Extractor"], "de": ["Analysegerät", "Mineralextraktor"]},
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
          "formation": "none",
          "mode": "independent shared-world play"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox", "survival"],
    "rarity": "special"
  },
  {
    "id": "no-mans-sky-short-range-home-link",
    "moodIds": ["create", "focused"],
    "type": "creation",
    "tags": ["building", "automation"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "no-mans-sky",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Across the Base",
        "objective": "In **No Man’s Sky**, connect two powered short-range teleporters in your base with a teleport cable. **Travel both ways to try your new shortcut**. Have the parts and materials ready.",
        "gameObjective": "In **No Man’s Sky**, connect two powered short-range teleporters in your base with a teleport cable. **Travel both ways to try your new shortcut**. Have the parts and materials ready."
      },
      "de": {
        "name": "Quer durch die Basis",
        "objective": "Verbinde in **No Man’s Sky** zwei mit Strom versorgte Nahbereichsteleporter deiner Basis mit einem Teleportkabel. **Reise in beide Richtungen**, um deine neue Abkürzung auszuprobieren. Bauteile und Materialien sollten bereitliegen.",
        "gameObjective": "Verbinde in **No Man’s Sky** zwei mit Strom versorgte Nahbereichsteleporter deiner Basis mit einem Teleportkabel. **Reise in beide Richtungen**, um deine neue Abkürzung auszuprobieren. Bauteile und Materialien sollten bereitliegen."
      }
    },
    "experience": {
      "family": "teleporter-link",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["building", "automation"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Short-range teleporters and cable unlocked; materials and base power ready",
          "de": "Nahbereichsteleporter und Kabel freigeschaltet; Material und Basisstrom bereit",
          "chips": {"en": ["Teleporters"], "de": ["Nahteleporter"]},
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
          "formation": "none",
          "mode": "independent shared-world play"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox", "survival"]
  },
  {
    "id": "no-mans-sky-guild-one-donation",
    "moodIds": ["progress", "low-energy"],
    "type": "objective",
    "tags": ["trading"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "no-mans-sky",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "For the Guild",
        "objective": "Visit a space-station guild envoy in **No Man’s Sky**. **Donate an accepted item you already own** to gain standing with the guild.",
        "gameObjective": "Visit a space-station guild envoy in **No Man’s Sky**. **Donate an accepted item you already own** to gain standing with the guild."
      },
      "de": {
        "name": "Für die Gilde",
        "objective": "Besuch in **No Man’s Sky** einen Gildenvertreter auf einer Raumstation. **Spende einen gewünschten Gegenstand, den du bereits hast**, und hol dir damit mehr Ansehen bei der Gilde.",
        "gameObjective": "Besuch in **No Man’s Sky** einen Gildenvertreter auf einer Raumstation. **Spende einen gewünschten Gegenstand, den du bereits hast**, und hol dir damit mehr Ansehen bei der Gilde."
      }
    },
    "experience": {
      "family": "guild-donation",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["trading"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Passender Spendengegenstand im Inventar",
          "en": "Accepted donation item already owned",
          "chips": {"en": ["Donation item"], "de": ["Spendengegenstand"]},
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
          "formation": "none",
          "mode": "independent shared-world play"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox", "survival"]
  },
  {
    "id": "no-mans-sky-built-from-ship-parts",
    "moodIds": ["create", "focused"],
    "type": "creation",
    "tags": ["crafting", "space"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "universal": false,
    "curated": {
      "gameId": "no-mans-sky",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Your Own Starship",
        "objective": "In **No Man’s Sky**, with a reactor and three compatible salvaged parts already ready for the Starship Fabricator, choose their colors and **assemble the ship, then fly it out of the station**.",
        "gameObjective": "In **No Man’s Sky**, with a reactor and three compatible salvaged parts already ready for the Starship Fabricator, choose their colors and **assemble the ship, then fly it out of the station**."
      },
      "de": {
        "name": "Dein eigenes Raumschiff",
        "objective": "**No Man’s Sky**: Wähle mit vorhandenem Reaktor und drei zusammenpassenden geborgenen Teilen im Raumschiff-Konstruktor die Farben. **Bau das Schiff zusammen und flieg damit aus der Raumstation**.",
        "gameObjective": "**No Man’s Sky**: Wähle mit vorhandenem Reaktor und drei zusammenpassenden geborgenen Teilen im Raumschiff-Konstruktor die Farben. **Bau das Schiff zusammen und flieg damit aus der Raumstation**."
      }
    },
    "experience": {
      "family": "ship-fabrication",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["crafting", "space"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Reaktor und drei kompatible Schiffsteile für den Konstruktor",
          "en": "Reactor and three compatible ship parts for the fabricator",
          "chips": {"en": ["Ship parts", "Reactor"], "de": ["Schiffsteile", "Reaktor"]},
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
          "formation": "none",
          "mode": "independent shared-world play"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox", "survival"],
    "rarity": "special"
  },
  {
    "id": "no-mans-sky-frigate-debrief",
    "moodIds": ["progress", "low-energy"],
    "type": "objective",
    "tags": ["space"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "no-mans-sky",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Back from the Expedition",
        "objective": "In **No Man’s Sky**, with a freighter and a completed frigate expedition waiting, visit its Fleet Command Room. **Read the expedition report and collect its rewards**.",
        "gameObjective": "In **No Man’s Sky**, with a freighter and a completed frigate expedition waiting, visit its Fleet Command Room. **Read the expedition report and collect its rewards**."
      },
      "de": {
        "name": "Zurück von der Expedition",
        "objective": "**No Man’s Sky**: Besuche auf deinem Frachter den Flottenkommandoraum, wenn eine Fregattenexpedition schon beendet ist. **Lies den Bericht und hol die Belohnungen ab**.",
        "gameObjective": "**No Man’s Sky**: Besuche auf deinem Frachter den Flottenkommandoraum, wenn eine Fregattenexpedition schon beendet ist. **Lies den Bericht und hol die Belohnungen ab**."
      }
    },
    "experience": {
      "family": "expedition-report",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["space"],
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
          "formation": "none",
          "mode": "independent shared-world play"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox", "survival"]
  },
  {
    "id": "no-mans-sky-submarine-coast-tour",
    "moodIds": ["relax", "explore"],
    "type": "inspiration",
    "tags": ["diving", "exploration"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "no-mans-sky",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Below the Coast",
        "objective": "In **No Man’s Sky**, take your fueled Nautilon along a coast underwater. **Follow the seabed among rocks, plants and caves** and see where it leads.",
        "gameObjective": "In **No Man’s Sky**, take your fueled Nautilon along a coast underwater. **Follow the seabed among rocks, plants and caves** and see where it leads."
      },
      "de": {
        "name": "Unter der Küste",
        "objective": "Erkunde in **No Man’s Sky** mit deinem aufgetankten Nautilon eine Küste unter Wasser. **Folge dem Meeresboden zwischen Felsen, Pflanzen und Höhlen** und schau, wohin er dich führt.",
        "gameObjective": "Erkunde in **No Man’s Sky** mit deinem aufgetankten Nautilon eine Küste unter Wasser. **Folge dem Meeresboden zwischen Felsen, Pflanzen und Höhlen** und schau, wohin er dich führt."
      }
    },
    "experience": {
      "family": "submarine-roaming",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "open",
      "activities": ["diving", "exploration"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Nautilon aufgetankt; erreichbare Küste",
          "en": "Fueled Nautilon and a reachable coast",
          "chips": {"en": ["Nautilon"], "de": ["Nautilon"]},
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
          "formation": "none",
          "mode": "independent shared-world play"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox", "survival"]
  },
  {
    "id": "no-mans-sky-egg-size-experiment",
    "moodIds": ["curious", "create"],
    "type": "experiment",
    "tags": ["animals"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "no-mans-sky",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Change an Egg",
        "objective": "Bring an owned companion egg to the Anomaly’s Egg Sequencer in **No Man’s Sky**. Try how your materials would affect its size. **Choose a change and take the altered egg with you**. There is no need to wait for it to hatch.",
        "gameObjective": "Bring an owned companion egg to the Anomaly’s Egg Sequencer in **No Man’s Sky**. Try how your materials would affect its size. **Choose a change and take the altered egg with you**. There is no need to wait for it to hatch."
      },
      "de": {
        "name": "Ein Ei verändern",
        "objective": "Bring in **No Man’s Sky** ein vorhandenes Begleiter-Ei zum Ei-Sequenzierer in der Anomalie. Probier aus, wie dein Material die Größe beeinflussen würde. **Wähle eine Änderung und nimm das veränderte Ei mit**. Auf das Schlüpfen musst du nicht warten.",
        "gameObjective": "Bring in **No Man’s Sky** ein vorhandenes Begleiter-Ei zum Ei-Sequenzierer in der Anomalie. Probier aus, wie dein Material die Größe beeinflussen würde. **Wähle eine Änderung und nimm das veränderte Ei mit**. Auf das Schlüpfen musst du nicht warten."
      }
    },
    "experience": {
      "family": "egg-size",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["animals"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Begleiter-Ei, Material und Zugang zur Anomalie",
          "en": "Companion egg, material and Anomaly access",
          "chips": {"en": ["Companion egg", "Anomaly"], "de": ["Begleiter-Ei", "Anomalie"]},
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
          "formation": "none",
          "mode": "independent shared-world play"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox", "survival"]
  },
  {
    "id": "no-mans-sky-biodome-harvest-route",
    "moodIds": ["create", "focused"],
    "type": "creation",
    "tags": ["farming", "building"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "no-mans-sky",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Under the Glass",
        "objective": "In **No Man’s Sky**, with a powered biodome, crop blueprints and planting materials ready, **plant two different crops inside and keep access to its harvest control clear**. Leave the crops to grow.",
        "gameObjective": "In **No Man’s Sky**, with a powered biodome, crop blueprints and planting materials ready, **plant two different crops inside and keep access to its harvest control clear**. Leave the crops to grow."
      },
      "de": {
        "name": "Unter Glas",
        "objective": "**No Man’s Sky**: **Pflanze in einer betriebenen Biokuppel zwei verschiedene Pflanzen und halte den Sammelschalter erreichbar**. Halte Pflanzenbaupläne und Material bereit. Die Pflanzen dürfen später wachsen.",
        "gameObjective": "**No Man’s Sky**: **Pflanze in einer betriebenen Biokuppel zwei verschiedene Pflanzen und halte den Sammelschalter erreichbar**. Halte Pflanzenbaupläne und Material bereit. Die Pflanzen dürfen später wachsen."
      }
    },
    "experience": {
      "family": "biodome-garden",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["farming", "building"],
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
          "formation": "none",
          "mode": "independent shared-world play"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox", "survival"]
  },
  {
    "id": "no-mans-sky-automatic-creature-feeding",
    "moodIds": ["create", "relax"],
    "type": "creation",
    "tags": ["animals", "automation"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "no-mans-sky",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "A Feeding Station",
        "objective": "In **No Man’s Sky**, with Automated Feeder and Livestock Unit blueprints ready, build and power both near suitable land animals. Add Creature Pellets and **collect one product gathered by the Livestock Unit**.",
        "gameObjective": "In **No Man’s Sky**, with Automated Feeder and Livestock Unit blueprints ready, build and power both near suitable land animals. Add Creature Pellets and **collect one product gathered by the Livestock Unit**."
      },
      "de": {
        "name": "Eine Futterstelle",
        "objective": "**No Man’s Sky**: Bau mit vorhandenen Bauplänen eine Futtermaschine und eine Nutztierstation bei geeigneten Landtieren und versorge beide mit Strom. Fülle Kreaturenpellets ein und **hol ein gesammeltes Tierprodukt aus der Station**.",
        "gameObjective": "**No Man’s Sky**: Bau mit vorhandenen Bauplänen eine Futtermaschine und eine Nutztierstation bei geeigneten Landtieren und versorge beide mit Strom. Fülle Kreaturenpellets ein und **hol ein gesammeltes Tierprodukt aus der Station**."
      }
    },
    "experience": {
      "family": "animal-production",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["animals", "automation"],
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
          "formation": "none",
          "mode": "independent shared-world play"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox", "survival"]
  },
  {
    "id": "no-mans-sky-one-economy-delivery",
    "moodIds": ["curious", "progress"],
    "type": "objective",
    "tags": ["trading", "space"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "no-mans-sky",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Goods with a Destination",
        "objective": "In **No Man’s Sky**, with an Economy Scanner and enough fuel and Units, buy one trade good and read which economy wants it. **Travel to a nearby system of that economy and sell the good at a trade terminal**. Profit is optional.",
        "gameObjective": "In **No Man’s Sky**, with an Economy Scanner and enough fuel and Units, buy one trade good and read which economy wants it. **Travel to a nearby system of that economy and sell the good at a trade terminal**. Profit is optional."
      },
      "de": {
        "name": "Ware mit Ziel",
        "objective": "**No Man’s Sky**: Kauf mit Wirtschaftsscanner, genug Treibstoff und Units eine Handelsware und lies, welche Wirtschaft sie braucht. **Reise in ein nahes System dieser Wirtschaft und verkaufe sie am Handelsterminal**. Gewinn ist optional.",
        "gameObjective": "**No Man’s Sky**: Kauf mit Wirtschaftsscanner, genug Treibstoff und Units eine Handelsware und lies, welche Wirtschaft sie braucht. **Reise in ein nahes System dieser Wirtschaft und verkaufe sie am Handelsterminal**. Gewinn ist optional."
      }
    },
    "experience": {
      "family": "economy-trade",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["trading", "space"],
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
          "formation": "none",
          "mode": "independent shared-world play"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox", "survival"]
  },
  {
    "id": "no-mans-sky-harmonic-terminal-code",
    "moodIds": ["curious", "focused"],
    "type": "objective",
    "tags": ["puzzles"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "no-mans-sky",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Read the Harmonic Code",
        "objective": "In **No Man’s Sky**, with an Echo Locator already owned on a dissonant planet, locate a Harmonic Camp. **Solve its terminal’s arithmetic clues and lift the lockdown**.",
        "gameObjective": "In **No Man’s Sky**, with an Echo Locator already owned on a dissonant planet, locate a Harmonic Camp. **Solve its terminal’s arithmetic clues and lift the lockdown**."
      },
      "de": {
        "name": "Den harmonischen Code lesen",
        "objective": "**No Man’s Sky**: Such auf einem dissonanten Planeten mit einem vorhandenen Echo-Ortungsgerät ein harmonisches Lager. **Löse die Rechenhinweise am Terminal und hebe die Sperre auf**.",
        "gameObjective": "**No Man’s Sky**: Such auf einem dissonanten Planeten mit einem vorhandenen Echo-Ortungsgerät ein harmonisches Lager. **Löse die Rechenhinweise am Terminal und hebe die Sperre auf**."
      }
    },
    "experience": {
      "family": "harmonic-puzzle",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["puzzles"],
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
          "formation": "none",
          "mode": "independent shared-world play"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox", "survival"]
  },
  {
    "id": "no-mans-sky-interceptor-brain-ritual",
    "moodIds": ["explore", "progress"],
    "type": "objective",
    "tags": ["story", "space"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "no-mans-sky",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "The Brain’s Way",
        "objective": "In **No Man’s Sky**, with a crashed Interceptor already marked and its Hyaline Brain collected, activate the brain and follow the monolith marker. **Turn it into a Harmonic Brain and bring it back to the Interceptor**. The other repairs can wait.",
        "gameObjective": "In **No Man’s Sky**, with a crashed Interceptor already marked and its Hyaline Brain collected, activate the brain and follow the monolith marker. **Turn it into a Harmonic Brain and bring it back to the Interceptor**. The other repairs can wait."
      },
      "de": {
        "name": "Der Weg des Gehirns",
        "objective": "**No Man’s Sky**: Aktiviere das schon gesammelte Hyalin-Gehirn eines markierten Interceptor-Wracks und folge seiner Monolithenmarkierung. **Wandle es in ein harmonisches Gehirn um und bring es zum Interceptor zurück**. Die übrigen Reparaturen können warten.",
        "gameObjective": "**No Man’s Sky**: Aktiviere das schon gesammelte Hyalin-Gehirn eines markierten Interceptor-Wracks und folge seiner Monolithenmarkierung. **Wandle es in ein harmonisches Gehirn um und bring es zum Interceptor zurück**. Die übrigen Reparaturen können warten."
      }
    },
    "experience": {
      "family": "interceptor-repair",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["story", "space"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Marked Interceptor; Hyaline Brain",
          "de": "Markierter Interceptor; Hyalin-Gehirn",
          "chips": {"en": ["Interceptor", "Hyaline Brain"], "de": ["Interceptor", "Hyalin-Gehirn"]},
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
          "formation": "none",
          "mode": "independent shared-world play"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox", "survival"]
  },
  {
    "id": "no-mans-sky-black-hole-jump",
    "moodIds": ["explore", "restless"],
    "type": "inspiration",
    "tags": ["space", "exploration"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "no-mans-sky",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "On the Other Side",
        "objective": "In No Man’s Sky, with a black-hole system already reachable and a fueled ship, **head into the black hole and explore where it leaves you**. Keep your previous station in the teleporter list if you want an easy route back.",
        "gameObjective": "In No Man’s Sky, with a black-hole system already reachable and a fueled ship, **head into the black hole and explore where it leaves you**. Keep your previous station in the teleporter list if you want an easy route back."
      },
      "de": {
        "name": "Auf der anderen Seite",
        "objective": "No Man’s Sky: Flieg mit aufgetanktem Schiff zu einem bereits erreichbaren schwarzen Loch und **erkunde, wohin es dich bringt**. Behalte die vorherige Raumstation in deiner Teleporterliste, wenn du leicht zurückreisen möchtest.",
        "gameObjective": "No Man’s Sky: Flieg mit aufgetanktem Schiff zu einem bereits erreichbaren schwarzen Loch und **erkunde, wohin es dich bringt**. Behalte die vorherige Raumstation in deiner Teleporterliste, wenn du leicht zurückreisen möchtest."
      }
    },
    "experience": {
      "family": "stellar-travel",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "open",
      "activities": ["space", "exploration"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Reachable black hole; fueled ship",
          "de": "Erreichbares schwarzes Loch; betanktes Schiff",
          "chips": {"en": ["Black hole", "Fueled ship"], "de": ["Schwarzes Loch", "Betanktes Schiff"]},
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
          "formation": "none",
          "mode": "independent shared-world play"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox", "survival"]
  },
  {
    "id": "no-mans-sky-freighter-outdoor-lookout",
    "moodIds": ["create", "relax"],
    "type": "creation",
    "tags": ["building", "space"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "no-mans-sky",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Outside the Freighter",
        "objective": "In **No Man’s Sky**, with a freighter, exterior-platform parts and materials ready, **build a short outdoor walkway with a safe observation platform and walk out onto it**.",
        "gameObjective": "In **No Man’s Sky**, with a freighter, exterior-platform parts and materials ready, **build a short outdoor walkway with a safe observation platform and walk out onto it**."
      },
      "de": {
        "name": "Draußen am Frachter",
        "objective": "**No Man’s Sky**: **Bau auf deinem Frachter einen kurzen Außensteg mit sicherer Aussichtsplattform und geh hinaus**. Halte die freigeschalteten Außenbauteile und Materialien bereit.",
        "gameObjective": "**No Man’s Sky**: **Bau auf deinem Frachter einen kurzen Außensteg mit sicherer Aussichtsplattform und geh hinaus**. Halte die freigeschalteten Außenbauteile und Materialien bereit."
      }
    },
    "experience": {
      "family": "lookout-building",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["building", "space"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Freighter; exterior parts and materials",
          "de": "Frachter; Außenbauteile und Materialien",
          "chips": {"en": ["Freighter", "Exterior parts"], "de": ["Frachter", "Außenbauteile"]},
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
          "formation": "none",
          "mode": "independent shared-world play"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox", "survival"]
  },
  {
    "id": "no-mans-sky-nexus-with-a-friend",
    "moodIds": ["connect", "progress"],
    "type": "objective",
    "tags": ["co-op", "support"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "universal": false,
    "curated": {
      "gameId": "no-mans-sky",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "One Nexus Crew",
        "objective": "In **No Man’s Sky**, with a friend already in your multiplayer session and Anomaly access, choose a Nexus mission you can both do with your current gear. **Complete it together and collect its reward**.",
        "gameObjective": "In **No Man’s Sky**, with a friend already in your multiplayer session and Anomaly access, choose a Nexus mission you can both do with your current gear. **Complete it together and collect its reward**."
      },
      "de": {
        "name": "Ein Nexus-Team",
        "objective": "Wähle in **No Man’s Sky** mit jemandem, der schon in deiner Multiplayer-Session ist, eine Nexus-Mission in der Anomalie. Nehmt eine, für die eure Ausrüstung reicht. **Erledigt sie zusammen und holt die Belohnung ab**.",
        "gameObjective": "Wähle in **No Man’s Sky** mit jemandem, der schon in deiner Multiplayer-Session ist, eine Nexus-Mission in der Anomalie. Nehmt eine, für die eure Ausrüstung reicht. **Erledigt sie zusammen und holt die Belohnung ab**."
      }
    },
    "experience": {
      "family": "shared-missions",
      "cardMetadata": { "genreIds": [], "playStyleIds": ["co-op"] },
      "finish": "outcome",
      "activities": ["support"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Friend present; Anomaly access",
          "de": "Freund anwesend; Zugang zur Anomalie",
          "chips": {"en": ["Anomaly"], "de": ["Anomalie"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "others",
          "participation": "co-op",
          "formation": "none",
          "mode": "Nexus multiplayer"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox", "survival"]
  },
  {
    "id": "no-mans-sky-ruin-keys-and-cache",
    "moodIds": ["explore", "focused"],
    "type": "objective",
    "tags": ["collectibles"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "no-mans-sky",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Under the Ruins",
        "objective": "In **No Man’s Sky**, at an ancient ruin already located with your Terrain Manipulator ready, use the visor to find buried keys. **Dig up three Ancient Keys and open the large artifact crate**.",
        "gameObjective": "In **No Man’s Sky**, at an ancient ruin already located with your Terrain Manipulator ready, use the visor to find buried keys. **Dig up three Ancient Keys and open the large artifact crate**."
      },
      "de": {
        "name": "Unter den Ruinen",
        "objective": "**No Man’s Sky**: Such bei einer bereits gefundenen antiken Ruine mit dem Visier nach vergrabenen Schlüsseln. Halte den Terrain-Manipulator bereit, **grabe drei antike Schlüssel aus und öffne die große Artefaktkiste**.",
        "gameObjective": "**No Man’s Sky**: Such bei einer bereits gefundenen antiken Ruine mit dem Visier nach vergrabenen Schlüsseln. Halte den Terrain-Manipulator bereit, **grabe drei antike Schlüssel aus und öffne die große Artefaktkiste**."
      }
    },
    "experience": {
      "family": "ruin-excavation",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["collectibles"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Located ruin; Terrain Manipulator",
          "de": "Gefundene Ruine; Terrain-Manipulator",
          "chips": {"en": ["Ruin", "Terrain Manipulator"], "de": ["Ruine", "Terrain-Manipulator"]},
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
          "formation": "none",
          "mode": "independent shared-world play"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox", "survival"]
  },
  {
    "id": "no-mans-sky-archive-artifact-exchange",
    "moodIds": ["curious", "progress"],
    "type": "objective",
    "tags": ["collectibles", "trading"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "no-mans-sky",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "An Archive Exchange",
        "objective": "In **No Man’s Sky**, with a planetary archive already marked and an accepted artifact owned, **exchange it at the archive’s artifact vault and inspect the replacement**. No particular quality is required.",
        "gameObjective": "In **No Man’s Sky**, with a planetary archive already marked and an accepted artifact owned, **exchange it at the archive’s artifact vault and inspect the replacement**. No particular quality is required."
      },
      "de": {
        "name": "Ein Artefakt fürs Archiv",
        "objective": "**No Man’s Sky**: **Tausch an einem markierten planetaren Archiv ein vorhandenes passendes Artefakt im Artefakttresor und sieh dir den Ersatz an**. Eine bestimmte Qualität brauchst du nicht.",
        "gameObjective": "**No Man’s Sky**: **Tausch an einem markierten planetaren Archiv ein vorhandenes passendes Artefakt im Artefakttresor und sieh dir den Ersatz an**. Eine bestimmte Qualität brauchst du nicht."
      }
    },
    "experience": {
      "family": "artifact-trading",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["collectibles", "trading"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Marked archive; accepted artifact",
          "de": "Markiertes Archiv; passendes Artefakt",
          "chips": {"en": ["Archive", "Artifact"], "de": ["Archiv", "Artefakt"]},
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
          "formation": "none",
          "mode": "independent shared-world play"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox", "survival"]
  },
  {
    "id": "no-mans-sky-oxygen-refiner-comparison",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["crafting"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "no-mans-sky",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "More Chlorine",
        "objective": "In **No Man’s Sky**, use a Medium Refiner to **refine spare Chlorine with Oxygen**. Try a small batch and inspect how much Chlorine the recipe produces.",
        "gameObjective": "In **No Man’s Sky**, use a Medium Refiner to **refine spare Chlorine with Oxygen**. Try a small batch and inspect how much Chlorine the recipe produces."
      },
      "de": {
        "name": "Chlor vermehren",
        "objective": "Nutze in **No Man’s Sky** eine mittlere Raffinerie, um **übriges Chlor mit Sauerstoff zu verarbeiten**. Probiere eine kleine Menge und sieh dir an, wie viel Chlor das Rezept ergibt.",
        "gameObjective": "Nutze in **No Man’s Sky** eine mittlere Raffinerie, um **übriges Chlor mit Sauerstoff zu verarbeiten**. Probiere eine kleine Menge und sieh dir an, wie viel Chlor das Rezept ergibt."
      }
    },
    "experience": {
      "family": "refiner-recipes",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["crafting"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Medium Refiner; Chlorine and Oxygen",
          "de": "Mittlere Raffinerie; Chlor und Sauerstoff",
          "chips": {"en": ["Medium Refiner", "Chlorine"], "de": ["Mittlere Raffinerie", "Chlor"]},
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
          "formation": "none",
          "mode": "independent shared-world play"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox", "survival"]
  },
  {
    "id": "no-mans-sky-scanner-supercharged-test",
    "moodIds": ["curious", "explore"],
    "type": "inspiration",
    "tags": ["scouting", "loadout"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "no-mans-sky",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Supercharged Exploration",
        "objective": "With a scanner upgrade and an unlocked supercharged Multi-Tool slot, **move the upgrade into that slot and take the tool exploring**. Let the scanner lead you to unfamiliar life.",
        "gameObjective": "With a scanner upgrade and an unlocked supercharged Multi-Tool slot, **move the upgrade into that slot and take the tool exploring**. Let the scanner lead you to unfamiliar life."
      },
      "de": {
        "name": "Verstärkt auf Erkundung",
        "objective": "**Setze ein Scanner-Upgrade in einen freigeschalteten Supercharge-Platz deines Multiwerkzeugs und geh damit auf Erkundung**. Lass dich vom Scanner zu unbekannten Lebensformen führen.",
        "gameObjective": "**Setze ein Scanner-Upgrade in einen freigeschalteten Supercharge-Platz deines Multiwerkzeugs und geh damit auf Erkundung**. Lass dich vom Scanner zu unbekannten Lebensformen führen."
      }
    },
    "experience": {
      "family": "scanner-exploration",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "open",
      "activities": ["scouting"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Scanner upgrade; supercharged tool slot",
          "de": "Scanner-Upgrade; Supercharge-Platz im Multiwerkzeug",
          "chips": {"en": ["Scanner upgrade"], "de": ["Scanner-Upgrade"]},
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
          "formation": "none",
          "mode": "independent shared-world play"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox", "survival"]
  },
  {
    "id": "no-mans-sky-language-stone-conversation",
    "moodIds": ["curious"],
    "type": "objective",
    "tags": ["dialogue"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "no-mans-sky",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "One Word Further",
        "objective": "Find a Knowledge Stone, **learn one word, then use a dialogue option with an alien** and see whether that word changes what you understand.",
        "gameObjective": "Find a Knowledge Stone, **learn one word, then use a dialogue option with an alien** and see whether that word changes what you understand."
      },
      "de": {
        "name": "Ein Wort weiter",
        "objective": "Finde einen Wissensstein, **lerne ein Wort und sprich danach mit einem Alien**. Schau, ob du dadurch mehr vom Gespräch verstehst.",
        "gameObjective": "Finde einen Wissensstein, **lerne ein Wort und sprich danach mit einem Alien**. Schau, ob du dadurch mehr vom Gespräch verstehst."
      }
    },
    "experience": {
      "family": "language-learning",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["dialogue"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Erreichbarer Wissensstein und Alien zum Ansprechen",
          "en": "Reachable Knowledge Stone and an alien to speak with",
          "chips": {"en": ["Knowledge Stone", "Alien"], "de": ["Wissensstein", "Alien"]},
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
          "formation": "none",
          "mode": "independent shared-world play"
        }
      ]
    },
    "gameGenreIds": ["adventure", "simulation", "sandbox"]
  },
  {
    "id": "no-mans-sky-signal-booster-wreck",
    "moodIds": ["explore"],
    "type": "objective",
    "tags": ["scouting"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "no-mans-sky",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Follow the Signal",
        "objective": "In **No Man’s Sky**, follow the distress signal of a starship wreck you have already marked. **Reach the wreck and read its log** before deciding whether to claim it.",
        "gameObjective": "In **No Man’s Sky**, follow the distress signal of a starship wreck you have already marked. **Reach the wreck and read its log** before deciding whether to claim it."
      },
      "de": {
        "name": "Dem Signal folgen",
        "objective": "Folge in **No Man’s Sky** dem Notsignal eines bereits markierten Raumschiffwracks. **Erreiche das Wrack und lies seinen Logeintrag**, bevor du entscheidest, ob du es bergen möchtest.",
        "gameObjective": "Folge in **No Man’s Sky** dem Notsignal eines bereits markierten Raumschiffwracks. **Erreiche das Wrack und lies seinen Logeintrag**, bevor du entscheidest, ob du es bergen möchtest."
      }
    },
    "experience": {
      "family": "wreck-investigation",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["scouting"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Markiertes Raumschiffwrack mit Notsignal",
          "en": "Marked starship wreck with a distress signal",
          "chips": {"en": ["Starship wreck"], "de": ["Raumschiffwrack"]},
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
          "formation": "none",
          "mode": "independent shared-world play"
        }
      ]
    },
    "gameGenreIds": ["adventure", "simulation", "sandbox"]
  },
  {
    "id": "no-mans-sky-portal-base-return",
    "moodIds": ["focused"],
    "type": "creation",
    "tags": ["building"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "no-mans-sky",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "A Way Back",
        "objective": "At a base you want to revisit, **power a teleporter and make one return trip through it**. A working route home is the finish.",
        "gameObjective": "At a base you want to revisit, **power a teleporter and make one return trip through it**. A working route home is the finish."
      },
      "de": {
        "name": "Ein Weg zurück",
        "objective": "Baue an einer Basis, zu der du zurückkehren willst, **einen betriebenen Teleporter und reise einmal damit zurück**.",
        "gameObjective": "Baue an einer Basis, zu der du zurückkehren willst, **einen betriebenen Teleporter und reise einmal damit zurück**."
      }
    },
    "experience": {
      "family": "teleporter-building",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["building"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Base teleporter unlocked; materials and base power ready",
          "de": "Basisteleporter freigeschaltet; Material und Basisstrom bereit",
          "chips": {"en": ["Base teleporter"], "de": ["Basisteleporter"]},
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
          "formation": "none",
          "mode": "independent shared-world play"
        }
      ]
    },
    "gameGenreIds": ["adventure", "simulation", "sandbox"]
  },
  {
    "id": "no-mans-sky-derelict-one-room",
    "moodIds": ["challenge"],
    "type": "challenge",
    "tags": ["space"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "no-mans-sky",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Cold Ship Survey",
        "objective": "With an Emergency Broadcast Receiver in **No Man’s Sky**, board a derelict freighter and **attempt to clear one room without recharging hazard protection**. One expedition is enough.",
        "gameObjective": "With an Emergency Broadcast Receiver in **No Man’s Sky**, board a derelict freighter and **attempt to clear one room without recharging hazard protection**. One expedition is enough."
      },
      "de": {
        "name": "Ein Raum im Geisterfrachter",
        "objective": "Betritt in **No Man’s Sky** mit einem Notfunksignal-Empfänger einen verlassenen Frachter und **versuche, einen Raum ohne Nachladen des Gefahrenschutzes zu räumen**. Eine Expedition reicht.",
        "gameObjective": "Betritt in **No Man’s Sky** mit einem Notfunksignal-Empfänger einen verlassenen Frachter und **versuche, einen Raum ohne Nachladen des Gefahrenschutzes zu räumen**. Eine Expedition reicht."
      }
    },
    "experience": {
      "family": "derelict-exploration",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["space"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Emergency Broadcast Receiver",
          "de": "Notfunksignal-Empfänger",
          "chips": {"en": ["Broadcast Receiver"], "de": ["Notfunksignal-Empfänger"]},
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
          "formation": "none",
          "mode": "independent shared-world play"
        }
      ]
    },
    "gameGenreIds": ["adventure", "simulation", "sandbox"]
  }
]);
