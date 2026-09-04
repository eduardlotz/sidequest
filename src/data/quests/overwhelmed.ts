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
          "Öffne dein zuletzt gespieltes Spiel und ignoriere die ganze Karte bis auf das **nächste sichtbare Zielsymbol**. Erreiche es, beende die dort startende Aufgabe und höre auf.",
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
        name: "Zehn-Minuten-Spielstand",
        objective:
          "Nimm ein vertrautes Spiel, das fast überall speichern kann. Erledige **eine kleine Aufgabe für höchstens zehn Minuten** und speichere direkt danach.",
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
          "Öffne ein Bau- oder Lebensspiel mit einem unordentlichen Bereich. Wähle **eine Ecke, die auf den Bildschirm passt**, bewege oder entferne **zehn Dinge** und lass alles andere unberührt.",
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
          "In **{{game}}**, follow the objective that is already tracked. Complete **only that objective**, save, and stop before selecting another.",
      },
      de: {
        name: "Eine verfolgte Quest",
        objective:
          "Öffne einen Spielstand mit einer bereits verfolgten Aufgabe. Folge **nur dieser Quest**, ignoriere optionale Beute und neue Marker und höre auf, wenn das Spiel sie abschließt.",
        gameObjective:
          "Folge in **{{game}}** dem bereits markierten Ziel. Schlie\u00DFe **nur dieses Ziel** ab, speichere und h\u00F6re auf, bevor du ein neues ausw\u00E4hlst.",
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
          "Nimm ein Spiel, das du verstehst, aber lange nicht geöffnet hast. Wiederhole **sein Tutorial oder erstes Level** vollständig und triff heute keine weitere Spielentscheidung.",
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
          "Nimm ein **Spiel mit mindestens drei ungelesenen In-Game-Nachrichten in einer Liste**. Lies die obersten drei der Reihe nach, nimm vorhandene Anhänge an und hör auf, sobald **drei ungelesene Nachrichten verschwunden sind**.",
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
          "Starte dein zuletzt gespieltes **Spiel mit Ausrüstungsempfehlung und kurzen Kämpfen**. Nutze einmal die automatische Ausrüstung, geh zum nächsten markierten Kampf und **beende ihn, ohne das Inventar erneut zu öffnen**.",
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
