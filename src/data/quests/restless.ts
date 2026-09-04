import { defineMoodQuests } from "./defineMoodQuests";

export const restlessQuests = defineMoodQuests("restless", [
  {
    id: "keep-moving",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 15,
    genres: ["Movement", "Open World"],
    translations: {
      en: {
        name: "Keep Moving",
        objective:
          "Open a game built around movement and pick a route through **five named places or landmarks**. Keep moving between them without fast travel and finish at the fifth.",
      },
      de: {
        name: "Immer weiter",
        objective:
          "Öffne ein Spiel mit viel Bewegung und plane eine Route durch **fünf benannte Orte oder Wahrzeichen**. Bleib ohne Schnellreise in Bewegung und höre am fünften auf.",
      },
    },
  },
  {
    id: "quick-matches",
    customGameCompatibility: { capabilityIds: ["rounds-or-matches"] },
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 20,
    genres: ["Online", "Competitive"],
    translations: {
      en: {
        name: "Quick Matches",
        objective:
          "Choose an online game with rounds under ten minutes. Play **three complete rounds** using the same mode and accept every result without queue-hopping.",
        gameObjective:
          "In **{{game}}**, enter the shortest standard match type. Finish **three matches in a row** without changing mode or loadout between them.",
      },
      de: {
        name: "Schnelle Matches",
        objective:
          "Nimm ein Onlinespiel mit Runden unter zehn Minuten. Spiele im selben Modus **drei vollständige Runden** und akzeptiere jedes Ergebnis, ohne die Warteschlange zu wechseln.",
        gameObjective:
          "Starte in **{{game}}** den k\u00FCrzesten Standard-Matchtyp. Beende **drei Matches hintereinander**, ohne dazwischen Modus oder Loadout zu wechseln.",
      },
    },
  },
  {
    id: "parkour-line",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 15,
    genres: ["Parkour", "Platformer"],
    translations: {
      en: {
        name: "Parkour Line",
        objective:
          "Find a game with climbing, jumping, or parkour and choose a visible destination. Reach it by chaining **five different movement actions** without stopping on the ground between them.",
      },
      de: {
        name: "Parkour-Linie",
        objective:
          "Nimm ein Spiel mit Klettern, Springen oder Parkour und wähle ein sichtbares Ziel. Erreiche es mit **fünf verschiedenen Bewegungsaktionen**, ohne dazwischen am Boden stehen zu bleiben.",
      },
    },
  },
  {
    id: "flat-out-race",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 15,
    genres: ["Racing", "Arcade"],
    translations: {
      en: {
        name: "Flat-Out Race",
        objective:
          "Open a racing game, choose a short track, and use the fastest vehicle you can control. Finish **one full race of at least three laps** without rewinding.",
      },
      de: {
        name: "Vollgasrennen",
        objective:
          "Öffne ein Rennspiel, wähle eine kurze Strecke und das schnellste kontrollierbare Fahrzeug. Beende **ein Rennen mit mindestens drei Runden** ohne Zurückspulen.",
      },
    },
  },
  {
    id: "twenty-enemies",
    customGameCompatibility: { capabilityIds: ["combat"] },
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 20,
    genres: ["Action", "Horde"],
    translations: {
      en: {
        name: "Twenty Enemies",
        objective:
          "Choose an action game with waves or dense encounters. Defeat **twenty enemies** in one continuous session and stop as soon as the twentieth is down.",
        gameObjective:
          "In **{{game}}**, enter the first repeatable combat activity you can start. Defeat **twenty enemies** and stop immediately after number twenty.",
      },
      de: {
        name: "Zwanzig Gegner",
        objective:
          "Nimm ein Actionspiel mit Wellen oder dichten Kämpfen. Besiege in einer zusammenhängenden Session **zwanzig Gegner** und höre direkt nach dem zwanzigsten auf.",
        gameObjective:
          "Starte in **{{game}}** die erste wiederholbare Kampfaktivit\u00E4t. Besiege **zwanzig Gegner** und h\u00F6re direkt nach Nummer zwanzig auf.",
      },
    },
  },
  {
    id: "three-songs",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 20,
    genres: ["Rhythm", "Music"],
    translations: {
      en: {
        name: "Three Songs",
        objective:
          "Open a rhythm game and choose **three songs**: one easy, one comfortable, and one difficult. Finish all three in that order without repeating a song.",
      },
      de: {
        name: "Drei Songs",
        objective:
          "Öffne ein Rhythmusspiel und wähle **drei Songs**: einen leichten, einen vertrauten und einen schwierigen. Beende alle drei in dieser Reihenfolge ohne Wiederholung.",
      },
    },
  },
  {
    id: "grapple-route",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 15,
    genres: ["Action", "Platformer"],
    translations: {
      en: {
        name: "Grapple Route",
        objective:
          "Choose a **game with short stages built around a grappling hook**. Start the first unfinished stage, use the grapple at least five times, and **reach its next checkpoint without fast travel**.",
      },
      de: {
        name: "Greifhaken-Route",
        objective:
          "Nimm ein **Spiel mit kurzen Abschnitten rund um einen Greifhaken**. Starte den ersten offenen Abschnitt, nutze den Haken mindestens fünfmal und **erreiche ohne Schnellreise den nächsten Speicherpunkt**.",
      },
    },
  },
  {
    id: "five-trick-line",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 15,
    genres: ["Sports", "Skateboarding"],
    translations: {
      en: {
        name: "Five-Trick Line",
        objective:
          "Open a **skating game with a visible combo counter**. Use the first open area and land one line containing **five different tricks**, then stop when the score is banked.",
      },
      de: {
        name: "Fünf-Trick-Linie",
        objective:
          "Starte ein **Skate-Spiel mit sichtbarem Combo-Zähler**. Nutze das erste offene Gebiet und lande eine Linie mit **fünf verschiedenen Tricks**. Hör auf, sobald die Punkte gezählt wurden.",
      },
    },
  },
  {
    id: "drift-zone",
    minimumDurationMinutes: 3,
    suggestedDurationMinutes: 15,
    genres: ["Racing"],
    translations: {
      en: {
        name: "Drift Zone",
        objective:
          "Open a **racing game with scored drift zones** and select the first unlocked zone. Keep the car moving for one complete attempt and **accept the first score at the result screen**.",
      },
      de: {
        name: "Driftzone",
        objective:
          "Starte ein **Rennspiel mit gewerteten Driftzonen** und nimm die erste freigeschaltete Zone. Halte das Auto während des ganzen Versuchs in Bewegung und **akzeptiere die erste Punktzahl im Ergebnisbildschirm**.",
      },
    },
  },
  {
    id: "weapon-relay",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 20,
    genres: ["Shooter", "Action"],
    translations: {
      en: {
        name: "Weapon Relay",
        objective:
          "Open an **action game with weapon pickups in combat**. In the first fight, defeat one enemy with each of the first three weapons you find, switching after every takedown. **Stop after the third enemy**.",
      },
      de: {
        name: "Waffenwechsel",
        objective:
          "Starte ein **Actionspiel mit aufsammelbaren Waffen im Kampf**. Besiege mit den ersten drei gefundenen Waffen jeweils einen Gegner und wechsle nach jedem Sieg. **Hör nach dem dritten Gegner auf**.",
      },
    },
  },
  {
    id: "timed-climb",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 15,
    genres: ["Platformer", "Climbing"],
    translations: {
      en: {
        name: "Timed Climb",
        objective:
          "Open a **climbing or platform game with short timed courses**. Give the first unfinished course up to three attempts with its defaults and stop after **the first timed clear or the third result**.",
      },
      de: {
        name: "Klettern auf Zeit",
        objective:
          "Starte ein **Kletter- oder Plattformspiel mit kurzen Zeitstrecken**. Gib der ersten offenen Strecke mit den Vorgaben höchstens drei Versuche und hör nach **dem ersten Erfolg oder dem dritten Ergebnis** auf.",
      },
    },
  },
]);
