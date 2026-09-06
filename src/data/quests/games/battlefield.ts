import { defineGameQuests } from "../defineGameQuests";

export const battlefieldQuests = defineGameQuests("battlefield", [
  {
    id: "bf3-moving-supply", installments: ["bf-3"], moods: ["connect", "focused"], minutes: 30,
    en: { name: "Moving Supply Line", objective: "In **Battlefield 3 multiplayer**, play Support in Conquest. Move with your squad between objectives and **earn an ammo resupply score at three different flags**, placing ammo behind cover each time. Finish the round with your squad." },
    de: { name: "Nachschub unterwegs", objective: "Spiele in **Battlefield 3 im Mehrspielermodus** Versorger in Eroberung. Ziehe mit deinem Squad zwischen Zielen weiter und **bekomme an drei verschiedenen Flaggen Punkte für Munitionsnachschub**. Lege Munition jeweils in Deckung ab und beende die Runde mit dem Squad." },
  },
  {
    id: "bf3-mcom-guard", installments: ["bf-3"], moods: ["challenge", "focused"], minutes: 30,
    en: { name: "Stay with the Charge", objective: "In **Battlefield 3 multiplayer**, join Rush as an attacker. Help your squad reach an M-COM, then **arm one and stay near it until it explodes or is disarmed**. Keep defending that site instead of moving ahead; finish the round." },
    de: { name: "Bei der Ladung bleiben", objective: "Spiele in **Battlefield 3 im Mehrspielermodus** als Angreifer in Rush. Hilf deinem Squad zu einer M-COM. **Aktiviere eine und bleib in ihrer Nähe, bis sie explodiert oder entschärft wird**. Verteidige den Ort, statt vorzurücken, und beende die Runde." },
  },
  {
    id: "bf4-laser-team", installments: ["bf-4"], moods: ["connect", "focused"], minutes: 30,
    en: { name: "Hold the Lock", objective: "In **Battlefield 4 multiplayer**, with the PLD unlocked, play Recon beside an engineer teammate. Designate enemy vehicles and **earn one laser-designation assist before the round ends**. Keep cover and let your teammate take the shot." },
    de: { name: "Markierung halten", objective: "Spiele in **Battlefield 4 im Mehrspielermodus** mit freigeschaltetem PLD als Aufklärer neben einem Pionier. Markiere feindliche Fahrzeuge und **bekomme vor Rundenende einen Assist für Lasermarkierung**. Bleib in Deckung und überlasse deinem Mitspieler den Schuss." },
  },
  {
    id: "bf4-tank-pit-stop", installments: ["bf-4"], moods: ["connect", "progress"], minutes: 30,
    en: { name: "Tank Pit Stop", objective: "In **Battlefield 4 multiplayer**, play Engineer with a repair tool. Ride as a friendly tank's passenger, leave it only when it stops in cover, and **earn repair points in three separate repair stops**. Rejoin the tank after each stop and finish the round." },
    de: { name: "Boxenstopp für Panzer", objective: "Spiele in **Battlefield 4 im Mehrspielermodus** Pionier mit Reparaturwerkzeug. Fahre in einem eigenen Panzer mit und steige erst in Deckung aus. **Bekomme bei drei einzelnen Stopps Reparaturpunkte**, steige danach wieder ein und beende die Runde." },
  },
  {
    id: "bf1-periscope-watch", installments: ["bf-1"], moods: ["focused", "curious"], minutes: 30,
    en: { name: "Eyes over Cover", objective: "In **Battlefield 1 multiplayer**, with the Trench Periscope unlocked, play Scout near a flag your squad is defending. **Spot five different enemies through the periscope without leaving cover**, then stay with your squad until the round ends." },
    de: { name: "Blick über die Deckung", objective: "Spiele in **Battlefield 1 im Mehrspielermodus** mit freigeschaltetem Grabenperiskop als Späher nahe einer vom Squad verteidigten Flagge. **Markiere fünf verschiedene Gegner durch das Periskop aus der Deckung** und bleib bis Rundenende beim Squad." },
  },
  {
    id: "bf1-medic-follow-through", installments: ["bf-1"], moods: ["connect", "focused"], minutes: 30, sources: ["battlefield-safe-revives"],
    en: { name: "Back on Their Feet", objective: "In **Battlefield 1 multiplayer**, play Medic with a syringe and medical supplies. For three teammates, **revive them behind cover and give them healing before moving on**. Do not count exposed revives; finish the round helping your squad." },
    de: { name: "Wieder auf den Beinen", objective: "Spiele in **Battlefield 1 im Mehrspielermodus** Sanitäter mit Spritze und Heilvorräten. **Belebe drei Mitspieler in Deckung wieder und versorge sie mit Heilung**, bevor du weiterziehst. Ungeschützte Wiederbelebungen zählen nicht; hilf deinem Squad bis Rundenende." },
  },
  {
    id: "bfv-fortify-flag", installments: ["bf-v"], moods: ["create", "connect"], minutes: 30,
    en: { name: "Build the Defense", objective: "In **Battlefield V multiplayer**, choose a friendly flag with unfinished fortifications. **Build three pieces of cover that face an enemy approach**, then defend from the position you helped build until the flag changes hands or the round ends." },
    de: { name: "Verteidigung aufbauen", objective: "Nimm in **Battlefield V im Mehrspielermodus** eine eigene Flagge mit unfertigen Befestigungen. **Baue drei Deckungen in Richtung eines gegnerischen Zugangs**. Verteidige danach von dort, bis die Flagge den Besitzer wechselt oder die Runde endet." },
  },
  {
    id: "bfv-squad-rescue", installments: ["bf-v"], moods: ["connect", "challenge"], minutes: 30, sources: ["battlefield-safe-revives"],
    en: { name: "Smoke the Rescue", objective: "In **Battlefield V multiplayer**, play Medic with smoke available. **Use smoke to block enemy sight and revive three teammates**, moving into cover together after each rescue. Do not revive into clear enemy fire; finish the round." },
    de: { name: "Rettung im Rauch", objective: "Spiele in **Battlefield V im Mehrspielermodus** Sanitäter mit Rauch. **Versperre Gegnern mit Rauch die Sicht und belebe drei Mitspieler wieder**. Geht nach jeder Rettung in Deckung. Keine Wiederbelebung direkt ins offene Feuer; beende die Runde." },
  },
  {
    id: "bf2042-drone-scout", installments: ["bf-2042"], moods: ["curious", "connect"], minutes: 30,
    en: { name: "Scout the Next Flag", objective: "In **Battlefield 2042**, play Casper in Conquest. From cover near your squad, fly the recon drone over the next enemy flag and **spot five defenders before your squad pushes in**. Recall the drone and join the push; finish the round." },
    de: { name: "Die nächste Flagge", objective: "Spiele in **Battlefield 2042** Casper in Eroberung. Fliege aus Deckung nahe deinem Squad mit der Drohne über die nächste feindliche Flagge. **Markiere fünf Verteidiger vor dem Angriff**, hole die Drohne zurück, greife mit an und beende die Runde." },
  },
  {
    id: "bf2042-irish-shelter", installments: ["bf-2042"], moods: ["create", "connect"], minutes: 30,
    en: { name: "A Place to Hold", objective: "In **Battlefield 2042**, play Irish and place his deployable cover beside a contested objective, leaving teammates a clear way through. **Use that cover while earning one objective capture or defense score**, then stay with your squad through the round." },
    de: { name: "Ein Platz zum Halten", objective: "Spiele in **Battlefield 2042** Irish und stelle seine mobile Deckung an ein umkämpftes Ziel, ohne Mitspielern den Weg zu versperren. **Nutze sie und erhalte Punkte für eine Eroberung oder Verteidigung**. Bleib danach bis Rundenende beim Squad." },
  },
  {
    id: "bf6-behind-cover", installments: ["bf-6"], moods: ["connect", "challenge"], minutes: 30, sources: ["battlefield-safe-revives"],
    en: { name: "Behind Cover First", objective: "In **Battlefield 6 multiplayer**, play Support. Make a safe approach to a downed teammate, then **drag them into cover while reviving them**. Complete two safe rescues and finish the round; a revive still exposed to enemy fire does not count." },
    de: { name: "Erst in Deckung", objective: "Spiele in **Battlefield 6 im Mehrspielermodus** Support. Nähere dich einem gefallenen Mitspieler sicher und **ziehe ihn beim Wiederbeleben in Deckung**. Schaffe zwei sichere Rettungen und beende die Runde. Wer weiter im feindlichen Feuer liegt, zählt nicht." },
  },
  {
    id: "bf6-objective-supplies", installments: ["bf-6"], moods: ["connect", "focused"], minutes: 30,
    en: { name: "Keep the Push Going", objective: "In **Battlefield 6 multiplayer**, play Support with a Supply Bag. Place it behind cover near a contested objective and **earn resupply points there before helping capture the objective**. Move the bag forward with the next push and finish the round." },
    de: { name: "Den Angriff versorgen", objective: "Spiele in **Battlefield 6 im Mehrspielermodus** Support mit Nachschubtasche. Lege sie in Deckung an ein umkämpftes Ziel und **bekomme dort Nachschubpunkte, bevor du bei der Eroberung hilfst**. Nimm die Tasche beim Vorrücken mit und beende die Runde." },
  },
]);
