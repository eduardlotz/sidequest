import { defineGameQuests } from "../defineGameQuests";

export const gtaQuests = defineGameQuests("gta", [
  {
    id: "sa-road-signs",
    installments: ["gta-sa"],
    moods: ["explore", "nostalgic"],
    type: "objective",
    tags: ["driving", "no-fast-travel"],
    minutes: 25,
    minimum: 5,
    en: {
      name: "Read the Road Signs",
      objective:
        "In **GTA: San Andreas**, after the countryside unlocks, start at Grove Street with a car and turn the radar off. **Drive to the Blueberry town sign using road signs and landmarks**, staying on roads and keeping the same car.",
    },
    de: {
      name: "Den Schildern nach",
      objective:
        "Starte in **GTA: San Andreas** nach Freischaltung des Umlands mit einem Auto in der Grove Street und schalte das Radar aus. **Fahre anhand von Straßenschildern und Orientierungspunkten zum Ortsschild von Blueberry**. Bleib auf Straßen und nutze dasselbe Auto.",
    },
  },
  {
    id: "iv-bowling-pickup",
    installments: ["gta-iv"],
    moods: ["relax", "nostalgic"],
    type: "objective",
    tags: ["driving", "one-round"],
    minutes: 25,
    minimum: 5,
    en: {
      name: "Pick Them Up",
      objective:
        "In **GTA IV story mode**, call an available friend for bowling. Pick them up yourself, drive to the alley without gaining a wanted level, and **finish one full bowling game before driving them home**. Use no taxi skips.",
    },
    de: {
      name: "Bowling mit Abholung",
      objective:
        "Ruf im **Story-Modus von GTA IV** einen verfügbaren Freund zum Bowling an. Hol ihn selbst ab, fahr ohne Fahndungssterne zur Bahn und **spiel eine ganze Partie, bevor du ihn nach Hause bringst**. Überspring die Fahrt nicht mit einem Taxi.",
    },
  },
  {
    id: "v-taxi-shift",
    installments: ["gta-v"],
    moods: ["focused", "challenge"],
    type: "challenge",
    tags: ["driving", "current-save"],
    minutes: 25,
    minimum: 5,
    en: {
      name: "Three Fares",
      objective:
        "In **GTA V story mode**, start taxi work in a taxi. **Deliver three fares in the same car without disabling it or gaining a wanted level**. Stop fully at each destination before the passenger exits. End the shift after success or when the taxi can no longer continue.",
    },
    de: {
      name: "Drei Fahrgäste",
      objective:
        "Steig im **Story-Modus von GTA V** in ein Taxi und nimm Fahraufträge an. **Bring drei Fahrgäste im selben Wagen ans Ziel, ohne Fahndungssterne zu bekommen oder das Taxi fahruntüchtig zu machen**. Halt an jedem Ziel vollständig an. Danach ist deine Schicht vorbei.",
    },
  },
  {
    id: "v-return-to-story",
    installments: ["gta-v"],
    moods: ["progress", "overwhelmed", "nostalgic"],
    type: "inspiration",
    tags: ["current-save", "story"],
    minutes: 30,
    minimum: 5,
    en: {
      name: "Back to Los Santos",
      objective:
        "Return to an unfinished **GTA V story save where character switching is unlocked**. Check in with each available protagonist, then **follow one story lead that interests you**.",
    },
    de: {
      name: "Zurück in Los Santos",
      objective:
        "Lade einen noch nicht beendeten **GTA-V-Story-Spielstand mit freigeschaltetem Figurenwechsel**. Schau bei allen verfügbaren Hauptfiguren vorbei und **spiel dann die Story-Mission weiter, auf die du am meisten Lust hast**.",
    },
  },
]);
