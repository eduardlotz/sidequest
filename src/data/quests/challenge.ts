import { defineMoodQuests } from "./defineMoodQuests";

export const challengeQuests = defineMoodQuests("challenge", [
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
          "Starte ein Spiel, in dem du in kurzen Runden gegen andere antrittst. Spiele, bis du **drei Runden gewonnen** oder **fünf Runden beendet** hast – je nachdem, was zuerst passiert.",
        gameObjective:
          "Spiele in **{{game}}**, bis du **drei Runden gewonnen** oder **fünf Runden beendet** hast – je nachdem, was zuerst passiert.",
      },
    },
  },
  {
    id: "no-healing",
    customGameCompatibility: {
      capabilityIds: ["combat", "missions-or-levels"],
    },
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
          "Starte ein Actionspiel mit einem Level oder Kampf, den du schon kennst. Schaffe **einen ganzen Abschnitt ohne Heilung**. Defensive Fähigkeiten sind erlaubt. Lade keinen Spielstand neu, nachdem du Schaden genommen hast.",
        gameObjective:
          "Schaffe in **{{game}}** **einen bekannten Kampfabschnitt ohne Heilung**. Defensive Fähigkeiten sind erlaubt. Lade keinen Spielstand neu, nachdem du Schaden genommen hast.",
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
          "In **{{game}}**, equip starter or basic gear you still have access to. Play for **ten minutes without switching to stronger equipment**.",
      },
      de: {
        name: "Startausrüstung",
        objective:
          "Starte ein Spiel, in dem du deine Ausrüstung wählen kannst, und nutze nur **Startausrüstung oder gewöhnliche Gegenstände**. Beende **eine Mission oder ein Match**, ohne zu stärkerer Ausrüstung zu wechseln.",
        gameObjective:
          "Nutze in **{{game}}** Start- oder Basisausrüstung, die dir noch zur Verfügung steht. Spiele **zehn Minuten, ohne zu stärkerer Ausrüstung zu wechseln**.",
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
          "Starte einen neuen Run in einem Spiel, in dem du nach einer Niederlage von vorn beginnst. Schaffe **ein ganzes Gebiet mit nur einem Leben**, ohne Wiederbelebung. Die Quest endet, sobald du das Gebiet geschafft hast oder zum ersten Mal besiegt wirst.",
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
          "Starte ein Rennspiel und wähle eine bekannte Strecke. Fahre mit demselben Fahrzeug **drei Runden auf Zeit** und bring jede zu Ende, auch nach einem Fehler. Merke dir die beste gültige Rundenzeit.",
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
          "Wähle in einem Rhythmusspiel einen Abschnitt, den du fast fehlerfrei schaffst. Spiele ihn auf derselben Schwierigkeit **bis zu dreimal** und mach nach Fehlern weiter. Hör nach einer Full Combo oder dem dritten Versuch auf.",
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
          "Starte dein zuletzt gespieltes **Actionspiel, in dem du Gegnerangriffe parieren kannst**. Lass jeden normalen Gegner zuerst angreifen, pariere jeden Schlag und besiege so **drei Gegner hintereinander**. Wirst du getroffen, zählst du wieder von null.",
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
          "Starte ein **Schleichspiel mit wiederholbaren Außenposten** und nimm den ersten verfügbaren. Schalte dort alle Gegner aus, **ohne Alarm auszulösen**. Geht der Alarm los, beginnst du den Außenposten von vorn.",
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
          "Starte ein **Actionspiel oder einen Shooter mit markierten Schwachstellen an Gegnern**. Schaffe den ersten wiederholbaren Kampf und füge Gegnern nur an diesen Stellen Schaden zu. **Triffst du woanders, startest du den Kampf neu**.",
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
        name: "Kein Zug zurück",
        objective:
          "Starte ein **Rätselspiel mit einzelnen Leveln, Hinweisen und Rückgängig-Funktion**. Nimm das nächste ungelöste Rätsel und **löse es ohne Hinweise und ohne Züge rückgängig zu machen**. Nutzt du eine der beiden Hilfen, startest du das Level neu.",
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
          "Starte ein **Kampfspiel mit Combo-Training und Matches gegen den Computer**. Lerne die erste noch nicht geschaffte Combo und spiele danach bis zu drei Matches gegen den Computer. Hör auf, sobald du **die Combo einmal im Match triffst**, sonst nach dem dritten Match.",
      },
    },
  },
]);
