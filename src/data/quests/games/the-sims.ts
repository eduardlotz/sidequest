import { defineGameQuests } from "../defineGameQuests";

export const theSimsQuests = defineGameQuests("the-sims", [
  {
    id: "sims-3-one-promised-wish",
    moods: ["progress", "focused"],
    type: "objective",
    tags: ["current-save"],
    minutes: 20,
    minimum: 3,
    installments: ["sims-3"],
    en: {
      name: "A Promised Wish",
      objective: "In **The Sims 3**, pick one everyday wish your active Sim can fulfill with people or objects already nearby. Promise that wish and **play until it is fulfilled**. Leave the lifetime wish for another day.",
    },
    de: {
      name: "Ein versprochener Wunsch",
      objective: "Wähle in **Die Sims 3** einen Alltagswunsch deines aktiven Sims, den du mit Leuten oder Dingen in der Nähe erfüllen kannst. Merke ihn vor und **spiele, bis der Wunsch erfüllt ist**. Der Lebenswunsch kann warten.",
    },
  },
  {
    id: "sims-3-town-on-foot",
    moods: ["explore", "curious"],
    type: "objective",
    tags: ["exploration", "current-save"],
    minutes: 25,
    minimum: 5,
    installments: ["sims-3"],
    en: {
      name: "Across Town",
      objective: "In **The Sims 3**, choose a public lot with an object your Sim can use. Follow your Sim from home through the open town, **use that object at the lot, then return home**. Pick somewhere close enough for the trip back.",
    },
    de: {
      name: "Quer durch die Stadt",
      objective: "Wähle in **Die Sims 3** ein öffentliches Grundstück mit einem Gegenstand, den dein Sim benutzen kann. Begleite ihn von zu Hause durch die offene Stadt, **benutze den Gegenstand dort und kehr dann nach Hause zurück**. Such ein Ziel, von dem der Rückweg nicht zu weit ist.",
    },
  },
  {
    id: "sims-3-matching-pattern",
    moods: ["create", "relax"],
    type: "creation",
    tags: ["decorating"],
    minutes: 20,
    minimum: 3,
    installments: ["sims-3"],
    en: {
      name: "Matching Pattern",
      objective: "In **The Sims 3**, use Create a Style on two pieces of furniture in the same room. Copy a color or pattern from one to the other, **save the room, and see both pieces together in Live Mode**.",
    },
    de: {
      name: "Passendes Muster",
      objective: "Nutze in **Die Sims 3** „Erstelle einen Stil“ für zwei Möbelstücke im selben Raum. Übertrage eine Farbe oder ein Muster von einem aufs andere, **speichere und sieh dir beide Möbelstücke im Live-Modus zusammen an**.",
    },
  },
  {
    id: "sims-4-aspiration-step",
    moods: ["progress", "focused"],
    type: "objective",
    tags: ["current-save"],
    minutes: 25,
    minimum: 3,
    installments: ["sims-4"],
    en: {
      name: "One Aspiration Step",
      objective: "In **The Sims 4**, open your active Sim's aspiration and choose a listed goal you can do today with what is already available. **Complete that goal and watch it get checked off**. You do not need to finish the whole aspiration.",
    },
    de: {
      name: "Ein Schritt zum Bestreben",
      objective: "Öffne in **Die Sims 4** das Bestreben deines aktiven Sims. Wähle ein angezeigtes Ziel, das du heute mit dem Vorhandenen erreichen kannst, und **spiele, bis es abgehakt ist**. Das ganze Bestreben muss nicht fertig werden.",
    },
  },
  {
    id: "sims-4-room-in-use",
    moods: ["create", "relax"],
    type: "creation",
    tags: ["building", "decorating"],
    minutes: 30,
    minimum: 5,
    installments: ["sims-4"],
    en: {
      name: "Room in Use",
      objective: "In **The Sims 4**, use Build Mode to add a small room to a household with enough space and money. Give it a door and one usable object, then **save and have a Sim use that object**.",
    },
    de: {
      name: "Ein Raum zum Benutzen",
      objective: "Bau in **Die Sims 4** im Bau-Modus einen kleinen Raum an ein Haus mit genug Platz und Geld an. Setz eine Tür und einen benutzbaren Gegenstand hinein. **Speichere und lass einen Sim den Gegenstand benutzen**.",
    },
  },
  {
    id: "sims-4-emotional-conversation",
    moods: ["curious", "focused"],
    type: "experiment",
    tags: ["dialogue", "new-approach"],
    minutes: 15,
    minimum: 3,
    installments: ["sims-4"],
    en: {
      name: "Read the Mood",
      objective: "In **The Sims 4**, pick a Sim with an emotion-specific social interaction available. Talk to one acquaintance normally, then **use an interaction marked for your Sim's current emotion with that same person**. See how the conversation changes.",
    },
    de: {
      name: "Der Stimmung folgen",
      objective: "Wähle in **Die Sims 4** einen Sim, der eine soziale Interaktion passend zu seiner aktuellen Stimmung nutzen kann. Sprich erst ganz normal mit einem Bekannten und **nutze dann bei derselben Person eine stimmungsabhängige Interaktion**. Schau, wie sich das Gespräch verändert.",
    },
  },
]);
