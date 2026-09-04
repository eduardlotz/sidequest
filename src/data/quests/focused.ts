import { defineMoodQuests } from "./defineMoodQuests";

export const focusedQuests = defineMoodQuests("focused", [
  {
    id: "clean-run",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 20,
    genres: ["Action", "Platformer"],
    translations: {
      en: {
        name: "Clean Run",
        objective:
          "Choose a level you know well enough to finish. Complete it **without pausing, restarting, or opening a menu**, and accept the first final result.",
      },
      de: {
        name: "Sauberer Lauf",
        objective:
          "Wähle ein Level, das du sicher beenden kannst. Spiele es **ohne Pause, Neustart oder Menü** zu Ende und akzeptiere das erste Ergebnis.",
      },
    },
  },
  {
    id: "twenty-turns",
    minimumDurationMinutes: 10,
    suggestedDurationMinutes: 30,
    genres: ["Strategy", "Turn-Based"],
    translations: {
      en: {
        name: "Twenty Turns",
        objective:
          "Open a turn-based strategy save and state one goal before moving. Spend **exactly twenty turns** working only toward that goal, then save at the end of turn twenty.",
      },
      de: {
        name: "Zwanzig Züge",
        objective:
          "Öffne einen rundenbasierten Strategie-Spielstand und lege vor dem ersten Zug ein Ziel fest. Arbeite **genau zwanzig Züge** nur daran und speichere nach Zug zwanzig.",
      },
    },
  },
  {
    id: "one-build",
    minimumDurationMinutes: 8,
    suggestedDurationMinutes: 25,
    genres: ["Deckbuilder", "RPG"],
    translations: {
      en: {
        name: "One Build",
        objective:
          "Choose a game with builds, decks, or loadouts and commit to **one clear setup** before starting. Finish one mission or run without swapping its core pieces.",
      },
      de: {
        name: "Ein Build",
        objective:
          "Nimm ein Spiel mit Builds, Decks oder Ausrüstungen und lege vor dem Start **ein klares Setup** fest. Beende eine Mission oder einen Run, ohne seine Kernteile zu wechseln.",
      },
    },
  },
  {
    id: "headphones-on",
    minimumDurationMinutes: 8,
    suggestedDurationMinutes: 25,
    genres: ["Narrative", "Puzzle"],
    translations: {
      en: {
        name: "Headphones On",
        objective:
          "Choose a narrative or puzzle game whose sound matters. Put on headphones, silence outside notifications, and complete **one whole chapter or puzzle sequence** without switching apps.",
      },
      de: {
        name: "Kopfhörer auf",
        objective:
          "Nimm ein narratives Spiel oder Rätselspiel, bei dem Ton wichtig ist. Setze Kopfhörer auf, schalte Benachrichtigungen stumm und beende **ein ganzes Kapitel oder eine Rätselsequenz** ohne App-Wechsel.",
      },
    },
  },
  {
    id: "main-mission",
    customGameCompatibility: { capabilityIds: ["missions-or-levels"] },
    minimumDurationMinutes: 10,
    suggestedDurationMinutes: 30,
    genres: ["Story", "Action"],
    translations: {
      en: {
        name: "Main Mission",
        objective:
          "Open a story game with a main mission ready. Start and finish **that one mission** without side activities, inventory cleanup, or collectible detours.",
        gameObjective:
          "In **{{game}}**, continue the currently active main mission. Ignore side objectives and stop after **the next mission-complete screen or checkpoint**.",
      },
      de: {
        name: "Hauptmission",
        objective:
          "Öffne ein Story-Spiel mit einer verfügbaren Hauptmission. Starte und beende **genau diese Mission** ohne Nebenaktivitäten, Inventararbeit oder Sammel-Umwege.",
        gameObjective:
          "Setze in **{{game}}** die aktuell aktive Hauptmission fort. Ignoriere Nebenziele und h\u00F6re beim **n\u00E4chsten Abschlussbildschirm oder Kontrollpunkt** auf.",
      },
    },
  },
  {
    id: "score-block",
    customGameCompatibility: { capabilityIds: ["rounds-or-matches"] },
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 20,
    genres: ["Arcade", "Score Attack"],
    translations: {
      en: {
        name: "Score Block",
        objective:
          "Choose one score-based challenge and lock its difficulty and character. Make **three uninterrupted attempts**, record the highest result, and stop after the third.",
        gameObjective:
          "In **{{game}}**, play the same activity repeatedly until your score improves **three times**. Stop after the third improvement or six finished attempts.",
      },
      de: {
        name: "Punkteblock",
        objective:
          "Wähle eine Punkte-Herausforderung und lege Schwierigkeit und Figur fest. Spiele **drei ununterbrochene Versuche**, behalte das höchste Ergebnis und höre nach dem dritten auf.",
        gameObjective:
          "Spiele in **{{game}}** dieselbe Aktivit\u00E4t, bis du deinen Punktestand **dreimal** verbessert hast. H\u00F6re nach der dritten Verbesserung oder sechs beendeten Versuchen auf.",
      },
    },
  },
  {
    id: "fix-the-bottleneck",
    minimumDurationMinutes: 8,
    suggestedDurationMinutes: 25,
    genres: ["Automation", "Simulation"],
    translations: {
      en: {
        name: "Fix the Bottleneck",
        objective:
          "Open an **automation save with a stalled production line**. Trace the output backward to the first machine without input, restore its supply, and stop when **three finished products reach the output**.",
      },
      de: {
        name: "Engpass beheben",
        objective:
          "Starte einen **Automatisierungsspielstand mit stillstehender Produktion**. Geh vom Ausgang rückwärts zur ersten Maschine ohne Material, versorge sie wieder und hör nach **drei fertigen Produkten am Ausgang** auf.",
      },
    },
  },
  {
    id: "one-recipe-chain",
    minimumDurationMinutes: 8,
    suggestedDurationMinutes: 25,
    genres: ["Survival", "Sandbox"],
    translations: {
      en: {
        name: "One Recipe Chain",
        objective:
          "Continue a **crafting game with a tracked recipe tree**. Make every missing component for the current recipe in the displayed order, buy nothing, and stop when **the finished item enters your inventory**.",
      },
      de: {
        name: "Eine Rezeptkette",
        objective:
          "Setze ein **Crafting-Spiel mit verfolgtem Rezeptbaum** fort. Stelle alle fehlenden Teile des aktuellen Rezepts in der angezeigten Reihenfolge selbst her und hör auf, sobald **der fertige Gegenstand im Inventar liegt**.",
      },
    },
  },
  {
    id: "replay-review",
    customGameCompatibility: { capabilityIds: ["rounds-or-matches"] },
    minimumDurationMinutes: 8,
    suggestedDurationMinutes: 25,
    genres: ["Competitive", "Multiplayer"],
    translations: {
      en: {
        name: "Replay Review",
        objective:
          "Open a **competitive game with replays and event markers**. Watch your latest loss without fast-forwarding, mark the first three shown deaths, scores, or objective changes, and **continue to the result screen**.",
        gameObjective:
          "In **{{game}}**, review your latest saved replay or training attempt. Identify **one repeated mistake**, then finish one new attempt while correcting it.",
      },
      de: {
        name: "Replay-Analyse",
        objective:
          "Starte ein **kompetitives Spiel mit Replays und Ereignismarkern**. Sieh die letzte Niederlage ohne Vorspulen, markiere die ersten drei angezeigten Tode, Punkte oder Zielwechsel und **schau bis zum Ergebnis**.",
        gameObjective:
          "Sieh dir in **{{game}}** deine letzte gespeicherte Wiederholung oder Trainingsrunde an. Finde **einen wiederkehrenden Fehler** und beende danach einen neuen Versuch, in dem du ihn korrigierst.",
      },
    },
  },
  {
    id: "one-lead",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 25,
    genres: ["Detective", "Adventure"],
    translations: {
      en: {
        name: "One Lead",
        objective:
          "Continue a **detective game with an active lead and a clue board**. Follow only that lead, ignore unrelated conversations, and stop when **one new piece of evidence is confirmed on the board**.",
      },
      de: {
        name: "Eine Spur",
        objective:
          "Setze ein **Detektivspiel mit aktiver Spur und Hinweistafel** fort. Folge nur dieser Spur, ignoriere andere Gespräche und hör auf, sobald **ein neuer Beweis auf der Tafel bestätigt wird**.",
      },
    },
  },
  {
    id: "single-route",
    minimumDurationMinutes: 8,
    suggestedDurationMinutes: 25,
    genres: ["Management", "Simulation"],
    translations: {
      en: {
        name: "Single Route",
        objective:
          "Open a **transport game with a route editor and unserved stops**. Connect the first two unserved stops in the list, assign the default vehicle, and **let it complete one full circuit**.",
      },
      de: {
        name: "Eine Linie",
        objective:
          "Starte ein **Verkehrsspiel mit Routeneditor und unbedienten Haltestellen**. Verbinde die ersten beiden Haltestellen in der Liste, setze das vorgeschlagene Fahrzeug ein und **lass es eine ganze Runde fahren**.",
      },
    },
  },
]);
