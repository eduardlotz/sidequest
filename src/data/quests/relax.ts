import type { AuthoredQuestDefinition } from "../questTypes";

export const relaxQuests = [
  {
    id: "scenic-drive",
    moodIds: ["relax"],
    type: "inspiration",
    tags: ["driving", "no-timer"],
    minimumDurationMinutes: 3,
    suggestedDurationMinutes: 15,
    genres: [],
    translations: {
      en: {
        name: "Scenic Drive",
        objective:
          "Open a **free-roam driving game**. Pick a familiar car and **drive wherever looks interesting**. No destination and no timer.",
      },
      de: {
        name: "Ruhige Ausfahrt",
        objective:
          "Starte ein **Spiel mit freien Autofahrten**. Nimm einen vertrauten Wagen und **fahr einfach drauflos**. Kein Ziel und kein Zeitdruck.",
      },
    },
  },
  {
    id: "space-drift",
    moodIds: ["relax"],
    type: "inspiration",
    tags: ["space", "free-roam"],
    minimumDurationMinutes: 3,
    suggestedDurationMinutes: 15,
    genres: [],
    translations: {
      en: {
        name: "Between the Stars",
        objective:
          "Open a **space game with free flight**. Leave the station and **drift through space** for a while. Take in the planets, ships, and whatever you pass.",
      },
      de: {
        name: "Zwischen den Sternen",
        objective:
          "Starte ein **Weltraumspiel mit freiem Flug**. Verlasse die Station und **treib eine Weile durchs All**. Schau dir Planeten, Schiffe und deine Umgebung an.",
      },
    },
  },
  {
    id: "three-small-puzzles",
    moodIds: ["relax"],
    type: "objective",
    tags: ["puzzles", "no-timer"],
    minimumDurationMinutes: 3,
    suggestedDurationMinutes: 15,
    genres: [],
    translations: {
      en: {
        name: "Three Puzzles",
        objective:
          "Open a **relaxed puzzle game** and solve **three short puzzles**. Pick any comfortable difficulty and use hints if you want.",
      },
      de: {
        name: "Drei Rätsel",
        objective:
          "Starte ein **entspanntes Rätselspiel** und löse **drei kurze Rätsel**. Wähle eine angenehme Schwierigkeit und nutze Hinweise, wenn du möchtest.",
      },
    },
  },
  {
    id: "familiar-level",
    moodIds: ["relax"],
    type: "objective",
    tags: ["replay", "no-timer"],
    minimumDurationMinutes: 2,
    suggestedDurationMinutes: 10,
    genres: [],
    translations: {
      en: {
        name: "Familiar Level",
        objective:
          "Open a **platformer you already know** and replay a familiar level. Use any assists you like and **reach the end**. Ignore scores and collectibles.",
      },
      de: {
        name: "Vertrautes Level",
        objective:
          "Starte einen **Plattformer, den du gut kennst**, und spiele ein vertrautes Level noch einmal. Nutze beliebige Hilfen und **erreiche das Ende**. Punkte und Sammelobjekte sind egal.",
      },
    },
  },

  {
    "id": "small-town-routine",
    "moodIds": [
      "relax"
    ],
    "type": "inspiration",
    "tags": [],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "genres": [],
    "translations": {
      "en": {
        "name": "Around Town",
        "objective": "Open **a gentle life sim** and visit a town you know. **Drop by familiar shops and neighbors**. Follow the day without an errands list."
      },
      "de": {
        "name": "Im Ort unterwegs",
        "objective": "Starte **eine ruhige Lebenssimulation** und besuche einen vertrauten Ort. **Schau bei bekannten Läden und Nachbarn vorbei**. Lass den Tag ohne Aufgabenliste laufen."
      }
    }
  },
] satisfies readonly AuthoredQuestDefinition[];
