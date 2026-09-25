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
      "full-match"
    ],
    "minutes": 30,
    "minimum": 2,
    "en": {
      "name": "First Gun Stays",
      "objective": "In **Fortnite Solo Zero Build**, keep your first firearm as your only damage-dealing item. **Play through the match result without replacing it**, even with a better version. Healing, shields, and mobility are allowed. Use the pickaxe only for harvesting."
    },
    "de": {
      "name": "Die erste bleibt",
      "objective": "Behalte in **Fortnite Solo Zero Build** deine erste Schusswaffe als einzige Waffe, mit der du Schaden machst. **Spiel das Match zu Ende, ohne sie auszutauschen**, auch nicht gegen eine bessere Version. Heilung, Schilde und Fortbewegung sind erlaubt; die Spitzhacke nutzt du nur zum Abbauen."
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
    "minutes": 30,
    "minimum": 2,
    "en": {
      "name": "Let It Recharge",
      "objective": "In **Fortnite Solo Zero Build**, after an opponent damages your Overshield, break line of sight. **Let it recharge fully before firing again, then finish the match**. Notice whether waiting changed your next fight. Elimination ends the attempt."
    },
    "de": {
      "name": "Erst wieder aufladen",
      "objective": "Brich in **Fortnite Solo Zero Build** den Sichtkontakt ab, nachdem ein Gegner deinen Extraschild beschädigt hat. **Lass ihn vollständig aufladen, bevor du wieder schießt, und beende das Match**. Achte darauf, ob das Warten den nächsten Kampf verändert hat. Wirst du eliminiert, endet der Versuch."
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
      "full-match"
    ],
    "minutes": 30,
    "minimum": 2,
    "en": {
      "name": "Timber Cover",
      "objective": "In **Fortnite Solo Battle Royale with building enabled**, gather wood before fighting. After taking fire, **build a wall and ramp, land a shot from that cover, and finish the match**. Build only with wood during this attempt."
    },
    "de": {
      "name": "Deckung aus Holz",
      "objective": "Sammle in **Fortnite Solo Battle Royale mit Bauen** vor dem Kampf Holz. **Bau nach dem ersten Beschuss eine Wand und eine Rampe, treff aus dieser Deckung einen Gegner und spiel das Match zu Ende**. Für diesen Versuch baust du nur mit Holz."
    }
  }
]);
