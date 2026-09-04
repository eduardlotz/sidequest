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
        name: "Frisches Preset",
        objective:
          "Baue ein neues Rocket-League-Preset um **eine selten genutzte Karosserie, Lackierung oder Farbe**. Rüste es aus und beende ein vollständiges Online- oder Ausstellungsmatch.",
        gameObjective:
          "Baue ein neues Preset in **{{game}}** um **eine selten genutzte Karosserie, Lackierung oder Farbe**. Rüste es aus und beende ein vollständiges Online- oder Ausstellungsmatch.",
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
          "Öffne ein Bauspiel und errichte ein Zuhause, das in eine Ansicht passt. Gib ihm **ein Bett, ein Licht und Stauraum** und führe danach einmal eine Figur hindurch.",
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
          "Nimm ein Spiel mit Kleidung oder Charaktergestaltung. Baue **ein vollständiges Outfit** um ein selten genutztes Teil und beschränke den ganzen Look auf **drei Farben**.",
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
          "Öffne ein Spiel mit einem dekorierbaren Raum und wähle ein vorhandenes Objekt darin. Gestalte **nur diesen Raum** darum herum neu und bewege oder ergänze mindestens **sieben Dinge**.",
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
          "Öffne ein Spiel oder ein Werkzeug im Spiel, mit dem du Musik machen kannst. Erstelle einen **Loop aus acht Takten** mit Beat, Bass und einer Melodie und spiele ihn ganz ab.",
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
          "Nimm ein Farming- oder Sandbox-Spiel mit Pflanzen. Lege einen **Garten aus drei mal drei Feldern** mit mindestens **drei Pflanzenarten** und einem Weg oder Rand an.",
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
          "Starte dein letztes **Spiel zum Gestalten und Veröffentlichen von Bannern oder Bildern**. Übernimm Farbe, Form oder Aufbau aus den ersten drei Galeriewerken, gestalte ein neues Motiv zur Spielwelt und **veröffentliche es**.",
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
          "Starte ein **Bauspiel mit verbindbaren Produktionsstationen**. Baue eine kleine Linie aus zwei Stationen sowie Ein- und Ausgangslager und lass sie laufen, bis **drei fertige Gegenstände im Ausgang liegen**.",
      },
    },
  },
  {
    id: "signature-vehicle",
    customGameCompatibility: { capabilityIds: ["customization"] },
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
          "Erstelle in **{{game}}** ein Fahrzeug-Preset rund um eine selten genutzte Farbe oder ein selten genutztes Teil. R\u00FCste es aus und beende damit **eine vollst\u00E4ndige Fahrt, ein Rennen oder Match**.",
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
          "Nimm ein **Spiel mit speicherbarer Figurenerstellung und Zufallsfunktion**. Übernimm den ersten Vorschlag, ändere Gesicht, Haare und Kleidung, **speichere die Figur und starte die erste spielbare Szene**.",
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
