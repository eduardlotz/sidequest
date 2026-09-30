import { defineGameQuests } from "../defineGameQuests";

export const falloutQuests = defineGameQuests("fallout", [
  { id: "fallout4-supply-line", installments: ["fallout-4"], moods: ["progress"], type: "objective", tags: ["building"], minutes: 20, minimum: 3,
    en: { name: "Link Two Settlements", objective: "If Local Leader is unlocked, **assign a provisioner between two Fallout 4 settlements and confirm that their workshop materials are shared**." },
    de: { name: "Zwei Siedlungen verbinden", objective: "Wenn Lokaler Anführer freigeschaltet ist, **weise einen Versorger zwischen zwei Fallout-4-Siedlungen zu und prüfe, ob sie Werkstattmaterial teilen**." } },
  { id: "fallout4-suppressed-test", installments: ["fallout-4"], moods: ["curious", "focused"], type: "experiment", tags: ["crafting", "stealth"], minutes: 20, minimum: 3,
    en: { name: "Test a Suppressor", objective: "If you can craft a suppressor, **fit it to a weapon and use it in one encounter without alerting the next enemy**. Compare the noise with your usual weapon." },
    de: { name: "Schalldämpfer testen", objective: "Wenn du einen Schalldämpfer bauen kannst, **montiere ihn und nutze die Waffe in einer Begegnung, ohne den nächsten Gegner aufzuschrecken**. Vergleiche sie mit deiner üblichen Waffe." } },
  { id: "fallout4-companion-reaction", installments: ["fallout-4"], moods: ["curious"], type: "objective", tags: ["story", "dialogue"], minutes: 20, minimum: 3,
    en: { name: "What Does Your Companion Think?", objective: "Take a companion into a quest conversation and **notice one approval or disapproval reaction to the choice you make**." },
    de: { name: "Was denkt dein Begleiter?", objective: "Nimm einen Begleiter zu einem Questgespräch mit und **achte auf eine zustimmende oder ablehnende Reaktion auf deine Entscheidung**." } },
  { id: "fallout76-public-event", installments: ["fallout-76"], moods: ["restless"], type: "objective", tags: [], minutes: 20, minimum: 3,
    en: { name: "Join a Public Event", objective: "Join an active **Fallout 76 Public Event** from its map marker and help with the displayed objective. **Stay until the event result appears**, whether it succeeds or fails." },
    de: { name: "Bei einem Event mitmachen", objective: "Nimm über den Kartenmarker an einem laufenden **Fallout-76-Öffentlichen Event** teil und hilf beim angezeigten Ziel. **Bleib, bis das Event-Ergebnis erscheint**, egal ob es gelingt." } },
  { id: "fallout76-vendor-stall", installments: ["fallout-76"], moods: ["create"], type: "creation", tags: ["building", "trading"], minutes: 15, minimum: 3,
    en: { name: "Open a CAMP Stall", objective: "At your **Fallout 76 CAMP**, **place a vending machine and list one surplus item at a price you choose**." },
    de: { name: "Verkauf im CAMP", objective: "Stell in deinem **Fallout-76-CAMP** **einen Verkaufsautomaten auf und biete einen übrigen Gegenstand zu einem selbst gewählten Preis an**." } },
  { id: "fallout76-scrap-to-learn", installments: ["fallout-76"], moods: ["curious"], type: "experiment", tags: ["crafting"], minutes: 15, minimum: 3,
    en: { name: "What Scrapping Teaches", objective: "At a Fallout 76 workbench, **scrap a spare weapon and check whether it teaches a new mod** before replacing your usual gear." },
    de: { name: "Was beim Zerlegen bleibt", objective: "Zerlege an einer Fallout-76-Werkbank **eine übrige Waffe und prüfe, ob du dadurch einen neuen Aufsatz lernst**, bevor du deine Ausrüstung änderst." } },
  {
    id: "fo4-sheltered-bunk-room",
    installments: [
      "fallout-4"
    ],
    moods: [
      "create",
      "relax"
    ],
    type: "creation",
    tags: [
      "building"
    ],
    minutes: 25,
    minimum: 5,
    en: {
      name: "Beds under a Roof",
      objective: "In **Fallout 4**, at an owned settlement with materials ready, **build a small roofed bunk room with one bed per settler currently missing a bed**. Keep every bed reachable and check the workshop’s bed count."
    },
    de: {
      name: "Betten unter einem Dach",
      objective: "**Fallout 4**: **Bau in einer eigenen Siedlung mit vorhandenem Material einen kleinen Schlafraum mit Dach und einem Bett für jeden Bewohner, dem gerade eines fehlt**. Halte alle Betten erreichbar und prüfe die Bettenzahl der Werkstatt."
    }
  },
  {
    id: "fo4-water-purifier-surplus",
    installments: [
      "fallout-4"
    ],
    moods: [
      "create",
      "progress"
    ],
    type: "creation",
    tags: [
      "building",
      "automation"
    ],
    minutes: 25,
    minimum: 5,
    en: {
      name: "Water for the Workshop",
      objective: "In **Fallout 4**, at an owned waterside settlement with purifier, power and materials available, **install a powered water purifier that raises water production above the settler count**. Check the new water and power values. Collecting surplus water can wait."
    },
    de: {
      name: "Wasser für die Werkstatt",
      objective: "**Fallout 4**: **Baue in einer eigenen Siedlung am Wasser eine betriebene Wasseraufbereitung, deren Wasserleistung die Bewohnerzahl übersteigt**. Halte Bauteile und Material bereit und prüfe Wasser- und Stromwerte. Überschüssiges Wasser sammeln kann warten."
    }
  },
  {
    id: "fo4-vegetable-adhesive",
    installments: [
      "fallout-4"
    ],
    moods: [
      "progress",
      "low-energy"
    ],
    type: "objective",
    tags: [
      "cooking",
      "crafting"
    ],
    minutes: 10,
    minimum: 2,
    en: {
      name: "Adhesive from Vegetables",
      objective: "In **Fallout 4**, with three Corn, three Mutfruit, three Tatos and one Purified Water ready, **cook Vegetable Starch and scrap it for adhesive**. Use an available cooking station."
    },
    de: {
      name: "Klebstoff aus Gemüse",
      objective: "**Fallout 4**: **Koche an einer verfügbaren Kochstation Gemüsestärke und zerlege sie zu Klebstoff**, wenn drei Mais, drei Mutabeeren, drei Tatos und einmal aufbereitetes Wasser bereitliegen."
    }
  },
  {
    id: "fo4-tagged-component-run",
    installments: [
      "fallout-4"
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
      name: "Follow the Magnifying Glass",
      objective: "In **Fallout 4**, at a workbench with one affordable mod missing a single component, tag that component for search. **Find and scrap a marked junk item, then build the mod**. Choose a location nearby that you already cleared."
    },
    de: {
      name: "Der Lupe folgen",
      objective: "**Fallout 4**: Markiere an einer Werkbank die einzige fehlende Komponente für einen sonst bezahlbaren Mod zum Suchen. **Finde und zerlege markierten Schrott und baue den Mod**. Such in einem schon geräumten Ort in der Nähe."
    }
  },
  {
    id: "fo4-mod-from-spare-gun",
    installments: [
      "fallout-4"
    ],
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "crafting",
      "loadout"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "A Part Worth Keeping",
      objective: "In **Fallout 4**, with two compatible weapons and a replacement standard part ready, remove a useful mod from the spare at a weapons bench. **Fit it to your usual weapon and use it in one ordinary encounter**."
    },
    de: {
      name: "Ein Teil zum Behalten",
      objective: "**Fallout 4**: Entferne an der Waffenwerkbank einen nützlichen Mod aus einer übrigen Waffe, wenn zwei passende Waffen und ein Standard-Ersatzteil bereitliegen. **Montiere ihn an deiner üblichen Waffe und nutze sie in einer gewöhnlichen Begegnung**."
    }
  },
  {
    id: "fo4-power-armor-repair",
    installments: [
      "fallout-4"
    ],
    moods: [
      "progress",
      "overwhelmed"
    ],
    type: "objective",
    tags: [
      "crafting",
      "outfit"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "One Plate Repaired",
      objective: "In **Fallout 4**, with power armor at a repair station and the needed materials owned, **repair one damaged armor piece, equip it and step into the suit**."
    },
    de: {
      name: "Eine Platte reparieren",
      objective: "**Fallout 4**: **Repariere an einer Power-Rüstungsstation ein beschädigtes Rüstungsteil, montiere es und steig in die Rüstung**, wenn Rüstung und nötiges Material bereitstehen."
    }
  },
  {
    id: "fo4-vats-saved-critical",
    installments: [
      "fallout-4"
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
      name: "Spend the Critical",
      objective: "In **Fallout 4**, with a full critical meter, find an ordinary hostile enemy. **Use V.A.T.S. To trigger your stored critical on a low-chance shot**. Finish the encounter your usual way."
    },
    de: {
      name: "Den kritischen Treffer nutzen",
      objective: "**Fallout 4**: Such mit vollem Kritisch-Balken einen gewöhnlichen feindlichen Gegner. **Löse in V.A.T.S. Deinen gespeicherten kritischen Treffer bei einem Schuss mit niedriger Trefferchance aus**. Beende die Begegnung danach wie gewohnt."
    }
  },
  {
    id: "fo4-core-pickpocket",
    installments: [
      "fallout-4"
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
    minutes: 25,
    minimum: 3,
    en: {
      name: "Out of the Armor",
      objective: "In **Fallout 4**, with Pickpocket high enough to steal fusion cores and a hostile power-armored enemy already located, **steal its fusion core and watch it leave the suit**. Stop after three theft attempts. Do not try this on friendly faction members."
    },
    de: {
      name: "Raus aus der Rüstung",
      objective: "**Fallout 4**: **Stiehl mit ausreichendem Taschendiebstahl-Perk einem bereits gefundenen feindlichen Power-Rüstungsträger den Fusionskern und schau, wie er aussteigt**. Nach drei Diebstahlversuchen ist Schluss. Nutze keine befreundeten Fraktionsmitglieder."
    }
  },
  {
    id: "fo4-terminal-bracket-test",
    installments: [
      "fallout-4"
    ],
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "puzzles"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Between the Brackets",
      objective: "In **Fallout 4**, at an accessible locked terminal, **use one complete bracket pair to remove a dud or reset your tries, then make a password attempt**. If no pair is present, use another nearby terminal."
    },
    de: {
      name: "Zwischen den Klammern",
      objective: "**Fallout 4**: **Nutze an einem zugänglichen gesperrten Terminal ein vollständiges Klammerpaar zum Entfernen eines falschen Worts oder Zurücksetzen der Versuche und probiere danach ein Passwort**. Falls kein Paar da ist, nutze ein anderes nahes Terminal."
    }
  },
  {
    id: "fo4-piper-interview",
    installments: [
      "fallout-4"
    ],
    moods: [
      "curious",
      "progress"
    ],
    type: "objective",
    tags: [
      "dialogue",
      "story"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "In the Newspaper",
      objective: "In **Fallout 4**, with Piper met and her interview still available at Publick Occurrences, **answer her questions and finish the interview**. Choose the answers that fit your character."
    },
    de: {
      name: "In der Zeitung",
      objective: "**Fallout 4**: **Beantworte Pipers Fragen bei Publick Occurrences und beende das Interview**, wenn du sie schon kennst und es noch verfügbar ist. Wähle Antworten, die zu deinem Charakter passen."
    }
  },
  {
    id: "fo4-robot-new-arm",
    installments: [
      "fallout-4"
    ],
    moods: [
      "create",
      "focused"
    ],
    type: "experiment",
    tags: [
      "crafting",
      "abilities"
    ],
    minutes: 25,
    minimum: 5,
    en: {
      name: "A Different Robot Arm",
      objective: "In **Fallout 4**, with **Automatron DLC**, a robot workbench and a robot companion unlocked, fit one arm module you can already build. **Take the robot into an ordinary fight and watch that arm work**."
    },
    de: {
      name: "Ein anderer Roboterarm",
      objective: "**Fallout 4**: Montiere mit **Automatron DLC**, freigeschalteter Roboterwerkbank und Roboterbegleiter ein schon baubares Armmodul. **Nimm den Roboter in einen gewöhnlichen Kampf mit und beobachte den Arm**."
    }
  },
  {
    id: "fo4-ammunition-production",
    installments: [
      "fallout-4"
    ],
    moods: [
      "create",
      "focused"
    ],
    type: "creation",
    tags: [
      "automation",
      "crafting"
    ],
    minutes: 30,
    minimum: 5,
    en: {
      name: "Ammo from the Line",
      objective: "In **Fallout 4**, with **Contraptions Workshop DLC**, Ammunition Plant requirements and materials ready, connect and power the plant and terminal. **Select an unlocked ammunition recipe and collect its first produced batch**."
    },
    de: {
      name: "Munition vom Band",
      objective: "**Fallout 4**: Verbinde mit **Contraptions Workshop DLC**, erfüllten Munitionsfabrik-Voraussetzungen und vorhandenem Material Fabrik und Terminal und versorge sie mit Strom. **Wähle ein freigeschaltetes Munitionsrezept und hol die erste produzierte Charge ab**."
    }
  },
  {
    id: "fo4-vault-soda-counter",
    installments: [
      "fallout-4"
    ],
    moods: [
      "create",
      "progress"
    ],
    type: "creation",
    tags: [
      "building"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "The Vault Soda Counter",
      objective: "In **Fallout 4**, with **Vault-Tec Workshop DLC**, the soda-fountain experiment completed and materials ready, **build and power a soda fountain, assign a settler and watch them work the counter**. Use the configuration you unlocked."
    },
    de: {
      name: "Die Vault-Getränketheke",
      objective: "**Fallout 4**: **Baue mit Vault-Tec Workshop DLC, abgeschlossenem Getränkebrunnen-Experiment und vorhandenem Material einen Getränkebrunnen, versorge ihn mit Strom und weise einen Siedler zu**. Schau zu, wie er die Theke bedient. Nutze deine freigeschaltete Einstellung."
    }
  },
  {
    id: "fo4-nuka-mix-test",
    installments: [
      "fallout-4"
    ],
    moods: [
      "curious",
      "create"
    ],
    type: "experiment",
    tags: [
      "cooking"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Your Nuka Blend",
      objective: "In **Fallout 4**, with **Nuka-World DLC**, a Nuka-Mixer Station and an unlocked recipe with ingredients ready, **mix one drink, consume it and read its active effects**."
    },
    de: {
      name: "Deine Nuka-Mischung",
      objective: "**Fallout 4**: **Mixe mit Nuka-World DLC an einer Nuka-Mixer-Station ein freigeschaltetes Getränk, trink es und lies seine aktiven Effekte**, wenn alle Zutaten bereitliegen."
    }
  },
  {
    id: "fo4-beaver-creek-bowling",
    installments: [
      "fallout-4"
    ],
    moods: [
      "explore",
      "curious"
    ],
    type: "inspiration",
    tags: [
      "story"
    ],
    minutes: 25,
    minimum: 3,
    en: {
      name: "The Old Bowling Alley",
      objective: "In **Fallout 4**, with **Far Harbor DLC** and Beaver Creek Lanes already reachable, look through the abandoned bowling alley. Follow its lanes, back rooms and traces of the staff who worked there, at your own pace."
    },
    de: {
      name: "Die alte Bowlingbahn",
      objective: "**Fallout 4**: Schau dich mit **Far Harbor DLC** in der schon erreichbaren Bowlingbahn Beaver Creek Lanes um. Folge den Bahnen, Hinterzimmern und Spuren des ehemaligen Personals in deinem Tempo."
    }
  },
  {
    id: "fo4-diamond-city-radio-story",
    installments: [
      "fallout-4"
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
      name: "A Radio Walk",
      objective: "In **Fallout 4**, with Diamond City Radio available, tune in while walking through a cleared stretch of Boston you remember from earlier play. Follow a familiar street and let the old songs choose the pace."
    },
    de: {
      name: "Ein Spaziergang mit Radio",
      objective: "**Fallout 4**: Schalte das verfügbare Diamond-City-Radio ein und geh durch einen geräumten Teil von Boston, den du von früher kennst. Folge einer vertrauten Straße und lass die alten Lieder das Tempo bestimmen."
    }
  },
  {
    id: "fo4-settlement-bell-roundup",
    installments: [
      "fallout-4"
    ],
    moods: [
      "create",
      "focused"
    ],
    type: "creation",
    tags: [
      "building",
      "dialogue"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Ring for the Settlement",
      objective: "In **Fallout 4**, with an owned populated settlement and bell materials ready, **place a settlement bell in an open meeting area, ring it and watch residents gather**. Leave clear walking space around it."
    },
    de: {
      name: "Die Siedlung herbeiklingeln",
      objective: "**Fallout 4**: **Stell mit vorhandenem Material in einer bewohnten eigenen Siedlung eine Glocke auf einem offenen Treffplatz auf, läute sie und beobachte, wie Bewohner kommen**. Lass um sie herum Platz zum Gehen."
    }
  },
  {
    id: "fo4-local-leader-shop",
    installments: [
      "fallout-4"
    ],
    moods: [
      "create",
      "progress"
    ],
    type: "creation",
    tags: [
      "building",
      "trading"
    ],
    minutes: 25,
    minimum: 5,
    en: {
      name: "A Shop for Home",
      objective: "In **Fallout 4**, with Local Leader rank 2, store materials, Caps and an unassigned settler ready, **build a trading store, assign the settler and buy one item from it**."
    },
    de: {
      name: "Dein Laden zu Hause",
      objective: "**Fallout 4**: **Bau mit Lokaler Anführer Rang 2, Ladenmaterial, Kronkorken und einem unbeschäftigten Siedler einen Handelsladen, weise ihn zu und kauf dort einen Gegenstand**."
    }
  },
  {
    id: "fo4-companion-equipment",
    installments: [
      "fallout-4"
    ],
    moods: [
      "progress",
      "curious"
    ],
    type: "objective",
    tags: [
      "loadout",
      "support"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Gear for the Companion",
      objective: "In **Fallout 4**, with a human companion, spare armor, a compatible weapon and its ammo ready, **equip the companion with them and fight one ordinary encounter together**. Choose someone who can use that gear."
    },
    de: {
      name: "Ausrüstung für den Begleiter",
      objective: "**Fallout 4**: **Rüste einen menschlichen Begleiter mit vorhandener passender Waffe, Munition und übriger Rüstung aus und bestreitet eine gewöhnliche Begegnung zusammen**. Wähle einen Begleiter, der diese Ausrüstung nutzen kann."
    }
  },
  {
    id: "fo4-bobblehead-home-display",
    installments: [
      "fallout-4"
    ],
    moods: [
      "create",
      "relax"
    ],
    type: "creation",
    tags: [
      "decorating",
      "collectibles"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "A Bobblehead Shelf",
      objective: "In **Fallout 4**, with a bobblehead already owned and display-stand materials ready, **build a bobblehead stand at home and place that bobblehead on it**."
    },
    de: {
      name: "Ein Platz für Wackelpuppen",
      objective: "**Fallout 4**: **Bau mit vorhandenen Materialien zu Hause einen Wackelpuppenständer und stell eine schon gefundene Wackelpuppe darauf**."
    }
  },
  {
    id: "fo76-donation-box-aid",
    installments: [
      "fallout-76"
    ],
    moods: [
      "progress",
      "low-energy"
    ],
    type: "objective",
    tags: [
      "support"
    ],
    minutes: 10,
    minimum: 2,
    en: {
      name: "Leave a Starter Supply",
      objective: "In **Fallout 76**, with spare Stimpaks or RadAway ready, visit a nearby donation box. **Leave a small stack in the box** for the next player. No one needs to collect it during your session."
    },
    de: {
      name: "Vorrat für den Anfang",
      objective: "**Fallout 76**: Besuche mit übrigen Stimpaks oder RadAway eine nahe Spendenbox. **Leg einen kleinen Stapel für den nächsten Spieler hinein**. Abholen muss ihn während deiner Sitzung niemand."
    }
  },
  {
    id: "fo76-private-team-build",
    installments: [
      "fallout-76"
    ],
    moods: [
      "connect",
      "create"
    ],
    type: "inspiration",
    tags: [
      "co-op",
      "building"
    ],
    minutes: 30,
    minimum: 5,
    en: {
      name: "Build at Their CAMP",
      objective: "In **Fallout 76**, with a friend already in your private team who has invited you to build at their CAMP, work on a corner together using items the game lets you place. Talk through the choices as you build and stop when you both want to."
    },
    de: {
      name: "Bauen im fremden CAMP",
      objective: "**Fallout 76**: Bau mit einem Freund, der schon in deinem privaten Team ist und dich zum Bauen in sein CAMP eingeladen hat, gemeinsam an einer Ecke. Nutzt Gegenstände, die du dort platzieren darfst, und besprecht eure Ideen beim Bauen. Ihr entscheidet zusammen, wann Schluss ist."
    }
  },
  {
    id: "fo76-instrument-well-tuned",
    installments: [
      "fallout-76"
    ],
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
      name: "Get Well Tuned",
      objective: "In **Fallout 76**, at a safe CAMP or location with an instrument, **play until the music bonus appears and check it in your Pip-Boy**."
    },
    de: {
      name: "Musik im CAMP",
      objective: "**Fallout 76**: **Spiel in einem sicheren CAMP oder Ort an einem Instrument, bis der Musik-Bonus erscheint, und prüfe ihn im Pip-Boy**."
    }
  },
  {
    id: "fo76-brew-and-ferment",
    installments: [
      "fallout-76"
    ],
    moods: [
      "create",
      "focused"
    ],
    type: "creation",
    tags: [
      "cooking"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Your Own Beer",
      objective: "In **Fallout 76**, with brewing and fermenter plans unlocked and a known beer recipe’s ingredients ready, **brew the beer and place it in your fermenter**. Check its fermentation bar. Collecting the finished drink can wait."
    },
    de: {
      name: "Dein eigenes Bier",
      objective: "**Fallout 76**: **Braue mit freigeschalteten Brau- und Gärbehälterplänen sowie den Zutaten eines bekannten Bierrezepts das Bier und leg es in deinen Gärbehälter**. Prüfe den Gärbalken. Das fertige Getränk kannst du später abholen."
    }
  },
  {
    id: "fo76-symptomatic-recovery",
    installments: [
      "fallout-76"
    ],
    moods: [
      "progress",
      "overwhelmed"
    ],
    type: "objective",
    tags: [
      "current-save"
    ],
    minutes: 10,
    minimum: 2,
    en: {
      name: "Clear the Disease",
      objective: "In **Fallout 76**, with a disease active and a Sympto-Matic you can use already located, **use the machine and check that the disease is gone**. No new disease is needed."
    },
    de: {
      name: "Die Krankheit loswerden",
      objective: "**Fallout 76**: **Nutze mit aktiver Krankheit einen bereits gefundenen nutzbaren Sympto-Matic und prüfe, ob die Krankheit verschwunden ist**. Eine neue Krankheit brauchst du nicht."
    }
  },
  {
    id: "fo76-radstag-packing",
    installments: [
      "fallout-76"
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
      name: "Dinner before the Haul",
      objective: "In **Fallout 76**, with Radstag Meat, wood and a cooking station ready, note your carry-weight limit. **Cook and eat Grilled Radstag, then compare the new limit**."
    },
    de: {
      name: "Essen vor dem Transport",
      objective: "**Fallout 76**: Notiere mit vorhandenem Radhirschfleisch, Holz und Kochstation deine Traglastgrenze. **Brate und iss das Radhirschfleisch und vergleiche die neue Grenze**."
    }
  },
  {
    id: "fo76-camera-creature-name",
    installments: [
      "fallout-76"
    ],
    moods: [
      "curious",
      "focused"
    ],
    type: "objective",
    tags: [
      "photography"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "The Camera Knows It",
      objective: "In **Fallout 76**, with a ProSnap Deluxe Camera and film ready, find a nearby creature, living or dead. **Frame it until its name appears in the viewfinder and take one camera photo**. Choose a creature you can approach safely."
    },
    de: {
      name: "Die Kamera erkennt es",
      objective: "**Fallout 76**: **Rahme mit vorhandener ProSnap-Deluxe-Kamera und Film ein nahes lebendes oder totes Wesen ein, bis sein Name im Sucher erscheint, und mach ein Kamerafoto**. Wähle ein sicher erreichbares Wesen."
    }
  },
  {
    id: "fo76-treasure-map-ground",
    installments: [
      "fallout-76"
    ],
    moods: [
      "explore",
      "focused"
    ],
    type: "objective",
    tags: [
      "collectibles"
    ],
    minutes: 25,
    minimum: 3,
    en: {
      name: "The Sketched Mound",
      objective: "In **Fallout 76**, with a treasure map already owned for a region you know, **find its pictured landmark and dig up the mound**. Use the sketch instead of an online coordinate list."
    },
    de: {
      name: "Der gezeichnete Hügel",
      objective: "**Fallout 76**: **Finde mit einer vorhandenen Schatzkarte für eine bekannte Region die gezeichnete Landmarke und grabe den Hügel aus**. Nutze die Skizze statt einer Online-Koordinatenliste."
    }
  },
  {
    id: "fo76-free-range-shepherd",
    installments: [
      "fallout-76"
    ],
    moods: [
      "restless",
      "focused"
    ],
    type: "objective",
    tags: [
      "animals",
      "support"
    ],
    minutes: 25,
    minimum: 5,
    en: {
      name: "Take the Shepherd’s Crook",
      objective: "In **Fallout 76**, when **Free Range** is already active, take a Shepherd’s Crook and use Herd on the Brahmin at the marked stops. **Stay with the herd until the event result appears**. Success is not required."
    },
    de: {
      name: "Den Hirtenstab nehmen",
      objective: "**Fallout 76**: Nimm beim bereits laufenden Event **Freilandhaltung** einen Hirtenstab und nutze an den markierten Halten Treiben bei den Brahmin. **Bleib bei der Herde bis zum Event-Ergebnis**. Erfolg ist kein Muss."
    }
  },
  {
    id: "fo76-expedition-with-friend",
    installments: [
      "fallout-76"
    ],
    moods: [
      "connect",
      "focused"
    ],
    type: "objective",
    tags: [
      "co-op",
      "support"
    ],
    minutes: 30,
    minimum: 5,
    en: {
      name: "One Expedition Crew",
      objective: "In **Fallout 76**, with Expeditions unlocked and a friend already ready to join, choose an expedition your gear can handle. **Finish the expedition together and read the reward screen**."
    },
    de: {
      name: "Ein Expeditionsteam",
      objective: "**Fallout 76**: Wählt mit freigeschalteten Expeditionen und einem schon bereiten Freund eine Expedition passend zu eurer Ausrüstung. **Beendet sie gemeinsam und lest den Belohnungsbildschirm**."
    }
  },
  {
    id: "fo76-shelter-workshop-corner",
    installments: [
      "fallout-76"
    ],
    moods: [
      "create",
      "relax"
    ],
    type: "creation",
    tags: [
      "building"
    ],
    minutes: 25,
    minimum: 5,
    en: {
      name: "A Workshop Below",
      objective: "In **Fallout 76**, with a CAMP Shelter entrance unlocked, enter the Shelter and **build a small work area with two different crafting benches and a usable route between them**. Test both benches before leaving."
    },
    de: {
      name: "Eine Werkstatt unten",
      objective: "**Fallout 76**: Betritt mit freigeschaltetem CAMP-Schutzraum-Eingang den Schutzraum und **baue einen kleinen Arbeitsbereich mit zwei verschiedenen Werkbänken und einem begehbaren Weg dazwischen**. Probiere beide Werkbänke vor dem Gehen aus."
    }
  },
  {
    id: "fo76-resource-extractor-run",
    installments: [
      "fallout-76"
    ],
    moods: [
      "create",
      "progress"
    ],
    type: "creation",
    tags: [
      "automation",
      "building"
    ],
    minutes: 25,
    minimum: 5,
    en: {
      name: "From the Ground",
      objective: "In **Fallout 76**, with your CAMP already on a resource deposit and the extractor’s materials ready, **build and power the matching extractor, then collect its first resource output**. Keep this at your CAMP rather than a Public Workshop."
    },
    de: {
      name: "Aus dem Boden",
      objective: "**Fallout 76**: **Bau und betreibe den passenden Extraktor an einem Rohstoffvorkommen in deinem schon platzierten CAMP und hol seine erste Ausgabe ab**. Halte das Material bereit und bleib im CAMP statt einer öffentlichen Werkstatt."
    }
  },
  {
    id: "fo76-treasury-notes-bullion",
    installments: [
      "fallout-76"
    ],
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
      name: "Notes into Gold",
      objective: "In **Fallout 76**, with Treasury Notes already owned and today’s exchange allowance left, **exchange some notes at a Gold Press Machine and check your Gold Bullion total**."
    },
    de: {
      name: "Scheine werden Gold",
      objective: "**Fallout 76**: **Tausch mit vorhandenen Schatzscheinen und heute noch offenem Tauschkontingent einige Scheine an einem Goldautomaten und prüfe deinen Goldbarrenstand**."
    }
  },
  {
    id: "fo76-legendary-scrip-trade",
    installments: [
      "fallout-76"
    ],
    moods: [
      "progress",
      "overwhelmed"
    ],
    type: "objective",
    tags: [
      "trading"
    ],
    minutes: 10,
    minimum: 2,
    en: {
      name: "A Spare Legendary",
      objective: "In **Fallout 76**, with an unwanted legendary item and exchange allowance left, visit a Legendary Exchange Machine. **Trade that item for Scrip and check the new balance**."
    },
    de: {
      name: "Ein übriges legendäres Teil",
      objective: "**Fallout 76**: **Tausch an einem legendären Automaten einen nicht mehr gebrauchten legendären Gegenstand gegen Scheine und prüfe den neuen Stand**, wenn dein Tauschkontingent noch reicht."
    }
  },
  {
    id: "fo76-known-legendary-mod",
    installments: [
      "fallout-76"
    ],
    moods: [
      "create",
      "progress"
    ],
    type: "creation",
    tags: [
      "crafting",
      "loadout"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "One Legendary Effect",
      objective: "In **Fallout 76**, with a legendary mod box compatible with an owned item and the required resources ready, **apply that effect at the matching workbench and use the altered item in an ordinary encounter**. Read the binding warning before applying it."
    },
    de: {
      name: "Ein legendärer Effekt",
      objective: "**Fallout 76**: **Wende an der passenden Werkbank eine vorhandene passende legendäre Mod-Box auf einen eigenen Gegenstand an und nutze ihn in einer gewöhnlichen Begegnung**, wenn die nötigen Ressourcen bereitliegen. Lies vorher den Hinweis zur Bindung."
    }
  },
  {
    id: "fo76-biv-drink-test",
    installments: [
      "fallout-76"
    ],
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "cooking"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Biv’s Tasting Notes",
      objective: "In **Fallout 76**, with brewing unlocked and a Biv daily already active, read its drink and test requirement. With that drink ready, **drink it and perform the listed test while its effect is active**."
    },
    de: {
      name: "Bivs Verkostung",
      objective: "**Fallout 76**: Lies bei freigeschaltetem Brauen und laufender Tagesaufgabe von Biv das verlangte Getränk und den Test. Wenn das Getränk bereitliegt, **trink es und führe den angezeigten Test während seiner Wirkung aus**."
    }
  },
  {
    id: "fo76-tadpole-known-test",
    installments: [
      "fallout-76"
    ],
    moods: [
      "curious",
      "focused"
    ],
    type: "objective",
    tags: [
      "puzzles"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "A Tadpole Exam",
      objective: "In **Fallout 76**, with Pioneer Scout access and an unpassed Tadpole knowledge exam available, **complete one exam at the testing terminal**. Read the questions yourself. Stop after three submissions if you do not pass."
    },
    de: {
      name: "Eine Pfadfinderprüfung",
      objective: "**Fallout 76**: **Bearbeite mit Pfadfinderzugang an einem Prüfungsterminal eine noch nicht bestandene Kaulquappen-Wissensprüfung**. Lies die Fragen selbst. Nach drei Abgaben ist Schluss, falls du nicht bestehst."
    }
  },
  {
    id: "fo76-possessed-camp-outfit",
    installments: [
      "fallout-76"
    ],
    moods: [
      "create",
      "relax"
    ],
    type: "creation",
    tags: [
      "outfit",
      "decorating"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Dress the Mannequin",
      objective: "In **Fallout 76**, with a CAMP mannequin plan unlocked and a matching set of spare apparel ready, **place a mannequin and dress it in that set**. Keep it below the CAMP’s mannequin limit."
    },
    de: {
      name: "Die Schaufensterpuppe anziehen",
      objective: "**Fallout 76**: **Stell mit freigeschaltetem CAMP-Schaufensterpuppenplan eine Puppe auf und zieh ihr ein vorhandenes zusammenpassendes Outfit an**. Bleib unter dem Schaufensterpuppenlimit des CAMPs."
    }
  },
  {
    id: "fo76-roadside-camp-tour",
    installments: [
      "fallout-76"
    ],
    moods: [
      "explore",
      "curious"
    ],
    type: "inspiration",
    tags: [
      "building",
      "exploration"
    ],
    minutes: 25,
    minimum: 3,
    en: {
      name: "CAMPs along the Road",
      objective: "In **Fallout 76**, walk a known road where other players’ CAMPs are already visible on the map. Visit the open builds you pass and look at how their owners used the terrain. Buy only if you want to."
    },
    de: {
      name: "CAMPs am Weg",
      objective: "**Fallout 76**: Geh eine bekannte Straße entlang, an der CAMPs anderer Spieler schon auf der Karte sichtbar sind. Besuch die offenen Bauten unterwegs und schau, wie ihre Besitzer das Gelände genutzt haben. Kaufen musst du nichts."
    }
  },
  {
    id: "fo76-early-route-return",
    installments: [
      "fallout-76"
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
      name: "From Vault 76",
      objective: "In **Fallout 76**, on an established character, walk from Vault 76 toward the Overseer’s CAMP along the route you remember taking as a new player. Revisit the signs, buildings and roadside finds at your own pace."
    },
    de: {
      name: "Von Vault 76",
      objective: "**Fallout 76**: Geh mit einem eingespielten Charakter von Vault 76 in Richtung CAMP der Aufseherin auf dem Weg, den du von deinen ersten Schritten kennst. Besuch Schilder, Häuser und Straßenfunde in deinem Tempo wieder."
    }
  }
]);
