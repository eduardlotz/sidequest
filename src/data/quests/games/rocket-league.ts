import { defineQuests } from "../defineQuests";

export const GamesRocketLeagueQuests = defineQuests([
  {
    "id": "rocket-league-small-pad-match",
    "moodIds": ["challenge", "focused"],
    "type": "challenge",
    "tags": ["full-match", "vs-bots"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "rocket-league",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Small Pads Only",
        "objective": "In a Soccar exhibition against bots with normal boost settings, **finish one match using only small boost pads**. Starting boost is allowed.",
        "gameObjective": "In a Soccar exhibition against bots with normal boost settings, **finish one match using only small boost pads**. Starting boost is allowed."
      },
      "de": {
        "name": "Nur kleine Pads",
        "objective": "**Spiel einen Soccar-Schaukampf gegen Bots mit normalen Boost-Einstellungen zu Ende und nutze nur kleine Boost-Pads**. Startboost ist erlaubt.",
        "gameObjective": "**Spiel einen Soccar-Schaukampf gegen Bots mit normalen Boost-Einstellungen zu Ende und nutze nur kleine Boost-Pads**. Startboost ist erlaubt."
      }
    },
    "experience": {
      "family": "boost-management",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["full-match"],
      "prerequisites": [
        {
          "en": "Soccar exhibition against bots",
          "de": "Soccar-Schaukampf gegen Bots",
          "chips": {"en": ["Soccar exhibition"], "de": ["Soccar-Schaukampf"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "co-op",
          "formation": "team",
          "mode": "bot exhibition"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "rocket-league-wall-bank-goal",
    "moodIds": ["challenge", "focused"],
    "type": "challenge",
    "tags": ["full-match", "three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "rocket-league",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Off the Wall",
        "objective": "In **Rocket League**, try side-wall bank shots in a Soccar exhibition against bots. **Score after your shot bounces off a side wall, then finish the match**. After three full matches, stop even if none went in.",
        "gameObjective": "In **Rocket League**, try side-wall bank shots in a Soccar exhibition against bots. **Score after your shot bounces off a side wall, then finish the match**. After three full matches, stop even if none went in."
      },
      "de": {
        "name": "Über die Wand",
        "objective": "Probiere in **Rocket League** im Soccar-Schaukampf gegen Bots Schüsse über die Seitenwand. **Erziele ein Tor, nachdem dein Schuss an der Seitenwand abprallt, und beende das Match**. Nach drei ganzen Matches ist auch ohne Treffer Schluss.",
        "gameObjective": "Probiere in **Rocket League** im Soccar-Schaukampf gegen Bots Schüsse über die Seitenwand. **Erziele ein Tor, nachdem dein Schuss an der Seitenwand abprallt, und beende das Match**. Nach drei ganzen Matches ist auch ohne Treffer Schluss."
      }
    },
    "experience": {
      "family": "wall-shots",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["full-match", "three-attempts"],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "co-op",
          "formation": "team",
          "mode": "bot exhibition"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "rocket-league-back-post-route",
    "moodIds": ["connect", "focused"],
    "type": "objective",
    "tags": ["support", "full-match"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "rocket-league",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Back Post Route",
        "objective": "In **Rocket League Casual 2v2**, rotate toward the goalpost farther from the ball after your attacks, collecting small pads on the way. **Practice that return route throughout one full match**.",
        "gameObjective": "In **Rocket League Casual 2v2**, rotate toward the goalpost farther from the ball after your attacks, collecting small pads on the way. **Practice that return route throughout one full match**."
      },
      "de": {
        "name": "Zum hinteren Pfosten",
        "objective": "Kehre in **Rocket League Casual 2v2** nach deinen Angriffen zum ballfernen Torpfosten zurück und sammle kleine Pads. **Übe diesen Rückweg während eines ganzen Matches**.",
        "gameObjective": "Kehre in **Rocket League Casual 2v2** nach deinen Angriffen zum ballfernen Torpfosten zurück und sammle kleine Pads. **Übe diesen Rückweg während eines ganzen Matches**."
      }
    },
    "experience": {
      "family": "goal-rotation",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": ["co-op"] },
      "finish": "attempt",
      "activities": ["support"],
      "rules": ["full-match"],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "online",
          "people": "others",
          "participation": "co-op",
          "formation": "team",
          "mode": "Casual 2v2"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "rocket-league-backboard-saves",
    "moodIds": ["challenge", "focused"],
    "type": "challenge",
    "tags": ["three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "rocket-league",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Off the Backboard",
        "objective": "In **Rocket League**, open a backboard-defense training pack with at least three shots. Try each of the first three shots up to three times. **Save each shot once**, then stop after the third shot's final try.",
        "gameObjective": "In **Rocket League**, open a backboard-defense training pack with at least three shots. Try each of the first three shots up to three times. **Save each shot once**, then stop after the third shot's final try."
      },
      "de": {
        "name": "Weg vom Backboard",
        "objective": "Öffne in **Rocket League** ein Backboard-Defensivtraining mit mindestens drei Schüssen. Versuch, **jeden der ersten drei Schüsse einmal zu halten**. Du hast pro Schuss höchstens drei Versuche; danach ist Schluss.",
        "gameObjective": "Öffne in **Rocket League** ein Backboard-Defensivtraining mit mindestens drei Schüssen. Versuch, **jeden der ersten drei Schüsse einmal zu halten**. Du hast pro Schuss höchstens drei Versuche; danach ist Schluss."
      }
    },
    "experience": {
      "family": "backboard-defense",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Backboard training pack with three shots",
          "de": "Backboard-Trainingspack mit drei Schüssen",
          "chips": {"en": ["Backboard training"], "de": ["Backboard-Training"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "Custom Training"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "rocket-league-training-pack-first-three",
    "moodIds": ["focused", "curious"],
    "type": "objective",
    "tags": [],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "rocket-league",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Three Training Shots",
        "objective": "Open a **Rocket League shooting training pack** with at least three shots. **Try each of its first three shots once** and notice where you need to approach the ball.",
        "gameObjective": "Open a **Rocket League shooting training pack** with at least three shots. **Try each of its first three shots once** and notice where you need to approach the ball."
      },
      "de": {
        "name": "Drei Trainingsschüsse",
        "objective": "Öffne in **Rocket League** ein Torschusstraining mit mindestens drei Schüssen. **Probier die ersten drei Schüsse je einmal** und achte auf die Anfahrt zum Ball.",
        "gameObjective": "Öffne in **Rocket League** ein Torschusstraining mit mindestens drei Schüssen. **Probier die ersten drei Schüsse je einmal** und achte auf die Anfahrt zum Ball."
      }
    },
    "experience": {
      "family": "training-shots",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "en": "Shooting pack with three shots",
          "de": "Torschusspack mit drei Schüssen",
          "chips": {"en": ["Shooting pack"], "de": ["Torschusspack"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "Custom Training"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "rocket-league-kickoff-follow-up",
    "moodIds": ["challenge", "focused"],
    "type": "challenge",
    "tags": ["vs-bots", "three-attempts", "full-match"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "rocket-league",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Kickoff Follow-Up",
        "objective": "In a **Rocket League Soccar exhibition against bots**, take the first kickoff and score before the next kickoff. **Finish the match after scoring**, or stop after three matches without a goal.",
        "gameObjective": "In a **Rocket League Soccar exhibition against bots**, take the first kickoff and score before the next kickoff. **Finish the match after scoring**, or stop after three matches without a goal."
      },
      "de": {
        "name": "Nach dem Anstoß",
        "objective": "Spiel in **Rocket League** ein Soccar-Schaukampf-Match gegen Bots, nimm den ersten Anstoß und triff vor dem nächsten Anstoß. **Beende das Match nach dem Tor** oder hör nach drei Matches ohne Treffer auf.",
        "gameObjective": "Spiel in **Rocket League** ein Soccar-Schaukampf-Match gegen Bots, nimm den ersten Anstoß und triff vor dem nächsten Anstoß. **Beende das Match nach dem Tor** oder hör nach drei Matches ohne Treffer auf."
      }
    },
    "experience": {
      "family": "kickoff-attack",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["three-attempts", "full-match"],
      "prerequisites": [
        {
          "en": "Solo / bot mode available",
          "de": "Solo- / Bot-Modus verfügbar",
          "chips": {"en": ["Bot mode"], "de": ["Bot-Modus"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "co-op",
          "formation": "team",
          "mode": "bot exhibition"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "rocket-league-new-car-preset",
    "moodIds": ["create", "curious"],
    "type": "experiment",
    "tags": [],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "rocket-league",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Try Another Car",
        "objective": "Choose a different body in the **Rocket League garage** and save it as a preset. Take it into Free Play and **try dribbling and shooting with the new car**.",
        "gameObjective": "Choose a different body in the **Rocket League garage** and save it as a preset. Take it into Free Play and **try dribbling and shooting with the new car**."
      },
      "de": {
        "name": "Ein anderes Auto fahren",
        "objective": "Wähl in der **Rocket-League-Garage** eine andere Karosserie und speichere sie als Preset. Geh damit in Free Play und **probier Dribbling und Schüsse mit dem neuen Auto aus**.",
        "gameObjective": "Wähl in der **Rocket-League-Garage** eine andere Karosserie und speichere sie als Preset. Geh damit in Free Play und **probier Dribbling und Schüsse mit dem neuen Auto aus**."
      }
    },
    "experience": {
      "family": "car-handling",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "en": "Another owned car body",
          "de": "Weitere eigene Karosserie",
          "chips": {"en": ["Another car body"], "de": ["Weitere Karosserie"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "Free Play"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "rocket-league-freeplay-ground-shot",
    "moodIds": ["restless", "focused"],
    "type": "objective",
    "tags": [],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "rocket-league",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Ground Shot",
        "objective": "In **Rocket League Free Play**, move the ball forward along the ground and shoot from outside the box. **Score once with a low shot**.",
        "gameObjective": "In **Rocket League Free Play**, move the ball forward along the ground and shoot from outside the box. **Score once with a low shot**."
      },
      "de": {
        "name": "Schuss vom Boden",
        "objective": "Spiel in **Rocket League Free Play** den Ball am Boden nach vorn und schieß von außerhalb des Strafraums aufs Tor. **Triff einmal mit einem flachen Schuss**.",
        "gameObjective": "Spiel in **Rocket League Free Play** den Ball am Boden nach vorn und schieß von außerhalb des Strafraums aufs Tor. **Triff einmal mit einem flachen Schuss**."
      }
    },
    "experience": {
      "family": "ground-shots",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": [],
      "rules": [],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "Free Play"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "rocket-league-one-touch-clearance",
    "moodIds": ["focused", "connect"],
    "type": "objective",
    "tags": ["full-match", "support"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "rocket-league",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Clear It Wide",
        "objective": "In a **Rocket League Casual 2v2** match, when the ball enters your half, make one touch that sends it toward a side wall instead of the middle. **Finish the match after the clearance.**",
        "gameObjective": "In a **Rocket League Casual 2v2** match, when the ball enters your half, make one touch that sends it toward a side wall instead of the middle. **Finish the match after the clearance.**"
      },
      "de": {
        "name": "Zur Seite klären",
        "objective": "Spiel in **Rocket League Casual 2v2** den Ball einmal zur Seitenwand, wenn er in deine Hälfte kommt, statt ihn in die Mitte zu spielen. **Beende das Match nach der Klärung.**",
        "gameObjective": "Spiel in **Rocket League Casual 2v2** den Ball einmal zur Seitenwand, wenn er in deine Hälfte kommt, statt ihn in die Mitte zu spielen. **Beende das Match nach der Klärung.**"
      }
    },
    "experience": {
      "family": "side-clearance",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": ["co-op"] },
      "finish": "attempt",
      "activities": ["support"],
      "rules": ["full-match"],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "online",
          "people": "others",
          "participation": "co-op",
          "formation": "team",
          "mode": "Casual 2v2"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "rocket-league-no-jump-duel",
    "rarity": "special",
    "moodIds": ["challenge", "focused"],
    "type": "challenge",
    "tags": ["full-match", "three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "rocket-league",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Stay on the Ground",
        "objective": "In a **Rocket League Soccar exhibition against the easiest bots**, keep every play on the ground: no jumps, dodges or aerials. **Win a full match with your wheels down**, or stop after three matches. Boost and powerslides are allowed.",
        "gameObjective": "In a **Rocket League Soccar exhibition against the easiest bots**, keep every play on the ground: no jumps, dodges or aerials. **Win a full match with your wheels down**, or stop after three matches. Boost and powerslides are allowed."
      },
      "de": {
        "name": "Am Boden bleiben",
        "objective": "Bleib in einem **Rocket-League-Soccar-Schaukampf gegen die leichtesten Bots** am Boden: keine Sprünge, Ausweichmanöver oder Luftaktionen. **Gewinne ein ganzes Match auf den Rädern** oder hör nach drei Matches auf. Boost und Powerslides sind erlaubt.",
        "gameObjective": "Bleib in einem **Rocket-League-Soccar-Schaukampf gegen die leichtesten Bots** am Boden: keine Sprünge, Ausweichmanöver oder Luftaktionen. **Gewinne ein ganzes Match auf den Rädern** oder hör nach drei Matches auf. Boost und Powerslides sind erlaubt."
      }
    },
    "experience": {
      "family": "ground-only",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["full-match", "three-attempts"],
      "prerequisites": [
        {
          "en": "Solo / bot mode available",
          "de": "Solo- / Bot-Modus verfügbar",
          "chips": {"en": ["Bot mode"], "de": ["Bot-Modus"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "co-op",
          "formation": "team",
          "mode": "bot exhibition"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "rocket-league-shadow-the-bot",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["vs-bots", "full-match"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "rocket-league",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Stay Behind the Ball",
        "objective": "In a **Rocket League 1v1 exhibition against bots**, defend one attack by driving toward your goal alongside the ball instead of rushing into it. **Finish the match** and compare this with your usual tackle.",
        "gameObjective": "In a **Rocket League 1v1 exhibition against bots**, defend one attack by driving toward your goal alongside the ball instead of rushing into it. **Finish the match** and compare this with your usual tackle."
      },
      "de": {
        "name": "Hinter dem Ball bleiben",
        "objective": "Verteidige in einem **Rocket-League-1-gegen-1 gegen Bots** einen Angriff, indem du neben dem Ball Richtung eigenes Tor fährst, statt sofort reinzugehen. **Beende das Match** und vergleiche das mit deinem üblichen Angriff auf den Ball.",
        "gameObjective": "Verteidige in einem **Rocket-League-1-gegen-1 gegen Bots** einen Angriff, indem du neben dem Ball Richtung eigenes Tor fährst, statt sofort reinzugehen. **Beende das Match** und vergleiche das mit deinem üblichen Angriff auf den Ball."
      }
    },
    "experience": {
      "family": "shadow-defense",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["full-match"],
      "prerequisites": [
        {
          "en": "Solo / bot mode available",
          "de": "Solo- / Bot-Modus verfügbar",
          "chips": {"en": ["Bot mode"], "de": ["Bot-Modus"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "1v1 bot exhibition"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "rocket-league-recover-and-chase",
    "moodIds": ["focused", "curious"],
    "type": "experiment",
    "tags": ["traversal"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "rocket-league",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Land and Follow",
        "objective": "In **Rocket League Free Play**, hit the ball up a wall and follow it. Use air roll to land on your wheels, then **touch the ball again without resetting it**.",
        "gameObjective": "In **Rocket League Free Play**, hit the ball up a wall and follow it. Use air roll to land on your wheels, then **touch the ball again without resetting it**."
      },
      "de": {
        "name": "Landen und dranbleiben",
        "objective": "Spiel in **Rocket League Free Play** den Ball die Wand hoch und fahr hinterher. Lande mit Air Roll auf den Rädern und **berühre den Ball erneut, ohne ihn zurückzusetzen**.",
        "gameObjective": "Spiel in **Rocket League Free Play** den Ball die Wand hoch und fahr hinterher. Lande mit Air Roll auf den Rädern und **berühre den Ball erneut, ohne ihn zurückzusetzen**."
      }
    },
    "experience": {
      "family": "aerial-recovery",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["traversal"],
      "rules": [],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "Free Play"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "rocket-league-powerslide-cut-goal",
    "moodIds": ["focused", "challenge"],
    "type": "challenge",
    "tags": ["three-attempts"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "rocket-league",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Cut Across",
        "objective": "In **Rocket League Free Play**, push the ball toward one side of the goal, then use a powerslide turn to send it toward the other. **Score after that change of direction**, or stop after three runs from midfield.",
        "gameObjective": "In **Rocket League Free Play**, push the ball toward one side of the goal, then use a powerslide turn to send it toward the other. **Score after that change of direction**, or stop after three runs from midfield."
      },
      "de": {
        "name": "Quer zum Tor",
        "objective": "Schieb in **Rocket League Free Play** den Ball Richtung einer Torseite und lenk ihn mit einem Powerslide zur anderen. **Triff nach dem Richtungswechsel** oder hör nach drei Anläufen von der Mittellinie auf.",
        "gameObjective": "Schieb in **Rocket League Free Play** den Ball Richtung einer Torseite und lenk ihn mit einem Powerslide zur anderen. **Triff nach dem Richtungswechsel** oder hör nach drei Anläufen von der Mittellinie auf."
      }
    },
    "experience": {
      "family": "powerslide-shot",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["three-attempts"],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "Free Play"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "rocket-league-bounce-before-shot",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["new-approach"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "rocket-league",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Catch the Bounce",
        "objective": "In **Rocket League Free Play**, shoot once as the ball rises from a bounce and once while it drops. **Take both shots from midfield** and compare the height they reach.",
        "gameObjective": "In **Rocket League Free Play**, shoot once as the ball rises from a bounce and once while it drops. **Take both shots from midfield** and compare the height they reach."
      },
      "de": {
        "name": "Den Aufsprung nutzen",
        "objective": "Schieß in **Rocket League Free Play** einmal, während der Ball nach einem Aufsprung steigt, und einmal beim Fallen. **Nimm beide Schüsse von der Mittellinie** und vergleiche ihre Höhe.",
        "gameObjective": "Schieß in **Rocket League Free Play** einmal, während der Ball nach einem Aufsprung steigt, und einmal beim Fallen. **Nimm beide Schüsse von der Mittellinie** und vergleiche ihre Höhe."
      }
    },
    "experience": {
      "family": "bounce-shot",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": [],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "Free Play"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "rocket-league-hood-to-flick",
    "moodIds": ["challenge", "focused"],
    "type": "challenge",
    "tags": ["three-attempts"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "rocket-league",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Off the Hood",
        "objective": "Use Start Dribble in **Rocket League Free Play** near midfield. **Carry the ball toward goal and score with a flick**, or stop after three carries.",
        "gameObjective": "Use Start Dribble in **Rocket League Free Play** near midfield. **Carry the ball toward goal and score with a flick**, or stop after three carries."
      },
      "de": {
        "name": "Von der Motorhaube",
        "objective": "Nutze an der Mittellinie in **Rocket League Free Play** Start Dribble. **Trag den Ball Richtung Tor und triff mit einem Flick** oder hör nach drei Anläufen auf.",
        "gameObjective": "Nutze an der Mittellinie in **Rocket League Free Play** Start Dribble. **Trag den Ball Richtung Tor und triff mit einem Flick** oder hör nach drei Anläufen auf."
      }
    },
    "experience": {
      "family": "dribble-flick",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["three-attempts"],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "Free Play"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "rocket-league-wall-descent-touch",
    "moodIds": ["focused", "curious"],
    "type": "experiment",
    "tags": ["traversal"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "rocket-league",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Down the Wall",
        "objective": "In **Rocket League Free Play**, drive up a side wall, turn down it, and keep your wheels against it until you reach the floor. **Continue into a ball touch without resetting the car** and compare it with jumping off.",
        "gameObjective": "In **Rocket League Free Play**, drive up a side wall, turn down it, and keep your wheels against it until you reach the floor. **Continue into a ball touch without resetting the car** and compare it with jumping off."
      },
      "de": {
        "name": "Die Wand runter",
        "objective": "Fahr in **Rocket League Free Play** eine Seitenwand hoch, dreh nach unten und bleib mit den Rädern an der Wand bis zum Boden. **Berühre danach den Ball, ohne das Auto zurückzusetzen**, und vergleiche das mit einem Absprung.",
        "gameObjective": "Fahr in **Rocket League Free Play** eine Seitenwand hoch, dreh nach unten und bleib mit den Rädern an der Wand bis zum Boden. **Berühre danach den Ball, ohne das Auto zurückzusetzen**, und vergleiche das mit einem Absprung."
      }
    },
    "experience": {
      "family": "wall-recovery",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["traversal"],
      "rules": [],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "Free Play"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "rocket-league-make-a-recovery-shot",
    "moodIds": ["create", "focused"],
    "type": "creation",
    "tags": ["level-editor"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "rocket-league",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Build a Recovery Shot",
        "objective": "In the **Rocket League Custom Training editor**, make a shot with the car starting away from the ball and facing the wrong direction. **Save the pack and play your shot**, turning back toward the ball before shooting.",
        "gameObjective": "In the **Rocket League Custom Training editor**, make a shot with the car starting away from the ball and facing the wrong direction. **Save the pack and play your shot**, turning back toward the ball before shooting."
      },
      "de": {
        "name": "Ein Recovery-Schuss",
        "objective": "Bau im **Custom-Training-Editor von Rocket League** einen Schuss, bei dem das Auto vom Ball entfernt und in die falsche Richtung steht. **Speichere das Pack und spiel deinen Schuss**, mit einer Drehung zum Ball vor dem Abschluss.",
        "gameObjective": "Bau im **Custom-Training-Editor von Rocket League** einen Schuss, bei dem das Auto vom Ball entfernt und in die falsche Richtung steht. **Speichere das Pack und spiel deinen Schuss**, mit einer Drehung zum Ball vor dem Abschluss."
      }
    },
    "experience": {
      "family": "training-editor",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["level-editor"],
      "rules": [],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "Custom Training"
        }
      ]
    },
    "gameGenreIds": ["sports"],
    "rarity": "special"
  },
  {
    "id": "rocket-league-split-screen-give-go",
    "moodIds": ["connect"],
    "type": "objective",
    "tags": ["local-play", "full-match"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "rocket-league",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "A Passing Pair",
        "objective": "With another player in **Rocket League split-screen**, play a Soccar exhibition on the same team against bots. Try passing back to the player who passed to you and **finish the match together**, whether the return pass worked or not.",
        "gameObjective": "With another player in **Rocket League split-screen**, play a Soccar exhibition on the same team against bots. Try passing back to the player who passed to you and **finish the match together**, whether the return pass worked or not."
      },
      "de": {
        "name": "Doppelpass im Auto",
        "objective": "Spiel mit einer anderen Person im **Rocket-League-Splitscreen** im selben Team einen Soccar-Schaukampf gegen Bots. Versuch, den Ball zur passgebenden Person zurückzuspielen, und **beendet das Match zusammen**, auch wenn der Doppelpass nicht klappt.",
        "gameObjective": "Spiel mit einer anderen Person im **Rocket-League-Splitscreen** im selben Team einen Soccar-Schaukampf gegen Bots. Versuch, den Ball zur passgebenden Person zurückzuspielen, und **beendet das Match zusammen**, auch wenn der Doppelpass nicht klappt."
      }
    },
    "experience": {
      "family": "shared-passing",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": ["co-op", "local-play"] },
      "finish": "attempt",
      "activities": [],
      "rules": ["full-match"],
      "prerequisites": [
        {
          "en": "Another local player; second controller",
          "de": "Weitere Person vor Ort; zweiter Controller",
          "chips": {"en": ["Second controller"], "de": ["Zweiter Controller"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "others",
          "participation": "co-op",
          "formation": "team",
          "mode": "split-screen exhibition"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "rocket-league-rumble-powerup-play",
    "moodIds": ["curious"],
    "type": "experiment",
    "tags": ["abilities"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "rocket-league",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Use the Surprise",
        "objective": "Start a Rumble exhibition against bots in **Rocket League**. **Use your first power-up during a play** and follow through on what it creates.",
        "gameObjective": "Start a Rumble exhibition against bots in **Rocket League**. **Use your first power-up during a play** and follow through on what it creates."
      },
      "de": {
        "name": "Die Überraschung einsetzen",
        "objective": "Starte in **Rocket League** einen Rumble-Schaukampf gegen Bots. **Setz dein erstes Power-up in einem Spielzug ein** und spiel aus, was daraus entsteht.",
        "gameObjective": "Starte in **Rocket League** einen Rumble-Schaukampf gegen Bots. **Setz dein erstes Power-up in einem Spielzug ein** und spiel aus, was daraus entsteht."
      }
    },
    "experience": {
      "family": "powerup-play",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["abilities"],
      "rules": [],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "co-op",
          "formation": "team",
          "mode": "bot exhibition"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "rocket-league-hoops-evening",
    "moodIds": ["relax", "restless"],
    "type": "inspiration",
    "tags": [],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "rocket-league",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Under the Hoop",
        "objective": "Open Rocket League Hoops in an exhibition against the easiest bots. **Play around the raised hoops and curved corners** at your own pace. Let awkward bounces be part of the session.",
        "gameObjective": "Open Rocket League Hoops in an exhibition against the easiest bots. **Play around the raised hoops and curved corners** at your own pace. Let awkward bounces be part of the session."
      },
      "de": {
        "name": "Unter dem Korb",
        "objective": "Starte Rocket League Hoops in einem Testspiel gegen die leichtesten Bots. **Spiel in deinem Tempo rund um die erhöhten Körbe und Rundungen**. Die seltsamen Abpraller gehören heute dazu.",
        "gameObjective": "Starte Rocket League Hoops in einem Testspiel gegen die leichtesten Bots. **Spiel in deinem Tempo rund um die erhöhten Körbe und Rundungen**. Die seltsamen Abpraller gehören heute dazu."
      }
    },
    "experience": {
      "family": "hoop-play",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "open",
      "activities": [],
      "rules": [],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "co-op",
          "formation": "team",
          "mode": "bot exhibition"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "rocket-league-puck-weight",
    "moodIds": ["curious"],
    "type": "experiment",
    "tags": ["full-match"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "rocket-league",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Follow the Puck",
        "objective": "In a **Rocket League Snow Day exhibition against bots**, send the puck along a side wall, then try the same touch across open ground. **Finish the match** and compare how it slides.",
        "gameObjective": "In a **Rocket League Snow Day exhibition against bots**, send the puck along a side wall, then try the same touch across open ground. **Finish the match** and compare how it slides."
      },
      "de": {
        "name": "Dem Puck folgen",
        "objective": "Spiel den Puck in einem **Snow-Day-Testspiel in Rocket League gegen Bots** einmal an der Seitenwand entlang und einmal quer über den Boden. **Beende das Match** und vergleiche, wie er rutscht.",
        "gameObjective": "Spiel den Puck in einem **Snow-Day-Testspiel in Rocket League gegen Bots** einmal an der Seitenwand entlang und einmal quer über den Boden. **Beende das Match** und vergleiche, wie er rutscht."
      }
    },
    "experience": {
      "family": "puck-play",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["full-match"],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "co-op",
          "formation": "team",
          "mode": "bot exhibition"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "rocket-league-low-gravity-follow",
    "moodIds": ["curious"],
    "type": "experiment",
    "tags": ["new-approach", "full-match"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "rocket-league",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "A Longer Flight",
        "objective": "Set low gravity for a **Rocket League Soccar exhibition against bots**. **Finish the match after trying an aerial touch**, and notice when you have to stop boosting to land.",
        "gameObjective": "Set low gravity for a **Rocket League Soccar exhibition against bots**. **Finish the match after trying an aerial touch**, and notice when you have to stop boosting to land."
      },
      "de": {
        "name": "Länger in der Luft",
        "objective": "Stell für ein **Soccar-Testspiel in Rocket League gegen Bots** geringe Schwerkraft ein. **Probier eine Ballberührung in der Luft und beende das Match**. Achte darauf, wann du den Boost loslassen musst, um zu landen.",
        "gameObjective": "Stell für ein **Soccar-Testspiel in Rocket League gegen Bots** geringe Schwerkraft ein. **Probier eine Ballberührung in der Luft und beende das Match**. Achte darauf, wann du den Boost loslassen musst, um zu landen."
      }
    },
    "experience": {
      "family": "aerial-gravity",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["full-match"],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "co-op",
          "formation": "team",
          "mode": "bot exhibition"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "rocket-league-camera-at-possession",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["full-match", "vs-bots"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "rocket-league",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Two Camera Views",
        "objective": "In a **Rocket League Soccar exhibition against bots**, use ball cam while defending and switch to car cam when carrying the ball. **Finish the match with both views used** and compare what you could see.",
        "gameObjective": "In a **Rocket League Soccar exhibition against bots**, use ball cam while defending and switch to car cam when carrying the ball. **Finish the match with both views used** and compare what you could see."
      },
      "de": {
        "name": "Zwei Kamerablicke",
        "objective": "Nutze in einem **Rocket-League-Soccar-Schaukampf gegen Bots** Ballkamera beim Verteidigen und Autokamera beim Dribbeln. **Beende das Match mit beiden Ansichten ausprobiert** und vergleiche, was du sehen konntest.",
        "gameObjective": "Nutze in einem **Rocket-League-Soccar-Schaukampf gegen Bots** Ballkamera beim Verteidigen und Autokamera beim Dribbeln. **Beende das Match mit beiden Ansichten ausprobiert** und vergleiche, was du sehen konntest."
      }
    },
    "experience": {
      "family": "camera-perspectives",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["full-match"],
      "prerequisites": [
        {
          "en": "Solo / bot mode available",
          "de": "Solo- / Bot-Modus verfügbar",
          "chips": {"en": ["Bot mode"], "de": ["Bot-Modus"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "co-op",
          "formation": "team",
          "mode": "bot exhibition"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "rocket-league-opponent-replay-view",
    "moodIds": ["focused", "curious"],
    "type": "experiment",
    "tags": ["replay"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "rocket-league",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Their View",
        "objective": "Open a **saved Rocket League replay with a goal against you**. Watch the attack from your car and then from the scorer’s. **Compare when and where each can see the opening**.",
        "gameObjective": "Open a **saved Rocket League replay with a goal against you**. Watch the attack from your car and then from the scorer’s. **Compare when and where each can see the opening**."
      },
      "de": {
        "name": "Das Tor aus Gegnersicht",
        "objective": "Öffne ein **gespeichertes Rocket-League-Replay mit einem Gegentor**. Sieh den Angriff einmal aus deinem Auto und einmal aus dem Auto des Torschützen. **Vergleiche, wann und wo die Lücke für beide sichtbar wird**.",
        "gameObjective": "Öffne ein **gespeichertes Rocket-League-Replay mit einem Gegentor**. Sieh den Angriff einmal aus deinem Auto und einmal aus dem Auto des Torschützen. **Vergleiche, wann und wo die Lücke für beide sichtbar wird**."
      }
    },
    "experience": {
      "family": "replay-analysis",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "en": "Saved replay with a goal against you",
          "de": "Gespeichertes Replay mit Gegentor",
          "chips": {"en": ["Saved replay"], "de": ["Gespeichertes Replay"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "saved replay"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "rocket-league-launch-and-meet",
    "moodIds": ["challenge", "focused"],
    "type": "challenge",
    "tags": ["three-attempts"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "rocket-league",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Meet It Airborne",
        "objective": "Use Launch Ball in **Rocket League Free Play**. **Touch the ball in the air before it bounces**, or stop after three launches.",
        "gameObjective": "Use Launch Ball in **Rocket League Free Play**. **Touch the ball in the air before it bounces**, or stop after three launches."
      },
      "de": {
        "name": "In der Luft treffen",
        "objective": "Nutze Launch Ball in **Rocket League Free Play**. **Berühre den Ball in der Luft vor seinem ersten Aufsprung** oder hör nach drei Starts auf.",
        "gameObjective": "Nutze Launch Ball in **Rocket League Free Play**. **Berühre den Ball in der Luft vor seinem ersten Aufsprung** oder hör nach drei Starts auf."
      }
    },
    "experience": {
      "family": "aerial-interception",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["three-attempts"],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "Free Play"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "rocket-league-reverse-defend-shot",
    "moodIds": ["challenge"],
    "type": "challenge",
    "tags": ["three-attempts"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "rocket-league",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "A Reverse Save",
        "objective": "In **Rocket League Free Play**, face away from your goal before using Defend Shot. **Save the shot while driving backward**, or stop after three shots.",
        "gameObjective": "In **Rocket League Free Play**, face away from your goal before using Defend Shot. **Save the shot while driving backward**, or stop after three shots."
      },
      "de": {
        "name": "Rückwärts halten",
        "objective": "Stell dich in **Rocket League Free Play** mit dem Rücken zum Tor und nutze Defend Shot. **Halte den Schuss beim Rückwärtsfahren** oder hör nach drei Schüssen auf.",
        "gameObjective": "Stell dich in **Rocket League Free Play** mit dem Rücken zum Tor und nutze Defend Shot. **Halte den Schuss beim Rückwärtsfahren** oder hör nach drei Schüssen auf."
      }
    },
    "experience": {
      "family": "reverse-defense",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["three-attempts"],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "Free Play"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "rocket-league-bot-bump-space",
    "moodIds": ["focused", "curious"],
    "type": "experiment",
    "tags": ["vs-bots", "full-match"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "rocket-league",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Room for the Ball",
        "objective": "In a **Rocket League 1v1 exhibition against bots**, try bumping the bot away from the ball before your next touch. **Finish the match** and compare the space you gained with a direct ball challenge.",
        "gameObjective": "In a **Rocket League 1v1 exhibition against bots**, try bumping the bot away from the ball before your next touch. **Finish the match** and compare the space you gained with a direct ball challenge."
      },
      "de": {
        "name": "Platz für den Ball",
        "objective": "Versuch in einem **Rocket-League-1-gegen-1 gegen Bots**, den Bot vor deiner nächsten Ballberührung wegzuschieben. **Beende das Match** und vergleiche den Platz mit einem direkten Angriff auf den Ball.",
        "gameObjective": "Versuch in einem **Rocket-League-1-gegen-1 gegen Bots**, den Bot vor deiner nächsten Ballberührung wegzuschieben. **Beende das Match** und vergleiche den Platz mit einem direkten Angriff auf den Ball."
      }
    },
    "experience": {
      "family": "opponent-bumping",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["full-match"],
      "prerequisites": [
        {
          "en": "Solo / bot mode available",
          "de": "Solo- / Bot-Modus verfügbar",
          "chips": {"en": ["Bot mode"], "de": ["Bot-Modus"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "1v1 bot exhibition"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "rocket-league-mirrored-shot-read",
    "moodIds": ["focused", "curious"],
    "type": "experiment",
    "tags": ["new-approach"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "rocket-league",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Read the Other Side",
        "objective": "Open a **Rocket League Custom Training shot** and use the mirror option. **Try the original and mirrored setup once each**, then compare which turn you needed before the shot.",
        "gameObjective": "Open a **Rocket League Custom Training shot** and use the mirror option. **Try the original and mirrored setup once each**, then compare which turn you needed before the shot."
      },
      "de": {
        "name": "Von der anderen Seite",
        "objective": "Öffne einen **Rocket-League-Custom-Training-Schuss** und nutze die Spiegeloption. **Probier Original und gespiegelte Aufstellung je einmal** und vergleiche deine Drehung vor dem Schuss.",
        "gameObjective": "Öffne einen **Rocket-League-Custom-Training-Schuss** und nutze die Spiegeloption. **Probier Original und gespiegelte Aufstellung je einmal** und vergleiche deine Drehung vor dem Schuss."
      }
    },
    "experience": {
      "family": "mirrored-shots",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "en": "Custom Training shot; mirror control",
          "de": "Custom-Training-Schuss; Spiegelsteuerung",
          "chips": {"en": ["Custom Training shot", "Mirror control"], "de": ["Custom-Training-Schuss", "Spiegelsteuerung"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "Custom Training"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "rocket-league-offline-season-return",
    "moodIds": ["nostalgic", "progress"],
    "type": "inspiration",
    "tags": ["current-save"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "rocket-league",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Your Old Team",
        "objective": "Load an **existing offline Season in Rocket League**. **Return to the field with your old team** and pick up at the next fixture.",
        "gameObjective": "Load an **existing offline Season in Rocket League**. **Return to the field with your old team** and pick up at the next fixture."
      },
      "de": {
        "name": "Dein altes Team",
        "objective": "Lad eine **bestehende Offline-Saison in Rocket League**. **Kehre mit deinem alten Team auf den Platz zurück** und setz die Saison beim nächsten Spiel auf dem Spielplan fort.",
        "gameObjective": "Lad eine **bestehende Offline-Saison in Rocket League**. **Kehre mit deinem alten Team auf den Platz zurück** und setz die Saison beim nächsten Spiel auf dem Spielplan fort."
      }
    },
    "experience": {
      "family": "season-play",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "open",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "en": "Existing offline Season",
          "de": "Bestehende Offline-Saison",
          "chips": {"en": ["Season save"], "de": ["Saison-Spielstand"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "co-op",
          "formation": "team",
          "mode": "bot exhibition"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  },
  {
    "id": "rocket-league-club-color-preset",
    "moodIds": ["create", "relax"],
    "type": "creation",
    "tags": ["outfit"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "rocket-league",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Team Colours",
        "objective": "In the **Rocket League garage**, use owned paint finishes and decals to make a preset in the colours of a club you follow. **Save it and take it onto the field in Free Play**.",
        "gameObjective": "In the **Rocket League garage**, use owned paint finishes and decals to make a preset in the colours of a club you follow. **Save it and take it onto the field in Free Play**."
      },
      "de": {
        "name": "Vereinsfarben",
        "objective": "Bau in der **Rocket-League-Garage** mit vorhandenen Lackierungen und Aufklebern ein Preset in den Farben eines Vereins, dem du folgst. **Speichere es und fahr damit in Free Play auf den Platz**.",
        "gameObjective": "Bau in der **Rocket-League-Garage** mit vorhandenen Lackierungen und Aufklebern ein Preset in den Farben eines Vereins, dem du folgst. **Speichere es und fahr damit in Free Play auf den Platz**."
      }
    },
    "experience": {
      "family": "car-style",
      "cardMetadata": { "genreIds": ["sports"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["outfit"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Owned paint finishes and decals",
          "de": "Eigene Lackierungen und Aufkleber",
          "chips": {"en": ["Paint finishes", "Decals"], "de": ["Lackierungen", "Aufkleber"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "Free Play"
        }
      ]
    },
    "gameGenreIds": ["sports"]
  }
]);
