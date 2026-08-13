import type { AuthoredQuestDefinition } from "../questTypes";

export const AUTHORED_QUESTS: readonly AuthoredQuestDefinition[] = [
  {
    "moodId": "relax",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Known Ground",
        "title": "Finish one familiar level you know from memory",
        "objective": "Choose an installed game with a level or round you already know well. Start it from the beginning and finish it once.",
        "tips": [
          {
            "scope": "game-selection",
            "title": "Ready to Launch",
            "description": "Use a game that is installed and already has a usable save."
          },
          {
            "scope": "gameplay",
            "title": "Memory First",
            "description": "Open controls, maps, or tutorials only if you genuinely get stuck."
          }
        ]
      },
      "de": {
        "name": "Vertrautes Terrain",
        "title": "Beende ein vertrautes Level aus dem Gedächtnis",
        "objective": "Nimm ein installiertes Spiel mit einem Level oder einer Runde, die du gut kennst. Starte von vorn und spiel sie einmal bis zum Ende.",
        "tips": [
          {
            "scope": "game-selection",
            "title": "Sofort startklar",
            "description": "Nimm ein installiertes Spiel mit einem direkt nutzbaren Spielstand."
          },
          {
            "scope": "gameplay",
            "title": "Aus der Erinnerung",
            "description": "Öffne Steuerung, Karte oder Tutorial nur, wenn du wirklich feststeckst."
          }
        ]
      }
    }
  },
  {
    "moodId": "relax",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 180,
    "translations": {
      "en": {
        "name": "Muscle Memory",
        "title": "Follow the first goal you already know",
        "objective": "Open a familiar game, choose the first objective already visible in your save, complete it, and save immediately.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Memory First",
            "description": "Use memory first; open controls, maps, or tutorials only when truly stuck."
          },
          {
            "scope": "gameplay",
            "title": "World Audio",
            "description": "Lower the music enough to notice environmental sounds, voices, machinery, and distant activity."
          }
        ]
      },
      "de": {
        "name": "Muskelgedächtnis",
        "title": "Folge dem ersten Ziel, das du kennst",
        "objective": "Öffne ein vertrautes Spiel, wähle das erste sichtbare Ziel in deinem Spielstand, erfülle es und speichere sofort.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Erst aus Erinnerung",
            "description": "Nutze zuerst dein Gedächtnis; öffne Steuerung, Karte oder Tutorial nur, wenn du feststeckst."
          },
          {
            "scope": "gameplay",
            "title": "Geräusche der Welt",
            "description": "Drehe die Musik so weit herunter, dass du Umgebung, Stimmen und entfernte Aktivität wahrnimmst."
          }
        ]
      }
    }
  },
  {
    "moodId": "relax",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "rewardPoints": 150,
    "translations": {
      "en": {
        "name": "Familiar Soundtrack",
        "title": "Listen to one familiar track somewhere quiet",
        "objective": "Open a game whose music you recognize immediately, find a quiet in-game place, and stay there for one full track.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Music Forward",
            "description": "Lower effects and voices until the music becomes the clearest part of the scene."
          },
          {
            "scope": "gameplay",
            "title": "Still Scene",
            "description": "Keep the character and camera in one peaceful view for the entire track."
          }
        ]
      },
      "de": {
        "name": "Vertrauter Soundtrack",
        "title": "Höre ein vertrautes Stück an einem ruhigen Ort",
        "objective": "Öffne ein Spiel, dessen Musik du sofort erkennst, suche einen ruhigen Ort im Spiel und bleib dort für ein ganzes Stück.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Musik nach vorn",
            "description": "Senke Effekte und Stimmen, bis die Musik die Szene deutlich bestimmt."
          },
          {
            "scope": "gameplay",
            "title": "Ruhiges Bild",
            "description": "Halte Figur und Kamera während des ganzen Stücks in einer friedlichen Ansicht."
          }
        ]
      }
    }
  },
  {
    "moodId": "relax",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Favorite Place",
        "title": "Complete one task from your favorite hub",
        "objective": "Open a game with a hub you love, accept one task offered there, complete it, and return to the hub.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Full Dialogue",
            "description": "Let every spoken or written line finish before advancing."
          },
          {
            "scope": "gameplay",
            "title": "Favorite Setup",
            "description": "Use the character, loadout, deck, or vehicle you most associate with this game."
          }
        ]
      },
      "de": {
        "name": "Lieblingsort",
        "title": "Erledige eine Aufgabe an deinem Lieblingstreffpunkt",
        "objective": "Öffne ein Spiel mit einem geliebten Treffpunkt, nimm dort genau eine Aufgabe an, erledige sie und kehre zurück.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Ganzer Dialog",
            "description": "Lass jede gesprochene oder geschriebene Zeile enden, bevor du fortfährst."
          },
          {
            "scope": "gameplay",
            "title": "Lieblings-Setup",
            "description": "Nutze die Figur, Ausrüstung, das Deck oder Fahrzeug, das du damit verbindest."
          }
        ]
      }
    }
  },
  {
    "moodId": "relax",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Lost Favorite",
        "title": "Continue an old favorite to the next checkpoint",
        "objective": "Open a former favorite you have ignored for years, continue its current save without reviewing everything, and reach one new checkpoint.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Memory First",
            "description": "Use memory first; open controls, maps, or tutorials only when truly stuck."
          },
          {
            "scope": "gameplay",
            "title": "Stay on One Goal",
            "description": "Ignore side missions and map markers so the quest stays on one clear goal."
          }
        ]
      },
      "de": {
        "name": "Vergessener Favorit",
        "title": "Spiele einen alten Favoriten bis zum nächsten Kontrollpunkt",
        "objective": "Öffne einen früheren Favoriten nach langer Zeit, setze den aktuellen Spielstand ohne große Rückschau fort und erreiche einen neuen Kontrollpunkt.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Erst aus Erinnerung",
            "description": "Nutze zuerst dein Gedächtnis; öffne Steuerung, Karte oder Tutorial nur, wenn du feststeckst."
          },
          {
            "scope": "gameplay",
            "title": "Bleib bei einem Ziel",
            "description": "Ignoriere Nebenmissionen und Kartenmarker, damit die Quest bei einem klaren Ziel bleibt."
          }
        ]
      }
    }
  },
  {
    "moodId": "relax",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 180,
    "translations": {
      "en": {
        "name": "Familiar Series",
        "title": "Finish one part of a favorite series",
        "objective": "Open the least-revisited entry in a series you love, start its next level, chapter, or match, and finish it before saving.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Favorite Setup",
            "description": "Use the character, loadout, deck, or vehicle you most associate with this game."
          },
          {
            "scope": "gameplay",
            "title": "Let It Stand",
            "description": "Accept the first honest result, even when reloading or rerolling could improve it."
          }
        ]
      },
      "de": {
        "name": "Lieblingsserie",
        "title": "Beende einen Abschnitt deiner Lieblingsreihe",
        "objective": "Öffne den selten besuchten Teil einer Lieblingsreihe, starte das nächste Level, Kapitel oder Match und beende es vor dem Speichern.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Lieblings-Setup",
            "description": "Nutze die Figur, Ausrüstung, das Deck oder Fahrzeug, das du damit verbindest."
          },
          {
            "scope": "gameplay",
            "title": "Lass es gelten",
            "description": "Akzeptiere das erste ehrliche Ergebnis, auch wenn Neuladen oder Neuwürfeln es verbessern könnte."
          }
        ]
      }
    }
  },
  {
    "moodId": "relax",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 180,
    "translations": {
      "en": {
        "name": "Press Continue",
        "title": "Complete the next step you remember",
        "objective": "Open a save whose next step you remember, do only that step, and stop when you reach the next save point.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Memory First",
            "description": "Use memory first; open controls, maps, or tutorials only when truly stuck."
          },
          {
            "scope": "gameplay",
            "title": "No Optional Loot",
            "description": "Ignore optional loot and keep inventory management to only what progress requires."
          }
        ]
      },
      "de": {
        "name": "Weiter? Ja",
        "title": "Erledige den nächsten erinnerten Schritt",
        "objective": "Öffne einen Spielstand, dessen nächsten Schritt du kennst, erledige nur diesen und höre am nächsten Speicherpunkt auf.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Erst aus Erinnerung",
            "description": "Nutze zuerst dein Gedächtnis; öffne Steuerung, Karte oder Tutorial nur, wenn du feststeckst."
          },
          {
            "scope": "gameplay",
            "title": "Keine optionale Beute",
            "description": "Ignoriere optionale Beute und beschränke Inventarverwaltung auf das, was der Fortschritt verlangt."
          }
        ]
      }
    }
  },
  {
    "moodId": "relax",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 150,
    "translations": {
      "en": {
        "name": "Low Pressure",
        "title": "Lower one setting and reach a checkpoint",
        "objective": "Open a game with difficulty or assist options, lower one setting, start a level, and reach its next checkpoint.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Minimal HUD",
            "description": "Hide optional UI, but keep the quest's required goal and finish indicators visible."
          },
          {
            "scope": "gameplay",
            "title": "Known Ground",
            "description": "Replay a level you know instead of learning a new route."
          }
        ]
      },
      "de": {
        "name": "Weniger Druck",
        "title": "Senke eine Einstellung und erreiche einen Kontrollpunkt",
        "objective": "Öffne ein Spiel mit Schwierigkeitsgrad oder Hilfsoptionen, senke eine Einstellung, starte ein Level und erreiche den nächsten Kontrollpunkt.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Minimales HUD",
            "description": "Blende optionale Anzeigen aus, aber behalte Ziel und Abschluss der Quest sichtbar."
          },
          {
            "scope": "gameplay",
            "title": "Bekanntes Terrain",
            "description": "Wiederhole ein bekanntes Level, statt eine neue Route zu lernen."
          }
        ]
      }
    }
  },
  {
    "moodId": "relax",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 180,
    "translations": {
      "en": {
        "name": "Pause Anytime",
        "title": "Pause halfway through one level or round",
        "objective": "Open a fully pausable solo game with visible progress, start one level or round, pause halfway through, then resume and finish it.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Hands-Off Pause",
            "description": "Put the controller down and take three slow breaths before resuming."
          },
          {
            "scope": "gameplay",
            "title": "No Menu Chores",
            "description": "Use the pause as a break, not for maps, inventory, or setup changes."
          }
        ]
      },
      "de": {
        "name": "Jederzeit pausierbar",
        "title": "Pausiere ein Level oder eine Runde zur Halbzeit",
        "objective": "Öffne ein jederzeit pausierbares Solospiel mit sichtbarem Fortschritt, starte ein Level oder eine Runde, pausiere zur Halbzeit und beende sie danach.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Hände weg",
            "description": "Lege den Controller ab und atme dreimal langsam, bevor du weiterspielst."
          },
          {
            "scope": "gameplay",
            "title": "Keine Menüarbeit",
            "description": "Nutze die Pause als Pause, nicht für Karte, Inventar oder Setup."
          }
        ]
      }
    }
  },
  {
    "moodId": "relax",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Patient Tactics",
        "title": "Take your time with one turn-based battle",
        "objective": "Open a turn-based game, start one battle, read every choice before confirming it, and accept the final result.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Defend First",
            "description": "Make the opening turn about defense or positioning when the rules allow it."
          },
          {
            "scope": "gameplay",
            "title": "Let It Stand",
            "description": "Accept the first honest result, even when reloading or rerolling could improve it."
          }
        ]
      },
      "de": {
        "name": "Geduldige Taktik",
        "title": "Nimm dir Zeit für einen rundenbasierten Kampf",
        "objective": "Öffne ein rundenbasiertes Spiel, starte einen Kampf, lies jede Wahl vor der Bestätigung und akzeptiere das Endergebnis.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Verteidige zuerst",
            "description": "Nutze den ersten Zug für Verteidigung oder Positionierung, wenn die Regeln es erlauben."
          },
          {
            "scope": "gameplay",
            "title": "Lass es gelten",
            "description": "Akzeptiere das erste ehrliche Ergebnis, auch wenn Neuladen oder Neuwürfeln es verbessern könnte."
          }
        ]
      }
    }
  },
  {
    "moodId": "relax",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "rewardPoints": 150,
    "translations": {
      "en": {
        "name": "Familiar Challenge",
        "title": "Play one familiar challenge without chasing a record",
        "objective": "Open a challenge you know well, play one full attempt without chasing a score or record, and accept the first result.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Use Basic Gear",
            "description": "Leave your strongest or rarest option unused and solve the quest with ordinary gear."
          },
          {
            "scope": "gameplay",
            "title": "Play It Out",
            "description": "Continue after mistakes and adapt instead of restarting, reloading, or abandoning the attempt."
          }
        ]
      },
      "de": {
        "name": "Vertraute Herausforderung",
        "title": "Spiele eine vertraute Herausforderung ohne Rekordjagd",
        "objective": "Öffne eine vertraute Herausforderung, spiele einen vollständigen Versuch ohne Punkte- oder Rekordjagd und akzeptiere das erste Ergebnis.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Nutze einfache Ausrüstung",
            "description": "Lass deine stärkste oder seltenste Option ungenutzt und löse die Quest mit gewöhnlicher Ausrüstung."
          },
          {
            "scope": "gameplay",
            "title": "Spiel es zu Ende",
            "description": "Spiele nach Fehlern weiter und passe dich an, statt neu zu starten oder zu laden."
          }
        ]
      }
    }
  },
  {
    "moodId": "relax",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 180,
    "translations": {
      "en": {
        "name": "No Rush",
        "title": "Complete one optional goal without a timer",
        "objective": "Open a game with no active timer, choose the first optional objective shown, ignore all others, and complete it.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Move Without Rushing",
            "description": "Avoid sprinting, boosting, or skipping ahead; let the journey set the pace."
          },
          {
            "scope": "gameplay",
            "title": "World Audio",
            "description": "Lower the music enough to notice environmental sounds, voices, machinery, and distant activity."
          }
        ]
      },
      "de": {
        "name": "Keine Eile",
        "title": "Erfülle ein optionales Ziel ohne Zeitdruck",
        "objective": "Öffne ein Spiel ohne laufenden Timer, wähle das erste angezeigte optionale Ziel, ignoriere alle anderen und erfülle es.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Ohne Eile",
            "description": "Vermeide Sprinten, Boosts und Abkürzungen; lass den Weg das Tempo bestimmen."
          },
          {
            "scope": "gameplay",
            "title": "Geräusche der Welt",
            "description": "Drehe die Musik so weit herunter, dass du Umgebung, Stimmen und entfernte Aktivität wahrnimmst."
          }
        ]
      }
    }
  },
  {
    "moodId": "relax",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 180,
    "translations": {
      "en": {
        "name": "One Care Task",
        "title": "Complete the first care task waiting",
        "objective": "Open a game with visible care tasks, choose the first waiting one, and continue until the game marks it complete.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Hands-On Care",
            "description": "Use direct actions instead of automation, menus, or instant-care items when possible."
          },
          {
            "scope": "gameplay",
            "title": "Stay for the Reaction",
            "description": "After finishing, stay long enough to see the cared-for target's first response."
          }
        ]
      },
      "de": {
        "name": "Eine Fürsorgeaufgabe",
        "title": "Erledige die erste wartende Fürsorgeaufgabe",
        "objective": "Öffne ein Spiel mit sichtbaren Fürsorgeaufgaben, wähle die erste wartende und spiele, bis das Spiel sie als erledigt markiert.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Direkte Fürsorge",
            "description": "Nutze direkte Aktionen statt Automatisierung, Menüs oder sofort wirkender Pflegegegenstände."
          },
          {
            "scope": "gameplay",
            "title": "Bleib für die Reaktion",
            "description": "Bleib nach Abschluss bis zur ersten Reaktion der gepflegten Figur oder Umgebung."
          }
        ]
      }
    }
  },
  {
    "moodId": "relax",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 180,
    "translations": {
      "en": {
        "name": "One Space in Order",
        "title": "Put one unfinished room in order",
        "objective": "Open a cleaning or renovation game, choose one unfinished room, and complete its checklist or fill its progress meter.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Most Visible First",
            "description": "Start with the most visible unfinished item before checking the full task list."
          },
          {
            "scope": "gameplay",
            "title": "Before and After",
            "description": "Capture the room once before changing it and once after completion."
          }
        ]
      },
      "de": {
        "name": "Ein Bereich in Ordnung",
        "title": "Bringe einen unfertigen Raum in Ordnung",
        "objective": "Öffne ein Reinigungs- oder Renovierungsspiel, wähle einen unfertigen Raum und erledige seine Checkliste oder fülle seine Fortschrittsanzeige.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Sichtbares zuerst",
            "description": "Beginne mit dem sichtbarsten offenen Punkt, bevor du die ganze Aufgabenliste prüfst."
          },
          {
            "scope": "gameplay",
            "title": "Vorher und nachher",
            "description": "Fotografiere den Raum einmal vor der Veränderung und einmal nach dem Abschluss."
          }
        ]
      }
    }
  },
  {
    "moodId": "relax",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Slow Journey",
        "title": "Travel to one landmark without fast travel",
        "objective": "Open a game with a vehicle you enjoy, choose one visible landmark, travel there without fast travel, and stop on arrival.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Landmarks Only",
            "description": "Navigate by visible places, signs, and terrain instead of following route lines."
          },
          {
            "scope": "gameplay",
            "title": "World Audio",
            "description": "Lower the music enough to notice environmental sounds, voices, machinery, and distant activity."
          }
        ]
      },
      "de": {
        "name": "Langsame Reise",
        "title": "Reise ohne Schnellreise zu einem Orientierungspunkt",
        "objective": "Öffne ein Spiel mit einem geliebten Fahrzeug, wähle ein sichtbares Ziel, reise ohne Schnellreise dorthin und halte bei der Ankunft an.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Nur Orientierungspunkte",
            "description": "Navigiere nach sichtbaren Orten, Schildern und Gelände statt nach Routenlinien."
          },
          {
            "scope": "gameplay",
            "title": "Geräusche der Welt",
            "description": "Drehe die Musik so weit herunter, dass du Umgebung, Stimmen und entfernte Aktivität wahrnimmst."
          }
        ]
      }
    }
  },
  {
    "moodId": "relax",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 180,
    "translations": {
      "en": {
        "name": "Gentle Adventure",
        "title": "Follow one story scene to its break",
        "objective": "Open a low-pressure story game, continue its current scene, take each choice by first instinct, and reach the next scene break.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Optional Conversation",
            "description": "Follow one optional dialogue branch before the current scene ends."
          },
          {
            "scope": "gameplay",
            "title": "Full Dialogue",
            "description": "Let every spoken or written line finish before advancing."
          }
        ]
      },
      "de": {
        "name": "Sanftes Abenteuer",
        "title": "Folge einer Story-Szene bis zum Wechsel",
        "objective": "Öffne ein ruhiges Story-Spiel, setze die aktuelle Szene fort, entscheide aus dem ersten Impuls und erreiche den nächsten Szenenwechsel.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Optionales Gespräch",
            "description": "Folge einem optionalen Dialogzweig, bevor die aktuelle Szene endet."
          },
          {
            "scope": "gameplay",
            "title": "Ganzer Dialog",
            "description": "Lass jede gesprochene oder geschriebene Zeile enden, bevor du fortfährst."
          }
        ]
      }
    }
  },
  {
    "moodId": "relax",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Calm Puzzle",
        "title": "Solve one untimed puzzle-game level without hints",
        "objective": "Open a puzzle game without a timer, choose the first unsolved puzzle shown, and solve it without hints or switching puzzles.",
        "tips": [
          {
            "scope": "game-selection",
            "title": "Separate Puzzles",
            "description": "Choose a puzzle game that shows individual boards or levels."
          },
          {
            "scope": "gameplay",
            "title": "Talk It Through",
            "description": "Say your intended move aloud before making it."
          }
        ]
      },
      "de": {
        "name": "Ruhiges Rätsel",
        "title": "Löse im Rätselspiel ein Rätsel ohne Hinweise",
        "objective": "Öffne ein Rätselspiel ohne Timer, wähle das erste angezeigte ungelöste Rätsel und löse es ohne Hinweise oder Wechsel.",
        "tips": [
          {
            "scope": "game-selection",
            "title": "Einzelne Rätsel",
            "description": "Nimm ein Rätselspiel mit einzeln sichtbaren Feldern oder Leveln."
          },
          {
            "scope": "gameplay",
            "title": "Sprich es aus",
            "description": "Sage deinen geplanten Zug laut, bevor du ihn ausführst."
          }
        ]
      }
    }
  },
  {
    "moodId": "relax",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 180,
    "translations": {
      "en": {
        "name": "Favorite Character",
        "title": "Finish one conversation with a favorite character",
        "objective": "Open a game with a character you enjoy, find them, choose one conversation or request they offer, and complete it.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Full Dialogue",
            "description": "Let every spoken or written line finish before advancing."
          },
          {
            "scope": "gameplay",
            "title": "Bring a Gift",
            "description": "If possible, bring one item that suits the chosen character."
          }
        ]
      },
      "de": {
        "name": "Lieblingsfigur",
        "title": "Beende ein Gespräch mit deiner Lieblingsfigur",
        "objective": "Öffne ein Spiel mit einer Figur, die du magst, finde sie, wähle eines ihrer Gespräche oder Anliegen und beende es.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Ganzer Dialog",
            "description": "Lass jede gesprochene oder geschriebene Zeile enden, bevor du fortfährst."
          },
          {
            "scope": "gameplay",
            "title": "Bring ein Geschenk",
            "description": "Bring wenn möglich einen Gegenstand mit, der zur gewählten Figur passt."
          }
        ]
      }
    }
  },
  {
    "moodId": "relax",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 180,
    "translations": {
      "en": {
        "name": "Solo Practice",
        "title": "Complete one guided exercise on your own",
        "objective": "Open a game with solo practice, choose the first exercise already provided, complete it once, and leave practice.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Default Setup",
            "description": "Accept the default character, deck, equipment, and settings without adjustments."
          },
          {
            "scope": "gameplay",
            "title": "Name the Lesson",
            "description": "After success, name one mistake the exercise helped you correct."
          }
        ]
      },
      "de": {
        "name": "Solo-Training",
        "title": "Schließe allein eine angeleitete Übung ab",
        "objective": "Öffne ein Spiel mit Solo-Training, wähle die erste vorgegebene Übung, schließe sie einmal ab und verlasse das Training.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Standard-Setup",
            "description": "Akzeptiere Figur, Deck, Ausrüstung und Einstellungen ohne Anpassungen."
          },
          {
            "scope": "gameplay",
            "title": "Benenne die Lektion",
            "description": "Benenne nach dem Erfolg einen Fehler, den die Übung verbessert hat."
          }
        ]
      }
    }
  },
  {
    "moodId": "relax",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 180,
    "translations": {
      "en": {
        "name": "Progress Through Failure",
        "title": "Finish one run and spend its reward",
        "objective": "Open a game with short runs and persistent rewards, play one run without restarting, then spend one reward it earned.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Underdog Option",
            "description": "Use a viable character, tool, or build weaker than your usual favorite."
          },
          {
            "scope": "gameplay",
            "title": "Change the Approach",
            "description": "After the first mistake, change route or tactic instead of repeating it."
          }
        ]
      },
      "de": {
        "name": "Fortschritt durchs Scheitern",
        "title": "Beende einen Run und nutze seine Belohnung",
        "objective": "Öffne ein Spiel mit kurzen Runs und bleibenden Belohnungen, spiele einen Run ohne Neustart und gib danach eine verdiente Belohnung aus.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Außenseiter-Option",
            "description": "Nutze eine brauchbare Figur, ein Werkzeug oder einen Build unterhalb deines üblichen Favoriten."
          },
          {
            "scope": "gameplay",
            "title": "Anderer Ansatz",
            "description": "Ändere nach dem ersten Fehler Route oder Taktik, statt sie zu wiederholen."
          }
        ]
      }
    }
  },
  {
    "moodId": "relax",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 150,
    "translations": {
      "en": {
        "name": "Soft Palette",
        "title": "Explore one softly colored area to a checkpoint",
        "objective": "Open a game with softly colored, checkpointed areas, enter the one that feels gentlest today, and reach its next checkpoint.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Minimal HUD",
            "description": "Hide optional UI, but keep the quest's required goal and finish indicators visible."
          },
          {
            "scope": "gameplay",
            "title": "Bring Back One Image",
            "description": "Capture one screenshot that clearly shows the finished result or final stopping point."
          }
        ]
      },
      "de": {
        "name": "Sanfte Farbwelt",
        "title": "Erkunde einen sanften Bereich bis zum Kontrollpunkt",
        "objective": "Öffne ein Spiel mit sanft gefärbten Bereichen und Kontrollpunkten, betrete den heute angenehmsten und erreiche seinen nächsten Kontrollpunkt.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Minimales HUD",
            "description": "Blende optionale Anzeigen aus, aber behalte Ziel und Abschluss der Quest sichtbar."
          },
          {
            "scope": "gameplay",
            "title": "Bring ein Bild mit",
            "description": "Mache einen Screenshot, der das fertige Ergebnis oder den endgültigen Haltepunkt klar zeigt."
          }
        ]
      }
    }
  },
  {
    "moodId": "relax",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 180,
    "translations": {
      "en": {
        "name": "Better Weather",
        "title": "Choose your weather and travel through it",
        "objective": "Open a game with selectable weather, choose weather you would enjoy now, pick a visible destination, and reach it unchanged.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "No Fast Travel",
            "description": "Travel through the playable world instead of skipping the journey through a menu."
          },
          {
            "scope": "gameplay",
            "title": "World Audio",
            "description": "Lower the music enough to notice environmental sounds, voices, machinery, and distant activity."
          }
        ]
      },
      "de": {
        "name": "Besseres Wetter",
        "title": "Wähle dein Wetter und reise hindurch",
        "objective": "Öffne ein Spiel mit wählbarem Wetter, stelle dein Wunschwetter ein, wähle ein sichtbares Ziel und erreiche es ohne Wetterwechsel.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keine Schnellreise",
            "description": "Reise durch die spielbare Welt, statt den Weg über ein Menü zu überspringen."
          },
          {
            "scope": "gameplay",
            "title": "Geräusche der Welt",
            "description": "Drehe die Musik so weit herunter, dass du Umgebung, Stimmen und entfernte Aktivität wahrnimmst."
          }
        ]
      }
    }
  },
  {
    "moodId": "relax",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "rewardPoints": 150,
    "translations": {
      "en": {
        "name": "Calming Routine",
        "title": "Complete one familiar routine without extra chores",
        "objective": "Open a game with a short routine you know by heart, perform its full loop once, and add no extra chores.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Favorite Setup",
            "description": "Use the character, loadout, deck, or vehicle you most associate with this game."
          },
          {
            "scope": "gameplay",
            "title": "World Audio",
            "description": "Lower the music enough to notice environmental sounds, voices, machinery, and distant activity."
          }
        ]
      },
      "de": {
        "name": "Beruhigende Routine",
        "title": "Führe eine vertraute Routine ohne Zusatzaufgaben aus",
        "objective": "Öffne ein Spiel mit einer kurzen vertrauten Routine, führe ihren ganzen Ablauf einmal aus und hänge keine weiteren Aufgaben an.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Lieblings-Setup",
            "description": "Nutze die Figur, Ausrüstung, das Deck oder Fahrzeug, das du damit verbindest."
          },
          {
            "scope": "gameplay",
            "title": "Geräusche der Welt",
            "description": "Drehe die Musik so weit herunter, dass du Umgebung, Stimmen und entfernte Aktivität wahrnimmst."
          }
        ]
      }
    }
  },
  {
    "moodId": "relax",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 180,
    "translations": {
      "en": {
        "name": "Quiet Wandering",
        "title": "Find three details while wandering without markers",
        "objective": "Open a detailed game world, wander without following a marker, and stop after finding three details you can describe.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Ground Level",
            "description": "Keep the camera close to the character or world instead of overhead or distant."
          },
          {
            "scope": "gameplay",
            "title": "Three-Image Set",
            "description": "Capture one screenshot of each detail you discover."
          }
        ]
      },
      "de": {
        "name": "Ruhiges Umherstreifen",
        "title": "Finde beim Umherstreifen drei Details ohne Marker",
        "objective": "Öffne eine detailreiche Spielwelt, streife ohne Markierung umher und höre auf, nachdem du drei beschreibbare Details gefunden hast.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Auf Augenhöhe",
            "description": "Halte die Kamera nah an Figur oder Welt statt über dir oder weit entfernt."
          },
          {
            "scope": "gameplay",
            "title": "Drei Bilder",
            "description": "Mache von jedem entdeckten Detail einen Screenshot."
          }
        ]
      }
    }
  },
  {
    "moodId": "relax",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 150,
    "translations": {
      "en": {
        "name": "One Button",
        "title": "Play one level for rhythm instead of perfection",
        "objective": "Open a game built around one main input, play one level for its rhythm rather than perfection, and reach its next checkpoint.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Sound Timing",
            "description": "Follow audio cues instead of watching only the score or timing bar."
          },
          {
            "scope": "gameplay",
            "title": "Other Hand",
            "description": "Use the main input with your non-dominant hand."
          }
        ]
      },
      "de": {
        "name": "Ein Knopf",
        "title": "Spiele ein Level nach Rhythmus statt Perfektion",
        "objective": "Öffne ein Spiel mit einer Hauptaktion, spiele ein Level nach seinem Rhythmus statt auf Perfektion und erreiche den nächsten Kontrollpunkt.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Nach Gehör",
            "description": "Folge Tonsignalen statt nur auf Punkte oder Timing-Anzeigen zu schauen."
          },
          {
            "scope": "gameplay",
            "title": "Andere Hand",
            "description": "Nutze die Hauptaktion mit deiner nicht dominanten Hand."
          }
        ]
      }
    }
  },
  {
    "moodId": "relax",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 180,
    "translations": {
      "en": {
        "name": "Home Base",
        "title": "Finish one corner of your home base",
        "objective": "Open a game where you can arrange a home base, choose the first unfinished corner, add one functional or decorative item, and save.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Match the Base",
            "description": "Reuse one material, color, or shape already visible elsewhere in the base."
          },
          {
            "scope": "gameplay",
            "title": "Leave a Clear Path",
            "description": "Keep one clear walking route through the finished area."
          }
        ]
      },
      "de": {
        "name": "Tapetenwechsel in deiner Base",
        "title": "Richte eine Ecke deiner Basis fertig ein",
        "objective": "Öffne ein Spiel, in dem du eine Basis einrichten kannst, wähle die erste unfertige Ecke, platziere einen nützlichen oder dekorativen Gegenstand und speichere.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Passend zur Basis",
            "description": "Übernimm ein Material, eine Farbe oder Form aus einem anderen Bereich der Basis."
          },
          {
            "scope": "gameplay",
            "title": "Freier Weg",
            "description": "Halte einen klaren Laufweg durch den fertigen Bereich frei."
          }
        ]
      }
    }
  },
  {
    "moodId": "relax",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 150,
    "translations": {
      "en": {
        "name": "Low Volume",
        "title": "Follow one dialogue scene quietly with captions",
        "objective": "Open a game with full captions, lower the volume, enable captions, play one dialogue scene, and stop at its scene break.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Full Dialogue",
            "description": "Let every spoken or written line finish before advancing."
          },
          {
            "scope": "gameplay",
            "title": "Voice and Text Only",
            "description": "Turn music off and follow only quiet voices and captions."
          }
        ]
      },
      "de": {
        "name": "Leise gespielt",
        "title": "Folge einer Dialogszene leise mit Untertiteln",
        "objective": "Öffne ein Spiel mit vollständigen Untertiteln, senke die Lautstärke, aktiviere Untertitel, spiele eine Dialogszene und stoppe beim Szenenwechsel.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Ganzer Dialog",
            "description": "Lass jede gesprochene oder geschriebene Zeile enden, bevor du fortfährst."
          },
          {
            "scope": "gameplay",
            "title": "Nur Stimme und Text",
            "description": "Schalte Musik aus und folge nur leisen Stimmen und Untertiteln."
          }
        ]
      }
    }
  },
  {
    "moodId": "relax",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "No-Rush Save",
        "title": "Complete the first task in a no-rush save",
        "objective": "Open a save with no timed mission, choose the first unfinished task in its current list, complete it, and save immediately.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "No Optional Loot",
            "description": "Ignore optional loot and keep inventory management to only what progress requires."
          },
          {
            "scope": "gameplay",
            "title": "First Instinct",
            "description": "Take the first sincere choice that feels right without comparing every alternative."
          }
        ]
      },
      "de": {
        "name": "Spielstand ohne Eile",
        "title": "Erledige die erste Aufgabe ohne Zeitdruck",
        "objective": "Öffne einen Spielstand ohne Zeitmission, wähle die erste unerledigte Aufgabe der aktuellen Liste, erledige sie und speichere sofort.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keine optionale Beute",
            "description": "Ignoriere optionale Beute und beschränke Inventarverwaltung auf das, was der Fortschritt verlangt."
          },
          {
            "scope": "gameplay",
            "title": "Erster Impuls",
            "description": "Nimm die erste ehrliche Wahl, die sich richtig anfühlt, ohne alle Alternativen zu vergleichen."
          }
        ]
      }
    }
  },
  {
    "moodId": "relax",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "rewardPoints": 150,
    "translations": {
      "en": {
        "name": "Favorite Loop",
        "title": "Complete one favorite loop and stop",
        "objective": "Open a game with an activity you love repeating, complete that loop once without chasing a score, and stop before restarting.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Favorite Setup",
            "description": "Use the character, loadout, deck, or vehicle you most associate with this game."
          },
          {
            "scope": "gameplay",
            "title": "World Audio",
            "description": "Lower the music enough to notice environmental sounds, voices, machinery, and distant activity."
          }
        ]
      },
      "de": {
        "name": "Lieblingsrunde",
        "title": "Schließe eine Lieblingsrunde ab und höre auf",
        "objective": "Öffne ein Spiel mit einem gern wiederholten Ablauf, schließe ihn einmal ohne Punktejagd ab und beginne ihn nicht erneut.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Lieblings-Setup",
            "description": "Nutze die Figur, Ausrüstung, das Deck oder Fahrzeug, das du damit verbindest."
          },
          {
            "scope": "gameplay",
            "title": "Geräusche der Welt",
            "description": "Drehe die Musik so weit herunter, dass du Umgebung, Stimmen und entfernte Aktivität wahrnimmst."
          }
        ]
      }
    }
  },
  {
    "moodId": "relax",
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 20,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "Clean Finish",
        "title": "Finish exactly one chapter and stop",
        "objective": "Open a game with clear chapters, start exactly one, finish it without beginning anything else, and stop at its closing screen.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Skip Collectibles",
            "description": "Pass optional collectibles without leaving the route."
          },
          {
            "scope": "gameplay",
            "title": "Let the Ending Play",
            "description": "Let the closing music or transition run until the next menu appears."
          }
        ]
      },
      "de": {
        "name": "Sauberer Abschluss",
        "title": "Beende genau ein Kapitel und höre auf",
        "objective": "Öffne ein Spiel mit klaren Kapiteln, starte genau eines, beende es ohne etwas Neues anzufangen und stoppe am Abschlussbildschirm.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keine Sammelobjekte",
            "description": "Geh an optionalen Sammelobjekten vorbei, ohne die Route zu verlassen."
          },
          {
            "scope": "gameplay",
            "title": "Lass das Ende laufen",
            "description": "Lass Abschlussmusik oder Übergang laufen, bis das nächste Menü erscheint."
          }
        ]
      }
    }
  },
  {
    "moodId": "relax",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Cozy Corner",
        "title": "Build one cozy corner your character can use",
        "objective": "Open a game with usable furniture, build one corner with a seat, light, and surface, then sit your character there.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "One Palette",
            "description": "Limit the result to one color family plus a single contrasting accent."
          },
          {
            "scope": "gameplay",
            "title": "Before and After",
            "description": "Capture the room once before changing it and once after completion."
          }
        ]
      },
      "de": {
        "name": "Gemütliche Ecke",
        "title": "Baue eine gemütliche Ecke für deine Figur",
        "objective": "Öffne ein Spiel mit nutzbaren Möbeln, baue eine Ecke mit Sitzplatz, Licht und Ablage und setze deine Figur dorthin.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Eine Farbpalette",
            "description": "Beschränke das Ergebnis auf eine Farbfamilie und einen einzelnen kontrastierenden Akzent."
          },
          {
            "scope": "gameplay",
            "title": "Vorher und nachher",
            "description": "Fotografiere den Raum einmal vor der Veränderung und einmal nach dem Abschluss."
          }
        ]
      }
    }
  },
  {
    "moodId": "relax",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 180,
    "translations": {
      "en": {
        "name": "Fishing Break",
        "title": "Catch three fish at the nearest spot",
        "objective": "Open a game where you can fish, visit the nearest fishing spot, and stop immediately after catching your third fish.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Bring Back One Image",
            "description": "Capture one screenshot that clearly shows the finished result or final stopping point."
          },
          {
            "scope": "gameplay",
            "title": "World Audio",
            "description": "Lower the music enough to notice environmental sounds, voices, machinery, and distant activity."
          }
        ]
      },
      "de": {
        "name": "Angelpause",
        "title": "Fange drei Fische am nächsten Angelplatz",
        "objective": "Öffne ein Spiel, in dem du angeln kannst, besuche den nächsten Angelplatz und höre direkt nach dem dritten gefangenen Fisch auf.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Bring ein Bild mit",
            "description": "Mache einen Screenshot, der das fertige Ergebnis oder den endgültigen Haltepunkt klar zeigt."
          },
          {
            "scope": "gameplay",
            "title": "Geräusche der Welt",
            "description": "Drehe die Musik so weit herunter, dass du Umgebung, Stimmen und entfernte Aktivität wahrnimmst."
          }
        ]
      }
    }
  },
  {
    "moodId": "relax",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Quiet Drive",
        "title": "Take a drive without any hurry",
        "objective": "Open a game with a road you enjoy, choose one destination, take the unhurried route, and arrive without racing.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Cockpit View",
            "description": "Stay in first-person or cockpit view for the whole journey."
          },
          {
            "scope": "gameplay",
            "title": "World Audio",
            "description": "Lower the music enough to notice environmental sounds, voices, machinery, and distant activity."
          }
        ]
      },
      "de": {
        "name": "Ruhige Fahrt",
        "title": "Fahre eine Runde ganz ohne Eile",
        "objective": "Öffne ein Spiel mit einer schönen Straße, wähle ein Ziel, nimm den entspannten Weg und komme ohne Rennen an.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Cockpit-Sicht",
            "description": "Bleib während der ganzen Reise in der Ego- oder Cockpit-Perspektive."
          },
          {
            "scope": "gameplay",
            "title": "Geräusche der Welt",
            "description": "Drehe die Musik so weit herunter, dass du Umgebung, Stimmen und entfernte Aktivität wahrnimmst."
          }
        ]
      }
    }
  },
  {
    "moodId": "relax",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 180,
    "translations": {
      "en": {
        "name": "Gentle Platforming",
        "title": "Reach one platformer checkpoint without restarting",
        "objective": "Open a platformer with forgiving checkpoints, start one level, retry every missed jump without restarting, and reach the next checkpoint.",
        "tips": [
          {
            "scope": "game-selection",
            "title": "Short-Stage Platformer",
            "description": "Prefer a platformer whose stages and checkpoints are visible before starting."
          },
          {
            "scope": "gameplay",
            "title": "Minimal HUD",
            "description": "Hide optional UI, but keep the quest's required goal and finish indicators visible."
          }
        ]
      },
      "de": {
        "name": "Sanftes Plattformspiel",
        "title": "Erreiche im Plattformspiel einen Kontrollpunkt ohne Neustart",
        "objective": "Öffne ein Plattformspiel mit großzügigen Kontrollpunkten, starte ein Level, wiederhole Fehlversuche ohne Neustart und erreiche den nächsten Kontrollpunkt.",
        "tips": [
          {
            "scope": "game-selection",
            "title": "Kurzes Plattformspiel",
            "description": "Nimm ein Plattformspiel mit sichtbaren Leveln und Kontrollpunkten."
          },
          {
            "scope": "gameplay",
            "title": "Minimales HUD",
            "description": "Blende optionale Anzeigen aus, aber behalte Ziel und Abschluss der Quest sichtbar."
          }
        ]
      }
    }
  },
  {
    "moodId": "relax",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "First Setup",
        "title": "Play one solo board or card game with the default setup",
        "objective": "Open a digital board or card game with solo play. Use the first setup or opponent it gives you and finish one complete match.",
        "tips": [
          {
            "scope": "game-selection",
            "title": "Board or Cards",
            "description": "Choose whichever installed game offers solo play and a clear match result."
          },
          {
            "scope": "gameplay",
            "title": "No Undo",
            "description": "Keep every move, even when you notice a better option afterward."
          }
        ]
      },
      "de": {
        "name": "Erste Runde",
        "title": "Spiel ein Solo-Brett- oder Kartenspiel mit dem Standard-Setup",
        "objective": "Starte ein digitales Brett- oder Kartenspiel mit Solomodus. Nimm das erste Setup oder den ersten Gegner, den das Spiel vorgibt, und spiel eine Runde bis zum Ende.",
        "tips": [
          {
            "scope": "game-selection",
            "title": "Brett oder Karten",
            "description": "Nimm ein installiertes Spiel mit Solomodus und klarem Rundenergebnis."
          },
          {
            "scope": "gameplay",
            "title": "Kein Zurück",
            "description": "Lass jeden Zug gelten, auch wenn dir danach eine bessere Möglichkeit auffällt."
          }
        ]
      }
    }
  },
  {
    "moodId": "relax",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Space Drift",
        "title": "Fly to the nearest station without fast travel",
        "objective": "Open a game with peaceful space travel, set course for the nearest station without fast travel, and dock there safely.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Cockpit View",
            "description": "Stay in first-person or cockpit view for the whole journey."
          },
          {
            "scope": "gameplay",
            "title": "World Audio",
            "description": "Lower the music enough to notice environmental sounds, voices, machinery, and distant activity."
          }
        ]
      },
      "de": {
        "name": "Weltraumdrift",
        "title": "Fliege ohne Schnellreise zur nächsten Station",
        "objective": "Öffne ein Spiel mit friedlicher Raumfahrt, setze ohne Schnellreise Kurs auf die nächste Station und docke dort sicher an.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Cockpit-Sicht",
            "description": "Bleib während der ganzen Reise in der Ego- oder Cockpit-Perspektive."
          },
          {
            "scope": "gameplay",
            "title": "Geräusche der Welt",
            "description": "Drehe die Musik so weit herunter, dass du Umgebung, Stimmen und entfernte Aktivität wahrnimmst."
          }
        ]
      }
    }
  },
  {
    "moodId": "explore",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 180,
    "translations": {
      "en": {
        "name": "Third Pick",
        "title": "Launch the third installed game without comparing alternatives",
        "objective": "Look at the first visible row of installed games and count to the third one. Launch the third installed game without comparing alternatives. Reach the first save, checkpoint, or result screen.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "No Map",
            "description": "Navigate through landmarks and memory without opening a map or route overlay."
          },
          {
            "scope": "gameplay",
            "title": "Take One Detour",
            "description": "Take one optional turn beside the main route, then return to the quest."
          }
        ]
      },
      "de": {
        "name": "Dritte Wahl",
        "title": "Starte das dritte installierte Spiel, ohne Alternativen zu vergleichen",
        "objective": "Schau auf die erste sichtbare Reihe deiner installierten Spiele und zähle bis zum dritten. Starte das dritte installierte Spiel, ohne Alternativen zu vergleichen. Erreiche den ersten Speicherpunkt, Kontrollpunkt oder Ergebnisbildschirm.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keine Karte",
            "description": "Navigiere mit Orientierungspunkten und Erinnerung, ohne Karte oder eingeblendete Route."
          },
          {
            "scope": "gameplay",
            "title": "Nimm einen Umweg",
            "description": "Nimm eine optionale Abzweigung neben dem Hauptweg und kehre danach zur Quest zurück."
          }
        ]
      }
    }
  },
  {
    "moodId": "explore",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "Beyond Earth",
        "title": "Travel somewhere new beyond Earth",
        "objective": "Think of a game set beyond Earth. Travel to a place you have not visited in that world. Complete one level, quest, match, or in-game day there.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Landmarks Only",
            "description": "Navigate by visible places, signs, and terrain instead of following route lines."
          },
          {
            "scope": "gameplay",
            "title": "No Map",
            "description": "Navigate through landmarks and memory without opening a map or route overlay."
          }
        ]
      },
      "de": {
        "name": "Jenseits der Erde",
        "title": "Reise zu einem neuen Ort jenseits der Erde",
        "objective": "Denk an ein Spiel, das jenseits der Erde spielt. Reise zu einem Ort, den du in dieser Welt noch nicht besucht hast. Beende dort ein Level, eine Quest, ein Match oder einen Spieltag.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Nur Orientierungspunkte",
            "description": "Navigiere nach sichtbaren Orten, Schildern und Gelände statt nach Routenlinien."
          },
          {
            "scope": "gameplay",
            "title": "Keine Karte",
            "description": "Navigiere mit Orientierungspunkten und Erinnerung, ohne Karte oder eingeblendete Route."
          }
        ]
      }
    }
  },
  {
    "moodId": "explore",
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 20,
    "rewardPoints": 250,
    "translations": {
      "en": {
        "name": "Fantasy Door",
        "title": "Set out for that place directly",
        "objective": "Choose a fantasy world that still has an unknown place on its map. Set out for that place directly. Reach a named landmark.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "No Fast Travel",
            "description": "Travel through the playable world instead of skipping the journey through a menu."
          },
          {
            "scope": "gameplay",
            "title": "Landmarks Only",
            "description": "Navigate by visible places, signs, and terrain instead of following route lines."
          }
        ]
      },
      "de": {
        "name": "Tor zur Fantasie",
        "title": "Brich direkt dorthin auf",
        "objective": "Wähle eine Fantasywelt mit einem Ort auf der Karte, den du noch nicht kennst. Brich direkt dorthin auf. Erreiche einen benannten Orientierungspunkt.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keine Schnellreise",
            "description": "Reise durch die spielbare Welt, statt den Weg über ein Menü zu überspringen."
          },
          {
            "scope": "gameplay",
            "title": "Nur Orientierungspunkte",
            "description": "Navigiere nach sichtbaren Orten, Schildern und Gelände statt nach Routenlinien."
          }
        ]
      }
    }
  },
  {
    "moodId": "explore",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "Neon City",
        "title": "Cross one neon district on foot",
        "objective": "Open a game with a neon-lit city. Cross one district on foot and pay attention to street-level details. Finish one local activity.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Use What You Find",
            "description": "Make one useful item, tool, or resource found during the quest part of your plan."
          },
          {
            "scope": "gameplay",
            "title": "One Main Tool",
            "description": "Choose one tool or action and make it your main answer throughout the quest."
          }
        ]
      },
      "de": {
        "name": "Neonstadt",
        "title": "Durchquere ein Neonviertel zu Fuß",
        "objective": "Öffne ein Spiel mit einer neonbeleuchteten Stadt. Durchquere ein Viertel zu Fuß und achte auf die Details der Straße. Beende eine Aktivität vor Ort.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Nutze deinen Fund",
            "description": "Mach einen nützlichen Gegenstand, ein Werkzeug oder eine Ressource aus der Quest zum Teil deines Plans."
          },
          {
            "scope": "gameplay",
            "title": "Ein Hauptwerkzeug",
            "description": "Wähle ein Werkzeug oder eine Aktion als deine Hauptlösung für die ganze Quest."
          }
        ]
      }
    }
  },
  {
    "moodId": "explore",
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 20,
    "rewardPoints": 250,
    "translations": {
      "en": {
        "name": "Into the Wild",
        "title": "Reach one visible landmark from your shelter",
        "objective": "Choose a game with open wilderness. Leave your shelter and head toward one natural landmark you can already see. Reach it and return safely.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Landmarks Only",
            "description": "Navigate by visible places, signs, and terrain instead of following route lines."
          },
          {
            "scope": "gameplay",
            "title": "Minimal HUD",
            "description": "Hide optional UI, but keep the quest's required goal and finish indicators visible."
          }
        ]
      },
      "de": {
        "name": "In die Wildnis",
        "title": "Erreiche einen sichtbaren Orientierungspunkt von deinem Unterschlupf",
        "objective": "Wähle ein Spiel mit offener Wildnis. Verlasse deinen Unterschlupf und geh zu einem natürlichen Orientierungspunkt, den du schon sehen kannst. Erreiche ihn und kehre sicher zurück.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Nur Orientierungspunkte",
            "description": "Navigiere nach sichtbaren Orten, Schildern und Gelände statt nach Routenlinien."
          },
          {
            "scope": "gameplay",
            "title": "Minimales HUD",
            "description": "Blende optionale Anzeigen aus, aber behalte Ziel und Abschluss der Quest sichtbar."
          }
        ]
      }
    }
  },
  {
    "moodId": "explore",
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 20,
    "rewardPoints": 250,
    "translations": {
      "en": {
        "name": "Desert Crossing",
        "title": "Pick a landmark on the far side and travel toward it",
        "objective": "Think of a game with a desert you have not crossed. Pick a landmark on the far side and travel toward it. Reach shelter again.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Take One Detour",
            "description": "Take one optional turn beside the main route, then return to the quest."
          },
          {
            "scope": "gameplay",
            "title": "No Outside Help",
            "description": "Rely only on the game: no guides, wikis, solution videos, or external maps."
          }
        ]
      },
      "de": {
        "name": "Wüstendurchquerung",
        "title": "Wähle ein Ziel auf der anderen Seite und reise dorthin",
        "objective": "Denk an ein Spiel mit einer Wüste, die du noch nicht durchquert hast. Wähle ein Ziel auf der anderen Seite und reise dorthin. Erreiche wieder einen sicheren Ort.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Nimm einen Umweg",
            "description": "Nimm eine optionale Abzweigung neben dem Hauptweg und kehre danach zur Quest zurück."
          },
          {
            "scope": "gameplay",
            "title": "Keine externe Hilfe",
            "description": "Verlasse dich nur auf das Spiel: keine Guides, Wikis, Lösungsvideos oder externen Karten."
          }
        ]
      }
    }
  },
  {
    "moodId": "explore",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "Below the Surface",
        "title": "Find one submerged landmark you have not inspected before",
        "objective": "Open a game that lets you dive underwater. Find one submerged landmark you have not inspected before. Return to air or safety.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "No Map",
            "description": "Navigate through landmarks and memory without opening a map or route overlay."
          },
          {
            "scope": "gameplay",
            "title": "Take One Detour",
            "description": "Take one optional turn beside the main route, then return to the quest."
          }
        ]
      },
      "de": {
        "name": "Unter der Oberfläche",
        "title": "Finde einen versunkenen Ort, den du bisher nicht untersucht hast",
        "objective": "Öffne ein Spiel, in dem du unter Wasser tauchen kannst. Finde einen versunkenen Ort, den du bisher nicht untersucht hast. Kehre zu Luft oder Sicherheit zurück.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keine Karte",
            "description": "Navigiere mit Orientierungspunkten und Erinnerung, ohne Karte oder eingeblendete Route."
          },
          {
            "scope": "gameplay",
            "title": "Nimm einen Umweg",
            "description": "Nimm eine optionale Abzweigung neben dem Hauptweg und kehre danach zur Quest zurück."
          }
        ]
      }
    }
  },
  {
    "moodId": "explore",
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 20,
    "rewardPoints": 230,
    "translations": {
      "en": {
        "name": "Underground World",
        "title": "Enter the hidden underground area and keep a clear route back",
        "objective": "Choose a game with an underground area still hidden from you. Enter the hidden underground area and keep a clear route back. Discover one new chamber.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Ground Level",
            "description": "Keep the camera close to the character or world instead of overhead or distant."
          },
          {
            "scope": "gameplay",
            "title": "No Map",
            "description": "Navigate through landmarks and memory without opening a map or route overlay."
          }
        ]
      },
      "de": {
        "name": "Welt im Untergrund",
        "title": "Betritt den verborgenen Untergrund und halte den Rückweg frei",
        "objective": "Wähle ein Spiel mit einem unterirdischen Bereich, den du noch nicht kennst. Betritt den verborgenen Untergrund und halte den Rückweg frei. Entdecke eine neue Kammer.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Auf Augenhöhe",
            "description": "Halte die Kamera nah an Figur oder Welt statt über dir oder weit entfernt."
          },
          {
            "scope": "gameplay",
            "title": "Keine Karte",
            "description": "Navigiere mit Orientierungspunkten und Erinnerung, ohne Karte oder eingeblendete Route."
          }
        ]
      }
    }
  },
  {
    "moodId": "explore",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Animal Perspective",
        "title": "Use the way that animal moves to complete one task",
        "objective": "Think of a game where you play as an animal. Use the way that animal moves to complete one task. Finish the task.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keep Your Setup",
            "description": "Keep the current character, loadout, deck, or vehicle for the entire quest."
          },
          {
            "scope": "gameplay",
            "title": "First Instinct",
            "description": "Take the first sincere choice that feels right without comparing every alternative."
          }
        ]
      },
      "de": {
        "name": "Tierperspektive",
        "title": "Nutze seine besondere Fortbewegung, um eine Aufgabe zu erledigen",
        "objective": "Denk an ein Spiel, in dem du ein Tier spielst. Nutze seine besondere Fortbewegung, um eine Aufgabe zu erledigen. Beende die Aufgabe.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Behalte dein Setup",
            "description": "Behalte die aktuelle Figur, Ausrüstung, das Deck oder Fahrzeug während der ganzen Quest."
          },
          {
            "scope": "gameplay",
            "title": "Erster Impuls",
            "description": "Nimm die erste ehrliche Wahl, die sich richtig anfühlt, ohne alle Alternativen zu vergleichen."
          }
        ]
      }
    }
  },
  {
    "moodId": "explore",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Command View",
        "title": "Direct the whole space from above",
        "objective": "Open a game played from above. Direct the whole visible space instead of following a single character closely. Finish one scenario.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keep Your Setup",
            "description": "Keep the current character, loadout, deck, or vehicle for the entire quest."
          },
          {
            "scope": "gameplay",
            "title": "Minimal HUD",
            "description": "Hide optional UI, but keep the quest's required goal and finish indicators visible."
          }
        ]
      },
      "de": {
        "name": "Kommandoperspektive",
        "title": "Steuere den ganzen Bereich aus der Vogelperspektive",
        "objective": "Öffne ein Spiel aus der Vogelperspektive. Steuere den ganzen sichtbaren Bereich, statt nur einer Figur zu folgen. Beende ein Szenario.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Behalte dein Setup",
            "description": "Behalte die aktuelle Figur, Ausrüstung, das Deck oder Fahrzeug während der ganzen Quest."
          },
          {
            "scope": "gameplay",
            "title": "Minimales HUD",
            "description": "Blende optionale Anzeigen aus, aber behalte Ziel und Abschluss der Quest sichtbar."
          }
        ]
      }
    }
  },
  {
    "moodId": "explore",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "Genre Detour",
        "title": "Pick its first installed game and start immediately",
        "objective": "Open the genre in your library you usually scroll past. Pick its first installed game and start immediately. Reach one complete result.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Opposite Instinct",
            "description": "Choose one meaningful option opposite to your usual habit and accept its outcome."
          },
          {
            "scope": "gameplay",
            "title": "Let It Stand",
            "description": "Accept the first honest result, even when reloading or rerolling could improve it."
          }
        ]
      },
      "de": {
        "name": "Genre-Abstecher",
        "title": "Nimm das erste installierte Spiel und starte sofort",
        "objective": "Öffne das Genre in deiner Bibliothek, an dem du sonst vorbeiscrollst. Nimm das erste installierte Spiel und starte sofort. Beende eine ganze Runde, ein Match, eine Aufgabe oder einen Test und behalte das Ergebnis.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Gegenteiliger Impuls",
            "description": "Wähle eine bedeutsame Option entgegen deiner Gewohnheit und akzeptiere ihr Ergebnis."
          },
          {
            "scope": "gameplay",
            "title": "Lass es gelten",
            "description": "Akzeptiere das erste ehrliche Ergebnis, auch wenn Neuladen oder Neuwürfeln es verbessern könnte."
          }
        ]
      }
    }
  },
  {
    "moodId": "explore",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 210,
    "translations": {
      "en": {
        "name": "Unusual Controls",
        "title": "Start the activity built most clearly around that input",
        "objective": "Choose a game controlled in a way that feels unusual to you. Start the activity built most clearly around that input. Use the input successfully to clear one obstacle.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "One Main Tool",
            "description": "Choose one tool or action and make it your main answer throughout the quest."
          },
          {
            "scope": "gameplay",
            "title": "No Outside Help",
            "description": "Rely only on the game: no guides, wikis, solution videos, or external maps."
          }
        ]
      },
      "de": {
        "name": "Ungewöhnliche Steuerung",
        "title": "Starte die Aktivität, die diese Eingabe am deutlichsten nutzt",
        "objective": "Wähle ein Spiel mit einer Steuerung, die sich für dich ungewöhnlich anfühlt. Starte die Aktivität, die diese Eingabe am deutlichsten nutzt. Überwinde mit der Eingabe erfolgreich ein Hindernis.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Ein Hauptwerkzeug",
            "description": "Wähle ein Werkzeug oder eine Aktion als deine Hauptlösung für die ganze Quest."
          },
          {
            "scope": "gameplay",
            "title": "Keine externe Hilfe",
            "description": "Verlasse dich nur auf das Spiel: keine Guides, Wikis, Lösungsvideos oder externen Karten."
          }
        ]
      }
    }
  },
  {
    "moodId": "explore",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "Single Clue",
        "title": "Follow only that clue and inspect the evidence connected to it",
        "objective": "Open a mystery game with an unresolved clue, inspect three connected pieces of evidence, and stop when the clue resolves or all three are recorded.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "No Outside Help",
            "description": "Rely only on the game: no guides, wikis, solution videos, or external maps."
          },
          {
            "scope": "gameplay",
            "title": "No Markers",
            "description": "Disable optional markers and follow directions, signs, and clues inside the world."
          }
        ]
      },
      "de": {
        "name": "Ein Hinweis",
        "title": "Verfolge nur diesen Hinweis und untersuche die zugehörigen Beweise",
        "objective": "Öffne ein Mystery-Spiel mit einer ungelösten Spur, untersuche drei verbundene Beweisstücke und höre auf, wenn die Spur gelöst oder alle drei festgehalten sind.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keine externe Hilfe",
            "description": "Verlasse dich nur auf das Spiel: keine Guides, Wikis, Lösungsvideos oder externen Karten."
          },
          {
            "scope": "gameplay",
            "title": "Keine Marker",
            "description": "Deaktiviere optionale Marker und folge Richtungen, Schildern und Hinweisen innerhalb der Welt."
          }
        ]
      }
    }
  },
  {
    "moodId": "explore",
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 20,
    "rewardPoints": 230,
    "translations": {
      "en": {
        "name": "Whole Board",
        "title": "Start one scenario and give every unit a clear job",
        "objective": "Choose a game where you command a whole team at once. Start one scenario and give every unit a clear job. Finish the scenario.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Stay on One Goal",
            "description": "Ignore side missions and map markers so the quest stays on one clear goal."
          },
          {
            "scope": "gameplay",
            "title": "Let It Stand",
            "description": "Accept the first honest result, even when reloading or rerolling could improve it."
          }
        ]
      },
      "de": {
        "name": "Ganzes Spielfeld",
        "title": "Starte ein Szenario und gib jeder Einheit eine klare Aufgabe",
        "objective": "Wähle ein Spiel, in dem du ein ganzes Team gleichzeitig befehligst. Starte ein Szenario und gib jeder Einheit eine klare Aufgabe. Beende das Szenario.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Bleib bei einem Ziel",
            "description": "Ignoriere Nebenmissionen und Kartenmarker, damit die Quest bei einem klaren Ziel bleibt."
          },
          {
            "scope": "gameplay",
            "title": "Lass es gelten",
            "description": "Akzeptiere das erste ehrliche Ergebnis, auch wenn Neuladen oder Neuwürfeln es verbessern könnte."
          }
        ]
      }
    }
  },
  {
    "moodId": "explore",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 190,
    "translations": {
      "en": {
        "name": "By Ear",
        "title": "Turn your attention away from markers and follow one audible cue",
        "objective": "Open a game where sound can guide you. Turn your attention away from markers and follow one audible cue. Let that cue lead you to a result.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Listen First",
            "description": "Pause for dialogue and world sounds, then let them guide your next action."
          },
          {
            "scope": "gameplay",
            "title": "Minimal HUD",
            "description": "Hide optional UI, but keep the quest's required goal and finish indicators visible."
          }
        ]
      },
      "de": {
        "name": "Nach Gehör",
        "title": "Ignoriere Marker und folge einem hörbaren Hinweis",
        "objective": "Öffne ein Spiel, in dem Geräusche dich führen können. Ignoriere Marker und folge einem hörbaren Hinweis. Lass dich von ihm zu einem Ergebnis führen.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Hör zuerst zu",
            "description": "Halte für Dialoge und Weltgeräusche inne und lass sie den nächsten Schritt bestimmen."
          },
          {
            "scope": "gameplay",
            "title": "Minimales HUD",
            "description": "Blende optionale Anzeigen aus, aber behalte Ziel und Abschluss der Quest sichtbar."
          }
        ]
      }
    }
  },
  {
    "moodId": "explore",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 210,
    "translations": {
      "en": {
        "name": "New Movement",
        "title": "Cross one area using its signature move on purpose",
        "objective": "Think of a game whose movement still feels unfamiliar. Cross one area using its signature move on purpose. Reach the other side.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "No Map",
            "description": "Navigate through landmarks and memory without opening a map or route overlay."
          },
          {
            "scope": "gameplay",
            "title": "Move Without Rushing",
            "description": "Avoid sprinting, boosting, or skipping ahead; let the journey set the pace."
          }
        ]
      },
      "de": {
        "name": "Neue Bewegung",
        "title": "Durchquere einen Bereich bewusst mit seiner wichtigsten Bewegung",
        "objective": "Denk an ein Spiel, dessen Fortbewegung sich noch ungewohnt anfühlt. Durchquere einen Bereich bewusst mit seiner wichtigsten Bewegung. Erreiche die andere Seite.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keine Karte",
            "description": "Navigiere mit Orientierungspunkten und Erinnerung, ohne Karte oder eingeblendete Route."
          },
          {
            "scope": "gameplay",
            "title": "Ohne Eile",
            "description": "Vermeide Sprinten, Boosts und Abkürzungen; lass den Weg das Tempo bestimmen."
          }
        ]
      }
    }
  },
  {
    "moodId": "explore",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 210,
    "translations": {
      "en": {
        "name": "Words With Weight",
        "title": "Enter one dialogue and answer by instinct",
        "objective": "Choose a game where a conversation can change what happens next. Take the first available dialogue choice and accept its immediate outcome without reloading.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Full Dialogue",
            "description": "Let every spoken or written line finish before advancing."
          },
          {
            "scope": "gameplay",
            "title": "Listen First",
            "description": "Pause for dialogue and world sounds, then let them guide your next action."
          }
        ]
      },
      "de": {
        "name": "Worte mit Gewicht",
        "title": "Geh in einen Dialog und antworte aus dem Bauch heraus",
        "objective": "Wähle ein Spiel, in dem ein Gespräch den weiteren Verlauf verändert. Nimm im nächsten Dialog die erste verfügbare Antwort und akzeptiere ihre direkte Folge, ohne neu zu laden.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Ganzer Dialog",
            "description": "Lass jede gesprochene oder geschriebene Zeile enden, bevor du fortfährst."
          },
          {
            "scope": "gameplay",
            "title": "Hör zuerst zu",
            "description": "Halte für Dialoge und Weltgeräusche inne und lass sie den nächsten Schritt bestimmen."
          }
        ]
      }
    }
  },
  {
    "moodId": "explore",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Small Strange Game",
        "title": "Play until its central idea becomes clear",
        "objective": "Open a short game with a strange premise, finish its first chapter or level, then state its central idea in one sentence.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "One Space",
            "description": "Keep every action and change inside one small, clearly bounded area."
          },
          {
            "scope": "gameplay",
            "title": "No Map",
            "description": "Navigate through landmarks and memory without opening a map or route overlay."
          }
        ]
      },
      "de": {
        "name": "Kleines seltsames Spiel",
        "title": "Spiele, bis seine zentrale Idee verständlich wird",
        "objective": "Öffne ein kurzes Spiel mit einer seltsamen Prämisse, beende das erste Kapitel oder Level und beschreibe die zentrale Idee in einem Satz.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Ein Bereich",
            "description": "Beschränke jede Aktion und Änderung auf einen kleinen, klar abgegrenzten Bereich."
          },
          {
            "scope": "gameplay",
            "title": "Keine Karte",
            "description": "Navigiere mit Orientierungspunkten und Erinnerung, ohne Karte oder eingeblendete Route."
          }
        ]
      }
    }
  },
  {
    "moodId": "explore",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "Fresh Run",
        "title": "Accept the first seed and adapt to what it gives you",
        "objective": "Start a game that generates a different world each time. Accept the first seed and adapt to what it gives you. Finish one run.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Play It Out",
            "description": "Continue after mistakes and adapt instead of restarting, reloading, or abandoning the attempt."
          },
          {
            "scope": "gameplay",
            "title": "Use What You Find",
            "description": "Make one useful item, tool, or resource found during the quest part of your plan."
          }
        ]
      },
      "de": {
        "name": "Neuer Run",
        "title": "Akzeptiere den ersten Seed und passe dich an seine Vorgaben an",
        "objective": "Starte ein Spiel, das jedes Mal eine andere Welt erzeugt. Akzeptiere den ersten Seed und passe dich an seine Vorgaben an. Beende einen Run.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Spiel es zu Ende",
            "description": "Spiele nach Fehlern weiter und passe dich an, statt neu zu starten oder zu laden."
          },
          {
            "scope": "gameplay",
            "title": "Nutze deinen Fund",
            "description": "Mach einen nützlichen Gegenstand, ein Werkzeug oder eine Ressource aus der Quest zum Teil deines Plans."
          }
        ]
      }
    }
  },
  {
    "moodId": "explore",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 190,
    "translations": {
      "en": {
        "name": "Shortest Title",
        "title": "Launch the shortest-titled game before reading reviews",
        "objective": "Find the installed game with the shortest visible title. Launch the shortest-titled game before reading reviews. Reach the first save, checkpoint, or result screen.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "World Audio",
            "description": "Lower the music enough to notice environmental sounds, voices, machinery, and distant activity."
          },
          {
            "scope": "gameplay",
            "title": "Minimal HUD",
            "description": "Hide optional UI, but keep the quest's required goal and finish indicators visible."
          }
        ]
      },
      "de": {
        "name": "Kürzester Titel",
        "title": "Starte das Spiel mit dem kürzesten Titel, ohne Rezensionen zu lesen",
        "objective": "Finde das installierte Spiel mit dem kürzesten sichtbaren Titel. Starte das Spiel mit dem kürzesten Titel, ohne Rezensionen zu lesen. Erreiche den ersten Speicherpunkt, Kontrollpunkt oder Ergebnisbildschirm.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Geräusche der Welt",
            "description": "Drehe die Musik so weit herunter, dass du Umgebung, Stimmen und entfernte Aktivität wahrnimmst."
          },
          {
            "scope": "gameplay",
            "title": "Minimales HUD",
            "description": "Blende optionale Anzeigen aus, aber behalte Ziel und Abschluss der Quest sichtbar."
          }
        ]
      }
    }
  },
  {
    "moodId": "explore",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 190,
    "translations": {
      "en": {
        "name": "Color Beacon",
        "title": "Open the first game dominated by that color",
        "objective": "Pick the first installed cover dominated by one color, open it, enter an area dominated by that color, and reach its next checkpoint.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Bring Back One Image",
            "description": "Capture one screenshot that clearly shows the finished result or final stopping point."
          },
          {
            "scope": "gameplay",
            "title": "No Map",
            "description": "Navigate through landmarks and memory without opening a map or route overlay."
          }
        ]
      },
      "de": {
        "name": "Farbsignal",
        "title": "Öffne das erste Spiel, das von ihr bestimmt wird",
        "objective": "Wähle das erste installierte Cover mit einer dominanten Farbe, öffne das Spiel, betrete einen Bereich mit dieser Farbe und erreiche den nächsten Kontrollpunkt.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Bring ein Bild mit",
            "description": "Mache einen Screenshot, der das fertige Ergebnis oder den endgültigen Haltepunkt klar zeigt."
          },
          {
            "scope": "gameplay",
            "title": "Keine Karte",
            "description": "Navigiere mit Orientierungspunkten und Erinnerung, ohne Karte oder eingeblendete Route."
          }
        ]
      }
    }
  },
  {
    "moodId": "explore",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Early Design",
        "title": "Notice what an old level expects",
        "objective": "Find one of the oldest games you currently have installed. Start its first level and notice what its design expects from you. Reach the end of the level or its next checkpoint.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Use Basic Gear",
            "description": "Leave your strongest or rarest option unused and solve the quest with ordinary gear."
          },
          {
            "scope": "gameplay",
            "title": "No Outside Help",
            "description": "Rely only on the game: no guides, wikis, solution videos, or external maps."
          }
        ]
      },
      "de": {
        "name": "Früher Klassiker",
        "title": "Erkenne, was ein altes Level von dir erwartet",
        "objective": "Finde eines der ältesten Spiele, die du gerade installiert hast. Starte das erste Level und achte darauf, was sein Design von dir erwartet. Erreiche das Ende des Levels oder seinen nächsten Kontrollpunkt.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Nutze einfache Ausrüstung",
            "description": "Lass deine stärkste oder seltenste Option ungenutzt und löse die Quest mit gewöhnlicher Ausrüstung."
          },
          {
            "scope": "gameplay",
            "title": "Keine externe Hilfe",
            "description": "Verlasse dich nur auf das Spiel: keine Guides, Wikis, Lösungsvideos oder externen Karten."
          }
        ]
      }
    }
  },
  {
    "moodId": "explore",
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 20,
    "rewardPoints": 230,
    "translations": {
      "en": {
        "name": "First-Person Logic",
        "title": "Choose one unsolved room and inspect how its pieces connect",
        "objective": "Open a first-person game built around spatial puzzles. Choose one unsolved room and inspect how its pieces connect. Solve the room or leave one tested theory behind.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keep Your Setup",
            "description": "Keep the current character, loadout, deck, or vehicle for the entire quest."
          },
          {
            "scope": "gameplay",
            "title": "Opposite Instinct",
            "description": "Choose one meaningful option opposite to your usual habit and accept its outcome."
          }
        ]
      },
      "de": {
        "name": "First-Person-Logik",
        "title": "Wähle einen ungelösten Raum und untersuche, wie seine Teile zusammenhängen",
        "objective": "Öffne ein First-Person-Spiel mit räumlichen Rätseln. Wähle einen ungelösten Raum und untersuche, wie seine Teile zusammenhängen. Löse den Raum oder hinterlasse eine geprüfte Theorie.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Behalte dein Setup",
            "description": "Behalte die aktuelle Figur, Ausrüstung, das Deck oder Fahrzeug während der ganzen Quest."
          },
          {
            "scope": "gameplay",
            "title": "Gegenteiliger Impuls",
            "description": "Wähle eine bedeutsame Option entgegen deiner Gewohnheit und akzeptiere ihr Ergebnis."
          }
        ]
      }
    }
  },
  {
    "moodId": "explore",
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 20,
    "rewardPoints": 230,
    "translations": {
      "en": {
        "name": "Open Route",
        "title": "Reach one goal by an unused route",
        "objective": "Open a world where one objective has several routes. Reach the objective by a route you have never used. Arrive without returning to your usual route.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "No Map",
            "description": "Navigate through landmarks and memory without opening a map or route overlay."
          },
          {
            "scope": "gameplay",
            "title": "Take One Detour",
            "description": "Take one optional turn beside the main route, then return to the quest."
          }
        ]
      },
      "de": {
        "name": "Freie Route",
        "title": "Erreiche ein Ziel über eine ungenutzte Route",
        "objective": "Öffne eine Welt, in der mehrere Wege zu einem Ziel führen. Erreiche das Ziel über eine Route, die du noch nie genommen hast. Komm an, ohne auf den gewohnten Weg zurückzukehren.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keine Karte",
            "description": "Navigiere mit Orientierungspunkten und Erinnerung, ohne Karte oder eingeblendete Route."
          },
          {
            "scope": "gameplay",
            "title": "Nimm einen Umweg",
            "description": "Nimm eine optionale Abzweigung neben dem Hauptweg und kehre danach zur Quest zurück."
          }
        ]
      }
    }
  },
  {
    "moodId": "explore",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "Useful Failure",
        "title": "Finish one honest failed attempt and identify what it taught you",
        "objective": "Choose a game where losing reveals useful information. Finish one honest failed attempt and identify what it taught you. Use that lesson to survive the same mistake once.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Play It Out",
            "description": "Continue after mistakes and adapt instead of restarting, reloading, or abandoning the attempt."
          },
          {
            "scope": "gameplay",
            "title": "Let It Stand",
            "description": "Accept the first honest result, even when reloading or rerolling could improve it."
          }
        ]
      },
      "de": {
        "name": "Nützliche Niederlage",
        "title": "Beende einen ehrlichen Fehlversuch und benenne seine Lektion",
        "objective": "Wähle ein Spiel, in dem eine Niederlage nützliche Informationen liefert. Beende einen ehrlichen Fehlversuch und benenne seine Lektion. Nutze diese Lektion, um denselben Fehler einmal zu überleben.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Spiel es zu Ende",
            "description": "Spiele nach Fehlern weiter und passe dich an, statt neu zu starten oder zu laden."
          },
          {
            "scope": "gameplay",
            "title": "Lass es gelten",
            "description": "Akzeptiere das erste ehrliche Ergebnis, auch wenn Neuladen oder Neuwürfeln es verbessern könnte."
          }
        ]
      }
    }
  },
  {
    "moodId": "explore",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "Strange Shift",
        "title": "Start one shift and follow its basic routine",
        "objective": "Think of a game that lets you perform a job you know little about. Start one shift and follow its basic routine. Finish the shift.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keep Your Role",
            "description": "Choose one team responsibility and keep serving it through the complete result."
          },
          {
            "scope": "gameplay",
            "title": "Keep Your Setup",
            "description": "Keep the current character, loadout, deck, or vehicle for the entire quest."
          }
        ]
      },
      "de": {
        "name": "Seltsame Schicht",
        "title": "Starte eine Schicht und folge ihrem grundlegenden Ablauf",
        "objective": "Denk an ein Spiel, in dem du einen dir fremden Beruf ausübst. Starte eine Schicht und folge ihrem grundlegenden Ablauf. Beende die Schicht.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Bleib in deiner Rolle",
            "description": "Wähle eine Teamaufgabe und erfülle sie bis zum vollständigen Ergebnis."
          },
          {
            "scope": "gameplay",
            "title": "Behalte dein Setup",
            "description": "Behalte die aktuelle Figur, Ausrüstung, das Deck oder Fahrzeug während der ganzen Quest."
          }
        ]
      }
    }
  },
  {
    "moodId": "explore",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 210,
    "translations": {
      "en": {
        "name": "Peaceful Progress",
        "title": "Reach one nearby goal without fighting",
        "objective": "Open a game that normally allows combat. Pick one nearby objective and reach it without starting a fight. Complete the objective peacefully.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Avoid Optional Combat",
            "description": "Avoid fights that are not required; use movement, dialogue, stealth, or patience instead."
          },
          {
            "scope": "gameplay",
            "title": "No Markers",
            "description": "Disable optional markers and follow directions, signs, and clues inside the world."
          }
        ]
      },
      "de": {
        "name": "Friedlicher Fortschritt",
        "title": "Erreiche ein nahes Ziel ohne Kampf",
        "objective": "Öffne ein Spiel, das normalerweise Kämpfe erlaubt. Wähle ein nahes Ziel und erreiche es, ohne einen Kampf zu beginnen. Schließe das Ziel friedlich ab.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Vermeide optionale Kämpfe",
            "description": "Vermeide unnötige Kämpfe und nutze stattdessen Bewegung, Dialoge, Schleichen oder Geduld."
          },
          {
            "scope": "gameplay",
            "title": "Keine Marker",
            "description": "Deaktiviere optionale Marker und folge Richtungen, Schildern und Hinweisen innerhalb der Welt."
          }
        ]
      }
    }
  },
  {
    "moodId": "explore",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 210,
    "translations": {
      "en": {
        "name": "Scale Shift",
        "title": "Travel until that difference in scale becomes unmistakable",
        "objective": "Open a game with enormous structures, choose one visible oversized landmark, travel to its base, and capture the full landmark in one image.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Ground Level",
            "description": "Keep the camera close to the character or world instead of overhead or distant."
          },
          {
            "scope": "gameplay",
            "title": "Bring Back One Image",
            "description": "Capture one screenshot that clearly shows the finished result or final stopping point."
          }
        ]
      },
      "de": {
        "name": "Maßstabswechsel",
        "title": "Reise, bis dieser Maßstab unübersehbar wird",
        "objective": "Öffne ein Spiel mit riesigen Bauwerken, wähle ein sichtbares übergroßes Wahrzeichen, reise zu seinem Fuß und erfasse es vollständig auf einem Bild.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Auf Augenhöhe",
            "description": "Halte die Kamera nah an Figur oder Welt statt über dir oder weit entfernt."
          },
          {
            "scope": "gameplay",
            "title": "Bring ein Bild mit",
            "description": "Mache einen Screenshot, der das fertige Ergebnis oder den endgültigen Haltepunkt klar zeigt."
          }
        ]
      }
    }
  },
  {
    "moodId": "explore",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "Premise Test",
        "title": "Try the first activity built entirely around that idea",
        "objective": "Open a game whose main mechanic sounds unconvincing, play its first level or round built around that mechanic, and finish it once.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "No Outside Help",
            "description": "Rely only on the game: no guides, wikis, solution videos, or external maps."
          },
          {
            "scope": "gameplay",
            "title": "Play It Out",
            "description": "Continue after mistakes and adapt instead of restarting, reloading, or abandoning the attempt."
          }
        ]
      },
      "de": {
        "name": "Prämissentest",
        "title": "Probiere die erste Aktivität, die vollständig auf dieser Idee aufbaut",
        "objective": "Öffne ein Spiel, dessen Hauptmechanik dich nicht überzeugt, spiele das erste darauf aufgebaute Level oder die erste Runde und beende sie einmal.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keine externe Hilfe",
            "description": "Verlasse dich nur auf das Spiel: keine Guides, Wikis, Lösungsvideos oder externen Karten."
          },
          {
            "scope": "gameplay",
            "title": "Spiel es zu Ende",
            "description": "Spiele nach Fehlern weiter und passe dich an, statt neu zu starten oder zu laden."
          }
        ]
      }
    }
  },
  {
    "moodId": "explore",
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 20,
    "rewardPoints": 230,
    "translations": {
      "en": {
        "name": "Other Instinct",
        "title": "Choose against your instinct without reloading",
        "objective": "Open a game with a meaningful choice ahead. Choose the option opposite to your usual instinct and do not reload. Accept its result.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Full Dialogue",
            "description": "Let every spoken or written line finish before advancing."
          },
          {
            "scope": "gameplay",
            "title": "Minimal HUD",
            "description": "Hide optional UI, but keep the quest's required goal and finish indicators visible."
          }
        ]
      },
      "de": {
        "name": "Anderer Instinkt",
        "title": "Entscheide gegen deinen Impuls ohne Neuladen",
        "objective": "Öffne ein Spiel mit einer bedeutsamen Entscheidung vor dir. Wähle das Gegenteil deines üblichen Impulses und lade nicht neu. Akzeptiere das Ergebnis.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Ganzer Dialog",
            "description": "Lass jede gesprochene oder geschriebene Zeile enden, bevor du fortfährst."
          },
          {
            "scope": "gameplay",
            "title": "Minimales HUD",
            "description": "Blende optionale Anzeigen aus, aber behalte Ziel und Abschluss der Quest sichtbar."
          }
        ]
      }
    }
  },
  {
    "moodId": "explore",
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 20,
    "rewardPoints": 230,
    "translations": {
      "en": {
        "name": "Immersive Experiment",
        "title": "Ignore the marked entrance and invent another route",
        "objective": "Choose a game where one objective has several systemic solutions. Ignore the marked entrance and invent another route. Reach the objective.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "No Markers",
            "description": "Disable optional markers and follow directions, signs, and clues inside the world."
          },
          {
            "scope": "gameplay",
            "title": "Use What You Find",
            "description": "Make one useful item, tool, or resource found during the quest part of your plan."
          }
        ]
      },
      "de": {
        "name": "Immersives Experiment",
        "title": "Ignoriere den markierten Eingang und erfinde einen anderen Weg",
        "objective": "Wähle ein Spiel, in dem ein Ziel mehrere systemische Lösungen hat. Ignoriere den markierten Eingang und erfinde einen anderen Weg. Erreiche das Ziel.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keine Marker",
            "description": "Deaktiviere optionale Marker und folge Richtungen, Schildern und Hinweisen innerhalb der Welt."
          },
          {
            "scope": "gameplay",
            "title": "Nutze deinen Fund",
            "description": "Mach einen nützlichen Gegenstand, ein Werkzeug oder eine Ressource aus der Quest zum Teil deines Plans."
          }
        ]
      }
    }
  },
  {
    "moodId": "explore",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "Hidden Shortcut",
        "title": "Search its nearby walls and doors for a shortcut",
        "objective": "Open an interconnected map with a route that still feels too long. Search its nearby walls and doors for a shortcut. Open one shortcut.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "No Map",
            "description": "Navigate through landmarks and memory without opening a map or route overlay."
          },
          {
            "scope": "gameplay",
            "title": "Take One Detour",
            "description": "Take one optional turn beside the main route, then return to the quest."
          }
        ]
      },
      "de": {
        "name": "Versteckte Abkürzung",
        "title": "Suche an nahen Wänden und Türen nach einer Abkürzung",
        "objective": "Öffne eine zusammenhängende Karte mit einem Weg, der noch zu lang wirkt. Suche an nahen Wänden und Türen nach einer Abkürzung. Öffne eine Abkürzung.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keine Karte",
            "description": "Navigiere mit Orientierungspunkten und Erinnerung, ohne Karte oder eingeblendete Route."
          },
          {
            "scope": "gameplay",
            "title": "Nimm einen Umweg",
            "description": "Nimm eine optionale Abzweigung neben dem Hauptweg und kehre danach zur Quest zurück."
          }
        ]
      }
    }
  },
  {
    "moodId": "explore",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "Ancient Trail",
        "title": "Visit one site and inspect three details left behind",
        "objective": "Visit one ruin you never understood, inspect three details left behind, and capture the third detail before leaving the site.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "No Markers",
            "description": "Disable optional markers and follow directions, signs, and clues inside the world."
          },
          {
            "scope": "gameplay",
            "title": "Bring Back One Image",
            "description": "Capture one screenshot that clearly shows the finished result or final stopping point."
          }
        ]
      },
      "de": {
        "name": "Alte Spuren",
        "title": "Besuche einen Ort und untersuche drei hinterlassene Details",
        "objective": "Besuche eine Ruine, die du nie verstanden hast, untersuche drei hinterlassene Details und fotografiere das dritte, bevor du den Ort verlässt.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keine Marker",
            "description": "Deaktiviere optionale Marker und folge Richtungen, Schildern und Hinweisen innerhalb der Welt."
          },
          {
            "scope": "gameplay",
            "title": "Bring ein Bild mit",
            "description": "Mache einen Screenshot, der das fertige Ergebnis oder den endgültigen Haltepunkt klar zeigt."
          }
        ]
      }
    }
  },
  {
    "moodId": "explore",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "New Cockpit",
        "title": "Use its basic controls to begin one safe trip",
        "objective": "Open a simulator with a vehicle you have never learned. Use its basic controls to begin one safe trip. Arrive safely.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Cockpit View",
            "description": "Stay in first-person or cockpit view for the whole journey."
          },
          {
            "scope": "gameplay",
            "title": "No Outside Help",
            "description": "Rely only on the game: no guides, wikis, solution videos, or external maps."
          }
        ]
      },
      "de": {
        "name": "Neues Cockpit",
        "title": "Beginne mit den Grundfunktionen eine sichere Fahrt",
        "objective": "Öffne einen Simulator mit einem Fahrzeug, das du noch nie gelernt hast. Beginne mit den Grundfunktionen eine sichere Fahrt. Komm sicher an.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Cockpit-Sicht",
            "description": "Bleib während der ganzen Reise in der Ego- oder Cockpit-Perspektive."
          },
          {
            "scope": "gameplay",
            "title": "Keine externe Hilfe",
            "description": "Verlasse dich nur auf das Spiel: keine Guides, Wikis, Lösungsvideos oder externen Karten."
          }
        ]
      }
    }
  },
  {
    "moodId": "explore",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Tiny World",
        "title": "Inspect every edge of that area before moving on",
        "objective": "Choose a game built around one tiny area. Inspect every edge of that area before moving on. Find one hidden detail.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "One Space",
            "description": "Keep every action and change inside one small, clearly bounded area."
          },
          {
            "scope": "gameplay",
            "title": "Ground Level",
            "description": "Keep the camera close to the character or world instead of overhead or distant."
          }
        ]
      },
      "de": {
        "name": "Kleine Welt",
        "title": "Untersuche jeden Rand dieses Ortes, bevor du weitergehst",
        "objective": "Wähle ein Spiel, das um einen winzigen Bereich gebaut ist. Untersuche jeden Rand dieses Ortes, bevor du weitergehst. Finde ein verborgenes Detail.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Ein Bereich",
            "description": "Beschränke jede Aktion und Änderung auf einen kleinen, klar abgegrenzten Bereich."
          },
          {
            "scope": "gameplay",
            "title": "Auf Augenhöhe",
            "description": "Halte die Kamera nah an Figur oder Welt statt über dir oder weit entfernt."
          }
        ]
      }
    }
  },
  {
    "moodId": "explore",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Wordless World",
        "title": "Follow its shapes, movement, and sound without looking anything up",
        "objective": "Open a game that explains itself without dialogue. Follow its shapes, movement, and sound without looking anything up. Continue until the game changes the level, scene, or location.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Listen First",
            "description": "Pause for dialogue and world sounds, then let them guide your next action."
          },
          {
            "scope": "gameplay",
            "title": "Minimal HUD",
            "description": "Hide optional UI, but keep the quest's required goal and finish indicators visible."
          }
        ]
      },
      "de": {
        "name": "Wortlose Welt",
        "title": "Folge seinen Formen, Bewegungen und Geräuschen, ohne etwas nachzuschlagen",
        "objective": "Öffne ein Spiel, das sich ohne Dialog erklärt. Folge seinen Formen, Bewegungen und Geräuschen, ohne etwas nachzuschlagen. Spiele weiter, bis Level, Szene oder Ort wechseln.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Hör zuerst zu",
            "description": "Halte für Dialoge und Weltgeräusche inne und lass sie den nächsten Schritt bestimmen."
          },
          {
            "scope": "gameplay",
            "title": "Minimales HUD",
            "description": "Blende optionale Anzeigen aus, aber behalte Ziel und Abschluss der Quest sichtbar."
          }
        ]
      }
    }
  },
  {
    "moodId": "progress",
    "minimumDurationMinutes": 10,
    "suggestedDurationMinutes": 20,
    "rewardPoints": 250,
    "translations": {
      "en": {
        "name": "Untouched Start",
        "title": "Begin a new save in that untouched game",
        "objective": "Think of a game you bought but never started. Begin a new save in that untouched game. Reach the first save point.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Stay on One Goal",
            "description": "Ignore side missions and map markers so the quest stays on one clear goal."
          },
          {
            "scope": "gameplay",
            "title": "No Outside Help",
            "description": "Rely only on the game: no guides, wikis, solution videos, or external maps."
          }
        ]
      },
      "de": {
        "name": "Ungespielter Start",
        "title": "Beginne einen neuen Spielstand in diesem unberührten Spiel",
        "objective": "Denk an ein Spiel, das du gekauft, aber nie begonnen hast. Beginne einen neuen Spielstand in diesem unberührten Spiel. Erreiche den ersten Speicherpunkt.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Bleib bei einem Ziel",
            "description": "Ignoriere Nebenmissionen und Kartenmarker, damit die Quest bei einem klaren Ziel bleibt."
          },
          {
            "scope": "gameplay",
            "title": "Keine externe Hilfe",
            "description": "Verlasse dich nur auf das Spiel: keine Guides, Wikis, Lösungsvideos oder externen Karten."
          }
        ]
      }
    }
  },
  {
    "moodId": "progress",
    "minimumDurationMinutes": 10,
    "suggestedDurationMinutes": 30,
    "rewardPoints": 250,
    "translations": {
      "en": {
        "name": "Fair Chance",
        "title": "Start over and give that loop your full attention",
        "objective": "Choose a game you dismissed before understanding its main loop. Start over and give that loop your full attention. Complete the main loop once and stop when its reward or result appears.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Stay on One Goal",
            "description": "Ignore side missions and map markers so the quest stays on one clear goal."
          },
          {
            "scope": "gameplay",
            "title": "Stop Cleanly",
            "description": "End at a safe save point or result screen without starting something new."
          }
        ]
      },
      "de": {
        "name": "Faire Chance",
        "title": "Starte neu und gib ihr deine volle Aufmerksamkeit",
        "objective": "Wähle ein Spiel, das du abgebrochen hast, bevor du seine Hauptschleife verstanden hattest. Starte neu und gib ihr deine volle Aufmerksamkeit. Schließe die Hauptschleife einmal ab und stoppe bei ihrer Belohnung oder ihrem Ergebnis.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Bleib bei einem Ziel",
            "description": "Ignoriere Nebenmissionen und Kartenmarker, damit die Quest bei einem klaren Ziel bleibt."
          },
          {
            "scope": "gameplay",
            "title": "Sauber aufhören",
            "description": "Höre an einem sicheren Speicherpunkt oder Ergebnisbildschirm auf, ohne etwas Neues zu starten."
          }
        ]
      }
    }
  },
  {
    "moodId": "progress",
    "minimumDurationMinutes": 10,
    "suggestedDurationMinutes": 20,
    "rewardPoints": 250,
    "translations": {
      "en": {
        "name": "Abandoned Save",
        "title": "Resume the latest save and follow its main objective",
        "objective": "Open a campaign you abandoned after only a few sessions. Resume the latest save and follow its main objective. Reach the next named checkpoint.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keep Your Setup",
            "description": "Keep the current character, loadout, deck, or vehicle for the entire quest."
          },
          {
            "scope": "gameplay",
            "title": "Use Basic Gear",
            "description": "Leave your strongest or rarest option unused and solve the quest with ordinary gear."
          }
        ]
      },
      "de": {
        "name": "Aufgegebener Spielstand",
        "title": "Setze den letzten Spielstand fort und folge dem Hauptziel",
        "objective": "Öffne eine Kampagne, die du nach wenigen Sessions liegen gelassen hast. Setze den letzten Spielstand fort und folge dem Hauptziel. Erreiche den nächsten benannten Kontrollpunkt.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Behalte dein Setup",
            "description": "Behalte die aktuelle Figur, Ausrüstung, das Deck oder Fahrzeug während der ganzen Quest."
          },
          {
            "scope": "gameplay",
            "title": "Nutze einfache Ausrüstung",
            "description": "Lass deine stärkste oder seltenste Option ungenutzt und löse die Quest mit gewöhnlicher Ausrüstung."
          }
        ]
      }
    }
  },
  {
    "moodId": "progress",
    "minimumDurationMinutes": 10,
    "suggestedDurationMinutes": 20,
    "rewardPoints": 250,
    "translations": {
      "en": {
        "name": "Shooter Unlock",
        "title": "Earn the next reachable unlock in a solo shooter",
        "objective": "Open a solo shooter with an unlock already in reach. Check its requirement and work only toward that reward. Earn the unlock or complete its next named requirement.",
        "tips": [
          {
            "scope": "game-selection",
            "title": "Shooter Pick",
            "description": "Choose a shooter whose required mode and reward progress are already visible."
          },
          {
            "scope": "gameplay",
            "title": "Use Basic Gear",
            "description": "Leave your strongest or rarest option unused and solve the quest with ordinary gear."
          }
        ]
      },
      "de": {
        "name": "Shooter-Freischaltung",
        "title": "Hol dir die nächste erreichbare Freischaltung im Solo-Shooter",
        "objective": "Öffne einen Solo-Shooter mit einer Freischaltung in Reichweite. Prüfe ihre Bedingung und arbeite nur auf diese Belohnung hin. Schalte sie frei oder verfolge sie.",
        "tips": [
          {
            "scope": "game-selection",
            "title": "Shooter wählen",
            "description": "Nimm einen Shooter mit sichtbarem Modus und Fortschritt zur Belohnung."
          },
          {
            "scope": "gameplay",
            "title": "Nutze einfache Ausrüstung",
            "description": "Lass deine stärkste oder seltenste Option ungenutzt und löse die Quest mit gewöhnlicher Ausrüstung."
          }
        ]
      }
    }
  },
  {
    "moodId": "progress",
    "minimumDurationMinutes": 10,
    "suggestedDurationMinutes": 30,
    "rewardPoints": 250,
    "translations": {
      "en": {
        "name": "Nearest Campaign",
        "title": "Continue its main story without taking side quests",
        "objective": "Choose the unfinished campaign closest to its ending. Continue its main story without taking side quests. Reach the next story milestone.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Play It Out",
            "description": "Continue after mistakes and adapt instead of restarting, reloading, or abandoning the attempt."
          },
          {
            "scope": "gameplay",
            "title": "Use What You Find",
            "description": "Make one useful item, tool, or resource found during the quest part of your plan."
          }
        ]
      },
      "de": {
        "name": "Nächste Kampagne",
        "title": "Setze die Hauptgeschichte ohne Nebenquests fort",
        "objective": "Wähle die unfertige Kampagne, die ihrem Ende am nächsten ist. Setze die Hauptgeschichte ohne Nebenquests fort. Erreiche den nächsten Story-Meilenstein.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Spiel es zu Ende",
            "description": "Spiele nach Fehlern weiter und passe dich an, statt neu zu starten oder zu laden."
          },
          {
            "scope": "gameplay",
            "title": "Nutze deinen Fund",
            "description": "Mach einen nützlichen Gegenstand, ein Werkzeug oder eine Ressource aus der Quest zum Teil deines Plans."
          }
        ]
      }
    }
  },
  {
    "moodId": "progress",
    "minimumDurationMinutes": 10,
    "suggestedDurationMinutes": 20,
    "rewardPoints": 250,
    "translations": {
      "en": {
        "name": "Installed Promise",
        "title": "Start its nearest meaningful activity now",
        "objective": "Pick a game you keep installed but repeatedly skip. Start its nearest meaningful activity now. Complete that activity and stop at its result screen.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "No Outside Help",
            "description": "Rely only on the game: no guides, wikis, solution videos, or external maps."
          },
          {
            "scope": "gameplay",
            "title": "Let It Stand",
            "description": "Accept the first honest result, even when reloading or rerolling could improve it."
          }
        ]
      },
      "de": {
        "name": "Installierter Kandidat",
        "title": "Starte jetzt die nächste sinnvolle Aktivität",
        "objective": "Nimm ein Spiel, das installiert bleibt, obwohl du es ständig überspringst. Starte jetzt die nächste sinnvolle Aktivität. Schließe diese Aktivität ab und stoppe am Ergebnisbildschirm.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keine externe Hilfe",
            "description": "Verlasse dich nur auf das Spiel: keine Guides, Wikis, Lösungsvideos oder externen Karten."
          },
          {
            "scope": "gameplay",
            "title": "Lass es gelten",
            "description": "Akzeptiere das erste ehrliche Ergebnis, auch wenn Neuladen oder Neuwürfeln es verbessern könnte."
          }
        ]
      }
    }
  },
  {
    "moodId": "progress",
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 20,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "Oldest Save",
        "title": "Read the current goal and move toward it immediately",
        "objective": "Open the active save you have ignored the longest. Read the current goal and move toward it immediately. Reach one new checkpoint.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Stay on One Goal",
            "description": "Ignore side missions and map markers so the quest stays on one clear goal."
          },
          {
            "scope": "gameplay",
            "title": "Keep Your Setup",
            "description": "Keep the current character, loadout, deck, or vehicle for the entire quest."
          }
        ]
      },
      "de": {
        "name": "Ältester Spielstand",
        "title": "Lies das aktuelle Ziel und geh sofort darauf zu",
        "objective": "Öffne den aktiven Spielstand, den du am längsten ignoriert hast. Lies das aktuelle Ziel und geh sofort darauf zu. Erreiche einen neuen Kontrollpunkt.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Bleib bei einem Ziel",
            "description": "Ignoriere Nebenmissionen und Kartenmarker, damit die Quest bei einem klaren Ziel bleibt."
          },
          {
            "scope": "gameplay",
            "title": "Behalte dein Setup",
            "description": "Behalte die aktuelle Figur, Ausrüstung, das Deck oder Fahrzeug während der ganzen Quest."
          }
        ]
      }
    }
  },
  {
    "moodId": "progress",
    "minimumDurationMinutes": 10,
    "suggestedDurationMinutes": 20,
    "rewardPoints": 230,
    "translations": {
      "en": {
        "name": "Oldest Quest",
        "title": "Ignore newer entries and follow only that one",
        "objective": "Open a quest log and find its oldest reachable task. Ignore newer entries and follow only that one. Finish it or complete its next named step.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "No Optional Loot",
            "description": "Ignore optional loot and keep inventory management to only what progress requires."
          },
          {
            "scope": "gameplay",
            "title": "Memory First",
            "description": "Use memory first; open controls, maps, or tutorials only when truly stuck."
          }
        ]
      },
      "de": {
        "name": "Älteste Quest",
        "title": "Ignoriere neuere Einträge und verfolge nur diese eine",
        "objective": "Öffne ein Questlog und finde die älteste erreichbare Aufgabe. Ignoriere neuere Einträge und verfolge nur diese eine. Beende sie oder bringe sie voran.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keine optionale Beute",
            "description": "Ignoriere optionale Beute und beschränke Inventarverwaltung auf das, was der Fortschritt verlangt."
          },
          {
            "scope": "gameplay",
            "title": "Erst aus Erinnerung",
            "description": "Nutze zuerst dein Gedächtnis; öffne Steuerung, Karte oder Tutorial nur, wenn du feststeckst."
          }
        ]
      }
    }
  },
  {
    "moodId": "progress",
    "minimumDurationMinutes": 10,
    "suggestedDurationMinutes": 20,
    "rewardPoints": 230,
    "translations": {
      "en": {
        "name": "System Breakthrough",
        "title": "Use that system in real play instead of reading about it",
        "objective": "Return to a game with one intimidating system, use it during a tracked task, and stop when that action advances the task once.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "No Outside Help",
            "description": "Rely only on the game: no guides, wikis, solution videos, or external maps."
          },
          {
            "scope": "gameplay",
            "title": "One Main Tool",
            "description": "Choose one tool or action and make it your main answer throughout the quest."
          }
        ]
      },
      "de": {
        "name": "Systemdurchbruch",
        "title": "Nutze es im Spiel, statt nur darüber zu lesen",
        "objective": "Kehre zu einem Spiel mit einem einschüchternden System zurück, nutze es in einer verfolgten Aufgabe und höre auf, sobald die Aktion die Aufgabe einmal voranbringt.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keine externe Hilfe",
            "description": "Verlasse dich nur auf das Spiel: keine Guides, Wikis, Lösungsvideos oder externen Karten."
          },
          {
            "scope": "gameplay",
            "title": "Ein Hauptwerkzeug",
            "description": "Wähle ein Werkzeug oder eine Aktion als deine Hauptlösung für die ganze Quest."
          }
        ]
      }
    }
  },
  {
    "moodId": "progress",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 210,
    "translations": {
      "en": {
        "name": "Puzzle Breakthrough",
        "title": "Reconstruct the problem and test one new approach at a time",
        "objective": "Open the puzzle that blocked an unfinished game. Reconstruct the problem and test one new approach at a time. Solve it or test three approaches.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Play It Out",
            "description": "Continue after mistakes and adapt instead of restarting, reloading, or abandoning the attempt."
          },
          {
            "scope": "gameplay",
            "title": "Use Basic Gear",
            "description": "Leave your strongest or rarest option unused and solve the quest with ordinary gear."
          }
        ]
      },
      "de": {
        "name": "Rätseldurchbruch",
        "title": "Rekonstruiere das Problem und teste jeweils einen neuen Ansatz",
        "objective": "Öffne das Rätsel, das ein unfertiges Spiel blockiert. Rekonstruiere das Problem und teste jeweils einen neuen Ansatz. Löse es oder teste drei Ansätze.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Spiel es zu Ende",
            "description": "Spiele nach Fehlern weiter und passe dich an, statt neu zu starten oder zu laden."
          },
          {
            "scope": "gameplay",
            "title": "Nutze einfache Ausrüstung",
            "description": "Lass deine stärkste oder seltenste Option ungenutzt und löse die Quest mit gewöhnlicher Ausrüstung."
          }
        ]
      }
    }
  },
  {
    "moodId": "progress",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 180,
    "translations": {
      "en": {
        "name": "Map Pocket",
        "title": "Enter that pocket and follow its nearest marker",
        "objective": "Open a familiar map with one small unfinished pocket. Enter that pocket and follow its nearest marker. Reveal the area and finish its task.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Bring Back One Image",
            "description": "Capture one screenshot that clearly shows the finished result or final stopping point."
          },
          {
            "scope": "gameplay",
            "title": "Take One Detour",
            "description": "Take one optional turn beside the main route, then return to the quest."
          }
        ]
      },
      "de": {
        "name": "Kartenausschnitt",
        "title": "Betritt ihn und folge seinem nächsten Marker",
        "objective": "Öffne eine vertraute Karte mit einem kleinen unfertigen Bereich. Betritt ihn und folge seinem nächsten Marker. Decke den Bereich auf und beende seine Aufgabe.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Bring ein Bild mit",
            "description": "Mache einen Screenshot, der das fertige Ergebnis oder den endgültigen Haltepunkt klar zeigt."
          },
          {
            "scope": "gameplay",
            "title": "Nimm einen Umweg",
            "description": "Nimm eine optionale Abzweigung neben dem Hauptweg und kehre danach zur Quest zurück."
          }
        ]
      }
    }
  },
  {
    "moodId": "progress",
    "minimumDurationMinutes": 10,
    "suggestedDurationMinutes": 25,
    "rewardPoints": 240,
    "translations": {
      "en": {
        "name": "Expansion Door",
        "title": "Start its first quest without revisiting the base game first",
        "objective": "Choose an expansion you own but never entered. Start its first quest without revisiting the base game first. Reach its first unique location.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Stay on One Goal",
            "description": "Ignore side missions and map markers so the quest stays on one clear goal."
          },
          {
            "scope": "gameplay",
            "title": "No Outside Help",
            "description": "Rely only on the game: no guides, wikis, solution videos, or external maps."
          }
        ]
      },
      "de": {
        "name": "Erweiterungstür",
        "title": "Starte ihre erste Quest, ohne vorher ins Hauptspiel zurückzukehren",
        "objective": "Wähle eine Erweiterung, die du besitzt, aber nie betreten hast. Starte ihre erste Quest, ohne vorher ins Hauptspiel zurückzukehren. Erreiche ihren ersten eigenen Ort.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Bleib bei einem Ziel",
            "description": "Ignoriere Nebenmissionen und Kartenmarker, damit die Quest bei einem klaren Ziel bleibt."
          },
          {
            "scope": "gameplay",
            "title": "Keine externe Hilfe",
            "description": "Verlasse dich nur auf das Spiel: keine Guides, Wikis, Lösungsvideos oder externen Karten."
          }
        ]
      }
    }
  },
  {
    "moodId": "progress",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Other Hero",
        "title": "Use only that character for the next available activity",
        "objective": "Pick a playable character you have neglected. Use only that character for the next available activity. Earn one level or unlock.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "One Move Deeper",
            "description": "Choose one mechanic and use it deliberately in three different situations."
          },
          {
            "scope": "gameplay",
            "title": "Use Basic Gear",
            "description": "Leave your strongest or rarest option unused and solve the quest with ordinary gear."
          }
        ]
      },
      "de": {
        "name": "Andere Figur",
        "title": "Nutze nur diese Figur für die nächste verfügbare Aktivität",
        "objective": "Wähle eine spielbare Figur, die du vernachlässigt hast. Nutze nur diese Figur für die nächste verfügbare Aktivität. Verdiene einen Levelaufstieg oder eine Freischaltung.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Eine Technik tiefer",
            "description": "Wähle eine Mechanik und nutze sie bewusst in drei unterschiedlichen Situationen."
          },
          {
            "scope": "gameplay",
            "title": "Nutze einfache Ausrüstung",
            "description": "Lass deine stärkste oder seltenste Option ungenutzt und löse die Quest mit gewöhnlicher Ausrüstung."
          }
        ]
      }
    }
  },
  {
    "moodId": "progress",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 170,
    "translations": {
      "en": {
        "name": "Controls Relearned",
        "title": "Run its tutorial and repeat the most important action",
        "objective": "Open a game you want to remember how to play. Run its tutorial and repeat the most important action. Use that action successfully.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Use Basic Gear",
            "description": "Leave your strongest or rarest option unused and solve the quest with ordinary gear."
          },
          {
            "scope": "gameplay",
            "title": "No Outside Help",
            "description": "Rely only on the game: no guides, wikis, solution videos, or external maps."
          }
        ]
      },
      "de": {
        "name": "Steuerung neu gelernt",
        "title": "Spiele das Tutorial und wiederhole die wichtigste Aktion",
        "objective": "Öffne ein Spiel, dessen Steuerung du wieder lernen möchtest. Spiele das Tutorial und wiederhole die wichtigste Aktion. Nutze diese Aktion erfolgreich.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Nutze einfache Ausrüstung",
            "description": "Lass deine stärkste oder seltenste Option ungenutzt und löse die Quest mit gewöhnlicher Ausrüstung."
          },
          {
            "scope": "gameplay",
            "title": "Keine externe Hilfe",
            "description": "Verlasse dich nur auf das Spiel: keine Guides, Wikis, Lösungsvideos oder externen Karten."
          }
        ]
      }
    }
  },
  {
    "moodId": "progress",
    "minimumDurationMinutes": 10,
    "suggestedDurationMinutes": 25,
    "rewardPoints": 240,
    "translations": {
      "en": {
        "name": "Remembered Thread",
        "title": "Follow the main thread toward that answer",
        "objective": "Return to an unfinished story whose unanswered question still bothers you. Follow the main thread toward that answer. Reach the next reveal.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "No Map",
            "description": "Navigate through landmarks and memory without opening a map or route overlay."
          },
          {
            "scope": "gameplay",
            "title": "Stay on One Goal",
            "description": "Ignore side missions and map markers so the quest stays on one clear goal."
          }
        ]
      },
      "de": {
        "name": "Erinnerter Handlungsstrang",
        "title": "Folge dem Hauptstrang in Richtung Antwort",
        "objective": "Kehre zu einer unfertigen Geschichte zurück, deren offene Frage dich noch beschäftigt. Folge dem Hauptstrang in Richtung Antwort. Erreiche die nächste Enthüllung.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keine Karte",
            "description": "Navigiere mit Orientierungspunkten und Erinnerung, ohne Karte oder eingeblendete Route."
          },
          {
            "scope": "gameplay",
            "title": "Bleib bei einem Ziel",
            "description": "Ignoriere Nebenmissionen und Kartenmarker, damit die Quest bei einem klaren Ziel bleibt."
          }
        ]
      }
    }
  },
  {
    "moodId": "progress",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 190,
    "translations": {
      "en": {
        "name": "Rust Removed",
        "title": "Play three rounds without comparing old ranks",
        "objective": "Open a competitive game you once played well. Play three honest rounds without comparing yourself to your old rank. Finish all three rounds.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keep Your Setup",
            "description": "Keep the current character, loadout, deck, or vehicle for the entire quest."
          },
          {
            "scope": "gameplay",
            "title": "Play It Out",
            "description": "Continue after mistakes and adapt instead of restarting, reloading, or abandoning the attempt."
          }
        ]
      },
      "de": {
        "name": "Rost abgeschüttelt",
        "title": "Spiele drei Runden ohne Vergleich zum alten Rang",
        "objective": "Öffne ein kompetitives Spiel, das du früher gut konntest. Spiele drei ehrliche Runden, ohne dich mit deinem alten Rang zu vergleichen. Beende alle drei Runden.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Behalte dein Setup",
            "description": "Behalte die aktuelle Figur, Ausrüstung, das Deck oder Fahrzeug während der ganzen Quest."
          },
          {
            "scope": "gameplay",
            "title": "Spiel es zu Ende",
            "description": "Spiele nach Fehlern weiter und passe dich an, statt neu zu starten oder zu laden."
          }
        ]
      }
    }
  },
  {
    "moodId": "progress",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Achievement Get",
        "title": "Read its exact requirement and work only toward it",
        "objective": "Open a game with an achievement that is already close. Read its exact requirement and work only toward it. Unlock it or make three full attempts.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "No Outside Help",
            "description": "Rely only on the game: no guides, wikis, solution videos, or external maps."
          },
          {
            "scope": "gameplay",
            "title": "Let It Stand",
            "description": "Accept the first honest result, even when reloading or rerolling could improve it."
          }
        ]
      },
      "de": {
        "name": "Achievement Get",
        "title": "Lies die genaue Bedingung und arbeite nur darauf hin",
        "objective": "Öffne ein Spiel mit einem Achievement, das fast erreicht ist. Lies die genaue Bedingung und arbeite nur darauf hin. Schalte es frei oder unternimm drei vollständige Versuche.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keine externe Hilfe",
            "description": "Verlasse dich nur auf das Spiel: keine Guides, Wikis, Lösungsvideos oder externen Karten."
          },
          {
            "scope": "gameplay",
            "title": "Lass es gelten",
            "description": "Akzeptiere das erste ehrliche Ergebnis, auch wenn Neuladen oder Neuwürfeln es verbessern könnte."
          }
        ]
      }
    }
  },
  {
    "moodId": "progress",
    "minimumDurationMinutes": 10,
    "suggestedDurationMinutes": 20,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "Someone Thought of You",
        "title": "Start the gifted game with its giver in mind",
        "objective": "Think of a game someone gave you that never received a fair session. Start the gifted game with its giver in mind. Reach the first save, checkpoint, or result screen.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Stop Cleanly",
            "description": "End at a safe save point or result screen without starting something new."
          },
          {
            "scope": "gameplay",
            "title": "Move Without Rushing",
            "description": "Avoid sprinting, boosting, or skipping ahead; let the journey set the pace."
          }
        ]
      },
      "de": {
        "name": "Für dich gewählt",
        "title": "Starte das geschenkte Spiel mit der schenkenden Person im Kopf",
        "objective": "Denk an ein Spiel, das dir jemand geschenkt hat und dem du nie eine faire Session gegeben hast. Starte das geschenkte Spiel mit der schenkenden Person im Kopf. Erreiche den ersten Speicherpunkt, Kontrollpunkt oder Ergebnisbildschirm.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Sauber aufhören",
            "description": "Höre an einem sicheren Speicherpunkt oder Ergebnisbildschirm auf, ohne etwas Neues zu starten."
          },
          {
            "scope": "gameplay",
            "title": "Ohne Eile",
            "description": "Vermeide Sprinten, Boosts und Abkürzungen; lass den Weg das Tempo bestimmen."
          }
        ]
      }
    }
  },
  {
    "moodId": "progress",
    "minimumDurationMinutes": 10,
    "suggestedDurationMinutes": 25,
    "rewardPoints": 230,
    "translations": {
      "en": {
        "name": "Short Campaign",
        "title": "Continue its main path and ignore optional content",
        "objective": "Choose the shortest unfinished campaign in your library. Continue its main path and ignore optional content. Finish one chapter.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "No Markers",
            "description": "Disable optional markers and follow directions, signs, and clues inside the world."
          },
          {
            "scope": "gameplay",
            "title": "Memory First",
            "description": "Use memory first; open controls, maps, or tutorials only when truly stuck."
          }
        ]
      },
      "de": {
        "name": "Kurze Kampagne",
        "title": "Folge ihrem Hauptweg und ignoriere optionale Inhalte",
        "objective": "Wähle die kürzeste unfertige Kampagne in deiner Bibliothek. Folge ihrem Hauptweg und ignoriere optionale Inhalte. Beende ein Kapitel.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keine Marker",
            "description": "Deaktiviere optionale Marker und folge Richtungen, Schildern und Hinweisen innerhalb der Welt."
          },
          {
            "scope": "gameplay",
            "title": "Erst aus Erinnerung",
            "description": "Nutze zuerst dein Gedächtnis; öffne Steuerung, Karte oder Tutorial nur, wenn du feststeckst."
          }
        ]
      }
    }
  },
  {
    "moodId": "progress",
    "minimumDurationMinutes": 10,
    "suggestedDurationMinutes": 30,
    "rewardPoints": 240,
    "translations": {
      "en": {
        "name": "Midgame Momentum",
        "title": "Pick the current main quest and follow it without detours",
        "objective": "Open a campaign stranded in its middle. Pick the current main quest and follow it without detours. Finish that quest.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Play It Out",
            "description": "Continue after mistakes and adapt instead of restarting, reloading, or abandoning the attempt."
          },
          {
            "scope": "gameplay",
            "title": "Let It Stand",
            "description": "Accept the first honest result, even when reloading or rerolling could improve it."
          }
        ]
      },
      "de": {
        "name": "Fortschritt im Mittelteil",
        "title": "Wähle die aktuelle Hauptquest und folge ihr ohne Umwege",
        "objective": "Öffne eine Kampagne, die in ihrer Mitte feststeckt. Wähle die aktuelle Hauptquest und folge ihr ohne Umwege. Beende diese Quest.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Spiel es zu Ende",
            "description": "Spiele nach Fehlern weiter und passe dich an, statt neu zu starten oder zu laden."
          },
          {
            "scope": "gameplay",
            "title": "Lass es gelten",
            "description": "Akzeptiere das erste ehrliche Ergebnis, auch wenn Neuladen oder Neuwürfeln es verbessern könnte."
          }
        ]
      }
    }
  },
  {
    "moodId": "progress",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 180,
    "translations": {
      "en": {
        "name": "Inventory Relief",
        "title": "Equip one usable kit and store everything else",
        "objective": "Open a save blocked by an overloaded inventory. Equip one usable kit and store everything else. Leave the menu with free space.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Stay on One Goal",
            "description": "Ignore side missions and map markers so the quest stays on one clear goal."
          },
          {
            "scope": "gameplay",
            "title": "Stop Cleanly",
            "description": "End at a safe save point or result screen without starting something new."
          }
        ]
      },
      "de": {
        "name": "Inventar entlastet",
        "title": "Rüste ein brauchbares Set aus und lagere alles andere ein",
        "objective": "Öffne einen Spielstand, der an einem überfüllten Inventar hängt. Rüste ein brauchbares Set aus und lagere alles andere ein. Verlasse das Menü mit freiem Platz.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Bleib bei einem Ziel",
            "description": "Ignoriere Nebenmissionen und Kartenmarker, damit die Quest bei einem klaren Ziel bleibt."
          },
          {
            "scope": "gameplay",
            "title": "Sauber aufhören",
            "description": "Höre an einem sicheren Speicherpunkt oder Ergebnisbildschirm auf, ohne etwas Neues zu starten."
          }
        ]
      }
    }
  },
  {
    "moodId": "progress",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 190,
    "translations": {
      "en": {
        "name": "Reliable Technique",
        "title": "Practice it briefly, then use it during real play",
        "objective": "Choose one move you only half understand. Practice it briefly, then use it during real play. Land it three times.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "No Outside Help",
            "description": "Rely only on the game: no guides, wikis, solution videos, or external maps."
          },
          {
            "scope": "gameplay",
            "title": "Play It Out",
            "description": "Continue after mistakes and adapt instead of restarting, reloading, or abandoning the attempt."
          }
        ]
      },
      "de": {
        "name": "Verlässliche Technik",
        "title": "Übe sie kurz und nutze sie dann im echten Spiel",
        "objective": "Wähle eine Technik, die du nur halb beherrschst. Übe sie kurz und nutze sie dann im echten Spiel. Führe sie dreimal erfolgreich aus.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keine externe Hilfe",
            "description": "Verlasse dich nur auf das Spiel: keine Guides, Wikis, Lösungsvideos oder externen Karten."
          },
          {
            "scope": "gameplay",
            "title": "Spiel es zu Ende",
            "description": "Spiele nach Fehlern weiter und passe dich an, statt neu zu starten oder zu laden."
          }
        ]
      }
    }
  },
  {
    "moodId": "progress",
    "minimumDurationMinutes": 10,
    "suggestedDurationMinutes": 25,
    "rewardPoints": 240,
    "translations": {
      "en": {
        "name": "The Lost Chapter",
        "title": "Start the missing sequel without replaying earlier entries",
        "objective": "Find the unplayed entry that fills a gap in a series you know. Start the missing sequel without replaying earlier entries. Reach its first major save point.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Stay on One Goal",
            "description": "Ignore side missions and map markers so the quest stays on one clear goal."
          },
          {
            "scope": "gameplay",
            "title": "No Outside Help",
            "description": "Rely only on the game: no guides, wikis, solution videos, or external maps."
          }
        ]
      },
      "de": {
        "name": "Verlorenes Kapitel",
        "title": "Starte den fehlenden Nachfolger, ohne frühere Teile zu wiederholen",
        "objective": "Finde den ungespielten Teil, der eine Lücke in einer bekannten Reihe schließt. Starte den fehlenden Nachfolger, ohne frühere Teile zu wiederholen. Erreiche den ersten großen Speicherpunkt.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Bleib bei einem Ziel",
            "description": "Ignoriere Nebenmissionen und Kartenmarker, damit die Quest bei einem klaren Ziel bleibt."
          },
          {
            "scope": "gameplay",
            "title": "Keine externe Hilfe",
            "description": "Verlasse dich nur auf das Spiel: keine Guides, Wikis, Lösungsvideos oder externen Karten."
          }
        ]
      }
    }
  },
  {
    "moodId": "progress",
    "minimumDurationMinutes": 10,
    "suggestedDurationMinutes": 20,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "Nearby Upgrade",
        "title": "Check its cost and pursue that upgrade alone",
        "objective": "Open a save with one useful upgrade already in reach. Check its cost and pursue that upgrade alone. Earn and use it.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Spend the Good Stuff",
            "description": "Spend one valuable item, ability, or currency you would normally keep for later."
          },
          {
            "scope": "gameplay",
            "title": "No Optional Loot",
            "description": "Ignore optional loot and keep inventory management to only what progress requires."
          }
        ]
      },
      "de": {
        "name": "Nahes Upgrade",
        "title": "Prüfe seine Kosten und verfolge nur dieses Upgrade",
        "objective": "Öffne einen Spielstand mit einem nützlichen Upgrade in Reichweite. Prüfe seine Kosten und verfolge nur dieses Upgrade. Verdiene und nutze es.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Nutze das Wertvolle",
            "description": "Verbrauche einen wertvollen Gegenstand, eine Fähigkeit oder Währung, die du sonst für später sparst."
          },
          {
            "scope": "gameplay",
            "title": "Keine optionale Beute",
            "description": "Ignoriere optionale Beute und beschränke Inventarverwaltung auf das, was der Fortschritt verlangt."
          }
        ]
      }
    }
  },
  {
    "moodId": "progress",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 180,
    "translations": {
      "en": {
        "name": "Friction Removed",
        "title": "Change that setting once and resume immediately",
        "objective": "Return to a good game blocked by one annoying setting. Change that setting once and resume immediately. Reach the next save, checkpoint, or result screen.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Minimal HUD",
            "description": "Hide optional UI, but keep the quest's required goal and finish indicators visible."
          },
          {
            "scope": "gameplay",
            "title": "No Optional Recovery",
            "description": "Use no optional healing or repair items; recover only when the game requires it."
          }
        ]
      },
      "de": {
        "name": "Hürde entfernt",
        "title": "Ändere sie einmal und spiele sofort weiter",
        "objective": "Kehre zu einem guten Spiel zurück, das an einer störenden Einstellung hängt. Ändere sie einmal und spiele sofort weiter. Erreiche den nächsten Speicherpunkt, Kontrollpunkt oder Ergebnisbildschirm.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Minimales HUD",
            "description": "Blende optionale Anzeigen aus, aber behalte Ziel und Abschluss der Quest sichtbar."
          },
          {
            "scope": "gameplay",
            "title": "Keine optionale Heilung",
            "description": "Nutze keine optionalen Heil- oder Reparaturgegenstände; erhole dich nur, wenn das Spiel es verlangt."
          }
        ]
      }
    }
  },
  {
    "moodId": "progress",
    "minimumDurationMinutes": 10,
    "suggestedDurationMinutes": 20,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "Favorite Loose End",
        "title": "Select that exact task and ignore everything around it",
        "objective": "Open a favorite game with one overlooked task. Select that exact task and ignore everything around it. Finish it and save.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Favorite Setup",
            "description": "Use the character, loadout, deck, or vehicle you most associate with this game."
          },
          {
            "scope": "gameplay",
            "title": "World Audio",
            "description": "Lower the music enough to notice environmental sounds, voices, machinery, and distant activity."
          }
        ]
      },
      "de": {
        "name": "Offene Lieblingsaufgabe",
        "title": "Wähle genau diese Aufgabe und ignoriere alles drumherum",
        "objective": "Öffne ein Lieblingsspiel mit einer übersehenen Aufgabe. Wähle genau diese Aufgabe und ignoriere alles drumherum. Beende sie und speichere.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Lieblings-Setup",
            "description": "Nutze die Figur, Ausrüstung, das Deck oder Fahrzeug, das du damit verbindest."
          },
          {
            "scope": "gameplay",
            "title": "Geräusche der Welt",
            "description": "Drehe die Musik so weit herunter, dass du Umgebung, Stimmen und entfernte Aktivität wahrnimmst."
          }
        ]
      }
    }
  },
  {
    "moodId": "progress",
    "minimumDurationMinutes": 10,
    "suggestedDurationMinutes": 20,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "Other Branch",
        "title": "Enter that branch and accept its first meaningful choice",
        "objective": "Open a story save with a branch you skipped. Enter that branch and accept its first meaningful choice. Reach one unique outcome.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Take One Detour",
            "description": "Take one optional turn beside the main route, then return to the quest."
          },
          {
            "scope": "gameplay",
            "title": "No Map",
            "description": "Navigate through landmarks and memory without opening a map or route overlay."
          }
        ]
      },
      "de": {
        "name": "Anderer Zweig",
        "title": "Betritt ihn und akzeptiere seine erste bedeutsame Entscheidung",
        "objective": "Öffne einen Story-Spielstand mit einem Weg, den du ausgelassen hast. Betritt ihn und akzeptiere seine erste bedeutsame Entscheidung. Erreiche ein einzigartiges Ergebnis.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Nimm einen Umweg",
            "description": "Nimm eine optionale Abzweigung neben dem Hauptweg und kehre danach zur Quest zurück."
          },
          {
            "scope": "gameplay",
            "title": "Keine Karte",
            "description": "Navigiere mit Orientierungspunkten und Erinnerung, ohne Karte oder eingeblendete Route."
          }
        ]
      }
    }
  },
  {
    "moodId": "progress",
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 20,
    "rewardPoints": 210,
    "translations": {
      "en": {
        "name": "Secondary Save",
        "title": "Choose its nearest milestone and make that save useful again",
        "objective": "Open a secondary save you stopped using. Choose its nearest milestone and make that save useful again. Reach the milestone.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Let It Stand",
            "description": "Accept the first honest result, even when reloading or rerolling could improve it."
          },
          {
            "scope": "gameplay",
            "title": "Play It Out",
            "description": "Continue after mistakes and adapt instead of restarting, reloading, or abandoning the attempt."
          }
        ]
      },
      "de": {
        "name": "Zweiter Spielstand",
        "title": "Wähle seinen nächsten Meilenstein und mach ihn wieder sinnvoll",
        "objective": "Öffne einen zweiten Spielstand, den du nicht mehr nutzt. Wähle seinen nächsten Meilenstein und mach ihn wieder sinnvoll. Erreiche den Meilenstein.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Lass es gelten",
            "description": "Akzeptiere das erste ehrliche Ergebnis, auch wenn Neuladen oder Neuwürfeln es verbessern könnte."
          },
          {
            "scope": "gameplay",
            "title": "Spiel es zu Ende",
            "description": "Spiele nach Fehlern weiter und passe dich an, statt neu zu starten oder zu laden."
          }
        ]
      }
    }
  },
  {
    "moodId": "progress",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Transferred Skill",
        "title": "Use that familiar skill deliberately",
        "objective": "Choose a game that shares one skill with a game you know well. Use that familiar skill deliberately. Finish one challenge with it.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Use Basic Gear",
            "description": "Leave your strongest or rarest option unused and solve the quest with ordinary gear."
          },
          {
            "scope": "gameplay",
            "title": "One Move Deeper",
            "description": "Choose one mechanic and use it deliberately in three different situations."
          }
        ]
      },
      "de": {
        "name": "Übertragene Fähigkeit",
        "title": "Setze diese bekannte Stärke bewusst ein",
        "objective": "Wähle ein Spiel, das eine Fähigkeit mit einem vertrauten Spiel teilt. Setze diese bekannte Stärke bewusst ein. Beende damit eine Herausforderung.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Nutze einfache Ausrüstung",
            "description": "Lass deine stärkste oder seltenste Option ungenutzt und löse die Quest mit gewöhnlicher Ausrüstung."
          },
          {
            "scope": "gameplay",
            "title": "Eine Technik tiefer",
            "description": "Wähle eine Mechanik und nutze sie bewusst in drei unterschiedlichen Situationen."
          }
        ]
      }
    }
  },
  {
    "moodId": "progress",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Stored Power Spent",
        "title": "Spend it on the nearest useful improvement",
        "objective": "Open a save holding a rare resource you always save for later. Spend it on the nearest useful improvement. Use that improvement.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "First Instinct",
            "description": "Take the first sincere choice that feels right without comparing every alternative."
          },
          {
            "scope": "gameplay",
            "title": "Let It Stand",
            "description": "Accept the first honest result, even when reloading or rerolling could improve it."
          }
        ]
      },
      "de": {
        "name": "Gehorteter Vorrat",
        "title": "Gib sie für die nächste nützliche Verbesserung aus",
        "objective": "Öffne einen Spielstand mit einer seltenen Ressource, die du immer für später sparst. Gib sie für die nächste nützliche Verbesserung aus. Nutze diese Verbesserung.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Erster Impuls",
            "description": "Nimm die erste ehrliche Wahl, die sich richtig anfühlt, ohne alle Alternativen zu vergleichen."
          },
          {
            "scope": "gameplay",
            "title": "Lass es gelten",
            "description": "Akzeptiere das erste ehrliche Ergebnis, auch wenn Neuladen oder Neuwürfeln es verbessern könnte."
          }
        ]
      }
    }
  },
  {
    "moodId": "progress",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Tutorial Finished",
        "title": "Start the tutorial from the beginning and follow every required step",
        "objective": "Return to a game whose tutorial you abandoned. Start the tutorial from the beginning and follow every required step. Finish it and use one lesson.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "No Outside Help",
            "description": "Rely only on the game: no guides, wikis, solution videos, or external maps."
          },
          {
            "scope": "gameplay",
            "title": "One Move Deeper",
            "description": "Choose one mechanic and use it deliberately in three different situations."
          }
        ]
      },
      "de": {
        "name": "Tutorial abgeschlossen",
        "title": "Starte es neu und folge jedem erforderlichen Schritt",
        "objective": "Kehre zu einem Spiel zurück, dessen Tutorial du abgebrochen hast. Starte es neu und folge jedem erforderlichen Schritt. Beende es und nutze eine Lektion daraus.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keine externe Hilfe",
            "description": "Verlasse dich nur auf das Spiel: keine Guides, Wikis, Lösungsvideos oder externen Karten."
          },
          {
            "scope": "gameplay",
            "title": "Eine Technik tiefer",
            "description": "Wähle eine Mechanik und nutze sie bewusst in drei unterschiedlichen Situationen."
          }
        ]
      }
    }
  },
  {
    "moodId": "progress",
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 20,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "Roguelike Momentum",
        "title": "Start one run and spend its rewards immediately afterward",
        "objective": "Open a run-based game with permanent upgrades. Start one run and spend its rewards immediately afterward. Buy one lasting unlock.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Play It Out",
            "description": "Continue after mistakes and adapt instead of restarting, reloading, or abandoning the attempt."
          },
          {
            "scope": "gameplay",
            "title": "Use What You Find",
            "description": "Make one useful item, tool, or resource found during the quest part of your plan."
          }
        ]
      },
      "de": {
        "name": "Roguelike-Fortschritt",
        "title": "Starte einen Run und gib seine Belohnung direkt danach aus",
        "objective": "Öffne ein Run-basiertes Spiel mit dauerhaften Upgrades. Starte einen Run und gib seine Belohnung direkt danach aus. Kaufe eine dauerhafte Freischaltung.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Spiel es zu Ende",
            "description": "Spiele nach Fehlern weiter und passe dich an, statt neu zu starten oder zu laden."
          },
          {
            "scope": "gameplay",
            "title": "Nutze deinen Fund",
            "description": "Mach einen nützlichen Gegenstand, ein Werkzeug oder eine Ressource aus der Quest zum Teil deines Plans."
          }
        ]
      }
    }
  },
  {
    "moodId": "progress",
    "minimumDurationMinutes": 10,
    "suggestedDurationMinutes": 20,
    "rewardPoints": 230,
    "translations": {
      "en": {
        "name": "Season Finale",
        "title": "Advance the calendar without starting new long projects",
        "objective": "Open a save that is close to the end of its current season. Advance the calendar without starting new long projects. Reach the season summary.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Move Without Rushing",
            "description": "Avoid sprinting, boosting, or skipping ahead; let the journey set the pace."
          },
          {
            "scope": "gameplay",
            "title": "Stop Cleanly",
            "description": "End at a safe save point or result screen without starting something new."
          }
        ]
      },
      "de": {
        "name": "Saisonfinale",
        "title": "Bringe den Kalender voran, ohne neue Großprojekte zu beginnen",
        "objective": "Öffne einen Spielstand kurz vor dem Ende seiner aktuellen Saison. Bringe den Kalender voran, ohne neue Großprojekte zu beginnen. Erreiche die Saisonübersicht.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Ohne Eile",
            "description": "Vermeide Sprinten, Boosts und Abkürzungen; lass den Weg das Tempo bestimmen."
          },
          {
            "scope": "gameplay",
            "title": "Sauber aufhören",
            "description": "Höre an einem sicheren Speicherpunkt oder Ergebnisbildschirm auf, ohne etwas Neues zu starten."
          }
        ]
      }
    }
  },
  {
    "moodId": "progress",
    "minimumDurationMinutes": 10,
    "suggestedDurationMinutes": 25,
    "rewardPoints": 250,
    "translations": {
      "en": {
        "name": "Endgame Open",
        "title": "Follow the requirement for that milestone only",
        "objective": "Choose a save that is one milestone away from its endgame. Follow the requirement for that milestone only. Unlock the endgame.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "No Optional Loot",
            "description": "Ignore optional loot and keep inventory management to only what progress requires."
          },
          {
            "scope": "gameplay",
            "title": "Let It Stand",
            "description": "Accept the first honest result, even when reloading or rerolling could improve it."
          }
        ]
      },
      "de": {
        "name": "Endspiel geöffnet",
        "title": "Verfolge ausschließlich dessen Bedingung",
        "objective": "Wähle einen Spielstand, dem nur ein Meilenstein bis zum Endgame fehlt. Verfolge ausschließlich dessen Bedingung. Schalte das Endgame frei.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keine optionale Beute",
            "description": "Ignoriere optionale Beute und beschränke Inventarverwaltung auf das, was der Fortschritt verlangt."
          },
          {
            "scope": "gameplay",
            "title": "Lass es gelten",
            "description": "Akzeptiere das erste ehrliche Ergebnis, auch wenn Neuladen oder Neuwürfeln es verbessern könnte."
          }
        ]
      }
    }
  },
  {
    "moodId": "progress",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 210,
    "translations": {
      "en": {
        "name": "Recipe Mastery",
        "title": "Gather exactly what it needs and make it once",
        "objective": "Open a game with one unfinished recipe. Gather exactly what it needs and make it once. Produce the finished item.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "First Instinct",
            "description": "Take the first sincere choice that feels right without comparing every alternative."
          },
          {
            "scope": "gameplay",
            "title": "Let It Stand",
            "description": "Accept the first honest result, even when reloading or rerolling could improve it."
          }
        ]
      },
      "de": {
        "name": "Rezept gemeistert",
        "title": "Sammle genau die benötigten Zutaten und stelle es einmal her",
        "objective": "Öffne ein Spiel mit einem unfertigen Rezept. Sammle genau die benötigten Zutaten und stelle es einmal her. Produziere den fertigen Gegenstand.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Erster Impuls",
            "description": "Nimm die erste ehrliche Wahl, die sich richtig anfühlt, ohne alle Alternativen zu vergleichen."
          },
          {
            "scope": "gameplay",
            "title": "Lass es gelten",
            "description": "Akzeptiere das erste ehrliche Ergebnis, auch wenn Neuladen oder Neuwürfeln es verbessern könnte."
          }
        ]
      }
    }
  },
  {
    "moodId": "progress",
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 20,
    "rewardPoints": 230,
    "translations": {
      "en": {
        "name": "Crisis Resolved",
        "title": "Change only the systems directly responsible for that problem",
        "objective": "Open a management save with one obvious crisis. Change only the systems directly responsible for that problem. Keep it stable for one full cycle.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Let It Stand",
            "description": "Accept the first honest result, even when reloading or rerolling could improve it."
          },
          {
            "scope": "gameplay",
            "title": "Keep One in Reserve",
            "description": "Finish with at least one use of a limited resource still available."
          }
        ]
      },
      "de": {
        "name": "Krise gelöst",
        "title": "Ändere nur die Systeme, die direkt dafür verantwortlich sind",
        "objective": "Öffne einen Management-Spielstand mit einer offensichtlichen Krise. Ändere nur die Systeme, die direkt dafür verantwortlich sind. Halte sie einen ganzen Zyklus lang stabil.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Lass es gelten",
            "description": "Akzeptiere das erste ehrliche Ergebnis, auch wenn Neuladen oder Neuwürfeln es verbessern könnte."
          },
          {
            "scope": "gameplay",
            "title": "Behalte eine Reserve",
            "description": "Beende die Quest mit mindestens einer übrigen Nutzung einer begrenzten Ressource."
          }
        ]
      }
    }
  },
  {
    "moodId": "create",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "Blank Canvas",
        "title": "Build the smallest version that serves that purpose",
        "objective": "Open an empty building plot and decide what it must do. Build the smallest version that serves that purpose. Finish and test it.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Local Materials",
            "description": "Build only with materials already available in the current place or nearby storage."
          },
          {
            "scope": "gameplay",
            "title": "One Space",
            "description": "Keep every action and change inside one small, clearly bounded area."
          }
        ]
      },
      "de": {
        "name": "Leere Fläche",
        "title": "Baue die kleinste Version, die diesen Zweck erfüllt",
        "objective": "Öffne ein leeres Baugrundstück und bestimme seinen Zweck. Baue die kleinste Version, die diesen Zweck erfüllt. Stelle und teste sie fertig.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Lokale Materialien",
            "description": "Baue nur mit Materialien, die bereits vor Ort oder in einem nahen Lager sind."
          },
          {
            "scope": "gameplay",
            "title": "Ein Bereich",
            "description": "Beschränke jede Aktion und Änderung auf einen kleinen, klar abgegrenzten Bereich."
          }
        ]
      }
    }
  },
  {
    "moodId": "create",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Character Makeover",
        "title": "Give them a new look based on a single clear theme",
        "objective": "Choose one character you can customize. Give them a new look based on a single clear theme. Finish the look.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keep the First Take",
            "description": "Keep the first complete version and resist adding a second polish pass."
          },
          {
            "scope": "gameplay",
            "title": "No Undo",
            "description": "Keep every placed, painted, or customized choice and adapt around imperfect decisions."
          }
        ]
      },
      "de": {
        "name": "Figuren-Makeover",
        "title": "Gib ihr einen neuen Look mit genau einem klaren Thema",
        "objective": "Wähle eine Figur, die du anpassen kannst. Gib ihr einen neuen Look mit genau einem klaren Thema. Stelle den Look fertig.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Behalte den ersten Versuch",
            "description": "Behalte die erste vollständige Version und widerstehe einer zweiten Überarbeitungsrunde."
          },
          {
            "scope": "gameplay",
            "title": "Kein Rückgängig",
            "description": "Behalte jede platzierte, gemalte oder angepasste Entscheidung und arbeite um Fehler herum."
          }
        ]
      }
    }
  },
  {
    "moodId": "create",
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 20,
    "rewardPoints": 250,
    "translations": {
      "en": {
        "name": "Working Machine",
        "title": "Build one machine with a clear input and useful output",
        "objective": "Open a game where parts can automate a task. Build one machine with a clear input and useful output. Run one stable cycle.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "One Main Tool",
            "description": "Choose one tool or action and make it your main answer throughout the quest."
          },
          {
            "scope": "gameplay",
            "title": "Let It Stand",
            "description": "Accept the first honest result, even when reloading or rerolling could improve it."
          }
        ]
      },
      "de": {
        "name": "Funktionierende Maschine",
        "title": "Baue eine Maschine mit klarem Eingang und nützlichem Ausgang",
        "objective": "Öffne ein Spiel, in dem Bauteile eine Aufgabe automatisieren können. Baue eine Maschine mit klarem Eingang und nützlichem Ausgang. Lass einen stabilen Zyklus laufen.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Ein Hauptwerkzeug",
            "description": "Wähle ein Werkzeug oder eine Aktion als deine Hauptlösung für die ganze Quest."
          },
          {
            "scope": "gameplay",
            "title": "Lass es gelten",
            "description": "Akzeptiere das erste ehrliche Ergebnis, auch wenn Neuladen oder Neuwürfeln es verbessern könnte."
          }
        ]
      }
    }
  },
  {
    "moodId": "create",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "Build Remix",
        "title": "Commit to its central idea",
        "objective": "Open a game with flexible equipment and invent a build you have never used. Commit to its central idea. Reach the next save, checkpoint, or result screen with that setup.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Underdog Option",
            "description": "Use a viable character, tool, or build weaker than your usual favorite."
          },
          {
            "scope": "gameplay",
            "title": "Keep the First Take",
            "description": "Keep the first complete version and resist adding a second polish pass."
          }
        ]
      },
      "de": {
        "name": "Build-Remix",
        "title": "Bleib bei seiner zentralen Idee",
        "objective": "Öffne ein Spiel mit flexibler Ausrüstung und erfinde einen Build, den du noch nie genutzt hast. Bleib bei seiner zentralen Idee. Erreiche mit diesem Setup den nächsten Speicherpunkt, Kontrollpunkt oder Ergebnisbildschirm.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Außenseiter-Option",
            "description": "Nutze eine brauchbare Figur, ein Werkzeug oder einen Build unterhalb deines üblichen Favoriten."
          },
          {
            "scope": "gameplay",
            "title": "Behalte den ersten Versuch",
            "description": "Behalte die erste vollständige Version und widerstehe einer zweiten Überarbeitungsrunde."
          }
        ]
      }
    }
  },
  {
    "moodId": "create",
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 20,
    "rewardPoints": 250,
    "translations": {
      "en": {
        "name": "Playable Landmark",
        "title": "Place only what that route needs",
        "objective": "Open a level editor and design one short route with a visible destination. Place only what that route needs. Build and test it.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keep the First Take",
            "description": "Keep the first complete version and resist adding a second polish pass."
          },
          {
            "scope": "gameplay",
            "title": "No Outside Help",
            "description": "Rely only on the game: no guides, wikis, solution videos, or external maps."
          }
        ]
      },
      "de": {
        "name": "Spielbarer Ort",
        "title": "Platziere nur, was dieser Weg braucht",
        "objective": "Öffne einen Level-Editor und entwirf eine kurze Route mit sichtbarem Ziel. Platziere nur, was dieser Weg braucht. Baue und teste sie.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Behalte den ersten Versuch",
            "description": "Behalte die erste vollständige Version und widerstehe einer zweiten Überarbeitungsrunde."
          },
          {
            "scope": "gameplay",
            "title": "Keine externe Hilfe",
            "description": "Verlasse dich nur auf das Spiel: keine Guides, Wikis, Lösungsvideos oder externen Karten."
          }
        ]
      }
    }
  },
  {
    "moodId": "create",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 180,
    "translations": {
      "en": {
        "name": "Photo Walk",
        "title": "Take three different pictures of one place",
        "objective": "Open the game world you most want to photograph today. Take three different pictures of one place. Keep the strongest image.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Minimal HUD",
            "description": "Hide optional UI, but keep the quest's required goal and finish indicators visible."
          },
          {
            "scope": "gameplay",
            "title": "Bring Back One Image",
            "description": "Capture one screenshot that clearly shows the finished result or final stopping point."
          }
        ]
      },
      "de": {
        "name": "Fotospaziergang",
        "title": "Mache drei unterschiedliche Bilder von einem Ort",
        "objective": "Öffne die Spielwelt, die du heute am liebsten fotografieren möchtest. Mache drei unterschiedliche Bilder von einem Ort. Behalte das stärkste Bild.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Minimales HUD",
            "description": "Blende optionale Anzeigen aus, aber behalte Ziel und Abschluss der Quest sichtbar."
          },
          {
            "scope": "gameplay",
            "title": "Bring ein Bild mit",
            "description": "Mache einen Screenshot, der das fertige Ergebnis oder den endgültigen Haltepunkt klar zeigt."
          }
        ]
      }
    }
  },
  {
    "moodId": "create",
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 20,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "Room-Sized Story",
        "title": "Tell that person's daily routine with no more than seven objects",
        "objective": "Choose one empty room and imagine who lives there. Tell that person's daily routine with no more than seven objects. Finish the room.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Before and After",
            "description": "Capture the room once before changing it and once after completion."
          },
          {
            "scope": "gameplay",
            "title": "One Palette",
            "description": "Limit the result to one color family plus a single contrasting accent."
          }
        ]
      },
      "de": {
        "name": "Geschichte im Raum",
        "title": "Erzähle den Alltag dieser Person mit höchstens sieben Objekten",
        "objective": "Wähle einen leeren Raum und stell dir vor, wer dort lebt. Erzähle den Alltag dieser Person mit höchstens sieben Objekten. Stelle den Raum fertig.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Vorher und nachher",
            "description": "Fotografiere den Raum einmal vor der Veränderung und einmal nach dem Abschluss."
          },
          {
            "scope": "gameplay",
            "title": "Eine Farbpalette",
            "description": "Beschränke das Ergebnis auf eine Farbfamilie und einen einzelnen kontrastierenden Akzent."
          }
        ]
      }
    }
  },
  {
    "moodId": "create",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 190,
    "translations": {
      "en": {
        "name": "Useful Prototype",
        "title": "Build the roughest version that can already do it",
        "objective": "Name one job a new creation should perform. Build the roughest version that can already do it. Prove it works.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "One Main Tool",
            "description": "Choose one tool or action and make it your main answer throughout the quest."
          },
          {
            "scope": "gameplay",
            "title": "Keep the First Take",
            "description": "Keep the first complete version and resist adding a second polish pass."
          }
        ]
      },
      "de": {
        "name": "Nützlicher Prototyp",
        "title": "Baue die gröbste Version, die sie bereits schafft",
        "objective": "Benenne eine Aufgabe, die eine neue Konstruktion erfüllen soll. Baue die gröbste Version, die sie bereits schafft. Beweise, dass sie funktioniert.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Ein Hauptwerkzeug",
            "description": "Wähle ein Werkzeug oder eine Aktion als deine Hauptlösung für die ganze Quest."
          },
          {
            "scope": "gameplay",
            "title": "Behalte den ersten Versuch",
            "description": "Behalte die erste vollständige Version und widerstehe einer zweiten Überarbeitungsrunde."
          }
        ]
      }
    }
  },
  {
    "moodId": "create",
    "minimumDurationMinutes": 10,
    "suggestedDurationMinutes": 20,
    "rewardPoints": 230,
    "translations": {
      "en": {
        "name": "Built Around It",
        "title": "Make that obstacle the central idea instead of removing it",
        "objective": "Find an awkward feature on a building site. Make that obstacle the central idea instead of removing it. Finish the design.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Let It Stand",
            "description": "Accept the first honest result, even when reloading or rerolling could improve it."
          },
          {
            "scope": "gameplay",
            "title": "No Undo",
            "description": "Keep every placed, painted, or customized choice and adapt around imperfect decisions."
          }
        ]
      },
      "de": {
        "name": "Darum herum gebaut",
        "title": "Mach dieses Hindernis zur zentralen Idee, statt es zu entfernen",
        "objective": "Finde eine störende Besonderheit auf einem Bauplatz. Mach dieses Hindernis zur zentralen Idee, statt es zu entfernen. Stelle den Entwurf fertig.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Lass es gelten",
            "description": "Akzeptiere das erste ehrliche Ergebnis, auch wenn Neuladen oder Neuwürfeln es verbessern könnte."
          },
          {
            "scope": "gameplay",
            "title": "Kein Rückgängig",
            "description": "Behalte jede platzierte, gemalte oder angepasste Entscheidung und arbeite um Fehler herum."
          }
        ]
      }
    }
  },
  {
    "moodId": "create",
    "minimumDurationMinutes": 10,
    "suggestedDurationMinutes": 30,
    "rewardPoints": 230,
    "translations": {
      "en": {
        "name": "Livable Block",
        "title": "Add one home, one service, and a path connecting them",
        "objective": "Choose one compact city block. Add one home, one service, and a path connecting them. Make the block usable.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Local Materials",
            "description": "Build only with materials already available in the current place or nearby storage."
          },
          {
            "scope": "gameplay",
            "title": "Before and After",
            "description": "Capture the room once before changing it and once after completion."
          }
        ]
      },
      "de": {
        "name": "Lebenswerter Block",
        "title": "Ergänze ein Zuhause, einen Service und einen Weg, der beide verbindet",
        "objective": "Wähle einen kompakten Stadtblock. Ergänze ein Zuhause, einen Service und einen Weg, der beide verbindet. Mach den Block nutzbar.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Lokale Materialien",
            "description": "Baue nur mit Materialien, die bereits vor Ort oder in einem nahen Lager sind."
          },
          {
            "scope": "gameplay",
            "title": "Vorher und nachher",
            "description": "Fotografiere den Raum einmal vor der Veränderung und einmal nach dem Abschluss."
          }
        ]
      }
    }
  },
  {
    "moodId": "create",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Seasonal Garden",
        "title": "Design one small bed around today's weather",
        "objective": "Open a place where you can plant a garden. Design one small bed around today's weather. Finish the bed.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "One Palette",
            "description": "Limit the result to one color family plus a single contrasting accent."
          },
          {
            "scope": "gameplay",
            "title": "Local Materials",
            "description": "Build only with materials already available in the current place or nearby storage."
          }
        ]
      },
      "de": {
        "name": "Saisonaler Garten",
        "title": "Gestalte ein kleines Beet passend zum heutigen Wetter",
        "objective": "Öffne einen Ort, an dem du einen Garten pflanzen kannst. Gestalte ein kleines Beet passend zum heutigen Wetter. Stelle das Beet fertig.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Eine Farbpalette",
            "description": "Beschränke das Ergebnis auf eine Farbfamilie und einen einzelnen kontrastierenden Akzent."
          },
          {
            "scope": "gameplay",
            "title": "Lokale Materialien",
            "description": "Baue nur mit Materialien, die bereits vor Ort oder in einem nahen Lager sind."
          }
        ]
      }
    }
  },
  {
    "moodId": "create",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 190,
    "translations": {
      "en": {
        "name": "NPC Style",
        "title": "Dress your character as if they belonged beside them",
        "objective": "Pick one minor character with a recognizable style. Dress your character as if they belonged beside them. Finish the outfit.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "One Palette",
            "description": "Limit the result to one color family plus a single contrasting accent."
          },
          {
            "scope": "gameplay",
            "title": "Keep the First Take",
            "description": "Keep the first complete version and resist adding a second polish pass."
          }
        ]
      },
      "de": {
        "name": "NPC-Stil",
        "title": "Kleide deine Figur so, als würde sie zu ihr gehören",
        "objective": "Wähle eine Nebenfigur mit erkennbarem Stil. Kleide deine Figur so, als würde sie zu ihr gehören. Stelle das Outfit fertig.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Eine Farbpalette",
            "description": "Beschränke das Ergebnis auf eine Farbfamilie und einen einzelnen kontrastierenden Akzent."
          },
          {
            "scope": "gameplay",
            "title": "Behalte den ersten Versuch",
            "description": "Behalte die erste vollständige Version und widerstehe einer zweiten Überarbeitungsrunde."
          }
        ]
      }
    }
  },
  {
    "moodId": "create",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 170,
    "translations": {
      "en": {
        "name": "Off-Duty Portrait",
        "title": "Photograph one quiet moment without staging a heroic pose",
        "objective": "Choose a character worth observing and follow them off duty. Photograph one quiet moment without staging a heroic pose. Keep one portrait.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Minimal HUD",
            "description": "Hide optional UI, but keep the quest's required goal and finish indicators visible."
          },
          {
            "scope": "gameplay",
            "title": "Keep the First Take",
            "description": "Keep the first complete version and resist adding a second polish pass."
          }
        ]
      },
      "de": {
        "name": "Ruhiges Porträt",
        "title": "Fotografiere einen ruhigen Moment ohne Heldenpose",
        "objective": "Wähle eine interessante Figur und beobachte sie abseits ihrer Aufgabe. Fotografiere einen ruhigen Moment ohne Heldenpose. Behalte ein Porträt.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Minimales HUD",
            "description": "Blende optionale Anzeigen aus, aber behalte Ziel und Abschluss der Quest sichtbar."
          },
          {
            "scope": "gameplay",
            "title": "Behalte den ersten Versuch",
            "description": "Behalte die erste vollständige Version und widerstehe einer zweiten Überarbeitungsrunde."
          }
        ]
      }
    }
  },
  {
    "moodId": "create",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 170,
    "translations": {
      "en": {
        "name": "Golden Hour",
        "title": "Follow one kind of light until it shapes the scene",
        "objective": "Choose one kind of light in an open world. Follow one kind of light until it shapes the scene. Keep one photograph.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Minimal HUD",
            "description": "Hide optional UI, but keep the quest's required goal and finish indicators visible."
          },
          {
            "scope": "gameplay",
            "title": "World Audio",
            "description": "Lower the music enough to notice environmental sounds, voices, machinery, and distant activity."
          }
        ]
      },
      "de": {
        "name": "Goldene Stunde",
        "title": "Folge ihr, bis sie eine Szene vollständig prägt",
        "objective": "Wähle eine bestimmte Lichtstimmung in einer offenen Welt. Folge ihr, bis sie eine Szene vollständig prägt. Behalte ein Foto.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Minimales HUD",
            "description": "Blende optionale Anzeigen aus, aber behalte Ziel und Abschluss der Quest sichtbar."
          },
          {
            "scope": "gameplay",
            "title": "Geräusche der Welt",
            "description": "Drehe die Musik so weit herunter, dass du Umgebung, Stimmen und entfernte Aktivität wahrnimmst."
          }
        ]
      }
    }
  },
  {
    "moodId": "create",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 190,
    "translations": {
      "en": {
        "name": "Three-Frame Story",
        "title": "Capture a beginning, a change, and an ending",
        "objective": "Tell a tiny story with exactly three screenshots. Capture a beginning, a change, and an ending. Finish the sequence.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keep the First Take",
            "description": "Keep the first complete version and resist adding a second polish pass."
          },
          {
            "scope": "gameplay",
            "title": "No Undo",
            "description": "Keep every placed, painted, or customized choice and adapt around imperfect decisions."
          }
        ]
      },
      "de": {
        "name": "Drei-Bilder-Geschichte",
        "title": "Halte einen Anfang, eine Veränderung und ein Ende fest",
        "objective": "Erzähle eine kleine Geschichte mit genau drei Screenshots. Halte einen Anfang, eine Veränderung und ein Ende fest. Stelle die Sequenz fertig.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Behalte den ersten Versuch",
            "description": "Behalte die erste vollständige Version und widerstehe einer zweiten Überarbeitungsrunde."
          },
          {
            "scope": "gameplay",
            "title": "Kein Rückgängig",
            "description": "Behalte jede platzierte, gemalte oder angepasste Entscheidung und arbeite um Fehler herum."
          }
        ]
      }
    }
  },
  {
    "moodId": "create",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 190,
    "translations": {
      "en": {
        "name": "Odd Collection",
        "title": "Arrange them together as a deliberate collection",
        "objective": "Find five overlooked objects that share one strange idea. Arrange them together as a deliberate collection. Finish the display.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Local Materials",
            "description": "Build only with materials already available in the current place or nearby storage."
          },
          {
            "scope": "gameplay",
            "title": "One Space",
            "description": "Keep every action and change inside one small, clearly bounded area."
          }
        ]
      },
      "de": {
        "name": "Ungewöhnliche Sammlung",
        "title": "Ordne sie als bewusste Sammlung an",
        "objective": "Finde fünf übersehene Gegenstände mit einer gemeinsamen seltsamen Idee. Ordne sie als bewusste Sammlung an. Stelle die Ausstellung fertig.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Lokale Materialien",
            "description": "Baue nur mit Materialien, die bereits vor Ort oder in einem nahen Lager sind."
          },
          {
            "scope": "gameplay",
            "title": "Ein Bereich",
            "description": "Beschränke jede Aktion und Änderung auf einen kleinen, klar abgegrenzten Bereich."
          }
        ]
      }
    }
  },
  {
    "moodId": "create",
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 20,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "Creature Habitat",
        "title": "Build a habitat designed only around those needs",
        "objective": "Choose one creature, build a habitat with one shelter, food source, and open route, then watch the creature use one placed feature.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Local Materials",
            "description": "Build only with materials already available in the current place or nearby storage."
          },
          {
            "scope": "gameplay",
            "title": "Leave a Gift",
            "description": "Leave one useful improvement, route, tool, or resource for another player."
          }
        ]
      },
      "de": {
        "name": "Zuhause für ein Wesen",
        "title": "Baue einen Lebensraum, der nur auf diese Bedürfnisse ausgelegt ist",
        "objective": "Wähle ein Wesen, baue einen Lebensraum mit Unterschlupf, Futterquelle und freiem Weg und beobachte, wie es ein platziertes Element benutzt.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Lokale Materialien",
            "description": "Baue nur mit Materialien, die bereits vor Ort oder in einem nahen Lager sind."
          },
          {
            "scope": "gameplay",
            "title": "Hinterlasse ein Geschenk",
            "description": "Hinterlasse eine nützliche Verbesserung, Route, ein Werkzeug oder eine Ressource für andere."
          }
        ]
      }
    }
  },
  {
    "moodId": "create",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Purposeful Asymmetry",
        "title": "Balance one deliberately uneven composition",
        "objective": "Open a design you can still change. Make its two sides deliberately unequal while keeping the whole composition balanced. Finish the composition.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "No Undo",
            "description": "Keep every placed, painted, or customized choice and adapt around imperfect decisions."
          },
          {
            "scope": "gameplay",
            "title": "Let It Stand",
            "description": "Accept the first honest result, even when reloading or rerolling could improve it."
          }
        ]
      },
      "de": {
        "name": "Bewusste Asymmetrie",
        "title": "Halte eine bewusst ungleiche Komposition im Gleichgewicht",
        "objective": "Öffne einen Entwurf, den du noch verändern kannst. Gestalte seine Seiten bewusst ungleich und halte die Komposition trotzdem ausgewogen. Stelle die Komposition fertig.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Kein Rückgängig",
            "description": "Behalte jede platzierte, gemalte oder angepasste Entscheidung und arbeite um Fehler herum."
          },
          {
            "scope": "gameplay",
            "title": "Lass es gelten",
            "description": "Akzeptiere das erste ehrliche Ergebnis, auch wenn Neuladen oder Neuwürfeln es verbessern könnte."
          }
        ]
      }
    }
  },
  {
    "moodId": "create",
    "minimumDurationMinutes": 10,
    "suggestedDurationMinutes": 30,
    "rewardPoints": 230,
    "translations": {
      "en": {
        "name": "Kind Economy",
        "title": "Make one scarce resource affordable while keeping a reserve",
        "objective": "Open a management save and choose one resource everyone needs. Make one scarce resource affordable while keeping a reserve. Run a stable cycle.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Stay on One Goal",
            "description": "Ignore side missions and map markers so the quest stays on one clear goal."
          },
          {
            "scope": "gameplay",
            "title": "Bring Back One Image",
            "description": "Capture one screenshot that clearly shows the finished result or final stopping point."
          }
        ]
      },
      "de": {
        "name": "Faire Wirtschaft",
        "title": "Mach eine knappe Ressource bezahlbar und behalte eine Reserve",
        "objective": "Öffne einen Management-Spielstand und wähle eine Ressource, die alle brauchen. Mach eine knappe Ressource bezahlbar und behalte eine Reserve. Lass einen stabilen Zyklus laufen.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Bleib bei einem Ziel",
            "description": "Ignoriere Nebenmissionen und Kartenmarker, damit die Quest bei einem klaren Ziel bleibt."
          },
          {
            "scope": "gameplay",
            "title": "Bring ein Bild mit",
            "description": "Mache einen Screenshot, der das fertige Ergebnis oder den endgültigen Haltepunkt klar zeigt."
          }
        ]
      }
    }
  },
  {
    "moodId": "create",
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 20,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "Team Identity",
        "title": "Build the entire lineup around doing that action well",
        "objective": "Choose one verb your team should embody. Build the entire lineup around doing that action well. Finish one full round, match, task, or test and keep its result.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keep Your Role",
            "description": "Choose one team responsibility and keep serving it through the complete result."
          },
          {
            "scope": "gameplay",
            "title": "One Palette",
            "description": "Limit the result to one color family plus a single contrasting accent."
          }
        ]
      },
      "de": {
        "name": "Teamidentität",
        "title": "Baue die ganze Aufstellung darauf auf, diese Aktion gut auszuführen",
        "objective": "Wähle ein Verb, das dein Team verkörpern soll. Baue die ganze Aufstellung darauf auf, diese Aktion gut auszuführen. Beende eine ganze Runde, ein Match, eine Aufgabe oder einen Test und behalte das Ergebnis.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Bleib in deiner Rolle",
            "description": "Wähle eine Teamaufgabe und erfülle sie bis zum vollständigen Ergebnis."
          },
          {
            "scope": "gameplay",
            "title": "Eine Farbpalette",
            "description": "Beschränke das Ergebnis auf eine Farbfamilie und einen einzelnen kontrastierenden Akzent."
          }
        ]
      }
    }
  },
  {
    "moodId": "create",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Ordinary Day",
        "title": "Go to work, rest somewhere, and return home",
        "objective": "Open a familiar world and role-play one ordinary resident. Go to work, rest somewhere, and return home. Complete the day.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Follow a Local",
            "description": "Follow one resident or creature and let their movement determine your next destination."
          },
          {
            "scope": "gameplay",
            "title": "No Map",
            "description": "Navigate through landmarks and memory without opening a map or route overlay."
          }
        ]
      },
      "de": {
        "name": "Gewöhnlicher Alltag",
        "title": "Geh zur Arbeit, ruh dich aus und kehre nach Hause zurück",
        "objective": "Öffne eine vertraute Welt und spiele einen gewöhnlichen Bewohner. Geh zur Arbeit, ruh dich aus und kehre nach Hause zurück. Schließe den Tag ab.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Folge einem Bewohner",
            "description": "Folge einem Bewohner oder Wesen und lass seine Bewegung dein nächstes Ziel bestimmen."
          },
          {
            "scope": "gameplay",
            "title": "Keine Karte",
            "description": "Navigiere mit Orientierungspunkten und Erinnerung, ohne Karte oder eingeblendete Route."
          }
        ]
      }
    }
  },
  {
    "moodId": "create",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 210,
    "translations": {
      "en": {
        "name": "Sideways Solution",
        "title": "Clear it with a tool you usually ignore",
        "objective": "Choose one objective you normally solve the same way. Clear it with a tool you usually ignore. Reach the result.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Use Basic Gear",
            "description": "Leave your strongest or rarest option unused and solve the quest with ordinary gear."
          },
          {
            "scope": "gameplay",
            "title": "No Outside Help",
            "description": "Rely only on the game: no guides, wikis, solution videos, or external maps."
          }
        ]
      },
      "de": {
        "name": "Ungewöhnliche Lösung",
        "title": "Schließe es mit einem Werkzeug ab, das du normalerweise ignorierst",
        "objective": "Wähle ein Ziel, das du sonst immer gleich löst. Schließe es mit einem Werkzeug ab, das du normalerweise ignorierst. Erreiche das Ergebnis.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Nutze einfache Ausrüstung",
            "description": "Lass deine stärkste oder seltenste Option ungenutzt und löse die Quest mit gewöhnlicher Ausrüstung."
          },
          {
            "scope": "gameplay",
            "title": "Keine externe Hilfe",
            "description": "Verlasse dich nur auf das Spiel: keine Guides, Wikis, Lösungsvideos oder externen Karten."
          }
        ]
      }
    }
  },
  {
    "moodId": "create",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 190,
    "translations": {
      "en": {
        "name": "Route Drawing",
        "title": "Travel one continuous route shaped like a letter of your choice",
        "objective": "Open a game that records your path. Travel one continuous route shaped like a letter of your choice. Complete the shape.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "No Map",
            "description": "Navigate through landmarks and memory without opening a map or route overlay."
          },
          {
            "scope": "gameplay",
            "title": "Bring Back One Image",
            "description": "Capture one screenshot that clearly shows the finished result or final stopping point."
          }
        ]
      },
      "de": {
        "name": "Gezeichnete Route",
        "title": "Reise eine durchgehende Route in Form eines Buchstabens deiner Wahl",
        "objective": "Öffne ein Spiel, das deinen Weg aufzeichnet. Reise eine durchgehende Route in Form eines Buchstabens deiner Wahl. Vollende die Form.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keine Karte",
            "description": "Navigiere mit Orientierungspunkten und Erinnerung, ohne Karte oder eingeblendete Route."
          },
          {
            "scope": "gameplay",
            "title": "Bring ein Bild mit",
            "description": "Mache einen Screenshot, der das fertige Ergebnis oder den endgültigen Haltepunkt klar zeigt."
          }
        ]
      }
    }
  },
  {
    "moodId": "create",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Place Theme",
        "title": "Create a short loop that belongs there",
        "objective": "Open a game with a music editor, choose one familiar place as inspiration, create a short loop for it, and play the saved loop once.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "World Audio",
            "description": "Lower the music enough to notice environmental sounds, voices, machinery, and distant activity."
          },
          {
            "scope": "gameplay",
            "title": "Keep the First Take",
            "description": "Keep the first complete version and resist adding a second polish pass."
          }
        ]
      },
      "de": {
        "name": "Ortsthema",
        "title": "Erstelle einen kurzen Loop, der dorthin gehört",
        "objective": "Öffne ein Spiel mit Musikeditor, wähle einen vertrauten Ort als Inspiration, erstelle eine kurze Schleife dafür und spiele die gespeicherte Schleife einmal ab.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Geräusche der Welt",
            "description": "Drehe die Musik so weit herunter, dass du Umgebung, Stimmen und entfernte Aktivität wahrnimmst."
          },
          {
            "scope": "gameplay",
            "title": "Behalte den ersten Versuch",
            "description": "Behalte die erste vollständige Version und widerstehe einer zweiten Überarbeitungsrunde."
          }
        ]
      }
    }
  },
  {
    "moodId": "create",
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 20,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "One Perfect View",
        "title": "Shape the scene until it looks complete from exactly there",
        "objective": "Choose one fixed viewpoint in a building game, change exactly three visible elements for that view, and save the build from that camera.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Bring Back One Image",
            "description": "Capture one screenshot that clearly shows the finished result or final stopping point."
          },
          {
            "scope": "gameplay",
            "title": "Keep the First Take",
            "description": "Keep the first complete version and resist adding a second polish pass."
          }
        ]
      },
      "de": {
        "name": "Ein Blickwinkel",
        "title": "Forme die Szene, bis sie genau von dort vollständig aussieht",
        "objective": "Wähle einen festen Blickwinkel in einem Bauspiel, ändere genau drei sichtbare Elemente dafür und speichere den Bau aus dieser Kamera.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Bring ein Bild mit",
            "description": "Mache einen Screenshot, der das fertige Ergebnis oder den endgültigen Haltepunkt klar zeigt."
          },
          {
            "scope": "gameplay",
            "title": "Behalte den ersten Versuch",
            "description": "Behalte die erste vollständige Version und widerstehe einer zweiten Überarbeitungsrunde."
          }
        ]
      }
    }
  },
  {
    "moodId": "create",
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 20,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "Old Creation Repaired",
        "title": "Rebuild only that part around one new idea",
        "objective": "Open something you built long ago and identify its weakest part. Rebuild only that part around one new idea. Test the repair.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Use What You Find",
            "description": "Make one useful item, tool, or resource found during the quest part of your plan."
          },
          {
            "scope": "gameplay",
            "title": "Local Materials",
            "description": "Build only with materials already available in the current place or nearby storage."
          }
        ]
      },
      "de": {
        "name": "Kreation repariert",
        "title": "Baue nur diesen Teil mit einer neuen Idee um",
        "objective": "Öffne etwas, das du vor langer Zeit gebaut hast, und finde seine schwächste Stelle. Baue nur diesen Teil mit einer neuen Idee um. Teste die Reparatur.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Nutze deinen Fund",
            "description": "Mach einen nützlichen Gegenstand, ein Werkzeug oder eine Ressource aus der Quest zum Teil deines Plans."
          },
          {
            "scope": "gameplay",
            "title": "Lokale Materialien",
            "description": "Baue nur mit Materialien, die bereits vor Ort oder in einem nahen Lager sind."
          }
        ]
      }
    }
  },
  {
    "moodId": "create",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Silent Scene",
        "title": "Use poses and objects to make the moment clear",
        "objective": "Stage one scene whose action is understandable without words. Use poses and objects to make the moment clear. Capture the final scene.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Minimal HUD",
            "description": "Hide optional UI, but keep the quest's required goal and finish indicators visible."
          },
          {
            "scope": "gameplay",
            "title": "Keep the First Take",
            "description": "Keep the first complete version and resist adding a second polish pass."
          }
        ]
      },
      "de": {
        "name": "Stille Szene",
        "title": "Nutze Posen und Objekte, um den Moment klarzumachen",
        "objective": "Inszeniere eine Szene, deren Handlung ohne Worte verständlich ist. Nutze Posen und Objekte, um den Moment klarzumachen. Halte die fertige Szene fest.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Minimales HUD",
            "description": "Blende optionale Anzeigen aus, aber behalte Ziel und Abschluss der Quest sichtbar."
          },
          {
            "scope": "gameplay",
            "title": "Behalte den ersten Versuch",
            "description": "Behalte die erste vollständige Version und widerstehe einer zweiten Überarbeitungsrunde."
          }
        ]
      }
    }
  },
  {
    "moodId": "create",
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 20,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "No One Left Behind",
        "title": "Connect them with the safest route for its slowest traveler",
        "objective": "Choose the smallest or slowest traveler in a building game, connect two useful places, and test the route from start to finish with them.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Ground Level",
            "description": "Keep the camera close to the character or world instead of overhead or distant."
          },
          {
            "scope": "gameplay",
            "title": "Use Basic Gear",
            "description": "Leave your strongest or rarest option unused and solve the quest with ordinary gear."
          }
        ]
      },
      "de": {
        "name": "Niemand bleibt zurück",
        "title": "Verbinde sie mit der sichersten Route für den langsamsten Reisenden",
        "objective": "Wähle die kleinste oder langsamste Figur in einem Bauspiel, verbinde zwei nützliche Orte und teste die Route mit ihr vom Anfang bis zum Ende.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Auf Augenhöhe",
            "description": "Halte die Kamera nah an Figur oder Welt statt über dir oder weit entfernt."
          },
          {
            "scope": "gameplay",
            "title": "Nutze einfache Ausrüstung",
            "description": "Lass deine stärkste oder seltenste Option ungenutzt und löse die Quest mit gewöhnlicher Ausrüstung."
          }
        ]
      }
    }
  },
  {
    "moodId": "create",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 190,
    "translations": {
      "en": {
        "name": "Personal Ritual",
        "title": "Perform each step in order",
        "objective": "Choose a familiar game and invent a three-step ritual for beginning a session. Perform each step in order. Complete the ritual, then begin the session it was made for.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keep the First Take",
            "description": "Keep the first complete version and resist adding a second polish pass."
          },
          {
            "scope": "gameplay",
            "title": "No Undo",
            "description": "Keep every placed, painted, or customized choice and adapt around imperfect decisions."
          }
        ]
      },
      "de": {
        "name": "Persönliches Ritual",
        "title": "Führe sie der Reihe nach aus",
        "objective": "Wähle ein vertrautes Spiel und erfinde ein Ritual aus drei Schritten für den Start einer Session. Führe sie der Reihe nach aus. Schließe das Ritual ab und beginne dann die passende Session.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Behalte den ersten Versuch",
            "description": "Behalte die erste vollständige Version und widerstehe einer zweiten Überarbeitungsrunde."
          },
          {
            "scope": "gameplay",
            "title": "Kein Rückgängig",
            "description": "Behalte jede platzierte, gemalte oder angepasste Entscheidung und arbeite um Fehler herum."
          }
        ]
      }
    }
  },
  {
    "moodId": "create",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 210,
    "translations": {
      "en": {
        "name": "Kind Trace",
        "title": "Add one useful improvement without claiming the space",
        "objective": "Find one shared place that could help its next visitor. Add one useful improvement without claiming the space. Finish the improvement.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Before and After",
            "description": "Capture the room once before changing it and once after completion."
          },
          {
            "scope": "gameplay",
            "title": "Stop Cleanly",
            "description": "End at a safe save point or result screen without starting something new."
          }
        ]
      },
      "de": {
        "name": "Gute Spur",
        "title": "Ergänze eine nützliche Verbesserung, ohne den Platz zu beanspruchen",
        "objective": "Finde einen geteilten Ort, der seinem nächsten Besucher helfen könnte. Ergänze eine nützliche Verbesserung, ohne den Platz zu beanspruchen. Stelle die Verbesserung fertig.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Vorher und nachher",
            "description": "Fotografiere den Raum einmal vor der Veränderung und einmal nach dem Abschluss."
          },
          {
            "scope": "gameplay",
            "title": "Sauber aufhören",
            "description": "Höre an einem sicheren Speicherpunkt oder Ergebnisbildschirm auf, ohne etwas Neues zu starten."
          }
        ]
      }
    }
  },
  {
    "moodId": "create",
    "minimumDurationMinutes": 10,
    "suggestedDurationMinutes": 30,
    "rewardPoints": 240,
    "translations": {
      "en": {
        "name": "Boss Arena",
        "title": "Give it one obvious hazard and one readable safe route",
        "objective": "Open an editor and build one compact boss arena. Give it one obvious hazard and one readable safe route. Test a full encounter.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Before and After",
            "description": "Capture the room once before changing it and once after completion."
          },
          {
            "scope": "gameplay",
            "title": "Keep the First Take",
            "description": "Keep the first complete version and resist adding a second polish pass."
          }
        ]
      },
      "de": {
        "name": "Boss-Arena",
        "title": "Gib ihr eine klare Gefahr und einen erkennbaren sicheren Weg",
        "objective": "Öffne einen Editor und baue eine kompakte Bossarena. Gib ihr eine klare Gefahr und einen erkennbaren sicheren Weg. Teste einen vollständigen Kampf.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Vorher und nachher",
            "description": "Fotografiere den Raum einmal vor der Veränderung und einmal nach dem Abschluss."
          },
          {
            "scope": "gameplay",
            "title": "Behalte den ersten Versuch",
            "description": "Behalte die erste vollständige Version und widerstehe einer zweiten Überarbeitungsrunde."
          }
        ]
      }
    }
  },
  {
    "moodId": "create",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "Themed Deck",
        "title": "Add only cards that clearly support that idea",
        "objective": "Choose one theme for a new card deck. Add only cards that clearly support that idea. Finish one match with it.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Underdog Option",
            "description": "Use a viable character, tool, or build weaker than your usual favorite."
          },
          {
            "scope": "gameplay",
            "title": "Keep the First Take",
            "description": "Keep the first complete version and resist adding a second polish pass."
          }
        ]
      },
      "de": {
        "name": "Themendeck",
        "title": "Nimm nur Karten auf, die diese Idee klar unterstützen",
        "objective": "Wähle ein Thema für ein neues Kartendeck. Nimm nur Karten auf, die diese Idee klar unterstützen. Beende damit ein Match.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Außenseiter-Option",
            "description": "Nutze eine brauchbare Figur, ein Werkzeug oder einen Build unterhalb deines üblichen Favoriten."
          },
          {
            "scope": "gameplay",
            "title": "Behalte den ersten Versuch",
            "description": "Behalte die erste vollständige Version und widerstehe einer zweiten Überarbeitungsrunde."
          }
        ]
      }
    }
  },
  {
    "moodId": "create",
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 20,
    "rewardPoints": 230,
    "translations": {
      "en": {
        "name": "Accessible Route",
        "title": "Connect them with a route its slowest traveler can use",
        "objective": "Choose two useful places in a building game, connect them without stairs or narrow gaps, and test the route with the slowest available traveler.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Ground Level",
            "description": "Keep the camera close to the character or world instead of overhead or distant."
          },
          {
            "scope": "gameplay",
            "title": "Local Materials",
            "description": "Build only with materials already available in the current place or nearby storage."
          }
        ]
      },
      "de": {
        "name": "Barrierefreie Route",
        "title": "Verbinde sie mit einer Route für den langsamsten Reisenden",
        "objective": "Wähle zwei nützliche Orte in einem Bauspiel, verbinde sie ohne Treppen oder enge Lücken und teste die Route mit der langsamsten verfügbaren Figur.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Auf Augenhöhe",
            "description": "Halte die Kamera nah an Figur oder Welt statt über dir oder weit entfernt."
          },
          {
            "scope": "gameplay",
            "title": "Lokale Materialien",
            "description": "Baue nur mit Materialien, die bereits vor Ort oder in einem nahen Lager sind."
          }
        ]
      }
    }
  },
  {
    "moodId": "create",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Racing Livery",
        "title": "Keep every decal consistent with that scheme",
        "objective": "Pick one vehicle and design a livery using exactly two colors. Keep every decal consistent with that scheme. Finish the design and race it.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Bring Back One Image",
            "description": "Capture one screenshot that clearly shows the finished result or final stopping point."
          },
          {
            "scope": "gameplay",
            "title": "Keep the First Take",
            "description": "Keep the first complete version and resist adding a second polish pass."
          }
        ]
      },
      "de": {
        "name": "Rennlackierung",
        "title": "Halte jeden Aufkleber in diesem Schema",
        "objective": "Wähle ein Fahrzeug und entwirf eine Lackierung mit genau zwei Farben. Halte jeden Aufkleber in diesem Schema. Stelle den Entwurf fertig und fahre ihn.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Bring ein Bild mit",
            "description": "Mache einen Screenshot, der das fertige Ergebnis oder den endgültigen Haltepunkt klar zeigt."
          },
          {
            "scope": "gameplay",
            "title": "Behalte den ersten Versuch",
            "description": "Behalte die erste vollständige Version und widerstehe einer zweiten Überarbeitungsrunde."
          }
        ]
      }
    }
  },
  {
    "moodId": "create",
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 20,
    "rewardPoints": 230,
    "translations": {
      "en": {
        "name": "Reusable Blueprint",
        "title": "Build one compact reusable factory module",
        "objective": "Choose one factory task you often rebuild. Make a compact module that solves it and can be copied elsewhere. Run one stable cycle.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Use What You Find",
            "description": "Make one useful item, tool, or resource found during the quest part of your plan."
          },
          {
            "scope": "gameplay",
            "title": "Local Materials",
            "description": "Build only with materials already available in the current place or nearby storage."
          }
        ]
      },
      "de": {
        "name": "Wiederverwendbarer Bauplan",
        "title": "Baue ein kompaktes wiederverwendbares Fabrikmodul",
        "objective": "Wähle eine Fabrikaufgabe, die du oft neu baust. Erstelle ein kompaktes Modul, das sie löst und kopiert werden kann. Lass einen stabilen Zyklus laufen.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Nutze deinen Fund",
            "description": "Mach einen nützlichen Gegenstand, ein Werkzeug oder eine Ressource aus der Quest zum Teil deines Plans."
          },
          {
            "scope": "gameplay",
            "title": "Lokale Materialien",
            "description": "Baue nur mit Materialien, die bereits vor Ort oder in einem nahen Lager sind."
          }
        ]
      }
    }
  },
  {
    "moodId": "create",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "Character Backstory",
        "title": "Express it through three visible details, then enter one scene",
        "objective": "Choose one playable character and give them a simple past. Express it through three visible details, then enter one scene. Finish the scene in character.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "First Instinct",
            "description": "Take the first sincere choice that feels right without comparing every alternative."
          },
          {
            "scope": "gameplay",
            "title": "No Undo",
            "description": "Keep every placed, painted, or customized choice and adapt around imperfect decisions."
          }
        ]
      },
      "de": {
        "name": "Hintergrundgeschichte",
        "title": "Zeige sie durch drei sichtbare Details und starte dann eine Szene",
        "objective": "Wähle eine spielbare Figur und gib ihr eine einfache Vergangenheit. Zeige sie durch drei sichtbare Details und starte dann eine Szene. Beende die Szene in dieser Rolle.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Erster Impuls",
            "description": "Nimm die erste ehrliche Wahl, die sich richtig anfühlt, ohne alle Alternativen zu vergleichen."
          },
          {
            "scope": "gameplay",
            "title": "Kein Rückgängig",
            "description": "Behalte jede platzierte, gemalte oder angepasste Entscheidung und arbeite um Fehler herum."
          }
        ]
      }
    }
  },
  {
    "moodId": "challenge",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Fighting Set",
        "title": "Play a fighting-game best-of-five with one character",
        "objective": "Open a fighting game and choose one character you want to learn. Keep that character for a best-of-five set. Finish the set.",
        "tips": [
          {
            "scope": "game-selection",
            "title": "Fighting Pick",
            "description": "Choose a fighting game with short sets and a familiar roster."
          },
          {
            "scope": "gameplay",
            "title": "Let It Stand",
            "description": "Accept the first honest result, even when reloading or rerolling could improve it."
          }
        ]
      },
      "de": {
        "name": "Fighting-Set",
        "title": "Spiel im Kampfspiel ein Best-of-five mit einer Figur",
        "objective": "Öffne ein Fighting Game und wähle eine Figur, die du lernen möchtest. Bleib für ein Best-of-five-Set bei ihr. Beende das Set.",
        "tips": [
          {
            "scope": "game-selection",
            "title": "Kampfspiel wählen",
            "description": "Nimm ein Kampfspiel mit kurzen Sets und vertrauter Figurenliste."
          },
          {
            "scope": "gameplay",
            "title": "Lass es gelten",
            "description": "Akzeptiere das erste ehrliche Ergebnis, auch wenn Neuladen oder Neuwürfeln es verbessern könnte."
          }
        ]
      }
    }
  },
  {
    "moodId": "challenge",
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "Shooter Trio",
        "title": "Play three competitive-shooter matches with one loadout",
        "objective": "Open the competitive shooter whose movement interests you most. Queue for three PvP matches without changing your loadout. Finish all three matches.",
        "tips": [
          {
            "scope": "game-selection",
            "title": "Shooter Pick",
            "description": "Choose a shooter whose required mode and reward progress are already visible."
          },
          {
            "scope": "gameplay",
            "title": "Use Basic Gear",
            "description": "Leave your strongest or rarest option unused and solve the quest with ordinary gear."
          }
        ]
      },
      "de": {
        "name": "Shooter-Trio",
        "title": "Spiel im Competitive-Shooter drei Matches mit einem Loadout",
        "objective": "Öffne den kompetitiven Shooter, dessen Bewegung dich am meisten reizt. Spiele drei PvP-Matches mit demselben Loadout. Beende alle drei Matches.",
        "tips": [
          {
            "scope": "game-selection",
            "title": "Shooter wählen",
            "description": "Nimm einen Shooter mit sichtbarem Modus und Fortschritt zur Belohnung."
          },
          {
            "scope": "gameplay",
            "title": "Nutze einfache Ausrüstung",
            "description": "Lass deine stärkste oder seltenste Option ungenutzt und löse die Quest mit gewöhnlicher Ausrüstung."
          }
        ]
      }
    }
  },
  {
    "moodId": "challenge",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 180,
    "translations": {
      "en": {
        "name": "Three-Race Test",
        "title": "Drive three racing-game laps with the same vehicle",
        "objective": "Choose one familiar track in a racing game. Drive three clean attempts with the same vehicle. Record your best valid time.",
        "tips": [
          {
            "scope": "game-selection",
            "title": "Racing Pick",
            "description": "Choose a racing game with a visible track list or free-roam map."
          },
          {
            "scope": "gameplay",
            "title": "Cockpit View",
            "description": "Stay in first-person or cockpit view for the whole journey."
          }
        ]
      },
      "de": {
        "name": "Drei-Rennen-Test",
        "title": "Fahr im Rennspiel drei Runden mit demselben Fahrzeug",
        "objective": "Wähle eine vertraute Strecke in einem Rennspiel. Fahre drei saubere Versuche mit demselben Fahrzeug. Halte deine beste gültige Zeit fest.",
        "tips": [
          {
            "scope": "game-selection",
            "title": "Rennspiel wählen",
            "description": "Nimm ein Rennspiel mit sichtbarer Streckenliste oder freier Fahrt."
          },
          {
            "scope": "gameplay",
            "title": "Cockpit-Sicht",
            "description": "Bleib während der ganzen Reise in der Ego- oder Cockpit-Perspektive."
          }
        ]
      }
    }
  },
  {
    "moodId": "challenge",
    "minimumDurationMinutes": 10,
    "suggestedDurationMinutes": 30,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Opponent Read",
        "title": "Read one strategy-game opponent before committing",
        "objective": "Open a competitive strategy game and face one opponent. Read their plan before committing to your own. Finish the match.",
        "tips": [
          {
            "scope": "game-selection",
            "title": "Strategy Pick",
            "description": "Choose a strategy game that can finish one match or turn cleanly."
          },
          {
            "scope": "gameplay",
            "title": "Defend First",
            "description": "Make the opening turn about defense or positioning when the rules allow it."
          }
        ]
      },
      "de": {
        "name": "Gegner gelesen",
        "title": "Lies im Strategiespiel den Gegner vor deinem Zug",
        "objective": "Öffne ein kompetitives Strategiespiel und tritt gegen einen Gegner an. Lies seinen Plan, bevor du dich auf deinen festlegst. Beende das Match.",
        "tips": [
          {
            "scope": "game-selection",
            "title": "Strategiespiel wählen",
            "description": "Nimm ein Strategiespiel mit klar abschließbarem Match oder Zug."
          },
          {
            "scope": "gameplay",
            "title": "Verteidige zuerst",
            "description": "Nutze den ersten Zug für Verteidigung oder Positionierung, wenn die Regeln es erlauben."
          }
        ]
      }
    }
  },
  {
    "moodId": "challenge",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Full Match",
        "title": "Finish one sports-game match at its default length",
        "objective": "Choose one sports game and play with the team you care about most. Keep the default match length. Finish the full match.",
        "tips": [
          {
            "scope": "game-selection",
            "title": "Sports Pick",
            "description": "Choose a sports game with a complete short match or event."
          },
          {
            "scope": "gameplay",
            "title": "Let It Stand",
            "description": "Accept the first honest result, even when reloading or rerolling could improve it."
          }
        ]
      },
      "de": {
        "name": "Volles Sportmatch",
        "title": "Beende im Sportspiel ein Match mit Standardlänge",
        "objective": "Wähle ein Sportspiel und spiele mit dem Team, das dir am wichtigsten ist. Behalte die voreingestellte Matchlänge. Beende das vollständige Match.",
        "tips": [
          {
            "scope": "game-selection",
            "title": "Sportspiel wählen",
            "description": "Nimm ein Sportspiel mit kurzem vollständigem Match oder Event."
          },
          {
            "scope": "gameplay",
            "title": "Lass es gelten",
            "description": "Akzeptiere das erste ehrliche Ergebnis, auch wenn Neuladen oder Neuwürfeln es verbessern könnte."
          }
        ]
      }
    }
  },
  {
    "moodId": "challenge",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 180,
    "translations": {
      "en": {
        "name": "Personal Best",
        "title": "Try three times to beat one score",
        "objective": "Open a game that records one personal best. Choose a single score and make three honest attempts to beat it. Improve the score or finish all attempts.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Minimal HUD",
            "description": "Hide optional UI, but keep the quest's required goal and finish indicators visible."
          },
          {
            "scope": "gameplay",
            "title": "Play It Out",
            "description": "Continue after mistakes and adapt instead of restarting, reloading, or abandoning the attempt."
          }
        ]
      },
      "de": {
        "name": "Persönliche Bestleistung",
        "title": "Versuche dreimal einen Wert zu schlagen",
        "objective": "Öffne ein Spiel mit einem persönlichen Rekord. Wähle genau einen Wert und versuche dreimal ehrlich, ihn zu schlagen. Verbessere ihn oder beende alle Versuche.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Minimales HUD",
            "description": "Blende optionale Anzeigen aus, aber behalte Ziel und Abschluss der Quest sichtbar."
          },
          {
            "scope": "gameplay",
            "title": "Spiel es zu Ende",
            "description": "Spiele nach Fehlern weiter und passe dich an, statt neu zu starten oder zu laden."
          }
        ]
      }
    }
  },
  {
    "moodId": "challenge",
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "The Wall Again",
        "title": "Review what went wrong and begin a deliberate new attempt",
        "objective": "Return to the encounter that stopped you before. Review what went wrong and begin a deliberate new attempt. Clear it or finish three attempts.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Play It Out",
            "description": "Continue after mistakes and adapt instead of restarting, reloading, or abandoning the attempt."
          },
          {
            "scope": "gameplay",
            "title": "Use Basic Gear",
            "description": "Leave your strongest or rarest option unused and solve the quest with ordinary gear."
          }
        ]
      },
      "de": {
        "name": "Noch einmal die Hürde",
        "title": "Prüfe deinen letzten Fehler und starte einen bewussten neuen Versuch",
        "objective": "Kehre zu der Begegnung zurück, die dich früher gestoppt hat. Prüfe deinen letzten Fehler und starte einen bewussten neuen Versuch. Schaffe sie oder beende drei Versuche.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Spiel es zu Ende",
            "description": "Spiele nach Fehlern weiter und passe dich an, statt neu zu starten oder zu laden."
          },
          {
            "scope": "gameplay",
            "title": "Nutze einfache Ausrüstung",
            "description": "Lass deine stärkste oder seltenste Option ungenutzt und löse die Quest mit gewöhnlicher Ausrüstung."
          }
        ]
      }
    }
  },
  {
    "moodId": "challenge",
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "One Notch Higher",
        "title": "Start an activity you already understand",
        "objective": "Open a familiar game and raise its difficulty by exactly one step. Start an activity you already understand. Reach the next save, checkpoint, or result screen.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "No Optional Recovery",
            "description": "Use no optional healing or repair items; recover only when the game requires it."
          },
          {
            "scope": "gameplay",
            "title": "Keep Your Setup",
            "description": "Keep the current character, loadout, deck, or vehicle for the entire quest."
          }
        ]
      },
      "de": {
        "name": "Eine Stufe höher",
        "title": "Starte eine Aktivität, die du bereits kennst",
        "objective": "Öffne ein vertrautes Spiel und erhöhe den Schwierigkeitsgrad um genau eine Stufe. Starte eine Aktivität, die du bereits kennst. Erreiche den nächsten Speicherpunkt, Kontrollpunkt oder Ergebnisbildschirm.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keine optionale Heilung",
            "description": "Nutze keine optionalen Heil- oder Reparaturgegenstände; erhole dich nur, wenn das Spiel es verlangt."
          },
          {
            "scope": "gameplay",
            "title": "Behalte dein Setup",
            "description": "Behalte die aktuelle Figur, Ausrüstung, das Deck oder Fahrzeug während der ganzen Quest."
          }
        ]
      }
    }
  },
  {
    "moodId": "challenge",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 180,
    "translations": {
      "en": {
        "name": "Three Lives",
        "title": "Play each attempt through without restarting early",
        "objective": "Choose a game with quick retries and give yourself exactly three lives. Play each attempt through without restarting early. Record the best result.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keep Your Setup",
            "description": "Keep the current character, loadout, deck, or vehicle for the entire quest."
          },
          {
            "scope": "gameplay",
            "title": "Minimal HUD",
            "description": "Hide optional UI, but keep the quest's required goal and finish indicators visible."
          }
        ]
      },
      "de": {
        "name": "Drei Leben",
        "title": "Spiele jeden Versuch ohne vorzeitigen Neustart zu Ende",
        "objective": "Wähle ein Spiel mit schnellen Neustarts und gib dir genau drei Leben. Spiele jeden Versuch ohne vorzeitigen Neustart zu Ende. Halte das beste Ergebnis fest.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Behalte dein Setup",
            "description": "Behalte die aktuelle Figur, Ausrüstung, das Deck oder Fahrzeug während der ganzen Quest."
          },
          {
            "scope": "gameplay",
            "title": "Minimales HUD",
            "description": "Blende optionale Anzeigen aus, aber behalte Ziel und Abschluss der Quest sichtbar."
          }
        ]
      }
    }
  },
  {
    "moodId": "challenge",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Neglected Tool",
        "title": "Keep that option central for the next activity",
        "objective": "Open a game with one useful option you always ignore. Keep that option central for the next activity. Reach the next save, checkpoint, or result screen.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Play It Out",
            "description": "Continue after mistakes and adapt instead of restarting, reloading, or abandoning the attempt."
          },
          {
            "scope": "gameplay",
            "title": "Underdog Option",
            "description": "Use a viable character, tool, or build weaker than your usual favorite."
          }
        ]
      },
      "de": {
        "name": "Vernachlässigtes Werkzeug",
        "title": "Nutze sie als Kern der nächsten Aktivität",
        "objective": "Öffne ein Spiel mit einer nützlichen Option, die du immer ignorierst. Nutze sie als Kern der nächsten Aktivität. Erreiche den nächsten Speicherpunkt, Kontrollpunkt oder Ergebnisbildschirm.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Spiel es zu Ende",
            "description": "Spiele nach Fehlern weiter und passe dich an, statt neu zu starten oder zu laden."
          },
          {
            "scope": "gameplay",
            "title": "Außenseiter-Option",
            "description": "Nutze eine brauchbare Figur, ein Werkzeug oder einen Build unterhalb deines üblichen Favoriten."
          }
        ]
      }
    }
  },
  {
    "moodId": "challenge",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Silent Crossing",
        "title": "Cross one stealth-game area without a full alarm",
        "objective": "Choose one guarded area in a stealth game. Cross it without causing a full alarm. Reach the other side.",
        "tips": [
          {
            "scope": "game-selection",
            "title": "Stealth Pick",
            "description": "Choose a stealth game with visible alarms and bounded areas."
          },
          {
            "scope": "gameplay",
            "title": "Minimal HUD",
            "description": "Hide optional UI, but keep the quest's required goal and finish indicators visible."
          }
        ]
      },
      "de": {
        "name": "Unentdeckter Weg",
        "title": "Durchquere im Schleichspiel ein Gebiet ohne Vollalarm",
        "objective": "Wähle einen bewachten Bereich in einem Stealth-Spiel. Durchquere ihn, ohne einen vollständigen Alarm auszulösen. Erreiche die andere Seite.",
        "tips": [
          {
            "scope": "game-selection",
            "title": "Schleichspiel wählen",
            "description": "Nimm ein Schleichspiel mit sichtbarem Alarm und klaren Gebieten."
          },
          {
            "scope": "gameplay",
            "title": "Minimales HUD",
            "description": "Blende optionale Anzeigen aus, aber behalte Ziel und Abschluss der Quest sichtbar."
          }
        ]
      }
    }
  },
  {
    "moodId": "challenge",
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "Half Supplies",
        "title": "Start one contained activity with that limit",
        "objective": "Open a game where supplies matter and take half your usual amount. Start one contained activity with that limit. Finish it without exceeding the ration.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keep One in Reserve",
            "description": "Finish with at least one use of a limited resource still available."
          },
          {
            "scope": "gameplay",
            "title": "Use Basic Gear",
            "description": "Leave your strongest or rarest option unused and solve the quest with ordinary gear."
          }
        ]
      },
      "de": {
        "name": "Halbe Vorräte",
        "title": "Starte damit eine begrenzte Aktivität",
        "objective": "Öffne ein Spiel, in dem Vorräte wichtig sind, und nimm nur die Hälfte deiner üblichen Menge. Starte damit eine begrenzte Aktivität. Beende sie innerhalb des Limits.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Behalte eine Reserve",
            "description": "Beende die Quest mit mindestens einer übrigen Nutzung einer begrenzten Ressource."
          },
          {
            "scope": "gameplay",
            "title": "Nutze einfache Ausrüstung",
            "description": "Lass deine stärkste oder seltenste Option ungenutzt und löse die Quest mit gewöhnlicher Ausrüstung."
          }
        ]
      }
    }
  },
  {
    "moodId": "challenge",
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "Git Gud, Gently",
        "title": "Fight cleanly instead of relying on your strongest setup",
        "objective": "Return to one memorable boss and equip ordinary gear. Fight cleanly instead of relying on your strongest setup. Win or finish three attempts.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Play It Out",
            "description": "Continue after mistakes and adapt instead of restarting, reloading, or abandoning the attempt."
          },
          {
            "scope": "gameplay",
            "title": "Damage Budget",
            "description": "Choose a clear damage limit before starting and stop the attempt when it is spent."
          }
        ]
      },
      "de": {
        "name": "Git Gud, aber fair",
        "title": "Kämpfe sauber statt mit deinem stärksten Setup",
        "objective": "Kehre zu einem einprägsamen Boss zurück und rüste gewöhnliche Ausrüstung aus. Kämpfe sauber statt mit deinem stärksten Setup. Gewinne oder beende drei Versuche.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Spiel es zu Ende",
            "description": "Spiele nach Fehlern weiter und passe dich an, statt neu zu starten oder zu laden."
          },
          {
            "scope": "gameplay",
            "title": "Schadensbudget",
            "description": "Lege vor dem Start ein klares Schadenslimit fest und stoppe, wenn es aufgebraucht ist."
          }
        ]
      }
    }
  },
  {
    "moodId": "challenge",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 180,
    "translations": {
      "en": {
        "name": "Precision Passage",
        "title": "Repeat the whole sequence instead of drilling only its easiest part",
        "objective": "Choose one short sequence that demands precise input. Repeat the whole sequence instead of drilling only its easiest part. Clear it or make five attempts.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Minimal HUD",
            "description": "Hide optional UI, but keep the quest's required goal and finish indicators visible."
          },
          {
            "scope": "gameplay",
            "title": "Play It Out",
            "description": "Continue after mistakes and adapt instead of restarting, reloading, or abandoning the attempt."
          }
        ]
      },
      "de": {
        "name": "Präzisionspassage",
        "title": "Wiederhole die ganze Sequenz statt nur ihren leichtesten Teil",
        "objective": "Wähle eine kurze Passage, die präzise Eingaben verlangt. Wiederhole die ganze Sequenz statt nur ihren leichtesten Teil. Schaffe sie oder unternimm fünf Versuche.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Minimales HUD",
            "description": "Blende optionale Anzeigen aus, aber behalte Ziel und Abschluss der Quest sichtbar."
          },
          {
            "scope": "gameplay",
            "title": "Spiel es zu Ende",
            "description": "Spiele nach Fehlern weiter und passe dich an, statt neu zu starten oder zu laden."
          }
        ]
      }
    }
  },
  {
    "moodId": "challenge",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "No Hints",
        "title": "Inspect the problem and commit to your own reasoning",
        "objective": "Choose one unsolved puzzle, inspect it without hints, and solve it or finish three complete attempts without changing puzzles.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Talk It Through",
            "description": "Say your intended move aloud before making it."
          },
          {
            "scope": "gameplay",
            "title": "Minimal HUD",
            "description": "Hide optional UI, but keep the quest's required goal and finish indicators visible."
          }
        ]
      },
      "de": {
        "name": "Ohne Hinweise",
        "title": "Untersuche das Problem und vertraue deiner eigenen Logik",
        "objective": "Wähle ein ungelöstes Rätsel, untersuche es ohne Hinweise und löse es oder beende drei vollständige Versuche, ohne das Rätsel zu wechseln.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Sprich es aus",
            "description": "Sage deinen geplanten Zug laut, bevor du ihn ausführst."
          },
          {
            "scope": "gameplay",
            "title": "Minimales HUD",
            "description": "Blende optionale Anzeigen aus, aber behalte Ziel und Abschluss der Quest sichtbar."
          }
        ]
      }
    }
  },
  {
    "moodId": "challenge",
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "Weak-Link Drill",
        "title": "Practice only that weakness, then enter real play",
        "objective": "Name the skill that costs you the most results in one game. Practice only that weakness, then enter real play. Use it successfully.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "One Move Deeper",
            "description": "Choose one mechanic and use it deliberately in three different situations."
          },
          {
            "scope": "gameplay",
            "title": "Three Attempts",
            "description": "Give the same challenge three complete attempts without changing the target between them."
          }
        ]
      },
      "de": {
        "name": "Schwachstelle trainiert",
        "title": "Übe nur diese Schwäche und geh dann ins echte Spiel",
        "objective": "Benenne die Fähigkeit, die dich in einem Spiel die meisten Ergebnisse kostet. Übe nur diese Schwäche und geh dann ins echte Spiel. Nutze sie erfolgreich.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Eine Technik tiefer",
            "description": "Wähle eine Mechanik und nutze sie bewusst in drei unterschiedlichen Situationen."
          },
          {
            "scope": "gameplay",
            "title": "Drei Versuche",
            "description": "Gib derselben Herausforderung drei vollständige Versuche, ohne das Ziel dazwischen zu wechseln."
          }
        ]
      }
    }
  },
  {
    "moodId": "challenge",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 180,
    "translations": {
      "en": {
        "name": "Daily Challenge",
        "title": "Accept its default rules and make one valid attempt",
        "objective": "Open a game with a challenge dated today. Accept its default rules and make one valid attempt. Submit a result.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keep Your Setup",
            "description": "Keep the current character, loadout, deck, or vehicle for the entire quest."
          },
          {
            "scope": "gameplay",
            "title": "Let It Stand",
            "description": "Accept the first honest result, even when reloading or rerolling could improve it."
          }
        ]
      },
      "de": {
        "name": "Tagesherausforderung",
        "title": "Akzeptiere die Standardregeln und starte einen gültigen Versuch",
        "objective": "Öffne ein Spiel mit einer heutigen Challenge. Akzeptiere die Standardregeln und starte einen gültigen Versuch. Reiche ein Ergebnis ein.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Behalte dein Setup",
            "description": "Behalte die aktuelle Figur, Ausrüstung, das Deck oder Fahrzeug während der ganzen Quest."
          },
          {
            "scope": "gameplay",
            "title": "Lass es gelten",
            "description": "Akzeptiere das erste ehrliche Ergebnis, auch wenn Neuladen oder Neuwürfeln es verbessern könnte."
          }
        ]
      }
    }
  },
  {
    "moodId": "challenge",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Underdog Choice",
        "title": "Keep the underdog option for the entire activity",
        "objective": "Choose the weakest option you still consider viable. Keep the underdog option for the entire activity. Finish one full round, match, task, or test and keep its result.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Play It Out",
            "description": "Continue after mistakes and adapt instead of restarting, reloading, or abandoning the attempt."
          },
          {
            "scope": "gameplay",
            "title": "No Upgrades",
            "description": "Buy, unlock, and equip no upgrades until the current quest is finished."
          }
        ]
      },
      "de": {
        "name": "Außenseiterwahl",
        "title": "Behalte die Außenseiteroption für die gesamte Aktivität",
        "objective": "Wähle die schwächste Option, die du noch für brauchbar hältst. Behalte die Außenseiteroption für die gesamte Aktivität. Beende eine ganze Runde, ein Match, eine Aufgabe oder einen Test und behalte das Ergebnis.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Spiel es zu Ende",
            "description": "Spiele nach Fehlern weiter und passe dich an, statt neu zu starten oder zu laden."
          },
          {
            "scope": "gameplay",
            "title": "Keine Upgrades",
            "description": "Kaufe, schalte frei und rüste nichts auf, bis die aktuelle Quest beendet ist."
          }
        ]
      }
    }
  },
  {
    "moodId": "challenge",
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "No-Restart Recovery",
        "title": "Recover from the first serious setback in play",
        "objective": "Start an activity where mistakes matter and promise not to restart. Recover from the first serious setback in play. Complete one full attempt and stop at its result screen.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keep One in Reserve",
            "description": "Finish with at least one use of a limited resource still available."
          },
          {
            "scope": "gameplay",
            "title": "Use Basic Gear",
            "description": "Leave your strongest or rarest option unused and solve the quest with ordinary gear."
          }
        ]
      },
      "de": {
        "name": "Erholung ohne Neustart",
        "title": "Fange den ersten ernsten Rückschlag im Spiel auf",
        "objective": "Starte eine Aktivität, in der Fehler zählen, und verzichte auf Neustarts. Fange den ersten ernsten Rückschlag im Spiel auf. Beende einen vollständigen Versuch und stoppe am Ergebnisbildschirm.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Behalte eine Reserve",
            "description": "Beende die Quest mit mindestens einer übrigen Nutzung einer begrenzten Ressource."
          },
          {
            "scope": "gameplay",
            "title": "Nutze einfache Ausrüstung",
            "description": "Lass deine stärkste oder seltenste Option ungenutzt und löse die Quest mit gewöhnlicher Ausrüstung."
          }
        ]
      }
    }
  },
  {
    "moodId": "challenge",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Pattern Read",
        "title": "Watch until you can predict it, then act on that prediction",
        "objective": "Choose one encounter with a repeating signal. Watch until you can predict it, then act on that prediction. Clear the encounter.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "No Outside Help",
            "description": "Rely only on the game: no guides, wikis, solution videos, or external maps."
          },
          {
            "scope": "gameplay",
            "title": "One Move Deeper",
            "description": "Choose one mechanic and use it deliberately in three different situations."
          }
        ]
      },
      "de": {
        "name": "Muster erkannt",
        "title": "Beobachte es, bis du es vorhersagen kannst, und handle danach",
        "objective": "Wähle eine Begegnung mit einem wiederkehrenden Signal. Beobachte es, bis du es vorhersagen kannst, und handle danach. Schaffe die Begegnung.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keine externe Hilfe",
            "description": "Verlasse dich nur auf das Spiel: keine Guides, Wikis, Lösungsvideos oder externen Karten."
          },
          {
            "scope": "gameplay",
            "title": "Eine Technik tiefer",
            "description": "Wähle eine Mechanik und nutze sie bewusst in drei unterschiedlichen Situationen."
          }
        ]
      }
    }
  },
  {
    "moodId": "challenge",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Three-Wave Stand",
        "title": "Prepare before the first wave instead of moving later",
        "objective": "Choose one defensive position and commit to holding it. Prepare before the first wave instead of moving later. Survive three full waves.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "No Optional Recovery",
            "description": "Use no optional healing or repair items; recover only when the game requires it."
          },
          {
            "scope": "gameplay",
            "title": "Keep One in Reserve",
            "description": "Finish with at least one use of a limited resource still available."
          }
        ]
      },
      "de": {
        "name": "Drei Wellen",
        "title": "Bereite sie vor der ersten Welle vor, statt später auszuweichen",
        "objective": "Wähle eine Verteidigungsposition und halte an ihr fest. Bereite sie vor der ersten Welle vor, statt später auszuweichen. Überstehe drei vollständige Wellen.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keine optionale Heilung",
            "description": "Nutze keine optionalen Heil- oder Reparaturgegenstände; erhole dich nur, wenn das Spiel es verlangt."
          },
          {
            "scope": "gameplay",
            "title": "Behalte eine Reserve",
            "description": "Beende die Quest mit mindestens einer übrigen Nutzung einer begrenzten Ressource."
          }
        ]
      }
    }
  },
  {
    "moodId": "challenge",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 180,
    "translations": {
      "en": {
        "name": "Ranked Nerves",
        "title": "Enter once with no target beyond finishing the result",
        "objective": "Open the ranked queue you keep avoiding. Enter once with no target beyond finishing the result. Complete one rated match.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keep Your Setup",
            "description": "Keep the current character, loadout, deck, or vehicle for the entire quest."
          },
          {
            "scope": "gameplay",
            "title": "Let It Stand",
            "description": "Accept the first honest result, even when reloading or rerolling could improve it."
          }
        ]
      },
      "de": {
        "name": "Ranglistennerven",
        "title": "Tritt einmal an, ohne ein anderes Ziel als den Abschluss",
        "objective": "Öffne die Ranglisten-Warteschlange, die du immer vermeidest. Tritt einmal an, ohne ein anderes Ziel als den Abschluss. Beende ein gewertetes Match.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Behalte dein Setup",
            "description": "Behalte die aktuelle Figur, Ausrüstung, das Deck oder Fahrzeug während der ganzen Quest."
          },
          {
            "scope": "gameplay",
            "title": "Lass es gelten",
            "description": "Akzeptiere das erste ehrliche Ergebnis, auch wenn Neuladen oder Neuwürfeln es verbessern könnte."
          }
        ]
      }
    }
  },
  {
    "moodId": "challenge",
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "Hard Achievement",
        "title": "Read the requirement and start from its exact beginning",
        "objective": "Open a game with a skill-based achievement you have avoided. Read the requirement and start from its exact beginning. Unlock it or make three full attempts.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Stay on One Goal",
            "description": "Ignore side missions and map markers so the quest stays on one clear goal."
          },
          {
            "scope": "gameplay",
            "title": "No Outside Help",
            "description": "Rely only on the game: no guides, wikis, solution videos, or external maps."
          }
        ]
      },
      "de": {
        "name": "Schwerer Erfolg",
        "title": "Lies die Bedingung und starte genau an ihrem Anfang",
        "objective": "Öffne ein Spiel mit einem schwierigen Achievement, das du bisher vermieden hast. Lies die Bedingung und starte genau an ihrem Anfang. Schalte es frei oder unternimm drei vollständige Versuche.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Bleib bei einem Ziel",
            "description": "Ignoriere Nebenmissionen und Kartenmarker, damit die Quest bei einem klaren Ziel bleibt."
          },
          {
            "scope": "gameplay",
            "title": "Keine externe Hilfe",
            "description": "Verlasse dich nur auf das Spiel: keine Guides, Wikis, Lösungsvideos oder externen Karten."
          }
        ]
      }
    }
  },
  {
    "moodId": "challenge",
    "minimumDurationMinutes": 10,
    "suggestedDurationMinutes": 20,
    "rewardPoints": 250,
    "translations": {
      "en": {
        "name": "Full Shift",
        "title": "Enter the survival mode prepared to reach its endpoint",
        "objective": "Choose one survival scenario with a defined end. Enter the survival mode prepared to reach its endpoint. Survive the full scenario.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keep One in Reserve",
            "description": "Finish with at least one use of a limited resource still available."
          },
          {
            "scope": "gameplay",
            "title": "Stop Cleanly",
            "description": "End at a safe save point or result screen without starting something new."
          }
        ]
      },
      "de": {
        "name": "Ganze Schicht",
        "title": "Betritt den Überlebensmodus mit dem Ziel, seinen Endpunkt zu erreichen",
        "objective": "Wähle ein Überlebensszenario mit einem klaren Ende. Betritt den Überlebensmodus mit dem Ziel, seinen Endpunkt zu erreichen. Überstehe das ganze Szenario.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Behalte eine Reserve",
            "description": "Beende die Quest mit mindestens einer übrigen Nutzung einer begrenzten Ressource."
          },
          {
            "scope": "gameplay",
            "title": "Sauber aufhören",
            "description": "Höre an einem sicheren Speicherpunkt oder Ergebnisbildschirm auf, ohne etwas Neues zu starten."
          }
        ]
      }
    }
  },
  {
    "moodId": "challenge",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Advanced Move",
        "title": "Practice it, then attempt it during real play",
        "objective": "Pick one advanced move you cannot yet use reliably. Practice it, then attempt it during real play. Land it three times.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "No Outside Help",
            "description": "Rely only on the game: no guides, wikis, solution videos, or external maps."
          },
          {
            "scope": "gameplay",
            "title": "Keep Your Setup",
            "description": "Keep the current character, loadout, deck, or vehicle for the entire quest."
          }
        ]
      },
      "de": {
        "name": "Fortgeschrittene Technik",
        "title": "Übe sie und versuche sie dann im echten Spiel",
        "objective": "Wähle eine fortgeschrittene Technik, die du noch nicht zuverlässig kannst. Übe sie und versuche sie dann im echten Spiel. Führe sie dreimal erfolgreich aus.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keine externe Hilfe",
            "description": "Verlasse dich nur auf das Spiel: keine Guides, Wikis, Lösungsvideos oder externen Karten."
          },
          {
            "scope": "gameplay",
            "title": "Behalte dein Setup",
            "description": "Behalte die aktuelle Figur, Ausrüstung, das Deck oder Fahrzeug während der ganzen Quest."
          }
        ]
      }
    }
  },
  {
    "moodId": "challenge",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 180,
    "translations": {
      "en": {
        "name": "Clean Sequence",
        "title": "Perform the full sequence without improvising between steps",
        "objective": "Choose one short sequence of linked actions. Perform the full sequence without improvising between steps. Execute it cleanly three times.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keep the First Take",
            "description": "Keep the first complete version and resist adding a second polish pass."
          },
          {
            "scope": "gameplay",
            "title": "No Outside Help",
            "description": "Rely only on the game: no guides, wikis, solution videos, or external maps."
          }
        ]
      },
      "de": {
        "name": "Saubere Sequenz",
        "title": "Führe die ganze Sequenz aus, ohne zwischen den Schritten zu improvisieren",
        "objective": "Wähle eine kurze Abfolge verbundener Aktionen. Führe die ganze Sequenz aus, ohne zwischen den Schritten zu improvisieren. Schaffe sie dreimal sauber.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Behalte den ersten Versuch",
            "description": "Behalte die erste vollständige Version und widerstehe einer zweiten Überarbeitungsrunde."
          },
          {
            "scope": "gameplay",
            "title": "Keine externe Hilfe",
            "description": "Verlasse dich nur auf das Spiel: keine Guides, Wikis, Lösungsvideos oder externen Karten."
          }
        ]
      }
    }
  },
  {
    "moodId": "challenge",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 180,
    "translations": {
      "en": {
        "name": "Damage Budget",
        "title": "Start with that budget fixed",
        "objective": "Choose one encounter with visible health and set a loss limit of one quarter. Start with that budget fixed. Finish within the limit.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keep One in Reserve",
            "description": "Finish with at least one use of a limited resource still available."
          },
          {
            "scope": "gameplay",
            "title": "No Optional Recovery",
            "description": "Use no optional healing or repair items; recover only when the game requires it."
          }
        ]
      },
      "de": {
        "name": "Schadensbudget",
        "title": "Starte mit diesem festen Budget",
        "objective": "Wähle eine Begegnung mit sichtbarer Gesundheit und setze ein Verlustlimit von einem Viertel. Starte mit diesem festen Budget. Beende sie innerhalb des Limits.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Behalte eine Reserve",
            "description": "Beende die Quest mit mindestens einer übrigen Nutzung einer begrenzten Ressource."
          },
          {
            "scope": "gameplay",
            "title": "Keine optionale Heilung",
            "description": "Nutze keine optionalen Heil- oder Reparaturgegenstände; erhole dich nur, wenn das Spiel es verlangt."
          }
        ]
      }
    }
  },
  {
    "moodId": "challenge",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Unknown Rules",
        "title": "Start before you feel fully prepared",
        "objective": "Open a mode you have never played and read its rules once. Start before you feel fully prepared. Finish one full result.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "No Outside Help",
            "description": "Rely only on the game: no guides, wikis, solution videos, or external maps."
          },
          {
            "scope": "gameplay",
            "title": "Let It Stand",
            "description": "Accept the first honest result, even when reloading or rerolling could improve it."
          }
        ]
      },
      "de": {
        "name": "Unbekannte Regeln",
        "title": "Starte, bevor du dich vollständig vorbereitet fühlst",
        "objective": "Öffne einen Modus, den du noch nie gespielt hast, und lies seine Regeln einmal. Starte, bevor du dich vollständig vorbereitet fühlst. Beende eine ganze Runde, ein Match, eine Aufgabe oder einen Test und behalte das Ergebnis.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keine externe Hilfe",
            "description": "Verlasse dich nur auf das Spiel: keine Guides, Wikis, Lösungsvideos oder externen Karten."
          },
          {
            "scope": "gameplay",
            "title": "Lass es gelten",
            "description": "Akzeptiere das erste ehrliche Ergebnis, auch wenn Neuladen oder Neuwürfeln es verbessern könnte."
          }
        ]
      }
    }
  },
  {
    "moodId": "challenge",
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "Risky Route",
        "title": "Take that route and accept its consequences without reloading",
        "objective": "Choose an objective with a clearly riskier route. Take that route and accept its consequences without reloading. Reach its endpoint.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "No Map",
            "description": "Navigate through landmarks and memory without opening a map or route overlay."
          },
          {
            "scope": "gameplay",
            "title": "No Optional Recovery",
            "description": "Use no optional healing or repair items; recover only when the game requires it."
          }
        ]
      },
      "de": {
        "name": "Riskanter Weg",
        "title": "Nimm diesen Weg und akzeptiere seine Folgen, ohne neu zu laden",
        "objective": "Wähle ein Ziel mit einer deutlich riskanteren Route. Nimm diesen Weg und akzeptiere seine Folgen, ohne neu zu laden. Erreiche seinen Endpunkt.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keine Karte",
            "description": "Navigiere mit Orientierungspunkten und Erinnerung, ohne Karte oder eingeblendete Route."
          },
          {
            "scope": "gameplay",
            "title": "Keine optionale Heilung",
            "description": "Nutze keine optionalen Heil- oder Reparaturgegenstände; erhole dich nur, wenn das Spiel es verlangt."
          }
        ]
      }
    }
  },
  {
    "moodId": "challenge",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 180,
    "translations": {
      "en": {
        "name": "Held Tension",
        "title": "Continue from your latest save without lowering the atmosphere",
        "objective": "Open the tense game you keep postponing. Continue from your latest save without lowering the atmosphere. Reach the next safe point.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Play It Out",
            "description": "Continue after mistakes and adapt instead of restarting, reloading, or abandoning the attempt."
          },
          {
            "scope": "gameplay",
            "title": "Move Without Rushing",
            "description": "Avoid sprinting, boosting, or skipping ahead; let the journey set the pace."
          }
        ]
      },
      "de": {
        "name": "Spannung ausgehalten",
        "title": "Spiele vom letzten Spielstand weiter, ohne die Atmosphäre abzuschwächen",
        "objective": "Öffne das angespannte Spiel, das du immer wieder aufschiebst. Spiele vom letzten Spielstand weiter, ohne die Atmosphäre abzuschwächen. Erreiche den nächsten sicheren Punkt.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Spiel es zu Ende",
            "description": "Spiele nach Fehlern weiter und passe dich an, statt neu zu starten oder zu laden."
          },
          {
            "scope": "gameplay",
            "title": "Ohne Eile",
            "description": "Vermeide Sprinten, Boosts und Abkürzungen; lass den Weg das Tempo bestimmen."
          }
        ]
      }
    }
  },
  {
    "moodId": "challenge",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 190,
    "translations": {
      "en": {
        "name": "No-Fall Section",
        "title": "Attempt the whole route without falling once",
        "objective": "Choose a short platforming section you already understand. Attempt the whole route without falling once. Reach the next checkpoint without a fall.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Three Attempts",
            "description": "Give the same challenge three complete attempts without changing the target between them."
          },
          {
            "scope": "gameplay",
            "title": "Keep Your Setup",
            "description": "Keep the current character, loadout, deck, or vehicle for the entire quest."
          }
        ]
      },
      "de": {
        "name": "Abschnitt ohne Sturz",
        "title": "Versuche die ganze Route ohne einen einzigen Sturz",
        "objective": "Wähle eine kurze Plattformpassage, die du bereits verstehst. Versuche die ganze Route ohne einen einzigen Sturz. Erreiche den nächsten Kontrollpunkt ohne einen Sturz.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Drei Versuche",
            "description": "Gib derselben Herausforderung drei vollständige Versuche, ohne das Ziel dazwischen zu wechseln."
          },
          {
            "scope": "gameplay",
            "title": "Behalte dein Setup",
            "description": "Behalte die aktuelle Figur, Ausrüstung, das Deck oder Fahrzeug während der ganzen Quest."
          }
        ]
      }
    }
  },
  {
    "moodId": "challenge",
    "minimumDurationMinutes": 10,
    "suggestedDurationMinutes": 30,
    "rewardPoints": 240,
    "translations": {
      "en": {
        "name": "Iron Plan",
        "title": "Keep every decision even when it hurts",
        "objective": "Open one contained tactics mission and make a plan before moving. Keep every decision even when it hurts. Win without reloading or losing a unit.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "No Outside Help",
            "description": "Rely only on the game: no guides, wikis, solution videos, or external maps."
          },
          {
            "scope": "gameplay",
            "title": "Bring Back One Image",
            "description": "Capture one screenshot that clearly shows the finished result or final stopping point."
          }
        ]
      },
      "de": {
        "name": "Eiserner Plan",
        "title": "Behalte jede Entscheidung, auch wenn sie wehtut",
        "objective": "Öffne eine begrenzte Taktikmission und plane vor dem ersten Zug. Behalte jede Entscheidung, auch wenn sie wehtut. Gewinne ohne Neuladen oder Einheitenverlust.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keine externe Hilfe",
            "description": "Verlasse dich nur auf das Spiel: keine Guides, Wikis, Lösungsvideos oder externen Karten."
          },
          {
            "scope": "gameplay",
            "title": "Bring ein Bild mit",
            "description": "Mache einen Screenshot, der das fertige Ergebnis oder den endgültigen Haltepunkt klar zeigt."
          }
        ]
      }
    }
  },
  {
    "moodId": "challenge",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 190,
    "translations": {
      "en": {
        "name": "Cleaner Song",
        "title": "Play one rhythm song three focused times",
        "objective": "Choose one song near your current limit. Play the same rhythm song three times and focus on one weak section. Improve its score or combo.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Sound Timing",
            "description": "Follow audio cues instead of watching only the score or timing bar."
          },
          {
            "scope": "gameplay",
            "title": "Keep Your Setup",
            "description": "Keep the current character, loadout, deck, or vehicle for the entire quest."
          }
        ]
      },
      "de": {
        "name": "Sauberer Song",
        "title": "Spiele einen Rhythmus-Song dreimal mit Fokus",
        "objective": "Wähle einen Song nahe deiner aktuellen Grenze. Spiele denselben Rhythmus-Song dreimal und fokussiere eine schwache Passage. Verbessere Wertung oder Kombo.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Nach Gehör",
            "description": "Folge Tonsignalen statt nur auf Punkte oder Timing-Anzeigen zu schauen."
          },
          {
            "scope": "gameplay",
            "title": "Behalte dein Setup",
            "description": "Behalte die aktuelle Figur, Ausrüstung, das Deck oder Fahrzeug während der ganzen Quest."
          }
        ]
      }
    }
  },
  {
    "moodId": "challenge",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 210,
    "translations": {
      "en": {
        "name": "Comeback Game",
        "title": "Turn one sports-game deficit into a comeback",
        "objective": "Open a sports game with a comeback scenario, or load a saved match where you trail; play until the final result and win or draw.",
        "tips": [
          {
            "scope": "game-selection",
            "title": "Sports Pick",
            "description": "Choose a sports game with a complete short match or event."
          },
          {
            "scope": "gameplay",
            "title": "Let It Stand",
            "description": "Accept the first honest result, even when reloading or rerolling could improve it."
          }
        ]
      },
      "de": {
        "name": "Comeback-Spiel",
        "title": "Mach im Sportspiel aus einem Rückstand ein Comeback",
        "objective": "Öffne ein Sportspiel mit Comeback-Szenario oder lade ein gespeichertes Match mit Rückstand; spiele bis zum Endergebnis und gewinne oder erreiche ein Unentschieden.",
        "tips": [
          {
            "scope": "game-selection",
            "title": "Sportspiel wählen",
            "description": "Nimm ein Sportspiel mit kurzem vollständigem Match oder Event."
          },
          {
            "scope": "gameplay",
            "title": "Lass es gelten",
            "description": "Akzeptiere das erste ehrliche Ergebnis, auch wenn Neuladen oder Neuwürfeln es verbessern könnte."
          }
        ]
      }
    }
  },
  {
    "moodId": "challenge",
    "minimumDurationMinutes": 10,
    "suggestedDurationMinutes": 20,
    "rewardPoints": 240,
    "translations": {
      "en": {
        "name": "Useful Haul",
        "title": "Take it and head for the exit immediately",
        "objective": "Enter one extraction run with a single needed resource in mind. Take it and head for the exit immediately. Extract alive.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keep One in Reserve",
            "description": "Finish with at least one use of a limited resource still available."
          },
          {
            "scope": "gameplay",
            "title": "Stop Cleanly",
            "description": "End at a safe save point or result screen without starting something new."
          }
        ]
      },
      "de": {
        "name": "Nützliche Beute",
        "title": "Hol sie und geh sofort zum Ausgang",
        "objective": "Betritt einen Extraction-Run mit genau einer benötigten Ressource im Kopf. Hol sie und geh sofort zum Ausgang. Extrahiere lebend.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Behalte eine Reserve",
            "description": "Beende die Quest mit mindestens einer übrigen Nutzung einer begrenzten Ressource."
          },
          {
            "scope": "gameplay",
            "title": "Sauber aufhören",
            "description": "Höre an einem sicheren Speicherpunkt oder Ergebnisbildschirm auf, ohne etwas Neues zu starten."
          }
        ]
      }
    }
  },
  {
    "moodId": "challenge",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Speedrun Split",
        "title": "Restart only after completing the full section",
        "objective": "Choose one short section you know well and time it three times. Restart only after completing the full section. Keep the fastest clean run.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Minimal HUD",
            "description": "Hide optional UI, but keep the quest's required goal and finish indicators visible."
          },
          {
            "scope": "gameplay",
            "title": "Keep Your Setup",
            "description": "Keep the current character, loadout, deck, or vehicle for the entire quest."
          }
        ]
      },
      "de": {
        "name": "Speedrun-Split",
        "title": "Starte erst nach dem vollständigen Abschnitt neu",
        "objective": "Wähle eine kurze vertraute Passage und stoppe dreimal ihre Zeit. Starte erst nach dem vollständigen Abschnitt neu. Behalte den schnellsten sauberen Run.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Minimales HUD",
            "description": "Blende optionale Anzeigen aus, aber behalte Ziel und Abschluss der Quest sichtbar."
          },
          {
            "scope": "gameplay",
            "title": "Behalte dein Setup",
            "description": "Behalte die aktuelle Figur, Ausrüstung, das Deck oder Fahrzeug während der ganzen Quest."
          }
        ]
      }
    }
  },
  {
    "moodId": "connect",
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "Old Squad",
        "title": "Enter a solo activity using the role you filled for them",
        "objective": "Open the game your old group once played together. Enter a solo activity using the role you filled for them. Reach the next save, checkpoint, or result screen.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keep Your Setup",
            "description": "Keep the current character, loadout, deck, or vehicle for the entire quest."
          },
          {
            "scope": "gameplay",
            "title": "Let It Stand",
            "description": "Accept the first honest result, even when reloading or rerolling could improve it."
          }
        ]
      },
      "de": {
        "name": "Altes Squad",
        "title": "Starte solo mit der Rolle, die du damals übernommen hast",
        "objective": "Öffne das Spiel, das deine frühere Gruppe zusammen gespielt hat. Starte solo mit der Rolle, die du damals übernommen hast. Erreiche den nächsten Speicherpunkt, Kontrollpunkt oder Ergebnisbildschirm.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Behalte dein Setup",
            "description": "Behalte die aktuelle Figur, Ausrüstung, das Deck oder Fahrzeug während der ganzen Quest."
          },
          {
            "scope": "gameplay",
            "title": "Lass es gelten",
            "description": "Akzeptiere das erste ehrliche Ergebnis, auch wenn Neuladen oder Neuwürfeln es verbessern könnte."
          }
        ]
      }
    }
  },
  {
    "moodId": "connect",
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "New Team",
        "title": "Join one random team and follow their pace",
        "objective": "Return to an old group game with public matchmaking. Join one random team and follow their pace. Stay through the full result.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "No Microphone Needed",
            "description": "Keep the microphone off and communicate through pings, movement, emotes, or short text."
          },
          {
            "scope": "gameplay",
            "title": "Keep Your Role",
            "description": "Choose one team responsibility and keep serving it through the complete result."
          }
        ]
      },
      "de": {
        "name": "Neues Team",
        "title": "Tritt einem zufälligen Team bei und folge seinem Tempo",
        "objective": "Kehre zu einem alten Gruppenspiel mit öffentlichem Matchmaking zurück. Tritt einem zufälligen Team bei und folge seinem Tempo. Bleib bis zum vollständigen Ergebnis.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Kein Mikrofon nötig",
            "description": "Lass das Mikrofon aus und kommuniziere mit Pings, Bewegung, Emotes oder kurzem Text."
          },
          {
            "scope": "gameplay",
            "title": "Bleib in deiner Rolle",
            "description": "Wähle eine Teamaufgabe und erfülle sie bis zum vollständigen Ergebnis."
          }
        ]
      }
    }
  },
  {
    "moodId": "connect",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Trusted Recommendation",
        "title": "Open that game and start its first activity",
        "objective": "Think of the clearest game recommendation a friend ever gave you. Open that game and start its first activity. Reach the first save, checkpoint, or result screen.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Borrow Their Style",
            "description": "Copy one visible route, build, rhythm, or technique before adapting it yourself."
          },
          {
            "scope": "gameplay",
            "title": "No Outside Help",
            "description": "Rely only on the game: no guides, wikis, solution videos, or external maps."
          }
        ]
      },
      "de": {
        "name": "Vertraute Empfehlung",
        "title": "Öffne dieses Spiel und starte seine erste Aktivität",
        "objective": "Denk an die deutlichste Spielempfehlung, die dir ein Freund gegeben hat. Öffne dieses Spiel und starte seine erste Aktivität. Erreiche den ersten Speicherpunkt, Kontrollpunkt oder Ergebnisbildschirm.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Übernimm ihren Stil",
            "description": "Kopiere eine sichtbare Route, Bauweise, Rhythmik oder Technik, bevor du sie selbst anpasst."
          },
          {
            "scope": "gameplay",
            "title": "Keine externe Hilfe",
            "description": "Verlasse dich nur auf das Spiel: keine Guides, Wikis, Lösungsvideos oder externen Karten."
          }
        ]
      }
    }
  },
  {
    "moodId": "connect",
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "Open Cooperation",
        "title": "Fill the missing role in one public co-op mission",
        "objective": "Open a co-op game with public matchmaking. Join strangers and choose the team role they still need. Finish one mission.",
        "tips": [
          {
            "scope": "game-selection",
            "title": "Co-op Pick",
            "description": "Choose a co-op game with one mission or room you can finish together."
          },
          {
            "scope": "gameplay",
            "title": "No Microphone Needed",
            "description": "Keep the microphone off and communicate through pings, movement, emotes, or short text."
          }
        ]
      },
      "de": {
        "name": "Offene Kooperation",
        "title": "Übernimm in einer öffentlichen Koop-Mission die fehlende Rolle",
        "objective": "Öffne ein Koop-Spiel mit öffentlichem Matchmaking. Tritt Fremden bei und übernimm die Rolle, die dem Team noch fehlt. Beende eine Mission.",
        "tips": [
          {
            "scope": "game-selection",
            "title": "Koop-Spiel wählen",
            "description": "Nehmt ein Koop-Spiel mit einer gemeinsam abschließbaren Mission oder Kammer."
          },
          {
            "scope": "gameplay",
            "title": "Kein Mikrofon nötig",
            "description": "Lass das Mikrofon aus und kommuniziere mit Pings, Bewegung, Emotes oder kurzem Text."
          }
        ]
      }
    }
  },
  {
    "moodId": "connect",
    "minimumDurationMinutes": 10,
    "suggestedDurationMinutes": 20,
    "rewardPoints": 250,
    "translations": {
      "en": {
        "name": "Shared World",
        "title": "Contribute to that exact task",
        "objective": "Enter a persistent shared world and find one public task already underway. Contribute to that exact task. Stay until its reward appears.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Help First",
            "description": "Assist, rescue, or share with someone before pursuing your own result."
          },
          {
            "scope": "gameplay",
            "title": "Take One Detour",
            "description": "Take one optional turn beside the main route, then return to the quest."
          }
        ]
      },
      "de": {
        "name": "Gemeinsame Welt",
        "title": "Trage genau zu dieser Aufgabe bei",
        "objective": "Betritt eine beständige geteilte Welt und finde eine laufende öffentliche Aufgabe. Trage genau zu dieser Aufgabe bei. Bleib bis zu ihrer Belohnung.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Hilf zuerst",
            "description": "Hilf, rette oder teile mit jemandem, bevor du dein eigenes Ergebnis verfolgst."
          },
          {
            "scope": "gameplay",
            "title": "Nimm einen Umweg",
            "description": "Nimm eine optionale Abzweigung neben dem Hauptweg und kehre danach zur Quest zurück."
          }
        ]
      }
    }
  },
  {
    "moodId": "connect",
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "Their Choice",
        "title": "Play the activity they would recognize immediately",
        "objective": "Think of one person and the game you associate with them most. Play the activity they would recognize immediately. Reach the next save, checkpoint, or result screen.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "First Instinct",
            "description": "Take the first sincere choice that feels right without comparing every alternative."
          },
          {
            "scope": "gameplay",
            "title": "Borrow Their Style",
            "description": "Copy one visible route, build, rhythm, or technique before adapting it yourself."
          }
        ]
      },
      "de": {
        "name": "Wahl der anderen Person",
        "title": "Spiele die Aktivität, die sie sofort erkennen würde",
        "objective": "Denk an eine Person und das Spiel, das du am stärksten mit ihr verbindest. Spiele die Aktivität, die sie sofort erkennen würde. Erreiche den nächsten Speicherpunkt, Kontrollpunkt oder Ergebnisbildschirm.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Erster Impuls",
            "description": "Nimm die erste ehrliche Wahl, die sich richtig anfühlt, ohne alle Alternativen zu vergleichen."
          },
          {
            "scope": "gameplay",
            "title": "Übernimm ihren Stil",
            "description": "Kopiere eine sichtbare Route, Bauweise, Rhythmik oder Technik, bevor du sie selbst anpasst."
          }
        ]
      }
    }
  },
  {
    "moodId": "connect",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 180,
    "translations": {
      "en": {
        "name": "Invisible Rival",
        "title": "Chase one player ghost three times",
        "objective": "Choose one recorded ghost from another player. Chase the player ghost three times and study where it gains time. Finish all attempts.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Minimal HUD",
            "description": "Hide optional UI, but keep the quest's required goal and finish indicators visible."
          },
          {
            "scope": "gameplay",
            "title": "Let It Stand",
            "description": "Accept the first honest result, even when reloading or rerolling could improve it."
          }
        ]
      },
      "de": {
        "name": "Unsichtbarer Rivale",
        "title": "Jage einen Spielergeist dreimal",
        "objective": "Wähle einen aufgezeichneten Ghost eines anderen Spielers. Jage den Spielergeist dreimal und beobachte, wo er Zeit gewinnt. Beende alle Versuche.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Minimales HUD",
            "description": "Blende optionale Anzeigen aus, aber behalte Ziel und Abschluss der Quest sichtbar."
          },
          {
            "scope": "gameplay",
            "title": "Lass es gelten",
            "description": "Akzeptiere das erste ehrliche Ergebnis, auch wenn Neuladen oder Neuwürfeln es verbessern könnte."
          }
        ]
      }
    }
  },
  {
    "moodId": "connect",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 180,
    "translations": {
      "en": {
        "name": "Open Tournament",
        "title": "Accept the first match it assigns you",
        "objective": "Enter one open tournament that is available now. Accept the first match it assigns you. Finish one tournament result.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keep Your Setup",
            "description": "Keep the current character, loadout, deck, or vehicle for the entire quest."
          },
          {
            "scope": "gameplay",
            "title": "Minimal HUD",
            "description": "Hide optional UI, but keep the quest's required goal and finish indicators visible."
          }
        ]
      },
      "de": {
        "name": "Offenes Turnier",
        "title": "Akzeptiere das erste Match, das dir zugewiesen wird",
        "objective": "Tritt einem offenen Turnier bei, das gerade verfügbar ist. Akzeptiere das erste Match, das dir zugewiesen wird. Beende ein Turnierergebnis.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Behalte dein Setup",
            "description": "Behalte die aktuelle Figur, Ausrüstung, das Deck oder Fahrzeug während der ganzen Quest."
          },
          {
            "scope": "gameplay",
            "title": "Minimales HUD",
            "description": "Blende optionale Anzeigen aus, aber behalte Ziel und Abschluss der Quest sichtbar."
          }
        ]
      }
    }
  },
  {
    "moodId": "connect",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Made by Players",
        "title": "Play the community level without checking ratings first",
        "objective": "Open a game with community levels and choose one recent creation. Play the community level without checking ratings first. Finish the level.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "No Outside Help",
            "description": "Rely only on the game: no guides, wikis, solution videos, or external maps."
          },
          {
            "scope": "gameplay",
            "title": "Bring Back One Image",
            "description": "Capture one screenshot that clearly shows the finished result or final stopping point."
          }
        ]
      },
      "de": {
        "name": "Von Spielern gebaut",
        "title": "Spiele das Community-Level, ohne vorher Bewertungen anzusehen",
        "objective": "Öffne ein Spiel mit Community-Leveln und wähle eine neue Kreation. Spiele das Community-Level, ohne vorher Bewertungen anzusehen. Beende das Level.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keine externe Hilfe",
            "description": "Verlasse dich nur auf das Spiel: keine Guides, Wikis, Lösungsvideos oder externen Karten."
          },
          {
            "scope": "gameplay",
            "title": "Bring ein Bild mit",
            "description": "Mache einen Screenshot, der das fertige Ergebnis oder den endgültigen Haltepunkt klar zeigt."
          }
        ]
      }
    }
  },
  {
    "moodId": "connect",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Unseen Help",
        "title": "Leave one clear piece of help on their path",
        "objective": "Enter a game where your actions can persist for later players. Leave one clear piece of help on their path. Finish placing it.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Bring Back One Image",
            "description": "Capture one screenshot that clearly shows the finished result or final stopping point."
          },
          {
            "scope": "gameplay",
            "title": "Stop Cleanly",
            "description": "End at a safe save point or result screen without starting something new."
          }
        ]
      },
      "de": {
        "name": "Unsichtbare Hilfe",
        "title": "Hinterlasse eine klare Hilfe auf ihrem Weg",
        "objective": "Betritt ein Spiel, in dem deine Handlungen für spätere Spieler bestehen bleiben. Hinterlasse eine klare Hilfe auf ihrem Weg. Platziere sie vollständig.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Bring ein Bild mit",
            "description": "Mache einen Screenshot, der das fertige Ergebnis oder den endgültigen Haltepunkt klar zeigt."
          },
          {
            "scope": "gameplay",
            "title": "Sauber aufhören",
            "description": "Höre an einem sicheren Speicherpunkt oder Ergebnisbildschirm auf, ohne etwas Neues zu starten."
          }
        ]
      }
    }
  },
  {
    "moodId": "connect",
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "Shared Save",
        "title": "Add one useful thing while preserving everything they made",
        "objective": "Open a save another person helped shape. Add one useful thing while preserving everything they made. Save the addition.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Before and After",
            "description": "Capture the room once before changing it and once after completion."
          },
          {
            "scope": "gameplay",
            "title": "Match the Base",
            "description": "Reuse one material, color, or shape already visible elsewhere in the base."
          }
        ]
      },
      "de": {
        "name": "Gemeinsamer Spielstand",
        "title": "Ergänze etwas Nützliches und bewahre ihre Arbeit",
        "objective": "Öffne einen Spielstand, den eine andere Person mitgestaltet hat. Ergänze etwas Nützliches und bewahre ihre Arbeit. Speichere die Ergänzung.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Vorher und nachher",
            "description": "Fotografiere den Raum einmal vor der Veränderung und einmal nach dem Abschluss."
          },
          {
            "scope": "gameplay",
            "title": "Passend zur Basis",
            "description": "Übernimm ein Material, eine Farbe oder Form aus einem anderen Bereich der Basis."
          }
        ]
      }
    }
  },
  {
    "moodId": "connect",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Seen Before",
        "title": "Play the exact kind of scene you remember",
        "objective": "Choose a game you first discovered by watching someone else. Play the exact kind of scene you remember. Complete that level, round, task, or scene and stop at its result screen.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Borrow Their Style",
            "description": "Copy one visible route, build, rhythm, or technique before adapting it yourself."
          },
          {
            "scope": "gameplay",
            "title": "Keep Your Setup",
            "description": "Keep the current character, loadout, deck, or vehicle for the entire quest."
          }
        ]
      },
      "de": {
        "name": "Zuerst zugeschaut",
        "title": "Spiele genau die Art von Szene, an die du dich erinnerst",
        "objective": "Wähle ein Spiel, das du zuerst bei jemand anderem gesehen hast. Spiele genau die Art von Szene, an die du dich erinnerst. Beende dieses Level, diese Runde, Aufgabe oder Szene und stoppe am Ergebnisbildschirm.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Übernimm ihren Stil",
            "description": "Kopiere eine sichtbare Route, Bauweise, Rhythmik oder Technik, bevor du sie selbst anpasst."
          },
          {
            "scope": "gameplay",
            "title": "Behalte dein Setup",
            "description": "Behalte die aktuelle Figur, Ausrüstung, das Deck oder Fahrzeug während der ganzen Quest."
          }
        ]
      }
    }
  },
  {
    "moodId": "connect",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Creator Signature",
        "title": "Continue until you recognize one of their signatures",
        "objective": "Open an unplayed game by a familiar creator, finish its first chapter or level, and name one recurring design detail you noticed there.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Borrow Their Style",
            "description": "Copy one visible route, build, rhythm, or technique before adapting it yourself."
          },
          {
            "scope": "gameplay",
            "title": "No Outside Help",
            "description": "Rely only on the game: no guides, wikis, solution videos, or external maps."
          }
        ]
      },
      "de": {
        "name": "Kreative Handschrift",
        "title": "Spiele, bis du eine typische Handschrift erkennst",
        "objective": "Öffne ein ungespieltes Spiel eines vertrauten Schöpfers, beende das erste Kapitel oder Level und benenne ein wiederkehrendes Designdetail daraus.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Übernimm ihren Stil",
            "description": "Kopiere eine sichtbare Route, Bauweise, Rhythmik oder Technik, bevor du sie selbst anpasst."
          },
          {
            "scope": "gameplay",
            "title": "Keine externe Hilfe",
            "description": "Verlasse dich nur auf das Spiel: keine Guides, Wikis, Lösungsvideos oder externen Karten."
          }
        ]
      }
    }
  },
  {
    "moodId": "connect",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 180,
    "translations": {
      "en": {
        "name": "Showpiece Game",
        "title": "Play the one section that best explains your choice",
        "objective": "Choose the first game you would show a curious visitor. Play the one section that best explains your choice. Finish the section.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Bring Back One Image",
            "description": "Capture one screenshot that clearly shows the finished result or final stopping point."
          },
          {
            "scope": "gameplay",
            "title": "Keep the First Take",
            "description": "Keep the first complete version and resist adding a second polish pass."
          }
        ]
      },
      "de": {
        "name": "Vorzeigespiel",
        "title": "Spiele den Abschnitt, der deine Wahl am besten erklärt",
        "objective": "Wähle das erste Spiel, das du einem neugierigen Besucher zeigen würdest. Spiele den Abschnitt, der deine Wahl am besten erklärt. Beende den Abschnitt.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Bring ein Bild mit",
            "description": "Mache einen Screenshot, der das fertige Ergebnis oder den endgültigen Haltepunkt klar zeigt."
          },
          {
            "scope": "gameplay",
            "title": "Behalte den ersten Versuch",
            "description": "Behalte die erste vollständige Version und widerstehe einer zweiten Überarbeitungsrunde."
          }
        ]
      }
    }
  },
  {
    "moodId": "connect",
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "Community Remix",
        "title": "Start the activity where its change is most obvious",
        "objective": "Open a familiar game with one community-made modification installed. Start the activity where its change is most obvious. Reach the next save, checkpoint, or result screen.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Let It Stand",
            "description": "Accept the first honest result, even when reloading or rerolling could improve it."
          },
          {
            "scope": "gameplay",
            "title": "No Outside Help",
            "description": "Rely only on the game: no guides, wikis, solution videos, or external maps."
          }
        ]
      },
      "de": {
        "name": "Community-Remix",
        "title": "Starte die Aktivität, in der ihre Änderung am deutlichsten ist",
        "objective": "Öffne ein vertrautes Spiel mit einer installierten Community-Mod. Starte die Aktivität, in der ihre Änderung am deutlichsten ist. Erreiche den nächsten Speicherpunkt, Kontrollpunkt oder Ergebnisbildschirm.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Lass es gelten",
            "description": "Akzeptiere das erste ehrliche Ergebnis, auch wenn Neuladen oder Neuwürfeln es verbessern könnte."
          },
          {
            "scope": "gameplay",
            "title": "Keine externe Hilfe",
            "description": "Verlasse dich nur auf das Spiel: keine Guides, Wikis, Lösungsvideos oder externen Karten."
          }
        ]
      }
    }
  },
  {
    "moodId": "connect",
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "Same Beginning",
        "title": "Start the shared seed unchanged and adapt to its world",
        "objective": "Open a game with a shared seed from another player, start that seed unchanged, and reach its first checkpoint, completed objective, or successful save.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keep Your Setup",
            "description": "Keep the current character, loadout, deck, or vehicle for the entire quest."
          },
          {
            "scope": "gameplay",
            "title": "Let It Stand",
            "description": "Accept the first honest result, even when reloading or rerolling could improve it."
          }
        ]
      },
      "de": {
        "name": "Gleicher Anfang",
        "title": "Starte den geteilten Seed unverändert und passe dich seiner Welt an",
        "objective": "Öffne ein Spiel mit einem geteilten Seed, starte ihn unverändert und erreiche seinen ersten Kontrollpunkt, sein erstes erfülltes Ziel oder seine erste erfolgreiche Speicherung.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Behalte dein Setup",
            "description": "Behalte die aktuelle Figur, Ausrüstung, das Deck oder Fahrzeug während der ganzen Quest."
          },
          {
            "scope": "gameplay",
            "title": "Lass es gelten",
            "description": "Akzeptiere das erste ehrliche Ergebnis, auch wenn Neuladen oder Neuwürfeln es verbessern könnte."
          }
        ]
      }
    }
  },
  {
    "moodId": "connect",
    "minimumDurationMinutes": 10,
    "suggestedDurationMinutes": 20,
    "rewardPoints": 250,
    "translations": {
      "en": {
        "name": "Common Language",
        "title": "Play the game that defines one fandom",
        "objective": "Open the game mode people discussed most when it launched. Play the fandom's defining game to understand the shared reference. Finish one full result.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "No Outside Help",
            "description": "Rely only on the game: no guides, wikis, solution videos, or external maps."
          },
          {
            "scope": "gameplay",
            "title": "Stay on One Goal",
            "description": "Ignore side missions and map markers so the quest stays on one clear goal."
          }
        ]
      },
      "de": {
        "name": "Gemeinsamer Modus",
        "title": "Spiele das prägende Spiel eines Fandoms",
        "objective": "Öffne den Spielmodus, über den beim Erscheinen alle gesprochen haben. Spiele das prägende Spiel des Fandoms, um die gemeinsame Referenz zu verstehen. Beende eine ganze Runde, ein Match, eine Aufgabe oder einen Test und behalte das Ergebnis.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keine externe Hilfe",
            "description": "Verlasse dich nur auf das Spiel: keine Guides, Wikis, Lösungsvideos oder externen Karten."
          },
          {
            "scope": "gameplay",
            "title": "Bleib bei einem Ziel",
            "description": "Ignoriere Nebenmissionen und Kartenmarker, damit die Quest bei einem klaren Ziel bleibt."
          }
        ]
      }
    }
  },
  {
    "moodId": "connect",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 180,
    "translations": {
      "en": {
        "name": "Familiar Score",
        "title": "Make one honest attempt to answer that score",
        "objective": "Open a leaderboard that still shows a familiar name. Make one honest attempt to answer that score. Submit a valid result.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keep Your Setup",
            "description": "Keep the current character, loadout, deck, or vehicle for the entire quest."
          },
          {
            "scope": "gameplay",
            "title": "Let It Stand",
            "description": "Accept the first honest result, even when reloading or rerolling could improve it."
          }
        ]
      },
      "de": {
        "name": "Bekannte Punktzahl",
        "title": "Unternimm einen ehrlichen Versuch, auf diesen Wert zu antworten",
        "objective": "Öffne eine Rangliste, in der noch ein vertrauter Name steht. Unternimm einen ehrlichen Versuch, auf diesen Wert zu antworten. Reiche ein gültiges Ergebnis ein.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Behalte dein Setup",
            "description": "Behalte die aktuelle Figur, Ausrüstung, das Deck oder Fahrzeug während der ganzen Quest."
          },
          {
            "scope": "gameplay",
            "title": "Lass es gelten",
            "description": "Akzeptiere das erste ehrliche Ergebnis, auch wenn Neuladen oder Neuwürfeln es verbessern könnte."
          }
        ]
      }
    }
  },
  {
    "moodId": "connect",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "rewardPoints": 150,
    "translations": {
      "en": {
        "name": "Async Turn",
        "title": "Make that move now without overanalyzing it",
        "objective": "Open an asynchronous game with a turn waiting for you. Make that move now without overanalyzing it. Send the turn back.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Scan the Board",
            "description": "Before every turn, scan the entire board once before choosing."
          },
          {
            "scope": "gameplay",
            "title": "Let It Stand",
            "description": "Accept the first honest result, even when reloading or rerolling could improve it."
          }
        ]
      },
      "de": {
        "name": "Asynchroner Zug",
        "title": "Führe ihn jetzt aus, ohne ihn zu zerdenken",
        "objective": "Öffne ein asynchrones Spiel, in dem ein Zug auf dich wartet. Führe ihn jetzt aus, ohne ihn zu zerdenken. Schicke den Zug zurück.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Überblick zuerst",
            "description": "Überblicke vor jedem Zug einmal das ganze Spielfeld, bevor du wählst."
          },
          {
            "scope": "gameplay",
            "title": "Lass es gelten",
            "description": "Akzeptiere das erste ehrliche Ergebnis, auch wenn Neuladen oder Neuwürfeln es verbessern könnte."
          }
        ]
      }
    }
  },
  {
    "moodId": "connect",
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "Shared Build",
        "title": "Add a visible piece that directly supports its purpose",
        "objective": "Find one active community build in a shared game. Add a visible piece that directly supports its purpose. Finish the contribution.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Local Materials",
            "description": "Build only with materials already available in the current place or nearby storage."
          },
          {
            "scope": "gameplay",
            "title": "Leave a Gift",
            "description": "Leave one useful improvement, route, tool, or resource for another player."
          }
        ]
      },
      "de": {
        "name": "Gemeinsames Bauwerk",
        "title": "Ergänze ein sichtbares Teil, das seinen Zweck direkt unterstützt",
        "objective": "Finde ein aktives Community-Bauprojekt in einem geteilten Spiel. Ergänze ein sichtbares Teil, das seinen Zweck direkt unterstützt. Stelle den Beitrag fertig.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Lokale Materialien",
            "description": "Baue nur mit Materialien, die bereits vor Ort oder in einem nahen Lager sind."
          },
          {
            "scope": "gameplay",
            "title": "Hinterlasse ein Geschenk",
            "description": "Hinterlasse eine nützliche Verbesserung, Route, ein Werkzeug oder eine Ressource für andere."
          }
        ]
      }
    }
  },
  {
    "moodId": "connect",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Replay Lesson",
        "title": "Copy one visible decision from it in your own attempt",
        "objective": "Choose one full replay from a stronger player. Copy one visible decision from it in your own attempt. Use that decision successfully.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "First Instinct",
            "description": "Take the first sincere choice that feels right without comparing every alternative."
          },
          {
            "scope": "gameplay",
            "title": "Let It Stand",
            "description": "Accept the first honest result, even when reloading or rerolling could improve it."
          }
        ]
      },
      "de": {
        "name": "Lektion aus der Wiederholung",
        "title": "Übernimm eine sichtbare Entscheidung daraus in deinen eigenen Versuch",
        "objective": "Wähle ein vollständiges Replay eines stärkeren Spielers. Übernimm eine sichtbare Entscheidung daraus in deinen eigenen Versuch. Nutze diese Entscheidung erfolgreich.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Erster Impuls",
            "description": "Nimm die erste ehrliche Wahl, die sich richtig anfühlt, ohne alle Alternativen zu vergleichen."
          },
          {
            "scope": "gameplay",
            "title": "Lass es gelten",
            "description": "Akzeptiere das erste ehrliche Ergebnis, auch wenn Neuladen oder Neuwürfeln es verbessern könnte."
          }
        ]
      }
    }
  },
  {
    "moodId": "connect",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Recommendation Ready",
        "title": "Play the section you would use to recommend it",
        "objective": "Think of one person and choose a game that fits their taste. Play the section you would use to recommend it. Finish it and name one reason.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Bring Back One Image",
            "description": "Capture one screenshot that clearly shows the finished result or final stopping point."
          },
          {
            "scope": "gameplay",
            "title": "Stop Cleanly",
            "description": "End at a safe save point or result screen without starting something new."
          }
        ]
      },
      "de": {
        "name": "Empfehlung bereit",
        "title": "Spiele den Abschnitt, mit dem du es empfehlen würdest",
        "objective": "Denk an eine Person und wähle ein Spiel, das zu ihrem Geschmack passt. Spiele den Abschnitt, mit dem du es empfehlen würdest. Beende ihn und nenne einen Grund.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Bring ein Bild mit",
            "description": "Mache einen Screenshot, der das fertige Ergebnis oder den endgültigen Haltepunkt klar zeigt."
          },
          {
            "scope": "gameplay",
            "title": "Sauber aufhören",
            "description": "Höre an einem sicheren Speicherpunkt oder Ergebnisbildschirm auf, ohne etwas Neues zu starten."
          }
        ]
      }
    }
  },
  {
    "moodId": "connect",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Quiet Lobby",
        "title": "Communicate only through the tools the game provides",
        "objective": "Join one multiplayer match with your microphone off. Communicate only through the tools the game provides. Finish the team result.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keep Your Role",
            "description": "Choose one team responsibility and keep serving it through the complete result."
          },
          {
            "scope": "gameplay",
            "title": "Help First",
            "description": "Assist, rescue, or share with someone before pursuing your own result."
          }
        ]
      },
      "de": {
        "name": "Stille Lobby",
        "title": "Kommuniziere nur mit den Werkzeugen des Spiels",
        "objective": "Tritt einem Multiplayer-Match mit ausgeschaltetem Mikrofon bei. Kommuniziere nur mit den Werkzeugen des Spiels. Beende das Teamergebnis.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Bleib in deiner Rolle",
            "description": "Wähle eine Teamaufgabe und erfülle sie bis zum vollständigen Ergebnis."
          },
          {
            "scope": "gameplay",
            "title": "Hilf zuerst",
            "description": "Hilf, rette oder teile mit jemandem, bevor du dein eigenes Ergebnis verfolgst."
          }
        ]
      }
    }
  },
  {
    "moodId": "connect",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Borrowed Style",
        "title": "Copy that approach for a complete activity before changing it",
        "objective": "Think of one player's style you still remember. Copy that approach for a complete activity before changing it. Reach the next save, checkpoint, or result screen.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Let It Stand",
            "description": "Accept the first honest result, even when reloading or rerolling could improve it."
          },
          {
            "scope": "gameplay",
            "title": "Keep Your Setup",
            "description": "Keep the current character, loadout, deck, or vehicle for the entire quest."
          }
        ]
      },
      "de": {
        "name": "Übernommener Stil",
        "title": "Kopiere diesen Ansatz für eine ganze Aktivität, bevor du ihn änderst",
        "objective": "Denk an den Stil eines Spielers, an den du dich noch erinnerst. Kopiere diesen Ansatz für eine ganze Aktivität, bevor du ihn änderst. Erreiche den nächsten Speicherpunkt, Kontrollpunkt oder Ergebnisbildschirm.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Lass es gelten",
            "description": "Akzeptiere das erste ehrliche Ergebnis, auch wenn Neuladen oder Neuwürfeln es verbessern könnte."
          },
          {
            "scope": "gameplay",
            "title": "Behalte dein Setup",
            "description": "Behalte die aktuelle Figur, Ausrüstung, das Deck oder Fahrzeug während der ganzen Quest."
          }
        ]
      }
    }
  },
  {
    "moodId": "connect",
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "Borrowed Wisdom",
        "title": "Use the community tactic exactly as described in one encounter",
        "objective": "Choose one tactic discovered by the game's community. Use the community tactic exactly as described in one encounter. Finish the encounter.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "No Outside Help",
            "description": "Rely only on the game: no guides, wikis, solution videos, or external maps."
          },
          {
            "scope": "gameplay",
            "title": "Three Attempts",
            "description": "Give the same challenge three complete attempts without changing the target between them."
          }
        ]
      },
      "de": {
        "name": "Geliehene Weisheit",
        "title": "Nutze die Community-Taktik genau wie beschrieben in einer Begegnung",
        "objective": "Wähle eine Taktik, die von der Community des Spiels entdeckt wurde. Nutze die Community-Taktik genau wie beschrieben in einer Begegnung. Beende die Begegnung.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keine externe Hilfe",
            "description": "Verlasse dich nur auf das Spiel: keine Guides, Wikis, Lösungsvideos oder externen Karten."
          },
          {
            "scope": "gameplay",
            "title": "Drei Versuche",
            "description": "Gib derselben Herausforderung drei vollständige Versuche, ohne das Ziel dazwischen zu wechseln."
          }
        ]
      }
    }
  },
  {
    "moodId": "connect",
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "Shared Fandom",
        "title": "Play the scene every fan would immediately recognize",
        "objective": "Open a game tied to a fandom you share with others. Play the scene every fan would immediately recognize. Finish that scene.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Stay on One Goal",
            "description": "Ignore side missions and map markers so the quest stays on one clear goal."
          },
          {
            "scope": "gameplay",
            "title": "No Outside Help",
            "description": "Rely only on the game: no guides, wikis, solution videos, or external maps."
          }
        ]
      },
      "de": {
        "name": "Gemeinsames Fandom",
        "title": "Spiele die Szene, die jeder Fan sofort erkennen würde",
        "objective": "Öffne ein Spiel aus einem Fandom, das du mit anderen teilst. Spiele die Szene, die jeder Fan sofort erkennen würde. Beende diese Szene.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Bleib bei einem Ziel",
            "description": "Ignoriere Nebenmissionen und Kartenmarker, damit die Quest bei einem klaren Ziel bleibt."
          },
          {
            "scope": "gameplay",
            "title": "Keine externe Hilfe",
            "description": "Verlasse dich nur auf das Spiel: keine Guides, Wikis, Lösungsvideos oder externen Karten."
          }
        ]
      }
    }
  },
  {
    "moodId": "connect",
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "Small Kindness",
        "title": "Help one stranger first in a multiplayer game",
        "objective": "Join a multiplayer game where strangers can help each other. Find one player in trouble and assist them first. Complete the handoff.",
        "tips": [
          {
            "scope": "game-selection",
            "title": "Public Multiplayer",
            "description": "Choose a multiplayer game where strangers can interact during one result."
          },
          {
            "scope": "gameplay",
            "title": "Stay Together",
            "description": "Remain within sight, communication, or support range of another player throughout the activity."
          }
        ]
      },
      "de": {
        "name": "Kleine Hilfe",
        "title": "Hilf in einem Mehrspielerspiel zuerst einem Fremden",
        "objective": "Tritt einem Multiplayer-Spiel bei, in dem Fremde einander helfen können. Finde einen Spieler in Schwierigkeiten und hilf zuerst. Schließe die Hilfe ab.",
        "tips": [
          {
            "scope": "game-selection",
            "title": "Öffentlicher Mehrspieler",
            "description": "Nimm ein Mehrspielerspiel mit Kontakt zu Fremden in einer Runde."
          },
          {
            "scope": "gameplay",
            "title": "Bleibt zusammen",
            "description": "Bleibe während der Aktivität in Sicht-, Kommunikations- oder Unterstützungsweite eines Mitspielers."
          }
        ]
      }
    }
  },
  {
    "moodId": "connect",
    "minimumDurationMinutes": 10,
    "suggestedDurationMinutes": 20,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "Voice Companion",
        "title": "Start one low-pressure activity alongside a familiar voice recording",
        "objective": "Choose a calm game that leaves room for listening. Start one low-pressure activity alongside a familiar voice recording. Reach the next save, checkpoint, or result screen.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Move Without Rushing",
            "description": "Avoid sprinting, boosting, or skipping ahead; let the journey set the pace."
          },
          {
            "scope": "gameplay",
            "title": "World Audio",
            "description": "Lower the music enough to notice environmental sounds, voices, machinery, and distant activity."
          }
        ]
      },
      "de": {
        "name": "Begleitende Stimme",
        "title": "Starte eine entspannte Aktivität neben einer vertrauten Sprachaufnahme",
        "objective": "Wähle ein ruhiges Spiel, das Platz zum Zuhören lässt. Starte eine entspannte Aktivität neben einer vertrauten Sprachaufnahme. Erreiche den nächsten Speicherpunkt, Kontrollpunkt oder Ergebnisbildschirm.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Ohne Eile",
            "description": "Vermeide Sprinten, Boosts und Abkürzungen; lass den Weg das Tempo bestimmen."
          },
          {
            "scope": "gameplay",
            "title": "Geräusche der Welt",
            "description": "Drehe die Musik so weit herunter, dass du Umgebung, Stimmen und entfernte Aktivität wahrnimmst."
          }
        ]
      }
    }
  },
  {
    "moodId": "connect",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Shared Memory",
        "title": "Recreate one visible detail from that memory",
        "objective": "Return to a place in a game you shared with someone. Recreate one visible detail from that memory. Finish the detail.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keep the First Take",
            "description": "Keep the first complete version and resist adding a second polish pass."
          },
          {
            "scope": "gameplay",
            "title": "No Undo",
            "description": "Keep every placed, painted, or customized choice and adapt around imperfect decisions."
          }
        ]
      },
      "de": {
        "name": "Gemeinsame Erinnerung",
        "title": "Stelle ein sichtbares Detail dieser Erinnerung nach",
        "objective": "Kehre zu einem Spielort zurück, den du mit jemandem geteilt hast. Stelle ein sichtbares Detail dieser Erinnerung nach. Stelle das Detail fertig.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Behalte den ersten Versuch",
            "description": "Behalte die erste vollständige Version und widerstehe einer zweiten Überarbeitungsrunde."
          },
          {
            "scope": "gameplay",
            "title": "Kein Rückgängig",
            "description": "Behalte jede platzierte, gemalte oder angepasste Entscheidung und arbeite um Fehler herum."
          }
        ]
      }
    }
  },
  {
    "moodId": "connect",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Shareable Moment",
        "title": "Play until something worth sending happens",
        "objective": "Think of one viewer, play one complete round or scene for them, and capture one clip or screenshot before its result or scene break.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Let It Stand",
            "description": "Accept the first honest result, even when reloading or rerolling could improve it."
          },
          {
            "scope": "gameplay",
            "title": "Keep the First Take",
            "description": "Keep the first complete version and resist adding a second polish pass."
          }
        ]
      },
      "de": {
        "name": "Teilbarer Moment",
        "title": "Spiele, bis etwas Teilenswertes passiert",
        "objective": "Denk an eine Person, spiele für sie eine vollständige Runde oder Szene und nimm vor dem Ergebnis oder Szenenwechsel einen Clip oder Screenshot auf.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Lass es gelten",
            "description": "Akzeptiere das erste ehrliche Ergebnis, auch wenn Neuladen oder Neuwürfeln es verbessern könnte."
          },
          {
            "scope": "gameplay",
            "title": "Behalte den ersten Versuch",
            "description": "Behalte die erste vollständige Version und widerstehe einer zweiten Überarbeitungsrunde."
          }
        ]
      }
    }
  },
  {
    "moodId": "connect",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 210,
    "translations": {
      "en": {
        "name": "Controller Handoff",
        "title": "Switch players after each failure and continue from there",
        "objective": "Choose one short section suited to passing a controller. Switch players after each failure and continue from there. Clear the section together.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Stay Together",
            "description": "Remain within sight, communication, or support range of another player throughout the activity."
          },
          {
            "scope": "gameplay",
            "title": "Let It Stand",
            "description": "Accept the first honest result, even when reloading or rerolling could improve it."
          }
        ]
      },
      "de": {
        "name": "Geteilter Controller",
        "title": "Wechselt nach jedem Scheitern und spielt weiter",
        "objective": "Wähle eine kurze Passage, die sich zum Weiterreichen des Controllers eignet. Wechselt nach jedem Scheitern und spielt weiter. Schafft den Abschnitt gemeinsam.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Bleibt zusammen",
            "description": "Bleibe während der Aktivität in Sicht-, Kommunikations- oder Unterstützungsweite eines Mitspielers."
          },
          {
            "scope": "gameplay",
            "title": "Lass es gelten",
            "description": "Akzeptiere das erste ehrliche Ergebnis, auch wenn Neuladen oder Neuwürfeln es verbessern könnte."
          }
        ]
      }
    }
  },
  {
    "moodId": "connect",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Party Lobby",
        "title": "Accept the first ruleset and stay with the same group",
        "objective": "Join one available party-game lobby. Accept the first ruleset and stay with the same group. Finish one full set.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "No Microphone Needed",
            "description": "Keep the microphone off and communicate through pings, movement, emotes, or short text."
          },
          {
            "scope": "gameplay",
            "title": "First Instinct",
            "description": "Take the first sincere choice that feels right without comparing every alternative."
          }
        ]
      },
      "de": {
        "name": "Party-Lobby",
        "title": "Akzeptiere das erste Regelset und bleib bei derselben Gruppe",
        "objective": "Tritt einer verfügbaren Partyspiel-Lobby bei. Akzeptiere das erste Regelset und bleib bei derselben Gruppe. Beende ein vollständiges Set.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Kein Mikrofon nötig",
            "description": "Lass das Mikrofon aus und kommuniziere mit Pings, Bewegung, Emotes oder kurzem Text."
          },
          {
            "scope": "gameplay",
            "title": "Erster Impuls",
            "description": "Nimm die erste ehrliche Wahl, die sich richtig anfühlt, ohne alle Alternativen zu vergleichen."
          }
        ]
      }
    }
  },
  {
    "moodId": "connect",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 210,
    "translations": {
      "en": {
        "name": "Public Event",
        "title": "Arrive before it begins and stay involved",
        "objective": "Enter a shared world and join the next visible public event. Arrive before it begins and stay involved. Reach the reward screen.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Help First",
            "description": "Assist, rescue, or share with someone before pursuing your own result."
          },
          {
            "scope": "gameplay",
            "title": "Keep Your Role",
            "description": "Choose one team responsibility and keep serving it through the complete result."
          }
        ]
      },
      "de": {
        "name": "Öffentliches Event",
        "title": "Komm vor dem Start an und bleib beteiligt",
        "objective": "Betritt eine geteilte Welt und nimm am nächsten sichtbaren öffentlichen Event teil. Komm vor dem Start an und bleib beteiligt. Erreiche den Belohnungsbildschirm.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Hilf zuerst",
            "description": "Hilf, rette oder teile mit jemandem, bevor du dein eigenes Ergebnis verfolgst."
          },
          {
            "scope": "gameplay",
            "title": "Bleib in deiner Rolle",
            "description": "Wähle eine Teamaufgabe und erfülle sie bis zum vollständigen Ergebnis."
          }
        ]
      }
    }
  },
  {
    "moodId": "connect",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 190,
    "translations": {
      "en": {
        "name": "Useful Gift",
        "title": "Give it to another player without asking for payment",
        "objective": "Find one useful item you can spare in a social game. Give it to another player without asking for payment. Complete the gift.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "No Microphone Needed",
            "description": "Keep the microphone off and communicate through pings, movement, emotes, or short text."
          },
          {
            "scope": "gameplay",
            "title": "Bring Back One Image",
            "description": "Capture one screenshot that clearly shows the finished result or final stopping point."
          }
        ]
      },
      "de": {
        "name": "Nützliches Geschenk",
        "title": "Schenke ihn einem anderen Spieler ohne Gegenleistung",
        "objective": "Finde in einem sozialen Spiel einen nützlichen Gegenstand, den du entbehren kannst. Schenke ihn einem anderen Spieler ohne Gegenleistung. Übergib das Geschenk.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Kein Mikrofon nötig",
            "description": "Lass das Mikrofon aus und kommuniziere mit Pings, Bewegung, Emotes oder kurzem Text."
          },
          {
            "scope": "gameplay",
            "title": "Bring ein Bild mit",
            "description": "Mache einen Screenshot, der das fertige Ergebnis oder den endgültigen Haltepunkt klar zeigt."
          }
        ]
      }
    }
  },
  {
    "moodId": "connect",
    "minimumDurationMinutes": 10,
    "suggestedDurationMinutes": 20,
    "rewardPoints": 230,
    "translations": {
      "en": {
        "name": "Co-op Puzzle",
        "title": "Solve one co-op puzzle room with assigned roles",
        "objective": "Open a co-op puzzle game with one unsolved room. Agree on roles before touching the first mechanism. Solve the room together.",
        "tips": [
          {
            "scope": "game-selection",
            "title": "Separate Puzzles",
            "description": "Choose a puzzle game that shows individual boards or levels."
          },
          {
            "scope": "gameplay",
            "title": "Listen First",
            "description": "Pause for dialogue and world sounds, then let them guide your next action."
          }
        ]
      },
      "de": {
        "name": "Koop-Rätsel",
        "title": "Löst einen Koop-Rätselraum mit verteilten Rollen",
        "objective": "Öffne ein Koop-Rätselspiel mit einem ungelösten Raum. Verteilt die Rollen, bevor ihr den ersten Mechanismus berührt. Löst den Raum gemeinsam.",
        "tips": [
          {
            "scope": "game-selection",
            "title": "Einzelne Rätsel",
            "description": "Nimm ein Rätselspiel mit einzeln sichtbaren Feldern oder Leveln."
          },
          {
            "scope": "gameplay",
            "title": "Hör zuerst zu",
            "description": "Halte für Dialoge und Weltgeräusche inne und lass sie den nächsten Schritt bestimmen."
          }
        ]
      }
    }
  },
  {
    "moodId": "connect",
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "Lowest-Score Support",
        "title": "Support their next attempt directly",
        "objective": "Join a team game with visible scores and identify the lowest-scoring teammate. Support their next attempt directly. Help them complete one successful play.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "No Microphone Needed",
            "description": "Keep the microphone off and communicate through pings, movement, emotes, or short text."
          },
          {
            "scope": "gameplay",
            "title": "Stay Together",
            "description": "Remain within sight, communication, or support range of another player throughout the activity."
          }
        ]
      },
      "de": {
        "name": "Unterstützung fürs Schlusslicht",
        "title": "Unterstütze seinen nächsten Versuch direkt",
        "objective": "Tritt einem Teamspiel mit sichtbaren Punkten bei und finde den Mitspieler mit dem niedrigsten Wert. Unterstütze seinen nächsten Versuch direkt. Hilf ihm zu einer erfolgreichen Aktion.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Kein Mikrofon nötig",
            "description": "Lass das Mikrofon aus und kommuniziere mit Pings, Bewegung, Emotes oder kurzem Text."
          },
          {
            "scope": "gameplay",
            "title": "Bleibt zusammen",
            "description": "Bleibe während der Aktivität in Sicht-, Kommunikations- oder Unterstützungsweite eines Mitspielers."
          }
        ]
      }
    }
  },
  {
    "moodId": "nostalgic",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 180,
    "translations": {
      "en": {
        "name": "Back Then",
        "title": "Play one game you remember from childhood",
        "objective": "Start a game you played often as a kid and choose a level, round, or mode you already know. Finish it once.",
        "tips": [
          {
            "scope": "game-selection",
            "title": "Original Platform",
            "description": "Use the oldest platform where you can still launch the game easily."
          },
          {
            "scope": "gameplay",
            "title": "Like Before",
            "description": "Use the character, difficulty, or setup you remember playing with."
          }
        ]
      },
      "de": {
        "name": "Wie früher",
        "title": "Spiel nochmal ein Spiel aus deiner Kindheit",
        "objective": "Starte ein Spiel, das du als Kind oft gespielt hast, und nimm ein Level, eine Runde oder einen Modus, den du noch kennst. Spiel ihn einmal bis zum Ende.",
        "tips": [
          {
            "scope": "game-selection",
            "title": "Alte Plattform",
            "description": "Nimm die älteste Plattform, auf der du das Spiel leicht starten kannst."
          },
          {
            "scope": "gameplay",
            "title": "Wie damals",
            "description": "Nimm die Figur, Schwierigkeit oder Ausstattung, mit der du früher gespielt hast."
          }
        ]
      }
    }
  },
  {
    "moodId": "nostalgic",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 180,
    "translations": {
      "en": {
        "name": "Menu Music",
        "title": "Stay until the full theme has played",
        "objective": "Open a game whose menu theme you remember, listen until it repeats, then start its first level and reach the next checkpoint.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Listen First",
            "description": "Pause for dialogue and world sounds, then let them guide your next action."
          },
          {
            "scope": "gameplay",
            "title": "Stay on One Goal",
            "description": "Ignore side missions and map markers so the quest stays on one clear goal."
          }
        ]
      },
      "de": {
        "name": "Menümusik",
        "title": "Bleib, bis das ganze Stück gelaufen ist",
        "objective": "Öffne ein Spiel, dessen Menüthema du erinnerst, höre bis zur Wiederholung zu, starte dann das erste Level und erreiche den nächsten Kontrollpunkt.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Hör zuerst zu",
            "description": "Halte für Dialoge und Weltgeräusche inne und lass sie den nächsten Schritt bestimmen."
          },
          {
            "scope": "gameplay",
            "title": "Bleib bei einem Ziel",
            "description": "Ignoriere Nebenmissionen und Kartenmarker, damit die Quest bei einem klaren Ziel bleibt."
          }
        ]
      }
    }
  },
  {
    "moodId": "nostalgic",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Earlier Console",
        "title": "Start its first familiar level",
        "objective": "Choose a game from a console generation you used before your current system. Start its first familiar level. Finish the level.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Use Basic Gear",
            "description": "Leave your strongest or rarest option unused and solve the quest with ordinary gear."
          },
          {
            "scope": "gameplay",
            "title": "Let It Stand",
            "description": "Accept the first honest result, even when reloading or rerolling could improve it."
          }
        ]
      },
      "de": {
        "name": "Frühere Konsole",
        "title": "Starte das erste vertraute Level",
        "objective": "Wähle ein Spiel aus einer Konsolengeneration vor deinem aktuellen System. Starte das erste vertraute Level. Beende das Level.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Nutze einfache Ausrüstung",
            "description": "Lass deine stärkste oder seltenste Option ungenutzt und löse die Quest mit gewöhnlicher Ausrüstung."
          },
          {
            "scope": "gameplay",
            "title": "Lass es gelten",
            "description": "Akzeptiere das erste ehrliche Ergebnis, auch wenn Neuladen oder Neuwürfeln es verbessern könnte."
          }
        ]
      }
    }
  },
  {
    "moodId": "nostalgic",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "Where It Began",
        "title": "Begin from chapter one without skipping the opening",
        "objective": "Return to the first entry in a series you followed for years. Begin from chapter one without skipping the opening. Reach the first major save point.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Stay on One Goal",
            "description": "Ignore side missions and map markers so the quest stays on one clear goal."
          },
          {
            "scope": "gameplay",
            "title": "No Outside Help",
            "description": "Rely only on the game: no guides, wikis, solution videos, or external maps."
          }
        ]
      },
      "de": {
        "name": "Wo alles begann",
        "title": "Beginne mit Kapitel eins und überspringe den Anfang nicht",
        "objective": "Kehre zum ersten Teil einer Reihe zurück, die du jahrelang verfolgt hast. Beginne mit Kapitel eins und überspringe den Anfang nicht. Erreiche den ersten großen Speicherpunkt.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Bleib bei einem Ziel",
            "description": "Ignoriere Nebenmissionen und Kartenmarker, damit die Quest bei einem klaren Ziel bleibt."
          },
          {
            "scope": "gameplay",
            "title": "Keine externe Hilfe",
            "description": "Verlasse dich nur auf das Spiel: keine Guides, Wikis, Lösungsvideos oder externen Karten."
          }
        ]
      }
    }
  },
  {
    "moodId": "nostalgic",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Time-Capsule Save",
        "title": "Inspect what your past self left behind before changing anything",
        "objective": "Open an old save whose date feels personal. Inspect what your past self left behind before changing anything. Make one change and save again.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keep Your Setup",
            "description": "Keep the current character, loadout, deck, or vehicle for the entire quest."
          },
          {
            "scope": "gameplay",
            "title": "Let It Stand",
            "description": "Accept the first honest result, even when reloading or rerolling could improve it."
          }
        ]
      },
      "de": {
        "name": "Zeitkapsel-Spielstand",
        "title": "Sieh dir an, was dein früheres Ich hinterlassen hat",
        "objective": "Öffne einen alten Spielstand, dessen Datum persönlich wirkt. Sieh dir an, was dein früheres Ich hinterlassen hat. Ändere eine Sache und speichere erneut.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Behalte dein Setup",
            "description": "Behalte die aktuelle Figur, Ausrüstung, das Deck oder Fahrzeug während der ganzen Quest."
          },
          {
            "scope": "gameplay",
            "title": "Lass es gelten",
            "description": "Akzeptiere das erste ehrliche Ergebnis, auch wenn Neuladen oder Neuwürfeln es verbessern könnte."
          }
        ]
      }
    }
  },
  {
    "moodId": "nostalgic",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Player Two Missing",
        "title": "Replay one shared stage without player two",
        "objective": "Think of a game you once shared on one screen. Play the stage you remember most, even if the second controller stays empty. Finish the stage.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Borrow Their Style",
            "description": "Copy one visible route, build, rhythm, or technique before adapting it yourself."
          },
          {
            "scope": "gameplay",
            "title": "Stop Cleanly",
            "description": "End at a safe save point or result screen without starting something new."
          }
        ]
      },
      "de": {
        "name": "Spieler zwei fehlt",
        "title": "Spiele eine gemeinsame Strecke ohne zweiten Spieler",
        "objective": "Denk an ein Spiel, das du früher an einem Bildschirm geteilt hast. Spiele die vertrauteste Strecke, auch wenn der zweite Controller leer bleibt. Beende den Abschnitt.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Übernimm ihren Stil",
            "description": "Kopiere eine sichtbare Route, Bauweise, Rhythmik oder Technik, bevor du sie selbst anpasst."
          },
          {
            "scope": "gameplay",
            "title": "Sauber aufhören",
            "description": "Höre an einem sicheren Speicherpunkt oder Ergebnisbildschirm auf, ohne etwas Neues zu starten."
          }
        ]
      }
    }
  },
  {
    "moodId": "nostalgic",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "Old Triumph",
        "title": "Attempt it again with the skills you have now",
        "objective": "Return to a challenge you were once proud to beat. Attempt it again with the skills you have now. Win or make three full attempts.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Play It Out",
            "description": "Continue after mistakes and adapt instead of restarting, reloading, or abandoning the attempt."
          },
          {
            "scope": "gameplay",
            "title": "Keep Your Setup",
            "description": "Keep the current character, loadout, deck, or vehicle for the entire quest."
          }
        ]
      },
      "de": {
        "name": "Alter Triumph",
        "title": "Versuche sie mit deinen heutigen Fähigkeiten erneut",
        "objective": "Kehre zu einer Herausforderung zurück, auf deren Sieg du früher stolz warst. Versuche sie mit deinen heutigen Fähigkeiten erneut. Gewinne oder unternimm drei vollständige Versuche.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Spiel es zu Ende",
            "description": "Spiele nach Fehlern weiter und passe dich an, statt neu zu starten oder zu laden."
          },
          {
            "scope": "gameplay",
            "title": "Behalte dein Setup",
            "description": "Behalte die aktuelle Figur, Ausrüstung, das Deck oder Fahrzeug während der ganzen Quest."
          }
        ]
      }
    }
  },
  {
    "moodId": "nostalgic",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 180,
    "translations": {
      "en": {
        "name": "Borrowed Weekend",
        "title": "Revisit the first activity you remember",
        "objective": "Think of a game you once borrowed for a weekend. Revisit the first activity you remember. Reach the next save, checkpoint, or result screen.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "First Instinct",
            "description": "Take the first sincere choice that feels right without comparing every alternative."
          },
          {
            "scope": "gameplay",
            "title": "Memory First",
            "description": "Use memory first; open controls, maps, or tutorials only when truly stuck."
          }
        ]
      },
      "de": {
        "name": "Geliehenes Wochenende",
        "title": "Besuche die erste erinnerte Aktivität erneut",
        "objective": "Denk an ein Spiel, das du früher für ein Wochenende ausgeliehen hast. Besuche die erste erinnerte Aktivität erneut. Erreiche den nächsten Speicherpunkt, Kontrollpunkt oder Ergebnisbildschirm.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Erster Impuls",
            "description": "Nimm die erste ehrliche Wahl, die sich richtig anfühlt, ohne alle Alternativen zu vergleichen."
          },
          {
            "scope": "gameplay",
            "title": "Erst aus Erinnerung",
            "description": "Nutze zuerst dein Gedächtnis; öffne Steuerung, Karte oder Tutorial nur, wenn du feststeckst."
          }
        ]
      }
    }
  },
  {
    "moodId": "nostalgic",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Memorable Opening",
        "title": "Replay that exact opening from the beginning",
        "objective": "Open a game whose demo once sold you its whole promise. Replay that exact opening from the beginning. Finish the opening.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Stay on One Goal",
            "description": "Ignore side missions and map markers so the quest stays on one clear goal."
          },
          {
            "scope": "gameplay",
            "title": "Keep the First Take",
            "description": "Keep the first complete version and resist adding a second polish pass."
          }
        ]
      },
      "de": {
        "name": "Vertrauter Anfang",
        "title": "Spiele genau diesen Anfang noch einmal",
        "objective": "Öffne ein Spiel, dessen Demo dir damals das ganze Versprechen verkauft hat. Spiele genau diesen Anfang noch einmal. Beende den Anfang.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Bleib bei einem Ziel",
            "description": "Ignoriere Nebenmissionen und Kartenmarker, damit die Quest bei einem klaren Ziel bleibt."
          },
          {
            "scope": "gameplay",
            "title": "Behalte den ersten Versuch",
            "description": "Behalte die erste vollständige Version und widerstehe einer zweiten Überarbeitungsrunde."
          }
        ]
      }
    }
  },
  {
    "moodId": "nostalgic",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Old Character",
        "title": "Keep their old appearance and equipment exactly as you find them",
        "objective": "Visit a character you created years ago. Keep their old appearance and equipment exactly as you find them. Complete the next level, round, task, or scene without changing that character.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Memory First",
            "description": "Use memory first; open controls, maps, or tutorials only when truly stuck."
          },
          {
            "scope": "gameplay",
            "title": "Bring Back One Image",
            "description": "Capture one screenshot that clearly shows the finished result or final stopping point."
          }
        ]
      },
      "de": {
        "name": "Alte Figur",
        "title": "Behalte ihr altes Aussehen und ihre Ausrüstung genau so bei",
        "objective": "Besuche eine Figur, die du vor Jahren erstellt hast. Behalte ihr altes Aussehen und ihre Ausrüstung genau so bei. Beende mit dieser unveränderten Figur das nächste Level, die nächste Runde, Aufgabe oder Szene.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Erst aus Erinnerung",
            "description": "Nutze zuerst dein Gedächtnis; öffne Steuerung, Karte oder Tutorial nur, wenn du feststeckst."
          },
          {
            "scope": "gameplay",
            "title": "Bring ein Bild mit",
            "description": "Mache einen Screenshot, der das fertige Ergebnis oder den endgültigen Haltepunkt klar zeigt."
          }
        ]
      }
    }
  },
  {
    "moodId": "nostalgic",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Lost Mode",
        "title": "Play that version without comparing menus",
        "objective": "Think of a retired mode you still miss and find its closest modern successor. Play that version without comparing menus. Finish one full result.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Let It Stand",
            "description": "Accept the first honest result, even when reloading or rerolling could improve it."
          },
          {
            "scope": "gameplay",
            "title": "Stop Cleanly",
            "description": "End at a safe save point or result screen without starting something new."
          }
        ]
      },
      "de": {
        "name": "Verlorener Modus",
        "title": "Spiele diese Version ohne Menüvergleich",
        "objective": "Denk an einen eingestellten Modus, den du vermisst, und finde seinen nächsten modernen Nachfolger. Spiele diese Version ohne Menüvergleich. Beende eine ganze Runde, ein Match, eine Aufgabe oder einen Test und behalte das Ergebnis.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Lass es gelten",
            "description": "Akzeptiere das erste ehrliche Ergebnis, auch wenn Neuladen oder Neuwürfeln es verbessern könnte."
          },
          {
            "scope": "gameplay",
            "title": "Sauber aufhören",
            "description": "Höre an einem sicheren Speicherpunkt oder Ergebnisbildschirm auf, ohne etwas Neues zu starten."
          }
        ]
      }
    }
  },
  {
    "moodId": "nostalgic",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Remembered Map",
        "title": "Put the map away and visit three landmarks from memory",
        "objective": "Open a map you once knew by heart. Put the map away and visit three landmarks from memory. Reach all three.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "World Audio",
            "description": "Lower the music enough to notice environmental sounds, voices, machinery, and distant activity."
          },
          {
            "scope": "gameplay",
            "title": "Bring Back One Image",
            "description": "Capture one screenshot that clearly shows the finished result or final stopping point."
          }
        ]
      },
      "de": {
        "name": "Erinnerte Karte",
        "title": "Schließe sie und besuche drei Orte aus der Erinnerung",
        "objective": "Öffne eine Karte, die du früher auswendig kanntest. Schließe sie und besuche drei Orte aus der Erinnerung. Erreiche alle drei.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Geräusche der Welt",
            "description": "Drehe die Musik so weit herunter, dass du Umgebung, Stimmen und entfernte Aktivität wahrnimmst."
          },
          {
            "scope": "gameplay",
            "title": "Bring ein Bild mit",
            "description": "Mache einen Screenshot, der das fertige Ergebnis oder den endgültigen Haltepunkt klar zeigt."
          }
        ]
      }
    }
  },
  {
    "moodId": "nostalgic",
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 20,
    "rewardPoints": 250,
    "translations": {
      "en": {
        "name": "Memorable Ending",
        "title": "Start its final available chapter and let every scene play",
        "objective": "Return to a game ending that still matters to you. Start its final available chapter and let every scene play. Reach the closing scene.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Stay on One Goal",
            "description": "Ignore side missions and map markers so the quest stays on one clear goal."
          },
          {
            "scope": "gameplay",
            "title": "Stop Cleanly",
            "description": "End at a safe save point or result screen without starting something new."
          }
        ]
      },
      "de": {
        "name": "Denkwürdiges Ende",
        "title": "Starte das letzte verfügbare Kapitel und lass jede Szene laufen",
        "objective": "Kehre zu einem Spielende zurück, das dir noch etwas bedeutet. Starte das letzte verfügbare Kapitel und lass jede Szene laufen. Erreiche die Schlussszene.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Bleib bei einem Ziel",
            "description": "Ignoriere Nebenmissionen und Kartenmarker, damit die Quest bei einem klaren Ziel bleibt."
          },
          {
            "scope": "gameplay",
            "title": "Sauber aufhören",
            "description": "Höre an einem sicheren Speicherpunkt oder Ergebnisbildschirm auf, ohne etwas Neues zu starten."
          }
        ]
      }
    }
  },
  {
    "moodId": "nostalgic",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 180,
    "translations": {
      "en": {
        "name": "Saturday Morning",
        "title": "Play the level that best captures that source",
        "objective": "Choose a childhood game based on a character you already knew elsewhere. Play the level that best captures that source. Reach the next save, checkpoint, or result screen.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Let It Stand",
            "description": "Accept the first honest result, even when reloading or rerolling could improve it."
          },
          {
            "scope": "gameplay",
            "title": "Use Basic Gear",
            "description": "Leave your strongest or rarest option unused and solve the quest with ordinary gear."
          }
        ]
      },
      "de": {
        "name": "Samstagmorgen",
        "title": "Spiele das Level, das diese Vorlage am besten trifft",
        "objective": "Wähle ein Kindheitsspiel über eine Figur, die du schon aus einem anderen Medium kanntest. Spiele das Level, das diese Vorlage am besten trifft. Erreiche den nächsten Speicherpunkt, Kontrollpunkt oder Ergebnisbildschirm.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Lass es gelten",
            "description": "Akzeptiere das erste ehrliche Ergebnis, auch wenn Neuladen oder Neuwürfeln es verbessern könnte."
          },
          {
            "scope": "gameplay",
            "title": "Nutze einfache Ausrüstung",
            "description": "Lass deine stärkste oder seltenste Option ungenutzt und löse die Quest mit gewöhnlicher Ausrüstung."
          }
        ]
      }
    }
  },
  {
    "moodId": "nostalgic",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 180,
    "translations": {
      "en": {
        "name": "Handheld Evening",
        "title": "Choose one compact activity that fits that old rhythm",
        "objective": "Return to a game you first played on a handheld. Choose one compact activity that fits that old rhythm. Reach the next save, checkpoint, or result screen.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Minimal HUD",
            "description": "Hide optional UI, but keep the quest's required goal and finish indicators visible."
          },
          {
            "scope": "gameplay",
            "title": "Keep Your Setup",
            "description": "Keep the current character, loadout, deck, or vehicle for the entire quest."
          }
        ]
      },
      "de": {
        "name": "Handheld-Abend",
        "title": "Wähle eine kurze Aktivität im damaligen Rhythmus",
        "objective": "Kehre zu einem Spiel zurück, das du zuerst auf einem Handheld gespielt hast. Wähle eine kurze Aktivität im damaligen Rhythmus. Erreiche den nächsten Speicherpunkt, Kontrollpunkt oder Ergebnisbildschirm.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Minimales HUD",
            "description": "Blende optionale Anzeigen aus, aber behalte Ziel und Abschluss der Quest sichtbar."
          },
          {
            "scope": "gameplay",
            "title": "Behalte dein Setup",
            "description": "Behalte die aktuelle Figur, Ausrüstung, das Deck oder Fahrzeug während der ganzen Quest."
          }
        ]
      }
    }
  },
  {
    "moodId": "nostalgic",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Seasonal Memory",
        "title": "Visit the place that brings that feeling back",
        "objective": "Think of a game tied strongly to one season in your memory. Visit the place that brings that feeling back. Complete one level, quest, match, or in-game day there.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Move Without Rushing",
            "description": "Avoid sprinting, boosting, or skipping ahead; let the journey set the pace."
          },
          {
            "scope": "gameplay",
            "title": "Bring Back One Image",
            "description": "Capture one screenshot that clearly shows the finished result or final stopping point."
          }
        ]
      },
      "de": {
        "name": "Saisonale Erinnerung",
        "title": "Besuche den Ort, der dieses Gefühl zurückbringt",
        "objective": "Denk an ein Spiel, das in deiner Erinnerung fest mit einer Jahreszeit verbunden ist. Besuche den Ort, der dieses Gefühl zurückbringt. Beende dort ein Level, eine Quest, ein Match oder einen Spieltag.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Ohne Eile",
            "description": "Vermeide Sprinten, Boosts und Abkürzungen; lass den Weg das Tempo bestimmen."
          },
          {
            "scope": "gameplay",
            "title": "Bring ein Bild mit",
            "description": "Mache einen Screenshot, der das fertige Ergebnis oder den endgültigen Haltepunkt klar zeigt."
          }
        ]
      }
    }
  },
  {
    "moodId": "nostalgic",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 180,
    "translations": {
      "en": {
        "name": "Family-Room Classic",
        "title": "Play one round with the rules you used back then",
        "objective": "Choose the game most associated with your family room. Play one round with the rules you used back then. Finish the round.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keep Your Setup",
            "description": "Keep the current character, loadout, deck, or vehicle for the entire quest."
          },
          {
            "scope": "gameplay",
            "title": "Let It Stand",
            "description": "Accept the first honest result, even when reloading or rerolling could improve it."
          }
        ]
      },
      "de": {
        "name": "Familienklassiker",
        "title": "Spiele eine Runde nach den damaligen Regeln",
        "objective": "Wähle das Spiel, das du am stärksten mit deinem Familienzimmer verbindest. Spiele eine Runde nach den damaligen Regeln. Beende die Runde.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Behalte dein Setup",
            "description": "Behalte die aktuelle Figur, Ausrüstung, das Deck oder Fahrzeug während der ganzen Quest."
          },
          {
            "scope": "gameplay",
            "title": "Lass es gelten",
            "description": "Akzeptiere das erste ehrliche Ergebnis, auch wenn Neuladen oder Neuwürfeln es verbessern könnte."
          }
        ]
      }
    }
  },
  {
    "moodId": "nostalgic",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Friend Recommendation",
        "title": "Play the activity they would have picked",
        "objective": "Think of an old friend and choose the game that best matches their taste. Play the activity they would have picked. Reach the next save, checkpoint, or result screen.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Borrow Their Style",
            "description": "Copy one visible route, build, rhythm, or technique before adapting it yourself."
          },
          {
            "scope": "gameplay",
            "title": "Favorite Setup",
            "description": "Use the character, loadout, deck, or vehicle you most associate with this game."
          }
        ]
      },
      "de": {
        "name": "Empfehlung eines Freundes",
        "title": "Spiele die Aktivität, die er gewählt hätte",
        "objective": "Denk an einen alten Freund und wähle das Spiel, das am besten zu seinem Geschmack passt. Spiele die Aktivität, die er gewählt hätte. Erreiche den nächsten Speicherpunkt, Kontrollpunkt oder Ergebnisbildschirm.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Übernimm ihren Stil",
            "description": "Kopiere eine sichtbare Route, Bauweise, Rhythmik oder Technik, bevor du sie selbst anpasst."
          },
          {
            "scope": "gameplay",
            "title": "Lieblings-Setup",
            "description": "Nutze die Figur, Ausrüstung, das Deck oder Fahrzeug, das du damit verbindest."
          }
        ]
      }
    }
  },
  {
    "moodId": "nostalgic",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "Old Strategy",
        "title": "Use that old plan unchanged from the first move",
        "objective": "Open a game where you once had a reliable opening. Use that old plan unchanged from the first move. Finish one full round, match, task, or test and keep its result.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Memory First",
            "description": "Use memory first; open controls, maps, or tutorials only when truly stuck."
          },
          {
            "scope": "gameplay",
            "title": "Let It Stand",
            "description": "Accept the first honest result, even when reloading or rerolling could improve it."
          }
        ]
      },
      "de": {
        "name": "Alte Strategie",
        "title": "Nutze diesen alten Plan ab dem ersten Zug unverändert",
        "objective": "Öffne ein Spiel, in dem du früher eine verlässliche Eröffnung hattest. Nutze diesen alten Plan ab dem ersten Zug unverändert. Beende eine ganze Runde, ein Match, eine Aufgabe oder einen Test und behalte das Ergebnis.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Erst aus Erinnerung",
            "description": "Nutze zuerst dein Gedächtnis; öffne Steuerung, Karte oder Tutorial nur, wenn du feststeckst."
          },
          {
            "scope": "gameplay",
            "title": "Lass es gelten",
            "description": "Akzeptiere das erste ehrliche Ergebnis, auch wenn Neuladen oder Neuwürfeln es verbessern könnte."
          }
        ]
      }
    }
  },
  {
    "moodId": "nostalgic",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Remembered Roster",
        "title": "Finish one sports-game match with a remembered roster",
        "objective": "Choose a sports game with a roster from a season you remember. Play as that exact team. Finish one full match.",
        "tips": [
          {
            "scope": "game-selection",
            "title": "Sports Pick",
            "description": "Choose a sports game with a complete short match or event."
          },
          {
            "scope": "gameplay",
            "title": "Let It Stand",
            "description": "Accept the first honest result, even when reloading or rerolling could improve it."
          }
        ]
      },
      "de": {
        "name": "Vertraute Aufstellung",
        "title": "Beende im Sportspiel ein Match mit einem alten Kader",
        "objective": "Wähle ein Sportspiel mit einem Kader aus einer Saison, an die du dich erinnerst. Spiele genau dieses Team. Beende ein vollständiges Match.",
        "tips": [
          {
            "scope": "game-selection",
            "title": "Sportspiel wählen",
            "description": "Nimm ein Sportspiel mit kurzem vollständigem Match oder Event."
          },
          {
            "scope": "gameplay",
            "title": "Lass es gelten",
            "description": "Akzeptiere das erste ehrliche Ergebnis, auch wenn Neuladen oder Neuwürfeln es verbessern könnte."
          }
        ]
      }
    }
  },
  {
    "moodId": "nostalgic",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 180,
    "translations": {
      "en": {
        "name": "Remembered Racing Line",
        "title": "Drive the line from memory without chasing a record",
        "objective": "Return to a racing track your hands once knew. Drive the line from memory without chasing a record. Finish one race.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keep Your Setup",
            "description": "Keep the current character, loadout, deck, or vehicle for the entire quest."
          },
          {
            "scope": "gameplay",
            "title": "World Audio",
            "description": "Lower the music enough to notice environmental sounds, voices, machinery, and distant activity."
          }
        ]
      },
      "de": {
        "name": "Erinnerte Ideallinie",
        "title": "Fahre die Linie aus der Erinnerung ohne Rekordjagd",
        "objective": "Kehre zu einer Rennstrecke zurück, die deine Hände früher kannten. Fahre die Linie aus der Erinnerung ohne Rekordjagd. Beende ein Rennen.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Behalte dein Setup",
            "description": "Behalte die aktuelle Figur, Ausrüstung, das Deck oder Fahrzeug während der ganzen Quest."
          },
          {
            "scope": "gameplay",
            "title": "Geräusche der Welt",
            "description": "Drehe die Musik so weit herunter, dass du Umgebung, Stimmen und entfernte Aktivität wahrnimmst."
          }
        ]
      }
    }
  },
  {
    "moodId": "nostalgic",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "First RPG Town",
        "title": "Walk its main street and greet three residents",
        "objective": "Visit the first role-playing town that once felt like home. Walk its main street and greet three residents. Speak to all three.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "No Map",
            "description": "Navigate through landmarks and memory without opening a map or route overlay."
          },
          {
            "scope": "gameplay",
            "title": "Full Dialogue",
            "description": "Let every spoken or written line finish before advancing."
          }
        ]
      },
      "de": {
        "name": "Erste RPG-Stadt",
        "title": "Geh ihre Hauptstraße entlang und begrüße drei Bewohner",
        "objective": "Besuche die erste Rollenspielstadt, die sich früher wie Zuhause anfühlte. Geh ihre Hauptstraße entlang und begrüße drei Bewohner. Sprich mit allen drei.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keine Karte",
            "description": "Navigiere mit Orientierungspunkten und Erinnerung, ohne Karte oder eingeblendete Route."
          },
          {
            "scope": "gameplay",
            "title": "Ganzer Dialog",
            "description": "Lass jede gesprochene oder geschriebene Zeile enden, bevor du fortfährst."
          }
        ]
      }
    }
  },
  {
    "moodId": "nostalgic",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "Old Scare",
        "title": "Reach the next safe room in an old horror game",
        "objective": "Return to a horror game you once paused out of fear. Continue from that save without skipping the tense route. Reach the next safe room.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Play It Out",
            "description": "Continue after mistakes and adapt instead of restarting, reloading, or abandoning the attempt."
          },
          {
            "scope": "gameplay",
            "title": "World Audio",
            "description": "Lower the music enough to notice environmental sounds, voices, machinery, and distant activity."
          }
        ]
      },
      "de": {
        "name": "Alter Schrecken",
        "title": "Erreiche im alten Horrorspiel den nächsten sicheren Raum",
        "objective": "Kehre zu einem Horrorspiel zurück, das du früher aus Angst pausiert hast. Spiele von dort weiter, ohne den angespannten Weg zu umgehen. Erreiche den nächsten sicheren Raum.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Spiel es zu Ende",
            "description": "Spiele nach Fehlern weiter und passe dich an, statt neu zu starten oder zu laden."
          },
          {
            "scope": "gameplay",
            "title": "Geräusche der Welt",
            "description": "Drehe die Musik so weit herunter, dass du Umgebung, Stimmen und entfernte Aktivität wahrnimmst."
          }
        ]
      }
    }
  },
  {
    "moodId": "nostalgic",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Oldest Timestamp",
        "title": "Load it and inspect your exact situation",
        "objective": "Find the oldest readable save date in a game you can still open. Load it and inspect your exact situation. Do one small task and save again.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Let It Stand",
            "description": "Accept the first honest result, even when reloading or rerolling could improve it."
          },
          {
            "scope": "gameplay",
            "title": "No Undo",
            "description": "Keep every placed, painted, or customized choice and adapt around imperfect decisions."
          }
        ]
      },
      "de": {
        "name": "Ältester Zeitstempel",
        "title": "Lade es und prüfe deine genaue Lage",
        "objective": "Finde das älteste lesbare Speicherdatum in einem Spiel, das du noch öffnen kannst. Lade es und prüfe deine genaue Lage. Erledige eine kleine Aufgabe und speichere erneut.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Lass es gelten",
            "description": "Akzeptiere das erste ehrliche Ergebnis, auch wenn Neuladen oder Neuwürfeln es verbessern könnte."
          },
          {
            "scope": "gameplay",
            "title": "Kein Rückgängig",
            "description": "Behalte jede platzierte, gemalte oder angepasste Entscheidung und arbeite um Fehler herum."
          }
        ]
      }
    }
  },
  {
    "moodId": "nostalgic",
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 20,
    "rewardPoints": 250,
    "translations": {
      "en": {
        "name": "One Trophy Left",
        "title": "Open its unfinished achievement list and choose one",
        "objective": "Open one unfinished achievement you once pursued, work only toward its requirement, and unlock it or complete three full attempts.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Memory First",
            "description": "Use memory first; open controls, maps, or tutorials only when truly stuck."
          },
          {
            "scope": "gameplay",
            "title": "No Outside Help",
            "description": "Rely only on the game: no guides, wikis, solution videos, or external maps."
          }
        ]
      },
      "de": {
        "name": "Ein Achievement fehlt",
        "title": "Öffne die Liste der noch offenen Errungenschaften und wähle eine",
        "objective": "Öffne eine unerledigte Errungenschaft, die du früher verfolgt hast, arbeite nur an ihrer Bedingung und schalte sie frei oder beende drei vollständige Versuche.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Erst aus Erinnerung",
            "description": "Nutze zuerst dein Gedächtnis; öffne Steuerung, Karte oder Tutorial nur, wenn du feststeckst."
          },
          {
            "scope": "gameplay",
            "title": "Keine externe Hilfe",
            "description": "Verlasse dich nur auf das Spiel: keine Guides, Wikis, Lösungsvideos oder externen Karten."
          }
        ]
      }
    }
  },
  {
    "moodId": "nostalgic",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "Remake Return",
        "title": "Revisit one section you remember clearly",
        "objective": "Open a remake of a game you played in its original form. Revisit one section you remember clearly. Finish it and capture the new look.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Use Basic Gear",
            "description": "Leave your strongest or rarest option unused and solve the quest with ordinary gear."
          },
          {
            "scope": "gameplay",
            "title": "Keep the First Take",
            "description": "Keep the first complete version and resist adding a second polish pass."
          }
        ]
      },
      "de": {
        "name": "Remake-Rückkehr",
        "title": "Besuche einen Abschnitt, an den du dich klar erinnerst",
        "objective": "Öffne das Remake eines Spiels, das du im Original gespielt hast. Besuche einen Abschnitt, an den du dich klar erinnerst. Beende ihn und halte die neue Optik fest.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Nutze einfache Ausrüstung",
            "description": "Lass deine stärkste oder seltenste Option ungenutzt und löse die Quest mit gewöhnlicher Ausrüstung."
          },
          {
            "scope": "gameplay",
            "title": "Behalte den ersten Versuch",
            "description": "Behalte die erste vollständige Version und widerstehe einer zweiten Überarbeitungsrunde."
          }
        ]
      }
    }
  },
  {
    "moodId": "nostalgic",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Hands Remember",
        "title": "Replay one opening from memory without a guide",
        "objective": "Choose a game whose opening challenge you once knew by heart. Replay that opening from memory before checking a guide. Reach the first checkpoint and name one detail you remembered.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Minimal HUD",
            "description": "Hide optional UI, but keep the quest's required goal and finish indicators visible."
          },
          {
            "scope": "gameplay",
            "title": "Let It Stand",
            "description": "Accept the first honest result, even when reloading or rerolling could improve it."
          }
        ]
      },
      "de": {
        "name": "Die Hände erinnern sich",
        "title": "Spiele einen Anfang ohne Guide aus der Erinnerung",
        "objective": "Wähle ein Spiel, dessen erste Herausforderung du früher auswendig kanntest. Spiele diesen Anfang aus der Erinnerung, bevor du in einen Guide schaust. Erreiche den ersten Kontrollpunkt und benenne ein Detail, an das du dich erinnert hast.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Minimales HUD",
            "description": "Blende optionale Anzeigen aus, aber behalte Ziel und Abschluss der Quest sichtbar."
          },
          {
            "scope": "gameplay",
            "title": "Lass es gelten",
            "description": "Akzeptiere das erste ehrliche Ergebnis, auch wenn Neuladen oder Neuwürfeln es verbessern könnte."
          }
        ]
      }
    }
  },
  {
    "moodId": "nostalgic",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Remembered Move",
        "title": "Attempt it before opening any tutorial or move list",
        "objective": "Return to one move your hands may still remember. Attempt it before opening any tutorial or move list. Land it three times.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Memory First",
            "description": "Use memory first; open controls, maps, or tutorials only when truly stuck."
          },
          {
            "scope": "gameplay",
            "title": "Keep Your Setup",
            "description": "Keep the current character, loadout, deck, or vehicle for the entire quest."
          }
        ]
      },
      "de": {
        "name": "Erinnerte Bewegung",
        "title": "Versuche sie vor jedem Tutorial oder Moveset",
        "objective": "Kehre zu einer Bewegung zurück, an die sich deine Hände vielleicht noch erinnern. Versuche sie vor jedem Tutorial oder Moveset. Führe sie dreimal erfolgreich aus.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Erst aus Erinnerung",
            "description": "Nutze zuerst dein Gedächtnis; öffne Steuerung, Karte oder Tutorial nur, wenn du feststeckst."
          },
          {
            "scope": "gameplay",
            "title": "Behalte dein Setup",
            "description": "Behalte die aktuelle Figur, Ausrüstung, das Deck oder Fahrzeug während der ganzen Quest."
          }
        ]
      }
    }
  },
  {
    "moodId": "nostalgic",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Former Main",
        "title": "Pick that exact character without checking the current meta",
        "objective": "Open a game with the character you once considered your main. Pick that exact character without checking the current meta. Reach the next save, checkpoint, or result screen.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Memory First",
            "description": "Use memory first; open controls, maps, or tutorials only when truly stuck."
          },
          {
            "scope": "gameplay",
            "title": "No Upgrades",
            "description": "Buy, unlock, and equip no upgrades until the current quest is finished."
          }
        ]
      },
      "de": {
        "name": "Früherer Main",
        "title": "Wähle genau sie, ohne die aktuelle Meta zu prüfen",
        "objective": "Öffne ein Spiel mit der Figur, die früher dein Main war. Wähle genau sie, ohne die aktuelle Meta zu prüfen. Erreiche den nächsten Speicherpunkt, Kontrollpunkt oder Ergebnisbildschirm.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Erst aus Erinnerung",
            "description": "Nutze zuerst dein Gedächtnis; öffne Steuerung, Karte oder Tutorial nur, wenn du feststeckst."
          },
          {
            "scope": "gameplay",
            "title": "Keine Upgrades",
            "description": "Kaufe, schalte frei und rüste nichts auf, bis die aktuelle Quest beendet ist."
          }
        ]
      }
    }
  },
  {
    "moodId": "nostalgic",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "One Last Return",
        "title": "Give it one honest return without expecting the old feeling",
        "objective": "Choose a former favorite you have not opened in years. Give it one honest return without expecting the old feeling. Reach the next save, checkpoint, or result screen.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Bring Back One Image",
            "description": "Capture one screenshot that clearly shows the finished result or final stopping point."
          },
          {
            "scope": "gameplay",
            "title": "Memory First",
            "description": "Use memory first; open controls, maps, or tutorials only when truly stuck."
          }
        ]
      },
      "de": {
        "name": "Letzte Rückkehr",
        "title": "Gib ihm eine ehrliche Rückkehr, ohne das alte Gefühl zu erwarten",
        "objective": "Wähle einen früheren Favoriten, den du seit Jahren nicht geöffnet hast. Gib ihm eine ehrliche Rückkehr, ohne das alte Gefühl zu erwarten. Erreiche den nächsten Speicherpunkt, Kontrollpunkt oder Ergebnisbildschirm.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Bring ein Bild mit",
            "description": "Mache einen Screenshot, der das fertige Ergebnis oder den endgültigen Haltepunkt klar zeigt."
          },
          {
            "scope": "gameplay",
            "title": "Erst aus Erinnerung",
            "description": "Nutze zuerst dein Gedächtnis; öffne Steuerung, Karte oder Tutorial nur, wenn du feststeckst."
          }
        ]
      }
    }
  },
  {
    "moodId": "nostalgic",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "rewardPoints": 170,
    "translations": {
      "en": {
        "name": "Insert Coin",
        "title": "Play one arcade-game credit without continuing",
        "objective": "Open a classic arcade game and treat the next start as one paid credit. Do not continue after game over. Record the score.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Minimal HUD",
            "description": "Hide optional UI, but keep the quest's required goal and finish indicators visible."
          },
          {
            "scope": "gameplay",
            "title": "Let It Stand",
            "description": "Accept the first honest result, even when reloading or rerolling could improve it."
          }
        ]
      },
      "de": {
        "name": "Insert Coin",
        "title": "Spiel im Arcade-Spiel einen Versuch ohne Continue",
        "objective": "Öffne ein klassisches Arcade-Spiel und behandle den nächsten Start wie einen bezahlten Credit. Setze nach Game Over nicht fort. Halte den Punktestand fest.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Minimales HUD",
            "description": "Blende optionale Anzeigen aus, aber behalte Ziel und Abschluss der Quest sichtbar."
          },
          {
            "scope": "gameplay",
            "title": "Lass es gelten",
            "description": "Akzeptiere das erste ehrliche Ergebnis, auch wenn Neuladen oder Neuwürfeln es verbessern könnte."
          }
        ]
      }
    }
  },
  {
    "moodId": "nostalgic",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 180,
    "translations": {
      "en": {
        "name": "Known Cheat",
        "title": "Enter the remembered cheat code and play with its effect",
        "objective": "Return to an old game with a cheat code you still know. Enter the remembered cheat code and play with its effect. Finish one level.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "No Outside Help",
            "description": "Rely only on the game: no guides, wikis, solution videos, or external maps."
          },
          {
            "scope": "gameplay",
            "title": "Let It Stand",
            "description": "Accept the first honest result, even when reloading or rerolling could improve it."
          }
        ]
      },
      "de": {
        "name": "Bekannter Cheat",
        "title": "Gib den erinnerten Cheatcode ein und spiele mit seiner Wirkung",
        "objective": "Kehre zu einem alten Spiel mit einem Cheatcode zurück, den du noch kennst. Gib den erinnerten Cheatcode ein und spiele mit seiner Wirkung. Beende ein Level.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keine externe Hilfe",
            "description": "Verlasse dich nur auf das Spiel: keine Guides, Wikis, Lösungsvideos oder externen Karten."
          },
          {
            "scope": "gameplay",
            "title": "Lass es gelten",
            "description": "Akzeptiere das erste ehrliche Ergebnis, auch wenn Neuladen oder Neuwürfeln es verbessern könnte."
          }
        ]
      }
    }
  },
  {
    "moodId": "nostalgic",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Early Indie",
        "title": "Replay its opening without checking how it was reviewed later",
        "objective": "Think of one of the first indie games you loved. Replay its opening without checking how it was reviewed later. Finish the opening.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keep the First Take",
            "description": "Keep the first complete version and resist adding a second polish pass."
          },
          {
            "scope": "gameplay",
            "title": "Stop Cleanly",
            "description": "End at a safe save point or result screen without starting something new."
          }
        ]
      },
      "de": {
        "name": "Frühes Indie-Spiel",
        "title": "Spiele den Anfang erneut, ohne spätere Rezensionen anzusehen",
        "objective": "Denk an eines der ersten Indie-Spiele, die du geliebt hast. Spiele den Anfang erneut, ohne spätere Rezensionen anzusehen. Beende den Anfang.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Behalte den ersten Versuch",
            "description": "Behalte die erste vollständige Version und widerstehe einer zweiten Überarbeitungsrunde."
          },
          {
            "scope": "gameplay",
            "title": "Sauber aufhören",
            "description": "Höre an einem sicheren Speicherpunkt oder Ergebnisbildschirm auf, ohne etwas Neues zu starten."
          }
        ]
      }
    }
  },
  {
    "moodId": "nostalgic",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Old Look",
        "title": "Rebuild its three most distinctive details from memory",
        "objective": "Think of a custom look you once made in a game. Rebuild its three most distinctive details from memory. Finish the recreation.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "No Outside Help",
            "description": "Rely only on the game: no guides, wikis, solution videos, or external maps."
          },
          {
            "scope": "gameplay",
            "title": "One Palette",
            "description": "Limit the result to one color family plus a single contrasting accent."
          }
        ]
      },
      "de": {
        "name": "Alter Look",
        "title": "Stelle seine drei markantesten Details aus der Erinnerung nach",
        "objective": "Denk an einen eigenen Look, den du früher in einem Spiel gebaut hast. Stelle seine drei markantesten Details aus der Erinnerung nach. Beende die Rekonstruktion.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keine externe Hilfe",
            "description": "Verlasse dich nur auf das Spiel: keine Guides, Wikis, Lösungsvideos oder externen Karten."
          },
          {
            "scope": "gameplay",
            "title": "Eine Farbpalette",
            "description": "Beschränke das Ergebnis auf eine Farbfamilie und einen einzelnen kontrastierenden Akzent."
          }
        ]
      }
    }
  },
  {
    "moodId": "nostalgic",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 180,
    "translations": {
      "en": {
        "name": "Startup Sound",
        "title": "Open the first game you associate with it",
        "objective": "Think of a console startup sound you remember instantly. Open the first game you associate with it. Reach the next save, checkpoint, or result screen.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Listen First",
            "description": "Pause for dialogue and world sounds, then let them guide your next action."
          },
          {
            "scope": "gameplay",
            "title": "Memory First",
            "description": "Use memory first; open controls, maps, or tutorials only when truly stuck."
          }
        ]
      },
      "de": {
        "name": "Startsound",
        "title": "Öffne das erste Spiel, das du damit verbindest",
        "objective": "Denk an den Startklang einer Konsole, den du sofort erkennst. Öffne das erste Spiel, das du damit verbindest. Erreiche den nächsten Speicherpunkt, Kontrollpunkt oder Ergebnisbildschirm.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Hör zuerst zu",
            "description": "Halte für Dialoge und Weltgeräusche inne und lass sie den nächsten Schritt bestimmen."
          },
          {
            "scope": "gameplay",
            "title": "Erst aus Erinnerung",
            "description": "Nutze zuerst dein Gedächtnis; öffne Steuerung, Karte oder Tutorial nur, wenn du feststeckst."
          }
        ]
      }
    }
  },
  {
    "moodId": "nostalgic",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 210,
    "translations": {
      "en": {
        "name": "Secret From Memory",
        "title": "Find it again without looking up the route",
        "objective": "Return to an old game with a secret you once knew by heart. Find it again without looking up the route. Reach the secret.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "World Audio",
            "description": "Lower the music enough to notice environmental sounds, voices, machinery, and distant activity."
          },
          {
            "scope": "gameplay",
            "title": "Bring Back One Image",
            "description": "Capture one screenshot that clearly shows the finished result or final stopping point."
          }
        ]
      },
      "de": {
        "name": "Geheimnis aus Erinnerung",
        "title": "Finde es ohne nachzuschlagen erneut",
        "objective": "Kehre zu einem alten Spiel mit einem Geheimnis zurück, das du früher auswendig kanntest. Finde es ohne nachzuschlagen erneut. Erreiche das Geheimnis.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Geräusche der Welt",
            "description": "Drehe die Musik so weit herunter, dass du Umgebung, Stimmen und entfernte Aktivität wahrnimmst."
          },
          {
            "scope": "gameplay",
            "title": "Bring ein Bild mit",
            "description": "Mache einen Screenshot, der das fertige Ergebnis oder den endgültigen Haltepunkt klar zeigt."
          }
        ]
      }
    }
  },
  {
    "moodId": "overwhelmed",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "rewardPoints": 150,
    "translations": {
      "en": {
        "name": "Smallest Install",
        "title": "Start its first available activity immediately",
        "objective": "Sort your installed games by storage size and open the smallest one. Start its first available activity immediately. Reach the first save, checkpoint, or result screen.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Stay on One Goal",
            "description": "Ignore side missions and map markers so the quest stays on one clear goal."
          },
          {
            "scope": "gameplay",
            "title": "Stop Cleanly",
            "description": "End at a safe save point or result screen without starting something new."
          }
        ]
      },
      "de": {
        "name": "Kleinste Installation",
        "title": "Starte sofort seine erste verfügbare Aktivität",
        "objective": "Sortiere deine installierten Spiele nach Speichergröße und öffne das kleinste. Starte sofort seine erste verfügbare Aktivität. Erreiche den ersten Speicherpunkt, Kontrollpunkt oder Ergebnisbildschirm.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Bleib bei einem Ziel",
            "description": "Ignoriere Nebenmissionen und Kartenmarker, damit die Quest bei einem klaren Ziel bleibt."
          },
          {
            "scope": "gameplay",
            "title": "Sauber aufhören",
            "description": "Höre an einem sicheren Speicherpunkt oder Ergebnisbildschirm auf, ohne etwas Neues zu starten."
          }
        ]
      }
    }
  },
  {
    "moodId": "overwhelmed",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "rewardPoints": 150,
    "translations": {
      "en": {
        "name": "Shortest Activity",
        "title": "Start exactly that unit",
        "objective": "Choose the shortest clearly labeled activity you can see in one game. Start exactly that unit. Reach the next save, checkpoint, or result screen.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keep Your Setup",
            "description": "Keep the current character, loadout, deck, or vehicle for the entire quest."
          },
          {
            "scope": "gameplay",
            "title": "Minimal HUD",
            "description": "Hide optional UI, but keep the quest's required goal and finish indicators visible."
          }
        ]
      },
      "de": {
        "name": "Kürzeste Aktivität",
        "title": "Starte genau diese Einheit",
        "objective": "Wähle die kürzeste klar benannte Aktivität, die du in einem Spiel sehen kannst. Starte genau diese Einheit. Erreiche den nächsten Speicherpunkt, Kontrollpunkt oder Ergebnisbildschirm.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Behalte dein Setup",
            "description": "Behalte die aktuelle Figur, Ausrüstung, das Deck oder Fahrzeug während der ganzen Quest."
          },
          {
            "scope": "gameplay",
            "title": "Minimales HUD",
            "description": "Blende optionale Anzeigen aus, aber behalte Ziel und Abschluss der Quest sichtbar."
          }
        ]
      }
    }
  },
  {
    "moodId": "overwhelmed",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 180,
    "translations": {
      "en": {
        "name": "Zero Setup",
        "title": "Skip downloads, tutorials, and settings screens",
        "objective": "Open the first familiar game that is ready right now. Skip downloads, tutorials, and settings screens. Reach the next save, checkpoint, or result screen.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Stay on One Goal",
            "description": "Ignore side missions and map markers so the quest stays on one clear goal."
          },
          {
            "scope": "gameplay",
            "title": "Minimal HUD",
            "description": "Hide optional UI, but keep the quest's required goal and finish indicators visible."
          }
        ]
      },
      "de": {
        "name": "Ohne Vorbereitung",
        "title": "Überspringe Downloads, Tutorials und Einstellungsmenüs",
        "objective": "Öffne das erste vertraute Spiel, das sofort bereit ist. Überspringe Downloads, Tutorials und Einstellungsmenüs. Erreiche den nächsten Speicherpunkt, Kontrollpunkt oder Ergebnisbildschirm.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Bleib bei einem Ziel",
            "description": "Ignoriere Nebenmissionen und Kartenmarker, damit die Quest bei einem klaren Ziel bleibt."
          },
          {
            "scope": "gameplay",
            "title": "Minimales HUD",
            "description": "Blende optionale Anzeigen aus, aber behalte Ziel und Abschluss der Quest sichtbar."
          }
        ]
      }
    }
  },
  {
    "moodId": "overwhelmed",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 180,
    "translations": {
      "en": {
        "name": "Nearest Checkpoint",
        "title": "Do only that action and ignore everything revealed afterward",
        "objective": "Open the save with the most obvious next action. Do only that action and ignore everything revealed afterward. Stop at the next checkpoint.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Favorite Setup",
            "description": "Use the character, loadout, deck, or vehicle you most associate with this game."
          },
          {
            "scope": "gameplay",
            "title": "Minimal HUD",
            "description": "Hide optional UI, but keep the quest's required goal and finish indicators visible."
          }
        ]
      },
      "de": {
        "name": "Nächster Kontrollpunkt",
        "title": "Erledige nur sie und ignoriere alles, was danach erscheint",
        "objective": "Öffne den Spielstand mit der offensichtlichsten nächsten Aktion. Erledige nur sie und ignoriere alles, was danach erscheint. Höre am nächsten Kontrollpunkt auf.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Lieblings-Setup",
            "description": "Nutze die Figur, Ausrüstung, das Deck oder Fahrzeug, das du damit verbindest."
          },
          {
            "scope": "gameplay",
            "title": "Minimales HUD",
            "description": "Blende optionale Anzeigen aus, aber behalte Ziel und Abschluss der Quest sichtbar."
          }
        ]
      }
    }
  },
  {
    "moodId": "overwhelmed",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 180,
    "translations": {
      "en": {
        "name": "Fewest Buttons",
        "title": "Start one low-input activity without changing its setup",
        "objective": "Choose a game that needs only a few controls. Start one low-input activity without changing its setup. Reach the next save, checkpoint, or result screen.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "One Main Tool",
            "description": "Choose one tool or action and make it your main answer throughout the quest."
          },
          {
            "scope": "gameplay",
            "title": "Minimal HUD",
            "description": "Hide optional UI, but keep the quest's required goal and finish indicators visible."
          }
        ]
      },
      "de": {
        "name": "Wenigste Tasten",
        "title": "Starte eine einfache Aktivität, ohne das Setup zu ändern",
        "objective": "Wähle ein Spiel, das nur wenige Eingaben braucht. Starte eine einfache Aktivität, ohne das Setup zu ändern. Erreiche den nächsten Speicherpunkt, Kontrollpunkt oder Ergebnisbildschirm.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Ein Hauptwerkzeug",
            "description": "Wähle ein Werkzeug oder eine Aktion als deine Hauptlösung für die ganze Quest."
          },
          {
            "scope": "gameplay",
            "title": "Minimales HUD",
            "description": "Blende optionale Anzeigen aus, aber behalte Ziel und Abschluss der Quest sichtbar."
          }
        ]
      }
    }
  },
  {
    "moodId": "overwhelmed",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 180,
    "translations": {
      "en": {
        "name": "First Row",
        "title": "Open its first game that works right now",
        "objective": "Look only at the first visible row of installed games. Open its first game that works right now. Reach the next save, checkpoint, or result screen.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "World Audio",
            "description": "Lower the music enough to notice environmental sounds, voices, machinery, and distant activity."
          },
          {
            "scope": "gameplay",
            "title": "Stay on One Goal",
            "description": "Ignore side missions and map markers so the quest stays on one clear goal."
          }
        ]
      },
      "de": {
        "name": "Erste Reihe",
        "title": "Öffne das erste Spiel darin, das gerade funktioniert",
        "objective": "Schau nur auf die erste sichtbare Reihe deiner installierten Spiele. Öffne das erste Spiel darin, das gerade funktioniert. Erreiche den nächsten Speicherpunkt, Kontrollpunkt oder Ergebnisbildschirm.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Geräusche der Welt",
            "description": "Drehe die Musik so weit herunter, dass du Umgebung, Stimmen und entfernte Aktivität wahrnimmst."
          },
          {
            "scope": "gameplay",
            "title": "Bleib bei einem Ziel",
            "description": "Ignoriere Nebenmissionen und Kartenmarker, damit die Quest bei einem klaren Ziel bleibt."
          }
        ]
      }
    }
  },
  {
    "moodId": "overwhelmed",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 180,
    "translations": {
      "en": {
        "name": "One Letter",
        "title": "Open the first installed result",
        "objective": "Say the first letter that comes to mind and filter your library by it. Open the first installed result. Reach the next save, checkpoint, or result screen.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Let It Stand",
            "description": "Accept the first honest result, even when reloading or rerolling could improve it."
          },
          {
            "scope": "gameplay",
            "title": "No Outside Help",
            "description": "Rely only on the game: no guides, wikis, solution videos, or external maps."
          }
        ]
      },
      "de": {
        "name": "Ein Buchstabe",
        "title": "Öffne das erste installierte Ergebnis",
        "objective": "Nenne den ersten Buchstaben, der dir einfällt, und filtere deine Bibliothek danach. Öffne das erste installierte Ergebnis. Erreiche den nächsten Speicherpunkt, Kontrollpunkt oder Ergebnisbildschirm.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Lass es gelten",
            "description": "Akzeptiere das erste ehrliche Ergebnis, auch wenn Neuladen oder Neuwürfeln es verbessern könnte."
          },
          {
            "scope": "gameplay",
            "title": "Keine externe Hilfe",
            "description": "Verlasse dich nur auf das Spiel: keine Guides, Wikis, Lösungsvideos oder externen Karten."
          }
        ]
      }
    }
  },
  {
    "moodId": "overwhelmed",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 180,
    "translations": {
      "en": {
        "name": "Blue Cover",
        "title": "Launch the first blue-covered game you see",
        "objective": "Scan your installed covers once and stop at the first one containing blue. Launch the first blue-covered game without comparing another. Reach the next save, checkpoint, or result screen.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "World Audio",
            "description": "Lower the music enough to notice environmental sounds, voices, machinery, and distant activity."
          },
          {
            "scope": "gameplay",
            "title": "Minimal HUD",
            "description": "Hide optional UI, but keep the quest's required goal and finish indicators visible."
          }
        ]
      },
      "de": {
        "name": "Blaues Cover",
        "title": "Starte das erste Spiel mit blauem Cover",
        "objective": "Überfliege deine installierten Cover einmal und stoppe beim ersten mit Blau. Starte das erste Spiel mit blauem Cover, ohne ein anderes zu vergleichen. Erreiche den nächsten Speicherpunkt, Kontrollpunkt oder Ergebnisbildschirm.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Geräusche der Welt",
            "description": "Drehe die Musik so weit herunter, dass du Umgebung, Stimmen und entfernte Aktivität wahrnimmst."
          },
          {
            "scope": "gameplay",
            "title": "Minimales HUD",
            "description": "Blende optionale Anzeigen aus, aber behalte Ziel und Abschluss der Quest sichtbar."
          }
        ]
      }
    }
  },
  {
    "moodId": "overwhelmed",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 150,
    "translations": {
      "en": {
        "name": "Lowest Stakes",
        "title": "Keep every helpful default exactly as offered",
        "objective": "Open a familiar game and choose its lowest-stakes mode. Keep every helpful default exactly as offered. Reach the next save, checkpoint, or result screen.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Let It Stand",
            "description": "Accept the first honest result, even when reloading or rerolling could improve it."
          },
          {
            "scope": "gameplay",
            "title": "World Audio",
            "description": "Lower the music enough to notice environmental sounds, voices, machinery, and distant activity."
          }
        ]
      },
      "de": {
        "name": "Geringster Druck",
        "title": "Behalte jede hilfreiche Voreinstellung genau wie angeboten",
        "objective": "Öffne ein vertrautes Spiel und wähle seinen entspanntesten Modus. Behalte jede hilfreiche Voreinstellung genau wie angeboten. Erreiche den nächsten Speicherpunkt, Kontrollpunkt oder Ergebnisbildschirm.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Lass es gelten",
            "description": "Akzeptiere das erste ehrliche Ergebnis, auch wenn Neuladen oder Neuwürfeln es verbessern könnte."
          },
          {
            "scope": "gameplay",
            "title": "Geräusche der Welt",
            "description": "Drehe die Musik so weit herunter, dass du Umgebung, Stimmen und entfernte Aktivität wahrnimmst."
          }
        ]
      }
    }
  },
  {
    "moodId": "overwhelmed",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Closed Inventory",
        "title": "Start the nearest activity without opening the inventory",
        "objective": "Open a game you can play with your current gear. Start the nearest activity without opening the inventory. Reach the next save, checkpoint, or result screen.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Minimal HUD",
            "description": "Hide optional UI, but keep the quest's required goal and finish indicators visible."
          },
          {
            "scope": "gameplay",
            "title": "No Optional Loot",
            "description": "Ignore optional loot and keep inventory management to only what progress requires."
          }
        ]
      },
      "de": {
        "name": "Inventar geschlossen",
        "title": "Starte die nächste Aktivität, ohne das Inventar zu öffnen",
        "objective": "Öffne ein Spiel, das du mit deiner aktuellen Ausrüstung spielen kannst. Starte die nächste Aktivität, ohne das Inventar zu öffnen. Erreiche den nächsten Speicherpunkt, Kontrollpunkt oder Ergebnisbildschirm.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Minimales HUD",
            "description": "Blende optionale Anzeigen aus, aber behalte Ziel und Abschluss der Quest sichtbar."
          },
          {
            "scope": "gameplay",
            "title": "Keine optionale Beute",
            "description": "Ignoriere optionale Beute und beschränke Inventarverwaltung auf das, was der Fortschritt verlangt."
          }
        ]
      }
    }
  },
  {
    "moodId": "overwhelmed",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Nearby Marker",
        "title": "Go straight to it without checking the full map",
        "objective": "Open an active save and choose the nearest visible objective marker. Go straight to it without checking the full map. Finish its task.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "No Optional Loot",
            "description": "Ignore optional loot and keep inventory management to only what progress requires."
          },
          {
            "scope": "gameplay",
            "title": "Stop Cleanly",
            "description": "End at a safe save point or result screen without starting something new."
          }
        ]
      },
      "de": {
        "name": "Nahe Markierung",
        "title": "Geh direkt dorthin, ohne die ganze Karte zu prüfen",
        "objective": "Öffne einen aktiven Spielstand und wähle den nächsten sichtbaren Zielmarker. Geh direkt dorthin, ohne die ganze Karte zu prüfen. Beende seine Aufgabe.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keine optionale Beute",
            "description": "Ignoriere optionale Beute und beschränke Inventarverwaltung auf das, was der Fortschritt verlangt."
          },
          {
            "scope": "gameplay",
            "title": "Sauber aufhören",
            "description": "Höre an einem sicheren Speicherpunkt oder Ergebnisbildschirm auf, ohne etwas Neues zu starten."
          }
        ]
      }
    }
  },
  {
    "moodId": "overwhelmed",
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 20,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "Closest Finish",
        "title": "Select that task and do nothing else",
        "objective": "Open the save with the clearest nearly finished task. Select that task and do nothing else. Reach the next save, checkpoint, or result screen.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Favorite Setup",
            "description": "Use the character, loadout, deck, or vehicle you most associate with this game."
          },
          {
            "scope": "gameplay",
            "title": "World Audio",
            "description": "Lower the music enough to notice environmental sounds, voices, machinery, and distant activity."
          }
        ]
      },
      "de": {
        "name": "Nächster Abschluss",
        "title": "Wähle diese Aufgabe und tu nichts anderes",
        "objective": "Öffne den Spielstand mit der klarsten fast fertigen Aufgabe. Wähle diese Aufgabe und tu nichts anderes. Erreiche den nächsten Speicherpunkt, Kontrollpunkt oder Ergebnisbildschirm.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Lieblings-Setup",
            "description": "Nutze die Figur, Ausrüstung, das Deck oder Fahrzeug, das du damit verbindest."
          },
          {
            "scope": "gameplay",
            "title": "Geräusche der Welt",
            "description": "Drehe die Musik so weit herunter, dass du Umgebung, Stimmen und entfernte Aktivität wahrnimmst."
          }
        ]
      }
    }
  },
  {
    "moodId": "overwhelmed",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 180,
    "translations": {
      "en": {
        "name": "Known Controls",
        "title": "Start one familiar activity without opening help or training",
        "objective": "Choose the game whose controls you know best. Start one familiar activity without opening help or training. Reach the next save, checkpoint, or result screen.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keep Your Setup",
            "description": "Keep the current character, loadout, deck, or vehicle for the entire quest."
          },
          {
            "scope": "gameplay",
            "title": "Use Basic Gear",
            "description": "Leave your strongest or rarest option unused and solve the quest with ordinary gear."
          }
        ]
      },
      "de": {
        "name": "Vertraute Steuerung",
        "title": "Starte eine vertraute Aktivität ohne Hilfe oder Training",
        "objective": "Wähle das Spiel, dessen Steuerung du am besten kennst. Starte eine vertraute Aktivität ohne Hilfe oder Training. Erreiche den nächsten Speicherpunkt, Kontrollpunkt oder Ergebnisbildschirm.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Behalte dein Setup",
            "description": "Behalte die aktuelle Figur, Ausrüstung, das Deck oder Fahrzeug während der ganzen Quest."
          },
          {
            "scope": "gameplay",
            "title": "Nutze einfache Ausrüstung",
            "description": "Lass deine stärkste oder seltenste Option ungenutzt und löse die Quest mit gewöhnlicher Ausrüstung."
          }
        ]
      }
    }
  },
  {
    "moodId": "overwhelmed",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 180,
    "translations": {
      "en": {
        "name": "One Screen",
        "title": "Start the first available board and stay there",
        "objective": "Open a game whose whole challenge fits on one screen. Start the first available board and stay there. Clear it.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Minimal HUD",
            "description": "Hide optional UI, but keep the quest's required goal and finish indicators visible."
          },
          {
            "scope": "gameplay",
            "title": "No Outside Help",
            "description": "Rely only on the game: no guides, wikis, solution videos, or external maps."
          }
        ]
      },
      "de": {
        "name": "Ein Bildschirm",
        "title": "Starte das erste verfügbare Feld und bleib dort",
        "objective": "Öffne ein Spiel, dessen ganze Herausforderung auf einen Bildschirm passt. Starte das erste verfügbare Feld und bleib dort. Schließe es ab.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Minimales HUD",
            "description": "Blende optionale Anzeigen aus, aber behalte Ziel und Abschluss der Quest sichtbar."
          },
          {
            "scope": "gameplay",
            "title": "Keine externe Hilfe",
            "description": "Verlasse dich nur auf das Spiel: keine Guides, Wikis, Lösungsvideos oder externen Karten."
          }
        ]
      }
    }
  },
  {
    "moodId": "overwhelmed",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 180,
    "translations": {
      "en": {
        "name": "Next Autosave",
        "title": "Continue the current activity and trust the next automatic checkpoint",
        "objective": "Open a familiar game with frequent autosaves. Continue the current activity and trust the next automatic checkpoint. Stop there.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Move Without Rushing",
            "description": "Avoid sprinting, boosting, or skipping ahead; let the journey set the pace."
          },
          {
            "scope": "gameplay",
            "title": "Stop Cleanly",
            "description": "End at a safe save point or result screen without starting something new."
          }
        ]
      },
      "de": {
        "name": "Nächster Autosave",
        "title": "Setze die aktuelle Aktivität fort und vertraue dem nächsten automatischen Kontrollpunkt",
        "objective": "Öffne ein vertrautes Spiel mit häufigen Autosaves. Setze die aktuelle Aktivität fort und vertraue dem nächsten automatischen Kontrollpunkt. Höre dort auf.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Ohne Eile",
            "description": "Vermeide Sprinten, Boosts und Abkürzungen; lass den Weg das Tempo bestimmen."
          },
          {
            "scope": "gameplay",
            "title": "Sauber aufhören",
            "description": "Höre an einem sicheren Speicherpunkt oder Ergebnisbildschirm auf, ohne etwas Neues zu starten."
          }
        ]
      }
    }
  },
  {
    "moodId": "overwhelmed",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 180,
    "translations": {
      "en": {
        "name": "Story Decides",
        "title": "Continue the current scene without searching for alternate choices",
        "objective": "Choose a linear story game that makes few demands on you. Continue the current scene without searching for alternate choices. Reach the scene ending.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Stay on One Goal",
            "description": "Ignore side missions and map markers so the quest stays on one clear goal."
          },
          {
            "scope": "gameplay",
            "title": "Let It Stand",
            "description": "Accept the first honest result, even when reloading or rerolling could improve it."
          }
        ]
      },
      "de": {
        "name": "Geschichte entscheidet",
        "title": "Setze die aktuelle Szene fort, ohne nach alternativen Entscheidungen zu suchen",
        "objective": "Wähle ein lineares Story-Spiel, das wenig von dir verlangt. Setze die aktuelle Szene fort, ohne nach alternativen Entscheidungen zu suchen. Erreiche das Szenenende.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Bleib bei einem Ziel",
            "description": "Ignoriere Nebenmissionen und Kartenmarker, damit die Quest bei einem klaren Ziel bleibt."
          },
          {
            "scope": "gameplay",
            "title": "Lass es gelten",
            "description": "Akzeptiere das erste ehrliche Ergebnis, auch wenn Neuladen oder Neuwürfeln es verbessern könnte."
          }
        ]
      }
    }
  },
  {
    "moodId": "overwhelmed",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 180,
    "translations": {
      "en": {
        "name": "Final Whistle",
        "title": "Queue for exactly one match and decline every rematch",
        "objective": "Open a game with clearly bounded matches. Queue for exactly one match and decline every rematch. Reach its result screen.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keep Your Setup",
            "description": "Keep the current character, loadout, deck, or vehicle for the entire quest."
          },
          {
            "scope": "gameplay",
            "title": "Let It Stand",
            "description": "Accept the first honest result, even when reloading or rerolling could improve it."
          }
        ]
      },
      "de": {
        "name": "Schlusspfiff",
        "title": "Starte genau eines und lehne jede Revanche ab",
        "objective": "Öffne ein Spiel mit klar abgegrenzten Matches. Starte genau eines und lehne jede Revanche ab. Erreiche seinen Ergebnisbildschirm.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Behalte dein Setup",
            "description": "Behalte die aktuelle Figur, Ausrüstung, das Deck oder Fahrzeug während der ganzen Quest."
          },
          {
            "scope": "gameplay",
            "title": "Lass es gelten",
            "description": "Akzeptiere das erste ehrliche Ergebnis, auch wenn Neuladen oder Neuwürfeln es verbessern könnte."
          }
        ]
      }
    }
  },
  {
    "moodId": "overwhelmed",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 180,
    "translations": {
      "en": {
        "name": "One Room",
        "title": "Stay inside it and complete one visible change",
        "objective": "Choose one room where useful work is already waiting. Stay inside it and complete one visible change. Finish the change.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Before and After",
            "description": "Capture the room once before changing it and once after completion."
          },
          {
            "scope": "gameplay",
            "title": "One Main Tool",
            "description": "Choose one tool or action and make it your main answer throughout the quest."
          }
        ]
      },
      "de": {
        "name": "Ein Raum",
        "title": "Bleib darin und vollende eine sichtbare Veränderung",
        "objective": "Wähle einen Raum, in dem bereits eine sinnvolle Aufgabe wartet. Bleib darin und vollende eine sichtbare Veränderung. Stelle die Veränderung fertig.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Vorher und nachher",
            "description": "Fotografiere den Raum einmal vor der Veränderung und einmal nach dem Abschluss."
          },
          {
            "scope": "gameplay",
            "title": "Ein Hauptwerkzeug",
            "description": "Wähle ein Werkzeug oder eine Aktion als deine Hauptlösung für die ganze Quest."
          }
        ]
      }
    }
  },
  {
    "moodId": "overwhelmed",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 180,
    "translations": {
      "en": {
        "name": "One Easy Verb",
        "title": "Repeat only that action until one unit ends",
        "objective": "Choose a game whose main action you can name with one verb. Repeat only that action until one unit ends. Finish the unit.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Play It Out",
            "description": "Continue after mistakes and adapt instead of restarting, reloading, or abandoning the attempt."
          },
          {
            "scope": "gameplay",
            "title": "Keep the First Take",
            "description": "Keep the first complete version and resist adding a second polish pass."
          }
        ]
      },
      "de": {
        "name": "Einfachste Aktion",
        "title": "Wiederhole nur diese Aktion, bis eine Einheit endet",
        "objective": "Wähle ein Spiel, dessen Hauptaktion du mit einem Verb benennen kannst. Wiederhole nur diese Aktion, bis eine Einheit endet. Beende die Einheit.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Spiel es zu Ende",
            "description": "Spiele nach Fehlern weiter und passe dich an, statt neu zu starten oder zu laden."
          },
          {
            "scope": "gameplay",
            "title": "Behalte den ersten Versuch",
            "description": "Behalte die erste vollständige Version und widerstehe einer zweiten Überarbeitungsrunde."
          }
        ]
      }
    }
  },
  {
    "moodId": "overwhelmed",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 180,
    "translations": {
      "en": {
        "name": "Stop Chosen",
        "title": "Play only toward that point",
        "objective": "Choose a familiar game and name one safe stopping point before starting. Play only toward that point. Save and stop at the point you named.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Favorite Setup",
            "description": "Use the character, loadout, deck, or vehicle you most associate with this game."
          },
          {
            "scope": "gameplay",
            "title": "World Audio",
            "description": "Lower the music enough to notice environmental sounds, voices, machinery, and distant activity."
          }
        ]
      },
      "de": {
        "name": "Ausstieg festgelegt",
        "title": "Spiele nur auf diesen Punkt hin",
        "objective": "Wähle ein vertrautes Spiel und benenne vor dem Start einen sicheren Haltepunkt. Spiele nur auf diesen Punkt hin. Speichere und höre an dem Punkt auf, den du benannt hast.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Lieblings-Setup",
            "description": "Nutze die Figur, Ausrüstung, das Deck oder Fahrzeug, das du damit verbindest."
          },
          {
            "scope": "gameplay",
            "title": "Geräusche der Welt",
            "description": "Drehe die Musik so weit herunter, dass du Umgebung, Stimmen und entfernte Aktivität wahrnimmst."
          }
        ]
      }
    }
  },
  {
    "moodId": "overwhelmed",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 180,
    "translations": {
      "en": {
        "name": "Recent History",
        "title": "Start the first one that is ready",
        "objective": "Open your recent-play history and look only at the top three games. Start the first one that is ready. Reach the next save, checkpoint, or result screen.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Let It Stand",
            "description": "Accept the first honest result, even when reloading or rerolling could improve it."
          },
          {
            "scope": "gameplay",
            "title": "Stay on One Goal",
            "description": "Ignore side missions and map markers so the quest stays on one clear goal."
          }
        ]
      },
      "de": {
        "name": "Zuletzt gespielt",
        "title": "Starte das erste, das bereit ist",
        "objective": "Öffne deinen Spielverlauf und schau nur auf die drei neuesten Spiele. Starte das erste, das bereit ist. Erreiche den nächsten Speicherpunkt, Kontrollpunkt oder Ergebnisbildschirm.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Lass es gelten",
            "description": "Akzeptiere das erste ehrliche Ergebnis, auch wenn Neuladen oder Neuwürfeln es verbessern könnte."
          },
          {
            "scope": "gameplay",
            "title": "Bleib bei einem Ziel",
            "description": "Ignoriere Nebenmissionen und Kartenmarker, damit die Quest bei einem klaren Ziel bleibt."
          }
        ]
      }
    }
  },
  {
    "moodId": "overwhelmed",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 180,
    "translations": {
      "en": {
        "name": "Ready Controller",
        "title": "Do not change devices or seating",
        "objective": "Use the controller already in your hands and open the first compatible game. Do not change devices or seating. Reach the next save, checkpoint, or result screen.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keep Your Setup",
            "description": "Keep the current character, loadout, deck, or vehicle for the entire quest."
          },
          {
            "scope": "gameplay",
            "title": "First Instinct",
            "description": "Take the first sincere choice that feels right without comparing every alternative."
          }
        ]
      },
      "de": {
        "name": "Controller bereit",
        "title": "Wechsle weder Gerät noch Platz",
        "objective": "Nutze den Controller, den du bereits in der Hand hältst, und öffne das erste passende Spiel. Wechsle weder Gerät noch Platz. Erreiche den nächsten Speicherpunkt, Kontrollpunkt oder Ergebnisbildschirm.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Behalte dein Setup",
            "description": "Behalte die aktuelle Figur, Ausrüstung, das Deck oder Fahrzeug während der ganzen Quest."
          },
          {
            "scope": "gameplay",
            "title": "Erster Impuls",
            "description": "Nimm die erste ehrliche Wahl, die sich richtig anfühlt, ohne alle Alternativen zu vergleichen."
          }
        ]
      }
    }
  },
  {
    "moodId": "overwhelmed",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 180,
    "translations": {
      "en": {
        "name": "No Download",
        "title": "Start one ready game without updates",
        "objective": "Skip every game asking for a download and open the first ready install. Start immediately. Reach the next save, checkpoint, or result screen.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Let It Stand",
            "description": "Accept the first honest result, even when reloading or rerolling could improve it."
          },
          {
            "scope": "gameplay",
            "title": "Stay on One Goal",
            "description": "Ignore side missions and map markers so the quest stays on one clear goal."
          }
        ]
      },
      "de": {
        "name": "Kein Download",
        "title": "Starte ein bereites Spiel ohne Updates",
        "objective": "Überspringe jedes Spiel mit einem Download und öffne die erste fertige Installation. Starte sofort. Erreiche den nächsten Speicherpunkt, Kontrollpunkt oder Ergebnisbildschirm.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Lass es gelten",
            "description": "Akzeptiere das erste ehrliche Ergebnis, auch wenn Neuladen oder Neuwürfeln es verbessern könnte."
          },
          {
            "scope": "gameplay",
            "title": "Bleib bei einem Ziel",
            "description": "Ignoriere Nebenmissionen und Kartenmarker, damit die Quest bei einem klaren Ziel bleibt."
          }
        ]
      }
    }
  },
  {
    "moodId": "overwhelmed",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 180,
    "translations": {
      "en": {
        "name": "Familiar Menus",
        "title": "Continue the nearest save without browsing other screens",
        "objective": "Choose a game whose menus you can navigate without thought. Continue the nearest save without browsing other screens. Finish one full round, match, task, or test and keep its result.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keep Your Setup",
            "description": "Keep the current character, loadout, deck, or vehicle for the entire quest."
          },
          {
            "scope": "gameplay",
            "title": "Minimal HUD",
            "description": "Hide optional UI, but keep the quest's required goal and finish indicators visible."
          }
        ]
      },
      "de": {
        "name": "Vertraute Menüs",
        "title": "Setze den nächsten Spielstand fort, ohne andere Seiten zu durchsuchen",
        "objective": "Wähle ein Spiel, dessen Menüs du ohne Nachdenken bedienen kannst. Setze den nächsten Spielstand fort, ohne andere Seiten zu durchsuchen. Erreiche ein Ergebnis.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Behalte dein Setup",
            "description": "Behalte die aktuelle Figur, Ausrüstung, das Deck oder Fahrzeug während der ganzen Quest."
          },
          {
            "scope": "gameplay",
            "title": "Minimales HUD",
            "description": "Blende optionale Anzeigen aus, aber behalte Ziel und Abschluss der Quest sichtbar."
          }
        ]
      }
    }
  },
  {
    "moodId": "overwhelmed",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Existing Save",
        "title": "Keep that save open and follow only that task",
        "objective": "Open the first current save with an obvious nearby task. Keep that save open and follow only that task. Reach the next save, checkpoint, or result screen.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Minimal HUD",
            "description": "Hide optional UI, but keep the quest's required goal and finish indicators visible."
          },
          {
            "scope": "gameplay",
            "title": "Let It Stand",
            "description": "Accept the first honest result, even when reloading or rerolling could improve it."
          }
        ]
      },
      "de": {
        "name": "Bestehender Spielstand",
        "title": "Bleib in diesem Spielstand und verfolge nur sie",
        "objective": "Öffne den ersten aktuellen Spielstand mit einer offensichtlichen nahen Aufgabe. Bleib in diesem Spielstand und verfolge nur sie. Erreiche den nächsten Speicherpunkt, Kontrollpunkt oder Ergebnisbildschirm.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Minimales HUD",
            "description": "Blende optionale Anzeigen aus, aber behalte Ziel und Abschluss der Quest sichtbar."
          },
          {
            "scope": "gameplay",
            "title": "Lass es gelten",
            "description": "Akzeptiere das erste ehrliche Ergebnis, auch wenn Neuladen oder Neuwürfeln es verbessern könnte."
          }
        ]
      }
    }
  },
  {
    "moodId": "overwhelmed",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Finite Puzzle Set",
        "title": "Finish the smallest unfinished puzzle-game set",
        "objective": "Open a puzzle game with visibly grouped stages. Choose the smallest unfinished set and begin its first puzzle. Finish the set.",
        "tips": [
          {
            "scope": "game-selection",
            "title": "Separate Puzzles",
            "description": "Choose a puzzle game that shows individual boards or levels."
          },
          {
            "scope": "gameplay",
            "title": "Let It Stand",
            "description": "Accept the first honest result, even when reloading or rerolling could improve it."
          }
        ]
      },
      "de": {
        "name": "Begrenztes Rätselset",
        "title": "Beende im Rätselspiel das kleinste offene Set",
        "objective": "Öffne ein Rätselspiel mit sichtbar gruppierten Stufen. Wähle das kleinste unfertige Set und beginne sein erstes Rätsel. Beende das Set.",
        "tips": [
          {
            "scope": "game-selection",
            "title": "Einzelne Rätsel",
            "description": "Nimm ein Rätselspiel mit einzeln sichtbaren Feldern oder Leveln."
          },
          {
            "scope": "gameplay",
            "title": "Lass es gelten",
            "description": "Akzeptiere das erste ehrliche Ergebnis, auch wenn Neuladen oder Neuwürfeln es verbessern könnte."
          }
        ]
      }
    }
  },
  {
    "moodId": "overwhelmed",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Default Loadout",
        "title": "Select the first default and change nothing",
        "objective": "Open a game with a ready default loadout. Select the first default and change nothing. Reach the next save, checkpoint, or result screen.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Minimal HUD",
            "description": "Hide optional UI, but keep the quest's required goal and finish indicators visible."
          },
          {
            "scope": "gameplay",
            "title": "Let It Stand",
            "description": "Accept the first honest result, even when reloading or rerolling could improve it."
          }
        ]
      },
      "de": {
        "name": "Standard-Loadout",
        "title": "Wähle die erste Voreinstellung und ändere nichts",
        "objective": "Öffne ein Spiel mit einem fertigen Standard-Loadout. Wähle die erste Voreinstellung und ändere nichts. Erreiche den nächsten Speicherpunkt, Kontrollpunkt oder Ergebnisbildschirm.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Minimales HUD",
            "description": "Blende optionale Anzeigen aus, aber behalte Ziel und Abschluss der Quest sichtbar."
          },
          {
            "scope": "gameplay",
            "title": "Lass es gelten",
            "description": "Akzeptiere das erste ehrliche Ergebnis, auch wenn Neuladen oder Neuwürfeln es verbessern könnte."
          }
        ]
      }
    }
  },
  {
    "moodId": "overwhelmed",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 180,
    "translations": {
      "en": {
        "name": "Recommended Difficulty",
        "title": "Accept that setting without researching whether it is right for you",
        "objective": "Open a game with a recommended difficulty. Accept that setting without researching whether it is right for you. Reach the next save, checkpoint, or result screen.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Known Ground",
            "description": "Replay a level you know instead of learning a new route."
          },
          {
            "scope": "gameplay",
            "title": "Minimal HUD",
            "description": "Hide optional UI, but keep the quest's required goal and finish indicators visible."
          }
        ]
      },
      "de": {
        "name": "Empfohlene Schwierigkeit",
        "title": "Akzeptiere ihn, ohne vorher zu recherchieren",
        "objective": "Öffne ein Spiel mit einem empfohlenen Schwierigkeitsgrad. Akzeptiere ihn, ohne vorher zu recherchieren. Erreiche den nächsten Speicherpunkt, Kontrollpunkt oder Ergebnisbildschirm.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Bekanntes Terrain",
            "description": "Wiederhole ein bekanntes Level, statt eine neue Route zu lernen."
          },
          {
            "scope": "gameplay",
            "title": "Minimales HUD",
            "description": "Blende optionale Anzeigen aus, aber behalte Ziel und Abschluss der Quest sichtbar."
          }
        ]
      }
    }
  },
  {
    "moodId": "overwhelmed",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Quietest Save",
        "title": "Complete its nearest small task and ignore every new notification",
        "objective": "Choose the save with the fewest visible alerts. Complete its nearest small task and ignore every new notification. Save again.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "No Optional Loot",
            "description": "Ignore optional loot and keep inventory management to only what progress requires."
          },
          {
            "scope": "gameplay",
            "title": "Minimal HUD",
            "description": "Hide optional UI, but keep the quest's required goal and finish indicators visible."
          }
        ]
      },
      "de": {
        "name": "Ruhigster Spielstand",
        "title": "Beende seine nächste kleine Aufgabe und ignoriere jede neue Meldung",
        "objective": "Wähle den Spielstand mit den wenigsten sichtbaren Hinweisen. Beende seine nächste kleine Aufgabe und ignoriere jede neue Meldung. Speichere erneut.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keine optionale Beute",
            "description": "Ignoriere optionale Beute und beschränke Inventarverwaltung auf das, was der Fortschritt verlangt."
          },
          {
            "scope": "gameplay",
            "title": "Minimales HUD",
            "description": "Blende optionale Anzeigen aus, aber behalte Ziel und Abschluss der Quest sichtbar."
          }
        ]
      }
    }
  },
  {
    "moodId": "overwhelmed",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Exit First",
        "title": "Play directly toward it",
        "objective": "Open a familiar game and state the exact screen where you will stop. Play directly toward it. Reach that screen and stop.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "First Instinct",
            "description": "Take the first sincere choice that feels right without comparing every alternative."
          },
          {
            "scope": "gameplay",
            "title": "World Audio",
            "description": "Lower the music enough to notice environmental sounds, voices, machinery, and distant activity."
          }
        ]
      },
      "de": {
        "name": "Ausstieg zuerst",
        "title": "Spiele direkt darauf zu",
        "objective": "Öffne ein vertrautes Spiel und benenne genau den Bildschirm, an dem du aufhörst. Spiele direkt darauf zu. Erreiche ihn und höre auf.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Erster Impuls",
            "description": "Nimm die erste ehrliche Wahl, die sich richtig anfühlt, ohne alle Alternativen zu vergleichen."
          },
          {
            "scope": "gameplay",
            "title": "Geräusche der Welt",
            "description": "Drehe die Musik so weit herunter, dass du Umgebung, Stimmen und entfernte Aktivität wahrnimmst."
          }
        ]
      }
    }
  },
  {
    "moodId": "overwhelmed",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 180,
    "translations": {
      "en": {
        "name": "Quick Resume",
        "title": "Continue its current activity without opening the library",
        "objective": "Resume the game already suspended on your system. Continue its current activity without opening the library. Reach the next save, checkpoint, or result screen.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Stay on One Goal",
            "description": "Ignore side missions and map markers so the quest stays on one clear goal."
          },
          {
            "scope": "gameplay",
            "title": "Keep Your Setup",
            "description": "Keep the current character, loadout, deck, or vehicle for the entire quest."
          }
        ]
      },
      "de": {
        "name": "Schnell fortgesetzt",
        "title": "Beende seine aktuelle Aktivität, ohne die Bibliothek zu öffnen",
        "objective": "Setze das Spiel fort, das auf deinem System bereits pausiert ist. Beende seine aktuelle Aktivität, ohne die Bibliothek zu öffnen. Schließe sie ab.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Bleib bei einem Ziel",
            "description": "Ignoriere Nebenmissionen und Kartenmarker, damit die Quest bei einem klaren Ziel bleibt."
          },
          {
            "scope": "gameplay",
            "title": "Behalte dein Setup",
            "description": "Behalte die aktuelle Figur, Ausrüstung, das Deck oder Fahrzeug während der ganzen Quest."
          }
        ]
      }
    }
  },
  {
    "moodId": "overwhelmed",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Ready as It Is",
        "title": "Use the first saved preset unchanged",
        "objective": "Open a game with saved presets and select the first one listed. Use the first saved preset unchanged. Finish one full round, match, task, or test and keep its result.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Minimal HUD",
            "description": "Hide optional UI, but keep the quest's required goal and finish indicators visible."
          },
          {
            "scope": "gameplay",
            "title": "World Audio",
            "description": "Lower the music enough to notice environmental sounds, voices, machinery, and distant activity."
          }
        ]
      },
      "de": {
        "name": "Schon bereit",
        "title": "Nutze das erste gespeicherte Preset unverändert",
        "objective": "Öffne ein Spiel mit gespeicherten Presets und wähle das erste in der Liste. Nutze das erste gespeicherte Preset unverändert. Beende eine ganze Runde, ein Match, eine Aufgabe oder einen Test und behalte das Ergebnis.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Minimales HUD",
            "description": "Blende optionale Anzeigen aus, aber behalte Ziel und Abschluss der Quest sichtbar."
          },
          {
            "scope": "gameplay",
            "title": "Geräusche der Welt",
            "description": "Drehe die Musik so weit herunter, dass du Umgebung, Stimmen und entfernte Aktivität wahrnimmst."
          }
        ]
      }
    }
  },
  {
    "moodId": "overwhelmed",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 190,
    "translations": {
      "en": {
        "name": "Last Level",
        "title": "Replay the last completed level without searching for extras",
        "objective": "Open the last campaign level you completed. Replay the last completed level without searching for extras. Reach its ending.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keep Your Setup",
            "description": "Keep the current character, loadout, deck, or vehicle for the entire quest."
          },
          {
            "scope": "gameplay",
            "title": "Stop Cleanly",
            "description": "End at a safe save point or result screen without starting something new."
          }
        ]
      },
      "de": {
        "name": "Letztes Level",
        "title": "Spiele das zuletzt abgeschlossene Level ohne Suche nach Extras erneut",
        "objective": "Öffne das letzte Kampagnenlevel, das du abgeschlossen hast. Spiele das zuletzt abgeschlossene Level ohne Suche nach Extras erneut. Erreiche sein Ende.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Behalte dein Setup",
            "description": "Behalte die aktuelle Figur, Ausrüstung, das Deck oder Fahrzeug während der ganzen Quest."
          },
          {
            "scope": "gameplay",
            "title": "Sauber aufhören",
            "description": "Höre an einem sicheren Speicherpunkt oder Ergebnisbildschirm auf, ohne etwas Neues zu starten."
          }
        ]
      }
    }
  },
  {
    "moodId": "overwhelmed",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "rewardPoints": 160,
    "translations": {
      "en": {
        "name": "One Tutorial",
        "title": "Choose the first lesson and follow every prompt",
        "objective": "Open a game with a short training lesson. Choose the first lesson and follow every prompt. Reach the next save, checkpoint, or result screen.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "No Outside Help",
            "description": "Rely only on the game: no guides, wikis, solution videos, or external maps."
          },
          {
            "scope": "gameplay",
            "title": "Talk It Through",
            "description": "Say your intended move aloud before making it."
          }
        ]
      },
      "de": {
        "name": "Ein Tutorial",
        "title": "Wähle die erste Lektion und folge jeder Anweisung",
        "objective": "Öffne ein Spiel mit einer kurzen Trainingslektion. Wähle die erste Lektion und folge jeder Anweisung. Erreiche den nächsten Speicherpunkt, Kontrollpunkt oder Ergebnisbildschirm.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keine externe Hilfe",
            "description": "Verlasse dich nur auf das Spiel: keine Guides, Wikis, Lösungsvideos oder externen Karten."
          },
          {
            "scope": "gameplay",
            "title": "Sprich es aus",
            "description": "Sage deinen geplanten Zug laut, bevor du ihn ausführst."
          }
        ]
      }
    }
  },
  {
    "moodId": "overwhelmed",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 180,
    "translations": {
      "en": {
        "name": "Middle Pick",
        "title": "Do not compare its neighbors",
        "objective": "Look at the first visible row of installed games and open the one in the middle. Do not compare its neighbors. Reach the next save, checkpoint, or result screen.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "First Instinct",
            "description": "Take the first sincere choice that feels right without comparing every alternative."
          },
          {
            "scope": "gameplay",
            "title": "Let It Stand",
            "description": "Accept the first honest result, even when reloading or rerolling could improve it."
          }
        ]
      },
      "de": {
        "name": "Mittlere Wahl",
        "title": "Vergleiche seine Nachbarn nicht",
        "objective": "Schau auf die erste sichtbare Reihe deiner installierten Spiele und öffne das Spiel in der Mitte. Vergleiche seine Nachbarn nicht. Erreiche den nächsten Speicherpunkt, Kontrollpunkt oder Ergebnisbildschirm.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Erster Impuls",
            "description": "Nimm die erste ehrliche Wahl, die sich richtig anfühlt, ohne alle Alternativen zu vergleichen."
          },
          {
            "scope": "gameplay",
            "title": "Lass es gelten",
            "description": "Akzeptiere das erste ehrliche Ergebnis, auch wenn Neuladen oder Neuwürfeln es verbessern könnte."
          }
        ]
      }
    }
  },
  {
    "moodId": "overwhelmed",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Featured Daily",
        "title": "Accept its default rules and start it",
        "objective": "Open a familiar game showing one featured daily activity. Accept its default rules and start it. Finish the daily.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keep Your Setup",
            "description": "Keep the current character, loadout, deck, or vehicle for the entire quest."
          },
          {
            "scope": "gameplay",
            "title": "Let It Stand",
            "description": "Accept the first honest result, even when reloading or rerolling could improve it."
          }
        ]
      },
      "de": {
        "name": "Hervorgehobene Tagesaufgabe",
        "title": "Akzeptiere ihre Standardregeln und starte sie",
        "objective": "Öffne ein vertrautes Spiel mit einer hervorgehobenen Tagesaufgabe. Akzeptiere ihre Standardregeln und starte sie. Beende die Tagesaufgabe.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Behalte dein Setup",
            "description": "Behalte die aktuelle Figur, Ausrüstung, das Deck oder Fahrzeug während der ganzen Quest."
          },
          {
            "scope": "gameplay",
            "title": "Lass es gelten",
            "description": "Akzeptiere das erste ehrliche Ergebnis, auch wenn Neuladen oder Neuwürfeln es verbessern könnte."
          }
        ]
      }
    }
  },
  {
    "moodId": "restless",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 180,
    "translations": {
      "en": {
        "name": "Instant Motion",
        "title": "Run toward the first visible checkpoint",
        "objective": "Open a game that lets you move immediately. Start running before you can reconsider and choose the first visible checkpoint. Touch the checkpoint you chose.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Minimal HUD",
            "description": "Hide optional UI, but keep the quest's required goal and finish indicators visible."
          },
          {
            "scope": "gameplay",
            "title": "No Map",
            "description": "Navigate through landmarks and memory without opening a map or route overlay."
          }
        ]
      },
      "de": {
        "name": "Sofort in Bewegung",
        "title": "Lauf zum ersten sichtbaren Kontrollpunkt",
        "objective": "Öffne ein Spiel, in dem du dich sofort bewegen kannst. Lauf los, bevor du es zerdenkst, und wähle den ersten sichtbaren Kontrollpunkt. Berühre den gewählten Kontrollpunkt.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Minimales HUD",
            "description": "Blende optionale Anzeigen aus, aber behalte Ziel und Abschluss der Quest sichtbar."
          },
          {
            "scope": "gameplay",
            "title": "Keine Karte",
            "description": "Navigiere mit Orientierungspunkten und Erinnerung, ohne Karte oder eingeblendete Route."
          }
        ]
      }
    }
  },
  {
    "moodId": "restless",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Fast Line",
        "title": "Drive three laps with the same vehicle and no setup changes",
        "objective": "Choose one short racing track you know. Drive three laps with the same vehicle and no setup changes. Keep the fastest clean lap.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Cockpit View",
            "description": "Stay in first-person or cockpit view for the whole journey."
          },
          {
            "scope": "gameplay",
            "title": "Minimal HUD",
            "description": "Hide optional UI, but keep the quest's required goal and finish indicators visible."
          }
        ]
      },
      "de": {
        "name": "Schnelle Linie",
        "title": "Fahre drei Runden mit demselben Fahrzeug und ohne Setup-Änderungen",
        "objective": "Wähle eine kurze Rennstrecke, die du kennst. Fahre drei Runden mit demselben Fahrzeug und ohne Setup-Änderungen. Behalte die schnellste saubere Runde.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Cockpit-Sicht",
            "description": "Bleib während der ganzen Reise in der Ego- oder Cockpit-Perspektive."
          },
          {
            "scope": "gameplay",
            "title": "Minimales HUD",
            "description": "Blende optionale Anzeigen aus, aber behalte Ziel und Abschluss der Quest sichtbar."
          }
        ]
      }
    }
  },
  {
    "moodId": "restless",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 180,
    "translations": {
      "en": {
        "name": "Big Destruction",
        "title": "Commit to bringing that one target down",
        "objective": "Open a game with a large destructible object in reach. Commit to bringing that one target down. Destroy it.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "One Main Tool",
            "description": "Choose one tool or action and make it your main answer throughout the quest."
          },
          {
            "scope": "gameplay",
            "title": "Bring Back One Image",
            "description": "Capture one screenshot that clearly shows the finished result or final stopping point."
          }
        ]
      },
      "de": {
        "name": "Große Zerstörung",
        "title": "Konzentriere dich darauf, genau dieses Ziel zu Fall zu bringen",
        "objective": "Öffne ein Spiel mit einem großen zerstörbaren Objekt in Reichweite. Konzentriere dich darauf, genau dieses Ziel zu Fall zu bringen. Zerstöre es.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Ein Hauptwerkzeug",
            "description": "Wähle ein Werkzeug oder eine Aktion als deine Hauptlösung für die ganze Quest."
          },
          {
            "scope": "gameplay",
            "title": "Bring ein Bild mit",
            "description": "Mache einen Screenshot, der das fertige Ergebnis oder den endgültigen Haltepunkt klar zeigt."
          }
        ]
      }
    }
  },
  {
    "moodId": "restless",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 180,
    "translations": {
      "en": {
        "name": "Rhythm Release",
        "title": "Play three rhythm-game tracks at one difficulty",
        "objective": "Open a rhythm game and choose one difficulty you can sustain. Play three tracks without changing it. Finish all three.",
        "tips": [
          {
            "scope": "game-selection",
            "title": "Rhythm Pick",
            "description": "Choose a rhythm game with grouped tracks and fixed difficulties."
          },
          {
            "scope": "gameplay",
            "title": "Keep the First Take",
            "description": "Keep the first complete version and resist adding a second polish pass."
          }
        ]
      },
      "de": {
        "name": "Rhythmusrausch",
        "title": "Spiel im Rhythmusspiel drei Songs auf einer Schwierigkeit",
        "objective": "Öffne ein Rhythmusspiel und wähle einen Schwierigkeitsgrad, den du halten kannst. Spiele drei Songs, ohne ihn zu ändern. Beende alle drei.",
        "tips": [
          {
            "scope": "game-selection",
            "title": "Rhythmusspiel wählen",
            "description": "Nimm ein Rhythmusspiel mit Songgruppen und festen Schwierigkeiten."
          },
          {
            "scope": "gameplay",
            "title": "Behalte den ersten Versuch",
            "description": "Behalte die erste vollständige Version und widerstehe einer zweiten Überarbeitungsrunde."
          }
        ]
      }
    }
  },
  {
    "moodId": "restless",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Quick Roguelike",
        "title": "Accept the first build you receive and keep moving",
        "objective": "Start a fresh run in a game with clean resets. Accept the first build you receive and keep moving. Continue to its game-over or victory screen.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Play It Out",
            "description": "Continue after mistakes and adapt instead of restarting, reloading, or abandoning the attempt."
          },
          {
            "scope": "gameplay",
            "title": "Let It Stand",
            "description": "Accept the first honest result, even when reloading or rerolling could improve it."
          }
        ]
      },
      "de": {
        "name": "Schneller Roguelike-Run",
        "title": "Akzeptiere den ersten Build und bleib in Bewegung",
        "objective": "Starte einen frischen Run in einem Spiel mit klaren Neustarts. Akzeptiere den ersten Build und bleib in Bewegung. Spiele bis zum Game-over- oder Siegesbildschirm.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Spiel es zu Ende",
            "description": "Spiele nach Fehlern weiter und passe dich an, statt neu zu starten oder zu laden."
          },
          {
            "scope": "gameplay",
            "title": "Lass es gelten",
            "description": "Akzeptiere das erste ehrliche Ergebnis, auch wenn Neuladen oder Neuwürfeln es verbessern könnte."
          }
        ]
      }
    }
  },
  {
    "moodId": "restless",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "Parkour Route",
        "title": "Cross it while deliberately using three different traversal moves",
        "objective": "Choose one area built for expressive movement. Cross it while deliberately using three different traversal moves. Reach the other side.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "No Map",
            "description": "Navigate through landmarks and memory without opening a map or route overlay."
          },
          {
            "scope": "gameplay",
            "title": "Bring Back One Image",
            "description": "Capture one screenshot that clearly shows the finished result or final stopping point."
          }
        ]
      },
      "de": {
        "name": "Parkour-Route",
        "title": "Durchquere ihn bewusst mit drei unterschiedlichen Fortbewegungstechniken",
        "objective": "Wähle einen Bereich für ausdrucksstarke Bewegung. Durchquere ihn bewusst mit drei unterschiedlichen Fortbewegungstechniken. Erreiche die andere Seite.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keine Karte",
            "description": "Navigiere mit Orientierungspunkten und Erinnerung, ohne Karte oder eingeblendete Route."
          },
          {
            "scope": "gameplay",
            "title": "Bring ein Bild mit",
            "description": "Mache einen Screenshot, der das fertige Ergebnis oder den endgültigen Haltepunkt klar zeigt."
          }
        ]
      }
    }
  },
  {
    "moodId": "restless",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Fastest Arena",
        "title": "Enter the first match without warming up elsewhere",
        "objective": "Open the game with the fastest available competitive queue. Enter the first match without warming up elsewhere. Finish one full match or timed challenge and keep its result screen.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keep Your Setup",
            "description": "Keep the current character, loadout, deck, or vehicle for the entire quest."
          },
          {
            "scope": "gameplay",
            "title": "Let It Stand",
            "description": "Accept the first honest result, even when reloading or rerolling could improve it."
          }
        ]
      },
      "de": {
        "name": "Schnellste Arena",
        "title": "Tritt ohne Aufwärmen dem ersten Match bei",
        "objective": "Öffne das Spiel mit der schnellsten verfügbaren Wettkampf-Warteschlange. Tritt ohne Aufwärmen dem ersten Match bei. Beende das Ergebnis.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Behalte dein Setup",
            "description": "Behalte die aktuelle Figur, Ausrüstung, das Deck oder Fahrzeug während der ganzen Quest."
          },
          {
            "scope": "gameplay",
            "title": "Lass es gelten",
            "description": "Akzeptiere das erste ehrliche Ergebnis, auch wenn Neuladen oder Neuwürfeln es verbessern könnte."
          }
        ]
      }
    }
  },
  {
    "moodId": "restless",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Living Combo",
        "title": "Try to beat that exact count twice",
        "objective": "Choose a game that counts combos and record your first attempt. Try to beat that exact count twice. Finish three attempts.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keep Your Setup",
            "description": "Keep the current character, loadout, deck, or vehicle for the entire quest."
          },
          {
            "scope": "gameplay",
            "title": "Minimal HUD",
            "description": "Hide optional UI, but keep the quest's required goal and finish indicators visible."
          }
        ]
      },
      "de": {
        "name": "Laufende Combo",
        "title": "Versuche diesen Wert zweimal zu schlagen",
        "objective": "Wähle ein Spiel mit Kombo-Zähler und notiere deinen ersten Versuch. Versuche diesen Wert zweimal zu schlagen. Beende drei Versuche.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Behalte dein Setup",
            "description": "Behalte die aktuelle Figur, Ausrüstung, das Deck oder Fahrzeug während der ganzen Quest."
          },
          {
            "scope": "gameplay",
            "title": "Minimales HUD",
            "description": "Blende optionale Anzeigen aus, aber behalte Ziel und Abschluss der Quest sichtbar."
          }
        ]
      }
    }
  },
  {
    "moodId": "restless",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Chase Finished",
        "title": "Enter the chase and commit until it resolves",
        "objective": "Open a game with a chase you can reach quickly. Enter the chase and commit until it resolves. Escape or catch the target.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Play It Out",
            "description": "Continue after mistakes and adapt instead of restarting, reloading, or abandoning the attempt."
          },
          {
            "scope": "gameplay",
            "title": "Stop Cleanly",
            "description": "End at a safe save point or result screen without starting something new."
          }
        ]
      },
      "de": {
        "name": "Verfolgung beendet",
        "title": "Starte die Verfolgung und bleib bis zur Entscheidung dabei",
        "objective": "Öffne ein Spiel mit einer schnell erreichbaren Verfolgungsjagd. Starte die Verfolgung und bleib bis zur Entscheidung dabei. Entkomme oder fange das Ziel.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Spiel es zu Ende",
            "description": "Spiele nach Fehlern weiter und passe dich an, statt neu zu starten oder zu laden."
          },
          {
            "scope": "gameplay",
            "title": "Sauber aufhören",
            "description": "Höre an einem sicheren Speicherpunkt oder Ergebnisbildschirm auf, ohne etwas Neues zu starten."
          }
        ]
      }
    }
  },
  {
    "moodId": "restless",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "Boss Now",
        "title": "Go directly to the arena without changing your build first",
        "objective": "Open a save with a boss already nearby. Go directly to the arena without changing your build first. Win or make three full attempts.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Damage Budget",
            "description": "Choose a clear damage limit before starting and stop the attempt when it is spent."
          },
          {
            "scope": "gameplay",
            "title": "No Optional Recovery",
            "description": "Use no optional healing or repair items; recover only when the game requires it."
          }
        ]
      },
      "de": {
        "name": "Direkt zum Boss",
        "title": "Geh direkt zur Arena, ohne vorher deinen Build zu ändern",
        "objective": "Öffne einen Spielstand mit einem Boss in der Nähe. Geh direkt zur Arena, ohne vorher deinen Build zu ändern. Gewinne oder unternimm drei vollständige Versuche.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Schadensbudget",
            "description": "Lege vor dem Start ein klares Schadenslimit fest und stoppe, wenn es aufgebraucht ist."
          },
          {
            "scope": "gameplay",
            "title": "Keine optionale Heilung",
            "description": "Nutze keine optionalen Heil- oder Reparaturgegenstände; erhole dich nur, wenn das Spiel es verlangt."
          }
        ]
      }
    }
  },
  {
    "moodId": "restless",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 180,
    "translations": {
      "en": {
        "name": "One Period",
        "title": "Finish the shortest complete sports-game format",
        "objective": "Open one sports game and start its shortest complete format. Keep the normal clock and current roster. Finish the period or match.",
        "tips": [
          {
            "scope": "game-selection",
            "title": "Sports Pick",
            "description": "Choose a sports game with a complete short match or event."
          },
          {
            "scope": "gameplay",
            "title": "Let It Stand",
            "description": "Accept the first honest result, even when reloading or rerolling could improve it."
          }
        ]
      },
      "de": {
        "name": "Ein Spielabschnitt",
        "title": "Beende im Sportspiel das kürzeste vollständige Format",
        "objective": "Öffne ein Sportspiel und starte sein kürzestes vollständiges Format. Behalte die normale Uhr und den aktuellen Kader. Beende den Abschnitt oder das Match.",
        "tips": [
          {
            "scope": "game-selection",
            "title": "Sportspiel wählen",
            "description": "Nimm ein Sportspiel mit kurzem vollständigem Match oder Event."
          },
          {
            "scope": "gameplay",
            "title": "Lass es gelten",
            "description": "Akzeptiere das erste ehrliche Ergebnis, auch wenn Neuladen oder Neuwürfeln es verbessern könnte."
          }
        ]
      }
    }
  },
  {
    "moodId": "restless",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Takeoff",
        "title": "Plan one short route and leave the ground",
        "objective": "Choose a game that lets you take off immediately. Plan one short route and leave the ground. Land safely.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Minimal HUD",
            "description": "Hide optional UI, but keep the quest's required goal and finish indicators visible."
          },
          {
            "scope": "gameplay",
            "title": "Stop Cleanly",
            "description": "End at a safe save point or result screen without starting something new."
          }
        ]
      },
      "de": {
        "name": "Abheben",
        "title": "Plane eine kurze Route und verlasse den Boden",
        "objective": "Wähle ein Spiel, in dem du sofort abheben kannst. Plane eine kurze Route und verlasse den Boden. Lande sicher.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Minimales HUD",
            "description": "Blende optionale Anzeigen aus, aber behalte Ziel und Abschluss der Quest sichtbar."
          },
          {
            "scope": "gameplay",
            "title": "Sauber aufhören",
            "description": "Höre an einem sicheren Speicherpunkt oder Ergebnisbildschirm auf, ohne etwas Neues zu starten."
          }
        ]
      }
    }
  },
  {
    "moodId": "restless",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "One Vehicle",
        "title": "Stay inside that vehicle for the whole journey",
        "objective": "Pick one vehicle and set a destination you can reach with it. Stay inside that vehicle for the whole journey. Arrive.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keep Your Setup",
            "description": "Keep the current character, loadout, deck, or vehicle for the entire quest."
          },
          {
            "scope": "gameplay",
            "title": "No Fast Travel",
            "description": "Travel through the playable world instead of skipping the journey through a menu."
          }
        ]
      },
      "de": {
        "name": "Ein Fahrzeug",
        "title": "Bleib während der ganzen Reise darin",
        "objective": "Wähle ein Fahrzeug und setze ein Ziel, das du damit erreichen kannst. Bleib während der ganzen Reise darin. Komm an.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Behalte dein Setup",
            "description": "Behalte die aktuelle Figur, Ausrüstung, das Deck oder Fahrzeug während der ganzen Quest."
          },
          {
            "scope": "gameplay",
            "title": "Keine Schnellreise",
            "description": "Reise durch die spielbare Welt, statt den Weg über ein Menü zu überspringen."
          }
        ]
      }
    }
  },
  {
    "moodId": "restless",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "Swarm Cleared",
        "title": "Enter the encounter and clear every target on screen",
        "objective": "Open a game with a full enemy wave ready. Enter the encounter and clear every target on screen. Finish the wave.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "One Main Tool",
            "description": "Choose one tool or action and make it your main answer throughout the quest."
          },
          {
            "scope": "gameplay",
            "title": "Keep One in Reserve",
            "description": "Finish with at least one use of a limited resource still available."
          }
        ]
      },
      "de": {
        "name": "Schwarm beseitigt",
        "title": "Betritt die Begegnung und beseitige jedes Ziel auf dem Bildschirm",
        "objective": "Öffne ein Spiel mit einer vollständigen Gegnerwelle. Betritt die Begegnung und beseitige jedes Ziel auf dem Bildschirm. Beende die Welle.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Ein Hauptwerkzeug",
            "description": "Wähle ein Werkzeug oder eine Aktion als deine Hauptlösung für die ganze Quest."
          },
          {
            "scope": "gameplay",
            "title": "Behalte eine Reserve",
            "description": "Beende die Quest mit mindestens einer übrigen Nutzung einer begrenzten Ressource."
          }
        ]
      }
    }
  },
  {
    "moodId": "restless",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Countdown Beaten",
        "title": "Follow one countdown to its result",
        "objective": "Choose one challenge with a visible countdown. Start the timed objective immediately and follow its clock to the result. Clear it or make three attempts.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Minimal HUD",
            "description": "Hide optional UI, but keep the quest's required goal and finish indicators visible."
          },
          {
            "scope": "gameplay",
            "title": "Keep Your Setup",
            "description": "Keep the current character, loadout, deck, or vehicle for the entire quest."
          }
        ]
      },
      "de": {
        "name": "Countdown geschlagen",
        "title": "Folge einem Countdown bis zum Ergebnis",
        "objective": "Wähle eine Herausforderung mit sichtbarem Countdown. Starte die zeitbegrenzte Aufgabe sofort und folge ihrer Uhr bis zum Ergebnis. Schaffe sie oder unternimm drei Versuche.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Minimales HUD",
            "description": "Blende optionale Anzeigen aus, aber behalte Ziel und Abschluss der Quest sichtbar."
          },
          {
            "scope": "gameplay",
            "title": "Behalte dein Setup",
            "description": "Behalte die aktuelle Figur, Ausrüstung, das Deck oder Fahrzeug während der ganzen Quest."
          }
        ]
      }
    }
  },
  {
    "moodId": "restless",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "Positioning Win",
        "title": "Keep your current gear and solve the problem through movement alone",
        "objective": "Choose one activity where positioning matters. Keep your current gear and solve the problem through movement alone. Finish one full match or timed challenge and keep its result screen.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "No Upgrades",
            "description": "Buy, unlock, and equip no upgrades until the current quest is finished."
          },
          {
            "scope": "gameplay",
            "title": "Minimal HUD",
            "description": "Hide optional UI, but keep the quest's required goal and finish indicators visible."
          }
        ]
      },
      "de": {
        "name": "Sieg durch Positionierung",
        "title": "Behalte deine Ausrüstung und löse das Problem nur durch Bewegung",
        "objective": "Wähle eine Aktivität, in der Positionierung zählt. Behalte deine Ausrüstung und löse das Problem nur durch Bewegung. Beende eine ganze Runde, ein Match, eine Aufgabe oder einen Test und behalte das Ergebnis.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keine Upgrades",
            "description": "Kaufe, schalte frei und rüste nichts auf, bis die aktuelle Quest beendet ist."
          },
          {
            "scope": "gameplay",
            "title": "Minimales HUD",
            "description": "Blende optionale Anzeigen aus, aber behalte Ziel und Abschluss der Quest sichtbar."
          }
        ]
      }
    }
  },
  {
    "moodId": "restless",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 180,
    "translations": {
      "en": {
        "name": "Physical Soundtrack",
        "title": "Make the music central and start one energetic activity",
        "objective": "Open the game with the soundtrack that feels most physical. Make the music central and start one energetic activity. Reach the next save, checkpoint, or result screen.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Listen First",
            "description": "Pause for dialogue and world sounds, then let them guide your next action."
          },
          {
            "scope": "gameplay",
            "title": "Keep Your Setup",
            "description": "Keep the current character, loadout, deck, or vehicle for the entire quest."
          }
        ]
      },
      "de": {
        "name": "Energiegeladener Soundtrack",
        "title": "Stell die Musik in den Mittelpunkt und starte eine energiegeladene Aktivität",
        "objective": "Öffne das Spiel mit dem körperlichsten Soundtrack. Stell die Musik in den Mittelpunkt und starte eine energiegeladene Aktivität. Erreiche den nächsten Speicherpunkt, Kontrollpunkt oder Ergebnisbildschirm.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Hör zuerst zu",
            "description": "Halte für Dialoge und Weltgeräusche inne und lass sie den nächsten Schritt bestimmen."
          },
          {
            "scope": "gameplay",
            "title": "Behalte dein Setup",
            "description": "Behalte die aktuelle Figur, Ausrüstung, das Deck oder Fahrzeug während der ganzen Quest."
          }
        ]
      }
    }
  },
  {
    "moodId": "restless",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Pure Reflex",
        "title": "Trust your first reactions",
        "objective": "Choose a fast game and enter its first challenge without warming up. Trust your first reactions. Finish one full result.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Use Basic Gear",
            "description": "Leave your strongest or rarest option unused and solve the quest with ordinary gear."
          },
          {
            "scope": "gameplay",
            "title": "No Outside Help",
            "description": "Rely only on the game: no guides, wikis, solution videos, or external maps."
          }
        ]
      },
      "de": {
        "name": "Reiner Reflex",
        "title": "Vertraue deinen ersten Reaktionen",
        "objective": "Wähle ein schnelles Spiel und geh ohne Aufwärmen in die erste Herausforderung. Vertraue deinen ersten Reaktionen. Beende eine ganze Runde, ein Match, eine Aufgabe oder einen Test und behalte das Ergebnis.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Nutze einfache Ausrüstung",
            "description": "Lass deine stärkste oder seltenste Option ungenutzt und löse die Quest mit gewöhnlicher Ausrüstung."
          },
          {
            "scope": "gameplay",
            "title": "Keine externe Hilfe",
            "description": "Verlasse dich nur auf das Spiel: keine Guides, Wikis, Lösungsvideos oder externen Karten."
          }
        ]
      }
    }
  },
  {
    "moodId": "restless",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "Higher View",
        "title": "Climb toward it without using fast travel",
        "objective": "Open a world with a high landmark you can already see. Climb toward it without using fast travel. Reach the higher view.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Bring Back One Image",
            "description": "Capture one screenshot that clearly shows the finished result or final stopping point."
          },
          {
            "scope": "gameplay",
            "title": "No Map",
            "description": "Navigate through landmarks and memory without opening a map or route overlay."
          }
        ]
      },
      "de": {
        "name": "Höhere Aussicht",
        "title": "Klettere ohne Schnellreise dorthin",
        "objective": "Öffne eine Welt mit einem hohen Orientierungspunkt, den du schon sehen kannst. Klettere ohne Schnellreise dorthin. Erreiche die höhere Aussicht.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Bring ein Bild mit",
            "description": "Mache einen Screenshot, der das fertige Ergebnis oder den endgültigen Haltepunkt klar zeigt."
          },
          {
            "scope": "gameplay",
            "title": "Keine Karte",
            "description": "Navigiere mit Orientierungspunkten und Erinnerung, ohne Karte oder eingeblendete Route."
          }
        ]
      }
    }
  },
  {
    "moodId": "restless",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "New Trick",
        "title": "Practice it in the same spot until it becomes repeatable",
        "objective": "Choose one trick you have never landed cleanly. Practice it in the same spot until it becomes repeatable. Land it three times.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "No Outside Help",
            "description": "Rely only on the game: no guides, wikis, solution videos, or external maps."
          },
          {
            "scope": "gameplay",
            "title": "Bring Back One Image",
            "description": "Capture one screenshot that clearly shows the finished result or final stopping point."
          }
        ]
      },
      "de": {
        "name": "Neuer Trick",
        "title": "Übe ihn am selben Ort, bis er wiederholbar wird",
        "objective": "Wähle einen Trick, den du noch nie sauber geschafft hast. Übe ihn am selben Ort, bis er wiederholbar wird. Lande ihn dreimal.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keine externe Hilfe",
            "description": "Verlasse dich nur auf das Spiel: keine Guides, Wikis, Lösungsvideos oder externen Karten."
          },
          {
            "scope": "gameplay",
            "title": "Bring ein Bild mit",
            "description": "Mache einen Screenshot, der das fertige Ergebnis oder den endgültigen Haltepunkt klar zeigt."
          }
        ]
      }
    }
  },
  {
    "moodId": "restless",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 180,
    "translations": {
      "en": {
        "name": "Moving Puzzle",
        "title": "Clear one real-time puzzle-game board",
        "objective": "Open a puzzle game that keeps moving while you think. Start one board and commit to its pace. Clear the board.",
        "tips": [
          {
            "scope": "game-selection",
            "title": "Separate Puzzles",
            "description": "Choose a puzzle game that shows individual boards or levels."
          },
          {
            "scope": "gameplay",
            "title": "First Instinct",
            "description": "Take the first sincere choice that feels right without comparing every alternative."
          }
        ]
      },
      "de": {
        "name": "Rätsel in Bewegung",
        "title": "Löse im Echtzeit-Rätselspiel ein Spielfeld",
        "objective": "Öffne ein Rätselspiel, das sich während des Denkens weiterbewegt. Starte ein Feld und akzeptiere sein Tempo. Schließe das Feld ab.",
        "tips": [
          {
            "scope": "game-selection",
            "title": "Einzelne Rätsel",
            "description": "Nimm ein Rätselspiel mit einzeln sichtbaren Feldern oder Leveln."
          },
          {
            "scope": "gameplay",
            "title": "Erster Impuls",
            "description": "Nimm die erste ehrliche Wahl, die sich richtig anfühlt, ohne alle Alternativen zu vergleichen."
          }
        ]
      }
    }
  },
  {
    "moodId": "restless",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "No Detours",
        "title": "Take the direct route and refuse every optional detour",
        "objective": "Choose one objective that rewards forward pressure. Take the direct route and refuse every optional detour. Reach the objective.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Stay on One Goal",
            "description": "Ignore side missions and map markers so the quest stays on one clear goal."
          },
          {
            "scope": "gameplay",
            "title": "Keep Your Setup",
            "description": "Keep the current character, loadout, deck, or vehicle for the entire quest."
          }
        ]
      },
      "de": {
        "name": "Keine Umwege",
        "title": "Nimm den direkten Weg und lehne jeden optionalen Umweg ab",
        "objective": "Wähle ein Ziel, das Vorwärtsdruck belohnt. Nimm den direkten Weg und lehne jeden optionalen Umweg ab. Erreiche das Ziel.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Bleib bei einem Ziel",
            "description": "Ignoriere Nebenmissionen und Kartenmarker, damit die Quest bei einem klaren Ziel bleibt."
          },
          {
            "scope": "gameplay",
            "title": "Behalte dein Setup",
            "description": "Behalte die aktuelle Figur, Ausrüstung, das Deck oder Fahrzeug während der ganzen Quest."
          }
        ]
      }
    }
  },
  {
    "moodId": "restless",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "Heavy Machinery",
        "title": "Use the heavy vehicle for one complete job without switching",
        "objective": "Choose the heaviest machine you can control in one game. Use the heavy vehicle for one complete job without switching. Finish the job.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keep Your Setup",
            "description": "Keep the current character, loadout, deck, or vehicle for the entire quest."
          },
          {
            "scope": "gameplay",
            "title": "Keep Your Role",
            "description": "Choose one team responsibility and keep serving it through the complete result."
          }
        ]
      },
      "de": {
        "name": "Schwere Maschine",
        "title": "Nutze das schwere Fahrzeug für einen ganzen Auftrag ohne Wechsel",
        "objective": "Wähle die schwerste Maschine, die du in einem Spiel steuern kannst. Nutze das schwere Fahrzeug für einen ganzen Auftrag ohne Wechsel. Beende den Auftrag.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Behalte dein Setup",
            "description": "Behalte die aktuelle Figur, Ausrüstung, das Deck oder Fahrzeug während der ganzen Quest."
          },
          {
            "scope": "gameplay",
            "title": "Bleib in deiner Rolle",
            "description": "Wähle eine Teamaufgabe und erfülle sie bis zum vollständigen Ergebnis."
          }
        ]
      }
    }
  },
  {
    "moodId": "restless",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Through the Crowd",
        "title": "Avoid collisions and do not start a fight",
        "objective": "Choose one crowded area and cross it on foot. Avoid collisions and do not start a fight. Reach the far side.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Avoid Optional Combat",
            "description": "Avoid fights that are not required; use movement, dialogue, stealth, or patience instead."
          },
          {
            "scope": "gameplay",
            "title": "Minimal HUD",
            "description": "Hide optional UI, but keep the quest's required goal and finish indicators visible."
          }
        ]
      },
      "de": {
        "name": "Durch die Menge",
        "title": "Vermeide Zusammenstöße und beginne keinen Kampf",
        "objective": "Wähle einen überfüllten Bereich und durchquere ihn zu Fuß. Vermeide Zusammenstöße und beginne keinen Kampf. Erreiche die andere Seite.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Vermeide optionale Kämpfe",
            "description": "Vermeide unnötige Kämpfe und nutze stattdessen Bewegung, Dialoge, Schleichen oder Geduld."
          },
          {
            "scope": "gameplay",
            "title": "Minimales HUD",
            "description": "Blende optionale Anzeigen aus, aber behalte Ziel und Abschluss der Quest sichtbar."
          }
        ]
      }
    }
  },
  {
    "moodId": "restless",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Three-Result Streak",
        "title": "Keep the same option between attempts",
        "objective": "Open a game with short results and aim for a streak of three. Keep the same option between attempts. Win or clear three in a row.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keep Your Setup",
            "description": "Keep the current character, loadout, deck, or vehicle for the entire quest."
          },
          {
            "scope": "gameplay",
            "title": "Let It Stand",
            "description": "Accept the first honest result, even when reloading or rerolling could improve it."
          }
        ]
      },
      "de": {
        "name": "Dreierserie",
        "title": "Behalte zwischen den Versuchen dieselbe Option",
        "objective": "Öffne ein Spiel mit kurzen Ergebnissen und ziele auf eine Dreierserie. Behalte zwischen den Versuchen dieselbe Option. Gewinne oder schaffe drei in Folge.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Behalte dein Setup",
            "description": "Behalte die aktuelle Figur, Ausrüstung, das Deck oder Fahrzeug während der ganzen Quest."
          },
          {
            "scope": "gameplay",
            "title": "Lass es gelten",
            "description": "Akzeptiere das erste ehrliche Ergebnis, auch wenn Neuladen oder Neuwürfeln es verbessern könnte."
          }
        ]
      }
    }
  },
  {
    "moodId": "restless",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Hub Escape",
        "title": "Leave the hub for one unplanned landmark",
        "objective": "Open a save currently sitting at its safe hub. Leave immediately and follow the first unplanned landmark you notice. Reach the unplanned landmark.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "First Instinct",
            "description": "Take the first sincere choice that feels right without comparing every alternative."
          },
          {
            "scope": "gameplay",
            "title": "No Map",
            "description": "Navigate through landmarks and memory without opening a map or route overlay."
          }
        ]
      },
      "de": {
        "name": "Raus aus dem Hub",
        "title": "Verlasse den Treffpunkt für einen ungeplanten Orientierungspunkt",
        "objective": "Öffne einen Spielstand an seiner sicheren Basis. Verlasse sie sofort und folge dem ersten ungeplanten Orientierungspunkt, der dir auffällt. Erreiche den ungeplanten Orientierungspunkt.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Erster Impuls",
            "description": "Nimm die erste ehrliche Wahl, die sich richtig anfühlt, ohne alle Alternativen zu vergleichen."
          },
          {
            "scope": "gameplay",
            "title": "Keine Karte",
            "description": "Navigiere mit Orientierungspunkten und Erinnerung, ohne Karte oder eingeblendete Route."
          }
        ]
      }
    }
  },
  {
    "moodId": "restless",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Motion to the End",
        "title": "Keep going without pausing or hiding in a safe spot",
        "objective": "Start one run that ends when you stop moving. Keep going without pausing or hiding in a safe spot. Continue to its game-over or victory screen.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Play It Out",
            "description": "Continue after mistakes and adapt instead of restarting, reloading, or abandoning the attempt."
          },
          {
            "scope": "gameplay",
            "title": "Let It Stand",
            "description": "Accept the first honest result, even when reloading or rerolling could improve it."
          }
        ]
      },
      "de": {
        "name": "Bewegung bis zum Ende",
        "title": "Bleib ohne Pause oder Versteck in Bewegung",
        "objective": "Starte einen Run, der endet, wenn du nicht weiterkommst. Bleib ohne Pause oder Versteck in Bewegung. Spiele bis zum Game-over- oder Siegesbildschirm.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Spiel es zu Ende",
            "description": "Spiele nach Fehlern weiter und passe dich an, statt neu zu starten oder zu laden."
          },
          {
            "scope": "gameplay",
            "title": "Lass es gelten",
            "description": "Akzeptiere das erste ehrliche Ergebnis, auch wenn Neuladen oder Neuwürfeln es verbessern könnte."
          }
        ]
      }
    }
  },
  {
    "moodId": "restless",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "Team Tempo",
        "title": "Initiate each clear opportunity instead of waiting",
        "objective": "Join one team activity and choose the role that sets its pace. Initiate each clear opportunity instead of waiting. Finish the team result.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "No Microphone Needed",
            "description": "Keep the microphone off and communicate through pings, movement, emotes, or short text."
          },
          {
            "scope": "gameplay",
            "title": "Help First",
            "description": "Assist, rescue, or share with someone before pursuing your own result."
          }
        ]
      },
      "de": {
        "name": "Teamtempo",
        "title": "Eröffne jede klare Gelegenheit, statt zu warten",
        "objective": "Tritt einer Teamaktivität bei und wähle die Rolle, die ihr Tempo bestimmt. Eröffne jede klare Gelegenheit, statt zu warten. Beende das Teamergebnis.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Kein Mikrofon nötig",
            "description": "Lass das Mikrofon aus und kommuniziere mit Pings, Bewegung, Emotes oder kurzem Text."
          },
          {
            "scope": "gameplay",
            "title": "Hilf zuerst",
            "description": "Hilf, rette oder teile mit jemandem, bevor du dein eigenes Ergebnis verfolgst."
          }
        ]
      }
    }
  },
  {
    "moodId": "restless",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "rewardPoints": 180,
    "translations": {
      "en": {
        "name": "Physical Finish",
        "title": "Start one complete routine at a comfortable intensity",
        "objective": "Open a game that asks you to move your body. Start one complete routine at a comfortable intensity. Finish the routine and notice how your body feels afterward.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keep the First Take",
            "description": "Keep the first complete version and resist adding a second polish pass."
          },
          {
            "scope": "gameplay",
            "title": "Stop Cleanly",
            "description": "End at a safe save point or result screen without starting something new."
          }
        ]
      },
      "de": {
        "name": "Bewegter Abschluss",
        "title": "Starte eine vollständige Routine mit angenehmer Intensität",
        "objective": "Öffne ein Spiel, das deinen Körper in Bewegung bringt. Starte eine vollständige Routine mit angenehmer Intensität. Beende die Routine und achte darauf, wie sich dein Körper danach anfühlt.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Behalte den ersten Versuch",
            "description": "Behalte die erste vollständige Version und widerstehe einer zweiten Überarbeitungsrunde."
          },
          {
            "scope": "gameplay",
            "title": "Sauber aufhören",
            "description": "Höre an einem sicheren Speicherpunkt oder Ergebnisbildschirm auf, ohne etwas Neues zu starten."
          }
        ]
      }
    }
  },
  {
    "moodId": "restless",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "Last Spark",
        "title": "Spend your energy on it without starting a second one",
        "objective": "Choose one fast activity that ends at a calm screen. Spend your energy on it without starting a second one. Stop at the next checkpoint, result screen, or home area.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "World Audio",
            "description": "Lower the music enough to notice environmental sounds, voices, machinery, and distant activity."
          },
          {
            "scope": "gameplay",
            "title": "Keep Your Setup",
            "description": "Keep the current character, loadout, deck, or vehicle for the entire quest."
          }
        ]
      },
      "de": {
        "name": "Letzter Energieschub",
        "title": "Gib deine Energie dafür aus und starte keine zweite",
        "objective": "Wähle eine schnelle Aktivität, die an einem ruhigen Bildschirm endet. Gib deine Energie dafür aus und starte keine zweite. Stoppe am nächsten Kontrollpunkt, Ergebnisbildschirm oder Heimatort.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Geräusche der Welt",
            "description": "Drehe die Musik so weit herunter, dass du Umgebung, Stimmen und entfernte Aktivität wahrnimmst."
          },
          {
            "scope": "gameplay",
            "title": "Behalte dein Setup",
            "description": "Behalte die aktuelle Figur, Ausrüstung, das Deck oder Fahrzeug während der ganzen Quest."
          }
        ]
      }
    }
  },
  {
    "moodId": "restless",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 210,
    "translations": {
      "en": {
        "name": "Twin-Stick Arena",
        "title": "Keep moving around its outer edge while clearing enemies",
        "objective": "Open a twin-stick game and enter one arena. Keep moving around its outer edge while clearing enemies. Clear the arena.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "One Main Tool",
            "description": "Choose one tool or action and make it your main answer throughout the quest."
          },
          {
            "scope": "gameplay",
            "title": "Keep One in Reserve",
            "description": "Finish with at least one use of a limited resource still available."
          }
        ]
      },
      "de": {
        "name": "Twin-Stick-Arena",
        "title": "Bleib am äußeren Rand in Bewegung, während du Gegner beseitigst",
        "objective": "Öffne ein Twin-Stick-Spiel und betritt eine Arena. Bleib am äußeren Rand in Bewegung, während du Gegner beseitigst. Säubere die Arena.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Ein Hauptwerkzeug",
            "description": "Wähle ein Werkzeug oder eine Aktion als deine Hauptlösung für die ganze Quest."
          },
          {
            "scope": "gameplay",
            "title": "Behalte eine Reserve",
            "description": "Beende die Quest mit mindestens einer übrigen Nutzung einer begrenzten Ressource."
          }
        ]
      }
    }
  },
  {
    "moodId": "restless",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "Hack-and-Slash Room",
        "title": "Keep the same weapon until every enemy is gone",
        "objective": "Choose one combat room in a hack-and-slash game. Keep the same weapon until every enemy is gone. Clear the room.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keep One in Reserve",
            "description": "Finish with at least one use of a limited resource still available."
          },
          {
            "scope": "gameplay",
            "title": "One Move Deeper",
            "description": "Choose one mechanic and use it deliberately in three different situations."
          }
        ]
      },
      "de": {
        "name": "Hack-and-Slash-Raum",
        "title": "Behalte dieselbe Waffe, bis jeder Gegner besiegt ist",
        "objective": "Wähle einen Kampfraum in einem Hack-and-Slash-Spiel. Behalte dieselbe Waffe, bis jeder Gegner besiegt ist. Säubere den Raum.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Behalte eine Reserve",
            "description": "Beende die Quest mit mindestens einer übrigen Nutzung einer begrenzten Ressource."
          },
          {
            "scope": "gameplay",
            "title": "Eine Technik tiefer",
            "description": "Wähle eine Mechanik und nutze sie bewusst in drei unterschiedlichen Situationen."
          }
        ]
      }
    }
  },
  {
    "moodId": "restless",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "rewardPoints": 170,
    "translations": {
      "en": {
        "name": "Pinball Table",
        "title": "Learn its main shot instead of switching tables",
        "objective": "Choose one pinball table and play exactly three balls. Learn its main shot instead of switching tables. Record the best score.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Sound Timing",
            "description": "Follow audio cues instead of watching only the score or timing bar."
          },
          {
            "scope": "gameplay",
            "title": "Let It Stand",
            "description": "Accept the first honest result, even when reloading or rerolling could improve it."
          }
        ]
      },
      "de": {
        "name": "Flipperrunde",
        "title": "Lerne seinen wichtigsten Schuss, statt den Tisch zu wechseln",
        "objective": "Wähle einen Flippertisch und spiele genau drei Kugeln. Lerne seinen wichtigsten Schuss, statt den Tisch zu wechseln. Halte den besten Punktestand fest.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Nach Gehör",
            "description": "Folge Tonsignalen statt nur auf Punkte oder Timing-Anzeigen zu schauen."
          },
          {
            "scope": "gameplay",
            "title": "Lass es gelten",
            "description": "Akzeptiere das erste ehrliche Ergebnis, auch wenn Neuladen oder Neuwürfeln es verbessern könnte."
          }
        ]
      }
    }
  },
  {
    "moodId": "restless",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 210,
    "translations": {
      "en": {
        "name": "Skate Line",
        "title": "Link them into one continuous line without stopping",
        "objective": "Choose three nearby landmarks in a trick game. Link them into one continuous line without stopping. Land the full line.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "One Move Deeper",
            "description": "Choose one mechanic and use it deliberately in three different situations."
          },
          {
            "scope": "gameplay",
            "title": "Three Attempts",
            "description": "Give the same challenge three complete attempts without changing the target between them."
          }
        ]
      },
      "de": {
        "name": "Skate-Line",
        "title": "Verbinde sie ohne Pause zu einer durchgehenden Linie",
        "objective": "Wähle drei nahe Orientierungspunkte in einem Trickspiel. Verbinde sie ohne Pause zu einer durchgehenden Linie. Lande die ganze Linie.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Eine Technik tiefer",
            "description": "Wähle eine Mechanik und nutze sie bewusst in drei unterschiedlichen Situationen."
          },
          {
            "scope": "gameplay",
            "title": "Drei Versuche",
            "description": "Gib derselben Herausforderung drei vollständige Versuche, ohne das Ziel dazwischen zu wechseln."
          }
        ]
      }
    }
  },
  {
    "moodId": "restless",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 210,
    "translations": {
      "en": {
        "name": "Beat-'Em-Up Stage",
        "title": "Keep the same character from its opening to the boss",
        "objective": "Open a beat-'em-up and choose one stage. Keep the same character from its opening to the boss. Clear the stage.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Damage Budget",
            "description": "Choose a clear damage limit before starting and stop the attempt when it is spent."
          },
          {
            "scope": "gameplay",
            "title": "Play It Out",
            "description": "Continue after mistakes and adapt instead of restarting, reloading, or abandoning the attempt."
          }
        ]
      },
      "de": {
        "name": "Beat-'Em-up-Etappe",
        "title": "Behalte vom Anfang bis zum Boss dieselbe Figur",
        "objective": "Öffne ein Beat-'em-up und wähle eine Stage. Behalte vom Anfang bis zum Boss dieselbe Figur. Schließe die Stage ab.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Schadensbudget",
            "description": "Lege vor dem Start ein klares Schadenslimit fest und stoppe, wenn es aufgebraucht ist."
          },
          {
            "scope": "gameplay",
            "title": "Spiel es zu Ende",
            "description": "Spiele nach Fehlern weiter und passe dich an, statt neu zu starten oder zu laden."
          }
        ]
      }
    }
  },
  {
    "moodId": "restless",
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 30,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "Zerg Rush",
        "title": "Build only what that pressure plan needs",
        "objective": "Start one real-time strategy skirmish with an early attack in mind. Build only what that pressure plan needs. Finish the match.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Stay on One Goal",
            "description": "Ignore side missions and map markers so the quest stays on one clear goal."
          },
          {
            "scope": "gameplay",
            "title": "Keep Your Setup",
            "description": "Keep the current character, loadout, deck, or vehicle for the entire quest."
          }
        ]
      },
      "de": {
        "name": "Zerg Rush",
        "title": "Baue nur, was dieser Druckplan braucht",
        "objective": "Starte ein Echtzeitstrategie-Gefecht mit einem frühen Angriff im Kopf. Baue nur, was dieser Druckplan braucht. Beende das Match.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Bleib bei einem Ziel",
            "description": "Ignoriere Nebenmissionen und Kartenmarker, damit die Quest bei einem klaren Ziel bleibt."
          },
          {
            "scope": "gameplay",
            "title": "Behalte dein Setup",
            "description": "Behalte die aktuelle Figur, Ausrüstung, das Deck oder Fahrzeug während der ganzen Quest."
          }
        ]
      }
    }
  },
  {
    "moodId": "focused",
    "minimumDurationMinutes": 10,
    "suggestedDurationMinutes": 20,
    "rewardPoints": 250,
    "translations": {
      "en": {
        "name": "Story Thread",
        "title": "Follow that quest alone and ignore every new side marker",
        "objective": "Open a campaign with an active main quest. Follow that quest alone and ignore every new side marker. Finish its next named step.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "No Optional Loot",
            "description": "Ignore optional loot and keep inventory management to only what progress requires."
          },
          {
            "scope": "gameplay",
            "title": "Stop Cleanly",
            "description": "End at a safe save point or result screen without starting something new."
          }
        ]
      },
      "de": {
        "name": "Handlungsstrang",
        "title": "Folge nur ihr und ignoriere jeden neuen Nebenmarker",
        "objective": "Öffne eine Kampagne mit einer aktiven Hauptquest. Folge nur ihr und ignoriere jeden neuen Nebenmarker. Beende ihren nächsten benannten Schritt.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keine optionale Beute",
            "description": "Ignoriere optionale Beute und beschränke Inventarverwaltung auf das, was der Fortschritt verlangt."
          },
          {
            "scope": "gameplay",
            "title": "Sauber aufhören",
            "description": "Höre an einem sicheren Speicherpunkt oder Ergebnisbildschirm auf, ohne etwas Neues zu starten."
          }
        ]
      }
    }
  },
  {
    "moodId": "focused",
    "minimumDurationMinutes": 10,
    "suggestedDurationMinutes": 20,
    "rewardPoints": 250,
    "translations": {
      "en": {
        "name": "Hard Puzzle",
        "title": "Reconstruct what you know and test one idea at a time",
        "objective": "Return to one puzzle that already resisted you, reconstruct what you know, and solve it or finish three complete attempts without changing puzzles.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "No Outside Help",
            "description": "Rely only on the game: no guides, wikis, solution videos, or external maps."
          },
          {
            "scope": "gameplay",
            "title": "Stay on One Goal",
            "description": "Ignore side missions and map markers so the quest stays on one clear goal."
          }
        ]
      },
      "de": {
        "name": "Schwieriges Rätsel",
        "title": "Rekonstruiere dein Wissen und teste jeweils eine Idee",
        "objective": "Kehre zu einem Rätsel zurück, das dir widerstanden hat, rekonstruiere dein Wissen und löse es oder beende drei vollständige Versuche ohne Rätselwechsel.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keine externe Hilfe",
            "description": "Verlasse dich nur auf das Spiel: keine Guides, Wikis, Lösungsvideos oder externen Karten."
          },
          {
            "scope": "gameplay",
            "title": "Bleib bei einem Ziel",
            "description": "Ignoriere Nebenmissionen und Kartenmarker, damit die Quest bei einem klaren Ziel bleibt."
          }
        ]
      }
    }
  },
  {
    "moodId": "focused",
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 20,
    "rewardPoints": 250,
    "translations": {
      "en": {
        "name": "Boss Study",
        "title": "Name three attack patterns before chasing the win",
        "objective": "Observe one boss until you can name three attack patterns, then finish the current attempt at victory or defeat.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Three Attempts",
            "description": "Give the same challenge three complete attempts without changing the target between them."
          },
          {
            "scope": "gameplay",
            "title": "One Move Deeper",
            "description": "Choose one mechanic and use it deliberately in three different situations."
          }
        ]
      },
      "de": {
        "name": "Bossstudie",
        "title": "Benenne drei Angriffsmuster, bevor du den Sieg jagst",
        "objective": "Beobachte einen Boss, bis du drei Angriffsmuster benennen kannst, und beende dann den aktuellen Versuch mit Sieg oder Niederlage.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Drei Versuche",
            "description": "Gib derselben Herausforderung drei vollständige Versuche, ohne das Ziel dazwischen zu wechseln."
          },
          {
            "scope": "gameplay",
            "title": "Eine Technik tiefer",
            "description": "Wähle eine Mechanik und nutze sie bewusst in drei unterschiedlichen Situationen."
          }
        ]
      }
    }
  },
  {
    "moodId": "focused",
    "minimumDurationMinutes": 10,
    "suggestedDurationMinutes": 20,
    "rewardPoints": 250,
    "translations": {
      "en": {
        "name": "Working System",
        "title": "Build a complete system that produces only that output",
        "objective": "Open a building game and name one output you need. Build a complete system that produces only that output. Run one stable cycle.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Local Materials",
            "description": "Build only with materials already available in the current place or nearby storage."
          },
          {
            "scope": "gameplay",
            "title": "One Main Tool",
            "description": "Choose one tool or action and make it your main answer throughout the quest."
          }
        ]
      },
      "de": {
        "name": "Funktionierendes System",
        "title": "Baue ein vollständiges System, das nur dieses Ergebnis erzeugt",
        "objective": "Öffne ein Bauspiel und benenne einen benötigten Ausgang. Baue ein vollständiges System, das nur dieses Ergebnis erzeugt. Lass einen stabilen Zyklus laufen.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Lokale Materialien",
            "description": "Baue nur mit Materialien, die bereits vor Ort oder in einem nahen Lager sind."
          },
          {
            "scope": "gameplay",
            "title": "Ein Hauptwerkzeug",
            "description": "Wähle ein Werkzeug oder eine Aktion als deine Hauptlösung für die ganze Quest."
          }
        ]
      }
    }
  },
  {
    "moodId": "focused",
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 20,
    "rewardPoints": 250,
    "translations": {
      "en": {
        "name": "Achievement Path",
        "title": "Follow its checklist without pursuing other rewards",
        "objective": "Open a game with one achievement that has several clear steps. Follow its checklist without pursuing other rewards. Unlock it or finish all reachable steps.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "No Optional Loot",
            "description": "Ignore optional loot and keep inventory management to only what progress requires."
          },
          {
            "scope": "gameplay",
            "title": "No Outside Help",
            "description": "Rely only on the game: no guides, wikis, solution videos, or external maps."
          }
        ]
      },
      "de": {
        "name": "Erfolgsweg",
        "title": "Folge seiner Liste und ignoriere andere Belohnungen",
        "objective": "Öffne ein Spiel mit einem Achievement aus mehreren klaren Schritten. Folge seiner Liste und ignoriere andere Belohnungen. Schalte es frei oder erledige alle erreichbaren Schritte.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keine optionale Beute",
            "description": "Ignoriere optionale Beute und beschränke Inventarverwaltung auf das, was der Fortschritt verlangt."
          },
          {
            "scope": "gameplay",
            "title": "Keine externe Hilfe",
            "description": "Verlasse dich nur auf das Spiel: keine Guides, Wikis, Lösungsvideos oder externen Karten."
          }
        ]
      }
    }
  },
  {
    "moodId": "focused",
    "minimumDurationMinutes": 10,
    "suggestedDurationMinutes": 20,
    "rewardPoints": 240,
    "translations": {
      "en": {
        "name": "Story Chapter",
        "title": "Read every line and keep your attention on that chapter alone",
        "objective": "Open a story game at the start of a chapter. Read every line and keep your attention on that chapter alone. Reach its ending.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Listen First",
            "description": "Pause for dialogue and world sounds, then let them guide your next action."
          },
          {
            "scope": "gameplay",
            "title": "First Instinct",
            "description": "Take the first sincere choice that feels right without comparing every alternative."
          }
        ]
      },
      "de": {
        "name": "Story-Kapitel",
        "title": "Lies jede Zeile und bleib nur bei diesem Kapitel",
        "objective": "Öffne ein Story-Spiel am Anfang eines Kapitels. Lies jede Zeile und bleib nur bei diesem Kapitel. Erreiche sein Ende.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Hör zuerst zu",
            "description": "Halte für Dialoge und Weltgeräusche inne und lass sie den nächsten Schritt bestimmen."
          },
          {
            "scope": "gameplay",
            "title": "Erster Impuls",
            "description": "Nimm die erste ehrliche Wahl, die sich richtig anfühlt, ohne alle Alternativen zu vergleichen."
          }
        ]
      }
    }
  },
  {
    "moodId": "focused",
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 20,
    "rewardPoints": 240,
    "translations": {
      "en": {
        "name": "Unchanged Deck",
        "title": "Learn from its weaknesses instead of editing between results",
        "objective": "Choose one ready card deck and lock it before playing. Learn from its weaknesses instead of editing between results. Finish three matches or one run.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keep Your Setup",
            "description": "Keep the current character, loadout, deck, or vehicle for the entire quest."
          },
          {
            "scope": "gameplay",
            "title": "Let It Stand",
            "description": "Accept the first honest result, even when reloading or rerolling could improve it."
          }
        ]
      },
      "de": {
        "name": "Unverändertes Deck",
        "title": "Lerne aus seinen Schwächen, statt es zwischen Ergebnissen zu ändern",
        "objective": "Wähle ein fertiges Kartendeck und sperre es vor dem Spiel. Lerne aus seinen Schwächen, statt es zwischen Ergebnissen zu ändern. Beende drei Matches oder einen Run.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Behalte dein Setup",
            "description": "Behalte die aktuelle Figur, Ausrüstung, das Deck oder Fahrzeug während der ganzen Quest."
          },
          {
            "scope": "gameplay",
            "title": "Lass es gelten",
            "description": "Akzeptiere das erste ehrliche Ergebnis, auch wenn Neuladen oder Neuwürfeln es verbessern könnte."
          }
        ]
      }
    }
  },
  {
    "moodId": "focused",
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 20,
    "rewardPoints": 240,
    "translations": {
      "en": {
        "name": "Single Character",
        "title": "Keep that character for every round",
        "objective": "Pick one playable character before entering the next activity. Keep that character for every round. Reach the next save, checkpoint, or result screen.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Let It Stand",
            "description": "Accept the first honest result, even when reloading or rerolling could improve it."
          },
          {
            "scope": "gameplay",
            "title": "One Move Deeper",
            "description": "Choose one mechanic and use it deliberately in three different situations."
          }
        ]
      },
      "de": {
        "name": "Eine Figur",
        "title": "Behalte sie für jede Runde",
        "objective": "Wähle vor der nächsten Aktivität genau eine spielbare Figur. Behalte sie für jede Runde. Erreiche den nächsten Speicherpunkt, Kontrollpunkt oder Ergebnisbildschirm.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Lass es gelten",
            "description": "Akzeptiere das erste ehrliche Ergebnis, auch wenn Neuladen oder Neuwürfeln es verbessern könnte."
          },
          {
            "scope": "gameplay",
            "title": "Eine Technik tiefer",
            "description": "Wähle eine Mechanik und nutze sie bewusst in drei unterschiedlichen Situationen."
          }
        ]
      }
    }
  },
  {
    "moodId": "focused",
    "minimumDurationMinutes": 10,
    "suggestedDurationMinutes": 20,
    "rewardPoints": 250,
    "translations": {
      "en": {
        "name": "Collectible Set",
        "title": "Search only for the missing items in that set",
        "objective": "Open a save with one small collectible set already partly complete. Search only for the missing items in that set. Find them all.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Bring Back One Image",
            "description": "Capture one screenshot that clearly shows the finished result or final stopping point."
          },
          {
            "scope": "gameplay",
            "title": "No Map",
            "description": "Navigate through landmarks and memory without opening a map or route overlay."
          }
        ]
      },
      "de": {
        "name": "Sammelset",
        "title": "Suche nur nach den fehlenden Teilen dieses Sets",
        "objective": "Öffne einen Spielstand mit einem kleinen, teilweise vollständigen Sammelset. Suche nur nach den fehlenden Teilen dieses Sets. Finde sie alle.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Bring ein Bild mit",
            "description": "Mache einen Screenshot, der das fertige Ergebnis oder den endgültigen Haltepunkt klar zeigt."
          },
          {
            "scope": "gameplay",
            "title": "Keine Karte",
            "description": "Navigiere mit Orientierungspunkten und Erinnerung, ohne Karte oder eingeblendete Route."
          }
        ]
      }
    }
  },
  {
    "moodId": "focused",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 230,
    "translations": {
      "en": {
        "name": "Route Mastery",
        "title": "Focus each attempt on improving the same weak section",
        "objective": "Choose one repeatable route and run it three times. Focus each attempt on improving the same weak section. Complete all three.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Minimal HUD",
            "description": "Hide optional UI, but keep the quest's required goal and finish indicators visible."
          },
          {
            "scope": "gameplay",
            "title": "Bring Back One Image",
            "description": "Capture one screenshot that clearly shows the finished result or final stopping point."
          }
        ]
      },
      "de": {
        "name": "Route gemeistert",
        "title": "Verbessere bei jedem Versuch dieselbe schwache Passage",
        "objective": "Wähle eine wiederholbare Route und spiele sie dreimal. Verbessere bei jedem Versuch dieselbe schwache Passage. Beende alle drei.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Minimales HUD",
            "description": "Blende optionale Anzeigen aus, aber behalte Ziel und Abschluss der Quest sichtbar."
          },
          {
            "scope": "gameplay",
            "title": "Bring ein Bild mit",
            "description": "Mache einen Screenshot, der das fertige Ergebnis oder den endgültigen Haltepunkt klar zeigt."
          }
        ]
      }
    }
  },
  {
    "moodId": "focused",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 230,
    "translations": {
      "en": {
        "name": "Move Practice",
        "title": "Perform it correctly ten times, then enter real play",
        "objective": "Choose one move you can isolate in training. Perform it correctly ten times, then enter real play. Use it once in context.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "No Outside Help",
            "description": "Rely only on the game: no guides, wikis, solution videos, or external maps."
          },
          {
            "scope": "gameplay",
            "title": "Keep Your Setup",
            "description": "Keep the current character, loadout, deck, or vehicle for the entire quest."
          }
        ]
      },
      "de": {
        "name": "Zugtraining",
        "title": "Führe sie zehnmal korrekt aus und geh dann ins echte Spiel",
        "objective": "Wähle eine Technik, die du im Training isolieren kannst. Führe sie zehnmal korrekt aus und geh dann ins echte Spiel. Nutze sie einmal im Kontext.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keine externe Hilfe",
            "description": "Verlasse dich nur auf das Spiel: keine Guides, Wikis, Lösungsvideos oder externen Karten."
          },
          {
            "scope": "gameplay",
            "title": "Behalte dein Setup",
            "description": "Behalte die aktuelle Figur, Ausrüstung, das Deck oder Fahrzeug während der ganzen Quest."
          }
        ]
      }
    }
  },
  {
    "moodId": "focused",
    "minimumDurationMinutes": 10,
    "suggestedDurationMinutes": 30,
    "rewardPoints": 250,
    "translations": {
      "en": {
        "name": "City Block",
        "title": "Complete that block without expanding beyond its edge",
        "objective": "Choose one bounded city block and define its purpose. Complete that block without expanding beyond its edge. Make it functional.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Before and After",
            "description": "Capture the room once before changing it and once after completion."
          },
          {
            "scope": "gameplay",
            "title": "Local Materials",
            "description": "Build only with materials already available in the current place or nearby storage."
          }
        ]
      },
      "de": {
        "name": "Stadtblock",
        "title": "Stelle ihn fertig, ohne über seinen Rand hinauszubauen",
        "objective": "Wähle einen klar begrenzten Stadtblock und bestimme seinen Zweck. Stelle ihn fertig, ohne über seinen Rand hinauszubauen. Mach ihn funktionsfähig.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Vorher und nachher",
            "description": "Fotografiere den Raum einmal vor der Veränderung und einmal nach dem Abschluss."
          },
          {
            "scope": "gameplay",
            "title": "Lokale Materialien",
            "description": "Baue nur mit Materialien, die bereits vor Ort oder in einem nahen Lager sind."
          }
        ]
      }
    }
  },
  {
    "moodId": "focused",
    "minimumDurationMinutes": 10,
    "suggestedDurationMinutes": 20,
    "rewardPoints": 250,
    "translations": {
      "en": {
        "name": "Named Questline",
        "title": "Follow only that thread, even when new quests appear",
        "objective": "Choose one named questline and pin its next step. Follow only that thread, even when new quests appear. Finish two steps.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Full Dialogue",
            "description": "Let every spoken or written line finish before advancing."
          },
          {
            "scope": "gameplay",
            "title": "No Optional Loot",
            "description": "Ignore optional loot and keep inventory management to only what progress requires."
          }
        ]
      },
      "de": {
        "name": "Benannte Questreihe",
        "title": "Folge nur diesem Strang, auch wenn neue Quests erscheinen",
        "objective": "Wähle eine benannte Questreihe und markiere ihren nächsten Schritt. Folge nur diesem Strang, auch wenn neue Quests erscheinen. Beende zwei Schritte.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Ganzer Dialog",
            "description": "Lass jede gesprochene oder geschriebene Zeile enden, bevor du fortfährst."
          },
          {
            "scope": "gameplay",
            "title": "Keine optionale Beute",
            "description": "Ignoriere optionale Beute und beschränke Inventarverwaltung auf das, was der Fortschritt verlangt."
          }
        ]
      }
    }
  },
  {
    "moodId": "focused",
    "minimumDurationMinutes": 10,
    "suggestedDurationMinutes": 30,
    "rewardPoints": 250,
    "translations": {
      "en": {
        "name": "Competitive Set",
        "title": "Keep that goal through three complete results",
        "objective": "Choose one learning goal before entering competitive play. Keep that goal through three complete results. Finish all three.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keep Your Setup",
            "description": "Keep the current character, loadout, deck, or vehicle for the entire quest."
          },
          {
            "scope": "gameplay",
            "title": "Let It Stand",
            "description": "Accept the first honest result, even when reloading or rerolling could improve it."
          }
        ]
      },
      "de": {
        "name": "Wettkampfset",
        "title": "Behalte dieses Ziel über drei vollständige Ergebnisse hinweg",
        "objective": "Wähle ein Lernziel, bevor du kompetitiv spielst. Behalte dieses Ziel über drei vollständige Ergebnisse hinweg. Beende alle drei.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Behalte dein Setup",
            "description": "Behalte die aktuelle Figur, Ausrüstung, das Deck oder Fahrzeug während der ganzen Quest."
          },
          {
            "scope": "gameplay",
            "title": "Lass es gelten",
            "description": "Akzeptiere das erste ehrliche Ergebnis, auch wenn Neuladen oder Neuwürfeln es verbessern könnte."
          }
        ]
      }
    }
  },
  {
    "moodId": "focused",
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 20,
    "rewardPoints": 240,
    "translations": {
      "en": {
        "name": "Complete Object",
        "title": "Gather only its required parts",
        "objective": "Choose one useful object you can craft from start to finish. Gather only its required parts. Craft and use it.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Use What You Find",
            "description": "Make one useful item, tool, or resource found during the quest part of your plan."
          },
          {
            "scope": "gameplay",
            "title": "Local Materials",
            "description": "Build only with materials already available in the current place or nearby storage."
          }
        ]
      },
      "de": {
        "name": "Fertiges Objekt",
        "title": "Sammle nur seine benötigten Teile",
        "objective": "Wähle einen nützlichen Gegenstand, den du vollständig herstellen kannst. Sammle nur seine benötigten Teile. Stelle und nutze ihn.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Nutze deinen Fund",
            "description": "Mach einen nützlichen Gegenstand, ein Werkzeug oder eine Ressource aus der Quest zum Teil deines Plans."
          },
          {
            "scope": "gameplay",
            "title": "Lokale Materialien",
            "description": "Baue nur mit Materialien, die bereits vor Ort oder in einem nahen Lager sind."
          }
        ]
      }
    }
  },
  {
    "moodId": "focused",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "Single Subject",
        "title": "Do not switch subjects halfway through",
        "objective": "Choose one visual subject and photograph it from five distinct angles. Do not switch subjects halfway through. Keep one final image.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "One Space",
            "description": "Keep every action and change inside one small, clearly bounded area."
          },
          {
            "scope": "gameplay",
            "title": "Keep the First Take",
            "description": "Keep the first complete version and resist adding a second polish pass."
          }
        ]
      },
      "de": {
        "name": "Ein Motiv",
        "title": "Wechsle das Motiv nicht",
        "objective": "Wähle ein visuelles Motiv und fotografiere es aus fünf unterschiedlichen Winkeln. Wechsle das Motiv nicht. Behalte ein finales Bild.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Ein Bereich",
            "description": "Beschränke jede Aktion und Änderung auf einen kleinen, klar abgegrenzten Bereich."
          },
          {
            "scope": "gameplay",
            "title": "Behalte den ersten Versuch",
            "description": "Behalte die erste vollständige Version und widerstehe einer zweiten Überarbeitungsrunde."
          }
        ]
      }
    }
  },
  {
    "moodId": "focused",
    "minimumDurationMinutes": 10,
    "suggestedDurationMinutes": 30,
    "rewardPoints": 250,
    "translations": {
      "en": {
        "name": "One Strategy",
        "title": "Follow that plan through setbacks instead of changing direction",
        "objective": "State one strategy before the next complete match. Follow that plan through setbacks instead of changing direction. Reach the result.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Let It Stand",
            "description": "Accept the first honest result, even when reloading or rerolling could improve it."
          },
          {
            "scope": "gameplay",
            "title": "Play It Out",
            "description": "Continue after mistakes and adapt instead of restarting, reloading, or abandoning the attempt."
          }
        ]
      },
      "de": {
        "name": "Eine Strategie",
        "title": "Folge diesem Plan trotz Rückschlägen, statt die Richtung zu wechseln",
        "objective": "Benenne vor dem nächsten vollständigen Match eine Strategie. Folge diesem Plan trotz Rückschlägen, statt die Richtung zu wechseln. Erreiche das Ergebnis.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Lass es gelten",
            "description": "Akzeptiere das erste ehrliche Ergebnis, auch wenn Neuladen oder Neuwürfeln es verbessern könnte."
          },
          {
            "scope": "gameplay",
            "title": "Spiel es zu Ende",
            "description": "Spiele nach Fehlern weiter und passe dich an, statt neu zu starten oder zu laden."
          }
        ]
      }
    }
  },
  {
    "moodId": "focused",
    "minimumDurationMinutes": 10,
    "suggestedDurationMinutes": 20,
    "rewardPoints": 250,
    "translations": {
      "en": {
        "name": "Every Clue",
        "title": "Pause when needed instead of skipping",
        "objective": "Open one story case and commit to every spoken and written clue. Pause when needed instead of skipping. Finish the case.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Listen First",
            "description": "Pause for dialogue and world sounds, then let them guide your next action."
          },
          {
            "scope": "gameplay",
            "title": "No Outside Help",
            "description": "Rely only on the game: no guides, wikis, solution videos, or external maps."
          }
        ]
      },
      "de": {
        "name": "Jeder Hinweis",
        "title": "Pausiere bei Bedarf, statt zu überspringen",
        "objective": "Öffne einen Story-Fall und konzentriere dich auf jeden gesprochenen und geschriebenen Hinweis. Pausiere bei Bedarf, statt zu überspringen. Beende den Fall.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Hör zuerst zu",
            "description": "Halte für Dialoge und Weltgeräusche inne und lass sie den nächsten Schritt bestimmen."
          },
          {
            "scope": "gameplay",
            "title": "Keine externe Hilfe",
            "description": "Verlasse dich nur auf das Spiel: keine Guides, Wikis, Lösungsvideos oder externen Karten."
          }
        ]
      }
    }
  },
  {
    "moodId": "focused",
    "minimumDurationMinutes": 10,
    "suggestedDurationMinutes": 20,
    "rewardPoints": 250,
    "translations": {
      "en": {
        "name": "Save Rescue",
        "title": "Identify your location, resources, and immediate goal before acting",
        "objective": "Open one complex save you no longer understand. Identify your location, resources, and immediate goal before acting. Finish one task and save a next step.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keep Your Setup",
            "description": "Keep the current character, loadout, deck, or vehicle for the entire quest."
          },
          {
            "scope": "gameplay",
            "title": "Stay on One Goal",
            "description": "Ignore side missions and map markers so the quest stays on one clear goal."
          }
        ]
      },
      "de": {
        "name": "Spielstand gerettet",
        "title": "Bestimme Ort, Ressourcen und nächstes Ziel, bevor du handelst",
        "objective": "Öffne einen komplexen Spielstand, den du nicht mehr verstehst. Bestimme Ort, Ressourcen und nächstes Ziel, bevor du handelst. Beende eine Aufgabe und speichere einen nächsten Schritt.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Behalte dein Setup",
            "description": "Behalte die aktuelle Figur, Ausrüstung, das Deck oder Fahrzeug während der ganzen Quest."
          },
          {
            "scope": "gameplay",
            "title": "Bleib bei einem Ziel",
            "description": "Ignoriere Nebenmissionen und Kartenmarker, damit die Quest bei einem klaren Ziel bleibt."
          }
        ]
      }
    }
  },
  {
    "moodId": "focused",
    "minimumDurationMinutes": 10,
    "suggestedDurationMinutes": 30,
    "rewardPoints": 250,
    "translations": {
      "en": {
        "name": "Balanced Economy",
        "title": "Fix that flow without expanding the system",
        "objective": "Open one economy with a resource currently running short. Fix that flow without expanding the system. Keep every critical resource nonnegative for a full cycle.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Stay on One Goal",
            "description": "Ignore side missions and map markers so the quest stays on one clear goal."
          },
          {
            "scope": "gameplay",
            "title": "Keep One in Reserve",
            "description": "Finish with at least one use of a limited resource still available."
          }
        ]
      },
      "de": {
        "name": "Stabile Wirtschaft",
        "title": "Repariere diesen Fluss, ohne das System zu vergrößern",
        "objective": "Öffne eine Wirtschaft mit einer aktuell knappen Ressource. Repariere diesen Fluss, ohne das System zu vergrößern. Halte alle wichtigen Ressourcen einen Zyklus lang positiv.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Bleib bei einem Ziel",
            "description": "Ignoriere Nebenmissionen und Kartenmarker, damit die Quest bei einem klaren Ziel bleibt."
          },
          {
            "scope": "gameplay",
            "title": "Behalte eine Reserve",
            "description": "Beende die Quest mit mindestens einer übrigen Nutzung einer begrenzten Ressource."
          }
        ]
      }
    }
  },
  {
    "moodId": "focused",
    "minimumDurationMinutes": 10,
    "suggestedDurationMinutes": 30,
    "rewardPoints": 250,
    "translations": {
      "en": {
        "name": "One Dungeon",
        "title": "Stay inside until you reach its designed endpoint",
        "objective": "Choose one bounded dungeon and prepare before entering. Stay inside until you reach its designed endpoint. Reach the exit or boss result.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keep Your Setup",
            "description": "Keep the current character, loadout, deck, or vehicle for the entire quest."
          },
          {
            "scope": "gameplay",
            "title": "No Optional Loot",
            "description": "Ignore optional loot and keep inventory management to only what progress requires."
          }
        ]
      },
      "de": {
        "name": "Ein Dungeon",
        "title": "Bleib darin bis zu seinem vorgesehenen Endpunkt",
        "objective": "Wähle einen klar begrenzten Dungeon und bereite dich vor dem Eintritt vor. Bleib darin bis zu seinem vorgesehenen Endpunkt. Erreiche Ausgang oder Bossergebnis.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Behalte dein Setup",
            "description": "Behalte die aktuelle Figur, Ausrüstung, das Deck oder Fahrzeug während der ganzen Quest."
          },
          {
            "scope": "gameplay",
            "title": "Keine optionale Beute",
            "description": "Ignoriere optionale Beute und beschränke Inventarverwaltung auf das, was der Fortschritt verlangt."
          }
        ]
      }
    }
  },
  {
    "moodId": "focused",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "Single Soundscape",
        "title": "Cross it without using music as a cue",
        "objective": "Choose one atmospheric location and turn your attention to environmental sound. Cross it without using music as a cue. Reach the far side.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "World Audio",
            "description": "Lower the music enough to notice environmental sounds, voices, machinery, and distant activity."
          },
          {
            "scope": "gameplay",
            "title": "One Space",
            "description": "Keep every action and change inside one small, clearly bounded area."
          }
        ]
      },
      "de": {
        "name": "Ein Klangraum",
        "title": "Durchquere ihn, ohne Musik als Hinweis zu nutzen",
        "objective": "Wähle einen atmosphärischen Ort und konzentriere dich auf Umgebungsgeräusche. Durchquere ihn, ohne Musik als Hinweis zu nutzen. Erreiche die andere Seite.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Geräusche der Welt",
            "description": "Drehe die Musik so weit herunter, dass du Umgebung, Stimmen und entfernte Aktivität wahrnimmst."
          },
          {
            "scope": "gameplay",
            "title": "Ein Bereich",
            "description": "Beschränke jede Aktion und Änderung auf einen kleinen, klar abgegrenzten Bereich."
          }
        ]
      }
    }
  },
  {
    "moodId": "focused",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "Character Study",
        "title": "Read their current record, then start the next available conversation",
        "objective": "Choose one character you want to understand better. Read their current record, then start the next available conversation. Finish that conversation.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Listen First",
            "description": "Pause for dialogue and world sounds, then let them guide your next action."
          },
          {
            "scope": "gameplay",
            "title": "Full Dialogue",
            "description": "Let every spoken or written line finish before advancing."
          }
        ]
      },
      "de": {
        "name": "Figurenstudie",
        "title": "Lies ihren aktuellen Eintrag und starte dann das nächste verfügbare Gespräch",
        "objective": "Wähle eine Figur, die du besser verstehen möchtest. Lies ihren aktuellen Eintrag und starte dann das nächste verfügbare Gespräch. Beende dieses Gespräch.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Hör zuerst zu",
            "description": "Halte für Dialoge und Weltgeräusche inne und lass sie den nächsten Schritt bestimmen."
          },
          {
            "scope": "gameplay",
            "title": "Ganzer Dialog",
            "description": "Lass jede gesprochene oder geschriebene Zeile enden, bevor du fortfährst."
          }
        ]
      }
    }
  },
  {
    "moodId": "focused",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "One Number",
        "title": "Make three attempts focused only on that value",
        "objective": "Choose one number the game measures and ignore every other statistic. Make three attempts focused only on that value. Improve it.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Minimal HUD",
            "description": "Hide optional UI, but keep the quest's required goal and finish indicators visible."
          },
          {
            "scope": "gameplay",
            "title": "Keep Your Setup",
            "description": "Keep the current character, loadout, deck, or vehicle for the entire quest."
          }
        ]
      },
      "de": {
        "name": "Eine Zahl",
        "title": "Unternimm drei Versuche nur für diesen Wert",
        "objective": "Wähle einen Messwert des Spiels und ignoriere jede andere Statistik. Unternimm drei Versuche nur für diesen Wert. Verbessere ihn.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Minimales HUD",
            "description": "Blende optionale Anzeigen aus, aber behalte Ziel und Abschluss der Quest sichtbar."
          },
          {
            "scope": "gameplay",
            "title": "Behalte dein Setup",
            "description": "Behalte die aktuelle Figur, Ausrüstung, das Deck oder Fahrzeug während der ganzen Quest."
          }
        ]
      }
    }
  },
  {
    "moodId": "focused",
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 20,
    "rewardPoints": 240,
    "translations": {
      "en": {
        "name": "Small Region",
        "title": "Find its entrances, one landmark, and a safe exit",
        "objective": "Choose one small unfamiliar region on a map. Find its entrances, one landmark, and a safe exit. Map all three.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Bring Back One Image",
            "description": "Capture one screenshot that clearly shows the finished result or final stopping point."
          },
          {
            "scope": "gameplay",
            "title": "No Fast Travel",
            "description": "Travel through the playable world instead of skipping the journey through a menu."
          }
        ]
      },
      "de": {
        "name": "Kleine Region",
        "title": "Finde ihre Eingänge, einen Orientierungspunkt und einen sicheren Ausgang",
        "objective": "Wähle eine kleine unbekannte Region auf einer Karte. Finde ihre Eingänge, einen Orientierungspunkt und einen sicheren Ausgang. Kartiere alle drei.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Bring ein Bild mit",
            "description": "Mache einen Screenshot, der das fertige Ergebnis oder den endgültigen Haltepunkt klar zeigt."
          },
          {
            "scope": "gameplay",
            "title": "Keine Schnellreise",
            "description": "Reise durch die spielbare Welt, statt den Weg über ein Menü zu überspringen."
          }
        ]
      }
    }
  },
  {
    "moodId": "focused",
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 20,
    "rewardPoints": 240,
    "translations": {
      "en": {
        "name": "Single Variable",
        "title": "Leave every other variable untouched while it runs",
        "objective": "Choose one visible system and change a single input. Leave every other variable untouched while it runs. Observe one full response cycle.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keep Your Setup",
            "description": "Keep the current character, loadout, deck, or vehicle for the entire quest."
          },
          {
            "scope": "gameplay",
            "title": "One Move Deeper",
            "description": "Choose one mechanic and use it deliberately in three different situations."
          }
        ]
      },
      "de": {
        "name": "Eine Variable",
        "title": "Lass jede andere Variable unverändert, während es läuft",
        "objective": "Wähle ein sichtbares System und ändere genau einen Eingang. Lass jede andere Variable unverändert, während es läuft. Beobachte einen vollständigen Reaktionszyklus.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Behalte dein Setup",
            "description": "Behalte die aktuelle Figur, Ausrüstung, das Deck oder Fahrzeug während der ganzen Quest."
          },
          {
            "scope": "gameplay",
            "title": "Eine Technik tiefer",
            "description": "Wähle eine Mechanik und nutze sie bewusst in drei unterschiedlichen Situationen."
          }
        ]
      }
    }
  },
  {
    "moodId": "focused",
    "minimumDurationMinutes": 10,
    "suggestedDurationMinutes": 20,
    "rewardPoints": 250,
    "translations": {
      "en": {
        "name": "Room Makeover",
        "title": "Complete it without touching another space",
        "objective": "Choose one unfinished room and define what it should feel like. Complete it without touching another space. Finish the room.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Before and After",
            "description": "Capture the room once before changing it and once after completion."
          },
          {
            "scope": "gameplay",
            "title": "One Palette",
            "description": "Limit the result to one color family plus a single contrasting accent."
          }
        ]
      },
      "de": {
        "name": "Raum fertig",
        "title": "Stelle ihn fertig, ohne einen anderen Bereich anzufassen",
        "objective": "Wähle einen unfertigen Raum und bestimme, wie er sich anfühlen soll. Stelle ihn fertig, ohne einen anderen Bereich anzufassen. Beende den Raum.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Vorher und nachher",
            "description": "Fotografiere den Raum einmal vor der Veränderung und einmal nach dem Abschluss."
          },
          {
            "scope": "gameplay",
            "title": "Eine Farbpalette",
            "description": "Beschränke das Ergebnis auf eine Farbfamilie und einen einzelnen kontrastierenden Akzent."
          }
        ]
      }
    }
  },
  {
    "moodId": "focused",
    "minimumDurationMinutes": 10,
    "suggestedDurationMinutes": 30,
    "rewardPoints": 250,
    "translations": {
      "en": {
        "name": "Closing Screen",
        "title": "Follow the main path and refuse every new optional task",
        "objective": "Open a campaign already close to its ending. Follow the main path and refuse every new optional task. Reach the credits.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Full Dialogue",
            "description": "Let every spoken or written line finish before advancing."
          },
          {
            "scope": "gameplay",
            "title": "Let the Ending Play",
            "description": "Let the closing music or transition run until the next menu appears."
          }
        ]
      },
      "de": {
        "name": "Abschlussbildschirm",
        "title": "Folge dem Hauptweg und lehne jede neue optionale Aufgabe ab",
        "objective": "Öffne eine Kampagne, die ihrem Ende bereits nahe ist. Folge dem Hauptweg und lehne jede neue optionale Aufgabe ab. Erreiche die Credits.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Ganzer Dialog",
            "description": "Lass jede gesprochene oder geschriebene Zeile enden, bevor du fortfährst."
          },
          {
            "scope": "gameplay",
            "title": "Lass das Ende laufen",
            "description": "Lass Abschlussmusik oder Übergang laufen, bis das nächste Menü erscheint."
          }
        ]
      }
    }
  },
  {
    "moodId": "focused",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 230,
    "translations": {
      "en": {
        "name": "Manual Mastery",
        "title": "Read its full tutorial, then use it without reopening the instructions",
        "objective": "Choose one system explained inside the game. Read its full tutorial, then use it without reopening the instructions. Make it work once.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "No Outside Help",
            "description": "Rely only on the game: no guides, wikis, solution videos, or external maps."
          },
          {
            "scope": "gameplay",
            "title": "One Move Deeper",
            "description": "Choose one mechanic and use it deliberately in three different situations."
          }
        ]
      },
      "de": {
        "name": "System verstanden",
        "title": "Lies das ganze Tutorial und nutze es danach ohne erneutes Nachschlagen",
        "objective": "Wähle ein System, das im Spiel erklärt wird. Lies das ganze Tutorial und nutze es danach ohne erneutes Nachschlagen. Bring es einmal zum Funktionieren.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keine externe Hilfe",
            "description": "Verlasse dich nur auf das Spiel: keine Guides, Wikis, Lösungsvideos oder externen Karten."
          },
          {
            "scope": "gameplay",
            "title": "Eine Technik tiefer",
            "description": "Wähle eine Mechanik und nutze sie bewusst in drei unterschiedlichen Situationen."
          }
        ]
      }
    }
  },
  {
    "moodId": "focused",
    "minimumDurationMinutes": 10,
    "suggestedDurationMinutes": 20,
    "rewardPoints": 250,
    "translations": {
      "en": {
        "name": "Clean Cooldown",
        "title": "Finish only that task, then write down the next action",
        "objective": "Choose one named task before opening your save. Finish only that task, then write down the next action. Save and close.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Minimal HUD",
            "description": "Hide optional UI, but keep the quest's required goal and finish indicators visible."
          },
          {
            "scope": "gameplay",
            "title": "Favorite Setup",
            "description": "Use the character, loadout, deck, or vehicle you most associate with this game."
          }
        ]
      },
      "de": {
        "name": "Sauberes Ende",
        "title": "Beende nur sie und notiere danach die nächste Aktion",
        "objective": "Wähle eine benannte Aufgabe, bevor du den Spielstand öffnest. Beende nur sie und notiere danach die nächste Aktion. Speichere und schließe.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Minimales HUD",
            "description": "Blende optionale Anzeigen aus, aber behalte Ziel und Abschluss der Quest sichtbar."
          },
          {
            "scope": "gameplay",
            "title": "Lieblings-Setup",
            "description": "Nutze die Figur, Ausrüstung, das Deck oder Fahrzeug, das du damit verbindest."
          }
        ]
      }
    }
  },
  {
    "moodId": "focused",
    "minimumDurationMinutes": 10,
    "suggestedDurationMinutes": 30,
    "rewardPoints": 240,
    "translations": {
      "en": {
        "name": "One More Turn",
        "title": "Resolve the next turn entirely around that goal",
        "objective": "Open a complex strategy position and choose one economic goal. Resolve the next turn entirely around that goal. Finish the turn.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Stay on One Goal",
            "description": "Ignore side missions and map markers so the quest stays on one clear goal."
          },
          {
            "scope": "gameplay",
            "title": "Keep One in Reserve",
            "description": "Finish with at least one use of a limited resource still available."
          }
        ]
      },
      "de": {
        "name": "Nur noch ein Zug",
        "title": "Richte den nächsten Zug vollständig danach aus",
        "objective": "Öffne eine komplexe Strategieposition und wähle ein wirtschaftliches Ziel. Richte den nächsten Zug vollständig danach aus. Beende den Zug.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Bleib bei einem Ziel",
            "description": "Ignoriere Nebenmissionen und Kartenmarker, damit die Quest bei einem klaren Ziel bleibt."
          },
          {
            "scope": "gameplay",
            "title": "Behalte eine Reserve",
            "description": "Beende die Quest mit mindestens einer übrigen Nutzung einer begrenzten Ressource."
          }
        ]
      }
    }
  },
  {
    "moodId": "focused",
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 20,
    "rewardPoints": 230,
    "translations": {
      "en": {
        "name": "Factory Bottleneck",
        "title": "Trace and fix one factory bottleneck",
        "objective": "Find one factory line that keeps stopping. Trace it backward to the first shortage and fix only that bottleneck. Run a full continuous cycle.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Use What You Find",
            "description": "Make one useful item, tool, or resource found during the quest part of your plan."
          },
          {
            "scope": "gameplay",
            "title": "Local Materials",
            "description": "Build only with materials already available in the current place or nearby storage."
          }
        ]
      },
      "de": {
        "name": "Fabrikengpass",
        "title": "Finde und behebe einen Fabrikengpass",
        "objective": "Finde eine Fabriklinie, die immer wieder stoppt. Verfolge sie bis zum ersten Mangel zurück und behebe nur diesen Engpass. Lass einen vollständigen Zyklus ohne Stopp laufen.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Nutze deinen Fund",
            "description": "Mach einen nützlichen Gegenstand, ein Werkzeug oder eine Ressource aus der Quest zum Teil deines Plans."
          },
          {
            "scope": "gameplay",
            "title": "Lokale Materialien",
            "description": "Baue nur mit Materialien, die bereits vor Ort oder in einem nahen Lager sind."
          }
        ]
      }
    }
  },
  {
    "moodId": "focused",
    "minimumDurationMinutes": 10,
    "suggestedDurationMinutes": 30,
    "rewardPoints": 240,
    "translations": {
      "en": {
        "name": "Flight Procedure",
        "title": "Perform every step from departure to safe arrival",
        "objective": "Choose one complete vehicle route and follow its normal procedure. Perform every step from departure to safe arrival. Finish the route.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keep Your Setup",
            "description": "Keep the current character, loadout, deck, or vehicle for the entire quest."
          },
          {
            "scope": "gameplay",
            "title": "No Outside Help",
            "description": "Rely only on the game: no guides, wikis, solution videos, or external maps."
          }
        ]
      },
      "de": {
        "name": "Vollständiger Ablauf",
        "title": "Führe jeden Schritt vom Start bis zur sicheren Ankunft aus",
        "objective": "Wähle eine vollständige Fahrzeugroute und folge ihrem normalen Verfahren. Führe jeden Schritt vom Start bis zur sicheren Ankunft aus. Beende die Route.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Behalte dein Setup",
            "description": "Behalte die aktuelle Figur, Ausrüstung, das Deck oder Fahrzeug während der ganzen Quest."
          },
          {
            "scope": "gameplay",
            "title": "Keine externe Hilfe",
            "description": "Verlasse dich nur auf das Spiel: keine Guides, Wikis, Lösungsvideos oder externen Karten."
          }
        ]
      }
    }
  },
  {
    "moodId": "focused",
    "minimumDurationMinutes": 10,
    "suggestedDurationMinutes": 20,
    "rewardPoints": 240,
    "translations": {
      "en": {
        "name": "Closed Case",
        "title": "Follow the strongest lead without changing cases",
        "objective": "Open one unresolved detective case and review its evidence once. Follow the strongest lead without changing cases. Submit one accusation.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "No Outside Help",
            "description": "Rely only on the game: no guides, wikis, solution videos, or external maps."
          },
          {
            "scope": "gameplay",
            "title": "Full Dialogue",
            "description": "Let every spoken or written line finish before advancing."
          }
        ]
      },
      "de": {
        "name": "Fall abgeschlossen",
        "title": "Folge der stärksten Spur, ohne den Fall zu wechseln",
        "objective": "Öffne einen ungelösten Detektivfall und prüfe seine Beweise einmal. Folge der stärksten Spur, ohne den Fall zu wechseln. Reiche eine Beschuldigung ein.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keine externe Hilfe",
            "description": "Verlasse dich nur auf das Spiel: keine Guides, Wikis, Lösungsvideos oder externen Karten."
          },
          {
            "scope": "gameplay",
            "title": "Ganzer Dialog",
            "description": "Lass jede gesprochene oder geschriebene Zeile enden, bevor du fortfährst."
          }
        ]
      }
    }
  },
  {
    "moodId": "focused",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "Rhythm Set",
        "title": "Finish one rhythm-game set at one difficulty",
        "objective": "Choose one grouped set in a rhythm game. Lock one difficulty and play every song in order. Finish the full set.",
        "tips": [
          {
            "scope": "game-selection",
            "title": "Rhythm Pick",
            "description": "Choose a rhythm game with grouped tracks and fixed difficulties."
          },
          {
            "scope": "gameplay",
            "title": "Keep the First Take",
            "description": "Keep the first complete version and resist adding a second polish pass."
          }
        ]
      },
      "de": {
        "name": "Rhythmus-Set",
        "title": "Beende im Rhythmusspiel ein Set auf einer Schwierigkeit",
        "objective": "Wähle ein zusammengehöriges Set in einem Rhythmusspiel. Lege eine Schwierigkeit fest und spiele jeden Song der Reihe nach. Beende das ganze Set.",
        "tips": [
          {
            "scope": "game-selection",
            "title": "Rhythmusspiel wählen",
            "description": "Nimm ein Rhythmusspiel mit Songgruppen und festen Schwierigkeiten."
          },
          {
            "scope": "gameplay",
            "title": "Behalte den ersten Versuch",
            "description": "Behalte die erste vollständige Version und widerstehe einer zweiten Überarbeitungsrunde."
          }
        ]
      }
    }
  },
  {
    "moodId": "focused",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 230,
    "translations": {
      "en": {
        "name": "Speedrun Segment",
        "title": "Repeat the whole segment without changing the plan",
        "objective": "Choose one short speedrun segment and define its correct route. Repeat the whole segment without changing the plan. Finish three clean runs.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Minimal HUD",
            "description": "Hide optional UI, but keep the quest's required goal and finish indicators visible."
          },
          {
            "scope": "gameplay",
            "title": "One Move Deeper",
            "description": "Choose one mechanic and use it deliberately in three different situations."
          }
        ]
      },
      "de": {
        "name": "Speedrun-Segment",
        "title": "Wiederhole den ganzen Abschnitt ohne Planänderung",
        "objective": "Wähle ein kurzes Speedrun-Segment und lege seine richtige Route fest. Wiederhole den ganzen Abschnitt ohne Planänderung. Beende drei saubere Runs.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Minimales HUD",
            "description": "Blende optionale Anzeigen aus, aber behalte Ziel und Abschluss der Quest sichtbar."
          },
          {
            "scope": "gameplay",
            "title": "Eine Technik tiefer",
            "description": "Wähle eine Mechanik und nutze sie bewusst in drei unterschiedlichen Situationen."
          }
        ]
      }
    }
  },
  {
    "moodId": "curious",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Strangest Cover",
        "title": "Launch the strangest-covered game without reading its store description",
        "objective": "Scan the first visible row of installed covers, launch the strangest one without reading its description, and reach its first checkpoint, save, or result screen.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "No Outside Help",
            "description": "Rely only on the game: no guides, wikis, solution videos, or external maps."
          },
          {
            "scope": "gameplay",
            "title": "First Instinct",
            "description": "Take the first sincere choice that feels right without comparing every alternative."
          }
        ]
      },
      "de": {
        "name": "Seltsamstes Cover",
        "title": "Starte das Spiel mit dem seltsamsten Cover ohne Shop-Beschreibung",
        "objective": "Überfliege die erste sichtbare Reihe installierter Cover, starte das seltsamste ohne Beschreibung und erreiche den ersten Kontrollpunkt, Speicher- oder Ergebnisbildschirm.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keine externe Hilfe",
            "description": "Verlasse dich nur auf das Spiel: keine Guides, Wikis, Lösungsvideos oder externen Karten."
          },
          {
            "scope": "gameplay",
            "title": "Erster Impuls",
            "description": "Nimm die erste ehrliche Wahl, die sich richtig anfühlt, ohne alle Alternativen zu vergleichen."
          }
        ]
      }
    }
  },
  {
    "moodId": "curious",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "Unfamiliar Verb",
        "title": "Start the activity that teaches that action directly",
        "objective": "Choose a game built around an action you rarely use. Start the activity that teaches that action directly. Use that action successfully three times.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "One Main Tool",
            "description": "Choose one tool or action and make it your main answer throughout the quest."
          },
          {
            "scope": "gameplay",
            "title": "No Outside Help",
            "description": "Rely only on the game: no guides, wikis, solution videos, or external maps."
          }
        ]
      },
      "de": {
        "name": "Ungewohnte Aktion",
        "title": "Starte die Aktivität, die diese Aktion direkt vermittelt",
        "objective": "Wähle ein Spiel mit einer Aktion, die du selten nutzt. Starte die Aktivität, die diese Aktion direkt vermittelt. Setze die Aktion dreimal erfolgreich ein.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Ein Hauptwerkzeug",
            "description": "Wähle ein Werkzeug oder eine Aktion als deine Hauptlösung für die ganze Quest."
          },
          {
            "scope": "gameplay",
            "title": "Keine externe Hilfe",
            "description": "Verlasse dich nur auf das Spiel: keine Guides, Wikis, Lösungsvideos oder externen Karten."
          }
        ]
      }
    }
  },
  {
    "moodId": "curious",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "Genre Collision",
        "title": "Play until both affect the same decision",
        "objective": "Open a game combining two genres, finish its first level or round, and name one decision that used a mechanic from each genre.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "No Outside Help",
            "description": "Rely only on the game: no guides, wikis, solution videos, or external maps."
          },
          {
            "scope": "gameplay",
            "title": "Let It Stand",
            "description": "Accept the first honest result, even when reloading or rerolling could improve it."
          }
        ]
      },
      "de": {
        "name": "Genre-Kollision",
        "title": "Spiele, bis beide dieselbe Entscheidung beeinflussen",
        "objective": "Öffne ein Spiel, das zwei Genres verbindet, beende das erste Level oder die erste Runde und benenne eine Entscheidung mit einer Mechanik aus jedem Genre.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keine externe Hilfe",
            "description": "Verlasse dich nur auf das Spiel: keine Guides, Wikis, Lösungsvideos oder externen Karten."
          },
          {
            "scope": "gameplay",
            "title": "Lass es gelten",
            "description": "Akzeptiere das erste ehrliche Ergebnis, auch wenn Neuladen oder Neuwürfeln es verbessern könnte."
          }
        ]
      }
    }
  },
  {
    "moodId": "curious",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "New Signature",
        "title": "Start that unknown developer's game without checking their other work",
        "objective": "Choose one installed game from a developer you have never played. Start that unknown developer's game without checking their other work. Reach the first save, checkpoint, or result screen.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "No Outside Help",
            "description": "Rely only on the game: no guides, wikis, solution videos, or external maps."
          },
          {
            "scope": "gameplay",
            "title": "Keep the First Take",
            "description": "Keep the first complete version and resist adding a second polish pass."
          }
        ]
      },
      "de": {
        "name": "Neue Handschrift",
        "title": "Starte das Spiel des unbekannten Studios, ohne weitere Werke anzusehen",
        "objective": "Wähle ein installiertes Spiel eines Entwicklers, den du noch nie gespielt hast. Starte das Spiel des unbekannten Studios, ohne weitere Werke anzusehen. Erreiche den ersten Speicherpunkt, Kontrollpunkt oder Ergebnisbildschirm.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keine externe Hilfe",
            "description": "Verlasse dich nur auf das Spiel: keine Guides, Wikis, Lösungsvideos oder externen Karten."
          },
          {
            "scope": "gameplay",
            "title": "Behalte den ersten Versuch",
            "description": "Behalte die erste vollständige Version und widerstehe einer zweiten Überarbeitungsrunde."
          }
        ]
      }
    }
  },
  {
    "moodId": "curious",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 230,
    "translations": {
      "en": {
        "name": "Physics Question",
        "title": "Build a repeatable test for it",
        "objective": "Open a game with interacting physics and ask one specific 'what if' question. Build a repeatable test for it. Observe the result.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "One Move Deeper",
            "description": "Choose one mechanic and use it deliberately in three different situations."
          },
          {
            "scope": "gameplay",
            "title": "Let It Stand",
            "description": "Accept the first honest result, even when reloading or rerolling could improve it."
          }
        ]
      },
      "de": {
        "name": "Physikfrage",
        "title": "Baue dafür einen wiederholbaren Test",
        "objective": "Öffne ein Spiel mit interagierender Physik und stelle eine konkrete Was-wäre-wenn-Frage. Baue dafür einen wiederholbaren Test. Beobachte das Ergebnis.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Eine Technik tiefer",
            "description": "Wähle eine Mechanik und nutze sie bewusst in drei unterschiedlichen Situationen."
          },
          {
            "scope": "gameplay",
            "title": "Lass es gelten",
            "description": "Akzeptiere das erste ehrliche Ergebnis, auch wenn Neuladen oder Neuwürfeln es verbessern könnte."
          }
        ]
      }
    }
  },
  {
    "moodId": "curious",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "Overlooked Lore",
        "title": "Read it and trace its link to one named person",
        "objective": "Find one object whose description you previously skipped. Read it and trace its link to one named person. Confirm the connection.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Stay on One Goal",
            "description": "Ignore side missions and map markers so the quest stays on one clear goal."
          },
          {
            "scope": "gameplay",
            "title": "No Outside Help",
            "description": "Rely only on the game: no guides, wikis, solution videos, or external maps."
          }
        ]
      },
      "de": {
        "name": "Übersehene Geschichte",
        "title": "Lies sie und verfolge die Verbindung zu einer benannten Person",
        "objective": "Finde einen Gegenstand, dessen Beschreibung du bisher übersprungen hast. Lies sie und verfolge die Verbindung zu einer benannten Person. Bestätige die Verbindung.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Bleib bei einem Ziel",
            "description": "Ignoriere Nebenmissionen und Kartenmarker, damit die Quest bei einem klaren Ziel bleibt."
          },
          {
            "scope": "gameplay",
            "title": "Keine externe Hilfe",
            "description": "Verlasse dich nur auf das Spiel: keine Guides, Wikis, Lösungsvideos oder externen Karten."
          }
        ]
      }
    }
  },
  {
    "moodId": "curious",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 210,
    "translations": {
      "en": {
        "name": "NPC Routine",
        "title": "Follow them without interfering until their route repeats",
        "objective": "Choose one non-player character with a visible routine. Follow them without interfering until their route repeats. Observe the full loop.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "World Audio",
            "description": "Lower the music enough to notice environmental sounds, voices, machinery, and distant activity."
          },
          {
            "scope": "gameplay",
            "title": "Minimal HUD",
            "description": "Hide optional UI, but keep the quest's required goal and finish indicators visible."
          }
        ]
      },
      "de": {
        "name": "NPC-Routine",
        "title": "Folge ihr ohne Eingriff, bis sich ihr Weg wiederholt",
        "objective": "Wähle eine Nichtspielerfigur mit sichtbarer Routine. Folge ihr ohne Eingriff, bis sich ihr Weg wiederholt. Beobachte den ganzen Ablauf.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Geräusche der Welt",
            "description": "Drehe die Musik so weit herunter, dass du Umgebung, Stimmen und entfernte Aktivität wahrnimmst."
          },
          {
            "scope": "gameplay",
            "title": "Minimales HUD",
            "description": "Blende optionale Anzeigen aus, aber behalte Ziel und Abschluss der Quest sichtbar."
          }
        ]
      }
    }
  },
  {
    "moodId": "curious",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 210,
    "translations": {
      "en": {
        "name": "Alternate View",
        "title": "Keep the alternate camera for one complete activity",
        "objective": "Open a familiar game and switch to a viewpoint you never use. Keep the alternate camera for one complete activity. Reach the next save, checkpoint, or result screen.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Ground Level",
            "description": "Keep the camera close to the character or world instead of overhead or distant."
          },
          {
            "scope": "gameplay",
            "title": "Let It Stand",
            "description": "Accept the first honest result, even when reloading or rerolling could improve it."
          }
        ]
      },
      "de": {
        "name": "Andere Perspektive",
        "title": "Behalte die ungewohnte Kamera für eine ganze Aktivität",
        "objective": "Öffne ein vertrautes Spiel und wechsle zu einer Perspektive, die du nie nutzt. Behalte die ungewohnte Kamera für eine ganze Aktivität. Erreiche den nächsten Speicherpunkt, Kontrollpunkt oder Ergebnisbildschirm.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Auf Augenhöhe",
            "description": "Halte die Kamera nah an Figur oder Welt statt über dir oder weit entfernt."
          },
          {
            "scope": "gameplay",
            "title": "Lass es gelten",
            "description": "Akzeptiere das erste ehrliche Ergebnis, auch wenn Neuladen oder Neuwürfeln es verbessern könnte."
          }
        ]
      }
    }
  },
  {
    "moodId": "curious",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 230,
    "translations": {
      "en": {
        "name": "New World",
        "title": "Follow the first unusual feature you notice",
        "objective": "Generate a new world and accept the first seed. Follow the first unusual feature you notice. Reach one unique landmark.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Play It Out",
            "description": "Continue after mistakes and adapt instead of restarting, reloading, or abandoning the attempt."
          },
          {
            "scope": "gameplay",
            "title": "Use What You Find",
            "description": "Make one useful item, tool, or resource found during the quest part of your plan."
          }
        ]
      },
      "de": {
        "name": "Neue Welt",
        "title": "Folge der ersten ungewöhnlichen Besonderheit, die dir auffällt",
        "objective": "Erzeuge eine neue Welt und akzeptiere den ersten Seed. Folge der ersten ungewöhnlichen Besonderheit, die dir auffällt. Erreiche einen einzigartigen Ort.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Spiel es zu Ende",
            "description": "Spiele nach Fehlern weiter und passe dich an, statt neu zu starten oder zu laden."
          },
          {
            "scope": "gameplay",
            "title": "Nutze deinen Fund",
            "description": "Mach einen nützlichen Gegenstand, ein Werkzeug oder eine Ressource aus der Quest zum Teil deines Plans."
          }
        ]
      }
    }
  },
  {
    "moodId": "curious",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "Player Variation",
        "title": "Start where its change is easiest to notice",
        "objective": "Choose one community-made variation for a familiar game. Start where its change is easiest to notice. Finish one changed activity.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "No Outside Help",
            "description": "Rely only on the game: no guides, wikis, solution videos, or external maps."
          },
          {
            "scope": "gameplay",
            "title": "Let It Stand",
            "description": "Accept the first honest result, even when reloading or rerolling could improve it."
          }
        ]
      },
      "de": {
        "name": "Spielervariante",
        "title": "Starte dort, wo ihre Änderung am leichtesten zu erkennen ist",
        "objective": "Wähle eine Community-Variante für ein vertrautes Spiel. Starte dort, wo ihre Änderung am leichtesten zu erkennen ist. Beende eine veränderte Aktivität.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keine externe Hilfe",
            "description": "Verlasse dich nur auf das Spiel: keine Guides, Wikis, Lösungsvideos oder externen Karten."
          },
          {
            "scope": "gameplay",
            "title": "Lass es gelten",
            "description": "Akzeptiere das erste ehrliche Ergebnis, auch wenn Neuladen oder Neuwürfeln es verbessern könnte."
          }
        ]
      }
    }
  },
  {
    "moodId": "curious",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 210,
    "translations": {
      "en": {
        "name": "Changed Signals",
        "title": "Keep the unfamiliar accessibility option active for one activity",
        "objective": "Open a familiar game and enable one accessibility option you have never tried. Keep the unfamiliar accessibility option active for one activity. Reach the next save, checkpoint, or result screen.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Listen First",
            "description": "Pause for dialogue and world sounds, then let them guide your next action."
          },
          {
            "scope": "gameplay",
            "title": "Let It Stand",
            "description": "Accept the first honest result, even when reloading or rerolling could improve it."
          }
        ]
      },
      "de": {
        "name": "Veränderte Ausgabe",
        "title": "Behalte die ungewohnte Bedienungshilfe für eine Aktivität",
        "objective": "Öffne ein vertrautes Spiel und aktiviere eine Barrierefreiheitsoption, die du noch nie probiert hast. Behalte die ungewohnte Bedienungshilfe für eine Aktivität. Erreiche den nächsten Speicherpunkt, Kontrollpunkt oder Ergebnisbildschirm.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Hör zuerst zu",
            "description": "Halte für Dialoge und Weltgeräusche inne und lass sie den nächsten Schritt bestimmen."
          },
          {
            "scope": "gameplay",
            "title": "Lass es gelten",
            "description": "Akzeptiere das erste ehrliche Ergebnis, auch wenn Neuladen oder Neuwürfeln es verbessern könnte."
          }
        ]
      }
    }
  },
  {
    "moodId": "curious",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 210,
    "translations": {
      "en": {
        "name": "Another Language",
        "title": "Follow the scene without switching back",
        "objective": "Open a familiar story scene and switch it to another available language. Follow the scene without switching back. Reach its ending.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Listen First",
            "description": "Pause for dialogue and world sounds, then let them guide your next action."
          },
          {
            "scope": "gameplay",
            "title": "Keep the First Take",
            "description": "Keep the first complete version and resist adding a second polish pass."
          }
        ]
      },
      "de": {
        "name": "Andere Sprache",
        "title": "Folge ihr, ohne zurückzuwechseln",
        "objective": "Öffne eine vertraute Story-Szene und stelle sie auf eine andere verfügbare Sprache. Folge ihr, ohne zurückzuwechseln. Erreiche ihr Ende.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Hör zuerst zu",
            "description": "Halte für Dialoge und Weltgeräusche inne und lass sie den nächsten Schritt bestimmen."
          },
          {
            "scope": "gameplay",
            "title": "Behalte den ersten Versuch",
            "description": "Behalte die erste vollständige Version und widerstehe einer zweiten Überarbeitungsrunde."
          }
        ]
      }
    }
  },
  {
    "moodId": "curious",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "Still Sealed",
        "title": "Launch the oldest untouched game before reading about it",
        "objective": "Find the game you have owned longest with no recorded playtime. Launch the oldest untouched game before reading about it. Reach the first save point.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "No Outside Help",
            "description": "Rely only on the game: no guides, wikis, solution videos, or external maps."
          },
          {
            "scope": "gameplay",
            "title": "Stay on One Goal",
            "description": "Ignore side missions and map markers so the quest stays on one clear goal."
          }
        ]
      },
      "de": {
        "name": "Noch versiegelt",
        "title": "Starte das älteste unberührte Spiel, bevor du darüber liest",
        "objective": "Finde das Spiel, das du am längsten ohne Spielzeit besitzt. Starte das älteste unberührte Spiel, bevor du darüber liest. Erreiche den ersten Speicherpunkt.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keine externe Hilfe",
            "description": "Verlasse dich nur auf das Spiel: keine Guides, Wikis, Lösungsvideos oder externen Karten."
          },
          {
            "scope": "gameplay",
            "title": "Bleib bei einem Ziel",
            "description": "Ignoriere Nebenmissionen und Kartenmarker, damit die Quest bei einem klaren Ziel bleibt."
          }
        ]
      }
    }
  },
  {
    "moodId": "curious",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "Second Impression",
        "title": "Continue beyond the exact point where you stopped",
        "objective": "Return to a game you quit after a bad opening. Continue beyond the exact point where you stopped. Reach one new mechanic.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "No Outside Help",
            "description": "Rely only on the game: no guides, wikis, solution videos, or external maps."
          },
          {
            "scope": "gameplay",
            "title": "Let It Stand",
            "description": "Accept the first honest result, even when reloading or rerolling could improve it."
          }
        ]
      },
      "de": {
        "name": "Zweiter Eindruck",
        "title": "Spiele über deinen damaligen Haltepunkt hinaus",
        "objective": "Kehre zu einem Spiel zurück, das du nach einem schlechten Anfang abgebrochen hast. Spiele über deinen damaligen Haltepunkt hinaus. Erreiche eine neue Mechanik.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keine externe Hilfe",
            "description": "Verlasse dich nur auf das Spiel: keine Guides, Wikis, Lösungsvideos oder externen Karten."
          },
          {
            "scope": "gameplay",
            "title": "Lass es gelten",
            "description": "Akzeptiere das erste ehrliche Ergebnis, auch wenn Neuladen oder Neuwürfeln es verbessern könnte."
          }
        ]
      }
    }
  },
  {
    "moodId": "curious",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "Unusual Protagonist",
        "title": "Follow one activity from that character's perspective",
        "objective": "Choose a game led by someone unlike your usual heroes. Follow one activity from that character's perspective. Reach the next save, checkpoint, or result screen.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keep Your Setup",
            "description": "Keep the current character, loadout, deck, or vehicle for the entire quest."
          },
          {
            "scope": "gameplay",
            "title": "First Instinct",
            "description": "Take the first sincere choice that feels right without comparing every alternative."
          }
        ]
      },
      "de": {
        "name": "Ungewöhnliche Hauptfigur",
        "title": "Folge einer Aktivität aus ihrer Perspektive",
        "objective": "Wähle ein Spiel mit einer Hauptfigur außerhalb deiner üblichen Heldenbilder. Folge einer Aktivität aus ihrer Perspektive. Erreiche den nächsten Speicherpunkt, Kontrollpunkt oder Ergebnisbildschirm.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Behalte dein Setup",
            "description": "Behalte die aktuelle Figur, Ausrüstung, das Deck oder Fahrzeug während der ganzen Quest."
          },
          {
            "scope": "gameplay",
            "title": "Erster Impuls",
            "description": "Nimm die erste ehrliche Wahl, die sich richtig anfühlt, ohne alle Alternativen zu vergleichen."
          }
        ]
      }
    }
  },
  {
    "moodId": "curious",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "Side System",
        "title": "Enter that system and complete its basic loop",
        "objective": "Open a familiar game with one deep side system you ignore. Enter that system and complete its basic loop. Finish the loop.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Stay on One Goal",
            "description": "Ignore side missions and map markers so the quest stays on one clear goal."
          },
          {
            "scope": "gameplay",
            "title": "One Main Tool",
            "description": "Choose one tool or action and make it your main answer throughout the quest."
          }
        ]
      },
      "de": {
        "name": "Nebensystem",
        "title": "Betritt es und schließe seinen Grundablauf ab",
        "objective": "Öffne ein vertrautes Spiel mit einem tiefen Nebensystem, das du ignorierst. Betritt es und schließe seinen Grundablauf ab. Beende den Ablauf.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Bleib bei einem Ziel",
            "description": "Ignoriere Nebenmissionen und Kartenmarker, damit die Quest bei einem klaren Ziel bleibt."
          },
          {
            "scope": "gameplay",
            "title": "Ein Hauptwerkzeug",
            "description": "Wähle ein Werkzeug oder eine Aktion als deine Hauptlösung für die ganze Quest."
          }
        ]
      }
    }
  },
  {
    "moodId": "curious",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Chosen by Sound",
        "title": "Open the first sound that surprises you",
        "objective": "Preview the audio from three installed games without looking at their covers. Open the first sound that surprises you. Reach the next save, checkpoint, or result screen.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Listen First",
            "description": "Pause for dialogue and world sounds, then let them guide your next action."
          },
          {
            "scope": "gameplay",
            "title": "Minimal HUD",
            "description": "Hide optional UI, but keep the quest's required goal and finish indicators visible."
          }
        ]
      },
      "de": {
        "name": "Nach Klang gewählt",
        "title": "Öffne den ersten Klang, der dich überrascht",
        "objective": "Höre in drei installierte Spiele hinein, ohne ihre Cover anzusehen. Öffne den ersten Klang, der dich überrascht. Erreiche den nächsten Speicherpunkt, Kontrollpunkt oder Ergebnisbildschirm.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Hör zuerst zu",
            "description": "Halte für Dialoge und Weltgeräusche inne und lass sie den nächsten Schritt bestimmen."
          },
          {
            "scope": "gameplay",
            "title": "Minimales HUD",
            "description": "Blende optionale Anzeigen aus, aber behalte Ziel und Abschluss der Quest sichtbar."
          }
        ]
      }
    }
  },
  {
    "moodId": "curious",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "Demo Revisited",
        "title": "Start at the beginning and continue beyond the sampled section",
        "objective": "Open a full game you once knew only as a demo. Start at the beginning and continue beyond the sampled section. Reach the first level, scene, or location that was absent from the demo.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Stay on One Goal",
            "description": "Ignore side missions and map markers so the quest stays on one clear goal."
          },
          {
            "scope": "gameplay",
            "title": "No Outside Help",
            "description": "Rely only on the game: no guides, wikis, solution videos, or external maps."
          }
        ]
      },
      "de": {
        "name": "Früheres Testspiel",
        "title": "Beginne am Anfang und spiele über den Demoabschnitt hinaus",
        "objective": "Öffne ein vollständiges Spiel, das du früher nur als Demo kanntest. Beginne am Anfang und spiele über den Demoabschnitt hinaus. Erreiche das erste Level, die erste Szene oder den ersten Ort, die in der Demo fehlten.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Bleib bei einem Ziel",
            "description": "Ignoriere Nebenmissionen und Kartenmarker, damit die Quest bei einem klaren Ziel bleibt."
          },
          {
            "scope": "gameplay",
            "title": "Keine externe Hilfe",
            "description": "Verlasse dich nur auf das Spiel: keine Guides, Wikis, Lösungsvideos oder externen Karten."
          }
        ]
      }
    }
  },
  {
    "moodId": "curious",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 230,
    "translations": {
      "en": {
        "name": "Rule First",
        "title": "Touch it before opening its explanation",
        "objective": "Open a game with an unexplained system, use that system successfully once through experimentation, and only then open its explanation.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "No Outside Help",
            "description": "Rely only on the game: no guides, wikis, solution videos, or external maps."
          },
          {
            "scope": "gameplay",
            "title": "One Move Deeper",
            "description": "Choose one mechanic and use it deliberately in three different situations."
          }
        ]
      },
      "de": {
        "name": "Regel zuerst",
        "title": "Probiere es aus, bevor du seine Erklärung öffnest",
        "objective": "Öffne ein Spiel mit einem unerklärten System, nutze es durch Ausprobieren einmal erfolgreich und öffne erst danach seine Erklärung.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keine externe Hilfe",
            "description": "Verlasse dich nur auf das Spiel: keine Guides, Wikis, Lösungsvideos oder externen Karten."
          },
          {
            "scope": "gameplay",
            "title": "Eine Technik tiefer",
            "description": "Wähle eine Mechanik und nutze sie bewusst in drei unterschiedlichen Situationen."
          }
        ]
      }
    }
  },
  {
    "moodId": "curious",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "Beyond the Route",
        "title": "Leave the path and travel there directly",
        "objective": "Open a world with a reachable place beyond the highlighted route. Leave the path and travel there directly. Reach it and take a screenshot.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "No Map",
            "description": "Navigate through landmarks and memory without opening a map or route overlay."
          },
          {
            "scope": "gameplay",
            "title": "Ground Level",
            "description": "Keep the camera close to the character or world instead of overhead or distant."
          }
        ]
      },
      "de": {
        "name": "Abseits der Route",
        "title": "Verlasse den Weg und reise direkt dorthin",
        "objective": "Öffne eine Welt mit einem erreichbaren Ort abseits der markierten Route. Verlasse den Weg und reise direkt dorthin. Erreiche ihn und mache einen Screenshot.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keine Karte",
            "description": "Navigiere mit Orientierungspunkten und Erinnerung, ohne Karte oder eingeblendete Route."
          },
          {
            "scope": "gameplay",
            "title": "Auf Augenhöhe",
            "description": "Halte die Kamera nah an Figur oder Welt statt über dir oder weit entfernt."
          }
        ]
      }
    }
  },
  {
    "moodId": "curious",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 210,
    "translations": {
      "en": {
        "name": "Object History",
        "title": "Search its immediate surroundings for three clues about its purpose",
        "objective": "Choose one object in a world with environmental storytelling, inspect exactly three nearby clues, and capture the third before leaving the object.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Bring Back One Image",
            "description": "Capture one screenshot that clearly shows the finished result or final stopping point."
          },
          {
            "scope": "gameplay",
            "title": "No Outside Help",
            "description": "Rely only on the game: no guides, wikis, solution videos, or external maps."
          }
        ]
      },
      "de": {
        "name": "Geschichte des Objekts",
        "title": "Suche in seiner direkten Umgebung nach drei Hinweisen auf seinen Zweck",
        "objective": "Wähle ein Objekt in einer Welt mit Umgebungserzählung, untersuche genau drei Hinweise in der Nähe und fotografiere den dritten, bevor du das Objekt verlässt.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Bring ein Bild mit",
            "description": "Mache einen Screenshot, der das fertige Ergebnis oder den endgültigen Haltepunkt klar zeigt."
          },
          {
            "scope": "gameplay",
            "title": "Keine externe Hilfe",
            "description": "Verlasse dich nur auf das Spiel: keine Guides, Wikis, Lösungsvideos oder externen Karten."
          }
        ]
      }
    }
  },
  {
    "moodId": "curious",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 210,
    "translations": {
      "en": {
        "name": "Unknown Ruleset",
        "title": "Play the first result without restarting to optimize",
        "objective": "Enter one unfamiliar mode before mastering its rules. Play the first result without restarting to optimize. Finish and name the key rule.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keep Your Setup",
            "description": "Keep the current character, loadout, deck, or vehicle for the entire quest."
          },
          {
            "scope": "gameplay",
            "title": "No Outside Help",
            "description": "Rely only on the game: no guides, wikis, solution videos, or external maps."
          }
        ]
      },
      "de": {
        "name": "Unbekannter Regelsatz",
        "title": "Spiele das erste Ergebnis ohne optimierenden Neustart",
        "objective": "Betritt einen unbekannten Modus, bevor du seine Regeln meisterst. Spiele das erste Ergebnis ohne optimierenden Neustart. Beende es und benenne die wichtigste Regel.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Behalte dein Setup",
            "description": "Behalte die aktuelle Figur, Ausrüstung, das Deck oder Fahrzeug während der ganzen Quest."
          },
          {
            "scope": "gameplay",
            "title": "Keine externe Hilfe",
            "description": "Verlasse dich nur auf das Spiel: keine Guides, Wikis, Lösungsvideos oder externen Karten."
          }
        ]
      }
    }
  },
  {
    "moodId": "curious",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 230,
    "translations": {
      "en": {
        "name": "Opposite Answer",
        "title": "Choose its sincere opposite and do not reload",
        "objective": "Open a dialogue choice and identify your usual answer. Choose its sincere opposite and do not reload. Accept the outcome.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Full Dialogue",
            "description": "Let every spoken or written line finish before advancing."
          },
          {
            "scope": "gameplay",
            "title": "Minimal HUD",
            "description": "Hide optional UI, but keep the quest's required goal and finish indicators visible."
          }
        ]
      },
      "de": {
        "name": "Gegenteilige Antwort",
        "title": "Wähle ihr ehrliches Gegenteil und lade nicht neu",
        "objective": "Öffne eine Dialogentscheidung und erkenne deine übliche Antwort. Wähle ihr ehrliches Gegenteil und lade nicht neu. Akzeptiere das Ergebnis.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Ganzer Dialog",
            "description": "Lass jede gesprochene oder geschriebene Zeile enden, bevor du fortfährst."
          },
          {
            "scope": "gameplay",
            "title": "Minimales HUD",
            "description": "Blende optionale Anzeigen aus, aber behalte Ziel und Abschluss der Quest sichtbar."
          }
        ]
      }
    }
  },
  {
    "moodId": "curious",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "Microgame Collection",
        "title": "Play the first five entries in their listed order",
        "objective": "Open a collection of tiny game experiments. Play the first five entries in their listed order. Finish all five.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "No Outside Help",
            "description": "Rely only on the game: no guides, wikis, solution videos, or external maps."
          },
          {
            "scope": "gameplay",
            "title": "Keep the First Take",
            "description": "Keep the first complete version and resist adding a second polish pass."
          }
        ]
      },
      "de": {
        "name": "Mikrospielsammlung",
        "title": "Spiele die ersten fünf Einträge in ihrer gelisteten Reihenfolge",
        "objective": "Öffne eine Sammlung kleiner Spielexperimente. Spiele die ersten fünf Einträge in ihrer gelisteten Reihenfolge. Beende alle fünf.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keine externe Hilfe",
            "description": "Verlasse dich nur auf das Spiel: keine Guides, Wikis, Lösungsvideos oder externen Karten."
          },
          {
            "scope": "gameplay",
            "title": "Behalte den ersten Versuch",
            "description": "Behalte die erste vollständige Version und widerstehe einer zweiten Überarbeitungsrunde."
          }
        ]
      }
    }
  },
  {
    "moodId": "curious",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 20,
    "rewardPoints": 230,
    "translations": {
      "en": {
        "name": "Unfamiliar Period",
        "title": "Find one era-specific detail in a scenario",
        "objective": "Choose a game set in a period you know little about. Start one scenario and watch for a detail unique to that era. Identify one detail.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "No Outside Help",
            "description": "Rely only on the game: no guides, wikis, solution videos, or external maps."
          },
          {
            "scope": "gameplay",
            "title": "Listen First",
            "description": "Pause for dialogue and world sounds, then let them guide your next action."
          }
        ]
      },
      "de": {
        "name": "Unbekannte Epoche",
        "title": "Finde ein zeittypisches Detail in einem Szenario",
        "objective": "Wähle ein Spiel aus einer Epoche, über die du wenig weißt. Starte ein Szenario und achte auf ein zeittypisches Detail. Benenne ein Detail.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keine externe Hilfe",
            "description": "Verlasse dich nur auf das Spiel: keine Guides, Wikis, Lösungsvideos oder externen Karten."
          },
          {
            "scope": "gameplay",
            "title": "Hör zuerst zu",
            "description": "Halte für Dialoge und Weltgeräusche inne und lass sie den nächsten Schritt bestimmen."
          }
        ]
      }
    }
  },
  {
    "moodId": "curious",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 20,
    "rewardPoints": 230,
    "translations": {
      "en": {
        "name": "Impossible Technology",
        "title": "Use that technology to solve its nearest problem",
        "objective": "Choose one science-fiction game built around impossible technology. Use that technology to solve its nearest problem. Finish the solution.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Stay on One Goal",
            "description": "Ignore side missions and map markers so the quest stays on one clear goal."
          },
          {
            "scope": "gameplay",
            "title": "No Outside Help",
            "description": "Rely only on the game: no guides, wikis, solution videos, or external maps."
          }
        ]
      },
      "de": {
        "name": "Unmögliche Technologie",
        "title": "Nutze sie, um das nächste Problem zu lösen",
        "objective": "Wähle ein Science-Fiction-Spiel mit einer unmöglichen Technologie. Nutze sie, um das nächste Problem zu lösen. Schließe die Lösung ab.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Bleib bei einem Ziel",
            "description": "Ignoriere Nebenmissionen und Kartenmarker, damit die Quest bei einem klaren Ziel bleibt."
          },
          {
            "scope": "gameplay",
            "title": "Keine externe Hilfe",
            "description": "Verlasse dich nur auf das Spiel: keine Guides, Wikis, Lösungsvideos oder externen Karten."
          }
        ]
      }
    }
  },
  {
    "moodId": "curious",
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 20,
    "rewardPoints": 250,
    "translations": {
      "en": {
        "name": "Alternate Outcome",
        "title": "Enter the branch leading toward that outcome",
        "objective": "Open a completed game with one reachable ending still unseen. Enter the branch leading toward that outcome. Reach one unique scene.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Opposite Instinct",
            "description": "Choose one meaningful option opposite to your usual habit and accept its outcome."
          },
          {
            "scope": "gameplay",
            "title": "Let It Stand",
            "description": "Accept the first honest result, even when reloading or rerolling could improve it."
          }
        ]
      },
      "de": {
        "name": "Alternativer Ausgang",
        "title": "Betritt den Weg zu diesem Ergebnis",
        "objective": "Öffne ein abgeschlossenes Spiel mit einem noch ungesehenen erreichbaren Ende. Betritt den Weg zu diesem Ergebnis. Erreiche eine einzigartige Szene.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Gegenteiliger Impuls",
            "description": "Wähle eine bedeutsame Option entgegen deiner Gewohnheit und akzeptiere ihr Ergebnis."
          },
          {
            "scope": "gameplay",
            "title": "Lass es gelten",
            "description": "Akzeptiere das erste ehrliche Ergebnis, auch wenn Neuladen oder Neuwürfeln es verbessern könnte."
          }
        ]
      }
    }
  },
  {
    "moodId": "curious",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "Developer Commentary",
        "title": "Start one section and listen to every note before moving on",
        "objective": "Open a familiar game with developer commentary. Start one section and listen to every note before moving on. Finish the section.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "No Outside Help",
            "description": "Rely only on the game: no guides, wikis, solution videos, or external maps."
          },
          {
            "scope": "gameplay",
            "title": "Three Attempts",
            "description": "Give the same challenge three complete attempts without changing the target between them."
          }
        ]
      },
      "de": {
        "name": "Entwicklerkommentar",
        "title": "Starte einen Abschnitt und höre jede Notiz an, bevor du weitergehst",
        "objective": "Öffne ein vertrautes Spiel mit Entwicklerkommentar. Starte einen Abschnitt und höre jede Notiz an, bevor du weitergehst. Beende den Abschnitt.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keine externe Hilfe",
            "description": "Verlasse dich nur auf das Spiel: keine Guides, Wikis, Lösungsvideos oder externen Karten."
          },
          {
            "scope": "gameplay",
            "title": "Drei Versuche",
            "description": "Gib derselben Herausforderung drei vollständige Versuche, ohne das Ziel dazwischen zu wechseln."
          }
        ]
      }
    }
  },
  {
    "moodId": "curious",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 230,
    "translations": {
      "en": {
        "name": "System Collision",
        "title": "Create one useful situation where they affect each other",
        "objective": "Choose two systems that can interact, create one useful collision between them, trigger one visible effect, and capture the result.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "One Move Deeper",
            "description": "Choose one mechanic and use it deliberately in three different situations."
          },
          {
            "scope": "gameplay",
            "title": "Use What You Find",
            "description": "Make one useful item, tool, or resource found during the quest part of your plan."
          }
        ]
      },
      "de": {
        "name": "Systemkollision",
        "title": "Erzeuge eine nützliche Situation, in der sie einander beeinflussen",
        "objective": "Wähle zwei Systeme, die interagieren können, erzeuge eine nützliche Kollision, löse einen sichtbaren Effekt aus und halte das Ergebnis fest.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Eine Technik tiefer",
            "description": "Wähle eine Mechanik und nutze sie bewusst in drei unterschiedlichen Situationen."
          },
          {
            "scope": "gameplay",
            "title": "Nutze deinen Fund",
            "description": "Mach einen nützlichen Gegenstand, ein Werkzeug oder eine Ressource aus der Quest zum Teil deines Plans."
          }
        ]
      }
    }
  },
  {
    "moodId": "curious",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 230,
    "translations": {
      "en": {
        "name": "Visible Landmark",
        "title": "Travel there without changing the destination halfway",
        "objective": "Choose one visible landmark you have never reached. Travel there without changing the destination halfway. Arrive and capture the view.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Stay on One Goal",
            "description": "Ignore side missions and map markers so the quest stays on one clear goal."
          },
          {
            "scope": "gameplay",
            "title": "Bring Back One Image",
            "description": "Capture one screenshot that clearly shows the finished result or final stopping point."
          }
        ]
      },
      "de": {
        "name": "Sichtbares Wahrzeichen",
        "title": "Reise dorthin, ohne unterwegs das Ziel zu wechseln",
        "objective": "Wähle einen sichtbaren Ort, den du noch nie erreicht hast. Reise dorthin, ohne unterwegs das Ziel zu wechseln. Komm an und halte die Aussicht fest.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Bleib bei einem Ziel",
            "description": "Ignoriere Nebenmissionen und Kartenmarker, damit die Quest bei einem klaren Ziel bleibt."
          },
          {
            "scope": "gameplay",
            "title": "Bring ein Bild mit",
            "description": "Mache einen Screenshot, der das fertige Ergebnis oder den endgültigen Haltepunkt klar zeigt."
          }
        ]
      }
    }
  },
  {
    "moodId": "curious",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 230,
    "translations": {
      "en": {
        "name": "The Map Is Lying",
        "title": "Choose one room and learn its spatial rule",
        "objective": "Open a game with space that loops impossibly. Choose one room and learn its spatial rule. Solve the room.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "No Map",
            "description": "Navigate through landmarks and memory without opening a map or route overlay."
          },
          {
            "scope": "gameplay",
            "title": "No Outside Help",
            "description": "Rely only on the game: no guides, wikis, solution videos, or external maps."
          }
        ]
      },
      "de": {
        "name": "Die Karte lügt",
        "title": "Wähle einen Raum und lerne seine räumliche Regel",
        "objective": "Öffne ein Spiel mit einem unmöglich wiederholten Raum. Wähle einen Raum und lerne seine räumliche Regel. Löse den Raum.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keine Karte",
            "description": "Navigiere mit Orientierungspunkten und Erinnerung, ohne Karte oder eingeblendete Route."
          },
          {
            "scope": "gameplay",
            "title": "Keine externe Hilfe",
            "description": "Verlasse dich nur auf das Spiel: keine Guides, Wikis, Lösungsvideos oder externen Karten."
          }
        ]
      }
    }
  },
  {
    "moodId": "curious",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "Living System",
        "title": "Change one condition in a living simulation",
        "objective": "Open a simulation with a living population. Change one environmental condition and leave everything else alone. Observe a full response cycle.",
        "tips": [
          {
            "scope": "game-selection",
            "title": "Simulation Pick",
            "description": "Choose a simulation with a visible cycle and an existing state."
          },
          {
            "scope": "gameplay",
            "title": "Let It Stand",
            "description": "Accept the first honest result, even when reloading or rerolling could improve it."
          }
        ]
      },
      "de": {
        "name": "Lebendes System",
        "title": "Ändere in einer lebendigen Simulation eine Bedingung",
        "objective": "Öffne eine Simulation mit einer lebenden Population. Ändere eine Umweltbedingung und lass alles andere unverändert. Beobachte einen vollständigen Reaktionszyklus.",
        "tips": [
          {
            "scope": "game-selection",
            "title": "Simulation wählen",
            "description": "Nimm eine Simulation mit sichtbarem Zyklus und bestehendem Spielstand."
          },
          {
            "scope": "gameplay",
            "title": "Lass es gelten",
            "description": "Akzeptiere das erste ehrliche Ergebnis, auch wenn Neuladen oder Neuwürfeln es verbessern könnte."
          }
        ]
      }
    }
  },
  {
    "moodId": "curious",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 20,
    "rewardPoints": 240,
    "translations": {
      "en": {
        "name": "Programmed Solution",
        "title": "Build the smallest fully automated solution",
        "objective": "Choose one problem in a programming game. Build the smallest automated solution and run it without manual correction. Produce a correct result.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "No Outside Help",
            "description": "Rely only on the game: no guides, wikis, solution videos, or external maps."
          },
          {
            "scope": "gameplay",
            "title": "Stay on One Goal",
            "description": "Ignore side missions and map markers so the quest stays on one clear goal."
          }
        ]
      },
      "de": {
        "name": "Programmierte Lösung",
        "title": "Baue die kleinste vollständig automatische Lösung",
        "objective": "Wähle ein Problem in einem Programmierspiel. Baue die kleinste automatische Lösung und führe sie ohne manuellen Eingriff aus. Erzeuge ein korrektes Ergebnis.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keine externe Hilfe",
            "description": "Verlasse dich nur auf das Spiel: keine Guides, Wikis, Lösungsvideos oder externen Karten."
          },
          {
            "scope": "gameplay",
            "title": "Bleib bei einem Ziel",
            "description": "Ignoriere Nebenmissionen und Kartenmarker, damit die Quest bei einem klaren Ziel bleibt."
          }
        ]
      }
    }
  },
  {
    "moodId": "curious",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 20,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "Press X for Drama",
        "title": "Continue without rewinding for a preferred scene",
        "objective": "Open one interactive live-action story and accept its first choices. Continue without rewinding for a preferred scene. Reach one irreversible choice.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Full Dialogue",
            "description": "Let every spoken or written line finish before advancing."
          },
          {
            "scope": "gameplay",
            "title": "Listen First",
            "description": "Pause for dialogue and world sounds, then let them guide your next action."
          }
        ]
      },
      "de": {
        "name": "Drück X fürs Drama",
        "title": "Spiele ohne Zurückspulen zur Wunschszene weiter",
        "objective": "Öffne eine interaktive Realfilmgeschichte und akzeptiere ihre ersten Entscheidungen. Spiele ohne Zurückspulen zur Wunschszene weiter. Erreiche eine unumkehrbare Entscheidung.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Ganzer Dialog",
            "description": "Lass jede gesprochene oder geschriebene Zeile enden, bevor du fortfährst."
          },
          {
            "scope": "gameplay",
            "title": "Hör zuerst zu",
            "description": "Halte für Dialoge und Weltgeräusche inne und lass sie den nächsten Schritt bestimmen."
          }
        ]
      }
    }
  },
  {
    "moodId": "curious",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 220,
    "translations": {
      "en": {
        "name": "Only Words",
        "title": "Resolve one scene using only its text",
        "objective": "Open a game that expresses its world mainly through words. Enter one scene and work only with the text it gives you. Resolve the scene.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "No Outside Help",
            "description": "Rely only on the game: no guides, wikis, solution videos, or external maps."
          },
          {
            "scope": "gameplay",
            "title": "First Instinct",
            "description": "Take the first sincere choice that feels right without comparing every alternative."
          }
        ]
      },
      "de": {
        "name": "Nur Worte",
        "title": "Löse eine Szene nur mit ihrem Text",
        "objective": "Öffne ein Spiel, das seine Welt hauptsächlich durch Worte ausdrückt. Betritt eine Szene und arbeite nur mit ihrem Text. Löse die Szene.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keine externe Hilfe",
            "description": "Verlasse dich nur auf das Spiel: keine Guides, Wikis, Lösungsvideos oder externen Karten."
          },
          {
            "scope": "gameplay",
            "title": "Erster Impuls",
            "description": "Nimm die erste ehrliche Wahl, die sich richtig anfühlt, ohne alle Alternativen zu vergleichen."
          }
        ]
      }
    }
  },
  {
    "moodId": "curious",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 210,
    "translations": {
      "en": {
        "name": "Unknown Sport",
        "title": "Learn one rule from an unfamiliar sports game",
        "objective": "Choose a sports game whose rules you barely know. Play one event and watch for the rule that changes your strategy. Finish and explain that rule.",
        "tips": [
          {
            "scope": "game-selection",
            "title": "Sports Pick",
            "description": "Choose a sports game with a complete short match or event."
          },
          {
            "scope": "gameplay",
            "title": "Let It Stand",
            "description": "Accept the first honest result, even when reloading or rerolling could improve it."
          }
        ]
      },
      "de": {
        "name": "Unbekannte Sportart",
        "title": "Lerne in einem unbekannten Sportspiel eine Regel",
        "objective": "Wähle ein Sportspiel, dessen Regeln du kaum kennst. Spiele einen Wettbewerb und achte auf die Regel, die deine Strategie verändert. Beende ihn und erkläre diese Regel.",
        "tips": [
          {
            "scope": "game-selection",
            "title": "Sportspiel wählen",
            "description": "Nimm ein Sportspiel mit kurzem vollständigem Match oder Event."
          },
          {
            "scope": "gameplay",
            "title": "Lass es gelten",
            "description": "Akzeptiere das erste ehrliche Ergebnis, auch wenn Neuladen oder Neuwürfeln es verbessern könnte."
          }
        ]
      }
    }
  },
  {
    "moodId": "low-energy",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 150,
    "translations": {
      "en": {
        "name": "Current Comfort",
        "title": "Start without changing your position",
        "objective": "Choose a game comfortable with the screen and controller already in place. Start without changing your position. Finish one short activity.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keep Your Setup",
            "description": "Keep the current character, loadout, deck, or vehicle for the entire quest."
          },
          {
            "scope": "gameplay",
            "title": "Stop Cleanly",
            "description": "End at a safe save point or result screen without starting something new."
          }
        ]
      },
      "de": {
        "name": "Bequemer Start",
        "title": "Starte, ohne deine Position zu verändern",
        "objective": "Wähle ein Spiel, das mit deinem aktuellen Bildschirm und Controller bequem ist. Starte, ohne deine Position zu verändern. Beende eine kurze Aktivität.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Behalte dein Setup",
            "description": "Behalte die aktuelle Figur, Ausrüstung, das Deck oder Fahrzeug während der ganzen Quest."
          },
          {
            "scope": "gameplay",
            "title": "Sauber aufhören",
            "description": "Höre an einem sicheren Speicherpunkt oder Ergebnisbildschirm auf, ohne etwas Neues zu starten."
          }
        ]
      }
    }
  },
  {
    "moodId": "low-energy",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 180,
    "translations": {
      "en": {
        "name": "Patient Turns",
        "title": "Let every turn wait until your decision feels simple",
        "objective": "Open a turn-based game and choose one contained encounter. Let every turn wait until your decision feels simple. Finish the encounter.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Move Without Rushing",
            "description": "Avoid sprinting, boosting, or skipping ahead; let the journey set the pace."
          },
          {
            "scope": "gameplay",
            "title": "First Instinct",
            "description": "Take the first sincere choice that feels right without comparing every alternative."
          }
        ]
      },
      "de": {
        "name": "Geduldige Züge",
        "title": "Lass jeden Zug warten, bis deine Entscheidung einfach wirkt",
        "objective": "Öffne ein rundenbasiertes Spiel und wähle eine begrenzte Begegnung. Lass jeden Zug warten, bis deine Entscheidung einfach wirkt. Beende die Begegnung.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Ohne Eile",
            "description": "Vermeide Sprinten, Boosts und Abkürzungen; lass den Weg das Tempo bestimmen."
          },
          {
            "scope": "gameplay",
            "title": "Erster Impuls",
            "description": "Nimm die erste ehrliche Wahl, die sich richtig anfühlt, ohne alle Alternativen zu vergleichen."
          }
        ]
      }
    }
  },
  {
    "moodId": "low-energy",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 170,
    "translations": {
      "en": {
        "name": "Story Flow",
        "title": "Continue one scene and let the story carry the session",
        "objective": "Choose a narrative game with little execution pressure. Continue one scene and let the story carry the session. Reach the next scene break.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Listen First",
            "description": "Pause for dialogue and world sounds, then let them guide your next action."
          },
          {
            "scope": "gameplay",
            "title": "Minimal HUD",
            "description": "Hide optional UI, but keep the quest's required goal and finish indicators visible."
          }
        ]
      },
      "de": {
        "name": "Geschichtenfluss",
        "title": "Setze eine Szene fort und lass die Geschichte die Session tragen",
        "objective": "Wähle ein narratives Spiel mit wenig Ausführungsdruck. Setze eine Szene fort und lass die Geschichte die Session tragen. Erreiche den nächsten Szenenwechsel.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Hör zuerst zu",
            "description": "Halte für Dialoge und Weltgeräusche inne und lass sie den nächsten Schritt bestimmen."
          },
          {
            "scope": "gameplay",
            "title": "Minimales HUD",
            "description": "Blende optionale Anzeigen aus, aber behalte Ziel und Abschluss der Quest sichtbar."
          }
        ]
      }
    }
  },
  {
    "moodId": "low-energy",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 160,
    "translations": {
      "en": {
        "name": "Helpful Assists",
        "title": "Start the nearest activity",
        "objective": "Open a game with one helpful assist and enable it without apology. Start the nearest activity. Reach the next save, checkpoint, or result screen.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keep Your Setup",
            "description": "Keep the current character, loadout, deck, or vehicle for the entire quest."
          },
          {
            "scope": "gameplay",
            "title": "Let It Stand",
            "description": "Accept the first honest result, even when reloading or rerolling could improve it."
          }
        ]
      },
      "de": {
        "name": "Hilfreiche Assists",
        "title": "Starte die nächste Aktivität",
        "objective": "Öffne ein Spiel mit einer hilfreichen Assistenz und aktiviere sie ohne Rechtfertigung. Starte die nächste Aktivität. Erreiche den nächsten Speicherpunkt, Kontrollpunkt oder Ergebnisbildschirm.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Behalte dein Setup",
            "description": "Behalte die aktuelle Figur, Ausrüstung, das Deck oder Fahrzeug während der ganzen Quest."
          },
          {
            "scope": "gameplay",
            "title": "Lass es gelten",
            "description": "Akzeptiere das erste ehrliche Ergebnis, auch wenn Neuladen oder Neuwürfeln es verbessern könnte."
          }
        ]
      }
    }
  },
  {
    "moodId": "low-energy",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 150,
    "translations": {
      "en": {
        "name": "Minimal Input",
        "title": "Start one short activity with that simple input",
        "objective": "Choose a game you can control with one hand. Start one short activity with that simple input. Reach the next save, checkpoint, or result screen.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "One Main Tool",
            "description": "Choose one tool or action and make it your main answer throughout the quest."
          },
          {
            "scope": "gameplay",
            "title": "Move Without Rushing",
            "description": "Avoid sprinting, boosting, or skipping ahead; let the journey set the pace."
          }
        ]
      },
      "de": {
        "name": "Minimale Eingabe",
        "title": "Starte eine kurze Aktivität mit dieser einfachen Eingabe",
        "objective": "Wähle ein Spiel, das du mit einer Hand steuern kannst. Starte eine kurze Aktivität mit dieser einfachen Eingabe. Erreiche den nächsten Speicherpunkt, Kontrollpunkt oder Ergebnisbildschirm.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Ein Hauptwerkzeug",
            "description": "Wähle ein Werkzeug oder eine Aktion als deine Hauptlösung für die ganze Quest."
          },
          {
            "scope": "gameplay",
            "title": "Ohne Eile",
            "description": "Vermeide Sprinten, Boosts und Abkürzungen; lass den Weg das Tempo bestimmen."
          }
        ]
      }
    }
  },
  {
    "moodId": "low-energy",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 170,
    "translations": {
      "en": {
        "name": "Visual-Novel Scene",
        "title": "Read one visual-novel scene without skipping",
        "objective": "Open a visual novel at the start of one scene. Read every line without skipping text or voices. Reach the scene ending.",
        "tips": [
          {
            "scope": "game-selection",
            "title": "Visual Novel",
            "description": "Choose one with clearly separated scenes and a current save."
          },
          {
            "scope": "gameplay",
            "title": "First Instinct",
            "description": "Take the first sincere choice that feels right without comparing every alternative."
          }
        ]
      },
      "de": {
        "name": "Visual-Novel-Szene",
        "title": "Lies eine Visual-Novel-Szene ohne Überspringen",
        "objective": "Öffne eine Visual Novel am Anfang einer Szene. Lies jede Zeile, ohne Text oder Stimmen zu überspringen. Erreiche das Szenenende.",
        "tips": [
          {
            "scope": "game-selection",
            "title": "Visual Novel",
            "description": "Nimm eine mit klar getrennten Szenen und aktuellem Spielstand."
          },
          {
            "scope": "gameplay",
            "title": "Erster Impuls",
            "description": "Nimm die erste ehrliche Wahl, die sich richtig anfühlt, ohne alle Alternativen zu vergleichen."
          }
        ]
      }
    }
  },
  {
    "moodId": "low-energy",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 170,
    "translations": {
      "en": {
        "name": "Unhurried Puzzle",
        "title": "Solve one untimed puzzle-game board",
        "objective": "Open a puzzle game with no clock or enemies. Choose one unsolved board and take your time. Solve it.",
        "tips": [
          {
            "scope": "game-selection",
            "title": "Separate Puzzles",
            "description": "Choose a puzzle game that shows individual boards or levels."
          },
          {
            "scope": "gameplay",
            "title": "No Outside Help",
            "description": "Rely only on the game: no guides, wikis, solution videos, or external maps."
          }
        ]
      },
      "de": {
        "name": "Gemütliches Rätsel",
        "title": "Löse im Rätselspiel ein Spielfeld ohne Zeitdruck",
        "objective": "Öffne ein Rätselspiel ohne Uhr oder Gegner. Wähle ein ungelöstes Feld und nimm dir Zeit. Löse es.",
        "tips": [
          {
            "scope": "game-selection",
            "title": "Einzelne Rätsel",
            "description": "Nimm ein Rätselspiel mit einzeln sichtbaren Feldern oder Leveln."
          },
          {
            "scope": "gameplay",
            "title": "Keine externe Hilfe",
            "description": "Verlasse dich nur auf das Spiel: keine Guides, Wikis, Lösungsvideos oder externen Karten."
          }
        ]
      }
    }
  },
  {
    "moodId": "low-energy",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 170,
    "translations": {
      "en": {
        "name": "Small System",
        "title": "Follow one routine without expanding or optimizing",
        "objective": "Open one small system that already works. Perform its normal routine without expanding or optimizing it. Finish the routine.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "One Space",
            "description": "Keep every action and change inside one small, clearly bounded area."
          },
          {
            "scope": "gameplay",
            "title": "No Shopping",
            "description": "Buy nothing during the quest; use only what you already own or find."
          }
        ]
      },
      "de": {
        "name": "Kleines System",
        "title": "Folge einer Routine ohne Ausbau oder Optimierung",
        "objective": "Öffne ein kleines System, das bereits funktioniert. Führe seine normale Routine aus, ohne es zu erweitern oder zu optimieren. Beende die Routine.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Ein Bereich",
            "description": "Beschränke jede Aktion und Änderung auf einen kleinen, klar abgegrenzten Bereich."
          },
          {
            "scope": "gameplay",
            "title": "Nicht einkaufen",
            "description": "Kaufe während der Quest nichts; nutze nur, was du bereits besitzt oder findest."
          }
        ]
      }
    }
  },
  {
    "moodId": "low-energy",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 180,
    "translations": {
      "en": {
        "name": "Walking Session",
        "title": "Walk between them without sprinting or fast travel",
        "objective": "Choose two safe landmarks in a familiar world. Walk between them without sprinting or fast travel. Arrive.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "World Audio",
            "description": "Lower the music enough to notice environmental sounds, voices, machinery, and distant activity."
          },
          {
            "scope": "gameplay",
            "title": "Bring Back One Image",
            "description": "Capture one screenshot that clearly shows the finished result or final stopping point."
          }
        ]
      },
      "de": {
        "name": "Spaziergang",
        "title": "Geh ohne Sprint oder Schnellreise von einem zum anderen",
        "objective": "Wähle zwei sichere Orientierungspunkte in einer vertrauten Welt. Geh ohne Sprint oder Schnellreise von einem zum anderen. Komm an.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Geräusche der Welt",
            "description": "Drehe die Musik so weit herunter, dass du Umgebung, Stimmen und entfernte Aktivität wahrnimmst."
          },
          {
            "scope": "gameplay",
            "title": "Bring ein Bild mit",
            "description": "Mache einen Screenshot, der das fertige Ergebnis oder den endgültigen Haltepunkt klar zeigt."
          }
        ]
      }
    }
  },
  {
    "moodId": "low-energy",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 170,
    "translations": {
      "en": {
        "name": "Familiar Save",
        "title": "Finish one familiar task without the quest log",
        "objective": "Open a familiar save with one task you already understand, complete that task without checking the full quest log, and save after its completion notice.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keep Your Setup",
            "description": "Keep the current character, loadout, deck, or vehicle for the entire quest."
          },
          {
            "scope": "gameplay",
            "title": "Stop Cleanly",
            "description": "End at a safe save point or result screen without starting something new."
          }
        ]
      },
      "de": {
        "name": "Vertrauter Spielstand",
        "title": "Erledige eine bekannte Aufgabe ohne Questlog",
        "objective": "Öffne einen vertrauten Spielstand mit einer bekannten Aufgabe, erledige sie ohne das ganze Questlog zu prüfen und speichere nach ihrer Abschlussmeldung.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Behalte dein Setup",
            "description": "Behalte die aktuelle Figur, Ausrüstung, das Deck oder Fahrzeug während der ganzen Quest."
          },
          {
            "scope": "gameplay",
            "title": "Sauber aufhören",
            "description": "Höre an einem sicheren Speicherpunkt oder Ergebnisbildschirm auf, ohne etwas Neues zu starten."
          }
        ]
      }
    }
  },
  {
    "moodId": "low-energy",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 160,
    "translations": {
      "en": {
        "name": "Quiet Photograph",
        "title": "Walk until one view makes you want to stop",
        "objective": "Open a scenic world, walk to the first named landmark you can see, and keep one screenshot taken there.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Minimal HUD",
            "description": "Hide optional UI, but keep the quest's required goal and finish indicators visible."
          },
          {
            "scope": "gameplay",
            "title": "Ground Level",
            "description": "Keep the camera close to the character or world instead of overhead or distant."
          }
        ]
      },
      "de": {
        "name": "Ruhiges Foto",
        "title": "Geh, bis eine Aussicht dich anhalten lässt",
        "objective": "Öffne eine malerische Welt, gehe zum ersten sichtbaren benannten Wahrzeichen und behalte einen dort aufgenommenen Screenshot.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Minimales HUD",
            "description": "Blende optionale Anzeigen aus, aber behalte Ziel und Abschluss der Quest sichtbar."
          },
          {
            "scope": "gameplay",
            "title": "Auf Augenhöhe",
            "description": "Halte die Kamera nah an Figur oder Welt statt über dir oder weit entfernt."
          }
        ]
      }
    }
  },
  {
    "moodId": "low-energy",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 160,
    "translations": {
      "en": {
        "name": "Soundtrack Break",
        "title": "Start one activity and listen to its track without interruption",
        "objective": "Open a familiar game whose music can carry the session. Start one activity and listen to its track without interruption. Reach the next save, checkpoint, or result screen.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Listen First",
            "description": "Pause for dialogue and world sounds, then let them guide your next action."
          },
          {
            "scope": "gameplay",
            "title": "Minimal HUD",
            "description": "Hide optional UI, but keep the quest's required goal and finish indicators visible."
          }
        ]
      },
      "de": {
        "name": "Soundtrack-Auszeit",
        "title": "Starte eine Aktivität und höre ihr Stück ohne Unterbrechung",
        "objective": "Öffne ein vertrautes Spiel, dessen Musik die Session tragen kann. Starte eine Aktivität und höre ihr Stück ohne Unterbrechung. Erreiche den nächsten Speicherpunkt, Kontrollpunkt oder Ergebnisbildschirm.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Hör zuerst zu",
            "description": "Halte für Dialoge und Weltgeräusche inne und lass sie den nächsten Schritt bestimmen."
          },
          {
            "scope": "gameplay",
            "title": "Minimales HUD",
            "description": "Blende optionale Anzeigen aus, aber behalte Ziel und Abschluss der Quest sichtbar."
          }
        ]
      }
    }
  },
  {
    "moodId": "low-energy",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 150,
    "translations": {
      "en": {
        "name": "Nothing to Lose",
        "title": "Start one activity and accept the first honest result",
        "objective": "Choose a mode where failure costs almost nothing. Start one activity and accept the first honest result. Reach the next save, checkpoint, or result screen.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Favorite Setup",
            "description": "Use the character, loadout, deck, or vehicle you most associate with this game."
          },
          {
            "scope": "gameplay",
            "title": "World Audio",
            "description": "Lower the music enough to notice environmental sounds, voices, machinery, and distant activity."
          }
        ]
      },
      "de": {
        "name": "Nichts zu verlieren",
        "title": "Starte eine Aktivität und akzeptiere das erste ehrliche Ergebnis",
        "objective": "Wähle einen Modus, in dem Scheitern fast nichts kostet. Starte eine Aktivität und akzeptiere das erste ehrliche Ergebnis. Erreiche den nächsten Speicherpunkt, Kontrollpunkt oder Ergebnisbildschirm.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Lieblings-Setup",
            "description": "Nutze die Figur, Ausrüstung, das Deck oder Fahrzeug, das du damit verbindest."
          },
          {
            "scope": "gameplay",
            "title": "Geräusche der Welt",
            "description": "Drehe die Musik so weit herunter, dass du Umgebung, Stimmen und entfernte Aktivität wahrnimmst."
          }
        ]
      }
    }
  },
  {
    "moodId": "low-energy",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 170,
    "translations": {
      "en": {
        "name": "One In-Game Day",
        "title": "Finish one ordinary day in a daily simulation",
        "objective": "Open a simulation with daily cycles and begin a fresh morning. Follow the day's normal routine without adding projects. Save at bedtime.",
        "tips": [
          {
            "scope": "game-selection",
            "title": "Simulation Pick",
            "description": "Choose a simulation with a visible cycle and an existing state."
          },
          {
            "scope": "gameplay",
            "title": "Favorite Setup",
            "description": "Use the character, loadout, deck, or vehicle you most associate with this game."
          }
        ]
      },
      "de": {
        "name": "Ein Spieltag",
        "title": "Beende in einer Alltagssimulation einen normalen Tag",
        "objective": "Öffne eine Simulation mit Tageszyklen und beginne einen neuen Morgen. Folge der normalen Routine, ohne Projekte hinzuzufügen. Speichere zur Schlafenszeit.",
        "tips": [
          {
            "scope": "game-selection",
            "title": "Simulation wählen",
            "description": "Nimm eine Simulation mit sichtbarem Zyklus und bestehendem Spielstand."
          },
          {
            "scope": "gameplay",
            "title": "Lieblings-Setup",
            "description": "Nutze die Figur, Ausrüstung, das Deck oder Fahrzeug, das du damit verbindest."
          }
        ]
      }
    }
  },
  {
    "moodId": "low-energy",
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 20,
    "rewardPoints": 200,
    "translations": {
      "en": {
        "name": "Story Episode",
        "title": "Start the next unfinished episode and nothing else",
        "objective": "Choose a story game divided into short episodes. Start the next unfinished episode and nothing else. Reach its ending.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Listen First",
            "description": "Pause for dialogue and world sounds, then let them guide your next action."
          },
          {
            "scope": "gameplay",
            "title": "Stop Cleanly",
            "description": "End at a safe save point or result screen without starting something new."
          }
        ]
      },
      "de": {
        "name": "Story-Episode",
        "title": "Starte nur die nächste unfertige Episode",
        "objective": "Wähle ein Story-Spiel mit kurzen Episoden. Starte nur die nächste unfertige Episode. Erreiche ihr Ende.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Hör zuerst zu",
            "description": "Halte für Dialoge und Weltgeräusche inne und lass sie den nächsten Schritt bestimmen."
          },
          {
            "scope": "gameplay",
            "title": "Sauber aufhören",
            "description": "Höre an einem sicheren Speicherpunkt oder Ergebnisbildschirm auf, ohne etwas Neues zu starten."
          }
        ]
      }
    }
  },
  {
    "moodId": "low-energy",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 160,
    "translations": {
      "en": {
        "name": "Useful Craft",
        "title": "Gather only nearby materials and make that item",
        "objective": "Choose one useful item with a simple recipe. Gather only nearby materials and make that item. Use or place it.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Bring Back One Image",
            "description": "Capture one screenshot that clearly shows the finished result or final stopping point."
          },
          {
            "scope": "gameplay",
            "title": "One Main Tool",
            "description": "Choose one tool or action and make it your main answer throughout the quest."
          }
        ]
      },
      "de": {
        "name": "Nützliches Werkstück",
        "title": "Sammle nur nahe Materialien und stelle ihn her",
        "objective": "Wähle einen nützlichen Gegenstand mit einem einfachen Rezept. Sammle nur nahe Materialien und stelle ihn her. Nutze oder platziere ihn.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Bring ein Bild mit",
            "description": "Mache einen Screenshot, der das fertige Ergebnis oder den endgültigen Haltepunkt klar zeigt."
          },
          {
            "scope": "gameplay",
            "title": "Ein Hauptwerkzeug",
            "description": "Wähle ein Werkzeug oder eine Aktion als deine Hauptlösung für die ganze Quest."
          }
        ]
      }
    }
  },
  {
    "moodId": "low-energy",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 170,
    "translations": {
      "en": {
        "name": "Menu Task",
        "title": "Complete it without entering a mission",
        "objective": "Open a save with one useful task available entirely from its home menu. Complete it without entering a mission. Leave the menu finished.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "First Instinct",
            "description": "Take the first sincere choice that feels right without comparing every alternative."
          },
          {
            "scope": "gameplay",
            "title": "Let It Stand",
            "description": "Accept the first honest result, even when reloading or rerolling could improve it."
          }
        ]
      },
      "de": {
        "name": "Menüaufgabe",
        "title": "Erledige sie, ohne eine Mission zu betreten",
        "objective": "Öffne einen Spielstand mit einer nützlichen Aufgabe direkt im Basismenü. Erledige sie, ohne eine Mission zu betreten. Verlasse das Menü fertig.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Erster Impuls",
            "description": "Nimm die erste ehrliche Wahl, die sich richtig anfühlt, ohne alle Alternativen zu vergleichen."
          },
          {
            "scope": "gameplay",
            "title": "Lass es gelten",
            "description": "Akzeptiere das erste ehrliche Ergebnis, auch wenn Neuladen oder Neuwürfeln es verbessern könnte."
          }
        ]
      }
    }
  },
  {
    "moodId": "low-energy",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 160,
    "translations": {
      "en": {
        "name": "Ambient Company",
        "title": "Choose one gentle activity and let the background systems continue",
        "objective": "Open a calm world that can run around you. Choose one gentle activity and let the background systems continue. Reach the next save, checkpoint, or result screen.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Move Without Rushing",
            "description": "Avoid sprinting, boosting, or skipping ahead; let the journey set the pace."
          },
          {
            "scope": "gameplay",
            "title": "Minimal HUD",
            "description": "Hide optional UI, but keep the quest's required goal and finish indicators visible."
          }
        ]
      },
      "de": {
        "name": "Ruhige Begleitung",
        "title": "Wähle eine sanfte Aktivität und lass die Hintergrundsysteme arbeiten",
        "objective": "Öffne eine ruhige Welt, die um dich herum weiterlaufen kann. Wähle eine sanfte Aktivität und lass die Hintergrundsysteme arbeiten. Erreiche den nächsten Speicherpunkt, Kontrollpunkt oder Ergebnisbildschirm.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Ohne Eile",
            "description": "Vermeide Sprinten, Boosts und Abkürzungen; lass den Weg das Tempo bestimmen."
          },
          {
            "scope": "gameplay",
            "title": "Minimales HUD",
            "description": "Blende optionale Anzeigen aus, aber behalte Ziel und Abschluss der Quest sichtbar."
          }
        ]
      }
    }
  },
  {
    "moodId": "low-energy",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 160,
    "translations": {
      "en": {
        "name": "One Conversation",
        "title": "Stay in that conversation without opening another quest",
        "objective": "Choose one familiar character with something new to say. Stay in that conversation without opening another quest. Continue until the dialogue menu closes.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Listen First",
            "description": "Pause for dialogue and world sounds, then let them guide your next action."
          },
          {
            "scope": "gameplay",
            "title": "Full Dialogue",
            "description": "Let every spoken or written line finish before advancing."
          }
        ]
      },
      "de": {
        "name": "Ein Gespräch",
        "title": "Bleib in diesem Gespräch, ohne eine andere Quest zu öffnen",
        "objective": "Wähle eine vertraute Figur, die etwas Neues zu sagen hat. Bleib in diesem Gespräch, ohne eine andere Quest zu öffnen. Spiele weiter, bis sich das Dialogmenü schließt.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Hör zuerst zu",
            "description": "Halte für Dialoge und Weltgeräusche inne und lass sie den nächsten Schritt bestimmen."
          },
          {
            "scope": "gameplay",
            "title": "Ganzer Dialog",
            "description": "Lass jede gesprochene oder geschriebene Zeile enden, bevor du fortfährst."
          }
        ]
      }
    }
  },
  {
    "moodId": "low-energy",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 170,
    "translations": {
      "en": {
        "name": "Slow Vehicle",
        "title": "Set one destination and avoid every speed boost",
        "objective": "Choose one vehicle that can carry you at a steady pace. Set one destination and avoid every speed boost. Arrive.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "No Fast Travel",
            "description": "Travel through the playable world instead of skipping the journey through a menu."
          },
          {
            "scope": "gameplay",
            "title": "Minimal HUD",
            "description": "Hide optional UI, but keep the quest's required goal and finish indicators visible."
          }
        ]
      },
      "de": {
        "name": "Langsame Fahrt",
        "title": "Setze ein Ziel und vermeide jeden Geschwindigkeitsschub",
        "objective": "Wähle ein Fahrzeug, das dich in gleichmäßigem Tempo trägt. Setze ein Ziel und vermeide jeden Geschwindigkeitsschub. Komm an.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keine Schnellreise",
            "description": "Reise durch die spielbare Welt, statt den Weg über ein Menü zu überspringen."
          },
          {
            "scope": "gameplay",
            "title": "Minimales HUD",
            "description": "Blende optionale Anzeigen aus, aber behalte Ziel und Abschluss der Quest sichtbar."
          }
        ]
      }
    }
  },
  {
    "moodId": "low-energy",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 160,
    "translations": {
      "en": {
        "name": "Familiar Puzzle",
        "title": "Choose the first unsolved board and trust your familiar method",
        "objective": "Open a puzzle whose rules you already know. Choose the first unsolved board and trust your familiar method. Solve it.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keep Your Setup",
            "description": "Keep the current character, loadout, deck, or vehicle for the entire quest."
          },
          {
            "scope": "gameplay",
            "title": "Move Without Rushing",
            "description": "Avoid sprinting, boosting, or skipping ahead; let the journey set the pace."
          }
        ]
      },
      "de": {
        "name": "Vertrautes Rätsel",
        "title": "Wähle das erste ungelöste Feld und vertraue deiner vertrauten Methode",
        "objective": "Öffne ein Rätsel, dessen Regeln du bereits kennst. Wähle das erste ungelöste Feld und vertraue deiner vertrauten Methode. Löse es.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Behalte dein Setup",
            "description": "Behalte die aktuelle Figur, Ausrüstung, das Deck oder Fahrzeug während der ganzen Quest."
          },
          {
            "scope": "gameplay",
            "title": "Ohne Eile",
            "description": "Vermeide Sprinten, Boosts und Abkürzungen; lass den Weg das Tempo bestimmen."
          }
        ]
      }
    }
  },
  {
    "moodId": "low-energy",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 190,
    "translations": {
      "en": {
        "name": "Support Role",
        "title": "Help teammates succeed without taking the lead",
        "objective": "Join one team activity and choose its clearest support role. Help teammates succeed without taking the lead. Finish the team result.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Stay Together",
            "description": "Remain within sight, communication, or support range of another player throughout the activity."
          },
          {
            "scope": "gameplay",
            "title": "No Microphone Needed",
            "description": "Keep the microphone off and communicate through pings, movement, emotes, or short text."
          }
        ]
      },
      "de": {
        "name": "Unterstützungsrolle",
        "title": "Hilf Mitspielern zum Erfolg, ohne die Führung zu übernehmen",
        "objective": "Tritt einer Teamaktivität bei und wähle ihre klarste Unterstützungsrolle. Hilf Mitspielern zum Erfolg, ohne die Führung zu übernehmen. Beende das Teamergebnis.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Bleibt zusammen",
            "description": "Bleibe während der Aktivität in Sicht-, Kommunikations- oder Unterstützungsweite eines Mitspielers."
          },
          {
            "scope": "gameplay",
            "title": "Kein Mikrofon nötig",
            "description": "Lass das Mikrofon aus und kommuniziere mit Pings, Bewegung, Emotes oder kurzem Text."
          }
        ]
      }
    }
  },
  {
    "moodId": "low-energy",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 160,
    "translations": {
      "en": {
        "name": "Nearby Collection",
        "title": "Gather the nearest three without entering another region",
        "objective": "Open a save with collectibles near your current position. Gather the nearest three without entering another region. Collect all three.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Bring Back One Image",
            "description": "Capture one screenshot that clearly shows the finished result or final stopping point."
          },
          {
            "scope": "gameplay",
            "title": "No Map",
            "description": "Navigate through landmarks and memory without opening a map or route overlay."
          }
        ]
      },
      "de": {
        "name": "Sammlung in der Nähe",
        "title": "Hole die nächsten drei, ohne eine andere Region zu betreten",
        "objective": "Öffne einen Spielstand mit Sammelobjekten nahe deiner Position. Hole die nächsten drei, ohne eine andere Region zu betreten. Sammle alle drei.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Bring ein Bild mit",
            "description": "Mache einen Screenshot, der das fertige Ergebnis oder den endgültigen Haltepunkt klar zeigt."
          },
          {
            "scope": "gameplay",
            "title": "Keine Karte",
            "description": "Navigiere mit Orientierungspunkten und Erinnerung, ohne Karte oder eingeblendete Route."
          }
        ]
      }
    }
  },
  {
    "moodId": "low-energy",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 160,
    "translations": {
      "en": {
        "name": "Current Settings",
        "title": "Start the nearest activity without changing settings or gear",
        "objective": "Open a familiar game exactly as it is configured. Start the nearest activity without changing settings or gear. Reach the next save, checkpoint, or result screen.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Minimal HUD",
            "description": "Hide optional UI, but keep the quest's required goal and finish indicators visible."
          },
          {
            "scope": "gameplay",
            "title": "Let It Stand",
            "description": "Accept the first honest result, even when reloading or rerolling could improve it."
          }
        ]
      },
      "de": {
        "name": "Aktuelle Einstellungen",
        "title": "Starte die nächste Aktivität ohne Änderungen an Einstellungen oder Ausrüstung",
        "objective": "Öffne ein vertrautes Spiel genau mit seiner aktuellen Konfiguration. Starte die nächste Aktivität ohne Änderungen an Einstellungen oder Ausrüstung. Erreiche den nächsten Speicherpunkt, Kontrollpunkt oder Ergebnisbildschirm.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Minimales HUD",
            "description": "Blende optionale Anzeigen aus, aber behalte Ziel und Abschluss der Quest sichtbar."
          },
          {
            "scope": "gameplay",
            "title": "Lass es gelten",
            "description": "Akzeptiere das erste ehrliche Ergebnis, auch wenn Neuladen oder Neuwürfeln es verbessern könnte."
          }
        ]
      }
    }
  },
  {
    "moodId": "low-energy",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 160,
    "translations": {
      "en": {
        "name": "Easy Replay",
        "title": "Replay the familiar level without hunting secrets or a better score",
        "objective": "Choose one easy level whose layout you remember. Replay the familiar level without hunting secrets or a better score. Reach its ending.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Keep Your Setup",
            "description": "Keep the current character, loadout, deck, or vehicle for the entire quest."
          },
          {
            "scope": "gameplay",
            "title": "Stop Cleanly",
            "description": "End at a safe save point or result screen without starting something new."
          }
        ]
      },
      "de": {
        "name": "Einfache Wiederholung",
        "title": "Spiele das vertraute Level ohne Geheimnis- oder Rekordjagd erneut",
        "objective": "Wähle ein leichtes Level, dessen Aufbau du kennst. Spiele das vertraute Level ohne Geheimnis- oder Rekordjagd erneut. Erreiche sein Ende.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Behalte dein Setup",
            "description": "Behalte die aktuelle Figur, Ausrüstung, das Deck oder Fahrzeug während der ganzen Quest."
          },
          {
            "scope": "gameplay",
            "title": "Sauber aufhören",
            "description": "Höre an einem sicheren Speicherpunkt oder Ergebnisbildschirm auf, ohne etwas Neues zu starten."
          }
        ]
      }
    }
  },
  {
    "moodId": "low-energy",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 170,
    "translations": {
      "en": {
        "name": "Scenic Seat",
        "title": "Sit there and let the environment change around you",
        "objective": "Choose a familiar world with a visible day-night or weather cycle, sit in one safe place, and stay until the displayed state changes once.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Move Without Rushing",
            "description": "Avoid sprinting, boosting, or skipping ahead; let the journey set the pace."
          },
          {
            "scope": "gameplay",
            "title": "Bring Back One Image",
            "description": "Capture one screenshot that clearly shows the finished result or final stopping point."
          }
        ]
      },
      "de": {
        "name": "Schöner Sitzplatz",
        "title": "Bleib dort sitzen und lass die Umgebung sich verändern",
        "objective": "Wähle eine vertraute Welt mit sichtbarem Tages- oder Wetterzyklus, bleib an einem sicheren Ort sitzen und warte auf einen angezeigten Zustandswechsel.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Ohne Eile",
            "description": "Vermeide Sprinten, Boosts und Abkürzungen; lass den Weg das Tempo bestimmen."
          },
          {
            "scope": "gameplay",
            "title": "Bring ein Bild mit",
            "description": "Mache einen Screenshot, der das fertige Ergebnis oder den endgültigen Haltepunkt klar zeigt."
          }
        ]
      }
    }
  },
  {
    "moodId": "low-energy",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 170,
    "translations": {
      "en": {
        "name": "System Cycle",
        "title": "Adjust one working simulation and watch a full cycle",
        "objective": "Open one working simulation and observe it before touching anything. Make only the single adjustment it most clearly needs. Watch one full cycle.",
        "tips": [
          {
            "scope": "game-selection",
            "title": "Simulation Pick",
            "description": "Choose a simulation with a visible cycle and an existing state."
          },
          {
            "scope": "gameplay",
            "title": "Let It Stand",
            "description": "Accept the first honest result, even when reloading or rerolling could improve it."
          }
        ]
      },
      "de": {
        "name": "Systemzyklus",
        "title": "Passe eine laufende Simulation an und beobachte einen Zyklus",
        "objective": "Öffne eine laufende Simulation und beobachte sie, bevor du etwas berührst. Nimm nur die eine klar nötige Anpassung vor. Beobachte einen vollständigen Zyklus.",
        "tips": [
          {
            "scope": "game-selection",
            "title": "Simulation wählen",
            "description": "Nimm eine Simulation mit sichtbarem Zyklus und bestehendem Spielstand."
          },
          {
            "scope": "gameplay",
            "title": "Lass es gelten",
            "description": "Akzeptiere das erste ehrliche Ergebnis, auch wenn Neuladen oder Neuwürfeln es verbessern könnte."
          }
        ]
      }
    }
  },
  {
    "moodId": "low-energy",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 150,
    "translations": {
      "en": {
        "name": "Safe Beginning",
        "title": "Stay inside its boundary and do one nearby task",
        "objective": "Return to the safest opening area in a familiar game. Stay inside its boundary and do one nearby task. Finish the task.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Use Basic Gear",
            "description": "Leave your strongest or rarest option unused and solve the quest with ordinary gear."
          },
          {
            "scope": "gameplay",
            "title": "Stop Cleanly",
            "description": "End at a safe save point or result screen without starting something new."
          }
        ]
      },
      "de": {
        "name": "Sicherer Startbereich",
        "title": "Bleib innerhalb seiner Grenze und erledige eine nahe Aufgabe",
        "objective": "Kehre zum sichersten Anfangsbereich eines vertrauten Spiels zurück. Bleib innerhalb seiner Grenze und erledige eine nahe Aufgabe. Beende die Aufgabe.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Nutze einfache Ausrüstung",
            "description": "Lass deine stärkste oder seltenste Option ungenutzt und löse die Quest mit gewöhnlicher Ausrüstung."
          },
          {
            "scope": "gameplay",
            "title": "Sauber aufhören",
            "description": "Höre an einem sicheren Speicherpunkt oder Ergebnisbildschirm auf, ohne etwas Neues zu starten."
          }
        ]
      }
    }
  },
  {
    "moodId": "low-energy",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 160,
    "translations": {
      "en": {
        "name": "Shape Reading",
        "title": "Start one level and follow only its visual cues",
        "objective": "Choose a game you can read through shapes and movement. Start one level and follow only its visual cues. Finish the level.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Minimal HUD",
            "description": "Hide optional UI, but keep the quest's required goal and finish indicators visible."
          },
          {
            "scope": "gameplay",
            "title": "First Instinct",
            "description": "Take the first sincere choice that feels right without comparing every alternative."
          }
        ]
      },
      "de": {
        "name": "Formen lesen",
        "title": "Starte ein Level und folge nur seinen visuellen Hinweisen",
        "objective": "Wähle ein Spiel, das du über Formen und Bewegung lesen kannst. Starte ein Level und folge nur seinen visuellen Hinweisen. Beende das Level.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Minimales HUD",
            "description": "Blende optionale Anzeigen aus, aber behalte Ziel und Abschluss der Quest sichtbar."
          },
          {
            "scope": "gameplay",
            "title": "Erster Impuls",
            "description": "Nimm die erste ehrliche Wahl, die sich richtig anfühlt, ohne alle Alternativen zu vergleichen."
          }
        ]
      }
    }
  },
  {
    "moodId": "low-energy",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 170,
    "translations": {
      "en": {
        "name": "Enough Is Enough",
        "title": "Make that point enough for today",
        "objective": "Open any familiar game and choose the nearest safe stopping point. Make that point enough for today. Save and stop.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Favorite Setup",
            "description": "Use the character, loadout, deck, or vehicle you most associate with this game."
          },
          {
            "scope": "gameplay",
            "title": "World Audio",
            "description": "Lower the music enough to notice environmental sounds, voices, machinery, and distant activity."
          }
        ]
      },
      "de": {
        "name": "Genug ist genug",
        "title": "Lass diesen Punkt für heute genug sein",
        "objective": "Öffne ein vertrautes Spiel und wähle den nächsten sicheren Haltepunkt. Lass diesen Punkt für heute genug sein. Speichere und höre auf.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Lieblings-Setup",
            "description": "Nutze die Figur, Ausrüstung, das Deck oder Fahrzeug, das du damit verbindest."
          },
          {
            "scope": "gameplay",
            "title": "Geräusche der Welt",
            "description": "Drehe die Musik so weit herunter, dass du Umgebung, Stimmen und entfernte Aktivität wahrnimmst."
          }
        ]
      }
    }
  },
  {
    "moodId": "low-energy",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "rewardPoints": 150,
    "translations": {
      "en": {
        "name": "Idle Check-In",
        "title": "Collect what is waiting and buy one useful upgrade",
        "objective": "Open one idle game that has progressed without you. Collect what is waiting and buy one useful upgrade. Leave it running or saved.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "First Instinct",
            "description": "Take the first sincere choice that feels right without comparing every alternative."
          },
          {
            "scope": "gameplay",
            "title": "Let It Stand",
            "description": "Accept the first honest result, even when reloading or rerolling could improve it."
          }
        ]
      },
      "de": {
        "name": "Idle-Check-in",
        "title": "Sammle den wartenden Fortschritt ein und kaufe ein nützliches Upgrade",
        "objective": "Öffne ein Idle Game, das ohne dich weitergelaufen ist. Sammle den wartenden Fortschritt ein und kaufe ein nützliches Upgrade. Lass es weiterlaufen oder speichere.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Erster Impuls",
            "description": "Nimm die erste ehrliche Wahl, die sich richtig anfühlt, ohne alle Alternativen zu vergleichen."
          },
          {
            "scope": "gameplay",
            "title": "Lass es gelten",
            "description": "Akzeptiere das erste ehrliche Ergebnis, auch wenn Neuladen oder Neuwürfeln es verbessern könnte."
          }
        ]
      }
    }
  },
  {
    "moodId": "low-energy",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 160,
    "translations": {
      "en": {
        "name": "Hidden-Object Scene",
        "title": "Work through the required list in order",
        "objective": "Open one hidden-object scene and inspect it from edge to edge. Work through the required list in order. Find every object.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "One Space",
            "description": "Keep every action and change inside one small, clearly bounded area."
          },
          {
            "scope": "gameplay",
            "title": "Move Without Rushing",
            "description": "Avoid sprinting, boosting, or skipping ahead; let the journey set the pace."
          }
        ]
      },
      "de": {
        "name": "Wimmelbildszene",
        "title": "Arbeite die benötigte Liste der Reihe nach ab",
        "objective": "Öffne eine Wimmelbildszene und untersuche sie von Rand zu Rand. Arbeite die benötigte Liste der Reihe nach ab. Finde jedes Objekt.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Ein Bereich",
            "description": "Beschränke jede Aktion und Änderung auf einen kleinen, klar abgegrenzten Bereich."
          },
          {
            "scope": "gameplay",
            "title": "Ohne Eile",
            "description": "Vermeide Sprinten, Boosts und Abkürzungen; lass den Weg das Tempo bestimmen."
          }
        ]
      }
    }
  },
  {
    "moodId": "low-energy",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 160,
    "translations": {
      "en": {
        "name": "Solitaire Hand",
        "title": "Play the hand without restarting for a better layout",
        "objective": "Open one digital solitaire game and accept the first deal. Play the hand without restarting for a better layout. Reach its result.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Scan the Board",
            "description": "Before every turn, scan the entire board once before choosing."
          },
          {
            "scope": "gameplay",
            "title": "Minimal HUD",
            "description": "Hide optional UI, but keep the quest's required goal and finish indicators visible."
          }
        ]
      },
      "de": {
        "name": "Solitaire-Runde",
        "title": "Spiele sie ohne Neustart für eine bessere Lage",
        "objective": "Öffne ein digitales Solitaire-Spiel und akzeptiere die erste Verteilung. Spiele sie ohne Neustart für eine bessere Lage. Erreiche ihr Ergebnis.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Überblick zuerst",
            "description": "Überblicke vor jedem Zug einmal das ganze Spielfeld, bevor du wählst."
          },
          {
            "scope": "gameplay",
            "title": "Minimales HUD",
            "description": "Blende optionale Anzeigen aus, aber behalte Ziel und Abschluss der Quest sichtbar."
          }
        ]
      }
    }
  },
  {
    "moodId": "low-energy",
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 170,
    "translations": {
      "en": {
        "name": "Auto-Battle",
        "title": "Let it resolve without changing the team mid-fight",
        "objective": "Open an auto-battler and set one lineup before combat. Let it resolve without changing the team mid-fight. Finish the round.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Scan the Board",
            "description": "Before every turn, scan the entire board once before choosing."
          },
          {
            "scope": "gameplay",
            "title": "Let It Stand",
            "description": "Accept the first honest result, even when reloading or rerolling could improve it."
          }
        ]
      },
      "de": {
        "name": "Auto-Battle",
        "title": "Lass ihn ohne Teamwechsel im Kampf laufen",
        "objective": "Öffne einen Auto-Battler und stelle vor dem Kampf eine Aufstellung fest. Lass ihn ohne Teamwechsel im Kampf laufen. Beende die Runde.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Überblick zuerst",
            "description": "Überblicke vor jedem Zug einmal das ganze Spielfeld, bevor du wählst."
          },
          {
            "scope": "gameplay",
            "title": "Lass es gelten",
            "description": "Akzeptiere das erste ehrliche Ergebnis, auch wenn Neuladen oder Neuwürfeln es verbessern könnte."
          }
        ]
      }
    }
  },
  {
    "moodId": "low-energy",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "rewardPoints": 190,
    "translations": {
      "en": {
        "name": "Walking Story",
        "title": "Follow one quiet path to the next scene",
        "objective": "Open a walking story with little danger. Continue the current path and let the next scene come to you. Reach the next chapter break.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Move Without Rushing",
            "description": "Avoid sprinting, boosting, or skipping ahead; let the journey set the pace."
          },
          {
            "scope": "gameplay",
            "title": "Listen First",
            "description": "Pause for dialogue and world sounds, then let them guide your next action."
          }
        ]
      },
      "de": {
        "name": "Walking-Story",
        "title": "Folge einem ruhigen Weg zur nächsten Szene",
        "objective": "Öffne eine Walking Story mit wenig Gefahr. Folge dem aktuellen Weg und lass die nächste Szene zu dir kommen. Erreiche den nächsten Kapitelwechsel.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Ohne Eile",
            "description": "Vermeide Sprinten, Boosts und Abkürzungen; lass den Weg das Tempo bestimmen."
          },
          {
            "scope": "gameplay",
            "title": "Hör zuerst zu",
            "description": "Halte für Dialoge und Weltgeräusche inne und lass sie den nächsten Schritt bestimmen."
          }
        ]
      }
    }
  },
  {
    "moodId": "low-energy",
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "rewardPoints": 180,
    "translations": {
      "en": {
        "name": "Turn-Based Encounter",
        "title": "Take each turn without speeding through animations",
        "objective": "Open a turn-based role-playing save with a nearby encounter. Take each turn without speeding through animations. Win and save safely.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Move Without Rushing",
            "description": "Avoid sprinting, boosting, or skipping ahead; let the journey set the pace."
          },
          {
            "scope": "gameplay",
            "title": "Defend First",
            "description": "Make the opening turn about defense or positioning when the rules allow it."
          }
        ]
      },
      "de": {
        "name": "Rundenkampf",
        "title": "Nimm jeden Zug, ohne Animationen zu beschleunigen",
        "objective": "Öffne einen rundenbasierten Rollenspielstand mit einer nahen Begegnung. Nimm jeden Zug, ohne Animationen zu beschleunigen. Gewinne und speichere sicher.",
        "tips": [
          {
            "scope": "gameplay",
            "title": "Ohne Eile",
            "description": "Vermeide Sprinten, Boosts und Abkürzungen; lass den Weg das Tempo bestimmen."
          },
          {
            "scope": "gameplay",
            "title": "Verteidige zuerst",
            "description": "Nutze den ersten Zug für Verteidigung oder Positionierung, wenn die Regeln es erlauben."
          }
        ]
      }
    }
  }
];
