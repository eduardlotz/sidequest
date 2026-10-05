import { defineQuests } from "../defineQuests";

export const GamesEaSportsFcQuests = defineQuests([
  {
    "id": "ea-sports-fc-fc25-kickoff-build",
    "moodIds": ["focused"],
    "type": "experiment",
    "tags": ["vs-bots"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-25"]
    },
    "translations": {
      "en": {
        "name": "Pass Through Midfield",
        "objective": "Start **FC 25 Kick Off** against the CPU. **Build an attack with at least three passes before shooting** and see whether the extra pass opens space.",
        "gameObjective": "Start **FC 25 Kick Off** against the CPU. **Build an attack with at least three passes before shooting** and see whether the extra pass opens space."
      },
      "de": {
        "name": "Durchs Mittelfeld spielen",
        "objective": "Starte in **FC 25 Anstoß** gegen die CPU. **Spiel einen Angriff mit mindestens drei Pässen, bevor du schießt**. Schau, ob der zusätzliche Pass Raum öffnet.",
        "gameObjective": "Starte in **FC 25 Anstoß** gegen die CPU. **Spiel einen Angriff mit mindestens drei Pässen, bevor du schießt**. Schau, ob der zusätzliche Pass Raum öffnet."
      }
    },
    "experience": {
      "family": "pass-build",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["vs-bots"],
      "prerequisites": [
        {
          "en": "Solo / bot mode available",
          "de": "Solo- / Bot-Modus verfügbar",
          "chips": {"en": ["Bot mode"], "de": ["Bot-Modus"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "co-op",
          "formation": "team",
          "mode": "Career or Kick Off as stated"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "ea-sports-fc-fc25-career-fixture",
    "moodIds": ["progress", "nostalgic"],
    "type": "objective",
    "tags": ["story"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-25"]
    },
    "translations": {
      "en": {
        "name": "Next Career Match",
        "objective": "Load a familiar **EA SPORTS FC 25 Career save**. **Play its next scheduled fixture through the final whistle**, keeping the result.",
        "gameObjective": "Load a familiar **EA SPORTS FC 25 Career save**. **Play its next scheduled fixture through the final whistle**, keeping the result."
      },
      "de": {
        "name": "Das nächste Karrierematch",
        "objective": "Lade einen vertrauten **EA-SPORTS-FC-25-Karrierespielstand**. **Spiel das nächste angesetzte Match bis zum Schlusspfiff** und behalte das Ergebnis.",
        "gameObjective": "Lade einen vertrauten **EA-SPORTS-FC-25-Karrierespielstand**. **Spiel das nächste angesetzte Match bis zum Schlusspfiff** und behalte das Ergebnis."
      }
    },
    "experience": {
      "family": "career-fixture",
      "cardMetadata": { "genreIds": ["sports", "simulation"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Familiar Career save with next fixture",
          "de": "Vertrauter Karrierespielstand mit nächstem Match",
          "chips": {"en": ["Career save"], "de": ["Karrierespielstand"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "co-op",
          "formation": "team",
          "mode": "Career or Kick Off as stated"
        }
      ]
    },
    "gameGenreIds": ["sports", "simulation"]
  },
  {
    "id": "ea-sports-fc-fc25-cross-finish",
    "moodIds": ["challenge", "focused"],
    "type": "challenge",
    "tags": ["three-attempts"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-25"]
    },
    "translations": {
      "en": {
        "name": "Finish a Cross",
        "objective": "In **FC 25 Kick Off** against the CPU, **score from an open-play cross**. Finish after the goal or three crossing attacks.",
        "gameObjective": "In **FC 25 Kick Off** against the CPU, **score from an open-play cross**. Finish after the goal or three crossing attacks."
      },
      "de": {
        "name": "Nach einer Flanke treffen",
        "objective": "Starte in **FC 25 Anstoß** gegen die CPU. **Erziel nach einer Flanke aus dem laufenden Spiel ein Tor**. Hör nach dem Treffer oder drei Angriffen mit Flanke auf.",
        "gameObjective": "Starte in **FC 25 Anstoß** gegen die CPU. **Erziel nach einer Flanke aus dem laufenden Spiel ein Tor**. Hör nach dem Treffer oder drei Angriffen mit Flanke auf."
      }
    },
    "experience": {
      "family": "cross-finish",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["three-attempts"],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "co-op",
          "formation": "team",
          "mode": "Career or Kick Off as stated"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "ea-sports-fc-fc25-save-a-shape",
    "moodIds": ["create", "focused"],
    "type": "creation",
    "tags": ["loadout"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-25"]
    },
    "translations": {
      "en": {
        "name": "Set Your Shape",
        "objective": "In **FC 25 Kick Off** Team Management, change your starting formation. **Save the team sheet and play an attack with it** to see the new shape on the pitch.",
        "gameObjective": "In **FC 25 Kick Off** Team Management, change your starting formation. **Save the team sheet and play an attack with it** to see the new shape on the pitch."
      },
      "de": {
        "name": "Deine Formation",
        "objective": "Ändere in der Teamverwaltung von **FC 25 Anstoß** deine Startformation. **Speichere den Spielplan und spiel damit einen Angriff**, um die neue Aufteilung auf dem Platz zu sehen.",
        "gameObjective": "Ändere in der Teamverwaltung von **FC 25 Anstoß** deine Startformation. **Speichere den Spielplan und spiel damit einen Angriff**, um die neue Aufteilung auf dem Platz zu sehen."
      }
    },
    "experience": {
      "family": "formation",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["loadout"],
      "rules": [],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "co-op",
          "formation": "team",
          "mode": "Career or Kick Off as stated"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "ea-sports-fc-fc26-authentic-match",
    "moodIds": ["relax", "focused"],
    "type": "objective",
    "tags": ["vs-bots", "full-match"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-26"]
    },
    "translations": {
      "en": {
        "name": "Play the Authentic Game",
        "objective": "Set **EA SPORTS FC 26 Kick Off** to the Authentic gameplay preset and play against the CPU. **Finish the full match** and notice how the slower tempo shapes your attacks.",
        "gameObjective": "Set **EA SPORTS FC 26 Kick Off** to the Authentic gameplay preset and play against the CPU. **Finish the full match** and notice how the slower tempo shapes your attacks."
      },
      "de": {
        "name": "Authentisch spielen",
        "objective": "Stell **EA SPORTS FC 26 Kick Off** auf den Authentisch-Spielstil und spiel gegen die CPU. **Beende das ganze Match** und achte darauf, wie das langsamere Tempo deine Angriffe verändert.",
        "gameObjective": "Stell **EA SPORTS FC 26 Kick Off** auf den Authentisch-Spielstil und spiel gegen die CPU. **Beende das ganze Match** und achte darauf, wie das langsamere Tempo deine Angriffe verändert."
      }
    },
    "experience": {
      "family": "authentic-match",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": [],
      "rules": ["full-match"],
      "prerequisites": [
        {
          "en": "Solo / bot mode available",
          "de": "Solo- / Bot-Modus verfügbar",
          "chips": {"en": ["Bot mode"], "de": ["Bot-Modus"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "co-op",
          "formation": "team",
          "mode": "Career or Kick Off as stated"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "ea-sports-fc-fc26-preset-compare",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["vs-bots", "full-match"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-26"]
    },
    "translations": {
      "en": {
        "name": "Two Match Presets",
        "objective": "Play one **EA SPORTS FC 26 Kick Off** match against the CPU with Competitive and a second with Authentic, keeping the teams the same. **Finish both matches and compare the pace.**",
        "gameObjective": "Play one **EA SPORTS FC 26 Kick Off** match against the CPU with Competitive and a second with Authentic, keeping the teams the same. **Finish both matches and compare the pace.**"
      },
      "de": {
        "name": "Zwei Spielstile testen",
        "objective": "Spiel in **EA SPORTS FC 26 Kick Off** erst mit Kompetitiv und dann mit Authentisch gegen die CPU, immer mit denselben Teams. **Beende beide Matches und vergleiche das Tempo.**",
        "gameObjective": "Spiel in **EA SPORTS FC 26 Kick Off** erst mit Kompetitiv und dann mit Authentisch gegen die CPU, immer mit denselben Teams. **Beende beide Matches und vergleiche das Tempo.**"
      }
    },
    "experience": {
      "family": "preset-comparison",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["full-match"],
      "prerequisites": [
        {
          "en": "Competitive and Authentic presets available",
          "de": "Kompetitiv- und Authentisch-Voreinstellungen verfügbar",
          "chips": {"en": ["Gameplay presets"], "de": ["Spielstil-Vorgaben"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "co-op",
          "formation": "team",
          "mode": "Career or Kick Off as stated"
        }
      ]
    },
    "gameGenreIds": ["sports"],
    "rarity": "special"
  },
  {
    "id": "ea-sports-fc-fc26-corner-routine",
    "moodIds": ["focused", "curious"],
    "type": "experiment",
    "tags": ["vs-bots", "full-match"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-26"]
    },
    "translations": {
      "en": {
        "name": "Use a Corner Routine",
        "objective": "In **FC 26 Kick Off against the CPU**, plan to take corners short. **Try passing back into the attacking area from a short corner and finish the match**. If no corner occurs, the completed match still counts.",
        "gameObjective": "In **FC 26 Kick Off against the CPU**, plan to take corners short. **Try passing back into the attacking area from a short corner and finish the match**. If no corner occurs, the completed match still counts."
      },
      "de": {
        "name": "Eine Ecke einstudieren",
        "objective": "Plane in **FC 26 Anstoß gegen die CPU** kurze Ecken. **Probier nach einer kurzen Ecke den Pass zurück in den Angriffsbereich und beende das Match**. Gibt es keine Ecke, zählt das beendete Match trotzdem.",
        "gameObjective": "Plane in **FC 26 Anstoß gegen die CPU** kurze Ecken. **Probier nach einer kurzen Ecke den Pass zurück in den Angriffsbereich und beende das Match**. Gibt es keine Ecke, zählt das beendete Match trotzdem."
      }
    },
    "experience": {
      "family": "corner-routine",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": [],
      "rules": ["full-match"],
      "prerequisites": [
        {
          "en": "Kick Off against the CPU",
          "de": "Anstoß gegen die CPU",
          "chips": {"en": ["Kick Off"], "de": ["Anstoß"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "co-op",
          "formation": "team",
          "mode": "Career or Kick Off as stated"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "ea-sports-fc-fc27-grounds-tour",
    "moodIds": ["explore", "restless"],
    "type": "inspiration",
    "tags": ["free-roam"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-27"]
    },
    "translations": {
      "en": {
        "name": "Step into The Grounds",
        "objective": "Open The Grounds in EA SPORTS FC 27 and explore its football spaces at your own pace. **Try a pitch or activity that catches your eye**, then choose when you have had enough.",
        "gameObjective": "Open The Grounds in EA SPORTS FC 27 and explore its football spaces at your own pace. **Try a pitch or activity that catches your eye**, then choose when you have had enough."
      },
      "de": {
        "name": "Auf zu The Grounds",
        "objective": "Geh in EA SPORTS FC 27 zu The Grounds und erkunde die Fußballplätze in deinem Tempo. **Probier einen Platz oder eine Aktivität aus**, die dir auffällt, und entscheide selbst, wann es reicht.",
        "gameObjective": "Geh in EA SPORTS FC 27 zu The Grounds und erkunde die Fußballplätze in deinem Tempo. **Probier einen Platz oder eine Aktivität aus**, die dir auffällt, und entscheide selbst, wann es reicht."
      }
    },
    "experience": {
      "family": "grounds-roaming",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["free-roam"],
      "rules": [],
      "prerequisites": [
        {
          "en": "The Grounds supported on this platform",
          "de": "The Grounds auf dieser Plattform unterstützt",
          "chips": {"en": ["The Grounds"], "de": ["The Grounds"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "The Grounds"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "ea-sports-fc-fc27-career-rivalry",
    "moodIds": ["progress"],
    "type": "objective",
    "tags": ["story", "full-match"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-27"]
    },
    "translations": {
      "en": {
        "name": "A Rivalry Begins",
        "objective": "In **EA SPORTS FC 27 Player Career**, choose an available Rivalry objective and **finish its next match while working toward that objective**.",
        "gameObjective": "In **EA SPORTS FC 27 Player Career**, choose an available Rivalry objective and **finish its next match while working toward that objective**."
      },
      "de": {
        "name": "Eine Rivalität beginnt",
        "objective": "Wähl in der **EA SPORTS FC 27 Spielerkarriere** ein verfügbares Rivalitätsziel und **beende das nächste Match mit diesem Ziel im Blick**.",
        "gameObjective": "Wähl in der **EA SPORTS FC 27 Spielerkarriere** ein verfügbares Rivalitätsziel und **beende das nächste Match mit diesem Ziel im Blick**."
      }
    },
    "experience": {
      "family": "rivalry-fixture",
      "cardMetadata": { "genreIds": ["sports", "simulation"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["story"],
      "rules": ["full-match"],
      "prerequisites": [
        {
          "en": "Player Career with available Rivalry objective",
          "de": "Spielerkarriere mit verfügbarem Rivalitätsziel",
          "chips": {"en": ["Player Career", "Rivalry objective"], "de": ["Spielerkarriere", "Rivalitätsziel"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "co-op",
          "formation": "team",
          "mode": "Career or Kick Off as stated"
        }
      ]
    },
    "gameGenreIds": ["sports", "simulation"]
  },
  {
    "id": "ea-sports-fc-fc27-no-slide-defense",
    "moodIds": ["challenge", "focused"],
    "type": "challenge",
    "tags": ["three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-27"]
    },
    "translations": {
      "en": {
        "name": "Stay on Your Feet",
        "objective": "In **FC 27 Kick Off** against the CPU, **win the ball three times through positioning without sliding**. Finish after success or three halves.",
        "gameObjective": "In **FC 27 Kick Off** against the CPU, **win the ball three times through positioning without sliding**. Finish after success or three halves."
      },
      "de": {
        "name": "Auf den Beinen bleiben",
        "objective": "Erobere in **FC 27 Anstoß** gegen die CPU **dreimal den Ball durch Stellungsspiel ohne Grätsche**. Hör nach dem Erfolg oder drei Halbzeiten auf.",
        "gameObjective": "Erobere in **FC 27 Anstoß** gegen die CPU **dreimal den Ball durch Stellungsspiel ohne Grätsche**. Hör nach dem Erfolg oder drei Halbzeiten auf."
      }
    },
    "experience": {
      "family": "standing-defense",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["three-attempts"],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "co-op",
          "formation": "team",
          "mode": "Career or Kick Off as stated"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "ea-sports-fc-fc25-role-scout-plan",
    "moodIds": ["progress", "focused"],
    "type": "objective",
    "tags": ["loadout", "story"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-25"]
    },
    "translations": {
      "en": {
        "name": "Scout the Missing Role",
        "objective": "In **FC 25 Manager Career**, identify a position where your tactic lacks a suitable Role. **Send a scout instruction for that position and Role**.",
        "gameObjective": "In **FC 25 Manager Career**, identify a position where your tactic lacks a suitable Role. **Send a scout instruction for that position and Role**."
      },
      "de": {
        "name": "Die fehlende Rolle scouten",
        "objective": "Such in der **FC-25-Managerkarriere** eine Position, auf der deiner Taktik eine passende Rolle fehlt. **Schick eine Scout-Anweisung für diese Position und Rolle los**.",
        "gameObjective": "Such in der **FC-25-Managerkarriere** eine Position, auf der deiner Taktik eine passende Rolle fehlt. **Schick eine Scout-Anweisung für diese Position und Rolle los**."
      }
    },
    "experience": {
      "family": "scouting",
      "cardMetadata": { "genreIds": ["sports", "simulation"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["loadout", "story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Manager Career scout instructions available",
          "de": "Scout-Anweisungen in Managerkarriere verfügbar",
          "chips": {"en": ["Manager Career", "Scout instructions"], "de": ["Managerkarriere", "Scout-Anweisungen"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "Manager Career"
        }
      ]
    },
    "gameGenreIds": ["sports", "simulation"]
  },
  {
    "id": "ea-sports-fc-fc25-academy-role-growth",
    "moodIds": ["progress", "focused"],
    "type": "objective",
    "tags": ["story"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-25"]
    },
    "translations": {
      "en": {
        "name": "Grow into the Role",
        "objective": "In **FC 25 Manager Career**, **assign an existing academy player a Development Plan for the Role you want them to learn**. Save the plan; a rating increase can come later.",
        "gameObjective": "In **FC 25 Manager Career**, **assign an existing academy player a Development Plan for the Role you want them to learn**. Save the plan; a rating increase can come later."
      },
      "de": {
        "name": "In eine Rolle hineinwachsen",
        "objective": "**Gib in der FC-25-Managerkarriere einem vorhandenen Nachwuchsspieler einen Entwicklungsplan für die gewünschte Rolle**. Speichere den Plan; ein Wertungsanstieg darf später kommen.",
        "gameObjective": "**Gib in der FC-25-Managerkarriere einem vorhandenen Nachwuchsspieler einen Entwicklungsplan für die gewünschte Rolle**. Speichere den Plan; ein Wertungsanstieg darf später kommen."
      }
    },
    "experience": {
      "family": "academy-plan",
      "cardMetadata": { "genreIds": ["sports", "simulation"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Existing academy player",
          "de": "Vorhandener Nachwuchsspieler",
          "chips": {"en": ["Academy player"], "de": ["Nachwuchsspieler"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "Manager Career"
        }
      ]
    },
    "gameGenreIds": ["sports", "simulation"]
  },
  {
    "id": "ea-sports-fc-fc25-wind-long-ball",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["full-match", "vs-bots"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-25"]
    },
    "translations": {
      "en": {
        "name": "Playing with the Wind",
        "objective": "Enable wind in **FC 25 offline Match settings** and play Kick Off against the CPU. **Try long passes in both halves and finish the match**, comparing the ball’s flight after the sides change.",
        "gameObjective": "Enable wind in **FC 25 offline Match settings** and play Kick Off against the CPU. **Try long passes in both halves and finish the match**, comparing the ball’s flight after the sides change."
      },
      "de": {
        "name": "Mit dem Wind spielen",
        "objective": "Aktiviere den Wind in den **Offline-Partieeinstellungen von FC 25** und spiel Anstoß gegen die CPU. **Probier in beiden Halbzeiten lange Pässe und beende das Match**. Vergleiche nach dem Seitenwechsel die Flugbahn des Balls.",
        "gameObjective": "Aktiviere den Wind in den **Offline-Partieeinstellungen von FC 25** und spiel Anstoß gegen die CPU. **Probier in beiden Halbzeiten lange Pässe und beende das Match**. Vergleiche nach dem Seitenwechsel die Flugbahn des Balls."
      }
    },
    "experience": {
      "family": "wind-passing",
      "cardMetadata": { "genreIds": ["sports", "simulation"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["full-match"],
      "prerequisites": [
        {
          "en": "Wind setting available offline",
          "de": "Wind-Einstellung offline verfügbar",
          "chips": {"en": ["Wind setting"], "de": ["Wind-Einstellung"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "co-op",
          "formation": "team",
          "mode": "Career or Kick Off as stated"
        }
      ]
    },
    "gameGenreIds": ["sports", "simulation"]
  },
  {
    "id": "ea-sports-fc-fc25-womens-career-opening",
    "moodIds": ["explore", "progress"],
    "type": "objective",
    "tags": ["story", "full-match"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-25"]
    },
    "translations": {
      "en": {
        "name": "Manage the Women’s Team",
        "objective": "Start a **FC 25 Women’s Manager Career** with a club you already follow or recognise. Set the first team sheet and **play the opening fixture through the final whistle**.",
        "gameObjective": "Start a **FC 25 Women’s Manager Career** with a club you already follow or recognise. Set the first team sheet and **play the opening fixture through the final whistle**."
      },
      "de": {
        "name": "Das Frauenteam übernehmen",
        "objective": "Starte in **FC 25 eine Frauen-Managerkarriere** mit einem Verein, den du kennst oder dem du folgst. Leg die erste Aufstellung fest und **spiel das Auftaktmatch bis zum Schlusspfiff**.",
        "gameObjective": "Starte in **FC 25 eine Frauen-Managerkarriere** mit einem Verein, den du kennst oder dem du folgst. Leg die erste Aufstellung fest und **spiel das Auftaktmatch bis zum Schlusspfiff**."
      }
    },
    "experience": {
      "family": "womens-career",
      "cardMetadata": { "genreIds": ["sports", "simulation"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["story"],
      "rules": ["full-match"],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "co-op",
          "formation": "team",
          "mode": "Career or Kick Off as stated"
        }
      ]
    },
    "gameGenreIds": ["sports", "simulation"]
  },
  {
    "id": "ea-sports-fc-fc25-live-start-rescue",
    "moodIds": ["explore", "curious"],
    "type": "inspiration",
    "tags": ["story"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-25"]
    },
    "translations": {
      "en": {
        "name": "Take Over Midseason",
        "objective": "If FC 25 Live Start Points are available, pick a supported club at a point in the 2024/25 season you remember. Inherit its injuries and league position, and **see where you want to take that unfinished season**.",
        "gameObjective": "If FC 25 Live Start Points are available, pick a supported club at a point in the 2024/25 season you remember. Inherit its injuries and league position, and **see where you want to take that unfinished season**."
      },
      "de": {
        "name": "Mitten in die Saison",
        "objective": "Such in FC 25, wenn Live Start Points verfügbar sind, einen unterstützten Verein zu einem Zeitpunkt der Saison 2024/25, an den du dich erinnerst. Übernimm Verletzungen und Tabellenplatz und **schau, wohin du die offene Saison führen magst**.",
        "gameObjective": "Such in FC 25, wenn Live Start Points verfügbar sind, einen unterstützten Verein zu einem Zeitpunkt der Saison 2024/25, an den du dich erinnerst. Übernimm Verletzungen und Tabellenplatz und **schau, wohin du die offene Saison führen magst**."
      }
    },
    "experience": {
      "family": "live-start",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Live Start Points currently available",
          "de": "Live Start Points aktuell verfügbar",
          "chips": {"en": ["Live Start Points"], "de": ["Live Start Points"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "co-op",
          "formation": "team",
          "mode": "Career or Kick Off as stated"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "ea-sports-fc-fc25-morale-match",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["story", "full-match"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-25"]
    },
    "translations": {
      "en": {
        "name": "Watch the Morale",
        "objective": "In **FC 25 Manager Career**, check a starter’s morale before an available press conference. Answer without automatically praising everyone, **play the next match**, and compare that player’s morale afterward.",
        "gameObjective": "In **FC 25 Manager Career**, check a starter’s morale before an available press conference. Answer without automatically praising everyone, **play the next match**, and compare that player’s morale afterward."
      },
      "de": {
        "name": "Auf die Moral schauen",
        "objective": "Prüf in der **FC-25-Managerkarriere** vor einer verfügbaren Pressekonferenz die Moral eines Stammspielers. Lobe nicht automatisch alle, **spiel das nächste Match** und vergleiche danach seine Moral.",
        "gameObjective": "Prüf in der **FC-25-Managerkarriere** vor einer verfügbaren Pressekonferenz die Moral eines Stammspielers. Lobe nicht automatisch alle, **spiel das nächste Match** und vergleiche danach seine Moral."
      }
    },
    "experience": {
      "family": "morale",
      "cardMetadata": { "genreIds": ["sports", "simulation"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["story"],
      "rules": ["full-match"],
      "prerequisites": [
        {
          "en": "Career save with available press conference",
          "de": "Karrierespielstand mit verfügbarer Pressekonferenz",
          "chips": {"en": ["Press conference"], "de": ["Pressekonferenz"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "co-op",
          "formation": "team",
          "mode": "Career or Kick Off as stated"
        }
      ]
    },
    "gameGenreIds": ["sports", "simulation"]
  },
  {
    "id": "ea-sports-fc-fc25-wingback-lane",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["vs-bots"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-25"]
    },
    "translations": {
      "en": {
        "name": "Watch the Wing-Back",
        "objective": "In **FC 25 Kick Off** against the CPU, assign a supported Wingback Role and focus to a full-back. **Try an attack down their flank and watch their forward run**, comparing it with your usual full-back.",
        "gameObjective": "In **FC 25 Kick Off** against the CPU, assign a supported Wingback Role and focus to a full-back. **Try an attack down their flank and watch their forward run**, comparing it with your usual full-back."
      },
      "de": {
        "name": "Den Wingback beobachten",
        "objective": "Gib in **FC 25 Anstoß** gegen die CPU einem Außenverteidiger die Wingback-Rolle mit verfügbarem Fokus. **Probier einen Angriff über seine Seite und achte auf seinen Vorstoß**. Vergleiche den Laufweg mit deinem üblichen Außenverteidiger.",
        "gameObjective": "Gib in **FC 25 Anstoß** gegen die CPU einem Außenverteidiger die Wingback-Rolle mit verfügbarem Fokus. **Probier einen Angriff über seine Seite und achte auf seinen Vorstoß**. Vergleiche den Laufweg mit deinem üblichen Außenverteidiger."
      }
    },
    "experience": {
      "family": "wingback",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["vs-bots"],
      "prerequisites": [
        {
          "en": "Full-back supporting Wingback Role",
          "de": "Außenverteidiger mit Wingback-Rolle",
          "chips": {"en": ["Wingback Role"], "de": ["Wingback-Rolle"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "co-op",
          "formation": "team",
          "mode": "Career or Kick Off as stated"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "ea-sports-fc-fc25-false-nine-link",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["vs-bots"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-25"]
    },
    "translations": {
      "en": {
        "name": "The Striker Drops",
        "objective": "In **FC 25 Kick Off** against the CPU, assign a supported False 9 Role to your striker. **Try passing to them as they drop into midfield** and watch the space they leave behind.",
        "gameObjective": "In **FC 25 Kick Off** against the CPU, assign a supported False 9 Role to your striker. **Try passing to them as they drop into midfield** and watch the space they leave behind."
      },
      "de": {
        "name": "Die Spitze fällt zurück",
        "objective": "Nutze in **FC 25 Anstoß** gegen die CPU bei einer passenden Spitze die False-9-Rolle. **Probier einen Pass zu ihr beim Zurückfallen ins Mittelfeld** und schau auf den Raum dahinter.",
        "gameObjective": "Nutze in **FC 25 Anstoß** gegen die CPU bei einer passenden Spitze die False-9-Rolle. **Probier einen Pass zu ihr beim Zurückfallen ins Mittelfeld** und schau auf den Raum dahinter."
      }
    },
    "experience": {
      "family": "false-nine",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["vs-bots"],
      "prerequisites": [
        {
          "en": "Striker supporting False 9 Role",
          "de": "Spitze mit False-9-Rolle",
          "chips": {"en": ["False 9 Role"], "de": ["False-9-Rolle"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "co-op",
          "formation": "team",
          "mode": "Career or Kick Off as stated"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "ea-sports-fc-fc25-tactic-shortcut",
    "moodIds": ["focused", "curious"],
    "type": "experiment",
    "tags": ["full-match"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-25"]
    },
    "translations": {
      "en": {
        "name": "Switch without the Pause",
        "objective": "Create two **FC 25 Kick Off tactics** with different defensive line heights. Against the CPU, use the in-match tactical switch after half-time and **finish the match with both tactics tried**.",
        "gameObjective": "Create two **FC 25 Kick Off tactics** with different defensive line heights. Against the CPU, use the in-match tactical switch after half-time and **finish the match with both tactics tried**."
      },
      "de": {
        "name": "Wechsel ohne Pause",
        "objective": "Leg für **FC 25 Anstoß** zwei Taktiken mit unterschiedlicher Abwehrhöhe an. Wechsle gegen die CPU nach der Halbzeit über die Spiel-Taktiksteuerung und **beende das Match mit beiden ausprobiert**.",
        "gameObjective": "Leg für **FC 25 Anstoß** zwei Taktiken mit unterschiedlicher Abwehrhöhe an. Wechsle gegen die CPU nach der Halbzeit über die Spiel-Taktiksteuerung und **beende das Match mit beiden ausprobiert**."
      }
    },
    "experience": {
      "family": "tactics-switch",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["full-match"],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "co-op",
          "formation": "team",
          "mode": "Career or Kick Off as stated"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "ea-sports-fc-fc25-sharing-tactic-code",
    "moodIds": ["create", "focused"],
    "type": "creation",
    "tags": ["loadout"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-25"]
    },
    "translations": {
      "en": {
        "name": "A Tactic to Share",
        "objective": "In **FC 25 Team Management**, build a tactic around two complementary Player Roles. **Save it, generate its tactic code, and play a CPU Kick Off match with it**. Keep the code for later.",
        "gameObjective": "In **FC 25 Team Management**, build a tactic around two complementary Player Roles. **Save it, generate its tactic code, and play a CPU Kick Off match with it**. Keep the code for later."
      },
      "de": {
        "name": "Eine Taktik zum Teilen",
        "objective": "Bau in der **FC-25-Teamverwaltung** eine Taktik um zwei sich ergänzende Spielerrollen. **Speichere sie, erzeuge ihren Taktikcode und spiel damit ein Anstoßmatch gegen die CPU**. Heb den Code für später auf.",
        "gameObjective": "Bau in der **FC-25-Teamverwaltung** eine Taktik um zwei sich ergänzende Spielerrollen. **Speichere sie, erzeuge ihren Taktikcode und spiel damit ein Anstoßmatch gegen die CPU**. Heb den Code für später auf."
      }
    },
    "experience": {
      "family": "tactic-creation",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["loadout"],
      "rules": [],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "co-op",
          "formation": "team",
          "mode": "Career or Kick Off as stated"
        }
      ]
    },
    "gameGenreIds": ["sports"],
    "rarity": "special"
  },
  {
    "id": "ea-sports-fc-fc25-rush-third-line",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["vs-bots"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-25"]
    },
    "translations": {
      "en": {
        "name": "The Dotted Line",
        "objective": "In **FC 25 Kick Off Rush** against the CPU, **try a pass to a teammate crossing the attacking-third offside line**. See when the pass is still legal; an offside call counts as a try.",
        "gameObjective": "In **FC 25 Kick Off Rush** against the CPU, **try a pass to a teammate crossing the attacking-third offside line**. See when the pass is still legal; an offside call counts as a try."
      },
      "de": {
        "name": "An der Linie warten",
        "objective": "Starte in **FC 25 Anstoß-Rush** gegen die CPU. **Probier einen Pass zu einem Mitspieler, der gerade die Abseitslinie im Angriffsdrittel überquert**. Schau, wann der Pass noch erlaubt ist; ein Abseitspfiff zählt als Versuch.",
        "gameObjective": "Starte in **FC 25 Anstoß-Rush** gegen die CPU. **Probier einen Pass zu einem Mitspieler, der gerade die Abseitslinie im Angriffsdrittel überquert**. Schau, wann der Pass noch erlaubt ist; ein Abseitspfiff zählt als Versuch."
      }
    },
    "experience": {
      "family": "rush-offside",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["vs-bots"],
      "prerequisites": [
        {
          "en": "Solo / bot mode available",
          "de": "Solo- / Bot-Modus verfügbar",
          "chips": {"en": ["Bot mode"], "de": ["Bot-Modus"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "co-op",
          "formation": "team",
          "mode": "Career or Kick Off as stated"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "ea-sports-fc-fc25-rush-width",
    "moodIds": ["focused", "curious"],
    "type": "experiment",
    "tags": ["vs-bots"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-25"]
    },
    "translations": {
      "en": {
        "name": "Use the Whole Pitch",
        "objective": "In **FC 25 Kick Off Rush** against the CPU, **switch an attack from one flank to the other before shooting**. Compare the space with a straight run upfield.",
        "gameObjective": "In **FC 25 Kick Off Rush** against the CPU, **switch an attack from one flank to the other before shooting**. Compare the space with a straight run upfield."
      },
      "de": {
        "name": "Das ganze Feld nutzen",
        "objective": "Starte in **FC 25 Anstoß-Rush** gegen die CPU. **Verlager einen Angriff von einer Seite des Felds zur anderen, bevor du schießt**. Vergleiche den freien Raum mit einem geraden Vorstoß.",
        "gameObjective": "Starte in **FC 25 Anstoß-Rush** gegen die CPU. **Verlager einen Angriff von einer Seite des Felds zur anderen, bevor du schießt**. Vergleiche den freien Raum mit einem geraden Vorstoß."
      }
    },
    "experience": {
      "family": "rush-width",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["vs-bots"],
      "prerequisites": [
        {
          "en": "Solo / bot mode available",
          "de": "Solo- / Bot-Modus verfügbar",
          "chips": {"en": ["Bot mode"], "de": ["Bot-Modus"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "co-op",
          "formation": "team",
          "mode": "Career or Kick Off as stated"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "ea-sports-fc-fc25-rush-duo-role",
    "moodIds": ["connect"],
    "type": "objective",
    "tags": ["local-play", "full-match"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-25"]
    },
    "translations": {
      "en": {
        "name": "One Covers, One Goes",
        "objective": "Play **FC 25 Kick Off Rush locally with another person on your team against the CPU**. Agree who covers behind the ball and who joins attacks, swap jobs at the halfway point, and **finish the match together**.",
        "gameObjective": "Play **FC 25 Kick Off Rush locally with another person on your team against the CPU**. Agree who covers behind the ball and who joins attacks, swap jobs at the halfway point, and **finish the match together**."
      },
      "de": {
        "name": "Einer sichert, einer geht",
        "objective": "Spiel **FC 25 Anstoß-Rush vor Ort mit einer Person im selben Team gegen die CPU**. Teilt Absicherung und Angriff auf, tauscht zur Hälfte die Aufgaben und **beendet das Match zusammen**.",
        "gameObjective": "Spiel **FC 25 Anstoß-Rush vor Ort mit einer Person im selben Team gegen die CPU**. Teilt Absicherung und Angriff auf, tauscht zur Hälfte die Aufgaben und **beendet das Match zusammen**."
      }
    },
    "experience": {
      "family": "shared-rush",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": ["co-op", "local-play"] },
      "finish": "outcome",
      "activities": [],
      "rules": ["full-match"],
      "prerequisites": [
        {
          "en": "Second player and controller for local Rush",
          "de": "Zweite Person und Controller für lokales Rush",
          "chips": {"en": ["Local Rush", "Controller"], "de": ["Lokales Rush", "Controller"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "others",
          "participation": "co-op",
          "formation": "team",
          "mode": "Local Kick Off Rush"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "ea-sports-fc-fc25-manager-opponent-preview",
    "moodIds": ["focused"],
    "type": "objective",
    "tags": ["story", "full-match"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-25"]
    },
    "translations": {
      "en": {
        "name": "Read Their Shape",
        "objective": "Before your next **FC 25 Manager Career fixture**, read the opposition’s tactical preview. Choose a side of the pitch to attack based on that setup and **play the full fixture with that route in mind**.",
        "gameObjective": "Before your next **FC 25 Manager Career fixture**, read the opposition’s tactical preview. Choose a side of the pitch to attack based on that setup and **play the full fixture with that route in mind**."
      },
      "de": {
        "name": "Ihre Formation lesen",
        "objective": "Lies vor dem nächsten **FC-25-Managerkarrierematch** die Taktikvorschau des Gegners. Wähl danach eine Seite für deine Angriffe und **spiel das ganze Match mit diesem Weg im Kopf**.",
        "gameObjective": "Lies vor dem nächsten **FC-25-Managerkarrierematch** die Taktikvorschau des Gegners. Wähl danach eine Seite für deine Angriffe und **spiel das ganze Match mit diesem Weg im Kopf**."
      }
    },
    "experience": {
      "family": "opponent-preview",
      "cardMetadata": { "genreIds": ["sports", "simulation"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["story"],
      "rules": ["full-match"],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "co-op",
          "formation": "team",
          "mode": "Career or Kick Off as stated"
        }
      ]
    },
    "gameGenreIds": ["sports", "simulation"]
  },
  {
    "id": "ea-sports-fc-fc25-precision-through",
    "moodIds": ["challenge", "focused"],
    "type": "challenge",
    "tags": ["three-attempts"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-25"]
    },
    "translations": {
      "en": {
        "name": "Slip It through",
        "objective": "In **FC 25 Kick Off** against the CPU, **score after a precision through ball splits the defence**. Finish after the goal or three attacks using that pass.",
        "gameObjective": "In **FC 25 Kick Off** against the CPU, **score after a precision through ball splits the defence**. Finish after the goal or three attacks using that pass."
      },
      "de": {
        "name": "Durch die Lücke",
        "objective": "**Triff in FC 25 Anstoß gegen die CPU nach einem präzisen Steilpass durch die Abwehr**. Hör nach dem Tor oder drei Angriffen mit diesem Pass auf.",
        "gameObjective": "**Triff in FC 25 Anstoß gegen die CPU nach einem präzisen Steilpass durch die Abwehr**. Hör nach dem Tor oder drei Angriffen mit diesem Pass auf."
      }
    },
    "experience": {
      "family": "through-ball",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["three-attempts"],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "co-op",
          "formation": "team",
          "mode": "Career or Kick Off as stated"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "ea-sports-fc-fc25-player-skill-point",
    "moodIds": ["progress"],
    "type": "objective",
    "tags": ["abilities", "full-match"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-25"]
    },
    "translations": {
      "en": {
        "name": "Spend It on Passing",
        "objective": "In an **existing FC 25 Player Career with an unspent skill point**, improve a passing attribute. **Complete the next match while looking for passes that use it**, without needing an assist.",
        "gameObjective": "In an **existing FC 25 Player Career with an unspent skill point**, improve a passing attribute. **Complete the next match while looking for passes that use it**, without needing an assist."
      },
      "de": {
        "name": "Auf dem Platz ausgeben",
        "objective": "Verbessere in einer **bestehenden FC-25-Spielerkarriere mit freiem Skillpunkt** einen Passwert. **Spiel das nächste Match und such Pässe, für die er hilft**, ohne dass eine Vorlage nötig ist.",
        "gameObjective": "Verbessere in einer **bestehenden FC-25-Spielerkarriere mit freiem Skillpunkt** einen Passwert. **Spiel das nächste Match und such Pässe, für die er hilft**, ohne dass eine Vorlage nötig ist."
      }
    },
    "experience": {
      "family": "passing-development",
      "cardMetadata": { "genreIds": ["sports", "simulation"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["abilities"],
      "rules": ["full-match"],
      "prerequisites": [
        {
          "en": "Player Career; unspent skill point",
          "de": "Spielerkarriere; freier Skillpunkt",
          "chips": {"en": ["Player Career", "Skill point"], "de": ["Spielerkarriere", "Skillpunkt"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "co-op",
          "formation": "team",
          "mode": "Career or Kick Off as stated"
        }
      ]
    },
    "gameGenreIds": ["sports", "simulation"]
  },
  {
    "id": "ea-sports-fc-fc25-jockey-clean-sheet",
    "moodIds": ["challenge", "focused"],
    "type": "challenge",
    "tags": ["full-match", "three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-25"]
    },
    "translations": {
      "en": {
        "name": "Hold the Channel",
        "objective": "In **FC 25 Kick Off against the CPU**, use jockeying to defend and avoid slide tackles. **Finish a match without conceding**, or stop after three full matches.",
        "gameObjective": "In **FC 25 Kick Off against the CPU**, use jockeying to defend and avoid slide tackles. **Finish a match without conceding**, or stop after three full matches."
      },
      "de": {
        "name": "Den Weg zustellen",
        "objective": "Verteidige in **FC 25 Anstoß gegen die CPU** mit Jockeying und ohne Grätschen. **Beende ein Match ohne Gegentor** oder hör nach drei ganzen Matches auf.",
        "gameObjective": "Verteidige in **FC 25 Anstoß gegen die CPU** mit Jockeying und ohne Grätschen. **Beende ein Match ohne Gegentor** oder hör nach drei ganzen Matches auf."
      }
    },
    "experience": {
      "family": "defensive-shape",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["full-match", "three-attempts"],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "co-op",
          "formation": "team",
          "mode": "Career or Kick Off as stated"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "ea-sports-fc-fc25-local-rival-clubs",
    "moodIds": ["connect", "nostalgic"],
    "type": "inspiration",
    "tags": ["local-play"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-25"]
    },
    "translations": {
      "en": {
        "name": "Your Old Derby",
        "objective": "Play FC 25 local Kick Off with someone you used to play football games with. Pick the clubs you always chose against each other and **let that old derby return with the current squads**.",
        "gameObjective": "Play FC 25 local Kick Off with someone you used to play football games with. Pick the clubs you always chose against each other and **let that old derby return with the current squads**."
      },
      "de": {
        "name": "Euer altes Derby",
        "objective": "Spiel FC 25 Anstoß vor Ort mit jemandem, mit dem du früher Fußballspiele gespielt hast. Wählt die Vereine, die immer gegeneinander antraten, und **lasst euer altes Derby mit den heutigen Teams wiederkommen**.",
        "gameObjective": "Spiel FC 25 Anstoß vor Ort mit jemandem, mit dem du früher Fußballspiele gespielt hast. Wählt die Vereine, die immer gegeneinander antraten, und **lasst euer altes Derby mit den heutigen Teams wiederkommen**."
      }
    },
    "experience": {
      "family": "familiar-derby",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": ["local-play"] },
      "finish": "open",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "en": "Local opponent from your earlier football games",
          "de": "Lokaler Gegner aus euren früheren Fußballspielen",
          "chips": {"en": ["Former rival"], "de": ["Früherer Gegner"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "others",
          "participation": "solo",
          "formation": "team",
          "mode": "Local versus Kick Off"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "ea-sports-fc-fc25-coach-role-test",
    "moodIds": ["progress", "focused"],
    "type": "objective",
    "tags": ["story", "full-match"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-25"]
    },
    "translations": {
      "en": {
        "name": "Coach the Role",
        "objective": "In **FC 25 Manager Career with room and budget for a coach**, hire one who fits your tactical vision and a Role in your starting eleven. **Play the next match with that Role assigned**.",
        "gameObjective": "In **FC 25 Manager Career with room and budget for a coach**, hire one who fits your tactical vision and a Role in your starting eleven. **Play the next match with that Role assigned**."
      },
      "de": {
        "name": "Der Coach zur Rolle",
        "objective": "Hol in der **FC-25-Managerkarriere mit freiem Platz und Budget für einen Coach** jemanden, der zu deiner Taktik und einer Rolle deiner Startelf passt. **Spiel das nächste Match mit dieser Rolle vergeben**.",
        "gameObjective": "Hol in der **FC-25-Managerkarriere mit freiem Platz und Budget für einen Coach** jemanden, der zu deiner Taktik und einer Rolle deiner Startelf passt. **Spiel das nächste Match mit dieser Rolle vergeben**."
      }
    },
    "experience": {
      "family": "coach-role",
      "cardMetadata": { "genreIds": ["sports", "simulation"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["story"],
      "rules": ["full-match"],
      "prerequisites": [
        {
          "en": "Coach space and budget in Manager Career",
          "de": "Coach-Platz und Budget in Managerkarriere",
          "chips": {"en": ["Manager Career", "Coach budget"], "de": ["Managerkarriere", "Coach-Budget"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "co-op",
          "formation": "team",
          "mode": "Career or Kick Off as stated"
        }
      ]
    },
    "gameGenreIds": ["sports", "simulation"]
  },
  {
    "id": "ea-sports-fc-fc25-realistic-evening",
    "moodIds": ["relax"],
    "type": "inspiration",
    "tags": ["story"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-25"]
    },
    "translations": {
      "en": {
        "name": "Let the Match Breathe",
        "objective": "Use FC 25 Career’s Simulation gameplay preset on a difficulty you find comfortable. **Move the ball around with your familiar squad** and let the gaps open at the match’s own pace.",
        "gameObjective": "Use FC 25 Career’s Simulation gameplay preset on a difficulty you find comfortable. **Move the ball around with your familiar squad** and let the gaps open at the match’s own pace."
      },
      "de": {
        "name": "Das Match laufen lassen",
        "objective": "Nutze in der FC-25-Karriere die Simulationseinstellung auf einer angenehmen Schwierigkeit. **Lass den Ball mit deinem vertrauten Team laufen** und die Lücken im Tempo des Matches entstehen.",
        "gameObjective": "Nutze in der FC-25-Karriere die Simulationseinstellung auf einer angenehmen Schwierigkeit. **Lass den Ball mit deinem vertrauten Team laufen** und die Lücken im Tempo des Matches entstehen."
      }
    },
    "experience": {
      "family": "simulation-match",
      "cardMetadata": { "genreIds": ["sports", "simulation"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "co-op",
          "formation": "team",
          "mode": "Career or Kick Off as stated"
        }
      ]
    },
    "gameGenreIds": ["sports", "simulation"]
  },
  {
    "id": "ea-sports-fc-fc26-event-response-fixture",
    "moodIds": ["progress", "focused"],
    "type": "objective",
    "tags": ["story", "full-match"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-26"]
    },
    "translations": {
      "en": {
        "name": "Play the Consequence",
        "objective": "In **FC 26 Manager Career with an Unexpected Event already active**, adjust your team sheet to its injury, fatigue, or squad change. **Play the next fixture with that adjustment**, keeping the result.",
        "gameObjective": "In **FC 26 Manager Career with an Unexpected Event already active**, adjust your team sheet to its injury, fatigue, or squad change. **Play the next fixture with that adjustment**, keeping the result."
      },
      "de": {
        "name": "Die Folgen spielen",
        "objective": "Passe in der **FC-26-Managerkarriere mit bereits aktivem unerwartetem Ereignis** die Aufstellung an Verletzungen, Müdigkeit oder die Kaderänderung an. **Spiel das nächste Match mit dieser Anpassung** und behalte das Ergebnis.",
        "gameObjective": "Passe in der **FC-26-Managerkarriere mit bereits aktivem unerwartetem Ereignis** die Aufstellung an Verletzungen, Müdigkeit oder die Kaderänderung an. **Spiel das nächste Match mit dieser Anpassung** und behalte das Ergebnis."
      }
    },
    "experience": {
      "family": "event-response",
      "cardMetadata": { "genreIds": ["sports", "simulation"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["story"],
      "rules": ["full-match"],
      "prerequisites": [
        {
          "en": "Active Unexpected Event in Manager Career",
          "de": "Aktives unerwartetes Ereignis in Managerkarriere",
          "chips": {"en": ["Unexpected Event"], "de": ["Unerwartetes Ereignis"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "co-op",
          "formation": "team",
          "mode": "Career or Kick Off as stated"
        }
      ]
    },
    "gameGenreIds": ["sports", "simulation"]
  },
  {
    "id": "ea-sports-fc-fc26-manager-new-tactic",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["story", "full-match"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-26"]
    },
    "translations": {
      "en": {
        "name": "A New Manager Opposite",
        "objective": "In an **FC 26 Manager Career where your next opponent has changed manager**, read their new tactical setup. **Play that fixture and compare their movement with the previous meeting**, without needing a win.",
        "gameObjective": "In an **FC 26 Manager Career where your next opponent has changed manager**, read their new tactical setup. **Play that fixture and compare their movement with the previous meeting**, without needing a win."
      },
      "de": {
        "name": "Ein neuer Coach gegenüber",
        "objective": "Lies in einer **FC-26-Managerkarriere, in der der nächste Gegner den Coach gewechselt hat**, die neue Taktik. **Spiel das Match und vergleiche die Laufwege mit der letzten Begegnung**, ohne Siegpflicht.",
        "gameObjective": "Lies in einer **FC-26-Managerkarriere, in der der nächste Gegner den Coach gewechselt hat**, die neue Taktik. **Spiel das Match und vergleiche die Laufwege mit der letzten Begegnung**, ohne Siegpflicht."
      }
    },
    "experience": {
      "family": "manager-comparison",
      "cardMetadata": { "genreIds": ["sports", "simulation"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["story"],
      "rules": ["full-match"],
      "prerequisites": [
        {
          "en": "Next opponent changed manager; prior meeting remembered",
          "de": "Nächster Gegner mit neuem Coach; vorherige Begegnung bekannt",
          "chips": {"en": ["New opposing manager"], "de": ["Neuer gegnerischer Coach"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "co-op",
          "formation": "team",
          "mode": "Career or Kick Off as stated"
        }
      ]
    },
    "gameGenreIds": ["sports", "simulation"]
  },
  {
    "id": "ea-sports-fc-fc26-simulation-signing",
    "moodIds": ["focused", "progress"],
    "type": "objective",
    "tags": ["story"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-26"]
    },
    "translations": {
      "en": {
        "name": "Scout by the Numbers",
        "objective": "With Deeper Simulation enabled in **FC 26 Manager Career**, use simulated-league statistics to select a reachable transfer target. **Add that player to your shortlist**.",
        "gameObjective": "With Deeper Simulation enabled in **FC 26 Manager Career**, use simulated-league statistics to select a reachable transfer target. **Add that player to your shortlist**."
      },
      "de": {
        "name": "Nach Zahlen scouten",
        "objective": "Wähle in der **FC-26-Managerkarriere mit aktivierter tieferer Simulation** anhand von Ligastatistiken einen erreichbaren Transferkandidaten. **Setz ihn auf deine Liste**.",
        "gameObjective": "Wähle in der **FC-26-Managerkarriere mit aktivierter tieferer Simulation** anhand von Ligastatistiken einen erreichbaren Transferkandidaten. **Setz ihn auf deine Liste**."
      }
    },
    "experience": {
      "family": "shortlist",
      "cardMetadata": { "genreIds": ["sports", "simulation"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Deeper Simulation enabled",
          "de": "Tiefere Simulation aktiviert",
          "chips": {"en": ["Deeper Simulation"], "de": ["Tiefere Simulation"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "Manager Career"
        }
      ]
    },
    "gameGenreIds": ["sports", "simulation"]
  },
  {
    "id": "ea-sports-fc-fc26-retro-icon-session",
    "moodIds": ["nostalgic"],
    "type": "inspiration",
    "tags": ["story"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-26"]
    },
    "translations": {
      "en": {
        "name": "Your Season’s Icon",
        "objective": "In an FC 26 Manager Career with an ICON or Hero already available in your squad, build a matchday around a player you remember watching. **Let their position and style shape the football** you want to play.",
        "gameObjective": "In an FC 26 Manager Career with an ICON or Hero already available in your squad, build a matchday around a player you remember watching. **Let their position and style shape the football** you want to play."
      },
      "de": {
        "name": "Deine Saison mit Ikone",
        "objective": "Gestalte in einer FC-26-Managerkarriere mit bereits verfügbarem ICON oder Hero im Kader einen Spieltag um jemanden, dem du früher zugeschaut hast. **Lass Position und Stil bestimmen**, welchen Fußball du heute spielen magst.",
        "gameObjective": "Gestalte in einer FC-26-Managerkarriere mit bereits verfügbarem ICON oder Hero im Kader einen Spieltag um jemanden, dem du früher zugeschaut hast. **Lass Position und Stil bestimmen**, welchen Fußball du heute spielen magst."
      }
    },
    "experience": {
      "family": "familiar-icon",
      "cardMetadata": { "genreIds": ["sports", "simulation"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Owned ICON or Hero you remember watching",
          "de": "Vorhandener ICON oder Hero, dem du früher zugeschaut hast",
          "chips": {"en": ["ICON or Hero"], "de": ["ICON oder Hero"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "co-op",
          "formation": "team",
          "mode": "Career or Kick Off as stated"
        }
      ]
    },
    "gameGenreIds": ["sports", "simulation"]
  },
  {
    "id": "ea-sports-fc-fc26-shortlist-job-style",
    "moodIds": ["curious"],
    "type": "objective",
    "tags": ["story"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-26"]
    },
    "translations": {
      "en": {
        "name": "Where Your Tactic Fits",
        "objective": "In **FC 26 Manager Career**, find an available Manager Market job that fits your Tactical Vision. **Submit an application for it**.",
        "gameObjective": "In **FC 26 Manager Career**, find an available Manager Market job that fits your Tactical Vision. **Submit an application for it**."
      },
      "de": {
        "name": "Wo deine Taktik passt",
        "objective": "Schau in der **FC-26-Managerkarriere** auf den Trainermarkt und such einen verfügbaren Job, der zu deiner Taktik passt. **Bewirb dich auf diesen Job**.",
        "gameObjective": "Schau in der **FC-26-Managerkarriere** auf den Trainermarkt und such einen verfügbaren Job, der zu deiner Taktik passt. **Bewirb dich auf diesen Job**."
      }
    },
    "experience": {
      "family": "job-market",
      "cardMetadata": { "genreIds": ["sports", "simulation"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Trainermarkt mit passendem Job und verfügbarer Bewerbung",
          "en": "Manager Market with suitable job and application available",
          "chips": {"en": ["Manager Market"], "de": ["Trainermarkt"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "Manager Career"
        }
      ]
    },
    "gameGenreIds": ["sports", "simulation"]
  },
  {
    "id": "ea-sports-fc-fc26-transfer-embargo-start",
    "moodIds": ["challenge", "focused"],
    "type": "challenge",
    "tags": ["story", "full-match"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-26"]
    },
    "translations": {
      "en": {
        "name": "Start under the Embargo",
        "objective": "Choose an **available FC 26 Manager Live challenge with a transfer embargo**. **Win its first fixture using the inherited squad**, or stop after that fixture’s result.",
        "gameObjective": "Choose an **available FC 26 Manager Live challenge with a transfer embargo**. **Win its first fixture using the inherited squad**, or stop after that fixture’s result."
      },
      "de": {
        "name": "Start mit Transfersperre",
        "objective": "Wähl eine **verfügbare FC-26-Manager-Live-Aufgabe mit Transfersperre**. **Gewinne das erste Match mit dem übernommenen Kader** oder hör nach seinem Ergebnis auf.",
        "gameObjective": "Wähl eine **verfügbare FC-26-Manager-Live-Aufgabe mit Transfersperre**. **Gewinne das erste Match mit dem übernommenen Kader** oder hör nach seinem Ergebnis auf."
      }
    },
    "experience": {
      "family": "embargo-fixture",
      "cardMetadata": { "genreIds": ["sports", "simulation"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["story"],
      "rules": ["full-match"],
      "prerequisites": [
        {
          "en": "Available Manager Live transfer-embargo challenge",
          "de": "Verfügbare Manager-Live-Aufgabe mit Transfersperre",
          "chips": {"en": ["Transfer embargo"], "de": ["Transfersperre"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "co-op",
          "formation": "team",
          "mode": "Career or Kick Off as stated"
        }
      ]
    },
    "gameGenreIds": ["sports", "simulation"]
  },
  {
    "id": "ea-sports-fc-fc26-womens-league-phase",
    "moodIds": ["focused", "create"],
    "type": "creation",
    "tags": ["full-match"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-26"]
    },
    "translations": {
      "en": {
        "name": "Your League Phase",
        "objective": "In **FC 26 Tournaments**, set up the Women’s Champions League with its 18-team League Phase. **Save your tournament and play its opening match**, using a women’s club you want to follow.",
        "gameObjective": "In **FC 26 Tournaments**, set up the Women’s Champions League with its 18-team League Phase. **Save your tournament and play its opening match**, using a women’s club you want to follow."
      },
      "de": {
        "name": "Deine Ligaphase",
        "objective": "Leg in **FC 26 Turniere** die Women’s Champions League mit ihrer Ligaphase für 18 Teams an. **Speichere dein Turnier und spiel sein Auftaktmatch**, mit einem Frauenverein, dem du folgen möchtest.",
        "gameObjective": "Leg in **FC 26 Turniere** die Women’s Champions League mit ihrer Ligaphase für 18 Teams an. **Speichere dein Turnier und spiel sein Auftaktmatch**, mit einem Frauenverein, dem du folgen möchtest."
      }
    },
    "experience": {
      "family": "tournament-build",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": [],
      "rules": ["full-match"],
      "prerequisites": [
        {
          "en": "Women’s Champions League tournament available",
          "de": "Women’s-Champions-League-Turnier verfügbar",
          "chips": {"en": ["Women's UCL"], "de": ["Frauen-Champions-League"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "co-op",
          "formation": "team",
          "mode": "Career or Kick Off as stated"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "ea-sports-fc-fc26-archetype-attribute",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["abilities", "full-match"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-26"]
    },
    "translations": {
      "en": {
        "name": "Another Archetype Job",
        "objective": "In **FC 26 Player Career with Archetype points available**, put them into a skill outside your usual strength, such as passing for a scorer. **Play a complete match looking for that new job**, without requiring a stat increase.",
        "gameObjective": "In **FC 26 Player Career with Archetype points available**, put them into a skill outside your usual strength, such as passing for a scorer. **Play a complete match looking for that new job**, without requiring a stat increase."
      },
      "de": {
        "name": "Eine andere Archetyp-Aufgabe",
        "objective": "Steck in der **FC-26-Spielerkarriere mit verfügbaren Archetyp-Punkten** Punkte außerhalb deiner üblichen Stärke hinein, etwa in Pässe als Torjäger. **Spiel ein vollständiges Match mit dieser neuen Aufgabe im Blick**, ohne geforderten Statistikzuwachs.",
        "gameObjective": "Steck in der **FC-26-Spielerkarriere mit verfügbaren Archetyp-Punkten** Punkte außerhalb deiner üblichen Stärke hinein, etwa in Pässe als Torjäger. **Spiel ein vollständiges Match mit dieser neuen Aufgabe im Blick**, ohne geforderten Statistikzuwachs."
      }
    },
    "experience": {
      "family": "archetype-test",
      "cardMetadata": { "genreIds": ["sports", "simulation"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["abilities"],
      "rules": ["full-match"],
      "prerequisites": [
        {
          "en": "Player Career with Archetype points",
          "de": "Spielerkarriere mit Archetyp-Punkten",
          "chips": {"en": ["Archetype points"], "de": ["Archetyp-Punkte"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "co-op",
          "formation": "team",
          "mode": "Career or Kick Off as stated"
        }
      ]
    },
    "gameGenreIds": ["sports", "simulation"]
  },
  {
    "id": "ea-sports-fc-fc26-sub-fatigue",
    "moodIds": ["focused", "progress"],
    "type": "objective",
    "tags": ["full-match"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-26"]
    },
    "translations": {
      "en": {
        "name": "Use the Fresh Legs",
        "objective": "In **FC 26 Manager Career on Authentic gameplay**, replace your most fatigued outfield starter with a fit substitute during the second half. **Finish the match and check the substitute’s match rating**.",
        "gameObjective": "In **FC 26 Manager Career on Authentic gameplay**, replace your most fatigued outfield starter with a fit substitute during the second half. **Finish the match and check the substitute’s match rating**."
      },
      "de": {
        "name": "Frische Beine nutzen",
        "objective": "Ersetz in der **FC-26-Managerkarriere mit authentischem Spielstil** in Hälfte zwei den müdesten Feldspieler der Startelf durch einen fitten Ersatz. **Beende das Match und schau auf dessen Spielnote**.",
        "gameObjective": "Ersetz in der **FC-26-Managerkarriere mit authentischem Spielstil** in Hälfte zwei den müdesten Feldspieler der Startelf durch einen fitten Ersatz. **Beende das Match und schau auf dessen Spielnote**."
      }
    },
    "experience": {
      "family": "substitution",
      "cardMetadata": { "genreIds": ["sports", "simulation"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": [],
      "rules": ["full-match"],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "co-op",
          "formation": "team",
          "mode": "Career or Kick Off as stated"
        }
      ]
    },
    "gameGenreIds": ["sports", "simulation"]
  },
  {
    "id": "ea-sports-fc-fc26-weather-crossing",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["vs-bots"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-26"]
    },
    "translations": {
      "en": {
        "name": "Cross in the Wind",
        "objective": "In **FC 26 Kick Off** on Authentic gameplay with windy weather, **try a high and a low cross from the same flank** against the CPU. Compare how the wind affects their paths.",
        "gameObjective": "In **FC 26 Kick Off** on Authentic gameplay with windy weather, **try a high and a low cross from the same flank** against the CPU. Compare how the wind affects their paths."
      },
      "de": {
        "name": "Flanken im Wind",
        "objective": "Probier in **FC 26 Anstoß** mit authentischem Spielstil und windigem Wetter gegen die CPU **eine hohe und eine flache Flanke von derselben Seite**. Vergleiche, wie der Wind ihre Flugbahnen beeinflusst.",
        "gameObjective": "Probier in **FC 26 Anstoß** mit authentischem Spielstil und windigem Wetter gegen die CPU **eine hohe und eine flache Flanke von derselben Seite**. Vergleiche, wie der Wind ihre Flugbahnen beeinflusst."
      }
    },
    "experience": {
      "family": "wind-crosses",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["vs-bots"],
      "prerequisites": [
        {
          "en": "Authentic gameplay; windy weather available",
          "de": "Authentischer Spielstil; windiges Wetter verfügbar",
          "chips": {"en": ["Authentic gameplay", "Windy weather"], "de": ["Authentischer Spielstil", "Windiges Wetter"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "co-op",
          "formation": "team",
          "mode": "Career or Kick Off as stated"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "ea-sports-fc-fc26-close-control-turn",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["vs-bots"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-26"]
    },
    "translations": {
      "en": {
        "name": "Turn before the Sprint",
        "objective": "In **FC 26 Kick Off** against the CPU, **try a close-control turn with a winger before sprinting into space**. Compare it with a run where you sprint immediately.",
        "gameObjective": "In **FC 26 Kick Off** against the CPU, **try a close-control turn with a winger before sprinting into space**. Compare it with a run where you sprint immediately."
      },
      "de": {
        "name": "Erst drehen, dann sprinten",
        "objective": "Probier in **FC 26 Anstoß** gegen die CPU mit einem Flügelspieler **eine enge Drehung vor dem Sprint in den freien Raum**. Vergleich sie mit einem Vorstoß, bei dem du sofort sprintest.",
        "gameObjective": "Probier in **FC 26 Anstoß** gegen die CPU mit einem Flügelspieler **eine enge Drehung vor dem Sprint in den freien Raum**. Vergleich sie mit einem Vorstoß, bei dem du sofort sprintest."
      }
    },
    "experience": {
      "family": "close-control",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["vs-bots"],
      "prerequisites": [
        {
          "en": "Solo / bot mode available",
          "de": "Solo- / Bot-Modus verfügbar",
          "chips": {"en": ["Bot mode"], "de": ["Bot-Modus"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "co-op",
          "formation": "team",
          "mode": "Career or Kick Off as stated"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "ea-sports-fc-fc26-keeper-playstyle",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["abilities", "full-match"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-26"]
    },
    "translations": {
      "en": {
        "name": "Play to the Keeper",
        "objective": "In **FC 26 Kick Off**, choose a goalkeeper with a visible PlayStyle and read its effect. **Play a CPU match with that keeper and look for the stated situation**, without forcing a goal against you.",
        "gameObjective": "In **FC 26 Kick Off**, choose a goalkeeper with a visible PlayStyle and read its effect. **Play a CPU match with that keeper and look for the stated situation**, without forcing a goal against you."
      },
      "de": {
        "name": "Für den Keeper spielen",
        "objective": "Wähl in **FC 26 Anstoß** einen Torwart mit sichtbarem PlayStyle und lies seine Wirkung. **Spiel mit ihm gegen die CPU und achte auf die genannte Situation**, ohne ein Gegentor zu erzwingen.",
        "gameObjective": "Wähl in **FC 26 Anstoß** einen Torwart mit sichtbarem PlayStyle und lies seine Wirkung. **Spiel mit ihm gegen die CPU und achte auf die genannte Situation**, ohne ein Gegentor zu erzwingen."
      }
    },
    "experience": {
      "family": "keeper-style",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["abilities"],
      "rules": ["full-match"],
      "prerequisites": [
        {
          "en": "Goalkeeper with visible PlayStyle",
          "de": "Torwart mit sichtbarem PlayStyle",
          "chips": {"en": ["Keeper PlayStyle"], "de": ["Torwart-PlayStyle"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "co-op",
          "formation": "team",
          "mode": "Career or Kick Off as stated"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "ea-sports-fc-fc26-shield-and-release",
    "moodIds": ["challenge", "focused"],
    "type": "challenge",
    "tags": ["three-attempts"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-26"]
    },
    "translations": {
      "en": {
        "name": "Hold, Then Release",
        "objective": "In **FC 26 Kick Off** against the CPU, **score after shielding with your striker and laying the ball off to a teammate**. Finish after the goal or three attacks using that sequence.",
        "gameObjective": "In **FC 26 Kick Off** against the CPU, **score after shielding with your striker and laying the ball off to a teammate**. Finish after the goal or three attacks using that sequence."
      },
      "de": {
        "name": "Halten und ablegen",
        "objective": "**Triff in FC 26 Anstoß gegen die CPU, nachdem deine Spitze den Ball abgeschirmt und einem Mitspieler abgelegt hat**. Hör nach dem Tor oder drei Angriffen mit diesem Ablauf auf.",
        "gameObjective": "**Triff in FC 26 Anstoß gegen die CPU, nachdem deine Spitze den Ball abgeschirmt und einem Mitspieler abgelegt hat**. Hör nach dem Tor oder drei Angriffen mit diesem Ablauf auf."
      }
    },
    "experience": {
      "family": "shield-release",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["three-attempts"],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "co-op",
          "formation": "team",
          "mode": "Career or Kick Off as stated"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "ea-sports-fc-fc26-clubs-archetype-pair",
    "moodIds": ["connect"],
    "type": "objective",
    "tags": ["support", "full-match"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-26"]
    },
    "translations": {
      "en": {
        "name": "Two Jobs for Clubs",
        "objective": "With a friend in **FC 26 Clubs**, choose complementary unlocked Archetypes, such as Creator and Finisher. **Play one full Clubs match together**, looking for passes between your two roles.",
        "gameObjective": "With a friend in **FC 26 Clubs**, choose complementary unlocked Archetypes, such as Creator and Finisher. **Play one full Clubs match together**, looking for passes between your two roles."
      },
      "de": {
        "name": "Zwei Aufgaben im Club",
        "objective": "Wählt mit einem Freund in **FC 26 Clubs** ergänzende freigeschaltete Archetypen, etwa Creator und Finisher. **Spielt ein ganzes Clubs-Match zusammen** und sucht Pässe zwischen euren beiden Rollen.",
        "gameObjective": "Wählt mit einem Freund in **FC 26 Clubs** ergänzende freigeschaltete Archetypen, etwa Creator und Finisher. **Spielt ein ganzes Clubs-Match zusammen** und sucht Pässe zwischen euren beiden Rollen."
      }
    },
    "experience": {
      "family": "clubs-roles",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": ["co-op"] },
      "finish": "outcome",
      "activities": ["support"],
      "rules": ["full-match"],
      "prerequisites": [
        {
          "en": "Friend in Clubs; complementary Archetypes",
          "de": "Freund in Clubs; ergänzende Archetypen",
          "chips": {"en": ["Clubs", "Archetypes"], "de": ["Clubs", "Archetypen"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "others",
          "participation": "co-op",
          "formation": "team",
          "mode": "Clubs"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "ea-sports-fc-fc26-rush-pass-signal",
    "moodIds": ["connect"],
    "type": "objective",
    "tags": ["support", "full-match"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-26"]
    },
    "translations": {
      "en": {
        "name": "Call the Pass",
        "objective": "Play **FC 26 Clubs Rush with a friend** and agree on a call for passing into space. Use it when a run opens and **finish the match together**, whether the pass connects or not.",
        "gameObjective": "Play **FC 26 Clubs Rush with a friend** and agree on a call for passing into space. Use it when a run opens and **finish the match together**, whether the pass connects or not."
      },
      "de": {
        "name": "Den Pass ansagen",
        "objective": "Spiel **FC 26 Clubs Rush mit einem Freund** und vereinbart einen Ruf für den Pass in den freien Raum. Nutzt ihn bei einer freien Laufbahn und **beendet das Match zusammen**, auch wenn der Pass nicht ankommt.",
        "gameObjective": "Spiel **FC 26 Clubs Rush mit einem Freund** und vereinbart einen Ruf für den Pass in den freien Raum. Nutzt ihn bei einer freien Laufbahn und **beendet das Match zusammen**, auch wenn der Pass nicht ankommt."
      }
    },
    "experience": {
      "family": "shared-rush",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": ["co-op"] },
      "finish": "outcome",
      "activities": ["support"],
      "rules": ["full-match"],
      "prerequisites": [
        {
          "en": "Friend in Clubs Rush",
          "de": "Freund in Clubs Rush",
          "chips": {"en": ["Clubs Rush"], "de": ["Clubs Rush"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "others",
          "participation": "co-op",
          "formation": "team",
          "mode": "Clubs"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "ea-sports-fc-fc26-evolve-owned-keeper",
    "moodIds": ["progress"],
    "type": "objective",
    "tags": ["cards", "full-match"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-26"]
    },
    "translations": {
      "en": {
        "name": "Your Keeper’s Evolution",
        "objective": "With an **available FC 26 Ultimate Team goalkeeper Evolution and an eligible owned keeper**, activate it. **Play one full match in its required mode with that keeper**, without spending on a new item.",
        "gameObjective": "With an **available FC 26 Ultimate Team goalkeeper Evolution and an eligible owned keeper**, activate it. **Play one full match in its required mode with that keeper**, without spending on a new item."
      },
      "de": {
        "name": "Die Evolution deines Keepers",
        "objective": "Aktivier in **FC 26 Ultimate Team eine verfügbare Torwart-Evolution mit einem passenden vorhandenen Keeper**. **Spiel mit ihm ein ganzes Match im geforderten Modus**, ohne ein neues Item zu kaufen.",
        "gameObjective": "Aktivier in **FC 26 Ultimate Team eine verfügbare Torwart-Evolution mit einem passenden vorhandenen Keeper**. **Spiel mit ihm ein ganzes Match im geforderten Modus**, ohne ein neues Item zu kaufen."
      }
    },
    "experience": {
      "family": "keeper-evolution",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["cards"],
      "rules": ["full-match"],
      "prerequisites": [
        {
          "en": "Available keeper Evolution; eligible owned keeper",
          "de": "Verfügbare Torwart-Evolution; passender eigener Keeper",
          "chips": {"en": ["Keeper Evolution"], "de": ["Torwart-Evolution"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "co-op",
          "formation": "team",
          "mode": "Ultimate Team"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "ea-sports-fc-fc26-squad-battle-roles",
    "moodIds": ["focused", "create"],
    "type": "creation",
    "tags": ["cards", "vs-bots"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-26"]
    },
    "translations": {
      "en": {
        "name": "Roles for the Squad",
        "objective": "In **FC 26 Ultimate Team**, build and save a squad from owned items with familiar Roles for your midfield. **Complete one Squad Battles match with that squad**, keeping the difficulty comfortable.",
        "gameObjective": "In **FC 26 Ultimate Team**, build and save a squad from owned items with familiar Roles for your midfield. **Complete one Squad Battles match with that squad**, keeping the difficulty comfortable."
      },
      "de": {
        "name": "Rollen für dein Team",
        "objective": "Bau und speichere in **FC 26 Ultimate Team** aus vorhandenen Items ein Team mit vertrauten Rollen fürs Mittelfeld. **Beende damit ein Squad-Battles-Match** auf angenehmer Schwierigkeit.",
        "gameObjective": "Bau und speichere in **FC 26 Ultimate Team** aus vorhandenen Items ein Team mit vertrauten Rollen fürs Mittelfeld. **Beende damit ein Squad-Battles-Match** auf angenehmer Schwierigkeit."
      }
    },
    "experience": {
      "family": "squad-building",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["cards"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Owned Ultimate Team items",
          "de": "Eigene Ultimate-Team-Items",
          "chips": {"en": ["Ultimate Team items"], "de": ["Ultimate-Team-Items"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "co-op",
          "formation": "team",
          "mode": "Ultimate Team"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "ea-sports-fc-fc26-gauntlet-first-match",
    "moodIds": ["challenge"],
    "type": "inspiration",
    "tags": ["cards"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-26"]
    },
    "translations": {
      "en": {
        "name": "Into the Gauntlet",
        "objective": "If FC 26 Ultimate Team Gauntlet is available and you already have eligible squads, enter with the squad you trust first. Let the mode’s squad changes make you **rethink which players you want ready next**.",
        "gameObjective": "If FC 26 Ultimate Team Gauntlet is available and you already have eligible squads, enter with the squad you trust first. Let the mode’s squad changes make you **rethink which players you want ready next**."
      },
      "de": {
        "name": "In den Gauntlet",
        "objective": "Starte FC 26 Ultimate Team Gauntlet, wenn er verfügbar ist und du schon passende Teams besitzt, mit deinem vertrautesten Team. Lass die Teamwechsel des Modus bestimmen, **wen du als Nächstes bereithalten magst**.",
        "gameObjective": "Starte FC 26 Ultimate Team Gauntlet, wenn er verfügbar ist und du schon passende Teams besitzt, mit deinem vertrautesten Team. Lass die Teamwechsel des Modus bestimmen, **wen du als Nächstes bereithalten magst**."
      }
    },
    "experience": {
      "family": "gauntlet",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["cards"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Gauntlet currently available; eligible owned squads",
          "de": "Gauntlet aktuell verfügbar; passende eigene Teams",
          "chips": {"en": ["Gauntlet", "Squads"], "de": ["Gauntlet", "Teams"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "co-op",
          "formation": "team",
          "mode": "Ultimate Team"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "ea-sports-fc-fc26-authentic-sliders",
    "moodIds": ["create", "focused"],
    "type": "creation",
    "tags": ["loadout", "full-match"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-26"]
    },
    "translations": {
      "en": {
        "name": "Your Authentic Pace",
        "objective": "In **FC 26**, start custom gameplay sliders from the Authentic values and change one setting that affects passing. **Save them and play a complete CPU Kick Off match**, then decide whether to keep the change.",
        "gameObjective": "In **FC 26**, start custom gameplay sliders from the Authentic values and change one setting that affects passing. **Save them and play a complete CPU Kick Off match**, then decide whether to keep the change."
      },
      "de": {
        "name": "Dein authentisches Tempo",
        "objective": "Nimm in **FC 26** die authentischen Werte als Basis eigener Spielregler und ändere einen Wert fürs Passspiel. **Speichere sie und spiel ein ganzes Anstoßmatch gegen die CPU**. Entscheide danach, ob du die Änderung behältst.",
        "gameObjective": "Nimm in **FC 26** die authentischen Werte als Basis eigener Spielregler und ändere einen Wert fürs Passspiel. **Speichere sie und spiel ein ganzes Anstoßmatch gegen die CPU**. Entscheide danach, ob du die Änderung behältst."
      }
    },
    "experience": {
      "family": "slider-creation",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["loadout"],
      "rules": ["full-match"],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "co-op",
          "formation": "team",
          "mode": "Career or Kick Off as stated"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "ea-sports-fc-fc26-familiar-home-game",
    "moodIds": ["relax", "overwhelmed"],
    "type": "inspiration",
    "tags": ["story"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-26"]
    },
    "translations": {
      "en": {
        "name": "The Home Fixture",
        "objective": "Load an FC 26 Manager Career you already know, with Authentic gameplay on a comfortable difficulty. **Stay with your usual lineup for a home fixture** and let the familiar stadium set the session’s pace.",
        "gameObjective": "Load an FC 26 Manager Career you already know, with Authentic gameplay on a comfortable difficulty. **Stay with your usual lineup for a home fixture** and let the familiar stadium set the session’s pace."
      },
      "de": {
        "name": "Das Heimspiel",
        "objective": "Lad eine vertraute FC-26-Managerkarriere mit authentischem Spielstil auf angenehmer Schwierigkeit. **Bleib fürs Heimspiel bei deiner gewohnten Elf** und lass das bekannte Stadion das Tempo der Session setzen.",
        "gameObjective": "Lad eine vertraute FC-26-Managerkarriere mit authentischem Spielstil auf angenehmer Schwierigkeit. **Bleib fürs Heimspiel bei deiner gewohnten Elf** und lass das bekannte Stadion das Tempo der Session setzen."
      }
    },
    "experience": {
      "family": "familiar-home",
      "cardMetadata": { "genreIds": ["sports", "simulation"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Familiar Manager Career home fixture",
          "de": "Vertrautes Heimspiel in Managerkarriere",
          "chips": {"en": ["Home fixture"], "de": ["Heimspiel"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "co-op",
          "formation": "team",
          "mode": "Career or Kick Off as stated"
        }
      ]
    },
    "gameGenreIds": ["sports", "simulation"]
  },
  {
    "id": "ea-sports-fc-fc27-bocce-ring-choice",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": [],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-27"]
    },
    "translations": {
      "en": {
        "name": "Ring or Target",
        "objective": "In **FC 27 The Grounds**, enter Bocce Ball. **Try a gentle shot into a target zone and a stronger one, then finish the activity**. Compare how easily the ball overshoots.",
        "gameObjective": "In **FC 27 The Grounds**, enter Bocce Ball. **Try a gentle shot into a target zone and a stronger one, then finish the activity**. Compare how easily the ball overshoots."
      },
      "de": {
        "name": "Ring oder Ziel",
        "objective": "Starte in **FC 27 The Grounds** Bocce Ball. **Probier einen sanften Schuss in ein Zielfeld und einen kräftigeren und beende die Aktivität**. Vergleiche, wie leicht der Ball über das Ziel hinausrollt.",
        "gameObjective": "Starte in **FC 27 The Grounds** Bocce Ball. **Probier einen sanften Schuss in ein Zielfeld und einen kräftigeren und beende die Aktivität**. Vergleiche, wie leicht der Ball über das Ziel hinausrollt."
      }
    },
    "experience": {
      "family": "bocce",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "en": "PS5, Xbox Series, PC or Switch 2; online access",
          "de": "PS5, Xbox Series, PC oder Switch 2; Onlinezugang",
          "chips": {"en": ["The Grounds"], "de": ["The Grounds"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "The Grounds"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "ea-sports-fc-fc27-keepaway-one-touch",
    "moodIds": ["connect"],
    "type": "objective",
    "tags": ["support", "full-match"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-27"]
    },
    "translations": {
      "en": {
        "name": "Keep It Moving",
        "objective": "With a friend in **FC 27 The Grounds on PS5, Xbox Series, PC, or Switch 2**, play Team Keepaway. Try returning a pass first-time and **complete the match together**, even if intercepted.",
        "gameObjective": "With a friend in **FC 27 The Grounds on PS5, Xbox Series, PC, or Switch 2**, play Team Keepaway. Try returning a pass first-time and **complete the match together**, even if intercepted."
      },
      "de": {
        "name": "Den Ball laufen lassen",
        "objective": "Spiel mit einem Freund in **FC 27 The Grounds auf PS5, Xbox Series, PC oder Switch 2** Team Keepaway. Probier einen direkten Rückpass und **beendet das Match zusammen**, auch bei einem abgefangenen Pass.",
        "gameObjective": "Spiel mit einem Freund in **FC 27 The Grounds auf PS5, Xbox Series, PC oder Switch 2** Team Keepaway. Probier einen direkten Rückpass und **beendet das Match zusammen**, auch bei einem abgefangenen Pass."
      }
    },
    "experience": {
      "family": "team-keepaway",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": ["co-op"] },
      "finish": "outcome",
      "activities": ["support"],
      "rules": ["full-match"],
      "prerequisites": [
        {
          "en": "PS5, Xbox Series, PC or Switch 2; online access",
          "de": "PS5, Xbox Series, PC oder Switch 2; Onlinezugang",
          "chips": {"en": ["The Grounds"], "de": ["The Grounds"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "others",
          "participation": "co-op",
          "formation": "team",
          "mode": "The Grounds / Clubs activity as stated"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "ea-sports-fc-fc27-big-race-track",
    "moodIds": ["restless", "focused"],
    "type": "objective",
    "tags": ["racing"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-27"]
    },
    "translations": {
      "en": {
        "name": "Dribble the Course",
        "objective": "In **FC 27 The Grounds**, enter The Big Race. **Dribble through the obstacle course and play through the activity’s result**, whatever your placing.",
        "gameObjective": "In **FC 27 The Grounds**, enter The Big Race. **Dribble through the obstacle course and play through the activity’s result**, whatever your placing."
      },
      "de": {
        "name": "Den Kurs dribbeln",
        "objective": "Starte in **FC 27 The Grounds** The Big Race. **Dribble durch den Hinderniskurs und spiel die Aktivität bis zum Ergebnis**, unabhängig von deiner Platzierung.",
        "gameObjective": "Starte in **FC 27 The Grounds** The Big Race. **Dribble durch den Hinderniskurs und spiel die Aktivität bis zum Ergebnis**, unabhängig von deiner Platzierung."
      }
    },
    "experience": {
      "family": "ball-race",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["racing"],
      "rules": [],
      "prerequisites": [
        {
          "en": "PS5, Xbox Series, PC or Switch 2; online access",
          "de": "PS5, Xbox Series, PC oder Switch 2; Onlinezugang",
          "chips": {"en": ["The Grounds"], "de": ["The Grounds"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "The Grounds"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "ea-sports-fc-fc27-bucket-lob",
    "moodIds": ["curious"],
    "type": "experiment",
    "tags": ["new-approach", "full-match"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-27"]
    },
    "translations": {
      "en": {
        "name": "Lob toward the Hoop",
        "objective": "In **FC 27 The Grounds on PS5, Xbox Series, PC, or Switch 2**, play Bucket Ball. **Try a precision lob toward the opponent’s hoop and finish the match**, comparing the arc with an ordinary football shot.",
        "gameObjective": "In **FC 27 The Grounds on PS5, Xbox Series, PC, or Switch 2**, play Bucket Ball. **Try a precision lob toward the opponent’s hoop and finish the match**, comparing the arc with an ordinary football shot."
      },
      "de": {
        "name": "Ein Lob zum Korb",
        "objective": "Spiel in **FC 27 The Grounds auf PS5, Xbox Series, PC oder Switch 2** Bucket Ball. **Probier einen gezielten Lob zum gegnerischen Korb und beende das Match**. Vergleiche den Bogen mit einem normalen Fußballschuss.",
        "gameObjective": "Spiel in **FC 27 The Grounds auf PS5, Xbox Series, PC oder Switch 2** Bucket Ball. **Probier einen gezielten Lob zum gegnerischen Korb und beende das Match**. Vergleiche den Bogen mit einem normalen Fußballschuss."
      }
    },
    "experience": {
      "family": "bucketball",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": ["co-op"] },
      "finish": "attempt",
      "activities": [],
      "rules": ["full-match"],
      "prerequisites": [
        {
          "en": "PS5, Xbox Series, PC or Switch 2; online access",
          "de": "PS5, Xbox Series, PC oder Switch 2; Onlinezugang",
          "chips": {"en": ["The Grounds"], "de": ["The Grounds"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "others",
          "participation": "co-op",
          "formation": "team",
          "mode": "The Grounds / Clubs activity as stated"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "ea-sports-fc-fc27-balloon-bank",
    "moodIds": ["challenge", "restless"],
    "type": "challenge",
    "tags": ["three-attempts"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-27"]
    },
    "translations": {
      "en": {
        "name": "Pop from Cover",
        "objective": "In **FC 27 The Grounds on PS5, Xbox Series, PC, or Switch 2**, play Balloon Ball and **pop an opponent’s balloon while shooting from beside an obstacle**. Finish the game, or stop after three complete games.",
        "gameObjective": "In **FC 27 The Grounds on PS5, Xbox Series, PC, or Switch 2**, play Balloon Ball and **pop an opponent’s balloon while shooting from beside an obstacle**. Finish the game, or stop after three complete games."
      },
      "de": {
        "name": "Aus der Deckung platzen",
        "objective": "Spiel in **FC 27 The Grounds auf PS5, Xbox Series, PC oder Switch 2** Balloon Ball und **lass beim Schuss neben einem Hindernis einen gegnerischen Ballon platzen**. Beende das Spiel oder hör nach drei ganzen Spielen auf.",
        "gameObjective": "Spiel in **FC 27 The Grounds auf PS5, Xbox Series, PC oder Switch 2** Balloon Ball und **lass beim Schuss neben einem Hindernis einen gegnerischen Ballon platzen**. Beende das Spiel oder hör nach drei ganzen Spielen auf."
      }
    },
    "experience": {
      "family": "balloonball",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "PS5, Xbox Series, PC or Switch 2; online access",
          "de": "PS5, Xbox Series, PC oder Switch 2; Onlinezugang",
          "chips": {"en": ["The Grounds"], "de": ["The Grounds"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "The Grounds"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "ea-sports-fc-fc27-goal-control-switch",
    "moodIds": ["focused", "curious"],
    "type": "experiment",
    "tags": ["full-match"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-27"]
    },
    "translations": {
      "en": {
        "name": "Turn Their Goal",
        "objective": "In **FC 27 The Grounds on PS5, Xbox Series, PC, or Switch 2**, play Goal Control. Look for an opponent-owned goal to take over and **finish all rounds**, whether your shot changed its colour or not.",
        "gameObjective": "In **FC 27 The Grounds on PS5, Xbox Series, PC, or Switch 2**, play Goal Control. Look for an opponent-owned goal to take over and **finish all rounds**, whether your shot changed its colour or not."
      },
      "de": {
        "name": "Ihr Tor übernehmen",
        "objective": "Spiel in **FC 27 The Grounds auf PS5, Xbox Series, PC oder Switch 2** Goal Control. Such ein gegnerisches Tor zum Übernehmen und **beende alle Runden**, auch wenn dein Schuss die Farbe nicht ändert.",
        "gameObjective": "Spiel in **FC 27 The Grounds auf PS5, Xbox Series, PC oder Switch 2** Goal Control. Such ein gegnerisches Tor zum Übernehmen und **beende alle Runden**, auch wenn dein Schuss die Farbe nicht ändert."
      }
    },
    "experience": {
      "family": "goal-control",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["full-match"],
      "prerequisites": [
        {
          "en": "PS5, Xbox Series, PC or Switch 2; online access",
          "de": "PS5, Xbox Series, PC oder Switch 2; Onlinezugang",
          "chips": {"en": ["The Grounds"], "de": ["The Grounds"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "The Grounds"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "ea-sports-fc-fc27-world-target-tour",
    "moodIds": ["explore"],
    "type": "objective",
    "tags": ["exploration"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-27"]
    },
    "translations": {
      "en": {
        "name": "Targets in the Street",
        "objective": "In **FC 27 The Grounds on PS5, Xbox Series, PC, or Switch 2**, walk from the Terrace into an unfamiliar district. **Find an in-world Drop Kick Target and try a shot at it**, without buying anything.",
        "gameObjective": "In **FC 27 The Grounds on PS5, Xbox Series, PC, or Switch 2**, walk from the Terrace into an unfamiliar district. **Find an in-world Drop Kick Target and try a shot at it**, without buying anything."
      },
      "de": {
        "name": "Ziele in der Straße",
        "objective": "Lauf in **FC 27 The Grounds auf PS5, Xbox Series, PC oder Switch 2** von der Terrace in ein unbekanntes Viertel. **Finde ein Drop-Kick-Ziel in der Welt und probier einen Schuss darauf**, ohne etwas zu kaufen.",
        "gameObjective": "Lauf in **FC 27 The Grounds auf PS5, Xbox Series, PC oder Switch 2** von der Terrace in ein unbekanntes Viertel. **Finde ein Drop-Kick-Ziel in der Welt und probier einen Schuss darauf**, ohne etwas zu kaufen."
      }
    },
    "experience": {
      "family": "world-target",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["exploration"],
      "rules": [],
      "prerequisites": [
        {
          "en": "PS5, Xbox Series, PC or Switch 2; online access",
          "de": "PS5, Xbox Series, PC oder Switch 2; Onlinezugang",
          "chips": {"en": ["The Grounds"], "de": ["The Grounds"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "The Grounds"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "ea-sports-fc-fc27-scenario-duo",
    "moodIds": ["connect", "focused"],
    "type": "objective",
    "tags": ["co-op", "full-match"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-27"]
    },
    "translations": {
      "en": {
        "name": "Read the Scenario Together",
        "objective": "With a friend in **FC 27 The Grounds on PS5, Xbox Series, PC, or Switch 2**, enter Attacking Scenarios. Read each round’s scoring rule together and **play the full match**, including a tiebreak if needed.",
        "gameObjective": "With a friend in **FC 27 The Grounds on PS5, Xbox Series, PC, or Switch 2**, enter Attacking Scenarios. Read each round’s scoring rule together and **play the full match**, including a tiebreak if needed."
      },
      "de": {
        "name": "Das Szenario zusammen lesen",
        "objective": "Startet mit einem Freund in **FC 27 The Grounds auf PS5, Xbox Series, PC oder Switch 2** Attacking Scenarios. Lest die Torregel jeder Runde zusammen und **spielt das ganze Match**, samt nötigem Entscheidungsspiel.",
        "gameObjective": "Startet mit einem Freund in **FC 27 The Grounds auf PS5, Xbox Series, PC oder Switch 2** Attacking Scenarios. Lest die Torregel jeder Runde zusammen und **spielt das ganze Match**, samt nötigem Entscheidungsspiel."
      }
    },
    "experience": {
      "family": "shared-scenario",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": ["co-op"] },
      "finish": "outcome",
      "activities": [],
      "rules": ["full-match"],
      "prerequisites": [
        {
          "en": "PS5, Xbox Series, PC or Switch 2; online access",
          "de": "PS5, Xbox Series, PC oder Switch 2; Onlinezugang",
          "chips": {"en": ["The Grounds"], "de": ["The Grounds"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "others",
          "participation": "co-op",
          "formation": "team",
          "mode": "The Grounds / Clubs activity as stated"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "ea-sports-fc-fc27-two-versus-space",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["full-match"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-27"]
    },
    "translations": {
      "en": {
        "name": "The Keeper Is Missing",
        "objective": "In **FC 27 The Grounds**, enter a 2v2 Street Football match. **Try a pass across the attacking area before shooting and finish the match**. Compare the space with an 11v11 pitch.",
        "gameObjective": "In **FC 27 The Grounds**, enter a 2v2 Street Football match. **Try a pass across the attacking area before shooting and finish the match**. Compare the space with an 11v11 pitch."
      },
      "de": {
        "name": "Der Keeper fehlt",
        "objective": "Starte in **FC 27 The Grounds** ein 2-gegen-2-Street-Football-Match. **Probier vor dem Schuss einen Querpass im Angriffsbereich und beende das Match**. Vergleiche den Raum mit einem Feld für 11 gegen 11.",
        "gameObjective": "Starte in **FC 27 The Grounds** ein 2-gegen-2-Street-Football-Match. **Probier vor dem Schuss einen Querpass im Angriffsbereich und beende das Match**. Vergleiche den Raum mit einem Feld für 11 gegen 11."
      }
    },
    "experience": {
      "family": "small-sided-football",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": ["co-op"] },
      "finish": "attempt",
      "activities": [],
      "rules": ["full-match"],
      "prerequisites": [
        {
          "en": "PS5, Xbox Series, PC or Switch 2; online access",
          "de": "PS5, Xbox Series, PC oder Switch 2; Onlinezugang",
          "chips": {"en": ["The Grounds"], "de": ["The Grounds"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "others",
          "participation": "co-op",
          "formation": "team",
          "mode": "The Grounds / Clubs activity as stated"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "ea-sports-fc-fc27-street-outfit",
    "moodIds": ["create", "relax"],
    "type": "creation",
    "tags": ["outfit"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-27"]
    },
    "translations": {
      "en": {
        "name": "Street and Stadium",
        "objective": "In **FC 27 The Grounds on PS5, Xbox Series, PC, or Switch 2**, use owned clothing to make different street and stadium looks. **Save both and walk into your Clubhouse wearing the street look**.",
        "gameObjective": "In **FC 27 The Grounds on PS5, Xbox Series, PC, or Switch 2**, use owned clothing to make different street and stadium looks. **Save both and walk into your Clubhouse wearing the street look**."
      },
      "de": {
        "name": "Straße und Stadion",
        "objective": "Bau in **FC 27 The Grounds auf PS5, Xbox Series, PC oder Switch 2** mit vorhandener Kleidung unterschiedliche Straßen- und Stadionoutfits. **Speichere beide und geh im Straßenoutfit ins Clubhouse**.",
        "gameObjective": "Bau in **FC 27 The Grounds auf PS5, Xbox Series, PC oder Switch 2** mit vorhandener Kleidung unterschiedliche Straßen- und Stadionoutfits. **Speichere beide und geh im Straßenoutfit ins Clubhouse**."
      }
    },
    "experience": {
      "family": "outfit",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["outfit"],
      "rules": [],
      "prerequisites": [
        {
          "en": "PS5, Xbox Series, PC or Switch 2; online access",
          "de": "PS5, Xbox Series, PC oder Switch 2; Onlinezugang",
          "chips": {"en": ["The Grounds"], "de": ["The Grounds"]},
          "critical": true
        },
        {
          "en": "Owned Grounds clothing",
          "de": "Eigene Grounds-Kleidung",
          "chips": {"en": ["Grounds clothing"], "de": ["Grounds-Kleidung"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "The Grounds"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "ea-sports-fc-fc27-archetype-small-tweak",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["abilities", "full-match"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-27"]
    },
    "translations": {
      "en": {
        "name": "Move One Attribute",
        "objective": "In **FC 27 Clubs on PS5, Xbox Series, PC, or Switch 2**, use the free Archetype adjustment to move one attribute allocation toward passing. **Finish a Rush match with the change** and compare your passes.",
        "gameObjective": "In **FC 27 Clubs on PS5, Xbox Series, PC, or Switch 2**, use the free Archetype adjustment to move one attribute allocation toward passing. **Finish a Rush match with the change** and compare your passes."
      },
      "de": {
        "name": "Einen Wert verschieben",
        "objective": "Verschieb in **FC 27 Clubs auf PS5, Xbox Series, PC oder Switch 2** mit der kostenlosen Archetyp-Anpassung eine Werteverteilung Richtung Pässe. **Beende damit ein Rush-Match** und vergleiche dein Passspiel.",
        "gameObjective": "Verschieb in **FC 27 Clubs auf PS5, Xbox Series, PC oder Switch 2** mit der kostenlosen Archetyp-Anpassung eine Werteverteilung Richtung Pässe. **Beende damit ein Rush-Match** und vergleiche dein Passspiel."
      }
    },
    "experience": {
      "family": "archetype-test",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": ["co-op"] },
      "finish": "attempt",
      "activities": ["abilities"],
      "rules": ["full-match"],
      "prerequisites": [
        {
          "en": "PS5, Xbox Series, PC or Switch 2; online access",
          "de": "PS5, Xbox Series, PC oder Switch 2; Onlinezugang",
          "chips": {"en": ["The Grounds"], "de": ["The Grounds"]},
          "critical": true
        },
        {
          "en": "Free Archetype adjustment available",
          "de": "Kostenlose Archetyp-Anpassung verfügbar",
          "chips": {"en": ["Archetype adjustment"], "de": ["Archetyp-Anpassung"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "others",
          "participation": "co-op",
          "formation": "team",
          "mode": "The Grounds / Clubs activity as stated"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "ea-sports-fc-fc27-owned-amp-test",
    "moodIds": ["focused", "curious"],
    "type": "experiment",
    "tags": ["abilities", "full-match"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-27"]
    },
    "translations": {
      "en": {
        "name": "Try Your Amp",
        "objective": "With an **owned Amp in FC 27 Clubs on PS5, Xbox Series, PC, or Switch 2**, read its effect and equip it. **Play a Stadium or in-world Rush match where it applies**, looking for that effect without buying another.",
        "gameObjective": "With an **owned Amp in FC 27 Clubs on PS5, Xbox Series, PC, or Switch 2**, read its effect and equip it. **Play a Stadium or in-world Rush match where it applies**, looking for that effect without buying another."
      },
      "de": {
        "name": "Den vorhandenen Amp nutzen",
        "objective": "Lies die Wirkung eines **vorhandenen Amps in FC 27 Clubs auf PS5, Xbox Series, PC oder Switch 2** und rüste ihn aus. **Spiel ein Stadion- oder In-World-Rush-Match, in dem er wirkt**, ohne einen weiteren zu kaufen.",
        "gameObjective": "Lies die Wirkung eines **vorhandenen Amps in FC 27 Clubs auf PS5, Xbox Series, PC oder Switch 2** und rüste ihn aus. **Spiel ein Stadion- oder In-World-Rush-Match, in dem er wirkt**, ohne einen weiteren zu kaufen."
      }
    },
    "experience": {
      "family": "amp-test",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": ["co-op"] },
      "finish": "attempt",
      "activities": ["abilities"],
      "rules": ["full-match"],
      "prerequisites": [
        {
          "en": "PS5, Xbox Series, PC or Switch 2; online access",
          "de": "PS5, Xbox Series, PC oder Switch 2; Onlinezugang",
          "chips": {"en": ["The Grounds"], "de": ["The Grounds"]},
          "critical": true
        },
        {
          "en": "Owned Amp; match where its effect applies",
          "de": "Eigener Amp; Match mit passender Wirkung",
          "chips": {"en": ["Amp"], "de": ["Amp"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "others",
          "participation": "co-op",
          "formation": "team",
          "mode": "The Grounds / Clubs activity as stated"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "ea-sports-fc-fc27-create-recovery-scenario",
    "moodIds": ["create", "focused"],
    "type": "creation",
    "tags": ["story"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-27"]
    },
    "translations": {
      "en": {
        "name": "Build a Recovery Challenge",
        "objective": "In **FC 27 Manager Live Creator**, set a club, a short timeline, and a table-position objective for a recovery scenario. **Save the challenge and play its opening fixture**, keeping it private for now.",
        "gameObjective": "In **FC 27 Manager Live Creator**, set a club, a short timeline, and a table-position objective for a recovery scenario. **Save the challenge and play its opening fixture**, keeping it private for now."
      },
      "de": {
        "name": "Eine Aufholaufgabe bauen",
        "objective": "Leg in **FC 27 Manager Live Creator** Verein, kurzen Zeitraum und Tabellenziel für ein Aufholszenario fest. **Speichere die Aufgabe und spiel ihr Auftaktmatch**. Behalte sie vorerst privat.",
        "gameObjective": "Leg in **FC 27 Manager Live Creator** Verein, kurzen Zeitraum und Tabellenziel für ein Aufholszenario fest. **Speichere die Aufgabe und spiel ihr Auftaktmatch**. Behalte sie vorerst privat."
      }
    },
    "experience": {
      "family": "scenario-creation",
      "cardMetadata": { "genreIds": ["sports", "simulation"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Manager Live Creator available",
          "de": "Manager Live Creator verfügbar",
          "chips": {"en": ["Manager Live Creator"], "de": ["Manager Live Creator"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "co-op",
          "formation": "team",
          "mode": "Career or Kick Off as stated"
        }
      ]
    },
    "gameGenreIds": ["sports", "simulation"],
    "rarity": "special"
  },
  {
    "id": "ea-sports-fc-fc27-reserves-practice",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["full-match", "vs-bots"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-27"]
    },
    "translations": {
      "en": {
        "name": "First Team, Meet Reserves",
        "objective": "Open the **FC 27 Manager Career Practice Arena** and use your starting eleven against the reserves. **Finish an 11v11 practice match with one reserve moved into the first team** and see where they fit.",
        "gameObjective": "Open the **FC 27 Manager Career Practice Arena** and use your starting eleven against the reserves. **Finish an 11v11 practice match with one reserve moved into the first team** and see where they fit."
      },
      "de": {
        "name": "Erste Elf gegen Reserve",
        "objective": "Öffne die **Trainingsarena der FC-27-Managerkarriere** und lass Startelf gegen Reserve spielen. **Beende ein 11-gegen-11-Trainingsmatch mit einem Reservespieler in der Startelf** und schau, wo er passt.",
        "gameObjective": "Öffne die **Trainingsarena der FC-27-Managerkarriere** und lass Startelf gegen Reserve spielen. **Beende ein 11-gegen-11-Trainingsmatch mit einem Reservespieler in der Startelf** und schau, wo er passt."
      }
    },
    "experience": {
      "family": "reserve-match",
      "cardMetadata": { "genreIds": ["sports", "simulation"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["full-match"],
      "prerequisites": [
        {
          "en": "Manager Career Practice Arena available",
          "de": "Trainingsarena in Managerkarriere verfügbar",
          "chips": {"en": ["Career Practice Arena"], "de": ["Karriere-Trainingsarena"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "co-op",
          "formation": "team",
          "mode": "Career or Kick Off as stated"
        }
      ]
    },
    "gameGenreIds": ["sports", "simulation"]
  },
  {
    "id": "ea-sports-fc-fc27-future-transfer-plan",
    "moodIds": ["focused", "curious"],
    "type": "experiment",
    "tags": ["trading"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-27"]
    },
    "translations": {
      "en": {
        "name": "Spread the Fee",
        "objective": "In **FC 27 Manager Career with a transfer negotiation already open**, propose installments instead of paying the whole fee now. **Submit one proposal and inspect its future costs**, whether accepted or rejected.",
        "gameObjective": "In **FC 27 Manager Career with a transfer negotiation already open**, propose installments instead of paying the whole fee now. **Submit one proposal and inspect its future costs**, whether accepted or rejected."
      },
      "de": {
        "name": "Die Ablöse verteilen",
        "objective": "Biete in der **FC-27-Managerkarriere mit bereits offener Transferverhandlung** Raten statt der vollen sofortigen Ablöse an. **Reich einen Vorschlag ein und prüf seine späteren Kosten**, auch bei Ablehnung.",
        "gameObjective": "Biete in der **FC-27-Managerkarriere mit bereits offener Transferverhandlung** Raten statt der vollen sofortigen Ablöse an. **Reich einen Vorschlag ein und prüf seine späteren Kosten**, auch bei Ablehnung."
      }
    },
    "experience": {
      "family": "transfer-proposal",
      "cardMetadata": { "genreIds": ["sports", "simulation"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["trading"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Open transfer negotiation",
          "de": "Offene Transferverhandlung",
          "chips": {"en": ["Transfer negotiation"], "de": ["Transferverhandlung"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "Manager Career"
        }
      ]
    },
    "gameGenreIds": ["sports", "simulation"]
  },
  {
    "id": "ea-sports-fc-fc27-contract-role-fixture",
    "moodIds": ["progress", "focused"],
    "type": "objective",
    "tags": ["story", "full-match"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-27"]
    },
    "translations": {
      "en": {
        "name": "Keep the Squad Promise",
        "objective": "In **FC 27 Manager Career**, read an existing player’s contract squad role and select one whose promised playing time you can honour. **Start that player in the next fixture and complete the match**.",
        "gameObjective": "In **FC 27 Manager Career**, read an existing player’s contract squad role and select one whose promised playing time you can honour. **Start that player in the next fixture and complete the match**."
      },
      "de": {
        "name": "Das Kaderversprechen halten",
        "objective": "Lies in der **FC-27-Managerkarriere** die vertragliche Kaderrolle eines vorhandenen Spielers und wähl jemanden, dessen Spielzeitversprechen du erfüllen kannst. **Lass ihn im nächsten Match starten und spiel es zu Ende**.",
        "gameObjective": "Lies in der **FC-27-Managerkarriere** die vertragliche Kaderrolle eines vorhandenen Spielers und wähl jemanden, dessen Spielzeitversprechen du erfüllen kannst. **Lass ihn im nächsten Match starten und spiel es zu Ende**."
      }
    },
    "experience": {
      "family": "contract-fixture",
      "cardMetadata": { "genreIds": ["sports", "simulation"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["story"],
      "rules": ["full-match"],
      "prerequisites": [
        {
          "en": "Existing contract role with achievable playing-time promise",
          "de": "Vorhandene Vertragsrolle mit erfüllbarem Spielzeitversprechen",
          "chips": {"en": ["Contract role", "Playing-time promise"], "de": ["Vertragsrolle", "Spielzeitversprechen"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "co-op",
          "formation": "team",
          "mode": "Career or Kick Off as stated"
        }
      ]
    },
    "gameGenreIds": ["sports", "simulation"]
  },
  {
    "id": "ea-sports-fc-fc27-form-last-season",
    "moodIds": ["focused", "curious"],
    "type": "experiment",
    "tags": ["story"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-27"]
    },
    "translations": {
      "en": {
        "name": "This Season, Last Season",
        "objective": "With a previous season recorded in **FC 27 Manager Career’s Deeper Simulation**, **compare a transfer target’s old and current-season statistics and decide whether to shortlist them**.",
        "gameObjective": "With a previous season recorded in **FC 27 Manager Career’s Deeper Simulation**, **compare a transfer target’s old and current-season statistics and decide whether to shortlist them**."
      },
      "de": {
        "name": "Diese und letzte Saison",
        "objective": "**Vergleiche in der tieferen Simulation der FC-27-Managerkarriere mit erfasster Vorsaison alte und aktuelle Statistiken eines Transferkandidaten und entscheide über einen Listenplatz**.",
        "gameObjective": "**Vergleiche in der tieferen Simulation der FC-27-Managerkarriere mit erfasster Vorsaison alte und aktuelle Statistiken eines Transferkandidaten und entscheide über einen Listenplatz**."
      }
    },
    "experience": {
      "family": "shortlist",
      "cardMetadata": { "genreIds": ["sports", "simulation"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Prior season recorded in Deeper Simulation",
          "de": "Vorsaison in tieferer Simulation erfasst",
          "chips": {"en": ["Prior season"], "de": ["Vorsaison"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "Manager Career"
        }
      ]
    },
    "gameGenreIds": ["sports", "simulation"]
  },
  {
    "id": "ea-sports-fc-fc27-renewal-budget",
    "moodIds": ["overwhelmed", "progress"],
    "type": "objective",
    "tags": ["story"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-27"]
    },
    "translations": {
      "en": {
        "name": "The Next Contract",
        "objective": "In **FC 27 Manager Career Contracts & Clauses**, choose an expiring deal in your current squad. **Make a renewal offer within your wage budget**.",
        "gameObjective": "In **FC 27 Manager Career Contracts & Clauses**, choose an expiring deal in your current squad. **Make a renewal offer within your wage budget**."
      },
      "de": {
        "name": "Der nächste Vertrag",
        "objective": "Such in **Verträgen und Klauseln der FC-27-Managerkarriere** einen auslaufenden Vertrag im aktuellen Kader. **Mach ein Verlängerungsangebot innerhalb deines Gehaltsbudgets**.",
        "gameObjective": "Such in **Verträgen und Klauseln der FC-27-Managerkarriere** einen auslaufenden Vertrag im aktuellen Kader. **Mach ein Verlängerungsangebot innerhalb deines Gehaltsbudgets**."
      }
    },
    "experience": {
      "family": "contract-renewal",
      "cardMetadata": { "genreIds": ["sports", "simulation"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Expiring contract; wage budget available",
          "de": "Auslaufender Vertrag; Gehaltsbudget verfügbar",
          "chips": {"en": ["Expiring contract", "Wage budget"], "de": ["Auslaufender Vertrag", "Gehaltsbudget"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "Manager Career"
        }
      ]
    },
    "gameGenreIds": ["sports", "simulation"]
  },
  {
    "id": "ea-sports-fc-fc27-hunter-return",
    "moodIds": ["nostalgic"],
    "type": "inspiration",
    "tags": ["story"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-27"]
    },
    "translations": {
      "en": {
        "name": "Alex Hunter Again",
        "objective": "On FC 27 The Grounds for PS5, Xbox Series, PC, or Switch 2, revisit Alex Hunter if you remember The Journey. Let his challenges and the streets nearby **bring back that early-career football feeling**.",
        "gameObjective": "On FC 27 The Grounds for PS5, Xbox Series, PC, or Switch 2, revisit Alex Hunter if you remember The Journey. Let his challenges and the streets nearby **bring back that early-career football feeling**."
      },
      "de": {
        "name": "Wieder Alex Hunter",
        "objective": "Besuch in FC 27 The Grounds auf PS5, Xbox Series, PC oder Switch 2 Alex Hunter, wenn du The Journey noch kennst. Lass seine Aufgaben und die Straßen drumherum **das Gefühl der frühen Fußballkarriere zurückbringen**.",
        "gameObjective": "Besuch in FC 27 The Grounds auf PS5, Xbox Series, PC oder Switch 2 Alex Hunter, wenn du The Journey noch kennst. Lass seine Aufgaben und die Straßen drumherum **das Gefühl der frühen Fußballkarriere zurückbringen**."
      }
    },
    "experience": {
      "family": "familiar-hunter",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "The Grounds; familiar with The Journey",
          "de": "The Grounds; The Journey vertraut",
          "chips": {"en": ["The Grounds", "The Journey"], "de": ["The Grounds", "The Journey"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "The Grounds"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "ea-sports-fc-fc27-football-park",
    "moodIds": ["relax", "explore"],
    "type": "inspiration",
    "tags": ["free-roam"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-27"]
    },
    "translations": {
      "en": {
        "name": "The Parkside Walk",
        "objective": "In FC 27 The Grounds on PS5, Xbox Series, PC, or Switch 2, spend the session around Parkside’s streets and park. **Follow the football spaces that look inviting** and drop into a kickabout whenever you feel like it.",
        "gameObjective": "In FC 27 The Grounds on PS5, Xbox Series, PC, or Switch 2, spend the session around Parkside’s streets and park. **Follow the football spaces that look inviting** and drop into a kickabout whenever you feel like it."
      },
      "de": {
        "name": "Rundgang durch Parkside",
        "objective": "Verbring in FC 27 The Grounds auf PS5, Xbox Series, PC oder Switch 2 die Session in Parksides Straßen und Park. **Folge den Fußballplätzen, die dich ansprechen**, und steig bei Lust in einen Kickabout ein.",
        "gameObjective": "Verbring in FC 27 The Grounds auf PS5, Xbox Series, PC oder Switch 2 die Session in Parksides Straßen und Park. **Folge den Fußballplätzen, die dich ansprechen**, und steig bei Lust in einen Kickabout ein."
      }
    },
    "experience": {
      "family": "park-roaming",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
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
          "mode": "The Grounds"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "ea-sports-fc-fc25-rush-kickoff",
    "moodIds": ["restless"],
    "type": "objective",
    "tags": ["full-match"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-25"]
    },
    "translations": {
      "en": {
        "name": "Seven-Minute Rush",
        "objective": "In FC 25 Kick-Off Rush, **play one full 5v5 match and make one overlapping run**.",
        "gameObjective": "In FC 25 Kick-Off Rush, **play one full 5v5 match and make one overlapping run**."
      },
      "de": {
        "name": "Sieben Minuten Rush",
        "objective": "Spiel in FC 25 ein ganzes 5-gegen-5-Rush-Match im Anstoßmodus und **starte einmal einen hinterlaufenden Laufweg**.",
        "gameObjective": "Spiel in FC 25 ein ganzes 5-gegen-5-Rush-Match im Anstoßmodus und **starte einmal einen hinterlaufenden Laufweg**."
      }
    },
    "experience": {
      "family": "rush-overlap",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": [],
      "rules": ["full-match"],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "co-op",
          "formation": "team",
          "mode": "Kick Off / Career as stated"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "ea-sports-fc-fc25-role-plus",
    "moodIds": ["curious"],
    "type": "experiment",
    "tags": ["loadout"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-25"]
    },
    "translations": {
      "en": {
        "name": "Use a Role+",
        "objective": "In FC IQ, assign one player a Role+ they possess and **watch their movement in one Kick-Off match**.",
        "gameObjective": "In FC IQ, assign one player a Role+ they possess and **watch their movement in one Kick-Off match**."
      },
      "de": {
        "name": "Eine Role+ nutzen",
        "objective": "Gib einem Spieler in FC IQ **eine vorhandene Role+ und beobachte seine Laufwege in einem Anstoßmatch**.",
        "gameObjective": "Gib einem Spieler in FC IQ **eine vorhandene Role+ und beobachte seine Laufwege in einem Anstoßmatch**."
      }
    },
    "experience": {
      "family": "player-role",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["loadout"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Player with the assigned Role+",
          "de": "Spieler mit passender Role+",
          "chips": {"en": ["Role+"], "de": ["Role+"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "co-op",
          "formation": "team",
          "mode": "Kick Off / Career as stated"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "ea-sports-fc-fc25-youth-rush",
    "moodIds": ["progress"],
    "type": "objective",
    "tags": ["story"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-25"]
    },
    "translations": {
      "en": {
        "name": "Youth Tournament",
        "objective": "In Manager Career, if a Youth Tournament is available, **play one Rush match with academy players**.",
        "gameObjective": "In Manager Career, if a Youth Tournament is available, **play one Rush match with academy players**."
      },
      "de": {
        "name": "Jugendturnier",
        "objective": "Wenn in der Managerkarriere ein Jugendturnier verfügbar ist, **spiel ein Rush-Match mit Nachwuchsspielern**.",
        "gameObjective": "Wenn in der Managerkarriere ein Jugendturnier verfügbar ist, **spiel ein Rush-Match mit Nachwuchsspielern**."
      }
    },
    "experience": {
      "family": "youth-tournament",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Youth Tournament available; academy players",
          "de": "Jugendturnier verfügbar; Nachwuchsspieler",
          "chips": {"en": ["Youth Tournament", "Academy players"], "de": ["Jugendturnier", "Nachwuchsspieler"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "co-op",
          "formation": "team",
          "mode": "Kick Off / Career as stated"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "ea-sports-fc-fc25-penalty-order",
    "moodIds": ["challenge"],
    "type": "challenge",
    "tags": ["three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-25"]
    },
    "translations": {
      "en": {
        "name": "Three Penalty Takers",
        "objective": "In a penalty shootout, **score with three different players using three different corners**. Stop after three shootouts.",
        "gameObjective": "In a penalty shootout, **score with three different players using three different corners**. Stop after three shootouts."
      },
      "de": {
        "name": "Drei Elfmeterschützen",
        "objective": "Triff im Elfmeterschießen **mit drei verschiedenen Spielern in drei verschiedene Ecken**. Nach drei Shootouts ist Schluss.",
        "gameObjective": "Triff im Elfmeterschießen **mit drei verschiedenen Spielern in drei verschiedene Ecken**. Nach drei Shootouts ist Schluss."
      }
    },
    "experience": {
      "family": "penalty-shootout",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Penalty shootout available",
          "de": "Elfmeterschießen verfügbar",
          "chips": {"en": ["Penalty shootout"], "de": ["Elfmeterschießen"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "co-op",
          "formation": "team",
          "mode": "Kick Off / Career as stated"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "ea-sports-fc-fc25-player-origin",
    "moodIds": ["curious"],
    "type": "objective",
    "tags": ["story"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-25"]
    },
    "translations": {
      "en": {
        "name": "An Origin Story",
        "objective": "Start a Player Career with an Origin Story and **play its first match while following the character's opening objective**.",
        "gameObjective": "Start a Player Career with an Origin Story and **play its first match while following the character's opening objective**."
      },
      "de": {
        "name": "Eine Vorgeschichte",
        "objective": "Starte eine Spielerkarriere mit Vorgeschichte und **spiel das erste Match mit dem anfänglichen Ziel der Figur**.",
        "gameObjective": "Starte eine Spielerkarriere mit Vorgeschichte und **spiel das erste Match mit dem anfänglichen Ziel der Figur**."
      }
    },
    "experience": {
      "family": "player-origin",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Player Career Origin Story available",
          "de": "Vorgeschichte in Spielerkarriere verfügbar",
          "chips": {"en": ["Origin Story"], "de": ["Vorgeschichte"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "co-op",
          "formation": "team",
          "mode": "Kick Off / Career as stated"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "ea-sports-fc-fc25-set-piece-plan",
    "moodIds": ["focused", "curious"],
    "type": "experiment",
    "tags": ["full-match"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-25"]
    },
    "translations": {
      "en": {
        "name": "A Corner Plan",
        "objective": "In **FC 25 Kick Off against the CPU**, plan to take corners short. **Try passing back into the attacking area from a short corner and finish the match**. If no corner occurs, the completed match still counts.",
        "gameObjective": "In **FC 25 Kick Off against the CPU**, plan to take corners short. **Try passing back into the attacking area from a short corner and finish the match**. If no corner occurs, the completed match still counts."
      },
      "de": {
        "name": "Plan für eine Ecke",
        "objective": "Plane in **FC 25 Anstoß gegen die CPU** kurze Ecken. **Probier nach einer kurzen Ecke den Pass zurück in den Angriffsbereich und beende das Match**. Gibt es keine Ecke, zählt das beendete Match trotzdem.",
        "gameObjective": "Plane in **FC 25 Anstoß gegen die CPU** kurze Ecken. **Probier nach einer kurzen Ecke den Pass zurück in den Angriffsbereich und beende das Match**. Gibt es keine Ecke, zählt das beendete Match trotzdem."
      }
    },
    "experience": {
      "family": "short-corner",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["full-match"],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "co-op",
          "formation": "team",
          "mode": "Kick Off / Career as stated"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "ea-sports-fc-fc26-manager-live",
    "moodIds": ["progress"],
    "type": "objective",
    "tags": ["story"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-26"]
    },
    "translations": {
      "en": {
        "name": "A Live Scenario",
        "objective": "Open an available Manager Live scenario and **finish its first match or stated first milestone**.",
        "gameObjective": "Open an available Manager Live scenario and **finish its first match or stated first milestone**."
      },
      "de": {
        "name": "Ein Live-Szenario",
        "objective": "Öffne ein verfügbares Manager-Live-Szenario und **beende sein erstes Match oder den ersten genannten Meilenstein**.",
        "gameObjective": "Öffne ein verfügbares Manager-Live-Szenario und **beende sein erstes Match oder den ersten genannten Meilenstein**."
      }
    },
    "experience": {
      "family": "live-scenario",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Manager Live scenario currently available",
          "de": "Manager-Live-Szenario aktuell verfügbar",
          "chips": {"en": ["Manager Live scenario"], "de": ["Manager-Live-Szenario"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "co-op",
          "formation": "team",
          "mode": "Kick Off / Career as stated"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "ea-sports-fc-fc26-archetype-test",
    "moodIds": ["curious"],
    "type": "experiment",
    "tags": ["abilities"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-26"]
    },
    "translations": {
      "en": {
        "name": "Play the Archetype",
        "objective": "In Player Career, choose an Archetype perk and **use its effect during one complete match**.",
        "gameObjective": "In Player Career, choose an Archetype perk and **use its effect during one complete match**."
      },
      "de": {
        "name": "Archetyp im Spiel",
        "objective": "Wähle in der Spielerkarriere einen Archetypen-Perk und **nutze seine Wirkung in einem vollständigen Match**.",
        "gameObjective": "Wähle in der Spielerkarriere einen Archetypen-Perk und **nutze seine Wirkung in einem vollständigen Match**."
      }
    },
    "experience": {
      "family": "archetype-perk",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["abilities"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Unlocked Archetype perk",
          "de": "Freigeschalteter Archetypen-Perk",
          "chips": {"en": ["Archetype perk"], "de": ["Archetypen-Perk"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "co-op",
          "formation": "team",
          "mode": "Kick Off / Career as stated"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "ea-sports-fc-fc26-keeper-rebound",
    "moodIds": ["focused", "curious"],
    "type": "experiment",
    "tags": ["full-match"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-26"]
    },
    "translations": {
      "en": {
        "name": "Follow the Rebound",
        "objective": "In an **FC 26 Ultimate Team Rivals match**, **look for a rebound after your shot and follow it with another attacker**. Play through the final whistle, even if no rebound falls your way.",
        "gameObjective": "In an **FC 26 Ultimate Team Rivals match**, **look for a rebound after your shot and follow it with another attacker**. Play through the final whistle, even if no rebound falls your way."
      },
      "de": {
        "name": "Dem Abpraller folgen",
        "objective": "**Achte in einem FC-26-Ultimate-Team-Rivals-Match nach deinem Schuss auf einen Abpraller und geh mit einem anderen Angreifer nach**. Spiel bis zum Schlusspfiff, auch wenn kein Abpraller zu dir fällt.",
        "gameObjective": "**Achte in einem FC-26-Ultimate-Team-Rivals-Match nach deinem Schuss auf einen Abpraller und geh mit einem anderen Angreifer nach**. Spiel bis zum Schlusspfiff, auch wenn kein Abpraller zu dir fällt."
      }
    },
    "experience": {
      "family": "rebound",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["full-match"],
      "prerequisites": [
        {
          "en": "Ultimate Team Rivals access; owned squad",
          "de": "Ultimate-Team-Rivals-Zugang; eigenes Team",
          "chips": {"en": ["Ultimate Team Rivals"], "de": ["Ultimate Team Rivals"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "co-op",
          "formation": "team",
          "mode": "Ultimate Team"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "ea-sports-fc-fc26-fut-live-event",
    "moodIds": ["challenge"],
    "type": "challenge",
    "tags": ["full-match", "three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-26"]
    },
    "translations": {
      "en": {
        "name": "Event Rules",
        "objective": "Enter an available FUT Live Event and **finish one match under its special squad or play rules**. Stop after three entries.",
        "gameObjective": "Enter an available FUT Live Event and **finish one match under its special squad or play rules**. Stop after three entries."
      },
      "de": {
        "name": "Regeln eines Live-Events",
        "objective": "Nimm an einem verfügbaren FUT-Live-Event teil und **beende ein Match mit seinen Sonderregeln für Team oder Spiel**. Drei Anläufe.",
        "gameObjective": "Nimm an einem verfügbaren FUT-Live-Event teil und **beende ein Match mit seinen Sonderregeln für Team oder Spiel**. Drei Anläufe."
      }
    },
    "experience": {
      "family": "event-rules",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["full-match", "three-attempts"],
      "prerequisites": [
        {
          "en": "Live Event available; eligible owned squad",
          "de": "Live-Event verfügbar; passendes eigenes Team",
          "chips": {"en": ["Live Event", "Squad"], "de": ["Live-Event", "Team"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "co-op",
          "formation": "team",
          "mode": "Ultimate Team"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "ea-sports-fc-fc26-youth-scout",
    "moodIds": ["progress"],
    "type": "objective",
    "tags": ["story"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-26"]
    },
    "translations": {
      "en": {
        "name": "One Academy Prospect",
        "objective": "With a youth scout report already available in **FC 26 Manager Career**, **review one prospect and decide whether to sign them** using the report.",
        "gameObjective": "With a youth scout report already available in **FC 26 Manager Career**, **review one prospect and decide whether to sign them** using the report."
      },
      "de": {
        "name": "Ein Nachwuchstalent",
        "objective": "**Prüfe in der FC-26-Managerkarriere einen Nachwuchsspieler aus einem schon vorhandenen Scoutbericht und entscheide anhand des Berichts über eine Verpflichtung**.",
        "gameObjective": "**Prüfe in der FC-26-Managerkarriere einen Nachwuchsspieler aus einem schon vorhandenen Scoutbericht und entscheide anhand des Berichts über eine Verpflichtung**."
      }
    },
    "experience": {
      "family": "youth-report",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Ready youth scout report",
          "de": "Vorhandener Nachwuchs-Scoutbericht",
          "chips": {"en": ["Youth scout report"], "de": ["Nachwuchs-Scoutbericht"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "co-op",
          "formation": "team",
          "mode": "Kick Off / Career as stated"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "ea-sports-fc-fc26-tactical-switch",
    "moodIds": ["curious"],
    "type": "experiment",
    "tags": ["loadout"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-26"]
    },
    "translations": {
      "en": {
        "name": "Change Shape at Half-Time",
        "objective": "In one Kick-Off match, **change the team's tactical shape at half-time and compare where chances come from afterward**.",
        "gameObjective": "In one Kick-Off match, **change the team's tactical shape at half-time and compare where chances come from afterward**."
      },
      "de": {
        "name": "Formwechsel zur Halbzeit",
        "objective": "Ändere in einem Anstoßmatch **zur Halbzeit die Taktikformation und beobachte, wo danach Chancen entstehen**.",
        "gameObjective": "Ändere in einem Anstoßmatch **zur Halbzeit die Taktikformation und beobachte, wo danach Chancen entstehen**."
      }
    },
    "experience": {
      "family": "tactical-switch",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["loadout"],
      "rules": [],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "co-op",
          "formation": "team",
          "mode": "Kick Off / Career as stated"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "ea-sports-fc-fc27-grounds-1v1",
    "moodIds": ["challenge"],
    "type": "challenge",
    "tags": ["three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-27"]
    },
    "translations": {
      "en": {
        "name": "Grounds Duel",
        "objective": "In The Grounds, **finish one 1v1 and score after beating your opponent with a move**. Stop after three duels.",
        "gameObjective": "In The Grounds, **finish one 1v1 and score after beating your opponent with a move**. Stop after three duels."
      },
      "de": {
        "name": "Duell auf The Grounds",
        "objective": "Spiel auf The Grounds **ein 1-gegen-1 und triff nach einem ausgespielten Gegner**. Drei Duelle.",
        "gameObjective": "Spiel auf The Grounds **ein 1-gegen-1 und triff nach einem ausgespielten Gegner**. Drei Duelle."
      }
    },
    "experience": {
      "family": "street-duel",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Online The Grounds on a supported platform",
          "de": "Online The Grounds auf unterstützter Plattform",
          "chips": {"en": ["The Grounds"], "de": ["The Grounds"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "The Grounds"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "ea-sports-fc-fc27-mentor-lesson",
    "moodIds": ["curious"],
    "type": "objective",
    "tags": ["abilities"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-27"]
    },
    "translations": {
      "en": {
        "name": "A Mentor's Lesson",
        "objective": "If a mentor activity is available in The Grounds, **finish one lesson and try its move in play**.",
        "gameObjective": "If a mentor activity is available in The Grounds, **finish one lesson and try its move in play**."
      },
      "de": {
        "name": "Eine Lektion vom Mentor",
        "objective": "Wenn auf The Grounds eine Mentor-Aktivität offen ist, **schließe eine Lektion ab und nutze den Move im Spiel**.",
        "gameObjective": "Wenn auf The Grounds eine Mentor-Aktivität offen ist, **schließe eine Lektion ab und nutze den Move im Spiel**."
      }
    },
    "experience": {
      "family": "mentor-lesson",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["abilities"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Available Grounds mentor activity",
          "de": "Verfügbare Grounds-Mentor-Aktivität",
          "chips": {"en": ["Grounds mentor activity"], "de": ["Grounds-Mentor-Aktivität"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "The Grounds"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "ea-sports-fc-fc27-transfer-clause",
    "moodIds": ["focused"],
    "type": "objective",
    "tags": ["trading"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-27"]
    },
    "translations": {
      "en": {
        "name": "Read the Clause",
        "objective": "In Manager Career, **negotiate one transfer using a performance or buy-back clause, then inspect the final deal**.",
        "gameObjective": "In Manager Career, **negotiate one transfer using a performance or buy-back clause, then inspect the final deal**."
      },
      "de": {
        "name": "Die Klausel prüfen",
        "objective": "Verhandle in der Managerkarriere **einen Transfer mit Leistungs- oder Rückkaufklausel und prüfe den fertigen Vertrag**.",
        "gameObjective": "Verhandle in der Managerkarriere **einen Transfer mit Leistungs- oder Rückkaufklausel und prüfe den fertigen Vertrag**."
      }
    },
    "experience": {
      "family": "transfer-clause",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["trading"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Transfer negotiation with the chosen clause available",
          "de": "Transferverhandlung mit verfügbarer gewählter Klausel",
          "chips": {"en": ["Contract clause"], "de": ["Vertragsklausel"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "Manager Career"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "ea-sports-fc-fc27-dynamic-overall",
    "moodIds": ["curious"],
    "type": "experiment",
    "tags": ["story"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-27"]
    },
    "translations": {
      "en": {
        "name": "Form Changes the Rating",
        "objective": "In Manager Career, **compare one player's Dynamic OVR before and after a match in which you start them**.",
        "gameObjective": "In Manager Career, **compare one player's Dynamic OVR before and after a match in which you start them**."
      },
      "de": {
        "name": "Form ändert die Wertung",
        "objective": "Vergleiche in der Managerkarriere **den dynamischen GES-Wert eines Spielers vor und nach einem Match, in dem er startet**.",
        "gameObjective": "Vergleiche in der Managerkarriere **den dynamischen GES-Wert eines Spielers vor und nach einem Match, in dem er startet**."
      }
    },
    "experience": {
      "family": "dynamic-rating",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Player’s Dynamic OVR visible in Manager Career",
          "de": "Dynamischer GES-Wert in Managerkarriere sichtbar",
          "chips": {"en": ["Dynamic OVR"], "de": ["Dynamischer GES-Wert"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "co-op",
          "formation": "team",
          "mode": "Kick Off / Career as stated"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "ea-sports-fc-fc27-gallery-choice",
    "moodIds": ["create"],
    "type": "creation",
    "tags": ["cards"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-27"]
    },
    "translations": {
      "en": {
        "name": "A FUT Gallery Theme",
        "objective": "In FUT, **place Player Items around one club theme in the Gallery and save that display**.",
        "gameObjective": "In FUT, **place Player Items around one club theme in the Gallery and save that display**."
      },
      "de": {
        "name": "Thema für die FUT-Galerie",
        "objective": "Ordne in FUT **Spielerobjekte zu einem Vereinsthema in der Galerie an und speichere die Ausstellung**.",
        "gameObjective": "Ordne in FUT **Spielerobjekte zu einem Vereinsthema in der Galerie an und speichere die Ausstellung**."
      }
    },
    "experience": {
      "family": "gallery-display",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["cards"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Ultimate Team Gallery available; owned Player Items",
          "de": "Ultimate-Team-Galerie verfügbar; eigene Spieleritems",
          "chips": {"en": ["Ultimate Team Gallery", "Player Items"], "de": ["Ultimate-Team-Galerie", "Spieleritems"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "Ultimate Team Gallery"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "ea-sports-fc-fc27-manager-creator",
    "moodIds": ["curious"],
    "type": "objective",
    "tags": ["story"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-27"]
    },
    "translations": {
      "en": {
        "name": "Community Manager Challenge",
        "objective": "Load a community-made Manager Live Creator scenario through its share code and **finish its first stated objective**.",
        "gameObjective": "Load a community-made Manager Live Creator scenario through its share code and **finish its first stated objective**."
      },
      "de": {
        "name": "Manager-Aufgabe der Community",
        "objective": "Lade ein Manager-Live-Creator-Szenario der Community über seinen Share-Code und **erledige sein erstes genanntes Ziel**.",
        "gameObjective": "Lade ein Manager-Live-Creator-Szenario der Community über seinen Share-Code und **erledige sein erstes genanntes Ziel**."
      }
    },
    "experience": {
      "family": "community-scenario",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Valid community scenario share code",
          "de": "Gültiger Share-Code eines Community-Szenarios",
          "chips": {"en": ["Community share code"], "de": ["Community-Share-Code"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "Download shared scenario"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "ea-sports-fc-fc27-dynamic-corner",
    "moodIds": ["focused"],
    "type": "objective",
    "tags": [],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "ea-sports-fc",
      "installmentIds": ["fc-27"]
    },
    "translations": {
      "en": {
        "name": "Move the Corner",
        "objective": "In a Kick-Off match, **use a dynamic corner routine to reach a player you selected before the kick**.",
        "gameObjective": "In a Kick-Off match, **use a dynamic corner routine to reach a player you selected before the kick**."
      },
      "de": {
        "name": "Die Ecke variieren",
        "objective": "Nutze in einem Anstoßmatch **eine dynamische Ecke, um einen vor dem Anstoß ausgesuchten Spieler zu erreichen**.",
        "gameObjective": "Nutze in einem Anstoßmatch **eine dynamische Ecke, um einen vor dem Anstoß ausgesuchten Spieler zu erreichen**."
      }
    },
    "experience": {
      "family": "dynamic-corner",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "en": "Dynamic corners available in Kick Off",
          "de": "Dynamische Ecken in Anstoß verfügbar",
          "chips": {"en": ["Dynamic corners"], "de": ["Dynamische Ecken"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "co-op",
          "formation": "team",
          "mode": "Kick Off / Career as stated"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  }
]);
