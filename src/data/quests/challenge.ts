import { defineMoodQuests } from "./defineMoodQuests";

export const challengeQuests = defineMoodQuests("challenge", [
  {
    id: "crimson-desert-three-ways-to-fight",
    additionalMoodIds: ["curious"],
    universal: false,
    minimumDurationMinutes: 8,
    suggestedDurationMinutes: 25,
    genres: ["Action adventure", "Combat"],
    translations: {
      en: {
        name: "Three Ways to Fight",
        objective:
          "In Crimson Desert, defeat **three enemy groups** with a different main approach each time: close combat, ranged attacks, then an environmental or mounted option.",
        gameObjective:
          "In **{{game}}**, defeat **three enemy groups** with a different main approach each time: close combat, ranged attacks, then an environmental or mounted option.",
      },
      de: {
        name: "Drei Arten zu kämpfen",
        objective:
          "Besiege in Crimson Desert **drei Gegnergruppen** mit je einem anderen Hauptansatz: Nahkampf, Fernkampf und danach eine Umgebungs- oder Reittier-Option.",
        gameObjective:
          "Besiege in **{{game}}** **drei Gegnergruppen** mit je einem anderen Hauptansatz: Nahkampf, Fernkampf und danach eine Umgebungs- oder Reittier-Option.",
      },
    },
  },
  {
    id: "battlefield-conquest-duty",
    additionalMoodIds: ["connect"],
    universal: false,
    minimumDurationMinutes: 10,
    suggestedDurationMinutes: 30,
    genres: ["Shooter", "Multiplayer"],
    translations: {
      en: {
        name: "Conquest Duty",
        objective:
          "In a Battlefield game with Conquest, finish **one full match** while helping capture or defend three objectives and completing five team actions such as revives, repairs, or resupplies.",
        gameObjective:
          "In **{{game}}**, finish **one full Conquest match** while helping capture or defend three objectives and completing five team actions such as revives, repairs, or resupplies.",
      },
      de: {
        name: "Einsatz im Conquest",
        objective:
          "Beende in einem Battlefield mit Conquest **ein vollständiges Match**, hilf bei der Einnahme oder Verteidigung von drei Zielen und erledige fünf Teamaktionen wie Wiederbelebungen, Reparaturen oder Versorgungen.",
        gameObjective:
          "Beende in **{{game}}** **ein vollständiges Conquest-Match**, hilf bei der Einnahme oder Verteidigung von drei Zielen und erledige fünf Teamaktionen wie Wiederbelebungen, Reparaturen oder Versorgungen.",
      },
    },
  },
  {
    id: "rocket-league-small-pads-only",
    additionalMoodIds: ["focused"],
    universal: false,
    minimumDurationMinutes: 8,
    suggestedDurationMinutes: 20,
    genres: ["Sports", "Competitive"],
    translations: {
      en: {
        name: "Small Pads Only",
        objective:
          "Play **two complete Rocket League matches** while collecting boost only from small pads. Leave every large boost pickup untouched, even when your tank is empty.",
        gameObjective:
          "Play **two complete matches in {{game}}** while collecting boost only from small pads. Leave every large boost pickup untouched, even when your tank is empty.",
      },
      de: {
        name: "Nur kleine Boost-Pads",
        objective:
          "Spiele **zwei vollständige Rocket-League-Matches** und sammle Boost nur an kleinen Pads. Lass jeden großen Boost liegen, auch wenn dein Tank leer ist.",
        gameObjective:
          "Spiele **zwei vollständige Matches in {{game}}** und sammle Boost nur an kleinen Pads. Lass jeden großen Boost liegen, auch wenn dein Tank leer ist.",
      },
    },
  },
  {
    id: "three-wins",
    customGameCompatibility: { capabilityIds: ["rounds-or-matches"] },
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 20,
    genres: ["Competitive", "Multiplayer"],
    translations: {
      en: {
        name: "Three Wins",
        objective:
          "Open a competitive game with short rounds. Play until you earn **three round wins** or finish **five rounds**, whichever happens first.",
        gameObjective:
          "In **{{game}}**, play until you earn **three round wins** or finish **five rounds**, whichever happens first.",
      },
      de: {
        name: "Drei Siege",
        objective:
          "Öffne ein kompetitives Spiel mit kurzen Runden. Spiele bis zu **drei Rundensiegen** oder bis **fünf Runden** beendet sind – je nachdem, was zuerst eintritt.",
        gameObjective:
          "Spiele in **{{game}}** bis zu **drei Rundensiegen** oder bis **f\u00FCnf Runden** beendet sind \u2013 je nachdem, was zuerst eintritt.",
      },
    },
  },
  {
    id: "no-healing",
    customGameCompatibility: { capabilityIds: ["combat", "missions-or-levels"] },
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 20,
    genres: ["Action", "Survival"],
    translations: {
      en: {
        name: "No Healing",
        objective:
          "Choose an action game with a level or encounter you already know. Finish **one full section without healing**; defensive abilities are allowed, reloading after damage is not.",
        gameObjective:
          "In **{{game}}**, finish **one familiar combat section without healing**. Defensive abilities are allowed; reloading after damage is not.",
      },
      de: {
        name: "Ohne Heilung",
        objective:
          "Nimm ein Actionspiel mit einem bekannten Level oder Kampf. Beende **einen ganzen Abschnitt ohne Heilung**; defensive Fähigkeiten sind erlaubt, Neuladen nach Schaden nicht.",
        gameObjective:
          "Beende in **{{game}}** **einen vertrauten Kampfabschnitt ohne Heilung**. Defensive F\u00E4higkeiten sind erlaubt, Neuladen nach Schaden nicht.",
      },
    },
  },
  {
    id: "starter-gear",
    customGameCompatibility: { capabilityIds: ["equipment-loadouts"] },
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 20,
    genres: ["Shooter", "Action"],
    translations: {
      en: {
        name: "Starter Gear",
        objective:
          "Open a game with selectable equipment and equip only its **starter or common gear**. Complete **one mission or match** without switching to a stronger item.",
        gameObjective:
          "In **{{game}}**, equip only starter or common gear. Complete **one mission or match** without switching to a stronger item.",
      },
      de: {
        name: "Startausrüstung",
        objective:
          "Öffne ein Spiel mit wählbarer Ausrüstung und nutze nur **Start- oder gewöhnliche Ausrüstung**. Beende **eine Mission oder ein Match**, ohne zu einem stärkeren Gegenstand zu wechseln.",
        gameObjective:
          "Nutze in **{{game}}** nur Start- oder gew\u00F6hnliche Ausr\u00FCstung. Beende **eine Mission oder ein Match**, ohne zu einem st\u00E4rkeren Gegenstand zu wechseln.",
      },
    },
  },
  {
    id: "one-life",
    minimumDurationMinutes: 8,
    suggestedDurationMinutes: 25,
    genres: ["Roguelike", "Action"],
    translations: {
      en: {
        name: "One Life",
        objective:
          "Start a fresh run in a game built around repeated attempts. Clear **one complete area with one life** and no revive; the quest ends on the clear or on your first defeat.",
      },
      de: {
        name: "Ein Leben",
        objective:
          "Starte einen neuen Run in einem Spiel mit wiederholten Versuchen. Räume **ein vollständiges Gebiet mit einem Leben** und ohne Wiederbelebung; die Quest endet beim Erfolg oder der ersten Niederlage.",
      },
    },
  },
  {
    id: "three-fast-laps",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 20,
    genres: ["Racing", "Time Trial"],
    translations: {
      en: {
        name: "Three Fast Laps",
        objective:
          "Pick a racing game and a track you know. Drive **three timed laps** with the same vehicle and finish every lap, even after a mistake; keep the fastest clean time.",
      },
      de: {
        name: "Drei schnelle Runden",
        objective:
          "Nimm ein Rennspiel und eine bekannte Strecke. Fahre mit demselben Fahrzeug **drei gezeitete Runden** zu Ende, auch nach Fehlern, und behalte die schnellste saubere Zeit.",
      },
    },
  },
  {
    id: "full-combo-try",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 15,
    genres: ["Rhythm", "Arcade"],
    translations: {
      en: {
        name: "Full Combo Try",
        objective:
          "Choose a rhythm stage you can nearly complete cleanly. Give it **three attempts** at the same difficulty and play through every mistake; stop after a full combo or attempt three.",
      },
      de: {
        name: "Full-Combo-Versuch",
        objective:
          "Wähle einen Rhythmus-Abschnitt, den du fast fehlerfrei schaffst. Gib ihm auf demselben Grad **drei Versuche** und spiele nach Fehlern weiter; höre nach der Full Combo oder Versuch drei auf.",
      },
    },
  },
  {
    id: "parry-streak",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 20,
    genres: ["Action"],
    translations: {
      en: {
        name: "Parry Streak",
        objective:
          "Open your latest **action game where enemy attacks can be parried**. Let each basic enemy attack, parry every strike, and defeat **three in a row**. If you get hit, reset the count to zero.",
      },
      de: {
        name: "Parierserie",
        objective:
          "Starte dein letztes **Actionspiel mit parierbaren Gegnerangriffen**. Lass jeden einfachen Gegner angreifen, pariere jeden Schlag und besiege **drei hintereinander**. Bei einem Treffer beginnt die Zählung bei null.",
      },
    },
  },
  {
    id: "silent-outpost",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 20,
    genres: ["Stealth", "Action"],
    translations: {
      en: {
        name: "Silent Outpost",
        objective:
          "Choose a **stealth game with replayable outposts** and start the first available one. Clear the whole outpost **without triggering an alert**; restart the outpost whenever an alert begins.",
      },
      de: {
        name: "Stiller Außenposten",
        objective:
          "Nimm ein **Schleichspiel mit wiederholbaren Außenposten** und starte den ersten verfügbaren. Räume ihn vollständig, **ohne Alarm auszulösen**; sobald Alarm beginnt, startest du den Außenposten neu.",
      },
    },
  },
  {
    id: "weak-points-only",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 20,
    genres: ["Shooter", "Action"],
    translations: {
      en: {
        name: "Weak Points Only",
        objective:
          "Open an **action or shooter game with marked enemy weak points**. Clear the first replayable encounter while damaging enemies only through those weak points; **restart if you damage an enemy anywhere else**.",
      },
      de: {
        name: "Nur Schwachstellen",
        objective:
          "Starte ein **Actionspiel oder einen Shooter mit markierten Schwachstellen**. Räume den ersten wiederholbaren Kampf und verletze Gegner nur dort; **nach jedem Treffer an anderer Stelle beginnt der Kampf neu**.",
      },
    },
  },
  {
    id: "no-undo",
    minimumDurationMinutes: 3,
    suggestedDurationMinutes: 15,
    genres: ["Puzzle"],
    translations: {
      en: {
        name: "No Undo",
        objective:
          "Open a **puzzle game with separate levels, hints, and undo**. Start the next unfinished puzzle and **solve it without hints or undo**; restart the level if you use either one.",
      },
      de: {
        name: "Ohne Rückgängig",
        objective:
          "Starte ein **Rätselspiel mit einzelnen Leveln, Hinweisen und Rückgängig-Funktion**. Nimm das nächste offene Rätsel und **löse es ohne Hinweise oder Rückgängig-Funktion**; nutzt du eines davon, beginnt das Level neu.",
      },
    },
  },
  {
    id: "match-combo",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 20,
    genres: ["Fighting"],
    translations: {
      en: {
        name: "Match Combo",
        objective:
          "Open a **fighting game with combo trials and CPU matches**. Learn the first unfinished combo, then play up to three CPU matches. Stop when you **land it once in a match**, or after match three.",
      },
      de: {
        name: "Combo im Match",
        objective:
          "Starte ein **Kampfspiel mit Combo-Training und CPU-Matches**. Lerne die erste offene Combo und spiel danach höchstens drei CPU-Matches. Hör auf, sobald du **die Combo einmal im Match landest**, sonst nach Match drei.",
      },
    },
  },
]);
