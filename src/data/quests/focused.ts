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
          "Wähle ein Level, das du gut genug kennst, um es zu schaffen. Spiele es **ohne Pause, Neustart oder Öffnen eines Menüs** zu Ende und lass das erste Ergebnis stehen.",
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
          "Setze einen Spielstand in einem rundenbasierten Strategiespiel fort. Lege vor dem ersten Zug ein Ziel fest, arbeite **genau zwanzig Züge** nur daran und speichere nach dem zwanzigsten Zug.",
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
          "Wähle ein Spiel mit Builds, Decks oder wählbarer Ausrüstung. Lege dich vor dem Start auf **ein Setup** fest und beende damit eine Mission oder einen Run, ohne seine wichtigsten Bestandteile auszutauschen.",
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
          "Wähle ein Story- oder Rätselspiel, bei dem der Ton eine wichtige Rolle spielt. Setz Kopfhörer auf, schalte Benachrichtigungen stumm und beende **ein ganzes Kapitel oder eine zusammenhängende Rätselreihe**, ohne die App zu wechseln.",
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
          "In **{{game}}**, continue one available mission or level. Ignore optional detours and stop after **the next completed objective or checkpoint**.",
      },
      de: {
        name: "Hauptmission",
        objective:
          "Starte ein Story-Spiel mit einer verfügbaren Hauptmission und beende **genau diese Mission**. Lass Nebenaktivitäten aus, räum kein Inventar auf und mach keine Umwege für Sammelobjekte.",
        gameObjective:
          "Spiele in **{{game}}** eine verfügbare Mission oder ein Level weiter. Lass optionale Umwege aus und hör auf, sobald du **das nächste Ziel geschafft oder einen Kontrollpunkt erreicht hast**.",
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
          "In **{{game}}**, choose one result you can count, such as points or successful actions. Play **three rounds in the same mode**, record your best result, and stop after the third.",
      },
      de: {
        name: "Drei Versuche",
        objective:
          "Wähle eine Herausforderung mit Punktewertung und lege Schwierigkeit und Figur fest. Spiele **drei Versuche ohne Unterbrechung**, merke dir das beste Ergebnis und hör nach dem dritten auf.",
        gameObjective:
          "Wähle in **{{game}}** ein zählbares Ergebnis, etwa Punkte oder gelungene Aktionen. Spiele **drei Runden im selben Modus**, merke dir dein bestes Ergebnis und höre nach der dritten auf.",
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
          "Setze einen Spielstand in einem **Automatisierungsspiel fort, in dem eine Produktionslinie stillsteht**. Folge ihr vom Ausgang zurück bis zur ersten Maschine, der Material fehlt. Sorge für Nachschub und hör nach **drei fertigen Produkten am Ausgang** auf.",
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
          "Setze ein **Crafting-Spiel fort, in dem du ein Rezept mit mehreren Herstellungsschritten verfolgst**. Stelle alle fehlenden Teile selbst in der angezeigten Reihenfolge her, ohne etwas zu kaufen. Hör auf, sobald **der fertige Gegenstand im Inventar liegt**.",
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
          "In **{{game}}**, review your last round from a replay or from memory. Identify **one repeated mistake**, then finish a new round focused on correcting it.",
      },
      de: {
        name: "Replay-Analyse",
        objective:
          "Starte ein **Wettkampfspiel mit Replays und markierten Spielereignissen**. Sieh dir deine letzte Niederlage ohne Vorspulen an. Markiere die ersten drei angezeigten Tode, Punkte oder Wechsel bei Missionszielen und **schau bis zum Ergebnisbildschirm weiter**.",
        gameObjective:
          "Sieh dir in **{{game}}** die letzte Runde als Replay an oder geh sie im Kopf durch. Finde **einen Fehler, der sich wiederholt**, und spiele eine neue Runde bis zum Ende, in der du gezielt daran arbeitest.",
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
          "Starte ein **Transportspiel mit Routeneditor und Haltestellen ohne Verbindung**. Verbinde die ersten beiden noch nicht angefahrenen Haltestellen in der Liste, setze das vorgeschlagene Fahrzeug ein und **lass es eine ganze Runde fahren**.",
      },
    },
  },
]);
