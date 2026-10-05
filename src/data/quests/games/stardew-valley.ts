import { defineQuests } from "../defineQuests";

export const GamesStardewValleyQuests = defineQuests([
  {
    "id": "stardew-valley-one-skill-day",
    "moodIds": ["challenge", "focused"],
    "type": "challenge",
    "tags": ["new-approach"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "stardew-valley",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "One-Skill Day",
        "objective": "In **Stardew Valley**, choose fishing, farming, foraging, or mining when you wake up. Do any urgent animal or crop care, then spend the rest of the day on **only your chosen skill**. Sleep to finish the day.",
        "gameObjective": "In **Stardew Valley**, choose fishing, farming, foraging, or mining when you wake up. Do any urgent animal or crop care, then spend the rest of the day on **only your chosen skill**. Sleep to finish the day."
      },
      "de": {
        "name": "Ein Tag, ein Talent",
        "objective": "Wähle in **Stardew Valley** nach dem Aufwachen Angeln, Feldarbeit, Sammeln oder Bergbau. Kümmere dich um dringende Tiere und Pflanzen. Verbringe den Rest des Tages **mit dieser einen Tätigkeit** und geh dann schlafen.",
        "gameObjective": "Wähle in **Stardew Valley** nach dem Aufwachen Angeln, Feldarbeit, Sammeln oder Bergbau. Kümmere dich um dringende Tiere und Pflanzen. Verbringe den Rest des Tages **mit dieser einen Tätigkeit** und geh dann schlafen."
      }
    },
    "experience": {
      "family": "one-skill-day",
      "cardMetadata": { "genreIds": ["cozy", "simulation"], "playStyleIds": [] },
      "finish": "attempt",
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
    "gameGenreIds": ["cozy", "simulation"]
  },
  {
    "id": "stardew-valley-town-errand",
    "moodIds": ["progress", "curious"],
    "type": "objective",
    "tags": ["trading", "current-save"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "stardew-valley",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Town Errand",
        "objective": "In **Stardew Valley**, on a day when Pierre’s Help Wanted board has a doable request, **accept and finish that one request** before its deadline.",
        "gameObjective": "In **Stardew Valley**, on a day when Pierre’s Help Wanted board has a doable request, **accept and finish that one request** before its deadline."
      },
      "de": {
        "name": "Auftrag im Dorf",
        "objective": "Wenn in **Stardew Valley** an Pierres Schwarzem Brett ein machbarer Auftrag hängt, **nimm ihn an und erfülle genau diesen Auftrag** vor Ablauf der Frist.",
        "gameObjective": "Wenn in **Stardew Valley** an Pierres Schwarzem Brett ein machbarer Auftrag hängt, **nimm ihn an und erfülle genau diesen Auftrag** vor Ablauf der Frist."
      }
    },
    "experience": {
      "family": "town-request",
      "cardMetadata": { "genreIds": ["cozy", "simulation"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["trading"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Doable Help Wanted request",
          "de": "Machbarer Auftrag am Schwarzen Brett",
          "chips": {"en": ["Help Wanted"], "de": ["Schwarzes Brett"]},
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
    "gameGenreIds": ["cozy", "simulation"]
  },
  {
    "id": "stardew-valley-themed-corner",
    "moodIds": ["create", "relax"],
    "type": "creation",
    "tags": ["decorating"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "universal": false,
    "curated": {
      "gameId": "stardew-valley",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "A Little Corner",
        "objective": "In **Stardew Valley**, choose one room or small farm corner. Use furniture and objects you already own to give it **one clear color or theme**, then leave the finished space in place.",
        "gameObjective": "In **Stardew Valley**, choose one room or small farm corner. Use furniture and objects you already own to give it **one clear color or theme**, then leave the finished space in place."
      },
      "de": {
        "name": "Eine kleine Ecke",
        "objective": "Such dir in **Stardew Valley** ein Zimmer oder eine kleine Ecke auf dem Hof aus. **Richte sie mit vorhandenen Möbeln in einer Farbe oder einem Thema ein** und lass den Rest unverändert.",
        "gameObjective": "Such dir in **Stardew Valley** ein Zimmer oder eine kleine Ecke auf dem Hof aus. **Richte sie mit vorhandenen Möbeln in einer Farbe oder einem Thema ein** und lass den Rest unverändert."
      }
    },
    "experience": {
      "family": "decoration",
      "cardMetadata": { "genreIds": ["cozy", "simulation"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["decorating"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Owned furniture and decorations",
          "de": "Vorhandene Möbel und Dekorationen",
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
        }
      ]
    },
    "gameGenreIds": ["cozy", "simulation"]
  },
  {
    "id": "stardew-valley-market-morning",
    "moodIds": ["low-energy", "progress"],
    "type": "objective",
    "tags": ["farming", "trading"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "stardew-valley",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Market Morning",
        "objective": "Harvest a ripe patch in **Stardew Valley**. Keep some for later and **put the portion you want to sell into the shipping bin**.",
        "gameObjective": "Harvest a ripe patch in **Stardew Valley**. Keep some for later and **put the portion you want to sell into the shipping bin**."
      },
      "de": {
        "name": "Marktmorgen",
        "objective": "Ernte in **Stardew Valley** ein reifes Beet. Behalte etwas für später und **leg den Teil deiner Ernte, den du verkaufen möchtest, in die Versandkiste**.",
        "gameObjective": "Ernte in **Stardew Valley** ein reifes Beet. Behalte etwas für später und **leg den Teil deiner Ernte, den du verkaufen möchtest, in die Versandkiste**."
      }
    },
    "experience": {
      "family": "crop-sale",
      "cardMetadata": { "genreIds": ["cozy", "simulation"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["farming", "trading"],
      "rules": [],
      "prerequisites": [
        {
          "en": "At least two ready crops",
          "de": "Mindestens zwei reife Pflanzen",
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
        }
      ]
    },
    "gameGenreIds": ["cozy", "simulation"]
  },
  {
    "id": "stardew-valley-sewn-from-the-farm",
    "rarity": "special",
    "moodIds": ["create", "curious"],
    "type": "experiment",
    "tags": ["outfit", "crafting"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "stardew-valley",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Farm-Made Clothing",
        "objective": "In **Stardew Valley**, with tailoring unlocked, take Cloth and a spare crop from your farm to a sewing machine. **Turn your harvest into clothing and wear it back on the farm**. Check the preview before sewing.",
        "gameObjective": "In **Stardew Valley**, with tailoring unlocked, take Cloth and a spare crop from your farm to a sewing machine. **Turn your harvest into clothing and wear it back on the farm**. Check the preview before sewing."
      },
      "de": {
        "name": "Kleidung vom Hof",
        "objective": "Bring in **Stardew Valley** mit freigeschaltetem Schneidern Stoff und eine übrige Feldfrucht von deinem Hof zur Nähmaschine. **Mach aus deiner Ernte ein Kleidungsstück und trage es zurück auf den Hof**. Schau vor dem Nähen in die Vorschau.",
        "gameObjective": "Bring in **Stardew Valley** mit freigeschaltetem Schneidern Stoff und eine übrige Feldfrucht von deinem Hof zur Nähmaschine. **Mach aus deiner Ernte ein Kleidungsstück und trage es zurück auf den Hof**. Schau vor dem Nähen in die Vorschau."
      }
    },
    "experience": {
      "family": "tailoring",
      "cardMetadata": { "genreIds": ["cozy", "simulation"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["outfit", "crafting"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Tailoring unlocked; cloth and spare crop",
          "de": "Schneidern freigeschaltet; Stoff und Feldfrucht",
          "chips": {"en": ["Tailoring", "Cloth"], "de": ["Schneidern", "Stoff"]},
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
    "gameGenreIds": ["cozy", "simulation"]
  },
  {
    "id": "stardew-valley-pond-room-to-grow",
    "moodIds": ["progress", "relax"],
    "type": "objective",
    "tags": ["farming"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "stardew-valley",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Room in the Pond",
        "objective": "In **Stardew Valley**, if an existing Fish Pond has an item request you can fill from storage, **deliver the requested items and check its new population limit**.",
        "gameObjective": "In **Stardew Valley**, if an existing Fish Pond has an item request you can fill from storage, **deliver the requested items and check its new population limit**."
      },
      "de": {
        "name": "Platz im Teich",
        "objective": "**Stardew Valley**: **Erfülle die Bitte eines vorhandenen Fischteichs und prüfe sein neues Bewohnerlimit**, wenn du die gewünschten Gegenstände schon im Lager hast.",
        "gameObjective": "**Stardew Valley**: **Erfülle die Bitte eines vorhandenen Fischteichs und prüfe sein neues Bewohnerlimit**, wenn du die gewünschten Gegenstände schon im Lager hast."
      }
    },
    "experience": {
      "family": "pond-request",
      "cardMetadata": { "genreIds": ["cozy", "simulation"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["farming"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Pond request; requested items stored",
          "de": "Teichbitte; gewünschte Gegenstände im Lager",
          "chips": {"en": ["Pond request"], "de": ["Teichbitte"]},
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
    "gameGenreIds": ["cozy", "simulation"]
  },
  {
    "id": "stardew-valley-mill-to-kitchen",
    "moodIds": ["progress", "relax"],
    "type": "objective",
    "tags": ["cooking", "farming"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "stardew-valley",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "From Mill to Pan",
        "objective": "In **Stardew Valley**, with a mill, kitchen and a known recipe using flour, put stored wheat in the mill. Sleep, collect the flour, and **cook that recipe with it**. Have the other ingredients ready.",
        "gameObjective": "In **Stardew Valley**, with a mill, kitchen and a known recipe using flour, put stored wheat in the mill. Sleep, collect the flour, and **cook that recipe with it**. Have the other ingredients ready."
      },
      "de": {
        "name": "Mehl für die Pfanne",
        "objective": "**Stardew Valley**: Gib mit vorhandener Mühle und Küche gelagerten Weizen in die Mühle. Schlaf, hol das Mehl ab und **koch damit ein bekanntes Rezept, das Mehl braucht**. Halte die übrigen Zutaten bereit.",
        "gameObjective": "**Stardew Valley**: Gib mit vorhandener Mühle und Küche gelagerten Weizen in die Mühle. Schlaf, hol das Mehl ab und **koch damit ein bekanntes Rezept, das Mehl braucht**. Halte die übrigen Zutaten bereit."
      }
    },
    "experience": {
      "family": "mill-cooking",
      "cardMetadata": { "genreIds": ["cozy", "simulation"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["cooking", "farming"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Mill, kitchen, wheat and recipe ingredients",
          "de": "Mühle, Küche, Weizen und Rezeptzutaten",
          "chips": {"en": ["Mill", "Kitchen"], "de": ["Mühle", "Küche"]},
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
    "gameGenreIds": ["cozy", "simulation"]
  },
  {
    "id": "stardew-valley-crab-pot-round",
    "moodIds": ["low-energy", "relax"],
    "type": "objective",
    "tags": ["fishing"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "stardew-valley",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Check the Pots",
        "objective": "In **Stardew Valley**, start with crab pots that already hold a catch. **Empty three pots and bait them again**. Keep whatever they caught. No particular catch is needed.",
        "gameObjective": "In **Stardew Valley**, start with crab pots that already hold a catch. **Empty three pots and bait them again**. Keep whatever they caught. No particular catch is needed."
      },
      "de": {
        "name": "Reusenrunde",
        "objective": "**Stardew Valley**: Starte bei Reusen, die schon einen Fang enthalten. **Leere drei Reusen und bestücke sie wieder mit Ködern**. Behalte ihre Fänge. Eine bestimmte Art brauchst du nicht.",
        "gameObjective": "**Stardew Valley**: Starte bei Reusen, die schon einen Fang enthalten. **Leere drei Reusen und bestücke sie wieder mit Ködern**. Behalte ihre Fänge. Eine bestimmte Art brauchst du nicht."
      }
    },
    "experience": {
      "family": "crab-pots",
      "cardMetadata": { "genreIds": ["cozy", "simulation"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["fishing"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Three full crab pots and bait",
          "de": "Drei volle Reusen und Köder",
          "chips": {"en": ["Crab pots", "Bait"], "de": ["Reusen", "Köder"]},
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
    "gameGenreIds": ["cozy", "simulation"]
  },
  {
    "id": "stardew-valley-trash-into-material",
    "moodIds": ["curious", "progress"],
    "type": "objective",
    "tags": ["crafting"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "stardew-valley",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Useful Rubbish",
        "objective": "In **Stardew Valley**, with a Recycling Machine ready, feed it one recyclable piece of fishing trash from storage. **Collect the finished material and use it in a known crafting recipe**. Have the other materials ready.",
        "gameObjective": "In **Stardew Valley**, with a Recycling Machine ready, feed it one recyclable piece of fishing trash from storage. **Collect the finished material and use it in a known crafting recipe**. Have the other materials ready."
      },
      "de": {
        "name": "Nützlicher Müll",
        "objective": "**Stardew Valley**: Gib mit vorhandener Recycling-Maschine ein verwertbares Stück Angelmüll aus dem Lager hinein. **Hol das fertige Material ab und nutze es für ein bekanntes Herstellungsrezept**. Halte die übrigen Materialien bereit.",
        "gameObjective": "**Stardew Valley**: Gib mit vorhandener Recycling-Maschine ein verwertbares Stück Angelmüll aus dem Lager hinein. **Hol das fertige Material ab und nutze es für ein bekanntes Herstellungsrezept**. Halte die übrigen Materialien bereit."
      }
    },
    "experience": {
      "family": "recycling",
      "cardMetadata": { "genreIds": ["cozy", "simulation"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["crafting"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Recycling Machine, trash and recipe materials",
          "de": "Recycling-Maschine, Müll und Rezeptmaterialien",
          "chips": {"en": ["Recycling Machine", "Trash"], "de": ["Recycling-Maschine", "Müll"]},
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
    "gameGenreIds": ["cozy", "simulation"]
  },
  {
    "id": "stardew-valley-seed-maker-restart",
    "moodIds": ["curious", "progress"],
    "type": "objective",
    "tags": ["farming"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "stardew-valley",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Harvest Becomes Seed",
        "objective": "In **Stardew Valley**, with a Seed Maker ready, process a crop whose seeds can grow this season or in your greenhouse. **Plant the seeds that come out**. Leave room for the occasional unexpected seed.",
        "gameObjective": "In **Stardew Valley**, with a Seed Maker ready, process a crop whose seeds can grow this season or in your greenhouse. **Plant the seeds that come out**. Leave room for the occasional unexpected seed."
      },
      "de": {
        "name": "Ernte wird Saat",
        "objective": "**Stardew Valley**: Verarbeite mit vorhandener Samenmaschine eine Feldfrucht, deren Saat gerade draußen oder im Gewächshaus wachsen kann. **Pflanze die entstandenen Samen**. Halte auch einen Platz für einen möglichen ungewöhnlichen Samen frei.",
        "gameObjective": "**Stardew Valley**: Verarbeite mit vorhandener Samenmaschine eine Feldfrucht, deren Saat gerade draußen oder im Gewächshaus wachsen kann. **Pflanze die entstandenen Samen**. Halte auch einen Platz für einen möglichen ungewöhnlichen Samen frei."
      }
    },
    "experience": {
      "family": "seed-making",
      "cardMetadata": { "genreIds": ["cozy", "simulation"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["farming"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Seed Maker; seasonal crop and planting space",
          "de": "Samenmaschine; passende Feldfrucht und Pflanzplatz",
          "chips": {"en": ["Seed Maker", "Seasonal crop"], "de": ["Samenmaschine", "Saisonale Feldfrucht"]},
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
    "gameGenreIds": ["cozy", "simulation"]
  },
  {
    "id": "stardew-valley-sprinkler-morning-test",
    "moodIds": ["create", "focused"],
    "type": "creation",
    "tags": ["farming", "automation"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "stardew-valley",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Water While You Sleep",
        "objective": "In **Stardew Valley**, with a sprinkler and plantable seeds ready, arrange a small crop patch inside its watering range. Sleep and **check that the sprinkler watered every planted tile**. Move it if needed and check again next morning.",
        "gameObjective": "In **Stardew Valley**, with a sprinkler and plantable seeds ready, arrange a small crop patch inside its watering range. Sleep and **check that the sprinkler watered every planted tile**. Move it if needed and check again next morning."
      },
      "de": {
        "name": "Gießen im Schlaf",
        "objective": "**Stardew Valley**: Leg mit vorhandenem Sprinkler und pflanzbarer Saat ein kleines Beet in seinem Bewässerungsbereich an. Schlaf und **prüfe, ob jedes bepflanzte Feld bewässert wurde**. Versetze ihn bei Bedarf und prüfe am nächsten Morgen erneut.",
        "gameObjective": "**Stardew Valley**: Leg mit vorhandenem Sprinkler und pflanzbarer Saat ein kleines Beet in seinem Bewässerungsbereich an. Schlaf und **prüfe, ob jedes bepflanzte Feld bewässert wurde**. Versetze ihn bei Bedarf und prüfe am nächsten Morgen erneut."
      }
    },
    "experience": {
      "family": "sprinkler-test",
      "cardMetadata": { "genreIds": ["cozy", "simulation"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["farming", "automation"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Sprinkler and plantable seeds",
          "de": "Sprinkler und pflanzbare Saat",
          "chips": {"en": ["Sprinkler", "Seeds"], "de": ["Sprinkler", "Saat"]},
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
    "gameGenreIds": ["cozy", "simulation"]
  },
  {
    "id": "stardew-valley-slime-hutch-water",
    "moodIds": ["low-energy", "overwhelmed"],
    "type": "objective",
    "tags": ["animals"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "stardew-valley",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Water for the Slimes",
        "objective": "In **Stardew Valley**, if your Slime Hutch already has fences keeping the slimes away from its four water troughs, **fill the empty troughs with your watering can**. Stay on the safe side of the fence.",
        "gameObjective": "In **Stardew Valley**, if your Slime Hutch already has fences keeping the slimes away from its four water troughs, **fill the empty troughs with your watering can**. Stay on the safe side of the fence."
      },
      "de": {
        "name": "Wasser für die Schleime",
        "objective": "**Stardew Valley**: Wenn Zäune die Schleime in deinem Schleimstall schon von den vier Wassertrögen fernhalten, **fülle die leeren Tröge mit der Gießkanne**. Bleib auf der sicheren Seite des Zauns.",
        "gameObjective": "**Stardew Valley**: Wenn Zäune die Schleime in deinem Schleimstall schon von den vier Wassertrögen fernhalten, **fülle die leeren Tröge mit der Gießkanne**. Bleib auf der sicheren Seite des Zauns."
      }
    },
    "experience": {
      "family": "slime-care",
      "cardMetadata": { "genreIds": ["cozy", "simulation"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["animals"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Fenced Slime Hutch; watering can",
          "de": "Eingezäunter Schleimstall; Gießkanne",
          "chips": {"en": ["Slime Hutch", "Watering can"], "de": ["Schleimstall", "Gießkanne"]},
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
    "gameGenreIds": ["cozy", "simulation"]
  },
  {
    "id": "stardew-valley-bee-flower-plot",
    "moodIds": ["create", "relax"],
    "type": "creation",
    "tags": ["farming"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "stardew-valley",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "A Flower for Bees",
        "objective": "In **Stardew Valley**, with a Bee House and flower seeds suitable for this season ready, **plant a flower within five tiles in a straight line of the Bee House and leave a clear route to collect honey**. The flower can grow later.",
        "gameObjective": "In **Stardew Valley**, with a Bee House and flower seeds suitable for this season ready, **plant a flower within five tiles in a straight line of the Bee House and leave a clear route to collect honey**. The flower can grow later."
      },
      "de": {
        "name": "Eine Blume für Bienen",
        "objective": "**Stardew Valley**: **Pflanze eine Blume in gerader Linie höchstens fünf Felder von einem Bienenhaus entfernt und halte den Weg zum Honigsammeln frei**. Halte Bienenhaus und passende Blumensaat bereit. Die Blume darf später wachsen.",
        "gameObjective": "**Stardew Valley**: **Pflanze eine Blume in gerader Linie höchstens fünf Felder von einem Bienenhaus entfernt und halte den Weg zum Honigsammeln frei**. Halte Bienenhaus und passende Blumensaat bereit. Die Blume darf später wachsen."
      }
    },
    "experience": {
      "family": "bee-garden",
      "cardMetadata": { "genreIds": ["cozy", "simulation"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["farming"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Bee House and seasonal flower seeds",
          "de": "Bienenhaus und saisonale Blumensaat",
          "chips": {"en": ["Bee House", "Flower seeds"], "de": ["Bienenhaus", "Blumensaat"]},
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
    "gameGenreIds": ["cozy", "simulation"]
  },
  {
    "id": "stardew-valley-beach-bridge-open",
    "moodIds": ["progress", "explore"],
    "type": "objective",
    "tags": ["exploration"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "stardew-valley",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Beyond the Bridge",
        "objective": "In **Stardew Valley**, if the small wooden bridge on the beach is still broken and you have 300 wood, **repair it and walk across to the tide pools**.",
        "gameObjective": "In **Stardew Valley**, if the small wooden bridge on the beach is still broken and you have 300 wood, **repair it and walk across to the tide pools**."
      },
      "de": {
        "name": "Hinter der Brücke",
        "objective": "**Stardew Valley**: **Repariere die kleine Holzbrücke am Strand und geh zu den Gezeitentümpeln**, wenn sie noch kaputt ist und du 300 Holz hast.",
        "gameObjective": "**Stardew Valley**: **Repariere die kleine Holzbrücke am Strand und geh zu den Gezeitentümpeln**, wenn sie noch kaputt ist und du 300 Holz hast."
      }
    },
    "experience": {
      "family": "bridge-repair",
      "cardMetadata": { "genreIds": ["cozy", "simulation"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["exploration"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Broken beach bridge; 300 wood",
          "de": "Kaputte Strandbrücke; 300 Holz",
          "chips": {"en": ["Broken beach bridge", "300 wood"], "de": ["Kaputte Strandbrücke", "300 Holz"]},
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
    "gameGenreIds": ["cozy", "simulation"]
  },
  {
    "id": "stardew-valley-spa-after-work",
    "moodIds": ["relax", "low-energy"],
    "type": "objective",
    "tags": ["current-save"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "stardew-valley",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Back to Full Energy",
        "objective": "With the railroad open and some energy spent in **Stardew Valley**, visit the spa. **Rest in the pool until your energy is full**.",
        "gameObjective": "With the railroad open and some energy spent in **Stardew Valley**, visit the spa. **Rest in the pool until your energy is full**."
      },
      "de": {
        "name": "Wieder volle Energie",
        "objective": "Besuche in **Stardew Valley** bei offener Bahnstrecke und verbrauchter Energie das Badehaus. **Ruh dich im Becken aus, bis deine Energie voll ist**.",
        "gameObjective": "Besuche in **Stardew Valley** bei offener Bahnstrecke und verbrauchter Energie das Badehaus. **Ruh dich im Becken aus, bis deine Energie voll ist**."
      }
    },
    "experience": {
      "family": "energy-recovery",
      "cardMetadata": { "genreIds": ["cozy", "simulation"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "en": "Railroad open; energy missing",
          "de": "Bahnstrecke offen; fehlende Energie",
          "chips": {"en": ["Railroad"], "de": ["Bahnstrecke"]},
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
    "gameGenreIds": ["cozy", "simulation"]
  },
  {
    "id": "stardew-valley-secret-note-ground-clue",
    "moodIds": ["explore", "focused"],
    "type": "objective",
    "tags": ["puzzles", "collectibles"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "stardew-valley",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Dig at the Clue",
        "objective": "In **Stardew Valley**, with a readable Secret Note that points to a reachable buried object, take a hoe and **follow its clue to dig up the object**. Use the note rather than an online map.",
        "gameObjective": "In **Stardew Valley**, with a readable Secret Note that points to a reachable buried object, take a hoe and **follow its clue to dig up the object**. Use the note rather than an online map."
      },
      "de": {
        "name": "Graben nach Hinweis",
        "objective": "**Stardew Valley**: Nimm mit einer lesbaren Geheimnotiz über einen erreichbaren vergrabenen Gegenstand die Hacke mit. **Folge dem Hinweis und grabe den Gegenstand aus**. Nutze die Notiz statt einer Onlinekarte.",
        "gameObjective": "**Stardew Valley**: Nimm mit einer lesbaren Geheimnotiz über einen erreichbaren vergrabenen Gegenstand die Hacke mit. **Folge dem Hinweis und grabe den Gegenstand aus**. Nutze die Notiz statt einer Onlinekarte."
      }
    },
    "experience": {
      "family": "note-puzzle",
      "cardMetadata": { "genreIds": ["cozy", "simulation"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["puzzles", "collectibles"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Readable Secret Note; hoe; reachable clue",
          "de": "Lesbare Geheimnotiz; Hacke; erreichbarer Hinweis",
          "chips": {"en": ["Secret Note", "Hoe"], "de": ["Geheimnotiz", "Hacke"]},
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
    "gameGenreIds": ["cozy", "simulation"]
  },
  {
    "id": "stardew-valley-prairie-king-first-stage",
    "moodIds": ["challenge", "focused"],
    "type": "challenge",
    "tags": ["three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "stardew-valley",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Saloon Shootout",
        "objective": "In **Stardew Valley**, play Journey of the Prairie King at the saloon. **Clear its first stage without losing a life**, or stop after three runs.",
        "gameObjective": "In **Stardew Valley**, play Journey of the Prairie King at the saloon. **Clear its first stage without losing a life**, or stop after three runs."
      },
      "de": {
        "name": "Schießerei im Saloon",
        "objective": "**Stardew Valley**: Spiel Reise des Prärie-Königs im Saloon. **Schaffe die erste Stage, ohne ein Leben zu verlieren**, oder hör nach drei Durchgängen auf.",
        "gameObjective": "**Stardew Valley**: Spiel Reise des Prärie-Königs im Saloon. **Schaffe die erste Stage, ohne ein Leben zu verlieren**, oder hör nach drei Durchgängen auf."
      }
    },
    "experience": {
      "family": "arcade",
      "cardMetadata": { "genreIds": ["cozy", "simulation"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["three-attempts"],
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
    "gameGenreIds": ["cozy", "simulation"]
  },
  {
    "id": "stardew-valley-pirate-cove-darts",
    "moodIds": ["challenge", "focused"],
    "type": "challenge",
    "tags": ["three-attempts"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "stardew-valley",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "A Round of Darts",
        "objective": "In **Stardew Valley**, on a night when pirates are already in your unlocked Pirate Cove, **win one darts game**, or stop after three games.",
        "gameObjective": "In **Stardew Valley**, on a night when pirates are already in your unlocked Pirate Cove, **win one darts game**, or stop after three games."
      },
      "de": {
        "name": "Eine Runde Darts",
        "objective": "**Stardew Valley**: **Gewinne in der freigeschalteten Piratenbucht eine Partie Darts**, oder hör nach drei Partien auf. Starte an einem Abend, an dem die Piraten schon da sind.",
        "gameObjective": "**Stardew Valley**: **Gewinne in der freigeschalteten Piratenbucht eine Partie Darts**, oder hör nach drei Partien auf. Starte an einem Abend, an dem die Piraten schon da sind."
      }
    },
    "experience": {
      "family": "darts",
      "cardMetadata": { "genreIds": ["cozy", "simulation"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Pirate Cove unlocked; pirates present tonight",
          "de": "Piratenbucht freigeschaltet; Piraten heute anwesend",
          "chips": {"en": ["Pirate Cove", "Pirates"], "de": ["Piratenbucht", "Piraten"]},
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
    "gameGenreIds": ["cozy", "simulation"]
  },
  {
    "id": "stardew-valley-streamside-pan",
    "moodIds": ["relax", "explore"],
    "type": "inspiration",
    "tags": ["exploration"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "stardew-valley",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Along the Glints",
        "objective": "In Stardew Valley, with panning unlocked and a pan ready, wander beside the river and look for shimmering spots. **Pan when you find one** and follow the water wherever it takes you.",
        "gameObjective": "In Stardew Valley, with panning unlocked and a pan ready, wander beside the river and look for shimmering spots. **Pan when you find one** and follow the water wherever it takes you."
      },
      "de": {
        "name": "Glitzern am Fluss",
        "objective": "Stardew Valley: Lauf mit freigeschaltetem Goldwaschen und einer Pfanne am Fluss entlang. Achte auf glitzernde Stellen, **wasch dort nach Funden** und folge dem Wasser, solange du magst.",
        "gameObjective": "Stardew Valley: Lauf mit freigeschaltetem Goldwaschen und einer Pfanne am Fluss entlang. Achte auf glitzernde Stellen, **wasch dort nach Funden** und folge dem Wasser, solange du magst."
      }
    },
    "experience": {
      "family": "river-panning",
      "cardMetadata": { "genreIds": ["cozy", "simulation"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["exploration"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Panning unlocked; pan",
          "de": "Goldwaschen freigeschaltet; Pfanne",
          "chips": {"en": ["Panning", "Pan"], "de": ["Goldwaschen", "Pfanne"]},
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
    "gameGenreIds": ["cozy", "simulation"]
  },
  {
    "id": "stardew-valley-pet-bowl-morning",
    "moodIds": ["low-energy", "overwhelmed"],
    "type": "objective",
    "tags": ["animals"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "stardew-valley",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Before You Leave",
        "objective": "In **Stardew Valley**, on a dry morning with a pet and an empty water bowl, **pet your animal and fill its bowl** before leaving the farm.",
        "gameObjective": "In **Stardew Valley**, on a dry morning with a pet and an empty water bowl, **pet your animal and fill its bowl** before leaving the farm."
      },
      "de": {
        "name": "Der volle Wassernapf",
        "objective": "**Stardew Valley**: **Streichle an einem trockenen Morgen dein Haustier und fülle seinen leeren Wassernapf**, bevor du den Hof verlässt.",
        "gameObjective": "**Stardew Valley**: **Streichle an einem trockenen Morgen dein Haustier und fülle seinen leeren Wassernapf**, bevor du den Hof verlässt."
      }
    },
    "experience": {
      "family": "pet-care",
      "cardMetadata": { "genreIds": ["cozy", "simulation"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["animals"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Pet; empty water bowl on a dry morning",
          "de": "Haustier; leerer Napf an trockenem Morgen",
          "chips": {"en": ["Pet", "Water bowl"], "de": ["Haustier", "Wassernapf"]},
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
    "gameGenreIds": ["cozy", "simulation"]
  },
  {
    "id": "stardew-valley-quarry-bomb-test",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": [],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "stardew-valley",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "One Quarry Blast",
        "objective": "In **Stardew Valley**, with the quarry unlocked and a bomb ready, choose a cluster of rocks away from anything you want to keep. **Clear it with one bomb and collect the drops**. Compare the cleared area with your usual pickaxe work.",
        "gameObjective": "In **Stardew Valley**, with the quarry unlocked and a bomb ready, choose a cluster of rocks away from anything you want to keep. **Clear it with one bomb and collect the drops**. Compare the cleared area with your usual pickaxe work."
      },
      "de": {
        "name": "Eine Sprengung im Steinbruch",
        "objective": "**Stardew Valley**: Such im freigeschalteten Steinbruch eine Gruppe Steine fern von allem, was bleiben soll. **Sprenge sie mit einer vorhandenen Bombe und sammle die Funde**. Vergleiche die freie Fläche mit deiner üblichen Arbeit mit der Spitzhacke.",
        "gameObjective": "**Stardew Valley**: Such im freigeschalteten Steinbruch eine Gruppe Steine fern von allem, was bleiben soll. **Sprenge sie mit einer vorhandenen Bombe und sammle die Funde**. Vergleiche die freie Fläche mit deiner üblichen Arbeit mit der Spitzhacke."
      }
    },
    "experience": {
      "family": "quarry-blast",
      "cardMetadata": { "genreIds": ["cozy", "simulation"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "en": "Quarry unlocked; bomb",
          "de": "Steinbruch freigeschaltet; Bombe",
          "chips": {"en": ["Quarry", "Bomb"], "de": ["Steinbruch", "Bombe"]},
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
    "gameGenreIds": ["cozy", "simulation"]
  },
  {
    "id": "stardew-valley-mushroom-log-grove",
    "moodIds": ["create", "focused"],
    "type": "creation",
    "tags": ["farming"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "stardew-valley",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Logs in the Grove",
        "objective": "In **Stardew Valley**, in version 1.6 or later with the Mushroom Log recipe and materials ready, **place two logs among your wild trees and keep both reachable**. Check which tree types surround each. No harvest is needed today.",
        "gameObjective": "In **Stardew Valley**, in version 1.6 or later with the Mushroom Log recipe and materials ready, **place two logs among your wild trees and keep both reachable**. Check which tree types surround each. No harvest is needed today."
      },
      "de": {
        "name": "Stämme im Gehölz",
        "objective": "Stell in **Stardew Valley ab Version 1.6** zwei Pilzstämme zwischen deine wilden Bäume. Such Plätze aus, an denen du später gut zum Sammeln hinkommst, und **leg ein kleines Pilzgehölz an**. Rezept und Materialien sollten bereitliegen; ernten musst du heute noch nicht.",
        "gameObjective": "Stell in **Stardew Valley ab Version 1.6** zwei Pilzstämme zwischen deine wilden Bäume. Such Plätze aus, an denen du später gut zum Sammeln hinkommst, und **leg ein kleines Pilzgehölz an**. Rezept und Materialien sollten bereitliegen; ernten musst du heute noch nicht."
      }
    },
    "experience": {
      "family": "mushroom-garden",
      "cardMetadata": { "genreIds": ["cozy", "simulation"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["farming"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Version 1.6+; Mushroom Log recipe and materials",
          "de": "Version 1.6+; Pilzstamm-Rezept und Materialien",
          "chips": {"en": ["Version 1.6+", "Mushroom Log"], "de": ["Version 1.6+", "Pilzstamm"]},
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
    "gameGenreIds": ["cozy", "simulation"]
  },
  {
    "id": "stardew-valley-smoke-a-catch",
    "moodIds": ["progress", "relax"],
    "type": "objective",
    "tags": ["cooking"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "stardew-valley",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Into the Smoker",
        "objective": "In **Stardew Valley 1.6 or later**, smoke a fish in your Fish Smoker. Have the fish and coal ready and **collect the finished smoked fish**.",
        "gameObjective": "In **Stardew Valley 1.6 or later**, smoke a fish in your Fish Smoker. Have the fish and coal ready and **collect the finished smoked fish**."
      },
      "de": {
        "name": "Ab in den Räucherofen",
        "objective": "Räuchere in **Stardew Valley ab Version 1.6** einen Fisch in deinem Räucherofen. Halte Fisch und Kohle bereit und **hol den fertigen Räucherfisch ab**.",
        "gameObjective": "Räuchere in **Stardew Valley ab Version 1.6** einen Fisch in deinem Räucherofen. Halte Fisch und Kohle bereit und **hol den fertigen Räucherfisch ab**."
      }
    },
    "experience": {
      "family": "fish-smoking",
      "cardMetadata": { "genreIds": ["cozy", "simulation"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["cooking"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Version 1.6+; Fish Smoker, fish and coal",
          "de": "Version 1.6+; Räucherofen, Fisch und Kohle",
          "chips": {"en": ["Version 1.6+", "Fish Smoker"], "de": ["Version 1.6+", "Räucherofen"]},
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
    "gameGenreIds": ["cozy", "simulation"]
  },
  {
    "id": "stardew-valley-raccoon-next-request",
    "moodIds": ["progress", "curious"],
    "type": "objective",
    "tags": ["trading"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "stardew-valley",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "For the New Neighbors",
        "objective": "In **Stardew Valley**, in version 1.6 or later with the raccoon family at the repaired stump, read their current request. If its items are ready in storage, **deliver the whole request and collect the reward**.",
        "gameObjective": "In **Stardew Valley**, in version 1.6 or later with the raccoon family at the repaired stump, read their current request. If its items are ready in storage, **deliver the whole request and collect the reward**."
      },
      "de": {
        "name": "Für die neuen Nachbarn",
        "objective": "**Stardew Valley**: Lies ab Version 1.6 die aktuelle Bitte der Waschbärfamilie am reparierten Baumstumpf. Wenn alle Gegenstände im Lager bereitliegen, **liefere sie ab und hol die Belohnung**.",
        "gameObjective": "**Stardew Valley**: Lies ab Version 1.6 die aktuelle Bitte der Waschbärfamilie am reparierten Baumstumpf. Wenn alle Gegenstände im Lager bereitliegen, **liefere sie ab und hol die Belohnung**."
      }
    },
    "experience": {
      "family": "neighbor-request",
      "cardMetadata": { "genreIds": ["cozy", "simulation"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["trading"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Version 1.6+; raccoon request and stored items",
          "de": "Version 1.6+; Waschbärbitte und gelagerte Gegenstände",
          "chips": {"en": ["Version 1.6+", "Raccoon request"], "de": ["Version 1.6+", "Waschbärbitte"]},
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
    "gameGenreIds": ["cozy", "simulation"]
  },
  {
    "id": "stardew-valley-community-center-one-slot",
    "moodIds": ["progress"],
    "type": "objective",
    "tags": ["collectibles"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "stardew-valley",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "One Bundle Slot",
        "objective": "Open an unfinished Community Center bundle and **deliver one item already within reach**. Let that slot, not a whole bundle, be today's finish.",
        "gameObjective": "Open an unfinished Community Center bundle and **deliver one item already within reach**. Let that slot, not a whole bundle, be today's finish."
      },
      "de": {
        "name": "Ein Platz im Bündel",
        "objective": "Öffne ein unfertiges Bündel im Gemeindezentrum und **liefere einen Gegenstand ab, den du heute gut bekommen kannst**. Dieser eine Platz ist das Ziel.",
        "gameObjective": "Öffne ein unfertiges Bündel im Gemeindezentrum und **liefere einen Gegenstand ab, den du heute gut bekommen kannst**. Dieser eine Platz ist das Ziel."
      }
    },
    "experience": {
      "family": "bundle-donation",
      "cardMetadata": { "genreIds": ["cozy", "simulation"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["collectibles"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Unfinished bundle; reachable missing item",
          "de": "Unfertiges Bündel; erreichbarer fehlender Gegenstand",
          "chips": {"en": ["Unfinished bundle", "Missing item"], "de": ["Bündel", "Fehlender Gegenstand"]},
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
    "gameGenreIds": ["cozy", "simulation"]
  },
  {
    "id": "stardew-valley-museum-unknown",
    "moodIds": ["progress", "curious"],
    "type": "objective",
    "tags": ["collectibles"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "stardew-valley",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "A New Museum Label",
        "objective": "Bring a mineral or artifact you already found but have not donated to the museum in **Stardew Valley**. **Give it to Gunther and choose its place in the exhibition**.",
        "gameObjective": "Bring a mineral or artifact you already found but have not donated to the museum in **Stardew Valley**. **Give it to Gunther and choose its place in the exhibition**."
      },
      "de": {
        "name": "Ein neues Museumsstück",
        "objective": "Bring in **Stardew Valley** ein Mineral oder Artefakt zum Museum, das du schon gefunden, aber noch nicht gespendet hast. **Gib es Gunther und schau, wo dein Fund in die Ausstellung passt**.",
        "gameObjective": "Bring in **Stardew Valley** ein Mineral oder Artefakt zum Museum, das du schon gefunden, aber noch nicht gespendet hast. **Gib es Gunther und schau, wo dein Fund in die Ausstellung passt**."
      }
    },
    "experience": {
      "family": "museum-donation",
      "cardMetadata": { "genreIds": ["cozy", "simulation"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["collectibles"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Undonated mineral or artifact",
          "de": "Noch nicht gespendetes Mineral oder Artefakt",
          "chips": {"en": ["Mineral or artifact"], "de": ["Mineral oder Artefakt"]},
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
    "gameGenreIds": ["cozy", "simulation"]
  },
  {
    "id": "stardew-valley-mine-elevator-exit",
    "moodIds": ["challenge"],
    "type": "challenge",
    "tags": ["no-healing", "three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "stardew-valley",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Five Floors Deeper",
        "objective": "From an unlocked mine elevator floor, **reach the next elevator stop without eating**. Stop after three attempts if the mine wins.",
        "gameObjective": "From an unlocked mine elevator floor, **reach the next elevator stop without eating**. Stop after three attempts if the mine wins."
      },
      "de": {
        "name": "Fünf Stockwerke tiefer",
        "objective": "Starte an einem freigeschalteten Aufzug der Mine und **erreiche den nächsten Halt, ohne zu essen**. Nach drei Versuchen ist Schluss.",
        "gameObjective": "Starte an einem freigeschalteten Aufzug der Mine und **erreiche den nächsten Halt, ohne zu essen**. Nach drei Versuchen ist Schluss."
      }
    },
    "experience": {
      "family": "mine-descent",
      "cardMetadata": { "genreIds": ["cozy", "simulation"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["no-healing", "three-attempts"],
      "prerequisites": [
        {
          "en": "Mine elevator unlocked",
          "de": "Minenaufzug freigeschaltet",
          "chips": {"en": ["Mine elevator"], "de": ["Minenaufzug"]},
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
    "gameGenreIds": ["cozy", "simulation"]
  },
  {
    "id": "stardew-valley-villager-gift-clue",
    "moodIds": ["curious"],
    "type": "experiment",
    "tags": ["dialogue"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "stardew-valley",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Learn a Favorite",
        "objective": "In **Stardew Valley**, use a taste clue from a conversation with a villager. Choose a matching gift from your supplies and **give it without consulting a gift guide**.",
        "gameObjective": "In **Stardew Valley**, use a taste clue from a conversation with a villager. Choose a matching gift from your supplies and **give it without consulting a gift guide**."
      },
      "de": {
        "name": "Ein Geschenk mit Hinweis",
        "objective": "Nutze in **Stardew Valley** einen Geschmackshinweis aus einem Gespräch mit einer Person im Dorf. Such ein passendes Geschenk aus deinen Vorräten aus und **schenk es ihr ohne Blick in eine Geschenkliste**.",
        "gameObjective": "Nutze in **Stardew Valley** einen Geschmackshinweis aus einem Gespräch mit einer Person im Dorf. Such ein passendes Geschenk aus deinen Vorräten aus und **schenk es ihr ohne Blick in eine Geschenkliste**."
      }
    },
    "experience": {
      "family": "gift-clue",
      "cardMetadata": { "genreIds": ["cozy", "simulation"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["dialogue"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Villager taste clue and suitable gift",
          "de": "Geschmackshinweis und passendes Geschenk",
          "chips": {"en": ["Gift", "Taste clue"], "de": ["Geschenk", "Geschmackshinweis"]},
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
    "gameGenreIds": ["cozy", "simulation"]
  },
  {
    "id": "stardew-valley-farm-cave-choice",
    "moodIds": ["focused"],
    "type": "objective",
    "tags": ["farming"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "stardew-valley",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Use the Farm Cave",
        "objective": "If Demetrius has set up your farm cave, **collect its fruit or mushrooms and use one result in a recipe, bundle, or sale**.",
        "gameObjective": "If Demetrius has set up your farm cave, **collect its fruit or mushrooms and use one result in a recipe, bundle, or sale**."
      },
      "de": {
        "name": "Die Farmhöhle nutzen",
        "objective": "Wenn Demetrius deine Farmhöhle eingerichtet hat, **hol Obst oder Pilze ab und verwende einen Fund für ein Rezept, Bündel oder den Verkauf**.",
        "gameObjective": "Wenn Demetrius deine Farmhöhle eingerichtet hat, **hol Obst oder Pilze ab und verwende einen Fund für ein Rezept, Bündel oder den Verkauf**."
      }
    },
    "experience": {
      "family": "cave-harvest",
      "cardMetadata": { "genreIds": ["cozy", "simulation"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["farming"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Farm cave set up; harvest available",
          "de": "Farmhöhle eingerichtet; Ernte verfügbar",
          "chips": {"en": ["Farm cave"], "de": ["Farmhöhle"]},
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
    "gameGenreIds": ["cozy", "simulation"]
  },
  {
    "id": "stardew-valley-winter-seed-loop",
    "moodIds": ["create"],
    "type": "creation",
    "tags": ["farming"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "stardew-valley",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "A Winter Patch",
        "objective": "In winter in **Stardew Valley**, with the Winter Seeds recipe and its materials ready, **craft Winter Seeds and plant a small patch**.",
        "gameObjective": "In winter in **Stardew Valley**, with the Winter Seeds recipe and its materials ready, **craft Winter Seeds and plant a small patch**."
      },
      "de": {
        "name": "Ein Winterbeet",
        "objective": "Stell im Winter in **Stardew Valley** mit bekanntem Wintersaat-Rezept und vorhandenen Materialien **Wintersaat her und pflanze ein kleines Beet**.",
        "gameObjective": "Stell im Winter in **Stardew Valley** mit bekanntem Wintersaat-Rezept und vorhandenen Materialien **Wintersaat her und pflanze ein kleines Beet**."
      }
    },
    "experience": {
      "family": "winter-garden",
      "cardMetadata": { "genreIds": ["cozy", "simulation"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["farming"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Winter; Winter Seeds recipe and materials",
          "de": "Winter; Wintersaat-Rezept und Materialien",
          "chips": {"en": ["Winter", "Winter Seeds"], "de": ["Winter", "Wintersaat"]},
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
    "gameGenreIds": ["cozy", "simulation"]
  }
]);
