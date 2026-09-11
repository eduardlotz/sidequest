import { defineGameQuests } from "../defineGameQuests";

export const skyrimQuests = defineGameQuests("skyrim", [
  {
    "id": "roadside-blessing",
    "moods": [
      "relax",
      "nostalgic"
    ],
    "type": "inspiration",
    "tags": [
      "on-foot",
      "no-fast-travel"
    ],
    "minutes": 20,
    "minimum": 1,
    "en": {
      "name": "Roadside Blessing",
      "objective": "Return to Riverwood in **Skyrim** and walk the road toward Whiterun. Gather flowers or stop at the farms as you go, leaving fast travel and dungeon clearing for another session."
    },
    "de": {
      "name": "Segen am Weg",
      "objective": "Kehre in **Skyrim** nach Flusswald zurück und gehe die Straße Richtung Weißlauf entlang. Sammle unterwegs Blumen oder halte an den Höfen. Schnellreise und Dungeons sind heute nicht nötig."
    }
  },
  {
    "id": "soul-to-steel",
    "moods": [
      "progress",
      "curious"
    ],
    "type": "objective",
    "tags": [
      "spells",
      "crafting"
    ],
    "minutes": 20,
    "minimum": 2,
    "en": {
      "name": "Soul to Steel",
      "objective": "In **Skyrim**, bring Soul Trap, an empty petty soul gem, an unenchanted weapon, and a known weapon enchantment. **Trap a mudcrab’s soul, enchant the weapon with that gem, and equip it**."
    },
    "de": {
      "name": "Seele im Stahl",
      "objective": "Nimm in **Skyrim** Seelenfalle, einen leeren winzigen Seelenstein, eine unverzauberte Waffe und eine bekannte Waffenverzauberung mit. **Fange die Seele einer Schlammkrabbe, verzaubere damit die Waffe und rüste sie aus**."
    }
  },
  {
    "id": "field-medicine",
    "moods": [
      "focused",
      "progress"
    ],
    "type": "objective",
    "tags": [
      "crafting"
    ],
    "minutes": 20,
    "minimum": 2,
    "en": {
      "name": "Field Medicine",
      "objective": "In **Skyrim**, gather three blue mountain flowers and three orange butterfly wings. At an alchemy lab, **brew three Restore Health potions from those ingredients**. Buy none of the ingredients."
    },
    "de": {
      "name": "Medizin vom Wegesrand",
      "objective": "Sammle in **Skyrim** drei blaue Bergblumen und drei orange Schmetterlingsflügel. **Braue daraus an einem Alchemielabor drei Heiltränke**. Kaufe keine Zutaten."
    }
  }
]);
