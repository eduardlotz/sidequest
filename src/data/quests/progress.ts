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
          "In **{{game}}**, continue the goal already in front of you. Reach the **next checkpoint or save point**, save, and stop there.",
      },
      de: {
        name: "Nächster Speicherpunkt",
        objective:
          "Öffne einen unfertigen Story-Spielstand und verfolge das Ziel direkt vor dir. Erreiche den **nächsten Kontroll- oder Speicherpunkt**, speichere und höre dort auf.",
        gameObjective:
          "Verfolge in **{{game}}** das Ziel direkt vor dir. Erreiche den **n\u00E4chsten Kontroll- oder Speicherpunkt**, speichere und h\u00F6re dort auf.",
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
          "Nimm ein Spiel mit kurzen einzelnen Abschnitten und spiele an deiner aktuellen Stelle weiter. Beende die **nächsten zwei Level**, ohne ein altes für mehr Punkte zu wiederholen.",
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
          "In **{{game}}**, choose your next visible useful upgrade. Earn the **remaining currency or materials**, buy **one upgrade**, and test it once.",
      },
      de: {
        name: "Zeit fürs Upgrade",
        objective:
          "Öffne ein Spiel, in dem dein nächstes sinnvolles Upgrade schon sichtbar ist. Verdiene die **fehlende Währung oder Materialien**, kaufe **ein Upgrade** und teste es einmal.",
        gameObjective:
          "W\u00E4hle in **{{game}}** dein n\u00E4chstes sichtbares sinnvolles Upgrade. Verdiene die **fehlende W\u00E4hrung oder Materialien**, kaufe **ein Upgrade** und teste es einmal.",
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
          "Kehre zu einem Boss zurück, der deinen Fortschritt gestoppt hat. Gib ihm mit demselben Setup **drei ehrliche Versuche**; höre nach einem Sieg oder nach Versuch drei mit einer Erkenntnis auf.",
        gameObjective:
          "Kehre in **{{game}}** zu einem Boss zur\u00FCck, der deinen Fortschritt gestoppt hat. Gib ihm mit demselben Setup **drei ehrliche Versuche** und h\u00F6re nach einem Sieg fr\u00FCher auf.",
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
          "Nimm das **älteste unfertige Spiel**, das noch installiert ist. Spiele den aktuellen Stand bis zum Ende **einer Mission, eines Kapitels oder Levels** und speichere, bevor du etwas anderes öffnest.",
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
          "Starte ein **Spiel mit mindestens zu drei Vierteln gefüllter Levelanzeige**. Folge dem bereits markierten Ziel, bis die Figur **ein Level aufsteigt**, verteile einen möglichen Punkt und speichere.",
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
          "Nimm ein **Spiel, in dem eine Figur oder ein Fahrzeug nur eine Herausforderung vor der Freischaltung steht**. Erfülle die Bedingung, **schalte die Auswahl frei** und nutze sie in einer Runde oder einem Rennen.",
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
          "Starte ein **Spiel mit einer Sammlung, der genau ein markierter Gegenstand fehlt**. Verfolge ihn, sammle ihn ein und hör auf, sobald **das vollständige Set oder seine Belohnung bestätigt wird**.",
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
          "Setze einen **Open-World-Spielstand mit offenen Außenposten auf der Karte** fort. Geh zum nächsten, beende den nötigen Kampf und hör auf, sobald **das Kartensymbol als erledigt erscheint**.",
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
          "Starte einen **Strategie- oder Simulationsspielstand mit laufender Forschung über 50 Prozent**. Ändere keine Prioritäten, spiel bis **zum Forschungsabschluss** und speichere, bevor du ein neues Projekt wählst.",
      },
    },
  },
]);
