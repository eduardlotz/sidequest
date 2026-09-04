import { defineMoodQuests } from "./defineMoodQuests";

export const connectQuests = defineMoodQuests("connect", [
  {
    id: "battlefield-class-duty",
    additionalMoodIds: ["focused"],
    universal: false,
    minimumDurationMinutes: 10,
    suggestedDurationMinutes: 25,
    genres: ["Shooter", "Multiplayer"],
    translations: {
      en: {
        name: "Class Duty",
        objective:
          "In Battlefield multiplayer, choose one class and stay with it for **one full round**. Complete five actions tied to that class before the result screen.",
        gameObjective:
          "In **{{game}}** multiplayer, choose one class and stay with it for **one full round**. Complete five actions tied to that class before the result screen.",
      },
      de: {
        name: "Klassendienst",
        objective:
          "Wähle im Battlefield-Multiplayer eine Klasse und bleibe **eine vollständige Runde** bei ihr. Erledige vor dem Ergebnisbildschirm fünf Aktionen, die zu dieser Klasse gehören.",
        gameObjective:
          "Wähle im Multiplayer von **{{game}}** eine Klasse und bleibe **eine vollständige Runde** bei ihr. Erledige vor dem Ergebnisbildschirm fünf Aktionen, die zu dieser Klasse gehören.",
      },
    },
  },
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
          "Invite someone you have not played with recently to **{{game}}**. Complete **three rounds or one co-op mission** together before changing modes.",
      },
      de: {
        name: "Co-op-Check-in",
        objective:
          "Lade jemanden, mit dem du lange nicht gespielt hast, in ein vertrautes Spiel ein. Beendet zusammen **drei Runden oder eine Co-op-Mission**, bevor ihr den Modus wechselt.",
        gameObjective:
          "Lade jemanden, mit dem du lange nicht gespielt hast, zu **{{game}}** ein. Beendet zusammen **drei Runden oder eine Co-op-Mission**, bevor ihr den Modus wechselt.",
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
          "In **{{game}}**, help **one unfamiliar player** finish a fight, delivery, puzzle, or objective. Stay until their result is confirmed.",
      },
      de: {
        name: "Hilf jemandem",
        objective:
          "Öffne ein Onlinespiel, in dem Spielende einander helfen können. Hilf **einer unbekannten Person** bei Kampf, Lieferung, Rätsel oder Ziel und bleib, bis ihr Ergebnis bestätigt ist.",
        gameObjective:
          "Hilf in **{{game}}** **einer unbekannten Person** bei Kampf, Lieferung, R\u00E4tsel oder Ziel und bleib, bis ihr Ergebnis best\u00E4tigt ist.",
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
          "Nimm ein lokales Spiel mit kurzen Runden. Spielt ein **Best-of-three** und gebt den Controller nach jeder Runde weiter, unabhängig vom Ergebnis.",
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
          "Öffne ein Spiel, in dem Gegenstände getauscht werden können. Gib oder tausche **einen nützlichen hergestellten, übrigen oder doppelten Gegenstand** und warte, bis er angenommen wird.",
      },
    },
  },
  {
    id: "support-round",
    customGameCompatibility: { capabilityIds: ["online-teamplay"] },
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 20,
    genres: ["Team", "Competitive"],
    translations: {
      en: {
        name: "Support Round",
        objective:
          "Choose a team game with a support role and play **one complete match** in it. Create **five assists, heals, saves, or team opportunities** instead of chasing the final hit.",
        gameObjective:
          "In **{{game}}**, choose a support-focused role for one full round. Help teammates **five times** and stay in that role until the result screen.",
      },
      de: {
        name: "Support-Runde",
        objective:
          "Nimm ein Teamspiel mit Support-Rolle und spiele darin **ein vollständiges Match**. Erzeuge **fünf Assists, Heilungen, Rettungen oder Teamchancen**, statt dem letzten Treffer nachzujagen.",
        gameObjective:
          "W\u00E4hle in **{{game}}** f\u00FCr eine ganze Runde eine unterst\u00FCtzende Rolle. Hilf deinem Team **f\u00FCnfmal** und bleib bis zum Ergebnisbildschirm in dieser Rolle.",
      },
    },
  },
  {
    id: "old-rival",
    customGameCompatibility: { capabilityIds: ["online-teamplay", "rounds-or-matches"] },
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 25,
    genres: ["Multiplayer", "Nostalgic"],
    translations: {
      en: {
        name: "Old Rival",
        objective:
          "Open a game you used to play against a friend and invite that same person if you can. Play **one full match or three short rounds** with the rules you used back then.",
        gameObjective:
          "Invite a familiar rival to **{{game}}** and play a **best-of-three** in the same mode. Finish the deciding round even if one player wins the first two.",
      },
      de: {
        name: "Alte Rivalität",
        objective:
          "Öffne ein Spiel, das du früher gegen eine befreundete Person gespielt hast, und lade sie wenn möglich ein. Spielt **ein ganzes Match oder drei kurze Runden** nach euren damaligen Regeln.",
        gameObjective:
          "Lade einen vertrauten Rivalen zu **{{game}}** ein und spielt ein **Best-of-three** im selben Modus. Beendet die Entscheidungsrunde auch dann, wenn jemand die ersten beiden gewinnt.",
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
        name: "Teamzeichen",
        objective:
          "Starte ein **öffentliches Co-op-Spiel mit Ping-System** und wähle die erste verfügbare Mission. Markiere die ersten drei Gegner oder Ressourcen, denen sich dein Team nähert, und **bleib bis zum Missionsende**.",
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
          "Nimm ein **Onlinespiel mit öffentlichen Matches zum Zuschauen und eingebauten Reaktionen**. Sieh das erste verfügbare Match bis zum Ergebnis an und **schick danach einer Person eine positive Reaktion**.",
      },
    },
  },
]);
