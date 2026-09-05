import { defineMoodQuests } from "./defineMoodQuests";

export const overwhelmedQuests = defineMoodQuests("overwhelmed", [
  {
    id: "first-icon",
    minimumDurationMinutes: 2,
    suggestedDurationMinutes: 10,
    genres: ["Open World", "Adventure"],
    translations: {
      en: {
        name: "First Icon",
        objective:
          "Open the game you played most recently and ignore the whole map except for the **nearest visible objective icon**. Reach it, complete what starts there, and stop.",
      },
      de: {
        name: "Erstes Symbol",
        objective:
          "Starte dein zuletzt gespieltes Spiel und beachte auf der Karte nur das **nächste sichtbare Zielsymbol**. Geh dorthin, erledige die Aufgabe vor Ort und hör danach auf.",
      },
    },
  },
  {
    id: "ten-minute-save",
    minimumDurationMinutes: 2,
    suggestedDurationMinutes: 10,
    genres: ["Casual", "Adventure"],
    translations: {
      en: {
        name: "Ten-Minute Save",
        objective:
          "Choose a familiar game that can save almost anywhere. Do **one small action you can finish in ten minutes** and save immediately when it is done.",
      },
      de: {
        name: "Kurz spielen und speichern",
        objective:
          "Wähle ein vertrautes Spiel, in dem du fast überall speichern kannst. Erledige **eine kleine Aufgabe, die du in zehn Minuten schaffen kannst**, und speichere direkt danach.",
      },
    },
  },
  {
    id: "one-corner",
    minimumDurationMinutes: 3,
    suggestedDurationMinutes: 15,
    genres: ["Building", "Cozy"],
    translations: {
      en: {
        name: "One Corner",
        objective:
          "Open a building or life game with a messy space. Choose **one corner that fits on screen**, move or remove **ten things**, and leave every other area untouched.",
      },
      de: {
        name: "Eine Ecke",
        objective:
          "Starte ein Bau- oder Lebenssimulationsspiel mit einem unordentlichen Bereich. Nimm dir **eine Ecke vor, die auf den Bildschirm passt**. Versetze oder entferne dort **zehn Gegenstände** und lass den Rest unverändert.",
      },
    },
  },
  {
    id: "default-round",
    customGameCompatibility: { capabilityIds: ["rounds-or-matches"] },
    minimumDurationMinutes: 3,
    suggestedDurationMinutes: 15,
    genres: ["Arcade", "Multiplayer"],
    translations: {
      en: {
        name: "Default Round",
        objective:
          "Open the first suitable game in your recently played list. Accept the **first mode, first map, and default loadout**, then finish one complete round without changing setup.",
        gameObjective:
          "In **{{game}}**, accept the default mode and settings without browsing alternatives. Finish **one complete round** and stop at the result screen.",
      },
      de: {
        name: "Standardrunde",
        objective:
          "Öffne das erste passende Spiel in deiner Zuletzt-gespielt-Liste. Nimm **den ersten Modus, die erste Karte und das Standard-Setup** und beende eine Runde ohne Änderungen.",
        gameObjective:
          "\u00DCbernimm in **{{game}}** den Standardmodus und alle Voreinstellungen, ohne Alternativen anzusehen. Beende **eine vollst\u00E4ndige Runde** und h\u00F6re beim Ergebnisbildschirm auf.",
      },
    },
  },
  {
    id: "one-tracked-quest",
    customGameCompatibility: { capabilityIds: ["missions-or-levels"] },
    minimumDurationMinutes: 3,
    suggestedDurationMinutes: 15,
    genres: ["RPG", "Open World"],
    translations: {
      en: {
        name: "One Tracked Quest",
        objective:
          "Open a save that already has a quest tracked. Follow **only that quest**, ignore optional loot and new markers, and stop when the game marks it complete.",
        gameObjective:
          "In **{{game}}**, choose one objective in the current mission or level. Complete **only that objective** before picking another.",
      },
      de: {
        name: "Nur die markierte Quest",
        objective:
          "Setze einen Spielstand mit einer bereits markierten Quest fort. Folge **nur dieser Quest**, lass optionale Beute und neue Marker liegen und hör auf, sobald die Quest als abgeschlossen angezeigt wird.",
        gameObjective:
          "Wähle in **{{game}}** ein Ziel in der aktuellen Mission oder im Level. Erledige **nur dieses Ziel**, bevor du ein weiteres auswählst.",
      },
    },
  },
  {
    id: "tutorial-return",
    minimumDurationMinutes: 2,
    suggestedDurationMinutes: 10,
    genres: ["Platformer", "Adventure"],
    translations: {
      en: {
        name: "Tutorial Return",
        objective:
          "Choose a game you already understand but have not opened recently. Replay **its tutorial or first level** from start to finish and make no other decisions today.",
      },
      de: {
        name: "Zurück ins Tutorial",
        objective:
          "Wähle ein Spiel, das du kennst, aber lange nicht gestartet hast. Wiederhole **das Tutorial oder das erste Level** vollständig und hör danach für heute auf.",
      },
    },
  },
  {
    id: "todays-puzzle",
    minimumDurationMinutes: 2,
    suggestedDurationMinutes: 10,
    genres: ["Puzzle", "Casual"],
    translations: {
      en: {
        name: "Today's Puzzle",
        objective:
          "Open your most recently played **puzzle game with one daily challenge**. Accept today's puzzle and its default difficulty, **solve it once**, and close the game from the result screen.",
      },
      de: {
        name: "Heutiges Rätsel",
        objective:
          "Starte dein zuletzt gespieltes **Rätselspiel mit einer Tagesaufgabe**. Nimm das heutige Rätsel und den vorgegebenen Schwierigkeitsgrad, **löse es einmal** und schließe das Spiel vom Ergebnisbildschirm aus.",
      },
    },
  },
  {
    id: "one-pack",
    minimumDurationMinutes: 1,
    suggestedDurationMinutes: 5,
    genres: ["Card Game"],
    translations: {
      en: {
        name: "One Pack",
        objective:
          "Open your most recently played **card game with an unopened reward pack**. Open the oldest or leftmost pack, **accept every card**, and leave your decks unchanged.",
      },
      de: {
        name: "Ein Kartenpack",
        objective:
          "Starte dein zuletzt gespieltes **Kartenspiel mit einem ungeöffneten Belohnungspack**. Öffne das älteste oder ganz linke Pack, **nimm alle Karten an** und lass deine Decks unverändert.",
      },
    },
  },
  {
    id: "three-messages",
    minimumDurationMinutes: 1,
    suggestedDurationMinutes: 5,
    genres: ["RPG", "Simulation"],
    translations: {
      en: {
        name: "Three Messages",
        objective:
          "Choose a **game with at least three unread in-game messages shown in a list**. Read the top three in order, claim any attached rewards, and stop when **the unread count drops by three**.",
      },
      de: {
        name: "Drei Nachrichten",
        objective:
          "Wähle ein **Spiel mit mindestens drei ungelesenen Nachrichten im Spielpostfach**. Lies die obersten drei der Reihe nach und hol enthaltene Belohnungen ab. Hör auf, sobald **die Zahl ungelesener Nachrichten um drei gesunken ist**.",
      },
    },
  },
  {
    id: "auto-equip",
    minimumDurationMinutes: 3,
    suggestedDurationMinutes: 15,
    genres: ["RPG", "Action"],
    translations: {
      en: {
        name: "Auto-Equip",
        objective:
          "Open your most recently played **game with recommended gear and short encounters**. Use auto-equip once, enter the nearest marked encounter, and **finish it without reopening the inventory**.",
      },
      de: {
        name: "Automatisch ausgerüstet",
        objective:
          "Starte dein zuletzt gespieltes **Spiel mit automatischer Ausrüstungswahl und kurzen Kämpfen**. Lass dich einmal automatisch ausrüsten, geh zum nächsten markierten Kampf und **beende ihn, ohne das Inventar erneut zu öffnen**.",
      },
    },
  },
  {
    id: "top-daily",
    minimumDurationMinutes: 2,
    suggestedDurationMinutes: 15,
    genres: ["Online"],
    translations: {
      en: {
        name: "Top Daily",
        objective:
          "Open your most recently played **game with an ordered list of daily tasks**. Complete only the top unfinished task, **claim its reward**, and ignore every task below it.",
      },
      de: {
        name: "Oberste Tagesaufgabe",
        objective:
          "Starte dein zuletzt gespieltes **Spiel mit einer geordneten Liste täglicher Aufgaben**. Erledige nur die oberste offene Aufgabe, **hol ihre Belohnung ab** und ignoriere alle darunter.",
      },
    },
  },
]);
