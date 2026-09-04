import { defineMoodQuests } from "./defineMoodQuests";

export const exploreQuests = defineMoodQuests("explore", [
  {
    id: "crimson-desert-pywel-detour",
    additionalMoodIds: ["restless"],
    universal: false,
    minimumDurationMinutes: 8,
    suggestedDurationMinutes: 25,
    genres: ["Action adventure", "Open world"],
    translations: {
      en: {
        name: "Pywel Detour",
        objective:
          "In Crimson Desert, leave the nearest marked route and reach **one visible landmark** using the traversal tools you have unlocked. Return to a road or settlement without fast travel.",
        gameObjective:
          "In **{{game}}**, leave the nearest marked route and reach **one visible landmark** using the traversal tools you have unlocked. Return to a road or settlement without fast travel.",
      },
      de: {
        name: "Umweg durch Pywel",
        objective:
          "Verlasse in Crimson Desert die nächste markierte Route und erreiche mit deinen freigeschalteten Fortbewegungsmöglichkeiten **einen sichtbaren Orientierungspunkt**. Kehre ohne Schnellreise zu einer Straße oder Siedlung zurück.",
        gameObjective:
          "Verlasse in **{{game}}** die nächste markierte Route und erreiche mit deinen freigeschalteten Fortbewegungsmöglichkeiten **einen sichtbaren Orientierungspunkt**. Kehre ohne Schnellreise zu einer Straße oder Siedlung zurück.",
      },
    },
  },
  {
    id: "beyond-the-map",
    customGameCompatibility: { capabilityIds: ["open-world"] },
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 20,
    genres: ["Open World", "Adventure"],
    translations: {
      en: {
        name: "Beyond the Map",
        objective:
          "Open an open-world game with an **unvisited marker** on the map. Travel there **without fast travel**, look around, and stop after the location name appears.",
        gameObjective:
          "In **{{game}}**, choose an unvisited marker on the map. Travel there **without fast travel**, look around, and stop after the location name appears.",
      },
      de: {
        name: "Hinter der Karte",
        objective:
          "Öffne ein Open-World-Spiel mit einem **unbesuchten Marker** auf der Karte. Reise **ohne Schnellreise** dorthin, sieh dich um und höre auf, sobald der Ortsname erscheint.",
        gameObjective:
          "W\u00E4hle in **{{game}}** einen unbesuchten Marker auf der Karte. Reise **ohne Schnellreise** dorthin, sieh dich um und h\u00F6re auf, sobald der Ortsname erscheint.",
      },
    },
  },
  {
    id: "a-side-street",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 15,
    genres: ["Urban", "Open World"],
    translations: {
      en: {
        name: "A Side Street",
        objective:
          "Choose a game with a city you can roam. Leave the main route, follow **three side streets**, and enter or inspect **one place** you have never noticed before.",
      },
      de: {
        name: "Eine Nebenstraße",
        objective:
          "Nimm ein Spiel mit einer frei begehbaren Stadt. Verlasse die Hauptroute, folge **drei Nebenstraßen** und betrete oder untersuche **einen Ort**, den du bisher übersehen hast.",
      },
    },
  },
  {
    id: "deep-dive",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 20,
    genres: ["Underwater", "Adventure"],
    translations: {
      en: {
        name: "Deep Dive",
        objective:
          "Open a game with underwater exploration and dive below your usual route. Discover **one named place** or scan **five different creatures** before returning to the surface.",
      },
      de: {
        name: "Tauchgang",
        objective:
          "Öffne ein Spiel mit Unterwasser-Erkundung und tauche tiefer als auf deiner üblichen Route. Entdecke **einen benannten Ort** oder scanne **fünf verschiedene Lebewesen**, bevor du auftauchst.",
      },
    },
  },
  {
    id: "new-planet",
    minimumDurationMinutes: 8,
    suggestedDurationMinutes: 25,
    genres: ["Sci-Fi", "Space"],
    translations: {
      en: {
        name: "New Planet",
        objective:
          "Choose a space game with planets you can visit. Land on the **nearest unexplored world**, scan or collect **three things**, and leave only after you can name what makes the place different.",
      },
      de: {
        name: "Neuer Planet",
        objective:
          "Nimm ein Weltraumspiel mit besuchbaren Planeten. Lande auf der **nächsten unerforschten Welt**, scanne oder sammle **drei Dinge** und fliege erst weiter, wenn du ihren Unterschied benennen kannst.",
      },
    },
  },
  {
    id: "hidden-room",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 20,
    genres: ["Puzzle", "Adventure"],
    translations: {
      en: {
        name: "Hidden Room",
        objective:
          "Open an adventure or puzzle game with optional spaces. Search one familiar area for a **hidden door, room, or path** and follow it until you find **one reward or story detail**.",
      },
      de: {
        name: "Versteckter Raum",
        objective:
          "Öffne ein Adventure oder Rätselspiel mit optionalen Bereichen. Suche in einem vertrauten Gebiet nach **einer versteckten Tür, einem Raum oder Weg** und folge ihm bis zu **einer Belohnung oder Geschichte**.",
      },
    },
  },
  {
    id: "photo-safari",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 15,
    genres: ["Photography", "Open World"],
    translations: {
      en: {
        name: "Photo Safari",
        objective:
          "Pick a game with a camera or photo mode and visit a place with movement. Capture **five different subjects** without photographing the same creature, character, or landmark twice.",
      },
      de: {
        name: "Fotosafari",
        objective:
          "Nimm ein Spiel mit Kamera oder Fotomodus und besuche einen belebten Ort. Fotografiere **fünf verschiedene Motive**, ohne dasselbe Wesen, dieselbe Figur oder dasselbe Wahrzeichen zweimal aufzunehmen.",
      },
    },
  },
  {
    id: "unmapped-door",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 20,
    genres: ["Metroidvania", "Adventure"],
    translations: {
      en: {
        name: "Unmapped Door",
        objective:
          "Continue a **game whose map shows unexplored room exits**. Go to the nearest open edge on the map, pass through it, and stop when **the new room appears on the map**.",
      },
      de: {
        name: "Unkartierte Tür",
        objective:
          "Setze ein **Spiel fort, dessen Karte unerforschte Raumausgänge zeigt**. Geh zum nächsten offenen Kartenrand, nimm den Ausgang und hör auf, sobald **der neue Raum auf der Karte erscheint**.",
      },
    },
  },
  {
    id: "wildlife-trail",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 20,
    genres: ["Hunting", "Open World"],
    translations: {
      en: {
        name: "Wildlife Trail",
        objective:
          "Open a **game with visible wildlife tracks and species identification**. Follow the first fresh trail you find without attacking and stop when **the animal's species is confirmed**.",
      },
      de: {
        name: "Tierspur",
        objective:
          "Starte ein **Spiel mit sichtbaren Tierspuren und Artenbestimmung**. Folge der ersten frischen Spur, ohne anzugreifen, und hör auf, sobald **die Tierart bestätigt ist**.",
      },
    },
  },
  {
    id: "first-island",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 20,
    genres: ["Sailing", "Open World"],
    translations: {
      en: {
        name: "First Island",
        objective:
          "Choose a **sailing game with unvisited islands marked on its map**. Sail to the nearest one without fast travel, step ashore, and stop when **the island name appears**.",
      },
      de: {
        name: "Erste Insel",
        objective:
          "Nimm ein **Spiel mit Segeln und unbesuchten Inseln auf der Karte**. Segle ohne Schnellreise zur nächsten, geh an Land und hör auf, sobald **der Inselname erscheint**.",
      },
    },
  },
  {
    id: "first-dungeon-floor",
    minimumDurationMinutes: 8,
    suggestedDurationMinutes: 25,
    genres: ["Dungeon Crawler", "RPG"],
    translations: {
      en: {
        name: "First Dungeon Floor",
        objective:
          "Open a **dungeon game with separate floors and an unvisited entrance**. Enter the nearest untouched dungeon, clear its first floor, and **step through the exit to floor two**.",
      },
      de: {
        name: "Erste Dungeon-Etage",
        objective:
          "Starte einen **Dungeon-Crawler mit einzelnen Etagen und einem unbesuchten Eingang**. Betritt den nächsten neuen Dungeon, räume die erste Etage und **geh durch den Ausgang zur zweiten**.",
      },
    },
  },
  {
    id: "rooftop-route",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 15,
    genres: ["Parkour", "Open World"],
    translations: {
      en: {
        name: "Rooftop Route",
        objective:
          "Open an **urban game with freely climbable buildings**. Start at street level, reach a roof by an unfamiliar route, cross **three different rooftops**, and finish on the third.",
      },
      de: {
        name: "Über die Dächer",
        objective:
          "Starte ein **Spiel mit einer Stadt und frei begehbaren Dächern**. Beginne auf Straßenniveau, nimm einen ungewohnten Weg nach oben, überquere **drei verschiedene Dächer** und bleib auf dem dritten stehen.",
      },
    },
  },
]);
