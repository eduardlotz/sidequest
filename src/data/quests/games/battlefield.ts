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
        "Spiele in **Battlefield 1 im Mehrspielermodus** Sanitäter mit Rauch und Spritze. **Versperre bei drei Squadmitgliedern die Sicht des Gegners mit Rauch, belebe sie in Deckung wieder und heile sie**, bevor du weiterziehst. Beende die Runde mit deinem Squad.",
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
      name: "Tank Pit Stop",
      objective:
        "In **Battlefield 4 multiplayer**, play Engineer with a repair tool and ride as a friendly tank's passenger. **Earn repair points during three separate stops in cover**, rejoining the tank after each one, then finish the round.",
    },
    de: {
      name: "Boxenstopp für Panzer",
      objective:
        "Spiele in **Battlefield 4 im Mehrspielermodus** Pionier mit Reparaturwerkzeug und fahre in einem verbündeten Panzer mit. **Bekomme bei drei einzelnen Stopps in Deckung Reparaturpunkte**, steige danach jeweils wieder ein und beende die Runde.",
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
      name: "First Look",
      objective:
        "In **Battlefield 2042 Conquest**, play Casper near your squad. Fly the recon drone over the next enemy objective and **spot five defenders before your squad pushes in**, then recall the drone, join the push, and finish the round.",
    },
    de: {
      name: "Der erste Blick",
      objective:
        "Spiele in **Battlefield 2042 Eroberung** Casper nahe deinem Squad. Fliege mit der Aufklärungsdrohne über das nächste feindliche Ziel und **markiere fünf Verteidiger, bevor dein Squad angreift**. Hole die Drohne zurück, greife mit an und beende die Runde.",
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
        "In **Battlefield V multiplayer**, choose the class your squad currently lacks and keep it for a full round. **Use that class's primary team tool at three different objectives**, then compare the round with your usual role.",
    },
    de: {
      name: "Andere Rolle",
      objective:
        "Wähle in **Battlefield V im Mehrspielermodus** die Klasse, die deinem Squad gerade fehlt, und behalte sie eine ganze Runde. **Nutze das wichtigste Teamwerkzeug der Klasse an drei verschiedenen Zielen** und vergleiche die Runde danach mit deiner üblichen Rolle.",
    },
  },
]);
