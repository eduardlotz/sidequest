import { defineQuests } from "../defineQuests";

export const GamesCyberpunk2077Quests = defineQuests([
  {
    "id": "cyberpunk-2077-borrowed-eyes",
    "rarity": "special",
    "moodIds": ["challenge", "focused"],
    "type": "challenge",
    "tags": ["stealth", "no-kills", "no-detection"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "universal": false,
    "curated": {
      "gameId": "cyberpunk-2077",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Borrowed Eyes",
        "objective": "With a cyberdeck in **Cyberpunk 2077**, choose an open theft gig with cameras. Scout through their feeds and distract guards through devices. **Steal the target and leave unseen without attacking a guard**. One gig attempt is enough.",
        "gameObjective": "With a cyberdeck in **Cyberpunk 2077**, choose an open theft gig with cameras. Scout through their feeds and distract guards through devices. **Steal the target and leave unseen without attacking a guard**. One gig attempt is enough."
      },
      "de": {
        "name": "Fremde Augen",
        "objective": "Wähle in **Cyberpunk 2077** mit Cyberdeck einen offenen Diebstahl-Gig mit Kameras. Späh deinen Weg über ihre Bilder aus und lenk Wachen über Geräte ab. **Stiehl das Ziel und verschwinde ungesehen, ohne eine Wache anzugreifen**. Ein Gig-Versuch genügt.",
        "gameObjective": "Wähle in **Cyberpunk 2077** mit Cyberdeck einen offenen Diebstahl-Gig mit Kameras. Späh deinen Weg über ihre Bilder aus und lenk Wachen über Geräte ab. **Stiehl das Ziel und verschwinde ungesehen, ohne eine Wache anzugreifen**. Ein Gig-Versuch genügt."
      }
    },
    "experience": {
      "family": "camera-heist",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["stealth"],
      "rules": ["no-kills", "no-detection"],
      "prerequisites": [
        {
          "en": "Cyberdeck; open theft gig with cameras",
          "de": "Cyberdeck; offener Diebstahl-Gig mit Kameras",
          "chips": {"en": ["Cyberdeck", "Theft gig"], "de": ["Cyberdeck", "Diebstahl-Gig"]},
          "critical": true
        }
      ],
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
    "id": "cyberpunk-2077-metro-postcards",
    "moodIds": ["relax", "explore"],
    "type": "inspiration",
    "tags": ["free-roam"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "cyberpunk-2077",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Metro Postcards",
        "objective": "With an NCART pass in Cyberpunk 2077, **ride to a station you rarely use** and wander the streets around it. Let that stop show you a different side of Night City.",
        "gameObjective": "With an NCART pass in Cyberpunk 2077, **ride to a station you rarely use** and wander the streets around it. Let that stop show you a different side of Night City."
      },
      "de": {
        "name": "Postkarte aus der Metro",
        "objective": "Fahr in Cyberpunk 2077 mit deinem NCART-Pass **zu einer selten besuchten Station** und schlendere durch die Straßen ringsum. Entdecke Night City von dieser Haltestelle aus.",
        "gameObjective": "Fahr in Cyberpunk 2077 mit deinem NCART-Pass **zu einer selten besuchten Station** und schlendere durch die Straßen ringsum. Entdecke Night City von dieser Haltestelle aus."
      }
    },
    "experience": {
      "family": "city-wandering",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "open",
      "activities": ["free-roam"],
      "rules": [],
      "prerequisites": [
        {
          "en": "NCART pass; update 2.1+",
          "de": "NCART-Pass; Update 2.1+",
          "chips": {"en": ["NCART pass", "Update 2.1+"], "de": ["NCART-Pass", "Update 2.1+"]},
          "critical": true
        }
      ],
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
    "id": "cyberpunk-2077-night-city-uniform",
    "moodIds": ["create", "relax"],
    "type": "creation",
    "tags": ["outfit"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "cyberpunk-2077",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "District Uniform",
        "objective": "In **Cyberpunk 2077**, borrow a color or style from the people in your district. **Create and save an outfit from your wardrobe, then wear it there**.",
        "gameObjective": "In **Cyberpunk 2077**, borrow a color or style from the people in your district. **Create and save an outfit from your wardrobe, then wear it there**."
      },
      "de": {
        "name": "Outfit fürs Viertel",
        "objective": "Übernimm in **Cyberpunk 2077** eine Farbe oder einen Stil von den Leuten in deinem Viertel. **Stell daraus einen Look mit deiner Garderobe zusammen, speichere ihn und trag ihn dort**.",
        "gameObjective": "Übernimm in **Cyberpunk 2077** eine Farbe oder einen Stil von den Leuten in deinem Viertel. **Stell daraus einen Look mit deiner Garderobe zusammen, speichere ihn und trag ihn dort**."
      }
    },
    "experience": {
      "family": "place-themed-outfit",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["outfit"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Wardrobe access; owned clothing",
          "de": "Zugang zur Garderobe; eigene Kleidung",
          "chips": {"en": ["Wardrobe"], "de": ["Garderobe"]},
          "critical": true
        }
      ],
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
    "id": "cyberpunk-2077-reginas-patient",
    "moodIds": ["progress", "focused"],
    "type": "objective",
    "tags": ["no-kills", "story"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "universal": false,
    "curated": {
      "gameId": "cyberpunk-2077",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Alive for Regina",
        "objective": "Track an unfinished Cyberpsycho Sighting in **Cyberpunk 2077**. Stop attacking as soon as the target falls, read the clues, and **send Regina the closing report with the target alive**.",
        "gameObjective": "Track an unfinished Cyberpsycho Sighting in **Cyberpunk 2077**. Stop attacking as soon as the target falls, read the clues, and **send Regina the closing report with the target alive**."
      },
      "de": {
        "name": "Lebend für Regina",
        "objective": "Verfolge in **Cyberpunk 2077** eine offene Cyberpsycho-Sichtung. Hör auf anzugreifen, sobald das Ziel fällt, lies die Hinweise und **sende Regina den Abschlussbericht, während das Ziel noch lebt**.",
        "gameObjective": "Verfolge in **Cyberpunk 2077** eine offene Cyberpsycho-Sichtung. Hör auf anzugreifen, sobald das Ziel fällt, lies die Hinweise und **sende Regina den Abschlussbericht, während das Ziel noch lebt**."
      }
    },
    "experience": {
      "family": "cyberpsycho-investigation",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["story"],
      "rules": ["no-kills"],
      "prerequisites": [
        {
          "en": "Unfinished Cyberpsycho Sighting",
          "de": "Offene Cyberpsycho-Sichtung",
          "chips": {"en": ["Cyberpsycho Sighting"], "de": ["Cyberpsycho-Sichtung"]},
          "critical": true
        }
      ],
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
    "id": "cyberpunk-2077-device-decoy",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["stealth", "new-approach"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "cyberpunk-2077",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Wrong Way",
        "objective": "With a cyberdeck in **Cyberpunk 2077**, find a guard watching a passage beside a hackable device. Trigger a distraction and **use the opening to pass unseen**, without hacking or attacking the guard.",
        "gameObjective": "With a cyberdeck in **Cyberpunk 2077**, find a guard watching a passage beside a hackable device. Trigger a distraction and **use the opening to pass unseen**, without hacking or attacking the guard."
      },
      "de": {
        "name": "Falsche Richtung",
        "objective": "Such in **Cyberpunk 2077** mit Cyberdeck eine Wache neben einem hackbaren Gerät. Lenk sie über das Gerät ab und **schleich vorbei, während sie abgelenkt ist**. Hack die Wache selbst nicht und greif sie nicht an.",
        "gameObjective": "Such in **Cyberpunk 2077** mit Cyberdeck eine Wache neben einem hackbaren Gerät. Lenk sie über das Gerät ab und **schleich vorbei, während sie abgelenkt ist**. Hack die Wache selbst nicht und greif sie nicht an."
      }
    },
    "experience": {
      "family": "device-distraction",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["stealth"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Cyberdeck; hackable distraction device",
          "de": "Cyberdeck; hackbares Ablenkungsgerät",
          "chips": {"en": ["Cyberdeck", "Hackable device"], "de": ["Cyberdeck", "Hackbares Gerät"]},
          "critical": true
        }
      ],
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
    "id": "cyberpunk-2077-air-dash-route",
    "moodIds": ["restless", "challenge"],
    "type": "challenge",
    "tags": ["traversal", "three-attempts"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "cyberpunk-2077",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "One Rooftop Gap",
        "objective": "With Air Dash unlocked in **Cyberpunk 2077**, choose one rooftop gap whose landing side you can see and reach safely. **Air-dash across it and land on the far roof**. Stop after success or three attempts.",
        "gameObjective": "With Air Dash unlocked in **Cyberpunk 2077**, choose one rooftop gap whose landing side you can see and reach safely. **Air-dash across it and land on the far roof**. Stop after success or three attempts."
      },
      "de": {
        "name": "Eine Dachlücke",
        "objective": "Wähle in **Cyberpunk 2077** mit freigeschaltetem Luftsprint eine Dachlücke, deren sichere Landefläche du sehen und erreichen kannst. **Sprinte darüber und lande auf dem anderen Dach**. Nach Erfolg oder drei Versuchen ist Schluss.",
        "gameObjective": "Wähle in **Cyberpunk 2077** mit freigeschaltetem Luftsprint eine Dachlücke, deren sichere Landefläche du sehen und erreichen kannst. **Sprinte darüber und lande auf dem anderen Dach**. Nach Erfolg oder drei Versuchen ist Schluss."
      }
    },
    "experience": {
      "family": "air-dash",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["traversal"],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Air Dash unlocked",
          "de": "Luftsprint freigeschaltet",
          "chips": {"en": ["Air Dash"], "de": ["Luftsprint"]},
          "critical": true
        }
      ],
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
    "id": "cyberpunk-2077-radioport-walk",
    "moodIds": ["relax", "low-energy"],
    "type": "inspiration",
    "tags": ["on-foot"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "cyberpunk-2077",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Your Own Soundtrack",
        "objective": "With update 2.1 or later in Cyberpunk 2077, turn on Radioport and wander the streets around Japantown with a station you rarely hear. **Let the music set the route**.",
        "gameObjective": "With update 2.1 or later in Cyberpunk 2077, turn on Radioport and wander the streets around Japantown with a station you rarely hear. **Let the music set the route**."
      },
      "de": {
        "name": "Dein Soundtrack",
        "objective": "Schalte in Cyberpunk 2077 ab Update 2.1 das Radioport ein und schlendere mit einem selten gehörten Sender durch Japantown. **Lass die Musik deinen Weg bestimmen**.",
        "gameObjective": "Schalte in Cyberpunk 2077 ab Update 2.1 das Radioport ein und schlendere mit einem selten gehörten Sender durch Japantown. **Lass die Musik deinen Weg bestimmen**."
      }
    },
    "experience": {
      "family": "city-wandering",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "open",
      "activities": [],
      "rules": ["on-foot"],
      "prerequisites": [
        {
          "en": "Update 2.1+",
          "de": "Update 2.1+",
          "chips": {"en": ["Update 2.1+"], "de": ["Update 2.1+"]},
          "critical": true
        }
      ],
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
    "id": "cyberpunk-2077-apartment-hangout",
    "moodIds": ["relax", "nostalgic"],
    "type": "inspiration",
    "tags": ["dialogue"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "cyberpunk-2077",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Stay In Tonight",
        "objective": "After finishing a romance in Cyberpunk 2077 on update 2.1 or later, invite your partner to an apartment. **Spend the evening together away from fixer calls**.",
        "gameObjective": "After finishing a romance in Cyberpunk 2077 on update 2.1 or later, invite your partner to an apartment. **Spend the evening together away from fixer calls**."
      },
      "de": {
        "name": "Heute zu Hause",
        "objective": "Lade in Cyberpunk 2077 ab Update 2.1 nach einer abgeschlossenen Romanze deinen Partner oder deine Partnerin in eine Wohnung ein. **Verbring dort einen Abend abseits der Fixer-Aufträge**.",
        "gameObjective": "Lade in Cyberpunk 2077 ab Update 2.1 nach einer abgeschlossenen Romanze deinen Partner oder deine Partnerin in eine Wohnung ein. **Verbring dort einen Abend abseits der Fixer-Aufträge**."
      }
    },
    "experience": {
      "family": "partner-hangout",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "open",
      "activities": ["dialogue"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Completed romance; update 2.1+",
          "de": "Abgeschlossene Romanze; Update 2.1+",
          "chips": {"en": ["Romance", "Update 2.1+"], "de": ["Abgeschlossene Romanze", "Update 2.1+"]},
          "critical": true
        }
      ],
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
    "id": "cyberpunk-2077-scenic-binoculars",
    "moodIds": ["explore", "low-energy"],
    "type": "inspiration",
    "tags": ["exploration"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "cyberpunk-2077",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "City Through Glass",
        "objective": "On update 2.1 or later in Cyberpunk 2077, seek out sightseeing binoculars at a scenic spot. **Look across the skyline** and linger over the districts you normally drive past.",
        "gameObjective": "On update 2.1 or later in Cyberpunk 2077, seek out sightseeing binoculars at a scenic spot. **Look across the skyline** and linger over the districts you normally drive past."
      },
      "de": {
        "name": "Stadt durchs Fernglas",
        "objective": "Such in Cyberpunk 2077 ab Update 2.1 ein Aussichtsfernglas an einem Aussichtspunkt. **Schau über die Skyline** und lass den Blick über Viertel wandern, durch die du sonst nur fährst.",
        "gameObjective": "Such in Cyberpunk 2077 ab Update 2.1 ein Aussichtsfernglas an einem Aussichtspunkt. **Schau über die Skyline** und lass den Blick über Viertel wandern, durch die du sonst nur fährst."
      }
    },
    "experience": {
      "family": "skyline-viewing",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "open",
      "activities": ["exploration"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Update 2.1+",
          "de": "Update 2.1+",
          "chips": {"en": ["Update 2.1+"], "de": ["Update 2.1+"]},
          "critical": true
        }
      ],
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
    "id": "cyberpunk-2077-wheelie-stretch",
    "moodIds": ["restless", "challenge"],
    "type": "challenge",
    "tags": ["driving", "three-attempts"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "cyberpunk-2077",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Front Wheel Up",
        "objective": "With update 2.1 or later in **Cyberpunk 2077**, take a motorcycle to an empty straight road. **Keep a wheelie going between two nearby lampposts**. Stop after success or three runs.",
        "gameObjective": "With update 2.1 or later in **Cyberpunk 2077**, take a motorcycle to an empty straight road. **Keep a wheelie going between two nearby lampposts**. Stop after success or three runs."
      },
      "de": {
        "name": "Vorderrad hoch",
        "objective": "Fahr in **Cyberpunk 2077** ab Update 2.1 mit einem Motorrad auf eine leere, gerade Straße. **Fahr auf dem Hinterrad von einer Straßenlaterne zur nächsten**. Hör nach dem Erfolg oder drei Fahrten auf.",
        "gameObjective": "Fahr in **Cyberpunk 2077** ab Update 2.1 mit einem Motorrad auf eine leere, gerade Straße. **Fahr auf dem Hinterrad von einer Straßenlaterne zur nächsten**. Hör nach dem Erfolg oder drei Fahrten auf."
      }
    },
    "experience": {
      "family": "motorcycle-stunt",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["driving"],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Motorcycle; update 2.1+",
          "de": "Motorrad; Update 2.1+",
          "chips": {"en": ["Motorcycle", "Update 2.1+"], "de": ["Motorrad", "Update 2.1+"]},
          "critical": true
        }
      ],
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
    "id": "cyberpunk-2077-repeat-race-peaceful",
    "moodIds": ["focused", "challenge"],
    "type": "challenge",
    "tags": ["racing"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "cyberpunk-2077",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Race, Don’t Shoot",
        "objective": "After The Beast in Me in **Cyberpunk 2077** on update 2.1 or later, enter a repeatable street race. **Finish in the top three without shooting or quickhacking rivals**. Stop after one race.",
        "gameObjective": "After The Beast in Me in **Cyberpunk 2077** on update 2.1 or later, enter a repeatable street race. **Finish in the top three without shooting or quickhacking rivals**. Stop after one race."
      },
      "de": {
        "name": "Fahren statt schießen",
        "objective": "Starte in **Cyberpunk 2077** ab Update 2.1 nach The Beast in Me ein wiederholbares Straßenrennen. **Komm unter die ersten drei, ohne auf Rivalen zu schießen oder sie zu hacken**. Ein Rennen.",
        "gameObjective": "Starte in **Cyberpunk 2077** ab Update 2.1 nach The Beast in Me ein wiederholbares Straßenrennen. **Komm unter die ersten drei, ohne auf Rivalen zu schießen oder sie zu hacken**. Ein Rennen."
      }
    },
    "experience": {
      "family": "street-racing",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["racing"],
      "rules": [],
      "prerequisites": [
        {
          "en": "The Beast in Me completed; update 2.1+",
          "de": "The Beast in Me abgeschlossen; Update 2.1+",
          "chips": {"en": ["The Beast in Me", "Update 2.1+"], "de": ["The Beast in Me", "Update 2.1+"]},
          "critical": true
        }
      ],
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
    "id": "cyberpunk-2077-twintone-borrowed-colors",
    "moodIds": ["create"],
    "type": "creation",
    "tags": ["driving"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "cyberpunk-2077",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Borrowed Paint",
        "objective": "With update 2.2 or later in **Cyberpunk 2077**, scan a compatible parked car’s paint using TWINTONE. **Buy that scheme and apply it to a compatible car you own**.",
        "gameObjective": "With update 2.2 or later in **Cyberpunk 2077**, scan a compatible parked car’s paint using TWINTONE. **Buy that scheme and apply it to a compatible car you own**."
      },
      "de": {
        "name": "Geliehener Lack",
        "objective": "Scanne in **Cyberpunk 2077** ab Update 2.2 mit TWINTONE den Lack eines passenden geparkten Autos. **Kauf das Farbschema und wende es auf ein kompatibles eigenes Auto an**.",
        "gameObjective": "Scanne in **Cyberpunk 2077** ab Update 2.2 mit TWINTONE den Lack eines passenden geparkten Autos. **Kauf das Farbschema und wende es auf ein kompatibles eigenes Auto an**."
      }
    },
    "experience": {
      "family": "vehicle-paint",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["driving"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Update 2.2+; compatible car; eddies",
          "de": "Update 2.2+; passendes Auto; Eddies",
          "chips": {"en": ["Update 2.2+", "Car"], "de": ["Update 2.2+", "Auto"]},
          "critical": true
        }
      ],
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
    "id": "cyberpunk-2077-smartframe-home",
    "moodIds": ["create", "relax"],
    "type": "creation",
    "tags": ["photography", "decorating"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "cyberpunk-2077",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "A Wall for V",
        "objective": "With update 2.2 or later in **Cyberpunk 2077**, take a photo of V beside a favorite vehicle. **Display the saved shot in a SmartFrame in your apartment**.",
        "gameObjective": "With update 2.2 or later in **Cyberpunk 2077**, take a photo of V beside a favorite vehicle. **Display the saved shot in a SmartFrame in your apartment**."
      },
      "de": {
        "name": "Ein Bild für V",
        "objective": "Fotografiere V in **Cyberpunk 2077** ab Update 2.2 neben einem Lieblingsfahrzeug. **Zeig das gespeicherte Foto in einem SmartFrame deiner Wohnung**.",
        "gameObjective": "Fotografiere V in **Cyberpunk 2077** ab Update 2.2 neben einem Lieblingsfahrzeug. **Zeig das gespeicherte Foto in einem SmartFrame deiner Wohnung**."
      }
    },
    "experience": {
      "family": "photo-display",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["photography", "decorating"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Apartment; update 2.2+",
          "de": "Wohnung; Update 2.2+",
          "chips": {"en": ["Apartment", "Update 2.2+"], "de": ["Wohnung", "Update 2.2+"]},
          "critical": true
        }
      ],
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
    "id": "cyberpunk-2077-nibbles-portrait",
    "moodIds": ["create", "relax"],
    "type": "creation",
    "tags": ["photography"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "cyberpunk-2077",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Nibbles in Frame",
        "objective": "Once you have adopted Nibbles in **Cyberpunk 2077**, add the cat to a Photo Mode scene with V. **Save a portrait where both faces are visible**.",
        "gameObjective": "Once you have adopted Nibbles in **Cyberpunk 2077**, add the cat to a Photo Mode scene with V. **Save a portrait where both faces are visible**."
      },
      "de": {
        "name": "Nibbles im Bild",
        "objective": "Wenn du Nibbles in **Cyberpunk 2077** aufgenommen hast, füge die Katze im Fotomodus einer Szene mit V hinzu. **Speichere ein Porträt, auf dem beide Gesichter zu sehen sind**.",
        "gameObjective": "Wenn du Nibbles in **Cyberpunk 2077** aufgenommen hast, füge die Katze im Fotomodus einer Szene mit V hinzu. **Speichere ein Porträt, auf dem beide Gesichter zu sehen sind**."
      }
    },
    "experience": {
      "family": "pet-portrait",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["photography"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Nibbles adopted; Photo Mode",
          "de": "Nibbles aufgenommen; Fotomodus",
          "chips": {"en": ["Nibbles"], "de": ["Nibbles"]},
          "critical": true
        }
      ],
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
    "id": "cyberpunk-2077-pacifica-coaster-repair",
    "moodIds": ["curious", "explore"],
    "type": "objective",
    "tags": ["traversal"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "cyberpunk-2077",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Power the Coaster",
        "objective": "Visit Pacifica’s rollercoaster in **Cyberpunk 2077**. If it still needs power, scan the car and repair its power box, then **ride the coaster to the end**.",
        "gameObjective": "Visit Pacifica’s rollercoaster in **Cyberpunk 2077**. If it still needs power, scan the car and repair its power box, then **ride the coaster to the end**."
      },
      "de": {
        "name": "Strom für die Achterbahn",
        "objective": "Besuche in **Cyberpunk 2077** die Achterbahn in Pacifica. Fehlt noch Strom, scanne den Wagen und repariere den Stromkasten. **Fahr dann eine Runde bis zum Ende mit**.",
        "gameObjective": "Besuche in **Cyberpunk 2077** die Achterbahn in Pacifica. Fehlt noch Strom, scanne den Wagen und repariere den Stromkasten. **Fahr dann eine Runde bis zum Ende mit**."
      }
    },
    "experience": {
      "family": "coaster-ride",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
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
    "gameGenreIds": ["adventure", "rpg", "shooter"]
  },
  {
    "id": "cyberpunk-2077-roach-race-run",
    "moodIds": ["restless"],
    "type": "objective",
    "tags": ["traversal"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "cyberpunk-2077",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Roach’s Day Out",
        "objective": "Find a playable Roach Race cabinet in **Cyberpunk 2077**. **Play one run until you lose all lives**, collecting apples when they lie on your route.",
        "gameObjective": "Find a playable Roach Race cabinet in **Cyberpunk 2077**. **Play one run until you lose all lives**, collecting apples when they lie on your route."
      },
      "de": {
        "name": "Roachs Ausflug",
        "objective": "Such in **Cyberpunk 2077** einen spielbaren Roach-Race-Automaten. **Spiel einen Lauf, bis alle Leben weg sind**, und sammle die Äpfel auf deinem Weg ein.",
        "gameObjective": "Such in **Cyberpunk 2077** einen spielbaren Roach-Race-Automaten. **Spiel einen Lauf, bis alle Leben weg sind**, und sammle die Äpfel auf deinem Weg ein."
      }
    },
    "experience": {
      "family": "arcade-platforming",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "attempt",
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
    "gameGenreIds": ["adventure", "rpg", "shooter"]
  },
  {
    "id": "cyberpunk-2077-trauma-drama-stage",
    "moodIds": ["challenge", "focused"],
    "type": "challenge",
    "tags": ["three-attempts"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "cyberpunk-2077",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Arcade Rescue",
        "objective": "At a Trauma Drama cabinet in **Cyberpunk 2077** on update 2.0 or later, **clear the first stage without losing a life**. Stop after success or three fresh runs.",
        "gameObjective": "At a Trauma Drama cabinet in **Cyberpunk 2077** on update 2.0 or later, **clear the first stage without losing a life**. Stop after success or three fresh runs."
      },
      "de": {
        "name": "Rettung am Automaten",
        "objective": "Versuch in **Cyberpunk 2077** ab Update 2.0 an einem Trauma-Drama-Automaten, **die erste Stage ohne verlorenes Leben zu schaffen**. Hör nach dem Erfolg oder drei neuen Läufen auf.",
        "gameObjective": "Versuch in **Cyberpunk 2077** ab Update 2.0 an einem Trauma-Drama-Automaten, **die erste Stage ohne verlorenes Leben zu schaffen**. Hör nach dem Erfolg oder drei neuen Läufen auf."
      }
    },
    "experience": {
      "family": "arcade-combat",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Trauma Drama cabinet; update 2.0+",
          "de": "Trauma-Drama-Automat; Update 2.0+",
          "chips": {"en": ["Trauma Drama cabinet", "Update 2.0+"], "de": ["Trauma-Drama-Automat", "Update 2.0+"]},
          "critical": true
        }
      ],
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
    "id": "cyberpunk-2077-breach-access-point",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["puzzles"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "cyberpunk-2077",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Follow the Buffer",
        "objective": "With a cyberdeck and an accessible access point in **Cyberpunk 2077**, plan the sequence before selecting the first code. **Finish one breach and check which rewards uploaded**.",
        "gameObjective": "With a cyberdeck and an accessible access point in **Cyberpunk 2077**, plan the sequence before selecting the first code. **Finish one breach and check which rewards uploaded**."
      },
      "de": {
        "name": "Dem Puffer nach",
        "objective": "Plane in **Cyberpunk 2077** mit Cyberdeck an einem zugänglichen Zugangspunkt die Folge, bevor du den ersten Code auswählst. **Beende einen Breach und prüfe, welche Belohnungen übertragen wurden**.",
        "gameObjective": "Plane in **Cyberpunk 2077** mit Cyberdeck an einem zugänglichen Zugangspunkt die Folge, bevor du den ersten Code auswählst. **Beende einen Breach und prüfe, welche Belohnungen übertragen wurden**."
      }
    },
    "experience": {
      "family": "breach-puzzle",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["puzzles"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Cyberdeck; available access point",
          "de": "Cyberdeck; verfügbarer Zugangspunkt",
          "chips": {"en": ["Cyberdeck", "Access point"], "de": ["Cyberdeck", "Zugangspunkt"]},
          "critical": true
        }
      ],
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
    "id": "cyberpunk-2077-tech-cover-shot",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["loadout"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "cyberpunk-2077",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Through Thin Cover",
        "objective": "With a charged Tech weapon in **Cyberpunk 2077**, mark a hostile behind thin cover. **Test a charged shot through that cover and compare it with an exposed shot**. Success through every material is not required.",
        "gameObjective": "With a charged Tech weapon in **Cyberpunk 2077**, mark a hostile behind thin cover. **Test a charged shot through that cover and compare it with an exposed shot**. Success through every material is not required."
      },
      "de": {
        "name": "Durch dünne Deckung",
        "objective": "Markiere in **Cyberpunk 2077** mit einer aufladbaren Tech-Waffe einen Gegner hinter dünner Deckung. **Teste einen aufgeladenen Schuss durch die Deckung und vergleiche ihn mit einem freien Schuss**. Nicht jedes Material muss durchlässig sein.",
        "gameObjective": "Markiere in **Cyberpunk 2077** mit einer aufladbaren Tech-Waffe einen Gegner hinter dünner Deckung. **Teste einen aufgeladenen Schuss durch die Deckung und vergleiche ihn mit einem freien Schuss**. Nicht jedes Material muss durchlässig sein."
      }
    },
    "experience": {
      "family": "penetrating-cover",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["loadout"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Charged Tech weapon",
          "de": "Aufladbare Tech-Waffe",
          "chips": {"en": ["Charged Tech weapon"], "de": ["Aufladbare Tech-Waffe"]},
          "critical": true
        }
      ],
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
    "id": "cyberpunk-2077-smart-lock-angle",
    "moodIds": ["curious"],
    "type": "experiment",
    "tags": ["loadout"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "cyberpunk-2077",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Let the Lock Finish",
        "objective": "With a Smart weapon and Smart Link installed in **Cyberpunk 2077**, face a hostile group from cover. **Fire once before full target lock and once after it**, then finish or leave the encounter. Compare the hits.",
        "gameObjective": "With a Smart weapon and Smart Link installed in **Cyberpunk 2077**, face a hostile group from cover. **Fire once before full target lock and once after it**, then finish or leave the encounter. Compare the hits."
      },
      "de": {
        "name": "Erst die Zielerfassung",
        "objective": "Stell dich in **Cyberpunk 2077** mit Smart-Waffe und installiertem Smart Link einer Gegnergruppe aus der Deckung. **Schieß einmal vor und einmal nach vollständiger Zielerfassung**. Beende oder verlass den Kampf und vergleiche die Treffer.",
        "gameObjective": "Stell dich in **Cyberpunk 2077** mit Smart-Waffe und installiertem Smart Link einer Gegnergruppe aus der Deckung. **Schieß einmal vor und einmal nach vollständiger Zielerfassung**. Beende oder verlass den Kampf und vergleiche die Treffer."
      }
    },
    "experience": {
      "family": "smart-lock",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["loadout"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Smart weapon; Smart Link",
          "de": "Smart-Waffe; Smart Link",
          "chips": {"en": ["Smart weapon", "Smart Link"], "de": ["Smart-Waffe", "Smart Link"]},
          "critical": true
        }
      ],
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
    "id": "cyberpunk-2077-gig-mail-trail",
    "moodIds": ["focused", "curious"],
    "type": "objective",
    "tags": ["story"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "cyberpunk-2077",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "The Terminal’s Version",
        "objective": "Choose an unfinished gig in **Cyberpunk 2077** with a readable computer. Read its messages before taking the target, then **finish the gig with that background in mind**.",
        "gameObjective": "Choose an unfinished gig in **Cyberpunk 2077** with a readable computer. Read its messages before taking the target, then **finish the gig with that background in mind**."
      },
      "de": {
        "name": "Die Sicht des Terminals",
        "objective": "Wähle in **Cyberpunk 2077** einen offenen Gig mit lesbarem Computer. Lies vor dem eigentlichen Ziel seine Nachrichten und **beende den Gig mit diesem Hintergrundwissen**.",
        "gameObjective": "Wähle in **Cyberpunk 2077** einen offenen Gig mit lesbarem Computer. Lies vor dem eigentlichen Ziel seine Nachrichten und **beende den Gig mit diesem Hintergrundwissen**."
      }
    },
    "experience": {
      "family": "gig-story",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Unfinished gig with readable computer",
          "de": "Offener Gig mit lesbarem Computer",
          "chips": {"en": ["Gig", "Computer"], "de": ["Gig", "Computer"]},
          "critical": true
        }
      ],
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
    "id": "cyberpunk-2077-iconic-stash-display",
    "moodIds": ["create", "progress"],
    "type": "creation",
    "tags": ["decorating"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "cyberpunk-2077",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "An Icon’s Place",
        "objective": "At V’s apartment in **Cyberpunk 2077**, choose an owned Iconic weapon with a stash-wall display slot. **Put it in the stash and check it on the wall**.",
        "gameObjective": "At V’s apartment in **Cyberpunk 2077**, choose an owned Iconic weapon with a stash-wall display slot. **Put it in the stash and check it on the wall**."
      },
      "de": {
        "name": "Platz für eine Ikone",
        "objective": "Wähle in Vs Wohnung in **Cyberpunk 2077** eine eigene ikonische Waffe mit Platz an der Waffenwand. **Leg sie ins Lager und schau sie dir an der Wand an**.",
        "gameObjective": "Wähle in Vs Wohnung in **Cyberpunk 2077** eine eigene ikonische Waffe mit Platz an der Waffenwand. **Leg sie ins Lager und schau sie dir an der Wand an**."
      }
    },
    "experience": {
      "family": "weapon-display",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["decorating"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Owned display-compatible Iconic weapon",
          "de": "Eigene ikonische Waffe mit Wandplatz",
          "chips": {"en": ["Iconic weapon"], "de": ["Ikonische Waffe"]},
          "critical": true
        }
      ],
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
    "id": "cyberpunk-2077-pl-delivery-contract",
    "moodIds": ["progress", "restless"],
    "type": "objective",
    "tags": ["driving"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "cyberpunk-2077",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Muamar’s Pickup",
        "objective": "With Phantom Liberty and vehicle contracts unlocked in **Cyberpunk 2077**, choose a contract car already marked nearby. **Deliver it to Muamar’s handoff point**, accepting the contract’s extra conditions as they appear.",
        "gameObjective": "With Phantom Liberty and vehicle contracts unlocked in **Cyberpunk 2077**, choose a contract car already marked nearby. **Deliver it to Muamar’s handoff point**, accepting the contract’s extra conditions as they appear."
      },
      "de": {
        "name": "Abholung für Muamar",
        "objective": "Wähle in **Cyberpunk 2077** mit Phantom Liberty und freigeschalteten Fahrzeugaufträgen einen bereits markierten Wagen in der Nähe. **Liefere ihn an Muamars Übergabepunkt ab** und beachte die zusätzlichen Bedingungen des Auftrags.",
        "gameObjective": "Wähle in **Cyberpunk 2077** mit Phantom Liberty und freigeschalteten Fahrzeugaufträgen einen bereits markierten Wagen in der Nähe. **Liefere ihn an Muamars Übergabepunkt ab** und beachte die zusätzlichen Bedingungen des Auftrags."
      }
    },
    "experience": {
      "family": "car-contract",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["driving"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Phantom Liberty; vehicle contracts unlocked",
          "de": "Phantom Liberty; Fahrzeugaufträge frei",
          "chips": {"en": ["Phantom Liberty", "Vehicle contracts"], "de": ["Phantom Liberty", "Fahrzeugaufträge"]},
          "critical": true
        }
      ],
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
    "id": "cyberpunk-2077-pl-terminal-beacon",
    "moodIds": ["explore", "progress"],
    "type": "objective",
    "tags": ["collectibles"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "cyberpunk-2077",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Dogtown’s Signal",
        "objective": "With Phantom Liberty in **Cyberpunk 2077** and Dogtown accessible, follow the nearby signal from an unclaimed Militech data terminal. **Reach it and take its Relic point**.",
        "gameObjective": "With Phantom Liberty in **Cyberpunk 2077** and Dogtown accessible, follow the nearby signal from an unclaimed Militech data terminal. **Reach it and take its Relic point**."
      },
      "de": {
        "name": "Dogtowns Signal",
        "objective": "Folge in **Cyberpunk 2077** mit Phantom Liberty und zugänglichem Dogtown dem Signal eines ungenutzten Militech-Datenterminals in der Nähe. **Erreiche es und hol den Relic-Punkt ab**.",
        "gameObjective": "Folge in **Cyberpunk 2077** mit Phantom Liberty und zugänglichem Dogtown dem Signal eines ungenutzten Militech-Datenterminals in der Nähe. **Erreiche es und hol den Relic-Punkt ab**."
      }
    },
    "experience": {
      "family": "relic-terminal",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["collectibles"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Phantom Liberty; Dogtown access",
          "de": "Phantom Liberty; Zugang zu Dogtown",
          "chips": {"en": ["Phantom Liberty", "Dogtown"], "de": ["Phantom Liberty", "Dogtown"]},
          "critical": true
        }
      ],
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
    "id": "cyberpunk-2077-market-afterlife",
    "moodIds": ["explore", "relax"],
    "type": "inspiration",
    "tags": ["on-foot"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "cyberpunk-2077",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Under the Stadium",
        "objective": "With Phantom Liberty in Cyberpunk 2077 and Dogtown accessible, **wander the stadium market on foot**. Look at the stalls and the improvised homes tucked into the old structure.",
        "gameObjective": "With Phantom Liberty in Cyberpunk 2077 and Dogtown accessible, **wander the stadium market on foot**. Look at the stalls and the improvised homes tucked into the old structure."
      },
      "de": {
        "name": "Unter dem Stadion",
        "objective": "Schlendere in Cyberpunk 2077 mit Phantom Liberty und zugänglichem Dogtown **zu Fuß durch den Stadionmarkt**. Schau dir die Stände und die Behausungen im alten Bauwerk an.",
        "gameObjective": "Schlendere in Cyberpunk 2077 mit Phantom Liberty und zugänglichem Dogtown **zu Fuß durch den Stadionmarkt**. Schau dir die Stände und die Behausungen im alten Bauwerk an."
      }
    },
    "experience": {
      "family": "market-roaming",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "open",
      "activities": [],
      "rules": ["on-foot"],
      "prerequisites": [
        {
          "en": "Phantom Liberty; Dogtown access",
          "de": "Phantom Liberty; Zugang zu Dogtown",
          "chips": {"en": ["Phantom Liberty", "Dogtown"], "de": ["Phantom Liberty", "Dogtown"]},
          "critical": true
        }
      ],
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
    "id": "cyberpunk-2077-bar-seat",
    "moodIds": ["relax", "overwhelmed"],
    "type": "inspiration",
    "tags": ["dialogue"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "cyberpunk-2077",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Your Bar Seat",
        "objective": "On update 2.1 or later in Cyberpunk 2077, step into a bar with an available seat and order from its vendor. **Stay for the music** and let the gigs wait a little.",
        "gameObjective": "On update 2.1 or later in Cyberpunk 2077, step into a bar with an available seat and order from its vendor. **Stay for the music** and let the gigs wait a little."
      },
      "de": {
        "name": "Dein Platz am Tresen",
        "objective": "Setz dich in Cyberpunk 2077 ab Update 2.1 in eine Bar mit freiem Sitzplatz und bestell beim Barkeeper. **Bleib für die Musik** und lass die Gigs noch etwas warten.",
        "gameObjective": "Setz dich in Cyberpunk 2077 ab Update 2.1 in eine Bar mit freiem Sitzplatz und bestell beim Barkeeper. **Bleib für die Musik** und lass die Gigs noch etwas warten."
      }
    },
    "experience": {
      "family": "bar-evening",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "open",
      "activities": ["dialogue"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Update 2.1+; bar with seats",
          "de": "Update 2.1+; Bar mit Sitzplätzen",
          "chips": {"en": ["Update 2.1+", "Bar seating"], "de": ["Update 2.1+", "Bar-Sitzplätze"]},
          "critical": true
        }
      ],
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
    "id": "cyberpunk-2077-tarot-on-the-wall",
    "moodIds": ["explore"],
    "type": "objective",
    "tags": ["collectibles"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "cyberpunk-2077",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "A Tarot in the City",
        "objective": "Follow a tarot symbol on the map and **find the mural itself before scanning it**.",
        "gameObjective": "Follow a tarot symbol on the map and **find the mural itself before scanning it**."
      },
      "de": {
        "name": "Tarot an der Wand",
        "objective": "Folge einem Tarot-Symbol auf der Karte und **finde das Wandbild selbst, bevor du es scannst**.",
        "gameObjective": "Folge einem Tarot-Symbol auf der Karte und **finde das Wandbild selbst, bevor du es scannst**."
      }
    },
    "experience": {
      "family": "tarot",
      "cardMetadata": { "genreIds": ["rpg", "adventure"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["collectibles"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Unscanned tarot mural",
          "de": "Nicht gescanntes Tarot-Wandbild",
          "chips": {"en": ["Tarot mural"], "de": ["Tarot-Wandbild"]},
          "critical": true
        }
      ],
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
    "id": "cyberpunk-2077-braindance-detail",
    "moodIds": ["curious", "focused"],
    "type": "objective",
    "tags": ["story"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "cyberpunk-2077",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Pause the Memory",
        "objective": "In an available braindance investigation in **Cyberpunk 2077**, follow an open lead. Move through the timeline and switch between layers. **Find and scan one new clue**.",
        "gameObjective": "In an available braindance investigation in **Cyberpunk 2077**, follow an open lead. Move through the timeline and switch between layers. **Find and scan one new clue**."
      },
      "de": {
        "name": "Die Erinnerung anhalten",
        "objective": "Geh in **Cyberpunk 2077** bei einer verfügbaren Braindance-Ermittlung einer offenen Spur nach. Beweg dich durch die Zeitleiste und wechsle zwischen den Ebenen. **Finde und scanne einen neuen Hinweis**.",
        "gameObjective": "Geh in **Cyberpunk 2077** bei einer verfügbaren Braindance-Ermittlung einer offenen Spur nach. Beweg dich durch die Zeitleiste und wechsle zwischen den Ebenen. **Finde und scanne einen neuen Hinweis**."
      }
    },
    "experience": {
      "family": "braindance",
      "cardMetadata": { "genreIds": ["rpg", "adventure"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Offene Braindance-Ermittlung mit ungescanntem Hinweis",
          "en": "Open braindance investigation with an unscanned clue",
          "chips": {"en": ["Braindance"], "de": ["Braindance"]},
          "critical": true
        }
      ],
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
    "id": "cyberpunk-2077-ripperdoc-one-change",
    "moodIds": ["progress"],
    "type": "objective",
    "tags": ["abilities"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "cyberpunk-2077",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "New Chrome, Real Test",
        "objective": "Install one cyberware upgrade at a ripperdoc and **use its effect during the next real encounter**.",
        "gameObjective": "Install one cyberware upgrade at a ripperdoc and **use its effect during the next real encounter**."
      },
      "de": {
        "name": "Neues Chrom testen",
        "objective": "Baue bei einem Ripperdoc **eine Cyberware-Verbesserung ein und nutze ihre Wirkung bei der nächsten echten Begegnung**.",
        "gameObjective": "Baue bei einem Ripperdoc **eine Cyberware-Verbesserung ein und nutze ihre Wirkung bei der nächsten echten Begegnung**."
      }
    },
    "experience": {
      "family": "cyberware-test",
      "cardMetadata": { "genreIds": ["rpg", "adventure"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["abilities"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Bezahlbares Cyberware-Upgrade mit nutzbarer Wirkung",
          "en": "Affordable cyberware upgrade with a usable effect",
          "chips": {"en": ["Cyberware upgrade"], "de": ["Cyberware-Upgrade"]},
          "critical": true
        }
      ],
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
    "id": "cyberpunk-2077-delamain-detour",
    "moodIds": ["focused"],
    "type": "objective",
    "tags": ["story"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "cyberpunk-2077",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "One Missing Cab",
        "objective": "If Delamain's cab search is open, **track down one cab and finish its particular encounter**.",
        "gameObjective": "If Delamain's cab search is open, **track down one cab and finish its particular encounter**."
      },
      "de": {
        "name": "Ein verschwundenes Taxi",
        "objective": "Wenn Delamains Suche läuft, **spüre ein Taxi auf und spiel seine besondere Begegnung zu Ende**.",
        "gameObjective": "Wenn Delamains Suche läuft, **spüre ein Taxi auf und spiel seine besondere Begegnung zu Ende**."
      }
    },
    "experience": {
      "family": "cab-quest",
      "cardMetadata": { "genreIds": ["rpg", "adventure"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Active Delamain cab search",
          "de": "Aktive Delamain-Taxisuche",
          "chips": {"en": ["Delamain cab"], "de": ["Delamain-Taxi"]},
          "critical": true
        }
      ],
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
