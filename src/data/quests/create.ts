import { defineQuests } from "./defineQuests";

export const CreateQuests = defineQuests([
  {
    "id": "tiny-home",
    "moodIds": ["create"],
    "type": "inspiration",
    "tags": ["building"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Tiny Home",
        "objective": "Open **a sandbox building game**. **Start a smaller home than usual** and try different layouts. It can stay unfinished.",
        "gameObjective": "With sandbox building available in **{{game}}**, **start a smaller home than usual and try different layouts**. It may stay unfinished."
      },
      "de": {
        "name": "Kleines Zuhause",
        "objective": "Starte **ein Sandbox-Bauspiel**. **Fang ein kleineres Haus an, als du sonst bauen würdest**, und probiere verschiedene Grundrisse aus. Es darf unfertig bleiben.",
        "gameObjective": "**Fang in {{game}} mit verfügbarem Sandbox-Bauen ein kleineres Zuhause an und probier unterschiedliche Grundrisse**. Es darf unfertig bleiben."
      }
    },
    "experience": {
      "family": "building",
      "cardMetadata": { "genreIds": ["simulation", "sandbox"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["building"],
      "rules": [],
      "prerequisites": [],
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
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["simulation", "sandbox"],
    "customGameCompatibility": {
      "capabilityIds": ["building"]
    }
  },
  {
    "id": "one-room",
    "moodIds": ["create"],
    "type": "inspiration",
    "tags": ["decorating"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Around One Object",
        "objective": "Open **a game with rooms you can redecorate**. Pick an object already there and **let its color or shape guide your changes**.",
        "gameObjective": "In **{{game}}**, choose an object in a room you can redecorate. **Let its color or shape guide your changes**."
      },
      "de": {
        "name": "Um einen Gegenstand",
        "objective": "Starte **ein Spiel mit umgestaltbaren Räumen**. Wähle einen vorhandenen Gegenstand und **lass seine Farbe oder Form deine Änderungen bestimmen**.",
        "gameObjective": "Wähle in **{{game}}** einen Gegenstand in einem umgestaltbaren Raum. **Lass seine Farbe oder Form deine Änderungen bestimmen**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["decoration"]
    },
    "experience": {
      "family": "decorating",
      "cardMetadata": { "genreIds": ["simulation", "sandbox"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["decorating"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Furnished room you can redecorate",
          "de": "Möblierter Raum, den du umgestalten kannst",
          "chips": {"en": ["Furnished room"], "de": ["Möblierter Raum"]},
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
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["simulation", "sandbox"]
  },
  {
    "id": "short-course",
    "moodIds": ["create"],
    "type": "creation",
    "tags": ["level-editor"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "translations": {
      "en": {
        "name": "A Short Course",
        "objective": "In a **game with a playable level editor**, build a start, three obstacles, and a finish. Keep the route short, **complete a test run, and save the level**.",
        "gameObjective": "With a playable level editor in **{{game}}**, **build a short route with a start, three obstacles and a finish, complete a test run and save it**."
      },
      "de": {
        "name": "Ein kurzer Parcours",
        "objective": "Bau in einem **Spiel, in dem du eigene Level testen kannst**, eine kurze Strecke mit Start, drei Hindernissen und Ziel. **Schaff einen Probelauf und speichere das Level**.",
        "gameObjective": "**Bau in {{game}} im spielbaren Leveleditor eine kurze Strecke mit Start, drei Hindernissen und Ziel, schaff einen Testlauf und speichere sie**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["level-editors"]
    },
    "experience": {
      "family": "playable-obstacle-course",
      "cardMetadata": { "genreIds": ["simulation", "sandbox"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["level-editor"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Leveleditor mit spielbarem Testlauf",
          "en": "Level editor with playable testing",
          "chips": {"en": ["Level editor"], "de": ["Leveleditor"]},
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
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["simulation", "sandbox"],
    "rarity": "special"
  },
  {
    "id": "eight-bars",
    "moodIds": ["create"],
    "type": "creation",
    "tags": ["rhythm"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "translations": {
      "en": {
        "name": "Eight Bars",
        "objective": "Open a **game with an in-game music sequencer**. Make an eight-bar loop with a beat and melody, **play it once from start to finish, and save it**.",
        "gameObjective": "With an in-game music sequencer in **{{game}}**, **make an eight-bar beat and melody loop, play it through and save it**."
      },
      "de": {
        "name": "Acht Takte",
        "objective": "Starte ein **Spiel mit einem Musik-Sequencer**. Baue einen Loop aus acht Takten mit Beat und Melodie, **höre ihn einmal ganz an und speichere ihn**.",
        "gameObjective": "**Baue in {{game}} im Musik-Sequencer einen Loop aus acht Takten mit Beat und Melodie, hör ihn ganz an und speichere ihn**."
      }
    },
    "experience": {
      "family": "compose-eight-bars",
      "cardMetadata": { "genreIds": ["rhythm"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["rhythm"],
      "rules": [],
      "prerequisites": [
        {
          "en": "In-game music sequencer with playback and save",
          "de": "Musik-Sequenzer im Spiel mit Wiedergabe und Speichern",
          "chips": {"en": ["Music sequencer"], "de": ["Musik-Sequenzer"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["rhythm"],
    "customGameOverrideOnly": true,
    "rarity": "special"
  },
  {
    "id": "workshop-inspiration",
    "moodIds": ["create"],
    "type": "inspiration",
    "tags": ["building"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Borrow an Idea",
        "objective": "Open a building game with a **community gallery**. Browse a few small creations and **try your own version of one idea** with your existing tools. It can stay unfinished.",
        "gameObjective": "With a community building gallery in **{{game}}**, browse small creations and **try your own version of one idea**. It may stay unfinished."
      },
      "de": {
        "name": "Eine Idee aufgreifen",
        "objective": "Starte ein Bauspiel mit **Community-Galerie**. Schau dir ein paar kleine Kreationen an und **probiere deine eigene Version einer Idee** mit vorhandenen Werkzeugen. Sie darf unfertig bleiben.",
        "gameObjective": "Schau in **{{game}}** in der Community-Baugalerie kleine Kreationen an und **probier deine eigene Version einer Idee**. Sie darf unfertig bleiben."
      }
    },
    "experience": {
      "family": "building",
      "finish": "open",
      "activities": ["building"],
      "rules": [],
      "cardMetadata": { "genreIds": ["simulation", "sandbox"], "playStyleIds": [] },
      "prerequisites": [
        {
          "en": "Community build gallery",
          "de": "Community-Baugalerie",
          "chips": {"en": ["Community gallery"], "de": ["Community-Galerie"]},
          "critical": true
        },
        {
          "en": "Available building tools",
          "de": "Verfügbare Bauwerkzeuge",
          "chips": {"en": ["Building tools"], "de": ["Bauwerkzeuge"]},
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
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["simulation", "sandbox"],
    "customGameOverrideOnly": true
  },
  {
    "id": "build-with-three-materials",
    "moodIds": ["create", "focused"],
    "type": "creation",
    "tags": ["building"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Three Materials",
        "objective": "Open a **building game**. Build a small shelter from three materials. **Add a roof and entrance**, then walk inside.",
        "gameObjective": "Open **{{game}}**. Build a small shelter from three materials. **Add a roof and entrance**, then walk inside."
      },
      "de": {
        "name": "Drei Materialien",
        "objective": "Starte ein **Bauspiel**. Baue aus drei Materialien einen kleinen Unterstand. **Füge Dach und Eingang hinzu** und geh hinein.",
        "gameObjective": "Starte **{{game}}**. Baue aus drei Materialien einen kleinen Unterstand. **Füge Dach und Eingang hinzu** und geh hinein."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["building"]
    },
    "experience": {
      "family": "three-material-shelter",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["building"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Drei vorhandene Baumaterialien für Dach und Eingang",
          "en": "Three owned building materials for a roof and doorway",
          "chips": {"en": ["Building materials"], "de": ["Baumaterial"]},
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
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["simulation", "survival", "sandbox"]
  },
  {
    "id": "build-a-memory",
    "moodIds": ["create", "relax"],
    "type": "creation",
    "tags": ["building"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Room from Memory",
        "objective": "Open a **game with free building**. Recreate the rough shape of a room you know. **Add its doorway and save the build**. Keep the details simple.",
        "gameObjective": "Open **{{game}}**. Recreate the rough shape of a room you know. **Add its doorway and save the build**. Keep the details simple."
      },
      "de": {
        "name": "Raum aus Erinnerung",
        "objective": "Starte ein **Spiel mit freiem Bauen**. Bau einen Raum nach, an den du dich gut erinnerst. **Setz die Tür an die richtige Stelle und speichere den Bau**. Die kleinen Details können warten.",
        "gameObjective": "Starte **{{game}}**. Bau einen Raum nach, an den du dich gut erinnerst. **Setz die Tür an die richtige Stelle und speichere den Bau**. Die kleinen Details können warten."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["building"]
    },
    "experience": {
      "family": "room-from-memory",
      "cardMetadata": { "genreIds": ["simulation", "sandbox"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["building"],
      "rules": [],
      "prerequisites": [],
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
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["simulation", "sandbox"]
  },
  {
    "id": "two-color-look",
    "moodIds": ["create", "relax"],
    "type": "creation",
    "tags": ["outfit", "two-colors"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Two Colors",
        "objective": "Open a **game with appearance customization**. Use owned cosmetics to **create a look in two main colors**, then equip it.",
        "gameObjective": "Open **{{game}}**. Use owned cosmetics to **create a look in two main colors**, then equip it."
      },
      "de": {
        "name": "Zwei Farben",
        "objective": "Starte ein **Spiel mit anpassbarem Aussehen**. Gestalte mit vorhandenen Kosmetikitems **einen Look in zwei Hauptfarben** und zieh ihn an.",
        "gameObjective": "Starte **{{game}}**. Gestalte mit vorhandenen Kosmetikitems **einen Look in zwei Hauptfarben** und zieh ihn an."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["customization"]
    },
    "experience": {
      "family": "outfit",
      "cardMetadata": { "genreIds": ["sandbox"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["outfit"],
      "rules": ["two-colors"],
      "prerequisites": [],
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
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["sandbox"]
  },
  {
    "id": "photo-three-angles",
    "moodIds": ["create", "focused"],
    "type": "creation",
    "tags": ["photography"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Three Angles",
        "objective": "Open a **game with photo mode**. Photograph one subject close up, from below, and in a wide shot. **Save all three photos**.",
        "gameObjective": "Open **{{game}}**. Photograph one subject close up, from below, and in a wide shot. **Save all three photos**."
      },
      "de": {
        "name": "Drei Blickwinkel",
        "objective": "Starte ein **Spiel mit Fotomodus**. Fotografiere ein Motiv nah, von unten und aus der Ferne. **Speichere alle drei Bilder**.",
        "gameObjective": "Starte **{{game}}**. Fotografiere ein Motiv nah, von unten und aus der Ferne. **Speichere alle drei Bilder**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["photo-mode"]
    },
    "experience": {
      "family": "three-photo-angles",
      "cardMetadata": { "genreIds": ["sandbox"], "playStyleIds": [] },
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
        },
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["sandbox"]
  },
  {
    "id": "build-a-landmark",
    "moodIds": ["create", "progress"],
    "type": "creation",
    "tags": ["building"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Your Waymarker",
        "objective": "Open a **game with free building**. Use owned materials to **build a marker beside a familiar path**. Walk down the path to check its visibility, then save.",
        "gameObjective": "Open **{{game}}**. Use owned materials to **build a marker beside a familiar path**. Walk down the path to check its visibility, then save."
      },
      "de": {
        "name": "Dein Wegzeichen",
        "objective": "Starte ein **Spiel mit freiem Bauen**. Baue mit vorhandenen Materialien **ein Wegzeichen an einem vertrauten Pfad**. Geh den Pfad entlang, prüfe die Sichtbarkeit und speichere.",
        "gameObjective": "Starte **{{game}}**. Baue mit vorhandenen Materialien **ein Wegzeichen an einem vertrauten Pfad**. Geh den Pfad entlang, prüfe die Sichtbarkeit und speichere."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["building"]
    },
    "experience": {
      "family": "build-waymarker",
      "cardMetadata": { "genreIds": ["simulation", "sandbox"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["building"],
      "rules": [],
      "prerequisites": [],
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
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["simulation", "sandbox"]
  },
  {
    "id": "build-doorway-view",
    "moodIds": ["create", "curious"],
    "type": "experiment",
    "tags": ["building", "new-approach"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Frame the View",
        "objective": "Open a **game with free building**. Frame a nearby view with a doorway or window. Look through it, move the frame once, and **compare both views in gameplay**.",
        "gameObjective": "Open **{{game}}**. Frame a nearby view with a doorway or window. Look through it, move the frame once, and **compare both views in gameplay**."
      },
      "de": {
        "name": "Die Aussicht rahmen",
        "objective": "Starte ein **Spiel mit freiem Bauen**. Rahme eine nahe Aussicht mit einer Tür oder einem Fenster. Schau hindurch, versetze den Rahmen einmal und **vergleiche beide Aussichten im Spiel**.",
        "gameObjective": "Starte **{{game}}**. Rahme eine nahe Aussicht mit einer Tür oder einem Fenster. Schau hindurch, versetze den Rahmen einmal und **vergleiche beide Aussichten im Spiel**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["building"]
    },
    "experience": {
      "family": "frame-view-comparison",
      "cardMetadata": { "genreIds": ["simulation", "sandbox"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["building"],
      "rules": [],
      "prerequisites": [],
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
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["simulation", "sandbox"]
  },
  {
    "id": "crafting-bench-session",
    "moodIds": ["create"],
    "type": "inspiration",
    "tags": ["crafting"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "At the Workbench",
        "objective": "Open **a game with crafting**. Browse what your stored materials could become and **let your supplies suggest something new to make**.",
        "gameObjective": "In **{{game}}**, browse what your stored materials could become and **let your supplies suggest something new to make**."
      },
      "de": {
        "name": "An der Werkbank",
        "objective": "Starte **ein Spiel mit Crafting**. Schau dir an, was sich aus deinen Vorräten machen lässt, und **lass dich davon zu etwas Neuem inspirieren**.",
        "gameObjective": "Schau dir in **{{game}}** an, was sich aus deinen Vorräten machen lässt, und **lass dich davon zu etwas Neuem inspirieren**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["crafting"]
    },
    "experience": {
      "family": "crafting",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "open",
      "activities": ["crafting"],
      "rules": [],
      "prerequisites": [],
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
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["rpg", "survival", "sandbox"]
  },
  {
    "id": "garden-pattern",
    "moodIds": ["create", "focused"],
    "type": "creation",
    "tags": ["farming"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Plant a Pattern",
        "objective": "Open a **game with crop planting**. Use owned seeds to **plant two crops in alternating rows or patches**. Tend them as needed and save the layout without waiting for growth.",
        "gameObjective": "Open **{{game}}**. Use owned seeds to **plant two crops in alternating rows or patches**. Tend them as needed and save the layout without waiting for growth."
      },
      "de": {
        "name": "Ein Muster pflanzen",
        "objective": "Starte ein **Spiel mit anbaubaren Nutzpflanzen**. Pflanze mit vorhandenen Samen **zwei Sorten in abwechselnden Reihen oder Beeten**. Versorge sie nach Bedarf und speichere die Anordnung, ohne auf Wachstum zu warten.",
        "gameObjective": "Starte **{{game}}**. Pflanze mit vorhandenen Samen **zwei Sorten in abwechselnden Reihen oder Beeten**. Versorge sie nach Bedarf und speichere die Anordnung, ohne auf Wachstum zu warten."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["grow-crops"]
    },
    "experience": {
      "family": "crop-pattern",
      "cardMetadata": { "genreIds": ["simulation", "cozy"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["farming"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Freie Beete und Samen für zwei Nutzpflanzen",
          "en": "Free plots and seeds for two crops",
          "chips": {"en": ["Seeds"], "de": ["Samen"]},
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
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["simulation", "cozy"]
  },
  {
    "id": "outfit-start-with-one",
    "moodIds": ["create", "overwhelmed"],
    "type": "inspiration",
    "tags": ["outfit"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "One Favorite Piece",
        "objective": "Open a **game with appearance customization**. Choose a cosmetic item you enjoy wearing. **Build a look around it** using only items you own.",
        "gameObjective": "Open **{{game}}**. Choose a cosmetic item you enjoy wearing. **Build a look around it** using only items you own."
      },
      "de": {
        "name": "Ein Lieblingsstück",
        "objective": "Starte ein **Spiel mit anpassbarem Aussehen**. Wähle ein Kosmetikitem, das du gern trägst. **Stelle einen Look darum zusammen**, nur mit vorhandenen Items.",
        "gameObjective": "Starte **{{game}}**. Wähle ein Kosmetikitem, das du gern trägst. **Stelle einen Look darum zusammen**, nur mit vorhandenen Items."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["customization"]
    },
    "experience": {
      "family": "outfit",
      "cardMetadata": { "genreIds": ["simulation", "sandbox"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["outfit"],
      "rules": [],
      "prerequisites": [],
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
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["simulation", "sandbox"]
  },
  {
    "id": "outfit-for-the-place",
    "moodIds": ["create", "focused"],
    "type": "creation",
    "tags": ["outfit"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Dress for the Place",
        "objective": "Open a **game with appearance customization**. Use owned cosmetics to **make a look for a reachable place**. Equip it and play there.",
        "gameObjective": "Open **{{game}}**. Use owned cosmetics to **make a look for a reachable place**. Equip it and play there."
      },
      "de": {
        "name": "Passend zum Ort",
        "objective": "Starte ein **Spiel mit anpassbarem Aussehen**. Gestalte mit vorhandenen Kosmetikitems **einen Look für einen erreichbaren Ort**. Rüste ihn aus und spiele dort.",
        "gameObjective": "Starte **{{game}}**. Gestalte mit vorhandenen Kosmetikitems **einen Look für einen erreichbaren Ort**. Rüste ihn aus und spiele dort."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["customization"]
    },
    "experience": {
      "family": "place-themed-outfit",
      "cardMetadata": { "genreIds": ["sandbox"], "playStyleIds": [] },
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
        },
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["sandbox"]
  },
  {
    "id": "photo-one-subject-two-moods",
    "moodIds": ["create", "curious"],
    "type": "experiment",
    "tags": ["photography", "new-approach"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Change the Mood",
        "objective": "Open a **game with photo mode**. Save a photo of one nearby subject. Change only the angle or lighting and **save a second photo with a different mood**.",
        "gameObjective": "Open **{{game}}**. Save a photo of one nearby subject. Change only the angle or lighting and **save a second photo with a different mood**."
      },
      "de": {
        "name": "Andere Stimmung",
        "objective": "Starte ein **Spiel mit Fotomodus**. Speichere ein Foto eines nahen Motivs. Ändere nur Winkel oder Licht und **speichere ein zweites Bild mit anderer Stimmung**.",
        "gameObjective": "Starte **{{game}}**. Speichere ein Foto eines nahen Motivs. Ändere nur Winkel oder Licht und **speichere ein zweites Bild mit anderer Stimmung**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["photo-mode"]
    },
    "experience": {
      "family": "photo-mood-comparison",
      "cardMetadata": { "genreIds": ["sandbox"], "playStyleIds": [] },
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
        },
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["sandbox"]
  },
  {
    "id": "character-build-a-sequence",
    "moodIds": ["create", "focused"],
    "type": "experiment",
    "tags": ["abilities", "new-approach", "vs-bots"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Your Own Sequence",
        "objective": "Open a **game with selectable character abilities**. In solo or bot play, choose two available actions or abilities your character can chain. **Use your chosen sequence during one encounter and finish it**, adjusting the timing as you play.",
        "gameObjective": "In **{{game}}**: In solo or bot play, choose two available actions or abilities your character can chain. **Use your chosen sequence during one encounter and finish it**, adjusting the timing as you play."
      },
      "de": {
        "name": "Deine eigene Abfolge",
        "objective": "Starte ein **Spiel mit wählbaren Figurenfähigkeiten**. Wähle für deine Figur zwei Aktionen oder Fähigkeiten, die zusammenpassen. **Probier die Abfolge in einem Solo- oder Bot-Kampf aus und spiel ihn zu Ende**. Pass das Timing beim Spielen an.",
        "gameObjective": "In **{{game}}**: Wähle für deine Figur zwei Aktionen oder Fähigkeiten, die zusammenpassen. **Probier die Abfolge in einem Solo- oder Bot-Kampf aus und spiel ihn zu Ende**. Pass das Timing beim Spielen an."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["character-abilities"]
    },
    "experience": {
      "family": "ability-sequence",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["abilities"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Zwei kombinierbare Fähigkeiten in einem Solo- oder Bot-Kampf",
          "en": "Two chainable abilities in a solo or bot encounter",
          "chips": {"en": ["Ability combo"], "de": ["Fähigkeiten kombinieren"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "rpg", "roguelike", "fighting", "moba"]
  },
  {
    "id": "gadget-try-another-position",
    "moodIds": ["create", "curious"],
    "type": "experiment",
    "tags": ["gadgets", "new-approach", "vs-bots"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Placement Matters",
        "objective": "Open a **game with placeable tactical gadgets**. In solo, training, or bot play with a placeable gadget, try it in two different positions. **Play an encounter from each setup and compare the space it protects or controls**.",
        "gameObjective": "In **{{game}}**: In solo, training, or bot play with a placeable gadget, try it in two different positions. **Play an encounter from each setup and compare the space it protects or controls**."
      },
      "de": {
        "name": "Der Platz zählt",
        "objective": "Starte ein **Spiel mit platzierbaren taktischen Gadgets**. Platziere dasselbe Gadget in zwei Solo-, Trainings- oder Bot-Kämpfen an verschiedenen Stellen. **Spiel beide Kämpfe zu Ende und vergleiche, welchen Bereich es jeweils schützt oder kontrolliert**.",
        "gameObjective": "In **{{game}}**: Platziere dasselbe Gadget in zwei Solo-, Trainings- oder Bot-Kämpfen an verschiedenen Stellen. **Spiel beide Kämpfe zu Ende und vergleiche, welchen Bereich es jeweils schützt oder kontrolliert**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["placeable-gadgets", "replayable-encounters"]
    },
    "experience": {
      "family": "gadgets",
      "cardMetadata": { "genreIds": ["shooter"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["gadgets"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Placeable gadget; replayable encounter",
          "de": "Platzierbares Gadget; wiederholbare Begegnung",
          "chips": {"en": ["Placeable gadget"], "de": ["Platzierbares Gadget"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter"]
  },
  {
    "id": "deck-build-around-effect",
    "moodIds": ["create", "focused"],
    "type": "creation",
    "tags": ["cards", "vs-bots"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "translations": {
      "en": {
        "name": "Build Around It",
        "objective": "Open a **game with editable decks and card battles**. Choose one effect on a card you own. Adjust a legal deck to support that effect, then **save the deck and finish one solo or bot battle with it**.",
        "gameObjective": "In **{{game}}**: Choose one effect on a card you own. Adjust a legal deck to support that effect, then **save the deck and finish one solo or bot battle with it**."
      },
      "de": {
        "name": "Darum herum bauen",
        "objective": "Starte ein **Spiel mit bearbeitbaren Decks und Kartenkämpfen**. Wähle einen Effekt einer vorhandenen Karte. Passe ein gültiges Deck so an, dass es diesen Effekt unterstützt. **Speichere das Deck und beende damit einen Solo- oder Bot-Kampf**.",
        "gameObjective": "In **{{game}}**: Wähle einen Effekt einer vorhandenen Karte. Passe ein gültiges Deck so an, dass es diesen Effekt unterstützt. **Speichere das Deck und beende damit einen Solo- oder Bot-Kampf**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["card-decks"]
    },
    "experience": {
      "family": "build-and-use-deck",
      "cardMetadata": { "genreIds": ["card"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["cards"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Bearbeitbares Deck, eigene Karten und Solo- oder Bot-Kampf",
          "en": "Editable deck, owned cards and a solo or bot battle",
          "chips": {"en": ["Deck builder"], "de": ["Deckbau"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["card"],
    "rarity": "special"
  },
  {
    "id": "units-try-a-formation",
    "moodIds": ["create", "curious"],
    "type": "experiment",
    "tags": ["units", "new-approach"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Change the Formation",
        "objective": "Open a **tactics game with controllable unit positions**. In a solo scenario that lets you position units, put a durable unit ahead of a more vulnerable one. **Play an encounter with that arrangement and compare it with your usual deployment**.",
        "gameObjective": "In **{{game}}**: In a solo scenario that lets you position units, put a durable unit ahead of a more vulnerable one. **Play an encounter with that arrangement and compare it with your usual deployment**."
      },
      "de": {
        "name": "Anders aufstellen",
        "objective": "Starte ein **Taktikspiel, in dem du deine Einheiten selbst aufstellen kannst**. Stelle in einem Solo-Szenario mit frei platzierbaren Einheiten eine robuste Einheit vor eine empfindlichere. **Spiel mit dieser Aufstellung einen Kampf und vergleiche sie mit deiner üblichen Taktik**.",
        "gameObjective": "In **{{game}}**: Stelle in einem Solo-Szenario mit frei platzierbaren Einheiten eine robuste Einheit vor eine empfindlichere. **Spiel mit dieser Aufstellung einen Kampf und vergleiche sie mit deiner üblichen Taktik**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["unit-command"],
      "genreIds": ["strategy"]
    },
    "experience": {
      "family": "formation-comparison",
      "cardMetadata": { "genreIds": ["strategy"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["units"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Solo-Szenario mit frei platzierbaren robusten und empfindlichen Einheiten",
          "en": "Solo scenario with positionable durable and vulnerable units",
          "chips": {"en": ["Durable units", "Fragile units"], "de": ["Robuste Einheiten", "Schwache Einheiten"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["strategy"]
  },
  {
    "id": "automation-one-working-chain",
    "moodIds": ["create", "progress"],
    "type": "creation",
    "tags": ["automation"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "One Working Chain",
        "objective": "Open **a game with connected production machines**. Use available machines and materials to link one production step to the next. **Run the chain until it automatically produces a finished item**.",
        "gameObjective": "In **{{game}}**, use available machines and materials to link one production step to the next. **Run the chain until it automatically produces a finished item**."
      },
      "de": {
        "name": "Eine funktionierende Kette",
        "objective": "Starte **ein Spiel mit verbundenen Produktionsmaschinen**. Verbinde mit vorhandenen Maschinen und Rohstoffen einen Produktionsschritt mit dem nächsten. **Lass die Kette automatisch ein fertiges Produkt herstellen**.",
        "gameObjective": "Verbinde in **{{game}}** mit vorhandenen Maschinen und Rohstoffen einen Produktionsschritt mit dem nächsten. **Lass die Kette automatisch ein fertiges Produkt herstellen**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["automation"]
    },
    "experience": {
      "family": "working-production-chain",
      "cardMetadata": { "genreIds": ["simulation", "sandbox"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["automation"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Maschinen, Verbindungen und Rohstoffe für eine Produktionskette",
          "en": "Machines, connectors and inputs for a production chain",
          "chips": {"en": ["Machines", "Connectors"], "de": ["Maschinen", "Verbindungen"]},
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
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["simulation", "sandbox"]
  },
  {
    "id": "building-go-up",
    "moodIds": ["create", "progress"],
    "type": "creation",
    "tags": ["building", "new-approach"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Build Upward",
        "objective": "Open a **building game with an existing ground-level structure**. Add a reachable upper platform or small second floor using materials you already have. **Connect it with stairs, a ladder, or another usable route**, then save.",
        "gameObjective": "In **{{game}}**: Add a reachable upper platform or small second floor to an existing ground-level structure using materials you already have. **Connect it with a usable route**, then save."
      },
      "de": {
        "name": "In die Höhe bauen",
        "objective": "Starte ein **Bauspiel mit einem vorhandenen ebenerdigen Gebäude**. Ergänze mit vorhandenen Materialien eine erreichbare Plattform oder ein kleines Obergeschoss. **Verbinde es mit einer Treppe, Leiter oder einem anderen nutzbaren Weg** und speichere.",
        "gameObjective": "In **{{game}}**: Ergänze ein vorhandenes ebenerdiges Gebäude mit einer erreichbaren Plattform oder einem kleinen Obergeschoss aus vorhandenen Materialien. **Verbinde es mit einem nutzbaren Weg** und speichere."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["building"]
    },
    "experience": {
      "family": "add-upper-floor",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["building"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Vorhandenes Gebäude, Bauteile und ein Weg ins obere Stockwerk",
          "en": "Existing structure, parts and a way to reach an upper floor",
          "chips": {"en": ["Upper-floor access"], "de": ["Obergeschoss erreichbar"]},
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
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["simulation", "survival", "sandbox"]
  },
  {
    "id": "photo-route-story",
    "moodIds": ["create", "relax"],
    "type": "creation",
    "tags": ["photography", "exploration"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Route in Three Frames",
        "objective": "Open a **freely explorable game with a photo mode**. Choose a short route and take one picture at its beginning, middle, and destination. **Keep the three images as a sequence that shows the journey**.",
        "gameObjective": "In **{{game}}**: Choose a short route and take one picture at its beginning, middle, and destination. **Keep the three images as a sequence that shows the journey**."
      },
      "de": {
        "name": "Drei Bilder vom Weg",
        "objective": "Starte ein **frei erkundbares Spiel mit Fotomodus**. Wähle eine kurze Route und mache je ein Bild am Anfang, in der Mitte und am Ziel. **Speichere die drei Bilder als kleine Geschichte deiner Route**.",
        "gameObjective": "In **{{game}}**: Wähle eine kurze Route und mache je ein Bild am Anfang, in der Mitte und am Ziel. **Speichere die drei Bilder als kleine Geschichte deiner Route**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["open-world", "photo-mode"]
    },
    "experience": {
      "family": "journey-photo-sequence",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["photography", "exploration"],
      "rules": [],
      "prerequisites": [],
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
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "simulation", "sandbox"]
  },
  {
    "id": "create-three-frame-story",
    "rarity": "special",
    "moodIds": ["create"],
    "type": "creation",
    "tags": ["photography"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Three-Frame Story",
        "objective": "Open **a game with photo mode and a movable character**. Tell a tiny story without captions: set up a scene, change something, and show the aftermath. **Save three photos whose order makes the story clear**.",
        "gameObjective": "Open **{{game}}**. Tell a tiny story without captions: set up a scene, change something, and show the aftermath. **Save three photos whose order makes the story clear**."
      },
      "de": {
        "name": "Geschichte in drei Bildern",
        "objective": "Starte **ein Spiel mit Fotomodus und beweglicher Figur**. Erzähl eine kleine Geschichte ohne Bildtext: Zeig eine Szene, verändere etwas und zeig die Folge. **Speichere drei Fotos, deren Reihenfolge die Geschichte verständlich macht**.",
        "gameObjective": "Starte **{{game}}**. Erzähl eine kleine Geschichte ohne Bildtext: Zeig eine Szene, verändere etwas und zeig die Folge. **Speichere drei Fotos, deren Reihenfolge die Geschichte verständlich macht**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["photo-mode"],
      "match": "all"
    },
    "experience": {
      "family": "staged-photo-story",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["photography"],
      "rules": [],
      "prerequisites": [
        {
          "en": "a game with photo mode and a movable character",
          "de": "ein Spiel mit Fotomodus und beweglicher Figur",
          "chips": {"en": ["Photo mode"], "de": ["Fotomodus"]},
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
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "create-room-around-one-item",
    "moodIds": ["create"],
    "type": "creation",
    "tags": ["decorating"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "One-Item Room",
        "objective": "Open **a game with interior decoration and stored furniture**. Pick one favorite item as the centerpiece and **finish a small room arrangement around it**.",
        "gameObjective": "Open **{{game}}**. Pick one favorite item as the centerpiece and **finish a small room arrangement around it**."
      },
      "de": {
        "name": "Raum um ein Objekt",
        "objective": "Starte **ein Spiel mit Inneneinrichtung und gelagerten Möbeln**. Such dir ein Lieblingsmöbelstück als Mittelpunkt aus und **richte den Rest eines kleinen Raums darum herum ein**.",
        "gameObjective": "Starte **{{game}}**. Such dir ein Lieblingsmöbelstück als Mittelpunkt aus und **richte den Rest eines kleinen Raums darum herum ein**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["decoration"]
    },
    "experience": {
      "family": "decorating",
      "cardMetadata": { "genreIds": ["simulation", "sandbox"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["decorating"],
      "rules": [],
      "prerequisites": [
        {
          "en": "a game with interior decoration and stored furniture",
          "de": "ein Spiel mit Inneneinrichtung und gelagerten Möbeln",
          "chips": {"en": ["Furniture"], "de": ["Möbel"]},
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
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["simulation", "sandbox"]
  },
  {
    "id": "create-repeating-shape",
    "moodIds": ["create"],
    "type": "creation",
    "tags": ["building"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Repeat One Shape",
        "objective": "Open **a building game with simple structural pieces**. Choose one arch, triangle, or stepped shape and **finish a small structure that repeats it at least three times**.",
        "gameObjective": "Open **{{game}}**. Choose one arch, triangle, or stepped shape and **finish a small structure that repeats it at least three times**."
      },
      "de": {
        "name": "Eine Form wiederholen",
        "objective": "Starte **ein Bauspiel mit einfachen Bauteilen**. Wähle einen Bogen, ein Dreieck oder eine Stufenform und **baue eine kleine Struktur fertig, die sie mindestens dreimal wiederholt**.",
        "gameObjective": "Starte **{{game}}**. Wähle einen Bogen, ein Dreieck oder eine Stufenform und **baue eine kleine Struktur fertig, die sie mindestens dreimal wiederholt**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["building"],
      "match": "all"
    },
    "experience": {
      "family": "repeated-building-shape",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["building"],
      "rules": [],
      "prerequisites": [
        {
          "en": "a building game with simple structural pieces",
          "de": "ein Bauspiel mit einfachen Bauteilen",
          "chips": {"en": ["Building parts"], "de": ["Bauteile"]},
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
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["simulation", "survival", "sandbox"]
  },
  {
    "id": "create-themed-vehicle",
    "moodIds": ["create"],
    "type": "creation",
    "tags": ["two-colors"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Themed Vehicle",
        "objective": "Open **a game with vehicle customization**. Choose two colors and one visual theme, then **save or apply a complete vehicle look**.",
        "gameObjective": "Open **{{game}}**. Choose two colors and one visual theme, then **save or apply a complete vehicle look**."
      },
      "de": {
        "name": "Fahrzeug mit Thema",
        "objective": "Starte **ein Spiel mit Fahrzeuganpassung**. Wähle zwei Farben und ein Motiv und **speichere oder übernimm den neuen Look für dein Fahrzeug**.",
        "gameObjective": "Starte **{{game}}**. Wähle zwei Farben und ein Motiv und **speichere oder übernimm den neuen Look für dein Fahrzeug**."
      }
    },
    "experience": {
      "family": "vehicle-look",
      "cardMetadata": { "genreIds": ["racing", "sandbox"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": [],
      "rules": ["two-colors"],
      "prerequisites": [
        {
          "en": "a game with vehicle customization",
          "de": "ein Spiel mit Fahrzeuganpassung",
          "chips": {"en": ["Vehicle customization"], "de": ["Fahrzeuganpassung"]},
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
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["racing", "sandbox"],
    "customGameOverrideOnly": true
  },
  {
    "id": "create-role-outfit",
    "moodIds": ["create"],
    "type": "creation",
    "tags": ["outfit"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Role Outfit",
        "objective": "Open **a game with unlocked clothing customization**. Choose a role such as traveler, mechanic, or scout and **save or equip an outfit that communicates it**.",
        "gameObjective": "Open **{{game}}**. Choose a role such as traveler, mechanic, or scout and **save or equip an outfit that communicates it**."
      },
      "de": {
        "name": "Outfit für eine Rolle",
        "objective": "Starte **ein Spiel mit freigeschalteter Kleidungsanpassung**. Denk dir eine Rolle aus, etwa Reisende, Mechaniker oder Späherin, und **stell ein Outfit zusammen, das dazu passt**. Speichere es oder zieh es an.",
        "gameObjective": "Starte **{{game}}**. Denk dir eine Rolle aus, etwa Reisende, Mechaniker oder Späherin, und **stell ein Outfit zusammen, das dazu passt**. Speichere es oder zieh es an."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["customization"],
      "match": "all"
    },
    "experience": {
      "family": "role-themed-outfit",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["outfit"],
      "rules": [],
      "prerequisites": [
        {
          "en": "a game with unlocked clothing customization",
          "de": "ein Spiel mit freigeschalteter Kleidungsanpassung",
          "chips": {"en": ["Clothing options"], "de": ["Kleidungsanpassung"]},
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
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["rpg", "simulation", "sandbox"]
  },
  {
    "id": "create-level-with-shortcut",
    "moodIds": ["create"],
    "type": "creation",
    "tags": ["level-editor"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "translations": {
      "en": {
        "name": "Shortcut Level",
        "objective": "Open **a game with a level editor and playable testing**. Build a short route with one optional shortcut and **complete both routes in a test run**.",
        "gameObjective": "Open **{{game}}**. Build a short route with one optional shortcut and **complete both routes in a test run**."
      },
      "de": {
        "name": "Level mit Abkürzung",
        "objective": "Starte **ein Spiel mit Leveleditor und spielbarem Test**. Baue eine kurze Strecke mit einer optionalen Abkürzung und **beende beide Wege in Testläufen**.",
        "gameObjective": "Starte **{{game}}**. Baue eine kurze Strecke mit einer optionalen Abkürzung und **beende beide Wege in Testläufen**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["level-editors"]
    },
    "experience": {
      "family": "playable-shortcut-level",
      "cardMetadata": { "genreIds": ["platformer", "racing"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["level-editor"],
      "rules": [],
      "prerequisites": [
        {
          "en": "a game with a level editor and playable testing",
          "de": "ein Spiel mit Leveleditor und spielbarem Test",
          "chips": {"en": ["Level editor"], "de": ["Leveleditor"]},
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
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["platformer", "racing"],
    "rarity": "special"
  },
  {
    "id": "create-split-production-line",
    "moodIds": ["create"],
    "type": "creation",
    "tags": ["automation"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "translations": {
      "en": {
        "name": "Split the Line",
        "objective": "Open **a game with automation and an empty work area**. Feed one input into two different outputs and **watch one finished item reach each output without manual transfer**.",
        "gameObjective": "Open **{{game}}**. Feed one input into two different outputs and **watch one finished item reach each output without manual transfer**."
      },
      "de": {
        "name": "Anlage aufteilen",
        "objective": "Starte **ein Spiel mit Automatisierung und einer freien Arbeitsfläche**. Verteile Material aus einer Quelle auf zwei Produktionswege und **lass über beide Wege je ein fertiges Item entstehen, ohne von Hand umzustellen**.",
        "gameObjective": "Starte **{{game}}**. Verteile Material aus einer Quelle auf zwei Produktionswege und **lass über beide Wege je ein fertiges Item entstehen, ohne von Hand umzustellen**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["automation"],
      "match": "all"
    },
    "experience": {
      "family": "split-production-chain",
      "cardMetadata": { "genreIds": ["simulation", "sandbox"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["automation"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Freie Fläche, Materialquelle und Bauteile für zwei automatische Produktionswege",
          "en": "Free area, material source and parts for two automatic production paths",
          "chips": {"en": ["Production parts"], "de": ["Produktionsbauteile"]},
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
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["simulation", "sandbox"],
    "rarity": "special"
  },
  {
    "id": "create-scenic-overlook",
    "moodIds": ["create"],
    "type": "creation",
    "tags": ["building", "decorating"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Scenic Overlook",
        "objective": "Open **a building game with a scenic high point**. Add a safe platform, a seat, and one light, then **stand there and confirm the view is unobstructed**.",
        "gameObjective": "Open **{{game}}**. Add a safe platform, a seat, and one light, then **stand there and confirm the view is unobstructed**."
      },
      "de": {
        "name": "Aussichtsplatz",
        "objective": "Starte **ein Bauspiel mit einem schönen erhöhten Ort**. Baue eine sichere Plattform, einen Sitzplatz und ein Licht und **stell dich darauf und prüfe, ob die Aussicht frei ist**.",
        "gameObjective": "Starte **{{game}}**. Baue eine sichere Plattform, einen Sitzplatz und ein Licht und **stell dich darauf und prüfe, ob die Aussicht frei ist**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["building", "decoration"]
    },
    "experience": {
      "family": "build-scenic-overlook",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["building", "decorating"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Erreichbarer Aussichtspunkt, Bauteile, Sitzplatz und Licht",
          "en": "Reachable viewpoint, building parts, seating and a light",
          "chips": {"en": ["Viewpoint", "Seat"], "de": ["Aussichtspunkt", "Sitzmöbel"]},
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
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["simulation", "survival", "sandbox"]
  },
  {
    "id": "create-call-and-response",
    "rarity": "special",
    "moodIds": ["create"],
    "type": "creation",
    "tags": ["rhythm"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Call and Response",
        "objective": "Open **a music game with a sequencer or composition tool**. Write a short musical question, then answer it with the same rhythm and different notes. **Save or play back a loop where both phrases take turns**.",
        "gameObjective": "Open **{{game}}**. Write a short musical question, then answer it with the same rhythm and different notes. **Save or play back a loop where both phrases take turns**."
      },
      "de": {
        "name": "Call and Response",
        "objective": "Starte **ein Musikspiel mit Sequenzer oder Kompositionswerkzeug**. Schreibe eine kurze musikalische Frage und antworte mit demselben Rhythmus und anderen Tönen. **Speichere oder spiele einen Loop ab, in dem sich beide Phrasen abwechseln**.",
        "gameObjective": "Starte **{{game}}**. Schreibe eine kurze musikalische Frage und antworte mit demselben Rhythmus und anderen Tönen. **Speichere oder spiele einen Loop ab, in dem sich beide Phrasen abwechseln**."
      }
    },
    "experience": {
      "family": "compose-call-response",
      "cardMetadata": { "genreIds": ["rhythm"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["rhythm"],
      "rules": [],
      "prerequisites": [
        {
          "en": "a music game with a sequencer or composition tool",
          "de": "ein Musikspiel mit Sequenzer oder Kompositionswerkzeug",
          "chips": {"en": ["Music sequencer"], "de": ["Musik-Sequenzer"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["rhythm"],
    "customGameOverrideOnly": true
  },
  {
    "id": "create-asymmetrical-look",
    "moodIds": ["create"],
    "type": "creation",
    "tags": ["outfit"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Asymmetrical Look",
        "objective": "Open **a game with detailed character customization**. Make the left and right sides visibly different while keeping one shared color, then **save the finished character look**.",
        "gameObjective": "Open **{{game}}**. Make the left and right sides visibly different while keeping one shared color, then **save the finished character look**."
      },
      "de": {
        "name": "Asymmetrischer Look",
        "objective": "Starte **ein Spiel mit genauer Figurenanpassung**. Gestalte linke und rechte Seite sichtbar unterschiedlich, behalte aber eine gemeinsame Farbe und **speichere den fertigen Figurenlook**.",
        "gameObjective": "Starte **{{game}}**. Gestalte linke und rechte Seite sichtbar unterschiedlich, behalte aber eine gemeinsame Farbe und **speichere den fertigen Figurenlook**."
      }
    },
    "experience": {
      "family": "outfit",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["outfit"],
      "rules": [],
      "prerequisites": [
        {
          "en": "a game with detailed character customization",
          "de": "ein Spiel mit genauer Figurenanpassung",
          "chips": {"en": ["Character creator"], "de": ["Figureneditor"]},
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
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["rpg", "simulation", "sandbox"],
    "customGameOverrideOnly": true
  },
  {
    "id": "create-path-through-garden",
    "moodIds": ["create"],
    "type": "creation",
    "tags": ["building", "decorating"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Garden Path",
        "objective": "Open **a farming or building game with a planted area**. Connect its entrance to one focal plant or object and **finish a walkable path between them**.",
        "gameObjective": "Open **{{game}}**. Connect its entrance to one focal plant or object and **finish a walkable path between them**."
      },
      "de": {
        "name": "Gartenweg",
        "objective": "Starte **ein Farm- oder Bauspiel mit einer bepflanzten Fläche**. Verbinde den Eingang mit einer besonderen Pflanze oder einem Objekt und **stelle einen begehbaren Weg dazwischen fertig**.",
        "gameObjective": "Starte **{{game}}**. Verbinde den Eingang mit einer besonderen Pflanze oder einem Objekt und **stelle einen begehbaren Weg dazwischen fertig**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["building"]
    },
    "experience": {
      "family": "garden-path",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["building", "decorating"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Bepflanzte Fläche und Bauteile für einen begehbaren Weg",
          "en": "Planted area and parts for a walkable path",
          "chips": {"en": ["Path parts"], "de": ["Wegbauteile"]},
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
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["simulation", "cozy", "sandbox"]
  },
  {
    "id": "create-deck-curve",
    "moodIds": ["create"],
    "type": "creation",
    "tags": ["cards"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Deck Curve",
        "objective": "Open **a card game with deck building and visible card costs**. Choose an early, middle, and late cost band and **save a legal deck containing playable options in all three**.",
        "gameObjective": "Open **{{game}}**. Choose an early, middle, and late cost band and **save a legal deck containing playable options in all three**."
      },
      "de": {
        "name": "Deck-Kurve",
        "objective": "Starte **ein Kartenspiel mit Deckbau und sichtbaren Kartenkosten**. Wähle günstige, mittlere und teure Karten und **speichere ein gültiges Deck mit spielbaren Optionen in allen drei Bereichen**.",
        "gameObjective": "Starte **{{game}}**. Wähle günstige, mittlere und teure Karten und **speichere ein gültiges Deck mit spielbaren Optionen in allen drei Bereichen**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["card-decks"],
      "match": "all"
    },
    "experience": {
      "family": "deck-cost-curve",
      "cardMetadata": { "genreIds": ["card"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["cards"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Deckbau mit Kartenkosten und eigenen Karten in mehreren Kostenstufen",
          "en": "Deckbuilding with card costs and owned cards at several costs",
          "chips": {"en": ["Deck builder"], "de": ["Deckbau"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["card"]
  },
  {
    "id": "create-skate-line",
    "moodIds": ["create"],
    "type": "creation",
    "tags": ["skating"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Design a Line",
        "objective": "Open **a skating game with free skate**. Link three nearby obstacles into a route with tricks you choose. **Ride your designed route** and adjust transitions that do not fit yet.",
        "gameObjective": "In **{{game}}** free skate, link three nearby obstacles into a route with tricks you choose. **Ride your designed route** and adjust transitions that do not fit yet."
      },
      "de": {
        "name": "Eine Line entwerfen",
        "objective": "Starte **ein Skatespiel mit Free Skate**. Verbinde drei Hindernisse in der Nähe zu einer Route mit Tricks deiner Wahl. **Fahr deine entworfene Route ab** und pass die Übergänge an, wo sie noch nicht zusammenpassen.",
        "gameObjective": "Verbinde in **{{game}}** im Free Skate drei nahe Hindernisse zu einer Route mit Tricks deiner Wahl. **Fahr deine entworfene Route ab** und pass die Übergänge an, wo sie noch nicht zusammenpassen."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["skate-tricks"],
      "match": "all"
    },
    "experience": {
      "family": "design-skate-route",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["skating"],
      "rules": [],
      "prerequisites": [
        {
          "en": "a skating game with free play",
          "de": "ein Skatespiel mit freiem Modus",
          "chips": {"en": ["Free skate"], "de": ["Freier Skate-Modus"]},
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
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "create-playable-puzzle",
    "rarity": "special",
    "moodIds": ["create"],
    "type": "creation",
    "tags": ["puzzles", "level-editor"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "translations": {
      "en": {
        "name": "Playable Puzzle",
        "objective": "Open **a game with a puzzle or level editor**. Build a tiny puzzle where one object has to be used twice in different ways. **Solve it from the starting state in a test run**, then save the playable version.",
        "gameObjective": "Open **{{game}}**. Build a tiny puzzle where one object has to be used twice in different ways. **Solve it from the starting state in a test run**, then save the playable version."
      },
      "de": {
        "name": "Spielbares Rätsel",
        "objective": "Starte **ein Spiel mit Rätsel- oder Leveleditor**. Baue ein kleines Rätsel, in dem du ein Objekt zweimal auf unterschiedliche Weise benutzen musst. **Löse es im Testlauf aus dem Startzustand** und speichere die spielbare Version.",
        "gameObjective": "Starte **{{game}}**. Baue ein kleines Rätsel, in dem du ein Objekt zweimal auf unterschiedliche Weise benutzen musst. **Löse es im Testlauf aus dem Startzustand** und speichere die spielbare Version."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["level-editors", "puzzles"]
    },
    "experience": {
      "family": "build-playable-puzzle",
      "cardMetadata": { "genreIds": ["puzzle"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["puzzles", "level-editor"],
      "rules": [],
      "prerequisites": [
        {
          "en": "a game with a puzzle or level editor",
          "de": "ein Spiel mit Rätsel- oder Leveleditor",
          "chips": {"en": ["Puzzle editor"], "de": ["Rätsellevel-Editor"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["puzzle"]
  },
  {
    "id": "create-banner-symbol",
    "moodIds": ["create"],
    "type": "creation",
    "tags": ["two-colors"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Banner Symbol",
        "objective": "Open **a game with emblem, banner, or sign customization**. Choose one simple symbol and two colors, then **save or place the finished design**.",
        "gameObjective": "Open **{{game}}**. Choose one simple symbol and two colors, then **save or place the finished design**."
      },
      "de": {
        "name": "Bannerzeichen",
        "objective": "Starte **ein Spiel mit Wappen-, Banner- oder Schildanpassung**. Wähle ein einfaches Zeichen und zwei Farben und **speichere oder platziere das fertige Design**.",
        "gameObjective": "Starte **{{game}}**. Wähle ein einfaches Zeichen und zwei Farben und **speichere oder platziere das fertige Design**."
      }
    },
    "experience": {
      "family": "banner",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": [],
      "rules": ["two-colors"],
      "prerequisites": [
        {
          "en": "a game with emblem, banner, or sign customization",
          "de": "ein Spiel mit Wappen-, Banner- oder Schildanpassung",
          "chips": {"en": ["Emblem editor"], "de": ["Wappeneditor"]},
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
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["rpg", "simulation", "sandbox"],
    "customGameOverrideOnly": true
  },
  {
    "id": "management-one-neighborhood",
    "moodIds": ["create", "relax"],
    "type": "inspiration",
    "tags": ["decorating"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "customGameCompatibility": {
      "capabilityIds": ["decoration"],
      "genreIds": ["management"]
    },
    "translations": {
      "en": {
        "name": "A Neighborhood's Character",
        "objective": "Open a **management or city-building game with decoration tools**. **Give one settled neighborhood a character of its own** using the details and objects already available.",
        "gameObjective": "With decoration tools in **{{game}}**, **give one settled neighborhood a character of its own** using the details and objects already available."
      },
      "de": {
        "name": "Charakter fürs Viertel",
        "objective": "Starte ein **Management- oder Städtebauspiel mit Dekowerkzeugen**. **Gib einem bestehenden Viertel einen eigenen Charakter** mit den Details und Objekten, die schon verfügbar sind.",
        "gameObjective": "**Gib mit den Dekowerkzeugen in {{game}} einem bestehenden Viertel einen eigenen Charakter**. Nutze die Details und Objekte, die schon verfügbar sind."
      }
    },
    "experience": {
      "family": "neighborhood-decoration",
      "cardMetadata": { "genreIds": ["management"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["decorating"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Existing neighborhood; decoration tools",
          "de": "Bestehendes Viertel; Dekowerkzeuge",
          "chips": {"en": ["Decoration tools"], "de": ["Dekowerkzeuge"]},
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
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["management"]
  }
]);
