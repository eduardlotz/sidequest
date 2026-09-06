import { defineGameQuests } from "../defineGameQuests";

export const crimsonDesertQuests = defineGameQuests("crimson-desert", [
  {
    id: "resting-corner", moods: ["create", "relax"], minutes: 20, sources: ["crimson-player-sandbox"],
    en: { name: "A Place to Rest", objective: "In **Crimson Desert**, once you have a house and furniture, build a resting corner with one chair and two decorations you own. **Place them so you can sit in the chair and see both decorations**, then sit down." },
    de: { name: "Platz zum Ausruhen", objective: "Richte in **Crimson Desert** mit freigeschaltetem Haus und vorhandenen Möbeln eine Ecke mit einem Stuhl und zwei Dekorationen ein. **Stelle sie so auf, dass du sitzend beide Dekorationen siehst**, und setz dich hin." },
  },
  {
    id: "gear-field-trial", moods: ["challenge", "curious"], minutes: 25, sources: ["crimson-player-sandbox"],
    en: { name: "Field Trial", objective: "In **Crimson Desert**, equip an owned Abyss gear effect you have not tried in combat. Read how it works, then **trigger its effect in three separate enemy fights and finish each fight**. Keep the same gear through all three." },
    de: { name: "Im Feldversuch", objective: "Rüste in **Crimson Desert** einen vorhandenen Abyss-Ausrüstungseffekt aus, den du noch nicht im Kampf genutzt hast. Lies seine Funktion und **löse ihn in drei einzelnen Kämpfen aus, die du jeweils beendest**. Behalte die Ausrüstung in allen drei Kämpfen." },
  },
  {
    id: "greymane-assault", moods: ["connect", "progress"], minutes: 30, sources: ["crimson-player-sandbox"],
    en: { name: "With the Greymanes", objective: "In **Crimson Desert**, once you can send Greymanes to attack a fortress, join one available attack yourself. Stay with the group and **finish the fortress fight alongside them**, instead of waiting elsewhere for the result." },
    de: { name: "Mit den Graumähnen", objective: "Sobald du in **Crimson Desert** Graumähnen zu einem Festungsangriff schicken kannst, begleite einen verfügbaren Angriff selbst. Bleib bei der Gruppe und **beende den Festungskampf an ihrer Seite**, statt woanders auf das Ergebnis zu warten." },
  },
  {
    id: "cut-off-recovery", moods: ["focused", "challenge"], minutes: 25,
    en: { name: "No Return to Battle", objective: "In **Crimson Desert**, scout a hostile stronghold with an enemy infirmary. **Destroy the infirmary before fighting the nearest defending group**, then defeat that group. This cuts off the wounded enemies' return to battle." },
    de: { name: "Keine Rückkehr", objective: "Spähe in **Crimson Desert** einen feindlichen Stützpunkt mit Krankenstation aus. **Zerstöre die Krankenstation vor dem Kampf mit der nächsten Verteidigergruppe**, dann besiege die Gruppe. So können verwundete Gegner nicht in den Kampf zurückkehren." },
  },
  {
    id: "archery-three-cards", moods: ["focused", "progress"], minutes: 20,
    en: { name: "Three Scorecards", objective: "In **Crimson Desert**, enter an available archery contest you can afford to repeat. Use the first attempt as your score to beat and **finish two more attempts with the same bow**. Stop after the third score is shown." },
    de: { name: "Drei Punktestände", objective: "Nimm in **Crimson Desert** an einem verfügbaren Bogenschießwettbewerb teil, den du dreimal bezahlen kannst. Der erste Versuch gibt den Punktestand vor. **Beende zwei weitere Versuche mit demselben Bogen** und höre nach dem dritten Ergebnis auf." },
  },
  {
    id: "arm-wrestling-rematch", moods: ["restless", "nostalgic"], minutes: 15,
    en: { name: "Elbows on the Table", objective: "In **Crimson Desert**, find an available arm-wrestling opponent and play one match. Read the timing from that match, then **finish two rematches against the same opponent**. Count completed matches, not only wins." },
    de: { name: "Ellbogen auf den Tisch", objective: "Such in **Crimson Desert** einen verfügbaren Gegner fürs Armdrücken und spiele ein Match. Achte dabei auf das Timing und **beende danach zwei weitere Matches gegen denselben Gegner**. Abgeschlossene Matches zählen, nicht nur Siege." },
  },
  {
    id: "skybridge-builder", moods: ["curious", "focused"], minutes: 25,
    en: { name: "Make the Crossing", objective: "In **Crimson Desert**, with Axiom Force unlocked, reach an unsolved Skybridge Alignment Device. **Move its pieces into place until the bridge activates**, then cross it yourself. Work from the device's shapes without opening a guide." },
    de: { name: "Den Weg verbinden", objective: "Erreiche in **Crimson Desert** mit freigeschalteter Axiomkraft ein ungelöstes Himmelsbrücken-Gerät. **Bewege die Teile an ihren Platz, bis die Brücke aktiv ist**, und überquere sie selbst. Nutze die Formen am Gerät statt eines Guides." },
  },
  {
    id: "lantern-memory", moods: ["curious", "low-energy"], minutes: 15,
    en: { name: "What Happened Here", objective: "In **Crimson Desert**, with the Lantern and Visione ready, investigate one available memory fragment. **Watch its full memory playback**, then walk around that exact spot and match one visible landmark to the memory before leaving." },
    de: { name: "Was hier passiert ist", objective: "Untersuche in **Crimson Desert** mit Laterne und Visione ein verfügbares Erinnerungsfragment. **Sieh dir die Erinnerung bis zum Ende an**. Gehe danach am selben Ort umher und finde einen sichtbaren Orientierungspunkt aus der Erinnerung wieder, bevor du weiterziehst." },
  },
  {
    id: "watch-then-fight", moods: ["progress", "challenge"], minutes: 25,
    en: { name: "Watch, Then Try", objective: "In **Crimson Desert**, find a combat move you can still learn by watching a demonstration. Learn it that way, then **land the new move on three enemies and defeat them**. Each enemy must be hit by the learned move." },
    de: { name: "Zuschauen und Probieren", objective: "Such in **Crimson Desert** eine Kampftechnik, die du noch durch Beobachten lernen kannst. Lerne sie so und **triff danach drei Gegner mit der neuen Technik und besiege sie**. Jeder Gegner muss von der gelernten Technik getroffen werden." },
  },
  {
    id: "camp-supply-run", moods: ["overwhelmed", "progress"], minutes: 25, sources: ["crimson-player-sandbox"],
    en: { name: "For the Camp", objective: "In **Crimson Desert**, take an available Greymane camp donation request for a resource you can gather nearby. **Gather the missing amount yourself and turn it in at camp**, without buying supplies or taking on another request." },
    de: { name: "Fürs Lager", objective: "Nimm in **Crimson Desert** einen verfügbaren Spendenauftrag im Graumähnen-Lager für einen Rohstoff aus der Nähe. **Sammle die fehlende Menge selbst und gib sie im Lager ab**, ohne Vorräte zu kaufen oder einen zweiten Auftrag anzunehmen." },
  },
  {
    id: "fish-for-supper", moods: ["relax", "explore"], minutes: 25,
    en: { name: "Fish for Supper", objective: "In **Crimson Desert**, with fishing gear and a fish recipe ready, leave camp to catch a fish the recipe accepts. **Return to camp, cook that catch, and eat the meal**. Bring only the other ingredients; stored fish do not count." },
    de: { name: "Fisch zum Abendessen", objective: "Verlasse in **Crimson Desert** mit Angelausrüstung und bekanntem Fischrezept das Lager und fange einen passenden Fisch. **Kehre zurück, koche deinen Fang und iss das Gericht**. Nimm nur die anderen Zutaten mit; gelagerte Fische zählen nicht." },
  },
  {
    id: "pet-homecoming", moods: ["low-energy", "relax"], minutes: 10, sources: ["crimson-player-sandbox"],
    en: { name: "Home with Company", objective: "In **Crimson Desert**, with an owned pet and food it accepts, return to your camp on foot with the pet summoned. **Feed and pet it at camp**, then sit in an available chair beside it. Start from the nearest road outside camp." },
    de: { name: "Zusammen nach Hause", objective: "Kehre in **Crimson Desert** mit einem eigenen gerufenen Haustier und passendem Futter zu Fuß ins Lager zurück. Starte auf der nächsten Straße außerhalb. **Füttere und streichle es im Lager**, dann setz dich in einen verfügbaren Stuhl neben ihm." },
  },
]);
