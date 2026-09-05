import { defineMoodQuests } from "./defineMoodQuests";

export const createQuests = defineMoodQuests("create", [
  {
    id: "rocket-league-fresh-preset",
    additionalMoodIds: ["curious"],
    universal: false,
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 15,
    genres: ["Sports", "Customization"],
    translations: {
      en: {
        name: "Fresh Preset",
        objective:
          "Build a new Rocket League preset around **one body, decal, or color you rarely use**. Equip it and finish one complete online or exhibition match.",
        gameObjective:
          "Build a new **{{game}}** preset around **one body, decal, or color you rarely use**. Equip it and finish one complete online or exhibition match.",
      },
      de: {
        name: "Ein neuer Look",
        objective:
          "Gestalte in Rocket League ein neues Preset mit **einer Karosserie, Lackierung oder Farbe, die du selten nutzt**. Wähle es aus und spiele damit ein Online- oder Schaukampf-Match bis zum Ende.",
        gameObjective:
          "Gestalte in **{{game}}** ein neues Preset mit **einer Karosserie, Lackierung oder Farbe, die du selten nutzt**. Wähle es aus und spiele damit ein Online- oder Schaukampf-Match bis zum Ende.",
      },
    },
  },
  {
    id: "tiny-home",
    minimumDurationMinutes: 8,
    suggestedDurationMinutes: 25,
    genres: ["Building", "Sandbox"],
    translations: {
      en: {
        name: "Tiny Home",
        objective:
          "Open a building game and make a home small enough to see in one view. Give it **a bed, a light, and storage**, then walk a character through it once.",
      },
      de: {
        name: "Kleines Zuhause",
        objective:
          "Starte ein Bauspiel und errichte ein kleines Zuhause, das vollständig auf den Bildschirm passt. Richte es mit **einem Bett, einer Lichtquelle und Stauraum** ein und geh danach einmal mit einer Figur hindurch.",
      },
    },
  },
  {
    id: "new-outfit",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 20,
    genres: ["Fashion", "Character Creator"],
    translations: {
      en: {
        name: "New Outfit",
        objective:
          "Choose a game with clothing or character customization. Build **one complete outfit** around an item you never use and limit the whole look to **three colors**.",
      },
      de: {
        name: "Neues Outfit",
        objective:
          "Wähle ein Spiel, in dem du Kleidung oder das Aussehen deiner Figur anpassen kannst. Stelle **ein vollständiges Outfit** mit einem Teil zusammen, das du nie trägst, und nutze dabei höchstens **drei Farben**.",
      },
    },
  },
  {
    id: "one-room",
    minimumDurationMinutes: 8,
    suggestedDurationMinutes: 25,
    genres: ["Decoration", "Life Sim"],
    translations: {
      en: {
        name: "One Room",
        objective:
          "Open a game with a room you can decorate and choose one object already inside it. Redesign **only that room** around the object, moving or adding at least **seven items**.",
      },
      de: {
        name: "Ein Raum",
        objective:
          "Starte ein Spiel, in dem du Räume einrichten kannst, und wähle einen Gegenstand in einem bestehenden Raum. Gestalte **nur diesen Raum** passend dazu um. Versetze oder ergänze dabei mindestens **sieben Gegenstände**.",
      },
    },
  },
  {
    id: "eight-bars",
    minimumDurationMinutes: 8,
    suggestedDurationMinutes: 20,
    genres: ["Music", "Creative"],
    translations: {
      en: {
        name: "Eight Bars",
        objective:
          "Open a game or tool inside a game where you can make music. Create an **eight-bar loop** with a beat, a bass part, and one melody, then play it from start to finish.",
      },
      de: {
        name: "Acht Takte",
        objective:
          "Starte ein Spiel, in dem du Musik machen kannst. Erstelle einen **Loop aus acht Takten** mit Beat, Bass und einer Melodie und spiele ihn einmal vollständig ab.",
      },
    },
  },
  {
    id: "short-course",
    minimumDurationMinutes: 10,
    suggestedDurationMinutes: 30,
    genres: ["Level Editor", "Platformer"],
    translations: {
      en: {
        name: "Short Course",
        objective:
          "Use a level editor to build a course with **a start, three obstacles, and a finish**. Complete one clean test run without changing the course midway.",
      },
      de: {
        name: "Kurzer Parcours",
        objective:
          "Baue in einem Leveleditor einen Parcours mit **Start, drei Hindernissen und Ziel**. Schließe einen sauberen Testlauf ab, ohne den Kurs unterwegs zu verändern.",
      },
    },
  },
  {
    id: "a-little-garden",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 20,
    genres: ["Farming", "Cozy"],
    translations: {
      en: {
        name: "A Little Garden",
        objective:
          "Choose a farming or sandbox game with plants. Make a **three-by-three garden**, use at least **three different plants**, and add one path or border around it.",
      },
      de: {
        name: "Ein kleiner Garten",
        objective:
          "Starte ein Farming- oder Sandbox-Spiel, in dem du etwas anpflanzen kannst. Lege einen **Garten mit drei mal drei Feldern** an, mit mindestens **drei Pflanzenarten** und einem Weg oder einer Umrandung.",
      },
    },
  },
  {
    id: "gallery-remix",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 25,
    genres: [],
    translations: {
      en: {
        name: "Gallery Remix",
        objective:
          "Open your latest **game where you can create and publish banners or artwork**. Borrow one color, shape, or layout from the first three gallery posts. Make a new game-themed design and **publish it**.",
      },
      de: {
        name: "Galerie-Remix",
        objective:
          "Starte dein zuletzt gespieltes **Spiel, in dem du Banner oder Bilder gestalten und veröffentlichen kannst**. Sieh dir die ersten drei Werke in der Galerie an. Lass dich von Farbe, Form oder Aufbau inspirieren, gestalte ein eigenes Motiv zur Spielwelt und **veröffentliche es**.",
      },
    },
  },
  {
    id: "mini-production-line",
    minimumDurationMinutes: 8,
    suggestedDurationMinutes: 25,
    genres: ["Automation", "Building"],
    translations: {
      en: {
        name: "Mini Production Line",
        objective:
          "Open a **building game with linkable crafting stations**. Build a small line with two stations plus input and output storage, then run it until **three finished items reach the output**.",
      },
      de: {
        name: "Kleine Produktionslinie",
        objective:
          "Starte ein **Bauspiel mit Produktionsstationen, die sich verbinden lassen**. Verbinde zwei Stationen mit je einem Lager für Material und fertige Produkte. Lass die Anlage laufen, bis **drei fertige Gegenstände im Ausgangslager liegen**.",
      },
    },
  },
  {
    id: "signature-vehicle",
    customGameCompatibility: {
      capabilityIds: ["customization", "driving-or-racing"],
    },
    minimumDurationMinutes: 8,
    suggestedDurationMinutes: 25,
    genres: ["Racing"],
    translations: {
      en: {
        name: "Signature Vehicle",
        objective:
          "Open your most recently played **racing game with a livery editor**. Keep the current vehicle, create a design with three colors and one number or symbol, then **equip it and finish one race**.",
        gameObjective:
          "In **{{game}}**, create one vehicle preset around a color or item you rarely use. Equip it and finish **one full drive, race, or match** with it.",
      },
      de: {
        name: "Eigenes Renndesign",
        objective:
          "Starte dein zuletzt gespieltes **Rennspiel mit Lackierungseditor**. Behalte das aktuelle Fahrzeug, gestalte es mit drei Farben und einer Zahl oder einem Symbol und **beende damit ein Rennen**.",
        gameObjective:
          "Gestalte in **{{game}}** ein Fahrzeug-Preset passend zu einer Farbe oder einem Teil, das du selten nutzt. Wähle es aus und beende damit **eine ganze Fahrt, ein Rennen oder ein Match**.",
      },
    },
  },
  {
    id: "fresh-face",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 20,
    genres: ["RPG", "Life Sim"],
    translations: {
      en: {
        name: "Fresh Face",
        objective:
          "Choose a **game with a saveable character creator and randomize button**. Accept the first random base, change its face, hair, and outfit, then **save the character and enter the first playable scene**.",
      },
      de: {
        name: "Neues Gesicht",
        objective:
          "Wähle ein **Spiel mit Charaktereditor, Zufallsfunktion und Speicherfunktion**. Übernimm den ersten Zufallsvorschlag und ändere Gesicht, Haare und Kleidung. **Speichere die Figur und starte die erste spielbare Szene**.",
      },
    },
  },
  {
    id: "short-scene",
    minimumDurationMinutes: 8,
    suggestedDurationMinutes: 25,
    genres: ["Simulation", "Sandbox"],
    translations: {
      en: {
        name: "Short Scene",
        objective:
          "Open a **game with a movie or scene editor**. Create a ten-second scene with two characters, one camera change, and one sound, then **play the full preview and save it**.",
      },
      de: {
        name: "Kurze Szene",
        objective:
          "Starte ein **Spiel mit Film- oder Szeneneditor**. Erstelle eine zehnsekündige Szene mit zwei Figuren, einem Kamerawechsel und einem Geräusch, **spiele die Vorschau vollständig ab und speichere sie**.",
      },
    },
  },
]);
