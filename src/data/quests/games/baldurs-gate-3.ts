import { defineGameQuests } from "../defineGameQuests";

// Encounter and companion ideas from players:
// https://www.reddit.com/r/BaldursGate3/comments/1si2tos/most_fun_stuff_youve_done_in_combat/
// https://www.reddit.com/r/BaldursGate3/comments/1f7bky6/custom_mode_challenges/
// https://www.reddit.com/r/BaldursGate3/comments/17yrsd2/this_30_on_4_fight_at_the_temple_of_grief_is/
export const baldursGate3Quests = defineGameQuests("baldurs-gate-3", [
  {
    id: "improvised-finish",
    moods: ["challenge", "focused"],
    type: "challenge",
    tags: ["new-approach", "three-attempts"],
    minutes: 25,
    minimum: 5,
    en: {
      name: "Improvised Finish",
      objective: "In **Baldur’s Gate 3**, enter an ordinary fight with a throwable object or improvised weapon available. **Defeat one enemy with that object and finish the fight**, or stop after three attempts. Choose an object your character can actually lift.",
    },
    de: {
      name: "Improvisierter Treffer",
      objective: "Such dir in **Baldur’s Gate 3** einen normalen Kampf und nimm etwas mit, das du werfen oder als Waffe benutzen kannst. **Besiege damit einen Gegner und bring den Kampf zu Ende**, oder hör nach drei Versuchen auf. Deine Figur muss den Gegenstand heben können.",
    },
  },
  {
    id: "two-person-detour",
    moods: ["curious", "focused"],
    type: "experiment",
    tags: ["dialogue", "new-approach"],
    minutes: 35,
    minimum: 5,
    en: {
      name: "Two-Person Detour",
      objective: "In **Baldur’s Gate 3**, bring one companion to a nearby optional conversation while the others wait at camp. **Finish the conversation as a pair**, listen for their reaction, then restore your party.",
    },
    de: {
      name: "Zu zweit unterwegs",
      objective: "Geh in **Baldur’s Gate 3** nur mit einer Begleitperson zu einem optionalen Gespräch in der Nähe. Die anderen warten im Lager. **Führt das Gespräch zu zweit zu Ende**, achte auf ihre Reaktion und hol danach die Gruppe wieder zusammen.",
    },
  },
  {
    id: "hold-the-door",
    moods: ["challenge", "focused"],
    type: "challenge",
    tags: ["new-approach"],
    minutes: 30,
    minimum: 5,
    en: {
      name: "Hold the Door",
      objective: "In **Baldur’s Gate 3**, choose a reachable fight with a narrow entrance and a surface or control effect ready. Start outside the entrance, use that effect to slow enemies there, and **finish the fight while holding your position**.",
    },
    de: {
      name: "Die Tür halten",
      objective: "Such dir in **Baldur’s Gate 3** einen Kampf mit engem Eingang und halte einen Flächen- oder Kontrolleffekt bereit. Bleib vor der Tür, bremse die Gegner dort aus und **bring den Kampf von dieser Position aus zu Ende**.",
    },
  },
  {
    id: "read-before-you-answer",
    moods: ["curious", "progress"],
    type: "objective",
    tags: ["dialogue", "story"],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Read, Then Reply",
      objective: "In **Baldur’s Gate 3**, find a nearby letter, journal, or note tied to an open quest. Read it before speaking to the next relevant character, then **finish that conversation using what you learned**.",
    },
    de: {
      name: "Erst lesen, dann reden",
      objective: "Finde in **Baldur’s Gate 3** einen Brief, ein Tagebuch oder eine Notiz zu einer offenen Quest. Lies den Text, bevor du mit der nächsten beteiligten Person sprichst, und **nutze das neue Wissen im Gespräch**.",
    },
  },
]);
