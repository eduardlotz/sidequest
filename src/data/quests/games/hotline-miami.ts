import { defineQuests } from "../defineQuests";

export const GamesHotlineMiamiQuests = defineQuests([
  {
    "id": "hotline-miami-hm1-mask-run",
    "moodIds": ["focused"],
    "type": "experiment",
    "tags": ["loadout", "replay"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "hotline-miami",
      "installmentIds": ["hotline-miami-1"]
    },
    "translations": {
      "en": {
        "name": "Mask for the Run",
        "objective": "For an unlocked chapter in **Hotline Miami**, choose a mask you rarely use. **Play through to the score screen while trying its effect**.",
        "gameObjective": "For an unlocked chapter in **Hotline Miami**, choose a mask you rarely use. **Play through to the score screen while trying its effect**."
      },
      "de": {
        "name": "Maske für den Lauf",
        "objective": "Wähl für ein freigeschaltetes Kapitel in **Hotline Miami** eine Maske, die du selten benutzt. **Spiel das Kapitel mit ihrer Wirkung im Blick bis zur Punkteübersicht**.",
        "gameObjective": "Wähl für ein freigeschaltetes Kapitel in **Hotline Miami** eine Maske, die du selten benutzt. **Spiel das Kapitel mit ihrer Wirkung im Blick bis zur Punkteübersicht**."
      }
    },
    "experience": {
      "family": "mask-chapter",
      "cardMetadata": { "genreIds": ["shooter"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["loadout"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Freigeschaltetes Kapitel; selten genutzte Maske mit nutzbarer Wirkung",
          "en": "Unlocked chapter; rarely used mask with usable effect",
          "chips": {"en": ["Rare mask"], "de": ["Seltene Maske"]},
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
    "id": "hotline-miami-hm1-melee-first",
    "moodIds": ["challenge", "focused"],
    "type": "challenge",
    "tags": ["three-attempts"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "hotline-miami",
      "installmentIds": ["hotline-miami-1"]
    },
    "translations": {
      "en": {
        "name": "Melee First",
        "objective": "Start an unlocked **Hotline Miami** chapter with a melee weapon available. **Clear the chapter using no firearm**, or stop after three attempts.",
        "gameObjective": "Start an unlocked **Hotline Miami** chapter with a melee weapon available. **Clear the chapter using no firearm**, or stop after three attempts."
      },
      "de": {
        "name": "Erst im Nahkampf",
        "objective": "Starte in **Hotline Miami** ein freigeschaltetes Kapitel, in dem eine Nahkampfwaffe verfügbar ist. **Schaff das Kapitel ohne Schusswaffe** oder hör nach drei Versuchen auf.",
        "gameObjective": "Starte in **Hotline Miami** ein freigeschaltetes Kapitel, in dem eine Nahkampfwaffe verfügbar ist. **Schaff das Kapitel ohne Schusswaffe** oder hör nach drei Versuchen auf."
      }
    },
    "experience": {
      "family": "melee-clear",
      "cardMetadata": { "genreIds": ["shooter"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Unlocked chapter with melee weapon",
          "de": "Freigeschaltetes Kapitel mit Nahkampfwaffe",
          "chips": {"en": ["Melee weapon"], "de": ["Nahkampfwaffe"]},
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
    "id": "hotline-miami-hm1-room-combo",
    "moodIds": ["challenge", "restless"],
    "type": "challenge",
    "tags": ["three-attempts"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "hotline-miami",
      "installmentIds": ["hotline-miami-1"]
    },
    "translations": {
      "en": {
        "name": "Keep the Combo",
        "objective": "In an unlocked **Hotline Miami** chapter, try to defeat three enemies in one combo. **Reach the score screen after a three-enemy combo**, or finish your third attempt.",
        "gameObjective": "In an unlocked **Hotline Miami** chapter, try to defeat three enemies in one combo. **Reach the score screen after a three-enemy combo**, or finish your third attempt."
      },
      "de": {
        "name": "Die Combo halten",
        "objective": "Versuch in einem freigeschalteten **Hotline-Miami**-Kapitel, drei Gegner in einer Combo auszuschalten. **Erreiche nach einer Drei-Gegner-Combo die Punkteübersicht** oder beende deinen dritten Versuch.",
        "gameObjective": "Versuch in einem freigeschalteten **Hotline-Miami**-Kapitel, drei Gegner in einer Combo auszuschalten. **Erreiche nach einer Drei-Gegner-Combo die Punkteübersicht** oder beende deinen dritten Versuch."
      }
    },
    "experience": {
      "family": "combo-clear",
      "cardMetadata": { "genreIds": ["shooter"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Chapter with reachable three-enemy combo",
          "de": "Kapitel mit erreichbarer Drei-Gegner-Combo",
          "chips": {"en": ["Combo opportunity"], "de": ["Combo-Gelegenheit"]},
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
    "id": "hotline-miami-hm1-new-route",
    "moodIds": ["curious", "explore"],
    "type": "experiment",
    "tags": ["new-approach"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "hotline-miami",
      "installmentIds": ["hotline-miami-1"]
    },
    "translations": {
      "en": {
        "name": "Change the Route",
        "objective": "Replay a familiar floor in **Hotline Miami**. **Use a different doorway for one room and clear the floor along that route**.",
        "gameObjective": "Replay a familiar floor in **Hotline Miami**. **Use a different doorway for one room and clear the floor along that route**."
      },
      "de": {
        "name": "Anderer Weg durchs Haus",
        "objective": "Spiel in **Hotline Miami** eine bekannte Etage erneut. **Nimm für einen Raum einen anderen Eingang als sonst und räume die Etage über diese Route**.",
        "gameObjective": "Spiel in **Hotline Miami** eine bekannte Etage erneut. **Nimm für einen Raum einen anderen Eingang als sonst und räume die Etage über diese Route**."
      }
    },
    "experience": {
      "family": "alternate-entry",
      "cardMetadata": { "genreIds": ["shooter"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "en": "Cleared chapter with alternate doorway",
          "de": "Geschafftes Kapitel mit alternativem Eingang",
          "chips": {"en": ["Alternate doorway"], "de": ["Alternativer Eingang"]},
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
    "id": "hotline-miami-hm1-piece-hunt",
    "moodIds": ["explore"],
    "type": "objective",
    "tags": ["collectibles"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "hotline-miami",
      "installmentIds": ["hotline-miami-1"]
    },
    "translations": {
      "en": {
        "name": "Find a Puzzle Piece",
        "objective": "Choose an unlocked **Hotline Miami** chapter that still has a puzzle piece to find. Search the rooms and **collect one piece**, then reach the score screen.",
        "gameObjective": "Choose an unlocked **Hotline Miami** chapter that still has a puzzle piece to find. Search the rooms and **collect one piece**, then reach the score screen."
      },
      "de": {
        "name": "Ein Puzzleteil finden",
        "objective": "Wähl in **Hotline Miami** ein freigeschaltetes Kapitel, in dem noch ein Puzzleteil fehlt. Durchsuch die Räume, **sammle ein Teil ein** und geh danach zur Punkteübersicht.",
        "gameObjective": "Wähl in **Hotline Miami** ein freigeschaltetes Kapitel, in dem noch ein Puzzleteil fehlt. Durchsuch die Räume, **sammle ein Teil ein** und geh danach zur Punkteübersicht."
      }
    },
    "experience": {
      "family": "puzzle-piece",
      "cardMetadata": { "genreIds": ["shooter"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["collectibles"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Chapter with uncollected puzzle piece",
          "de": "Kapitel mit fehlendem Puzzleteil",
          "chips": {"en": ["Puzzle piece"], "de": ["Puzzleteil"]},
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
    "id": "hotline-miami-hm2-character-level",
    "moodIds": ["focused"],
    "type": "objective",
    "tags": ["story"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "hotline-miami",
      "installmentIds": ["hotline-miami-2"]
    },
    "translations": {
      "en": {
        "name": "Their Chapter",
        "objective": "Continue **Hotline Miami 2: Wrong Number** from an unlocked campaign chapter. **Finish the chapter with its assigned character** and reach the score screen.",
        "gameObjective": "Continue **Hotline Miami 2: Wrong Number** from an unlocked campaign chapter. **Finish the chapter with its assigned character** and reach the score screen."
      },
      "de": {
        "name": "Das Kapitel der Figur",
        "objective": "Setz **Hotline Miami 2: Wrong Number** in einem freigeschalteten Kampagnenkapitel fort. **Beende das Kapitel mit der vorgegebenen Figur** und geh zur Punkteübersicht.",
        "gameObjective": "Setz **Hotline Miami 2: Wrong Number** in einem freigeschalteten Kampagnenkapitel fort. **Beende das Kapitel mit der vorgegebenen Figur** und geh zur Punkteübersicht."
      }
    },
    "experience": {
      "family": "campaign-chapter",
      "cardMetadata": { "genreIds": ["shooter"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Unlocked campaign chapter",
          "de": "Freigeschaltetes Kampagnenkapitel",
          "chips": {"en": ["Campaign chapter"], "de": ["Kampagnenkapitel"]},
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
    "id": "hotline-miami-hm2-sons-style",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["new-approach"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "hotline-miami",
      "installmentIds": ["hotline-miami-2"]
    },
    "translations": {
      "en": {
        "name": "Try the Son’s Style",
        "objective": "Choose an unlocked **Hotline Miami 2** chapter where you play as The Son. Select a fighting style you have not used in that chapter and **clear it**.",
        "gameObjective": "Choose an unlocked **Hotline Miami 2** chapter where you play as The Son. Select a fighting style you have not used in that chapter and **clear it**."
      },
      "de": {
        "name": "Der Stil des Sohnes",
        "objective": "Wähl in **Hotline Miami 2** ein freigeschaltetes Kapitel, in dem du den Sohn spielst. Such einen Kampfstil aus, den du dort noch nicht genutzt hast, und **schaff das Kapitel**.",
        "gameObjective": "Wähl in **Hotline Miami 2** ein freigeschaltetes Kapitel, in dem du den Sohn spielst. Such einen Kampfstil aus, den du dort noch nicht genutzt hast, und **schaff das Kapitel**."
      }
    },
    "experience": {
      "family": "fighting-style",
      "cardMetadata": { "genreIds": ["shooter"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "en": "Unlocked Son chapter; unused fighting style",
          "de": "Freigeschaltetes Sohn-Kapitel; ungenutzter Kampfstil",
          "chips": {"en": ["Son chapter", "Fighting style"], "de": ["Sohn-Kapitel", "Kampfstil"]},
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
    "id": "hotline-miami-hm2-tony-fists",
    "moodIds": ["challenge", "focused"],
    "type": "challenge",
    "tags": ["three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "hotline-miami",
      "installmentIds": ["hotline-miami-2"]
    },
    "translations": {
      "en": {
        "name": "Tony Uses His Fists",
        "objective": "In an unlocked Fans chapter, choose Tony and **clear one floor with his fists without picking up a weapon**. Stop after three attempts.",
        "gameObjective": "In an unlocked Fans chapter, choose Tony and **clear one floor with his fists without picking up a weapon**. Stop after three attempts."
      },
      "de": {
        "name": "Tony boxt sich durch",
        "objective": "Wähl in einem freigeschalteten Fans-Kapitel Tony und **räume eine Etage nur mit seinen Fäusten, ohne eine Waffe aufzuheben**. Höre nach drei Versuchen auf.",
        "gameObjective": "Wähl in einem freigeschalteten Fans-Kapitel Tony und **räume eine Etage nur mit seinen Fäusten, ohne eine Waffe aufzuheben**. Höre nach drei Versuchen auf."
      }
    },
    "experience": {
      "family": "fists-clear",
      "cardMetadata": { "genreIds": ["shooter"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Unlocked Fans chapter with Tony",
          "de": "Freigeschaltetes Fans-Kapitel mit Tony",
          "chips": {"en": ["Tony"], "de": ["Tony"]},
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
    "id": "hotline-miami-hm2-hard-mode",
    "moodIds": ["challenge", "focused"],
    "type": "challenge",
    "tags": ["three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "hotline-miami",
      "installmentIds": ["hotline-miami-2"]
    },
    "translations": {
      "en": {
        "name": "Hard Mode Run",
        "objective": "Choose an unlocked **Hotline Miami 2** chapter where Hard mode is available and start it on Hard. **Clear the chapter, or stop after three attempts.**",
        "gameObjective": "Choose an unlocked **Hotline Miami 2** chapter where Hard mode is available and start it on Hard. **Clear the chapter, or stop after three attempts.**"
      },
      "de": {
        "name": "Lauf im schweren Modus",
        "objective": "Wähl in **Hotline Miami 2** ein freigeschaltetes Kapitel, für das der schwere Modus verfügbar ist, und starte es damit. **Schaff das Kapitel oder hör nach drei Versuchen auf.**",
        "gameObjective": "Wähl in **Hotline Miami 2** ein freigeschaltetes Kapitel, für das der schwere Modus verfügbar ist, und starte es damit. **Schaff das Kapitel oder hör nach drei Versuchen auf.**"
      }
    },
    "experience": {
      "family": "hard-mode",
      "cardMetadata": { "genreIds": ["shooter"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Hard mode unlocked",
          "de": "Hard-Modus freigeschaltet",
          "chips": {"en": ["Hard mode"], "de": ["Hard-Modus"]},
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
    "id": "hotline-miami-hm1-richard-tony-fists",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["abilities"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "hotline-miami",
      "installmentIds": ["hotline-miami-1"]
    },
    "translations": {
      "en": {
        "name": "What Tony Changes",
        "objective": "With **Tony unlocked in Hotline Miami**, enter the same unlocked room once with Richard and once with Tony. **Punch an ordinary enemy on each attempt** and compare the knockdown with the lethal hit. Deaths end each attempt.",
        "gameObjective": "With **Tony unlocked in Hotline Miami**, enter the same unlocked room once with Richard and once with Tony. **Punch an ordinary enemy on each attempt** and compare the knockdown with the lethal hit. Deaths end each attempt."
      },
      "de": {
        "name": "Was Tony ändert",
        "objective": "Betritt in **Hotline Miami mit freigeschaltetem Tony** denselben freigeschalteten Raum einmal mit Richard und einmal mit Tony. **Schlag in beiden Versuchen einen normalen Gegner** und vergleiche Umwerfen und tödlichen Treffer. Ein Tod beendet den jeweiligen Versuch.",
        "gameObjective": "Betritt in **Hotline Miami mit freigeschaltetem Tony** denselben freigeschalteten Raum einmal mit Richard und einmal mit Tony. **Schlag in beiden Versuchen einen normalen Gegner** und vergleiche Umwerfen und tödlichen Treffer. Ein Tod beendet den jeweiligen Versuch."
      }
    },
    "experience": {
      "family": "fist-comparison",
      "cardMetadata": { "genreIds": ["shooter"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["abilities"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Tony mask unlocked",
          "de": "Tony-Maske freigeschaltet",
          "chips": {"en": ["Tony mask"], "de": ["Tony-Maske"]},
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
    "id": "hotline-miami-hm1-don-juan-door",
    "moodIds": ["focused", "challenge"],
    "type": "challenge",
    "tags": ["abilities", "three-attempts"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "hotline-miami",
      "installmentIds": ["hotline-miami-1"]
    },
    "translations": {
      "en": {
        "name": "The Door Is Lethal",
        "objective": "With **Don Juan unlocked in Hotline Miami**, choose a chapter with an enemy standing behind a door. **Kill that enemy by opening the door and escape that room alive**, or stop after three attempts.",
        "gameObjective": "With **Don Juan unlocked in Hotline Miami**, choose a chapter with an enemy standing behind a door. **Kill that enemy by opening the door and escape that room alive**, or stop after three attempts."
      },
      "de": {
        "name": "Die Tür ist tödlich",
        "objective": "Wähl in **Hotline Miami mit freigeschaltetem Don Juan** ein Kapitel mit einem Gegner hinter einer Tür. **Schalte ihn durch Öffnen der Tür aus und verlass den Raum lebend** oder hör nach drei Versuchen auf.",
        "gameObjective": "Wähl in **Hotline Miami mit freigeschaltetem Don Juan** ein Kapitel mit einem Gegner hinter einer Tür. **Schalte ihn durch Öffnen der Tür aus und verlass den Raum lebend** oder hör nach drei Versuchen auf."
      }
    },
    "experience": {
      "family": "lethal-door",
      "cardMetadata": { "genreIds": ["shooter"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["abilities"],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Don Juan unlocked; enemy behind door",
          "de": "Don Juan freigeschaltet; Gegner hinter Tür",
          "chips": {"en": ["Don Juan", "Enemy behind door"], "de": ["Don Juan", "Gegner hinter Tür"]},
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
    "id": "hotline-miami-hm1-ted-pass-the-dog",
    "moodIds": ["explore", "curious"],
    "type": "experiment",
    "tags": ["abilities"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "hotline-miami",
      "installmentIds": ["hotline-miami-1"]
    },
    "translations": {
      "en": {
        "name": "Walk Past the Dog",
        "objective": "With **Ted unlocked in Hotline Miami**, choose an unlocked floor with a dog and another reachable room. **Try moving past the dog before attacking anyone**, and see which doorway becomes reachable. Stop if killed.",
        "gameObjective": "With **Ted unlocked in Hotline Miami**, choose an unlocked floor with a dog and another reachable room. **Try moving past the dog before attacking anyone**, and see which doorway becomes reachable. Stop if killed."
      },
      "de": {
        "name": "Am Hund vorbeigehen",
        "objective": "Wähl in **Hotline Miami mit freigeschaltetem Ted** eine freigeschaltete Etage mit Hund und einem weiteren erreichbaren Raum. **Probier, am Hund vorbeizugehen, bevor du jemanden angreifst**, und schau nach erreichbaren Türen. Hör beim Tod auf.",
        "gameObjective": "Wähl in **Hotline Miami mit freigeschaltetem Ted** eine freigeschaltete Etage mit Hund und einem weiteren erreichbaren Raum. **Probier, am Hund vorbeizugehen, bevor du jemanden angreifst**, und schau nach erreichbaren Türen. Hör beim Tod auf."
      }
    },
    "experience": {
      "family": "dog-passage",
      "cardMetadata": { "genreIds": ["shooter"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["abilities"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Ted unlocked; floor with dog",
          "de": "Ted freigeschaltet; Etage mit Hund",
          "chips": {"en": ["Ted", "Dog"], "de": ["Ted", "Hund"]},
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
    "id": "hotline-miami-hm1-peter-quiet-shot",
    "moodIds": ["focused", "curious"],
    "type": "experiment",
    "tags": ["abilities"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "hotline-miami",
      "installmentIds": ["hotline-miami-1"]
    },
    "translations": {
      "en": {
        "name": "A Quiet Gunshot",
        "objective": "With **Peter unlocked in Hotline Miami**, take one shot in an unlocked room, then repeat the entry with Richard. **Try both shots and compare which enemies react**, stopping each attempt if killed.",
        "gameObjective": "With **Peter unlocked in Hotline Miami**, take one shot in an unlocked room, then repeat the entry with Richard. **Try both shots and compare which enemies react**, stopping each attempt if killed."
      },
      "de": {
        "name": "Ein leiser Schuss",
        "objective": "Schieß in **Hotline Miami mit freigeschaltetem Peter** einmal in einem freigeschalteten Raum und wiederhole den Einstieg mit Richard. **Probier beide Schüsse und vergleiche die reagierenden Gegner**. Ein Tod beendet den jeweiligen Versuch.",
        "gameObjective": "Schieß in **Hotline Miami mit freigeschaltetem Peter** einmal in einem freigeschalteten Raum und wiederhole den Einstieg mit Richard. **Probier beide Schüsse und vergleiche die reagierenden Gegner**. Ein Tod beendet den jeweiligen Versuch."
      }
    },
    "experience": {
      "family": "quiet-shot",
      "cardMetadata": { "genreIds": ["shooter"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["abilities"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Peter unlocked; firearm available",
          "de": "Peter freigeschaltet; Schusswaffe verfügbar",
          "chips": {"en": ["Peter", "Firearm"], "de": ["Peter", "Schusswaffe"]},
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
    "id": "hotline-miami-hm1-willem-weapon-steal",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["abilities"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "hotline-miami",
      "installmentIds": ["hotline-miami-1"]
    },
    "translations": {
      "en": {
        "name": "Take Their Weapon",
        "objective": "With **Willem unlocked in Hotline Miami**, approach an armed ordinary enemy without a weapon. **Try a standing execution that steals their weapon and use the stolen weapon on the next enemy**. Stop if killed.",
        "gameObjective": "With **Willem unlocked in Hotline Miami**, approach an armed ordinary enemy without a weapon. **Try a standing execution that steals their weapon and use the stolen weapon on the next enemy**. Stop if killed."
      },
      "de": {
        "name": "Ihre Waffe nehmen",
        "objective": "Nähere dich in **Hotline Miami mit freigeschaltetem Willem** unbewaffnet einem bewaffneten normalen Gegner. **Probier einen stehenden Finisher zum Waffenklau und nutze die Waffe gegen den nächsten Gegner**. Hör beim Tod auf.",
        "gameObjective": "Nähere dich in **Hotline Miami mit freigeschaltetem Willem** unbewaffnet einem bewaffneten normalen Gegner. **Probier einen stehenden Finisher zum Waffenklau und nutze die Waffe gegen den nächsten Gegner**. Hör beim Tod auf."
      }
    },
    "experience": {
      "family": "weapon-steal",
      "cardMetadata": { "genreIds": ["shooter"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["abilities"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Willem unlocked; armed ordinary enemy",
          "de": "Willem freigeschaltet; bewaffneter gewöhnlicher Gegner",
          "chips": {"en": ["Willem", "Armed enemy"], "de": ["Willem", "Bewaffneter Gegner"]},
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
    "id": "hotline-miami-hm1-rami-ammo-room",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["abilities"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "hotline-miami",
      "installmentIds": ["hotline-miami-1"]
    },
    "translations": {
      "en": {
        "name": "One Longer Magazine",
        "objective": "With Rami unlocked in **Hotline Miami**, pick up a firearm and use it in the room. Repeat the opening with Richard and **compare the pickup ammunition for the same weapon type**. Death ends each attempt.",
        "gameObjective": "With Rami unlocked in **Hotline Miami**, pick up a firearm and use it in the room. Repeat the opening with Richard and **compare the pickup ammunition for the same weapon type**. Death ends each attempt."
      },
      "de": {
        "name": "Was ins Magazin passt",
        "objective": "Heb in **Hotline Miami** mit freigeschaltetem Rami eine Schusswaffe auf und nutze sie im Raum. Wiederhole den Einstieg mit Richard und **vergleiche die Munition beim Aufheben derselben Waffenart**. Ein Tod beendet den jeweiligen Versuch.",
        "gameObjective": "Heb in **Hotline Miami** mit freigeschaltetem Rami eine Schusswaffe auf und nutze sie im Raum. Wiederhole den Einstieg mit Richard und **vergleiche die Munition beim Aufheben derselben Waffenart**. Ein Tod beendet den jeweiligen Versuch."
      }
    },
    "experience": {
      "family": "ammunition-comparison",
      "cardMetadata": { "genreIds": ["shooter"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["abilities"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Rami unlocked; firearm available",
          "de": "Rami freigeschaltet; Schusswaffe verfügbar",
          "chips": {"en": ["Rami", "Firearm"], "de": ["Rami", "Schusswaffe"]},
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
    "id": "hotline-miami-hm1-george-see-ahead",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["scouting", "abilities"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "hotline-miami",
      "installmentIds": ["hotline-miami-1"]
    },
    "translations": {
      "en": {
        "name": "Look Past the Door",
        "objective": "With **George unlocked in Hotline Miami**, look ahead into a room before entering and note an enemy outside your normal view. **Try the entry with George and Richard once each**, comparing what you could plan beforehand.",
        "gameObjective": "With **George unlocked in Hotline Miami**, look ahead into a room before entering and note an enemy outside your normal view. **Try the entry with George and Richard once each**, comparing what you could plan beforehand."
      },
      "de": {
        "name": "Hinter die Tür schauen",
        "objective": "Schau in **Hotline Miami mit freigeschaltetem George** vor dem Betreten in einen Raum und such einen Gegner außerhalb des üblichen Blicks. **Probier den Einstieg je einmal mit George und Richard** und vergleiche deine Planung davor.",
        "gameObjective": "Schau in **Hotline Miami mit freigeschaltetem George** vor dem Betreten in einen Raum und such einen Gegner außerhalb des üblichen Blicks. **Probier den Einstieg je einmal mit George und Richard** und vergleiche deine Planung davor."
      }
    },
    "experience": {
      "family": "extended-look",
      "cardMetadata": { "genreIds": ["shooter"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["scouting", "abilities"],
      "rules": [],
      "prerequisites": [
        {
          "en": "George unlocked",
          "de": "George freigeschaltet",
          "chips": {"en": ["George"], "de": ["George"]},
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
    "id": "hotline-miami-hm1-brandon-fast-entry",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["abilities", "traversal"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "hotline-miami",
      "installmentIds": ["hotline-miami-1"]
    },
    "translations": {
      "en": {
        "name": "Arrive before the Patrol",
        "objective": "With **Brandon unlocked in Hotline Miami**, choose a cleared chapter with a patrolling enemy near the entrance. **Try that opening once with Brandon and once with Richard**, comparing where the patrol is when you arrive.",
        "gameObjective": "With **Brandon unlocked in Hotline Miami**, choose a cleared chapter with a patrolling enemy near the entrance. **Try that opening once with Brandon and once with Richard**, comparing where the patrol is when you arrive."
      },
      "de": {
        "name": "Vor der Patrouille ankommen",
        "objective": "Wähl in **Hotline Miami mit freigeschaltetem Brandon** ein schon geschafftes Kapitel mit Patrouille am Eingang. **Probier den Auftakt je einmal mit Brandon und Richard** und vergleiche die Position des Gegners bei deiner Ankunft.",
        "gameObjective": "Wähl in **Hotline Miami mit freigeschaltetem Brandon** ein schon geschafftes Kapitel mit Patrouille am Eingang. **Probier den Auftakt je einmal mit Brandon und Richard** und vergleiche die Position des Gegners bei deiner Ankunft."
      }
    },
    "experience": {
      "family": "speed-entry",
      "cardMetadata": { "genreIds": ["shooter"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["abilities", "traversal"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Brandon unlocked; familiar entrance patrol",
          "de": "Brandon freigeschaltet; bekannte Eingangspatrouille",
          "chips": {"en": ["Brandon", "Entrance patrol"], "de": ["Brandon", "Eingangspatrouille"]},
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
    "id": "hotline-miami-hm1-jake-empty-throw",
    "moodIds": ["challenge", "focused"],
    "type": "challenge",
    "tags": ["abilities", "three-attempts"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "hotline-miami",
      "installmentIds": ["hotline-miami-1"]
    },
    "translations": {
      "en": {
        "name": "The Empty Gun Counts",
        "objective": "With **Jake unlocked in Hotline Miami**, empty a firearm during an unlocked chapter. **Kill the next ordinary enemy by throwing that empty gun**, or stop after three attempts at the floor.",
        "gameObjective": "With **Jake unlocked in Hotline Miami**, empty a firearm during an unlocked chapter. **Kill the next ordinary enemy by throwing that empty gun**, or stop after three attempts at the floor."
      },
      "de": {
        "name": "Die leere Waffe zählt",
        "objective": "Leer in **Hotline Miami mit freigeschaltetem Jake** in einem freigeschalteten Kapitel eine Schusswaffe. **Schalte den nächsten normalen Gegner mit einem Wurf der leeren Waffe aus** oder hör nach drei Etagenversuchen auf.",
        "gameObjective": "Leer in **Hotline Miami mit freigeschaltetem Jake** in einem freigeschalteten Kapitel eine Schusswaffe. **Schalte den nächsten normalen Gegner mit einem Wurf der leeren Waffe aus** oder hör nach drei Etagenversuchen auf."
      }
    },
    "experience": {
      "family": "lethal-throw",
      "cardMetadata": { "genreIds": ["shooter"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["abilities"],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Jake unlocked; firearm available",
          "de": "Jake freigeschaltet; Schusswaffe verfügbar",
          "chips": {"en": ["Jake", "Firearm"], "de": ["Jake", "Schusswaffe"]},
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
    "id": "hotline-miami-hm1-carl-drill-open",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["abilities"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "hotline-miami",
      "installmentIds": ["hotline-miami-1"]
    },
    "translations": {
      "en": {
        "name": "Use the Drill",
        "objective": "With Carl unlocked in **Hotline Miami**, start a chapter with his drill. **Try a drill execution on a knocked-down enemy**. Death ends the attempt.",
        "gameObjective": "With Carl unlocked in **Hotline Miami**, start a chapter with his drill. **Try a drill execution on a knocked-down enemy**. Death ends the attempt."
      },
      "de": {
        "name": "Den Bohrer nutzen",
        "objective": "Starte in **Hotline Miami** mit freigeschaltetem Carl ein Kapitel mit seinem Bohrer. **Probier einen Bohrer-Finisher an einem umgeworfenen Gegner**. Ein Tod beendet den Versuch.",
        "gameObjective": "Starte in **Hotline Miami** mit freigeschaltetem Carl ein Kapitel mit seinem Bohrer. **Probier einen Bohrer-Finisher an einem umgeworfenen Gegner**. Ein Tod beendet den Versuch."
      }
    },
    "experience": {
      "family": "drill-execution",
      "cardMetadata": { "genreIds": ["shooter"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["abilities"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Carl unlocked",
          "de": "Carl freigeschaltet",
          "chips": {"en": ["Carl"], "de": ["Carl"]},
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
    "id": "hotline-miami-hm1-richter-quiet-opening",
    "moodIds": ["focused"],
    "type": "objective",
    "tags": ["abilities"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "hotline-miami",
      "installmentIds": ["hotline-miami-1"]
    },
    "translations": {
      "en": {
        "name": "The Starting Uzi",
        "objective": "With **Richter unlocked in Hotline Miami**, use his starting silenced Uzi for the opening encounter of a cleared chapter. **Play that floor until cleared or killed**, looking for enemies you can reach before swapping weapons.",
        "gameObjective": "With **Richter unlocked in Hotline Miami**, use his starting silenced Uzi for the opening encounter of a cleared chapter. **Play that floor until cleared or killed**, looking for enemies you can reach before swapping weapons."
      },
      "de": {
        "name": "Die Uzi zum Start",
        "objective": "Nutze in **Hotline Miami mit freigeschaltetem Richter** seine schallgedämpfte Start-Uzi für den Auftaktkampf eines schon geschafften Kapitels. **Spiel die Etage bis zum Abschluss oder Tod** und such erreichbare Gegner vor einem Waffenwechsel.",
        "gameObjective": "Nutze in **Hotline Miami mit freigeschaltetem Richter** seine schallgedämpfte Start-Uzi für den Auftaktkampf eines schon geschafften Kapitels. **Spiel die Etage bis zum Abschluss oder Tod** und such erreichbare Gegner vor einem Waffenwechsel."
      }
    },
    "experience": {
      "family": "starting-uzi",
      "cardMetadata": { "genreIds": ["shooter"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["abilities"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Richter unlocked; cleared chapter",
          "de": "Richter freigeschaltet; geschafftes Kapitel",
          "chips": {"en": ["Richter", "Chapter"], "de": ["Richter", "Geschafftes Kapitel"]},
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
    "id": "hotline-miami-hm1-oscar-dark-route",
    "moodIds": ["challenge", "focused"],
    "type": "challenge",
    "tags": ["abilities", "three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "hotline-miami",
      "installmentIds": ["hotline-miami-1"]
    },
    "translations": {
      "en": {
        "name": "In the Dark",
        "objective": "With **Oscar unlocked in Hotline Miami**, choose a short floor you already know. **Clear it with Oscar’s darkened view**, or stop after three attempts.",
        "gameObjective": "With **Oscar unlocked in Hotline Miami**, choose a short floor you already know. **Clear it with Oscar’s darkened view**, or stop after three attempts."
      },
      "de": {
        "name": "Im Dunkeln kennen",
        "objective": "Wähl in **Hotline Miami mit freigeschaltetem Oscar** eine kurze Etage, die du schon kennst. **Schaff sie mit Oscars verdunkelter Sicht** oder hör nach drei Versuchen auf.",
        "gameObjective": "Wähl in **Hotline Miami mit freigeschaltetem Oscar** eine kurze Etage, die du schon kennst. **Schaff sie mit Oscars verdunkelter Sicht** oder hör nach drei Versuchen auf."
      }
    },
    "experience": {
      "family": "dark-view",
      "cardMetadata": { "genreIds": ["shooter"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["abilities"],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Oscar unlocked; familiar short floor",
          "de": "Oscar freigeschaltet; vertraute kurze Etage",
          "chips": {"en": ["Oscar", "Short floor"], "de": ["Oscar", "Kurze Etage"]},
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
    "id": "hotline-miami-hm1-full-house-sewer",
    "moodIds": ["explore", "focused"],
    "type": "objective",
    "tags": ["collectibles", "story"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "hotline-miami",
      "installmentIds": ["hotline-miami-1"]
    },
    "translations": {
      "en": {
        "name": "Below Full House",
        "objective": "With **Full House unlocked in Hotline Miami and its sewer mask still uncollected**, clear the chapter, take the first-floor crowbar outside, and **open the manhole to collect the mask below**.",
        "gameObjective": "With **Full House unlocked in Hotline Miami and its sewer mask still uncollected**, clear the chapter, take the first-floor crowbar outside, and **open the manhole to collect the mask below**."
      },
      "de": {
        "name": "Unter Full House",
        "objective": "Spiel in **Hotline Miami mit freigeschaltetem Full House und noch fehlender Kanalisationsmaske** das Kapitel frei. Nimm die Brechstange aus Etage eins mit hinaus und **öffne den Gully, um unten die Maske einzusammeln**.",
        "gameObjective": "Spiel in **Hotline Miami mit freigeschaltetem Full House und noch fehlender Kanalisationsmaske** das Kapitel frei. Nimm die Brechstange aus Etage eins mit hinaus und **öffne den Gully, um unten die Maske einzusammeln**."
      }
    },
    "experience": {
      "family": "hidden-mask",
      "cardMetadata": { "genreIds": ["shooter"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["collectibles", "story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Full House unlocked; sewer mask missing",
          "de": "Full House freigeschaltet; Kanalisationsmaske fehlt",
          "chips": {"en": ["Full House"], "de": ["Full House"]},
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
    "id": "hotline-miami-hm1-password-resolution",
    "moodIds": ["progress", "curious"],
    "type": "objective",
    "tags": ["puzzles", "story"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "hotline-miami",
      "installmentIds": ["hotline-miami-1"]
    },
    "translations": {
      "en": {
        "name": "Use the Password",
        "objective": "With **all puzzle pieces collected and Resolution unlocked in Hotline Miami**, solve the collected letters into the computer password. **Enter it in Biker’s final chapter and follow the revealed dialogue**.",
        "gameObjective": "With **all puzzle pieces collected and Resolution unlocked in Hotline Miami**, solve the collected letters into the computer password. **Enter it in Biker’s final chapter and follow the revealed dialogue**."
      },
      "de": {
        "name": "Das Passwort nutzen",
        "objective": "Setz in **Hotline Miami mit allen gesammelten Puzzleteilen und freigeschaltetem Resolution** die Buchstaben zum Computerpasswort zusammen. **Gib es in Bikers letztem Kapitel ein und folge dem neuen Dialog**.",
        "gameObjective": "Setz in **Hotline Miami mit allen gesammelten Puzzleteilen und freigeschaltetem Resolution** die Buchstaben zum Computerpasswort zusammen. **Gib es in Bikers letztem Kapitel ein und folge dem neuen Dialog**."
      }
    },
    "experience": {
      "family": "password",
      "cardMetadata": { "genreIds": ["shooter"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["puzzles", "story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "All puzzle pieces; Resolution unlocked",
          "de": "Alle Puzzleteile; Resolution freigeschaltet",
          "chips": {"en": ["All puzzle pieces", "Resolution"], "de": ["Alle Puzzleteile", "Resolution"]},
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
    "rarity": "special"
  },
  {
    "id": "hotline-miami-hm1-overdose-hotwater",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["new-approach"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "hotline-miami",
      "installmentIds": ["hotline-miami-1"]
    },
    "translations": {
      "en": {
        "name": "The Pot in Overdose",
        "objective": "In **Hotline Miami’s unlocked Overdose chapter**, find the pot of boiling water. **Try throwing it at an ordinary enemy**. Death ends the attempt.",
        "gameObjective": "In **Hotline Miami’s unlocked Overdose chapter**, find the pot of boiling water. **Try throwing it at an ordinary enemy**. Death ends the attempt."
      },
      "de": {
        "name": "Der Topf in Overdose",
        "objective": "Such im freigeschalteten **Hotline-Miami-Kapitel Overdose** den Topf mit kochendem Wasser. **Probier einen Wurf auf einen normalen Gegner**. Ein Tod beendet den Versuch.",
        "gameObjective": "Such im freigeschalteten **Hotline-Miami-Kapitel Overdose** den Topf mit kochendem Wasser. **Probier einen Wurf auf einen normalen Gegner**. Ein Tod beendet den Versuch."
      }
    },
    "experience": {
      "family": "hot-water",
      "cardMetadata": { "genreIds": ["shooter"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "en": "Overdose unlocked",
          "de": "Overdose freigeschaltet",
          "chips": {"en": ["Overdose"], "de": ["Overdose"]},
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
    "id": "hotline-miami-hm1-brick-double",
    "moodIds": ["challenge", "focused"],
    "type": "challenge",
    "tags": ["three-attempts"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "hotline-miami",
      "installmentIds": ["hotline-miami-1"]
    },
    "translations": {
      "en": {
        "name": "Two with a Brick",
        "objective": "Choose an **unlocked Hotline Miami floor with a brick available**. **Defeat two ordinary enemies with one brick throw**, or stop after three attempts at the floor.",
        "gameObjective": "Choose an **unlocked Hotline Miami floor with a brick available**. **Defeat two ordinary enemies with one brick throw**, or stop after three attempts at the floor."
      },
      "de": {
        "name": "Zwei mit einem Ziegel",
        "objective": "Wähl in **Hotline Miami eine freigeschaltete Etage mit verfügbarem Ziegel**. **Schalte zwei normale Gegner mit einem Ziegelwurf aus** oder hör nach drei Versuchen auf der Etage auf.",
        "gameObjective": "Wähl in **Hotline Miami eine freigeschaltete Etage mit verfügbarem Ziegel**. **Schalte zwei normale Gegner mit einem Ziegelwurf aus** oder hör nach drei Versuchen auf der Etage auf."
      }
    },
    "experience": {
      "family": "multi-hit-throw",
      "cardMetadata": { "genreIds": ["shooter"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Unlocked floor with brick",
          "de": "Freigeschaltete Etage mit Ziegel",
          "chips": {"en": ["Brick"], "de": ["Ziegel"]},
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
    "id": "hotline-miami-hm1-bouncing-weapon",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["new-approach"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "hotline-miami",
      "installmentIds": ["hotline-miami-1"]
    },
    "translations": {
      "en": {
        "name": "Retrieve the Bounce",
        "objective": "In an **unlocked Hotline Miami room with a throwable weapon**, throw it toward a wall from cover. **Try retrieving it after the bounce and use it in the encounter**, stopping if killed.",
        "gameObjective": "In an **unlocked Hotline Miami room with a throwable weapon**, throw it toward a wall from cover. **Try retrieving it after the bounce and use it in the encounter**, stopping if killed."
      },
      "de": {
        "name": "Den Abpraller zurückholen",
        "objective": "Wirf in einem **freigeschalteten Hotline-Miami-Raum mit werfbarer Waffe** aus der Deckung auf eine Wand. **Probier, sie nach dem Abpraller aufzuheben und im Kampf zu nutzen**. Hör beim Tod auf.",
        "gameObjective": "Wirf in einem **freigeschalteten Hotline-Miami-Raum mit werfbarer Waffe** aus der Deckung auf eine Wand. **Probier, sie nach dem Abpraller aufzuheben und im Kampf zu nutzen**. Hör beim Tod auf."
      }
    },
    "experience": {
      "family": "bounce-retrieval",
      "cardMetadata": { "genreIds": ["shooter"], "playStyleIds": [] },
      "finish": "attempt",
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
    "gameGenreIds": ["shooter"]
  },
  {
    "id": "hotline-miami-hm1-old-phone-call",
    "moodIds": ["nostalgic"],
    "type": "inspiration",
    "tags": ["replay"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "hotline-miami",
      "installmentIds": ["hotline-miami-1"]
    },
    "translations": {
      "en": {
        "name": "That Old Phone Call",
        "objective": "Return to an unlocked Hotline Miami chapter whose phone message you remember. Follow the old instructions back into that building and **rediscover the opening you used to rely on**.",
        "gameObjective": "Return to an unlocked Hotline Miami chapter whose phone message you remember. Follow the old instructions back into that building and **rediscover the opening you used to rely on**."
      },
      "de": {
        "name": "Der alte Anruf",
        "objective": "Kehr zu einem freigeschalteten Hotline-Miami-Kapitel zurück, dessen Anruf du noch kennst. Folge den alten Anweisungen wieder in das Gebäude und **schau nach deinem früheren Einstieg**.",
        "gameObjective": "Kehr zu einem freigeschalteten Hotline-Miami-Kapitel zurück, dessen Anruf du noch kennst. Folge den alten Anweisungen wieder in das Gebäude und **schau nach deinem früheren Einstieg**."
      }
    },
    "experience": {
      "family": "familiar-chapter",
      "cardMetadata": { "genreIds": ["shooter"], "playStyleIds": [] },
      "finish": "open",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "en": "Familiar unlocked phone-message chapter",
          "de": "Vertrautes freigeschaltetes Kapitel mit bekanntem Anruf",
          "chips": {"en": ["Chapter", "Remembered phone message"], "de": ["Freies Kapitel", "Anruf"]},
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
    "id": "hotline-miami-hm1-one-building-flow",
    "moodIds": ["focused", "challenge"],
    "type": "inspiration",
    "tags": ["replay"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "hotline-miami",
      "installmentIds": ["hotline-miami-1"]
    },
    "translations": {
      "en": {
        "name": "Stay with the Building",
        "objective": "Choose an unlocked Hotline Miami chapter with a layout you want to understand better. Stay with its doors, patrols, and dropped weapons. **Let each restart show you another way** through the same building.",
        "gameObjective": "Choose an unlocked Hotline Miami chapter with a layout you want to understand better. Stay with its doors, patrols, and dropped weapons. **Let each restart show you another way** through the same building."
      },
      "de": {
        "name": "Bei dem Gebäude bleiben",
        "objective": "Wähl ein freigeschaltetes Hotline-Miami-Kapitel, dessen Aufbau du besser verstehen möchtest. Bleib bei seinen Türen, Patrouillen und fallengelassenen Waffen und **lass jeden Neustart einen anderen Weg zeigen**.",
        "gameObjective": "Wähl ein freigeschaltetes Hotline-Miami-Kapitel, dessen Aufbau du besser verstehen möchtest. Bleib bei seinen Türen, Patrouillen und fallengelassenen Waffen und **lass jeden Neustart einen anderen Weg zeigen**."
      }
    },
    "experience": {
      "family": "building-replay",
      "cardMetadata": { "genreIds": ["shooter"], "playStyleIds": [] },
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
    "gameGenreIds": ["shooter"]
  },
  {
    "id": "hotline-miami-hm1-share-controller-entry",
    "moodIds": ["connect"],
    "type": "objective",
    "tags": ["local-play"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "hotline-miami",
      "installmentIds": ["hotline-miami-1"]
    },
    "translations": {
      "en": {
        "name": "Show Me Your Entry",
        "objective": "With another person sharing the controller in **Hotline Miami**, choose a cleared chapter and take one opening attempt each. **Compare which enemy each of you handled first**, whether either attempt survived.",
        "gameObjective": "With another person sharing the controller in **Hotline Miami**, choose a cleared chapter and take one opening attempt each. **Compare which enemy each of you handled first**, whether either attempt survived."
      },
      "de": {
        "name": "Zeig mir deinen Einstieg",
        "objective": "Teilt euch in **Hotline Miami** einen Controller, wählt ein schon geschafftes Kapitel und probiert beide einmal den Auftakt. **Vergleicht, welchen Gegner ihr zuerst angegangen seid**, auch wenn beide Versuche scheitern.",
        "gameObjective": "Teilt euch in **Hotline Miami** einen Controller, wählt ein schon geschafftes Kapitel und probiert beide einmal den Auftakt. **Vergleicht, welchen Gegner ihr zuerst angegangen seid**, auch wenn beide Versuche scheitern."
      }
    },
    "experience": {
      "family": "shared-entry",
      "cardMetadata": { "genreIds": ["shooter"], "playStyleIds": ["local-play"] },
      "finish": "outcome",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "en": "Second person; shared controller; cleared chapter",
          "de": "Zweite Person; geteilter Controller; geschafftes Kapitel",
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
          "mode": "Shared controller"
        }
      ]
    },
    "gameGenreIds": ["shooter"]
  },
  {
    "id": "hotline-miami-hm2-corey-roll-entry",
    "moodIds": ["challenge", "focused"],
    "type": "challenge",
    "tags": ["abilities", "three-attempts"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "hotline-miami",
      "installmentIds": ["hotline-miami-2"]
    },
    "translations": {
      "en": {
        "name": "Roll through the Shot",
        "objective": "In an **unlocked Corey scene in Hotline Miami 2**, **roll under a gunman’s fire and defeat that gunman after the roll**. Stop after three attempts at the floor.",
        "gameObjective": "In an **unlocked Corey scene in Hotline Miami 2**, **roll under a gunman’s fire and defeat that gunman after the roll**. Stop after three attempts at the floor."
      },
      "de": {
        "name": "Unter dem Schuss durchrollen",
        "objective": "**Roll in einer freigeschalteten Corey-Szene in Hotline Miami 2 unter dem Beschuss eines Schützen durch und schalte ihn danach aus**. Nach drei Etagenversuchen ist Schluss.",
        "gameObjective": "**Roll in einer freigeschalteten Corey-Szene in Hotline Miami 2 unter dem Beschuss eines Schützen durch und schalte ihn danach aus**. Nach drei Etagenversuchen ist Schluss."
      }
    },
    "experience": {
      "family": "dodge-roll",
      "cardMetadata": { "genreIds": ["shooter"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["abilities"],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Unlocked Corey scene",
          "de": "Freigeschaltete Corey-Szene",
          "chips": {"en": ["Corey scene"], "de": ["Corey-Szene"]},
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
    "id": "hotline-miami-hm2-mark-spread-door",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["abilities"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "hotline-miami",
      "installmentIds": ["hotline-miami-2"]
    },
    "translations": {
      "en": {
        "name": "Cover Both Sides",
        "objective": "In an unlocked **Mark scene in Hotline Miami 2**, stand where enemies can approach from two sides. **Try his split-direction fire against them**. Death ends the attempt.",
        "gameObjective": "In an unlocked **Mark scene in Hotline Miami 2**, stand where enemies can approach from two sides. **Try his split-direction fire against them**. Death ends the attempt."
      },
      "de": {
        "name": "Beide Seiten decken",
        "objective": "Stell dich in einer freigeschalteten **Mark-Szene in Hotline Miami 2** so hin, dass Gegner von zwei Seiten kommen können. **Probier sein Feuer in entgegengesetzte Richtungen gegen sie aus**. Ein Tod beendet den Versuch.",
        "gameObjective": "Stell dich in einer freigeschalteten **Mark-Szene in Hotline Miami 2** so hin, dass Gegner von zwei Seiten kommen können. **Probier sein Feuer in entgegengesetzte Richtungen gegen sie aus**. Ein Tod beendet den Versuch."
      }
    },
    "experience": {
      "family": "split-fire",
      "cardMetadata": { "genreIds": ["shooter"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["abilities"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Unlocked Mark scene",
          "de": "Freigeschaltete Mark-Szene",
          "chips": {"en": ["Mark scene"], "de": ["Mark-Szene"]},
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
    "id": "hotline-miami-hm2-jake-pickup-chain",
    "moodIds": ["challenge", "focused"],
    "type": "challenge",
    "tags": ["abilities", "three-attempts"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "hotline-miami",
      "installmentIds": ["hotline-miami-2"]
    },
    "translations": {
      "en": {
        "name": "Throw, Pick Up, Throw",
        "objective": "In an **unlocked Jake scene in Hotline Miami 2**, use the default lethal-throw mask. **Defeat one enemy with a throw, pick up that enemy’s weapon, and defeat another with the next throw**, or stop after three floor attempts.",
        "gameObjective": "In an **unlocked Jake scene in Hotline Miami 2**, use the default lethal-throw mask. **Defeat one enemy with a throw, pick up that enemy’s weapon, and defeat another with the next throw**, or stop after three floor attempts."
      },
      "de": {
        "name": "Werfen, nehmen, werfen",
        "objective": "Nutze in einer **freigeschalteten Jake-Szene in Hotline Miami 2** die Standardmaske für tödliche Würfe. **Schalte einen Gegner per Wurf aus, nimm seine Waffe und erledige den nächsten per Wurf** oder hör nach drei Etagenversuchen auf.",
        "gameObjective": "Nutze in einer **freigeschalteten Jake-Szene in Hotline Miami 2** die Standardmaske für tödliche Würfe. **Schalte einen Gegner per Wurf aus, nimm seine Waffe und erledige den nächsten per Wurf** oder hör nach drei Etagenversuchen auf."
      }
    },
    "experience": {
      "family": "lethal-throw",
      "cardMetadata": { "genreIds": ["shooter"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["abilities"],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Unlocked Jake scene with default mask",
          "de": "Freigeschaltete Jake-Szene mit Standardmaske",
          "chips": {"en": ["Jake's default mask"], "de": ["Jakes Standardmaske"]},
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
    "id": "hotline-miami-hm2-irvin-silent-route",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["abilities"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "hotline-miami",
      "installmentIds": ["hotline-miami-2"]
    },
    "translations": {
      "en": {
        "name": "Keep the Nail Gun",
        "objective": "With **Irvin unlocked for Jake in Hotline Miami 2**, enter an unlocked scene with his nail gun. **Try clearing one room before changing weapons**, comparing which neighbours react. Stop if killed.",
        "gameObjective": "With **Irvin unlocked for Jake in Hotline Miami 2**, enter an unlocked scene with his nail gun. **Try clearing one room before changing weapons**, comparing which neighbours react. Stop if killed."
      },
      "de": {
        "name": "Die Nagelpistole behalten",
        "objective": "Starte in **Hotline Miami 2 mit freigeschaltetem Irvin für Jake** eine freigeschaltete Szene mit seiner Nagelpistole. **Probier, einen Raum vor dem Waffenwechsel zu räumen**, und schau auf die reagierenden Nachbarn. Hör beim Tod auf.",
        "gameObjective": "Starte in **Hotline Miami 2 mit freigeschaltetem Irvin für Jake** eine freigeschaltete Szene mit seiner Nagelpistole. **Probier, einen Raum vor dem Waffenwechsel zu räumen**, und schau auf die reagierenden Nachbarn. Hör beim Tod auf."
      }
    },
    "experience": {
      "family": "nailgun",
      "cardMetadata": { "genreIds": ["shooter"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["abilities"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Irvin unlocked for Jake",
          "de": "Irvin für Jake freigeschaltet",
          "chips": {"en": ["Irvin for Jake"], "de": ["Irvin für Jake"]},
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
    "id": "hotline-miami-hm2-dallas-safe-start",
    "moodIds": ["challenge", "focused"],
    "type": "challenge",
    "tags": ["abilities", "three-attempts"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "hotline-miami",
      "installmentIds": ["hotline-miami-2"]
    },
    "translations": {
      "en": {
        "name": "Find the Activation Gap",
        "objective": "With **Dallas unlocked for Jake in Hotline Miami 2**, activate the nunchaku from cover before entering a nearby occupied room. **Defeat an enemy during the active rush and reach cover for its end**, or stop after three floor attempts.",
        "gameObjective": "With **Dallas unlocked for Jake in Hotline Miami 2**, activate the nunchaku from cover before entering a nearby occupied room. **Defeat an enemy during the active rush and reach cover for its end**, or stop after three floor attempts."
      },
      "de": {
        "name": "Die Lücke zum Aktivieren",
        "objective": "Aktivier in **Hotline Miami 2 mit freigeschaltetem Dallas für Jake** die Nunchaku aus der Deckung vor einem besetzten Raum. **Schalte im aktiven Lauf einen Gegner aus und erreiche Deckung vor dem Ende** oder hör nach drei Etagenversuchen auf.",
        "gameObjective": "Aktivier in **Hotline Miami 2 mit freigeschaltetem Dallas für Jake** die Nunchaku aus der Deckung vor einem besetzten Raum. **Schalte im aktiven Lauf einen Gegner aus und erreiche Deckung vor dem Ende** oder hör nach drei Etagenversuchen auf."
      }
    },
    "experience": {
      "family": "berserk-rush",
      "cardMetadata": { "genreIds": ["shooter"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["abilities"],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Dallas unlocked for Jake",
          "de": "Dallas für Jake freigeschaltet",
          "chips": {"en": ["Dallas for Jake"], "de": ["Dallas für Jake"]},
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
    "id": "hotline-miami-hm2-pardo-keep-gun",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["abilities"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "hotline-miami",
      "installmentIds": ["hotline-miami-2"]
    },
    "translations": {
      "en": {
        "name": "The Gun Stays",
        "objective": "In an **unlocked Pardo scene in Hotline Miami 2**, knock an ordinary enemy down while holding a firearm. **Use Pardo’s execution, then fire the retained gun at the next enemy**. Stop if killed.",
        "gameObjective": "In an **unlocked Pardo scene in Hotline Miami 2**, knock an ordinary enemy down while holding a firearm. **Use Pardo’s execution, then fire the retained gun at the next enemy**. Stop if killed."
      },
      "de": {
        "name": "Die Waffe bleibt",
        "objective": "Bring in einer freigeschalteten **Pardo-Szene in Hotline Miami 2** einen normalen Gegner zu Boden, während du eine Schusswaffe hältst. **Nutze Pardos Finisher und schieß mit der behaltenen Waffe auf den nächsten Gegner**. Ein Tod beendet den Versuch.",
        "gameObjective": "Bring in einer freigeschalteten **Pardo-Szene in Hotline Miami 2** einen normalen Gegner zu Boden, während du eine Schusswaffe hältst. **Nutze Pardos Finisher und schieß mit der behaltenen Waffe auf den nächsten Gegner**. Ein Tod beendet den Versuch."
      }
    },
    "experience": {
      "family": "retained-gun",
      "cardMetadata": { "genreIds": ["shooter"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["abilities"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Unlocked Pardo scene; firearm",
          "de": "Freigeschaltete Pardo-Szene; Schusswaffe",
          "chips": {"en": ["Pardo scene", "Firearm"], "de": ["Pardo-Szene", "Schusswaffe"]},
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
    "id": "hotline-miami-hm2-evan-unload-combo",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["no-kills", "abilities"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "hotline-miami",
      "installmentIds": ["hotline-miami-2"]
    },
    "translations": {
      "en": {
        "name": "Unload the Pickup",
        "objective": "In an **unlocked Evan scene in Hotline Miami 2**, knock an enemy out without executing them, then pick up their gun to unload it. **Try that sequence without killing**, watching its effect on the combo. Stop if killed.",
        "gameObjective": "In an **unlocked Evan scene in Hotline Miami 2**, knock an enemy out without executing them, then pick up their gun to unload it. **Try that sequence without killing**, watching its effect on the combo. Stop if killed."
      },
      "de": {
        "name": "Die aufgehobene Waffe entladen",
        "objective": "Schlag in einer **freigeschalteten Evan-Szene in Hotline Miami 2** einen Gegner bewusstlos, ohne Finisher, und nimm seine Waffe zum Entladen. **Probier diese Folge ohne Töten** und schau auf die Combo. Hör beim Tod auf.",
        "gameObjective": "Schlag in einer **freigeschalteten Evan-Szene in Hotline Miami 2** einen Gegner bewusstlos, ohne Finisher, und nimm seine Waffe zum Entladen. **Probier diese Folge ohne Töten** und schau auf die Combo. Hör beim Tod auf."
      }
    },
    "experience": {
      "family": "nonlethal-unload",
      "cardMetadata": { "genreIds": ["shooter"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["abilities"],
      "rules": ["no-kills"],
      "prerequisites": [
        {
          "en": "Unlocked Evan scene",
          "de": "Freigeschaltete Evan-Szene",
          "chips": {"en": ["Evan scene"], "de": ["Evan-Szene"]},
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
    "id": "hotline-miami-hm2-evan-rage-change",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["abilities"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "hotline-miami",
      "installmentIds": ["hotline-miami-2"]
    },
    "translations": {
      "en": {
        "name": "When Evan Changes",
        "objective": "In an unlocked **Evan scene in Hotline Miami 2**, perform two lethal executions to trigger his rage state. **Try picking up and firing a weapon after the change**. Death ends the attempt.",
        "gameObjective": "In an unlocked **Evan scene in Hotline Miami 2**, perform two lethal executions to trigger his rage state. **Try picking up and firing a weapon after the change**. Death ends the attempt."
      },
      "de": {
        "name": "Wenn Evan sich ändert",
        "objective": "Führ in einer freigeschalteten **Evan-Szene in Hotline Miami 2** zwei tödliche Finisher aus, um seinen Wutzustand auszulösen. **Probier danach, eine Waffe aufzuheben und abzufeuern**. Ein Tod beendet den Versuch.",
        "gameObjective": "Führ in einer freigeschalteten **Evan-Szene in Hotline Miami 2** zwei tödliche Finisher aus, um seinen Wutzustand auszulösen. **Probier danach, eine Waffe aufzuheben und abzufeuern**. Ein Tod beendet den Versuch."
      }
    },
    "experience": {
      "family": "rage-test",
      "cardMetadata": { "genreIds": ["shooter"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["abilities"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Unlocked Evan scene",
          "de": "Freigeschaltete Evan-Szene",
          "chips": {"en": ["Evan scene"], "de": ["Evan-Szene"]},
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
    "id": "hotline-miami-hm2-beard-gun-comparison",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["loadout"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "hotline-miami",
      "installmentIds": ["hotline-miami-2"]
    },
    "translations": {
      "en": {
        "name": "Two Ways through Hawaii",
        "objective": "In an **unlocked Beard scene in Hotline Miami 2 with both shotgun and rifle unlocked**, try its opening once with a shotgun and once with a rifle. **Compare the useful distance for each**, with one floor attempt per weapon.",
        "gameObjective": "In an **unlocked Beard scene in Hotline Miami 2 with both shotgun and rifle unlocked**, try its opening once with a shotgun and once with a rifle. **Compare the useful distance for each**, with one floor attempt per weapon."
      },
      "de": {
        "name": "Zwei Wege durch Hawaii",
        "objective": "Probier in einer **freigeschalteten Beard-Szene in Hotline Miami 2 mit freigeschalteter Schrotflinte und freigeschaltetem Gewehr** den Auftakt einmal mit Schrotflinte und einmal mit Gewehr. **Vergleiche die passende Entfernung**, mit einem Etagenversuch pro Waffe.",
        "gameObjective": "Probier in einer **freigeschalteten Beard-Szene in Hotline Miami 2 mit freigeschalteter Schrotflinte und freigeschaltetem Gewehr** den Auftakt einmal mit Schrotflinte und einmal mit Gewehr. **Vergleiche die passende Entfernung**, mit einem Etagenversuch pro Waffe."
      }
    },
    "experience": {
      "family": "gun-range",
      "cardMetadata": { "genreIds": ["shooter"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["loadout"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Beard scene; shotgun and rifle unlocked",
          "de": "Beard-Szene; Schrotflinte und Gewehr freigeschaltet",
          "chips": {"en": ["Beard", "Shotgun"], "de": ["Beard", "Schrotflinte"]},
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
    "id": "hotline-miami-hm2-beard-flame-room",
    "moodIds": ["challenge", "focused"],
    "type": "challenge",
    "tags": ["one-weapon", "three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "hotline-miami",
      "installmentIds": ["hotline-miami-2"]
    },
    "translations": {
      "en": {
        "name": "Wait for the Flame",
        "objective": "With the **flamethrower unlocked for Beard in Hotline Miami 2**, choose a scene where it is selectable. **Clear one room using it without switching to the knife**, or stop after three floor attempts.",
        "gameObjective": "With the **flamethrower unlocked for Beard in Hotline Miami 2**, choose a scene where it is selectable. **Clear one room using it without switching to the knife**, or stop after three floor attempts."
      },
      "de": {
        "name": "Auf die Flamme warten",
        "objective": "Wähl in **Hotline Miami 2 mit freigeschaltetem Flammenwerfer für Beard** eine Szene, in der er verfügbar ist. **Räume damit einen Raum ohne Wechsel zum Messer** oder hör nach drei Etagenversuchen auf.",
        "gameObjective": "Wähl in **Hotline Miami 2 mit freigeschaltetem Flammenwerfer für Beard** eine Szene, in der er verfügbar ist. **Räume damit einen Raum ohne Wechsel zum Messer** oder hör nach drei Etagenversuchen auf."
      }
    },
    "experience": {
      "family": "flamethrower",
      "cardMetadata": { "genreIds": ["shooter"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["one-weapon", "three-attempts"],
      "prerequisites": [
        {
          "en": "Beard’s flamethrower unlocked",
          "de": "Beards Flammenwerfer freigeschaltet",
          "chips": {"en": ["Beard’s flamethrower"], "de": ["Beards Flammenwerfer"]},
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
    "id": "hotline-miami-hm2-henchman-pistol-chain",
    "moodIds": ["challenge", "focused"],
    "type": "challenge",
    "tags": ["one-weapon", "three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "hotline-miami",
      "installmentIds": ["hotline-miami-2"]
    },
    "translations": {
      "en": {
        "name": "The Quiet Pistol",
        "objective": "In **Hotline Miami 2’s unlocked No Mercy scene**, use the Henchman’s starting silenced pistol. **Defeat three enemies in one combo without changing weapons**, or stop after three floor attempts.",
        "gameObjective": "In **Hotline Miami 2’s unlocked No Mercy scene**, use the Henchman’s starting silenced pistol. **Defeat three enemies in one combo without changing weapons**, or stop after three floor attempts."
      },
      "de": {
        "name": "Die leise Pistole",
        "objective": "Nutze in **Hotline Miami 2 im freigeschalteten No Mercy** die schallgedämpfte Startpistole des Handlangers. **Schalte drei Gegner in einer Combo ohne Waffenwechsel aus** oder hör nach drei Etagenversuchen auf.",
        "gameObjective": "Nutze in **Hotline Miami 2 im freigeschalteten No Mercy** die schallgedämpfte Startpistole des Handlangers. **Schalte drei Gegner in einer Combo ohne Waffenwechsel aus** oder hör nach drei Etagenversuchen auf."
      }
    },
    "experience": {
      "family": "pistol-combo",
      "cardMetadata": { "genreIds": ["shooter"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["one-weapon", "three-attempts"],
      "prerequisites": [
        {
          "en": "No Mercy unlocked",
          "de": "No Mercy freigeschaltet",
          "chips": {"en": ["No Mercy"], "de": ["No Mercy"]},
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
    "id": "hotline-miami-hm2-richter-release-read",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["scouting"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "hotline-miami",
      "installmentIds": ["hotline-miami-2"]
    },
    "translations": {
      "en": {
        "name": "Read the Prison Floor",
        "objective": "In **Hotline Miami 2’s unlocked Release scene**, look ahead at the prison floor before moving Richter from its opening. **Try one route that uses a dropped weapon before entering the next occupied room**, then stop at floor clear or death.",
        "gameObjective": "In **Hotline Miami 2’s unlocked Release scene**, look ahead at the prison floor before moving Richter from its opening. **Try one route that uses a dropped weapon before entering the next occupied room**, then stop at floor clear or death."
      },
      "de": {
        "name": "Die Gefängnisetage lesen",
        "objective": "Schau dir in **Hotline Miami 2 im freigeschalteten Release** die Gefängnisetage an, bevor Richter losläuft. **Probier einen Weg mit aufgehobener Waffe vor dem nächsten besetzten Raum** und hör beim Etagenabschluss oder Tod auf.",
        "gameObjective": "Schau dir in **Hotline Miami 2 im freigeschalteten Release** die Gefängnisetage an, bevor Richter losläuft. **Probier einen Weg mit aufgehobener Waffe vor dem nächsten besetzten Raum** und hör beim Etagenabschluss oder Tod auf."
      }
    },
    "experience": {
      "family": "prison-route",
      "cardMetadata": { "genreIds": ["shooter"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["scouting"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Release unlocked",
          "de": "Release freigeschaltet",
          "chips": {"en": ["Release"], "de": ["Release"]},
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
    "id": "hotline-miami-hm2-bar-phone-call",
    "moodIds": ["curious", "focused"],
    "type": "objective",
    "tags": ["story", "three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "universal": false,
    "curated": {
      "gameId": "hotline-miami",
      "installmentIds": ["hotline-miami-2"]
    },
    "translations": {
      "en": {
        "name": "The Call before Subway",
        "objective": "With **Subway unlocked in Hotline Miami 2**, answer the phone in Evan’s home during its intro. **Finish the scene and meet Biker in the hidden bar sequence**, or stop after three scene attempts.",
        "gameObjective": "With **Subway unlocked in Hotline Miami 2**, answer the phone in Evan’s home during its intro. **Finish the scene and meet Biker in the hidden bar sequence**, or stop after three scene attempts."
      },
      "de": {
        "name": "Der Anruf vor Subway",
        "objective": "Nimm mit **freigeschaltetem Subway in Hotline Miami 2** im Intro den Anruf in Evans Wohnung an. **Beende die Szene und triff Biker in der versteckten Barsequenz**, oder hör nach drei Szenenversuchen auf.",
        "gameObjective": "Nimm mit **freigeschaltetem Subway in Hotline Miami 2** im Intro den Anruf in Evans Wohnung an. **Beende die Szene und triff Biker in der versteckten Barsequenz**, oder hör nach drei Szenenversuchen auf."
      }
    },
    "experience": {
      "family": "hidden-story",
      "cardMetadata": { "genreIds": ["shooter"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["story"],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Subway unlocked",
          "de": "Subway freigeschaltet",
          "chips": {"en": ["Subway"], "de": ["Subway"]},
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
    "rarity": "special"
  },
  {
    "id": "hotline-miami-hm2-hard-mirror-read",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["replay"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "hotline-miami",
      "installmentIds": ["hotline-miami-2"]
    },
    "translations": {
      "en": {
        "name": "The Floor Is Reversed",
        "objective": "With **Hard mode unlocked for a cleared Hotline Miami 2 scene**, try its first floor once on Normal and once on Hard. **Compare the mirrored layout and enemy sightlines**, with deaths ending each attempt.",
        "gameObjective": "With **Hard mode unlocked for a cleared Hotline Miami 2 scene**, try its first floor once on Normal and once on Hard. **Compare the mirrored layout and enemy sightlines**, with deaths ending each attempt."
      },
      "de": {
        "name": "Die Etage ist gespiegelt",
        "objective": "Probier in **Hotline Miami 2 eine geschaffte Szene mit freigeschaltetem Hard-Modus** auf der ersten Etage je einmal auf Normal und Hard. **Vergleiche gespiegelten Aufbau und Sichtlinien**. Ein Tod beendet den jeweiligen Versuch.",
        "gameObjective": "Probier in **Hotline Miami 2 eine geschaffte Szene mit freigeschaltetem Hard-Modus** auf der ersten Etage je einmal auf Normal und Hard. **Vergleiche gespiegelten Aufbau und Sichtlinien**. Ein Tod beendet den jeweiligen Versuch."
      }
    },
    "experience": {
      "family": "hard-layout",
      "cardMetadata": { "genreIds": ["shooter"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "en": "Cleared scene; Hard mode unlocked",
          "de": "Geschaffte Szene; Hard-Modus freigeschaltet",
          "chips": {"en": ["Scene", "Hard mode"], "de": ["Geschaffte Szene", "Hard-Modus"]},
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
    "id": "hotline-miami-hm2-editor-door-room",
    "moodIds": ["create", "focused"],
    "type": "creation",
    "tags": ["level-editor"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "universal": false,
    "curated": {
      "gameId": "hotline-miami",
      "installmentIds": ["hotline-miami-2"]
    },
    "translations": {
      "en": {
        "name": "A Two-Door Room",
        "objective": "In the **Hotline Miami 2 PC Level Editor**, build a small room with two entrances, one armed enemy, and a compatible melee weapon. **Save it and complete a test run through each entrance**, adjusting sightlines if needed.",
        "gameObjective": "In the **Hotline Miami 2 PC Level Editor**, build a small room with two entrances, one armed enemy, and a compatible melee weapon. **Save it and complete a test run through each entrance**, adjusting sightlines if needed."
      },
      "de": {
        "name": "Ein Raum, zwei Türen",
        "objective": "Bau im **PC-Leveleditor von Hotline Miami 2** einen kleinen Raum mit zwei Eingängen, bewaffnetem Gegner und passender Nahkampfwaffe. **Speichere und schaff einen Testlauf durch jeden Eingang**. Passe bei Bedarf die Sichtlinien an.",
        "gameObjective": "Bau im **PC-Leveleditor von Hotline Miami 2** einen kleinen Raum mit zwei Eingängen, bewaffnetem Gegner und passender Nahkampfwaffe. **Speichere und schaff einen Testlauf durch jeden Eingang**. Passe bei Bedarf die Sichtlinien an."
      }
    },
    "experience": {
      "family": "two-door-editor",
      "cardMetadata": { "genreIds": ["shooter", "sandbox"], "playStyleIds": [], "platformIds": ["pc"] },
      "finish": "outcome",
      "activities": ["level-editor"],
      "rules": [],
      "prerequisites": [
        {
          "en": "PC Level Editor",
          "de": "PC-Leveleditor",
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
        }
      ]
    },
    "gameGenreIds": ["shooter", "sandbox"],
    "rarity": "special"
  },
  {
    "id": "hotline-miami-hm2-editor-patrol-choice",
    "moodIds": ["create", "focused"],
    "type": "creation",
    "tags": ["level-editor"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "universal": false,
    "curated": {
      "gameId": "hotline-miami",
      "installmentIds": ["hotline-miami-2"]
    },
    "translations": {
      "en": {
        "name": "Give Them a Patrol",
        "objective": "In the **Hotline Miami 2 PC Level Editor**, take a small playable level you own and change one stationary enemy to a patrol. **Save the change and finish a test run**, checking that the patrol leaves an entry gap.",
        "gameObjective": "In the **Hotline Miami 2 PC Level Editor**, take a small playable level you own and change one stationary enemy to a patrol. **Save the change and finish a test run**, checking that the patrol leaves an entry gap."
      },
      "de": {
        "name": "Eine Patrouille setzen",
        "objective": "Ändere im **PC-Leveleditor von Hotline Miami 2** in einem eigenen kleinen spielbaren Level einen stehenden Gegner zur Patrouille. **Speichere und beende einen Testlauf**. Prüfe, ob die Patrouille eine Lücke zum Betreten lässt.",
        "gameObjective": "Ändere im **PC-Leveleditor von Hotline Miami 2** in einem eigenen kleinen spielbaren Level einen stehenden Gegner zur Patrouille. **Speichere und beende einen Testlauf**. Prüfe, ob die Patrouille eine Lücke zum Betreten lässt."
      }
    },
    "experience": {
      "family": "patrol-editor",
      "cardMetadata": { "genreIds": ["shooter", "sandbox"], "playStyleIds": [], "platformIds": ["pc"] },
      "finish": "outcome",
      "activities": ["level-editor"],
      "rules": [],
      "prerequisites": [
        {
          "en": "PC Level Editor; owned playable level",
          "de": "PC-Leveleditor; eigenes spielbares Level",
          "chips": {"en": ["Level editor", "Own level"], "de": ["Leveleditor", "Eigenes Level"]},
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
    "gameGenreIds": ["shooter", "sandbox"]
  },
  {
    "id": "hotline-miami-hm2-editor-story-arrival",
    "moodIds": ["create"],
    "type": "creation",
    "tags": ["level-editor", "story"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "universal": false,
    "curated": {
      "gameId": "hotline-miami",
      "installmentIds": ["hotline-miami-2"]
    },
    "translations": {
      "en": {
        "name": "Before the Fighting",
        "objective": "In the **Hotline Miami 2 PC Level Editor**, add a short noncombat arrival to a playable level you own. Use it to introduce the place or character, then **save and test the transition into the combat level**.",
        "gameObjective": "In the **Hotline Miami 2 PC Level Editor**, add a short noncombat arrival to a playable level you own. Use it to introduce the place or character, then **save and test the transition into the combat level**."
      },
      "de": {
        "name": "Vor dem Kampf",
        "objective": "Ergänz im **PC-Leveleditor von Hotline Miami 2** bei einem eigenen spielbaren Level eine kurze Ankunft ohne Kampf. Stell damit den Ort oder die Figur vor und **speichere und teste den Übergang ins Kampflevel**.",
        "gameObjective": "Ergänz im **PC-Leveleditor von Hotline Miami 2** bei einem eigenen spielbaren Level eine kurze Ankunft ohne Kampf. Stell damit den Ort oder die Figur vor und **speichere und teste den Übergang ins Kampflevel**."
      }
    },
    "experience": {
      "family": "story-editor",
      "cardMetadata": { "genreIds": ["shooter", "sandbox"], "playStyleIds": [], "platformIds": ["pc"] },
      "finish": "outcome",
      "activities": ["level-editor", "story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "PC Level Editor; owned playable level",
          "de": "PC-Leveleditor; eigenes spielbares Level",
          "chips": {"en": ["Level editor", "Own level"], "de": ["Leveleditor", "Eigenes Level"]},
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
    "gameGenreIds": ["shooter", "sandbox"],
    "rarity": "special"
  },
  {
    "id": "hotline-miami-hm2-workshop-new-author",
    "moodIds": ["explore", "curious"],
    "type": "inspiration",
    "tags": ["exploration"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "hotline-miami",
      "installmentIds": ["hotline-miami-2"]
    },
    "translations": {
      "en": {
        "name": "Someone Else’s Miami",
        "objective": "With Hotline Miami 2 on Steam and Workshop access, **choose a short custom level by an author you have not played before**. Follow their rooms and character choices and see what kind of Miami they made.",
        "gameObjective": "With Hotline Miami 2 on Steam and Workshop access, **choose a short custom level by an author you have not played before**. Follow their rooms and character choices and see what kind of Miami they made."
      },
      "de": {
        "name": "Das Miami eines anderen",
        "objective": "Such in Hotline Miami 2 auf Steam mit Workshop-Zugang ein kurzes Custom-Level von jemandem, dessen Levels du noch nicht gespielt hast. **Folge den Räumen und Figuren** und schau, welches Miami dort entstanden ist.",
        "gameObjective": "Such in Hotline Miami 2 auf Steam mit Workshop-Zugang ein kurzes Custom-Level von jemandem, dessen Levels du noch nicht gespielt hast. **Folge den Räumen und Figuren** und schau, welches Miami dort entstanden ist."
      }
    },
    "experience": {
      "family": "workshop-level",
      "cardMetadata": { "genreIds": ["shooter"], "playStyleIds": [], "platformIds": ["pc"] },
      "finish": "open",
      "activities": ["exploration"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Steam Workshop access",
          "de": "Steam-Workshop-Zugang",
          "chips": {"en": ["Steam Workshop"], "de": ["Steam Workshop"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "Steam Workshop download"
        }
      ]
    },
    "gameGenreIds": ["shooter"]
  },
  {
    "id": "hotline-miami-hm2-hawaii-return",
    "moodIds": ["nostalgic", "focused"],
    "type": "inspiration",
    "tags": ["replay", "story"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "hotline-miami",
      "installmentIds": ["hotline-miami-2"]
    },
    "translations": {
      "en": {
        "name": "Back to Hawaii",
        "objective": "Return to an unlocked Hotline Miami 2 Hawaii scene you remember playing. **Spend the session with Beard’s old squad** and the combat route you recall, watching how the conversations fit your memory.",
        "gameObjective": "Return to an unlocked Hotline Miami 2 Hawaii scene you remember playing. **Spend the session with Beard’s old squad** and the combat route you recall, watching how the conversations fit your memory."
      },
      "de": {
        "name": "Zurück nach Hawaii",
        "objective": "Kehr zu einer freigeschalteten Hawaii-Szene in Hotline Miami 2 zurück, die du schon gespielt hast. **Verbring die Session bei Beards alter Truppe** und deiner früheren Kampfroute und schau, wie die Gespräche dazu passen.",
        "gameObjective": "Kehr zu einer freigeschalteten Hawaii-Szene in Hotline Miami 2 zurück, die du schon gespielt hast. **Verbring die Session bei Beards alter Truppe** und deiner früheren Kampfroute und schau, wie die Gespräche dazu passen."
      }
    },
    "experience": {
      "family": "familiar-hawaii",
      "cardMetadata": { "genreIds": ["shooter"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Familiar unlocked Hawaii scene",
          "de": "Vertraute freigeschaltete Hawaii-Szene",
          "chips": {"en": ["Hawaii scene"], "de": ["Hawaii-Szene"]},
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
    "id": "hotline-miami-hm2-floor-controller-pair",
    "moodIds": ["connect"],
    "type": "objective",
    "tags": ["local-play"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "hotline-miami",
      "installmentIds": ["hotline-miami-2"]
    },
    "translations": {
      "en": {
        "name": "One Floor Each",
        "objective": "Share a controller with another person for an **unlocked Hotline Miami 2 Fans scene**. Take one floor attempt each with different available Fans and **compare the tools that changed your route**, whether either attempt survived.",
        "gameObjective": "Share a controller with another person for an **unlocked Hotline Miami 2 Fans scene**. Take one floor attempt each with different available Fans and **compare the tools that changed your route**, whether either attempt survived."
      },
      "de": {
        "name": "Jeder eine Etage",
        "objective": "Teilt euch für eine **freigeschaltete Fans-Szene in Hotline Miami 2** einen Controller. Probiert beide die Etage einmal mit unterschiedlichen verfügbaren Fans und **vergleicht die Werkzeuge für euren Weg**, auch wenn beide Versuche scheitern.",
        "gameObjective": "Teilt euch für eine **freigeschaltete Fans-Szene in Hotline Miami 2** einen Controller. Probiert beide die Etage einmal mit unterschiedlichen verfügbaren Fans und **vergleicht die Werkzeuge für euren Weg**, auch wenn beide Versuche scheitern."
      }
    },
    "experience": {
      "family": "shared-fans",
      "cardMetadata": { "genreIds": ["shooter"], "playStyleIds": ["local-play"] },
      "finish": "outcome",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "en": "Second person; controller; unlocked Fans scene",
          "de": "Zweite Person; Controller; freigeschaltete Fans-Szene",
          "chips": {"en": ["Controller", "Fans chapter"], "de": ["Controller", "Fans-Kapitel"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "others",
          "participation": "solo",
          "formation": "none",
          "mode": "Shared controller"
        }
      ]
    },
    "gameGenreIds": ["shooter"]
  },
  {
    "id": "hotline-miami-hm1-door-throw",
    "moodIds": ["challenge"],
    "type": "challenge",
    "tags": ["three-attempts"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "hotline-miami",
      "installmentIds": ["hotline-miami-1"]
    },
    "translations": {
      "en": {
        "name": "Door, Throw, Finish",
        "objective": "In one room, **knock down an enemy with a door, throw a weapon at the next, and clear the room**. Stop after three attempts.",
        "gameObjective": "In one room, **knock down an enemy with a door, throw a weapon at the next, and clear the room**. Stop after three attempts."
      },
      "de": {
        "name": "Tür, Wurf, Ende",
        "objective": "Wirf in einem Raum **einen Gegner mit der Tür um, triff den nächsten mit einer geworfenen Waffe und räume den Raum**. Drei Versuche.",
        "gameObjective": "Wirf in einem Raum **einen Gegner mit der Tür um, triff den nächsten mit einer geworfenen Waffe und räume den Raum**. Drei Versuche."
      }
    },
    "experience": {
      "family": "door-throw",
      "cardMetadata": { "genreIds": ["shooter"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
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
    "gameGenreIds": ["shooter"]
  },
  {
    "id": "hotline-miami-hm1-gun-noise",
    "moodIds": ["curious"],
    "type": "experiment",
    "tags": ["new-approach"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "hotline-miami",
      "installmentIds": ["hotline-miami-1"]
    },
    "translations": {
      "en": {
        "name": "Make Noise on Purpose",
        "objective": "Fire one loud shot from a safe doorway and **use the enemies it draws to set up a new room entry**.",
        "gameObjective": "Fire one loud shot from a safe doorway and **use the enemies it draws to set up a new room entry**."
      },
      "de": {
        "name": "Absichtlich Lärm machen",
        "objective": "Gib von einer sicheren Tür aus **einen lauten Schuss ab und nutze die angelockten Gegner für einen anderen Zugang**.",
        "gameObjective": "Gib von einer sicheren Tür aus **einen lauten Schuss ab und nutze die angelockten Gegner für einen anderen Zugang**."
      }
    },
    "experience": {
      "family": "noise-entry",
      "cardMetadata": { "genreIds": ["shooter"], "playStyleIds": [] },
      "finish": "attempt",
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
    "gameGenreIds": ["shooter"]
  },
  {
    "id": "hotline-miami-hm1-biker-angle",
    "moodIds": ["focused"],
    "type": "objective",
    "tags": ["story"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "hotline-miami",
      "installmentIds": ["hotline-miami-1"]
    },
    "translations": {
      "en": {
        "name": "Biker's Route",
        "objective": "In an unlocked Biker chapter, **clear one floor using his cleaver and throwing knives together**.",
        "gameObjective": "In an unlocked Biker chapter, **clear one floor using his cleaver and throwing knives together**."
      },
      "de": {
        "name": "Bikers Weg",
        "objective": "Räume in einem freigeschalteten **Biker-Kapitel in Hotline Miami** **eine Etage mit Hackmesser und Wurfmessern im Zusammenspiel**.",
        "gameObjective": "Räume in einem freigeschalteten **Biker-Kapitel in Hotline Miami** **eine Etage mit Hackmesser und Wurfmessern im Zusammenspiel**."
      }
    },
    "experience": {
      "family": "biker-tools",
      "cardMetadata": { "genreIds": ["shooter"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Unlocked Biker chapter",
          "de": "Freigeschaltetes Biker-Kapitel",
          "chips": {"en": ["Biker chapter"], "de": ["Biker-Kapitel"]},
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
    "id": "hotline-miami-hm1-glass-route",
    "moodIds": ["curious"],
    "type": "experiment",
    "tags": ["scouting"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "hotline-miami",
      "installmentIds": ["hotline-miami-1"]
    },
    "translations": {
      "en": {
        "name": "Watch Through Glass",
        "objective": "Find a floor with glass walls and **plan an entry around what enemies can see through them**, then test it.",
        "gameObjective": "Find a floor with glass walls and **plan an entry around what enemies can see through them**, then test it."
      },
      "de": {
        "name": "Durchs Glas schauen",
        "objective": "Such eine Etage mit Glaswänden und **plane einen Eingang danach, was Gegner durch sie sehen können**. Probiere ihn aus.",
        "gameObjective": "Such eine Etage mit Glaswänden und **plane einen Eingang danach, was Gegner durch sie sehen können**. Probiere ihn aus."
      }
    },
    "experience": {
      "family": "glass-entry",
      "cardMetadata": { "genreIds": ["shooter"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["scouting"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Floor with glass walls",
          "de": "Etage mit Glaswänden",
          "chips": {"en": ["Glass walls"], "de": ["Glaswände"]},
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
    "id": "hotline-miami-hm2-writer-no-kill",
    "moodIds": ["challenge"],
    "type": "challenge",
    "tags": ["no-kills", "three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "hotline-miami",
      "installmentIds": ["hotline-miami-2"]
    },
    "translations": {
      "en": {
        "name": "The Writer's Way",
        "objective": "In an Evan chapter, **clear one floor without killing anyone**. Stop after three attempts.",
        "gameObjective": "In an Evan chapter, **clear one floor without killing anyone**. Stop after three attempts."
      },
      "de": {
        "name": "Der Weg des Autors",
        "objective": "Räume in einem Evan-Kapitel **eine Etage, ohne jemanden zu töten**. Höre nach drei Versuchen auf.",
        "gameObjective": "Räume in einem Evan-Kapitel **eine Etage, ohne jemanden zu töten**. Höre nach drei Versuchen auf."
      }
    },
    "experience": {
      "family": "nonlethal-clear",
      "cardMetadata": { "genreIds": ["shooter"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["no-kills", "three-attempts"],
      "prerequisites": [
        {
          "en": "Unlocked Evan chapter",
          "de": "Freigeschaltetes Evan-Kapitel",
          "chips": {"en": ["Evan chapter"], "de": ["Evan-Kapitel"]},
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
    "id": "hotline-miami-hm2-duo-crossfire",
    "moodIds": ["focused"],
    "type": "objective",
    "tags": ["abilities"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "hotline-miami",
      "installmentIds": ["hotline-miami-2"]
    },
    "translations": {
      "en": {
        "name": "Alex and Ash",
        "objective": "In an Alex and Ash chapter, **clear one room by using Ash's gun to cover Alex's chainsaw approach**.",
        "gameObjective": "In an Alex and Ash chapter, **clear one room by using Ash's gun to cover Alex's chainsaw approach**."
      },
      "de": {
        "name": "Alex und Ash",
        "objective": "Räume in einem Alex-und-Ash-Kapitel **einen Raum, indem Ashs Waffe Alex' Angriff mit der Kettensäge deckt**.",
        "gameObjective": "Räume in einem Alex-und-Ash-Kapitel **einen Raum, indem Ashs Waffe Alex' Angriff mit der Kettensäge deckt**."
      }
    },
    "experience": {
      "family": "duo-crossfire",
      "cardMetadata": { "genreIds": ["shooter"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["abilities"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Unlocked Alex and Ash chapter",
          "de": "Freigeschaltetes Alex-und-Ash-Kapitel",
          "chips": {"en": ["Alex and Ash"], "de": ["Alex und Ash"]},
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
    "id": "hotline-miami-hm2-soldier-ammo",
    "moodIds": ["challenge"],
    "type": "challenge",
    "tags": ["three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "hotline-miami",
      "installmentIds": ["hotline-miami-2"]
    },
    "translations": {
      "en": {
        "name": "Soldier's Last Magazine",
        "objective": "In a Soldier chapter, **clear one floor without picking up replacement ammo**. Stop after three attempts.",
        "gameObjective": "In a Soldier chapter, **clear one floor without picking up replacement ammo**. Stop after three attempts."
      },
      "de": {
        "name": "Das letzte Magazin",
        "objective": "Räume in einem Soldaten-Kapitel **eine Etage ohne neue Munition aufzunehmen**. Drei Versuche.",
        "gameObjective": "Räume in einem Soldaten-Kapitel **eine Etage ohne neue Munition aufzunehmen**. Drei Versuche."
      }
    },
    "experience": {
      "family": "ammunition-limit",
      "cardMetadata": { "genreIds": ["shooter"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Unlocked Soldier chapter",
          "de": "Freigeschaltetes Soldaten-Kapitel",
          "chips": {"en": ["Soldier chapter"], "de": ["Soldaten-Kapitel"]},
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
    "id": "hotline-miami-hm2-beard-backtrack",
    "moodIds": ["curious"],
    "type": "experiment",
    "tags": ["new-approach"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "hotline-miami",
      "installmentIds": ["hotline-miami-2"]
    },
    "translations": {
      "en": {
        "name": "Beard's Return Route",
        "objective": "In an unlocked **Beard chapter in Hotline Miami 2**, clear a room. **Take a different exit and use that route to attack the next occupied room from another side**.",
        "gameObjective": "In an unlocked **Beard chapter in Hotline Miami 2**, clear a room. **Take a different exit and use that route to attack the next occupied room from another side**."
      },
      "de": {
        "name": "Beards Rückweg",
        "objective": "Räume in einem freigeschalteten **Beard-Kapitel in Hotline Miami 2** einen Raum. **Nimm einen anderen Ausgang und greif den nächsten besetzten Raum von dieser Seite aus an**.",
        "gameObjective": "Räume in einem freigeschalteten **Beard-Kapitel in Hotline Miami 2** einen Raum. **Nimm einen anderen Ausgang und greif den nächsten besetzten Raum von dieser Seite aus an**."
      }
    },
    "experience": {
      "family": "alternate-entry",
      "cardMetadata": { "genreIds": ["shooter"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "en": "Beard chapter with alternate room exit",
          "de": "Beard-Kapitel mit alternativem Raumausgang",
          "chips": {"en": ["Alternate room exit"], "de": ["Alternativer Raumausgang"]},
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
    "id": "hotline-miami-hm2-fans-one-role",
    "moodIds": ["focused"],
    "type": "objective",
    "tags": ["replay"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "hotline-miami",
      "installmentIds": ["hotline-miami-2"]
    },
    "translations": {
      "en": {
        "name": "One Fan's Strength",
        "objective": "Replay an unlocked Fans chapter and **finish one floor while relying on the chosen Fan's signature ability**.",
        "gameObjective": "Replay an unlocked Fans chapter and **finish one floor while relying on the chosen Fan's signature ability**."
      },
      "de": {
        "name": "Die Stärke eines Fans",
        "objective": "Spiel ein freigeschaltetes Fans-Kapitel erneut und **schaff eine Etage mit der besonderen Fähigkeit des gewählten Fans**.",
        "gameObjective": "Spiel ein freigeschaltetes Fans-Kapitel erneut und **schaff eine Etage mit der besonderen Fähigkeit des gewählten Fans**."
      }
    },
    "experience": {
      "family": "signature-ability",
      "cardMetadata": { "genreIds": ["shooter"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "en": "Unlocked Fans chapter",
          "de": "Freigeschaltetes Fans-Kapitel",
          "chips": {"en": ["Fans chapter"], "de": ["Fans-Kapitel"]},
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
