import { defineGameQuests } from "../defineGameQuests";

export const assassinsCreedQuests = defineGameQuests("assassins-creed", [
  {
    id: "black-flag-deck-to-deck",
    installments: ["ac-black-flag"],
    moods: ["restless", "challenge"],
    type: "challenge",
    tags: ["loadout", "three-attempts"],
    minutes: 25,
    minimum: 5,
    en: {
      name: "Deck to Deck",
      objective:
        "In **Assassin's Creed IV: Black Flag**, with the Jackdaw unlocked, disable an enemy schooner. Swing aboard on a rope and **finish its boarding goals using swords and the Hidden Blade only**. Stop after success or three boarding attempts.",
    },
    de: {
      name: "Von Deck zu Deck",
      objective:
        "Setz in **Assassin's Creed IV: Black Flag** mit der freigeschalteten Jackdaw einen feindlichen Schoner außer Gefecht. Schwing dich an Bord und **schaff alle Enterziele nur mit Schwertern und versteckter Klinge**. Hör nach dem Erfolg oder drei Enterversuchen auf.",
    },
  },
  {
    id: "unity-synced-entry",
    installments: ["ac-unity"],
    moods: ["connect", "focused"],
    type: "objective",
    tags: ["co-op", "stealth"],
    minutes: 30,
    minimum: 5,
    en: {
      name: "Synced Entry",
      objective:
        "In an **Assassin's Creed Unity co-op mission**, agree on two guards with a partner. **Perform one simultaneous takedown, then reach the next mission objective together without either player being desynchronized**.",
    },
    de: {
      name: "Gemeinsamer Einstieg",
      objective:
        "Einigt euch in einer **Koop-Mission von Assassin's Creed Unity** auf zwei Wachen. **Führt gleichzeitig je ein Attentat aus und erreicht danach gemeinsam das nächste Missionsziel, ohne dass jemand desynchronisiert wird**.",
    },
  },
  {
    id: "mirage-light-pockets",
    installments: ["ac-mirage"],
    moods: ["focused", "restless"],
    type: "challenge",
    tags: ["stealth", "three-attempts"],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Light Pockets",
      objective:
        "In **Assassin's Creed Mirage**, pickpocket three marked purses in one crowded district and **leave all three thefts unnoticed**, using crowds between targets. Being caught restarts the count. Stop after success or three attempts.",
    },
    de: {
      name: "Leichte Taschen",
      objective:
        "Stiehl in **Assassin's Creed Mirage** drei markierte Geldbeutel in einem belebten Viertel und **verschwinde, ohne bei einem der drei Diebstähle aufzufliegen**. Bewege dich dazwischen in der Menge. Nach Erfolg oder drei Versuchen ist Schluss.",
    },
  },
  {
    id: "valhalla-orlog-favor",
    installments: ["ac-valhalla"],
    moods: ["curious", "focused"],
    type: "experiment",
    tags: ["new-approach"],
    minutes: 20,
    minimum: 3,
    en: {
      name: "A Different Favor",
      objective:
        "In **Assassin's Creed Valhalla**, start an Orlog game with three unlocked God Favors. Choose one you rarely use and activate it at least once. **Finish the game and notice which token dice became more valuable**.",
    },
    de: {
      name: "Andere Gunst",
      objective:
        "Spiel in **Assassin's Creed Valhalla** eine Partie Orlog mit drei freigeschalteten Göttergunsten. Nimm eine Gunst, die du selten nutzt, und aktiviere sie mindestens einmal. **Spiel die Partie zu Ende und achte darauf, welche Würfel dadurch nützlicher werden**.",
    },
  },
]);
