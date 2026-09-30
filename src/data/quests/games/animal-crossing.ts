import { defineGameQuests } from "../defineGameQuests";

export const animalCrossingQuests = defineGameQuests("animal-crossing", [
  {
    id: "new-horizons-diy-outdoors",
    moods: ["progress", "curious"],
    type: "objective",
    tags: ["crafting", "decorating"],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Made for Outside",
      objective: "In **Animal Crossing: New Horizons**, choose a known DIY recipe for furniture you can place outside. Gather any missing materials on your island, **craft the item and place it near your home**.",
    },
    de: {
      name: "Für draußen gemacht",
      objective: "Wähle in **Animal Crossing: New Horizons** eine bekannte Bastelanleitung für ein Möbelstück, das draußen stehen kann. Sammle fehlende Materialien auf deiner Insel, **stell das Stück her und platziere es in der Nähe deines Hauses**.",
    },
  },
  {
    id: "new-horizons-path-home",
    moods: ["create", "focused"],
    type: "creation",
    tags: ["building", "decorating"],
    minutes: 25,
    minimum: 5,
    en: {
      name: "A Path Home",
      objective: "In **Animal Crossing: New Horizons**, with Island Designer unlocked, pick two nearby places you visit often. **Lay a path connecting them and walk its full length**. Keep the route short enough to finish in one session.",
    },
    de: {
      name: "Ein Weg nach Hause",
      objective: "Wähle in **Animal Crossing: New Horizons** mit freigeschalteter Insel-Designer-App zwei nahe Orte, die du oft besuchst. **Verlege einen Weg zwischen ihnen und geh ihn komplett ab**. Halte die Strecke kurz genug für eine Sitzung.",
    },
  },
  {
    id: "new-horizons-mystery-island-find",
    moods: ["explore", "curious"],
    type: "objective",
    tags: ["exploration", "collectibles"],
    minutes: 25,
    minimum: 5,
    en: {
      name: "Island Souvenir",
      objective: "In **Animal Crossing: New Horizons**, with a house and a Nook Miles Ticket you already have, fly to a mystery island. Explore it, **bring home some materials gathered there, and put them in home storage**.",
    },
    de: {
      name: "Souvenir von der Insel",
      objective: "Wenn du in **Animal Crossing: New Horizons** schon ein Haus und ein Meilenticket hast, flieg auf eine Überraschungsinsel. Erkunde sie, **bring ein paar dort gesammelte Materialien nach Hause und verstaue sie im Haus**.",
    },
  },
  {
    id: "nh-wand-quick-change",
    moods: [
      "create",
      "relax"
    ],
    type: "creation",
    tags: [
      "outfit"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Quick Change",
      objective: "In **Animal Crossing: New Horizons**, with a wand and wardrobe ready, **save two outfits for different parts of island life and switch between them outside**. Use clothes you already own."
    },
    de: {
      name: "Schneller Wechsel",
      objective: "**Animal Crossing: New Horizons**: **Speichere mit vorhandenem Zauberstab und Kleiderschrank zwei Outfits für unterschiedliche Inselaktivitäten und wechsle draußen zwischen ihnen**. Nutze Kleidung, die du schon besitzt."
    }
  },
  {
    id: "nh-own-island-flag",
    moods: [
      "create",
      "focused"
    ],
    type: "creation",
    tags: [
      "decorating"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Your Island Flag",
      objective: "In **Animal Crossing: New Horizons**, with Isabelle at Resident Services, draw a simple symbol in an unused Custom Design slot. **Set it as your island flag and look at it outside the airport**."
    },
    de: {
      name: "Deine Inselflagge",
      objective: "**Animal Crossing: New Horizons**: Zeichne ein einfaches Symbol in einen freien Design-Slot. Wenn Melinda im Servicecenter ist, **stelle es als Inselflagge ein und schau es dir am Flughafen an**."
    }
  },
  {
    id: "nh-tripod-home-portrait",
    moods: [
      "create",
      "relax"
    ],
    type: "creation",
    tags: [
      "photography"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Inside the Picture",
      objective: "In **Animal Crossing: New Horizons**, with the Pro Camera App unlocked, put the camera on its tripod inside your home. **Walk into the frame and save a photo using an angle you cannot get while holding the camera**."
    },
    de: {
      name: "Mit auf dem Bild",
      objective: "**Animal Crossing: New Horizons**: Stell mit freigeschalteter Profi-Kamera die Kamera in deinem Haus auf ihr Stativ. **Geh selbst ins Bild und speichere ein Foto aus einem Blickwinkel, den du mit gehaltener Kamera nicht bekommst**."
    }
  },
  {
    id: "nh-eight-rock-hits",
    moods: [
      "challenge",
      "focused"
    ],
    type: "challenge",
    tags: [
      "three-attempts"
    ],
    minutes: 10,
    minimum: 2,
    en: {
      name: "Eight from One Rock",
      objective: "In **Animal Crossing: New Horizons**, with no fruit energy and an untouched rock, use holes behind you to stop knockback. **Get eight drops from that rock**, or stop after trying three untouched rocks."
    },
    de: {
      name: "Acht aus einem Stein",
      objective: "**Animal Crossing: New Horizons**: Stell dich ohne Fruchtenergie an einen heute noch nicht abgeernteten Stein und grabe Löcher gegen den Rückstoß hinter dir. **Hol acht Funde aus einem Stein**, oder hör nach drei unberührten Steinen auf."
    }
  },
  {
    id: "nh-waterfall-view",
    moods: [
      "create",
      "focused"
    ],
    type: "creation",
    tags: [
      "building"
    ],
    minutes: 25,
    minimum: 5,
    en: {
      name: "Water over the Edge",
      objective: "In **Animal Crossing: New Horizons**, with cliff and waterscaping permits unlocked, **make one small waterfall and a place below where you can sit facing it**. Keep the work to one existing cliff edge."
    },
    de: {
      name: "Wasser über die Kante",
      objective: "**Animal Crossing: New Horizons**: **Bau mit freigeschalteter Plateau- und Gewässergestaltung einen kleinen Wasserfall und einen Sitzplatz darunter mit Blick darauf**. Bleib an einer vorhandenen Plateaukante."
    }
  },
  {
    id: "nh-fruit-tree-row",
    moods: [
      "create",
      "progress"
    ],
    type: "creation",
    tags: [
      "farming"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "A Harvest Row",
      objective: "In **Animal Crossing: New Horizons**, with three mature fruit trees, a shovel and fruit to eat, **move the trees into a small orchard with room to walk between them**. Keep each tree at least one tile from trees, cliffs and buildings."
    },
    de: {
      name: "Eine Erntereihe",
      objective: "**Animal Crossing: New Horizons**: **Versetze drei ausgewachsene Obstbäume in einen kleinen Obstgarten mit begehbaren Zwischenräumen**. Halte Schaufel und Obst zum Essen bereit. Lass zu Bäumen, Plateaus und Gebäuden jeweils mindestens ein Feld Platz."
    }
  },
  {
    id: "nh-bait-at-the-pier",
    moods: [
      "relax",
      "curious"
    ],
    type: "objective",
    tags: [
      "fishing",
      "crafting"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Bait by the Pier",
      objective: "In **Animal Crossing: New Horizons**, with a shovel and fishing rod ready, dig up three manila clams and craft them into bait. **Use all three at the pier and try to catch each fish they attract**. Any catch or missed bite counts."
    },
    de: {
      name: "Köder am Steg",
      objective: "**Animal Crossing: New Horizons**: Grabe mit vorhandener Schaufel drei Teppichmuscheln aus und bastle daraus Köder. **Nutze alle drei am Steg und versuch, die angelockten Fische zu fangen**. Auch ein verpasster Biss zählt. Halte eine Angel bereit."
    }
  },
  {
    id: "nh-fossil-outside-museum",
    moods: [
      "progress",
      "relax"
    ],
    type: "objective",
    tags: [
      "collectibles",
      "decorating"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "A Fossil for Outside",
      objective: "In **Animal Crossing: New Horizons**, with an unassessed fossil ready, ask Blathers to assess it. Donate it if it is missing. Otherwise **display that assessed spare outside the museum**. Finish after donating or placing it."
    },
    de: {
      name: "Ein Fossil für draußen",
      objective: "**Animal Crossing: New Horizons**: Lass ein vorhandenes ungeprüftes Fossil von Eugen bestimmen. Spende es, falls es fehlt. Sonst **stelle dieses überzählige Fossil vor dem Museum auf**. Nach der Spende oder dem Aufstellen ist Schluss."
    }
  },
  {
    id: "nh-fitting-room-look",
    moods: [
      "create",
      "relax"
    ],
    type: "creation",
    tags: [
      "outfit"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "One Color to Wear",
      objective: "In **Animal Crossing: New Horizons**, while Able Sisters is open and you have Bells to spend, use the fitting room to put together an outfit around one color. **Buy and wear the finished outfit outside**."
    },
    de: {
      name: "Eine Farbe zum Anziehen",
      objective: "**Animal Crossing: New Horizons**: Stell in der Umkleide der geöffneten Schneiderei ein Outfit rund um eine Farbe zusammen. **Kauf es und trag es draußen**. Halte dafür genug Sternis bereit."
    }
  },
  {
    id: "nh-bulletin-island-sketch",
    moods: [
      "create",
      "focused"
    ],
    type: "creation",
    tags: [
      "decorating"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "On the Noticeboard",
      objective: "In **Animal Crossing: New Horizons**, draw a small sketch of a recognizable spot on your island on the bulletin board. **Post it with a short caption**, then walk to the spot you drew."
    },
    de: {
      name: "Am Schwarzen Brett",
      objective: "**Animal Crossing: New Horizons**: Zeichne am Schwarzen Brett eine erkennbare Stelle deiner Insel. **Veröffentliche die Zeichnung mit einer kurzen Beschriftung** und lauf danach zu der gezeichneten Stelle."
    }
  },
  {
    id: "nh-letter-and-present",
    moods: [
      "low-energy",
      "relax"
    ],
    type: "objective",
    tags: [
      "dialogue"
    ],
    minutes: 10,
    minimum: 2,
    en: {
      name: "Post for a Neighbor",
      objective: "In **Animal Crossing: New Horizons**, with the airport card stand available, write a short card to one island resident about their house or clothes. **Attach a spare item and send the card**. Have the postage ready."
    },
    de: {
      name: "Post für den Nachbarn",
      objective: "**Animal Crossing: New Horizons**: Schreib am verfügbaren Kartenstand im Flughafen einem Inselbewohner eine kurze Karte über sein Haus oder seine Kleidung. **Häng einen übrigen Gegenstand an und schick die Karte ab**. Halte die Versandkosten bereit."
    }
  },
  {
    id: "nh-friend-beach-fishing",
    moods: [
      "connect",
      "relax"
    ],
    type: "objective",
    tags: [
      "fishing",
      "co-op"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Compare Your Catch",
      objective: "In **Animal Crossing: New Horizons**, with a friend already visiting locally or online and both of you holding rods, fish from the same beach. **Each show the other one fish you caught**. Use online play only with Nintendo Switch Online."
    },
    de: {
      name: "Fänge vergleichen",
      objective: "**Animal Crossing: New Horizons**: Angle mit einem Freund, der bereits lokal oder online zu Besuch ist, am selben Strand. Haltet beide eine Angel bereit und **zeigt euch jeweils einen selbst gefangenen Fisch**. Online braucht ihr Nintendo Switch Online."
    }
  },
  {
    id: "nh-friend-buried-prize",
    moods: [
      "connect",
      "curious"
    ],
    type: "objective",
    tags: [
      "co-op",
      "puzzles"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Buried for a Friend",
      objective: "In **Animal Crossing: New Horizons**, with a Best Friend already visiting locally or online and a shovel ready for each of you, bury one spare item on a reachable part of your island and give a landmark clue. **Have your friend find it**, adding another clue whenever needed. Online play requires Nintendo Switch Online."
    },
    de: {
      name: "Für einen Freund vergraben",
      objective: "**Animal Crossing: New Horizons**: Vergrabe mit einem bereits lokal oder online anwesenden besten Freund und je einer Schaufel einen übrigen Gegenstand an einer erreichbaren Stelle. Gib einen Hinweis mit einer Landmarke und **lass deinen Freund den Gegenstand finden**. Gib bei Bedarf weitere Hinweise. Online braucht ihr Nintendo Switch Online."
    }
  },
  {
    id: "nh-workbench-storage-stop",
    moods: [
      "create",
      "progress"
    ],
    type: "creation",
    tags: [
      "crafting",
      "decorating"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Supplies within Reach",
      objective: "In **Animal Crossing: New Horizons**, with a storage shed or wooden storage shed already owned, **place it beside your outdoor workbench and use it to fetch materials for one known DIY**. Craft the item without going into your house."
    },
    de: {
      name: "Vorräte in Reichweite",
      objective: "**Animal Crossing: New Horizons**: **Stell einen vorhandenen Lagerschrank neben deine Werkbank draußen und hol daraus Material für eine bekannte Bastelanleitung**. Bastle den Gegenstand, ohne ins Haus zu gehen."
    }
  },
  {
    id: "nh-grow-to-the-stove",
    moods: [
      "progress",
      "relax"
    ],
    type: "objective",
    tags: [
      "farming",
      "cooking"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Garden Lunch",
      objective: "In **Animal Crossing: New Horizons**, with cooking unlocked, a kitchen and a known vegetable recipe ready, **harvest its needed vegetables, cook the dish and place it on a table**. Start with ripe crops and the other ingredients already owned."
    },
    de: {
      name: "Mittagessen aus dem Garten",
      objective: "**Animal Crossing: New Horizons**: **Ernte für ein bekanntes Gemüserezept, kochst das Gericht und stell es auf einen Tisch**. Starte mit freigeschaltetem Kochen, einer Küche, reifen Pflanzen und den übrigen Zutaten im Vorrat."
    }
  },
  {
    id: "nh-hhp-client-home",
    moods: [
      "create",
      "focused"
    ],
    type: "creation",
    tags: [
      "decorating"
    ],
    minutes: 30,
    minimum: 5,
    en: {
      name: "Built for the Client",
      objective: "In **Animal Crossing: New Horizons**, with **Happy Home Paradise DLC** and vacation-home work unlocked, choose one client on the beach. Use their required furniture and **finish a small vacation home that fits their request**."
    },
    de: {
      name: "Für den Kunden gebaut",
      objective: "**Animal Crossing: New Horizons**: Such mit **Happy Home Paradise DLC** und freigeschalteter Ferienhausarbeit einen Kunden am Strand. Nutze seine Pflichtmöbel und **stelle ein kleines Ferienhaus passend zu seinem Wunsch fertig**."
    }
  },
  {
    id: "nh-sell-owned-turnips",
    moods: [
      "progress",
      "low-energy"
    ],
    type: "objective",
    tags: [
      "trading"
    ],
    minutes: 10,
    minimum: 2,
    en: {
      name: "Turnips Before Sunday",
      objective: "In **Animal Crossing: New Horizons**, with turnips already owned and Nook’s Cranny open before the next Sunday, ask for today’s price. **Sell one stack and check the Bells received**. A profit is not required."
    },
    de: {
      name: "Rüben vor Sonntag",
      objective: "**Animal Crossing: New Horizons**: Frag mit vorhandenen Rüben vor dem nächsten Sonntag im geöffneten Laden nach dem Preis. **Verkauf einen Stapel und prüfe die erhaltenen Sternis**. Gewinn ist kein Muss."
    }
  },
  {
    id: "nh-old-home-tour",
    moods: [
      "nostalgic",
      "relax"
    ],
    type: "inspiration",
    tags: [
      "current-save",
      "decorating"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "The House You Kept",
      objective: "In **Animal Crossing: New Horizons**, return to a save you have not visited for a while and walk through your home. Look at the furniture you kept, try the chairs and music players, and spend time with the choices you made back then."
    },
    de: {
      name: "Das Haus von damals",
      objective: "**Animal Crossing: New Horizons**: Kehre zu einem länger nicht besuchten Spielstand zurück und geh durch dein Haus. Schau deine alten Möbel an, probiere Sitzplätze und Musikspieler aus und verbringe Zeit mit deinen Entscheidungen von damals."
    }
  },
  {
    id: "nh-plaza-stretching",
    moods: [
      "relax",
      "overwhelmed"
    ],
    type: "objective",
    tags: [
      "rhythm"
    ],
    minutes: 10,
    minimum: 2,
    en: {
      name: "Stretch at the Plaza",
      objective: "In **Animal Crossing: New Horizons**, use the radio outside Resident Services and choose button controls. **Join one complete group-stretching session**. Missed inputs are fine."
    },
    de: {
      name: "Dehnen am Festplatz",
      objective: "**Animal Crossing: New Horizons**: Starte am Radio vor dem Servicecenter die Gruppengymnastik mit Tastensteuerung. **Mach eine ganze Einheit mit**. Verpasste Eingaben sind okay."
    }
  },
  {
    id: "nh-label-fashion-request",
    moods: [
      "curious",
      "create"
    ],
    type: "experiment",
    tags: [
      "outfit"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Dress for the Theme",
      objective: "In **Animal Crossing: New Horizons**, when Label is already on the plaza, hear her clothing theme. Use her sample and clothes you own to **put together a look and ask her to judge it**. Any verdict counts."
    },
    de: {
      name: "Passend zum Thema",
      objective: "**Animal Crossing: New Horizons**: Hör dir das Kleiderthema von Minna an, wenn sie bereits am Festplatz steht. Nutze ihr Musterstück und eigene Kleidung, um **ein Outfit zusammenzustellen und bewerten zu lassen**. Jede Bewertung zählt."
    }
  }
]);
