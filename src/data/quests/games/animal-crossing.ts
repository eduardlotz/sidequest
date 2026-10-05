import { defineQuests } from "../defineQuests";

export const GamesAnimalCrossingQuests = defineQuests([
  {
    "id": "animal-crossing-new-horizons-diy-outdoors",
    "moodIds": ["progress", "curious"],
    "type": "objective",
    "tags": ["crafting", "decorating"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "animal-crossing",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Made for Outside",
        "objective": "In **Animal Crossing: New Horizons**, choose a known DIY recipe for furniture you can place outside. Gather any missing materials on your island, **craft the item and place it near your home**.",
        "gameObjective": "In **Animal Crossing: New Horizons**, choose a known DIY recipe for furniture you can place outside. Gather any missing materials on your island, **craft the item and place it near your home**."
      },
      "de": {
        "name": "Für draußen gemacht",
        "objective": "Wähle in **Animal Crossing: New Horizons** eine bekannte Bastelanleitung für ein Möbelstück, das draußen stehen kann. Sammle fehlende Materialien auf deiner Insel, **stell das Stück her und platziere es in der Nähe deines Hauses**.",
        "gameObjective": "Wähle in **Animal Crossing: New Horizons** eine bekannte Bastelanleitung für ein Möbelstück, das draußen stehen kann. Sammle fehlende Materialien auf deiner Insel, **stell das Stück her und platziere es in der Nähe deines Hauses**."
      }
    },
    "experience": {
      "family": "outdoor-diy",
      "cardMetadata": { "genreIds": ["cozy", "simulation"], "playStyleIds": [], "platformIds": ["switch"] },
      "finish": "outcome",
      "activities": ["crafting", "decorating"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Outdoor DIY recipe; accessible materials",
          "de": "Outdoor-Bastelanleitung; erreichbare Materialien",
          "chips": {"en": ["Outdoor DIY recipe"], "de": ["Outdoor-Bastelanleitung"]},
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
    "id": "animal-crossing-new-horizons-path-home",
    "moodIds": ["create", "focused"],
    "type": "creation",
    "tags": ["building", "decorating"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "animal-crossing",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "A Path Home",
        "objective": "Use Island Designer in **Animal Crossing: New Horizons** to connect two nearby places you visit often. **Lay a short path and walk it once**.",
        "gameObjective": "Use Island Designer in **Animal Crossing: New Horizons** to connect two nearby places you visit often. **Lay a short path and walk it once**."
      },
      "de": {
        "name": "Ein Weg nach Hause",
        "objective": "Verbinde in **Animal Crossing: New Horizons** mit der Insel-Designer-App zwei nahe Orte, die du oft besuchst. **Leg einen kurzen Weg an und geh ihn einmal ab**.",
        "gameObjective": "Verbinde in **Animal Crossing: New Horizons** mit der Insel-Designer-App zwei nahe Orte, die du oft besuchst. **Leg einen kurzen Weg an und geh ihn einmal ab**."
      }
    },
    "experience": {
      "family": "path-building",
      "cardMetadata": { "genreIds": ["cozy", "simulation"], "playStyleIds": [], "platformIds": ["switch"] },
      "finish": "outcome",
      "activities": ["building", "decorating"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Island Designer unlocked",
          "de": "Insel-Designer-App freigeschaltet",
          "chips": {"en": ["Island Designer"], "de": ["Insel-Designer-App"]},
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
    "id": "animal-crossing-new-horizons-mystery-island-find",
    "moodIds": ["explore", "curious"],
    "type": "objective",
    "tags": ["exploration", "collectibles"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "animal-crossing",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Island Souvenir",
        "objective": "In **Animal Crossing: New Horizons**, with a house and a Nook Miles Ticket you already have, fly to a mystery island. Explore it, **bring home some materials gathered there, and put them in home storage**.",
        "gameObjective": "In **Animal Crossing: New Horizons**, with a house and a Nook Miles Ticket you already have, fly to a mystery island. Explore it, **bring home some materials gathered there, and put them in home storage**."
      },
      "de": {
        "name": "Souvenir von der Insel",
        "objective": "Wenn du in **Animal Crossing: New Horizons** schon ein Haus und ein Meilenticket hast, flieg auf eine Überraschungsinsel. Erkunde sie, **bring ein paar dort gesammelte Materialien nach Hause und verstaue sie im Haus**.",
        "gameObjective": "Wenn du in **Animal Crossing: New Horizons** schon ein Haus und ein Meilenticket hast, flieg auf eine Überraschungsinsel. Erkunde sie, **bring ein paar dort gesammelte Materialien nach Hause und verstaue sie im Haus**."
      }
    },
    "experience": {
      "family": "island-exploration",
      "cardMetadata": { "genreIds": ["cozy", "simulation"], "playStyleIds": [], "platformIds": ["switch"] },
      "finish": "outcome",
      "activities": ["exploration", "collectibles"],
      "rules": [],
      "prerequisites": [
        {
          "en": "House; owned Nook Miles Ticket",
          "de": "Haus; vorhandenes Meilenticket",
          "chips": {"en": ["House", "Nook Miles Ticket"], "de": ["Haus", "Meilenticket"]},
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
    "id": "animal-crossing-nh-wand-quick-change",
    "moodIds": ["create", "relax"],
    "type": "creation",
    "tags": ["outfit"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "animal-crossing",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Quick Change",
        "objective": "In **Animal Crossing: New Horizons**, with a wand and wardrobe ready, **save two outfits for different parts of island life and switch between them outside**. Use clothes you already own.",
        "gameObjective": "In **Animal Crossing: New Horizons**, with a wand and wardrobe ready, **save two outfits for different parts of island life and switch between them outside**. Use clothes you already own."
      },
      "de": {
        "name": "Schneller Wechsel",
        "objective": "**Animal Crossing: New Horizons**: **Speichere mit vorhandenem Zauberstab und Kleiderschrank zwei Outfits für unterschiedliche Inselaktivitäten und wechsle draußen zwischen ihnen**. Nutze Kleidung, die du schon besitzt.",
        "gameObjective": "**Animal Crossing: New Horizons**: **Speichere mit vorhandenem Zauberstab und Kleiderschrank zwei Outfits für unterschiedliche Inselaktivitäten und wechsle draußen zwischen ihnen**. Nutze Kleidung, die du schon besitzt."
      }
    },
    "experience": {
      "family": "wand-outfits",
      "cardMetadata": { "genreIds": ["cozy", "simulation"], "playStyleIds": [], "platformIds": ["switch"] },
      "finish": "outcome",
      "activities": ["outfit"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Wand, wardrobe and owned clothes",
          "de": "Zauberstab, Kleiderschrank und eigene Kleidung",
          "chips": {"en": ["Wand", "Wardrobe"], "de": ["Zauberstab", "Kleiderschrank"]},
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
    "id": "animal-crossing-nh-own-island-flag",
    "moodIds": ["create", "focused"],
    "type": "creation",
    "tags": ["decorating"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "animal-crossing",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Your Island Flag",
        "objective": "In **Animal Crossing: New Horizons**, with Isabelle at Resident Services, draw a simple symbol in an unused Custom Design slot. **Set it as your island flag and look at it outside the airport**.",
        "gameObjective": "In **Animal Crossing: New Horizons**, with Isabelle at Resident Services, draw a simple symbol in an unused Custom Design slot. **Set it as your island flag and look at it outside the airport**."
      },
      "de": {
        "name": "Deine Inselflagge",
        "objective": "**Animal Crossing: New Horizons**: Zeichne ein einfaches Symbol in einen freien Design-Slot. Wenn Melinda im Servicecenter ist, **stelle es als Inselflagge ein und schau es dir am Flughafen an**.",
        "gameObjective": "**Animal Crossing: New Horizons**: Zeichne ein einfaches Symbol in einen freien Design-Slot. Wenn Melinda im Servicecenter ist, **stelle es als Inselflagge ein und schau es dir am Flughafen an**."
      }
    },
    "experience": {
      "family": "flag-design",
      "cardMetadata": { "genreIds": ["cozy", "simulation"], "playStyleIds": [], "platformIds": ["switch"] },
      "finish": "outcome",
      "activities": ["decorating"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Isabelle at Resident Services; unused design slot",
          "de": "Melinda im Servicecenter; freier Design-Slot",
          "chips": {"en": ["Isabelle", "Design slot"], "de": ["Melinda", "Design-Slot"]},
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
    "id": "animal-crossing-nh-tripod-home-portrait",
    "moodIds": ["create", "relax"],
    "type": "creation",
    "tags": ["photography"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "animal-crossing",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Inside the Picture",
        "objective": "With the Pro Camera App in **Animal Crossing: New Horizons**, set up the tripod in your home. Frame a favorite corner as the background, walk into the shot and **save your portrait**.",
        "gameObjective": "With the Pro Camera App in **Animal Crossing: New Horizons**, set up the tripod in your home. Frame a favorite corner as the background, walk into the shot and **save your portrait**."
      },
      "de": {
        "name": "Mit auf dem Bild",
        "objective": "Stell in **Animal Crossing: New Horizons** mit der Profi-Kamera ein Stativ in deinem Haus auf. Richte einen Lieblingsplatz als Hintergrund ein, geh selbst ins Bild und **speichere dein Porträt**.",
        "gameObjective": "Stell in **Animal Crossing: New Horizons** mit der Profi-Kamera ein Stativ in deinem Haus auf. Richte einen Lieblingsplatz als Hintergrund ein, geh selbst ins Bild und **speichere dein Porträt**."
      }
    },
    "experience": {
      "family": "tripod-photo",
      "cardMetadata": { "genreIds": ["cozy", "simulation"], "playStyleIds": [], "platformIds": ["switch"] },
      "finish": "outcome",
      "activities": ["photography"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Pro Camera App unlocked",
          "de": "Profi-Kamera freigeschaltet",
          "chips": {"en": ["Pro Camera App"], "de": ["Profi-Kamera"]},
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
    "id": "animal-crossing-nh-eight-rock-hits",
    "moodIds": ["challenge", "focused"],
    "type": "challenge",
    "tags": ["three-attempts"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "animal-crossing",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Eight from One Rock",
        "objective": "In **Animal Crossing: New Horizons**, with no fruit energy and an untouched rock, use holes behind you to stop knockback. **Get eight drops from that rock**, or stop after trying three untouched rocks.",
        "gameObjective": "In **Animal Crossing: New Horizons**, with no fruit energy and an untouched rock, use holes behind you to stop knockback. **Get eight drops from that rock**, or stop after trying three untouched rocks."
      },
      "de": {
        "name": "Acht aus einem Stein",
        "objective": "**Animal Crossing: New Horizons**: Stell dich ohne Fruchtenergie an einen heute noch nicht abgeernteten Stein und grabe Löcher gegen den Rückstoß hinter dir. **Hol acht Funde aus einem Stein**, oder hör nach drei unberührten Steinen auf.",
        "gameObjective": "**Animal Crossing: New Horizons**: Stell dich ohne Fruchtenergie an einen heute noch nicht abgeernteten Stein und grabe Löcher gegen den Rückstoß hinter dir. **Hol acht Funde aus einem Stein**, oder hör nach drei unberührten Steinen auf."
      }
    },
    "experience": {
      "family": "rock-harvest",
      "cardMetadata": { "genreIds": ["cozy", "simulation"], "playStyleIds": [], "platformIds": ["switch"] },
      "finish": "attempt",
      "activities": [],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "No fruit energy; untouched rocks",
          "de": "Keine Fruchtenergie; unberührte Steine",
          "chips": {"en": ["No fruit energy", "Rocks"], "de": ["Keine Fruchtenergie", "Steine"]},
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
    "id": "animal-crossing-nh-waterfall-view",
    "moodIds": ["create", "focused"],
    "type": "creation",
    "tags": ["building", "decorating"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "animal-crossing",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Water over the Edge",
        "objective": "In **Animal Crossing: New Horizons**, with cliff and waterscaping permits unlocked, **make one small waterfall and a place below where you can sit facing it**. Keep the work to one existing cliff edge.",
        "gameObjective": "In **Animal Crossing: New Horizons**, with cliff and waterscaping permits unlocked, **make one small waterfall and a place below where you can sit facing it**. Keep the work to one existing cliff edge."
      },
      "de": {
        "name": "Wasser über die Kante",
        "objective": "**Animal Crossing: New Horizons**: **Bau mit freigeschalteter Plateau- und Gewässergestaltung einen kleinen Wasserfall und einen Sitzplatz darunter mit Blick darauf**. Bleib an einer vorhandenen Plateaukante.",
        "gameObjective": "**Animal Crossing: New Horizons**: **Bau mit freigeschalteter Plateau- und Gewässergestaltung einen kleinen Wasserfall und einen Sitzplatz darunter mit Blick darauf**. Bleib an einer vorhandenen Plateaukante."
      }
    },
    "experience": {
      "family": "waterfall",
      "cardMetadata": { "genreIds": ["cozy", "simulation"], "playStyleIds": [], "platformIds": ["switch"] },
      "finish": "outcome",
      "activities": ["building", "decorating"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Plateau- und Gewässergestaltung sowie ein Sitzmöbel",
          "en": "Cliff and waterscaping permits and a seat",
          "chips": {"en": ["Terraforming permits"], "de": ["Gestaltungslizenzen"]},
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
    "gameGenreIds": ["cozy", "simulation"],
    "rarity": "special"
  },
  {
    "id": "animal-crossing-nh-fruit-tree-row",
    "moodIds": ["create", "progress"],
    "type": "creation",
    "tags": ["farming"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "animal-crossing",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "A Harvest Row",
        "objective": "In **Animal Crossing: New Horizons**, with three mature fruit trees, a shovel and fruit to eat, **move the trees into a small orchard with room to walk between them**. Keep each tree at least one tile from trees, cliffs and buildings.",
        "gameObjective": "In **Animal Crossing: New Horizons**, with three mature fruit trees, a shovel and fruit to eat, **move the trees into a small orchard with room to walk between them**. Keep each tree at least one tile from trees, cliffs and buildings."
      },
      "de": {
        "name": "Eine Erntereihe",
        "objective": "**Animal Crossing: New Horizons**: **Versetze drei ausgewachsene Obstbäume in einen kleinen Obstgarten mit begehbaren Zwischenräumen**. Halte Schaufel und Obst zum Essen bereit. Lass zu Bäumen, Plateaus und Gebäuden jeweils mindestens ein Feld Platz.",
        "gameObjective": "**Animal Crossing: New Horizons**: **Versetze drei ausgewachsene Obstbäume in einen kleinen Obstgarten mit begehbaren Zwischenräumen**. Halte Schaufel und Obst zum Essen bereit. Lass zu Bäumen, Plateaus und Gebäuden jeweils mindestens ein Feld Platz."
      }
    },
    "experience": {
      "family": "orchard",
      "cardMetadata": { "genreIds": ["cozy", "simulation"], "playStyleIds": [], "platformIds": ["switch"] },
      "finish": "outcome",
      "activities": ["farming"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Three mature fruit trees; shovel and fruit",
          "de": "Drei ausgewachsene Obstbäume; Schaufel und Obst",
          "chips": {"en": ["Fruit trees", "Shovel"], "de": ["Obstbäume", "Schaufel"]},
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
    "id": "animal-crossing-nh-bait-at-the-pier",
    "moodIds": ["relax", "curious"],
    "type": "objective",
    "tags": ["fishing", "crafting"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "animal-crossing",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Bait by the Pier",
        "objective": "With a shovel and fishing rod, **craft three portions of bait and spend them fishing from the pier**.",
        "gameObjective": "With a shovel and fishing rod, **craft three portions of bait and spend them fishing from the pier**."
      },
      "de": {
        "name": "Köder am Steg",
        "objective": "**Stelle mit Schaufel und Angel drei Fischköder her und nutze sie zum Angeln am Steg**.",
        "gameObjective": "**Stelle mit Schaufel und Angel drei Fischköder her und nutze sie zum Angeln am Steg**."
      }
    },
    "experience": {
      "family": "bait-fishing",
      "cardMetadata": { "genreIds": ["cozy", "simulation"], "playStyleIds": [], "platformIds": ["switch"] },
      "finish": "outcome",
      "activities": ["fishing", "crafting"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Shovel and fishing rod",
          "de": "Schaufel und Angel",
          "chips": {"en": ["Shovel", "Fishing rod"], "de": ["Schaufel", "Angel"]},
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
    "id": "animal-crossing-nh-fossil-outside-museum",
    "moodIds": ["progress", "relax"],
    "type": "objective",
    "tags": ["collectibles", "decorating"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "animal-crossing",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "A Fossil for Outside",
        "objective": "In **Animal Crossing: New Horizons**, with an unassessed fossil ready, ask Blathers to assess it. Donate it if it is missing. Otherwise **display that assessed spare outside the museum**. Finish after donating or placing it.",
        "gameObjective": "In **Animal Crossing: New Horizons**, with an unassessed fossil ready, ask Blathers to assess it. Donate it if it is missing. Otherwise **display that assessed spare outside the museum**. Finish after donating or placing it."
      },
      "de": {
        "name": "Ein Fossil für draußen",
        "objective": "**Animal Crossing: New Horizons**: Lass ein vorhandenes ungeprüftes Fossil von Eugen bestimmen. Spende es, falls es fehlt. Sonst **stelle dieses überzählige Fossil vor dem Museum auf**. Nach der Spende oder dem Aufstellen ist Schluss.",
        "gameObjective": "**Animal Crossing: New Horizons**: Lass ein vorhandenes ungeprüftes Fossil von Eugen bestimmen. Spende es, falls es fehlt. Sonst **stelle dieses überzählige Fossil vor dem Museum auf**. Nach der Spende oder dem Aufstellen ist Schluss."
      }
    },
    "experience": {
      "family": "fossil-display",
      "cardMetadata": { "genreIds": ["cozy", "simulation"], "playStyleIds": [], "platformIds": ["switch"] },
      "finish": "outcome",
      "activities": ["collectibles", "decorating"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Unassessed fossil; museum open",
          "de": "Ungeprüftes Fossil; Museum offen",
          "chips": {"en": ["Fossil", "Museum open"], "de": ["Fossil", "Museum"]},
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
    "id": "animal-crossing-nh-fitting-room-look",
    "moodIds": ["create", "relax"],
    "type": "creation",
    "tags": ["outfit"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "animal-crossing",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "One Color to Wear",
        "objective": "In **Animal Crossing: New Horizons**, while Able Sisters is open and you have Bells to spend, use the fitting room to put together an outfit around one color. **Buy and wear the finished outfit outside**.",
        "gameObjective": "In **Animal Crossing: New Horizons**, while Able Sisters is open and you have Bells to spend, use the fitting room to put together an outfit around one color. **Buy and wear the finished outfit outside**."
      },
      "de": {
        "name": "Eine Farbe zum Anziehen",
        "objective": "**Animal Crossing: New Horizons**: Stell in der Umkleide der geöffneten Schneiderei ein Outfit rund um eine Farbe zusammen. **Kauf es und trag es draußen**. Halte dafür genug Sternis bereit.",
        "gameObjective": "**Animal Crossing: New Horizons**: Stell in der Umkleide der geöffneten Schneiderei ein Outfit rund um eine Farbe zusammen. **Kauf es und trag es draußen**. Halte dafür genug Sternis bereit."
      }
    },
    "experience": {
      "family": "outfit",
      "cardMetadata": { "genreIds": ["cozy", "simulation"], "playStyleIds": [], "platformIds": ["switch"] },
      "finish": "outcome",
      "activities": ["outfit"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Able Sisters open; outfit money",
          "de": "Schneiderei offen; Outfitbudget",
          "chips": {"en": ["Able Sisters"], "de": ["Schneiderei"]},
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
    "id": "animal-crossing-nh-bulletin-island-sketch",
    "moodIds": ["create", "focused"],
    "type": "creation",
    "tags": ["decorating"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "animal-crossing",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "On the Noticeboard",
        "objective": "In **Animal Crossing: New Horizons**, draw a recognizable spot from your island on the bulletin board. **Post the sketch with a short caption**.",
        "gameObjective": "In **Animal Crossing: New Horizons**, draw a recognizable spot from your island on the bulletin board. **Post the sketch with a short caption**."
      },
      "de": {
        "name": "Am Schwarzen Brett",
        "objective": "Zeichne in **Animal Crossing: New Horizons** am Schwarzen Brett eine erkennbare Stelle deiner Insel. **Veröffentliche die Zeichnung mit einer kurzen Beschriftung**.",
        "gameObjective": "Zeichne in **Animal Crossing: New Horizons** am Schwarzen Brett eine erkennbare Stelle deiner Insel. **Veröffentliche die Zeichnung mit einer kurzen Beschriftung**."
      }
    },
    "experience": {
      "family": "bulletin-sketch",
      "cardMetadata": { "genreIds": ["cozy", "simulation"], "playStyleIds": [], "platformIds": ["switch"] },
      "finish": "outcome",
      "activities": ["decorating"],
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
    "id": "animal-crossing-nh-letter-and-present",
    "moodIds": ["low-energy", "relax"],
    "type": "objective",
    "tags": ["dialogue"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "animal-crossing",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Post for a Neighbor",
        "objective": "At the airport card stand in **Animal Crossing: New Horizons**, write a short message to an island resident. Choose something from your supplies that suits them and **send the card with the gift**.",
        "gameObjective": "At the airport card stand in **Animal Crossing: New Horizons**, write a short message to an island resident. Choose something from your supplies that suits them and **send the card with the gift**."
      },
      "de": {
        "name": "Post für den Nachbarn",
        "objective": "Schreib in **Animal Crossing: New Horizons** am Kartenstand im Flughafen einem Inselbewohner eine kurze Nachricht. Such etwas aus deinen Vorräten aus, das zu ihm passt, und **schick die Karte mit dem Geschenk ab**.",
        "gameObjective": "Schreib in **Animal Crossing: New Horizons** am Kartenstand im Flughafen einem Inselbewohner eine kurze Nachricht. Such etwas aus deinen Vorräten aus, das zu ihm passt, und **schick die Karte mit dem Geschenk ab**."
      }
    },
    "experience": {
      "family": "resident-letter",
      "cardMetadata": { "genreIds": ["cozy", "simulation"], "playStyleIds": [], "platformIds": ["switch"] },
      "finish": "outcome",
      "activities": ["dialogue"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Airport card stand; gift and postage",
          "de": "Kartenstand im Flughafen; Geschenk und Porto",
          "chips": {"en": ["Airport card stand", "Gift"], "de": ["Flughafen-Kartenstand", "Geschenk"]},
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
    "id": "animal-crossing-nh-friend-beach-fishing",
    "moodIds": ["connect", "relax"],
    "type": "objective",
    "tags": ["fishing", "co-op"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "animal-crossing",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Compare Your Catch",
        "objective": "In **Animal Crossing: New Horizons**, with a friend already visiting locally or online and both of you holding rods, fish from the same beach. **Each show the other one fish you caught**. Use online play only with Nintendo Switch Online.",
        "gameObjective": "In **Animal Crossing: New Horizons**, with a friend already visiting locally or online and both of you holding rods, fish from the same beach. **Each show the other one fish you caught**. Use online play only with Nintendo Switch Online."
      },
      "de": {
        "name": "Fänge vergleichen",
        "objective": "**Animal Crossing: New Horizons**: Angle mit einem Freund, der bereits lokal oder online zu Besuch ist, am selben Strand. Haltet beide eine Angel bereit und **zeigt euch jeweils einen selbst gefangenen Fisch**. Online braucht ihr Nintendo Switch Online.",
        "gameObjective": "**Animal Crossing: New Horizons**: Angle mit einem Freund, der bereits lokal oder online zu Besuch ist, am selben Strand. Haltet beide eine Angel bereit und **zeigt euch jeweils einen selbst gefangenen Fisch**. Online braucht ihr Nintendo Switch Online."
      }
    },
    "experience": {
      "family": "shared-fishing",
      "cardMetadata": { "genreIds": ["cozy", "simulation"], "playStyleIds": ["co-op"], "platformIds": ["switch"] },
      "finish": "outcome",
      "activities": ["fishing"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Friend visiting; two fishing rods; NSO for online",
          "de": "Freund zu Besuch; zwei Angeln; online NSO",
          "chips": {"en": ["Friend visiting", "Fishing rods"], "de": ["Freund zu Besuch", "Angeln"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "others",
          "participation": "co-op",
          "formation": "none"
        },
        {
          "connection": "online",
          "people": "others",
          "participation": "co-op",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["cozy", "simulation"]
  },
  {
    "id": "animal-crossing-nh-friend-buried-prize",
    "moodIds": ["connect", "curious"],
    "type": "objective",
    "tags": ["co-op", "puzzles"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "animal-crossing",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Buried for a Friend",
        "objective": "In **Animal Crossing: New Horizons**, with a Best Friend already visiting locally or online and a shovel ready for each of you, bury one spare item on a reachable part of your island and give a landmark clue. **Have your friend find it**, adding another clue whenever needed. Online play requires Nintendo Switch Online.",
        "gameObjective": "In **Animal Crossing: New Horizons**, with a Best Friend already visiting locally or online and a shovel ready for each of you, bury one spare item on a reachable part of your island and give a landmark clue. **Have your friend find it**, adding another clue whenever needed. Online play requires Nintendo Switch Online."
      },
      "de": {
        "name": "Für einen Freund vergraben",
        "objective": "**Animal Crossing: New Horizons**: Vergrabe mit einem bereits lokal oder online anwesenden besten Freund und je einer Schaufel einen übrigen Gegenstand an einer erreichbaren Stelle. Gib einen Hinweis mit einer Landmarke und **lass deinen Freund den Gegenstand finden**. Gib bei Bedarf weitere Hinweise. Online braucht ihr Nintendo Switch Online.",
        "gameObjective": "**Animal Crossing: New Horizons**: Vergrabe mit einem bereits lokal oder online anwesenden besten Freund und je einer Schaufel einen übrigen Gegenstand an einer erreichbaren Stelle. Gib einen Hinweis mit einer Landmarke und **lass deinen Freund den Gegenstand finden**. Gib bei Bedarf weitere Hinweise. Online braucht ihr Nintendo Switch Online."
      }
    },
    "experience": {
      "family": "treasure-clue",
      "cardMetadata": { "genreIds": ["cozy", "simulation"], "playStyleIds": ["co-op"], "platformIds": ["switch"] },
      "finish": "outcome",
      "activities": ["puzzles"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Best Friend visiting; two shovels; spare item; NSO online",
          "de": "Bester Freund zu Besuch; zwei Schaufeln; Gegenstand; online NSO",
          "chips": {"en": ["Friend visiting", "Shovels"], "de": ["Freund zu Besuch", "Schaufeln"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "others",
          "participation": "co-op",
          "formation": "none"
        },
        {
          "connection": "online",
          "people": "others",
          "participation": "co-op",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["cozy", "simulation"]
  },
  {
    "id": "animal-crossing-nh-workbench-storage-stop",
    "moodIds": ["create", "progress"],
    "type": "creation",
    "tags": ["crafting", "decorating"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "animal-crossing",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Supplies within Reach",
        "objective": "In **Animal Crossing: New Horizons**, with a storage shed or wooden storage shed already owned, **place it beside your outdoor workbench and use it to fetch materials for one known DIY**. Craft the item without going into your house.",
        "gameObjective": "In **Animal Crossing: New Horizons**, with a storage shed or wooden storage shed already owned, **place it beside your outdoor workbench and use it to fetch materials for one known DIY**. Craft the item without going into your house."
      },
      "de": {
        "name": "Vorräte in Reichweite",
        "objective": "**Animal Crossing: New Horizons**: **Stell einen vorhandenen Lagerschrank neben deine Werkbank draußen und hol daraus Material für eine bekannte Bastelanleitung**. Bastle den Gegenstand, ohne ins Haus zu gehen.",
        "gameObjective": "**Animal Crossing: New Horizons**: **Stell einen vorhandenen Lagerschrank neben deine Werkbank draußen und hol daraus Material für eine bekannte Bastelanleitung**. Bastle den Gegenstand, ohne ins Haus zu gehen."
      }
    },
    "experience": {
      "family": "outdoor-workbench",
      "cardMetadata": { "genreIds": ["cozy", "simulation"], "playStyleIds": [], "platformIds": ["switch"] },
      "finish": "outcome",
      "activities": ["crafting", "decorating"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Owned storage shed; outdoor workbench; DIY materials",
          "de": "Eigener Lagerschrank; Außenwerkbank; Bastelmaterial",
          "chips": {"en": ["Storage shed", "Outdoor workbench"], "de": ["Lagerschrank", "Außenwerkbank"]},
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
    "id": "animal-crossing-nh-grow-to-the-stove",
    "moodIds": ["progress", "relax"],
    "type": "objective",
    "tags": ["farming", "cooking"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "animal-crossing",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Garden Lunch",
        "objective": "In **Animal Crossing: New Horizons**, with cooking unlocked, a kitchen and a known vegetable recipe ready, **harvest its needed vegetables, cook the dish and place it on a table**. Start with ripe crops and the other ingredients already owned.",
        "gameObjective": "In **Animal Crossing: New Horizons**, with cooking unlocked, a kitchen and a known vegetable recipe ready, **harvest its needed vegetables, cook the dish and place it on a table**. Start with ripe crops and the other ingredients already owned."
      },
      "de": {
        "name": "Mittagessen aus dem Garten",
        "objective": "**Animal Crossing: New Horizons**: **Ernte für ein bekanntes Gemüserezept, koch das Gericht und stell es auf einen Tisch**. Starte mit freigeschaltetem Kochen, einer Küche, reifen Pflanzen und den übrigen Zutaten im Vorrat.",
        "gameObjective": "**Animal Crossing: New Horizons**: **Ernte für ein bekanntes Gemüserezept, koch das Gericht und stell es auf einen Tisch**. Starte mit freigeschaltetem Kochen, einer Küche, reifen Pflanzen und den übrigen Zutaten im Vorrat."
      }
    },
    "experience": {
      "family": "garden-cooking",
      "cardMetadata": { "genreIds": ["cozy", "simulation"], "playStyleIds": [], "platformIds": ["switch"] },
      "finish": "outcome",
      "activities": ["farming", "cooking"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Cooking unlocked; kitchen, ripe vegetables and ingredients",
          "de": "Kochen freigeschaltet; Küche, reifes Gemüse und Zutaten",
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
        }
      ]
    },
    "gameGenreIds": ["cozy", "simulation"]
  },
  {
    "id": "animal-crossing-nh-hhp-client-home",
    "moodIds": ["create", "focused"],
    "type": "creation",
    "tags": ["decorating"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "universal": false,
    "curated": {
      "gameId": "animal-crossing",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Built for the Client",
        "objective": "In **Animal Crossing: New Horizons**, with **Happy Home Paradise DLC** and vacation-home work unlocked, choose one client on the beach. Use their required furniture and **finish a small vacation home that fits their request**.",
        "gameObjective": "In **Animal Crossing: New Horizons**, with **Happy Home Paradise DLC** and vacation-home work unlocked, choose one client on the beach. Use their required furniture and **finish a small vacation home that fits their request**."
      },
      "de": {
        "name": "Für den Kunden gebaut",
        "objective": "**Animal Crossing: New Horizons**: Such mit **Happy Home Paradise DLC** und freigeschalteter Ferienhausarbeit einen Kunden am Strand. Nutze seine Pflichtmöbel und **stelle ein kleines Ferienhaus passend zu seinem Wunsch fertig**.",
        "gameObjective": "**Animal Crossing: New Horizons**: Such mit **Happy Home Paradise DLC** und freigeschalteter Ferienhausarbeit einen Kunden am Strand. Nutze seine Pflichtmöbel und **stelle ein kleines Ferienhaus passend zu seinem Wunsch fertig**."
      }
    },
    "experience": {
      "family": "vacation-home",
      "cardMetadata": { "genreIds": ["cozy", "simulation"], "playStyleIds": [], "platformIds": ["switch"] },
      "finish": "outcome",
      "activities": ["decorating"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Happy Home Paradise DLC; vacation-home work unlocked",
          "de": "Happy Home Paradise DLC; Ferienhausarbeit freigeschaltet",
          "chips": {"en": ["Happy Home Paradise"], "de": ["Happy Home Paradise"]},
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
    "gameGenreIds": ["cozy", "simulation"],
    "rarity": "special"
  },
  {
    "id": "animal-crossing-nh-sell-owned-turnips",
    "moodIds": ["progress", "low-energy"],
    "type": "objective",
    "tags": ["trading"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "animal-crossing",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Turnips Before Sunday",
        "objective": "Ask for today’s turnip price at open Nook’s Cranny in **Animal Crossing: New Horizons**. **Sell one stack of your turnips before they spoil on Sunday**. A profit is not required.",
        "gameObjective": "Ask for today’s turnip price at open Nook’s Cranny in **Animal Crossing: New Horizons**. **Sell one stack of your turnips before they spoil on Sunday**. A profit is not required."
      },
      "de": {
        "name": "Rüben vor Sonntag",
        "objective": "Frag in **Animal Crossing: New Horizons** im geöffneten Laden nach dem heutigen Rübenpreis. **Verkauf einen Stapel deiner Rüben, bevor sie am Sonntag verderben**. Gewinn ist kein Muss.",
        "gameObjective": "Frag in **Animal Crossing: New Horizons** im geöffneten Laden nach dem heutigen Rübenpreis. **Verkauf einen Stapel deiner Rüben, bevor sie am Sonntag verderben**. Gewinn ist kein Muss."
      }
    },
    "experience": {
      "family": "turnip-sale",
      "cardMetadata": { "genreIds": ["cozy", "simulation"], "playStyleIds": [], "platformIds": ["switch"] },
      "finish": "outcome",
      "activities": ["trading"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Owned turnips; shop open before Sunday",
          "de": "Eigene Rüben; Laden vor Sonntag offen",
          "chips": {"en": ["Turnips"], "de": ["Rüben"]},
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
    "id": "animal-crossing-nh-old-home-tour",
    "moodIds": ["nostalgic", "relax"],
    "type": "inspiration",
    "tags": ["current-save", "decorating"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "animal-crossing",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "The House You Kept",
        "objective": "In Animal Crossing: New Horizons, return to a save you have not visited for a while and walk through your home. **Look at the furniture you kept**, try the chairs and music players, and spend time with the choices you made back then.",
        "gameObjective": "In Animal Crossing: New Horizons, return to a save you have not visited for a while and walk through your home. **Look at the furniture you kept**, try the chairs and music players, and spend time with the choices you made back then."
      },
      "de": {
        "name": "Das Haus von damals",
        "objective": "Animal Crossing: New Horizons: Kehre zu einem länger nicht besuchten Spielstand zurück und geh durch dein Haus. **Schau deine alten Möbel an**, probiere Sitzplätze und Musikspieler aus und verbringe Zeit mit deinen Entscheidungen von damals.",
        "gameObjective": "Animal Crossing: New Horizons: Kehre zu einem länger nicht besuchten Spielstand zurück und geh durch dein Haus. **Schau deine alten Möbel an**, probiere Sitzplätze und Musikspieler aus und verbringe Zeit mit deinen Entscheidungen von damals."
      }
    },
    "experience": {
      "family": "familiar-home",
      "cardMetadata": { "genreIds": ["cozy", "simulation"], "playStyleIds": [], "platformIds": ["switch"] },
      "finish": "open",
      "activities": ["decorating"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Familiar older save and home",
          "de": "Vertrauter älterer Spielstand und Haus",
          "chips": {"en": ["Old save"], "de": ["Alter Spielstand"]},
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
    "id": "animal-crossing-nh-plaza-stretching",
    "moodIds": ["relax", "overwhelmed"],
    "type": "objective",
    "tags": ["rhythm"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "animal-crossing",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Stretch at the Plaza",
        "objective": "In **Animal Crossing: New Horizons**, use the radio outside Resident Services and choose button controls. **Join one complete group-stretching session**. Missed inputs are fine.",
        "gameObjective": "In **Animal Crossing: New Horizons**, use the radio outside Resident Services and choose button controls. **Join one complete group-stretching session**. Missed inputs are fine."
      },
      "de": {
        "name": "Dehnen am Festplatz",
        "objective": "**Animal Crossing: New Horizons**: Starte am Radio vor dem Servicecenter die Gruppengymnastik mit Tastensteuerung. **Mach eine ganze Einheit mit**. Verpasste Eingaben sind okay.",
        "gameObjective": "**Animal Crossing: New Horizons**: Starte am Radio vor dem Servicecenter die Gruppengymnastik mit Tastensteuerung. **Mach eine ganze Einheit mit**. Verpasste Eingaben sind okay."
      }
    },
    "experience": {
      "family": "stretching",
      "cardMetadata": { "genreIds": ["cozy", "simulation"], "playStyleIds": [], "platformIds": ["switch"] },
      "finish": "outcome",
      "activities": ["rhythm"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Group-stretching radio available",
          "de": "Radio für Gruppengymnastik verfügbar",
          "chips": {"en": ["Stretching radio"], "de": ["Gymnastik-Radio"]},
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
    "id": "animal-crossing-nh-label-fashion-request",
    "moodIds": ["curious", "create"],
    "type": "experiment",
    "tags": ["outfit"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "animal-crossing",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Dress for the Theme",
        "objective": "In **Animal Crossing: New Horizons**, when Label is already on the plaza, hear her clothing theme. Use her sample and clothes you own to **put together a look and ask her to judge it**. Any verdict counts.",
        "gameObjective": "In **Animal Crossing: New Horizons**, when Label is already on the plaza, hear her clothing theme. Use her sample and clothes you own to **put together a look and ask her to judge it**. Any verdict counts."
      },
      "de": {
        "name": "Passend zum Thema",
        "objective": "**Animal Crossing: New Horizons**: Hör dir das Kleiderthema von Minna an, wenn sie bereits am Festplatz steht. Nutze ihr Musterstück und eigene Kleidung, um **ein Outfit zusammenzustellen und bewerten zu lassen**. Jede Bewertung zählt.",
        "gameObjective": "**Animal Crossing: New Horizons**: Hör dir das Kleiderthema von Minna an, wenn sie bereits am Festplatz steht. Nutze ihr Musterstück und eigene Kleidung, um **ein Outfit zusammenzustellen und bewerten zu lassen**. Jede Bewertung zählt."
      }
    },
    "experience": {
      "family": "outfit-test",
      "cardMetadata": { "genreIds": ["cozy", "simulation"], "playStyleIds": [], "platformIds": ["switch"] },
      "finish": "attempt",
      "activities": ["outfit"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Label present; owned clothes",
          "de": "Minna anwesend; eigene Kleidung",
          "chips": {"en": ["Label"], "de": ["Minna"]},
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
    "id": "animal-crossing-nh-gyroid-garden",
    "moodIds": ["create"],
    "type": "creation",
    "tags": ["decorating"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "animal-crossing",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "A Little Gyroid Band",
        "objective": "Once gyroids are available, **place two different gyroids together and change the music near them** to hear their rhythm join in.",
        "gameObjective": "Once gyroids are available, **place two different gyroids together and change the music near them** to hear their rhythm join in."
      },
      "de": {
        "name": "Eine kleine Gyroid-Band",
        "objective": "Sobald du Gyroide hast, **stelle zwei verschiedene zusammen und wechsle die Musik in ihrer Nähe**. Hör zu, wie sie mitspielen.",
        "gameObjective": "Sobald du Gyroide hast, **stelle zwei verschiedene zusammen und wechsle die Musik in ihrer Nähe**. Hör zu, wie sie mitspielen."
      }
    },
    "experience": {
      "family": "gyroid-music",
      "cardMetadata": { "genreIds": ["cozy", "simulation"], "playStyleIds": [], "platformIds": ["switch"] },
      "finish": "outcome",
      "activities": ["decorating"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Two gyroids and music player",
          "de": "Zwei Gyroide und Musikspieler",
          "chips": {"en": ["Gyroids", "Music player"], "de": ["Gyroide", "Musikspieler"]},
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
    "id": "animal-crossing-nh-kappn-souvenir",
    "moodIds": ["explore"],
    "type": "inspiration",
    "tags": ["exploration"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "animal-crossing",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Kapp’n’s Boat Tour",
        "objective": "With Kapp’n available in Animal Crossing: New Horizons, **take a boat tour and explore the island** he brings you to. Follow its shoreline and see what differs from home.",
        "gameObjective": "With Kapp’n available in Animal Crossing: New Horizons, **take a boat tour and explore the island** he brings you to. Follow its shoreline and see what differs from home."
      },
      "de": {
        "name": "Mit Käpten hinaus",
        "objective": "Mach in Animal Crossing: New Horizons mit verfügbarem Käpten eine Bootstour und **erkunde die Insel, zu der er dich bringt**. Folge ihrem Ufer und schau, was anders ist als zu Hause.",
        "gameObjective": "Mach in Animal Crossing: New Horizons mit verfügbarem Käpten eine Bootstour und **erkunde die Insel, zu der er dich bringt**. Folge ihrem Ufer und schau, was anders ist als zu Hause."
      }
    },
    "experience": {
      "family": "boat-exploration",
      "cardMetadata": { "genreIds": ["cozy", "simulation"], "playStyleIds": [], "platformIds": ["switch"] },
      "finish": "open",
      "activities": ["exploration"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Kapp’n available; boat-tour miles",
          "de": "Käpten verfügbar; Meilen für die Bootstour",
          "chips": {"en": ["Kapp'n"], "de": ["Käpten"]},
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
    "id": "animal-crossing-nh-harvs-custom",
    "moodIds": ["create"],
    "type": "creation",
    "tags": ["decorating"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "animal-crossing",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Cyrus's Second Look",
        "objective": "If Reese and Cyrus's stall is open on Harv's Island, **have Cyrus customize one piece of furniture, then place it at home**.",
        "gameObjective": "If Reese and Cyrus's stall is open on Harv's Island, **have Cyrus customize one piece of furniture, then place it at home**."
      },
      "de": {
        "name": "Ein neuer Look von Björn",
        "objective": "Wenn Rosina und Björn auf Harveys Insel ihren Laden haben, **lass ein Möbelstück umgestalten und stell es daheim auf**.",
        "gameObjective": "Wenn Rosina und Björn auf Harveys Insel ihren Laden haben, **lass ein Möbelstück umgestalten und stell es daheim auf**."
      }
    },
    "experience": {
      "family": "furniture-customization",
      "cardMetadata": { "genreIds": ["cozy", "simulation"], "playStyleIds": [], "platformIds": ["switch"] },
      "finish": "outcome",
      "activities": ["decorating"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Reese and Cyrus unlocked; furniture and fee",
          "de": "Rosina und Björn freigeschaltet; Möbelstück und Gebühr",
          "chips": {"en": ["Reese and Cyrus"], "de": ["Rosina und Björn"]},
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
    "id": "animal-crossing-nh-brewster-regular",
    "moodIds": ["relax"],
    "type": "inspiration",
    "tags": ["dialogue"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "animal-crossing",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Coffee and Company",
        "objective": "With Brewster’s café open in Animal Crossing: New Horizons, **take a seat for coffee**. Enjoy the café and talk to anyone who happens to be visiting.",
        "gameObjective": "With Brewster’s café open in Animal Crossing: New Horizons, **take a seat for coffee**. Enjoy the café and talk to anyone who happens to be visiting."
      },
      "de": {
        "name": "Kaffee mit Gesellschaft",
        "objective": "Nimm in Animal Crossing: New Horizons bei geöffnetem Café von Kofi Platz für einen Kaffee. **Genieß das Café und sprich mit Gästen**, die gerade da sind.",
        "gameObjective": "Nimm in Animal Crossing: New Horizons bei geöffnetem Café von Kofi Platz für einen Kaffee. **Genieß das Café und sprich mit Gästen**, die gerade da sind."
      }
    },
    "experience": {
      "family": "cafe",
      "cardMetadata": { "genreIds": ["cozy", "simulation"], "playStyleIds": [], "platformIds": ["switch"] },
      "finish": "open",
      "activities": ["dialogue"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Brewster’s café unlocked; coffee money",
          "de": "Kofis Café freigeschaltet; Geld für Kaffee",
          "chips": {"en": ["Brewster's café"], "de": ["Kofis Café"]},
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
    "id": "animal-crossing-nh-dream-detail",
    "moodIds": ["curious"],
    "type": "experiment",
    "tags": ["exploration", "decorating"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "animal-crossing",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "A Dream to Borrow From",
        "objective": "If dreaming is unlocked, visit an unfamiliar dream island, **recreate one small layout idea at home, and compare your version with what you saw**.",
        "gameObjective": "If dreaming is unlocked, visit an unfamiliar dream island, **recreate one small layout idea at home, and compare your version with what you saw**."
      },
      "de": {
        "name": "Eine Idee aus dem Traum",
        "objective": "Wenn Schlummern freigeschaltet ist, besuche eine fremde Trauminsel, **baue eine kleine Gestaltungsidee zu Hause nach und vergleiche deine Version mit dem Vorbild**.",
        "gameObjective": "Wenn Schlummern freigeschaltet ist, besuche eine fremde Trauminsel, **baue eine kleine Gestaltungsidee zu Hause nach und vergleiche deine Version mit dem Vorbild**."
      }
    },
    "experience": {
      "family": "dream-design",
      "cardMetadata": { "genreIds": ["cozy", "simulation"], "playStyleIds": [], "platformIds": ["switch"] },
      "finish": "attempt",
      "activities": ["exploration", "decorating"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Dreaming unlocked; Nintendo Switch Online; building supplies",
          "de": "Schlummern freigeschaltet; Nintendo Switch Online; Baumaterial",
          "chips": {"en": ["Dreaming"], "de": ["Schlummern"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["cozy", "simulation"]
  },
  {
    "id": "animal-crossing-nh-sea-creature",
    "moodIds": ["explore"],
    "type": "objective",
    "tags": ["diving"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "animal-crossing",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Shadow Under the Waves",
        "objective": "Put on your wetsuit in **Animal Crossing: New Horizons**. Follow a trail of bubbles offshore, dive toward its shadow and **catch the sea creature**. Take it to Blathers if the museum is missing it.",
        "gameObjective": "Put on your wetsuit in **Animal Crossing: New Horizons**. Follow a trail of bubbles offshore, dive toward its shadow and **catch the sea creature**. Take it to Blathers if the museum is missing it."
      },
      "de": {
        "name": "Schatten unter Wasser",
        "objective": "Zieh in **Animal Crossing: New Horizons** deinen Taucheranzug an. Folge draußen einer Spur aus Luftblasen, tauch zum Schatten hinunter und **fang das Meerestier**. Falls es dem Museum noch fehlt, bring es Eugen.",
        "gameObjective": "Zieh in **Animal Crossing: New Horizons** deinen Taucheranzug an. Folge draußen einer Spur aus Luftblasen, tauch zum Schatten hinunter und **fang das Meerestier**. Falls es dem Museum noch fehlt, bring es Eugen."
      }
    },
    "experience": {
      "family": "sea-donation",
      "cardMetadata": { "genreIds": ["cozy", "simulation"], "playStyleIds": [], "platformIds": ["switch"] },
      "finish": "outcome",
      "activities": ["diving"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Taucheranzug und erreichbares Meer",
          "en": "Wetsuit and accessible sea",
          "chips": {"en": ["Wetsuit"], "de": ["Taucheranzug"]},
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
    "id": "animal-crossing-nh-island-tune",
    "moodIds": ["create"],
    "type": "creation",
    "tags": ["rhythm"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "animal-crossing",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "An Island Tune",
        "objective": "At Resident Services, **change the island tune, then talk to a resident to hear it in use**.",
        "gameObjective": "At Resident Services, **change the island tune, then talk to a resident to hear it in use**."
      },
      "de": {
        "name": "Eine Inselmelodie",
        "objective": "Ändere im Servicecenter **die Inselmelodie und sprich danach mit einem Bewohner**, um sie zu hören.",
        "gameObjective": "Ändere im Servicecenter **die Inselmelodie und sprich danach mit einem Bewohner**, um sie zu hören."
      }
    },
    "experience": {
      "family": "island-music",
      "cardMetadata": { "genreIds": ["cozy", "simulation"], "playStyleIds": [], "platformIds": ["switch"] },
      "finish": "outcome",
      "activities": ["rhythm"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Isabelle available at Resident Services",
          "de": "Melinda im Servicecenter verfügbar",
          "chips": {"en": ["Isabelle"], "de": ["Melinda"]},
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
