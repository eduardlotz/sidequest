import { defineGameQuests } from "../defineGameQuests";

// Backboard defense as a focused training challenge:
// https://www.reddit.com/r/RocketLeagueSchool/comments/ew3201/

export const rocketLeagueQuests = defineGameQuests("rocket-league", [
  {
    "id": "small-pad-match",
    "moods": [
      "challenge",
      "focused"
    ],
    "type": "challenge",
    "tags": [
      "full-match",
      "three-attempts"
    ],
    "minutes": 25,
    "minimum": 5,
    "en": {
      "name": "Small Pads Only",
      "objective": "In **Rocket League**, play a Soccar exhibition against bots with normal boost settings. **Finish the match using only small boost pads and register a goal or save**. Starting boost is allowed. Stop after success or three matches."
    },
    "de": {
      "name": "Nur kleine Pads",
      "objective": "Spiel in **Rocket League** ein Soccar-Schaukampf-Match gegen Bots mit normalen Boost-Einstellungen. **Nutz nur kleine Boost-Pads und erziele ein Tor oder halte einen Schuss**. Spiel das Match zu Ende; Startboost ist erlaubt. Hör nach dem Erfolg oder drei Matches auf."
    }
  },
  {
    "id": "wall-bank-goal",
    "moods": [
      "challenge",
      "focused"
    ],
    "type": "challenge",
    "tags": [
      "full-match",
      "three-attempts"
    ],
    "minutes": 25,
    "minimum": 5,
    "en": {
      "name": "Off the Wall",
      "objective": "In **Rocket League**, try side-wall bank shots in a Soccar exhibition against bots. **Score after your shot bounces off a side wall, then finish the match**. After three full matches, stop even if none went in."
    },
    "de": {
      "name": "Über die Wand",
      "objective": "Probiere in **Rocket League** im Soccar-Schaukampf gegen Bots Schüsse über die Seitenwand. **Erziele ein Tor, nachdem dein Schuss an der Seitenwand abprallt, und beende das Match**. Nach drei ganzen Matches ist auch ohne Treffer Schluss."
    }
  },
  {
    "id": "back-post-route",
    "moods": [
      "connect",
      "focused"
    ],
    "type": "objective",
    "tags": [
      "co-op",
      "support"
    ],
    "minutes": 10,
    "minimum": 3,
    "en": {
      "name": "Back Post Route",
      "objective": "In **Rocket League Casual 2v2**, rotate back toward the goalpost farther from the ball after your attacks, collecting small pads on the way. **Use that return route three times and finish the match** without abandoning your teammate."
    },
    "de": {
      "name": "Zum hinteren Pfosten",
      "objective": "Kehre in **Rocket League Casual 2v2** nach deinen Angriffen zum ballfernen Torpfosten zurück und sammle kleine Pads auf dem Weg. **Nutze den Rückweg dreimal und beende das Match**, ohne dein Teammitglied allein zu lassen."
    }
  },
  {
    id: "backboard-saves",
    moods: ["challenge", "focused"],
    type: "challenge",
    tags: ["three-attempts"],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Off the Backboard",
      objective: "In **Rocket League**, open a backboard-defense training pack with at least three shots. Try each of the first three shots up to three times. **Save each shot once**, then stop after the third shot's final try.",
    },
    de: {
      name: "Weg vom Backboard",
      objective: "Öffne in **Rocket League** ein Backboard-Defensivtraining mit mindestens drei Schüssen. Versuch, **jeden der ersten drei Schüsse einmal zu halten**. Du hast pro Schuss höchstens drei Versuche; danach ist Schluss.",
    },
  },
  {
    id: "training-pack-first-three",
    moods: ["focused", "curious"],
    type: "objective",
    tags: [],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Three Training Shots",
      objective: "Open a **Rocket League shooting training pack** with at least three shots. Take one attempt at each of the first three shots, then **return to the pack menu**.",
    },
    de: {
      name: "Drei Trainingsschüsse",
      objective: "Öffne in **Rocket League** ein Torschusstraining mit mindestens drei Schüssen. Versuch die ersten drei Schüsse je einmal und **geh zurück zur Pack-Auswahl**.",
    },
  },
  {
    id: "kickoff-follow-up",
    moods: ["challenge", "focused"],
    type: "challenge",
    tags: ["vs-bots", "three-attempts", "full-match"],
    minutes: 25,
    minimum: 5,
    en: {
      name: "Kickoff Follow-Up",
      objective: "In a **Rocket League Soccar exhibition against bots**, take the first kickoff and score before the next kickoff. **Finish the match after scoring**, or stop after three matches without a goal.",
    },
    de: {
      name: "Nach dem Anstoß",
      objective: "Spiel in **Rocket League** ein Soccar-Schaukampf-Match gegen Bots, nimm den ersten Anstoß und triff vor dem nächsten Anstoß. **Beende das Match nach dem Tor** oder hör nach drei Matches ohne Treffer auf.",
    },
  },
  {
    id: "new-car-preset",
    moods: ["create", "curious"],
    type: "experiment",
    tags: [],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Try Another Car",
      objective: "Choose a different car body in your **Rocket League garage**, save it as a preset, then take that car into a Soccar exhibition against bots. **Finish the match with the preset equipped.**",
    },
    de: {
      name: "Ein anderes Auto fahren",
      objective: "Wähl in deiner **Rocket-League-Garage** eine andere Karosserie und speichere sie als Preset. Spiel damit ein Soccar-Schaukampf-Match gegen Bots und **beende es mit dem Preset ausgerüstet**.",
    },
  },
  {
    id: "freeplay-ground-shot",
    moods: ["restless", "focused"],
    type: "objective",
    tags: [],
    minutes: 10,
    minimum: 2,
    en: {
      name: "Ground Shot",
      objective: "In **Rocket League Free Play**, keep the ball on the ground and take shots from outside the box. **Score once**, then end the training session.",
    },
    de: {
      name: "Schuss vom Boden",
      objective: "Lass den Ball in **Rocket League Free Play** am Boden und schieß von außerhalb des Strafraums aufs Tor. **Triff einmal** und beende danach das Training.",
    },
  },
  {
    id: "one-touch-clearance",
    moods: ["focused", "connect"],
    type: "objective",
    tags: ["full-match", "support"],
    minutes: 25,
    minimum: 5,
    en: {
      name: "Clear It Wide",
      objective: "In a **Rocket League Casual 2v2** match, when the ball enters your half, make one touch that sends it toward a side wall instead of the middle. **Finish the match after the clearance.**",
    },
    de: {
      name: "Zur Seite klären",
      objective: "Spiel in **Rocket League Casual 2v2** den Ball einmal zur Seitenwand, wenn er in deine Hälfte kommt, statt ihn in die Mitte zu spielen. **Beende das Match nach der Klärung.**",
    },
  },
  {
    id: "no-jump-duel",
    moods: ["challenge", "focused"],
    type: "challenge",
    tags: ["vs-bots", "full-match"],
    minutes: 25,
    minimum: 5,
    en: {
      name: "Stay on the Ground",
      objective: "In a **Rocket League Soccar exhibition against the easiest bots**, play a full match without jumping. **Win the match**, or stop after three matches without a win.",
    },
    de: {
      name: "Am Boden bleiben",
      objective: "Spiel in einem **Rocket-League-Soccar-Schaukampf gegen die leichtesten Bots** ein ganzes Match ohne Sprünge. **Gewinne das Match** oder hör nach drei Matches ohne Sieg auf.",
    },
  }
]);
