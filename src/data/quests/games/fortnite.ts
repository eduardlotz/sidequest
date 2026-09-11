import { defineGameQuests } from "../defineGameQuests";

export const fortniteQuests = defineGameQuests("fortnite", [
  {
    "id": "first-gun-stays",
    "moods": [
      "challenge",
      "focused"
    ],
    "type": "challenge",
    "tags": [
      "one-weapon",
      "one-round"
    ],
    "minutes": 25,
    "minimum": 2,
    "en": {
      "name": "First Gun Stays",
      "objective": "In **Fortnite Solo Zero Build**, keep your first firearm as your only damage-dealing item. **Play through the match result without replacing it**, even with a better version. Healing, shields, and mobility are allowed; use the pickaxe only for harvesting."
    },
    "de": {
      "name": "Die erste bleibt",
      "objective": "Behalte in **Fortnite Solo Zero Build** deine erste Schusswaffe als einziges Item zum Schadenverursachen. **Spiele bis zum Match-Ergebnis, ohne sie auszutauschen**, auch nicht gegen eine bessere Version. Heilung, Schilde und Fortbewegung sind erlaubt; die Spitzhacke ist nur zum Abbauen da."
    }
  },
  {
    "id": "overshield-reset",
    "moods": [
      "curious",
      "focused"
    ],
    "type": "experiment",
    "tags": [
      "new-approach"
    ],
    "minutes": 25,
    "minimum": 2,
    "en": {
      "name": "Let It Recharge",
      "objective": "In **Fortnite Solo Zero Build**, after an opponent damages your Overshield, break line of sight. **Let it recharge fully before firing again, then finish the match**. If eliminated first, the match ends the attempt."
    },
    "de": {
      "name": "Erst wieder aufladen",
      "objective": "Brich in **Fortnite Solo Zero Build** den Sichtkontakt ab, nachdem ein Gegner deinen Extraschild beschädigt hat. **Lass ihn vollständig aufladen, bevor du wieder schießt, und beende das Match**. Wirst du vorher eliminiert, endet der Versuch mit dem Match."
    }
  },
  {
    "id": "timber-cover",
    "moods": [
      "focused",
      "restless"
    ],
    "type": "challenge",
    "tags": [
      "building",
      "one-round"
    ],
    "minutes": 25,
    "minimum": 2,
    "en": {
      "name": "Timber Cover",
      "objective": "In **Fortnite Solo Battle Royale with building enabled**, gather wood before fighting. After taking fire, **build a wall and ramp, land a shot from that cover, and finish the match**. Build only with wood during this attempt."
    },
    "de": {
      "name": "Deckung aus Holz",
      "objective": "Sammle in **Fortnite Solo Battle Royale mit Bauen** vor dem Kampf Holz. **Baue nach dem ersten Beschuss eine Wand und Rampe, lande aus dieser Deckung einen Treffer und beende das Match**. Baue in diesem Versuch nur mit Holz."
    }
  }
]);
