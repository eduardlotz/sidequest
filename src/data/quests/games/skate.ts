import { defineGameQuests } from "../defineGameQuests";

export const skateQuests = defineGameQuests("skate", [
  {
    "id": "three-street-tricks",
    "moods": [
      "nostalgic",
      "restless"
    ],
    "type": "objective",
    "tags": [
      "skating"
    ],
    "minutes": 15,
    "minimum": 3,
    "en": {
      "name": "One Street Line",
      "objective": "In **Skate 3**, set a session marker by a familiar low ledge. **Land a kickflip, grind the ledge, and land a pop shove-it in one rolling line**. Use your usual difficulty and retry from the marker after a bail."
    },
    "de": {
      "name": "Eine Street-Line",
      "objective": "Setze in **Skate 3** eine Session-Markierung an einer bekannten niedrigen Kante. **Lande einen Kickflip, grinde die Kante und lande einen Pop Shove-it in einer rollenden Line**. Nutze deine übliche Schwierigkeit und beginne nach einem Sturz wieder an der Markierung."
    },
    "installments": [
      "skate-3"
    ]
  },
  {
    "id": "own-the-spot",
    "moods": [
      "challenge",
      "focused"
    ],
    "type": "challenge",
    "tags": [
      "skating",
      "three-attempts"
    ],
    "minutes": 15,
    "minimum": 2,
    "en": {
      "name": "Own the Spot",
      "objective": "In **Skate 3**, replay an unlocked Own the Spot challenge. **Beat its Own It score without repeating a scored trick in the same run**. Finish after success or three attempts."
    },
    "de": {
      "name": "Der Spot gehört dir",
      "objective": "Wiederhole in **Skate 3** eine freigeschaltete Own-the-Spot-Challenge. **Überbiete die Own-It-Punktzahl, ohne einen gewerteten Trick im selben Lauf zu wiederholen**. Nach Erfolg oder drei Versuchen ist Schluss."
    },
    "installments": [
      "skate-3"
    ]
  },
  {
    "id": "quick-drop-link",
    "moods": [
      "create",
      "focused"
    ],
    "type": "creation",
    "tags": [
      "skating",
      "building"
    ],
    "minutes": 20,
    "minimum": 3,
    "en": {
      "name": "One Prop Spot",
      "objective": "With Quick Drop unlocked in **skate. (2025)**, place a grindable prop beside a low ledge without blocking a challenge. **Link a grind on each in one line and roll away**. Remove the prop afterward."
    },
    "de": {
      "name": "Ein Teil, ein Spot",
      "objective": "Platziere in **skate. (2025)** mit freigeschaltetem Quick Drop ein grindbares Objekt neben einer niedrigen Kante, ohne eine Challenge zu blockieren. **Grinde erst an deinem Objekt, dann an der Kante und rolle ohne Sturz weiter**. Entferne das Objekt danach."
    },
    "installments": [
      "skate-2025"
    ]
  },
  {
    "id": "san-van-switch",
    "moods": [
      "curious",
      "explore"
    ],
    "type": "experiment",
    "tags": [
      "skating",
      "new-approach"
    ],
    "minutes": 15,
    "minimum": 3,
    "en": {
      "name": "Same Rail, Switch",
      "objective": "In **skate. (2025)**, set a session marker at an unfamiliar low rail. **Land a 50-50 grind in regular stance, then land it in switch** on the same rail. Roll away after each and compare the approach."
    },
    "de": {
      "name": "Dasselbe Rail, Switch",
      "objective": "Setz in **skate. (2025)** eine Session-Markierung an einer niedrigen Rail, die du noch nicht gefahren bist. **Lande dort einen 50-50-Grind erst normal und dann in Switch**. Rolle beide Male weiter und achte darauf, wie sich die Anfahrt ändert."
    },
    "installments": [
      "skate-2025"
    ]
  }
]);
