import { defineMoodQuests } from "./defineMoodQuests";

export const connectQuests = defineMoodQuests("connect", [
  {
    id: "co-op-check-in",
    customGameCompatibility: { capabilityIds: ["online-teamplay"] },
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 25,
    genres: ["Co-op", "Multiplayer"],
    translations: {
      en: {
        name: "Co-op Check-In",
        objective:
          "Invite someone you have not played with recently to a game you both know. Complete **three rounds or one co-op mission** together before choosing another mode.",
        gameObjective:
          "Invite someone you have not played with recently to **{{game}}**. Work on **one shared goal for fifteen minutes** before choosing another activity.",
      },
      de: {
        name: "Wieder zusammen spielen",
        objective:
          "Lade jemanden, mit dem du länger nicht gespielt hast, zu einem Spiel ein, das ihr beide kennt. Beendet zusammen **drei Runden oder eine Koop-Mission**, bevor ihr den Modus wechselt.",
        gameObjective:
          "Lade jemanden, mit dem du länger nicht gespielt hast, zu **{{game}}** ein. Arbeitet **fünfzehn Minuten an einem gemeinsamen Ziel**, bevor ihr etwas anderes auswählt.",
      },
    },
  },
  {
    id: "help-a-stranger",
    customGameCompatibility: { capabilityIds: ["online-teamplay"] },
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 20,
    genres: ["Online", "Co-op"],
    translations: {
      en: {
        name: "Help a Stranger",
        objective:
          "Open an online game where players can assist each other. Help **one unfamiliar player** finish a fight, delivery, puzzle, or objective, and stay until their result is confirmed.",
        gameObjective:
          "In **{{game}}**, help **another player** finish a fight, delivery, puzzle, or small goal. Help someone new if you can; a familiar teammate works too.",
      },
      de: {
        name: "Hilf jemandem",
        objective:
          "Starte ein Onlinespiel, in dem ihr einander helfen könnt. Hilf **jemandem, den du noch nicht kennst**, einen Kampf, eine Lieferung, ein Rätsel oder ein Ziel abzuschließen. Bleib dabei, bis es geschafft ist.",
        gameObjective:
          "Hilf in **{{game}}** **einer anderen Person**, einen Kampf, eine Lieferung, ein Rätsel oder ein kleines Ziel abzuschließen. Unterstütze möglichst jemanden, den du noch nicht kennst; jemand aus deinem Team geht auch.",
      },
    },
  },
  {
    id: "pass-the-controller",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 20,
    genres: ["Local Multiplayer", "Party"],
    translations: {
      en: {
        name: "Pass the Controller",
        objective:
          "Choose a local game that works in short turns. Play a **best-of-three** with someone nearby and pass the controller after every round, regardless of the result.",
      },
      de: {
        name: "Controller weitergeben",
        objective:
          "Wähle ein Spiel mit kurzen Runden, das ihr vor Ort spielen könnt. Spiel mit jemandem neben dir ein **Best-of-three** und gebt den Controller nach jeder Runde weiter, egal wie sie ausgeht.",
      },
    },
  },
  {
    id: "one-good-trade",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 20,
    genres: ["Social", "RPG"],
    translations: {
      en: {
        name: "One Good Trade",
        objective:
          "Open a game where players can exchange items. Give or trade **one useful crafted, spare, or duplicate item** to another player and make sure they accept it.",
      },
      de: {
        name: "Ein guter Tausch",
        objective:
          "Starte ein Spiel, in dem ihr Gegenstände untereinander tauschen könnt. Verschenke oder tausche **einen nützlichen Gegenstand, den du hergestellt hast, übrighast oder doppelt besitzt**. Warte, bis die andere Person ihn angenommen hat.",
      },
    },
  },
  {
    id: "support-round",
    customGameCompatibility: {
      capabilityIds: ["online-teamplay", "rounds-or-matches"],
    },
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 20,
    genres: ["Team", "Competitive"],
    translations: {
      en: {
        name: "Support Round",
        objective:
          "Choose a team game with a support role and play **one complete match** in it. Create **five assists, heals, saves, or team opportunities** instead of chasing the final hit.",
        gameObjective:
          "In **{{game}}**, choose one way to support your team for a full round. Help teammates **five times** and stay until the round ends.",
      },
      de: {
        name: "Support-Runde",
        objective:
          "Starte ein Teamspiel mit einer Support-Rolle und spiele damit **ein ganzes Match**. Unterstütze dein Team mit **fünf Assists, Heilungen, Rettungen oder herausgespielten Chancen**, statt selbst den letzten Treffer landen zu wollen.",
        gameObjective:
          "Entscheide in **{{game}}**, wie du dein Team eine ganze Runde lang unterstützen möchtest. Hilf deinen Teammitgliedern **fünfmal** und bleib bis zum Rundenende.",
      },
    },
  },
  {
    id: "old-rival",
    customGameCompatibility: {
      capabilityIds: ["online-teamplay", "rounds-or-matches"],
    },
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 25,
    genres: ["Multiplayer", "Nostalgic"],
    translations: {
      en: {
        name: "Old Rival",
        objective:
          "Open a game you used to play against a friend and invite that same person if you can. Play **one full match or three short rounds** with the rules you used back then.",
        gameObjective:
          "Invite a familiar rival to **{{game}}** and play **three complete rounds** in the same mode. Keep the settings the same for all three.",
      },
      de: {
        name: "Alte Rivalität",
        objective:
          "Starte ein Spiel, in dem du früher gegen jemanden aus deinem Freundeskreis angetreten bist. Lade diese Person möglichst wieder ein und spielt **ein ganzes Match oder drei kurze Runden** nach euren damaligen Regeln.",
        gameObjective:
          "Lade jemanden, gegen den du schon öfter gespielt hast, zu **{{game}}** ein. Spielt **drei ganze Runden** im selben Modus und mit denselben Einstellungen.",
      },
    },
  },
  {
    id: "public-event",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 25,
    genres: ["MMO", "Online"],
    translations: {
      en: {
        name: "Public Event",
        objective:
          "Open your most recently played **online game with public events shown on the map**. Join the nearest active event, contribute to one objective, and stay until **the shared result or reward appears**.",
      },
      de: {
        name: "Öffentliches Event",
        objective:
          "Starte dein zuletzt gespieltes **Onlinespiel mit öffentlichen Events auf der Karte**. Nimm am nächsten laufenden Event teil, hilf bei einem Ziel und bleib, bis **das gemeinsame Ergebnis oder die Belohnung erscheint**.",
      },
    },
  },
  {
    id: "community-level",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 20,
    genres: ["Platformer", "Puzzle"],
    translations: {
      en: {
        name: "Community Level",
        objective:
          "Choose a **game with player-made levels and ratings**. Open the first featured level you have not played, **finish it and leave a rating** before opening another creation.",
      },
      de: {
        name: "Community-Level",
        objective:
          "Nimm ein **Spiel mit Community-Leveln und Bewertungen**. Öffne das erste vorgestellte Level, das du noch nicht gespielt hast, **beende und bewerte es**, bevor du ein weiteres öffnest.",
      },
    },
  },
  {
    id: "team-signals",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 25,
    genres: ["Co-op", "Online"],
    translations: {
      en: {
        name: "Team Signals",
        objective:
          "Open a **public co-op game with a ping system** and queue for the first available mission. Mark the first three enemies or resources your team approaches and **stay until the mission ends**.",
      },
      de: {
        name: "Zeig es dem Team",
        objective:
          "Starte ein **Koop-Spiel mit öffentlichen Partien und Ping-System** und melde dich für die erste verfügbare Mission an. Markiere die ersten drei Gegner oder Ressourcen, denen sich dein Team nähert, und **bleib bis zum Missionsende**.",
      },
    },
  },
  {
    id: "group-photo",
    minimumDurationMinutes: 3,
    suggestedDurationMinutes: 15,
    genres: ["Social", "Online"],
    translations: {
      en: {
        name: "Group Photo",
        objective:
          "Open an **online social game with public hubs, player counts, and photo mode**. Join the first hub with at least three players, frame your avatar with them, and **save one group photo**.",
      },
      de: {
        name: "Gruppenfoto",
        objective:
          "Starte ein **soziales Onlinespiel mit öffentlichen Treffpunkten, Spielerzahlen und Fotomodus**. Betritt den ersten Treffpunkt mit mindestens drei Personen, bring deine Figur mit ihnen ins Bild und **speichere ein Gruppenfoto**.",
      },
    },
  },
  {
    id: "spectator-seat",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 20,
    genres: ["Competitive", "Online"],
    translations: {
      en: {
        name: "Spectator Seat",
        objective:
          "Choose an **online game with public spectating and built-in reactions**. Watch the first available match from start to result screen, then **send one positive reaction to a player**.",
      },
      de: {
        name: "Auf der Tribüne",
        objective:
          "Wähle ein **Onlinespiel, in dem du öffentlichen Matches zuschauen und Reaktionen verschicken kannst**. Sieh dir das erste verfügbare Match von Anfang bis Ende an und **schicke danach einer Person eine positive Reaktion**.",
      },
    },
  },
]);
