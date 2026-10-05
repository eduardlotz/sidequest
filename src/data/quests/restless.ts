import { defineQuests } from "./defineQuests";

export const RestlessQuests = defineQuests([
  {
    "id": "keep-moving",
    "moodIds": ["restless"],
    "type": "inspiration",
    "tags": ["traversal"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Keep Moving",
        "objective": "Open a game with **free running, swinging, or grappling**. **Chain the moves that keep you going**. Leave mission markers for another session.",
        "gameObjective": "With free running, swinging or grappling in **{{game}}**, **chain the moves that keep you going**. Leave mission markers for another session."
      },
      "de": {
        "name": "In Bewegung",
        "objective": "Starte ein Spiel, in dem du **frei rennen, schwingen oder einen Greifhaken nutzen kannst**. **Komm mit diesen Bewegungen von einem Punkt zum nächsten**. Missionsmarkierungen können warten.",
        "gameObjective": "**Verkette in {{game}} mit freiem Rennen, Schwingen oder Greifhaken die Bewegungen, die dich weiterbringen**. Missionsmarker können warten."
      }
    },
    "experience": {
      "family": "traversal",
      "cardMetadata": { "genreIds": ["adventure"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["traversal"],
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
    "gameGenreIds": ["adventure"],
    "customGameCompatibility": {
      "capabilityIds": ["advanced-traversal"]
    }
  },
  {
    "id": "flat-out-race",
    "moodIds": ["restless"],
    "type": "inspiration",
    "tags": ["racing"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Flat Out",
        "objective": "Open **an arcade racer with quick races**. Take your usual car and **head straight to the track**. Spend this session racing instead of tuning.",
        "gameObjective": "With quick arcade races in **{{game}}**, take your usual car and **head straight to the track**. Spend the session racing instead of tuning."
      },
      "de": {
        "name": "Vollgas",
        "objective": "Starte **ein Arcade-Rennspiel mit kurzen schnellen Rennen**. Nimm deinen gewohnten Wagen und **fahr direkt auf die Strecke**. Das Tuningmenü bleibt heute zu.",
        "gameObjective": "Nimm in **{{game}}** mit kurzen Arcade-Rennen deinen üblichen Wagen und **fahr direkt auf die Strecke**. Verbring die Session mit Rennen statt Tuning."
      }
    },
    "experience": {
      "family": "racing",
      "cardMetadata": { "genreIds": ["racing"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["racing"],
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
    "gameGenreIds": ["racing"],
    "customGameCompatibility": {
      "capabilityIds": ["racing"]
    }
  },
  {
    "id": "three-songs",
    "moodIds": ["restless"],
    "type": "objective",
    "tags": ["rhythm"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Three Songs",
        "objective": "Open **a rhythm game with short, energetic songs**. Choose a difficulty you enjoy and **finish three songs**.",
        "gameObjective": "Choose three short, energetic songs in **{{game}}** at a difficulty you enjoy. **Finish all three**."
      },
      "de": {
        "name": "Drei Songs",
        "objective": "Starte **ein Rhythmusspiel mit kurzen, energiegeladenen Songs**. Nimm eine Schwierigkeit, auf der du gern spielst, und **spiel drei Songs zu Ende**.",
        "gameObjective": "Nimm in **{{game}}** drei kurze, energiegeladene Songs auf einer Schwierigkeit, auf der du gern spielst. **Spiel alle drei zu Ende**."
      }
    },
    "experience": {
      "family": "three-songs",
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
    "gameGenreIds": ["rhythm"],
    "customGameCompatibility": {
      "capabilityIds": ["rhythm-play"]
    }
  },
  {
    "id": "five-trick-line",
    "moodIds": ["restless"],
    "type": "challenge",
    "tags": ["skating", "three-attempts"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Five in a Line",
        "objective": "Open **a skating game with trick combos**. On a familiar stretch, **land five different tricks in one line without falling**. Stop after success or three attempts.",
        "gameObjective": "On a familiar skating stretch in **{{game}}**, **land five different tricks in one connected line without falling**, or finish three attempts."
      },
      "de": {
        "name": "Fünfer-Line",
        "objective": "Starte **ein Skatespiel mit Trickkombos**. **Lande fünf verschiedene Tricks in einer Line ohne Sturz** auf einem vertrauten Abschnitt. Nach Erfolg oder drei Versuchen ist Schluss.",
        "gameObjective": "**Lande in {{game}} auf einem vertrauten Skateabschnitt fünf verschiedene Tricks in einer Line ohne Sturz** oder beende drei Versuche."
      }
    },
    "experience": {
      "family": "skating",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["skating"],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Five familiar tricks that can form one line",
          "de": "Fünf vertraute Tricks für eine zusammenhängende Line",
          "chips": {"en": ["Familiar tricks"], "de": ["Vertraute Tricks"]},
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
    "gameGenreIds": ["sports"],
    "customGameCompatibility": {
      "capabilityIds": ["skate-tricks"]
    }
  },
  {
    "id": "arcade-brawler-burst",
    "moodIds": ["restless"],
    "type": "inspiration",
    "tags": [],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Into the Brawl",
        "objective": "Open **an arcade brawler with short stages**. Pick a familiar character and **jump into the next fight**. Leave scores and character comparisons for later.",
        "gameObjective": "In **{{game}}**, pick a familiar brawler character and **jump into the next fight**. Let scores wait."
      },
      "de": {
        "name": "Rein ins Getümmel",
        "objective": "Starte **ein Arcade-Prügelspiel mit kurzen Abschnitten**. Nimm eine vertraute Figur und **stürz dich ins nächste Gerangel**. Punkte und Figurenvergleiche kommen später.",
        "gameObjective": "Nimm in **{{game}}** eine vertraute Brawler-Figur und **steig in den nächsten Kampf ein**. Punkte können warten."
      }
    },
    "experience": {
      "family": "brawler-roaming",
      "cardMetadata": { "genreIds": ["fighting"], "playStyleIds": [] },
      "finish": "open",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "en": "Arcade brawler with short stages; familiar character",
          "de": "Arcade-Brawler mit kurzen Abschnitten; vertraute Figur",
          "chips": {"en": ["Arcade brawler"], "de": ["Arcade-Brawler"]},
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
    "gameGenreIds": ["fighting"],
    "customGameOverrideOnly": true
  },
  {
    "id": "quick-matches",
    "moodIds": ["restless"],
    "type": "objective",
    "tags": ["two-rounds"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Straight In",
        "objective": "Open a **game with short rounds**. Pick a familiar mode and **play two standalone rounds back to back**. Keep the same setup.",
        "gameObjective": "Open **{{game}}**. Pick a familiar mode and **play two standalone rounds back to back**. Keep the same setup."
      },
      "de": {
        "name": "Direkt rein",
        "objective": "Starte ein **Spiel mit kurzen Runden**. Nimm einen bekannten Modus und **spiel zwei Runden direkt hintereinander**. Behalte dasselbe Setup.",
        "gameObjective": "Starte **{{game}}**. Nimm einen bekannten Modus und **spiel zwei Runden direkt hintereinander**. Behalte dasselbe Setup."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["rounds-or-matches"]
    },
    "experience": {
      "family": "standalone-round",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["two-rounds"],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        },
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["card", "shooter", "moba", "strategy", "sports", "rhythm", "fighting"]
  },
  {
    "id": "mage-back-in-action",
    "moodIds": ["restless", "nostalgic"],
    "type": "inspiration",
    "tags": ["spells", "replay"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Back to Magic",
        "objective": "Open **a game with damage spells you used to enjoy**. Bring those familiar spells back into your build and **take them into the next fights**.",
        "gameObjective": "In **{{game}}**, bring damage spells you used to enjoy back into your build and **take them into the next fights**."
      },
      "de": {
        "name": "Zurück zur Magie",
        "objective": "Starte **ein Spiel mit Schadenszaubern**, die du früher gern genutzt hast. Hol die vertrauten Zauber wieder in deinen Build und **geh damit in die nächsten Kämpfe**.",
        "gameObjective": "Hol in **{{game}}** Schadenszauber zurück in deinen Build, die du früher gern genutzt hast, und **geh damit in die nächsten Kämpfe**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["combat-spells"]
    },
    "experience": {
      "family": "spells",
      "cardMetadata": { "genreIds": ["rpg"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["spells"],
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
    "id": "restless-short-action-stage",
    "moodIds": ["restless"],
    "type": "inspiration",
    "tags": ["replay"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Action Stage",
        "objective": "Open an action game with short selectable stages. Pick a stage that starts quickly and **throw yourself into its movement and combat**. Stay for another only if the momentum is still good.",
        "gameObjective": "Open {{game}}. Pick a stage that starts quickly and **throw yourself into its movement and combat**. Stay for another only if the momentum is still good."
      },
      "de": {
        "name": "Action-Stufe",
        "objective": "Starte ein Actionspiel mit kurzen wählbaren Stufen. Such dir einen kurzen Abschnitt, in dem es sofort losgeht, und **stürz dich in Bewegung und Kampf**. Spiel einen weiteren, wenn du noch Lust hast.",
        "gameObjective": "Starte {{game}}. Such dir einen kurzen Abschnitt, in dem es sofort losgeht, und **stürz dich in Bewegung und Kampf**. Spiel einen weiteren, wenn du noch Lust hast."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["missions-or-levels"],
      "match": "all"
    },
    "experience": {
      "family": "revisit",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "open",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "en": "an action game with short selectable stages",
          "de": "ein Actionspiel mit kurzen wählbaren Stufen",
          "chips": {"en": ["Stage select"], "de": ["Stufenauswahl"]},
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
    "gameGenreIds": ["shooter", "platformer", "fighting"]
  },
  {
    "id": "restless-moving-clear",
    "moodIds": ["restless"],
    "type": "challenge",
    "tags": ["traversal", "three-attempts"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Clear in Motion",
        "objective": "Open **a solo action game with a short enemy room**. **Clear it while staying on the move**: circle enemies, dodge and attack as you go. Settling into one spot ends an attempt; try up to three times.",
        "gameObjective": "In **{{game}}**, **clear a short enemy room while staying on the move**: circle enemies, dodge and attack as you go. Settling into one spot ends an attempt; try up to three times."
      },
      "de": {
        "name": "Immer in Bewegung",
        "objective": "Starte **ein Solo-Actionspiel mit einem kurzen Raum voller Gegner**. **Räume ihn, während du in Bewegung bleibst**: Kreis die Gegner ein, weiche aus und nutze deine Waffe unterwegs. Längeres Stehenbleiben beendet den Versuch; bis zu drei Versuche.",
        "gameObjective": "**Räume in {{game}} einen kurzen Gegnerraum, während du in Bewegung bleibst**: Kreis die Gegner ein, weiche aus und nutze deine Waffe unterwegs. Längeres Stehenbleiben beendet den Versuch; bis zu drei Versuche."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["combat-loadouts", "missions-or-levels"],
      "match": "all"
    },
    "experience": {
      "family": "moving-combat",
      "cardMetadata": { "genreIds": ["shooter", "roguelike"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["traversal"],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "a solo combat game with a short enemy room",
          "de": "ein Solo-Actionspiel mit einem kurzen Raum voller Gegner",
          "chips": {"en": ["Combat room"], "de": ["Kampfraum"]},
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
    "gameGenreIds": ["shooter", "roguelike"]
  },
  {
    "id": "restless-three-sprint-races",
    "moodIds": ["restless"],
    "type": "objective",
    "tags": ["racing"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Three Sprint Races",
        "objective": "Open **a racing game with short sprint events**. Choose any fast vehicle and **finish three short races**. Restart only for a crash that ends the race.",
        "gameObjective": "Open **{{game}}**. Choose any fast vehicle and **finish three short races**. Restart only for a crash that ends the race."
      },
      "de": {
        "name": "Drei Sprintrennen",
        "objective": "Starte **ein Rennspiel mit kurzen Sprintevents**. Nimm ein schnelles Fahrzeug und **fahr drei kurze Rennen zu Ende**. Starte nur neu, wenn ein Crash dein Rennen beendet.",
        "gameObjective": "Starte **{{game}}**. Nimm ein schnelles Fahrzeug und **fahr drei kurze Rennen zu Ende**. Starte nur neu, wenn ein Crash dein Rennen beendet."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["racing"],
      "match": "all"
    },
    "experience": {
      "family": "racing",
      "cardMetadata": { "genreIds": ["racing"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["racing"],
      "rules": [],
      "prerequisites": [
        {
          "en": "a racing game with short sprint events",
          "de": "ein Rennspiel mit kurzen Sprintevents",
          "chips": {"en": ["Sprint events"], "de": ["Sprintrennen"]},
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
    "gameGenreIds": ["racing"]
  },
  {
    "id": "restless-traversal-loop",
    "moodIds": ["restless"],
    "type": "objective",
    "tags": ["traversal", "no-fast-travel"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Movement Loop",
        "objective": "Open **a game with a hub and advanced movement**. Choose three visible landmarks, move through them in a loop, and **return to the starting landmark** without fast travel.",
        "gameObjective": "Open **{{game}}**. Choose three visible landmarks, move through them in a loop, and **return to the starting landmark** without fast travel."
      },
      "de": {
        "name": "Bewegungsrunde",
        "objective": "Starte **ein Spiel mit einem zentralen Bereich und schnellen Bewegungsfähigkeiten**. Such dir drei sichtbare Orte aus und **beweg dich über alle drei ohne Schnellreise zurück zum Start**.",
        "gameObjective": "Starte **{{game}}**. Such dir drei sichtbare Orte aus und **beweg dich über alle drei ohne Schnellreise zurück zum Start**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["advanced-traversal", "open-world"],
      "match": "all"
    },
    "experience": {
      "family": "movement-landmark-loop",
      "cardMetadata": { "genreIds": ["adventure", "platformer"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["traversal"],
      "rules": ["no-fast-travel"],
      "prerequisites": [
        {
          "en": "a game with a hub and advanced movement",
          "de": "ein Spiel mit einem zentralen Bereich und schnellen Bewegungsfähigkeiten",
          "chips": {"en": ["Movement abilities"], "de": ["Bewegungsfähigkeiten"]},
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
    "gameGenreIds": ["adventure", "platformer"]
  },
  {
    "id": "restless-one-horde-wave",
    "moodIds": ["restless"],
    "type": "objective",
    "tags": ["one-round"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "One Horde Wave",
        "objective": "Open **an action game with a wave or arena mode**. Use a familiar setup and **finish one complete enemy wave**. Stop at the preparation screen for the next.",
        "gameObjective": "Open **{{game}}**. Use a familiar setup and **finish one complete enemy wave**. Stop at the preparation screen for the next."
      },
      "de": {
        "name": "Eine Hordenwelle",
        "objective": "Starte **ein Actionspiel mit Wellen- oder Arenamodus**. Nutze eine vertraute Ausrüstung und **beende eine vollständige Gegnerwelle**. Hör am Vorbereitungsbildschirm der nächsten auf.",
        "gameObjective": "Starte **{{game}}**. Nutze eine vertraute Ausrüstung und **beende eine vollständige Gegnerwelle**. Hör am Vorbereitungsbildschirm der nächsten auf."
      }
    },
    "experience": {
      "family": "horde-wave",
      "cardMetadata": { "genreIds": ["shooter", "fighting"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["one-round"],
      "prerequisites": [
        {
          "de": "Wellenmodus mit Pause zwischen den Wellen",
          "en": "Wave mode with a break between waves",
          "chips": {"en": ["Wave mode"], "de": ["Wellenmodus"]},
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
    "gameGenreIds": ["shooter", "fighting"],
    "customGameOverrideOnly": true
  },
  {
    "id": "restless-brawler-stage",
    "moodIds": ["restless"],
    "type": "objective",
    "tags": [],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Brawler Burst",
        "objective": "Open **a brawler with short stages**. Pick a stage you can enter immediately and **fight through to its result screen**. Ignore score and rank.",
        "gameObjective": "Open **{{game}}**. Pick a stage you can enter immediately and **fight through to its result screen**. Ignore score and rank."
      },
      "de": {
        "name": "Kurze Prügelei",
        "objective": "Starte **ein Prügelspiel mit kurzen Stufen**. Wähle eine Stufe, die sofort startet, und **kämpfe dich bis zum Ergebnisbildschirm durch**. Punkte und Rang sind egal.",
        "gameObjective": "Starte **{{game}}**. Wähle eine Stufe, die sofort startet, und **kämpfe dich bis zum Ergebnisbildschirm durch**. Punkte und Rang sind egal."
      }
    },
    "experience": {
      "family": "brawler-stage",
      "cardMetadata": { "genreIds": ["fighting"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "en": "a brawler with short stages",
          "de": "ein Prügelspiel mit kurzen Stufen",
          "chips": {"en": ["Brawler"], "de": ["Prügelspiel"]},
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
    "gameGenreIds": ["fighting"],
    "customGameOverrideOnly": true
  },
  {
    "id": "restless-loud-mission",
    "moodIds": ["restless"],
    "type": "inspiration",
    "tags": ["loadout"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Go Loud",
        "objective": "Open a solo action mission you already know. **Take a direct route with a familiar weapon** and let the game answer back. Skip stealth and optional searches.",
        "gameObjective": "Open {{game}}. **Take a direct route with a familiar weapon** and let the game answer back. Skip stealth and optional searches."
      },
      "de": {
        "name": "Laut rein",
        "objective": "Starte eine bekannte Solo-Actionmission. Nimm eine vertraute Waffe, **stürm auf direktem Weg hinein und kämpf dich durch**. Schleichen und optionale Suchen lässt du heute aus.",
        "gameObjective": "Starte {{game}}. Nimm eine vertraute Waffe, **stürm auf direktem Weg hinein und kämpf dich durch**. Schleichen und optionale Suchen lässt du heute aus."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["missions-or-levels", "combat-loadouts"],
      "match": "all"
    },
    "experience": {
      "family": "direct-action",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["loadout"],
      "rules": [],
      "prerequisites": [
        {
          "en": "a solo action mission you already know",
          "de": "eine bekannte Solo-Actionmission",
          "chips": {"en": ["Familiar mission"], "de": ["Vertraute Mission"]},
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
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "restless-no-stop-checkpoint",
    "moodIds": ["restless"],
    "type": "challenge",
    "tags": ["traversal", "three-attempts"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "No-Stop Checkpoint",
        "objective": "Open **a platformer with a familiar checkpoint section**. Start moving and **reach the next checkpoint without stopping, or finish three attempts**. Normal deaths end an attempt.",
        "gameObjective": "Open **{{game}}**. Start moving and **reach the next checkpoint without stopping, or finish three attempts**. Normal deaths end an attempt."
      },
      "de": {
        "name": "Ohne Stopp zum Ziel",
        "objective": "Starte **ein Plattformspiel mit einem vertrauten Kontrollpunkt-Abschnitt**. Lauf los und **erreiche den nächsten Checkpoint, ohne anzuhalten**. Ein Tod beendet den Versuch; hör nach drei Versuchen auf, wenn es nicht klappt.",
        "gameObjective": "Starte **{{game}}**. Lauf los und **erreiche den nächsten Checkpoint, ohne anzuhalten**. Ein Tod beendet den Versuch; hör nach drei Versuchen auf, wenn es nicht klappt."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["platforming"],
      "match": "all"
    },
    "experience": {
      "family": "traversal",
      "cardMetadata": { "genreIds": ["platformer"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["traversal"],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "a platformer with a familiar checkpoint section",
          "de": "ein Plattformspiel mit einem vertrauten Kontrollpunkt-Abschnitt",
          "chips": {"en": ["Checkpoint"], "de": ["Checkpoint"]},
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
    "gameGenreIds": ["platformer"]
  },
  {
    "id": "restless-boss-rematch",
    "moodIds": ["restless"],
    "type": "inspiration",
    "tags": ["boss", "replay"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Boss Energy",
        "objective": "Open a game with a boss you enjoy replaying. **Jump into the rematch with your current setup** and enjoy the patterns, movement, and pressure. Retry while it stays energizing.",
        "gameObjective": "Open {{game}}. **Jump into the rematch with your current setup** and enjoy the patterns, movement, and pressure. Retry while it stays energizing."
      },
      "de": {
        "name": "Boss-Energie",
        "objective": "Starte ein Spiel mit einem Boss, den du gern erneut bekämpfst. **Stell dich dem Boss noch einmal mit deiner jetzigen Ausrüstung**. Achte auf seine Angriffe, bleib in Bewegung und spiel so lange weiter, wie dir der Kampf Spaß macht.",
        "gameObjective": "Starte {{game}}. **Stell dich dem Boss noch einmal mit deiner jetzigen Ausrüstung**. Achte auf seine Angriffe, bleib in Bewegung und spiel so lange weiter, wie dir der Kampf Spaß macht."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["boss-fights", "replayable-encounters"]
    },
    "experience": {
      "family": "boss",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "open",
      "activities": ["boss"],
      "rules": [],
      "prerequisites": [
        {
          "en": "a game with a boss you enjoy replaying",
          "de": "ein Spiel mit einem Boss, den du gern erneut bekämpfst",
          "chips": {"en": ["Replayable boss"], "de": ["Boss wiederholbar"]},
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
    "gameGenreIds": ["adventure", "rpg", "roguelike"]
  },
  {
    "id": "restless-freeway-chase",
    "moodIds": ["restless"],
    "type": "inspiration",
    "tags": ["driving", "free-roam"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Freeway Rush",
        "objective": "Open a driving sandbox with open roads. Take a fast vehicle onto a long road and **follow the traffic flow at whatever pace feels lively**. No race or destination is required.",
        "gameObjective": "Open {{game}}. Take a fast vehicle onto a long road and **follow the traffic flow at whatever pace feels lively**. No race or destination is required."
      },
      "de": {
        "name": "Rausch auf der Schnellstraße",
        "objective": "Starte eine Fahrsandbox mit offenen Straßen. Nimm ein schnelles Fahrzeug und fahr auf eine lange Straße. Halt dich an den Verkehr und **fahr so flott, wie es sich gut anfühlt**. Du brauchst kein Rennen und kein Ziel.",
        "gameObjective": "Starte {{game}}. Nimm ein schnelles Fahrzeug und fahr auf eine lange Straße. Halt dich an den Verkehr und **fahr so flott, wie es sich gut anfühlt**. Du brauchst kein Rennen und kein Ziel."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["free-driving"],
      "match": "all"
    },
    "experience": {
      "family": "driving",
      "cardMetadata": { "genreIds": ["racing", "sandbox"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["driving", "free-roam"],
      "rules": [],
      "prerequisites": [
        {
          "en": "a driving sandbox with open roads",
          "de": "eine Fahrsandbox mit offenen Straßen",
          "chips": {"en": ["Open roads"], "de": ["Offene Straßen"]},
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
    "gameGenreIds": ["racing", "sandbox"]
  },
  {
    "id": "restless-first-route-run",
    "moodIds": ["restless"],
    "type": "objective",
    "tags": [],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "First Route Run",
        "objective": "Open **a roguelike with branching early paths**. Take the first available route at every branch and **finish its first stage or room set**. The run may continue afterward.",
        "gameObjective": "Open **{{game}}**. Take the first available route at every branch and **finish its first stage or room set**. The run may continue afterward."
      },
      "de": {
        "name": "Run auf erster Route",
        "objective": "Starte **ein Roguelike mit verzweigten frühen Wegen**. Nimm an jeder Abzweigung den ersten verfügbaren Weg und **schaff den ersten Abschnitt**. Danach kannst du den Run weiterspielen.",
        "gameObjective": "Starte **{{game}}**. Nimm an jeder Abzweigung den ersten verfügbaren Weg und **schaff den ersten Abschnitt**. Danach kannst du den Run weiterspielen."
      }
    },
    "experience": {
      "family": "first-branch",
      "cardMetadata": { "genreIds": ["roguelike"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "en": "a roguelike with branching early paths",
          "de": "ein Roguelike mit verzweigten frühen Wegen",
          "chips": {"en": ["Branching paths"], "de": ["Verzweigte Wege"]},
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
    "gameGenreIds": ["roguelike"],
    "customGameOverrideOnly": true
  },
  {
    "id": "restless-local-gear-sprint",
    "moodIds": ["restless"],
    "type": "objective",
    "tags": ["loadout", "one-round"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Use What Drops",
        "objective": "Open **a short solo or bot round with weapon pickups**. Start with your usual setup, pick up the first usable dropped weapon, and **finish the round using it instead of switching back**.",
        "gameObjective": "Open **{{game}}**. Start with your usual setup, pick up the first usable dropped weapon, and **finish the round using it instead of switching back**."
      },
      "de": {
        "name": "Nimm, was fällt",
        "objective": "Starte **eine kurze Solo- oder Bot-Runde mit Waffenfunden**. Starte mit deiner gewohnten Ausrüstung, nimm die erste brauchbare fallen gelassene Waffe und **beende die Runde damit, ohne zurückzuwechseln**.",
        "gameObjective": "Starte **{{game}}**. Starte mit deiner gewohnten Ausrüstung, nimm die erste brauchbare fallen gelassene Waffe und **beende die Runde damit, ohne zurückzuwechseln**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["combat-loadouts", "rounds-or-matches", "weapon-pickups"]
    },
    "experience": {
      "family": "pickup-round",
      "cardMetadata": { "genreIds": ["shooter"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["loadout"],
      "rules": ["one-round"],
      "prerequisites": [
        {
          "en": "a short solo or bot round with weapon pickups",
          "de": "eine kurze Solo- oder Bot-Runde mit Waffenfunden",
          "chips": {"en": ["Weapon pickups"], "de": ["Waffenfunde"]},
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
  }
]);
