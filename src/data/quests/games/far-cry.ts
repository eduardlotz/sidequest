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
