import { defineGameQuests } from "../defineGameQuests";

export const kingdomComeQuests = defineGameQuests("kingdom-come-deliverance", [
  {
    "id": "an-honest-night",
    "moods": [
      "progress",
      "focused"
    ],
    "type": "objective",
    "tags": [
      "crafting",
      "trading"
    ],
    "minutes": 30,
    "minimum": 5,
    "en": {
      "name": "An Honest Night",
      "objective": "In **Kingdom Come: Deliverance (1)**, with the Marigold Decoction recipe known, gather nettles and marigolds and brew by hand. Sell your potions and **pay for an available inn room from those earnings**. No bought herbs or stolen goods."
    },
    "de": {
      "name": "Ehrlich verdient",
      "objective": "Wenn du in **Kingdom Come: Deliverance (1)** das Rezept für Ringelblumentrank kennst, sammle Brennnesseln und Ringelblumen und brau den Trank selbst. Verkaufe die Tränke und **bezahle von den Einnahmen ein verfügbares Bett im Gasthaus**. Keine gekauften Kräuter oder gestohlenen Waren."
    },
    "installments": [
      "kcd-1"
    ]
  },
  {
    "id": "treasure-by-landmarks",
    "moods": [
      "explore",
      "curious"
    ],
    "type": "objective",
    "tags": [
      "exploration"
    ],
    "minutes": 30,
    "minimum": 5,
    "en": {
      "name": "Read the Landscape",
      "objective": "In **Kingdom Come: Deliverance (1)**, bring a spade, lockpicks, and an unsolved treasure map for an accessible region. Use its roads, rivers, and buildings to **find and open that treasure chest**."
    },
    "de": {
      "name": "Die Landschaft lesen",
      "objective": "Nimm in **Kingdom Come: Deliverance (1)** einen Spaten, Dietriche und eine ungelöste Schatzkarte für eine erreichbare Gegend mit. Orientiere dich an ihren Straßen, Flüssen und Gebäuden, um **die Schatztruhe zu finden und zu öffnen**."
    },
    "installments": [
      "kcd-1"
    ]
  },
  {
    "id": "forge-and-equip",
    "moods": [
      "create",
      "progress"
    ],
    "type": "creation",
    "tags": [
      "crafting"
    ],
    "minutes": 25,
    "minimum": 5,
    "en": {
      "name": "Made by Henry",
      "objective": "After learning smithing in **Kingdom Come: Deliverance II**, bring the materials for a sword sketch you own. Heat and hammer the blade yourself, then **finish and equip your own sword**."
    },
    "de": {
      "name": "Von Heinrich gemacht",
      "objective": "Wenn du in **Kingdom Come: Deliverance II** Schmieden gelernt hast und eine Schwertskizze besitzt, besorg die Materialien dafür. **Schmiede das Schwert selbst und rüste es aus**."
    },
    "installments": [
      "kcd-2"
    ]
  },
  {
    "id": "kcd2-ordinary-dice",
    "moods": [
      "relax",
      "nostalgic"
    ],
    "type": "inspiration",
    "tags": [
      "no-timer"
    ],
    "minutes": 20,
    "minimum": 3,
    "en": {
      "name": "Leave the Lucky Dice",
      "objective": "Sit down for tavern dice in **Kingdom Come: Deliverance II**. Use ordinary dice and a small stake you can spare. Finish one game without chasing a winnings target."
    },
    "de": {
      "name": "Ohne Glückswürfel",
      "objective": "Setze dich in **Kingdom Come: Deliverance II** zum Würfeln ins Wirtshaus. Nimm gewöhnliche Würfel und einen kleinen Einsatz, den du übrig hast. Spiele eine Partie zu Ende, ohne einem Gewinnziel hinterherzujagen."
    },
    "installments": [
      "kcd-2"
    ]
  },
  {
    "id": "bernhard-counter",
    "moods": [
      "challenge",
      "focused"
    ],
    "type": "challenge",
    "tags": [
      "parry"
    ],
    "minutes": 15,
    "minimum": 3,
    "en": {
      "name": "Wait for the Swing",
      "objective": "Once Bernard offers practice and you know perfect blocks in **Kingdom Come: Deliverance (1)**, start a practice sword fight. Attack only immediately after a perfect block and **land three counterattacks before ending practice**."
    },
    "de": {
      "name": "Warte auf den Schlag",
      "objective": "Beginne in **Kingdom Come: Deliverance (1)** einen Übungskampf mit Bernard, sobald du perfekte Blocks kennst. Greife nur direkt nach einem perfekten Block an und **lande drei Gegenangriffe, bevor du das Training beendest**."
    },
    "installments": [
      "kcd-1"
    ]
  },
  {
    "id": "fresh-and-dried",
    "moods": [
      "curious",
      "create"
    ],
    "type": "experiment",
    "tags": [
      "crafting",
      "new-approach"
    ],
    "minutes": 30,
    "minimum": 5,
    "en": {
      "name": "Fresh or Dried",
      "objective": "In **Kingdom Come: Deliverance II**, with an alchemy bench and drying rack accessible, gather herbs for two Marigold Decoctions. Dry one batch. **Brew both with the same steps and compare their quality** in your inventory."
    },
    "de": {
      "name": "Frisch oder getrocknet",
      "objective": "Sammle in **Kingdom Come: Deliverance II** Kräuter für zwei Ringelblumentränke. Trockne eine Portion. **Brau beide Tränke mit denselben Schritten und vergleiche ihre Qualität** im Inventar. Du brauchst dafür Alchemietisch und Trockengestell."
    },
    "installments": [
      "kcd-2"
    ]
  },
  {
    id: "kcd1-chumps-logs",
    installments: [
      "kcd-1"
    ],
    moods: [
      "curious",
      "restless"
    ],
    type: "objective",
    tags: [
      "one-round"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Logs on the River",
      objective: "Join Chumps with Vatzek in Ledetchko in **Kingdom Come: Deliverance**. **Finish one contest shooting the drifting logs**, following them along the riverbank. You do not need to win."
    },
    de: {
      name: "Stämme auf dem Fluss",
      objective: "Spiel in **Kingdom Come: Deliverance** bei Vatzek in Ledetschko das Bogenspiel auf dem Fluss. **Schieß eine Partie lang auf die treibenden Stämme** und folge ihnen am Ufer. Gewinnen musst du nicht."
    }
  },
  {
    id: "kcd1-range-score",
    installments: [
      "kcd-1"
    ],
    moods: [
      "focused",
      "challenge"
    ],
    type: "challenge",
    tags: [
      "three-attempts"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Rattay Targets",
      objective: "With a bow and arrows in **Kingdom Come: Deliverance**, enter a beginner archery contest in Rattay. **Win one contest** or stop after three entries."
    },
    de: {
      name: "Scheiben in Rattay",
      objective: "Nimm in **Kingdom Come: Deliverance** mit Bogen und Pfeilen am Anfänger-Bogenturnier in Rattay teil. **Gewinne eine Partie** oder hör nach drei Teilnahmen auf."
    }
  },
  {
    id: "kcd1-peshek-chest",
    installments: [
      "kcd-1"
    ],
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "stealth"
    ],
    minutes: 10,
    minimum: 2,
    en: {
      name: "Peshek’s Practice Lock",
      objective: "After Peshek’s lockpicking lesson in **Kingdom Come: Deliverance**, use his practice chest. **Open it once and close it again**, watching how the sweet spot moves with the lock."
    },
    de: {
      name: "Pescheks Übungsschloss",
      objective: "Benutze in **Kingdom Come: Deliverance** nach Pescheks Dietrich-Unterricht seine Übungstruhe. **Öffne sie einmal und mach sie wieder zu**. Achte darauf, wie sich der richtige Punkt beim Drehen bewegt."
    }
  },
  {
    id: "kcd1-pickpocket-lesson",
    installments: [
      "kcd-1"
    ],
    moods: [
      "curious",
      "focused"
    ],
    type: "objective",
    tags: [
      "stealth"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "The Miller’s Pocket",
      objective: "When Peshek offers pickpocket training in **Kingdom Come: Deliverance**, take his lesson. **Complete the tutorial theft and return the practice item** as he instructs."
    },
    de: {
      name: "Die Tasche des Müllers",
      objective: "Nimm in **Kingdom Come: Deliverance** Pescheks Unterricht im Taschendiebstahl an, sobald er ihn anbietet. **Besteh den Übungsdiebstahl und gib den Gegenstand zurück**, wie er es dir erklärt."
    }
  },
  {
    id: "kcd1-clean-charisma",
    installments: [
      "kcd-1"
    ],
    moods: [
      "curious"
    ],
    type: "experiment",
    tags: [
      "outfit"
    ],
    minutes: 10,
    minimum: 2,
    en: {
      name: "Dirt and First Impressions",
      objective: "Before using a bathhouse in **Kingdom Come: Deliverance**, note Henry’s charisma in his current clothes. Buy a wash and laundry, then **compare charisma in the same outfit afterward**."
    },
    de: {
      name: "Dreck und Auftreten",
      objective: "Notiere in **Kingdom Come: Deliverance** vor dem Badehaus Heinrichs Charisma in seiner aktuellen Kleidung. Lass dich und die Kleidung waschen und **vergleiche danach das Charisma im selben Outfit**."
    }
  },
  {
    id: "kcd1-noisy-armor",
    installments: [
      "kcd-1"
    ],
    moods: [
      "curious",
      "create"
    ],
    type: "experiment",
    tags: [
      "stealth",
      "outfit"
    ],
    minutes: 10,
    minimum: 2,
    en: {
      name: "Hear the Armour",
      objective: "In **Kingdom Come: Deliverance**, check your noise value with your usual armour. Remove the loudest pieces and **walk the same short route in both outfits**, comparing sound and the displayed value."
    },
    de: {
      name: "Die Rüstung hören",
      objective: "Prüfe in **Kingdom Come: Deliverance** den Geräuschwert deiner normalen Rüstung. Leg die lautesten Teile ab und **geh dieselbe kurze Strecke in beiden Outfits**. Vergleiche Klang und angezeigten Wert."
    }
  },
  {
    id: "kcd1-sharpen-price",
    installments: [
      "kcd-1"
    ],
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "trading",
      "crafting"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Steel’s Selling Price",
      objective: "With a damaged sword and legal grindstone access in **Kingdom Come: Deliverance**, check a smith’s offer before sharpening. **Sharpen it yourself and compare the new offer**, without buying a repair."
    },
    de: {
      name: "Der Preis der Klinge",
      objective: "Prüfe in **Kingdom Come: Deliverance** mit beschädigtem Schwert und legal zugänglichem Schleifstein das Angebot eines Schmieds. **Schärf die Klinge selbst und vergleiche sein neues Angebot**, ohne eine Reparatur zu kaufen."
    }
  },
  {
    id: "kcd1-reading-first",
    installments: [
      "kcd-1"
    ],
    moods: [
      "progress",
      "curious"
    ],
    type: "objective",
    tags: [
      "story"
    ],
    minutes: 25,
    minimum: 5,
    en: {
      name: "Letters in Uzhitz",
      objective: "If Henry cannot read in **Kingdom Come: Deliverance**, bring the scribe’s lesson fee to Uzhitz. **Finish the reading lesson until reading unlocks**."
    },
    de: {
      name: "Buchstaben in Uschitze",
      objective: "Bring in **Kingdom Come: Deliverance** das Geld für den Unterricht zum Schreiber in Uschitze, wenn Heinrich noch nicht lesen kann. **Schließ die Lesestunde ab, bis Lesen freigeschaltet ist**."
    }
  },
  {
    id: "kcd1-night-hawk",
    installments: [
      "kcd-1"
    ],
    moods: [
      "explore",
      "curious"
    ],
    type: "inspiration",
    tags: [
      "exploration"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "A Forest Night",
      objective: "With a Nighthawk potion already owned in **Kingdom Come: Deliverance**, visit the woods outside an unlocked village after dark. Try the potion and follow a familiar path under its changed night vision."
    },
    de: {
      name: "Eine Nacht im Wald",
      objective: "Geh in **Kingdom Come: Deliverance** mit einem bereits vorhandenen Nachtsichttrank nach Einbruch der Dunkelheit in den Wald bei einem erreichbaren Dorf. Probier den Trank und sieh dir einen vertrauten Weg mit Nachtsicht an."
    }
  },
  {
    id: "kcd1-haggle-small",
    installments: [
      "kcd-1"
    ],
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "trading"
    ],
    minutes: 10,
    minimum: 2,
    en: {
      name: "The Last Few Groschen",
      objective: "Take a legal item to a merchant in **Kingdom Come: Deliverance**. Note the listed price, then **complete one sale through haggling**, checking where the merchant accepts your offer."
    },
    de: {
      name: "Die letzten Groschen",
      objective: "Bring in **Kingdom Come: Deliverance** einen legalen Gegenstand zu einem Händler. Merk dir den Listenpreis und **schließ einen Verkauf durch Feilschen ab**. Schau, welches Angebot er akzeptiert."
    }
  },
  {
    id: "kcd1-tournament-bout",
    installments: [
      "kcd-1"
    ],
    moods: [
      "challenge",
      "focused"
    ],
    type: "challenge",
    tags: [
      "one-life"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Rattay’s First Bout",
      objective: "When the Rattay Tourney is available in **Kingdom Come: Deliverance**, pay the entry fee and **win the first bout using the supplied equipment**. One tournament entry, ending on victory or elimination."
    },
    de: {
      name: "Der erste Turnierkampf",
      objective: "Zahl in **Kingdom Come: Deliverance** bei verfügbarem Rattayer Turnier die Teilnahmegebühr und **gewinne den ersten Kampf mit der gestellten Ausrüstung**. Eine Teilnahme, bis zum Sieg oder Ausscheiden."
    }
  },
  {
    id: "kcd1-rattay-ramparts",
    installments: [
      "kcd-1"
    ],
    moods: [
      "explore",
      "relax"
    ],
    type: "inspiration",
    tags: [
      "on-foot"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Above the Market",
      objective: "Walk Rattay’s accessible walls and castle approaches in **Kingdom Come: Deliverance**. Look down toward the market and find the town’s shape without following a quest marker."
    },
    de: {
      name: "Über dem Markt",
      objective: "Geh in **Kingdom Come: Deliverance** über die zugänglichen Mauern und Burgwege von Rattay. Schau zum Markt hinunter und erkunde die Form der Stadt ohne Questmarker."
    }
  },
  {
    id: "kcd1-monastery-routine",
    installments: [
      "kcd-1"
    ],
    moods: [
      "focused",
      "nostalgic"
    ],
    type: "inspiration",
    tags: [
      "story"
    ],
    minutes: 25,
    minimum: 5,
    en: {
      name: "A Novice’s Day",
      objective: "While already undercover in the monastery in **Kingdom Come: Deliverance**, follow the monastery schedule instead of advancing your investigation. Spend this visit at the meals, prayers, and work that fit the current hour."
    },
    de: {
      name: "Ein Tag als Novize",
      objective: "Folge in **Kingdom Come: Deliverance** während einer laufenden Kloster-Infiltration dem Klosterplan, statt die Ermittlung weiterzutreiben. Nimm an den Mahlzeiten, Gebeten und Arbeiten teil, die gerade anstehen."
    }
  },
  {
    id: "kcd1-bandit-report",
    installments: [
      "kcd-1"
    ],
    moods: [
      "progress",
      "focused"
    ],
    type: "objective",
    tags: [
      "story"
    ],
    minutes: 25,
    minimum: 5,
    en: {
      name: "Report to Bernard",
      objective: "With a bandit-camp task from Bernard active in **Kingdom Come: Deliverance**, clear that marked camp. **Bring the required proof back to Bernard and collect the reward**."
    },
    de: {
      name: "Bericht für Bernard",
      objective: "Räume in **Kingdom Come: Deliverance** bei aktivem Banditenlager-Auftrag von Bernard das markierte Lager. **Bring Bernard den geforderten Beweis und hol die Belohnung ab**."
    }
  },
  {
    id: "kcd1-capon-memory",
    installments: [
      "kcd-1"
    ],
    moods: [
      "nostalgic",
      "relax"
    ],
    type: "inspiration",
    tags: [
      "free-roam"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Back to the Hunt",
      objective: "After the early hunt with Hans Capon in **Kingdom Come: Deliverance**, revisit the woodland route from that outing. Ride at your own pace and remember how that partnership started."
    },
    de: {
      name: "Zurück zur Jagd",
      objective: "Besuche in **Kingdom Come: Deliverance** nach der frühen Jagd mit Hans Capon noch einmal den Waldweg von damals. Reite in deinem Tempo und denk an den Beginn eurer Freundschaft."
    }
  },
  {
    id: "kcd1-ashes-affordable-building",
    installments: [
      "kcd-1"
    ],
    moods: [
      "create",
      "progress"
    ],
    type: "creation",
    tags: [
      "building"
    ],
    minutes: 25,
    minimum: 5,
    en: {
      name: "One New Building",
      objective: "With From the Ashes DLC and Pribyslavitz management unlocked in **Kingdom Come: Deliverance**, choose a building whose funds and supplies are already available. **Have Marius build it and walk through the finished site**."
    },
    de: {
      name: "Ein neues Gebäude",
      objective: "Wähle in **Kingdom Come: Deliverance** mit dem DLC From the Ashes und freigeschalteter Dorfverwaltung ein Gebäude, für das Geld und Vorräte schon reichen. **Lass Marius es bauen und geh durch den fertigen Bau**."
    }
  },
  {
    id: "kcd1-ashes-judgement",
    installments: [
      "kcd-1"
    ],
    moods: [
      "curious",
      "progress"
    ],
    type: "objective",
    tags: [
      "dialogue"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Hear Both Sides",
      objective: "With From the Ashes DLC in **Kingdom Come: Deliverance** and a judgement currently available in Pribyslavitz, hear the dispute. **Give a verdict after hearing both sides**, then check the village ledger."
    },
    de: {
      name: "Beide Seiten anhören",
      objective: "Hör in **Kingdom Come: Deliverance** mit dem DLC From the Ashes einen aktuell verfügbaren Streitfall in Pribyslawitz an. **Urteile nach den Aussagen beider Seiten** und prüfe danach das Dorfbuch."
    }
  },
  {
    id: "kcd1-ashes-recruit-worker",
    installments: [
      "kcd-1"
    ],
    moods: [
      "progress",
      "nostalgic"
    ],
    type: "objective",
    tags: [
      "dialogue"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "A Job for Kunesh",
      objective: "With From the Ashes DLC in **Kingdom Come: Deliverance**, a woodcutters’ camp built and Kunesh still available in Rattay, **invite him to work in Pribyslavitz and confirm he accepts**."
    },
    de: {
      name: "Arbeit für Kunesch",
      objective: "Lade in **Kingdom Come: Deliverance** mit dem DLC From the Ashes, gebautem Holzfällerlager und noch verfügbarem Kunesch in Rattay **Kunesch zur Arbeit in Pribyslawitz ein und hör seine Zusage an**."
    }
  },
  {
    id: "kcd1-mutt-fetch",
    installments: [
      "kcd-1"
    ],
    moods: [
      "curious",
      "explore"
    ],
    type: "experiment",
    tags: [
      "hunting"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Mutt Brings It Back",
      objective: "With A Woman’s Lot DLC, Mutt recruited and Hunt unlocked in **Kingdom Come: Deliverance**, send him after a hare already spotted nearby. **Let him hunt and retrieve the catch**, or finish after three commands if none succeeds."
    },
    de: {
      name: "Mutt bringt es zurück",
      objective: "Lass in **Kingdom Come: Deliverance** mit dem DLC A Woman’s Lot, Mutt als Begleiter und freigeschalteter Jagd **Mutt einen bereits gesichteten Hasen jagen und zurückbringen**. Beende nach drei Jagdbefehlen, falls keiner klappt."
    }
  },
  {
    id: "kcd1-theresa-perspective",
    installments: [
      "kcd-1"
    ],
    moods: [
      "curious",
      "nostalgic"
    ],
    type: "inspiration",
    tags: [
      "story"
    ],
    minutes: 30,
    minimum: 5,
    en: {
      name: "Theresa’s Skalitz",
      objective: "With A Woman’s Lot DLC in **Kingdom Come: Deliverance**, start or continue Theresa’s story from a save where it is available. Explore Skalitz through her day instead of Henry’s memories."
    },
    de: {
      name: "Theresas Skalitz",
      objective: "Starte oder spiele in **Kingdom Come: Deliverance** mit dem DLC A Woman’s Lot Theresas verfügbare Geschichte weiter. Erkunde Skalitz aus ihrem Alltag statt aus Heinrichs Erinnerungen."
    }
  },
  {
    id: "kcd2-town-outfit-slot",
    installments: [
      "kcd-2"
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
      name: "Clothes for Kuttenberg",
      objective: "With outfit slots available in **Kingdom Come: Deliverance II**, assemble a town outfit from your owned clothes. **Save it separately from your armour and switch between both sets**."
    },
    de: {
      name: "Kleidung für Kuttenberg",
      objective: "Stell in **Kingdom Come: Deliverance II** mit verfügbaren Outfitplätzen einen Stadtlook aus eigenen Sachen zusammen. **Speichere ihn getrennt von der Rüstung und wechsle zwischen beiden Sets**."
    }
  },
  {
    id: "kcd2-stealth-number",
    installments: [
      "kcd-2"
    ],
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "stealth",
      "outfit"
    ],
    minutes: 10,
    minimum: 2,
    en: {
      name: "What Makes Noise",
      objective: "In **Kingdom Come: Deliverance II**, remove one armour layer at a time while checking noise and visibility. **Walk a short route in the original outfit and your quieter set**, comparing the sound."
    },
    de: {
      name: "Was macht Lärm",
      objective: "Leg in **Kingdom Come: Deliverance II** eine Rüstungsschicht nach der anderen ab und prüfe Lärm und Sichtbarkeit. **Geh eine kurze Strecke im ursprünglichen und im leiseren Outfit** und vergleiche den Klang."
    }
  },
  {
    id: "kcd2-crossbow-contest",
    installments: [
      "kcd-2"
    ],
    moods: [
      "curious",
      "focused"
    ],
    type: "objective",
    tags: [
      "one-round"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Crank, Aim, Fire",
      objective: "With a crossbow, bolts, and a contest that permits crossbows in **Kingdom Come: Deliverance II**, **complete one target-archery contest**. Pay attention to reloading between shots, regardless of your place."
    },
    de: {
      name: "Spannen, zielen, schießen",
      objective: "Spiel in **Kingdom Come: Deliverance II** mit Armbrust, Bolzen und einem Wettbewerb mit Armbrust-Erlaubnis **ein Scheibenturnier zu Ende**. Achte auf das Nachladen zwischen den Schüssen. Der Platz ist egal."
    }
  },
  {
    id: "kcd2-popinjay-shots",
    installments: [
      "kcd-2"
    ],
    moods: [
      "challenge",
      "restless"
    ],
    type: "challenge",
    tags: [
      "three-attempts"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Bird on the Pole",
      objective: "At an available popinjay archery contest in **Kingdom Come: Deliverance II**, **hit the bird target and finish the contest**. Stop after success or three contests."
    },
    de: {
      name: "Vogel auf dem Pfahl",
      objective: "Versuch in **Kingdom Come: Deliverance II** bei einem verfügbaren Papagei-Bogenturnier, **den Vogel auf dem Pfahl zu treffen und die Partie zu beenden**. Hör nach dem Erfolg oder drei Partien auf."
    }
  },
  {
    id: "kcd2-badge-play",
    installments: [
      "kcd-2"
    ],
    moods: [
      "curious"
    ],
    type: "experiment",
    tags: [
      "new-approach"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Use the Badge",
      objective: "With a dice badge you own in **Kingdom Come: Deliverance II**, choose a table where it is permitted. **Use its effect in one completed game** and watch which decision it changes."
    },
    de: {
      name: "Das Abzeichen nutzen",
      objective: "Wähle in **Kingdom Come: Deliverance II** mit einem eigenen Würfelabzeichen einen Tisch, der es zulässt. **Nutze seine Wirkung in einer abgeschlossenen Partie** und schau, welche Entscheidung sich dadurch verändert."
    }
  },
  {
    id: "kcd2-dice-stop-early",
    installments: [
      "kcd-2"
    ],
    moods: [
      "focused",
      "challenge"
    ],
    type: "challenge",
    tags: [
      "three-attempts"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Bank the Fives",
      objective: "At a low-stakes dice table in **Kingdom Come: Deliverance II**, **win while banking after every scoring roll containing a five**. Stop after one win or three games."
    },
    de: {
      name: "Die Fünfen sichern",
      objective: "Versuch in **Kingdom Come: Deliverance II** am Würfeltisch mit kleinem Einsatz, **eine Partie zu gewinnen und nach jedem punktenden Wurf mit einer Fünf die Punkte zu sichern**. Hör nach einem Sieg oder drei Partien auf."
    }
  },
  {
    id: "kcd2-smoked-rations",
    installments: [
      "kcd-2"
    ],
    moods: [
      "create",
      "progress"
    ],
    type: "creation",
    tags: [
      "cooking"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Smoked for the Road",
      objective: "With fresh meat and a usable smokehouse in **Kingdom Come: Deliverance II**, **smoke one batch and put the resulting food in your travelling inventory**."
    },
    de: {
      name: "Proviant für den Weg",
      objective: "Räuchere in **Kingdom Come: Deliverance II** mit frischem Fleisch an einem nutzbaren Räucherhaus **eine Portion und pack das Ergebnis als Reiseproviant ein**."
    }
  },
  {
    id: "kcd2-silver-mine-walk",
    installments: [
      "kcd-2"
    ],
    moods: [
      "explore",
      "curious"
    ],
    type: "inspiration",
    tags: [
      "on-foot"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Kuttenberg’s Silver",
      objective: "Once Kuttenberg is open in **Kingdom Come: Deliverance II**, explore the paths around an accessible silver-mine entrance. Look for the shafts, work sites, and settlement built around the ore, without entering restricted areas."
    },
    de: {
      name: "Kuttenbergs Silber",
      objective: "Erkunde in **Kingdom Come: Deliverance II** bei freigeschaltetem Kuttenberg die Wege um einen erreichbaren Silberminen-Eingang. Schau dir Schächte, Arbeitsplätze und die Siedlung rund ums Erz an, ohne gesperrte Bereiche zu betreten."
    }
  },
  {
    id: "kcd2-horseshoe-forge",
    installments: [
      "kcd-2"
    ],
    moods: [
      "create",
      "progress"
    ],
    type: "creation",
    tags: [
      "crafting"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Shoes for Your Horse",
      objective: "With smithing learned, a horseshoe sketch, materials, and your horse in **Kingdom Come: Deliverance II**, **forge a set of horseshoes and equip it on your horse**."
    },
    de: {
      name: "Eisen fürs Pferd",
      objective: "Schmiede in **Kingdom Come: Deliverance II** mit erlernter Schmiedekunst, Hufeisenskizze, Material und eigenem Pferd **Hufeisen und rüste dein Pferd damit aus**."
    }
  },
  {
    id: "kcd2-streamside-laundry",
    installments: [
      "kcd-2"
    ],
    moods: [
      "progress",
      "relax"
    ],
    type: "objective",
    tags: [
      "outfit"
    ],
    minutes: 10,
    minimum: 2,
    en: {
      name: "Laundry by the Stream",
      objective: "In **Kingdom Come: Deliverance II**, with soap, dirty clothing and a laundry spot already nearby, **wash your clothes there and check their dirt indicators**. Use the streamside laundry rather than a bathhouse."
    },
    de: {
      name: "Wäsche am Bach",
      objective: "**Wasch in Kingdom Come: Deliverance II mit vorhandener Seife deine schmutzige Kleidung an einer nahen Waschstelle und prüfe ihre Schmutzanzeigen**. Nutze die Waschstelle am Wasser statt eines Badehauses."
    }
  },
  {
    id: "kcd2-mace-at-armour",
    installments: [
      "kcd-2"
    ],
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "loadout"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "A Mace’s Answer",
      objective: "With a mace you can use in **Kingdom Come: Deliverance II**, enter available legal sparring with an armoured opponent. **Land a hit with the mace and finish the bout**, comparing it with your usual sword approach."
    },
    de: {
      name: "Die Antwort des Streitkolbens",
      objective: "Tritt in **Kingdom Come: Deliverance II** mit nutzbarem Streitkolben zu einem verfügbaren erlaubten Übungskampf gegen einen gerüsteten Gegner an. **Triff mit dem Streitkolben und beende den Kampf**. Vergleiche es mit deiner üblichen Schwerttechnik."
    }
  },
  {
    id: "kcd2-fistfight-stake",
    installments: [
      "kcd-2"
    ],
    moods: [
      "restless",
      "challenge"
    ],
    type: "challenge",
    tags: [
      "three-attempts"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Bare Knuckles",
      objective: "At an available paid fistfight in **Kingdom Come: Deliverance II**, **win one bout without drawing a weapon**. Stop after success or three bouts."
    },
    de: {
      name: "Mit bloßen Fäusten",
      objective: "Versuch in **Kingdom Come: Deliverance II** bei einer verfügbaren Faustkampf-Wette, **einen Kampf ohne gezogene Waffe zu gewinnen**. Hör nach dem Erfolg oder drei Kämpfen auf."
    }
  },
  {
    id: "kcd2-mutt-scent",
    installments: [
      "kcd-2"
    ],
    moods: [
      "curious",
      "explore"
    ],
    type: "inspiration",
    tags: [
      "exploration"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Mutt’s Detours",
      objective: "Once Mutt is reunited with Henry in **Kingdom Come: Deliverance II**, take him into the woods around Troskowitz. Follow his movements and explore the clearings he brings into view."
    },
    de: {
      name: "Mutts Umwege",
      objective: "Nimm Mutt in **Kingdom Come: Deliverance II** nach dem Wiedersehen mit Heinrich in die Wälder um Troskowitz mit. Folge seinen Bewegungen und erkunde die Lichtungen, die du dabei entdeckst."
    }
  },
  {
    id: "kcd2-pebbles-home",
    installments: [
      "kcd-2"
    ],
    moods: [
      "nostalgic",
      "relax"
    ],
    type: "inspiration",
    tags: [
      "traversal"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Pebbles Again",
      objective: "If you have recovered Pebbles in **Kingdom Come: Deliverance II**, leave Semine together for an unhurried ride through the Trosky countryside. Revisit your old horse without shopping for a faster replacement."
    },
    de: {
      name: "Wieder mit Pebbles",
      objective: "Reite in **Kingdom Come: Deliverance II** mit zurückgeholtem Pebbles von Semine aus gemütlich durchs Trosky-Umland. Verbring wieder Zeit mit deinem alten Pferd, ohne nach einem schnelleren Ersatz zu suchen."
    }
  },
  {
    id: "kcd2-night-lanterns",
    installments: [
      "kcd-2"
    ],
    moods: [
      "explore",
      "relax"
    ],
    type: "inspiration",
    tags: [
      "on-foot"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Kuttenberg After Dark",
      objective: "Once Kuttenberg is open in **Kingdom Come: Deliverance II**, carry a lit torch through its streets after dark. Follow the pools of light between the market, houses, and walls."
    },
    de: {
      name: "Kuttenberg bei Nacht",
      objective: "Trag in **Kingdom Come: Deliverance II** bei freigeschaltetem Kuttenberg nachts eine brennende Fackel durch die Straßen. Folge den Lichtinseln zwischen Markt, Häusern und Mauern."
    }
  },
  {
    id: "kcd2-sharpen-no-kit",
    installments: [
      "kcd-2"
    ],
    moods: [
      "focused",
      "progress"
    ],
    type: "objective",
    tags: [
      "crafting"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Keep the Edge",
      objective: "With a damaged sword and a legally accessible grindstone in **Kingdom Come: Deliverance II**, **sharpen it until its condition reaches at least 90**. Use the stone rather than a repair kit."
    },
    de: {
      name: "Die Schneide pflegen",
      objective: "Schärf in **Kingdom Come: Deliverance II** ein beschädigtes Schwert an einem legal zugänglichen Schleifstein, **bis sein Zustand mindestens 90 erreicht**. Benutze den Stein statt eines Reparatursets."
    }
  },
  {
    id: "kcd2-merchant-charity",
    installments: [
      "kcd-2"
    ],
    moods: [
      "curious"
    ],
    type: "experiment",
    tags: [
      "trading"
    ],
    minutes: 10,
    minimum: 2,
    en: {
      name: "Pay a Little Extra",
      objective: "At a merchant in **Kingdom Come: Deliverance II**, buy one cheap item through haggling. **Offer more than the listed price and complete the trade**, then look at the reputation feedback."
    },
    de: {
      name: "Etwas drauflegen",
      objective: "Kauf in **Kingdom Come: Deliverance II** bei einem Händler einen günstigen Gegenstand über Feilschen. **Biete mehr als den Listenpreis und schließ den Handel ab**. Schau auf die Rückmeldung zum Ruf."
    }
  },
  {
    id: "kcd2-forge-customer",
    installments: [
      "kcd-2"
    ],
    moods: [
      "progress",
      "focused"
    ],
    type: "objective",
    tags: [
      "crafting",
      "trading"
    ],
    minutes: 25,
    minimum: 5,
    en: {
      name: "Made to Order",
      objective: "With Legacy of the Forge DLC and your forge operating in **Kingdom Come: Deliverance II**, choose an available commission whose materials you own. **Forge the requested item and deliver it to the customer**."
    },
    de: {
      name: "Auf Bestellung",
      objective: "Wähle in **Kingdom Come: Deliverance II** mit dem DLC Legacy of the Forge und laufender eigener Schmiede eine Bestellung mit vorhandenen Materialien. **Schmiede den gewünschten Gegenstand und liefere ihn beim Kunden ab**."
    }
  },
  {
    id: "kcd2-forge-room-style",
    installments: [
      "kcd-2"
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
      name: "Your Corner of Town",
      objective: "With Legacy of the Forge DLC and property customization unlocked in **Kingdom Come: Deliverance II**, choose a room option you can already afford. **Apply one new furnishing or wall finish and view it in the room**."
    },
    de: {
      name: "Deine Ecke in Kuttenberg",
      objective: "Wähle in **Kingdom Come: Deliverance II** mit dem DLC Legacy of the Forge und freigeschalteter Hauseinrichtung eine bezahlbare Raumoption. **Wende eine neue Einrichtung oder Wandgestaltung an und schau sie dir im Raum an**."
    }
  },
  {
    id: "kcd2-lions-first-riddle",
    installments: [
      "kcd-2"
    ],
    moods: [
      "explore",
      "curious"
    ],
    type: "objective",
    tags: [
      "puzzles"
    ],
    minutes: 25,
    minimum: 5,
    en: {
      name: "Brunswick’s First Clue",
      objective: "With The Lion’s Crest DLC and its first riddle active in **Kingdom Come: Deliverance II**, bring a spade and follow the clue north of Trosky. **Find the first treasure cache and open it**."
    },
    de: {
      name: "Brunswicks erster Hinweis",
      objective: "Bring in **Kingdom Come: Deliverance II** mit dem DLC The Lion’s Crest und aktivem ersten Rätsel einen Spaten mit. Folge dem Hinweis nördlich von Trosky und **finde und öffne das erste Schatzversteck**."
    }
  }
]);
