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
      name: "Hol sie ab",
      objective:
        "Ruf im **Story-Modus von GTA IV** einen verfügbaren Freund zum Bowling an. Hole ihn selbst ab, fahre ohne Fahndungssterne zur Bahn und **beende ein ganzes Bowling-Spiel, bevor du ihn heimfährst**. Nutze keine übersprungenen Taxifahrten.",
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
        "Starte im **Story-Modus von GTA V** Taxiarbeit in einem Taxi. **Liefere drei Fahrgäste im selben Wagen ab, ohne ihn fahruntüchtig zu machen oder Fahndungssterne zu erhalten**. Halte an jedem Ziel vollständig an. Nach Erfolg oder bei einem fahruntüchtigen Taxi endet die Schicht.",
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
        "Return to a **GTA V story save you have not finished**. Switch through the available protagonists once, notice where each one was left, then choose the story lead that makes you want to keep playing.",
    },
    de: {
      name: "Zurück in Los Santos",
      objective:
        "Kehre zu einem **noch nicht beendeten Spielstand im Story-Modus von GTA V** zurück. Wechsle einmal durch die verfügbaren Hauptfiguren, schau dir ihre aktuellen Situationen an und folge dann der Story-Spur, auf die du Lust hast.",
    },
  },
]);
