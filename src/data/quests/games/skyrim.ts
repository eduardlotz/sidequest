import { defineGameQuests } from "../defineGameQuests";

// Session-sized version of a player-made equipment rule:
// https://www.reddit.com/r/skyrim/comments/18nswjv/what_are_some_self_imposed_challenges_you_use_to/

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
    "minimum": 3,
    "en": {
      "name": "The Road to Whiterun",
      "objective": "In **Skyrim**, walk from Riverwood toward Whiterun without fast travel. Stop at a farm or pick a few flowers on the way. Let the road be the whole session."
    },
    "de": {
      "name": "Der Weg nach Weißlauf",
      "objective": "Geh in **Skyrim** von Flusswald Richtung Weißlauf, ohne Schnellreise. Halte unterwegs an einem Hof oder pflücke ein paar Blumen. Mehr musst du heute nicht vorhaben."
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
    "minimum": 3,
    "en": {
      "name": "Soul to Steel",
      "objective": "In **Skyrim**, bring Soul Trap, an empty petty soul gem, an unenchanted weapon, and a known weapon enchantment. **Trap a mudcrab’s soul, enchant the weapon with that gem, and equip it**."
    },
    "de": {
      "name": "Seele im Stahl",
      "objective": "Nimm in **Skyrim** Seelenfalle, einen leeren winzigen Seelenstein, eine unverzauberte Waffe und eine Waffenverzauberung mit, die du schon gelernt hast. **Fang die Seele einer Schlammkrabbe, verzaubere damit die Waffe und rüste sie aus**."
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
    "minutes": 25,
    "minimum": 5,
    "en": {
      "name": "Field Medicine",
      "objective": "In **Skyrim**, gather three blue mountain flowers and three orange butterfly wings. At an alchemy lab, **brew three Restore Health potions from those ingredients**. Buy none of the ingredients."
    },
    "de": {
      "name": "Medizin vom Wegesrand",
      "objective": "Sammle in **Skyrim** drei blaue Bergblumen und drei orange Schmetterlingsflügel. **Braue daraus an einem Alchemielabor drei Heiltränke**. Kaufe keine Zutaten."
    }
  },
  {
    id: "handmade-weapon",
    moods: ["challenge", "focused"],
    type: "challenge",
    tags: ["crafting", "one-weapon", "three-attempts"],
    minutes: 25,
    minimum: 5,
    en: {
      name: "Made and Wielded",
      objective: "In **Skyrim**, use materials you already own to forge one weapon. Pick a nearby ordinary fight and **win using only that weapon for damage**. Stop after success or three attempts.",
    },
    de: {
      name: "Selbst geschmiedet",
      objective: "Schmiede in **Skyrim** aus Materialien, die du schon hast, eine Waffe. Such dir einen normalen Kampf in der Nähe und **gewinne ihn, indem du nur mit dieser Waffe Schaden machst**. Nach dem Sieg oder drei Versuchen ist Schluss.",
    },
  }
]);
