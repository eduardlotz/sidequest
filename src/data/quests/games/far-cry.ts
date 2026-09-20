import { defineGameQuests } from "../defineGameQuests";

export const farCryQuests = defineGameQuests("far-cry", [
  {
    id: "primal-owl-opening",
    installments: ["fc-primal"],
    moods: ["challenge", "focused"],
    type: "challenge",
    tags: ["scouting", "no-detection"],
    minutes: 25,
    minimum: 5,
    en: {
      name: "Owl Goes First",
      objective:
        "In **Far Cry Primal**, with Owl: Attack unlocked, scout an uncaptured outpost through your owl. **Have the owl eliminate a horn blower, then capture the outpost without reinforcements being called**. If a horn sounds, finish the fight and stop the attempt.",
    },
    de: {
      name: "Die Eule beginnt",
      objective:
        "Spähe in **Far Cry Primal** mit freigeschaltetem Eulenangriff einen noch nicht eroberten Außenposten durch deine Eule aus. **Lass sie einen Hornbläser ausschalten und erobere den Posten, ohne dass Verstärkung gerufen wird**. Ertönt ein Horn, beende den Kampf und den Versuch.",
    },
  },
  {
    id: "fc3-tower-landmark",
    installments: ["fc-3"],
    moods: ["explore", "curious"],
    type: "objective",
    tags: ["exploration", "no-fast-travel"],
    minutes: 25,
    minimum: 5,
    en: {
      name: "From the Tower",
      objective:
        "In **Far Cry 3**, climb an unfinished radio tower and disable its scrambler. Pick a building visible from the top, then **reach that building without opening the map or placing a waypoint**.",
    },
    de: {
      name: "Vom Turm aus",
      objective:
        "Klettere in **Far Cry 3** auf einen unfertigen Funkturm und schalte den Störsender ab. Wähle von oben ein sichtbares Gebäude und **erreiche es, ohne die Karte zu öffnen oder einen Wegpunkt zu setzen**.",
    },
  },
  {
    id: "fc4-outpost-master",
    installments: ["fc-4"],
    moods: ["challenge", "focused"],
    type: "challenge",
    tags: ["stealth", "no-detection", "three-attempts"],
    minutes: 25,
    minimum: 5,
    en: {
      name: "One Silent Route",
      objective:
        "In **Far Cry 4 Outpost Master**, replay a familiar outpost and scout every guard before entering. Plan one route through the alarms and isolated guards, then **liberate the outpost without an alarm sounding**. Stop after success or three attempts.",
    },
    de: {
      name: "Eine lautlose Route",
      objective:
        "Wiederhole in **Far Cry 4 Outpost Master** einen vertrauten Außenposten und markiere vor dem Betreten alle Wachen. Plane eine Route entlang der Alarmanlagen und einzelner Gegner und **erobere den Posten, ohne einen Alarm auszulösen**. Nach Erfolg oder drei Versuchen ist Schluss.",
    },
  },
  {
    id: "fc4-buzzer-tower",
    installments: ["fc-4"],
    moods: ["explore", "curious"],
    type: "objective",
    tags: ["exploration", "traversal"],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Buzzer to Bell",
      objective:
        "In **Far Cry 4**, take a Buzzer to an unliberated bell tower but land at the base instead of on top. **Climb the tower by its intended route and disable the broadcast**, then use the view to choose your next destination.",
    },
    de: {
      name: "Buzzer zum Turm",
      objective:
        "Fliege in **Far Cry 4** mit einem Buzzer zu einem noch nicht befreiten Glockenturm, lande aber an seinem Fuß statt oben. **Klettere auf dem vorgesehenen Weg hinauf und schalte die Übertragung ab**. Wähle von dort dein nächstes Ziel.",
    },
  },
  {
    id: "fc4-elephant-entry",
    installments: ["fc-4"],
    moods: ["curious", "focused"],
    type: "experiment",
    tags: ["new-approach", "abilities"],
    minutes: 25,
    minimum: 5,
    en: {
      name: "Elephant Entry",
      objective:
        "In **Far Cry 4**, with Elephant Rider unlocked, approach a hostile outpost on an elephant. Break through an outer barrier and defeat three guards from the saddle, then **finish the outpost on foot and compare how the loud entry changed the fight**.",
    },
    de: {
      name: "Angriff per Elefant",
      objective:
        "Reite in **Far Cry 4** mit freigeschaltetem Elefantenreiten zu einem feindlichen Außenposten. Durchbrich eine äußere Barriere und besiege drei Wachen vom Sattel aus. **Erobere den Posten zu Fuß und vergleiche, wie der laute Einstieg den Kampf verändert hat**.",
    },
  },
  {
    id: "fc4-arena-scavenger",
    installments: ["fc-4"],
    moods: ["challenge", "restless"],
    type: "challenge",
    tags: ["loadout", "three-attempts"],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Arena Scavenger",
      objective:
        "In **Far Cry 4's Shanath Arena**, begin a battle with its supplied weapon. After that weapon runs dry, take one dropped enemy weapon and use no other firearm. **Win the battle with those two weapons only** or stop after three attempts.",
    },
    de: {
      name: "Arena-Plünderer",
      objective:
        "Beginne in der **Shanath-Arena von Far Cry 4** einen Kampf mit der bereitgestellten Waffe. Wenn sie leer ist, nimm genau eine fallengelassene Gegnerwaffe und keine weitere Schusswaffe. **Gewinne nur mit diesen beiden Waffen** oder hör nach drei Versuchen auf.",
    },
  },
  {
    id: "fc5-boomer-recon",
    installments: ["fc-5"],
    moods: ["curious", "focused"],
    type: "experiment",
    tags: ["scouting", "new-approach"],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Boomer Goes First",
      objective:
        "In **Far Cry 5**, with Boomer recruited, send him ahead to mark the guards at an enemy outpost. **Enter using only his marks, disable one alarm, and leave the outpost again without opening the binoculars**. Compare what you noticed through Boomer with your usual scouting.",
    },
    de: {
      name: "Boomer geht vor",
      objective:
        "Schicke in **Far Cry 5** den freigeschalteten Boomer voraus, damit er die Wachen eines feindlichen Außenpostens markiert. **Dringe nur mit seinen Markierungen ein, schalte einen Alarm aus und verlasse den Posten wieder, ohne das Fernglas zu öffnen**. Vergleiche Boomers Aufklärung mit deiner üblichen Vorgehensweise.",
    },
  },
  {
    id: "fc6-camera-before-base",
    installments: ["fc-6"],
    moods: ["curious", "focused"],
    type: "experiment",
    tags: ["scouting", "loadout"],
    minutes: 25,
    minimum: 5,
    en: {
      name: "Know Their Weakness",
      objective:
        "In **Far Cry 6**, scout an FND base with your phone and read the ammo weakness of three guards. Set up matching ammo at a workbench, then **capture the base with that ammo and without using a Supremo**. Notice where the prepared loadout changes your route.",
    },
    de: {
      name: "Kenne ihre Schwäche",
      objective:
        "Spähe in **Far Cry 6** eine FND-Basis mit dem Handy aus und lies bei drei Wachen die Munitionsschwäche. Stelle an einer Werkbank passende Munition ein und **erobere die Basis damit, ohne einen Supremo zu nutzen**. Achte darauf, wie die vorbereitete Ausrüstung deinen Weg verändert.",
    },
  },
]);
