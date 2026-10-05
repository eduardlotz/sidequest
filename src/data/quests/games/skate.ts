import { defineQuests } from "../defineQuests";

export const GamesSkateQuests = defineQuests([
  {
    "id": "skate-three-street-tricks",
    "moodIds": ["nostalgic", "restless"],
    "type": "objective",
    "tags": ["skating"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "skate",
      "installmentIds": ["skate-3"]
    },
    "translations": {
      "en": {
        "name": "One Street Line",
        "objective": "In **Skate 3**, set a session marker by a familiar low ledge. **Land a kickflip, grind the ledge, and land a pop shove-it in one rolling line**. Use your usual difficulty and retry from the marker after a bail.",
        "gameObjective": "In **Skate 3**, set a session marker by a familiar low ledge. **Land a kickflip, grind the ledge, and land a pop shove-it in one rolling line**. Use your usual difficulty and retry from the marker after a bail."
      },
      "de": {
        "name": "Eine Street-Line",
        "objective": "Setze in **Skate 3** eine Session-Markierung an einer bekannten niedrigen Kante. **Lande einen Kickflip, grinde die Kante und lande einen Pop Shove-it in einer rollenden Line**. Nutze deine übliche Schwierigkeit und beginne nach einem Sturz wieder an der Markierung.",
        "gameObjective": "Setze in **Skate 3** eine Session-Markierung an einer bekannten niedrigen Kante. **Lande einen Kickflip, grinde die Kante und lande einen Pop Shove-it in einer rollenden Line**. Nutze deine übliche Schwierigkeit und beginne nach einem Sturz wieder an der Markierung."
      }
    },
    "experience": {
      "family": "street-lines",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["skating"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Familiar low ledge",
          "de": "Vertraute niedrige Kante",
          "chips": {"en": ["Low ledge"], "de": ["Niedrige Kante"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "individual skate"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "skate-own-the-spot",
    "moodIds": ["challenge", "focused"],
    "type": "challenge",
    "tags": ["skating", "three-attempts"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "skate",
      "installmentIds": ["skate-3"]
    },
    "translations": {
      "en": {
        "name": "Own the Spot",
        "objective": "In **Skate 3**, replay an unlocked Own the Spot challenge. **Beat its Own It score without repeating a scored trick in the same run**. Finish after success or three attempts.",
        "gameObjective": "In **Skate 3**, replay an unlocked Own the Spot challenge. **Beat its Own It score without repeating a scored trick in the same run**. Finish after success or three attempts."
      },
      "de": {
        "name": "Der Spot gehört dir",
        "objective": "Wiederhole in **Skate 3** eine freigeschaltete Own-the-Spot-Challenge. **Überbiete die Own-It-Punktzahl, ohne einen gewerteten Trick im selben Lauf zu wiederholen**. Nach Erfolg oder drei Versuchen ist Schluss.",
        "gameObjective": "Wiederhole in **Skate 3** eine freigeschaltete Own-the-Spot-Challenge. **Überbiete die Own-It-Punktzahl, ohne einen gewerteten Trick im selben Lauf zu wiederholen**. Nach Erfolg oder drei Versuchen ist Schluss."
      }
    },
    "experience": {
      "family": "spot-scoring",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["skating"],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Own the Spot unlocked",
          "de": "Own the Spot freigeschaltet",
          "chips": {"en": ["Own the Spot"], "de": ["Own the Spot"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "individual skate"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "skate-quick-drop-link",
    "moodIds": ["create", "focused"],
    "type": "creation",
    "tags": ["skating", "building"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "skate",
      "installmentIds": ["skate-2025"]
    },
    "translations": {
      "en": {
        "name": "One Prop Spot",
        "objective": "With Quick Drop unlocked in **skate. (2025)**, place a grindable prop beside a low ledge without blocking a challenge. **Link a grind on each in one line and roll away**.",
        "gameObjective": "With Quick Drop unlocked in **skate. (2025)**, place a grindable prop beside a low ledge without blocking a challenge. **Link a grind on each in one line and roll away**."
      },
      "de": {
        "name": "Ein Teil, ein Spot",
        "objective": "Platziere in **skate. (2025)** mit freigeschaltetem Quick Drop ein grindbares Objekt neben einer niedrigen Kante, ohne eine Challenge zu blockieren. **Grinde erst an deinem Objekt, dann an der Kante und rolle ohne Sturz weiter**.",
        "gameObjective": "Platziere in **skate. (2025)** mit freigeschaltetem Quick Drop ein grindbares Objekt neben einer niedrigen Kante, ohne eine Challenge zu blockieren. **Grinde erst an deinem Objekt, dann an der Kante und rolle ohne Sturz weiter**."
      }
    },
    "gameGenreIds": ["sports", "mmo"],
    "experience": {
      "family": "prop-lines",
      "cardMetadata": { "genreIds": ["sports", "mmo"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["skating", "building"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Quick Drop unlocked",
          "de": "Quick Drop freigeschaltet",
          "chips": {"en": ["Quick Drop"], "de": ["Quick Drop"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "independent free skate"
        }
      ]
    }
  },
  {
    "id": "skate-san-van-switch",
    "moodIds": ["curious", "explore"],
    "type": "experiment",
    "tags": ["skating", "new-approach"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "skate",
      "installmentIds": ["skate-2025"]
    },
    "translations": {
      "en": {
        "name": "Same Rail, Switch",
        "objective": "In **skate. (2025)**, set a session marker at an unfamiliar low rail. **Land a 50-50 grind in regular stance, then land it in switch** on the same rail. Roll away after each and compare the approach.",
        "gameObjective": "In **skate. (2025)**, set a session marker at an unfamiliar low rail. **Land a 50-50 grind in regular stance, then land it in switch** on the same rail. Roll away after each and compare the approach."
      },
      "de": {
        "name": "Dasselbe Rail, Switch",
        "objective": "Setz in **skate. (2025)** eine Session-Markierung an einer niedrigen Rail, die du noch nicht gefahren bist. **Lande dort einen 50-50-Grind erst normal und dann in Switch**. Rolle beide Male weiter und achte darauf, wie sich die Anfahrt ändert.",
        "gameObjective": "Setz in **skate. (2025)** eine Session-Markierung an einer niedrigen Rail, die du noch nicht gefahren bist. **Lande dort einen 50-50-Grind erst normal und dann in Switch**. Rolle beide Male weiter und achte darauf, wie sich die Anfahrt ändert."
      }
    },
    "gameGenreIds": ["sports", "mmo"],
    "experience": {
      "family": "switch-grinds",
      "cardMetadata": { "genreIds": ["sports", "mmo"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["skating"],
      "rules": [],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "independent free skate"
        }
      ]
    }
  },
  {
    "id": "skate-s3-pump-the-bowl",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["skating"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "skate",
      "installmentIds": ["skate-3"]
    },
    "translations": {
      "en": {
        "name": "Speed from the Bowl",
        "objective": "In a **Skate 3 bowl**, take a lap using pushes, then a lap gaining speed by pumping the transitions. **Try both laps** and compare where your speed comes from.",
        "gameObjective": "In a **Skate 3 bowl**, take a lap using pushes, then a lap gaining speed by pumping the transitions. **Try both laps** and compare where your speed comes from."
      },
      "de": {
        "name": "Tempo aus der Bowl",
        "objective": "Fahr in einer **Skate-3-Bowl** eine Runde mit Anschieben und eine Runde mit Pumpen in den Übergängen. **Probier beide Runden** und vergleiche, wo du Tempo gewinnst.",
        "gameObjective": "Fahr in einer **Skate-3-Bowl** eine Runde mit Anschieben und eine Runde mit Pumpen in den Übergängen. **Probier beide Runden** und vergleiche, wo du Tempo gewinnst."
      }
    },
    "experience": {
      "family": "bowl-pumping",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["skating"],
      "rules": [],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "individual skate"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "skate-s3-footplant-return",
    "moodIds": ["focused", "challenge"],
    "type": "challenge",
    "tags": ["skating", "three-attempts"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "skate",
      "installmentIds": ["skate-3"]
    },
    "translations": {
      "en": {
        "name": "Foot on the Wall",
        "objective": "At a low wall beside a bank in **Skate 3**, **land a footplant and return to the bank on your board**. Stop after three attempts.",
        "gameObjective": "At a low wall beside a bank in **Skate 3**, **land a footplant and return to the bank on your board**. Stop after three attempts."
      },
      "de": {
        "name": "Fuß an die Wand",
        "objective": "Such in **Skate 3** eine niedrige Wand neben einer Schräge. **Lande einen Footplant und komm auf dem Brett zurück auf die Schräge**. Nach drei Versuchen ist Schluss.",
        "gameObjective": "Such in **Skate 3** eine niedrige Wand neben einer Schräge. **Lande einen Footplant und komm auf dem Brett zurück auf die Schräge**. Nach drei Versuchen ist Schluss."
      }
    },
    "experience": {
      "family": "footplants",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["skating"],
      "rules": ["three-attempts"],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "individual skate"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "skate-s3-hippy-jump",
    "moodIds": ["challenge", "restless"],
    "type": "challenge",
    "tags": ["skating", "three-attempts"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "skate",
      "installmentIds": ["skate-3"]
    },
    "translations": {
      "en": {
        "name": "Board Goes Under",
        "objective": "Choose a low rail with space beneath it in **Skate 3**. **Hippy jump over the rail while your board passes underneath and roll away**, or stop after three tries.",
        "gameObjective": "Choose a low rail with space beneath it in **Skate 3**. **Hippy jump over the rail while your board passes underneath and roll away**, or stop after three tries."
      },
      "de": {
        "name": "Das Brett fährt unten",
        "objective": "Such in **Skate 3** ein niedriges Geländer mit Platz darunter. **Spring im Hippy Jump darüber, während das Brett unten durchfährt, und roll weiter**. Nach drei Versuchen ist Schluss.",
        "gameObjective": "Such in **Skate 3** ein niedriges Geländer mit Platz darunter. **Spring im Hippy Jump darüber, während das Brett unten durchfährt, und roll weiter**. Nach drei Versuchen ist Schluss."
      }
    },
    "experience": {
      "family": "hippy-jumps",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["skating"],
      "rules": ["three-attempts"],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "individual skate"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "skate-s3-coffin-under",
    "moodIds": ["curious"],
    "type": "experiment",
    "tags": ["skating"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "skate",
      "installmentIds": ["skate-3"]
    },
    "translations": {
      "en": {
        "name": "Lie Down and Roll",
        "objective": "Find a low overhead obstacle in **Skate 3** with a clear approach and exit. **Try rolling underneath in a coffin**, then compare the clearance with your usual crouched ride.",
        "gameObjective": "Find a low overhead obstacle in **Skate 3** with a clear approach and exit. **Try rolling underneath in a coffin**, then compare the clearance with your usual crouched ride."
      },
      "de": {
        "name": "Hinlegen und durch",
        "objective": "Such in **Skate 3** ein niedriges Hindernis über dem Weg mit freier Anfahrt und Auslauf. **Probier, im Coffin darunter durchzurollen**, und vergleiche den Platz mit deiner üblichen geduckten Fahrt.",
        "gameObjective": "Such in **Skate 3** ein niedriges Hindernis über dem Weg mit freier Anfahrt und Auslauf. **Probier, im Coffin darunter durchzurollen**, und vergleiche den Platz mit deiner üblichen geduckten Fahrt."
      }
    },
    "experience": {
      "family": "coffin-clearance",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["skating"],
      "rules": [],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "individual skate"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "skate-s3-bowl-transfer",
    "moodIds": ["challenge", "focused"],
    "type": "challenge",
    "tags": ["skating", "three-attempts"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "skate",
      "installmentIds": ["skate-3"]
    },
    "translations": {
      "en": {
        "name": "Between Two Bowls",
        "objective": "At connected bowls in **Skate 3**, set a session marker and **land a transfer from one bowl into the other**. Stop after three runs.",
        "gameObjective": "At connected bowls in **Skate 3**, set a session marker and **land a transfer from one bowl into the other**. Stop after three runs."
      },
      "de": {
        "name": "Zwischen zwei Bowls",
        "objective": "Setz in **Skate 3** bei verbundenen Bowls eine Session-Markierung und **lande einen Transfer von einer Bowl in die andere**. Nach drei Anläufen ist Schluss.",
        "gameObjective": "Setz in **Skate 3** bei verbundenen Bowls eine Session-Markierung und **lande einen Transfer von einer Bowl in die andere**. Nach drei Anläufen ist Schluss."
      }
    },
    "experience": {
      "family": "bowl-transfers",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["skating"],
      "rules": ["three-attempts"],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "individual skate"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "skate-s3-nollie-stair",
    "moodIds": ["curious"],
    "type": "experiment",
    "tags": ["skating"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "skate",
      "installmentIds": ["skate-3"]
    },
    "translations": {
      "en": {
        "name": "Pop from the Nose",
        "objective": "At a small stair set in **Skate 3**, try an ollie and then a nollie with the same run-up. **Try both take-offs** and compare when you have to pop.",
        "gameObjective": "At a small stair set in **Skate 3**, try an ollie and then a nollie with the same run-up. **Try both take-offs** and compare when you have to pop."
      },
      "de": {
        "name": "Absprung über die Nose",
        "objective": "Probier in **Skate 3** an einer kleinen Treppe erst einen Ollie und dann einen Nollie mit derselben Anfahrt. **Probier beide Absprünge** und vergleiche den Zeitpunkt fürs Poppen.",
        "gameObjective": "Probier in **Skate 3** an einer kleinen Treppe erst einen Ollie und dann einen Nollie mit derselben Anfahrt. **Probier beide Absprünge** und vergleiche den Zeitpunkt fürs Poppen."
      }
    },
    "experience": {
      "family": "ollie-timing",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["skating"],
      "rules": [],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "individual skate"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "skate-s3-fakie-bank-exit",
    "moodIds": ["focused", "challenge"],
    "type": "challenge",
    "tags": ["skating", "three-attempts"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "skate",
      "installmentIds": ["skate-3"]
    },
    "translations": {
      "en": {
        "name": "Fakie Bank Exit",
        "objective": "In **Skate 3**, ride up a low bank and land back on it in fakie without turning around. **Roll down backward without a bail**, or stop after three attempts.",
        "gameObjective": "In **Skate 3**, ride up a low bank and land back on it in fakie without turning around. **Roll down backward without a bail**, or stop after three attempts."
      },
      "de": {
        "name": "Rückwärts von der Schräge",
        "objective": "Fahr in **Skate 3** eine niedrige Schräge hoch und lande ohne Umdrehen in Fakie wieder darauf. **Roll rückwärts ohne Sturz runter** oder hör nach drei Versuchen auf.",
        "gameObjective": "Fahr in **Skate 3** eine niedrige Schräge hoch und lande ohne Umdrehen in Fakie wieder darauf. **Roll rückwärts ohne Sturz runter** oder hör nach drei Versuchen auf."
      }
    },
    "experience": {
      "family": "fakie-rollout",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["skating"],
      "rules": ["three-attempts"],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "individual skate"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "skate-s3-campus-return",
    "moodIds": ["nostalgic", "relax"],
    "type": "inspiration",
    "tags": ["free-roam"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "skate",
      "installmentIds": ["skate-3"]
    },
    "translations": {
      "en": {
        "name": "Back to Campus",
        "objective": "Return to a Skate 3 University spot you remember. Follow the paths between the buildings, **revisit a ledge you used to skate**, and let the old route lead you.",
        "gameObjective": "Return to a Skate 3 University spot you remember. Follow the paths between the buildings, **revisit a ledge you used to skate**, and let the old route lead you."
      },
      "de": {
        "name": "Zurück auf den Campus",
        "objective": "Kehre zu einem University-Spot in Skate 3 zurück, den du noch kennst. Fahr zwischen den Gebäuden entlang, **schau bei einer früheren Lieblingskante vorbei** und folge deiner alten Route.",
        "gameObjective": "Kehre zu einem University-Spot in Skate 3 zurück, den du noch kennst. Fahr zwischen den Gebäuden entlang, **schau bei einer früheren Lieblingskante vorbei** und folge deiner alten Route."
      }
    },
    "experience": {
      "family": "familiar-skate-routes",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["free-roam"],
      "rules": [],
      "prerequisites": [
        {
          "en": "University spot you remember",
          "de": "Vertrauter University-Spot",
          "chips": {"en": ["University spot"], "de": ["University-Spot"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "individual skate"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "skate-s3-film-assignment",
    "moodIds": ["progress", "focused"],
    "type": "objective",
    "tags": ["current-save"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "skate",
      "installmentIds": ["skate-3"]
    },
    "translations": {
      "en": {
        "name": "Film for the Team",
        "objective": "In your **Skate 3 career**, choose an unlocked film challenge with a short trick list. **Finish that film assignment** using its shown location and requirements.",
        "gameObjective": "In your **Skate 3 career**, choose an unlocked film challenge with a short trick list. **Finish that film assignment** using its shown location and requirements."
      },
      "de": {
        "name": "Ein Film fürs Team",
        "objective": "Wähl in deiner **Skate-3-Karriere** eine freigeschaltete Film-Challenge mit kurzer Trickliste. **Schließ den Filmauftrag** am angezeigten Ort mit seinen Bedingungen ab.",
        "gameObjective": "Wähl in deiner **Skate-3-Karriere** eine freigeschaltete Film-Challenge mit kurzer Trickliste. **Schließ den Filmauftrag** am angezeigten Ort mit seinen Bedingungen ab."
      }
    },
    "experience": {
      "family": "career-filming",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "en": "Unlocked short film assignment",
          "de": "Freigeschalteter kurzer Filmauftrag",
          "chips": {"en": ["Short film assignment"], "de": ["Kurzer Filmauftrag"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "individual skate"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "skate-s3-deathrace-line",
    "moodIds": ["restless", "focused"],
    "type": "objective",
    "tags": ["racing"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "skate",
      "installmentIds": ["skate-3"]
    },
    "translations": {
      "en": {
        "name": "Follow the Race Line",
        "objective": "Start an **unlocked Skate 3 Deathrace**. Follow its checkpoints and **finish one race**, letting the placing stand.",
        "gameObjective": "Start an **unlocked Skate 3 Deathrace**. Follow its checkpoints and **finish one race**, letting the placing stand."
      },
      "de": {
        "name": "Der Rennlinie folgen",
        "objective": "Starte ein **freigeschaltetes Deathrace in Skate 3**. Fahr durch die Checkpoints und **beende ein Rennen**, ohne für eine bessere Platzierung neu zu starten.",
        "gameObjective": "Starte ein **freigeschaltetes Deathrace in Skate 3**. Fahr durch die Checkpoints und **beende ein Rennen**, ohne für eine bessere Platzierung neu zu starten."
      }
    },
    "experience": {
      "family": "downhill-racing",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["racing"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Deathrace unlocked",
          "de": "Deathrace freigeschaltet",
          "chips": {"en": ["Deathrace"], "de": ["Deathrace"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "individual skate"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "skate-s3-contest-round",
    "moodIds": ["focused", "progress"],
    "type": "objective",
    "tags": ["skating"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "skate",
      "installmentIds": ["skate-3"]
    },
    "translations": {
      "en": {
        "name": "Inside the Transition",
        "objective": "Enter an **unlocked Skate 3 transition contest**. Use the ramps to link airs with grinds and **finish the contest**, keeping your result.",
        "gameObjective": "Enter an **unlocked Skate 3 transition contest**. Use the ramps to link airs with grinds and **finish the contest**, keeping your result."
      },
      "de": {
        "name": "In der Transition",
        "objective": "Starte einen **freigeschalteten Transition-Contest in Skate 3**. Verbinde auf den Rampen Airs mit Grinds und **beende den Contest** mit deinem erzielten Ergebnis.",
        "gameObjective": "Starte einen **freigeschalteten Transition-Contest in Skate 3**. Verbinde auf den Rampen Airs mit Grinds und **beende den Contest** mit deinem erzielten Ergebnis."
      }
    },
    "experience": {
      "family": "transition-contests",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["skating"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Transition contest unlocked",
          "de": "Transition-Contest freigeschaltet",
          "chips": {"en": ["Transition contest"], "de": ["Transition-Contest"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "individual skate"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "skate-s3-ai-line-guide",
    "moodIds": ["curious", "explore"],
    "type": "inspiration",
    "tags": ["free-roam"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "skate",
      "installmentIds": ["skate-3"]
    },
    "translations": {
      "en": {
        "name": "Follow a Pro",
        "objective": "Call an AI skater in Skate 3 at an unlocked plaza. **Follow their ride through the area** and use the obstacles they approach as starting points for your own skating.",
        "gameObjective": "Call an AI skater in Skate 3 at an unlocked plaza. **Follow their ride through the area** and use the obstacles they approach as starting points for your own skating."
      },
      "de": {
        "name": "Einem Pro folgen",
        "objective": "Ruf an einem freigeschalteten Platz in Skate 3 einen KI-Skater dazu. **Fahr ihm durch die Gegend hinterher** und nutze seine angesteuerten Hindernisse als Ausgangspunkt für deine eigenen Tricks.",
        "gameObjective": "Ruf an einem freigeschalteten Platz in Skate 3 einen KI-Skater dazu. **Fahr ihm durch die Gegend hinterher** und nutze seine angesteuerten Hindernisse als Ausgangspunkt für deine eigenen Tricks."
      }
    },
    "experience": {
      "family": "guided-skating",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["free-roam"],
      "rules": [],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "individual skate"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "skate-s3-build-bowl-link",
    "moodIds": ["create"],
    "type": "creation",
    "tags": ["level-editor"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "universal": false,
    "curated": {
      "gameId": "skate",
      "installmentIds": ["skate-3"]
    },
    "translations": {
      "en": {
        "name": "A Connected Bowl",
        "objective": "In **Skate 3 Skate.Park**, arrange transition pieces into a bowl with an entrance you can skate through. **Save the park and ride from the entrance into the bowl without stepping off**.",
        "gameObjective": "In **Skate 3 Skate.Park**, arrange transition pieces into a bowl with an entrance you can skate through. **Save the park and ride from the entrance into the bowl without stepping off**."
      },
      "de": {
        "name": "Eine verbundene Bowl",
        "objective": "Bau in **Skate 3 Skate.Park** aus Transition-Teilen eine Bowl mit fahrbarem Eingang. **Speichere den Park und fahr durch den Eingang in die Bowl, ohne abzusteigen**.",
        "gameObjective": "Bau in **Skate 3 Skate.Park** aus Transition-Teilen eine Bowl mit fahrbarem Eingang. **Speichere den Park und fahr durch den Eingang in die Bowl, ohne abzusteigen**."
      }
    },
    "experience": {
      "family": "park-design",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["level-editor"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Skate.Park editor available",
          "de": "Skate.Park-Editor verfügbar",
          "chips": {"en": ["Skate.Park editor"], "de": ["Skate.Park-Editor"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "individual skate"
        }
      ]
    },
    "gameGenreIds": ["sports"],
    "rarity": "special"
  },
  {
    "id": "skate-s3-object-stair-seat",
    "moodIds": ["challenge", "focused"],
    "type": "challenge",
    "tags": ["building", "three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "skate",
      "installmentIds": ["skate-3"]
    },
    "translations": {
      "en": {
        "name": "A Street Bench",
        "objective": "With **Skate 3 Object Drop**, place a bench at a quiet flat-ground spot. **Land a nose- or tailslide across it and roll away**, or stop after three tries.",
        "gameObjective": "With **Skate 3 Object Drop**, place a bench at a quiet flat-ground spot. **Land a nose- or tailslide across it and roll away**, or stop after three tries."
      },
      "de": {
        "name": "Eine Bank zum Sliden",
        "objective": "Stell mit **Skate 3 Object Drop** eine Bank an einen ruhigen ebenen Spot. **Lande einen Nose- oder Tailslide darüber und roll weiter** oder hör nach drei Versuchen auf.",
        "gameObjective": "Stell mit **Skate 3 Object Drop** eine Bank an einen ruhigen ebenen Spot. **Lande einen Nose- oder Tailslide darüber und roll weiter** oder hör nach drei Versuchen auf."
      }
    },
    "experience": {
      "family": "prop-slides",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["building"],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Object Drop available",
          "de": "Object Drop verfügbar",
          "chips": {"en": ["Object Drop"], "de": ["Object Drop"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "individual skate"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "skate-s3-camera-follow-test",
    "moodIds": ["curious", "create"],
    "type": "experiment",
    "tags": ["photography"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "skate",
      "installmentIds": ["skate-3"]
    },
    "translations": {
      "en": {
        "name": "Follow the Landing",
        "objective": "In the **Skate 3 replay editor**, take a recording of a landed trick. **Preview it with a moving camera and with a fixed camera**, then compare which view keeps the landing visible.",
        "gameObjective": "In the **Skate 3 replay editor**, take a recording of a landed trick. **Preview it with a moving camera and with a fixed camera**, then compare which view keeps the landing visible."
      },
      "de": {
        "name": "Die Landung verfolgen",
        "objective": "Nimm im **Replay-Editor von Skate 3** die Aufnahme eines gelandeten Tricks. **Sieh sie mit bewegter und mit fester Kamera an** und vergleiche, wo die Landung besser zu sehen ist.",
        "gameObjective": "Nimm im **Replay-Editor von Skate 3** die Aufnahme eines gelandeten Tricks. **Sieh sie mit bewegter und mit fester Kamera an** und vergleiche, wo die Landung besser zu sehen ist."
      }
    },
    "experience": {
      "family": "replay-camera",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["photography"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Recording of a landed trick",
          "de": "Aufnahme eines gelandeten Tricks",
          "chips": {"en": ["Trick recording"], "de": ["Trick-Aufnahme"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "individual skate"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "skate-s3-carve-downhill",
    "moodIds": ["relax", "restless"],
    "type": "inspiration",
    "tags": ["free-roam"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "skate",
      "installmentIds": ["skate-3"]
    },
    "translations": {
      "en": {
        "name": "Carve the Hill",
        "objective": "Start at a Skate 3 downhill street with a clear run-out. **Carve across the slope** and follow the pavement into the next area. Tricks and points can wait.",
        "gameObjective": "Start at a Skate 3 downhill street with a clear run-out. **Carve across the slope** and follow the pavement into the next area. Tricks and points can wait."
      },
      "de": {
        "name": "Den Hang entlang",
        "objective": "Starte in Skate 3 an einer abschüssigen Straße mit freiem Auslauf. **Fahr Kurven über den Hang** und folge der Straße in die nächste Gegend. Tricks und Punkte können warten.",
        "gameObjective": "Starte in Skate 3 an einer abschüssigen Straße mit freiem Auslauf. **Fahr Kurven über den Hang** und folge der Straße in die nächste Gegend. Tricks und Punkte können warten."
      }
    },
    "experience": {
      "family": "downhill-carving",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["free-roam"],
      "rules": [],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "individual skate"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "skate-s3-rail-entry-foot",
    "moodIds": ["explore", "curious"],
    "type": "experiment",
    "tags": ["on-foot", "skating"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "skate",
      "installmentIds": ["skate-3"]
    },
    "translations": {
      "en": {
        "name": "Walk the Run-Up",
        "objective": "Find a **Skate 3 rail whose run-up looks awkward**. Get off the board to inspect the approach, set a marker, and **try a grind from the route you found**.",
        "gameObjective": "Find a **Skate 3 rail whose run-up looks awkward**. Get off the board to inspect the approach, set a marker, and **try a grind from the route you found**."
      },
      "de": {
        "name": "Die Anfahrt ablaufen",
        "objective": "Such in **Skate 3 eine Rail mit kniffliger Anfahrt**. Schau dir den Weg zu Fuß an, setz eine Markierung und **probier einen Grind von deinem gefundenen Startpunkt**.",
        "gameObjective": "Such in **Skate 3 eine Rail mit kniffliger Anfahrt**. Schau dir den Weg zu Fuß an, setz eine Markierung und **probier einen Grind von deinem gefundenen Startpunkt**."
      }
    },
    "experience": {
      "family": "rail-approaches",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["skating"],
      "rules": ["on-foot"],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "individual skate"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "skate-s3-hardcore-flat",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["skating", "new-approach"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "skate",
      "installmentIds": ["skate-3"]
    },
    "translations": {
      "en": {
        "name": "Feel Hardcore",
        "objective": "At a **Skate 3 flat-ground spot**, try a kickflip on your usual difficulty, then on Hardcore. **Try both and compare the landing timing**, then restore your usual setting.",
        "gameObjective": "At a **Skate 3 flat-ground spot**, try a kickflip on your usual difficulty, then on Hardcore. **Try both and compare the landing timing**, then restore your usual setting."
      },
      "de": {
        "name": "Hardcore spüren",
        "objective": "Probier an einem **Flatground-Spot in Skate 3** einen Kickflip auf deiner üblichen Schwierigkeit und dann auf Hardcore. **Probier beide und vergleiche das Timing der Landung**. Stell danach wieder deine gewohnte Schwierigkeit ein.",
        "gameObjective": "Probier an einem **Flatground-Spot in Skate 3** einen Kickflip auf deiner üblichen Schwierigkeit und dann auf Hardcore. **Probier beide und vergleiche das Timing der Landung**. Stell danach wieder deine gewohnte Schwierigkeit ein."
      }
    },
    "experience": {
      "family": "difficulty-timing",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["skating"],
      "rules": [],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "individual skate"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "skate-s3-skate-school-tip",
    "moodIds": ["progress", "curious"],
    "type": "objective",
    "tags": ["skating"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "skate",
      "installmentIds": ["skate-3"]
    },
    "translations": {
      "en": {
        "name": "Frank’s Next Tip",
        "objective": "Choose an **unlocked Skate 3 Skate.School lesson** for a trick you rarely use. **Finish the lesson, then try its trick at an unlocked street spot**, using the nearby pavement for your run-up.",
        "gameObjective": "Choose an **unlocked Skate 3 Skate.School lesson** for a trick you rarely use. **Finish the lesson, then try its trick at an unlocked street spot**, using the nearby pavement for your run-up."
      },
      "de": {
        "name": "Franks nächster Tipp",
        "objective": "Wähl eine **freigeschaltete Skate.School-Lektion in Skate 3** für einen selten genutzten Trick. **Beende die Lektion und probier ihren Trick an einem freigeschalteten Straßenspot**, mit der nahen Straße als Anfahrt.",
        "gameObjective": "Wähl eine **freigeschaltete Skate.School-Lektion in Skate 3** für einen selten genutzten Trick. **Beende die Lektion und probier ihren Trick an einem freigeschalteten Straßenspot**, mit der nahen Straße als Anfahrt."
      }
    },
    "experience": {
      "family": "trick-lessons",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["skating"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Skate.School lesson unlocked",
          "de": "Skate.School-Lektion freigeschaltet",
          "chips": {"en": ["Skate.School lesson"], "de": ["Skate.School-Lektion"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "individual skate"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "skate-s3-local-skate-turns",
    "moodIds": ["connect"],
    "type": "objective",
    "tags": ["local-play", "skating"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "skate",
      "installmentIds": ["skate-3"]
    },
    "translations": {
      "en": {
        "name": "Your Rail Turn",
        "objective": "With another person sharing the controller in **Skate 3 free skate**, choose a low rail together. Take turns inventing a trick for the other to try and **finish after both have tried the other person’s trick**.",
        "gameObjective": "With another person sharing the controller in **Skate 3 free skate**, choose a low rail together. Take turns inventing a trick for the other to try and **finish after both have tried the other person’s trick**."
      },
      "de": {
        "name": "Dein Versuch am Geländer",
        "objective": "Teilt euch in **Skate 3 im freien Skaten** einen Controller und wählt gemeinsam eine niedrige Rail. Denkt euch abwechselnd einen Trick für die andere Person aus und **hört auf, wenn beide den Trick der anderen ausprobiert haben**.",
        "gameObjective": "Teilt euch in **Skate 3 im freien Skaten** einen Controller und wählt gemeinsam eine niedrige Rail. Denkt euch abwechselnd einen Trick für die andere Person aus und **hört auf, wenn beide den Trick der anderen ausprobiert haben**."
      }
    },
    "experience": {
      "family": "shared-tricks",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": ["local-play"] },
      "finish": "outcome",
      "activities": ["skating"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Another person sharing your controller",
          "de": "Weitere Person teilt deinen Controller",
          "chips": {"en": ["Shared controller"], "de": ["Geteilter Controller"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "others",
          "participation": "solo",
          "formation": "none",
          "mode": "controller sharing"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "skate-s25-side-mission",
    "moodIds": ["progress", "focused"],
    "type": "objective",
    "tags": ["story"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "skate",
      "installmentIds": ["skate-2025"]
    },
    "translations": {
      "en": {
        "name": "Izzy’s Side Route",
        "objective": "In **skate. (2025)**, track an available Side Mission from the Hub. Follow its city waypoint and **finish its next displayed objective**.",
        "gameObjective": "In **skate. (2025)**, track an available Side Mission from the Hub. Follow its city waypoint and **finish its next displayed objective**."
      },
      "de": {
        "name": "Izzys Nebenweg",
        "objective": "Verfolg in **skate. (2025)** im Hub eine verfügbare Nebenmission. Fahr zum Wegpunkt in der Stadt und **erledige ihr nächstes angezeigtes Ziel**.",
        "gameObjective": "Verfolg in **skate. (2025)** im Hub eine verfügbare Nebenmission. Fahr zum Wegpunkt in der Stadt und **erledige ihr nächstes angezeigtes Ziel**."
      }
    },
    "gameGenreIds": ["sports", "mmo"],
    "experience": {
      "family": "side-missions",
      "cardMetadata": { "genreIds": ["sports", "mmo"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Available Side Mission",
          "de": "Verfügbare Nebenmission",
          "chips": {"en": ["Side Mission"], "de": ["Nebenmission"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "independent free skate"
        }
      ]
    }
  },
  {
    "id": "skate-s25-speedline-try",
    "moodIds": ["restless", "challenge"],
    "type": "challenge",
    "tags": ["skating", "three-attempts"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "skate",
      "installmentIds": ["skate-2025"]
    },
    "translations": {
      "en": {
        "name": "Follow the Speedline",
        "objective": "Choose an **unlocked Speedline Challenge in skate. (2025)**. **Reach its finish within the challenge’s time**, or stop after three runs.",
        "gameObjective": "Choose an **unlocked Speedline Challenge in skate. (2025)**. **Reach its finish within the challenge’s time**, or stop after three runs."
      },
      "de": {
        "name": "Der Speedline folgen",
        "objective": "Wähl in **skate. (2025) eine freigeschaltete Speedline-Challenge**. **Erreiche das Ziel innerhalb ihrer Zeit** oder hör nach drei Anläufen auf.",
        "gameObjective": "Wähl in **skate. (2025) eine freigeschaltete Speedline-Challenge**. **Erreiche das Ziel innerhalb ihrer Zeit** oder hör nach drei Anläufen auf."
      }
    },
    "gameGenreIds": ["sports", "mmo"],
    "experience": {
      "family": "speedlines",
      "cardMetadata": { "genreIds": ["sports", "mmo"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["skating"],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Speedline Challenge unlocked",
          "de": "Speedline-Challenge freigeschaltet",
          "chips": {"en": ["Speedline Challenge"], "de": ["Speedline-Challenge"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "independent free skate"
        }
      ]
    }
  },
  {
    "id": "skate-s25-crew-page",
    "moodIds": ["progress"],
    "type": "objective",
    "tags": ["skating"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "skate",
      "installmentIds": ["skate-2025"]
    },
    "translations": {
      "en": {
        "name": "Ride for Your Crew",
        "objective": "In **skate. (2025)**, select an available Crew Bounty that uses tricks you already know. **Complete its shown requirement and claim the reward** for that crew.",
        "gameObjective": "In **skate. (2025)**, select an available Crew Bounty that uses tricks you already know. **Complete its shown requirement and claim the reward** for that crew."
      },
      "de": {
        "name": "Für deine Crew fahren",
        "objective": "Wähl in **skate. (2025)** eine verfügbare Crew-Bounty mit Tricks, die du schon kannst. **Erledige die angezeigte Bedingung und hol die Belohnung** für die Crew ab.",
        "gameObjective": "Wähl in **skate. (2025)** eine verfügbare Crew-Bounty mit Tricks, die du schon kannst. **Erledige die angezeigte Bedingung und hol die Belohnung** für die Crew ab."
      }
    },
    "gameGenreIds": ["sports", "mmo"],
    "experience": {
      "family": "crew-bounties",
      "cardMetadata": { "genreIds": ["sports", "mmo"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["skating"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Available Crew Bounty with familiar tricks",
          "de": "Crew-Bounty mit vertrauten Tricks verfügbar",
          "chips": {"en": ["Crew Bounty"], "de": ["Crew-Bounty"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "independent free skate"
        }
      ]
    }
  },
  {
    "id": "skate-s25-neighborhood-rep",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["skating"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "skate",
      "installmentIds": ["skate-2025"]
    },
    "translations": {
      "en": {
        "name": "Rep Another Neighborhood",
        "objective": "In **skate. (2025)**, switch the neighborhood you represent to another unlocked one. **Complete a short available non-Crew Bounty** and see where its neighborhood progress goes.",
        "gameObjective": "In **skate. (2025)**, switch the neighborhood you represent to another unlocked one. **Complete a short available non-Crew Bounty** and see where its neighborhood progress goes."
      },
      "de": {
        "name": "Ein anderes Viertel vertreten",
        "objective": "Wechsle in **skate. (2025)** zu einem anderen freigeschalteten Viertel, das du vertreten kannst. **Erledige eine kurze verfügbare Bounty außerhalb der Crew-Bounties** und schau, wo ihr Viertelfortschritt landet.",
        "gameObjective": "Wechsle in **skate. (2025)** zu einem anderen freigeschalteten Viertel, das du vertreten kannst. **Erledige eine kurze verfügbare Bounty außerhalb der Crew-Bounties** und schau, wo ihr Viertelfortschritt landet."
      }
    },
    "gameGenreIds": ["sports", "mmo"],
    "experience": {
      "family": "neighborhood-progression",
      "cardMetadata": { "genreIds": ["sports", "mmo"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["skating"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Another neighborhood unlocked; non-Crew Bounty",
          "de": "Weiteres Viertel frei; Bounty außerhalb der Crew",
          "chips": {"en": ["Non-Crew Bounty"], "de": ["Bounty ohne Crew"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "independent free skate"
        }
      ]
    }
  },
  {
    "id": "skate-s25-transit-discovery",
    "moodIds": ["explore"],
    "type": "objective",
    "tags": ["exploration"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "skate",
      "installmentIds": ["skate-2025"]
    },
    "translations": {
      "en": {
        "name": "A New Bus Stop",
        "objective": "In **skate. (2025)**, take the San Van bus to an unlocked stop you have not skated around. **Land one trick on a nearby obstacle you find there**.",
        "gameObjective": "In **skate. (2025)**, take the San Van bus to an unlocked stop you have not skated around. **Land one trick on a nearby obstacle you find there**."
      },
      "de": {
        "name": "Eine neue Bushaltestelle",
        "objective": "Fahr in **skate. (2025)** mit dem San-Van-Bus zu einer freigeschalteten Haltestelle, deren Gegend du noch nicht gefahren bist. **Lande dort einen Trick an einem neu gefundenen Hindernis**.",
        "gameObjective": "Fahr in **skate. (2025)** mit dem San-Van-Bus zu einer freigeschalteten Haltestelle, deren Gegend du noch nicht gefahren bist. **Lande dort einen Trick an einem neu gefundenen Hindernis**."
      }
    },
    "gameGenreIds": ["sports", "mmo"],
    "experience": {
      "family": "new-skate-spots",
      "cardMetadata": { "genreIds": ["sports", "mmo"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["exploration"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Bus stop unlocked",
          "de": "Bushaltestelle freigeschaltet",
          "chips": {"en": ["Bus stop"], "de": ["Bushaltestelle"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "independent free skate"
        }
      ]
    }
  },
  {
    "id": "skate-s25-one-plaza-session",
    "moodIds": ["relax"],
    "type": "inspiration",
    "tags": ["free-roam"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "skate",
      "installmentIds": ["skate-2025"]
    },
    "translations": {
      "en": {
        "name": "Stay at This Plaza",
        "objective": "Find a skate. (2025) plaza with low ledges and room to roll. Stay with that small area, **try the approaches that catch your eye**, and leave the next waypoint for another session.",
        "gameObjective": "Find a skate. (2025) plaza with low ledges and room to roll. Stay with that small area, **try the approaches that catch your eye**, and leave the next waypoint for another session."
      },
      "de": {
        "name": "Auf diesem Platz bleiben",
        "objective": "Such in skate. (2025) einen Platz mit niedrigen Kanten und genug Raum zum Rollen. Bleib in dieser kleinen Gegend und **probier** Anfahrten aus, die dir auffallen. Der nächste Wegpunkt kann warten.",
        "gameObjective": "Such in skate. (2025) einen Platz mit niedrigen Kanten und genug Raum zum Rollen. Bleib in dieser kleinen Gegend und **probier** Anfahrten aus, die dir auffallen. Der nächste Wegpunkt kann warten."
      }
    },
    "gameGenreIds": ["sports", "mmo"],
    "experience": {
      "family": "plaza-skating",
      "cardMetadata": { "genreIds": ["sports", "mmo"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["free-roam"],
      "rules": [],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "independent free skate"
        }
      ]
    }
  },
  {
    "id": "skate-s25-soft-favorite",
    "moodIds": ["low-energy", "overwhelmed", "progress"],
    "type": "inspiration",
    "tags": ["free-roam"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "skate",
      "installmentIds": ["skate-2025"]
    },
    "translations": {
      "en": {
        "name": "Your Usual Spot",
        "objective": "In skate. (2025), return to a familiar low ledge in San Van and use a session marker to stay with its easy approach. Roll with your usual setup and **take whatever line comes easily**.",
        "gameObjective": "In skate. (2025), return to a familiar low ledge in San Van and use a session marker to stay with its easy approach. Roll with your usual setup and **take whatever line comes easily**."
      },
      "de": {
        "name": "Dein gewohnter Spot",
        "objective": "Kehr in skate. (2025) zu einer vertrauten niedrigen Ledge in San Van zurück und bleib mit einem Session-Marker bei ihrer einfachen Anfahrt. Roll mit deinem gewohnten Setup und **nimm die Line, die sich gerade leicht anfühlt**.",
        "gameObjective": "Kehr in skate. (2025) zu einer vertrauten niedrigen Ledge in San Van zurück und bleib mit einem Session-Marker bei ihrer einfachen Anfahrt. Roll mit deinem gewohnten Setup und **nimm die Line, die sich gerade leicht anfühlt**."
      }
    },
    "gameGenreIds": ["sports", "mmo"],
    "experience": {
      "family": "gentle-free-skate",
      "cardMetadata": { "genreIds": ["sports", "mmo"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["free-roam"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Familiar low ledge",
          "de": "Vertraute niedrige Kante",
          "chips": {"en": ["Low ledge"], "de": ["Niedrige Kante"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "independent free skate"
        }
      ]
    }
  },
  {
    "id": "skate-s25-session-checklist",
    "moodIds": ["focused", "progress"],
    "type": "objective",
    "tags": ["skating"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "skate",
      "installmentIds": ["skate-2025"]
    },
    "translations": {
      "en": {
        "name": "A Session to Finish",
        "objective": "Pick a **skate. (2025) Session Challenge** with reachable requirements. **Complete its base objectives and claim the result**, without requiring Shut It Down.",
        "gameObjective": "Pick a **skate. (2025) Session Challenge** with reachable requirements. **Complete its base objectives and claim the result**, without requiring Shut It Down."
      },
      "de": {
        "name": "Eine Session abschließen",
        "objective": "Such in **skate. (2025)** eine Session-Challenge mit erreichbaren Bedingungen aus. **Erledige ihre Grundziele und hol das Ergebnis ab**. Shut It Down ist kein Muss.",
        "gameObjective": "Such in **skate. (2025)** eine Session-Challenge mit erreichbaren Bedingungen aus. **Erledige ihre Grundziele und hol das Ergebnis ab**. Shut It Down ist kein Muss."
      }
    },
    "gameGenreIds": ["sports", "mmo"],
    "experience": {
      "family": "session-challenges",
      "cardMetadata": { "genreIds": ["sports", "mmo"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["skating"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Reachable Session Challenge objectives",
          "de": "Erreichbare Session-Challenge-Ziele",
          "chips": {"en": ["Session Challenge"], "de": ["Session Challenge"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "independent free skate"
        }
      ]
    }
  },
  {
    "id": "skate-s25-stunt-one-try",
    "moodIds": ["curious"],
    "type": "experiment",
    "tags": ["skating"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "skate",
      "installmentIds": ["skate-2025"]
    },
    "translations": {
      "en": {
        "name": "See the Stunt",
        "objective": "Select an **unlocked Stunt Challenge in skate. (2025)**. Read its requirement, **try the stunt once**, and notice which part of the approach launches you.",
        "gameObjective": "Select an **unlocked Stunt Challenge in skate. (2025)**. Read its requirement, **try the stunt once**, and notice which part of the approach launches you."
      },
      "de": {
        "name": "Den Stunt ausprobieren",
        "objective": "Wähl in **skate. (2025) eine freigeschaltete Stunt-Challenge**. Lies ihre Bedingung, **probier den Stunt einmal** und achte darauf, welcher Teil der Anfahrt dich hochschickt.",
        "gameObjective": "Wähl in **skate. (2025) eine freigeschaltete Stunt-Challenge**. Lies ihre Bedingung, **probier den Stunt einmal** und achte darauf, welcher Teil der Anfahrt dich hochschickt."
      }
    },
    "gameGenreIds": ["sports", "mmo"],
    "experience": {
      "family": "stunt-attempts",
      "cardMetadata": { "genreIds": ["sports", "mmo"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["skating"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Stunt Challenge unlocked",
          "de": "Stunt-Challenge freigeschaltet",
          "chips": {"en": ["Stunt Challenge"], "de": ["Stunt-Challenge"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "independent free skate"
        }
      ]
    }
  },
  {
    "id": "skate-s25-coop-challenge",
    "moodIds": ["connect"],
    "type": "objective",
    "tags": ["co-op"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "skate",
      "installmentIds": ["skate-2025"]
    },
    "translations": {
      "en": {
        "name": "Share the Checklist",
        "objective": "With a friend in **skate. (2025)**, enter a Challenge marked for co-op. Agree who will try which objective and **play until the base result can be claimed or you have each made three runs**.",
        "gameObjective": "With a friend in **skate. (2025)**, enter a Challenge marked for co-op. Agree who will try which objective and **play until the base result can be claimed or you have each made three runs**."
      },
      "de": {
        "name": "Die Ziele aufteilen",
        "objective": "Starte mit einem Freund in **skate. (2025)** eine als Koop markierte Challenge. Teilt die Ziele unter euch auf und **spielt bis zum abholbaren Grundergebnis oder bis beide drei Anläufe gemacht haben**.",
        "gameObjective": "Starte mit einem Freund in **skate. (2025)** eine als Koop markierte Challenge. Teilt die Ziele unter euch auf und **spielt bis zum abholbaren Grundergebnis oder bis beide drei Anläufe gemacht haben**."
      }
    },
    "gameGenreIds": ["sports", "mmo"],
    "experience": {
      "family": "shared-challenges",
      "cardMetadata": { "genreIds": ["sports", "mmo"], "playStyleIds": ["co-op"] },
      "finish": "attempt",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "en": "Friend present; co-op Challenge",
          "de": "Freund anwesend; Koop-Challenge",
          "chips": {"en": ["Co-op Challenge"], "de": ["Koop-Challenge"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "others",
          "participation": "co-op",
          "formation": "none",
          "mode": "co-op challenge"
        }
      ]
    }
  },
  {
    "id": "skate-s25-ground-line-replay",
    "moodIds": ["create"],
    "type": "creation",
    "tags": ["photography"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "skate",
      "installmentIds": ["skate-2025"]
    },
    "translations": {
      "en": {
        "name": "Keep the Whole Line",
        "objective": "In **skate. (2025)**, record a line through one street spot. In the Replay Editor, **save a clip with the approach, every trick, and the roll-away in one uncut take**.",
        "gameObjective": "In **skate. (2025)**, record a line through one street spot. In the Replay Editor, **save a clip with the approach, every trick, and the roll-away in one uncut take**."
      },
      "de": {
        "name": "Die ganze Line behalten",
        "objective": "Nimm in **skate. (2025)** eine Line an einem Street-Spot auf. **Speichere im Replay-Editor einen ungeschnittenen Clip mit Anfahrt, allen Tricks und Ausrollen**.",
        "gameObjective": "Nimm in **skate. (2025)** eine Line an einem Street-Spot auf. **Speichere im Replay-Editor einen ungeschnittenen Clip mit Anfahrt, allen Tricks und Ausrollen**."
      }
    },
    "gameGenreIds": ["sports", "mmo"],
    "experience": {
      "family": "replay-filming",
      "cardMetadata": { "genreIds": ["sports", "mmo"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["photography"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Replay Editor available",
          "de": "Replay-Editor verfügbar",
          "chips": {"en": ["Replay Editor"], "de": ["Replay-Editor"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "independent free skate"
        }
      ]
    }
  },
  {
    "id": "skate-s25-quickdrop-bank-in",
    "moodIds": ["create", "focused"],
    "type": "creation",
    "tags": ["building"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "skate",
      "installmentIds": ["skate-2025"]
    },
    "translations": {
      "en": {
        "name": "A Bank Approach",
        "objective": "With **Quick Drop unlocked in skate. (2025)**, place a bank to turn a quiet flat approach into a ride up a nearby ledge. **Ride your built approach onto the ledge**.",
        "gameObjective": "With **Quick Drop unlocked in skate. (2025)**, place a bank to turn a quiet flat approach into a ride up a nearby ledge. **Ride your built approach onto the ledge**."
      },
      "de": {
        "name": "Eine Schräge zum Spot",
        "objective": "Setz in **skate. (2025) mit freigeschaltetem Quick Drop** an einer ruhigen flachen Anfahrt eine Schräge zu einer nahen Kante. **Fahr über deine gebaute Anfahrt auf die Kante**.",
        "gameObjective": "Setz in **skate. (2025) mit freigeschaltetem Quick Drop** an einer ruhigen flachen Anfahrt eine Schräge zu einer nahen Kante. **Fahr über deine gebaute Anfahrt auf die Kante**."
      }
    },
    "gameGenreIds": ["sports", "mmo"],
    "experience": {
      "family": "prop-approaches",
      "cardMetadata": { "genreIds": ["sports", "mmo"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["building"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Quick Drop unlocked",
          "de": "Quick Drop freigeschaltet",
          "chips": {"en": ["Quick Drop"], "de": ["Quick Drop"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "independent free skate"
        }
      ]
    }
  },
  {
    "id": "skate-s25-quickdrop-wall-ride",
    "moodIds": ["curious", "create"],
    "type": "experiment",
    "tags": ["building", "skating"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "skate",
      "installmentIds": ["skate-2025"]
    },
    "translations": {
      "en": {
        "name": "Move the Take-Off",
        "objective": "With **Quick Drop unlocked in skate. (2025)**, place a kicker near a quiet wall. **Try a wallride with the kicker close to the wall and again farther away**.",
        "gameObjective": "With **Quick Drop unlocked in skate. (2025)**, place a kicker near a quiet wall. **Try a wallride with the kicker close to the wall and again farther away**."
      },
      "de": {
        "name": "Den Absprung versetzen",
        "objective": "Stell in **skate. (2025) mit freigeschaltetem Quick Drop** einen Kicker an eine ruhige Wand. **Probier einen Wallride mit nah und weiter entfernt stehendem Kicker**.",
        "gameObjective": "Stell in **skate. (2025) mit freigeschaltetem Quick Drop** einen Kicker an eine ruhige Wand. **Probier einen Wallride mit nah und weiter entfernt stehendem Kicker**."
      }
    },
    "gameGenreIds": ["sports", "mmo"],
    "experience": {
      "family": "wallride-props",
      "cardMetadata": { "genreIds": ["sports", "mmo"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["building", "skating"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Quick Drop unlocked",
          "de": "Quick Drop freigeschaltet",
          "chips": {"en": ["Quick Drop"], "de": ["Quick Drop"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "independent free skate"
        }
      ]
    }
  },
  {
    "id": "skate-s25-marker-two-approaches",
    "moodIds": ["focused", "curious"],
    "type": "experiment",
    "tags": ["skating"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "skate",
      "installmentIds": ["skate-2025"]
    },
    "translations": {
      "en": {
        "name": "Two Ways In",
        "objective": "At an **unfamiliar skate. (2025) stair set**, move your session marker from a straight run-up to a diagonal one. **Try the same ollie from both starts** and compare the space for landing.",
        "gameObjective": "At an **unfamiliar skate. (2025) stair set**, move your session marker from a straight run-up to a diagonal one. **Try the same ollie from both starts** and compare the space for landing."
      },
      "de": {
        "name": "Zwei Anfahrten",
        "objective": "Versetz an einer **unbekannten Treppe in skate. (2025)** deine Session-Markierung von gerader zu schräger Anfahrt. **Probier denselben Ollie von beiden Starts** und vergleiche den Platz zum Landen.",
        "gameObjective": "Versetz an einer **unbekannten Treppe in skate. (2025)** deine Session-Markierung von gerader zu schräger Anfahrt. **Probier denselben Ollie von beiden Starts** und vergleiche den Platz zum Landen."
      }
    },
    "gameGenreIds": ["sports", "mmo"],
    "experience": {
      "family": "ollie-approaches",
      "cardMetadata": { "genreIds": ["sports", "mmo"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["skating"],
      "rules": [],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "independent free skate"
        }
      ]
    }
  },
  {
    "id": "skate-s25-water-feature",
    "moodIds": ["explore", "restless"],
    "type": "inspiration",
    "tags": ["free-roam"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "skate",
      "installmentIds": ["skate-2025"]
    },
    "translations": {
      "en": {
        "name": "Around the Water",
        "objective": "In skate. (2025), head for an unlocked plaza with a water feature. **Follow its edges on the board** and look for ways its curves connect the surrounding ledges.",
        "gameObjective": "In skate. (2025), head for an unlocked plaza with a water feature. **Follow its edges on the board** and look for ways its curves connect the surrounding ledges."
      },
      "de": {
        "name": "Rund ums Wasser",
        "objective": "Fahr in skate. (2025) zu einem freigeschalteten Platz mit Wasserbecken. **Folge seinen Rändern auf dem Brett** und schau, wie die Kurven zu den Kanten rundherum führen.",
        "gameObjective": "Fahr in skate. (2025) zu einem freigeschalteten Platz mit Wasserbecken. **Folge seinen Rändern auf dem Brett** und schau, wie die Kurven zu den Kanten rundherum führen."
      }
    },
    "gameGenreIds": ["sports", "mmo"],
    "experience": {
      "family": "water-edge-skating",
      "cardMetadata": { "genreIds": ["sports", "mmo"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["free-roam"],
      "rules": [],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "independent free skate"
        }
      ]
    }
  },
  {
    "id": "skate-s25-spotlight-return",
    "moodIds": ["progress", "focused"],
    "type": "objective",
    "tags": ["skating"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "skate",
      "installmentIds": ["skate-2025"]
    },
    "translations": {
      "en": {
        "name": "A Spotlight Bonus",
        "objective": "Choose a **skate. (2025) Spotlight Challenge you have already completed** with an available bonus objective. **Finish that bonus and claim its reward**.",
        "gameObjective": "Choose a **skate. (2025) Spotlight Challenge you have already completed** with an available bonus objective. **Finish that bonus and claim its reward**."
      },
      "de": {
        "name": "Ein Spotlight-Extra",
        "objective": "Wähl in **skate. (2025)** eine schon abgeschlossene Spotlight-Challenge mit verfügbarem Bonusziel. **Erledige den Bonus und hol die Belohnung ab**.",
        "gameObjective": "Wähl in **skate. (2025)** eine schon abgeschlossene Spotlight-Challenge mit verfügbarem Bonusziel. **Erledige den Bonus und hol die Belohnung ab**."
      }
    },
    "gameGenreIds": ["sports", "mmo"],
    "experience": {
      "family": "spotlight-progression",
      "cardMetadata": { "genreIds": ["sports", "mmo"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["skating"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Completed Spotlight Challenge with available bonus",
          "de": "Abgeschlossene Spotlight-Challenge mit offenem Bonus",
          "chips": {"en": ["Spotlight bonus"], "de": ["Spotlight-Bonus"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "independent skate"
        }
      ]
    }
  },
  {
    "id": "skate-s25-grab-spin-line",
    "moodIds": ["challenge", "focused"],
    "type": "challenge",
    "tags": ["skating", "three-attempts"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "skate",
      "installmentIds": ["skate-2025"]
    },
    "translations": {
      "en": {
        "name": "Turn with the Grab",
        "objective": "At a **skate. (2025) ramp with a clear landing**, **land a 180 while holding a grab and roll away**. Stop after three runs.",
        "gameObjective": "At a **skate. (2025) ramp with a clear landing**, **land a 180 while holding a grab and roll away**. Stop after three runs."
      },
      "de": {
        "name": "Mit dem Grab drehen",
        "objective": "Such in **skate. (2025)** eine Rampe mit freier Landung. **Lande eine 180 mit gehaltenem Grab und roll weiter**. Nach drei Anläufen ist Schluss.",
        "gameObjective": "Such in **skate. (2025)** eine Rampe mit freier Landung. **Lande eine 180 mit gehaltenem Grab und roll weiter**. Nach drei Anläufen ist Schluss."
      }
    },
    "gameGenreIds": ["sports", "mmo"],
    "experience": {
      "family": "grab-spins",
      "cardMetadata": { "genreIds": ["sports", "mmo"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["skating"],
      "rules": ["three-attempts"],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "independent skate"
        }
      ]
    }
  },
  {
    "id": "skate-s25-watch-and-return",
    "moodIds": ["connect"],
    "type": "objective",
    "tags": ["skating"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "skate",
      "installmentIds": ["skate-2025"]
    },
    "translations": {
      "en": {
        "name": "Trade a Line",
        "objective": "Meet a friend at the same **skate. (2025) street spot**. Watch each other’s lines, then **each try one obstacle from the other person’s route**.",
        "gameObjective": "Meet a friend at the same **skate. (2025) street spot**. Watch each other’s lines, then **each try one obstacle from the other person’s route**."
      },
      "de": {
        "name": "Eine Line tauschen",
        "objective": "Trefft euch an einem **Street-Spot in skate. (2025)**. Schaut euch eure Lines an und **probiert beide ein Hindernis aus der Route der anderen Person**.",
        "gameObjective": "Trefft euch an einem **Street-Spot in skate. (2025)**. Schaut euch eure Lines an und **probiert beide ein Hindernis aus der Route der anderen Person**."
      }
    },
    "gameGenreIds": ["sports", "mmo"],
    "experience": {
      "family": "shared-skate-routes",
      "cardMetadata": { "genreIds": ["sports", "mmo"], "playStyleIds": ["co-op"] },
      "finish": "outcome",
      "activities": ["skating"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Friend present at the same spot",
          "de": "Freund am selben Spot anwesend",
          "chips": {"en": ["Shared spot"], "de": ["Gemeinsamer Spot"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "others",
          "participation": "co-op",
          "formation": "none",
          "mode": "shared street session"
        }
      ]
    }
  },
  {
    "id": "skate-s25-soundtrack-return",
    "moodIds": ["nostalgic"],
    "type": "inspiration",
    "tags": ["free-roam"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "skate",
      "installmentIds": ["skate-2025"]
    },
    "translations": {
      "en": {
        "name": "The Old Skate Habit",
        "objective": "In skate. (2025), pick a San Van spot that reminds you of somewhere you skated in an earlier Skate game. **Let the shape of its rails and banks guide a session** like the ones you remember.",
        "gameObjective": "In skate. (2025), pick a San Van spot that reminds you of somewhere you skated in an earlier Skate game. **Let the shape of its rails and banks guide a session** like the ones you remember."
      },
      "de": {
        "name": "Die alte Skate-Gewohnheit",
        "objective": "Such in skate. (2025) einen San-Van-Spot, der dich an einen Ort aus einem früheren Skate-Spiel erinnert. Lass dich von seinen Rails und Schrägen **zu einer Session wie damals** führen.",
        "gameObjective": "Such in skate. (2025) einen San-Van-Spot, der dich an einen Ort aus einem früheren Skate-Spiel erinnert. Lass dich von seinen Rails und Schrägen **zu einer Session wie damals** führen."
      }
    },
    "gameGenreIds": ["sports", "mmo"],
    "experience": {
      "family": "familiar-skate-routes",
      "cardMetadata": { "genreIds": ["sports", "mmo"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["free-roam"],
      "rules": [],
      "prerequisites": [
        {
          "en": "A spot recalling an earlier Skate game",
          "de": "Spot mit Erinnerung an ein früheres Skate-Spiel",
          "chips": {"en": ["Familiar spot"], "de": ["Vertrauter Spot"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "independent skate"
        }
      ]
    }
  },
  {
    "id": "skate-s3-hall-of-meat",
    "moodIds": ["challenge"],
    "type": "challenge",
    "tags": ["three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "skate",
      "installmentIds": ["skate-3"]
    },
    "translations": {
      "en": {
        "name": "A Planned Bail",
        "objective": "In Skate 3's Hall of Meat, **hit a score target by steering a bail into an obstacle**. Stop after three attempts.",
        "gameObjective": "In Skate 3's Hall of Meat, **hit a score target by steering a bail into an obstacle**. Stop after three attempts."
      },
      "de": {
        "name": "Geplanter Sturz",
        "objective": "Erreiche in Skate 3s Hall of Meat **eine Punktegrenze, indem du deinen Sturz in ein Hindernis lenkst**. Drei Versuche.",
        "gameObjective": "Erreiche in Skate 3s Hall of Meat **eine Punktegrenze, indem du deinen Sturz in ein Hindernis lenkst**. Drei Versuche."
      }
    },
    "experience": {
      "family": "bail-scoring",
      "cardMetadata": { "genreIds": ["sports", "sandbox"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Hall of Meat challenge available",
          "de": "Hall-of-Meat-Challenge verfügbar",
          "chips": {"en": ["Hall of Meat challenge"], "de": ["Hall-of-Meat-Challenge"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "independent skate"
        }
      ]
    },
    "gameGenreIds": ["sports", "sandbox"]
  },
  {
    "id": "skate-s3-darkslide",
    "moodIds": ["challenge"],
    "type": "challenge",
    "tags": ["skating", "three-attempts"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "skate",
      "installmentIds": ["skate-3"]
    },
    "translations": {
      "en": {
        "name": "Board Upside Down",
        "objective": "At a safe rail, **land a darkslide and roll away**. Stop after three tries.",
        "gameObjective": "At a safe rail, **land a darkslide and roll away**. Stop after three tries."
      },
      "de": {
        "name": "Brett verkehrt herum",
        "objective": "Schaff an einem passenden Geländer **einen Darkslide und roll sauber weiter**. Drei Versuche.",
        "gameObjective": "Schaff an einem passenden Geländer **einen Darkslide und roll sauber weiter**. Drei Versuche."
      }
    },
    "experience": {
      "family": "darkslides",
      "cardMetadata": { "genreIds": ["sports", "sandbox"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["skating"],
      "rules": ["three-attempts"],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "independent skate"
        }
      ]
    },
    "gameGenreIds": ["sports", "sandbox"]
  },
  {
    "id": "skate-s3-park-gap",
    "moodIds": ["create"],
    "type": "creation",
    "tags": ["level-editor"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "skate",
      "installmentIds": ["skate-3"]
    },
    "translations": {
      "en": {
        "name": "Build a Gap",
        "objective": "In Skate.Park, **place two obstacles with a gap between them, then land one trick over your new line**.",
        "gameObjective": "In Skate.Park, **place two obstacles with a gap between them, then land one trick over your new line**."
      },
      "de": {
        "name": "Eine Lücke bauen",
        "objective": "Platziere in Skate.Park **zwei Hindernisse mit Abstand und lande einen Trick über die neue Lücke**.",
        "gameObjective": "Platziere in Skate.Park **zwei Hindernisse mit Abstand und lande einen Trick über die neue Lücke**."
      }
    },
    "experience": {
      "family": "park-design",
      "cardMetadata": { "genreIds": ["sports", "sandbox"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["level-editor"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Skate.Park editor",
          "de": "Skate.Park-Editor",
          "chips": {"en": ["Skate.Park editor"], "de": ["Skate.Park-Editor"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "independent skate"
        }
      ]
    },
    "gameGenreIds": ["sports", "sandbox"]
  },
  {
    "id": "skate-s3-photo-angle",
    "moodIds": ["create"],
    "type": "creation",
    "tags": ["photography"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "skate",
      "installmentIds": ["skate-3"]
    },
    "translations": {
      "en": {
        "name": "Shoot the Trick",
        "objective": "Use the replay camera to **save a photo of one landed trick from an angle a skater on the ground could see**.",
        "gameObjective": "Use the replay camera to **save a photo of one landed trick from an angle a skater on the ground could see**."
      },
      "de": {
        "name": "Den Trick festhalten",
        "objective": "Speichere mit der Replay-Kamera **ein Foto eines gelandeten Tricks aus einem Blickwinkel vom Boden**.",
        "gameObjective": "Speichere mit der Replay-Kamera **ein Foto eines gelandeten Tricks aus einem Blickwinkel vom Boden**."
      }
    },
    "experience": {
      "family": "trick-photography",
      "cardMetadata": { "genreIds": ["sports", "sandbox"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["photography"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Replay of a landed trick",
          "de": "Replay eines gelandeten Tricks",
          "chips": {"en": ["Trick replay"], "de": ["Trick-Replay"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "independent skate"
        }
      ]
    },
    "gameGenreIds": ["sports", "sandbox"]
  },
  {
    "id": "skate-s3-manual-meter",
    "moodIds": ["focused"],
    "type": "objective",
    "tags": ["skating"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "skate",
      "installmentIds": ["skate-3"]
    },
    "translations": {
      "en": {
        "name": "Balance Across",
        "objective": "Choose a plaza in Port Carverton and **manual across it from one visible landmark to another without touching down**.",
        "gameObjective": "Choose a plaza in Port Carverton and **manual across it from one visible landmark to another without touching down**."
      },
      "de": {
        "name": "Balance über den Platz",
        "objective": "Wähle einen Platz in Port Carverton und **fahr im Manual von einer sichtbaren Landmarke zur anderen, ohne abzusetzen**.",
        "gameObjective": "Wähle einen Platz in Port Carverton und **fahr im Manual von einer sichtbaren Landmarke zur anderen, ohne abzusetzen**."
      }
    },
    "experience": {
      "family": "manuals",
      "cardMetadata": { "genreIds": ["sports", "sandbox"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["skating"],
      "rules": [],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "independent skate"
        }
      ]
    },
    "gameGenreIds": ["sports", "sandbox"]
  },
  {
    "id": "skate-s3-team-challenge",
    "moodIds": ["connect"],
    "type": "objective",
    "tags": ["co-op"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "skate",
      "installmentIds": ["skate-3"]
    },
    "translations": {
      "en": {
        "name": "Team Line",
        "objective": "With another player in a Team Challenge, **complete one shared objective while each of you contributes a trick**.",
        "gameObjective": "With another player in a Team Challenge, **complete one shared objective while each of you contributes a trick**."
      },
      "de": {
        "name": "Eine Team-Line",
        "objective": "Erledige mit einer anderen Person in einer Team-Challenge **ein gemeinsames Ziel, zu dem ihr beide einen Trick beitragt**.",
        "gameObjective": "Erledige mit einer anderen Person in einer Team-Challenge **ein gemeinsames Ziel, zu dem ihr beide einen Trick beitragt**."
      }
    },
    "experience": {
      "family": "shared-challenges",
      "cardMetadata": { "genreIds": ["sports", "sandbox"], "playStyleIds": ["co-op"] },
      "finish": "outcome",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "en": "Friend present; working online Team Challenge",
          "de": "Freund anwesend; Online-Team-Challenge verfügbar",
          "chips": {"en": ["Team Challenge"], "de": ["Team-Challenge"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "others",
          "participation": "co-op",
          "formation": "team",
          "mode": "Team Challenge"
        }
      ]
    },
    "gameGenreIds": ["sports", "sandbox"]
  },
  {
    "id": "skate-s3-underflip",
    "moodIds": ["curious"],
    "type": "experiment",
    "tags": ["skating"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "skate",
      "installmentIds": ["skate-3"]
    },
    "translations": {
      "en": {
        "name": "Try an Underflip",
        "objective": "On flat ground, **land an underflip, then repeat it while moving toward a bank** to feel the timing change.",
        "gameObjective": "On flat ground, **land an underflip, then repeat it while moving toward a bank** to feel the timing change."
      },
      "de": {
        "name": "Ein Underflip",
        "objective": "Lande auf ebenem Boden **einen Underflip und wiederhole ihn beim Anfahren auf eine Schräge**, um das Timing zu vergleichen.",
        "gameObjective": "Lande auf ebenem Boden **einen Underflip und wiederhole ihn beim Anfahren auf eine Schräge**, um das Timing zu vergleichen."
      }
    },
    "experience": {
      "family": "underflip-timing",
      "cardMetadata": { "genreIds": ["sports", "sandbox"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["skating"],
      "rules": [],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "independent skate"
        }
      ]
    },
    "gameGenreIds": ["sports", "sandbox"]
  },
  {
    "id": "skate-s3-film-two-spots",
    "moodIds": ["create"],
    "type": "creation",
    "tags": ["photography"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "skate",
      "installmentIds": ["skate-3"]
    },
    "translations": {
      "en": {
        "name": "Keep the Line",
        "objective": "In **Skate 3**, record a line through one street spot. **Save a replay clip showing its approach, tricks, and roll-away**.",
        "gameObjective": "In **Skate 3**, record a line through one street spot. **Save a replay clip showing its approach, tricks, and roll-away**."
      },
      "de": {
        "name": "Die Line behalten",
        "objective": "Nimm in **Skate 3** eine Line an einem Street-Spot auf. **Speichere einen Replay-Clip mit Anfahrt, Tricks und Ausrollen**.",
        "gameObjective": "Nimm in **Skate 3** eine Line an einem Street-Spot auf. **Speichere einen Replay-Clip mit Anfahrt, Tricks und Ausrollen**."
      }
    },
    "experience": {
      "family": "replay-filming",
      "cardMetadata": { "genreIds": ["sports", "sandbox"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["photography"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Replay Editor; one recorded line",
          "de": "Replay-Editor; eine aufgenommene Line",
          "chips": {"en": ["Replay Editor", "Recorded line"], "de": ["Replay-Editor", "Aufgenommene Line"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "independent skate"
        }
      ]
    },
    "gameGenreIds": ["sports", "sandbox"]
  },
  {
    "id": "skate-s25-rooftop-approach",
    "moodIds": ["explore"],
    "type": "objective",
    "tags": ["traversal"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "skate",
      "installmentIds": ["skate-2025"]
    },
    "translations": {
      "en": {
        "name": "Climb to the Spot",
        "objective": "In San Vansterdam, **reach a rooftop skate spot by climbing on foot, then skate a line from it**.",
        "gameObjective": "In San Vansterdam, **reach a rooftop skate spot by climbing on foot, then skate a line from it**."
      },
      "de": {
        "name": "Zum Spot hochklettern",
        "objective": "Erreiche in San Vansterdam **einen Skate-Spot auf einem Dach zu Fuß kletternd und fahr von dort eine Line**.",
        "gameObjective": "Erreiche in San Vansterdam **einen Skate-Spot auf einem Dach zu Fuß kletternd und fahr von dort eine Line**."
      }
    },
    "gameGenreIds": ["sports", "sandbox", "mmo"],
    "experience": {
      "family": "rooftop-skating",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["traversal"],
      "rules": [],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "independent skate"
        }
      ]
    }
  },
  {
    "id": "skate-s25-replay-slam",
    "moodIds": ["create"],
    "type": "creation",
    "tags": ["photography"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "skate",
      "installmentIds": ["skate-2025"]
    },
    "translations": {
      "en": {
        "name": "Keep the Slam",
        "objective": "Use the Replay Editor to **save a short clip of a surprising bail, including the trick that caused it**.",
        "gameObjective": "Use the Replay Editor to **save a short clip of a surprising bail, including the trick that caused it**."
      },
      "de": {
        "name": "Den Sturz behalten",
        "objective": "Speichere mit dem Replay-Editor **einen kurzen Clip eines überraschenden Sturzes samt Trick davor**.",
        "gameObjective": "Speichere mit dem Replay-Editor **einen kurzen Clip eines überraschenden Sturzes samt Trick davor**."
      }
    },
    "gameGenreIds": ["sports", "sandbox", "mmo"],
    "experience": {
      "family": "bail-filming",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["photography"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Replay Editor; recorded bail",
          "de": "Replay-Editor; aufgenommener Sturz",
          "chips": {"en": ["Replay Editor", "Bail"], "de": ["Replay-Editor", "Aufgenommener Sturz"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "independent skate"
        }
      ]
    }
  },
  {
    "id": "skate-s25-quickdrop-gap",
    "moodIds": ["create"],
    "type": "creation",
    "tags": ["building"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "skate",
      "installmentIds": ["skate-2025"]
    },
    "translations": {
      "en": {
        "name": "Make a New Gap",
        "objective": "Place two Quick Drop objects and **land a trick over the space you made between them**.",
        "gameObjective": "Place two Quick Drop objects and **land a trick over the space you made between them**."
      },
      "de": {
        "name": "Eine neue Lücke",
        "objective": "Platziere zwei Quick-Drop-Objekte und **lande einen Trick über die Lücke dazwischen**.",
        "gameObjective": "Platziere zwei Quick-Drop-Objekte und **lande einen Trick über die Lücke dazwischen**."
      }
    },
    "gameGenreIds": ["sports", "sandbox", "mmo"],
    "experience": {
      "family": "prop-gaps",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["building"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Quick Drop unlocked",
          "de": "Quick Drop freigeschaltet",
          "chips": {"en": ["Quick Drop"], "de": ["Quick Drop"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "independent skate"
        }
      ]
    }
  },
  {
    "id": "skate-s25-throwdown-join",
    "moodIds": ["connect"],
    "type": "objective",
    "tags": ["skating"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "skate",
      "installmentIds": ["skate-2025"]
    },
    "translations": {
      "en": {
        "name": "Join a Throwdown",
        "objective": "Join a nearby Throwdown with other skaters and **complete one of its shared goals before the session ends**.",
        "gameObjective": "Join a nearby Throwdown with other skaters and **complete one of its shared goals before the session ends**."
      },
      "de": {
        "name": "Beim Throwdown mitmachen",
        "objective": "Mach bei einem Throwdown mit anderen Skatern mit und **erledige vor dem Ende ein gemeinsames Ziel**.",
        "gameObjective": "Mach bei einem Throwdown mit anderen Skatern mit und **erledige vor dem Ende ein gemeinsames Ziel**."
      }
    },
    "gameGenreIds": ["sports", "sandbox", "mmo"],
    "experience": {
      "family": "shared-throwdown",
      "cardMetadata": { "genreIds": [], "playStyleIds": ["co-op"] },
      "finish": "outcome",
      "activities": ["skating"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Available shared Throwdown",
          "de": "Verfügbarer gemeinsamer Throwdown",
          "chips": {"en": ["Shared Throwdown"], "de": ["Gemeinsamer Throwdown"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "others",
          "participation": "co-op",
          "formation": "none",
          "mode": "shared street session"
        }
      ]
    }
  },
  {
    "id": "skate-s25-bounty-route",
    "moodIds": ["focused"],
    "type": "objective",
    "tags": ["skating"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "skate",
      "installmentIds": ["skate-2025"]
    },
    "translations": {
      "en": {
        "name": "One Bounty, One Route",
        "objective": "In **skate. (2025)**, choose an available Endless Bounty. Find a San Van spot with suitable obstacles and **complete the bounty there along one connected route**.",
        "gameObjective": "In **skate. (2025)**, choose an available Endless Bounty. Find a San Van spot with suitable obstacles and **complete the bounty there along one connected route**."
      },
      "de": {
        "name": "Eine Bounty, ein Weg",
        "objective": "Wähle in **skate. (2025)** eine verfügbare Endless Bounty. Such in San Van einen Spot mit passenden Hindernissen und **erledige die Bounty dort in einer zusammenhängenden Route**.",
        "gameObjective": "Wähle in **skate. (2025)** eine verfügbare Endless Bounty. Such in San Van einen Spot mit passenden Hindernissen und **erledige die Bounty dort in einer zusammenhängenden Route**."
      }
    },
    "gameGenreIds": ["sports", "sandbox", "mmo"],
    "experience": {
      "family": "bounty-routing",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["skating"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Endless Bounty available",
          "de": "Endless Bounty verfügbar",
          "chips": {"en": ["Endless Bounty"], "de": ["Endless Bounty"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "independent skate"
        }
      ]
    }
  },
  {
    "id": "skate-s25-board-story",
    "moodIds": ["create"],
    "type": "creation",
    "tags": ["loadout"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "skate",
      "installmentIds": ["skate-2025"]
    },
    "translations": {
      "en": {
        "name": "Build Your Board",
        "objective": "Change the deck and at least one hardware or grip detail, then **ride your new setup through one favorite spot**.",
        "gameObjective": "Change the deck and at least one hardware or grip detail, then **ride your new setup through one favorite spot**."
      },
      "de": {
        "name": "Dein neues Brett",
        "objective": "Ändere Deck und mindestens ein Detail an Grip oder Hardware. **Fahr das neue Board durch einen Lieblingsspot**.",
        "gameObjective": "Ändere Deck und mindestens ein Detail an Grip oder Hardware. **Fahr das neue Board durch einen Lieblingsspot**."
      }
    },
    "gameGenreIds": ["sports", "sandbox", "mmo"],
    "experience": {
      "family": "board-style",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["loadout"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Owned board customization parts",
          "de": "Eigene Board-Anpassungsteile",
          "chips": {"en": ["Board parts"], "de": ["Board-Teile"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "independent skate"
        }
      ]
    }
  },
  {
    "id": "skate-s25-spot-battle",
    "moodIds": ["challenge"],
    "type": "challenge",
    "tags": ["skating", "three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "skate",
      "installmentIds": ["skate-2025"]
    },
    "translations": {
      "en": {
        "name": "Defend a Spot",
        "objective": "Start or join a Spot Battle and **post one landed score on its chosen obstacle**. Stop after three runs.",
        "gameObjective": "Start or join a Spot Battle and **post one landed score on its chosen obstacle**. Stop after three runs."
      },
      "de": {
        "name": "Spot verteidigen",
        "objective": "Starte oder betrete einen Spot Battle und **lande einen gewerteten Trick am gewählten Hindernis**. Hör nach drei Läufen auf.",
        "gameObjective": "Starte oder betrete einen Spot Battle und **lande einen gewerteten Trick am gewählten Hindernis**. Hör nach drei Läufen auf."
      }
    },
    "gameGenreIds": ["sports", "sandbox", "mmo"],
    "experience": {
      "family": "spot-battles",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["skating"],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Spot Battle available",
          "de": "Spot Battle verfügbar",
          "chips": {"en": ["Spot Battle"], "de": ["Spot Battle"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "independent skate"
        }
      ]
    }
  },
  {
    "id": "skate-s25-foot-to-board",
    "moodIds": ["curious"],
    "type": "experiment",
    "tags": ["traversal"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "skate",
      "installmentIds": ["skate-2025"]
    },
    "translations": {
      "en": {
        "name": "Ride the Way Back",
        "objective": "Climb off-board to a spot you cannot roll into and **find a rideable line back down without fast travel**.",
        "gameObjective": "Climb off-board to a spot you cannot roll into and **find a rideable line back down without fast travel**."
      },
      "de": {
        "name": "Den Weg zurück fahren",
        "objective": "Klettere ohne Brett zu einem schwer erreichbaren Spot und **finde ohne Schnellreise eine fahrbare Line zurück**.",
        "gameObjective": "Klettere ohne Brett zu einem schwer erreichbaren Spot und **finde ohne Schnellreise eine fahrbare Line zurück**."
      }
    },
    "gameGenreIds": ["sports", "sandbox", "mmo"],
    "experience": {
      "family": "offboard-traversal",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["traversal"],
      "rules": [],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "independent skate"
        }
      ]
    }
  }
]);
