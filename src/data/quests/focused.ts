import { defineQuests } from "./defineQuests";

export const FocusedQuests = defineQuests([
  {
    "id": "headphones-on",
    "moodIds": ["focused"],
    "type": "inspiration",
    "tags": ["puzzles"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Listen Closely",
        "objective": "Open **a puzzle or detective game with sound clues**. Put on headphones if you have them and **follow what you hear**.",
        "gameObjective": "With sound clues in the puzzle or investigation you are playing in **{{game}}**, put on headphones if you have them and **follow what you hear**."
      },
      "de": {
        "name": "Genau hinhören",
        "objective": "Starte **ein Rätsel- oder Detektivspiel mit akustischen Hinweisen**. Setze Kopfhörer auf, falls du welche hast, und **folge den Geräuschen**.",
        "gameObjective": "Setz in **{{game}}** bei einem Rätsel oder einer Ermittlung mit akustischen Hinweisen Kopfhörer auf, falls du welche hast, und **folge den Geräuschen**."
      }
    },
    "experience": {
      "family": "puzzles",
      "cardMetadata": { "genreIds": ["puzzle"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["puzzles"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Puzzle or investigation with sound clues",
          "de": "Rätsel oder Ermittlung mit akustischen Hinweisen",
          "chips": {"en": ["Sound clues"], "de": ["Akustische Hinweise"]},
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
    "gameGenreIds": ["puzzle"],
    "customGameOverrideOnly": true
  },
  {
    "id": "one-build",
    "moodIds": ["focused"],
    "type": "inspiration",
    "tags": ["loadout"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "One Build",
        "objective": "Open **a deckbuilder or build-based RPG**. Take a setup you already enjoy and **play to its strengths**. Leave new builds for later.",
        "gameObjective": "With a deck or RPG build you enjoy in **{{game}}**, **play to its strengths**. Leave new builds for later."
      },
      "de": {
        "name": "Ein Build",
        "objective": "Starte **ein Deckbuilding-Spiel oder Rollenspiel mit Builds**. Nimm ein vertrautes Setup und **spiele seine Stärken aus**. Neue Builds kommen später.",
        "gameObjective": "Nimm in **{{game}}** ein vertrautes Deck oder einen RPG-Build und **spiele seine Stärken aus**. Neue Builds können warten."
      }
    },
    "experience": {
      "family": "loadout",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "open",
      "activities": ["loadout"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Familiar deck or combat build",
          "de": "Vertrautes Deck oder Kampf-Build",
          "chips": {"en": ["Familiar build"], "de": ["Vertrauter Build"]},
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
    "gameGenreIds": ["rpg", "card", "roguelike"],
    "customGameCompatibility": {
      "capabilityIds": [],
      "requirement": {
        "any": ["card-decks", "combat-loadouts"]
      }
    }
  },
  {
    "id": "fix-the-bottleneck",
    "moodIds": ["focused", "progress"],
    "type": "objective",
    "tags": ["automation"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "translations": {
      "en": {
        "name": "Find the Bottleneck",
        "objective": "Open **an automation save with a stalled production line**. Find what is missing and get it running again. **Check that finished products reach its output**.",
        "gameObjective": "In **{{game}}**, find what a stalled production line is missing and get it running again. **Check that finished products reach its output**."
      },
      "de": {
        "name": "Finde den Engpass",
        "objective": "Öffne **einen Spielstand mit einer stillstehenden Produktionslinie**. Finde heraus, was ihr fehlt, und bring sie wieder zum Laufen. **Prüf am Ausgang, ob wieder fertige Produkte ankommen**.",
        "gameObjective": "Finde in **{{game}}** heraus, was einer stillstehenden Produktionslinie fehlt, und bring sie wieder zum Laufen. **Prüf am Ausgang, ob wieder fertige Produkte ankommen**."
      }
    },
    "experience": {
      "family": "repair-production-line",
      "cardMetadata": { "genreIds": ["simulation", "sandbox"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["automation"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Stalled production line; missing input can be restored",
          "de": "Stillstehende Produktionslinie; fehlende Zufuhr behebbar",
          "chips": {"en": ["Stalled production"], "de": ["Stillstehende Produktion"]},
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
    "customGameCompatibility": {
      "capabilityIds": ["automation"]
    }
  },
  {
    "id": "one-lead",
    "moodIds": ["focused"],
    "type": "objective",
    "tags": ["story"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Follow One Lead",
        "objective": "Continue **a detective game with an open lead and evidence board**. Follow its clues and conversations until **one new piece of evidence is recorded**.",
        "gameObjective": "With an open investigation in **{{game}}**, **follow one lead until a new piece of evidence is recorded**."
      },
      "de": {
        "name": "Eine Spur verfolgen",
        "objective": "Setze **ein Detektivspiel mit einer offenen Spur** fort. Geh den Hinweisen nach und sprich mit den Beteiligten, bis **ein neuer Beweis auf deiner Beweistafel landet**.",
        "gameObjective": "**Folge in {{game}} in einer offenen Ermittlung einer Spur, bis ein neuer Beweis verzeichnet ist**."
      }
    },
    "experience": {
      "family": "story",
      "cardMetadata": { "genreIds": ["narrative"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Open investigation with an evidence board",
          "de": "Offene Ermittlung mit Beweistafel",
          "chips": {"en": ["Evidence board"], "de": ["Beweistafel"]},
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
    "gameGenreIds": ["narrative"],
    "customGameOverrideOnly": true
  },
  {
    "id": "turn-based-one-front",
    "moodIds": ["focused"],
    "type": "inspiration",
    "tags": [],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "One Front",
        "objective": "Open **a turn-based strategy save with several fronts**. **Focus on one region or group of units**. Handle the other fronts only when needed.",
        "gameObjective": "On a turn-based save with several fronts in **{{game}}**, **focus on one region or group of units**. Handle other fronts when needed."
      },
      "de": {
        "name": "Eine Front",
        "objective": "Öffne **einen rundenbasierten Strategiespielstand mit mehreren Fronten**. **Konzentrier dich auf eine Region oder Einheitengruppe**. Um die anderen Fronten kümmerst du dich nur, wenn es nötig ist.",
        "gameObjective": "**Konzentrier dich in {{game}} in einem rundenbasierten Spielstand mit mehreren Fronten auf eine Region oder Einheitengruppe**. Kümmere dich bei Bedarf um die anderen."
      }
    },
    "experience": {
      "family": "strategy-front",
      "cardMetadata": { "genreIds": ["strategy"], "playStyleIds": [] },
      "finish": "open",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "en": "Turn-based save with several fronts",
          "de": "Rundenbasierter Spielstand mit mehreren Fronten",
          "chips": {"en": ["Several fronts"], "de": ["Mehrere Fronten"]},
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
    "gameGenreIds": ["strategy"],
    "customGameCompatibility": {
      "capabilityIds": ["unit-command"]
    }
  },
  {
    "id": "ending-in-sight",
    "moodIds": ["focused"],
    "type": "inspiration",
    "tags": ["current-save", "story"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "translations": {
      "en": {
        "name": "Ending in Sight",
        "objective": "Return to **an unfinished story game whose ending feels close**. **Give the final stretch of its main story your attention**. Side quests can wait.",
        "gameObjective": "Return to your save near the ending in **{{game}}**. **Give the final stretch of the main story your attention**. Side quests can wait."
      },
      "de": {
        "name": "Das Ende in Sicht",
        "objective": "Kehre zu **einem Storyspiel zurück, dessen Ende in Sicht ist**. **Nimm dir Zeit für den letzten Abschnitt der Hauptgeschichte**. Nebenquests können warten.",
        "gameObjective": "Kehre in **{{game}}** zu deinem Spielstand kurz vor dem Ende zurück. **Nimm dir Zeit für den letzten Abschnitt der Hauptgeschichte**. Nebenquests können warten."
      }
    },
    "experience": {
      "family": "final-story-stretch",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "open",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Existing save",
          "de": "Vorhandener Spielstand",
          "chips": {"en": ["Existing save"], "de": ["Spielstand"]},
          "critical": true
        },
        {
          "en": "Story save near its ending; accessible save points",
          "de": "Story-Spielstand kurz vor Ende; erreichbare Speicherpunkte",
          "chips": {"en": ["Near the ending"], "de": ["Kurz vor dem Ende"]},
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
    "gameGenreIds": ["adventure", "rpg", "narrative"],
    "customGameCompatibility": {
      "capabilityIds": ["missions-or-levels", "choices-or-lore"]
    }
  },
  {
    "id": "one-level-no-detours",
    "moodIds": ["focused", "progress"],
    "type": "objective",
    "tags": ["current-save"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Straight to the Exit",
        "objective": "Open a **game with short missions or levels**. Start a short mission or level and **follow the main route to the end**. Skip optional rooms and collectibles.",
        "gameObjective": "In **{{game}}**, start a short mission or level and **follow its main route to the end**, leaving optional rooms and collectibles."
      },
      "de": {
        "name": "Direkt zum Ausgang",
        "objective": "Starte ein **Spiel mit kurzen Missionen oder Leveln**. Wähle eine kurze Mission oder ein Level und **bleib bis zum Ende auf dem Hauptweg**. Optionale Räume und Sammelobjekte lässt du aus.",
        "gameObjective": "**Folge in {{game}} in einer kurzen Mission oder einem Level dem Hauptweg bis zum Ende**. Lass optionale Räume und Sammelobjekte aus."
      }
    },
    "experience": {
      "family": "direct-mission-route",
      "cardMetadata": { "genreIds": ["adventure"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "de": "Kurze Mission oder kurzes Level mit erkennbarem Hauptweg",
          "en": "Short mission or level with an identifiable main route",
          "chips": {"en": ["Main route"], "de": ["Hauptweg"]},
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
    "gameGenreIds": ["adventure"],
    "customGameCompatibility": {
      "capabilityIds": ["missions-or-levels"]
    }
  },
  {
    "id": "drive-one-route-twice",
    "moodIds": ["focused", "curious"],
    "type": "experiment",
    "tags": ["driving", "new-approach"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "The Same Road",
        "objective": "Open a **free-roam driving game**. Drive to a nearby landmark. **Take the same road back** and try to make the return smoother.",
        "gameObjective": "Open **{{game}}**. Drive to a nearby landmark. **Take the same road back** and try to make the return smoother."
      },
      "de": {
        "name": "Dieselbe Straße",
        "objective": "Starte ein **Spiel mit freien Autofahrten**. Fahre zu einem Orientierungspunkt in der Nähe. **Nimm dieselbe Straße zurück** und versuche, ruhiger zu fahren.",
        "gameObjective": "Starte **{{game}}**. Fahre zu einem Orientierungspunkt in der Nähe. **Nimm dieselbe Straße zurück** und versuche, ruhiger zu fahren."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["free-driving"]
    },
    "experience": {
      "family": "driving",
      "cardMetadata": { "genreIds": ["adventure", "racing"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["driving"],
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
    "gameGenreIds": ["adventure", "racing"]
  },
  {
    "id": "drive-clean",
    "moodIds": ["focused"],
    "type": "challenge",
    "tags": ["racing", "three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "A Clean Race",
        "objective": "Open a **racing game**. Pick a familiar track and **finish a race without hitting barriers or cars**. Stop after success or three races.",
        "gameObjective": "Open **{{game}}**. Pick a familiar track and **finish a race without hitting barriers or cars**. Stop after success or three races."
      },
      "de": {
        "name": "Ein sauberes Rennen",
        "objective": "Starte ein **Rennspiel**. Nimm eine Strecke, die du kennst, und **fahr ein Rennen zu Ende, ohne Leitplanken oder andere Autos zu berühren**. Hör nach dem Erfolg oder drei Rennen auf.",
        "gameObjective": "Starte **{{game}}**. Nimm eine Strecke, die du kennst, und **fahr ein Rennen zu Ende, ohne Leitplanken oder andere Autos zu berühren**. Hör nach dem Erfolg oder drei Rennen auf."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["racing"]
    },
    "experience": {
      "family": "racing",
      "cardMetadata": { "genreIds": ["racing"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["racing"],
      "rules": ["three-attempts"],
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
    "gameGenreIds": ["racing"]
  },
  {
    "id": "hunt-single-species",
    "moodIds": ["focused", "progress"],
    "type": "objective",
    "tags": ["hunting"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "One Species",
        "objective": "Open a **game with hunting**. Let the first huntable animal set the species. **Hunt two of that kind and collect their materials**.",
        "gameObjective": "Open **{{game}}**. Let the first huntable animal set the species. **Hunt two of that kind and collect their materials**."
      },
      "de": {
        "name": "Eine Tierart",
        "objective": "Starte ein **Spiel mit Jagd**. Das erste Tier, das du jagen kannst, bestimmt die Art. **Erleg zwei Tiere dieser Art und sammle ihre Materialien**.",
        "gameObjective": "Starte **{{game}}**. Das erste Tier, das du jagen kannst, bestimmt die Art. **Erleg zwei Tiere dieser Art und sammle ihre Materialien**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["hunting"]
    },
    "experience": {
      "family": "hunt-one-species",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["hunting"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Bekannte Tierart mit mehreren Tieren in einem erreichbaren Jagdgebiet",
          "en": "Known species with several animals in a reachable hunting area",
          "chips": {"en": ["Hunting area"], "de": ["Jagdgebiet"]},
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
    "gameGenreIds": ["simulation", "survival", "cozy"]
  },
  {
    "id": "companion-first-strike",
    "moodIds": ["focused", "curious"],
    "type": "experiment",
    "tags": ["new-approach"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Let Them Lead",
        "objective": "Open a **game with an animal combat companion**. Let your companion start the next fight, then join in. **Finish the fight together**.",
        "gameObjective": "Open **{{game}}**. Let your companion start the next fight, then join in. **Finish the fight together**."
      },
      "de": {
        "name": "Begleiter zuerst",
        "objective": "Starte ein **Spiel mit einem Tierbegleiter im Kampf**. Lass deinen Tierbegleiter den nächsten Kampf eröffnen und greif danach ein. **Spielt den Kampf zusammen zu Ende**.",
        "gameObjective": "Starte **{{game}}**. Lass deinen Tierbegleiter den nächsten Kampf eröffnen und greif danach ein. **Spielt den Kampf zusammen zu Ende**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["animal-companions"]
    },
    "experience": {
      "family": "companion-opening",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "de": "Tierbegleiter, den du einen Kampf eröffnen lassen kannst",
          "en": "Animal companion you can direct to open a fight",
          "chips": {"en": ["Animal companion"], "de": ["Tierbegleiter"]},
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
    "gameGenreIds": ["rpg", "simulation", "cozy"]
  },
  {
    "id": "extract-one-container",
    "moodIds": ["focused", "challenge"],
    "type": "challenge",
    "tags": ["extraction"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Three Containers",
        "objective": "Open an **extraction game with a solo mode**. Use your usual gear, loot only the **first three containers**, and **extract with that loot**, or stop after three runs.",
        "gameObjective": "In **{{game}}**: Use your usual gear, loot only the **first three containers**, and **extract with that loot**, or stop after three runs."
      },
      "de": {
        "name": "Drei Behälter",
        "objective": "Starte ein **Extraktionsspiel mit Solo-Modus**. Nimm deine übliche Ausrüstung, plündere nur die **ersten drei Behälter** und **extrahiere mit dieser Beute** oder hör nach drei Runs auf.",
        "gameObjective": "In **{{game}}**: Nimm deine übliche Ausrüstung, plündere nur die **ersten drei Behälter** und **extrahiere mit dieser Beute** oder hör nach drei Runs auf."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["extraction-runs"]
    },
    "experience": {
      "family": "extraction",
      "cardMetadata": { "genreIds": ["survival", "shooter"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["extraction"],
      "rules": ["three-attempts"],
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
    "gameGenreIds": ["survival", "shooter"]
  },
  {
    "id": "merchant-clear-one-category",
    "moodIds": ["focused", "progress"],
    "type": "objective",
    "tags": ["trading"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "One Shelf Clear",
        "objective": "Open a **game with merchants**. Choose one category at a merchant who buys your items. **Sell its unwanted supplies**, keeping equipment and quest items you still need.",
        "gameObjective": "Open **{{game}}**. Choose one category at a merchant who buys your items. **Sell its unwanted supplies**, keeping equipment and quest items you still need."
      },
      "de": {
        "name": "Ein Fach frei",
        "objective": "Starte ein **Spiel mit Händlern**. Wähle bei einem Händler eine Item-Kategorie, die er ankauft. **Verkaufe die Dinge aus dieser Kategorie, die du nicht mehr brauchst**. Behalte benötigte Ausrüstung und Questitems.",
        "gameObjective": "Starte **{{game}}**. Wähle bei einem Händler eine Item-Kategorie, die er ankauft. **Verkaufe die Dinge aus dieser Kategorie, die du nicht mehr brauchst**. Behalte benötigte Ausrüstung und Questitems."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["trading"]
    },
    "experience": {
      "family": "trading",
      "cardMetadata": { "genreIds": ["rpg"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["trading"],
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
    "gameGenreIds": ["rpg"]
  },
  {
    "id": "extract-known-route",
    "moodIds": ["focused", "progress"],
    "type": "objective",
    "tags": ["extraction"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "The Route You Know",
        "objective": "Open a **game with solo extraction runs**. Start a solo run on a map with an extraction route you know. Loot along that route and **reach extraction or finish the run if you are eliminated**. Avoid extending the route for extra loot.",
        "gameObjective": "In **{{game}}**: Start a solo run on a map with an extraction route you know. Loot along that route and **reach extraction or finish the run if you are eliminated**. Avoid extending the route for extra loot."
      },
      "de": {
        "name": "Die bekannte Route",
        "objective": "Starte ein **Spiel mit Solo-Extraktionsrunden**. Geh auf einer Karte ins Spiel, deren Extraktionsweg du kennst. Plündere unterwegs und **versuch über diesen Weg zu extrahieren**. Wenn du ausscheidest, ist die Runde vorbei. Für zusätzliche Beute machst du keinen Umweg.",
        "gameObjective": "In **{{game}}**: Geh auf einer Karte ins Spiel, deren Extraktionsweg du kennst. Plündere unterwegs und **versuch über diesen Weg zu extrahieren**. Wenn du ausscheidest, ist die Runde vorbei. Für zusätzliche Beute machst du keinen Umweg."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["extraction-runs"]
    },
    "experience": {
      "family": "known-extraction-route",
      "cardMetadata": { "genreIds": ["survival", "shooter"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["extraction"],
      "rules": [],
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
    "gameGenreIds": ["survival", "shooter"]
  },
  {
    "id": "shooter-hold-a-crossing",
    "moodIds": ["focused"],
    "type": "objective",
    "tags": ["support"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "translations": {
      "en": {
        "name": "Watch the Crossing",
        "objective": "Open a **shooter with round-based matches**. During a match, choose a crossing relevant to your team’s objective. **Cover it from a useful position and adapt when the team moves**. Finish the match. You do not need a kill.",
        "gameObjective": "In **{{game}}**: During a match, choose a crossing relevant to your team’s objective. **Cover it from a useful position and adapt when the team moves**. Finish the match. You do not need a kill."
      },
      "de": {
        "name": "Den Durchgang sichern",
        "objective": "Starte ein **Shooter mit rundenbasierten Matches**. Such dir in einem Match einen Durchgang, der für euer Ziel wichtig ist. **Sichere ihn und rück mit deinem Team weiter, wenn sich der Kampf verlagert**. Spiel das Match zu Ende; du brauchst keinen Abschuss.",
        "gameObjective": "In **{{game}}**: Such dir in einem Match einen Durchgang, der für euer Ziel wichtig ist. **Sichere ihn und rück mit deinem Team weiter, wenn sich der Kampf verlagert**. Spiel das Match zu Ende; du brauchst keinen Abschuss."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["combat-loadouts", "whole-matches", "online-teamplay"],
      "genreIds": ["shooter"]
    },
    "experience": {
      "family": "support",
      "cardMetadata": { "genreIds": ["shooter"], "playStyleIds": ["co-op"] },
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
    "gameGenreIds": ["shooter"]
  },
  {
    "id": "gadget-protect-a-route",
    "moodIds": ["focused"],
    "type": "objective",
    "tags": ["gadgets", "loadout"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Protect the Route",
        "objective": "Open a **game with protective or route-blocking gadgets**. Where your loadout includes a protective or blocking gadget, place it to cover a route relevant to the objective. **Play out the encounter using that setup**, moving or replacing it only if the situation needs it.",
        "gameObjective": "In **{{game}}**: Where your loadout includes a protective or blocking gadget, place it to cover a route relevant to the objective. **Play out the encounter using that setup**, moving or replacing it only if the situation needs it."
      },
      "de": {
        "name": "Den Weg schützen",
        "objective": "Starte ein **Spiel mit schützenden oder wegsperrenden Gadgets**. Platziere ein schützendes oder wegsperrendes Gadget an einem wichtigen Zugang. **Spiel den Kampf oder die Runde damit zu Ende**. Wenn sich die Lage ändert, darfst du es versetzen.",
        "gameObjective": "In **{{game}}**: Platziere ein schützendes oder wegsperrendes Gadget an einem wichtigen Zugang. **Spiel den Kampf oder die Runde damit zu Ende**. Wenn sich die Lage ändert, darfst du es versetzen."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["placeable-gadgets"]
    },
    "experience": {
      "family": "gadgets",
      "cardMetadata": { "genreIds": ["shooter"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["gadgets", "loadout"],
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
    "gameGenreIds": ["shooter"]
  },
  {
    "id": "ward-before-the-objective",
    "moodIds": ["focused", "progress"],
    "type": "objective",
    "tags": ["scouting", "lanes", "support"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "translations": {
      "en": {
        "name": "Vision on the Way",
        "objective": "Open a **MOBA with placeable vision wards**. In a match where you have an available vision ward, place it along a relevant approach before joining your team’s next objective. **Play through that objective attempt and finish the match**, whether the team secures it or not.",
        "gameObjective": "In **{{game}}**: In a match where you have an available vision ward, place it along a relevant approach before joining your team’s next objective. **Play through that objective attempt and finish the match**, whether the team secures it or not."
      },
      "de": {
        "name": "Sicht auf dem Weg",
        "objective": "Starte ein **MOBA, in dem du Wards platzieren kannst**. Platziere einen Ward an einem wichtigen Zugangsweg, bevor du zum nächsten Teamziel gehst. **Hilf deinem Team beim Ziel und spiel das Match zu Ende**, unabhängig davon, ob ihr das Ziel bekommt.",
        "gameObjective": "In **{{game}}**: Platziere einen Ward an einem wichtigen Zugangsweg, bevor du zum nächsten Teamziel gehst. **Hilf deinem Team beim Ziel und spiel das Match zu Ende**, unabhängig davon, ob ihr das Ziel bekommt."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["scouting-tools", "lanes-and-towers"],
      "genreIds": ["moba"]
    },
    "experience": {
      "family": "scouting",
      "cardMetadata": { "genreIds": ["moba"], "playStyleIds": ["co-op"] },
      "finish": "outcome",
      "activities": ["scouting", "lanes", "support"],
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
    "id": "scout-cover-your-return",
    "moodIds": ["focused", "curious"],
    "type": "experiment",
    "tags": ["scouting", "exploration"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Scout the Escape",
        "objective": "Open a **game with a controllable scouting camera or drone and loot**. Scout a guarded area and find a route in and back. **Retrieve an item there and use what you scouted to get out**.",
        "gameObjective": "In **{{game}}**, use a controllable camera or drone to scout a guarded area and find a route in and back. **Retrieve an item there and use what you scouted to get out**."
      },
      "de": {
        "name": "Ein Plan für die Beute",
        "objective": "Starte ein **Spiel mit steuerbarer Aufklärungskamera oder Drohne und Beute**. Späh einen bewachten Bereich aus und such einen Weg hinein und zurück. **Hol dir dort einen Gegenstand und nutze für den Rückweg deine Aufklärung**.",
        "gameObjective": "Späh in **{{game}}** mit einer steuerbaren Kamera oder Drohne einen bewachten Bereich aus und such einen Weg hinein und zurück. **Hol dir dort einen Gegenstand und nutze für den Rückweg deine Aufklärung**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["remote-scouting", "theft-or-loot"],
      "genreIds": ["shooter", "stealth"]
    },
    "experience": {
      "family": "scouted-loot-route",
      "cardMetadata": { "genreIds": ["shooter", "stealth"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["scouting", "exploration"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Steuerbare Kamera oder Drohne; Solo-Bereich mit erreichbarer bewachter Beute",
          "en": "Controllable camera or drone; solo area with reachable guarded loot",
          "chips": {"en": ["Camera or drone"], "de": ["Kamera oder Drohne"]},
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
    "gameGenreIds": ["shooter", "stealth"]
  },
  {
    "id": "lane-follow-your-wave",
    "moodIds": ["focused", "progress"],
    "type": "objective",
    "tags": ["lanes", "vs-bots"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "translations": {
      "en": {
        "name": "With the Wave",
        "objective": "Open a **MOBA with a bot mode**. Follow your allied minions toward an enemy tower. **Help destroy that tower or finish the match if it ends first**. Back away when your minion cover is gone.",
        "gameObjective": "In a bot match in **{{game}}**: Follow your allied minions toward an enemy tower. **Help destroy that tower or finish the match if it ends first**. Back away when your minion cover is gone."
      },
      "de": {
        "name": "Mit der Wave",
        "objective": "Starte ein **MOBA mit Bot-Modus**. Folge deinen Minions zu einem gegnerischen Turm. **Hilf, den Turm zu zerstören, oder beende das Match, wenn es vorher endet**. Zieh dich zurück, wenn deine Minions weg sind.",
        "gameObjective": "In **{{game}}** im Bot-Match: Folge deinen Minions zu einem gegnerischen Turm. **Hilf, den Turm zu zerstören, oder beende das Match, wenn es vorher endet**. Zieh dich zurück, wenn deine Minions weg sind."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["lanes-and-towers", "bot-modes", "whole-matches"],
      "genreIds": ["moba"]
    },
    "experience": {
      "family": "tower-push",
      "cardMetadata": { "genreIds": ["moba"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["lanes"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Full bot match",
          "de": "Vollständiges Bot-Match",
          "chips": {"en": ["Bot match"], "de": ["Bot-Match"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "co-op",
          "formation": "team",
          "mode": "bot-match"
        },
        {
          "connection": "online",
          "people": "alone",
          "participation": "co-op",
          "formation": "team",
          "mode": "bot-match"
        }
      ]
    },
    "gameGenreIds": ["moba"]
  },
  {
    "id": "units-keep-them-together",
    "moodIds": ["focused", "progress"],
    "type": "objective",
    "tags": ["units", "vs-bots"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Move as a Group",
        "objective": "Open a **game with several commandable units**. In a short solo or CPU battle, choose a small group of available units. **Move them together toward one scenario objective and play until it resolves or the battle ends**.",
        "gameObjective": "In **{{game}}**: In a short solo or CPU battle, choose a small group of available units. **Move them together toward one scenario objective and play until it resolves or the battle ends**."
      },
      "de": {
        "name": "Als Gruppe vorrücken",
        "objective": "Starte ein **Strategie-Spiel mit kurzen Solo- oder CPU-Kämpfen**. Wähle eine kleine Einheitengruppe. **Beweg sie zusammen zu einem Szenarioziel und spiel, bis es entschieden ist oder der Kampf endet**.",
        "gameObjective": "Wähle in **{{game}}** in einem kurzen Solo- oder CPU-Kampf eine kleine Einheitengruppe. **Beweg sie zusammen zu einem Szenarioziel und spiel, bis es entschieden ist oder der Kampf endet**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["unit-command"]
    },
    "experience": {
      "family": "units",
      "cardMetadata": { "genreIds": ["strategy"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["units"],
      "rules": [],
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
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["strategy"]
  },
  {
    "id": "match-one-thread-to-follow",
    "moodIds": ["focused"],
    "type": "inspiration",
    "tags": ["full-match"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "translations": {
      "en": {
        "name": "Follow the Match",
        "objective": "Open a **game with full matches**. Choose the mode you know best and **pay attention to how the match develops**, adjusting your usual play as the situation changes. Let this match hold the session and finish it before deciding what comes next.",
        "gameObjective": "In **{{game}}**: Choose the mode you know best and **pay attention to how the match develops**, adjusting your usual play as the situation changes. Let this match hold the session and finish it before deciding what comes next."
      },
      "de": {
        "name": "Dem Match folgen",
        "objective": "Starte **ein Spiel mit vollständigen Matches**. Nimm deinen vertrautesten Modus und **folge dem Verlauf des Matches**. Reagier darauf, wie Gegner oder Team ihre Taktik ändern.",
        "gameObjective": "Nimm in **{{game}}** deinen vertrautesten Modus und **folge dem Verlauf des Matches**. Reagier darauf, wie Gegner oder Team ihre Taktik ändern."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["whole-matches"]
    },
    "experience": {
      "family": "match-reading",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "open",
      "activities": [],
      "rules": ["full-match"],
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
    "gameGenreIds": ["card", "shooter", "moba", "strategy", "sports", "fighting"]
  },
  {
    "id": "squad-call-one-plan",
    "moodIds": ["focused", "connect"],
    "type": "objective",
    "tags": ["co-op", "full-match"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "translations": {
      "en": {
        "name": "One Shared Plan",
        "objective": "Open an **online squad game with full matches**. Before the match, agree on one simple team plan such as a route, opening, or defensive position. **Keep returning to that plan as the match changes** and finish the match together.",
        "gameObjective": "In **{{game}}**: Before the match, agree on one simple team plan such as a route, opening, or defensive position. **Keep returning to that plan as the match changes** and finish the match together."
      },
      "de": {
        "name": "Ein gemeinsamer Plan",
        "objective": "Starte ein **Online-Squadspiel mit vollständigen Matches**. Einigt euch vor dem Match auf einen einfachen Plan für Route, Eröffnung oder Verteidigung. **Setzt ihn gemeinsam um und spielt das Match zu Ende**. Sprecht euch ab, wenn ihr ihn ändern müsst.",
        "gameObjective": "In **{{game}}**: Einigt euch vor dem Match auf einen einfachen Plan für Route, Eröffnung oder Verteidigung. **Setzt ihn gemeinsam um und spielt das Match zu Ende**. Sprecht euch ab, wenn ihr ihn ändern müsst."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["online-teamplay", "whole-matches"]
    },
    "experience": {
      "family": "squad-plan",
      "cardMetadata": { "genreIds": [], "playStyleIds": ["co-op"] },
      "finish": "attempt",
      "activities": [],
      "rules": ["full-match"],
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
    "gameGenreIds": ["shooter", "moba", "sports"]
  },
  {
    "id": "swim-surface-checkpoints",
    "moodIds": ["focused", "explore"],
    "type": "objective",
    "tags": ["diving", "exploration"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Underwater Passage",
        "objective": "Open a **game with free underwater swimming**. **Follow an underwater passage to its next opening**, surfacing for air as needed. Choose a passage you can safely reach.",
        "gameObjective": "Open **{{game}}**. **Follow an underwater passage to its next opening**, surfacing for air as needed. Choose a passage you can safely reach."
      },
      "de": {
        "name": "Durch den Unterwassergang",
        "objective": "Starte ein **Spiel mit freiem Tauchen**. **Folge einem Unterwasser-Durchgang bis zur nächsten Öffnung** und tauch nach Bedarf zum Luftholen auf. Wähle einen sicher erreichbaren Durchgang.",
        "gameObjective": "Starte **{{game}}**. **Folge einem Unterwasser-Durchgang bis zur nächsten Öffnung** und tauch nach Bedarf zum Luftholen auf. Wähle einen sicher erreichbaren Durchgang."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["diving", "open-world"]
    },
    "experience": {
      "family": "underwater-passage",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["diving", "exploration"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Reachable underwater passage; air supply",
          "de": "Erreichbarer Unterwasser-Durchgang; Luftversorgung",
          "chips": {"en": ["Air supply"], "de": ["Luftversorgung"]},
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
    "gameGenreIds": ["adventure", "survival", "sandbox"]
  },
  {
    "id": "puzzle-explain-the-rule",
    "moodIds": ["focused", "curious"],
    "type": "experiment",
    "tags": ["puzzles"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Use the Rule",
        "objective": "Open a **puzzle game with short replayable puzzles**. **Solve one puzzle, then try another using the rule you discovered**.",
        "gameObjective": "Open **{{game}}**. **Solve one puzzle, then try another using the rule you discovered**."
      },
      "de": {
        "name": "Die Regel anwenden",
        "objective": "Starte ein **Rätselspiel mit kurzen wiederholbaren Rätseln**. **Löse ein Rätsel und probiere die entdeckte Regel an einem weiteren aus**.",
        "gameObjective": "Starte **{{game}}**. **Löse ein Rätsel und probiere die entdeckte Regel an einem weiteren aus**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["puzzles"]
    },
    "experience": {
      "family": "transfer-puzzle-rule",
      "cardMetadata": { "genreIds": ["puzzle", "narrative"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["puzzles"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Zwei kurze Rätsel mit gemeinsamem Regelwerk",
          "en": "Two short puzzles using a shared rule set",
          "chips": {"en": ["Puzzle rules"], "de": ["Rätselregeln"]},
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
    "gameGenreIds": ["puzzle", "narrative"]
  },
  {
    "id": "sports-defend-first",
    "moodIds": ["focused", "curious"],
    "type": "objective",
    "tags": ["new-approach"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Defense First",
        "objective": "Open a **sports game with CPU opponents**. Play one full match against the CPU with a familiar team. Prioritize marking, positioning, saves, or possession recovery before attacking. **Finish the match and accept the result**.",
        "gameObjective": "In **{{game}}**, play one full match against the CPU with a familiar team. Prioritize marking, positioning, saves, or possession recovery before attacking. **Finish the match and accept the result**."
      },
      "de": {
        "name": "Erst die Defensive",
        "objective": "Starte ein **Sportspiel mit CPU-Gegnern**. Spiel mit einem vertrauten Team gegen die CPU. Achte zuerst auf Deckung, Position und Ballgewinn, bevor du angreifst. **Bring die Partie zu Ende, egal wie sie ausgeht**.",
        "gameObjective": "In **{{game}}**: Spiel mit einem vertrauten Team gegen die CPU. Achte zuerst auf Deckung, Position und Ballgewinn, bevor du angreifst. **Bring die Partie zu Ende, egal wie sie ausgeht**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["sports-goals", "bot-modes", "whole-matches"]
    },
    "experience": {
      "family": "sports-defense",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "en": "Full match against CPU opponents",
          "de": "Ganzes Match gegen CPU-Gegner",
          "chips": {"en": ["CPU match"], "de": ["CPU-Match"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "team",
          "mode": "CPU team controlled by one human"
        },
        {
          "connection": "offline",
          "people": "alone",
          "participation": "co-op",
          "formation": "team",
          "mode": "bot teammates and CPU opponents"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "automation-remove-the-detour",
    "moodIds": ["focused", "curious"],
    "type": "experiment",
    "tags": ["automation"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Remove the Detour",
        "objective": "Open **a game with an existing production line**. Find an unnecessary detour for one material and make its route more direct. **Check that the material arrives and production keeps running**.",
        "gameObjective": "In **{{game}}**, find an unnecessary detour for one material in an existing production line and make its route more direct. **Check that the material arrives and production keeps running**."
      },
      "de": {
        "name": "Den Umweg entfernen",
        "objective": "Starte **ein Spiel mit einer bestehenden Produktionslinie**. Such einen unnötigen Umweg für ein Material und verlege die Route direkter. **Prüf, ob das Material ankommt und die Produktion weiterläuft**.",
        "gameObjective": "Such in **{{game}}** bei einer bestehenden Produktionslinie einen unnötigen Umweg für ein Material und verlege die Route direkter. **Prüf, ob das Material ankommt und die Produktion weiterläuft**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["automation"]
    },
    "experience": {
      "family": "reroute-production",
      "cardMetadata": { "genreIds": ["simulation", "sandbox"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["automation"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Bestehende Anlage mit veränderbarer Transportstrecke",
          "en": "Existing factory with an editable transport route",
          "chips": {"en": ["Transport route"], "de": ["Transportstrecke"]},
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
    "id": "focused-journal-navigation",
    "moodIds": ["focused"],
    "type": "inspiration",
    "tags": ["story"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "translations": {
      "en": {
        "name": "Journal Navigation",
        "objective": "Open a quest-driven game whose journal gives written directions. Untrack the marker and **follow one quest using its written clues and the world itself**. Re-enable guidance whenever the trail stops being enjoyable.",
        "gameObjective": "Open {{game}}. Untrack the marker and **follow one quest using its written clues and the world itself**. Re-enable guidance whenever the trail stops being enjoyable."
      },
      "de": {
        "name": "Nach dem Journal",
        "objective": "Starte ein Spiel mit Wegbeschreibungen im Questjournal. Entferne die Markierung und **folge einer Quest anhand ihrer geschriebenen Hinweise und der Spielwelt**. Aktiviere die Führung wieder, sobald die Spur keinen Spaß mehr macht.",
        "gameObjective": "Starte {{game}}. Entferne die Markierung und **folge einer Quest anhand ihrer geschriebenen Hinweise und der Spielwelt**. Aktiviere die Führung wieder, sobald die Spur keinen Spaß mehr macht."
      }
    },
    "experience": {
      "family": "written-clue-navigation",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "open",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "a quest-driven game whose journal gives written directions",
          "de": "ein Spiel mit Wegbeschreibungen im Questjournal",
          "chips": {"en": ["Quest journal"], "de": ["Questjournal"]},
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
    "gameGenreIds": ["adventure", "rpg", "narrative"],
    "customGameOverrideOnly": true
  },
  {
    "id": "focused-one-room-at-a-time",
    "moodIds": ["focused"],
    "type": "objective",
    "tags": [],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Room by Room",
        "objective": "Open **a mission built from connected combat or stealth rooms**. Before leaving each room, secure its exits and check the next doorway, then **reach the mission's next checkpoint**.",
        "gameObjective": "Open **{{game}}**. Before leaving each room, secure its exits and check the next doorway, then **reach the mission's next checkpoint**."
      },
      "de": {
        "name": "Raum für Raum",
        "objective": "Starte **eine Mission aus verbundenen Kampf- oder Schleichräumen**. Prüfe in jedem Raum die Ausgänge, bevor du weitergehst, und **erreiche den nächsten Kontrollpunkt der Mission**.",
        "gameObjective": "Starte **{{game}}**. Prüfe in jedem Raum die Ausgänge, bevor du weitergehst, und **erreiche den nächsten Kontrollpunkt der Mission**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["missions-or-levels"]
    },
    "experience": {
      "family": "careful-room-route",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "en": "a mission built from connected combat or stealth rooms",
          "de": "eine Mission aus verbundenen Kampf- oder Schleichräumen",
          "chips": {"en": ["Connected rooms"], "de": ["Verbundene Räume"]},
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
    "gameGenreIds": ["adventure", "shooter", "stealth"]
  },
  {
    "id": "focused-no-reload-scenario",
    "moodIds": ["focused"],
    "type": "challenge",
    "tags": ["units", "three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "translations": {
      "en": {
        "name": "No Reload",
        "objective": "Open **a strategy game with a short replayable scenario**. Commit to every move and **win without reloading, or finish three full attempts**.",
        "gameObjective": "Open **{{game}}**. Commit to every move and **win without reloading, or finish three full attempts**."
      },
      "de": {
        "name": "Ohne Neuladen",
        "objective": "Starte **ein Strategiespiel mit einem kurzen wiederholbaren Szenario**. Steh zu jedem Zug und **gewinne ohne Neuladen oder beende drei vollständige Versuche**.",
        "gameObjective": "Starte **{{game}}**. Steh zu jedem Zug und **gewinne ohne Neuladen oder beende drei vollständige Versuche**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["unit-command", "missions-or-levels", "replayable-encounters"]
    },
    "experience": {
      "family": "units",
      "cardMetadata": { "genreIds": ["strategy"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["units"],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "a strategy game with a short replayable scenario",
          "de": "ein Strategiespiel mit einem kurzen wiederholbaren Szenario",
          "chips": {"en": ["Strategy scenario"], "de": ["Strategieszenario"]},
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
    "id": "focused-measure-one-output",
    "moodIds": ["focused"],
    "type": "experiment",
    "tags": ["automation"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Measure the Output",
        "objective": "Open **a game with an existing automated line**. Count its output for one minute, change one machine or route, then **count another minute and compare the totals**.",
        "gameObjective": "Open **{{game}}**. Count its output for one minute, change one machine or route, then **count another minute and compare the totals**."
      },
      "de": {
        "name": "Ausgabe messen",
        "objective": "Starte **ein Spiel mit einer bestehenden automatisierten Anlage**. Zähl eine Minute lang, wie viele Produkte fertig werden. Änder eine Maschine oder Route und **zähl noch einmal eine Minute, um die Ergebnisse zu vergleichen**.",
        "gameObjective": "Starte **{{game}}**. Zähl eine Minute lang, wie viele Produkte fertig werden. Änder eine Maschine oder Route und **zähl noch einmal eine Minute, um die Ergebnisse zu vergleichen**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["automation"],
      "match": "all"
    },
    "experience": {
      "family": "production-output-comparison",
      "cardMetadata": { "genreIds": ["simulation", "sandbox"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["automation"],
      "rules": [],
      "prerequisites": [
        {
          "en": "a game with an existing automated line",
          "de": "ein Spiel mit einer bestehenden automatisierten Anlage",
          "chips": {"en": ["Automated line"], "de": ["Automatisierte Anlage"]},
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
    "id": "focused-deck-opening-line",
    "moodIds": ["focused"],
    "type": "experiment",
    "tags": ["cards", "new-approach"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Opening Line",
        "objective": "Open a **card game with a familiar deck and solo or bot play**. Choose an opening sequence you rarely prioritize and **try it during a full match**.",
        "gameObjective": "Open **{{game}}**. Choose an opening sequence you rarely prioritize and **try it during a full match**."
      },
      "de": {
        "name": "Eröffnungsfolge",
        "objective": "Starte ein **Kartenspiel mit vertrautem Deck und Solo- oder Bot-Modus**. Wähle eine Eröffnung, die du selten spielst, und **probiere sie in einem ganzen Match aus**.",
        "gameObjective": "Starte **{{game}}**. Wähle eine Eröffnung, die du selten spielst, und **probiere sie in einem ganzen Match aus**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["card-decks", "rounds-or-matches"],
      "match": "all"
    },
    "experience": {
      "family": "cards",
      "cardMetadata": { "genreIds": ["card"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["cards"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Vertrautes Deck und Solo- oder Bot-Modus",
          "en": "Familiar deck and solo or bot mode",
          "chips": {"en": ["Deck", "Bot mode"], "de": ["Deck", "Bot-Modus"]},
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
    "id": "focused-scout-then-enter",
    "moodIds": ["focused"],
    "type": "objective",
    "tags": ["scouting"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Scout Then Enter",
        "objective": "Open **a solo mission with a scouting tool**. Observe the whole entry area before moving, choose one route, and **reach the first interior objective through that route**.",
        "gameObjective": "Open **{{game}}**. Observe the whole entry area before moving, choose one route, and **reach the first interior objective through that route**."
      },
      "de": {
        "name": "Erst aufklären",
        "objective": "Starte **eine Solo-Mission mit Aufklärungswerkzeug**. Beobachte vor dem Losgehen den gesamten Eingangsbereich, wähle eine Route und **erreiche darüber das erste innere Missionsziel**.",
        "gameObjective": "Starte **{{game}}**. Beobachte vor dem Losgehen den gesamten Eingangsbereich, wähle eine Route und **erreiche darüber das erste innere Missionsziel**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["scouting-tools", "missions-or-levels"],
      "match": "all"
    },
    "experience": {
      "family": "scouted-mission-entry",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["scouting"],
      "rules": [],
      "prerequisites": [
        {
          "en": "a solo mission with a scouting tool",
          "de": "eine Solo-Mission mit Aufklärungswerkzeug",
          "chips": {"en": ["Scouting tool"], "de": ["Aufklärungswerkzeug"]},
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
    "gameGenreIds": ["shooter", "stealth", "adventure"]
  },
  {
    "id": "focused-interrupt-the-boss",
    "moodIds": ["focused"],
    "type": "challenge",
    "tags": ["boss", "three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Interrupt Window",
        "objective": "Open **a boss fight with an interruptible, staggerable, or parryable attack**. Wait for that attack and **interrupt it once before winning, or finish three attempts**.",
        "gameObjective": "Open **{{game}}**. Wait for that attack and **interrupt it once before winning, or finish three attempts**."
      },
      "de": {
        "name": "Unterbrechungsfenster",
        "objective": "Starte **einen Bosskampf, in dem du einen Angriff unterbrechen, parieren oder den Boss ins Taumeln bringen kannst**. Warte auf diesen Angriff und **unterbrich ihn einmal, bevor du den Boss besiegst**. Wenn es nicht klappt, hör nach drei Versuchen auf.",
        "gameObjective": "Starte **{{game}}**. Warte auf diesen Angriff und **unterbrich ihn einmal, bevor du den Boss besiegst**. Wenn es nicht klappt, hör nach drei Versuchen auf."
      }
    },
    "experience": {
      "family": "boss",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["boss"],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "a boss fight with an interruptible, staggerable, or parryable attack",
          "de": "einen Bosskampf, in dem du einen Angriff unterbrechen, parieren oder den Boss ins Taumeln bringen kannst",
          "chips": {"en": ["Interruptible boss"], "de": ["Boss unterbrechbar"]},
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
    "gameGenreIds": ["adventure", "rpg", "roguelike"],
    "customGameOverrideOnly": true
  },
  {
    "id": "focused-one-large-puzzle",
    "moodIds": ["focused"],
    "type": "objective",
    "tags": ["puzzles"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "translations": {
      "en": {
        "name": "One Deep Puzzle",
        "objective": "Open **a puzzle game with a substantial unsolved stage**. Choose that single stage, keep notes if useful, and **solve it or reach its built-in save point**. Do not switch puzzles.",
        "gameObjective": "Open **{{game}}**. Choose that single stage, keep notes if useful, and **solve it or reach its built-in save point**. Do not switch puzzles."
      },
      "de": {
        "name": "Ein großes Rätsel",
        "objective": "Starte **ein Rätselspiel mit einem größeren Rätsel, das du noch nicht gelöst hast**. Bleib bei diesem einen Rätsel und mach dir bei Bedarf Notizen. **Löse es oder erreiche seinen Speicherpunkt**. Fang kein anderes an.",
        "gameObjective": "Starte **{{game}}**. Bleib bei diesem einen Rätsel und mach dir bei Bedarf Notizen. **Löse es oder erreiche seinen Speicherpunkt**. Fang kein anderes an."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["puzzles"],
      "match": "all"
    },
    "experience": {
      "family": "deep-puzzle",
      "cardMetadata": { "genreIds": ["puzzle"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["puzzles"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Größeres ungelöstes Rätsel mit erkennbarem Abschluss oder Zwischen-Speicherpunkt",
          "en": "Substantial unsolved puzzle with a finish or intermediate save point",
          "chips": {"en": ["Large puzzle"], "de": ["Großes Rätsel"]},
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
    "gameGenreIds": ["puzzle"],
    "rarity": "special"
  },
  {
    "id": "focused-working-bridge",
    "moodIds": ["focused"],
    "type": "creation",
    "tags": ["building"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "translations": {
      "en": {
        "name": "Working Bridge",
        "objective": "Open **a building game with a gap that matters**. Build a bridge across that gap and **cross it from end to end in normal play**. Decoration is optional.",
        "gameObjective": "Open **{{game}}**. Build a bridge across that gap and **cross it from end to end in normal play**. Decoration is optional."
      },
      "de": {
        "name": "Funktionierende Brücke",
        "objective": "Starte **ein Bauspiel mit einer wichtigen Lücke**. Bau eine Brücke über die Lücke und **lauf im normalen Spiel von einem Ende zum anderen**. Schmücken kannst du sie später.",
        "gameObjective": "Starte **{{game}}**. Bau eine Brücke über die Lücke und **lauf im normalen Spiel von einem Ende zum anderen**. Schmücken kannst du sie später."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["building"],
      "match": "all"
    },
    "experience": {
      "family": "working-bridge",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["building"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Überbrückbare Lücke, Bauteile und begehbare Konstruktionen",
          "en": "Bridgeable gap, building parts and walkable structures",
          "chips": {"en": ["Building parts", "Gap"], "de": ["Bauteile", "Lücke"]},
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
    "gameGenreIds": ["simulation", "survival", "sandbox"],
    "rarity": "special"
  },
  {
    "id": "focused-subject-and-background",
    "moodIds": ["focused"],
    "type": "creation",
    "tags": ["photography"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Subject and Background",
        "objective": "Open **a game with photo mode and a controllable camera**. Choose one subject, position it against a deliberate background, and **save one composed image**. Adjust framing before filters.",
        "gameObjective": "Open **{{game}}**. Choose one subject, position it against a deliberate background, and **save one composed image**. Adjust framing before filters."
      },
      "de": {
        "name": "Motiv und Hintergrund",
        "objective": "Starte **ein Spiel mit Fotomodus und freier Kamera**. Such ein Motiv und einen passenden Hintergrund. Richte den Bildausschnitt so aus, dass beide zusammenpassen, und **speichere dein Foto**.",
        "gameObjective": "Such in **{{game}}** im Fotomodus ein Motiv und einen passenden Hintergrund. Richte den Bildausschnitt so aus, dass beide zusammenpassen, und **speichere dein Foto**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["photo-mode"],
      "match": "all"
    },
    "experience": {
      "family": "photo-composition",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["photography"],
      "rules": [],
      "prerequisites": [
        {
          "en": "a game with photo mode and a controllable camera",
          "de": "ein Spiel mit Fotomodus und steuerbarer Kamera",
          "chips": {"en": ["Camera controls"], "de": ["Kamerasteuerung"]},
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
    "id": "focused-hold-one-reserve",
    "moodIds": ["focused"],
    "type": "objective",
    "tags": ["units"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Hold a Reserve",
        "objective": "Open **a strategy scenario with several controllable units**. Keep one unit behind the main group at first. **Send it where your ongoing fight needs support**, then finish the battle.",
        "gameObjective": "In **{{game}}**, keep one unit behind the main group at first. **Send it where your ongoing fight needs support**, then finish the battle."
      },
      "de": {
        "name": "Reserve zurückhalten",
        "objective": "Starte **ein Strategieszenario mit mehreren steuerbaren Einheiten**. Lass eine Einheit zunächst hinter der Hauptgruppe. **Setz sie dort ein, wo dein laufender Kampf Unterstützung braucht**, und spiel den Kampf zu Ende.",
        "gameObjective": "Halte in **{{game}}** eine Einheit zunächst hinter der Hauptgruppe. **Setz sie dort ein, wo dein laufender Kampf Unterstützung braucht**, und spiel den Kampf zu Ende."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["unit-command"],
      "match": "all"
    },
    "experience": {
      "family": "reserve-reinforcement",
      "cardMetadata": { "genreIds": ["strategy"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["units"],
      "rules": [],
      "prerequisites": [
        {
          "en": "a strategy scenario with several controllable units",
          "de": "ein Strategieszenario mit mehreren steuerbaren Einheiten",
          "chips": {"en": ["Controllable units"], "de": ["Steuerbare Einheiten"]},
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
    "id": "focused-three-lap-comparison",
    "moodIds": ["focused"],
    "type": "experiment",
    "tags": ["racing", "new-approach"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Three-Lap Comparison",
        "objective": "Open **a racing game with a short circuit**. Drive one normal lap, change one driving assist, then **finish two more laps and compare the times**.",
        "gameObjective": "Open **{{game}}**. Drive one normal lap, change one driving assist, then **finish two more laps and compare the times**."
      },
      "de": {
        "name": "Vergleich über drei Runden",
        "objective": "Starte **ein Rennspiel mit einer kurzen Strecke**. Fahr eine normale Runde, ändere eine Fahrhilfe und **beende zwei weitere Runden und vergleiche die Zeiten**.",
        "gameObjective": "Starte **{{game}}**. Fahr eine normale Runde, ändere eine Fahrhilfe und **beende zwei weitere Runden und vergleiche die Zeiten**."
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
          "en": "a racing game with a short circuit",
          "de": "ein Rennspiel mit einer kurzen Strecke",
          "chips": {"en": ["Short circuit"], "de": ["Kurze Rennstrecke"]},
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
    "id": "focused-counter-in-match",
    "moodIds": ["focused"],
    "type": "challenge",
    "tags": ["one-round", "three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Land a Counter",
        "objective": "Open **a fighting game with a counter or reversal move**. Enter normal matches and **land the counter once, or finish three rounds**. Training mode does not count.",
        "gameObjective": "Open **{{game}}**. Enter normal matches and **land the counter once, or finish three rounds**. Training mode does not count."
      },
      "de": {
        "name": "Konter im Match",
        "objective": "Starte **ein Kampfspiel mit Konter- oder Umkehrbewegung**. Spiel normale Matches und **lande einmal einen Konter**. Wenn es nicht klappt, hör nach drei Runden auf. Der Trainingsmodus zählt nicht.",
        "gameObjective": "Starte **{{game}}**. Spiel normale Matches und **lande einmal einen Konter**. Wenn es nicht klappt, hör nach drei Runden auf. Der Trainingsmodus zählt nicht."
      }
    },
    "experience": {
      "family": "fighting-counter",
      "cardMetadata": { "genreIds": ["fighting"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["one-round", "three-attempts"],
      "prerequisites": [
        {
          "en": "a fighting game with a counter or reversal move",
          "de": "ein Kampfspiel mit Konter- oder Umkehrbewegung",
          "chips": {"en": ["Counter move"], "de": ["Konter"]},
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
    "id": "focused-read-the-environment",
    "moodIds": ["focused", "explore", "curious"],
    "type": "inspiration",
    "tags": ["story", "exploration"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Environmental Story",
        "objective": "Open **a game that tells stories through its locations**. Look around an abandoned room or an intriguing area. **Follow the traces of what happened there**.",
        "gameObjective": "In **{{game}}**, look around an abandoned room or an intriguing area. **Follow the traces of what happened there**."
      },
      "de": {
        "name": "Geschichte im Raum",
        "objective": "Starte **ein Spiel, das seine Geschichte auch über Orte erzählt**. Schau dich in einem verlassenen Raum oder einem auffälligen Bereich um. **Geh den Spuren nach, die verraten, was dort passiert ist**.",
        "gameObjective": "Schau dich in **{{game}}** in einem verlassenen Raum oder einem auffälligen Bereich um. **Geh den Spuren nach, die verraten, was dort passiert ist**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["choices-or-lore", "missions-or-levels"],
      "match": "all"
    },
    "experience": {
      "family": "environmental-story",
      "cardMetadata": { "genreIds": ["adventure", "narrative"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["story", "exploration"],
      "rules": [],
      "prerequisites": [
        {
          "en": "a game with a detailed room or location tied to the story",
          "de": "ein Spiel mit einem detailreichen storyrelevanten Raum oder Ort",
          "chips": {"en": ["Story location"], "de": ["Story-Ort"]},
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
    "gameGenreIds": ["adventure", "narrative"]
  },
  {
    "id": "focused-watch-one-rival",
    "moodIds": ["focused"],
    "type": "experiment",
    "tags": ["full-match", "new-approach"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "translations": {
      "en": {
        "name": "Watch One Rival",
        "objective": "Open **a competitive game with complete matches**. Pay close attention to one opponent’s routes and openings. **Try a response and finish the match**. Adapt if they change their approach.",
        "gameObjective": "In **{{game}}**, pay close attention to one opponent’s routes and openings. **Try a response and finish the match**. Adapt if they change their approach."
      },
      "de": {
        "name": "Eine Person beobachten",
        "objective": "Starte **ein kompetitives Spiel mit vollständigen Matches**. Achte besonders auf die Wege und Eröffnungen einer gegnerischen Person. **Probiere eine passende Reaktion aus und spiel das Match zu Ende**. Wenn sie ihren Ansatz ändert, pass dich an.",
        "gameObjective": "Achte in **{{game}}** besonders auf die Wege und Eröffnungen einer gegnerischen Person. **Probiere eine passende Reaktion aus und spiel das Match zu Ende**. Wenn sie ihren Ansatz ändert, pass dich an."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["whole-matches"],
      "match": "all"
    },
    "experience": {
      "family": "rival-pattern",
      "cardMetadata": { "genreIds": [], "playStyleIds": ["co-op"] },
      "finish": "attempt",
      "activities": [],
      "rules": ["full-match"],
      "prerequisites": [
        {
          "en": "a competitive game with complete matches",
          "de": "ein kompetitives Spiel mit vollständigen Matches",
          "chips": {"en": ["Full matches"], "de": ["Ganze Matches"]},
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
    "id": "focused-one-gadget-plan",
    "moodIds": ["focused", "curious"],
    "type": "experiment",
    "tags": ["gadgets", "new-approach"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Plan Around a Gadget",
        "objective": "Open a **game with an unlocked tactical gadget**. Choose one you rarely use and **build your approach to one encounter around it**. Adapt the plan as the encounter unfolds.",
        "gameObjective": "Open **{{game}}**. Choose one you rarely use and **build your approach to one encounter around it**. Adapt the plan as the encounter unfolds."
      },
      "de": {
        "name": "Plan mit Gadget",
        "objective": "Starte ein **Spiel mit einem freigeschalteten taktischen Gadget**. Wähle eines, das du selten nutzt, und **richte dein Vorgehen in einer Begegnung darauf aus**. Passe den Plan an, wenn sich die Situation verändert.",
        "gameObjective": "Starte **{{game}}**. Wähle eines, das du selten nutzt, und **richte dein Vorgehen in einer Begegnung darauf aus**. Passe den Plan an, wenn sich die Situation verändert."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["tactical-gadgets", "missions-or-levels"]
    },
    "experience": {
      "family": "gadget-encounter",
      "cardMetadata": { "genreIds": ["shooter", "stealth"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["gadgets"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Unlocked gadget; playable encounter",
          "de": "Freigeschaltetes Gadget; spielbare Begegnung",
          "chips": {"en": ["Gadget"], "de": ["Gadget"]},
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
    "gameGenreIds": ["shooter", "stealth"]
  },
  {
    "id": "follow-the-delivery",
    "moodIds": ["focused", "explore"],
    "type": "objective",
    "tags": ["stealth"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "customGameCompatibility": {
      "capabilityIds": ["moving-patrols", "theft-or-loot", "stealth"]
    },
    "translations": {
      "en": {
        "name": "In the Patrol’s Wake",
        "objective": "Open a **stealth game with moving patrols and loot**. **Follow a patrol to its next stop and steal something from the place it leaves behind**.",
        "gameObjective": "In **{{game}}**, **follow a patrol to its next stop and steal something from the place it leaves behind**."
      },
      "de": {
        "name": "Im Schatten der Patrouille",
        "objective": "Starte ein **Schleichspiel mit beweglichen Patrouillen und Beute**. **Folge einer Patrouille bis zum nächsten Halt und stiehl etwas an dem Ort, den sie hinter sich lässt**.",
        "gameObjective": "**Folge in {{game}} einer Patrouille bis zum nächsten Halt und stiehl etwas an dem Ort, den sie hinter sich lässt**."
      }
    },
    "experience": {
      "family": "patrol-theft",
      "cardMetadata": { "genreIds": ["stealth", "rpg"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["stealth"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Patrol with a stop and stealable loot",
          "de": "Patrouille mit Halt und stehlbarer Beute",
          "chips": {"en": ["Patrol", "Loot"], "de": ["Patrouille", "Beute"]},
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
    "gameGenreIds": ["stealth", "rpg"]
  },
  {
    "id": "mmo-market-supply",
    "moodIds": ["focused", "progress"],
    "type": "objective",
    "tags": ["trading", "crafting"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "A Market Supply Run",
        "objective": "Open an **MMO with a player market and an unlocked recipe**. **Buy the missing ingredient for one recipe and craft it**. Choose a recipe whose other materials you own and set your spending limit first.",
        "gameObjective": "In **{{game}}**, **buy the missing ingredient for one unlocked recipe and craft it**. Use owned materials for the rest and set your spending limit first."
      },
      "de": {
        "name": "Nachschub vom Markt",
        "objective": "Starte ein **MMO mit Spielermarkt und einem freigeschalteten Rezept**. **Kauf die eine fehlende Zutat und stelle das Rezept her**. Nutze für den Rest eigene Vorräte und lege vorher deine Preisgrenze fest.",
        "gameObjective": "**Kauf in {{game}} die eine fehlende Zutat für ein freigeschaltetes Rezept und stelle es her**. Nutze für den Rest eigene Vorräte und lege vorher deine Preisgrenze fest."
      }
    },
    "experience": {
      "family": "market-crafting",
      "cardMetadata": { "genreIds": ["mmo"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["trading", "crafting"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Player market; unlocked recipe",
          "de": "Spielermarkt; freigeschaltetes Rezept",
          "chips": {"en": ["Player market", "Recipe"], "de": ["Spielermarkt", "Rezept"]},
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
    "gameGenreIds": ["mmo"],
    "customGameOverrideOnly": true
  }
]);
