import type { QuestSnapshot } from "../../domain/quest/model";

// Before-update snapshots only for changed or retired sessions; never dealt.
export const ARCHIVED_QUESTS = {
  "auto-read-chapter": {
    "definition": {
      "id": "auto-read-chapter",
      "moodIds": [
        "low-energy"
      ],
      "type": "inspiration",
      "tags": [
        "dialogue"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 15,
      "rarity": "standard",
      "gameGenreIds": [
        "narrative"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": false,
      "name": "Let the Story Run",
      "objective": "Continue a **visual novel with auto-read**. **Let the dialogue play** and make choices as they come. Stop whenever you like."
    },
    "translations": {
      "en": {
        "name": "Let the Story Run",
        "objective": "Continue a **visual novel with auto-read**. **Let the dialogue play** and make choices as they come. Stop whenever you like."
      },
      "de": {
        "name": "Die Geschichte läuft",
        "objective": "Setze eine **Visual Novel mit Auto-Modus** fort. **Lass den Text von selbst weiterlaufen** und entscheide nur, wenn das Spiel dich fragt. Hör auf, wann du möchtest."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "five-exhibits": {
    "definition": {
      "id": "five-exhibits",
      "moodIds": [
        "low-energy"
      ],
      "type": "inspiration",
      "tags": [
        "free-roam"
      ],
      "minimumDurationMinutes": 2,
      "suggestedDurationMinutes": 10,
      "rarity": "standard",
      "gameGenreIds": [
        "puzzle"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": false,
      "name": "Museum Visit",
      "objective": "Visit a peaceful **museum or gallery in a game**. **Browse the exhibits** and linger at whatever catches your eye."
    },
    "translations": {
      "en": {
        "name": "Museum Visit",
        "objective": "Visit a peaceful **museum or gallery in a game**. **Browse the exhibits** and linger at whatever catches your eye."
      },
      "de": {
        "name": "Museumsbesuch",
        "objective": "Besuche ein ruhiges **Museum oder eine Galerie in einem Spiel**. **Schau dir die Ausstellungsstücke an** und bleib bei denen stehen, die dich interessieren."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "one-solitaire-hand": {
    "definition": {
      "id": "one-solitaire-hand",
      "moodIds": [
        "low-energy"
      ],
      "type": "objective",
      "tags": [
        "one-round",
        "no-timer"
      ],
      "minimumDurationMinutes": 2,
      "suggestedDurationMinutes": 10,
      "rarity": "standard",
      "gameGenreIds": [
        "card"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": false,
      "name": "One Hand",
      "objective": "Open **digital solitaire without a timer**. Play the first deal until **you clear the cards or run out of moves**. Undo and hints are allowed."
    },
    "translations": {
      "en": {
        "name": "One Hand",
        "objective": "Open **digital solitaire without a timer**. Play the first deal until **you clear the cards or run out of moves**. Undo and hints are allowed."
      },
      "de": {
        "name": "Eine Partie",
        "objective": "Öffne **eine Partie Solitaire ohne Zeitlimit**. Spiel die Auslage, bis **alle Karten abgelegt sind oder du nicht mehr ziehen kannst**. Hinweise und Rückgängig sind erlaubt."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "small-jigsaw": {
    "definition": {
      "id": "small-jigsaw",
      "moodIds": [
        "low-energy"
      ],
      "type": "objective",
      "tags": [
        "puzzles",
        "no-timer"
      ],
      "minimumDurationMinutes": 2,
      "suggestedDurationMinutes": 10,
      "rarity": "standard",
      "gameGenreIds": [
        "puzzle"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": false,
      "name": "Small Jigsaw",
      "objective": "Choose a **digital jigsaw of no more than fifty pieces**. Use the preview image and any sorting help, then **put the last piece in place**."
    },
    "translations": {
      "en": {
        "name": "Small Jigsaw",
        "objective": "Choose a **digital jigsaw of no more than fifty pieces**. Use the preview image and any sorting help, then **put the last piece in place**."
      },
      "de": {
        "name": "Kleines Puzzle",
        "objective": "Nimm ein **digitales Puzzle mit höchstens fünfzig Teilen**. Nutze das Vorschaubild und Sortierhilfen und **setze das letzte Teil ein**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "hidden-object-browse": {
    "definition": {
      "id": "hidden-object-browse",
      "moodIds": [
        "low-energy"
      ],
      "type": "inspiration",
      "tags": [],
      "minimumDurationMinutes": 2,
      "suggestedDurationMinutes": 15,
      "rarity": "standard",
      "gameGenreIds": [
        "puzzle"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": false,
      "name": "Hidden Details",
      "objective": "Open **a hidden-object game without a timer**. **Browse the scene for hidden details** and use hints whenever you like. Stop when you have seen enough."
    },
    "translations": {
      "en": {
        "name": "Hidden Details",
        "objective": "Open **a hidden-object game without a timer**. **Browse the scene for hidden details** and use hints whenever you like. Stop when you have seen enough."
      },
      "de": {
        "name": "Versteckte Details",
        "objective": "Starte **ein Wimmelbildspiel ohne Zeitlimit**. **Suche in der Szene nach versteckten Details** und nutze Hinweise nach Bedarf. Hör auf, wenn du genug gesehen hast."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "scenic-drive": {
    "definition": {
      "id": "scenic-drive",
      "moodIds": [
        "relax"
      ],
      "type": "inspiration",
      "tags": [
        "driving",
        "no-timer"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 15,
      "rarity": "standard",
      "gameGenreIds": [
        "racing"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": false,
      "name": "Scenic Drive",
      "objective": "Open a **free-roam driving game**. Pick a familiar car and **drive wherever looks interesting**. No destination and no timer."
    },
    "translations": {
      "en": {
        "name": "Scenic Drive",
        "objective": "Open a **free-roam driving game**. Pick a familiar car and **drive wherever looks interesting**. No destination and no timer."
      },
      "de": {
        "name": "Ruhige Ausfahrt",
        "objective": "Starte ein **Spiel mit freien Autofahrten**. Nimm einen vertrauten Wagen und **fahr einfach drauflos**. Kein Ziel und kein Zeitdruck."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "space-drift": {
    "definition": {
      "id": "space-drift",
      "moodIds": [
        "relax"
      ],
      "type": "inspiration",
      "tags": [
        "space",
        "free-roam"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 15,
      "rarity": "standard",
      "gameGenreIds": [
        "adventure",
        "simulation",
        "sandbox"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": false,
      "name": "Between the Stars",
      "objective": "Open a **space game with free flight**. Leave the station and **drift through space** for a while. Take in the planets, ships, and whatever you pass."
    },
    "translations": {
      "en": {
        "name": "Between the Stars",
        "objective": "Open a **space game with free flight**. Leave the station and **drift through space** for a while. Take in the planets, ships, and whatever you pass."
      },
      "de": {
        "name": "Zwischen den Sternen",
        "objective": "Starte ein **Weltraumspiel mit freiem Flug**. Verlasse die Station und **treib eine Weile durchs All**. Schau dir Planeten, Schiffe und deine Umgebung an."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "three-small-puzzles": {
    "definition": {
      "id": "three-small-puzzles",
      "moodIds": [
        "relax"
      ],
      "type": "objective",
      "tags": [
        "puzzles",
        "no-timer"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 15,
      "rarity": "standard",
      "gameGenreIds": [
        "puzzle"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": false,
      "name": "Three Puzzles",
      "objective": "Open a **relaxed puzzle game** and solve **three short puzzles**. Pick any comfortable difficulty and use hints if you want."
    },
    "translations": {
      "en": {
        "name": "Three Puzzles",
        "objective": "Open a **relaxed puzzle game** and solve **three short puzzles**. Pick any comfortable difficulty and use hints if you want."
      },
      "de": {
        "name": "Drei Rätsel",
        "objective": "Starte ein **entspanntes Rätselspiel** und löse **drei kurze Rätsel**. Wähle eine angenehme Schwierigkeit und nutze Hinweise, wenn du möchtest."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "familiar-level": {
    "definition": {
      "id": "familiar-level",
      "moodIds": [
        "relax"
      ],
      "type": "objective",
      "tags": [
        "replay",
        "no-timer"
      ],
      "minimumDurationMinutes": 2,
      "suggestedDurationMinutes": 10,
      "rarity": "standard",
      "gameGenreIds": [
        "platformer"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": false,
      "name": "Familiar Level",
      "objective": "Open a **platformer you already know** and replay a familiar level. Use any assists you like and **reach the end**. Ignore scores and collectibles."
    },
    "translations": {
      "en": {
        "name": "Familiar Level",
        "objective": "Open a **platformer you already know** and replay a familiar level. Use any assists you like and **reach the end**. Ignore scores and collectibles."
      },
      "de": {
        "name": "Vertrautes Level",
        "objective": "Starte einen **Plattformer, den du gut kennst**, und spiele ein vertrautes Level noch einmal. Nutze beliebige Hilfen und **erreiche das Ende**. Punkte und Sammelobjekte sind egal."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "small-town-routine": {
    "definition": {
      "id": "small-town-routine",
      "moodIds": [
        "relax"
      ],
      "type": "inspiration",
      "tags": [],
      "minimumDurationMinutes": 2,
      "suggestedDurationMinutes": 15,
      "rarity": "standard",
      "gameGenreIds": [
        "simulation",
        "cozy"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": false,
      "name": "Around Town",
      "objective": "Open **a gentle life sim** and visit a town you know. **Drop by familiar shops and neighbors**. Follow the day without an errands list."
    },
    "translations": {
      "en": {
        "name": "Around Town",
        "objective": "Open **a gentle life sim** and visit a town you know. **Drop by familiar shops and neighbors**. Follow the day without an errands list."
      },
      "de": {
        "name": "Im Ort unterwegs",
        "objective": "Starte **eine ruhige Lebenssimulation** und besuche einen vertrauten Ort. **Schau bei bekannten Läden und Nachbarn vorbei**. Lass den Tag ohne Aufgabenliste laufen."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "a-side-street": {
    "definition": {
      "id": "a-side-street",
      "moodIds": [
        "explore"
      ],
      "type": "inspiration",
      "tags": [
        "free-roam",
        "exploration"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 15,
      "rarity": "standard",
      "gameGenreIds": [
        "adventure"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": false,
      "name": "A Side Street",
      "objective": "Open a game with **a city you barely know**. Leave the mission route and **follow alleys, stairs, and open doors**. See where they lead."
    },
    "translations": {
      "en": {
        "name": "A Side Street",
        "objective": "Open a game with **a city you barely know**. Leave the mission route and **follow alleys, stairs, and open doors**. See where they lead."
      },
      "de": {
        "name": "Eine Nebenstraße",
        "objective": "Starte ein Spiel mit **einer Stadt, die du kaum kennst**. Verlasse den Missionsweg und **folge Gassen, Treppen und offenen Türen**. Schau, wohin sie führen."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "deep-dive": {
    "definition": {
      "id": "deep-dive",
      "moodIds": [
        "explore"
      ],
      "type": "inspiration",
      "tags": [
        "diving",
        "exploration"
      ],
      "minimumDurationMinutes": 5,
      "suggestedDurationMinutes": 20,
      "rarity": "standard",
      "gameGenreIds": [
        "adventure"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": false,
      "name": "Deep Dive",
      "objective": "Open **an underwater exploration game**. Leave the waters around your base and **follow an unfamiliar reef or tunnel**. Turn back before your air runs low."
    },
    "translations": {
      "en": {
        "name": "Deep Dive",
        "objective": "Open **an underwater exploration game**. Leave the waters around your base and **follow an unfamiliar reef or tunnel**. Turn back before your air runs low."
      },
      "de": {
        "name": "Tauchgang",
        "objective": "Starte **ein Spiel mit Unterwasser-Erkundung**. Schwimm von deiner Basis weg und **folge einem Riff oder Tunnel, den du noch nicht kennst**. Kehr um, bevor dir die Luft ausgeht."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "unmapped-door": {
    "definition": {
      "id": "unmapped-door",
      "moodIds": [
        "explore"
      ],
      "type": "objective",
      "tags": [
        "exploration"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 20,
      "rarity": "standard",
      "gameGenreIds": [
        "adventure",
        "narrative"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": false,
      "name": "Beyond That Door",
      "objective": "Open a game with **unexplored exits marked on its map**. Enter the nearest reachable new room and **find its next exit** before checking the map again."
    },
    "translations": {
      "en": {
        "name": "Beyond That Door",
        "objective": "Open a game with **unexplored exits marked on its map**. Enter the nearest reachable new room and **find its next exit** before checking the map again."
      },
      "de": {
        "name": "Hinter der Tür",
        "objective": "Starte ein Spiel, dessen Karte **einen noch unerforschten Ausgang** zeigt. Geh durch den nächsten erreichbaren Ausgang und **finde einen Weg aus dem neuen Raum**, bevor du wieder auf die Karte schaust."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "rooftop-route": {
    "definition": {
      "id": "rooftop-route",
      "moodIds": [
        "explore"
      ],
      "type": "objective",
      "tags": [
        "traversal",
        "exploration"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 20,
      "rarity": "standard",
      "gameGenreIds": [
        "adventure",
        "platformer",
        "simulation",
        "sandbox"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": false,
      "name": "Over the Rooftops",
      "objective": "Open **a city game with climbable buildings**. Climb to an unfamiliar roof, **cross to a second building**, and find a way down."
    },
    "translations": {
      "en": {
        "name": "Over the Rooftops",
        "objective": "Open **a city game with climbable buildings**. Climb to an unfamiliar roof, **cross to a second building**, and find a way down."
      },
      "de": {
        "name": "Über die Dächer",
        "objective": "Starte **ein Stadtspiel, in dem du auf Gebäude klettern kannst**. Steig auf ein Dach, auf dem du noch nicht warst, **gelang von dort auf ein zweites Gebäude** und such einen Weg nach unten."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "follow-the-transit": {
    "definition": {
      "id": "follow-the-transit",
      "moodIds": [
        "explore"
      ],
      "type": "inspiration",
      "tags": [
        "exploration"
      ],
      "minimumDurationMinutes": 5,
      "suggestedDurationMinutes": 20,
      "rarity": "standard",
      "gameGenreIds": [
        "adventure",
        "simulation"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": false,
      "name": "Next Stop",
      "objective": "Open a game with **public transport and explorable stops**. Take an unfamiliar line and get off somewhere new. **Wander the streets around the stop**."
    },
    "translations": {
      "en": {
        "name": "Next Stop",
        "objective": "Open a game with **public transport and explorable stops**. Take an unfamiliar line and get off somewhere new. **Wander the streets around the stop**."
      },
      "de": {
        "name": "Nächste Haltestelle",
        "objective": "Starte ein Spiel, in dem du **mit Bus oder Bahn neue Orte erreichen kannst**. Nimm eine Linie, die du noch nicht kennst, steig an einer neuen Haltestelle aus und **schau dich in den Straßen dort um**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "oldest-unfinished": {
    "definition": {
      "id": "oldest-unfinished",
      "moodIds": [
        "progress"
      ],
      "type": "inspiration",
      "tags": [
        "current-save",
        "story"
      ],
      "minimumDurationMinutes": 5,
      "suggestedDurationMinutes": 20,
      "rarity": "standard",
      "gameGenreIds": [
        "rpg",
        "narrative"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": false,
      "name": "Still Unfinished",
      "objective": "Open your **oldest installed, unfinished story game**. Read its recap or quest log and **pick up the main story**. No chapter target today."
    },
    "translations": {
      "en": {
        "name": "Still Unfinished",
        "objective": "Open your **oldest installed, unfinished story game**. Read its recap or quest log and **pick up the main story**. No chapter target today."
      },
      "de": {
        "name": "Noch nicht fertig",
        "objective": "Starte dein **ältestes installiertes, unfertiges Storyspiel**. Lies die Zusammenfassung oder das Questlog und **spiele die Hauptgeschichte weiter**. Du musst heute kein Kapitel schaffen."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "smallest-quest": {
    "definition": {
      "id": "smallest-quest",
      "moodIds": [
        "progress"
      ],
      "type": "inspiration",
      "tags": [
        "current-save"
      ],
      "minimumDurationMinutes": 5,
      "suggestedDurationMinutes": 20,
      "rarity": "standard",
      "gameGenreIds": [
        "rpg"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": false,
      "name": "Loose Ends",
      "objective": "Open **an RPG with unfinished side quests**. **Return to their people and places** and follow those stories for a while. Leave new quests for later."
    },
    "translations": {
      "en": {
        "name": "Loose Ends",
        "objective": "Open **an RPG with unfinished side quests**. **Return to their people and places** and follow those stories for a while. Leave new quests for later."
      },
      "de": {
        "name": "Offene Geschichten",
        "objective": "Starte **ein Rollenspiel mit offenen Nebenquests**. Such dir eine aus, deren Figur oder Ort dich interessiert, und **folge ihrer Geschichte ein Stück weiter**. Neue Quests können warten."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "final-piece": {
    "definition": {
      "id": "final-piece",
      "moodIds": [
        "progress"
      ],
      "type": "objective",
      "tags": [
        "collectibles"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 20,
      "rarity": "standard",
      "gameGenreIds": [
        "adventure"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": false,
      "name": "The Missing Piece",
      "objective": "Choose **a collection missing one item** with a known location. **Find that item and complete the set**. Claim its reward if there is one."
    },
    "translations": {
      "en": {
        "name": "The Missing Piece",
        "objective": "Choose **a collection missing one item** with a known location. **Find that item and complete the set**. Claim its reward if there is one."
      },
      "de": {
        "name": "Das fehlende Stück",
        "objective": "Wähle **eine Sammlung mit einem fehlenden Item**, dessen Ort bekannt ist. **Finde das Item und vervollständige die Sammlung**. Hole ihre Belohnung, falls es eine gibt."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "next-unlock": {
    "definition": {
      "id": "next-unlock",
      "moodIds": [
        "progress"
      ],
      "type": "objective",
      "tags": [
        "current-save"
      ],
      "minimumDurationMinutes": 5,
      "suggestedDurationMinutes": 30,
      "rarity": "standard",
      "gameGenreIds": [
        "racing",
        "shooter",
        "fighting",
        "moba"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": false,
      "name": "Put It to Use",
      "objective": "Find **a character or vehicle one short task from unlocking**. Complete that task and **use the unlock in a full round or race**."
    },
    "translations": {
      "en": {
        "name": "Put It to Use",
        "objective": "Find **a character or vehicle one short task from unlocking**. Complete that task and **use the unlock in a full round or race**."
      },
      "de": {
        "name": "Gleich ausprobieren",
        "objective": "Such **eine Figur oder ein Fahrzeug kurz vor der Freischaltung**. Erledige die letzte kurze Aufgabe und **spiele damit eine ganze Runde oder ein Rennen**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "unfinished-small-adventure": {
    "definition": {
      "id": "unfinished-small-adventure",
      "moodIds": [
        "progress"
      ],
      "type": "inspiration",
      "tags": [
        "current-save",
        "story"
      ],
      "minimumDurationMinutes": 5,
      "suggestedDurationMinutes": 20,
      "rarity": "standard",
      "gameGenreIds": [
        "adventure",
        "narrative"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": false,
      "name": "A Small Adventure",
      "objective": "Continue **a short adventure you already started**. **Follow its next story thread** without checking how much remains. Stop at a save point when you like."
    },
    "translations": {
      "en": {
        "name": "A Small Adventure",
        "objective": "Continue **a short adventure you already started**. **Follow its next story thread** without checking how much remains. Stop at a save point when you like."
      },
      "de": {
        "name": "Ein kleines Abenteuer",
        "objective": "Setze **ein begonnenes kurzes Abenteuer** fort. **Spiel die nächste Szene oder Mission**, ohne nachzuschlagen, wie viel noch kommt. Hör an einem Speicherpunkt auf, wenn es reicht."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "second-session": {
    "definition": {
      "id": "second-session",
      "moodIds": [
        "progress"
      ],
      "type": "objective",
      "tags": [
        "current-save",
        "first-play"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 20,
      "rarity": "standard",
      "gameGenreIds": [],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": false,
      "name": "The Second Session",
      "objective": "Open **a game you stopped after its first session**. Load that save, review the controls if needed, and **reach the next save point or finish one objective**."
    },
    "translations": {
      "en": {
        "name": "The Second Session",
        "objective": "Open **a game you stopped after its first session**. Load that save, review the controls if needed, and **reach the next save point or finish one objective**."
      },
      "de": {
        "name": "Die zweite Session",
        "objective": "Starte **ein Spiel, das du nach der ersten Session liegen gelassen hast**. Lade den Spielstand, sieh dir bei Bedarf die Steuerung an und **erreiche den nächsten Speicherpunkt oder schließe ein Ziel ab**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "chapter-left-open": {
    "definition": {
      "id": "chapter-left-open",
      "moodIds": [
        "progress"
      ],
      "type": "objective",
      "tags": [
        "current-save",
        "story"
      ],
      "minimumDurationMinutes": 5,
      "suggestedDurationMinutes": 30,
      "rarity": "standard",
      "gameGenreIds": [
        "adventure",
        "rpg",
        "narrative"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": false,
      "name": "Close the Chapter",
      "objective": "Return to **a story game with a chapter already in progress**. Follow its main path and **finish that chapter or episode**. Leave the next one for another session."
    },
    "translations": {
      "en": {
        "name": "Close the Chapter",
        "objective": "Return to **a story game with a chapter already in progress**. Follow its main path and **finish that chapter or episode**. Leave the next one for another session."
      },
      "de": {
        "name": "Kapitel abschließen",
        "objective": "Kehre zu **einem Storyspiel mit einem begonnenen Kapitel** zurück. Folge dem Hauptweg und **beende dieses Kapitel oder diese Episode**. Das nächste kommt in einer anderen Session."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "one-life": {
    "definition": {
      "id": "one-life",
      "moodIds": [
        "challenge"
      ],
      "type": "inspiration",
      "tags": [
        "one-life"
      ],
      "minimumDurationMinutes": 5,
      "suggestedDurationMinutes": 20,
      "rarity": "standard",
      "gameGenreIds": [
        "roguelike"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": false,
      "name": "One Life",
      "objective": "Open **a roguelike where death ends the run**. **Spend the resources you usually hoard** and see how far they take you."
    },
    "translations": {
      "en": {
        "name": "One Life",
        "objective": "Open **a roguelike where death ends the run**. **Spend the resources you usually hoard** and see how far they take you."
      },
      "de": {
        "name": "Ein Leben",
        "objective": "Starte **ein Roguelike, bei dem der Tod deinen Run beendet**. **Verbrauch die Vorräte, die du sonst für später aufhebst**, und schau, wie weit du kommst."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "full-combo-try": {
    "definition": {
      "id": "full-combo-try",
      "moodIds": [
        "challenge"
      ],
      "type": "inspiration",
      "tags": [
        "rhythm"
      ],
      "minimumDurationMinutes": 5,
      "suggestedDurationMinutes": 20,
      "rarity": "standard",
      "gameGenreIds": [
        "rhythm"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": false,
      "name": "A Step Harder",
      "objective": "Open **a rhythm game**. Choose songs just above your usual difficulty and **take on the harder patterns**. No required combo or score."
    },
    "translations": {
      "en": {
        "name": "A Step Harder",
        "objective": "Open **a rhythm game**. Choose songs just above your usual difficulty and **take on the harder patterns**. No required combo or score."
      },
      "de": {
        "name": "Eine Stufe schwerer",
        "objective": "Starte **ein Rhythmusspiel**. Wähle Songs eine Stufe über deinem üblichen Schwierigkeitsgrad und **probier die schwereren Muster aus**. Du brauchst weder eine perfekte Kombo noch eine bestimmte Punktzahl."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "three-fast-laps": {
    "definition": {
      "id": "three-fast-laps",
      "moodIds": [
        "challenge"
      ],
      "type": "challenge",
      "tags": [
        "racing",
        "three-attempts"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 25,
      "rarity": "standard",
      "gameGenreIds": [
        "racing"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": false,
      "name": "Beat Your Lap",
      "objective": "In **a racing time trial**, set a clean lap on a familiar short track. Keep the same setup and **beat your time within three more attempts**. Stop after the third result."
    },
    "translations": {
      "en": {
        "name": "Beat Your Lap",
        "objective": "In **a racing time trial**, set a clean lap on a familiar short track. Keep the same setup and **beat your time within three more attempts**. Stop after the third result."
      },
      "de": {
        "name": "Schlag deine Zeit",
        "objective": "Fahr in **einem Rennspiel mit Zeitfahren** eine saubere Runde auf einer kurzen Strecke, die du kennst. Behalte dein Setup und **versuch, deine Zeit in drei weiteren Runden zu schlagen**. Danach ist Schluss."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "match-combo": {
    "definition": {
      "id": "match-combo",
      "moodIds": [
        "challenge"
      ],
      "type": "challenge",
      "tags": [
        "three-attempts"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 25,
      "rarity": "standard",
      "gameGenreIds": [
        "fighting"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": false,
      "name": "Land the Combo",
      "objective": "Open **a fighting game with combo trials**. Learn an unfinished combo and **land it in a CPU match**. Finish that match or stop after three full matches."
    },
    "translations": {
      "en": {
        "name": "Land the Combo",
        "objective": "Open **a fighting game with combo trials**. Learn an unfinished combo and **land it in a CPU match**. Finish that match or stop after three full matches."
      },
      "de": {
        "name": "Die Kombo landen",
        "objective": "Starte **ein Kampfspiel mit Kombo-Training**. Üb eine Kombo, die du noch nicht sicher kannst, und **lande sie in einem Match gegen die CPU**. Spiel das Match zu Ende oder hör nach drei Matches auf."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "precision-platformer-session": {
    "definition": {
      "id": "precision-platformer-session",
      "moodIds": [
        "challenge"
      ],
      "type": "inspiration",
      "tags": [
        "traversal"
      ],
      "minimumDurationMinutes": 5,
      "suggestedDurationMinutes": 20,
      "rarity": "standard",
      "gameGenreIds": [
        "platformer"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": false,
      "name": "Tricky Jumps",
      "objective": "Open **a precision platformer with quick retries**. Pick an unlocked section and **work through its tricky jumps**. Take breaks between attempts whenever you like."
    },
    "translations": {
      "en": {
        "name": "Tricky Jumps",
        "objective": "Open **a precision platformer with quick retries**. Pick an unlocked section and **work through its tricky jumps**. Take breaks between attempts whenever you like."
      },
      "de": {
        "name": "Knifflige Sprünge",
        "objective": "Starte **einen Plattformer mit schnellem Movement und kniffligen Abschnitten**. Such dir einen freigeschalteten Abschnitt und **probier dich an seinen Sprüngen**. Mach zwischen den Versuchen Pause, wann du möchtest."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "keep-moving": {
    "definition": {
      "id": "keep-moving",
      "moodIds": [
        "restless"
      ],
      "type": "inspiration",
      "tags": [
        "traversal"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 15,
      "rarity": "standard",
      "gameGenreIds": [
        "adventure"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": false,
      "name": "Keep Moving",
      "objective": "Open a game with **free running, swinging, or grappling**. **Chain the moves that keep you going**. Leave mission markers for another session."
    },
    "translations": {
      "en": {
        "name": "Keep Moving",
        "objective": "Open a game with **free running, swinging, or grappling**. **Chain the moves that keep you going**. Leave mission markers for another session."
      },
      "de": {
        "name": "In Bewegung",
        "objective": "Starte ein Spiel, in dem du **frei rennen, schwingen oder einen Greifhaken nutzen kannst**. **Komm mit diesen Bewegungen von einem Punkt zum nächsten**. Missionsmarkierungen können warten."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "flat-out-race": {
    "definition": {
      "id": "flat-out-race",
      "moodIds": [
        "restless"
      ],
      "type": "inspiration",
      "tags": [
        "racing"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 15,
      "rarity": "standard",
      "gameGenreIds": [
        "racing"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": false,
      "name": "Flat Out",
      "objective": "Open **an arcade racer with quick races**. Take your usual car and **head straight to the track**. Spend this session racing instead of tuning."
    },
    "translations": {
      "en": {
        "name": "Flat Out",
        "objective": "Open **an arcade racer with quick races**. Take your usual car and **head straight to the track**. Spend this session racing instead of tuning."
      },
      "de": {
        "name": "Vollgas",
        "objective": "Starte **ein Arcade-Rennspiel mit kurzen schnellen Rennen**. Nimm deinen gewohnten Wagen und **fahr direkt auf die Strecke**. Das Tuningmenü bleibt heute zu."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "three-songs": {
    "definition": {
      "id": "three-songs",
      "moodIds": [
        "restless"
      ],
      "type": "objective",
      "tags": [
        "rhythm"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 15,
      "rarity": "standard",
      "gameGenreIds": [
        "rhythm"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": false,
      "name": "Three Songs",
      "objective": "Open **a rhythm game**. Pick an easy song, one at your usual difficulty, and one a step harder. **Finish all three without restarting**."
    },
    "translations": {
      "en": {
        "name": "Three Songs",
        "objective": "Open **a rhythm game**. Pick an easy song, one at your usual difficulty, and one a step harder. **Finish all three without restarting**."
      },
      "de": {
        "name": "Drei Songs",
        "objective": "Starte **ein Rhythmusspiel**. Wähle einen leichten Song, einen auf deiner üblichen Stufe und einen etwas schwereren. **Spiele alle drei ohne Neustart zu Ende**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "five-trick-line": {
    "definition": {
      "id": "five-trick-line",
      "moodIds": [
        "restless"
      ],
      "type": "challenge",
      "tags": [
        "skating",
        "three-attempts"
      ],
      "minimumDurationMinutes": 2,
      "suggestedDurationMinutes": 15,
      "rarity": "standard",
      "gameGenreIds": [
        "sports"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": false,
      "name": "Five in a Line",
      "objective": "Open **a skating game with trick combos**. On a familiar stretch, **land five different tricks in one line without falling**. Stop after success or three attempts."
    },
    "translations": {
      "en": {
        "name": "Five in a Line",
        "objective": "Open **a skating game with trick combos**. On a familiar stretch, **land five different tricks in one line without falling**. Stop after success or three attempts."
      },
      "de": {
        "name": "Fünfer-Line",
        "objective": "Starte **ein Skatespiel mit Trickkombos**. **Lande fünf verschiedene Tricks in einer Line ohne Sturz** auf einem vertrauten Abschnitt. Nach Erfolg oder drei Versuchen ist Schluss."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "arcade-brawler-burst": {
    "definition": {
      "id": "arcade-brawler-burst",
      "moodIds": [
        "restless"
      ],
      "type": "inspiration",
      "tags": [],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 15,
      "rarity": "standard",
      "gameGenreIds": [
        "fighting"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": false,
      "name": "Into the Brawl",
      "objective": "Open **an arcade brawler with short stages**. Pick a familiar character and **jump into the next fight**. Leave scores and character comparisons for later."
    },
    "translations": {
      "en": {
        "name": "Into the Brawl",
        "objective": "Open **an arcade brawler with short stages**. Pick a familiar character and **jump into the next fight**. Leave scores and character comparisons for later."
      },
      "de": {
        "name": "Rein ins Getümmel",
        "objective": "Starte **ein Arcade-Prügelspiel mit kurzen Abschnitten**. Nimm eine vertraute Figur und **stürz dich ins nächste Gerangel**. Punkte und Figurenvergleiche kommen später."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "co-op-check-in": {
    "definition": {
      "id": "co-op-check-in",
      "moodIds": [
        "connect"
      ],
      "type": "inspiration",
      "tags": [
        "co-op"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 15,
      "rarity": "standard",
      "gameGenreIds": [],
      "connectionModeIds": [
        "online",
        "offline"
      ],
      "playStyleIds": [
        "co-op"
      ],
      "universal": true,
      "gameBindable": false,
      "name": "Back Together",
      "objective": "Open **a co-op game you share with someone**. Join each other’s save and **follow what they want to play today**."
    },
    "translations": {
      "en": {
        "name": "Back Together",
        "objective": "Open **a co-op game you share with someone**. Join each other’s save and **follow what they want to play today**."
      },
      "de": {
        "name": "Wieder zusammen",
        "objective": "Starte **ein Koop-Spiel, das du früher mit jemandem zusammen gespielt hast**. Ladet euren gemeinsamen Spielstand und **spielt heute das, worauf die andere Person Lust hat**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "pass-the-controller": {
    "definition": {
      "id": "pass-the-controller",
      "moodIds": [
        "connect"
      ],
      "type": "inspiration",
      "tags": [
        "local-play"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 15,
      "rarity": "standard",
      "gameGenreIds": [],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "co-op"
      ],
      "universal": true,
      "gameBindable": false,
      "name": "Pass the Controller",
      "objective": "With someone nearby, open **a local game with short turns**. **Pass the controller after each turn** and talk about what goes well or hilariously wrong."
    },
    "translations": {
      "en": {
        "name": "Pass the Controller",
        "objective": "With someone nearby, open **a local game with short turns**. **Pass the controller after each turn** and talk about what goes well or hilariously wrong."
      },
      "de": {
        "name": "Controller weitergeben",
        "objective": "Starte mit jemandem vor Ort **ein Spiel mit kurzen Zügen**. **Gebt den Controller nach jedem Zug weiter** und kommentiert, was klappt oder völlig schiefgeht."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "public-event": {
    "definition": {
      "id": "public-event",
      "moodIds": [
        "connect"
      ],
      "type": "objective",
      "tags": [
        "co-op",
        "support"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 20,
      "rarity": "standard",
      "gameGenreIds": [
        "adventure",
        "rpg",
        "shooter"
      ],
      "connectionModeIds": [
        "online"
      ],
      "playStyleIds": [
        "co-op",
        "team"
      ],
      "universal": true,
      "gameBindable": false,
      "name": "Join the Event",
      "objective": "Join **an active public event in an online game**. Help with its shared objective and **stay through the result or reward**. Winning is not required."
    },
    "translations": {
      "en": {
        "name": "Join the Event",
        "objective": "Join **an active public event in an online game**. Help with its shared objective and **stay through the result or reward**. Winning is not required."
      },
      "de": {
        "name": "Beim Event dabei",
        "objective": "Besuche **ein laufendes öffentliches Event in einem Onlinespiel**. Hilf beim gemeinsamen Ziel und **bleib bis zum Ergebnis oder zur Belohnung**. Ein Sieg ist nicht nötig."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "team-signals": {
    "definition": {
      "id": "team-signals",
      "moodIds": [
        "connect"
      ],
      "type": "objective",
      "tags": [
        "co-op",
        "support"
      ],
      "minimumDurationMinutes": 5,
      "suggestedDurationMinutes": 30,
      "rarity": "standard",
      "gameGenreIds": [
        "adventure",
        "rpg",
        "shooter"
      ],
      "connectionModeIds": [
        "online"
      ],
      "playStyleIds": [
        "co-op",
        "team"
      ],
      "universal": true,
      "gameBindable": false,
      "name": "Team Signals",
      "objective": "Start **a co-op mission with pings**. Mark a route, a threat, and supplies along the way. **Stay with the team until the mission ends**. Voice chat is optional."
    },
    "translations": {
      "en": {
        "name": "Team Signals",
        "objective": "Start **a co-op mission with pings**. Mark a route, a threat, and supplies along the way. **Stay with the team until the mission ends**. Voice chat is optional."
      },
      "de": {
        "name": "Teamsignale",
        "objective": "Starte **eine Koop-Mission mit Pings**. Markiere unterwegs einen Weg, eine Gefahr und Vorräte. **Bleib bis zum Missionsende beim Team**. Sprachchat ist freiwillig."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "shared-puzzle-table": {
    "definition": {
      "id": "shared-puzzle-table",
      "moodIds": [
        "connect"
      ],
      "type": "inspiration",
      "tags": [
        "puzzles",
        "local-play"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 20,
      "rarity": "standard",
      "gameGenreIds": [
        "puzzle"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "co-op"
      ],
      "universal": true,
      "gameBindable": false,
      "name": "Think Together",
      "objective": "Open **a puzzle game with someone beside you**. Let one person control it and **take turns suggesting moves**. Talk through your ideas and use hints together."
    },
    "translations": {
      "en": {
        "name": "Think Together",
        "objective": "Open **a puzzle game with someone beside you**. Let one person control it and **take turns suggesting moves**. Talk through your ideas and use hints together."
      },
      "de": {
        "name": "Gemeinsam knobeln",
        "objective": "Starte **ein Rätselspiel mit jemandem neben dir**. Eine Person übernimmt die Steuerung und **ihr schlagt abwechselnd Züge vor**. Sprecht über eure Ideen und nutzt gemeinsam Hinweise."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "headphones-on": {
    "definition": {
      "id": "headphones-on",
      "moodIds": [
        "focused"
      ],
      "type": "inspiration",
      "tags": [
        "puzzles"
      ],
      "minimumDurationMinutes": 5,
      "suggestedDurationMinutes": 20,
      "rarity": "standard",
      "gameGenreIds": [
        "puzzle"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": false,
      "name": "Listen Closely",
      "objective": "Open **a puzzle or detective game with sound clues**. Put on headphones if you have them and **follow what you hear**."
    },
    "translations": {
      "en": {
        "name": "Listen Closely",
        "objective": "Open **a puzzle or detective game with sound clues**. Put on headphones if you have them and **follow what you hear**."
      },
      "de": {
        "name": "Genau hinhören",
        "objective": "Starte **ein Rätsel- oder Detektivspiel mit akustischen Hinweisen**. Setze Kopfhörer auf, falls du welche hast, und **folge den Geräuschen**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "one-build": {
    "definition": {
      "id": "one-build",
      "moodIds": [
        "focused"
      ],
      "type": "inspiration",
      "tags": [
        "loadout"
      ],
      "minimumDurationMinutes": 5,
      "suggestedDurationMinutes": 20,
      "rarity": "standard",
      "gameGenreIds": [
        "rpg",
        "card",
        "roguelike"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": false,
      "name": "One Build",
      "objective": "Open **a deckbuilder or build-based RPG**. Take a setup you already enjoy and **play to its strengths**. Leave new builds for later."
    },
    "translations": {
      "en": {
        "name": "One Build",
        "objective": "Open **a deckbuilder or build-based RPG**. Take a setup you already enjoy and **play to its strengths**. Leave new builds for later."
      },
      "de": {
        "name": "Ein Build",
        "objective": "Starte **ein Deckbuilding-Spiel oder Rollenspiel mit Builds**. Nimm ein vertrautes Setup und **spiele seine Stärken aus**. Neue Builds kommen später."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "fix-the-bottleneck": {
    "definition": {
      "id": "fix-the-bottleneck",
      "moodIds": [
        "focused"
      ],
      "type": "objective",
      "tags": [
        "automation"
      ],
      "minimumDurationMinutes": 5,
      "suggestedDurationMinutes": 30,
      "rarity": "standard",
      "gameGenreIds": [
        "simulation",
        "sandbox"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": false,
      "name": "Find the Bottleneck",
      "objective": "Open **an automation save with a stalled line**. Find and restore its missing input. **Watch three products reach the output**."
    },
    "translations": {
      "en": {
        "name": "Find the Bottleneck",
        "objective": "Open **an automation save with a stalled line**. Find and restore its missing input. **Watch three products reach the output**."
      },
      "de": {
        "name": "Finde den Engpass",
        "objective": "Öffne **einen Spielstand, in dem eine Produktionslinie stillsteht**. Finde heraus, was ihr fehlt, und bring sie wieder zum Laufen. **Warte, bis drei Produkte am Ausgang ankommen**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "one-lead": {
    "definition": {
      "id": "one-lead",
      "moodIds": [
        "focused"
      ],
      "type": "objective",
      "tags": [
        "story"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 20,
      "rarity": "standard",
      "gameGenreIds": [
        "narrative"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": false,
      "name": "Follow One Lead",
      "objective": "Continue **a detective game with an open lead and evidence board**. Follow its clues and conversations until **one new piece of evidence is recorded**."
    },
    "translations": {
      "en": {
        "name": "Follow One Lead",
        "objective": "Continue **a detective game with an open lead and evidence board**. Follow its clues and conversations until **one new piece of evidence is recorded**."
      },
      "de": {
        "name": "Eine Spur verfolgen",
        "objective": "Setze **ein Detektivspiel mit einer offenen Spur** fort. Geh den Hinweisen nach und sprich mit den Beteiligten, bis **ein neuer Beweis auf deiner Beweistafel landet**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "turn-based-one-front": {
    "definition": {
      "id": "turn-based-one-front",
      "moodIds": [
        "focused"
      ],
      "type": "inspiration",
      "tags": [],
      "minimumDurationMinutes": 5,
      "suggestedDurationMinutes": 25,
      "rarity": "standard",
      "gameGenreIds": [
        "strategy"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": false,
      "name": "One Front",
      "objective": "Open **a turn-based strategy save with several fronts**. **Focus on one region or group of units**. Handle the other fronts only when needed."
    },
    "translations": {
      "en": {
        "name": "One Front",
        "objective": "Open **a turn-based strategy save with several fronts**. **Focus on one region or group of units**. Handle the other fronts only when needed."
      },
      "de": {
        "name": "Eine Front",
        "objective": "Öffne **einen rundenbasierten Strategiespielstand mit mehreren Fronten**. **Konzentrier dich auf eine Region oder Einheitengruppe**. Um die anderen Fronten kümmerst du dich nur, wenn es nötig ist."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "ending-in-sight": {
    "definition": {
      "id": "ending-in-sight",
      "moodIds": [
        "focused"
      ],
      "type": "inspiration",
      "tags": [
        "current-save",
        "story"
      ],
      "minimumDurationMinutes": 10,
      "suggestedDurationMinutes": 30,
      "rarity": "standard",
      "gameGenreIds": [
        "adventure",
        "rpg",
        "narrative"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": false,
      "name": "Ending in Sight",
      "objective": "Return to **an unfinished story game that feels close to its ending**. Follow only the main path and give its final stretch your full attention. Stop at a save point if the ending is farther away than expected."
    },
    "translations": {
      "en": {
        "name": "Ending in Sight",
        "objective": "Return to **an unfinished story game that feels close to its ending**. Follow only the main path and give its final stretch your full attention. Stop at a save point if the ending is farther away than expected."
      },
      "de": {
        "name": "Das Ende in Sicht",
        "objective": "Kehre zu **einem Storyspiel zurück, bei dem das Ende in Sicht ist**. Bleib auf dem Hauptweg und lass Nebenquests aus. Wenn das Ende doch weiter weg ist, hör am nächsten Speicherpunkt auf."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "childhood-save": {
    "definition": {
      "id": "childhood-save",
      "moodIds": [
        "nostalgic"
      ],
      "type": "inspiration",
      "tags": [
        "replay"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 15,
      "rarity": "standard",
      "gameGenreIds": [],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": false,
      "name": "Childhood Save",
      "objective": "Open **a game you loved as a child**. Visit the first level or place you remember and **play it like you used to**. Progress can wait."
    },
    "translations": {
      "en": {
        "name": "Childhood Save",
        "objective": "Open **a game you loved as a child**. Visit the first level or place you remember and **play it like you used to**. Progress can wait."
      },
      "de": {
        "name": "Spielstand von früher",
        "objective": "Starte **ein Lieblingsspiel aus deiner Kindheit**. Besuche das Level oder den Ort, der dir zuerst einfällt, und **spiele wie damals**. Fortschritt kann warten."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "back-then": {
    "definition": {
      "id": "back-then",
      "moodIds": [
        "nostalgic"
      ],
      "type": "inspiration",
      "tags": [
        "replay"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 15,
      "rarity": "standard",
      "gameGenreIds": [],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "co-op",
        "solo"
      ],
      "universal": true,
      "gameBindable": false,
      "name": "Back Then",
      "objective": "Open **a game tied to an old gaming friend**. **Return to your shared map, mode, or character**, even if you are playing alone today."
    },
    "translations": {
      "en": {
        "name": "Back Then",
        "objective": "Open **a game tied to an old gaming friend**. **Return to your shared map, mode, or character**, even if you are playing alone today."
      },
      "de": {
        "name": "Weißt du noch",
        "objective": "Starte **ein Spiel, das du früher oft mit jemandem zusammen gespielt hast**. **Kehre zu eurer Karte, eurem Modus oder eurer Figur zurück**, auch wenn du heute allein spielst."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "screenshot-return": {
    "definition": {
      "id": "screenshot-return",
      "moodIds": [
        "nostalgic"
      ],
      "type": "objective",
      "tags": [
        "photography",
        "replay"
      ],
      "minimumDurationMinutes": 2,
      "suggestedDurationMinutes": 10,
      "rarity": "standard",
      "gameGenreIds": [],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": false,
      "name": "Same Place Again",
      "objective": "Find **an old screenshot from a playable game**. Return to that spot and match its camera angle. **Save a new screenshot beside the old one**."
    },
    "translations": {
      "en": {
        "name": "Same Place Again",
        "objective": "Find **an old screenshot from a playable game**. Return to that spot and match its camera angle. **Save a new screenshot beside the old one**."
      },
      "de": {
        "name": "Wieder am selben Ort",
        "objective": "Such **einen alten Screenshot aus einem Spiel, das du noch starten kannst**. Geh an denselben Ort und stell den Blickwinkel nach. **Mach ein neues Bild aus derselben Perspektive**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "classic-route": {
    "definition": {
      "id": "classic-route",
      "moodIds": [
        "nostalgic"
      ],
      "type": "objective",
      "tags": [
        "racing",
        "replay"
      ],
      "minimumDurationMinutes": 2,
      "suggestedDurationMinutes": 15,
      "rarity": "standard",
      "gameGenreIds": [
        "racing"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": false,
      "name": "The Old Route",
      "objective": "Open **an older racing game**. Take a car you used to drive to a familiar track and **finish one race**. Your placing does not matter."
    },
    "translations": {
      "en": {
        "name": "The Old Route",
        "objective": "Open **an older racing game**. Take a car you used to drive to a familiar track and **finish one race**. Your placing does not matter."
      },
      "de": {
        "name": "Die alte Strecke",
        "objective": "Starte **ein älteres Rennspiel**. Nimm einen Wagen von früher auf eine vertraute Strecke und **fahre ein Rennen zu Ende**. Deine Platzierung ist egal."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "return-to-first-character": {
    "definition": {
      "id": "return-to-first-character",
      "moodIds": [
        "nostalgic"
      ],
      "type": "inspiration",
      "tags": [
        "replay"
      ],
      "minimumDurationMinutes": 5,
      "suggestedDurationMinutes": 20,
      "rarity": "standard",
      "gameGenreIds": [],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": false,
      "name": "Your First Character",
      "objective": "Load **your first character or an early save**. Revisit a place where you learned the game and **play with your old setup**. Change only what you need."
    },
    "translations": {
      "en": {
        "name": "Your First Character",
        "objective": "Load **your first character or an early save**. Revisit a place where you learned the game and **play with your old setup**. Change only what you need."
      },
      "de": {
        "name": "Deine erste Figur",
        "objective": "Lade **deine erste Figur oder einen frühen Spielstand**. Besuche einen Ort, an dem du das Spiel gelernt hast, und **spiele mit deinem alten Setup**. Ändere nur das Nötigste."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "tiny-home": {
    "definition": {
      "id": "tiny-home",
      "moodIds": [
        "create"
      ],
      "type": "inspiration",
      "tags": [
        "building"
      ],
      "minimumDurationMinutes": 5,
      "suggestedDurationMinutes": 20,
      "rarity": "standard",
      "gameGenreIds": [
        "simulation",
        "sandbox"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": false,
      "name": "Tiny Home",
      "objective": "Open **a sandbox building game**. **Start a smaller home than usual** and try different layouts. It can stay unfinished."
    },
    "translations": {
      "en": {
        "name": "Tiny Home",
        "objective": "Open **a sandbox building game**. **Start a smaller home than usual** and try different layouts. It can stay unfinished."
      },
      "de": {
        "name": "Kleines Zuhause",
        "objective": "Starte **ein Sandbox-Bauspiel**. **Fang ein kleineres Haus an, als du sonst bauen würdest**, und probiere verschiedene Grundrisse aus. Es darf unfertig bleiben."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "one-room": {
    "definition": {
      "id": "one-room",
      "moodIds": [
        "create"
      ],
      "type": "inspiration",
      "tags": [
        "decorating"
      ],
      "minimumDurationMinutes": 5,
      "suggestedDurationMinutes": 20,
      "rarity": "standard",
      "gameGenreIds": [
        "simulation",
        "sandbox"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": false,
      "name": "Around One Object",
      "objective": "Open **a game with rooms you can redecorate**. Pick an object already there and **let its color or shape guide your changes**."
    },
    "translations": {
      "en": {
        "name": "Around One Object",
        "objective": "Open **a game with rooms you can redecorate**. Pick an object already there and **let its color or shape guide your changes**."
      },
      "de": {
        "name": "Um einen Gegenstand",
        "objective": "Starte **ein Spiel mit umgestaltbaren Räumen**. Wähle einen vorhandenen Gegenstand und **lass seine Farbe oder Form deine Änderungen bestimmen**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "short-course": {
    "definition": {
      "id": "short-course",
      "moodIds": [
        "create"
      ],
      "type": "creation",
      "tags": [
        "level-editor"
      ],
      "minimumDurationMinutes": 5,
      "suggestedDurationMinutes": 30,
      "rarity": "standard",
      "gameGenreIds": [
        "simulation",
        "sandbox"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": false,
      "name": "A Short Course",
      "objective": "In a **game with a playable level editor**, build a start, three obstacles, and a finish. Keep the route short, **complete a test run, and save the level**."
    },
    "translations": {
      "en": {
        "name": "A Short Course",
        "objective": "In a **game with a playable level editor**, build a start, three obstacles, and a finish. Keep the route short, **complete a test run, and save the level**."
      },
      "de": {
        "name": "Ein kurzer Parcours",
        "objective": "Bau in einem **Spiel, in dem du eigene Level testen kannst**, eine kurze Strecke mit Start, drei Hindernissen und Ziel. **Schaff einen Probelauf und speichere das Level**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "eight-bars": {
    "definition": {
      "id": "eight-bars",
      "moodIds": [
        "create"
      ],
      "type": "creation",
      "tags": [
        "rhythm"
      ],
      "minimumDurationMinutes": 5,
      "suggestedDurationMinutes": 30,
      "rarity": "standard",
      "gameGenreIds": [
        "rhythm"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": false,
      "name": "Eight Bars",
      "objective": "Open a **game with an in-game music sequencer**. Make an eight-bar loop with a beat and melody, **play it once from start to finish, and save it**."
    },
    "translations": {
      "en": {
        "name": "Eight Bars",
        "objective": "Open a **game with an in-game music sequencer**. Make an eight-bar loop with a beat and melody, **play it once from start to finish, and save it**."
      },
      "de": {
        "name": "Acht Takte",
        "objective": "Starte ein **Spiel mit einem Musik-Sequencer**. Baue einen Loop aus acht Takten mit Beat und Melodie, **höre ihn einmal ganz an und speichere ihn**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "workshop-inspiration": {
    "definition": {
      "id": "workshop-inspiration",
      "moodIds": [
        "create"
      ],
      "type": "inspiration",
      "tags": [
        "building"
      ],
      "minimumDurationMinutes": 5,
      "suggestedDurationMinutes": 20,
      "rarity": "standard",
      "gameGenreIds": [
        "simulation",
        "sandbox"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": false,
      "name": "Borrow an Idea",
      "objective": "Open **a building game with a community gallery**. Browse a few small creations and **try your own version of one idea** with your existing tools. It can stay unfinished."
    },
    "translations": {
      "en": {
        "name": "Borrow an Idea",
        "objective": "Open **a building game with a community gallery**. Browse a few small creations and **try your own version of one idea** with your existing tools. It can stay unfinished."
      },
      "de": {
        "name": "Eine Idee aufgreifen",
        "objective": "Starte **ein Bauspiel mit Community-Galerie**. Schau dir ein paar kleine Kreationen an und **probiere deine eigene Version einer Idee** mit vorhandenen Werkzeugen. Sie darf unfertig bleiben."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "ten-minute-save": {
    "definition": {
      "id": "ten-minute-save",
      "moodIds": [
        "overwhelmed"
      ],
      "type": "inspiration",
      "tags": [
        "current-save"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 15,
      "rarity": "standard",
      "gameGenreIds": [],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": false,
      "name": "Just Continue",
      "objective": "Open your **most recently played game with a Continue button**. **Pick up where you left off** with the same save, settings, and equipment."
    },
    "translations": {
      "en": {
        "name": "Just Continue",
        "objective": "Open your **most recently played game with a Continue button**. **Pick up where you left off** with the same save, settings, and equipment."
      },
      "de": {
        "name": "Einfach fortsetzen",
        "objective": "Starte dein **zuletzt gespieltes Spiel, das du direkt fortsetzen kannst**. **Spiel mit deinem bisherigen Spielstand und Setup weiter**, genau dort, wo du aufgehört hast."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "tutorial-return": {
    "definition": {
      "id": "tutorial-return",
      "moodIds": [
        "overwhelmed"
      ],
      "type": "inspiration",
      "tags": [
        "replay"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 15,
      "rarity": "standard",
      "gameGenreIds": [],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": false,
      "name": "Back to the Start",
      "objective": "Open **a familiar game with a replayable tutorial**. Use its default setup and **follow the tutorial at your own pace**."
    },
    "translations": {
      "en": {
        "name": "Back to the Start",
        "objective": "Open **a familiar game with a replayable tutorial**. Use its default setup and **follow the tutorial at your own pace**."
      },
      "de": {
        "name": "Zurück zum Anfang",
        "objective": "Starte **ein vertrautes Spiel mit wiederholbarem Tutorial**. Nutze die Standardeinstellungen und **folge dem Tutorial in deinem Tempo**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "todays-puzzle": {
    "definition": {
      "id": "todays-puzzle",
      "moodIds": [
        "overwhelmed"
      ],
      "type": "objective",
      "tags": [
        "puzzles",
        "no-timer"
      ],
      "minimumDurationMinutes": 2,
      "suggestedDurationMinutes": 10,
      "rarity": "standard",
      "gameGenreIds": [
        "puzzle"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": false,
      "name": "Today’s Puzzle",
      "objective": "Open your last-played **puzzle game with an untimed daily puzzle**. **Solve today’s puzzle** with any hints you need. Ignore streaks and leaderboards."
    },
    "translations": {
      "en": {
        "name": "Today’s Puzzle",
        "objective": "Open your last-played **puzzle game with an untimed daily puzzle**. **Solve today’s puzzle** with any hints you need. Ignore streaks and leaderboards."
      },
      "de": {
        "name": "Das heutige Rätsel",
        "objective": "Starte dein zuletzt gespieltes **Rätselspiel mit täglichem Rätsel ohne Zeitlimit**. **Löse das heutige Rätsel** mit beliebigen Hinweisen. Serien und Ranglisten sind egal."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "one-corner": {
    "definition": {
      "id": "one-corner",
      "moodIds": [
        "overwhelmed"
      ],
      "type": "objective",
      "tags": [
        "decorating"
      ],
      "minimumDurationMinutes": 2,
      "suggestedDurationMinutes": 10,
      "rarity": "standard",
      "gameGenreIds": [
        "simulation",
        "sandbox"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": false,
      "name": "One Corner",
      "objective": "Open **a decorating game with a furnished room**. Rearrange three objects in the corner nearest the door and **save the room**. Buy no new furniture."
    },
    "translations": {
      "en": {
        "name": "One Corner",
        "objective": "Open **a decorating game with a furnished room**. Rearrange three objects in the corner nearest the door and **save the room**. Buy no new furniture."
      },
      "de": {
        "name": "Eine Ecke",
        "objective": "Starte **ein Einrichtungsspiel mit möbliertem Raum**. Stelle drei Gegenstände in der Ecke neben der Tür um und **speichere den Raum**. Kaufe keine neuen Möbel."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "one-known-bot-mode": {
    "definition": {
      "id": "one-known-bot-mode",
      "moodIds": [
        "overwhelmed"
      ],
      "type": "inspiration",
      "tags": [
        "vs-bots"
      ],
      "minimumDurationMinutes": 2,
      "suggestedDurationMinutes": 20,
      "rarity": "standard",
      "gameGenreIds": [
        "card",
        "shooter",
        "moba",
        "strategy",
        "sports",
        "fighting"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": false,
      "name": "Ease Back In",
      "objective": "Open **a familiar solo or bot mode**. Keep your usual setup and **get comfortable with the controls again**. No difficulty changes or required wins."
    },
    "translations": {
      "en": {
        "name": "Ease Back In",
        "objective": "Open **a familiar solo or bot mode**. Keep your usual setup and **get comfortable with the controls again**. No difficulty changes or required wins."
      },
      "de": {
        "name": "Wieder reinkommen",
        "objective": "Starte **einen vertrauten Solo- oder Bot-Modus**. Behalte dein Setup und **spiel eine Runde, um wieder in die Steuerung zu kommen**. Du brauchst weder eine höhere Schwierigkeit noch einen Sieg."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "genre-swap": {
    "definition": {
      "id": "genre-swap",
      "moodIds": [
        "curious"
      ],
      "type": "inspiration",
      "tags": [
        "first-play"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 15,
      "rarity": "standard",
      "gameGenreIds": [],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": false,
      "name": "A Different Genre",
      "objective": "Open **an installed game from an unfamiliar genre**. Start its introduction and **try what feels new**. You do not need to master it today."
    },
    "translations": {
      "en": {
        "name": "A Different Genre",
        "objective": "Open **an installed game from an unfamiliar genre**. Start its introduction and **try what feels new**. You do not need to master it today."
      },
      "de": {
        "name": "Ein anderes Genre",
        "objective": "Starte **ein installiertes Spiel aus einem Genre, das du kaum spielst**. Spiel den Einstieg und **probier eine Mechanik aus, die dir neu ist**. Du musst sie heute nicht meistern."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "same-era": {
    "definition": {
      "id": "same-era",
      "moodIds": [
        "curious"
      ],
      "type": "inspiration",
      "tags": [
        "story"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 15,
      "rarity": "standard",
      "gameGenreIds": [
        "adventure",
        "narrative"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": false,
      "name": "The Same Era",
      "objective": "Choose **a historical game** from the era of a film or series you watched recently. **Explore its streets, clothing, and daily life**."
    },
    "translations": {
      "en": {
        "name": "The Same Era",
        "objective": "Choose **a historical game** from the era of a film or series you watched recently. **Explore its streets, clothing, and daily life**."
      },
      "de": {
        "name": "Dieselbe Epoche",
        "objective": "Wähle **ein historisches Spiel**, das zur Zeit eines Films oder einer Serie spielt, die du kürzlich gesehen hast. **Schau dir Straßen, Kleidung und Alltag im Spiel an**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "least-used-character": {
    "definition": {
      "id": "least-used-character",
      "moodIds": [
        "curious"
      ],
      "type": "experiment",
      "tags": [
        "new-approach",
        "one-round"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 15,
      "rarity": "standard",
      "gameGenreIds": [
        "shooter",
        "rpg",
        "roguelike",
        "fighting",
        "moba"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": false,
      "name": "Someone New",
      "objective": "Open **a character-based game with short rounds**. Pick an unplayed, unlocked character and read their abilities. **Use an unfamiliar ability and finish the round**."
    },
    "translations": {
      "en": {
        "name": "Someone New",
        "objective": "Open **a character-based game with short rounds**. Pick an unplayed, unlocked character and read their abilities. **Use an unfamiliar ability and finish the round**."
      },
      "de": {
        "name": "Jemand Neues",
        "objective": "Starte **ein Spiel mit Figurenwahl und kurzen Runden**. Wähle eine ungespielte, freigeschaltete Figur und lies ihre Fähigkeiten. **Nutze eine unbekannte Fähigkeit und beende die Runde**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "one-variable": {
    "definition": {
      "id": "one-variable",
      "moodIds": [
        "curious"
      ],
      "type": "experiment",
      "tags": [
        "new-approach"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 20,
      "rarity": "standard",
      "gameGenreIds": [
        "simulation"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": false,
      "name": "Change One Variable",
      "objective": "Open **a simulation with a short replayable scenario**. Finish it, change one setting, and **replay it to compare the results**. Keep everything else the same."
    },
    "translations": {
      "en": {
        "name": "Change One Variable",
        "objective": "Open **a simulation with a short replayable scenario**. Finish it, change one setting, and **replay it to compare the results**. Keep everything else the same."
      },
      "de": {
        "name": "Eine Variable ändern",
        "objective": "Starte **eine Simulation mit kurzem wiederholbarem Szenario**. Beende es, ändere eine Einstellung und **vergleiche die Ergebnisse einer Wiederholung**. Lass alles andere gleich."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "different-viewpoint-session": {
    "definition": {
      "id": "different-viewpoint-session",
      "moodIds": [
        "curious"
      ],
      "type": "inspiration",
      "tags": [
        "story"
      ],
      "minimumDurationMinutes": 5,
      "suggestedDurationMinutes": 20,
      "rarity": "standard",
      "gameGenreIds": [
        "adventure",
        "narrative"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": false,
      "name": "Another Perspective",
      "objective": "Open **an adventure with several playable viewpoints**. Choose an unlocked chapter for another character and **see the world through their eyes**."
    },
    "translations": {
      "en": {
        "name": "Another Perspective",
        "objective": "Open **an adventure with several playable viewpoints**. Choose an unlocked chapter for another character and **see the world through their eyes**."
      },
      "de": {
        "name": "Eine andere Perspektive",
        "objective": "Starte **ein Abenteuerspiel mit mehreren spielbaren Figuren**. Wähle ein freigeschaltetes Kapitel einer anderen Figur und **spiel es aus ihrer Perspektive**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "break-the-seal": {
    "definition": {
      "id": "break-the-seal",
      "moodIds": [
        "curious"
      ],
      "type": "inspiration",
      "tags": [
        "first-play"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 20,
      "rarity": "standard",
      "gameGenreIds": [],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": false,
      "name": "Break the Seal",
      "objective": "Choose **an installed game you have never started**. Begin with its default difficulty, adjust accessibility options as needed, and spend this session discovering its introduction. Continue only while you are curious."
    },
    "translations": {
      "en": {
        "name": "Break the Seal",
        "objective": "Choose **an installed game you have never started**. Begin with its default difficulty, adjust accessibility options as needed, and spend this session discovering its introduction. Continue only while you are curious."
      },
      "de": {
        "name": "Endlich anfangen",
        "objective": "Wähle **ein installiertes Spiel, das du noch nie gestartet hast**. Starte mit dem normalen Schwierigkeitsgrad, passe Barrierefreiheitsoptionen bei Bedarf an und spiel den Einstieg. Mach nur weiter, solange du neugierig bist."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "forgotten-install": {
    "definition": {
      "id": "forgotten-install",
      "moodIds": [
        "curious"
      ],
      "type": "inspiration",
      "tags": [
        "first-play",
        "exploration"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 15,
      "rarity": "standard",
      "gameGenreIds": [],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": false,
      "name": "Forgotten Install",
      "objective": "Open **an installed game whose title you barely remember**. Skip reviews and guides, enter its first playable section, and learn what kind of game it is by playing."
    },
    "translations": {
      "en": {
        "name": "Forgotten Install",
        "objective": "Open **an installed game whose title you barely remember**. Skip reviews and guides, enter its first playable section, and learn what kind of game it is by playing."
      },
      "de": {
        "name": "Vergessene Installation",
        "objective": "Starte **ein installiertes Spiel, an dessen Titel du dich kaum erinnerst**. Lass Tests und Guides aus, beginne den ersten spielbaren Abschnitt und finde beim Spielen heraus, was für ein Spiel es ist."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "beyond-the-map": {
    "definition": {
      "id": "beyond-the-map",
      "moodIds": [
        "explore",
        "curious"
      ],
      "type": "objective",
      "tags": [
        "exploration",
        "on-foot"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 20,
      "customGameCompatibility": {
        "capabilityIds": [
          "open-world"
        ],
        "match": "all"
      },
      "rarity": "standard",
      "gameGenreIds": [
        "adventure"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": true,
      "name": "Beyond the Map",
      "objective": "Open a **freely explorable game**. Pick an unvisited landmark and **find your own way there and back**. Use the world around you to navigate.",
      "gameObjective": "Open **{{game}}**. Pick an unvisited landmark and **find your own way there and back**. Use the world around you to navigate."
    },
    "translations": {
      "en": {
        "name": "Beyond the Map",
        "objective": "Open a **freely explorable game**. Pick an unvisited landmark and **find your own way there and back**. Use the world around you to navigate.",
        "gameObjective": "Open **{{game}}**. Pick an unvisited landmark and **find your own way there and back**. Use the world around you to navigate."
      },
      "de": {
        "name": "Abseits der Karte",
        "objective": "Starte ein **frei erkundbares Spiel**. Such dir einen Ort, an dem du noch nicht warst, und **find selbst einen Weg hin und zurück**. Orientier dich an dem, was du in der Spielwelt siehst.",
        "gameObjective": "Starte **{{game}}**. Such dir einen Ort, an dem du noch nicht warst, und **find selbst einen Weg hin und zurück**. Orientier dich an dem, was du in der Spielwelt siehst."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "main-mission": {
    "definition": {
      "id": "main-mission",
      "moodIds": [
        "progress",
        "focused"
      ],
      "type": "objective",
      "tags": [
        "current-save"
      ],
      "minimumDurationMinutes": 5,
      "suggestedDurationMinutes": 30,
      "customGameCompatibility": {
        "capabilityIds": [
          "missions-or-levels"
        ],
        "match": "all"
      },
      "rarity": "standard",
      "gameGenreIds": [
        "adventure",
        "platformer",
        "shooter",
        "rpg",
        "strategy",
        "narrative",
        "stealth"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": true,
      "name": "Move the Story",
      "objective": "Open a **game with missions or levels**. Continue where you left off and **complete the next main objective**. Stop at the next save point.",
      "gameObjective": "Open **{{game}}**. Continue where you left off and **complete the next main objective**. Stop at the next save point."
    },
    "translations": {
      "en": {
        "name": "Move the Story",
        "objective": "Open a **game with missions or levels**. Continue where you left off and **complete the next main objective**. Stop at the next save point.",
        "gameObjective": "Open **{{game}}**. Continue where you left off and **complete the next main objective**. Stop at the next save point."
      },
      "de": {
        "name": "Story weiterspielen",
        "objective": "Starte ein **Spiel mit Missionen oder Leveln**. Mach dort weiter, wo du aufgehört hast, und **erledige das nächste Hauptziel**. Hör am nächsten Speicherpunkt auf.",
        "gameObjective": "Starte **{{game}}**. Mach dort weiter, wo du aufgehört hast, und **erledige das nächste Hauptziel**. Hör am nächsten Speicherpunkt auf."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "one-level-no-detours": {
    "definition": {
      "id": "one-level-no-detours",
      "moodIds": [
        "focused",
        "progress"
      ],
      "type": "objective",
      "tags": [
        "current-save"
      ],
      "minimumDurationMinutes": 2,
      "suggestedDurationMinutes": 15,
      "rarity": "standard",
      "gameGenreIds": [
        "adventure"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": false,
      "name": "Straight to the Exit",
      "objective": "Open a **game with short missions or levels**. Start a short mission or level and **follow the main route to the end**. Skip optional rooms and collectibles."
    },
    "translations": {
      "en": {
        "name": "Straight to the Exit",
        "objective": "Open a **game with short missions or levels**. Start a short mission or level and **follow the main route to the end**. Skip optional rooms and collectibles."
      },
      "de": {
        "name": "Direkt zum Ausgang",
        "objective": "Starte ein **Spiel mit kurzen Missionen oder Leveln**. Wähle eine kurze Mission oder ein Level und **bleib bis zum Ende auf dem Hauptweg**. Optionale Räume und Sammelobjekte lässt du aus."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "planet-compare": {
    "definition": {
      "id": "planet-compare",
      "moodIds": [
        "explore",
        "curious"
      ],
      "type": "experiment",
      "tags": [
        "space",
        "exploration"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 25,
      "customGameCompatibility": {
        "capabilityIds": [
          "space-exploration"
        ],
        "match": "all"
      },
      "rarity": "standard",
      "gameGenreIds": [
        "adventure",
        "survival",
        "sandbox"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": true,
      "name": "Two Worlds",
      "objective": "Open a **space game with landable planets**. Walk around two different-looking planets and **take one screenshot on each**.",
      "gameObjective": "Open **{{game}}**. Walk around two different-looking planets and **take one screenshot on each**."
    },
    "translations": {
      "en": {
        "name": "Two Worlds",
        "objective": "Open a **space game with landable planets**. Walk around two different-looking planets and **take one screenshot on each**.",
        "gameObjective": "Open **{{game}}**. Walk around two different-looking planets and **take one screenshot on each**."
      },
      "de": {
        "name": "Zwei Welten",
        "objective": "Starte ein **Weltraumspiel mit begehbaren Planeten**. Erkunde zwei unterschiedlich aussehende Planeten zu Fuß und **mach auf jedem einen Screenshot**.",
        "gameObjective": "Starte **{{game}}**. Erkunde zwei unterschiedlich aussehende Planeten zu Fuß und **mach auf jedem einen Screenshot**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "swim-return-trip": {
    "definition": {
      "id": "swim-return-trip",
      "moodIds": [
        "explore",
        "restless"
      ],
      "type": "objective",
      "tags": [
        "diving"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 15,
      "customGameCompatibility": {
        "capabilityIds": [
          "swimming"
        ],
        "match": "all"
      },
      "rarity": "standard",
      "gameGenreIds": [
        "adventure"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": true,
      "name": "Under and Back",
      "objective": "Open a **game with swimming and diving**. Pick a visible point across the water. **Swim there, dive, and return**.",
      "gameObjective": "Open **{{game}}**. Pick a visible point across the water. **Swim there, dive, and return**."
    },
    "translations": {
      "en": {
        "name": "Under and Back",
        "objective": "Open a **game with swimming and diving**. Pick a visible point across the water. **Swim there, dive, and return**.",
        "gameObjective": "Open **{{game}}**. Pick a visible point across the water. **Swim there, dive, and return**."
      },
      "de": {
        "name": "Hin, runter, zurück",
        "objective": "Starte ein **Spiel mit Schwimmen und Tauchen**. Such dir einen Punkt auf der anderen Seite des Wassers. **Schwimm hin, tauch dort ab und kehr wieder zurück**.",
        "gameObjective": "Starte **{{game}}**. Such dir einen Punkt auf der anderen Seite des Wassers. **Schwimm hin, tauch dort ab und kehr wieder zurück**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "boss-practice": {
    "definition": {
      "id": "boss-practice",
      "moodIds": [
        "challenge",
        "focused"
      ],
      "type": "challenge",
      "tags": [
        "boss",
        "three-attempts"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 20,
      "customGameCompatibility": {
        "capabilityIds": [
          "boss-fights"
        ],
        "match": "all"
      },
      "rarity": "standard",
      "gameGenreIds": [
        "adventure",
        "rpg",
        "platformer",
        "roguelike",
        "shooter"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": true,
      "name": "Read the Boss",
      "objective": "Open a **game with repeatable boss fights**. Try a new response to an attack that often catches you. **Beat the boss or finish three attempts**.",
      "gameObjective": "Open **{{game}}**. Try a new response to an attack that often catches you. **Beat the boss or finish three attempts**."
    },
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
    "catalogRevision": "2026-10-04-before"
  },
  "watch-one-patrol": {
    "definition": {
      "id": "watch-one-patrol",
      "moodIds": [
        "curious",
        "explore"
      ],
      "type": "experiment",
      "tags": [
        "stealth",
        "new-approach"
      ],
      "minimumDurationMinutes": 2,
      "suggestedDurationMinutes": 10,
      "customGameCompatibility": {
        "capabilityIds": [
          "stealth"
        ],
        "match": "all"
      },
      "rarity": "standard",
      "gameGenreIds": [
        "stealth"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": true,
      "name": "Watch the Patrol",
      "objective": "Open a **game with patrolling guards**. Watch a patrol from cover and find an opening. **Use it to sneak past unseen**.",
      "gameObjective": "Open **{{game}}**. Watch a patrol from cover and find an opening. **Use it to sneak past unseen**."
    },
    "translations": {
      "en": {
        "name": "Watch the Patrol",
        "objective": "Open a **game with patrolling guards**. Watch a patrol from cover and find an opening. **Use it to sneak past unseen**.",
        "gameObjective": "Open **{{game}}**. Watch a patrol from cover and find an opening. **Use it to sneak past unseen**."
      },
      "de": {
        "name": "Die Patrouille",
        "objective": "Starte ein **Spiel mit patrouillierenden Wachen**. Beobachte eine Patrouille aus der Deckung. Wenn sich eine Lücke auftut, **schleich ungesehen an ihr vorbei**.",
        "gameObjective": "Starte **{{game}}**. Beobachte eine Patrouille aus der Deckung. Wenn sich eine Lücke auftut, **schleich ungesehen an ihr vorbei**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "craft-from-storage": {
    "definition": {
      "id": "craft-from-storage",
      "moodIds": [
        "progress",
        "overwhelmed"
      ],
      "type": "objective",
      "tags": [
        "crafting"
      ],
      "minimumDurationMinutes": 2,
      "suggestedDurationMinutes": 10,
      "customGameCompatibility": {
        "capabilityIds": [
          "crafting"
        ],
        "match": "all"
      },
      "rarity": "standard",
      "gameGenreIds": [
        "rpg",
        "survival"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": true,
      "name": "From Storage",
      "objective": "Open a **game with crafting**. Pick a recipe you have all the materials for and **craft it once**. Gather and buy nothing.",
      "gameObjective": "Open **{{game}}**. Pick a recipe you have all the materials for and **craft it once**. Gather and buy nothing."
    },
    "translations": {
      "en": {
        "name": "From Storage",
        "objective": "Open a **game with crafting**. Pick a recipe you have all the materials for and **craft it once**. Gather and buy nothing.",
        "gameObjective": "Open **{{game}}**. Pick a recipe you have all the materials for and **craft it once**. Gather and buy nothing."
      },
      "de": {
        "name": "Aus dem Vorrat",
        "objective": "Starte ein **Spiel mit Crafting**. Wähle ein Rezept mit vollständig vorhandenen Materialien und **stelle es einmal her**. Sammle und kaufe nichts dazu.",
        "gameObjective": "Starte **{{game}}**. Wähle ein Rezept mit vollständig vorhandenen Materialien und **stelle es einmal her**. Sammle und kaufe nichts dazu."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "first-recipe": {
    "definition": {
      "id": "first-recipe",
      "moodIds": [
        "relax",
        "low-energy"
      ],
      "type": "objective",
      "tags": [
        "cooking"
      ],
      "minimumDurationMinutes": 2,
      "suggestedDurationMinutes": 10,
      "customGameCompatibility": {
        "capabilityIds": [
          "cooking"
        ],
        "match": "all"
      },
      "rarity": "standard",
      "gameGenreIds": [
        "simulation",
        "cozy",
        "survival"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": true,
      "name": "From the Pantry",
      "objective": "Open a **game with cooking**. Use ingredients you already have and **cook one portion of a known recipe**.",
      "gameObjective": "Open **{{game}}**. Use ingredients you already have and **cook one portion of a known recipe**."
    },
    "translations": {
      "en": {
        "name": "From the Pantry",
        "objective": "Open a **game with cooking**. Use ingredients you already have and **cook one portion of a known recipe**.",
        "gameObjective": "Open **{{game}}**. Use ingredients you already have and **cook one portion of a known recipe**."
      },
      "de": {
        "name": "Aus der Vorratskammer",
        "objective": "Starte ein **Spiel mit Kochen**. Nutze vorhandene Zutaten und **koche eine Portion nach einem bekannten Rezept**.",
        "gameObjective": "Starte **{{game}}**. Nutze vorhandene Zutaten und **koche eine Portion nach einem bekannten Rezept**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "movement-new-line": {
    "definition": {
      "id": "movement-new-line",
      "moodIds": [
        "explore",
        "restless"
      ],
      "type": "objective",
      "tags": [
        "traversal",
        "new-approach"
      ],
      "minimumDurationMinutes": 2,
      "suggestedDurationMinutes": 10,
      "customGameCompatibility": {
        "capabilityIds": [
          "advanced-traversal"
        ],
        "match": "all"
      },
      "rarity": "standard",
      "gameGenreIds": [
        "adventure",
        "platformer"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": true,
      "name": "A New Way Up",
      "objective": "Open a **game with climbing or movement abilities**. Pick a reachable ledge or platform. **Find a new route there and return to the start**.",
      "gameObjective": "Open **{{game}}**. Pick a reachable ledge or platform. **Find a new route there and return to the start**."
    },
    "translations": {
      "en": {
        "name": "A New Way Up",
        "objective": "Open a **game with climbing or movement abilities**. Pick a reachable ledge or platform. **Find a new route there and return to the start**.",
        "gameObjective": "Open **{{game}}**. Pick a reachable ledge or platform. **Find a new route there and return to the start**."
      },
      "de": {
        "name": "Ein neuer Weg",
        "objective": "Starte ein **Spiel mit Klettern oder Bewegungsfähigkeiten**. Wähle einen erreichbaren Vorsprung oder eine Plattform. **Finde einen neuen Weg dorthin und kehre zum Start zurück**.",
        "gameObjective": "Starte **{{game}}**. Wähle einen erreichbaren Vorsprung oder eine Plattform. **Finde einen neuen Weg dorthin und kehre zum Start zurück**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "two-color-look": {
    "definition": {
      "id": "two-color-look",
      "moodIds": [
        "create",
        "relax"
      ],
      "type": "creation",
      "tags": [
        "outfit",
        "two-colors"
      ],
      "minimumDurationMinutes": 2,
      "suggestedDurationMinutes": 10,
      "customGameCompatibility": {
        "capabilityIds": [
          "customization"
        ],
        "match": "all"
      },
      "rarity": "standard",
      "gameGenreIds": [
        "sandbox"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": true,
      "name": "Two Colors",
      "objective": "Open a **game with appearance customization**. Create a look from owned items using **two main colors**. Equip it and see it in gameplay.",
      "gameObjective": "Open **{{game}}**. Create a look from owned items using **two main colors**. Equip it and see it in gameplay."
    },
    "translations": {
      "en": {
        "name": "Two Colors",
        "objective": "Open a **game with appearance customization**. Create a look from owned items using **two main colors**. Equip it and see it in gameplay.",
        "gameObjective": "Open **{{game}}**. Create a look from owned items using **two main colors**. Equip it and see it in gameplay."
      },
      "de": {
        "name": "Zwei Farben",
        "objective": "Starte ein **Spiel mit anpassbarem Aussehen** und gestalte einen Look in **zwei Hauptfarben**.",
        "gameObjective": "Starte **{{game}}** und wähle einen neuen Look in **zwei Hauptfarben**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "trade-three-kinds": {
    "definition": {
      "id": "trade-three-kinds",
      "moodIds": [
        "overwhelmed",
        "low-energy",
        "progress"
      ],
      "type": "objective",
      "tags": [
        "trading"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 15,
      "customGameCompatibility": {
        "capabilityIds": [
          "trading"
        ],
        "match": "all"
      },
      "rarity": "standard",
      "gameGenreIds": [
        "rpg"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": true,
      "name": "Sell and Replace",
      "objective": "Open a **game with merchants**. Visit a nearby merchant and **sell three unused items**. Spend the earnings on a new item at the next merchant you find.",
      "gameObjective": "Open **{{game}}**. Visit a nearby merchant and **sell three unused items**. Spend the earnings on a new item at the next merchant you find."
    },
    "translations": {
      "en": {
        "name": "Sell and Replace",
        "objective": "Open a **game with merchants**. Visit a nearby merchant and **sell three unused items**. Spend the earnings on a new item at the next merchant you find.",
        "gameObjective": "Open **{{game}}**. Visit a nearby merchant and **sell three unused items**. Spend the earnings on a new item at the next merchant you find."
      },
      "de": {
        "name": "Verkaufen und ersetzen",
        "objective": "Starte ein **Spiel mit Händlern**. Verkauf bei einem Händler **drei Items, die du nicht mehr brauchst**. Kauf dir vom Erlös bei einem anderen Händler etwas Neues.",
        "gameObjective": "Starte **{{game}}**. Verkauf bei einem Händler **drei Items, die du nicht mehr brauchst**. Kauf dir vom Erlös bei einem anderen Händler etwas Neues."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "replay-a-favorite-mission": {
    "definition": {
      "id": "replay-a-favorite-mission",
      "moodIds": [
        "nostalgic"
      ],
      "type": "objective",
      "tags": [
        "replay"
      ],
      "minimumDurationMinutes": 5,
      "suggestedDurationMinutes": 20,
      "customGameCompatibility": {
        "capabilityIds": [
          "missions-or-levels"
        ],
        "match": "all"
      },
      "rarity": "standard",
      "gameGenreIds": [
        "adventure",
        "platformer",
        "shooter",
        "rpg",
        "strategy",
        "narrative",
        "stealth"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": true,
      "name": "That Mission Again",
      "objective": "Open a **game with replayable missions or levels**. Choose an unlocked favorite and **play it through to the end**. Use the route or approach you remember.",
      "gameObjective": "Open **{{game}}**. Choose an unlocked favorite and **play it through to the end**. Use the route or approach you remember."
    },
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
    "catalogRevision": "2026-10-04-before"
  },
  "planet-horizon-loop": {
    "definition": {
      "id": "planet-horizon-loop",
      "moodIds": [
        "explore",
        "focused"
      ],
      "type": "objective",
      "tags": [
        "space",
        "exploration"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 20,
      "customGameCompatibility": {
        "capabilityIds": [
          "space-exploration"
        ],
        "match": "all"
      },
      "rarity": "standard",
      "gameGenreIds": [
        "adventure",
        "survival",
        "sandbox"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": true,
      "name": "Beyond the Landing",
      "objective": "Open a **space game with landable planets**. On a safe planet, **walk to a nearby hill or rock formation and back**. Take another path home or return early if supplies run low.",
      "gameObjective": "Open **{{game}}**. On a safe planet, **walk to a nearby hill or rock formation and back**. Take another path home or return early if supplies run low."
    },
    "translations": {
      "en": {
        "name": "Beyond the Landing",
        "objective": "Open a **space game with landable planets**. On a safe planet, **walk to a nearby hill or rock formation and back**. Take another path home or return early if supplies run low.",
        "gameObjective": "Open **{{game}}**. On a safe planet, **walk to a nearby hill or rock formation and back**. Take another path home or return early if supplies run low."
      },
      "de": {
        "name": "Jenseits des Landeplatzes",
        "objective": "Starte ein **Weltraumspiel mit begehbaren Planeten**. Such dir einen sicheren Planeten und **geh zu einem Hügel oder Felsen in der Nähe und zurück**. Nimm einen anderen Rückweg oder kehre bei knappen Vorräten früher um.",
        "gameObjective": "Starte **{{game}}**. Such dir einen sicheren Planeten und **geh zu einem Hügel oder Felsen in der Nähe und zurück**. Nimm einen anderen Rückweg oder kehre bei knappen Vorräten früher um."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "underwater-look": {
    "definition": {
      "id": "underwater-look",
      "moodIds": [
        "curious",
        "explore"
      ],
      "type": "objective",
      "tags": [
        "diving"
      ],
      "minimumDurationMinutes": 2,
      "suggestedDurationMinutes": 10,
      "customGameCompatibility": {
        "capabilityIds": [
          "swimming"
        ],
        "match": "all"
      },
      "rarity": "standard",
      "gameGenreIds": [
        "adventure"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": true,
      "name": "Under the Surface",
      "objective": "Open a **game with swimming and diving**. Choose shallow water with a safe exit. **Inspect the bottom and return to shore** before your air runs low. Compare the terrain with the bank.",
      "gameObjective": "Open **{{game}}**. Choose shallow water with a safe exit. **Inspect the bottom and return to shore** before your air runs low. Compare the terrain with the bank."
    },
    "translations": {
      "en": {
        "name": "Under the Surface",
        "objective": "Open a **game with swimming and diving**. Choose shallow water with a safe exit. **Inspect the bottom and return to shore** before your air runs low. Compare the terrain with the bank.",
        "gameObjective": "Open **{{game}}**. Choose shallow water with a safe exit. **Inspect the bottom and return to shore** before your air runs low. Compare the terrain with the bank."
      },
      "de": {
        "name": "Unter der Oberfläche",
        "objective": "Starte ein **Spiel mit Schwimmen und Tauchen**. Such dir flaches Wasser, aus dem du leicht wieder herauskommst. **Schau dich am Grund um und kehr ans Ufer zurück**, bevor dir die Luft ausgeht. Achte auf etwas, das du vom Ufer aus nicht sehen konntest.",
        "gameObjective": "Starte **{{game}}**. Such dir flaches Wasser, aus dem du leicht wieder herauskommst. **Schau dich am Grund um und kehr ans Ufer zurück**, bevor dir die Luft ausgeht. Achte auf etwas, das du vom Ufer aus nicht sehen konntest."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "boss-opening-window": {
    "definition": {
      "id": "boss-opening-window",
      "moodIds": [
        "challenge",
        "focused"
      ],
      "type": "challenge",
      "tags": [
        "boss",
        "three-attempts"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 20,
      "customGameCompatibility": {
        "capabilityIds": [
          "boss-fights"
        ],
        "match": "all"
      },
      "rarity": "standard",
      "gameGenreIds": [
        "adventure",
        "rpg",
        "platformer",
        "roguelike",
        "shooter"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": true,
      "name": "After the Dodge",
      "objective": "Open a **game with repeatable boss fights**. Choose a solo boss you have reached. **Hit just after dodging one familiar attack**. Beat the boss or stop after three attempts.",
      "gameObjective": "Open **{{game}}**. Choose a solo boss you have reached. **Hit just after dodging one familiar attack**. Beat the boss or stop after three attempts."
    },
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
    "catalogRevision": "2026-10-04-before"
  },
  "boss-comeback-session": {
    "definition": {
      "id": "boss-comeback-session",
      "moodIds": [
        "challenge"
      ],
      "type": "inspiration",
      "tags": [
        "boss",
        "replay"
      ],
      "minimumDurationMinutes": 5,
      "suggestedDurationMinutes": 20,
      "customGameCompatibility": {
        "capabilityIds": [
          "boss-fights"
        ],
        "match": "all"
      },
      "rarity": "standard",
      "gameGenreIds": [
        "adventure",
        "rpg",
        "platformer",
        "roguelike",
        "shooter"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": true,
      "name": "The Rematch",
      "objective": "Open a **game with repeatable boss fights**. Return to an available boss that once gave you trouble. **Try the rematch with your current gear and skills**. Stop between attempts whenever you like.",
      "gameObjective": "Open **{{game}}**. Return to an available boss that once gave you trouble. **Try the rematch with your current gear and skills**. Stop between attempts whenever you like."
    },
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
    "catalogRevision": "2026-10-04-before"
  },
  "stealth-second-passage": {
    "definition": {
      "id": "stealth-second-passage",
      "moodIds": [
        "explore",
        "curious"
      ],
      "type": "experiment",
      "tags": [
        "stealth",
        "no-detection"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 15,
      "customGameCompatibility": {
        "capabilityIds": [
          "stealth"
        ],
        "match": "all"
      },
      "rarity": "standard",
      "gameGenreIds": [
        "stealth"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": true,
      "name": "Another Way Past",
      "objective": "Open a **game with patrolling guards**. In a replayable solo area, revisit a familiar patrol. **Sneak past unseen by a different route**.",
      "gameObjective": "Open **{{game}}**. In a replayable solo area, revisit a familiar patrol. **Sneak past unseen by a different route**."
    },
    "translations": {
      "en": {
        "name": "Another Way Past",
        "objective": "Open a **game with patrolling guards**. In a replayable solo area, revisit a familiar patrol. **Sneak past unseen by a different route**.",
        "gameObjective": "Open **{{game}}**. In a replayable solo area, revisit a familiar patrol. **Sneak past unseen by a different route**."
      },
      "de": {
        "name": "Anders vorbeikommen",
        "objective": "Starte ein **Spiel mit patrouillierenden Wachen**. Besuche in einem wiederholbaren Solo-Bereich eine bekannte Patrouille. **Schleiche auf einem anderen Weg ungesehen vorbei**.",
        "gameObjective": "Starte **{{game}}**. Besuche in einem wiederholbaren Solo-Bereich eine bekannte Patrouille. **Schleiche auf einem anderen Weg ungesehen vorbei**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "platform-next-checkpoint": {
    "definition": {
      "id": "platform-next-checkpoint",
      "moodIds": [
        "progress",
        "overwhelmed"
      ],
      "type": "objective",
      "tags": [
        "traversal",
        "current-save"
      ],
      "minimumDurationMinutes": 2,
      "suggestedDurationMinutes": 10,
      "customGameCompatibility": {
        "capabilityIds": [
          "platforming"
        ],
        "genreIds": [
          "platformer"
        ],
        "match": "all"
      },
      "rarity": "standard",
      "gameGenreIds": [
        "platformer"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": true,
      "name": "The Next Checkpoint",
      "objective": "Open a **platformer with checkpoints**. On a level with checkpoints, continue from your current position and **activate the next checkpoint**. Use retries and assists if needed. Leave the rest of the level for later.",
      "gameObjective": "In **{{game}}**: On a level with checkpoints, continue from your current position and **activate the next checkpoint**. Use retries and assists if needed. Leave the rest of the level for later."
    },
    "translations": {
      "en": {
        "name": "The Next Checkpoint",
        "objective": "Open a **platformer with checkpoints**. On a level with checkpoints, continue from your current position and **activate the next checkpoint**. Use retries and assists if needed. Leave the rest of the level for later.",
        "gameObjective": "In **{{game}}**: On a level with checkpoints, continue from your current position and **activate the next checkpoint**. Use retries and assists if needed. Leave the rest of the level for later."
      },
      "de": {
        "name": "Der nächste Checkpoint",
        "objective": "Starte ein **Plattformer mit Checkpoints**. Mach an deiner aktuellen Stelle weiter und **erreich den nächsten Checkpoint**. Wiederholungen und Hilfen sind erlaubt. Den Rest des Levels kannst du später spielen.",
        "gameObjective": "In **{{game}}**: Mach an deiner aktuellen Stelle weiter und **erreich den nächsten Checkpoint**. Wiederholungen und Hilfen sind erlaubt. Den Rest des Levels kannst du später spielen."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "platform-look-for-branch": {
    "definition": {
      "id": "platform-look-for-branch",
      "moodIds": [
        "explore",
        "curious"
      ],
      "type": "objective",
      "tags": [
        "exploration",
        "traversal"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 15,
      "customGameCompatibility": {
        "capabilityIds": [
          "platforming",
          "missions-or-levels"
        ],
        "genreIds": [
          "platformer"
        ],
        "match": "all"
      },
      "rarity": "standard",
      "gameGenreIds": [
        "platformer"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": true,
      "name": "Off the Main Line",
      "objective": "Open a **platformer with optional paths**. In a level with optional paths, follow a reachable ledge or side passage you usually skip. **Explore it to its end and return to the main route**.",
      "gameObjective": "In **{{game}}**: In a level with optional paths, follow a reachable ledge or side passage you usually skip. **Explore it to its end and return to the main route**."
    },
    "translations": {
      "en": {
        "name": "Off the Main Line",
        "objective": "Open a **platformer with optional paths**. In a level with optional paths, follow a reachable ledge or side passage you usually skip. **Explore it to its end and return to the main route**.",
        "gameObjective": "In **{{game}}**: In a level with optional paths, follow a reachable ledge or side passage you usually skip. **Explore it to its end and return to the main route**."
      },
      "de": {
        "name": "Neben der Hauptroute",
        "objective": "Starte ein **Plattformer mit optionalen Wegen**. Folge in einem Level mit optionalen Wegen einem erreichbaren Vorsprung oder Seitengang, den du sonst auslässt. **Erkunde ihn bis zum Ende und kehre zur Hauptroute zurück**.",
        "gameObjective": "In **{{game}}**: Folge in einem Level mit optionalen Wegen einem erreichbaren Vorsprung oder Seitengang, den du sonst auslässt. **Erkunde ihn bis zum Ende und kehre zur Hauptroute zurück**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "shooter-hold-a-crossing": {
    "definition": {
      "id": "shooter-hold-a-crossing",
      "moodIds": [
        "focused"
      ],
      "type": "objective",
      "tags": [
        "support"
      ],
      "minimumDurationMinutes": 10,
      "suggestedDurationMinutes": 45,
      "customGameCompatibility": {
        "capabilityIds": [
          "combat-loadouts",
          "whole-matches"
        ],
        "genreIds": [
          "shooter"
        ],
        "match": "all"
      },
      "rarity": "standard",
      "gameGenreIds": [
        "shooter"
      ],
      "connectionModeIds": [
        "online"
      ],
      "playStyleIds": [
        "co-op",
        "team"
      ],
      "universal": true,
      "gameBindable": true,
      "name": "Watch the Crossing",
      "objective": "Open a **shooter with round-based matches**. During a match, choose a crossing relevant to your team’s objective. **Cover it from a useful position and adapt when the team moves**. Finish the match. You do not need a kill.",
      "gameObjective": "In **{{game}}**: During a match, choose a crossing relevant to your team’s objective. **Cover it from a useful position and adapt when the team moves**. Finish the match. You do not need a kill."
    },
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
    "catalogRevision": "2026-10-04-before"
  },
  "gadget-protect-a-route": {
    "definition": {
      "id": "gadget-protect-a-route",
      "moodIds": [
        "focused"
      ],
      "type": "objective",
      "tags": [
        "gadgets",
        "loadout"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 20,
      "customGameCompatibility": {
        "capabilityIds": [
          "tactical-gadgets"
        ],
        "match": "all"
      },
      "rarity": "standard",
      "gameGenreIds": [
        "shooter"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": true,
      "name": "Protect the Route",
      "objective": "Open a **game with protective or route-blocking gadgets**. Where your loadout includes a protective or blocking gadget, place it to cover a route relevant to the objective. **Play out the encounter using that setup**, moving or replacing it only if the situation needs it.",
      "gameObjective": "In **{{game}}**: Where your loadout includes a protective or blocking gadget, place it to cover a route relevant to the objective. **Play out the encounter using that setup**, moving or replacing it only if the situation needs it."
    },
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
    "catalogRevision": "2026-10-04-before"
  },
  "gadget-try-another-position": {
    "definition": {
      "id": "gadget-try-another-position",
      "moodIds": [
        "create",
        "curious"
      ],
      "type": "experiment",
      "tags": [
        "gadgets",
        "new-approach",
        "vs-bots"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 20,
      "customGameCompatibility": {
        "capabilityIds": [
          "tactical-gadgets"
        ],
        "match": "all"
      },
      "rarity": "standard",
      "gameGenreIds": [
        "shooter"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": true,
      "name": "Placement Matters",
      "objective": "Open a **game with placeable tactical gadgets**. In solo, training, or bot play with a placeable gadget, try it in two different positions. **Play an encounter from each setup and compare the space it protects or controls**.",
      "gameObjective": "In **{{game}}**: In solo, training, or bot play with a placeable gadget, try it in two different positions. **Play an encounter from each setup and compare the space it protects or controls**."
    },
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
    "catalogRevision": "2026-10-04-before"
  },
  "open-world-follow-the-edge": {
    "definition": {
      "id": "open-world-follow-the-edge",
      "moodIds": [
        "explore",
        "curious"
      ],
      "type": "objective",
      "tags": [
        "exploration",
        "on-foot"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 20,
      "customGameCompatibility": {
        "capabilityIds": [
          "open-world"
        ],
        "match": "all"
      },
      "rarity": "standard",
      "gameGenreIds": [
        "adventure",
        "simulation",
        "survival",
        "sandbox"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": true,
      "name": "Follow the Edge",
      "objective": "Open a **game with a freely explorable district or region**. Choose a visible boundary such as a wall, coast, or cliff and follow it on foot. **Reach a landmark you have not approached from this direction**, then return to the map.",
      "gameObjective": "In **{{game}}**: Choose a visible boundary such as a wall, coast, or cliff and follow it on foot. **Reach a landmark you have not approached from this direction**, then return to the map."
    },
    "translations": {
      "en": {
        "name": "Follow the Edge",
        "objective": "Open a **game with a freely explorable district or region**. Choose a visible boundary such as a wall, coast, or cliff and follow it on foot. **Reach a landmark you have not approached from this direction**, then return to the map.",
        "gameObjective": "In **{{game}}**: Choose a visible boundary such as a wall, coast, or cliff and follow it on foot. **Reach a landmark you have not approached from this direction**, then return to the map."
      },
      "de": {
        "name": "Dem Rand folgen",
        "objective": "Starte ein **Spiel mit einem frei erkundbaren Gebiet**. Wähle eine sichtbare Grenze wie eine Mauer, Küste oder Klippe und folge ihr zu Fuß. **Erreiche einen Orientierungspunkt aus einer neuen Richtung** und kehre dann zur Karte zurück.",
        "gameObjective": "In **{{game}}**: Wähle eine sichtbare Grenze wie eine Mauer, Küste oder Klippe und folge ihr zu Fuß. **Erreiche einen Orientierungspunkt aus einer neuen Richtung** und kehre dann zur Karte zurück."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "mission-change-the-approach": {
    "definition": {
      "id": "mission-change-the-approach",
      "moodIds": [
        "curious",
        "focused"
      ],
      "type": "experiment",
      "tags": [
        "new-approach",
        "loadout"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 20,
      "customGameCompatibility": {
        "capabilityIds": [
          "missions-or-levels",
          "combat-loadouts"
        ],
        "match": "all"
      },
      "rarity": "standard",
      "gameGenreIds": [
        "adventure",
        "shooter",
        "rpg",
        "stealth"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": true,
      "name": "Change the Approach",
      "objective": "Open a **game with replayable missions and selectable equipment**. Replay a short mission with an owned weapon or tool you did not use the first time. **Finish the mission and notice which encounter changed most**.",
      "gameObjective": "In **{{game}}**: Replay a short mission with an owned weapon or tool you did not use the first time. **Finish the mission and notice which encounter changed most**."
    },
    "translations": {
      "en": {
        "name": "Change the Approach",
        "objective": "Open a **game with replayable missions and selectable equipment**. Replay a short mission with an owned weapon or tool you did not use the first time. **Finish the mission and notice which encounter changed most**.",
        "gameObjective": "In **{{game}}**: Replay a short mission with an owned weapon or tool you did not use the first time. **Finish the mission and notice which encounter changed most**."
      },
      "de": {
        "name": "Anders herangehen",
        "objective": "Starte ein **Spiel mit wiederholbaren Missionen und wählbarer Ausrüstung**. Wiederhole eine kurze Mission mit einer Waffe oder einem Werkzeug, das du beim ersten Mal nicht benutzt hast. **Spiel sie zu Ende und achte darauf, bei welchem Kampf dir die andere Ausrüstung am meisten geholfen hat**.",
        "gameObjective": "In **{{game}}**: Wiederhole eine kurze Mission mit einer Waffe oder einem Werkzeug, das du beim ersten Mal nicht benutzt hast. **Spiel sie zu Ende und achte darauf, bei welchem Kampf dir die andere Ausrüstung am meisten geholfen hat**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "swim-surface-checkpoints": {
    "definition": {
      "id": "swim-surface-checkpoints",
      "moodIds": [
        "focused",
        "explore"
      ],
      "type": "objective",
      "tags": [
        "diving",
        "exploration"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 15,
      "customGameCompatibility": {
        "capabilityIds": [
          "swimming"
        ],
        "match": "all"
      },
      "rarity": "standard",
      "gameGenreIds": [
        "adventure",
        "survival",
        "sandbox"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": true,
      "name": "Three Breaths",
      "objective": "Open a **game with free underwater swimming**. Choose three visible underwater landmarks within safe reach. **Swim to each in one route, surfacing between landmarks**, then return to shore or your vessel.",
      "gameObjective": "In **{{game}}**: Choose three visible underwater landmarks within safe reach. **Swim to each in one route, surfacing between landmarks**, then return to shore or your vessel."
    },
    "translations": {
      "en": {
        "name": "Three Breaths",
        "objective": "Open a **game with free underwater swimming**. Choose three visible underwater landmarks within safe reach. **Swim to each in one route, surfacing between landmarks**, then return to shore or your vessel.",
        "gameObjective": "In **{{game}}**: Choose three visible underwater landmarks within safe reach. **Swim to each in one route, surfacing between landmarks**, then return to shore or your vessel."
      },
      "de": {
        "name": "Drei Tauchstopps",
        "objective": "Starte ein **Spiel mit freiem Tauchen**. Such dir drei Stellen unter Wasser aus, die du sicher erreichen kannst. **Schwimm sie nacheinander ab und hol zwischen den Stellen Luft**. Kehr danach ans Ufer oder zu deinem Fahrzeug zurück.",
        "gameObjective": "In **{{game}}**: Such dir drei Stellen unter Wasser aus, die du sicher erreichen kannst. **Schwimm sie nacheinander ab und hol zwischen den Stellen Luft**. Kehr danach ans Ufer oder zu deinem Fahrzeug zurück."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "boss-read-before-striking": {
    "definition": {
      "id": "boss-read-before-striking",
      "moodIds": [
        "curious",
        "focused"
      ],
      "type": "experiment",
      "tags": [
        "boss",
        "three-attempts"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 20,
      "customGameCompatibility": {
        "capabilityIds": [
          "boss-fights"
        ],
        "match": "all"
      },
      "rarity": "standard",
      "gameGenreIds": [
        "adventure",
        "rpg",
        "platformer",
        "roguelike",
        "shooter"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": true,
      "name": "Read Before Striking",
      "objective": "Open a **game with a repeatable boss fight**. On your first attempt, avoid attacking until you have seen three different boss attacks. Then fight normally and **defeat the boss or finish three attempts**.",
      "gameObjective": "In **{{game}}**: On your first attempt, avoid attacking until you have seen three different boss attacks. Then fight normally and **defeat the boss or finish three attempts**."
    },
    "translations": {
      "en": {
        "name": "Read Before Striking",
        "objective": "Open a **game with a repeatable boss fight**. On your first attempt, avoid attacking until you have seen three different boss attacks. Then fight normally and **defeat the boss or finish three attempts**.",
        "gameObjective": "In **{{game}}**: On your first attempt, avoid attacking until you have seen three different boss attacks. Then fight normally and **defeat the boss or finish three attempts**."
      },
      "de": {
        "name": "Erst lesen, dann schlagen",
        "objective": "Starte ein **Spiel mit wiederholbarem Bosskampf**. Schau dir im ersten Versuch drei verschiedene Angriffe des Bosses an, bevor du selbst angreifst. **Kämpf danach normal weiter und besieg ihn**. Wenn es nicht klappt, hör nach drei Versuchen auf.",
        "gameObjective": "In **{{game}}**: Schau dir im ersten Versuch drei verschiedene Angriffe des Bosses an, bevor du selbst angreifst. **Kämpf danach normal weiter und besieg ihn**. Wenn es nicht klappt, hör nach drei Versuchen auf."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "puzzle-explain-the-rule": {
    "definition": {
      "id": "puzzle-explain-the-rule",
      "moodIds": [
        "focused",
        "curious"
      ],
      "type": "objective",
      "tags": [
        "puzzles"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 15,
      "customGameCompatibility": {
        "capabilityIds": [
          "puzzles"
        ],
        "match": "all"
      },
      "rarity": "standard",
      "gameGenreIds": [
        "puzzle",
        "narrative"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": true,
      "name": "Name the Rule",
      "objective": "Open a **puzzle game with short, replayable puzzles**. Solve one puzzle, then replay or review it and **describe the rule that made the solution work** in one sentence.",
      "gameObjective": "In **{{game}}**: Solve one short puzzle, then replay or review it and **describe the rule that made the solution work** in one sentence."
    },
    "translations": {
      "en": {
        "name": "Name the Rule",
        "objective": "Open a **puzzle game with short, replayable puzzles**. Solve one puzzle, then replay or review it and **describe the rule that made the solution work** in one sentence.",
        "gameObjective": "In **{{game}}**: Solve one short puzzle, then replay or review it and **describe the rule that made the solution work** in one sentence."
      },
      "de": {
        "name": "Die Regel benennen",
        "objective": "Starte ein **Rätselspiel mit kurzen, wiederholbaren Rätseln**. Löse ein Rätsel, spiele es erneut oder sieh es dir noch einmal an und **beschreibe in einem Satz die Regel, die zur Lösung geführt hat**.",
        "gameObjective": "In **{{game}}**: Löse ein kurzes Rätsel, spiele es erneut oder sieh es dir noch einmal an und **beschreibe in einem Satz die Regel, die zur Lösung geführt hat**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "cook-from-the-pantry": {
    "definition": {
      "id": "cook-from-the-pantry",
      "moodIds": [
        "overwhelmed",
        "progress"
      ],
      "type": "objective",
      "tags": [
        "cooking"
      ],
      "minimumDurationMinutes": 2,
      "suggestedDurationMinutes": 10,
      "customGameCompatibility": {
        "capabilityIds": [
          "cooking"
        ],
        "match": "all"
      },
      "rarity": "standard",
      "gameGenreIds": [
        "simulation",
        "cozy",
        "survival"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": true,
      "name": "Use What You Have",
      "objective": "Open a **game with cooking and stored ingredients**. Choose one available recipe you can make from your current storage. **Cook it and place, eat, or store the finished dish** without gathering extra ingredients.",
      "gameObjective": "In **{{game}}**: Choose one available recipe you can make from your current storage. **Cook it and place, eat, or store the finished dish** without gathering extra ingredients."
    },
    "translations": {
      "en": {
        "name": "Use What You Have",
        "objective": "Open a **game with cooking and stored ingredients**. Choose one available recipe you can make from your current storage. **Cook it and place, eat, or store the finished dish** without gathering extra ingredients.",
        "gameObjective": "In **{{game}}**: Choose one available recipe you can make from your current storage. **Cook it and place, eat, or store the finished dish** without gathering extra ingredients."
      },
      "de": {
        "name": "Nimm, was da ist",
        "objective": "Starte ein **Spiel mit Kochen und gelagerten Zutaten**. Wähle ein verfügbares Rezept, das du aus deinem Vorrat zubereiten kannst. **Koche es und stelle das fertige Gericht ab, iss es oder lagere es ein**, ohne weitere Zutaten zu sammeln.",
        "gameObjective": "In **{{game}}**: Wähle ein verfügbares Rezept, das du aus deinem Vorrat zubereiten kannst. **Koche es und stelle das fertige Gericht ab, iss es oder lagere es ein**, ohne weitere Zutaten zu sammeln."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "deck-play-the-opening-hand": {
    "definition": {
      "id": "deck-play-the-opening-hand",
      "moodIds": [
        "low-energy",
        "overwhelmed"
      ],
      "type": "objective",
      "tags": [
        "cards"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 15,
      "customGameCompatibility": {
        "capabilityIds": [
          "card-decks"
        ],
        "match": "all"
      },
      "rarity": "standard",
      "gameGenreIds": [
        "card",
        "roguelike"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": true,
      "name": "Keep the Opening Hand",
      "objective": "Open a **card game with a familiar legal deck and solo or bot battles**. Start one battle and keep the first playable opening hand you receive. **Finish the battle without restarting for a better draw**.",
      "gameObjective": "In **{{game}}**: Use a familiar legal deck in a solo or bot battle and keep the first playable opening hand you receive. **Finish the battle without restarting for a better draw**."
    },
    "translations": {
      "en": {
        "name": "Keep the Opening Hand",
        "objective": "Open a **card game with a familiar legal deck and solo or bot battles**. Start one battle and keep the first playable opening hand you receive. **Finish the battle without restarting for a better draw**.",
        "gameObjective": "In **{{game}}**: Use a familiar legal deck in a solo or bot battle and keep the first playable opening hand you receive. **Finish the battle without restarting for a better draw**."
      },
      "de": {
        "name": "Die Starthand behalten",
        "objective": "Starte ein **Kartenspiel mit einem vertrauten gültigen Deck und Solo- oder Bot-Kämpfen**. Beginne einen Kampf und behalte die erste spielbare Starthand. **Beende den Kampf, ohne für bessere Karten neu zu starten**.",
        "gameObjective": "In **{{game}}**: Nutze ein vertrautes gültiges Deck in einem Solo- oder Bot-Kampf und behalte die erste spielbare Starthand. **Beende den Kampf, ohne für bessere Karten neu zu starten**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "low-energy-familiar-checkpoint": {
    "definition": {
      "id": "low-energy-familiar-checkpoint",
      "rarity": "standard",
      "moodIds": [
        "low-energy"
      ],
      "type": "inspiration",
      "tags": [
        "current-save"
      ],
      "minimumDurationMinutes": 2,
      "suggestedDurationMinutes": 10,
      "customGameCompatibility": {
        "capabilityIds": [
          "missions-or-levels"
        ],
        "match": "all"
      },
      "gameGenreIds": [
        "adventure",
        "platformer"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": true,
      "name": "Familiar Checkpoint",
      "objective": "Open **a familiar game with a recent checkpoint**. Load the checkpoint and settle back into the controls. Follow whichever nearby action feels easiest.",
      "gameObjective": "Open **{{game}}**. Load the checkpoint and settle back into the controls. Follow whichever nearby action feels easiest."
    },
    "translations": {
      "en": {
        "name": "Familiar Checkpoint",
        "objective": "Open **a familiar game with a recent checkpoint**. Load the checkpoint and settle back into the controls. Follow whichever nearby action feels easiest.",
        "gameObjective": "Open **{{game}}**. Load the checkpoint and settle back into the controls. Follow whichever nearby action feels easiest."
      },
      "de": {
        "name": "Vertrauter Kontrollpunkt",
        "objective": "Starte **ein vertrautes Spiel mit einem Checkpoint, an dem du weitermachen kannst**. Lade den Checkpoint und spiel dich wieder ein. Mach dann das, was dir gerade am leichtesten fällt.",
        "gameObjective": "Starte **{{game}}**. Lade den Checkpoint und spiel dich wieder ein. Mach dann das, was dir gerade am leichtesten fällt."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "low-energy-autosave-stroll": {
    "definition": {
      "id": "low-energy-autosave-stroll",
      "rarity": "standard",
      "moodIds": [
        "low-energy"
      ],
      "type": "inspiration",
      "tags": [
        "free-roam",
        "current-save"
      ],
      "minimumDurationMinutes": 2,
      "suggestedDurationMinutes": 10,
      "customGameCompatibility": {
        "capabilityIds": [
          "open-world"
        ],
        "match": "all"
      },
      "gameGenreIds": [
        "adventure",
        "sandbox"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": true,
      "name": "Autosave Stroll",
      "objective": "Open **an open-world game with a safe autosave**. Walk around the immediate area and let the world supply the session. There is no route to finish.",
      "gameObjective": "Open **{{game}}**. Walk around the immediate area and let the world supply the session. There is no route to finish."
    },
    "translations": {
      "en": {
        "name": "Autosave Stroll",
        "objective": "Open **an open-world game with a safe autosave**. Walk around the immediate area and let the world supply the session. There is no route to finish.",
        "gameObjective": "Open **{{game}}**. Walk around the immediate area and let the world supply the session. There is no route to finish."
      },
      "de": {
        "name": "Spaziergang ab Autosave",
        "objective": "Starte **ein Open-World-Spiel mit einem Autosave an einem ruhigen Ort**. Lauf ein wenig durch die Umgebung und schau, worauf du stößt. Du musst nirgendwo ankommen.",
        "gameObjective": "Starte **{{game}}**. Lauf ein wenig durch die Umgebung und schau, worauf du stößt. Du musst nirgendwo ankommen."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "low-energy-bot-round": {
    "definition": {
      "id": "low-energy-bot-round",
      "rarity": "standard",
      "moodIds": [
        "low-energy"
      ],
      "type": "objective",
      "tags": [
        "one-round",
        "vs-bots"
      ],
      "minimumDurationMinutes": 2,
      "suggestedDurationMinutes": 10,
      "customGameCompatibility": {
        "capabilityIds": [
          "rounds-or-matches"
        ],
        "match": "all"
      },
      "gameGenreIds": [
        "shooter",
        "sports",
        "fighting"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": true,
      "name": "Easy Bot Round",
      "objective": "Open **a familiar game with short bot rounds**. Keep the default setup and **finish one round against bots**. The result does not matter.",
      "gameObjective": "Open **{{game}}**. Keep the default setup and **finish one round against bots**. The result does not matter."
    },
    "translations": {
      "en": {
        "name": "Easy Bot Round",
        "objective": "Open **a familiar game with short bot rounds**. Keep the default setup and **finish one round against bots**. The result does not matter.",
        "gameObjective": "Open **{{game}}**. Keep the default setup and **finish one round against bots**. The result does not matter."
      },
      "de": {
        "name": "Leichte Bot-Runde",
        "objective": "Starte **ein vertrautes Spiel mit kurzen Bot-Runden**. Behalte die Standardausrüstung und **beende eine Runde gegen Bots**. Das Ergebnis ist egal.",
        "gameObjective": "Starte **{{game}}**. Behalte die Standardausrüstung und **beende eine Runde gegen Bots**. Das Ergebnis ist egal."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "low-energy-feed-the-pen": {
    "definition": {
      "id": "low-energy-feed-the-pen",
      "rarity": "standard",
      "moodIds": [
        "low-energy"
      ],
      "type": "objective",
      "tags": [
        "animals"
      ],
      "minimumDurationMinutes": 2,
      "suggestedDurationMinutes": 10,
      "customGameCompatibility": {
        "capabilityIds": [
          "animal-care"
        ],
        "match": "all"
      },
      "gameGenreIds": [
        "simulation",
        "cozy"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": true,
      "name": "Feed the Pen",
      "objective": "Open **a game with animals you already keep**. Visit one pen, stable, or habitat and **feed every animal inside it once**. Stop after that enclosure.",
      "gameObjective": "Open **{{game}}**. Visit one pen, stable, or habitat and **feed every animal inside it once**. Stop after that enclosure."
    },
    "translations": {
      "en": {
        "name": "Feed the Pen",
        "objective": "Open **a game with animals you already keep**. Visit one pen, stable, or habitat and **feed every animal inside it once**. Stop after that enclosure.",
        "gameObjective": "Open **{{game}}**. Visit one pen, stable, or habitat and **feed every animal inside it once**. Stop after that enclosure."
      },
      "de": {
        "name": "Das Gehege füttern",
        "objective": "Starte **ein Spiel mit Tieren, die du bereits hältst**. Besuche ein Gehege, einen Stall oder ein Habitat und **füttere jedes Tier darin einmal**. Hör nach diesem Bereich auf.",
        "gameObjective": "Starte **{{game}}**. Besuche ein Gehege, einen Stall oder ein Habitat und **füttere jedes Tier darin einmal**. Hör nach diesem Bereich auf."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "low-energy-three-easy-fish": {
    "definition": {
      "id": "low-energy-three-easy-fish",
      "rarity": "standard",
      "moodIds": [
        "low-energy"
      ],
      "type": "objective",
      "tags": [
        "fishing",
        "no-timer"
      ],
      "minimumDurationMinutes": 2,
      "suggestedDurationMinutes": 10,
      "customGameCompatibility": {
        "capabilityIds": [
          "fishing"
        ],
        "match": "all"
      },
      "gameGenreIds": [
        "simulation",
        "cozy"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": true,
      "name": "Three Easy Fish",
      "objective": "Open **a game with a familiar fishing spot**. Use your usual gear and **catch any three fish**. Ignore size, rarity, and value.",
      "gameObjective": "Open **{{game}}**. Use your usual gear and **catch any three fish**. Ignore size, rarity, and value."
    },
    "translations": {
      "en": {
        "name": "Three Easy Fish",
        "objective": "Open **a game with a familiar fishing spot**. Use your usual gear and **catch any three fish**. Ignore size, rarity, and value.",
        "gameObjective": "Open **{{game}}**. Use your usual gear and **catch any three fish**. Ignore size, rarity, and value."
      },
      "de": {
        "name": "Drei leichte Fische",
        "objective": "Starte **ein Spiel mit einem vertrauten Angelplatz**. Nutze deine gewohnte Ausrüstung und **fange drei beliebige Fische**. Größe, Seltenheit und Wert sind egal.",
        "gameObjective": "Starte **{{game}}**. Nutze deine gewohnte Ausrüstung und **fange drei beliebige Fische**. Größe, Seltenheit und Wert sind egal."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "low-energy-shelf-recipe": {
    "definition": {
      "id": "low-energy-shelf-recipe",
      "rarity": "standard",
      "moodIds": [
        "low-energy"
      ],
      "type": "objective",
      "tags": [
        "crafting"
      ],
      "minimumDurationMinutes": 2,
      "suggestedDurationMinutes": 10,
      "customGameCompatibility": {
        "capabilityIds": [
          "crafting"
        ],
        "match": "all"
      },
      "gameGenreIds": [
        "rpg",
        "survival",
        "sandbox"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": true,
      "name": "Shelf Recipe",
      "objective": "Open **a game with crafting and stored materials**. Choose a recipe whose ingredients are already in storage and **craft it once**. Do not gather anything first.",
      "gameObjective": "Open **{{game}}**. Choose a recipe whose ingredients are already in storage and **craft it once**. Do not gather anything first."
    },
    "translations": {
      "en": {
        "name": "Shelf Recipe",
        "objective": "Open **a game with crafting and stored materials**. Choose a recipe whose ingredients are already in storage and **craft it once**. Do not gather anything first.",
        "gameObjective": "Open **{{game}}**. Choose a recipe whose ingredients are already in storage and **craft it once**. Do not gather anything first."
      },
      "de": {
        "name": "Rezept aus dem Lager",
        "objective": "Starte **ein Spiel, in dem du Materialien auf Lager hast und etwas herstellen kannst**. Wähle ein Rezept, dessen Zutaten bereits im Lager liegen, und **stelle es einmal her**. Sammle vorher nichts.",
        "gameObjective": "Starte **{{game}}**. Wähle ein Rezept, dessen Zutaten bereits im Lager liegen, und **stelle es einmal her**. Sammle vorher nichts."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "low-energy-single-puzzle": {
    "definition": {
      "id": "low-energy-single-puzzle",
      "rarity": "standard",
      "moodIds": [
        "low-energy"
      ],
      "type": "objective",
      "tags": [
        "puzzles"
      ],
      "minimumDurationMinutes": 2,
      "suggestedDurationMinutes": 10,
      "customGameCompatibility": {
        "capabilityIds": [
          "puzzles"
        ],
        "match": "all"
      },
      "gameGenreIds": [
        "puzzle"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": true,
      "name": "Single Puzzle",
      "objective": "Open **a puzzle game with selectable stages**. Choose an easy unsolved stage and **solve that one puzzle**. Hints and undo are allowed.",
      "gameObjective": "Open **{{game}}**. Choose an easy unsolved stage and **solve that one puzzle**. Hints and undo are allowed."
    },
    "translations": {
      "en": {
        "name": "Single Puzzle",
        "objective": "Open **a puzzle game with selectable stages**. Choose an easy unsolved stage and **solve that one puzzle**. Hints and undo are allowed.",
        "gameObjective": "Open **{{game}}**. Choose an easy unsolved stage and **solve that one puzzle**. Hints and undo are allowed."
      },
      "de": {
        "name": "Ein Rätsel",
        "objective": "Starte **ein Rätselspiel, in dem du ein Level auswählen kannst**. Wähle ein leichtes Rätsel, das du noch nicht gelöst hast, und **löse nur dieses eine**. Hinweise und Rückgängig sind erlaubt.",
        "gameObjective": "Starte **{{game}}**. Wähle ein leichtes Rätsel, das du noch nicht gelöst hast, und **löse nur dieses eine**. Hinweise und Rückgängig sind erlaubt."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "low-energy-one-lore-page": {
    "definition": {
      "id": "low-energy-one-lore-page",
      "rarity": "standard",
      "moodIds": [
        "low-energy"
      ],
      "type": "objective",
      "tags": [
        "story"
      ],
      "minimumDurationMinutes": 2,
      "suggestedDurationMinutes": 10,
      "customGameCompatibility": {
        "capabilityIds": [
          "choices-or-lore"
        ],
        "match": "all"
      },
      "gameGenreIds": [
        "narrative",
        "rpg"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": true,
      "name": "One Lore Page",
      "objective": "Open **a game with an unlocked journal or codex**. Open one unread entry and **read it to the end**. Return to play without opening another menu.",
      "gameObjective": "Open **{{game}}**. Open one unread entry and **read it to the end**. Return to play without opening another menu."
    },
    "translations": {
      "en": {
        "name": "One Lore Page",
        "objective": "Open **a game with an unlocked journal or codex**. Open one unread entry and **read it to the end**. Return to play without opening another menu.",
        "gameObjective": "Open **{{game}}**. Open one unread entry and **read it to the end**. Return to play without opening another menu."
      },
      "de": {
        "name": "Eine Lore-Seite",
        "objective": "Starte **ein Spiel mit freigeschaltetem Journal oder Kodex**. Öffne einen ungelesenen Eintrag und **lies ihn bis zum Ende**. Kehre danach ins Spiel zurück, ohne ein weiteres Menü zu öffnen.",
        "gameObjective": "Starte **{{game}}**. Öffne einen ungelesenen Eintrag und **lies ihn bis zum Ende**. Kehre danach ins Spiel zurück, ohne ein weiteres Menü zu öffnen."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "low-energy-known-deck": {
    "definition": {
      "id": "low-energy-known-deck",
      "rarity": "standard",
      "moodIds": [
        "low-energy"
      ],
      "type": "objective",
      "tags": [
        "cards",
        "vs-bots"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 15,
      "customGameCompatibility": {
        "capabilityIds": [
          "card-decks"
        ],
        "match": "all"
      },
      "gameGenreIds": [
        "card",
        "roguelike"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": true,
      "name": "Known Deck",
      "objective": "Open **a card game with a familiar legal deck**. Start a solo or bot battle with that deck and **play it to the result screen**. Keep the opening hand you receive.",
      "gameObjective": "Open **{{game}}**. Start a solo or bot battle with that deck and **play it to the result screen**. Keep the opening hand you receive."
    },
    "translations": {
      "en": {
        "name": "Known Deck",
        "objective": "Open **a card game with a familiar legal deck**. Start a solo or bot battle with that deck and **play it to the result screen**. Keep the opening hand you receive.",
        "gameObjective": "Open **{{game}}**. Start a solo or bot battle with that deck and **play it to the result screen**. Keep the opening hand you receive."
      },
      "de": {
        "name": "Vertrautes Deck",
        "objective": "Starte **ein Kartenspiel mit einem vertrauten gültigen Deck**. Starte mit diesem Deck einen Solo- oder Bot-Kampf und **spiele bis zum Ergebnisbildschirm**. Behalte deine erste Starthand.",
        "gameObjective": "Starte **{{game}}**. Starte mit diesem Deck einen Solo- oder Bot-Kampf und **spiele bis zum Ergebnisbildschirm**. Behalte deine erste Starthand."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "relax-drift-from-shore": {
    "definition": {
      "id": "relax-drift-from-shore",
      "rarity": "standard",
      "moodIds": [
        "relax"
      ],
      "type": "inspiration",
      "tags": [
        "diving",
        "no-timer"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 15,
      "customGameCompatibility": {
        "capabilityIds": [
          "swimming"
        ],
        "match": "all"
      },
      "gameGenreIds": [
        "adventure",
        "survival"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": true,
      "name": "Drift from Shore",
      "objective": "Open **a game with calm swimming**. Enter the water from a safe shore and move at an easy pace. Stay close enough to return whenever you want.",
      "gameObjective": "Open **{{game}}**. Enter the water from a safe shore and move at an easy pace. Stay close enough to return whenever you want."
    },
    "translations": {
      "en": {
        "name": "Drift from Shore",
        "objective": "Open **a game with calm swimming**. Enter the water from a safe shore and move at an easy pace. Stay close enough to return whenever you want.",
        "gameObjective": "Open **{{game}}**. Enter the water from a safe shore and move at an easy pace. Stay close enough to return whenever you want."
      },
      "de": {
        "name": "Vom Ufer treiben",
        "objective": "Starte **ein Spiel mit ruhigem Schwimmen**. Geh von einem sicheren Ufer ins Wasser und bewege dich in ruhigem Tempo. Bleib nah genug, um jederzeit zurückzukehren.",
        "gameObjective": "Starte **{{game}}**. Geh von einem sicheren Ufer ins Wasser und bewege dich in ruhigem Tempo. Bleib nah genug, um jederzeit zurückzukehren."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "relax-tend-one-row": {
    "definition": {
      "id": "relax-tend-one-row",
      "rarity": "standard",
      "moodIds": [
        "relax"
      ],
      "type": "objective",
      "tags": [
        "farming",
        "no-timer"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 15,
      "customGameCompatibility": {
        "capabilityIds": [
          "grow-crops"
        ],
        "match": "all"
      },
      "gameGenreIds": [
        "simulation",
        "cozy"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": true,
      "name": "Tend One Row",
      "objective": "Open **a farming game with an established plot**. Choose one row, water or harvest what it needs, and **leave the row fully tended**. Ignore every other plot.",
      "gameObjective": "Open **{{game}}**. Choose one row, water or harvest what it needs, and **leave the row fully tended**. Ignore every other plot."
    },
    "translations": {
      "en": {
        "name": "Tend One Row",
        "objective": "Open **a farming game with an established plot**. Choose one row, water or harvest what it needs, and **leave the row fully tended**. Ignore every other plot.",
        "gameObjective": "Open **{{game}}**. Choose one row, water or harvest what it needs, and **leave the row fully tended**. Ignore every other plot."
      },
      "de": {
        "name": "Eine Reihe pflegen",
        "objective": "Starte **ein Farmspiel mit einem bestehenden Feld**. Wähle eine Reihe und **gieße oder ernte alles darin, was gerade dran ist**. Ignoriere alle anderen Beete.",
        "gameObjective": "Starte **{{game}}**. Wähle eine Reihe und **gieße oder ernte alles darin, was gerade dran ist**. Ignoriere alle anderen Beete."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "relax-soften-one-corner": {
    "definition": {
      "id": "relax-soften-one-corner",
      "rarity": "standard",
      "moodIds": [
        "relax"
      ],
      "type": "creation",
      "tags": [
        "decorating"
      ],
      "minimumDurationMinutes": 5,
      "suggestedDurationMinutes": 20,
      "customGameCompatibility": {
        "capabilityIds": [
          "building",
          "customization"
        ],
        "match": "all"
      },
      "gameGenreIds": [
        "simulation",
        "sandbox"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": true,
      "name": "Soften a Corner",
      "objective": "Open **a game with a room you can decorate**. Choose one small corner and **finish a cozy arrangement with items you own**. Leave the rest unchanged.",
      "gameObjective": "Open **{{game}}**. Choose one small corner and **finish a cozy arrangement with items you own**. Leave the rest unchanged."
    },
    "translations": {
      "en": {
        "name": "Soften a Corner",
        "objective": "Open **a game with a room you can decorate**. Choose one small corner and **finish a cozy arrangement with items you own**. Leave the rest unchanged.",
        "gameObjective": "Open **{{game}}**. Choose one small corner and **finish a cozy arrangement with items you own**. Leave the rest unchanged."
      },
      "de": {
        "name": "Eine Ecke verschönern",
        "objective": "Starte **ein Spiel mit einem dekorierbaren Raum**. Wähle eine kleine Ecke und **richte sie mit Gegenständen, die du schon hast, gemütlich ein**. Lass den Rest unverändert.",
        "gameObjective": "Starte **{{game}}**. Wähle eine kleine Ecke und **richte sie mit Gegenständen, die du schon hast, gemütlich ein**. Lass den Rest unverändert."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "relax-favorite-fishing-bank": {
    "definition": {
      "id": "relax-favorite-fishing-bank",
      "rarity": "standard",
      "moodIds": [
        "relax"
      ],
      "type": "inspiration",
      "tags": [
        "fishing",
        "no-timer"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 20,
      "customGameCompatibility": {
        "capabilityIds": [
          "fishing"
        ],
        "match": "all"
      },
      "gameGenreIds": [
        "simulation",
        "cozy"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": true,
      "name": "Favorite Fishing Bank",
      "objective": "Open **a game with a fishing place you enjoy**. Return with familiar gear and fish at your own pace. Keep or release whatever arrives.",
      "gameObjective": "Open **{{game}}**. Return with familiar gear and fish at your own pace. Keep or release whatever arrives."
    },
    "translations": {
      "en": {
        "name": "Favorite Fishing Bank",
        "objective": "Open **a game with a fishing place you enjoy**. Return with familiar gear and fish at your own pace. Keep or release whatever arrives.",
        "gameObjective": "Open **{{game}}**. Return with familiar gear and fish at your own pace. Keep or release whatever arrives."
      },
      "de": {
        "name": "Lieblingsplatz am Wasser",
        "objective": "Starte **ein Spiel mit einem Angelplatz, den du magst**. Kehre mit vertrauter Ausrüstung zurück und angle in deinem eigenen Tempo. Behalte oder lass frei, was anbeißt.",
        "gameObjective": "Starte **{{game}}**. Kehre mit vertrauter Ausrüstung zurück und angle in deinem eigenen Tempo. Behalte oder lass frei, was anbeißt."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "relax-familiar-recipe": {
    "definition": {
      "id": "relax-familiar-recipe",
      "rarity": "standard",
      "moodIds": [
        "relax"
      ],
      "type": "objective",
      "tags": [
        "cooking"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 15,
      "customGameCompatibility": {
        "capabilityIds": [
          "cooking"
        ],
        "match": "all"
      },
      "gameGenreIds": [
        "simulation",
        "cozy",
        "survival"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": true,
      "name": "Comfort Recipe",
      "objective": "Open **a game where you know a simple recipe**. Use ingredients already owned and **cook that familiar dish once**. Do not optimize its value.",
      "gameObjective": "Open **{{game}}**. Use ingredients already owned and **cook that familiar dish once**. Do not optimize its value."
    },
    "translations": {
      "en": {
        "name": "Comfort Recipe",
        "objective": "Open **a game where you know a simple recipe**. Use ingredients already owned and **cook that familiar dish once**. Do not optimize its value.",
        "gameObjective": "Open **{{game}}**. Use ingredients already owned and **cook that familiar dish once**. Do not optimize its value."
      },
      "de": {
        "name": "Wohlfühlrezept",
        "objective": "Starte **ein Spiel, in dem du ein einfaches Rezept kennst**. Nimm Zutaten, die du schon hast, und **koch dein vertrautes Gericht einmal**. Der Verkaufswert ist egal.",
        "gameObjective": "Starte **{{game}}**. Nimm Zutaten, die du schon hast, und **koch dein vertrautes Gericht einmal**. Der Verkaufswert ist egal."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "relax-favorite-car": {
    "definition": {
      "id": "relax-favorite-car",
      "rarity": "standard",
      "moodIds": [
        "relax"
      ],
      "type": "inspiration",
      "tags": [
        "driving",
        "free-roam"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 20,
      "customGameCompatibility": {
        "capabilityIds": [
          "free-driving"
        ],
        "match": "all"
      },
      "gameGenreIds": [
        "racing",
        "sandbox"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": true,
      "name": "Favorite Car",
      "objective": "Open **a driving game with a favorite vehicle**. Take it into free roam and drive by feel. Skip races, traffic goals, and the route planner.",
      "gameObjective": "Open **{{game}}**. Take it into free roam and drive by feel. Skip races, traffic goals, and the route planner."
    },
    "translations": {
      "en": {
        "name": "Favorite Car",
        "objective": "Open **a driving game with a favorite vehicle**. Take it into free roam and drive by feel. Skip races, traffic goals, and the route planner.",
        "gameObjective": "Open **{{game}}**. Take it into free roam and drive by feel. Skip races, traffic goals, and the route planner."
      },
      "de": {
        "name": "Lieblingswagen",
        "objective": "Starte **ein Fahrspiel mit einem Lieblingsfahrzeug**. Nimm deinen Lieblingswagen für eine freie Fahrt und fahr einfach drauflos. Lass Rennen, Fahraufträge und den Routenplaner aus.",
        "gameObjective": "Starte **{{game}}**. Nimm deinen Lieblingswagen für eine freie Fahrt und fahr einfach drauflos. Lass Rennen, Fahraufträge und den Routenplaner aus."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "relax-familiar-puzzle-pack": {
    "definition": {
      "id": "relax-familiar-puzzle-pack",
      "rarity": "standard",
      "moodIds": [
        "relax"
      ],
      "type": "inspiration",
      "tags": [
        "puzzles",
        "no-timer"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 15,
      "customGameCompatibility": {
        "capabilityIds": [
          "puzzles"
        ],
        "match": "all"
      },
      "gameGenreIds": [
        "puzzle"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": true,
      "name": "Familiar Puzzles",
      "objective": "Open **a puzzle game you already understand**. Open a comfortable puzzle set and work through whichever stages look inviting. Hints and undo stay available.",
      "gameObjective": "Open **{{game}}**. Open a comfortable puzzle set and work through whichever stages look inviting. Hints and undo stay available."
    },
    "translations": {
      "en": {
        "name": "Familiar Puzzles",
        "objective": "Open **a puzzle game you already understand**. Open a comfortable puzzle set and work through whichever stages look inviting. Hints and undo stay available.",
        "gameObjective": "Open **{{game}}**. Open a comfortable puzzle set and work through whichever stages look inviting. Hints and undo stay available."
      },
      "de": {
        "name": "Vertraute Rätsel",
        "objective": "Starte **ein Rätselspiel, das du bereits verstehst**. Spiel ein paar Rätsel, deren Regeln du schon kennst. Such dir aus, worauf du Lust hast, und nutze Hinweise oder Rückgängig, wenn du möchtest.",
        "gameObjective": "Starte **{{game}}**. Spiel ein paar Rätsel, deren Regeln du schon kennst. Such dir aus, worauf du Lust hast, und nutze Hinweise oder Rückgängig, wenn du möchtest."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "relax-two-color-outfit": {
    "definition": {
      "id": "relax-two-color-outfit",
      "rarity": "standard",
      "moodIds": [
        "relax"
      ],
      "type": "creation",
      "tags": [
        "outfit",
        "two-colors"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 15,
      "customGameCompatibility": {
        "capabilityIds": [
          "customization"
        ],
        "match": "all"
      },
      "gameGenreIds": [
        "rpg",
        "sandbox"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": true,
      "name": "Two-Color Outfit",
      "objective": "Open **a game with unlocked outfit customization**. Choose two colors you like and **save or equip one outfit using that pair**. Ignore stats unless the game requires them.",
      "gameObjective": "Open **{{game}}**. Choose two colors you like and **save or equip one outfit using that pair**. Ignore stats unless the game requires them."
    },
    "translations": {
      "en": {
        "name": "Two-Color Outfit",
        "objective": "Open **a game with unlocked outfit customization**. Choose two colors you like and **save or equip one outfit using that pair**. Ignore stats unless the game requires them.",
        "gameObjective": "Open **{{game}}**. Choose two colors you like and **save or equip one outfit using that pair**. Ignore stats unless the game requires them."
      },
      "de": {
        "name": "Zweifarbiges Outfit",
        "objective": "Starte **ein Spiel mit freigeschalteter Outfit-Anpassung**. Wähle zwei Farben, die du magst, und **speichere oder trage ein Outfit, in dem beide vorkommen**. Die Werte sind egal, solange das Spiel nichts anderes verlangt.",
        "gameObjective": "Starte **{{game}}**. Wähle zwei Farben, die du magst, und **speichere oder trage ein Outfit, in dem beide vorkommen**. Die Werte sind egal, solange das Spiel nichts anderes verlangt."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "relax-assisted-platforming": {
    "definition": {
      "id": "relax-assisted-platforming",
      "rarity": "standard",
      "moodIds": [
        "relax"
      ],
      "type": "objective",
      "tags": [
        "traversal",
        "no-timer"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 15,
      "customGameCompatibility": {
        "capabilityIds": [
          "platforming"
        ],
        "match": "all"
      },
      "gameGenreIds": [
        "platformer"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": true,
      "name": "Assisted Climb",
      "objective": "Open **a platformer with assists or an easy route**. Enable any comfort options you want and **reach the next checkpoint**. Ignore collectibles and time.",
      "gameObjective": "Open **{{game}}**. Enable any comfort options you want and **reach the next checkpoint**. Ignore collectibles and time."
    },
    "translations": {
      "en": {
        "name": "Assisted Climb",
        "objective": "Open **a platformer with assists or an easy route**. Enable any comfort options you want and **reach the next checkpoint**. Ignore collectibles and time.",
        "gameObjective": "Open **{{game}}**. Enable any comfort options you want and **reach the next checkpoint**. Ignore collectibles and time."
      },
      "de": {
        "name": "Entspannter Aufstieg",
        "objective": "Starte **ein Plattformspiel mit Hilfen oder einer leichten Route**. Aktiviere beliebige Komfortoptionen und **erreiche den nächsten Kontrollpunkt**. Sammelobjekte und Zeit sind egal.",
        "gameObjective": "Starte **{{game}}**. Aktiviere beliebige Komfortoptionen und **erreiche den nächsten Kontrollpunkt**. Sammelobjekte und Zeit sind egal."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "explore-unasked-question": {
    "definition": {
      "id": "explore-unasked-question",
      "rarity": "standard",
      "moodIds": [
        "explore"
      ],
      "type": "experiment",
      "tags": [
        "dialogue",
        "new-approach"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 15,
      "customGameCompatibility": {
        "capabilityIds": [
          "choices-or-lore"
        ],
        "match": "all"
      },
      "gameGenreIds": [
        "narrative",
        "rpg"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": true,
      "name": "Unasked Question",
      "objective": "Open **a story game with an available conversation**. Choose a dialogue branch you normally skip and **follow it until the conversation returns or ends**. Accept the response you receive.",
      "gameObjective": "Open **{{game}}**. Choose a dialogue branch you normally skip and **follow it until the conversation returns or ends**. Accept the response you receive."
    },
    "translations": {
      "en": {
        "name": "Unasked Question",
        "objective": "Open **a story game with an available conversation**. Choose a dialogue branch you normally skip and **follow it until the conversation returns or ends**. Accept the response you receive.",
        "gameObjective": "Open **{{game}}**. Choose a dialogue branch you normally skip and **follow it until the conversation returns or ends**. Accept the response you receive."
      },
      "de": {
        "name": "Die ungefragte Frage",
        "objective": "Starte **ein Storyspiel, in dem ein Gespräch auf dich wartet**. Nimm in einem Gespräch einen Dialogzweig, den du sonst überspringst, und **folge ihm bis zum Ende oder zurück zum Hauptgespräch**. Bleib bei deiner Wahl.",
        "gameObjective": "Starte **{{game}}**. Nimm in einem Gespräch einen Dialogzweig, den du sonst überspringst, und **folge ihm bis zum Ende oder zurück zum Hauptgespräch**. Bleib bei deiner Wahl."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "explore-scout-three-landmarks": {
    "definition": {
      "id": "explore-scout-three-landmarks",
      "rarity": "standard",
      "moodIds": [
        "explore"
      ],
      "type": "objective",
      "tags": [
        "scouting",
        "exploration"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 15,
      "customGameCompatibility": {
        "capabilityIds": [
          "scouting-tools"
        ],
        "match": "all"
      },
      "gameGenreIds": [
        "adventure",
        "shooter",
        "moba"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": true,
      "name": "Three Landmarks",
      "objective": "Open **a game with a camera, drone, scope, or ward**. Use that scouting tool from a safe position and **mark or name three distinct landmarks** before moving on.",
      "gameObjective": "Open **{{game}}**. Use that scouting tool from a safe position and **mark or name three distinct landmarks** before moving on."
    },
    "translations": {
      "en": {
        "name": "Three Landmarks",
        "objective": "Open **a game with a camera, drone, scope, or ward**. Use that scouting tool from a safe position and **mark or name three distinct landmarks** before moving on.",
        "gameObjective": "Open **{{game}}**. Use that scouting tool from a safe position and **mark or name three distinct landmarks** before moving on."
      },
      "de": {
        "name": "Drei Landmarken",
        "objective": "Starte **ein Spiel mit Kamera, Drohne, Visier oder Ward**. Nutze dieses Aufklärungswerkzeug von einer sicheren Position und **markiere oder benenne drei verschiedene Landmarken**, bevor du weiterziehst.",
        "gameObjective": "Starte **{{game}}**. Nutze dieses Aufklärungswerkzeug von einer sicheren Position und **markiere oder benenne drei verschiedene Landmarken**, bevor du weiterziehst."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "explore-hudless-landmark": {
    "definition": {
      "id": "explore-hudless-landmark",
      "rarity": "standard",
      "moodIds": [
        "explore"
      ],
      "type": "experiment",
      "tags": [
        "on-foot",
        "no-fast-travel"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 15,
      "customGameCompatibility": {
        "capabilityIds": [
          "open-world"
        ],
        "match": "all"
      },
      "gameGenreIds": [
        "adventure",
        "rpg",
        "sandbox"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": true,
      "name": "By Landmarks",
      "objective": "Open **an open world with optional navigation UI**. Hide the minimap or route line, choose a visible landmark, and **reach it using the world itself for direction**.",
      "gameObjective": "Open **{{game}}**. Hide the minimap or route line, choose a visible landmark, and **reach it using the world itself for direction**."
    },
    "translations": {
      "en": {
        "name": "By Landmarks",
        "objective": "Open **an open world with optional navigation UI**. Hide the minimap or route line, choose a visible landmark, and **reach it using the world itself for direction**.",
        "gameObjective": "Open **{{game}}**. Hide the minimap or route line, choose a visible landmark, and **reach it using the world itself for direction**."
      },
      "de": {
        "name": "Nach Landmarken",
        "objective": "Starte **eine offene Welt mit optionaler Navigationsanzeige**. Blende Minimap oder Routenlinie aus, wähle eine Landmarke in Sichtweite und **finde sie nur anhand dessen, was du im Spiel siehst**.",
        "gameObjective": "Starte **{{game}}**. Blende Minimap oder Routenlinie aus, wähle eine Landmarke in Sichtweite und **finde sie nur anhand dessen, was du im Spiel siehst**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "explore-visible-wreck": {
    "definition": {
      "id": "explore-visible-wreck",
      "rarity": "standard",
      "moodIds": [
        "explore"
      ],
      "type": "objective",
      "tags": [
        "diving",
        "exploration"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 15,
      "customGameCompatibility": {
        "capabilityIds": [
          "swimming"
        ],
        "match": "all"
      },
      "gameGenreIds": [
        "adventure",
        "survival"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": true,
      "name": "Visible Wreck",
      "objective": "Open **a game with diving and a visible underwater structure**. Dive to the structure and **touch or enter its nearest reachable section**. Return before supplies become tight.",
      "gameObjective": "Open **{{game}}**. Dive to the structure and **touch or enter its nearest reachable section**. Return before supplies become tight."
    },
    "translations": {
      "en": {
        "name": "Visible Wreck",
        "objective": "Open **a game with diving and a visible underwater structure**. Dive to the structure and **touch or enter its nearest reachable section**. Return before supplies become tight.",
        "gameObjective": "Open **{{game}}**. Dive to the structure and **touch or enter its nearest reachable section**. Return before supplies become tight."
      },
      "de": {
        "name": "Sichtbares Wrack",
        "objective": "Starte **ein Spiel mit Tauchen und einer sichtbaren Unterwasserstruktur**. Tauche zu der Struktur und **erreiche den nächsten Teil, den du berühren oder betreten kannst**. Kehr um, bevor dir die Luft oder andere Vorräte knapp werden.",
        "gameObjective": "Starte **{{game}}**. Tauche zu der Struktur und **erreiche den nächsten Teil, den du berühren oder betreten kannst**. Kehr um, bevor dir die Luft oder andere Vorräte knapp werden."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "progress-fix-one-bottleneck": {
    "definition": {
      "id": "progress-fix-one-bottleneck",
      "rarity": "standard",
      "moodIds": [
        "progress"
      ],
      "type": "creation",
      "tags": [
        "automation"
      ],
      "minimumDurationMinutes": 5,
      "suggestedDurationMinutes": 25,
      "customGameCompatibility": {
        "capabilityIds": [
          "automation"
        ],
        "match": "all"
      },
      "gameGenreIds": [
        "simulation",
        "sandbox"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": true,
      "name": "Fix One Bottleneck",
      "objective": "Open **a game with an existing automated line**. Find the first machine waiting on input, improve that supply path, and **watch three outputs finish without the same wait**.",
      "gameObjective": "Open **{{game}}**. Find the first machine waiting on input, improve that supply path, and **watch three outputs finish without the same wait**."
    },
    "translations": {
      "en": {
        "name": "Fix One Bottleneck",
        "objective": "Open **a game with an existing automated line**. Find the first machine waiting on input, improve that supply path, and **watch three outputs finish without the same wait**.",
        "gameObjective": "Open **{{game}}**. Find the first machine waiting on input, improve that supply path, and **watch three outputs finish without the same wait**."
      },
      "de": {
        "name": "Einen Engpass lösen",
        "objective": "Starte **ein Spiel mit einer bestehenden automatisierten Anlage**. Such die erste Maschine, der Material fehlt, und bring die Zufuhr wieder in Gang. **Warte, bis drei Produkte ohne erneuten Stopp fertig werden**.",
        "gameObjective": "Starte **{{game}}**. Such die erste Maschine, der Material fehlt, und bring die Zufuhr wieder in Gang. **Warte, bis drei Produkte ohne erneuten Stopp fertig werden**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "progress-harvest-and-replant": {
    "definition": {
      "id": "progress-harvest-and-replant",
      "rarity": "standard",
      "moodIds": [
        "progress"
      ],
      "type": "objective",
      "tags": [
        "farming"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 20,
      "customGameCompatibility": {
        "capabilityIds": [
          "grow-crops"
        ],
        "match": "all"
      },
      "gameGenreIds": [
        "simulation",
        "cozy"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": true,
      "name": "Harvest and Replant",
      "objective": "Open **a farming game with one mature crop patch**. Harvest that patch and **replant every cleared tile** with seeds already owned or bought nearby.",
      "gameObjective": "Open **{{game}}**. Harvest that patch and **replant every cleared tile** with seeds already owned or bought nearby."
    },
    "translations": {
      "en": {
        "name": "Harvest and Replant",
        "objective": "Open **a farming game with one mature crop patch**. Harvest that patch and **replant every cleared tile** with seeds already owned or bought nearby.",
        "gameObjective": "Open **{{game}}**. Harvest that patch and **replant every cleared tile** with seeds already owned or bought nearby."
      },
      "de": {
        "name": "Ernten und neu säen",
        "objective": "Starte **ein Farmspiel mit einem reifen Feld**. Ernte dieses Feld und **bepflanze jedes freie Feld neu** mit vorhandenen oder in der Nähe gekauften Samen.",
        "gameObjective": "Starte **{{game}}**. Ernte dieses Feld und **bepflanze jedes freie Feld neu** mit vorhandenen oder in der Nähe gekauften Samen."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "challenge-boss-without-lock-on": {
    "definition": {
      "id": "challenge-boss-without-lock-on",
      "rarity": "standard",
      "moodIds": [
        "challenge"
      ],
      "type": "challenge",
      "tags": [
        "boss",
        "three-attempts"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 25,
      "customGameCompatibility": {
        "capabilityIds": [
          "boss-fights"
        ],
        "match": "all"
      },
      "gameGenreIds": [
        "adventure",
        "rpg"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": true,
      "name": "No Lock-On",
      "objective": "Open **a boss fight where lock-on can be disabled**. Keep the camera under manual control and **defeat the boss without lock-on, or finish three attempts**.",
      "gameObjective": "Open **{{game}}**. Keep the camera under manual control and **defeat the boss without lock-on, or finish three attempts**."
    },
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
    "catalogRevision": "2026-10-04-before"
  },
  "challenge-no-reinforcements": {
    "definition": {
      "id": "challenge-no-reinforcements",
      "rarity": "standard",
      "moodIds": [
        "challenge"
      ],
      "type": "challenge",
      "tags": [
        "units",
        "three-attempts"
      ],
      "minimumDurationMinutes": 5,
      "suggestedDurationMinutes": 25,
      "customGameCompatibility": {
        "capabilityIds": [
          "unit-command",
          "missions-or-levels"
        ],
        "match": "all"
      },
      "gameGenreIds": [
        "strategy"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": true,
      "name": "No Reinforcements",
      "objective": "Open **a strategy game with a short replayable scenario and recruitment**. Use only the units present at the start and **win without recruiting or summoning, or finish three attempts**.",
      "gameObjective": "Open **{{game}}**. Use only the units present at the start and **win without recruiting or summoning, or finish three attempts**."
    },
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
    "catalogRevision": "2026-10-04-before"
  },
  "restless-quick-round-trio": {
    "definition": {
      "id": "restless-quick-round-trio",
      "rarity": "standard",
      "moodIds": [
        "restless"
      ],
      "type": "objective",
      "tags": [
        "one-round"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 15,
      "customGameCompatibility": {
        "capabilityIds": [
          "rounds-or-matches"
        ],
        "match": "all"
      },
      "gameGenreIds": [
        "shooter",
        "fighting",
        "sports"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": true,
      "name": "Three Quick Rounds",
      "objective": "Open **a game built around short rounds**. Keep the default mode and **finish three rounds**. Accept each result and queue directly into the next.",
      "gameObjective": "Open **{{game}}**. Keep the default mode and **finish three rounds**. Accept each result and queue directly into the next."
    },
    "translations": {
      "en": {
        "name": "Three Quick Rounds",
        "objective": "Open **a game built around short rounds**. Keep the default mode and **finish three rounds**. Accept each result and queue directly into the next.",
        "gameObjective": "Open **{{game}}**. Keep the default mode and **finish three rounds**. Accept each result and queue directly into the next."
      },
      "de": {
        "name": "Drei schnelle Runden",
        "objective": "Starte **ein Spiel mit kurzen Runden**. Behalte den Standardmodus und **beende drei Runden**. Akzeptiere jedes Ergebnis und starte direkt die nächste.",
        "gameObjective": "Starte **{{game}}**. Behalte den Standardmodus und **beende drei Runden**. Akzeptiere jedes Ergebnis und starte direkt die nächste."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "restless-boss-rematch": {
    "definition": {
      "id": "restless-boss-rematch",
      "rarity": "standard",
      "moodIds": [
        "restless"
      ],
      "type": "inspiration",
      "tags": [
        "boss",
        "replay"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 20,
      "customGameCompatibility": {
        "capabilityIds": [
          "boss-fights"
        ],
        "match": "all"
      },
      "gameGenreIds": [
        "adventure",
        "rpg",
        "roguelike"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": true,
      "name": "Boss Energy",
      "objective": "Open **a game with a boss you enjoy replaying**. Jump into the rematch with your current setup and enjoy the patterns, movement, and pressure. Retry while it stays energizing.",
      "gameObjective": "Open **{{game}}**. Jump into the rematch with your current setup and enjoy the patterns, movement, and pressure. Retry while it stays energizing."
    },
    "translations": {
      "en": {
        "name": "Boss Energy",
        "objective": "Open **a game with a boss you enjoy replaying**. Jump into the rematch with your current setup and enjoy the patterns, movement, and pressure. Retry while it stays energizing.",
        "gameObjective": "Open **{{game}}**. Jump into the rematch with your current setup and enjoy the patterns, movement, and pressure. Retry while it stays energizing."
      },
      "de": {
        "name": "Boss-Energie",
        "objective": "Starte **ein Spiel mit einem Boss, den du gern erneut bekämpfst**. Stell dich dem Boss noch einmal mit deiner jetzigen Ausrüstung. Achte auf seine Angriffe, bleib in Bewegung und spiel so lange weiter, wie dir der Kampf Spaß macht.",
        "gameObjective": "Starte **{{game}}**. Stell dich dem Boss noch einmal mit deiner jetzigen Ausrüstung. Achte auf seine Angriffe, bleib in Bewegung und spiel so lange weiter, wie dir der Kampf Spaß macht."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "restless-arcade-sports-trio": {
    "definition": {
      "id": "restless-arcade-sports-trio",
      "rarity": "standard",
      "moodIds": [
        "restless"
      ],
      "type": "objective",
      "tags": [
        "one-round"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 15,
      "customGameCompatibility": {
        "capabilityIds": [
          "sports-goals",
          "rounds-or-matches"
        ],
        "match": "all"
      },
      "gameGenreIds": [
        "sports"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": true,
      "name": "Arcade Sports Trio",
      "objective": "Open **an arcade sports game with short rounds**. Use the quickest standard mode and **finish three rounds or heats**. Wins are optional.",
      "gameObjective": "Open **{{game}}**. Use the quickest standard mode and **finish three rounds or heats**. Wins are optional."
    },
    "translations": {
      "en": {
        "name": "Arcade Sports Trio",
        "objective": "Open **an arcade sports game with short rounds**. Use the quickest standard mode and **finish three rounds or heats**. Wins are optional.",
        "gameObjective": "Open **{{game}}**. Use the quickest standard mode and **finish three rounds or heats**. Wins are optional."
      },
      "de": {
        "name": "Drei Arcade-Runden",
        "objective": "Starte **ein Arcade-Sportspiel mit kurzen Runden**. Nutze den schnellsten Standardmodus und **beende drei Runden oder Läufe**. Siege sind optional.",
        "gameObjective": "Starte **{{game}}**. Nutze den schnellsten Standardmodus und **beende drei Runden oder Läufe**. Siege sind optional."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "connect-couch-navigator": {
    "definition": {
      "id": "connect-couch-navigator",
      "rarity": "special",
      "moodIds": [
        "connect"
      ],
      "type": "objective",
      "tags": [
        "local-play",
        "exploration"
      ],
      "minimumDurationMinutes": 5,
      "suggestedDurationMinutes": 20,
      "customGameCompatibility": {
        "capabilityIds": [
          "local-multiplayer",
          "open-world"
        ],
        "match": "all"
      },
      "gameGenreIds": [
        "adventure",
        "sandbox"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "co-op"
      ],
      "universal": true,
      "gameBindable": true,
      "name": "Couch Navigator",
      "objective": "Open **an explorable game and someone beside you**. Let the person beside you choose a visible destination and call every turn while you control. Follow their directions and **arrive without reopening the map or taking over the navigation**.",
      "gameObjective": "Open **{{game}}**. Let the person beside you choose a visible destination and call every turn while you control. Follow their directions and **arrive without reopening the map or taking over the navigation**."
    },
    "translations": {
      "en": {
        "name": "Couch Navigator",
        "objective": "Open **an explorable game and someone beside you**. Let the person beside you choose a visible destination and call every turn while you control. Follow their directions and **arrive without reopening the map or taking over the navigation**.",
        "gameObjective": "Open **{{game}}**. Let the person beside you choose a visible destination and call every turn while you control. Follow their directions and **arrive without reopening the map or taking over the navigation**."
      },
      "de": {
        "name": "Navigation vom Sofa",
        "objective": "Starte **ein erkundbares Spiel und jemanden neben dir**. Lass die Person neben dir ein Ziel in Sichtweite wählen und jede Abzweigung ansagen, während du steuerst. Folge ihren Hinweisen und **kommt an, ohne die Karte wieder zu öffnen oder selbst die Navigation zu übernehmen**.",
        "gameObjective": "Starte **{{game}}**. Lass die Person neben dir ein Ziel in Sichtweite wählen und jede Abzweigung ansagen, während du steuerst. Folge ihren Hinweisen und **kommt an, ohne die Karte wieder zu öffnen oder selbst die Navigation zu übernehmen**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "connect-shared-wall": {
    "definition": {
      "id": "connect-shared-wall",
      "rarity": "standard",
      "moodIds": [
        "connect"
      ],
      "type": "objective",
      "tags": [
        "co-op",
        "building"
      ],
      "minimumDurationMinutes": 5,
      "suggestedDurationMinutes": 20,
      "customGameCompatibility": {
        "capabilityIds": [
          "building",
          "online-teamplay"
        ],
        "match": "all"
      },
      "gameGenreIds": [
        "simulation",
        "survival",
        "sandbox"
      ],
      "connectionModeIds": [
        "online"
      ],
      "playStyleIds": [
        "co-op",
        "team"
      ],
      "universal": true,
      "gameBindable": true,
      "name": "Build One Wall",
      "objective": "Open **a shared building world**. Agree on a short wall, bridge, or fence and **place five connected pieces together**. Use materials already at the site.",
      "gameObjective": "Open **{{game}}**. Agree on a short wall, bridge, or fence and **place five connected pieces together**. Use materials already at the site."
    },
    "translations": {
      "en": {
        "name": "Build One Wall",
        "objective": "Open **a shared building world**. Agree on a short wall, bridge, or fence and **place five connected pieces together**. Use materials already at the site.",
        "gameObjective": "Open **{{game}}**. Agree on a short wall, bridge, or fence and **place five connected pieces together**. Use materials already at the site."
      },
      "de": {
        "name": "Eine Wand gemeinsam",
        "objective": "Starte **eine gemeinsam genutzte Bauwelt**. Einigt euch auf eine kurze Wand, Brücke oder einen Zaun und **setzt gemeinsam fünf verbundene Teile**. Nutzt Material, das bereits vor Ort liegt.",
        "gameObjective": "Starte **{{game}}**. Einigt euch auf eine kurze Wand, Brücke oder einen Zaun und **setzt gemeinsam fünf verbundene Teile**. Nutzt Material, das bereits vor Ort liegt."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "focused-deck-opening-line": {
    "definition": {
      "id": "focused-deck-opening-line",
      "rarity": "standard",
      "moodIds": [
        "focused"
      ],
      "type": "experiment",
      "tags": [
        "cards",
        "new-approach"
      ],
      "minimumDurationMinutes": 5,
      "suggestedDurationMinutes": 25,
      "customGameCompatibility": {
        "capabilityIds": [
          "card-decks",
          "rounds-or-matches"
        ],
        "match": "all"
      },
      "gameGenreIds": [
        "card"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": true,
      "name": "Opening Line",
      "objective": "Open **a card game with a familiar deck and solo or bot play**. Choose one opening sequence you rarely prioritize and **finish a match after attempting that sequence**. Keep the first playable hand.",
      "gameObjective": "Open **{{game}}**. Choose one opening sequence you rarely prioritize and **finish a match after attempting that sequence**. Keep the first playable hand."
    },
    "translations": {
      "en": {
        "name": "Opening Line",
        "objective": "Open **a card game with a familiar deck and solo or bot play**. Choose one opening sequence you rarely prioritize and **finish a match after attempting that sequence**. Keep the first playable hand.",
        "gameObjective": "Open **{{game}}**. Choose one opening sequence you rarely prioritize and **finish a match after attempting that sequence**. Keep the first playable hand."
      },
      "de": {
        "name": "Eröffnungsfolge",
        "objective": "Starte **ein Kartenspiel mit einem vertrauten Deck und Solo- oder Bot-Spiel**. Wähle eine Eröffnung, die du sonst selten spielst, und **probiere sie in einem vollständigen Match aus**. Behalte die erste spielbare Hand.",
        "gameObjective": "Starte **{{game}}**. Wähle eine Eröffnung, die du sonst selten spielst, und **probiere sie in einem vollständigen Match aus**. Behalte die erste spielbare Hand."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "nostalgic-menu-car": {
    "definition": {
      "id": "nostalgic-menu-car",
      "rarity": "standard",
      "moodIds": [
        "nostalgic"
      ],
      "type": "objective",
      "tags": [
        "racing",
        "replay"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 15,
      "customGameCompatibility": {
        "capabilityIds": [
          "racing"
        ],
        "match": "all"
      },
      "gameGenreIds": [
        "racing"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": true,
      "name": "Menu Car",
      "objective": "Open **a racing game with a vehicle you remember from its cover or menus**. Choose that vehicle with its default look and **finish one race on any period-appropriate track**.",
      "gameObjective": "Open **{{game}}**. Choose that vehicle with its default look and **finish one race on any period-appropriate track**."
    },
    "translations": {
      "en": {
        "name": "Menu Car",
        "objective": "Open **a racing game with a vehicle you remember from its cover or menus**. Choose that vehicle with its default look and **finish one race on any period-appropriate track**.",
        "gameObjective": "Open **{{game}}**. Choose that vehicle with its default look and **finish one race on any period-appropriate track**."
      },
      "de": {
        "name": "Auto vom Menü",
        "objective": "Starte **ein Rennspiel mit einem Fahrzeug, das du vom Cover oder Menü kennst**. Wähle dieses Fahrzeug im Standardlook und **beende ein Rennen auf einer Strecke, die du damals gefahren bist**.",
        "gameObjective": "Starte **{{game}}**. Wähle dieses Fahrzeug im Standardlook und **beende ein Rennen auf einer Strecke, die du damals gefahren bist**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "nostalgic-retired-loadout": {
    "definition": {
      "id": "nostalgic-retired-loadout",
      "rarity": "standard",
      "moodIds": [
        "nostalgic"
      ],
      "type": "objective",
      "tags": [
        "loadout",
        "replay"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 15,
      "customGameCompatibility": {
        "capabilityIds": [
          "combat-loadouts"
        ],
        "match": "all"
      },
      "gameGenreIds": [
        "shooter",
        "rpg",
        "roguelike"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": true,
      "name": "Retired Loadout",
      "objective": "Open **a game where your former equipment setup is still available**. Equip that complete setup unchanged and **finish one normal encounter or round with it**.",
      "gameObjective": "Open **{{game}}**. Equip that complete setup unchanged and **finish one normal encounter or round with it**."
    },
    "translations": {
      "en": {
        "name": "Retired Loadout",
        "objective": "Open **a game where your former equipment setup is still available**. Equip that complete setup unchanged and **finish one normal encounter or round with it**.",
        "gameObjective": "Open **{{game}}**. Equip that complete setup unchanged and **finish one normal encounter or round with it**."
      },
      "de": {
        "name": "Ausrüstung von früher",
        "objective": "Starte **ein Spiel, in dem deine frühere Ausrüstung noch verfügbar ist**. Rüste dieses vollständige Setup unverändert aus und **spiel damit einen normalen Kampf oder eine Runde zu Ende**.",
        "gameObjective": "Starte **{{game}}**. Rüste dieses vollständige Setup unverändert aus und **spiel damit einen normalen Kampf oder eine Runde zu Ende**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "nostalgic-original-controls": {
    "definition": {
      "id": "nostalgic-original-controls",
      "rarity": "standard",
      "moodIds": [
        "nostalgic"
      ],
      "type": "objective",
      "tags": [
        "replay"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 15,
      "customGameCompatibility": {
        "capabilityIds": [
          "missions-or-levels"
        ],
        "match": "all"
      },
      "gameGenreIds": [
        "adventure",
        "platformer",
        "shooter"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": true,
      "name": "Original Controls",
      "objective": "Open **a familiar game with its original control preset**. Select that preset and **finish one familiar level or round**. Restore your current settings afterward if you prefer.",
      "gameObjective": "Open **{{game}}**. Select that preset and **finish one familiar level or round**. Restore your current settings afterward if you prefer."
    },
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
    "catalogRevision": "2026-10-04-before"
  },
  "nostalgic-legacy-outfit": {
    "definition": {
      "id": "nostalgic-legacy-outfit",
      "rarity": "standard",
      "moodIds": [
        "nostalgic"
      ],
      "type": "objective",
      "tags": [
        "outfit",
        "replay"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 20,
      "customGameCompatibility": {
        "capabilityIds": [
          "customization",
          "missions-or-levels"
        ],
        "match": "all"
      },
      "gameGenreIds": [
        "adventure",
        "rpg",
        "shooter"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": true,
      "name": "Legacy Outfit",
      "objective": "Open **a game with an outfit from an earlier entry or season**. Equip that look and **finish one normal mission or round while wearing it**.",
      "gameObjective": "Open **{{game}}**. Equip that look and **finish one normal mission or round while wearing it**."
    },
    "translations": {
      "en": {
        "name": "Legacy Outfit",
        "objective": "Open **a game with an outfit from an earlier entry or season**. Equip that look and **finish one normal mission or round while wearing it**.",
        "gameObjective": "Open **{{game}}**. Equip that look and **finish one normal mission or round while wearing it**."
      },
      "de": {
        "name": "Klassisches Outfit",
        "objective": "Starte **ein Spiel mit einem Outfit aus einem früheren Teil oder einer früheren Saison**. Zieh das Outfit an und **spiel darin eine normale Mission oder Runde zu Ende**.",
        "gameObjective": "Starte **{{game}}**. Zieh das Outfit an und **spiel darin eine normale Mission oder Runde zu Ende**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "create-room-around-one-item": {
    "definition": {
      "id": "create-room-around-one-item",
      "rarity": "standard",
      "moodIds": [
        "create"
      ],
      "type": "creation",
      "tags": [
        "decorating"
      ],
      "minimumDurationMinutes": 5,
      "suggestedDurationMinutes": 25,
      "customGameCompatibility": {
        "capabilityIds": [
          "building",
          "customization"
        ],
        "match": "all"
      },
      "gameGenreIds": [
        "simulation",
        "sandbox"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": true,
      "name": "One-Item Room",
      "objective": "Open **a game with interior decoration and stored furniture**. Pick one favorite item as the centerpiece and **finish a small room arrangement around it**.",
      "gameObjective": "Open **{{game}}**. Pick one favorite item as the centerpiece and **finish a small room arrangement around it**."
    },
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
    "catalogRevision": "2026-10-04-before"
  },
  "create-level-with-shortcut": {
    "definition": {
      "id": "create-level-with-shortcut",
      "rarity": "standard",
      "moodIds": [
        "create"
      ],
      "type": "creation",
      "tags": [
        "level-editor"
      ],
      "minimumDurationMinutes": 5,
      "suggestedDurationMinutes": 30,
      "gameGenreIds": [
        "platformer",
        "racing"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": true,
      "name": "Shortcut Level",
      "objective": "Open **a game with a level editor and playable testing**. Build a short route with one optional shortcut and **complete both routes in a test run**.",
      "gameObjective": "Open **{{game}}**. Build a short route with one optional shortcut and **complete both routes in a test run**."
    },
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
    "catalogRevision": "2026-10-04-before"
  },
  "create-playable-puzzle": {
    "definition": {
      "id": "create-playable-puzzle",
      "rarity": "special",
      "moodIds": [
        "create"
      ],
      "type": "creation",
      "tags": [
        "puzzles",
        "level-editor"
      ],
      "minimumDurationMinutes": 5,
      "suggestedDurationMinutes": 30,
      "gameGenreIds": [
        "puzzle"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": true,
      "name": "Playable Puzzle",
      "objective": "Open **a game with a puzzle or level editor**. Build a tiny puzzle where one object has to be used twice in different ways. **Solve it from the starting state in a test run**, then save the playable version.",
      "gameObjective": "Open **{{game}}**. Build a tiny puzzle where one object has to be used twice in different ways. **Solve it from the starting state in a test run**, then save the playable version."
    },
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
    "catalogRevision": "2026-10-04-before"
  },
  "overwhelmed-default-bot-round": {
    "definition": {
      "id": "overwhelmed-default-bot-round",
      "rarity": "standard",
      "moodIds": [
        "overwhelmed"
      ],
      "type": "objective",
      "tags": [
        "vs-bots",
        "one-round"
      ],
      "minimumDurationMinutes": 2,
      "suggestedDurationMinutes": 10,
      "customGameCompatibility": {
        "capabilityIds": [
          "rounds-or-matches"
        ],
        "match": "all"
      },
      "gameGenreIds": [
        "shooter",
        "sports",
        "fighting"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": true,
      "name": "Default Bot Round",
      "objective": "Open **a familiar game with bot rounds**. Accept the default mode, map, and loadout and **finish one bot round**. The result does not matter.",
      "gameObjective": "Open **{{game}}**. Accept the default mode, map, and loadout and **finish one bot round**. The result does not matter."
    },
    "translations": {
      "en": {
        "name": "Default Bot Round",
        "objective": "Open **a familiar game with bot rounds**. Accept the default mode, map, and loadout and **finish one bot round**. The result does not matter.",
        "gameObjective": "Open **{{game}}**. Accept the default mode, map, and loadout and **finish one bot round**. The result does not matter."
      },
      "de": {
        "name": "Standardrunde gegen Bots",
        "objective": "Starte **ein vertrautes Spiel mit Bot-Runden**. Akzeptiere Standardmodus, Karte und Ausrüstung und **beende eine Bot-Runde**. Das Ergebnis ist egal.",
        "gameObjective": "Starte **{{game}}**. Akzeptiere Standardmodus, Karte und Ausrüstung und **beende eine Bot-Runde**. Das Ergebnis ist egal."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "overwhelmed-training-prompts": {
    "definition": {
      "id": "overwhelmed-training-prompts",
      "rarity": "standard",
      "moodIds": [
        "overwhelmed"
      ],
      "type": "objective",
      "tags": [
        "replay"
      ],
      "minimumDurationMinutes": 2,
      "suggestedDurationMinutes": 10,
      "customGameCompatibility": {
        "capabilityIds": [
          "missions-or-levels"
        ],
        "match": "all"
      },
      "gameGenreIds": [],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": true,
      "name": "Three Prompts",
      "objective": "Open **a familiar game with a free training area**. Accept the first three basic prompts or targets shown and **complete those three exercises**. Leave before opening advanced lessons.",
      "gameObjective": "Open **{{game}}**. Accept the first three basic prompts or targets shown and **complete those three exercises**. Leave before opening advanced lessons."
    },
    "translations": {
      "en": {
        "name": "Three Prompts",
        "objective": "Open **a familiar game with a free training area**. Accept the first three basic prompts or targets shown and **complete those three exercises**. Leave before opening advanced lessons.",
        "gameObjective": "Open **{{game}}**. Accept the first three basic prompts or targets shown and **complete those three exercises**. Leave before opening advanced lessons."
      },
      "de": {
        "name": "Drei Übungen",
        "objective": "Starte **ein vertrautes Spiel mit freiem Trainingsbereich**. Nimm die ersten drei angezeigten Grundübungen oder Ziele an und **schließe diese drei Übungen ab**. Hör vor den fortgeschrittenen Lektionen auf.",
        "gameObjective": "Starte **{{game}}**. Nimm die ersten drei angezeigten Grundübungen oder Ziele an und **schließe diese drei Übungen ab**. Hör vor den fortgeschrittenen Lektionen auf."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "overwhelmed-short-hinted-puzzle": {
    "definition": {
      "id": "overwhelmed-short-hinted-puzzle",
      "rarity": "standard",
      "moodIds": [
        "overwhelmed"
      ],
      "type": "objective",
      "tags": [
        "puzzles"
      ],
      "minimumDurationMinutes": 2,
      "suggestedDurationMinutes": 10,
      "customGameCompatibility": {
        "capabilityIds": [
          "puzzles"
        ],
        "match": "all"
      },
      "gameGenreIds": [
        "puzzle"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": true,
      "name": "Hinted Puzzle",
      "objective": "Open **a puzzle game with hints and short stages**. Choose one easy unsolved stage, use hints whenever needed, and **solve that puzzle**.",
      "gameObjective": "Open **{{game}}**. Choose one easy unsolved stage, use hints whenever needed, and **solve that puzzle**."
    },
    "translations": {
      "en": {
        "name": "Hinted Puzzle",
        "objective": "Open **a puzzle game with hints and short stages**. Choose one easy unsolved stage, use hints whenever needed, and **solve that puzzle**.",
        "gameObjective": "Open **{{game}}**. Choose one easy unsolved stage, use hints whenever needed, and **solve that puzzle**."
      },
      "de": {
        "name": "Rätsel mit Hinweisen",
        "objective": "Starte **ein Rätselspiel mit Hinweisen und kurzen Stufen**. Wähle eine leichte ungelöste Stufe, nutze Hinweise bei Bedarf und **löse dieses Rätsel**.",
        "gameObjective": "Starte **{{game}}**. Wähle eine leichte ungelöste Stufe, nutze Hinweise bei Bedarf und **löse dieses Rätsel**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "overwhelmed-auto-deck-battle": {
    "definition": {
      "id": "overwhelmed-auto-deck-battle",
      "rarity": "standard",
      "moodIds": [
        "overwhelmed"
      ],
      "type": "objective",
      "tags": [
        "cards",
        "vs-bots"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 15,
      "customGameCompatibility": {
        "capabilityIds": [
          "card-decks"
        ],
        "match": "all"
      },
      "gameGenreIds": [
        "card"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": true,
      "name": "Auto Deck",
      "objective": "Open **a card game with an auto-built legal deck**. Accept the generated deck unchanged and **finish one solo or bot battle**. Keep the first playable hand.",
      "gameObjective": "Open **{{game}}**. Accept the generated deck unchanged and **finish one solo or bot battle**. Keep the first playable hand."
    },
    "translations": {
      "en": {
        "name": "Auto Deck",
        "objective": "Open **a card game with an auto-built legal deck**. Accept the generated deck unchanged and **finish one solo or bot battle**. Keep the first playable hand.",
        "gameObjective": "Open **{{game}}**. Accept the generated deck unchanged and **finish one solo or bot battle**. Keep the first playable hand."
      },
      "de": {
        "name": "Automatisches Deck",
        "objective": "Starte **ein Kartenspiel mit automatisch gebautem gültigem Deck**. Akzeptiere das erstellte Deck unverändert und **beende einen Solo- oder Bot-Kampf**. Behalte die erste spielbare Hand.",
        "gameObjective": "Starte **{{game}}**. Akzeptiere das erstellte Deck unverändert und **beende einen Solo- oder Bot-Kampf**. Behalte die erste spielbare Hand."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "overwhelmed-known-recipe": {
    "definition": {
      "id": "overwhelmed-known-recipe",
      "rarity": "standard",
      "moodIds": [
        "overwhelmed"
      ],
      "type": "objective",
      "tags": [
        "cooking"
      ],
      "minimumDurationMinutes": 2,
      "suggestedDurationMinutes": 10,
      "customGameCompatibility": {
        "capabilityIds": [
          "cooking"
        ],
        "match": "all"
      },
      "gameGenreIds": [
        "simulation",
        "cozy",
        "survival"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": true,
      "name": "Known Recipe",
      "objective": "Open **a game with a familiar recipe and owned ingredients**. Select it without comparing alternatives and **cook one serving**.",
      "gameObjective": "Open **{{game}}**. Select it without comparing alternatives and **cook one serving**."
    },
    "translations": {
      "en": {
        "name": "Known Recipe",
        "objective": "Open **a game with a familiar recipe and owned ingredients**. Select it without comparing alternatives and **cook one serving**.",
        "gameObjective": "Open **{{game}}**. Select it without comparing alternatives and **cook one serving**."
      },
      "de": {
        "name": "Bekanntes Rezept",
        "objective": "Starte **ein Spiel mit einem vertrauten Rezept und vorhandenen Zutaten**. Wähle es ohne Vergleich mit Alternativen und **koche eine Portion**.",
        "gameObjective": "Starte **{{game}}**. Wähle es ohne Vergleich mit Alternativen und **koche eine Portion**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "overwhelmed-one-crop-patch": {
    "definition": {
      "id": "overwhelmed-one-crop-patch",
      "rarity": "standard",
      "moodIds": [
        "overwhelmed"
      ],
      "type": "objective",
      "tags": [
        "farming"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 15,
      "customGameCompatibility": {
        "capabilityIds": [
          "grow-crops"
        ],
        "match": "all"
      },
      "gameGenreIds": [
        "simulation",
        "cozy"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": true,
      "name": "One Crop Patch",
      "objective": "Open **a farming game with an existing crop patch**. Water or harvest only that patch and **leave every tile in it tended**. Ignore the rest of the farm.",
      "gameObjective": "Open **{{game}}**. Water or harvest only that patch and **leave every tile in it tended**. Ignore the rest of the farm."
    },
    "translations": {
      "en": {
        "name": "One Crop Patch",
        "objective": "Open **a farming game with an existing crop patch**. Water or harvest only that patch and **leave every tile in it tended**. Ignore the rest of the farm.",
        "gameObjective": "Open **{{game}}**. Water or harvest only that patch and **leave every tile in it tended**. Ignore the rest of the farm."
      },
      "de": {
        "name": "Ein kleines Feld",
        "objective": "Starte **ein Farmspiel mit einem bestehenden Feld**. Kümmere dich nur um dieses Feld: **Gieß die Pflanzen, die Wasser brauchen, und ernte alles Reife**. Den Rest des Hofs lässt du heute liegen.",
        "gameObjective": "Starte **{{game}}**. Kümmere dich nur um dieses Feld: **Gieß die Pflanzen, die Wasser brauchen, und ernte alles Reife**. Den Rest des Hofs lässt du heute liegen."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "curious-untried-dialogue-tone": {
    "definition": {
      "id": "curious-untried-dialogue-tone",
      "rarity": "standard",
      "moodIds": [
        "curious"
      ],
      "type": "experiment",
      "tags": [
        "dialogue",
        "new-approach"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 15,
      "customGameCompatibility": {
        "capabilityIds": [
          "choices-or-lore"
        ],
        "match": "all"
      },
      "gameGenreIds": [
        "narrative",
        "rpg"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": true,
      "name": "Different Tone",
      "objective": "Open **a story game with dialogue tones or approaches**. Choose a tone you normally avoid and **follow that branch until the conversation ends or returns**. Accept its consequence.",
      "gameObjective": "Open **{{game}}**. Choose a tone you normally avoid and **follow that branch until the conversation ends or returns**. Accept its consequence."
    },
    "translations": {
      "en": {
        "name": "Different Tone",
        "objective": "Open **a story game with dialogue tones or approaches**. Choose a tone you normally avoid and **follow that branch until the conversation ends or returns**. Accept its consequence.",
        "gameObjective": "Open **{{game}}**. Choose a tone you normally avoid and **follow that branch until the conversation ends or returns**. Accept its consequence."
      },
      "de": {
        "name": "Anderer Ton",
        "objective": "Starte **ein Storyspiel mit verschiedenen Dialogtönen oder Ansätzen**. Wähle in einem Gespräch einen Ton, den du sonst meidest, und **folge dem Dialogzweig bis zum Ende oder zurück zum Hauptgespräch**. Bleib bei deiner Wahl.",
        "gameObjective": "Starte **{{game}}**. Wähle in einem Gespräch einen Ton, den du sonst meidest, und **folge dem Dialogzweig bis zum Ende oder zurück zum Hauptgespräch**. Bleib bei deiner Wahl."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "curious-two-difficulties": {
    "definition": {
      "id": "curious-two-difficulties",
      "rarity": "standard",
      "moodIds": [
        "curious"
      ],
      "type": "experiment",
      "tags": [
        "replay",
        "new-approach"
      ],
      "minimumDurationMinutes": 5,
      "suggestedDurationMinutes": 25,
      "customGameCompatibility": {
        "capabilityIds": [
          "missions-or-levels"
        ],
        "match": "all"
      },
      "gameGenreIds": [
        "adventure",
        "shooter",
        "platformer"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": true,
      "name": "Two Difficulties",
      "objective": "Open **a game with a short replayable checkpoint and adjustable difficulty**. Finish the section on your usual setting, move one step up or down, then **finish it again and compare what changed**.",
      "gameObjective": "Open **{{game}}**. Finish the section on your usual setting, move one step up or down, then **finish it again and compare what changed**."
    },
    "translations": {
      "en": {
        "name": "Two Difficulties",
        "objective": "Open **a game with a short replayable checkpoint and adjustable difficulty**. Finish the section on your usual setting, move one step up or down, then **finish it again and compare what changed**.",
        "gameObjective": "Open **{{game}}**. Finish the section on your usual setting, move one step up or down, then **finish it again and compare what changed**."
      },
      "de": {
        "name": "Zwei Schwierigkeiten",
        "objective": "Starte **ein Spiel mit einem kurzen Abschnitt, den du auf verschiedenen Schwierigkeitsgraden erneut spielen kannst**. Beende den Abschnitt auf deiner üblichen Stufe, geh eine Stufe höher oder tiefer und **beende ihn erneut und vergleiche die Unterschiede**.",
        "gameObjective": "Starte **{{game}}**. Beende den Abschnitt auf deiner üblichen Stufe, geh eine Stufe höher oder tiefer und **beende ihn erneut und vergleiche die Unterschiede**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "focused-one-gadget-plan": {
    "definition": {
      "id": "focused-one-gadget-plan",
      "rarity": "standard",
      "moodIds": [
        "focused"
      ],
      "type": "objective",
      "tags": [
        "gadgets",
        "new-approach"
      ],
      "minimumDurationMinutes": 5,
      "suggestedDurationMinutes": 25,
      "customGameCompatibility": {
        "capabilityIds": [
          "tactical-gadgets",
          "missions-or-levels"
        ],
        "match": "all"
      },
      "gameGenreIds": [
        "shooter",
        "stealth"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": true,
      "name": "Plan Around a Gadget",
      "objective": "Open **a solo mission with an unlocked tactical gadget**. Choose one gadget before entering. **Use it to create an opening and reach the next checkpoint** without changing the plan halfway through.",
      "gameObjective": "Open **{{game}}**. Choose one gadget before entering. **Use it to create an opening and reach the next checkpoint** without changing the plan halfway through."
    },
    "translations": {
      "en": {
        "name": "Plan Around a Gadget",
        "objective": "Open **a solo mission with an unlocked tactical gadget**. Choose one gadget before entering. **Use it to create an opening and reach the next checkpoint** without changing the plan halfway through.",
        "gameObjective": "Open **{{game}}**. Choose one gadget before entering. **Use it to create an opening and reach the next checkpoint** without changing the plan halfway through."
      },
      "de": {
        "name": "Plan mit Gadget",
        "objective": "Starte **eine Solo-Mission mit einem freigeschalteten taktischen Gadget**. Wähle vor dem Betreten ein Gadget. **Öffne dir damit einen Weg und erreiche den nächsten Checkpoint**, ohne mittendrin auf einen anderen Plan umzuschwenken.",
        "gameObjective": "Starte **{{game}}**. Wähle vor dem Betreten ein Gadget. **Öffne dir damit einen Weg und erreiche den nächsten Checkpoint**, ohne mittendrin auf einen anderen Plan umzuschwenken."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "curious-mapless-errand": {
    "definition": {
      "id": "curious-mapless-errand",
      "rarity": "standard",
      "moodIds": [
        "curious"
      ],
      "type": "experiment",
      "tags": [
        "no-fast-travel",
        "exploration"
      ],
      "minimumDurationMinutes": 5,
      "suggestedDurationMinutes": 25,
      "customGameCompatibility": {
        "capabilityIds": [
          "open-world"
        ],
        "match": "all"
      },
      "gameGenreIds": [
        "adventure",
        "rpg",
        "sandbox"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": true,
      "name": "Without the Marker",
      "objective": "Open **an open-world game where quest guidance can be hidden and a known destination is nearby**. Hide the route or objective marker and **reach that destination using landmarks**. Turn guidance back on after you arrive.",
      "gameObjective": "Open **{{game}}**. Hide the route or objective marker and **reach that destination using landmarks**. Turn guidance back on after you arrive."
    },
    "translations": {
      "en": {
        "name": "Without the Marker",
        "objective": "Open **an open-world game where quest guidance can be hidden and a known destination is nearby**. Hide the route or objective marker and **reach that destination using landmarks**. Turn guidance back on after you arrive.",
        "gameObjective": "Open **{{game}}**. Hide the route or objective marker and **reach that destination using landmarks**. Turn guidance back on after you arrive."
      },
      "de": {
        "name": "Ohne Markierung",
        "objective": "Starte **ein Open-World-Spiel mit ausblendbarer Questführung und einem bekannten Ziel in der Nähe**. Blende Route oder Zielmarkierung aus und **erreiche den Ort anhand von Landmarken**. Schalte die Führung danach wieder ein.",
        "gameObjective": "Starte **{{game}}**. Blende Route oder Zielmarkierung aus und **erreiche den Ort anhand von Landmarken**. Schalte die Führung danach wieder ein."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "challenge-one-lane-hold": {
    "definition": {
      "id": "challenge-one-lane-hold",
      "rarity": "standard",
      "moodIds": [
        "challenge"
      ],
      "type": "challenge",
      "tags": [
        "units",
        "three-attempts"
      ],
      "minimumDurationMinutes": 5,
      "suggestedDurationMinutes": 30,
      "customGameCompatibility": {
        "capabilityIds": [
          "unit-command",
          "missions-or-levels"
        ],
        "match": "all"
      },
      "gameGenreIds": [
        "strategy"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "universal": true,
      "gameBindable": true,
      "name": "Hold One Lane",
      "objective": "Open **a strategy game with a short replayable defense scenario**. Defend one approach with a fixed group of units and **finish the scenario without moving that group to another lane**, or stop after three attempts.",
      "gameObjective": "Open **{{game}}**. Defend one approach with a fixed group of units and **finish the scenario without moving that group to another lane**, or stop after three attempts."
    },
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
    "catalogRevision": "2026-10-04-before"
  },
  "no-mans-sky-archive-artifact-exchange": {
    "definition": {
      "id": "no-mans-sky-archive-artifact-exchange",
      "rarity": "standard",
      "moodIds": [
        "curious",
        "progress"
      ],
      "type": "objective",
      "tags": [
        "collectibles",
        "trading"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 15,
      "universal": false,
      "curated": {
        "gameId": "no-mans-sky",
        "installmentIds": []
      },
      "gameGenreIds": [
        "adventure",
        "sandbox",
        "survival"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "An Archive Exchange",
      "objective": "In **No Man’s Sky**, with a planetary archive already marked and an accepted artifact owned, **exchange it at the archive’s artifact vault and inspect the replacement**. No particular quality is required.",
      "gameObjective": "In **No Man’s Sky**, with a planetary archive already marked and an accepted artifact owned, **exchange it at the archive’s artifact vault and inspect the replacement**. No particular quality is required."
    },
    "translations": {
      "en": {
        "name": "An Archive Exchange",
        "objective": "In **No Man’s Sky**, with a planetary archive already marked and an accepted artifact owned, **exchange it at the archive’s artifact vault and inspect the replacement**. No particular quality is required.",
        "gameObjective": "In **No Man’s Sky**, with a planetary archive already marked and an accepted artifact owned, **exchange it at the archive’s artifact vault and inspect the replacement**. No particular quality is required."
      },
      "de": {
        "name": "Ein Artefakt fürs Archiv",
        "objective": "**No Man’s Sky**: **Tausch an einem markierten planetaren Archiv ein vorhandenes passendes Artefakt im Artefakttresor und sieh dir den Ersatz an**. Eine bestimmte Qualität brauchst du nicht.",
        "gameObjective": "**No Man’s Sky**: **Tausch an einem markierten planetaren Archiv ein vorhandenes passendes Artefakt im Artefakttresor und sieh dir den Ersatz an**. Eine bestimmte Qualität brauchst du nicht."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "no-mans-sky-oxygen-refiner-comparison": {
    "definition": {
      "id": "no-mans-sky-oxygen-refiner-comparison",
      "rarity": "standard",
      "moodIds": [
        "curious",
        "focused"
      ],
      "type": "experiment",
      "tags": [
        "crafting"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 15,
      "universal": false,
      "curated": {
        "gameId": "no-mans-sky",
        "installmentIds": []
      },
      "gameGenreIds": [
        "adventure",
        "sandbox",
        "survival"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Two Refiner Recipes",
      "objective": "In **No Man’s Sky**, with a Medium Refiner, Salt, Chlorine and Oxygen ready, refine a small amount of Salt on its own. Then **refine Chlorine with Oxygen and compare the two output amounts**.",
      "gameObjective": "In **No Man’s Sky**, with a Medium Refiner, Salt, Chlorine and Oxygen ready, refine a small amount of Salt on its own. Then **refine Chlorine with Oxygen and compare the two output amounts**."
    },
    "translations": {
      "en": {
        "name": "Two Refiner Recipes",
        "objective": "In **No Man’s Sky**, with a Medium Refiner, Salt, Chlorine and Oxygen ready, refine a small amount of Salt on its own. Then **refine Chlorine with Oxygen and compare the two output amounts**.",
        "gameObjective": "In **No Man’s Sky**, with a Medium Refiner, Salt, Chlorine and Oxygen ready, refine a small amount of Salt on its own. Then **refine Chlorine with Oxygen and compare the two output amounts**."
      },
      "de": {
        "name": "Zwei Raffinerie-Rezepte",
        "objective": "**No Man’s Sky**: Raffiniere mit vorhandener mittlerer Raffinerie, Salz, Chlor und Sauerstoff zuerst etwas Salz allein. **Raffiniere dann Chlor mit Sauerstoff und vergleiche die beiden Ausgabemengen**.",
        "gameObjective": "**No Man’s Sky**: Raffiniere mit vorhandener mittlerer Raffinerie, Salz, Chlor und Sauerstoff zuerst etwas Salz allein. **Raffiniere dann Chlor mit Sauerstoff und vergleiche die beiden Ausgabemengen**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "no-mans-sky-scanner-supercharged-test": {
    "definition": {
      "id": "no-mans-sky-scanner-supercharged-test",
      "rarity": "standard",
      "moodIds": [
        "curious",
        "focused"
      ],
      "type": "experiment",
      "tags": [
        "scouting",
        "loadout"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 15,
      "universal": false,
      "curated": {
        "gameId": "no-mans-sky",
        "installmentIds": []
      },
      "gameGenreIds": [
        "adventure",
        "sandbox",
        "survival"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Charge the Scanner",
      "objective": "In **No Man’s Sky**, with a scanner upgrade and an unlocked supercharged Multi-Tool slot, scan one unfamiliar animal. Move the upgrade into that slot, then **scan another animal and compare the reward shown**. Species differences may also affect the result.",
      "gameObjective": "In **No Man’s Sky**, with a scanner upgrade and an unlocked supercharged Multi-Tool slot, scan one unfamiliar animal. Move the upgrade into that slot, then **scan another animal and compare the reward shown**. Species differences may also affect the result."
    },
    "translations": {
      "en": {
        "name": "Charge the Scanner",
        "objective": "In **No Man’s Sky**, with a scanner upgrade and an unlocked supercharged Multi-Tool slot, scan one unfamiliar animal. Move the upgrade into that slot, then **scan another animal and compare the reward shown**. Species differences may also affect the result.",
        "gameObjective": "In **No Man’s Sky**, with a scanner upgrade and an unlocked supercharged Multi-Tool slot, scan one unfamiliar animal. Move the upgrade into that slot, then **scan another animal and compare the reward shown**. Species differences may also affect the result."
      },
      "de": {
        "name": "Den Scanner verstärken",
        "objective": "**No Man’s Sky**: Scanne mit einem Scanner-Upgrade und einem freigeschalteten Supercharge-Platz im Multiwerkzeug ein unbekanntes Tier. Verschiebe das Upgrade dorthin, **scanne ein weiteres Tier und vergleiche die angezeigte Belohnung**. Auch die Tierarten können den Wert verändern.",
        "gameObjective": "**No Man’s Sky**: Scanne mit einem Scanner-Upgrade und einem freigeschalteten Supercharge-Platz im Multiwerkzeug ein unbekanntes Tier. Verschiebe das Upgrade dorthin, **scanne ein weiteres Tier und vergleiche die angezeigte Belohnung**. Auch die Tierarten können den Wert verändern."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "no-mans-sky-derelict-one-room": {
    "definition": {
      "id": "no-mans-sky-derelict-one-room",
      "rarity": "standard",
      "moodIds": [
        "challenge"
      ],
      "type": "challenge",
      "tags": [
        "space",
        "one-life"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 25,
      "universal": false,
      "curated": {
        "gameId": "no-mans-sky",
        "installmentIds": []
      },
      "gameGenreIds": [
        "adventure",
        "simulation",
        "sandbox"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Cold Ship Survey",
      "objective": "If you have an Emergency Broadcast Receiver, board a derelict freighter and **clear one room without using a hazard recharge**. Stop after three attempts.",
      "gameObjective": "If you have an Emergency Broadcast Receiver, board a derelict freighter and **clear one room without using a hazard recharge**. Stop after three attempts."
    },
    "translations": {
      "en": {
        "name": "Cold Ship Survey",
        "objective": "If you have an Emergency Broadcast Receiver, board a derelict freighter and **clear one room without using a hazard recharge**. Stop after three attempts.",
        "gameObjective": "If you have an Emergency Broadcast Receiver, board a derelict freighter and **clear one room without using a hazard recharge**. Stop after three attempts."
      },
      "de": {
        "name": "Ein Raum im Geisterfrachter",
        "objective": "Wenn du einen Notfunksignal-Empfänger hast, betritt einen verlassenen Frachter und **räume einen Raum ohne Gefahrenschutz-Nachladung**. Höre nach drei Versuchen auf.",
        "gameObjective": "Wenn du einen Notfunksignal-Empfänger hast, betritt einen verlassenen Frachter und **räume einen Raum ohne Gefahrenschutz-Nachladung**. Höre nach drei Versuchen auf."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "minecraft-working-fishing-pier": {
    "definition": {
      "id": "minecraft-working-fishing-pier",
      "rarity": "standard",
      "moodIds": [
        "create",
        "relax"
      ],
      "type": "creation",
      "tags": [
        "building",
        "fishing"
      ],
      "minimumDurationMinutes": 5,
      "suggestedDurationMinutes": 25,
      "universal": false,
      "curated": {
        "gameId": "minecraft",
        "installmentIds": []
      },
      "gameGenreIds": [
        "survival",
        "sandbox"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Open the Pier",
      "objective": "At a shore near home in **Minecraft**, build a small pier with a barrel and lighting. Leave open water in front of the casting spot, then **catch one fish from the pier and store it in the barrel**.",
      "gameObjective": "At a shore near home in **Minecraft**, build a small pier with a barrel and lighting. Leave open water in front of the casting spot, then **catch one fish from the pier and store it in the barrel**."
    },
    "translations": {
      "en": {
        "name": "Open the Pier",
        "objective": "At a shore near home in **Minecraft**, build a small pier with a barrel and lighting. Leave open water in front of the casting spot, then **catch one fish from the pier and store it in the barrel**.",
        "gameObjective": "At a shore near home in **Minecraft**, build a small pier with a barrel and lighting. Leave open water in front of the casting spot, then **catch one fish from the pier and store it in the barrel**."
      },
      "de": {
        "name": "Der Steg ist offen",
        "objective": "Bau in **Minecraft** am Ufer nahe deinem Zuhause einen kleinen Steg mit Fass und Licht. Lass davor genug freies Wasser zum Angeln und **fang vom Steg einen Fisch, den du ins Fass legst**.",
        "gameObjective": "Bau in **Minecraft** am Ufer nahe deinem Zuhause einen kleinen Steg mit Fass und Licht. Lass davor genug freies Wasser zum Angeln und **fang vom Steg einen Fisch, den du ins Fass legst**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "minecraft-map-home": {
    "definition": {
      "id": "minecraft-map-home",
      "rarity": "standard",
      "moodIds": [
        "explore",
        "curious"
      ],
      "type": "objective",
      "tags": [
        "exploration",
        "on-foot"
      ],
      "minimumDurationMinutes": 5,
      "suggestedDurationMinutes": 30,
      "universal": false,
      "curated": {
        "gameId": "minecraft",
        "installmentIds": []
      },
      "gameGenreIds": [
        "survival",
        "sandbox"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Map One Corner",
      "objective": "In **Minecraft**, open a new, unexpanded map at your base. Choose one reachable quadrant and **fill its blank patches on foot**. Return home and put the map in an item frame. Bring food before leaving.",
      "gameObjective": "In **Minecraft**, open a new, unexpanded map at your base. Choose one reachable quadrant and **fill its blank patches on foot**. Return home and put the map in an item frame. Bring food before leaving."
    },
    "translations": {
      "en": {
        "name": "Map One Corner",
        "objective": "In **Minecraft**, open a new, unexpanded map at your base. Choose one reachable quadrant and **fill its blank patches on foot**. Return home and put the map in an item frame. Bring food before leaving.",
        "gameObjective": "In **Minecraft**, open a new, unexpanded map at your base. Choose one reachable quadrant and **fill its blank patches on foot**. Return home and put the map in an item frame. Bring food before leaving."
      },
      "de": {
        "name": "Die Umgebung kartieren",
        "objective": "Öffne in **Minecraft** an deiner Basis eine neue, nicht vergrößerte Karte. Such dir darauf einen Bereich aus und **deck seine leeren Stellen zu Fuß auf**. Geh mit Essen los, kehr nach Hause zurück und häng die Karte in einen Rahmen.",
        "gameObjective": "Öffne in **Minecraft** an deiner Basis eine neue, nicht vergrößerte Karte. Such dir darauf einen Bereich aus und **deck seine leeren Stellen zu Fuß auf**. Geh mit Essen los, kehr nach Hause zurück und häng die Karte in einen Rahmen."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "minecraft-copper-wax-scrape": {
    "definition": {
      "id": "minecraft-copper-wax-scrape",
      "rarity": "standard",
      "moodIds": [
        "curious",
        "create"
      ],
      "type": "experiment",
      "tags": [
        "building"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 15,
      "universal": false,
      "curated": {
        "gameId": "minecraft",
        "installmentIds": []
      },
      "gameGenreIds": [
        "sandbox",
        "survival"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Keep the Copper Color",
      "objective": "In **Minecraft**, with oxidized copper blocks, honeycomb and an axe ready, **wax one block and scrape oxidation from another**. Place them beside each other to compare the finishes.",
      "gameObjective": "In **Minecraft**, with oxidized copper blocks, honeycomb and an axe ready, **wax one block and scrape oxidation from another**. Place them beside each other to compare the finishes."
    },
    "translations": {
      "en": {
        "name": "Keep the Copper Color",
        "objective": "In **Minecraft**, with oxidized copper blocks, honeycomb and an axe ready, **wax one block and scrape oxidation from another**. Place them beside each other to compare the finishes.",
        "gameObjective": "In **Minecraft**, with oxidized copper blocks, honeycomb and an axe ready, **wax one block and scrape oxidation from another**. Place them beside each other to compare the finishes."
      },
      "de": {
        "name": "Die Kupferfarbe behalten",
        "objective": "**Minecraft**: **Wachse einen oxidierten Kupferblock und schabst von einem anderen die Oxidation ab**, wenn Honigwabe und Axt bereitliegen. Stell beide nebeneinander und vergleiche die Oberflächen.",
        "gameObjective": "**Minecraft**: **Wachse einen oxidierten Kupferblock und schabst von einem anderen die Oxidation ab**, wenn Honigwabe und Axt bereitliegen. Stell beide nebeneinander und vergleiche die Oberflächen."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "minecraft-brush-known-ruin": {
    "definition": {
      "id": "minecraft-brush-known-ruin",
      "rarity": "standard",
      "moodIds": [
        "explore",
        "curious"
      ],
      "type": "objective",
      "tags": [
        "collectibles"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 20,
      "universal": false,
      "curated": {
        "gameId": "minecraft",
        "installmentIds": []
      },
      "gameGenreIds": [
        "sandbox",
        "survival"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Brush, Don’t Break",
      "objective": "In **Minecraft**, with a brush ready at a ruin where you have already spotted suspicious sand or gravel, **brush one block until its item comes free**. Keep it supported so it cannot fall.",
      "gameObjective": "In **Minecraft**, with a brush ready at a ruin where you have already spotted suspicious sand or gravel, **brush one block until its item comes free**. Keep it supported so it cannot fall."
    },
    "translations": {
      "en": {
        "name": "Brush, Don’t Break",
        "objective": "In **Minecraft**, with a brush ready at a ruin where you have already spotted suspicious sand or gravel, **brush one block until its item comes free**. Keep it supported so it cannot fall.",
        "gameObjective": "In **Minecraft**, with a brush ready at a ruin where you have already spotted suspicious sand or gravel, **brush one block until its item comes free**. Keep it supported so it cannot fall."
      },
      "de": {
        "name": "Pinseln statt abbauen",
        "objective": "**Minecraft**: **Pinsele mit vorhandenem Pinsel einen bereits entdeckten verdächtigen Sand- oder Kiesblock in einer Ruine frei, bis sein Gegenstand herauskommt**. Stütze den Block, damit er nicht herunterfällt.",
        "gameObjective": "**Minecraft**: **Pinsele mit vorhandenem Pinsel einen bereits entdeckten verdächtigen Sand- oder Kiesblock in einer Ruine frei, bis sein Gegenstand herauskommt**. Stütze den Block, damit er nicht herunterfällt."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "minecraft-bubble-lift-to-roof": {
    "definition": {
      "id": "minecraft-bubble-lift-to-roof",
      "rarity": "standard",
      "moodIds": [
        "create",
        "focused"
      ],
      "type": "creation",
      "tags": [
        "building",
        "automation"
      ],
      "minimumDurationMinutes": 5,
      "suggestedDurationMinutes": 25,
      "universal": false,
      "curated": {
        "gameId": "minecraft",
        "installmentIds": []
      },
      "gameGenreIds": [
        "sandbox",
        "survival"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Up in Bubbles",
      "objective": "In **Minecraft**, with soul sand, water and building blocks ready, **build a short upward bubble elevator between two floors and ride it**. Make the whole water column source blocks and add a safe landing.",
      "gameObjective": "In **Minecraft**, with soul sand, water and building blocks ready, **build a short upward bubble elevator between two floors and ride it**. Make the whole water column source blocks and add a safe landing."
    },
    "translations": {
      "en": {
        "name": "Up in Bubbles",
        "objective": "In **Minecraft**, with soul sand, water and building blocks ready, **build a short upward bubble elevator between two floors and ride it**. Make the whole water column source blocks and add a safe landing.",
        "gameObjective": "In **Minecraft**, with soul sand, water and building blocks ready, **build a short upward bubble elevator between two floors and ride it**. Make the whole water column source blocks and add a safe landing."
      },
      "de": {
        "name": "Mit Blasen nach oben",
        "objective": "**Minecraft**: **Bau mit vorhandenem Seelensand, Wasser und Baublöcken einen kurzen Blasenaufzug zwischen zwei Etagen und fährst damit hinauf**. Nutze in der ganzen Säule Wasserquellen und bau einen sicheren Ausstieg.",
        "gameObjective": "**Minecraft**: **Bau mit vorhandenem Seelensand, Wasser und Baublöcken einen kurzen Blasenaufzug zwischen zwei Etagen und fährst damit hinauf**. Nutze in der ganzen Säule Wasserquellen und bau einen sicheren Ausstieg."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "minecraft-night-firework-batch": {
    "definition": {
      "id": "minecraft-night-firework-batch",
      "rarity": "standard",
      "moodIds": [
        "create",
        "relax"
      ],
      "type": "creation",
      "tags": [
        "crafting"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 20,
      "universal": false,
      "curated": {
        "gameId": "minecraft",
        "installmentIds": []
      },
      "gameGenreIds": [
        "sandbox",
        "survival"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Your Own Fireworks",
      "objective": "In **Minecraft**, with gunpowder, paper and dyes ready, make two firework stars with different colors and craft a rocket from each. **Launch both from safe ground after dark and compare their bursts**.",
      "gameObjective": "In **Minecraft**, with gunpowder, paper and dyes ready, make two firework stars with different colors and craft a rocket from each. **Launch both from safe ground after dark and compare their bursts**."
    },
    "translations": {
      "en": {
        "name": "Your Own Fireworks",
        "objective": "In **Minecraft**, with gunpowder, paper and dyes ready, make two firework stars with different colors and craft a rocket from each. **Launch both from safe ground after dark and compare their bursts**.",
        "gameObjective": "In **Minecraft**, with gunpowder, paper and dyes ready, make two firework stars with different colors and craft a rocket from each. **Launch both from safe ground after dark and compare their bursts**."
      },
      "de": {
        "name": "Dein eigenes Feuerwerk",
        "objective": "**Minecraft**: Stell mit vorhandenem Schwarzpulver, Papier und Farbstoffen zwei verschiedenfarbige Feuerwerkssterne her und baust daraus je eine Rakete. **Starte beide nach Einbruch der Dunkelheit von sicherem Boden und vergleiche die Explosionen**.",
        "gameObjective": "**Minecraft**: Stell mit vorhandenem Schwarzpulver, Papier und Farbstoffen zwei verschiedenfarbige Feuerwerkssterne her und baust daraus je eine Rakete. **Starte beide nach Einbruch der Dunkelheit von sicherem Boden und vergleiche die Explosionen**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "minecraft-compost-back-to-crops": {
    "definition": {
      "id": "minecraft-compost-back-to-crops",
      "rarity": "standard",
      "moodIds": [
        "progress",
        "relax"
      ],
      "type": "objective",
      "tags": [
        "farming"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 15,
      "universal": false,
      "curated": {
        "gameId": "minecraft",
        "installmentIds": []
      },
      "gameGenreIds": [
        "sandbox",
        "survival"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Back into the Garden",
      "objective": "In **Minecraft**, with a composter, surplus compostable plants and a growing crop ready, **make one bone meal in the composter and use it on that crop**. Bring enough spare plants to fill it.",
      "gameObjective": "In **Minecraft**, with a composter, surplus compostable plants and a growing crop ready, **make one bone meal in the composter and use it on that crop**. Bring enough spare plants to fill it."
    },
    "translations": {
      "en": {
        "name": "Back into the Garden",
        "objective": "In **Minecraft**, with a composter, surplus compostable plants and a growing crop ready, **make one bone meal in the composter and use it on that crop**. Bring enough spare plants to fill it.",
        "gameObjective": "In **Minecraft**, with a composter, surplus compostable plants and a growing crop ready, **make one bone meal in the composter and use it on that crop**. Bring enough spare plants to fill it."
      },
      "de": {
        "name": "Zurück ins Beet",
        "objective": "**Minecraft**: **Stell im Komposter einmal Knochenmehl her und nutzt es auf einer wachsenden Feldfrucht**. Halte Komposter und genug übrige kompostierbare Pflanzen bereit.",
        "gameObjective": "**Minecraft**: **Stell im Komposter einmal Knochenmehl her und nutzt es auf einer wachsenden Feldfrucht**. Halte Komposter und genug übrige kompostierbare Pflanzen bereit."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "minecraft-allay-delivery": {
    "definition": {
      "id": "minecraft-allay-delivery",
      "rarity": "standard",
      "moodIds": [
        "focused"
      ],
      "type": "objective",
      "tags": [
        "automation"
      ],
      "minimumDurationMinutes": 2,
      "suggestedDurationMinutes": 15,
      "universal": false,
      "curated": {
        "gameId": "minecraft",
        "installmentIds": []
      },
      "gameGenreIds": [
        "sandbox",
        "survival"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "An Allay's Errand",
      "objective": "If you have an allay, hand it one item and **watch it bring a matching dropped item back to you or a note block**.",
      "gameObjective": "If you have an allay, hand it one item and **watch it bring a matching dropped item back to you or a note block**."
    },
    "translations": {
      "en": {
        "name": "An Allay's Errand",
        "objective": "If you have an allay, hand it one item and **watch it bring a matching dropped item back to you or a note block**.",
        "gameObjective": "If you have an allay, hand it one item and **watch it bring a matching dropped item back to you or a note block**."
      },
      "de": {
        "name": "Ein Auftrag für den Allay",
        "objective": "Wenn du einen Allay hast, gib ihm einen Gegenstand. **Lass ihn einen passenden gedroppten Gegenstand zu dir oder zu einem Notenblock bringen**.",
        "gameObjective": "Wenn du einen Allay hast, gib ihm einen Gegenstand. **Lass ihn einen passenden gedroppten Gegenstand zu dir oder zu einem Notenblock bringen**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "cyberpunk-2077-metro-postcards": {
    "definition": {
      "id": "cyberpunk-2077-metro-postcards",
      "rarity": "standard",
      "moodIds": [
        "relax",
        "explore"
      ],
      "type": "objective",
      "tags": [
        "free-roam",
        "photography"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 20,
      "universal": false,
      "curated": {
        "gameId": "cyberpunk-2077",
        "installmentIds": []
      },
      "gameGenreIds": [
        "adventure",
        "rpg",
        "shooter"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Metro Postcards",
      "objective": "After getting your NCART pass in **Cyberpunk 2077**, ride to a station you rarely use. Explore the streets around it and **save one photo of a view you found there**.",
      "gameObjective": "After getting your NCART pass in **Cyberpunk 2077**, ride to a station you rarely use. Explore the streets around it and **save one photo of a view you found there**."
    },
    "translations": {
      "en": {
        "name": "Metro Postcards",
        "objective": "After getting your NCART pass in **Cyberpunk 2077**, ride to a station you rarely use. Explore the streets around it and **save one photo of a view you found there**.",
        "gameObjective": "After getting your NCART pass in **Cyberpunk 2077**, ride to a station you rarely use. Explore the streets around it and **save one photo of a view you found there**."
      },
      "de": {
        "name": "Postkarte aus der Metro",
        "objective": "Fahr in **Cyberpunk 2077** mit deinem NCART-Pass zu einer Station, an der du selten aussteigst. Erkunde die Straßen ringsum und **mach ein Foto von einer Aussicht, die du dort entdeckst**.",
        "gameObjective": "Fahr in **Cyberpunk 2077** mit deinem NCART-Pass zu einer Station, an der du selten aussteigst. Erkunde die Straßen ringsum und **mach ein Foto von einer Aussicht, die du dort entdeckst**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "cyberpunk-2077-night-city-uniform": {
    "definition": {
      "id": "cyberpunk-2077-night-city-uniform",
      "rarity": "standard",
      "moodIds": [
        "create",
        "relax"
      ],
      "type": "creation",
      "tags": [
        "outfit",
        "photography"
      ],
      "minimumDurationMinutes": 5,
      "suggestedDurationMinutes": 25,
      "universal": false,
      "curated": {
        "gameId": "cyberpunk-2077",
        "installmentIds": []
      },
      "gameGenreIds": [
        "adventure",
        "rpg",
        "shooter"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "District Uniform",
      "objective": "In **Cyberpunk 2077**, look at the clothes worn by three NPCs in your district. Borrow one color from them for an outfit made from your wardrobe, then **save the outfit and photograph V wearing it in that district**.",
      "gameObjective": "In **Cyberpunk 2077**, look at the clothes worn by three NPCs in your district. Borrow one color from them for an outfit made from your wardrobe, then **save the outfit and photograph V wearing it in that district**."
    },
    "translations": {
      "en": {
        "name": "District Uniform",
        "objective": "In **Cyberpunk 2077**, look at the clothes worn by three NPCs in your district. Borrow one color from them for an outfit made from your wardrobe, then **save the outfit and photograph V wearing it in that district**.",
        "gameObjective": "In **Cyberpunk 2077**, look at the clothes worn by three NPCs in your district. Borrow one color from them for an outfit made from your wardrobe, then **save the outfit and photograph V wearing it in that district**."
      },
      "de": {
        "name": "Outfit fürs Viertel",
        "objective": "Schau dir in **Cyberpunk 2077** die Kleidung von drei NPCs in einem Viertel an. Übernimm eine ihrer Farben für einen Look aus deinem Kleiderschrank. **Speichere den Look und fotografiere V damit im selben Viertel**.",
        "gameObjective": "Schau dir in **Cyberpunk 2077** die Kleidung von drei NPCs in einem Viertel an. Übernimm eine ihrer Farben für einen Look aus deinem Kleiderschrank. **Speichere den Look und fotografiere V damit im selben Viertel**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "cyberpunk-2077-roach-race-run": {
    "definition": {
      "id": "cyberpunk-2077-roach-race-run",
      "rarity": "standard",
      "moodIds": [
        "nostalgic",
        "restless"
      ],
      "type": "objective",
      "tags": [
        "rhythm"
      ],
      "minimumDurationMinutes": 2,
      "suggestedDurationMinutes": 10,
      "universal": false,
      "curated": {
        "gameId": "cyberpunk-2077",
        "installmentIds": []
      },
      "gameGenreIds": [
        "adventure",
        "rpg",
        "shooter"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Roach’s Day Out",
      "objective": "Find a playable Roach Race cabinet in **Cyberpunk 2077**. **Play one run until you lose all lives**, collecting apples when they lie on your route.",
      "gameObjective": "Find a playable Roach Race cabinet in **Cyberpunk 2077**. **Play one run until you lose all lives**, collecting apples when they lie on your route."
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
    "catalogRevision": "2026-10-04-before"
  },
  "cyberpunk-2077-breach-access-point": {
    "definition": {
      "id": "cyberpunk-2077-breach-access-point",
      "rarity": "standard",
      "moodIds": [
        "curious",
        "focused"
      ],
      "type": "experiment",
      "tags": [
        "puzzles"
      ],
      "minimumDurationMinutes": 2,
      "suggestedDurationMinutes": 10,
      "universal": false,
      "curated": {
        "gameId": "cyberpunk-2077",
        "installmentIds": []
      },
      "gameGenreIds": [
        "adventure",
        "rpg",
        "shooter"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Follow the Buffer",
      "objective": "With a cyberdeck and an accessible access point in **Cyberpunk 2077**, plan the sequence before selecting the first code. **Finish one breach and check which rewards uploaded**.",
      "gameObjective": "With a cyberdeck and an accessible access point in **Cyberpunk 2077**, plan the sequence before selecting the first code. **Finish one breach and check which rewards uploaded**."
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
    "catalogRevision": "2026-10-04-before"
  },
  "cyberpunk-2077-iconic-stash-display": {
    "definition": {
      "id": "cyberpunk-2077-iconic-stash-display",
      "rarity": "standard",
      "moodIds": [
        "create",
        "progress"
      ],
      "type": "creation",
      "tags": [
        "decorating"
      ],
      "minimumDurationMinutes": 2,
      "suggestedDurationMinutes": 10,
      "universal": false,
      "curated": {
        "gameId": "cyberpunk-2077",
        "installmentIds": []
      },
      "gameGenreIds": [
        "adventure",
        "rpg",
        "shooter"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "An Icon’s Place",
      "objective": "At V’s apartment in **Cyberpunk 2077**, choose an owned Iconic weapon with a stash-wall display slot. **Put it in the stash and check it on the wall**.",
      "gameObjective": "At V’s apartment in **Cyberpunk 2077**, choose an owned Iconic weapon with a stash-wall display slot. **Put it in the stash and check it on the wall**."
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
    "catalogRevision": "2026-10-04-before"
  },
  "cyberpunk-2077-ripperdoc-one-change": {
    "definition": {
      "id": "cyberpunk-2077-ripperdoc-one-change",
      "rarity": "standard",
      "moodIds": [
        "progress"
      ],
      "type": "objective",
      "tags": [
        "abilities"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 20,
      "universal": false,
      "curated": {
        "gameId": "cyberpunk-2077",
        "installmentIds": []
      },
      "gameGenreIds": [
        "rpg",
        "adventure"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "New Chrome, Real Test",
      "objective": "Install one cyberware upgrade at a ripperdoc and **use its effect during the next real encounter**.",
      "gameObjective": "Install one cyberware upgrade at a ripperdoc and **use its effect during the next real encounter**."
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
    "catalogRevision": "2026-10-04-before"
  },
  "red-dead-redemption-liars-table": {
    "definition": {
      "id": "red-dead-redemption-liars-table",
      "rarity": "standard",
      "moodIds": [
        "curious",
        "nostalgic"
      ],
      "type": "objective",
      "tags": [
        "one-round"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 15,
      "universal": false,
      "curated": {
        "gameId": "red-dead-redemption",
        "installmentIds": [
          "rdr-1"
        ]
      },
      "gameGenreIds": [
        "adventure",
        "shooter"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Liar’s Dice",
      "objective": "Sit down for **Liar’s Dice in Red Dead Redemption story mode**. Use your own dice to judge the bids and **finish one full game without reloading**.",
      "gameObjective": "Sit down for **Liar’s Dice in Red Dead Redemption story mode**. Use your own dice to judge the bids and **finish one full game without reloading**."
    },
    "translations": {
      "en": {
        "name": "Liar’s Dice",
        "objective": "Sit down for **Liar’s Dice in Red Dead Redemption story mode**. Use your own dice to judge the bids and **finish one full game without reloading**.",
        "gameObjective": "Sit down for **Liar’s Dice in Red Dead Redemption story mode**. Use your own dice to judge the bids and **finish one full game without reloading**."
      },
      "de": {
        "name": "Würfelpoker",
        "objective": "Setz dich in **Red Dead Redemption im Storymodus** an einen Würfelpokertisch. Nutze deine Würfel als Hinweis und **spiele eine komplette Partie ohne neu zu laden**.",
        "gameObjective": "Setz dich in **Red Dead Redemption im Storymodus** an einen Würfelpokertisch. Nutze deine Würfel als Hinweis und **spiele eine komplette Partie ohne neu zu laden**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "red-dead-redemption-field-naturalist": {
    "definition": {
      "id": "red-dead-redemption-field-naturalist",
      "rarity": "standard",
      "moodIds": [
        "curious",
        "explore"
      ],
      "type": "objective",
      "tags": [
        "exploration",
        "photography"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 20,
      "universal": false,
      "curated": {
        "gameId": "red-dead-redemption",
        "installmentIds": [
          "rdr-2"
        ]
      },
      "gameGenreIds": [
        "adventure",
        "shooter"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Field Naturalist",
      "objective": "Find an **animal you have not studied yet in Red Dead Redemption 2 story mode**. **Study it with binoculars and take a photo**. Leave it alive.",
      "gameObjective": "Find an **animal you have not studied yet in Red Dead Redemption 2 story mode**. **Study it with binoculars and take a photo**. Leave it alive."
    },
    "translations": {
      "en": {
        "name": "Field Naturalist",
        "objective": "Find an **animal you have not studied yet in Red Dead Redemption 2 story mode**. **Study it with binoculars and take a photo**. Leave it alive.",
        "gameObjective": "Find an **animal you have not studied yet in Red Dead Redemption 2 story mode**. **Study it with binoculars and take a photo**. Leave it alive."
      },
      "de": {
        "name": "Naturforscher",
        "objective": "Finde in **Red Dead Redemption 2 im Storymodus** ein Tier, das du noch nicht untersucht hast. **Untersuche es mit dem Fernglas und mach ein Foto**. Lass es am Leben.",
        "gameObjective": "Finde in **Red Dead Redemption 2 im Storymodus** ein Tier, das du noch nicht untersucht hast. **Untersuche es mit dem Fernglas und mach ein Foto**. Lass es am Leben."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "red-dead-redemption-rdr1-silent-film": {
    "definition": {
      "id": "red-dead-redemption-rdr1-silent-film",
      "rarity": "standard",
      "moodIds": [
        "low-energy",
        "nostalgic"
      ],
      "type": "inspiration",
      "tags": [
        "story"
      ],
      "minimumDurationMinutes": 2,
      "suggestedDurationMinutes": 10,
      "universal": false,
      "curated": {
        "gameId": "red-dead-redemption",
        "installmentIds": [
          "rdr-1"
        ]
      },
      "gameGenreIds": [
        "adventure",
        "shooter"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Picture House",
      "objective": "If a cinema is open in **Red Dead Redemption story mode**, buy a ticket and settle in for a silent film. Give John a break from the saddle.",
      "gameObjective": "If a cinema is open in **Red Dead Redemption story mode**, buy a ticket and settle in for a silent film. Give John a break from the saddle."
    },
    "translations": {
      "en": {
        "name": "Picture House",
        "objective": "If a cinema is open in **Red Dead Redemption story mode**, buy a ticket and settle in for a silent film. Give John a break from the saddle.",
        "gameObjective": "If a cinema is open in **Red Dead Redemption story mode**, buy a ticket and settle in for a silent film. Give John a break from the saddle."
      },
      "de": {
        "name": "Lichtspielhaus",
        "objective": "Kauf im **Storymodus von Red Dead Redemption** eine Karte für ein geöffnetes Kino und schau dir einen Stummfilm an. Gönn John eine Pause vom Sattel.",
        "gameObjective": "Kauf im **Storymodus von Red Dead Redemption** eine Karte für ein geöffnetes Kino und schau dir einen Stummfilm an. Gönn John eine Pause vom Sattel."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "red-dead-redemption-rdr1-train-passenger": {
    "definition": {
      "id": "red-dead-redemption-rdr1-train-passenger",
      "rarity": "standard",
      "moodIds": [
        "nostalgic",
        "relax"
      ],
      "type": "inspiration",
      "tags": [
        "free-roam"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 15,
      "universal": false,
      "curated": {
        "gameId": "red-dead-redemption",
        "installmentIds": [
          "rdr-1"
        ]
      },
      "gameGenreIds": [
        "adventure",
        "shooter"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Seat on the Train",
      "objective": "Board a passenger train in **Red Dead Redemption story mode** and stay aboard through the countryside. Follow the rail journey without turning it into a robbery.",
      "gameObjective": "Board a passenger train in **Red Dead Redemption story mode** and stay aboard through the countryside. Follow the rail journey without turning it into a robbery."
    },
    "translations": {
      "en": {
        "name": "Seat on the Train",
        "objective": "Board a passenger train in **Red Dead Redemption story mode** and stay aboard through the countryside. Follow the rail journey without turning it into a robbery.",
        "gameObjective": "Board a passenger train in **Red Dead Redemption story mode** and stay aboard through the countryside. Follow the rail journey without turning it into a robbery."
      },
      "de": {
        "name": "Im Zug mitfahren",
        "objective": "Steig im **Storymodus von Red Dead Redemption** in einen Personenzug und fahr durchs Umland mit. Genieß die Strecke, ohne daraus einen Überfall zu machen.",
        "gameObjective": "Steig im **Storymodus von Red Dead Redemption** in einen Personenzug und fahr durchs Umland mit. Genieß die Strecke, ohne daraus einen Überfall zu machen."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "red-dead-redemption-rdr1-cemetery-fire": {
    "definition": {
      "id": "red-dead-redemption-rdr1-cemetery-fire",
      "rarity": "standard",
      "moodIds": [
        "focused",
        "restless"
      ],
      "type": "objective",
      "tags": [
        "story"
      ],
      "minimumDurationMinutes": 5,
      "suggestedDurationMinutes": 25,
      "universal": false,
      "curated": {
        "gameId": "red-dead-redemption",
        "installmentIds": [
          "rdr-1"
        ]
      },
      "gameGenreIds": [
        "adventure",
        "shooter"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Burn the Coffins",
      "objective": "With the Undead Nightmare expansion in **Red Dead Redemption** and cemetery clearing unlocked, choose an uncleansed accessible cemetery. **Burn its marked coffins and defeat the undead until the cemetery is cleansed**.",
      "gameObjective": "With the Undead Nightmare expansion in **Red Dead Redemption** and cemetery clearing unlocked, choose an uncleansed accessible cemetery. **Burn its marked coffins and defeat the undead until the cemetery is cleansed**."
    },
    "translations": {
      "en": {
        "name": "Burn the Coffins",
        "objective": "With the Undead Nightmare expansion in **Red Dead Redemption** and cemetery clearing unlocked, choose an uncleansed accessible cemetery. **Burn its marked coffins and defeat the undead until the cemetery is cleansed**.",
        "gameObjective": "With the Undead Nightmare expansion in **Red Dead Redemption** and cemetery clearing unlocked, choose an uncleansed accessible cemetery. **Burn its marked coffins and defeat the undead until the cemetery is cleansed**."
      },
      "de": {
        "name": "Die Särge verbrennen",
        "objective": "Wähle in **Red Dead Redemption mit der Erweiterung Undead Nightmare** bei freigeschalteter Friedhofsreinigung einen erreichbaren unreinen Friedhof. **Verbrenne die markierten Särge und besiege die Untoten, bis der Friedhof gereinigt ist**.",
        "gameObjective": "Wähle in **Red Dead Redemption mit der Erweiterung Undead Nightmare** bei freigeschalteter Friedhofsreinigung einen erreichbaren unreinen Friedhof. **Verbrenne die markierten Särge und besiege die Untoten, bis der Friedhof gereinigt ist**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "red-dead-redemption-rdr1-pardon-letter": {
    "definition": {
      "id": "red-dead-redemption-rdr1-pardon-letter",
      "rarity": "standard",
      "moodIds": [
        "progress"
      ],
      "type": "objective",
      "tags": [
        "current-save"
      ],
      "minimumDurationMinutes": 2,
      "suggestedDurationMinutes": 10,
      "universal": false,
      "curated": {
        "gameId": "red-dead-redemption",
        "installmentIds": [
          "rdr-1"
        ]
      },
      "gameGenreIds": [
        "adventure",
        "shooter"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Clear the Record",
      "objective": "If John has a bounty and a pardon letter in **Red Dead Redemption story mode**, go to a telegraph office. **Use the letter to clear that bounty** instead of paying cash.",
      "gameObjective": "If John has a bounty and a pardon letter in **Red Dead Redemption story mode**, go to a telegraph office. **Use the letter to clear that bounty** instead of paying cash."
    },
    "translations": {
      "en": {
        "name": "Clear the Record",
        "objective": "If John has a bounty and a pardon letter in **Red Dead Redemption story mode**, go to a telegraph office. **Use the letter to clear that bounty** instead of paying cash.",
        "gameObjective": "If John has a bounty and a pardon letter in **Red Dead Redemption story mode**, go to a telegraph office. **Use the letter to clear that bounty** instead of paying cash."
      },
      "de": {
        "name": "Die Akte bereinigen",
        "objective": "Geh im **Storymodus von Red Dead Redemption** mit Kopfgeld und Begnadigungsbrief zum Telegrafenamt. **Lass das Kopfgeld mit dem Brief streichen**, statt bar zu zahlen.",
        "gameObjective": "Geh im **Storymodus von Red Dead Redemption** mit Kopfgeld und Begnadigungsbrief zum Telegrafenamt. **Lass das Kopfgeld mit dem Brief streichen**, statt bar zu zahlen."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "red-dead-redemption-rdr1-undead-safe-town": {
    "definition": {
      "id": "red-dead-redemption-rdr1-undead-safe-town",
      "rarity": "standard",
      "moodIds": [
        "focused",
        "restless"
      ],
      "type": "objective",
      "tags": [
        "story"
      ],
      "minimumDurationMinutes": 5,
      "suggestedDurationMinutes": 25,
      "universal": false,
      "curated": {
        "gameId": "red-dead-redemption",
        "installmentIds": [
          "rdr-1"
        ]
      },
      "gameGenreIds": [
        "adventure",
        "shooter"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "One Town Restored",
      "objective": "With the Undead Nightmare expansion in **Red Dead Redemption story mode**, enter an accessible town currently overrun by undead. **Clear its defense event until the town is safe**.",
      "gameObjective": "With the Undead Nightmare expansion in **Red Dead Redemption story mode**, enter an accessible town currently overrun by undead. **Clear its defense event until the town is safe**."
    },
    "translations": {
      "en": {
        "name": "One Town Restored",
        "objective": "With the Undead Nightmare expansion in **Red Dead Redemption story mode**, enter an accessible town currently overrun by undead. **Clear its defense event until the town is safe**.",
        "gameObjective": "With the Undead Nightmare expansion in **Red Dead Redemption story mode**, enter an accessible town currently overrun by undead. **Clear its defense event until the town is safe**."
      },
      "de": {
        "name": "Eine Stadt befreien",
        "objective": "Betritt in **Red Dead Redemption mit der Erweiterung Undead Nightmare** eine erreichbare, von Untoten überrannte Stadt. **Beende die Verteidigung, bis die Stadt wieder sicher ist**.",
        "gameObjective": "Betritt in **Red Dead Redemption mit der Erweiterung Undead Nightmare** eine erreichbare, von Untoten überrannte Stadt. **Beende die Verteidigung, bis die Stadt wieder sicher ist**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "red-dead-redemption-rdr2-hotel-bath": {
    "definition": {
      "id": "red-dead-redemption-rdr2-hotel-bath",
      "rarity": "standard",
      "moodIds": [
        "low-energy",
        "overwhelmed"
      ],
      "type": "objective",
      "tags": [
        "current-save"
      ],
      "minimumDurationMinutes": 2,
      "suggestedDurationMinutes": 10,
      "universal": false,
      "curated": {
        "gameId": "red-dead-redemption",
        "installmentIds": [
          "rdr-2"
        ]
      },
      "gameGenreIds": [
        "adventure",
        "shooter"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Wash Off the Trail",
      "objective": "After a muddy ride in **Red Dead Redemption 2 story mode**, visit a hotel that offers baths. **Finish a paid bath** before returning to the road.",
      "gameObjective": "After a muddy ride in **Red Dead Redemption 2 story mode**, visit a hotel that offers baths. **Finish a paid bath** before returning to the road."
    },
    "translations": {
      "en": {
        "name": "Wash Off the Trail",
        "objective": "After a muddy ride in **Red Dead Redemption 2 story mode**, visit a hotel that offers baths. **Finish a paid bath** before returning to the road.",
        "gameObjective": "After a muddy ride in **Red Dead Redemption 2 story mode**, visit a hotel that offers baths. **Finish a paid bath** before returning to the road."
      },
      "de": {
        "name": "Den Staub abwaschen",
        "objective": "Besuche im **Storymodus von Red Dead Redemption 2** nach einem schlammigen Ausritt ein Hotel mit Bad. **Nimm ein bezahltes Bad bis zum Ende**, bevor du weiterreitest.",
        "gameObjective": "Besuche im **Storymodus von Red Dead Redemption 2** nach einem schlammigen Ausritt ein Hotel mit Bad. **Nimm ein bezahltes Bad bis zum Ende**, bevor du weiterreitest."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "red-dead-redemption-rdr2-trinket-already-owned": {
    "definition": {
      "id": "red-dead-redemption-rdr2-trinket-already-owned",
      "rarity": "standard",
      "moodIds": [
        "progress",
        "focused"
      ],
      "type": "objective",
      "tags": [
        "crafting"
      ],
      "minimumDurationMinutes": 2,
      "suggestedDurationMinutes": 10,
      "universal": false,
      "curated": {
        "gameId": "red-dead-redemption",
        "installmentIds": [
          "rdr-2"
        ]
      },
      "gameGenreIds": [
        "adventure",
        "shooter"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Use That Trophy",
      "objective": "With a legendary-animal crafting part already owned in **Red Dead Redemption 2 story mode**, visit a fence. **Craft one available trinket** and read the bonus it adds.",
      "gameObjective": "With a legendary-animal crafting part already owned in **Red Dead Redemption 2 story mode**, visit a fence. **Craft one available trinket** and read the bonus it adds."
    },
    "translations": {
      "en": {
        "name": "Use That Trophy",
        "objective": "With a legendary-animal crafting part already owned in **Red Dead Redemption 2 story mode**, visit a fence. **Craft one available trinket** and read the bonus it adds.",
        "gameObjective": "With a legendary-animal crafting part already owned in **Red Dead Redemption 2 story mode**, visit a fence. **Craft one available trinket** and read the bonus it adds."
      },
      "de": {
        "name": "Die Trophäe nutzen",
        "objective": "Besuche im **Storymodus von Red Dead Redemption 2** mit einem bereits vorhandenen Teil eines legendären Tiers einen Hehler. **Lass daraus ein verfügbares Amulett herstellen** und lies seinen Bonus.",
        "gameObjective": "Besuche im **Storymodus von Red Dead Redemption 2** mit einem bereits vorhandenen Teil eines legendären Tiers einen Hehler. **Lass daraus ein verfügbares Amulett herstellen** und lies seinen Bonus."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "red-dead-redemption-rdr2-satchel-from-pelts": {
    "definition": {
      "id": "red-dead-redemption-rdr2-satchel-from-pelts",
      "rarity": "standard",
      "moodIds": [
        "progress",
        "focused"
      ],
      "type": "creation",
      "tags": [
        "crafting"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 15,
      "universal": false,
      "curated": {
        "gameId": "red-dead-redemption",
        "installmentIds": [
          "rdr-2"
        ]
      },
      "gameGenreIds": [
        "adventure",
        "shooter"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "More Room for Arthur",
      "objective": "With Pearson’s leatherworking tools unlocked in **Red Dead Redemption 2 story mode**, choose a satchel whose pelts and other conditions are already met. **Have Pearson craft it and equip it**.",
      "gameObjective": "With Pearson’s leatherworking tools unlocked in **Red Dead Redemption 2 story mode**, choose a satchel whose pelts and other conditions are already met. **Have Pearson craft it and equip it**."
    },
    "translations": {
      "en": {
        "name": "More Room for Arthur",
        "objective": "With Pearson’s leatherworking tools unlocked in **Red Dead Redemption 2 story mode**, choose a satchel whose pelts and other conditions are already met. **Have Pearson craft it and equip it**.",
        "gameObjective": "With Pearson’s leatherworking tools unlocked in **Red Dead Redemption 2 story mode**, choose a satchel whose pelts and other conditions are already met. **Have Pearson craft it and equip it**."
      },
      "de": {
        "name": "Mehr Platz für Arthur",
        "objective": "Wähle im **Storymodus von Red Dead Redemption 2** mit freigeschaltetem Lederwerkzeug bei Pearson eine Tasche, für die alle Felle und Voraussetzungen vorhanden sind. **Lass sie herstellen und rüste sie aus**.",
        "gameObjective": "Wähle im **Storymodus von Red Dead Redemption 2** mit freigeschaltetem Lederwerkzeug bei Pearson eine Tasche, für die alle Felle und Voraussetzungen vorhanden sind. **Lass sie herstellen und rüste sie aus**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "red-dead-redemption-rdr2-mint-meal": {
    "definition": {
      "id": "red-dead-redemption-rdr2-mint-meal",
      "rarity": "standard",
      "moodIds": [
        "progress",
        "curious"
      ],
      "type": "objective",
      "tags": [
        "cooking"
      ],
      "minimumDurationMinutes": 2,
      "suggestedDurationMinutes": 10,
      "universal": false,
      "curated": {
        "gameId": "red-dead-redemption",
        "installmentIds": [
          "rdr-2"
        ]
      },
      "gameGenreIds": [
        "adventure",
        "shooter"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Season the Supper",
      "objective": "With mint, big game meat, and the grill available at your campfire in **Red Dead Redemption 2 story mode**, **cook and eat one mint-seasoned portion**, then check the Health core.",
      "gameObjective": "With mint, big game meat, and the grill available at your campfire in **Red Dead Redemption 2 story mode**, **cook and eat one mint-seasoned portion**, then check the Health core."
    },
    "translations": {
      "en": {
        "name": "Season the Supper",
        "objective": "With mint, big game meat, and the grill available at your campfire in **Red Dead Redemption 2 story mode**, **cook and eat one mint-seasoned portion**, then check the Health core.",
        "gameObjective": "With mint, big game meat, and the grill available at your campfire in **Red Dead Redemption 2 story mode**, **cook and eat one mint-seasoned portion**, then check the Health core."
      },
      "de": {
        "name": "Gewürz fürs Abendessen",
        "objective": "Koch im **Storymodus von Red Dead Redemption 2** mit Minze, Großwildfleisch und Grill am Lagerfeuer **eine Portion mit Minze und iss sie**. Schau danach auf den Gesundheitskern.",
        "gameObjective": "Koch im **Storymodus von Red Dead Redemption 2** mit Minze, Großwildfleisch und Grill am Lagerfeuer **eine Portion mit Minze und iss sie**. Schau danach auf den Gesundheitskern."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "red-dead-redemption-rdr2-beechers-milk": {
    "definition": {
      "id": "red-dead-redemption-rdr2-beechers-milk",
      "rarity": "standard",
      "moodIds": [
        "relax",
        "progress"
      ],
      "type": "objective",
      "tags": [
        "animals"
      ],
      "minimumDurationMinutes": 2,
      "suggestedDurationMinutes": 10,
      "universal": false,
      "curated": {
        "gameId": "red-dead-redemption",
        "installmentIds": [
          "rdr-2"
        ]
      },
      "gameGenreIds": [
        "adventure",
        "shooter"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Morning Milk",
      "objective": "After ranch chores unlock at Beecher’s Hope in the epilogue of **Red Dead Redemption 2 story mode**, **finish the cow-milking chore**. Leave the rest of the ranch for another day.",
      "gameObjective": "After ranch chores unlock at Beecher’s Hope in the epilogue of **Red Dead Redemption 2 story mode**, **finish the cow-milking chore**. Leave the rest of the ranch for another day."
    },
    "translations": {
      "en": {
        "name": "Morning Milk",
        "objective": "After ranch chores unlock at Beecher’s Hope in the epilogue of **Red Dead Redemption 2 story mode**, **finish the cow-milking chore**. Leave the rest of the ranch for another day.",
        "gameObjective": "After ranch chores unlock at Beecher’s Hope in the epilogue of **Red Dead Redemption 2 story mode**, **finish the cow-milking chore**. Leave the rest of the ranch for another day."
      },
      "de": {
        "name": "Milch am Morgen",
        "objective": "Erledige im **Epilog von Red Dead Redemption 2 im Storymodus** bei freigeschalteten Rancharbeiten in Beecher’s Hope **das Melken der Kuh**. Der Rest der Ranch kann warten.",
        "gameObjective": "Erledige im **Epilog von Red Dead Redemption 2 im Storymodus** bei freigeschalteten Rancharbeiten in Beecher’s Hope **das Melken der Kuh**. Der Rest der Ranch kann warten."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "red-dead-redemption-rdr2-camp-chore": {
    "definition": {
      "id": "red-dead-redemption-rdr2-camp-chore",
      "rarity": "standard",
      "moodIds": [
        "relax"
      ],
      "type": "objective",
      "tags": [
        "story"
      ],
      "minimumDurationMinutes": 2,
      "suggestedDurationMinutes": 15,
      "universal": false,
      "curated": {
        "gameId": "red-dead-redemption",
        "installmentIds": [
          "rdr-2"
        ]
      },
      "gameGenreIds": [
        "adventure",
        "narrative"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "A Morning for Camp",
      "objective": "At the gang camp, **finish one available camp chore and then speak to the person who benefits from it**.",
      "gameObjective": "At the gang camp, **finish one available camp chore and then speak to the person who benefits from it**."
    },
    "translations": {
      "en": {
        "name": "A Morning for Camp",
        "objective": "At the gang camp, **finish one available camp chore and then speak to the person who benefits from it**.",
        "gameObjective": "At the gang camp, **finish one available camp chore and then speak to the person who benefits from it**."
      },
      "de": {
        "name": "Ein Morgen im Lager",
        "objective": "Erledige im Bandenlager **eine verfügbare Arbeit und sprich danach mit jemandem, dem sie hilft**.",
        "gameObjective": "Erledige im Bandenlager **eine verfügbare Arbeit und sprich danach mit jemandem, dem sie hilft**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "red-dead-redemption-rdr2-horse-bond": {
    "definition": {
      "id": "red-dead-redemption-rdr2-horse-bond",
      "rarity": "standard",
      "moodIds": [
        "relax"
      ],
      "type": "objective",
      "tags": [
        "animals"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 20,
      "universal": false,
      "curated": {
        "gameId": "red-dead-redemption",
        "installmentIds": [
          "rdr-2"
        ]
      },
      "gameGenreIds": [
        "adventure",
        "narrative"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Earn Your Horse's Trust",
      "objective": "Take a recently acquired horse on a quiet ride and **raise its bonding level once through care and travel**.",
      "gameObjective": "Take a recently acquired horse on a quiet ride and **raise its bonding level once through care and travel**."
    },
    "translations": {
      "en": {
        "name": "Earn Your Horse's Trust",
        "objective": "Take a recently acquired horse on a quiet ride and **raise its bonding level once through care and travel**.",
        "gameObjective": "Take a recently acquired horse on a quiet ride and **raise its bonding level once through care and travel**."
      },
      "de": {
        "name": "Vertrauen fürs Pferd",
        "objective": "Mach mit einem neuen Pferd einen ruhigen Ausritt und **erhöhe durch Pflege und Reiten seine Bindung um eine Stufe**.",
        "gameObjective": "Mach mit einem neuen Pferd einen ruhigen Ausritt und **erhöhe durch Pflege und Reiten seine Bindung um eine Stufe**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "kingdom-come-deliverance-kcd2-ordinary-dice": {
    "definition": {
      "id": "kingdom-come-deliverance-kcd2-ordinary-dice",
      "rarity": "standard",
      "moodIds": [
        "relax",
        "nostalgic"
      ],
      "type": "inspiration",
      "tags": [
        "no-timer"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 20,
      "universal": false,
      "curated": {
        "gameId": "kingdom-come-deliverance",
        "installmentIds": [
          "kcd-2"
        ]
      },
      "gameGenreIds": [
        "rpg"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Leave the Lucky Dice",
      "objective": "Sit down for tavern dice in **Kingdom Come: Deliverance II**. Use ordinary dice and a small stake you can spare. Finish one game without chasing a winnings target.",
      "gameObjective": "Sit down for tavern dice in **Kingdom Come: Deliverance II**. Use ordinary dice and a small stake you can spare. Finish one game without chasing a winnings target."
    },
    "translations": {
      "en": {
        "name": "Leave the Lucky Dice",
        "objective": "Sit down for tavern dice in **Kingdom Come: Deliverance II**. Use ordinary dice and a small stake you can spare. Finish one game without chasing a winnings target.",
        "gameObjective": "Sit down for tavern dice in **Kingdom Come: Deliverance II**. Use ordinary dice and a small stake you can spare. Finish one game without chasing a winnings target."
      },
      "de": {
        "name": "Ohne Glückswürfel",
        "objective": "Setze dich in **Kingdom Come: Deliverance II** zum Würfeln ins Wirtshaus. Nimm gewöhnliche Würfel und einen kleinen Einsatz, den du übrig hast. Spiele eine Partie zu Ende, ohne einem Gewinnziel hinterherzujagen.",
        "gameObjective": "Setze dich in **Kingdom Come: Deliverance II** zum Würfeln ins Wirtshaus. Nimm gewöhnliche Würfel und einen kleinen Einsatz, den du übrig hast. Spiele eine Partie zu Ende, ohne einem Gewinnziel hinterherzujagen."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "kingdom-come-deliverance-kcd1-peshek-chest": {
    "definition": {
      "id": "kingdom-come-deliverance-kcd1-peshek-chest",
      "rarity": "standard",
      "moodIds": [
        "curious",
        "focused"
      ],
      "type": "experiment",
      "tags": [
        "stealth"
      ],
      "minimumDurationMinutes": 2,
      "suggestedDurationMinutes": 10,
      "universal": false,
      "curated": {
        "gameId": "kingdom-come-deliverance",
        "installmentIds": [
          "kcd-1"
        ]
      },
      "gameGenreIds": [
        "rpg"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Peshek’s Practice Lock",
      "objective": "After Peshek’s lockpicking lesson in **Kingdom Come: Deliverance**, use his practice chest. **Open it once and close it again**, watching how the sweet spot moves with the lock.",
      "gameObjective": "After Peshek’s lockpicking lesson in **Kingdom Come: Deliverance**, use his practice chest. **Open it once and close it again**, watching how the sweet spot moves with the lock."
    },
    "translations": {
      "en": {
        "name": "Peshek’s Practice Lock",
        "objective": "After Peshek’s lockpicking lesson in **Kingdom Come: Deliverance**, use his practice chest. **Open it once and close it again**, watching how the sweet spot moves with the lock.",
        "gameObjective": "After Peshek’s lockpicking lesson in **Kingdom Come: Deliverance**, use his practice chest. **Open it once and close it again**, watching how the sweet spot moves with the lock."
      },
      "de": {
        "name": "Pescheks Übungsschloss",
        "objective": "Benutze in **Kingdom Come: Deliverance** nach Pescheks Dietrich-Unterricht seine Übungstruhe. **Öffne sie einmal und mach sie wieder zu**. Achte darauf, wie sich der richtige Punkt beim Drehen bewegt.",
        "gameObjective": "Benutze in **Kingdom Come: Deliverance** nach Pescheks Dietrich-Unterricht seine Übungstruhe. **Öffne sie einmal und mach sie wieder zu**. Achte darauf, wie sich der richtige Punkt beim Drehen bewegt."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "kingdom-come-deliverance-kcd1-pickpocket-lesson": {
    "definition": {
      "id": "kingdom-come-deliverance-kcd1-pickpocket-lesson",
      "rarity": "standard",
      "moodIds": [
        "curious",
        "focused"
      ],
      "type": "objective",
      "tags": [
        "stealth"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 15,
      "universal": false,
      "curated": {
        "gameId": "kingdom-come-deliverance",
        "installmentIds": [
          "kcd-1"
        ]
      },
      "gameGenreIds": [
        "rpg"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "The Miller’s Pocket",
      "objective": "When Peshek offers pickpocket training in **Kingdom Come: Deliverance**, take his lesson. **Complete the tutorial theft and return the practice item** as he instructs.",
      "gameObjective": "When Peshek offers pickpocket training in **Kingdom Come: Deliverance**, take his lesson. **Complete the tutorial theft and return the practice item** as he instructs."
    },
    "translations": {
      "en": {
        "name": "The Miller’s Pocket",
        "objective": "When Peshek offers pickpocket training in **Kingdom Come: Deliverance**, take his lesson. **Complete the tutorial theft and return the practice item** as he instructs.",
        "gameObjective": "When Peshek offers pickpocket training in **Kingdom Come: Deliverance**, take his lesson. **Complete the tutorial theft and return the practice item** as he instructs."
      },
      "de": {
        "name": "Die Tasche des Müllers",
        "objective": "Nimm in **Kingdom Come: Deliverance** Pescheks Unterricht im Taschendiebstahl an, sobald er ihn anbietet. **Besteh den Übungsdiebstahl und gib den Gegenstand zurück**, wie er es dir erklärt.",
        "gameObjective": "Nimm in **Kingdom Come: Deliverance** Pescheks Unterricht im Taschendiebstahl an, sobald er ihn anbietet. **Besteh den Übungsdiebstahl und gib den Gegenstand zurück**, wie er es dir erklärt."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "kingdom-come-deliverance-kcd1-monastery-routine": {
    "definition": {
      "id": "kingdom-come-deliverance-kcd1-monastery-routine",
      "rarity": "standard",
      "moodIds": [
        "focused",
        "nostalgic"
      ],
      "type": "inspiration",
      "tags": [
        "story"
      ],
      "minimumDurationMinutes": 5,
      "suggestedDurationMinutes": 25,
      "universal": false,
      "curated": {
        "gameId": "kingdom-come-deliverance",
        "installmentIds": [
          "kcd-1"
        ]
      },
      "gameGenreIds": [
        "rpg"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "A Novice’s Day",
      "objective": "While already undercover in the monastery in **Kingdom Come: Deliverance**, follow the monastery schedule instead of advancing your investigation. Spend this visit at the meals, prayers, and work that fit the current hour.",
      "gameObjective": "While already undercover in the monastery in **Kingdom Come: Deliverance**, follow the monastery schedule instead of advancing your investigation. Spend this visit at the meals, prayers, and work that fit the current hour."
    },
    "translations": {
      "en": {
        "name": "A Novice’s Day",
        "objective": "While already undercover in the monastery in **Kingdom Come: Deliverance**, follow the monastery schedule instead of advancing your investigation. Spend this visit at the meals, prayers, and work that fit the current hour.",
        "gameObjective": "While already undercover in the monastery in **Kingdom Come: Deliverance**, follow the monastery schedule instead of advancing your investigation. Spend this visit at the meals, prayers, and work that fit the current hour."
      },
      "de": {
        "name": "Ein Tag als Novize",
        "objective": "Folge in **Kingdom Come: Deliverance** während einer laufenden Kloster-Infiltration dem Klosterplan, statt die Ermittlung weiterzutreiben. Nimm an den Mahlzeiten, Gebeten und Arbeiten teil, die gerade anstehen.",
        "gameObjective": "Folge in **Kingdom Come: Deliverance** während einer laufenden Kloster-Infiltration dem Klosterplan, statt die Ermittlung weiterzutreiben. Nimm an den Mahlzeiten, Gebeten und Arbeiten teil, die gerade anstehen."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "kingdom-come-deliverance-kcd2-horse-shortcut": {
    "definition": {
      "id": "kingdom-come-deliverance-kcd2-horse-shortcut",
      "rarity": "standard",
      "moodIds": [
        "explore"
      ],
      "type": "objective",
      "tags": [
        "on-foot"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 20,
      "universal": false,
      "curated": {
        "gameId": "kingdom-come-deliverance",
        "installmentIds": [
          "kcd-2"
        ]
      },
      "gameGenreIds": [
        "rpg",
        "adventure"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "A Road Less Used",
      "objective": "Ride to a nearby quest location **using minor tracks rather than the main road**, and find one landmark along the way.",
      "gameObjective": "Ride to a nearby quest location **using minor tracks rather than the main road**, and find one landmark along the way."
    },
    "translations": {
      "en": {
        "name": "A Road Less Used",
        "objective": "Ride to a nearby quest location **using minor tracks rather than the main road**, and find one landmark along the way.",
        "gameObjective": "Ride to a nearby quest location **using minor tracks rather than the main road**, and find one landmark along the way."
      },
      "de": {
        "name": "Abseits der Hauptstraße",
        "objective": "Reite zu einem nahen Questort **über kleine Wege statt der Hauptstraße** und finde unterwegs eine Landmarke.",
        "gameObjective": "Reite zu einem nahen Questort **über kleine Wege statt der Hauptstraße** und finde unterwegs eine Landmarke."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "rocket-league-small-pad-match": {
    "definition": {
      "id": "rocket-league-small-pad-match",
      "rarity": "standard",
      "moodIds": [
        "challenge",
        "focused"
      ],
      "type": "challenge",
      "tags": [
        "full-match",
        "three-attempts"
      ],
      "minimumDurationMinutes": 5,
      "suggestedDurationMinutes": 25,
      "universal": false,
      "curated": {
        "gameId": "rocket-league",
        "installmentIds": []
      },
      "gameGenreIds": [
        "sports"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Small Pads Only",
      "objective": "In **Rocket League**, play a Soccar exhibition against bots with normal boost settings. **Finish the match using only small boost pads and register a goal or save**. Starting boost is allowed. Stop after success or three matches.",
      "gameObjective": "In **Rocket League**, play a Soccar exhibition against bots with normal boost settings. **Finish the match using only small boost pads and register a goal or save**. Starting boost is allowed. Stop after success or three matches."
    },
    "translations": {
      "en": {
        "name": "Small Pads Only",
        "objective": "In **Rocket League**, play a Soccar exhibition against bots with normal boost settings. **Finish the match using only small boost pads and register a goal or save**. Starting boost is allowed. Stop after success or three matches.",
        "gameObjective": "In **Rocket League**, play a Soccar exhibition against bots with normal boost settings. **Finish the match using only small boost pads and register a goal or save**. Starting boost is allowed. Stop after success or three matches."
      },
      "de": {
        "name": "Nur kleine Pads",
        "objective": "Spiel in **Rocket League** ein Soccar-Schaukampf-Match gegen Bots mit normalen Boost-Einstellungen. **Nutz nur kleine Boost-Pads und erziele ein Tor oder halte einen Schuss**. Spiel das Match zu Ende; Startboost ist erlaubt. Hör nach dem Erfolg oder drei Matches auf.",
        "gameObjective": "Spiel in **Rocket League** ein Soccar-Schaukampf-Match gegen Bots mit normalen Boost-Einstellungen. **Nutz nur kleine Boost-Pads und erziele ein Tor oder halte einen Schuss**. Spiel das Match zu Ende; Startboost ist erlaubt. Hör nach dem Erfolg oder drei Matches auf."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "rocket-league-back-post-route": {
    "definition": {
      "id": "rocket-league-back-post-route",
      "rarity": "standard",
      "moodIds": [
        "connect",
        "focused"
      ],
      "type": "objective",
      "tags": [
        "co-op",
        "support"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 10,
      "universal": false,
      "curated": {
        "gameId": "rocket-league",
        "installmentIds": []
      },
      "gameGenreIds": [
        "sports"
      ],
      "connectionModeIds": [
        "online"
      ],
      "playStyleIds": [
        "co-op",
        "team"
      ],
      "gameBindable": true,
      "name": "Back Post Route",
      "objective": "In **Rocket League Casual 2v2**, rotate back toward the goalpost farther from the ball after your attacks, collecting small pads on the way. **Use that return route three times and finish the match** without abandoning your teammate.",
      "gameObjective": "In **Rocket League Casual 2v2**, rotate back toward the goalpost farther from the ball after your attacks, collecting small pads on the way. **Use that return route three times and finish the match** without abandoning your teammate."
    },
    "translations": {
      "en": {
        "name": "Back Post Route",
        "objective": "In **Rocket League Casual 2v2**, rotate back toward the goalpost farther from the ball after your attacks, collecting small pads on the way. **Use that return route three times and finish the match** without abandoning your teammate.",
        "gameObjective": "In **Rocket League Casual 2v2**, rotate back toward the goalpost farther from the ball after your attacks, collecting small pads on the way. **Use that return route three times and finish the match** without abandoning your teammate."
      },
      "de": {
        "name": "Zum hinteren Pfosten",
        "objective": "Kehre in **Rocket League Casual 2v2** nach deinen Angriffen zum ballfernen Torpfosten zurück und sammle kleine Pads auf dem Weg. **Nutze den Rückweg dreimal und beende das Match**, ohne dein Teammitglied allein zu lassen.",
        "gameObjective": "Kehre in **Rocket League Casual 2v2** nach deinen Angriffen zum ballfernen Torpfosten zurück und sammle kleine Pads auf dem Weg. **Nutze den Rückweg dreimal und beende das Match**, ohne dein Teammitglied allein zu lassen."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "rocket-league-training-pack-first-three": {
    "definition": {
      "id": "rocket-league-training-pack-first-three",
      "rarity": "standard",
      "moodIds": [
        "focused",
        "curious"
      ],
      "type": "objective",
      "tags": [],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 15,
      "universal": false,
      "curated": {
        "gameId": "rocket-league",
        "installmentIds": []
      },
      "gameGenreIds": [
        "sports"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Three Training Shots",
      "objective": "Open a **Rocket League shooting training pack** with at least three shots. Take one attempt at each of the first three shots, then **return to the pack menu**.",
      "gameObjective": "Open a **Rocket League shooting training pack** with at least three shots. Take one attempt at each of the first three shots, then **return to the pack menu**."
    },
    "translations": {
      "en": {
        "name": "Three Training Shots",
        "objective": "Open a **Rocket League shooting training pack** with at least three shots. Take one attempt at each of the first three shots, then **return to the pack menu**.",
        "gameObjective": "Open a **Rocket League shooting training pack** with at least three shots. Take one attempt at each of the first three shots, then **return to the pack menu**."
      },
      "de": {
        "name": "Drei Trainingsschüsse",
        "objective": "Öffne in **Rocket League** ein Torschusstraining mit mindestens drei Schüssen. Versuch die ersten drei Schüsse je einmal und **geh zurück zur Pack-Auswahl**.",
        "gameObjective": "Öffne in **Rocket League** ein Torschusstraining mit mindestens drei Schüssen. Versuch die ersten drei Schüsse je einmal und **geh zurück zur Pack-Auswahl**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "skate-quick-drop-link": {
    "definition": {
      "id": "skate-quick-drop-link",
      "rarity": "standard",
      "moodIds": [
        "create",
        "focused"
      ],
      "type": "creation",
      "tags": [
        "skating",
        "building"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 20,
      "universal": false,
      "curated": {
        "gameId": "skate",
        "installmentIds": [
          "skate-2025"
        ]
      },
      "gameGenreIds": [
        "sports"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "One Prop Spot",
      "objective": "With Quick Drop unlocked in **skate. (2025)**, place a grindable prop beside a low ledge without blocking a challenge. **Link a grind on each in one line and roll away**. Remove the prop afterward.",
      "gameObjective": "With Quick Drop unlocked in **skate. (2025)**, place a grindable prop beside a low ledge without blocking a challenge. **Link a grind on each in one line and roll away**. Remove the prop afterward."
    },
    "translations": {
      "en": {
        "name": "One Prop Spot",
        "objective": "With Quick Drop unlocked in **skate. (2025)**, place a grindable prop beside a low ledge without blocking a challenge. **Link a grind on each in one line and roll away**. Remove the prop afterward.",
        "gameObjective": "With Quick Drop unlocked in **skate. (2025)**, place a grindable prop beside a low ledge without blocking a challenge. **Link a grind on each in one line and roll away**. Remove the prop afterward."
      },
      "de": {
        "name": "Ein Teil, ein Spot",
        "objective": "Platziere in **skate. (2025)** mit freigeschaltetem Quick Drop ein grindbares Objekt neben einer niedrigen Kante, ohne eine Challenge zu blockieren. **Grinde erst an deinem Objekt, dann an der Kante und rolle ohne Sturz weiter**. Entferne das Objekt danach.",
        "gameObjective": "Platziere in **skate. (2025)** mit freigeschaltetem Quick Drop ein grindbares Objekt neben einer niedrigen Kante, ohne eine Challenge zu blockieren. **Grinde erst an deinem Objekt, dann an der Kante und rolle ohne Sturz weiter**. Entferne das Objekt danach."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "skate-san-van-switch": {
    "definition": {
      "id": "skate-san-van-switch",
      "rarity": "standard",
      "moodIds": [
        "curious",
        "explore"
      ],
      "type": "experiment",
      "tags": [
        "skating",
        "new-approach"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 15,
      "universal": false,
      "curated": {
        "gameId": "skate",
        "installmentIds": [
          "skate-2025"
        ]
      },
      "gameGenreIds": [
        "sports"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Same Rail, Switch",
      "objective": "In **skate. (2025)**, set a session marker at an unfamiliar low rail. **Land a 50-50 grind in regular stance, then land it in switch** on the same rail. Roll away after each and compare the approach.",
      "gameObjective": "In **skate. (2025)**, set a session marker at an unfamiliar low rail. **Land a 50-50 grind in regular stance, then land it in switch** on the same rail. Roll away after each and compare the approach."
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
    "catalogRevision": "2026-10-04-before"
  },
  "skate-s25-side-mission": {
    "definition": {
      "id": "skate-s25-side-mission",
      "rarity": "standard",
      "moodIds": [
        "progress",
        "focused"
      ],
      "type": "objective",
      "tags": [
        "story"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 20,
      "universal": false,
      "curated": {
        "gameId": "skate",
        "installmentIds": [
          "skate-2025"
        ]
      },
      "gameGenreIds": [
        "sports"
      ],
      "connectionModeIds": [
        "online"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Izzy’s Side Route",
      "objective": "In **skate. (2025)**, track an available Side Mission from the Hub. Follow its city waypoint and **finish its next displayed objective**.",
      "gameObjective": "In **skate. (2025)**, track an available Side Mission from the Hub. Follow its city waypoint and **finish its next displayed objective**."
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
    "catalogRevision": "2026-10-04-before"
  },
  "skate-s25-speedline-try": {
    "definition": {
      "id": "skate-s25-speedline-try",
      "rarity": "standard",
      "moodIds": [
        "restless",
        "challenge"
      ],
      "type": "challenge",
      "tags": [
        "skating",
        "three-attempts"
      ],
      "minimumDurationMinutes": 2,
      "suggestedDurationMinutes": 15,
      "universal": false,
      "curated": {
        "gameId": "skate",
        "installmentIds": [
          "skate-2025"
        ]
      },
      "gameGenreIds": [
        "sports"
      ],
      "connectionModeIds": [
        "online"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Follow the Speedline",
      "objective": "Choose an **unlocked Speedline Challenge in skate. (2025)**. **Reach its finish within the challenge’s time**, or stop after three runs.",
      "gameObjective": "Choose an **unlocked Speedline Challenge in skate. (2025)**. **Reach its finish within the challenge’s time**, or stop after three runs."
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
    "catalogRevision": "2026-10-04-before"
  },
  "skate-s25-claim-partial": {
    "definition": {
      "id": "skate-s25-claim-partial",
      "rarity": "standard",
      "moodIds": [
        "overwhelmed",
        "progress"
      ],
      "type": "objective",
      "tags": [
        "skating"
      ],
      "minimumDurationMinutes": 2,
      "suggestedDurationMinutes": 15,
      "universal": false,
      "curated": {
        "gameId": "skate",
        "installmentIds": [
          "skate-2025"
        ]
      },
      "gameGenreIds": [
        "sports"
      ],
      "connectionModeIds": [
        "online"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Take What You Landed",
      "objective": "Open a **skate. (2025) Challenge with a claimable completed objective**. Claim that progress without replaying for every bonus, then **try a familiar ollie on the approach to its spot** before free skating onward.",
      "gameObjective": "Open a **skate. (2025) Challenge with a claimable completed objective**. Claim that progress without replaying for every bonus, then **try a familiar ollie on the approach to its spot** before free skating onward."
    },
    "translations": {
      "en": {
        "name": "Take What You Landed",
        "objective": "Open a **skate. (2025) Challenge with a claimable completed objective**. Claim that progress without replaying for every bonus, then **try a familiar ollie on the approach to its spot** before free skating onward.",
        "gameObjective": "Open a **skate. (2025) Challenge with a claimable completed objective**. Claim that progress without replaying for every bonus, then **try a familiar ollie on the approach to its spot** before free skating onward."
      },
      "de": {
        "name": "Den Fortschritt mitnehmen",
        "objective": "Öffne in **skate. (2025) eine Challenge mit einem bereits erledigten, abholbaren Ziel**. Hol dir den Fortschritt, ohne für alle Extras neu zu starten, und **probier einen vertrauten Ollie auf der Anfahrt zum Spot**, bevor du frei weiterfährst.",
        "gameObjective": "Öffne in **skate. (2025) eine Challenge mit einem bereits erledigten, abholbaren Ziel**. Hol dir den Fortschritt, ohne für alle Extras neu zu starten, und **probier einen vertrauten Ollie auf der Anfahrt zum Spot**, bevor du frei weiterfährst."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "skate-s25-crew-page": {
    "definition": {
      "id": "skate-s25-crew-page",
      "rarity": "standard",
      "moodIds": [
        "progress"
      ],
      "type": "objective",
      "tags": [
        "skating"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 20,
      "universal": false,
      "curated": {
        "gameId": "skate",
        "installmentIds": [
          "skate-2025"
        ]
      },
      "gameGenreIds": [
        "sports"
      ],
      "connectionModeIds": [
        "online"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Ride for Your Crew",
      "objective": "In **skate. (2025)**, select an available Crew Bounty that uses tricks you already know. **Complete its shown requirement and claim the reward** for that crew.",
      "gameObjective": "In **skate. (2025)**, select an available Crew Bounty that uses tricks you already know. **Complete its shown requirement and claim the reward** for that crew."
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
    "catalogRevision": "2026-10-04-before"
  },
  "skate-s25-neighborhood-rep": {
    "definition": {
      "id": "skate-s25-neighborhood-rep",
      "rarity": "standard",
      "moodIds": [
        "curious",
        "focused"
      ],
      "type": "experiment",
      "tags": [
        "skating"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 20,
      "universal": false,
      "curated": {
        "gameId": "skate",
        "installmentIds": [
          "skate-2025"
        ]
      },
      "gameGenreIds": [
        "sports"
      ],
      "connectionModeIds": [
        "online"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Rep Another Neighborhood",
      "objective": "In **skate. (2025)**, switch the neighborhood you represent to another unlocked one. **Complete a short available non-Crew Bounty** and see where its neighborhood progress goes.",
      "gameObjective": "In **skate. (2025)**, switch the neighborhood you represent to another unlocked one. **Complete a short available non-Crew Bounty** and see where its neighborhood progress goes."
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
    "catalogRevision": "2026-10-04-before"
  },
  "skate-s25-transit-discovery": {
    "definition": {
      "id": "skate-s25-transit-discovery",
      "rarity": "standard",
      "moodIds": [
        "explore"
      ],
      "type": "objective",
      "tags": [
        "exploration"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 15,
      "universal": false,
      "curated": {
        "gameId": "skate",
        "installmentIds": [
          "skate-2025"
        ]
      },
      "gameGenreIds": [
        "sports"
      ],
      "connectionModeIds": [
        "online"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "A New Bus Stop",
      "objective": "In **skate. (2025)**, take the San Van bus to an unlocked stop you have not skated around. **Land one trick on a nearby obstacle you find there**.",
      "gameObjective": "In **skate. (2025)**, take the San Van bus to an unlocked stop you have not skated around. **Land one trick on a nearby obstacle you find there**."
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
    "catalogRevision": "2026-10-04-before"
  },
  "skate-s25-one-plaza-session": {
    "definition": {
      "id": "skate-s25-one-plaza-session",
      "rarity": "standard",
      "moodIds": [
        "relax"
      ],
      "type": "inspiration",
      "tags": [
        "free-roam"
      ],
      "minimumDurationMinutes": 2,
      "suggestedDurationMinutes": 20,
      "universal": false,
      "curated": {
        "gameId": "skate",
        "installmentIds": [
          "skate-2025"
        ]
      },
      "gameGenreIds": [
        "sports"
      ],
      "connectionModeIds": [
        "online"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Stay at This Plaza",
      "objective": "Find a **skate. (2025) plaza with low ledges and room to roll**. Stay with that small area, try the approaches that catch your eye, and leave the next waypoint for another session.",
      "gameObjective": "Find a **skate. (2025) plaza with low ledges and room to roll**. Stay with that small area, try the approaches that catch your eye, and leave the next waypoint for another session."
    },
    "translations": {
      "en": {
        "name": "Stay at This Plaza",
        "objective": "Find a **skate. (2025) plaza with low ledges and room to roll**. Stay with that small area, try the approaches that catch your eye, and leave the next waypoint for another session.",
        "gameObjective": "Find a **skate. (2025) plaza with low ledges and room to roll**. Stay with that small area, try the approaches that catch your eye, and leave the next waypoint for another session."
      },
      "de": {
        "name": "Auf diesem Platz bleiben",
        "objective": "Such in **skate. (2025)** einen Platz mit niedrigen Kanten und genug Raum zum Rollen. Bleib in dieser kleinen Gegend und probier Anfahrten aus, die dir auffallen. Der nächste Wegpunkt kann warten.",
        "gameObjective": "Such in **skate. (2025)** einen Platz mit niedrigen Kanten und genug Raum zum Rollen. Bleib in dieser kleinen Gegend und probier Anfahrten aus, die dir auffallen. Der nächste Wegpunkt kann warten."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "skate-s25-soft-favorite": {
    "definition": {
      "id": "skate-s25-soft-favorite",
      "rarity": "standard",
      "moodIds": [
        "low-energy",
        "overwhelmed"
      ],
      "type": "inspiration",
      "tags": [
        "free-roam"
      ],
      "minimumDurationMinutes": 2,
      "suggestedDurationMinutes": 10,
      "universal": false,
      "curated": {
        "gameId": "skate",
        "installmentIds": [
          "skate-2025"
        ]
      },
      "gameGenreIds": [
        "sports"
      ],
      "connectionModeIds": [
        "online"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Your Usual Spot",
      "objective": "In **skate. (2025)**, return to a familiar low ledge in San Van and use a session marker to stay with its easy approach. Roll with your usual setup and take whatever line comes easily.",
      "gameObjective": "In **skate. (2025)**, return to a familiar low ledge in San Van and use a session marker to stay with its easy approach. Roll with your usual setup and take whatever line comes easily."
    },
    "translations": {
      "en": {
        "name": "Your Usual Spot",
        "objective": "In **skate. (2025)**, return to a familiar low ledge in San Van and use a session marker to stay with its easy approach. Roll with your usual setup and take whatever line comes easily.",
        "gameObjective": "In **skate. (2025)**, return to a familiar low ledge in San Van and use a session marker to stay with its easy approach. Roll with your usual setup and take whatever line comes easily."
      },
      "de": {
        "name": "Dein gewohnter Spot",
        "objective": "Kehr in **skate. (2025)** zu einer vertrauten niedrigen Ledge in San Van zurück und bleib mit einem Session-Marker bei ihrer einfachen Anfahrt. Roll mit deinem gewohnten Setup und nimm die Line, die sich gerade leicht anfühlt.",
        "gameObjective": "Kehr in **skate. (2025)** zu einer vertrauten niedrigen Ledge in San Van zurück und bleib mit einem Session-Marker bei ihrer einfachen Anfahrt. Roll mit deinem gewohnten Setup und nimm die Line, die sich gerade leicht anfühlt."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "skate-s25-session-checklist": {
    "definition": {
      "id": "skate-s25-session-checklist",
      "rarity": "standard",
      "moodIds": [
        "focused",
        "progress"
      ],
      "type": "objective",
      "tags": [
        "skating"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 20,
      "universal": false,
      "curated": {
        "gameId": "skate",
        "installmentIds": [
          "skate-2025"
        ]
      },
      "gameGenreIds": [
        "sports"
      ],
      "connectionModeIds": [
        "online"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "A Session to Finish",
      "objective": "Pick a **skate. (2025) Session Challenge** with reachable requirements. **Complete its base objectives and claim the result**, without requiring Shut It Down.",
      "gameObjective": "Pick a **skate. (2025) Session Challenge** with reachable requirements. **Complete its base objectives and claim the result**, without requiring Shut It Down."
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
    "catalogRevision": "2026-10-04-before"
  },
  "skate-s25-stunt-one-try": {
    "definition": {
      "id": "skate-s25-stunt-one-try",
      "rarity": "standard",
      "moodIds": [
        "curious"
      ],
      "type": "experiment",
      "tags": [
        "skating"
      ],
      "minimumDurationMinutes": 2,
      "suggestedDurationMinutes": 15,
      "universal": false,
      "curated": {
        "gameId": "skate",
        "installmentIds": [
          "skate-2025"
        ]
      },
      "gameGenreIds": [
        "sports"
      ],
      "connectionModeIds": [
        "online"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "See the Stunt",
      "objective": "Select an **unlocked Stunt Challenge in skate. (2025)**. Read its requirement, **try the stunt once**, and notice which part of the approach launches you.",
      "gameObjective": "Select an **unlocked Stunt Challenge in skate. (2025)**. Read its requirement, **try the stunt once**, and notice which part of the approach launches you."
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
    "catalogRevision": "2026-10-04-before"
  },
  "skate-s25-coop-challenge": {
    "definition": {
      "id": "skate-s25-coop-challenge",
      "rarity": "standard",
      "moodIds": [
        "connect"
      ],
      "type": "objective",
      "tags": [
        "co-op"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 25,
      "universal": false,
      "curated": {
        "gameId": "skate",
        "installmentIds": [
          "skate-2025"
        ]
      },
      "gameGenreIds": [
        "sports"
      ],
      "connectionModeIds": [
        "online"
      ],
      "playStyleIds": [
        "co-op",
        "team"
      ],
      "gameBindable": true,
      "name": "Share the Checklist",
      "objective": "With a friend in **skate. (2025)**, enter a Challenge marked for co-op. Agree who will try which objective and **play until the base result can be claimed or you have each made three runs**.",
      "gameObjective": "With a friend in **skate. (2025)**, enter a Challenge marked for co-op. Agree who will try which objective and **play until the base result can be claimed or you have each made three runs**."
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
    "catalogRevision": "2026-10-04-before"
  },
  "skate-s25-ground-line-replay": {
    "definition": {
      "id": "skate-s25-ground-line-replay",
      "rarity": "standard",
      "moodIds": [
        "create"
      ],
      "type": "creation",
      "tags": [
        "photography"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 20,
      "universal": false,
      "curated": {
        "gameId": "skate",
        "installmentIds": [
          "skate-2025"
        ]
      },
      "gameGenreIds": [
        "sports"
      ],
      "connectionModeIds": [
        "online"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Keep the Whole Line",
      "objective": "In **skate. (2025)**, record a line through one street spot. In the Replay Editor, **save a clip with the approach, every trick, and the roll-away in one uncut take**.",
      "gameObjective": "In **skate. (2025)**, record a line through one street spot. In the Replay Editor, **save a clip with the approach, every trick, and the roll-away in one uncut take**."
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
    "catalogRevision": "2026-10-04-before"
  },
  "skate-s25-quickdrop-bank-in": {
    "definition": {
      "id": "skate-s25-quickdrop-bank-in",
      "rarity": "standard",
      "moodIds": [
        "create",
        "focused"
      ],
      "type": "creation",
      "tags": [
        "building"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 20,
      "universal": false,
      "curated": {
        "gameId": "skate",
        "installmentIds": [
          "skate-2025"
        ]
      },
      "gameGenreIds": [
        "sports"
      ],
      "connectionModeIds": [
        "online"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "A Bank Approach",
      "objective": "With **Quick Drop unlocked in skate. (2025)**, place a bank to turn a quiet flat approach into a ride up a nearby ledge. **Ride your built approach onto the ledge**, then remove the prop.",
      "gameObjective": "With **Quick Drop unlocked in skate. (2025)**, place a bank to turn a quiet flat approach into a ride up a nearby ledge. **Ride your built approach onto the ledge**, then remove the prop."
    },
    "translations": {
      "en": {
        "name": "A Bank Approach",
        "objective": "With **Quick Drop unlocked in skate. (2025)**, place a bank to turn a quiet flat approach into a ride up a nearby ledge. **Ride your built approach onto the ledge**, then remove the prop.",
        "gameObjective": "With **Quick Drop unlocked in skate. (2025)**, place a bank to turn a quiet flat approach into a ride up a nearby ledge. **Ride your built approach onto the ledge**, then remove the prop."
      },
      "de": {
        "name": "Eine Schräge zum Spot",
        "objective": "Setz in **skate. (2025) mit freigeschaltetem Quick Drop** an einer ruhigen flachen Anfahrt eine Schräge zu einer nahen Kante. **Fahr über deine gebaute Anfahrt auf die Kante** und entferne das Objekt danach.",
        "gameObjective": "Setz in **skate. (2025) mit freigeschaltetem Quick Drop** an einer ruhigen flachen Anfahrt eine Schräge zu einer nahen Kante. **Fahr über deine gebaute Anfahrt auf die Kante** und entferne das Objekt danach."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "skate-s25-quickdrop-wall-ride": {
    "definition": {
      "id": "skate-s25-quickdrop-wall-ride",
      "rarity": "standard",
      "moodIds": [
        "curious",
        "create"
      ],
      "type": "experiment",
      "tags": [
        "building",
        "skating"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 20,
      "universal": false,
      "curated": {
        "gameId": "skate",
        "installmentIds": [
          "skate-2025"
        ]
      },
      "gameGenreIds": [
        "sports"
      ],
      "connectionModeIds": [
        "online"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Move the Take-Off",
      "objective": "With **Quick Drop unlocked in skate. (2025)**, place a kicker near a quiet wall. **Try a wallride with the kicker close to the wall and again farther away**, then remove it.",
      "gameObjective": "With **Quick Drop unlocked in skate. (2025)**, place a kicker near a quiet wall. **Try a wallride with the kicker close to the wall and again farther away**, then remove it."
    },
    "translations": {
      "en": {
        "name": "Move the Take-Off",
        "objective": "With **Quick Drop unlocked in skate. (2025)**, place a kicker near a quiet wall. **Try a wallride with the kicker close to the wall and again farther away**, then remove it.",
        "gameObjective": "With **Quick Drop unlocked in skate. (2025)**, place a kicker near a quiet wall. **Try a wallride with the kicker close to the wall and again farther away**, then remove it."
      },
      "de": {
        "name": "Den Absprung versetzen",
        "objective": "Stell in **skate. (2025) mit freigeschaltetem Quick Drop** einen Kicker an eine ruhige Wand. **Probier einen Wallride mit nah und weiter entfernt stehendem Kicker** und entferne ihn danach.",
        "gameObjective": "Stell in **skate. (2025) mit freigeschaltetem Quick Drop** einen Kicker an eine ruhige Wand. **Probier einen Wallride mit nah und weiter entfernt stehendem Kicker** und entferne ihn danach."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "skate-s25-marker-two-approaches": {
    "definition": {
      "id": "skate-s25-marker-two-approaches",
      "rarity": "standard",
      "moodIds": [
        "focused",
        "curious"
      ],
      "type": "experiment",
      "tags": [
        "skating"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 15,
      "universal": false,
      "curated": {
        "gameId": "skate",
        "installmentIds": [
          "skate-2025"
        ]
      },
      "gameGenreIds": [
        "sports"
      ],
      "connectionModeIds": [
        "online"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Two Ways In",
      "objective": "At an **unfamiliar skate. (2025) stair set**, move your session marker from a straight run-up to a diagonal one. **Try the same ollie from both starts** and compare the space for landing.",
      "gameObjective": "At an **unfamiliar skate. (2025) stair set**, move your session marker from a straight run-up to a diagonal one. **Try the same ollie from both starts** and compare the space for landing."
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
    "catalogRevision": "2026-10-04-before"
  },
  "skate-s25-water-feature": {
    "definition": {
      "id": "skate-s25-water-feature",
      "rarity": "standard",
      "moodIds": [
        "explore",
        "restless"
      ],
      "type": "inspiration",
      "tags": [
        "free-roam"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 20,
      "universal": false,
      "curated": {
        "gameId": "skate",
        "installmentIds": [
          "skate-2025"
        ]
      },
      "gameGenreIds": [
        "sports"
      ],
      "connectionModeIds": [
        "online"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Around the Water",
      "objective": "In **skate. (2025)**, head for an unlocked plaza with a water feature. Follow its edges on the board and look for ways its curves connect the surrounding ledges.",
      "gameObjective": "In **skate. (2025)**, head for an unlocked plaza with a water feature. Follow its edges on the board and look for ways its curves connect the surrounding ledges."
    },
    "translations": {
      "en": {
        "name": "Around the Water",
        "objective": "In **skate. (2025)**, head for an unlocked plaza with a water feature. Follow its edges on the board and look for ways its curves connect the surrounding ledges.",
        "gameObjective": "In **skate. (2025)**, head for an unlocked plaza with a water feature. Follow its edges on the board and look for ways its curves connect the surrounding ledges."
      },
      "de": {
        "name": "Rund ums Wasser",
        "objective": "Fahr in **skate. (2025)** zu einem freigeschalteten Platz mit Wasserbecken. Folge seinen Rändern auf dem Brett und schau, wie die Kurven zu den Kanten rundherum führen.",
        "gameObjective": "Fahr in **skate. (2025)** zu einem freigeschalteten Platz mit Wasserbecken. Folge seinen Rändern auf dem Brett und schau, wie die Kurven zu den Kanten rundherum führen."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "skate-s25-spotlight-return": {
    "definition": {
      "id": "skate-s25-spotlight-return",
      "rarity": "standard",
      "moodIds": [
        "progress",
        "focused"
      ],
      "type": "objective",
      "tags": [
        "skating"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 20,
      "universal": false,
      "curated": {
        "gameId": "skate",
        "installmentIds": [
          "skate-2025"
        ]
      },
      "gameGenreIds": [
        "sports"
      ],
      "connectionModeIds": [
        "online"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "A Spotlight Bonus",
      "objective": "Choose a **skate. (2025) Spotlight Challenge you have already completed** with an available bonus objective. **Finish that bonus and claim its reward**.",
      "gameObjective": "Choose a **skate. (2025) Spotlight Challenge you have already completed** with an available bonus objective. **Finish that bonus and claim its reward**."
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
    "catalogRevision": "2026-10-04-before"
  },
  "skate-s25-grab-spin-line": {
    "definition": {
      "id": "skate-s25-grab-spin-line",
      "rarity": "standard",
      "moodIds": [
        "challenge",
        "focused"
      ],
      "type": "challenge",
      "tags": [
        "skating",
        "three-attempts"
      ],
      "minimumDurationMinutes": 2,
      "suggestedDurationMinutes": 15,
      "universal": false,
      "curated": {
        "gameId": "skate",
        "installmentIds": [
          "skate-2025"
        ]
      },
      "gameGenreIds": [
        "sports"
      ],
      "connectionModeIds": [
        "online"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Turn with the Grab",
      "objective": "At a **skate. (2025) ramp with a clear landing**, **land a 180 while holding a grab and roll away**. Stop after three runs.",
      "gameObjective": "At a **skate. (2025) ramp with a clear landing**, **land a 180 while holding a grab and roll away**. Stop after three runs."
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
    "catalogRevision": "2026-10-04-before"
  },
  "skate-s25-watch-and-return": {
    "definition": {
      "id": "skate-s25-watch-and-return",
      "rarity": "standard",
      "moodIds": [
        "connect"
      ],
      "type": "objective",
      "tags": [
        "skating"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 20,
      "universal": false,
      "curated": {
        "gameId": "skate",
        "installmentIds": [
          "skate-2025"
        ]
      },
      "gameGenreIds": [
        "sports"
      ],
      "connectionModeIds": [
        "online"
      ],
      "playStyleIds": [
        "co-op"
      ],
      "gameBindable": true,
      "name": "Trade a Line",
      "objective": "Meet a friend at the same **skate. (2025) street spot**. Watch each other’s lines, then **each try one obstacle from the other person’s route**.",
      "gameObjective": "Meet a friend at the same **skate. (2025) street spot**. Watch each other’s lines, then **each try one obstacle from the other person’s route**."
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
    "catalogRevision": "2026-10-04-before"
  },
  "skate-s25-soundtrack-return": {
    "definition": {
      "id": "skate-s25-soundtrack-return",
      "rarity": "standard",
      "moodIds": [
        "nostalgic"
      ],
      "type": "inspiration",
      "tags": [
        "free-roam"
      ],
      "minimumDurationMinutes": 2,
      "suggestedDurationMinutes": 15,
      "universal": false,
      "curated": {
        "gameId": "skate",
        "installmentIds": [
          "skate-2025"
        ]
      },
      "gameGenreIds": [
        "sports"
      ],
      "connectionModeIds": [
        "online"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "The Old Skate Habit",
      "objective": "In **skate. (2025)**, pick a San Van spot that reminds you of somewhere you skated in an earlier Skate game. Let the shape of its rails and banks guide a session like the ones you remember.",
      "gameObjective": "In **skate. (2025)**, pick a San Van spot that reminds you of somewhere you skated in an earlier Skate game. Let the shape of its rails and banks guide a session like the ones you remember."
    },
    "translations": {
      "en": {
        "name": "The Old Skate Habit",
        "objective": "In **skate. (2025)**, pick a San Van spot that reminds you of somewhere you skated in an earlier Skate game. Let the shape of its rails and banks guide a session like the ones you remember.",
        "gameObjective": "In **skate. (2025)**, pick a San Van spot that reminds you of somewhere you skated in an earlier Skate game. Let the shape of its rails and banks guide a session like the ones you remember."
      },
      "de": {
        "name": "Die alte Skate-Gewohnheit",
        "objective": "Such in **skate. (2025)** einen San-Van-Spot, der dich an einen Ort aus einem früheren Skate-Spiel erinnert. Lass dich von seinen Rails und Schrägen zu einer Session wie damals führen.",
        "gameObjective": "Such in **skate. (2025)** einen San-Van-Spot, der dich an einen Ort aus einem früheren Skate-Spiel erinnert. Lass dich von seinen Rails und Schrägen zu einer Session wie damals führen."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "skate-s3-film-two-spots": {
    "definition": {
      "id": "skate-s3-film-two-spots",
      "rarity": "standard",
      "moodIds": [
        "create"
      ],
      "type": "creation",
      "tags": [
        "photography"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 25,
      "universal": false,
      "curated": {
        "gameId": "skate",
        "installmentIds": [
          "skate-3"
        ]
      },
      "gameGenreIds": [
        "sports",
        "sandbox"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Two-Spot Edit",
      "objective": "Record one trick at each of two Port Carverton spots and **cut them into a short clip in the replay editor**.",
      "gameObjective": "Record one trick at each of two Port Carverton spots and **cut them into a short clip in the replay editor**."
    },
    "translations": {
      "en": {
        "name": "Two-Spot Edit",
        "objective": "Record one trick at each of two Port Carverton spots and **cut them into a short clip in the replay editor**.",
        "gameObjective": "Record one trick at each of two Port Carverton spots and **cut them into a short clip in the replay editor**."
      },
      "de": {
        "name": "Clip mit zwei Spots",
        "objective": "Nimm je einen Trick an zwei Spots in Port Carverton auf und **schneide daraus einen kurzen Clip im Replay-Editor**.",
        "gameObjective": "Nimm je einen Trick an zwei Spots in Port Carverton auf und **schneide daraus einen kurzen Clip im Replay-Editor**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "skate-s25-rooftop-approach": {
    "definition": {
      "id": "skate-s25-rooftop-approach",
      "rarity": "standard",
      "moodIds": [
        "explore"
      ],
      "type": "objective",
      "tags": [
        "traversal"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 20,
      "universal": false,
      "curated": {
        "gameId": "skate",
        "installmentIds": [
          "skate-2025"
        ]
      },
      "gameGenreIds": [
        "sports",
        "sandbox"
      ],
      "connectionModeIds": [
        "online"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Climb to the Spot",
      "objective": "In San Vansterdam, **reach a rooftop skate spot by climbing on foot, then skate a line from it**.",
      "gameObjective": "In San Vansterdam, **reach a rooftop skate spot by climbing on foot, then skate a line from it**."
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
    "catalogRevision": "2026-10-04-before"
  },
  "skate-s25-replay-slam": {
    "definition": {
      "id": "skate-s25-replay-slam",
      "rarity": "standard",
      "moodIds": [
        "create"
      ],
      "type": "creation",
      "tags": [
        "photography"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 20,
      "universal": false,
      "curated": {
        "gameId": "skate",
        "installmentIds": [
          "skate-2025"
        ]
      },
      "gameGenreIds": [
        "sports",
        "sandbox"
      ],
      "connectionModeIds": [
        "online"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Keep the Slam",
      "objective": "Use the Replay Editor to **save a short clip of a surprising bail, including the trick that caused it**.",
      "gameObjective": "Use the Replay Editor to **save a short clip of a surprising bail, including the trick that caused it**."
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
    "catalogRevision": "2026-10-04-before"
  },
  "skate-s25-quickdrop-gap": {
    "definition": {
      "id": "skate-s25-quickdrop-gap",
      "rarity": "standard",
      "moodIds": [
        "create"
      ],
      "type": "creation",
      "tags": [
        "building"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 20,
      "universal": false,
      "curated": {
        "gameId": "skate",
        "installmentIds": [
          "skate-2025"
        ]
      },
      "gameGenreIds": [
        "sports",
        "sandbox"
      ],
      "connectionModeIds": [
        "online"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Make a New Gap",
      "objective": "Place two Quick Drop objects and **land a trick over the space you made between them**.",
      "gameObjective": "Place two Quick Drop objects and **land a trick over the space you made between them**."
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
    "catalogRevision": "2026-10-04-before"
  },
  "skate-s25-throwdown-join": {
    "definition": {
      "id": "skate-s25-throwdown-join",
      "rarity": "standard",
      "moodIds": [
        "connect"
      ],
      "type": "objective",
      "tags": [
        "skating"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 25,
      "universal": false,
      "curated": {
        "gameId": "skate",
        "installmentIds": [
          "skate-2025"
        ]
      },
      "gameGenreIds": [
        "sports",
        "sandbox"
      ],
      "connectionModeIds": [
        "online"
      ],
      "playStyleIds": [
        "team"
      ],
      "gameBindable": true,
      "name": "Join a Throwdown",
      "objective": "Join a nearby Throwdown with other skaters and **complete one of its shared goals before the session ends**.",
      "gameObjective": "Join a nearby Throwdown with other skaters and **complete one of its shared goals before the session ends**."
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
    "catalogRevision": "2026-10-04-before"
  },
  "skate-s25-bounty-route": {
    "definition": {
      "id": "skate-s25-bounty-route",
      "rarity": "standard",
      "moodIds": [
        "focused"
      ],
      "type": "objective",
      "tags": [
        "skating"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 20,
      "universal": false,
      "curated": {
        "gameId": "skate",
        "installmentIds": [
          "skate-2025"
        ]
      },
      "gameGenreIds": [
        "sports",
        "sandbox"
      ],
      "connectionModeIds": [
        "online"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "One Bounty, One Route",
      "objective": "Pick an available Endless Bounty and **plan a San Van route that lets you finish it without changing spots**.",
      "gameObjective": "Pick an available Endless Bounty and **plan a San Van route that lets you finish it without changing spots**."
    },
    "translations": {
      "en": {
        "name": "One Bounty, One Route",
        "objective": "Pick an available Endless Bounty and **plan a San Van route that lets you finish it without changing spots**.",
        "gameObjective": "Pick an available Endless Bounty and **plan a San Van route that lets you finish it without changing spots**."
      },
      "de": {
        "name": "Eine Bounty, ein Weg",
        "objective": "Wähle eine verfügbare Endless Bounty und **plane in San Van einen Weg, auf dem du sie ohne Spotwechsel schaffst**.",
        "gameObjective": "Wähle eine verfügbare Endless Bounty und **plane in San Van einen Weg, auf dem du sie ohne Spotwechsel schaffst**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "skate-s25-board-story": {
    "definition": {
      "id": "skate-s25-board-story",
      "rarity": "standard",
      "moodIds": [
        "create"
      ],
      "type": "creation",
      "tags": [
        "outfit"
      ],
      "minimumDurationMinutes": 2,
      "suggestedDurationMinutes": 15,
      "universal": false,
      "curated": {
        "gameId": "skate",
        "installmentIds": [
          "skate-2025"
        ]
      },
      "gameGenreIds": [
        "sports",
        "sandbox"
      ],
      "connectionModeIds": [
        "online"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Build Your Board",
      "objective": "Change the deck and at least one hardware or grip detail, then **ride your new setup through one favorite spot**.",
      "gameObjective": "Change the deck and at least one hardware or grip detail, then **ride your new setup through one favorite spot**."
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
    "catalogRevision": "2026-10-04-before"
  },
  "skate-s25-spot-battle": {
    "definition": {
      "id": "skate-s25-spot-battle",
      "rarity": "standard",
      "moodIds": [
        "challenge"
      ],
      "type": "challenge",
      "tags": [
        "skating",
        "three-attempts"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 20,
      "universal": false,
      "curated": {
        "gameId": "skate",
        "installmentIds": [
          "skate-2025"
        ]
      },
      "gameGenreIds": [
        "sports",
        "sandbox"
      ],
      "connectionModeIds": [
        "online"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Defend a Spot",
      "objective": "Start or join a Spot Battle and **post one landed score on its chosen obstacle**. Stop after three runs.",
      "gameObjective": "Start or join a Spot Battle and **post one landed score on its chosen obstacle**. Stop after three runs."
    },
    "translations": {
      "en": {
        "name": "Defend a Spot",
        "objective": "Start or join a Spot Battle and **post one landed score on its chosen obstacle**. Stop after three runs.",
        "gameObjective": "Start or join a Spot Battle and **post one landed score on its chosen obstacle**. Stop after three runs."
      },
      "de": {
        "name": "Spot verteidigen",
        "objective": "Starte oder betrete einen Spot Battle und **lande einen gewerteten Trick am gewählten Hindernis**. Drei Läufe.",
        "gameObjective": "Starte oder betrete einen Spot Battle und **lande einen gewerteten Trick am gewählten Hindernis**. Drei Läufe."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "skate-s25-foot-to-board": {
    "definition": {
      "id": "skate-s25-foot-to-board",
      "rarity": "standard",
      "moodIds": [
        "curious"
      ],
      "type": "experiment",
      "tags": [
        "traversal"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 20,
      "universal": false,
      "curated": {
        "gameId": "skate",
        "installmentIds": [
          "skate-2025"
        ]
      },
      "gameGenreIds": [
        "sports",
        "sandbox"
      ],
      "connectionModeIds": [
        "online"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Find a Hidden Entry",
      "objective": "Climb off-board to a spot you cannot roll into and **find a rideable line back down without fast travel**.",
      "gameObjective": "Climb off-board to a spot you cannot roll into and **find a rideable line back down without fast travel**."
    },
    "translations": {
      "en": {
        "name": "Find a Hidden Entry",
        "objective": "Climb off-board to a spot you cannot roll into and **find a rideable line back down without fast travel**.",
        "gameObjective": "Climb off-board to a spot you cannot roll into and **find a rideable line back down without fast travel**."
      },
      "de": {
        "name": "Zu Fuß hin, auf dem Brett zurück",
        "objective": "Klettere ohne Brett zu einem schwer erreichbaren Spot und **finde ohne Schnellreise eine fahrbare Line zurück**.",
        "gameObjective": "Klettere ohne Brett zu einem schwer erreichbaren Spot und **finde ohne Schnellreise eine fahrbare Line zurück**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "fortnite-locker-season-memory": {
    "definition": {
      "id": "fortnite-locker-season-memory",
      "rarity": "standard",
      "moodIds": [
        "create",
        "relax"
      ],
      "type": "creation",
      "tags": [
        "outfit"
      ],
      "minimumDurationMinutes": 2,
      "suggestedDurationMinutes": 10,
      "universal": false,
      "curated": {
        "gameId": "fortnite",
        "installmentIds": []
      },
      "gameGenreIds": [
        "shooter",
        "sandbox"
      ],
      "connectionModeIds": [
        "online"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Dress for That Season",
      "objective": "In your **Fortnite Locker**, use owned cosmetics to make a preset around a season you remember. **Save it and load into your own Creative island with it equipped**.",
      "gameObjective": "In your **Fortnite Locker**, use owned cosmetics to make a preset around a season you remember. **Save it and load into your own Creative island with it equipped**."
    },
    "translations": {
      "en": {
        "name": "Dress for That Season",
        "objective": "In your **Fortnite Locker**, use owned cosmetics to make a preset around a season you remember. **Save it and load into your own Creative island with it equipped**.",
        "gameObjective": "In your **Fortnite Locker**, use owned cosmetics to make a preset around a season you remember. **Save it and load into your own Creative island with it equipped**."
      },
      "de": {
        "name": "Outfit für die Saison",
        "objective": "Bau in deinem **Fortnite-Spind** mit vorhandenen Cosmetics ein Preset zu einer Saison, an die du dich erinnerst. **Speichere es und betritt damit deine eigene Creative-Insel**.",
        "gameObjective": "Bau in deinem **Fortnite-Spind** mit vorhandenen Cosmetics ein Preset zu einer Saison, an die du dich erinnerst. **Speichere es und betritt damit deine eigene Creative-Insel**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "fortnite-build-to-escape": {
    "definition": {
      "id": "fortnite-build-to-escape",
      "rarity": "standard",
      "moodIds": [
        "curious"
      ],
      "type": "experiment",
      "tags": [
        "building"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 20,
      "universal": false,
      "curated": {
        "gameId": "fortnite",
        "installmentIds": []
      },
      "gameGenreIds": [
        "shooter",
        "survival"
      ],
      "connectionModeIds": [
        "online"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "One Useful Build",
      "objective": "In a Battle Royale build match, **build a short escape route during a fight and actually use it to leave**.",
      "gameObjective": "In a Battle Royale build match, **build a short escape route during a fight and actually use it to leave**."
    },
    "translations": {
      "en": {
        "name": "One Useful Build",
        "objective": "In a Battle Royale build match, **build a short escape route during a fight and actually use it to leave**.",
        "gameObjective": "In a Battle Royale build match, **build a short escape route during a fight and actually use it to leave**."
      },
      "de": {
        "name": "Bauen zum Entkommen",
        "objective": "Baue in einem Battle-Royale-Match mit Bauen **während eines Kampfes einen kurzen Fluchtweg und nutze ihn wirklich**.",
        "gameObjective": "Baue in einem Battle-Royale-Match mit Bauen **während eines Kampfes einen kurzen Fluchtweg und nutze ihn wirklich**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "fortnite-zero-build-cover": {
    "definition": {
      "id": "fortnite-zero-build-cover",
      "rarity": "standard",
      "moodIds": [
        "focused"
      ],
      "type": "objective",
      "tags": [
        "scouting"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 20,
      "universal": false,
      "curated": {
        "gameId": "fortnite",
        "installmentIds": []
      },
      "gameGenreIds": [
        "shooter",
        "survival"
      ],
      "connectionModeIds": [
        "online"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Cover Without Walls",
      "objective": "In Zero Build, **cross one exposed area by moving between natural cover, then win or leave the encounter alive**.",
      "gameObjective": "In Zero Build, **cross one exposed area by moving between natural cover, then win or leave the encounter alive**."
    },
    "translations": {
      "en": {
        "name": "Cover Without Walls",
        "objective": "In Zero Build, **cross one exposed area by moving between natural cover, then win or leave the encounter alive**.",
        "gameObjective": "In Zero Build, **cross one exposed area by moving between natural cover, then win or leave the encounter alive**."
      },
      "de": {
        "name": "Deckung ohne Wände",
        "objective": "Überquere in Null Bauen **ein offenes Gebiet von Deckung zu Deckung und überstehe die nächste Begegnung**.",
        "gameObjective": "Überquere in Null Bauen **ein offenes Gebiet von Deckung zu Deckung und überstehe die nächste Begegnung**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "fortnite-reboot-a-mate": {
    "definition": {
      "id": "fortnite-reboot-a-mate",
      "rarity": "standard",
      "moodIds": [
        "connect"
      ],
      "type": "objective",
      "tags": [
        "support"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 25,
      "universal": false,
      "curated": {
        "gameId": "fortnite",
        "installmentIds": []
      },
      "gameGenreIds": [
        "shooter",
        "survival"
      ],
      "connectionModeIds": [
        "online"
      ],
      "playStyleIds": [
        "squad",
        "team"
      ],
      "gameBindable": true,
      "name": "Bring Them Back",
      "objective": "In a team Battle Royale match, **collect a teammate's reboot card and bring them back at a Reboot Van**.",
      "gameObjective": "In a team Battle Royale match, **collect a teammate's reboot card and bring them back at a Reboot Van**."
    },
    "translations": {
      "en": {
        "name": "Bring Them Back",
        "objective": "In a team Battle Royale match, **collect a teammate's reboot card and bring them back at a Reboot Van**.",
        "gameObjective": "In a team Battle Royale match, **collect a teammate's reboot card and bring them back at a Reboot Van**."
      },
      "de": {
        "name": "Teammitglied zurückholen",
        "objective": "Sammle im Team-Battle-Royale **die Neustartkarte eines Mitspielers und hol ihn am Neustartbus zurück**.",
        "gameObjective": "Sammle im Team-Battle-Royale **die Neustartkarte eines Mitspielers und hol ihn am Neustartbus zurück**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "fortnite-ping-the-route": {
    "definition": {
      "id": "fortnite-ping-the-route",
      "rarity": "standard",
      "moodIds": [
        "connect"
      ],
      "type": "objective",
      "tags": [
        "support"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 25,
      "universal": false,
      "curated": {
        "gameId": "fortnite",
        "installmentIds": []
      },
      "gameGenreIds": [
        "shooter",
        "survival"
      ],
      "connectionModeIds": [
        "online"
      ],
      "playStyleIds": [
        "squad",
        "team"
      ],
      "gameBindable": true,
      "name": "Call the Route",
      "objective": "In a squad match, **mark a landing spot, a supply stop, and a safe rotation that a teammate actually follows**.",
      "gameObjective": "In a squad match, **mark a landing spot, a supply stop, and a safe rotation that a teammate actually follows**."
    },
    "translations": {
      "en": {
        "name": "Call the Route",
        "objective": "In a squad match, **mark a landing spot, a supply stop, and a safe rotation that a teammate actually follows**.",
        "gameObjective": "In a squad match, **mark a landing spot, a supply stop, and a safe rotation that a teammate actually follows**."
      },
      "de": {
        "name": "Den Weg ansagen",
        "objective": "Markiere in einem Squad-Match **einen Landeort, einen Ausrüstungshalt und einen sicheren Weg, dem ein Teammitglied wirklich folgt**.",
        "gameObjective": "Markiere in einem Squad-Match **einen Landeort, einen Ausrüstungshalt und einen sicheren Weg, dem ein Teammitglied wirklich folgt**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "far-cry-primal-vision-return": {
    "definition": {
      "id": "far-cry-primal-vision-return",
      "rarity": "standard",
      "moodIds": [
        "curious",
        "nostalgic"
      ],
      "type": "inspiration",
      "tags": [
        "story"
      ],
      "minimumDurationMinutes": 5,
      "suggestedDurationMinutes": 25,
      "universal": false,
      "curated": {
        "gameId": "far-cry",
        "installmentIds": [
          "fc-primal"
        ]
      },
      "gameGenreIds": [
        "shooter",
        "adventure"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Tensay’s Other World",
      "objective": "With an unplayed vision available from Tensay in **Far Cry Primal**, enter it and follow its unfamiliar animal perspective. Let this session stay inside that vision.",
      "gameObjective": "With an unplayed vision available from Tensay in **Far Cry Primal**, enter it and follow its unfamiliar animal perspective. Let this session stay inside that vision."
    },
    "translations": {
      "en": {
        "name": "Tensay’s Other World",
        "objective": "With an unplayed vision available from Tensay in **Far Cry Primal**, enter it and follow its unfamiliar animal perspective. Let this session stay inside that vision.",
        "gameObjective": "With an unplayed vision available from Tensay in **Far Cry Primal**, enter it and follow its unfamiliar animal perspective. Let this session stay inside that vision."
      },
      "de": {
        "name": "Tensays andere Welt",
        "objective": "Betritt in **Far Cry Primal** eine noch offene Vision von Tensay und spiel mit ihrer ungewohnten Tierperspektive. Bleib für diese Session in dieser Vision.",
        "gameObjective": "Betritt in **Far Cry Primal** eine noch offene Vision von Tensay und spiel mit ihrer ungewohnten Tierperspektive. Bleib für diese Session in dieser Vision."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "far-cry-fc4-mohan-journal": {
    "definition": {
      "id": "far-cry-fc4-mohan-journal",
      "rarity": "standard",
      "moodIds": [
        "nostalgic",
        "curious"
      ],
      "type": "objective",
      "tags": [
        "collectibles",
        "story"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 20,
      "universal": false,
      "curated": {
        "gameId": "far-cry",
        "installmentIds": [
          "fc-4"
        ]
      },
      "gameGenreIds": [
        "shooter",
        "adventure"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Mohan’s Page",
      "objective": "With an accessible uncollected Mohan Ghale journal marker in **Far Cry 4**, **find the journal and read that entry**, tracing what Ajay’s father wrote about Kyrat.",
      "gameObjective": "With an accessible uncollected Mohan Ghale journal marker in **Far Cry 4**, **find the journal and read that entry**, tracing what Ajay’s father wrote about Kyrat."
    },
    "translations": {
      "en": {
        "name": "Mohan’s Page",
        "objective": "With an accessible uncollected Mohan Ghale journal marker in **Far Cry 4**, **find the journal and read that entry**, tracing what Ajay’s father wrote about Kyrat.",
        "gameObjective": "With an accessible uncollected Mohan Ghale journal marker in **Far Cry 4**, **find the journal and read that entry**, tracing what Ajay’s father wrote about Kyrat."
      },
      "de": {
        "name": "Mohans Seite",
        "objective": "Such in **Far Cry 4** bei einem erreichbaren offenen Marker **Mohans Tagebuch und lies den Eintrag**. Schau, was Ajays Vater über Kyrat geschrieben hat.",
        "gameObjective": "Such in **Far Cry 4** bei einem erreichbaren offenen Marker **Mohans Tagebuch und lies den Eintrag**. Schau, was Ajays Vater über Kyrat geschrieben hat."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "far-cry-primal-beast-rescue": {
    "definition": {
      "id": "far-cry-primal-beast-rescue",
      "rarity": "standard",
      "moodIds": [
        "progress"
      ],
      "type": "objective",
      "tags": [
        "animals"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 25,
      "universal": false,
      "curated": {
        "gameId": "far-cry",
        "installmentIds": [
          "fc-primal"
        ]
      },
      "gameGenreIds": [
        "adventure",
        "shooter"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "A New Companion",
      "objective": "Use bait on a beast you have not tamed and **bring it safely back to the Wenja village**.",
      "gameObjective": "Use bait on a beast you have not tamed and **bring it safely back to the Wenja village**."
    },
    "translations": {
      "en": {
        "name": "A New Companion",
        "objective": "Use bait on a beast you have not tamed and **bring it safely back to the Wenja village**.",
        "gameObjective": "Use bait on a beast you have not tamed and **bring it safely back to the Wenja village**."
      },
      "de": {
        "name": "Ein neuer Begleiter",
        "objective": "Locke ein noch nicht gezähmtes Tier mit Köder an und **bring es sicher zurück ins Wenja-Dorf**.",
        "gameObjective": "Locke ein noch nicht gezähmtes Tier mit Köder an und **bring es sicher zurück ins Wenja-Dorf**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "far-cry-primal-torch-night": {
    "definition": {
      "id": "far-cry-primal-torch-night",
      "rarity": "standard",
      "moodIds": [
        "challenge"
      ],
      "type": "challenge",
      "tags": [
        "one-life"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 20,
      "universal": false,
      "curated": {
        "gameId": "far-cry",
        "installmentIds": [
          "fc-primal"
        ]
      },
      "gameGenreIds": [
        "adventure",
        "shooter"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "One Torch at Night",
      "objective": "Travel between two nearby landmarks at night **with a torch as your only weapon**. One attempt.",
      "gameObjective": "Travel between two nearby landmarks at night **with a torch as your only weapon**. One attempt."
    },
    "translations": {
      "en": {
        "name": "One Torch at Night",
        "objective": "Travel between two nearby landmarks at night **with a torch as your only weapon**. One attempt.",
        "gameObjective": "Travel between two nearby landmarks at night **with a torch as your only weapon**. One attempt."
      },
      "de": {
        "name": "Eine Fackel bei Nacht",
        "objective": "Reise nachts zwischen zwei nahen Landmarken **mit einer Fackel als einziger Waffe**. Ein Versuch.",
        "gameObjective": "Reise nachts zwischen zwei nahen Landmarken **mit einer Fackel als einziger Waffe**. Ein Versuch."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "far-cry-primal-cave-markings": {
    "definition": {
      "id": "far-cry-primal-cave-markings",
      "rarity": "standard",
      "moodIds": [
        "explore"
      ],
      "type": "objective",
      "tags": [
        "exploration"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 20,
      "universal": false,
      "curated": {
        "gameId": "far-cry",
        "installmentIds": [
          "fc-primal"
        ]
      },
      "gameGenreIds": [
        "adventure",
        "shooter"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Marks in the Cave",
      "objective": "Enter an unfamiliar cave and **find one painting or handprint before leaving by a different route if possible**.",
      "gameObjective": "Enter an unfamiliar cave and **find one painting or handprint before leaving by a different route if possible**."
    },
    "translations": {
      "en": {
        "name": "Marks in the Cave",
        "objective": "Enter an unfamiliar cave and **find one painting or handprint before leaving by a different route if possible**.",
        "gameObjective": "Enter an unfamiliar cave and **find one painting or handprint before leaving by a different route if possible**."
      },
      "de": {
        "name": "Zeichen in der Höhle",
        "objective": "Erkunde eine unbekannte Höhle und **finde eine Malerei oder Handspur**, bevor du sie möglichst auf einem anderen Weg verlässt.",
        "gameObjective": "Erkunde eine unbekannte Höhle und **finde eine Malerei oder Handspur**, bevor du sie möglichst auf einem anderen Weg verlässt."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "far-cry-primal-sting-bomb": {
    "definition": {
      "id": "far-cry-primal-sting-bomb",
      "rarity": "standard",
      "moodIds": [
        "curious"
      ],
      "type": "experiment",
      "tags": [
        "gadgets"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 20,
      "universal": false,
      "curated": {
        "gameId": "far-cry",
        "installmentIds": [
          "fc-primal"
        ]
      },
      "gameGenreIds": [
        "adventure",
        "shooter"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "A Swarm Instead of a Charge",
      "objective": "At an occupied camp, **use a sting bomb to move one guard away from an entrance, then enter through it**.",
      "gameObjective": "At an occupied camp, **use a sting bomb to move one guard away from an entrance, then enter through it**."
    },
    "translations": {
      "en": {
        "name": "A Swarm Instead of a Charge",
        "objective": "At an occupied camp, **use a sting bomb to move one guard away from an entrance, then enter through it**.",
        "gameObjective": "At an occupied camp, **use a sting bomb to move one guard away from an entrance, then enter through it**."
      },
      "de": {
        "name": "Schwarm statt Sturm",
        "objective": "Vertreib bei einem besetzten Lager **eine Wache mit einer Stichbombe vom Eingang und geh dort hinein**.",
        "gameObjective": "Vertreib bei einem besetzten Lager **eine Wache mit einer Stichbombe vom Eingang und geh dort hinein**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "far-cry-fc3-outpost-silence": {
    "definition": {
      "id": "far-cry-fc3-outpost-silence",
      "rarity": "standard",
      "moodIds": [
        "challenge"
      ],
      "type": "challenge",
      "tags": [
        "no-detection",
        "three-attempts"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 25,
      "universal": false,
      "curated": {
        "gameId": "far-cry",
        "installmentIds": [
          "fc-3"
        ]
      },
      "gameGenreIds": [
        "adventure",
        "shooter"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "No Alarm Raised",
      "objective": "Liberate an outpost **without letting anyone reach an alarm**. Stop after three attempts.",
      "gameObjective": "Liberate an outpost **without letting anyone reach an alarm**. Stop after three attempts."
    },
    "translations": {
      "en": {
        "name": "No Alarm Raised",
        "objective": "Liberate an outpost **without letting anyone reach an alarm**. Stop after three attempts.",
        "gameObjective": "Liberate an outpost **without letting anyone reach an alarm**. Stop after three attempts."
      },
      "de": {
        "name": "Kein Alarm",
        "objective": "Befreie einen Außenposten, **ohne dass jemand einen Alarm erreicht**. Höre nach drei Versuchen auf.",
        "gameObjective": "Befreie einen Außenposten, **ohne dass jemand einen Alarm erreicht**. Höre nach drei Versuchen auf."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "far-cry-fc5-wingsuit-landing": {
    "definition": {
      "id": "far-cry-fc5-wingsuit-landing",
      "rarity": "standard",
      "moodIds": [
        "challenge"
      ],
      "type": "challenge",
      "tags": [
        "traversal",
        "three-attempts"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 20,
      "universal": false,
      "curated": {
        "gameId": "far-cry",
        "installmentIds": [
          "fc-5"
        ]
      },
      "gameGenreIds": [
        "adventure",
        "shooter"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Wingsuit to the Road",
      "objective": "Jump from a safe high point and **land by wingsuit at a road you selected first**. Stop after three jumps.",
      "gameObjective": "Jump from a safe high point and **land by wingsuit at a road you selected first**. Stop after three jumps."
    },
    "translations": {
      "en": {
        "name": "Wingsuit to the Road",
        "objective": "Jump from a safe high point and **land by wingsuit at a road you selected first**. Stop after three jumps.",
        "gameObjective": "Jump from a safe high point and **land by wingsuit at a road you selected first**. Stop after three jumps."
      },
      "de": {
        "name": "Im Wingsuit zur Straße",
        "objective": "Spring von einer sicheren Anhöhe und **lande mit dem Wingsuit an einer vorher gewählten Straße**. Nach drei Sprüngen ist Schluss.",
        "gameObjective": "Spring von einer sicheren Anhöhe und **lande mit dem Wingsuit an einer vorher gewählten Straße**. Nach drei Sprüngen ist Schluss."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "far-cry-fc5-outpost-reset": {
    "definition": {
      "id": "far-cry-fc5-outpost-reset",
      "rarity": "standard",
      "moodIds": [
        "curious"
      ],
      "type": "experiment",
      "tags": [
        "replay"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 25,
      "universal": false,
      "curated": {
        "gameId": "far-cry",
        "installmentIds": [
          "fc-5"
        ]
      },
      "gameGenreIds": [
        "adventure",
        "shooter"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "An Old Outpost, New Ally",
      "objective": "Use Outpost Master on a liberated outpost and **retake it with a companion you did not use there before**.",
      "gameObjective": "Use Outpost Master on a liberated outpost and **retake it with a companion you did not use there before**."
    },
    "translations": {
      "en": {
        "name": "An Old Outpost, New Ally",
        "objective": "Use Outpost Master on a liberated outpost and **retake it with a companion you did not use there before**.",
        "gameObjective": "Use Outpost Master on a liberated outpost and **retake it with a companion you did not use there before**."
      },
      "de": {
        "name": "Alter Posten, neuer Helfer",
        "objective": "Setz mit Außenpostenmeister einen befreiten Posten zurück und **erobere ihn mit einem Begleiter, den du dort bisher nicht genutzt hast**.",
        "gameObjective": "Setz mit Außenpostenmeister einen befreiten Posten zurück und **erobere ihn mit einem Begleiter, den du dort bisher nicht genutzt hast**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "gta-sa-road-signs": {
    "definition": {
      "id": "gta-sa-road-signs",
      "rarity": "standard",
      "moodIds": [
        "explore",
        "nostalgic"
      ],
      "type": "objective",
      "tags": [
        "driving",
        "no-fast-travel"
      ],
      "minimumDurationMinutes": 5,
      "suggestedDurationMinutes": 25,
      "universal": false,
      "curated": {
        "gameId": "gta",
        "installmentIds": [
          "gta-sa"
        ]
      },
      "gameGenreIds": [
        "adventure",
        "sandbox"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Read the Road Signs",
      "objective": "In **GTA: San Andreas**, after the countryside unlocks, start at Grove Street with a car and turn the radar off. **Drive to the Blueberry town sign using road signs and landmarks**, staying on roads and keeping the same car.",
      "gameObjective": "In **GTA: San Andreas**, after the countryside unlocks, start at Grove Street with a car and turn the radar off. **Drive to the Blueberry town sign using road signs and landmarks**, staying on roads and keeping the same car."
    },
    "translations": {
      "en": {
        "name": "Read the Road Signs",
        "objective": "In **GTA: San Andreas**, after the countryside unlocks, start at Grove Street with a car and turn the radar off. **Drive to the Blueberry town sign using road signs and landmarks**, staying on roads and keeping the same car.",
        "gameObjective": "In **GTA: San Andreas**, after the countryside unlocks, start at Grove Street with a car and turn the radar off. **Drive to the Blueberry town sign using road signs and landmarks**, staying on roads and keeping the same car."
      },
      "de": {
        "name": "Den Schildern nach",
        "objective": "Starte in **GTA: San Andreas** nach Freischaltung des Umlands mit einem Auto in der Grove Street und schalte das Radar aus. **Fahre anhand von Straßenschildern und Orientierungspunkten zum Ortsschild von Blueberry**. Bleib auf Straßen und nutze dasselbe Auto.",
        "gameObjective": "Starte in **GTA: San Andreas** nach Freischaltung des Umlands mit einem Auto in der Grove Street und schalte das Radar aus. **Fahre anhand von Straßenschildern und Orientierungspunkten zum Ortsschild von Blueberry**. Bleib auf Straßen und nutze dasselbe Auto."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "gta-v-return-to-story": {
    "definition": {
      "id": "gta-v-return-to-story",
      "rarity": "standard",
      "moodIds": [
        "progress",
        "overwhelmed",
        "nostalgic"
      ],
      "type": "inspiration",
      "tags": [
        "current-save",
        "story"
      ],
      "minimumDurationMinutes": 5,
      "suggestedDurationMinutes": 30,
      "universal": false,
      "curated": {
        "gameId": "gta",
        "installmentIds": [
          "gta-v"
        ]
      },
      "gameGenreIds": [
        "adventure",
        "narrative",
        "sandbox"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Back to Los Santos",
      "objective": "Return to an unfinished **GTA V story save where character switching is unlocked**. Check in with each available protagonist, then **follow one story lead that interests you**.",
      "gameObjective": "Return to an unfinished **GTA V story save where character switching is unlocked**. Check in with each available protagonist, then **follow one story lead that interests you**."
    },
    "translations": {
      "en": {
        "name": "Back to Los Santos",
        "objective": "Return to an unfinished **GTA V story save where character switching is unlocked**. Check in with each available protagonist, then **follow one story lead that interests you**.",
        "gameObjective": "Return to an unfinished **GTA V story save where character switching is unlocked**. Check in with each available protagonist, then **follow one story lead that interests you**."
      },
      "de": {
        "name": "Zurück in Los Santos",
        "objective": "Lade einen noch nicht beendeten **GTA-V-Story-Spielstand mit freigeschaltetem Figurenwechsel**. Schau bei allen verfügbaren Hauptfiguren vorbei und **spiel dann die Story-Mission weiter, auf die du am meisten Lust hast**.",
        "gameObjective": "Lade einen noch nicht beendeten **GTA-V-Story-Spielstand mit freigeschaltetem Figurenwechsel**. Schau bei allen verfügbaren Hauptfiguren vorbei und **spiel dann die Story-Mission weiter, auf die du am meisten Lust hast**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "gta-sa-arcade-space-monkey": {
    "definition": {
      "id": "gta-sa-arcade-space-monkey",
      "rarity": "standard",
      "moodIds": [
        "nostalgic",
        "low-energy"
      ],
      "type": "inspiration",
      "tags": [
        "replay"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 15,
      "universal": false,
      "curated": {
        "gameId": "gta",
        "installmentIds": [
          "gta-sa"
        ]
      },
      "gameGenreIds": [
        "adventure",
        "sandbox"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Go Go Space Monkey",
      "objective": "Find a playable Go Go Space Monkey arcade cabinet in **GTA: San Andreas**. Spend a little time with its tiny shooter instead of CJ’s next mission.",
      "gameObjective": "Find a playable Go Go Space Monkey arcade cabinet in **GTA: San Andreas**. Spend a little time with its tiny shooter instead of CJ’s next mission."
    },
    "translations": {
      "en": {
        "name": "Go Go Space Monkey",
        "objective": "Find a playable Go Go Space Monkey arcade cabinet in **GTA: San Andreas**. Spend a little time with its tiny shooter instead of CJ’s next mission.",
        "gameObjective": "Find a playable Go Go Space Monkey arcade cabinet in **GTA: San Andreas**. Spend a little time with its tiny shooter instead of CJ’s next mission."
      },
      "de": {
        "name": "Go Go Space Monkey",
        "objective": "Such in **GTA: San Andreas** einen spielbaren Go-Go-Space-Monkey-Automaten. Verbring etwas Zeit mit dem kleinen Shooter statt mit CJs nächster Mission.",
        "gameObjective": "Such in **GTA: San Andreas** einen spielbaren Go-Go-Space-Monkey-Automaten. Verbring etwas Zeit mit dem kleinen Shooter statt mit CJs nächster Mission."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "gta-sa-grove-recruits": {
    "definition": {
      "id": "gta-sa-grove-recruits",
      "rarity": "standard",
      "moodIds": [
        "curious",
        "focused"
      ],
      "type": "experiment",
      "tags": [
        "support"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 20,
      "universal": false,
      "curated": {
        "gameId": "gta",
        "installmentIds": [
          "gta-sa"
        ]
      },
      "gameGenreIds": [
        "adventure",
        "sandbox"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Take the Grove Along",
      "objective": "With gang recruitment unlocked in **GTA: San Andreas**, recruit two available Grove Street members. **Take them to a small hostile gang encounter and fight alongside them**, then return any survivors to Grove Street.",
      "gameObjective": "With gang recruitment unlocked in **GTA: San Andreas**, recruit two available Grove Street members. **Take them to a small hostile gang encounter and fight alongside them**, then return any survivors to Grove Street."
    },
    "translations": {
      "en": {
        "name": "Take the Grove Along",
        "objective": "With gang recruitment unlocked in **GTA: San Andreas**, recruit two available Grove Street members. **Take them to a small hostile gang encounter and fight alongside them**, then return any survivors to Grove Street.",
        "gameObjective": "With gang recruitment unlocked in **GTA: San Andreas**, recruit two available Grove Street members. **Take them to a small hostile gang encounter and fight alongside them**, then return any survivors to Grove Street."
      },
      "de": {
        "name": "Die Grove kommt mit",
        "objective": "Wirb in **GTA: San Andreas** mit freigeschalteter Gangrekrutierung zwei verfügbare Grove-Street-Mitglieder an. **Nimm sie zu einer kleinen feindlichen Gangbegegnung mit und kämpf mit ihnen**. Bring Überlebende zur Grove Street zurück.",
        "gameObjective": "Wirb in **GTA: San Andreas** mit freigeschalteter Gangrekrutierung zwei verfügbare Grove-Street-Mitglieder an. **Nimm sie zu einer kleinen feindlichen Gangbegegnung mit und kämpf mit ihnen**. Bring Überlebende zur Grove Street zurück."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "gta-iv-perestroika-show": {
    "definition": {
      "id": "gta-iv-perestroika-show",
      "rarity": "standard",
      "moodIds": [
        "low-energy",
        "nostalgic"
      ],
      "type": "inspiration",
      "tags": [
        "story"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 15,
      "universal": false,
      "curated": {
        "gameId": "gta",
        "installmentIds": [
          "gta-iv"
        ]
      },
      "gameGenreIds": [
        "adventure",
        "sandbox"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Hove Beach Stage",
      "objective": "Visit Perestroika in Hove Beach in **GTA IV story mode**. Sit through a cabaret show and spend some time in the neighborhood where Niko first arrived.",
      "gameObjective": "Visit Perestroika in Hove Beach in **GTA IV story mode**. Sit through a cabaret show and spend some time in the neighborhood where Niko first arrived."
    },
    "translations": {
      "en": {
        "name": "Hove Beach Stage",
        "objective": "Visit Perestroika in Hove Beach in **GTA IV story mode**. Sit through a cabaret show and spend some time in the neighborhood where Niko first arrived.",
        "gameObjective": "Visit Perestroika in Hove Beach in **GTA IV story mode**. Sit through a cabaret show and spend some time in the neighborhood where Niko first arrived."
      },
      "de": {
        "name": "Bühne in Hove Beach",
        "objective": "Besuche im **Storymodus von GTA IV** die Perestroika in Hove Beach. Schau dir eine Kabarettvorstellung an und bleib noch im Viertel von Nikos Ankunft.",
        "gameObjective": "Besuche im **Storymodus von GTA IV** die Perestroika in Hove Beach. Schau dir eine Kabarettvorstellung an und bleib noch im Viertel von Nikos Ankunft."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "gta-iv-carwash-return": {
    "definition": {
      "id": "gta-iv-carwash-return",
      "rarity": "standard",
      "moodIds": [
        "relax",
        "overwhelmed"
      ],
      "type": "objective",
      "tags": [
        "driving"
      ],
      "minimumDurationMinutes": 2,
      "suggestedDurationMinutes": 10,
      "universal": false,
      "curated": {
        "gameId": "gta",
        "installmentIds": [
          "gta-iv"
        ]
      },
      "gameGenreIds": [
        "adventure",
        "sandbox"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Wash the City Off",
      "objective": "With a dirty car in **GTA IV story mode**, drive to an available car wash. **Complete the wash and park the cleaned car at your safehouse**.",
      "gameObjective": "With a dirty car in **GTA IV story mode**, drive to an available car wash. **Complete the wash and park the cleaned car at your safehouse**."
    },
    "translations": {
      "en": {
        "name": "Wash the City Off",
        "objective": "With a dirty car in **GTA IV story mode**, drive to an available car wash. **Complete the wash and park the cleaned car at your safehouse**.",
        "gameObjective": "With a dirty car in **GTA IV story mode**, drive to an available car wash. **Complete the wash and park the cleaned car at your safehouse**."
      },
      "de": {
        "name": "Die Stadt abwaschen",
        "objective": "Fahr im **Storymodus von GTA IV** mit schmutzigem Auto zu einer verfügbaren Waschanlage. **Lass es waschen und park den sauberen Wagen bei deiner Unterkunft**.",
        "gameObjective": "Fahr im **Storymodus von GTA IV** mit schmutzigem Auto zu einer verfügbaren Waschanlage. **Lass es waschen und park den sauberen Wagen bei deiner Unterkunft**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "gta-iv-burger-health": {
    "definition": {
      "id": "gta-iv-burger-health",
      "rarity": "standard",
      "moodIds": [
        "low-energy",
        "overwhelmed"
      ],
      "type": "objective",
      "tags": [
        "current-save"
      ],
      "minimumDurationMinutes": 2,
      "suggestedDurationMinutes": 5,
      "universal": false,
      "curated": {
        "gameId": "gta",
        "installmentIds": [
          "gta-iv"
        ]
      },
      "gameGenreIds": [
        "adventure",
        "sandbox"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Burger Shot Break",
      "objective": "If Niko is missing health in **GTA IV story mode**, walk into an open Burger Shot. **Buy and eat a meal that restores health** before returning outside.",
      "gameObjective": "If Niko is missing health in **GTA IV story mode**, walk into an open Burger Shot. **Buy and eat a meal that restores health** before returning outside."
    },
    "translations": {
      "en": {
        "name": "Burger Shot Break",
        "objective": "If Niko is missing health in **GTA IV story mode**, walk into an open Burger Shot. **Buy and eat a meal that restores health** before returning outside.",
        "gameObjective": "If Niko is missing health in **GTA IV story mode**, walk into an open Burger Shot. **Buy and eat a meal that restores health** before returning outside."
      },
      "de": {
        "name": "Pause bei Burger Shot",
        "objective": "Geh im **Storymodus von GTA IV** bei fehlender Gesundheit in einen geöffneten Burger Shot. **Kauf und iss eine Mahlzeit, die Gesundheit zurückgibt**, bevor du wieder rausgehst.",
        "gameObjective": "Geh im **Storymodus von GTA IV** bei fehlender Gesundheit in einen geöffneten Burger Shot. **Kauf und iss eine Mahlzeit, die Gesundheit zurückgibt**, bevor du wieder rausgehst."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "gta-v-pier-rides": {
    "definition": {
      "id": "gta-v-pier-rides",
      "rarity": "standard",
      "moodIds": [
        "nostalgic",
        "relax"
      ],
      "type": "inspiration",
      "tags": [
        "free-roam"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 15,
      "universal": false,
      "curated": {
        "gameId": "gta",
        "installmentIds": [
          "gta-v"
        ]
      },
      "gameGenreIds": [
        "adventure",
        "sandbox"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Del Perro Fairground",
      "objective": "Visit Del Perro Pier in **GTA V story mode** and take the fairground ride you are in the mood for. Stay around the boardwalk and enjoy Los Santos at a slower pace.",
      "gameObjective": "Visit Del Perro Pier in **GTA V story mode** and take the fairground ride you are in the mood for. Stay around the boardwalk and enjoy Los Santos at a slower pace."
    },
    "translations": {
      "en": {
        "name": "Del Perro Fairground",
        "objective": "Visit Del Perro Pier in **GTA V story mode** and take the fairground ride you are in the mood for. Stay around the boardwalk and enjoy Los Santos at a slower pace.",
        "gameObjective": "Visit Del Perro Pier in **GTA V story mode** and take the fairground ride you are in the mood for. Stay around the boardwalk and enjoy Los Santos at a slower pace."
      },
      "de": {
        "name": "Jahrmarkt in Del Perro",
        "objective": "Besuche im **Storymodus von GTA V** den Del-Perro-Pier und nimm die Jahrmarktfahrt, auf die du Lust hast. Bleib noch auf der Promenade und erlebe Los Santos etwas langsamer.",
        "gameObjective": "Besuche im **Storymodus von GTA V** den Del-Perro-Pier und nimm die Jahrmarktfahrt, auf die du Lust hast. Bleib noch auf der Promenade und erlebe Los Santos etwas langsamer."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "gta-sa-clothes-reaction": {
    "definition": {
      "id": "gta-sa-clothes-reaction",
      "rarity": "standard",
      "moodIds": [
        "curious"
      ],
      "type": "experiment",
      "tags": [
        "outfit"
      ],
      "minimumDurationMinutes": 2,
      "suggestedDurationMinutes": 15,
      "universal": false,
      "curated": {
        "gameId": "gta",
        "installmentIds": [
          "gta-sa"
        ]
      },
      "gameGenreIds": [
        "adventure",
        "sandbox"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Change CJ's Look",
      "objective": "Build an outfit at a clothing store and **check how one NPC reacts to CJ after you leave**.",
      "gameObjective": "Build an outfit at a clothing store and **check how one NPC reacts to CJ after you leave**."
    },
    "translations": {
      "en": {
        "name": "Change CJ's Look",
        "objective": "Build an outfit at a clothing store and **check how one NPC reacts to CJ after you leave**.",
        "gameObjective": "Build an outfit at a clothing store and **check how one NPC reacts to CJ after you leave**."
      },
      "de": {
        "name": "CJs neuer Look",
        "objective": "Stell in einem Kleiderladen ein Outfit zusammen und **achte draußen auf die Reaktion eines NPCs auf CJ**.",
        "gameObjective": "Stell in einem Kleiderladen ein Outfit zusammen und **achte draußen auf die Reaktion eines NPCs auf CJ**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "gta-iv-cab-ride": {
    "definition": {
      "id": "gta-iv-cab-ride",
      "rarity": "standard",
      "moodIds": [
        "relax"
      ],
      "type": "objective",
      "tags": [
        "driving"
      ],
      "minimumDurationMinutes": 2,
      "suggestedDurationMinutes": 15,
      "universal": false,
      "curated": {
        "gameId": "gta",
        "installmentIds": [
          "gta-iv"
        ]
      },
      "gameGenreIds": [
        "adventure",
        "sandbox"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "See Liberty City by Cab",
      "objective": "Call a taxi, **ride normally to a district you rarely visit, then walk to one nearby landmark**.",
      "gameObjective": "Call a taxi, **ride normally to a district you rarely visit, then walk to one nearby landmark**."
    },
    "translations": {
      "en": {
        "name": "See Liberty City by Cab",
        "objective": "Call a taxi, **ride normally to a district you rarely visit, then walk to one nearby landmark**.",
        "gameObjective": "Call a taxi, **ride normally to a district you rarely visit, then walk to one nearby landmark**."
      },
      "de": {
        "name": "Liberty City per Taxi",
        "objective": "Ruf ein Taxi, **fahr normal in einen selten besuchten Stadtteil und geh von dort zu einer Landmarke**.",
        "gameObjective": "Ruf ein Taxi, **fahr normal in einen selten besuchten Stadtteil und geh von dort zu einer Landmarke**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "gta-iv-friend-favorite": {
    "definition": {
      "id": "gta-iv-friend-favorite",
      "rarity": "standard",
      "moodIds": [
        "nostalgic"
      ],
      "type": "objective",
      "tags": [
        "story"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 20,
      "universal": false,
      "curated": {
        "gameId": "gta",
        "installmentIds": [
          "gta-iv"
        ]
      },
      "gameGenreIds": [
        "adventure",
        "sandbox"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "A Friend's Invitation",
      "objective": "Accept a call from a friend and **finish the activity they suggest without cancelling**.",
      "gameObjective": "Accept a call from a friend and **finish the activity they suggest without cancelling**."
    },
    "translations": {
      "en": {
        "name": "A Friend's Invitation",
        "objective": "Accept a call from a friend and **finish the activity they suggest without cancelling**.",
        "gameObjective": "Accept a call from a friend and **finish the activity they suggest without cancelling**."
      },
      "de": {
        "name": "Eine Einladung annehmen",
        "objective": "Nimm den Anruf eines Freundes an und **mach seine vorgeschlagene Aktivität zu Ende, ohne abzusagen**.",
        "gameObjective": "Nimm den Anruf eines Freundes an und **mach seine vorgeschlagene Aktivität zu Ende, ohne abzusagen**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "stardew-valley-pond-room-to-grow": {
    "definition": {
      "id": "stardew-valley-pond-room-to-grow",
      "rarity": "standard",
      "moodIds": [
        "progress",
        "relax"
      ],
      "type": "objective",
      "tags": [
        "farming"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 15,
      "universal": false,
      "curated": {
        "gameId": "stardew-valley",
        "installmentIds": []
      },
      "gameGenreIds": [
        "cozy",
        "simulation"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Room in the Pond",
      "objective": "In **Stardew Valley**, if an existing Fish Pond has an item request you can fill from storage, **deliver the requested items and check its new population limit**.",
      "gameObjective": "In **Stardew Valley**, if an existing Fish Pond has an item request you can fill from storage, **deliver the requested items and check its new population limit**."
    },
    "translations": {
      "en": {
        "name": "Room in the Pond",
        "objective": "In **Stardew Valley**, if an existing Fish Pond has an item request you can fill from storage, **deliver the requested items and check its new population limit**.",
        "gameObjective": "In **Stardew Valley**, if an existing Fish Pond has an item request you can fill from storage, **deliver the requested items and check its new population limit**."
      },
      "de": {
        "name": "Platz im Teich",
        "objective": "**Stardew Valley**: **Erfülle die Bitte eines vorhandenen Fischteichs und prüfe sein neues Bewohnerlimit**, wenn du die gewünschten Gegenstände schon im Lager hast.",
        "gameObjective": "**Stardew Valley**: **Erfülle die Bitte eines vorhandenen Fischteichs und prüfe sein neues Bewohnerlimit**, wenn du die gewünschten Gegenstände schon im Lager hast."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "stardew-valley-crab-pot-round": {
    "definition": {
      "id": "stardew-valley-crab-pot-round",
      "rarity": "standard",
      "moodIds": [
        "low-energy",
        "relax"
      ],
      "type": "objective",
      "tags": [
        "fishing"
      ],
      "minimumDurationMinutes": 2,
      "suggestedDurationMinutes": 10,
      "universal": false,
      "curated": {
        "gameId": "stardew-valley",
        "installmentIds": []
      },
      "gameGenreIds": [
        "cozy",
        "simulation"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Check the Pots",
      "objective": "In **Stardew Valley**, start with crab pots that already hold a catch. **Empty three pots and bait them again**. Keep whatever they caught. No particular catch is needed.",
      "gameObjective": "In **Stardew Valley**, start with crab pots that already hold a catch. **Empty three pots and bait them again**. Keep whatever they caught. No particular catch is needed."
    },
    "translations": {
      "en": {
        "name": "Check the Pots",
        "objective": "In **Stardew Valley**, start with crab pots that already hold a catch. **Empty three pots and bait them again**. Keep whatever they caught. No particular catch is needed.",
        "gameObjective": "In **Stardew Valley**, start with crab pots that already hold a catch. **Empty three pots and bait them again**. Keep whatever they caught. No particular catch is needed."
      },
      "de": {
        "name": "Reusenrunde",
        "objective": "**Stardew Valley**: Starte bei Reusen, die schon einen Fang enthalten. **Leere drei Reusen und bestücke sie wieder mit Ködern**. Behalte ihre Fänge. Eine bestimmte Art brauchst du nicht.",
        "gameObjective": "**Stardew Valley**: Starte bei Reusen, die schon einen Fang enthalten. **Leere drei Reusen und bestücke sie wieder mit Ködern**. Behalte ihre Fänge. Eine bestimmte Art brauchst du nicht."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "stardew-valley-slime-hutch-water": {
    "definition": {
      "id": "stardew-valley-slime-hutch-water",
      "rarity": "standard",
      "moodIds": [
        "low-energy",
        "overwhelmed"
      ],
      "type": "objective",
      "tags": [
        "animals"
      ],
      "minimumDurationMinutes": 2,
      "suggestedDurationMinutes": 10,
      "universal": false,
      "curated": {
        "gameId": "stardew-valley",
        "installmentIds": []
      },
      "gameGenreIds": [
        "cozy",
        "simulation"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Water for the Slimes",
      "objective": "In **Stardew Valley**, if your Slime Hutch already has fences keeping the slimes away from its four water troughs, **fill the empty troughs with your watering can**. Stay on the safe side of the fence.",
      "gameObjective": "In **Stardew Valley**, if your Slime Hutch already has fences keeping the slimes away from its four water troughs, **fill the empty troughs with your watering can**. Stay on the safe side of the fence."
    },
    "translations": {
      "en": {
        "name": "Water for the Slimes",
        "objective": "In **Stardew Valley**, if your Slime Hutch already has fences keeping the slimes away from its four water troughs, **fill the empty troughs with your watering can**. Stay on the safe side of the fence.",
        "gameObjective": "In **Stardew Valley**, if your Slime Hutch already has fences keeping the slimes away from its four water troughs, **fill the empty troughs with your watering can**. Stay on the safe side of the fence."
      },
      "de": {
        "name": "Wasser für die Schleime",
        "objective": "**Stardew Valley**: Wenn Zäune die Schleime in deinem Schleimstall schon von den vier Wassertrögen fernhalten, **fülle die leeren Tröge mit der Gießkanne**. Bleib auf der sicheren Seite des Zauns.",
        "gameObjective": "**Stardew Valley**: Wenn Zäune die Schleime in deinem Schleimstall schon von den vier Wassertrögen fernhalten, **fülle die leeren Tröge mit der Gießkanne**. Bleib auf der sicheren Seite des Zauns."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "stardew-valley-spa-after-work": {
    "definition": {
      "id": "stardew-valley-spa-after-work",
      "rarity": "standard",
      "moodIds": [
        "relax",
        "low-energy"
      ],
      "type": "objective",
      "tags": [
        "current-save"
      ],
      "minimumDurationMinutes": 2,
      "suggestedDurationMinutes": 10,
      "universal": false,
      "curated": {
        "gameId": "stardew-valley",
        "installmentIds": []
      },
      "gameGenreIds": [
        "cozy",
        "simulation"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Back to Full Energy",
      "objective": "In **Stardew Valley**, after spending some energy and with the railroad open, visit the spa. **Stand still in the pool until your energy is full**, then leave through the changing room.",
      "gameObjective": "In **Stardew Valley**, after spending some energy and with the railroad open, visit the spa. **Stand still in the pool until your energy is full**, then leave through the changing room."
    },
    "translations": {
      "en": {
        "name": "Back to Full Energy",
        "objective": "In **Stardew Valley**, after spending some energy and with the railroad open, visit the spa. **Stand still in the pool until your energy is full**, then leave through the changing room.",
        "gameObjective": "In **Stardew Valley**, after spending some energy and with the railroad open, visit the spa. **Stand still in the pool until your energy is full**, then leave through the changing room."
      },
      "de": {
        "name": "Wieder volle Energie",
        "objective": "**Stardew Valley**: Besuche nach etwas Arbeit das Badehaus, wenn die Bahnstrecke offen ist. **Bleib im Becken stehen, bis deine Energie voll ist**, und geh dann durch die Umkleide hinaus.",
        "gameObjective": "**Stardew Valley**: Besuche nach etwas Arbeit das Badehaus, wenn die Bahnstrecke offen ist. **Bleib im Becken stehen, bis deine Energie voll ist**, und geh dann durch die Umkleide hinaus."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "stardew-valley-mine-elevator-exit": {
    "definition": {
      "id": "stardew-valley-mine-elevator-exit",
      "rarity": "standard",
      "moodIds": [
        "challenge"
      ],
      "type": "challenge",
      "tags": [
        "one-life"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 20,
      "universal": false,
      "curated": {
        "gameId": "stardew-valley",
        "installmentIds": []
      },
      "gameGenreIds": [
        "cozy",
        "simulation"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Five Floors, Then Home",
      "objective": "From an unlocked mine elevator floor, **reach the next elevator stop without eating**. Stop after three attempts if the mine wins.",
      "gameObjective": "From an unlocked mine elevator floor, **reach the next elevator stop without eating**. Stop after three attempts if the mine wins."
    },
    "translations": {
      "en": {
        "name": "Five Floors, Then Home",
        "objective": "From an unlocked mine elevator floor, **reach the next elevator stop without eating**. Stop after three attempts if the mine wins.",
        "gameObjective": "From an unlocked mine elevator floor, **reach the next elevator stop without eating**. Stop after three attempts if the mine wins."
      },
      "de": {
        "name": "Fünf Stockwerke, dann heim",
        "objective": "Starte an einem freigeschalteten Aufzug der Mine und **erreiche den nächsten Halt, ohne zu essen**. Nach drei Versuchen ist Schluss.",
        "gameObjective": "Starte an einem freigeschalteten Aufzug der Mine und **erreiche den nächsten Halt, ohne zu essen**. Nach drei Versuchen ist Schluss."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "stardew-valley-winter-seed-loop": {
    "definition": {
      "id": "stardew-valley-winter-seed-loop",
      "rarity": "standard",
      "moodIds": [
        "create"
      ],
      "type": "creation",
      "tags": [
        "farming"
      ],
      "minimumDurationMinutes": 2,
      "suggestedDurationMinutes": 15,
      "universal": false,
      "curated": {
        "gameId": "stardew-valley",
        "installmentIds": []
      },
      "gameGenreIds": [
        "cozy",
        "simulation"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "A Winter Patch",
      "objective": "In winter, **turn a foraged winter crop into Winter Seeds and plant a small patch**. Finish when the seeds are in the ground.",
      "gameObjective": "In winter, **turn a foraged winter crop into Winter Seeds and plant a small patch**. Finish when the seeds are in the ground."
    },
    "translations": {
      "en": {
        "name": "A Winter Patch",
        "objective": "In winter, **turn a foraged winter crop into Winter Seeds and plant a small patch**. Finish when the seeds are in the ground.",
        "gameObjective": "In winter, **turn a foraged winter crop into Winter Seeds and plant a small patch**. Finish when the seeds are in the ground."
      },
      "de": {
        "name": "Ein Winterbeet",
        "objective": "Verwandle im Winter eine gesammelte Winterpflanze in Wintersaat und **lege damit ein kleines Beet an**. Fertig bist du nach dem Pflanzen.",
        "gameObjective": "Verwandle im Winter eine gesammelte Winterpflanze in Wintersaat und **lege damit ein kleines Beet an**. Fertig bist du nach dem Pflanzen."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "the-sims-sims-3-town-on-foot": {
    "definition": {
      "id": "the-sims-sims-3-town-on-foot",
      "rarity": "standard",
      "moodIds": [
        "explore",
        "curious"
      ],
      "type": "objective",
      "tags": [
        "exploration",
        "current-save"
      ],
      "minimumDurationMinutes": 5,
      "suggestedDurationMinutes": 25,
      "universal": false,
      "curated": {
        "gameId": "the-sims",
        "installmentIds": [
          "sims-3"
        ]
      },
      "gameGenreIds": [
        "simulation"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Across Town",
      "objective": "In **The Sims 3**, choose a public lot with an object your Sim can use. Follow your Sim from home through the open town, **use that object at the lot, then return home**. Pick somewhere close enough for the trip back.",
      "gameObjective": "In **The Sims 3**, choose a public lot with an object your Sim can use. Follow your Sim from home through the open town, **use that object at the lot, then return home**. Pick somewhere close enough for the trip back."
    },
    "translations": {
      "en": {
        "name": "Across Town",
        "objective": "In **The Sims 3**, choose a public lot with an object your Sim can use. Follow your Sim from home through the open town, **use that object at the lot, then return home**. Pick somewhere close enough for the trip back.",
        "gameObjective": "In **The Sims 3**, choose a public lot with an object your Sim can use. Follow your Sim from home through the open town, **use that object at the lot, then return home**. Pick somewhere close enough for the trip back."
      },
      "de": {
        "name": "Quer durch die Stadt",
        "objective": "Wähle in **Die Sims 3** ein öffentliches Grundstück mit einem Gegenstand, den dein Sim benutzen kann. Begleite ihn von zu Hause durch die offene Stadt, **benutze den Gegenstand dort und kehr dann nach Hause zurück**. Such ein Ziel, von dem der Rückweg nicht zu weit ist.",
        "gameObjective": "Wähle in **Die Sims 3** ein öffentliches Grundstück mit einem Gegenstand, den dein Sim benutzen kann. Begleite ihn von zu Hause durch die offene Stadt, **benutze den Gegenstand dort und kehr dann nach Hause zurück**. Such ein Ziel, von dem der Rückweg nicht zu weit ist."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "the-sims-sims-3-matching-pattern": {
    "definition": {
      "id": "the-sims-sims-3-matching-pattern",
      "rarity": "standard",
      "moodIds": [
        "create",
        "relax"
      ],
      "type": "creation",
      "tags": [
        "decorating"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 20,
      "universal": false,
      "curated": {
        "gameId": "the-sims",
        "installmentIds": [
          "sims-3"
        ]
      },
      "gameGenreIds": [
        "simulation"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Matching Pattern",
      "objective": "In **The Sims 3**, use Create a Style on two pieces of furniture in the same room. Copy a color or pattern from one to the other, **save the room, and see both pieces together in Live Mode**.",
      "gameObjective": "In **The Sims 3**, use Create a Style on two pieces of furniture in the same room. Copy a color or pattern from one to the other, **save the room, and see both pieces together in Live Mode**."
    },
    "translations": {
      "en": {
        "name": "Matching Pattern",
        "objective": "In **The Sims 3**, use Create a Style on two pieces of furniture in the same room. Copy a color or pattern from one to the other, **save the room, and see both pieces together in Live Mode**.",
        "gameObjective": "In **The Sims 3**, use Create a Style on two pieces of furniture in the same room. Copy a color or pattern from one to the other, **save the room, and see both pieces together in Live Mode**."
      },
      "de": {
        "name": "Passendes Muster",
        "objective": "Nutze in **Die Sims 3** „Erstelle einen Stil“ für zwei Möbelstücke im selben Raum. Übertrage eine Farbe oder ein Muster von einem aufs andere, **speichere und sieh dir beide Möbelstücke im Live-Modus zusammen an**.",
        "gameObjective": "Nutze in **Die Sims 3** „Erstelle einen Stil“ für zwei Möbelstücke im selben Raum. Übertrage eine Farbe oder ein Muster von einem aufs andere, **speichere und sieh dir beide Möbelstücke im Live-Modus zusammen an**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "the-sims-sims-4-room-in-use": {
    "definition": {
      "id": "the-sims-sims-4-room-in-use",
      "rarity": "standard",
      "moodIds": [
        "create",
        "relax"
      ],
      "type": "creation",
      "tags": [
        "building",
        "decorating"
      ],
      "minimumDurationMinutes": 5,
      "suggestedDurationMinutes": 30,
      "universal": false,
      "curated": {
        "gameId": "the-sims",
        "installmentIds": [
          "sims-4"
        ]
      },
      "gameGenreIds": [
        "simulation"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Room in Use",
      "objective": "In **The Sims 4**, use Build Mode to add a small room to a household with enough space and money. Give it a door and one usable object, then **save and have a Sim use that object**.",
      "gameObjective": "In **The Sims 4**, use Build Mode to add a small room to a household with enough space and money. Give it a door and one usable object, then **save and have a Sim use that object**."
    },
    "translations": {
      "en": {
        "name": "Room in Use",
        "objective": "In **The Sims 4**, use Build Mode to add a small room to a household with enough space and money. Give it a door and one usable object, then **save and have a Sim use that object**.",
        "gameObjective": "In **The Sims 4**, use Build Mode to add a small room to a household with enough space and money. Give it a door and one usable object, then **save and have a Sim use that object**."
      },
      "de": {
        "name": "Ein Raum zum Benutzen",
        "objective": "Bau in **Die Sims 4** im Bau-Modus einen kleinen Raum an ein Haus mit genug Platz und Geld an. Setz eine Tür und einen benutzbaren Gegenstand hinein. **Speichere und lass einen Sim den Gegenstand benutzen**.",
        "gameObjective": "Bau in **Die Sims 4** im Bau-Modus einen kleinen Raum an ein Haus mit genug Platz und Geld an. Setz eine Tür und einen benutzbaren Gegenstand hinein. **Speichere und lass einen Sim den Gegenstand benutzen**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "the-sims-s3-finish-short-book": {
    "definition": {
      "id": "the-sims-s3-finish-short-book",
      "rarity": "standard",
      "moodIds": [
        "create",
        "focused"
      ],
      "type": "creation",
      "tags": [
        "story"
      ],
      "minimumDurationMinutes": 5,
      "suggestedDurationMinutes": 25,
      "universal": false,
      "curated": {
        "gameId": "the-sims",
        "installmentIds": [
          "sims-3"
        ]
      },
      "gameGenreIds": [
        "simulation"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "A Short Book",
      "objective": "In **The Sims 3**, with a computer ready, start a fiction novel or resume one that is nearly finished. Choose a title about a town event and **finish the manuscript**.",
      "gameObjective": "In **The Sims 3**, with a computer ready, start a fiction novel or resume one that is nearly finished. Choose a title about a town event and **finish the manuscript**."
    },
    "translations": {
      "en": {
        "name": "A Short Book",
        "objective": "In **The Sims 3**, with a computer ready, start a fiction novel or resume one that is nearly finished. Choose a title about a town event and **finish the manuscript**.",
        "gameObjective": "In **The Sims 3**, with a computer ready, start a fiction novel or resume one that is nearly finished. Choose a title about a town event and **finish the manuscript**."
      },
      "de": {
        "name": "Ein kurzes Buch",
        "objective": "**Die Sims 3**: Beginne an einem vorhandenen Computer einen Roman oder setzt einen fast fertigen fort. Gib ihm einen Titel über ein Ereignis in der Stadt und **stelle das Manuskript fertig**.",
        "gameObjective": "**Die Sims 3**: Beginne an einem vorhandenen Computer einen Roman oder setzt einen fast fertigen fort. Gib ihm einen Titel über ein Ereignis in der Stadt und **stelle das Manuskript fertig**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "the-sims-s3-household-portrait": {
    "definition": {
      "id": "the-sims-s3-household-portrait",
      "rarity": "special",
      "moodIds": [
        "create",
        "relax"
      ],
      "type": "creation",
      "tags": [
        "decorating"
      ],
      "minimumDurationMinutes": 5,
      "suggestedDurationMinutes": 25,
      "universal": false,
      "curated": {
        "gameId": "the-sims",
        "installmentIds": [
          "sims-3"
        ]
      },
      "gameGenreIds": [
        "simulation"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Someone for the Wall",
      "objective": "In **The Sims 3**, with Paint Portrait unlocked, an easel and another household Sim present, paint their portrait. **Hang the finished painting in the room that suits them best**, then return to Live Mode to see it there.",
      "gameObjective": "In **The Sims 3**, with Paint Portrait unlocked, an easel and another household Sim present, paint their portrait. **Hang the finished painting in the room that suits them best**, then return to Live Mode to see it there."
    },
    "translations": {
      "en": {
        "name": "Someone for the Wall",
        "objective": "In **The Sims 3**, with Paint Portrait unlocked, an easel and another household Sim present, paint their portrait. **Hang the finished painting in the room that suits them best**, then return to Live Mode to see it there.",
        "gameObjective": "In **The Sims 3**, with Paint Portrait unlocked, an easel and another household Sim present, paint their portrait. **Hang the finished painting in the room that suits them best**, then return to Live Mode to see it there."
      },
      "de": {
        "name": "Jemand für die Wand",
        "objective": "Male in **Die Sims 3** mit freigeschaltetem Porträtmalen und vorhandener Staffelei einen anderen anwesenden Haushaltssim. **Häng das fertige Bild in das Zimmer, das am besten zu ihm passt**, und schau es dir im Live-Modus dort an.",
        "gameObjective": "Male in **Die Sims 3** mit freigeschaltetem Porträtmalen und vorhandener Staffelei einen anderen anwesenden Haushaltssim. **Häng das fertige Bild in das Zimmer, das am besten zu ihm passt**, und schau es dir im Live-Modus dort an."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "the-sims-s3-self-cleaning-upgrade": {
    "definition": {
      "id": "the-sims-s3-self-cleaning-upgrade",
      "rarity": "standard",
      "moodIds": [
        "progress",
        "focused"
      ],
      "type": "objective",
      "tags": [
        "crafting"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 20,
      "universal": false,
      "curated": {
        "gameId": "the-sims",
        "installmentIds": [
          "sims-3"
        ]
      },
      "gameGenreIds": [
        "simulation"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Cleans Itself",
      "objective": "In **The Sims 3**, with the Self-Cleaning upgrade available on an owned sink or toilet, **complete that upgrade and use the fixture once**. Start with the Handiness level already unlocked.",
      "gameObjective": "In **The Sims 3**, with the Self-Cleaning upgrade available on an owned sink or toilet, **complete that upgrade and use the fixture once**. Start with the Handiness level already unlocked."
    },
    "translations": {
      "en": {
        "name": "Cleans Itself",
        "objective": "In **The Sims 3**, with the Self-Cleaning upgrade available on an owned sink or toilet, **complete that upgrade and use the fixture once**. Start with the Handiness level already unlocked.",
        "gameObjective": "In **The Sims 3**, with the Self-Cleaning upgrade available on an owned sink or toilet, **complete that upgrade and use the fixture once**. Start with the Handiness level already unlocked."
      },
      "de": {
        "name": "Putzt sich selbst",
        "objective": "**Die Sims 3**: **Bau ein eigenes Waschbecken oder eine Toilette mit verfügbarer Selbstreinigungs-Option um und benutzt es einmal**. Starte mit der schon erreichten nötigen Geschicklichkeitsstufe.",
        "gameObjective": "**Die Sims 3**: **Bau ein eigenes Waschbecken oder eine Toilette mit verfügbarer Selbstreinigungs-Option um und benutzt es einmal**. Starte mit der schon erreichten nötigen Geschicklichkeitsstufe."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "the-sims-s3-clay-sculpture": {
    "definition": {
      "id": "the-sims-s3-clay-sculpture",
      "rarity": "standard",
      "moodIds": [
        "create",
        "focused"
      ],
      "type": "creation",
      "tags": [
        "decorating"
      ],
      "minimumDurationMinutes": 5,
      "suggestedDurationMinutes": 25,
      "universal": false,
      "curated": {
        "gameId": "the-sims",
        "installmentIds": [
          "sims-3"
        ]
      },
      "gameGenreIds": [
        "simulation"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "A Lump of Clay",
      "objective": "In **The Sims 3**, with **Ambitions**, a Sculpting Station and the clay option available, **finish one clay sculpture and place it in the yard**. Keep whatever your Sim makes.",
      "gameObjective": "In **The Sims 3**, with **Ambitions**, a Sculpting Station and the clay option available, **finish one clay sculpture and place it in the yard**. Keep whatever your Sim makes."
    },
    "translations": {
      "en": {
        "name": "A Lump of Clay",
        "objective": "In **The Sims 3**, with **Ambitions**, a Sculpting Station and the clay option available, **finish one clay sculpture and place it in the yard**. Keep whatever your Sim makes.",
        "gameObjective": "In **The Sims 3**, with **Ambitions**, a Sculpting Station and the clay option available, **finish one clay sculpture and place it in the yard**. Keep whatever your Sim makes."
      },
      "de": {
        "name": "Aus einem Klumpen Ton",
        "objective": "**Die Sims 3**: **Stell mit Traumkarrieren, Bildhauerstation und verfügbarer Tonoption eine Tonskulptur fertig und stell sie in den Garten**. Behalte, was dein Sim macht.",
        "gameObjective": "**Die Sims 3**: **Stell mit Traumkarrieren, Bildhauerstation und verfügbarer Tonoption eine Tonskulptur fertig und stell sie in den Garten**. Behalte, was dein Sim macht."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "the-sims-s3-invented-toy": {
    "definition": {
      "id": "the-sims-s3-invented-toy",
      "rarity": "standard",
      "moodIds": [
        "create",
        "curious"
      ],
      "type": "experiment",
      "tags": [
        "crafting"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 20,
      "universal": false,
      "curated": {
        "gameId": "the-sims",
        "installmentIds": [
          "sims-3"
        ]
      },
      "gameGenreIds": [
        "simulation"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Made from Scrap",
      "objective": "In **The Sims 3**, with **Ambitions**, an inventing workbench, scrap and a known toy invention, **build that toy and have a household Sim play with it**.",
      "gameObjective": "In **The Sims 3**, with **Ambitions**, an inventing workbench, scrap and a known toy invention, **build that toy and have a household Sim play with it**."
    },
    "translations": {
      "en": {
        "name": "Made from Scrap",
        "objective": "In **The Sims 3**, with **Ambitions**, an inventing workbench, scrap and a known toy invention, **build that toy and have a household Sim play with it**.",
        "gameObjective": "In **The Sims 3**, with **Ambitions**, an inventing workbench, scrap and a known toy invention, **build that toy and have a household Sim play with it**."
      },
      "de": {
        "name": "Aus Schrott gemacht",
        "objective": "**Die Sims 3**: **Bau mit Traumkarrieren, Erfinderwerkbank, Schrott und einer bekannten Spielzeugerfindung dieses Spielzeug und lass einen Haushaltssim damit spielen**.",
        "gameObjective": "**Die Sims 3**: **Bau mit Traumkarrieren, Erfinderwerkbank, Schrott und einer bekannten Spielzeugerfindung dieses Spielzeug und lass einen Haushaltssim damit spielen**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "the-sims-s3-elixir-in-use": {
    "definition": {
      "id": "the-sims-s3-elixir-in-use",
      "rarity": "standard",
      "moodIds": [
        "curious",
        "focused"
      ],
      "type": "experiment",
      "tags": [
        "crafting"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 20,
      "universal": false,
      "curated": {
        "gameId": "the-sims",
        "installmentIds": [
          "sims-3"
        ]
      },
      "gameGenreIds": [
        "simulation"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Bottled Change",
      "objective": "In **The Sims 3**, with **Supernatural**, an alchemy station and the recipe and ingredients for a beneficial elixir ready, **brew it and use it on your own Sim**. Check its effect before choosing the recipe.",
      "gameObjective": "In **The Sims 3**, with **Supernatural**, an alchemy station and the recipe and ingredients for a beneficial elixir ready, **brew it and use it on your own Sim**. Check its effect before choosing the recipe."
    },
    "translations": {
      "en": {
        "name": "Bottled Change",
        "objective": "In **The Sims 3**, with **Supernatural**, an alchemy station and the recipe and ingredients for a beneficial elixir ready, **brew it and use it on your own Sim**. Check its effect before choosing the recipe.",
        "gameObjective": "In **The Sims 3**, with **Supernatural**, an alchemy station and the recipe and ingredients for a beneficial elixir ready, **brew it and use it on your own Sim**. Check its effect before choosing the recipe."
      },
      "de": {
        "name": "Veränderung in der Flasche",
        "objective": "**Die Sims 3**: **Braue mit Supernatural an der Alchemiestation ein hilfreiches Elixier und nutzt es auf deinem eigenen Sim**. Halte Rezept und Zutaten bereit und lies die Wirkung, bevor du das Rezept auswählst.",
        "gameObjective": "**Die Sims 3**: **Braue mit Supernatural an der Alchemiestation ein hilfreiches Elixier und nutzt es auf deinem eigenen Sim**. Halte Rezept und Zutaten bereit und lies die Wirkung, bevor du das Rezept auswählst."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "the-sims-s3-home-ground-mural": {
    "definition": {
      "id": "the-sims-s3-home-ground-mural",
      "rarity": "standard",
      "moodIds": [
        "create",
        "focused"
      ],
      "type": "creation",
      "tags": [
        "decorating"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 20,
      "universal": false,
      "curated": {
        "gameId": "the-sims",
        "installmentIds": [
          "sims-3"
        ]
      },
      "gameGenreIds": [
        "simulation"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "A Mural at Home",
      "objective": "In **The Sims 3**, with **University Life**, a Street Art Kit and the ground-mural option unlocked, **finish a mural on your home lot**. Pick a patch where it will stay visible.",
      "gameObjective": "In **The Sims 3**, with **University Life**, a Street Art Kit and the ground-mural option unlocked, **finish a mural on your home lot**. Pick a patch where it will stay visible."
    },
    "translations": {
      "en": {
        "name": "A Mural at Home",
        "objective": "In **The Sims 3**, with **University Life**, a Street Art Kit and the ground-mural option unlocked, **finish a mural on your home lot**. Pick a patch where it will stay visible.",
        "gameObjective": "In **The Sims 3**, with **University Life**, a Street Art Kit and the ground-mural option unlocked, **finish a mural on your home lot**. Pick a patch where it will stay visible."
      },
      "de": {
        "name": "Das Bild vorm Haus",
        "objective": "**Die Sims 3**: **Stell mit Wildes Studentenleben, Street-Art-Ausrüstung und freigeschalteter Bodenbild-Option ein Bodenbild auf deinem Wohngrundstück fertig**. Wähle eine Stelle, an der es sichtbar bleibt.",
        "gameObjective": "**Die Sims 3**: **Stell mit Wildes Studentenleben, Street-Art-Ausrüstung und freigeschalteter Bodenbild-Option ein Bodenbild auf deinem Wohngrundstück fertig**. Wähle eine Stelle, an der es sichtbar bleibt."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "the-sims-s4-woodwork-stool": {
    "definition": {
      "id": "the-sims-s4-woodwork-stool",
      "rarity": "standard",
      "moodIds": [
        "create",
        "relax"
      ],
      "type": "creation",
      "tags": [
        "crafting",
        "decorating"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 20,
      "universal": false,
      "curated": {
        "gameId": "the-sims",
        "installmentIds": [
          "sims-4"
        ]
      },
      "gameGenreIds": [
        "simulation"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "A Stool from Scratch",
      "objective": "In **The Sims 4**, with a woodworking table and the barstool recipe unlocked, **craft a barstool, place it at home and have a Sim sit on it**. Have the crafting fee ready.",
      "gameObjective": "In **The Sims 4**, with a woodworking table and the barstool recipe unlocked, **craft a barstool, place it at home and have a Sim sit on it**. Have the crafting fee ready."
    },
    "translations": {
      "en": {
        "name": "A Stool from Scratch",
        "objective": "In **The Sims 4**, with a woodworking table and the barstool recipe unlocked, **craft a barstool, place it at home and have a Sim sit on it**. Have the crafting fee ready.",
        "gameObjective": "In **The Sims 4**, with a woodworking table and the barstool recipe unlocked, **craft a barstool, place it at home and have a Sim sit on it**. Have the crafting fee ready."
      },
      "de": {
        "name": "Ein selbstgebauter Hocker",
        "objective": "**Die Sims 4**: **Stell mit Holzwerkbank und freigeschaltetem Barhocker-Rezept einen Barhocker her, stell ihn zu Hause auf und lass einen Sim darauf sitzen**. Halte die Herstellungskosten bereit.",
        "gameObjective": "**Die Sims 4**: **Stell mit Holzwerkbank und freigeschaltetem Barhocker-Rezept einen Barhocker her, stell ihn zu Hause auf und lass einen Sim darauf sitzen**. Halte die Herstellungskosten bereit."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "the-sims-s4-paint-the-view": {
    "definition": {
      "id": "the-sims-s4-paint-the-view",
      "rarity": "standard",
      "moodIds": [
        "create",
        "focused"
      ],
      "type": "creation",
      "tags": [
        "decorating"
      ],
      "minimumDurationMinutes": 5,
      "suggestedDurationMinutes": 25,
      "universal": false,
      "curated": {
        "gameId": "the-sims",
        "installmentIds": [
          "sims-4"
        ]
      },
      "gameGenreIds": [
        "simulation"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Paint This View",
      "objective": "In **The Sims 4**, with Paint from Reference unlocked and an easel ready, frame a corner of your home through the painting camera. **Finish the painting and hang it near the view it shows**.",
      "gameObjective": "In **The Sims 4**, with Paint from Reference unlocked and an easel ready, frame a corner of your home through the painting camera. **Finish the painting and hang it near the view it shows**."
    },
    "translations": {
      "en": {
        "name": "Paint This View",
        "objective": "In **The Sims 4**, with Paint from Reference unlocked and an easel ready, frame a corner of your home through the painting camera. **Finish the painting and hang it near the view it shows**.",
        "gameObjective": "In **The Sims 4**, with Paint from Reference unlocked and an easel ready, frame a corner of your home through the painting camera. **Finish the painting and hang it near the view it shows**."
      },
      "de": {
        "name": "Diese Aussicht malen",
        "objective": "**Die Sims 4**: Wähle mit freigeschaltetem Malen nach Vorlage und vorhandener Staffelei eine Ecke deines Hauses im Kameraausschnitt. **Stell das Bild fertig und häng es nahe der gezeigten Aussicht auf**.",
        "gameObjective": "**Die Sims 4**: Wähle mit freigeschaltetem Malen nach Vorlage und vorhandener Staffelei eine Ecke deines Hauses im Kameraausschnitt. **Stell das Bild fertig und häng es nahe der gezeigten Aussicht auf**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "the-sims-s4-frog-breeding-result": {
    "definition": {
      "id": "the-sims-s4-frog-breeding-result",
      "rarity": "standard",
      "moodIds": [
        "curious",
        "progress"
      ],
      "type": "objective",
      "tags": [
        "collectibles"
      ],
      "minimumDurationMinutes": 2,
      "suggestedDurationMinutes": 10,
      "universal": false,
      "curated": {
        "gameId": "the-sims",
        "installmentIds": [
          "sims-4"
        ]
      },
      "gameGenreIds": [
        "simulation"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "One More Frog",
      "objective": "In **The Sims 4**, with two breedable frogs already owned, **breed them once and check the new frog’s species in your collection**. A duplicate still counts.",
      "gameObjective": "In **The Sims 4**, with two breedable frogs already owned, **breed them once and check the new frog’s species in your collection**. A duplicate still counts."
    },
    "translations": {
      "en": {
        "name": "One More Frog",
        "objective": "In **The Sims 4**, with two breedable frogs already owned, **breed them once and check the new frog’s species in your collection**. A duplicate still counts.",
        "gameObjective": "In **The Sims 4**, with two breedable frogs already owned, **breed them once and check the new frog’s species in your collection**. A duplicate still counts."
      },
      "de": {
        "name": "Noch ein Frosch",
        "objective": "**Die Sims 4**: **Züchte mit zwei vorhandenen zuchtfähigen Fröschen einmal Nachwuchs und prüfe seine Art in deiner Sammlung**. Auch ein Duplikat zählt.",
        "gameObjective": "**Die Sims 4**: **Züchte mit zwei vorhandenen zuchtfähigen Fröschen einmal Nachwuchs und prüfe seine Art in deiner Sammlung**. Auch ein Duplikat zählt."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "the-sims-s4-flower-arrangement-table": {
    "definition": {
      "id": "the-sims-s4-flower-arrangement-table",
      "rarity": "standard",
      "moodIds": [
        "create",
        "relax"
      ],
      "type": "creation",
      "tags": [
        "decorating"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 20,
      "universal": false,
      "curated": {
        "gameId": "the-sims",
        "installmentIds": [
          "sims-4"
        ]
      },
      "gameGenreIds": [
        "simulation"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Flowers for the Table",
      "objective": "In **The Sims 4**, with **Seasons**, a flower-arranging table and an affordable arrangement recipe available, **finish one arrangement and display it on your dining table**. Use owned flowers or pay for the missing ones.",
      "gameObjective": "In **The Sims 4**, with **Seasons**, a flower-arranging table and an affordable arrangement recipe available, **finish one arrangement and display it on your dining table**. Use owned flowers or pay for the missing ones."
    },
    "translations": {
      "en": {
        "name": "Flowers for the Table",
        "objective": "In **The Sims 4**, with **Seasons**, a flower-arranging table and an affordable arrangement recipe available, **finish one arrangement and display it on your dining table**. Use owned flowers or pay for the missing ones.",
        "gameObjective": "In **The Sims 4**, with **Seasons**, a flower-arranging table and an affordable arrangement recipe available, **finish one arrangement and display it on your dining table**. Use owned flowers or pay for the missing ones."
      },
      "de": {
        "name": "Blumen für den Tisch",
        "objective": "**Die Sims 4**: **Stell mit Jahreszeiten, Blumentisch und einem bezahlbaren Rezept ein Blumengesteck fertig und stell es auf deinen Esstisch**. Nutze eigene Blumen oder bezahle die fehlenden.",
        "gameObjective": "**Die Sims 4**: **Stell mit Jahreszeiten, Blumentisch und einem bezahlbaren Rezept ein Blumengesteck fertig und stell es auf deinen Esstisch**. Nutze eigene Blumen oder bezahle die fehlenden."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "the-sims-s4-robotics-toy-bot": {
    "definition": {
      "id": "the-sims-s4-robotics-toy-bot",
      "rarity": "standard",
      "moodIds": [
        "create",
        "curious"
      ],
      "type": "experiment",
      "tags": [
        "crafting"
      ],
      "minimumDurationMinutes": 5,
      "suggestedDurationMinutes": 25,
      "universal": false,
      "curated": {
        "gameId": "the-sims",
        "installmentIds": [
          "sims-4"
        ]
      },
      "gameGenreIds": [
        "simulation"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "A Little Robot",
      "objective": "In **The Sims 4**, with **Discover University**, a robotics workstation, Toy Bot unlocked and its parts ready, **build the toy and have a household Sim play with it**.",
      "gameObjective": "In **The Sims 4**, with **Discover University**, a robotics workstation, Toy Bot unlocked and its parts ready, **build the toy and have a household Sim play with it**."
    },
    "translations": {
      "en": {
        "name": "A Little Robot",
        "objective": "In **The Sims 4**, with **Discover University**, a robotics workstation, Toy Bot unlocked and its parts ready, **build the toy and have a household Sim play with it**.",
        "gameObjective": "In **The Sims 4**, with **Discover University**, a robotics workstation, Toy Bot unlocked and its parts ready, **build the toy and have a household Sim play with it**."
      },
      "de": {
        "name": "Ein kleiner Roboter",
        "objective": "**Die Sims 4**: **Bau mit An die Uni, Robotikstation, freigeschaltetem Spielzeugroboter und vorhandenen Teilen den Roboter und lass einen Haushaltssim damit spielen**.",
        "gameObjective": "**Die Sims 4**: **Bau mit An die Uni, Robotikstation, freigeschaltetem Spielzeugroboter und vorhandenen Teilen den Roboter und lass einen Haushaltssim damit spielen**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "the-sims-s4-handmade-candle": {
    "definition": {
      "id": "the-sims-s4-handmade-candle",
      "rarity": "standard",
      "moodIds": [
        "create",
        "relax"
      ],
      "type": "creation",
      "tags": [
        "crafting",
        "decorating"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 20,
      "universal": false,
      "curated": {
        "gameId": "the-sims",
        "installmentIds": [
          "sims-4"
        ]
      },
      "gameGenreIds": [
        "simulation"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Light You Made",
      "objective": "In **The Sims 4**, with **Eco Lifestyle**, a candle-making table, wax and candle materials ready, **make one candle, place it at home and light it**.",
      "gameObjective": "In **The Sims 4**, with **Eco Lifestyle**, a candle-making table, wax and candle materials ready, **make one candle, place it at home and light it**."
    },
    "translations": {
      "en": {
        "name": "Light You Made",
        "objective": "In **The Sims 4**, with **Eco Lifestyle**, a candle-making table, wax and candle materials ready, **make one candle, place it at home and light it**.",
        "gameObjective": "In **The Sims 4**, with **Eco Lifestyle**, a candle-making table, wax and candle materials ready, **make one candle, place it at home and light it**."
      },
      "de": {
        "name": "Selbst gemachtes Licht",
        "objective": "**Die Sims 4**: **Stell mit Nachhaltig leben, Kerzentisch, Wachs und den übrigen Kerzenmaterialien eine Kerze her, stell sie zu Hause auf und zünde sie an**.",
        "gameObjective": "**Die Sims 4**: **Stell mit Nachhaltig leben, Kerzentisch, Wachs und den übrigen Kerzenmaterialien eine Kerze her, stell sie zu Hause auf und zünde sie an**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "the-sims-s3-skill-journal": {
    "definition": {
      "id": "the-sims-s3-skill-journal",
      "rarity": "standard",
      "moodIds": [
        "curious"
      ],
      "type": "experiment",
      "tags": [
        "abilities"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 20,
      "universal": false,
      "curated": {
        "gameId": "the-sims",
        "installmentIds": [
          "sims-3"
        ]
      },
      "gameGenreIds": [
        "simulation"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "A Skill Journal Goal",
      "objective": "Open a Sim's skill journal, choose one visible milestone and **play until its counter moves at least once**.",
      "gameObjective": "Open a Sim's skill journal, choose one visible milestone and **play until its counter moves at least once**."
    },
    "translations": {
      "en": {
        "name": "A Skill Journal Goal",
        "objective": "Open a Sim's skill journal, choose one visible milestone and **play until its counter moves at least once**.",
        "gameObjective": "Open a Sim's skill journal, choose one visible milestone and **play until its counter moves at least once**."
      },
      "de": {
        "name": "Ein Ziel im Fähigkeitstagebuch",
        "objective": "Öffne das Fähigkeitstagebuch eines Sims, such einen sichtbaren Meilenstein und **spiele, bis sein Zähler mindestens einmal steigt**.",
        "gameObjective": "Öffne das Fähigkeitstagebuch eines Sims, such einen sichtbaren Meilenstein und **spiele, bis sein Zähler mindestens einmal steigt**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "the-sims-s3-wish-chain": {
    "definition": {
      "id": "the-sims-s3-wish-chain",
      "rarity": "standard",
      "moodIds": [
        "focused"
      ],
      "type": "objective",
      "tags": [
        "story"
      ],
      "minimumDurationMinutes": 2,
      "suggestedDurationMinutes": 15,
      "universal": false,
      "curated": {
        "gameId": "the-sims",
        "installmentIds": [
          "sims-3"
        ]
      },
      "gameGenreIds": [
        "simulation"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Follow a Wish",
      "objective": "Promise a Sim one wish that appears during play and **fulfill it before choosing another wish**.",
      "gameObjective": "Promise a Sim one wish that appears during play and **fulfill it before choosing another wish**."
    },
    "translations": {
      "en": {
        "name": "Follow a Wish",
        "objective": "Promise a Sim one wish that appears during play and **fulfill it before choosing another wish**.",
        "gameObjective": "Promise a Sim one wish that appears during play and **fulfill it before choosing another wish**."
      },
      "de": {
        "name": "Einem Wunsch folgen",
        "objective": "Versprich einem Sim einen Wunsch, der im Spiel auftaucht, und **erfülle ihn, bevor du einen neuen auswählst**.",
        "gameObjective": "Versprich einem Sim einen Wunsch, der im Spiel auftaucht, und **erfülle ihn, bevor du einen neuen auswählst**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "the-sims-s3-cemetery-story": {
    "definition": {
      "id": "the-sims-s3-cemetery-story",
      "rarity": "standard",
      "moodIds": [
        "explore"
      ],
      "type": "objective",
      "tags": [
        "story"
      ],
      "minimumDurationMinutes": 2,
      "suggestedDurationMinutes": 15,
      "universal": false,
      "curated": {
        "gameId": "the-sims",
        "installmentIds": [
          "sims-3"
        ]
      },
      "gameGenreIds": [
        "simulation"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Read the Town's Past",
      "objective": "Visit the town cemetery and **read three different gravestones**. Pick one name to remember when you return to town.",
      "gameObjective": "Visit the town cemetery and **read three different gravestones**. Pick one name to remember when you return to town."
    },
    "translations": {
      "en": {
        "name": "Read the Town's Past",
        "objective": "Visit the town cemetery and **read three different gravestones**. Pick one name to remember when you return to town.",
        "gameObjective": "Visit the town cemetery and **read three different gravestones**. Pick one name to remember when you return to town."
      },
      "de": {
        "name": "Die Geschichte der Stadt",
        "objective": "Besuche den Friedhof und **lies drei verschiedene Grabsteine**. Merk dir einen Namen für den Rückweg in die Stadt.",
        "gameObjective": "Besuche den Friedhof und **lies drei verschiedene Grabsteine**. Merk dir einen Namen für den Rückweg in die Stadt."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "the-sims-s4-emotion-room": {
    "definition": {
      "id": "the-sims-s4-emotion-room",
      "rarity": "standard",
      "moodIds": [
        "create"
      ],
      "type": "creation",
      "tags": [
        "decorating"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 20,
      "universal": false,
      "curated": {
        "gameId": "the-sims",
        "installmentIds": [
          "sims-4"
        ]
      },
      "gameGenreIds": [
        "simulation"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "A Room with a Mood",
      "objective": "Build a small corner around one emotion-enhancing object and **use it until your Sim's emotion changes**.",
      "gameObjective": "Build a small corner around one emotion-enhancing object and **use it until your Sim's emotion changes**."
    },
    "translations": {
      "en": {
        "name": "A Room with a Mood",
        "objective": "Build a small corner around one emotion-enhancing object and **use it until your Sim's emotion changes**.",
        "gameObjective": "Build a small corner around one emotion-enhancing object and **use it until your Sim's emotion changes**."
      },
      "de": {
        "name": "Ein Raum für eine Stimmung",
        "objective": "Richte eine kleine Ecke um ein Objekt mit Stimmungswirkung ein und **benutze sie, bis sich die Emotion deines Sims ändert**.",
        "gameObjective": "Richte eine kleine Ecke um ein Objekt mit Stimmungswirkung ein und **benutze sie, bis sich die Emotion deines Sims ändert**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "the-sims-s4-neighborhood-stories": {
    "definition": {
      "id": "the-sims-s4-neighborhood-stories",
      "rarity": "standard",
      "moodIds": [
        "curious"
      ],
      "type": "objective",
      "tags": [
        "story"
      ],
      "minimumDurationMinutes": 2,
      "suggestedDurationMinutes": 15,
      "universal": false,
      "curated": {
        "gameId": "the-sims",
        "installmentIds": [
          "sims-4"
        ]
      },
      "gameGenreIds": [
        "simulation"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "What Happened Next Door?",
      "objective": "If Neighborhood Stories is enabled, **check the mailbox for one update about another household, then visit that household**.",
      "gameObjective": "If Neighborhood Stories is enabled, **check the mailbox for one update about another household, then visit that household**."
    },
    "translations": {
      "en": {
        "name": "What Happened Next Door?",
        "objective": "If Neighborhood Stories is enabled, **check the mailbox for one update about another household, then visit that household**.",
        "gameObjective": "If Neighborhood Stories is enabled, **check the mailbox for one update about another household, then visit that household**."
      },
      "de": {
        "name": "Was ist nebenan passiert?",
        "objective": "Wenn Nachbarschaftsgeschichten aktiv sind, **lies am Briefkasten ein Update über einen anderen Haushalt und besuch ihn danach**.",
        "gameObjective": "Wenn Nachbarschaftsgeschichten aktiv sind, **lies am Briefkasten ein Update über einen anderen Haushalt und besuch ihn danach**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "the-sims-s4-gallery-remix": {
    "definition": {
      "id": "the-sims-s4-gallery-remix",
      "rarity": "standard",
      "moodIds": [
        "create"
      ],
      "type": "creation",
      "tags": [
        "building"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 20,
      "universal": false,
      "curated": {
        "gameId": "the-sims",
        "installmentIds": [
          "sims-4"
        ]
      },
      "gameGenreIds": [
        "simulation"
      ],
      "connectionModeIds": [
        "online"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Remix One Room",
      "objective": "Download or place a Gallery room and **replace one whole feature with your own idea before using it in live mode**.",
      "gameObjective": "Download or place a Gallery room and **replace one whole feature with your own idea before using it in live mode**."
    },
    "translations": {
      "en": {
        "name": "Remix One Room",
        "objective": "Download or place a Gallery room and **replace one whole feature with your own idea before using it in live mode**.",
        "gameObjective": "Download or place a Gallery room and **replace one whole feature with your own idea before using it in live mode**."
      },
      "de": {
        "name": "Ein Zimmer neu mischen",
        "objective": "Platziere ein Zimmer aus der Galerie und **ändere einen ganzen Bereich nach deiner Idee**, bevor du es im Live-Modus nutzt.",
        "gameObjective": "Platziere ein Zimmer aus der Galerie und **ändere einen ganzen Bereich nach deiner Idee**, bevor du es im Live-Modus nutzt."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "animal-crossing-nh-bait-at-the-pier": {
    "definition": {
      "id": "animal-crossing-nh-bait-at-the-pier",
      "rarity": "standard",
      "moodIds": [
        "relax",
        "curious"
      ],
      "type": "objective",
      "tags": [
        "fishing",
        "crafting"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 15,
      "universal": false,
      "curated": {
        "gameId": "animal-crossing",
        "installmentIds": []
      },
      "gameGenreIds": [
        "cozy",
        "simulation"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Bait by the Pier",
      "objective": "In **Animal Crossing: New Horizons**, with a shovel and fishing rod ready, dig up three manila clams and craft them into bait. **Use all three at the pier and try to catch each fish they attract**. Any catch or missed bite counts.",
      "gameObjective": "In **Animal Crossing: New Horizons**, with a shovel and fishing rod ready, dig up three manila clams and craft them into bait. **Use all three at the pier and try to catch each fish they attract**. Any catch or missed bite counts."
    },
    "translations": {
      "en": {
        "name": "Bait by the Pier",
        "objective": "In **Animal Crossing: New Horizons**, with a shovel and fishing rod ready, dig up three manila clams and craft them into bait. **Use all three at the pier and try to catch each fish they attract**. Any catch or missed bite counts.",
        "gameObjective": "In **Animal Crossing: New Horizons**, with a shovel and fishing rod ready, dig up three manila clams and craft them into bait. **Use all three at the pier and try to catch each fish they attract**. Any catch or missed bite counts."
      },
      "de": {
        "name": "Köder am Steg",
        "objective": "**Animal Crossing: New Horizons**: Grabe mit vorhandener Schaufel drei Teppichmuscheln aus und bastle daraus Köder. **Nutze alle drei am Steg und versuch, die angelockten Fische zu fangen**. Auch ein verpasster Biss zählt. Halte eine Angel bereit.",
        "gameObjective": "**Animal Crossing: New Horizons**: Grabe mit vorhandener Schaufel drei Teppichmuscheln aus und bastle daraus Köder. **Nutze alle drei am Steg und versuch, die angelockten Fische zu fangen**. Auch ein verpasster Biss zählt. Halte eine Angel bereit."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "animal-crossing-nh-fossil-outside-museum": {
    "definition": {
      "id": "animal-crossing-nh-fossil-outside-museum",
      "rarity": "standard",
      "moodIds": [
        "progress",
        "relax"
      ],
      "type": "objective",
      "tags": [
        "collectibles",
        "decorating"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 15,
      "universal": false,
      "curated": {
        "gameId": "animal-crossing",
        "installmentIds": []
      },
      "gameGenreIds": [
        "cozy",
        "simulation"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "A Fossil for Outside",
      "objective": "In **Animal Crossing: New Horizons**, with an unassessed fossil ready, ask Blathers to assess it. Donate it if it is missing. Otherwise **display that assessed spare outside the museum**. Finish after donating or placing it.",
      "gameObjective": "In **Animal Crossing: New Horizons**, with an unassessed fossil ready, ask Blathers to assess it. Donate it if it is missing. Otherwise **display that assessed spare outside the museum**. Finish after donating or placing it."
    },
    "translations": {
      "en": {
        "name": "A Fossil for Outside",
        "objective": "In **Animal Crossing: New Horizons**, with an unassessed fossil ready, ask Blathers to assess it. Donate it if it is missing. Otherwise **display that assessed spare outside the museum**. Finish after donating or placing it.",
        "gameObjective": "In **Animal Crossing: New Horizons**, with an unassessed fossil ready, ask Blathers to assess it. Donate it if it is missing. Otherwise **display that assessed spare outside the museum**. Finish after donating or placing it."
      },
      "de": {
        "name": "Ein Fossil für draußen",
        "objective": "**Animal Crossing: New Horizons**: Lass ein vorhandenes ungeprüftes Fossil von Eugen bestimmen. Spende es, falls es fehlt. Sonst **stelle dieses überzählige Fossil vor dem Museum auf**. Nach der Spende oder dem Aufstellen ist Schluss.",
        "gameObjective": "**Animal Crossing: New Horizons**: Lass ein vorhandenes ungeprüftes Fossil von Eugen bestimmen. Spende es, falls es fehlt. Sonst **stelle dieses überzählige Fossil vor dem Museum auf**. Nach der Spende oder dem Aufstellen ist Schluss."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "animal-crossing-nh-bulletin-island-sketch": {
    "definition": {
      "id": "animal-crossing-nh-bulletin-island-sketch",
      "rarity": "standard",
      "moodIds": [
        "create",
        "focused"
      ],
      "type": "creation",
      "tags": [
        "decorating"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 15,
      "universal": false,
      "curated": {
        "gameId": "animal-crossing",
        "installmentIds": []
      },
      "gameGenreIds": [
        "cozy",
        "simulation"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "On the Noticeboard",
      "objective": "In **Animal Crossing: New Horizons**, draw a small sketch of a recognizable spot on your island on the bulletin board. **Post it with a short caption**, then walk to the spot you drew.",
      "gameObjective": "In **Animal Crossing: New Horizons**, draw a small sketch of a recognizable spot on your island on the bulletin board. **Post it with a short caption**, then walk to the spot you drew."
    },
    "translations": {
      "en": {
        "name": "On the Noticeboard",
        "objective": "In **Animal Crossing: New Horizons**, draw a small sketch of a recognizable spot on your island on the bulletin board. **Post it with a short caption**, then walk to the spot you drew.",
        "gameObjective": "In **Animal Crossing: New Horizons**, draw a small sketch of a recognizable spot on your island on the bulletin board. **Post it with a short caption**, then walk to the spot you drew."
      },
      "de": {
        "name": "Am Schwarzen Brett",
        "objective": "**Animal Crossing: New Horizons**: Zeichne am Schwarzen Brett eine erkennbare Stelle deiner Insel. **Veröffentliche die Zeichnung mit einer kurzen Beschriftung** und lauf danach zu der gezeichneten Stelle.",
        "gameObjective": "**Animal Crossing: New Horizons**: Zeichne am Schwarzen Brett eine erkennbare Stelle deiner Insel. **Veröffentliche die Zeichnung mit einer kurzen Beschriftung** und lauf danach zu der gezeichneten Stelle."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "animal-crossing-nh-grow-to-the-stove": {
    "definition": {
      "id": "animal-crossing-nh-grow-to-the-stove",
      "rarity": "standard",
      "moodIds": [
        "progress",
        "relax"
      ],
      "type": "objective",
      "tags": [
        "farming",
        "cooking"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 20,
      "universal": false,
      "curated": {
        "gameId": "animal-crossing",
        "installmentIds": []
      },
      "gameGenreIds": [
        "cozy",
        "simulation"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Garden Lunch",
      "objective": "In **Animal Crossing: New Horizons**, with cooking unlocked, a kitchen and a known vegetable recipe ready, **harvest its needed vegetables, cook the dish and place it on a table**. Start with ripe crops and the other ingredients already owned.",
      "gameObjective": "In **Animal Crossing: New Horizons**, with cooking unlocked, a kitchen and a known vegetable recipe ready, **harvest its needed vegetables, cook the dish and place it on a table**. Start with ripe crops and the other ingredients already owned."
    },
    "translations": {
      "en": {
        "name": "Garden Lunch",
        "objective": "In **Animal Crossing: New Horizons**, with cooking unlocked, a kitchen and a known vegetable recipe ready, **harvest its needed vegetables, cook the dish and place it on a table**. Start with ripe crops and the other ingredients already owned.",
        "gameObjective": "In **Animal Crossing: New Horizons**, with cooking unlocked, a kitchen and a known vegetable recipe ready, **harvest its needed vegetables, cook the dish and place it on a table**. Start with ripe crops and the other ingredients already owned."
      },
      "de": {
        "name": "Mittagessen aus dem Garten",
        "objective": "**Animal Crossing: New Horizons**: **Ernte für ein bekanntes Gemüserezept, kochst das Gericht und stell es auf einen Tisch**. Starte mit freigeschaltetem Kochen, einer Küche, reifen Pflanzen und den übrigen Zutaten im Vorrat.",
        "gameObjective": "**Animal Crossing: New Horizons**: **Ernte für ein bekanntes Gemüserezept, kochst das Gericht und stell es auf einen Tisch**. Starte mit freigeschaltetem Kochen, einer Küche, reifen Pflanzen und den übrigen Zutaten im Vorrat."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "animal-crossing-nh-kappn-souvenir": {
    "definition": {
      "id": "animal-crossing-nh-kappn-souvenir",
      "rarity": "standard",
      "moodIds": [
        "explore"
      ],
      "type": "objective",
      "tags": [
        "exploration"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 20,
      "universal": false,
      "curated": {
        "gameId": "animal-crossing",
        "installmentIds": []
      },
      "gameGenreIds": [
        "cozy",
        "simulation"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Boat Tour Souvenir",
      "objective": "If Kapp'n is at the pier, take his boat tour and **bring home one thing you cannot pick up on your own island today**.",
      "gameObjective": "If Kapp'n is at the pier, take his boat tour and **bring home one thing you cannot pick up on your own island today**."
    },
    "translations": {
      "en": {
        "name": "Boat Tour Souvenir",
        "objective": "If Kapp'n is at the pier, take his boat tour and **bring home one thing you cannot pick up on your own island today**.",
        "gameObjective": "If Kapp'n is at the pier, take his boat tour and **bring home one thing you cannot pick up on your own island today**."
      },
      "de": {
        "name": "Mitbringsel von Käpten",
        "objective": "Wenn Käpten am Steg wartet, mach eine Bootstour und **bring etwas mit, das du heute auf deiner eigenen Insel nicht findest**.",
        "gameObjective": "Wenn Käpten am Steg wartet, mach eine Bootstour und **bring etwas mit, das du heute auf deiner eigenen Insel nicht findest**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "animal-crossing-nh-brewster-regular": {
    "definition": {
      "id": "animal-crossing-nh-brewster-regular",
      "rarity": "standard",
      "moodIds": [
        "relax"
      ],
      "type": "objective",
      "tags": [
        "dialogue"
      ],
      "minimumDurationMinutes": 2,
      "suggestedDurationMinutes": 10,
      "universal": false,
      "curated": {
        "gameId": "animal-crossing",
        "installmentIds": []
      },
      "gameGenreIds": [
        "cozy",
        "simulation"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Coffee and Company",
      "objective": "If Brewster's café is open, **have a coffee and speak to one museum visitor or invited character** before leaving.",
      "gameObjective": "If Brewster's café is open, **have a coffee and speak to one museum visitor or invited character** before leaving."
    },
    "translations": {
      "en": {
        "name": "Coffee and Company",
        "objective": "If Brewster's café is open, **have a coffee and speak to one museum visitor or invited character** before leaving.",
        "gameObjective": "If Brewster's café is open, **have a coffee and speak to one museum visitor or invited character** before leaving."
      },
      "de": {
        "name": "Kaffee mit Gesellschaft",
        "objective": "Wenn Kofis Café offen ist, **trink einen Kaffee und sprich mit einem Gast oder eingeladenen Charakter**, bevor du gehst.",
        "gameObjective": "Wenn Kofis Café offen ist, **trink einen Kaffee und sprich mit einem Gast oder eingeladenen Charakter**, bevor du gehst."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "zelda-breath-of-the-wild-campfire-supper": {
    "definition": {
      "id": "zelda-breath-of-the-wild-campfire-supper",
      "rarity": "standard",
      "moodIds": [
        "relax",
        "low-energy"
      ],
      "type": "objective",
      "tags": [
        "cooking",
        "no-timer"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 15,
      "universal": false,
      "curated": {
        "gameId": "zelda",
        "installmentIds": [
          "botw"
        ]
      },
      "gameGenreIds": [
        "adventure",
        "sandbox"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Campfire Supper",
      "objective": "In **Breath of the Wild**, start beside a safe cooking pot. Gather edible ingredients nearby, **cook one meal using only what you just found, and eat it beside the pot**.",
      "gameObjective": "In **Breath of the Wild**, start beside a safe cooking pot. Gather edible ingredients nearby, **cook one meal using only what you just found, and eat it beside the pot**."
    },
    "translations": {
      "en": {
        "name": "Campfire Supper",
        "objective": "In **Breath of the Wild**, start beside a safe cooking pot. Gather edible ingredients nearby, **cook one meal using only what you just found, and eat it beside the pot**.",
        "gameObjective": "In **Breath of the Wild**, start beside a safe cooking pot. Gather edible ingredients nearby, **cook one meal using only what you just found, and eat it beside the pot**."
      },
      "de": {
        "name": "Essen am Feuer",
        "objective": "Beginne in **Breath of the Wild** an einer sicheren Kochstelle. Sammle essbare Zutaten in der Nähe, **koche daraus eine Mahlzeit und iss sie an der Kochstelle**. Nutze nur, was du gerade gefunden hast.",
        "gameObjective": "Beginne in **Breath of the Wild** an einer sicheren Kochstelle. Sammle essbare Zutaten in der Nähe, **koche daraus eine Mahlzeit und iss sie an der Kochstelle**. Nutze nur, was du gerade gefunden hast."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "zelda-tears-of-the-kingdom-fuse-from-here": {
    "definition": {
      "id": "zelda-tears-of-the-kingdom-fuse-from-here",
      "rarity": "standard",
      "moodIds": [
        "progress",
        "curious"
      ],
      "type": "objective",
      "tags": [
        "crafting",
        "new-approach"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 20,
      "universal": false,
      "curated": {
        "gameId": "zelda",
        "installmentIds": [
          "totk"
        ]
      },
      "gameGenreIds": [
        "adventure",
        "sandbox"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Fuse From Here",
      "objective": "In **Tears of the Kingdom**, with Fuse unlocked, pick up a material in your current area and attach it to a weapon. **Win one ordinary fight using that fused weapon**. Choose an encounter you can already handle.",
      "gameObjective": "In **Tears of the Kingdom**, with Fuse unlocked, pick up a material in your current area and attach it to a weapon. **Win one ordinary fight using that fused weapon**. Choose an encounter you can already handle."
    },
    "translations": {
      "en": {
        "name": "Fuse From Here",
        "objective": "In **Tears of the Kingdom**, with Fuse unlocked, pick up a material in your current area and attach it to a weapon. **Win one ordinary fight using that fused weapon**. Choose an encounter you can already handle.",
        "gameObjective": "In **Tears of the Kingdom**, with Fuse unlocked, pick up a material in your current area and attach it to a weapon. **Win one ordinary fight using that fused weapon**. Choose an encounter you can already handle."
      },
      "de": {
        "name": "Fusion vor Ort",
        "objective": "Sammle in **Tears of the Kingdom** mit freigeschalteter Synthese ein Material aus deiner Umgebung und verbinde es mit einer Waffe. Such dir einen Gegner, den du gut besiegen kannst, und **gewinne den Kampf mit deiner neu fusionierten Waffe**.",
        "gameObjective": "Sammle in **Tears of the Kingdom** mit freigeschalteter Synthese ein Material aus deiner Umgebung und verbinde es mit einer Waffe. Such dir einen Gegner, den du gut besiegen kannst, und **gewinne den Kampf mit deiner neu fusionierten Waffe**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "zelda-tears-of-the-kingdom-korok-courier": {
    "definition": {
      "id": "zelda-tears-of-the-kingdom-korok-courier",
      "rarity": "standard",
      "moodIds": [
        "connect",
        "progress"
      ],
      "type": "objective",
      "tags": [
        "building",
        "traversal"
      ],
      "minimumDurationMinutes": 5,
      "suggestedDurationMinutes": 30,
      "universal": false,
      "curated": {
        "gameId": "zelda",
        "installmentIds": [
          "totk"
        ]
      },
      "gameGenreIds": [
        "adventure",
        "sandbox"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Korok Courier",
      "objective": "In **Tears of the Kingdom**, find a backpack Korok whose friend is nearby. Build a simple carrier with Ultrahand, **bring the Korok to the friend, detach it, and speak to finish the delivery**.",
      "gameObjective": "In **Tears of the Kingdom**, find a backpack Korok whose friend is nearby. Build a simple carrier with Ultrahand, **bring the Korok to the friend, detach it, and speak to finish the delivery**."
    },
    "translations": {
      "en": {
        "name": "Korok Courier",
        "objective": "In **Tears of the Kingdom**, find a backpack Korok whose friend is nearby. Build a simple carrier with Ultrahand, **bring the Korok to the friend, detach it, and speak to finish the delivery**.",
        "gameObjective": "In **Tears of the Kingdom**, find a backpack Korok whose friend is nearby. Build a simple carrier with Ultrahand, **bring the Korok to the friend, detach it, and speak to finish the delivery**."
      },
      "de": {
        "name": "Krog-Kurier",
        "objective": "Finde in **Tears of the Kingdom** einen Krog mit Rucksack, dessen Freund in der Nähe wartet. Bau mit Ultrahand ein einfaches Transportmittel und **bring den Krog zu seinem Freund**. Löse ihn vom Gefährt und sprich mit ihm, damit die Lieferung zählt.",
        "gameObjective": "Finde in **Tears of the Kingdom** einen Krog mit Rucksack, dessen Freund in der Nähe wartet. Bau mit Ultrahand ein einfaches Transportmittel und **bring den Krog zu seinem Freund**. Löse ihn vom Gefährt und sprich mit ihm, damit die Lieferung zählt."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "zelda-botw-fairy-armor-step": {
    "definition": {
      "id": "zelda-botw-fairy-armor-step",
      "rarity": "standard",
      "moodIds": [
        "progress",
        "overwhelmed"
      ],
      "type": "objective",
      "tags": [
        "outfit"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 15,
      "universal": false,
      "curated": {
        "gameId": "zelda",
        "installmentIds": [
          "botw"
        ]
      },
      "gameGenreIds": [
        "adventure",
        "sandbox"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "One Armor Upgrade",
      "objective": "In **Breath of the Wild**, with a Great Fairy Fountain already open, choose an armor piece whose upgrade materials you own. **Have the fairy upgrade it and equip it**.",
      "gameObjective": "In **Breath of the Wild**, with a Great Fairy Fountain already open, choose an armor piece whose upgrade materials you own. **Have the fairy upgrade it and equip it**."
    },
    "translations": {
      "en": {
        "name": "One Armor Upgrade",
        "objective": "In **Breath of the Wild**, with a Great Fairy Fountain already open, choose an armor piece whose upgrade materials you own. **Have the fairy upgrade it and equip it**.",
        "gameObjective": "In **Breath of the Wild**, with a Great Fairy Fountain already open, choose an armor piece whose upgrade materials you own. **Have the fairy upgrade it and equip it**."
      },
      "de": {
        "name": "Eine Rüstung verbessern",
        "objective": "**Breath of the Wild**: Wähle an einer schon geöffneten Quelle der Großen Fee ein Rüstungsteil, dessen Aufwertungsmaterial du besitzt. **Lass es verbessern und leg es an**.",
        "gameObjective": "**Breath of the Wild**: Wähle an einer schon geöffneten Quelle der Großen Fee ein Rüstungsteil, dessen Aufwertungsmaterial du besitzt. **Lass es verbessern und leg es an**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "zelda-botw-kilton-first-exchange": {
    "definition": {
      "id": "zelda-botw-kilton-first-exchange",
      "rarity": "standard",
      "moodIds": [
        "curious",
        "progress"
      ],
      "type": "objective",
      "tags": [
        "trading"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 15,
      "universal": false,
      "curated": {
        "gameId": "zelda",
        "installmentIds": [
          "botw"
        ]
      },
      "gameGenreIds": [
        "adventure",
        "sandbox"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Parts Become Mon",
      "objective": "In **Breath of the Wild**, with Kilton’s shop unlocked and already nearby after dark, **exchange spare monster parts for Mon and buy one affordable item**. Check the stock before trading.",
      "gameObjective": "In **Breath of the Wild**, with Kilton’s shop unlocked and already nearby after dark, **exchange spare monster parts for Mon and buy one affordable item**. Check the stock before trading."
    },
    "translations": {
      "en": {
        "name": "Parts Become Mon",
        "objective": "In **Breath of the Wild**, with Kilton’s shop unlocked and already nearby after dark, **exchange spare monster parts for Mon and buy one affordable item**. Check the stock before trading.",
        "gameObjective": "In **Breath of the Wild**, with Kilton’s shop unlocked and already nearby after dark, **exchange spare monster parts for Mon and buy one affordable item**. Check the stock before trading."
      },
      "de": {
        "name": "Monsterteile werden Mon",
        "objective": "**Breath of the Wild**: **Tausch nach Einbruch der Dunkelheit bei Kiltons freigeschaltetem und nahe gelegenem Laden übrige Monsterteile gegen Mon und kauf einen bezahlbaren Gegenstand**. Schau dir vorher das Angebot an.",
        "gameObjective": "**Breath of the Wild**: **Tausch nach Einbruch der Dunkelheit bei Kiltons freigeschaltetem und nahe gelegenem Laden übrige Monsterteile gegen Mon und kauf einen bezahlbaren Gegenstand**. Schau dir vorher das Angebot an."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "zelda-botw-tarrey-wood-delivery": {
    "definition": {
      "id": "zelda-botw-tarrey-wood-delivery",
      "rarity": "standard",
      "moodIds": [
        "progress",
        "focused"
      ],
      "type": "objective",
      "tags": [
        "story",
        "building"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 15,
      "universal": false,
      "curated": {
        "gameId": "zelda",
        "installmentIds": [
          "botw"
        ]
      },
      "gameGenreIds": [
        "adventure",
        "sandbox"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Wood for Tarrey Town",
      "objective": "In **Breath of the Wild**, with From the Ground Up active and Hudson currently asking for wood, **deliver the requested wood and hear his next request**. Start with the full amount already owned.",
      "gameObjective": "In **Breath of the Wild**, with From the Ground Up active and Hudson currently asking for wood, **deliver the requested wood and hear his next request**. Start with the full amount already owned."
    },
    "translations": {
      "en": {
        "name": "Wood for Tarrey Town",
        "objective": "In **Breath of the Wild**, with From the Ground Up active and Hudson currently asking for wood, **deliver the requested wood and hear his next request**. Start with the full amount already owned.",
        "gameObjective": "In **Breath of the Wild**, with From the Ground Up active and Hudson currently asking for wood, **deliver the requested wood and hear his next request**. Start with the full amount already owned."
      },
      "de": {
        "name": "Holz für Taburasa",
        "objective": "**Breath of the Wild**: **Liefere bei laufendem Aufbauspiel die von Dumsda gerade verlangte Holzmenge ab und hör dir seine nächste Bitte an**. Halte die ganze Menge schon bereit.",
        "gameObjective": "**Breath of the Wild**: **Liefere bei laufendem Aufbauspiel die von Dumsda gerade verlangte Holzmenge ab und hör dir seine nächste Bitte an**. Halte die ganze Menge schon bereit."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "zelda-totk-sundelion-recovery": {
    "definition": {
      "id": "zelda-totk-sundelion-recovery",
      "rarity": "standard",
      "moodIds": [
        "progress",
        "overwhelmed"
      ],
      "type": "objective",
      "tags": [
        "cooking"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 15,
      "universal": false,
      "curated": {
        "gameId": "zelda",
        "installmentIds": [
          "totk"
        ]
      },
      "gameGenreIds": [
        "adventure",
        "sandbox"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Hearts after the Gloom",
      "objective": "In **Tears of the Kingdom**, with gloom-damaged hearts, Sundelions and a lit pot ready, **cook a sunny dish and eat it to restore damaged hearts**. Regular missing health can wait.",
      "gameObjective": "In **Tears of the Kingdom**, with gloom-damaged hearts, Sundelions and a lit pot ready, **cook a sunny dish and eat it to restore damaged hearts**. Regular missing health can wait."
    },
    "translations": {
      "en": {
        "name": "Hearts after the Gloom",
        "objective": "In **Tears of the Kingdom**, with gloom-damaged hearts, Sundelions and a lit pot ready, **cook a sunny dish and eat it to restore damaged hearts**. Regular missing health can wait.",
        "gameObjective": "In **Tears of the Kingdom**, with gloom-damaged hearts, Sundelions and a lit pot ready, **cook a sunny dish and eat it to restore damaged hearts**. Regular missing health can wait."
      },
      "de": {
        "name": "Herzen nach dem Miasma",
        "objective": "**Tears of the Kingdom**: **Koche mit vorhandenen Sonnenfleckchen an einem brennenden Topf ein Gericht gegen Miasma und iss es, um beschädigte Herzen wiederherzustellen**. Starte mit Miasma-Schaden. Gewöhnlich fehlende Gesundheit kann warten.",
        "gameObjective": "**Tears of the Kingdom**: **Koche mit vorhandenen Sonnenfleckchen an einem brennenden Topf ein Gericht gegen Miasma und iss es, um beschädigte Herzen wiederherzustellen**. Starte mit Miasma-Schaden. Gewöhnlich fehlende Gesundheit kann warten."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "zelda-totk-sludge-clearing": {
    "definition": {
      "id": "zelda-totk-sludge-clearing",
      "rarity": "standard",
      "moodIds": [
        "progress",
        "curious"
      ],
      "type": "objective",
      "tags": [
        "abilities",
        "exploration"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 15,
      "universal": false,
      "curated": {
        "gameId": "zelda",
        "installmentIds": [
          "totk"
        ]
      },
      "gameGenreIds": [
        "adventure",
        "sandbox"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Wash the Way Clear",
      "objective": "In **Tears of the Kingdom**, before the sludge in Lanayru has been cleared through the story, find a sludge-covered object near Zora’s Domain. With Splash Fruit ready, **clean that object and inspect what was hidden**.",
      "gameObjective": "In **Tears of the Kingdom**, before the sludge in Lanayru has been cleared through the story, find a sludge-covered object near Zora’s Domain. With Splash Fruit ready, **clean that object and inspect what was hidden**."
    },
    "translations": {
      "en": {
        "name": "Wash the Way Clear",
        "objective": "In **Tears of the Kingdom**, before the sludge in Lanayru has been cleared through the story, find a sludge-covered object near Zora’s Domain. With Splash Fruit ready, **clean that object and inspect what was hidden**.",
        "gameObjective": "In **Tears of the Kingdom**, before the sludge in Lanayru has been cleared through the story, find a sludge-covered object near Zora’s Domain. With Splash Fruit ready, **clean that object and inspect what was hidden**."
      },
      "de": {
        "name": "Den Weg freispülen",
        "objective": "**Tears of the Kingdom**: Such vor der vollständigen Schlamm-Beseitigung durch die Geschichte ein schlammverdecktes Objekt nahe dem Dorf der Zoras. **Reinige es mit vorhandenen Wasserfrüchten und prüfe, was darunter verborgen war**.",
        "gameObjective": "**Tears of the Kingdom**: Such vor der vollständigen Schlamm-Beseitigung durch die Geschichte ein schlammverdecktes Objekt nahe dem Dorf der Zoras. **Reinige es mit vorhandenen Wasserfrüchten und prüfe, was darunter verborgen war**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "zelda-totk-dazzle-stal-group": {
    "definition": {
      "id": "zelda-totk-dazzle-stal-group",
      "rarity": "standard",
      "moodIds": [
        "curious",
        "focused"
      ],
      "type": "experiment",
      "tags": [
        "abilities"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 15,
      "universal": false,
      "curated": {
        "gameId": "zelda",
        "installmentIds": [
          "totk"
        ]
      },
      "gameGenreIds": [
        "adventure",
        "sandbox"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Light for the Stal",
      "objective": "In **Tears of the Kingdom**, with Dazzlefruit ready at night, find ordinary Stal enemies on the surface. **Throw one Dazzlefruit into their group and see which enemies it defeats**. Leave Stalnoxes out of this test.",
      "gameObjective": "In **Tears of the Kingdom**, with Dazzlefruit ready at night, find ordinary Stal enemies on the surface. **Throw one Dazzlefruit into their group and see which enemies it defeats**. Leave Stalnoxes out of this test."
    },
    "translations": {
      "en": {
        "name": "Light for the Stal",
        "objective": "In **Tears of the Kingdom**, with Dazzlefruit ready at night, find ordinary Stal enemies on the surface. **Throw one Dazzlefruit into their group and see which enemies it defeats**. Leave Stalnoxes out of this test.",
        "gameObjective": "In **Tears of the Kingdom**, with Dazzlefruit ready at night, find ordinary Stal enemies on the surface. **Throw one Dazzlefruit into their group and see which enemies it defeats**. Leave Stalnoxes out of this test."
      },
      "de": {
        "name": "Licht für die Knochen",
        "objective": "**Tears of the Kingdom**: Such nachts mit vorhandenen Leuchtfrüchten gewöhnliche Knochengegner an der Oberfläche. **Wirf eine Leuchtfrucht in die Gruppe und schau, welche Gegner sie besiegt**. Stalhinoxe bleiben außerhalb des Tests.",
        "gameObjective": "**Tears of the Kingdom**: Such nachts mit vorhandenen Leuchtfrüchten gewöhnliche Knochengegner an der Oberfläche. **Wirf eine Leuchtfrucht in die Gruppe und schau, welche Gegner sie besiegt**. Stalhinoxe bleiben außerhalb des Tests."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "zelda-totk-construct-core-pull": {
    "definition": {
      "id": "zelda-totk-construct-core-pull",
      "rarity": "standard",
      "moodIds": [
        "curious",
        "focused"
      ],
      "type": "experiment",
      "tags": [
        "abilities",
        "boss"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 20,
      "universal": false,
      "curated": {
        "gameId": "zelda",
        "installmentIds": [
          "totk"
        ]
      },
      "gameGenreIds": [
        "adventure",
        "sandbox"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Pull the Core",
      "objective": "In **Tears of the Kingdom**, with Ultrahand unlocked and a Flux Construct already located, **pull its glowing core block free and attack that block while its body is apart**. End after using the opening once. The whole fight is optional.",
      "gameObjective": "In **Tears of the Kingdom**, with Ultrahand unlocked and a Flux Construct already located, **pull its glowing core block free and attack that block while its body is apart**. End after using the opening once. The whole fight is optional."
    },
    "translations": {
      "en": {
        "name": "Pull the Core",
        "objective": "In **Tears of the Kingdom**, with Ultrahand unlocked and a Flux Construct already located, **pull its glowing core block free and attack that block while its body is apart**. End after using the opening once. The whole fight is optional.",
        "gameObjective": "In **Tears of the Kingdom**, with Ultrahand unlocked and a Flux Construct already located, **pull its glowing core block free and attack that block while its body is apart**. End after using the opening once. The whole fight is optional."
      },
      "de": {
        "name": "Den Kern herausziehen",
        "objective": "**Tears of the Kingdom**: **Zieh mit freigeschaltetem Ultrahand den leuchtenden Kernblock eines bereits gefundenen Blockgolems heraus und greife ihn an, während der Körper zerlegt ist**. Nach einem genutzten Zeitfenster ist Schluss. Der ganze Kampf ist optional.",
        "gameObjective": "**Tears of the Kingdom**: **Zieh mit freigeschaltetem Ultrahand den leuchtenden Kernblock eines bereits gefundenen Blockgolems heraus und greife ihn an, während der Körper zerlegt ist**. Nach einem genutzten Zeitfenster ist Schluss. Der ganze Kampf ist optional."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "zelda-totk-yunobo-rock-cut": {
    "definition": {
      "id": "zelda-totk-yunobo-rock-cut",
      "rarity": "standard",
      "moodIds": [
        "progress",
        "restless"
      ],
      "type": "objective",
      "tags": [
        "abilities"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 15,
      "universal": false,
      "curated": {
        "gameId": "zelda",
        "installmentIds": [
          "totk"
        ]
      },
      "gameGenreIds": [
        "adventure",
        "sandbox"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Through the Rubble",
      "objective": "In **Tears of the Kingdom**, with Yunobo’s sage ability unlocked and a breakable cave rock wall already found, **use his charge to open the passage and enter it**.",
      "gameObjective": "In **Tears of the Kingdom**, with Yunobo’s sage ability unlocked and a breakable cave rock wall already found, **use his charge to open the passage and enter it**."
    },
    "translations": {
      "en": {
        "name": "Through the Rubble",
        "objective": "In **Tears of the Kingdom**, with Yunobo’s sage ability unlocked and a breakable cave rock wall already found, **use his charge to open the passage and enter it**.",
        "gameObjective": "In **Tears of the Kingdom**, with Yunobo’s sage ability unlocked and a breakable cave rock wall already found, **use his charge to open the passage and enter it**."
      },
      "de": {
        "name": "Durch die Felsen",
        "objective": "**Tears of the Kingdom**: **Öffne mit Yunobos freigeschalteter Fähigkeit eine bereits gefundene zerbrechliche Felswand in einer Höhle und geh durch den Durchgang**.",
        "gameObjective": "**Tears of the Kingdom**: **Öffne mit Yunobos freigeschalteter Fähigkeit eine bereits gefundene zerbrechliche Felswand in einer Höhle und geh durch den Durchgang**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "zelda-totk-koltin-next-trade": {
    "definition": {
      "id": "zelda-totk-koltin-next-trade",
      "rarity": "standard",
      "moodIds": [
        "progress",
        "curious"
      ],
      "type": "objective",
      "tags": [
        "trading",
        "collectibles"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 15,
      "universal": false,
      "curated": {
        "gameId": "zelda",
        "installmentIds": [
          "totk"
        ]
      },
      "gameGenreIds": [
        "adventure",
        "sandbox"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Gems for Koltin",
      "objective": "In **Tears of the Kingdom**, with Koltin’s night shop already located and enough Bubbul Gems for his next offer, **make that trade and inspect the reward**.",
      "gameObjective": "In **Tears of the Kingdom**, with Koltin’s night shop already located and enough Bubbul Gems for his next offer, **make that trade and inspect the reward**."
    },
    "translations": {
      "en": {
        "name": "Gems for Koltin",
        "objective": "In **Tears of the Kingdom**, with Koltin’s night shop already located and enough Bubbul Gems for his next offer, **make that trade and inspect the reward**.",
        "gameObjective": "In **Tears of the Kingdom**, with Koltin’s night shop already located and enough Bubbul Gems for his next offer, **make that trade and inspect the reward**."
      },
      "de": {
        "name": "Kristalle für Koltin",
        "objective": "**Tears of the Kingdom**: **Tausch in Koltins bereits gefundenem Nachtladen genügend vorhandene Mayoi-Signums für sein nächstes Angebot ein und sieh dir die Belohnung an**.",
        "gameObjective": "**Tears of the Kingdom**: **Tausch in Koltins bereits gefundenem Nachtladen genügend vorhandene Mayoi-Signums für sein nächstes Angebot ein und sieh dir die Belohnung an**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "zelda-botw-master-sword-memory": {
    "definition": {
      "id": "zelda-botw-master-sword-memory",
      "rarity": "standard",
      "moodIds": [
        "nostalgic"
      ],
      "type": "objective",
      "tags": [
        "story"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 25,
      "universal": false,
      "curated": {
        "gameId": "zelda",
        "installmentIds": [
          "botw"
        ]
      },
      "gameGenreIds": [
        "adventure",
        "sandbox"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Follow a Memory",
      "objective": "Use one photo in the Sheikah Slate's memory album as a clue and **find its location without looking up a map**.",
      "gameObjective": "Use one photo in the Sheikah Slate's memory album as a clue and **find its location without looking up a map**."
    },
    "translations": {
      "en": {
        "name": "Follow a Memory",
        "objective": "Use one photo in the Sheikah Slate's memory album as a clue and **find its location without looking up a map**.",
        "gameObjective": "Use one photo in the Sheikah Slate's memory album as a clue and **find its location without looking up a map**."
      },
      "de": {
        "name": "Einer Erinnerung folgen",
        "objective": "Nimm ein Foto aus dem Erinnerungsalbum des Shiekah-Steins als Hinweis und **finde den Ort ohne externe Karte**.",
        "gameObjective": "Nimm ein Foto aus dem Erinnerungsalbum des Shiekah-Steins als Hinweis und **finde den Ort ohne externe Karte**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "crimson-desert-new-combat-chain": {
    "definition": {
      "id": "crimson-desert-new-combat-chain",
      "rarity": "standard",
      "moodIds": [
        "curious",
        "focused"
      ],
      "type": "experiment",
      "tags": [
        "abilities"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 15,
      "universal": false,
      "curated": {
        "gameId": "crimson-desert",
        "installmentIds": []
      },
      "gameGenreIds": [
        "rpg",
        "adventure"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Link Two Skills",
      "objective": "In a **Crimson Desert** fight against ordinary enemies, use two different unlocked skills one after the other. **Land both skills in the same encounter**, then finish the fight.",
      "gameObjective": "In a **Crimson Desert** fight against ordinary enemies, use two different unlocked skills one after the other. **Land both skills in the same encounter**, then finish the fight."
    },
    "translations": {
      "en": {
        "name": "Link Two Skills",
        "objective": "In a **Crimson Desert** fight against ordinary enemies, use two different unlocked skills one after the other. **Land both skills in the same encounter**, then finish the fight.",
        "gameObjective": "In a **Crimson Desert** fight against ordinary enemies, use two different unlocked skills one after the other. **Land both skills in the same encounter**, then finish the fight."
      },
      "de": {
        "name": "Zwei Skills verbinden",
        "objective": "Setz in **Crimson Desert** in einem Kampf gegen normale Gegner zwei verschiedene freigeschaltete Skills nacheinander ein. **Triff mit beiden im selben Gefecht** und beende den Kampf.",
        "gameObjective": "Setz in **Crimson Desert** in einem Kampf gegen normale Gegner zwei verschiedene freigeschaltete Skills nacheinander ein. **Triff mit beiden im selben Gefecht** und beende den Kampf."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "crimson-desert-dye-one-piece": {
    "definition": {
      "id": "crimson-desert-dye-one-piece",
      "rarity": "standard",
      "moodIds": [
        "create",
        "relax"
      ],
      "type": "creation",
      "tags": [
        "outfit"
      ],
      "minimumDurationMinutes": 2,
      "suggestedDurationMinutes": 15,
      "universal": false,
      "curated": {
        "gameId": "crimson-desert",
        "installmentIds": []
      },
      "gameGenreIds": [
        "rpg",
        "adventure"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "One Colour to Keep",
      "objective": "With the **Dyehouse unlocked in Crimson Desert** and dye already owned, recolour one equipped armour piece. **Apply the dye and leave the menu wearing it**.",
      "gameObjective": "With the **Dyehouse unlocked in Crimson Desert** and dye already owned, recolour one equipped armour piece. **Apply the dye and leave the menu wearing it**."
    },
    "translations": {
      "en": {
        "name": "One Colour to Keep",
        "objective": "With the **Dyehouse unlocked in Crimson Desert** and dye already owned, recolour one equipped armour piece. **Apply the dye and leave the menu wearing it**.",
        "gameObjective": "With the **Dyehouse unlocked in Crimson Desert** and dye already owned, recolour one equipped armour piece. **Apply the dye and leave the menu wearing it**."
      },
      "de": {
        "name": "Eine Farbe behalten",
        "objective": "Färb in **Crimson Desert mit freigeschaltetem Färber und vorhandener Farbe** ein getragenes Rüstungsteil um. **Übernimm die Farbe und verlass das Menü mit dem Teil ausgerüstet**.",
        "gameObjective": "Färb in **Crimson Desert mit freigeschaltetem Färber und vorhandener Farbe** ein getragenes Rüstungsteil um. **Übernimm die Farbe und verlass das Menü mit dem Teil ausgerüstet**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "crimson-desert-storage-adventure-kit": {
    "definition": {
      "id": "crimson-desert-storage-adventure-kit",
      "rarity": "standard",
      "moodIds": [
        "overwhelmed",
        "progress"
      ],
      "type": "objective",
      "tags": [
        "loadout"
      ],
      "minimumDurationMinutes": 2,
      "suggestedDurationMinutes": 10,
      "universal": false,
      "curated": {
        "gameId": "crimson-desert",
        "installmentIds": []
      },
      "gameGenreIds": [
        "rpg",
        "adventure"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Pack One Small Kit",
      "objective": "At **Crimson Desert private storage in Hernand or camp**, keep your usual weapon and food on you. **Store one spare armour piece and leave for the camp path**, with that item out of your carried inventory.",
      "gameObjective": "At **Crimson Desert private storage in Hernand or camp**, keep your usual weapon and food on you. **Store one spare armour piece and leave for the camp path**, with that item out of your carried inventory."
    },
    "translations": {
      "en": {
        "name": "Pack One Small Kit",
        "objective": "At **Crimson Desert private storage in Hernand or camp**, keep your usual weapon and food on you. **Store one spare armour piece and leave for the camp path**, with that item out of your carried inventory.",
        "gameObjective": "At **Crimson Desert private storage in Hernand or camp**, keep your usual weapon and food on you. **Store one spare armour piece and leave for the camp path**, with that item out of your carried inventory."
      },
      "de": {
        "name": "Ein kleines Set packen",
        "objective": "Lass an **Crimson Deserts privatem Lager in Hernand oder im Camp** deine übliche Waffe und dein Essen im Gepäck. **Lagere ein übriges Rüstungsteil ein und geh zum Campweg**, mit diesem Teil aus deinem mitgeführten Inventar.",
        "gameObjective": "Lass an **Crimson Deserts privatem Lager in Hernand oder im Camp** deine übliche Waffe und dein Essen im Gepäck. **Lagere ein übriges Rüstungsteil ein und geh zum Campweg**, mit diesem Teil aus deinem mitgeführten Inventar."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "ea-sports-fc-fc25-career-fixture": {
    "definition": {
      "id": "ea-sports-fc-fc25-career-fixture",
      "rarity": "standard",
      "moodIds": [
        "progress",
        "nostalgic"
      ],
      "type": "inspiration",
      "tags": [
        "story"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 20,
      "universal": false,
      "curated": {
        "gameId": "ea-sports-fc",
        "installmentIds": [
          "fc-25"
        ]
      },
      "gameGenreIds": [
        "sports",
        "simulation"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Next Career Match",
      "objective": "Load your **EA SPORTS FC 25 Career** save and play its next scheduled fixture. Let the season story set the pace; stop when the final whistle arrives.",
      "gameObjective": "Load your **EA SPORTS FC 25 Career** save and play its next scheduled fixture. Let the season story set the pace; stop when the final whistle arrives."
    },
    "translations": {
      "en": {
        "name": "Next Career Match",
        "objective": "Load your **EA SPORTS FC 25 Career** save and play its next scheduled fixture. Let the season story set the pace; stop when the final whistle arrives.",
        "gameObjective": "Load your **EA SPORTS FC 25 Career** save and play its next scheduled fixture. Let the season story set the pace; stop when the final whistle arrives."
      },
      "de": {
        "name": "Das nächste Karrierematch",
        "objective": "Lad deinen **EA SPORTS FC 25 Karriere**-Spielstand und spiel das nächste angesetzte Match. Lass die Saison den Ton angeben und hör beim Schlusspfiff auf.",
        "gameObjective": "Lad deinen **EA SPORTS FC 25 Karriere**-Spielstand und spiel das nächste angesetzte Match. Lass die Saison den Ton angeben und hör beim Schlusspfiff auf."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "ea-sports-fc-fc26-corner-routine": {
    "definition": {
      "id": "ea-sports-fc-fc26-corner-routine",
      "rarity": "standard",
      "moodIds": [
        "progress",
        "focused"
      ],
      "type": "objective",
      "tags": [
        "vs-bots",
        "full-match"
      ],
      "minimumDurationMinutes": 5,
      "suggestedDurationMinutes": 25,
      "universal": false,
      "curated": {
        "gameId": "ea-sports-fc",
        "installmentIds": [
          "fc-26"
        ]
      },
      "gameGenreIds": [
        "sports"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Use a Corner Routine",
      "objective": "Before an **EA SPORTS FC 26 Kick Off** match against the CPU, assign a corner routine in the set-piece menu. **Use that routine at a corner and finish the match.**",
      "gameObjective": "Before an **EA SPORTS FC 26 Kick Off** match against the CPU, assign a corner routine in the set-piece menu. **Use that routine at a corner and finish the match.**"
    },
    "translations": {
      "en": {
        "name": "Use a Corner Routine",
        "objective": "Before an **EA SPORTS FC 26 Kick Off** match against the CPU, assign a corner routine in the set-piece menu. **Use that routine at a corner and finish the match.**",
        "gameObjective": "Before an **EA SPORTS FC 26 Kick Off** match against the CPU, assign a corner routine in the set-piece menu. **Use that routine at a corner and finish the match.**"
      },
      "de": {
        "name": "Eine Ecke einstudieren",
        "objective": "Leg vor einem **EA SPORTS FC 26 Kick Off**-Match gegen die CPU im Standards-Menü eine Eckballvariante fest. **Führ sie bei einer Ecke aus und beende das Match.**",
        "gameObjective": "Leg vor einem **EA SPORTS FC 26 Kick Off**-Match gegen die CPU im Standards-Menü eine Eckballvariante fest. **Führ sie bei einer Ecke aus und beende das Match.**"
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "ea-sports-fc-fc25-role-scout-plan": {
    "definition": {
      "id": "ea-sports-fc-fc25-role-scout-plan",
      "rarity": "standard",
      "moodIds": [
        "progress",
        "focused"
      ],
      "type": "objective",
      "tags": [
        "loadout",
        "story"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 20,
      "universal": false,
      "curated": {
        "gameId": "ea-sports-fc",
        "installmentIds": [
          "fc-25"
        ]
      },
      "gameGenreIds": [
        "sports",
        "simulation"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Scout the Missing Role",
      "objective": "In **FC 25 Manager Career**, identify a position where your tactic lacks a familiar Role. **Send a scout instruction for that position and Role**, then play the next fixture with your current squad.",
      "gameObjective": "In **FC 25 Manager Career**, identify a position where your tactic lacks a familiar Role. **Send a scout instruction for that position and Role**, then play the next fixture with your current squad."
    },
    "translations": {
      "en": {
        "name": "Scout the Missing Role",
        "objective": "In **FC 25 Manager Career**, identify a position where your tactic lacks a familiar Role. **Send a scout instruction for that position and Role**, then play the next fixture with your current squad.",
        "gameObjective": "In **FC 25 Manager Career**, identify a position where your tactic lacks a familiar Role. **Send a scout instruction for that position and Role**, then play the next fixture with your current squad."
      },
      "de": {
        "name": "Die fehlende Rolle scouten",
        "objective": "Such in der **FC-25-Managerkarriere** eine Position, auf der für deine Taktik eine vertraute Rolle fehlt. **Schick einen Scout mit dieser Position und Rolle los** und spiel das nächste Match mit deinem jetzigen Team.",
        "gameObjective": "Such in der **FC-25-Managerkarriere** eine Position, auf der für deine Taktik eine vertraute Rolle fehlt. **Schick einen Scout mit dieser Position und Rolle los** und spiel das nächste Match mit deinem jetzigen Team."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "ea-sports-fc-fc25-academy-role-growth": {
    "definition": {
      "id": "ea-sports-fc-fc25-academy-role-growth",
      "rarity": "standard",
      "moodIds": [
        "progress",
        "focused"
      ],
      "type": "objective",
      "tags": [
        "story"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 20,
      "universal": false,
      "curated": {
        "gameId": "ea-sports-fc",
        "installmentIds": [
          "fc-25"
        ]
      },
      "gameGenreIds": [
        "sports",
        "simulation"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Grow into the Role",
      "objective": "In **FC 25 Manager Career**, assign an existing academy player a Development Plan for the Role you want them to learn. **Save the plan and play the next senior fixture**, without waiting for a rating increase.",
      "gameObjective": "In **FC 25 Manager Career**, assign an existing academy player a Development Plan for the Role you want them to learn. **Save the plan and play the next senior fixture**, without waiting for a rating increase."
    },
    "translations": {
      "en": {
        "name": "Grow into the Role",
        "objective": "In **FC 25 Manager Career**, assign an existing academy player a Development Plan for the Role you want them to learn. **Save the plan and play the next senior fixture**, without waiting for a rating increase.",
        "gameObjective": "In **FC 25 Manager Career**, assign an existing academy player a Development Plan for the Role you want them to learn. **Save the plan and play the next senior fixture**, without waiting for a rating increase."
      },
      "de": {
        "name": "In eine Rolle hineinwachsen",
        "objective": "Gib einem vorhandenen Nachwuchsspieler in der **FC-25-Managerkarriere** einen Entwicklungsplan für die gewünschte Rolle. **Speichere den Plan und spiel das nächste Match der ersten Mannschaft**, ohne auf einen Wertungsanstieg zu warten.",
        "gameObjective": "Gib einem vorhandenen Nachwuchsspieler in der **FC-25-Managerkarriere** einen Entwicklungsplan für die gewünschte Rolle. **Speichere den Plan und spiel das nächste Match der ersten Mannschaft**, ohne auf einen Wertungsanstieg zu warten."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "ea-sports-fc-fc26-simulation-signing": {
    "definition": {
      "id": "ea-sports-fc-fc26-simulation-signing",
      "rarity": "standard",
      "moodIds": [
        "focused",
        "progress"
      ],
      "type": "objective",
      "tags": [
        "story"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 25,
      "universal": false,
      "curated": {
        "gameId": "ea-sports-fc",
        "installmentIds": [
          "fc-26"
        ]
      },
      "gameGenreIds": [
        "sports",
        "simulation"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Scout by the Numbers",
      "objective": "In **FC 26 Manager Career with Deeper Simulation enabled**, use simulated-league statistics to select a reachable transfer target rather than overall rating alone. **Shortlist that player and play your next fixture**.",
      "gameObjective": "In **FC 26 Manager Career with Deeper Simulation enabled**, use simulated-league statistics to select a reachable transfer target rather than overall rating alone. **Shortlist that player and play your next fixture**."
    },
    "translations": {
      "en": {
        "name": "Scout by the Numbers",
        "objective": "In **FC 26 Manager Career with Deeper Simulation enabled**, use simulated-league statistics to select a reachable transfer target rather than overall rating alone. **Shortlist that player and play your next fixture**.",
        "gameObjective": "In **FC 26 Manager Career with Deeper Simulation enabled**, use simulated-league statistics to select a reachable transfer target rather than overall rating alone. **Shortlist that player and play your next fixture**."
      },
      "de": {
        "name": "Nach Zahlen scouten",
        "objective": "Wähl in der **FC-26-Managerkarriere mit aktivierter tieferer Simulation** anhand von Ligastatistiken statt nur nach GES einen erreichbaren Transferkandidaten. **Setz ihn auf die Liste und spiel dein nächstes Match**.",
        "gameObjective": "Wähl in der **FC-26-Managerkarriere mit aktivierter tieferer Simulation** anhand von Ligastatistiken statt nur nach GES einen erreichbaren Transferkandidaten. **Setz ihn auf die Liste und spiel dein nächstes Match**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "ea-sports-fc-fc27-bocce-ring-choice": {
    "definition": {
      "id": "ea-sports-fc-fc27-bocce-ring-choice",
      "rarity": "standard",
      "moodIds": [
        "curious",
        "focused"
      ],
      "type": "experiment",
      "tags": [],
      "minimumDurationMinutes": 2,
      "suggestedDurationMinutes": 15,
      "universal": false,
      "curated": {
        "gameId": "ea-sports-fc",
        "installmentIds": [
          "fc-27"
        ]
      },
      "gameGenreIds": [
        "sports"
      ],
      "connectionModeIds": [
        "online"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Ring or Target",
      "objective": "In **FC 27 The Grounds on PS5, Xbox Series, PC, or Switch 2**, play Bocce Ball. **Try sending a ball through a ring and placing another inside a target, then finish all rounds** and compare the scoring routes.",
      "gameObjective": "In **FC 27 The Grounds on PS5, Xbox Series, PC, or Switch 2**, play Bocce Ball. **Try sending a ball through a ring and placing another inside a target, then finish all rounds** and compare the scoring routes."
    },
    "translations": {
      "en": {
        "name": "Ring or Target",
        "objective": "In **FC 27 The Grounds on PS5, Xbox Series, PC, or Switch 2**, play Bocce Ball. **Try sending a ball through a ring and placing another inside a target, then finish all rounds** and compare the scoring routes.",
        "gameObjective": "In **FC 27 The Grounds on PS5, Xbox Series, PC, or Switch 2**, play Bocce Ball. **Try sending a ball through a ring and placing another inside a target, then finish all rounds** and compare the scoring routes."
      },
      "de": {
        "name": "Ring oder Ziel",
        "objective": "Spiel in **FC 27 The Grounds auf PS5, Xbox Series, PC oder Switch 2** Bocce Ball. **Probier einen Ball durch einen Ring und einen ins Zielfeld und beende alle Runden**. Vergleiche die Punktewege.",
        "gameObjective": "Spiel in **FC 27 The Grounds auf PS5, Xbox Series, PC oder Switch 2** Bocce Ball. **Probier einen Ball durch einen Ring und einen ins Zielfeld und beende alle Runden**. Vergleiche die Punktewege."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "ea-sports-fc-fc27-big-race-track": {
    "definition": {
      "id": "ea-sports-fc-fc27-big-race-track",
      "rarity": "standard",
      "moodIds": [
        "restless",
        "focused"
      ],
      "type": "objective",
      "tags": [
        "racing"
      ],
      "minimumDurationMinutes": 2,
      "suggestedDurationMinutes": 15,
      "universal": false,
      "curated": {
        "gameId": "ea-sports-fc",
        "installmentIds": [
          "fc-27"
        ]
      },
      "gameGenreIds": [
        "sports"
      ],
      "connectionModeIds": [
        "online"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Dribble the Course",
      "objective": "In **FC 27 The Grounds on PS5, Xbox Series, PC, or Switch 2**, enter The Big Race. Follow the gates with the ball and **play all three races through the results**, whatever your placing.",
      "gameObjective": "In **FC 27 The Grounds on PS5, Xbox Series, PC, or Switch 2**, enter The Big Race. Follow the gates with the ball and **play all three races through the results**, whatever your placing."
    },
    "translations": {
      "en": {
        "name": "Dribble the Course",
        "objective": "In **FC 27 The Grounds on PS5, Xbox Series, PC, or Switch 2**, enter The Big Race. Follow the gates with the ball and **play all three races through the results**, whatever your placing.",
        "gameObjective": "In **FC 27 The Grounds on PS5, Xbox Series, PC, or Switch 2**, enter The Big Race. Follow the gates with the ball and **play all three races through the results**, whatever your placing."
      },
      "de": {
        "name": "Den Kurs dribbeln",
        "objective": "Starte in **FC 27 The Grounds auf PS5, Xbox Series, PC oder Switch 2** The Big Race. Dribbel durch die Tore und **spiel alle drei Rennen bis zum Ergebnis**, unabhängig von der Platzierung.",
        "gameObjective": "Starte in **FC 27 The Grounds auf PS5, Xbox Series, PC oder Switch 2** The Big Race. Dribbel durch die Tore und **spiel alle drei Rennen bis zum Ergebnis**, unabhängig von der Platzierung."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "ea-sports-fc-fc27-two-versus-space": {
    "definition": {
      "id": "ea-sports-fc-fc27-two-versus-space",
      "rarity": "standard",
      "moodIds": [
        "curious",
        "focused"
      ],
      "type": "experiment",
      "tags": [
        "full-match"
      ],
      "minimumDurationMinutes": 2,
      "suggestedDurationMinutes": 15,
      "universal": false,
      "curated": {
        "gameId": "ea-sports-fc",
        "installmentIds": [
          "fc-27"
        ]
      },
      "gameGenreIds": [
        "sports"
      ],
      "connectionModeIds": [
        "online"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "The Keeper Is Missing",
      "objective": "In **FC 27 The Grounds on PS5, Xbox Series, PC, or Switch 2**, enter a 2v2 Small-sided match. Try a pass across the keeperless goal before shooting and **finish the match**, comparing the space with 11v11.",
      "gameObjective": "In **FC 27 The Grounds on PS5, Xbox Series, PC, or Switch 2**, enter a 2v2 Small-sided match. Try a pass across the keeperless goal before shooting and **finish the match**, comparing the space with 11v11."
    },
    "translations": {
      "en": {
        "name": "The Keeper Is Missing",
        "objective": "In **FC 27 The Grounds on PS5, Xbox Series, PC, or Switch 2**, enter a 2v2 Small-sided match. Try a pass across the keeperless goal before shooting and **finish the match**, comparing the space with 11v11.",
        "gameObjective": "In **FC 27 The Grounds on PS5, Xbox Series, PC, or Switch 2**, enter a 2v2 Small-sided match. Try a pass across the keeperless goal before shooting and **finish the match**, comparing the space with 11v11."
      },
      "de": {
        "name": "Der Keeper fehlt",
        "objective": "Starte in **FC 27 The Grounds auf PS5, Xbox Series, PC oder Switch 2** ein 2-gegen-2-Small-sided-Match. Probier vor dem Schuss einen Querpass vor dem Tor ohne Keeper und **beende das Match**. Vergleiche den Raum mit 11 gegen 11.",
        "gameObjective": "Starte in **FC 27 The Grounds auf PS5, Xbox Series, PC oder Switch 2** ein 2-gegen-2-Small-sided-Match. Probier vor dem Schuss einen Querpass vor dem Tor ohne Keeper und **beende das Match**. Vergleiche den Raum mit 11 gegen 11."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "ea-sports-fc-fc27-form-last-season": {
    "definition": {
      "id": "ea-sports-fc-fc27-form-last-season",
      "rarity": "standard",
      "moodIds": [
        "focused",
        "curious"
      ],
      "type": "experiment",
      "tags": [
        "story",
        "full-match"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 25,
      "universal": false,
      "curated": {
        "gameId": "ea-sports-fc",
        "installmentIds": [
          "fc-27"
        ]
      },
      "gameGenreIds": [
        "sports",
        "simulation"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "This Season, Last Season",
      "objective": "In an **FC 27 Manager Career with a previous season recorded in Deeper Simulation**, compare a transfer target’s old and current-season statistics. **Shortlist them or remove them, then play your next fixture**.",
      "gameObjective": "In an **FC 27 Manager Career with a previous season recorded in Deeper Simulation**, compare a transfer target’s old and current-season statistics. **Shortlist them or remove them, then play your next fixture**."
    },
    "translations": {
      "en": {
        "name": "This Season, Last Season",
        "objective": "In an **FC 27 Manager Career with a previous season recorded in Deeper Simulation**, compare a transfer target’s old and current-season statistics. **Shortlist them or remove them, then play your next fixture**.",
        "gameObjective": "In an **FC 27 Manager Career with a previous season recorded in Deeper Simulation**, compare a transfer target’s old and current-season statistics. **Shortlist them or remove them, then play your next fixture**."
      },
      "de": {
        "name": "Diese und letzte Saison",
        "objective": "Vergleiche in einer **FC-27-Managerkarriere mit erfasster Vorsaison in der tieferen Simulation** alte und aktuelle Saisonstatistiken eines Transferkandidaten. **Setz ihn auf die Liste oder streich ihn und spiel dein nächstes Match**.",
        "gameObjective": "Vergleiche in einer **FC-27-Managerkarriere mit erfasster Vorsaison in der tieferen Simulation** alte und aktuelle Saisonstatistiken eines Transferkandidaten. **Setz ihn auf die Liste oder streich ihn und spiel dein nächstes Match**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "ea-sports-fc-fc25-set-piece-plan": {
    "definition": {
      "id": "ea-sports-fc-fc25-set-piece-plan",
      "rarity": "standard",
      "moodIds": [
        "focused"
      ],
      "type": "objective",
      "tags": [
        "full-match"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 25,
      "universal": false,
      "curated": {
        "gameId": "ea-sports-fc",
        "installmentIds": [
          "fc-25"
        ]
      },
      "gameGenreIds": [
        "sports"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "A Corner Plan",
      "objective": "Before a Kick-Off match, choose one corner routine and **execute it once during the full match**.",
      "gameObjective": "Before a Kick-Off match, choose one corner routine and **execute it once during the full match**."
    },
    "translations": {
      "en": {
        "name": "A Corner Plan",
        "objective": "Before a Kick-Off match, choose one corner routine and **execute it once during the full match**.",
        "gameObjective": "Before a Kick-Off match, choose one corner routine and **execute it once during the full match**."
      },
      "de": {
        "name": "Plan für eine Ecke",
        "objective": "Wähle vor einem Anstoßmatch eine Eckballvariante und **führe sie im ganzen Match einmal aus**.",
        "gameObjective": "Wähle vor einem Anstoßmatch eine Eckballvariante und **führe sie im ganzen Match einmal aus**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "ea-sports-fc-fc26-keeper-rebound": {
    "definition": {
      "id": "ea-sports-fc-fc26-keeper-rebound",
      "rarity": "standard",
      "moodIds": [
        "focused"
      ],
      "type": "objective",
      "tags": [
        "full-match"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 25,
      "universal": false,
      "curated": {
        "gameId": "ea-sports-fc",
        "installmentIds": [
          "fc-26"
        ]
      },
      "gameGenreIds": [
        "sports"
      ],
      "connectionModeIds": [
        "online"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Follow the Rebound",
      "objective": "In an Ultimate Team Rivals match, **create one shot, then attack the goalkeeper's rebound with a second player**.",
      "gameObjective": "In an Ultimate Team Rivals match, **create one shot, then attack the goalkeeper's rebound with a second player**."
    },
    "translations": {
      "en": {
        "name": "Follow the Rebound",
        "objective": "In an Ultimate Team Rivals match, **create one shot, then attack the goalkeeper's rebound with a second player**.",
        "gameObjective": "In an Ultimate Team Rivals match, **create one shot, then attack the goalkeeper's rebound with a second player**."
      },
      "de": {
        "name": "Dem Abpraller folgen",
        "objective": "Sorge in einem Ultimate-Team-Rivals-Match **für einen Schuss und geh mit einem zweiten Spieler auf den Torwart-Abpraller**.",
        "gameObjective": "Sorge in einem Ultimate-Team-Rivals-Match **für einen Schuss und geh mit einem zweiten Spieler auf den Torwart-Abpraller**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "ea-sports-fc-fc26-youth-scout": {
    "definition": {
      "id": "ea-sports-fc-fc26-youth-scout",
      "rarity": "standard",
      "moodIds": [
        "progress"
      ],
      "type": "objective",
      "tags": [
        "story"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 20,
      "universal": false,
      "curated": {
        "gameId": "ea-sports-fc",
        "installmentIds": [
          "fc-26"
        ]
      },
      "gameGenreIds": [
        "sports"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "One Academy Prospect",
      "objective": "In Manager Career, **scout one youth prospect and make a decision to sign or pass based on the report**.",
      "gameObjective": "In Manager Career, **scout one youth prospect and make a decision to sign or pass based on the report**."
    },
    "translations": {
      "en": {
        "name": "One Academy Prospect",
        "objective": "In Manager Career, **scout one youth prospect and make a decision to sign or pass based on the report**.",
        "gameObjective": "In Manager Career, **scout one youth prospect and make a decision to sign or pass based on the report**."
      },
      "de": {
        "name": "Ein Nachwuchstalent",
        "objective": "Scoute in der Managerkarriere **ein Nachwuchstalent und entscheide anhand des Berichts über eine Verpflichtung**.",
        "gameObjective": "Scoute in der Managerkarriere **ein Nachwuchstalent und entscheide anhand des Berichts über eine Verpflichtung**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "ea-sports-fc-fc26-clubs-rush": {
    "definition": {
      "id": "ea-sports-fc-fc26-clubs-rush",
      "rarity": "standard",
      "moodIds": [
        "connect"
      ],
      "type": "objective",
      "tags": [
        "support"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 25,
      "universal": false,
      "curated": {
        "gameId": "ea-sports-fc",
        "installmentIds": [
          "fc-26"
        ]
      },
      "gameGenreIds": [
        "sports"
      ],
      "connectionModeIds": [
        "online"
      ],
      "playStyleIds": [
        "team"
      ],
      "gameBindable": true,
      "name": "Rush with a Club",
      "objective": "With another player in Clubs Rush, **finish a match after creating one chance for a teammate**.",
      "gameObjective": "With another player in Clubs Rush, **finish a match after creating one chance for a teammate**."
    },
    "translations": {
      "en": {
        "name": "Rush with a Club",
        "objective": "With another player in Clubs Rush, **finish a match after creating one chance for a teammate**.",
        "gameObjective": "With another player in Clubs Rush, **finish a match after creating one chance for a teammate**."
      },
      "de": {
        "name": "Rush im Club",
        "objective": "Beende mit einem anderen Spieler **ein Clubs-Rush-Match, in dem du einem Mitspieler eine Chance auflegst**.",
        "gameObjective": "Beende mit einem anderen Spieler **ein Clubs-Rush-Match, in dem du einem Mitspieler eine Chance auflegst**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "hotline-miami-hm2-find-a-piece": {
    "definition": {
      "id": "hotline-miami-hm2-find-a-piece",
      "rarity": "standard",
      "moodIds": [
        "explore",
        "curious"
      ],
      "type": "objective",
      "tags": [
        "collectibles"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 20,
      "universal": false,
      "curated": {
        "gameId": "hotline-miami",
        "installmentIds": [
          "hotline-miami-2"
        ]
      },
      "gameGenreIds": [
        "shooter"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Look Off the Route",
      "objective": "Choose an unlocked **Hotline Miami 2** scene with an uncollected puzzle piece. Search beyond the most direct route and **pick up the piece** before reaching the score screen.",
      "gameObjective": "Choose an unlocked **Hotline Miami 2** scene with an uncollected puzzle piece. Search beyond the most direct route and **pick up the piece** before reaching the score screen."
    },
    "translations": {
      "en": {
        "name": "Look Off the Route",
        "objective": "Choose an unlocked **Hotline Miami 2** scene with an uncollected puzzle piece. Search beyond the most direct route and **pick up the piece** before reaching the score screen.",
        "gameObjective": "Choose an unlocked **Hotline Miami 2** scene with an uncollected puzzle piece. Search beyond the most direct route and **pick up the piece** before reaching the score screen."
      },
      "de": {
        "name": "Neben der Route suchen",
        "objective": "Wähl in **Hotline Miami 2** eine freigeschaltete Szene mit einem noch nicht gefundenen Puzzleteil. Such abseits des direkten Wegs und **sammle das Teil ein**, bevor du zur Punkteübersicht gehst.",
        "gameObjective": "Wähl in **Hotline Miami 2** eine freigeschaltete Szene mit einem noch nicht gefundenen Puzzleteil. Such abseits des direkten Wegs und **sammle das Teil ein**, bevor du zur Punkteübersicht gehst."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "hotline-miami-hm1-no-gun-floor": {
    "definition": {
      "id": "hotline-miami-hm1-no-gun-floor",
      "rarity": "standard",
      "moodIds": [
        "challenge"
      ],
      "type": "challenge",
      "tags": [
        "one-weapon",
        "three-attempts"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 20,
      "universal": false,
      "curated": {
        "gameId": "hotline-miami",
        "installmentIds": [
          "hotline-miami-1"
        ]
      },
      "gameGenreIds": [
        "shooter"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Leave the Guns",
      "objective": "Clear one floor **without firing a gun, even if enemies drop one**. Stop after three attempts.",
      "gameObjective": "Clear one floor **without firing a gun, even if enemies drop one**. Stop after three attempts."
    },
    "translations": {
      "en": {
        "name": "Leave the Guns",
        "objective": "Clear one floor **without firing a gun, even if enemies drop one**. Stop after three attempts.",
        "gameObjective": "Clear one floor **without firing a gun, even if enemies drop one**. Stop after three attempts."
      },
      "de": {
        "name": "Waffen liegen lassen",
        "objective": "Räume eine Etage, **ohne zu schießen, selbst wenn Gegner Waffen fallen lassen**. Drei Versuche.",
        "gameObjective": "Räume eine Etage, **ohne zu schießen, selbst wenn Gegner Waffen fallen lassen**. Drei Versuche."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "fallout-fallout4-suppressed-test": {
    "definition": {
      "id": "fallout-fallout4-suppressed-test",
      "rarity": "standard",
      "moodIds": [
        "curious",
        "focused"
      ],
      "type": "experiment",
      "tags": [
        "crafting",
        "stealth"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 20,
      "universal": false,
      "curated": {
        "gameId": "fallout",
        "installmentIds": [
          "fallout-4"
        ]
      },
      "gameGenreIds": [
        "rpg"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Test a Suppressor",
      "objective": "If you can craft a suppressor, **fit it to a weapon and use it in one encounter without alerting the next enemy**. Compare the noise with your usual weapon.",
      "gameObjective": "If you can craft a suppressor, **fit it to a weapon and use it in one encounter without alerting the next enemy**. Compare the noise with your usual weapon."
    },
    "translations": {
      "en": {
        "name": "Test a Suppressor",
        "objective": "If you can craft a suppressor, **fit it to a weapon and use it in one encounter without alerting the next enemy**. Compare the noise with your usual weapon.",
        "gameObjective": "If you can craft a suppressor, **fit it to a weapon and use it in one encounter without alerting the next enemy**. Compare the noise with your usual weapon."
      },
      "de": {
        "name": "Schalldämpfer testen",
        "objective": "Wenn du einen Schalldämpfer bauen kannst, **montiere ihn und nutze die Waffe in einer Begegnung, ohne den nächsten Gegner aufzuschrecken**. Vergleiche sie mit deiner üblichen Waffe.",
        "gameObjective": "Wenn du einen Schalldämpfer bauen kannst, **montiere ihn und nutze die Waffe in einer Begegnung, ohne den nächsten Gegner aufzuschrecken**. Vergleiche sie mit deiner üblichen Waffe."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "fallout-fallout4-companion-reaction": {
    "definition": {
      "id": "fallout-fallout4-companion-reaction",
      "rarity": "standard",
      "moodIds": [
        "curious"
      ],
      "type": "objective",
      "tags": [
        "story",
        "dialogue"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 20,
      "universal": false,
      "curated": {
        "gameId": "fallout",
        "installmentIds": [
          "fallout-4"
        ]
      },
      "gameGenreIds": [
        "rpg",
        "adventure"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "What Does Your Companion Think?",
      "objective": "Take a companion into a quest conversation and **notice one approval or disapproval reaction to the choice you make**.",
      "gameObjective": "Take a companion into a quest conversation and **notice one approval or disapproval reaction to the choice you make**."
    },
    "translations": {
      "en": {
        "name": "What Does Your Companion Think?",
        "objective": "Take a companion into a quest conversation and **notice one approval or disapproval reaction to the choice you make**.",
        "gameObjective": "Take a companion into a quest conversation and **notice one approval or disapproval reaction to the choice you make**."
      },
      "de": {
        "name": "Was denkt dein Begleiter?",
        "objective": "Nimm einen Begleiter zu einem Questgespräch mit und **achte auf eine zustimmende oder ablehnende Reaktion auf deine Entscheidung**.",
        "gameObjective": "Nimm einen Begleiter zu einem Questgespräch mit und **achte auf eine zustimmende oder ablehnende Reaktion auf deine Entscheidung**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "fallout-fo4-vegetable-adhesive": {
    "definition": {
      "id": "fallout-fo4-vegetable-adhesive",
      "rarity": "standard",
      "moodIds": [
        "progress",
        "low-energy"
      ],
      "type": "objective",
      "tags": [
        "cooking",
        "crafting"
      ],
      "minimumDurationMinutes": 2,
      "suggestedDurationMinutes": 10,
      "universal": false,
      "curated": {
        "gameId": "fallout",
        "installmentIds": [
          "fallout-4"
        ]
      },
      "gameGenreIds": [
        "rpg",
        "shooter",
        "adventure"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Adhesive from Vegetables",
      "objective": "In **Fallout 4**, with three Corn, three Mutfruit, three Tatos and one Purified Water ready, **cook Vegetable Starch and scrap it for adhesive**. Use an available cooking station.",
      "gameObjective": "In **Fallout 4**, with three Corn, three Mutfruit, three Tatos and one Purified Water ready, **cook Vegetable Starch and scrap it for adhesive**. Use an available cooking station."
    },
    "translations": {
      "en": {
        "name": "Adhesive from Vegetables",
        "objective": "In **Fallout 4**, with three Corn, three Mutfruit, three Tatos and one Purified Water ready, **cook Vegetable Starch and scrap it for adhesive**. Use an available cooking station.",
        "gameObjective": "In **Fallout 4**, with three Corn, three Mutfruit, three Tatos and one Purified Water ready, **cook Vegetable Starch and scrap it for adhesive**. Use an available cooking station."
      },
      "de": {
        "name": "Klebstoff aus Gemüse",
        "objective": "**Fallout 4**: **Koche an einer verfügbaren Kochstation Gemüsestärke und zerlege sie zu Klebstoff**, wenn drei Mais, drei Mutabeeren, drei Tatos und einmal aufbereitetes Wasser bereitliegen.",
        "gameObjective": "**Fallout 4**: **Koche an einer verfügbaren Kochstation Gemüsestärke und zerlege sie zu Klebstoff**, wenn drei Mais, drei Mutabeeren, drei Tatos und einmal aufbereitetes Wasser bereitliegen."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "fallout-fo4-power-armor-repair": {
    "definition": {
      "id": "fallout-fo4-power-armor-repair",
      "rarity": "standard",
      "moodIds": [
        "progress",
        "overwhelmed"
      ],
      "type": "objective",
      "tags": [
        "crafting",
        "outfit"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 15,
      "universal": false,
      "curated": {
        "gameId": "fallout",
        "installmentIds": [
          "fallout-4"
        ]
      },
      "gameGenreIds": [
        "rpg",
        "shooter",
        "adventure"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "One Plate Repaired",
      "objective": "In **Fallout 4**, with power armor at a repair station and the needed materials owned, **repair one damaged armor piece, equip it and step into the suit**.",
      "gameObjective": "In **Fallout 4**, with power armor at a repair station and the needed materials owned, **repair one damaged armor piece, equip it and step into the suit**."
    },
    "translations": {
      "en": {
        "name": "One Plate Repaired",
        "objective": "In **Fallout 4**, with power armor at a repair station and the needed materials owned, **repair one damaged armor piece, equip it and step into the suit**.",
        "gameObjective": "In **Fallout 4**, with power armor at a repair station and the needed materials owned, **repair one damaged armor piece, equip it and step into the suit**."
      },
      "de": {
        "name": "Eine Platte reparieren",
        "objective": "**Fallout 4**: **Repariere an einer Power-Rüstungsstation ein beschädigtes Rüstungsteil, montiere es und steig in die Rüstung**, wenn Rüstung und nötiges Material bereitstehen.",
        "gameObjective": "**Fallout 4**: **Repariere an einer Power-Rüstungsstation ein beschädigtes Rüstungsteil, montiere es und steig in die Rüstung**, wenn Rüstung und nötiges Material bereitstehen."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "fallout-fo4-terminal-bracket-test": {
    "definition": {
      "id": "fallout-fo4-terminal-bracket-test",
      "rarity": "standard",
      "moodIds": [
        "curious",
        "focused"
      ],
      "type": "experiment",
      "tags": [
        "puzzles"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 15,
      "universal": false,
      "curated": {
        "gameId": "fallout",
        "installmentIds": [
          "fallout-4"
        ]
      },
      "gameGenreIds": [
        "rpg",
        "shooter",
        "adventure"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Between the Brackets",
      "objective": "In **Fallout 4**, at an accessible locked terminal, **use one complete bracket pair to remove a dud or reset your tries, then make a password attempt**. If no pair is present, use another nearby terminal.",
      "gameObjective": "In **Fallout 4**, at an accessible locked terminal, **use one complete bracket pair to remove a dud or reset your tries, then make a password attempt**. If no pair is present, use another nearby terminal."
    },
    "translations": {
      "en": {
        "name": "Between the Brackets",
        "objective": "In **Fallout 4**, at an accessible locked terminal, **use one complete bracket pair to remove a dud or reset your tries, then make a password attempt**. If no pair is present, use another nearby terminal.",
        "gameObjective": "In **Fallout 4**, at an accessible locked terminal, **use one complete bracket pair to remove a dud or reset your tries, then make a password attempt**. If no pair is present, use another nearby terminal."
      },
      "de": {
        "name": "Zwischen den Klammern",
        "objective": "**Fallout 4**: **Nutze an einem zugänglichen gesperrten Terminal ein vollständiges Klammerpaar zum Entfernen eines falschen Worts oder Zurücksetzen der Versuche und probiere danach ein Passwort**. Falls kein Paar da ist, nutze ein anderes nahes Terminal.",
        "gameObjective": "**Fallout 4**: **Nutze an einem zugänglichen gesperrten Terminal ein vollständiges Klammerpaar zum Entfernen eines falschen Worts oder Zurücksetzen der Versuche und probiere danach ein Passwort**. Falls kein Paar da ist, nutze ein anderes nahes Terminal."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "fallout-fo76-donation-box-aid": {
    "definition": {
      "id": "fallout-fo76-donation-box-aid",
      "rarity": "standard",
      "moodIds": [
        "progress",
        "low-energy"
      ],
      "type": "objective",
      "tags": [
        "support"
      ],
      "minimumDurationMinutes": 2,
      "suggestedDurationMinutes": 10,
      "universal": false,
      "curated": {
        "gameId": "fallout",
        "installmentIds": [
          "fallout-76"
        ]
      },
      "gameGenreIds": [
        "rpg",
        "shooter",
        "adventure"
      ],
      "connectionModeIds": [
        "online"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Leave a Starter Supply",
      "objective": "In **Fallout 76**, with spare Stimpaks or RadAway ready, visit a nearby donation box. **Leave a small stack in the box** for the next player. No one needs to collect it during your session.",
      "gameObjective": "In **Fallout 76**, with spare Stimpaks or RadAway ready, visit a nearby donation box. **Leave a small stack in the box** for the next player. No one needs to collect it during your session."
    },
    "translations": {
      "en": {
        "name": "Leave a Starter Supply",
        "objective": "In **Fallout 76**, with spare Stimpaks or RadAway ready, visit a nearby donation box. **Leave a small stack in the box** for the next player. No one needs to collect it during your session.",
        "gameObjective": "In **Fallout 76**, with spare Stimpaks or RadAway ready, visit a nearby donation box. **Leave a small stack in the box** for the next player. No one needs to collect it during your session."
      },
      "de": {
        "name": "Vorrat für den Anfang",
        "objective": "**Fallout 76**: Besuche mit übrigen Stimpaks oder RadAway eine nahe Spendenbox. **Leg einen kleinen Stapel für den nächsten Spieler hinein**. Abholen muss ihn während deiner Sitzung niemand.",
        "gameObjective": "**Fallout 76**: Besuche mit übrigen Stimpaks oder RadAway eine nahe Spendenbox. **Leg einen kleinen Stapel für den nächsten Spieler hinein**. Abholen muss ihn während deiner Sitzung niemand."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "fallout-fo76-instrument-well-tuned": {
    "definition": {
      "id": "fallout-fo76-instrument-well-tuned",
      "rarity": "standard",
      "moodIds": [
        "relax",
        "overwhelmed"
      ],
      "type": "objective",
      "tags": [
        "rhythm"
      ],
      "minimumDurationMinutes": 2,
      "suggestedDurationMinutes": 10,
      "universal": false,
      "curated": {
        "gameId": "fallout",
        "installmentIds": [
          "fallout-76"
        ]
      },
      "gameGenreIds": [
        "rpg",
        "shooter",
        "adventure"
      ],
      "connectionModeIds": [
        "online"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Get Well Tuned",
      "objective": "In **Fallout 76**, at a safe CAMP or location with an instrument, **play until the music bonus appears and check it in your Pip-Boy**.",
      "gameObjective": "In **Fallout 76**, at a safe CAMP or location with an instrument, **play until the music bonus appears and check it in your Pip-Boy**."
    },
    "translations": {
      "en": {
        "name": "Get Well Tuned",
        "objective": "In **Fallout 76**, at a safe CAMP or location with an instrument, **play until the music bonus appears and check it in your Pip-Boy**.",
        "gameObjective": "In **Fallout 76**, at a safe CAMP or location with an instrument, **play until the music bonus appears and check it in your Pip-Boy**."
      },
      "de": {
        "name": "Musik im CAMP",
        "objective": "**Fallout 76**: **Spiel in einem sicheren CAMP oder Ort an einem Instrument, bis der Musik-Bonus erscheint, und prüfe ihn im Pip-Boy**.",
        "gameObjective": "**Fallout 76**: **Spiel in einem sicheren CAMP oder Ort an einem Instrument, bis der Musik-Bonus erscheint, und prüfe ihn im Pip-Boy**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "fallout-fo76-symptomatic-recovery": {
    "definition": {
      "id": "fallout-fo76-symptomatic-recovery",
      "rarity": "standard",
      "moodIds": [
        "progress",
        "overwhelmed"
      ],
      "type": "objective",
      "tags": [
        "current-save"
      ],
      "minimumDurationMinutes": 2,
      "suggestedDurationMinutes": 10,
      "universal": false,
      "curated": {
        "gameId": "fallout",
        "installmentIds": [
          "fallout-76"
        ]
      },
      "gameGenreIds": [
        "rpg",
        "shooter",
        "adventure"
      ],
      "connectionModeIds": [
        "online"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Clear the Disease",
      "objective": "In **Fallout 76**, with a disease active and a Sympto-Matic you can use already located, **use the machine and check that the disease is gone**. No new disease is needed.",
      "gameObjective": "In **Fallout 76**, with a disease active and a Sympto-Matic you can use already located, **use the machine and check that the disease is gone**. No new disease is needed."
    },
    "translations": {
      "en": {
        "name": "Clear the Disease",
        "objective": "In **Fallout 76**, with a disease active and a Sympto-Matic you can use already located, **use the machine and check that the disease is gone**. No new disease is needed.",
        "gameObjective": "In **Fallout 76**, with a disease active and a Sympto-Matic you can use already located, **use the machine and check that the disease is gone**. No new disease is needed."
      },
      "de": {
        "name": "Die Krankheit loswerden",
        "objective": "**Fallout 76**: **Nutze mit aktiver Krankheit einen bereits gefundenen nutzbaren Sympto-Matic und prüfe, ob die Krankheit verschwunden ist**. Eine neue Krankheit brauchst du nicht.",
        "gameObjective": "**Fallout 76**: **Nutze mit aktiver Krankheit einen bereits gefundenen nutzbaren Sympto-Matic und prüfe, ob die Krankheit verschwunden ist**. Eine neue Krankheit brauchst du nicht."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "fallout-fo76-treasury-notes-bullion": {
    "definition": {
      "id": "fallout-fo76-treasury-notes-bullion",
      "rarity": "standard",
      "moodIds": [
        "progress",
        "low-energy"
      ],
      "type": "objective",
      "tags": [
        "trading"
      ],
      "minimumDurationMinutes": 2,
      "suggestedDurationMinutes": 10,
      "universal": false,
      "curated": {
        "gameId": "fallout",
        "installmentIds": [
          "fallout-76"
        ]
      },
      "gameGenreIds": [
        "rpg",
        "shooter",
        "adventure"
      ],
      "connectionModeIds": [
        "online"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Notes into Gold",
      "objective": "In **Fallout 76**, with Treasury Notes already owned and today’s exchange allowance left, **exchange some notes at a Gold Press Machine and check your Gold Bullion total**.",
      "gameObjective": "In **Fallout 76**, with Treasury Notes already owned and today’s exchange allowance left, **exchange some notes at a Gold Press Machine and check your Gold Bullion total**."
    },
    "translations": {
      "en": {
        "name": "Notes into Gold",
        "objective": "In **Fallout 76**, with Treasury Notes already owned and today’s exchange allowance left, **exchange some notes at a Gold Press Machine and check your Gold Bullion total**.",
        "gameObjective": "In **Fallout 76**, with Treasury Notes already owned and today’s exchange allowance left, **exchange some notes at a Gold Press Machine and check your Gold Bullion total**."
      },
      "de": {
        "name": "Scheine werden Gold",
        "objective": "**Fallout 76**: **Tausch mit vorhandenen Schatzscheinen und heute noch offenem Tauschkontingent einige Scheine an einem Goldautomaten und prüfe deinen Goldbarrenstand**.",
        "gameObjective": "**Fallout 76**: **Tausch mit vorhandenen Schatzscheinen und heute noch offenem Tauschkontingent einige Scheine an einem Goldautomaten und prüfe deinen Goldbarrenstand**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "fallout-fo76-legendary-scrip-trade": {
    "definition": {
      "id": "fallout-fo76-legendary-scrip-trade",
      "rarity": "standard",
      "moodIds": [
        "progress",
        "overwhelmed"
      ],
      "type": "objective",
      "tags": [
        "trading"
      ],
      "minimumDurationMinutes": 2,
      "suggestedDurationMinutes": 10,
      "universal": false,
      "curated": {
        "gameId": "fallout",
        "installmentIds": [
          "fallout-76"
        ]
      },
      "gameGenreIds": [
        "rpg",
        "shooter",
        "adventure"
      ],
      "connectionModeIds": [
        "online"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "A Spare Legendary",
      "objective": "In **Fallout 76**, with an unwanted legendary item and exchange allowance left, visit a Legendary Exchange Machine. **Trade that item for Scrip and check the new balance**.",
      "gameObjective": "In **Fallout 76**, with an unwanted legendary item and exchange allowance left, visit a Legendary Exchange Machine. **Trade that item for Scrip and check the new balance**."
    },
    "translations": {
      "en": {
        "name": "A Spare Legendary",
        "objective": "In **Fallout 76**, with an unwanted legendary item and exchange allowance left, visit a Legendary Exchange Machine. **Trade that item for Scrip and check the new balance**.",
        "gameObjective": "In **Fallout 76**, with an unwanted legendary item and exchange allowance left, visit a Legendary Exchange Machine. **Trade that item for Scrip and check the new balance**."
      },
      "de": {
        "name": "Ein übriges legendäres Teil",
        "objective": "**Fallout 76**: **Tausch an einem legendären Automaten einen nicht mehr gebrauchten legendären Gegenstand gegen Scheine und prüfe den neuen Stand**, wenn dein Tauschkontingent noch reicht.",
        "gameObjective": "**Fallout 76**: **Tausch an einem legendären Automaten einen nicht mehr gebrauchten legendären Gegenstand gegen Scheine und prüfe den neuen Stand**, wenn dein Tauschkontingent noch reicht."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "fallout-fo4-holotape-story": {
    "definition": {
      "id": "fallout-fo4-holotape-story",
      "rarity": "standard",
      "moodIds": [
        "focused"
      ],
      "type": "objective",
      "tags": [
        "story"
      ],
      "minimumDurationMinutes": 3,
      "suggestedDurationMinutes": 25,
      "universal": false,
      "curated": {
        "gameId": "fallout",
        "installmentIds": [
          "fallout-4"
        ]
      },
      "gameGenreIds": [
        "rpg",
        "adventure"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "One Voice from Before",
      "objective": "Find a holotape in an unexplored building, **listen to it fully, then locate the place or person it mentions**.",
      "gameObjective": "Find a holotape in an unexplored building, **listen to it fully, then locate the place or person it mentions**."
    },
    "translations": {
      "en": {
        "name": "One Voice from Before",
        "objective": "Find a holotape in an unexplored building, **listen to it fully, then locate the place or person it mentions**.",
        "gameObjective": "Find a holotape in an unexplored building, **listen to it fully, then locate the place or person it mentions**."
      },
      "de": {
        "name": "Eine Stimme von früher",
        "objective": "Finde in einem unbekannten Gebäude ein Holoband, **hör es ganz an und such den erwähnten Ort oder die Person**.",
        "gameObjective": "Finde in einem unbekannten Gebäude ein Holoband, **hör es ganz an und such den erwähnten Ort oder die Person**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "fallout-fo4-dogmeat-search": {
    "definition": {
      "id": "fallout-fo4-dogmeat-search",
      "rarity": "standard",
      "moodIds": [
        "relax"
      ],
      "type": "objective",
      "tags": [
        "animals"
      ],
      "minimumDurationMinutes": 2,
      "suggestedDurationMinutes": 15,
      "universal": false,
      "curated": {
        "gameId": "fallout",
        "installmentIds": [
          "fallout-4"
        ]
      },
      "gameGenreIds": [
        "rpg",
        "adventure"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Dogmeat Finds It",
      "objective": "With Dogmeat as your companion, **ask him to search an unexplored room and collect one thing he points out**.",
      "gameObjective": "With Dogmeat as your companion, **ask him to search an unexplored room and collect one thing he points out**."
    },
    "translations": {
      "en": {
        "name": "Dogmeat Finds It",
        "objective": "With Dogmeat as your companion, **ask him to search an unexplored room and collect one thing he points out**.",
        "gameObjective": "With Dogmeat as your companion, **ask him to search an unexplored room and collect one thing he points out**."
      },
      "de": {
        "name": "Dogmeat findet etwas",
        "objective": "Nimm Dogmeat mit, **lass ihn einen unbekannten Raum absuchen und heb einen Fund auf, den er anzeigt**.",
        "gameObjective": "Nimm Dogmeat mit, **lass ihn einen unbekannten Raum absuchen und heb einen Fund auf, den er anzeigt**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "fallout-fo76-train-vendor": {
    "definition": {
      "id": "fallout-fo76-train-vendor",
      "rarity": "standard",
      "moodIds": [
        "progress"
      ],
      "type": "objective",
      "tags": [
        "trading"
      ],
      "minimumDurationMinutes": 2,
      "suggestedDurationMinutes": 15,
      "universal": false,
      "curated": {
        "gameId": "fallout",
        "installmentIds": [
          "fallout-76"
        ]
      },
      "gameGenreIds": [
        "rpg",
        "adventure"
      ],
      "connectionModeIds": [
        "online"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": true,
      "name": "Lighten the Stash",
      "objective": "Visit a train-station vendor and **sell enough surplus gear to free one named stash category**.",
      "gameObjective": "Visit a train-station vendor and **sell enough surplus gear to free one named stash category**."
    },
    "translations": {
      "en": {
        "name": "Lighten the Stash",
        "objective": "Visit a train-station vendor and **sell enough surplus gear to free one named stash category**.",
        "gameObjective": "Visit a train-station vendor and **sell enough surplus gear to free one named stash category**."
      },
      "de": {
        "name": "Platz im Lager",
        "objective": "Besuche einen Händler am Bahnhof und **verkaufe überzählige Ausrüstung, bis in einer Lagerkategorie wieder Platz ist**.",
        "gameObjective": "Besuche einen Händler am Bahnhof und **verkaufe überzählige Ausrüstung, bis in einer Lagerkategorie wieder Platz ist**."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "countdown-pocket-shelter": {
    "definition": {
      "id": "countdown-pocket-shelter",
      "moodIds": [
        "create",
        "challenge"
      ],
      "type": "countdown",
      "tags": [
        "time-trial"
      ],
      "minimumDurationMinutes": 0,
      "suggestedDurationMinutes": 8,
      "maximumDurationMinutes": 8,
      "universal": true,
      "rarity": "standard",
      "gameGenreIds": [
        "simulation",
        "survival",
        "sandbox"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": false,
      "name": "Pocket Shelter",
      "objective": "Open a **building game**. Build a shelter with **a roof, a door, and a light** before eight minutes are up. Pause the timer when it's ready."
    },
    "translations": {
      "en": {
        "name": "Pocket Shelter",
        "objective": "Open a **building game**. Build a shelter with **a roof, a door, and a light** before eight minutes are up. Pause the timer when it's ready."
      },
      "de": {
        "name": "Mini-Unterschlupf",
        "objective": "Starte ein **Bauspiel**. Baue in acht Minuten einen Unterschlupf mit **Dach, Tür und Licht**. Pausiere den Timer, sobald er fertig ist."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "countdown-five-colors": {
    "definition": {
      "id": "countdown-five-colors",
      "moodIds": [
        "curious",
        "focused"
      ],
      "type": "countdown",
      "tags": [
        "time-trial"
      ],
      "minimumDurationMinutes": 0,
      "suggestedDurationMinutes": 5,
      "maximumDurationMinutes": 5,
      "universal": true,
      "rarity": "standard",
      "gameGenreIds": [
        "adventure",
        "simulation",
        "sandbox"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": false,
      "name": "Five Colors",
      "objective": "Open a game with **photo mode**. Take five pictures of **five differently colored subjects** within five minutes. Pause after the fifth photo."
    },
    "translations": {
      "en": {
        "name": "Five Colors",
        "objective": "Open a game with **photo mode**. Take five pictures of **five differently colored subjects** within five minutes. Pause after the fifth photo."
      },
      "de": {
        "name": "Fünf Farben",
        "objective": "Starte ein Spiel mit **Fotomodus**. Fotografiere in fünf Minuten **fünf verschiedenfarbige Motive**. Pausiere nach dem fünften Bild."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "countdown-clean-inventory": {
    "definition": {
      "id": "countdown-clean-inventory",
      "moodIds": [
        "focused",
        "restless"
      ],
      "type": "countdown",
      "tags": [
        "time-trial"
      ],
      "minimumDurationMinutes": 0,
      "suggestedDurationMinutes": 3,
      "maximumDurationMinutes": 3,
      "universal": true,
      "rarity": "standard",
      "gameGenreIds": [
        "rpg",
        "survival",
        "sandbox"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": false,
      "name": "Clear the Clutter",
      "objective": "Open a game with **inventory storage**. Put **ten unused items into storage** before three minutes are up. Pause once the tenth item is stored."
    },
    "translations": {
      "en": {
        "name": "Clear the Clutter",
        "objective": "Open a game with **inventory storage**. Put **ten unused items into storage** before three minutes are up. Pause once the tenth item is stored."
      },
      "de": {
        "name": "Platz schaffen",
        "objective": "Starte ein Spiel mit **Lager und Inventar**. Verstaue in drei Minuten **zehn ungenutzte Gegenstände** im Lager. Pausiere nach dem zehnten Gegenstand."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "countdown-three-puzzles": {
    "definition": {
      "id": "countdown-three-puzzles",
      "moodIds": [
        "challenge",
        "focused"
      ],
      "type": "countdown",
      "tags": [
        "time-trial"
      ],
      "minimumDurationMinutes": 0,
      "suggestedDurationMinutes": 10,
      "maximumDurationMinutes": 10,
      "universal": true,
      "rarity": "standard",
      "gameGenreIds": [
        "puzzle"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": false,
      "name": "Puzzle Sprint",
      "objective": "Open a **short-puzzle game**. Solve **three puzzles without hints** within ten minutes. Pause the timer after the third solution."
    },
    "translations": {
      "en": {
        "name": "Puzzle Sprint",
        "objective": "Open a **short-puzzle game**. Solve **three puzzles without hints** within ten minutes. Pause the timer after the third solution."
      },
      "de": {
        "name": "Rätsel-Sprint",
        "objective": "Starte ein Spiel mit **kurzen Rätseln**. Löse in zehn Minuten **drei Rätsel ohne Hinweise**. Pausiere nach der dritten Lösung."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "countdown-fish-trio": {
    "definition": {
      "id": "countdown-fish-trio",
      "moodIds": [
        "challenge",
        "curious"
      ],
      "type": "countdown",
      "tags": [
        "time-trial"
      ],
      "minimumDurationMinutes": 0,
      "suggestedDurationMinutes": 8,
      "maximumDurationMinutes": 8,
      "universal": true,
      "rarity": "standard",
      "gameGenreIds": [
        "simulation",
        "cozy"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": false,
      "name": "Quick Catch",
      "objective": "Open a game with **fishing** and stand by the water. Catch **three fish** within eight minutes. Pause after landing the third."
    },
    "translations": {
      "en": {
        "name": "Quick Catch",
        "objective": "Open a game with **fishing** and stand by the water. Catch **three fish** within eight minutes. Pause after landing the third."
      },
      "de": {
        "name": "Schneller Fang",
        "objective": "Starte ein Spiel mit **Angeln** und stell dich ans Wasser. Fange in acht Minuten **drei Fische**. Pausiere nach dem dritten Fang."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "countdown-rooftop": {
    "definition": {
      "id": "countdown-rooftop",
      "moodIds": [
        "restless",
        "challenge"
      ],
      "type": "countdown",
      "tags": [
        "time-trial"
      ],
      "minimumDurationMinutes": 0,
      "suggestedDurationMinutes": 5,
      "maximumDurationMinutes": 5,
      "universal": true,
      "rarity": "standard",
      "gameGenreIds": [
        "adventure",
        "platformer"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": false,
      "name": "Rooftop Rush",
      "objective": "Open a game with **climbing**. Pick a visible rooftop from street level, then start the timer. **Reach that roof on foot** within five minutes and pause."
    },
    "translations": {
      "en": {
        "name": "Rooftop Rush",
        "objective": "Open a game with **climbing**. Pick a visible rooftop from street level, then start the timer. **Reach that roof on foot** within five minutes and pause."
      },
      "de": {
        "name": "Aufs Dach",
        "objective": "Starte ein Spiel mit **Klettern**. Wähle von der Straße aus ein sichtbares Dach und starte den Timer. **Erreiche das Dach zu Fuß** in fünf Minuten und pausiere."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "countdown-cook-three": {
    "definition": {
      "id": "countdown-cook-three",
      "moodIds": [
        "focused",
        "challenge"
      ],
      "type": "countdown",
      "tags": [
        "time-trial"
      ],
      "minimumDurationMinutes": 0,
      "suggestedDurationMinutes": 7,
      "maximumDurationMinutes": 7,
      "universal": true,
      "rarity": "standard",
      "gameGenreIds": [
        "simulation",
        "cozy",
        "survival"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": false,
      "name": "Three-Course Dash",
      "objective": "Open a game with **cooking**. Gather ingredients and **cook three different dishes** within seven minutes. Pause when the third dish is ready."
    },
    "translations": {
      "en": {
        "name": "Three-Course Dash",
        "objective": "Open a game with **cooking**. Gather ingredients and **cook three different dishes** within seven minutes. Pause when the third dish is ready."
      },
      "de": {
        "name": "Küchen-Sprint",
        "objective": "Starte ein Spiel mit **Kochen**. Sammle Zutaten und **koche drei verschiedene Gerichte** in sieben Minuten. Pausiere, sobald das dritte fertig ist."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "countdown-secret-route": {
    "definition": {
      "id": "countdown-secret-route",
      "moodIds": [
        "challenge",
        "focused"
      ],
      "type": "countdown",
      "tags": [
        "time-trial"
      ],
      "minimumDurationMinutes": 0,
      "suggestedDurationMinutes": 6,
      "maximumDurationMinutes": 6,
      "universal": true,
      "rarity": "standard",
      "gameGenreIds": [
        "stealth"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": false,
      "name": "Quick Heist",
      "objective": "Open a **stealth game with items to steal** and pick a nearby guarded room. **Steal as much as you can in under six minutes and get back out unseen**. Pause when you're back."
    },
    "translations": {
      "en": {
        "name": "Quick Heist",
        "objective": "Open a **stealth game with items to steal** and pick a nearby guarded room. **Steal as much as you can in under six minutes and get back out unseen**. Pause when you're back."
      },
      "de": {
        "name": "Schneller Beutezug",
        "objective": "Starte ein **Schleichspiel, in dem du Gegenstände stehlen kannst**, und such dir einen bewachten Raum. **Stiehl dort in unter sechs Minuten so viel wie möglich und komm unentdeckt wieder raus**. Pausiere den Timer, sobald du zurück bist."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "countdown-small-garden": {
    "definition": {
      "id": "countdown-small-garden",
      "moodIds": [
        "create",
        "focused"
      ],
      "type": "countdown",
      "tags": [
        "time-trial"
      ],
      "minimumDurationMinutes": 0,
      "suggestedDurationMinutes": 5,
      "maximumDurationMinutes": 5,
      "universal": true,
      "rarity": "standard",
      "gameGenreIds": [
        "simulation",
        "cozy"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": false,
      "name": "Garden Dash",
      "objective": "Open a game with **crop planting**. Prepare soil, then **plant and water nine crops** within five minutes. Pause after watering the last one."
    },
    "translations": {
      "en": {
        "name": "Garden Dash",
        "objective": "Open a game with **crop planting**. Prepare soil, then **plant and water nine crops** within five minutes. Pause after watering the last one."
      },
      "de": {
        "name": "Garten-Sprint",
        "objective": "Starte ein **Farmspiel**. Bereite ein kleines Beet vor und **pflanz und gieß neun Pflanzen in fünf Minuten**. Pausiere nach der letzten Pflanze."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "speedrun-first-level": {
    "definition": {
      "id": "speedrun-first-level",
      "moodIds": [
        "challenge",
        "progress"
      ],
      "type": "speedrun",
      "tags": [
        "time-trial"
      ],
      "minimumDurationMinutes": 0,
      "suggestedDurationMinutes": 10,
      "universal": true,
      "rarity": "standard",
      "gameGenreIds": [
        "platformer"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": false,
      "name": "Opening Level",
      "objective": "Open a **platformer you know** and select its first level. Start at the level entrance and **reach the exit as quickly as you can**. Pause as soon as you finish."
    },
    "translations": {
      "en": {
        "name": "Opening Level",
        "objective": "Open a **platformer you know** and select its first level. Start at the level entrance and **reach the exit as quickly as you can**. Pause as soon as you finish."
      },
      "de": {
        "name": "Erstes Level",
        "objective": "Starte einen **bekannten Plattformer** und wähle das erste Level. Beginne am Eingang und **erreiche den Ausgang so schnell wie möglich**. Pausiere direkt am Ziel."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "speedrun-one-lap": {
    "definition": {
      "id": "speedrun-one-lap",
      "moodIds": [
        "challenge",
        "restless"
      ],
      "type": "speedrun",
      "tags": [
        "time-trial"
      ],
      "minimumDurationMinutes": 0,
      "suggestedDurationMinutes": 5,
      "universal": true,
      "rarity": "standard",
      "gameGenreIds": [
        "racing"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": false,
      "name": "One Flying Lap",
      "objective": "Open a **racing game** and choose a track and car. Start at the line and **finish one clean lap**. Pause at the finish and use the same setup for future attempts."
    },
    "translations": {
      "en": {
        "name": "One Flying Lap",
        "objective": "Open a **racing game** and choose a track and car. Start at the line and **finish one clean lap**. Pause at the finish and use the same setup for future attempts."
      },
      "de": {
        "name": "Eine schnelle Runde",
        "objective": "Starte ein **Rennspiel** und wähle Strecke und Auto. Fahr ab der Startlinie **eine saubere Runde**. Pausier am Ziel und behalte Strecke und Wagen für weitere Versuche."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "speedrun-village-loop": {
    "definition": {
      "id": "speedrun-village-loop",
      "moodIds": [
        "restless",
        "focused"
      ],
      "type": "speedrun",
      "tags": [
        "time-trial"
      ],
      "minimumDurationMinutes": 0,
      "suggestedDurationMinutes": 10,
      "universal": true,
      "rarity": "standard",
      "gameGenreIds": [
        "adventure",
        "sandbox",
        "cozy"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": false,
      "name": "Town Circuit",
      "objective": "Open an **open-world game**. Pick two landmarks in one town. Start at the first, **run to the second and back without fast travel**, then pause. Keep this route for repeats."
    },
    "translations": {
      "en": {
        "name": "Town Circuit",
        "objective": "Open an **open-world game**. Pick two landmarks in one town. Start at the first, **run to the second and back without fast travel**, then pause. Keep this route for repeats."
      },
      "de": {
        "name": "Ortsrunde",
        "objective": "Starte ein **Open-World-Spiel**. Wähle zwei Orte in einer Stadt. **Laufe vom ersten zum zweiten und zurück, ohne Schnellreise**, und pausiere. Nutze bei Wiederholungen dieselbe Strecke."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "speedrun-training-targets": {
    "definition": {
      "id": "speedrun-training-targets",
      "moodIds": [
        "challenge",
        "focused"
      ],
      "type": "speedrun",
      "tags": [
        "time-trial"
      ],
      "minimumDurationMinutes": 0,
      "suggestedDurationMinutes": 5,
      "universal": true,
      "rarity": "standard",
      "gameGenreIds": [
        "shooter"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": false,
      "name": "Target Circuit",
      "objective": "Open a **shooter with a training range**. Choose one weapon and five targets. **Hit all five once**, then pause. Repeat with the same weapon and targets."
    },
    "translations": {
      "en": {
        "name": "Target Circuit",
        "objective": "Open a **shooter with a training range**. Choose one weapon and five targets. **Hit all five once**, then pause. Repeat with the same weapon and targets."
      },
      "de": {
        "name": "Zielparcours",
        "objective": "Starte einen **Shooter mit Schießstand**. Wähle eine Waffe und fünf Ziele. **Triff jedes Ziel einmal** und pausiere. Behalte Waffe und Ziele bei Wiederholungen bei."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "speedrun-known-puzzle": {
    "definition": {
      "id": "speedrun-known-puzzle",
      "moodIds": [
        "focused",
        "challenge"
      ],
      "type": "speedrun",
      "tags": [
        "time-trial"
      ],
      "minimumDurationMinutes": 0,
      "suggestedDurationMinutes": 10,
      "universal": true,
      "rarity": "standard",
      "gameGenreIds": [
        "puzzle"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": false,
      "name": "Familiar Puzzle",
      "objective": "Open a **replayable puzzle** and choose a familiar level. Reset it, start the timer, and **solve it without hints**. Pause on the solution and replay this level to improve."
    },
    "translations": {
      "en": {
        "name": "Familiar Puzzle",
        "objective": "Open a **replayable puzzle** and choose a familiar level. Reset it, start the timer, and **solve it without hints**. Pause on the solution and replay this level to improve."
      },
      "de": {
        "name": "Bekanntes Rätsel",
        "objective": "Wähle in einem **Rätselspiel, in dem du Level erneut spielen kannst**, ein bekanntes Level. Setz es zurück, starte den Timer und **löse es ohne Hinweise**. Pausier die Zeit und spiel dasselbe Level erneut, wenn du schneller werden willst."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "speedrun-boss-rematch": {
    "definition": {
      "id": "speedrun-boss-rematch",
      "moodIds": [
        "challenge",
        "focused"
      ],
      "type": "speedrun",
      "tags": [
        "time-trial"
      ],
      "minimumDurationMinutes": 0,
      "suggestedDurationMinutes": 15,
      "universal": true,
      "rarity": "standard",
      "gameGenreIds": [
        "adventure",
        "rpg",
        "platformer",
        "roguelike",
        "shooter"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": false,
      "name": "Boss Rematch",
      "objective": "Open a game with **repeatable boss fights**. Choose one boss, difficulty, and loadout. **Defeat that boss**, then pause immediately. Keep the same conditions for repeats."
    },
    "translations": {
      "en": {
        "name": "Boss Rematch",
        "objective": "Open a game with **repeatable boss fights**. Choose one boss, difficulty, and loadout. **Defeat that boss**, then pause immediately. Keep the same conditions for repeats."
      },
      "de": {
        "name": "Boss-Revanche",
        "objective": "Starte ein Spiel mit **wiederholbaren Bosskämpfen**. Wähle Boss, Schwierigkeit und Ausrüstung. **Besiege den Boss** und pausiere sofort. Behalte die Bedingungen bei Wiederholungen bei."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "speedrun-resource-stack": {
    "definition": {
      "id": "speedrun-resource-stack",
      "moodIds": [
        "progress",
        "restless"
      ],
      "type": "speedrun",
      "tags": [
        "time-trial"
      ],
      "minimumDurationMinutes": 0,
      "suggestedDurationMinutes": 10,
      "universal": true,
      "rarity": "standard",
      "gameGenreIds": [
        "strategy",
        "survival"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": false,
      "name": "Ten to Gather",
      "objective": "Open a game with **gatherable resources**. Choose a resource and starting spot. **Gather ten fresh units**, then pause. Start repeats at the same spot without using stored resources."
    },
    "translations": {
      "en": {
        "name": "Ten to Gather",
        "objective": "Open a game with **gatherable resources**. Choose a resource and starting spot. **Gather ten fresh units**, then pause. Start repeats at the same spot without using stored resources."
      },
      "de": {
        "name": "Zehn sammeln",
        "objective": "Starte ein Spiel, in dem du **Rohstoffe sammeln kannst**. Leg Rohstoff und Startpunkt fest. **Sammle zehn Stück davon**, ohne Vorräte zu verwenden, und pausiere. Beginne weitere Läufe am selben Ort."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "speedrun-practice-course": {
    "definition": {
      "id": "speedrun-practice-course",
      "moodIds": [
        "restless",
        "challenge"
      ],
      "type": "speedrun",
      "tags": [
        "time-trial"
      ],
      "minimumDurationMinutes": 0,
      "suggestedDurationMinutes": 10,
      "universal": true,
      "rarity": "standard",
      "gameGenreIds": [
        "adventure"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": false,
      "name": "Movement Course",
      "objective": "Open a game with a **fixed movement course**. Start at its entrance and **reach the finish without skipping checkpoints**. Pause at the end and keep the same course for repeats."
    },
    "translations": {
      "en": {
        "name": "Movement Course",
        "objective": "Open a game with a **fixed movement course**. Start at its entrance and **reach the finish without skipping checkpoints**. Pause at the end and keep the same course for repeats."
      },
      "de": {
        "name": "Bewegungsparcours",
        "objective": "Starte ein Spiel mit einem **festen Bewegungsparcours**. Lauf am Eingang los und **erreiche das Ziel, ohne einen Checkpoint auszulassen**. Pausier dort und nutze denselben Parcours für weitere Läufe."
      }
    },
    "catalogRevision": "2026-10-04-before"
  },
  "speedrun-clear-room": {
    "definition": {
      "id": "speedrun-clear-room",
      "moodIds": [
        "challenge",
        "focused"
      ],
      "type": "speedrun",
      "tags": [
        "time-trial"
      ],
      "minimumDurationMinutes": 0,
      "suggestedDurationMinutes": 10,
      "universal": true,
      "rarity": "standard",
      "gameGenreIds": [
        "shooter",
        "fighting"
      ],
      "connectionModeIds": [
        "offline"
      ],
      "playStyleIds": [
        "solo"
      ],
      "gameBindable": false,
      "name": "Room Clear",
      "objective": "Open a game with **replayable combat rooms**. Pick one room and a fixed loadout. **Defeat every enemy in the room**, then pause. Keep the same room and loadout for repeats."
    },
    "translations": {
      "en": {
        "name": "Room Clear",
        "objective": "Open a game with **replayable combat rooms**. Pick one room and a fixed loadout. **Defeat every enemy in the room**, then pause. Keep the same room and loadout for repeats."
      },
      "de": {
        "name": "Raum räumen",
        "objective": "Starte ein Spiel mit **wiederholbaren Kampfräumen**. Wähle einen Raum und feste Ausrüstung. **Besiege alle Gegner im Raum** und pausiere. Behalte Raum und Ausrüstung bei Wiederholungen bei."
      }
    },
    "catalogRevision": "2026-10-04-before"
  }
} as unknown as Readonly<Record<string, QuestSnapshot>>;
