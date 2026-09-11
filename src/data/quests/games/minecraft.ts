import { defineGameQuests } from "../defineGameQuests";

export const minecraftQuests = defineGameQuests("minecraft", [
  {
    "id": "working-fishing-pier",
    "moods": [
      "create",
      "relax"
    ],
    "type": "creation",
    "tags": [
      "building",
      "fishing"
    ],
    "minutes": 25,
    "minimum": 5,
    "en": {
      "name": "Open the Pier",
      "objective": "At a shore near home in **Minecraft**, build a small pier with a barrel and lighting. Leave open water in front of the casting spot, then **catch one fish from the pier and store it in the barrel**."
    },
    "de": {
      "name": "Der Steg ist offen",
      "objective": "Baue in **Minecraft** an einem Ufer nahe deinem Zuhause einen kleinen Steg mit Fass und Beleuchtung. Lass vor dem Angelplatz offenes Wasser und **fange vom Steg einen Fisch, den du ins Fass legst**."
    }
  },
  {
    "id": "village-payday",
    "moods": [
      "progress",
      "relax"
    ],
    "type": "objective",
    "tags": [
      "farming",
      "trading"
    ],
    "minutes": 20,
    "minimum": 3,
    "en": {
      "name": "Village Payday",
      "objective": "In **Minecraft Survival**, use an established wheat field and a farmer who buys wheat. **Harvest enough for one trade, replant the harvested spaces, and earn the emeralds**. Leave the village’s hay bales alone."
    },
    "de": {
      "name": "Zahltag im Dorf",
      "objective": "Nutze in **Minecraft im Überlebensmodus** ein bestehendes Weizenfeld und einen Bauern, der Weizen kauft. **Ernte genug für einen Handel, säe die abgeernteten Stellen neu ein und verdiene die Smaragde**. Lass die Heuballen im Dorf stehen."
    }
  },
  {
    "id": "furnace-shift",
    "moods": [
      "create",
      "focused"
    ],
    "type": "creation",
    "tags": [
      "automation",
      "cooking"
    ],
    "minutes": 25,
    "minimum": 5,
    "en": {
      "name": "Furnace Shift",
      "objective": "In **Minecraft**, connect an input chest, fuel chest, and output chest to a furnace with hoppers. Load eight raw food items and enough fuel. **Collect all eight cooked items from the output chest** without moving them through the furnace by hand."
    },
    "de": {
      "name": "Ofendienst",
      "objective": "Verbinde in **Minecraft** eine Truhe für Zutaten, eine für Brennstoff und eine für die Ausgabe über Trichter mit einem Ofen. Fülle acht rohe Lebensmittel und genug Brennstoff ein. **Hole alle acht fertigen Lebensmittel aus der Ausgabetruhe**, ohne sie von Hand durch den Ofen zu bewegen."
    }
  },
  {
    "id": "note-block-doorbell",
    "moods": [
      "create",
      "curious"
    ],
    "type": "experiment",
    "tags": [
      "automation"
    ],
    "minutes": 20,
    "minimum": 3,
    "en": {
      "name": "Someone's Home",
      "objective": "In **Minecraft**, wire a button to three differently tuned note blocks with repeaters. Adjust the repeater delays until **one press plays the three notes separately in order**. Try a second rhythm before keeping one."
    },
    "de": {
      "name": "Jemand zu Hause",
      "objective": "Verbinde in **Minecraft** einen Knopf über Verstärker mit drei unterschiedlich gestimmten Notenblöcken. Stelle die Verzögerungen so ein, dass **ein Druck die drei Töne einzeln nacheinander abspielt**. Probiere einen zweiten Rhythmus, bevor du einen behältst."
    }
  },
  {
    "id": "smoke-and-honey",
    "moods": [
      "relax",
      "curious"
    ],
    "type": "objective",
    "tags": [
      "farming"
    ],
    "minutes": 10,
    "minimum": 2,
    "en": {
      "name": "Smoke and Honey",
      "objective": "Bring a glass bottle and campfire to a full bee nest in **Minecraft**. Put the lit campfire underneath so its smoke reaches the nest, then **collect one honey bottle without angering the bees**. Extinguish the fire afterward."
    },
    "de": {
      "name": "Rauch und Honig",
      "objective": "Bring in **Minecraft** eine Glasflasche und ein Lagerfeuer zu einem vollen Bienennest. Stelle das brennende Lagerfeuer darunter, sodass der Rauch das Nest erreicht, und **fülle eine Honigflasche, ohne die Bienen wütend zu machen**. Lösche danach das Feuer."
    }
  },
  {
    "id": "second-chance-villager",
    "moods": [
      "progress",
      "focused"
    ],
    "type": "objective",
    "tags": [
      "no-kills"
    ],
    "minutes": 10,
    "minimum": 3,
    "en": {
      "name": "Second Chance",
      "objective": "In **Minecraft Survival**, with a zombie villager, golden apple, and splash potion of Weakness ready, shelter the villager from sunlight. Apply Weakness, feed it the apple, and **keep it safe through the cure**."
    },
    "de": {
      "name": "Zweite Chance",
      "objective": "Wenn in **Minecraft im Überlebensmodus** ein Zombiedorfbewohner, ein goldener Apfel und ein Wurftrank der Schwäche bereit sind, schütze den Dorfbewohner vor Sonnenlicht. Wirf den Trank, gib ihm den Apfel und **halte ihn bis zum Ende der Heilung sicher**."
    }
  },
  {
    "id": "map-home",
    "moods": [
      "explore",
      "curious"
    ],
    "type": "objective",
    "tags": [
      "exploration",
      "on-foot"
    ],
    "minutes": 30,
    "minimum": 5,
    "en": {
      "name": "Put Home on Paper",
      "objective": "Open a new, unexpanded map at your base in **Minecraft**. Explore its area on foot until **all blank patches are filled**, then display it in an item frame at home. Bring food and an empty map before starting."
    },
    "de": {
      "name": "Zuhause auf Papier",
      "objective": "Öffne in **Minecraft** an deiner Basis eine neue, nicht vergrößerte Karte. Erkunde ihr Gebiet zu Fuß, bis **alle leeren Stellen ausgefüllt sind**, und hänge sie zu Hause in einen Rahmen. Nimm vorher Essen und eine leere Karte mit."
    }
  }
]);
