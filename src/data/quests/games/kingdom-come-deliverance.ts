import { defineGameQuests } from "../defineGameQuests";

export const kingdomComeQuests = defineGameQuests("kingdom-come-deliverance", [
  {
    id: "an-honest-night", installments: ["kcd-1"], moods: ["relax", "explore"], minutes: 30, sources: ["kcd-herbalist"],
    en: { name: "An Honest Night", objective: "In **Kingdom Come: Deliverance (1)**, with the Marigold Decoction recipe and a bench available, gather nettles and marigolds, brew by hand, and sell the potions. **Pay for one available inn room using only those earnings**. No bought herbs, stolen goods, or autobrew." },
    de: { name: "Ehrlich verdient", objective: "Sammle in **Kingdom Come: Deliverance (1)** mit bekanntem Ringelblumensud-Rezept und erreichbarem Alchemietisch Brennnesseln und Ringelblumen. Braue von Hand und verkaufe die Tränke. **Bezahle ein verfügbares Gasthauszimmer nur mit diesen Einnahmen**. Keine gekauften Kräuter, gestohlenen Waren oder automatisches Brauen." },
  },
  {
    id: "rattay-sharp-edge", installments: ["kcd-1"], moods: ["focused", "progress"], minutes: 20,
    en: { name: "Back to Sharp", objective: "In **Kingdom Come: Deliverance (1)**, take an owned, damaged sword to a grindstone. **Sharpen it to at least 90 condition yourself**, then finish a practice fight with Bernard using the real-weapon option. Do not pay a smith for the repair." },
    de: { name: "Wieder scharf", objective: "Bring in **Kingdom Come: Deliverance (1)** ein eigenes beschädigtes Schwert zum Schleifstein. **Schärfe es selbst auf mindestens 90 Zustand** und beende danach einen Übungskampf bei Bernard mit echten Waffen. Bezahle keinen Schmied für die Reparatur." },
  },
  {
    id: "ledetchko-chumps", installments: ["kcd-1"], moods: ["focused", "challenge"], minutes: 20,
    en: { name: "Logs on the River", objective: "In **Kingdom Come: Deliverance (1)**, with a bow and enough entry money, join Chumps on the River in Ledetchko. **Finish one contest shooting only after a log passes directly in front of you**. No potions or crosshair mods for this attempt." },
    de: { name: "Stämme auf dem Fluss", objective: "Nimm in **Kingdom Come: Deliverance (1)** mit Bogen und genug Startgeld am Holzstammschießen in Ledetschko teil. **Beende einen Wettbewerb und schieße erst, wenn ein Stamm direkt vor dir vorbeizieht**. Keine Tränke oder Fadenkreuz-Mods für diesen Versuch." },
  },
  {
    id: "treasure-by-landmarks", installments: ["kcd-1"], moods: ["explore", "curious"], minutes: 30,
    en: { name: "Read the Landscape", objective: "In **Kingdom Come: Deliverance (1)**, bring a spade and an unsolved treasure map for an accessible area. Follow the drawn roads, rivers, and buildings. **Open the treasure chest using the sketch alone**, without a guide or fast travel." },
    de: { name: "Die Landschaft lesen", objective: "Nimm in **Kingdom Come: Deliverance (1)** einen Spaten und eine ungelöste Schatzkarte für ein erreichbares Gebiet mit. Folge den gezeichneten Wegen, Flüssen und Gebäuden. **Öffne die Schatztruhe nur mithilfe der Skizze**, ohne Guide oder Schnellreise." },
  },
  {
    id: "town-to-town-remedies", installments: ["kcd-1"], moods: ["explore", "progress"], minutes: 30, sources: ["kcd-herbalist"],
    en: { name: "Traveling Apothecary", objective: "In **Kingdom Come: Deliverance (1)**, hand-brew two bottles of a potion whose recipe you know. **Travel to an apothecary in another town, sell one bottle, and keep the other**. Walk or ride there with no fast travel or looting along the road." },
    de: { name: "Reisender Apotheker", objective: "Braue in **Kingdom Come: Deliverance (1)** zwei Flaschen eines Tranks von Hand, dessen Rezept du kennst. **Reise zu einem Apotheker in einem anderen Ort, verkaufe eine Flasche und behalte die zweite**. Keine Schnellreise und keine Beute unterwegs." },
  },
  {
    id: "bernhard-counter", installments: ["kcd-1"], moods: ["challenge", "focused"], minutes: 25,
    en: { name: "Wait for the Swing", objective: "In **Kingdom Come: Deliverance (1)**, once Bernard offers practice and you know perfect blocks, start a practice sword fight. **Win by attacking only after a perfect block**. Any attack before a block restarts the attempt." },
    de: { name: "Warte auf den Schlag", objective: "Starte in **Kingdom Come: Deliverance (1)** einen Übungskampf mit Schwertern, sobald Bernard Training anbietet und du perfekte Blocks kennst. **Gewinne, indem du nur nach einem perfekten Block angreifst**. Ein Angriff ohne vorherigen Block startet den Versuch neu." },
  },
  {
    id: "forge-and-equip", installments: ["kcd-2"], moods: ["create", "progress"], minutes: 25,
    en: { name: "Made by Henry", objective: "In **Kingdom Come: Deliverance II**, after learning smithing, use a sword sketch you own. Heat and hammer the metal yourself, finish the blade, then **equip your own sword and sharpen it to at least 90 condition**. Do not buy a finished replacement." },
    de: { name: "Von Heinrich gemacht", objective: "Nutze in **Kingdom Come: Deliverance II** nach dem Schmiede-Tutorial eine eigene Schwertskizze. Erhitze und hämmere das Metall selbst und stelle die Klinge fertig. **Rüste dein Schwert aus und schleife es auf mindestens 90 Zustand**. Kaufe keinen fertigen Ersatz." },
  },
  {
    id: "dice-for-dinner", installments: ["kcd-2"], moods: ["relax", "challenge"], minutes: 25, sources: ["kcd-tavern-life"],
    en: { name: "Dice Buy Dinner", objective: "In **Kingdom Come: Deliverance II**, play tavern dice with ordinary dice and no badge bonus. **Win enough profit to buy one beer, then buy it with those winnings**. Try at most three full games; finishing the third also ends the quest." },
    de: { name: "Die Würfel zahlen", objective: "Spiele in **Kingdom Come: Deliverance II** im Gasthaus mit gewöhnlichen Würfeln und ohne Abzeichenbonus. **Gewinne genug für ein Bier und kaufe es vom Gewinn**. Versuche höchstens drei ganze Spiele; auch das dritte beendete Spiel schließt die Quest ab." },
  },
  {
    id: "fresh-and-dried", installments: ["kcd-2"], moods: ["curious", "create"], minutes: 30,
    en: { name: "Fresh or Dried", objective: "In **Kingdom Come: Deliverance II**, with an alchemy bench and drying rack available, gather herbs for two batches of Marigold Decoction. Dry one batch's herbs. **Brew both by hand using the same steps and compare the potion quality in your inventory**." },
    de: { name: "Frisch oder getrocknet", objective: "Sammle in **Kingdom Come: Deliverance II** mit erreichbarem Alchemietisch und Trockenplatz Kräuter für zwei Ansätze Ringelblumensud. Trockne die Kräuter für einen Ansatz. **Braue beide mit denselben Schritten von Hand und vergleiche die Qualität im Inventar**." },
  },
  {
    id: "clean-town-arrival", installments: ["kcd-2"], moods: ["relax", "focused"], minutes: 20, sources: ["kcd-tavern-life"],
    en: { name: "Ready for Town", objective: "In **Kingdom Come: Deliverance II**, bring soap and dirty clothes to a laundry spot. Wash the clothes yourself, put them on, and **walk into the nearest town to haggle for one meal**. Finish the purchase without stealing or getting into a fight." },
    de: { name: "Bereit für den Ort", objective: "Bring in **Kingdom Come: Deliverance II** Seife und schmutzige Kleidung zu einem Waschplatz. Wasche sie selbst, zieh sie an und **gehe in den nächsten Ort, um den Preis für ein Essen auszuhandeln**. Kaufe es ohne Diebstahl oder Kampf." },
  },
  {
    id: "schnapps-safety-net", installments: ["kcd-2"], moods: ["progress", "focused"], minutes: 25,
    en: { name: "Your Own Safety Net", objective: "In **Kingdom Come: Deliverance II**, with the Saviour Schnapps recipe known, gather its herbs and brew a bottle by hand. Carry it to the start of your next tracked quest and **make a manual save using your homemade schnapps** before going in." },
    de: { name: "Selbst abgesichert", objective: "Sammle in **Kingdom Come: Deliverance II** mit bekanntem Retterschnaps-Rezept die nötigen Kräuter und braue eine Flasche von Hand. Nimm sie zum Start deiner nächsten verfolgten Quest mit. **Speichere mit deinem selbst gebrauten Schnaps**, bevor du loslegst." },
  },
  {
    id: "inn-to-inn", installments: ["kcd-2"], moods: ["explore", "relax"], minutes: 30, sources: ["kcd-tavern-life"],
    en: { name: "Between Two Inns", objective: "In **Kingdom Come: Deliverance II**, buy bread at an inn, then walk or ride to the nearest other discovered inn along the roads. Stop to eat your bread on the way and **rent a room on arrival**. No fast travel or looting detours." },
    de: { name: "Von Gasthaus zu Gasthaus", objective: "Kaufe in **Kingdom Come: Deliverance II** Brot im Gasthaus. Reise auf den Straßen zum nächsten anderen entdeckten Gasthaus, zu Fuß oder zu Pferd. Iss unterwegs dein Brot und **miete bei der Ankunft ein Zimmer**. Keine Schnellreise oder Beute-Abstecher." },
  },
]);
