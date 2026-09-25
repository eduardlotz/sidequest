import { defineGameQuests } from "../defineGameQuests";

export const battlefieldQuests = defineGameQuests("battlefield", [
  {
    id: "bf1-smoke-rescue",
    installments: ["bf-1"],
    moods: ["connect", "focused"],
    type: "objective",
    tags: ["support", "full-match"],
    minutes: 30,
    minimum: 5,
    en: {
      name: "Safe Revives",
      objective:
        "In **Battlefield 1 multiplayer**, play Medic with smoke and a syringe. For three squadmates, **block the enemy's view with smoke, revive them in cover, and give them healing before moving on**. Finish the round with your squad.",
    },
    de: {
      name: "Sicher wiederbeleben",
      objective:
        "Spiel in **Battlefield 1 im Mehrspielermodus** Sanitäter mit Rauch und Spritze. Wirf bei drei gefallenen Squadmitgliedern jeweils Rauch, um Gegnern die Sicht zu nehmen. **Belebe sie in Deckung wieder und heile sie**, bevor du weiterziehst. Spiel danach die Runde mit deinem Squad zu Ende.",
    },
  },
  {
    id: "bf4-tank-pit-stop",
    installments: ["bf-4"],
    moods: ["connect", "progress"],
    type: "objective",
    tags: ["support", "full-match"],
    minutes: 30,
    minimum: 5,
    en: {
      name: "One Tank Repair",
      objective:
        "In **Battlefield 4 multiplayer**, play Engineer with a repair tool and ride in a friendly tank. After it takes damage, ask the driver to stop near cover. **Get out, earn repair points, and rejoin the tank**, then finish the round.",
    },
    de: {
      name: "Eine Panzerreparatur",
      objective:
        "Spiele in **Battlefield 4 im Mehrspielermodus** Pionier mit Reparaturwerkzeug und fahre in einem verbündeten Panzer mit. Bitte den Fahrer nach einem Treffer, in Deckung anzuhalten. **Steig aus, repariere den Panzer und steig wieder ein**. Spiel die Runde zu Ende.",
    },
  },
  {
    id: "bf2042-drone-first-look",
    installments: ["bf-2042"],
    moods: ["curious", "connect"],
    type: "objective",
    tags: ["scouting", "support"],
    minutes: 30,
    minimum: 5,
    en: {
      name: "Drone First",
      objective:
        "In **Battlefield 2042 Conquest**, play Casper near your squad. Fly the recon drone over a contested objective and **spot five enemies across the round**. Recall the drone, join a push, and stay until the round ends.",
    },
    de: {
      name: "Erst die Drohne",
      objective:
        "Spiel in **Battlefield 2042 Eroberung** Casper und bleib nah bei deinem Squad. Flieg mit der Drohne über ein umkämpftes Ziel und **markiere im Lauf der Runde fünf Gegner**. Hol die Drohne zurück, greif mit an und bleib bis zum Ende dabei.",
    },
  },
  {
    id: "bf6-supply-the-push",
    installments: ["bf-6"],
    moods: ["connect", "focused"],
    type: "objective",
    tags: ["support", "full-match"],
    minutes: 30,
    minimum: 5,
    en: {
      name: "Supply the Push",
      objective:
        "In **Battlefield 6 multiplayer**, play Support and move with your squad between objectives. Place your Supply Bag behind usable cover and **resupply five squadmates across two contested objectives**, then finish the round.",
    },
    de: {
      name: "Vormarsch versorgen",
      objective:
        "Spiel in **Battlefield 6 im Mehrspielermodus** Support und zieh mit deinem Squad von Ziel zu Ziel. Leg deine Versorgungstasche hinter Deckung und **versorge an zwei umkämpften Zielen insgesamt fünf Squadmitglieder**. Spiel die Runde zu Ende.",
    },
  },
  {
    id: "bf6-engineer-escort",
    installments: ["bf-6"],
    moods: ["connect", "focused"],
    type: "objective",
    tags: ["support", "full-match"],
    minutes: 30,
    minimum: 5,
    en: {
      name: "Engineer Escort",
      objective:
        "In **Battlefield 6 multiplayer**, play Engineer and ride with one friendly vehicle. At two different objectives, leave the vehicle in cover and **earn repair score before getting back in**, then finish the round as Engineer.",
    },
    de: {
      name: "Pionier-Begleitung",
      objective:
        "Spiele in **Battlefield 6 im Mehrspielermodus** Pionier und fahre in einem verbündeten Fahrzeug mit. Steig an zwei verschiedenen Zielen in Deckung aus und **repariere das Fahrzeug, bevor du wieder einsteigst**. Spiel die Runde als Pionier zu Ende.",
    },
  },
  {
    id: "bf6-motion-before-entry",
    installments: ["bf-6"],
    moods: ["curious", "connect"],
    type: "objective",
    tags: ["scouting", "support"],
    minutes: 30,
    minimum: 5,
    en: {
      name: "Sensor on the Point",
      objective:
        "In **Battlefield 6 multiplayer**, play Recon near your squad. Place a Motion Sensor at a contested objective and **earn a sensor spot on an enemy**. Help your squad at that point and finish the round.",
    },
    de: {
      name: "Sensor am Ziel",
      objective:
        "Spiele in **Battlefield 6 im Mehrspielermodus** Aufklärung und bleib in der Nähe deines Squads. Platziere einen Bewegungssensor an einem umkämpften Ziel und **lass ihn einen Gegner markieren**. Unterstütze dein Squad dort und spiel die Runde zu Ende.",
    },
  },
  {
    id: "bf6-inject-the-entry",
    installments: ["bf-6"],
    moods: ["curious", "focused"],
    type: "experiment",
    tags: ["abilities", "new-approach"],
    minutes: 25,
    minimum: 5,
    en: {
      name: "Inject the Entry",
      objective:
        "In **Battlefield 6 multiplayer**, play Assault and use the Adrenaline Injector just before entering two contested objectives. Push through a different entrance each time and **compare which approach let you stay with the objective longer**, then finish the round.",
    },
    de: {
      name: "Injektion vorm Angriff",
      objective:
        "Spiel in **Battlefield 6 im Mehrspielermodus** Sturmsoldat. Nutz den Adrenalin-Injektor, bevor du zwei umkämpfte Ziele betrittst, und nimm jedes Mal einen anderen Eingang. **Vergleich, über welchen Weg du länger am Ziel bleiben kannst**, und spiel die Runde zu Ende.",
    },
  },
  {
    id: "bfv-role-swap",
    installments: ["bf-v"],
    moods: ["curious", "focused"],
    type: "experiment",
    tags: ["new-approach", "full-match"],
    minutes: 30,
    minimum: 5,
    en: {
      name: "Change Your Role",
      objective:
        "In **Battlefield V multiplayer**, choose a class you rarely play and keep it for a full round. **Use its primary team tool at two objectives**, then compare the round with your usual role.",
    },
    de: {
      name: "Andere Rolle",
      objective:
        "Wähle in **Battlefield V im Mehrspielermodus** eine Klasse, die du selten spielst, und behalte sie eine ganze Runde. **Nutze ihr wichtigstes Teamwerkzeug an zwei Zielen** und vergleiche die Runde mit deiner üblichen Rolle.",
    },
  },
]);
