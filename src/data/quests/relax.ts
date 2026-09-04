import { defineMoodQuests } from "./defineMoodQuests";

export const relaxQuests = defineMoodQuests("relax", [
  {
    id: "a-little-walk",
    customGameCompatibility: { capabilityIds: ["open-world"] },
    minimumDurationMinutes: 3,
    suggestedDurationMinutes: 20,
    genres: ["Cozy", "Open World"],
    translations: {
      en: {
        name: "A Little Walk",
        objective:
          "Open a game with a place you enjoy and take **a quiet walk** through it. Reach **one memorable landmark** without using fast travel.",
        gameObjective:
          "In **{{game}}**, take a quiet walk through a place you enjoy. Reach **one memorable landmark** without using fast travel.",
      },
      de: {
        name: "Ein kleiner Spaziergang",
        objective:
          "Öffne ein Spiel mit einem Ort, den du magst, und mach dort **einen ruhigen Spaziergang**. Erreiche **einen besonderen Orientierungspunkt**, ohne Schnellreise zu nutzen.",
        gameObjective:
          "Mach in **{{game}}** einen ruhigen Spaziergang durch einen Ort, den du magst. Erreiche **einen besonderen Orientierungspunkt**, ohne Schnellreise zu nutzen.",
      },
    },
  },
  {
    id: "space-drift",
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
    id: "going-fishing",
    customGameCompatibility: { capabilityIds: ["fishing"] },
    minimumDurationMinutes: 2,
    suggestedDurationMinutes: 10,
    genres: ["Fishing", "Cozy"],
    translations: {
      en: {
        name: "Going Fishing",
        objective:
          "Open a game with a fishing mechanic and go to the nearest place where you can cast a line. Catch **three fish** and stop after the third catch is safely stored.",
        gameObjective:
          "In **{{game}}**, go to the nearest place where you can cast a line. Catch **three fish** and stop after the third catch is safely stored.",
      },
      de: {
        name: "Angelausflug",
        objective:
          "Öffne ein Spiel mit Angelmechanik und geh zum nächsten Ort, an dem du die Leine auswerfen kannst. Fange **drei Fische** und höre auf, sobald der dritte sicher verstaut ist.",
        gameObjective:
          "Geh in **{{game}}** zum n\u00E4chsten Ort, an dem du die Leine auswerfen kannst. Fange **drei Fische** und h\u00F6re auf, sobald der dritte sicher verstaut ist.",
      },
    },
  },
  {
    id: "scenic-drive",
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
    id: "three-small-puzzles",
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
    id: "familiar-level",
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
  {
    id: "first-recipe",
    customGameCompatibility: { capabilityIds: ["cooking"] },
    minimumDurationMinutes: 2,
    suggestedDurationMinutes: 10,
    genres: ["Cooking", "Life Sim"],
    translations: {
      en: {
        name: "First Recipe",
        objective:
          "Open your most recently played **game with cooking and a visible recipe list**. Make the first recipe for which you already have every ingredient and stop when **the dish is finished**.",
        gameObjective:
          "In **{{game}}**, open the recipe list and make the first recipe for which you already have every ingredient. Stop when **the dish is finished**.",
      },
      de: {
        name: "Erstes Rezept",
        objective:
          "Starte dein zuletzt gespieltes **Spiel mit Kochen und sichtbarer Rezeptliste**. Bereite das erste Rezept zu, für das schon alle Zutaten da sind, und hör auf, sobald **das Gericht fertig ist**.",
        gameObjective:
          "\u00D6ffne in **{{game}}** die Rezeptliste und bereite das erste Rezept zu, f\u00FCr das schon alle Zutaten da sind. H\u00F6r auf, sobald **das Gericht fertig ist**.",
      },
    },
  },
  {
    id: "one-stop-ride",
    minimumDurationMinutes: 2,
    suggestedDurationMinutes: 10,
    genres: ["Simulation", "Open World"],
    translations: {
      en: {
        name: "One Stop Ride",
        objective:
          "Open a **game where you can ride public transport as a passenger**. Board at the nearest stop, ride from one named stop to the next, and **get off there**.",
      },
      de: {
        name: "Eine Station",
        objective:
          "Starte ein **Spiel, in dem du Bus oder Bahn als Fahrgast nutzen kannst**. Steig an der nächsten Haltestelle ein, fahr genau eine benannte Station mit und **steig dort aus**.",
      },
    },
  },
  {
    id: "care-routine",
    minimumDurationMinutes: 2,
    suggestedDurationMinutes: 12,
    genres: ["Life Sim", "Cozy"],
    translations: {
      en: {
        name: "Care Routine",
        objective:
          "Open your most recently played **game with animals and visible care needs**. Choose the first animal in the list and fill **its least-filled need meter**, then stop.",
      },
      de: {
        name: "Kleine Pflegerunde",
        objective:
          "Starte dein zuletzt gespieltes **Spiel mit Tieren und sichtbaren Bedürfnissen**. Nimm das erste Tier in der Liste und fülle **seine am wenigsten gefüllte Anzeige** vollständig auf.",
      },
    },
  },
  {
    id: "campfire-stop",
    minimumDurationMinutes: 3,
    suggestedDurationMinutes: 15,
    genres: ["Adventure", "Open World"],
    translations: {
      en: {
        name: "Campfire Stop",
        objective:
          "Open a familiar **game with discovered camps or rest points**. Travel to the nearest one without fast travel or starting a fight, **rest once**, and stop when control returns.",
      },
      de: {
        name: "Pause am Lagerfeuer",
        objective:
          "Starte ein vertrautes **Spiel mit entdeckten Lagern oder Rastplätzen**. Geh ohne Schnellreise und ohne einen Kampf zu beginnen zum nächsten, **ruhe einmal** und hör auf, sobald du wieder steuern kannst.",
      },
    },
  },
  {
    id: "gentle-delivery",
    minimumDurationMinutes: 3,
    suggestedDurationMinutes: 15,
    genres: ["Driving", "Simulation"],
    translations: {
      en: {
        name: "Gentle Delivery",
        objective:
          "Choose a **driving game with short deliveries and no countdown**. Take the shortest listed job, keep the default vehicle, and **complete that delivery** without accepting another.",
      },
      de: {
        name: "Ruhige Lieferung",
        objective:
          "Nimm ein **Spiel mit kurzen Lieferfahrten ohne Zeitlimit**. Wähle den kürzesten Auftrag in der Liste, behalte das vorgeschlagene Fahrzeug und **schließe nur diese Lieferung ab**.",
      },
    },
  },
]);
