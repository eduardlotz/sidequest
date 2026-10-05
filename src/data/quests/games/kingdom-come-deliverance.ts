import { defineQuests } from "../defineQuests";

export const GamesKingdomComeDeliveranceQuests = defineQuests([
  {
    "id": "kingdom-come-deliverance-an-honest-night",
    "moodIds": ["progress", "focused"],
    "type": "objective",
    "tags": ["crafting", "trading"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "universal": false,
    "curated": {
      "gameId": "kingdom-come-deliverance",
      "installmentIds": ["kcd-1"]
    },
    "translations": {
      "en": {
        "name": "An Honest Night",
        "objective": "In **Kingdom Come: Deliverance (1)**, with the Marigold Decoction recipe known, gather nettles and marigolds and brew by hand. Sell your potions and **pay for an available inn room from those earnings**. No bought herbs or stolen goods.",
        "gameObjective": "In **Kingdom Come: Deliverance (1)**, with the Marigold Decoction recipe known, gather nettles and marigolds and brew by hand. Sell your potions and **pay for an available inn room from those earnings**. No bought herbs or stolen goods."
      },
      "de": {
        "name": "Ehrlich verdient",
        "objective": "Wenn du in **Kingdom Come: Deliverance (1)** das Rezept für Ringelblumentrank kennst, sammle Brennnesseln und Ringelblumen und brau den Trank selbst. Verkaufe die Tränke und **bezahle von den Einnahmen ein verfügbares Bett im Gasthaus**. Keine gekauften Kräuter oder gestohlenen Waren.",
        "gameObjective": "Wenn du in **Kingdom Come: Deliverance (1)** das Rezept für Ringelblumentrank kennst, sammle Brennnesseln und Ringelblumen und brau den Trank selbst. Verkaufe die Tränke und **bezahle von den Einnahmen ein verfügbares Bett im Gasthaus**. Keine gekauften Kräuter oder gestohlenen Waren."
      }
    },
    "experience": {
      "family": "night-lodging",
      "cardMetadata": { "genreIds": ["rpg"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["crafting", "trading"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Marigold recipe known; alchemy access",
          "de": "Ringelblumenrezept bekannt; Alchemiezugang",
          "chips": {"en": ["Marigold recipe", "Alchemy access"], "de": ["Ringelblumenrezept", "Alchemiezugang"]},
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
    "gameGenreIds": ["rpg"],
    "rarity": "special"
  },
  {
    "id": "kingdom-come-deliverance-treasure-by-landmarks",
    "moodIds": ["explore", "curious"],
    "type": "objective",
    "tags": ["exploration"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "universal": false,
    "curated": {
      "gameId": "kingdom-come-deliverance",
      "installmentIds": ["kcd-1"]
    },
    "translations": {
      "en": {
        "name": "Read the Landscape",
        "objective": "In **Kingdom Come: Deliverance (1)**, bring a spade, lockpicks, and an unsolved treasure map for an accessible region. Use its roads, rivers, and buildings to **find and open that treasure chest**.",
        "gameObjective": "In **Kingdom Come: Deliverance (1)**, bring a spade, lockpicks, and an unsolved treasure map for an accessible region. Use its roads, rivers, and buildings to **find and open that treasure chest**."
      },
      "de": {
        "name": "Die Landschaft lesen",
        "objective": "Nimm in **Kingdom Come: Deliverance (1)** einen Spaten, Dietriche und eine ungelöste Schatzkarte für eine erreichbare Gegend mit. Orientiere dich an ihren Straßen, Flüssen und Gebäuden, um **die Schatztruhe zu finden und zu öffnen**.",
        "gameObjective": "Nimm in **Kingdom Come: Deliverance (1)** einen Spaten, Dietriche und eine ungelöste Schatzkarte für eine erreichbare Gegend mit. Orientiere dich an ihren Straßen, Flüssen und Gebäuden, um **die Schatztruhe zu finden und zu öffnen**."
      }
    },
    "experience": {
      "family": "treasure-clue",
      "cardMetadata": { "genreIds": ["rpg"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["exploration"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Ungelöste erreichbare Schatzkarte; Spaten; Dietriche und Können für ihr Schloss",
          "en": "Unsolved accessible treasure map; spade; lockpicks and skill for its lock",
          "chips": {"en": ["Treasure map", "Spade"], "de": ["Schatzkarte", "Spaten"]},
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
    "gameGenreIds": ["rpg"],
    "rarity": "special"
  },
  {
    "id": "kingdom-come-deliverance-forge-and-equip",
    "moodIds": ["create", "progress"],
    "type": "creation",
    "tags": ["crafting"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "kingdom-come-deliverance",
      "installmentIds": ["kcd-2"]
    },
    "translations": {
      "en": {
        "name": "Made by Henry",
        "objective": "After learning smithing in **Kingdom Come: Deliverance II**, bring the materials for a sword sketch you own. Heat and hammer the blade yourself, then **finish and equip your own sword**.",
        "gameObjective": "After learning smithing in **Kingdom Come: Deliverance II**, bring the materials for a sword sketch you own. Heat and hammer the blade yourself, then **finish and equip your own sword**."
      },
      "de": {
        "name": "Von Heinrich gemacht",
        "objective": "Wenn du in **Kingdom Come: Deliverance II** Schmieden gelernt hast und eine Schwertskizze besitzt, besorg die Materialien dafür. **Schmiede das Schwert selbst und rüste es aus**.",
        "gameObjective": "Wenn du in **Kingdom Come: Deliverance II** Schmieden gelernt hast und eine Schwertskizze besitzt, besorg die Materialien dafür. **Schmiede das Schwert selbst und rüste es aus**."
      }
    },
    "experience": {
      "family": "sword-forging",
      "cardMetadata": { "genreIds": ["rpg"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["crafting"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Smithing learned; sword sketch; materials",
          "de": "Schmieden gelernt; Schwertskizze; Material",
          "chips": {"en": ["Sword sketch"], "de": ["Schwertskizze"]},
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
    "gameGenreIds": ["rpg"],
    "rarity": "special"
  },
  {
    "id": "kingdom-come-deliverance-kcd2-ordinary-dice",
    "moodIds": ["relax", "low-energy"],
    "type": "inspiration",
    "tags": ["no-timer"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "kingdom-come-deliverance",
      "installmentIds": ["kcd-2"]
    },
    "translations": {
      "en": {
        "name": "At the Dice Table",
        "objective": "In Kingdom Come: Deliverance II, **settle into tavern dice** with a small stake you can spare. Play at the table’s pace and let the next errand wait.",
        "gameObjective": "In Kingdom Come: Deliverance II, **settle into tavern dice** with a small stake you can spare. Play at the table’s pace and let the next errand wait."
      },
      "de": {
        "name": "Am Würfeltisch",
        "objective": "Setz dich in Kingdom Come: Deliverance II mit einem kleinen übrigen Einsatz **zum Würfeln ins Wirtshaus**. Spiel im Tempo des Tisches und lass den nächsten Auftrag warten.",
        "gameObjective": "Setz dich in Kingdom Come: Deliverance II mit einem kleinen übrigen Einsatz **zum Würfeln ins Wirtshaus**. Spiel im Tempo des Tisches und lass den nächsten Auftrag warten."
      }
    },
    "experience": {
      "family": "dice-roaming",
      "cardMetadata": { "genreIds": ["rpg"], "playStyleIds": [] },
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
    "gameGenreIds": ["rpg"]
  },
  {
    "id": "kingdom-come-deliverance-bernhard-counter",
    "moodIds": ["challenge", "focused"],
    "type": "challenge",
    "tags": ["parry"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "kingdom-come-deliverance",
      "installmentIds": ["kcd-1"]
    },
    "translations": {
      "en": {
        "name": "Wait for the Swing",
        "objective": "Once Bernard offers practice and you know perfect blocks in **Kingdom Come: Deliverance (1)**, start a practice sword fight. Attack only immediately after a perfect block and **land three counterattacks before ending practice**.",
        "gameObjective": "Once Bernard offers practice and you know perfect blocks in **Kingdom Come: Deliverance (1)**, start a practice sword fight. Attack only immediately after a perfect block and **land three counterattacks before ending practice**."
      },
      "de": {
        "name": "Warte auf den Schlag",
        "objective": "Beginne in **Kingdom Come: Deliverance (1)** einen Übungskampf mit Bernard, sobald du perfekte Blocks kennst. Greife nur direkt nach einem perfekten Block an und **lande drei Gegenangriffe, bevor du das Training beendest**.",
        "gameObjective": "Beginne in **Kingdom Come: Deliverance (1)** einen Übungskampf mit Bernard, sobald du perfekte Blocks kennst. Greife nur direkt nach einem perfekten Block an und **lande drei Gegenangriffe, bevor du das Training beendest**."
      }
    },
    "experience": {
      "family": "counter-sparring",
      "cardMetadata": { "genreIds": ["rpg"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["parry"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Bernard practice; perfect blocks learned",
          "de": "Bernard-Training; perfekte Blocks gelernt",
          "chips": {"en": ["Bernard practice"], "de": ["Bernard-Training"]},
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
    "gameGenreIds": ["rpg"]
  },
  {
    "id": "kingdom-come-deliverance-fresh-and-dried",
    "moodIds": ["curious", "create"],
    "type": "experiment",
    "tags": ["crafting", "new-approach"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "universal": false,
    "curated": {
      "gameId": "kingdom-come-deliverance",
      "installmentIds": ["kcd-2"]
    },
    "translations": {
      "en": {
        "name": "Fresh or Dried",
        "objective": "In **Kingdom Come: Deliverance II**, with an alchemy bench and drying rack accessible, gather herbs for two Marigold Decoctions. Dry one batch. **Brew both with the same steps and compare their quality** in your inventory.",
        "gameObjective": "In **Kingdom Come: Deliverance II**, with an alchemy bench and drying rack accessible, gather herbs for two Marigold Decoctions. Dry one batch. **Brew both with the same steps and compare their quality** in your inventory."
      },
      "de": {
        "name": "Frisch oder getrocknet",
        "objective": "Sammle in **Kingdom Come: Deliverance II** Kräuter für zwei Ringelblumentränke. Trockne eine Portion. **Brau beide Tränke mit denselben Schritten und vergleiche ihre Qualität** im Inventar. Du brauchst dafür Alchemietisch und Trockengestell.",
        "gameObjective": "Sammle in **Kingdom Come: Deliverance II** Kräuter für zwei Ringelblumentränke. Trockne eine Portion. **Brau beide Tränke mit denselben Schritten und vergleiche ihre Qualität** im Inventar. Du brauchst dafür Alchemietisch und Trockengestell."
      }
    },
    "experience": {
      "family": "food-drying",
      "cardMetadata": { "genreIds": ["rpg"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["crafting"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Alchemy bench; drying rack; ingredients",
          "de": "Alchemietisch; Trockengestell; Zutaten",
          "chips": {"en": ["Alchemy bench", "Drying rack"], "de": ["Alchemietisch", "Trockengestell"]},
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
    "gameGenreIds": ["rpg"]
  },
  {
    "id": "kingdom-come-deliverance-kcd1-chumps-logs",
    "moodIds": ["curious", "restless"],
    "type": "objective",
    "tags": ["one-round"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "kingdom-come-deliverance",
      "installmentIds": ["kcd-1"]
    },
    "translations": {
      "en": {
        "name": "Logs on the River",
        "objective": "Join Chumps with Vatzek in Ledetchko in **Kingdom Come: Deliverance**. **Finish one contest shooting the drifting logs**, following them along the riverbank. You do not need to win.",
        "gameObjective": "Join Chumps with Vatzek in Ledetchko in **Kingdom Come: Deliverance**. **Finish one contest shooting the drifting logs**, following them along the riverbank. You do not need to win."
      },
      "de": {
        "name": "Stämme auf dem Fluss",
        "objective": "Spiel in **Kingdom Come: Deliverance** bei Vatzek in Ledetschko das Bogenspiel auf dem Fluss. **Schieß eine Partie lang auf die treibenden Stämme** und folge ihnen am Ufer. Gewinnen musst du nicht.",
        "gameObjective": "Spiel in **Kingdom Come: Deliverance** bei Vatzek in Ledetschko das Bogenspiel auf dem Fluss. **Schieß eine Partie lang auf die treibenden Stämme** und folge ihnen am Ufer. Gewinnen musst du nicht."
      }
    },
    "experience": {
      "family": "river-archery",
      "cardMetadata": { "genreIds": ["rpg"], "playStyleIds": [] },
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
    "gameGenreIds": ["rpg"]
  },
  {
    "id": "kingdom-come-deliverance-kcd1-range-score",
    "moodIds": ["focused", "challenge"],
    "type": "challenge",
    "tags": ["three-attempts"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "kingdom-come-deliverance",
      "installmentIds": ["kcd-1"]
    },
    "translations": {
      "en": {
        "name": "Rattay Targets",
        "objective": "With a bow and arrows in **Kingdom Come: Deliverance**, enter a beginner archery contest in Rattay. **Win one contest** or stop after three entries.",
        "gameObjective": "With a bow and arrows in **Kingdom Come: Deliverance**, enter a beginner archery contest in Rattay. **Win one contest** or stop after three entries."
      },
      "de": {
        "name": "Scheiben in Rattay",
        "objective": "Nimm in **Kingdom Come: Deliverance** mit Bogen und Pfeilen am Anfänger-Bogenturnier in Rattay teil. **Gewinne eine Partie** oder hör nach drei Teilnahmen auf.",
        "gameObjective": "Nimm in **Kingdom Come: Deliverance** mit Bogen und Pfeilen am Anfänger-Bogenturnier in Rattay teil. **Gewinne eine Partie** oder hör nach drei Teilnahmen auf."
      }
    },
    "experience": {
      "family": "archery",
      "cardMetadata": { "genreIds": ["rpg"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Bow; arrows; entry money",
          "de": "Bogen; Pfeile; Eintrittsgeld",
          "chips": {"en": ["Bow", "Arrows"], "de": ["Bogen", "Pfeile"]},
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
    "gameGenreIds": ["rpg"]
  },
  {
    "id": "kingdom-come-deliverance-kcd1-peshek-chest",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["stealth"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "kingdom-come-deliverance",
      "installmentIds": ["kcd-1"]
    },
    "translations": {
      "en": {
        "name": "Peshek’s Practice Lock",
        "objective": "After Peshek’s lockpicking lesson in **Kingdom Come: Deliverance**, **pick the lock on his practice chest and watch how the sweet spot moves as you turn it**.",
        "gameObjective": "After Peshek’s lockpicking lesson in **Kingdom Come: Deliverance**, **pick the lock on his practice chest and watch how the sweet spot moves as you turn it**."
      },
      "de": {
        "name": "Pescheks Übungsschloss",
        "objective": "Benutze in **Kingdom Come: Deliverance** nach Pescheks Dietrich-Unterricht seine Übungstruhe. **Knack das Schloss und achte darauf, wie sich der richtige Punkt beim Drehen bewegt**.",
        "gameObjective": "Benutze in **Kingdom Come: Deliverance** nach Pescheks Dietrich-Unterricht seine Übungstruhe. **Knack das Schloss und achte darauf, wie sich der richtige Punkt beim Drehen bewegt**."
      }
    },
    "experience": {
      "family": "lockpicking",
      "cardMetadata": { "genreIds": ["rpg"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["stealth"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Peshek’s lockpicking lesson completed",
          "de": "Pescheks Dietrich-Unterricht abgeschlossen",
          "chips": {"en": ["Lockpicking lesson"], "de": ["Dietrich-Unterricht"]},
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
    "gameGenreIds": ["rpg"]
  },
  {
    "id": "kingdom-come-deliverance-kcd1-pickpocket-lesson",
    "moodIds": ["curious", "focused"],
    "type": "objective",
    "tags": ["stealth"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "kingdom-come-deliverance",
      "installmentIds": ["kcd-1"]
    },
    "translations": {
      "en": {
        "name": "The Miller’s Pocket",
        "objective": "When Peshek offers pickpocket training in **Kingdom Come: Deliverance**, take his lesson. **Complete the tutorial theft and return the practice item** as he instructs.",
        "gameObjective": "When Peshek offers pickpocket training in **Kingdom Come: Deliverance**, take his lesson. **Complete the tutorial theft and return the practice item** as he instructs."
      },
      "de": {
        "name": "Die Tasche des Müllers",
        "objective": "Nimm in **Kingdom Come: Deliverance** Pescheks Unterricht im Taschendiebstahl an, sobald er ihn anbietet. **Besteh den Übungsdiebstahl und gib den Gegenstand zurück**, wie er es dir erklärt.",
        "gameObjective": "Nimm in **Kingdom Come: Deliverance** Pescheks Unterricht im Taschendiebstahl an, sobald er ihn anbietet. **Besteh den Übungsdiebstahl und gib den Gegenstand zurück**, wie er es dir erklärt."
      }
    },
    "experience": {
      "family": "pickpocket",
      "cardMetadata": { "genreIds": ["rpg"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["stealth"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Peshek training available",
          "de": "Pescheks Unterricht verfügbar",
          "chips": {"en": ["Peshek training"], "de": ["Pescheks Unterricht"]},
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
    "gameGenreIds": ["rpg"]
  },
  {
    "id": "kingdom-come-deliverance-kcd1-clean-charisma",
    "moodIds": ["curious"],
    "type": "experiment",
    "tags": ["outfit"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "kingdom-come-deliverance",
      "installmentIds": ["kcd-1"]
    },
    "translations": {
      "en": {
        "name": "Dirt and First Impressions",
        "objective": "Before using a bathhouse in **Kingdom Come: Deliverance**, note Henry’s charisma in his current clothes. Buy a wash and laundry, then **compare charisma in the same outfit afterward**.",
        "gameObjective": "Before using a bathhouse in **Kingdom Come: Deliverance**, note Henry’s charisma in his current clothes. Buy a wash and laundry, then **compare charisma in the same outfit afterward**."
      },
      "de": {
        "name": "Dreck und Auftreten",
        "objective": "Merk dir in **Kingdom Come: Deliverance** vor dem Badehaus Heinrichs Charisma in seiner aktuellen Kleidung. Lass dich und die Kleidung waschen und **vergleiche danach das Charisma im selben Outfit**.",
        "gameObjective": "Merk dir in **Kingdom Come: Deliverance** vor dem Badehaus Heinrichs Charisma in seiner aktuellen Kleidung. Lass dich und die Kleidung waschen und **vergleiche danach das Charisma im selben Outfit**."
      }
    },
    "experience": {
      "family": "bath-outfit",
      "cardMetadata": { "genreIds": ["rpg"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["outfit"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Wash and laundry money",
          "de": "Geld für Waschen und Wäsche",
          "chips": {"en": ["Bathhouse funds"], "de": ["Badehausgeld"]},
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
    "gameGenreIds": ["rpg"]
  },
  {
    "id": "kingdom-come-deliverance-kcd1-noisy-armor",
    "moodIds": ["curious", "create"],
    "type": "experiment",
    "tags": ["stealth", "outfit"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "kingdom-come-deliverance",
      "installmentIds": ["kcd-1"]
    },
    "translations": {
      "en": {
        "name": "Hear the Armour",
        "objective": "In **Kingdom Come: Deliverance**, check your noise value with your usual armour. Remove the loudest pieces and **walk the same short route in both outfits**, comparing sound and the displayed value.",
        "gameObjective": "In **Kingdom Come: Deliverance**, check your noise value with your usual armour. Remove the loudest pieces and **walk the same short route in both outfits**, comparing sound and the displayed value."
      },
      "de": {
        "name": "Die Rüstung hören",
        "objective": "Prüfe in **Kingdom Come: Deliverance** den Geräuschwert deiner normalen Rüstung. Leg die lautesten Teile ab und **geh dieselbe kurze Strecke in beiden Outfits**. Vergleiche Klang und angezeigten Wert.",
        "gameObjective": "Prüfe in **Kingdom Come: Deliverance** den Geräuschwert deiner normalen Rüstung. Leg die lautesten Teile ab und **geh dieselbe kurze Strecke in beiden Outfits**. Vergleiche Klang und angezeigten Wert."
      }
    },
    "experience": {
      "family": "armor-noise",
      "cardMetadata": { "genreIds": ["rpg"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["stealth", "outfit"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Owned armor layers",
          "de": "Eigene Rüstungsschichten",
          "chips": {"en": ["Armor layers"], "de": ["Rüstungsschichten"]},
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
    "gameGenreIds": ["rpg"]
  },
  {
    "id": "kingdom-come-deliverance-kcd1-sharpen-price",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["trading", "crafting"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "kingdom-come-deliverance",
      "installmentIds": ["kcd-1"]
    },
    "translations": {
      "en": {
        "name": "Steel’s Selling Price",
        "objective": "With a damaged sword and legal grindstone access in **Kingdom Come: Deliverance**, check a smith’s offer before sharpening. **Sharpen it yourself and compare the new offer**, without buying a repair.",
        "gameObjective": "With a damaged sword and legal grindstone access in **Kingdom Come: Deliverance**, check a smith’s offer before sharpening. **Sharpen it yourself and compare the new offer**, without buying a repair."
      },
      "de": {
        "name": "Der Preis der Klinge",
        "objective": "Prüfe in **Kingdom Come: Deliverance** mit beschädigtem Schwert und legal zugänglichem Schleifstein das Angebot eines Schmieds. **Schärf die Klinge selbst und vergleiche sein neues Angebot**, ohne eine Reparatur zu kaufen.",
        "gameObjective": "Prüfe in **Kingdom Come: Deliverance** mit beschädigtem Schwert und legal zugänglichem Schleifstein das Angebot eines Schmieds. **Schärf die Klinge selbst und vergleiche sein neues Angebot**, ohne eine Reparatur zu kaufen."
      }
    },
    "experience": {
      "family": "sharpening",
      "cardMetadata": { "genreIds": ["rpg"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["trading", "crafting"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Damaged sword; legal grindstone",
          "de": "Beschädigtes Schwert; legaler Schleifstein",
          "chips": {"en": ["Damaged sword", "Grindstone"], "de": ["Beschädigtes Schwert", "Schleifstein"]},
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
    "gameGenreIds": ["rpg"]
  },
  {
    "id": "kingdom-come-deliverance-kcd1-reading-first",
    "moodIds": ["progress", "curious"],
    "type": "objective",
    "tags": ["story"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "kingdom-come-deliverance",
      "installmentIds": ["kcd-1"]
    },
    "translations": {
      "en": {
        "name": "Letters in Uzhitz",
        "objective": "If Henry cannot read in **Kingdom Come: Deliverance**, bring the scribe’s lesson fee to Uzhitz. **Finish the reading lesson until reading unlocks**.",
        "gameObjective": "If Henry cannot read in **Kingdom Come: Deliverance**, bring the scribe’s lesson fee to Uzhitz. **Finish the reading lesson until reading unlocks**."
      },
      "de": {
        "name": "Buchstaben in Uschitze",
        "objective": "Bring in **Kingdom Come: Deliverance** das Geld für den Unterricht zum Schreiber in Uschitze, wenn Heinrich noch nicht lesen kann. **Schließ die Lesestunde ab, bis Lesen freigeschaltet ist**.",
        "gameObjective": "Bring in **Kingdom Come: Deliverance** das Geld für den Unterricht zum Schreiber in Uschitze, wenn Heinrich noch nicht lesen kann. **Schließ die Lesestunde ab, bis Lesen freigeschaltet ist**."
      }
    },
    "experience": {
      "family": "reading",
      "cardMetadata": { "genreIds": ["rpg"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Henry cannot read; lesson fee",
          "de": "Heinrich kann nicht lesen; Unterrichtsgeld",
          "chips": {"en": ["Reading lesson"], "de": ["Leseunterricht"]},
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
    "gameGenreIds": ["rpg"]
  },
  {
    "id": "kingdom-come-deliverance-kcd1-night-hawk",
    "moodIds": ["explore", "curious"],
    "type": "inspiration",
    "tags": ["exploration"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "kingdom-come-deliverance",
      "installmentIds": ["kcd-1"]
    },
    "translations": {
      "en": {
        "name": "A Forest Night",
        "objective": "With a Nighthawk potion already owned in Kingdom Come: Deliverance, visit the woods outside an unlocked village after dark. **Try the potion and follow a familiar path** under its changed night vision.",
        "gameObjective": "With a Nighthawk potion already owned in Kingdom Come: Deliverance, visit the woods outside an unlocked village after dark. **Try the potion and follow a familiar path** under its changed night vision."
      },
      "de": {
        "name": "Eine Nacht im Wald",
        "objective": "Geh in Kingdom Come: Deliverance mit einem bereits vorhandenen Nachtsichttrank nach Einbruch der Dunkelheit in den Wald bei einem erreichbaren Dorf. **Probier den Trank und sieh dir einen vertrauten Weg mit Nachtsicht an**.",
        "gameObjective": "Geh in Kingdom Come: Deliverance mit einem bereits vorhandenen Nachtsichttrank nach Einbruch der Dunkelheit in den Wald bei einem erreichbaren Dorf. **Probier den Trank und sieh dir einen vertrauten Weg mit Nachtsicht an**."
      }
    },
    "experience": {
      "family": "night-potion",
      "cardMetadata": { "genreIds": ["rpg"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["exploration"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Owned Nighthawk potion",
          "de": "Vorhandener Nachtsichttrank",
          "chips": {"en": ["Nighthawk potion"], "de": ["Nachtsichttrank"]},
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
    "gameGenreIds": ["rpg"]
  },
  {
    "id": "kingdom-come-deliverance-kcd1-haggle-small",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["trading"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "kingdom-come-deliverance",
      "installmentIds": ["kcd-1"]
    },
    "translations": {
      "en": {
        "name": "The Last Few Groschen",
        "objective": "Take a legal item to a merchant in **Kingdom Come: Deliverance**. Note the listed price, then **complete one sale through haggling**, checking where the merchant accepts your offer.",
        "gameObjective": "Take a legal item to a merchant in **Kingdom Come: Deliverance**. Note the listed price, then **complete one sale through haggling**, checking where the merchant accepts your offer."
      },
      "de": {
        "name": "Die letzten Groschen",
        "objective": "Bring in **Kingdom Come: Deliverance** einen legalen Gegenstand zu einem Händler. Merk dir den Listenpreis und **schließ einen Verkauf durch Feilschen ab**. Schau, welches Angebot er akzeptiert.",
        "gameObjective": "Bring in **Kingdom Come: Deliverance** einen legalen Gegenstand zu einem Händler. Merk dir den Listenpreis und **schließ einen Verkauf durch Feilschen ab**. Schau, welches Angebot er akzeptiert."
      }
    },
    "experience": {
      "family": "haggling",
      "cardMetadata": { "genreIds": ["rpg"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["trading"],
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
    "gameGenreIds": ["rpg"]
  },
  {
    "id": "kingdom-come-deliverance-kcd1-tournament-bout",
    "moodIds": ["challenge", "focused"],
    "type": "challenge",
    "tags": ["one-life"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "kingdom-come-deliverance",
      "installmentIds": ["kcd-1"]
    },
    "translations": {
      "en": {
        "name": "Rattay’s First Bout",
        "objective": "When the Rattay Tourney is available in **Kingdom Come: Deliverance**, pay the entry fee and **win the first bout using the supplied equipment**. One tournament entry, ending on victory or elimination.",
        "gameObjective": "When the Rattay Tourney is available in **Kingdom Come: Deliverance**, pay the entry fee and **win the first bout using the supplied equipment**. One tournament entry, ending on victory or elimination."
      },
      "de": {
        "name": "Der erste Turnierkampf",
        "objective": "Zahl in **Kingdom Come: Deliverance** bei verfügbarem Rattayer Turnier die Teilnahmegebühr und **gewinne den ersten Kampf mit der gestellten Ausrüstung**. Eine Teilnahme, bis zum Sieg oder Ausscheiden.",
        "gameObjective": "Zahl in **Kingdom Come: Deliverance** bei verfügbarem Rattayer Turnier die Teilnahmegebühr und **gewinne den ersten Kampf mit der gestellten Ausrüstung**. Eine Teilnahme, bis zum Sieg oder Ausscheiden."
      }
    },
    "experience": {
      "family": "tournament",
      "cardMetadata": { "genreIds": ["rpg"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["one-life"],
      "prerequisites": [
        {
          "en": "Rattay Tourney available; entry fee",
          "de": "Rattayer Turnier verfügbar; Eintrittsgeld",
          "chips": {"en": ["Rattay Tourney"], "de": ["Rattayer Turnier"]},
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
    "gameGenreIds": ["rpg"]
  },
  {
    "id": "kingdom-come-deliverance-kcd1-rattay-ramparts",
    "moodIds": ["explore", "relax"],
    "type": "inspiration",
    "tags": ["on-foot"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "kingdom-come-deliverance",
      "installmentIds": ["kcd-1"]
    },
    "translations": {
      "en": {
        "name": "Above the Market",
        "objective": "Walk Rattay’s accessible walls and castle approaches in Kingdom Come: Deliverance. **Look down toward the market and find the town’s shape** without following a quest marker.",
        "gameObjective": "Walk Rattay’s accessible walls and castle approaches in Kingdom Come: Deliverance. **Look down toward the market and find the town’s shape** without following a quest marker."
      },
      "de": {
        "name": "Über dem Markt",
        "objective": "Geh in Kingdom Come: Deliverance über die zugänglichen Mauern und Burgwege von Rattay. Schau zum Markt hinunter und **erkunde die Form der Stadt ohne Questmarker**.",
        "gameObjective": "Geh in Kingdom Come: Deliverance über die zugänglichen Mauern und Burgwege von Rattay. Schau zum Markt hinunter und **erkunde die Form der Stadt ohne Questmarker**."
      }
    },
    "experience": {
      "family": "rampart-roaming",
      "cardMetadata": { "genreIds": ["rpg"], "playStyleIds": [] },
      "finish": "open",
      "activities": [],
      "rules": ["on-foot"],
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
    "gameGenreIds": ["rpg"]
  },
  {
    "id": "kingdom-come-deliverance-kcd1-monastery-routine",
    "moodIds": ["focused", "curious"],
    "type": "inspiration",
    "tags": ["story"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "kingdom-come-deliverance",
      "installmentIds": ["kcd-1"]
    },
    "translations": {
      "en": {
        "name": "A Novice’s Day",
        "objective": "While already undercover in the monastery in Kingdom Come: Deliverance, **follow the monastery schedule** instead of advancing your investigation. Spend this visit at the meals, prayers, and work that fit the current hour.",
        "gameObjective": "While already undercover in the monastery in Kingdom Come: Deliverance, **follow the monastery schedule** instead of advancing your investigation. Spend this visit at the meals, prayers, and work that fit the current hour."
      },
      "de": {
        "name": "Ein Tag als Novize",
        "objective": "Folge in Kingdom Come: Deliverance während einer laufenden Kloster-Infiltration dem Klosterplan, statt die Ermittlung weiterzutreiben. **Nimm an den Mahlzeiten, Gebeten und Arbeiten teil**, die gerade anstehen.",
        "gameObjective": "Folge in Kingdom Come: Deliverance während einer laufenden Kloster-Infiltration dem Klosterplan, statt die Ermittlung weiterzutreiben. **Nimm an den Mahlzeiten, Gebeten und Arbeiten teil**, die gerade anstehen."
      }
    },
    "experience": {
      "family": "monastery",
      "cardMetadata": { "genreIds": ["rpg"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Currently undercover in monastery",
          "de": "Aktuell verdeckt im Kloster",
          "chips": {"en": ["Undercover in monastery"], "de": ["Verdeckt im Kloster"]},
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
    "gameGenreIds": ["rpg"]
  },
  {
    "id": "kingdom-come-deliverance-kcd1-bandit-report",
    "moodIds": ["progress", "focused"],
    "type": "objective",
    "tags": ["story"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "kingdom-come-deliverance",
      "installmentIds": ["kcd-1"]
    },
    "translations": {
      "en": {
        "name": "Report to Bernard",
        "objective": "With a bandit-camp task from Bernard active in **Kingdom Come: Deliverance**, clear that marked camp. **Bring the required proof back to Bernard and collect the reward**.",
        "gameObjective": "With a bandit-camp task from Bernard active in **Kingdom Come: Deliverance**, clear that marked camp. **Bring the required proof back to Bernard and collect the reward**."
      },
      "de": {
        "name": "Bericht für Bernard",
        "objective": "Räume in **Kingdom Come: Deliverance** bei aktivem Banditenlager-Auftrag von Bernard das markierte Lager. **Bring Bernard den geforderten Beweis und hol die Belohnung ab**.",
        "gameObjective": "Räume in **Kingdom Come: Deliverance** bei aktivem Banditenlager-Auftrag von Bernard das markierte Lager. **Bring Bernard den geforderten Beweis und hol die Belohnung ab**."
      }
    },
    "experience": {
      "family": "bandit-report",
      "cardMetadata": { "genreIds": ["rpg"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Active Bernard bandit-camp task",
          "de": "Aktiver Banditenlager-Auftrag von Bernard",
          "chips": {"en": ["Bernard's task"], "de": ["Bernards Auftrag"]},
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
    "gameGenreIds": ["rpg"]
  },
  {
    "id": "kingdom-come-deliverance-kcd1-capon-memory",
    "moodIds": ["nostalgic", "relax"],
    "type": "inspiration",
    "tags": ["free-roam"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "kingdom-come-deliverance",
      "installmentIds": ["kcd-1"]
    },
    "translations": {
      "en": {
        "name": "Back to the Hunt",
        "objective": "After the early hunt with Hans Capon in Kingdom Come: Deliverance, **revisit the woodland route from that outing**. Ride at your own pace and remember how that partnership started.",
        "gameObjective": "After the early hunt with Hans Capon in Kingdom Come: Deliverance, **revisit the woodland route from that outing**. Ride at your own pace and remember how that partnership started."
      },
      "de": {
        "name": "Zurück zur Jagd",
        "objective": "Besuche in Kingdom Come: Deliverance nach der frühen Jagd mit Hans Capon **noch einmal den Waldweg von damals**. Reite in deinem Tempo und denk an den Beginn eurer Freundschaft.",
        "gameObjective": "Besuche in Kingdom Come: Deliverance nach der frühen Jagd mit Hans Capon **noch einmal den Waldweg von damals**. Reite in deinem Tempo und denk an den Beginn eurer Freundschaft."
      }
    },
    "experience": {
      "family": "familiar-hunt",
      "cardMetadata": { "genreIds": ["rpg"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["free-roam"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Early Hans Capon hunt completed",
          "de": "Frühe Jagd mit Hans Capon abgeschlossen",
          "chips": {"en": ["Hans Capon's hunt"], "de": ["Hans Capons Jagd"]},
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
    "gameGenreIds": ["rpg"]
  },
  {
    "id": "kingdom-come-deliverance-kcd1-ashes-affordable-building",
    "moodIds": ["create", "progress"],
    "type": "creation",
    "tags": ["building"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "kingdom-come-deliverance",
      "installmentIds": ["kcd-1"]
    },
    "translations": {
      "en": {
        "name": "One New Building",
        "objective": "With From the Ashes DLC and Pribyslavitz management unlocked in **Kingdom Come: Deliverance**, choose a building whose funds and supplies are already available. **Have Marius build it and walk through the finished site**.",
        "gameObjective": "With From the Ashes DLC and Pribyslavitz management unlocked in **Kingdom Come: Deliverance**, choose a building whose funds and supplies are already available. **Have Marius build it and walk through the finished site**."
      },
      "de": {
        "name": "Ein neues Gebäude",
        "objective": "Wähle in **Kingdom Come: Deliverance** mit dem DLC From the Ashes und freigeschalteter Dorfverwaltung ein Gebäude, für das Geld und Vorräte schon reichen. **Lass Marius es bauen und geh durch den fertigen Bau**.",
        "gameObjective": "Wähle in **Kingdom Come: Deliverance** mit dem DLC From the Ashes und freigeschalteter Dorfverwaltung ein Gebäude, für das Geld und Vorräte schon reichen. **Lass Marius es bauen und geh durch den fertigen Bau**."
      }
    },
    "experience": {
      "family": "settlement-build",
      "cardMetadata": { "genreIds": ["rpg"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["building"],
      "rules": [],
      "prerequisites": [
        {
          "en": "From the Ashes; management unlocked; supplies",
          "de": "From the Ashes; Verwaltung frei; Vorräte",
          "chips": {"en": ["From the Ashes", "Management"], "de": ["From the Ashes", "Verwaltung"]},
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
    "gameGenreIds": ["rpg"]
  },
  {
    "id": "kingdom-come-deliverance-kcd1-ashes-judgement",
    "moodIds": ["curious", "progress"],
    "type": "objective",
    "tags": ["dialogue"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "kingdom-come-deliverance",
      "installmentIds": ["kcd-1"]
    },
    "translations": {
      "en": {
        "name": "Hear Both Sides",
        "objective": "With **From the Ashes** in **Kingdom Come: Deliverance**, hear an available dispute in Pribyslavitz. **Give your verdict after hearing both sides**.",
        "gameObjective": "With **From the Ashes** in **Kingdom Come: Deliverance**, hear an available dispute in Pribyslavitz. **Give your verdict after hearing both sides**."
      },
      "de": {
        "name": "Beide Seiten anhören",
        "objective": "Hör in **Kingdom Come: Deliverance** mit dem DLC From the Ashes einen verfügbaren Streitfall in Pribyslawitz an. **Triff nach den Aussagen beider Seiten dein Urteil**.",
        "gameObjective": "Hör in **Kingdom Come: Deliverance** mit dem DLC From the Ashes einen verfügbaren Streitfall in Pribyslawitz an. **Triff nach den Aussagen beider Seiten dein Urteil**."
      }
    },
    "experience": {
      "family": "town-judgment",
      "cardMetadata": { "genreIds": ["rpg"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["dialogue"],
      "rules": [],
      "prerequisites": [
        {
          "en": "From the Ashes; available judgement",
          "de": "From the Ashes; verfügbarer Streitfall",
          "chips": {"en": ["From the Ashes", "Judgement"], "de": ["From the Ashes", "Streitfall"]},
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
    "gameGenreIds": ["rpg"]
  },
  {
    "id": "kingdom-come-deliverance-kcd1-ashes-recruit-worker",
    "moodIds": ["progress", "nostalgic"],
    "type": "objective",
    "tags": ["dialogue"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "kingdom-come-deliverance",
      "installmentIds": ["kcd-1"]
    },
    "translations": {
      "en": {
        "name": "A Job for Kunesh",
        "objective": "With From the Ashes DLC in **Kingdom Come: Deliverance**, a woodcutters’ camp built and Kunesh still available in Rattay, **invite him to work in Pribyslavitz and confirm he accepts**.",
        "gameObjective": "With From the Ashes DLC in **Kingdom Come: Deliverance**, a woodcutters’ camp built and Kunesh still available in Rattay, **invite him to work in Pribyslavitz and confirm he accepts**."
      },
      "de": {
        "name": "Arbeit für Kunesch",
        "objective": "Lade in **Kingdom Come: Deliverance** mit dem DLC From the Ashes, gebautem Holzfällerlager und noch verfügbarem Kunesch in Rattay **Kunesch zur Arbeit in Pribyslawitz ein und hör seine Zusage an**.",
        "gameObjective": "Lade in **Kingdom Come: Deliverance** mit dem DLC From the Ashes, gebautem Holzfällerlager und noch verfügbarem Kunesch in Rattay **Kunesch zur Arbeit in Pribyslawitz ein und hör seine Zusage an**."
      }
    },
    "experience": {
      "family": "recruit-worker",
      "cardMetadata": { "genreIds": ["rpg"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["dialogue"],
      "rules": [],
      "prerequisites": [
        {
          "en": "From the Ashes; woodcutters built; Kunesh available",
          "de": "From the Ashes; Holzfällerlager; Kunesch verfügbar",
          "chips": {"en": ["From the Ashes", "Woodcutters built"], "de": ["From the Ashes", "Holzfällerlager"]},
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
    "gameGenreIds": ["rpg"]
  },
  {
    "id": "kingdom-come-deliverance-kcd1-mutt-fetch",
    "moodIds": ["curious", "explore"],
    "type": "experiment",
    "tags": ["hunting"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "kingdom-come-deliverance",
      "installmentIds": ["kcd-1"]
    },
    "translations": {
      "en": {
        "name": "Mutt Brings It Back",
        "objective": "With A Woman’s Lot DLC, Mutt recruited and Hunt unlocked in **Kingdom Come: Deliverance**, send him after a hare already spotted nearby. **Let him hunt and retrieve the catch**, or finish after three commands if none succeeds.",
        "gameObjective": "With A Woman’s Lot DLC, Mutt recruited and Hunt unlocked in **Kingdom Come: Deliverance**, send him after a hare already spotted nearby. **Let him hunt and retrieve the catch**, or finish after three commands if none succeeds."
      },
      "de": {
        "name": "Mutt bringt es zurück",
        "objective": "Lass in **Kingdom Come: Deliverance** mit dem DLC A Woman’s Lot, Mutt als Begleiter und freigeschalteter Jagd **Mutt einen bereits gesichteten Hasen jagen und zurückbringen**. Beende nach drei Jagdbefehlen, falls keiner klappt.",
        "gameObjective": "Lass in **Kingdom Come: Deliverance** mit dem DLC A Woman’s Lot, Mutt als Begleiter und freigeschalteter Jagd **Mutt einen bereits gesichteten Hasen jagen und zurückbringen**. Beende nach drei Jagdbefehlen, falls keiner klappt."
      }
    },
    "experience": {
      "family": "dog-fetch",
      "cardMetadata": { "genreIds": ["rpg"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["hunting"],
      "rules": [],
      "prerequisites": [
        {
          "en": "A Woman’s Lot; Mutt; Hunt unlocked",
          "de": "A Woman’s Lot; Mutt; Jagd freigeschaltet",
          "chips": {"en": ["A Woman’s Lot", "Mutt"], "de": ["A Woman’s Lot", "Mutt"]},
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
    "gameGenreIds": ["rpg"]
  },
  {
    "id": "kingdom-come-deliverance-kcd1-theresa-perspective",
    "moodIds": ["curious", "nostalgic"],
    "type": "inspiration",
    "tags": ["story"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "universal": false,
    "curated": {
      "gameId": "kingdom-come-deliverance",
      "installmentIds": ["kcd-1"]
    },
    "translations": {
      "en": {
        "name": "Theresa’s Skalitz",
        "objective": "With A Woman’s Lot DLC in Kingdom Come: Deliverance, start or continue Theresa’s story from a save where it is available. **Explore Skalitz** through her day instead of Henry’s memories.",
        "gameObjective": "With A Woman’s Lot DLC in Kingdom Come: Deliverance, start or continue Theresa’s story from a save where it is available. **Explore Skalitz** through her day instead of Henry’s memories."
      },
      "de": {
        "name": "Theresas Skalitz",
        "objective": "Starte oder spiele in Kingdom Come: Deliverance mit dem DLC A Woman’s Lot Theresas verfügbare Geschichte weiter. **Erkunde Skalitz aus ihrem Alltag** statt aus Heinrichs Erinnerungen.",
        "gameObjective": "Starte oder spiele in Kingdom Come: Deliverance mit dem DLC A Woman’s Lot Theresas verfügbare Geschichte weiter. **Erkunde Skalitz aus ihrem Alltag** statt aus Heinrichs Erinnerungen."
      }
    },
    "experience": {
      "family": "alternate-story",
      "cardMetadata": { "genreIds": ["rpg"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "A Woman’s Lot; Theresa’s story available",
          "de": "A Woman’s Lot; Theresas Geschichte verfügbar",
          "chips": {"en": ["A Woman’s Lot", "Theresa’s story"], "de": ["A Woman’s Lot", "Theresas Geschichte"]},
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
    "gameGenreIds": ["rpg"]
  },
  {
    "id": "kingdom-come-deliverance-kcd2-town-outfit-slot",
    "moodIds": ["create", "relax"],
    "type": "creation",
    "tags": ["outfit"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "kingdom-come-deliverance",
      "installmentIds": ["kcd-2"]
    },
    "translations": {
      "en": {
        "name": "Clothes for Kuttenberg",
        "objective": "With outfit slots available in **Kingdom Come: Deliverance II**, assemble a town outfit from your owned clothes. **Save it separately from your armour and switch between both sets**.",
        "gameObjective": "With outfit slots available in **Kingdom Come: Deliverance II**, assemble a town outfit from your owned clothes. **Save it separately from your armour and switch between both sets**."
      },
      "de": {
        "name": "Kleidung für Kuttenberg",
        "objective": "Stell in **Kingdom Come: Deliverance II** mit verfügbaren Outfitplätzen einen Stadtlook aus eigenen Sachen zusammen. **Speichere ihn getrennt von der Rüstung und wechsle zwischen beiden Sets**.",
        "gameObjective": "Stell in **Kingdom Come: Deliverance II** mit verfügbaren Outfitplätzen einen Stadtlook aus eigenen Sachen zusammen. **Speichere ihn getrennt von der Rüstung und wechsle zwischen beiden Sets**."
      }
    },
    "experience": {
      "family": "outfit",
      "cardMetadata": { "genreIds": ["rpg"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["outfit"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Outfit slots; owned clothing",
          "de": "Outfitplätze; eigene Kleidung",
          "chips": {"en": ["Outfit slots", "Clothing"], "de": ["Outfitplätze", "Kleidung"]},
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
    "gameGenreIds": ["rpg"]
  },
  {
    "id": "kingdom-come-deliverance-kcd2-stealth-number",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["stealth", "outfit"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "kingdom-come-deliverance",
      "installmentIds": ["kcd-2"]
    },
    "translations": {
      "en": {
        "name": "What Makes Noise",
        "objective": "In **Kingdom Come: Deliverance II**, remove one armour layer at a time while checking noise and visibility. **Walk a short route in the original outfit and your quieter set**, comparing the sound.",
        "gameObjective": "In **Kingdom Come: Deliverance II**, remove one armour layer at a time while checking noise and visibility. **Walk a short route in the original outfit and your quieter set**, comparing the sound."
      },
      "de": {
        "name": "Was macht Lärm",
        "objective": "Leg in **Kingdom Come: Deliverance II** eine Rüstungsschicht nach der anderen ab und prüfe Lärm und Sichtbarkeit. **Geh eine kurze Strecke im ursprünglichen und im leiseren Outfit** und vergleiche den Klang.",
        "gameObjective": "Leg in **Kingdom Come: Deliverance II** eine Rüstungsschicht nach der anderen ab und prüfe Lärm und Sichtbarkeit. **Geh eine kurze Strecke im ursprünglichen und im leiseren Outfit** und vergleiche den Klang."
      }
    },
    "experience": {
      "family": "stealth-clothing",
      "cardMetadata": { "genreIds": ["rpg"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["stealth", "outfit"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Owned armor and clothing layers",
          "de": "Eigene Rüstung und Kleidung",
          "chips": {"en": ["Armor layers"], "de": ["Rüstungsschichten"]},
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
    "gameGenreIds": ["rpg"]
  },
  {
    "id": "kingdom-come-deliverance-kcd2-crossbow-contest",
    "moodIds": ["curious", "focused"],
    "type": "objective",
    "tags": ["one-round"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "kingdom-come-deliverance",
      "installmentIds": ["kcd-2"]
    },
    "translations": {
      "en": {
        "name": "Crank, Aim, Fire",
        "objective": "With a crossbow, bolts, and a contest that permits crossbows in **Kingdom Come: Deliverance II**, **complete one target-archery contest**. Pay attention to reloading between shots, regardless of your place.",
        "gameObjective": "With a crossbow, bolts, and a contest that permits crossbows in **Kingdom Come: Deliverance II**, **complete one target-archery contest**. Pay attention to reloading between shots, regardless of your place."
      },
      "de": {
        "name": "Spannen, zielen, schießen",
        "objective": "Spiel in **Kingdom Come: Deliverance II** mit Armbrust, Bolzen und einem Wettbewerb mit Armbrust-Erlaubnis **ein Scheibenturnier zu Ende**. Achte auf das Nachladen zwischen den Schüssen. Der Platz ist egal.",
        "gameObjective": "Spiel in **Kingdom Come: Deliverance II** mit Armbrust, Bolzen und einem Wettbewerb mit Armbrust-Erlaubnis **ein Scheibenturnier zu Ende**. Achte auf das Nachladen zwischen den Schüssen. Der Platz ist egal."
      }
    },
    "experience": {
      "family": "crossbow",
      "cardMetadata": { "genreIds": ["rpg"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": [],
      "rules": ["one-round"],
      "prerequisites": [
        {
          "en": "Crossbow; bolts; permitted contest",
          "de": "Armbrust; Bolzen; passender Wettbewerb",
          "chips": {"en": ["Crossbow", "Bolts"], "de": ["Armbrust", "Bolzen"]},
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
    "gameGenreIds": ["rpg"]
  },
  {
    "id": "kingdom-come-deliverance-kcd2-popinjay-shots",
    "moodIds": ["challenge", "restless"],
    "type": "challenge",
    "tags": ["three-attempts"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "kingdom-come-deliverance",
      "installmentIds": ["kcd-2"]
    },
    "translations": {
      "en": {
        "name": "Bird on the Pole",
        "objective": "At an available popinjay archery contest in **Kingdom Come: Deliverance II**, **hit the bird target and finish the contest**. Stop after success or three contests.",
        "gameObjective": "At an available popinjay archery contest in **Kingdom Come: Deliverance II**, **hit the bird target and finish the contest**. Stop after success or three contests."
      },
      "de": {
        "name": "Vogel auf dem Pfahl",
        "objective": "Versuch in **Kingdom Come: Deliverance II** bei einem verfügbaren Papagei-Bogenturnier, **den Vogel auf dem Pfahl zu treffen und die Partie zu beenden**. Hör nach dem Erfolg oder drei Partien auf.",
        "gameObjective": "Versuch in **Kingdom Come: Deliverance II** bei einem verfügbaren Papagei-Bogenturnier, **den Vogel auf dem Pfahl zu treffen und die Partie zu beenden**. Hör nach dem Erfolg oder drei Partien auf."
      }
    },
    "experience": {
      "family": "popinjay",
      "cardMetadata": { "genreIds": ["rpg"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Popinjay contest available",
          "de": "Papagei-Bogenturnier verfügbar",
          "chips": {"en": ["Popinjay contest"], "de": ["Papagei-Bogenturnier"]},
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
    "gameGenreIds": ["rpg"]
  },
  {
    "id": "kingdom-come-deliverance-kcd2-badge-play",
    "moodIds": ["curious"],
    "type": "experiment",
    "tags": ["new-approach"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "kingdom-come-deliverance",
      "installmentIds": ["kcd-2"]
    },
    "translations": {
      "en": {
        "name": "Use the Badge",
        "objective": "With a dice badge you own in **Kingdom Come: Deliverance II**, choose a table where it is permitted. **Use its effect in one completed game** and watch which decision it changes.",
        "gameObjective": "With a dice badge you own in **Kingdom Come: Deliverance II**, choose a table where it is permitted. **Use its effect in one completed game** and watch which decision it changes."
      },
      "de": {
        "name": "Das Abzeichen nutzen",
        "objective": "Wähle in **Kingdom Come: Deliverance II** mit einem eigenen Würfelabzeichen einen Tisch, der es zulässt. **Nutze seine Wirkung in einer abgeschlossenen Partie** und schau, welche Entscheidung sich dadurch verändert.",
        "gameObjective": "Wähle in **Kingdom Come: Deliverance II** mit einem eigenen Würfelabzeichen einen Tisch, der es zulässt. **Nutze seine Wirkung in einer abgeschlossenen Partie** und schau, welche Entscheidung sich dadurch verändert."
      }
    },
    "experience": {
      "family": "dice-badge",
      "cardMetadata": { "genreIds": ["rpg"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "en": "Owned dice badge; permitted table",
          "de": "Eigenes Würfelabzeichen; passender Tisch",
          "chips": {"en": ["Dice badge", "Table"], "de": ["Würfelabzeichen", "Tisch"]},
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
    "gameGenreIds": ["rpg"]
  },
  {
    "id": "kingdom-come-deliverance-kcd2-dice-stop-early",
    "moodIds": ["focused", "challenge"],
    "type": "challenge",
    "tags": ["three-attempts"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "kingdom-come-deliverance",
      "installmentIds": ["kcd-2"]
    },
    "translations": {
      "en": {
        "name": "Bank the Fives",
        "objective": "At a low-stakes dice table in **Kingdom Come: Deliverance II**, **win while banking after every scoring roll containing a five**. Stop after one win or three games.",
        "gameObjective": "At a low-stakes dice table in **Kingdom Come: Deliverance II**, **win while banking after every scoring roll containing a five**. Stop after one win or three games."
      },
      "de": {
        "name": "Die Fünfen sichern",
        "objective": "Versuch in **Kingdom Come: Deliverance II** am Würfeltisch mit kleinem Einsatz, **eine Partie zu gewinnen und nach jedem punktenden Wurf mit einer Fünf die Punkte zu sichern**. Hör nach einem Sieg oder drei Partien auf.",
        "gameObjective": "Versuch in **Kingdom Come: Deliverance II** am Würfeltisch mit kleinem Einsatz, **eine Partie zu gewinnen und nach jedem punktenden Wurf mit einer Fünf die Punkte zu sichern**. Hör nach einem Sieg oder drei Partien auf."
      }
    },
    "experience": {
      "family": "dice-press",
      "cardMetadata": { "genreIds": ["rpg"], "playStyleIds": [] },
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
    "gameGenreIds": ["rpg"]
  },
  {
    "id": "kingdom-come-deliverance-kcd2-smoked-rations",
    "moodIds": ["create", "progress"],
    "type": "creation",
    "tags": ["cooking"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "kingdom-come-deliverance",
      "installmentIds": ["kcd-2"]
    },
    "translations": {
      "en": {
        "name": "Smoked for the Road",
        "objective": "With fresh meat and a usable smokehouse in **Kingdom Come: Deliverance II**, **smoke one batch and put the resulting food in your travelling inventory**.",
        "gameObjective": "With fresh meat and a usable smokehouse in **Kingdom Come: Deliverance II**, **smoke one batch and put the resulting food in your travelling inventory**."
      },
      "de": {
        "name": "Proviant für den Weg",
        "objective": "Räuchere in **Kingdom Come: Deliverance II** mit frischem Fleisch an einem nutzbaren Räucherhaus **eine Portion und pack das Ergebnis als Reiseproviant ein**.",
        "gameObjective": "Räuchere in **Kingdom Come: Deliverance II** mit frischem Fleisch an einem nutzbaren Räucherhaus **eine Portion und pack das Ergebnis als Reiseproviant ein**."
      }
    },
    "experience": {
      "family": "food-smoking",
      "cardMetadata": { "genreIds": ["rpg"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["cooking"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Fresh meat; usable smokehouse",
          "de": "Frisches Fleisch; nutzbares Räucherhaus",
          "chips": {"en": ["Fresh meat", "Smokehouse"], "de": ["Frisches Fleisch", "Räucherhaus"]},
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
    "gameGenreIds": ["rpg"]
  },
  {
    "id": "kingdom-come-deliverance-kcd2-silver-mine-walk",
    "moodIds": ["explore", "curious"],
    "type": "inspiration",
    "tags": ["on-foot"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "kingdom-come-deliverance",
      "installmentIds": ["kcd-2"]
    },
    "translations": {
      "en": {
        "name": "Kuttenberg’s Silver",
        "objective": "Once Kuttenberg is open in Kingdom Come: Deliverance II, **explore the paths around an accessible silver-mine entrance**. Look for the shafts, work sites, and settlement built around the ore, without entering restricted areas.",
        "gameObjective": "Once Kuttenberg is open in Kingdom Come: Deliverance II, **explore the paths around an accessible silver-mine entrance**. Look for the shafts, work sites, and settlement built around the ore, without entering restricted areas."
      },
      "de": {
        "name": "Kuttenbergs Silber",
        "objective": "Erkunde in Kingdom Come: Deliverance II bei freigeschaltetem Kuttenberg die Wege um einen erreichbaren Silberminen-Eingang. **Schau dir Schächte, Arbeitsplätze und die Siedlung rund ums Erz an**, ohne gesperrte Bereiche zu betreten.",
        "gameObjective": "Erkunde in Kingdom Come: Deliverance II bei freigeschaltetem Kuttenberg die Wege um einen erreichbaren Silberminen-Eingang. **Schau dir Schächte, Arbeitsplätze und die Siedlung rund ums Erz an**, ohne gesperrte Bereiche zu betreten."
      }
    },
    "experience": {
      "family": "mine-roaming",
      "cardMetadata": { "genreIds": ["rpg"], "playStyleIds": [] },
      "finish": "open",
      "activities": [],
      "rules": ["on-foot"],
      "prerequisites": [
        {
          "en": "Kuttenberg unlocked",
          "de": "Kuttenberg freigeschaltet",
          "chips": {"en": ["Kuttenberg"], "de": ["Kuttenberg"]},
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
    "gameGenreIds": ["rpg"]
  },
  {
    "id": "kingdom-come-deliverance-kcd2-horseshoe-forge",
    "moodIds": ["create", "progress"],
    "type": "creation",
    "tags": ["crafting"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "kingdom-come-deliverance",
      "installmentIds": ["kcd-2"]
    },
    "translations": {
      "en": {
        "name": "Shoes for Your Horse",
        "objective": "With smithing learned, a horseshoe sketch, materials, and your horse in **Kingdom Come: Deliverance II**, **forge a set of horseshoes and equip it on your horse**.",
        "gameObjective": "With smithing learned, a horseshoe sketch, materials, and your horse in **Kingdom Come: Deliverance II**, **forge a set of horseshoes and equip it on your horse**."
      },
      "de": {
        "name": "Eisen fürs Pferd",
        "objective": "Schmiede in **Kingdom Come: Deliverance II** mit erlernter Schmiedekunst, Hufeisenskizze, Material und eigenem Pferd **Hufeisen und rüste dein Pferd damit aus**.",
        "gameObjective": "Schmiede in **Kingdom Come: Deliverance II** mit erlernter Schmiedekunst, Hufeisenskizze, Material und eigenem Pferd **Hufeisen und rüste dein Pferd damit aus**."
      }
    },
    "experience": {
      "family": "horseshoes",
      "cardMetadata": { "genreIds": ["rpg"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["crafting"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Smithing learned; horseshoe sketch; materials; horse",
          "de": "Schmieden gelernt; Hufeisenskizze; Material; Pferd",
          "chips": {"en": ["Horseshoe sketch"], "de": ["Hufeisenskizze"]},
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
    "gameGenreIds": ["rpg"]
  },
  {
    "id": "kingdom-come-deliverance-kcd2-streamside-laundry",
    "moodIds": ["progress", "relax"],
    "type": "objective",
    "tags": ["outfit"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "kingdom-come-deliverance",
      "installmentIds": ["kcd-2"]
    },
    "translations": {
      "en": {
        "name": "Laundry by the Stream",
        "objective": "In **Kingdom Come: Deliverance II**, **wash your dirty clothes with soap at a nearby streamside laundry spot**.",
        "gameObjective": "In **Kingdom Come: Deliverance II**, **wash your dirty clothes with soap at a nearby streamside laundry spot**."
      },
      "de": {
        "name": "Wäsche am Bach",
        "objective": "**Wasch in Kingdom Come: Deliverance II deine schmutzige Kleidung mit Seife an einer nahen Waschstelle am Wasser**.",
        "gameObjective": "**Wasch in Kingdom Come: Deliverance II deine schmutzige Kleidung mit Seife an einer nahen Waschstelle am Wasser**."
      }
    },
    "experience": {
      "family": "laundry",
      "cardMetadata": { "genreIds": ["rpg"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["outfit"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Soap; dirty clothes; nearby laundry spot",
          "de": "Seife; schmutzige Kleidung; nahe Waschstelle",
          "chips": {"en": ["Soap", "Dirty clothes"], "de": ["Seife", "Schmutzige Kleidung"]},
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
    "gameGenreIds": ["rpg"]
  },
  {
    "id": "kingdom-come-deliverance-kcd2-mace-at-armour",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["loadout"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "kingdom-come-deliverance",
      "installmentIds": ["kcd-2"]
    },
    "translations": {
      "en": {
        "name": "A Mace’s Answer",
        "objective": "With a mace you can use in **Kingdom Come: Deliverance II**, enter available legal sparring with an armoured opponent. **Land a hit with the mace and finish the bout**, comparing it with your usual sword approach.",
        "gameObjective": "With a mace you can use in **Kingdom Come: Deliverance II**, enter available legal sparring with an armoured opponent. **Land a hit with the mace and finish the bout**, comparing it with your usual sword approach."
      },
      "de": {
        "name": "Die Antwort des Streitkolbens",
        "objective": "Tritt in **Kingdom Come: Deliverance II** mit nutzbarem Streitkolben zu einem verfügbaren erlaubten Übungskampf gegen einen gerüsteten Gegner an. **Triff mit dem Streitkolben und beende den Kampf**. Vergleiche es mit deiner üblichen Schwerttechnik.",
        "gameObjective": "Tritt in **Kingdom Come: Deliverance II** mit nutzbarem Streitkolben zu einem verfügbaren erlaubten Übungskampf gegen einen gerüsteten Gegner an. **Triff mit dem Streitkolben und beende den Kampf**. Vergleiche es mit deiner üblichen Schwerttechnik."
      }
    },
    "experience": {
      "family": "mace-sparring",
      "cardMetadata": { "genreIds": ["rpg"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["loadout"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Usable mace; legal armored sparring",
          "de": "Nutzbarer Streitkolben; legales Rüstungstraining",
          "chips": {"en": ["Mace", "Armored sparring"], "de": ["Streitkolben", "Rüstungstraining"]},
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
    "gameGenreIds": ["rpg"]
  },
  {
    "id": "kingdom-come-deliverance-kcd2-fistfight-stake",
    "moodIds": ["restless", "challenge"],
    "type": "challenge",
    "tags": ["three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "kingdom-come-deliverance",
      "installmentIds": ["kcd-2"]
    },
    "translations": {
      "en": {
        "name": "Bare Knuckles",
        "objective": "At an available paid fistfight in **Kingdom Come: Deliverance II**, **win one bout without drawing a weapon**. Stop after success or three bouts.",
        "gameObjective": "At an available paid fistfight in **Kingdom Come: Deliverance II**, **win one bout without drawing a weapon**. Stop after success or three bouts."
      },
      "de": {
        "name": "Mit bloßen Fäusten",
        "objective": "Versuch in **Kingdom Come: Deliverance II** bei einer verfügbaren Faustkampf-Wette, **einen Kampf ohne gezogene Waffe zu gewinnen**. Hör nach dem Erfolg oder drei Kämpfen auf.",
        "gameObjective": "Versuch in **Kingdom Come: Deliverance II** bei einer verfügbaren Faustkampf-Wette, **einen Kampf ohne gezogene Waffe zu gewinnen**. Hör nach dem Erfolg oder drei Kämpfen auf."
      }
    },
    "experience": {
      "family": "fistfight",
      "cardMetadata": { "genreIds": ["rpg"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Paid fistfight available; stake",
          "de": "Faustkampf-Wette verfügbar; Einsatz",
          "chips": {"en": ["Paid fistfight", "Stake"], "de": ["Faustkampf-Wette", "Einsatz"]},
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
    "gameGenreIds": ["rpg"]
  },
  {
    "id": "kingdom-come-deliverance-kcd2-mutt-scent",
    "moodIds": ["curious", "explore"],
    "type": "inspiration",
    "tags": ["exploration"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "kingdom-come-deliverance",
      "installmentIds": ["kcd-2"]
    },
    "translations": {
      "en": {
        "name": "Mutt’s Detours",
        "objective": "Once Mutt is reunited with Henry in Kingdom Come: Deliverance II, take him into the woods around Troskowitz. **Follow his movements and explore the clearings** he brings into view.",
        "gameObjective": "Once Mutt is reunited with Henry in Kingdom Come: Deliverance II, take him into the woods around Troskowitz. **Follow his movements and explore the clearings** he brings into view."
      },
      "de": {
        "name": "Mutts Umwege",
        "objective": "Nimm Mutt in Kingdom Come: Deliverance II nach dem Wiedersehen mit Heinrich in die Wälder um Troskowitz mit. **Folge seinen Bewegungen und erkunde die Lichtungen**, die du dabei entdeckst.",
        "gameObjective": "Nimm Mutt in Kingdom Come: Deliverance II nach dem Wiedersehen mit Heinrich in die Wälder um Troskowitz mit. **Folge seinen Bewegungen und erkunde die Lichtungen**, die du dabei entdeckst."
      }
    },
    "experience": {
      "family": "dog-roaming",
      "cardMetadata": { "genreIds": ["rpg"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["exploration"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Mutt reunited with Henry",
          "de": "Mutt wieder bei Heinrich",
          "chips": {"en": ["Mutt"], "de": ["Mutt"]},
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
    "gameGenreIds": ["rpg"]
  },
  {
    "id": "kingdom-come-deliverance-kcd2-pebbles-home",
    "moodIds": ["nostalgic", "relax"],
    "type": "inspiration",
    "tags": ["traversal"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "kingdom-come-deliverance",
      "installmentIds": ["kcd-2"]
    },
    "translations": {
      "en": {
        "name": "Pebbles Again",
        "objective": "If you have recovered Pebbles in Kingdom Come: Deliverance II, leave Semine together for **an unhurried ride through the Trosky countryside**. Revisit your old horse without shopping for a faster replacement.",
        "gameObjective": "If you have recovered Pebbles in Kingdom Come: Deliverance II, leave Semine together for **an unhurried ride through the Trosky countryside**. Revisit your old horse without shopping for a faster replacement."
      },
      "de": {
        "name": "Wieder mit Pebbles",
        "objective": "Reite in Kingdom Come: Deliverance II mit zurückgeholtem Pebbles von Semine aus **gemütlich durchs Trosky-Umland**. Verbring wieder Zeit mit deinem alten Pferd, ohne nach einem schnelleren Ersatz zu suchen.",
        "gameObjective": "Reite in Kingdom Come: Deliverance II mit zurückgeholtem Pebbles von Semine aus **gemütlich durchs Trosky-Umland**. Verbring wieder Zeit mit deinem alten Pferd, ohne nach einem schnelleren Ersatz zu suchen."
      }
    },
    "experience": {
      "family": "familiar-horse",
      "cardMetadata": { "genreIds": ["rpg"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["traversal"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Pebbles recovered",
          "de": "Pebbles zurückgeholt",
          "chips": {"en": ["Pebbles"], "de": ["Pebbles"]},
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
    "gameGenreIds": ["rpg"]
  },
  {
    "id": "kingdom-come-deliverance-kcd2-night-lanterns",
    "moodIds": ["explore", "relax"],
    "type": "inspiration",
    "tags": ["on-foot"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "kingdom-come-deliverance",
      "installmentIds": ["kcd-2"]
    },
    "translations": {
      "en": {
        "name": "Kuttenberg After Dark",
        "objective": "Once Kuttenberg is open in Kingdom Come: Deliverance II, carry a lit torch through its streets after dark. **Follow the pools of light** between the market, houses, and walls.",
        "gameObjective": "Once Kuttenberg is open in Kingdom Come: Deliverance II, carry a lit torch through its streets after dark. **Follow the pools of light** between the market, houses, and walls."
      },
      "de": {
        "name": "Kuttenberg bei Nacht",
        "objective": "Trag in Kingdom Come: Deliverance II bei freigeschaltetem Kuttenberg nachts eine brennende Fackel durch die Straßen. **Folge den Lichtinseln** zwischen Markt, Häusern und Mauern.",
        "gameObjective": "Trag in Kingdom Come: Deliverance II bei freigeschaltetem Kuttenberg nachts eine brennende Fackel durch die Straßen. **Folge den Lichtinseln** zwischen Markt, Häusern und Mauern."
      }
    },
    "experience": {
      "family": "city-night",
      "cardMetadata": { "genreIds": ["rpg"], "playStyleIds": [] },
      "finish": "open",
      "activities": [],
      "rules": ["on-foot"],
      "prerequisites": [
        {
          "en": "Kuttenberg unlocked; torch",
          "de": "Kuttenberg frei; Fackel",
          "chips": {"en": ["Kuttenberg", "Torch"], "de": ["Kuttenberg", "Fackel"]},
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
    "gameGenreIds": ["rpg"]
  },
  {
    "id": "kingdom-come-deliverance-kcd2-sharpen-no-kit",
    "moodIds": ["focused", "progress"],
    "type": "objective",
    "tags": ["crafting"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "kingdom-come-deliverance",
      "installmentIds": ["kcd-2"]
    },
    "translations": {
      "en": {
        "name": "Keep the Edge",
        "objective": "With a damaged sword and a legally accessible grindstone in **Kingdom Come: Deliverance II**, **sharpen it until its condition reaches at least 90**. Use the stone rather than a repair kit.",
        "gameObjective": "With a damaged sword and a legally accessible grindstone in **Kingdom Come: Deliverance II**, **sharpen it until its condition reaches at least 90**. Use the stone rather than a repair kit."
      },
      "de": {
        "name": "Die Schneide pflegen",
        "objective": "Schärf in **Kingdom Come: Deliverance II** ein beschädigtes Schwert an einem legal zugänglichen Schleifstein, **bis sein Zustand mindestens 90 erreicht**. Benutze den Stein statt eines Reparatursets.",
        "gameObjective": "Schärf in **Kingdom Come: Deliverance II** ein beschädigtes Schwert an einem legal zugänglichen Schleifstein, **bis sein Zustand mindestens 90 erreicht**. Benutze den Stein statt eines Reparatursets."
      }
    },
    "experience": {
      "family": "sharpening",
      "cardMetadata": { "genreIds": ["rpg"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["crafting"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Damaged sword; legal grindstone",
          "de": "Beschädigtes Schwert; legaler Schleifstein",
          "chips": {"en": ["Damaged sword", "Grindstone"], "de": ["Beschädigtes Schwert", "Schleifstein"]},
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
    "gameGenreIds": ["rpg"]
  },
  {
    "id": "kingdom-come-deliverance-kcd2-merchant-charity",
    "moodIds": ["curious"],
    "type": "experiment",
    "tags": ["trading"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "kingdom-come-deliverance",
      "installmentIds": ["kcd-2"]
    },
    "translations": {
      "en": {
        "name": "Pay a Little Extra",
        "objective": "At a merchant in **Kingdom Come: Deliverance II**, buy one cheap item through haggling. **Offer more than the listed price and complete the trade**, then look at the reputation feedback.",
        "gameObjective": "At a merchant in **Kingdom Come: Deliverance II**, buy one cheap item through haggling. **Offer more than the listed price and complete the trade**, then look at the reputation feedback."
      },
      "de": {
        "name": "Etwas drauflegen",
        "objective": "Kauf in **Kingdom Come: Deliverance II** bei einem Händler einen günstigen Gegenstand über Feilschen. **Biete mehr als den Listenpreis und schließ den Handel ab**. Schau auf die Rückmeldung zum Ruf.",
        "gameObjective": "Kauf in **Kingdom Come: Deliverance II** bei einem Händler einen günstigen Gegenstand über Feilschen. **Biete mehr als den Listenpreis und schließ den Handel ab**. Schau auf die Rückmeldung zum Ruf."
      }
    },
    "experience": {
      "family": "charity-trade",
      "cardMetadata": { "genreIds": ["rpg"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["trading"],
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
    "gameGenreIds": ["rpg"]
  },
  {
    "id": "kingdom-come-deliverance-kcd2-forge-customer",
    "moodIds": ["progress", "focused"],
    "type": "objective",
    "tags": ["crafting", "trading"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "kingdom-come-deliverance",
      "installmentIds": ["kcd-2"]
    },
    "translations": {
      "en": {
        "name": "Made to Order",
        "objective": "With Legacy of the Forge DLC and your forge operating in **Kingdom Come: Deliverance II**, choose an available commission whose materials you own. **Forge the requested item and deliver it to the customer**.",
        "gameObjective": "With Legacy of the Forge DLC and your forge operating in **Kingdom Come: Deliverance II**, choose an available commission whose materials you own. **Forge the requested item and deliver it to the customer**."
      },
      "de": {
        "name": "Auf Bestellung",
        "objective": "Wähle in **Kingdom Come: Deliverance II** mit dem DLC Legacy of the Forge und laufender eigener Schmiede eine Bestellung mit vorhandenen Materialien. **Schmiede den gewünschten Gegenstand und liefere ihn beim Kunden ab**.",
        "gameObjective": "Wähle in **Kingdom Come: Deliverance II** mit dem DLC Legacy of the Forge und laufender eigener Schmiede eine Bestellung mit vorhandenen Materialien. **Schmiede den gewünschten Gegenstand und liefere ihn beim Kunden ab**."
      }
    },
    "experience": {
      "family": "forge-commission",
      "cardMetadata": { "genreIds": ["rpg"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["crafting", "trading"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Legacy of the Forge; operating forge; materials",
          "de": "Legacy of the Forge; laufende Schmiede; Material",
          "chips": {"en": ["Legacy of the Forge", "Operating forge"], "de": ["Legacy of the Forge", "Schmiede"]},
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
    "gameGenreIds": ["rpg"]
  },
  {
    "id": "kingdom-come-deliverance-kcd2-forge-room-style",
    "moodIds": ["create", "relax"],
    "type": "creation",
    "tags": ["decorating"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "kingdom-come-deliverance",
      "installmentIds": ["kcd-2"]
    },
    "translations": {
      "en": {
        "name": "Your Corner of Town",
        "objective": "With Legacy of the Forge DLC and property customization unlocked in **Kingdom Come: Deliverance II**, choose a room option you can already afford. **Apply one new furnishing or wall finish and view it in the room**.",
        "gameObjective": "With Legacy of the Forge DLC and property customization unlocked in **Kingdom Come: Deliverance II**, choose a room option you can already afford. **Apply one new furnishing or wall finish and view it in the room**."
      },
      "de": {
        "name": "Deine Ecke in Kuttenberg",
        "objective": "Wähle in **Kingdom Come: Deliverance II** mit dem DLC Legacy of the Forge und freigeschalteter Hauseinrichtung eine bezahlbare Raumoption. **Wende eine neue Einrichtung oder Wandgestaltung an und schau sie dir im Raum an**.",
        "gameObjective": "Wähle in **Kingdom Come: Deliverance II** mit dem DLC Legacy of the Forge und freigeschalteter Hauseinrichtung eine bezahlbare Raumoption. **Wende eine neue Einrichtung oder Wandgestaltung an und schau sie dir im Raum an**."
      }
    },
    "experience": {
      "family": "property-style",
      "cardMetadata": { "genreIds": ["rpg"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["decorating"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Legacy of the Forge; customization; funds",
          "de": "Legacy of the Forge; Einrichtung; Geld",
          "chips": {"en": ["Legacy of the Forge", "Customization"], "de": ["Legacy of the Forge", "Einrichtung"]},
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
    "gameGenreIds": ["rpg"]
  },
  {
    "id": "kingdom-come-deliverance-kcd2-lions-first-riddle",
    "moodIds": ["explore", "curious"],
    "type": "objective",
    "tags": ["puzzles"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "kingdom-come-deliverance",
      "installmentIds": ["kcd-2"]
    },
    "translations": {
      "en": {
        "name": "Brunswick’s First Clue",
        "objective": "With The Lion’s Crest DLC and its first riddle active in **Kingdom Come: Deliverance II**, bring a spade and follow the clue north of Trosky. **Find the first treasure cache and open it**.",
        "gameObjective": "With The Lion’s Crest DLC and its first riddle active in **Kingdom Come: Deliverance II**, bring a spade and follow the clue north of Trosky. **Find the first treasure cache and open it**."
      },
      "de": {
        "name": "Brunswicks erster Hinweis",
        "objective": "Bring in **Kingdom Come: Deliverance II** mit dem DLC The Lion’s Crest und aktivem ersten Rätsel einen Spaten mit. Folge dem Hinweis nördlich von Trosky und **finde und öffne das erste Schatzversteck**.",
        "gameObjective": "Bring in **Kingdom Come: Deliverance II** mit dem DLC The Lion’s Crest und aktivem ersten Rätsel einen Spaten mit. Folge dem Hinweis nördlich von Trosky und **finde und öffne das erste Schatzversteck**."
      }
    },
    "experience": {
      "family": "treasure-riddle",
      "cardMetadata": { "genreIds": ["rpg"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["puzzles"],
      "rules": [],
      "prerequisites": [
        {
          "en": "The Lion’s Crest; first riddle active; spade",
          "de": "The Lion’s Crest; erstes Rätsel aktiv; Spaten",
          "chips": {"en": ["The Lion’s Crest", "First riddle"], "de": ["The Lion’s Crest", "Erstes Rätsel"]},
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
    "gameGenreIds": ["rpg"]
  },
  {
    "id": "kingdom-come-deliverance-kcd1-alchemy-from-book",
    "moodIds": ["focused"],
    "type": "objective",
    "tags": ["crafting"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "kingdom-come-deliverance",
      "installmentIds": ["kcd-1"]
    },
    "translations": {
      "en": {
        "name": "Follow the Recipe",
        "objective": "At an alchemy bench, **brew one potion manually, following its recipe step by step**. Have the ingredients ready and follow its heating and preparation instructions.",
        "gameObjective": "At an alchemy bench, **brew one potion manually, following its recipe step by step**. Have the ingredients ready and follow its heating and preparation instructions."
      },
      "de": {
        "name": "Nach Rezept brauen",
        "objective": "Brau am Alchemietisch **einen Trank Schritt für Schritt von Hand nach seinem Rezept**. Halte die Zutaten bereit und folge den Anweisungen zum Erhitzen und Verarbeiten.",
        "gameObjective": "Brau am Alchemietisch **einen Trank Schritt für Schritt von Hand nach seinem Rezept**. Halte die Zutaten bereit und folge den Anweisungen zum Erhitzen und Verarbeiten."
      }
    },
    "experience": {
      "family": "manual-alchemy",
      "cardMetadata": { "genreIds": ["rpg", "adventure"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["crafting"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Recipe known; ingredients; alchemy bench",
          "de": "Rezept bekannt; Zutaten; Alchemietisch",
          "chips": {"en": ["Recipe", "Ingredients"], "de": ["Rezept", "Zutaten"]},
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
    "gameGenreIds": ["rpg", "adventure"]
  },
  {
    "id": "kingdom-come-deliverance-kcd1-maintain-armor",
    "moodIds": ["progress"],
    "type": "objective",
    "tags": ["crafting"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "kingdom-come-deliverance",
      "installmentIds": ["kcd-1"]
    },
    "translations": {
      "en": {
        "name": "Before the Road",
        "objective": "Inspect Henry's equipment and **repair one damaged piece yourself before the next trip**.",
        "gameObjective": "Inspect Henry's equipment and **repair one damaged piece yourself before the next trip**."
      },
      "de": {
        "name": "Vor dem Aufbruch",
        "objective": "Prüfe Heinrichs Ausrüstung und **repariere vor der nächsten Reise ein beschädigtes Teil selbst**.",
        "gameObjective": "Prüfe Heinrichs Ausrüstung und **repariere vor der nächsten Reise ein beschädigtes Teil selbst**."
      }
    },
    "experience": {
      "family": "equipment-repair",
      "cardMetadata": { "genreIds": ["rpg", "adventure"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["crafting"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Repair kit; skill for damaged equipment",
          "de": "Reparaturset; Können für beschädigte Ausrüstung",
          "chips": {"en": ["Repair kit"], "de": ["Reparaturset"]},
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
    "gameGenreIds": ["rpg", "adventure"]
  },
  {
    "id": "kingdom-come-deliverance-kcd1-read-a-book",
    "moodIds": ["curious"],
    "type": "objective",
    "tags": ["story"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "kingdom-come-deliverance",
      "installmentIds": ["kcd-1"]
    },
    "translations": {
      "en": {
        "name": "A Book Worth Reading",
        "objective": "Once Henry can read, **study an unread skill book for one in-game hour**. Choose a subject that could help with your next outing.",
        "gameObjective": "Once Henry can read, **study an unread skill book for one in-game hour**. Choose a subject that could help with your next outing."
      },
      "de": {
        "name": "Ein nützliches Buch",
        "objective": "Sobald Heinrich lesen kann, **nimm dir ein ungelesenes Fähigkeitsbuch vor und studiere eine Stunde im Spiel**. Such etwas, das dir bei deiner nächsten Unternehmung helfen könnte.",
        "gameObjective": "Sobald Heinrich lesen kann, **nimm dir ein ungelesenes Fähigkeitsbuch vor und studiere eine Stunde im Spiel**. Such etwas, das dir bei deiner nächsten Unternehmung helfen könnte."
      }
    },
    "experience": {
      "family": "skill-book",
      "cardMetadata": { "genreIds": ["rpg", "adventure"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Reading learned; unread skill book",
          "de": "Lesen gelernt; ungelesenes Fähigkeitsbuch",
          "chips": {"en": ["Skill book"], "de": ["Fähigkeitsbuch"]},
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
    "gameGenreIds": ["rpg", "adventure"]
  },
  {
    "id": "kingdom-come-deliverance-kcd1-dice-wager",
    "moodIds": ["relax"],
    "type": "objective",
    "tags": ["puzzles"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "kingdom-come-deliverance",
      "installmentIds": ["kcd-1"]
    },
    "translations": {
      "en": {
        "name": "An Evening of Dice",
        "objective": "Sit down for a game of Farkle and **finish one full wager without reloading a bad roll**.",
        "gameObjective": "Sit down for a game of Farkle and **finish one full wager without reloading a bad roll**."
      },
      "de": {
        "name": "Ein Abend mit Würfeln",
        "objective": "Setz dich zu einer Partie Farkle und **spiel einen ganzen Einsatz ohne Neuladen nach schlechtem Wurf**.",
        "gameObjective": "Setz dich zu einer Partie Farkle und **spiel einen ganzen Einsatz ohne Neuladen nach schlechtem Wurf**."
      }
    },
    "experience": {
      "family": "dice-wager",
      "cardMetadata": { "genreIds": ["rpg", "adventure"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["puzzles"],
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
    "gameGenreIds": ["rpg", "adventure"]
  },
  {
    "id": "kingdom-come-deliverance-kcd1-speech-first",
    "moodIds": ["curious"],
    "type": "experiment",
    "tags": ["dialogue"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "kingdom-come-deliverance",
      "installmentIds": ["kcd-1"]
    },
    "translations": {
      "en": {
        "name": "Talk Before Steel",
        "objective": "At an available encounter with a speech option, **try a solution through dialogue before drawing a weapon**.",
        "gameObjective": "At an available encounter with a speech option, **try a solution through dialogue before drawing a weapon**."
      },
      "de": {
        "name": "Reden vor Kämpfen",
        "objective": "Versuch bei einer verfügbaren Begegnung mit Redeoption **zuerst eine Lösung im Gespräch**, bevor du zur Waffe greifst.",
        "gameObjective": "Versuch bei einer verfügbaren Begegnung mit Redeoption **zuerst eine Lösung im Gespräch**, bevor du zur Waffe greifst."
      }
    },
    "experience": {
      "family": "dialogue-first",
      "cardMetadata": { "genreIds": ["rpg", "adventure"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["dialogue"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Verfügbare Begegnung mit Redeoption",
          "en": "Available encounter with a speech option",
          "chips": {"en": ["Speech option"], "de": ["Redeoption"]},
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
    "gameGenreIds": ["rpg", "adventure"]
  },
  {
    "id": "kingdom-come-deliverance-kcd1-inn-cleanup",
    "moodIds": ["overwhelmed"],
    "type": "objective",
    "tags": ["current-save"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "kingdom-come-deliverance",
      "installmentIds": ["kcd-1"]
    },
    "translations": {
      "en": {
        "name": "A Proper Rest",
        "objective": "Before Henry's next quest, **wash, eat, and sleep in an owned or rented bed** so all three needs are settled.",
        "gameObjective": "Before Henry's next quest, **wash, eat, and sleep in an owned or rented bed** so all three needs are settled."
      },
      "de": {
        "name": "Richtig ausruhen",
        "objective": "Bevor Heinrich die nächste Aufgabe angeht, **wasch dich, iss etwas und schlaf in einem eigenen oder gemieteten Bett**.",
        "gameObjective": "Bevor Heinrich die nächste Aufgabe angeht, **wasch dich, iss etwas und schlaf in einem eigenen oder gemieteten Bett**."
      }
    },
    "experience": {
      "family": "needs-routine",
      "cardMetadata": { "genreIds": ["rpg", "adventure"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "en": "Food; owned or rented bed",
          "de": "Nahrung; eigenes oder gemietetes Bett",
          "chips": {"en": ["Bed"], "de": ["Bett"]},
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
    "gameGenreIds": ["rpg", "adventure"]
  },
  {
    "id": "kingdom-come-deliverance-kcd1-bow-hunt",
    "moodIds": ["challenge"],
    "type": "challenge",
    "tags": ["hunting", "three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "kingdom-come-deliverance",
      "installmentIds": ["kcd-1"]
    },
    "translations": {
      "en": {
        "name": "A Clean Bow Shot",
        "objective": "On a legal hunt, **hit a hare with your bow**. Finish after a hit or three shots.",
        "gameObjective": "On a legal hunt, **hit a hare with your bow**. Finish after a hit or three shots."
      },
      "de": {
        "name": "Ein sauberer Bogenschuss",
        "objective": "Triff bei einer erlaubten Jagd **einen Hasen mit dem Bogen**. Hör nach einem Treffer oder drei Schüssen auf.",
        "gameObjective": "Triff bei einer erlaubten Jagd **einen Hasen mit dem Bogen**. Hör nach einem Treffer oder drei Schüssen auf."
      }
    },
    "experience": {
      "family": "bow-hunting",
      "cardMetadata": { "genreIds": ["rpg", "adventure"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["hunting"],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Legal hunt; bow and arrows",
          "de": "Erlaubte Jagd; Bogen und Pfeile",
          "chips": {"en": ["Bow", "Arrows"], "de": ["Bogen", "Pfeile"]},
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
    "gameGenreIds": ["rpg", "adventure"]
  },
  {
    "id": "kingdom-come-deliverance-kcd2-alchemy-variation",
    "moodIds": ["curious"],
    "type": "experiment",
    "tags": ["crafting"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "kingdom-come-deliverance",
      "installmentIds": ["kcd-2"]
    },
    "translations": {
      "en": {
        "name": "Read the Cauldron",
        "objective": "At an alchemy bench, **brew a known potion manually and compare its quality with your last batch**.",
        "gameObjective": "At an alchemy bench, **brew a known potion manually and compare its quality with your last batch**."
      },
      "de": {
        "name": "Den Kessel lesen",
        "objective": "Brau am Alchemietisch **einen bekannten Trank von Hand und vergleiche seine Qualität mit deiner letzten Charge**.",
        "gameObjective": "Brau am Alchemietisch **einen bekannten Trank von Hand und vergleiche seine Qualität mit deiner letzten Charge**."
      }
    },
    "experience": {
      "family": "potion-quality",
      "cardMetadata": { "genreIds": ["rpg", "adventure"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["crafting"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Known recipe; previous batch; ingredients",
          "de": "Bekanntes Rezept; letzte Charge; Zutaten",
          "chips": {"en": ["Recipe", "Previous batch"], "de": ["Rezept", "Letzte Charge"]},
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
    "gameGenreIds": ["rpg", "adventure"]
  },
  {
    "id": "kingdom-come-deliverance-kcd2-dress-for-dialogue",
    "moodIds": ["curious"],
    "type": "experiment",
    "tags": ["outfit", "dialogue"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "kingdom-come-deliverance",
      "installmentIds": ["kcd-2"]
    },
    "translations": {
      "en": {
        "name": "Dress for the Meeting",
        "objective": "Before a conversation with a speech check, **put on clean clothes suited to the person you are meeting and try the check**. Notice whether your appearance helps.",
        "gameObjective": "Before a conversation with a speech check, **put on clean clothes suited to the person you are meeting and try the check**. Notice whether your appearance helps."
      },
      "de": {
        "name": "Passend zum Gespräch",
        "objective": "Zieh vor einem Gespräch mit Redeprobe **saubere Kleidung an, die zu deinem Gegenüber passt, und versuch die Probe**. Achte darauf, ob dein Auftreten hilft.",
        "gameObjective": "Zieh vor einem Gespräch mit Redeprobe **saubere Kleidung an, die zu deinem Gegenüber passt, und versuch die Probe**. Achte darauf, ob dein Auftreten hilft."
      }
    },
    "experience": {
      "family": "dialogue-outfit",
      "cardMetadata": { "genreIds": ["rpg", "adventure"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["outfit", "dialogue"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Available speech check; clean clothing",
          "de": "Verfügbare Redeprobe; saubere Kleidung",
          "chips": {"en": ["Speech check", "Clean clothing"], "de": ["Redeprobe", "Saubere Kleidung"]},
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
    "gameGenreIds": ["rpg", "adventure"]
  },
  {
    "id": "kingdom-come-deliverance-kcd2-dialogue-evidence",
    "moodIds": ["focused"],
    "type": "objective",
    "tags": ["dialogue"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "kingdom-come-deliverance",
      "installmentIds": ["kcd-2"]
    },
    "translations": {
      "en": {
        "name": "Ask Before Accusing",
        "objective": "In an investigation, **find one clue and use it in a conversation before choosing whom to accuse**.",
        "gameObjective": "In an investigation, **find one clue and use it in a conversation before choosing whom to accuse**."
      },
      "de": {
        "name": "Erst prüfen, dann beschuldigen",
        "objective": "Finde bei einer Ermittlung **einen Hinweis und bring ihn in einem Gespräch ein**, bevor du jemanden beschuldigst.",
        "gameObjective": "Finde bei einer Ermittlung **einen Hinweis und bring ihn in einem Gespräch ein**, bevor du jemanden beschuldigst."
      }
    },
    "experience": {
      "family": "investigation-evidence",
      "cardMetadata": { "genreIds": ["rpg", "adventure"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["dialogue"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Active investigation with usable clue",
          "de": "Aktive Ermittlung mit nutzbarem Hinweis",
          "chips": {"en": ["Investigation", "Clue"], "de": ["Ermittlung", "Hinweis"]},
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
    "gameGenreIds": ["rpg", "adventure"]
  },
  {
    "id": "kingdom-come-deliverance-kcd2-horse-shortcut",
    "moodIds": ["explore"],
    "type": "objective",
    "tags": ["traversal"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "kingdom-come-deliverance",
      "installmentIds": ["kcd-2"]
    },
    "translations": {
      "en": {
        "name": "A Road Less Used",
        "objective": "In **Kingdom Come: Deliverance II**, **ride to a nearby quest location using minor tracks instead of the main road**. Let the route show you the countryside.",
        "gameObjective": "In **Kingdom Come: Deliverance II**, **ride to a nearby quest location using minor tracks instead of the main road**. Let the route show you the countryside."
      },
      "de": {
        "name": "Abseits der Hauptstraße",
        "objective": "Reite in **Kingdom Come: Deliverance II** **über kleine Wege statt der Hauptstraße zu einem nahen Questort**. Schau dir unterwegs die Landschaft an.",
        "gameObjective": "Reite in **Kingdom Come: Deliverance II** **über kleine Wege statt der Hauptstraße zu einem nahen Questort**. Schau dir unterwegs die Landschaft an."
      }
    },
    "experience": {
      "family": "backroad-riding",
      "cardMetadata": { "genreIds": ["rpg", "adventure"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "en": "Horse; nearby accessible quest location",
          "de": "Pferd; naher erreichbarer Questort",
          "chips": {"en": ["Horse", "Quest location"], "de": ["Pferd", "Questort"]},
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
    "gameGenreIds": ["rpg", "adventure"]
  },
  {
    "id": "kingdom-come-deliverance-kcd2-stealth-pebble",
    "moodIds": ["curious"],
    "type": "experiment",
    "tags": ["stealth"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "kingdom-come-deliverance",
      "installmentIds": ["kcd-2"]
    },
    "translations": {
      "en": {
        "name": "A Small Distraction",
        "objective": "During an infiltration, **distract one guard with a thrown stone and pass the place they were watching**.",
        "gameObjective": "During an infiltration, **distract one guard with a thrown stone and pass the place they were watching**."
      },
      "de": {
        "name": "Eine kleine Ablenkung",
        "objective": "Lenk bei einem Schleichgang **eine Wache mit einem geworfenen Stein ab und schlüpf an ihrem Posten vorbei**.",
        "gameObjective": "Lenk bei einem Schleichgang **eine Wache mit einem geworfenen Stein ab und schlüpf an ihrem Posten vorbei**."
      }
    },
    "experience": {
      "family": "guard-distraction",
      "cardMetadata": { "genreIds": ["rpg", "adventure"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["stealth"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Infiltration with distractible guard",
          "de": "Schleichgang mit ablenkbarer Wache",
          "chips": {"en": ["Distractible guard"], "de": ["Ablenkbare Wache"]},
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
    "gameGenreIds": ["rpg", "adventure"]
  },
  {
    "id": "kingdom-come-deliverance-kcd2-parry-practice",
    "moodIds": ["challenge"],
    "type": "challenge",
    "tags": ["parry", "three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "kingdom-come-deliverance",
      "installmentIds": ["kcd-2"]
    },
    "translations": {
      "en": {
        "name": "Counter in Combat",
        "objective": "In a real fight or sparring match, **land a counterattack after a well-timed block**. Finish after the hit or three bouts.",
        "gameObjective": "In a real fight or sparring match, **land a counterattack after a well-timed block**. Finish after the hit or three bouts."
      },
      "de": {
        "name": "Konter im Kampf",
        "objective": "Lande in einem echten Kampf oder Übungskampf **einen Gegenangriff nach einem gut getimten Block**. Hör nach dem Treffer oder drei Kämpfen auf.",
        "gameObjective": "Lande in einem echten Kampf oder Übungskampf **einen Gegenangriff nach einem gut getimten Block**. Hör nach dem Treffer oder drei Kämpfen auf."
      }
    },
    "experience": {
      "family": "parry-practice",
      "cardMetadata": { "genreIds": ["rpg", "adventure"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["parry"],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Timed blocking learned; legal practice available",
          "de": "Zeitgerechtes Blocken gelernt; Übung verfügbar",
          "chips": {"en": ["Timed blocking"], "de": ["Zeitgerechtes Blocken"]},
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
    "gameGenreIds": ["rpg", "adventure"]
  },
  {
    "id": "kingdom-come-deliverance-kcd2-ordinary-tavern",
    "moodIds": ["curious"],
    "type": "objective",
    "tags": ["dialogue"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "kingdom-come-deliverance",
      "installmentIds": ["kcd-2"]
    },
    "translations": {
      "en": {
        "name": "A Tavern Story",
        "objective": "Visit a tavern between quests and **hear one local conversation or rumor, then follow its first lead**.",
        "gameObjective": "Visit a tavern between quests and **hear one local conversation or rumor, then follow its first lead**."
      },
      "de": {
        "name": "Eine Wirtshausgeschichte",
        "objective": "Besuche zwischen Quests ein Wirtshaus, **hör ein Gespräch oder Gerücht und folge dem ersten Hinweis**.",
        "gameObjective": "Besuche zwischen Quests ein Wirtshaus, **hör ein Gespräch oder Gerücht und folge dem ersten Hinweis**."
      }
    },
    "experience": {
      "family": "rumor-investigation",
      "cardMetadata": { "genreIds": ["rpg", "adventure"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["dialogue"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Available local rumor or quest lead",
          "de": "Verfügbares Gerücht oder Auftragshinweis",
          "chips": {"en": ["Local rumor"], "de": ["Gerücht"]},
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
    "gameGenreIds": ["rpg", "adventure"]
  }
]);
