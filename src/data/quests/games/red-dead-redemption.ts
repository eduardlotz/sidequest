import { defineGameQuests } from "../defineGameQuests";

export const redDeadQuests = defineGameQuests("red-dead-redemption", [
  {
    id: "bring-them-in", installments: ["rdr-1"], moods: ["challenge", "focused"], minutes: 25,
    en: { name: "Bring Them In", objective: "In **Red Dead Redemption's story mode**, with the lasso unlocked, take an available bounty poster. **Lasso the target and deliver them alive without using Dead Eye**. You may fight their gang, but never shoot the target." },
    de: { name: "Lebend abliefern", objective: "Nimm im **Story-Modus von Red Dead Redemption** mit freigeschaltetem Lasso einen verfügbaren Steckbrief an. **Fange das Ziel mit dem Lasso und liefere es lebend ab, ohne Dead Eye**. Du darfst gegen die Bande kämpfen, aber nicht auf das Ziel schießen." },
  },
  {
    id: "liars-table", installments: ["rdr-1"], moods: ["curious", "nostalgic"], minutes: 20, sources: ["rdr-liars-dice"],
    en: { name: "At the Dice Table", objective: "In **Red Dead Redemption's story mode**, visit an unlocked Liar's Dice table. **Finish one game without looking up odds or reloading a lost round**. Base your calls on your own dice and the bids you heard." },
    de: { name: "Am Würfeltisch", objective: "Besuche im **Story-Modus von Red Dead Redemption** einen freigeschalteten Würfelpoker-Tisch. **Beende ein Spiel, ohne Wahrscheinlichkeiten nachzuschlagen oder verlorene Runden neu zu laden**. Richte deine Ansagen nach deinen Würfeln und den gehörten Geboten." },
  },
  {
    id: "wild-horse-home", installments: ["rdr-1"], moods: ["explore", "progress"], minutes: 25,
    en: { name: "A Horse of Your Own", objective: "In **Red Dead Redemption's story mode**, after learning to break horses, find a wild horse instead of buying a deed. **Lasso it, break it, and ride it to a town hitching post**. Hitch it there without changing horses along the way." },
    de: { name: "Dein eigenes Pferd", objective: "Such im **Story-Modus von Red Dead Redemption** nach dem Zureiten-Tutorial ein Wildpferd, statt einen Besitzschein zu kaufen. **Fange es mit dem Lasso, reite es zu und bring es zu einem Anbindepfosten im Ort**. Binde es an, ohne unterwegs das Pferd zu wechseln." },
  },
  {
    id: "nightwatch-dog", installments: ["rdr-1"], moods: ["focused", "connect"], minutes: 20,
    en: { name: "Follow the Dog", objective: "In **Red Dead Redemption's story mode**, start an unlocked Nightwatch job with a lasso ready. Follow the watchdog and **finish the patrol while hogtying any human troublemakers instead of killing them**. Keep the dog alive until the job pays out." },
    de: { name: "Dem Hund nach", objective: "Starte im **Story-Modus von Red Dead Redemption** mit bereitem Lasso eine freigeschaltete Nachtwache. Folge dem Wachhund und **beende die Runde, indem du menschliche Unruhestifter fesselst statt tötest**. Halte den Hund bis zur Auszahlung am Leben." },
  },
  {
    id: "sketched-treasure", installments: ["rdr-1"], moods: ["curious", "explore"], minutes: 30,
    en: { name: "Follow the Sketch", objective: "In **Red Dead Redemption's story mode**, take an unsolved treasure map for a region you can reach. Match its drawn landmarks to the landscape and **collect that map's treasure without opening a guide**. Use the map itself as your only clue." },
    de: { name: "Der Skizze folgen", objective: "Nimm im **Story-Modus von Red Dead Redemption** eine ungelöste Schatzkarte für eine erreichbare Region. Vergleiche die gezeichneten Orientierungspunkte mit der Landschaft und **berge den Schatz ohne Guide**. Die Schatzkarte selbst ist dein einziger Hinweis." },
  },
  {
    id: "horseshoe-afternoon", installments: ["rdr-1"], moods: ["relax", "nostalgic"], minutes: 20,
    en: { name: "Close to the Pin", objective: "In **Red Dead Redemption's story mode**, play horseshoes at an available pitch. Use one match to find your throw timing, then **finish a rematch without changing the stake**. Stay until the second match result, whether you win or lose." },
    de: { name: "Nah am Pflock", objective: "Spiele im **Story-Modus von Red Dead Redemption** an einem verfügbaren Platz Hufeisenwerfen. Finde im ersten Match dein Wurftiming und **beende eine Revanche mit demselben Einsatz**. Bleib bis zum zweiten Ergebnis, egal ob du gewinnst oder verlierst." },
  },
  {
    id: "hunting-pays", installments: ["rdr-2"], moods: ["explore", "focused"], minutes: 30, sources: ["rdr-hunting-life"],
    en: { name: "The Hunt Pays", objective: "In **Red Dead Redemption 2's story mode**, track and hunt one deer on foot without Dead Eye. Skin it, take its pelt to a butcher, and **buy a meal with the hunting money**. Travel by horse and use no other earnings." },
    de: { name: "Die Jagd zahlt", objective: "Verfolge und erlege im **Story-Modus von Red Dead Redemption 2** einen Hirsch zu Fuß ohne Dead Eye. Häute ihn, bring sein Fell zum Fleischer und **bezahle ein Essen mit dem Jagdgeld**. Reise zu Pferd und nutze keine anderen Einnahmen." },
  },
  {
    id: "pearsons-delivery", installments: ["rdr-2"], moods: ["progress", "relax"], minutes: 25, sources: ["rdr-hunting-life"],
    en: { name: "Back for Supper", objective: "In **Red Dead Redemption 2's story mode**, while Pearson still runs the gang's camp kitchen, hunt a three-star rabbit with a suitable weapon. **Bring its whole perfect carcass to Pearson and donate it**, without skinning it or using fast travel." },
    de: { name: "Zum Essen zurück", objective: "Jage im **Story-Modus von Red Dead Redemption 2**, solange Pearson die Lagerküche führt, ein Drei-Sterne-Kaninchen mit einer passenden Waffe. **Bring Pearson den ganzen perfekten Kadaver und spende ihn**, ohne ihn zu häuten oder schnellzureisen." },
  },
  {
    id: "field-naturalist", installments: ["rdr-2"], moods: ["curious", "relax"], minutes: 25, sources: ["rdr-hunting-life"],
    en: { name: "Leave Them Living", objective: "In **Red Dead Redemption 2's story mode**, take binoculars and your unlocked camera to the woods. **Study three animal species you have not studied, then photograph one of them**. Stay on foot and do not hurt or chase the animals." },
    de: { name: "Lass sie leben", objective: "Nimm im **Story-Modus von Red Dead Redemption 2** Fernglas und freigeschaltete Kamera mit in den Wald. **Untersuche drei bisher nicht untersuchte Tierarten und fotografiere eine davon**. Bleib zu Fuß und verletze oder jage die Tiere nicht." },
  },
  {
    id: "horse-trust", installments: ["rdr-2"], moods: ["relax", "progress"], minutes: 25, sources: ["rdr-hunting-life"],
    en: { name: "Earn Its Trust", objective: "In **Red Dead Redemption 2's story mode**, use a horse at bonding level one. Lead it along a road, brush it, and feed it when needed. **Reach bonding level two and hitch it at a stable**, without sprinting or buying a different horse." },
    de: { name: "Vertrauen verdienen", objective: "Nimm im **Story-Modus von Red Dead Redemption 2** ein Pferd auf Bindungsstufe eins. Führe es eine Straße entlang, bürste es und füttere es bei Bedarf. **Erreiche Bindungsstufe zwei und binde es an einem Stall an**, ohne zu sprinten oder ein anderes Pferd zu kaufen." },
  },
  {
    id: "trapper-made", installments: ["rdr-2"], moods: ["create", "progress"], minutes: 30, sources: ["rdr-hunting-life"],
    en: { name: "Made from the Hunt", objective: "In **Red Dead Redemption 2's story mode**, find a Trapper garment missing just one pelt you can hunt nearby. **Bring the required perfect pelt, buy the garment, and put it on**. Get the pelt this session; do not use a stored one." },
    de: { name: "Aus eigener Jagd", objective: "Such im **Story-Modus von Red Dead Redemption 2** beim Trapper ein Kleidungsstück, für das nur ein in der Nähe jagbares Fell fehlt. **Bring das nötige perfekte Fell, kaufe das Kleidungsstück und zieh es an**. Beschaffe das Fell in dieser Session." },
  },
  {
    id: "catch-and-release", installments: ["rdr-2"], moods: ["relax", "low-energy"], minutes: 20,
    en: { name: "Back in the River", objective: "In **Red Dead Redemption 2's story mode**, with fishing unlocked, ride to the nearest river. **Catch and release three fish using bread bait**, then pack away the rod and brush your horse before riding back. Keep no fish from this trip." },
    de: { name: "Zurück in den Fluss", objective: "Reite im **Story-Modus von Red Dead Redemption 2** mit freigeschaltetem Angeln zum nächsten Fluss. **Fange mit Brot drei Fische und lass alle frei**. Pack die Angel weg und bürste dein Pferd vor dem Rückritt. Behalte keinen Fisch von diesem Ausflug." },
  },
]);
