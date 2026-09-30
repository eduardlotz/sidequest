import { defineGameQuests } from "../defineGameQuests";

export const theSimsQuests = defineGameQuests("the-sims", [
  {
    id: "sims-3-one-promised-wish",
    moods: ["progress", "focused"],
    type: "objective",
    tags: ["current-save"],
    minutes: 20,
    minimum: 3,
    installments: ["sims-3"],
    en: {
      name: "A Promised Wish",
      objective: "In **The Sims 3**, pick one everyday wish your active Sim can fulfill with people or objects already nearby. Promise that wish and **play until it is fulfilled**. Leave the lifetime wish for another day.",
    },
    de: {
      name: "Ein versprochener Wunsch",
      objective: "Wähle in **Die Sims 3** einen Alltagswunsch deines aktiven Sims, den du mit Leuten oder Dingen in der Nähe erfüllen kannst. Merke ihn vor und **spiele, bis der Wunsch erfüllt ist**. Der Lebenswunsch kann warten.",
    },
  },
  {
    id: "sims-3-town-on-foot",
    moods: ["explore", "curious"],
    type: "objective",
    tags: ["exploration", "current-save"],
    minutes: 25,
    minimum: 5,
    installments: ["sims-3"],
    en: {
      name: "Across Town",
      objective: "In **The Sims 3**, choose a public lot with an object your Sim can use. Follow your Sim from home through the open town, **use that object at the lot, then return home**. Pick somewhere close enough for the trip back.",
    },
    de: {
      name: "Quer durch die Stadt",
      objective: "Wähle in **Die Sims 3** ein öffentliches Grundstück mit einem Gegenstand, den dein Sim benutzen kann. Begleite ihn von zu Hause durch die offene Stadt, **benutze den Gegenstand dort und kehr dann nach Hause zurück**. Such ein Ziel, von dem der Rückweg nicht zu weit ist.",
    },
  },
  {
    id: "sims-3-matching-pattern",
    moods: ["create", "relax"],
    type: "creation",
    tags: ["decorating"],
    minutes: 20,
    minimum: 3,
    installments: ["sims-3"],
    en: {
      name: "Matching Pattern",
      objective: "In **The Sims 3**, use Create a Style on two pieces of furniture in the same room. Copy a color or pattern from one to the other, **save the room, and see both pieces together in Live Mode**.",
    },
    de: {
      name: "Passendes Muster",
      objective: "Nutze in **Die Sims 3** „Erstelle einen Stil“ für zwei Möbelstücke im selben Raum. Übertrage eine Farbe oder ein Muster von einem aufs andere, **speichere und sieh dir beide Möbelstücke im Live-Modus zusammen an**.",
    },
  },
  {
    id: "sims-4-aspiration-step",
    moods: ["progress", "focused"],
    type: "objective",
    tags: ["current-save"],
    minutes: 25,
    minimum: 3,
    installments: ["sims-4"],
    en: {
      name: "One Aspiration Step",
      objective: "In **The Sims 4**, open your active Sim's aspiration and choose a listed goal you can do today with what is already available. **Complete that goal and watch it get checked off**. You do not need to finish the whole aspiration.",
    },
    de: {
      name: "Ein Schritt zum Bestreben",
      objective: "Öffne in **Die Sims 4** das Bestreben deines aktiven Sims. Wähle ein angezeigtes Ziel, das du heute mit dem Vorhandenen erreichen kannst, und **spiele, bis es abgehakt ist**. Das ganze Bestreben muss nicht fertig werden.",
    },
  },
  {
    id: "sims-4-room-in-use",
    moods: ["create", "relax"],
    type: "creation",
    tags: ["building", "decorating"],
    minutes: 30,
    minimum: 5,
    installments: ["sims-4"],
    en: {
      name: "Room in Use",
      objective: "In **The Sims 4**, use Build Mode to add a small room to a household with enough space and money. Give it a door and one usable object, then **save and have a Sim use that object**.",
    },
    de: {
      name: "Ein Raum zum Benutzen",
      objective: "Bau in **Die Sims 4** im Bau-Modus einen kleinen Raum an ein Haus mit genug Platz und Geld an. Setz eine Tür und einen benutzbaren Gegenstand hinein. **Speichere und lass einen Sim den Gegenstand benutzen**.",
    },
  },
  {
    id: "sims-4-emotional-conversation",
    moods: ["curious", "focused"],
    type: "experiment",
    tags: ["dialogue", "new-approach"],
    minutes: 15,
    minimum: 3,
    installments: ["sims-4"],
    en: {
      name: "Read the Mood",
      objective: "In **The Sims 4**, pick a Sim with an emotion-specific social interaction available. Talk to one acquaintance normally, then **use an interaction marked for your Sim's current emotion with that same person**. See how the conversation changes.",
    },
    de: {
      name: "Der Stimmung folgen",
      objective: "Wähle in **Die Sims 4** einen Sim, der eine soziale Interaktion passend zu seiner aktuellen Stimmung nutzen kann. Sprich erst ganz normal mit einem Bekannten und **nutze dann bei derselben Person eine stimmungsabhängige Interaktion**. Schau, wie sich das Gespräch verändert.",
    },
  },
  {
    id: "s3-favorite-meal",
    installments: [
      "sims-3"
    ],
    moods: [
      "relax",
      "low-energy"
    ],
    type: "objective",
    tags: [
      "cooking"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Their Favorite Meal",
      objective: "In **The Sims 3**, with your Sim’s favorite food recipe and ingredients available, **cook that food and have the Sim eat a serving**. Use a prepared kitchen."
    },
    de: {
      name: "Das Lieblingsessen",
      objective: "**Die Sims 3**: **Koch das Lieblingsessen deines Sims und lass ihn eine Portion essen**, wenn Rezept, Zutaten und eine fertige Küche vorhanden sind."
    }
  },
  {
    id: "s3-finish-short-book",
    installments: [
      "sims-3"
    ],
    moods: [
      "create",
      "focused"
    ],
    type: "creation",
    tags: [
      "story"
    ],
    minutes: 25,
    minimum: 5,
    en: {
      name: "A Short Book",
      objective: "In **The Sims 3**, with a computer ready, start a fiction novel or resume one that is nearly finished. Choose a title about a town event and **finish the manuscript**."
    },
    de: {
      name: "Ein kurzes Buch",
      objective: "**Die Sims 3**: Beginne an einem vorhandenen Computer einen Roman oder setzt einen fast fertigen fort. Gib ihm einen Titel über ein Ereignis in der Stadt und **stelle das Manuskript fertig**."
    }
  },
  {
    id: "s3-household-portrait",
    rarity: "special",
    installments: [
      "sims-3"
    ],
    moods: [
      "create",
      "relax"
    ],
    type: "creation",
    tags: [
      "decorating"
    ],
    minutes: 25,
    minimum: 5,
    en: {
      name: "Someone for the Wall",
      objective: "In **The Sims 3**, with Paint Portrait unlocked, an easel and another household Sim present, paint their portrait. **Hang the finished painting in the room that suits them best**, then return to Live Mode to see it there."
    },
    de: {
      name: "Jemand für die Wand",
      objective: "Male in **Die Sims 3** mit freigeschaltetem Porträtmalen und vorhandener Staffelei einen anderen anwesenden Haushaltssim. **Häng das fertige Bild in das Zimmer, das am besten zu ihm passt**, und schau es dir im Live-Modus dort an."
    }
  },
  {
    id: "s3-guitar-for-the-park",
    installments: [
      "sims-3"
    ],
    moods: [
      "relax",
      "create"
    ],
    type: "inspiration",
    tags: [
      "rhythm"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Guitar in the Park",
      objective: "In **The Sims 3**, take a guitar to a busy park with a Sim who can play for tips. Play for the people passing by and enjoy the town around the music. You do not need to earn anything."
    },
    de: {
      name: "Eine Gitarre im Park",
      objective: "**Die Sims 3**: Nimm mit einem Sim, der für Trinkgeld spielen kann, eine Gitarre in einen belebten Park mit. Spiel für die Passanten und schau dem Leben in der Stadt zu. Verdienen musst du nichts."
    }
  },
  {
    id: "s3-chess-ranked-game",
    installments: [
      "sims-3"
    ],
    moods: [
      "focused",
      "curious"
    ],
    type: "objective",
    tags: [
      "abilities"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "The Next Chess Opponent",
      objective: "In **The Sims 3**, with a chess table and Ranked Chess Match available by phone, **invite the next opponent and play one full ranked game**. Any result counts."
    },
    de: {
      name: "Der nächste Schachgegner",
      objective: "**Die Sims 3**: **Lade mit vorhandenem Schachtisch und verfügbarer Telefonoption für ein Ranglistenspiel den nächsten Gegner ein und spiel eine ganze Partie**. Jedes Ergebnis zählt."
    }
  },
  {
    id: "s3-fertilize-with-fish",
    installments: [
      "sims-3"
    ],
    moods: [
      "progress",
      "curious"
    ],
    type: "objective",
    tags: [
      "farming",
      "fishing"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Feed the Garden",
      objective: "In **The Sims 3**, with fertilizing unlocked, fish in inventory and three growing plants ready, **fertilize those plants with fish**. The harvest can wait."
    },
    de: {
      name: "Das Beet füttern",
      objective: "**Die Sims 3**: **Dünge mit freigeschaltetem Düngen drei wachsende Pflanzen mit vorhandenen Fischen**. Die Ernte kann warten."
    }
  },
  {
    id: "s3-bait-at-one-pond",
    installments: [
      "sims-3"
    ],
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "fishing"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Fish with a Clue",
      objective: "In **The Sims 3**, with bait fishing unlocked and bait for a fish listed in your fishing journal, visit water that contains it. **Fish once without bait, then with its listed bait, and compare what you catch**. No rare fish is required."
    },
    de: {
      name: "Angeln mit Hinweis",
      objective: "**Die Sims 3**: Besuche mit freigeschaltetem Köderangeln ein Gewässer für einen Fisch aus deinem Angeltagebuch. Halte seinen angegebenen Köder bereit. **Angle erst ohne und dann mit diesem Köder und vergleiche deine Fänge**. Ein seltener Fisch ist kein Muss."
    }
  },
  {
    id: "s3-self-cleaning-upgrade",
    installments: [
      "sims-3"
    ],
    moods: [
      "progress",
      "focused"
    ],
    type: "objective",
    tags: [
      "crafting"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Cleans Itself",
      objective: "In **The Sims 3**, with the Self-Cleaning upgrade available on an owned sink or toilet, **complete that upgrade and use the fixture once**. Start with the Handiness level already unlocked."
    },
    de: {
      name: "Putzt sich selbst",
      objective: "**Die Sims 3**: **Bau ein eigenes Waschbecken oder eine Toilette mit verfügbarer Selbstreinigungs-Option um und benutzt es einmal**. Starte mit der schon erreichten nötigen Geschicklichkeitsstufe."
    }
  },
  {
    id: "s3-metal-from-the-mail",
    installments: [
      "sims-3"
    ],
    moods: [
      "curious",
      "progress"
    ],
    type: "objective",
    tags: [
      "collectibles"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "A Metal Comes Back",
      objective: "In **The Sims 3**, with an unsmelted metal and postage ready, send it for smelting. **Collect the ingot from the next mail delivery and display it at home**. Start before today’s mail if possible."
    },
    de: {
      name: "Ein Metall kommt zurück",
      objective: "**Die Sims 3**: Schick mit vorhandenem unverarbeitetem Metall und Versandgeld das Metall zum Schmelzen. **Hol den Barren mit der nächsten Post ab und stell ihn zu Hause aus**. Starte möglichst vor der heutigen Post."
    }
  },
  {
    id: "s3-insect-science-donation",
    installments: [
      "sims-3"
    ],
    moods: [
      "progress",
      "explore"
    ],
    type: "objective",
    tags: [
      "collectibles"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "A Specimen for Science",
      objective: "In **The Sims 3**, with an insect already in inventory and a science facility in town, **take the insect there and sell it to science**. Read which insect you handed over."
    },
    de: {
      name: "Ein Fund für Forscher",
      objective: "**Die Sims 3**: **Bring ein vorhandenes Insekt zur Forschungseinrichtung der Stadt und verkaufe es dort an die Forschung**. Schau dir an, welche Art du abgegeben hast."
    }
  },
  {
    id: "s3-tomb-switch",
    installments: [
      "sims-3"
    ],
    moods: [
      "explore",
      "focused"
    ],
    type: "objective",
    tags: [
      "puzzles"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "The Door Beyond",
      objective: "In **The Sims 3**, with **World Adventures** installed and your Sim already in a tomb, find a reachable floor-switch puzzle. **Open its linked door and enter the room behind it**. Leave the rest of the tomb for later."
    },
    de: {
      name: "Die Tür dahinter",
      objective: "**Die Sims 3**: Such mit **Reiseabenteuer** und einem Sim, der schon in einer Gruft ist, ein erreichbares Rätsel mit Bodenschalter. **Öffne die zugehörige Tür und betritt den Raum dahinter**. Der Rest der Gruft kann warten."
    }
  },
  {
    id: "s3-first-nectar-batch",
    installments: [
      "sims-3"
    ],
    moods: [
      "create",
      "relax"
    ],
    type: "creation",
    tags: [
      "cooking"
    ],
    minutes: 25,
    minimum: 5,
    en: {
      name: "Your Own Blend",
      objective: "In **The Sims 3**, with **World Adventures**, a Nectar Maker and ten fruits ready, choose a fruit blend. **Make one batch, name it and put its bottles in a nectar rack**. Any quality counts."
    },
    de: {
      name: "Deine eigene Mischung",
      objective: "**Die Sims 3**: Wähle mit **Reiseabenteuer**, Nektarmaschine und zehn vorhandenen Früchten eine Mischung. **Stell eine Charge her, benenne sie und lagere die Flaschen im Nektarregal**. Jede Qualität zählt."
    }
  },
  {
    id: "s3-clay-sculpture",
    installments: [
      "sims-3"
    ],
    moods: [
      "create",
      "focused"
    ],
    type: "creation",
    tags: [
      "decorating"
    ],
    minutes: 25,
    minimum: 5,
    en: {
      name: "A Lump of Clay",
      objective: "In **The Sims 3**, with **Ambitions**, a Sculpting Station and the clay option available, **finish one clay sculpture and place it in the yard**. Keep whatever your Sim makes."
    },
    de: {
      name: "Aus einem Klumpen Ton",
      objective: "**Die Sims 3**: **Stell mit Traumkarrieren, Bildhauerstation und verfügbarer Tonoption eine Tonskulptur fertig und stell sie in den Garten**. Behalte, was dein Sim macht."
    }
  },
  {
    id: "s3-invented-toy",
    installments: [
      "sims-3"
    ],
    moods: [
      "create",
      "curious"
    ],
    type: "experiment",
    tags: [
      "crafting"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Made from Scrap",
      objective: "In **The Sims 3**, with **Ambitions**, an inventing workbench, scrap and a known toy invention, **build that toy and have a household Sim play with it**."
    },
    de: {
      name: "Aus Schrott gemacht",
      objective: "**Die Sims 3**: **Bau mit Traumkarrieren, Erfinderwerkbank, Schrott und einer bekannten Spielzeugerfindung dieses Spielzeug und lass einen Haushaltssim damit spielen**."
    }
  },
  {
    id: "s3-drink-and-mood",
    installments: [
      "sims-3"
    ],
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "cooking"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Mix, Then Taste",
      objective: "In **The Sims 3**, with **Late Night**, a professional bar and an unlocked mood drink, **mix one serving and have your Sim drink it**. Compare the resulting moodlets with those before the drink."
    },
    de: {
      name: "Mixen und probieren",
      objective: "**Die Sims 3**: **Mixe mit Late Night, professioneller Bar und einem freigeschalteten Stimmungsdrink eine Portion und lass deinen Sim sie trinken**. Vergleiche seine Stimmungen vor und nach dem Drink."
    }
  },
  {
    id: "s3-festival-family-card",
    installments: [
      "sims-3"
    ],
    moods: [
      "create",
      "relax"
    ],
    type: "creation",
    tags: [
      "photography"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Together on a Card",
      objective: "In **The Sims 3**, with **Seasons**, an open festival and at least two household Sims present, **take a greeting-card photo together and display the card at home**."
    },
    de: {
      name: "Zusammen auf einer Karte",
      objective: "**Die Sims 3**: **Macht mit Jahreszeiten, einem offenen Fest und mindestens zwei anwesenden Haushaltssims gemeinsam ein Grußkartenfoto und stellt die Karte zu Hause auf**."
    }
  },
  {
    id: "s3-dog-known-trick",
    installments: [
      "sims-3"
    ],
    moods: [
      "relax",
      "low-energy"
    ],
    type: "objective",
    tags: [
      "animals"
    ],
    minutes: 10,
    minimum: 2,
    en: {
      name: "Show Me the Trick",
      objective: "In **The Sims 3**, with **Pets** and a dog that already knows a trick, **ask it to perform that trick and praise it afterward**. Stay in your own yard."
    },
    de: {
      name: "Zeig den Trick",
      objective: "**Die Sims 3**: **Lass mit Einfach tierisch einen Hund einen schon gelernten Trick zeigen und lobe ihn danach**. Bleib im eigenen Garten."
    }
  },
  {
    id: "s3-elixir-in-use",
    installments: [
      "sims-3"
    ],
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "crafting"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Bottled Change",
      objective: "In **The Sims 3**, with **Supernatural**, an alchemy station and the recipe and ingredients for a beneficial elixir ready, **brew it and use it on your own Sim**. Check its effect before choosing the recipe."
    },
    de: {
      name: "Veränderung in der Flasche",
      objective: "**Die Sims 3**: **Braue mit Supernatural an der Alchemiestation ein hilfreiches Elixier und nutzt es auf deinem eigenen Sim**. Halte Rezept und Zutaten bereit und lies die Wirkung, bevor du das Rezept auswählst."
    }
  },
  {
    id: "s3-diving-ground-tour",
    installments: [
      "sims-3"
    ],
    moods: [
      "relax",
      "explore"
    ],
    type: "inspiration",
    tags: [
      "diving"
    ],
    minutes: 25,
    minimum: 3,
    en: {
      name: "Below Isla Paradiso",
      objective: "In **The Sims 3**, with **Island Paradise** and the Scuba Diving level for a nearby dive area already reached, head below the buoy. Explore the seabed and the sea life at your own pace, surfacing before your air runs out."
    },
    de: {
      name: "Unter Isla Paradiso",
      objective: "**Die Sims 3**: Tauche mit **Inselparadies** und schon ausreichender Tauchstufe am Bojenmarker eines nahen Tauchgebiets ab. Schau dich am Meeresboden und bei den Meerestieren um und tauch auf, bevor die Luft ausgeht."
    }
  },
  {
    id: "s3-home-ground-mural",
    installments: [
      "sims-3"
    ],
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
      name: "A Mural at Home",
      objective: "In **The Sims 3**, with **University Life**, a Street Art Kit and the ground-mural option unlocked, **finish a mural on your home lot**. Pick a patch where it will stay visible."
    },
    de: {
      name: "Das Bild vorm Haus",
      objective: "**Die Sims 3**: **Stell mit Wildes Studentenleben, Street-Art-Ausrüstung und freigeschalteter Bodenbild-Option ein Bodenbild auf deinem Wohngrundstück fertig**. Wähle eine Stelle, an der es sichtbar bleibt."
    }
  },
  {
    id: "s4-graft-garden-branch",
    installments: [
      "sims-4"
    ],
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "farming"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Two Plants, One Branch",
      objective: "In **The Sims 4**, with Take Cutting and Graft unlocked and two different mature garden plants ready, **take a cutting from one and graft it onto the other**. Check the resulting plant label. Fruit can grow later."
    },
    de: {
      name: "Zwei Pflanzen, ein Zweig",
      objective: "**Die Sims 4**: **Nimm mit freigeschaltetem Abschneiden und Veredeln von einer ausgewachsenen Gartenpflanze einen Ableger und veredle damit eine andere Pflanzenart**. Prüfe den neuen Pflanzennamen. Früchte dürfen später wachsen."
    }
  },
  {
    id: "s4-plant-under-microscope",
    installments: [
      "sims-4"
    ],
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "collectibles"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "A Leaf Up Close",
      objective: "In **The Sims 4**, with a microscope, garden plant and Collect Microscope Sample available, **take a plant sample and analyze it under the microscope**. A collectible print is optional."
    },
    de: {
      name: "Das Blatt ganz nah",
      objective: "**Die Sims 4**: **Nimm mit vorhandenem Mikroskop, Gartenpflanze und verfügbarer Probenoption eine Pflanzenprobe und analysiere sie unter dem Mikroskop**. Ein Sammelbild ist optional."
    }
  },
  {
    id: "s4-woodwork-stool",
    installments: [
      "sims-4"
    ],
    moods: [
      "create",
      "relax"
    ],
    type: "creation",
    tags: [
      "crafting",
      "decorating"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "A Stool from Scratch",
      objective: "In **The Sims 4**, with a woodworking table and the barstool recipe unlocked, **craft a barstool, place it at home and have a Sim sit on it**. Have the crafting fee ready."
    },
    de: {
      name: "Ein selbstgebauter Hocker",
      objective: "**Die Sims 4**: **Stell mit Holzwerkbank und freigeschaltetem Barhocker-Rezept einen Barhocker her, stell ihn zu Hause auf und lass einen Sim darauf sitzen**. Halte die Herstellungskosten bereit."
    }
  },
  {
    id: "s4-paint-the-view",
    installments: [
      "sims-4"
    ],
    moods: [
      "create",
      "focused"
    ],
    type: "creation",
    tags: [
      "decorating"
    ],
    minutes: 25,
    minimum: 5,
    en: {
      name: "Paint This View",
      objective: "In **The Sims 4**, with Paint from Reference unlocked and an easel ready, frame a corner of your home through the painting camera. **Finish the painting and hang it near the view it shows**."
    },
    de: {
      name: "Diese Aussicht malen",
      objective: "**Die Sims 4**: Wähle mit freigeschaltetem Malen nach Vorlage und vorhandener Staffelei eine Ecke deines Hauses im Kameraausschnitt. **Stell das Bild fertig und häng es nahe der gezeigten Aussicht auf**."
    }
  },
  {
    id: "s4-programming-hack",
    installments: [
      "sims-4"
    ],
    moods: [
      "curious",
      "progress"
    ],
    type: "objective",
    tags: [
      "abilities"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "A First Hack",
      objective: "In **The Sims 4**, with a computer and a hack target already unlocked through Programming, **finish one available hack and read its payout**. Keep your Sim at the computer until the attempt ends."
    },
    de: {
      name: "Ein erster Hack",
      objective: "**Die Sims 4**: **Beende an einem vorhandenen Computer einen schon durch Programmieren freigeschalteten Hack und lies die Auszahlung**. Lass deinen Sim bis zum Ende des Versuchs am Computer."
    }
  },
  {
    id: "s4-comedy-routine-night",
    installments: [
      "sims-4"
    ],
    moods: [
      "create",
      "focused"
    ],
    type: "creation",
    tags: [
      "dialogue"
    ],
    minutes: 25,
    minimum: 5,
    en: {
      name: "Your Sim’s Set",
      objective: "In **The Sims 4**, with writing and performing comedy routines unlocked, write one short routine at the computer. **Perform it at a microphone on a public lot**. No particular audience reaction is needed."
    },
    de: {
      name: "Das Programm deines Sims",
      objective: "**Die Sims 4**: Schreib mit freigeschaltetem Schreiben und Vortragen von Comedy-Programmen ein kurzes Programm am Computer. **Trag es an einem Mikrofon auf einem öffentlichen Grundstück vor**. Eine bestimmte Publikumsreaktion brauchst du nicht."
    }
  },
  {
    id: "s4-observatory-night",
    installments: [
      "sims-4"
    ],
    moods: [
      "relax",
      "curious"
    ],
    type: "inspiration",
    tags: [
      "collectibles"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Above the Neighborhood",
      objective: "In **The Sims 4**, with an observatory available after dark, spend the evening looking at the sky with a Sim. Watch their reactions and see whether they find a new space print. The print is optional."
    },
    de: {
      name: "Über der Nachbarschaft",
      objective: "**Die Sims 4**: Verbringe mit einem nachts verfügbaren Observatorium den Abend beim Blick in den Himmel. Schau den Reaktionen deines Sims zu und ob ein neues Weltraumbild auftaucht. Das Bild ist optional."
    }
  },
  {
    id: "s4-rocket-trip",
    installments: [
      "sims-4"
    ],
    moods: [
      "explore",
      "curious"
    ],
    type: "objective",
    tags: [
      "space"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Out and Back",
      objective: "In **The Sims 4**, with a fully built rocket ready, **send a Sim to explore space, choose the options in the adventure and bring them home**. You do not need a specific souvenir."
    },
    de: {
      name: "Hin und zurück",
      objective: "**Die Sims 4**: **Schick mit fertiger Rakete einen Sim ins All, wähle die Optionen des Abenteuers und bring ihn nach Hause zurück**. Ein bestimmtes Mitbringsel brauchst du nicht."
    }
  },
  {
    id: "s4-frog-breeding-result",
    installments: [
      "sims-4"
    ],
    moods: [
      "curious",
      "progress"
    ],
    type: "objective",
    tags: [
      "collectibles"
    ],
    minutes: 10,
    minimum: 2,
    en: {
      name: "One More Frog",
      objective: "In **The Sims 4**, with two breedable frogs already owned, **breed them once and check the new frog’s species in your collection**. A duplicate still counts."
    },
    de: {
      name: "Noch ein Frosch",
      objective: "**Die Sims 4**: **Züchte mit zwei vorhandenen zuchtfähigen Fröschen einmal Nachwuchs und prüfe seine Art in deiner Sammlung**. Auch ein Duplikat zählt."
    }
  },
  {
    id: "s4-lab-metal-analysis",
    installments: [
      "sims-4"
    ],
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "collectibles"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Metal in the Lab",
      objective: "In **The Sims 4**, with **Get to Work**, a scientist Sim already at an active workday and an analyzer available, **analyze one metal and read the result**. Use a specimen you already have."
    },
    de: {
      name: "Metall im Labor",
      objective: "**Die Sims 4**: **Analysiere mit An die Arbeit, einem Wissenschaftler-Sim im aktiven Arbeitstag und vorhandenem Analysegerät ein schon vorhandenes Metall und lies das Ergebnis**."
    }
  },
  {
    id: "s4-club-that-cooks",
    installments: [
      "sims-4"
    ],
    moods: [
      "create",
      "focused"
    ],
    type: "creation",
    tags: [
      "cooking",
      "dialogue"
    ],
    minutes: 25,
    minimum: 5,
    en: {
      name: "A Cooking Club",
      objective: "In **The Sims 4**, with **Get Together**, create a club with cooking and eating as its encouraged activities. **Start a gathering at a usable kitchen and cook a group meal with the members present**."
    },
    de: {
      name: "Ein Kochclub",
      objective: "**Die Sims 4**: Gründe mit **Zeit für Freunde** einen Club, der Kochen und Essen fördert. **Starte ein Treffen an einer benutzbaren Küche und koche mit anwesenden Mitgliedern eine Mahlzeit für mehrere Sims**."
    }
  },
  {
    id: "s4-festival-food-recipe",
    installments: [
      "sims-4"
    ],
    moods: [
      "curious",
      "progress"
    ],
    type: "objective",
    tags: [
      "cooking"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Learn It by Eating",
      objective: "In **The Sims 4**, with **City Living** and a festival food stall already open, buy a dish whose recipe your Sim has not learned. **Finish eating it and check the learned-recipe notification**. Have the price ready."
    },
    de: {
      name: "Durch Essen lernen",
      objective: "**Die Sims 4**: Kauf mit **Großstadtleben** an einem schon offenen Festivalstand ein Gericht, dessen Rezept dein Sim noch nicht kennt. **Iss es auf und prüfe die Meldung zum gelernten Rezept**. Halte den Preis bereit."
    }
  },
  {
    id: "s4-vet-patient-treatment",
    installments: [
      "sims-4"
    ],
    moods: [
      "focused",
      "progress"
    ],
    type: "objective",
    tags: [
      "animals"
    ],
    minutes: 25,
    minimum: 5,
    en: {
      name: "One Vet Patient",
      objective: "In **The Sims 4**, with **Cats & Dogs**, an owned vet clinic and a patient already waiting, **examine that pet, identify its illness and give the indicated treatment**. Finish when the treatment ends."
    },
    de: {
      name: "Ein Tierarztpatient",
      objective: "**Die Sims 4**: **Untersuche mit Hunde & Katzen in deiner eigenen Tierklinik einen schon wartenden Patienten, bestimme seine Krankheit und gib die passende Behandlung**. Nach der Behandlung ist Schluss."
    }
  },
  {
    id: "s4-flower-arrangement-table",
    installments: [
      "sims-4"
    ],
    moods: [
      "create",
      "relax"
    ],
    type: "creation",
    tags: [
      "decorating"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Flowers for the Table",
      objective: "In **The Sims 4**, with **Seasons**, a flower-arranging table and an affordable arrangement recipe available, **finish one arrangement and display it on your dining table**. Use owned flowers or pay for the missing ones."
    },
    de: {
      name: "Blumen für den Tisch",
      objective: "**Die Sims 4**: **Stell mit Jahreszeiten, Blumentisch und einem bezahlbaren Rezept ein Blumengesteck fertig und stell es auf deinen Esstisch**. Nutze eigene Blumen oder bezahle die fehlenden."
    }
  },
  {
    id: "s4-sulani-beach-cleanup",
    installments: [
      "sims-4"
    ],
    moods: [
      "progress",
      "relax"
    ],
    type: "objective",
    tags: [
      "exploration"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "A Cleaner Shore",
      objective: "In **The Sims 4**, with **Island Living** and visible trash on a Sulani beach, **clear three pieces of beach trash**. The island’s full conservation progress can wait."
    },
    de: {
      name: "Ein saubereres Ufer",
      objective: "**Die Sims 4**: **Räume mit Inselleben drei sichtbare Müllhaufen an einem Strand von Sulani weg**. Die gesamte Inselpflege kann warten."
    }
  },
  {
    id: "s4-robotics-toy-bot",
    installments: [
      "sims-4"
    ],
    moods: [
      "create",
      "curious"
    ],
    type: "experiment",
    tags: [
      "crafting"
    ],
    minutes: 25,
    minimum: 5,
    en: {
      name: "A Little Robot",
      objective: "In **The Sims 4**, with **Discover University**, a robotics workstation, Toy Bot unlocked and its parts ready, **build the toy and have a household Sim play with it**."
    },
    de: {
      name: "Ein kleiner Roboter",
      objective: "**Die Sims 4**: **Bau mit An die Uni, Robotikstation, freigeschaltetem Spielzeugroboter und vorhandenen Teilen den Roboter und lass einen Haushaltssim damit spielen**."
    }
  },
  {
    id: "s4-handmade-candle",
    installments: [
      "sims-4"
    ],
    moods: [
      "create",
      "relax"
    ],
    type: "creation",
    tags: [
      "crafting",
      "decorating"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Light You Made",
      objective: "In **The Sims 4**, with **Eco Lifestyle**, a candle-making table, wax and candle materials ready, **make one candle, place it at home and light it**."
    },
    de: {
      name: "Selbst gemachtes Licht",
      objective: "**Die Sims 4**: **Stell mit Nachhaltig leben, Kerzentisch, Wachs und den übrigen Kerzenmaterialien eine Kerze her, stell sie zu Hause auf und zünde sie an**."
    }
  },
  {
    id: "s4-chocolate-cow-milk",
    installments: [
      "sims-4"
    ],
    moods: [
      "curious",
      "progress"
    ],
    type: "objective",
    tags: [
      "animals",
      "cooking"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Chocolate from the Cow",
      objective: "In **The Sims 4**, with **Cottage Living**, an owned cow ready to milk and a Chocolatey Treat already owned, **feed the treat, milk the cow and collect chocolate milk**."
    },
    de: {
      name: "Schokolade von der Kuh",
      objective: "**Die Sims 4**: **Füttere mit Landhaus-Leben deine melkbereite Kuh mit einem vorhandenen Schoko-Leckerli, melke sie und sammle Schokomilch**."
    }
  },
  {
    id: "s4-short-climbing-route",
    installments: [
      "sims-4"
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
      name: "The Short Climb",
      objective: "In **The Sims 4**, with **Snowy Escape** and a rock wall appropriate to your Sim’s current Climbing skill, **complete one climb**, or stop after three attempts. Use climbing gear if you own it."
    },
    de: {
      name: "Der kurze Aufstieg",
      objective: "**Die Sims 4**: **Schaffe mit Ab ins Schneeparadies an einer Felswand passend zur aktuellen Kletterstufe deines Sims einen Aufstieg**, oder hör nach drei Versuchen auf. Nutze Kletterausrüstung, falls du sie hast."
    }
  },
  {
    id: "s4-cheer-solo-routine",
    installments: [
      "sims-4"
    ],
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "rhythm"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Try the Cheer Mat",
      objective: "In **The Sims 4**, with **High School Years** and a cheerleading mat available, **have a teen Sim perform one solo routine and watch it to the end**. Any performance quality counts."
    },
    de: {
      name: "Auf die Cheerleading-Matte",
      objective: "**Die Sims 4**: **Lass mit Highschool-Jahre einen Teenager an einer vorhandenen Cheerleading-Matte ein Soloprogramm vorführen und schau bis zum Ende zu**. Jede Qualität zählt."
    }
  }
]);
