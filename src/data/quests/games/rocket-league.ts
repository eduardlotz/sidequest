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
    rarity: "special",
    moods: ["challenge", "focused"],
    type: "challenge",
    tags: ["vs-bots", "full-match"],
    minutes: 25,
    minimum: 5,
    en: {
      name: "Stay on the Ground",
      objective: "In a **Rocket League Soccar exhibition against the easiest bots**, keep every play on the ground: no jumps, dodges or aerials. **Win a full match with your wheels down**, or stop after three matches. Boost and powerslides are allowed.",
    },
    de: {
      name: "Am Boden bleiben",
      objective: "Bleib in einem **Rocket-League-Soccar-Schaukampf gegen die leichtesten Bots** am Boden: keine Sprünge, Ausweichmanöver oder Luftaktionen. **Gewinne ein ganzes Match auf den Rädern** oder hör nach drei Matches auf. Boost und Powerslides sind erlaubt.",
    },
  },
  {
    id: "shadow-the-bot",
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "vs-bots",
      "full-match"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Stay Behind the Ball",
      objective: "In a **Rocket League 1v1 exhibition against bots**, defend one attack by driving toward your goal alongside the ball instead of rushing into it. **Finish the match** and compare this with your usual tackle."
    },
    de: {
      name: "Hinter dem Ball bleiben",
      objective: "Verteidige in einem **Rocket-League-1-gegen-1 gegen Bots** einen Angriff, indem du neben dem Ball Richtung eigenes Tor fährst, statt sofort reinzugehen. **Beende das Match** und vergleiche das mit deinem üblichen Angriff auf den Ball."
    }
  },
  {
    id: "recover-and-chase",
    moods: [
      "focused",
      "curious"
    ],
    type: "experiment",
    tags: [
      "traversal"
    ],
    minutes: 10,
    minimum: 2,
    en: {
      name: "Land and Follow",
      objective: "In **Rocket League Free Play**, hit the ball up a wall, follow it, and use air roll to land on your wheels. **Make a second touch without resetting the ball**, then compare how much speed you kept."
    },
    de: {
      name: "Landen und dranbleiben",
      objective: "Spiel in **Rocket League Free Play** den Ball die Wand hoch und fahr hinterher. Lande mit Air Roll auf den Rädern und **berühre den Ball erneut, ohne ihn zurückzusetzen**. Achte darauf, wie viel Tempo du behalten hast."
    }
  },
  {
    id: "powerslide-cut-goal",
    moods: [
      "focused",
      "challenge"
    ],
    type: "challenge",
    tags: [
      "three-attempts"
    ],
    minutes: 10,
    minimum: 2,
    en: {
      name: "Cut Across",
      objective: "In **Rocket League Free Play**, push the ball toward one side of the goal, then use a powerslide turn to send it toward the other. **Score after that change of direction**, or stop after three runs from midfield."
    },
    de: {
      name: "Quer zum Tor",
      objective: "Schieb in **Rocket League Free Play** den Ball Richtung einer Torseite und lenk ihn mit einem Powerslide zur anderen. **Triff nach dem Richtungswechsel** oder hör nach drei Anläufen von der Mittellinie auf."
    }
  },
  {
    id: "bounce-before-shot",
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "new-approach"
    ],
    minutes: 10,
    minimum: 2,
    en: {
      name: "Catch the Bounce",
      objective: "In **Rocket League Free Play**, shoot once as the ball rises from a bounce and once while it drops. **Take both shots from midfield** and compare the height they reach."
    },
    de: {
      name: "Den Aufsprung nutzen",
      objective: "Schieß in **Rocket League Free Play** einmal, während der Ball nach einem Aufsprung steigt, und einmal beim Fallen. **Nimm beide Schüsse von der Mittellinie** und vergleiche ihre Höhe."
    }
  },
  {
    id: "hood-to-flick",
    moods: [
      "challenge",
      "focused"
    ],
    type: "challenge",
    tags: [
      "three-attempts"
    ],
    minutes: 15,
    minimum: 2,
    en: {
      name: "Off the Hood",
      objective: "Use Start Dribble in **Rocket League Free Play** near midfield. **Carry the ball toward goal and score with a flick**, or stop after three carries."
    },
    de: {
      name: "Von der Motorhaube",
      objective: "Nutze an der Mittellinie in **Rocket League Free Play** Start Dribble. **Trag den Ball Richtung Tor und triff mit einem Flick** oder hör nach drei Anläufen auf."
    }
  },
  {
    id: "wall-descent-touch",
    moods: [
      "focused",
      "curious"
    ],
    type: "experiment",
    tags: [
      "traversal"
    ],
    minutes: 10,
    minimum: 2,
    en: {
      name: "Down the Wall",
      objective: "In **Rocket League Free Play**, drive up a side wall, turn down it, and keep your wheels against it until you reach the floor. **Continue into a ball touch without resetting the car** and compare it with jumping off."
    },
    de: {
      name: "Die Wand runter",
      objective: "Fahr in **Rocket League Free Play** eine Seitenwand hoch, dreh nach unten und bleib mit den Rädern an der Wand bis zum Boden. **Berühre danach den Ball, ohne das Auto zurückzusetzen**, und vergleiche das mit einem Absprung."
    }
  },
  {
    id: "make-a-recovery-shot",
    moods: [
      "create",
      "focused"
    ],
    type: "creation",
    tags: [
      "new-approach"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Build a Recovery Shot",
      objective: "In the **Rocket League Custom Training editor**, make a shot with the car starting away from the ball and facing the wrong direction. **Save the pack and play your shot**, turning back toward the ball before shooting."
    },
    de: {
      name: "Ein Recovery-Schuss",
      objective: "Bau im **Custom-Training-Editor von Rocket League** einen Schuss, bei dem das Auto vom Ball entfernt und in die falsche Richtung steht. **Speichere das Pack und spiel deinen Schuss**, mit einer Drehung zum Ball vor dem Abschluss."
    }
  },
  {
    id: "split-screen-give-go",
    moods: [
      "connect"
    ],
    type: "objective",
    tags: [
      "local-play",
      "full-match"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "A Passing Pair",
      objective: "With another player in **Rocket League split-screen**, play a Soccar exhibition on the same team against bots. Try passing back to the player who passed to you and **finish the match together**, whether the return pass worked or not."
    },
    de: {
      name: "Doppelpass im Auto",
      objective: "Spiel mit einer anderen Person im **Rocket-League-Splitscreen** im selben Team einen Soccar-Schaukampf gegen Bots. Versuch, den Ball zur passgebenden Person zurückzuspielen, und **beendet das Match zusammen**, auch wenn der Doppelpass nicht klappt."
    }
  },
  {
    id: "rumble-powerup-play",
    moods: [
      "curious"
    ],
    type: "experiment",
    tags: [
      "abilities",
      "full-match"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Use the Surprise",
      objective: "In a **Rocket League Rumble exhibition against bots**, try your first power-up when the ball is near you. **Finish the match** and compare how it changed the next play."
    },
    de: {
      name: "Die Überraschung einsetzen",
      objective: "Probier in einem **Rumble-Testspiel in Rocket League gegen Bots** dein erstes Power-up aus, wenn der Ball in deiner Nähe ist. **Beende das Match** und achte darauf, wie sich der nächste Spielzug verändert hat."
    }
  },
  {
    id: "hoops-evening",
    moods: [
      "relax",
      "restless"
    ],
    type: "inspiration",
    tags: [],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Under the Hoop",
      objective: "Open **Rocket League Hoops in an exhibition against the easiest bots**. Play around the raised hoops and curved corners at your own pace. Let awkward bounces be part of the session."
    },
    de: {
      name: "Unter dem Korb",
      objective: "Starte **Rocket League Hoops in einem Testspiel gegen die leichtesten Bots**. Spiel in deinem Tempo rund um die erhöhten Körbe und Rundungen. Die seltsamen Abpraller gehören heute dazu."
    }
  },
  {
    id: "puck-weight",
    moods: [
      "curious"
    ],
    type: "experiment",
    tags: [
      "full-match"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Follow the Puck",
      objective: "In a **Rocket League Snow Day exhibition against bots**, send the puck along a side wall, then try the same touch across open ground. **Finish the match** and compare how it slides."
    },
    de: {
      name: "Dem Puck folgen",
      objective: "Spiel den Puck in einem **Snow-Day-Testspiel in Rocket League gegen Bots** einmal an der Seitenwand entlang und einmal quer über den Boden. **Beende das Match** und vergleiche, wie er rutscht."
    }
  },
  {
    id: "low-gravity-follow",
    moods: [
      "curious"
    ],
    type: "experiment",
    tags: [
      "new-approach",
      "full-match"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "A Longer Flight",
      objective: "Set low gravity for a **Rocket League Soccar exhibition against bots**. **Finish the match after trying an aerial touch**, and notice when you have to stop boosting to land."
    },
    de: {
      name: "Länger in der Luft",
      objective: "Stell für ein **Soccar-Testspiel in Rocket League gegen Bots** geringe Schwerkraft ein. **Probier eine Ballberührung in der Luft und beende das Match**. Achte darauf, wann du den Boost loslassen musst, um zu landen."
    }
  },
  {
    id: "camera-at-possession",
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "full-match",
      "vs-bots"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Two Camera Views",
      objective: "In a **Rocket League Soccar exhibition against bots**, use ball cam while defending and switch to car cam when carrying the ball. **Finish the match with both views used** and compare what you could see."
    },
    de: {
      name: "Zwei Kamerablicke",
      objective: "Nutze in einem **Rocket-League-Soccar-Schaukampf gegen Bots** Ballkamera beim Verteidigen und Autokamera beim Dribbeln. **Beende das Match mit beiden Ansichten ausprobiert** und vergleiche, was du sehen konntest."
    }
  },
  {
    id: "opponent-replay-view",
    moods: [
      "focused",
      "curious"
    ],
    type: "experiment",
    tags: [
      "replay"
    ],
    minutes: 10,
    minimum: 2,
    en: {
      name: "Their View",
      objective: "Open a **saved Rocket League replay with a goal against you**. Watch that attack once from your car and once from the scorer. **Compare where each car could see the opening**, then close the replay."
    },
    de: {
      name: "Das Tor aus Gegnersicht",
      objective: "Öffne ein **gespeichertes Rocket-League-Replay mit einem Gegentor**. Sieh den Angriff einmal aus deinem Auto und einmal aus dem Auto des Torschützen. **Vergleiche, von wo die Lücke sichtbar war**, und schließ das Replay."
    }
  },
  {
    id: "launch-and-meet",
    moods: [
      "challenge",
      "focused"
    ],
    type: "challenge",
    tags: [
      "three-attempts"
    ],
    minutes: 10,
    minimum: 2,
    en: {
      name: "Meet It Airborne",
      objective: "Use Launch Ball in **Rocket League Free Play**. **Touch the ball in the air before it bounces**, or stop after three launches."
    },
    de: {
      name: "In der Luft treffen",
      objective: "Nutze Launch Ball in **Rocket League Free Play**. **Berühre den Ball in der Luft vor seinem ersten Aufsprung** oder hör nach drei Starts auf."
    }
  },
  {
    id: "reverse-defend-shot",
    moods: [
      "challenge"
    ],
    type: "challenge",
    tags: [
      "three-attempts"
    ],
    minutes: 10,
    minimum: 2,
    en: {
      name: "A Reverse Save",
      objective: "In **Rocket League Free Play**, face away from your goal before using Defend Shot. **Save the shot while driving backward**, or stop after three shots."
    },
    de: {
      name: "Rückwärts halten",
      objective: "Stell dich in **Rocket League Free Play** mit dem Rücken zum Tor und nutze Defend Shot. **Halte den Schuss beim Rückwärtsfahren** oder hör nach drei Schüssen auf."
    }
  },
  {
    id: "bot-bump-space",
    moods: [
      "focused",
      "curious"
    ],
    type: "experiment",
    tags: [
      "vs-bots",
      "full-match"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Room for the Ball",
      objective: "In a **Rocket League 1v1 exhibition against bots**, try bumping the bot away from the ball before your next touch. **Finish the match** and compare the space you gained with a direct ball challenge."
    },
    de: {
      name: "Platz für den Ball",
      objective: "Versuch in einem **Rocket-League-1-gegen-1 gegen Bots**, den Bot vor deiner nächsten Ballberührung wegzuschieben. **Beende das Match** und vergleiche den Platz mit einem direkten Angriff auf den Ball."
    }
  },
  {
    id: "mirrored-shot-read",
    moods: [
      "focused",
      "curious"
    ],
    type: "experiment",
    tags: [
      "new-approach"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Read the Other Side",
      objective: "Open a **Rocket League Custom Training shot** and use the mirror option. **Try the original and mirrored setup once each**, then compare which turn you needed before the shot."
    },
    de: {
      name: "Von der anderen Seite",
      objective: "Öffne einen **Rocket-League-Custom-Training-Schuss** und nutze die Spiegeloption. **Probier Original und gespiegelte Aufstellung je einmal** und vergleiche deine Drehung vor dem Schuss."
    }
  },
  {
    id: "offline-season-return",
    moods: [
      "nostalgic",
      "progress"
    ],
    type: "inspiration",
    tags: [
      "current-save"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Your Old Team",
      objective: "Load an **existing Rocket League offline Season**. Pick up the fixture list with your old team and let the standings decide which opponent you feel like playing next."
    },
    de: {
      name: "Dein altes Team",
      objective: "Lad eine **bestehende Offline-Saison in Rocket League**. Schau mit deinem alten Team wieder in den Spielplan und lass die Tabelle entscheiden, gegen wen du als Nächstes spielen magst."
    }
  },
  {
    id: "club-color-preset",
    moods: [
      "create",
      "relax"
    ],
    type: "creation",
    tags: [
      "outfit"
    ],
    minutes: 10,
    minimum: 2,
    en: {
      name: "Team Colours",
      objective: "In the **Rocket League garage**, use owned paint finishes and decals to make a preset in the colours of a club you follow. **Save it and take it onto the field in Free Play**."
    },
    de: {
      name: "Vereinsfarben",
      objective: "Bau in der **Rocket-League-Garage** mit vorhandenen Lackierungen und Aufklebern ein Preset in den Farben eines Vereins, dem du folgst. **Speichere es und fahr damit in Free Play auf den Platz**."
    }
  }
]);
