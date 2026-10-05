import { defineQuests } from "../defineQuests";

export const GamesCrimsonDesertQuests = defineQuests([
  {
    "id": "crimson-desert-skybridge-gate",
    "moodIds": ["explore"],
    "type": "objective",
    "tags": ["puzzles", "exploration"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "crimson-desert",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Open an Abyss Gate",
        "objective": "Find an unrestored **Abyss Skybridge Gate** in Crimson Desert. **Solve its local mechanism, restore the gate, and travel through it once.**",
        "gameObjective": "Find an unrestored **Abyss Skybridge Gate** in Crimson Desert. **Solve its local mechanism, restore the gate, and travel through it once.**"
      },
      "de": {
        "name": "Ein Tor im Abyss öffnen",
        "objective": "Finde in Crimson Desert ein noch nicht aktiviertes **Abyss-Skybridge-Tor**. **Löse seinen Mechanismus, stelle das Tor wieder her und reise einmal hindurch.**",
        "gameObjective": "Finde in Crimson Desert ein noch nicht aktiviertes **Abyss-Skybridge-Tor**. **Löse seinen Mechanismus, stelle das Tor wieder her und reise einmal hindurch.**"
      }
    },
    "experience": {
      "family": "abyss-gate",
      "cardMetadata": { "genreIds": ["adventure", "puzzle"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["puzzles", "exploration"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Abyss access; unrestored Skybridge Gate",
          "de": "Abyss-Zugang; noch nicht aktiviertes Skybridge-Tor",
          "chips": {"en": ["Abyss", "Skybridge Gate"], "de": ["Abyss", "Skybridge-Tor"]},
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
    "gameGenreIds": ["adventure", "puzzle"]
  },
  {
    "id": "crimson-desert-abyss-refinement",
    "moodIds": ["progress"],
    "type": "objective",
    "tags": ["crafting", "loadout"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "crimson-desert",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "An Artifact in the Blade",
        "objective": "Take a favorite weapon and an **Abyss Artifact** to a refinement station. **Use the artifact for its next refinement and test the weapon in one fight.**",
        "gameObjective": "Take a favorite weapon and an **Abyss Artifact** to a refinement station. **Use the artifact for its next refinement and test the weapon in one fight.**"
      },
      "de": {
        "name": "Ein Artefakt für die Klinge",
        "objective": "Bring eine Lieblingswaffe und ein **Abyss-Artefakt** zu einer Verbesserungsstation. **Nutze das Artefakt für die nächste Stufe und teste die Waffe in einem Kampf.**",
        "gameObjective": "Bring eine Lieblingswaffe und ein **Abyss-Artefakt** zu einer Verbesserungsstation. **Nutze das Artefakt für die nächste Stufe und teste die Waffe in einem Kampf.**"
      }
    },
    "experience": {
      "family": "weapon-refinement",
      "cardMetadata": { "genreIds": ["rpg"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["crafting", "loadout"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Verbesserungsstation; Waffe für nächste Artefakt-Stufe geeignet; Artefakt und übrige Materialien",
          "en": "Refinement station; weapon eligible for next artifact tier; artifact and other materials",
          "chips": {"en": ["Refinement station", "Weapon"], "de": ["Verbesserungsstation", "Waffe"]},
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
    "id": "crimson-desert-fish-pond",
    "moodIds": ["relax"],
    "type": "objective",
    "tags": ["fishing"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "crimson-desert",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "A Fish at Home",
        "objective": "Use a fishing rod you already have in **Crimson Desert**. **Catch one fish and add it to your fish pond.**",
        "gameObjective": "Use a fishing rod you already have in **Crimson Desert**. **Catch one fish and add it to your fish pond.**"
      },
      "de": {
        "name": "Ein Fisch für den Teich",
        "objective": "Angel in **Crimson Desert** mit einer Angel, die du schon besitzt. **Fang einen Fisch und setz ihn in deinen Fischteich.**",
        "gameObjective": "Angel in **Crimson Desert** mit einer Angel, die du schon besitzt. **Fang einen Fisch und setz ihn in deinen Fischteich.**"
      }
    },
    "experience": {
      "family": "fish-pond",
      "cardMetadata": { "genreIds": ["rpg", "adventure"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["fishing"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Patch 1.08+; fishing rod; pond with space",
          "de": "Patch 1.08+; Angel; Teich mit Platz",
          "chips": {"en": ["Patch 1.08+", "Fishing rod"], "de": ["Patch 1.08+", "Angel"]},
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
    "id": "crimson-desert-pet-break",
    "moodIds": ["low-energy", "relax"],
    "type": "inspiration",
    "tags": ["animals"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "crimson-desert",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Walk with a Pet",
        "objective": "Spend this Crimson Desert session with a pet you have already registered. **Take it along while you explore nearby**, then follow whatever catches your eye.",
        "gameObjective": "Spend this Crimson Desert session with a pet you have already registered. **Take it along while you explore nearby**, then follow whatever catches your eye."
      },
      "de": {
        "name": "Mit dem Tier unterwegs",
        "objective": "Nimm in Crimson Desert ein Tier mit, das du bereits als Haustier hast. **Erkunde mit ihm die nähere Umgebung** und folge einfach dem, was dir auffällt.",
        "gameObjective": "Nimm in Crimson Desert ein Tier mit, das du bereits als Haustier hast. **Erkunde mit ihm die nähere Umgebung** und folge einfach dem, was dir auffällt."
      }
    },
    "experience": {
      "family": "pet-roaming",
      "cardMetadata": { "genreIds": ["adventure"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["animals"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Registered pet",
          "de": "Registriertes Haustier",
          "chips": {"en": ["Registered pet"], "de": ["Haustier"]},
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
    "id": "crimson-desert-abyss-puzzle",
    "moodIds": ["curious", "focused"],
    "type": "objective",
    "tags": ["puzzles"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "crimson-desert",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Abyss Mechanism",
        "objective": "Choose an **Abyss puzzle** already marked on your **Crimson Desert** map. Work through its mechanism and **activate the marked exit or reward** to finish.",
        "gameObjective": "Choose an **Abyss puzzle** already marked on your **Crimson Desert** map. Work through its mechanism and **activate the marked exit or reward** to finish."
      },
      "de": {
        "name": "Mechanismus im Abyss",
        "objective": "Such dir in **Crimson Desert** ein bereits markiertes **Abyss-Rätsel** auf der Karte aus. Löse den Mechanismus und **aktiviere den markierten Ausgang oder die Belohnung**.",
        "gameObjective": "Such dir in **Crimson Desert** ein bereits markiertes **Abyss-Rätsel** auf der Karte aus. Löse den Mechanismus und **aktiviere den markierten Ausgang oder die Belohnung**."
      }
    },
    "experience": {
      "family": "abyss-puzzle",
      "cardMetadata": { "genreIds": ["adventure", "puzzle"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["puzzles"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Reachable marked Abyss puzzle",
          "de": "Erreichbares markiertes Abyss-Rätsel",
          "chips": {"en": ["Abyss puzzle"], "de": ["Abyss-Rätsel"]},
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
    "gameGenreIds": ["adventure", "puzzle"]
  },
  {
    "id": "crimson-desert-boss-rematch",
    "moodIds": ["challenge", "focused"],
    "type": "challenge",
    "tags": ["boss", "three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "crimson-desert",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "One More Round",
        "objective": "Open an available Crimson Desert boss Memory Fragment and choose **Resonate**, where the boss scales to your progress. **Win the rematch or finish your third attempt.**",
        "gameObjective": "Open an available Crimson Desert boss Memory Fragment and choose **Resonate**, where the boss scales to your progress. **Win the rematch or finish your third attempt.**"
      },
      "de": {
        "name": "Noch eine Runde",
        "objective": "Öffne ein verfügbares Boss-Erinnerungsfragment in Crimson Desert und wähle **Resonanz**, damit der Boss mit dir skaliert. **Gewinne den Rückkampf oder beende deinen dritten Versuch.**",
        "gameObjective": "Öffne ein verfügbares Boss-Erinnerungsfragment in Crimson Desert und wähle **Resonanz**, damit der Boss mit dir skaliert. **Gewinne den Rückkampf oder beende deinen dritten Versuch.**"
      }
    },
    "experience": {
      "family": "boss-rematch",
      "cardMetadata": { "genreIds": ["rpg", "adventure"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["boss"],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Patch 1.05+; defeated boss and lantern",
          "de": "Patch 1.05+; besiegter Boss und Laterne",
          "chips": {"en": ["Patch 1.05+", "Lantern"], "de": ["Patch 1.05+", "Laterne"]},
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
    "gameGenreIds": ["rpg", "adventure"],
    "rarity": "special"
  },
  {
    "id": "crimson-desert-pinball-break",
    "moodIds": ["relax"],
    "type": "objective",
    "tags": [],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "crimson-desert",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Pywel Pinball",
        "objective": "Find an available **pinball table in Crimson Desert** and **play one full round**, letting the score stand without restarting.",
        "gameObjective": "Find an available **pinball table in Crimson Desert** and **play one full round**, letting the score stand without restarting."
      },
      "de": {
        "name": "Flipperpause in Pywel",
        "objective": "Such einen verfügbaren **Flipper in Crimson Desert** und **spiel eine ganze Runde**, ohne den Punktestand durch Neustarten zu ändern.",
        "gameObjective": "Such einen verfügbaren **Flipper in Crimson Desert** und **spiel eine ganze Runde**, ohne den Punktestand durch Neustarten zu ändern."
      }
    },
    "experience": {
      "family": "pinball",
      "cardMetadata": { "genreIds": ["adventure"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "en": "Patch 1.10+; playable pinball table",
          "de": "Patch 1.10+; spielbarer Flipper",
          "chips": {"en": ["Patch 1.10+", "Pinball table"], "de": ["Patch 1.10+", "Spielbarer Flipper"]},
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
    "id": "crimson-desert-save-a-view",
    "moodIds": ["create"],
    "type": "creation",
    "tags": ["photography"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "crimson-desert",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Pywel in Frame",
        "objective": "Find a view in **Crimson Desert** that includes both a landmark and its surroundings. Open Photo Mode, adjust the camera, and **save one screenshot**.",
        "gameObjective": "Find a view in **Crimson Desert** that includes both a landmark and its surroundings. Open Photo Mode, adjust the camera, and **save one screenshot**."
      },
      "de": {
        "name": "Pywel im Bild",
        "objective": "Such dir in **Crimson Desert** einen Ausblick mit einem markanten Ort und seiner Umgebung. Öffne den Fotomodus, richte die Kamera aus und **speichere einen Screenshot**.",
        "gameObjective": "Such dir in **Crimson Desert** einen Ausblick mit einem markanten Ort und seiner Umgebung. Öffne den Fotomodus, richte die Kamera aus und **speichere einen Screenshot**."
      }
    },
    "experience": {
      "family": "photography",
      "cardMetadata": { "genreIds": ["adventure"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["photography"],
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
    "gameGenreIds": ["adventure"]
  },
  {
    "id": "crimson-desert-new-combat-chain",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["abilities"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "crimson-desert",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Link Two Skills",
        "objective": "With two combat skills unlocked in **Crimson Desert**, **try them consecutively in an ordinary enemy encounter** and see how smoothly the second follows the first.",
        "gameObjective": "With two combat skills unlocked in **Crimson Desert**, **try them consecutively in an ordinary enemy encounter** and see how smoothly the second follows the first."
      },
      "de": {
        "name": "Zwei Skills verbinden",
        "objective": "**Probier in Crimson Desert zwei freigeschaltete Kampfskills in einer gewöhnlichen Gegnerbegegnung nacheinander aus**. Schau, ob der zweite flüssig an den ersten anschließt.",
        "gameObjective": "**Probier in Crimson Desert zwei freigeschaltete Kampfskills in einer gewöhnlichen Gegnerbegegnung nacheinander aus**. Schau, ob der zweite flüssig an den ersten anschließt."
      }
    },
    "experience": {
      "family": "skill-chain",
      "cardMetadata": { "genreIds": ["rpg", "adventure"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["abilities"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Zwei nutzbare Kampfskills freigeschaltet",
          "en": "Two usable combat skills unlocked",
          "chips": {"en": ["Two combat skills"], "de": ["Zwei Kampfskills"]},
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
    "id": "crimson-desert-house-layout",
    "moodIds": ["create", "relax"],
    "type": "creation",
    "tags": ["decorating"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "crimson-desert",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Choose a Greymane Home",
        "objective": "At the Greymane Camp, **switch to an unlocked house layout and arrange two owned furnishings to fit its new space**. Save the layout.",
        "gameObjective": "At the Greymane Camp, **switch to an unlocked house layout and arrange two owned furnishings to fit its new space**. Save the layout."
      },
      "de": {
        "name": "Ein Zuhause für die Graumähnen",
        "objective": "Wechsle im Lager der Graumähnen **zu einem freigeschalteten Haustyp und richte zwei vorhandene Möbel passend zum neuen Grundriss ein**. Speichere die Änderung.",
        "gameObjective": "Wechsle im Lager der Graumähnen **zu einem freigeschalteten Haustyp und richte zwei vorhandene Möbel passend zum neuen Grundriss ein**. Speichere die Änderung."
      }
    },
    "experience": {
      "family": "home-layout",
      "cardMetadata": { "genreIds": ["rpg", "simulation"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["decorating"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Unlocked house layout; owned furnishings",
          "de": "Freigeschalteter Haustyp; eigene Möbel",
          "chips": {"en": ["House layout", "Furnishings"], "de": ["Haustyp", "Möbel"]},
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
    "gameGenreIds": ["rpg", "simulation"]
  },
  {
    "id": "crimson-desert-cook-before-departure",
    "moodIds": ["progress", "focused"],
    "type": "objective",
    "tags": ["cooking"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "crimson-desert",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Cook for the Road",
        "objective": "At an **available Crimson Desert cooking fire**, choose a known recipe whose ingredients you already have. **Cook one serving and put it in a quick slot** before leaving camp.",
        "gameObjective": "At an **available Crimson Desert cooking fire**, choose a known recipe whose ingredients you already have. **Cook one serving and put it in a quick slot** before leaving camp."
      },
      "de": {
        "name": "Essen für den Weg",
        "objective": "Wähl an einem **verfügbaren Kochfeuer in Crimson Desert** ein bekanntes Rezept, dessen Zutaten du schon hast. **Koch eine Portion und leg sie in einen Schnellzugriff**, bevor du das Lager verlässt.",
        "gameObjective": "Wähl an einem **verfügbaren Kochfeuer in Crimson Desert** ein bekanntes Rezept, dessen Zutaten du schon hast. **Koch eine Portion und leg sie in einen Schnellzugriff**, bevor du das Lager verlässt."
      }
    },
    "experience": {
      "family": "cooking",
      "cardMetadata": { "genreIds": ["rpg", "adventure"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["cooking"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Known cooking recipe and ingredients",
          "de": "Bekanntes Kochrezept und Zutaten",
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
    "id": "crimson-desert-dye-one-piece",
    "moodIds": ["create", "relax"],
    "type": "creation",
    "tags": ["outfit"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "crimson-desert",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "One Colour to Keep",
        "objective": "With the Dyehouse unlocked in **Crimson Desert** and dye already owned, recolour an equipped armour piece. **Apply the new look and see it in daylight**.",
        "gameObjective": "With the Dyehouse unlocked in **Crimson Desert** and dye already owned, recolour an equipped armour piece. **Apply the new look and see it in daylight**."
      },
      "de": {
        "name": "Eine Farbe behalten",
        "objective": "Färb in **Crimson Desert** mit freigeschaltetem Färber und vorhandener Farbe ein getragenes Rüstungsteil um. **Übernimm den neuen Look und schau ihn dir im Tageslicht an**.",
        "gameObjective": "Färb in **Crimson Desert** mit freigeschaltetem Färber und vorhandener Farbe ein getragenes Rüstungsteil um. **Übernimm den neuen Look und schau ihn dir im Tageslicht an**."
      }
    },
    "experience": {
      "family": "armor-dye",
      "cardMetadata": { "genreIds": ["rpg", "adventure"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["outfit"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Dyehouse unlocked; dyeable armor and dye",
          "de": "Färber freigeschaltet; färbbare Rüstung und Farbe",
          "chips": {"en": ["Dyehouse", "Dye"], "de": ["Färber", "Farbe"]},
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
    "id": "crimson-desert-log-for-camp",
    "moodIds": ["progress"],
    "type": "objective",
    "tags": ["crafting"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "crimson-desert",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Timber for the Camp",
        "objective": "In **Crimson Desert**, choose an available Greymane Camp request that needs timber and has a nearby source. **Chop the missing timber and hand in that request**.",
        "gameObjective": "In **Crimson Desert**, choose an available Greymane Camp request that needs timber and has a nearby source. **Chop the missing timber and hand in that request**."
      },
      "de": {
        "name": "Holz fürs Lager",
        "objective": "Wähl in **Crimson Desert** einen verfügbaren Lagerauftrag der Graumähnen, für den Holz fehlt und eine Quelle in der Nähe liegt. **Fäll das fehlende Holz und gib den Auftrag ab**.",
        "gameObjective": "Wähl in **Crimson Desert** einen verfügbaren Lagerauftrag der Graumähnen, für den Holz fehlt und eine Quelle in der Nähe liegt. **Fäll das fehlende Holz und gib den Auftrag ab**."
      }
    },
    "experience": {
      "family": "camp-request",
      "cardMetadata": { "genreIds": ["rpg", "adventure"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["crafting"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Available camp timber request; nearby trees",
          "de": "Verfügbarer Holz-Lagerauftrag; Bäume in der Nähe",
          "chips": {"en": ["Camp timber request", "Trees"], "de": ["Holz-Lagerauftrag", "Bäume"]},
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
    "id": "crimson-desert-loom-house-item",
    "moodIds": ["create", "progress"],
    "type": "creation",
    "tags": ["crafting", "decorating"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "crimson-desert",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Made at the Loom",
        "objective": "At a **Crimson Desert loom**, use a known furnishing recipe with materials you already own. **Craft it and place it in your unlocked house**.",
        "gameObjective": "At a **Crimson Desert loom**, use a known furnishing recipe with materials you already own. **Craft it and place it in your unlocked house**."
      },
      "de": {
        "name": "Am Webstuhl gemacht",
        "objective": "Nutz an einem **Webstuhl in Crimson Desert** ein bekanntes Möbelrezept mit vorhandenen Materialien. **Stell das Stück her und platziere es in deinem freigeschalteten Haus**.",
        "gameObjective": "Nutz an einem **Webstuhl in Crimson Desert** ein bekanntes Möbelrezept mit vorhandenen Materialien. **Stell das Stück her und platziere es in deinem freigeschalteten Haus**."
      }
    },
    "experience": {
      "family": "furnishing-craft",
      "cardMetadata": { "genreIds": ["rpg", "adventure"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["crafting", "decorating"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Patch 1.12+; loom, furnishing recipe and materials",
          "de": "Patch 1.12+; Webstuhl, Möbelrezept und Materialien",
          "chips": {"en": ["Patch 1.12+", "Loom"], "de": ["Patch 1.12+", "Webstuhl"]},
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
    "id": "crimson-desert-outside-lamp-path",
    "moodIds": ["create", "relax"],
    "type": "creation",
    "tags": ["decorating"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "crimson-desert",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Light the Doorway",
        "objective": "With outdoor housing decoration unlocked in **Crimson Desert**, place owned lights along the path to your door. **Save the arrangement and walk along the lit path after dark**.",
        "gameObjective": "With outdoor housing decoration unlocked in **Crimson Desert**, place owned lights along the path to your door. **Save the arrangement and walk along the lit path after dark**."
      },
      "de": {
        "name": "Licht vor der Tür",
        "objective": "Stell in **Crimson Desert** mit freigeschalteter Außendekoration vorhandene Leuchten entlang des Wegs zu deiner Tür auf. **Speichere die Anordnung und geh bei Dunkelheit den beleuchteten Weg entlang**.",
        "gameObjective": "Stell in **Crimson Desert** mit freigeschalteter Außendekoration vorhandene Leuchten entlang des Wegs zu deiner Tür auf. **Speichere die Anordnung und geh bei Dunkelheit den beleuchteten Weg entlang**."
      }
    },
    "experience": {
      "family": "exterior-lighting",
      "cardMetadata": { "genreIds": ["rpg", "adventure"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["decorating"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Patch 1.12+; Außendekoration und Leuchten; Dunkelheit",
          "en": "Patch 1.12+; outdoor housing decoration and lights; after dark",
          "chips": {"en": ["Patch 1.12+", "Outdoor lights"], "de": ["Patch 1.12+", "Außenleuchten"]},
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
    "id": "crimson-desert-read-a-memory",
    "moodIds": ["curious", "focused"],
    "type": "objective",
    "tags": ["story"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "crimson-desert",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Look through Visiones",
        "objective": "With **Visiones available in Crimson Desert**, choose a reachable unread memory already on your route. **Watch that memory through to its end** and see whose past it shows.",
        "gameObjective": "With **Visiones available in Crimson Desert**, choose a reachable unread memory already on your route. **Watch that memory through to its end** and see whose past it shows."
      },
      "de": {
        "name": "Durch Visiones schauen",
        "objective": "Such in **Crimson Desert mit verfügbaren Visiones** eine erreichbare ungelesene Erinnerung auf deinem Weg. **Sieh die Erinnerung bis zum Ende an** und schau, wessen Vergangenheit sie zeigt.",
        "gameObjective": "Such in **Crimson Desert mit verfügbaren Visiones** eine erreichbare ungelesene Erinnerung auf deinem Weg. **Sieh die Erinnerung bis zum Ende an** und schau, wessen Vergangenheit sie zeigt."
      }
    },
    "experience": {
      "family": "memory-viewing",
      "cardMetadata": { "genreIds": ["rpg", "adventure"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Visiones available; reachable unread memory",
          "de": "Visiones verfügbar; erreichbare ungelesene Erinnerung",
          "chips": {"en": ["Visiones", "Memory"], "de": ["Visiones", "Erinnerung"]},
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
    "id": "crimson-desert-observe-and-use",
    "moodIds": ["curious", "progress"],
    "type": "objective",
    "tags": ["abilities"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "crimson-desert",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Learn by Watching",
        "objective": "In **Crimson Desert**, find a nearby character offering an unlearned observable skill. **Learn it through observation and use it once in a suitable encounter or puzzle**.",
        "gameObjective": "In **Crimson Desert**, find a nearby character offering an unlearned observable skill. **Learn it through observation and use it once in a suitable encounter or puzzle**."
      },
      "de": {
        "name": "Beim Zuschauen lernen",
        "objective": "Such in **Crimson Desert** eine nahe Figur mit einem noch ungelernten beobachtbaren Skill. **Lern ihn durch Beobachten und nutze ihn einmal in einer passenden Begegnung oder einem Rätsel**.",
        "gameObjective": "Such in **Crimson Desert** eine nahe Figur mit einem noch ungelernten beobachtbaren Skill. **Lern ihn durch Beobachten und nutze ihn einmal in einer passenden Begegnung oder einem Rätsel**."
      }
    },
    "experience": {
      "family": "skill-observation",
      "cardMetadata": { "genreIds": ["rpg", "adventure"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["abilities"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Nearby observable unlearned skill",
          "de": "Beobachtbarer ungelernter Skill in der Nähe",
          "chips": {"en": ["Learnable skill"], "de": ["Erlernbare Fähigkeit"]},
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
    "id": "crimson-desert-glide-between-hills",
    "moodIds": ["explore"],
    "type": "inspiration",
    "tags": ["traversal"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "crimson-desert",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Between the Hills",
        "objective": "With gliding unlocked in Crimson Desert, start from a reachable high point. Read the valleys and rooftops below, **glide toward a place you have not visited**, and let the next climb choose your route.",
        "gameObjective": "With gliding unlocked in Crimson Desert, start from a reachable high point. Read the valleys and rooftops below, **glide toward a place you have not visited**, and let the next climb choose your route."
      },
      "de": {
        "name": "Zwischen den Hügeln",
        "objective": "Starte in Crimson Desert mit freigeschaltetem Gleiten an einem erreichbaren hohen Punkt. Schau auf die Täler und Dächer darunter, **gleite zu einem noch unbekannten Ort** und lass den nächsten Aufstieg deinen Weg bestimmen.",
        "gameObjective": "Starte in Crimson Desert mit freigeschaltetem Gleiten an einem erreichbaren hohen Punkt. Schau auf die Täler und Dächer darunter, **gleite zu einem noch unbekannten Ort** und lass den nächsten Aufstieg deinen Weg bestimmen."
      }
    },
    "experience": {
      "family": "gliding-roaming",
      "cardMetadata": { "genreIds": ["rpg", "adventure"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["traversal"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Gliding unlocked",
          "de": "Gleiten freigeschaltet",
          "chips": {"en": ["Gliding"], "de": ["Gleiten"]},
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
    "id": "crimson-desert-horse-without-map",
    "moodIds": ["relax"],
    "type": "inspiration",
    "tags": ["free-roam"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "crimson-desert",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Follow the Road",
        "objective": "Mount a horse you already own in Crimson Desert outside a safe settlement. Follow a road through familiar countryside and **take the turn that looks inviting**, without planning a destination.",
        "gameObjective": "Mount a horse you already own in Crimson Desert outside a safe settlement. Follow a road through familiar countryside and **take the turn that looks inviting**, without planning a destination."
      },
      "de": {
        "name": "Der Straße folgen",
        "objective": "Steig außerhalb einer sicheren Siedlung in Crimson Desert auf ein vorhandenes Pferd. Folge einer Straße durch vertraute Landschaft und **nimm die Abzweigung, die dich anspricht**, ohne vorher ein Ziel festzulegen.",
        "gameObjective": "Steig außerhalb einer sicheren Siedlung in Crimson Desert auf ein vorhandenes Pferd. Folge einer Straße durch vertraute Landschaft und **nimm die Abzweigung, die dich anspricht**, ohne vorher ein Ziel festzulegen."
      }
    },
    "experience": {
      "family": "horse-roaming",
      "cardMetadata": { "genreIds": ["rpg", "adventure"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["free-roam"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Owned horse and safe settlement",
          "de": "Eigenes Pferd und sichere Siedlung",
          "chips": {"en": ["Horse", "Settlement"], "de": ["Pferd", "Siedlung"]},
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
    "id": "crimson-desert-arm-wrestle-attempt",
    "moodIds": ["restless", "focused"],
    "type": "objective",
    "tags": [],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "crimson-desert",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Take a Seat",
        "objective": "Find an available arm-wrestling table in **Crimson Desert**. **Play one contest through its result**, win or lose.",
        "gameObjective": "Find an available arm-wrestling table in **Crimson Desert**. **Play one contest through its result**, win or lose."
      },
      "de": {
        "name": "An den Tisch",
        "objective": "Such in **Crimson Desert** einen verfügbaren Tisch zum Armdrücken. **Spiel einen Wettkampf bis zum Ergebnis**, ob Sieg oder Niederlage.",
        "gameObjective": "Such in **Crimson Desert** einen verfügbaren Tisch zum Armdrücken. **Spiel einen Wettkampf bis zum Ergebnis**, ob Sieg oder Niederlage."
      }
    },
    "experience": {
      "family": "arm-wrestling",
      "cardMetadata": { "genreIds": ["rpg", "adventure"], "playStyleIds": [] },
      "finish": "outcome",
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
    "gameGenreIds": ["rpg", "adventure"]
  },
  {
    "id": "crimson-desert-archery-steady-shot",
    "moodIds": ["focused", "challenge"],
    "type": "challenge",
    "tags": ["three-attempts"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "crimson-desert",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Hold for the Target",
        "objective": "Enter an **available Crimson Desert Archery Contest**. **Beat its posted target score while waiting for a clear aim before each shot**, or finish your third contest.",
        "gameObjective": "Enter an **available Crimson Desert Archery Contest**. **Beat its posted target score while waiting for a clear aim before each shot**, or finish your third contest."
      },
      "de": {
        "name": "Auf das Ziel warten",
        "objective": "Starte einen **verfügbaren Bogenschießwettbewerb in Crimson Desert**. **Überbiete die angezeigte Zielpunktzahl und warte vor jedem Schuss auf ein klares Ziel** oder beende deinen dritten Wettkampf.",
        "gameObjective": "Starte einen **verfügbaren Bogenschießwettbewerb in Crimson Desert**. **Überbiete die angezeigte Zielpunktzahl und warte vor jedem Schuss auf ein klares Ziel** oder beende deinen dritten Wettkampf."
      }
    },
    "experience": {
      "family": "archery",
      "cardMetadata": { "genreIds": ["rpg", "adventure"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Available archery contest",
          "de": "Verfügbarer Bogenschießwettbewerb",
          "chips": {"en": ["Archery contest"], "de": ["Bogenschießwettbewerb"]},
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
    "id": "crimson-desert-marksmanship-first",
    "moodIds": ["curious"],
    "type": "experiment",
    "tags": ["new-approach"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "crimson-desert",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Try the Other Range",
        "objective": "At an **available Marksmanship minigame in Crimson Desert**, **play once using aimed shots and keep the result**. Compare its targets with the bow contests you may know.",
        "gameObjective": "At an **available Marksmanship minigame in Crimson Desert**, **play once using aimed shots and keep the result**. Compare its targets with the bow contests you may know."
      },
      "de": {
        "name": "Den anderen Schießstand testen",
        "objective": "**Spiel das verfügbare Marksmanship-Minigame in Crimson Desert einmal mit gezielten Schüssen und behalte das Ergebnis**. Vergleiche seine Ziele mit den Bogenschießwettbewerben, die du vielleicht schon kennst.",
        "gameObjective": "**Spiel das verfügbare Marksmanship-Minigame in Crimson Desert einmal mit gezielten Schüssen und behalte das Ergebnis**. Vergleiche seine Ziele mit den Bogenschießwettbewerben, die du vielleicht schon kennst."
      }
    },
    "experience": {
      "family": "marksmanship",
      "cardMetadata": { "genreIds": ["rpg", "adventure"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "en": "Available marksmanship minigame",
          "de": "Verfügbares Marksmanship-Minigame",
          "chips": {"en": ["Marksmanship minigame"], "de": ["Marksmanship-Minigame"]},
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
    "id": "crimson-desert-ore-force-current",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["abilities", "crafting"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "crimson-desert",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Mine from a Distance",
        "objective": "With **Force Current unlocked for Kliff in Crimson Desert**, find a reachable ore vein. **Try mining it through Axiom Force and Force Current**, then compare the reach with your usual tool.",
        "gameObjective": "With **Force Current unlocked for Kliff in Crimson Desert**, find a reachable ore vein. **Try mining it through Axiom Force and Force Current**, then compare the reach with your usual tool."
      },
      "de": {
        "name": "Aus der Ferne abbauen",
        "objective": "Such in **Crimson Desert mit freigeschaltetem Force Current für Kliff** eine erreichbare Erzader. **Probier den Abbau über Axiom Force und Force Current** und vergleiche die Reichweite mit deinem üblichen Werkzeug.",
        "gameObjective": "Such in **Crimson Desert mit freigeschaltetem Force Current für Kliff** eine erreichbare Erzader. **Probier den Abbau über Axiom Force und Force Current** und vergleiche die Reichweite mit deinem üblichen Werkzeug."
      }
    },
    "experience": {
      "family": "ranged-mining",
      "cardMetadata": { "genreIds": ["rpg", "adventure"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["abilities", "crafting"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Kliff; Force Current unlocked",
          "de": "Kliff; Force Current freigeschaltet",
          "chips": {"en": ["Kliff", "Force Current"], "de": ["Kliff", "Force Current"]},
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
    "id": "crimson-desert-palm-socket-range",
    "moodIds": ["focused", "curious"],
    "type": "experiment",
    "tags": ["puzzles", "abilities"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "crimson-desert",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Seat the Core Remotely",
        "objective": "At an **unfinished Crimson Desert puzzle with a movable power core**, and with Kliff’s Force Current unlocked, **try seating the core through Axiom Force from a distance**. Stop after the socket activates or three placements.",
        "gameObjective": "At an **unfinished Crimson Desert puzzle with a movable power core**, and with Kliff’s Force Current unlocked, **try seating the core through Axiom Force from a distance**. Stop after the socket activates or three placements."
      },
      "de": {
        "name": "Den Kern fern einsetzen",
        "objective": "Probier an einem **offenen Crimson-Desert-Rätsel mit beweglichem Energiekern** und freigeschaltetem Force Current für Kliff, **den Kern aus der Ferne mit Axiom Force einzusetzen**. Hör nach aktivem Sockel oder drei Platzierungen auf.",
        "gameObjective": "Probier an einem **offenen Crimson-Desert-Rätsel mit beweglichem Energiekern** und freigeschaltetem Force Current für Kliff, **den Kern aus der Ferne mit Axiom Force einzusetzen**. Hör nach aktivem Sockel oder drei Platzierungen auf."
      }
    },
    "experience": {
      "family": "remote-socket",
      "cardMetadata": { "genreIds": ["rpg", "adventure"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["puzzles", "abilities"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Kliff; Force Current; unfinished power-core puzzle",
          "de": "Kliff; Force Current; offenes Energiekern-Rätsel",
          "chips": {"en": ["Force Current", "Power-core puzzle"], "de": ["Force Current", "Energiekern-Rätsel"]},
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
    "id": "crimson-desert-slide-chain-combat",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["abilities"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "crimson-desert",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Attack from the Slide",
        "objective": "With a sliding chain attack unlocked in **Crimson Desert**, enter a fight against ordinary enemies and **try the chain from a slide**.",
        "gameObjective": "With a sliding chain attack unlocked in **Crimson Desert**, enter a fight against ordinary enemies and **try the chain from a slide**."
      },
      "de": {
        "name": "Aus dem Rutschen angreifen",
        "objective": "Starte in **Crimson Desert** mit freigeschaltetem Kettenangriff beim Rutschen einen Kampf gegen normale Gegner. **Probier die Kette aus dem Rutschen**.",
        "gameObjective": "Starte in **Crimson Desert** mit freigeschaltetem Kettenangriff beim Rutschen einen Kampf gegen normale Gegner. **Probier die Kette aus dem Rutschen**."
      }
    },
    "experience": {
      "family": "slide-combat",
      "cardMetadata": { "genreIds": ["rpg", "adventure"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["abilities"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Sliding chain attack unlocked",
          "de": "Kettenangriff beim Rutschen freigeschaltet",
          "chips": {"en": ["Sliding chain attack"], "de": ["Rutsch-Kettenangriff"]},
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
    "id": "crimson-desert-storage-adventure-kit",
    "moodIds": ["overwhelmed", "progress"],
    "type": "objective",
    "tags": ["loadout"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "crimson-desert",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Inventory Space",
        "objective": "At private storage in **Crimson Desert**, keep your usual weapon and food. **Store one spare armor piece to free space in your carried inventory**.",
        "gameObjective": "At private storage in **Crimson Desert**, keep your usual weapon and food. **Store one spare armor piece to free space in your carried inventory**."
      },
      "de": {
        "name": "Platz im Inventar",
        "objective": "Behalte am privaten Lager in **Crimson Desert** deine übliche Waffe und dein Essen. **Lagere ein übriges Rüstungsteil ein, um Platz im mitgeführten Inventar zu schaffen**.",
        "gameObjective": "Behalte am privaten Lager in **Crimson Desert** deine übliche Waffe und dein Essen. **Lagere ein übriges Rüstungsteil ein, um Platz im mitgeführten Inventar zu schaffen**."
      }
    },
    "experience": {
      "family": "inventory-storage",
      "cardMetadata": { "genreIds": ["rpg", "adventure"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["loadout"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Private storage; spare armor",
          "de": "Privates Lager; übrige Rüstung",
          "chips": {"en": ["Private storage", "Armor"], "de": ["Privates Lager", "Rüstung"]},
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
    "id": "crimson-desert-fountain-workstation",
    "moodIds": ["create", "focused"],
    "type": "creation",
    "tags": ["crafting", "decorating"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "crimson-desert",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "A Garden Fountain",
        "objective": "With **outdoor housing decoration unlocked in Crimson Desert**, use an available workstation and a known fountain recipe with materials already owned. **Craft the fountain and place it outside your house** beside its entrance path.",
        "gameObjective": "With **outdoor housing decoration unlocked in Crimson Desert**, use an available workstation and a known fountain recipe with materials already owned. **Craft the fountain and place it outside your house** beside its entrance path."
      },
      "de": {
        "name": "Ein Gartenbrunnen",
        "objective": "Nutze mit **freigeschalteter Außendekoration fürs Haus in Crimson Desert** eine verfügbare Werkstation und ein bekanntes Brunnenrezept mit vorhandenen Materialien. **Stell den Brunnen her und platzier ihn draußen am Haus** neben dem Weg zur Tür.",
        "gameObjective": "Nutze mit **freigeschalteter Außendekoration fürs Haus in Crimson Desert** eine verfügbare Werkstation und ein bekanntes Brunnenrezept mit vorhandenen Materialien. **Stell den Brunnen her und platzier ihn draußen am Haus** neben dem Weg zur Tür."
      }
    },
    "experience": {
      "family": "fountain-building",
      "cardMetadata": { "genreIds": ["rpg", "adventure"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["crafting", "decorating"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Patch 1.12+; workstation, fountain recipe and materials",
          "de": "Patch 1.12+; Werkstation, Brunnenrezept und Materialien",
          "chips": {"en": ["Patch 1.12+", "Workstation"], "de": ["Patch 1.12+", "Werkstation"]},
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
    "id": "crimson-desert-damiane-memory-walk",
    "moodIds": ["curious", "explore"],
    "type": "inspiration",
    "tags": ["story"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "crimson-desert",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Pywel as Damiane",
        "objective": "With Damiane and Visiones unlocked in Crimson Desert, travel through a familiar area as her. Look for memories along the way and **explore how her movement changes the route** you usually take as Kliff.",
        "gameObjective": "With Damiane and Visiones unlocked in Crimson Desert, travel through a familiar area as her. Look for memories along the way and **explore how her movement changes the route** you usually take as Kliff."
      },
      "de": {
        "name": "Pywel als Damiane",
        "objective": "Reise in Crimson Desert mit freigeschalteter Damiane und Visiones als sie durch eine vertraute Gegend. Schau unterwegs nach Erinnerungen und **erkunde, wie ihr Movement deinen gewohnten Weg als Kliff verändert**.",
        "gameObjective": "Reise in Crimson Desert mit freigeschalteter Damiane und Visiones als sie durch eine vertraute Gegend. Schau unterwegs nach Erinnerungen und **erkunde, wie ihr Movement deinen gewohnten Weg als Kliff verändert**."
      }
    },
    "experience": {
      "family": "alternate-character",
      "cardMetadata": { "genreIds": ["rpg", "adventure"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Patch 1.12+; Damiane and Visiones unlocked",
          "de": "Patch 1.12+; Damiane und Visiones freigeschaltet",
          "chips": {"en": ["Patch 1.12+", "Visiones"], "de": ["Patch 1.12+", "Visiones"]},
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
    "id": "crimson-desert-climb-town-roof",
    "moodIds": ["explore", "focused"],
    "type": "objective",
    "tags": ["traversal"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "crimson-desert",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Above Hernand",
        "objective": "In **Crimson Desert**, choose an accessible Hernand roof you have not stood on. **Climb up and see the town from there**.",
        "gameObjective": "In **Crimson Desert**, choose an accessible Hernand roof you have not stood on. **Climb up and see the town from there**."
      },
      "de": {
        "name": "Über Hernand",
        "objective": "Such in **Crimson Desert** ein erreichbares Dach in Hernand, auf dem du noch nicht warst. **Kletter hinauf und sieh dir die Stadt von dort an**.",
        "gameObjective": "Such in **Crimson Desert** ein erreichbares Dach in Hernand, auf dem du noch nicht warst. **Kletter hinauf und sieh dir die Stadt von dort an**."
      }
    },
    "experience": {
      "family": "rooftop-navigation",
      "cardMetadata": { "genreIds": ["rpg", "adventure"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["traversal"],
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
    "id": "crimson-desert-camp-food-familiar",
    "moodIds": ["relax", "low-energy"],
    "type": "inspiration",
    "tags": ["cooking"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "crimson-desert",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Stay by the Campfire",
        "objective": "Return to the Greymane Camp in Crimson Desert with cooking unlocked. **Work with recipes and ingredients you already know**, wander between the kitchen and your lodgings, and leave the next battle for later.",
        "gameObjective": "Return to the Greymane Camp in Crimson Desert with cooking unlocked. **Work with recipes and ingredients you already know**, wander between the kitchen and your lodgings, and leave the next battle for later."
      },
      "de": {
        "name": "Am Lagerfeuer bleiben",
        "objective": "Kehr in Crimson Desert mit freigeschaltetem Kochen ins Lager der Graumähnen zurück. **Beschäftige dich mit vertrauten Rezepten und Zutaten**, schlendere zwischen Küche und Unterkunft und lass den nächsten Kampf noch warten.",
        "gameObjective": "Kehr in Crimson Desert mit freigeschaltetem Kochen ins Lager der Graumähnen zurück. **Beschäftige dich mit vertrauten Rezepten und Zutaten**, schlendere zwischen Küche und Unterkunft und lass den nächsten Kampf noch warten."
      }
    },
    "experience": {
      "family": "camp-cooking",
      "cardMetadata": { "genreIds": ["rpg", "adventure"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["cooking"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Camp cooking unlocked; known recipes and ingredients",
          "de": "Lagerkochen freigeschaltet; bekannte Rezepte und Zutaten",
          "chips": {"en": ["Camp cooking"], "de": ["Lagerkochen"]},
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
