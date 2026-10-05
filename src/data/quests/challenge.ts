import { defineQuests } from "./defineQuests";

export const ChallengeQuests = defineQuests([
  {
    "id": "one-life",
    "moodIds": ["challenge"],
    "type": "inspiration",
    "tags": ["one-life"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "One Life",
        "objective": "Open **a roguelike where death ends the run**. **Spend the resources you usually hoard** and see how far they take you.",
        "gameObjective": "In a run of **{{game}}** where death ends the run, **spend the resources you usually hoard** and see how far they take you."
      },
      "de": {
        "name": "Ein Leben",
        "objective": "Starte **ein Roguelike, bei dem der Tod deinen Run beendet**. **Verbrauch die Vorräte, die du sonst für später aufhebst**, und schau, wie weit du kommst.",
        "gameObjective": "**Verbrauch in {{game}} in einem Run, der mit dem Tod endet, die sonst gehorteten Vorräte** und schau, wie weit du kommst."
      }
    },
    "experience": {
      "family": "roguelike-resources",
      "cardMetadata": { "genreIds": ["roguelike"], "playStyleIds": [] },
      "finish": "open",
      "activities": [],
      "rules": ["one-life"],
      "prerequisites": [
        {
          "en": "Roguelike run ends on death; spendable resources",
          "de": "Roguelike-Durchlauf endet beim Tod; ausgebbare Ressourcen",
          "chips": {"en": ["Spendable resources"], "de": ["Ausgebbare Vorräte"]},
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
    "id": "full-combo-try",
    "moodIds": ["challenge"],
    "type": "inspiration",
    "tags": ["rhythm"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "A Step Harder",
        "objective": "Open **a rhythm game**. Choose songs just above your usual difficulty and **take on the harder patterns**. No required combo or score.",
        "gameObjective": "In **{{game}}**, choose rhythm songs just above your usual difficulty and **try their harder patterns**. No combo or score is required."
      },
      "de": {
        "name": "Eine Stufe schwerer",
        "objective": "Starte **ein Rhythmusspiel**. Wähle Songs eine Stufe über deinem üblichen Schwierigkeitsgrad und **probier die schwereren Muster aus**. Du brauchst weder eine perfekte Kombo noch eine bestimmte Punktzahl.",
        "gameObjective": "Wähle in **{{game}}** Rhythmussongs knapp über deiner üblichen Schwierigkeit und **probier ihre schwereren Muster aus**. Kombo und Punktzahl sind egal."
      }
    },
    "experience": {
      "family": "rhythm",
      "cardMetadata": { "genreIds": ["rhythm"], "playStyleIds": [] },
      "finish": "open",
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
    "id": "three-fast-laps",
    "moodIds": ["challenge"],
    "type": "challenge",
    "tags": ["time-trial", "three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Beat Your Lap",
        "objective": "In a racing **time trial**, set a clean lap on a familiar short track. Keep the same setup and **beat your time within three more attempts**.",
        "gameObjective": "In a time trial in **{{game}}**, set a clean lap on a familiar short track. Keep the same setup and **beat your time within three more attempts**, or stop after the third result."
      },
      "de": {
        "name": "Schlag deine Zeit",
        "objective": "Fahr im **Zeitfahren** eine saubere Runde auf einer vertrauten kurzen Strecke. Behalte dein Setup und **schlag deine Zeit in höchstens drei weiteren Versuchen**.",
        "gameObjective": "Setz in **{{game}}** im Zeitfahren eine saubere Runde auf einer vertrauten kurzen Strecke. Behalte das Setup und **unterbiete deine Zeit in höchstens drei weiteren Versuchen** oder hör nach dem dritten Ergebnis auf."
      }
    },
    "experience": {
      "family": "improve-lap-time",
      "cardMetadata": { "genreIds": ["racing"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["time-trial"],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Familiar short track with a lap time trial",
          "de": "Vertraute kurze Strecke mit Rundenzeitfahren",
          "chips": {"en": ["Familiar track"], "de": ["Vertraute Strecke"]},
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
      "capabilityIds": ["racing", "time-trials"]
    }
  },
  {
    "id": "match-combo",
    "moodIds": ["challenge"],
    "type": "challenge",
    "tags": ["three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Land the Combo",
        "objective": "Open a **fighting game with combo trials and CPU matches**. Learn an unfinished combo and **land it in a CPU match, then finish that match**, or stop after three full matches.",
        "gameObjective": "In **{{game}}**, practise an unfamiliar combo and **land it in a CPU match, then finish that match**, or stop after three full matches."
      },
      "de": {
        "name": "Die Kombo landen",
        "objective": "Starte ein **Kampfspiel mit Kombo-Training und CPU-Matches**. Üb eine noch unsichere Kombo und **lande sie in einem CPU-Match, das du zu Ende spielst**, oder hör nach drei ganzen Matches auf.",
        "gameObjective": "In **{{game}}**: Üb eine noch unsichere Kombo und **lande sie in einem CPU-Match, das du zu Ende spielst**, oder hör nach drei ganzen Matches auf."
      }
    },
    "experience": {
      "family": "combo-trial",
      "cardMetadata": { "genreIds": ["fighting"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["abilities"],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "de": "Noch unsichere Kombo, Kombo-Training und CPU-Matches",
          "en": "Unpractised combo, combo training and CPU matches",
          "chips": {"en": ["Combo training"], "de": ["Kombo-Training"]},
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
    "id": "precision-platformer-session",
    "moodIds": ["challenge"],
    "type": "inspiration",
    "tags": ["traversal"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Tricky Jumps",
        "objective": "Open **a precision platformer with quick retries**. Pick an unlocked section and **work through its tricky jumps**. Take breaks between attempts whenever you like.",
        "gameObjective": "In **{{game}}**, return to a tricky platforming section and **work through its jumps at your own pace**. Let retries teach the route."
      },
      "de": {
        "name": "Knifflige Sprünge",
        "objective": "Starte **einen Plattformer mit schnellem Movement und kniffligen Abschnitten**. Such dir einen freigeschalteten Abschnitt und **probier dich an seinen Sprüngen**. Mach zwischen den Versuchen Pause, wann du möchtest.",
        "gameObjective": "Kehre in **{{game}}** zu einem kniffligen Plattformabschnitt zurück und **probier seine Sprünge in deinem Tempo**. Lass jeden Versuch den Weg deutlicher machen."
      }
    },
    "experience": {
      "family": "traversal",
      "cardMetadata": { "genreIds": ["platformer"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["traversal"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Unlocked section with quick retries",
          "de": "Freigeschalteter Abschnitt mit schnellen Neustarts",
          "chips": {"en": ["Quick retries"], "de": ["Schnelle Neustarts"]},
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
    "gameGenreIds": ["platformer"],
    "customGameCompatibility": {
      "capabilityIds": ["platforming"]
    }
  },
  {
    "id": "starter-gear",
    "moodIds": ["challenge", "focused"],
    "type": "challenge",
    "tags": ["one-weapon", "three-attempts"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "One Weapon",
        "objective": "Open a **game with selectable weapons**. Pick one weapon and **win a fight without switching**. Stop after success or three attempts.",
        "gameObjective": "Open **{{game}}**. Pick one weapon and **win a fight without switching**. Stop after success or three attempts."
      },
      "de": {
        "name": "Eine Waffe",
        "objective": "Starte ein **Spiel mit wählbaren Waffen**. Nimm eine Waffe und **gewinne einen Kampf ohne Waffenwechsel**. Nach Erfolg oder drei Versuchen ist Schluss.",
        "gameObjective": "Starte **{{game}}**. Nimm eine Waffe und **gewinne einen Kampf ohne Waffenwechsel**. Nach Erfolg oder drei Versuchen ist Schluss."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["combat-loadouts"]
    },
    "experience": {
      "family": "single-weapon",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["one-weapon", "three-attempts"],
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
    "id": "spell-single-school",
    "moodIds": ["challenge", "focused"],
    "type": "challenge",
    "tags": ["spells", "three-attempts"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "One Spell Only",
        "objective": "Open a **game with damage spells**. Pick one spell and **win a fight using only that spell for damage**. Stop after success or three attempts.",
        "gameObjective": "Open **{{game}}**. Pick one spell and **win a fight using only that spell for damage**. Stop after success or three attempts."
      },
      "de": {
        "name": "Nur ein Zauber",
        "objective": "Starte ein **Spiel mit Schadenszaubern**. Wähle einen Zauber und **gewinn einen Kampf, indem du nur mit diesem Zauber Schaden machst**. Hör nach dem Sieg oder drei Versuchen auf.",
        "gameObjective": "Starte **{{game}}**. Wähle einen Zauber und **gewinn einen Kampf, indem du nur mit diesem Zauber Schaden machst**. Hör nach dem Sieg oder drei Versuchen auf."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["combat-spells"]
    },
    "experience": {
      "family": "spells",
      "cardMetadata": { "genreIds": ["rpg"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["spells"],
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
    "gameGenreIds": ["rpg"]
  },
  {
    "id": "boss-practice",
    "moodIds": ["challenge", "focused"],
    "type": "challenge",
    "tags": ["boss", "three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Read the Boss",
        "objective": "Open a **game with repeatable boss fights**. Try a new response to an attack that often catches you. **Beat the boss or finish three attempts**.",
        "gameObjective": "Open **{{game}}**. Try a new response to an attack that often catches you. **Beat the boss or finish three attempts**."
      },
      "de": {
        "name": "Den Boss lesen",
        "objective": "Starte ein **Spiel mit wiederholbaren Bosskämpfen**. Nimm dir einen Angriff vor, der dich oft trifft, und probier eine andere Reaktion darauf. **Besieg den Boss oder hör nach drei Versuchen auf**.",
        "gameObjective": "Starte **{{game}}**. Nimm dir einen Angriff vor, der dich oft trifft, und probier eine andere Reaktion darauf. **Besieg den Boss oder hör nach drei Versuchen auf**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["boss-fights", "replayable-encounters"]
    },
    "experience": {
      "family": "boss",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["boss"],
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
    "gameGenreIds": ["adventure", "rpg", "platformer", "roguelike", "shooter"]
  },
  {
    "id": "quiet-entry-exit",
    "moodIds": ["challenge", "focused"],
    "type": "challenge",
    "tags": ["stealth", "no-detection", "no-kills", "three-attempts"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Loot without a Fight",
        "objective": "Open a **game with stealth and loot**. Find a guarded room with an item you can take. **Steal it and leave unseen without attacking**. Stop after success or three attempts.",
        "gameObjective": "In **{{game}}**, find a guarded room with an item you can take. **Steal it and leave unseen without attacking**. Stop after success or three attempts."
      },
      "de": {
        "name": "Beute ohne Kampf",
        "objective": "Starte ein **Spiel mit Schleichen und Beute**. Such einen bewachten Raum mit einem Gegenstand, den du mitnehmen kannst. **Stiehl ihn und komm ungesehen heraus, ohne anzugreifen**. Nach Erfolg oder drei Versuchen ist Schluss.",
        "gameObjective": "Such in **{{game}}** einen bewachten Raum mit einem Gegenstand, den du mitnehmen kannst. **Stiehl ihn und komm ungesehen heraus, ohne anzugreifen**. Nach Erfolg oder drei Versuchen ist Schluss."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["stealth", "theft-or-loot"]
    },
    "experience": {
      "family": "theft-escape",
      "cardMetadata": { "genreIds": ["stealth"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["stealth"],
      "rules": ["no-detection", "no-kills", "three-attempts"],
      "prerequisites": [
        {
          "de": "Erreichbarer bewachter Raum mit Beute zum Mitnehmen",
          "en": "Reachable guarded room with an item that can be taken",
          "chips": {"en": ["Guarded loot"], "de": ["Bewachte Beute"]},
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
    "gameGenreIds": ["stealth"]
  },
  {
    "id": "puzzle-no-hints",
    "moodIds": ["challenge", "focused"],
    "type": "challenge",
    "tags": ["puzzles", "no-hints"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "No Hints",
        "objective": "Open a **game with puzzles**. Pick an unfinished puzzle and **solve it without hints or a walkthrough**. Restarting and undo are allowed.",
        "gameObjective": "Open **{{game}}**. Pick an unfinished puzzle and **solve it without hints or a walkthrough**. Restarting and undo are allowed."
      },
      "de": {
        "name": "Ohne Hinweise",
        "objective": "Starte ein **Spiel mit Rätseln**. Nimm ein offenes Rätsel und **löse es ohne Hinweise oder Komplettlösung**. Neustart und Rückgängig sind erlaubt.",
        "gameObjective": "Starte **{{game}}**. Nimm ein offenes Rätsel und **löse es ohne Hinweise oder Komplettlösung**. Neustart und Rückgängig sind erlaubt."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["puzzles"]
    },
    "experience": {
      "family": "puzzles",
      "cardMetadata": { "genreIds": ["puzzle", "narrative"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["puzzles"],
      "rules": ["no-hints"],
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
    "gameGenreIds": ["puzzle", "narrative"]
  },
  {
    "id": "sports-answer-back",
    "moodIds": ["challenge", "restless"],
    "type": "challenge",
    "tags": ["vs-bots", "three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Two Points Ahead",
        "objective": "Open **a sports game with CPU opponents**. **Win a match by at least two points**, or finish three matches.",
        "gameObjective": "Play against the CPU in **{{game}}**. **Win a match by at least two points**, or finish three matches."
      },
      "de": {
        "name": "Zwei Punkte Vorsprung",
        "objective": "Starte **ein Sportspiel mit CPU-Gegnern**. **Gewinn ein Match mit mindestens zwei Punkten Vorsprung** oder spiel drei Matches, falls es nicht klappt.",
        "gameObjective": "Spiel in **{{game}}** gegen die CPU. **Gewinn ein Match mit mindestens zwei Punkten Vorsprung** oder spiel drei Matches, falls es nicht klappt."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["sports-goals", "bot-modes"]
    },
    "experience": {
      "family": "sports-margin",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["three-attempts"],
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
          "formation": "team",
          "mode": "CPU team controlled by one human"
        },
        {
          "connection": "offline",
          "people": "alone",
          "participation": "co-op",
          "formation": "team",
          "mode": "bot teammates and CPU opponents"
        },
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "CPU opponent"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "boss-opening-window",
    "moodIds": ["challenge", "focused"],
    "type": "challenge",
    "tags": ["boss", "three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "After the Dodge",
        "objective": "Open a **game with repeatable boss fights**. Choose a solo boss you have reached. **Hit just after dodging one familiar attack**. Beat the boss or stop after three attempts.",
        "gameObjective": "Open **{{game}}**. Choose a solo boss you have reached. **Hit just after dodging one familiar attack**. Beat the boss or stop after three attempts."
      },
      "de": {
        "name": "Nach dem Ausweichen",
        "objective": "Starte ein **Spiel mit wiederholbaren Bosskämpfen**. Wähle einen bereits erreichten Solo-Boss. Weiche einem Angriff aus, den du schon kennst, und **triff den Boss direkt danach**. Besiege den Boss oder hör nach drei Versuchen auf.",
        "gameObjective": "Starte **{{game}}**. Wähle einen bereits erreichten Solo-Boss. Weiche einem Angriff aus, den du schon kennst, und **triff den Boss direkt danach**. Besiege den Boss oder hör nach drei Versuchen auf."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["boss-fights", "replayable-encounters"]
    },
    "experience": {
      "family": "boss",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["boss"],
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
    "gameGenreIds": ["adventure", "rpg", "platformer", "roguelike", "shooter"]
  },
  {
    "id": "boss-comeback-session",
    "moodIds": ["challenge"],
    "type": "inspiration",
    "tags": ["boss", "replay"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "The Rematch",
        "objective": "Open a **game with repeatable boss fights**. Return to an available boss that once gave you trouble. **Try the rematch with your current gear and skills**. Stop between attempts whenever you like.",
        "gameObjective": "Open **{{game}}**. Return to an available boss that once gave you trouble. **Try the rematch with your current gear and skills**. Stop between attempts whenever you like."
      },
      "de": {
        "name": "Das Wiedersehen",
        "objective": "Starte ein **Spiel mit wiederholbaren Bosskämpfen**. Kehre zu einem verfügbaren Boss zurück, der dir früher Probleme machte. **Stell dich ihm noch einmal mit deiner jetzigen Ausrüstung und Erfahrung**. Hör zwischen Versuchen auf, wann du möchtest.",
        "gameObjective": "Starte **{{game}}**. Kehre zu einem verfügbaren Boss zurück, der dir früher Probleme machte. **Stell dich ihm noch einmal mit deiner jetzigen Ausrüstung und Erfahrung**. Hör zwischen Versuchen auf, wann du möchtest."
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
    "gameGenreIds": ["adventure", "rpg", "platformer", "roguelike", "shooter"]
  },
  {
    "id": "race-from-the-back",
    "moodIds": ["challenge", "restless"],
    "type": "challenge",
    "tags": ["racing", "vs-bots", "three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Make Up Ground",
        "objective": "Open a **racing game with CPU races**. Choose a CPU race with selectable starting positions. Start last in your usual car and **finish at least one place higher**. Stop after success or three races.",
        "gameObjective": "Open **{{game}}**. Choose a CPU race with selectable starting positions. Start last in your usual car and **finish at least one place higher**. Stop after success or three races."
      },
      "de": {
        "name": "Plätze gutmachen",
        "objective": "Starte ein **Rennspiel mit CPU-Rennen**. Wähle ein CPU-Rennen mit wählbaren Startplätzen. Starte mit deinem üblichen Wagen als Letzter und **beende es mindestens einen Platz weiter vorn**. Nach Erfolg oder drei Rennen ist Schluss.",
        "gameObjective": "Starte **{{game}}**. Wähle ein CPU-Rennen mit wählbaren Startplätzen. Starte mit deinem üblichen Wagen als Letzter und **beende es mindestens einen Platz weiter vorn**. Nach Erfolg oder drei Rennen ist Schluss."
      }
    },
    "experience": {
      "family": "racing",
      "cardMetadata": { "genreIds": ["racing"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["racing"],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "de": "CPU-Rennen mit wählbarem Startplatz",
          "en": "CPU race with a selectable starting position",
          "chips": {"en": ["Starting position"], "de": ["Startplatz wählbar"]},
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
    "customGameOverrideOnly": true
  },
  {
    "id": "skate-flip-into-grind",
    "moodIds": ["challenge", "restless"],
    "type": "challenge",
    "tags": ["skating", "three-attempts"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Flip to Rail",
        "objective": "Open a **skating game with grinds and flip tricks**. At a familiar low rail, **link a flip trick into a grind and roll away without falling**. Stop after success or three attempts.",
        "gameObjective": "In **{{game}}**: At a familiar low rail, **link a flip trick into a grind and roll away without falling**. Stop after success or three attempts."
      },
      "de": {
        "name": "Flip aufs Rail",
        "objective": "Starte ein **Skatespiel mit Grinds und Flip-Tricks**. Verbinde an einem vertrauten niedrigen Geländer **einen Flip-Trick mit einem Grind und rolle ohne Sturz weiter**. Nach Erfolg oder drei Versuchen ist Schluss.",
        "gameObjective": "In **{{game}}**: Verbinde an einem vertrauten niedrigen Geländer **einen Flip-Trick mit einem Grind und rolle ohne Sturz weiter**. Nach Erfolg oder drei Versuchen ist Schluss."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["skate-tricks"]
    },
    "experience": {
      "family": "skating",
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
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "platform-clean-stretch",
    "moodIds": ["challenge", "focused"],
    "type": "challenge",
    "tags": ["traversal", "three-attempts"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "One Clean Stretch",
        "objective": "Open a **game with platforming obstacles**. Choose a short obstacle section you can retry. **Cross it without falling or taking damage**, or finish three attempts. Keep the same route for each attempt.",
        "gameObjective": "In **{{game}}**: Choose a short obstacle section you can retry. **Cross it without falling or taking damage**, or finish three attempts. Keep the same route for each attempt."
      },
      "de": {
        "name": "Eine saubere Passage",
        "objective": "Starte ein **Spiel mit Sprunghindernissen**. Wähle eine kurze Hindernispassage, die du wiederholen kannst. **Durchquere sie ohne Sturz oder Schaden** oder beende drei Versuche. Bleib bei jedem Versuch auf derselben Route.",
        "gameObjective": "In **{{game}}**: Wähle eine kurze Hindernispassage, die du wiederholen kannst. **Durchquere sie ohne Sturz oder Schaden** oder beende drei Versuche. Bleib bei jedem Versuch auf derselben Route."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["platforming"]
    },
    "experience": {
      "family": "traversal",
      "cardMetadata": { "genreIds": ["adventure", "platformer"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["traversal"],
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
    "gameGenreIds": ["adventure", "platformer"]
  },
  {
    "id": "lane-practice-last-hits",
    "moodIds": ["challenge", "focused"],
    "type": "challenge",
    "tags": ["lanes", "vs-bots", "three-attempts"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Last-Hit Streak",
        "objective": "Open a **MOBA with last-hit gold and a practice mode**. In a solo practice mode that rewards last hits, **secure the final hit on five lane minions in a row**. Stop after success or three streak attempts.",
        "gameObjective": "In **{{game}}**: In a solo practice mode that rewards last hits, **secure the final hit on five lane minions in a row**. Stop after success or three streak attempts."
      },
      "de": {
        "name": "Letzte Treffer",
        "objective": "Starte ein **MOBA, in dem Last Hits Gold geben und du solo üben kannst**. Versuch im Übungsmodus, **fünf Lane-Minions hintereinander den letzten Treffer zu geben**. Wenn die Serie reißt, fang neu an. Hör nach drei Versuchen auf.",
        "gameObjective": "In **{{game}}**: Versuch im Übungsmodus, **fünf Lane-Minions hintereinander den letzten Treffer zu geben**. Wenn die Serie reißt, fang neu an. Hör nach drei Versuchen auf."
      }
    },
    "experience": {
      "family": "lanes",
      "cardMetadata": { "genreIds": ["moba"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["lanes"],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "de": "Solo-Übungsmodus mit Last-Hit-Gold",
          "en": "Solo practice mode with last-hit gold",
          "chips": {"en": ["Last hits"], "de": ["Last Hits"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "solo-practice"
        },
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "solo-practice"
        }
      ]
    },
    "gameGenreIds": ["moba"],
    "customGameOverrideOnly": true
  },
  {
    "id": "rhythm-cleaner-chorus",
    "moodIds": ["challenge", "focused"],
    "type": "challenge",
    "tags": ["rhythm", "three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Fewer Misses",
        "objective": "Open a **rhythm game that counts misses**. Choose a short song with a result screen that counts missed notes. Play it once, then **finish a replay with fewer misses at the same difficulty within three attempts**, or stop after the third result.",
        "gameObjective": "In **{{game}}**: Choose a short song with a result screen that counts missed notes. Play it once, then **finish a replay with fewer misses at the same difficulty within three attempts**, or stop after the third result."
      },
      "de": {
        "name": "Weniger Fehler",
        "objective": "Starte ein **Rhythmusspiel mit Fehleranzeige**. Spiel einen kurzen Song einmal durch. Versuch danach auf derselben Schwierigkeit, **innerhalb von drei weiteren Durchläufen weniger Noten zu verpassen**. Hör nach dem dritten Ergebnis auf.",
        "gameObjective": "In **{{game}}**: Spiel einen kurzen Song einmal durch. Versuch danach auf derselben Schwierigkeit, **innerhalb von drei weiteren Durchläufen weniger Noten zu verpassen**. Hör nach dem dritten Ergebnis auf."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["rhythm-play"]
    },
    "experience": {
      "family": "rhythm",
      "cardMetadata": { "genreIds": ["rhythm"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["rhythm"],
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
    "gameGenreIds": ["rhythm"]
  },
  {
    "id": "deck-use-the-combination",
    "moodIds": ["challenge", "focused"],
    "type": "challenge",
    "tags": ["cards", "vs-bots", "three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Make It Connect",
        "objective": "Open a **card game with an existing combo deck**. In solo or bot battles, use an available legal deck containing a two-card interaction you already know. **Trigger that interaction during a battle and finish it**, or stop after three battles if the cards never come together.",
        "gameObjective": "In **{{game}}**: In solo or bot battles, use an available legal deck containing a two-card interaction you already know. **Trigger that interaction during a battle and finish it**, or stop after three battles if the cards never come together."
      },
      "de": {
        "name": "Die Kombination schaffen",
        "objective": "Starte ein **Kartenspiel mit einem vorhandenen Combo-Deck**. Nutze in Solo- oder Bot-Kämpfen ein verfügbares gültiges Deck mit einem bekannten Zusammenspiel zweier Karten. **Bring die beiden Karten in einem Kampf zusammen und spiel ihn zu Ende** oder hör nach drei Kämpfen auf, falls die Karten nie zusammenkommen.",
        "gameObjective": "In **{{game}}**: Nutze in Solo- oder Bot-Kämpfen ein verfügbares gültiges Deck mit einem bekannten Zusammenspiel zweier Karten. **Bring die beiden Karten in einem Kampf zusammen und spiel ihn zu Ende** oder hör nach drei Kämpfen auf, falls die Karten nie zusammenkommen."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["card-decks"]
    },
    "experience": {
      "family": "cards",
      "cardMetadata": { "genreIds": ["card"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["cards"],
      "rules": ["three-attempts"],
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
    "gameGenreIds": ["card"]
  },
  {
    "id": "units-one-survivor-more",
    "moodIds": ["challenge", "focused"],
    "type": "challenge",
    "tags": ["units", "three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Keep the Group Alive",
        "objective": "Open a **tactics game with replayable solo battles**. Choose an available, short, replayable solo battle and a small group of units. **Win while keeping every unit in that group alive**, or finish three attempts. Other units can support them.",
        "gameObjective": "In **{{game}}**: Choose an available, short, replayable solo battle and a small group of units. **Win while keeping every unit in that group alive**, or finish three attempts. Other units can support them."
      },
      "de": {
        "name": "Die Gruppe erhalten",
        "objective": "Starte ein **Taktikspiel mit wiederholbaren Solo-Kämpfen**. Wähle einen kurzen Solo-Kampf, den du wiederholen kannst, und eine kleine Gruppe von Einheiten. **Gewinn, ohne jemanden aus dieser Gruppe zu verlieren**. Andere Einheiten dürfen helfen; hör nach drei Versuchen auf.",
        "gameObjective": "In **{{game}}**: Wähle einen kurzen Solo-Kampf, den du wiederholen kannst, und eine kleine Gruppe von Einheiten. **Gewinn, ohne jemanden aus dieser Gruppe zu verlieren**. Andere Einheiten dürfen helfen; hör nach drei Versuchen auf."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["unit-command", "replayable-encounters"],
      "genreIds": ["strategy"]
    },
    "experience": {
      "family": "units",
      "cardMetadata": { "genreIds": ["strategy"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["units"],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "de": "Kurzer wiederholbarer Solo-Kampf mit Einheitenverlusten",
          "en": "Short replayable solo battle with unit losses",
          "chips": {"en": ["Unit losses"], "de": ["Einheitenverluste"]},
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
    "id": "movement-stay-above-ground",
    "moodIds": ["challenge", "restless"],
    "type": "challenge",
    "tags": ["traversal", "three-attempts"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Stay Above Ground",
        "objective": "Open a **game with climbing or movement abilities**. In a solo area, choose three nearby ledges or platforms you can reach with your available moves. **Link all three without dropping to the starting ground**, or finish three attempts.",
        "gameObjective": "In **{{game}}**: In a solo area, choose three nearby ledges or platforms you can reach with your available moves. **Link all three without dropping to the starting ground**, or finish three attempts."
      },
      "de": {
        "name": "Über dem Boden bleiben",
        "objective": "Starte ein **Spiel mit Klettern oder Bewegungsfähigkeiten**. Such dir im Solo-Spiel drei Vorsprünge oder Plattformen in der Nähe aus. **Verbinde sie, ohne wieder auf den Boden am Start zu fallen**. Wenn es nicht klappt, hör nach drei Versuchen auf.",
        "gameObjective": "In **{{game}}**: Such dir im Solo-Spiel drei Vorsprünge oder Plattformen in der Nähe aus. **Verbinde sie, ohne wieder auf den Boden am Start zu fallen**. Wenn es nicht klappt, hör nach drei Versuchen auf."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["advanced-traversal"]
    },
    "experience": {
      "family": "traversal",
      "cardMetadata": { "genreIds": ["adventure", "platformer"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["traversal"],
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
    "gameGenreIds": ["adventure", "platformer"]
  },
  {
    "id": "challenge-one-magazine",
    "moodIds": ["challenge"],
    "type": "challenge",
    "tags": ["one-weapon", "three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "One Magazine",
        "objective": "Open **a solo shooter with manual reloading**. Enter a short familiar encounter and **clear it without reloading, or finish three attempts**. Switching weapons ends the attempt.",
        "gameObjective": "Open **{{game}}**. Enter a short familiar encounter and **clear it without reloading, or finish three attempts**. Switching weapons ends the attempt."
      },
      "de": {
        "name": "Ein Magazin",
        "objective": "Starte **einen Solo-Shooter mit manuellem Nachladen**. Such dir einen kurzen Kampf, den du kennst, und **gewinne ihn ohne Nachladen oder hör nach drei Versuchen auf**. Ein Waffenwechsel beendet den Versuch.",
        "gameObjective": "Starte **{{game}}**. Such dir einen kurzen Kampf, den du kennst, und **gewinne ihn ohne Nachladen oder hör nach drei Versuchen auf**. Ein Waffenwechsel beendet den Versuch."
      }
    },
    "experience": {
      "family": "single-magazine",
      "cardMetadata": { "genreIds": ["shooter"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["loadout"],
      "rules": ["one-weapon", "three-attempts"],
      "prerequisites": [
        {
          "en": "a solo shooter with manual reloading",
          "de": "einen Solo-Shooter mit manuellem Nachladen",
          "chips": {"en": ["Manual reload"], "de": ["Manuelles Nachladen"]},
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
    "gameGenreIds": ["shooter"],
    "customGameOverrideOnly": true
  },
  {
    "id": "challenge-no-healing-three-tries",
    "moodIds": ["challenge"],
    "type": "challenge",
    "tags": ["no-healing", "three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "No Healing",
        "objective": "Open **a solo combat game with healing items**. Enter one familiar encounter and **win without using a healing item, or finish three attempts**.",
        "gameObjective": "Open **{{game}}**. Enter one familiar encounter and **win without using a healing item, or finish three attempts**."
      },
      "de": {
        "name": "Ohne Heilitems",
        "objective": "Starte **ein Solo-Kampfspiel mit Heilitems**. Such dir einen Kampf, den du kennst, und **gewinne ohne Heilitem oder hör nach drei Versuchen auf**.",
        "gameObjective": "Starte **{{game}}**. Such dir einen Kampf, den du kennst, und **gewinne ohne Heilitem oder hör nach drei Versuchen auf**."
      }
    },
    "experience": {
      "family": "no-healing",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["no-healing", "three-attempts"],
      "prerequisites": [
        {
          "en": "a solo combat game with healing items",
          "de": "ein Solo-Kampfspiel mit Heilitems",
          "chips": {"en": ["Healing items"], "de": ["Heilitems"]},
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
    "id": "challenge-three-parries",
    "moodIds": ["challenge"],
    "type": "challenge",
    "tags": ["parry", "three-attempts"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Three Parries",
        "objective": "Open **a solo combat game with a parry**. Face a familiar opponent and **land three successful parries in one attempt, or finish three attempts**.",
        "gameObjective": "Open **{{game}}**. Face a familiar opponent and **land three successful parries in one attempt, or finish three attempts**."
      },
      "de": {
        "name": "Dreimal parieren",
        "objective": "Starte **ein Solo-Kampfspiel mit Parade**. Such dir einen Gegner, den du kennst, und **pariere drei Angriffe in einem Versuch**. Wenn es nicht klappt, hör nach drei Versuchen auf.",
        "gameObjective": "Starte **{{game}}**. Such dir einen Gegner, den du kennst, und **pariere drei Angriffe in einem Versuch**. Wenn es nicht klappt, hör nach drei Versuchen auf."
      }
    },
    "experience": {
      "family": "parry",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["parry"],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "a solo combat game with a parry",
          "de": "ein Solo-Kampfspiel mit Parade",
          "chips": {"en": ["Parry"], "de": ["Parade"]},
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
    "gameGenreIds": ["adventure", "rpg", "fighting"],
    "customGameOverrideOnly": true
  },
  {
    "id": "challenge-boss-without-lock-on",
    "moodIds": ["challenge"],
    "type": "challenge",
    "tags": ["boss", "three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "No Lock-On",
        "objective": "Open **a boss fight where lock-on can be disabled**. Keep the camera under manual control and **defeat the boss without lock-on, or finish three attempts**.",
        "gameObjective": "Open **{{game}}**. Keep the camera under manual control and **defeat the boss without lock-on, or finish three attempts**."
      },
      "de": {
        "name": "Ohne Zielerfassung",
        "objective": "Starte **einen Bosskampf mit abschaltbarer Zielerfassung**. Steuere die Kamera selbst und **besiege den Boss ohne Zielerfassung**. Wenn es nicht klappt, hör nach drei Versuchen auf.",
        "gameObjective": "Starte **{{game}}**. Steuere die Kamera selbst und **besiege den Boss ohne Zielerfassung**. Wenn es nicht klappt, hör nach drei Versuchen auf."
      }
    },
    "experience": {
      "family": "boss",
      "cardMetadata": { "genreIds": ["adventure", "rpg"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["boss"],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "a boss fight where lock-on can be disabled",
          "de": "einen Bosskampf mit abschaltbarer Zielerfassung",
          "chips": {"en": ["Optional lock-on"], "de": ["Zielerfassung optional"]},
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
    "gameGenreIds": ["adventure", "rpg"],
    "customGameOverrideOnly": true
  },
  {
    "id": "challenge-platform-no-assist",
    "moodIds": ["challenge"],
    "type": "challenge",
    "tags": ["traversal", "three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Raw Platforming",
        "objective": "Open **a platformer with a familiar short section**. Use the normal movement settings and **reach the next checkpoint without assists, or finish three attempts**.",
        "gameObjective": "Open **{{game}}**. Use the normal movement settings and **reach the next checkpoint without assists, or finish three attempts**."
      },
      "de": {
        "name": "Ohne Plattformhilfen",
        "objective": "Starte **ein Plattformspiel mit einem vertrauten kurzen Abschnitt**. Nutze die normalen Bewegungseinstellungen und **erreiche den nächsten Checkpoint ohne Hilfen**. Wenn es nicht klappt, hör nach drei Versuchen auf.",
        "gameObjective": "Starte **{{game}}**. Nutze die normalen Bewegungseinstellungen und **erreiche den nächsten Checkpoint ohne Hilfen**. Wenn es nicht klappt, hör nach drei Versuchen auf."
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
          "en": "a platformer with a familiar short section",
          "de": "ein Plattformspiel mit einem vertrauten kurzen Abschnitt",
          "chips": {"en": ["Platforming section"], "de": ["Plattformabschnitt"]},
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
    "id": "challenge-manual-gears",
    "moodIds": ["challenge"],
    "type": "challenge",
    "tags": ["racing", "three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Manual Gears",
        "objective": "Open **a racing game with manual transmission**. Use a familiar car and circuit and **finish one race with manual gears, or complete three race attempts**.",
        "gameObjective": "Open **{{game}}**. Use a familiar car and circuit and **finish one race with manual gears, or complete three race attempts**."
      },
      "de": {
        "name": "Manuelle Schaltung",
        "objective": "Starte **ein Rennspiel mit manueller Schaltung**. Nimm einen Wagen und eine Strecke, die du kennst. **Fahr ein Rennen mit manueller Schaltung zu Ende** oder hör nach drei Versuchen auf.",
        "gameObjective": "Starte **{{game}}**. Nimm einen Wagen und eine Strecke, die du kennst. **Fahr ein Rennen mit manueller Schaltung zu Ende** oder hör nach drei Versuchen auf."
      }
    },
    "experience": {
      "family": "racing",
      "cardMetadata": { "genreIds": ["racing"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["racing"],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "a racing game with manual transmission",
          "de": "ein Rennspiel mit manueller Schaltung",
          "chips": {"en": ["Manual transmission"], "de": ["Manuelle Schaltung"]},
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
    "customGameOverrideOnly": true
  },
  {
    "id": "challenge-harder-song",
    "moodIds": ["challenge"],
    "type": "challenge",
    "tags": ["rhythm", "three-attempts"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "One Step Harder",
        "objective": "Open **a rhythm game with a song you can finish**. Raise that song by one difficulty step and **finish it, or complete three attempts**.",
        "gameObjective": "Open **{{game}}**. Raise that song by one difficulty step and **finish it, or complete three attempts**."
      },
      "de": {
        "name": "Eine Stufe schwerer",
        "objective": "Starte **ein Rhythmusspiel mit einem Song, den du schaffst**. Stell einen Song, den du schon schaffst, eine Schwierigkeitsstufe höher und **spiel ihn bis zum Ende**. Wenn es nicht klappt, hör nach drei Versuchen auf.",
        "gameObjective": "Starte **{{game}}**. Stell einen Song, den du schon schaffst, eine Schwierigkeitsstufe höher und **spiel ihn bis zum Ende**. Wenn es nicht klappt, hör nach drei Versuchen auf."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["rhythm-play"],
      "match": "all"
    },
    "experience": {
      "family": "rhythm",
      "cardMetadata": { "genreIds": ["rhythm"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["rhythm"],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "a rhythm game with a song you can finish",
          "de": "ein Rhythmusspiel mit einem Song, den du schaffst",
          "chips": {"en": ["Familiar song"], "de": ["Vertrauter Song"]},
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
    "gameGenreIds": ["rhythm"]
  },
  {
    "id": "challenge-starter-bot-win",
    "moodIds": ["challenge"],
    "type": "challenge",
    "tags": ["vs-bots", "three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Starter Gear Win",
        "objective": "Open **a game with bot matches and default starter gear**. Keep the starter setup and **win one bot round, or finish three rounds**.",
        "gameObjective": "Open **{{game}}**. Keep the starter setup and **win one bot round, or finish three rounds**."
      },
      "de": {
        "name": "Sieg mit Startausrüstung",
        "objective": "Starte **ein Spiel mit Bot-Matches und Standard-Startausrüstung**. Behalte die Startausrüstung und **gewinn eine Runde gegen Bots**. Wenn es nicht klappt, hör nach drei Runden auf.",
        "gameObjective": "Starte **{{game}}**. Behalte die Startausrüstung und **gewinn eine Runde gegen Bots**. Wenn es nicht klappt, hör nach drei Runden auf."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["rounds-or-matches", "combat-loadouts", "bot-modes"]
    },
    "experience": {
      "family": "starter-bot-win",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["three-attempts"],
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
    "gameGenreIds": ["shooter", "fighting", "sports"]
  },
  {
    "id": "challenge-unseen-entry",
    "moodIds": ["challenge"],
    "type": "challenge",
    "tags": ["no-detection", "three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Unseen Entry",
        "objective": "Open **a solo stealth mission with a guarded boundary**. Cross into the mission area without detection and **reach the first interior checkpoint, or finish three attempts**.",
        "gameObjective": "Open **{{game}}**. Cross into the mission area without detection and **reach the first interior checkpoint, or finish three attempts**."
      },
      "de": {
        "name": "Ungesehener Einstieg",
        "objective": "Starte **eine Solo-Schleichmission mit bewachtem Gebiet**. Schleich unentdeckt ins Missionsgebiet und **erreiche den ersten Checkpoint im Inneren**. Wenn es nicht klappt, hör nach drei Versuchen auf.",
        "gameObjective": "Starte **{{game}}**. Schleich unentdeckt ins Missionsgebiet und **erreiche den ersten Checkpoint im Inneren**. Wenn es nicht klappt, hör nach drei Versuchen auf."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["stealth", "missions-or-levels"],
      "match": "all"
    },
    "experience": {
      "family": "unseen-entry",
      "cardMetadata": { "genreIds": ["stealth", "adventure"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["no-detection", "three-attempts"],
      "prerequisites": [
        {
          "en": "a solo stealth mission with a guarded boundary",
          "de": "eine Solo-Schleichmission mit bewachtem Gebiet",
          "chips": {"en": ["Guarded area"], "de": ["Bewachtes Gebiet"]},
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
    "gameGenreIds": ["stealth", "adventure"]
  },
  {
    "id": "challenge-off-meta-deck",
    "moodIds": ["challenge"],
    "type": "challenge",
    "tags": ["cards", "three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Bench Deck",
        "objective": "Open **a card game with a legal deck you rarely use**. Play solo or against bots and **win once with that deck, or finish three matches**. Do not edit it between matches.",
        "gameObjective": "Open **{{game}}**. Play solo or against bots and **win once with that deck, or finish three matches**. Do not edit it between matches."
      },
      "de": {
        "name": "Deck von der Bank",
        "objective": "Starte **ein Kartenspiel mit einem gültigen Deck, das du selten spielst**. Spiel solo oder gegen Bots und **gewinn ein Match mit diesem Deck**. Änder es zwischendurch nicht und hör nach drei Matches auf, falls es nicht klappt.",
        "gameObjective": "Starte **{{game}}**. Spiel solo oder gegen Bots und **gewinn ein Match mit diesem Deck**. Änder es zwischendurch nicht und hör nach drei Matches auf, falls es nicht klappt."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["card-decks", "rounds-or-matches"],
      "match": "all"
    },
    "experience": {
      "family": "cards",
      "cardMetadata": { "genreIds": ["card"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["cards"],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "a card game with a legal deck you rarely use",
          "de": "ein Kartenspiel mit einem gültigen Deck, das du selten spielst",
          "chips": {"en": ["Rarely used deck"], "de": ["Selten genutztes Deck"]},
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
    "id": "challenge-random-fighter",
    "moodIds": ["challenge"],
    "type": "challenge",
    "tags": ["one-round", "three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Random Fighter",
        "objective": "Open **a fighting game with random character select**. Accept the first random character and **win one round, or finish three rounds** without rerolling.",
        "gameObjective": "Open **{{game}}**. Accept the first random character and **win one round, or finish three rounds** without rerolling."
      },
      "de": {
        "name": "Zufällige Figur",
        "objective": "Starte **ein Kampfspiel mit zufälliger Figurenwahl**. Nimm die erste zufällig gewählte Figur und **gewinn eine Runde mit ihr**. Wähl nicht neu und hör nach drei Runden auf, falls es nicht klappt.",
        "gameObjective": "Starte **{{game}}**. Nimm die erste zufällig gewählte Figur und **gewinn eine Runde mit ihr**. Wähl nicht neu und hör nach drei Runden auf, falls es nicht klappt."
      }
    },
    "experience": {
      "family": "random-fighter",
      "cardMetadata": { "genreIds": ["fighting"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["abilities"],
      "rules": ["one-round", "three-attempts"],
      "prerequisites": [
        {
          "en": "a fighting game with random character select",
          "de": "ein Kampfspiel mit zufälliger Figurenwahl",
          "chips": {"en": ["Random character"], "de": ["Zufallsfigur"]},
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
    "id": "challenge-first-drop-only",
    "moodIds": ["challenge"],
    "type": "challenge",
    "tags": ["one-weapon", "one-life"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "First Drop Only",
        "objective": "Open **a solo roguelike with weapon drops**. Keep the first usable weapon you receive and **clear the first stage, or finish three runs** without replacing it.",
        "gameObjective": "Open **{{game}}**. Keep the first usable weapon you receive and **clear the first stage, or finish three runs** without replacing it."
      },
      "de": {
        "name": "Nur der erste Fund",
        "objective": "Starte **ein Solo-Roguelike mit Waffenfunden**. Behalte die erste Waffe, die du benutzen kannst, und **schaff den ersten Abschnitt, ohne sie auszutauschen**. Wenn es nicht klappt, hör nach drei Runs auf.",
        "gameObjective": "Starte **{{game}}**. Behalte die erste Waffe, die du benutzen kannst, und **schaff den ersten Abschnitt, ohne sie auszutauschen**. Wenn es nicht klappt, hör nach drei Runs auf."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["weapon-pickups", "combat-loadouts", "missions-or-levels"]
    },
    "experience": {
      "family": "first-drop",
      "cardMetadata": { "genreIds": ["roguelike"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["one-weapon", "one-life"],
      "prerequisites": [
        {
          "de": "Solo-Roguelike mit Waffenfunden im ersten Abschnitt",
          "en": "Solo roguelike with weapon drops in its first stage",
          "chips": {"en": ["Weapon drops"], "de": ["Waffenfunde"]},
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
    "gameGenreIds": ["roguelike"]
  },
  {
    "id": "challenge-hold-the-lead",
    "moodIds": ["challenge"],
    "type": "challenge",
    "tags": ["three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Hold the Lead",
        "objective": "Open **a sports game with short CPU matches**. Take the lead, then **finish the match without falling behind again, or complete three matches**.",
        "gameObjective": "Open **{{game}}**. Against the CPU, take the lead, then **finish the match without falling behind again, or complete three matches**."
      },
      "de": {
        "name": "Führung halten",
        "objective": "Starte **ein Sportspiel mit kurzen Matches gegen die CPU**. Geh gegen die CPU in Führung und **bring das Match zu Ende, ohne noch einmal zurückzuliegen**. Wenn es nicht klappt, hör nach drei Matches auf.",
        "gameObjective": "Starte **{{game}}**. Geh gegen die CPU in Führung und **bring das Match zu Ende, ohne noch einmal zurückzuliegen**. Wenn es nicht klappt, hör nach drei Matches auf."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["sports-goals", "rounds-or-matches", "bot-modes"]
    },
    "experience": {
      "family": "lead-defense",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "a sports game with short CPU matches",
          "de": "ein Sportspiel mit kurzen Matches gegen die CPU",
          "chips": {"en": ["CPU matches"], "de": ["CPU-Matches"]},
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
    "gameGenreIds": ["sports"]
  },
  {
    "id": "challenge-no-reinforcements",
    "moodIds": ["challenge"],
    "type": "challenge",
    "tags": ["units", "three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "No Reinforcements",
        "objective": "Open **a strategy game with a short replayable scenario and recruitment**. Use only the units present at the start and **win without recruiting or summoning, or finish three attempts**.",
        "gameObjective": "Open **{{game}}**. Use only the units present at the start and **win without recruiting or summoning, or finish three attempts**."
      },
      "de": {
        "name": "Ohne Verstärkung",
        "objective": "Starte **ein Strategiespiel mit einem kurzen, erneut spielbaren Szenario und Rekrutierung**. Spiel nur mit den Einheiten, die du am Anfang hast, und **gewinn ohne neue Einheiten zu rekrutieren oder zu beschwören**. Wenn es nicht klappt, hör nach drei Versuchen auf.",
        "gameObjective": "Starte **{{game}}**. Spiel nur mit den Einheiten, die du am Anfang hast, und **gewinn ohne neue Einheiten zu rekrutieren oder zu beschwören**. Wenn es nicht klappt, hör nach drei Versuchen auf."
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
          "en": "a strategy game with a short replayable scenario and recruitment",
          "de": "ein Strategiespiel mit einem kurzen, erneut spielbaren Szenario und Rekrutierung",
          "chips": {"en": ["Recruitment"], "de": ["Rekrutierung"]},
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
    "id": "challenge-bronze-time",
    "moodIds": ["challenge"],
    "type": "challenge",
    "tags": ["time-trial", "three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Beat Bronze",
        "objective": "Open **a game with an unlocked time trial and bronze target**. Use any legal setup and **beat the bronze target, or finish three timed attempts**.",
        "gameObjective": "Open **{{game}}**. Use any legal setup and **beat the bronze target, or finish three timed attempts**."
      },
      "de": {
        "name": "Bronze schlagen",
        "objective": "Starte **ein Spiel mit freigeschaltetem Zeitrennen und Bronze-Ziel**. Nimm eine erlaubte Ausrüstung und **unterbiete die Bronzezeit**. Wenn es nicht klappt, hör nach drei Läufen auf.",
        "gameObjective": "Starte **{{game}}**. Nimm eine erlaubte Ausrüstung und **unterbiete die Bronzezeit**. Wenn es nicht klappt, hör nach drei Läufen auf."
      }
    },
    "experience": {
      "family": "time-trial",
      "cardMetadata": { "genreIds": ["racing", "platformer"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["time-trial"],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "a game with an unlocked time trial and bronze target",
          "de": "ein Spiel mit freigeschaltetem Zeitrennen und Bronze-Ziel",
          "chips": {"en": ["Bronze target"], "de": ["Bronze-Ziel"]},
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
    "gameGenreIds": ["racing", "platformer"],
    "customGameOverrideOnly": true
  },
  {
    "id": "challenge-found-weapon",
    "moodIds": ["challenge"],
    "type": "challenge",
    "tags": ["loadout", "one-weapon"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Found on the Way",
        "objective": "Open **a solo combat game with weapon pickups in a reachable area**. Pick up one weapon you find during this session and **win the next ordinary encounter using that weapon for damage**. Keep your stored gear out of that fight.",
        "gameObjective": "Open **{{game}}**. Pick up one weapon you find during this session and **win the next ordinary encounter using that weapon for damage**. Keep your stored gear out of that fight."
      },
      "de": {
        "name": "Unterwegs gefunden",
        "objective": "Starte **ein Solo-Kampfspiel mit Waffenfunden in einem erreichbaren Gebiet**. Nimm eine Waffe, die du in dieser Session findest, und **gewinn den nächsten normalen Kampf, indem du nur mit ihr Schaden machst**. Deine mitgebrachten Waffen bleiben draußen.",
        "gameObjective": "Starte **{{game}}**. Nimm eine Waffe, die du in dieser Session findest, und **gewinn den nächsten normalen Kampf, indem du nur mit ihr Schaden machst**. Deine mitgebrachten Waffen bleiben draußen."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": ["weapon-pickups", "combat-loadouts"]
    },
    "experience": {
      "family": "found-weapon-fight",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["loadout"],
      "rules": ["one-weapon"],
      "prerequisites": [
        {
          "en": "a solo combat game with weapon pickups in a reachable area",
          "de": "ein Solo-Kampfspiel mit Waffenfunden in einem erreichbaren Gebiet",
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
    "gameGenreIds": ["shooter", "rpg", "survival"]
  },
  {
    "id": "challenge-one-lane-hold",
    "moodIds": ["challenge"],
    "type": "challenge",
    "tags": ["units", "three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "translations": {
      "en": {
        "name": "Hold One Lane",
        "objective": "Open **a strategy game with a short replayable defense scenario**. Defend one approach with a fixed group of units and **finish the scenario without moving that group to another lane**, or stop after three attempts.",
        "gameObjective": "Open **{{game}}**. Defend one approach with a fixed group of units and **finish the scenario without moving that group to another lane**, or stop after three attempts."
      },
      "de": {
        "name": "Eine Linie halten",
        "objective": "Starte **ein Strategiespiel mit einem kurzen wiederholbaren Verteidigungsszenario**. Verteidige einen Zugang mit einer festen Einheitengruppe und **beende das Szenario, ohne die Gruppe auf eine andere Linie zu verlegen**, oder hör nach drei Versuchen auf.",
        "gameObjective": "Starte **{{game}}**. Verteidige einen Zugang mit einer festen Einheitengruppe und **beende das Szenario, ohne die Gruppe auf eine andere Linie zu verlegen**, oder hör nach drei Versuchen auf."
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
          "en": "a strategy game with a short replayable defense scenario",
          "de": "ein Strategiespiel mit einem kurzen wiederholbaren Verteidigungsszenario",
          "chips": {"en": ["Defense scenario"], "de": ["Verteidigungsszenario"]},
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
    "id": "break-the-patrol",
    "moodIds": ["challenge", "focused"],
    "type": "challenge",
    "tags": ["stealth", "no-detection", "three-attempts"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "customGameCompatibility": {
      "capabilityIds": ["moving-patrols", "stealth-takedowns", "stealth"]
    },
    "translations": {
      "en": {
        "name": "Break the Patrol",
        "objective": "Open a **game with patrols and stealth takedowns**. Wait for a guard to fall behind, **take them out and leave unseen**. Try up to three times.",
        "gameObjective": "In **{{game}}**, wait for a guard to fall behind, **take them out and leave unseen**. Try up to three times."
      },
      "de": {
        "name": "Die Patrouille aufbrechen",
        "objective": "Starte ein **Spiel mit Patrouillen und lautlosen Angriffen**. Warte, bis eine Wache zurückfällt, **schalte sie aus und verschwinde unbemerkt**. Bis zu drei Versuche.",
        "gameObjective": "Warte in **{{game}}**, bis eine Wache zurückfällt, **schalte sie aus und verschwinde unbemerkt**. Bis zu drei Versuche."
      }
    },
    "experience": {
      "family": "stealth-takedown",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["stealth"],
      "rules": ["no-detection", "three-attempts"],
      "prerequisites": [
        {
          "en": "Moving patrol; takedown available",
          "de": "Bewegliche Patrouille; lautloser Angriff verfügbar",
          "chips": {"en": ["Patrol", "Takedown"], "de": ["Patrouille", "Takedown"]},
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
    "gameGenreIds": ["stealth", "shooter", "rpg"]
  }
]);
