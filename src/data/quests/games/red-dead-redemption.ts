import { defineQuests } from "../defineQuests";

export const GamesRedDeadRedemptionQuests = defineQuests([
  {
    "id": "red-dead-redemption-rdr2-camp-coffee",
    "moodIds": ["relax", "low-energy"],
    "type": "inspiration",
    "tags": ["cooking", "no-timer"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "red-dead-redemption",
      "installmentIds": ["rdr-2"]
    },
    "translations": {
      "en": {
        "name": "Camp Coffee",
        "objective": "Set up camp in **Red Dead Redemption 2 story mode** and brew some coffee. **Sit by the fire for a while**, then ride on whenever you feel ready.",
        "gameObjective": "Set up camp in **Red Dead Redemption 2 story mode** and brew some coffee. **Sit by the fire for a while**, then ride on whenever you feel ready."
      },
      "de": {
        "name": "Kaffee am Lager",
        "objective": "Schlage in **Red Dead Redemption 2 im Storymodus** ein Lager auf und koche Kaffee. **Sitz eine Weile am Feuer** und reite weiter, wenn dir danach ist.",
        "gameObjective": "Schlage in **Red Dead Redemption 2 im Storymodus** ein Lager auf und koche Kaffee. **Sitz eine Weile am Feuer** und reite weiter, wenn dir danach ist."
      }
    },
    "experience": {
      "family": "camp-coffee",
      "cardMetadata": { "genreIds": ["adventure", "shooter"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["cooking"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Story mode; coffee; camp access",
          "de": "Storymodus; Kaffee; Lagerzugang",
          "chips": {"en": ["Story mode", "Coffee"], "de": ["Storymodus", "Kaffee"]},
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
    "gameGenreIds": ["adventure", "shooter"]
  },
  {
    "id": "red-dead-redemption-bring-them-in",
    "moodIds": ["challenge", "focused"],
    "type": "challenge",
    "tags": [],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "universal": false,
    "curated": {
      "gameId": "red-dead-redemption",
      "installmentIds": ["rdr-1"]
    },
    "translations": {
      "en": {
        "name": "Bring Them In",
        "objective": "Take a bounty in **Red Dead Redemption story mode**. **Lasso the target and bring them in alive without Dead Eye**. Do not shoot the target.",
        "gameObjective": "Take a bounty in **Red Dead Redemption story mode**. **Lasso the target and bring them in alive without Dead Eye**. Do not shoot the target."
      },
      "de": {
        "name": "Lebend abliefern",
        "objective": "Nimm in **Red Dead Redemption im Storymodus** einen Steckbrief an. **Fange das Ziel mit dem Lasso und liefere es ohne Dead Eye lebend ab**. Schieße nicht auf das Ziel.",
        "gameObjective": "Nimm in **Red Dead Redemption im Storymodus** einen Steckbrief an. **Fange das Ziel mit dem Lasso und liefere es ohne Dead Eye lebend ab**. Schieße nicht auf das Ziel."
      }
    },
    "experience": {
      "family": "live-bounty",
      "cardMetadata": { "genreIds": ["adventure", "shooter"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "de": "Verfügbarer Steckbrief und Lasso",
          "en": "Available bounty and lasso",
          "chips": {"en": ["Bounty", "Lasso"], "de": ["Steckbrief", "Lasso"]},
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
    "gameGenreIds": ["adventure", "shooter"]
  },
  {
    "id": "red-dead-redemption-liars-table",
    "moodIds": ["curious"],
    "type": "objective",
    "tags": ["one-round"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "red-dead-redemption",
      "installmentIds": ["rdr-1"]
    },
    "translations": {
      "en": {
        "name": "Liar’s Dice",
        "objective": "Sit down for **Liar’s Dice in Red Dead Redemption story mode**. Use your own dice to judge the bids and **finish one full game without reloading**.",
        "gameObjective": "Sit down for **Liar’s Dice in Red Dead Redemption story mode**. Use your own dice to judge the bids and **finish one full game without reloading**."
      },
      "de": {
        "name": "Würfelpoker",
        "objective": "Setz dich in **Red Dead Redemption im Storymodus** an einen Würfelpokertisch. Nutze deine Würfel als Hinweis und **spiele eine komplette Partie ohne neu zu laden**.",
        "gameObjective": "Setz dich in **Red Dead Redemption im Storymodus** an einen Würfelpokertisch. Nutze deine Würfel als Hinweis und **spiele eine komplette Partie ohne neu zu laden**."
      }
    },
    "experience": {
      "family": "liar-dice",
      "cardMetadata": { "genreIds": ["adventure", "shooter"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": [],
      "rules": ["one-round"],
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
    "gameGenreIds": ["adventure", "shooter"]
  },
  {
    "id": "red-dead-redemption-wild-horse-home",
    "moodIds": ["explore", "progress"],
    "type": "objective",
    "tags": ["exploration"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "red-dead-redemption",
      "installmentIds": ["rdr-1"]
    },
    "translations": {
      "en": {
        "name": "Wild Horse",
        "objective": "Find a **wild horse in Red Dead Redemption story mode**. **Lasso it, break it, and ride it into town**. Finish at a hitching post.",
        "gameObjective": "Find a **wild horse in Red Dead Redemption story mode**. **Lasso it, break it, and ride it into town**. Finish at a hitching post."
      },
      "de": {
        "name": "Wildpferd",
        "objective": "Finde in **Red Dead Redemption im Storymodus** ein Wildpferd. **Fang es mit dem Lasso, reit es zu und bring es in die Stadt**. Bind es dort an einem Pfosten fest.",
        "gameObjective": "Finde in **Red Dead Redemption im Storymodus** ein Wildpferd. **Fang es mit dem Lasso, reit es zu und bring es in die Stadt**. Bind es dort an einem Pfosten fest."
      }
    },
    "experience": {
      "family": "horse-taming",
      "cardMetadata": { "genreIds": ["adventure", "shooter"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["exploration"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Lasso; accessible wild horse",
          "de": "Lasso; erreichbares Wildpferd",
          "chips": {"en": ["Lasso", "Wild horse"], "de": ["Lasso", "Wildpferd"]},
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
    "gameGenreIds": ["adventure", "shooter"]
  },
  {
    "id": "red-dead-redemption-pearsons-delivery",
    "moodIds": ["progress", "focused"],
    "type": "objective",
    "tags": ["hunting"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "universal": false,
    "curated": {
      "gameId": "red-dead-redemption",
      "installmentIds": ["rdr-2"]
    },
    "translations": {
      "en": {
        "name": "Perfect Rabbit",
        "objective": "Hunt a **three-star rabbit in Red Dead Redemption 2 story mode** with the Varmint Rifle. Keep the carcass intact and **donate it to Pearson in perfect condition**.",
        "gameObjective": "Hunt a **three-star rabbit in Red Dead Redemption 2 story mode** with the Varmint Rifle. Keep the carcass intact and **donate it to Pearson in perfect condition**."
      },
      "de": {
        "name": "Perfektes Kaninchen",
        "objective": "Jage in **Red Dead Redemption 2 im Storymodus** mit dem Varmint-Gewehr ein Drei-Sterne-Kaninchen. Lass den Kadaver ganz und **spende ihn Pearson in perfektem Zustand**.",
        "gameObjective": "Jage in **Red Dead Redemption 2 im Storymodus** mit dem Varmint-Gewehr ein Drei-Sterne-Kaninchen. Lass den Kadaver ganz und **spende ihn Pearson in perfektem Zustand**."
      }
    },
    "experience": {
      "family": "camp-supply",
      "cardMetadata": { "genreIds": ["adventure", "shooter"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["hunting"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Pearson verfügbar, Varmint-Gewehr und Drei-Sterne-Kaninchen im Jagdgebiet",
          "en": "Pearson available, Varmint Rifle and a three-star rabbit in the hunting area",
          "chips": {"en": ["Pearson", "Varmint Rifle"], "de": ["Pearson", "Varmint-Gewehr"]},
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
    "gameGenreIds": ["adventure", "shooter"]
  },
  {
    "id": "red-dead-redemption-field-naturalist",
    "moodIds": ["curious", "explore"],
    "type": "objective",
    "tags": ["exploration"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "red-dead-redemption",
      "installmentIds": ["rdr-2"]
    },
    "translations": {
      "en": {
        "name": "Field Naturalist",
        "objective": "In **Red Dead Redemption 2 story mode**, find an animal you have not studied. **Study it with binoculars and read its Compendium entry**. Leave it alive.",
        "gameObjective": "In **Red Dead Redemption 2 story mode**, find an animal you have not studied. **Study it with binoculars and read its Compendium entry**. Leave it alive."
      },
      "de": {
        "name": "Naturforscher",
        "objective": "Finde im **Storymodus von Red Dead Redemption 2** ein noch nicht untersuchtes Tier. **Untersuche es mit dem Fernglas und lies seinen Kompendiumseintrag**. Lass es am Leben.",
        "gameObjective": "Finde im **Storymodus von Red Dead Redemption 2** ein noch nicht untersuchtes Tier. **Untersuche es mit dem Fernglas und lies seinen Kompendiumseintrag**. Lass es am Leben."
      }
    },
    "experience": {
      "family": "animal-study",
      "cardMetadata": { "genreIds": ["adventure", "shooter"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["exploration"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Binoculars; unstudied animal",
          "de": "Fernglas; nicht untersuchtes Tier",
          "chips": {"en": ["Binoculars", "Unstudied animal"], "de": ["Fernglas", "Nicht untersuchtes Tier"]},
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
    "gameGenreIds": ["adventure", "shooter"]
  },
  {
    "id": "red-dead-redemption-catch-and-release",
    "moodIds": ["relax", "low-energy"],
    "type": "objective",
    "tags": ["fishing"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "red-dead-redemption",
      "installmentIds": ["rdr-2"]
    },
    "translations": {
      "en": {
        "name": "Catch and Release",
        "objective": "Go fishing at a **river in Red Dead Redemption 2 story mode**. **Catch and release three fish** of any kind.",
        "gameObjective": "Go fishing at a **river in Red Dead Redemption 2 story mode**. **Catch and release three fish** of any kind."
      },
      "de": {
        "name": "Fangen und Freilassen",
        "objective": "Geh in **Red Dead Redemption 2 im Storymodus** an einem Fluss angeln. **Fange drei beliebige Fische und setze sie wieder frei**.",
        "gameObjective": "Geh in **Red Dead Redemption 2 im Storymodus** an einem Fluss angeln. **Fange drei beliebige Fische und setze sie wieder frei**."
      }
    },
    "experience": {
      "family": "fishing",
      "cardMetadata": { "genreIds": ["adventure", "shooter"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["fishing"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Fishing unlocked; rod and bait",
          "de": "Angeln freigeschaltet; Angel und Köder",
          "chips": {"en": ["Rod", "Bait"], "de": ["Angel", "Köder"]},
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
    "gameGenreIds": ["adventure", "shooter"]
  },
  {
    "id": "red-dead-redemption-rdr1-nightwatch-dog",
    "moodIds": ["focused", "progress"],
    "type": "objective",
    "tags": ["on-foot"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "red-dead-redemption",
      "installmentIds": ["rdr-1"]
    },
    "translations": {
      "en": {
        "name": "Follow the Watchdog",
        "objective": "Start an available Nightwatch job in **Red Dead Redemption story mode**. Follow the dog instead of scouting ahead and **finish the patrol’s incident for your payment**.",
        "gameObjective": "Start an available Nightwatch job in **Red Dead Redemption story mode**. Follow the dog instead of scouting ahead and **finish the patrol’s incident for your payment**."
      },
      "de": {
        "name": "Dem Wachhund nach",
        "objective": "Starte im **Storymodus von Red Dead Redemption** einen verfügbaren Nachtwächterjob. Folge dem Hund, statt vorzulaufen, und **erledige den Vorfall der Runde bis zur Bezahlung**.",
        "gameObjective": "Starte im **Storymodus von Red Dead Redemption** einen verfügbaren Nachtwächterjob. Folge dem Hund, statt vorzulaufen, und **erledige den Vorfall der Runde bis zur Bezahlung**."
      }
    },
    "experience": {
      "family": "nightwatch",
      "cardMetadata": { "genreIds": ["adventure", "shooter"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": [],
      "rules": ["on-foot"],
      "prerequisites": [
        {
          "en": "Available Nightwatch job",
          "de": "Verfügbarer Nachtwächterjob",
          "chips": {"en": ["Nightwatch job"], "de": ["Nachtwächterjob"]},
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
    "gameGenreIds": ["adventure", "shooter"]
  },
  {
    "id": "red-dead-redemption-rdr1-ranch-horsebreaking",
    "moodIds": ["restless", "progress"],
    "type": "objective",
    "tags": ["traversal"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "red-dead-redemption",
      "installmentIds": ["rdr-1"]
    },
    "translations": {
      "en": {
        "name": "Ranch Hand",
        "objective": "At an available horsebreaking job in **Red Dead Redemption story mode**, **break one ranch horse and collect the wages**.",
        "gameObjective": "At an available horsebreaking job in **Red Dead Redemption story mode**, **break one ranch horse and collect the wages**."
      },
      "de": {
        "name": "Arbeit auf der Ranch",
        "objective": "Nimm im **Storymodus von Red Dead Redemption** einen verfügbaren Job zum Pferdezureiten an. **Reite ein Ranchpferd zu und hol den Lohn ab**.",
        "gameObjective": "Nimm im **Storymodus von Red Dead Redemption** einen verfügbaren Job zum Pferdezureiten an. **Reite ein Ranchpferd zu und hol den Lohn ab**."
      }
    },
    "experience": {
      "family": "horsebreaking",
      "cardMetadata": { "genreIds": ["adventure", "shooter"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["traversal"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Available ranch horsebreaking job",
          "de": "Verfügbarer Pferdezureit-Job",
          "chips": {"en": ["Ranch horsebreaking job"], "de": ["Pferdezureit-Job"]},
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
    "gameGenreIds": ["adventure", "shooter"]
  },
  {
    "id": "red-dead-redemption-rdr1-horseshoe-pitch",
    "moodIds": ["curious", "relax"],
    "type": "objective",
    "tags": ["one-round"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "red-dead-redemption",
      "installmentIds": ["rdr-1"]
    },
    "translations": {
      "en": {
        "name": "Pitch a Horseshoe",
        "objective": "Find a horseshoes game in **Red Dead Redemption story mode**. **Finish one game**, adjusting your swing from where each horseshoe lands. Winning is optional.",
        "gameObjective": "Find a horseshoes game in **Red Dead Redemption story mode**. **Finish one game**, adjusting your swing from where each horseshoe lands. Winning is optional."
      },
      "de": {
        "name": "Hufeisen werfen",
        "objective": "Such im **Storymodus von Red Dead Redemption** ein Hufeisenwerfen. **Spiel eine Partie zu Ende** und passe den Schwung an deine Würfe an. Gewinnen ist optional.",
        "gameObjective": "Such im **Storymodus von Red Dead Redemption** ein Hufeisenwerfen. **Spiel eine Partie zu Ende** und passe den Schwung an deine Würfe an. Gewinnen ist optional."
      }
    },
    "experience": {
      "family": "horseshoes",
      "cardMetadata": { "genreIds": ["adventure", "shooter"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": [],
      "rules": ["one-round"],
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
    "gameGenreIds": ["adventure", "shooter"]
  },
  {
    "id": "red-dead-redemption-rdr1-blackjack-table",
    "moodIds": ["relax", "low-energy"],
    "type": "inspiration",
    "tags": ["cards"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "red-dead-redemption",
      "installmentIds": ["rdr-1"]
    },
    "translations": {
      "en": {
        "name": "Rathskeller Cards",
        "objective": "Visit the blackjack table at Rathskeller Fork in Red Dead Redemption story mode. Bring a little money you can spare and **play at the pace of the table**.",
        "gameObjective": "Visit the blackjack table at Rathskeller Fork in Red Dead Redemption story mode. Bring a little money you can spare and **play at the pace of the table**."
      },
      "de": {
        "name": "Karten am Rathskeller",
        "objective": "Besuche im Storymodus von Red Dead Redemption den Blackjacktisch in Rathskeller Fork. Nimm einen kleinen Betrag mit, den du übrig hast, und **spiel entspannt ein paar Hände**.",
        "gameObjective": "Besuche im Storymodus von Red Dead Redemption den Blackjacktisch in Rathskeller Fork. Nimm einen kleinen Betrag mit, den du übrig hast, und **spiel entspannt ein paar Hände**."
      }
    },
    "experience": {
      "family": "blackjack",
      "cardMetadata": { "genreIds": ["adventure", "shooter"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["cards"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Reachable table; spare cash",
          "de": "Erreichbarer Tisch; übriges Geld",
          "chips": {"en": ["Table"], "de": ["Tisch"]},
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
    "gameGenreIds": ["adventure", "shooter"]
  },
  {
    "id": "red-dead-redemption-rdr1-five-finger-sequence",
    "moodIds": ["challenge", "focused"],
    "type": "challenge",
    "tags": ["three-attempts"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "red-dead-redemption",
      "installmentIds": ["rdr-1"]
    },
    "translations": {
      "en": {
        "name": "Mind Your Fingers",
        "objective": "At a Five Finger Fillet table in **Red Dead Redemption story mode**, **beat the first opponent without a mistake**. Stop after success or three attempts.",
        "gameObjective": "At a Five Finger Fillet table in **Red Dead Redemption story mode**, **beat the first opponent without a mistake**. Stop after success or three attempts."
      },
      "de": {
        "name": "Achte auf die Finger",
        "objective": "Versuch im **Storymodus von Red Dead Redemption** beim Messerfinger-Spiel, **den ersten Gegner ohne Fehler zu schlagen**. Hör nach dem Erfolg oder drei Versuchen auf.",
        "gameObjective": "Versuch im **Storymodus von Red Dead Redemption** beim Messerfinger-Spiel, **den ersten Gegner ohne Fehler zu schlagen**. Hör nach dem Erfolg oder drei Versuchen auf."
      }
    },
    "experience": {
      "family": "finger-fillet",
      "cardMetadata": { "genreIds": ["adventure", "shooter"], "playStyleIds": [] },
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
    "gameGenreIds": ["adventure", "shooter"]
  },
  {
    "id": "red-dead-redemption-rdr1-arm-wrestle",
    "moodIds": ["restless", "challenge"],
    "type": "challenge",
    "tags": ["three-attempts"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "red-dead-redemption",
      "installmentIds": ["rdr-1"]
    },
    "translations": {
      "en": {
        "name": "Elbow on the Table",
        "objective": "At an unlocked arm-wrestling table in **Red Dead Redemption story mode**, **win one contest**, letting your strength recover when the opponent pushes. Stop after success or three contests.",
        "gameObjective": "At an unlocked arm-wrestling table in **Red Dead Redemption story mode**, **win one contest**, letting your strength recover when the opponent pushes. Stop after success or three contests."
      },
      "de": {
        "name": "Ellbogen auf den Tisch",
        "objective": "Versuch im **Storymodus von Red Dead Redemption** an einem freigeschalteten Tisch, **ein Armdrücken zu gewinnen**. Lass deine Kraft zurückkommen, wenn der Gegner drückt. Hör nach dem Erfolg oder drei Partien auf.",
        "gameObjective": "Versuch im **Storymodus von Red Dead Redemption** an einem freigeschalteten Tisch, **ein Armdrücken zu gewinnen**. Lass deine Kraft zurückkommen, wenn der Gegner drückt. Hör nach dem Erfolg oder drei Partien auf."
      }
    },
    "experience": {
      "family": "arm-wrestling",
      "cardMetadata": { "genreIds": ["adventure", "shooter"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Arm-wrestling table unlocked",
          "de": "Armdrücken freigeschaltet",
          "chips": {"en": ["Arm-wrestling table"], "de": ["Armdrücken"]},
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
    "gameGenreIds": ["adventure", "shooter"]
  },
  {
    "id": "red-dead-redemption-rdr1-silent-film",
    "moodIds": ["low-energy"],
    "type": "inspiration",
    "tags": ["story"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "red-dead-redemption",
      "installmentIds": ["rdr-1"]
    },
    "translations": {
      "en": {
        "name": "Picture House",
        "objective": "If a cinema is open in Red Dead Redemption story mode, **buy a ticket and settle in for a silent film**. Give John a break from the saddle.",
        "gameObjective": "If a cinema is open in Red Dead Redemption story mode, **buy a ticket and settle in for a silent film**. Give John a break from the saddle."
      },
      "de": {
        "name": "Lichtspielhaus",
        "objective": "Kauf im Storymodus von Red Dead Redemption eine Karte für ein geöffnetes Kino und **schau dir einen Stummfilm an**. Gönn John eine Pause vom Sattel.",
        "gameObjective": "Kauf im Storymodus von Red Dead Redemption eine Karte für ein geöffnetes Kino und **schau dir einen Stummfilm an**. Gönn John eine Pause vom Sattel."
      }
    },
    "experience": {
      "family": "cinema",
      "cardMetadata": { "genreIds": ["adventure", "shooter"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Open cinema; ticket money",
          "de": "Offenes Kino; Eintrittsgeld",
          "chips": {"en": ["Cinema"], "de": ["Kino"]},
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
    "gameGenreIds": ["adventure", "shooter"]
  },
  {
    "id": "red-dead-redemption-rdr1-survivalist-herbs",
    "moodIds": ["progress", "explore"],
    "type": "objective",
    "tags": ["collectibles"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "red-dead-redemption",
      "installmentIds": ["rdr-1"]
    },
    "translations": {
      "en": {
        "name": "Feverfew for the Trail",
        "objective": "If Survivalist rank one is unfinished in **Red Dead Redemption story mode**, search Hennigan’s Stead and Cholla Springs. **Collect the six Wild Feverfew required for that rank**.",
        "gameObjective": "If Survivalist rank one is unfinished in **Red Dead Redemption story mode**, search Hennigan’s Stead and Cholla Springs. **Collect the six Wild Feverfew required for that rank**."
      },
      "de": {
        "name": "Mutterkraut am Weg",
        "objective": "Such im **Storymodus von Red Dead Redemption** bei offener erster Überlebenskünstler-Stufe in Hennigan’s Stead und Cholla Springs. **Sammle die sechs dafür benötigten Mutterkrautpflanzen**.",
        "gameObjective": "Such im **Storymodus von Red Dead Redemption** bei offener erster Überlebenskünstler-Stufe in Hennigan’s Stead und Cholla Springs. **Sammle die sechs dafür benötigten Mutterkrautpflanzen**."
      }
    },
    "experience": {
      "family": "herb-collection",
      "cardMetadata": { "genreIds": ["adventure", "shooter"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["collectibles"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Survivalist rank one unfinished",
          "de": "Erste Überlebenskünstler-Stufe offen",
          "chips": {"en": ["Survivalist challenge"], "de": ["Überlebenskünstler"]},
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
    "gameGenreIds": ["adventure", "shooter"]
  },
  {
    "id": "red-dead-redemption-rdr1-outfit-scrap",
    "moodIds": ["progress", "focused"],
    "type": "objective",
    "tags": ["outfit"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "red-dead-redemption",
      "installmentIds": ["rdr-1"]
    },
    "translations": {
      "en": {
        "name": "One Missing Scrap",
        "objective": "Track an unfinished outfit with a currently accessible task in **Red Dead Redemption story mode**. **Finish that task and earn its missing scrap**.",
        "gameObjective": "Track an unfinished outfit with a currently accessible task in **Red Dead Redemption story mode**. **Finish that task and earn its missing scrap**."
      },
      "de": {
        "name": "Ein fehlendes Stück",
        "objective": "Verfolge im **Storymodus von Red Dead Redemption** ein unfertiges Outfit mit einer jetzt erreichbaren Aufgabe. **Erledige die Aufgabe und hol das fehlende Stoffstück**.",
        "gameObjective": "Verfolge im **Storymodus von Red Dead Redemption** ein unfertiges Outfit mit einer jetzt erreichbaren Aufgabe. **Erledige die Aufgabe und hol das fehlende Stoffstück**."
      }
    },
    "experience": {
      "family": "outfit-piece",
      "cardMetadata": { "genreIds": ["adventure", "shooter"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["outfit"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Accessible unfinished outfit scrap task",
          "de": "Erreichbare offene Outfit-Aufgabe",
          "chips": {"en": ["Outfit scrap task"], "de": ["Outfit-Aufgabe"]},
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
    "gameGenreIds": ["adventure", "shooter"]
  },
  {
    "id": "red-dead-redemption-rdr1-bandana-comparison",
    "moodIds": ["curious"],
    "type": "experiment",
    "tags": ["new-approach"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "red-dead-redemption",
      "installmentIds": ["rdr-1"]
    },
    "translations": {
      "en": {
        "name": "Hidden Reputation",
        "objective": "With a bandana owned in **Red Dead Redemption story mode**, note your honor and fame, wear it, and commit one small crime. **Compare both values afterward**, then remove it outside the search area.",
        "gameObjective": "With a bandana owned in **Red Dead Redemption story mode**, note your honor and fame, wear it, and commit one small crime. **Compare both values afterward**, then remove it outside the search area."
      },
      "de": {
        "name": "Verdeckter Ruf",
        "objective": "Notiere im **Storymodus von Red Dead Redemption** mit eigenem Halstuch Ehre und Ruhm. Zieh es an und begehe ein kleines Verbrechen. **Vergleiche danach beide Werte** und leg es außerhalb der Suchzone ab.",
        "gameObjective": "Notiere im **Storymodus von Red Dead Redemption** mit eigenem Halstuch Ehre und Ruhm. Zieh es an und begehe ein kleines Verbrechen. **Vergleiche danach beide Werte** und leg es außerhalb der Suchzone ab."
      }
    },
    "experience": {
      "family": "bandana",
      "cardMetadata": { "genreIds": ["adventure", "shooter"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "en": "Owned bandana",
          "de": "Eigenes Halstuch",
          "chips": {"en": ["Bandana"], "de": ["Halstuch"]},
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
    "gameGenreIds": ["adventure", "shooter"]
  },
  {
    "id": "red-dead-redemption-rdr1-stagecoach-window",
    "moodIds": ["relax", "low-energy"],
    "type": "inspiration",
    "tags": ["no-timer"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "red-dead-redemption",
      "installmentIds": ["rdr-1"]
    },
    "translations": {
      "en": {
        "name": "The Stagecoach Road",
        "objective": "Take a stagecoach through an unlocked region in Red Dead Redemption story mode. Let the ride play out and **watch the frontier from the passenger seat**.",
        "gameObjective": "Take a stagecoach through an unlocked region in Red Dead Redemption story mode. Let the ride play out and **watch the frontier from the passenger seat**."
      },
      "de": {
        "name": "Mit der Postkutsche",
        "objective": "Fahr im Storymodus von Red Dead Redemption mit der Postkutsche durch eine freigeschaltete Gegend. Lass die Fahrt laufen und **schau vom Sitz aus auf die Landschaft**.",
        "gameObjective": "Fahr im Storymodus von Red Dead Redemption mit der Postkutsche durch eine freigeschaltete Gegend. Lass die Fahrt laufen und **schau vom Sitz aus auf die Landschaft**."
      }
    },
    "experience": {
      "family": "stagecoach",
      "cardMetadata": { "genreIds": ["adventure", "shooter"], "playStyleIds": [] },
      "finish": "open",
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
    "gameGenreIds": ["adventure", "shooter"]
  },
  {
    "id": "red-dead-redemption-rdr1-train-passenger",
    "moodIds": ["relax", "explore"],
    "type": "inspiration",
    "tags": ["free-roam"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "red-dead-redemption",
      "installmentIds": ["rdr-1"]
    },
    "translations": {
      "en": {
        "name": "Seat on the Train",
        "objective": "Board a passenger train in Red Dead Redemption story mode and **stay aboard through the countryside**. Follow the rail journey without turning it into a robbery.",
        "gameObjective": "Board a passenger train in Red Dead Redemption story mode and **stay aboard through the countryside**. Follow the rail journey without turning it into a robbery."
      },
      "de": {
        "name": "Im Zug mitfahren",
        "objective": "Steig im Storymodus von Red Dead Redemption in einen Personenzug und **fahr durchs Umland mit**. Genieß die Strecke, ohne daraus einen Überfall zu machen.",
        "gameObjective": "Steig im Storymodus von Red Dead Redemption in einen Personenzug und **fahr durchs Umland mit**. Genieß die Strecke, ohne daraus einen Überfall zu machen."
      }
    },
    "experience": {
      "family": "train-journey",
      "cardMetadata": { "genreIds": ["adventure", "shooter"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["free-roam"],
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
    "gameGenreIds": ["adventure", "shooter"]
  },
  {
    "id": "red-dead-redemption-rdr1-railbridge-return",
    "moodIds": ["explore"],
    "type": "objective",
    "tags": ["no-fast-travel"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "red-dead-redemption",
      "installmentIds": ["rdr-1"]
    },
    "translations": {
      "en": {
        "name": "Across the Border",
        "objective": "Once Mexico is accessible in **Red Dead Redemption story mode**, ride across a usable bridge from New Austin. **Reach Chuparosa without fast travel**, watching where desert turns into settlement.",
        "gameObjective": "Once Mexico is accessible in **Red Dead Redemption story mode**, ride across a usable bridge from New Austin. **Reach Chuparosa without fast travel**, watching where desert turns into settlement."
      },
      "de": {
        "name": "Über die Grenze",
        "objective": "Reite im **Storymodus von Red Dead Redemption** bei freigeschaltetem Mexiko über eine nutzbare Brücke aus New Austin. **Erreiche Chuparosa ohne Schnellreise** und schau, wo die Wüste in den Ort übergeht.",
        "gameObjective": "Reite im **Storymodus von Red Dead Redemption** bei freigeschaltetem Mexiko über eine nutzbare Brücke aus New Austin. **Erreiche Chuparosa ohne Schnellreise** und schau, wo die Wüste in den Ort übergeht."
      }
    },
    "experience": {
      "family": "familiar-railway",
      "cardMetadata": { "genreIds": ["adventure", "shooter"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": [],
      "rules": ["no-fast-travel"],
      "prerequisites": [
        {
          "en": "Mexico unlocked",
          "de": "Mexiko freigeschaltet",
          "chips": {"en": ["Mexico"], "de": ["Mexiko"]},
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
    "gameGenreIds": ["adventure", "shooter"]
  },
  {
    "id": "red-dead-redemption-rdr1-railroad-rifle",
    "moodIds": ["focused", "challenge"],
    "type": "challenge",
    "tags": ["one-weapon"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "red-dead-redemption",
      "installmentIds": ["rdr-1"]
    },
    "translations": {
      "en": {
        "name": "Winchester at the Fort",
        "objective": "With Fort Mercer’s hideout available in **Red Dead Redemption story mode**, take a repeater and **clear the hideout without another weapon or Dead Eye**. One attempt, ending on success or death.",
        "gameObjective": "With Fort Mercer’s hideout available in **Red Dead Redemption story mode**, take a repeater and **clear the hideout without another weapon or Dead Eye**. One attempt, ending on success or death."
      },
      "de": {
        "name": "Winchester am Fort",
        "objective": "Versuch im **Storymodus von Red Dead Redemption** bei verfügbarem Bandenversteck in Fort Mercer, **es nur mit einem Repetiergewehr und ohne Dead Eye zu räumen**. Ein Versuch, bis zum Erfolg oder Tod.",
        "gameObjective": "Versuch im **Storymodus von Red Dead Redemption** bei verfügbarem Bandenversteck in Fort Mercer, **es nur mit einem Repetiergewehr und ohne Dead Eye zu räumen**. Ein Versuch, bis zum Erfolg oder Tod."
      }
    },
    "experience": {
      "family": "railroad-fight",
      "cardMetadata": { "genreIds": ["adventure", "shooter"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["one-weapon"],
      "prerequisites": [
        {
          "en": "Fort Mercer hideout; repeater",
          "de": "Fort-Mercer-Versteck; Repetiergewehr",
          "chips": {"en": ["Fort Mercer hideout", "Repeater"], "de": ["Fort-Mercer-Versteck", "Repetiergewehr"]},
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
    "gameGenreIds": ["adventure", "shooter"]
  },
  {
    "id": "red-dead-redemption-rdr1-cemetery-fire",
    "moodIds": ["focused", "restless"],
    "type": "objective",
    "tags": ["story"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "red-dead-redemption",
      "installmentIds": ["rdr-1"]
    },
    "translations": {
      "en": {
        "name": "Burn the Coffins",
        "objective": "With the Undead Nightmare expansion in **Red Dead Redemption** and cemetery clearing unlocked, choose an uncleansed accessible cemetery. **Burn its marked coffins and defeat the undead until the cemetery is cleansed**.",
        "gameObjective": "With the Undead Nightmare expansion in **Red Dead Redemption** and cemetery clearing unlocked, choose an uncleansed accessible cemetery. **Burn its marked coffins and defeat the undead until the cemetery is cleansed**."
      },
      "de": {
        "name": "Die Särge verbrennen",
        "objective": "Wähle in **Red Dead Redemption mit der Erweiterung Undead Nightmare** bei freigeschalteter Friedhofsreinigung einen erreichbaren unreinen Friedhof. **Verbrenne die markierten Särge und besiege die Untoten, bis der Friedhof gereinigt ist**.",
        "gameObjective": "Wähle in **Red Dead Redemption mit der Erweiterung Undead Nightmare** bei freigeschalteter Friedhofsreinigung einen erreichbaren unreinen Friedhof. **Verbrenne die markierten Särge und besiege die Untoten, bis der Friedhof gereinigt ist**."
      }
    },
    "gameGenreIds": ["adventure", "shooter", "horror"],
    "experience": {
      "family": "cemetery-defense",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Undead Nightmare; cemetery clearing unlocked",
          "de": "Undead Nightmare; Friedhofsreinigung frei",
          "chips": {"en": ["Undead Nightmare", "Cemetery clearing"], "de": ["Undead Nightmare", "Friedhofsreinigung"]},
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
    }
  },
  {
    "id": "red-dead-redemption-rdr1-camp-night",
    "moodIds": ["relax", "overwhelmed"],
    "type": "inspiration",
    "tags": ["no-timer"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "red-dead-redemption",
      "installmentIds": ["rdr-1"]
    },
    "translations": {
      "en": {
        "name": "Bedroll in the Desert",
        "objective": "Away from combat and towns in **Red Dead Redemption story mode**, put down a basic campsite under open sky. **Give John a quiet pause in the desert** before riding on.",
        "gameObjective": "Away from combat and towns in **Red Dead Redemption story mode**, put down a basic campsite under open sky. **Give John a quiet pause in the desert** before riding on."
      },
      "de": {
        "name": "Schlafplatz in der Wüste",
        "objective": "Schlag im **Storymodus von Red Dead Redemption** abseits von Kämpfen und Städten ein einfaches Lager unter freiem Himmel auf. **Gönn John eine ruhige Pause in der Wüste**, bevor du weiterreitest.",
        "gameObjective": "Schlag im **Storymodus von Red Dead Redemption** abseits von Kämpfen und Städten ein einfaches Lager unter freiem Himmel auf. **Gönn John eine ruhige Pause in der Wüste**, bevor du weiterreitest."
      }
    },
    "experience": {
      "family": "camping",
      "cardMetadata": { "genreIds": ["adventure", "shooter"], "playStyleIds": [] },
      "finish": "open",
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
    "gameGenreIds": ["adventure", "shooter"]
  },
  {
    "id": "red-dead-redemption-rdr1-manual-aim-replay",
    "moodIds": ["focused", "challenge"],
    "type": "challenge",
    "tags": ["replay", "three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "red-dead-redemption",
      "installmentIds": ["rdr-1"]
    },
    "translations": {
      "en": {
        "name": "Your Own Aim",
        "objective": "In **Red Dead Redemption story mode**, replay a short completed shootout mission with Expert targeting. **Finish without Dead Eye**, or stop after three attempts. Restore your usual targeting afterward.",
        "gameObjective": "In **Red Dead Redemption story mode**, replay a short completed shootout mission with Expert targeting. **Finish without Dead Eye**, or stop after three attempts. Restore your usual targeting afterward."
      },
      "de": {
        "name": "Selbst zielen",
        "objective": "Wiederhole im **Storymodus von Red Dead Redemption** eine kurze abgeschlossene Schießerei-Mission mit Experten-Zielmodus. **Schaff sie ohne Dead Eye** oder hör nach drei Versuchen auf. Stell danach deinen normalen Zielmodus wieder ein.",
        "gameObjective": "Wiederhole im **Storymodus von Red Dead Redemption** eine kurze abgeschlossene Schießerei-Mission mit Experten-Zielmodus. **Schaff sie ohne Dead Eye** oder hör nach drei Versuchen auf. Stell danach deinen normalen Zielmodus wieder ein."
      }
    },
    "experience": {
      "family": "manual-aim",
      "cardMetadata": { "genreIds": ["adventure", "shooter"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Completed replayable shootout mission",
          "de": "Abgeschlossene wiederholbare Schießerei",
          "chips": {"en": ["Replayable shootout"], "de": ["Schießerei wiederholbar"]},
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
    "gameGenreIds": ["adventure", "shooter"]
  },
  {
    "id": "red-dead-redemption-rdr1-pardon-letter",
    "moodIds": ["progress"],
    "type": "objective",
    "tags": ["current-save"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "red-dead-redemption",
      "installmentIds": ["rdr-1"]
    },
    "translations": {
      "en": {
        "name": "Clear the Record",
        "objective": "If John has a bounty and a pardon letter in **Red Dead Redemption story mode**, go to a telegraph office. **Use the letter to clear that bounty** instead of paying cash.",
        "gameObjective": "If John has a bounty and a pardon letter in **Red Dead Redemption story mode**, go to a telegraph office. **Use the letter to clear that bounty** instead of paying cash."
      },
      "de": {
        "name": "Die Akte bereinigen",
        "objective": "Geh im **Storymodus von Red Dead Redemption** mit Kopfgeld und Begnadigungsbrief zum Telegrafenamt. **Lass das Kopfgeld mit dem Brief streichen**, statt bar zu zahlen.",
        "gameObjective": "Geh im **Storymodus von Red Dead Redemption** mit Kopfgeld und Begnadigungsbrief zum Telegrafenamt. **Lass das Kopfgeld mit dem Brief streichen**, statt bar zu zahlen."
      }
    },
    "experience": {
      "family": "pardon",
      "cardMetadata": { "genreIds": ["adventure", "shooter"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "en": "Existing bounty; pardon letter",
          "de": "Aktuelles Kopfgeld; Begnadigungsbrief",
          "chips": {"en": ["Bounty", "Pardon letter"], "de": ["Kopfgeld", "Begnadigungsbrief"]},
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
    "gameGenreIds": ["adventure", "shooter"]
  },
  {
    "id": "red-dead-redemption-rdr1-bonnie-landscape",
    "moodIds": ["nostalgic", "relax"],
    "type": "inspiration",
    "tags": ["free-roam"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "red-dead-redemption",
      "installmentIds": ["rdr-1"]
    },
    "translations": {
      "en": {
        "name": "Back to the Ranch",
        "objective": "Return to MacFarlane’s Ranch in Red Dead Redemption story mode after its early story missions. **Ride around the pens and fields Bonnie first showed you** and remember that first stretch of the game.",
        "gameObjective": "Return to MacFarlane’s Ranch in Red Dead Redemption story mode after its early story missions. **Ride around the pens and fields Bonnie first showed you** and remember that first stretch of the game."
      },
      "de": {
        "name": "Zurück zur Ranch",
        "objective": "Kehre im Storymodus von Red Dead Redemption nach den frühen Missionen auf die MacFarlane-Ranch zurück. **Reite an den Pferchen und Feldern entlang, die Bonnie dir gezeigt hat**.",
        "gameObjective": "Kehre im Storymodus von Red Dead Redemption nach den frühen Missionen auf die MacFarlane-Ranch zurück. **Reite an den Pferchen und Feldern entlang, die Bonnie dir gezeigt hat**."
      }
    },
    "experience": {
      "family": "familiar-ranch",
      "cardMetadata": { "genreIds": ["adventure", "shooter"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["free-roam"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Early ranch missions completed",
          "de": "Frühe Ranch-Missionen abgeschlossen",
          "chips": {"en": ["Early ranch missions"], "de": ["Frühe Ranch-Missionen"]},
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
    "gameGenreIds": ["adventure", "shooter"]
  },
  {
    "id": "red-dead-redemption-rdr1-undead-safe-town",
    "moodIds": ["focused", "restless"],
    "type": "objective",
    "tags": ["story"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "red-dead-redemption",
      "installmentIds": ["rdr-1"]
    },
    "translations": {
      "en": {
        "name": "One Town Restored",
        "objective": "With the Undead Nightmare expansion in **Red Dead Redemption story mode**, enter an accessible town currently overrun by undead. **Clear its defense event until the town is safe**.",
        "gameObjective": "With the Undead Nightmare expansion in **Red Dead Redemption story mode**, enter an accessible town currently overrun by undead. **Clear its defense event until the town is safe**."
      },
      "de": {
        "name": "Eine Stadt befreien",
        "objective": "Betritt in **Red Dead Redemption mit der Erweiterung Undead Nightmare** eine erreichbare, von Untoten überrannte Stadt. **Beende die Verteidigung, bis die Stadt wieder sicher ist**.",
        "gameObjective": "Betritt in **Red Dead Redemption mit der Erweiterung Undead Nightmare** eine erreichbare, von Untoten überrannte Stadt. **Beende die Verteidigung, bis die Stadt wieder sicher ist**."
      }
    },
    "gameGenreIds": ["adventure", "shooter", "horror"],
    "experience": {
      "family": "undead-town",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Undead Nightmare; overrun town",
          "de": "Undead Nightmare; überrannte Stadt",
          "chips": {"en": ["Undead Nightmare", "Overrun town"], "de": ["Undead Nightmare", "Überrannte Stadt"]},
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
    }
  },
  {
    "id": "red-dead-redemption-rdr2-dominoes-draw",
    "moodIds": ["curious", "focused"],
    "type": "objective",
    "tags": ["one-round"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "red-dead-redemption",
      "installmentIds": ["rdr-2"]
    },
    "translations": {
      "en": {
        "name": "Read the Pips",
        "objective": "At a Draw dominoes table in **Red Dead Redemption 2 story mode**, **finish one round**, checking both open ends before you place a tile. No win is required.",
        "gameObjective": "At a Draw dominoes table in **Red Dead Redemption 2 story mode**, **finish one round**, checking both open ends before you place a tile. No win is required."
      },
      "de": {
        "name": "Augen auf die Steine",
        "objective": "Spiel im **Storymodus von Red Dead Redemption 2** an einem Tisch mit Zieh-Domino **eine Runde zu Ende**. Prüfe vor jedem Stein die beiden offenen Enden. Gewinnen musst du nicht.",
        "gameObjective": "Spiel im **Storymodus von Red Dead Redemption 2** an einem Tisch mit Zieh-Domino **eine Runde zu Ende**. Prüfe vor jedem Stein die beiden offenen Enden. Gewinnen musst du nicht."
      }
    },
    "experience": {
      "family": "dominoes",
      "cardMetadata": { "genreIds": ["adventure", "shooter"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": [],
      "rules": ["one-round"],
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
    "gameGenreIds": ["adventure", "shooter"]
  },
  {
    "id": "red-dead-redemption-rdr2-blackjack-break",
    "moodIds": ["relax", "low-energy"],
    "type": "inspiration",
    "tags": ["cards"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "red-dead-redemption",
      "installmentIds": ["rdr-2"]
    },
    "translations": {
      "en": {
        "name": "Rhodes Card Table",
        "objective": "Visit the blackjack table in Rhodes in Red Dead Redemption 2 story mode. **Spend a little of your spare cash on a few hands** and let the riding wait.",
        "gameObjective": "Visit the blackjack table in Rhodes in Red Dead Redemption 2 story mode. **Spend a little of your spare cash on a few hands** and let the riding wait."
      },
      "de": {
        "name": "Kartenpause in Rhodes",
        "objective": "Besuche im Storymodus von Red Dead Redemption 2 **den Blackjacktisch in Rhodes**. Setz einen kleinen Betrag, den du übrig hast, und lass den nächsten Ausritt noch warten.",
        "gameObjective": "Besuche im Storymodus von Red Dead Redemption 2 **den Blackjacktisch in Rhodes**. Setz einen kleinen Betrag, den du übrig hast, und lass den nächsten Ausritt noch warten."
      }
    },
    "experience": {
      "family": "blackjack",
      "cardMetadata": { "genreIds": ["adventure", "shooter"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["cards"],
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
    "gameGenreIds": ["adventure", "shooter"]
  },
  {
    "id": "red-dead-redemption-rdr2-fillet-unhurried",
    "moodIds": ["focused", "challenge"],
    "type": "challenge",
    "tags": ["three-attempts"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "red-dead-redemption",
      "installmentIds": ["rdr-2"]
    },
    "translations": {
      "en": {
        "name": "Knife and Knuckles",
        "objective": "At a Five Finger Fillet table in **Red Dead Redemption 2 story mode**, **beat the first opponent without stabbing your hand**. Stop after success or three attempts.",
        "gameObjective": "At a Five Finger Fillet table in **Red Dead Redemption 2 story mode**, **beat the first opponent without stabbing your hand**. Stop after success or three attempts."
      },
      "de": {
        "name": "Messer und Knöchel",
        "objective": "Versuch im **Storymodus von Red Dead Redemption 2** beim Messerfinger-Spiel, **den ersten Gegner ohne Stich in die Hand zu schlagen**. Hör nach dem Erfolg oder drei Versuchen auf.",
        "gameObjective": "Versuch im **Storymodus von Red Dead Redemption 2** beim Messerfinger-Spiel, **den ersten Gegner ohne Stich in die Hand zu schlagen**. Hör nach dem Erfolg oder drei Versuchen auf."
      }
    },
    "experience": {
      "family": "finger-fillet",
      "cardMetadata": { "genreIds": ["adventure", "shooter"], "playStyleIds": [] },
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
    "gameGenreIds": ["adventure", "shooter"]
  },
  {
    "id": "red-dead-redemption-rdr2-hotel-bath",
    "moodIds": ["low-energy", "overwhelmed"],
    "type": "objective",
    "tags": ["current-save"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "red-dead-redemption",
      "installmentIds": ["rdr-2"]
    },
    "translations": {
      "en": {
        "name": "Wash Off the Trail",
        "objective": "After a muddy ride in **Red Dead Redemption 2 story mode**, visit a hotel that offers baths. **Finish a paid bath** before returning to the road.",
        "gameObjective": "After a muddy ride in **Red Dead Redemption 2 story mode**, visit a hotel that offers baths. **Finish a paid bath** before returning to the road."
      },
      "de": {
        "name": "Den Staub abwaschen",
        "objective": "Besuche im **Storymodus von Red Dead Redemption 2** nach einem schlammigen Ausritt ein Hotel mit Bad. **Nimm ein bezahltes Bad bis zum Ende**, bevor du weiterreitest.",
        "gameObjective": "Besuche im **Storymodus von Red Dead Redemption 2** nach einem schlammigen Ausritt ein Hotel mit Bad. **Nimm ein bezahltes Bad bis zum Ende**, bevor du weiterreitest."
      }
    },
    "experience": {
      "family": "bath",
      "cardMetadata": { "genreIds": ["adventure", "shooter"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "en": "Hotel bath available; spare cash",
          "de": "Hotelbad verfügbar; übriges Geld",
          "chips": {"en": ["Hotel bath"], "de": ["Hotelbad"]},
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
    "gameGenreIds": ["adventure", "shooter"]
  },
  {
    "id": "red-dead-redemption-rdr2-theatre-evening",
    "moodIds": ["relax", "curious"],
    "type": "inspiration",
    "tags": ["story"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "red-dead-redemption",
      "installmentIds": ["rdr-2"]
    },
    "translations": {
      "en": {
        "name": "Saint Denis Stage",
        "objective": "Buy a theatre ticket in Saint Denis in Red Dead Redemption 2 story mode. **Stay for the performance** and listen to the audience along with the acts.",
        "gameObjective": "Buy a theatre ticket in Saint Denis in Red Dead Redemption 2 story mode. **Stay for the performance** and listen to the audience along with the acts."
      },
      "de": {
        "name": "Bühne in Saint Denis",
        "objective": "Kauf im Storymodus von Red Dead Redemption 2 eine Theaterkarte in Saint Denis. **Bleib für die Vorstellung** und hör neben den Auftritten auch dem Publikum zu.",
        "gameObjective": "Kauf im Storymodus von Red Dead Redemption 2 eine Theaterkarte in Saint Denis. **Bleib für die Vorstellung** und hör neben den Auftritten auch dem Publikum zu."
      }
    },
    "experience": {
      "family": "theatre",
      "cardMetadata": { "genreIds": ["adventure", "shooter"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Saint Denis accessible; ticket money",
          "de": "Saint Denis erreichbar; Eintrittsgeld",
          "chips": {"en": ["Saint Denis"], "de": ["Saint Denis"]},
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
    "gameGenreIds": ["adventure", "shooter"]
  },
  {
    "id": "red-dead-redemption-rdr2-trinket-already-owned",
    "moodIds": ["progress", "focused"],
    "type": "objective",
    "tags": ["crafting"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "red-dead-redemption",
      "installmentIds": ["rdr-2"]
    },
    "translations": {
      "en": {
        "name": "Use That Trophy",
        "objective": "With a legendary-animal crafting part already owned in **Red Dead Redemption 2 story mode**, visit a fence. **Craft one available trinket** and read the bonus it adds.",
        "gameObjective": "With a legendary-animal crafting part already owned in **Red Dead Redemption 2 story mode**, visit a fence. **Craft one available trinket** and read the bonus it adds."
      },
      "de": {
        "name": "Die Trophäe nutzen",
        "objective": "Besuche im **Storymodus von Red Dead Redemption 2** mit einem bereits vorhandenen Teil eines legendären Tiers einen Hehler. **Lass daraus ein verfügbares Amulett herstellen** und lies seinen Bonus.",
        "gameObjective": "Besuche im **Storymodus von Red Dead Redemption 2** mit einem bereits vorhandenen Teil eines legendären Tiers einen Hehler. **Lass daraus ein verfügbares Amulett herstellen** und lies seinen Bonus."
      }
    },
    "experience": {
      "family": "trinket",
      "cardMetadata": { "genreIds": ["adventure", "shooter"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["crafting"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Owned legendary-animal crafting part",
          "de": "Vorhandenes legendäres Tiermaterial",
          "chips": {"en": ["Legendary pelt"], "de": ["Legendäres Fell"]},
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
    "gameGenreIds": ["adventure", "shooter"]
  },
  {
    "id": "red-dead-redemption-rdr2-pearson-decoration",
    "moodIds": ["create", "progress"],
    "type": "creation",
    "tags": ["decorating", "crafting"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "red-dead-redemption",
      "installmentIds": ["rdr-2"]
    },
    "translations": {
      "en": {
        "name": "Something for Camp",
        "objective": "While Pearson is available in **Red Dead Redemption 2 story mode**, choose a camp decoration whose required pelts you already have. **Donate those pelts for crafting and have him make the decoration**.",
        "gameObjective": "While Pearson is available in **Red Dead Redemption 2 story mode**, choose a camp decoration whose required pelts you already have. **Donate those pelts for crafting and have him make the decoration**."
      },
      "de": {
        "name": "Etwas fürs Lager",
        "objective": "Wähle im **Storymodus von Red Dead Redemption 2** bei Pearson eine Lagerdekoration, für die du alle Felle schon hast. **Spende sie zum Herstellen und lass ihn die Dekoration bauen**.",
        "gameObjective": "Wähle im **Storymodus von Red Dead Redemption 2** bei Pearson eine Lagerdekoration, für die du alle Felle schon hast. **Spende sie zum Herstellen und lass ihn die Dekoration bauen**."
      }
    },
    "experience": {
      "family": "camp-decoration",
      "cardMetadata": { "genreIds": ["adventure", "shooter"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["decorating", "crafting"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Pearson available; required pelts owned",
          "de": "Pearson verfügbar; erforderliche Felle",
          "chips": {"en": ["Pearson", "Pelts"], "de": ["Pearson", "Felle"]},
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
    "gameGenreIds": ["adventure", "shooter"]
  },
  {
    "id": "red-dead-redemption-rdr2-camp-request-ready",
    "moodIds": ["progress", "nostalgic"],
    "type": "objective",
    "tags": ["story"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "red-dead-redemption",
      "installmentIds": ["rdr-2"]
    },
    "translations": {
      "en": {
        "name": "A Small Favor",
        "objective": "With an active camp item request in **Red Dead Redemption 2 story mode**, choose one whose item you already carry. **Give it to the requesting companion** while they are available in camp.",
        "gameObjective": "With an active camp item request in **Red Dead Redemption 2 story mode**, choose one whose item you already carry. **Give it to the requesting companion** while they are available in camp."
      },
      "de": {
        "name": "Ein kleiner Gefallen",
        "objective": "Wähle im **Storymodus von Red Dead Redemption 2** eine offene Lagerbitte, deren Gegenstand du schon dabeihast. **Gib ihn der betreffenden Person**, sobald sie im Lager ansprechbar ist.",
        "gameObjective": "Wähle im **Storymodus von Red Dead Redemption 2** eine offene Lagerbitte, deren Gegenstand du schon dabeihast. **Gib ihn der betreffenden Person**, sobald sie im Lager ansprechbar ist."
      }
    },
    "experience": {
      "family": "camp-request",
      "cardMetadata": { "genreIds": ["adventure", "shooter"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Active camp request; item owned",
          "de": "Offene Lagerbitte; Gegenstand vorhanden",
          "chips": {"en": ["Camp request", "Item"], "de": ["Lagerbitte", "Gegenstand"]},
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
    "gameGenreIds": ["adventure", "shooter"]
  },
  {
    "id": "red-dead-redemption-rdr2-satchel-from-pelts",
    "moodIds": ["progress", "focused"],
    "type": "creation",
    "tags": ["crafting"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "red-dead-redemption",
      "installmentIds": ["rdr-2"]
    },
    "translations": {
      "en": {
        "name": "More Room for Arthur",
        "objective": "With Pearson’s leatherworking tools unlocked in **Red Dead Redemption 2 story mode**, choose a satchel whose pelts and other conditions are already met. **Have Pearson craft it and equip it**.",
        "gameObjective": "With Pearson’s leatherworking tools unlocked in **Red Dead Redemption 2 story mode**, choose a satchel whose pelts and other conditions are already met. **Have Pearson craft it and equip it**."
      },
      "de": {
        "name": "Mehr Platz für Arthur",
        "objective": "Wähle im **Storymodus von Red Dead Redemption 2** mit freigeschaltetem Lederwerkzeug bei Pearson eine Tasche, für die alle Felle und Voraussetzungen vorhanden sind. **Lass sie herstellen und rüste sie aus**.",
        "gameObjective": "Wähle im **Storymodus von Red Dead Redemption 2** mit freigeschaltetem Lederwerkzeug bei Pearson eine Tasche, für die alle Felle und Voraussetzungen vorhanden sind. **Lass sie herstellen und rüste sie aus**."
      }
    },
    "experience": {
      "family": "satchel",
      "cardMetadata": { "genreIds": ["adventure", "shooter"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["crafting"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Leatherworking unlocked; pelts and conditions met",
          "de": "Lederwerkzeug frei; Felle und Bedingungen erfüllt",
          "chips": {"en": ["Leatherworking", "Pelts"], "de": ["Lederwerkzeug", "Felle"]},
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
    "gameGenreIds": ["adventure", "shooter"]
  },
  {
    "id": "red-dead-redemption-rdr2-gunsmith-personal",
    "moodIds": ["create"],
    "type": "creation",
    "tags": ["loadout"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "red-dead-redemption",
      "installmentIds": ["rdr-2"]
    },
    "translations": {
      "en": {
        "name": "Your Own Repeater",
        "objective": "Take an owned repeater to a gunsmith in **Red Dead Redemption 2 story mode**. Choose its metal, wood, or engraving, then **leave with the customized weapon equipped**.",
        "gameObjective": "Take an owned repeater to a gunsmith in **Red Dead Redemption 2 story mode**. Choose its metal, wood, or engraving, then **leave with the customized weapon equipped**."
      },
      "de": {
        "name": "Dein Repetiergewehr",
        "objective": "Bring im **Storymodus von Red Dead Redemption 2** dein Repetiergewehr zum Büchsenmacher. Wähle Metall, Holz oder Gravur und **geh mit der angepassten Waffe ausgerüstet wieder raus**.",
        "gameObjective": "Bring im **Storymodus von Red Dead Redemption 2** dein Repetiergewehr zum Büchsenmacher. Wähle Metall, Holz oder Gravur und **geh mit der angepassten Waffe ausgerüstet wieder raus**."
      }
    },
    "experience": {
      "family": "gun-customization",
      "cardMetadata": { "genreIds": ["adventure", "shooter"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["loadout"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Owned repeater; customization funds",
          "de": "Eigenes Repetiergewehr; Geld für Anpassung",
          "chips": {"en": ["Repeater"], "de": ["Repetiergewehr"]},
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
    "gameGenreIds": ["adventure", "shooter"]
  },
  {
    "id": "red-dead-redemption-rdr2-canoe-bank",
    "moodIds": ["explore", "relax"],
    "type": "inspiration",
    "tags": ["traversal"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "red-dead-redemption",
      "installmentIds": ["rdr-2"]
    },
    "translations": {
      "en": {
        "name": "Down the Dakota",
        "objective": "As Arthur in Red Dead Redemption 2 story mode, take a canoe already found on a safe riverbank. **Paddle along the Dakota** and look at the cliffs from the water rather than the horse trail.",
        "gameObjective": "As Arthur in Red Dead Redemption 2 story mode, take a canoe already found on a safe riverbank. **Paddle along the Dakota** and look at the cliffs from the water rather than the horse trail."
      },
      "de": {
        "name": "Den Dakota hinunter",
        "objective": "Nimm als Arthur im Storymodus von Red Dead Redemption 2 ein Kanu, das du an einem sicheren Ufer schon gefunden hast. **Paddel den Dakota entlang** und schau von unten auf die Felsen.",
        "gameObjective": "Nimm als Arthur im Storymodus von Red Dead Redemption 2 ein Kanu, das du an einem sicheren Ufer schon gefunden hast. **Paddel den Dakota entlang** und schau von unten auf die Felsen."
      }
    },
    "experience": {
      "family": "canoe",
      "cardMetadata": { "genreIds": ["adventure", "shooter"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["traversal"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Arthur; accessible canoe",
          "de": "Arthur; erreichbares Kanu",
          "chips": {"en": ["Arthur", "Canoe"], "de": ["Arthur", "Kanu"]},
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
    "gameGenreIds": ["adventure", "shooter"]
  },
  {
    "id": "red-dead-redemption-rdr2-mint-meal",
    "moodIds": ["progress", "curious"],
    "type": "objective",
    "tags": ["cooking"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "red-dead-redemption",
      "installmentIds": ["rdr-2"]
    },
    "translations": {
      "en": {
        "name": "Season the Supper",
        "objective": "With mint, big game meat, and the grill available at your campfire in **Red Dead Redemption 2 story mode**, **cook and eat one mint-seasoned portion**, then check the Health core.",
        "gameObjective": "With mint, big game meat, and the grill available at your campfire in **Red Dead Redemption 2 story mode**, **cook and eat one mint-seasoned portion**, then check the Health core."
      },
      "de": {
        "name": "Gewürz fürs Abendessen",
        "objective": "Koch im **Storymodus von Red Dead Redemption 2** mit Minze, Großwildfleisch und Grill am Lagerfeuer **eine Portion mit Minze und iss sie**. Schau danach auf den Gesundheitskern.",
        "gameObjective": "Koch im **Storymodus von Red Dead Redemption 2** mit Minze, Großwildfleisch und Grill am Lagerfeuer **eine Portion mit Minze und iss sie**. Schau danach auf den Gesundheitskern."
      }
    },
    "experience": {
      "family": "meal",
      "cardMetadata": { "genreIds": ["adventure", "shooter"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["cooking"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Mint; big game meat; campfire grill",
          "de": "Minze; Großwildfleisch; Lagerfeuergrill",
          "chips": {"en": ["Mint", "Big game meat"], "de": ["Minze", "Großwildfleisch"]},
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
    "gameGenreIds": ["adventure", "shooter"]
  },
  {
    "id": "red-dead-redemption-rdr2-horse-outfit-weather",
    "moodIds": ["create", "focused"],
    "type": "creation",
    "tags": ["outfit"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "red-dead-redemption",
      "installmentIds": ["rdr-2"]
    },
    "translations": {
      "en": {
        "name": "Pack for the Snow",
        "objective": "At a wardrobe in **Red Dead Redemption 2 story mode**, assemble a cold-weather outfit from clothes you own. **Save it on your horse and change into it beside the horse**.",
        "gameObjective": "At a wardrobe in **Red Dead Redemption 2 story mode**, assemble a cold-weather outfit from clothes you own. **Save it on your horse and change into it beside the horse**."
      },
      "de": {
        "name": "Für den Schnee packen",
        "objective": "Stell im **Storymodus von Red Dead Redemption 2** am Kleiderschrank ein Outfit für kaltes Wetter aus eigenen Sachen zusammen. **Speichere es auf deinem Pferd und zieh es neben dem Pferd an**.",
        "gameObjective": "Stell im **Storymodus von Red Dead Redemption 2** am Kleiderschrank ein Outfit für kaltes Wetter aus eigenen Sachen zusammen. **Speichere es auf deinem Pferd und zieh es neben dem Pferd an**."
      }
    },
    "experience": {
      "family": "horse-outfits",
      "cardMetadata": { "genreIds": ["adventure", "shooter"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["outfit"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Wardrobe; owned winter clothing; horse",
          "de": "Kleiderschrank; Winterkleidung; Pferd",
          "chips": {"en": ["Wardrobe", "Winter clothing"], "de": ["Kleiderschrank", "Winterkleidung"]},
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
    "gameGenreIds": ["adventure", "shooter"]
  },
  {
    "id": "red-dead-redemption-rdr2-beechers-milk",
    "moodIds": ["relax", "progress"],
    "type": "objective",
    "tags": ["animals"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "red-dead-redemption",
      "installmentIds": ["rdr-2"]
    },
    "translations": {
      "en": {
        "name": "Morning Milk",
        "objective": "After ranch chores unlock at Beecher’s Hope in the epilogue of **Red Dead Redemption 2 story mode**, **finish the cow-milking chore**. Leave the rest of the ranch for another day.",
        "gameObjective": "After ranch chores unlock at Beecher’s Hope in the epilogue of **Red Dead Redemption 2 story mode**, **finish the cow-milking chore**. Leave the rest of the ranch for another day."
      },
      "de": {
        "name": "Milch am Morgen",
        "objective": "Erledige im **Epilog von Red Dead Redemption 2 im Storymodus** bei freigeschalteten Rancharbeiten in Beecher’s Hope **das Melken der Kuh**. Der Rest der Ranch kann warten.",
        "gameObjective": "Erledige im **Epilog von Red Dead Redemption 2 im Storymodus** bei freigeschalteten Rancharbeiten in Beecher’s Hope **das Melken der Kuh**. Der Rest der Ranch kann warten."
      }
    },
    "experience": {
      "family": "milk",
      "cardMetadata": { "genreIds": ["adventure", "shooter"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["animals"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Epilogue; Beecher’s Hope chores unlocked",
          "de": "Epilog; Rancharbeiten freigeschaltet",
          "chips": {"en": ["Epilogue", "Beecher’s Hope chores"], "de": ["Epilog", "Rancharbeiten"]},
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
    "gameGenreIds": ["adventure", "shooter"]
  },
  {
    "id": "red-dead-redemption-rdr2-camp-stories",
    "moodIds": ["low-energy", "nostalgic"],
    "type": "inspiration",
    "tags": ["dialogue"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "red-dead-redemption",
      "installmentIds": ["rdr-2"]
    },
    "translations": {
      "en": {
        "name": "Listen by the Fire",
        "objective": "During a chapter with the gang camp in Red Dead Redemption 2 story mode, return around the evening meal. **Sit near the fire and listen** to whoever is talking or singing.",
        "gameObjective": "During a chapter with the gang camp in Red Dead Redemption 2 story mode, return around the evening meal. **Sit near the fire and listen** to whoever is talking or singing."
      },
      "de": {
        "name": "Am Feuer zuhören",
        "objective": "Kehre im Storymodus von Red Dead Redemption 2 in einem Kapitel mit Bandenlager zur Abendzeit zurück. **Setz dich ans Feuer und hör zu**, wenn jemand erzählt oder singt.",
        "gameObjective": "Kehre im Storymodus von Red Dead Redemption 2 in einem Kapitel mit Bandenlager zur Abendzeit zurück. **Setz dich ans Feuer und hör zu**, wenn jemand erzählt oder singt."
      }
    },
    "experience": {
      "family": "camp-story",
      "cardMetadata": { "genreIds": ["adventure", "shooter"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["dialogue"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Gang camp still available",
          "de": "Bandenlager noch verfügbar",
          "chips": {"en": ["Gang camp"], "de": ["Bandenlager"]},
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
    "gameGenreIds": ["adventure", "shooter"]
  },
  {
    "id": "red-dead-redemption-rdr2-railway-ticket",
    "moodIds": ["relax", "explore"],
    "type": "inspiration",
    "tags": ["free-roam"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "red-dead-redemption",
      "installmentIds": ["rdr-2"]
    },
    "translations": {
      "en": {
        "name": "The Country by Rail",
        "objective": "Board a passenger train at an accessible station in Red Dead Redemption 2 story mode and stay aboard as it leaves town. **Watch the scenery change** from town streets to open country.",
        "gameObjective": "Board a passenger train at an accessible station in Red Dead Redemption 2 story mode and stay aboard as it leaves town. **Watch the scenery change** from town streets to open country."
      },
      "de": {
        "name": "Mit dem Zug durchs Land",
        "objective": "Steig im Storymodus von Red Dead Redemption 2 an einem erreichbaren Bahnhof in einen Personenzug und bleib bei der Abfahrt an Bord. **Schau zu, wie Straßen in offene Landschaft übergehen**.",
        "gameObjective": "Steig im Storymodus von Red Dead Redemption 2 an einem erreichbaren Bahnhof in einen Personenzug und bleib bei der Abfahrt an Bord. **Schau zu, wie Straßen in offene Landschaft übergehen**."
      }
    },
    "experience": {
      "family": "train-journey",
      "cardMetadata": { "genreIds": ["adventure", "shooter"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["free-roam"],
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
    "gameGenreIds": ["adventure", "shooter"]
  },
  {
    "id": "red-dead-redemption-rdr2-eagleeye-herbs",
    "moodIds": ["curious", "explore"],
    "type": "experiment",
    "tags": ["collectibles"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "red-dead-redemption",
      "installmentIds": ["rdr-2"]
    },
    "translations": {
      "en": {
        "name": "Plants in the Glow",
        "objective": "Use Eagle Eye in a meadow in **Red Dead Redemption 2 story mode** to find an unfamiliar herb. **Pick it and check its Compendium entry for uses**.",
        "gameObjective": "Use Eagle Eye in a meadow in **Red Dead Redemption 2 story mode** to find an unfamiliar herb. **Pick it and check its Compendium entry for uses**."
      },
      "de": {
        "name": "Pflanzen im Leuchten",
        "objective": "Such im **Storymodus von Red Dead Redemption 2** auf einer Wiese mit Adlerauge ein unbekanntes Kraut. **Pflück es und sieh im Kompendium nach, wofür du es verwenden kannst**.",
        "gameObjective": "Such im **Storymodus von Red Dead Redemption 2** auf einer Wiese mit Adlerauge ein unbekanntes Kraut. **Pflück es und sieh im Kompendium nach, wofür du es verwenden kannst**."
      }
    },
    "experience": {
      "family": "herb-search",
      "cardMetadata": { "genreIds": ["adventure", "shooter"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["collectibles"],
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
    "gameGenreIds": ["adventure", "shooter"]
  },
  {
    "id": "red-dead-redemption-rdr2-dreamcatcher-tree",
    "moodIds": ["explore", "focused"],
    "type": "objective",
    "tags": ["collectibles"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "red-dead-redemption",
      "installmentIds": ["rdr-2"]
    },
    "translations": {
      "en": {
        "name": "Above the Branches",
        "objective": "With an uncollected dreamcatcher location accessible in **Red Dead Redemption 2 story mode**, inspect the nearby trees instead of the ground. **Find and inspect one hanging dreamcatcher**.",
        "gameObjective": "With an uncollected dreamcatcher location accessible in **Red Dead Redemption 2 story mode**, inspect the nearby trees instead of the ground. **Find and inspect one hanging dreamcatcher**."
      },
      "de": {
        "name": "Zum Baum hochschauen",
        "objective": "Such im **Storymodus von Red Dead Redemption 2** an einem erreichbaren, noch offenen Traumfängerort in den Bäumen statt am Boden. **Finde und untersuche einen hängenden Traumfänger**.",
        "gameObjective": "Such im **Storymodus von Red Dead Redemption 2** an einem erreichbaren, noch offenen Traumfängerort in den Bäumen statt am Boden. **Finde und untersuche einen hängenden Traumfänger**."
      }
    },
    "experience": {
      "family": "dreamcatcher",
      "cardMetadata": { "genreIds": ["adventure", "shooter"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["collectibles"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Reachable uncollected dreamcatcher",
          "de": "Erreichbarer offener Traumfänger",
          "chips": {"en": ["Dreamcatcher"], "de": ["Traumfänger"]},
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
    "gameGenreIds": ["adventure", "shooter"]
  },
  {
    "id": "red-dead-redemption-rdr2-deadeye-two-guns",
    "moodIds": ["focused", "challenge"],
    "type": "challenge",
    "tags": ["three-attempts"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "red-dead-redemption",
      "installmentIds": ["rdr-2"]
    },
    "translations": {
      "en": {
        "name": "Hands Off the Guns",
        "objective": "Once manual Dead Eye tagging is unlocked in **Red Dead Redemption 2 story mode**, approach a small armed enemy group. **Disarm two opponents in one Dead Eye activation**. Stop after success or three encounters.",
        "gameObjective": "Once manual Dead Eye tagging is unlocked in **Red Dead Redemption 2 story mode**, approach a small armed enemy group. **Disarm two opponents in one Dead Eye activation**. Stop after success or three encounters."
      },
      "de": {
        "name": "Weg mit den Waffen",
        "objective": "Versuch im **Storymodus von Red Dead Redemption 2** mit freigeschalteter manueller Dead-Eye-Markierung gegen eine kleine bewaffnete Gegnergruppe, **zwei Gegner in einer Aktivierung zu entwaffnen**. Hör nach dem Erfolg oder drei Begegnungen auf.",
        "gameObjective": "Versuch im **Storymodus von Red Dead Redemption 2** mit freigeschalteter manueller Dead-Eye-Markierung gegen eine kleine bewaffnete Gegnergruppe, **zwei Gegner in einer Aktivierung zu entwaffnen**. Hör nach dem Erfolg oder drei Begegnungen auf."
      }
    },
    "experience": {
      "family": "dead-eye",
      "cardMetadata": { "genreIds": ["adventure", "shooter"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Manual Dead Eye tagging unlocked",
          "de": "Manuelle Dead-Eye-Markierung frei",
          "chips": {"en": ["Dead Eye tagging"], "de": ["Dead-Eye-Markierung"]},
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
    "gameGenreIds": ["adventure", "shooter"]
  },
  {
    "id": "red-dead-redemption-rdr2-arthur-first-camp",
    "moodIds": ["nostalgic", "explore"],
    "type": "inspiration",
    "tags": ["current-save"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "red-dead-redemption",
      "installmentIds": ["rdr-2"]
    },
    "translations": {
      "en": {
        "name": "The Old Overlook",
        "objective": "In a save where Horseshoe Overlook is no longer home in Red Dead Redemption 2 story mode, ride back to its empty camp space. **Walk the places where the tents used to stand**.",
        "gameObjective": "In a save where Horseshoe Overlook is no longer home in Red Dead Redemption 2 story mode, ride back to its empty camp space. **Walk the places where the tents used to stand**."
      },
      "de": {
        "name": "Der alte Aussichtspunkt",
        "objective": "Reite im Storymodus von Red Dead Redemption 2 zu Horseshoe Overlook zurück, wenn das Lager inzwischen weitergezogen ist. **Geh durch die Stellen, an denen früher die Zelte standen**.",
        "gameObjective": "Reite im Storymodus von Red Dead Redemption 2 zu Horseshoe Overlook zurück, wenn das Lager inzwischen weitergezogen ist. **Geh durch die Stellen, an denen früher die Zelte standen**."
      }
    },
    "experience": {
      "family": "familiar-camp",
      "cardMetadata": { "genreIds": ["adventure", "shooter"], "playStyleIds": [] },
      "finish": "open",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "en": "Camp moved from Horseshoe Overlook",
          "de": "Lager von Horseshoe Overlook weitergezogen",
          "chips": {"en": ["Later camp"], "de": ["Späteres Lager"]},
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
    "gameGenreIds": ["adventure", "shooter"]
  },
  {
    "id": "red-dead-redemption-rdr1-dead-eye-disarm",
    "moodIds": ["challenge"],
    "type": "challenge",
    "tags": ["three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "red-dead-redemption",
      "installmentIds": ["rdr-1"]
    },
    "translations": {
      "en": {
        "name": "Shoot the Gun",
        "objective": "Use Dead Eye in a duel or armed encounter and **disarm someone with a shot to their weapon**. Stop after three encounters.",
        "gameObjective": "Use Dead Eye in a duel or armed encounter and **disarm someone with a shot to their weapon**. Stop after three encounters."
      },
      "de": {
        "name": "Auf die Waffe zielen",
        "objective": "Nutze Dead Eye im Duell oder Kampf und **entwaffne jemanden mit einem Schuss auf die Waffe**. Höre nach drei Begegnungen auf.",
        "gameObjective": "Nutze Dead Eye im Duell oder Kampf und **entwaffne jemanden mit einem Schuss auf die Waffe**. Höre nach drei Begegnungen auf."
      }
    },
    "experience": {
      "family": "disarm",
      "cardMetadata": { "genreIds": ["adventure", "narrative"], "playStyleIds": [] },
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
    "gameGenreIds": ["adventure", "narrative"]
  },
  {
    "id": "red-dead-redemption-rdr1-treasure-sketch",
    "moodIds": ["explore"],
    "type": "objective",
    "tags": ["exploration"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "red-dead-redemption",
      "installmentIds": ["rdr-1"]
    },
    "translations": {
      "en": {
        "name": "Read the Treasure Sketch",
        "objective": "If you own a treasure map, **find its landmark and dig up the treasure without an online guide**.",
        "gameObjective": "If you own a treasure map, **find its landmark and dig up the treasure without an online guide**."
      },
      "de": {
        "name": "Die Schatzskizze lesen",
        "objective": "Wenn du eine Schatzkarte hast, **finde die Landmarke und grabe den Schatz ohne Onlinehilfe aus**.",
        "gameObjective": "Wenn du eine Schatzkarte hast, **finde die Landmarke und grabe den Schatz ohne Onlinehilfe aus**."
      }
    },
    "experience": {
      "family": "treasure-clue",
      "cardMetadata": { "genreIds": ["adventure", "narrative"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["exploration"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Owned unsolved treasure map",
          "de": "Eigene ungelöste Schatzkarte",
          "chips": {"en": ["Treasure map"], "de": ["Schatzkarte"]},
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
    "gameGenreIds": ["adventure", "narrative"]
  },
  {
    "id": "red-dead-redemption-rdr1-stranger-thread",
    "moodIds": ["focused"],
    "type": "objective",
    "tags": ["story"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "red-dead-redemption",
      "installmentIds": ["rdr-1"]
    },
    "translations": {
      "en": {
        "name": "A Stranger's Next Chapter",
        "objective": "Choose an unfinished Stranger mission and **follow that same person's next available chapter**.",
        "gameObjective": "Choose an unfinished Stranger mission and **follow that same person's next available chapter**."
      },
      "de": {
        "name": "Ein Kapitel mit Fremden",
        "objective": "Such eine offene Fremdenmission und **spiele das nächste verfügbare Kapitel derselben Person**.",
        "gameObjective": "Such eine offene Fremdenmission und **spiele das nächste verfügbare Kapitel derselben Person**."
      }
    },
    "experience": {
      "family": "stranger-quest",
      "cardMetadata": { "genreIds": ["adventure", "narrative"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Accessible next Stranger chapter",
          "de": "Erreichbares nächstes Fremden-Kapitel",
          "chips": {"en": ["Stranger chapter"], "de": ["Fremden-Kapitel"]},
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
    "gameGenreIds": ["adventure", "narrative"]
  },
  {
    "id": "red-dead-redemption-rdr1-poker-bluff",
    "moodIds": ["curious"],
    "type": "experiment",
    "tags": ["cards"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "red-dead-redemption",
      "installmentIds": ["rdr-1"]
    },
    "translations": {
      "en": {
        "name": "A Deliberate Bluff",
        "objective": "At a poker table, **raise once with a weak hand and play that hand to its end**. Notice whether the table calls you.",
        "gameObjective": "At a poker table, **raise once with a weak hand and play that hand to its end**. Notice whether the table calls you."
      },
      "de": {
        "name": "Ein bewusster Bluff",
        "objective": "Erhöhe am Pokertisch **einmal mit einer schwachen Hand und spiel die Hand zu Ende**. Schau, ob jemand mitgeht.",
        "gameObjective": "Erhöhe am Pokertisch **einmal mit einer schwachen Hand und spiel die Hand zu Ende**. Schau, ob jemand mitgeht."
      }
    },
    "experience": {
      "family": "poker",
      "cardMetadata": { "genreIds": ["adventure", "narrative"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["cards"],
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
    "gameGenreIds": ["adventure", "narrative"]
  },
  {
    "id": "red-dead-redemption-rdr1-hideout-horse",
    "moodIds": ["challenge"],
    "type": "challenge",
    "tags": ["one-life"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "red-dead-redemption",
      "installmentIds": ["rdr-1"]
    },
    "translations": {
      "en": {
        "name": "Keep the Horse Safe",
        "objective": "Clear an available gang hideout while **keeping your horse out of gunfire and returning to the same horse afterward**. One attempt.",
        "gameObjective": "Clear an available gang hideout while **keeping your horse out of gunfire and returning to the same horse afterward**. One attempt."
      },
      "de": {
        "name": "Das Pferd bleibt heil",
        "objective": "Räume ein verfügbares Bandenversteck und **halte dein Pferd aus dem Schussfeld; kehre danach zu ihm zurück**. Ein Versuch.",
        "gameObjective": "Räume ein verfügbares Bandenversteck und **halte dein Pferd aus dem Schussfeld; kehre danach zu ihm zurück**. Ein Versuch."
      }
    },
    "experience": {
      "family": "gang-hideout",
      "cardMetadata": { "genreIds": ["adventure", "narrative"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["one-life"],
      "prerequisites": [
        {
          "en": "Available hideout; horse",
          "de": "Verfügbares Versteck; Pferd",
          "chips": {"en": ["Hideout", "Horse"], "de": ["Versteck", "Pferd"]},
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
    "gameGenreIds": ["adventure", "narrative"]
  },
  {
    "id": "red-dead-redemption-rdr1-honor-choice",
    "moodIds": ["curious"],
    "type": "experiment",
    "tags": ["story"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "red-dead-redemption",
      "installmentIds": ["rdr-1"]
    },
    "translations": {
      "en": {
        "name": "A Different Reputation",
        "objective": "At the next optional encounter that offers mercy or force, **choose the option unlike your usual one and watch its honor consequence**.",
        "gameObjective": "At the next optional encounter that offers mercy or force, **choose the option unlike your usual one and watch its honor consequence**."
      },
      "de": {
        "name": "Ein anderer Ruf",
        "objective": "Wähle bei der nächsten freiwilligen Begegnung **anders als sonst zwischen Gnade und Gewalt** und beobachte die Folge für deine Ehre.",
        "gameObjective": "Wähle bei der nächsten freiwilligen Begegnung **anders als sonst zwischen Gnade und Gewalt** und beobachte die Folge für deine Ehre."
      }
    },
    "experience": {
      "family": "honor-choice",
      "cardMetadata": { "genreIds": ["adventure", "narrative"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Erreichbare freiwillige Begegnung mit einer Entscheidung zwischen Gnade und Gewalt",
          "en": "Reachable optional encounter with a choice between mercy and force",
          "chips": {"en": ["Mercy or force"], "de": ["Gnade oder Gewalt"]},
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
    "gameGenreIds": ["adventure", "narrative"]
  },
  {
    "id": "red-dead-redemption-rdr1-hunting-journal",
    "moodIds": ["progress"],
    "type": "objective",
    "tags": ["hunting"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "red-dead-redemption",
      "installmentIds": ["rdr-1"]
    },
    "translations": {
      "en": {
        "name": "Advance One Challenge",
        "objective": "Open the hunting challenge list and **complete exactly one outstanding stage using its stated animal or method**.",
        "gameObjective": "Open the hunting challenge list and **complete exactly one outstanding stage using its stated animal or method**."
      },
      "de": {
        "name": "Eine Jagdstufe weiter",
        "objective": "Öffne die Jagdherausforderungen und **erledige eine offene Stufe mit dem dort genannten Tier oder Vorgehen**.",
        "gameObjective": "Öffne die Jagdherausforderungen und **erledige eine offene Stufe mit dem dort genannten Tier oder Vorgehen**."
      }
    },
    "experience": {
      "family": "hunting-journal",
      "cardMetadata": { "genreIds": ["adventure", "narrative"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["hunting"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Reachable unfinished hunting stage",
          "de": "Erreichbare offene Jagdstufe",
          "chips": {"en": ["Hunting challenge"], "de": ["Jagdaufgabe"]},
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
    "gameGenreIds": ["adventure", "narrative"]
  },
  {
    "id": "red-dead-redemption-rdr2-arthur-journal",
    "moodIds": ["curious"],
    "type": "objective",
    "tags": ["story"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "red-dead-redemption",
      "installmentIds": ["rdr-2"]
    },
    "translations": {
      "en": {
        "name": "Arthur's Sketchbook",
        "objective": "As Arthur in **Red Dead Redemption 2**, visit a Point of Interest you have not inspected. Look at what makes the place unusual and **record it with a new journal sketch**.",
        "gameObjective": "As Arthur in **Red Dead Redemption 2**, visit a Point of Interest you have not inspected. Look at what makes the place unusual and **record it with a new journal sketch**."
      },
      "de": {
        "name": "Arthurs Skizzenbuch",
        "objective": "Besuche als Arthur in **Red Dead Redemption 2** einen noch nicht untersuchten Point of Interest. Schau dir die Besonderheit des Orts an und **halte sie mit einer neuen Skizze im Tagebuch fest**.",
        "gameObjective": "Besuche als Arthur in **Red Dead Redemption 2** einen noch nicht untersuchten Point of Interest. Schau dir die Besonderheit des Orts an und **halte sie mit einer neuen Skizze im Tagebuch fest**."
      }
    },
    "experience": {
      "family": "familiar-journal",
      "cardMetadata": { "genreIds": ["adventure", "narrative"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Arthur; unrecorded inspectable Point of Interest",
          "de": "Arthur; nicht erfasster untersuchbarer Ort",
          "chips": {"en": ["Arthur", "Point of Interest"], "de": ["Arthur", "Besonderer Ort"]},
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
    "gameGenreIds": ["adventure", "narrative"]
  },
  {
    "id": "red-dead-redemption-rdr2-camp-chore",
    "moodIds": ["relax"],
    "type": "objective",
    "tags": ["story"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "red-dead-redemption",
      "installmentIds": ["rdr-2"]
    },
    "translations": {
      "en": {
        "name": "A Morning for Camp",
        "objective": "In **Red Dead Redemption 2 story mode**, **finish one available chore at the gang camp**. Give Arthur something ordinary to do between adventures.",
        "gameObjective": "In **Red Dead Redemption 2 story mode**, **finish one available chore at the gang camp**. Give Arthur something ordinary to do between adventures."
      },
      "de": {
        "name": "Ein Morgen im Lager",
        "objective": "Erledige im **Storymodus von Red Dead Redemption 2** **eine verfügbare Arbeit im Bandenlager**. Gönn Arthur zwischen den Abenteuern eine alltägliche Aufgabe.",
        "gameObjective": "Erledige im **Storymodus von Red Dead Redemption 2** **eine verfügbare Arbeit im Bandenlager**. Gönn Arthur zwischen den Abenteuern eine alltägliche Aufgabe."
      }
    },
    "experience": {
      "family": "camp-chore",
      "cardMetadata": { "genreIds": ["adventure", "narrative"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Gang camp; available chore",
          "de": "Bandenlager; verfügbare Arbeit",
          "chips": {"en": ["Gang camp", "Chore"], "de": ["Bandenlager", "Arbeit"]},
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
    "gameGenreIds": ["adventure", "narrative"]
  },
  {
    "id": "red-dead-redemption-rdr2-scent-track",
    "moodIds": ["focused"],
    "type": "objective",
    "tags": ["hunting"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "red-dead-redemption",
      "installmentIds": ["rdr-2"]
    },
    "translations": {
      "en": {
        "name": "Read the Trail",
        "objective": "Use Eagle Eye to follow an animal's trail and **study it before deciding whether to hunt or let it go**.",
        "gameObjective": "Use Eagle Eye to follow an animal's trail and **study it before deciding whether to hunt or let it go**."
      },
      "de": {
        "name": "Die Spur lesen",
        "objective": "Verfolge mit Adlerauge eine Tierspur und **untersuche das Tier, bevor du entscheidest, ob du jagst oder es laufen lässt**.",
        "gameObjective": "Verfolge mit Adlerauge eine Tierspur und **untersuche das Tier, bevor du entscheidest, ob du jagst oder es laufen lässt**."
      }
    },
    "experience": {
      "family": "animal-tracking",
      "cardMetadata": { "genreIds": ["adventure", "narrative"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["hunting"],
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
    "gameGenreIds": ["adventure", "narrative"]
  },
  {
    "id": "red-dead-redemption-rdr2-mask-escape",
    "moodIds": ["challenge"],
    "type": "challenge",
    "tags": ["three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "red-dead-redemption",
      "installmentIds": ["rdr-2"]
    },
    "translations": {
      "en": {
        "name": "Masked Getaway",
        "objective": "With a mask on, rob one coach and **lose the pursuit without shooting at a lawman**. Stop after three attempts.",
        "gameObjective": "With a mask on, rob one coach and **lose the pursuit without shooting at a lawman**. Stop after three attempts."
      },
      "de": {
        "name": "Flucht mit Maske",
        "objective": "Überfalle maskiert eine Kutsche und **entkomme, ohne auf einen Gesetzeshüter zu schießen**. Nach drei Versuchen ist Schluss.",
        "gameObjective": "Überfalle maskiert eine Kutsche und **entkomme, ohne auf einen Gesetzeshüter zu schießen**. Nach drei Versuchen ist Schluss."
      }
    },
    "experience": {
      "family": "mask-escape",
      "cardMetadata": { "genreIds": ["adventure", "narrative"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Owned mask; reachable coach",
          "de": "Eigene Maske; erreichbare Kutsche",
          "chips": {"en": ["Mask", "Coach"], "de": ["Maske", "Kutsche"]},
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
    "gameGenreIds": ["adventure", "narrative"]
  },
  {
    "id": "red-dead-redemption-rdr2-horse-bond",
    "moodIds": ["progress"],
    "type": "objective",
    "tags": ["animals"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "red-dead-redemption",
      "installmentIds": ["rdr-2"]
    },
    "translations": {
      "en": {
        "name": "Earn Your Horse's Trust",
        "objective": "With a horse close to its next bonding level, **raise that level through riding and care**.",
        "gameObjective": "With a horse close to its next bonding level, **raise that level through riding and care**."
      },
      "de": {
        "name": "Vertrauen fürs Pferd",
        "objective": "**Erhöhe durch Reiten und Pflege die Bindung zu einem Pferd**, das kurz vor der nächsten Bindungsstufe steht.",
        "gameObjective": "**Erhöhe durch Reiten und Pflege die Bindung zu einem Pferd**, das kurz vor der nächsten Bindungsstufe steht."
      }
    },
    "experience": {
      "family": "horse-bond",
      "cardMetadata": { "genreIds": ["adventure", "narrative"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["animals"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Horse close to next bonding level",
          "de": "Pferd kurz vor der nächsten Bindungsstufe",
          "chips": {"en": ["Horse bonding"], "de": ["Pferdebindung"]},
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
    "gameGenreIds": ["adventure", "narrative"]
  },
  {
    "id": "red-dead-redemption-rdr2-quiet-horse-ride",
    "moodIds": ["relax", "low-energy"],
    "type": "inspiration",
    "tags": ["animals", "free-roam"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "red-dead-redemption",
      "installmentIds": ["rdr-2"]
    },
    "translations": {
      "en": {
        "name": "Get to Know Your Horse",
        "objective": "**Take your new horse on a quiet ride** and get used to each other along the way.",
        "gameObjective": "**Take your new horse on a quiet ride** and get used to each other along the way."
      },
      "de": {
        "name": "Einander kennenlernen",
        "objective": "**Mach mit deinem neuen Pferd einen ruhigen Ausritt** und lernt euch unterwegs kennen.",
        "gameObjective": "**Mach mit deinem neuen Pferd einen ruhigen Ausritt** und lernt euch unterwegs kennen."
      }
    },
    "experience": {
      "family": "horse-ride",
      "cardMetadata": { "genreIds": ["adventure"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["animals", "free-roam"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Story-Spielstand mit einem neu übernommenen Pferd",
          "en": "Story save with a newly acquired horse",
          "chips": {"en": ["New horse"], "de": ["Neues Pferd"]},
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
    "gameGenreIds": ["adventure"]
  },
  {
    "id": "red-dead-redemption-rdr2-legendary-trapper",
    "moodIds": ["explore", "focused", "progress"],
    "type": "objective",
    "tags": ["hunting", "trading"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "universal": false,
    "curated": {
      "gameId": "red-dead-redemption",
      "installmentIds": ["rdr-2"]
    },
    "translations": {
      "de": {
        "name": "Die legendäre Fährte",
        "objective": "Geh in **Red Dead Redemption 2 im Storymodus** in das Gebiet eines noch nicht gejagten legendären Tiers. Lies seine Spurhinweise, folge der Fährte und jage es. **Bring das Fell zum Trapper**, damit aus der Jagd etwas für deine Ausrüstung wird.",
        "gameObjective": "Geh in **Red Dead Redemption 2 im Storymodus** in das Gebiet eines noch nicht gejagten legendären Tiers. Lies seine Spurhinweise, folge der Fährte und jage es. **Bring das Fell zum Trapper**, damit aus der Jagd etwas für deine Ausrüstung wird."
      },
      "en": {
        "name": "The Legendary Trail",
        "objective": "In **Red Dead Redemption 2 story mode**, enter the territory of a legendary animal you have not hunted. Read its clues, follow the trail and hunt it. **Take the pelt to a trapper** to turn the hunt into equipment materials.",
        "gameObjective": "In **Red Dead Redemption 2 story mode**, enter the territory of a legendary animal you have not hunted. Read its clues, follow the trail and hunt it. **Take the pelt to a trapper** to turn the hunt into equipment materials."
      }
    },
    "experience": {
      "family": "legendary-hunt-and-trade",
      "cardMetadata": { "genreIds": ["adventure", "narrative"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["hunting", "trading"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Erreichbares Gebiet eines noch nicht gejagten legendären Tiers; Jagdausrüstung und Trapper",
          "en": "Reachable territory of an unhunted legendary animal; hunting gear and a trapper",
          "chips": {"en": ["Legendary animal", "Trapper"], "de": ["Legendäres Tier", "Trapper"]},
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
    "gameGenreIds": ["adventure", "narrative"],
    "rarity": "special"
  }
]);
