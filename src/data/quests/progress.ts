import { defineMoodQuests } from "./defineMoodQuests";

export const progressQuests = defineMoodQuests("progress", [
  {
    id: "next-checkpoint",
    customGameCompatibility: { capabilityIds: ["missions-or-levels"] },
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 20,
    genres: ["Story", "Adventure"],
    translations: {
      en: {
        name: "Next Checkpoint",
        objective:
          "Open an unfinished story save and continue the goal already in front of you. Reach the **next checkpoint or save point**, save, and stop there.",
        gameObjective:
          "In **{{game}}**, continue the mission or level already in front of you. Reach the **next checkpoint or completed objective**, then stop at a safe break.",
      },
      de: {
        name: "Nächster Speicherpunkt",
        objective:
          "Setze einen noch nicht beendeten Story-Spielstand fort und folge dem aktuellen Ziel. Erreiche den **nächsten Kontroll- oder Speicherpunkt**, speichere und hör dort auf.",
        gameObjective:
          "Spiele in **{{game}}** die aktuelle Mission oder das Level weiter. Hör an einer sicheren Stelle auf, sobald du **den nächsten Kontrollpunkt erreicht oder ein Ziel geschafft hast**.",
      },
    },
  },
  {
    id: "two-more-levels",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 20,
    genres: ["Platformer", "Arcade"],
    translations: {
      en: {
        name: "Two More Levels",
        objective:
          "Choose a game with short separate stages and continue from your current position. Finish the **next two levels** without replaying an older one for a better score.",
      },
      de: {
        name: "Zwei Level weiter",
        objective:
          "Wähle ein Spiel mit kurzen, einzelnen Leveln und spiele an deiner aktuellen Stelle weiter. Beende die **nächsten zwei Level**, ohne ein früheres für mehr Punkte zu wiederholen.",
      },
    },
  },
  {
    id: "smallest-quest",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 20,
    genres: ["RPG", "Open World"],
    translations: {
      en: {
        name: "Smallest Quest",
        objective:
          "Open a save with several quests in its log. Choose the **shortest nearby quest**, complete only that one, and ignore every new marker it creates.",
      },
      de: {
        name: "Kleinste Quest",
        objective:
          "Öffne einen Spielstand mit mehreren Aufgaben im Logbuch. Wähle die **kürzeste Quest in der Nähe**, beende nur diese und ignoriere alle neuen Marker, die dabei entstehen.",
      },
    },
  },
  {
    id: "upgrade-time",
    customGameCompatibility: { capabilityIds: ["equipment-loadouts"] },
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 20,
    genres: ["RPG", "Strategy"],
    translations: {
      en: {
        name: "Upgrade Time",
        objective:
          "Open a game where your next useful upgrade is already visible. Earn the **remaining currency or materials**, buy **one upgrade**, and test it once.",
        gameObjective:
          "In **{{game}}**, improve one equipment slot using **an item or upgrade you can obtain now**. Equip it and try it for five minutes.",
      },
      de: {
        name: "Zeit fürs Upgrade",
        objective:
          "Starte ein Spiel, in dem du dein nächstes sinnvolles Upgrade schon sehen kannst. Besorge die **fehlende Währung oder Materialien**, kaufe **ein Upgrade** und probiere es einmal aus.",
        gameObjective:
          "Verbessere in **{{game}}** deine Ausrüstung mit **einem Gegenstand oder Upgrade, das dir gerade zur Verfügung steht**. Rüste ihn aus oder wende das Upgrade an und probiere die Änderung fünf Minuten lang aus.",
      },
    },
  },
  {
    id: "boss-practice",
    customGameCompatibility: { capabilityIds: ["boss-fights"] },
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 25,
    genres: ["Action", "RPG"],
    translations: {
      en: {
        name: "Boss Practice",
        objective:
          "Return to a boss that stopped your progress. Give it **three honest attempts** using the same setup; finish early if you win, otherwise stop after attempt three with one thing learned.",
        gameObjective:
          "In **{{game}}**, return to a boss that stopped your progress. Give it **three honest attempts** using the same setup; finish early if you win.",
      },
      de: {
        name: "Boss-Training",
        objective:
          "Kehre zu einem Boss zurück, an dem du bisher nicht vorbeikommst. Versuche mit demselben Setup **dreimal, ihn zu besiegen**. Hör nach dem Sieg oder dem dritten Versuch auf und merke dir, was du gelernt hast.",
        gameObjective:
          "Kehre in **{{game}}** zu einem Boss zurück, an dem du bisher nicht vorbeikommst. Versuche mit demselben Setup **bis zu dreimal, ihn zu besiegen**, und hör nach einem Sieg sofort auf.",
      },
    },
  },
  {
    id: "oldest-unfinished",
    minimumDurationMinutes: 10,
    suggestedDurationMinutes: 30,
    genres: ["Story", "Adventure"],
    translations: {
      en: {
        name: "Oldest Unfinished",
        objective:
          "Pick the **oldest unfinished game** you still have installed. Continue its current save until you complete **one mission, chapter, or level**, then save before opening anything else.",
      },
      de: {
        name: "Ältestes offenes Spiel",
        objective:
          "Starte das **älteste Spiel, das du noch nicht beendet hast** und das noch installiert ist. Spiele an deinem aktuellen Spielstand **eine Mission, ein Kapitel oder ein Level zu Ende**. Speichere, bevor du etwas anderes startest.",
      },
    },
  },
  {
    id: "one-level-higher",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 25,
    genres: ["RPG", "Action"],
    translations: {
      en: {
        name: "One Level Higher",
        objective:
          "Open a **game with a character level bar at least three-quarters full**. Continue the objective already tracked until the character **gains one level**, spend any point awarded, and save.",
      },
      de: {
        name: "Ein Level höher",
        objective:
          "Starte ein **Spiel, in dem der Erfahrungsbalken schon mindestens zu drei Vierteln gefüllt ist**. Folge dem markierten Ziel, bis deine Figur **ein Level aufsteigt**. Vergib einen erhaltenen Fähigkeitspunkt, falls es einen gibt, und speichere.",
      },
    },
  },
  {
    id: "next-unlock",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 25,
    genres: ["Racing", "Fighting"],
    translations: {
      en: {
        name: "Next Unlock",
        objective:
          "Choose a **game with a locked character or vehicle one challenge away**. Complete that displayed requirement, **unlock the item**, and use it in one round or race.",
      },
      de: {
        name: "Nächste Freischaltung",
        objective:
          "Wähle ein **Spiel, in dem dir noch eine Herausforderung fehlt, um eine Figur oder ein Fahrzeug freizuschalten**. Erfülle die angezeigte Bedingung, **hole dir die Freischaltung** und nutze sie in einer Runde oder einem Rennen.",
      },
    },
  },
  {
    id: "final-piece",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 25,
    genres: ["Adventure"],
    translations: {
      en: {
        name: "Final Piece",
        objective:
          "Open a **game with a collection set missing exactly one marked item**. Track that item, collect it, and stop after **the completed set or its reward is confirmed**.",
      },
      de: {
        name: "Letztes Teil",
        objective:
          "Starte ein **Spiel, in dem deiner Sammlung noch genau ein markierter Gegenstand fehlt**. Folge seiner Markierung und sammle ihn ein. Hör auf, sobald **das Set als vollständig angezeigt wird oder du seine Belohnung erhältst**.",
      },
    },
  },
  {
    id: "clear-the-outpost",
    minimumDurationMinutes: 8,
    suggestedDurationMinutes: 25,
    genres: ["Open World", "Action"],
    translations: {
      en: {
        name: "Clear the Outpost",
        objective:
          "Continue an **open-world save with uncleared outposts on the map**. Go to the nearest one, complete its required encounter, and stop when **its map icon changes to cleared**.",
      },
      de: {
        name: "Außenposten erledigt",
        objective:
          "Setze ein **Open-World-Spiel mit noch nicht eroberten Außenposten auf der Karte** fort. Geh zum nächsten und schaffe den Kampf. Hör auf, sobald **der Außenposten auf der Karte als erledigt markiert ist**.",
      },
    },
  },
  {
    id: "finish-the-research",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 25,
    genres: ["Strategy", "Simulation"],
    translations: {
      en: {
        name: "Finish the Research",
        objective:
          "Open a **strategy or simulation save with active research above 50 percent**. Keep its priorities unchanged, play until **the research completes**, and save before choosing another project.",
      },
      de: {
        name: "Forschung abschließen",
        objective:
          "Setze einen Spielstand in einem **Strategie- oder Simulationsspiel fort, in dem eine Forschung schon zu mehr als 50 Prozent fertig ist**. Ändere keine Prioritäten und spiele **bis die Forschung abgeschlossen ist**. Speichere, bevor du ein neues Projekt wählst.",
      },
    },
  },
]);
