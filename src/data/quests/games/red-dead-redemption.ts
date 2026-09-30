import { defineGameQuests } from "../defineGameQuests";

export const redDeadQuests = defineGameQuests("red-dead-redemption", [
  {
    id: "rdr2-camp-coffee",
    moods: ["relax", "low-energy"],
    type: "inspiration",
    tags: ["cooking", "no-timer"],
    minutes: 10,
    minimum: 3,
    en: {
      name: "Camp Coffee",
      objective:
        "Set up camp in **Red Dead Redemption 2 story mode** and brew some coffee. **Sit by the fire for a while**, then ride on whenever you feel ready.",
    },
    de: {
      name: "Kaffee am Lager",
      objective:
        "Schlage in **Red Dead Redemption 2 im Storymodus** ein Lager auf und koche Kaffee. **Sitz eine Weile am Feuer** und reite weiter, wenn dir danach ist.",
    },
    installments: ["rdr-2"],
  },
  {
    id: "bring-them-in",
    moods: ["challenge", "focused"],
    type: "challenge",
    tags: ["no-kills"],
    minutes: 30,
    minimum: 5,
    en: {
      name: "Bring Them In",
      objective:
        "Take a bounty in **Red Dead Redemption story mode**. **Lasso the target and bring them in alive without Dead Eye**. Do not shoot the target.",
    },
    de: {
      name: "Lebend abliefern",
      objective:
        "Nimm in **Red Dead Redemption im Storymodus** einen Steckbrief an. **Fange das Ziel mit dem Lasso und liefere es ohne Dead Eye lebend ab**. Schieße nicht auf das Ziel.",
    },
    installments: ["rdr-1"],
  },
  {
    id: "liars-table",
    moods: ["curious", "nostalgic"],
    type: "objective",
    tags: ["one-round"],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Liar’s Dice",
      objective:
        "Sit down for **Liar’s Dice in Red Dead Redemption story mode**. Use your own dice to judge the bids and **finish one full game without reloading**.",
    },
    de: {
      name: "Würfelpoker",
      objective:
        "Setz dich in **Red Dead Redemption im Storymodus** an einen Würfelpokertisch. Nutze deine Würfel als Hinweis und **spiele eine komplette Partie ohne neu zu laden**.",
    },
    installments: ["rdr-1"],
  },
  {
    id: "wild-horse-home",
    moods: ["explore", "progress"],
    type: "objective",
    tags: ["exploration"],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Wild Horse",
      objective:
        "Find a **wild horse in Red Dead Redemption story mode**. **Lasso it, break it, and ride it into town**. Finish at a hitching post.",
    },
    de: {
      name: "Wildpferd",
      objective:
        "Finde in **Red Dead Redemption im Storymodus** ein Wildpferd. **Fang es mit dem Lasso, reit es zu und bring es in die Stadt**. Bind es dort an einem Pfosten fest.",
    },
    installments: ["rdr-1"],
  },
  {
    id: "pearsons-delivery",
    moods: ["progress", "focused"],
    type: "objective",
    tags: ["hunting"],
    minutes: 30,
    minimum: 5,
    en: {
      name: "Perfect Rabbit",
      objective:
        "Hunt a **three-star rabbit in Red Dead Redemption 2 story mode** with the Varmint Rifle. Keep the carcass intact and **donate it to Pearson in perfect condition**.",
    },
    de: {
      name: "Perfektes Kaninchen",
      objective:
        "Jage in **Red Dead Redemption 2 im Storymodus** mit dem Varmint-Gewehr ein Drei-Sterne-Kaninchen. Lass den Kadaver ganz und **spende ihn Pearson in perfektem Zustand**.",
    },
    installments: ["rdr-2"],
  },
  {
    id: "field-naturalist",
    moods: ["curious", "explore"],
    type: "objective",
    tags: ["exploration", "photography"],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Field Naturalist",
      objective:
        "Find an **animal you have not studied yet in Red Dead Redemption 2 story mode**. **Study it with binoculars and take a photo**. Leave it alive.",
    },
    de: {
      name: "Naturforscher",
      objective:
        "Finde in **Red Dead Redemption 2 im Storymodus** ein Tier, das du noch nicht untersucht hast. **Untersuche es mit dem Fernglas und mach ein Foto**. Lass es am Leben.",
    },
    installments: ["rdr-2"],
  },
  {
    id: "catch-and-release",
    moods: ["relax", "low-energy"],
    type: "objective",
    tags: ["fishing"],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Catch and Release",
      objective:
        "Go fishing at a **river in Red Dead Redemption 2 story mode**. **Catch and release three fish** of any kind.",
    },
    de: {
      name: "Fangen und Freilassen",
      objective:
        "Geh in **Red Dead Redemption 2 im Storymodus** an einem Fluss angeln. **Fange drei beliebige Fische und setze sie wieder frei**.",
    },
    installments: ["rdr-2"],
  },
  {
    id: "rdr1-nightwatch-dog",
    installments: [
      "rdr-1"
    ],
    moods: [
      "focused",
      "progress"
    ],
    type: "objective",
    tags: [
      "on-foot"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Follow the Watchdog",
      objective: "Start an available Nightwatch job in **Red Dead Redemption story mode**. Follow the dog instead of scouting ahead and **finish the patrol’s incident for your payment**."
    },
    de: {
      name: "Dem Wachhund nach",
      objective: "Starte im **Storymodus von Red Dead Redemption** einen verfügbaren Nachtwächterjob. Folge dem Hund, statt vorzulaufen, und **erledige den Vorfall der Runde bis zur Bezahlung**."
    }
  },
  {
    id: "rdr1-ranch-horsebreaking",
    installments: [
      "rdr-1"
    ],
    moods: [
      "restless",
      "progress"
    ],
    type: "objective",
    tags: [
      "traversal"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Ranch Hand",
      objective: "At an available horsebreaking job in **Red Dead Redemption story mode**, **break one ranch horse and collect the wages**. This is paid ranch work, not a wild-horse hunt."
    },
    de: {
      name: "Arbeit auf der Ranch",
      objective: "Nimm im **Storymodus von Red Dead Redemption** einen verfügbaren Job zum Pferdezureiten an. **Reite ein Ranchpferd zu und hol den Lohn ab**."
    }
  },
  {
    id: "rdr1-horseshoe-pitch",
    installments: [
      "rdr-1"
    ],
    moods: [
      "curious",
      "relax"
    ],
    type: "objective",
    tags: [
      "one-round"
    ],
    minutes: 10,
    minimum: 2,
    en: {
      name: "Pitch a Horseshoe",
      objective: "Find a horseshoes game in **Red Dead Redemption story mode**. **Finish one game**, adjusting your swing from where each horseshoe lands. Winning is optional."
    },
    de: {
      name: "Hufeisen werfen",
      objective: "Such im **Storymodus von Red Dead Redemption** ein Hufeisenwerfen. **Spiel eine Partie zu Ende** und passe den Schwung an deine Würfe an. Gewinnen ist optional."
    }
  },
  {
    id: "rdr1-blackjack-table",
    installments: [
      "rdr-1"
    ],
    moods: [
      "relax",
      "low-energy"
    ],
    type: "inspiration",
    tags: [
      "cards"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Rathskeller Cards",
      objective: "Visit the blackjack table at Rathskeller Fork in **Red Dead Redemption story mode**. Bring a little money you can spare and play at the pace of the table."
    },
    de: {
      name: "Karten am Rathskeller",
      objective: "Besuche im **Storymodus von Red Dead Redemption** den Blackjacktisch in Rathskeller Fork. Nimm einen kleinen Betrag mit, den du übrig hast, und spiel entspannt ein paar Hände."
    }
  },
  {
    id: "rdr1-five-finger-sequence",
    installments: [
      "rdr-1"
    ],
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
      name: "Mind Your Fingers",
      objective: "At a Five Finger Fillet table in **Red Dead Redemption story mode**, **beat the first opponent without a mistake**. Stop after success or three attempts."
    },
    de: {
      name: "Achte auf die Finger",
      objective: "Versuch im **Storymodus von Red Dead Redemption** beim Messerfinger-Spiel, **den ersten Gegner ohne Fehler zu schlagen**. Hör nach dem Erfolg oder drei Versuchen auf."
    }
  },
  {
    id: "rdr1-arm-wrestle",
    installments: [
      "rdr-1"
    ],
    moods: [
      "restless",
      "challenge"
    ],
    type: "challenge",
    tags: [
      "three-attempts"
    ],
    minutes: 10,
    minimum: 2,
    en: {
      name: "Elbow on the Table",
      objective: "At an unlocked arm-wrestling table in **Red Dead Redemption story mode**, **win one contest**, letting your strength recover when the opponent pushes. Stop after success or three contests."
    },
    de: {
      name: "Ellbogen auf den Tisch",
      objective: "Versuch im **Storymodus von Red Dead Redemption** an einem freigeschalteten Tisch, **ein Armdrücken zu gewinnen**. Lass deine Kraft zurückkommen, wenn der Gegner drückt. Hör nach dem Erfolg oder drei Partien auf."
    }
  },
  {
    id: "rdr1-silent-film",
    installments: [
      "rdr-1"
    ],
    moods: [
      "low-energy",
      "nostalgic"
    ],
    type: "inspiration",
    tags: [
      "story"
    ],
    minutes: 10,
    minimum: 2,
    en: {
      name: "Picture House",
      objective: "If a cinema is open in **Red Dead Redemption story mode**, buy a ticket and settle in for a silent film. Give John a break from the saddle."
    },
    de: {
      name: "Lichtspielhaus",
      objective: "Kauf im **Storymodus von Red Dead Redemption** eine Karte für ein geöffnetes Kino und schau dir einen Stummfilm an. Gönn John eine Pause vom Sattel."
    }
  },
  {
    id: "rdr1-survivalist-herbs",
    installments: [
      "rdr-1"
    ],
    moods: [
      "progress",
      "explore"
    ],
    type: "objective",
    tags: [
      "collectibles"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Feverfew for the Trail",
      objective: "If Survivalist rank one is unfinished in **Red Dead Redemption story mode**, search Hennigan’s Stead and Cholla Springs. **Collect the six Wild Feverfew required for that rank**."
    },
    de: {
      name: "Mutterkraut am Weg",
      objective: "Such im **Storymodus von Red Dead Redemption** bei offener erster Überlebenskünstler-Stufe in Hennigan’s Stead und Cholla Springs. **Sammle die sechs dafür benötigten Mutterkrautpflanzen**."
    }
  },
  {
    id: "rdr1-outfit-scrap",
    installments: [
      "rdr-1"
    ],
    moods: [
      "progress",
      "focused"
    ],
    type: "objective",
    tags: [
      "outfit"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "One Missing Scrap",
      objective: "Track an unfinished outfit in **Red Dead Redemption story mode** whose remaining scrap has an accessible task. **Earn that scrap and check it off in the outfit menu**. Skip tasks that need a later story chapter."
    },
    de: {
      name: "Ein fehlendes Stück",
      objective: "Verfolge im **Storymodus von Red Dead Redemption** ein unfertiges Outfit mit einer jetzt erreichbaren Aufgabe. **Hol das fehlende Stoffstück und prüfe den Haken im Outfitmenü**. Überspring Aufgaben für spätere Storyabschnitte."
    }
  },
  {
    id: "rdr1-bandana-comparison",
    installments: [
      "rdr-1"
    ],
    moods: [
      "curious"
    ],
    type: "experiment",
    tags: [
      "new-approach"
    ],
    minutes: 10,
    minimum: 2,
    en: {
      name: "Hidden Reputation",
      objective: "With a bandana owned in **Red Dead Redemption story mode**, note your honor and fame, wear it, and commit one small crime. **Compare both values afterward**, then remove it outside the search area."
    },
    de: {
      name: "Verdeckter Ruf",
      objective: "Notiere im **Storymodus von Red Dead Redemption** mit eigenem Halstuch Ehre und Ruhm. Zieh es an und begehe ein kleines Verbrechen. **Vergleiche danach beide Werte** und leg es außerhalb der Suchzone ab."
    }
  },
  {
    id: "rdr1-stagecoach-window",
    installments: [
      "rdr-1"
    ],
    moods: [
      "relax",
      "low-energy"
    ],
    type: "inspiration",
    tags: [
      "no-timer"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "The Stagecoach Road",
      objective: "Take a stagecoach through an unlocked region in **Red Dead Redemption story mode**. Let the ride play out and watch the frontier from the passenger seat."
    },
    de: {
      name: "Mit der Postkutsche",
      objective: "Fahr im **Storymodus von Red Dead Redemption** mit der Postkutsche durch eine freigeschaltete Gegend. Lass die Fahrt laufen und schau vom Sitz aus auf die Landschaft."
    }
  },
  {
    id: "rdr1-train-passenger",
    installments: [
      "rdr-1"
    ],
    moods: [
      "nostalgic",
      "relax"
    ],
    type: "inspiration",
    tags: [
      "free-roam"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Seat on the Train",
      objective: "Board a passenger train in **Red Dead Redemption story mode** and stay aboard through the countryside. Follow the rail journey without turning it into a robbery."
    },
    de: {
      name: "Im Zug mitfahren",
      objective: "Steig im **Storymodus von Red Dead Redemption** in einen Personenzug und fahr durchs Umland mit. Genieß die Strecke, ohne daraus einen Überfall zu machen."
    }
  },
  {
    id: "rdr1-railbridge-return",
    installments: [
      "rdr-1"
    ],
    moods: [
      "explore"
    ],
    type: "objective",
    tags: [
      "no-fast-travel"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Across the Border",
      objective: "Once Mexico is accessible in **Red Dead Redemption story mode**, ride across a usable bridge from New Austin. **Reach Chuparosa without fast travel**, watching where desert turns into settlement."
    },
    de: {
      name: "Über die Grenze",
      objective: "Reite im **Storymodus von Red Dead Redemption** bei freigeschaltetem Mexiko über eine nutzbare Brücke aus New Austin. **Erreiche Chuparosa ohne Schnellreise** und schau, wo die Wüste in den Ort übergeht."
    }
  },
  {
    id: "rdr1-railroad-rifle",
    installments: [
      "rdr-1"
    ],
    moods: [
      "focused",
      "challenge"
    ],
    type: "challenge",
    tags: [
      "one-weapon"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Winchester at the Fort",
      objective: "With Fort Mercer’s hideout available in **Red Dead Redemption story mode**, take a repeater and **clear the hideout without another weapon or Dead Eye**. One attempt, ending on success or death."
    },
    de: {
      name: "Winchester am Fort",
      objective: "Versuch im **Storymodus von Red Dead Redemption** bei verfügbarem Bandenversteck in Fort Mercer, **es nur mit einem Repetiergewehr und ohne Dead Eye zu räumen**. Ein Versuch, bis zum Erfolg oder Tod."
    }
  },
  {
    id: "rdr1-cemetery-fire",
    installments: [
      "rdr-1"
    ],
    moods: [
      "focused",
      "restless"
    ],
    type: "objective",
    tags: [
      "story"
    ],
    minutes: 25,
    minimum: 5,
    en: {
      name: "Burn the Coffins",
      objective: "With the Undead Nightmare expansion in **Red Dead Redemption** and cemetery clearing unlocked, choose an uncleansed accessible cemetery. **Burn its marked coffins and defeat the undead until the cemetery is cleansed**."
    },
    de: {
      name: "Die Särge verbrennen",
      objective: "Wähle in **Red Dead Redemption mit der Erweiterung Undead Nightmare** bei freigeschalteter Friedhofsreinigung einen erreichbaren unreinen Friedhof. **Verbrenne die markierten Särge und besiege die Untoten, bis der Friedhof gereinigt ist**."
    }
  },
  {
    id: "rdr1-camp-night",
    installments: [
      "rdr-1"
    ],
    moods: [
      "relax",
      "overwhelmed"
    ],
    type: "inspiration",
    tags: [
      "no-timer"
    ],
    minutes: 10,
    minimum: 2,
    en: {
      name: "Bedroll in the Desert",
      objective: "Away from combat and towns in **Red Dead Redemption story mode**, put down a basic campsite under open sky. Save there and linger in the desert before riding again."
    },
    de: {
      name: "Schlafplatz in der Wüste",
      objective: "Schlag im **Storymodus von Red Dead Redemption** abseits von Kämpfen und Städten ein einfaches Lager unter freiem Himmel auf. Speichere dort und bleib noch in der Wüste, bevor du weiterreitest."
    }
  },
  {
    id: "rdr1-manual-aim-replay",
    installments: [
      "rdr-1"
    ],
    moods: [
      "focused",
      "challenge"
    ],
    type: "challenge",
    tags: [
      "replay",
      "three-attempts"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Your Own Aim",
      objective: "In **Red Dead Redemption story mode**, replay a short completed shootout mission with Expert targeting. **Finish without Dead Eye**, or stop after three attempts. Restore your usual targeting afterward."
    },
    de: {
      name: "Selbst zielen",
      objective: "Wiederhole im **Storymodus von Red Dead Redemption** eine kurze abgeschlossene Schießerei-Mission mit Experten-Zielmodus. **Schaff sie ohne Dead Eye** oder hör nach drei Versuchen auf. Stell danach deinen normalen Zielmodus wieder ein."
    }
  },
  {
    id: "rdr1-pardon-letter",
    installments: [
      "rdr-1"
    ],
    moods: [
      "progress"
    ],
    type: "objective",
    tags: [
      "current-save"
    ],
    minutes: 10,
    minimum: 2,
    en: {
      name: "Clear the Record",
      objective: "If John has a bounty and a pardon letter in **Red Dead Redemption story mode**, go to a telegraph office. **Use the letter to clear that bounty** instead of paying cash."
    },
    de: {
      name: "Die Akte bereinigen",
      objective: "Geh im **Storymodus von Red Dead Redemption** mit Kopfgeld und Begnadigungsbrief zum Telegrafenamt. **Lass das Kopfgeld mit dem Brief streichen**, statt bar zu zahlen."
    }
  },
  {
    id: "rdr1-bonnie-landscape",
    installments: [
      "rdr-1"
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
      name: "Back to the Ranch",
      objective: "Return to MacFarlane’s Ranch in **Red Dead Redemption story mode** after its early story missions. Ride around the pens and fields Bonnie first showed you and remember that first stretch of the game."
    },
    de: {
      name: "Zurück zur Ranch",
      objective: "Kehre im **Storymodus von Red Dead Redemption** nach den frühen Missionen auf die MacFarlane-Ranch zurück. Reite an den Pferchen und Feldern entlang, die Bonnie dir gezeigt hat."
    }
  },
  {
    id: "rdr1-undead-safe-town",
    installments: [
      "rdr-1"
    ],
    moods: [
      "focused",
      "restless"
    ],
    type: "objective",
    tags: [
      "story"
    ],
    minutes: 25,
    minimum: 5,
    en: {
      name: "One Town Restored",
      objective: "With the Undead Nightmare expansion in **Red Dead Redemption story mode**, enter an accessible town currently overrun by undead. **Clear its defense event until the town is safe**."
    },
    de: {
      name: "Eine Stadt befreien",
      objective: "Betritt in **Red Dead Redemption mit der Erweiterung Undead Nightmare** eine erreichbare, von Untoten überrannte Stadt. **Beende die Verteidigung, bis die Stadt wieder sicher ist**."
    }
  },
  {
    id: "rdr2-dominoes-draw",
    installments: [
      "rdr-2"
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
      name: "Read the Pips",
      objective: "At a Draw dominoes table in **Red Dead Redemption 2 story mode**, **finish one round**, checking both open ends before you place a tile. No win is required."
    },
    de: {
      name: "Augen auf die Steine",
      objective: "Spiel im **Storymodus von Red Dead Redemption 2** an einem Tisch mit Zieh-Domino **eine Runde zu Ende**. Prüfe vor jedem Stein die beiden offenen Enden. Gewinnen musst du nicht."
    }
  },
  {
    id: "rdr2-blackjack-break",
    installments: [
      "rdr-2"
    ],
    moods: [
      "relax",
      "low-energy"
    ],
    type: "inspiration",
    tags: [
      "cards"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Rhodes Card Table",
      objective: "Visit the blackjack table in Rhodes in **Red Dead Redemption 2 story mode**. Spend a little of your spare cash on a few hands and let the riding wait."
    },
    de: {
      name: "Kartenpause in Rhodes",
      objective: "Besuche im **Storymodus von Red Dead Redemption 2** den Blackjacktisch in Rhodes. Setz einen kleinen Betrag, den du übrig hast, und lass den nächsten Ausritt noch warten."
    }
  },
  {
    id: "rdr2-fillet-unhurried",
    installments: [
      "rdr-2"
    ],
    moods: [
      "focused",
      "challenge"
    ],
    type: "challenge",
    tags: [
      "three-attempts"
    ],
    minutes: 10,
    minimum: 2,
    en: {
      name: "Knife and Knuckles",
      objective: "At a Five Finger Fillet table in **Red Dead Redemption 2 story mode**, **beat the first opponent without stabbing your hand**. Stop after success or three attempts."
    },
    de: {
      name: "Messer und Knöchel",
      objective: "Versuch im **Storymodus von Red Dead Redemption 2** beim Messerfinger-Spiel, **den ersten Gegner ohne Stich in die Hand zu schlagen**. Hör nach dem Erfolg oder drei Versuchen auf."
    }
  },
  {
    id: "rdr2-hotel-bath",
    installments: [
      "rdr-2"
    ],
    moods: [
      "low-energy",
      "overwhelmed"
    ],
    type: "objective",
    tags: [
      "current-save"
    ],
    minutes: 10,
    minimum: 2,
    en: {
      name: "Wash Off the Trail",
      objective: "After a muddy ride in **Red Dead Redemption 2 story mode**, visit a hotel that offers baths. **Finish a paid bath** before returning to the road."
    },
    de: {
      name: "Den Staub abwaschen",
      objective: "Besuche im **Storymodus von Red Dead Redemption 2** nach einem schlammigen Ausritt ein Hotel mit Bad. **Nimm ein bezahltes Bad bis zum Ende**, bevor du weiterreitest."
    }
  },
  {
    id: "rdr2-theatre-evening",
    installments: [
      "rdr-2"
    ],
    moods: [
      "relax",
      "curious"
    ],
    type: "inspiration",
    tags: [
      "story"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Saint Denis Stage",
      objective: "Buy a theatre ticket in Saint Denis in **Red Dead Redemption 2 story mode**. Stay for the performance and listen to the audience along with the acts."
    },
    de: {
      name: "Bühne in Saint Denis",
      objective: "Kauf im **Storymodus von Red Dead Redemption 2** eine Theaterkarte in Saint Denis. Bleib für die Vorstellung und hör neben den Auftritten auch dem Publikum zu."
    }
  },
  {
    id: "rdr2-trinket-already-owned",
    installments: [
      "rdr-2"
    ],
    moods: [
      "progress",
      "focused"
    ],
    type: "objective",
    tags: [
      "crafting"
    ],
    minutes: 10,
    minimum: 2,
    en: {
      name: "Use That Trophy",
      objective: "With a legendary-animal crafting part already owned in **Red Dead Redemption 2 story mode**, visit a fence. **Craft one available trinket** and read the bonus it adds."
    },
    de: {
      name: "Die Trophäe nutzen",
      objective: "Besuche im **Storymodus von Red Dead Redemption 2** mit einem bereits vorhandenen Teil eines legendären Tiers einen Hehler. **Lass daraus ein verfügbares Amulett herstellen** und lies seinen Bonus."
    }
  },
  {
    id: "rdr2-pearson-decoration",
    installments: [
      "rdr-2"
    ],
    moods: [
      "create",
      "progress"
    ],
    type: "creation",
    tags: [
      "decorating",
      "crafting"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Something for Camp",
      objective: "While Pearson is available in **Red Dead Redemption 2 story mode**, choose a camp decoration whose required pelts you already have. **Donate those pelts for crafting and have him make the decoration**."
    },
    de: {
      name: "Etwas fürs Lager",
      objective: "Wähle im **Storymodus von Red Dead Redemption 2** bei Pearson eine Lagerdekoration, für die du alle Felle schon hast. **Spende sie zum Herstellen und lass ihn die Dekoration bauen**."
    }
  },
  {
    id: "rdr2-camp-request-ready",
    installments: [
      "rdr-2"
    ],
    moods: [
      "progress",
      "nostalgic"
    ],
    type: "objective",
    tags: [
      "story"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "A Small Favor",
      objective: "With an active camp item request in **Red Dead Redemption 2 story mode**, choose one whose item you already carry. **Give it to the requesting companion** while they are available in camp."
    },
    de: {
      name: "Ein kleiner Gefallen",
      objective: "Wähle im **Storymodus von Red Dead Redemption 2** eine offene Lagerbitte, deren Gegenstand du schon dabeihast. **Gib ihn der betreffenden Person**, sobald sie im Lager ansprechbar ist."
    }
  },
  {
    id: "rdr2-satchel-from-pelts",
    installments: [
      "rdr-2"
    ],
    moods: [
      "progress",
      "focused"
    ],
    type: "creation",
    tags: [
      "crafting"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "More Room for Arthur",
      objective: "With Pearson’s leatherworking tools unlocked in **Red Dead Redemption 2 story mode**, choose a satchel whose pelts and other conditions are already met. **Have Pearson craft it and equip it**."
    },
    de: {
      name: "Mehr Platz für Arthur",
      objective: "Wähle im **Storymodus von Red Dead Redemption 2** mit freigeschaltetem Lederwerkzeug bei Pearson eine Tasche, für die alle Felle und Voraussetzungen vorhanden sind. **Lass sie herstellen und rüste sie aus**."
    }
  },
  {
    id: "rdr2-gunsmith-personal",
    installments: [
      "rdr-2"
    ],
    moods: [
      "create"
    ],
    type: "creation",
    tags: [
      "loadout"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Your Own Repeater",
      objective: "Take an owned repeater to a gunsmith in **Red Dead Redemption 2 story mode**. Choose its metal, wood, or engraving, then **leave with the customized weapon equipped**."
    },
    de: {
      name: "Dein Repetiergewehr",
      objective: "Bring im **Storymodus von Red Dead Redemption 2** dein Repetiergewehr zum Büchsenmacher. Wähle Metall, Holz oder Gravur und **geh mit der angepassten Waffe ausgerüstet wieder raus**."
    }
  },
  {
    id: "rdr2-canoe-bank",
    installments: [
      "rdr-2"
    ],
    moods: [
      "explore",
      "relax"
    ],
    type: "inspiration",
    tags: [
      "traversal"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Down the Dakota",
      objective: "As Arthur in **Red Dead Redemption 2 story mode**, take a canoe already found on a safe riverbank. Paddle along the Dakota and look at the cliffs from the water rather than the horse trail."
    },
    de: {
      name: "Den Dakota hinunter",
      objective: "Nimm als Arthur im **Storymodus von Red Dead Redemption 2** ein Kanu, das du an einem sicheren Ufer schon gefunden hast. Paddel den Dakota entlang und schau von unten auf die Felsen."
    }
  },
  {
    id: "rdr2-mint-meal",
    installments: [
      "rdr-2"
    ],
    moods: [
      "progress",
      "curious"
    ],
    type: "objective",
    tags: [
      "cooking"
    ],
    minutes: 10,
    minimum: 2,
    en: {
      name: "Season the Supper",
      objective: "With mint, big game meat, and the grill available at your campfire in **Red Dead Redemption 2 story mode**, **cook and eat one mint-seasoned portion**, then check the Health core."
    },
    de: {
      name: "Gewürz fürs Abendessen",
      objective: "Koch im **Storymodus von Red Dead Redemption 2** mit Minze, Großwildfleisch und Grill am Lagerfeuer **eine Portion mit Minze und iss sie**. Schau danach auf den Gesundheitskern."
    }
  },
  {
    id: "rdr2-horse-outfit-weather",
    installments: [
      "rdr-2"
    ],
    moods: [
      "create",
      "focused"
    ],
    type: "creation",
    tags: [
      "outfit"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Pack for the Snow",
      objective: "At a wardrobe in **Red Dead Redemption 2 story mode**, assemble a cold-weather outfit from clothes you own. **Save it on your horse and change into it beside the horse**."
    },
    de: {
      name: "Für den Schnee packen",
      objective: "Stell im **Storymodus von Red Dead Redemption 2** am Kleiderschrank ein Outfit für kaltes Wetter aus eigenen Sachen zusammen. **Speichere es auf deinem Pferd und zieh es neben dem Pferd an**."
    }
  },
  {
    id: "rdr2-beechers-milk",
    installments: [
      "rdr-2"
    ],
    moods: [
      "relax",
      "progress"
    ],
    type: "objective",
    tags: [
      "animals"
    ],
    minutes: 10,
    minimum: 2,
    en: {
      name: "Morning Milk",
      objective: "After ranch chores unlock at Beecher’s Hope in the epilogue of **Red Dead Redemption 2 story mode**, **finish the cow-milking chore**. Leave the rest of the ranch for another day."
    },
    de: {
      name: "Milch am Morgen",
      objective: "Erledige im **Epilog von Red Dead Redemption 2 im Storymodus** bei freigeschalteten Rancharbeiten in Beecher’s Hope **das Melken der Kuh**. Der Rest der Ranch kann warten."
    }
  },
  {
    id: "rdr2-camp-stories",
    installments: [
      "rdr-2"
    ],
    moods: [
      "low-energy",
      "nostalgic"
    ],
    type: "inspiration",
    tags: [
      "dialogue"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Listen by the Fire",
      objective: "During a chapter with the gang camp in **Red Dead Redemption 2 story mode**, return around the evening meal. Sit near the fire and listen to whoever is talking or singing."
    },
    de: {
      name: "Am Feuer zuhören",
      objective: "Kehre im **Storymodus von Red Dead Redemption 2** in einem Kapitel mit Bandenlager zur Abendzeit zurück. Setz dich ans Feuer und hör zu, wenn jemand erzählt oder singt."
    }
  },
  {
    id: "rdr2-railway-ticket",
    installments: [
      "rdr-2"
    ],
    moods: [
      "relax",
      "explore"
    ],
    type: "inspiration",
    tags: [
      "free-roam"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Window to the Grizzlies",
      objective: "Board a passenger train at an accessible station in **Red Dead Redemption 2 story mode** and stay aboard as it leaves town. Watch the scenery change from town streets to open country."
    },
    de: {
      name: "Blick auf die Grizzlies",
      objective: "Steig im **Storymodus von Red Dead Redemption 2** an einem erreichbaren Bahnhof in einen Personenzug und bleib bei der Abfahrt an Bord. Schau zu, wie Straßen in offene Landschaft übergehen."
    }
  },
  {
    id: "rdr2-eagleeye-herbs",
    installments: [
      "rdr-2"
    ],
    moods: [
      "curious",
      "explore"
    ],
    type: "experiment",
    tags: [
      "collectibles"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Plants in the Glow",
      objective: "In a meadow in **Red Dead Redemption 2 story mode**, use Eagle Eye to find an unfamiliar herb. **Pick it and inspect its entry and uses** before harvesting anything else."
    },
    de: {
      name: "Pflanzen im Leuchten",
      objective: "Such im **Storymodus von Red Dead Redemption 2** auf einer Wiese mit Adlerauge ein unbekanntes Kraut. **Pflück es und lies seinen Eintrag und seine Verwendung**, bevor du weiter sammelst."
    }
  },
  {
    id: "rdr2-dreamcatcher-tree",
    installments: [
      "rdr-2"
    ],
    moods: [
      "explore",
      "focused"
    ],
    type: "objective",
    tags: [
      "collectibles"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Above the Branches",
      objective: "With an uncollected dreamcatcher location accessible in **Red Dead Redemption 2 story mode**, inspect the nearby trees instead of the ground. **Find and inspect one hanging dreamcatcher**."
    },
    de: {
      name: "Zum Baum hochschauen",
      objective: "Such im **Storymodus von Red Dead Redemption 2** an einem erreichbaren, noch offenen Traumfängerort in den Bäumen statt am Boden. **Finde und untersuche einen hängenden Traumfänger**."
    }
  },
  {
    id: "rdr2-deadeye-two-guns",
    installments: [
      "rdr-2"
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
      name: "Hands Off the Guns",
      objective: "Once manual Dead Eye tagging is unlocked in **Red Dead Redemption 2 story mode**, approach a small armed enemy group. **Disarm two opponents in one Dead Eye activation**. Stop after success or three encounters."
    },
    de: {
      name: "Weg mit den Waffen",
      objective: "Versuch im **Storymodus von Red Dead Redemption 2** mit freigeschalteter manueller Dead-Eye-Markierung gegen eine kleine bewaffnete Gegnergruppe, **zwei Gegner in einer Aktivierung zu entwaffnen**. Hör nach dem Erfolg oder drei Begegnungen auf."
    }
  },
  {
    id: "rdr2-arthur-first-camp",
    installments: [
      "rdr-2"
    ],
    moods: [
      "nostalgic",
      "explore"
    ],
    type: "inspiration",
    tags: [
      "current-save"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "The Old Overlook",
      objective: "In a save where Horseshoe Overlook is no longer home in **Red Dead Redemption 2 story mode**, ride back to its empty camp space. Walk the places where the tents used to stand."
    },
    de: {
      name: "Der alte Aussichtspunkt",
      objective: "Reite im **Storymodus von Red Dead Redemption 2** zu Horseshoe Overlook zurück, wenn das Lager inzwischen weitergezogen ist. Geh durch die Stellen, an denen früher die Zelte standen."
    }
  }
]);
