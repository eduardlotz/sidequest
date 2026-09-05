import { defineMoodQuests } from "./defineMoodQuests";

export const lowEnergyQuests = defineMoodQuests("low-energy", [
  {
    id: "idle-check-in",
    minimumDurationMinutes: 2,
    suggestedDurationMinutes: 10,
    genres: ["Idle", "Management"],
    translations: {
      en: {
        name: "Idle Check-In",
        objective:
          "Open an idle game that has progressed without you. Collect **everything waiting**, buy **one useful upgrade**, and leave the rest for next time.",
      },
      de: {
        name: "Kurz einsammeln",
        objective:
          "Starte ein Idle-Spiel, das ohne dich weitergelaufen ist. Sammle **alles ein, was sich angesammelt hat**, kaufe **ein sinnvolles Upgrade** und heb dir den Rest fürs nächste Mal auf.",
      },
    },
  },
  {
    id: "one-solitaire-hand",
    minimumDurationMinutes: 2,
    suggestedDurationMinutes: 10,
    genres: ["Card Game", "Casual"],
    translations: {
      en: {
        name: "One Solitaire Hand",
        objective:
          "Open a digital solitaire game and accept the first deal. Play **one complete hand** without restarting for a better layout and accept its result.",
      },
      de: {
        name: "Eine Solitaire-Runde",
        objective:
          "Starte ein digitales Solitaire-Spiel und nimm die erste Kartenverteilung. Spiele **eine ganze Runde**, ohne für bessere Karten neu zu starten, und lass das Ergebnis stehen.",
      },
    },
  },
  {
    id: "one-conversation",
    minimumDurationMinutes: 2,
    suggestedDurationMinutes: 12,
    genres: ["Narrative", "Cozy"],
    translations: {
      en: {
        name: "One Conversation",
        objective:
          "Choose a narrative game with a conversation ready in your current save. Listen through **one complete conversation or scene**, choose by first instinct, and save afterward.",
      },
      de: {
        name: "Ein Gespräch",
        objective:
          "Wähle ein Story-Spiel, in dem als Nächstes ein Gespräch ansteht. Spiele **ein ganzes Gespräch oder eine Szene**, entscheide nach Gefühl und speichere danach.",
      },
    },
  },
  {
    id: "auto-battle",
    minimumDurationMinutes: 3,
    suggestedDurationMinutes: 15,
    genres: ["Auto Battler", "Strategy"],
    translations: {
      en: {
        name: "Auto-Battle",
        objective:
          "Open an auto-battler and set **one lineup** before combat. Let it resolve without changing the team mid-fight and finish the round.",
      },
      de: {
        name: "Auto-Battle",
        objective:
          "Starte einen Auto-Battler und lege vor dem Kampf **eine Teamaufstellung** fest. Lass den Kampf laufen, ohne zwischendurch das Team zu ändern, und spiele die Runde zu Ende.",
      },
    },
  },
  {
    id: "three-cozy-chores",
    minimumDurationMinutes: 3,
    suggestedDurationMinutes: 15,
    genres: ["Farming", "Cozy"],
    translations: {
      en: {
        name: "Three Cozy Chores",
        objective:
          "Open a farming or life-sim save and stay close to home. Finish **three small daily chores** such as watering, feeding, cooking, or collecting, then go to bed or save.",
      },
      de: {
        name: "Drei gemütliche Aufgaben",
        objective:
          "Setze einen Spielstand in einem Farming-Spiel oder einer Lebenssimulation fort und bleib in der Nähe deines Zuhauses. Erledige **drei kleine Tagesaufgaben** wie Gießen, Füttern, Kochen oder Sammeln. Geh danach schlafen oder speichere.",
      },
    },
  },
  {
    id: "hidden-object-scene",
    minimumDurationMinutes: 3,
    suggestedDurationMinutes: 15,
    genres: ["Hidden Object", "Puzzle"],
    translations: {
      en: {
        name: "Hidden-Object Scene",
        objective:
          "Open one hidden-object scene and work from one edge to the other. Find **every object on the required list** without switching to another scene.",
      },
      de: {
        name: "Wimmelbildszene",
        objective:
          "Starte eine Wimmelbildszene und suche sie von einer Seite zur anderen ab. Finde **alle Gegenstände auf der Suchliste**, ohne die Szene zu wechseln.",
      },
    },
  },
  {
    id: "small-jigsaw",
    minimumDurationMinutes: 2,
    suggestedDurationMinutes: 15,
    genres: ["Puzzle", "Casual"],
    translations: {
      en: {
        name: "Small Jigsaw",
        objective:
          "Open a **digital jigsaw game offering puzzles of fifty pieces or fewer**. Choose the first available puzzle, keep its default image, and **finish the whole puzzle**.",
      },
      de: {
        name: "Kleines Puzzle",
        objective:
          "Starte ein **Spiel mit digitalen Puzzles aus höchstens fünfzig Teilen**. Nimm das erste verfügbare Puzzle, behalte das vorgeschlagene Bild und **setze es vollständig zusammen**.",
      },
    },
  },
  {
    id: "one-match-three",
    minimumDurationMinutes: 2,
    suggestedDurationMinutes: 10,
    genres: ["Puzzle", "Casual"],
    translations: {
      en: {
        name: "One Match-Three",
        objective:
          "Open your most recently played **match-three game with separate levels**. Start the first unfinished level with its default boosters, **accept the first result**, and do not open the next level.",
      },
      de: {
        name: "Ein Match-Three-Level",
        objective:
          "Starte dein zuletzt gespieltes **Match-Three-Spiel mit einzelnen Leveln**. Nimm das erste offene Level mit den vorgeschlagenen Boostern, **akzeptiere das erste Ergebnis** und öffne das nächste Level nicht.",
      },
    },
  },
  {
    id: "auto-read-chapter",
    minimumDurationMinutes: 2,
    suggestedDurationMinutes: 15,
    genres: ["Visual Novel", "Narrative"],
    translations: {
      en: {
        name: "Auto-Read Chapter",
        objective:
          "Continue a **visual novel with auto-read and chapter markers**. Turn on auto-read, choose the first dialogue option whenever asked, and stop when **the next chapter or save marker appears**.",
      },
      de: {
        name: "Kapitel im Auto-Modus",
        objective:
          "Setze eine **Visual Novel mit Auto-Modus und Kapitelmarken** fort. Aktiviere den Auto-Modus, nimm bei jeder Frage die erste Antwort und hör auf, sobald **das nächste Kapitel oder ein Speicherpunkt erscheint**.",
      },
    },
  },
  {
    id: "one-coloring-page",
    minimumDurationMinutes: 2,
    suggestedDurationMinutes: 15,
    genres: ["Coloring", "Casual"],
    translations: {
      en: {
        name: "One Coloring Page",
        objective:
          "Open a **coloring game with outlined pages and a default palette**. Choose the first unfinished page, fill every outlined area using only that palette, and **save the completed page**.",
      },
      de: {
        name: "Eine Ausmalseite",
        objective:
          "Starte ein **Ausmalspiel mit vorgezeichneten Bildern und fester Farbpalette**. Nimm die erste noch nicht fertige Seite, male alle Flächen nur mit diesen Farben aus und **speichere das fertige Bild**.",
      },
    },
  },
  {
    id: "five-exhibits",
    minimumDurationMinutes: 3,
    suggestedDurationMinutes: 15,
    genres: ["Walking Sim", "Educational"],
    translations: {
      en: {
        name: "Five Exhibits",
        objective:
          "Choose a **game with a museum or gallery, numbered exhibits, and information labels**. Follow the route from the first marker, read **five exhibit labels in order**, and stop at the fifth.",
      },
      de: {
        name: "Fünf Ausstellungsstücke",
        objective:
          "Nimm ein **Spiel mit Museum oder Galerie, nummerierten Stationen und Infotafeln**. Folge dem Rundgang ab der ersten Markierung, lies **fünf Infotafeln der Reihe nach** und hör bei der fünften auf.",
      },
    },
  },
]);
