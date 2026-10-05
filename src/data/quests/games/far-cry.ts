import { defineQuests } from "../defineQuests";

export const GamesFarCryQuests = defineQuests([
  {
    "id": "far-cry-primal-owl-opening",
    "moodIds": ["challenge", "focused"],
    "type": "challenge",
    "tags": ["scouting"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-primal"]
    },
    "translations": {
      "en": {
        "name": "Owl Goes First",
        "objective": "In **Far Cry Primal**, scout an uncaptured outpost through your owl. **Have it eliminate a horn blower, then capture the outpost before reinforcements are called**. The attempt ends on capture, a horn sounding or your death.",
        "gameObjective": "In **Far Cry Primal**, scout an uncaptured outpost through your owl. **Have it eliminate a horn blower, then capture the outpost before reinforcements are called**. The attempt ends on capture, a horn sounding or your death."
      },
      "de": {
        "name": "Die Eule beginnt",
        "objective": "Späh in **Far Cry Primal** mit deiner Eule einen noch nicht eroberten Außenposten aus. **Lass sie einen Hornbläser ausschalten und erobere den Posten, bevor Verstärkung gerufen wird**. Der Versuch endet mit der Eroberung, einem Hornsignal oder deinem Tod.",
        "gameObjective": "Späh in **Far Cry Primal** mit deiner Eule einen noch nicht eroberten Außenposten aus. **Lass sie einen Hornbläser ausschalten und erobere den Posten, bevor Verstärkung gerufen wird**. Der Versuch endet mit der Eroberung, einem Hornsignal oder deinem Tod."
      }
    },
    "experience": {
      "family": "owl-outpost",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["scouting"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Owl: Attack unlocked; uncaptured outpost",
          "de": "Eulenangriff frei; offener Außenposten",
          "chips": {"en": ["Owl: Attack", "Outpost"], "de": ["Eulenangriff", "Außenposten"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-fc3-tower-landmark",
    "moodIds": ["explore", "curious"],
    "type": "objective",
    "tags": ["exploration", "no-fast-travel"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-3"]
    },
    "translations": {
      "en": {
        "name": "From the Tower",
        "objective": "In **Far Cry 3**, climb an unfinished radio tower and disable its scrambler. Pick a building visible from the top, then **reach that building without opening the map or placing a waypoint**.",
        "gameObjective": "In **Far Cry 3**, climb an unfinished radio tower and disable its scrambler. Pick a building visible from the top, then **reach that building without opening the map or placing a waypoint**."
      },
      "de": {
        "name": "Vom Turm aus",
        "objective": "Klettere in **Far Cry 3** auf einen unfertigen Funkturm und schalte den Störsender ab. Wähle von oben ein sichtbares Gebäude und **erreiche es, ohne die Karte zu öffnen oder einen Wegpunkt zu setzen**.",
        "gameObjective": "Klettere in **Far Cry 3** auf einen unfertigen Funkturm und schalte den Störsender ab. Wähle von oben ein sichtbares Gebäude und **erreiche es, ohne die Karte zu öffnen oder einen Wegpunkt zu setzen**."
      }
    },
    "experience": {
      "family": "tower-navigation",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["exploration"],
      "rules": ["no-fast-travel"],
      "prerequisites": [
        {
          "en": "Unfinished radio tower",
          "de": "Offener Funkturm",
          "chips": {"en": ["Radio tower"], "de": ["Funkturm"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-fc4-outpost-master",
    "moodIds": ["challenge", "focused"],
    "type": "challenge",
    "tags": ["stealth", "no-detection", "three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-4"]
    },
    "translations": {
      "en": {
        "name": "One Silent Route",
        "objective": "In **Far Cry 4 Outpost Master**, replay a familiar outpost and scout every guard before entering. Plan one route through the alarms and isolated guards, then **liberate the outpost without an alarm sounding**. Stop after success or three attempts.",
        "gameObjective": "In **Far Cry 4 Outpost Master**, replay a familiar outpost and scout every guard before entering. Plan one route through the alarms and isolated guards, then **liberate the outpost without an alarm sounding**. Stop after success or three attempts."
      },
      "de": {
        "name": "Eine lautlose Route",
        "objective": "Wiederhole in **Far Cry 4 Outpost Master** einen Außenposten, den du kennst, und markiere alle Wachen. Plan einen Weg vorbei an Alarmanlagen und einzelnen Wachen und **erobere den Posten, ohne Alarm auszulösen**. Hör nach dem Erfolg oder drei Versuchen auf.",
        "gameObjective": "Wiederhole in **Far Cry 4 Outpost Master** einen Außenposten, den du kennst, und markiere alle Wachen. Plan einen Weg vorbei an Alarmanlagen und einzelnen Wachen und **erobere den Posten, ohne Alarm auszulösen**. Hör nach dem Erfolg oder drei Versuchen auf."
      }
    },
    "experience": {
      "family": "outpost-replay",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["stealth"],
      "rules": ["no-detection", "three-attempts"],
      "prerequisites": [
        {
          "en": "Outpost Master; familiar unlocked outpost",
          "de": "Outpost Master; vertrauter freier Außenposten",
          "chips": {"en": ["Outpost Master", "Outpost"], "de": ["Outpost Master", "Außenposten"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-fc4-buzzer-tower",
    "moodIds": ["explore", "curious"],
    "type": "objective",
    "tags": ["exploration", "traversal"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-4"]
    },
    "translations": {
      "en": {
        "name": "Buzzer to Bell",
        "objective": "In **Far Cry 4**, take a Buzzer to an unliberated bell tower but land at the base instead of on top. **Climb the tower by its intended route and disable the broadcast**, then use the view to choose your next destination.",
        "gameObjective": "In **Far Cry 4**, take a Buzzer to an unliberated bell tower but land at the base instead of on top. **Climb the tower by its intended route and disable the broadcast**, then use the view to choose your next destination."
      },
      "de": {
        "name": "Buzzer zum Turm",
        "objective": "Fliege in **Far Cry 4** mit einem Buzzer zu einem noch nicht befreiten Glockenturm, lande aber an seinem Fuß statt oben. **Klettere auf dem vorgesehenen Weg hinauf und schalte die Übertragung ab**. Wähle von dort dein nächstes Ziel.",
        "gameObjective": "Fliege in **Far Cry 4** mit einem Buzzer zu einem noch nicht befreiten Glockenturm, lande aber an seinem Fuß statt oben. **Klettere auf dem vorgesehenen Weg hinauf und schalte die Übertragung ab**. Wähle von dort dein nächstes Ziel."
      }
    },
    "experience": {
      "family": "tower-climb",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["exploration", "traversal"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Buzzer; unliberated bell tower",
          "de": "Buzzer; offener Glockenturm",
          "chips": {"en": ["Buzzer", "Unliberated bell tower"], "de": ["Buzzer", "Glockenturm"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-fc4-elephant-entry",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["new-approach", "abilities"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-4"]
    },
    "translations": {
      "en": {
        "name": "Elephant Entry",
        "objective": "With Elephant Rider unlocked in **Far Cry 4**, ride into an occupied outpost. **Defeat a guard from the saddle** and watch how the others react to the loud entrance.",
        "gameObjective": "With Elephant Rider unlocked in **Far Cry 4**, ride into an occupied outpost. **Defeat a guard from the saddle** and watch how the others react to the loud entrance."
      },
      "de": {
        "name": "Angriff per Elefant",
        "objective": "Reite in **Far Cry 4** mit freigeschaltetem Elefantenreiten in einen besetzten Außenposten. **Besiege eine Wache vom Sattel aus** und schau, wie die anderen auf den lauten Einstieg reagieren.",
        "gameObjective": "Reite in **Far Cry 4** mit freigeschaltetem Elefantenreiten in einen besetzten Außenposten. **Besiege eine Wache vom Sattel aus** und schau, wie die anderen auf den lauten Einstieg reagieren."
      }
    },
    "experience": {
      "family": "elephant-combat",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["abilities"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Elephant Rider unlocked; uncaptured outpost",
          "de": "Elefantenreiten frei; offener Außenposten",
          "chips": {"en": ["Elephant Rider", "Outpost"], "de": ["Elefantenreiten", "Außenposten"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-fc4-arena-scavenger",
    "moodIds": ["challenge", "restless"],
    "type": "challenge",
    "tags": ["loadout", "three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-4"]
    },
    "translations": {
      "en": {
        "name": "Arena Scavenger",
        "objective": "In **Far Cry 4's Shanath Arena**, begin a battle with its supplied weapon. After that weapon runs dry, take one dropped enemy weapon and use no other firearm. **Win the battle with those two weapons only** or stop after three attempts.",
        "gameObjective": "In **Far Cry 4's Shanath Arena**, begin a battle with its supplied weapon. After that weapon runs dry, take one dropped enemy weapon and use no other firearm. **Win the battle with those two weapons only** or stop after three attempts."
      },
      "de": {
        "name": "Arena-Plünderer",
        "objective": "Beginne in der **Shanath-Arena von Far Cry 4** einen Kampf mit der bereitgestellten Waffe. Wenn sie leer ist, nimm genau eine fallengelassene Gegnerwaffe und keine weitere Schusswaffe. **Gewinne nur mit diesen beiden Waffen** oder hör nach drei Versuchen auf.",
        "gameObjective": "Beginne in der **Shanath-Arena von Far Cry 4** einen Kampf mit der bereitgestellten Waffe. Wenn sie leer ist, nimm genau eine fallengelassene Gegnerwaffe und keine weitere Schusswaffe. **Gewinne nur mit diesen beiden Waffen** oder hör nach drei Versuchen auf."
      }
    },
    "experience": {
      "family": "arena-scavenger",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["loadout"],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Shanath Arena unlocked",
          "de": "Shanath-Arena freigeschaltet",
          "chips": {"en": ["Shanath Arena"], "de": ["Shanath-Arena"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-fc5-boomer-recon",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["scouting", "new-approach"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-5"]
    },
    "translations": {
      "en": {
        "name": "Boomer Goes First",
        "objective": "With Boomer recruited in **Far Cry 5**, send him ahead to mark guards at an occupied outpost. **Use his marks to sneak up on an isolated guard and take them down**, without binoculars.",
        "gameObjective": "With Boomer recruited in **Far Cry 5**, send him ahead to mark guards at an occupied outpost. **Use his marks to sneak up on an isolated guard and take them down**, without binoculars."
      },
      "de": {
        "name": "Boomer geht vor",
        "objective": "Schick in **Far Cry 5** Boomer voraus, damit er die Wachen eines besetzten Außenpostens markiert. **Schleiche dich mit seinen Markierungen an eine einzelne Wache heran und schalte sie aus**, ohne das Fernglas zu benutzen.",
        "gameObjective": "Schick in **Far Cry 5** Boomer voraus, damit er die Wachen eines besetzten Außenpostens markiert. **Schleiche dich mit seinen Markierungen an eine einzelne Wache heran und schalte sie aus**, ohne das Fernglas zu benutzen."
      }
    },
    "experience": {
      "family": "companion-recon",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["scouting"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Boomer recruited; occupied outpost",
          "de": "Boomer angeworben; feindlicher Außenposten",
          "chips": {"en": ["Boomer", "Outpost"], "de": ["Boomer", "Außenposten"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-primal-grapple-crossing",
    "moodIds": ["curious", "explore"],
    "type": "experiment",
    "tags": ["traversal"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-primal"]
    },
    "translations": {
      "en": {
        "name": "Claw Across the Gap",
        "objective": "With Wogah’s grappling claw in **Far Cry Primal**, find an accessible marked grapple point over a gap. **Swing across and reach the far path**, then look back at the ground route you skipped.",
        "gameObjective": "With Wogah’s grappling claw in **Far Cry Primal**, find an accessible marked grapple point over a gap. **Swing across and reach the far path**, then look back at the ground route you skipped."
      },
      "de": {
        "name": "Mit der Klaue hinüber",
        "objective": "Such in **Far Cry Primal** mit Wogahs Kletterklaue einen erreichbaren markierten Punkt über einer Lücke. **Schwing hinüber auf den anderen Weg** und schau auf die Bodenstrecke zurück.",
        "gameObjective": "Such in **Far Cry Primal** mit Wogahs Kletterklaue einen erreichbaren markierten Punkt über einer Lücke. **Schwing hinüber auf den anderen Weg** und schau auf die Bodenstrecke zurück."
      }
    },
    "experience": {
      "family": "grapple-crossing",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["traversal"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Wogah’s grappling claw",
          "de": "Wogahs Kletterklaue",
          "chips": {"en": ["Wogah’s grappling claw"], "de": ["Wogahs Kletterklaue"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-primal-cold-fire-route",
    "moodIds": ["focused", "challenge"],
    "type": "challenge",
    "tags": ["traversal", "three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-primal"]
    },
    "translations": {
      "en": {
        "name": "Between Two Fires",
        "objective": "With winter clothing unlocked in **Far Cry Primal**, choose two nearby northern fires you have already located. **Reach the second before the cold meter empties**, or stop after three trips.",
        "gameObjective": "With winter clothing unlocked in **Far Cry Primal**, choose two nearby northern fires you have already located. **Reach the second before the cold meter empties**, or stop after three trips."
      },
      "de": {
        "name": "Zwischen zwei Feuern",
        "objective": "Wähle in **Far Cry Primal** mit freigeschalteter Winterkleidung zwei nahe, bereits gefundene Feuer im Norden. **Erreiche das zweite, bevor der Kältebalken leer ist**, oder hör nach drei Strecken auf.",
        "gameObjective": "Wähle in **Far Cry Primal** mit freigeschalteter Winterkleidung zwei nahe, bereits gefundene Feuer im Norden. **Erreiche das zweite, bevor der Kältebalken leer ist**, oder hör nach drei Strecken auf."
      }
    },
    "experience": {
      "family": "cold-route",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["traversal"],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Winter clothing; two known northern fires",
          "de": "Winterkleidung; zwei bekannte Feuer im Norden",
          "chips": {"en": ["Winter clothing", "Two northern fires"], "de": ["Winterkleidung", "Zwei Feuer im Norden"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-primal-northern-shelter",
    "moodIds": ["explore"],
    "type": "inspiration",
    "tags": ["exploration"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-primal"]
    },
    "translations": {
      "en": {
        "name": "Shelter in the North",
        "objective": "With winter clothing available in Far Cry Primal, **explore the edge of the snowy north**. Follow sheltered rock faces and caves where the cold landscape changes your usual route.",
        "gameObjective": "With winter clothing available in Far Cry Primal, **explore the edge of the snowy north**. Follow sheltered rock faces and caves where the cold landscape changes your usual route."
      },
      "de": {
        "name": "Schutz im Norden",
        "objective": "Erkunde in Far Cry Primal mit verfügbarer Winterkleidung den Rand des verschneiten Nordens. **Folge geschützten Felswänden und Höhlen**, wo die Kälte deinen üblichen Weg verändert.",
        "gameObjective": "Erkunde in Far Cry Primal mit verfügbarer Winterkleidung den Rand des verschneiten Nordens. **Folge geschützten Felswänden und Höhlen**, wo die Kälte deinen üblichen Weg verändert."
      }
    },
    "experience": {
      "family": "northern-roaming",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["exploration"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Winter clothing",
          "de": "Winterkleidung",
          "chips": {"en": ["Winter clothing"], "de": ["Winterkleidung"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-primal-mammoth-ride",
    "moodIds": ["restless", "curious"],
    "type": "objective",
    "tags": ["traversal"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-primal"]
    },
    "translations": {
      "en": {
        "name": "Mammoth Crossing",
        "objective": "With Mammoth Rider unlocked and a rideable mammoth already nearby in **Far Cry Primal**, **ride it across one shallow river and dismount on the far bank**.",
        "gameObjective": "With Mammoth Rider unlocked and a rideable mammoth already nearby in **Far Cry Primal**, **ride it across one shallow river and dismount on the far bank**."
      },
      "de": {
        "name": "Auf dem Mammut",
        "objective": "Reite in **Far Cry Primal** mit freigeschaltetem Mammutreiten und einem bereits gefundenen reitbaren Mammut **durch einen flachen Fluss und steig am anderen Ufer ab**.",
        "gameObjective": "Reite in **Far Cry Primal** mit freigeschaltetem Mammutreiten und einem bereits gefundenen reitbaren Mammut **durch einen flachen Fluss und steig am anderen Ufer ab**."
      }
    },
    "experience": {
      "family": "mammoth-crossing",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["traversal"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Mammoth Rider; nearby rideable mammoth",
          "de": "Mammutreiten; nahes reitbares Mammut",
          "chips": {"en": ["Mammoth Rider", "Rideable mammoth"], "de": ["Mammutreiten", "Reitbares Mammut"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-primal-sabre-trail",
    "moodIds": ["restless", "explore"],
    "type": "inspiration",
    "tags": ["traversal"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-primal"]
    },
    "translations": {
      "en": {
        "name": "Sabretooth Trail",
        "objective": "With a tamed sabretooth and Beast Rider unlocked in Far Cry Primal, **take the forest paths on its back**. Follow the bends and slopes you normally cross on foot.",
        "gameObjective": "With a tamed sabretooth and Beast Rider unlocked in Far Cry Primal, **take the forest paths on its back**. Follow the bends and slopes you normally cross on foot."
      },
      "de": {
        "name": "Pfad auf Säbelzähnen",
        "objective": "Nimm in Far Cry Primal mit gezähmtem Säbelzahntiger und freigeschaltetem Tier-Reiten die Waldwege auf seinem Rücken. **Folge Kurven und Hängen**, die du sonst zu Fuß überquerst.",
        "gameObjective": "Nimm in Far Cry Primal mit gezähmtem Säbelzahntiger und freigeschaltetem Tier-Reiten die Waldwege auf seinem Rücken. **Folge Kurven und Hängen**, die du sonst zu Fuß überquerst."
      }
    },
    "experience": {
      "family": "beast-roaming",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["traversal"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Tamed sabretooth; Beast Rider",
          "de": "Gezähmter Säbelzahntiger; Tier-Reiten",
          "chips": {"en": ["Tamed sabretooth", "Beast Rider"], "de": ["Gezähmter Säbelzahntiger", "Tier-Reiten"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-primal-bear-forager",
    "moodIds": ["curious", "explore"],
    "type": "experiment",
    "tags": ["collectibles"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-primal"]
    },
    "translations": {
      "en": {
        "name": "The Bear’s Finds",
        "objective": "With a tamed brown bear in **Far Cry Primal**, walk past ordinary gatherable resources and leave it idle nearby. **Inspect one resource it gathers**, or stop after checking three resource patches.",
        "gameObjective": "With a tamed brown bear in **Far Cry Primal**, walk past ordinary gatherable resources and leave it idle nearby. **Inspect one resource it gathers**, or stop after checking three resource patches."
      },
      "de": {
        "name": "Die Funde des Bären",
        "objective": "Geh in **Far Cry Primal** mit einem gezähmten Braunbären an gewöhnlichen Sammelstellen vorbei und lass ihn daneben warten. **Prüfe eine von ihm gesammelte Ressource** oder hör nach drei Stellen auf.",
        "gameObjective": "Geh in **Far Cry Primal** mit einem gezähmten Braunbären an gewöhnlichen Sammelstellen vorbei und lass ihn daneben warten. **Prüfe eine von ihm gesammelte Ressource** oder hör nach drei Stellen auf."
      }
    },
    "experience": {
      "family": "bear-foraging",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["collectibles"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Tamed brown bear",
          "de": "Gezähmter Braunbär",
          "chips": {"en": ["Tamed brown bear"], "de": ["Gezähmter Braunbär"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-primal-jaguar-silent-command",
    "moodIds": ["challenge", "focused"],
    "type": "challenge",
    "tags": ["stealth", "three-attempts"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-primal"]
    },
    "translations": {
      "en": {
        "name": "Jaguar from the Brush",
        "objective": "With a tamed jaguar in **Far Cry Primal**, stay crouched outside a small occupied camp. **Have it kill an isolated guard while you remain unseen**. Stop after success or three commands.",
        "gameObjective": "With a tamed jaguar in **Far Cry Primal**, stay crouched outside a small occupied camp. **Have it kill an isolated guard while you remain unseen**. Stop after success or three commands."
      },
      "de": {
        "name": "Jaguar aus dem Gebüsch",
        "objective": "Bleib in **Far Cry Primal** mit gezähmtem Jaguar geduckt außerhalb eines kleinen besetzten Lagers. **Lass ihn eine einzelne Wache töten, ohne selbst entdeckt zu werden**. Hör nach dem Erfolg oder drei Befehlen auf.",
        "gameObjective": "Bleib in **Far Cry Primal** mit gezähmtem Jaguar geduckt außerhalb eines kleinen besetzten Lagers. **Lass ihn eine einzelne Wache töten, ohne selbst entdeckt zu werden**. Hör nach dem Erfolg oder drei Befehlen auf."
      }
    },
    "experience": {
      "family": "companion-stealth",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["stealth"],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Tamed jaguar; occupied camp",
          "de": "Gezähmter Jaguar; besetztes Lager",
          "chips": {"en": ["Tamed jaguar", "Occupied camp"], "de": ["Gezähmter Jaguar", "Besetztes Lager"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-primal-sling-helmet",
    "moodIds": ["focused", "challenge"],
    "type": "challenge",
    "tags": ["one-weapon", "three-attempts"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-primal"]
    },
    "translations": {
      "en": {
        "name": "Stone Through the Helmet",
        "objective": "With Precision Sling unlocked in **Far Cry Primal**, find an already spotted helmeted enemy. **Kill them with a sling headshot**, or stop after three shots.",
        "gameObjective": "With Precision Sling unlocked in **Far Cry Primal**, find an already spotted helmeted enemy. **Kill them with a sling headshot**, or stop after three shots."
      },
      "de": {
        "name": "Stein durch den Helm",
        "objective": "Versuch in **Far Cry Primal** mit freigeschalteter Präzisionsschleuder gegen einen bereits gesichteten Gegner mit Helm, **ihn per Schleuder-Kopftreffer zu töten**. Hör nach dem Erfolg oder drei Schüssen auf.",
        "gameObjective": "Versuch in **Far Cry Primal** mit freigeschalteter Präzisionsschleuder gegen einen bereits gesichteten Gegner mit Helm, **ihn per Schleuder-Kopftreffer zu töten**. Hör nach dem Erfolg oder drei Schüssen auf."
      }
    },
    "experience": {
      "family": "sling-headshot",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["one-weapon", "three-attempts"],
      "prerequisites": [
        {
          "en": "Precision Sling unlocked",
          "de": "Präzisionsschleuder freigeschaltet",
          "chips": {"en": ["Precision Sling"], "de": ["Präzisionsschleuder"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-primal-trap-predator",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["hunting"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-primal"]
    },
    "translations": {
      "en": {
        "name": "Let It Step In",
        "objective": "With traps unlocked and a predator already nearby in **Far Cry Primal**, place a trap on its approach. **Try to catch it and observe the result**, ending after the trap triggers or three placements.",
        "gameObjective": "With traps unlocked and a predator already nearby in **Far Cry Primal**, place a trap on its approach. **Try to catch it and observe the result**, ending after the trap triggers or three placements."
      },
      "de": {
        "name": "In die Falle",
        "objective": "Leg in **Far Cry Primal** mit freigeschalteten Fallen und bereits nahem Raubtier eine Falle auf seinen Weg. **Teste die Falle und beobachte das Ergebnis**. Hör nach Auslösung oder drei Platzierungen auf.",
        "gameObjective": "Leg in **Far Cry Primal** mit freigeschalteten Fallen und bereits nahem Raubtier eine Falle auf seinen Weg. **Teste die Falle und beobachte das Ergebnis**. Hör nach Auslösung oder drei Platzierungen auf."
      }
    },
    "experience": {
      "family": "predator-trap",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["hunting"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Traps unlocked; nearby predator",
          "de": "Fallen frei; nahes Raubtier",
          "chips": {"en": ["Traps", "Predator"], "de": ["Fallen", "Raubtier"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-primal-fire-spread",
    "moodIds": ["curious", "create"],
    "type": "experiment",
    "tags": ["new-approach"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-primal"]
    },
    "translations": {
      "en": {
        "name": "Watch the Dry Grass",
        "objective": "In **Far Cry Primal**, choose an empty patch of dry grass away from the village. Ignite it with your weapon and **watch where the fire travels before moving back onto bare ground**.",
        "gameObjective": "In **Far Cry Primal**, choose an empty patch of dry grass away from the village. Ignite it with your weapon and **watch where the fire travels before moving back onto bare ground**."
      },
      "de": {
        "name": "Trockenes Gras",
        "objective": "Wähle in **Far Cry Primal** eine freie Stelle mit trockenem Gras abseits des Dorfs. Entzünde sie mit deiner Waffe und **beobachte die Ausbreitung, bevor du auf freien Boden zurückgehst**.",
        "gameObjective": "Wähle in **Far Cry Primal** eine freie Stelle mit trockenem Gras abseits des Dorfs. Entzünde sie mit deiner Waffe und **beobachte die Ausbreitung, bevor du auf freien Boden zurückgehst**."
      }
    },
    "experience": {
      "family": "fire-spread",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": [],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-primal-extinguish-club",
    "moodIds": ["curious"],
    "type": "experiment",
    "tags": ["one-weapon"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-primal"]
    },
    "translations": {
      "en": {
        "name": "Fire Meets Water",
        "objective": "Beside a safe shallow stream in **Far Cry Primal**, ignite your club and wade into the water. **Check the flame afterward and relight the club on dry ground**.",
        "gameObjective": "Beside a safe shallow stream in **Far Cry Primal**, ignite your club and wade into the water. **Check the flame afterward and relight the club on dry ground**."
      },
      "de": {
        "name": "Feuer trifft Wasser",
        "objective": "Zünde in **Far Cry Primal** neben einem sicheren flachen Bach deine Keule an und geh ins Wasser. **Prüfe danach die Flamme und entzünde die Keule an Land erneut**.",
        "gameObjective": "Zünde in **Far Cry Primal** neben einem sicheren flachen Bach deine Keule an und geh ins Wasser. **Prüfe danach die Flamme und entzünde die Keule an Land erneut**."
      }
    },
    "experience": {
      "family": "flame-extinguish",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["one-weapon"],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-primal-owl-berserk-drop",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["gadgets", "scouting"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-primal"]
    },
    "translations": {
      "en": {
        "name": "Confusion from Above",
        "objective": "With Owl Weapon Drop and berserk bombs unlocked in **Far Cry Primal**, scout a small enemy group. **Drop one berserk bomb through the owl and observe the group’s reaction** before approaching.",
        "gameObjective": "With Owl Weapon Drop and berserk bombs unlocked in **Far Cry Primal**, scout a small enemy group. **Drop one berserk bomb through the owl and observe the group’s reaction** before approaching."
      },
      "de": {
        "name": "Verwirrung von oben",
        "objective": "Späh in **Far Cry Primal** mit freigeschaltetem Eulen-Waffenabwurf und Berserkerbomben eine kleine Gegnergruppe aus. **Wirf per Eule eine Berserkerbombe ab und beobachte die Reaktion**, bevor du hingehst.",
        "gameObjective": "Späh in **Far Cry Primal** mit freigeschaltetem Eulen-Waffenabwurf und Berserkerbomben eine kleine Gegnergruppe aus. **Wirf per Eule eine Berserkerbombe ab und beobachte die Reaktion**, bevor du hingehst."
      }
    },
    "experience": {
      "family": "owl-bomb",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["gadgets", "scouting"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Owl Weapon Drop; berserk bombs",
          "de": "Eulen-Waffenabwurf; Berserkerbomben",
          "chips": {"en": ["Owl Weapon Drop", "Berserk bombs"], "de": ["Eulen-Waffenabwurf", "Berserkerbomben"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-primal-hut-ready",
    "moodIds": ["create", "progress"],
    "type": "creation",
    "tags": ["building"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-primal"]
    },
    "translations": {
      "en": {
        "name": "A Better Wenja Hut",
        "objective": "In **Far Cry Primal**, pick a recruited specialist’s hut upgrade whose materials and population requirement you already meet. **Build the upgrade and inspect the changed hut**.",
        "gameObjective": "In **Far Cry Primal**, pick a recruited specialist’s hut upgrade whose materials and population requirement you already meet. **Build the upgrade and inspect the changed hut**."
      },
      "de": {
        "name": "Eine bessere Wenja-Hütte",
        "objective": "Wähle in **Far Cry Primal** bei einem angeworbenen Spezialisten eine Hüttenverbesserung, für die Material und Bevölkerung schon reichen. **Bau sie und schau dir die veränderte Hütte an**.",
        "gameObjective": "Wähle in **Far Cry Primal** bei einem angeworbenen Spezialisten eine Hüttenverbesserung, für die Material und Bevölkerung schon reichen. **Bau sie und schau dir die veränderte Hütte an**."
      }
    },
    "experience": {
      "family": "hut-upgrade",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["building"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Specialist recruited; materials and population met",
          "de": "Spezialist angeworben; Material und Bevölkerung erfüllt",
          "chips": {"en": ["Specialist"], "de": ["Spezialist"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-primal-spirit-totem",
    "moodIds": ["explore", "progress"],
    "type": "objective",
    "tags": ["collectibles"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-primal"]
    },
    "translations": {
      "en": {
        "name": "Totem in Place",
        "objective": "Follow an accessible unfilled Spirit Totem marker in **Far Cry Primal**. Find its placement point and **place the totem to activate that location**.",
        "gameObjective": "Follow an accessible unfilled Spirit Totem marker in **Far Cry Primal**. Find its placement point and **place the totem to activate that location**."
      },
      "de": {
        "name": "Totem aufstellen",
        "objective": "Folge in **Far Cry Primal** einem erreichbaren, noch leeren Geistertotem-Marker. Such die Stelle und **stell das Totem dort auf**.",
        "gameObjective": "Folge in **Far Cry Primal** einem erreichbaren, noch leeren Geistertotem-Marker. Such die Stelle und **stell das Totem dort auf**."
      }
    },
    "experience": {
      "family": "totem",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["collectibles"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Accessible unfilled Spirit Totem location",
          "de": "Erreichbarer leerer Geistertotem-Ort",
          "chips": {"en": ["Spirit Totem"], "de": ["Geistertotem"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-primal-wenja-trail",
    "moodIds": ["focused", "explore"],
    "type": "objective",
    "tags": ["story"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-primal"]
    },
    "translations": {
      "en": {
        "name": "The Missing Wenja",
        "objective": "Choose an available Search and Rescue mission in **Far Cry Primal**. Follow the trail clues and **rescue the Wenja at the end of the trail**.",
        "gameObjective": "Choose an available Search and Rescue mission in **Far Cry Primal**. Follow the trail clues and **rescue the Wenja at the end of the trail**."
      },
      "de": {
        "name": "Der vermisste Wenja",
        "objective": "Wähle in **Far Cry Primal** einen verfügbaren Such-und-Rettungsauftrag. Folge den Spuren und **rette den Wenja am Ende des Weges**.",
        "gameObjective": "Wähle in **Far Cry Primal** einen verfügbaren Such-und-Rettungsauftrag. Folge den Spuren und **rette den Wenja am Ende des Weges**."
      }
    },
    "experience": {
      "family": "rescue-trail",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Available Search and Rescue mission",
          "de": "Verfügbarer Such-und-Rettungsauftrag",
          "chips": {"en": ["Search and Rescue"], "de": ["Suchen und Retten"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-primal-escort-procession",
    "moodIds": ["focused", "progress"],
    "type": "objective",
    "tags": ["story"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-primal"]
    },
    "translations": {
      "en": {
        "name": "Protect the Procession",
        "objective": "Start an available Wenja Escort mission in **Far Cry Primal**. Stay with the group and **get the surviving Wenja to their marked destination**.",
        "gameObjective": "Start an available Wenja Escort mission in **Far Cry Primal**. Stay with the group and **get the surviving Wenja to their marked destination**."
      },
      "de": {
        "name": "Den Zug beschützen",
        "objective": "Starte in **Far Cry Primal** einen verfügbaren Wenja-Eskortauftrag. Bleib bei der Gruppe und **bring die überlebenden Wenja an ihr markiertes Ziel**.",
        "gameObjective": "Starte in **Far Cry Primal** einen verfügbaren Wenja-Eskortauftrag. Bleib bei der Gruppe und **bring die überlebenden Wenja an ihr markiertes Ziel**."
      }
    },
    "experience": {
      "family": "escort",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Available Wenja Escort mission",
          "de": "Verfügbarer Wenja-Eskortauftrag",
          "chips": {"en": ["Wenja Escort mission"], "de": ["Wenja-Eskortauftrag"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-primal-tribal-destruction",
    "moodIds": ["restless", "progress"],
    "type": "objective",
    "tags": ["story"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-primal"]
    },
    "translations": {
      "en": {
        "name": "Break the Stockpile",
        "objective": "Take an available Tribal Clash: Destroy mission in **Far Cry Primal**. Use fire or clubs on the marked supplies and **finish the destruction objective**.",
        "gameObjective": "Take an available Tribal Clash: Destroy mission in **Far Cry Primal**. Use fire or clubs on the marked supplies and **finish the destruction objective**."
      },
      "de": {
        "name": "Vorräte zerstören",
        "objective": "Nimm in **Far Cry Primal** einen verfügbaren Stammeskonflikt mit Zerstörungsziel an. Benutze Feuer oder Keulen gegen die markierten Vorräte und **schließ das Zerstörungsziel ab**.",
        "gameObjective": "Nimm in **Far Cry Primal** einen verfügbaren Stammeskonflikt mit Zerstörungsziel an. Benutze Feuer oder Keulen gegen die markierten Vorräte und **schließ das Zerstörungsziel ab**."
      }
    },
    "experience": {
      "family": "supplies-destruction",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Available Tribal Clash: Destroy mission",
          "de": "Verfügbarer Stammeskonflikt mit Zerstörungsziel",
          "chips": {"en": ["Tribal Clash"], "de": ["Stammeskonflikt"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-primal-vision-return",
    "moodIds": ["curious", "explore"],
    "type": "inspiration",
    "tags": ["story"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-primal"]
    },
    "translations": {
      "en": {
        "name": "Inside the Vision",
        "objective": "With an unplayed Tensay vision available in Far Cry Primal, enter it and **explore Oros from its unfamiliar animal perspective**.",
        "gameObjective": "With an unplayed Tensay vision available in Far Cry Primal, enter it and **explore Oros from its unfamiliar animal perspective**."
      },
      "de": {
        "name": "In der Vision",
        "objective": "Betritt in Far Cry Primal eine noch offene Vision von Tensay und **erkunde Oros aus ihrer ungewohnten Tierperspektive**.",
        "gameObjective": "Betritt in Far Cry Primal eine noch offene Vision von Tensay und **erkunde Oros aus ihrer ungewohnten Tierperspektive**."
      }
    },
    "experience": {
      "family": "vision",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Unplayed Tensay vision available",
          "de": "Offene Tensay-Vision verfügbar",
          "chips": {"en": ["Tensay vision"], "de": ["Tensay-Vision"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-primal-village-evening",
    "moodIds": ["low-energy", "relax"],
    "type": "inspiration",
    "tags": ["on-foot"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-primal"]
    },
    "translations": {
      "en": {
        "name": "The Village You Built",
        "objective": "Return to the Wenja village in Far Cry Primal after recruiting several specialists. Walk between their huts and **watch the tribe at work** before heading back into Oros.",
        "gameObjective": "Return to the Wenja village in Far Cry Primal after recruiting several specialists. Walk between their huts and **watch the tribe at work** before heading back into Oros."
      },
      "de": {
        "name": "Das gewachsene Dorf",
        "objective": "Kehre in Far Cry Primal nach der Anwerbung mehrerer Spezialisten ins Wenja-Dorf zurück. Geh zwischen ihren Hütten umher und **schau dem Stamm bei der Arbeit zu**.",
        "gameObjective": "Kehre in Far Cry Primal nach der Anwerbung mehrerer Spezialisten ins Wenja-Dorf zurück. Geh zwischen ihren Hütten umher und **schau dem Stamm bei der Arbeit zu**."
      }
    },
    "experience": {
      "family": "village-roaming",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "open",
      "activities": [],
      "rules": ["on-foot"],
      "prerequisites": [
        {
          "en": "Several specialists recruited",
          "de": "Mehrere Spezialisten angeworben",
          "chips": {"en": ["Specialists"], "de": ["Spezialisten"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-primal-takkar-bow-upgrade",
    "moodIds": ["progress"],
    "type": "objective",
    "tags": ["crafting"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-primal"]
    },
    "translations": {
      "en": {
        "name": "A Stronger Bow",
        "objective": "At Takkar’s crafting menu in **Far Cry Primal**, choose a bow upgrade whose materials and hut requirement are already met. **Craft it and use the upgraded bow on one hostile encounter**.",
        "gameObjective": "At Takkar’s crafting menu in **Far Cry Primal**, choose a bow upgrade whose materials and hut requirement are already met. **Craft it and use the upgraded bow on one hostile encounter**."
      },
      "de": {
        "name": "Ein stärkerer Bogen",
        "objective": "Wähle in **Far Cry Primal** im Herstellungsmenü eine Bogenverbesserung, für die Material und Hüttenvoraussetzung schon passen. **Stell sie her und benutze den verbesserten Bogen in einer Gegnerbegegnung**.",
        "gameObjective": "Wähle in **Far Cry Primal** im Herstellungsmenü eine Bogenverbesserung, für die Material und Hüttenvoraussetzung schon passen. **Stell sie her und benutze den verbesserten Bogen in einer Gegnerbegegnung**."
      }
    },
    "experience": {
      "family": "bow-upgrade",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["crafting"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Bow upgrade materials and hut requirement met",
          "de": "Bogenmaterial und Hüttenvoraussetzung erfüllt",
          "chips": {"en": ["Bow upgrade"], "de": ["Bogen-Upgrade"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-fc3-supply-delivery",
    "moodIds": ["restless", "challenge"],
    "type": "challenge",
    "tags": ["driving", "three-attempts"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-3"]
    },
    "translations": {
      "en": {
        "name": "Medicine on the Clock",
        "objective": "At an available Supply Drop vehicle in **Far Cry 3**, **complete its medicine route before the in-game timer runs out**. Stop after success or three runs.",
        "gameObjective": "At an available Supply Drop vehicle in **Far Cry 3**, **complete its medicine route before the in-game timer runs out**. Stop after success or three runs."
      },
      "de": {
        "name": "Medizin gegen die Zeit",
        "objective": "Versuch in **Far Cry 3** an einem verfügbaren Nachschub-Fahrzeug, **die Medizinroute vor Ablauf des Spieltimers zu schaffen**. Hör nach dem Erfolg oder drei Fahrten auf.",
        "gameObjective": "Versuch in **Far Cry 3** an einem verfügbaren Nachschub-Fahrzeug, **die Medizinroute vor Ablauf des Spieltimers zu schaffen**. Hör nach dem Erfolg oder drei Fahrten auf."
      }
    },
    "experience": {
      "family": "timed-delivery",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["driving"],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Supply Drop mission available",
          "de": "Nachschubauftrag verfügbar",
          "chips": {"en": ["Supply Drop mission"], "de": ["Nachschubauftrag"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-fc3-wanted-knife",
    "moodIds": ["focused", "progress"],
    "type": "objective",
    "tags": ["stealth"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-3"]
    },
    "translations": {
      "en": {
        "name": "Rakyat’s Marked Target",
        "objective": "Take an available Wanted Dead contract in **Far Cry 3**. Scout the marked leader and **complete the contract with the required knife kill**.",
        "gameObjective": "Take an available Wanted Dead contract in **Far Cry 3**. Scout the marked leader and **complete the contract with the required knife kill**."
      },
      "de": {
        "name": "Ziel für die Rakyat",
        "objective": "Nimm in **Far Cry 3** einen verfügbaren Kopfgeldauftrag mit Messerpflicht an. Späh den markierten Anführer aus und **schließ den Auftrag mit dem verlangten Messertod ab**.",
        "gameObjective": "Nimm in **Far Cry 3** einen verfügbaren Kopfgeldauftrag mit Messerpflicht an. Späh den markierten Anführer aus und **schließ den Auftrag mit dem verlangten Messertod ab**."
      }
    },
    "experience": {
      "family": "knife-contract",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["stealth"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Wanted Dead contract available",
          "de": "Kopfgeldauftrag mit Messerpflicht verfügbar",
          "chips": {"en": ["Wanted Dead"], "de": ["Kopfgeldauftrag"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-fc3-lost-letter",
    "moodIds": ["explore", "curious"],
    "type": "objective",
    "tags": ["collectibles", "story"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-3"]
    },
    "translations": {
      "en": {
        "name": "A Soldier’s Letter",
        "objective": "With a Letter of the Lost marker accessible in **Far Cry 3**, search the bunker or wreck around it. **Collect the letter and read the entry** before moving on.",
        "gameObjective": "With a Letter of the Lost marker accessible in **Far Cry 3**, search the bunker or wreck around it. **Collect the letter and read the entry** before moving on."
      },
      "de": {
        "name": "Brief eines Soldaten",
        "objective": "Such in **Far Cry 3** bei einem erreichbaren Marker für Briefe der Verlorenen im Bunker oder Wrack darum herum. **Sammle den Brief ein und lies ihn**, bevor du weitergehst.",
        "gameObjective": "Such in **Far Cry 3** bei einem erreichbaren Marker für Briefe der Verlorenen im Bunker oder Wrack darum herum. **Sammle den Brief ein und lies ihn**, bevor du weitergehst."
      }
    },
    "experience": {
      "family": "lost-letter",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["collectibles", "story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Accessible uncollected Letter of the Lost",
          "de": "Erreichbarer offener Brief der Verlorenen",
          "chips": {"en": ["Letter of the Lost"], "de": ["Brief der Verlorenen"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-fc3-multi-death-above",
    "moodIds": ["focused", "challenge"],
    "type": "challenge",
    "tags": ["abilities", "three-attempts"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-3"]
    },
    "translations": {
      "en": {
        "name": "Two Below the Ledge",
        "objective": "With Dual Death from Above unlocked in **Far Cry 3**, find two guards already close together below a reachable ledge. **Perform the double takedown**, or stop after three attempts.",
        "gameObjective": "With Dual Death from Above unlocked in **Far Cry 3**, find two guards already close together below a reachable ledge. **Perform the double takedown**, or stop after three attempts."
      },
      "de": {
        "name": "Zwei unter der Kante",
        "objective": "Such in **Far Cry 3** mit freigeschaltetem Doppel-Takedown von oben zwei bereits nebeneinander stehende Wachen unter einer erreichbaren Kante. **Führe den Doppel-Takedown aus** oder hör nach drei Versuchen auf.",
        "gameObjective": "Such in **Far Cry 3** mit freigeschaltetem Doppel-Takedown von oben zwei bereits nebeneinander stehende Wachen unter einer erreichbaren Kante. **Führe den Doppel-Takedown aus** oder hör nach drei Versuchen auf."
      }
    },
    "experience": {
      "family": "aerial-takedown",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["abilities"],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Dual Death from Above unlocked",
          "de": "Doppel-Takedown von oben frei",
          "chips": {"en": ["Dual Death from Above"], "de": ["Doppel-Takedown von oben"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-fc3-water-takedown",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["stealth"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-3"]
    },
    "translations": {
      "en": {
        "name": "Below the Dock",
        "objective": "With Death from Below unlocked in **Far Cry 3**, find a hostile standing beside reachable water. **Approach from the water and try the takedown**, stopping after it succeeds or three approaches.",
        "gameObjective": "With Death from Below unlocked in **Far Cry 3**, find a hostile standing beside reachable water. **Approach from the water and try the takedown**, stopping after it succeeds or three approaches."
      },
      "de": {
        "name": "Unter dem Steg",
        "objective": "Such in **Far Cry 3** mit freigeschaltetem Takedown von unten einen Gegner neben erreichbarem Wasser. **Nähere dich schwimmend und probier den Takedown**. Hör nach dem Erfolg oder drei Anläufen auf.",
        "gameObjective": "Such in **Far Cry 3** mit freigeschaltetem Takedown von unten einen Gegner neben erreichbarem Wasser. **Nähere dich schwimmend und probier den Takedown**. Hör nach dem Erfolg oder drei Anläufen auf."
      }
    },
    "experience": {
      "family": "water-takedown",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["stealth"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Death from Below unlocked",
          "de": "Takedown von unten frei",
          "chips": {"en": ["Death from Below"], "de": ["Takedown von unten"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-fc3-grenade-takedown",
    "moodIds": ["restless", "curious"],
    "type": "objective",
    "tags": ["abilities"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-3"]
    },
    "translations": {
      "en": {
        "name": "Borrow Their Grenade",
        "objective": "With Grenade Takedown unlocked in **Far Cry 3**, start a takedown on an isolated enemy near a hostile group. **Use the grenade follow-up and retreat from the blast**.",
        "gameObjective": "With Grenade Takedown unlocked in **Far Cry 3**, start a takedown on an isolated enemy near a hostile group. **Use the grenade follow-up and retreat from the blast**."
      },
      "de": {
        "name": "Seine Granate nutzen",
        "objective": "Starte in **Far Cry 3** mit freigeschaltetem Granaten-Takedown einen Takedown gegen einen einzelnen Gegner bei einer Gruppe. **Nutze die Granaten-Fortsetzung und zieh dich aus dem Explosionsbereich zurück**.",
        "gameObjective": "Starte in **Far Cry 3** mit freigeschaltetem Granaten-Takedown einen Takedown gegen einen einzelnen Gegner bei einer Gruppe. **Nutze die Granaten-Fortsetzung und zieh dich aus dem Explosionsbereich zurück**."
      }
    },
    "experience": {
      "family": "grenade-takedown",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["abilities"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Grenade Takedown unlocked",
          "de": "Granaten-Takedown frei",
          "chips": {"en": ["Grenade Takedown"], "de": ["Granaten-Takedown"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-fc3-gunslinger-followup",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["abilities"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-3"]
    },
    "translations": {
      "en": {
        "name": "Their Sidearm",
        "objective": "With Gunslinger Takedown unlocked in **Far Cry 3**, approach two nearby enemies from behind. **Use the first enemy’s pistol in the takedown follow-up** and finish that encounter.",
        "gameObjective": "With Gunslinger Takedown unlocked in **Far Cry 3**, approach two nearby enemies from behind. **Use the first enemy’s pistol in the takedown follow-up** and finish that encounter."
      },
      "de": {
        "name": "Seine Seitenwaffe",
        "objective": "Nähere dich in **Far Cry 3** mit freigeschaltetem Pistolen-Takedown zwei nahen Gegnern von hinten. **Benutze die Pistole des ersten Gegners in der Takedown-Fortsetzung** und beende die Begegnung.",
        "gameObjective": "Nähere dich in **Far Cry 3** mit freigeschaltetem Pistolen-Takedown zwei nahen Gegnern von hinten. **Benutze die Pistole des ersten Gegners in der Takedown-Fortsetzung** und beende die Begegnung."
      }
    },
    "experience": {
      "family": "pistol-takedown",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["abilities"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Gunslinger Takedown unlocked",
          "de": "Pistolen-Takedown frei",
          "chips": {"en": ["Gunslinger Takedown"], "de": ["Pistolen-Takedown"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-fc3-heavy-takedown",
    "moodIds": ["focused", "challenge"],
    "type": "challenge",
    "tags": ["stealth", "three-attempts"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-3"]
    },
    "translations": {
      "en": {
        "name": "Behind the Heavy",
        "objective": "With Heavy Beatdown unlocked in **Far Cry 3**, choose an already located heavy guard. **Defeat them with a rear takedown before detection**, or stop after three approaches.",
        "gameObjective": "With Heavy Beatdown unlocked in **Far Cry 3**, choose an already located heavy guard. **Defeat them with a rear takedown before detection**, or stop after three approaches."
      },
      "de": {
        "name": "Hinter dem Schweren",
        "objective": "Versuch in **Far Cry 3** mit freigeschaltetem schweren Takedown gegen eine bereits gefundene schwere Wache, **sie vor der Entdeckung von hinten per Takedown auszuschalten**. Hör nach dem Erfolg oder drei Anläufen auf.",
        "gameObjective": "Versuch in **Far Cry 3** mit freigeschaltetem schweren Takedown gegen eine bereits gefundene schwere Wache, **sie vor der Entdeckung von hinten per Takedown auszuschalten**. Hör nach dem Erfolg oder drei Anläufen auf."
      }
    },
    "experience": {
      "family": "heavy-takedown",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["stealth"],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Heavy Beatdown unlocked",
          "de": "Schwerer Takedown frei",
          "chips": {"en": ["Heavy Beatdown"], "de": ["Schwerer Takedown"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-fc3-rock-chain",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["stealth"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-3"]
    },
    "translations": {
      "en": {
        "name": "Gather Them with Rocks",
        "objective": "With Chain Takedown unlocked in **Far Cry 3**, throw rocks near two guards. **Try a chained takedown after repositioning them**, ending after the chain works or three setups.",
        "gameObjective": "With Chain Takedown unlocked in **Far Cry 3**, throw rocks near two guards. **Try a chained takedown after repositioning them**, ending after the chain works or three setups."
      },
      "de": {
        "name": "Mit Steinen zusammenlocken",
        "objective": "Wirf in **Far Cry 3** mit freigeschalteten verketteten Takedowns Steine neben zwei Wachen. **Probier nach dem Umlenken einen verketteten Takedown**. Hör nach dem Erfolg oder drei Aufbauten auf.",
        "gameObjective": "Wirf in **Far Cry 3** mit freigeschalteten verketteten Takedowns Steine neben zwei Wachen. **Probier nach dem Umlenken einen verketteten Takedown**. Hör nach dem Erfolg oder drei Aufbauten auf."
      }
    },
    "experience": {
      "family": "chain-takedown",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["stealth"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Chain Takedown unlocked",
          "de": "Verkettete Takedowns frei",
          "chips": {"en": ["Chain Takedown"], "de": ["Verkettete Takedowns"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-fc3-fireline-test",
    "moodIds": ["curious"],
    "type": "experiment",
    "tags": ["new-approach"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-3"]
    },
    "translations": {
      "en": {
        "name": "Fire Along the Grass",
        "objective": "With a flamethrower in **Far Cry 3**, choose empty dry vegetation beside a cleared outpost. **Ignite one edge and watch the spread from the bare ground**.",
        "gameObjective": "With a flamethrower in **Far Cry 3**, choose empty dry vegetation beside a cleared outpost. **Ignite one edge and watch the spread from the bare ground**."
      },
      "de": {
        "name": "Feuer im Gras",
        "objective": "Wähle in **Far Cry 3** mit Flammenwerfer trockene, leere Vegetation neben einem befreiten Außenposten. **Entzünde einen Rand und beobachte die Ausbreitung vom freien Boden aus**.",
        "gameObjective": "Wähle in **Far Cry 3** mit Flammenwerfer trockene, leere Vegetation neben einem befreiten Außenposten. **Entzünde einen Rand und beobachte die Ausbreitung vom freien Boden aus**."
      }
    },
    "experience": {
      "family": "fire-spread",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "en": "Flamethrower; cleared outpost",
          "de": "Flammenwerfer; befreiter Außenposten",
          "chips": {"en": ["Flamethrower", "Outpost"], "de": ["Flammenwerfer", "Außenposten"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-fc3-deep-dive-loot",
    "moodIds": ["explore", "focused"],
    "type": "objective",
    "tags": ["diving"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-3"]
    },
    "translations": {
      "en": {
        "name": "Under the Wreck",
        "objective": "With a bought loot map showing an accessible underwater chest in **Far Cry 3**, plan your surface return. **Dive for that chest and return to air with its loot**.",
        "gameObjective": "With a bought loot map showing an accessible underwater chest in **Far Cry 3**, plan your surface return. **Dive for that chest and return to air with its loot**."
      },
      "de": {
        "name": "Unter dem Wrack",
        "objective": "Plane in **Far Cry 3** mit gekaufter Beutekarte und erreichbarer Unterwassertruhe den Weg zur Oberfläche. **Tauch zur Truhe und kehr mit der Beute an die Luft zurück**.",
        "gameObjective": "Plane in **Far Cry 3** mit gekaufter Beutekarte und erreichbarer Unterwassertruhe den Weg zur Oberfläche. **Tauch zur Truhe und kehr mit der Beute an die Luft zurück**."
      }
    },
    "experience": {
      "family": "underwater-loot",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["diving"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Loot map; accessible underwater chest",
          "de": "Beutekarte; erreichbare Unterwassertruhe",
          "chips": {"en": ["Loot map", "Underwater chest"], "de": ["Beutekarte", "Unterwassertruhe"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-fc3-deep-dive-syringe",
    "moodIds": ["curious", "explore"],
    "type": "experiment",
    "tags": ["diving"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-3"]
    },
    "translations": {
      "en": {
        "name": "A Longer Breath",
        "objective": "With a Deep Dive syringe already crafted in **Far Cry 3**, choose a safe coast. **Compare a short unboosted swim with one after the syringe**, surfacing before air runs out each time.",
        "gameObjective": "With a Deep Dive syringe already crafted in **Far Cry 3**, choose a safe coast. **Compare a short unboosted swim with one after the syringe**, surfacing before air runs out each time."
      },
      "de": {
        "name": "Länger Luft haben",
        "objective": "Vergleiche in **Far Cry 3** mit bereits hergestellter Tiefentauch-Spritze an einer sicheren Küste **einen kurzen Tauchgang ohne Spritze mit einem danach**. Tauch beide Male auf, bevor die Luft ausgeht.",
        "gameObjective": "Vergleiche in **Far Cry 3** mit bereits hergestellter Tiefentauch-Spritze an einer sicheren Küste **einen kurzen Tauchgang ohne Spritze mit einem danach**. Tauch beide Male auf, bevor die Luft ausgeht."
      }
    },
    "experience": {
      "family": "dive-boost",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["diving"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Crafted Deep Dive syringe",
          "de": "Hergestellte Tiefentauch-Spritze",
          "chips": {"en": ["Deep Dive syringe"], "de": ["Tiefentauch-Spritze"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-fc3-hunter-instinct-check",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["hunting"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-3"]
    },
    "translations": {
      "en": {
        "name": "Let the Jungle Glow",
        "objective": "With Hunter’s Instinct unlocked and its ingredients owned in **Far Cry 3**, **craft and use a syringe at a hunting ground**, then locate an animal using the effect.",
        "gameObjective": "With Hunter’s Instinct unlocked and its ingredients owned in **Far Cry 3**, **craft and use a syringe at a hunting ground**, then locate an animal using the effect."
      },
      "de": {
        "name": "Leuchtender Dschungel",
        "objective": "Stell in **Far Cry 3** mit freigeschaltetem Jagdinstinkt und vorhandenen Zutaten **eine Spritze her und benutze sie an einem Jagdplatz**. Finde mit ihrer Wirkung ein Tier.",
        "gameObjective": "Stell in **Far Cry 3** mit freigeschaltetem Jagdinstinkt und vorhandenen Zutaten **eine Spritze her und benutze sie an einem Jagdplatz**. Finde mit ihrer Wirkung ein Tier."
      }
    },
    "experience": {
      "family": "hunting-syringe",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["hunting"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Hunter’s Instinct; ingredients",
          "de": "Jagdinstinkt; Zutaten",
          "chips": {"en": ["Hunter’s Instinct", "Ingredients"], "de": ["Jagdinstinkt", "Zutaten"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-fc3-weapon-attachment",
    "moodIds": ["create", "progress"],
    "type": "creation",
    "tags": ["loadout"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-3"]
    },
    "translations": {
      "en": {
        "name": "A Rook Islands Rifle",
        "objective": "At a weapon shop in **Far Cry 3**, choose an owned weapon that supports attachments. **Apply a new sight or suppressor and use it in the next hostile encounter**.",
        "gameObjective": "At a weapon shop in **Far Cry 3**, choose an owned weapon that supports attachments. **Apply a new sight or suppressor and use it in the next hostile encounter**."
      },
      "de": {
        "name": "Gewehr für die Inseln",
        "objective": "Wähle in **Far Cry 3** im Waffenladen eine eigene Waffe mit Aufsätzen. **Baue ein neues Visier oder einen Schalldämpfer an und nutze es in der nächsten Gegnerbegegnung**.",
        "gameObjective": "Wähle in **Far Cry 3** im Waffenladen eine eigene Waffe mit Aufsätzen. **Baue ein neues Visier oder einen Schalldämpfer an und nutze es in der nächsten Gegnerbegegnung**."
      }
    },
    "experience": {
      "family": "weapon-attachment",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["loadout"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Owned attachment-compatible weapon; money",
          "de": "Eigene aufrüstbare Waffe; Geld",
          "chips": {"en": ["Upgradeable weapon"], "de": ["Aufrüstbare Waffe"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-fc3-south-island-arrival",
    "moodIds": ["explore", "curious"],
    "type": "inspiration",
    "tags": ["free-roam"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-3"]
    },
    "translations": {
      "en": {
        "name": "Hoyt’s Island",
        "objective": "Once the southern island is open in Far Cry 3, **explore around your first safe hub there**. Look for the differences between Hoyt’s mercenaries and the pirate territory you left behind.",
        "gameObjective": "Once the southern island is open in Far Cry 3, **explore around your first safe hub there**. Look for the differences between Hoyt’s mercenaries and the pirate territory you left behind."
      },
      "de": {
        "name": "Hoyts Insel",
        "objective": "Erkunde in Far Cry 3 nach Freischaltung der Südinsel die Gegend um deinen ersten sicheren Stützpunkt dort. **Schau, wie sich Hoyts Söldnergebiet von den Piratenorten unterscheidet**.",
        "gameObjective": "Erkunde in Far Cry 3 nach Freischaltung der Südinsel die Gegend um deinen ersten sicheren Stützpunkt dort. **Schau, wie sich Hoyts Söldnergebiet von den Piratenorten unterscheidet**."
      }
    },
    "experience": {
      "family": "southern-roaming",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["free-roam"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Southern island unlocked",
          "de": "Südinsel freigeschaltet",
          "chips": {"en": ["Southern island"], "de": ["Südinsel"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-fc3-citra-return",
    "moodIds": ["nostalgic", "curious"],
    "type": "inspiration",
    "tags": ["story"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-3"]
    },
    "translations": {
      "en": {
        "name": "Outside Citra’s Temple",
        "objective": "After visiting Citra’s temple in Far Cry 3, return between story missions. Walk its approach and **look at the Rakyat symbols with the story you now know**.",
        "gameObjective": "After visiting Citra’s temple in Far Cry 3, return between story missions. Walk its approach and **look at the Rakyat symbols with the story you now know**."
      },
      "de": {
        "name": "Vor Citras Tempel",
        "objective": "Kehre in Far Cry 3 nach dem ersten Besuch zwischen Storymissionen zu Citras Tempel zurück. Geh den Weg dorthin und **schau mit deinem neuen Storywissen auf die Rakyat-Zeichen**.",
        "gameObjective": "Kehre in Far Cry 3 nach dem ersten Besuch zwischen Storymissionen zu Citras Tempel zurück. Geh den Weg dorthin und **schau mit deinem neuen Storywissen auf die Rakyat-Zeichen**."
      }
    },
    "experience": {
      "family": "familiar-temple",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "First Citra temple visit completed",
          "de": "Erster Besuch bei Citras Tempel abgeschlossen",
          "chips": {"en": ["Citra's temple"], "de": ["Citras Tempel"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-fc3-waterway-scout",
    "moodIds": ["explore", "relax"],
    "type": "inspiration",
    "tags": ["driving"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-3"]
    },
    "translations": {
      "en": {
        "name": "Around Rook by Boat",
        "objective": "Take a boat from an already cleared shore in Far Cry 3. **Follow the coast into an inlet you usually pass by on land**, with no hunting or outpost target for this ride.",
        "gameObjective": "Take a boat from an already cleared shore in Far Cry 3. **Follow the coast into an inlet you usually pass by on land**, with no hunting or outpost target for this ride."
      },
      "de": {
        "name": "Per Boot um Rook",
        "objective": "Nimm in Far Cry 3 an einem bereits gesicherten Ufer ein Boot. **Folge der Küste in eine Bucht**, an der du zu Land meist vorbeikommst, ohne Jagd- oder Außenpostenziel.",
        "gameObjective": "Nimm in Far Cry 3 an einem bereits gesicherten Ufer ein Boot. **Folge der Küste in eine Bucht**, an der du zu Land meist vorbeikommst, ohne Jagd- oder Außenpostenziel."
      }
    },
    "experience": {
      "family": "boat-roaming",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["driving"],
      "rules": [],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-fc3-tatau-check",
    "moodIds": ["curious", "progress"],
    "type": "objective",
    "tags": ["abilities"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-3"]
    },
    "translations": {
      "en": {
        "name": "New Ink in Action",
        "objective": "In **Far Cry 3**, choose an unlocked Tatau skill you have not tried. Read its effect and **use it in a hostile encounter**.",
        "gameObjective": "In **Far Cry 3**, choose an unlocked Tatau skill you have not tried. Read its effect and **use it in a hostile encounter**."
      },
      "de": {
        "name": "Neue Tinte im Einsatz",
        "objective": "Wähle in **Far Cry 3** eine freigeschaltete Tatau-Fähigkeit, die du noch nicht ausprobiert hast. Lies ihre Wirkung und **nutze sie in einer Gegnerbegegnung**.",
        "gameObjective": "Wähle in **Far Cry 3** eine freigeschaltete Tatau-Fähigkeit, die du noch nicht ausprobiert hast. Lies ihre Wirkung und **nutze sie in einer Gegnerbegegnung**."
      }
    },
    "experience": {
      "family": "skill-test",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["abilities"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Unlocked usable untried skill",
          "de": "Freie nutzbare noch unversuchte Fähigkeit",
          "chips": {"en": ["Unused skill"], "de": ["Ungenutzte Fähigkeit"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-fc3-poker-fold-pressure",
    "moodIds": ["focused", "challenge"],
    "type": "challenge",
    "tags": ["cards", "three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-3"]
    },
    "translations": {
      "en": {
        "name": "No Easy Fold",
        "objective": "At a low-stakes poker table in **Far Cry 3**, **win one hand without folding or reloading**. Stop after a win or three dealt hands.",
        "gameObjective": "At a low-stakes poker table in **Far Cry 3**, **win one hand without folding or reloading**. Stop after a win or three dealt hands."
      },
      "de": {
        "name": "Nicht sofort passen",
        "objective": "Versuch in **Far Cry 3** an einem Pokertisch mit kleinem Einsatz, **eine Hand ohne Passen oder Neuladen zu gewinnen**. Hör nach einem Sieg oder drei ausgeteilten Händen auf.",
        "gameObjective": "Versuch in **Far Cry 3** an einem Pokertisch mit kleinem Einsatz, **eine Hand ohne Passen oder Neuladen zu gewinnen**. Hör nach einem Sieg oder drei ausgeteilten Händen auf."
      }
    },
    "experience": {
      "family": "poker",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["cards"],
      "rules": ["three-attempts"],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-fc3-outpost-pistol",
    "moodIds": ["focused", "challenge"],
    "type": "challenge",
    "tags": ["one-weapon", "one-life"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-3"]
    },
    "translations": {
      "en": {
        "name": "Pistol at the Post",
        "objective": "With an uncaptured small outpost available in **Far Cry 3**, equip one pistol. **Capture it using only that pistol for damage**, with rocks for distraction allowed. One attempt, ending on capture or death.",
        "gameObjective": "With an uncaptured small outpost available in **Far Cry 3**, equip one pistol. **Capture it using only that pistol for damage**, with rocks for distraction allowed. One attempt, ending on capture or death."
      },
      "de": {
        "name": "Pistole am Posten",
        "objective": "Rüste in **Far Cry 3** bei verfügbarem kleinem feindlichem Außenposten eine Pistole aus. **Erobere ihn mit Schaden nur aus dieser Pistole**. Ablenksteine sind erlaubt. Ein Versuch, bis zur Eroberung oder zum Tod.",
        "gameObjective": "Rüste in **Far Cry 3** bei verfügbarem kleinem feindlichem Außenposten eine Pistole aus. **Erobere ihn mit Schaden nur aus dieser Pistole**. Ablenksteine sind erlaubt. Ein Versuch, bis zur Eroberung oder zum Tod."
      }
    },
    "experience": {
      "family": "pistol-outpost",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["one-weapon", "one-life"],
      "prerequisites": [
        {
          "en": "Small uncaptured outpost; pistol",
          "de": "Kleiner offener Außenposten; Pistole",
          "chips": {"en": ["Small outpost", "Pistol"], "de": ["Kleiner Außenposten", "Pistole"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-fc4-hostage-extraction",
    "moodIds": ["focused", "progress"],
    "type": "objective",
    "tags": ["stealth"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-4"]
    },
    "translations": {
      "en": {
        "name": "Bring Them Out",
        "objective": "Start an available Hostage Rescue mission in **Far Cry 4**. Scout which guards stand closest to the hostages, then **finish the rescue with surviving hostages**.",
        "gameObjective": "Start an available Hostage Rescue mission in **Far Cry 4**. Scout which guards stand closest to the hostages, then **finish the rescue with surviving hostages**."
      },
      "de": {
        "name": "Geiseln herausholen",
        "objective": "Starte in **Far Cry 4** einen verfügbaren Geiselrettungsauftrag. Späh die Wachen direkt bei den Geiseln aus und **schließ die Rettung mit überlebenden Geiseln ab**.",
        "gameObjective": "Starte in **Far Cry 4** einen verfügbaren Geiselrettungsauftrag. Späh die Wachen direkt bei den Geiseln aus und **schließ die Rettung mit überlebenden Geiseln ab**."
      }
    },
    "experience": {
      "family": "hostage-rescue",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["stealth"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Hostage Rescue mission available",
          "de": "Geiselrettungsauftrag verfügbar",
          "chips": {"en": ["Hostage Rescue mission"], "de": ["Geiselrettungsauftrag"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-fc4-bomb-route",
    "moodIds": ["focused", "challenge"],
    "type": "challenge",
    "tags": ["stealth", "three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-4"]
    },
    "translations": {
      "en": {
        "name": "Reach the Bombs",
        "objective": "At an available Bomb Defusing mission in **Far Cry 4**, **defuse all marked bombs without being detected and leave the mission area**. Stop after success or three attempts.",
        "gameObjective": "At an available Bomb Defusing mission in **Far Cry 4**, **defuse all marked bombs without being detected and leave the mission area**. Stop after success or three attempts."
      },
      "de": {
        "name": "Zu den Bomben",
        "objective": "Versuch in **Far Cry 4** bei einem verfügbaren Bombenentschärfungsauftrag, **alle markierten Bomben unentdeckt zu entschärfen und das Missionsgebiet zu verlassen**. Hör nach dem Erfolg oder drei Versuchen auf.",
        "gameObjective": "Versuch in **Far Cry 4** bei einem verfügbaren Bombenentschärfungsauftrag, **alle markierten Bomben unentdeckt zu entschärfen und das Missionsgebiet zu verlassen**. Hör nach dem Erfolg oder drei Versuchen auf."
      }
    },
    "experience": {
      "family": "bomb-defusal",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["stealth"],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Bomb Defusing mission available",
          "de": "Bombenentschärfungsauftrag verfügbar",
          "chips": {"en": ["Bomb Defusing"], "de": ["Bombenentschärfung"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-fc4-armed-escort",
    "moodIds": ["restless", "progress"],
    "type": "objective",
    "tags": ["support"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-4"]
    },
    "translations": {
      "en": {
        "name": "Keep the Truck Moving",
        "objective": "Take an available Armed Escort mission in **Far Cry 4**. Ride with the Golden Path supply truck and **protect it until the escort is complete**.",
        "gameObjective": "Take an available Armed Escort mission in **Far Cry 4**. Ride with the Golden Path supply truck and **protect it until the escort is complete**."
      },
      "de": {
        "name": "Den Laster schützen",
        "objective": "Nimm in **Far Cry 4** einen verfügbaren bewaffneten Eskortauftrag an. Fahr mit dem Versorgungslaster des Goldenen Pfads und **beschütze ihn bis zum Ende des Auftrags**.",
        "gameObjective": "Nimm in **Far Cry 4** einen verfügbaren bewaffneten Eskortauftrag an. Fahr mit dem Versorgungslaster des Goldenen Pfads und **beschütze ihn bis zum Ende des Auftrags**."
      }
    },
    "experience": {
      "family": "truck-escort",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["support"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Armed Escort mission available",
          "de": "Bewaffneter Eskortauftrag verfügbar",
          "chips": {"en": ["Armed Escort"], "de": ["Bewaffneter Eskort"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-fc4-eye-for-eye-photo",
    "moodIds": ["focused", "progress"],
    "type": "objective",
    "tags": ["photography"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-4"]
    },
    "translations": {
      "en": {
        "name": "Proof for Kyrat",
        "objective": "Take an available Eye for an Eye mission in **Far Cry 4**. Use its specified weapon on the target and **photograph the body to finish the contract**.",
        "gameObjective": "Take an available Eye for an Eye mission in **Far Cry 4**. Use its specified weapon on the target and **photograph the body to finish the contract**."
      },
      "de": {
        "name": "Beweis für Kyrat",
        "objective": "Nimm in **Far Cry 4** einen verfügbaren Auge-um-Auge-Auftrag an. Benutze die vorgeschriebene Waffe gegen das Ziel und **fotografiere den Leichnam zum Abschluss**.",
        "gameObjective": "Nimm in **Far Cry 4** einen verfügbaren Auge-um-Auge-Auftrag an. Benutze die vorgeschriebene Waffe gegen das Ziel und **fotografiere den Leichnam zum Abschluss**."
      }
    },
    "experience": {
      "family": "revenge-contract",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["photography"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Eye for an Eye mission available",
          "de": "Auge-um-Auge-Auftrag verfügbar",
          "chips": {"en": ["Eye for an Eye mission"], "de": ["Auge-um-Auge-Auftrag"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-fc4-fashion-marked-hunt",
    "moodIds": ["focused", "challenge"],
    "type": "challenge",
    "tags": ["hunting", "three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-4"]
    },
    "translations": {
      "en": {
        "name": "Chiffon’s Commission",
        "objective": "With a Kyrat Fashion Week mission unlocked in **Far Cry 4**, take its supplied weapon. **Finish that marked special hunt**, or stop after three hunt attempts.",
        "gameObjective": "With a Kyrat Fashion Week mission unlocked in **Far Cry 4**, take its supplied weapon. **Finish that marked special hunt**, or stop after three hunt attempts."
      },
      "de": {
        "name": "Chiffons Bestellung",
        "objective": "Nimm in **Far Cry 4** bei freigeschaltetem Kyrat-Fashion-Week-Auftrag die gestellte Waffe. **Beende die markierte Spezialjagd** oder hör nach drei Jagdversuchen auf.",
        "gameObjective": "Nimm in **Far Cry 4** bei freigeschaltetem Kyrat-Fashion-Week-Auftrag die gestellte Waffe. **Beende die markierte Spezialjagd** oder hör nach drei Jagdversuchen auf."
      }
    },
    "experience": {
      "family": "rare-hunt",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["hunting"],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Kyrat Fashion Week mission unlocked",
          "de": "Kyrat-Fashion-Week-Auftrag frei",
          "chips": {"en": ["Kyrat Fashion Week"], "de": ["Kyrat Fashion Week"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"],
    "rarity": "special"
  },
  {
    "id": "far-cry-fc4-film-race",
    "moodIds": ["restless", "challenge"],
    "type": "challenge",
    "tags": ["racing", "three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-4"]
    },
    "translations": {
      "en": {
        "name": "Kyrat on Camera",
        "objective": "At an available Kyrati Films Racing mission in **Far Cry 4**, **finish the stunt route before its timer runs out**. Stop after success or three runs.",
        "gameObjective": "At an available Kyrati Films Racing mission in **Far Cry 4**, **finish the stunt route before its timer runs out**. Stop after success or three runs."
      },
      "de": {
        "name": "Kyrat vor der Kamera",
        "objective": "Versuch in **Far Cry 4** bei einem verfügbaren Kyrati-Films-Rennen, **die Stuntstrecke vor Ablauf des Timers zu schaffen**. Hör nach dem Erfolg oder drei Fahrten auf.",
        "gameObjective": "Versuch in **Far Cry 4** bei einem verfügbaren Kyrati-Films-Rennen, **die Stuntstrecke vor Ablauf des Timers zu schaffen**. Hör nach dem Erfolg oder drei Fahrten auf."
      }
    },
    "experience": {
      "family": "stunt-course",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["racing"],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Kyrati Films Racing mission available",
          "de": "Kyrati-Films-Rennen verfügbar",
          "chips": {"en": ["Kyrati Films race"], "de": ["Kyrati-Films-Rennen"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-fc4-propaganda-center",
    "moodIds": ["progress", "restless"],
    "type": "objective",
    "tags": ["story"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-4"]
    },
    "translations": {
      "en": {
        "name": "Turn Off the Broadcast",
        "objective": "Take an available Propaganda Center mission in **Far Cry 4**. **Destroy its marked broadcasting equipment and complete the mission**, keeping the facility as your only target.",
        "gameObjective": "Take an available Propaganda Center mission in **Far Cry 4**. **Destroy its marked broadcasting equipment and complete the mission**, keeping the facility as your only target."
      },
      "de": {
        "name": "Die Sendung beenden",
        "objective": "Nimm in **Far Cry 4** einen verfügbaren Propagandazentrum-Auftrag an. **Zerstöre die markierte Sendeausrüstung und beende die Mission**. Die Anlage ist dein einziges Ziel.",
        "gameObjective": "Nimm in **Far Cry 4** einen verfügbaren Propagandazentrum-Auftrag an. **Zerstöre die markierte Sendeausrüstung und beende die Mission**. Die Anlage ist dein einziges Ziel."
      }
    },
    "experience": {
      "family": "propaganda",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Propaganda Center mission available",
          "de": "Propagandazentrum-Auftrag verfügbar",
          "chips": {"en": ["Propaganda Center"], "de": ["Propagandazentrum"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-fc4-autodrive-ambush",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["driving"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-4"]
    },
    "translations": {
      "en": {
        "name": "Let the Road Steer",
        "objective": "In **Far Cry 4**, set a destination along an accessible road and enable auto-drive. **Use a sidearm during one already located roadside fight while auto-drive handles the road**, then end the drive safely.",
        "gameObjective": "In **Far Cry 4**, set a destination along an accessible road and enable auto-drive. **Use a sidearm during one already located roadside fight while auto-drive handles the road**, then end the drive safely."
      },
      "de": {
        "name": "Die Straße lenkt",
        "objective": "Setz in **Far Cry 4** ein Ziel an einer erreichbaren Straße und aktiviere automatisches Fahren. **Benutze in einer schon gefundenen Straßenbegegnung eine Seitenwaffe, während der Wagen lenkt**. Beende die Fahrt sicher.",
        "gameObjective": "Setz in **Far Cry 4** ein Ziel an einer erreichbaren Straße und aktiviere automatisches Fahren. **Benutze in einer schon gefundenen Straßenbegegnung eine Seitenwaffe, während der Wagen lenkt**. Beende die Fahrt sicher."
      }
    },
    "experience": {
      "family": "autodrive-combat",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["driving"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Auto-drive vehicle; sidearm; located roadside fight",
          "de": "Auto-Drive-Fahrzeug; Seitenwaffe; Straßenkampf",
          "chips": {"en": ["Auto-drive vehicle", "Sidearm"], "de": ["Auto-Drive-Fahrzeug", "Seitenwaffe"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-fc4-mortar-angle",
    "moodIds": ["curious"],
    "type": "experiment",
    "tags": ["gadgets"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-4"]
    },
    "translations": {
      "en": {
        "name": "Kyrat’s Long Reach",
        "objective": "Find an occupied position with an accessible mortar in **Far Cry 4**. **Fire an aimed shell at a hostile position and watch where it lands**.",
        "gameObjective": "Find an occupied position with an accessible mortar in **Far Cry 4**. **Fire an aimed shell at a hostile position and watch where it lands**."
      },
      "de": {
        "name": "Kyrats langer Arm",
        "objective": "Such in **Far Cry 4** eine besetzte Stellung mit erreichbarem Mörser. **Schieß gezielt eine Granate auf eine Gegnerposition und beobachte den Einschlag**.",
        "gameObjective": "Such in **Far Cry 4** eine besetzte Stellung mit erreichbarem Mörser. **Schieß gezielt eine Granate auf eine Gegnerposition und beobachte den Einschlag**."
      }
    },
    "experience": {
      "family": "mortar",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["gadgets"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Accessible mortar; hostile position",
          "de": "Erreichbarer Mörser; Gegnerstellung",
          "chips": {"en": ["Mortar", "Hostile position"], "de": ["Mörser", "Gegnerstellung"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-fc4-grapple-lateral",
    "moodIds": ["explore", "curious"],
    "type": "experiment",
    "tags": ["traversal"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-4"]
    },
    "translations": {
      "en": {
        "name": "Across the Cliff",
        "objective": "With the grapple unlocked in **Far Cry 4**, find a marked swing across a ravine. **Cross to the far ledge and follow the trail beyond it**, rather than returning down the road.",
        "gameObjective": "With the grapple unlocked in **Far Cry 4**, find a marked swing across a ravine. **Cross to the far ledge and follow the trail beyond it**, rather than returning down the road."
      },
      "de": {
        "name": "Quer über den Fels",
        "objective": "Such in **Far Cry 4** mit freigeschaltetem Greifhaken einen markierten Schwung über eine Schlucht. **Erreiche den gegenüberliegenden Vorsprung und folge dem Weg dahinter**, statt zur Straße zurückzukehren.",
        "gameObjective": "Such in **Far Cry 4** mit freigeschaltetem Greifhaken einen markierten Schwung über eine Schlucht. **Erreiche den gegenüberliegenden Vorsprung und folge dem Weg dahinter**, statt zur Straße zurückzukehren."
      }
    },
    "experience": {
      "family": "grapple-crossing",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["traversal"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Grapple unlocked",
          "de": "Greifhaken frei",
          "chips": {"en": ["Grapple"], "de": ["Greifhaken"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-fc4-knife-followup",
    "moodIds": ["focused", "challenge"],
    "type": "challenge",
    "tags": ["abilities", "three-attempts"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-4"]
    },
    "translations": {
      "en": {
        "name": "Knife After Knife",
        "objective": "With Knife Throw Takedown unlocked in **Far Cry 4**, approach two nearby guards. **Use one rear takedown followed by the thrown knife to defeat both**. Stop after success or three approaches.",
        "gameObjective": "With Knife Throw Takedown unlocked in **Far Cry 4**, approach two nearby guards. **Use one rear takedown followed by the thrown knife to defeat both**. Stop after success or three approaches."
      },
      "de": {
        "name": "Messer nach Messer",
        "objective": "Nähere dich in **Far Cry 4** mit freigeschaltetem Messerwurf-Takedown zwei nahen Wachen. **Besiege beide mit einem Takedown von hinten und anschließendem Messerwurf**. Hör nach dem Erfolg oder drei Anläufen auf.",
        "gameObjective": "Nähere dich in **Far Cry 4** mit freigeschaltetem Messerwurf-Takedown zwei nahen Wachen. **Besiege beide mit einem Takedown von hinten und anschließendem Messerwurf**. Hör nach dem Erfolg oder drei Anläufen auf."
      }
    },
    "experience": {
      "family": "knife-chain",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["abilities"],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Knife Throw Takedown unlocked",
          "de": "Messerwurf-Takedown frei",
          "chips": {"en": ["Knife Throw Takedown"], "de": ["Messerwurf-Takedown"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-fc4-moving-convoy",
    "moodIds": ["restless", "focused"],
    "type": "objective",
    "tags": ["driving"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-4"]
    },
    "translations": {
      "en": {
        "name": "Pagan’s Road Patrol",
        "objective": "With a Pagan’s Wrath convoy already marked in **Far Cry 4**, choose an intercept point ahead of it. **Destroy all convoy vehicles and end the event**.",
        "gameObjective": "With a Pagan’s Wrath convoy already marked in **Far Cry 4**, choose an intercept point ahead of it. **Destroy all convoy vehicles and end the event**."
      },
      "de": {
        "name": "Pagans Straßenpatrouille",
        "objective": "Wähle in **Far Cry 4** bei einem bereits markierten Pagan-Zorn-Konvoi einen Punkt vor seiner Route. **Zerstöre alle Konvoifahrzeuge und beende das Ereignis**.",
        "gameObjective": "Wähle in **Far Cry 4** bei einem bereits markierten Pagan-Zorn-Konvoi einen Punkt vor seiner Route. **Zerstöre alle Konvoifahrzeuge und beende das Ereignis**."
      }
    },
    "experience": {
      "family": "convoy",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["driving"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Marked Pagan’s Wrath convoy",
          "de": "Markierter Pagan-Zorn-Konvoi",
          "chips": {"en": ["Pagan’s Wrath convoy"], "de": ["Pagan-Zorn-Konvoi"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-fc4-weakened-fortress",
    "moodIds": ["focused", "challenge"],
    "type": "challenge",
    "tags": ["one-life"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-4"]
    },
    "translations": {
      "en": {
        "name": "Through the Fortress",
        "objective": "With a fortress already weakened by story progress in **Far Cry 4**, enter through a side route. **Capture it without using a helicopter to skip its defenses**. One attempt, ending on capture or death.",
        "gameObjective": "With a fortress already weakened by story progress in **Far Cry 4**, enter through a side route. **Capture it without using a helicopter to skip its defenses**. One attempt, ending on capture or death."
      },
      "de": {
        "name": "Durch die Festung",
        "objective": "Nimm in **Far Cry 4** eine bereits durch die Story geschwächte Festung über einen Seitenweg in Angriff. **Erobere sie ohne Hubschrauber, der ihre Verteidigung überspringt**. Ein Versuch, bis zur Eroberung oder zum Tod.",
        "gameObjective": "Nimm in **Far Cry 4** eine bereits durch die Story geschwächte Festung über einen Seitenweg in Angriff. **Erobere sie ohne Hubschrauber, der ihre Verteidigung überspringt**. Ein Versuch, bis zur Eroberung oder zum Tod."
      }
    },
    "experience": {
      "family": "fortress-capture",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["one-life"],
      "prerequisites": [
        {
          "en": "Fortress weakened by story",
          "de": "Festung durch Story geschwächt",
          "chips": {"en": ["Weakened fortress"], "de": ["Geschwächte Festung"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"],
    "rarity": "special"
  },
  {
    "id": "far-cry-fc4-yogi-colors",
    "moodIds": ["curious"],
    "type": "inspiration",
    "tags": ["story"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-4"]
    },
    "translations": {
      "en": {
        "name": "Yogi’s Detour",
        "objective": "If another Yogi and Reggie mission is available in Far Cry 4, **follow their next strange detour**. Stay with the altered movement and sights instead of chasing normal errands.",
        "gameObjective": "If another Yogi and Reggie mission is available in Far Cry 4, **follow their next strange detour**. Stay with the altered movement and sights instead of chasing normal errands."
      },
      "de": {
        "name": "Yogis Umweg",
        "objective": "Folge in Far Cry 4 einer weiteren verfügbaren Mission von Yogi und Reggie. **Lass dich auf das ungewohnte Movement und die veränderten Bilder ein**, statt normale Aufträge abzuhaken.",
        "gameObjective": "Folge in Far Cry 4 einer weiteren verfügbaren Mission von Yogi und Reggie. **Lass dich auf das ungewohnte Movement und die veränderten Bilder ein**, statt normale Aufträge abzuhaken."
      }
    },
    "experience": {
      "family": "altered-mission",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Next Yogi and Reggie mission available",
          "de": "Nächste Yogi-und-Reggie-Mission verfügbar",
          "chips": {"en": ["Yogi and Reggie"], "de": ["Yogi und Reggie"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-fc4-mohan-journal",
    "moodIds": ["curious", "explore"],
    "type": "objective",
    "tags": ["collectibles", "story"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-4"]
    },
    "translations": {
      "en": {
        "name": "Mohan’s Page",
        "objective": "With an accessible uncollected Mohan Ghale journal marker in **Far Cry 4**, **find the journal and read that entry**, tracing what Ajay’s father wrote about Kyrat.",
        "gameObjective": "With an accessible uncollected Mohan Ghale journal marker in **Far Cry 4**, **find the journal and read that entry**, tracing what Ajay’s father wrote about Kyrat."
      },
      "de": {
        "name": "Mohans Seite",
        "objective": "Such in **Far Cry 4** bei einem erreichbaren offenen Marker **Mohans Tagebuch und lies den Eintrag**. Schau, was Ajays Vater über Kyrat geschrieben hat.",
        "gameObjective": "Such in **Far Cry 4** bei einem erreichbaren offenen Marker **Mohans Tagebuch und lies den Eintrag**. Schau, was Ajays Vater über Kyrat geschrieben hat."
      }
    },
    "experience": {
      "family": "journal",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["collectibles", "story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Uncollected journal marker accessible",
          "de": "Offener Tagebuchmarker erreichbar",
          "chips": {"en": ["Journal marker"], "de": ["Tagebuchmarker"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-fc4-mani-wheel",
    "moodIds": ["explore", "relax"],
    "type": "objective",
    "tags": ["collectibles"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-4"]
    },
    "translations": {
      "en": {
        "name": "A Wayside Wheel",
        "objective": "Follow an accessible uncollected Mani Wheel marker in **Far Cry 4**. Look for the shrine around it and **turn the wheel before leaving**.",
        "gameObjective": "Follow an accessible uncollected Mani Wheel marker in **Far Cry 4**. Look for the shrine around it and **turn the wheel before leaving**."
      },
      "de": {
        "name": "Gebetsmühle am Weg",
        "objective": "Folge in **Far Cry 4** einem erreichbaren offenen Gebetsmühlen-Marker. Such den Schrein darum herum und **dreh die Mühle, bevor du weitergehst**.",
        "gameObjective": "Folge in **Far Cry 4** einem erreichbaren offenen Gebetsmühlen-Marker. Such den Schrein darum herum und **dreh die Mühle, bevor du weitergehst**."
      }
    },
    "experience": {
      "family": "wheel",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["collectibles"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Uncollected Mani Wheel accessible",
          "de": "Offene Gebetsmühle erreichbar",
          "chips": {"en": ["Mani Wheel"], "de": ["Gebetsmühle"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-fc4-banapur-home",
    "moodIds": ["nostalgic", "relax"],
    "type": "inspiration",
    "tags": ["on-foot"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-4"]
    },
    "translations": {
      "en": {
        "name": "Back to Banapur",
        "objective": "Return to Banapur in Far Cry 4 after its early battles. **Walk between the houses and Golden Path meeting places** that first gave Ajay a foothold in Kyrat.",
        "gameObjective": "Return to Banapur in Far Cry 4 after its early battles. **Walk between the houses and Golden Path meeting places** that first gave Ajay a foothold in Kyrat."
      },
      "de": {
        "name": "Zurück nach Banapur",
        "objective": "Kehre in Far Cry 4 nach den frühen Kämpfen nach Banapur zurück. **Geh zwischen den Häusern und Treffpunkten des Goldenen Pfads umher**, an denen Ajay zuerst angekommen ist.",
        "gameObjective": "Kehre in Far Cry 4 nach den frühen Kämpfen nach Banapur zurück. **Geh zwischen den Häusern und Treffpunkten des Goldenen Pfads umher**, an denen Ajay zuerst angekommen ist."
      }
    },
    "experience": {
      "family": "familiar-village",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "open",
      "activities": [],
      "rules": ["on-foot"],
      "prerequisites": [
        {
          "en": "Early Banapur battles completed",
          "de": "Frühe Kämpfe in Banapur abgeschlossen",
          "chips": {"en": ["Early Banapur battles"], "de": ["Frühe Kämpfe in Banapur"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-fc4-buzzer-valley",
    "moodIds": ["explore", "relax"],
    "type": "inspiration",
    "tags": ["traversal"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-4"]
    },
    "translations": {
      "en": {
        "name": "Follow the Valley",
        "objective": "Take an available Buzzer in Far Cry 4 and stay below its altitude limit. **Follow a river valley** and look for settlements hidden by the road’s bends.",
        "gameObjective": "Take an available Buzzer in Far Cry 4 and stay below its altitude limit. **Follow a river valley** and look for settlements hidden by the road’s bends."
      },
      "de": {
        "name": "Dem Tal folgen",
        "objective": "Nimm in Far Cry 4 einen verfügbaren Buzzer und bleib unter seiner Höhengrenze. **Folge einem Flusstal** und such Orte, die hinter den Straßenkurven verborgen liegen.",
        "gameObjective": "Nimm in Far Cry 4 einen verfügbaren Buzzer und bleib unter seiner Höhengrenze. **Folge einem Flusstal** und such Orte, die hinter den Straßenkurven verborgen liegen."
      }
    },
    "experience": {
      "family": "buzzer-roaming",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["traversal"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Buzzer available",
          "de": "Buzzer verfügbar",
          "chips": {"en": ["Buzzer"], "de": ["Buzzer"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-fc4-coop-fortress-plan",
    "moodIds": ["connect"],
    "type": "objective",
    "tags": ["co-op", "scouting"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-4"]
    },
    "translations": {
      "en": {
        "name": "Two Sides of Kyrat",
        "objective": "With co-op unlocked and a friend already joining **Far Cry 4**, choose one weakened fortress. Agree on separate entrances and **finish one capture together**, helping each other if either route fails.",
        "gameObjective": "With co-op unlocked and a friend already joining **Far Cry 4**, choose one weakened fortress. Agree on separate entrances and **finish one capture together**, helping each other if either route fails."
      },
      "de": {
        "name": "Zwei Seiten von Kyrat",
        "objective": "Wähle in **Far Cry 4** mit freigeschaltetem Koop und bereits mitspielendem Freund eine geschwächte Festung. Sprecht zwei Zugänge ab und **erobert sie gemeinsam**. Helft euch, wenn ein Weg nicht klappt.",
        "gameObjective": "Wähle in **Far Cry 4** mit freigeschaltetem Koop und bereits mitspielendem Freund eine geschwächte Festung. Sprecht zwei Zugänge ab und **erobert sie gemeinsam**. Helft euch, wenn ein Weg nicht klappt."
      }
    },
    "experience": {
      "family": "shared-fortress",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": ["co-op"] },
      "finish": "outcome",
      "activities": ["scouting"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Co-op unlocked; friend present; weakened fortress",
          "de": "Koop frei; Freund anwesend; geschwächte Festung",
          "chips": {"en": ["Weakened fortress"], "de": ["Geschwächte Festung"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "others",
          "participation": "co-op",
          "formation": "none",
          "mode": "campaign co-op"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"],
    "rarity": "special"
  },
  {
    "id": "far-cry-fc4-coop-elephant-ride",
    "moodIds": ["connect", "relax"],
    "type": "inspiration",
    "tags": ["co-op", "free-roam"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-4"]
    },
    "translations": {
      "en": {
        "name": "Company in Kyrat",
        "objective": "With co-op unlocked and a friend already joining Far Cry 4, ride separate vehicles or elephants along Kyrat’s valley roads. **Take the detours your friend spots** and leave story missions for later.",
        "gameObjective": "With co-op unlocked and a friend already joining Far Cry 4, ride separate vehicles or elephants along Kyrat’s valley roads. **Take the detours your friend spots** and leave story missions for later."
      },
      "de": {
        "name": "Zusammen in Kyrat",
        "objective": "Fahrt in Far Cry 4 mit freigeschaltetem Koop und bereits mitspielendem Freund auf eigenen Fahrzeugen oder Elefanten durch die Täler. **Nehmt die Umwege, die der andere entdeckt**, und lasst Storymissionen warten.",
        "gameObjective": "Fahrt in Far Cry 4 mit freigeschaltetem Koop und bereits mitspielendem Freund auf eigenen Fahrzeugen oder Elefanten durch die Täler. **Nehmt die Umwege, die der andere entdeckt**, und lasst Storymissionen warten."
      }
    },
    "experience": {
      "family": "shared-ride",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": ["co-op"] },
      "finish": "open",
      "activities": ["free-roam"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Co-op unlocked; friend present",
          "de": "Koop frei; Freund anwesend",
          "chips": {"en": [], "de": []},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "others",
          "participation": "co-op",
          "formation": "none",
          "mode": "campaign co-op"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-fc5-clutch-nixon-run",
    "moodIds": ["restless", "challenge"],
    "type": "challenge",
    "tags": ["racing", "three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-5"]
    },
    "translations": {
      "en": {
        "name": "Clutch’s Route",
        "objective": "At an available Clutch Nixon memorial in **Far Cry 5**, **complete the stunt course through its checkpoints**. Stop after success or three runs.",
        "gameObjective": "At an available Clutch Nixon memorial in **Far Cry 5**, **complete the stunt course through its checkpoints**. Stop after success or three runs."
      },
      "de": {
        "name": "Clutchs Strecke",
        "objective": "Versuch in **Far Cry 5** an einem verfügbaren Clutch-Nixon-Denkmal, **den Stuntkurs durch alle Checkpoints zu schaffen**. Hör nach dem Erfolg oder drei Läufen auf.",
        "gameObjective": "Versuch in **Far Cry 5** an einem verfügbaren Clutch-Nixon-Denkmal, **den Stuntkurs durch alle Checkpoints zu schaffen**. Hör nach dem Erfolg oder drei Läufen auf."
      }
    },
    "experience": {
      "family": "stunt-course",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["racing"],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Clutch Nixon course available",
          "de": "Clutch-Nixon-Kurs verfügbar",
          "chips": {"en": ["Clutch Nixon course"], "de": ["Clutch-Nixon-Kurs"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-fc5-wolf-beacon",
    "moodIds": ["progress", "explore"],
    "type": "objective",
    "tags": ["exploration"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-5"]
    },
    "translations": {
      "en": {
        "name": "Silence the Beacon",
        "objective": "In **Far Cry 5**, **destroy a wolf beacon you have already located in Jacob’s region**.",
        "gameObjective": "In **Far Cry 5**, **destroy a wolf beacon you have already located in Jacob’s region**."
      },
      "de": {
        "name": "Sender abschalten",
        "objective": "**Zerstöre in Far Cry 5 einen bereits gefundenen Wolfssender in Jacobs Region**.",
        "gameObjective": "**Zerstöre in Far Cry 5 einen bereits gefundenen Wolfssender in Jacobs Region**."
      }
    },
    "experience": {
      "family": "beacon-sabotage",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["exploration"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Located wolf beacon in Jacob’s region",
          "de": "Gefundener Wolfssender in Jacobs Region",
          "chips": {"en": ["Wolf beacon"], "de": ["Wolfssender"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-fc5-bliss-shrine",
    "moodIds": ["progress", "restless"],
    "type": "objective",
    "tags": ["exploration"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-5"]
    },
    "translations": {
      "en": {
        "name": "A Shrine Less",
        "objective": "With a cult shrine already located in Faith’s region in **Far Cry 5**, **destroy its Bliss container and confirm the shrine is counted as destroyed**.",
        "gameObjective": "With a cult shrine already located in Faith’s region in **Far Cry 5**, **destroy its Bliss container and confirm the shrine is counted as destroyed**."
      },
      "de": {
        "name": "Ein Schrein weniger",
        "objective": "Zerstöre in **Far Cry 5** in Faiths Region **den Bliss-Behälter eines bereits gefundenen Sektenschreins und prüfe, ob er als zerstört zählt**.",
        "gameObjective": "Zerstöre in **Far Cry 5** in Faiths Region **den Bliss-Behälter eines bereits gefundenen Sektenschreins und prüfe, ob er als zerstört zählt**."
      }
    },
    "experience": {
      "family": "shrine-sabotage",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["exploration"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Located shrine in Faith’s region",
          "de": "Gefundener Schrein in Faiths Region",
          "chips": {"en": ["Shrine"], "de": ["Schrein"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-fc5-specialist-rescue",
    "moodIds": ["progress", "focused"],
    "type": "objective",
    "tags": ["story"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-5"]
    },
    "translations": {
      "en": {
        "name": "Help Grace First",
        "objective": "If Grace Armstrong’s recruitment mission is open in **Far Cry 5**, go to her church and **finish the defense that recruits her**.",
        "gameObjective": "If Grace Armstrong’s recruitment mission is open in **Far Cry 5**, go to her church and **finish the defense that recruits her**."
      },
      "de": {
        "name": "Erst Grace helfen",
        "objective": "Besuche in **Far Cry 5** bei offener Anwerbungsmission für Grace Armstrong ihre Kirche. **Beende die Verteidigung, durch die sie sich dir anschließt**.",
        "gameObjective": "Besuche in **Far Cry 5** bei offener Anwerbungsmission für Grace Armstrong ihre Kirche. **Beende die Verteidigung, durch die sie sich dir anschließt**."
      }
    },
    "experience": {
      "family": "specialist-recruitment",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Grace recruitment mission open",
          "de": "Graces Anwerbungsmission offen",
          "chips": {"en": ["Grace recruitment"], "de": ["Grace anwerben"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-fc5-peaches-recruitment",
    "moodIds": ["curious", "progress"],
    "type": "objective",
    "tags": ["story"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-5"]
    },
    "translations": {
      "en": {
        "name": "Peaches Comes Home",
        "objective": "If Peaches’ recruitment mission is open in **Far Cry 5**, take the supplied treats and **bring Peaches back to Miss Mable to finish the mission**.",
        "gameObjective": "If Peaches’ recruitment mission is open in **Far Cry 5**, take the supplied treats and **bring Peaches back to Miss Mable to finish the mission**."
      },
      "de": {
        "name": "Peaches kommt heim",
        "objective": "Nimm in **Far Cry 5** bei offener Anwerbungsmission für Peaches die bereitgestellten Leckerlis und **bring Peaches zum Missionsabschluss zu Miss Mable zurück**.",
        "gameObjective": "Nimm in **Far Cry 5** bei offener Anwerbungsmission für Peaches die bereitgestellten Leckerlis und **bring Peaches zum Missionsabschluss zu Miss Mable zurück**."
      }
    },
    "experience": {
      "family": "animal-recruitment",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Peaches recruitment mission open",
          "de": "Peaches-Anwerbungsmission offen",
          "chips": {"en": ["Peaches recruitment"], "de": ["Peaches anwerben"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-fc5-chesseburger-recruitment",
    "moodIds": ["progress", "explore"],
    "type": "objective",
    "tags": ["fishing", "story"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-5"]
    },
    "translations": {
      "en": {
        "name": "Dinner for Cheeseburger",
        "objective": "If Cheeseburger’s recruitment mission is open in **Far Cry 5**, follow its fresh-salmon requirement. **Feed him the fish and complete his rescue**.",
        "gameObjective": "If Cheeseburger’s recruitment mission is open in **Far Cry 5**, follow its fresh-salmon requirement. **Feed him the fish and complete his rescue**."
      },
      "de": {
        "name": "Essen für Cheeseburger",
        "objective": "Folge in **Far Cry 5** bei offener Anwerbungsmission für Cheeseburger dem Auftrag für frischen Lachs. **Gib ihm den Fisch und schließ seine Rettung ab**.",
        "gameObjective": "Folge in **Far Cry 5** bei offener Anwerbungsmission für Cheeseburger dem Auftrag für frischen Lachs. **Gib ihm den Fisch und schließ seine Rettung ab**."
      }
    },
    "experience": {
      "family": "animal-recruitment",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["fishing", "story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Cheeseburger recruitment mission open",
          "de": "Cheeseburger-Anwerbungsmission offen",
          "chips": {"en": ["Cheeseburger rescue"], "de": ["Cheeseburger retten"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-fc5-jess-flank",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["stealth"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-5"]
    },
    "translations": {
      "en": {
        "name": "Jess Takes the Flank",
        "objective": "With Jess Black recruited in **Far Cry 5**, approach a small occupied camp. **Send her after an isolated guard and use the distraction to enter from another side**.",
        "gameObjective": "With Jess Black recruited in **Far Cry 5**, approach a small occupied camp. **Send her after an isolated guard and use the distraction to enter from another side**."
      },
      "de": {
        "name": "Jess übernimmt die Flanke",
        "objective": "Nähere dich in **Far Cry 5** mit Jess Black einem kleinen besetzten Lager. **Schick sie gegen eine einzelne Wache und nutze die Ablenkung, um von einer anderen Seite einzudringen**.",
        "gameObjective": "Nähere dich in **Far Cry 5** mit Jess Black einem kleinen besetzten Lager. **Schick sie gegen eine einzelne Wache und nutze die Ablenkung, um von einer anderen Seite einzudringen**."
      }
    },
    "experience": {
      "family": "companion-flanking",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["stealth"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Jess Black recruited",
          "de": "Jess Black angeworben",
          "chips": {"en": ["Jess Black"], "de": ["Jess Black"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-fc5-hurk-roadblock",
    "moodIds": ["restless", "curious"],
    "type": "objective",
    "tags": ["abilities"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-5"]
    },
    "translations": {
      "en": {
        "name": "Hurk’s Loud Answer",
        "objective": "With Hurk recruited and a cult vehicle already stopped nearby in **Far Cry 5**, **command him to attack that vehicle with his launcher and finish the encounter**. Keep civilians clear.",
        "gameObjective": "With Hurk recruited and a cult vehicle already stopped nearby in **Far Cry 5**, **command him to attack that vehicle with his launcher and finish the encounter**. Keep civilians clear."
      },
      "de": {
        "name": "Hurks laute Antwort",
        "objective": "Lass in **Far Cry 5** mit angeworbenem Hurk und einem bereits nahen, stehenden Sektenfahrzeug **Hurk den Wagen mit seinem Raketenwerfer angreifen und beende die Begegnung**. Halte Zivilisten fern.",
        "gameObjective": "Lass in **Far Cry 5** mit angeworbenem Hurk und einem bereits nahen, stehenden Sektenfahrzeug **Hurk den Wagen mit seinem Raketenwerfer angreifen und beende die Begegnung**. Halte Zivilisten fern."
      }
    },
    "experience": {
      "family": "companion-firepower",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["abilities"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Hurk recruited; cult vehicle nearby",
          "de": "Hurk angeworben; Sektenfahrzeug in der Nähe",
          "chips": {"en": ["Hurk", "Cult vehicle"], "de": ["Hurk", "Sektenfahrzeug"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-fc5-fishing-lure-match",
    "moodIds": ["curious"],
    "type": "experiment",
    "tags": ["fishing"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-5"]
    },
    "translations": {
      "en": {
        "name": "Match the Fly",
        "objective": "With the Fisher King perk and its lures unlocked in **Far Cry 5**, choose a known fishing spot. **Catch one fish using the lure named for that fish type**.",
        "gameObjective": "With the Fisher King perk and its lures unlocked in **Far Cry 5**, choose a known fishing spot. **Catch one fish using the lure named for that fish type**."
      },
      "de": {
        "name": "Die passende Fliege",
        "objective": "Fang in **Far Cry 5** mit freigeschaltetem Fischerkönig-Perk und seinen Ködern an einem bekannten Angelplatz **einen Fisch mit dem Köder für seine Fischart**.",
        "gameObjective": "Fang in **Far Cry 5** mit freigeschaltetem Fischerkönig-Perk und seinen Ködern an einem bekannten Angelplatz **einen Fisch mit dem Köder für seine Fischart**."
      }
    },
    "experience": {
      "family": "fishing-lures",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["fishing"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Fisher King perk and lures unlocked",
          "de": "Fischerkönig-Perk und Köder frei",
          "chips": {"en": ["Fisher King", "Lures"], "de": ["Fischerkönig", "Köder"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-fc5-bow-extra-pelts",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["hunting"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-5"]
    },
    "translations": {
      "en": {
        "name": "A Bow’s Yield",
        "objective": "With a bow and a common animal already found in **Far Cry 5**, **hunt and skin it with a bow kill**, then inspect the number of skins added.",
        "gameObjective": "With a bow and a common animal already found in **Far Cry 5**, **hunt and skin it with a bow kill**, then inspect the number of skins added."
      },
      "de": {
        "name": "Die Beute des Bogens",
        "objective": "Jage in **Far Cry 5** mit Bogen ein bereits gefundenes häufiges Tier. **Erlege und häute es nach dem Bogenschuss** und prüfe, wie viele Felle dazukommen.",
        "gameObjective": "Jage in **Far Cry 5** mit Bogen ein bereits gefundenes häufiges Tier. **Erlege und häute es nach dem Bogenschuss** und prüfe, wie viele Felle dazukommen."
      }
    },
    "experience": {
      "family": "bow-yield",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["hunting"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Bow; common animal located",
          "de": "Bogen; häufiges Tier gefunden",
          "chips": {"en": ["Bow", "Common animal"], "de": ["Bogen", "Häufiges Tier"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-fc5-binocular-labels",
    "moodIds": ["curious", "explore"],
    "type": "experiment",
    "tags": ["scouting"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-5"]
    },
    "translations": {
      "en": {
        "name": "Read the Valley",
        "objective": "From a safe hill in **Far Cry 5**, use binoculars to identify a distant point of interest. **Mark it through the binoculars and reach that location on foot**.",
        "gameObjective": "From a safe hill in **Far Cry 5**, use binoculars to identify a distant point of interest. **Mark it through the binoculars and reach that location on foot**."
      },
      "de": {
        "name": "Das Tal lesen",
        "objective": "Markiere in **Far Cry 5** von einem sicheren Hügel aus einen entfernten interessanten Ort mit dem Fernglas. **Setz die Markierung darüber und erreiche den Ort zu Fuß**.",
        "gameObjective": "Markiere in **Far Cry 5** von einem sicheren Hügel aus einen entfernten interessanten Ort mit dem Fernglas. **Setz die Markierung darüber und erreiche den Ort zu Fuß**."
      }
    },
    "experience": {
      "family": "optical-scouting",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["scouting"],
      "rules": [],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-fc5-safe-lockpick",
    "moodIds": ["progress", "curious"],
    "type": "objective",
    "tags": ["stealth"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-5"]
    },
    "translations": {
      "en": {
        "name": "Open the Safe",
        "objective": "With Locksmith unlocked in **Far Cry 5**, choose a safe you already found in a secured building. **Pick it open and take its contents**, without explosives.",
        "gameObjective": "With Locksmith unlocked in **Far Cry 5**, choose a safe you already found in a secured building. **Pick it open and take its contents**, without explosives."
      },
      "de": {
        "name": "Den Tresor öffnen",
        "objective": "Öffne in **Far Cry 5** mit freigeschaltetem Schlosser-Perk einen bereits gefundenen Tresor in einem gesicherten Gebäude. **Knack ihn und nimm den Inhalt mit**, ohne Sprengstoff.",
        "gameObjective": "Öffne in **Far Cry 5** mit freigeschaltetem Schlosser-Perk einen bereits gefundenen Tresor in einem gesicherten Gebäude. **Knack ihn und nimm den Inhalt mit**, ohne Sprengstoff."
      }
    },
    "experience": {
      "family": "safe-opening",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["stealth"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Locksmith perk; located safe",
          "de": "Schlosser-Perk; gefundener Tresor",
          "chips": {"en": ["Locksmith perk", "Safe"], "de": ["Schlosser-Perk", "Tresor"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-fc5-blowtorch-fix",
    "moodIds": ["curious"],
    "type": "experiment",
    "tags": ["gadgets", "driving"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-5"]
    },
    "translations": {
      "en": {
        "name": "Keep This Truck",
        "objective": "With the Repair Torch perk and a damaged parked vehicle in **Far Cry 5**, **repair it with the torch and drive it to the next road junction**.",
        "gameObjective": "With the Repair Torch perk and a damaged parked vehicle in **Far Cry 5**, **repair it with the torch and drive it to the next road junction**."
      },
      "de": {
        "name": "Der Laster bleibt",
        "objective": "Repariere in **Far Cry 5** mit freigeschaltetem Reparaturbrenner ein beschädigtes geparktes Fahrzeug. **Benutze den Brenner und fahr den Wagen zur nächsten Straßenkreuzung**.",
        "gameObjective": "Repariere in **Far Cry 5** mit freigeschaltetem Reparaturbrenner ein beschädigtes geparktes Fahrzeug. **Benutze den Brenner und fahr den Wagen zur nächsten Straßenkreuzung**."
      }
    },
    "experience": {
      "family": "vehicle-repair",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["gadgets", "driving"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Repair Torch perk; damaged vehicle",
          "de": "Reparaturbrenner-Perk; beschädigter Wagen",
          "chips": {"en": ["Repair Torch perk", "Damaged vehicle"], "de": ["Reparaturbrenner-Perk", "Beschädigter Wagen"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-fc5-patriot-paint",
    "moodIds": ["create"],
    "type": "creation",
    "tags": ["driving"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-5"]
    },
    "translations": {
      "en": {
        "name": "Your Hope County Truck",
        "objective": "At a garage in **Far Cry 5**, choose an owned customizable vehicle. **Apply a different paint scheme and take it through a liberated town of your choice**.",
        "gameObjective": "At a garage in **Far Cry 5**, choose an owned customizable vehicle. **Apply a different paint scheme and take it through a liberated town of your choice**."
      },
      "de": {
        "name": "Dein Hope-County-Laster",
        "objective": "Wähle in **Far Cry 5** an einer Garage ein eigenes anpassbares Fahrzeug. **Gib ihm einen anderen Lack und fahr damit durch einen befreiten Ort deiner Wahl**.",
        "gameObjective": "Wähle in **Far Cry 5** an einer Garage ein eigenes anpassbares Fahrzeug. **Gib ihm einen anderen Lack und fahr damit durch einen befreiten Ort deiner Wahl**."
      }
    },
    "experience": {
      "family": "vehicle-paint",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["driving"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Eigenes anpassbares Fahrzeug; befreiter Ort",
          "en": "Owned customizable vehicle; liberated town",
          "chips": {"en": ["Customizable vehicle", "Liberated town"], "de": ["Anpassbares Fahrzeug", "Ort"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-fc5-arcade-solo-discovery",
    "moodIds": ["curious", "explore"],
    "type": "inspiration",
    "tags": ["replay"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-5"]
    },
    "translations": {
      "en": {
        "name": "Someone Else’s County",
        "objective": "With Far Cry Arcade’s online map browser available in Far Cry 5, choose a player-made solo map with an exploration theme. Follow its setting and **see how its creator uses familiar assets differently**.",
        "gameObjective": "With Far Cry Arcade’s online map browser available in Far Cry 5, choose a player-made solo map with an exploration theme. Follow its setting and **see how its creator uses familiar assets differently**."
      },
      "de": {
        "name": "Ein fremdes Hope County",
        "objective": "Wähle in Far Cry 5 bei verfügbarem Online-Mapbrowser von Far Cry Arcade eine **Solo-Map mit Erkundungsthema**. Schau, wie ihr Ersteller die vertrauten Elemente anders verwendet.",
        "gameObjective": "Wähle in Far Cry 5 bei verfügbarem Online-Mapbrowser von Far Cry Arcade eine **Solo-Map mit Erkundungsthema**. Schau, wie ihr Ersteller die vertrauten Elemente anders verwendet."
      }
    },
    "experience": {
      "family": "player-map-exploration",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "open",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "en": "Working Arcade online map browser",
          "de": "Verfügbarer Arcade-Online-Mapbrowser",
          "chips": {"en": ["Arcade map browser"], "de": ["Arcade-Mapbrowser"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "Arcade solo-map browser"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-fc5-arcade-vista",
    "moodIds": ["create", "relax"],
    "type": "creation",
    "tags": ["level-editor"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-5"]
    },
    "translations": {
      "en": {
        "name": "An Arcade Lake",
        "objective": "In the Arcade editor of **Far Cry 5**, build a small lakeside scene with a spawn point, a pier, and a path. **Save it and walk from spawn to the pier in a playtest**.",
        "gameObjective": "In the Arcade editor of **Far Cry 5**, build a small lakeside scene with a spawn point, a pier, and a path. **Save it and walk from spawn to the pier in a playtest**."
      },
      "de": {
        "name": "Ein See zum Anschauen",
        "objective": "Bau im Arcade-Editor von **Far Cry 5** eine kleine Seeszene mit Spawnpunkt, Steg und Weg. **Speichere sie und geh im Spieltest vom Spawn zum Steg**.",
        "gameObjective": "Bau im Arcade-Editor von **Far Cry 5** eine kleine Seeszene mit Spawnpunkt, Steg und Weg. **Speichere sie und geh im Spieltest vom Spawn zum Steg**."
      }
    },
    "experience": {
      "family": "editor-vistas",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["level-editor"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Arcade editor available",
          "de": "Arcade-Editor verfügbar",
          "chips": {"en": ["Arcade editor"], "de": ["Arcade-Editor"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"],
    "rarity": "special"
  },
  {
    "id": "far-cry-fc5-arcade-cover-check",
    "moodIds": ["create", "focused"],
    "type": "experiment",
    "tags": ["level-editor", "scouting"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-5"]
    },
    "translations": {
      "en": {
        "name": "Cover That Works",
        "objective": "In the Arcade editor of **Far Cry 5**, place a spawn, one armed enemy, and two low cover objects. **Playtest whether both objects block the enemy’s fire and adjust them once**.",
        "gameObjective": "In the Arcade editor of **Far Cry 5**, place a spawn, one armed enemy, and two low cover objects. **Playtest whether both objects block the enemy’s fire and adjust them once**."
      },
      "de": {
        "name": "Deckung, die funktioniert",
        "objective": "Platziere im Arcade-Editor von **Far Cry 5** einen Spawn, einen bewaffneten Gegner und zwei niedrige Deckungen. **Prüfe im Spieltest beide Deckungen gegen seine Schüsse und passe sie einmal an**.",
        "gameObjective": "Platziere im Arcade-Editor von **Far Cry 5** einen Spawn, einen bewaffneten Gegner und zwei niedrige Deckungen. **Prüfe im Spieltest beide Deckungen gegen seine Schüsse und passe sie einmal an**."
      }
    },
    "experience": {
      "family": "editor-cover",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["level-editor", "scouting"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Arcade editor available",
          "de": "Arcade-Editor verfügbar",
          "chips": {"en": ["Arcade editor"], "de": ["Arcade-Editor"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-fc5-coop-river-fishing",
    "moodIds": ["connect", "relax"],
    "type": "inspiration",
    "tags": ["co-op", "fishing"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-5"]
    },
    "translations": {
      "en": {
        "name": "Two River Rods",
        "objective": "With campaign co-op unlocked and a friend already joining Far Cry 5, find a riverbank where you can both fish. **Chat and cast together without a catch target**.",
        "gameObjective": "With campaign co-op unlocked and a friend already joining Far Cry 5, find a riverbank where you can both fish. **Chat and cast together without a catch target**."
      },
      "de": {
        "name": "Zwei Angeln am Fluss",
        "objective": "Such in Far Cry 5 mit freigeschaltetem Kampagnen-Koop und bereits mitspielendem Freund ein Ufer, an dem ihr beide angeln könnt. **Redet und werft die Angeln aus, ohne Fangziel**.",
        "gameObjective": "Such in Far Cry 5 mit freigeschaltetem Kampagnen-Koop und bereits mitspielendem Freund ein Ufer, an dem ihr beide angeln könnt. **Redet und werft die Angeln aus, ohne Fangziel**."
      }
    },
    "experience": {
      "family": "shared-fishing",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": ["co-op"] },
      "finish": "open",
      "activities": ["fishing"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Campaign co-op unlocked; friend present",
          "de": "Kampagnen-Koop frei; Freund anwesend",
          "chips": {"en": [], "de": []},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "others",
          "participation": "co-op",
          "formation": "none",
          "mode": "campaign co-op"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-fc5-coop-pilot-passenger",
    "moodIds": ["connect"],
    "type": "objective",
    "tags": ["co-op", "traversal"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-5"]
    },
    "translations": {
      "en": {
        "name": "Pilot and Passenger",
        "objective": "With campaign co-op unlocked, a friend present, and a two-seat helicopter available in **Far Cry 5**, choose a liberated outpost. **Fly there together and land with both players still aboard**.",
        "gameObjective": "With campaign co-op unlocked, a friend present, and a two-seat helicopter available in **Far Cry 5**, choose a liberated outpost. **Fly there together and land with both players still aboard**."
      },
      "de": {
        "name": "Pilot und Passagier",
        "objective": "Wählt in **Far Cry 5** mit freigeschaltetem Kampagnen-Koop, mitspielendem Freund und zweisitzigem Hubschrauber einen befreiten Außenposten. **Fliegt gemeinsam hin und landet, während ihr beide noch an Bord seid**.",
        "gameObjective": "Wählt in **Far Cry 5** mit freigeschaltetem Kampagnen-Koop, mitspielendem Freund und zweisitzigem Hubschrauber einen befreiten Außenposten. **Fliegt gemeinsam hin und landet, während ihr beide noch an Bord seid**."
      }
    },
    "experience": {
      "family": "shared-flight",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": ["co-op"] },
      "finish": "outcome",
      "activities": ["traversal"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Co-op unlocked; friend; two-seat helicopter",
          "de": "Koop frei; Freund; zweisitziger Hubschrauber",
          "chips": {"en": ["Two-seat helicopter"], "de": ["Zweisitzer-Helikopter"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "others",
          "participation": "co-op",
          "formation": "none",
          "mode": "campaign co-op"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-fc5-fallsend-after",
    "moodIds": ["nostalgic", "low-energy"],
    "type": "inspiration",
    "tags": ["on-foot"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-5"]
    },
    "translations": {
      "en": {
        "name": "Fall’s End Again",
        "objective": "After liberating Fall’s End in Far Cry 5, return between missions and **walk its main street**. Spend a little time with the town you helped take back.",
        "gameObjective": "After liberating Fall’s End in Far Cry 5, return between missions and **walk its main street**. Spend a little time with the town you helped take back."
      },
      "de": {
        "name": "Wieder in Fall’s End",
        "objective": "Kehre in Far Cry 5 nach der Befreiung von Fall’s End zwischen Missionen zurück und **geh die Hauptstraße entlang**. Verbring etwas Zeit in dem Ort, den du zurückgeholt hast.",
        "gameObjective": "Kehre in Far Cry 5 nach der Befreiung von Fall’s End zwischen Missionen zurück und **geh die Hauptstraße entlang**. Verbring etwas Zeit in dem Ort, den du zurückgeholt hast."
      }
    },
    "experience": {
      "family": "familiar-town",
      "cardMetadata": { "genreIds": ["shooter", "adventure"], "playStyleIds": [] },
      "finish": "open",
      "activities": [],
      "rules": ["on-foot"],
      "prerequisites": [
        {
          "en": "Fall’s End liberated",
          "de": "Fall’s End befreit",
          "chips": {"en": ["Fall's End"], "de": ["Fall's End"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["shooter", "adventure"]
  },
  {
    "id": "far-cry-primal-beast-rescue",
    "moodIds": ["progress"],
    "type": "objective",
    "tags": ["animals"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-primal"]
    },
    "translations": {
      "en": {
        "name": "A New Companion",
        "objective": "In **Far Cry Primal**, choose a beast you can tame with your current Beast Master skills. **Use bait to tame it, then try one command with your new companion**.",
        "gameObjective": "In **Far Cry Primal**, choose a beast you can tame with your current Beast Master skills. **Use bait to tame it, then try one command with your new companion**."
      },
      "de": {
        "name": "Ein neuer Begleiter",
        "objective": "Wähle in **Far Cry Primal** ein Tier, das du mit deinen aktuellen Bestienmeister-Fähigkeiten zähmen kannst. **Zähme es mit Köder und probier einen Befehl mit deinem neuen Begleiter**.",
        "gameObjective": "Wähle in **Far Cry Primal** ein Tier, das du mit deinen aktuellen Bestienmeister-Fähigkeiten zähmen kannst. **Zähme es mit Köder und probier einen Befehl mit deinem neuen Begleiter**."
      }
    },
    "experience": {
      "family": "companion-taming",
      "cardMetadata": { "genreIds": ["adventure", "shooter"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["animals"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Bait; skills for the selected beast",
          "de": "Köder; Fähigkeiten für das gewählte Tier",
          "chips": {"en": ["Bait"], "de": ["Köder"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "shooter"]
  },
  {
    "id": "far-cry-primal-torch-night",
    "moodIds": ["challenge"],
    "type": "challenge",
    "tags": ["one-weapon", "one-life", "traversal"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-primal"]
    },
    "translations": {
      "en": {
        "name": "One Torch at Night",
        "objective": "In **Far Cry Primal**, choose two nearby landmarks after dark. **Travel between them with a burning club as your only weapon**. One attempt, ending on arrival or death.",
        "gameObjective": "In **Far Cry Primal**, choose two nearby landmarks after dark. **Travel between them with a burning club as your only weapon**. One attempt, ending on arrival or death."
      },
      "de": {
        "name": "Eine Fackel bei Nacht",
        "objective": "Wähle in **Far Cry Primal** nach Einbruch der Dunkelheit zwei nahe Orte. **Reise mit einer brennenden Keule als einziger Waffe vom einen zum anderen**. Ein Versuch, bis zur Ankunft oder zum Tod.",
        "gameObjective": "Wähle in **Far Cry Primal** nach Einbruch der Dunkelheit zwei nahe Orte. **Reise mit einer brennenden Keule als einziger Waffe vom einen zum anderen**. Ein Versuch, bis zur Ankunft oder zum Tod."
      }
    },
    "experience": {
      "family": "firelit-travel",
      "cardMetadata": { "genreIds": ["adventure", "shooter"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["one-weapon", "one-life"],
      "prerequisites": [
        {
          "en": "Club; reachable landmarks",
          "de": "Keule; erreichbare Orte",
          "chips": {"en": ["Club", "Landmarks"], "de": ["Keule", "Orte"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "shooter"]
  },
  {
    "id": "far-cry-primal-bonfire-entry",
    "moodIds": ["focused"],
    "type": "objective",
    "tags": ["stealth"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-primal"]
    },
    "translations": {
      "en": {
        "name": "Claim the Bonfire",
        "objective": "Scout an unclaimed bonfire and **capture it by taking out its alarm caller first**.",
        "gameObjective": "Scout an unclaimed bonfire and **capture it by taking out its alarm caller first**."
      },
      "de": {
        "name": "Das Lagerfeuer sichern",
        "objective": "Späh ein fremdes Lagerfeuer aus und **erobere es, indem du zuerst den Alarmrufer ausschaltest**.",
        "gameObjective": "Späh ein fremdes Lagerfeuer aus und **erobere es, indem du zuerst den Alarmrufer ausschaltest**."
      }
    },
    "experience": {
      "family": "alarm-control",
      "cardMetadata": { "genreIds": ["adventure", "shooter"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["stealth"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Unclaimed bonfire with alarm caller",
          "de": "Offenes Lagerfeuer mit Alarmrufer",
          "chips": {"en": ["Alarm bonfire"], "de": ["Alarm-Lagerfeuer"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "shooter"]
  },
  {
    "id": "far-cry-primal-spear-hunt",
    "moodIds": ["challenge"],
    "type": "challenge",
    "tags": ["hunting", "three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-primal"]
    },
    "translations": {
      "en": {
        "name": "One Spear Hunt",
        "objective": "Hunt a dangerous animal **using thrown spears only**. Stop after three encounters.",
        "gameObjective": "Hunt a dangerous animal **using thrown spears only**. Stop after three encounters."
      },
      "de": {
        "name": "Jagd mit Speeren",
        "objective": "Jage ein gefährliches Tier **nur mit geworfenen Speeren**. Höre nach drei Begegnungen auf.",
        "gameObjective": "Jage ein gefährliches Tier **nur mit geworfenen Speeren**. Höre nach drei Begegnungen auf."
      }
    },
    "experience": {
      "family": "spear-hunting",
      "cardMetadata": { "genreIds": ["adventure", "shooter"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["hunting"],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Spears; reachable dangerous animal",
          "de": "Speere; erreichbares gefährliches Tier",
          "chips": {"en": ["Spears", "Dangerous animal"], "de": ["Speere", "Gefährliches Tier"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "shooter"]
  },
  {
    "id": "far-cry-primal-tribe-skill",
    "moodIds": ["progress"],
    "type": "objective",
    "tags": ["abilities"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-primal"]
    },
    "translations": {
      "en": {
        "name": "Help a Specialist",
        "objective": "Choose an available Wenja specialist mission and **finish a step that unlocks or improves one of their skills**.",
        "gameObjective": "Choose an available Wenja specialist mission and **finish a step that unlocks or improves one of their skills**."
      },
      "de": {
        "name": "Einem Spezialisten helfen",
        "objective": "Wähle eine verfügbare Wenja-Spezialistenmission und **erledige einen Schritt für eine neue oder verbesserte Fähigkeit**.",
        "gameObjective": "Wähle eine verfügbare Wenja-Spezialistenmission und **erledige einen Schritt für eine neue oder verbesserte Fähigkeit**."
      }
    },
    "experience": {
      "family": "specialist-progression",
      "cardMetadata": { "genreIds": ["adventure", "shooter"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["abilities"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Available specialist mission",
          "de": "Verfügbare Spezialistenmission",
          "chips": {"en": ["Specialist mission"], "de": ["Spezialistenmission"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "shooter"]
  },
  {
    "id": "far-cry-primal-cave-markings",
    "moodIds": ["explore", "curious"],
    "type": "inspiration",
    "tags": ["exploration"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-primal"]
    },
    "translations": {
      "en": {
        "name": "Marks in the Cave",
        "objective": "In Far Cry Primal, explore an unfamiliar cave. **Follow its chambers and look for paintings and handprints**.",
        "gameObjective": "In Far Cry Primal, explore an unfamiliar cave. **Follow its chambers and look for paintings and handprints**."
      },
      "de": {
        "name": "Zeichen in der Höhle",
        "objective": "Erkunde in Far Cry Primal eine unbekannte Höhle. **Folge ihren Kammern und halte nach Malereien und Handspuren Ausschau**.",
        "gameObjective": "Erkunde in Far Cry Primal eine unbekannte Höhle. **Folge ihren Kammern und halte nach Malereien und Handspuren Ausschau**."
      }
    },
    "experience": {
      "family": "cave-markings",
      "cardMetadata": { "genreIds": ["adventure", "shooter"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["exploration"],
      "rules": [],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "shooter"]
  },
  {
    "id": "far-cry-primal-beast-command",
    "moodIds": ["curious"],
    "type": "experiment",
    "tags": ["animals"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-primal"]
    },
    "translations": {
      "en": {
        "name": "Let the Beast Lead",
        "objective": "At a small enemy camp, **send a tamed beast to draw attention while you use a separate entrance**.",
        "gameObjective": "At a small enemy camp, **send a tamed beast to draw attention while you use a separate entrance**."
      },
      "de": {
        "name": "Das Tier geht vor",
        "objective": "Schick bei einem kleinen Feindlager **ein gezähmtes Tier als Ablenkung vor und nimm selbst einen anderen Eingang**.",
        "gameObjective": "Schick bei einem kleinen Feindlager **ein gezähmtes Tier als Ablenkung vor und nimm selbst einen anderen Eingang**."
      }
    },
    "experience": {
      "family": "companion-distraction",
      "cardMetadata": { "genreIds": ["adventure", "shooter"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["animals"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Tamed companion; occupied camp",
          "de": "Gezähmter Begleiter; besetztes Lager",
          "chips": {"en": ["Tamed companion", "Occupied camp"], "de": ["Gezähmter Begleiter", "Besetztes Lager"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "shooter"]
  },
  {
    "id": "far-cry-primal-rare-pelt",
    "moodIds": ["focused"],
    "type": "objective",
    "tags": ["hunting", "crafting"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-primal"]
    },
    "translations": {
      "en": {
        "name": "The Missing Pelt",
        "objective": "In **Far Cry Primal**, choose an equipment upgrade missing one pelt. **Hunt its animal and use the pelt to craft the upgrade**.",
        "gameObjective": "In **Far Cry Primal**, choose an equipment upgrade missing one pelt. **Hunt its animal and use the pelt to craft the upgrade**."
      },
      "de": {
        "name": "Das fehlende Fell",
        "objective": "Prüfe in **Far Cry Primal** eine Ausrüstungsverbesserung, für die noch ein Fell fehlt. **Jage das passende Tier und stell mit dem Fell die Verbesserung her**.",
        "gameObjective": "Prüfe in **Far Cry Primal** eine Ausrüstungsverbesserung, für die noch ein Fell fehlt. **Jage das passende Tier und stell mit dem Fell die Verbesserung her**."
      }
    },
    "experience": {
      "family": "upgrade-hunting",
      "cardMetadata": { "genreIds": ["adventure", "shooter"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["hunting", "crafting"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Upgrade mit einem fehlenden Fell; übriges Material vorhanden; erreichbares Jagdgebiet",
          "en": "Upgrade missing one pelt; other materials owned; accessible hunting area",
          "chips": {"en": ["Missing pelt"], "de": ["Fehlendes Fell"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "shooter"]
  },
  {
    "id": "far-cry-primal-sting-bomb",
    "moodIds": ["curious"],
    "type": "experiment",
    "tags": ["gadgets"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-primal"]
    },
    "translations": {
      "en": {
        "name": "A Swarm Instead of a Charge",
        "objective": "In **Far Cry Primal**, use a Sting Bomb while approaching an occupied camp. **Try entering through the opening it creates and observe how the guards react**. One encounter is enough.",
        "gameObjective": "In **Far Cry Primal**, use a Sting Bomb while approaching an occupied camp. **Try entering through the opening it creates and observe how the guards react**. One encounter is enough."
      },
      "de": {
        "name": "Schwarm statt Sturm",
        "objective": "Benutze in **Far Cry Primal** beim Annähern an ein besetztes Lager eine Stichbombe. **Probier, die entstehende Lücke zum Eindringen zu nutzen, und beobachte die Reaktion der Wachen**. Eine Begegnung reicht.",
        "gameObjective": "Benutze in **Far Cry Primal** beim Annähern an ein besetztes Lager eine Stichbombe. **Probier, die entstehende Lücke zum Eindringen zu nutzen, und beobachte die Reaktion der Wachen**. Eine Begegnung reicht."
      }
    },
    "experience": {
      "family": "swarm-entry",
      "cardMetadata": { "genreIds": ["adventure", "shooter"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["gadgets"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Sting Bombs unlocked and owned",
          "de": "Stichbomben freigeschaltet und vorhanden",
          "chips": {"en": ["Sting Bombs"], "de": ["Stichbomben"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "shooter"]
  },
  {
    "id": "far-cry-fc3-outpost-silence",
    "moodIds": ["challenge"],
    "type": "challenge",
    "tags": ["stealth", "three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-3"]
    },
    "translations": {
      "en": {
        "name": "No Alarm Raised",
        "objective": "Liberate an outpost **without letting anyone reach an alarm**. Stop after three attempts.",
        "gameObjective": "Liberate an outpost **without letting anyone reach an alarm**. Stop after three attempts."
      },
      "de": {
        "name": "Kein Alarm",
        "objective": "Befreie einen Außenposten, **ohne dass jemand einen Alarm erreicht**. Höre nach drei Versuchen auf.",
        "gameObjective": "Befreie einen Außenposten, **ohne dass jemand einen Alarm erreicht**. Höre nach drei Versuchen auf."
      }
    },
    "experience": {
      "family": "alarm-control",
      "cardMetadata": { "genreIds": ["adventure", "shooter"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Uncaptured outpost",
          "de": "Offener Außenposten",
          "chips": {"en": ["Outpost"], "de": ["Außenposten"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "shooter"]
  },
  {
    "id": "far-cry-fc3-crafted-holster",
    "moodIds": ["progress"],
    "type": "objective",
    "tags": ["crafting"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-3"]
    },
    "translations": {
      "en": {
        "name": "Carry One More",
        "objective": "Choose a holster upgrade, **hunt its required animal and craft the upgrade before the next mission**.",
        "gameObjective": "Choose a holster upgrade, **hunt its required animal and craft the upgrade before the next mission**."
      },
      "de": {
        "name": "Mehr Platz am Gürtel",
        "objective": "Wähle eine Holster-Verbesserung, **jage das benötigte Tier und fertige sie vor der nächsten Mission an**.",
        "gameObjective": "Wähle eine Holster-Verbesserung, **jage das benötigte Tier und fertige sie vor der nächsten Mission an**."
      }
    },
    "experience": {
      "family": "holster-crafting",
      "cardMetadata": { "genreIds": ["adventure", "shooter"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["crafting"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Available holster recipe; reachable animal",
          "de": "Verfügbares Holsterrezept; erreichbares Tier",
          "chips": {"en": ["Holster recipe", "Animal"], "de": ["Holsterrezept", "Tier"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "shooter"]
  },
  {
    "id": "far-cry-fc3-relic-cave",
    "moodIds": ["explore"],
    "type": "objective",
    "tags": ["collectibles"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-3"]
    },
    "translations": {
      "en": {
        "name": "A Relic Below",
        "objective": "Find a relic marked underground and **reach it through its cave entrance instead of approaching from above**.",
        "gameObjective": "Find a relic marked underground and **reach it through its cave entrance instead of approaching from above**."
      },
      "de": {
        "name": "Relikt unter der Erde",
        "objective": "Such ein unterirdisch markiertes Relikt und **erreiche es durch den Höhleneingang statt von oben**.",
        "gameObjective": "Such ein unterirdisch markiertes Relikt und **erreiche es durch den Höhleneingang statt von oben**."
      }
    },
    "experience": {
      "family": "cave-relics",
      "cardMetadata": { "genreIds": ["adventure", "shooter"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["collectibles"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Uncollected accessible underground relic",
          "de": "Offenes erreichbares unterirdisches Relikt",
          "chips": {"en": ["Underground relic"], "de": ["Unterirdisches Relikt"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "shooter"]
  },
  {
    "id": "far-cry-fc3-trial-score",
    "moodIds": ["challenge"],
    "type": "challenge",
    "tags": ["three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-3"]
    },
    "translations": {
      "en": {
        "name": "Beat One Trial",
        "objective": "Enter a Trial of the Rakyat and **beat its first score threshold**. Stop after three runs.",
        "gameObjective": "Enter a Trial of the Rakyat and **beat its first score threshold**. Stop after three runs."
      },
      "de": {
        "name": "Eine Rakyat-Prüfung",
        "objective": "Starte eine Prüfung der Rakyat und **erreiche die erste Punktegrenze**. Nach drei Läufen ist Schluss.",
        "gameObjective": "Starte eine Prüfung der Rakyat und **erreiche die erste Punktegrenze**. Nach drei Läufen ist Schluss."
      }
    },
    "experience": {
      "family": "trial-scoring",
      "cardMetadata": { "genreIds": ["adventure", "shooter"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Trial of the Rakyat available",
          "de": "Prüfung der Rakyat verfügbar",
          "chips": {"en": ["Trial of the Rakyat"], "de": ["Prüfung der Rakyat"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "shooter"]
  },
  {
    "id": "far-cry-fc3-hang-glider-coast",
    "moodIds": ["restless"],
    "type": "objective",
    "tags": ["traversal"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-3"]
    },
    "translations": {
      "en": {
        "name": "Coast by Air",
        "objective": "Launch a hang glider from high ground and **land on a beach or road you picked before takeoff**.",
        "gameObjective": "Launch a hang glider from high ground and **land on a beach or road you picked before takeoff**."
      },
      "de": {
        "name": "Über die Küste gleiten",
        "objective": "Starte mit einem Hängegleiter von einer Anhöhe und **lande an einem Strand oder Weg, den du vorher ausgesucht hast**.",
        "gameObjective": "Starte mit einem Hängegleiter von einer Anhöhe und **lande an einem Strand oder Weg, den du vorher ausgesucht hast**."
      }
    },
    "experience": {
      "family": "glider-landings",
      "cardMetadata": { "genreIds": ["adventure", "shooter"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["traversal"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Accessible hang glider; visible landing",
          "de": "Erreichbarer Hängegleiter; sichtbare Landung",
          "chips": {"en": ["Hang glider", "Landing"], "de": ["Hängegleiter", "Sichtbare Landung"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "shooter"]
  },
  {
    "id": "far-cry-fc3-poker-read",
    "moodIds": ["curious"],
    "type": "experiment",
    "tags": ["cards"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-3"]
    },
    "translations": {
      "en": {
        "name": "Read the Table",
        "objective": "At a poker table in **Far Cry 3**, **play one hand through, choosing your bets in response to the other players**. Watch who raises, calls or folds; you do not have to win.",
        "gameObjective": "At a poker table in **Far Cry 3**, **play one hand through, choosing your bets in response to the other players**. Watch who raises, calls or folds; you do not have to win."
      },
      "de": {
        "name": "Den Tisch lesen",
        "objective": "Spiel in **Far Cry 3** am Pokertisch **eine Hand zu Ende und richte deine Einsätze danach, wie die anderen spielen**. Achte darauf, wer erhöht, mitgeht oder passt; gewinnen musst du nicht.",
        "gameObjective": "Spiel in **Far Cry 3** am Pokertisch **eine Hand zu Ende und richte deine Einsätze danach, wie die anderen spielen**. Achte darauf, wer erhöht, mitgeht oder passt; gewinnen musst du nicht."
      }
    },
    "experience": {
      "family": "poker-observation",
      "cardMetadata": { "genreIds": ["adventure", "shooter"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["cards"],
      "rules": [],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "shooter"]
  },
  {
    "id": "far-cry-fc3-hunter-bow",
    "moodIds": ["focused"],
    "type": "objective",
    "tags": ["hunting"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-3"]
    },
    "translations": {
      "en": {
        "name": "Hunter's Path",
        "objective": "Accept a Path of the Hunter task and **complete it with its required weapon**.",
        "gameObjective": "Accept a Path of the Hunter task and **complete it with its required weapon**."
      },
      "de": {
        "name": "Weg des Jägers",
        "objective": "Nimm einen Auftrag vom Weg des Jägers an und **erledige ihn mit der vorgeschriebenen Waffe**.",
        "gameObjective": "Nimm einen Auftrag vom Weg des Jägers an und **erledige ihn mit der vorgeschriebenen Waffe**."
      }
    },
    "experience": {
      "family": "special-hunting",
      "cardMetadata": { "genreIds": ["adventure", "shooter"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["hunting"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Available Path of the Hunter task",
          "de": "Verfügbarer Weg-des-Jägers-Auftrag",
          "chips": {"en": ["Path of the Hunter task"], "de": ["Weg-des-Jägers-Auftrag"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "shooter"]
  },
  {
    "id": "far-cry-fc3-cage-release",
    "moodIds": ["curious"],
    "type": "experiment",
    "tags": ["new-approach"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-3"]
    },
    "translations": {
      "en": {
        "name": "Open the Cage",
        "objective": "At an outpost with a caged animal, **release it before firing at the guards and use the confusion to enter**.",
        "gameObjective": "At an outpost with a caged animal, **release it before firing at the guards and use the confusion to enter**."
      },
      "de": {
        "name": "Den Käfig öffnen",
        "objective": "Öffne bei einem Außenposten **zuerst den Tierkäfig, bevor du auf Wachen schießt, und nutze das Chaos zum Eindringen**.",
        "gameObjective": "Öffne bei einem Außenposten **zuerst den Tierkäfig, bevor du auf Wachen schießt, und nutze das Chaos zum Eindringen**."
      }
    },
    "experience": {
      "family": "animal-distraction",
      "cardMetadata": { "genreIds": ["adventure", "shooter"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "en": "Occupied outpost with caged animal",
          "de": "Besetzter Außenposten mit Tierkäfig",
          "chips": {"en": ["Outpost", "Caged animal"], "de": ["Außenposten", "Tier im Käfig"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "shooter"]
  },
  {
    "id": "far-cry-fc3-radio-follow",
    "moodIds": ["explore"],
    "type": "objective",
    "tags": ["exploration"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-3"]
    },
    "translations": {
      "en": {
        "name": "Beyond the Tower",
        "objective": "After activating a radio tower, **travel to one newly revealed activity and complete its first step**.",
        "gameObjective": "After activating a radio tower, **travel to one newly revealed activity and complete its first step**."
      },
      "de": {
        "name": "Hinter dem Funkturm",
        "objective": "Reise nach der Aktivierung eines Funkturms **zu einer neu aufgedeckten Aktivität und erledige ihren ersten Schritt**.",
        "gameObjective": "Reise nach der Aktivierung eines Funkturms **zu einer neu aufgedeckten Aktivität und erledige ihren ersten Schritt**."
      }
    },
    "experience": {
      "family": "newly-revealed-activities",
      "cardMetadata": { "genreIds": ["adventure", "shooter"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["exploration"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Activated tower with new accessible activity",
          "de": "Aktiver Turm mit neuer erreichbarer Aktivität",
          "chips": {"en": ["Activated tower"], "de": ["Aktivierter Turm"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "shooter"]
  },
  {
    "id": "far-cry-fc4-propaganda",
    "moodIds": ["progress"],
    "type": "objective",
    "tags": ["collectibles"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-4"]
    },
    "translations": {
      "en": {
        "name": "Take Down the Poster",
        "objective": "Find a Pagan Min propaganda poster off the main road and **remove it before doing another mission**.",
        "gameObjective": "Find a Pagan Min propaganda poster off the main road and **remove it before doing another mission**."
      },
      "de": {
        "name": "Ein Plakat weniger",
        "objective": "Finde abseits der Hauptstraße ein Propagandaplakat von Pagan Min und **entferne es vor der nächsten Mission**.",
        "gameObjective": "Finde abseits der Hauptstraße ein Propagandaplakat von Pagan Min und **entferne es vor der nächsten Mission**."
      }
    },
    "experience": {
      "family": "poster-removal",
      "cardMetadata": { "genreIds": ["adventure", "shooter"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["collectibles"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Uncollected propaganda poster",
          "de": "Offenes Propagandaplakat",
          "chips": {"en": ["Propaganda poster"], "de": ["Propagandaplakat"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "shooter"]
  },
  {
    "id": "far-cry-fc4-karma-help",
    "moodIds": ["restless"],
    "type": "objective",
    "tags": ["story"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-4"]
    },
    "translations": {
      "en": {
        "name": "A Karma Moment",
        "objective": "Respond to a nearby Karma event and **help the civilians before the encounter disappears**.",
        "gameObjective": "Respond to a nearby Karma event and **help the civilians before the encounter disappears**."
      },
      "de": {
        "name": "Ein Moment für Karma",
        "objective": "Reagiere auf ein Karma-Ereignis in der Nähe und **hilf den Zivilisten, bevor die Begegnung vorbei ist**.",
        "gameObjective": "Reagiere auf ein Karma-Ereignis in der Nähe und **hilf den Zivilisten, bevor die Begegnung vorbei ist**."
      }
    },
    "experience": {
      "family": "civilian-help",
      "cardMetadata": { "genreIds": ["adventure", "shooter"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Nearby Karma event active",
          "de": "Nahes Karma-Ereignis aktiv",
          "chips": {"en": ["Karma event"], "de": ["Karma-Ereignis"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "shooter"]
  },
  {
    "id": "far-cry-fc4-honey-badger",
    "moodIds": ["challenge"],
    "type": "challenge",
    "tags": ["hunting", "three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-4"]
    },
    "translations": {
      "en": {
        "name": "Small, Fierce Target",
        "objective": "On a Kyrat hunt, **take down a honey badger without explosives**. Stop after three encounters.",
        "gameObjective": "On a Kyrat hunt, **take down a honey badger without explosives**. Stop after three encounters."
      },
      "de": {
        "name": "Klein und bissig",
        "objective": "Erlege bei einer Jagd in Kyrat **einen Honigdachs ohne Sprengstoff**. Höre nach drei Begegnungen auf.",
        "gameObjective": "Erlege bei einer Jagd in Kyrat **einen Honigdachs ohne Sprengstoff**. Höre nach drei Begegnungen auf."
      }
    },
    "experience": {
      "family": "predator-hunting",
      "cardMetadata": { "genreIds": ["adventure", "shooter"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["hunting"],
      "rules": ["three-attempts"],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "shooter"]
  },
  {
    "id": "far-cry-fc4-shangri-la",
    "moodIds": ["curious"],
    "type": "objective",
    "tags": ["story"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-4"]
    },
    "translations": {
      "en": {
        "name": "A Thangka's Tale",
        "objective": "If a Shangri-La mission is available, **enter through a thangka and finish one sequence with the tiger companion**.",
        "gameObjective": "If a Shangri-La mission is available, **enter through a thangka and finish one sequence with the tiger companion**."
      },
      "de": {
        "name": "Eine Geschichte im Thangka",
        "objective": "Wenn eine Shangri-La-Mission verfügbar ist, **betritt sie über ein Thangka und spiel eine Sequenz mit dem Tigerbegleiter**.",
        "gameObjective": "Wenn eine Shangri-La-Mission verfügbar ist, **betritt sie über ein Thangka und spiel eine Sequenz mit dem Tigerbegleiter**."
      }
    },
    "experience": {
      "family": "spirit-missions",
      "cardMetadata": { "genreIds": ["adventure", "shooter"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Shangri-La mission available",
          "de": "Shangri-La-Mission verfügbar",
          "chips": {"en": ["Shangri-La mission"], "de": ["Shangri-La-Mission"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "shooter"]
  },
  {
    "id": "far-cry-fc4-outpost-horn",
    "moodIds": ["focused"],
    "type": "objective",
    "tags": ["stealth"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-4"]
    },
    "translations": {
      "en": {
        "name": "Silence the Alarms",
        "objective": "At a Kyrat outpost, **disable each alarm before taking the final guard down**.",
        "gameObjective": "At a Kyrat outpost, **disable each alarm before taking the final guard down**."
      },
      "de": {
        "name": "Die Alarme stilllegen",
        "objective": "Schalte in einem Außenposten von Kyrat **alle Alarme aus, bevor du die letzte Wache besiegst**.",
        "gameObjective": "Schalte in einem Außenposten von Kyrat **alle Alarme aus, bevor du die letzte Wache besiegst**."
      }
    },
    "experience": {
      "family": "alarm-control",
      "cardMetadata": { "genreIds": ["adventure", "shooter"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["stealth"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Uncaptured outpost",
          "de": "Offener Außenposten",
          "chips": {"en": ["Outpost"], "de": ["Außenposten"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "shooter"]
  },
  {
    "id": "far-cry-fc4-gyrocopter-drop",
    "moodIds": ["curious"],
    "type": "experiment",
    "tags": ["traversal"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-4"]
    },
    "translations": {
      "en": {
        "name": "Land Above Them",
        "objective": "In **Far Cry 4**, approach an occupied outpost by gyrocopter and land on high ground away from the main road. **Use that elevated position to take down a guard**.",
        "gameObjective": "In **Far Cry 4**, approach an occupied outpost by gyrocopter and land on high ground away from the main road. **Use that elevated position to take down a guard**."
      },
      "de": {
        "name": "Von oben landen",
        "objective": "Nähere dich in **Far Cry 4** einem besetzten Außenposten mit dem Gyrokopter und lande auf einer Anhöhe abseits der Hauptstraße. **Nutze die erhöhte Position, um eine Wache auszuschalten**.",
        "gameObjective": "Nähere dich in **Far Cry 4** einem besetzten Außenposten mit dem Gyrokopter und lande auf einer Anhöhe abseits der Hauptstraße. **Nutze die erhöhte Position, um eine Wache auszuschalten**."
      }
    },
    "experience": {
      "family": "air-entry",
      "cardMetadata": { "genreIds": ["adventure", "shooter"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["traversal"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Gyrokopter; besetzter Außenposten mit erreichbarer Anhöhe",
          "en": "Gyrocopter; occupied outpost with accessible high ground",
          "chips": {"en": ["Gyrocopter", "Outpost"], "de": ["Gyrokopter", "Außenposten"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "shooter"]
  },
  {
    "id": "far-cry-fc5-prepper-stash",
    "moodIds": ["explore"],
    "type": "objective",
    "tags": ["puzzles"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-5"]
    },
    "translations": {
      "en": {
        "name": "Follow the Prepper's Clue",
        "objective": "Read a Prepper Stash note and **solve its local route or mechanism without a walkthrough**.",
        "gameObjective": "Read a Prepper Stash note and **solve its local route or mechanism without a walkthrough**."
      },
      "de": {
        "name": "Dem Prepper-Hinweis folgen",
        "objective": "Lies einen Hinweis zu einem Prepper-Versteck und **löse den Weg oder Mechanismus vor Ort ohne Lösungshilfe**.",
        "gameObjective": "Lies einen Hinweis zu einem Prepper-Versteck und **löse den Weg oder Mechanismus vor Ort ohne Lösungshilfe**."
      }
    },
    "experience": {
      "family": "stash-puzzle",
      "cardMetadata": { "genreIds": ["adventure", "shooter"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["puzzles"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Unopened Prepper Stash",
          "de": "Ungeöffnetes Prepper-Versteck",
          "chips": {"en": ["Prepper Stash"], "de": ["Prepper-Versteck"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "shooter"]
  },
  {
    "id": "far-cry-fc5-fishing-record",
    "moodIds": ["relax"],
    "type": "objective",
    "tags": ["fishing"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-5"]
    },
    "translations": {
      "en": {
        "name": "A County Catch",
        "objective": "At a Hope County fishing spot, **catch one fish named on that location's sign or map marker**.",
        "gameObjective": "At a Hope County fishing spot, **catch one fish named on that location's sign or map marker**."
      },
      "de": {
        "name": "Ein Fang in Hope County",
        "objective": "Angle an einem Platz in Hope County und **fang einen Fisch, der auf dem Schild oder Kartenmarker dort genannt wird**.",
        "gameObjective": "Angle an einem Platz in Hope County und **fang einen Fisch, der auf dem Schild oder Kartenmarker dort genannt wird**."
      }
    },
    "experience": {
      "family": "fishing",
      "cardMetadata": { "genreIds": ["adventure", "shooter"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["fishing"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Fishing rod and marked fishing spot",
          "de": "Angel und markierter Angelplatz",
          "chips": {"en": ["Rod", "Fishing spot"], "de": ["Angel", "Angelplatz"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "shooter"]
  },
  {
    "id": "far-cry-fc5-nick-air-support",
    "moodIds": ["curious"],
    "type": "experiment",
    "tags": ["abilities"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-5"]
    },
    "translations": {
      "en": {
        "name": "Nick Above, You Below",
        "objective": "With Nick Rye recruited, **call in air support on a roadblock while you approach from a different direction**.",
        "gameObjective": "With Nick Rye recruited, **call in air support on a roadblock while you approach from a different direction**."
      },
      "de": {
        "name": "Nick oben, du unten",
        "objective": "Wenn Nick Rye verfügbar ist, **ruf ihn bei einer Straßensperre aus der Luft und nähere dich selbst von einer anderen Seite**.",
        "gameObjective": "Wenn Nick Rye verfügbar ist, **ruf ihn bei einer Straßensperre aus der Luft und nähere dich selbst von einer anderen Seite**."
      }
    },
    "experience": {
      "family": "companion-combat",
      "cardMetadata": { "genreIds": ["adventure", "shooter"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["abilities"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Nick Rye recruited",
          "de": "Nick Rye rekrutiert",
          "chips": {"en": ["Nick Rye"], "de": ["Nick Rye"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "shooter"]
  },
  {
    "id": "far-cry-fc5-silo-sabotage",
    "moodIds": ["progress"],
    "type": "objective",
    "tags": ["exploration"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-5"]
    },
    "translations": {
      "en": {
        "name": "One Cult Silo",
        "objective": "Find a cult silo in John's region and **destroy it before you leave that area**.",
        "gameObjective": "Find a cult silo in John's region and **destroy it before you leave that area**."
      },
      "de": {
        "name": "Ein Sekten-Silo",
        "objective": "Finde in Johns Region ein Sektensilo und **zerstöre es, bevor du das Gebiet verlässt**.",
        "gameObjective": "Finde in Johns Region ein Sektensilo und **zerstöre es, bevor du das Gebiet verlässt**."
      }
    },
    "experience": {
      "family": "sabotage",
      "cardMetadata": { "genreIds": ["adventure", "shooter"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["exploration"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Undestroyed silo in John’s region",
          "de": "Noch intaktes Silo in Johns Region",
          "chips": {"en": ["Silo"], "de": ["Silo"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "shooter"]
  },
  {
    "id": "far-cry-fc5-wingsuit-landing",
    "moodIds": ["challenge"],
    "type": "challenge",
    "tags": ["traversal", "three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-5"]
    },
    "translations": {
      "en": {
        "name": "Wingsuit to the Road",
        "objective": "With a wingsuit and parachute unlocked in **Far Cry 5**, choose a road below a high launch point. **Glide toward it, deploy your parachute, and land beside the road**. Try up to three jumps.",
        "gameObjective": "With a wingsuit and parachute unlocked in **Far Cry 5**, choose a road below a high launch point. **Glide toward it, deploy your parachute, and land beside the road**. Try up to three jumps."
      },
      "de": {
        "name": "Im Wingsuit zur Straße",
        "objective": "Wähle in **Far Cry 5** mit freigeschaltetem Wingsuit und Fallschirm eine Straße unter einem hohen Absprungpunkt. **Gleite darauf zu, öffne den Fallschirm und lande neben der Straße**. Versuch es mit bis zu drei Sprüngen.",
        "gameObjective": "Wähle in **Far Cry 5** mit freigeschaltetem Wingsuit und Fallschirm eine Straße unter einem hohen Absprungpunkt. **Gleite darauf zu, öffne den Fallschirm und lande neben der Straße**. Versuch es mit bis zu drei Sprüngen."
      }
    },
    "experience": {
      "family": "aerial-landing",
      "cardMetadata": { "genreIds": ["adventure", "shooter"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["traversal"],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Wingsuit and parachute unlocked",
          "de": "Wingsuit und Fallschirm freigeschaltet",
          "chips": {"en": ["Wingsuit", "Parachute"], "de": ["Wingsuit", "Fallschirm"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "shooter"]
  },
  {
    "id": "far-cry-fc5-outpost-reset",
    "moodIds": ["curious"],
    "type": "experiment",
    "tags": ["replay"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-5"]
    },
    "translations": {
      "en": {
        "name": "An Old Outpost, New Ally",
        "objective": "In **Far Cry 5**, choose a hostile outpost you remember from an earlier playthrough. **Attempt its capture with a recruited companion you did not use there before**. Stay with that encounter until you clear it or are defeated.",
        "gameObjective": "In **Far Cry 5**, choose a hostile outpost you remember from an earlier playthrough. **Attempt its capture with a recruited companion you did not use there before**. Stay with that encounter until you clear it or are defeated."
      },
      "de": {
        "name": "Alter Posten, neuer Helfer",
        "objective": "Wähle in **Far Cry 5** einen feindlichen Außenposten, den du aus einem früheren Durchlauf kennst. **Versuch, ihn mit einem rekrutierten Begleiter einzunehmen, den du dort bisher nicht eingesetzt hast**. Bleib bei dieser Begegnung bis zur Einnahme oder Niederlage.",
        "gameObjective": "Wähle in **Far Cry 5** einen feindlichen Außenposten, den du aus einem früheren Durchlauf kennst. **Versuch, ihn mit einem rekrutierten Begleiter einzunehmen, den du dort bisher nicht eingesetzt hast**. Bleib bei dieser Begegnung bis zur Einnahme oder Niederlage."
      }
    },
    "experience": {
      "family": "companion-combat",
      "cardMetadata": { "genreIds": ["adventure", "shooter"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "en": "Familiar hostile outpost and recruited companion",
          "de": "Vertrauter feindlicher Außenposten und rekrutierter Begleiter",
          "chips": {"en": ["Hostile outpost", "Recruited companion"], "de": ["Feindlicher Außenposten", "Begleiter"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "shooter"]
  },
  {
    "id": "far-cry-fc5-resistance-errand",
    "moodIds": ["focused"],
    "type": "objective",
    "tags": ["story"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-5"]
    },
    "translations": {
      "en": {
        "name": "Help One Local",
        "objective": "Choose a side mission from a Hope County resident and **finish the first objective they give you**.",
        "gameObjective": "Choose a side mission from a Hope County resident and **finish the first objective they give you**."
      },
      "de": {
        "name": "Einem Bewohner helfen",
        "objective": "Wähle eine Nebenmission eines Bewohners von Hope County und **erledige sein erstes Ziel**.",
        "gameObjective": "Wähle eine Nebenmission eines Bewohners von Hope County und **erledige sein erstes Ziel**."
      }
    },
    "experience": {
      "family": "side-mission",
      "cardMetadata": { "genreIds": ["adventure", "shooter"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Available resident side mission",
          "de": "Verfügbare Nebenmission eines Bewohners",
          "chips": {"en": ["Resident side mission"], "de": ["Bewohner-Nebenmission"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "shooter"]
  },
  {
    "id": "far-cry-fc5-arcade-remix",
    "moodIds": ["create"],
    "type": "creation",
    "tags": ["level-editor"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-5"]
    },
    "translations": {
      "en": {
        "name": "Make a Small Arena",
        "objective": "In Far Cry Arcade, **place one enemy route and one alternate entry in a short map, then playtest both approaches**.",
        "gameObjective": "In Far Cry Arcade, **place one enemy route and one alternate entry in a short map, then playtest both approaches**."
      },
      "de": {
        "name": "Eine kleine Arena bauen",
        "objective": "Baue in Far Cry Arcade **eine Gegnerroute und einen zweiten Zugang in eine kurze Karte und teste beide Wege**.",
        "gameObjective": "Baue in Far Cry Arcade **eine Gegnerroute und einen zweiten Zugang in eine kurze Karte und teste beide Wege**."
      }
    },
    "experience": {
      "family": "map-editing",
      "cardMetadata": { "genreIds": ["adventure", "shooter"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["level-editor"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Available Arcade map editor",
          "de": "Verfügbarer Arcade-Karteneditor",
          "chips": {"en": ["Arcade map editor"], "de": ["Arcade-Karteneditor"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "shooter"],
    "rarity": "special"
  },
  {
    "id": "far-cry-fc5-bear-bait",
    "moodIds": ["curious"],
    "type": "experiment",
    "tags": ["hunting"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "far-cry",
      "installmentIds": ["fc-5"]
    },
    "translations": {
      "en": {
        "name": "Bait and Observe",
        "objective": "At a hunting ground, **place bait, wait at a safe distance, and identify the animal it draws before firing**.",
        "gameObjective": "At a hunting ground, **place bait, wait at a safe distance, and identify the animal it draws before firing**."
      },
      "de": {
        "name": "Köder und Beobachtung",
        "objective": "Leg an einem Jagdplatz **Köder aus, warte mit Abstand und erkenne das angelockte Tier, bevor du schießt**.",
        "gameObjective": "Leg an einem Jagdplatz **Köder aus, warte mit Abstand und erkenne das angelockte Tier, bevor du schießt**."
      }
    },
    "experience": {
      "family": "bait-observation",
      "cardMetadata": { "genreIds": ["adventure", "shooter"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["hunting"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Bait in inventory",
          "de": "Köder im Inventar",
          "chips": {"en": ["Bait"], "de": ["Köder"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "shooter"]
  }
]);
