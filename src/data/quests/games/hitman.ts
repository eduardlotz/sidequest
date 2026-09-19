import { defineGameQuests } from "../defineGameQuests";

const trilogy = ["hitman-1", "hitman-2", "hitman-3"];

export const hitmanQuests = defineGameQuests("hitman", [
  {
    id: "empty-pockets",
    installments: trilogy,
    moods: ["challenge", "focused"],
    type: "challenge",
    tags: ["loadout", "three-attempts"],
    minutes: 30,
    minimum: 5,
    en: {
      name: "Empty Pockets",
      objective:
        "In **HITMAN 1, 2, or 3**, replay a completed campaign mission from its default starting location with every loadout and smuggled-item slot empty. **Eliminate the targets using only equipment found on the map and exit without killing non-targets**. Stop after success or three attempts.",
    },
    de: {
      name: "Leere Taschen",
      objective:
        "Wiederhole in **HITMAN 1, 2 oder 3** eine abgeschlossene Kampagnenmission am Standard-Startpunkt mit leeren Ausrüstungs- und Schmuggelplätzen. **Erledige die Ziele nur mit vor Ort gefundenen Gegenständen und verlasse die Karte, ohne Nicht-Ziele zu töten**. Nach Erfolg oder drei Versuchen ist Schluss.",
    },
  },
  {
    id: "spare-uniform",
    installments: trilogy,
    moods: ["focused", "challenge"],
    type: "challenge",
    tags: ["stealth", "no-detection"],
    minutes: 30,
    minimum: 5,
    en: {
      name: "Spare Uniform",
      objective:
        "In **HITMAN 1, 2, or 3**, replay a completed campaign mission and **use only disguises found lying on the map**, never clothes taken from a body. Eliminate the targets and exit without being compromised. Stop after success or three attempts.",
    },
    de: {
      name: "Uniform vom Haken",
      objective:
        "Wiederhole in **HITMAN 1, 2 oder 3** eine abgeschlossene Kampagnenmission und **nutze nur herumliegende Verkleidungen**, niemals Kleidung von einem Körper. Erledige die Ziele und entkomme, ohne enttarnt zu werden. Nach Erfolg oder drei Versuchen ist Schluss.",
    },
  },
  {
    id: "arranged-accident",
    installments: trilogy,
    moods: ["challenge", "focused"],
    type: "challenge",
    tags: ["new-approach", "three-attempts"],
    minutes: 30,
    minimum: 5,
    en: {
      name: "Looks Like an Accident",
      objective:
        "In **HITMAN 1, 2, or 3**, replay a completed campaign mission where every target has an accident opportunity. **Eliminate every target with a staged accident and exit without killing anyone else**. Stop after success or three attempts.",
    },
    de: {
      name: "Sieht nach Unfall aus",
      objective:
        "Wiederhole in **HITMAN 1, 2 oder 3** eine abgeschlossene Kampagnenmission, in der jedes Ziel durch einen Unfall sterben kann. **Erledige alle Ziele durch vorbereitete Unfälle und entkomme, ohne andere zu töten**. Nach Erfolg oder drei Versuchen ist Schluss.",
    },
  },
  {
    id: "follow-new-story",
    installments: trilogy,
    moods: ["curious", "overwhelmed", "progress"],
    type: "inspiration",
    tags: ["first-play", "story"],
    minutes: 30,
    minimum: 5,
    en: {
      name: "Follow the Story",
      objective:
        "Open an **unplayed campaign mission in HITMAN 1, 2, or 3** with Mission Story guidance enabled. Follow one story lead and let its conversations and opportunities introduce the location before you improvise the rest.",
    },
    de: {
      name: "Der Story folgen",
      objective:
        "Starte in **HITMAN 1, 2 oder 3** eine noch nicht gespielte Kampagnenmission mit aktivierter Missionsstory-Führung. Folge einer Story-Spur und lass dir den Ort durch ihre Gespräche und Gelegenheiten zeigen, bevor du den Rest improvisierst.",
    },
  },
]);
