import { defineQuests } from "../defineQuests";

export const GamesZeldaQuests = defineQuests([
  {
    "id": "zelda-breath-of-the-wild-follow-the-land",
    "moodIds": ["explore", "curious"],
    "type": "objective",
    "tags": ["exploration", "no-fast-travel"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "zelda",
      "installmentIds": ["botw"]
    },
    "translations": {
      "en": {
        "name": "Follow the Land",
        "objective": "In **Breath of the Wild**, start at a stable you know. Pick one nearby landmark you can see, close the map, and **reach it on foot or horseback without fast travel**. Use the terrain to find your way.",
        "gameObjective": "In **Breath of the Wild**, start at a stable you know. Pick one nearby landmark you can see, close the map, and **reach it on foot or horseback without fast travel**. Use the terrain to find your way."
      },
      "de": {
        "name": "Dem Gelände folgen",
        "objective": "Starte in **Breath of the Wild** an einem bekannten Stall. Wähle eine nahe sichtbare Landmarke, schließe die Karte und **erreiche sie zu Fuß oder zu Pferd ohne Schnellreise**. Orientiere dich am Gelände.",
        "gameObjective": "Starte in **Breath of the Wild** an einem bekannten Stall. Wähle eine nahe sichtbare Landmarke, schließe die Karte und **erreiche sie zu Fuß oder zu Pferd ohne Schnellreise**. Orientiere dich am Gelände."
      }
    },
    "experience": {
      "family": "landmark-navigation",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [], "platformIds": ["switch", "wii-u"] },
      "finish": "outcome",
      "activities": ["exploration"],
      "rules": ["no-fast-travel"],
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
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "zelda-breath-of-the-wild-three-new-entries",
    "moodIds": ["curious", "focused"],
    "type": "objective",
    "tags": ["photography", "collectibles"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "zelda",
      "installmentIds": ["botw"]
    },
    "translations": {
      "en": {
        "name": "Three New Entries",
        "objective": "In **Breath of the Wild**, with the Camera Rune unlocked, find a nearby creature, plant or material, and weapon missing from your Hyrule Compendium. **Photograph one of each and confirm all three new entries**.",
        "gameObjective": "In **Breath of the Wild**, with the Camera Rune unlocked, find a nearby creature, plant or material, and weapon missing from your Hyrule Compendium. **Photograph one of each and confirm all three new entries**."
      },
      "de": {
        "name": "Drei neue Einträge",
        "objective": "Such in **Breath of the Wild** mit freigeschaltetem Kamera-Modul ein Tier, eine Pflanze oder Zutat und eine Waffe, die dir im Hyrule-Handbuch noch fehlen. **Fotografiere alle drei und prüfe die neuen Einträge**.",
        "gameObjective": "Such in **Breath of the Wild** mit freigeschaltetem Kamera-Modul ein Tier, eine Pflanze oder Zutat und eine Waffe, die dir im Hyrule-Handbuch noch fehlen. **Fotografiere alle drei und prüfe die neuen Einträge**."
      }
    },
    "experience": {
      "family": "compendium",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [], "platformIds": ["switch", "wii-u"] },
      "finish": "outcome",
      "activities": ["photography", "collectibles"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Camera Rune; nearby missing entries",
          "de": "Kamera-Modul; fehlende Einträge in der Nähe",
          "chips": {"en": ["Camera Rune", "Missing entries"], "de": ["Kamera-Modul", "Fehlende Einträge"]},
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
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "zelda-breath-of-the-wild-one-snow-run",
    "moodIds": ["challenge", "restless"],
    "type": "challenge",
    "tags": ["traversal", "three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "zelda",
      "installmentIds": ["botw"]
    },
    "translations": {
      "en": {
        "name": "One Snow Run",
        "objective": "In **Breath of the Wild**, find a short snowy slope and mark a visible finish near its base. **Shield-surf from the top to that point without falling**, or stop after three tries. Bring a shield you can spare.",
        "gameObjective": "In **Breath of the Wild**, find a short snowy slope and mark a visible finish near its base. **Shield-surf from the top to that point without falling**, or stop after three tries. Bring a shield you can spare."
      },
      "de": {
        "name": "Eine Abfahrt im Schnee",
        "objective": "Such dir in **Breath of the Wild** einen kurzen Schneehang und ein Ziel, das du von oben sehen kannst. **Surfe auf deinem Schild bis dorthin, ohne zu stürzen**, oder hör nach drei Versuchen auf. Nimm ein Schild, das du nicht mehr brauchst.",
        "gameObjective": "Such dir in **Breath of the Wild** einen kurzen Schneehang und ein Ziel, das du von oben sehen kannst. **Surfe auf deinem Schild bis dorthin, ohne zu stürzen**, oder hör nach drei Versuchen auf. Nimm ein Schild, das du nicht mehr brauchst."
      }
    },
    "experience": {
      "family": "shield-surf",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [], "platformIds": ["switch", "wii-u"] },
      "finish": "attempt",
      "activities": ["traversal"],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Spare shield; snowy slope",
          "de": "Übriges Schild; Schneehang",
          "chips": {"en": ["Shield", "Snowy slope"], "de": ["Schild", "Schneehang"]},
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
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "zelda-breath-of-the-wild-korok-portrait",
    "moodIds": ["create", "relax"],
    "type": "creation",
    "tags": ["photography", "exploration"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "zelda",
      "installmentIds": ["botw"]
    },
    "translations": {
      "en": {
        "name": "Korok Portrait",
        "objective": "In **Breath of the Wild**, with the Camera Rune unlocked, reveal a reachable Korok you have not found yet. **Save a selfie with Link and the Korok in frame**. Pick a clue on safe ground.",
        "gameObjective": "In **Breath of the Wild**, with the Camera Rune unlocked, reveal a reachable Korok you have not found yet. **Save a selfie with Link and the Korok in frame**. Pick a clue on safe ground."
      },
      "de": {
        "name": "Krog-Porträt",
        "objective": "Finde in **Breath of the Wild** mit freigeschaltetem Kamera-Modul einen noch unentdeckten Krog an einem gut erreichbaren Ort. **Speichere ein Selfie mit Link und dem Krog im Bild**.",
        "gameObjective": "Finde in **Breath of the Wild** mit freigeschaltetem Kamera-Modul einen noch unentdeckten Krog an einem gut erreichbaren Ort. **Speichere ein Selfie mit Link und dem Krog im Bild**."
      }
    },
    "experience": {
      "family": "photography",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [], "platformIds": ["switch", "wii-u"] },
      "finish": "outcome",
      "activities": ["photography", "exploration"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Camera Rune; reachable undiscovered Korok",
          "de": "Kamera-Modul; erreichbarer unentdeckter Krog",
          "chips": {"en": ["Camera Rune", "Undiscovered Korok"], "de": ["Kamera-Modul", "Unentdeckter Krog"]},
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
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "zelda-breath-of-the-wild-campfire-supper",
    "moodIds": ["relax"],
    "type": "objective",
    "tags": ["cooking", "no-timer"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "zelda",
      "installmentIds": ["botw"]
    },
    "translations": {
      "en": {
        "name": "Campfire Supper",
        "objective": "In **Breath of the Wild**, start beside a safe cooking pot. Gather edible ingredients nearby, **cook one meal using only what you just found, and eat it beside the pot**.",
        "gameObjective": "In **Breath of the Wild**, start beside a safe cooking pot. Gather edible ingredients nearby, **cook one meal using only what you just found, and eat it beside the pot**."
      },
      "de": {
        "name": "Essen am Feuer",
        "objective": "Beginne in **Breath of the Wild** an einer sicheren Kochstelle. Sammle essbare Zutaten in der Nähe, **koche daraus eine Mahlzeit und iss sie an der Kochstelle**. Nutze nur, was du gerade gefunden hast.",
        "gameObjective": "Beginne in **Breath of the Wild** an einer sicheren Kochstelle. Sammle essbare Zutaten in der Nähe, **koche daraus eine Mahlzeit und iss sie an der Kochstelle**. Nutze nur, was du gerade gefunden hast."
      }
    },
    "experience": {
      "family": "wild-cooking",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [], "platformIds": ["switch", "wii-u"] },
      "finish": "outcome",
      "activities": ["cooking"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Safe lit cooking pot; nearby ingredients",
          "de": "Sicherer brennender Kochtopf; Zutaten in der Nähe",
          "chips": {"en": ["Lit cooking pot", "Ingredients"], "de": ["Brennender Kochtopf", "Zutaten"]},
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
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "zelda-tears-of-the-kingdom-no-steering-stick",
    "moodIds": ["curious", "explore"],
    "type": "experiment",
    "tags": ["building", "traversal"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "universal": false,
    "curated": {
      "gameId": "zelda",
      "installmentIds": ["totk"]
    },
    "translations": {
      "en": {
        "name": "No Steering Stick",
        "objective": "In **Tears of the Kingdom**, with Ultrahand unlocked, pick a small stream or gap you can see from both sides. Build a device without a steering stick and **cross the obstacle on it**. Use nearby parts and try another design if the first fails.",
        "gameObjective": "In **Tears of the Kingdom**, with Ultrahand unlocked, pick a small stream or gap you can see from both sides. Build a device without a steering stick and **cross the obstacle on it**. Use nearby parts and try another design if the first fails."
      },
      "de": {
        "name": "Ohne Steuerknüppel",
        "objective": "Wähle in **Tears of the Kingdom** mit freigeschaltetem Ultra-Hand einen kleinen Bach oder Spalt, dessen beide Seiten du sehen kannst. Baue ein Gefährt ohne Steuerknüppel und **überquere damit das Hindernis**. Nutze Teile aus der Nähe und probiere bei Bedarf einen zweiten Entwurf.",
        "gameObjective": "Wähle in **Tears of the Kingdom** mit freigeschaltetem Ultra-Hand einen kleinen Bach oder Spalt, dessen beide Seiten du sehen kannst. Baue ein Gefährt ohne Steuerknüppel und **überquere damit das Hindernis**. Nutze Teile aus der Nähe und probiere bei Bedarf einen zweiten Entwurf."
      }
    },
    "experience": {
      "family": "vehicle-crossing",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [], "platformIds": ["switch"] },
      "finish": "attempt",
      "activities": ["building", "traversal"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Ultrahand; usable nearby parts",
          "de": "Ultra-Hand; benutzbare Teile in der Nähe",
          "chips": {"en": ["Ultrahand", "Parts"], "de": ["Ultra-Hand", "Teile"]},
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
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "zelda-tears-of-the-kingdom-fuse-from-here",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["crafting", "new-approach"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "zelda",
      "installmentIds": ["totk"]
    },
    "translations": {
      "en": {
        "name": "Fuse From Here",
        "objective": "With Fuse unlocked in **Tears of the Kingdom**, attach a material from your current area to a spare weapon. **Try that weapon through one ordinary fight**, noticing how the attachment changes its reach or effect. A win is optional.",
        "gameObjective": "With Fuse unlocked in **Tears of the Kingdom**, attach a material from your current area to a spare weapon. **Try that weapon through one ordinary fight**, noticing how the attachment changes its reach or effect. A win is optional."
      },
      "de": {
        "name": "Fusion vor Ort",
        "objective": "Verbinde in **Tears of the Kingdom** mit freigeschalteter Synthese ein Material aus deiner Umgebung mit einer übrigen Waffe. **Probier sie in einem gewöhnlichen Kampf aus** und achte darauf, wie sich Reichweite oder Wirkung verändern. Gewinnen musst du nicht.",
        "gameObjective": "Verbinde in **Tears of the Kingdom** mit freigeschalteter Synthese ein Material aus deiner Umgebung mit einer übrigen Waffe. **Probier sie in einem gewöhnlichen Kampf aus** und achte darauf, wie sich Reichweite oder Wirkung verändern. Gewinnen musst du nicht."
      }
    },
    "experience": {
      "family": "fused-weapon-test",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [], "platformIds": ["switch"] },
      "finish": "attempt",
      "activities": ["crafting"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Fuse; spare weapon and local material",
          "de": "Synthese; übrige Waffe und örtliches Material",
          "chips": {"en": ["Fuse", "Spare weapon"], "de": ["Synthese", "Übrige Waffe"]},
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
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "zelda-tears-of-the-kingdom-reachable-sky-island",
    "moodIds": ["create", "focused"],
    "type": "creation",
    "tags": ["building", "traversal"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "universal": false,
    "curated": {
      "gameId": "zelda",
      "installmentIds": ["totk"]
    },
    "translations": {
      "en": {
        "name": "Skyward Build",
        "objective": "In **Tears of the Kingdom**, start on an accessible sky island with room to build. Choose a visible lower island. **Build a vehicle from your available Zonai parts and use it to land on the other island**.",
        "gameObjective": "In **Tears of the Kingdom**, start on an accessible sky island with room to build. Choose a visible lower island. **Build a vehicle from your available Zonai parts and use it to land on the other island**."
      },
      "de": {
        "name": "Zur nächsten Himmelsinsel",
        "objective": "Starte in **Tears of the Kingdom** auf einer erreichbaren Himmelsinsel mit Platz zum Bauen. Wähle eine sichtbare, tiefer gelegene Insel. **Bau aus vorhandenen Sonau-Bauteilen ein Gefährt und lande damit auf der anderen Insel**.",
        "gameObjective": "Starte in **Tears of the Kingdom** auf einer erreichbaren Himmelsinsel mit Platz zum Bauen. Wähle eine sichtbare, tiefer gelegene Insel. **Bau aus vorhandenen Sonau-Bauteilen ein Gefährt und lande damit auf der anderen Insel**."
      }
    },
    "experience": {
      "family": "sky-vehicle",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [], "platformIds": ["switch"] },
      "finish": "outcome",
      "activities": ["building", "traversal"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Ultra-Hand; erreichbare Himmelsinsel mit Baufläche; passende Sonau-Bauteile",
          "en": "Ultrahand; accessible sky island with building space; suitable Zonai parts",
          "chips": {"en": ["Ultrahand", "Sky building area"], "de": ["Ultra-Hand", "Himmelsbaufläche"]},
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
    "gameGenreIds": ["adventure", "sandbox"],
    "rarity": "special"
  },
  {
    "id": "zelda-tears-of-the-kingdom-old-tool-new-use",
    "rarity": "special",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["abilities", "new-approach"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "zelda",
      "installmentIds": ["totk"]
    },
    "translations": {
      "en": {
        "name": "Recall the Route",
        "objective": "In **Tears of the Kingdom**, with Ultrahand and Recall unlocked, choose a safe gap with room to land. Move a loose platform across and back with Ultrahand, then stand on it. **Ride your recorded route across using Recall**.",
        "gameObjective": "In **Tears of the Kingdom**, with Ultrahand and Recall unlocked, choose a safe gap with room to land. Move a loose platform across and back with Ultrahand, then stand on it. **Ride your recorded route across using Recall**."
      },
      "de": {
        "name": "Weg zurückspulen",
        "objective": "Wähle in **Tears of the Kingdom** mit freigeschalteter Ultra-Hand und Zeitumkehr einen sicheren Spalt mit Platz zum Landen. Beweg eine lose Plattform mit Ultra-Hand hinüber und zurück, dann stell dich darauf. **Lass dich mit Zeitumkehr über deine aufgezeichnete Route tragen**.",
        "gameObjective": "Wähle in **Tears of the Kingdom** mit freigeschalteter Ultra-Hand und Zeitumkehr einen sicheren Spalt mit Platz zum Landen. Beweg eine lose Plattform mit Ultra-Hand hinüber und zurück, dann stell dich darauf. **Lass dich mit Zeitumkehr über deine aufgezeichnete Route tragen**."
      }
    },
    "experience": {
      "family": "recall-crossing",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [], "platformIds": ["switch"] },
      "finish": "attempt",
      "activities": ["abilities"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Ultrahand, Recall and movable platform",
          "de": "Ultra-Hand, Zeitumkehr und bewegliche Plattform",
          "chips": {"en": ["Ultrahand", "Recall"], "de": ["Ultra-Hand", "Zeitumkehr"]},
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
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "zelda-tears-of-the-kingdom-korok-courier",
    "moodIds": ["progress"],
    "type": "objective",
    "tags": ["building", "traversal"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "zelda",
      "installmentIds": ["totk"]
    },
    "translations": {
      "en": {
        "name": "Korok Courier",
        "objective": "With Ultrahand unlocked, find a backpack Korok whose friend is nearby. **Build a carrier and bring the Korok to their friend**.",
        "gameObjective": "With Ultrahand unlocked, find a backpack Korok whose friend is nearby. **Build a carrier and bring the Korok to their friend**."
      },
      "de": {
        "name": "Krog-Kurier",
        "objective": "Finde mit freigeschalteter Ultra-Hand einen Krog mit Rucksack, dessen Freund in der Nähe wartet. **Bau ein Transportmittel und bring den Krog zu seinem Freund**.",
        "gameObjective": "Finde mit freigeschalteter Ultra-Hand einen Krog mit Rucksack, dessen Freund in der Nähe wartet. **Bau ein Transportmittel und bring den Krog zu seinem Freund**."
      }
    },
    "experience": {
      "family": "korok-delivery",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [], "platformIds": ["switch"] },
      "finish": "outcome",
      "activities": ["building", "traversal"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Ultrahand; backpack Korok and nearby friend",
          "de": "Ultra-Hand; Rucksack-Krog mit Freund in der Nähe",
          "chips": {"en": ["Ultrahand", "Backpack Korok"], "de": ["Ultra-Hand", "Rucksack-Krog"]},
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
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "zelda-tears-of-the-kingdom-hold-the-sign",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["building", "new-approach"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "zelda",
      "installmentIds": ["totk"]
    },
    "translations": {
      "en": {
        "name": "Hold the Sign",
        "objective": "In **Tears of the Kingdom**, find one sign Addison is holding. Prop it up with nearby Ultrahand materials, ask him to let go, and **keep it standing until he secures it**. Move the supports and try again if it falls.",
        "gameObjective": "In **Tears of the Kingdom**, find one sign Addison is holding. Prop it up with nearby Ultrahand materials, ask him to let go, and **keep it standing until he secures it**. Move the supports and try again if it falls."
      },
      "de": {
        "name": "Schild stützen",
        "objective": "Finde in **Tears of the Kingdom** ein Schild, das Birkda festhält. Stütze es mit Ultra-Hand und Material aus der Nähe, bitte ihn loszulassen und **halte es aufrecht, bis er es befestigt**. Versetze die Stützen, falls es umfällt.",
        "gameObjective": "Finde in **Tears of the Kingdom** ein Schild, das Birkda festhält. Stütze es mit Ultra-Hand und Material aus der Nähe, bitte ihn loszulassen und **halte es aufrecht, bis er es befestigt**. Versetze die Stützen, falls es umfällt."
      }
    },
    "experience": {
      "family": "sign-support",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [], "platformIds": ["switch"] },
      "finish": "attempt",
      "activities": ["building"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Ultra-Hand; noch nicht gestütztes Birkda-Schild",
          "en": "Ultrahand; unfinished Addison sign",
          "chips": {"en": ["Ultrahand", "Addison's sign"], "de": ["Ultra-Hand", "Birkdas Schild"]},
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
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "zelda-tears-of-the-kingdom-lightroot-by-landmark",
    "moodIds": ["explore", "focused"],
    "type": "objective",
    "tags": ["exploration", "no-fast-travel"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "universal": false,
    "curated": {
      "gameId": "zelda",
      "installmentIds": ["totk"]
    },
    "translations": {
      "en": {
        "name": "Below the Shrine",
        "objective": "In **Tears of the Kingdom**, with the Depths accessible, choose a surface shrine above an unlit Lightroot you can reach from a known chasm. Mark its matching spot below, travel there using Brightbloom Seeds, and **activate that Lightroot**.",
        "gameObjective": "In **Tears of the Kingdom**, with the Depths accessible, choose a surface shrine above an unlit Lightroot you can reach from a known chasm. Mark its matching spot below, travel there using Brightbloom Seeds, and **activate that Lightroot**."
      },
      "de": {
        "name": "Unter dem Schrein",
        "objective": "Such dir in **Tears of the Kingdom** einen Oberwelt-Schrein aus, unter dem eine noch dunkle Lichtwurzel liegt. Markiere die Stelle im Untergrund, erreich sie von einem bekannten Abgrund aus mit Leuchtsamen und **aktiviere die Lichtwurzel**.",
        "gameObjective": "Such dir in **Tears of the Kingdom** einen Oberwelt-Schrein aus, unter dem eine noch dunkle Lichtwurzel liegt. Markiere die Stelle im Untergrund, erreich sie von einem bekannten Abgrund aus mit Leuchtsamen und **aktiviere die Lichtwurzel**."
      }
    },
    "experience": {
      "family": "lightroot",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [], "platformIds": ["switch"] },
      "finish": "outcome",
      "activities": ["exploration"],
      "rules": ["no-fast-travel"],
      "prerequisites": [
        {
          "en": "Depths accessible; unlit reachable Lightroot; Brightblooms",
          "de": "Untergrund zugänglich; erreichbare dunkle Lichtwurzel; Leuchtsamen",
          "chips": {"en": ["Depths access", "Unlit Lightroot"], "de": ["Untergrund", "Dunkle Lichtwurzel"]},
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
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "zelda-botw-waterfall-ice-steps",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["abilities", "traversal"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "zelda",
      "installmentIds": ["botw"]
    },
    "translations": {
      "en": {
        "name": "Ice on the Waterfall",
        "objective": "In **Breath of the Wild**, with Cryonis unlocked, choose a small waterfall with safe ground above and below. **Make ice steps on its face and climb to the top**.",
        "gameObjective": "In **Breath of the Wild**, with Cryonis unlocked, choose a small waterfall with safe ground above and below. **Make ice steps on its face and climb to the top**."
      },
      "de": {
        "name": "Eis am Wasserfall",
        "objective": "Such in **Breath of the Wild** mit freigeschaltetem Cryomodul einen kleinen Wasserfall mit sicherem Boden oben und unten. **Baue Eisstufen an seiner Vorderseite und klettere hinauf**.",
        "gameObjective": "Such in **Breath of the Wild** mit freigeschaltetem Cryomodul einen kleinen Wasserfall mit sicherem Boden oben und unten. **Baue Eisstufen an seiner Vorderseite und klettere hinauf**."
      }
    },
    "experience": {
      "family": "cryonis-climb",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [], "platformIds": ["switch", "wii-u"] },
      "finish": "attempt",
      "activities": ["abilities", "traversal"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Cryomodul; sicherer kleiner Wasserfall",
          "en": "Cryonis; safe small waterfall",
          "chips": {"en": ["Cryonis", "Small waterfall"], "de": ["Cryomodul", "Kleiner Wasserfall"]},
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
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "zelda-botw-bomb-mining",
    "moodIds": ["progress", "curious"],
    "type": "objective",
    "tags": ["abilities", "collectibles"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "zelda",
      "installmentIds": ["botw"]
    },
    "translations": {
      "en": {
        "name": "Ore without a Pick",
        "objective": "In **Breath of the Wild**, with Remote Bombs unlocked and an ore deposit already nearby, **break it with a bomb and collect its drops**. Keep the blast away from cliffs where the ore could fall out of reach.",
        "gameObjective": "In **Breath of the Wild**, with Remote Bombs unlocked and an ore deposit already nearby, **break it with a bomb and collect its drops**. Keep the blast away from cliffs where the ore could fall out of reach."
      },
      "de": {
        "name": "Erz ohne Spitzhacke",
        "objective": "**Breath of the Wild**: **Sprenge mit freigeschalteten Fernbomben einen nahen Erzbrocken und sammle die Funde**. Bleib fern von Abgründen, in die das Erz fallen könnte.",
        "gameObjective": "**Breath of the Wild**: **Sprenge mit freigeschalteten Fernbomben einen nahen Erzbrocken und sammle die Funde**. Bleib fern von Abgründen, in die das Erz fallen könnte."
      }
    },
    "experience": {
      "family": "ore-mining",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [], "platformIds": ["switch", "wii-u"] },
      "finish": "outcome",
      "activities": ["abilities", "collectibles"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Remote Bombs unlocked; nearby ore",
          "de": "Fernbomben freigeschaltet; Erz in der Nähe",
          "chips": {"en": ["Remote Bombs", "Ore"], "de": ["Fernbomben", "Erz"]},
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
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "zelda-botw-shock-disarm",
    "moodIds": ["challenge", "focused"],
    "type": "challenge",
    "tags": ["three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "zelda",
      "installmentIds": ["botw"]
    },
    "translations": {
      "en": {
        "name": "Drop the Weapon",
        "objective": "In **Breath of the Wild**, with Shock Arrows ready, find an ordinary Bokoblin holding a weapon. **Shock it and pick up the dropped weapon before it does**, or stop after three encounters.",
        "gameObjective": "In **Breath of the Wild**, with Shock Arrows ready, find an ordinary Bokoblin holding a weapon. **Shock it and pick up the dropped weapon before it does**, or stop after three encounters."
      },
      "de": {
        "name": "Lass die Waffe fallen",
        "objective": "**Breath of the Wild**: Such dir mit vorhandenen Elektropfeilen einen gewöhnlichen Bokblin mit Waffe. **Triff ihn elektrisch und heb seine fallengelassene Waffe vor ihm auf**, oder hör nach drei Begegnungen auf.",
        "gameObjective": "**Breath of the Wild**: Such dir mit vorhandenen Elektropfeilen einen gewöhnlichen Bokblin mit Waffe. **Triff ihn elektrisch und heb seine fallengelassene Waffe vor ihm auf**, oder hör nach drei Begegnungen auf."
      }
    },
    "experience": {
      "family": "shock-disarm",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [], "platformIds": ["switch", "wii-u"] },
      "finish": "attempt",
      "activities": [],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Bow and Shock Arrows",
          "de": "Bogen und Elektropfeile",
          "chips": {"en": ["Bow", "Shock Arrows"], "de": ["Bogen", "Elektropfeile"]},
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
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "zelda-botw-grass-updraft",
    "moodIds": ["curious", "explore"],
    "type": "experiment",
    "tags": ["traversal"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "zelda",
      "installmentIds": ["botw"]
    },
    "translations": {
      "en": {
        "name": "Lift from the Grass",
        "objective": "In **Breath of the Wild**, with a fire weapon or Fire Arrow and the paraglider ready, find a dry grassy patch below a nearby ledge. **Light the grass and ride its updraft onto the ledge**.",
        "gameObjective": "In **Breath of the Wild**, with a fire weapon or Fire Arrow and the paraglider ready, find a dry grassy patch below a nearby ledge. **Light the grass and ride its updraft onto the ledge**."
      },
      "de": {
        "name": "Auftrieb aus dem Gras",
        "objective": "**Breath of the Wild**: Such dir mit Feuerwaffe oder Feuerpfeil und vorhandenem Parasegel trockenes Gras unter einem nahen Vorsprung. **Zünde es an und nutze den Aufwind bis zum Vorsprung**.",
        "gameObjective": "**Breath of the Wild**: Such dir mit Feuerwaffe oder Feuerpfeil und vorhandenem Parasegel trockenes Gras unter einem nahen Vorsprung. **Zünde es an und nutze den Aufwind bis zum Vorsprung**."
      }
    },
    "experience": {
      "family": "grass-updraft",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [], "platformIds": ["switch", "wii-u"] },
      "finish": "attempt",
      "activities": ["traversal"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Paraglider; fire weapon or Fire Arrows",
          "de": "Parasegel; Feuerwaffe oder Feuerpfeile",
          "chips": {"en": ["Paraglider", "Fire Arrows"], "de": ["Parasegel", "Feuerpfeile"]},
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
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "zelda-botw-stasis-plus-opening",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["abilities"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "zelda",
      "installmentIds": ["botw"]
    },
    "translations": {
      "en": {
        "name": "Freeze the Opening",
        "objective": "With Stasis+ unlocked in **Breath of the Wild**, **freeze an ordinary Bokoblin, move to its side and land a hit when it releases**.",
        "gameObjective": "With Stasis+ unlocked in **Breath of the Wild**, **freeze an ordinary Bokoblin, move to its side and land a hit when it releases**."
      },
      "de": {
        "name": "Die Lücke einfrieren",
        "objective": "**Halte in Breath of the Wild mit Stasis+ einen gewöhnlichen Bokblin an, geh an seine Seite und triff ihn nach dem Lösen der Starre**.",
        "gameObjective": "**Halte in Breath of the Wild mit Stasis+ einen gewöhnlichen Bokblin an, geh an seine Seite und triff ihn nach dem Lösen der Starre**."
      }
    },
    "experience": {
      "family": "stasis-combat",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [], "platformIds": ["switch", "wii-u"] },
      "finish": "attempt",
      "activities": ["abilities"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Stasis+ unlocked",
          "de": "Stasis+ freigeschaltet",
          "chips": {"en": ["Stasis+"], "de": ["Stasis+"]},
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
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "zelda-botw-guardian-beam-parry",
    "moodIds": ["challenge", "focused"],
    "type": "challenge",
    "tags": ["parry", "three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "zelda",
      "installmentIds": ["botw"]
    },
    "translations": {
      "en": {
        "name": "Send the Beam Back",
        "objective": "In **Breath of the Wild**, with spare shields ready, face a stationary Guardian that can fire its beam. **Reflect one beam into it with a perfect guard**, or stop after three beams.",
        "gameObjective": "In **Breath of the Wild**, with spare shields ready, face a stationary Guardian that can fire its beam. **Reflect one beam into it with a perfect guard**, or stop after three beams."
      },
      "de": {
        "name": "Den Strahl zurückschicken",
        "objective": "**Breath of the Wild**: Stell dich mit übrigen Schilden einem stationären Wächter, der seinen Strahl abfeuern kann. **Schick einen Strahl mit einem perfekten Block zurück**, oder hör nach drei Strahlen auf.",
        "gameObjective": "**Breath of the Wild**: Stell dich mit übrigen Schilden einem stationären Wächter, der seinen Strahl abfeuern kann. **Schick einen Strahl mit einem perfekten Block zurück**, oder hör nach drei Strahlen auf."
      }
    },
    "experience": {
      "family": "beam-parry",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [], "platformIds": ["switch", "wii-u"] },
      "finish": "attempt",
      "activities": ["parry"],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Spare shields; stationary Guardian",
          "de": "Übrige Schilde; stationärer Wächter",
          "chips": {"en": ["Shields", "Stationary Guardian"], "de": ["Schilde", "Stationärer Wächter"]},
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
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "zelda-botw-bokoblin-flurry",
    "moodIds": ["challenge", "focused"],
    "type": "challenge",
    "tags": ["three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "zelda",
      "installmentIds": ["botw"]
    },
    "translations": {
      "en": {
        "name": "Dodge into the Rush",
        "objective": "In **Breath of the Wild**, face an ordinary Bokoblin with a melee weapon ready. **Trigger a Flurry Rush from a timed dodge and land its hits**, or stop after three fights.",
        "gameObjective": "In **Breath of the Wild**, face an ordinary Bokoblin with a melee weapon ready. **Trigger a Flurry Rush from a timed dodge and land its hits**, or stop after three fights."
      },
      "de": {
        "name": "Ausweichen und kontern",
        "objective": "**Breath of the Wild**: Stell dich mit einer Nahkampfwaffe einem gewöhnlichen Bokblin. **Löse durch richtig getimtes Ausweichen einen Zeitlupenkonter aus und triff damit**, oder hör nach drei Kämpfen auf.",
        "gameObjective": "**Breath of the Wild**: Stell dich mit einer Nahkampfwaffe einem gewöhnlichen Bokblin. **Löse durch richtig getimtes Ausweichen einen Zeitlupenkonter aus und triff damit**, oder hör nach drei Kämpfen auf."
      }
    },
    "experience": {
      "family": "flurry-rush",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [], "platformIds": ["switch", "wii-u"] },
      "finish": "attempt",
      "activities": [],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Melee weapon; ordinary Bokoblin",
          "de": "Nahkampfwaffe; gewöhnlicher Bokblin",
          "chips": {"en": ["Melee weapon", "Bokoblin"], "de": ["Nahkampfwaffe", "Bokblin"]},
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
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "zelda-botw-spotted-horse-registration",
    "moodIds": ["progress", "relax"],
    "type": "objective",
    "tags": ["animals"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "zelda",
      "installmentIds": ["botw"]
    },
    "translations": {
      "en": {
        "name": "Name Your Horse",
        "objective": "In **Breath of the Wild**, near a stable with a free horse slot and the registration fee ready, tame a spotted wild horse. **Ride it to the stable, name it and register it**.",
        "gameObjective": "In **Breath of the Wild**, near a stable with a free horse slot and the registration fee ready, tame a spotted wild horse. **Ride it to the stable, name it and register it**."
      },
      "de": {
        "name": "Ein Name am Stall",
        "objective": "**Breath of the Wild**: Zähme nahe einem Stall mit freiem Pferdeplatz und vorhandener Anmeldegebühr ein geschecktes Wildpferd. **Reite zum Stall, gib ihm einen Namen und registriere es**.",
        "gameObjective": "**Breath of the Wild**: Zähme nahe einem Stall mit freiem Pferdeplatz und vorhandener Anmeldegebühr ein geschecktes Wildpferd. **Reite zum Stall, gib ihm einen Namen und registriere es**."
      }
    },
    "experience": {
      "family": "horse-registration",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [], "platformIds": ["switch", "wii-u"] },
      "finish": "outcome",
      "activities": ["animals"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Stable slot and registration fee",
          "de": "Stallplatz und Anmeldegebühr",
          "chips": {"en": ["Stable slot"], "de": ["Stallplatz"]},
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
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "zelda-botw-stable-dog-test",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["animals"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "zelda",
      "installmentIds": ["botw"]
    },
    "translations": {
      "en": {
        "name": "Follow the Stable Dog",
        "objective": "In **Breath of the Wild**, feed a stable dog three pieces of meat, one at a time. **Follow if it leads you away and open the chest it shows you**. If it stays after the three feedings, the experiment is also finished.",
        "gameObjective": "In **Breath of the Wild**, feed a stable dog three pieces of meat, one at a time. **Follow if it leads you away and open the chest it shows you**. If it stays after the three feedings, the experiment is also finished."
      },
      "de": {
        "name": "Dem Stallhund folgen",
        "objective": "Füttere in **Breath of the Wild** einen Stallhund mit drei vorhandenen Fleischstücken, einzeln nacheinander. **Folge ihm, wenn er dich wegführt, und öffne die Truhe, die er dir zeigt**. Bleibt er nach den drei Fütterungen da, ist das Experiment auch beendet.",
        "gameObjective": "Füttere in **Breath of the Wild** einen Stallhund mit drei vorhandenen Fleischstücken, einzeln nacheinander. **Folge ihm, wenn er dich wegführt, und öffne die Truhe, die er dir zeigt**. Bleibt er nach den drei Fütterungen da, ist das Experiment auch beendet."
      }
    },
    "experience": {
      "family": "dog-feeding",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [], "platformIds": ["switch", "wii-u"] },
      "finish": "attempt",
      "activities": ["animals"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Three portions of meat",
          "de": "Drei Fleischportionen",
          "chips": {"en": ["Meat"], "de": ["Fleisch"]},
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
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "zelda-botw-elixir-for-the-road",
    "moodIds": ["progress", "curious"],
    "type": "objective",
    "tags": ["cooking"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "zelda",
      "installmentIds": ["botw"]
    },
    "translations": {
      "en": {
        "name": "A Roadside Elixir",
        "objective": "In **Breath of the Wild**, at a lit cooking pot with a critter and monster part already owned, read the critter’s effect. **Cook an elixir from those ingredients and use it where that effect helps**. Do not mix in ordinary food.",
        "gameObjective": "In **Breath of the Wild**, at a lit cooking pot with a critter and monster part already owned, read the critter’s effect. **Cook an elixir from those ingredients and use it where that effect helps**. Do not mix in ordinary food."
      },
      "de": {
        "name": "Eine Flasche für unterwegs",
        "objective": "**Breath of the Wild**: Lies an einem brennenden Kochtopf die Wirkung eines vorhandenen Insekts oder einer Echse. **Koche daraus mit einem Monsterteil ein Elixier und nutze es dort, wo seine Wirkung hilft**. Misch keine gewöhnlichen Lebensmittel hinein.",
        "gameObjective": "**Breath of the Wild**: Lies an einem brennenden Kochtopf die Wirkung eines vorhandenen Insekts oder einer Echse. **Koche daraus mit einem Monsterteil ein Elixier und nutze es dort, wo seine Wirkung hilft**. Misch keine gewöhnlichen Lebensmittel hinein."
      }
    },
    "experience": {
      "family": "elixir",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [], "platformIds": ["switch", "wii-u"] },
      "finish": "outcome",
      "activities": ["cooking"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Critter, monster part and lit cooking pot",
          "de": "Insekt oder Echse, Monsterteil und brennender Topf",
          "chips": {"en": ["Critter", "Monster part"], "de": ["Insekt oder Echse", "Monsterteil"]},
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
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "zelda-botw-fairy-armor-step",
    "moodIds": ["progress", "overwhelmed"],
    "type": "objective",
    "tags": ["outfit"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "zelda",
      "installmentIds": ["botw"]
    },
    "translations": {
      "en": {
        "name": "One Armor Upgrade",
        "objective": "In **Breath of the Wild**, with a Great Fairy Fountain already open, choose an armor piece whose upgrade materials you own. **Have the fairy upgrade it and equip it**.",
        "gameObjective": "In **Breath of the Wild**, with a Great Fairy Fountain already open, choose an armor piece whose upgrade materials you own. **Have the fairy upgrade it and equip it**."
      },
      "de": {
        "name": "Eine Rüstung verbessern",
        "objective": "**Breath of the Wild**: Wähle an einer schon geöffneten Quelle der Großen Fee ein Rüstungsteil, dessen Aufwertungsmaterial du besitzt. **Lass es verbessern und leg es an**.",
        "gameObjective": "**Breath of the Wild**: Wähle an einer schon geöffneten Quelle der Großen Fee ein Rüstungsteil, dessen Aufwertungsmaterial du besitzt. **Lass es verbessern und leg es an**."
      }
    },
    "experience": {
      "family": "armor-upgrade",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [], "platformIds": ["switch", "wii-u"] },
      "finish": "outcome",
      "activities": ["outfit"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Great Fairy open; upgrade materials",
          "de": "Große Fee zugänglich; Aufwertungsmaterial",
          "chips": {"en": ["Great Fairy"], "de": ["Große Fee"]},
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
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "zelda-botw-kilton-first-exchange",
    "moodIds": ["curious", "progress"],
    "type": "objective",
    "tags": ["trading"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "zelda",
      "installmentIds": ["botw"]
    },
    "translations": {
      "en": {
        "name": "Parts Become Mon",
        "objective": "In **Breath of the Wild**, with Kilton’s shop unlocked and already nearby after dark, **exchange spare monster parts for Mon and buy one affordable item**. Check the stock before trading.",
        "gameObjective": "In **Breath of the Wild**, with Kilton’s shop unlocked and already nearby after dark, **exchange spare monster parts for Mon and buy one affordable item**. Check the stock before trading."
      },
      "de": {
        "name": "Monsterteile werden Mon",
        "objective": "**Breath of the Wild**: **Tausch nach Einbruch der Dunkelheit bei Kiltons freigeschaltetem und nahe gelegenem Laden übrige Monsterteile gegen Mon und kauf einen bezahlbaren Gegenstand**. Schau dir vorher das Angebot an.",
        "gameObjective": "**Breath of the Wild**: **Tausch nach Einbruch der Dunkelheit bei Kiltons freigeschaltetem und nahe gelegenem Laden übrige Monsterteile gegen Mon und kauf einen bezahlbaren Gegenstand**. Schau dir vorher das Angebot an."
      }
    },
    "experience": {
      "family": "monster-trade",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [], "platformIds": ["switch", "wii-u"] },
      "finish": "outcome",
      "activities": ["trading"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Kilton unlocked and nearby at night; spare monster parts",
          "de": "Kilton freigeschaltet und nachts in der Nähe; Monsterteile",
          "chips": {"en": ["Kilton", "Monster parts"], "de": ["Kilton", "Monsterteile"]},
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
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "zelda-botw-sword-trial-start",
    "moodIds": ["challenge", "focused"],
    "type": "challenge",
    "tags": ["three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "universal": false,
    "curated": {
      "gameId": "zelda",
      "installmentIds": ["botw"]
    },
    "translations": {
      "en": {
        "name": "Three Trial Rooms",
        "objective": "In **Breath of the Wild**, with **The Master Trials DLC**, the Master Sword and Trial of the Sword unlocked, **clear the first three rooms of the Beginning Trials**, or stop after three runs.",
        "gameObjective": "In **Breath of the Wild**, with **The Master Trials DLC**, the Master Sword and Trial of the Sword unlocked, **clear the first three rooms of the Beginning Trials**, or stop after three runs."
      },
      "de": {
        "name": "Drei Prüfungsräume",
        "objective": "**Breath of the Wild**: **Schaffe mit Die legendären Prüfungen DLC, vorhandenem Master-Schwert und freigeschalteter Schwertprüfung die ersten drei Räume der Anfangsprüfung**, oder hör nach drei Durchgängen auf.",
        "gameObjective": "**Breath of the Wild**: **Schaffe mit Die legendären Prüfungen DLC, vorhandenem Master-Schwert und freigeschalteter Schwertprüfung die ersten drei Räume der Anfangsprüfung**, oder hör nach drei Durchgängen auf."
      }
    },
    "experience": {
      "family": "sword-trial",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [], "platformIds": ["switch", "wii-u"] },
      "finish": "attempt",
      "activities": [],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Master Trials DLC; Master Sword; Trial unlocked",
          "de": "Legendäre Prüfungen DLC; Master-Schwert; Prüfung freigeschaltet",
          "chips": {"en": ["Master Trials DLC", "Master Sword"], "de": ["Legendäre Prüfungen DLC", "Master-Schwert"]},
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
    "gameGenreIds": ["adventure", "sandbox"],
    "rarity": "special"
  },
  {
    "id": "zelda-botw-horseback-targets",
    "moodIds": ["challenge", "restless"],
    "type": "challenge",
    "tags": ["three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "zelda",
      "installmentIds": ["botw"]
    },
    "translations": {
      "en": {
        "name": "Targets from the Saddle",
        "objective": "In **Breath of the Wild**, with a registered horse, bow, arrows and entry fees ready, enter the mounted-archery game south of Highland Stable. **Hit ten balloons in one run**, or stop after three runs.",
        "gameObjective": "In **Breath of the Wild**, with a registered horse, bow, arrows and entry fees ready, enter the mounted-archery game south of Highland Stable. **Hit ten balloons in one run**, or stop after three runs."
      },
      "de": {
        "name": "Ziele vom Sattel",
        "objective": "**Breath of the Wild**: Starte mit registriertem Pferd, Bogen, Pfeilen und Startgeld das Reitbogenschießen südlich des Stalls der Hochebene. **Triff zehn Ballons in einem Durchgang**, oder hör nach drei Durchgängen auf.",
        "gameObjective": "**Breath of the Wild**: Starte mit registriertem Pferd, Bogen, Pfeilen und Startgeld das Reitbogenschießen südlich des Stalls der Hochebene. **Triff zehn Ballons in einem Durchgang**, oder hör nach drei Durchgängen auf."
      }
    },
    "experience": {
      "family": "mounted-archery",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [], "platformIds": ["switch", "wii-u"] },
      "finish": "attempt",
      "activities": [],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Registered horse, bow, arrows and entry fee",
          "de": "Registriertes Pferd, Bogen, Pfeile und Startgeld",
          "chips": {"en": ["Horse", "Bow"], "de": ["Pferd", "Bogen"]},
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
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "zelda-botw-labyrinth-first-turns",
    "moodIds": ["explore", "focused"],
    "type": "inspiration",
    "tags": ["puzzles", "exploration"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "zelda",
      "installmentIds": ["botw"]
    },
    "translations": {
      "en": {
        "name": "Inside the Maze",
        "objective": "In Breath of the Wild, with a labyrinth entrance already reached, **explore its corridors using the walls and dead ends as clues**. Follow the route you want to test. The shrine can wait until another session.",
        "gameObjective": "In Breath of the Wild, with a labyrinth entrance already reached, **explore its corridors using the walls and dead ends as clues**. Follow the route you want to test. The shrine can wait until another session."
      },
      "de": {
        "name": "Im Labyrinth",
        "objective": "Breath of the Wild: Erkunde von einem bereits erreichten Labyrintheingang aus die Gänge. **Nutze Mauern und Sackgassen als Hinweise** und probiere die Wege aus, die dich interessieren. Der Schrein kann bis später warten.",
        "gameObjective": "Breath of the Wild: Erkunde von einem bereits erreichten Labyrintheingang aus die Gänge. **Nutze Mauern und Sackgassen als Hinweise** und probiere die Wege aus, die dich interessieren. Der Schrein kann bis später warten."
      }
    },
    "experience": {
      "family": "labyrinth-roaming",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [], "platformIds": ["switch", "wii-u"] },
      "finish": "open",
      "activities": ["puzzles", "exploration"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Labyrinth entrance already reached",
          "de": "Labyrintheingang schon erreicht",
          "chips": {"en": ["Labyrinth entrance"], "de": ["Labyrintheingang"]},
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
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "zelda-botw-hinox-necklace-theft",
    "moodIds": ["challenge", "focused"],
    "type": "challenge",
    "tags": ["stealth", "three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "zelda",
      "installmentIds": ["botw"]
    },
    "translations": {
      "en": {
        "name": "Borrow from a Giant",
        "objective": "In **Breath of the Wild**, with stealth gear or a stealth elixir ready, approach a sleeping Hinox carrying weapons. **Take one weapon from its necklace and leave without waking it**, or stop after three approaches.",
        "gameObjective": "In **Breath of the Wild**, with stealth gear or a stealth elixir ready, approach a sleeping Hinox carrying weapons. **Take one weapon from its necklace and leave without waking it**, or stop after three approaches."
      },
      "de": {
        "name": "Beim Riesen ausleihen",
        "objective": "**Breath of the Wild**: Schleich dich mit Schleichausrüstung oder Schleich-Elixier an einen schlafenden Hinox mit Waffen heran. **Nimm eine Waffe von seiner Halskette und geh, ohne ihn zu wecken**, oder hör nach drei Annäherungen auf.",
        "gameObjective": "**Breath of the Wild**: Schleich dich mit Schleichausrüstung oder Schleich-Elixier an einen schlafenden Hinox mit Waffen heran. **Nimm eine Waffe von seiner Halskette und geh, ohne ihn zu wecken**, oder hör nach drei Annäherungen auf."
      }
    },
    "experience": {
      "family": "sleeping-giant-theft",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [], "platformIds": ["switch", "wii-u"] },
      "finish": "attempt",
      "activities": ["stealth"],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Sleeping armed Hinox; stealth gear or elixir",
          "de": "Schlafender bewaffneter Hinox; Schleichausrüstung oder Elixier",
          "chips": {"en": ["Sleeping Hinox"], "de": ["Schlafender Hinox"]},
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
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "zelda-botw-lynel-back-attack",
    "moodIds": ["challenge", "focused"],
    "type": "challenge",
    "tags": ["three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "zelda",
      "installmentIds": ["botw"]
    },
    "translations": {
      "en": {
        "name": "Onto the Lynel",
        "objective": "In **Breath of the Wild**, with a bow and melee weapon ready at a known Lynel, **stun it with a headshot, mount it and land a mounted attack**, or stop after three fights. Pick a Lynel you have fought before.",
        "gameObjective": "In **Breath of the Wild**, with a bow and melee weapon ready at a known Lynel, **stun it with a headshot, mount it and land a mounted attack**, or stop after three fights. Pick a Lynel you have fought before."
      },
      "de": {
        "name": "Auf den Leunen",
        "objective": "**Breath of the Wild**: **Betäube einen bekannten Leunen mit einem Kopftreffer, spring auf seinen Rücken und lande einen berittenen Angriff**, oder hör nach drei Kämpfen auf. Halte Bogen und Nahkampfwaffe bereit und wähle einen Leunen, gegen den du schon gekämpft hast.",
        "gameObjective": "**Breath of the Wild**: **Betäube einen bekannten Leunen mit einem Kopftreffer, spring auf seinen Rücken und lande einen berittenen Angriff**, oder hör nach drei Kämpfen auf. Halte Bogen und Nahkampfwaffe bereit und wähle einen Leunen, gegen den du schon gekämpft hast."
      }
    },
    "experience": {
      "family": "mounted-combat",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [], "platformIds": ["switch", "wii-u"] },
      "finish": "attempt",
      "activities": [],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Known Lynel; bow and melee weapon",
          "de": "Bekannter Leune; Bogen und Nahkampfwaffe",
          "chips": {"en": ["Lynel", "Bow"], "de": ["Leune", "Bogen"]},
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
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "zelda-botw-tarrey-wood-delivery",
    "moodIds": ["progress", "focused"],
    "type": "objective",
    "tags": ["story", "building"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "zelda",
      "installmentIds": ["botw"]
    },
    "translations": {
      "en": {
        "name": "Wood for Tarrey Town",
        "objective": "In **Breath of the Wild**, with From the Ground Up active and Hudson currently asking for wood, **deliver the requested wood and hear his next request**. Start with the full amount already owned.",
        "gameObjective": "In **Breath of the Wild**, with From the Ground Up active and Hudson currently asking for wood, **deliver the requested wood and hear his next request**. Start with the full amount already owned."
      },
      "de": {
        "name": "Holz für Taburasa",
        "objective": "**Breath of the Wild**: **Liefere bei laufendem Aufbauspiel die von Dumsda gerade verlangte Holzmenge ab und hör dir seine nächste Bitte an**. Halte die ganze Menge schon bereit.",
        "gameObjective": "**Breath of the Wild**: **Liefere bei laufendem Aufbauspiel die von Dumsda gerade verlangte Holzmenge ab und hör dir seine nächste Bitte an**. Halte die ganze Menge schon bereit."
      }
    },
    "experience": {
      "family": "town-delivery",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [], "platformIds": ["switch", "wii-u"] },
      "finish": "outcome",
      "activities": ["story", "building"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Active From the Ground Up wood request; full wood amount",
          "de": "Aktive Holzbitte im Aufbauspiel; ganze Holzmenge",
          "chips": {"en": ["Tarrey Town request"], "de": ["Aufbauspiel-Auftrag"]},
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
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "zelda-botw-hateno-dyed-set",
    "moodIds": ["create", "relax"],
    "type": "creation",
    "tags": ["outfit"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "zelda",
      "installmentIds": ["botw"]
    },
    "translations": {
      "en": {
        "name": "A Color from Hateno",
        "objective": "In **Breath of the Wild**, at Hateno’s dye shop with dyeable clothing, the fee and five ingredients for a chosen color ready, **dye your outfit and wear it through the village**.",
        "gameObjective": "In **Breath of the Wild**, at Hateno’s dye shop with dyeable clothing, the fee and five ingredients for a chosen color ready, **dye your outfit and wear it through the village**."
      },
      "de": {
        "name": "Eine Farbe aus Hateno",
        "objective": "**Breath of the Wild**: **Färbe in Hatenos Färberei dein färbbares Outfit und trag es im Dorf**, wenn Gebühr und fünf Zutaten für die gewählte Farbe bereitliegen.",
        "gameObjective": "**Breath of the Wild**: **Färbe in Hatenos Färberei dein färbbares Outfit und trag es im Dorf**, wenn Gebühr und fünf Zutaten für die gewählte Farbe bereitliegen."
      }
    },
    "experience": {
      "family": "dyed-outfit",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [], "platformIds": ["switch", "wii-u"] },
      "finish": "outcome",
      "activities": ["outfit"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Dyeable outfit, fee and five color ingredients",
          "de": "Färbbares Outfit, Gebühr und fünf Farbzutaten",
          "chips": {"en": ["Dyeable outfit"], "de": ["Färbbares Outfit"]},
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
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "zelda-botw-hero-path-revisit",
    "moodIds": ["nostalgic", "relax"],
    "type": "inspiration",
    "tags": ["exploration", "replay"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "zelda",
      "installmentIds": ["botw"]
    },
    "translations": {
      "en": {
        "name": "Your Old Trail",
        "objective": "In **Breath of the Wild**, with **The Master Trials DLC** and Hero’s Path Mode available on an old save, trace a familiar stretch of your recorded journey. Return to that area and follow the route again, stopping wherever you remember an earlier adventure.",
        "gameObjective": "In **Breath of the Wild**, with **The Master Trials DLC** and Hero’s Path Mode available on an old save, trace a familiar stretch of your recorded journey. Return to that area and follow the route again, stopping wherever you remember an earlier adventure."
      },
      "de": {
        "name": "Deine alte Spur",
        "objective": "**Breath of the Wild**: Folge mit **Die legendären Prüfungen DLC** und verfügbarem Pfad des Helden in einem alten Spielstand einem vertrauten Teil deiner aufgezeichneten Reise. Besuch das Gebiet wieder und mach Halt, wo du dich an frühere Abenteuer erinnerst.",
        "gameObjective": "**Breath of the Wild**: Folge mit **Die legendären Prüfungen DLC** und verfügbarem Pfad des Helden in einem alten Spielstand einem vertrauten Teil deiner aufgezeichneten Reise. Besuch das Gebiet wieder und mach Halt, wo du dich an frühere Abenteuer erinnerst."
      }
    },
    "experience": {
      "family": "familiar-journey",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [], "platformIds": ["switch", "wii-u"] },
      "finish": "open",
      "activities": ["exploration"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Master Trials DLC; familiar Hero’s Path record",
          "de": "Legendäre Prüfungen DLC; vertraute Pfad-des-Helden-Aufzeichnung",
          "chips": {"en": ["Master Trials DLC", "Hero’s Path record"], "de": ["Legendäre Prüfungen DLC", "Pfad des Helden"]},
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
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "zelda-totk-autobuild-favorite",
    "moodIds": ["create", "focused"],
    "type": "creation",
    "tags": ["building", "abilities"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "zelda",
      "installmentIds": ["totk"]
    },
    "translations": {
      "en": {
        "name": "Build It Again",
        "objective": "In **Tears of the Kingdom**, with Autobuild unlocked and enough loose parts ready, assemble a small wheeled vehicle and save it as a favorite. Detach its parts, then **rebuild the favorite from those parts and drive it**.",
        "gameObjective": "In **Tears of the Kingdom**, with Autobuild unlocked and enough loose parts ready, assemble a small wheeled vehicle and save it as a favorite. Detach its parts, then **rebuild the favorite from those parts and drive it**."
      },
      "de": {
        "name": "Noch einmal bauen",
        "objective": "**Tears of the Kingdom**: Baue mit freigeschalteter Bautomatik und genügend losen Teilen ein kleines Radfahrzeug und speichere es als Favorit. Trenne die Teile wieder und **bau den Favoriten aus diesen Teilen neu, um damit zu fahren**.",
        "gameObjective": "**Tears of the Kingdom**: Baue mit freigeschalteter Bautomatik und genügend losen Teilen ein kleines Radfahrzeug und speichere es als Favorit. Trenne die Teile wieder und **bau den Favoriten aus diesen Teilen neu, um damit zu fahren**."
      }
    },
    "experience": {
      "family": "autobuild",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [], "platformIds": ["switch"] },
      "finish": "outcome",
      "activities": ["building", "abilities"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Autobuild, Ultrahand and loose vehicle parts",
          "de": "Bautomatik, Ultra-Hand und lose Fahrzeugteile",
          "chips": {"en": ["Autobuild", "Vehicle parts"], "de": ["Bautomatik", "Fahrzeugteile"]},
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
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "zelda-totk-hoverstone-step",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["abilities", "traversal"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "zelda",
      "installmentIds": ["totk"]
    },
    "translations": {
      "en": {
        "name": "A Ceiling You Carry",
        "objective": "In **Tears of the Kingdom**, with Ultrahand, Ascend and a Hover Stone ready, position the activated stone above Link within Ascend range. **Ascend through it and reach a nearby higher ledge** before its battery runs out.",
        "gameObjective": "In **Tears of the Kingdom**, with Ultrahand, Ascend and a Hover Stone ready, position the activated stone above Link within Ascend range. **Ascend through it and reach a nearby higher ledge** before its battery runs out."
      },
      "de": {
        "name": "Eine Decke zum Mitnehmen",
        "objective": "**Tears of the Kingdom**: Platziere mit Ultra-Hand einen aktivierten Schwebestein über Link in Deckensprung-Reichweite. **Spring durch ihn und erreiche einen nahen höheren Vorsprung**, bevor die Batterie leer ist. Halte Schwebestein und beide Fähigkeiten bereit.",
        "gameObjective": "**Tears of the Kingdom**: Platziere mit Ultra-Hand einen aktivierten Schwebestein über Link in Deckensprung-Reichweite. **Spring durch ihn und erreiche einen nahen höheren Vorsprung**, bevor die Batterie leer ist. Halte Schwebestein und beide Fähigkeiten bereit."
      }
    },
    "experience": {
      "family": "hoverstone",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [], "platformIds": ["switch"] },
      "finish": "attempt",
      "activities": ["abilities", "traversal"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Ultrahand, Ascend and Hover Stone",
          "de": "Ultra-Hand, Deckensprung und Schwebestein",
          "chips": {"en": ["Ascend", "Hover Stone"], "de": ["Deckensprung", "Schwebestein"]},
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
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "zelda-totk-rocket-shield-hop",
    "moodIds": ["curious", "explore"],
    "type": "experiment",
    "tags": ["crafting", "traversal"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "zelda",
      "installmentIds": ["totk"]
    },
    "translations": {
      "en": {
        "name": "A Shield with Lift",
        "objective": "In **Tears of the Kingdom**, with Fuse, a spare shield, Rocket and paraglider ready, **fuse the Rocket to the shield, launch by holding the shield up and land on a nearby roof**. Choose a safe roof before launching.",
        "gameObjective": "In **Tears of the Kingdom**, with Fuse, a spare shield, Rocket and paraglider ready, **fuse the Rocket to the shield, launch by holding the shield up and land on a nearby roof**. Choose a safe roof before launching."
      },
      "de": {
        "name": "Ein Schild mit Auftrieb",
        "objective": "**Tears of the Kingdom**: **Verbinde mit freigeschalteter Synthese eine Rakete mit einem übrigen Schild, starte beim Hochhalten und lande mit dem Parasegel auf einem nahen Dach**. Halte die Teile bereit und wähle vor dem Start ein sicheres Dach.",
        "gameObjective": "**Tears of the Kingdom**: **Verbinde mit freigeschalteter Synthese eine Rakete mit einem übrigen Schild, starte beim Hochhalten und lande mit dem Parasegel auf einem nahen Dach**. Halte die Teile bereit und wähle vor dem Start ein sicheres Dach."
      }
    },
    "experience": {
      "family": "rocket-shield",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [], "platformIds": ["switch"] },
      "finish": "attempt",
      "activities": ["crafting", "traversal"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Fuse, Rocket, spare shield and paraglider",
          "de": "Synthese, Rakete, übriges Schild und Parasegel",
          "chips": {"en": ["Rocket", "Spare shield"], "de": ["Rakete", "Übriges Schild"]},
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
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "zelda-totk-puffshroom-sneakstrike",
    "moodIds": ["challenge", "focused"],
    "type": "challenge",
    "tags": ["stealth", "three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "zelda",
      "installmentIds": ["totk"]
    },
    "translations": {
      "en": {
        "name": "Smoke, Then Sneak",
        "objective": "In **Tears of the Kingdom**, with Puffshrooms ready at an ordinary Bokoblin camp, **hide it in mushroom smoke and land one Sneakstrike**. Stop after three Puffshrooms if it does not work.",
        "gameObjective": "In **Tears of the Kingdom**, with Puffshrooms ready at an ordinary Bokoblin camp, **hide it in mushroom smoke and land one Sneakstrike**. Stop after three Puffshrooms if it does not work."
      },
      "de": {
        "name": "Rauch, dann anschleichen",
        "objective": "**Tears of the Kingdom**: **Verhülle mit vorhandenen Qualmpilzen einen gewöhnlichen Bokblin im Lager in Rauch und lande einen Schleichangriff**. Nach drei Qualmpilzen ist Schluss, falls es nicht klappt.",
        "gameObjective": "**Tears of the Kingdom**: **Verhülle mit vorhandenen Qualmpilzen einen gewöhnlichen Bokblin im Lager in Rauch und lande einen Schleichangriff**. Nach drei Qualmpilzen ist Schluss, falls es nicht klappt."
      }
    },
    "experience": {
      "family": "smoke-stealth",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [], "platformIds": ["switch"] },
      "finish": "attempt",
      "activities": ["stealth"],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Puffshrooms; ordinary monster camp",
          "de": "Qualmpilze; gewöhnliches Monsterlager",
          "chips": {"en": ["Puffshrooms", "Monster camp"], "de": ["Qualmpilze", "Monsterlager"]},
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
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "zelda-totk-muddlebud-camp",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["gadgets"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "zelda",
      "installmentIds": ["totk"]
    },
    "translations": {
      "en": {
        "name": "Let the Camp Argue",
        "objective": "In **Tears of the Kingdom**, with a Muddle Bud and bow ready at a camp with several ordinary monsters, **shoot one monster with the fused bud and watch whom it attacks**. Stay outside the fight. A kill is not required.",
        "gameObjective": "In **Tears of the Kingdom**, with a Muddle Bud and bow ready at a camp with several ordinary monsters, **shoot one monster with the fused bud and watch whom it attacks**. Stay outside the fight. A kill is not required."
      },
      "de": {
        "name": "Das Lager streiten lassen",
        "objective": "**Tears of the Kingdom**: **Schieß mit einem vorhandenen Irrknospen-Pfeil auf ein Monster in einem Lager mit mehreren gewöhnlichen Gegnern und beobachte, wen es angreift**. Bleib außerhalb des Kampfes. Töten muss es niemanden. Halte einen Bogen bereit.",
        "gameObjective": "**Tears of the Kingdom**: **Schieß mit einem vorhandenen Irrknospen-Pfeil auf ein Monster in einem Lager mit mehreren gewöhnlichen Gegnern und beobachte, wen es angreift**. Bleib außerhalb des Kampfes. Töten muss es niemanden. Halte einen Bogen bereit."
      }
    },
    "experience": {
      "family": "confusion-test",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [], "platformIds": ["switch"] },
      "finish": "attempt",
      "activities": ["gadgets"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Bow, arrows and Muddle Bud",
          "de": "Bogen, Pfeile und Irrknospe",
          "chips": {"en": ["Bow", "Muddle Bud"], "de": ["Bogen", "Irrknospe"]},
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
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "zelda-totk-freeze-and-shatter",
    "moodIds": ["challenge", "focused"],
    "type": "challenge",
    "tags": ["crafting", "three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "zelda",
      "installmentIds": ["totk"]
    },
    "translations": {
      "en": {
        "name": "Ice, Then Impact",
        "objective": "In **Tears of the Kingdom**, with Ice Fruit, arrows and a blunt melee weapon ready, **freeze an ordinary Bokoblin with a fused arrow and shatter the ice with a melee hit**. Stop after three fights.",
        "gameObjective": "In **Tears of the Kingdom**, with Ice Fruit, arrows and a blunt melee weapon ready, **freeze an ordinary Bokoblin with a fused arrow and shatter the ice with a melee hit**. Stop after three fights."
      },
      "de": {
        "name": "Eis, dann Einschlag",
        "objective": "**Tears of the Kingdom**: **Friere mit einem Eisfrucht-Pfeil einen gewöhnlichen Bokblin ein und zerschlage das Eis mit einer stumpfen Nahkampfwaffe**. Halte Eisfrucht, Pfeile und Waffe bereit. Nach drei Kämpfen ist Schluss.",
        "gameObjective": "**Tears of the Kingdom**: **Friere mit einem Eisfrucht-Pfeil einen gewöhnlichen Bokblin ein und zerschlage das Eis mit einer stumpfen Nahkampfwaffe**. Halte Eisfrucht, Pfeile und Waffe bereit. Nach drei Kämpfen ist Schluss."
      }
    },
    "experience": {
      "family": "ice-combat",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [], "platformIds": ["switch"] },
      "finish": "attempt",
      "activities": ["crafting"],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Ice Fruit, arrows and blunt weapon",
          "de": "Eisfrucht, Pfeile und stumpfe Waffe",
          "chips": {"en": ["Ice Fruit", "Blunt weapon"], "de": ["Eisfrucht", "Stumpfe Waffe"]},
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
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "zelda-totk-sundelion-recovery",
    "moodIds": ["progress", "overwhelmed"],
    "type": "objective",
    "tags": ["cooking"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "zelda",
      "installmentIds": ["totk"]
    },
    "translations": {
      "en": {
        "name": "Hearts after the Gloom",
        "objective": "In **Tears of the Kingdom**, with gloom-damaged hearts, Sundelions and a lit pot ready, **cook a sunny dish and eat it to restore damaged hearts**. Regular missing health can wait.",
        "gameObjective": "In **Tears of the Kingdom**, with gloom-damaged hearts, Sundelions and a lit pot ready, **cook a sunny dish and eat it to restore damaged hearts**. Regular missing health can wait."
      },
      "de": {
        "name": "Herzen nach dem Miasma",
        "objective": "**Tears of the Kingdom**: **Koche mit vorhandenen Sonnenfleckchen an einem brennenden Topf ein Gericht gegen Miasma und iss es, um beschädigte Herzen wiederherzustellen**. Starte mit Miasma-Schaden. Gewöhnlich fehlende Gesundheit kann warten.",
        "gameObjective": "**Tears of the Kingdom**: **Koche mit vorhandenen Sonnenfleckchen an einem brennenden Topf ein Gericht gegen Miasma und iss es, um beschädigte Herzen wiederherzustellen**. Starte mit Miasma-Schaden. Gewöhnlich fehlende Gesundheit kann warten."
      }
    },
    "experience": {
      "family": "gloom-recovery",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [], "platformIds": ["switch"] },
      "finish": "outcome",
      "activities": ["cooking"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Gloom-damaged hearts; Sundelions and pot",
          "de": "Miasma-beschädigte Herzen; Sonnenfleckchen und Topf",
          "chips": {"en": ["Gloom damage", "Sundelions"], "de": ["Miasma-Schaden", "Sonnenfleckchen"]},
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
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "zelda-totk-sludge-clearing",
    "moodIds": ["progress", "curious"],
    "type": "objective",
    "tags": ["gadgets", "exploration"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "zelda",
      "installmentIds": ["totk"]
    },
    "translations": {
      "en": {
        "name": "Wash the Way Clear",
        "objective": "In **Tears of the Kingdom**, before the sludge in Lanayru has been cleared through the story, find a sludge-covered object near Zora’s Domain. With Splash Fruit ready, **clean that object and inspect what was hidden**.",
        "gameObjective": "In **Tears of the Kingdom**, before the sludge in Lanayru has been cleared through the story, find a sludge-covered object near Zora’s Domain. With Splash Fruit ready, **clean that object and inspect what was hidden**."
      },
      "de": {
        "name": "Den Weg freispülen",
        "objective": "**Tears of the Kingdom**: Such vor der vollständigen Schlamm-Beseitigung durch die Geschichte ein schlammverdecktes Objekt nahe dem Dorf der Zoras. **Reinige es mit vorhandenen Wasserfrüchten und prüfe, was darunter verborgen war**.",
        "gameObjective": "**Tears of the Kingdom**: Such vor der vollständigen Schlamm-Beseitigung durch die Geschichte ein schlammverdecktes Objekt nahe dem Dorf der Zoras. **Reinige es mit vorhandenen Wasserfrüchten und prüfe, was darunter verborgen war**."
      }
    },
    "experience": {
      "family": "sludge-cleanup",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [], "platformIds": ["switch"] },
      "finish": "outcome",
      "activities": ["gadgets", "exploration"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Lanayru still sludged; Splash Fruit",
          "de": "Schlamm noch in Lanayru; Wasserfrüchte",
          "chips": {"en": ["Sludged Lanayru", "Splash Fruit"], "de": ["Schlamm in Lanayru", "Wasserfrüchte"]},
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
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "zelda-totk-dazzle-stal-group",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["gadgets"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "zelda",
      "installmentIds": ["totk"]
    },
    "translations": {
      "en": {
        "name": "Light for the Stal",
        "objective": "In **Tears of the Kingdom**, with Dazzlefruit ready at night, find ordinary Stal enemies on the surface. **Throw one Dazzlefruit into their group and see which enemies it defeats**. Leave Stalnoxes out of this test.",
        "gameObjective": "In **Tears of the Kingdom**, with Dazzlefruit ready at night, find ordinary Stal enemies on the surface. **Throw one Dazzlefruit into their group and see which enemies it defeats**. Leave Stalnoxes out of this test."
      },
      "de": {
        "name": "Licht für die Knochen",
        "objective": "**Tears of the Kingdom**: Such nachts mit vorhandenen Leuchtfrüchten gewöhnliche Knochengegner an der Oberfläche. **Wirf eine Leuchtfrucht in die Gruppe und schau, welche Gegner sie besiegt**. Stalhinoxe bleiben außerhalb des Tests.",
        "gameObjective": "**Tears of the Kingdom**: Such nachts mit vorhandenen Leuchtfrüchten gewöhnliche Knochengegner an der Oberfläche. **Wirf eine Leuchtfrucht in die Gruppe und schau, welche Gegner sie besiegt**. Stalhinoxe bleiben außerhalb des Tests."
      }
    },
    "experience": {
      "family": "stal-light",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [], "platformIds": ["switch"] },
      "finish": "attempt",
      "activities": ["gadgets"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Night; Dazzlefruit; ordinary Stal enemies",
          "de": "Nacht; Leuchtfrüchte; gewöhnliche Knochengegner",
          "chips": {"en": ["Night", "Dazzlefruit"], "de": ["Nacht", "Leuchtfrüchte"]},
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
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "zelda-totk-frox-back-ore",
    "moodIds": ["challenge", "focused"],
    "type": "challenge",
    "tags": ["boss", "three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "zelda",
      "installmentIds": ["totk"]
    },
    "translations": {
      "en": {
        "name": "Ore on the Frox",
        "objective": "In **Tears of the Kingdom**, with the Depths accessible and a known Frox nearby, stun it with a bomb in its mouth or a shot to its eye. **Break one ore deposit on its back**, or stop after three approaches. Bring bombs, a bow and a hammer weapon.",
        "gameObjective": "In **Tears of the Kingdom**, with the Depths accessible and a known Frox nearby, stun it with a bomb in its mouth or a shot to its eye. **Break one ore deposit on its back**, or stop after three approaches. Bring bombs, a bow and a hammer weapon."
      },
      "de": {
        "name": "Erz auf dem Gigama",
        "objective": "**Tears of the Kingdom**: Betäube im zugänglichen Untergrund einen bekannten Gigama mit einer Bombe im Maul oder einem Augentreffer. **Zerschlage einen Erzbrocken auf seinem Rücken**, oder hör nach drei Annäherungen auf. Bring Bomben, Bogen und Hammerwaffe mit.",
        "gameObjective": "**Tears of the Kingdom**: Betäube im zugänglichen Untergrund einen bekannten Gigama mit einer Bombe im Maul oder einem Augentreffer. **Zerschlage einen Erzbrocken auf seinem Rücken**, oder hör nach drei Annäherungen auf. Bring Bomben, Bogen und Hammerwaffe mit."
      }
    },
    "experience": {
      "family": "frox-ore",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [], "platformIds": ["switch"] },
      "finish": "attempt",
      "activities": ["boss"],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Known Frox; bombs, bow and hammer weapon",
          "de": "Bekannter Gigama; Bomben, Bogen und Hammerwaffe",
          "chips": {"en": ["Frox", "Hammer weapon"], "de": ["Gigama", "Hammerwaffe"]},
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
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "zelda-totk-construct-core-pull",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["abilities", "boss"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "zelda",
      "installmentIds": ["totk"]
    },
    "translations": {
      "en": {
        "name": "Pull the Core",
        "objective": "With Ultrahand unlocked and a Flux Construct located, **pull its glowing core free, then attack while its body is apart**.",
        "gameObjective": "With Ultrahand unlocked and a Flux Construct located, **pull its glowing core free, then attack while its body is apart**."
      },
      "de": {
        "name": "Den Kern herausziehen",
        "objective": "Mit freigeschalteter Ultra-Hand und einem bereits gefundenen Blockgolem: **Zieh seinen leuchtenden Kern heraus und greif ihn an, während sein Körper zerlegt ist**.",
        "gameObjective": "Mit freigeschalteter Ultra-Hand und einem bereits gefundenen Blockgolem: **Zieh seinen leuchtenden Kern heraus und greif ihn an, während sein Körper zerlegt ist**."
      }
    },
    "experience": {
      "family": "construct-core",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [], "platformIds": ["switch"] },
      "finish": "attempt",
      "activities": ["abilities", "boss"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Ultrahand; located Flux Construct",
          "de": "Ultra-Hand; gefundener Blockgolem",
          "chips": {"en": ["Ultrahand", "Flux Construct"], "de": ["Ultra-Hand", "Blockgolem"]},
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
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "zelda-totk-tulin-gap-flight",
    "moodIds": ["explore", "curious"],
    "type": "objective",
    "tags": ["abilities", "traversal"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "zelda",
      "installmentIds": ["totk"]
    },
    "translations": {
      "en": {
        "name": "Wind over the Gap",
        "objective": "In **Tears of the Kingdom**, with Tulin’s sage ability and paraglider unlocked, choose a reachable lower ledge across a gap. **Use his gust while gliding and land on that ledge**. Start with a safe route back.",
        "gameObjective": "In **Tears of the Kingdom**, with Tulin’s sage ability and paraglider unlocked, choose a reachable lower ledge across a gap. **Use his gust while gliding and land on that ledge**. Start with a safe route back."
      },
      "de": {
        "name": "Wind über die Lücke",
        "objective": "**Tears of the Kingdom**: Wähle mit freigeschalteter Tulin-Fähigkeit und Parasegel einen erreichbaren tieferen Vorsprung hinter einer Lücke. **Nutze beim Gleiten seinen Windstoß und lande dort**. Halte einen sicheren Rückweg bereit.",
        "gameObjective": "**Tears of the Kingdom**: Wähle mit freigeschalteter Tulin-Fähigkeit und Parasegel einen erreichbaren tieferen Vorsprung hinter einer Lücke. **Nutze beim Gleiten seinen Windstoß und lande dort**. Halte einen sicheren Rückweg bereit."
      }
    },
    "experience": {
      "family": "wind-gliding",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [], "platformIds": ["switch"] },
      "finish": "outcome",
      "activities": ["abilities", "traversal"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Tulin’s ability and paraglider",
          "de": "Tulins Fähigkeit und Parasegel",
          "chips": {"en": ["Tulin's ability"], "de": ["Tulins Fähigkeit"]},
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
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "zelda-totk-yunobo-rock-cut",
    "moodIds": ["progress", "restless"],
    "type": "objective",
    "tags": ["abilities"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "zelda",
      "installmentIds": ["totk"]
    },
    "translations": {
      "en": {
        "name": "Through the Rubble",
        "objective": "In **Tears of the Kingdom**, with Yunobo’s sage ability unlocked and a breakable cave rock wall already found, **use his charge to open the passage and enter it**.",
        "gameObjective": "In **Tears of the Kingdom**, with Yunobo’s sage ability unlocked and a breakable cave rock wall already found, **use his charge to open the passage and enter it**."
      },
      "de": {
        "name": "Durch die Felsen",
        "objective": "**Tears of the Kingdom**: **Öffne mit Yunobos freigeschalteter Fähigkeit eine bereits gefundene zerbrechliche Felswand in einer Höhle und geh durch den Durchgang**.",
        "gameObjective": "**Tears of the Kingdom**: **Öffne mit Yunobos freigeschalteter Fähigkeit eine bereits gefundene zerbrechliche Felswand in einer Höhle und geh durch den Durchgang**."
      }
    },
    "experience": {
      "family": "rock-passage",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [], "platformIds": ["switch"] },
      "finish": "outcome",
      "activities": ["abilities"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Yunobo’s ability; breakable cave wall",
          "de": "Yunobos Fähigkeit; zerbrechliche Höhlenwand",
          "chips": {"en": ["Yunobo's ability"], "de": ["Yunobos Fähigkeit"]},
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
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "zelda-totk-minecart-short-line",
    "moodIds": ["create", "focused"],
    "type": "creation",
    "tags": ["building", "traversal"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "zelda",
      "installmentIds": ["totk"]
    },
    "translations": {
      "en": {
        "name": "A Minecart That Runs",
        "objective": "In **Tears of the Kingdom**, with Ultrahand, a minecart and Fan ready by a short intact rail line, **attach the Fan and ride the cart to the next platform**. Check that the line reaches a safe platform before boarding.",
        "gameObjective": "In **Tears of the Kingdom**, with Ultrahand, a minecart and Fan ready by a short intact rail line, **attach the Fan and ride the cart to the next platform**. Check that the line reaches a safe platform before boarding."
      },
      "de": {
        "name": "Eine Lore, die fährt",
        "objective": "**Tears of the Kingdom**: **Befestige mit Ultra-Hand einen vorhandenen Ventilator an einer Lore und fahr über eine kurze intakte Schienenstrecke zur nächsten Plattform**. Prüfe vorher, ob die Strecke sicher endet.",
        "gameObjective": "**Tears of the Kingdom**: **Befestige mit Ultra-Hand einen vorhandenen Ventilator an einer Lore und fahr über eine kurze intakte Schienenstrecke zur nächsten Plattform**. Prüfe vorher, ob die Strecke sicher endet."
      }
    },
    "experience": {
      "family": "minecart",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [], "platformIds": ["switch"] },
      "finish": "outcome",
      "activities": ["building", "traversal"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Ultrahand; minecart, Fan and intact rail line",
          "de": "Ultra-Hand; Lore, Ventilator und intakte Schienen",
          "chips": {"en": ["Ultrahand", "Minecart"], "de": ["Ultra-Hand", "Lore"]},
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
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "zelda-totk-portable-pot-meal",
    "moodIds": ["progress", "low-energy"],
    "type": "objective",
    "tags": ["cooking"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "zelda",
      "installmentIds": ["totk"]
    },
    "translations": {
      "en": {
        "name": "A Pot Wherever",
        "objective": "In **Tears of the Kingdom**, with a Portable Pot and meal ingredients already owned, stop on flat, dry ground away from a fixed cooking pot. **Deploy the device, cook one meal and eat it before moving on**.",
        "gameObjective": "In **Tears of the Kingdom**, with a Portable Pot and meal ingredients already owned, stop on flat, dry ground away from a fixed cooking pot. **Deploy the device, cook one meal and eat it before moving on**."
      },
      "de": {
        "name": "Ein Topf überall",
        "objective": "**Tears of the Kingdom**: Halte mit vorhandenem Reisekochtopf und Mahlzeitzutaten auf flachem, trockenem Boden fern einer festen Kochstelle an. **Stell das Gerät auf, koch eine Mahlzeit und iss sie vor dem Weitergehen**.",
        "gameObjective": "**Tears of the Kingdom**: Halte mit vorhandenem Reisekochtopf und Mahlzeitzutaten auf flachem, trockenem Boden fern einer festen Kochstelle an. **Stell das Gerät auf, koch eine Mahlzeit und iss sie vor dem Weitergehen**."
      }
    },
    "experience": {
      "family": "cooking",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [], "platformIds": ["switch"] },
      "finish": "outcome",
      "activities": ["cooking"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Portable Pot and meal ingredients",
          "de": "Reisekochtopf und Mahlzeitzutaten",
          "chips": {"en": ["Portable Pot", "Ingredients"], "de": ["Reisekochtopf", "Zutaten"]},
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
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "zelda-totk-malanya-horse-upgrade",
    "moodIds": ["progress", "focused"],
    "type": "objective",
    "tags": ["animals"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "zelda",
      "installmentIds": ["totk"]
    },
    "translations": {
      "en": {
        "name": "A Better Horse",
        "objective": "In **Tears of the Kingdom**, with Malanya’s fountain open and a registered horse eligible for an upgrade, read the meal requirement for one stat. With those meals ready, **deliver them and upgrade that stat**.",
        "gameObjective": "In **Tears of the Kingdom**, with Malanya’s fountain open and a registered horse eligible for an upgrade, read the meal requirement for one stat. With those meals ready, **deliver them and upgrade that stat**."
      },
      "de": {
        "name": "Ein besseres Pferd",
        "objective": "**Tears of the Kingdom**: Lies bei geöffnetem Malanya-Brunnen für ein verbesserbares registriertes Pferd die nötigen Gerichte für einen Wert. Wenn sie bereitliegen, **liefere sie ab und verbessere diesen Wert**.",
        "gameObjective": "**Tears of the Kingdom**: Lies bei geöffnetem Malanya-Brunnen für ein verbesserbares registriertes Pferd die nötigen Gerichte für einen Wert. Wenn sie bereitliegen, **liefere sie ab und verbessere diesen Wert**."
      }
    },
    "experience": {
      "family": "horse-upgrade",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [], "platformIds": ["switch"] },
      "finish": "outcome",
      "activities": ["animals"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Malanya open; eligible horse and requested meals",
          "de": "Malanya zugänglich; geeignetes Pferd und gewünschte Gerichte",
          "chips": {"en": ["Malanya"], "de": ["Malanya"]},
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
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "zelda-totk-koltin-next-trade",
    "moodIds": ["progress", "curious"],
    "type": "objective",
    "tags": ["trading", "collectibles"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "zelda",
      "installmentIds": ["totk"]
    },
    "translations": {
      "en": {
        "name": "Gems for Koltin",
        "objective": "In **Tears of the Kingdom**, with Koltin’s night shop already located and enough Bubbul Gems for his next offer, **make that trade and inspect the reward**.",
        "gameObjective": "In **Tears of the Kingdom**, with Koltin’s night shop already located and enough Bubbul Gems for his next offer, **make that trade and inspect the reward**."
      },
      "de": {
        "name": "Kristalle für Koltin",
        "objective": "**Tears of the Kingdom**: **Tausch in Koltins bereits gefundenem Nachtladen genügend vorhandene Mayoi-Signums für sein nächstes Angebot ein und sieh dir die Belohnung an**.",
        "gameObjective": "**Tears of the Kingdom**: **Tausch in Koltins bereits gefundenem Nachtladen genügend vorhandene Mayoi-Signums für sein nächstes Angebot ein und sieh dir die Belohnung an**."
      }
    },
    "experience": {
      "family": "monster-trade",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [], "platformIds": ["switch"] },
      "finish": "outcome",
      "activities": ["trading", "collectibles"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Koltin located at night; enough Bubbul Gems",
          "de": "Koltin nachts gefunden; genug Mayoi-Signums",
          "chips": {"en": ["Koltin", "Bubbul Gems"], "de": ["Koltin", "Mayoi-Signums"]},
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
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "zelda-totk-bubbulfrog-cave-room",
    "moodIds": ["explore", "progress"],
    "type": "objective",
    "tags": ["collectibles"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "zelda",
      "installmentIds": ["totk"]
    },
    "translations": {
      "en": {
        "name": "The Cave’s Last Guest",
        "objective": "In **Tears of the Kingdom**, at an already discovered cave missing its checkmark, explore its side rooms. **Find the Bubbulfrog and collect its Bubbul Gem**. Bring arrows and choose a small cave.",
        "gameObjective": "In **Tears of the Kingdom**, at an already discovered cave missing its checkmark, explore its side rooms. **Find the Bubbulfrog and collect its Bubbul Gem**. Bring arrows and choose a small cave."
      },
      "de": {
        "name": "Der letzte Höhlengast",
        "objective": "**Tears of the Kingdom**: Erkunde in einer bereits entdeckten kleinen Höhle ohne Häkchen die Nebenräume. **Finde den Mayoi und sammle sein Mayoi-Signum ein**. Bring Pfeile mit.",
        "gameObjective": "**Tears of the Kingdom**: Erkunde in einer bereits entdeckten kleinen Höhle ohne Häkchen die Nebenräume. **Finde den Mayoi und sammle sein Mayoi-Signum ein**. Bring Pfeile mit."
      }
    },
    "experience": {
      "family": "cave-collectible",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [], "platformIds": ["switch"] },
      "finish": "outcome",
      "activities": ["collectibles"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Small cave without checkmark; arrows",
          "de": "Kleine Höhle ohne Häkchen; Pfeile",
          "chips": {"en": ["Unchecked cave"], "de": ["Höhle ohne Häkchen"]},
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
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "zelda-totk-shrine-crystal-route",
    "moodIds": ["create", "focused"],
    "type": "creation",
    "tags": ["building", "puzzles"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "universal": false,
    "curated": {
      "gameId": "zelda",
      "installmentIds": ["totk"]
    },
    "translations": {
      "en": {
        "name": "The Crystal’s Carrier",
        "objective": "In **Tears of the Kingdom**, with a shrine-crystal quest already active and its crystal found, build a carrier from nearby parts. **Bring the crystal along its green beam to the shrine and place it at the entrance**. Choose a short ground route.",
        "gameObjective": "In **Tears of the Kingdom**, with a shrine-crystal quest already active and its crystal found, build a carrier from nearby parts. **Bring the crystal along its green beam to the shrine and place it at the entrance**. Choose a short ground route."
      },
      "de": {
        "name": "Transport für den Kristall",
        "objective": "**Tears of the Kingdom**: Baue bei einer laufenden Schreinkristall-Aufgabe und schon gefundenem Kristall aus nahen Teilen ein Transportmittel. **Bring den Kristall entlang seines grünen Strahls zum Schrein und setz ihn am Eingang ab**. Wähle eine kurze Bodenstrecke.",
        "gameObjective": "**Tears of the Kingdom**: Baue bei einer laufenden Schreinkristall-Aufgabe und schon gefundenem Kristall aus nahen Teilen ein Transportmittel. **Bring den Kristall entlang seines grünen Strahls zum Schrein und setz ihn am Eingang ab**. Wähle eine kurze Bodenstrecke."
      }
    },
    "experience": {
      "family": "crystal-carrier",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [], "platformIds": ["switch"] },
      "finish": "outcome",
      "activities": ["building", "puzzles"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Ultra-Hand; Kristall einer aktiven Schreinkristall-Aufgabe gefunden; Bauteile für kurze Bodenstrecke",
          "en": "Ultrahand; active shrine crystal found; building parts for a short ground route",
          "chips": {"en": ["Ultrahand", "Shrine crystal"], "de": ["Ultra-Hand", "Schreinkristall"]},
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
    "gameGenreIds": ["adventure", "sandbox"],
    "rarity": "special"
  },
  {
    "id": "zelda-totk-hateno-old-visit",
    "moodIds": ["nostalgic", "relax"],
    "type": "inspiration",
    "tags": ["story", "exploration"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "zelda",
      "installmentIds": ["totk"]
    },
    "translations": {
      "en": {
        "name": "Hateno after the Adventure",
        "objective": "In Tears of the Kingdom, if you remember Hateno from Breath of the Wild, walk through it again in your current save. **Look at the changed shops, houses and people**, and spend time at the places you recognize.",
        "gameObjective": "In Tears of the Kingdom, if you remember Hateno from Breath of the Wild, walk through it again in your current save. **Look at the changed shops, houses and people**, and spend time at the places you recognize."
      },
      "de": {
        "name": "Hateno nach dem Abenteuer",
        "objective": "Tears of the Kingdom: Wenn du Hateno aus Breath of the Wild kennst, geh im aktuellen Spielstand wieder durchs Dorf. **Schau dir die veränderten Läden, Häuser und Leute an** und bleib an Orten, die du wiedererkennst.",
        "gameObjective": "Tears of the Kingdom: Wenn du Hateno aus Breath of the Wild kennst, geh im aktuellen Spielstand wieder durchs Dorf. **Schau dir die veränderten Läden, Häuser und Leute an** und bleib an Orten, die du wiedererkennst."
      }
    },
    "experience": {
      "family": "familiar-village",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [], "platformIds": ["switch"] },
      "finish": "open",
      "activities": ["story", "exploration"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Hateno familiar from Breath of the Wild",
          "de": "Hateno aus Breath of the Wild vertraut",
          "chips": {"en": ["Hateno"], "de": ["Hateno"]},
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
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "zelda-botw-magnesis-crossing",
    "moodIds": ["curious"],
    "type": "experiment",
    "tags": ["abilities"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "zelda",
      "installmentIds": ["botw"]
    },
    "translations": {
      "en": {
        "name": "A Metal Bridge",
        "objective": "Find a stream or gap with a movable metal object and **cross by placing it with Magnesis**, without taking the marked path.",
        "gameObjective": "Find a stream or gap with a movable metal object and **cross by placing it with Magnesis**, without taking the marked path."
      },
      "de": {
        "name": "Eine Brücke aus Metall",
        "objective": "Such in **Breath of the Wild** mit freigeschaltetem Magnetmodul einen Bach oder Spalt mit einem beweglichen Metallteil. **Leg es als Brücke hin und überquere das Hindernis**.",
        "gameObjective": "Such in **Breath of the Wild** mit freigeschaltetem Magnetmodul einen Bach oder Spalt mit einem beweglichen Metallteil. **Leg es als Brücke hin und überquere das Hindernis**."
      }
    },
    "experience": {
      "family": "metal-crossing",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [], "platformIds": ["switch", "wii-u"] },
      "finish": "attempt",
      "activities": ["abilities"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Magnesis; movable metal object at gap",
          "de": "Magnetmodul; bewegliches Metallteil an einer Lücke",
          "chips": {"en": ["Magnesis", "Metal object"], "de": ["Magnetmodul", "Metallteil"]},
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
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "zelda-botw-stasis-launch",
    "moodIds": ["challenge"],
    "type": "challenge",
    "tags": ["abilities", "three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "zelda",
      "installmentIds": ["botw"]
    },
    "translations": {
      "en": {
        "name": "Stasis Launch",
        "objective": "Freeze a movable object with Stasis, strike it, and **use the launch to reach a useful place**. Stop after three launches.",
        "gameObjective": "Freeze a movable object with Stasis, strike it, and **use the launch to reach a useful place**. Stop after three launches."
      },
      "de": {
        "name": "Stasis-Katapult",
        "objective": "Halte ein bewegliches Objekt mit Stasis an, schlag dagegen und **nutze den Flug, um einen sinnvollen Ort zu erreichen**. Nach drei Starts ist Schluss.",
        "gameObjective": "Halte ein bewegliches Objekt mit Stasis an, schlag dagegen und **nutze den Flug, um einen sinnvollen Ort zu erreichen**. Nach drei Starts ist Schluss."
      }
    },
    "experience": {
      "family": "stasis-launch",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [], "platformIds": ["switch", "wii-u"] },
      "finish": "attempt",
      "activities": ["abilities"],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Stasis and strikeable movable object",
          "de": "Stasis und bewegliches schlagbares Objekt",
          "chips": {"en": ["Stasis"], "de": ["Stasis"]},
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
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "zelda-botw-shield-slope",
    "moodIds": ["restless"],
    "type": "objective",
    "tags": ["traversal"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "zelda",
      "installmentIds": ["botw"]
    },
    "translations": {
      "en": {
        "name": "Surf the Descent",
        "objective": "Find a long safe slope and **shield-surf from the top to a landmark at the bottom** without using the paraglider.",
        "gameObjective": "Find a long safe slope and **shield-surf from the top to a landmark at the bottom** without using the paraglider."
      },
      "de": {
        "name": "Mit dem Schild bergab",
        "objective": "Such einen langen, sicheren Hang und **surfe auf dem Schild bis zu einer Landmarke unten**, ohne das Parasegel zu öffnen.",
        "gameObjective": "Such einen langen, sicheren Hang und **surfe auf dem Schild bis zu einer Landmarke unten**, ohne das Parasegel zu öffnen."
      }
    },
    "experience": {
      "family": "shield-surf",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [], "platformIds": ["switch", "wii-u"] },
      "finish": "outcome",
      "activities": ["traversal"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Spare shield; safe long slope",
          "de": "Übriges Schild; sicherer langer Hang",
          "chips": {"en": ["Shield", "Long slope"], "de": ["Schild", "Langer Hang"]},
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
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "zelda-botw-rain-fire",
    "moodIds": ["curious"],
    "type": "experiment",
    "tags": ["cooking", "exploration"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "zelda",
      "installmentIds": ["botw"]
    },
    "translations": {
      "en": {
        "name": "Fire in the Rain",
        "objective": "During rain in **Breath of the Wild**, find shelter. **Light a fire there and roast an ingredient you already have** without the rain extinguishing it.",
        "gameObjective": "During rain in **Breath of the Wild**, find shelter. **Light a fire there and roast an ingredient you already have** without the rain extinguishing it."
      },
      "de": {
        "name": "Feuer trotz Regen",
        "objective": "Such dir bei Regen in **Breath of the Wild** einen geschützten Platz. **Entzünde dort ein Feuer und röste eine vorhandene Zutat**, ohne dass der Regen die Flamme löscht.",
        "gameObjective": "Such dir bei Regen in **Breath of the Wild** einen geschützten Platz. **Entzünde dort ein Feuer und röste eine vorhandene Zutat**, ohne dass der Regen die Flamme löscht."
      }
    },
    "experience": {
      "family": "sheltered-fire",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [], "platformIds": ["switch", "wii-u"] },
      "finish": "attempt",
      "activities": ["cooking", "exploration"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Regen; geschütztes trockenes Brennmaterial; Zündquelle und röstbare Zutat",
          "en": "Rain; sheltered dry fuel; ignition and roastable ingredient",
          "chips": {"en": ["Rain", "Dry shelter"], "de": ["Regen", "Trockener Unterstand"]},
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
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "zelda-botw-master-sword-memory",
    "moodIds": ["explore", "focused"],
    "type": "objective",
    "tags": ["story"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "zelda",
      "installmentIds": ["botw"]
    },
    "translations": {
      "en": {
        "name": "Follow a Memory",
        "objective": "Use one photo in the Sheikah Slate's memory album as a clue and **find its location without looking up a map**.",
        "gameObjective": "Use one photo in the Sheikah Slate's memory album as a clue and **find its location without looking up a map**."
      },
      "de": {
        "name": "Einer Erinnerung folgen",
        "objective": "Nimm ein Foto aus dem Erinnerungsalbum des Shiekah-Steins als Hinweis und **finde den Ort ohne externe Karte**.",
        "gameObjective": "Nimm ein Foto aus dem Erinnerungsalbum des Shiekah-Steins als Hinweis und **finde den Ort ohne externe Karte**."
      }
    },
    "experience": {
      "family": "memory-clue",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [], "platformIds": ["switch", "wii-u"] },
      "finish": "outcome",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Memory album unlocked; unfound memory location",
          "de": "Erinnerungsalbum freigeschaltet; unentdeckter Erinnerungsort",
          "chips": {"en": ["Memory album"], "de": ["Erinnerungsalbum"]},
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
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "zelda-totk-recall-boulder",
    "moodIds": ["curious"],
    "type": "experiment",
    "tags": ["abilities"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "zelda",
      "installmentIds": ["totk"]
    },
    "translations": {
      "en": {
        "name": "Ride the Falling Stone",
        "objective": "Find a fallen sky boulder, **rewind it with Recall and ride it upward**, then glide to a place you had not reached.",
        "gameObjective": "Find a fallen sky boulder, **rewind it with Recall and ride it upward**, then glide to a place you had not reached."
      },
      "de": {
        "name": "Mit dem Stein nach oben",
        "objective": "Finde einen herabgefallenen Himmelsbrocken, **spule ihn mit Zeitumkehr zurück und fahr mit nach oben**. Gleite von dort an einen neuen Ort.",
        "gameObjective": "Finde einen herabgefallenen Himmelsbrocken, **spule ihn mit Zeitumkehr zurück und fahr mit nach oben**. Gleite von dort an einen neuen Ort."
      }
    },
    "experience": {
      "family": "falling-stone",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [], "platformIds": ["switch"] },
      "finish": "attempt",
      "activities": ["abilities"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Recall; fallen sky boulder; paraglider",
          "de": "Zeitumkehr; gefallener Himmelsbrocken; Parasegel",
          "chips": {"en": ["Recall", "Sky boulder"], "de": ["Zeitumkehr", "Himmelsbrocken"]},
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
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "zelda-totk-ascend-exit",
    "moodIds": ["explore"],
    "type": "objective",
    "tags": ["abilities"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "zelda",
      "installmentIds": ["totk"]
    },
    "translations": {
      "en": {
        "name": "Cave Ceiling Exit",
        "objective": "Enter a cave and **leave through a ceiling using Ascend**, emerging somewhere other than its entrance.",
        "gameObjective": "Enter a cave and **leave through a ceiling using Ascend**, emerging somewhere other than its entrance."
      },
      "de": {
        "name": "Durch die Höhlendecke",
        "objective": "Geh in eine Höhle und **verlass sie mit Deckensprung durch die Decke**, statt zum Eingang zurückzugehen.",
        "gameObjective": "Geh in eine Höhle und **verlass sie mit Deckensprung durch die Decke**, statt zum Eingang zurückzugehen."
      }
    },
    "experience": {
      "family": "cave-exit",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [], "platformIds": ["switch"] },
      "finish": "outcome",
      "activities": ["abilities"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Ascend unlocked; cave with suitable ceiling",
          "de": "Deckensprung freigeschaltet; Höhle mit geeigneter Decke",
          "chips": {"en": ["Ascend", "Cave"], "de": ["Deckensprung", "Höhle"]},
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
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "zelda-totk-recall-projectile",
    "moodIds": ["challenge"],
    "type": "challenge",
    "tags": ["abilities", "three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "zelda",
      "installmentIds": ["totk"]
    },
    "translations": {
      "en": {
        "name": "Return to Sender",
        "objective": "In a fight, **send an enemy's thrown object back with Recall and hit that enemy**. Give it up after three encounters.",
        "gameObjective": "In a fight, **send an enemy's thrown object back with Recall and hit that enemy**. Give it up after three encounters."
      },
      "de": {
        "name": "Zurück zum Absender",
        "objective": "Schick im Kampf **ein geworfenes Objekt mit Zeitumkehr zurück und triff damit den Gegner**. Nach drei Begegnungen ist Schluss.",
        "gameObjective": "Schick im Kampf **ein geworfenes Objekt mit Zeitumkehr zurück und triff damit den Gegner**. Nach drei Begegnungen ist Schluss."
      }
    },
    "experience": {
      "family": "recall-combat",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [], "platformIds": ["switch"] },
      "finish": "attempt",
      "activities": ["abilities"],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Recall unlocked; enemy throwing a movable object",
          "de": "Zeitumkehr freigeschaltet; Gegner mit beweglichem Wurfobjekt",
          "chips": {"en": ["Recall", "Enemy projectile"], "de": ["Zeitumkehr", "Wurfobjekt"]},
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
    "gameGenreIds": ["adventure", "sandbox"]
  }
]);
