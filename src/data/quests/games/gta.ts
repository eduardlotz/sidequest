import { defineGameQuests } from "../defineGameQuests";

export const gtaQuests = defineGameQuests("gta", [
  {
    id: "iv-bowling-pickup", installments: ["gta-iv"], moods: ["connect", "nostalgic"], minutes: 25,
    en: { name: "Pick Them Up", objective: "In **GTA IV's story mode**, call an available friend for bowling. Pick them up yourself, drive to the alley without a wanted level, and **finish a full bowling game before driving them home**. Use no taxi skips." },
    de: { name: "Hol sie ab", objective: "Ruf im **Story-Modus von GTA IV** einen verfügbaren Freund zum Bowling an. Hole ihn selbst ab, fahre ohne Fahndungssterne zur Bahn und **beende ein ganzes Bowling-Spiel, bevor du ihn heimfährst**. Keine übersprungenen Taxifahrten." },
  },
  {
    id: "iv-pool-bank", installments: ["gta-iv"], moods: ["focused", "relax"], minutes: 20,
    en: { name: "Off the Cushion", objective: "In **GTA IV's story mode**, start a pool game at an unlocked table. **Pocket one of your balls after it bounces off a cushion**, then finish the game. If you lose before landing the shot, try once more." },
    de: { name: "Über Bande", objective: "Starte im **Story-Modus von GTA IV** ein Billardspiel an einem freigeschalteten Tisch. **Versenke eine deiner Kugeln, nachdem sie eine Bande berührt hat**, und beende das Spiel. Verlierst du vorher, versuche es noch einmal." },
  },
  {
    id: "iv-police-terminal", installments: ["gta-iv"], moods: ["progress", "focused"], minutes: 25,
    en: { name: "From the Terminal", objective: "In **GTA IV's story mode**, once police computer jobs are available, park a police car safely and select one current crime. **Resolve that dispatch and return the same car to a police station**, with your wanted level cleared." },
    de: { name: "Vom Polizeicomputer", objective: "Parke im **Story-Modus von GTA IV** mit freigeschalteten Polizeicomputer-Aufträgen einen Polizeiwagen sicher und wähle ein aktuelles Verbrechen. **Erledige den Einsatz und bring denselben Wagen zu einer Polizeistation zurück**, ohne Fahndungssterne." },
  },
  {
    id: "iv-taxi-window", installments: ["gta-iv"], moods: ["low-energy", "curious"], minutes: 15,
    en: { name: "Through the Window", objective: "In **GTA IV's story mode**, hail a taxi and choose an unlocked destination across a bridge. **Ride there without skipping or asking the driver to hurry**, then walk back to the bridge entrance to see the route from the pavement." },
    de: { name: "Aus dem Fenster", objective: "Halte im **Story-Modus von GTA IV** ein Taxi an und wähle ein freigeschaltetes Ziel auf der anderen Seite einer Brücke. **Fahre ohne Überspringen und ohne Eile-Ansage mit**. Gehe danach zum Brückenzugang zurück und sieh dir den Weg vom Gehweg aus an." },
  },
  {
    id: "iv-darts-finish", installments: ["gta-iv"], moods: ["focused", "nostalgic"], minutes: 20,
    en: { name: "Leave a Double", objective: "In **GTA IV's story mode**, start a darts game and plan your throws to leave an even finishing score. **Win with the required double**, or finish three full games trying. No reloading a missed throw." },
    de: { name: "Ein Doppel zum Schluss", objective: "Starte im **Story-Modus von GTA IV** ein Dartspiel und plane deine Würfe so, dass eine gerade Restpunktzahl bleibt. **Gewinne mit dem nötigen Doppelfeld** oder beende drei ganze Versuche. Lade nach einem Fehlwurf nicht neu." },
  },
  {
    id: "iv-toll-run", installments: ["gta-iv"], moods: ["relax", "focused"], minutes: 15,
    en: { name: "Keep the Change", objective: "In **GTA IV's story mode**, drive your current car across an unlocked toll bridge. Stop and pay the toll, turn around legally on the other side, and **return through the toll without a collision or wanted star**." },
    de: { name: "Kleingeld dabei", objective: "Fahre im **Story-Modus von GTA IV** mit deinem aktuellen Wagen über eine freigeschaltete Mautbrücke. Halte an und bezahle, wende auf der anderen Seite regelgerecht und **fahre ohne Zusammenstoß oder Fahndungsstern durch die Mautstelle zurück**." },
  },
  {
    id: "v-country-bike", installments: ["gta-v"], moods: ["explore", "restless"], minutes: 30, sources: ["gta-free-roam"],
    en: { name: "Dirt over Asphalt", objective: "In **GTA V's story mode**, take a dirt bike from Sandy Shores toward Mount Chiliad with the radar off. Follow dirt trails to the summit, then **park beside the cable-car station at the top**. No paved-road shortcuts or helicopter lifts." },
    de: { name: "Erde statt Asphalt", objective: "Fahre im **Story-Modus von GTA V** mit einem Dirtbike von Sandy Shores Richtung Mount Chiliad und schalte das Radar aus. Folge Feldwegen zum Gipfel und **parke neben der Seilbahnstation oben**. Keine Abkürzungen über Asphalt oder Helikopterflüge." },
  },
  {
    id: "v-taxi-shift", installments: ["gta-v"], moods: ["focused", "relax"], minutes: 25,
    en: { name: "Three Fares", objective: "In **GTA V's story mode**, start taxi work in a taxi. **Deliver three fares in the same car without crashing or gaining a wanted level**. Stop at each destination before the passenger exits; any collision restarts the count." },
    de: { name: "Drei Fahrgäste", objective: "Starte im **Story-Modus von GTA V** Taxiarbeit in einem Taxi. **Liefere drei Fahrgäste im selben Wagen ohne Unfall oder Fahndungssterne ab**. Halte an jedem Ziel an, bevor der Gast aussteigt; ein Zusammenstoß setzt den Zähler zurück." },
  },
  {
    id: "v-flight-school", installments: ["gta-v"], moods: ["progress", "challenge"], minutes: 20,
    en: { name: "Back to Flight School", objective: "In **GTA V's story mode**, visit the unlocked Flight School and choose the first lesson where you lack gold. **Earn gold or finish three attempts**, keeping the same lesson. Do not switch characters to change flying skill midway." },
    de: { name: "Zurück zur Flugschule", objective: "Besuche im **Story-Modus von GTA V** die freigeschaltete Flugschule und nimm die erste Lektion ohne Gold. **Hole Gold oder beende drei Versuche** in derselben Lektion. Wechsle zwischendurch nicht für bessere Flugwerte die Figur." },
  },
  {
    id: "v-submarine-return", installments: ["gta-v"], moods: ["explore", "curious"], minutes: 25, sources: ["gta-free-roam"],
    en: { name: "Below the Coast", objective: "In **GTA V's story mode**, after buying the Sonar Collections Dock, take its submarine out. Use Trackify to **collect one remaining nuclear-waste barrel and return to the dock in the same submarine**. Do not switch characters during the trip." },
    de: { name: "Unter der Küste", objective: "Fahre im **Story-Modus von GTA V** nach dem Kauf des Sonar-Sammeldocks mit dessen U-Boot hinaus. **Sammle mit Trackify ein übriges Atommüllfass und kehre im selben U-Boot zum Dock zurück**. Wechsle während des Ausflugs nicht die Figur." },
  },
  {
    id: "v-triathlon-pace", installments: ["gta-v"], moods: ["restless", "challenge"], minutes: 20,
    en: { name: "Three Ways Home", objective: "In **GTA V's story mode**, enter the unlocked Vespucci Beach triathlon. **Finish the swim, bike ride, and run without using cheats or restarting a stage**. Stay with the full event even if you fall behind." },
    de: { name: "Dreifach ins Ziel", objective: "Starte im **Story-Modus von GTA V** den freigeschalteten Triathlon am Vespucci Beach. **Beende Schwimmen, Radfahren und Laufen ohne Cheats oder Neustart einer Etappe**. Bleib bis zum Ende dabei, auch wenn du zurückfällst." },
  },
  {
    id: "v-golf-nine", installments: ["gta-v"], moods: ["relax", "focused"], minutes: 25,
    en: { name: "Play It Where It Lies", objective: "In **GTA V's story mode**, start a nine-hole round at the golf club. **Finish all nine holes without restarting a hole**, playing every bad landing from where the game leaves the ball. Keep the same character through the round." },
    de: { name: "Spielen, wo er liegt", objective: "Starte im **Story-Modus von GTA V** eine Runde über neun Löcher im Golfclub. **Beende alle neun ohne Loch-Neustart** und spiele auch schlechte Lagen dort weiter, wo das Spiel den Ball ablegt. Behalte dieselbe Figur für die ganze Runde." },
  },
]);
