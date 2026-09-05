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
          "Starte ein Spiel, in dem du viel unterwegs bist, und plane eine Route über **fünf benannte Orte oder Wahrzeichen**. Bleib ohne Schnellreise in Bewegung und hör am fünften Ort auf.",
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
          "Wähle ein Onlinespiel mit Runden unter zehn Minuten. Spiele **drei ganze Runden** im selben Modus und nimm jedes Ergebnis hin, ohne zwischendurch die Warteschlange zu wechseln.",
        gameObjective:
          "Wähle in **{{game}}** den kürzesten regulären Matchmodus. Spiele **drei Matches hintereinander**, ohne dazwischen den Modus oder deine Ausrüstung zu wechseln.",
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
          "Wähle ein Spiel mit Klettern, Springen oder Parkour und such dir ein sichtbares Ziel. Erreiche es mit **fünf verschiedenen Bewegungsaktionen**, ohne zwischendurch am Boden stehen zu bleiben.",
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
          "Starte ein Rennspiel und wähle eine kurze Strecke sowie das schnellste Fahrzeug, das du noch sicher steuern kannst. Beende **ein Rennen mit mindestens drei Runden**, ohne zurückzuspulen.",
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
          "Wähle ein Actionspiel mit Gegnerwellen oder vielen Gegnern in kurzer Folge. Besiege am Stück **zwanzig Gegner** und hör direkt nach dem zwanzigsten auf.",
        gameObjective:
          "Starte in **{{game}}** den ersten Kampf, den du wiederholen kannst. Besiege **zwanzig Gegner** und hör direkt nach dem zwanzigsten auf.",
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
          "Wähle ein **Spiel mit kurzen Abschnitten, in denen du einen Greifhaken nutzt**. Starte den ersten noch nicht geschafften Abschnitt, nutze den Haken mindestens fünfmal und **erreiche ohne Schnellreise den nächsten Speicherpunkt**.",
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
        name: "Fünf Tricks am Stück",
        objective:
          "Starte ein **Skatespiel mit sichtbarem Combo-Zähler**. Nutze das erste verfügbare Gebiet und lande eine zusammenhängende Folge aus **fünf verschiedenen Tricks**. Hör auf, sobald das Spiel die Punkte dafür zählt.",
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
          "Starte ein **Kletter- oder Plattformspiel mit kurzen Strecken auf Zeit**. Versuche die erste noch nicht geschaffte Strecke mit den Voreinstellungen bis zu dreimal. Hör auf, sobald du **die Zeitvorgabe geschafft oder drei Versuche beendet hast**.",
      },
    },
  },
]);
