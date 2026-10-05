import { defineQuests } from "./defineQuests";

export const ConnectQuests = defineQuests([
  {
    "id": "co-op-check-in",
    "moodIds": ["connect"],
    "type": "inspiration",
    "tags": ["co-op"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Back Together",
        "objective": "Open **a co-op game you share with someone**. Join each other’s save and **follow what they want to play today**.",
        "gameObjective": "With someone you share a co-op save with in **{{game}}**, join up and **follow what they want to play today**."
      },
      "de": {
        "name": "Wieder zusammen",
        "objective": "Starte **ein Koop-Spiel, das du früher mit jemandem zusammen gespielt hast**. Ladet euren gemeinsamen Spielstand und **spielt heute das, worauf die andere Person Lust hat**.",
        "gameObjective": "Triff dich in **{{game}}** mit jemandem aus eurem gemeinsamen Koop-Spielstand und **folge dem, was die Person heute spielen möchte**."
      }
    },
    "experience": {
      "family": "shared-save",
      "cardMetadata": { "genreIds": [], "playStyleIds": ["co-op"] },
      "finish": "open",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "en": "Shared co-op save; another human player",
          "de": "Gemeinsamer Koop-Spielstand; weitere Person",
          "chips": {"en": ["Shared save"], "de": ["Gemeinsamer Spielstand"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "others",
          "participation": "co-op",
          "formation": "none"
        },
        {
          "connection": "offline",
          "people": "others",
          "participation": "co-op",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": [],
    "customGameOverrideOnly": true
  },
  {
    "id": "pass-the-controller",
    "moodIds": ["connect"],
    "type": "inspiration",
    "tags": ["local-play"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Pass the Controller",
        "objective": "With someone nearby, open **a local game with short turns**. **Pass the controller after each turn** and talk about what goes well or hilariously wrong.",
        "gameObjective": "With someone beside you in a short-turn mode of **{{game}}**, **pass the controller after each turn** and talk about what goes well or hilariously wrong."
      },
      "de": {
        "name": "Controller weitergeben",
        "objective": "Starte mit jemandem vor Ort **ein Spiel mit kurzen Zügen**. **Gebt den Controller nach jedem Zug weiter** und kommentiert, was klappt oder völlig schiefgeht.",
        "gameObjective": "**Gebt in {{game}} in einem Modus mit kurzen Zügen den Controller nach jedem Zug weiter** und kommentiert, was klappt oder völlig schiefgeht."
      }
    },
    "experience": {
      "family": "controller-sharing",
      "cardMetadata": { "genreIds": [], "playStyleIds": ["local-play"] },
      "finish": "open",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "en": "Someone nearby",
          "de": "Jemand vor Ort",
          "chips": {"en": [], "de": []},
          "critical": true
        },
        {
          "en": "Short-turn mode for sharing one controller",
          "de": "Modus mit kurzen Zügen zum Weitergeben eines Controllers",
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
          "mode": "controller-sharing"
        }
      ]
    },
    "gameGenreIds": [],
    "customGameOverrideOnly": true
  },
  {
    "id": "public-event",
    "moodIds": ["connect"],
    "type": "objective",
    "tags": ["co-op", "support"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Join the Event",
        "objective": "Join **an active public event in an online game**. Help with its shared objective and **stay through the result or reward**. Winning is not required.",
        "gameObjective": "With a public cooperative event already active in **{{game}}**, **join its objectives and stay through the event result**."
      },
      "de": {
        "name": "Beim Event dabei",
        "objective": "Besuche **ein laufendes öffentliches Event in einem Onlinespiel**. Hilf beim gemeinsamen Ziel und **bleib bis zum Ergebnis oder zur Belohnung**. Ein Sieg ist nicht nötig.",
        "gameObjective": "**Hilf in {{game}} bei einem bereits laufenden öffentlichen Koop-Event und bleib bis zum Event-Ergebnis dabei**."
      }
    },
    "experience": {
      "family": "support",
      "cardMetadata": { "genreIds": [], "playStyleIds": ["co-op"] },
      "finish": "outcome",
      "activities": ["support"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Active public co-op event with an accessible result",
          "de": "Laufendes öffentliches Koop-Event mit erreichbarem Ergebnis",
          "chips": {"en": ["Public event"], "de": ["Öffentliches Event"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "others",
          "participation": "co-op",
          "formation": "team"
        }
      ]
    },
    "gameGenreIds": ["adventure", "rpg", "shooter"],
    "customGameOverrideOnly": true
  },
  {
    "id": "team-signals",
    "moodIds": ["connect"],
    "type": "objective",
    "tags": ["co-op", "support"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "translations": {
      "en": {
        "name": "Team Signals",
        "objective": "Start a co-op mission with pings. **Mark a route, a threat and supplies** along the way. **Stay with the team until the mission ends**. Voice chat is optional.",
        "gameObjective": "Start a co-op mission with pings in {{game}}. **Mark a route, a threat and supplies**. **Stay with the team until the mission ends**. Voice chat is optional."
      },
      "de": {
        "name": "Teamsignale",
        "objective": "Starte eine Koop-Mission mit Pings. **Markiere einen Weg, eine Gefahr und Vorräte**. **Bleib bis zum Missionsende beim Team**. Sprachchat ist freiwillig.",
        "gameObjective": "Starte in {{game}} eine Koop-Mission mit Pings. **Markiere einen Weg, eine Gefahr und Vorräte**. **Bleib bis zum Missionsende beim Team**. Sprachchat ist freiwillig."
      }
    },
    "experience": {
      "family": "support",
      "finish": "outcome",
      "activities": ["support"],
      "rules": [],
      "cardMetadata": { "genreIds": [], "playStyleIds": ["co-op"] },
      "prerequisites": [
        {
          "en": "Human co-op mission with route, threat and supply pings",
          "de": "Koop-Mission mit Menschen und Pings für Weg, Gefahr und Vorräte",
          "chips": {"en": ["Pings"], "de": ["Pings"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "others",
          "participation": "co-op",
          "formation": "team"
        }
      ]
    },
    "gameGenreIds": ["adventure", "rpg", "shooter"],
    "customGameOverrideOnly": true
  },
  {
    "id": "shared-puzzle-table",
    "moodIds": ["connect"],
    "type": "inspiration",
    "tags": ["puzzles", "local-play"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Think Together",
        "objective": "Open **a puzzle game with someone beside you**. Let one person control it and **take turns suggesting moves**. Talk through your ideas and use hints together.",
        "gameObjective": "With someone beside you in **{{game}}**, let one person control the puzzle and **take turns suggesting moves**. Talk through your ideas and use hints together."
      },
      "de": {
        "name": "Gemeinsam knobeln",
        "objective": "Starte **ein Rätselspiel mit jemandem neben dir**. Eine Person übernimmt die Steuerung und **ihr schlagt abwechselnd Züge vor**. Sprecht über eure Ideen und nutzt gemeinsam Hinweise.",
        "gameObjective": "Setz dich für **{{game}}** mit jemandem zusammen. Eine Person übernimmt die Steuerung und **ihr schlagt abwechselnd Züge vor**. Sprecht über eure Ideen und nutzt gemeinsam Hinweise."
      }
    },
    "experience": {
      "family": "shared-puzzle",
      "cardMetadata": { "genreIds": ["puzzle"], "playStyleIds": ["local-play"] },
      "finish": "open",
      "activities": ["puzzles"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Someone nearby",
          "de": "Jemand vor Ort",
          "chips": {"en": [], "de": []},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "others",
          "participation": "solo",
          "formation": "none",
          "mode": "controller-sharing"
        }
      ]
    },
    "gameGenreIds": ["puzzle"],
    "customGameCompatibility": {
      "capabilityIds": ["puzzles"]
    }
  },
  {
    "id": "follow-a-teammate",
    "moodIds": ["connect"],
    "type": "objective",
    "tags": ["co-op", "support"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "translations": {
      "en": {
        "name": "Stay Together",
        "objective": "Open an **online team game**. Join a teammate working on an objective. **Stay together and help until it or the round ends**.",
        "gameObjective": "Open **{{game}}**. Join a teammate working on an objective. **Stay together and help until it or the round ends**."
      },
      "de": {
        "name": "Zusammenbleiben",
        "objective": "Starte ein **Online-Teamspiel**. Schließe dich einem Teammitglied am Ziel an. **Unterstütze dein Teammitglied, bis das Ziel geschafft oder die Runde vorbei ist**.",
        "gameObjective": "Starte **{{game}}**. Schließe dich einem Teammitglied am Ziel an. **Unterstütze dein Teammitglied, bis das Ziel geschafft oder die Runde vorbei ist**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["online-teamplay"]
    },
    "experience": {
      "family": "support",
      "cardMetadata": { "genreIds": [], "playStyleIds": ["co-op"] },
      "finish": "outcome",
      "activities": ["support"],
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
    "gameGenreIds": []
  },
  {
    "id": "couch-three-rounds",
    "moodIds": ["connect", "nostalgic"],
    "type": "objective",
    "tags": ["local-play"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Three Turns Each",
        "objective": "Open **a game with short rounds you can take turns playing locally**. **Play three rounds each**, passing the controller after every round.",
        "gameObjective": "Take turns playing a short mode in **{{game}}** locally. **Play three rounds each**, passing the controller after every round."
      },
      "de": {
        "name": "Je drei Runden",
        "objective": "Starte **ein Spiel mit kurzen Runden**, das ihr vor Ort abwechselnd spielen könnt. **Spielt je drei Runden** und gebt danach den Controller weiter.",
        "gameObjective": "Spielt **{{game}}** vor Ort in einem kurzen Modus. **Spielt je drei Runden** und gebt danach den Controller weiter."
      }
    },
    "experience": {
      "family": "controller-sharing",
      "cardMetadata": { "genreIds": [], "playStyleIds": ["local-play"] },
      "finish": "outcome",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "de": "Jemand vor Ort und kurze Runden zum Abwechseln",
          "en": "Someone nearby and short rounds for taking turns",
          "chips": {"en": ["Taking turns"], "de": ["Abwechselnd spielen"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "others",
          "participation": "solo",
          "formation": "none",
          "mode": "controller-sharing"
        }
      ]
    },
    "gameGenreIds": [],
    "customGameOverrideOnly": true
  },
  {
    "id": "team-regular-role",
    "moodIds": ["connect", "overwhelmed"],
    "type": "inspiration",
    "tags": ["co-op"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "translations": {
      "en": {
        "name": "Your Usual Role",
        "objective": "Open **an online team game**. Take your familiar role and **play toward the team’s shared objective**.",
        "gameObjective": "In **{{game}}**, take your familiar role and **play toward the team’s shared objective**."
      },
      "de": {
        "name": "Deine vertraute Rolle",
        "objective": "Starte **ein Online-Teamspiel**. Übernimm deine vertraute Rolle und **spiel mit deinem Team auf euer gemeinsames Ziel hin**.",
        "gameObjective": "Übernimm in **{{game}}** deine vertraute Rolle und **spiel mit deinem Team auf euer gemeinsames Ziel hin**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["online-teamplay"]
    },
    "experience": {
      "family": "familiar-team",
      "cardMetadata": { "genreIds": [], "playStyleIds": ["co-op"] },
      "finish": "open",
      "activities": [],
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
    "gameGenreIds": []
  },
  {
    "id": "couch-pick-for-each-other",
    "moodIds": ["connect", "curious"],
    "type": "objective",
    "tags": ["local-play"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "You Pick",
        "objective": "Open a **local game with short turns**. With someone beside you, choose each other’s available character, course, or scenario. **Play one full turn each with those choices**.",
        "gameObjective": "Open **{{game}}**. With someone beside you, choose each other’s available character, course, or scenario. **Play one full turn each with those choices**."
      },
      "de": {
        "name": "Du wählst",
        "objective": "Starte ein **lokales Spiel mit kurzen Zügen**. Wählt mit jemandem vor Ort gegenseitig eine verfügbare Figur, Strecke oder ein Szenario. **Spielt damit je einen vollständigen Zug**.",
        "gameObjective": "Starte **{{game}}**. Wählt mit jemandem vor Ort gegenseitig eine verfügbare Figur, Strecke oder ein Szenario. **Spielt damit je einen vollständigen Zug**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["local-multiplayer"]
    },
    "experience": {
      "family": "controller-sharing",
      "cardMetadata": { "genreIds": [], "playStyleIds": ["local-play"] },
      "finish": "outcome",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "en": "Someone nearby",
          "de": "Jemand vor Ort",
          "chips": {"en": [], "de": []},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "others",
          "participation": "solo",
          "formation": "none",
          "mode": "controller-sharing"
        }
      ]
    },
    "gameGenreIds": []
  },
  {
    "id": "couch-old-rivalry",
    "moodIds": ["connect", "nostalgic"],
    "type": "inspiration",
    "tags": ["local-play", "replay"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "The Old Rivalry",
        "objective": "Open **a game you used to play locally with someone**. Sit down together, bring back your old mode and **revive the rivalry**.",
        "gameObjective": "Sit down for **{{game}}** with someone you used to play it with. Bring back your old mode and **revive the rivalry**."
      },
      "de": {
        "name": "Die alte Rivalität",
        "objective": "Starte **ein Spiel, das du früher mit jemandem vor Ort gespielt hast**. Setzt euch wieder zusammen, holt euren alten Modus hervor und **lasst die Rivalität wieder aufleben**.",
        "gameObjective": "Setz dich für **{{game}}** mit jemandem zusammen, mit dem du es früher gespielt hast. Holt euren alten Modus hervor und **lasst die Rivalität wieder aufleben**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["local-multiplayer"]
    },
    "experience": {
      "family": "old-local-rivalry",
      "cardMetadata": { "genreIds": [], "playStyleIds": ["local-play"] },
      "finish": "open",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "en": "Someone nearby; one controller each turn",
          "de": "Jemand vor Ort; Controller abwechselnd",
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
          "mode": "controller-sharing"
        }
      ]
    },
    "gameGenreIds": []
  },
  {
    "id": "character-support-a-friend",
    "moodIds": ["connect"],
    "type": "objective",
    "tags": ["abilities", "support", "co-op"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "translations": {
      "en": {
        "name": "A Useful Ability",
        "objective": "Open **an online team game with character abilities**. Choose an unlocked character who can protect, heal or scout for teammates. **Use that help during one complete match**, playing toward the team objective.",
        "gameObjective": "In **{{game}}**: Choose an unlocked character whose abilities can help a teammate, such as protection, healing, or information. **Use that help during one complete match**, playing toward the team’s objective throughout."
      },
      "de": {
        "name": "Eine hilfreiche Fähigkeit",
        "objective": "Starte ein **Online-Teamspiel mit Figurenfähigkeiten**. Wähle eine Figur, die Teammitglieder schützen, heilen oder mit Informationen versorgen kann. **Setz diese Hilfe in einem ganzen Match ein** und bleib beim Teamziel.",
        "gameObjective": "In **{{game}}**: Wähle eine Figur, die Teammitglieder schützen, heilen oder mit Informationen versorgen kann. **Setz diese Hilfe in einem ganzen Match ein** und bleib beim Teamziel."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["character-abilities", "online-teamplay", "whole-matches"]
    },
    "experience": {
      "family": "support-ability-match",
      "cardMetadata": { "genreIds": [], "playStyleIds": ["co-op"] },
      "finish": "outcome",
      "activities": ["abilities", "support"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Freigeschaltete Figur mit einer hilfreichen Teamfähigkeit",
          "en": "Unlocked character with a team-support ability",
          "chips": {"en": ["Support ability"], "de": ["Support-Fähigkeit"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "others",
          "participation": "co-op",
          "formation": "team"
        }
      ]
    },
    "gameGenreIds": ["shooter", "rpg", "moba"]
  },
  {
    "id": "gadget-help-the-entry",
    "moodIds": ["connect"],
    "type": "objective",
    "tags": ["gadgets", "support", "co-op"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "translations": {
      "en": {
        "name": "Help the Entry",
        "objective": "Open **an online team game with tactical gadgets**. Choose a gadget that can open, block or protect a route. **Use it during your team’s approach and play the match to its end**. Adapt when the plan changes.",
        "gameObjective": "In **{{game}}**: Choose an available gadget that can open, block, or protect a route for your team. **Use it to support the team’s approach and stay through the match**, adapting if the plan changes."
      },
      "de": {
        "name": "Den Einstieg erleichtern",
        "objective": "Starte ein **Onlinespiel mit taktischen Gadgets**. Wähle ein Gadget, mit dem dein Team einen Weg öffnen, sperren oder sichern kann. **Setz es beim Vorrücken ein und spiel das Match zu Ende**. Wenn sich der Plan ändert, pass dich an.",
        "gameObjective": "In **{{game}}**: Wähle ein Gadget, mit dem dein Team einen Weg öffnen, sperren oder sichern kann. **Setz es beim Vorrücken ein und spiel das Match zu Ende**. Wenn sich der Plan ändert, pass dich an."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["tactical-gadgets", "online-teamplay", "whole-matches"]
    },
    "experience": {
      "family": "support-gadget-match",
      "cardMetadata": { "genreIds": ["shooter"], "playStyleIds": ["co-op"] },
      "finish": "outcome",
      "activities": ["gadgets", "support"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Freigeschaltetes Gadget für den gemeinsamen Vorstoß",
          "en": "Unlocked gadget for the team’s approach",
          "chips": {"en": ["Team gadget"], "de": ["Team-Gadget"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "others",
          "participation": "co-op",
          "formation": "team"
        }
      ]
    },
    "gameGenreIds": ["shooter"]
  },
  {
    "id": "scout-then-communicate",
    "moodIds": ["connect", "focused"],
    "type": "objective",
    "tags": ["scouting", "support", "co-op"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "translations": {
      "en": {
        "name": "Useful Information",
        "objective": "Open **an online team game with cameras, drones or wards**. Check an approach to the objective and **share what you see through pings or chat**. Stay through the match.",
        "gameObjective": "In **{{game}}**: Use an available camera, drone, or vision ward to check an objective route. **Share useful information through the game’s available team signals or chat**, then stay through the match."
      },
      "de": {
        "name": "Nützliche Information",
        "objective": "Starte ein **Online-Teamspiel mit Kameras, Drohnen oder Wards**. Prüf mit Kamera, Drohne oder Ward einen Weg zum Ziel. **Sag deinem Team per Ping oder Chat, was du gesehen hast**, und bleib bis zum Matchende dabei.",
        "gameObjective": "In **{{game}}**: Prüf mit Kamera, Drohne oder Ward einen Weg zum Ziel. **Sag deinem Team per Ping oder Chat, was du gesehen hast**, und bleib bis zum Matchende dabei."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["scouting-tools", "online-teamplay", "whole-matches"]
    },
    "experience": {
      "family": "scout-and-share-match",
      "cardMetadata": { "genreIds": [], "playStyleIds": ["co-op"] },
      "finish": "outcome",
      "activities": ["scouting", "support"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Verfügbares Aufklärungswerkzeug und Team-Pings oder Chat",
          "en": "Available scouting tool and team pings or chat",
          "chips": {"en": ["Scouting tool", "Pings"], "de": ["Aufklärungswerkzeug", "Pings"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "others",
          "participation": "co-op",
          "formation": "team"
        }
      ]
    },
    "gameGenreIds": ["shooter", "moba", "stealth"]
  },
  {
    "id": "match-with-your-regulars",
    "moodIds": ["connect", "nostalgic"],
    "type": "inspiration",
    "tags": ["co-op", "full-match"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "translations": {
      "en": {
        "name": "Your Regular Group",
        "objective": "Open a **team game you share with regular teammates**. Join regular teammates in a mode you have played together before. **Enjoy the familiar teamwork and conversation** without setting an extra score target. Finish each match before anyone signs off.",
        "gameObjective": "In **{{game}}**: Join regular teammates in a mode you have played together before. **Enjoy the familiar teamwork and conversation** without setting an extra score target. Finish each match before anyone signs off."
      },
      "de": {
        "name": "Deine gewohnte Runde",
        "objective": "Starte **ein Teamspiel mit Leuten, mit denen du früher oft gespielt hast**. Wählt euren vertrauten Modus und **genießt die gemeinsame Runde und das Gespräch nebenbei**.",
        "gameObjective": "Triff dich für **{{game}}** mit Leuten, mit denen du früher oft gespielt hast. Wählt euren vertrauten Modus und **genießt die gemeinsame Runde und das Gespräch nebenbei**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["whole-matches", "online-teamplay"]
    },
    "experience": {
      "family": "regular-team",
      "cardMetadata": { "genreIds": [], "playStyleIds": ["co-op"] },
      "finish": "open",
      "activities": [],
      "rules": ["full-match"],
      "prerequisites": [
        {
          "de": "Frühere Mitspieler, die heute dabei sind",
          "en": "Former regular teammates joining today",
          "chips": {"en": ["Former teammates"], "de": ["Frühere Mitspieler"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "others",
          "participation": "co-op",
          "formation": "team"
        }
      ]
    },
    "gameGenreIds": ["shooter", "moba", "sports"]
  },
  {
    "id": "extract-share-one-goal",
    "moodIds": ["connect", "focused"],
    "type": "objective",
    "tags": ["extraction", "co-op"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "translations": {
      "en": {
        "name": "One Squad Contract",
        "objective": "Open an **online extraction game with squad play**. Before deploying, choose one available contract, item, or location the squad will prioritize. **Work toward that shared goal and leave through extraction or finish the run if the squad is eliminated**.",
        "gameObjective": "In **{{game}}**: Before deploying, choose one available contract, item, or location the squad will prioritize. **Work toward that shared goal and leave through extraction or finish the run if the squad is eliminated**."
      },
      "de": {
        "name": "Ein Squad-Auftrag",
        "objective": "Starte ein **Online-Extraction-Spiel mit Squads**. Legt vor dem Einsatz fest, welchen Auftrag, Gegenstand oder Ort euer Squad zuerst angeht. **Arbeitet zusammen daran und versucht danach zu extrahieren**. Wenn der Squad ausscheidet, endet der Run dort.",
        "gameObjective": "In **{{game}}**: Legt vor dem Einsatz fest, welchen Auftrag, Gegenstand oder Ort euer Squad zuerst angeht. **Arbeitet zusammen daran und versucht danach zu extrahieren**. Wenn der Squad ausscheidet, endet der Run dort."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["extraction-runs", "online-teamplay"]
    },
    "experience": {
      "family": "extraction",
      "cardMetadata": { "genreIds": ["survival", "shooter"], "playStyleIds": ["co-op"] },
      "finish": "outcome",
      "activities": ["extraction"],
      "rules": [],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "online",
          "people": "others",
          "participation": "co-op",
          "formation": "squad"
        }
      ]
    },
    "gameGenreIds": ["survival", "shooter"]
  },
  {
    "id": "connect-event-thank-you",
    "moodIds": ["connect"],
    "type": "objective",
    "tags": ["co-op", "support"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Event Thank-You",
        "objective": "Open **an online game with public events and quick communication**. Help through one public event and **thank or salute another participant after the result** before leaving.",
        "gameObjective": "Open **{{game}}**. Help through one public event and **thank or salute another participant after the result** before leaving."
      },
      "de": {
        "name": "Dank nach dem Event",
        "objective": "Starte **ein Onlinespiel mit öffentlichen Events und Schnellkommunikation**. Hilf bei einem öffentlichen Event und **bedank dich nach dem Ergebnis bei einer anderen Person oder grüß sie**, bevor du gehst.",
        "gameObjective": "Starte **{{game}}**. Hilf bei einem öffentlichen Event und **bedank dich nach dem Ergebnis bei einer anderen Person oder grüß sie**, bevor du gehst."
      }
    },
    "experience": {
      "family": "public-event-thanks",
      "cardMetadata": { "genreIds": [], "playStyleIds": ["co-op"] },
      "finish": "outcome",
      "activities": ["support"],
      "rules": [],
      "prerequisites": [
        {
          "en": "an online game with public events and quick communication",
          "de": "ein Onlinespiel mit öffentlichen Events und Schnellkommunikation",
          "chips": {"en": ["Public events"], "de": ["Öffentliche Events"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "others",
          "participation": "co-op",
          "formation": "team"
        }
      ]
    },
    "gameGenreIds": ["adventure", "rpg", "shooter"],
    "customGameOverrideOnly": true
  },
  {
    "id": "connect-resupply-a-teammate",
    "moodIds": ["connect"],
    "type": "objective",
    "tags": ["support"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Bring Supplies",
        "objective": "Open **an online team game with ammo or healing support**. Equip a suitable tool or ability, find a teammate who needs supplies and **replenish them**.",
        "gameObjective": "In **{{game}}**, equip a tool or ability for ammo or healing. Find a teammate who needs supplies and **replenish them**."
      },
      "de": {
        "name": "Nachschub bringen",
        "objective": "Starte **ein Online-Teamspiel mit Munitions- oder Heilunterstützung**. Rüste ein passendes Tool oder eine Fähigkeit aus, such ein Teammitglied, das Nachschub braucht, und **versorge es damit**.",
        "gameObjective": "Rüste in **{{game}}** ein Tool oder eine Fähigkeit für Munition oder Heilung aus. Such ein Teammitglied, das Nachschub braucht, und **versorge es damit**."
      }
    },
    "experience": {
      "family": "teammate-resupply",
      "cardMetadata": { "genreIds": ["shooter", "rpg"], "playStyleIds": ["co-op"] },
      "finish": "outcome",
      "activities": ["support"],
      "rules": [],
      "prerequisites": [
        {
          "en": "an online team game with ammunition or healing support",
          "de": "ein Online-Teamspiel mit Munitions- oder Heilunterstützung",
          "chips": {"en": ["Ammo or healing"], "de": ["Munition oder Heilung"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "others",
          "participation": "co-op",
          "formation": "team"
        }
      ]
    },
    "gameGenreIds": ["shooter", "rpg"],
    "customGameOverrideOnly": true
  },
  {
    "id": "connect-two-seat-journey",
    "moodIds": ["connect"],
    "type": "objective",
    "tags": ["co-op", "driving"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Two-Seat Journey",
        "objective": "Open **a shared world with multi-seat vehicles**. Pick up a teammate, let them choose a reachable destination, and **arrive there in the same vehicle together**.",
        "gameObjective": "Open **{{game}}**. Pick up a teammate, let them choose a reachable destination, and **arrive there in the same vehicle together**."
      },
      "de": {
        "name": "Fahrt zu zweit",
        "objective": "Starte **eine geteilte Welt mit Fahrzeugen für mehrere Personen**. Hol ein Teammitglied ab, lass es ein Ziel wählen, das ihr erreichen könnt, und **fahrt gemeinsam im selben Fahrzeug dorthin**.",
        "gameObjective": "Starte **{{game}}**. Hol ein Teammitglied ab, lass es ein Ziel wählen, das ihr erreichen könnt, und **fahrt gemeinsam im selben Fahrzeug dorthin**."
      }
    },
    "experience": {
      "family": "shared-vehicle-trip",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": ["co-op"] },
      "finish": "outcome",
      "activities": ["driving"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Mitspieler und gemeinsames Fahrzeug mit freien Plätzen",
          "en": "Another player and a shared vehicle with free seats",
          "chips": {"en": ["Shared vehicle"], "de": ["Gemeinsames Fahrzeug"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "others",
          "participation": "co-op",
          "formation": "squad"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"],
    "customGameOverrideOnly": true
  },
  {
    "id": "connect-couch-navigator",
    "rarity": "special",
    "moodIds": ["connect"],
    "type": "objective",
    "tags": ["local-play", "exploration"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Couch Navigator",
        "objective": "Sit down with someone for **a game with a freely explorable world**. One person controls while the other chooses a visible destination and calls the route. **Find your way there together**.",
        "gameObjective": "Sit down together for **{{game}}**. One person controls while the other chooses a visible destination and calls the route. **Find your way there together**."
      },
      "de": {
        "name": "Navigation vom Sofa",
        "objective": "Setz dich für **ein Spiel mit einer frei erkundbaren Welt** mit jemandem zusammen. Eine Person steuert, die andere wählt ein sichtbares Ziel und sagt den Weg an. **Findet gemeinsam dorthin**.",
        "gameObjective": "Setzt euch für **{{game}}** zusammen. Eine Person steuert, die andere wählt ein sichtbares Ziel und sagt den Weg an. **Findet gemeinsam dorthin**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["open-world"]
    },
    "experience": {
      "family": "couch-navigation",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": ["local-play"] },
      "finish": "outcome",
      "activities": ["exploration"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Jemand vor Ort und ein erreichbares Ziel in Sichtweite",
          "en": "Someone nearby and a reachable visible destination",
          "chips": {"en": ["Visible destination"], "de": ["Sichtbares Ziel"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "others",
          "participation": "solo",
          "formation": "none",
          "mode": "controller-sharing"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "connect-coop-puzzle",
    "moodIds": ["connect"],
    "type": "objective",
    "tags": ["co-op", "puzzles"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Solve Together",
        "objective": "Open **a co-op game with a reachable puzzle**. Say what each player can see, agree on one approach, and **solve one puzzle together** without a guide.",
        "gameObjective": "Open **{{game}}**. Say what each player can see, agree on one approach, and **solve one puzzle together** without a guide."
      },
      "de": {
        "name": "Gemeinsam lösen",
        "objective": "Starte **ein Koop-Spiel mit einem erreichbaren Rätsel**. Sagt euch, was jede Person sieht, einigt euch auf einen Ansatz und **löst gemeinsam ein Rätsel** ohne Guide.",
        "gameObjective": "Starte **{{game}}**. Sagt euch, was jede Person sieht, einigt euch auf einen Ansatz und **löst gemeinsam ein Rätsel** ohne Guide."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["local-multiplayer", "puzzles"],
      "match": "all"
    },
    "experience": {
      "family": "puzzles",
      "cardMetadata": { "genreIds": ["puzzle"], "playStyleIds": ["co-op"] },
      "finish": "outcome",
      "activities": ["puzzles"],
      "rules": [],
      "prerequisites": [
        {
          "en": "a co-op game with a reachable puzzle",
          "de": "ein Koop-Spiel mit einem erreichbaren Rätsel",
          "chips": {"en": ["Co-op puzzle"], "de": ["Koop-Rätsel"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "others",
          "participation": "co-op",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["puzzle"]
  },
  {
    "id": "connect-useful-trade",
    "moodIds": ["connect"],
    "type": "objective",
    "tags": ["trading", "co-op"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Useful Trade",
        "objective": "Open **an online game with direct player trading**. Ask what one teammate currently needs and **complete a trade that gives each player a useful item**. Use only items already owned.",
        "gameObjective": "Open **{{game}}**. Ask what one teammate currently needs and **complete a trade that gives each player a useful item**. Use only items already owned."
      },
      "de": {
        "name": "Nützlicher Tausch",
        "objective": "Starte **ein Onlinespiel mit direktem Handel zwischen Spielern**. Frag ein Teammitglied, was es braucht. **Tauscht Gegenstände, die ihr schon habt, sodass beide etwas Nützliches bekommen**.",
        "gameObjective": "Starte **{{game}}**. Frag ein Teammitglied, was es braucht. **Tauscht Gegenstände, die ihr schon habt, sodass beide etwas Nützliches bekommen**."
      }
    },
    "experience": {
      "family": "player-trade",
      "cardMetadata": { "genreIds": ["rpg", "simulation"], "playStyleIds": ["co-op"] },
      "finish": "outcome",
      "activities": ["trading"],
      "rules": [],
      "prerequisites": [
        {
          "en": "an online game with direct player trading",
          "de": "ein Onlinespiel mit direktem Handel zwischen Spielern",
          "chips": {"en": ["Player trading"], "de": ["Spielerhandel"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "others",
          "participation": "co-op",
          "formation": "team"
        }
      ]
    },
    "gameGenreIds": ["rpg", "simulation"],
    "customGameOverrideOnly": true
  },
  {
    "id": "connect-swap-at-checkpoint",
    "moodIds": ["connect"],
    "type": "objective",
    "tags": ["co-op", "new-approach"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Checkpoint Swap",
        "objective": "Open **a co-op mission with selectable roles or loadouts**. At the next checkpoint, swap your usual jobs, such as close combat and cover or frontline and support. **Finish the next objective in those roles**.",
        "gameObjective": "At the next checkpoint in a co-op mission in **{{game}}**, swap your usual jobs, such as close combat and cover or frontline and support. **Finish the next objective in those roles**."
      },
      "de": {
        "name": "Rollen tauschen",
        "objective": "Starte **eine Koop-Mission mit wählbaren Rollen oder Loadouts**. Tauscht am nächsten Checkpoint eure üblichen Aufgaben, etwa Nahkampf und Deckung oder Front und Support. **Schafft das nächste Ziel mit dieser Rollenverteilung**.",
        "gameObjective": "Tauscht in einer Koop-Mission in **{{game}}** am nächsten Checkpoint eure üblichen Aufgaben, etwa Nahkampf und Deckung oder Front und Support. **Schafft das nächste Ziel mit dieser Rollenverteilung**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["online-teamplay", "combat-loadouts", "missions-or-levels"],
      "match": "all"
    },
    "experience": {
      "family": "shared-role-swap",
      "cardMetadata": { "genreIds": [], "playStyleIds": ["co-op"] },
      "finish": "outcome",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "en": "a co-op mission with selectable roles or loadouts",
          "de": "eine Koop-Mission mit wählbaren Rollen oder Ausrüstungen",
          "chips": {"en": ["Selectable roles"], "de": ["Rollen wählbar"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "others",
          "participation": "co-op",
          "formation": "team"
        }
      ]
    },
    "gameGenreIds": ["adventure", "shooter", "rpg"]
  },
  {
    "id": "connect-show-one-route",
    "moodIds": ["connect"],
    "type": "objective",
    "tags": ["co-op", "exploration"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Show the Route",
        "objective": "Open **a shared world with a place you know well**. Invite another player to follow, lead them along one favorite route, and **arrive together at its destination**.",
        "gameObjective": "Open **{{game}}**. Invite another player to follow, lead them along one favorite route, and **arrive together at its destination**."
      },
      "de": {
        "name": "Den Weg zeigen",
        "objective": "Starte **eine geteilte Welt mit einem Ort, den du gut kennst**. Bitte eine andere Person mitzukommen, führe sie über eine Lieblingsroute und **kommt gemeinsam am Ziel an**.",
        "gameObjective": "Starte **{{game}}**. Bitte eine andere Person mitzukommen, führe sie über eine Lieblingsroute und **kommt gemeinsam am Ziel an**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["online-teamplay", "open-world"],
      "match": "all"
    },
    "experience": {
      "family": "exploration",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": ["co-op"] },
      "finish": "outcome",
      "activities": ["exploration"],
      "rules": [],
      "prerequisites": [
        {
          "en": "a shared world with a place you know well",
          "de": "eine geteilte Welt mit einem Ort, den du gut kennst",
          "chips": {"en": ["Shared world"], "de": ["Geteilte Welt"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "others",
          "participation": "co-op",
          "formation": "team"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "connect-learn-their-trick",
    "moodIds": ["connect"],
    "type": "objective",
    "tags": ["co-op", "new-approach"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Learn Their Trick",
        "objective": "Open **a multiplayer game a friend knows well**. Ask them to show you a move, route or tactic and **use it yourself in play**.",
        "gameObjective": "In **{{game}}**, ask a friend to show you a move, route or tactic and **use it yourself in play**."
      },
      "de": {
        "name": "Ihren Trick lernen",
        "objective": "Starte **ein Multiplayer-Spiel, das jemand aus deinem Freundeskreis gut kennt**. Lass dir einen Move, eine Route oder eine Taktik zeigen und **setz sie selbst im Spiel ein**.",
        "gameObjective": "Lass dir in **{{game}}** von jemandem aus deinem Freundeskreis einen Move, eine Route oder eine Taktik zeigen und **setz sie selbst im Spiel ein**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["online-teamplay", "rounds-or-matches"],
      "match": "all"
    },
    "experience": {
      "family": "learn-friend-trick",
      "cardMetadata": { "genreIds": [], "playStyleIds": ["co-op"] },
      "finish": "outcome",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "en": "a multiplayer game a friend knows well",
          "de": "ein Mehrspielerspiel, das eine befreundete Person gut kennt",
          "chips": {"en": ["Friend's favorite"], "de": ["Spiel des Freunds"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "others",
          "participation": "co-op",
          "formation": "team"
        }
      ]
    },
    "gameGenreIds": []
  },
  {
    "id": "connect-shared-wall",
    "moodIds": ["connect", "create"],
    "type": "inspiration",
    "tags": ["co-op", "building"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Build One Wall",
        "objective": "Open a **shared building world**. **Work together on a small bridge, wall, or fence along a route you both use**. Let the place guide what you add.",
        "gameObjective": "Open **{{game}}**. **Work together on a small bridge, wall, or fence along a route you both use**. Let the place guide what you add."
      },
      "de": {
        "name": "Eine Wand gemeinsam",
        "objective": "Starte eine **gemeinsame Bauwelt**. **Arbeitet zusammen an einer kleinen Brücke, Mauer oder einem Zaun entlang eures gemeinsamen Wegs**. Schaut vor Ort, was ihr ergänzen möchtet.",
        "gameObjective": "Starte **{{game}}**. **Arbeitet zusammen an einer kleinen Brücke, Mauer oder einem Zaun entlang eures gemeinsamen Wegs**. Schaut vor Ort, was ihr ergänzen möchtet."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["building", "online-teamplay"],
      "match": "all"
    },
    "experience": {
      "family": "building",
      "cardMetadata": { "genreIds": [], "playStyleIds": ["co-op"] },
      "finish": "open",
      "activities": ["building"],
      "rules": [],
      "prerequisites": [
        {
          "en": "a shared building world",
          "de": "eine gemeinsam genutzte Bauwelt",
          "chips": {"en": ["Shared building world"], "de": ["Gemeinsame Bauwelt"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "others",
          "participation": "co-op",
          "formation": "team"
        }
      ]
    },
    "gameGenreIds": ["simulation", "survival", "sandbox"]
  },
  {
    "id": "connect-local-rematch",
    "moodIds": ["connect"],
    "type": "objective",
    "tags": ["local-play", "two-rounds"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Local Rematch",
        "objective": "Open **a local multiplayer game everyone already knows**. Use the familiar default rules and **finish two rounds with swapped sides or characters**.",
        "gameObjective": "Open **{{game}}**. Use the familiar default rules and **finish two rounds with swapped sides or characters**."
      },
      "de": {
        "name": "Lokale Revanche",
        "objective": "Starte **ein lokales Mehrspielerspiel, das alle kennen**. Nutzt die vertrauten Standardregeln und **beendet zwei Runden mit getauschten Seiten oder Figuren**.",
        "gameObjective": "Starte **{{game}}**. Nutzt die vertrauten Standardregeln und **beendet zwei Runden mit getauschten Seiten oder Figuren**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["local-multiplayer", "rounds-or-matches"],
      "match": "all"
    },
    "experience": {
      "family": "local-rematch",
      "cardMetadata": { "genreIds": ["fighting", "sports"], "playStyleIds": ["local-play"] },
      "finish": "attempt",
      "activities": [],
      "rules": ["two-rounds"],
      "prerequisites": [
        {
          "de": "Jemand vor Ort und ein kurzer Modus zum Seiten- oder Figurenwechsel",
          "en": "Someone nearby and a short mode allowing side or character swaps",
          "chips": {"en": ["Character swaps"], "de": ["Figurenwechsel"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "others",
          "participation": "solo",
          "formation": "none",
          "mode": "controller-sharing"
        }
      ]
    },
    "gameGenreIds": ["fighting", "sports"]
  },
  {
    "id": "connect-full-squad-match",
    "moodIds": ["connect"],
    "type": "objective",
    "tags": ["full-match", "support"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "translations": {
      "en": {
        "name": "Full Squad Match",
        "objective": "Open **an online team game with complete matches**. Join or form a squad, stay through every round, and **reach the final match result together**.",
        "gameObjective": "Open **{{game}}**. Join or form a squad, stay through every round, and **reach the final match result together**."
      },
      "de": {
        "name": "Ganzes Squad-Match",
        "objective": "Starte **ein Online-Teamspiel mit vollständigen Matches**. Schließ dich einem Squad an oder gründe eines. Bleib bis zum Schluss dabei und **spielt gemeinsam alle Runden bis zum Matchergebnis**.",
        "gameObjective": "Starte **{{game}}**. Schließ dich einem Squad an oder gründe eines. Bleib bis zum Schluss dabei und **spielt gemeinsam alle Runden bis zum Matchergebnis**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["online-teamplay", "whole-matches"],
      "match": "all"
    },
    "experience": {
      "family": "full-squad-match",
      "cardMetadata": { "genreIds": [], "playStyleIds": ["co-op"] },
      "finish": "attempt",
      "activities": ["support"],
      "rules": ["full-match"],
      "prerequisites": [
        {
          "en": "an online team game with complete matches",
          "de": "ein Online-Teamspiel mit vollständigen Matches",
          "chips": {"en": ["Full matches"], "de": ["Ganze Matches"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "others",
          "participation": "co-op",
          "formation": "squad"
        }
      ]
    },
    "gameGenreIds": ["shooter", "moba", "sports"],
    "rarity": "special"
  },
  {
    "id": "connect-team-photo",
    "moodIds": ["connect"],
    "type": "objective",
    "tags": ["co-op", "photography"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Team Photo",
        "objective": "Open **a shared game with photo mode**. Gather the participating players in one place and **save a photo that includes everyone**.",
        "gameObjective": "Open **{{game}}**. Gather the participating players in one place and **save a photo that includes everyone**."
      },
      "de": {
        "name": "Teamfoto",
        "objective": "Starte **ein gemeinsames Spiel mit Fotomodus**. Versammelt die mitspielenden Personen an einem Ort und **speichert ein Foto, auf dem alle zu sehen sind**.",
        "gameObjective": "Starte **{{game}}**. Versammelt die mitspielenden Personen an einem Ort und **speichert ein Foto, auf dem alle zu sehen sind**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["photo-mode", "online-teamplay"],
      "match": "all"
    },
    "experience": {
      "family": "photography",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": ["co-op"] },
      "finish": "outcome",
      "activities": ["photography"],
      "rules": [],
      "prerequisites": [
        {
          "en": "a shared game with photo mode",
          "de": "ein gemeinsames Spiel mit Fotomodus",
          "chips": {"en": ["Photo mode"], "de": ["Fotomodus"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "others",
          "participation": "co-op",
          "formation": "team"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "connect-teammate-picks-loadout",
    "moodIds": ["connect"],
    "type": "objective",
    "tags": ["loadout", "one-round"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Partner Picks",
        "objective": "Open **a team game with selectable loadouts**. Let a teammate choose one legal item or role for you, equip it, and **finish one round using their choice**.",
        "gameObjective": "Open **{{game}}**. Let a teammate choose one legal item or role for you, equip it, and **finish one round using their choice**."
      },
      "de": {
        "name": "Partnerwahl",
        "objective": "Starte **ein Teamspiel mit wählbarer Ausrüstung**. Lass ein Teammitglied einen erlaubten Gegenstand oder eine Rolle für dich wählen. **Nimm diese Wahl an und spiel eine Runde damit zu Ende**.",
        "gameObjective": "Starte **{{game}}**. Lass ein Teammitglied einen erlaubten Gegenstand oder eine Rolle für dich wählen. **Nimm diese Wahl an und spiel eine Runde damit zu Ende**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["online-teamplay", "combat-loadouts", "rounds-or-matches"]
    },
    "experience": {
      "family": "teammate-loadout-choice",
      "cardMetadata": { "genreIds": ["shooter", "rpg"], "playStyleIds": ["co-op"] },
      "finish": "attempt",
      "activities": ["loadout"],
      "rules": ["one-round"],
      "prerequisites": [
        {
          "en": "a team game with selectable loadouts",
          "de": "ein Teamspiel mit wählbarer Ausrüstung",
          "chips": {"en": ["Selectable loadouts"], "de": ["Ausrüstung wählbar"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "others",
          "participation": "co-op",
          "formation": "team"
        }
      ]
    },
    "gameGenreIds": ["shooter", "rpg"]
  },
  {
    "id": "connect-call-one-switch",
    "moodIds": ["connect"],
    "type": "objective",
    "tags": ["co-op", "support"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Call the Switch",
        "objective": "Open **a team game with short rounds and role or lane switching**. Before one round, agree on one clear call for swapping roles or lanes. **Make that call once, follow through together, and finish the round**.",
        "gameObjective": "Open **{{game}}**. Before one round, agree on one clear call for swapping roles or lanes. **Make that call once, follow through together, and finish the round**."
      },
      "de": {
        "name": "Wechsel ansagen",
        "objective": "Starte **ein Teamspiel mit kurzen Runden und wechselbaren Rollen oder Linien**. Einigt euch vor einer Runde auf ein klares Signal zum Tauschen von Rollen oder Linien. **Gebt das Signal einmal, setzt den Wechsel gemeinsam um und beendet die Runde**.",
        "gameObjective": "Starte **{{game}}**. Einigt euch vor einer Runde auf ein klares Signal zum Tauschen von Rollen oder Linien. **Gebt das Signal einmal, setzt den Wechsel gemeinsam um und beendet die Runde**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["online-teamplay", "rounds-or-matches"],
      "match": "all"
    },
    "experience": {
      "family": "support",
      "cardMetadata": { "genreIds": [], "playStyleIds": ["co-op"] },
      "finish": "outcome",
      "activities": ["support"],
      "rules": [],
      "prerequisites": [
        {
          "en": "a team game with short rounds and role or lane switching",
          "de": "ein Teamspiel mit kurzen Runden und wechselbaren Rollen oder Linien",
          "chips": {"en": ["Role swaps"], "de": ["Rollenwechsel"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "others",
          "participation": "co-op",
          "formation": "team"
        }
      ]
    },
    "gameGenreIds": ["shooter", "moba", "sports"]
  }
]);
