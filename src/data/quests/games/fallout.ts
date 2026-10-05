import { defineQuests } from "../defineQuests";

export const GamesFalloutQuests = defineQuests([
  {
    "id": "fallout-fallout4-supply-line",
    "moodIds": ["progress"],
    "type": "objective",
    "tags": ["building"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "fallout",
      "installmentIds": ["fallout-4"]
    },
    "translations": {
      "en": {
        "name": "Link Two Settlements",
        "objective": "If Local Leader is unlocked, **assign a provisioner between two Fallout 4 settlements and confirm that their workshop materials are shared**.",
        "gameObjective": "If Local Leader is unlocked, **assign a provisioner between two Fallout 4 settlements and confirm that their workshop materials are shared**."
      },
      "de": {
        "name": "Zwei Siedlungen verbinden",
        "objective": "Wenn Lokaler Anführer freigeschaltet ist, **weise einen Versorger zwischen zwei Fallout-4-Siedlungen zu und prüfe, ob sie Werkstattmaterial teilen**.",
        "gameObjective": "Wenn Lokaler Anführer freigeschaltet ist, **weise einen Versorger zwischen zwei Fallout-4-Siedlungen zu und prüfe, ob sie Werkstattmaterial teilen**."
      }
    },
    "experience": {
      "family": "supply-line",
      "cardMetadata": { "genreIds": ["rpg", "simulation"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["building"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Local Leader; two owned settlements and free settler",
          "de": "Lokaler Anführer; zwei eigene Siedlungen und freier Siedler",
          "chips": {"en": ["Local Leader", "Settlements"], "de": ["Lokaler Anführer", "Siedlungen"]},
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
    "id": "fallout-fallout4-suppressed-test",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["crafting", "stealth"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "fallout",
      "installmentIds": ["fallout-4"]
    },
    "translations": {
      "en": {
        "name": "Test a Suppressor",
        "objective": "With a suppressor recipe and materials ready in **Fallout 4**, fit it to a compatible weapon. **Try it through one ordinary encounter and watch which nearby enemies react**. Success at staying hidden is optional.",
        "gameObjective": "With a suppressor recipe and materials ready in **Fallout 4**, fit it to a compatible weapon. **Try it through one ordinary encounter and watch which nearby enemies react**. Success at staying hidden is optional."
      },
      "de": {
        "name": "Schalldämpfer testen",
        "objective": "Montiere in **Fallout 4** mit verfügbarem Schalldämpfer-Rezept und Materialien den Aufsatz an einer passenden Waffe. **Probier sie in einer gewöhnlichen Begegnung aus und beobachte die reagierenden Gegner**. Ungesehen zu bleiben ist optional.",
        "gameObjective": "Montiere in **Fallout 4** mit verfügbarem Schalldämpfer-Rezept und Materialien den Aufsatz an einer passenden Waffe. **Probier sie in einer gewöhnlichen Begegnung aus und beobachte die reagierenden Gegner**. Ungesehen zu bleiben ist optional."
      }
    },
    "experience": {
      "family": "suppressor",
      "cardMetadata": { "genreIds": ["rpg"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["crafting", "stealth"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Suppressor recipe, materials and compatible gun",
          "de": "Schalldämpfer-Rezept, Material und passende Waffe",
          "chips": {"en": ["Suppressor recipe"], "de": ["Schalldämpfer-Rezept"]},
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
    "id": "fallout-fallout4-companion-reaction",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["story", "dialogue"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "fallout",
      "installmentIds": ["fallout-4"]
    },
    "translations": {
      "en": {
        "name": "What Does Your Companion Think?",
        "objective": "With a companion and an available quest conversation in **Fallout 4**, **make a choice that fits your character and watch how your companion responds**. Finish the conversation; no approval notification is required.",
        "gameObjective": "With a companion and an available quest conversation in **Fallout 4**, **make a choice that fits your character and watch how your companion responds**. Finish the conversation; no approval notification is required."
      },
      "de": {
        "name": "Was denkt dein Begleiter?",
        "objective": "**Triff in Fallout 4 mit einem Begleiter in einem verfügbaren Questgespräch eine Entscheidung passend zu deinem Charakter und beobachte seine Reaktion**. Beende das Gespräch; eine Zustimmungsmeldung ist nicht nötig.",
        "gameObjective": "**Triff in Fallout 4 mit einem Begleiter in einem verfügbaren Questgespräch eine Entscheidung passend zu deinem Charakter und beobachte seine Reaktion**. Beende das Gespräch; eine Zustimmungsmeldung ist nicht nötig."
      }
    },
    "experience": {
      "family": "companion-dialogue",
      "cardMetadata": { "genreIds": ["rpg", "adventure"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["story", "dialogue"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Companion; available quest conversation",
          "de": "Begleiter; verfügbares Questgespräch",
          "chips": {"en": ["Companion", "Quest conversation"], "de": ["Begleiter", "Questgespräch"]},
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
    "id": "fallout-fallout76-public-event",
    "moodIds": ["restless"],
    "type": "objective",
    "tags": [],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "fallout",
      "installmentIds": ["fallout-76"]
    },
    "translations": {
      "en": {
        "name": "Join a Public Event",
        "objective": "Join an active **Fallout 76 Public Event** from its map marker and help with the displayed objective. **Stay until the event result appears**, whether it succeeds or fails.",
        "gameObjective": "Join an active **Fallout 76 Public Event** from its map marker and help with the displayed objective. **Stay until the event result appears**, whether it succeeds or fails."
      },
      "de": {
        "name": "Bei einem Event mitmachen",
        "objective": "Nimm über den Kartenmarker an einem laufenden **Fallout-76-Öffentlichen Event** teil und hilf beim angezeigten Ziel. **Bleib, bis das Event-Ergebnis erscheint**, egal ob es gelingt.",
        "gameObjective": "Nimm über den Kartenmarker an einem laufenden **Fallout-76-Öffentlichen Event** teil und hilf beim angezeigten Ziel. **Bleib, bis das Event-Ergebnis erscheint**, egal ob es gelingt."
      }
    },
    "experience": {
      "family": "public-event",
      "cardMetadata": { "genreIds": ["rpg"], "playStyleIds": ["co-op"] },
      "finish": "attempt",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "en": "Active Public Event",
          "de": "Laufendes öffentliches Event",
          "chips": {"en": ["Public Event"], "de": ["Öffentliches Event"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "others",
          "participation": "co-op",
          "formation": "none",
          "mode": "Public Event"
        }
      ]
    },
    "gameGenreIds": ["rpg"]
  },
  {
    "id": "fallout-fallout76-vendor-stall",
    "moodIds": ["create"],
    "type": "creation",
    "tags": ["building", "trading"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "fallout",
      "installmentIds": ["fallout-76"]
    },
    "translations": {
      "en": {
        "name": "Open a CAMP Stall",
        "objective": "At your **Fallout 76 CAMP**, **place a vending machine and list one surplus item at a price you choose**.",
        "gameObjective": "At your **Fallout 76 CAMP**, **place a vending machine and list one surplus item at a price you choose**."
      },
      "de": {
        "name": "Verkauf im CAMP",
        "objective": "Stell in deinem **Fallout-76-CAMP** **einen Verkaufsautomaten auf und biete einen übrigen Gegenstand zu einem selbst gewählten Preis an**.",
        "gameObjective": "Stell in deinem **Fallout-76-CAMP** **einen Verkaufsautomaten auf und biete einen übrigen Gegenstand zu einem selbst gewählten Preis an**."
      }
    },
    "experience": {
      "family": "camp-vendor",
      "cardMetadata": { "genreIds": ["rpg", "simulation"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["building", "trading"],
      "rules": [],
      "prerequisites": [
        {
          "en": "CAMP vending plan, materials and surplus item",
          "de": "CAMP-Verkaufsplan, Material und übriger Gegenstand",
          "chips": {"en": ["CAMP vending plan"], "de": ["CAMP-Verkaufsplan"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["rpg", "simulation"]
  },
  {
    "id": "fallout-fallout76-scrap-to-learn",
    "moodIds": ["curious"],
    "type": "experiment",
    "tags": ["crafting"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "fallout",
      "installmentIds": ["fallout-76"]
    },
    "translations": {
      "en": {
        "name": "What Scrapping Teaches",
        "objective": "At a Fallout 76 workbench, **scrap a spare weapon and check whether it teaches a new mod** before replacing your usual gear.",
        "gameObjective": "At a Fallout 76 workbench, **scrap a spare weapon and check whether it teaches a new mod** before replacing your usual gear."
      },
      "de": {
        "name": "Was beim Zerlegen bleibt",
        "objective": "Zerlege an einer Fallout-76-Werkbank **eine übrige Waffe und prüfe, ob du dadurch einen neuen Aufsatz lernst**, bevor du deine Ausrüstung änderst.",
        "gameObjective": "Zerlege an einer Fallout-76-Werkbank **eine übrige Waffe und prüfe, ob du dadurch einen neuen Aufsatz lernst**, bevor du deine Ausrüstung änderst."
      }
    },
    "experience": {
      "family": "scrap-mod",
      "cardMetadata": { "genreIds": ["rpg"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["crafting"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Spare weapon; suitable workbench",
          "de": "Übrige Waffe; passende Werkbank",
          "chips": {"en": ["Weapon", "Suitable workbench"], "de": ["Waffe", "Werkbank"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["rpg"]
  },
  {
    "id": "fallout-fo4-sheltered-bunk-room",
    "moodIds": ["create", "relax"],
    "type": "creation",
    "tags": ["building"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "fallout",
      "installmentIds": ["fallout-4"]
    },
    "translations": {
      "en": {
        "name": "Beds under a Roof",
        "objective": "In **Fallout 4**, at an owned settlement with materials ready, **build a small roofed bunk room with one bed per settler currently missing a bed**. Keep every bed reachable and check the workshop’s bed count.",
        "gameObjective": "In **Fallout 4**, at an owned settlement with materials ready, **build a small roofed bunk room with one bed per settler currently missing a bed**. Keep every bed reachable and check the workshop’s bed count."
      },
      "de": {
        "name": "Betten unter einem Dach",
        "objective": "**Fallout 4**: **Bau in einer eigenen Siedlung mit vorhandenem Material einen kleinen Schlafraum mit Dach und einem Bett für jeden Bewohner, dem gerade eines fehlt**. Halte alle Betten erreichbar und prüfe die Bettenzahl der Werkstatt.",
        "gameObjective": "**Fallout 4**: **Bau in einer eigenen Siedlung mit vorhandenem Material einen kleinen Schlafraum mit Dach und einem Bett für jeden Bewohner, dem gerade eines fehlt**. Halte alle Betten erreichbar und prüfe die Bettenzahl der Werkstatt."
      }
    },
    "experience": {
      "family": "bunk-room",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["building"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Owned settlement with missing beds; materials",
          "de": "Eigene Siedlung mit fehlenden Betten; Material",
          "chips": {"en": ["Missing beds"], "de": ["Fehlende Betten"]},
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
    "gameGenreIds": ["rpg", "shooter", "adventure"]
  },
  {
    "id": "fallout-fo4-water-purifier-surplus",
    "moodIds": ["create", "progress"],
    "type": "creation",
    "tags": ["building", "automation"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "fallout",
      "installmentIds": ["fallout-4"]
    },
    "translations": {
      "en": {
        "name": "Water for the Workshop",
        "objective": "In **Fallout 4**, at an owned waterside settlement with purifier, power and materials available, **install a powered water purifier that raises water production above the settler count**. Check the new water and power values. Collecting surplus water can wait.",
        "gameObjective": "In **Fallout 4**, at an owned waterside settlement with purifier, power and materials available, **install a powered water purifier that raises water production above the settler count**. Check the new water and power values. Collecting surplus water can wait."
      },
      "de": {
        "name": "Wasser für die Werkstatt",
        "objective": "**Fallout 4**: **Baue in einer eigenen Siedlung am Wasser eine betriebene Wasseraufbereitung, deren Wasserleistung die Bewohnerzahl übersteigt**. Halte Bauteile und Material bereit und prüfe Wasser- und Stromwerte. Überschüssiges Wasser sammeln kann warten.",
        "gameObjective": "**Fallout 4**: **Baue in einer eigenen Siedlung am Wasser eine betriebene Wasseraufbereitung, deren Wasserleistung die Bewohnerzahl übersteigt**. Halte Bauteile und Material bereit und prüfe Wasser- und Stromwerte. Überschüssiges Wasser sammeln kann warten."
      }
    },
    "experience": {
      "family": "water-production",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["building", "automation"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Waterside settlement; purifier, power and materials",
          "de": "Siedlung am Wasser; Aufbereitung, Strom und Material",
          "chips": {"en": ["Waterside settlement", "Water purifier"], "de": ["Siedlung am Wasser", "Wasseraufbereiter"]},
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
    "gameGenreIds": ["rpg", "shooter", "adventure"],
    "rarity": "special"
  },
  {
    "id": "fallout-fo4-vegetable-adhesive",
    "moodIds": ["progress", "low-energy"],
    "type": "objective",
    "tags": ["cooking", "crafting"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "fallout",
      "installmentIds": ["fallout-4"]
    },
    "translations": {
      "en": {
        "name": "Adhesive from Vegetables",
        "objective": "In **Fallout 4**, with three Corn, three Mutfruit, three Tatos and one Purified Water ready, **cook Vegetable Starch and scrap it for adhesive**. Use an available cooking station.",
        "gameObjective": "In **Fallout 4**, with three Corn, three Mutfruit, three Tatos and one Purified Water ready, **cook Vegetable Starch and scrap it for adhesive**. Use an available cooking station."
      },
      "de": {
        "name": "Klebstoff aus Gemüse",
        "objective": "**Fallout 4**: **Koche an einer verfügbaren Kochstation Gemüsestärke und zerlege sie zu Klebstoff**, wenn drei Mais, drei Mutabeeren, drei Tatos und einmal aufbereitetes Wasser bereitliegen.",
        "gameObjective": "**Fallout 4**: **Koche an einer verfügbaren Kochstation Gemüsestärke und zerlege sie zu Klebstoff**, wenn drei Mais, drei Mutabeeren, drei Tatos und einmal aufbereitetes Wasser bereitliegen."
      }
    },
    "experience": {
      "family": "adhesive",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["cooking", "crafting"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Three Corn, three Mutfruit, three Tatos, one Purified Water",
          "de": "Drei Mais, drei Mutabeeren, drei Tatos, einmal aufbereitetes Wasser",
          "chips": {"en": ["Adhesive ingredients"], "de": ["Klebstoff-Zutaten"]},
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
    "gameGenreIds": ["rpg", "shooter", "adventure"]
  },
  {
    "id": "fallout-fo4-tagged-component-run",
    "moodIds": ["progress", "focused"],
    "type": "objective",
    "tags": ["crafting"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "fallout",
      "installmentIds": ["fallout-4"]
    },
    "translations": {
      "en": {
        "name": "Follow the Magnifying Glass",
        "objective": "In **Fallout 4**, at a workbench with one affordable mod missing a single component, tag that component for search. **Find and scrap a marked junk item, then build the mod**. Choose a location nearby that you already cleared.",
        "gameObjective": "In **Fallout 4**, at a workbench with one affordable mod missing a single component, tag that component for search. **Find and scrap a marked junk item, then build the mod**. Choose a location nearby that you already cleared."
      },
      "de": {
        "name": "Der Lupe folgen",
        "objective": "**Fallout 4**: Markiere an einer Werkbank die einzige fehlende Komponente für einen sonst bezahlbaren Mod zum Suchen. **Finde und zerlege markierten Schrott und baue den Mod**. Such in einem schon geräumten Ort in der Nähe.",
        "gameObjective": "**Fallout 4**: Markiere an einer Werkbank die einzige fehlende Komponente für einen sonst bezahlbaren Mod zum Suchen. **Finde und zerlege markierten Schrott und baue den Mod**. Such in einem schon geräumten Ort in der Nähe."
      }
    },
    "experience": {
      "family": "component-search",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["crafting"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Affordable mod missing one component; cleared nearby location",
          "de": "Bezahlbarer Mod mit einer fehlenden Komponente; naher geräumter Ort",
          "chips": {"en": ["Mod", "One missing part"], "de": ["Mod", "Ein Teil fehlt"]},
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
    "gameGenreIds": ["rpg", "shooter", "adventure"]
  },
  {
    "id": "fallout-fo4-mod-from-spare-gun",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["crafting", "loadout"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "fallout",
      "installmentIds": ["fallout-4"]
    },
    "translations": {
      "en": {
        "name": "A Part Worth Keeping",
        "objective": "In **Fallout 4**, with two compatible weapons and a replacement standard part ready, remove a useful mod from the spare at a weapons bench. **Fit it to your usual weapon and use it in one ordinary encounter**.",
        "gameObjective": "In **Fallout 4**, with two compatible weapons and a replacement standard part ready, remove a useful mod from the spare at a weapons bench. **Fit it to your usual weapon and use it in one ordinary encounter**."
      },
      "de": {
        "name": "Ein Teil zum Behalten",
        "objective": "**Fallout 4**: Entferne an der Waffenwerkbank einen nützlichen Mod aus einer übrigen Waffe, wenn zwei passende Waffen und ein Standard-Ersatzteil bereitliegen. **Montiere ihn an deiner üblichen Waffe und nutze sie in einer gewöhnlichen Begegnung**.",
        "gameObjective": "**Fallout 4**: Entferne an der Waffenwerkbank einen nützlichen Mod aus einer übrigen Waffe, wenn zwei passende Waffen und ein Standard-Ersatzteil bereitliegen. **Montiere ihn an deiner üblichen Waffe und nutze sie in einer gewöhnlichen Begegnung**."
      }
    },
    "experience": {
      "family": "mod-transfer",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["crafting", "loadout"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Two compatible weapons and replacement standard part",
          "de": "Zwei passende Waffen und Standard-Ersatzteil",
          "chips": {"en": ["Compatible weapons"], "de": ["Passende Waffen"]},
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
    "gameGenreIds": ["rpg", "shooter", "adventure"]
  },
  {
    "id": "fallout-fo4-power-armor-repair",
    "moodIds": ["progress", "overwhelmed"],
    "type": "objective",
    "tags": ["crafting", "outfit"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "fallout",
      "installmentIds": ["fallout-4"]
    },
    "translations": {
      "en": {
        "name": "One Plate Repaired",
        "objective": "In **Fallout 4**, with power armor at a repair station and the needed materials owned, **repair one damaged armor piece, equip it and step into the suit**.",
        "gameObjective": "In **Fallout 4**, with power armor at a repair station and the needed materials owned, **repair one damaged armor piece, equip it and step into the suit**."
      },
      "de": {
        "name": "Eine Platte reparieren",
        "objective": "**Fallout 4**: **Repariere an einer Power-Rüstungsstation ein beschädigtes Rüstungsteil, montiere es und steig in die Rüstung**, wenn Rüstung und nötiges Material bereitstehen.",
        "gameObjective": "**Fallout 4**: **Repariere an einer Power-Rüstungsstation ein beschädigtes Rüstungsteil, montiere es und steig in die Rüstung**, wenn Rüstung und nötiges Material bereitstehen."
      }
    },
    "experience": {
      "family": "armor-repair",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["crafting", "outfit"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Damaged power armor at station; repair materials",
          "de": "Beschädigte Power-Rüstung an Station; Reparaturmaterial",
          "chips": {"en": ["Power armor", "Armor station"], "de": ["Power-Rüstung", "Rüstungsstation"]},
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
    "gameGenreIds": ["rpg", "shooter", "adventure"]
  },
  {
    "id": "fallout-fo4-vats-saved-critical",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["abilities"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "fallout",
      "installmentIds": ["fallout-4"]
    },
    "translations": {
      "en": {
        "name": "Spend the Critical",
        "objective": "In **Fallout 4**, with a full critical meter, find an ordinary hostile enemy. **Trigger your stored critical in V.A.T.S. on a low-chance shot**.",
        "gameObjective": "In **Fallout 4**, with a full critical meter, find an ordinary hostile enemy. **Trigger your stored critical in V.A.T.S. on a low-chance shot**."
      },
      "de": {
        "name": "Den kritischen Treffer nutzen",
        "objective": "Such in **Fallout 4** mit vollem Kritisch-Balken einen gewöhnlichen Gegner. **Löse in V.A.T.S. deinen gespeicherten kritischen Treffer bei einem Schuss mit niedriger Trefferchance aus**.",
        "gameObjective": "Such in **Fallout 4** mit vollem Kritisch-Balken einen gewöhnlichen Gegner. **Löse in V.A.T.S. deinen gespeicherten kritischen Treffer bei einem Schuss mit niedriger Trefferchance aus**."
      }
    },
    "experience": {
      "family": "critical-shot",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["abilities"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Full critical meter",
          "de": "Voller Kritisch-Balken",
          "chips": {"en": ["Critical meter"], "de": ["Kritisch-Balken"]},
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
    "gameGenreIds": ["rpg", "shooter", "adventure"]
  },
  {
    "id": "fallout-fo4-core-pickpocket",
    "moodIds": ["challenge", "focused"],
    "type": "challenge",
    "tags": ["stealth", "three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "fallout",
      "installmentIds": ["fallout-4"]
    },
    "translations": {
      "en": {
        "name": "Out of the Armor",
        "objective": "In **Fallout 4**, with Pickpocket high enough to steal fusion cores and a hostile power-armored enemy already located, **steal its fusion core and watch it leave the suit**. Stop after three theft attempts. Do not try this on friendly faction members.",
        "gameObjective": "In **Fallout 4**, with Pickpocket high enough to steal fusion cores and a hostile power-armored enemy already located, **steal its fusion core and watch it leave the suit**. Stop after three theft attempts. Do not try this on friendly faction members."
      },
      "de": {
        "name": "Raus aus der Rüstung",
        "objective": "**Fallout 4**: **Stiehl mit ausreichendem Taschendiebstahl-Perk einem bereits gefundenen feindlichen Power-Rüstungsträger den Fusionskern und schau, wie er aussteigt**. Nach drei Diebstahlversuchen ist Schluss. Nutze keine befreundeten Fraktionsmitglieder.",
        "gameObjective": "**Fallout 4**: **Stiehl mit ausreichendem Taschendiebstahl-Perk einem bereits gefundenen feindlichen Power-Rüstungsträger den Fusionskern und schau, wie er aussteigt**. Nach drei Diebstahlversuchen ist Schluss. Nutze keine befreundeten Fraktionsmitglieder."
      }
    },
    "experience": {
      "family": "core-theft",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["stealth"],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Pickpocket perk sufficient for fusion cores; hostile armored enemy",
          "de": "Taschendiebstahl-Perk für Fusionskerne; feindlicher Rüstungsträger",
          "chips": {"en": ["Pickpocket perk", "Power armor"], "de": ["Taschendiebstahl-Perk", "Power-Rüstung"]},
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
    "gameGenreIds": ["rpg", "shooter", "adventure"]
  },
  {
    "id": "fallout-fo4-terminal-bracket-test",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["puzzles"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "fallout",
      "installmentIds": ["fallout-4"]
    },
    "translations": {
      "en": {
        "name": "Between the Brackets",
        "objective": "In **Fallout 4**, at an accessible locked terminal, **use one complete bracket pair to remove a dud or reset your tries, then make a password attempt**. If no pair is present, use another nearby terminal.",
        "gameObjective": "In **Fallout 4**, at an accessible locked terminal, **use one complete bracket pair to remove a dud or reset your tries, then make a password attempt**. If no pair is present, use another nearby terminal."
      },
      "de": {
        "name": "Zwischen den Klammern",
        "objective": "**Fallout 4**: **Nutze an einem zugänglichen gesperrten Terminal ein vollständiges Klammerpaar zum Entfernen eines falschen Worts oder Zurücksetzen der Versuche und probiere danach ein Passwort**. Falls kein Paar da ist, nutze ein anderes nahes Terminal.",
        "gameObjective": "**Fallout 4**: **Nutze an einem zugänglichen gesperrten Terminal ein vollständiges Klammerpaar zum Entfernen eines falschen Worts oder Zurücksetzen der Versuche und probiere danach ein Passwort**. Falls kein Paar da ist, nutze ein anderes nahes Terminal."
      }
    },
    "experience": {
      "family": "terminal-brackets",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["puzzles"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Accessible locked terminal",
          "de": "Zugängliches gesperrtes Terminal",
          "chips": {"en": ["Locked terminal"], "de": ["Gesperrtes Terminal"]},
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
    "gameGenreIds": ["rpg", "shooter", "adventure"]
  },
  {
    "id": "fallout-fo4-piper-interview",
    "moodIds": ["curious", "progress"],
    "type": "objective",
    "tags": ["dialogue", "story"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "fallout",
      "installmentIds": ["fallout-4"]
    },
    "translations": {
      "en": {
        "name": "In the Newspaper",
        "objective": "In **Fallout 4**, with Piper met and her interview still available at Publick Occurrences, **answer her questions and finish the interview**. Choose the answers that fit your character.",
        "gameObjective": "In **Fallout 4**, with Piper met and her interview still available at Publick Occurrences, **answer her questions and finish the interview**. Choose the answers that fit your character."
      },
      "de": {
        "name": "In der Zeitung",
        "objective": "**Fallout 4**: **Beantworte Pipers Fragen bei Publick Occurrences und beende das Interview**, wenn du sie schon kennst und es noch verfügbar ist. Wähle Antworten, die zu deinem Charakter passen.",
        "gameObjective": "**Fallout 4**: **Beantworte Pipers Fragen bei Publick Occurrences und beende das Interview**, wenn du sie schon kennst und es noch verfügbar ist. Wähle Antworten, die zu deinem Charakter passen."
      }
    },
    "experience": {
      "family": "interview",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["dialogue", "story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Piper met; interview still available",
          "de": "Piper getroffen; Interview noch verfügbar",
          "chips": {"en": ["Piper", "Interview"], "de": ["Piper", "Interview"]},
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
    "gameGenreIds": ["rpg", "shooter", "adventure"]
  },
  {
    "id": "fallout-fo4-robot-new-arm",
    "moodIds": ["create", "focused"],
    "type": "experiment",
    "tags": ["crafting", "abilities"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "fallout",
      "installmentIds": ["fallout-4"]
    },
    "translations": {
      "en": {
        "name": "A Different Robot Arm",
        "objective": "In **Fallout 4**, with **Automatron DLC**, a robot workbench and a robot companion unlocked, fit one arm module you can already build. **Take the robot into an ordinary fight and watch that arm work**.",
        "gameObjective": "In **Fallout 4**, with **Automatron DLC**, a robot workbench and a robot companion unlocked, fit one arm module you can already build. **Take the robot into an ordinary fight and watch that arm work**."
      },
      "de": {
        "name": "Ein anderer Roboterarm",
        "objective": "**Fallout 4**: Montiere mit **Automatron DLC**, freigeschalteter Roboterwerkbank und Roboterbegleiter ein schon baubares Armmodul. **Nimm den Roboter in einen gewöhnlichen Kampf mit und beobachte den Arm**.",
        "gameObjective": "**Fallout 4**: Montiere mit **Automatron DLC**, freigeschalteter Roboterwerkbank und Roboterbegleiter ein schon baubares Armmodul. **Nimm den Roboter in einen gewöhnlichen Kampf mit und beobachte den Arm**."
      }
    },
    "experience": {
      "family": "robot-module",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["crafting", "abilities"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Automatron DLC; robot bench, companion and arm materials",
          "de": "Automatron DLC; Roboterwerkbank, Begleiter und Armmaterial",
          "chips": {"en": ["Automatron DLC", "Robot workbench"], "de": ["Automatron DLC", "Roboterwerkbank"]},
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
    "gameGenreIds": ["rpg", "shooter", "adventure"]
  },
  {
    "id": "fallout-fo4-ammunition-production",
    "moodIds": ["create", "focused"],
    "type": "creation",
    "tags": ["automation", "crafting"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "universal": false,
    "curated": {
      "gameId": "fallout",
      "installmentIds": ["fallout-4"]
    },
    "translations": {
      "en": {
        "name": "Ammo from the Line",
        "objective": "In **Fallout 4**, with **Contraptions Workshop DLC**, Ammunition Plant requirements and materials ready, connect and power the plant and terminal. **Select an unlocked ammunition recipe and collect its first produced batch**.",
        "gameObjective": "In **Fallout 4**, with **Contraptions Workshop DLC**, Ammunition Plant requirements and materials ready, connect and power the plant and terminal. **Select an unlocked ammunition recipe and collect its first produced batch**."
      },
      "de": {
        "name": "Munition vom Band",
        "objective": "**Fallout 4**: Verbinde mit **Contraptions Workshop DLC**, erfüllten Munitionsfabrik-Voraussetzungen und vorhandenem Material Fabrik und Terminal und versorge sie mit Strom. **Wähle ein freigeschaltetes Munitionsrezept und hol die erste produzierte Charge ab**.",
        "gameObjective": "**Fallout 4**: Verbinde mit **Contraptions Workshop DLC**, erfüllten Munitionsfabrik-Voraussetzungen und vorhandenem Material Fabrik und Terminal und versorge sie mit Strom. **Wähle ein freigeschaltetes Munitionsrezept und hol die erste produzierte Charge ab**."
      }
    },
    "experience": {
      "family": "ammunition-line",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["automation", "crafting"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Contraptions Workshop DLC; Ammunition Plant requirements and material",
          "de": "Contraptions Workshop DLC; Munitionsfabrik-Voraussetzungen und Material",
          "chips": {"en": ["Contraptions DLC", "Ammunition plant"], "de": ["Contraptions DLC", "Munitionsfabrik"]},
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
    "gameGenreIds": ["rpg", "shooter", "adventure"],
    "rarity": "special"
  },
  {
    "id": "fallout-fo4-vault-soda-counter",
    "moodIds": ["create", "progress"],
    "type": "creation",
    "tags": ["building"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "fallout",
      "installmentIds": ["fallout-4"]
    },
    "translations": {
      "en": {
        "name": "The Vault Soda Counter",
        "objective": "In **Fallout 4**, with **Vault-Tec Workshop DLC**, the soda-fountain experiment completed and materials ready, **build and power a soda fountain, assign a settler and watch them work the counter**. Use the configuration you unlocked.",
        "gameObjective": "In **Fallout 4**, with **Vault-Tec Workshop DLC**, the soda-fountain experiment completed and materials ready, **build and power a soda fountain, assign a settler and watch them work the counter**. Use the configuration you unlocked."
      },
      "de": {
        "name": "Die Vault-Getränketheke",
        "objective": "**Fallout 4**: **Baue mit Vault-Tec Workshop DLC, abgeschlossenem Getränkebrunnen-Experiment und vorhandenem Material einen Getränkebrunnen, versorge ihn mit Strom und weise einen Siedler zu**. Schau zu, wie er die Theke bedient. Nutze deine freigeschaltete Einstellung.",
        "gameObjective": "**Fallout 4**: **Baue mit Vault-Tec Workshop DLC, abgeschlossenem Getränkebrunnen-Experiment und vorhandenem Material einen Getränkebrunnen, versorge ihn mit Strom und weise einen Siedler zu**. Schau zu, wie er die Theke bedient. Nutze deine freigeschaltete Einstellung."
      }
    },
    "experience": {
      "family": "soda-station",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["building"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Vault-Tec Workshop DLC; soda experiment finished; materials",
          "de": "Vault-Tec Workshop DLC; Getränkebrunnen-Experiment beendet; Material",
          "chips": {"en": ["Vault-Tec Workshop DLC"], "de": ["Vault-Tec Workshop DLC"]},
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
    "gameGenreIds": ["rpg", "shooter", "adventure"]
  },
  {
    "id": "fallout-fo4-nuka-mix-test",
    "moodIds": ["curious", "create"],
    "type": "experiment",
    "tags": ["cooking"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "fallout",
      "installmentIds": ["fallout-4"]
    },
    "translations": {
      "en": {
        "name": "Your Nuka Blend",
        "objective": "In **Fallout 4**, with **Nuka-World DLC**, a Nuka-Mixer Station and an unlocked recipe with ingredients ready, **mix one drink, consume it and read its active effects**.",
        "gameObjective": "In **Fallout 4**, with **Nuka-World DLC**, a Nuka-Mixer Station and an unlocked recipe with ingredients ready, **mix one drink, consume it and read its active effects**."
      },
      "de": {
        "name": "Deine Nuka-Mischung",
        "objective": "**Fallout 4**: **Mixe mit Nuka-World DLC an einer Nuka-Mixer-Station ein freigeschaltetes Getränk, trink es und lies seine aktiven Effekte**, wenn alle Zutaten bereitliegen.",
        "gameObjective": "**Fallout 4**: **Mixe mit Nuka-World DLC an einer Nuka-Mixer-Station ein freigeschaltetes Getränk, trink es und lies seine aktiven Effekte**, wenn alle Zutaten bereitliegen."
      }
    },
    "experience": {
      "family": "nuka-mix",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["cooking"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Nuka-World DLC; mixer, recipe and ingredients",
          "de": "Nuka-World DLC; Mixer, Rezept und Zutaten",
          "chips": {"en": ["Nuka-World DLC", "Mixer"], "de": ["Nuka-World DLC", "Mixer"]},
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
    "gameGenreIds": ["rpg", "shooter", "adventure"]
  },
  {
    "id": "fallout-fo4-beaver-creek-bowling",
    "moodIds": ["explore", "curious"],
    "type": "inspiration",
    "tags": ["story"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "fallout",
      "installmentIds": ["fallout-4"]
    },
    "translations": {
      "en": {
        "name": "The Old Bowling Alley",
        "objective": "In **Fallout 4**, with **Far Harbor DLC** and Beaver Creek Lanes already reachable, look through the abandoned bowling alley. Follow its lanes, back rooms and traces of the staff who worked there, at your own pace.",
        "gameObjective": "In **Fallout 4**, with **Far Harbor DLC** and Beaver Creek Lanes already reachable, look through the abandoned bowling alley. Follow its lanes, back rooms and traces of the staff who worked there, at your own pace."
      },
      "de": {
        "name": "Die alte Bowlingbahn",
        "objective": "**Fallout 4**: Schau dich mit **Far Harbor DLC** in der schon erreichbaren Bowlingbahn Beaver Creek Lanes um. Folge den Bahnen, Hinterzimmern und Spuren des ehemaligen Personals in deinem Tempo.",
        "gameObjective": "**Fallout 4**: Schau dich mit **Far Harbor DLC** in der schon erreichbaren Bowlingbahn Beaver Creek Lanes um. Folge den Bahnen, Hinterzimmern und Spuren des ehemaligen Personals in deinem Tempo."
      }
    },
    "experience": {
      "family": "abandoned-building",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "open",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Far Harbor DLC; Beaver Creek Lanes reachable",
          "de": "Far Harbor DLC; Beaver Creek Lanes erreichbar",
          "chips": {"en": ["Far Harbor DLC", "Beaver Creek Lanes"], "de": ["Far Harbor DLC", "Beaver Creek Lanes"]},
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
    "gameGenreIds": ["rpg", "shooter", "adventure"]
  },
  {
    "id": "fallout-fo4-diamond-city-radio-story",
    "moodIds": ["nostalgic", "relax"],
    "type": "inspiration",
    "tags": ["story", "exploration"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "fallout",
      "installmentIds": ["fallout-4"]
    },
    "translations": {
      "en": {
        "name": "A Radio Walk",
        "objective": "In Fallout 4, with Diamond City Radio available, tune in while walking through a cleared stretch of Boston you remember from earlier play. Follow a familiar street and **let the old songs choose the pace**.",
        "gameObjective": "In Fallout 4, with Diamond City Radio available, tune in while walking through a cleared stretch of Boston you remember from earlier play. Follow a familiar street and **let the old songs choose the pace**."
      },
      "de": {
        "name": "Ein Spaziergang mit Radio",
        "objective": "Fallout 4: Schalte das verfügbare Diamond-City-Radio ein und geh durch einen geräumten Teil von Boston, den du von früher kennst. Folge einer vertrauten Straße und **lass die alten Lieder das Tempo bestimmen**.",
        "gameObjective": "Fallout 4: Schalte das verfügbare Diamond-City-Radio ein und geh durch einen geräumten Teil von Boston, den du von früher kennst. Folge einer vertrauten Straße und **lass die alten Lieder das Tempo bestimmen**."
      }
    },
    "experience": {
      "family": "familiar-radio",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "open",
      "activities": ["story", "exploration"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Familiar cleared Boston street",
          "de": "Vertraute geräumte Straße in Boston",
          "chips": {"en": ["Boston street"], "de": ["Bostoner Straße"]},
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
    "gameGenreIds": ["rpg", "shooter", "adventure"]
  },
  {
    "id": "fallout-fo4-settlement-bell-roundup",
    "moodIds": ["create", "focused"],
    "type": "creation",
    "tags": ["building"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "fallout",
      "installmentIds": ["fallout-4"]
    },
    "translations": {
      "en": {
        "name": "Ring for the Settlement",
        "objective": "In **Fallout 4**, with an owned populated settlement and bell materials ready, **place a settlement bell in an open meeting area, ring it and watch residents gather**. Leave clear walking space around it.",
        "gameObjective": "In **Fallout 4**, with an owned populated settlement and bell materials ready, **place a settlement bell in an open meeting area, ring it and watch residents gather**. Leave clear walking space around it."
      },
      "de": {
        "name": "Die Siedlung herbeiklingeln",
        "objective": "**Fallout 4**: **Stell mit vorhandenem Material in einer bewohnten eigenen Siedlung eine Glocke auf einem offenen Treffplatz auf, läute sie und beobachte, wie Bewohner kommen**. Lass um sie herum Platz zum Gehen.",
        "gameObjective": "**Fallout 4**: **Stell mit vorhandenem Material in einer bewohnten eigenen Siedlung eine Glocke auf einem offenen Treffplatz auf, läute sie und beobachte, wie Bewohner kommen**. Lass um sie herum Platz zum Gehen."
      }
    },
    "experience": {
      "family": "settlement-bell",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["building"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Populated owned settlement; bell materials",
          "de": "Bewohnte eigene Siedlung; Glockenmaterial",
          "chips": {"en": ["Populated settlement"], "de": ["Bewohnte Siedlung"]},
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
    "gameGenreIds": ["rpg", "shooter", "adventure"]
  },
  {
    "id": "fallout-fo4-local-leader-shop",
    "moodIds": ["create", "progress"],
    "type": "creation",
    "tags": ["building", "trading"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "fallout",
      "installmentIds": ["fallout-4"]
    },
    "translations": {
      "en": {
        "name": "A Shop for Home",
        "objective": "In **Fallout 4**, with Local Leader rank 2, store materials, Caps and an unassigned settler ready, **build a trading store, assign the settler and buy one item from it**.",
        "gameObjective": "In **Fallout 4**, with Local Leader rank 2, store materials, Caps and an unassigned settler ready, **build a trading store, assign the settler and buy one item from it**."
      },
      "de": {
        "name": "Dein Laden zu Hause",
        "objective": "**Fallout 4**: **Bau mit Lokaler Anführer Rang 2, Ladenmaterial, Kronkorken und einem unbeschäftigten Siedler einen Handelsladen, weise ihn zu und kauf dort einen Gegenstand**.",
        "gameObjective": "**Fallout 4**: **Bau mit Lokaler Anführer Rang 2, Ladenmaterial, Kronkorken und einem unbeschäftigten Siedler einen Handelsladen, weise ihn zu und kauf dort einen Gegenstand**."
      }
    },
    "experience": {
      "family": "settlement-shop",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["building", "trading"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Local Leader 2; store material, Caps and free settler",
          "de": "Lokaler Anführer 2; Ladenmaterial, Kronkorken und freier Siedler",
          "chips": {"en": ["Local Leader 2"], "de": ["Lokaler Anführer 2"]},
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
    "gameGenreIds": ["rpg", "shooter", "adventure"]
  },
  {
    "id": "fallout-fo4-companion-equipment",
    "moodIds": ["progress", "curious"],
    "type": "objective",
    "tags": ["loadout", "support"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "fallout",
      "installmentIds": ["fallout-4"]
    },
    "translations": {
      "en": {
        "name": "Gear for the Companion",
        "objective": "In **Fallout 4**, with a human companion, spare armor, a compatible weapon and its ammo ready, **equip the companion with them and fight one ordinary encounter together**. Choose someone who can use that gear.",
        "gameObjective": "In **Fallout 4**, with a human companion, spare armor, a compatible weapon and its ammo ready, **equip the companion with them and fight one ordinary encounter together**. Choose someone who can use that gear."
      },
      "de": {
        "name": "Ausrüstung für den Begleiter",
        "objective": "**Fallout 4**: **Rüste einen menschlichen Begleiter mit vorhandener passender Waffe, Munition und übriger Rüstung aus und bestreitet eine gewöhnliche Begegnung zusammen**. Wähle einen Begleiter, der diese Ausrüstung nutzen kann.",
        "gameObjective": "**Fallout 4**: **Rüste einen menschlichen Begleiter mit vorhandener passender Waffe, Munition und übriger Rüstung aus und bestreitet eine gewöhnliche Begegnung zusammen**. Wähle einen Begleiter, der diese Ausrüstung nutzen kann."
      }
    },
    "experience": {
      "family": "companion-gear",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["loadout", "support"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Humanoid companion; compatible spare gear and ammo",
          "de": "Menschlicher Begleiter; passende übrige Ausrüstung und Munition",
          "chips": {"en": ["Humanoid companion"], "de": ["Menschlicher Begleiter"]},
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
    "gameGenreIds": ["rpg", "shooter", "adventure"]
  },
  {
    "id": "fallout-fo4-bobblehead-home-display",
    "moodIds": ["create", "relax"],
    "type": "creation",
    "tags": ["decorating", "collectibles"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "fallout",
      "installmentIds": ["fallout-4"]
    },
    "translations": {
      "en": {
        "name": "A Bobblehead Shelf",
        "objective": "In **Fallout 4**, with a bobblehead already owned and display-stand materials ready, **build a bobblehead stand at home and place that bobblehead on it**.",
        "gameObjective": "In **Fallout 4**, with a bobblehead already owned and display-stand materials ready, **build a bobblehead stand at home and place that bobblehead on it**."
      },
      "de": {
        "name": "Ein Platz für Wackelpuppen",
        "objective": "**Fallout 4**: **Bau mit vorhandenen Materialien zu Hause einen Wackelpuppenständer und stell eine schon gefundene Wackelpuppe darauf**.",
        "gameObjective": "**Fallout 4**: **Bau mit vorhandenen Materialien zu Hause einen Wackelpuppenständer und stell eine schon gefundene Wackelpuppe darauf**."
      }
    },
    "experience": {
      "family": "collectible-display",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["decorating", "collectibles"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Owned bobblehead; stand materials",
          "de": "Eigene Wackelpuppe; Ständermaterial",
          "chips": {"en": ["Bobblehead"], "de": ["Wackelpuppe"]},
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
    "gameGenreIds": ["rpg", "shooter", "adventure"]
  },
  {
    "id": "fallout-fo76-donation-box-aid",
    "moodIds": ["progress", "low-energy"],
    "type": "objective",
    "tags": ["support"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "fallout",
      "installmentIds": ["fallout-76"]
    },
    "translations": {
      "en": {
        "name": "Leave a Starter Supply",
        "objective": "In **Fallout 76**, with spare Stimpaks or RadAway ready, visit a nearby donation box. **Leave a small stack in the box** for the next player. No one needs to collect it during your session.",
        "gameObjective": "In **Fallout 76**, with spare Stimpaks or RadAway ready, visit a nearby donation box. **Leave a small stack in the box** for the next player. No one needs to collect it during your session."
      },
      "de": {
        "name": "Vorrat für den Anfang",
        "objective": "**Fallout 76**: Besuche mit übrigen Stimpaks oder RadAway eine nahe Spendenbox. **Leg einen kleinen Stapel für den nächsten Spieler hinein**. Abholen muss ihn während deiner Sitzung niemand.",
        "gameObjective": "**Fallout 76**: Besuche mit übrigen Stimpaks oder RadAway eine nahe Spendenbox. **Leg einen kleinen Stapel für den nächsten Spieler hinein**. Abholen muss ihn während deiner Sitzung niemand."
      }
    },
    "experience": {
      "family": "donation-box",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["support"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Spare Stimpaks or RadAway",
          "de": "Übrige Stimpaks oder RadAway",
          "chips": {"en": ["Stimpaks or RadAway"], "de": ["Stimpaks oder RadAway"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["rpg", "shooter", "adventure"]
  },
  {
    "id": "fallout-fo76-private-team-build",
    "moodIds": ["connect", "create"],
    "type": "inspiration",
    "tags": ["co-op", "building"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "universal": false,
    "curated": {
      "gameId": "fallout",
      "installmentIds": ["fallout-76"]
    },
    "translations": {
      "en": {
        "name": "Build at Their CAMP",
        "objective": "In Fallout 76, with a friend already in your private team who has invited you to build at their CAMP, **work on a corner together** using items the game lets you place. Talk through the choices as you build and stop when you both want to.",
        "gameObjective": "In Fallout 76, with a friend already in your private team who has invited you to build at their CAMP, **work on a corner together** using items the game lets you place. Talk through the choices as you build and stop when you both want to."
      },
      "de": {
        "name": "Bauen im fremden CAMP",
        "objective": "Fallout 76: Bau mit einem Freund, der schon in deinem privaten Team ist und dich zum Bauen in sein CAMP eingeladen hat, **gemeinsam an einer Ecke**. Nutzt Gegenstände, die du dort platzieren darfst, und besprecht eure Ideen beim Bauen. Ihr entscheidet zusammen, wann Schluss ist.",
        "gameObjective": "Fallout 76: Bau mit einem Freund, der schon in deinem privaten Team ist und dich zum Bauen in sein CAMP eingeladen hat, **gemeinsam an einer Ecke**. Nutzt Gegenstände, die du dort platzieren darfst, und besprecht eure Ideen beim Bauen. Ihr entscheidet zusammen, wann Schluss ist."
      }
    },
    "experience": {
      "family": "shared-camp",
      "cardMetadata": { "genreIds": [], "playStyleIds": ["co-op"] },
      "finish": "open",
      "activities": ["building"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Friend in private team; CAMP building invitation",
          "de": "Freund im privaten Team; CAMP-Baueinladung",
          "chips": {"en": ["CAMP build invitation"], "de": ["CAMP-Baueinladung"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "others",
          "participation": "co-op",
          "formation": "team",
          "mode": "Human team"
        }
      ]
    },
    "gameGenreIds": ["rpg", "shooter", "adventure"]
  },
  {
    "id": "fallout-fo76-instrument-well-tuned",
    "moodIds": ["relax", "overwhelmed"],
    "type": "objective",
    "tags": ["current-save"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "fallout",
      "installmentIds": ["fallout-76"]
    },
    "translations": {
      "en": {
        "name": "Get Well Tuned",
        "objective": "At a safe CAMP or location in **Fallout 76**, **play an instrument until the Well Tuned bonus appears**.",
        "gameObjective": "At a safe CAMP or location in **Fallout 76**, **play an instrument until the Well Tuned bonus appears**."
      },
      "de": {
        "name": "Musik im CAMP",
        "objective": "**Spiel in Fallout 76 in einem sicheren CAMP oder Ort an einem Instrument, bis der Musik-Bonus erscheint**.",
        "gameObjective": "**Spiel in Fallout 76 in einem sicheren CAMP oder Ort an einem Instrument, bis der Musik-Bonus erscheint**."
      }
    },
    "experience": {
      "family": "music-bonus",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["current-save"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Safe playable instrument",
          "de": "Sicheres spielbares Instrument",
          "chips": {"en": ["Instrument"], "de": ["Spielbares Instrument"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["rpg", "shooter", "adventure"]
  },
  {
    "id": "fallout-fo76-brew-and-ferment",
    "moodIds": ["create", "focused"],
    "type": "creation",
    "tags": ["cooking"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "fallout",
      "installmentIds": ["fallout-76"]
    },
    "translations": {
      "en": {
        "name": "Your Own Beer",
        "objective": "In **Fallout 76**, with brewing and fermenter plans unlocked and a known beer recipe’s ingredients ready, **brew the beer and place it in your fermenter**. Check its fermentation bar. Collecting the finished drink can wait.",
        "gameObjective": "In **Fallout 76**, with brewing and fermenter plans unlocked and a known beer recipe’s ingredients ready, **brew the beer and place it in your fermenter**. Check its fermentation bar. Collecting the finished drink can wait."
      },
      "de": {
        "name": "Dein eigenes Bier",
        "objective": "**Fallout 76**: **Braue mit freigeschalteten Brau- und Gärbehälterplänen sowie den Zutaten eines bekannten Bierrezepts das Bier und leg es in deinen Gärbehälter**. Prüfe den Gärbalken. Das fertige Getränk kannst du später abholen.",
        "gameObjective": "**Fallout 76**: **Braue mit freigeschalteten Brau- und Gärbehälterplänen sowie den Zutaten eines bekannten Bierrezepts das Bier und leg es in deinen Gärbehälter**. Prüfe den Gärbalken. Das fertige Getränk kannst du später abholen."
      }
    },
    "experience": {
      "family": "brewing",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["cooking"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Brewing and fermenter plans; beer recipe and ingredients",
          "de": "Brau- und Gärbehälterpläne; Bierrezept und Zutaten",
          "chips": {"en": ["Fermenter plans", "Beer recipe"], "de": ["Gärbehälterpläne", "Bierrezept"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["rpg", "shooter", "adventure"]
  },
  {
    "id": "fallout-fo76-symptomatic-recovery",
    "moodIds": ["progress", "overwhelmed"],
    "type": "objective",
    "tags": ["current-save"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "fallout",
      "installmentIds": ["fallout-76"]
    },
    "translations": {
      "en": {
        "name": "Clear the Disease",
        "objective": "In **Fallout 76**, with a disease active and a Sympto-Matic you can use already located, **use the machine and check that the disease is gone**. No new disease is needed.",
        "gameObjective": "In **Fallout 76**, with a disease active and a Sympto-Matic you can use already located, **use the machine and check that the disease is gone**. No new disease is needed."
      },
      "de": {
        "name": "Die Krankheit loswerden",
        "objective": "**Fallout 76**: **Nutze mit aktiver Krankheit einen bereits gefundenen nutzbaren Sympto-Matic und prüfe, ob die Krankheit verschwunden ist**. Eine neue Krankheit brauchst du nicht.",
        "gameObjective": "**Fallout 76**: **Nutze mit aktiver Krankheit einen bereits gefundenen nutzbaren Sympto-Matic und prüfe, ob die Krankheit verschwunden ist**. Eine neue Krankheit brauchst du nicht."
      }
    },
    "experience": {
      "family": "disease-recovery",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "en": "Active disease; usable Sympto-Matic located",
          "de": "Aktive Krankheit; nutzbarer Sympto-Matic gefunden",
          "chips": {"en": ["Disease", "Sympto-Matic"], "de": ["Aktive Krankheit", "Sympto-Matic"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["rpg", "shooter", "adventure"]
  },
  {
    "id": "fallout-fo76-radstag-packing",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["cooking"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "fallout",
      "installmentIds": ["fallout-76"]
    },
    "translations": {
      "en": {
        "name": "Dinner before the Haul",
        "objective": "In **Fallout 76**, with Radstag Meat, wood and a cooking station ready, note your carry-weight limit. **Cook and eat Grilled Radstag, then compare the new limit**.",
        "gameObjective": "In **Fallout 76**, with Radstag Meat, wood and a cooking station ready, note your carry-weight limit. **Cook and eat Grilled Radstag, then compare the new limit**."
      },
      "de": {
        "name": "Essen vor dem Transport",
        "objective": "Merk dir in **Fallout 76** deine Traglastgrenze. **Brate vorhandenes Radhirschfleisch an einer Kochstation, iss es und vergleiche die neue Grenze**. Halte Holz bereit.",
        "gameObjective": "Merk dir in **Fallout 76** deine Traglastgrenze. **Brate vorhandenes Radhirschfleisch an einer Kochstation, iss es und vergleiche die neue Grenze**. Halte Holz bereit."
      }
    },
    "experience": {
      "family": "carry-food",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["cooking"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Radhirschfleisch, Holz und Kochstation; keine Fleisch-verhindernde Mutation",
          "en": "Radstag Meat, wood and cooking station; no mutation preventing meat effects",
          "chips": {"en": ["Radstag Meat", "Stove"], "de": ["Radhirschfleisch", "Kochstelle"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["rpg", "shooter", "adventure"]
  },
  {
    "id": "fallout-fo76-camera-creature-name",
    "moodIds": ["curious", "focused"],
    "type": "objective",
    "tags": ["photography"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "fallout",
      "installmentIds": ["fallout-76"]
    },
    "translations": {
      "en": {
        "name": "The Camera Knows It",
        "objective": "In **Fallout 76**, with a ProSnap Deluxe Camera and film ready, find a nearby creature, living or dead. **Frame it until its name appears in the viewfinder and take one camera photo**. Choose a creature you can approach safely.",
        "gameObjective": "In **Fallout 76**, with a ProSnap Deluxe Camera and film ready, find a nearby creature, living or dead. **Frame it until its name appears in the viewfinder and take one camera photo**. Choose a creature you can approach safely."
      },
      "de": {
        "name": "Die Kamera erkennt es",
        "objective": "**Fallout 76**: **Rahme mit vorhandener ProSnap-Deluxe-Kamera und Film ein nahes lebendes oder totes Wesen ein, bis sein Name im Sucher erscheint, und mach ein Kamerafoto**. Wähle ein sicher erreichbares Wesen.",
        "gameObjective": "**Fallout 76**: **Rahme mit vorhandener ProSnap-Deluxe-Kamera und Film ein nahes lebendes oder totes Wesen ein, bis sein Name im Sucher erscheint, und mach ein Kamerafoto**. Wähle ein sicher erreichbares Wesen."
      }
    },
    "experience": {
      "family": "camera-name",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["photography"],
      "rules": [],
      "prerequisites": [
        {
          "en": "ProSnap Deluxe Camera; film",
          "de": "ProSnap-Deluxe-Kamera; Film",
          "chips": {"en": ["ProSnap Deluxe Camera", "Film"], "de": ["ProSnap-Deluxe-Kamera", "Film"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["rpg", "shooter", "adventure"]
  },
  {
    "id": "fallout-fo76-treasure-map-ground",
    "moodIds": ["explore", "focused"],
    "type": "objective",
    "tags": ["collectibles"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "fallout",
      "installmentIds": ["fallout-76"]
    },
    "translations": {
      "en": {
        "name": "The Sketched Mound",
        "objective": "In **Fallout 76**, with a treasure map already owned for a region you know, **find its pictured landmark and dig up the mound**. Use the sketch instead of an online coordinate list.",
        "gameObjective": "In **Fallout 76**, with a treasure map already owned for a region you know, **find its pictured landmark and dig up the mound**. Use the sketch instead of an online coordinate list."
      },
      "de": {
        "name": "Der gezeichnete Hügel",
        "objective": "**Fallout 76**: **Finde mit einer vorhandenen Schatzkarte für eine bekannte Region die gezeichnete Landmarke und grabe den Hügel aus**. Nutze die Skizze statt einer Online-Koordinatenliste.",
        "gameObjective": "**Fallout 76**: **Finde mit einer vorhandenen Schatzkarte für eine bekannte Region die gezeichnete Landmarke und grabe den Hügel aus**. Nutze die Skizze statt einer Online-Koordinatenliste."
      }
    },
    "experience": {
      "family": "map-treasure",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["collectibles"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Owned treasure map for a familiar region",
          "de": "Eigene Schatzkarte für vertraute Region",
          "chips": {"en": ["Treasure map"], "de": ["Schatzkarte"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["rpg", "shooter", "adventure"]
  },
  {
    "id": "fallout-fo76-free-range-shepherd",
    "moodIds": ["restless", "focused"],
    "type": "objective",
    "tags": ["animals", "support"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "fallout",
      "installmentIds": ["fallout-76"]
    },
    "translations": {
      "en": {
        "name": "Take the Shepherd’s Crook",
        "objective": "In **Fallout 76**, when **Free Range** is already active, take a Shepherd’s Crook and use Herd on the Brahmin at the marked stops. **Stay with the herd until the event result appears**. Success is not required.",
        "gameObjective": "In **Fallout 76**, when **Free Range** is already active, take a Shepherd’s Crook and use Herd on the Brahmin at the marked stops. **Stay with the herd until the event result appears**. Success is not required."
      },
      "de": {
        "name": "Den Hirtenstab nehmen",
        "objective": "**Fallout 76**: Nimm beim bereits laufenden Event **Freilandhaltung** einen Hirtenstab und nutze an den markierten Halten Treiben bei den Brahmin. **Bleib bei der Herde bis zum Event-Ergebnis**. Erfolg ist kein Muss.",
        "gameObjective": "**Fallout 76**: Nimm beim bereits laufenden Event **Freilandhaltung** einen Hirtenstab und nutze an den markierten Halten Treiben bei den Brahmin. **Bleib bei der Herde bis zum Event-Ergebnis**. Erfolg ist kein Muss."
      }
    },
    "experience": {
      "family": "herd-event",
      "cardMetadata": { "genreIds": [], "playStyleIds": ["co-op"] },
      "finish": "attempt",
      "activities": ["animals", "support"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Free Range active; Shepherd’s Crook",
          "de": "Freilandhaltung aktiv; Hirtenstab",
          "chips": {"en": ["Free Range", "Shepherd’s Crook"], "de": ["Freilandhaltung", "Hirtenstab"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "others",
          "participation": "co-op",
          "formation": "none",
          "mode": "Public Event"
        }
      ]
    },
    "gameGenreIds": ["rpg", "shooter", "adventure"]
  },
  {
    "id": "fallout-fo76-expedition-with-friend",
    "moodIds": ["connect", "focused"],
    "type": "objective",
    "tags": ["co-op", "support"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "universal": false,
    "curated": {
      "gameId": "fallout",
      "installmentIds": ["fallout-76"]
    },
    "translations": {
      "en": {
        "name": "One Expedition Crew",
        "objective": "With Expeditions unlocked in **Fallout 76** and a friend ready to join, choose one your gear can handle. **Finish the expedition together**.",
        "gameObjective": "With Expeditions unlocked in **Fallout 76** and a friend ready to join, choose one your gear can handle. **Finish the expedition together**."
      },
      "de": {
        "name": "Ein Expeditionsteam",
        "objective": "Wählt in **Fallout 76** mit freigeschalteten Expeditionen und einem bereiten Freund eine Expedition passend zu eurer Ausrüstung. **Beendet sie gemeinsam**.",
        "gameObjective": "Wählt in **Fallout 76** mit freigeschalteten Expeditionen und einem bereiten Freund eine Expedition passend zu eurer Ausrüstung. **Beendet sie gemeinsam**."
      }
    },
    "experience": {
      "family": "expedition",
      "cardMetadata": { "genreIds": [], "playStyleIds": ["co-op"] },
      "finish": "outcome",
      "activities": ["support"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Expeditions unlocked; friend ready",
          "de": "Expeditionen freigeschaltet; Freund bereit",
          "chips": {"en": ["Expeditions"], "de": ["Expeditionen"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "others",
          "participation": "co-op",
          "formation": "team",
          "mode": "Human team"
        }
      ]
    },
    "gameGenreIds": ["rpg", "shooter", "adventure"],
    "rarity": "special"
  },
  {
    "id": "fallout-fo76-shelter-workshop-corner",
    "moodIds": ["create", "relax"],
    "type": "creation",
    "tags": ["building"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "fallout",
      "installmentIds": ["fallout-76"]
    },
    "translations": {
      "en": {
        "name": "A Workshop Below",
        "objective": "In **Fallout 76**, with a CAMP Shelter entrance unlocked, enter the Shelter and **build a small work area with two different crafting benches and a usable route between them**. Test both benches before leaving.",
        "gameObjective": "In **Fallout 76**, with a CAMP Shelter entrance unlocked, enter the Shelter and **build a small work area with two different crafting benches and a usable route between them**. Test both benches before leaving."
      },
      "de": {
        "name": "Eine Werkstatt unten",
        "objective": "**Fallout 76**: Betritt mit freigeschaltetem CAMP-Schutzraum-Eingang den Schutzraum und **baue einen kleinen Arbeitsbereich mit zwei verschiedenen Werkbänken und einem begehbaren Weg dazwischen**. Probiere beide Werkbänke vor dem Gehen aus.",
        "gameObjective": "**Fallout 76**: Betritt mit freigeschaltetem CAMP-Schutzraum-Eingang den Schutzraum und **baue einen kleinen Arbeitsbereich mit zwei verschiedenen Werkbänken und einem begehbaren Weg dazwischen**. Probiere beide Werkbänke vor dem Gehen aus."
      }
    },
    "experience": {
      "family": "shelter-workshop",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["building"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Shelter unlocked; bench plans and materials",
          "de": "Schutzraum freigeschaltet; Werkbankpläne und Material",
          "chips": {"en": ["Shelter", "Workbench plans"], "de": ["Schutzraum", "Werkbankpläne"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["rpg", "shooter", "adventure"]
  },
  {
    "id": "fallout-fo76-resource-extractor-run",
    "moodIds": ["create", "progress"],
    "type": "creation",
    "tags": ["automation", "building"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "fallout",
      "installmentIds": ["fallout-76"]
    },
    "translations": {
      "en": {
        "name": "From the Ground",
        "objective": "In **Fallout 76**, with your CAMP already on a resource deposit and the extractor’s materials ready, **build and power the matching extractor, then collect its first resource output**. Keep this at your CAMP rather than a Public Workshop.",
        "gameObjective": "In **Fallout 76**, with your CAMP already on a resource deposit and the extractor’s materials ready, **build and power the matching extractor, then collect its first resource output**. Keep this at your CAMP rather than a Public Workshop."
      },
      "de": {
        "name": "Aus dem Boden",
        "objective": "**Fallout 76**: **Bau und betreibe den passenden Extraktor an einem Rohstoffvorkommen in deinem schon platzierten CAMP und hol seine erste Ausgabe ab**. Halte das Material bereit und bleib im CAMP statt einer öffentlichen Werkstatt.",
        "gameObjective": "**Fallout 76**: **Bau und betreibe den passenden Extraktor an einem Rohstoffvorkommen in deinem schon platzierten CAMP und hol seine erste Ausgabe ab**. Halte das Material bereit und bleib im CAMP statt einer öffentlichen Werkstatt."
      }
    },
    "experience": {
      "family": "extractor",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["automation", "building"],
      "rules": [],
      "prerequisites": [
        {
          "en": "CAMP on resource deposit; extractor material and power",
          "de": "CAMP auf Rohstoffvorkommen; Extraktormaterial und Strom",
          "chips": {"en": ["Resource deposit", "Extractor"], "de": ["Rohstoffvorkommen", "Extraktor"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["rpg", "shooter", "adventure"],
    "rarity": "special"
  },
  {
    "id": "fallout-fo76-treasury-notes-bullion",
    "moodIds": ["progress", "low-energy"],
    "type": "objective",
    "tags": ["trading"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "fallout",
      "installmentIds": ["fallout-76"]
    },
    "translations": {
      "en": {
        "name": "Notes into Gold",
        "objective": "In **Fallout 76**, **exchange some Treasury Notes you already own for Gold Bullion at a Gold Press Machine**. Have enough of today’s exchange allowance left.",
        "gameObjective": "In **Fallout 76**, **exchange some Treasury Notes you already own for Gold Bullion at a Gold Press Machine**. Have enough of today’s exchange allowance left."
      },
      "de": {
        "name": "Scheine werden Gold",
        "objective": "**Tausch in Fallout 76 einige vorhandene Schatzscheine an einem Goldautomaten gegen Goldbarren**. Dein heutiges Tauschkontingent muss noch reichen.",
        "gameObjective": "**Tausch in Fallout 76 einige vorhandene Schatzscheine an einem Goldautomaten gegen Goldbarren**. Dein heutiges Tauschkontingent muss noch reichen."
      }
    },
    "experience": {
      "family": "gold-exchange",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["trading"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Treasury Notes; exchange allowance left",
          "de": "Schatzscheine; Tauschkontingent übrig",
          "chips": {"en": ["Treasury Notes"], "de": ["Schatzscheine"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["rpg", "shooter", "adventure"]
  },
  {
    "id": "fallout-fo76-legendary-scrip-trade",
    "moodIds": ["progress", "overwhelmed"],
    "type": "objective",
    "tags": ["trading"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "fallout",
      "installmentIds": ["fallout-76"]
    },
    "translations": {
      "en": {
        "name": "A Spare Legendary",
        "objective": "In **Fallout 76**, **trade an unwanted legendary item for Scrip at a Legendary Exchange Machine**. Have enough exchange allowance left.",
        "gameObjective": "In **Fallout 76**, **trade an unwanted legendary item for Scrip at a Legendary Exchange Machine**. Have enough exchange allowance left."
      },
      "de": {
        "name": "Ein übriges legendäres Teil",
        "objective": "**Tausch in Fallout 76 einen nicht mehr gebrauchten legendären Gegenstand an einem legendären Automaten gegen Scheine**. Dein Tauschkontingent muss noch reichen.",
        "gameObjective": "**Tausch in Fallout 76 einen nicht mehr gebrauchten legendären Gegenstand an einem legendären Automaten gegen Scheine**. Dein Tauschkontingent muss noch reichen."
      }
    },
    "experience": {
      "family": "legendary-exchange",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["trading"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Unwanted legendary item; exchange allowance left",
          "de": "Ungenutzter legendärer Gegenstand; Tauschkontingent übrig",
          "chips": {"en": ["Legendary item"], "de": ["Legendäres Item"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["rpg", "shooter", "adventure"]
  },
  {
    "id": "fallout-fo76-known-legendary-mod",
    "moodIds": ["create", "progress"],
    "type": "creation",
    "tags": ["crafting", "loadout"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "fallout",
      "installmentIds": ["fallout-76"]
    },
    "translations": {
      "en": {
        "name": "One Legendary Effect",
        "objective": "In **Fallout 76**, with a legendary mod box compatible with an owned item and the required resources ready, **apply that effect at the matching workbench and use the altered item in an ordinary encounter**. Read the binding warning before applying it.",
        "gameObjective": "In **Fallout 76**, with a legendary mod box compatible with an owned item and the required resources ready, **apply that effect at the matching workbench and use the altered item in an ordinary encounter**. Read the binding warning before applying it."
      },
      "de": {
        "name": "Ein legendärer Effekt",
        "objective": "**Fallout 76**: **Wende an der passenden Werkbank eine vorhandene passende legendäre Mod-Box auf einen eigenen Gegenstand an und nutze ihn in einer gewöhnlichen Begegnung**, wenn die nötigen Ressourcen bereitliegen. Lies vorher den Hinweis zur Bindung.",
        "gameObjective": "**Fallout 76**: **Wende an der passenden Werkbank eine vorhandene passende legendäre Mod-Box auf einen eigenen Gegenstand an und nutze ihn in einer gewöhnlichen Begegnung**, wenn die nötigen Ressourcen bereitliegen. Lies vorher den Hinweis zur Bindung."
      }
    },
    "experience": {
      "family": "legendary-mod",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["crafting", "loadout"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Compatible legendary mod box; owned item and resources",
          "de": "Passende legendäre Mod-Box; eigener Gegenstand und Ressourcen",
          "chips": {"en": ["Legendary mod box"], "de": ["Legendäre Mod-Box"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["rpg", "shooter", "adventure"]
  },
  {
    "id": "fallout-fo76-biv-drink-test",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["cooking"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "fallout",
      "installmentIds": ["fallout-76"]
    },
    "translations": {
      "en": {
        "name": "Biv’s Tasting Notes",
        "objective": "In **Fallout 76**, with brewing unlocked and a Biv daily already active, read its drink and test requirement. With that drink ready, **drink it and perform the listed test while its effect is active**.",
        "gameObjective": "In **Fallout 76**, with brewing unlocked and a Biv daily already active, read its drink and test requirement. With that drink ready, **drink it and perform the listed test while its effect is active**."
      },
      "de": {
        "name": "Bivs Verkostung",
        "objective": "**Fallout 76**: Lies bei freigeschaltetem Brauen und laufender Tagesaufgabe von Biv das verlangte Getränk und den Test. Wenn das Getränk bereitliegt, **trink es und führe den angezeigten Test während seiner Wirkung aus**.",
        "gameObjective": "**Fallout 76**: Lies bei freigeschaltetem Brauen und laufender Tagesaufgabe von Biv das verlangte Getränk und den Test. Wenn das Getränk bereitliegt, **trink es und führe den angezeigten Test während seiner Wirkung aus**."
      }
    },
    "experience": {
      "family": "tasting-test",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["cooking"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Brewing unlocked; active Biv daily; required drink",
          "de": "Brauen freigeschaltet; aktive Biv-Tagesaufgabe; verlangtes Getränk",
          "chips": {"en": ["Biv daily"], "de": ["Biv-Tagesaufgabe"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["rpg", "shooter", "adventure"]
  },
  {
    "id": "fallout-fo76-tadpole-known-test",
    "moodIds": ["curious", "focused"],
    "type": "objective",
    "tags": ["puzzles"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "fallout",
      "installmentIds": ["fallout-76"]
    },
    "translations": {
      "en": {
        "name": "A Tadpole Exam",
        "objective": "In **Fallout 76**, with Pioneer Scout access and an unpassed Tadpole knowledge exam available, **complete one exam at the testing terminal**. Read the questions yourself. Stop after three submissions if you do not pass.",
        "gameObjective": "In **Fallout 76**, with Pioneer Scout access and an unpassed Tadpole knowledge exam available, **complete one exam at the testing terminal**. Read the questions yourself. Stop after three submissions if you do not pass."
      },
      "de": {
        "name": "Eine Pfadfinderprüfung",
        "objective": "**Fallout 76**: **Bearbeite mit Pfadfinderzugang an einem Prüfungsterminal eine noch nicht bestandene Kaulquappen-Wissensprüfung**. Lies die Fragen selbst. Nach drei Abgaben ist Schluss, falls du nicht bestehst.",
        "gameObjective": "**Fallout 76**: **Bearbeite mit Pfadfinderzugang an einem Prüfungsterminal eine noch nicht bestandene Kaulquappen-Wissensprüfung**. Lies die Fragen selbst. Nach drei Abgaben ist Schluss, falls du nicht bestehst."
      }
    },
    "experience": {
      "family": "scout-exam",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["puzzles"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Pioneer Scout access; unpassed available exam",
          "de": "Pfadfinderzugang; offene Wissensprüfung",
          "chips": {"en": ["Pioneer Scout access", "Exam"], "de": ["Pfadfinderzugang", "Wissensprüfung"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["rpg", "shooter", "adventure"]
  },
  {
    "id": "fallout-fo76-possessed-camp-outfit",
    "moodIds": ["create", "relax"],
    "type": "creation",
    "tags": ["outfit", "decorating"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "fallout",
      "installmentIds": ["fallout-76"]
    },
    "translations": {
      "en": {
        "name": "Dress the Mannequin",
        "objective": "In **Fallout 76**, with a CAMP mannequin plan unlocked and a matching set of spare apparel ready, **place a mannequin and dress it in that set**. Keep it below the CAMP’s mannequin limit.",
        "gameObjective": "In **Fallout 76**, with a CAMP mannequin plan unlocked and a matching set of spare apparel ready, **place a mannequin and dress it in that set**. Keep it below the CAMP’s mannequin limit."
      },
      "de": {
        "name": "Die Schaufensterpuppe anziehen",
        "objective": "**Fallout 76**: **Stell mit freigeschaltetem CAMP-Schaufensterpuppenplan eine Puppe auf und zieh ihr ein vorhandenes zusammenpassendes Outfit an**. Bleib unter dem Schaufensterpuppenlimit des CAMPs.",
        "gameObjective": "**Fallout 76**: **Stell mit freigeschaltetem CAMP-Schaufensterpuppenplan eine Puppe auf und zieh ihr ein vorhandenes zusammenpassendes Outfit an**. Bleib unter dem Schaufensterpuppenlimit des CAMPs."
      }
    },
    "experience": {
      "family": "mannequin",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["outfit", "decorating"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Mannequin plan; spare apparel; CAMP limit space",
          "de": "Schaufensterpuppenplan; übrige Kleidung; freies CAMP-Limit",
          "chips": {"en": ["Mannequin plan"], "de": ["Schaufensterpuppenplan"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["rpg", "shooter", "adventure"]
  },
  {
    "id": "fallout-fo76-roadside-camp-tour",
    "moodIds": ["explore", "curious"],
    "type": "inspiration",
    "tags": ["exploration"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "fallout",
      "installmentIds": ["fallout-76"]
    },
    "translations": {
      "en": {
        "name": "CAMPs along the Road",
        "objective": "In Fallout 76, walk a known road where other players’ CAMPs are already visible on the map. **Visit the open builds you pass** and look at how their owners used the terrain. Buy only if you want to.",
        "gameObjective": "In Fallout 76, walk a known road where other players’ CAMPs are already visible on the map. **Visit the open builds you pass** and look at how their owners used the terrain. Buy only if you want to."
      },
      "de": {
        "name": "CAMPs am Weg",
        "objective": "Fallout 76: Geh eine bekannte Straße entlang, an der CAMPs anderer Spieler schon auf der Karte sichtbar sind. **Besuch die offenen Bauten unterwegs** und schau, wie ihre Besitzer das Gelände genutzt haben. Kaufen musst du nichts.",
        "gameObjective": "Fallout 76: Geh eine bekannte Straße entlang, an der CAMPs anderer Spieler schon auf der Karte sichtbar sind. **Besuch die offenen Bauten unterwegs** und schau, wie ihre Besitzer das Gelände genutzt haben. Kaufen musst du nichts."
      }
    },
    "experience": {
      "family": "camp-tour",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "open",
      "activities": ["exploration"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Open player CAMPs visible along road",
          "de": "Offene Spieler-CAMPs am Weg sichtbar",
          "chips": {"en": ["Player CAMPs"], "de": ["Spieler-CAMPs"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["rpg", "shooter", "adventure"]
  },
  {
    "id": "fallout-fo76-early-route-return",
    "moodIds": ["nostalgic", "relax"],
    "type": "inspiration",
    "tags": ["exploration", "replay"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "fallout",
      "installmentIds": ["fallout-76"]
    },
    "translations": {
      "en": {
        "name": "From Vault 76",
        "objective": "In Fallout 76, on an established character, walk from Vault 76 toward the Overseer’s CAMP along the route you remember taking as a new player. **Revisit the signs, buildings and roadside finds** at your own pace.",
        "gameObjective": "In Fallout 76, on an established character, walk from Vault 76 toward the Overseer’s CAMP along the route you remember taking as a new player. **Revisit the signs, buildings and roadside finds** at your own pace."
      },
      "de": {
        "name": "Von Vault 76",
        "objective": "Fallout 76: Geh mit einem eingespielten Charakter von Vault 76 in Richtung CAMP der Aufseherin auf dem Weg, den du von deinen ersten Schritten kennst. **Besuch Schilder, Häuser und Straßenfunde in deinem Tempo wieder**.",
        "gameObjective": "Fallout 76: Geh mit einem eingespielten Charakter von Vault 76 in Richtung CAMP der Aufseherin auf dem Weg, den du von deinen ersten Schritten kennst. **Besuch Schilder, Häuser und Straßenfunde in deinem Tempo wieder**."
      }
    },
    "experience": {
      "family": "familiar-route",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "open",
      "activities": ["exploration"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Established character; familiar early route",
          "de": "Eingespielter Charakter; vertrauter Anfangsweg",
          "chips": {"en": ["Established character"], "de": ["Eingespielter Charakter"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["rpg", "shooter", "adventure"]
  },
  {
    "id": "fallout-fo4-power-a-room",
    "moodIds": ["create"],
    "type": "creation",
    "tags": ["building"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "fallout",
      "installmentIds": ["fallout-4"]
    },
    "translations": {
      "en": {
        "name": "Light the Room",
        "objective": "At a settlement, **connect one generator to a light and switch it on**. Make the wiring fit the room rather than rebuilding the settlement.",
        "gameObjective": "At a settlement, **connect one generator to a light and switch it on**. Make the wiring fit the room rather than rebuilding the settlement."
      },
      "de": {
        "name": "Licht im Raum",
        "objective": "Verbinde in einer Siedlung **einen Generator mit einer Lampe und schalte sie ein**. Verlege das Kabel passend zum Raum.",
        "gameObjective": "Verbinde in einer Siedlung **einen Generator mit einer Lampe und schalte sie ein**. Verlege das Kabel passend zum Raum."
      }
    },
    "experience": {
      "family": "lighting",
      "cardMetadata": { "genreIds": ["rpg", "adventure"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["building"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Owned settlement; generator, light and materials",
          "de": "Eigene Siedlung; Generator, Lampe und Material",
          "chips": {"en": ["Settlement", "Generator"], "de": ["Siedlung", "Generator"]},
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
    "id": "fallout-fo4-freedom-trail",
    "moodIds": ["explore"],
    "type": "objective",
    "tags": ["story"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "fallout",
      "installmentIds": ["fallout-4"]
    },
    "translations": {
      "en": {
        "name": "Follow the Red Line",
        "objective": "From Boston Common, **follow the Freedom Trail markers to their destination without an external map**.",
        "gameObjective": "From Boston Common, **follow the Freedom Trail markers to their destination without an external map**."
      },
      "de": {
        "name": "Der roten Linie folgen",
        "objective": "Folge vom Boston Common aus **den Markierungen des Freedom Trail bis zum Ziel, ohne externe Karte**.",
        "gameObjective": "Folge vom Boston Common aus **den Markierungen des Freedom Trail bis zum Ziel, ohne externe Karte**."
      }
    },
    "experience": {
      "family": "freedom-trail",
      "cardMetadata": { "genreIds": ["rpg", "adventure"], "playStyleIds": [] },
      "finish": "outcome",
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
    "gameGenreIds": ["rpg", "adventure"]
  },
  {
    "id": "fallout-fo4-vats-limb",
    "moodIds": ["curious"],
    "type": "experiment",
    "tags": ["abilities"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "fallout",
      "installmentIds": ["fallout-4"]
    },
    "translations": {
      "en": {
        "name": "Change the Fight",
        "objective": "In **Fallout 4**, **target a hostile’s leg in V.A.T.S. and try to cripple it**. Watch how its movement changes. Finish after the effect or three V.A.T.S. attacks.",
        "gameObjective": "In **Fallout 4**, **target a hostile’s leg in V.A.T.S. and try to cripple it**. Watch how its movement changes. Finish after the effect or three V.A.T.S. attacks."
      },
      "de": {
        "name": "Den Kampf verändern",
        "objective": "**Ziele in Fallout 4 in V.A.T.S. auf das Bein eines Gegners und probier, es zu verkrüppeln**. Schau, wie sich seine Bewegung danach verändert. Der Versuch endet nach der Wirkung oder drei V.A.T.S.-Angriffen.",
        "gameObjective": "**Ziele in Fallout 4 in V.A.T.S. auf das Bein eines Gegners und probier, es zu verkrüppeln**. Schau, wie sich seine Bewegung danach verändert. Der Versuch endet nach der Wirkung oder drei V.A.T.S.-Angriffen."
      }
    },
    "experience": {
      "family": "limb-target",
      "cardMetadata": { "genreIds": ["rpg", "adventure"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["abilities"],
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
    "id": "fallout-fo4-holotape-story",
    "moodIds": ["focused"],
    "type": "objective",
    "tags": ["story"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "fallout",
      "installmentIds": ["fallout-4"]
    },
    "translations": {
      "en": {
        "name": "One Voice from Before",
        "objective": "In **Fallout 4**, with an unexplored building nearby, **find an unheard holotape and listen to its recording through the end**. See what it reveals about the place.",
        "gameObjective": "In **Fallout 4**, with an unexplored building nearby, **find an unheard holotape and listen to its recording through the end**. See what it reveals about the place."
      },
      "de": {
        "name": "Eine Stimme von früher",
        "objective": "**Finde in Fallout 4 in einem nahen unerforschten Gebäude ein noch ungehörtes Holoband und hör die Aufnahme bis zum Ende an**. Schau, was sie über den Ort verrät.",
        "gameObjective": "**Finde in Fallout 4 in einem nahen unerforschten Gebäude ein noch ungehörtes Holoband und hör die Aufnahme bis zum Ende an**. Schau, was sie über den Ort verrät."
      }
    },
    "experience": {
      "family": "holotape",
      "cardMetadata": { "genreIds": ["rpg", "adventure"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Unexplored nearby building with unheard holotape",
          "de": "Nahes unbekanntes Gebäude mit ungehörtem Holoband",
          "chips": {"en": ["Holotape"], "de": ["Holoband"]},
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
    "id": "fallout-fo4-settler-job",
    "moodIds": ["progress"],
    "type": "objective",
    "tags": ["building"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "fallout",
      "installmentIds": ["fallout-4"]
    },
    "translations": {
      "en": {
        "name": "Give Someone a Job",
        "objective": "In a settlement with an unassigned settler, **build one useful work station or crop plot and assign that settler to it**.",
        "gameObjective": "In a settlement with an unassigned settler, **build one useful work station or crop plot and assign that settler to it**."
      },
      "de": {
        "name": "Eine Aufgabe für jemanden",
        "objective": "Baue in einer Siedlung mit unbeschäftigtem Bewohner **eine nützliche Arbeitsstelle oder ein Beet und weise ihn dort zu**.",
        "gameObjective": "Baue in einer Siedlung mit unbeschäftigtem Bewohner **eine nützliche Arbeitsstelle oder ein Beet und weise ihn dort zu**."
      }
    },
    "experience": {
      "family": "settler-work",
      "cardMetadata": { "genreIds": ["rpg", "adventure"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["building"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Unassigned settler; building materials",
          "de": "Unbeschäftigter Siedler; Baumaterial",
          "chips": {"en": ["Unassigned settler"], "de": ["Freier Siedler"]},
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
    "id": "fallout-fo4-radstorm-shelter",
    "moodIds": ["curious"],
    "type": "experiment",
    "tags": ["exploration"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "fallout",
      "installmentIds": ["fallout-4"]
    },
    "translations": {
      "en": {
        "name": "Wait Out the Storm",
        "objective": "During an active radstorm in **Fallout 4**, watch your radiation exposure outside. **Enter an accessible interior and compare whether you are still taking radiation there**.",
        "gameObjective": "During an active radstorm in **Fallout 4**, watch your radiation exposure outside. **Enter an accessible interior and compare whether you are still taking radiation there**."
      },
      "de": {
        "name": "Schutz vor dem Sturm",
        "objective": "Wenn in **Fallout 4** gerade ein radioaktiver Sturm tobt, achte auf die Strahlung draußen. **Betritt einen erreichbaren Innenraum und vergleiche, ob du dort noch Strahlung abbekommst**.",
        "gameObjective": "Wenn in **Fallout 4** gerade ein radioaktiver Sturm tobt, achte auf die Strahlung draußen. **Betritt einen erreichbaren Innenraum und vergleiche, ob du dort noch Strahlung abbekommst**."
      }
    },
    "experience": {
      "family": "radstorm",
      "cardMetadata": { "genreIds": ["rpg", "adventure"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["exploration"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Aktiver Strahlungssturm; erreichbarer betretbarer Innenraum",
          "en": "Active radstorm; accessible enterable interior",
          "chips": {"en": ["Radstorm", "Shelter"], "de": ["Strahlungssturm", "Schutzraum"]},
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
    "id": "fallout-fo4-dogmeat-search",
    "moodIds": ["relax"],
    "type": "objective",
    "tags": ["animals"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "fallout",
      "installmentIds": ["fallout-4"]
    },
    "translations": {
      "en": {
        "name": "Dogmeat Finds It",
        "objective": "With Dogmeat as your companion in **Fallout 4**, **ask him to search a nearby room and follow his response**. Pick up anything he finds; an empty search also finishes the attempt.",
        "gameObjective": "With Dogmeat as your companion in **Fallout 4**, **ask him to search a nearby room and follow his response**. Pick up anything he finds; an empty search also finishes the attempt."
      },
      "de": {
        "name": "Dogmeat findet etwas",
        "objective": "**Lass in Fallout 4 deinen Begleiter Dogmeat einen nahen Raum absuchen und folge seiner Reaktion**. Heb seine Funde auf; auch eine leere Suche beendet den Versuch.",
        "gameObjective": "**Lass in Fallout 4 deinen Begleiter Dogmeat einen nahen Raum absuchen und folge seiner Reaktion**. Heb seine Funde auf; auch eine leere Suche beendet den Versuch."
      }
    },
    "experience": {
      "family": "dog-search",
      "cardMetadata": { "genreIds": ["rpg", "adventure"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["animals"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Dogmeat companion",
          "de": "Begleiter Dogmeat",
          "chips": {"en": ["Dogmeat companion"], "de": ["Begleiter Dogmeat"]},
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
    "id": "fallout-fo76-photo-story",
    "moodIds": ["create"],
    "type": "creation",
    "tags": ["photography"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "fallout",
      "installmentIds": ["fallout-76"]
    },
    "translations": {
      "en": {
        "name": "Appalachian Postcard",
        "objective": "In Photo Mode, **frame a landmark with your character in the shot and save one photo**.",
        "gameObjective": "In Photo Mode, **frame a landmark with your character in the shot and save one photo**."
      },
      "de": {
        "name": "Postkarte aus Appalachia",
        "objective": "Rahme im Fotomodus **eine Landmarke zusammen mit deiner Figur ein und speichere ein Foto**.",
        "gameObjective": "Rahme im Fotomodus **eine Landmarke zusammen mit deiner Figur ein und speichere ein Foto**."
      }
    },
    "experience": {
      "family": "photography",
      "cardMetadata": { "genreIds": ["rpg", "adventure"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["photography"],
      "rules": [],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["rpg", "adventure"]
  },
  {
    "id": "fallout-fo76-public-team",
    "moodIds": ["connect"],
    "type": "objective",
    "tags": ["support"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "fallout",
      "installmentIds": ["fallout-76"]
    },
    "translations": {
      "en": {
        "name": "Help the Team",
        "objective": "Join a Public Team and **complete one shared Public Event while staying with the team**.",
        "gameObjective": "Join a Public Team and **complete one shared Public Event while staying with the team**."
      },
      "de": {
        "name": "Mit dem Team helfen",
        "objective": "Tritt einem öffentlichen Team bei und **beende mit ihm ein gemeinsames öffentliches Event**.",
        "gameObjective": "Tritt einem öffentlichen Team bei und **beende mit ihm ein gemeinsames öffentliches Event**."
      }
    },
    "experience": {
      "family": "shared-public-event",
      "cardMetadata": { "genreIds": ["rpg", "adventure"], "playStyleIds": ["co-op"] },
      "finish": "outcome",
      "activities": ["support"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Human Public Team; active shared Public Event",
          "de": "Menschliches öffentliches Team; laufendes gemeinsames Event",
          "chips": {"en": ["Public Team", "Public Event"], "de": ["Öffentliches Team", "Öffentliches Event"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "others",
          "participation": "co-op",
          "formation": "team",
          "mode": "Human team"
        }
      ]
    },
    "gameGenreIds": ["rpg", "adventure"]
  },
  {
    "id": "fallout-fo76-workshop-defend",
    "moodIds": ["challenge"],
    "type": "challenge",
    "tags": ["building", "three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "universal": false,
    "curated": {
      "gameId": "fallout",
      "installmentIds": ["fallout-76"]
    },
    "translations": {
      "en": {
        "name": "Hold a Workshop",
        "objective": "Claim an unowned Public Workshop, **build one defense and survive its first defend event**. Stop after three attempts.",
        "gameObjective": "Claim an unowned Public Workshop, **build one defense and survive its first defend event**. Stop after three attempts."
      },
      "de": {
        "name": "Eine Werkstatt halten",
        "objective": "Beanspruche eine freie öffentliche Werkstatt, **baue eine Verteidigung und überstehe das erste Verteidigungsereignis**. Nach drei Versuchen ist Schluss.",
        "gameObjective": "Beanspruche eine freie öffentliche Werkstatt, **baue eine Verteidigung und überstehe das erste Verteidigungsereignis**. Nach drei Versuchen ist Schluss."
      }
    },
    "experience": {
      "family": "workshop-defense",
      "cardMetadata": { "genreIds": ["rpg", "adventure"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["building"],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Unowned Public Workshop; materials; PvP area",
          "de": "Freie öffentliche Werkstatt; Material; PvP-Gebiet",
          "chips": {"en": ["Unowned Public Workshop"], "de": ["Öffentliche Werkstatt"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["rpg", "adventure"]
  },
  {
    "id": "fallout-fo76-perk-test",
    "moodIds": ["curious"],
    "type": "experiment",
    "tags": ["abilities"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "fallout",
      "installmentIds": ["fallout-76"]
    },
    "translations": {
      "en": {
        "name": "Swap One Perk",
        "objective": "At a Punch Card Machine in **Fallout 76**, change a usable Perk card in your loadout. **Try its effect in a suitable encounter**.",
        "gameObjective": "At a Punch Card Machine in **Fallout 76**, change a usable Perk card in your loadout. **Try its effect in a suitable encounter**."
      },
      "de": {
        "name": "Eine Karte anders",
        "objective": "Ändere in **Fallout 76** an einer Lochkartenmaschine eine nutzbare Perk-Karte in deinem Loadout. **Probier ihre Wirkung in einer passenden Begegnung aus**.",
        "gameObjective": "Ändere in **Fallout 76** an einer Lochkartenmaschine eine nutzbare Perk-Karte in deinem Loadout. **Probier ihre Wirkung in einer passenden Begegnung aus**."
      }
    },
    "experience": {
      "family": "perk-test",
      "cardMetadata": { "genreIds": ["rpg", "adventure"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["abilities"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Lochkartenmaschine; Perk-Loadout; nutzbare alternative Perk-Karte",
          "en": "Punch Card Machine; Perk loadout; usable alternative Perk card",
          "chips": {"en": ["Punch Card Machine", "Perk card"], "de": ["Lochkartenmaschine", "Perk-Karte"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["rpg", "adventure"]
  },
  {
    "id": "fallout-fo76-daily-op-role",
    "moodIds": ["focused"],
    "type": "objective",
    "tags": ["support"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "fallout",
      "installmentIds": ["fallout-76"]
    },
    "translations": {
      "en": {
        "name": "One Daily Op Role",
        "objective": "In a Daily Op with a team, **take responsibility for one objective and finish the operation with them**.",
        "gameObjective": "In a Daily Op with a team, **take responsibility for one objective and finish the operation with them**."
      },
      "de": {
        "name": "Eine Rolle im Tageseinsatz",
        "objective": "Übernimm in einem Tageseinsatz mit Team **ein konkretes Ziel und beende den Einsatz mit ihnen**.",
        "gameObjective": "Übernimm in einem Tageseinsatz mit Team **ein konkretes Ziel und beende den Einsatz mit ihnen**."
      }
    },
    "experience": {
      "family": "daily-op",
      "cardMetadata": { "genreIds": ["rpg", "adventure"], "playStyleIds": ["co-op"] },
      "finish": "outcome",
      "activities": ["support"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Human team ready for Daily Op",
          "de": "Menschliches Team für Tageseinsatz bereit",
          "chips": {"en": ["Daily Op"], "de": ["Tageseinsatz"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "others",
          "participation": "co-op",
          "formation": "team",
          "mode": "Human team"
        }
      ]
    },
    "gameGenreIds": ["rpg", "adventure"]
  },
  {
    "id": "fallout-fo76-train-vendor",
    "moodIds": ["progress"],
    "type": "objective",
    "tags": ["trading"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "fallout",
      "installmentIds": ["fallout-76"]
    },
    "translations": {
      "en": {
        "name": "Lighten the Stash",
        "objective": "With a surplus weapon in your stash in **Fallout 76**, visit a train-station vendor. **Sell that weapon to free its stash space**, keeping your usual equipment.",
        "gameObjective": "With a surplus weapon in your stash in **Fallout 76**, visit a train-station vendor. **Sell that weapon to free its stash space**, keeping your usual equipment."
      },
      "de": {
        "name": "Platz im Lager",
        "objective": "Besuche in **Fallout 76** mit einer übrigen Waffe aus deinem Lager einen Bahnhofshändler. **Verkauf die Waffe, um ihren Lagerplatz freizumachen**, und behalte deine übliche Ausrüstung.",
        "gameObjective": "Besuche in **Fallout 76** mit einer übrigen Waffe aus deinem Lager einen Bahnhofshändler. **Verkauf die Waffe, um ihren Lagerplatz freizumachen**, und behalte deine übliche Ausrüstung."
      }
    },
    "experience": {
      "family": "surplus-sale",
      "cardMetadata": { "genreIds": ["rpg", "adventure"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["trading"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Surplus stash weapon; vendor allowance left",
          "de": "Übrige Lagerwaffe; Händlerkontingent übrig",
          "chips": {"en": ["Stash weapon"], "de": ["Lagerwaffe"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["rpg", "adventure"]
  },
  {
    "id": "fallout-fo76-scout-lookout",
    "moodIds": ["explore"],
    "type": "objective",
    "tags": ["exploration"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "fallout",
      "installmentIds": ["fallout-76"]
    },
    "translations": {
      "en": {
        "name": "Survey from Above",
        "objective": "Climb a lookout tower you have not used and **survey the area to reveal a new map location**.",
        "gameObjective": "Climb a lookout tower you have not used and **survey the area to reveal a new map location**."
      },
      "de": {
        "name": "Ausblick von oben",
        "objective": "Steig auf einen noch nicht genutzten Aussichtsturm und **such die Umgebung ab, um einen neuen Ort auf der Karte aufzudecken**.",
        "gameObjective": "Steig auf einen noch nicht genutzten Aussichtsturm und **such die Umgebung ab, um einen neuen Ort auf der Karte aufzudecken**."
      }
    },
    "experience": {
      "family": "lookout-survey",
      "cardMetadata": { "genreIds": ["rpg", "adventure"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["exploration"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Unused lookout with unrevealed locations nearby",
          "de": "Ungenutzter Aussichtsturm mit unentdeckten Orten in der Nähe",
          "chips": {"en": ["Lookout", "Unrevealed locations"], "de": ["Aussichtsturm", "Unentdeckte Orte"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["rpg", "adventure"]
  }
]);
