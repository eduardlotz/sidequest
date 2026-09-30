import { defineGameQuests } from "../defineGameQuests";

export const zeldaQuests = defineGameQuests("zelda", [
  {
    id: "breath-of-the-wild-follow-the-land",
    moods: ["explore", "curious"],
    type: "objective",
    tags: ["exploration", "no-fast-travel"],
    minutes: 25,
    minimum: 5,
    installments: ["botw"],
    en: {
      name: "Follow the Land",
      objective: "In **Breath of the Wild**, start at a stable you know. Pick one nearby landmark you can see, close the map, and **reach it on foot or horseback without fast travel**. Use the terrain to find your way.",
    },
    de: {
      name: "Dem Gelände folgen",
      objective: "Starte in **Breath of the Wild** an einem bekannten Stall. Wähle eine nahe sichtbare Landmarke, schließe die Karte und **erreiche sie zu Fuß oder zu Pferd ohne Schnellreise**. Orientiere dich am Gelände.",
    },
  },
  {
    id: "breath-of-the-wild-three-new-entries",
    moods: ["curious", "focused"],
    type: "objective",
    tags: ["photography", "collectibles"],
    minutes: 25,
    minimum: 5,
    installments: ["botw"],
    en: {
      name: "Three New Entries",
      objective: "In **Breath of the Wild**, with the Camera Rune unlocked, find a nearby creature, plant or material, and weapon missing from your Hyrule Compendium. **Photograph one of each and confirm all three new entries**.",
    },
    de: {
      name: "Drei neue Einträge",
      objective: "Such in **Breath of the Wild** mit freigeschaltetem Kamera-Modul ein Tier, eine Pflanze oder Zutat und eine Waffe, die dir im Hyrule-Handbuch noch fehlen. **Fotografiere alle drei und prüfe die neuen Einträge**.",
    },
  },
  {
    id: "breath-of-the-wild-one-snow-run",
    moods: ["challenge", "restless"],
    type: "challenge",
    tags: ["traversal", "three-attempts"],
    minutes: 20,
    minimum: 3,
    installments: ["botw"],
    en: {
      name: "One Snow Run",
      objective: "In **Breath of the Wild**, find a short snowy slope and mark a visible finish near its base. **Shield-surf from the top to that point without falling**, or stop after three tries. Bring a shield you can spare.",
    },
    de: {
      name: "Eine Abfahrt im Schnee",
      objective: "Such dir in **Breath of the Wild** einen kurzen Schneehang und ein Ziel, das du von oben sehen kannst. **Surfe auf deinem Schild bis dorthin, ohne zu stürzen**, oder hör nach drei Versuchen auf. Nimm ein Schild, das du nicht mehr brauchst.",
    },
  },
  {
    id: "breath-of-the-wild-korok-portrait",
    moods: ["create", "relax"],
    type: "creation",
    tags: ["photography", "exploration"],
    minutes: 25,
    minimum: 5,
    installments: ["botw"],
    en: {
      name: "Korok Portrait",
      objective: "In **Breath of the Wild**, with the Camera Rune unlocked, reveal a reachable Korok you have not found yet. **Save a selfie with Link and the Korok in frame**. Pick a clue on safe ground.",
    },
    de: {
      name: "Krog-Porträt",
      objective: "Finde in **Breath of the Wild** mit freigeschaltetem Kamera-Modul einen noch unentdeckten Krog an einem gut erreichbaren Ort. **Speichere ein Selfie mit Link und dem Krog im Bild**.",
    },
  },
  {
    id: "breath-of-the-wild-campfire-supper",
    moods: ["relax", "low-energy"],
    type: "objective",
    tags: ["cooking", "no-timer"],
    minutes: 15,
    minimum: 3,
    installments: ["botw"],
    en: {
      name: "Campfire Supper",
      objective: "In **Breath of the Wild**, start beside a safe cooking pot. Gather edible ingredients nearby, **cook one meal using only what you just found, and eat it beside the pot**.",
    },
    de: {
      name: "Essen am Feuer",
      objective: "Beginne in **Breath of the Wild** an einer sicheren Kochstelle. Sammle essbare Zutaten in der Nähe, **koche daraus eine Mahlzeit und iss sie an der Kochstelle**. Nutze nur, was du gerade gefunden hast.",
    },
  },
  {
    id: "tears-of-the-kingdom-no-steering-stick",
    moods: ["curious", "explore"],
    type: "experiment",
    tags: ["building", "traversal"],
    minutes: 30,
    minimum: 5,
    installments: ["totk"],
    en: {
      name: "No Steering Stick",
      objective: "In **Tears of the Kingdom**, with Ultrahand unlocked, pick a small stream or gap you can see from both sides. Build a device without a steering stick and **cross the obstacle on it**. Use nearby parts and try another design if the first fails.",
    },
    de: {
      name: "Ohne Steuerknüppel",
      objective: "Wähle in **Tears of the Kingdom** mit freigeschaltetem Ultrahand einen kleinen Bach oder Spalt, dessen beide Seiten du sehen kannst. Baue ein Gefährt ohne Steuerknüppel und **überquere damit das Hindernis**. Nutze Teile aus der Nähe und probiere bei Bedarf einen zweiten Entwurf.",
    },
  },
  {
    id: "tears-of-the-kingdom-fuse-from-here",
    moods: ["progress", "curious"],
    type: "objective",
    tags: ["crafting", "new-approach"],
    minutes: 20,
    minimum: 3,
    installments: ["totk"],
    en: {
      name: "Fuse From Here",
      objective: "In **Tears of the Kingdom**, with Fuse unlocked, pick up a material in your current area and attach it to a weapon. **Win one ordinary fight using that fused weapon**. Choose an encounter you can already handle.",
    },
    de: {
      name: "Fusion vor Ort",
      objective: "Sammle in **Tears of the Kingdom** mit freigeschalteter Synthese ein Material aus deiner Umgebung und verbinde es mit einer Waffe. Such dir einen Gegner, den du gut besiegen kannst, und **gewinne den Kampf mit deiner neu fusionierten Waffe**.",
    },
  },
  {
    id: "tears-of-the-kingdom-reachable-sky-island",
    moods: ["create", "focused"],
    type: "creation",
    tags: ["building", "traversal"],
    minutes: 45,
    minimum: 10,
    installments: ["totk"],
    en: {
      name: "Skyward Build",
      objective: "In **Tears of the Kingdom**, launch from a Skyview Tower or start on a sky island. Choose a lower island you can see, build a device from available Zonai parts, and **use it to cross the last gap and land there**.",
    },
    de: {
      name: "Zur nächsten Himmelsinsel",
      objective: "Starte in **Tears of the Kingdom** von einem Kartografierturm oder einer Himmelsinsel. Wähle eine Insel, die du sehen kannst und die tiefer liegt. Bau aus verfügbaren Sonau-Bauteilen ein Gefährt und **überquere damit die letzte Lücke bis zur Landung**.",
    },
  },
  {
    id: "tears-of-the-kingdom-old-tool-new-use",
    rarity: "special",
    moods: ["curious", "focused"],
    type: "experiment",
    tags: ["abilities", "new-approach"],
    minutes: 20,
    minimum: 3,
    installments: ["totk"],
    en: {
      name: "Recall the Route",
      objective: "In **Tears of the Kingdom**, with Ultrahand and Recall unlocked, choose a safe gap with room to land. Move a loose platform across and back with Ultrahand, then stand on it. **Ride your recorded route across using Recall**.",
    },
    de: {
      name: "Weg zurückspulen",
      objective: "Wähle in **Tears of the Kingdom** mit freigeschalteter Ultrahand und Zeitumkehr einen sicheren Spalt mit Platz zum Landen. Beweg eine lose Plattform mit Ultrahand hinüber und zurück, dann stell dich darauf. **Lass dich mit Zeitumkehr über deine aufgezeichnete Route tragen**.",
    },
  },
  {
    id: "tears-of-the-kingdom-korok-courier",
    moods: ["connect", "progress"],
    type: "objective",
    tags: ["building", "traversal"],
    minutes: 30,
    minimum: 5,
    installments: ["totk"],
    en: {
      name: "Korok Courier",
      objective: "In **Tears of the Kingdom**, find a backpack Korok whose friend is nearby. Build a simple carrier with Ultrahand, **bring the Korok to the friend, detach it, and speak to finish the delivery**.",
    },
    de: {
      name: "Krog-Kurier",
      objective: "Finde in **Tears of the Kingdom** einen Krog mit Rucksack, dessen Freund in der Nähe wartet. Bau mit Ultrahand ein einfaches Transportmittel und **bring den Krog zu seinem Freund**. Löse ihn vom Gefährt und sprich mit ihm, damit die Lieferung zählt.",
    },
  },
  {
    id: "tears-of-the-kingdom-hold-the-sign",
    moods: ["curious", "focused"],
    type: "experiment",
    tags: ["building", "new-approach"],
    minutes: 20,
    minimum: 3,
    installments: ["totk"],
    en: {
      name: "Hold the Sign",
      objective: "In **Tears of the Kingdom**, find one sign Addison is holding. Prop it up with nearby Ultrahand materials, ask him to let go, and **keep it standing until he secures it**. Move the supports and try again if it falls.",
    },
    de: {
      name: "Schild stützen",
      objective: "Finde in **Tears of the Kingdom** ein Schild, das Addison festhält. Stütze es mit Ultrahand und Material aus der Nähe, bitte ihn loszulassen und **halte es aufrecht, bis er es befestigt**. Versetze die Stützen, falls es umfällt.",
    },
  },
  {
    id: "tears-of-the-kingdom-lightroot-by-landmark",
    moods: ["explore", "focused"],
    type: "objective",
    tags: ["exploration", "no-fast-travel"],
    minutes: 35,
    minimum: 5,
    installments: ["totk"],
    en: {
      name: "Below the Shrine",
      objective: "In **Tears of the Kingdom**, with the Depths accessible, choose a surface shrine above an unlit Lightroot you can reach from a known chasm. Mark its matching spot below, travel there using Brightbloom Seeds, and **activate that Lightroot**.",
    },
    de: {
      name: "Unter dem Schrein",
      objective: "Such dir in **Tears of the Kingdom** einen Oberwelt-Schrein aus, unter dem eine noch dunkle Lichtwurzel liegt. Markiere die Stelle im Untergrund, erreich sie von einem bekannten Abgrund aus mit Leuchtsamen und **aktiviere die Lichtwurzel**.",
    },
  },
  {
    id: "botw-waterfall-ice-steps",
    installments: [
      "botw"
    ],
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "abilities",
      "traversal"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Ice on the Waterfall",
      objective: "In **Breath of the Wild**, with Cryonis unlocked, choose a small waterfall with safe ground above and below. **Make ice steps on its face and climb to the top**."
    },
    de: {
      name: "Eis am Wasserfall",
      objective: "**Breath of the Wild**: Such dir mit freigeschaltetem Cryonis einen kleinen Wasserfall mit sicherem Boden oben und unten. **Baue Eisstufen an seiner Vorderseite und klettere hinauf**."
    }
  },
  {
    id: "botw-bomb-mining",
    installments: [
      "botw"
    ],
    moods: [
      "progress",
      "curious"
    ],
    type: "objective",
    tags: [
      "abilities",
      "collectibles"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Ore without a Pick",
      objective: "In **Breath of the Wild**, with Remote Bombs unlocked and an ore deposit already nearby, **break it with a bomb and collect its drops**. Keep the blast away from cliffs where the ore could fall out of reach."
    },
    de: {
      name: "Erz ohne Spitzhacke",
      objective: "**Breath of the Wild**: **Sprenge mit freigeschalteten Fernbomben einen nahen Erzbrocken und sammle die Funde**. Bleib fern von Abgründen, in die das Erz fallen könnte."
    }
  },
  {
    id: "botw-shock-disarm",
    installments: [
      "botw"
    ],
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
      name: "Drop the Weapon",
      objective: "In **Breath of the Wild**, with Shock Arrows ready, find an ordinary Bokoblin holding a weapon. **Shock it and pick up the dropped weapon before it does**, or stop after three encounters."
    },
    de: {
      name: "Lass die Waffe fallen",
      objective: "**Breath of the Wild**: Such dir mit vorhandenen Elektropfeilen einen gewöhnlichen Bokblin mit Waffe. **Triff ihn elektrisch und heb seine fallengelassene Waffe vor ihm auf**, oder hör nach drei Begegnungen auf."
    }
  },
  {
    id: "botw-grass-updraft",
    installments: [
      "botw"
    ],
    moods: [
      "curious",
      "explore"
    ],
    type: "experiment",
    tags: [
      "abilities",
      "traversal"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Lift from the Grass",
      objective: "In **Breath of the Wild**, with a fire weapon or Fire Arrow and the paraglider ready, find a dry grassy patch below a nearby ledge. **Light the grass and ride its updraft onto the ledge**."
    },
    de: {
      name: "Auftrieb aus dem Gras",
      objective: "**Breath of the Wild**: Such dir mit Feuerwaffe oder Feuerpfeil und vorhandenem Parasegel trockenes Gras unter einem nahen Vorsprung. **Zünde es an und nutze den Aufwind bis zum Vorsprung**."
    }
  },
  {
    id: "botw-stasis-plus-opening",
    installments: [
      "botw"
    ],
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "abilities"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Freeze the Opening",
      objective: "In **Breath of the Wild**, with Stasis+ unlocked, face an ordinary Bokoblin. **Freeze it with Stasis+, move to its side and land a hit when it releases**. Finish the encounter your usual way."
    },
    de: {
      name: "Die Lücke einfrieren",
      objective: "**Breath of the Wild**: **Halte mit freigeschaltetem Stasis+ einen gewöhnlichen Bokblin an, geh an seine Seite und triff ihn nach dem Lösen der Starre**. Beende die Begegnung danach wie gewohnt."
    }
  },
  {
    id: "botw-guardian-beam-parry",
    installments: [
      "botw"
    ],
    moods: [
      "challenge",
      "focused"
    ],
    type: "challenge",
    tags: [
      "parry",
      "three-attempts"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Send the Beam Back",
      objective: "In **Breath of the Wild**, with spare shields ready, face a stationary Guardian that can fire its beam. **Reflect one beam into it with a perfect guard**, or stop after three beams."
    },
    de: {
      name: "Den Strahl zurückschicken",
      objective: "**Breath of the Wild**: Stell dich mit übrigen Schilden einem stationären Wächter, der seinen Strahl abfeuern kann. **Schick einen Strahl mit einem perfekten Block zurück**, oder hör nach drei Strahlen auf."
    }
  },
  {
    id: "botw-bokoblin-flurry",
    installments: [
      "botw"
    ],
    moods: [
      "challenge",
      "focused"
    ],
    type: "challenge",
    tags: [
      "traversal",
      "three-attempts"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Dodge into the Rush",
      objective: "In **Breath of the Wild**, face an ordinary Bokoblin with a melee weapon ready. **Trigger a Flurry Rush from a timed dodge and land its hits**, or stop after three fights."
    },
    de: {
      name: "Ausweichen und kontern",
      objective: "**Breath of the Wild**: Stell dich mit einer Nahkampfwaffe einem gewöhnlichen Bokblin. **Löse durch richtig getimtes Ausweichen einen Zeitlupenkonter aus und triff damit**, oder hör nach drei Kämpfen auf."
    }
  },
  {
    id: "botw-spotted-horse-registration",
    installments: [
      "botw"
    ],
    moods: [
      "progress",
      "relax"
    ],
    type: "objective",
    tags: [
      "animals"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Name Your Horse",
      objective: "In **Breath of the Wild**, near a stable with a free horse slot and the registration fee ready, tame a spotted wild horse. **Ride it to the stable, name it and register it**."
    },
    de: {
      name: "Ein Name am Stall",
      objective: "**Breath of the Wild**: Zähme nahe einem Stall mit freiem Pferdeplatz und vorhandener Anmeldegebühr ein geschecktes Wildpferd. **Reite zum Stall, gib ihm einen Namen und registriere es**."
    }
  },
  {
    id: "botw-stable-dog-test",
    installments: [
      "botw"
    ],
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "animals"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Follow the Stable Dog",
      objective: "In **Breath of the Wild**, with three pieces of meat ready, feed a dog at a stable. **Offer all three one at a time and follow if it leads you away**. If it stays put, the three feedings finish the experiment."
    },
    de: {
      name: "Dem Stallhund folgen",
      objective: "**Breath of the Wild**: Füttere mit drei vorhandenen Fleischstücken einen Hund am Stall. **Gib ihm die Stücke einzeln und folge ihm, falls er dich wegführt**. Bleibt er da, endet das Experiment nach den drei Fütterungen."
    }
  },
  {
    id: "botw-elixir-for-the-road",
    installments: [
      "botw"
    ],
    moods: [
      "progress",
      "curious"
    ],
    type: "objective",
    tags: [
      "cooking"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "A Roadside Elixir",
      objective: "In **Breath of the Wild**, at a lit cooking pot with a critter and monster part already owned, read the critter’s effect. **Cook an elixir from those ingredients and use it where that effect helps**. Do not mix in ordinary food."
    },
    de: {
      name: "Eine Flasche für unterwegs",
      objective: "**Breath of the Wild**: Lies an einem brennenden Kochtopf die Wirkung eines vorhandenen Insekts oder einer Echse. **Koche daraus mit einem Monsterteil ein Elixier und nutze es dort, wo seine Wirkung hilft**. Misch keine gewöhnlichen Lebensmittel hinein."
    }
  },
  {
    id: "botw-fairy-armor-step",
    installments: [
      "botw"
    ],
    moods: [
      "progress",
      "overwhelmed"
    ],
    type: "objective",
    tags: [
      "outfit"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "One Armor Upgrade",
      objective: "In **Breath of the Wild**, with a Great Fairy Fountain already open, choose an armor piece whose upgrade materials you own. **Have the fairy upgrade it and equip it**."
    },
    de: {
      name: "Eine Rüstung verbessern",
      objective: "**Breath of the Wild**: Wähle an einer schon geöffneten Quelle der Großen Fee ein Rüstungsteil, dessen Aufwertungsmaterial du besitzt. **Lass es verbessern und leg es an**."
    }
  },
  {
    id: "botw-kilton-first-exchange",
    installments: [
      "botw"
    ],
    moods: [
      "curious",
      "progress"
    ],
    type: "objective",
    tags: [
      "trading"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Parts Become Mon",
      objective: "In **Breath of the Wild**, with Kilton’s shop unlocked and already nearby after dark, **exchange spare monster parts for Mon and buy one affordable item**. Check the stock before trading."
    },
    de: {
      name: "Monsterteile werden Mon",
      objective: "**Breath of the Wild**: **Tausch nach Einbruch der Dunkelheit bei Kiltons freigeschaltetem und nahe gelegenem Laden übrige Monsterteile gegen Mon und kauf einen bezahlbaren Gegenstand**. Schau dir vorher das Angebot an."
    }
  },
  {
    id: "botw-sword-trial-start",
    installments: [
      "botw"
    ],
    moods: [
      "challenge",
      "focused"
    ],
    type: "challenge",
    tags: [
      "three-attempts"
    ],
    minutes: 30,
    minimum: 5,
    en: {
      name: "Three Trial Rooms",
      objective: "In **Breath of the Wild**, with **The Master Trials DLC**, the Master Sword and Trial of the Sword unlocked, **clear the first three rooms of the Beginning Trials**, or stop after three runs."
    },
    de: {
      name: "Drei Prüfungsräume",
      objective: "**Breath of the Wild**: **Schaffe mit Die legendären Prüfungen DLC, vorhandenem Master-Schwert und freigeschalteter Schwertprüfung die ersten drei Räume der Anfangsprüfung**, oder hör nach drei Durchgängen auf."
    }
  },
  {
    id: "botw-horseback-targets",
    installments: [
      "botw"
    ],
    moods: [
      "challenge",
      "restless"
    ],
    type: "challenge",
    tags: [
      "three-attempts"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Targets from the Saddle",
      objective: "In **Breath of the Wild**, with a registered horse, bow, arrows and entry fees ready, enter the mounted-archery game south of Highland Stable. **Hit ten balloons in one run**, or stop after three runs."
    },
    de: {
      name: "Ziele vom Sattel",
      objective: "**Breath of the Wild**: Starte mit registriertem Pferd, Bogen, Pfeilen und Startgeld das Reitbogenschießen südlich des Stalls der Hochebene. **Triff zehn Ballons in einem Durchgang**, oder hör nach drei Durchgängen auf."
    }
  },
  {
    id: "botw-labyrinth-first-turns",
    installments: [
      "botw"
    ],
    moods: [
      "explore",
      "focused"
    ],
    type: "inspiration",
    tags: [
      "puzzles",
      "exploration"
    ],
    minutes: 25,
    minimum: 3,
    en: {
      name: "Inside the Maze",
      objective: "In **Breath of the Wild**, with a labyrinth entrance already reached, explore its corridors using the walls and dead ends as clues. Follow the route you want to test. The shrine can wait until another session."
    },
    de: {
      name: "Im Labyrinth",
      objective: "**Breath of the Wild**: Erkunde von einem bereits erreichten Labyrintheingang aus die Gänge. Nutze Mauern und Sackgassen als Hinweise und probiere die Wege aus, die dich interessieren. Der Schrein kann bis später warten."
    }
  },
  {
    id: "botw-hinox-necklace-theft",
    installments: [
      "botw"
    ],
    moods: [
      "challenge",
      "focused"
    ],
    type: "challenge",
    tags: [
      "stealth",
      "three-attempts"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Borrow from a Giant",
      objective: "In **Breath of the Wild**, with stealth gear or a stealth elixir ready, approach a sleeping Hinox carrying weapons. **Take one weapon from its necklace and leave without waking it**, or stop after three approaches."
    },
    de: {
      name: "Beim Riesen ausleihen",
      objective: "**Breath of the Wild**: Schleich dich mit Schleichausrüstung oder Schleich-Elixier an einen schlafenden Hinox mit Waffen heran. **Nimm eine Waffe von seiner Halskette und geh, ohne ihn zu wecken**, oder hör nach drei Annäherungen auf."
    }
  },
  {
    id: "botw-lynel-back-attack",
    installments: [
      "botw"
    ],
    moods: [
      "challenge",
      "focused"
    ],
    type: "challenge",
    tags: [
      "three-attempts"
    ],
    minutes: 25,
    minimum: 3,
    en: {
      name: "Onto the Lynel",
      objective: "In **Breath of the Wild**, with a bow and melee weapon ready at a known Lynel, **stun it with a headshot, mount it and land a mounted attack**, or stop after three fights. Pick a Lynel you have fought before."
    },
    de: {
      name: "Auf den Leunen",
      objective: "**Breath of the Wild**: **Betäube einen bekannten Leunen mit einem Kopftreffer, spring auf seinen Rücken und lande einen berittenen Angriff**, oder hör nach drei Kämpfen auf. Halte Bogen und Nahkampfwaffe bereit und wähle einen Leunen, gegen den du schon gekämpft hast."
    }
  },
  {
    id: "botw-tarrey-wood-delivery",
    installments: [
      "botw"
    ],
    moods: [
      "progress",
      "focused"
    ],
    type: "objective",
    tags: [
      "story",
      "building"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Wood for Tarrey Town",
      objective: "In **Breath of the Wild**, with From the Ground Up active and Hudson currently asking for wood, **deliver the requested wood and hear his next request**. Start with the full amount already owned."
    },
    de: {
      name: "Holz für Taburasa",
      objective: "**Breath of the Wild**: **Liefere bei laufendem Aufbauspiel die von Dumsda gerade verlangte Holzmenge ab und hör dir seine nächste Bitte an**. Halte die ganze Menge schon bereit."
    }
  },
  {
    id: "botw-hateno-dyed-set",
    installments: [
      "botw"
    ],
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
      name: "A Color from Hateno",
      objective: "In **Breath of the Wild**, at Hateno’s dye shop with dyeable clothing, the fee and five ingredients for a chosen color ready, **dye your outfit and wear it through the village**."
    },
    de: {
      name: "Eine Farbe aus Hateno",
      objective: "**Breath of the Wild**: **Färbe in Hatenos Färberei dein färbbares Outfit und trag es im Dorf**, wenn Gebühr und fünf Zutaten für die gewählte Farbe bereitliegen."
    }
  },
  {
    id: "botw-hero-path-revisit",
    installments: [
      "botw"
    ],
    moods: [
      "nostalgic",
      "relax"
    ],
    type: "inspiration",
    tags: [
      "exploration",
      "replay"
    ],
    minutes: 25,
    minimum: 3,
    en: {
      name: "Your Old Trail",
      objective: "In **Breath of the Wild**, with **The Master Trials DLC** and Hero’s Path Mode available on an old save, trace a familiar stretch of your recorded journey. Return to that area and follow the route again, stopping wherever you remember an earlier adventure."
    },
    de: {
      name: "Deine alte Spur",
      objective: "**Breath of the Wild**: Folge mit **Die legendären Prüfungen DLC** und verfügbarem Pfad des Helden in einem alten Spielstand einem vertrauten Teil deiner aufgezeichneten Reise. Besuch das Gebiet wieder und mach Halt, wo du dich an frühere Abenteuer erinnerst."
    }
  },
  {
    id: "totk-autobuild-favorite",
    installments: [
      "totk"
    ],
    moods: [
      "create",
      "focused"
    ],
    type: "creation",
    tags: [
      "building",
      "abilities"
    ],
    minutes: 25,
    minimum: 5,
    en: {
      name: "Build It Again",
      objective: "In **Tears of the Kingdom**, with Autobuild unlocked and enough loose parts ready, assemble a small wheeled vehicle and save it as a favorite. Detach its parts, then **rebuild the favorite from those parts and drive it**."
    },
    de: {
      name: "Noch einmal bauen",
      objective: "**Tears of the Kingdom**: Baue mit freigeschalteter Bautomatik und genügend losen Teilen ein kleines Radfahrzeug und speichere es als Favorit. Trenne die Teile wieder und **bau den Favoriten aus diesen Teilen neu, um damit zu fahren**."
    }
  },
  {
    id: "totk-hoverstone-step",
    installments: [
      "totk"
    ],
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "abilities",
      "traversal"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "A Ceiling You Carry",
      objective: "In **Tears of the Kingdom**, with Ultrahand, Ascend and a Hover Stone ready, position the activated stone above Link within Ascend range. **Ascend through it and reach a nearby higher ledge** before its battery runs out."
    },
    de: {
      name: "Eine Decke zum Mitnehmen",
      objective: "**Tears of the Kingdom**: Platziere mit Ultrahand einen aktivierten Schwebestein über Link in Deckensprung-Reichweite. **Spring durch ihn und erreiche einen nahen höheren Vorsprung**, bevor die Batterie leer ist. Halte Schwebestein und beide Fähigkeiten bereit."
    }
  },
  {
    id: "totk-rocket-shield-hop",
    installments: [
      "totk"
    ],
    moods: [
      "curious",
      "explore"
    ],
    type: "experiment",
    tags: [
      "crafting",
      "traversal"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "A Shield with Lift",
      objective: "In **Tears of the Kingdom**, with Fuse, a spare shield, Rocket and paraglider ready, **fuse the Rocket to the shield, launch by holding the shield up and land on a nearby roof**. Choose a safe roof before launching."
    },
    de: {
      name: "Ein Schild mit Auftrieb",
      objective: "**Tears of the Kingdom**: **Verbinde mit freigeschalteter Synthese eine Rakete mit einem übrigen Schild, starte beim Hochhalten und lande mit dem Parasegel auf einem nahen Dach**. Halte die Teile bereit und wähle vor dem Start ein sicheres Dach."
    }
  },
  {
    id: "totk-puffshroom-sneakstrike",
    installments: [
      "totk"
    ],
    moods: [
      "challenge",
      "focused"
    ],
    type: "challenge",
    tags: [
      "stealth",
      "three-attempts"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Smoke, Then Sneak",
      objective: "In **Tears of the Kingdom**, with Puffshrooms ready at an ordinary Bokoblin camp, **hide it in mushroom smoke and land one Sneakstrike**. Stop after three Puffshrooms if it does not work."
    },
    de: {
      name: "Rauch, dann anschleichen",
      objective: "**Tears of the Kingdom**: **Verhülle mit vorhandenen Qualmpilzen einen gewöhnlichen Bokblin im Lager in Rauch und lande einen Schleichangriff**. Nach drei Qualmpilzen ist Schluss, falls es nicht klappt."
    }
  },
  {
    id: "totk-muddlebud-camp",
    installments: [
      "totk"
    ],
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "abilities",
      "new-approach"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Let the Camp Argue",
      objective: "In **Tears of the Kingdom**, with a Muddle Bud and bow ready at a camp with several ordinary monsters, **shoot one monster with the fused bud and watch whom it attacks**. Stay outside the fight. A kill is not required."
    },
    de: {
      name: "Das Lager streiten lassen",
      objective: "**Tears of the Kingdom**: **Schieß mit einem vorhandenen Irrknospen-Pfeil auf ein Monster in einem Lager mit mehreren gewöhnlichen Gegnern und beobachte, wen es angreift**. Bleib außerhalb des Kampfes. Töten muss es niemanden. Halte einen Bogen bereit."
    }
  },
  {
    id: "totk-freeze-and-shatter",
    installments: [
      "totk"
    ],
    moods: [
      "challenge",
      "focused"
    ],
    type: "challenge",
    tags: [
      "crafting",
      "three-attempts"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Ice, Then Impact",
      objective: "In **Tears of the Kingdom**, with Ice Fruit, arrows and a blunt melee weapon ready, **freeze an ordinary Bokoblin with a fused arrow and shatter the ice with a melee hit**. Stop after three fights."
    },
    de: {
      name: "Eis, dann Einschlag",
      objective: "**Tears of the Kingdom**: **Friere mit einem Eisfrucht-Pfeil einen gewöhnlichen Bokblin ein und zerschlage das Eis mit einer stumpfen Nahkampfwaffe**. Halte Eisfrucht, Pfeile und Waffe bereit. Nach drei Kämpfen ist Schluss."
    }
  },
  {
    id: "totk-sundelion-recovery",
    installments: [
      "totk"
    ],
    moods: [
      "progress",
      "overwhelmed"
    ],
    type: "objective",
    tags: [
      "cooking"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Hearts after the Gloom",
      objective: "In **Tears of the Kingdom**, with gloom-damaged hearts, Sundelions and a lit pot ready, **cook a sunny dish and eat it to restore damaged hearts**. Regular missing health can wait."
    },
    de: {
      name: "Herzen nach dem Miasma",
      objective: "**Tears of the Kingdom**: **Koche mit vorhandenen Sonnenfleckchen an einem brennenden Topf ein Gericht gegen Miasma und iss es, um beschädigte Herzen wiederherzustellen**. Starte mit Miasma-Schaden. Gewöhnlich fehlende Gesundheit kann warten."
    }
  },
  {
    id: "totk-sludge-clearing",
    installments: [
      "totk"
    ],
    moods: [
      "progress",
      "curious"
    ],
    type: "objective",
    tags: [
      "abilities",
      "exploration"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Wash the Way Clear",
      objective: "In **Tears of the Kingdom**, before the sludge in Lanayru has been cleared through the story, find a sludge-covered object near Zora’s Domain. With Splash Fruit ready, **clean that object and inspect what was hidden**."
    },
    de: {
      name: "Den Weg freispülen",
      objective: "**Tears of the Kingdom**: Such vor der vollständigen Schlamm-Beseitigung durch die Geschichte ein schlammverdecktes Objekt nahe dem Dorf der Zoras. **Reinige es mit vorhandenen Wasserfrüchten und prüfe, was darunter verborgen war**."
    }
  },
  {
    id: "totk-dazzle-stal-group",
    installments: [
      "totk"
    ],
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "abilities"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Light for the Stal",
      objective: "In **Tears of the Kingdom**, with Dazzlefruit ready at night, find ordinary Stal enemies on the surface. **Throw one Dazzlefruit into their group and see which enemies it defeats**. Leave Stalnoxes out of this test."
    },
    de: {
      name: "Licht für die Knochen",
      objective: "**Tears of the Kingdom**: Such nachts mit vorhandenen Leuchtfrüchten gewöhnliche Knochengegner an der Oberfläche. **Wirf eine Leuchtfrucht in die Gruppe und schau, welche Gegner sie besiegt**. Stalhinoxe bleiben außerhalb des Tests."
    }
  },
  {
    id: "totk-frox-back-ore",
    installments: [
      "totk"
    ],
    moods: [
      "challenge",
      "focused"
    ],
    type: "challenge",
    tags: [
      "boss",
      "three-attempts"
    ],
    minutes: 25,
    minimum: 3,
    en: {
      name: "Ore on the Frox",
      objective: "In **Tears of the Kingdom**, with the Depths accessible and a known Frox nearby, stun it with a bomb in its mouth or a shot to its eye. **Break one ore deposit on its back**, or stop after three approaches. Bring bombs, a bow and a hammer weapon."
    },
    de: {
      name: "Erz auf dem Gigama",
      objective: "**Tears of the Kingdom**: Betäube im zugänglichen Untergrund einen bekannten Gigama mit einer Bombe im Maul oder einem Augentreffer. **Zerschlage einen Erzbrocken auf seinem Rücken**, oder hör nach drei Annäherungen auf. Bring Bomben, Bogen und Hammerwaffe mit."
    }
  },
  {
    id: "totk-construct-core-pull",
    installments: [
      "totk"
    ],
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "abilities",
      "boss"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Pull the Core",
      objective: "In **Tears of the Kingdom**, with Ultrahand unlocked and a Flux Construct already located, **pull its glowing core block free and attack that block while its body is apart**. End after using the opening once. The whole fight is optional."
    },
    de: {
      name: "Den Kern herausziehen",
      objective: "**Tears of the Kingdom**: **Zieh mit freigeschaltetem Ultrahand den leuchtenden Kernblock eines bereits gefundenen Blockgolems heraus und greife ihn an, während der Körper zerlegt ist**. Nach einem genutzten Zeitfenster ist Schluss. Der ganze Kampf ist optional."
    }
  },
  {
    id: "totk-tulin-gap-flight",
    installments: [
      "totk"
    ],
    moods: [
      "explore",
      "curious"
    ],
    type: "objective",
    tags: [
      "abilities",
      "traversal"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Wind over the Gap",
      objective: "In **Tears of the Kingdom**, with Tulin’s sage ability and paraglider unlocked, choose a reachable lower ledge across a gap. **Use his gust while gliding and land on that ledge**. Start with a safe route back."
    },
    de: {
      name: "Wind über die Lücke",
      objective: "**Tears of the Kingdom**: Wähle mit freigeschalteter Tulin-Fähigkeit und Parasegel einen erreichbaren tieferen Vorsprung hinter einer Lücke. **Nutze beim Gleiten seinen Windstoß und lande dort**. Halte einen sicheren Rückweg bereit."
    }
  },
  {
    id: "totk-yunobo-rock-cut",
    installments: [
      "totk"
    ],
    moods: [
      "progress",
      "restless"
    ],
    type: "objective",
    tags: [
      "abilities"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Through the Rubble",
      objective: "In **Tears of the Kingdom**, with Yunobo’s sage ability unlocked and a breakable cave rock wall already found, **use his charge to open the passage and enter it**."
    },
    de: {
      name: "Durch die Felsen",
      objective: "**Tears of the Kingdom**: **Öffne mit Yunobos freigeschalteter Fähigkeit eine bereits gefundene zerbrechliche Felswand in einer Höhle und geh durch den Durchgang**."
    }
  },
  {
    id: "totk-minecart-short-line",
    installments: [
      "totk"
    ],
    moods: [
      "create",
      "focused"
    ],
    type: "creation",
    tags: [
      "building",
      "traversal"
    ],
    minutes: 25,
    minimum: 5,
    en: {
      name: "A Minecart That Runs",
      objective: "In **Tears of the Kingdom**, with Ultrahand, a minecart and Fan ready by a short intact rail line, **attach the Fan and ride the cart to the next platform**. Check that the line reaches a safe platform before boarding."
    },
    de: {
      name: "Eine Lore, die fährt",
      objective: "**Tears of the Kingdom**: **Befestige mit Ultrahand einen vorhandenen Ventilator an einer Lore und fahr über eine kurze intakte Schienenstrecke zur nächsten Plattform**. Prüfe vorher, ob die Strecke sicher endet."
    }
  },
  {
    id: "totk-portable-pot-meal",
    installments: [
      "totk"
    ],
    moods: [
      "progress",
      "low-energy"
    ],
    type: "objective",
    tags: [
      "cooking"
    ],
    minutes: 10,
    minimum: 2,
    en: {
      name: "A Pot Wherever",
      objective: "In **Tears of the Kingdom**, with a Portable Pot and meal ingredients already owned, stop on flat, dry ground away from a fixed cooking pot. **Deploy the device, cook one meal and eat it before moving on**."
    },
    de: {
      name: "Ein Topf überall",
      objective: "**Tears of the Kingdom**: Halte mit vorhandenem Reisekochtopf und Mahlzeitzutaten auf flachem, trockenem Boden fern einer festen Kochstelle an. **Stell das Gerät auf, koch eine Mahlzeit und iss sie vor dem Weitergehen**."
    }
  },
  {
    id: "totk-malanya-horse-upgrade",
    installments: [
      "totk"
    ],
    moods: [
      "progress",
      "focused"
    ],
    type: "objective",
    tags: [
      "animals",
      "cooking"
    ],
    minutes: 25,
    minimum: 3,
    en: {
      name: "A Better Horse",
      objective: "In **Tears of the Kingdom**, with Malanya’s fountain open and a registered horse eligible for an upgrade, read the meal requirement for one stat. With those meals ready, **deliver them and upgrade that stat**."
    },
    de: {
      name: "Ein besseres Pferd",
      objective: "**Tears of the Kingdom**: Lies bei geöffnetem Malanya-Brunnen für ein verbesserbares registriertes Pferd die nötigen Gerichte für einen Wert. Wenn sie bereitliegen, **liefere sie ab und verbessere diesen Wert**."
    }
  },
  {
    id: "totk-koltin-next-trade",
    installments: [
      "totk"
    ],
    moods: [
      "progress",
      "curious"
    ],
    type: "objective",
    tags: [
      "trading",
      "collectibles"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Gems for Koltin",
      objective: "In **Tears of the Kingdom**, with Koltin’s night shop already located and enough Bubbul Gems for his next offer, **make that trade and inspect the reward**."
    },
    de: {
      name: "Kristalle für Koltin",
      objective: "**Tears of the Kingdom**: **Tausch in Koltins bereits gefundenem Nachtladen genügend vorhandene Mayoi-Signums für sein nächstes Angebot ein und sieh dir die Belohnung an**."
    }
  },
  {
    id: "totk-bubbulfrog-cave-room",
    installments: [
      "totk"
    ],
    moods: [
      "explore",
      "progress"
    ],
    type: "objective",
    tags: [
      "collectibles"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "The Cave’s Last Guest",
      objective: "In **Tears of the Kingdom**, at an already discovered cave missing its checkmark, explore its side rooms. **Find the Bubbulfrog and collect its Bubbul Gem**. Bring arrows and choose a small cave."
    },
    de: {
      name: "Der letzte Höhlengast",
      objective: "**Tears of the Kingdom**: Erkunde in einer bereits entdeckten kleinen Höhle ohne Häkchen die Nebenräume. **Finde den Mayoi und sammle sein Mayoi-Signum ein**. Bring Pfeile mit."
    }
  },
  {
    id: "totk-shrine-crystal-route",
    installments: [
      "totk"
    ],
    moods: [
      "create",
      "focused"
    ],
    type: "creation",
    tags: [
      "building",
      "puzzles"
    ],
    minutes: 30,
    minimum: 5,
    en: {
      name: "The Crystal’s Carrier",
      objective: "In **Tears of the Kingdom**, with a shrine-crystal quest already active and its crystal found, build a carrier from nearby parts. **Bring the crystal along its green beam to the shrine and place it at the entrance**. Choose a short ground route."
    },
    de: {
      name: "Transport für den Kristall",
      objective: "**Tears of the Kingdom**: Baue bei einer laufenden Schreinkristall-Aufgabe und schon gefundenem Kristall aus nahen Teilen ein Transportmittel. **Bring den Kristall entlang seines grünen Strahls zum Schrein und setz ihn am Eingang ab**. Wähle eine kurze Bodenstrecke."
    }
  },
  {
    id: "totk-hateno-old-visit",
    installments: [
      "totk"
    ],
    moods: [
      "nostalgic",
      "relax"
    ],
    type: "inspiration",
    tags: [
      "story",
      "exploration"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Hateno after the Adventure",
      objective: "In **Tears of the Kingdom**, if you remember Hateno from Breath of the Wild, walk through it again in your current save. Look at the changed shops, houses and people, and spend time at the places you recognize."
    },
    de: {
      name: "Hateno nach dem Abenteuer",
      objective: "**Tears of the Kingdom**: Wenn du Hateno aus Breath of the Wild kennst, geh im aktuellen Spielstand wieder durchs Dorf. Schau dir die veränderten Läden, Häuser und Leute an und bleib an Orten, die du wiedererkennst."
    }
  }
]);
