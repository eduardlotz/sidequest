import type { AuthoredQuestDefinition } from "../questTypes";

export const relaxQuests: readonly AuthoredQuestDefinition[] = [
  {
    moodId: "relax",
    minimumDurationMinutes: 3,
    suggestedDurationMinutes: 20,
    genres: ["Cozy", "Open World"],
    translations: {
      en: {
        name: "A Little Walk",
        objective:
          "Open a game with a place you enjoy and take **a quiet walk** through it. Reach **one memorable landmark** without using fast travel.",
      },
      de: {
        name: "Ein kleiner Spaziergang",
        objective:
          "Öffne ein Spiel mit einem Ort, den du magst, und mach dort **einen ruhigen Spaziergang**. Erreiche **einen besonderen Orientierungspunkt**, ohne Schnellreise zu nutzen.",
      },
    },
  },
  {
    moodId: "relax",
    minimumDurationMinutes: 2,
    suggestedDurationMinutes: 10,
    genres: ["Sci-Fi", "Space Sim"],
    translations: {
      en: {
        name: "Space Drift",
        objective:
          "Open a game with peaceful space travel, set course for **the nearest station** without fast travel, and **dock there safely**.",
      },
      de: {
        name: "Weltraumdrift",
        objective:
          "Öffne ein Spiel mit friedlicher Raumfahrt, setze ohne Schnellreise Kurs auf **die nächste Station** und **docke dort sicher an**.",
      },
    },
  },
  {
    moodId: "relax",
    minimumDurationMinutes: 2,
    suggestedDurationMinutes: 10,
    genres: ["Fishing", "Cozy"],
    translations: {
      en: {
        name: "Going Fishing",
        objective:
          "Open a game with a fishing mechanic and go to the nearest place where you can cast a line. Catch **three fish** and stop after the third catch is safely stored.",
      },
      de: {
        name: "Angelausflug",
        objective:
          "Öffne ein Spiel mit Angelmechanik und geh zum nächsten Ort, an dem du die Leine auswerfen kannst. Fange **drei Fische** und höre auf, sobald der dritte sicher verstaut ist.",
      },
    },
  },
  {
    moodId: "relax",
    minimumDurationMinutes: 3,
    suggestedDurationMinutes: 15,
    genres: ["Driving", "Open World"],
    translations: {
      en: {
        name: "Scenic Drive",
        objective:
          "Choose a game where you can drive without racing. Travel from **one named place to the next** without fast travel, shortcuts, or a timer, and park when you arrive.",
      },
      de: {
        name: "Ruhige Ausfahrt",
        objective:
          "Nimm ein Spiel, in dem du ohne Rennen fahren kannst. Fahre ohne Schnellreise, Abkürzung oder Timer **von einem benannten Ort zum nächsten** und parke nach der Ankunft.",
      },
    },
  },
  {
    moodId: "relax",
    minimumDurationMinutes: 3,
    suggestedDurationMinutes: 15,
    genres: ["Puzzle", "Cozy"],
    translations: {
      en: {
        name: "Three Small Puzzles",
        objective:
          "Open a puzzle game with separate levels and choose the first unfinished section. Solve **three small puzzles** without using hints, then leave the next one untouched.",
      },
      de: {
        name: "Drei kleine Rätsel",
        objective:
          "Öffne ein Rätselspiel mit einzelnen Leveln und wähle den ersten unfertigen Abschnitt. Löse **drei kleine Rätsel** ohne Hinweise und lass das nächste unberührt.",
      },
    },
  },
  {
    moodId: "relax",
    minimumDurationMinutes: 3,
    suggestedDurationMinutes: 15,
    genres: ["Platformer", "Arcade"],
    translations: {
      en: {
        name: "Familiar Level",
        objective:
          "Open a game you used to play and choose a level you still remember clearly. Finish **that one familiar level** from the beginning without chasing collectibles or a better score.",
      },
      de: {
        name: "Vertrautes Level",
        objective:
          "Öffne ein Spiel, das du früher gespielt hast, und wähle ein Level, an das du dich gut erinnerst. Beende **dieses eine vertraute Level** von vorn, ohne Sammelobjekte oder Punkte zu jagen.",
      },
    },
  },
];
