import { defineGameQuests } from "../defineGameQuests";

export const redDeadQuests = defineGameQuests("red-dead-redemption", [
  {
    id: "rdr2-camp-coffee",
    moods: ["relax", "low-energy"],
    type: "inspiration",
    tags: ["free-roam"],
    minutes: 15,
    minimum: 1,
    en: {
      name: "Camp Coffee",
      objective:
        "Set up camp in **Red Dead Redemption 2 story mode** and brew some coffee. **Sit by the fire for a while**, then ride on whenever you feel ready.",
    },
    de: {
      name: "Kaffee am Lager",
      objective:
        "Schlage in **Red Dead Redemption 2 im Storymodus** ein Lager auf und koche Kaffee. **Sitz eine Weile am Feuer** und reite weiter, wenn dir danach ist.",
    },
    installments: ["rdr-2"],
  },
  {
    id: "bring-them-in",
    moods: ["challenge", "focused"],
    type: "challenge",
    tags: ["no-kills"],
    minutes: 25,
    minimum: 2,
    en: {
      name: "Bring Them In",
      objective:
        "Take a bounty in **Red Dead Redemption story mode**. **Lasso the target and bring them in alive without Dead Eye**. Do not shoot the target.",
    },
    de: {
      name: "Lebend abliefern",
      objective:
        "Nimm in **Red Dead Redemption im Storymodus** einen Steckbrief an. **Fange das Ziel mit dem Lasso und liefere es ohne Dead Eye lebend ab**. Schieße nicht auf das Ziel.",
    },
    installments: ["rdr-1"],
  },
  {
    id: "liars-table",
    moods: ["curious", "nostalgic"],
    type: "objective",
    tags: ["one-round"],
    minutes: 15,
    minimum: 2,
    en: {
      name: "Liar’s Dice",
      objective:
        "Sit down for **Liar’s Dice in Red Dead Redemption story mode**. Use your own dice to judge the bids and **finish one full game without reloading**.",
    },
    de: {
      name: "Würfelpoker",
      objective:
        "Setz dich in **Red Dead Redemption im Storymodus** an einen Würfelpokertisch. Nutze deine Würfel als Hinweis und **spiele eine komplette Partie ohne neu zu laden**.",
    },
    installments: ["rdr-1"],
  },
  {
    id: "wild-horse-home",
    moods: ["explore", "progress"],
    type: "objective",
    tags: ["exploration"],
    minutes: 20,
    minimum: 2,
    en: {
      name: "Wild Horse",
      objective:
        "Find a **wild horse in Red Dead Redemption story mode**. **Lasso it, break it, and ride it into town**. Finish at a hitching post.",
    },
    de: {
      name: "Wildpferd",
      objective:
        "Finde in **Red Dead Redemption im Storymodus** ein Wildpferd. **Fange es mit dem Lasso, reite es zu und bring es in die Stadt**. Beende die Quest an einem Anbindepfosten.",
    },
    installments: ["rdr-1"],
  },
  {
    id: "pearsons-delivery",
    moods: ["progress", "focused"],
    type: "objective",
    tags: ["hunting"],
    minutes: 25,
    minimum: 2,
    en: {
      name: "Perfect Rabbit",
      objective:
        "Hunt a **three-star rabbit in Red Dead Redemption 2 story mode** with the Varmint Rifle. Keep the carcass intact and **donate it to Pearson in perfect condition**.",
    },
    de: {
      name: "Perfektes Kaninchen",
      objective:
        "Jage in **Red Dead Redemption 2 im Storymodus** mit dem Varmint-Gewehr ein Drei-Sterne-Kaninchen. Lass den Kadaver ganz und **spende ihn Pearson in perfektem Zustand**.",
    },
    installments: ["rdr-2"],
  },
  {
    id: "field-naturalist",
    moods: ["curious", "explore"],
    type: "objective",
    tags: ["exploration", "photography"],
    minutes: 20,
    minimum: 2,
    en: {
      name: "Field Naturalist",
      objective:
        "Find an **animal you have not studied yet in Red Dead Redemption 2 story mode**. **Study it with binoculars and take a photo**. Leave it alive.",
    },
    de: {
      name: "Naturforscher",
      objective:
        "Finde in **Red Dead Redemption 2 im Storymodus** ein Tier, das du noch nicht untersucht hast. **Untersuche es mit dem Fernglas und mach ein Foto**. Lass es am Leben.",
    },
    installments: ["rdr-2"],
  },
  {
    id: "catch-and-release",
    moods: ["relax", "low-energy"],
    type: "objective",
    tags: ["fishing"],
    minutes: 15,
    minimum: 2,
    en: {
      name: "Catch and Release",
      objective:
        "Go fishing at a **river in Red Dead Redemption 2 story mode**. **Catch and release three fish** of any kind.",
    },
    de: {
      name: "Fangen und Freilassen",
      objective:
        "Geh in **Red Dead Redemption 2 im Storymodus** an einem Fluss angeln. **Fange drei beliebige Fische und setze sie wieder frei**.",
    },
    installments: ["rdr-2"],
  },
]);
