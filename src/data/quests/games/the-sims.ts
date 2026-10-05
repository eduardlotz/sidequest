import { defineQuests } from "../defineQuests";

export const GamesTheSimsQuests = defineQuests([
  {
    "id": "the-sims-sims-3-one-promised-wish",
    "moodIds": ["progress", "focused"],
    "type": "objective",
    "tags": ["current-save"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "the-sims",
      "installmentIds": ["sims-3"]
    },
    "translations": {
      "en": {
        "name": "A Promised Wish",
        "objective": "In **The Sims 3**, pick one everyday wish your active Sim can fulfill with people or objects already nearby. Promise that wish and **play until it is fulfilled**. Leave the lifetime wish for another day.",
        "gameObjective": "In **The Sims 3**, pick one everyday wish your active Sim can fulfill with people or objects already nearby. Promise that wish and **play until it is fulfilled**. Leave the lifetime wish for another day."
      },
      "de": {
        "name": "Ein versprochener Wunsch",
        "objective": "Wähle in **Die Sims 3** einen Alltagswunsch deines aktiven Sims, den du mit Leuten oder Dingen in der Nähe erfüllen kannst. Merke ihn vor und **spiele, bis der Wunsch erfüllt ist**. Der Lebenswunsch kann warten.",
        "gameObjective": "Wähle in **Die Sims 3** einen Alltagswunsch deines aktiven Sims, den du mit Leuten oder Dingen in der Nähe erfüllen kannst. Merke ihn vor und **spiele, bis der Wunsch erfüllt ist**. Der Lebenswunsch kann warten."
      }
    },
    "experience": {
      "family": "wish",
      "cardMetadata": { "genreIds": ["simulation"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "en": "Doable nearby everyday wish",
          "de": "Machbarer Alltagswunsch in der Nähe",
          "chips": {"en": ["Everyday wish"], "de": ["Alltagswunsch"]},
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
    "gameGenreIds": ["simulation"]
  },
  {
    "id": "the-sims-sims-3-town-on-foot",
    "moodIds": ["explore", "curious"],
    "type": "objective",
    "tags": ["exploration", "current-save"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "the-sims",
      "installmentIds": ["sims-3"]
    },
    "translations": {
      "en": {
        "name": "Across Town",
        "objective": "In **The Sims 3**, choose a nearby public lot with an object your Sim can use. Follow them through the open town and **have them use that object at the lot**.",
        "gameObjective": "In **The Sims 3**, choose a nearby public lot with an object your Sim can use. Follow them through the open town and **have them use that object at the lot**."
      },
      "de": {
        "name": "Quer durch die Stadt",
        "objective": "Wähle in **Die Sims 3** ein nahes öffentliches Grundstück mit einem benutzbaren Gegenstand. Begleite deinen Sim durch die offene Stadt und **lass ihn den Gegenstand dort benutzen**.",
        "gameObjective": "Wähle in **Die Sims 3** ein nahes öffentliches Grundstück mit einem benutzbaren Gegenstand. Begleite deinen Sim durch die offene Stadt und **lass ihn den Gegenstand dort benutzen**."
      }
    },
    "experience": {
      "family": "public-lot",
      "cardMetadata": { "genreIds": ["simulation"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["exploration"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Existing save",
          "de": "Vorhandener Spielstand",
          "chips": {"en": ["Existing save"], "de": ["Spielstand"]},
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
    "gameGenreIds": ["simulation"]
  },
  {
    "id": "the-sims-sims-3-matching-pattern",
    "moodIds": ["create", "relax"],
    "type": "creation",
    "tags": ["decorating"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "the-sims",
      "installmentIds": ["sims-3"]
    },
    "translations": {
      "en": {
        "name": "Matching Pattern",
        "objective": "In **The Sims 3**, use Create a Style on two pieces of furniture in the same room. Copy a color or pattern from one to the other, **save the room, and see both pieces together in Live Mode**.",
        "gameObjective": "In **The Sims 3**, use Create a Style on two pieces of furniture in the same room. Copy a color or pattern from one to the other, **save the room, and see both pieces together in Live Mode**."
      },
      "de": {
        "name": "Passendes Muster",
        "objective": "Nutze in **Die Sims 3** „Erstelle einen Stil“ für zwei Möbelstücke im selben Raum. Übertrage eine Farbe oder ein Muster von einem aufs andere, **speichere und sieh dir beide Möbelstücke im Live-Modus zusammen an**.",
        "gameObjective": "Nutze in **Die Sims 3** „Erstelle einen Stil“ für zwei Möbelstücke im selben Raum. Übertrage eine Farbe oder ein Muster von einem aufs andere, **speichere und sieh dir beide Möbelstücke im Live-Modus zusammen an**."
      }
    },
    "gameGenreIds": ["simulation", "management"],
    "experience": {
      "family": "style-matching",
      "cardMetadata": { "genreIds": ["simulation", "management"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["decorating"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Two furniture pieces supporting Create a Style",
          "de": "Zwei Möbelstücke mit Erstelle-einen-Stil-Option",
          "chips": {"en": ["Create a Style"], "de": ["Erstelle einen Stil"]},
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
    "id": "the-sims-sims-4-aspiration-step",
    "moodIds": ["progress", "focused"],
    "type": "objective",
    "tags": ["current-save"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "the-sims",
      "installmentIds": ["sims-4"]
    },
    "translations": {
      "en": {
        "name": "One Aspiration Step",
        "objective": "In **The Sims 4**, open your active Sim's aspiration and choose a listed goal you can do today with what is already available. **Complete that goal and watch it get checked off**. You do not need to finish the whole aspiration.",
        "gameObjective": "In **The Sims 4**, open your active Sim's aspiration and choose a listed goal you can do today with what is already available. **Complete that goal and watch it get checked off**. You do not need to finish the whole aspiration."
      },
      "de": {
        "name": "Ein Schritt zum Bestreben",
        "objective": "Öffne in **Die Sims 4** das Bestreben deines aktiven Sims. Wähle ein angezeigtes Ziel, das du heute mit dem Vorhandenen erreichen kannst, und **spiele, bis es abgehakt ist**. Das ganze Bestreben muss nicht fertig werden.",
        "gameObjective": "Öffne in **Die Sims 4** das Bestreben deines aktiven Sims. Wähle ein angezeigtes Ziel, das du heute mit dem Vorhandenen erreichen kannst, und **spiele, bis es abgehakt ist**. Das ganze Bestreben muss nicht fertig werden."
      }
    },
    "experience": {
      "family": "aspiration",
      "cardMetadata": { "genreIds": ["simulation"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "en": "Achievable aspiration goal",
          "de": "Erreichbares Bestrebensziel",
          "chips": {"en": ["Aspiration goal"], "de": ["Bestrebensziel"]},
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
    "gameGenreIds": ["simulation"]
  },
  {
    "id": "the-sims-sims-4-room-in-use",
    "moodIds": ["create", "relax"],
    "type": "creation",
    "tags": ["building", "decorating"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "universal": false,
    "curated": {
      "gameId": "the-sims",
      "installmentIds": ["sims-4"]
    },
    "translations": {
      "en": {
        "name": "Room in Use",
        "objective": "In **The Sims 4**, use Build Mode to add a small room to a household with enough space and money. Give it a door and one usable object, then **save and have a Sim use that object**.",
        "gameObjective": "In **The Sims 4**, use Build Mode to add a small room to a household with enough space and money. Give it a door and one usable object, then **save and have a Sim use that object**."
      },
      "de": {
        "name": "Ein Raum zum Benutzen",
        "objective": "Bau in **Die Sims 4** im Bau-Modus einen kleinen Raum an ein Haus mit genug Platz und Geld an. Setz eine Tür und einen benutzbaren Gegenstand hinein. **Speichere und lass einen Sim den Gegenstand benutzen**.",
        "gameObjective": "Bau in **Die Sims 4** im Bau-Modus einen kleinen Raum an ein Haus mit genug Platz und Geld an. Setz eine Tür und einen benutzbaren Gegenstand hinein. **Speichere und lass einen Sim den Gegenstand benutzen**."
      }
    },
    "gameGenreIds": ["simulation", "management"],
    "experience": {
      "family": "room-build",
      "cardMetadata": { "genreIds": ["simulation", "management"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["building", "decorating"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Building space and household funds",
          "de": "Baufläche und Haushaltsbudget",
          "chips": {"en": ["Building funds"], "de": ["Baubudget"]},
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
    "rarity": "special"
  },
  {
    "id": "the-sims-sims-4-emotional-conversation",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["dialogue", "new-approach"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "the-sims",
      "installmentIds": ["sims-4"]
    },
    "translations": {
      "en": {
        "name": "Read the Mood",
        "objective": "In **The Sims 4**, pick a Sim with an emotion-specific social interaction available. Talk to one acquaintance normally, then **use an interaction marked for your Sim's current emotion with that same person**. See how the conversation changes.",
        "gameObjective": "In **The Sims 4**, pick a Sim with an emotion-specific social interaction available. Talk to one acquaintance normally, then **use an interaction marked for your Sim's current emotion with that same person**. See how the conversation changes."
      },
      "de": {
        "name": "Der Stimmung folgen",
        "objective": "Wähle in **Die Sims 4** einen Sim, der eine soziale Interaktion passend zu seiner aktuellen Stimmung nutzen kann. Sprich erst ganz normal mit einem Bekannten und **nutze dann bei derselben Person eine stimmungsabhängige Interaktion**. Schau, wie sich das Gespräch verändert.",
        "gameObjective": "Wähle in **Die Sims 4** einen Sim, der eine soziale Interaktion passend zu seiner aktuellen Stimmung nutzen kann. Sprich erst ganz normal mit einem Bekannten und **nutze dann bei derselben Person eine stimmungsabhängige Interaktion**. Schau, wie sich das Gespräch verändert."
      }
    },
    "experience": {
      "family": "emotional-dialogue",
      "cardMetadata": { "genreIds": ["simulation"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["dialogue"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Emotion-specific social interaction available",
          "de": "Stimmungsabhängige soziale Interaktion verfügbar",
          "chips": {"en": ["Emotional interaction"], "de": ["Stimmungsinteraktion"]},
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
    "gameGenreIds": ["simulation"]
  },
  {
    "id": "the-sims-s3-favorite-meal",
    "moodIds": ["relax", "low-energy"],
    "type": "objective",
    "tags": ["cooking"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "the-sims",
      "installmentIds": ["sims-3"]
    },
    "translations": {
      "en": {
        "name": "Their Favorite Meal",
        "objective": "In **The Sims 3**, with your Sim’s favorite food recipe and ingredients available, **cook that food and have the Sim eat a serving**. Use a prepared kitchen.",
        "gameObjective": "In **The Sims 3**, with your Sim’s favorite food recipe and ingredients available, **cook that food and have the Sim eat a serving**. Use a prepared kitchen."
      },
      "de": {
        "name": "Das Lieblingsessen",
        "objective": "**Die Sims 3**: **Koch das Lieblingsessen deines Sims und lass ihn eine Portion essen**, wenn Rezept, Zutaten und eine fertige Küche vorhanden sind.",
        "gameObjective": "**Die Sims 3**: **Koch das Lieblingsessen deines Sims und lass ihn eine Portion essen**, wenn Rezept, Zutaten und eine fertige Küche vorhanden sind."
      }
    },
    "experience": {
      "family": "favorite-meal",
      "cardMetadata": { "genreIds": ["simulation"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["cooking"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Favorite food recipe, ingredients and kitchen",
          "de": "Lieblingsessen-Rezept, Zutaten und Küche",
          "chips": {"en": ["Favorite recipe"], "de": ["Lieblingsrezept"]},
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
    "gameGenreIds": ["simulation"]
  },
  {
    "id": "the-sims-s3-finish-short-book",
    "moodIds": ["create", "focused"],
    "type": "creation",
    "tags": ["story"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "the-sims",
      "installmentIds": ["sims-3"]
    },
    "translations": {
      "en": {
        "name": "A Short Book",
        "objective": "In **The Sims 3**, return to a nearly finished novel at a computer. **Finish the manuscript and give the book a title that suits its author**.",
        "gameObjective": "In **The Sims 3**, return to a nearly finished novel at a computer. **Finish the manuscript and give the book a title that suits its author**."
      },
      "de": {
        "name": "Ein kurzes Buch",
        "objective": "Setz in **Die Sims 3** an einem Computer einen fast fertigen Roman fort. **Schließ das Manuskript ab und gib dem Buch einen Titel, der zu deinem Sim passt**.",
        "gameObjective": "Setz in **Die Sims 3** an einem Computer einen fast fertigen Roman fort. **Schließ das Manuskript ab und gib dem Buch einen Titel, der zu deinem Sim passt**."
      }
    },
    "experience": {
      "family": "novel",
      "cardMetadata": { "genreIds": ["simulation"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Computer und fast fertiger Roman",
          "en": "Computer and nearly finished novel",
          "chips": {"en": ["Computer", "Started novel"], "de": ["Computer", "Begonnener Roman"]},
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
    "gameGenreIds": ["simulation"]
  },
  {
    "id": "the-sims-s3-household-portrait",
    "rarity": "special",
    "moodIds": ["create", "relax"],
    "type": "creation",
    "tags": ["decorating"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "the-sims",
      "installmentIds": ["sims-3"]
    },
    "translations": {
      "en": {
        "name": "Someone for the Wall",
        "objective": "In **The Sims 3**, with Paint Portrait unlocked, an easel and another household Sim present, paint their portrait. **Hang the finished painting in the room that suits them best**, then return to Live Mode to see it there.",
        "gameObjective": "In **The Sims 3**, with Paint Portrait unlocked, an easel and another household Sim present, paint their portrait. **Hang the finished painting in the room that suits them best**, then return to Live Mode to see it there."
      },
      "de": {
        "name": "Jemand für die Wand",
        "objective": "Male in **Die Sims 3** mit freigeschaltetem Porträtmalen und vorhandener Staffelei einen anderen anwesenden Haushaltssim. **Häng das fertige Bild in das Zimmer, das am besten zu ihm passt**, und schau es dir im Live-Modus dort an.",
        "gameObjective": "Male in **Die Sims 3** mit freigeschaltetem Porträtmalen und vorhandener Staffelei einen anderen anwesenden Haushaltssim. **Häng das fertige Bild in das Zimmer, das am besten zu ihm passt**, und schau es dir im Live-Modus dort an."
      }
    },
    "gameGenreIds": ["simulation", "management"],
    "experience": {
      "family": "portrait",
      "cardMetadata": { "genreIds": ["simulation", "management"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["decorating"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Portrait painting unlocked; easel; household Sim",
          "de": "Porträtmalen freigeschaltet; Staffelei; Haushaltssim",
          "chips": {"en": ["Portrait painting", "Easel"], "de": ["Porträtmalen", "Staffelei"]},
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
    "id": "the-sims-s3-guitar-for-the-park",
    "moodIds": ["relax", "create"],
    "type": "inspiration",
    "tags": ["rhythm"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "the-sims",
      "installmentIds": ["sims-3"]
    },
    "translations": {
      "en": {
        "name": "Guitar in the Park",
        "objective": "In The Sims 3, take a guitar to a busy park with a Sim who can play for tips. **Play for the people passing by** and enjoy the town around the music. You do not need to earn anything.",
        "gameObjective": "In The Sims 3, take a guitar to a busy park with a Sim who can play for tips. **Play for the people passing by** and enjoy the town around the music. You do not need to earn anything."
      },
      "de": {
        "name": "Eine Gitarre im Park",
        "objective": "Die Sims 3: Nimm mit einem Sim, der für Trinkgeld spielen kann, eine Gitarre in einen belebten Park mit. **Spiel für die Passanten** und schau dem Leben in der Stadt zu. Verdienen musst du nichts.",
        "gameObjective": "Die Sims 3: Nimm mit einem Sim, der für Trinkgeld spielen kann, eine Gitarre in einen belebten Park mit. **Spiel für die Passanten** und schau dem Leben in der Stadt zu. Verdienen musst du nichts."
      }
    },
    "experience": {
      "family": "street-music",
      "cardMetadata": { "genreIds": ["simulation"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["rhythm"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Guitar; Play for Tips unlocked",
          "de": "Gitarre; Für-Trinkgeld-Spielen freigeschaltet",
          "chips": {"en": ["Guitar", "Play for Tips"], "de": ["Gitarre", "Für-Trinkgeld-Spielen"]},
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
    "gameGenreIds": ["simulation"]
  },
  {
    "id": "the-sims-s3-chess-ranked-game",
    "moodIds": ["focused", "curious"],
    "type": "objective",
    "tags": ["puzzles"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "the-sims",
      "installmentIds": ["sims-3"]
    },
    "translations": {
      "en": {
        "name": "The Next Chess Opponent",
        "objective": "In **The Sims 3**, with a chess table and Ranked Chess Match available by phone, **invite the next opponent and play one full ranked game**. Any result counts.",
        "gameObjective": "In **The Sims 3**, with a chess table and Ranked Chess Match available by phone, **invite the next opponent and play one full ranked game**. Any result counts."
      },
      "de": {
        "name": "Der nächste Schachgegner",
        "objective": "**Die Sims 3**: **Lade mit vorhandenem Schachtisch und verfügbarer Telefonoption für ein Ranglistenspiel den nächsten Gegner ein und spiel eine ganze Partie**. Jedes Ergebnis zählt.",
        "gameObjective": "**Die Sims 3**: **Lade mit vorhandenem Schachtisch und verfügbarer Telefonoption für ein Ranglistenspiel den nächsten Gegner ein und spiel eine ganze Partie**. Jedes Ergebnis zählt."
      }
    },
    "experience": {
      "family": "chess",
      "cardMetadata": { "genreIds": ["simulation"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["puzzles"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Chess table; ranked match phone option",
          "de": "Schachtisch; Telefonoption für Ranglistenspiel",
          "chips": {"en": ["Chess table", "Ranked match"], "de": ["Schachtisch", "Ranglistenspiel"]},
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
    "gameGenreIds": ["simulation"]
  },
  {
    "id": "the-sims-s3-fertilize-with-fish",
    "moodIds": ["progress", "curious"],
    "type": "objective",
    "tags": ["farming"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "the-sims",
      "installmentIds": ["sims-3"]
    },
    "translations": {
      "en": {
        "name": "Feed the Garden",
        "objective": "In **The Sims 3**, with fertilizing unlocked, fish in inventory and three growing plants ready, **fertilize those plants with fish**. The harvest can wait.",
        "gameObjective": "In **The Sims 3**, with fertilizing unlocked, fish in inventory and three growing plants ready, **fertilize those plants with fish**. The harvest can wait."
      },
      "de": {
        "name": "Das Beet füttern",
        "objective": "**Die Sims 3**: **Dünge mit freigeschaltetem Düngen drei wachsende Pflanzen mit vorhandenen Fischen**. Die Ernte kann warten.",
        "gameObjective": "**Die Sims 3**: **Dünge mit freigeschaltetem Düngen drei wachsende Pflanzen mit vorhandenen Fischen**. Die Ernte kann warten."
      }
    },
    "experience": {
      "family": "fertilizing",
      "cardMetadata": { "genreIds": ["simulation"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["farming"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Fertilizing unlocked; fish and growing plants",
          "de": "Düngen freigeschaltet; Fische und wachsende Pflanzen",
          "chips": {"en": ["Fertilizing", "Fish"], "de": ["Düngen", "Fische"]},
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
    "gameGenreIds": ["simulation"]
  },
  {
    "id": "the-sims-s3-bait-at-one-pond",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["fishing"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "the-sims",
      "installmentIds": ["sims-3"]
    },
    "translations": {
      "en": {
        "name": "Fish with a Clue",
        "objective": "In **The Sims 3**, with bait fishing unlocked and bait for a fish listed in your fishing journal, visit water that contains it. **Fish once without bait, then with its listed bait, and compare what you catch**. No rare fish is required.",
        "gameObjective": "In **The Sims 3**, with bait fishing unlocked and bait for a fish listed in your fishing journal, visit water that contains it. **Fish once without bait, then with its listed bait, and compare what you catch**. No rare fish is required."
      },
      "de": {
        "name": "Angeln mit Hinweis",
        "objective": "**Die Sims 3**: Besuche mit freigeschaltetem Köderangeln ein Gewässer für einen Fisch aus deinem Angeltagebuch. Halte seinen angegebenen Köder bereit. **Angle erst ohne und dann mit diesem Köder und vergleiche deine Fänge**. Ein seltener Fisch ist kein Muss.",
        "gameObjective": "**Die Sims 3**: Besuche mit freigeschaltetem Köderangeln ein Gewässer für einen Fisch aus deinem Angeltagebuch. Halte seinen angegebenen Köder bereit. **Angle erst ohne und dann mit diesem Köder und vergleiche deine Fänge**. Ein seltener Fisch ist kein Muss."
      }
    },
    "experience": {
      "family": "bait-test",
      "cardMetadata": { "genreIds": ["simulation"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["fishing"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Bait fishing unlocked; journal-listed bait",
          "de": "Köderangeln freigeschaltet; Tagebuchköder",
          "chips": {"en": ["Bait fishing", "Journal-listed bait"], "de": ["Köderangeln", "Tagebuchköder"]},
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
    "gameGenreIds": ["simulation"]
  },
  {
    "id": "the-sims-s3-self-cleaning-upgrade",
    "moodIds": ["progress", "focused"],
    "type": "objective",
    "tags": ["crafting"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "the-sims",
      "installmentIds": ["sims-3"]
    },
    "translations": {
      "en": {
        "name": "Cleans Itself",
        "objective": "In **The Sims 3**, with the Self-Cleaning upgrade available on an owned sink or toilet, **complete that upgrade and use the fixture once**. Start with the Handiness level already unlocked.",
        "gameObjective": "In **The Sims 3**, with the Self-Cleaning upgrade available on an owned sink or toilet, **complete that upgrade and use the fixture once**. Start with the Handiness level already unlocked."
      },
      "de": {
        "name": "Putzt sich selbst",
        "objective": "**Die Sims 3**: **Bau ein eigenes Waschbecken oder eine Toilette mit verfügbarer Selbstreinigungs-Option um und benutze es einmal**. Starte mit der schon erreichten nötigen Geschicklichkeitsstufe.",
        "gameObjective": "**Die Sims 3**: **Bau ein eigenes Waschbecken oder eine Toilette mit verfügbarer Selbstreinigungs-Option um und benutze es einmal**. Starte mit der schon erreichten nötigen Geschicklichkeitsstufe."
      }
    },
    "experience": {
      "family": "fixture-upgrade",
      "cardMetadata": { "genreIds": ["simulation"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["crafting"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Self-Cleaning upgrade unlocked; owned fixture",
          "de": "Selbstreinigung freigeschaltet; eigenes Objekt",
          "chips": {"en": ["Self-Cleaning upgrade", "Fixture"], "de": ["Selbstreinigung", "Objekt"]},
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
    "gameGenreIds": ["simulation"]
  },
  {
    "id": "the-sims-s3-metal-from-the-mail",
    "moodIds": ["curious", "progress"],
    "type": "objective",
    "tags": ["collectibles"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "the-sims",
      "installmentIds": ["sims-3"]
    },
    "translations": {
      "en": {
        "name": "Send It to Smelt",
        "objective": "In **The Sims 3**, **send a found metal for smelting** to refine it for your collection. Have the postage ready; the ingot will arrive in a later delivery.",
        "gameObjective": "In **The Sims 3**, **send a found metal for smelting** to refine it for your collection. Have the postage ready; the ingot will arrive in a later delivery."
      },
      "de": {
        "name": "Zum Schmelzen schicken",
        "objective": "**Schick in Die Sims 3 ein gefundenes Metall zum Schmelzen**, um es für deine Sammlung verarbeiten zu lassen. Halte die Versandgebühr bereit; der Barren kommt später mit der Post.",
        "gameObjective": "**Schick in Die Sims 3 ein gefundenes Metall zum Schmelzen**, um es für deine Sammlung verarbeiten zu lassen. Halte die Versandgebühr bereit; der Barren kommt später mit der Post."
      }
    },
    "experience": {
      "family": "smelting",
      "cardMetadata": { "genreIds": ["simulation"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["collectibles"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Unsmelted metal and postage",
          "de": "Unverarbeitetes Metall und Versandgeld",
          "chips": {"en": ["Unsmelted metal"], "de": ["Unverarbeitetes Metall"]},
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
    "gameGenreIds": ["simulation"]
  },
  {
    "id": "the-sims-s3-insect-science-donation",
    "moodIds": ["progress", "explore"],
    "type": "objective",
    "tags": ["collectibles"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "the-sims",
      "installmentIds": ["sims-3"]
    },
    "translations": {
      "en": {
        "name": "A Specimen for Science",
        "objective": "In **The Sims 3**, **take an insect you already own to the town’s science facility and sell it to science**.",
        "gameObjective": "In **The Sims 3**, **take an insect you already own to the town’s science facility and sell it to science**."
      },
      "de": {
        "name": "Ein Fund für Forscher",
        "objective": "**Bring in Die Sims 3 ein vorhandenes Insekt zur Forschungseinrichtung der Stadt und verkaufe es dort an die Forschung**.",
        "gameObjective": "**Bring in Die Sims 3 ein vorhandenes Insekt zur Forschungseinrichtung der Stadt und verkaufe es dort an die Forschung**."
      }
    },
    "experience": {
      "family": "insect-donation",
      "cardMetadata": { "genreIds": ["simulation"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["collectibles"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Owned insect; science facility in town",
          "de": "Vorhandenes Insekt; Forschungseinrichtung",
          "chips": {"en": ["Insect", "Science facility"], "de": ["Insekt", "Forschungseinrichtung"]},
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
    "gameGenreIds": ["simulation"]
  },
  {
    "id": "the-sims-s3-tomb-switch",
    "moodIds": ["explore", "focused"],
    "type": "objective",
    "tags": ["puzzles"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "the-sims",
      "installmentIds": ["sims-3"]
    },
    "translations": {
      "en": {
        "name": "The Door Beyond",
        "objective": "In **The Sims 3**, with **World Adventures** installed and your Sim already in a tomb, find a reachable floor-switch puzzle. **Open its linked door and enter the room behind it**. Leave the rest of the tomb for later.",
        "gameObjective": "In **The Sims 3**, with **World Adventures** installed and your Sim already in a tomb, find a reachable floor-switch puzzle. **Open its linked door and enter the room behind it**. Leave the rest of the tomb for later."
      },
      "de": {
        "name": "Die Tür dahinter",
        "objective": "**Die Sims 3**: Such mit **Reiseabenteuer** und einem Sim, der schon in einer Gruft ist, ein erreichbares Rätsel mit Bodenschalter. **Öffne die zugehörige Tür und betritt den Raum dahinter**. Der Rest der Gruft kann warten.",
        "gameObjective": "**Die Sims 3**: Such mit **Reiseabenteuer** und einem Sim, der schon in einer Gruft ist, ein erreichbares Rätsel mit Bodenschalter. **Öffne die zugehörige Tür und betritt den Raum dahinter**. Der Rest der Gruft kann warten."
      }
    },
    "experience": {
      "family": "tomb-puzzle",
      "cardMetadata": { "genreIds": ["simulation"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["puzzles"],
      "rules": [],
      "prerequisites": [
        {
          "en": "World Adventures; Sim already inside a tomb",
          "de": "Reiseabenteuer; Sim schon in einer Gruft",
          "chips": {"en": ["World Adventures", "Tomb"], "de": ["Reiseabenteuer", "Gruft"]},
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
    "gameGenreIds": ["simulation"]
  },
  {
    "id": "the-sims-s3-first-nectar-batch",
    "moodIds": ["create", "relax"],
    "type": "creation",
    "tags": ["cooking"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "the-sims",
      "installmentIds": ["sims-3"]
    },
    "translations": {
      "en": {
        "name": "Your Own Blend",
        "objective": "In **The Sims 3**, with **World Adventures**, a Nectar Maker and ten fruits ready, choose a fruit blend. **Make one batch, name it and put its bottles in a nectar rack**. Any quality counts.",
        "gameObjective": "In **The Sims 3**, with **World Adventures**, a Nectar Maker and ten fruits ready, choose a fruit blend. **Make one batch, name it and put its bottles in a nectar rack**. Any quality counts."
      },
      "de": {
        "name": "Deine eigene Mischung",
        "objective": "**Die Sims 3**: Wähle mit **Reiseabenteuer**, Nektarmaschine und zehn vorhandenen Früchten eine Mischung. **Stell eine Charge her, benenne sie und lagere die Flaschen im Nektarregal**. Jede Qualität zählt.",
        "gameObjective": "**Die Sims 3**: Wähle mit **Reiseabenteuer**, Nektarmaschine und zehn vorhandenen Früchten eine Mischung. **Stell eine Charge her, benenne sie und lagere die Flaschen im Nektarregal**. Jede Qualität zählt."
      }
    },
    "experience": {
      "family": "nectar",
      "cardMetadata": { "genreIds": ["simulation"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["cooking"],
      "rules": [],
      "prerequisites": [
        {
          "en": "World Adventures; Nectar Maker, fruit and rack",
          "de": "Reiseabenteuer; Nektarmaschine, Obst und Regal",
          "chips": {"en": ["World Adventures", "Nectar Maker"], "de": ["Reiseabenteuer", "Nektarmaschine"]},
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
    "gameGenreIds": ["simulation"],
    "rarity": "special"
  },
  {
    "id": "the-sims-s3-clay-sculpture",
    "moodIds": ["create", "focused"],
    "type": "creation",
    "tags": ["decorating"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "the-sims",
      "installmentIds": ["sims-3"]
    },
    "translations": {
      "en": {
        "name": "A Lump of Clay",
        "objective": "In **The Sims 3**, with **Ambitions**, a Sculpting Station and the clay option available, **finish one clay sculpture and place it in the yard**. Keep whatever your Sim makes.",
        "gameObjective": "In **The Sims 3**, with **Ambitions**, a Sculpting Station and the clay option available, **finish one clay sculpture and place it in the yard**. Keep whatever your Sim makes."
      },
      "de": {
        "name": "Aus einem Klumpen Ton",
        "objective": "**Die Sims 3**: **Stell mit Traumkarrieren, Bildhauerstation und verfügbarer Tonoption eine Tonskulptur fertig und stell sie in den Garten**. Behalte, was dein Sim macht.",
        "gameObjective": "**Die Sims 3**: **Stell mit Traumkarrieren, Bildhauerstation und verfügbarer Tonoption eine Tonskulptur fertig und stell sie in den Garten**. Behalte, was dein Sim macht."
      }
    },
    "gameGenreIds": ["simulation", "management"],
    "experience": {
      "family": "sculpture",
      "cardMetadata": { "genreIds": ["simulation", "management"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["decorating"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Ambitions; Sculpting Station with clay option",
          "de": "Traumkarrieren; Bildhauerstation mit Tonoption",
          "chips": {"en": ["Ambitions", "Sculpting Station"], "de": ["Traumkarrieren", "Bildhauerstation"]},
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
    "id": "the-sims-s3-invented-toy",
    "moodIds": ["create", "focused"],
    "type": "creation",
    "tags": ["crafting"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "the-sims",
      "installmentIds": ["sims-3"]
    },
    "translations": {
      "en": {
        "name": "Made from Scrap",
        "objective": "In **The Sims 3**, with **Ambitions**, an inventing workbench, scrap and a known toy invention, **build that toy and have a household Sim play with it**.",
        "gameObjective": "In **The Sims 3**, with **Ambitions**, an inventing workbench, scrap and a known toy invention, **build that toy and have a household Sim play with it**."
      },
      "de": {
        "name": "Aus Schrott gemacht",
        "objective": "**Die Sims 3**: **Bau mit Traumkarrieren, Erfinderwerkbank, Schrott und einer bekannten Spielzeugerfindung dieses Spielzeug und lass einen Haushaltssim damit spielen**.",
        "gameObjective": "**Die Sims 3**: **Bau mit Traumkarrieren, Erfinderwerkbank, Schrott und einer bekannten Spielzeugerfindung dieses Spielzeug und lass einen Haushaltssim damit spielen**."
      }
    },
    "experience": {
      "family": "toy-build",
      "cardMetadata": { "genreIds": ["simulation"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["crafting"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Ambitions; toy recipe, bench and scrap",
          "de": "Traumkarrieren; Spielzeugrezept, Werkbank und Schrott",
          "chips": {"en": ["Ambitions", "Workbench"], "de": ["Traumkarrieren", "Werkbank"]},
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
    "gameGenreIds": ["simulation"]
  },
  {
    "id": "the-sims-s3-drink-and-mood",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["cooking"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "the-sims",
      "installmentIds": ["sims-3"]
    },
    "translations": {
      "en": {
        "name": "Mix, Then Taste",
        "objective": "In **The Sims 3**, with **Late Night**, a professional bar and an unlocked mood drink, **mix one serving and have your Sim drink it**. Compare the resulting moodlets with those before the drink.",
        "gameObjective": "In **The Sims 3**, with **Late Night**, a professional bar and an unlocked mood drink, **mix one serving and have your Sim drink it**. Compare the resulting moodlets with those before the drink."
      },
      "de": {
        "name": "Mixen und probieren",
        "objective": "**Die Sims 3**: **Mixe mit Late Night, professioneller Bar und einem freigeschalteten Stimmungsdrink eine Portion und lass deinen Sim sie trinken**. Vergleiche seine Stimmungen vor und nach dem Drink.",
        "gameObjective": "**Die Sims 3**: **Mixe mit Late Night, professioneller Bar und einem freigeschalteten Stimmungsdrink eine Portion und lass deinen Sim sie trinken**. Vergleiche seine Stimmungen vor und nach dem Drink."
      }
    },
    "experience": {
      "family": "mood-drink",
      "cardMetadata": { "genreIds": ["simulation"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["cooking"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Late Night; professional bar; mood drink unlocked",
          "de": "Late Night; professionelle Bar; Stimmungsdrink freigeschaltet",
          "chips": {"en": ["Late Night", "Professional bar"], "de": ["Late Night", "Profibar"]},
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
    "gameGenreIds": ["simulation"]
  },
  {
    "id": "the-sims-s3-festival-family-card",
    "moodIds": ["create", "relax"],
    "type": "creation",
    "tags": ["photography"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "the-sims",
      "installmentIds": ["sims-3"]
    },
    "translations": {
      "en": {
        "name": "Together on a Card",
        "objective": "In **The Sims 3**, with **Seasons**, an open festival and at least two household Sims present, **take a greeting-card photo together and display the card at home**.",
        "gameObjective": "In **The Sims 3**, with **Seasons**, an open festival and at least two household Sims present, **take a greeting-card photo together and display the card at home**."
      },
      "de": {
        "name": "Zusammen auf einer Karte",
        "objective": "**Die Sims 3**: **Macht mit Jahreszeiten, einem offenen Fest und mindestens zwei anwesenden Haushaltssims gemeinsam ein Grußkartenfoto und stellt die Karte zu Hause auf**.",
        "gameObjective": "**Die Sims 3**: **Macht mit Jahreszeiten, einem offenen Fest und mindestens zwei anwesenden Haushaltssims gemeinsam ein Grußkartenfoto und stellt die Karte zu Hause auf**."
      }
    },
    "experience": {
      "family": "family-photo",
      "cardMetadata": { "genreIds": ["simulation"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["photography"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Seasons; open festival; two household Sims",
          "de": "Jahreszeiten; offenes Fest; zwei Haushaltssims",
          "chips": {"en": ["Seasons", "Open festival"], "de": ["Jahreszeiten", "Fest"]},
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
    "gameGenreIds": ["simulation"]
  },
  {
    "id": "the-sims-s3-dog-known-trick",
    "moodIds": ["relax", "low-energy"],
    "type": "objective",
    "tags": ["animals"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "the-sims",
      "installmentIds": ["sims-3"]
    },
    "translations": {
      "en": {
        "name": "Show Me the Trick",
        "objective": "In **The Sims 3**, with **Pets** and a dog that already knows a trick, **ask it to perform that trick and praise it afterward**. Stay in your own yard.",
        "gameObjective": "In **The Sims 3**, with **Pets** and a dog that already knows a trick, **ask it to perform that trick and praise it afterward**. Stay in your own yard."
      },
      "de": {
        "name": "Zeig den Trick",
        "objective": "**Die Sims 3**: **Lass mit Einfach tierisch einen Hund einen schon gelernten Trick zeigen und lobe ihn danach**. Bleib im eigenen Garten.",
        "gameObjective": "**Die Sims 3**: **Lass mit Einfach tierisch einen Hund einen schon gelernten Trick zeigen und lobe ihn danach**. Bleib im eigenen Garten."
      }
    },
    "experience": {
      "family": "pet-trick",
      "cardMetadata": { "genreIds": ["simulation"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["animals"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Pets; dog with known trick",
          "de": "Einfach tierisch; Hund mit gelerntem Trick",
          "chips": {"en": ["Pets", "Trained dog"], "de": ["Einfach tierisch", "Trainierter Hund"]},
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
    "gameGenreIds": ["simulation"]
  },
  {
    "id": "the-sims-s3-elixir-in-use",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["crafting"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "the-sims",
      "installmentIds": ["sims-3"]
    },
    "translations": {
      "en": {
        "name": "Bottled Change",
        "objective": "In **The Sims 3**, with **Supernatural**, an alchemy station and the recipe and ingredients for a beneficial elixir ready, **brew it and use it on your own Sim**. Check its effect before choosing the recipe.",
        "gameObjective": "In **The Sims 3**, with **Supernatural**, an alchemy station and the recipe and ingredients for a beneficial elixir ready, **brew it and use it on your own Sim**. Check its effect before choosing the recipe."
      },
      "de": {
        "name": "Veränderung in der Flasche",
        "objective": "**Die Sims 3**: **Braue mit Supernatural an der Alchemiestation ein hilfreiches Elixier und nutze es auf deinem eigenen Sim**. Halte Rezept und Zutaten bereit und lies die Wirkung, bevor du das Rezept auswählst.",
        "gameObjective": "**Die Sims 3**: **Braue mit Supernatural an der Alchemiestation ein hilfreiches Elixier und nutze es auf deinem eigenen Sim**. Halte Rezept und Zutaten bereit und lies die Wirkung, bevor du das Rezept auswählst."
      }
    },
    "experience": {
      "family": "elixir",
      "cardMetadata": { "genreIds": ["simulation"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["crafting"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Supernatural; alchemy station, recipe and ingredients",
          "de": "Supernatural; Alchemiestation, Rezept und Zutaten",
          "chips": {"en": ["Supernatural", "Alchemy station"], "de": ["Supernatural", "Alchemiestation"]},
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
    "gameGenreIds": ["simulation"]
  },
  {
    "id": "the-sims-s3-diving-ground-tour",
    "moodIds": ["relax", "explore"],
    "type": "inspiration",
    "tags": ["diving"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "the-sims",
      "installmentIds": ["sims-3"]
    },
    "translations": {
      "en": {
        "name": "Below Isla Paradiso",
        "objective": "In **The Sims 3**, with **Island Paradise** and the Scuba Diving level for a nearby dive area already reached, head below the buoy. Explore the seabed and the sea life at your own pace, surfacing before your air runs out.",
        "gameObjective": "In **The Sims 3**, with **Island Paradise** and the Scuba Diving level for a nearby dive area already reached, head below the buoy. Explore the seabed and the sea life at your own pace, surfacing before your air runs out."
      },
      "de": {
        "name": "Unter Isla Paradiso",
        "objective": "**Die Sims 3**: Tauche mit **Inselparadies** und schon ausreichender Tauchstufe am Bojenmarker eines nahen Tauchgebiets ab. Schau dich am Meeresboden und bei den Meerestieren um und tauch auf, bevor die Luft ausgeht.",
        "gameObjective": "**Die Sims 3**: Tauche mit **Inselparadies** und schon ausreichender Tauchstufe am Bojenmarker eines nahen Tauchgebiets ab. Schau dich am Meeresboden und bei den Meerestieren um und tauch auf, bevor die Luft ausgeht."
      }
    },
    "experience": {
      "family": "diving-roaming",
      "cardMetadata": { "genreIds": ["simulation"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["diving"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Island Paradise; required Scuba Diving level",
          "de": "Inselparadies; erforderliche Tauchstufe",
          "chips": {"en": ["Island Paradise", "Scuba Diving level"], "de": ["Inselparadies", "Tauchstufe"]},
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
    "gameGenreIds": ["simulation"]
  },
  {
    "id": "the-sims-s3-home-ground-mural",
    "moodIds": ["create", "focused"],
    "type": "creation",
    "tags": ["decorating"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "the-sims",
      "installmentIds": ["sims-3"]
    },
    "translations": {
      "en": {
        "name": "A Mural at Home",
        "objective": "In **The Sims 3**, with **University Life**, a Street Art Kit and the ground-mural option unlocked, **finish a mural on your home lot**. Pick a patch where it will stay visible.",
        "gameObjective": "In **The Sims 3**, with **University Life**, a Street Art Kit and the ground-mural option unlocked, **finish a mural on your home lot**. Pick a patch where it will stay visible."
      },
      "de": {
        "name": "Das Bild vorm Haus",
        "objective": "**Die Sims 3**: **Stell mit Wildes Studentenleben, Street-Art-Ausrüstung und freigeschalteter Bodenbild-Option ein Bodenbild auf deinem Wohngrundstück fertig**. Wähle eine Stelle, an der es sichtbar bleibt.",
        "gameObjective": "**Die Sims 3**: **Stell mit Wildes Studentenleben, Street-Art-Ausrüstung und freigeschalteter Bodenbild-Option ein Bodenbild auf deinem Wohngrundstück fertig**. Wähle eine Stelle, an der es sichtbar bleibt."
      }
    },
    "gameGenreIds": ["simulation", "management"],
    "experience": {
      "family": "mural",
      "cardMetadata": { "genreIds": ["simulation", "management"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["decorating"],
      "rules": [],
      "prerequisites": [
        {
          "en": "University Life; Street Art Kit; mural unlocked",
          "de": "Wildes Studentenleben; Street-Art-Ausrüstung; Bodenbild freigeschaltet",
          "chips": {"en": ["University Life", "Street Art Kit"], "de": ["Wildes Studentenleben", "Street-Art-Kit"]},
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
    "id": "the-sims-s4-graft-garden-branch",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["farming"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "the-sims",
      "installmentIds": ["sims-4"]
    },
    "translations": {
      "en": {
        "name": "Two Plants, One Branch",
        "objective": "In **The Sims 4**, with Take Cutting and Graft unlocked and two different mature garden plants ready, **take a cutting from one and graft it onto the other**. Check the resulting plant label. Fruit can grow later.",
        "gameObjective": "In **The Sims 4**, with Take Cutting and Graft unlocked and two different mature garden plants ready, **take a cutting from one and graft it onto the other**. Check the resulting plant label. Fruit can grow later."
      },
      "de": {
        "name": "Zwei Pflanzen, ein Zweig",
        "objective": "**Die Sims 4**: **Nimm mit freigeschaltetem Abschneiden und Veredeln von einer ausgewachsenen Gartenpflanze einen Ableger und veredle damit eine andere Pflanzenart**. Prüfe den neuen Pflanzennamen. Früchte dürfen später wachsen.",
        "gameObjective": "**Die Sims 4**: **Nimm mit freigeschaltetem Abschneiden und Veredeln von einer ausgewachsenen Gartenpflanze einen Ableger und veredle damit eine andere Pflanzenart**. Prüfe den neuen Pflanzennamen. Früchte dürfen später wachsen."
      }
    },
    "experience": {
      "family": "grafting",
      "cardMetadata": { "genreIds": ["simulation"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["farming"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Cutting and Graft unlocked; two mature plants",
          "de": "Abschneiden und Veredeln freigeschaltet; zwei ausgewachsene Pflanzen",
          "chips": {"en": ["Grafting", "Mature plants"], "de": ["Veredeln", "Reife Pflanzen"]},
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
    "gameGenreIds": ["simulation"]
  },
  {
    "id": "the-sims-s4-plant-under-microscope",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["collectibles"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "the-sims",
      "installmentIds": ["sims-4"]
    },
    "translations": {
      "en": {
        "name": "A Leaf Up Close",
        "objective": "In **The Sims 4**, with a microscope, garden plant and Collect Microscope Sample available, **take a plant sample and analyze it under the microscope**. A collectible print is optional.",
        "gameObjective": "In **The Sims 4**, with a microscope, garden plant and Collect Microscope Sample available, **take a plant sample and analyze it under the microscope**. A collectible print is optional."
      },
      "de": {
        "name": "Das Blatt ganz nah",
        "objective": "**Die Sims 4**: **Nimm mit vorhandenem Mikroskop, Gartenpflanze und verfügbarer Probenoption eine Pflanzenprobe und analysiere sie unter dem Mikroskop**. Ein Sammelbild ist optional.",
        "gameObjective": "**Die Sims 4**: **Nimm mit vorhandenem Mikroskop, Gartenpflanze und verfügbarer Probenoption eine Pflanzenprobe und analysiere sie unter dem Mikroskop**. Ein Sammelbild ist optional."
      }
    },
    "experience": {
      "family": "microscope",
      "cardMetadata": { "genreIds": ["simulation"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["collectibles"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Microscope; sample interaction unlocked",
          "de": "Mikroskop; Probenoption freigeschaltet",
          "chips": {"en": ["Microscope", "Sample interaction"], "de": ["Mikroskop", "Probenoption"]},
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
    "gameGenreIds": ["simulation"]
  },
  {
    "id": "the-sims-s4-woodwork-stool",
    "moodIds": ["create", "relax"],
    "type": "creation",
    "tags": ["crafting", "decorating"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "the-sims",
      "installmentIds": ["sims-4"]
    },
    "translations": {
      "en": {
        "name": "A Stool from Scratch",
        "objective": "In **The Sims 4**, with a woodworking table and the barstool recipe unlocked, **craft a barstool, place it at home and have a Sim sit on it**. Have the crafting fee ready.",
        "gameObjective": "In **The Sims 4**, with a woodworking table and the barstool recipe unlocked, **craft a barstool, place it at home and have a Sim sit on it**. Have the crafting fee ready."
      },
      "de": {
        "name": "Ein selbstgebauter Hocker",
        "objective": "**Die Sims 4**: **Stell mit Holzwerkbank und freigeschaltetem Barhocker-Rezept einen Barhocker her, stell ihn zu Hause auf und lass einen Sim darauf sitzen**. Halte die Herstellungskosten bereit.",
        "gameObjective": "**Die Sims 4**: **Stell mit Holzwerkbank und freigeschaltetem Barhocker-Rezept einen Barhocker her, stell ihn zu Hause auf und lass einen Sim darauf sitzen**. Halte die Herstellungskosten bereit."
      }
    },
    "gameGenreIds": ["simulation", "management"],
    "experience": {
      "family": "woodworking",
      "cardMetadata": { "genreIds": ["simulation", "management"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["crafting", "decorating"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Woodworking table; barstool recipe and fee",
          "de": "Holzwerkbank; Barhocker-Rezept und Gebühr",
          "chips": {"en": ["Woodworking table", "Barstool recipe"], "de": ["Holzwerkbank", "Barhocker-Rezept"]},
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
    "id": "the-sims-s4-paint-the-view",
    "moodIds": ["create", "focused"],
    "type": "creation",
    "tags": ["decorating"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "the-sims",
      "installmentIds": ["sims-4"]
    },
    "translations": {
      "en": {
        "name": "Paint This View",
        "objective": "In **The Sims 4**, with Paint from Reference unlocked and an easel ready, frame a corner of your home through the painting camera. **Finish the painting and hang it near the view it shows**.",
        "gameObjective": "In **The Sims 4**, with Paint from Reference unlocked and an easel ready, frame a corner of your home through the painting camera. **Finish the painting and hang it near the view it shows**."
      },
      "de": {
        "name": "Diese Aussicht malen",
        "objective": "**Die Sims 4**: Wähle mit freigeschaltetem Malen nach Vorlage und vorhandener Staffelei eine Ecke deines Hauses im Kameraausschnitt. **Stell das Bild fertig und häng es nahe der gezeigten Aussicht auf**.",
        "gameObjective": "**Die Sims 4**: Wähle mit freigeschaltetem Malen nach Vorlage und vorhandener Staffelei eine Ecke deines Hauses im Kameraausschnitt. **Stell das Bild fertig und häng es nahe der gezeigten Aussicht auf**."
      }
    },
    "gameGenreIds": ["simulation", "management"],
    "experience": {
      "family": "painting",
      "cardMetadata": { "genreIds": ["simulation", "management"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["decorating"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Easel; Paint from Reference unlocked",
          "de": "Staffelei; Malen nach Vorlage freigeschaltet",
          "chips": {"en": ["Easel", "Paint from Reference"], "de": ["Staffelei", "Malen nach Vorlage"]},
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
    "id": "the-sims-s4-programming-hack",
    "moodIds": ["curious", "progress"],
    "type": "objective",
    "tags": ["current-save"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "the-sims",
      "installmentIds": ["sims-4"]
    },
    "translations": {
      "en": {
        "name": "A First Hack",
        "objective": "In **The Sims 4**, **complete an already unlocked hack at a computer** and see what your Sim earns.",
        "gameObjective": "In **The Sims 4**, **complete an already unlocked hack at a computer** and see what your Sim earns."
      },
      "de": {
        "name": "Ein erster Hack",
        "objective": "**Beende in Die Sims 4 an einem Computer einen bereits freigeschalteten Hack**. Schau, was dein Sim damit verdient.",
        "gameObjective": "**Beende in Die Sims 4 an einem Computer einen bereits freigeschalteten Hack**. Schau, was dein Sim damit verdient."
      }
    },
    "experience": {
      "family": "programming",
      "cardMetadata": { "genreIds": ["simulation"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["current-save"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Computer; hack target unlocked",
          "de": "Computer; Hackziel freigeschaltet",
          "chips": {"en": ["Computer", "Hack target"], "de": ["Computer", "Hackziel"]},
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
    "gameGenreIds": ["simulation"]
  },
  {
    "id": "the-sims-s4-comedy-routine-night",
    "moodIds": ["create", "focused"],
    "type": "creation",
    "tags": ["dialogue"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "the-sims",
      "installmentIds": ["sims-4"]
    },
    "translations": {
      "en": {
        "name": "Your Sim’s Set",
        "objective": "In **The Sims 4**, with writing and performing comedy routines unlocked, write one short routine at the computer. **Perform it at a microphone on a public lot**. No particular audience reaction is needed.",
        "gameObjective": "In **The Sims 4**, with writing and performing comedy routines unlocked, write one short routine at the computer. **Perform it at a microphone on a public lot**. No particular audience reaction is needed."
      },
      "de": {
        "name": "Das Programm deines Sims",
        "objective": "**Die Sims 4**: Schreib mit freigeschaltetem Schreiben und Vortragen von Comedy-Programmen ein kurzes Programm am Computer. **Trag es an einem Mikrofon auf einem öffentlichen Grundstück vor**. Eine bestimmte Publikumsreaktion brauchst du nicht.",
        "gameObjective": "**Die Sims 4**: Schreib mit freigeschaltetem Schreiben und Vortragen von Comedy-Programmen ein kurzes Programm am Computer. **Trag es an einem Mikrofon auf einem öffentlichen Grundstück vor**. Eine bestimmte Publikumsreaktion brauchst du nicht."
      }
    },
    "experience": {
      "family": "comedy",
      "cardMetadata": { "genreIds": ["simulation"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["dialogue"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Comedy writing and performance unlocked",
          "de": "Comedy-Schreiben und -Vortrag freigeschaltet",
          "chips": {"en": ["Comedy routine"], "de": ["Comedy-Routine"]},
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
    "gameGenreIds": ["simulation"]
  },
  {
    "id": "the-sims-s4-observatory-night",
    "moodIds": ["relax", "curious"],
    "type": "inspiration",
    "tags": ["collectibles"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "the-sims",
      "installmentIds": ["sims-4"]
    },
    "translations": {
      "en": {
        "name": "Above the Neighborhood",
        "objective": "In The Sims 4, with an observatory available after dark, **spend the evening looking at the sky** with a Sim. Watch their reactions and see whether they find a new space print. The print is optional.",
        "gameObjective": "In The Sims 4, with an observatory available after dark, **spend the evening looking at the sky** with a Sim. Watch their reactions and see whether they find a new space print. The print is optional."
      },
      "de": {
        "name": "Über der Nachbarschaft",
        "objective": "Die Sims 4: Verbringe mit einem nachts verfügbaren Observatorium **den Abend beim Blick in den Himmel**. Schau den Reaktionen deines Sims zu und ob ein neues Weltraumbild auftaucht. Das Bild ist optional.",
        "gameObjective": "Die Sims 4: Verbringe mit einem nachts verfügbaren Observatorium **den Abend beim Blick in den Himmel**. Schau den Reaktionen deines Sims zu und ob ein neues Weltraumbild auftaucht. Das Bild ist optional."
      }
    },
    "experience": {
      "family": "skywatching",
      "cardMetadata": { "genreIds": ["simulation"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["collectibles"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Observatory available after dark",
          "de": "Observatorium nachts verfügbar",
          "chips": {"en": ["Observatory"], "de": ["Observatorium"]},
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
    "gameGenreIds": ["simulation"]
  },
  {
    "id": "the-sims-s4-rocket-trip",
    "moodIds": ["explore", "curious"],
    "type": "objective",
    "tags": ["space"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "the-sims",
      "installmentIds": ["sims-4"]
    },
    "translations": {
      "en": {
        "name": "Out and Back",
        "objective": "In **The Sims 4**, with a fully built rocket ready, **send a Sim to explore space, choose the options in the adventure and bring them home**. You do not need a specific souvenir.",
        "gameObjective": "In **The Sims 4**, with a fully built rocket ready, **send a Sim to explore space, choose the options in the adventure and bring them home**. You do not need a specific souvenir."
      },
      "de": {
        "name": "Hin und zurück",
        "objective": "**Die Sims 4**: **Schick mit fertiger Rakete einen Sim ins All, wähle die Optionen des Abenteuers und bring ihn nach Hause zurück**. Ein bestimmtes Mitbringsel brauchst du nicht.",
        "gameObjective": "**Die Sims 4**: **Schick mit fertiger Rakete einen Sim ins All, wähle die Optionen des Abenteuers und bring ihn nach Hause zurück**. Ein bestimmtes Mitbringsel brauchst du nicht."
      }
    },
    "experience": {
      "family": "space-adventure",
      "cardMetadata": { "genreIds": ["simulation"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["space"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Fully built rocket",
          "de": "Fertig gebaute Rakete",
          "chips": {"en": ["Rocket"], "de": ["Rakete"]},
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
    "gameGenreIds": ["simulation"]
  },
  {
    "id": "the-sims-s4-frog-breeding-result",
    "moodIds": ["curious", "progress"],
    "type": "objective",
    "tags": ["collectibles"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "the-sims",
      "installmentIds": ["sims-4"]
    },
    "translations": {
      "en": {
        "name": "One More Frog",
        "objective": "In **The Sims 4**, with two breedable frogs already owned, **breed them once and check the new frog’s species in your collection**. A duplicate still counts.",
        "gameObjective": "In **The Sims 4**, with two breedable frogs already owned, **breed them once and check the new frog’s species in your collection**. A duplicate still counts."
      },
      "de": {
        "name": "Noch ein Frosch",
        "objective": "**Die Sims 4**: **Züchte mit zwei vorhandenen zuchtfähigen Fröschen einmal Nachwuchs und prüfe seine Art in deiner Sammlung**. Auch ein Duplikat zählt.",
        "gameObjective": "**Die Sims 4**: **Züchte mit zwei vorhandenen zuchtfähigen Fröschen einmal Nachwuchs und prüfe seine Art in deiner Sammlung**. Auch ein Duplikat zählt."
      }
    },
    "experience": {
      "family": "frog-breeding",
      "cardMetadata": { "genreIds": ["simulation"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["collectibles"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Two breedable frogs",
          "de": "Zwei zuchtfähige Frösche",
          "chips": {"en": ["Breedable frogs"], "de": ["Zuchtfähige Frösche"]},
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
    "gameGenreIds": ["simulation"]
  },
  {
    "id": "the-sims-s4-lab-metal-analysis",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["collectibles"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "the-sims",
      "installmentIds": ["sims-4"]
    },
    "translations": {
      "en": {
        "name": "Metal in the Lab",
        "objective": "In **The Sims 4**, with **Get to Work**, a scientist Sim already at an active workday and an analyzer available, **analyze one metal and read the result**. Use a specimen you already have.",
        "gameObjective": "In **The Sims 4**, with **Get to Work**, a scientist Sim already at an active workday and an analyzer available, **analyze one metal and read the result**. Use a specimen you already have."
      },
      "de": {
        "name": "Metall im Labor",
        "objective": "**Die Sims 4**: **Analysiere mit An die Arbeit, einem Wissenschaftler-Sim im aktiven Arbeitstag und vorhandenem Analysegerät ein schon vorhandenes Metall und lies das Ergebnis**.",
        "gameObjective": "**Die Sims 4**: **Analysiere mit An die Arbeit, einem Wissenschaftler-Sim im aktiven Arbeitstag und vorhandenem Analysegerät ein schon vorhandenes Metall und lies das Ergebnis**."
      }
    },
    "experience": {
      "family": "laboratory",
      "cardMetadata": { "genreIds": ["simulation"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["collectibles"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Get to Work; active scientist workday; analyzer",
          "de": "An die Arbeit; aktiver Wissenschaftler-Arbeitstag; Analysegerät",
          "chips": {"en": ["Get to Work", "Scientist career"], "de": ["An die Arbeit", "Wissenschaftlerkarriere"]},
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
    "gameGenreIds": ["simulation"]
  },
  {
    "id": "the-sims-s4-club-that-cooks",
    "moodIds": ["create", "focused"],
    "type": "creation",
    "tags": ["cooking", "dialogue"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "the-sims",
      "installmentIds": ["sims-4"]
    },
    "translations": {
      "en": {
        "name": "A Cooking Club",
        "objective": "In **The Sims 4**, with **Get Together**, create a club with cooking and eating as its encouraged activities. **Start a gathering at a usable kitchen and cook a group meal with the members present**.",
        "gameObjective": "In **The Sims 4**, with **Get Together**, create a club with cooking and eating as its encouraged activities. **Start a gathering at a usable kitchen and cook a group meal with the members present**."
      },
      "de": {
        "name": "Ein Kochclub",
        "objective": "**Die Sims 4**: Gründe mit **Zeit für Freunde** einen Club, der Kochen und Essen fördert. **Starte ein Treffen an einer benutzbaren Küche und koche mit anwesenden Mitgliedern eine Mahlzeit für mehrere Sims**.",
        "gameObjective": "**Die Sims 4**: Gründe mit **Zeit für Freunde** einen Club, der Kochen und Essen fördert. **Starte ein Treffen an einer benutzbaren Küche und koche mit anwesenden Mitgliedern eine Mahlzeit für mehrere Sims**."
      }
    },
    "experience": {
      "family": "cooking-club",
      "cardMetadata": { "genreIds": ["simulation"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["cooking", "dialogue"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Get Together; usable kitchen",
          "de": "Zeit für Freunde; benutzbare Küche",
          "chips": {"en": ["Get Together", "Kitchen"], "de": ["Zeit für Freunde", "Küche"]},
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
    "gameGenreIds": ["simulation"],
    "rarity": "special"
  },
  {
    "id": "the-sims-s4-festival-food-recipe",
    "moodIds": ["curious", "progress"],
    "type": "objective",
    "tags": ["cooking"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "the-sims",
      "installmentIds": ["sims-4"]
    },
    "translations": {
      "en": {
        "name": "Learn It by Eating",
        "objective": "In **The Sims 4**, with **City Living** and a festival food stall already open, buy a dish whose recipe your Sim has not learned. **Finish eating it and check the learned-recipe notification**. Have the price ready.",
        "gameObjective": "In **The Sims 4**, with **City Living** and a festival food stall already open, buy a dish whose recipe your Sim has not learned. **Finish eating it and check the learned-recipe notification**. Have the price ready."
      },
      "de": {
        "name": "Durch Essen lernen",
        "objective": "**Die Sims 4**: Kauf mit **Großstadtleben** an einem schon offenen Festivalstand ein Gericht, dessen Rezept dein Sim noch nicht kennt. **Iss es auf und prüfe die Meldung zum gelernten Rezept**. Halte den Preis bereit.",
        "gameObjective": "**Die Sims 4**: Kauf mit **Großstadtleben** an einem schon offenen Festivalstand ein Gericht, dessen Rezept dein Sim noch nicht kennt. **Iss es auf und prüfe die Meldung zum gelernten Rezept**. Halte den Preis bereit."
      }
    },
    "experience": {
      "family": "recipe-learning",
      "cardMetadata": { "genreIds": ["simulation"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["cooking"],
      "rules": [],
      "prerequisites": [
        {
          "en": "City Living; open food stall; recipe not learned",
          "de": "Großstadtleben; offener Essensstand; Rezept noch nicht gelernt",
          "chips": {"en": ["City Living", "Open food stall"], "de": ["Großstadtleben", "Essensstand"]},
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
    "gameGenreIds": ["simulation"]
  },
  {
    "id": "the-sims-s4-vet-patient-treatment",
    "moodIds": ["focused", "progress"],
    "type": "objective",
    "tags": ["animals"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "the-sims",
      "installmentIds": ["sims-4"]
    },
    "translations": {
      "en": {
        "name": "One Vet Patient",
        "objective": "In **The Sims 4**, with **Cats & Dogs**, **examine a waiting patient at your own vet clinic, identify its illness and give the indicated treatment**.",
        "gameObjective": "In **The Sims 4**, with **Cats & Dogs**, **examine a waiting patient at your own vet clinic, identify its illness and give the indicated treatment**."
      },
      "de": {
        "name": "Ein Tierarztpatient",
        "objective": "**Untersuche in Die Sims 4 mit Hunde & Katzen in deiner eigenen Tierklinik einen wartenden Patienten, bestimme seine Krankheit und gib die passende Behandlung**.",
        "gameObjective": "**Untersuche in Die Sims 4 mit Hunde & Katzen in deiner eigenen Tierklinik einen wartenden Patienten, bestimme seine Krankheit und gib die passende Behandlung**."
      }
    },
    "experience": {
      "family": "vet-treatment",
      "cardMetadata": { "genreIds": ["simulation"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["animals"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Cats & Dogs; owned vet clinic; waiting patient",
          "de": "Hunde & Katzen; eigene Tierklinik; wartender Patient",
          "chips": {"en": ["Cats & Dogs", "Vet clinic"], "de": ["Hunde & Katzen", "Tierklinik"]},
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
    "gameGenreIds": ["simulation"]
  },
  {
    "id": "the-sims-s4-flower-arrangement-table",
    "moodIds": ["create", "relax"],
    "type": "creation",
    "tags": ["decorating"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "the-sims",
      "installmentIds": ["sims-4"]
    },
    "translations": {
      "en": {
        "name": "Flowers for the Table",
        "objective": "In **The Sims 4**, with **Seasons**, a flower-arranging table and an affordable arrangement recipe available, **finish one arrangement and display it on your dining table**. Use owned flowers or pay for the missing ones.",
        "gameObjective": "In **The Sims 4**, with **Seasons**, a flower-arranging table and an affordable arrangement recipe available, **finish one arrangement and display it on your dining table**. Use owned flowers or pay for the missing ones."
      },
      "de": {
        "name": "Blumen für den Tisch",
        "objective": "**Die Sims 4**: **Stell mit Jahreszeiten, Blumentisch und einem bezahlbaren Rezept ein Blumengesteck fertig und stell es auf deinen Esstisch**. Nutze eigene Blumen oder bezahle die fehlenden.",
        "gameObjective": "**Die Sims 4**: **Stell mit Jahreszeiten, Blumentisch und einem bezahlbaren Rezept ein Blumengesteck fertig und stell es auf deinen Esstisch**. Nutze eigene Blumen oder bezahle die fehlenden."
      }
    },
    "gameGenreIds": ["simulation", "management"],
    "experience": {
      "family": "flower-arrangement",
      "cardMetadata": { "genreIds": ["simulation", "management"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["decorating"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Seasons; flower table; affordable recipe",
          "de": "Jahreszeiten; Blumentisch; bezahlbares Rezept",
          "chips": {"en": ["Seasons", "Flower table"], "de": ["Jahreszeiten", "Blumentisch"]},
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
    "id": "the-sims-s4-sulani-beach-cleanup",
    "moodIds": ["progress", "relax"],
    "type": "objective",
    "tags": ["exploration"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "the-sims",
      "installmentIds": ["sims-4"]
    },
    "translations": {
      "en": {
        "name": "A Cleaner Shore",
        "objective": "In **The Sims 4**, with **Island Living** and visible trash on a Sulani beach, **clear three pieces of beach trash**. The island’s full conservation progress can wait.",
        "gameObjective": "In **The Sims 4**, with **Island Living** and visible trash on a Sulani beach, **clear three pieces of beach trash**. The island’s full conservation progress can wait."
      },
      "de": {
        "name": "Ein saubereres Ufer",
        "objective": "**Die Sims 4**: **Räume mit Inselleben drei sichtbare Müllhaufen an einem Strand von Sulani weg**. Die gesamte Inselpflege kann warten.",
        "gameObjective": "**Die Sims 4**: **Räume mit Inselleben drei sichtbare Müllhaufen an einem Strand von Sulani weg**. Die gesamte Inselpflege kann warten."
      }
    },
    "experience": {
      "family": "beach-cleanup",
      "cardMetadata": { "genreIds": ["simulation"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["exploration"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Island Living; visible beach trash",
          "de": "Inselleben; sichtbarer Strandmüll",
          "chips": {"en": ["Island Living", "Beach trash"], "de": ["Inselleben", "Sichtbarer Strandmüll"]},
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
    "gameGenreIds": ["simulation"]
  },
  {
    "id": "the-sims-s4-robotics-toy-bot",
    "moodIds": ["create", "focused"],
    "type": "creation",
    "tags": ["crafting"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "the-sims",
      "installmentIds": ["sims-4"]
    },
    "translations": {
      "en": {
        "name": "A Little Robot",
        "objective": "In **The Sims 4**, with **Discover University**, a robotics workstation, Toy Bot unlocked and its parts ready, **build the toy and have a household Sim play with it**.",
        "gameObjective": "In **The Sims 4**, with **Discover University**, a robotics workstation, Toy Bot unlocked and its parts ready, **build the toy and have a household Sim play with it**."
      },
      "de": {
        "name": "Ein kleiner Roboter",
        "objective": "**Die Sims 4**: **Bau mit An die Uni, Robotikstation, freigeschaltetem Spielzeugroboter und vorhandenen Teilen den Roboter und lass einen Haushaltssim damit spielen**.",
        "gameObjective": "**Die Sims 4**: **Bau mit An die Uni, Robotikstation, freigeschaltetem Spielzeugroboter und vorhandenen Teilen den Roboter und lass einen Haushaltssim damit spielen**."
      }
    },
    "experience": {
      "family": "toy-build",
      "cardMetadata": { "genreIds": ["simulation"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["crafting"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Discover University; robotics station, Toy Bot and parts",
          "de": "An die Uni; Robotikstation, Spielzeugroboter und Teile",
          "chips": {"en": ["Discover University", "Robotics station"], "de": ["An die Uni", "Robotikstation"]},
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
    "gameGenreIds": ["simulation"]
  },
  {
    "id": "the-sims-s4-handmade-candle",
    "moodIds": ["create", "relax"],
    "type": "creation",
    "tags": ["crafting", "decorating"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "the-sims",
      "installmentIds": ["sims-4"]
    },
    "translations": {
      "en": {
        "name": "Light You Made",
        "objective": "In **The Sims 4**, with **Eco Lifestyle**, a candle-making table, wax and candle materials ready, **make one candle, place it at home and light it**.",
        "gameObjective": "In **The Sims 4**, with **Eco Lifestyle**, a candle-making table, wax and candle materials ready, **make one candle, place it at home and light it**."
      },
      "de": {
        "name": "Selbst gemachtes Licht",
        "objective": "**Die Sims 4**: **Stell mit Nachhaltig leben, Kerzentisch, Wachs und den übrigen Kerzenmaterialien eine Kerze her, stell sie zu Hause auf und zünde sie an**.",
        "gameObjective": "**Die Sims 4**: **Stell mit Nachhaltig leben, Kerzentisch, Wachs und den übrigen Kerzenmaterialien eine Kerze her, stell sie zu Hause auf und zünde sie an**."
      }
    },
    "gameGenreIds": ["simulation", "management"],
    "experience": {
      "family": "candle-making",
      "cardMetadata": { "genreIds": ["simulation", "management"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["crafting", "decorating"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Eco Lifestyle; candle table and materials",
          "de": "Nachhaltig leben; Kerzentisch und Materialien",
          "chips": {"en": ["Eco Lifestyle", "Candle table"], "de": ["Nachhaltig leben", "Kerzentisch"]},
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
    "id": "the-sims-s4-chocolate-cow-milk",
    "moodIds": ["curious", "progress"],
    "type": "objective",
    "tags": ["animals"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "the-sims",
      "installmentIds": ["sims-4"]
    },
    "translations": {
      "en": {
        "name": "Chocolate from the Cow",
        "objective": "In **The Sims 4**, with **Cottage Living**, an owned cow ready to milk and a Chocolatey Treat already owned, **feed the treat, milk the cow and collect chocolate milk**.",
        "gameObjective": "In **The Sims 4**, with **Cottage Living**, an owned cow ready to milk and a Chocolatey Treat already owned, **feed the treat, milk the cow and collect chocolate milk**."
      },
      "de": {
        "name": "Schokolade von der Kuh",
        "objective": "**Die Sims 4**: **Füttere mit Landhaus-Leben deine melkbereite Kuh mit einem vorhandenen Schoko-Leckerli, melke sie und sammle Schokomilch**.",
        "gameObjective": "**Die Sims 4**: **Füttere mit Landhaus-Leben deine melkbereite Kuh mit einem vorhandenen Schoko-Leckerli, melke sie und sammle Schokomilch**."
      }
    },
    "experience": {
      "family": "animal-feed",
      "cardMetadata": { "genreIds": ["simulation"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["animals"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Cottage Living; cow ready to milk; Chocolatey Treat",
          "de": "Landhaus-Leben; melkbereite Kuh; Schoko-Leckerli",
          "chips": {"en": ["Cottage Living", "Cow"], "de": ["Landhaus-Leben", "Kuh"]},
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
    "gameGenreIds": ["simulation"]
  },
  {
    "id": "the-sims-s4-short-climbing-route",
    "moodIds": ["challenge", "focused"],
    "type": "challenge",
    "tags": ["traversal", "three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "the-sims",
      "installmentIds": ["sims-4"]
    },
    "translations": {
      "en": {
        "name": "The Short Climb",
        "objective": "In **The Sims 4**, with **Snowy Escape** and a rock wall appropriate to your Sim’s current Climbing skill, **complete one climb**, or stop after three attempts. Use climbing gear if you own it.",
        "gameObjective": "In **The Sims 4**, with **Snowy Escape** and a rock wall appropriate to your Sim’s current Climbing skill, **complete one climb**, or stop after three attempts. Use climbing gear if you own it."
      },
      "de": {
        "name": "Der kurze Aufstieg",
        "objective": "**Die Sims 4**: **Schaffe mit Ab ins Schneeparadies an einer Felswand passend zur aktuellen Kletterstufe deines Sims einen Aufstieg**, oder hör nach drei Versuchen auf. Nutze Kletterausrüstung, falls du sie hast.",
        "gameObjective": "**Die Sims 4**: **Schaffe mit Ab ins Schneeparadies an einer Felswand passend zur aktuellen Kletterstufe deines Sims einen Aufstieg**, oder hör nach drei Versuchen auf. Nutze Kletterausrüstung, falls du sie hast."
      }
    },
    "experience": {
      "family": "climbing",
      "cardMetadata": { "genreIds": ["simulation"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["traversal"],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Snowy Escape; wall suitable for current skill",
          "de": "Ab ins Schneeparadies; Wand passend zur Kletterstufe",
          "chips": {"en": ["Snowy Escape", "Climbing wall"], "de": ["Ab ins Schneeparadies", "Kletterwand"]},
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
    "gameGenreIds": ["simulation"]
  },
  {
    "id": "the-sims-s4-cheer-solo-routine",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["rhythm"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "the-sims",
      "installmentIds": ["sims-4"]
    },
    "translations": {
      "en": {
        "name": "Try the Cheer Mat",
        "objective": "In **The Sims 4**, with **High School Years** and a cheerleading mat available, **have a teen Sim perform one solo routine and watch it to the end**. Any performance quality counts.",
        "gameObjective": "In **The Sims 4**, with **High School Years** and a cheerleading mat available, **have a teen Sim perform one solo routine and watch it to the end**. Any performance quality counts."
      },
      "de": {
        "name": "Auf die Cheerleading-Matte",
        "objective": "**Die Sims 4**: **Lass mit Highschool-Jahre einen Teenager an einer vorhandenen Cheerleading-Matte ein Soloprogramm vorführen und schau bis zum Ende zu**. Jede Qualität zählt.",
        "gameObjective": "**Die Sims 4**: **Lass mit Highschool-Jahre einen Teenager an einer vorhandenen Cheerleading-Matte ein Soloprogramm vorführen und schau bis zum Ende zu**. Jede Qualität zählt."
      }
    },
    "experience": {
      "family": "cheer-routine",
      "cardMetadata": { "genreIds": ["simulation"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["rhythm"],
      "rules": [],
      "prerequisites": [
        {
          "en": "High School Years; teen Sim and cheer mat",
          "de": "Highschool-Jahre; Teenager-Sim und Cheerleading-Matte",
          "chips": {"en": ["High School Years", "Cheer mat"], "de": ["Highschool-Jahre", "Cheerleading-Matte"]},
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
    "gameGenreIds": ["simulation"]
  },
  {
    "id": "the-sims-s3-skill-journal",
    "moodIds": ["progress", "focused"],
    "type": "objective",
    "tags": ["current-save"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "the-sims",
      "installmentIds": ["sims-3"]
    },
    "translations": {
      "en": {
        "name": "A Skill Journal Goal",
        "objective": "Open a Sim's skill journal, choose one visible milestone and **play until its counter moves at least once**.",
        "gameObjective": "Open a Sim's skill journal, choose one visible milestone and **play until its counter moves at least once**."
      },
      "de": {
        "name": "Ein Ziel im Fähigkeitstagebuch",
        "objective": "Öffne das Fähigkeitstagebuch eines Sims, such einen sichtbaren Meilenstein und **spiele, bis sein Zähler mindestens einmal steigt**.",
        "gameObjective": "Öffne das Fähigkeitstagebuch eines Sims, such einen sichtbaren Meilenstein und **spiele, bis sein Zähler mindestens einmal steigt**."
      }
    },
    "experience": {
      "family": "skill-milestone",
      "cardMetadata": { "genreIds": ["simulation"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["current-save"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Skill milestone with an achievable next step",
          "de": "Fähigkeitsmeilenstein mit erreichbarem nächstem Schritt",
          "chips": {"en": ["Skill milestone"], "de": ["Fähigkeitsmeilenstein"]},
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
    "gameGenreIds": ["simulation"]
  },
  {
    "id": "the-sims-s3-neighbor-drop-in",
    "moodIds": ["explore"],
    "type": "objective",
    "tags": ["dialogue"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "the-sims",
      "installmentIds": ["sims-3"]
    },
    "translations": {
      "en": {
        "name": "Visit the Neighbor",
        "objective": "Use the open neighborhood to **walk to an unfamiliar household, introduce your Sim, and learn one trait through conversation**.",
        "gameObjective": "Use the open neighborhood to **walk to an unfamiliar household, introduce your Sim, and learn one trait through conversation**."
      },
      "de": {
        "name": "Beim Nachbarn klingeln",
        "objective": "Lauf durch die offene Nachbarschaft zu einem unbekannten Haushalt, **stell deinen Sim vor und erfahre im Gespräch ein Merkmal**.",
        "gameObjective": "Lauf durch die offene Nachbarschaft zu einem unbekannten Haushalt, **stell deinen Sim vor und erfahre im Gespräch ein Merkmal**."
      }
    },
    "experience": {
      "family": "neighbor-visit",
      "cardMetadata": { "genreIds": ["simulation"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["dialogue"],
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
    "gameGenreIds": ["simulation"]
  },
  {
    "id": "the-sims-s3-opportunity",
    "moodIds": ["progress"],
    "type": "objective",
    "tags": ["story"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "the-sims",
      "installmentIds": ["sims-3"]
    },
    "translations": {
      "en": {
        "name": "Take the Opportunity",
        "objective": "Accept an available Opportunity and **finish one step that takes your Sim outside the home lot**.",
        "gameObjective": "Accept an available Opportunity and **finish one step that takes your Sim outside the home lot**."
      },
      "de": {
        "name": "Eine Gelegenheit nutzen",
        "objective": "Nimm eine verfügbare Gelegenheit an und **erledige einen Schritt außerhalb des Wohngrundstücks**.",
        "gameObjective": "Nimm eine verfügbare Gelegenheit an und **erledige einen Schritt außerhalb des Wohngrundstücks**."
      }
    },
    "experience": {
      "family": "opportunity",
      "cardMetadata": { "genreIds": ["simulation"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Available Opportunity",
          "de": "Verfügbare Gelegenheit",
          "chips": {"en": ["Opportunity"], "de": ["Gelegenheit"]},
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
    "gameGenreIds": ["simulation"]
  },
  {
    "id": "the-sims-s3-collectible-cut",
    "moodIds": ["create", "relax"],
    "type": "creation",
    "tags": ["collectibles", "decorating"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "the-sims",
      "installmentIds": ["sims-3"]
    },
    "translations": {
      "en": {
        "name": "A Gem on Display",
        "objective": "In **The Sims 3**, collect an already cut gem from your mailbox or inventory. **Display it somewhere at home where it stands out**.",
        "gameObjective": "In **The Sims 3**, collect an already cut gem from your mailbox or inventory. **Display it somewhere at home where it stands out**."
      },
      "de": {
        "name": "Ein Fund zum Ausstellen",
        "objective": "Hol in **Die Sims 3** einen bereits geschliffenen Edelstein aus dem Briefkasten oder Inventar. **Stell ihn zu Hause dort aus, wo er zur Geltung kommt**.",
        "gameObjective": "Hol in **Die Sims 3** einen bereits geschliffenen Edelstein aus dem Briefkasten oder Inventar. **Stell ihn zu Hause dort aus, wo er zur Geltung kommt**."
      }
    },
    "experience": {
      "family": "gem-cutting",
      "cardMetadata": { "genreIds": ["simulation"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["collectibles", "decorating"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Bereits geschliffener Edelstein in Post oder Inventar",
          "en": "Already cut gem in mail or inventory",
          "chips": {"en": ["Cut gem"], "de": ["Geschliffener Edelstein"]},
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
    "gameGenreIds": ["simulation"]
  },
  {
    "id": "the-sims-s3-cemetery-story",
    "moodIds": ["explore"],
    "type": "inspiration",
    "tags": ["story"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "the-sims",
      "installmentIds": ["sims-3"]
    },
    "translations": {
      "en": {
        "name": "Read the Town's Past",
        "objective": "In The Sims 3, visit the town cemetery and **browse the gravestones**. Look for a name or family that connects to the neighborhood you know.",
        "gameObjective": "In The Sims 3, visit the town cemetery and **browse the gravestones**. Look for a name or family that connects to the neighborhood you know."
      },
      "de": {
        "name": "Die Geschichte der Stadt",
        "objective": "Besuche in Die Sims 3 den Friedhof der Stadt und **schau dir die Grabsteine an**. Such nach einem Namen oder einer Familie, die zu deiner vertrauten Nachbarschaft gehört.",
        "gameObjective": "Besuche in Die Sims 3 den Friedhof der Stadt und **schau dir die Grabsteine an**. Such nach einem Namen oder einer Familie, die zu deiner vertrauten Nachbarschaft gehört."
      }
    },
    "experience": {
      "family": "cemetery-roaming",
      "cardMetadata": { "genreIds": ["simulation"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["story"],
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
    "gameGenreIds": ["simulation"]
  },
  {
    "id": "the-sims-s3-career-errand",
    "moodIds": ["progress"],
    "type": "objective",
    "tags": ["current-save"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "the-sims",
      "installmentIds": ["sims-3"]
    },
    "translations": {
      "en": {
        "name": "After-Work Errand",
        "objective": "Check a working Sim's career panel and **complete one job-related task away from their rabbit-hole workplace**.",
        "gameObjective": "Check a working Sim's career panel and **complete one job-related task away from their rabbit-hole workplace**."
      },
      "de": {
        "name": "Auftrag nach der Arbeit",
        "objective": "Schau ins Karrierefenster eines berufstätigen Sims und **erledige eine Aufgabe für den Job außerhalb des Arbeitsplatzes**.",
        "gameObjective": "Schau ins Karrierefenster eines berufstätigen Sims und **erledige eine Aufgabe für den Job außerhalb des Arbeitsplatzes**."
      }
    },
    "experience": {
      "family": "career-task",
      "cardMetadata": { "genreIds": ["simulation"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "en": "Achievable career task outside workplace",
          "de": "Machbare Karriereaufgabe außerhalb des Arbeitsplatzes",
          "chips": {"en": ["Career task"], "de": ["Karriereaufgabe"]},
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
    "gameGenreIds": ["simulation"]
  },
  {
    "id": "the-sims-s4-emotion-room",
    "moodIds": ["create"],
    "type": "creation",
    "tags": ["decorating"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "the-sims",
      "installmentIds": ["sims-4"]
    },
    "translations": {
      "en": {
        "name": "A Room with a Mood",
        "objective": "In **The Sims 4**, with an owned object that has an emotional aura, **arrange a small corner around it, enable its aura, and have your Sim spend time there**. See how the space affects their mood; a particular emotion is optional.",
        "gameObjective": "In **The Sims 4**, with an owned object that has an emotional aura, **arrange a small corner around it, enable its aura, and have your Sim spend time there**. See how the space affects their mood; a particular emotion is optional."
      },
      "de": {
        "name": "Ein Raum für eine Stimmung",
        "objective": "Richte in **Die Sims 4** mit einem vorhandenen Objekt mit emotionaler Aura **eine kleine Ecke ein, aktiviere die Aura und lass deinen Sim dort Zeit verbringen**. Schau, wie der Raum seine Stimmung beeinflusst; eine bestimmte Emotion ist optional.",
        "gameObjective": "Richte in **Die Sims 4** mit einem vorhandenen Objekt mit emotionaler Aura **eine kleine Ecke ein, aktiviere die Aura und lass deinen Sim dort Zeit verbringen**. Schau, wie der Raum seine Stimmung beeinflusst; eine bestimmte Emotion ist optional."
      }
    },
    "gameGenreIds": ["simulation", "management"],
    "experience": {
      "family": "emotion-corner",
      "cardMetadata": { "genreIds": ["simulation", "management"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["decorating"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Owned object with emotional aura",
          "de": "Vorhandenes Objekt mit emotionaler Aura",
          "chips": {"en": ["Emotional aura"], "de": ["Emotionale Aura"]},
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
    "id": "the-sims-s4-whim-reward",
    "moodIds": ["progress"],
    "type": "objective",
    "tags": ["current-save"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "the-sims",
      "installmentIds": ["sims-4"]
    },
    "translations": {
      "en": {
        "name": "Spend the Satisfaction",
        "objective": "Earn enough Satisfaction Points from a visible goal and **buy one reward trait for the Sim who earned them**.",
        "gameObjective": "Earn enough Satisfaction Points from a visible goal and **buy one reward trait for the Sim who earned them**."
      },
      "de": {
        "name": "Zufriedenheit ausgeben",
        "objective": "Verdiene mit einem sichtbaren Ziel genug Zufriedenheitspunkte und **kaufe dem betreffenden Sim eine Belohnungseigenschaft**.",
        "gameObjective": "Verdiene mit einem sichtbaren Ziel genug Zufriedenheitspunkte und **kaufe dem betreffenden Sim eine Belohnungseigenschaft**."
      }
    },
    "experience": {
      "family": "satisfaction-reward",
      "cardMetadata": { "genreIds": ["simulation"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["current-save"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Reachable goal and affordable reward trait",
          "de": "Erreichbares Ziel und bezahlbare Belohnungseigenschaft",
          "chips": {"en": ["Reward trait"], "de": ["Belohnungseigenschaft"]},
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
    "gameGenreIds": ["simulation"]
  },
  {
    "id": "the-sims-s4-cas-identity",
    "moodIds": ["create"],
    "type": "creation",
    "tags": ["outfit"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "the-sims",
      "installmentIds": ["sims-4"]
    },
    "translations": {
      "en": {
        "name": "An Outfit for a Role",
        "objective": "In Create a Sim, **make a second outfit for one occasion, then wear it during that occasion in live mode**.",
        "gameObjective": "In Create a Sim, **make a second outfit for one occasion, then wear it during that occasion in live mode**."
      },
      "de": {
        "name": "Ein Outfit für einen Anlass",
        "objective": "Erstelle in **Die Sims 4** in Create a Sim **ein zweites Outfit für einen Anlass und lass deinen Sim es bei diesem Anlass tragen**.",
        "gameObjective": "Erstelle in **Die Sims 4** in Create a Sim **ein zweites Outfit für einen Anlass und lass deinen Sim es bei diesem Anlass tragen**."
      }
    },
    "experience": {
      "family": "outfit",
      "cardMetadata": { "genreIds": ["simulation"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["outfit"],
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
    "gameGenreIds": ["simulation"]
  },
  {
    "id": "the-sims-s4-neighborhood-stories",
    "moodIds": ["curious"],
    "type": "objective",
    "tags": ["story"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "the-sims",
      "installmentIds": ["sims-4"]
    },
    "translations": {
      "en": {
        "name": "What Happened Next Door?",
        "objective": "In **The Sims 4**, read the latest Neighborhood Stories update at the mailbox. **Visit the household it concerns and see how their daily life has changed**.",
        "gameObjective": "In **The Sims 4**, read the latest Neighborhood Stories update at the mailbox. **Visit the household it concerns and see how their daily life has changed**."
      },
      "de": {
        "name": "Was ist nebenan passiert?",
        "objective": "Prüfe in **Die Sims 4** am Briefkasten die neueste Nachricht aus den Nachbarschaftsgeschichten. **Besuch den betreffenden Haushalt und schau, wie sich sein Alltag verändert hat**.",
        "gameObjective": "Prüfe in **Die Sims 4** am Briefkasten die neueste Nachricht aus den Nachbarschaftsgeschichten. **Besuch den betreffenden Haushalt und schau, wie sich sein Alltag verändert hat**."
      }
    },
    "experience": {
      "family": "neighbor-news",
      "cardMetadata": { "genreIds": ["simulation"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Nachbarschaftsgeschichten aktiviert; Nachricht zu einem besuchbaren Haushalt",
          "en": "Neighborhood Stories enabled; update about a household you can visit",
          "chips": {"en": ["Neighborhood Stories"], "de": ["Nachbarschaftsnews"]},
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
    "gameGenreIds": ["simulation"]
  },
  {
    "id": "the-sims-s4-event-host",
    "moodIds": ["progress"],
    "type": "objective",
    "tags": ["dialogue"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "the-sims",
      "installmentIds": ["sims-4"]
    },
    "translations": {
      "en": {
        "name": "Host a Small Event",
        "objective": "Plan a social event at your lot and **complete one event goal with a guest** before the event ends.",
        "gameObjective": "Plan a social event at your lot and **complete one event goal with a guest** before the event ends."
      },
      "de": {
        "name": "Ein kleines Treffen",
        "objective": "Plane ein gesellschaftliches Ereignis auf deinem Grundstück und **erledige mit einem Gast ein Ereignisziel**, bevor es endet.",
        "gameObjective": "Plane ein gesellschaftliches Ereignis auf deinem Grundstück und **erledige mit einem Gast ein Ereignisziel**, bevor es endet."
      }
    },
    "experience": {
      "family": "social-event",
      "cardMetadata": { "genreIds": ["simulation"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["dialogue"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Event funds and available guests",
          "de": "Eventbudget und verfügbare Gäste",
          "chips": {"en": ["Event guests"], "de": ["Eventgäste"]},
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
    "gameGenreIds": ["simulation"]
  },
  {
    "id": "the-sims-s4-gallery-remix",
    "moodIds": ["create"],
    "type": "creation",
    "tags": ["building"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "the-sims",
      "installmentIds": ["sims-4"]
    },
    "translations": {
      "en": {
        "name": "Remix One Room",
        "objective": "Download or place a Gallery room and **replace one whole feature with your own idea before using it in live mode**.",
        "gameObjective": "Download or place a Gallery room and **replace one whole feature with your own idea before using it in live mode**."
      },
      "de": {
        "name": "Ein Zimmer neu mischen",
        "objective": "Platziere ein Zimmer aus der Galerie und **ändere einen ganzen Bereich nach deiner Idee**, bevor du es im Live-Modus nutzt.",
        "gameObjective": "Platziere ein Zimmer aus der Galerie und **ändere einen ganzen Bereich nach deiner Idee**, bevor du es im Live-Modus nutzt."
      }
    },
    "gameGenreIds": ["simulation", "management"],
    "experience": {
      "family": "room-remix",
      "cardMetadata": { "genreIds": ["simulation", "management"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["building"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Gallery room available; building funds",
          "de": "Galeriezimmer verfügbar; Baubudget",
          "chips": {"en": ["Gallery room", "Building funds"], "de": ["Galeriezimmer", "Baubudget"]},
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
          "mode": "Gallery download and independent Build Mode"
        }
      ]
    }
  },
  {
    "id": "the-sims-s4-career-choice",
    "moodIds": ["focused"],
    "type": "objective",
    "tags": ["story"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "the-sims",
      "installmentIds": ["sims-4"]
    },
    "translations": {
      "en": {
        "name": "One Career Step",
        "objective": "Check the next promotion requirement and **complete one specific skill or daily-task step** for it.",
        "gameObjective": "Check the next promotion requirement and **complete one specific skill or daily-task step** for it."
      },
      "de": {
        "name": "Ein Schritt im Beruf",
        "objective": "Schau dir die nächste Beförderung an und **erledige genau einen Schritt bei Fähigkeit oder Tagesaufgabe**.",
        "gameObjective": "Schau dir die nächste Beförderung an und **erledige genau einen Schritt bei Fähigkeit oder Tagesaufgabe**."
      }
    },
    "experience": {
      "family": "career-task",
      "cardMetadata": { "genreIds": ["simulation"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Available promotion task",
          "de": "Verfügbare Beförderungsaufgabe",
          "chips": {"en": ["Promotion task"], "de": ["Beförderungsaufgabe"]},
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
    "gameGenreIds": ["simulation"]
  }
]);
