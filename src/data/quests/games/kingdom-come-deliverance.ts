import { defineGameQuests } from "../defineGameQuests";

export const kingdomComeQuests = defineGameQuests("kingdom-come-deliverance", [
  {
    "id": "an-honest-night",
    "moods": [
      "progress",
      "focused"
    ],
    "type": "objective",
    "tags": [
      "cooking",
      "trading"
    ],
    "minutes": 25,
    "minimum": 2,
    "en": {
      "name": "An Honest Night",
      "objective": "In **Kingdom Come: Deliverance (1)**, with the Marigold Decoction recipe known, gather nettles and marigolds and brew by hand. Sell your potions and **pay for an available inn room from those earnings**. No bought herbs or stolen goods."
    },
    "de": {
      "name": "Ehrlich verdient",
      "objective": "Sammle in **Kingdom Come: Deliverance (1)** mit bekanntem Ringelblumen-Rezept Brennnesseln und Ringelblumen und braue von Hand. Verkaufe die Tränke und **bezahle von den Einnahmen ein verfügbares Bett im Gasthaus**. Keine gekauften Kräuter oder gestohlenen Waren."
    },
    "installments": [
      "kcd-1"
    ]
  },
  {
    "id": "treasure-by-landmarks",
    "moods": [
      "explore",
      "curious"
    ],
    "type": "objective",
    "tags": [
      "exploration"
    ],
    "minutes": 25,
    "minimum": 2,
    "en": {
      "name": "Read the Landscape",
      "objective": "In **Kingdom Come: Deliverance (1)**, bring a spade, lockpicks, and an unsolved treasure map for an accessible region. Use its roads, rivers, and buildings to **find and open that treasure chest**."
    },
    "de": {
      "name": "Die Landschaft lesen",
      "objective": "Nimm in **Kingdom Come: Deliverance (1)** einen Spaten, Dietriche und eine ungelöste Schatzkarte für eine erreichbare Gegend mit. Orientiere dich an ihren Straßen, Flüssen und Gebäuden, um **die Schatztruhe zu finden und zu öffnen**."
    },
    "installments": [
      "kcd-1"
    ]
  },
  {
    "id": "forge-and-equip",
    "moods": [
      "create",
      "progress"
    ],
    "type": "creation",
    "tags": [
      "crafting"
    ],
    "minutes": 25,
    "minimum": 2,
    "en": {
      "name": "Made by Henry",
      "objective": "After learning smithing in **Kingdom Come: Deliverance II**, bring the materials for a sword sketch you own. Heat and hammer the blade yourself, then **finish and equip your own sword**."
    },
    "de": {
      "name": "Von Heinrich gemacht",
      "objective": "Bring in **Kingdom Come: Deliverance II** nach dem Schmiedelernen die Materialien für eine vorhandene Schwertskizze mit. Erhitze und hämmere die Klinge selbst und **stelle dein eigenes Schwert fertig und rüste es aus**."
    },
    "installments": [
      "kcd-2"
    ]
  },
  {
    "id": "kcd2-ordinary-dice",
    "moods": [
      "relax",
      "nostalgic"
    ],
    "type": "inspiration",
    "tags": [
      "no-timer"
    ],
    "minutes": 15,
    "minimum": 1,
    "en": {
      "name": "Leave the Lucky Dice",
      "objective": "Sit down for tavern dice in **Kingdom Come: Deliverance II**. Use ordinary dice and a small stake you can spare; enjoy the table without a winnings target or a special build."
    },
    "de": {
      "name": "Ohne Glückswürfel",
      "objective": "Setze dich in **Kingdom Come: Deliverance II** zum Würfeln ins Wirtshaus. Nimm gewöhnliche Würfel und einen kleinen Einsatz, den du übrig hast. Spiele ohne Gewinnziel oder besonderes Setup."
    },
    "installments": [
      "kcd-2"
    ]
  },
  {
    "id": "bernhard-counter",
    "moods": [
      "challenge",
      "focused"
    ],
    "type": "challenge",
    "tags": [
      "parry"
    ],
    "minutes": 20,
    "minimum": 2,
    "en": {
      "name": "Wait for the Swing",
      "objective": "Once Bernard offers practice and you know perfect blocks in **Kingdom Come: Deliverance (1)**, start a practice sword fight. Attack only immediately after a perfect block and **land three counterattacks before ending practice**."
    },
    "de": {
      "name": "Warte auf den Schlag",
      "objective": "Beginne in **Kingdom Come: Deliverance (1)** einen Übungskampf mit Bernard, sobald du perfekte Blocks kennst. Greife nur direkt nach einem perfekten Block an und **lande drei Gegenangriffe, bevor du das Training beendest**."
    },
    "installments": [
      "kcd-1"
    ]
  },
  {
    "id": "fresh-and-dried",
    "moods": [
      "curious",
      "create"
    ],
    "type": "experiment",
    "tags": [
      "crafting",
      "new-approach"
    ],
    "minutes": 25,
    "minimum": 2,
    "en": {
      "name": "Fresh or Dried",
      "objective": "In **Kingdom Come: Deliverance II**, with an alchemy bench and drying rack accessible, gather herbs for two Marigold Decoctions. Dry one batch. **Brew both with the same steps and compare their quality** in your inventory."
    },
    "de": {
      "name": "Frisch oder getrocknet",
      "objective": "Sammle in **Kingdom Come: Deliverance II** mit Zugang zu Alchemietisch und Trockengestell Kräuter für zwei Ringelblumentränke. Trockne eine Portion. **Braue beide mit denselben Schritten und vergleiche ihre Qualität** im Inventar."
    },
    "installments": [
      "kcd-2"
    ]
  }
]);
