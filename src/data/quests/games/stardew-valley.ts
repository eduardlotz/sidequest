import { defineGameQuests } from "../defineGameQuests";

// Inspired by small-day and town-errand ideas from r/StardewValley:
// https://www.reddit.com/r/StardewValley/comments/1tvq6xm/fun_challenge/
// https://www.reddit.com/r/StardewValley/comments/1ukq17k/fun_things_to_do_that_dont_progress_the_community/
export const stardewValleyQuests = defineGameQuests("stardew-valley", [
  {
    id: "one-skill-day",
    moods: ["challenge", "focused"],
    type: "challenge",
    tags: ["new-approach"],
    minutes: 25,
    minimum: 5,
    en: {
      name: "One-Skill Day",
      objective: "In **Stardew Valley**, choose fishing, farming, foraging, or mining when you wake up. Do any urgent animal or crop care, then spend the rest of the day on **only your chosen skill**. Sleep to finish the day.",
    },
    de: {
      name: "Ein Tag, ein Talent",
      objective: "Wähle in **Stardew Valley** nach dem Aufwachen Angeln, Feldarbeit, Sammeln oder Bergbau. Kümmere dich um dringende Tiere und Pflanzen. Verbringe den Rest des Tages **mit dieser einen Tätigkeit** und geh dann schlafen.",
    },
  },
  {
    id: "town-errand",
    moods: ["progress", "curious"],
    type: "objective",
    tags: ["trading", "current-save"],
    minutes: 25,
    minimum: 3,
    en: {
      name: "Town Errand",
      objective: "In **Stardew Valley**, on a day when Pierre’s Help Wanted board has a doable request, **accept and finish that one request** before its deadline.",
    },
    de: {
      name: "Auftrag im Dorf",
      objective: "Wenn in **Stardew Valley** an Pierres Schwarzem Brett ein machbarer Auftrag hängt, **nimm ihn an und erfülle genau diesen Auftrag** vor Ablauf der Frist.",
    },
  },
  {
    id: "themed-corner",
    moods: ["create", "relax"],
    type: "creation",
    tags: ["decorating"],
    minutes: 30,
    minimum: 5,
    en: {
      name: "A Little Corner",
      objective: "In **Stardew Valley**, choose one room or small farm corner. Use furniture and objects you already own to give it **one clear color or theme**, then leave the finished space in place.",
    },
    de: {
      name: "Eine kleine Ecke",
      objective: "Such dir in **Stardew Valley** ein Zimmer oder eine kleine Ecke auf dem Hof aus. **Richte sie mit vorhandenen Möbeln in einer Farbe oder einem Thema ein** und lass den Rest unverändert.",
    },
  },
  {
    id: "market-morning",
    moods: ["low-energy", "progress"],
    type: "objective",
    tags: ["farming", "trading"],
    minutes: 15,
    minimum: 2,
    en: {
      name: "Market Morning",
      objective: "In **Stardew Valley**, on a day with at least two ready crops, harvest them. Keep one crop and **sell the rest through the shipping bin**, then sleep to see the earnings.",
    },
    de: {
      name: "Marktmorgen",
      objective: "Ernte in **Stardew Valley** an einem Tag, an dem mindestens zwei Pflanzen reif sind. Behalte eine und **verkauf den Rest über die Versandkiste**. Geh schlafen und schau dir den Erlös an.",
    },
  },
  {
    id: "sewn-from-the-farm",
    rarity: "special",
    moods: [
      "create",
      "curious"
    ],
    type: "experiment",
    tags: [
      "outfit",
      "crafting"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Farm-Made Shirt",
      objective: "In **Stardew Valley**, with tailoring unlocked, take Cloth and a spare crop from your farm to a sewing machine. **Turn your harvest into clothing and wear it back on the farm**. Check the preview before sewing."
    },
    de: {
      name: "Hemd vom Hof",
      objective: "Bring in **Stardew Valley** mit freigeschaltetem Schneidern Stoff und eine übrige Feldfrucht von deinem Hof zur Nähmaschine. **Mach aus deiner Ernte ein Kleidungsstück und trage es zurück auf den Hof**. Schau vor dem Nähen in die Vorschau."
    }
  },
  {
    id: "pond-room-to-grow",
    moods: [
      "progress",
      "relax"
    ],
    type: "objective",
    tags: [
      "farming"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Room in the Pond",
      objective: "In **Stardew Valley**, if an existing Fish Pond has an item request you can fill from storage, **deliver the requested items and check its new population limit**."
    },
    de: {
      name: "Platz im Teich",
      objective: "**Stardew Valley**: **Erfülle die Bitte eines vorhandenen Fischteichs und prüfe sein neues Bewohnerlimit**, wenn du die gewünschten Gegenstände schon im Lager hast."
    }
  },
  {
    id: "mill-to-kitchen",
    moods: [
      "progress",
      "relax"
    ],
    type: "objective",
    tags: [
      "cooking",
      "farming"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "From Mill to Pan",
      objective: "In **Stardew Valley**, with a mill, kitchen and a known recipe using flour, put stored wheat in the mill. Sleep, collect the flour, and **cook that recipe with it**. Have the other ingredients ready."
    },
    de: {
      name: "Mehl für die Pfanne",
      objective: "**Stardew Valley**: Gib mit vorhandener Mühle und Küche gelagerten Weizen in die Mühle. Schlaf, hol das Mehl ab und **koch damit ein bekanntes Rezept, das Mehl braucht**. Halte die übrigen Zutaten bereit."
    }
  },
  {
    id: "crab-pot-round",
    moods: [
      "low-energy",
      "relax"
    ],
    type: "objective",
    tags: [
      "fishing"
    ],
    minutes: 10,
    minimum: 2,
    en: {
      name: "Check the Pots",
      objective: "In **Stardew Valley**, start with crab pots that already hold a catch. **Empty three pots and bait them again**. Keep whatever they caught. No particular catch is needed."
    },
    de: {
      name: "Reusenrunde",
      objective: "**Stardew Valley**: Starte bei Reusen, die schon einen Fang enthalten. **Leere drei Reusen und bestücke sie wieder mit Ködern**. Behalte ihre Fänge. Eine bestimmte Art brauchst du nicht."
    }
  },
  {
    id: "trash-into-material",
    moods: [
      "curious",
      "progress"
    ],
    type: "objective",
    tags: [
      "crafting"
    ],
    minutes: 10,
    minimum: 2,
    en: {
      name: "Useful Rubbish",
      objective: "In **Stardew Valley**, with a Recycling Machine ready, feed it one recyclable piece of fishing trash from storage. **Collect the finished material and use it in a known crafting recipe**. Have the other materials ready."
    },
    de: {
      name: "Nützlicher Müll",
      objective: "**Stardew Valley**: Gib mit vorhandener Recycling-Maschine ein verwertbares Stück Angelmüll aus dem Lager hinein. **Hol das fertige Material ab und nutze es für ein bekanntes Herstellungsrezept**. Halte die übrigen Materialien bereit."
    }
  },
  {
    id: "seed-maker-restart",
    moods: [
      "curious",
      "progress"
    ],
    type: "objective",
    tags: [
      "farming"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Harvest Becomes Seed",
      objective: "In **Stardew Valley**, with a Seed Maker ready, process a crop whose seeds can grow this season or in your greenhouse. **Plant the seeds that come out**. Leave room for the occasional unexpected seed."
    },
    de: {
      name: "Ernte wird Saat",
      objective: "**Stardew Valley**: Verarbeite mit vorhandener Samenmaschine eine Feldfrucht, deren Saat gerade draußen oder im Gewächshaus wachsen kann. **Pflanze die entstandenen Samen**. Halte auch einen Platz für einen möglichen ungewöhnlichen Samen frei."
    }
  },
  {
    id: "sprinkler-morning-test",
    moods: [
      "create",
      "focused"
    ],
    type: "creation",
    tags: [
      "farming",
      "automation"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Water While You Sleep",
      objective: "In **Stardew Valley**, with a sprinkler and plantable seeds ready, arrange a small crop patch inside its watering range. Sleep and **check that the sprinkler watered every planted tile**. Move it if needed and check again next morning."
    },
    de: {
      name: "Gießen im Schlaf",
      objective: "**Stardew Valley**: Leg mit vorhandenem Sprinkler und pflanzbarer Saat ein kleines Beet in seinem Bewässerungsbereich an. Schlaf und **prüfe, ob jedes bepflanzte Feld bewässert wurde**. Versetze ihn bei Bedarf und prüfe am nächsten Morgen erneut."
    }
  },
  {
    id: "slime-hutch-water",
    moods: [
      "low-energy",
      "overwhelmed"
    ],
    type: "objective",
    tags: [
      "animals"
    ],
    minutes: 10,
    minimum: 2,
    en: {
      name: "Water for the Slimes",
      objective: "In **Stardew Valley**, if your Slime Hutch already has fences keeping the slimes away from its four water troughs, **fill the empty troughs with your watering can**. Stay on the safe side of the fence."
    },
    de: {
      name: "Wasser für die Schleime",
      objective: "**Stardew Valley**: Wenn Zäune die Schleime in deinem Schleimstall schon von den vier Wassertrögen fernhalten, **fülle die leeren Tröge mit der Gießkanne**. Bleib auf der sicheren Seite des Zauns."
    }
  },
  {
    id: "bee-flower-plot",
    moods: [
      "create",
      "relax"
    ],
    type: "creation",
    tags: [
      "farming"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "A Flower for Bees",
      objective: "In **Stardew Valley**, with a Bee House and flower seeds suitable for this season ready, **plant a flower within five tiles in a straight line of the Bee House and leave a clear route to collect honey**. The flower can grow later."
    },
    de: {
      name: "Eine Blume für Bienen",
      objective: "**Stardew Valley**: **Pflanze eine Blume in gerader Linie höchstens fünf Felder von einem Bienenhaus entfernt und halte den Weg zum Honigsammeln frei**. Halte Bienenhaus und passende Blumensaat bereit. Die Blume darf später wachsen."
    }
  },
  {
    id: "beach-bridge-open",
    moods: [
      "progress",
      "explore"
    ],
    type: "objective",
    tags: [
      "exploration"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Beyond the Bridge",
      objective: "In **Stardew Valley**, if the small wooden bridge on the beach is still broken and you have 300 wood, **repair it and walk across to the tide pools**."
    },
    de: {
      name: "Hinter der Brücke",
      objective: "**Stardew Valley**: **Repariere die kleine Holzbrücke am Strand und geh zu den Gezeitentümpeln**, wenn sie noch kaputt ist und du 300 Holz hast."
    }
  },
  {
    id: "spa-after-work",
    moods: [
      "relax",
      "low-energy"
    ],
    type: "objective",
    tags: [
      "current-save"
    ],
    minutes: 10,
    minimum: 2,
    en: {
      name: "Back to Full Energy",
      objective: "In **Stardew Valley**, after spending some energy and with the railroad open, visit the spa. **Stand still in the pool until your energy is full**, then leave through the changing room."
    },
    de: {
      name: "Wieder volle Energie",
      objective: "**Stardew Valley**: Besuche nach etwas Arbeit das Badehaus, wenn die Bahnstrecke offen ist. **Bleib im Becken stehen, bis deine Energie voll ist**, und geh dann durch die Umkleide hinaus."
    }
  },
  {
    id: "secret-note-ground-clue",
    moods: [
      "explore",
      "focused"
    ],
    type: "objective",
    tags: [
      "puzzles",
      "collectibles"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Dig at the Clue",
      objective: "In **Stardew Valley**, with a readable Secret Note that points to a reachable buried object, take a hoe and **follow its clue to dig up the object**. Use the note rather than an online map."
    },
    de: {
      name: "Graben nach Hinweis",
      objective: "**Stardew Valley**: Nimm mit einer lesbaren Geheimnotiz über einen erreichbaren vergrabenen Gegenstand die Hacke mit. **Folge dem Hinweis und grabe den Gegenstand aus**. Nutze die Notiz statt einer Onlinekarte."
    }
  },
  {
    id: "prairie-king-first-stage",
    moods: [
      "challenge",
      "focused"
    ],
    type: "challenge",
    tags: [
      "three-attempts"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Saloon Shootout",
      objective: "In **Stardew Valley**, play Journey of the Prairie King at the saloon. **Clear its first stage without losing a life**, or stop after three runs."
    },
    de: {
      name: "Schießerei im Saloon",
      objective: "**Stardew Valley**: Spiel Reise des Prärie-Königs im Saloon. **Schaffe die erste Stage, ohne ein Leben zu verlieren**, oder hör nach drei Durchgängen auf."
    }
  },
  {
    id: "pirate-cove-darts",
    moods: [
      "challenge",
      "focused"
    ],
    type: "challenge",
    tags: [
      "three-attempts"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "A Round of Darts",
      objective: "In **Stardew Valley**, on a night when pirates are already in your unlocked Pirate Cove, **win one darts game**, or stop after three games."
    },
    de: {
      name: "Eine Runde Darts",
      objective: "**Stardew Valley**: **Gewinne in der freigeschalteten Piratenbucht eine Partie Darts**, oder hör nach drei Partien auf. Starte an einem Abend, an dem die Piraten schon da sind."
    }
  },
  {
    id: "streamside-pan",
    moods: [
      "relax",
      "explore"
    ],
    type: "inspiration",
    tags: [
      "exploration"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Along the Glints",
      objective: "In **Stardew Valley**, with panning unlocked and a pan ready, wander beside the river and look for shimmering spots. Pan when you find one and follow the water wherever it takes you."
    },
    de: {
      name: "Glitzern am Fluss",
      objective: "**Stardew Valley**: Lauf mit freigeschaltetem Goldwaschen und einer Pfanne am Fluss entlang. Achte auf glitzernde Stellen, wasch dort nach Funden und folge dem Wasser, solange du magst."
    }
  },
  {
    id: "pet-bowl-morning",
    moods: [
      "low-energy",
      "overwhelmed"
    ],
    type: "objective",
    tags: [
      "animals"
    ],
    minutes: 5,
    minimum: 2,
    en: {
      name: "Before You Leave",
      objective: "In **Stardew Valley**, on a dry morning with a pet and an empty water bowl, **pet your animal and fill its bowl** before leaving the farm."
    },
    de: {
      name: "Der volle Wassernapf",
      objective: "**Stardew Valley**: **Streichle an einem trockenen Morgen dein Haustier und fülle seinen leeren Wassernapf**, bevor du den Hof verlässt."
    }
  },
  {
    id: "quarry-bomb-test",
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "crafting"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "One Quarry Blast",
      objective: "In **Stardew Valley**, with the quarry unlocked and a bomb ready, choose a cluster of rocks away from anything you want to keep. **Clear it with one bomb and collect the drops**. Compare the cleared area with your usual pickaxe work."
    },
    de: {
      name: "Eine Sprengung im Steinbruch",
      objective: "**Stardew Valley**: Such im freigeschalteten Steinbruch eine Gruppe Steine fern von allem, was bleiben soll. **Sprenge sie mit einer vorhandenen Bombe und sammle die Funde**. Vergleiche die freie Fläche mit deiner üblichen Arbeit mit der Spitzhacke."
    }
  },
  {
    id: "mushroom-log-grove",
    moods: [
      "create",
      "focused"
    ],
    type: "creation",
    tags: [
      "farming"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Logs in the Grove",
      objective: "In **Stardew Valley**, in version 1.6 or later with the Mushroom Log recipe and materials ready, **place two logs among your wild trees and keep both reachable**. Check which tree types surround each. No harvest is needed today."
    },
    de: {
      name: "Stämme im Gehölz",
      objective: "**Stardew Valley**: **Stell ab Version 1.6 zwei Pilzstämme zwischen deine wilden Bäume und halte beide erreichbar**. Halte Rezept und Materialien bereit und prüfe die Baumarten um jeden Stamm. Ernten musst du heute noch nicht."
    }
  },
  {
    id: "smoke-a-catch",
    moods: [
      "progress",
      "relax"
    ],
    type: "objective",
    tags: [
      "fishing",
      "crafting"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Into the Smoker",
      objective: "In **Stardew Valley**, in version 1.6 or later with a Fish Smoker, fish and coal ready, **smoke one fish and collect it**. Compare its displayed sale price with an unsmoked fish of the same kind and quality if you have one."
    },
    de: {
      name: "Ab in den Räucherofen",
      objective: "**Stardew Valley**: **Räuchere ab Version 1.6 einen Fisch und hol ihn ab**, wenn Räucherofen, Fisch und Kohle bereitliegen. Vergleiche den angezeigten Verkaufspreis mit einem ungeräucherten Fisch gleicher Art und Qualität, falls du einen hast."
    }
  },
  {
    id: "raccoon-next-request",
    moods: [
      "progress",
      "curious"
    ],
    type: "objective",
    tags: [
      "trading"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "For the New Neighbors",
      objective: "In **Stardew Valley**, in version 1.6 or later with the raccoon family at the repaired stump, read their current request. If its items are ready in storage, **deliver the whole request and collect the reward**."
    },
    de: {
      name: "Für die neuen Nachbarn",
      objective: "**Stardew Valley**: Lies ab Version 1.6 die aktuelle Bitte der Waschbärfamilie am reparierten Baumstumpf. Wenn alle Gegenstände im Lager bereitliegen, **liefere sie ab und hol die Belohnung**."
    }
  }
]);
