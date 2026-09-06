import { defineGameQuests } from "../defineGameQuests";

export const minecraftQuests = defineGameQuests("minecraft", [
  {
    id: "village-payday", moods: ["progress", "relax"], minutes: 25, sources: ["minecraft-village-worker"],
    en: { name: "Village Payday", objective: "In **Minecraft Survival**, find a farmer who buys wheat. Grow and harvest enough for one trade, replant every patch you harvested, then **earn emeralds from your own crop**. Leave the village's hay bales alone." },
    de: { name: "Zahltag im Dorf", objective: "Such in **Minecraft im Überlebensmodus** einen Bauern, der Weizen kauft. Baue genug für einen Handel an, ernte und bepflanze alle abgeernteten Felder neu. **Verdiene Smaragde mit deiner eigenen Ernte**, ohne die Heuballen im Dorf zu nehmen." },
  },
  {
    id: "trade-road", moods: ["create", "explore"], minutes: 30, sources: ["minecraft-village-worker"],
    en: { name: "Trade Road", objective: "In **Minecraft**, use two villages you have already found near each other. Mark a walkable route between their bells with signs and torches, then **walk it from bell to bell without opening your coordinates**." },
    de: { name: "Handelsweg", objective: "Nimm in **Minecraft** zwei bereits entdeckte Dörfer, die nah beieinander liegen. Markiere einen begehbaren Weg zwischen ihren Glocken mit Schildern und Fackeln. **Laufe von Glocke zu Glocke, ohne die Koordinaten zu öffnen**." },
  },
  {
    id: "golem-care", moods: ["low-energy", "progress"], minutes: 10, sources: ["minecraft-village-worker"],
    en: { name: "Patch the Guard", objective: "In **Minecraft**, find a village iron golem with visible cracks. Use iron ingots to **repair it until the cracks are gone**, then add lighting around its village bell. Do not hurt the golem to create the damage." },
    de: { name: "Wache flicken", objective: "Such in **Minecraft** einen Eisengolem im Dorf, der sichtbare Risse hat. **Repariere ihn mit Eisenbarren, bis die Risse weg sind**, und beleuchte danach den Platz um die Dorfglocke. Verletze den Golem nicht extra dafür." },
  },
  {
    id: "furnace-shift", moods: ["create", "focused"], minutes: 25,
    en: { name: "Furnace Shift", objective: "In **Minecraft**, connect chests and hoppers to a furnace so it takes fuel and raw food and stores the cooked food by itself. Load eight raw food items and enough fuel, then **collect all eight from the output chest** without opening the furnace." },
    de: { name: "Ofendienst", objective: "Verbinde in **Minecraft** Truhen und Trichter mit einem Ofen, damit er Brennstoff und rohes Essen bekommt und fertiges Essen ablegt. Fülle acht rohe Lebensmittel und genug Brennstoff ein. **Hole alle acht aus der Ausgabetruhe**, ohne den Ofen zu öffnen." },
  },
  {
    id: "two-chest-sorter", moods: ["create", "challenge"], minutes: 30,
    en: { name: "Sort It Out", objective: "In **Minecraft**, build a hopper and redstone sorter that sends cobblestone to one chest and other items to another. Put in sixteen cobblestone and sixteen dirt, then **check that each chest received only its sixteen items**." },
    de: { name: "Alles sortiert", objective: "Baue in **Minecraft** mit Trichtern und Redstone einen Sortierer: Bruchstein kommt in eine Truhe, andere Gegenstände in eine zweite. Gib sechzehn Bruchstein und sechzehn Erde hinein. **In jeder Truhe müssen nur die passenden sechzehn Blöcke landen**." },
  },
  {
    id: "note-block-doorbell", moods: ["create", "curious"], minutes: 25,
    en: { name: "Someone's Home", objective: "In **Minecraft**, build a doorbell with a button, redstone repeaters, and three note blocks tuned to different notes. **Make one button press play all three notes in order**, then hide the wiring without breaking the tune." },
    de: { name: "Jemand zu Hause", objective: "Baue in **Minecraft** eine Türklingel mit Knopf, Redstone-Verstärkern und drei Notenblöcken mit verschiedenen Tönen. **Ein Knopfdruck soll alle drei Töne nacheinander spielen**. Verstecke danach die Leitungen, ohne die Melodie zu verändern." },
  },
  {
    id: "smoke-and-honey", moods: ["relax", "curious"], minutes: 15,
    en: { name: "Smoke and Honey", objective: "In **Minecraft**, bring a bottle and campfire to a bee nest dripping with honey. Let campfire smoke reach the nest and **collect one honey bottle without making the bees angry**. Put out the fire afterward." },
    de: { name: "Rauch und Honig", objective: "Bring in **Minecraft** eine Flasche und ein Lagerfeuer zu einem Bienennest, aus dem Honig tropft. Lass Rauch ans Nest kommen und **fülle eine Honigflasche, ohne die Bienen wütend zu machen**. Lösche danach das Feuer." },
  },
  {
    id: "second-chance-villager", moods: ["progress", "focused"], minutes: 25,
    en: { name: "Second Chance", objective: "In **Minecraft Survival**, with a golden apple and a splash potion of Weakness ready, shelter one zombie villager from sunlight. Apply Weakness, feed it the apple, and **keep it safe until it becomes a villager**." },
    de: { name: "Zweite Chance", objective: "Wenn du in **Minecraft im Überlebensmodus** einen goldenen Apfel und einen Wurftrank der Schwäche hast, schütze einen Zombiedorfbewohner vor Sonnenlicht. Wirf den Trank, gib ihm den Apfel und **halte ihn am Leben, bis er wieder ein Dorfbewohner ist**." },
  },
  {
    id: "nether-walkway", moods: ["focused", "create"], minutes: 30,
    en: { name: "Safe Through Nether", objective: "In **Minecraft**, use two already linked Nether portals. Build walls and a roof around the path between them, seal holes in the floor, then **walk from one portal to the other without leaving the covered route**." },
    de: { name: "Sicher durch den Nether", objective: "Nimm in **Minecraft** zwei bereits verbundene Netherportale. Sichere den Weg dazwischen mit Wänden und einem Dach und schließe Löcher im Boden. **Laufe von einem Portal zum anderen, ohne den geschützten Weg zu verlassen**." },
  },
  {
    id: "map-home", moods: ["explore", "curious"], minutes: 25,
    en: { name: "Put Home on Paper", objective: "In **Minecraft**, start an empty map at your base. Explore on foot until the map has no blank patches, then **place the finished map in an item frame at home**. Bring a compass instead of using coordinates." },
    de: { name: "Zuhause auf Papier", objective: "Öffne in **Minecraft** eine leere Karte bei deiner Basis. Erkunde die Gegend zu Fuß, bis keine leeren Stellen mehr auf der Karte sind. **Hänge die fertige Karte zu Hause in einen Rahmen**. Nimm einen Kompass statt der Koordinaten." },
  },
  {
    id: "village-banner", moods: ["create", "relax"], minutes: 20, sources: ["minecraft-village-worker"],
    en: { name: "Village Colors", objective: "In **Minecraft**, use a loom to give your village a banner with two pattern layers. Make a matching second banner and **place one by the bell and one at your home**, so the two places share a flag." },
    de: { name: "Dorffarben", objective: "Gestalte in **Minecraft** am Webstuhl ein Banner fürs Dorf mit zwei Musterschichten. Mache ein zweites gleiches Banner und **stelle eines an die Glocke und eines an dein Haus**, damit beide Orte dieselbe Flagge haben." },
  },
  {
    id: "minecart-delivery", moods: ["create", "challenge"], minutes: 30, sources: ["minecraft-village-worker"],
    en: { name: "Rail Delivery", objective: "In **Minecraft**, connect your mine entrance and storage with rails, powered rails, and a chest minecart. Send sixteen freshly mined cobblestone along the track and **unload all sixteen at storage without carrying them there yourself**." },
    de: { name: "Lieferung auf Schienen", objective: "Verbinde in **Minecraft** deinen Mineneingang und dein Lager mit Schienen, Antriebsschienen und einer Güterlore. Schicke sechzehn frisch abgebaute Bruchsteine los. **Lade alle sechzehn im Lager aus, ohne sie selbst dorthin zu tragen**." },
  },
]);
