import { defineQuests } from "./defineQuests";

export const NostalgicQuests = defineQuests([
  {
    "id": "childhood-save",
    "moodIds": ["nostalgic"],
    "type": "inspiration",
    "tags": ["replay"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Childhood Save",
        "objective": "Open **a game you loved as a child**. Visit the first level or place you remember and **play it like you used to**. Progress can wait.",
        "gameObjective": "If **{{game}}** was a childhood favorite, **visit the first level or place you remember and play like you used to**."
      },
      "de": {
        "name": "Spielstand von früher",
        "objective": "Starte **ein Lieblingsspiel aus deiner Kindheit**. Besuche das Level oder den Ort, der dir zuerst einfällt, und **spiele wie damals**. Fortschritt kann warten.",
        "gameObjective": "Wenn **{{game}}** ein Liebling deiner Kindheit war, **besuch dein erstes erinnertes Level oder einen Ort von früher und spiel wie damals**."
      }
    },
    "experience": {
      "family": "revisit",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "open",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "en": "Game and reachable place remembered from childhood",
          "de": "Spiel und erreichbarer Ort aus der Kindheit",
          "chips": {"en": ["Childhood game"], "de": ["Kindheitsspiel"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": [],
    "customGameOverrideOnly": true
  },
  {
    "id": "back-then",
    "moodIds": ["nostalgic"],
    "type": "inspiration",
    "tags": ["replay"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Back Then",
        "objective": "Open **a game tied to an old gaming friend**. **Return to your shared map, mode, or character**, even if you are playing alone today.",
        "gameObjective": "If **{{game}}** reminds you of an old gaming friend, **return to your shared map, mode or character**, even alone today."
      },
      "de": {
        "name": "Weißt du noch",
        "objective": "Starte **ein Spiel, das du früher oft mit jemandem zusammen gespielt hast**. **Kehre zu eurer Multiplayer-Map, eurem Modus oder eurer Figur zurück**, auch wenn du heute allein spielst.",
        "gameObjective": "Wenn **{{game}}** dich an jemanden erinnert, mit dem du früher gespielt hast, **kehr zu eurer Multiplayer-Map, eurem Modus oder eurer Figur zurück**, auch wenn du heute allein spielst."
      }
    },
    "experience": {
      "family": "revisit",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "open",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "en": "Game tied to an old gaming friend; shared map, mode or character",
          "de": "Spiel mit Bezug zu früherem Gaming-Freund; gemeinsame Karte, Modus oder Figur",
          "chips": {"en": ["Old gaming friend"], "de": ["Früherer Gaming-Freund"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": [],
    "customGameOverrideOnly": true
  },
  {
    "id": "screenshot-return",
    "moodIds": ["nostalgic"],
    "type": "objective",
    "tags": ["photography", "replay"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Same Place Again",
        "objective": "Find **an old screenshot from a playable game**. Return to that spot and match its camera angle. **Save a new screenshot beside the old one**.",
        "gameObjective": "With an old screenshot from **{{game}}**, return to its spot and match the camera angle. **Save a new screenshot beside the old one**."
      },
      "de": {
        "name": "Wieder am selben Ort",
        "objective": "Such **einen alten Screenshot aus einem Spiel, das du noch starten kannst**. Geh an denselben Ort und stell den Blickwinkel nach. **Mach ein neues Bild aus derselben Perspektive**.",
        "gameObjective": "Nimm einen alten Screenshot aus **{{game}}** als Vorlage. Geh an denselben Ort und stell den Blickwinkel nach. **Speichere ein neues Bild aus derselben Perspektive**."
      }
    },
    "experience": {
      "family": "recreate-old-screenshot",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["photography"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Old screenshot of a reachable in-game location",
          "de": "Alter Screenshot eines erreichbaren Spielorts",
          "chips": {"en": ["Old screenshot"], "de": ["Alter Screenshot"]},
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
    "gameGenreIds": [],
    "customGameOverrideOnly": true
  },
  {
    "id": "classic-route",
    "moodIds": ["nostalgic"],
    "type": "objective",
    "tags": ["racing", "replay"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "The Old Route",
        "objective": "Open **an older racing game**. Take a car you used to drive to a familiar track and **finish one race**. Your placing does not matter.",
        "gameObjective": "In **{{game}}**, take a car you used to drive onto a familiar track and **finish one full race**. Placement is optional."
      },
      "de": {
        "name": "Die alte Strecke",
        "objective": "Starte **ein älteres Rennspiel**. Nimm einen Wagen von früher auf eine vertraute Strecke und **fahre ein Rennen zu Ende**. Deine Platzierung ist egal.",
        "gameObjective": "**Fahr in {{game}} mit einem Wagen von früher ein ganzes Rennen auf einer vertrauten Strecke**. Die Platzierung ist egal."
      }
    },
    "experience": {
      "family": "racing",
      "cardMetadata": { "genreIds": ["racing"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["racing"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Older racing game; familiar car and track",
          "de": "Älteres Rennspiel; vertrauter Wagen und Strecke",
          "chips": {"en": ["Familiar car", "Track"], "de": ["Vertrauter Wagen", "Strecke"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["racing"],
    "customGameCompatibility": {
      "capabilityIds": ["racing"]
    }
  },
  {
    "id": "return-to-first-character",
    "moodIds": ["nostalgic"],
    "type": "inspiration",
    "tags": ["replay"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Your First Character",
        "objective": "Load **your first character or an early save**. Revisit a place where you learned the game and **play with your old setup**. Change only what you need.",
        "gameObjective": "Load your first character or an early save of **{{game}}**. Revisit where you learned the game and **play with your old setup**."
      },
      "de": {
        "name": "Deine erste Figur",
        "objective": "Lade **deine erste Figur oder einen frühen Spielstand**. Besuche einen Ort, an dem du das Spiel gelernt hast, und **spiele mit deinem alten Setup**. Ändere nur das Nötigste.",
        "gameObjective": "Lade in **{{game}}** deine erste Figur oder einen frühen Spielstand. Besuch den Ort, an dem du das Spiel gelernt hast, und **spiel mit deinem alten Setup**."
      }
    },
    "experience": {
      "family": "revisit",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "open",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "en": "First character or early save still accessible",
          "de": "Erste Figur oder früher Spielstand noch zugänglich",
          "chips": {"en": ["First character"], "de": ["Erste Figur"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": [],
    "customGameOverrideOnly": true
  },
  {
    "id": "replay-a-favorite-mission",
    "moodIds": ["nostalgic"],
    "type": "objective",
    "tags": ["replay"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "That Mission Again",
        "objective": "Open a **game with replayable missions or levels**. Choose an unlocked favorite and **play it through to the end**. Use the route or approach you remember.",
        "gameObjective": "Open **{{game}}**. Choose an unlocked favorite and **play it through to the end**. Use the route or approach you remember."
      },
      "de": {
        "name": "Diese eine Mission",
        "objective": "Starte ein **Spiel mit wiederholbaren Missionen oder Leveln**. Wähle einen freigeschalteten Lieblingsabschnitt und **spiel ihn bis zum Ende**. Nimm den Weg, den du damals genommen hast.",
        "gameObjective": "Starte **{{game}}**. Wähle einen freigeschalteten Lieblingsabschnitt und **spiel ihn bis zum Ende**. Nimm den Weg, den du damals genommen hast."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["missions-or-levels", "replayable-encounters"]
    },
    "experience": {
      "family": "revisit",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
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
    "gameGenreIds": ["adventure", "platformer", "shooter", "rpg", "strategy", "narrative", "stealth"]
  },
  {
    "id": "return-to-old-main",
    "moodIds": ["nostalgic"],
    "type": "objective",
    "tags": ["abilities", "replay"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "translations": {
      "en": {
        "name": "Your Old Main",
        "objective": "Open a **game with selectable characters**. Choose a character you used to play and **finish one full match with them**. Keep your usual mode and accept the result.",
        "gameObjective": "Open **{{game}}**. Choose a character you used to play and **finish one full match with them**. Keep your usual mode and accept the result."
      },
      "de": {
        "name": "Dein alter Main",
        "objective": "Starte ein **Spiel mit wählbaren Figuren**. Wähle eine Figur, die früher dein Main war, und **spiel ein ganzes Match mit ihr**. Bleib bei deinem üblichen Modus, egal wie das Match ausgeht.",
        "gameObjective": "Starte **{{game}}**. Wähle eine Figur, die früher dein Main war, und **spiel ein ganzes Match mit ihr**. Bleib bei deinem üblichen Modus, egal wie das Match ausgeht."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["whole-matches", "character-abilities"]
    },
    "experience": {
      "family": "abilities",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
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
    "gameGenreIds": ["shooter", "rpg", "roguelike", "fighting", "moba"]
  },
  {
    "id": "favorite-weapon-session",
    "moodIds": ["nostalgic", "restless"],
    "type": "inspiration",
    "tags": ["loadout", "replay"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Old Reliable",
        "objective": "Open a **game with selectable weapons**. Equip an old favorite from your save and **bring it back into ordinary fights**. Switch weapons when needed.",
        "gameObjective": "Open **{{game}}**. Equip an old favorite from your save and **bring it back into ordinary fights**. Switch weapons when needed."
      },
      "de": {
        "name": "Altbewährt",
        "objective": "Starte ein **Spiel mit wählbaren Waffen**. Rüste eine Lieblingswaffe aus einem früheren Spielabschnitt aus und **probier sie wieder in normalen Kämpfen aus**. Wechsle bei Bedarf.",
        "gameObjective": "Starte **{{game}}**. Rüste eine Lieblingswaffe aus einem früheren Spielabschnitt aus und **probier sie wieder in normalen Kämpfen aus**. Wechsle bei Bedarf."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["combat-loadouts"]
    },
    "experience": {
      "family": "loadout",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "open",
      "activities": ["loadout"],
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
    "gameGenreIds": ["shooter", "rpg", "roguelike"]
  },
  {
    "id": "stealth-familiar-ground",
    "moodIds": ["nostalgic"],
    "type": "inspiration",
    "tags": ["stealth", "replay"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Old Hiding Places",
        "objective": "Open a **stealth game**. Return to a guarded area you remember. **Revisit your old hiding places and patrol gaps**. Let the route come back as you play.",
        "gameObjective": "Open **{{game}}**. Return to a guarded area you remember. **Revisit your old hiding places and patrol gaps**. Let the route come back as you play."
      },
      "de": {
        "name": "Alte Verstecke",
        "objective": "Starte ein **Schleichspiel**. Kehre in einen bewachten Bereich zurück, den du kennst. **Schleich an den Wachen vorbei und nutze dabei deine alten Verstecke**. Schau, an welche Wege du dich noch erinnerst.",
        "gameObjective": "Starte **{{game}}**. Kehre in einen bewachten Bereich zurück, den du kennst. **Schleich an den Wachen vorbei und nutze dabei deine alten Verstecke**. Schau, an welche Wege du dich noch erinnerst."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["stealth"]
    },
    "experience": {
      "family": "stealth",
      "cardMetadata": { "genreIds": ["stealth"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["stealth"],
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
    "gameGenreIds": ["stealth"]
  },
  {
    "id": "fish-at-home",
    "moodIds": ["nostalgic", "relax"],
    "type": "inspiration",
    "tags": ["fishing", "replay"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Your Fishing Spot",
        "objective": "Open a **game with fishing**. Return to a fishing spot you remember. **Cast with your usual rod and bait** and take the catches as they come.",
        "gameObjective": "Open **{{game}}**. Return to a fishing spot you remember. **Cast with your usual rod and bait** and take the catches as they come."
      },
      "de": {
        "name": "Dein Angelplatz",
        "objective": "Starte ein **Spiel mit Angeln**. Kehre zu deinem vertrauten Angelplatz zurück und **wirf mit deiner üblichen Angel und deinem Köder aus**. Du musst keine bestimmte Fischart fangen.",
        "gameObjective": "Starte **{{game}}**. Kehre zu deinem vertrauten Angelplatz zurück und **wirf mit deiner üblichen Angel und deinem Köder aus**. Du musst keine bestimmte Fischart fangen."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["fishing"]
    },
    "experience": {
      "family": "fishing",
      "cardMetadata": { "genreIds": ["simulation", "cozy"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["fishing"],
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
    "gameGenreIds": ["simulation", "cozy"]
  },
  {
    "id": "drive-a-familiar-district",
    "moodIds": ["nostalgic", "relax"],
    "type": "inspiration",
    "tags": ["driving", "replay"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "The Old Neighborhood",
        "objective": "Open a **game with free driving**. Take an old favorite vehicle to a familiar district or road. **Drive the old routes again** and follow the turns you remember.",
        "gameObjective": "Open **{{game}}**. Take an old favorite vehicle to a familiar district or road. **Drive the old routes again** and follow the turns you remember."
      },
      "de": {
        "name": "Die alte Gegend",
        "objective": "Starte ein **Spiel mit freien Autofahrten**. Fahre mit einem Lieblingsfahrzeug von früher in eine vertraute Gegend. **Fahr noch einmal deine Wege von damals** und folge bekannten Abzweigungen.",
        "gameObjective": "Starte **{{game}}**. Fahre mit einem Lieblingsfahrzeug von früher in eine vertraute Gegend. **Fahr noch einmal deine Wege von damals** und folge bekannten Abzweigungen."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["free-driving"]
    },
    "experience": {
      "family": "driving",
      "cardMetadata": { "genreIds": ["racing"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["driving"],
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
    "gameGenreIds": ["racing"]
  },
  {
    "id": "photo-favorite-place",
    "moodIds": ["nostalgic"],
    "type": "objective",
    "tags": ["photography", "replay"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "A Place You Remember",
        "objective": "Open a **game with photo mode**. Return to a place from earlier in your playthrough. **Photograph the detail you remember most** and save the picture.",
        "gameObjective": "Open **{{game}}**. Return to a place from earlier in your playthrough. **Photograph the detail you remember most** and save the picture."
      },
      "de": {
        "name": "Ein vertrauter Ort",
        "objective": "Starte ein **Spiel mit Fotomodus**. Kehre an einen Ort aus einem früheren Spielabschnitt zurück. **Fotografiere dein einprägsamstes Detail** und speichere das Bild.",
        "gameObjective": "Starte **{{game}}**. Kehre an einen Ort aus einem früheren Spielabschnitt zurück. **Fotografiere dein einprägsamstes Detail** und speichere das Bild."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["photo-mode"]
    },
    "experience": {
      "family": "photography",
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
    "id": "story-revisit-a-voice",
    "moodIds": ["nostalgic", "low-energy"],
    "type": "inspiration",
    "tags": ["story", "replay"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "A Familiar Voice",
        "objective": "Open a **game with replayable dialogue or story entries**. Revisit an old character or story thread. **Read or listen for forgotten details** without chasing the next objective.",
        "gameObjective": "Open **{{game}}**. Revisit an old character or story thread. **Read or listen for forgotten details** without chasing the next objective."
      },
      "de": {
        "name": "Eine vertraute Stimme",
        "objective": "Starte ein **Spiel mit wiederholbaren Dialogen oder Storyeinträgen**. Besuche eine Figur oder einen Erzählstrang von früher wieder. **Achte auf Details, die du vergessen hast**, ohne das nächste Ziel zu verfolgen.",
        "gameObjective": "Starte **{{game}}**. Besuche eine Figur oder einen Erzählstrang von früher wieder. **Achte auf Details, die du vergessen hast**, ohne das nächste Ziel zu verfolgen."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["choices-or-lore"]
    },
    "experience": {
      "family": "story",
      "cardMetadata": { "genreIds": ["narrative"], "playStyleIds": [] },
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
    "gameGenreIds": ["narrative"]
  },
  {
    "id": "companion-usual-patrol",
    "moodIds": ["nostalgic"],
    "type": "inspiration",
    "tags": ["replay"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Your Old Companion",
        "objective": "Open a **game with an animal combat companion you have used before**. Bring that already available companion back into your party. **Return to ordinary encounters together** and use the commands you remember.",
        "gameObjective": "In **{{game}}**: Bring that already available companion back into your party. **Return to ordinary encounters together** and use the commands you remember."
      },
      "de": {
        "name": "Dein alter Begleiter",
        "objective": "Starte ein **Spiel, in dem du früher mit einem Tierbegleiter gekämpft hast**. Hol ihn zurück in dein Team und **setz ihn in normalen Kämpfen ein**. Nutze die Befehle, die du noch kennst.",
        "gameObjective": "In **{{game}}**: Hol deinen früheren Tiergefährten zurück ins Team und **setz ihn in normalen Kämpfen ein**. Nutze die Befehle, die du noch kennst."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["animal-companions"]
    },
    "experience": {
      "family": "revisit",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
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
    "gameGenreIds": ["adventure", "rpg", "shooter"]
  },
  {
    "id": "lane-return-to-your-role",
    "moodIds": ["nostalgic"],
    "type": "inspiration",
    "tags": ["abilities", "lanes", "replay"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "translations": {
      "en": {
        "name": "Back to Your Lane",
        "objective": "Open a **MOBA with a lane and champion you used to play**. Return to a lane and an available champion you once played often, in a familiar mode. **Revisit the matchups and rhythms you remember**, adjusting to changes as you play. Finish each match normally.",
        "gameObjective": "In **{{game}}**: Return to a lane and an available champion you once played often, in a familiar mode. **Revisit the matchups and rhythms you remember**, adjusting to changes as you play. Finish each match normally."
      },
      "de": {
        "name": "Zurück auf deine Lane",
        "objective": "Starte **ein MOBA, in dem dein früherer Champion noch verfügbar ist**. Geh in deinem vertrauten Modus auf die alte Lane und **spiel mit deinem Champion von damals**. Schau, was sich verändert hat, und pass dich beim Spielen an.",
        "gameObjective": "Geh in **{{game}}** in deinem vertrauten Modus auf die alte Lane und **spiel mit deinem Champion von damals**. Schau, was sich verändert hat, und pass dich beim Spielen an."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["lanes-and-towers", "character-abilities"],
      "genreIds": ["moba"]
    },
    "experience": {
      "family": "abilities",
      "cardMetadata": { "genreIds": ["moba"], "playStyleIds": ["co-op"] },
      "finish": "open",
      "activities": ["abilities", "lanes"],
      "rules": [],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "online",
          "people": "others",
          "participation": "co-op",
          "formation": "team"
        }
      ]
    },
    "gameGenreIds": ["moba"]
  },
  {
    "id": "time-trial-old-route",
    "moodIds": ["nostalgic", "restless"],
    "type": "inspiration",
    "tags": ["time-trial", "replay"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "That Fast Route",
        "objective": "Open a **game with a familiar time-trial route**. Return to an unlocked route you once practiced often. **Let your remembered shortcuts and timing come back in motion**, without needing to beat the old record.",
        "gameObjective": "In **{{game}}**: Return to an unlocked route you once practiced often. **Let your remembered shortcuts and timing come back in motion**, without needing to beat the old record."
      },
      "de": {
        "name": "Die schnelle Strecke",
        "objective": "Starte ein **Spiel mit einer vertrauten Zeitstrecke**. Kehre zu einer freigeschalteten Strecke zurück, die du früher oft geübt hast. **Lass dir Abkürzungen und Timing beim Spielen wieder einfallen**, ohne den alten Rekord schlagen zu müssen.",
        "gameObjective": "In **{{game}}**: Kehre zu einer freigeschalteten Strecke zurück, die du früher oft geübt hast. **Lass dir Abkürzungen und Timing beim Spielen wieder einfallen**, ohne den alten Rekord schlagen zu müssen."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["time-trials"]
    },
    "experience": {
      "family": "time-trial",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "open",
      "activities": ["time-trial"],
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
    "gameGenreIds": ["adventure", "platformer", "racing", "sports"]
  },
  {
    "id": "rhythm-old-favorite",
    "moodIds": ["nostalgic", "restless"],
    "type": "objective",
    "tags": ["rhythm", "replay"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Your Old Track",
        "objective": "Open a **rhythm game with a song you remember**. Pick an unlocked song you used to play repeatedly. **Finish it once at the difficulty you use today**, with no need to match an old score.",
        "gameObjective": "In **{{game}}**: Pick an unlocked song you used to play repeatedly. **Finish it once at the difficulty you use today**, with no need to match an old score."
      },
      "de": {
        "name": "Dein Song von damals",
        "objective": "Starte ein **Rhythmusspiel mit einem Song von früher**. Wähle einen freigeschalteten Song, den du früher immer wieder gespielt hast. **Beende ihn einmal auf deinem heutigen Schwierigkeitsgrad**, ohne einen alten Punktestand erreichen zu müssen.",
        "gameObjective": "In **{{game}}**: Wähle einen freigeschalteten Song, den du früher immer wieder gespielt hast. **Beende ihn einmal auf deinem heutigen Schwierigkeitsgrad**, ohne einen alten Punktestand erreichen zu müssen."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["rhythm-play"]
    },
    "experience": {
      "family": "rhythm",
      "cardMetadata": { "genreIds": ["rhythm"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["rhythm"],
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
    "gameGenreIds": ["rhythm"]
  },
  {
    "id": "units-old-army",
    "moodIds": ["nostalgic"],
    "type": "inspiration",
    "tags": ["units", "replay"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Your Old Army",
        "objective": "Open a **strategy game with a faction you used to play**. Return to an available faction you once used regularly. **Play a familiar solo scenario with the units you remember**, using your usual difficulty rather than relearning every alternative.",
        "gameObjective": "In **{{game}}**: Return to an available faction you once used regularly. **Play a familiar solo scenario with the units you remember**, using your usual difficulty rather than relearning every alternative."
      },
      "de": {
        "name": "Deine alte Armee",
        "objective": "Starte ein **Strategiespiel mit einer Fraktion von früher**. Kehre zu einer verfügbaren Fraktion zurück, die du früher regelmäßig gespielt hast. **Spiele ein vertrautes Solo-Szenario mit bekannten Einheiten** auf deinem üblichen Schwierigkeitsgrad, statt jede Alternative neu zu lernen.",
        "gameObjective": "In **{{game}}**: Kehre zu einer verfügbaren Fraktion zurück, die du früher regelmäßig gespielt hast. **Spiele ein vertrautes Solo-Szenario mit bekannten Einheiten** auf deinem üblichen Schwierigkeitsgrad, statt jede Alternative neu zu lernen."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["unit-command"],
      "genreIds": ["strategy"]
    },
    "experience": {
      "family": "units",
      "cardMetadata": { "genreIds": ["strategy"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["units"],
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
    "gameGenreIds": ["strategy"]
  },
  {
    "id": "nostalgic-family-game",
    "moodIds": ["nostalgic"],
    "type": "inspiration",
    "tags": ["replay"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Family Memory",
        "objective": "Open a game connected to a family member or childhood home. **Return to the mode or place you shared** and let its sounds and routines bring back the person or room around it.",
        "gameObjective": "If {{game}} reminds you of a family member or childhood home, **return to the mode or place from that time**. Let its sounds and routines bring back the memories."
      },
      "de": {
        "name": "Familienerinnerung",
        "objective": "Starte ein Spiel mit Verbindung zu einem Familienmitglied oder deinem früheren Zuhause. **Kehre zu dem Modus oder Ort zurück**, den du mit der Person verbindest. Schau, woran dich die Geräusche und vertrauten Abläufe erinnern.",
        "gameObjective": "Wenn {{game}} dich an ein Familienmitglied oder dein früheres Zuhause erinnert, **kehr zu dem Modus oder Ort von damals zurück**. Schau, was die Geräusche und vertrauten Abläufe wieder wachrufen."
      }
    },
    "experience": {
      "family": "revisit",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "open",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "en": "a game connected to a family member or childhood home",
          "de": "ein Spiel mit Verbindung zu einem Familienmitglied oder deinem früheren Zuhause",
          "chips": {"en": ["Childhood game"], "de": ["Kindheitsspiel"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": [],
    "customGameOverrideOnly": true
  },
  {
    "id": "nostalgic-save-date",
    "moodIds": ["nostalgic"],
    "type": "objective",
    "tags": ["current-save", "replay"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Save-Date Snapshot",
        "objective": "Open **a game with an old save whose date you recognize**. Load it without overwriting, inspect the location and equipment, and **save one screenshot of the unchanged scene**.",
        "gameObjective": "Open **{{game}}**. Load it without overwriting, inspect the location and equipment, and **save one screenshot of the unchanged scene**."
      },
      "de": {
        "name": "Alter Spielstand",
        "objective": "Starte **ein Spiel mit einem alten Spielstand, dessen Datum dir etwas sagt**. Lade den alten Spielstand, ohne ihn zu überschreiben. Schau dir Ort und Ausrüstung an und **mach einen Screenshot, bevor du etwas veränderst**.",
        "gameObjective": "Starte **{{game}}**. Lade den alten Spielstand, ohne ihn zu überschreiben. Schau dir Ort und Ausrüstung an und **mach einen Screenshot, bevor du etwas veränderst**."
      }
    },
    "experience": {
      "family": "story",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "en": "Existing save",
          "de": "Vorhandener Spielstand",
          "chips": {"en": ["Existing save"], "de": ["Spielstand"]},
          "critical": true
        },
        {
          "en": "Recognizable old dated save; load without overwriting",
          "de": "Alter datierter Spielstand mit Wiedererkennungswert; ohne Überschreiben laden",
          "chips": {"en": ["Old save"], "de": ["Alter Spielstand"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": [],
    "customGameOverrideOnly": true
  },
  {
    "id": "nostalgic-first-rival",
    "moodIds": ["nostalgic"],
    "type": "objective",
    "tags": ["replay", "one-round"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "First Rival",
        "objective": "Open **a game with a rival, CPU team, or opponent you remember**. Choose that opponent under familiar rules and **finish one round, race, or match against them**.",
        "gameObjective": "Open **{{game}}**. Choose that opponent under familiar rules and **finish one round, race, or match against them**."
      },
      "de": {
        "name": "Erster Rivale",
        "objective": "Starte **ein Spiel mit einem Gegner oder CPU-Team, an das du dich von früher erinnerst**. Wähle diesen Gegner mit vertrauten Regeln und **beende eine Runde, ein Rennen oder ein Match gegen ihn**.",
        "gameObjective": "Starte **{{game}}**. Wähle diesen Gegner mit vertrauten Regeln und **beende eine Runde, ein Rennen oder ein Match gegen ihn**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["rounds-or-matches"],
      "match": "all"
    },
    "experience": {
      "family": "revisit",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["one-round"],
      "prerequisites": [
        {
          "en": "a game with a rival, CPU team, or opponent you remember",
          "de": "ein Spiel mit einem Gegner oder CPU-Team, an das du dich von früher erinnerst",
          "chips": {"en": ["Old rival"], "de": ["Früherer Gegner"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["fighting", "sports", "racing"]
  },
  {
    "id": "nostalgic-opening-side-path",
    "moodIds": ["nostalgic"],
    "type": "objective",
    "tags": ["replay", "exploration"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Opening Side Path",
        "objective": "Open **a game whose opening area you remember**. Return to the opening area, take the side path you rarely used, and **reach its first landmark or room**.",
        "gameObjective": "Open **{{game}}**. Return to the opening area, take the side path you rarely used, and **reach its first landmark or room**."
      },
      "de": {
        "name": "Seitenweg vom Anfang",
        "objective": "Starte **ein Spiel mit einem vertrauten Anfangsgebiet**. Kehre ins Anfangsgebiet zurück, nimm den selten genutzten Seitenweg und **erreiche seine erste Landmarke oder seinen ersten Raum**.",
        "gameObjective": "Starte **{{game}}**. Kehre ins Anfangsgebiet zurück, nimm den selten genutzten Seitenweg und **erreiche seine erste Landmarke oder seinen ersten Raum**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["open-world", "missions-or-levels"],
      "match": "all"
    },
    "experience": {
      "family": "exploration",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["exploration"],
      "rules": [],
      "prerequisites": [
        {
          "en": "a game whose opening area you remember",
          "de": "ein Spiel mit einem vertrauten Anfangsgebiet",
          "chips": {"en": ["Familiar opening"], "de": ["Vertrauter Spielstart"]},
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
    "gameGenreIds": ["adventure", "rpg", "platformer"]
  },
  {
    "id": "nostalgic-soundtrack-place",
    "moodIds": ["nostalgic"],
    "type": "inspiration",
    "tags": ["story", "replay"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Soundtrack Place",
        "objective": "Open a game area remembered for its music. Return to that place and **spend time moving through it with the game audio clear**. No objective needs to interrupt the music.",
        "gameObjective": "Open {{game}}. Return to that place and **spend time moving through it with the game audio clear**. No objective needs to interrupt the music."
      },
      "de": {
        "name": "Ort aus dem Soundtrack",
        "objective": "Starte einen Spielort, dessen Musik dir im Kopf geblieben ist. Kehre an den Ort zurück und **hör dir die Musik dort in Ruhe an**, während du umhergehst. Du musst kein Ziel verfolgen.",
        "gameObjective": "Starte {{game}}. Kehre an den Ort zurück und **hör dir die Musik dort in Ruhe an**, während du umhergehst. Du musst kein Ziel verfolgen."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["open-world"],
      "match": "all"
    },
    "experience": {
      "family": "story",
      "cardMetadata": { "genreIds": ["adventure", "rpg"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "a game area remembered for its music",
          "de": "einen Spielort, dessen Musik dir im Kopf geblieben ist",
          "chips": {"en": ["Familiar music"], "de": ["Vertraute Musik"]},
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
    "gameGenreIds": ["adventure", "rpg"]
  },
  {
    "id": "nostalgic-old-build-signature",
    "moodIds": ["nostalgic"],
    "type": "objective",
    "tags": ["building", "replay"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Old Building Habit",
        "objective": "Open **a building game where you remember a signature design habit**. Use that old roof, doorway, window, or floor pattern and **add one finished example to the current world**.",
        "gameObjective": "Open **{{game}}**. Use that old roof, doorway, window, or floor pattern and **add one finished example to the current world**."
      },
      "de": {
        "name": "Alte Baugewohnheit",
        "objective": "Starte **ein Bauspiel, in dem du früher immer ähnlich gebaut hast**. Bau noch einmal ein Dach, eine Tür, ein Fenster oder einen Boden in deinem Stil von damals. **Füg dieses fertige Stück deiner aktuellen Welt hinzu**.",
        "gameObjective": "Starte **{{game}}**. Bau noch einmal ein Dach, eine Tür, ein Fenster oder einen Boden in deinem Stil von damals. **Füg dieses fertige Stück deiner aktuellen Welt hinzu**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["building"],
      "match": "all"
    },
    "experience": {
      "family": "recreate-building-detail",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["building"],
      "rules": [],
      "prerequisites": [
        {
          "en": "a building game where you remember a signature design habit",
          "de": "ein Bauspiel, in dem du früher immer ähnlich gebaut hast",
          "chips": {"en": ["Old building style"], "de": ["Früherer Baustil"]},
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
    "id": "nostalgic-retired-loadout",
    "moodIds": ["nostalgic"],
    "type": "objective",
    "tags": ["loadout", "replay"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Retired Loadout",
        "objective": "Open a **game where your old loadout is still available**. Equip it and **finish one familiar mission or standalone round**.",
        "gameObjective": "Equip your still-available old loadout in **{{game}}** and **finish one familiar mission or standalone round with it**."
      },
      "de": {
        "name": "Ausrüstung von früher",
        "objective": "Starte ein **Spiel, in dem deine alte Ausrüstung noch verfügbar ist**. Rüste sie aus und **beende eine vertraute Mission oder eigenständige Runde**.",
        "gameObjective": "Rüste in **{{game}}** dein noch verfügbares Loadout von früher aus und **beende damit eine vertraute Mission oder eigenständige Runde**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["combat-loadouts"],
      "requirement": {
        "all": [
          "combat-loadouts",
          {
            "any": ["missions-or-levels", "rounds-or-matches"]
          }
        ]
      }
    },
    "experience": {
      "family": "loadout",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["loadout"],
      "rules": [],
      "prerequisites": [
        {
          "en": "a game where your former equipment setup is still available",
          "de": "ein Spiel, in dem deine frühere Ausrüstung noch verfügbar ist",
          "chips": {"en": ["Old equipment"], "de": ["Frühere Ausrüstung"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "rpg", "roguelike"]
  },
  {
    "id": "nostalgic-home-hub",
    "moodIds": ["nostalgic"],
    "type": "inspiration",
    "tags": ["replay", "free-roam"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Old Home Hub",
        "objective": "Open a game with a hub you once knew well. Walk through it without opening the objective list. **Visit the rooms, vendors, or corners** that used to anchor your sessions.",
        "gameObjective": "In {{game}}, walk through a hub you once knew well. **Revisit the rooms, vendors or corners** that were part of your old sessions."
      },
      "de": {
        "name": "Alter Heimat-Hub",
        "objective": "Starte ein Spiel mit einem Hub, den du früher gut kanntest. Geh hindurch, ohne die Zielliste zu öffnen. **Besuche Räume, Händler oder Ecken**, die früher deine Sessions geprägt haben.",
        "gameObjective": "Geh in {{game}} durch einen Hub, den du früher gut kanntest. **Besuche die Räume, Händler oder Ecken**, die zu deinen alten Sessions gehörten."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["open-world"],
      "match": "all"
    },
    "experience": {
      "family": "free-roam",
      "cardMetadata": { "genreIds": ["adventure", "rpg"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["free-roam"],
      "rules": [],
      "prerequisites": [
        {
          "en": "a game with a hub you once knew well",
          "de": "ein Spiel mit einem Hub, den du früher gut kanntest",
          "chips": {"en": ["Familiar hub"], "de": ["Vertrauter Hub"]},
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
    "gameGenreIds": ["adventure", "rpg"]
  },
  {
    "id": "nostalgic-loading-screen-place",
    "rarity": "special",
    "moodIds": ["nostalgic"],
    "type": "objective",
    "tags": ["photography", "replay"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Loading-Screen View",
        "objective": "Open **a game whose loading screen shows a reachable location**. Use the loading-screen image as your reference. Find its viewpoint, line up the same landmark and camera angle, and **save your own version of that view**.",
        "gameObjective": "Open **{{game}}**. Use the loading-screen image as your reference. Find its viewpoint, line up the same landmark and camera angle, and **save your own version of that view**."
      },
      "de": {
        "name": "Ansicht vom Ladebild",
        "objective": "Starte **ein Spiel, dessen Ladebildschirm einen erreichbaren Ort zeigt**. Nutze das Ladebild als Vorlage. Finde seinen Aussichtspunkt, richte Landmarke und Kamerawinkel wie auf dem Bild aus und **speichere deine eigene Version dieser Ansicht**.",
        "gameObjective": "Starte **{{game}}**. Nutze das Ladebild als Vorlage. Finde seinen Aussichtspunkt, richte Landmarke und Kamerawinkel wie auf dem Bild aus und **speichere deine eigene Version dieser Ansicht**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["photo-mode", "open-world"],
      "match": "all"
    },
    "experience": {
      "family": "photography",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["photography"],
      "rules": [],
      "prerequisites": [
        {
          "en": "a game whose loading screen shows a reachable location",
          "de": "ein Spiel, dessen Ladebildschirm einen erreichbaren Ort zeigt",
          "chips": {"en": ["Loading-screen place"], "de": ["Ladebildschirm-Ort"]},
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
    "id": "nostalgic-original-controls",
    "moodIds": ["nostalgic"],
    "type": "objective",
    "tags": ["replay"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Original Controls",
        "objective": "Open **a familiar game with its original control preset**. Select that preset and **finish one familiar level or round**. Restore your current settings afterward if you prefer.",
        "gameObjective": "Open **{{game}}**. Select that preset and **finish one familiar level or round**. Restore your current settings afterward if you prefer."
      },
      "de": {
        "name": "Alte Steuerung",
        "objective": "Starte **ein vertrautes Spiel mit ursprünglicher Steuerungsvorlage**. Wähle diese Vorlage und **beende ein vertrautes Level oder eine Runde**. Stelle danach bei Bedarf deine aktuellen Einstellungen wieder her.",
        "gameObjective": "Starte **{{game}}**. Wähle diese Vorlage und **beende ein vertrautes Level oder eine Runde**. Stelle danach bei Bedarf deine aktuellen Einstellungen wieder her."
      }
    },
    "experience": {
      "family": "revisit",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "en": "a familiar game with its original control preset",
          "de": "ein vertrautes Spiel mit ursprünglicher Steuerungsvorlage",
          "chips": {"en": ["Original controls"], "de": ["Ursprüngliche Steuerung"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "platformer", "shooter"],
    "customGameOverrideOnly": true
  },
  {
    "id": "nostalgic-legacy-outfit",
    "moodIds": ["nostalgic"],
    "type": "inspiration",
    "tags": ["outfit", "replay"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Legacy Outfit",
        "objective": "Open a **game with a look you used to wear**. Put it on and **return to a familiar part of the game**.",
        "gameObjective": "In **{{game}}**, put on a look you used to wear and **return to a familiar place with it**."
      },
      "de": {
        "name": "Klassisches Outfit",
        "objective": "Starte ein **Spiel mit einem Look, den du früher getragen hast**. Zieh ihn an und **kehr an einen vertrauten Ort im Spiel zurück**.",
        "gameObjective": "Zieh in **{{game}}** einen Look an, den du früher getragen hast, und **kehr damit an einen vertrauten Ort zurück**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["customization"]
    },
    "experience": {
      "family": "old-outfit-revisit",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "open",
      "activities": ["outfit"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Owned look you used to wear",
          "de": "Vorhandener Look von früher",
          "chips": {"en": ["Old outfit"], "de": ["Früherer Look"]},
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
    "gameGenreIds": ["adventure", "rpg", "shooter"]
  },
  {
    "id": "nostalgic-revisit-old-choice",
    "moodIds": ["nostalgic"],
    "type": "inspiration",
    "tags": ["story", "replay"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Old Choice",
        "objective": "Open a story game with a remembered decision point. Replay or revisit that scene and **listen to the alternatives you once ignored**. Choose only if the game naturally asks again.",
        "gameObjective": "Open {{game}}. Replay or revisit that scene and **listen to the alternatives you once ignored**. Choose only if the game naturally asks again."
      },
      "de": {
        "name": "Alte Entscheidung",
        "objective": "Starte ein Storyspiel mit einem erinnerten Entscheidungspunkt. Spiele oder besuche diese Szene erneut und **hör dir die früher ignorierten Alternativen an**. Entscheide nur, wenn das Spiel wieder danach fragt.",
        "gameObjective": "Starte {{game}}. Spiele oder besuche diese Szene erneut und **hör dir die früher ignorierten Alternativen an**. Entscheide nur, wenn das Spiel wieder danach fragt."
      }
    },
    "experience": {
      "family": "story",
      "cardMetadata": { "genreIds": ["narrative", "rpg"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Erinnerte Entscheidungsszene, die du erneut spielen kannst",
          "en": "Remembered decision scene you can replay",
          "chips": {"en": ["Replayable choice"], "de": ["Dialogwahl"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["narrative", "rpg"],
    "customGameOverrideOnly": true
  }
]);
