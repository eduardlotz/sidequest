import { defineGameQuests } from "../defineGameQuests";

export const farCryQuests = defineGameQuests("far-cry", [
  {
    id: "cage-opener", installments: ["fc-3"], moods: ["curious", "challenge"], minutes: 20,
    en: { name: "Open the Cage", objective: "In **Far Cry 3**, scout an enemy outpost with a caged predator. Break the cage from outside and **let the animal take down at least one guard before you enter**. Then capture the outpost without killing the freed animal yourself." },
    de: { name: "Käfig auf", objective: "Spähe in **Far Cry 3** einen feindlichen Außenposten mit eingesperrtem Raubtier aus. Öffne den Käfig von draußen und **lass das Tier mindestens eine Wache ausschalten, bevor du reingehst**. Erobere den Posten, ohne das befreite Tier selbst zu töten." },
  },
  {
    id: "tower-to-landmark", installments: ["fc-3"], moods: ["explore", "curious"], minutes: 25,
    en: { name: "From the Tower", objective: "In **Far Cry 3**, climb an unfinished radio tower and switch off its scrambler. Pick a visible building from the top, then **reach that building without opening the map or placing a waypoint**. Descend by zipline when one is available." },
    de: { name: "Vom Turm aus", objective: "Klettere in **Far Cry 3** auf einen unfertigen Funkturm und schalte den Störsender ab. Nimm von oben ein sichtbares Gebäude ins Visier. **Erreiche es, ohne die Karte zu öffnen oder einen Wegpunkt zu setzen**. Nutze zum Abstieg eine vorhandene Seilrutsche." },
  },
  {
    id: "shark-crafting", installments: ["fc-3"], moods: ["progress", "challenge"], minutes: 25,
    en: { name: "Offshore Upgrade", objective: "In **Far Cry 3**, with an equipment recipe that needs shark skin still unfinished, take a boat to a shark hunting area. **Hunt and skin enough sharks for that recipe, return to shore, and craft the upgrade**. Buy no replacement materials." },
    de: { name: "Upgrade vor der Küste", objective: "Wenn dir in **Far Cry 3** noch ein Ausrüstungsrezept mit Haifell fehlt, fahre mit einem Boot in ein Hai-Jagdgebiet. **Erlege und häute genug Haie für das Rezept, kehre ans Ufer zurück und stelle das Upgrade her**. Kaufe keine Ersatzmaterialien." },
  },
  {
    id: "borrowed-weapons", installments: ["fc-4"], moods: ["challenge", "restless"], minutes: 25, sources: ["far-cry-player-rules"],
    en: { name: "Their Own Weapons", objective: "In **Far Cry 4**, approach an enemy outpost with your guns holstered. Take down the first isolated guard, take their gun, and **capture the outpost using only weapons and ammo found inside it**. Do not refill or switch to your old gear." },
    de: { name: "Ihre eigenen Waffen", objective: "Nähere dich in **Far Cry 4** einem feindlichen Außenposten mit weggesteckten Waffen. Schalte die erste einzelne Wache aus und nimm ihre Waffe. **Erobere den Posten nur mit dort gefundenen Waffen und Munition**, ohne Nachfüllen oder alte Ausrüstung." },
  },
  {
    id: "elephant-roadblock", installments: ["fc-4"], moods: ["restless", "challenge"], minutes: 25,
    en: { name: "Heavy Traffic", objective: "In **Far Cry 4**, with Elephant Rider unlocked, ride an elephant to a nearby enemy road patrol. **Defeat the patrol while staying on the elephant**, using its attacks and your sidearm. Leave the elephant alive after the fight." },
    de: { name: "Schwerverkehr", objective: "Reite in **Far Cry 4** mit freigeschaltetem Elefantenreiten zu einer feindlichen Straßenpatrouille in der Nähe. **Besiege sie, ohne vom Elefanten abzusteigen**, mit seinen Angriffen und deiner Seitenwaffe. Lass den Elefanten den Kampf überleben." },
  },
  {
    id: "bow-and-knife", installments: ["fc-4"], moods: ["focused", "challenge"], minutes: 25, sources: ["far-cry-player-rules"],
    en: { name: "Bow and Knife", objective: "In **Far Cry 4**, take a bow to an enemy outpost. **Capture it using ordinary arrows and knife takedowns only**, without setting off an alarm. No explosive arrows, bait, or companions; an alarm restarts the attempt." },
    de: { name: "Bogen und Messer", objective: "Nimm in **Far Cry 4** einen Bogen zu einem feindlichen Außenposten mit. **Erobere ihn nur mit gewöhnlichen Pfeilen und Messer-Takedowns**, ohne Alarm auszulösen. Keine Explosivpfeile, Köder oder Begleiter; Alarm startet den Versuch neu." },
  },
  {
    id: "boomer-recon", installments: ["fc-5"], moods: ["focused", "connect"], minutes: 20,
    en: { name: "Boomer Goes First", objective: "In **Far Cry 5**, with Boomer recruited, send him ahead to an enemy outpost and let him mark its guards. **Capture the outpost without using binoculars or shooting from outside its fence**. Keep Boomer with you through the capture." },
    de: { name: "Boomer geht vor", objective: "Schicke in **Far Cry 5** den freigeschalteten Boomer zu einem feindlichen Außenposten vor und lass ihn die Wachen markieren. **Erobere den Posten ohne Fernglas und ohne Schüsse von außerhalb des Zauns**. Behalte Boomer bis zur Eroberung bei dir." },
  },
  {
    id: "prepper-first-read", installments: ["fc-5"], moods: ["curious", "explore"], minutes: 25,
    en: { name: "Read Before Breaking", objective: "In **Far Cry 5**, find an unopened Prepper Stash and read its note before touching any switches. Work out its route from the note and the site itself, then **open the stash without using explosives or a guide**." },
    de: { name: "Erst lesen", objective: "Such in **Far Cry 5** ein ungeöffnetes Prepper-Versteck und lies seine Notiz, bevor du Schalter anfasst. Finde den Weg mit der Notiz und den Hinweisen vor Ort. **Öffne das Versteck ohne Sprengstoff oder Guide**." },
  },
  {
    id: "hope-county-dinner", installments: ["fc-5"], moods: ["relax", "progress"], minutes: 25,
    en: { name: "Rod Pays the Bills", objective: "In **Far Cry 5**, take your fishing rod to the nearest marked fishing spot. Catch and sell fish until the earnings cover one medkit, then **buy that medkit using only this trip's fishing money**. Do not sell stored loot." },
    de: { name: "Die Angel zahlt", objective: "Gehe in **Far Cry 5** mit deiner Angel zum nächsten markierten Angelplatz. Fange und verkaufe Fische, bis die Einnahmen ein Medikit decken. **Kaufe es nur mit dem Angelgeld dieses Ausflugs**. Verkaufe keine gelagerte Beute." },
  },
  {
    id: "chorizos-window", installments: ["fc-6"], moods: ["focused", "connect"], minutes: 20,
    en: { name: "Chorizo's Window", objective: "In **Far Cry 6**, with Chorizo unlocked, find an enemy checkpoint. Have him distract a guard while you disable an alarm, then **capture the checkpoint without letting an alarm sound**. Use his distraction before your first attack." },
    de: { name: "Chorizos Ablenkung", objective: "Such in **Far Cry 6** mit freigeschaltetem Chorizo einen feindlichen Kontrollpunkt. Lass ihn eine Wache ablenken, während du einen Alarm abschaltest. **Erobere den Kontrollpunkt, ohne dass Alarm ertönt**. Nutze seine Ablenkung vor deinem ersten Angriff." },
  },
  {
    id: "horseback-supply", installments: ["fc-6"], moods: ["explore", "focused"], minutes: 25,
    en: { name: "Off the Main Road", objective: "In **Far Cry 6**, start an available Supply Drop race with a horse ready. **Reach and collect the drop on horseback before its timer ends**, using trails instead of paved roads wherever they connect. No aircraft or fast travel." },
    de: { name: "Abseits der Hauptstraße", objective: "Starte in **Far Cry 6** mit bereitem Pferd ein verfügbares Rennen zu einer Vorratslieferung. **Erreiche und hole die Lieferung zu Pferd vor Ablauf der Zeit**. Nutze verbundene Pfade statt asphaltierter Straßen; keine Fluggeräte oder Schnellreise." },
  },
  {
    id: "camera-before-base", installments: ["fc-6"], moods: ["curious", "focused"], minutes: 25,
    en: { name: "Know Their Weakness", objective: "In **Far Cry 6**, scout an FND base with your phone and read the ammo weakness of three guards. Set up the right ammo at a workbench, then **capture the base using that ammo without a Supremo**." },
    de: { name: "Kenne ihre Schwäche", objective: "Spähe in **Far Cry 6** eine FND-Basis mit dem Handy aus und lies bei drei Wachen die Munitionsschwäche. Stelle an einer Werkbank passende Munition ein und **erobere die Basis damit, ohne einen Supremo zu nutzen**." },
  },
]);
