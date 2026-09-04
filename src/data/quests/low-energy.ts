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
        name: "Idle-Check-in",
        objective:
          "Öffne ein Idle Game, das ohne dich weitergelaufen ist. Sammle **alles Wartende** ein, kaufe **ein sinnvolles Upgrade** und lass den Rest fürs nächste Mal liegen.",
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
          "Öffne ein digitales Solitaire-Spiel und akzeptiere die erste Verteilung. Spiele **eine vollständige Runde** ohne Neustart für eine bessere Lage und akzeptiere das Ergebnis.",
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
          "Nimm ein narratives Spiel mit einem anstehenden Gespräch im aktuellen Spielstand. Erlebe **ein vollständiges Gespräch oder eine Szene**, entscheide nach Gefühl und speichere danach.",
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
          "Öffne einen Auto-Battler und stelle vor dem Kampf **eine Aufstellung** fest. Lass den Kampf ohne Teamwechsel laufen und beende die Runde.",
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
          "Öffne einen Farming- oder Lebenssimulations-Spielstand und bleib in der Nähe deines Zuhauses. Erledige **drei kleine Tagesaufgaben** wie Gießen, Füttern, Kochen oder Sammeln und schlafe oder speichere danach.",
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
          "Öffne eine Wimmelbildszene und arbeite von einem Rand zum anderen. Finde **jeden Gegenstand auf der benötigten Liste**, ohne die Szene zu wechseln.",
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
          "Starte ein **Ausmalspiel mit umrandeten Bildern und vorgegebener Palette**. Nimm die erste offene Seite, fülle alle Flächen nur mit diesen Farben und **speichere das fertige Bild**.",
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
