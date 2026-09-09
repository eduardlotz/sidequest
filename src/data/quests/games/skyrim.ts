import { defineGameQuests } from "../defineGameQuests";

export const skyrimQuests = defineGameQuests("skyrim", [
  {
    id: "roadside-blessing", moods: ["explore", "relax"], minutes: 25, sources: ["skyrim-road-travel"],
    en: { name: "Roadside Blessing", objective: "In **Skyrim**, start in Riverwood and follow the road to Whiterun without fast travel or carriages. Gather blue mountain flowers along the road, then **activate the Shrine of Talos in Whiterun and sell the flowers to Arcadia**. Keep your weapons put away unless attacked." },
    de: { name: "Segen am Weg", objective: "Starte in **Skyrim** in Flusswald und folge der Straße nach Weißlauf, ohne Schnellreise oder Kutsche. Sammle unterwegs blaue Bergblumen. **Aktiviere den Talos-Schrein in Weißlauf und verkaufe die Blumen an Arcadia**. Zieh deine Waffen nur, wenn du angegriffen wirst." },
  },
  {
    id: "soul-to-steel", moods: ["progress", "curious"], minutes: 25,
    en: { name: "Soul to Steel", objective: "In **Skyrim**, with Soul Trap, an empty petty soul gem, a known weapon enchantment, and an unenchanted weapon ready, **trap a mudcrab's soul and use that gem to enchant the weapon** at an arcane enchanter. Finish by equipping it; use no purchased filled gems." },
    de: { name: "Seele im Stahl", objective: "Halte in **Skyrim** Seelenfalle, einen leeren winzigen Seelenstein, eine bekannte Waffenverzauberung und eine unverzauberte Waffe bereit. **Fange die Seele einer Schlammkrabbe und verzaubere damit die Waffe** an einem arkanen Verzauberer. Rüste sie zum Abschluss aus; keine gekauften gefüllten Steine." },
  },
  {
    id: "field-medicine", moods: ["focused", "create"], minutes: 20,
    en: { name: "Field Medicine", objective: "In **Skyrim**, gather blue mountain flowers and butterfly wings yourself. At an alchemy lab, **brew three Restore Health potions from those two ingredients**. Buy no ingredients and use none from storage; finish when all three potions are in your inventory." },
    de: { name: "Medizin vom Wegesrand", objective: "Sammle in **Skyrim** selbst blaue Bergblumen und Schmetterlingsflügel. Braue an einem Alchemielabor **drei Tränke zur Wiederherstellung der Gesundheit aus diesen beiden Zutaten**. Keine gekauften oder gelagerten Zutaten; fertig bist du mit drei Tränken im Inventar." },
  },
]);
