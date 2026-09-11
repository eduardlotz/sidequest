import { defineGameQuests } from "../defineGameQuests";

export const rocketLeagueQuests = defineGameQuests("rocket-league", [
  {
    "id": "small-pad-match",
    "moods": [
      "challenge",
      "focused"
    ],
    "type": "challenge",
    "tags": [
      "vs-bots"
    ],
    "minutes": 15,
    "minimum": 2,
    "en": {
      "name": "Small Pads Only",
      "objective": "In **Rocket League**, play a Soccar exhibition against bots with normal boost settings. **Finish the match using only small boost pads and register a goal or save**. Starting boost is allowed; try at most three matches."
    },
    "de": {
      "name": "Nur kleine Pads",
      "objective": "Spiele in **Rocket League** ein Soccar-Schaukampf-Match gegen Bots mit normalen Boost-Einstellungen. **Beende das Match nur mit kleinen Boost-Pads und verbuche ein Tor oder eine Parade**. Startboost ist erlaubt; höchstens drei Matches."
    }
  },
  {
    "id": "wall-bank-goal",
    "moods": [
      "curious",
      "focused"
    ],
    "type": "experiment",
    "tags": [
      "vs-bots",
      "three-attempts"
    ],
    "minutes": 20,
    "minimum": 2,
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
    "minimum": 2,
    "en": {
      "name": "Back Post Route",
      "objective": "In **Rocket League Casual 2v2**, rotate back toward the goalpost farther from the ball after your attacks, collecting small pads on the way. **Use that return route three times and finish the match** without abandoning your teammate."
    },
    "de": {
      "name": "Zum hinteren Pfosten",
      "objective": "Kehre in **Rocket League Casual 2v2** nach deinen Angriffen zum ballfernen Torpfosten zurück und sammle kleine Pads auf dem Weg. **Nutze den Rückweg dreimal und beende das Match**, ohne dein Teammitglied allein zu lassen."
    }
  }
]);
