import { defineQuests } from "../defineQuests";

export const GamesMinecraftQuests = defineQuests([
  {
    "id": "minecraft-working-fishing-pier",
    "moodIds": ["create", "relax"],
    "type": "creation",
    "tags": ["building", "fishing"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "minecraft",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Open the Pier",
        "objective": "Near home, **build a small fishing pier and catch a fish from it**. Leave open water in front of the casting spot. Add lighting or a storage barrel if you like.",
        "gameObjective": "Near home, **build a small fishing pier and catch a fish from it**. Leave open water in front of the casting spot. Add lighting or a storage barrel if you like."
      },
      "de": {
        "name": "Der Steg ist offen",
        "objective": "**Bau nahe deinem Zuhause einen kleinen Angelsteg und fang von dort einen Fisch**. Lass vor dem Angelplatz Wasser frei. Licht oder ein Fass kannst du ergänzen.",
        "gameObjective": "**Bau nahe deinem Zuhause einen kleinen Angelsteg und fang von dort einen Fisch**. Lass vor dem Angelplatz Wasser frei. Licht oder ein Fass kannst du ergänzen."
      }
    },
    "experience": {
      "family": "fishing-pier",
      "cardMetadata": { "genreIds": ["survival", "sandbox"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["building", "fishing"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Building materials and fishing rod",
          "de": "Baumaterial und Angel",
          "chips": {"en": ["Rod", "Building materials"], "de": ["Angel", "Baumaterial"]},
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
    "gameGenreIds": ["survival", "sandbox"]
  },
  {
    "id": "minecraft-village-payday",
    "moodIds": ["progress", "relax"],
    "type": "objective",
    "tags": ["farming", "trading"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "minecraft",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Village Payday",
        "objective": "In **Minecraft Survival**, use an established wheat field and a farmer who buys wheat. **Harvest enough for one trade, replant the harvested spaces, and earn the emeralds**. Leave the village’s hay bales alone.",
        "gameObjective": "In **Minecraft Survival**, use an established wheat field and a farmer who buys wheat. **Harvest enough for one trade, replant the harvested spaces, and earn the emeralds**. Leave the village’s hay bales alone."
      },
      "de": {
        "name": "Zahltag im Dorf",
        "objective": "Nutze in **Minecraft im Überlebensmodus** ein bestehendes Weizenfeld und einen Bauern, der Weizen kauft. **Ernte genug Weizen für einen Handel, säe die abgeernteten Stellen neu ein und tausch den Weizen gegen Smaragde**. Lass die Heuballen im Dorf stehen.",
        "gameObjective": "Nutze in **Minecraft im Überlebensmodus** ein bestehendes Weizenfeld und einen Bauern, der Weizen kauft. **Ernte genug Weizen für einen Handel, säe die abgeernteten Stellen neu ein und tausch den Weizen gegen Smaragde**. Lass die Heuballen im Dorf stehen."
      }
    },
    "experience": {
      "family": "village-trading",
      "cardMetadata": { "genreIds": ["survival", "sandbox"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["farming", "trading"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Wheat field; wheat-buying farmer",
          "de": "Weizenfeld; Bauer mit Weizenhandel",
          "chips": {"en": ["Wheat", "Farmer"], "de": ["Weizen", "Bauer"]},
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
    "gameGenreIds": ["survival", "sandbox"]
  },
  {
    "id": "minecraft-furnace-shift",
    "moodIds": ["create", "focused"],
    "type": "creation",
    "tags": ["automation", "cooking"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "minecraft",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Furnace Shift",
        "objective": "In **Minecraft**, connect an input chest, fuel chest, and output chest to a furnace with hoppers. Load eight raw food items and enough fuel. **Collect all eight cooked items from the output chest** without moving them through the furnace by hand.",
        "gameObjective": "In **Minecraft**, connect an input chest, fuel chest, and output chest to a furnace with hoppers. Load eight raw food items and enough fuel. **Collect all eight cooked items from the output chest** without moving them through the furnace by hand."
      },
      "de": {
        "name": "Ofendienst",
        "objective": "Verbinde in **Minecraft** eine Truhe für Zutaten, eine für Brennstoff und eine für die Ausgabe über Trichter mit einem Ofen. Fülle acht rohe Lebensmittel und genug Brennstoff ein. **Hole alle acht fertigen Lebensmittel aus der Ausgabetruhe**, ohne sie von Hand durch den Ofen zu bewegen.",
        "gameObjective": "Verbinde in **Minecraft** eine Truhe für Zutaten, eine für Brennstoff und eine für die Ausgabe über Trichter mit einem Ofen. Fülle acht rohe Lebensmittel und genug Brennstoff ein. **Hole alle acht fertigen Lebensmittel aus der Ausgabetruhe**, ohne sie von Hand durch den Ofen zu bewegen."
      }
    },
    "experience": {
      "family": "food-automation",
      "cardMetadata": { "genreIds": ["survival", "sandbox"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["automation", "cooking"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Hoppers; chests; furnace; food and fuel",
          "de": "Trichter; Truhen; Ofen; Nahrung und Brennstoff",
          "chips": {"en": ["Hoppers", "Furnace"], "de": ["Trichter", "Ofen"]},
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
    "gameGenreIds": ["survival", "sandbox"],
    "rarity": "special"
  },
  {
    "id": "minecraft-note-block-doorbell",
    "rarity": "special",
    "moodIds": ["create", "curious"],
    "type": "experiment",
    "tags": ["automation", "rhythm"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "minecraft",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Someone's Home",
        "objective": "In **Minecraft**, build a three-note doorbell at your entrance using a button, note blocks and repeaters. Try two rhythms, keep your favorite, and **play the whole tune with one press from outside**.",
        "gameObjective": "In **Minecraft**, build a three-note doorbell at your entrance using a button, note blocks and repeaters. Try two rhythms, keep your favorite, and **play the whole tune with one press from outside**."
      },
      "de": {
        "name": "Jemand zu Hause",
        "objective": "Bau in **Minecraft** mit Knopf, Notenblöcken und Verstärkern eine Dreiton-Klingel an deiner Eingangstür. Probiere zwei Rhythmen, behalte deinen Favoriten und **spiele die ganze Melodie mit einem Druck von draußen**.",
        "gameObjective": "Bau in **Minecraft** mit Knopf, Notenblöcken und Verstärkern eine Dreiton-Klingel an deiner Eingangstür. Probiere zwei Rhythmen, behalte deinen Favoriten und **spiele die ganze Melodie mit einem Druck von draußen**."
      }
    },
    "experience": {
      "family": "musical-building",
      "cardMetadata": { "genreIds": ["survival", "sandbox"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["automation", "rhythm"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Note blocks; repeaters; button",
          "de": "Notenblöcke; Verstärker; Knopf",
          "chips": {"en": ["Note blocks", "Repeaters"], "de": ["Notenblöcke", "Verstärker"]},
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
    "gameGenreIds": ["survival", "sandbox"]
  },
  {
    "id": "minecraft-smoke-and-honey",
    "moodIds": ["relax", "curious"],
    "type": "objective",
    "tags": ["farming"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "minecraft",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Smoke and Honey",
        "objective": "Bring a glass bottle and campfire to a full bee nest in **Minecraft**. Let the smoke reach the nest from below and **collect one honey bottle without angering the bees**.",
        "gameObjective": "Bring a glass bottle and campfire to a full bee nest in **Minecraft**. Let the smoke reach the nest from below and **collect one honey bottle without angering the bees**."
      },
      "de": {
        "name": "Rauch und Honig",
        "objective": "Bring in **Minecraft** eine Glasflasche und ein Lagerfeuer zu einem vollen Bienennest. Lass den Rauch von unten ans Nest gelangen und **füll eine Honigflasche, ohne die Bienen aufzuschrecken**.",
        "gameObjective": "Bring in **Minecraft** eine Glasflasche und ein Lagerfeuer zu einem vollen Bienennest. Lass den Rauch von unten ans Nest gelangen und **füll eine Honigflasche, ohne die Bienen aufzuschrecken**."
      }
    },
    "experience": {
      "family": "beekeeping",
      "cardMetadata": { "genreIds": ["survival", "sandbox"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["farming"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Full bee nest; bottle and campfire",
          "de": "Volles Bienennest; Flasche und Lagerfeuer",
          "chips": {"en": ["Bee nest", "Campfire"], "de": ["Bienennest", "Lagerfeuer"]},
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
    "gameGenreIds": ["survival", "sandbox"]
  },
  {
    "id": "minecraft-second-chance-villager",
    "moodIds": ["progress", "focused"],
    "type": "objective",
    "tags": [],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "minecraft",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Second Chance",
        "objective": "In **Minecraft Survival**, with a zombie villager, golden apple, and splash potion of Weakness ready, shelter the villager from sunlight. Apply Weakness, feed it the apple, and **keep it safe through the cure**.",
        "gameObjective": "In **Minecraft Survival**, with a zombie villager, golden apple, and splash potion of Weakness ready, shelter the villager from sunlight. Apply Weakness, feed it the apple, and **keep it safe through the cure**."
      },
      "de": {
        "name": "Zweite Chance",
        "objective": "Wenn in **Minecraft im Überlebensmodus** ein Zombiedorfbewohner, ein goldener Apfel und ein Wurftrank der Schwäche bereit sind, schütze den Dorfbewohner vor Sonnenlicht. Wirf den Trank, gib ihm den Apfel und **halte ihn bis zum Ende der Heilung sicher**.",
        "gameObjective": "Wenn in **Minecraft im Überlebensmodus** ein Zombiedorfbewohner, ein goldener Apfel und ein Wurftrank der Schwäche bereit sind, schütze den Dorfbewohner vor Sonnenlicht. Wirf den Trank, gib ihm den Apfel und **halte ihn bis zum Ende der Heilung sicher**."
      }
    },
    "experience": {
      "family": "villager-cure",
      "cardMetadata": { "genreIds": ["survival", "sandbox"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "en": "Zombie villager; golden apple; Weakness",
          "de": "Zombiedorfbewohner; Goldapfel; Schwäche",
          "chips": {"en": ["Zombie villager", "Golden apple"], "de": ["Zombiedorfbewohner", "Goldapfel"]},
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
    "gameGenreIds": ["survival", "sandbox"]
  },
  {
    "id": "minecraft-map-home",
    "moodIds": ["explore", "curious"],
    "type": "objective",
    "tags": ["exploration", "on-foot"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "minecraft",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Map One Corner",
        "objective": "In **Minecraft**, open a new, unexpanded map at your base. Bring food and **fill the blank patches in one reachable quadrant on foot**.",
        "gameObjective": "In **Minecraft**, open a new, unexpanded map at your base. Bring food and **fill the blank patches in one reachable quadrant on foot**."
      },
      "de": {
        "name": "Die Umgebung kartieren",
        "objective": "Öffne in **Minecraft** an deiner Basis eine neue, nicht vergrößerte Karte. Nimm Essen mit und **deck die leeren Stellen in einem erreichbaren Viertel der Karte zu Fuß auf**.",
        "gameObjective": "Öffne in **Minecraft** an deiner Basis eine neue, nicht vergrößerte Karte. Nimm Essen mit und **deck die leeren Stellen in einem erreichbaren Viertel der Karte zu Fuß auf**."
      }
    },
    "experience": {
      "family": "map-exploration",
      "cardMetadata": { "genreIds": ["survival", "sandbox"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["exploration"],
      "rules": ["on-foot"],
      "prerequisites": [
        {
          "en": "New unexpanded map; food",
          "de": "Neue unvergrößerte Karte; Essen",
          "chips": {"en": ["New map"], "de": ["Neue Karte"]},
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
    "gameGenreIds": ["survival", "sandbox"]
  },
  {
    "id": "minecraft-target-signal-range",
    "moodIds": ["create", "focused"],
    "type": "creation",
    "tags": ["automation"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "minecraft",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "A Target That Answers",
        "objective": "In **Minecraft**, build a target block connected to a line of redstone lamps. With a bow and arrows ready, **make an edge hit light fewer lamps than a center hit**.",
        "gameObjective": "In **Minecraft**, build a target block connected to a line of redstone lamps. With a bow and arrows ready, **make an edge hit light fewer lamps than a center hit**."
      },
      "de": {
        "name": "Ein Ziel, das reagiert",
        "objective": "**Minecraft**: Verbinde einen Zielblock mit einer Reihe Redstone-Lampen. Halte Bogen und Pfeile bereit und **lass einen Randtreffer weniger Lampen einschalten als einen Treffer in die Mitte**.",
        "gameObjective": "**Minecraft**: Verbinde einen Zielblock mit einer Reihe Redstone-Lampen. Halte Bogen und Pfeile bereit und **lass einen Randtreffer weniger Lampen einschalten als einen Treffer in die Mitte**."
      }
    },
    "experience": {
      "family": "redstone-signals",
      "cardMetadata": { "genreIds": ["sandbox", "survival"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["automation"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Target block; redstone circuit; bow",
          "de": "Zielblock; Redstone-Schaltung; Bogen",
          "chips": {"en": ["Target block", "Redstone circuit"], "de": ["Zielblock", "Redstone-Schaltung"]},
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
    "gameGenreIds": ["sandbox", "survival"]
  },
  {
    "id": "minecraft-copper-wax-scrape",
    "moodIds": ["curious", "create"],
    "type": "experiment",
    "tags": ["building"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "minecraft",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Keep the Copper Color",
        "objective": "In **Minecraft**, with oxidized copper, honeycomb and an axe ready, **wax one block and scrape oxidation from another**. Place them side by side to compare the finishes.",
        "gameObjective": "In **Minecraft**, with oxidized copper, honeycomb and an axe ready, **wax one block and scrape oxidation from another**. Place them side by side to compare the finishes."
      },
      "de": {
        "name": "Die Kupferfarbe behalten",
        "objective": "Wachse in **Minecraft** mit vorhandener Honigwabe einen oxidierten Kupferblock und **schabe mit einer Axt die Oxidation von einem anderen ab**. Stell beide nebeneinander und vergleiche die Oberflächen.",
        "gameObjective": "Wachse in **Minecraft** mit vorhandener Honigwabe einen oxidierten Kupferblock und **schabe mit einer Axt die Oxidation von einem anderen ab**. Stell beide nebeneinander und vergleiche die Oberflächen."
      }
    },
    "experience": {
      "family": "material-finishes",
      "cardMetadata": { "genreIds": ["sandbox", "survival"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["building"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Oxidized copper; honeycomb; axe",
          "de": "Oxidiertes Kupfer; Honigwabe; Axt",
          "chips": {"en": ["Oxidized copper", "Honeycomb"], "de": ["Oxidiertes Kupfer", "Honigwabe"]},
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
    "gameGenreIds": ["sandbox", "survival"]
  },
  {
    "id": "minecraft-loom-house-banner",
    "moodIds": ["create", "relax"],
    "type": "creation",
    "tags": ["decorating"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "minecraft",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "A Banner for Home",
        "objective": "In **Minecraft**, with a loom, a banner and dyes ready, combine at least two patterns into a house banner. **Hang the finished banner at your entrance**.",
        "gameObjective": "In **Minecraft**, with a loom, a banner and dyes ready, combine at least two patterns into a house banner. **Hang the finished banner at your entrance**."
      },
      "de": {
        "name": "Ein Banner fürs Haus",
        "objective": "**Minecraft**: Kombiniere mit vorhandenem Webstuhl, Banner und Farbstoffen mindestens zwei Muster zu einem Hausbanner. **Häng das fertige Banner an deinen Eingang**.",
        "gameObjective": "**Minecraft**: Kombiniere mit vorhandenem Webstuhl, Banner und Farbstoffen mindestens zwei Muster zu einem Hausbanner. **Häng das fertige Banner an deinen Eingang**."
      }
    },
    "experience": {
      "family": "banner-design",
      "cardMetadata": { "genreIds": ["sandbox", "survival"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["decorating"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Loom; banner and dyes",
          "de": "Webstuhl; Banner und Farbstoffe",
          "chips": {"en": ["Loom", "Banner"], "de": ["Webstuhl", "Banner"]},
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
    "gameGenreIds": ["sandbox", "survival"]
  },
  {
    "id": "minecraft-stonecutter-stair-comparison",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["crafting"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "minecraft",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Same Stone, More Stairs",
        "objective": "In **Minecraft**, with twelve cobblestone ready, use six in a crafting-table stair recipe and the other six in a stonecutter. **Compare the stair counts and place both batches in a short staircase**.",
        "gameObjective": "In **Minecraft**, with twelve cobblestone ready, use six in a crafting-table stair recipe and the other six in a stonecutter. **Compare the stair counts and place both batches in a short staircase**."
      },
      "de": {
        "name": "Gleicher Stein, mehr Treppen",
        "objective": "**Minecraft**: Nutze von zwölf vorhandenen Bruchsteinen sechs für Treppen an der Werkbank und sechs im Steinschneider. **Vergleiche die Treppenanzahl und verbaue beide Chargen in einer kleinen Treppe**.",
        "gameObjective": "**Minecraft**: Nutze von zwölf vorhandenen Bruchsteinen sechs für Treppen an der Werkbank und sechs im Steinschneider. **Vergleiche die Treppenanzahl und verbaue beide Chargen in einer kleinen Treppe**."
      }
    },
    "experience": {
      "family": "crafting-yield",
      "cardMetadata": { "genreIds": ["sandbox", "survival"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["crafting"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Stonecutter; twelve cobblestone",
          "de": "Steinschneider; zwölf Bruchsteine",
          "chips": {"en": ["Stonecutter"], "de": ["Steinschneider"]},
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
    "gameGenreIds": ["sandbox", "survival"]
  },
  {
    "id": "minecraft-smithing-owned-trim",
    "moodIds": ["create", "progress"],
    "type": "creation",
    "tags": ["outfit", "crafting"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "minecraft",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "A Trim You Choose",
        "objective": "At a smithing table in **Minecraft**, trim an armor piece with a template and color material you choose. **Wear the armor and see the pattern in play**. Use a template you can spare.",
        "gameObjective": "At a smithing table in **Minecraft**, trim an armor piece with a template and color material you choose. **Wear the armor and see the pattern in play**. Use a template you can spare."
      },
      "de": {
        "name": "Dein Rüstungsmuster",
        "objective": "Verziere in **Minecraft** an einem Schmiedetisch ein Rüstungsteil mit einer Vorlage und einem Farbmaterial deiner Wahl. **Zieh die Rüstung an und schau dir das Muster im Spiel an**. Nutze eine Vorlage, die du entbehren kannst.",
        "gameObjective": "Verziere in **Minecraft** an einem Schmiedetisch ein Rüstungsteil mit einer Vorlage und einem Farbmaterial deiner Wahl. **Zieh die Rüstung an und schau dir das Muster im Spiel an**. Nutze eine Vorlage, die du entbehren kannst."
      }
    },
    "experience": {
      "family": "armor-decoration",
      "cardMetadata": { "genreIds": ["sandbox", "survival"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["outfit", "crafting"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Schmiedetisch, Rüstung, übrige Vorlage und Farbmaterial",
          "en": "Smithing table, armor, spare template and color material",
          "chips": {"en": ["Smithing table", "Armor trim"], "de": ["Schmiedetisch", "Schmiedevorlage"]},
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
    "gameGenreIds": ["sandbox", "survival"]
  },
  {
    "id": "minecraft-brush-known-ruin",
    "moodIds": ["explore", "curious"],
    "type": "objective",
    "tags": ["collectibles"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "minecraft",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Brush, Don’t Break",
        "objective": "In **Minecraft**, with a brush ready at a ruin where you have already spotted suspicious sand or gravel, **brush one block until its item comes free**. Keep it supported so it cannot fall.",
        "gameObjective": "In **Minecraft**, with a brush ready at a ruin where you have already spotted suspicious sand or gravel, **brush one block until its item comes free**. Keep it supported so it cannot fall."
      },
      "de": {
        "name": "Pinseln statt abbauen",
        "objective": "**Minecraft**: **Pinsele mit vorhandenem Pinsel einen bereits entdeckten verdächtigen Sand- oder Kiesblock in einer Ruine frei, bis sein Gegenstand herauskommt**. Stütze den Block, damit er nicht herunterfällt.",
        "gameObjective": "**Minecraft**: **Pinsele mit vorhandenem Pinsel einen bereits entdeckten verdächtigen Sand- oder Kiesblock in einer Ruine frei, bis sein Gegenstand herauskommt**. Stütze den Block, damit er nicht herunterfällt."
      }
    },
    "experience": {
      "family": "archaeology",
      "cardMetadata": { "genreIds": ["sandbox", "survival"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["collectibles"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Brush; suspicious sand or gravel",
          "de": "Pinsel; verdächtiger Sand oder Kies",
          "chips": {"en": ["Brush", "Suspicious blocks"], "de": ["Pinsel", "Verdächtige Blöcke"]},
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
    "gameGenreIds": ["sandbox", "survival"]
  },
  {
    "id": "minecraft-sherd-keepsake-pot",
    "moodIds": ["create", "relax"],
    "type": "creation",
    "tags": ["decorating", "collectibles"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "minecraft",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "A Keepsake Pot",
        "objective": "In **Minecraft**, with pottery sherds and bricks already owned, choose the four sides of a decorated pot. **Place it at home and put one keepsake item inside**.",
        "gameObjective": "In **Minecraft**, with pottery sherds and bricks already owned, choose the four sides of a decorated pot. **Place it at home and put one keepsake item inside**."
      },
      "de": {
        "name": "Ein Topf mit Geschichte",
        "objective": "**Minecraft**: Wähle mit vorhandenen Keramikscherben und Ziegeln die vier Seiten eines verzierten Topfs. **Stell ihn zu Hause auf und leg ein Erinnerungsstück hinein**.",
        "gameObjective": "**Minecraft**: Wähle mit vorhandenen Keramikscherben und Ziegeln die vier Seiten eines verzierten Topfs. **Stell ihn zu Hause auf und leg ein Erinnerungsstück hinein**."
      }
    },
    "experience": {
      "family": "keepsake-decoration",
      "cardMetadata": { "genreIds": ["sandbox", "survival"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["decorating", "collectibles"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Pottery sherds; bricks",
          "de": "Keramikscherben; Ziegel",
          "chips": {"en": ["Pottery sherds", "Bricks"], "de": ["Keramikscherben", "Ziegel"]},
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
    "gameGenreIds": ["sandbox", "survival"]
  },
  {
    "id": "minecraft-camel-two-riders",
    "moodIds": ["connect", "explore"],
    "type": "objective",
    "tags": ["co-op", "traversal"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "minecraft",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Two on One Camel",
        "objective": "In **Minecraft**, on a shared world with a friend already present and a saddled camel ready, **ride together to a nearby landmark and back on the same camel**. Let each person steer one leg.",
        "gameObjective": "In **Minecraft**, on a shared world with a friend already present and a saddled camel ready, **ride together to a nearby landmark and back on the same camel**. Let each person steer one leg."
      },
      "de": {
        "name": "Ein Kamel für zwei",
        "objective": "**Minecraft**: **Reitet auf einer gemeinsamen Welt zu einer nahen Landmarke und auf demselben Kamel zurück**, wenn ein Freund schon da und ein gesatteltes Kamel bereit ist. Wechselt für den Rückweg den Fahrer.",
        "gameObjective": "**Minecraft**: **Reitet auf einer gemeinsamen Welt zu einer nahen Landmarke und auf demselben Kamel zurück**, wenn ein Freund schon da und ein gesatteltes Kamel bereit ist. Wechselt für den Rückweg den Fahrer."
      }
    },
    "experience": {
      "family": "shared-riding",
      "cardMetadata": { "genreIds": ["sandbox", "survival"], "playStyleIds": ["co-op"] },
      "finish": "outcome",
      "activities": ["traversal"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Friend present; saddled camel",
          "de": "Freund anwesend; gesatteltes Kamel",
          "chips": {"en": ["Saddled camel"], "de": ["Gesatteltes Kamel"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "others",
          "participation": "co-op",
          "formation": "none",
          "mode": "shared world"
        },
        {
          "connection": "offline",
          "people": "others",
          "participation": "co-op",
          "formation": "none",
          "mode": "local shared world"
        }
      ]
    },
    "gameGenreIds": ["sandbox", "survival"]
  },
  {
    "id": "minecraft-bubble-lift-to-roof",
    "moodIds": ["create", "focused"],
    "type": "creation",
    "tags": ["building", "automation"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "minecraft",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Up in Bubbles",
        "objective": "In **Minecraft**, with soul sand, water and blocks ready, **build an upward bubble elevator between two floors and ride it**. Use water source blocks throughout the column and add a safe landing.",
        "gameObjective": "In **Minecraft**, with soul sand, water and blocks ready, **build an upward bubble elevator between two floors and ride it**. Use water source blocks throughout the column and add a safe landing."
      },
      "de": {
        "name": "Mit Blasen nach oben",
        "objective": "Bau in **Minecraft** mit Seelensand, Wasser und Baublöcken **einen Blasenaufzug zwischen zwei Etagen und fahr damit hinauf**. Nutze in der ganzen Säule Wasserquellen und bau einen sicheren Ausstieg.",
        "gameObjective": "Bau in **Minecraft** mit Seelensand, Wasser und Baublöcken **einen Blasenaufzug zwischen zwei Etagen und fahr damit hinauf**. Nutze in der ganzen Säule Wasserquellen und bau einen sicheren Ausstieg."
      }
    },
    "experience": {
      "family": "vertical-transport",
      "cardMetadata": { "genreIds": ["sandbox", "survival"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["building", "automation"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Soul sand; water and blocks",
          "de": "Seelensand; Wasser und Baublöcke",
          "chips": {"en": ["Soul sand"], "de": ["Seelensand"]},
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
    "gameGenreIds": ["sandbox", "survival"],
    "rarity": "special"
  },
  {
    "id": "minecraft-snow-golem-workshop",
    "moodIds": ["create", "progress"],
    "type": "creation",
    "tags": ["crafting"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "minecraft",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Snow on Demand",
        "objective": "In **Minecraft**, in a biome where snow golems leave snow, make a roofed enclosure sheltered from rain. Build a golem inside and **collect eight snowballs from the snow it leaves**. Keep its standing block intact.",
        "gameObjective": "In **Minecraft**, in a biome where snow golems leave snow, make a roofed enclosure sheltered from rain. Build a golem inside and **collect eight snowballs from the snow it leaves**. Keep its standing block intact."
      },
      "de": {
        "name": "Schnee auf Vorrat",
        "objective": "**Minecraft**: Bau in einem Biom, in dem Schneegolems Schnee hinterlassen, ein regengeschütztes Gehege mit Dach. Bau dort einen Golem und **sammle acht Schneebälle aus seinem Schnee**. Lass seinen Standblock stehen.",
        "gameObjective": "**Minecraft**: Bau in einem Biom, in dem Schneegolems Schnee hinterlassen, ein regengeschütztes Gehege mit Dach. Bau dort einen Golem und **sammle acht Schneebälle aus seinem Schnee**. Lass seinen Standblock stehen."
      }
    },
    "experience": {
      "family": "snow-production",
      "cardMetadata": { "genreIds": ["sandbox", "survival"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["crafting"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Snow golem materials; suitable biome",
          "de": "Schneegolem-Materialien; geeignetes Biom",
          "chips": {"en": ["Snow golem materials", "Suitable biome"], "de": ["Schneegolem-Materialien", "Biom"]},
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
    "gameGenreIds": ["sandbox", "survival"]
  },
  {
    "id": "minecraft-minecart-station-brake",
    "moodIds": ["create", "focused"],
    "type": "creation",
    "tags": ["building", "automation"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "minecraft",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "A Station That Stops",
        "objective": "In **Minecraft**, with rails, powered rails and a minecart ready, build a short line with a button-controlled powered rail at each end. **Ride both ways and stop at each station without breaking the cart**.",
        "gameObjective": "In **Minecraft**, with rails, powered rails and a minecart ready, build a short line with a button-controlled powered rail at each end. **Ride both ways and stop at each station without breaking the cart**."
      },
      "de": {
        "name": "Ein Halt, der klappt",
        "objective": "**Minecraft**: Bau mit vorhandenen Schienen, Antriebsschienen und Lore eine kurze Strecke mit knopfgesteuerter Antriebsschiene an beiden Enden. **Fahr hin und zurück und halte an beiden Stationen, ohne die Lore abzubauen**.",
        "gameObjective": "**Minecraft**: Bau mit vorhandenen Schienen, Antriebsschienen und Lore eine kurze Strecke mit knopfgesteuerter Antriebsschiene an beiden Enden. **Fahr hin und zurück und halte an beiden Stationen, ohne die Lore abzubauen**."
      }
    },
    "experience": {
      "family": "rail-transport",
      "cardMetadata": { "genreIds": ["sandbox", "survival"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["building", "automation"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Rails; powered rails; minecart",
          "de": "Schienen; Antriebsschienen; Lore",
          "chips": {"en": ["Rails", "Powered rails"], "de": ["Schienen", "Antriebsschienen"]},
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
    "gameGenreIds": ["sandbox", "survival"],
    "rarity": "special"
  },
  {
    "id": "minecraft-nether-portal-shelter",
    "moodIds": ["create", "progress"],
    "type": "creation",
    "tags": ["building"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "minecraft",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "A Safer Arrival",
        "objective": "In **Minecraft**, with an existing Nether portal and cobblestone ready, **enclose the Nether side in a roofed cobblestone shelter with a door**. Walk through the portal and check the entrance from inside.",
        "gameObjective": "In **Minecraft**, with an existing Nether portal and cobblestone ready, **enclose the Nether side in a roofed cobblestone shelter with a door**. Walk through the portal and check the entrance from inside."
      },
      "de": {
        "name": "Sicherer ankommen",
        "objective": "**Minecraft**: **Umbaue die Nether-Seite eines vorhandenen Portals mit einer überdachten Bruchsteinhütte und Tür**. Halte Bruchstein bereit, geh durchs Portal und prüfe den Eingang von innen.",
        "gameObjective": "**Minecraft**: **Umbaue die Nether-Seite eines vorhandenen Portals mit einer überdachten Bruchsteinhütte und Tür**. Halte Bruchstein bereit, geh durchs Portal und prüfe den Eingang von innen."
      }
    },
    "experience": {
      "family": "portal-shelter",
      "cardMetadata": { "genreIds": ["sandbox", "survival"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["building"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Existing Nether portal; cobblestone",
          "de": "Vorhandenes Netherportal; Bruchstein",
          "chips": {"en": ["Nether portal", "Cobblestone"], "de": ["Netherportal", "Bruchstein"]},
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
    "gameGenreIds": ["sandbox", "survival"]
  },
  {
    "id": "minecraft-lodestone-trail-home",
    "moodIds": ["explore", "progress"],
    "type": "objective",
    "tags": ["exploration"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "minecraft",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "The Needle Points Home",
        "objective": "In **Minecraft**, with a lodestone and compass ready, bind the compass to a lodestone at home. Visit a nearby unfamiliar spot and **return by following that compass within the same dimension**.",
        "gameObjective": "In **Minecraft**, with a lodestone and compass ready, bind the compass to a lodestone at home. Visit a nearby unfamiliar spot and **return by following that compass within the same dimension**."
      },
      "de": {
        "name": "Die Nadel zeigt heim",
        "objective": "**Minecraft**: Binde einen vorhandenen Kompass an einen Magnetstein zu Hause. Besuche eine unbekannte Stelle in der Nähe und **kehr in derselben Dimension mithilfe dieses Kompasses zurück**.",
        "gameObjective": "**Minecraft**: Binde einen vorhandenen Kompass an einen Magnetstein zu Hause. Besuche eine unbekannte Stelle in der Nähe und **kehr in derselben Dimension mithilfe dieses Kompasses zurück**."
      }
    },
    "experience": {
      "family": "compass-navigation",
      "cardMetadata": { "genreIds": ["sandbox", "survival"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["exploration"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Lodestone; compass",
          "de": "Magnetstein; Kompass",
          "chips": {"en": ["Lodestone", "Compass"], "de": ["Magnetstein", "Kompass"]},
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
    "gameGenreIds": ["sandbox", "survival"]
  },
  {
    "id": "minecraft-slow-falling-descent",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["traversal"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "minecraft",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "A Slower Descent",
        "objective": "In **Minecraft**, with a Potion of Slow Falling already brewed, choose a known drop with safe ground below. Drink it and **descend while steering toward a marked landing spot**. Check that the effect is active before stepping off.",
        "gameObjective": "In **Minecraft**, with a Potion of Slow Falling already brewed, choose a known drop with safe ground below. Drink it and **descend while steering toward a marked landing spot**. Check that the effect is active before stepping off."
      },
      "de": {
        "name": "Langsamer nach unten",
        "objective": "**Minecraft**: Wähle mit einem vorhandenen Trank des sanften Falls einen bekannten Abstieg mit sicherem Boden. Trink ihn und **lenke beim Sinken auf einen markierten Landeplatz zu**. Prüfe vor dem Absprung, ob der Effekt aktiv ist.",
        "gameObjective": "**Minecraft**: Wähle mit einem vorhandenen Trank des sanften Falls einen bekannten Abstieg mit sicherem Boden. Trink ihn und **lenke beim Sinken auf einen markierten Landeplatz zu**. Prüfe vor dem Absprung, ob der Effekt aktiv ist."
      }
    },
    "experience": {
      "family": "potion-traversal",
      "cardMetadata": { "genreIds": ["sandbox", "survival"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["traversal"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Potion of Slow Falling; safe drop",
          "de": "Trank des sanften Falls; sicherer Abstieg",
          "chips": {"en": ["Potion of Slow Falling", "Drop"], "de": ["Trank des sanften Falls", "Abstieg"]},
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
    "gameGenreIds": ["sandbox", "survival"]
  },
  {
    "id": "minecraft-amethyst-footstep-floor",
    "moodIds": ["create", "relax"],
    "type": "creation",
    "tags": ["building", "rhythm"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "minecraft",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Steps That Ring",
        "objective": "In **Minecraft**, with amethyst blocks already owned, **build a short walkway alternating amethyst and ordinary blocks, then walk across it**. Keep the sequence you like hearing.",
        "gameObjective": "In **Minecraft**, with amethyst blocks already owned, **build a short walkway alternating amethyst and ordinary blocks, then walk across it**. Keep the sequence you like hearing."
      },
      "de": {
        "name": "Schritte, die klingen",
        "objective": "**Minecraft**: **Bau mit vorhandenen Amethystblöcken einen kurzen Weg im Wechsel mit gewöhnlichen Blöcken und geh darüber**. Behalte die Folge, deren Klang dir gefällt.",
        "gameObjective": "**Minecraft**: **Bau mit vorhandenen Amethystblöcken einen kurzen Weg im Wechsel mit gewöhnlichen Blöcken und geh darüber**. Behalte die Folge, deren Klang dir gefällt."
      }
    },
    "experience": {
      "family": "musical-building",
      "cardMetadata": { "genreIds": ["sandbox", "survival"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["building", "rhythm"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Amethyst and ordinary blocks",
          "de": "Amethyst- und gewöhnliche Blöcke",
          "chips": {"en": ["Amethyst blocks"], "de": ["Amethystblöcke"]},
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
    "gameGenreIds": ["sandbox", "survival"]
  },
  {
    "id": "minecraft-wool-vibration-test",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["automation"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "minecraft",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "What the Sensor Hears",
        "objective": "In **Minecraft**, with a sculk sensor, lamp and wool ready, connect the sensor to the lamp. **Compare its response to nearby footsteps with and without wool between you and the sensor**. Keep other movement away.",
        "gameObjective": "In **Minecraft**, with a sculk sensor, lamp and wool ready, connect the sensor to the lamp. **Compare its response to nearby footsteps with and without wool between you and the sensor**. Keep other movement away."
      },
      "de": {
        "name": "Was der Sensor hört",
        "objective": "**Minecraft**: Verbinde mit vorhandenem Sculk-Sensor, Lampe und Wolle den Sensor mit der Lampe. **Vergleiche seine Reaktion auf Schritte mit und ohne Wolle zwischen dir und dem Sensor**. Halte andere Bewegung fern.",
        "gameObjective": "**Minecraft**: Verbinde mit vorhandenem Sculk-Sensor, Lampe und Wolle den Sensor mit der Lampe. **Vergleiche seine Reaktion auf Schritte mit und ohne Wolle zwischen dir und dem Sensor**. Halte andere Bewegung fern."
      }
    },
    "experience": {
      "family": "redstone-signals",
      "cardMetadata": { "genreIds": ["sandbox", "survival"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["automation"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Sculk sensor; lamp and wool",
          "de": "Sculk-Sensor; Lampe und Wolle",
          "chips": {"en": ["Sculk sensor"], "de": ["Sculk-Sensor"]},
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
    "gameGenreIds": ["sandbox", "survival"]
  },
  {
    "id": "minecraft-nether-respawn-stop",
    "moodIds": ["progress", "focused"],
    "type": "objective",
    "tags": ["building"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "minecraft",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "A Nether Return Point",
        "objective": "In **Minecraft**, with a Respawn Anchor and glowstone ready, place the anchor in a sheltered **Nether** room. **Charge it and set your respawn point there**. Use it only in the Nether.",
        "gameObjective": "In **Minecraft**, with a Respawn Anchor and glowstone ready, place the anchor in a sheltered **Nether** room. **Charge it and set your respawn point there**. Use it only in the Nether."
      },
      "de": {
        "name": "Rückkehrpunkt im Nether",
        "objective": "**Minecraft**: Stell mit vorhandenem Seelenanker und Leuchtstein den Anker in einen geschützten Raum im **Nether**. **Lade ihn auf und setze dort deinen Wiedereinstiegspunkt**. Nutze ihn nur im Nether.",
        "gameObjective": "**Minecraft**: Stell mit vorhandenem Seelenanker und Leuchtstein den Anker in einen geschützten Raum im **Nether**. **Lade ihn auf und setze dort deinen Wiedereinstiegspunkt**. Nutze ihn nur im Nether."
      }
    },
    "experience": {
      "family": "respawn-building",
      "cardMetadata": { "genreIds": ["sandbox", "survival"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["building"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Nether access; Respawn Anchor; glowstone",
          "de": "Netherzugang; Seelenanker; Leuchtstein",
          "chips": {"en": ["Nether access", "Respawn Anchor"], "de": ["Netherzugang", "Seelenanker"]},
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
    "gameGenreIds": ["sandbox", "survival"]
  },
  {
    "id": "minecraft-enchanting-shelf-test",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["crafting"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "minecraft",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "What the Shelves Change",
        "objective": "At your bookshelf-lined enchanting table in **Minecraft**, check the offered levels for a tool. Block some gaps between the table and shelves with torches and **compare how the offered levels change**. Clear the gaps afterward; no enchantment purchase is needed.",
        "gameObjective": "At your bookshelf-lined enchanting table in **Minecraft**, check the offered levels for a tool. Block some gaps between the table and shelves with torches and **compare how the offered levels change**. Clear the gaps afterward; no enchantment purchase is needed."
      },
      "de": {
        "name": "Was die Regale verändern",
        "objective": "Schau in **Minecraft** an deinem eingerichteten Zaubertisch nach den Verzauberungsstufen für ein Werkzeug. Blockiere einige freie Stellen zwischen Tisch und Bücherregalen mit Fackeln und **vergleiche, wie sich die angebotenen Stufen ändern**. Mach die Stellen danach wieder frei; verzaubern musst du nichts.",
        "gameObjective": "Schau in **Minecraft** an deinem eingerichteten Zaubertisch nach den Verzauberungsstufen für ein Werkzeug. Blockiere einige freie Stellen zwischen Tisch und Bücherregalen mit Fackeln und **vergleiche, wie sich die angebotenen Stufen ändern**. Mach die Stellen danach wieder frei; verzaubern musst du nichts."
      }
    },
    "experience": {
      "family": "enchanting-layout",
      "cardMetadata": { "genreIds": ["sandbox", "survival"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["crafting"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Enchanting table; bookshelves",
          "de": "Zaubertisch; Bücherregale",
          "chips": {"en": ["Enchanting table", "Bookshelves"], "de": ["Zaubertisch", "Bücherregale"]},
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
    "gameGenreIds": ["sandbox", "survival"]
  },
  {
    "id": "minecraft-night-firework-batch",
    "moodIds": ["create", "relax"],
    "type": "creation",
    "tags": ["crafting"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "minecraft",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Your Own Fireworks",
        "objective": "In **Minecraft**, make two differently colored firework stars from materials you own, then craft a rocket from each. **Launch them after dark and enjoy their colors**.",
        "gameObjective": "In **Minecraft**, make two differently colored firework stars from materials you own, then craft a rocket from each. **Launch them after dark and enjoy their colors**."
      },
      "de": {
        "name": "Dein eigenes Feuerwerk",
        "objective": "Stell in **Minecraft** aus vorhandenen Materialien zwei verschiedenfarbige Feuerwerkssterne her und bau daraus je eine Rakete. **Starte sie nach Einbruch der Dunkelheit und schau dir die Farben an**.",
        "gameObjective": "Stell in **Minecraft** aus vorhandenen Materialien zwei verschiedenfarbige Feuerwerkssterne her und bau daraus je eine Rakete. **Starte sie nach Einbruch der Dunkelheit und schau dir die Farben an**."
      }
    },
    "experience": {
      "family": "firework-design",
      "cardMetadata": { "genreIds": ["sandbox", "survival"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["crafting"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Schwarzpulver, Papier, Farbstoffe und eine bereits dunkle Nacht",
          "en": "Gunpowder, paper, dyes and night already underway",
          "chips": {"en": ["Firework materials", "Night"], "de": ["Feuerwerksmaterial", "Nacht"]},
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
    "gameGenreIds": ["sandbox", "survival"]
  },
  {
    "id": "minecraft-compost-back-to-crops",
    "moodIds": ["progress", "relax"],
    "type": "objective",
    "tags": ["farming"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "minecraft",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Back into the Garden",
        "objective": "In **Minecraft**, with a composter and spare compostable plants, **make one bone meal and use it on a growing crop**.",
        "gameObjective": "In **Minecraft**, with a composter and spare compostable plants, **make one bone meal and use it on a growing crop**."
      },
      "de": {
        "name": "Zurück ins Beet",
        "objective": "Stell in **Minecraft** mit einem Komposter und übrigen kompostierbaren Pflanzen **einmal Knochenmehl her und nutze es auf einer wachsenden Feldfrucht**.",
        "gameObjective": "Stell in **Minecraft** mit einem Komposter und übrigen kompostierbaren Pflanzen **einmal Knochenmehl her und nutze es auf einer wachsenden Feldfrucht**."
      }
    },
    "experience": {
      "family": "composting",
      "cardMetadata": { "genreIds": ["sandbox", "survival"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["farming"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Composter; surplus plants; crop",
          "de": "Komposter; übrige Pflanzen; Feldfrucht",
          "chips": {"en": ["Composter", "Surplus plants"], "de": ["Komposter", "Pflanzen"]},
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
    "gameGenreIds": ["sandbox", "survival"]
  },
  {
    "id": "minecraft-dripstone-cauldron",
    "moodIds": ["create"],
    "type": "creation",
    "tags": ["automation"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "minecraft",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Lava on Tap",
        "objective": "In **Minecraft**, build a small lava collection setup: a contained lava source above a solid block, pointed dripstone below it and a cauldron beneath the tip. **Leave the completed setup at your base**. You do not need to wait for the cauldron to fill.",
        "gameObjective": "In **Minecraft**, build a small lava collection setup: a contained lava source above a solid block, pointed dripstone below it and a cauldron beneath the tip. **Leave the completed setup at your base**. You do not need to wait for the cauldron to fill."
      },
      "de": {
        "name": "Lava aus dem Tropfstein",
        "objective": "Bau in **Minecraft** eine kleine Lava-Sammelstelle: eine eingefasste Lavaquelle über einem festen Block, spitzen Tropfstein darunter und einen Kessel unter der Spitze. **Lass die fertige Anlage an deiner Basis stehen**. Du musst nicht warten, bis sich der Kessel füllt.",
        "gameObjective": "Bau in **Minecraft** eine kleine Lava-Sammelstelle: eine eingefasste Lavaquelle über einem festen Block, spitzen Tropfstein darunter und einen Kessel unter der Spitze. **Lass die fertige Anlage an deiner Basis stehen**. Du musst nicht warten, bis sich der Kessel füllt."
      }
    },
    "experience": {
      "family": "lava-production",
      "cardMetadata": { "genreIds": ["sandbox", "survival"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["automation"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Pointed dripstone; lava; cauldron",
          "de": "Spitzer Tropfstein; Lava; Kessel",
          "chips": {"en": ["Pointed dripstone", "Lava"], "de": ["Spitzer Tropfstein", "Lava"]},
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
    "gameGenreIds": ["sandbox", "survival"]
  },
  {
    "id": "minecraft-lectern-signal",
    "moodIds": ["curious"],
    "type": "experiment",
    "tags": ["automation"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "minecraft",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Page-Powered Signals",
        "objective": "In **Minecraft**, connect a lectern holding a book through a comparator to a redstone line. **Turn from the first page to the last and compare how far the signal reaches**. Try placing a lamp where only later pages power it.",
        "gameObjective": "In **Minecraft**, connect a lectern holding a book through a comparator to a redstone line. **Turn from the first page to the last and compare how far the signal reaches**. Try placing a lamp where only later pages power it."
      },
      "de": {
        "name": "Mit Seiten schalten",
        "objective": "Verbinde in **Minecraft** ein Lesepult mit Buch über einen Komparator mit einer Redstone-Strecke. **Blättere vom Anfang ans Ende und vergleiche, wie weit das Signal reicht**. Probier aus, wo eine Lampe nur bei späteren Seiten angeht.",
        "gameObjective": "Verbinde in **Minecraft** ein Lesepult mit Buch über einen Komparator mit einer Redstone-Strecke. **Blättere vom Anfang ans Ende und vergleiche, wie weit das Signal reicht**. Probier aus, wo eine Lampe nur bei späteren Seiten angeht."
      }
    },
    "experience": {
      "family": "redstone-signals",
      "cardMetadata": { "genreIds": ["sandbox", "survival"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["automation"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Lesepult, mehrseitiges Buch, Komparator, Redstone und Lampe",
          "en": "Lectern, multi-page book, comparator, redstone and lamp",
          "chips": {"en": ["Lectern", "Comparator"], "de": ["Lesepult", "Komparator"]},
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
    "gameGenreIds": ["sandbox", "survival"]
  },
  {
    "id": "minecraft-allay-delivery",
    "moodIds": ["focused"],
    "type": "objective",
    "tags": ["automation"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "minecraft",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "An Allay's Errand",
        "objective": "If you have an allay, hand it one item and **watch it bring a matching dropped item back to you or a note block**.",
        "gameObjective": "If you have an allay, hand it one item and **watch it bring a matching dropped item back to you or a note block**."
      },
      "de": {
        "name": "Ein Auftrag für den Allay",
        "objective": "Wenn du einen Allay hast, gib ihm einen Gegenstand. **Lass ihn einen passenden gedroppten Gegenstand zu dir oder zu einem Notenblock bringen**.",
        "gameObjective": "Wenn du einen Allay hast, gib ihm einen Gegenstand. **Lass ihn einen passenden gedroppten Gegenstand zu dir oder zu einem Notenblock bringen**."
      }
    },
    "experience": {
      "family": "allay-delivery",
      "cardMetadata": { "genreIds": ["sandbox", "survival"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["automation"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Available allay",
          "de": "Verfügbarer Allay",
          "chips": {"en": ["Allay"], "de": ["Allay"]},
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
    "gameGenreIds": ["sandbox", "survival"]
  }
]);
