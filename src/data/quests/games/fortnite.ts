import { defineQuests } from "../defineQuests";

export const GamesFortniteQuests = defineQuests([
  {
    "id": "fortnite-first-gun-stays",
    "moodIds": ["challenge", "focused"],
    "type": "challenge",
    "tags": ["one-weapon", "full-match"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "universal": false,
    "curated": {
      "gameId": "fortnite",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "First Gun Stays",
        "objective": "In **Fortnite Solo Zero Build**, keep your first firearm as your only damage-dealing item. **Play through the match result without replacing it**, even with a better version. Healing, shields, and mobility are allowed. Use the pickaxe only for harvesting.",
        "gameObjective": "In **Fortnite Solo Zero Build**, keep your first firearm as your only damage-dealing item. **Play through the match result without replacing it**, even with a better version. Healing, shields, and mobility are allowed. Use the pickaxe only for harvesting."
      },
      "de": {
        "name": "Die erste bleibt",
        "objective": "Behalte in **Fortnite Solo Zero Build** deine erste Schusswaffe als einzige Waffe, mit der du Schaden machst. **Spiel das Match zu Ende, ohne sie auszutauschen**, auch nicht gegen eine bessere Version. Heilung, Schilde und Fortbewegung sind erlaubt; die Spitzhacke nutzt du nur zum Abbauen.",
        "gameObjective": "Behalte in **Fortnite Solo Zero Build** deine erste Schusswaffe als einzige Waffe, mit der du Schaden machst. **Spiel das Match zu Ende, ohne sie auszutauschen**, auch nicht gegen eine bessere Version. Heilung, Schilde und Fortbewegung sind erlaubt; die Spitzhacke nutzt du nur zum Abbauen."
      }
    },
    "experience": {
      "family": "first-weapon",
      "cardMetadata": { "genreIds": ["shooter"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["one-weapon", "full-match"],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "Solo Zero Build"
        }
      ]
    },
    "gameGenreIds": ["shooter"]
  },
  {
    "id": "fortnite-overshield-reset",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["new-approach"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "fortnite",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Let It Recharge",
        "objective": "In **Fortnite Solo Zero Build**, try a deliberate retreat: break line of sight after your first shield hit, **let the Overshield recharge, then rejoin the fight**. Elimination ends the attempt.",
        "gameObjective": "In **Fortnite Solo Zero Build**, try a deliberate retreat: break line of sight after your first shield hit, **let the Overshield recharge, then rejoin the fight**. Elimination ends the attempt."
      },
      "de": {
        "name": "Erst wieder aufladen",
        "objective": "Spiel **Fortnite Solo Zero Build** und probier einen bewussten Rückzug: Brich nach dem ersten Schildtreffer den Sichtkontakt ab, **lass den Extraschild aufladen und geh dann wieder in den Kampf**. Wirst du vorher eliminiert, endet der Versuch.",
        "gameObjective": "Spiel **Fortnite Solo Zero Build** und probier einen bewussten Rückzug: Brich nach dem ersten Schildtreffer den Sichtkontakt ab, **lass den Extraschild aufladen und geh dann wieder in den Kampf**. Wirst du vorher eliminiert, endet der Versuch."
      }
    },
    "experience": {
      "family": "overshield-reset",
      "cardMetadata": { "genreIds": ["shooter"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": [],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "Solo Zero Build"
        }
      ]
    },
    "gameGenreIds": ["shooter"]
  },
  {
    "id": "fortnite-timber-cover",
    "moodIds": ["focused", "restless"],
    "type": "challenge",
    "tags": ["building", "full-match"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "universal": false,
    "curated": {
      "gameId": "fortnite",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Timber Cover",
        "objective": "In **Fortnite Solo Battle Royale with building enabled**, gather wood before fighting. After taking fire, **build a wall and ramp, land a shot from that cover, and finish the match**. Build only with wood during this attempt.",
        "gameObjective": "In **Fortnite Solo Battle Royale with building enabled**, gather wood before fighting. After taking fire, **build a wall and ramp, land a shot from that cover, and finish the match**. Build only with wood during this attempt."
      },
      "de": {
        "name": "Deckung aus Holz",
        "objective": "Sammle in **Fortnite Solo Battle Royale mit Bauen** vor dem Kampf Holz. **Bau nach dem ersten Beschuss eine Wand und eine Rampe, treff aus dieser Deckung einen Gegner und spiel das Match zu Ende**. Für diesen Versuch baust du nur mit Holz.",
        "gameObjective": "Sammle in **Fortnite Solo Battle Royale mit Bauen** vor dem Kampf Holz. **Bau nach dem ersten Beschuss eine Wand und eine Rampe, treff aus dieser Deckung einen Gegner und spiel das Match zu Ende**. Für diesen Versuch baust du nur mit Holz."
      }
    },
    "experience": {
      "family": "combat-building",
      "cardMetadata": { "genreIds": ["shooter"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["building"],
      "rules": ["full-match"],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "Solo Battle Royale"
        }
      ]
    },
    "gameGenreIds": ["shooter"]
  },
  {
    "id": "fortnite-fish-before-rotation",
    "moodIds": ["curious", "explore"],
    "type": "inspiration",
    "tags": ["fishing"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "fortnite",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Fish by the Shore",
        "objective": "In **Fortnite Solo Zero Build with fishing rods in the current loot pool**, land near water and try the nearby fishing spots. Keep the storm in view and make fishing your starting direction rather than chasing a win.",
        "gameObjective": "In **Fortnite Solo Zero Build with fishing rods in the current loot pool**, land near water and try the nearby fishing spots. Keep the storm in view and make fishing your starting direction rather than chasing a win."
      },
      "de": {
        "name": "Am Ufer angeln",
        "objective": "Lande in **Fortnite Solo Null Bauen, wenn Angelruten im aktuellen Loot-Pool liegen**, am Wasser und probier die nahen Angelstellen aus. Behalt den Sturm im Blick und lass das Angeln deine Session starten, statt einem Sieg hinterherzujagen.",
        "gameObjective": "Lande in **Fortnite Solo Null Bauen, wenn Angelruten im aktuellen Loot-Pool liegen**, am Wasser und probier die nahen Angelstellen aus. Behalt den Sturm im Blick und lass das Angeln deine Session starten, statt einem Sieg hinterherzujagen."
      }
    },
    "experience": {
      "family": "fishing",
      "cardMetadata": { "genreIds": ["shooter", "survival"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["fishing"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Fishing rods in the current loot pool",
          "de": "Angelruten im aktuellen Loot-Pool",
          "chips": {"en": ["Rod"], "de": ["Angel"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "Solo Zero Build"
        }
      ]
    },
    "gameGenreIds": ["shooter", "survival"]
  },
  {
    "id": "fortnite-mantle-supply-route",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["traversal"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "fortnite",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Loot from Above",
        "objective": "In **Fortnite Solo Zero Build**, approach a building via a low roof instead of its ground-floor entrance. **Mantle up and take a route from above to loot inside**. Elimination ends the attempt.",
        "gameObjective": "In **Fortnite Solo Zero Build**, approach a building via a low roof instead of its ground-floor entrance. **Mantle up and take a route from above to loot inside**. Elimination ends the attempt."
      },
      "de": {
        "name": "Loot von oben",
        "objective": "Nähere dich in **Fortnite Solo Zero Build** einem Gebäude über ein niedriges Dach statt durch den Erdgeschoss-Eingang. **Kletter hinauf und such von oben einen Weg zum Loot im Gebäude**. Eine Eliminierung beendet den Versuch.",
        "gameObjective": "Nähere dich in **Fortnite Solo Zero Build** einem Gebäude über ein niedriges Dach statt durch den Erdgeschoss-Eingang. **Kletter hinauf und such von oben einen Weg zum Loot im Gebäude**. Eine Eliminierung beendet den Versuch."
      }
    },
    "experience": {
      "family": "roof-entry",
      "cardMetadata": { "genreIds": ["shooter", "survival"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["traversal"],
      "rules": [],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "Solo Zero Build"
        }
      ]
    },
    "gameGenreIds": ["shooter", "survival"]
  },
  {
    "id": "fortnite-slide-reposition",
    "moodIds": ["focused", "curious"],
    "type": "experiment",
    "tags": ["traversal"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "fortnite",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Slide to Another Angle",
        "objective": "During a fight in **Fortnite Solo Zero Build**, slide down a slope. **Use it to change your angle on the opponent and try continuing the fight from there**. Elimination ends the attempt.",
        "gameObjective": "During a fight in **Fortnite Solo Zero Build**, slide down a slope. **Use it to change your angle on the opponent and try continuing the fight from there**. Elimination ends the attempt."
      },
      "de": {
        "name": "Rutsch zum neuen Winkel",
        "objective": "Nutze in **Fortnite Solo Zero Build** während eines Kampfes einen Hang zum Rutschen. **Wechsle damit den Winkel zum Gegner und probier aus, von dort weiterzukämpfen**. Eine Eliminierung beendet den Versuch.",
        "gameObjective": "Nutze in **Fortnite Solo Zero Build** während eines Kampfes einen Hang zum Rutschen. **Wechsle damit den Winkel zum Gegner und probier aus, von dort weiterzukämpfen**. Eine Eliminierung beendet den Versuch."
      }
    },
    "experience": {
      "family": "slide-reposition",
      "cardMetadata": { "genreIds": ["shooter", "survival"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["traversal"],
      "rules": [],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "Solo Zero Build"
        }
      ]
    },
    "gameGenreIds": ["shooter", "survival"]
  },
  {
    "id": "fortnite-late-bus-map",
    "moodIds": ["explore"],
    "type": "inspiration",
    "tags": ["exploration"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "fortnite",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "The Far End",
        "objective": "In **Fortnite Solo Battle Royale**, stay on the bus until the far end of its route. Drop toward a place you rarely visit and let the first safe zone guide your way across that side of the island.",
        "gameObjective": "In **Fortnite Solo Battle Royale**, stay on the bus until the far end of its route. Drop toward a place you rarely visit and let the first safe zone guide your way across that side of the island."
      },
      "de": {
        "name": "Am anderen Ende",
        "objective": "Bleib in **Fortnite Solo Battle Royale** bis zum hinteren Ende der Busroute sitzen. Lande an einem Ort, den du selten besuchst, und lass die erste sichere Zone deinen Weg über diese Inselseite bestimmen.",
        "gameObjective": "Bleib in **Fortnite Solo Battle Royale** bis zum hinteren Ende der Busroute sitzen. Lande an einem Ort, den du selten besuchst, und lass die erste sichere Zone deinen Weg über diese Inselseite bestimmen."
      }
    },
    "experience": {
      "family": "unfamiliar-landing",
      "cardMetadata": { "genreIds": ["shooter", "survival"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["exploration"],
      "rules": [],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "Solo Battle Royale"
        }
      ]
    },
    "gameGenreIds": ["shooter", "survival"]
  },
  {
    "id": "fortnite-private-shockwave-angle",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["gadgets", "traversal"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "fortnite",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Aim Your Own Launch",
        "objective": "On your **own private Fortnite Creative island with Shockwave Grenades available**, start on a flat patch with room to land. **Throw one beside you and another behind you, then compare your landing points**. Reset to the same starting spot for each throw.",
        "gameObjective": "On your **own private Fortnite Creative island with Shockwave Grenades available**, start on a flat patch with room to land. **Throw one beside you and another behind you, then compare your landing points**. Reset to the same starting spot for each throw."
      },
      "de": {
        "name": "Deinen Absprung steuern",
        "objective": "Starte auf deiner **eigenen privaten Fortnite-Creative-Insel mit verfügbaren Schockwellengranaten** auf einer ebenen Fläche mit Platz zum Landen. **Wirf eine neben dich und eine hinter dich und vergleiche deine Landepunkte**. Starte für beide Würfe an derselben Stelle.",
        "gameObjective": "Starte auf deiner **eigenen privaten Fortnite-Creative-Insel mit verfügbaren Schockwellengranaten** auf einer ebenen Fläche mit Platz zum Landen. **Wirf eine neben dich und eine hinter dich und vergleiche deine Landepunkte**. Starte für beide Würfe an derselben Stelle."
      }
    },
    "experience": {
      "family": "shockwave-placement",
      "cardMetadata": { "genreIds": ["shooter", "survival"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["gadgets", "traversal"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Eigene private Creative-Insel mit Schockwellengranaten",
          "en": "Own private Creative island with Shockwave Grenades",
          "chips": {"en": ["Private Creative", "Shockwave Grenades"], "de": ["Private Creative-Insel", "Schockwellengranaten"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "private Creative"
        }
      ]
    },
    "gameGenreIds": ["shooter", "survival"]
  },
  {
    "id": "fortnite-share-found-shields",
    "moodIds": ["connect"],
    "type": "objective",
    "tags": ["support", "full-match"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "fortnite",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Shield for Your Duo",
        "objective": "Queue **Fortnite Battle Royale Duos with a friend**. Share spare shields when either of you finds them and **play through the match result together**, even if neither finds spare shields.",
        "gameObjective": "Queue **Fortnite Battle Royale Duos with a friend**. Share spare shields when either of you finds them and **play through the match result together**, even if neither finds spare shields."
      },
      "de": {
        "name": "Schild fürs Duo",
        "objective": "Starte **Fortnite Battle Royale Duos mit einem Freund**. Teilt überschüssige Schilditems, sobald jemand welche findet, und **spielt zusammen bis zum Match-Ergebnis**, auch wenn keine übrig bleiben.",
        "gameObjective": "Starte **Fortnite Battle Royale Duos mit einem Freund**. Teilt überschüssige Schilditems, sobald jemand welche findet, und **spielt zusammen bis zum Match-Ergebnis**, auch wenn keine übrig bleiben."
      }
    },
    "experience": {
      "family": "shield-sharing",
      "cardMetadata": { "genreIds": ["shooter", "survival"], "playStyleIds": ["co-op"] },
      "finish": "attempt",
      "activities": ["support"],
      "rules": ["full-match"],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "online",
          "people": "others",
          "participation": "co-op",
          "formation": "squad",
          "mode": "Duos"
        }
      ]
    },
    "gameGenreIds": ["shooter", "survival"]
  },
  {
    "id": "fortnite-reload-second-route",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["new-approach", "full-match"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "fortnite",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Another Reboot Route",
        "objective": "In **Fortnite Solo Reload**, if you reboot, land away from the place you were eliminated and take a new route for supplies. **Play through the match result** and compare the second start. A match without a reboot counts too.",
        "gameObjective": "In **Fortnite Solo Reload**, if you reboot, land away from the place you were eliminated and take a new route for supplies. **Play through the match result** and compare the second start. A match without a reboot counts too."
      },
      "de": {
        "name": "Nach dem Neustart anders",
        "objective": "Lande in **Fortnite Solo Reload** nach einem Neustart abseits deines Eliminierungsorts und nimm einen neuen Weg zur Ausrüstung. **Spiel bis zum Match-Ergebnis** und vergleiche den zweiten Start. Ein Match ohne Neustart zählt ebenfalls.",
        "gameObjective": "Lande in **Fortnite Solo Reload** nach einem Neustart abseits deines Eliminierungsorts und nimm einen neuen Weg zur Ausrüstung. **Spiel bis zum Match-Ergebnis** und vergleiche den zweiten Start. Ein Match ohne Neustart zählt ebenfalls."
      }
    },
    "experience": {
      "family": "reboot-routing",
      "cardMetadata": { "genreIds": ["shooter", "survival"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["full-match"],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "Solo Reload"
        }
      ]
    },
    "gameGenreIds": ["shooter", "survival"]
  },
  {
    "id": "fortnite-build-edit-door",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["building"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "fortnite",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "A Wall Becomes Door",
        "objective": "On your **own private Fortnite Creative island**, build a wall and edit a door into it. Fire through the opening, reset the wall, and **try shooting through a window edit instead**, comparing the angles from the same position.",
        "gameObjective": "On your **own private Fortnite Creative island**, build a wall and edit a door into it. Fire through the opening, reset the wall, and **try shooting through a window edit instead**, comparing the angles from the same position."
      },
      "de": {
        "name": "Die Wand bekommt Türen",
        "objective": "Bau auf **deiner privaten Fortnite-Creative-Insel** eine Wand und bearbeite sie zu einer Tür. Schieß durch die Öffnung, setz die Wand zurück und **probier stattdessen einen Schuss durch einen Fenster-Edit**. Vergleiche die Winkel von derselben Position.",
        "gameObjective": "Bau auf **deiner privaten Fortnite-Creative-Insel** eine Wand und bearbeite sie zu einer Tür. Schieß durch die Öffnung, setz die Wand zurück und **probier stattdessen einen Schuss durch einen Fenster-Edit**. Vergleiche die Winkel von derselben Position."
      }
    },
    "experience": {
      "family": "wall-edits",
      "cardMetadata": { "genreIds": ["shooter", "sandbox"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["building"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Eigene private Creative-Insel mit Bauen und einer Waffe",
          "en": "Own private Creative island with building and a weapon",
          "chips": {"en": ["Private Creative", "Weapon"], "de": ["Private Creative-Insel", "Waffe"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "private Creative"
        }
      ]
    },
    "gameGenreIds": ["shooter", "sandbox"]
  },
  {
    "id": "fortnite-creative-roof-course",
    "moodIds": ["create"],
    "type": "creation",
    "tags": ["building", "level-editor"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "fortnite",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "A Rooftop Route",
        "objective": "On your **own private Fortnite Creative island**, arrange three low building roofs with gaps you can cross by jumping or mantling. **Save the island and cross the route from first roof to last**.",
        "gameObjective": "On your **own private Fortnite Creative island**, arrange three low building roofs with gaps you can cross by jumping or mantling. **Save the island and cross the route from first roof to last**."
      },
      "de": {
        "name": "Ein Weg über Dächer",
        "objective": "Stell auf **deiner privaten Fortnite-Creative-Insel** drei niedrige Gebäudedächer mit spring- oder kletterbaren Lücken auf. **Speichere die Insel und komm vom ersten bis zum letzten Dach**.",
        "gameObjective": "Stell auf **deiner privaten Fortnite-Creative-Insel** drei niedrige Gebäudedächer mit spring- oder kletterbaren Lücken auf. **Speichere die Insel und komm vom ersten bis zum letzten Dach**."
      }
    },
    "experience": {
      "family": "rooftop-course",
      "cardMetadata": { "genreIds": ["shooter", "sandbox"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["building", "level-editor"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Own private Creative island; required devices available",
          "de": "Eigene private Creative-Insel; nötige Geräte verfügbar",
          "chips": {"en": ["Private Creative island", "Devices"], "de": ["Private Creative-Insel", "Geräte"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "private Creative"
        }
      ]
    },
    "gameGenreIds": ["shooter", "sandbox"],
    "rarity": "special"
  },
  {
    "id": "fortnite-creative-air-vent-loop",
    "moodIds": ["create", "focused"],
    "type": "creation",
    "tags": ["level-editor"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "fortnite",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "A Vent Back Up",
        "objective": "In your **own private Fortnite Creative island**, place an Air Vent below a platform you can land on. **Save and test a loop from the platform down to the vent and back up**.",
        "gameObjective": "In your **own private Fortnite Creative island**, place an Air Vent below a platform you can land on. **Save and test a loop from the platform down to the vent and back up**."
      },
      "de": {
        "name": "Mit dem Air Vent zurück",
        "objective": "Platziere auf **deiner privaten Fortnite-Creative-Insel** einen Air Vent unter einer Plattform mit Platz zum Landen. **Speichere und teste eine Runde von der Plattform zum Vent und wieder hinauf**.",
        "gameObjective": "Platziere auf **deiner privaten Fortnite-Creative-Insel** einen Air Vent unter einer Plattform mit Platz zum Landen. **Speichere und teste eine Runde von der Plattform zum Vent und wieder hinauf**."
      }
    },
    "experience": {
      "family": "vent-course",
      "cardMetadata": { "genreIds": ["shooter", "sandbox"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["level-editor"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Eigene private Creative-Insel mit Air Vent und Plattformen",
          "en": "Own private Creative island with Air Vent and platforms",
          "chips": {"en": ["Private Creative", "Air Vent"], "de": ["Private Creative-Insel", "Air Vent"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "private Creative"
        }
      ]
    },
    "gameGenreIds": ["shooter", "sandbox"]
  },
  {
    "id": "fortnite-private-edit-duel",
    "moodIds": ["connect"],
    "type": "objective",
    "tags": ["co-op", "building"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "fortnite",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Learn Their Edit",
        "objective": "On a **private Fortnite Creative island with a friend**, each build and demonstrate a wall edit that creates a firing angle. **Swap places and try each other’s edit**, with no score target.",
        "gameObjective": "On a **private Fortnite Creative island with a friend**, each build and demonstrate a wall edit that creates a firing angle. **Swap places and try each other’s edit**, with no score target."
      },
      "de": {
        "name": "Ein Edit voneinander",
        "objective": "Baut und zeigt euch auf einer **privaten Fortnite-Creative-Insel mit einem Freund** je ein Wand-Edit für einen Schusswinkel. **Tauscht die Plätze und probiert das Edit der anderen Person**, ohne Punkteziel.",
        "gameObjective": "Baut und zeigt euch auf einer **privaten Fortnite-Creative-Insel mit einem Freund** je ein Wand-Edit für einen Schusswinkel. **Tauscht die Plätze und probiert das Edit der anderen Person**, ohne Punkteziel."
      }
    },
    "experience": {
      "family": "shared-edits",
      "cardMetadata": { "genreIds": ["shooter", "sandbox"], "playStyleIds": ["co-op"] },
      "finish": "attempt",
      "activities": ["building"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Private Creative-Insel, Mitspieler und Edit-Bauteile",
          "en": "Private Creative island, another player and editable building pieces",
          "chips": {"en": ["Private Creative", "Editable pieces"], "de": ["Private Creative-Insel", "Edit-Bauteile"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "others",
          "participation": "co-op",
          "formation": "none",
          "mode": "private Creative practice"
        }
      ]
    },
    "gameGenreIds": ["shooter", "sandbox"]
  },
  {
    "id": "fortnite-old-poi-creative",
    "moodIds": ["nostalgic"],
    "type": "inspiration",
    "tags": ["exploration"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "fortnite",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "An Old Landing Spot",
        "objective": "Find a Fortnite Creative island recreating a landing spot you remember from an earlier season. **Walk its old loot route** and explore the details you still recognise.",
        "gameObjective": "Find a Fortnite Creative island recreating a landing spot you remember from an earlier season. **Walk its old loot route** and explore the details you still recognise."
      },
      "de": {
        "name": "Dein alter Landeort",
        "objective": "Such eine Fortnite-Creative-Insel mit einem Landeort, den du aus einer früheren Saison kennst. **Lauf die alte Loot-Route ab** und erkunde die Ecken, die du noch wiedererkennst.",
        "gameObjective": "Such eine Fortnite-Creative-Insel mit einem Landeort, den du aus einer früheren Saison kennst. **Lauf die alte Loot-Route ab** und erkunde die Ecken, die du noch wiedererkennst."
      }
    },
    "experience": {
      "family": "familiar-landmarks",
      "cardMetadata": { "genreIds": ["shooter", "sandbox"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["exploration"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Accessible Creative recreation of a familiar landing spot",
          "de": "Erreichbarer Creative-Nachbau eines vertrauten Landeorts",
          "chips": {"en": ["Creative remake"], "de": ["Creative-Nachbau"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "Solo Creative discovery"
        }
      ]
    },
    "gameGenreIds": ["shooter", "sandbox"]
  },
  {
    "id": "fortnite-festival-bass-switch",
    "moodIds": ["curious"],
    "type": "experiment",
    "tags": ["rhythm"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "fortnite",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Hear the Bass",
        "objective": "In **Fortnite Festival Main Stage**, choose an available song and play it on vocals, then bass, at your usual difficulty. **Finish both performances** and compare the rhythm each part follows.",
        "gameObjective": "In **Fortnite Festival Main Stage**, choose an available song and play it on vocals, then bass, at your usual difficulty. **Finish both performances** and compare the rhythm each part follows."
      },
      "de": {
        "name": "Den Bass hören",
        "objective": "Wähl in **Fortnite Festival Main Stage** einen verfügbaren Song und spiel ihn erst auf Gesang, dann auf Bass in deiner üblichen Schwierigkeit. **Beende beide Durchgänge** und vergleiche den Rhythmus der Stimmen.",
        "gameObjective": "Wähl in **Fortnite Festival Main Stage** einen verfügbaren Song und spiel ihn erst auf Gesang, dann auf Bass in deiner üblichen Schwierigkeit. **Beende beide Durchgänge** und vergleiche den Rhythmus der Stimmen."
      }
    },
    "experience": {
      "family": "instrument-comparison",
      "cardMetadata": { "genreIds": ["rhythm"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["rhythm"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Song available on vocals and bass; No Fill",
          "de": "Song für Gesang und Bass verfügbar; ohne Auffüllen",
          "chips": {"en": ["Vocals", "Bass"], "de": ["Gesang", "Bass"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "Main Stage No Fill"
        }
      ]
    },
    "gameGenreIds": ["rhythm"]
  },
  {
    "id": "fortnite-festival-familiar-song",
    "moodIds": ["relax", "low-energy"],
    "type": "inspiration",
    "tags": ["rhythm"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "fortnite",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "A Song You Know",
        "objective": "Open Fortnite Festival Main Stage and choose an available song you already know on an easy difficulty. **Follow the part you enjoy hearing** and let the music carry the session.",
        "gameObjective": "Open Fortnite Festival Main Stage and choose an available song you already know on an easy difficulty. **Follow the part you enjoy hearing** and let the music carry the session."
      },
      "de": {
        "name": "Dein vertrauter Song",
        "objective": "Starte Fortnite Festival Main Stage und wähl auf leichter Schwierigkeit einen verfügbaren Song, den du schon kennst. **Spiel die Stimme, die du gern hörst**, und lass die Musik die Session tragen.",
        "gameObjective": "Starte Fortnite Festival Main Stage und wähl auf leichter Schwierigkeit einen verfügbaren Song, den du schon kennst. **Spiel die Stimme, die du gern hörst**, und lass die Musik die Session tragen."
      }
    },
    "experience": {
      "family": "familiar-music",
      "cardMetadata": { "genreIds": ["rhythm"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["rhythm"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Familiar available song; Main Stage No Fill",
          "de": "Vertrauter verfügbarer Song; Main Stage ohne Auffüllen",
          "chips": {"en": ["Main Stage"], "de": ["Main Stage"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "Main Stage No Fill"
        }
      ]
    },
    "gameGenreIds": ["rhythm"]
  },
  {
    "id": "fortnite-locker-season-memory",
    "moodIds": ["create", "relax"],
    "type": "creation",
    "tags": ["outfit"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "fortnite",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Dress for That Season",
        "objective": "In your **Fortnite Locker**, use owned cosmetics to make a preset around a season you remember. **Save it and load into your own Creative island with it equipped**.",
        "gameObjective": "In your **Fortnite Locker**, use owned cosmetics to make a preset around a season you remember. **Save it and load into your own Creative island with it equipped**."
      },
      "de": {
        "name": "Outfit für die Saison",
        "objective": "Bau in deinem **Fortnite-Spind** mit vorhandenen Cosmetics ein Preset zu einer Saison, an die du dich erinnerst. **Speichere es und betritt damit deine eigene Creative-Insel**.",
        "gameObjective": "Bau in deinem **Fortnite-Spind** mit vorhandenen Cosmetics ein Preset zu einer Saison, an die du dich erinnerst. **Speichere es und betritt damit deine eigene Creative-Insel**."
      }
    },
    "experience": {
      "family": "locker-style",
      "cardMetadata": { "genreIds": ["shooter", "sandbox"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["outfit"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Eigene Cosmetics und private Creative-Insel",
          "en": "Owned cosmetics and private Creative island",
          "chips": {"en": ["Private Creative", "Cosmetics"], "de": ["Private Creative-Insel", "Cosmetics"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "private Creative"
        }
      ]
    },
    "gameGenreIds": ["shooter", "sandbox"]
  },
  {
    "id": "fortnite-one-quest-landmark",
    "moodIds": ["progress", "focused"],
    "type": "objective",
    "tags": ["exploration"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "fortnite",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Follow the Quest Marker",
        "objective": "Choose an **available Fortnite Battle Royale quest for a marked location**. Land nearby and **reach the place to complete that quest step**. Elimination ends the attempt.",
        "gameObjective": "Choose an **available Fortnite Battle Royale quest for a marked location**. Land nearby and **reach the place to complete that quest step**. Elimination ends the attempt."
      },
      "de": {
        "name": "Dem Questmarker folgen",
        "objective": "Wähl eine **verfügbare Fortnite-Battle-Royale-Quest für einen markierten Ort**. Lande in der Nähe und **erreiche den Ort, damit der Questschritt zählt**. Eine Eliminierung beendet den Versuch.",
        "gameObjective": "Wähl eine **verfügbare Fortnite-Battle-Royale-Quest für einen markierten Ort**. Lande in der Nähe und **erreiche den Ort, damit der Questschritt zählt**. Eine Eliminierung beendet den Versuch."
      }
    },
    "experience": {
      "family": "location-quests",
      "cardMetadata": { "genreIds": ["shooter", "survival"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["exploration"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Available location-visit quest",
          "de": "Verfügbarer Ortsbesuch-Auftrag",
          "chips": {"en": ["Location-visit quest"], "de": ["Ortsbesuch-Auftrag"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "Solo Battle Royale"
        }
      ]
    },
    "gameGenreIds": ["shooter", "survival"]
  },
  {
    "id": "fortnite-private-three-materials",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["building"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "fortnite",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Feel the Three Materials",
        "objective": "On **your private Fortnite Creative island**, build a wood wall, a brick wall and a metal wall. Let each finish building, then **break them with the same weapon to compare their durability**.",
        "gameObjective": "On **your private Fortnite Creative island**, build a wood wall, a brick wall and a metal wall. Let each finish building, then **break them with the same weapon to compare their durability**."
      },
      "de": {
        "name": "Drei Baumaterialien",
        "objective": "Bau auf **deiner privaten Fortnite-Creative-Insel** je eine Wand aus Holz, Stein und Metall. Warte, bis sie fertig aufgebaut sind, und **zerstör alle drei mit derselben Waffe, um ihre Haltbarkeit zu vergleichen**.",
        "gameObjective": "Bau auf **deiner privaten Fortnite-Creative-Insel** je eine Wand aus Holz, Stein und Metall. Warte, bis sie fertig aufgebaut sind, und **zerstör alle drei mit derselben Waffe, um ihre Haltbarkeit zu vergleichen**."
      }
    },
    "experience": {
      "family": "material-durability",
      "cardMetadata": { "genreIds": ["shooter", "sandbox"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["building"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Eigene private Creative-Insel, drei Baumaterialien und eine Waffe",
          "en": "Own private Creative island, three building materials and a weapon",
          "chips": {"en": ["Private Creative", "Weapon"], "de": ["Private Creative-Insel", "Waffe"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "private Creative"
        }
      ]
    },
    "gameGenreIds": ["shooter", "sandbox"]
  },
  {
    "id": "fortnite-storm-map-plan",
    "moodIds": ["focused", "curious"],
    "type": "experiment",
    "tags": ["exploration"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "fortnite",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Pick the Crossing",
        "objective": "When the first circle appears in **Fortnite Solo Zero Build**, choose a route into safety using natural cover. **Try that rotation**, adapting if you meet enemies. Elimination ends the attempt.",
        "gameObjective": "When the first circle appears in **Fortnite Solo Zero Build**, choose a route into safety using natural cover. **Try that rotation**, adapting if you meet enemies. Elimination ends the attempt."
      },
      "de": {
        "name": "Den Übergang wählen",
        "objective": "Wähl in **Fortnite Solo Zero Build** beim ersten Kreis einen Weg zur sicheren Zone, der natürliche Deckung nutzt. **Probier diese Rotation aus** und pass den Weg an, wenn du auf Gegner triffst. Eine Eliminierung beendet den Versuch.",
        "gameObjective": "Wähl in **Fortnite Solo Zero Build** beim ersten Kreis einen Weg zur sicheren Zone, der natürliche Deckung nutzt. **Probier diese Rotation aus** und pass den Weg an, wenn du auf Gegner triffst. Eine Eliminierung beendet den Versuch."
      }
    },
    "experience": {
      "family": "storm-routing",
      "cardMetadata": { "genreIds": ["shooter", "survival"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["exploration"],
      "rules": [],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "Solo Zero Build"
        }
      ]
    },
    "gameGenreIds": ["shooter", "survival"]
  },
  {
    "id": "fortnite-private-headshot-range",
    "moodIds": ["create", "focused"],
    "type": "creation",
    "tags": ["level-editor"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "fortnite",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "A Shooting Lane",
        "objective": "In your **own private Fortnite Creative island**, set up target devices at three distances and a weapon pickup at the start. **Save the island and test that all targets can be hit from the pickup spot**.",
        "gameObjective": "In your **own private Fortnite Creative island**, set up target devices at three distances and a weapon pickup at the start. **Save the island and test that all targets can be hit from the pickup spot**."
      },
      "de": {
        "name": "Eine Schussbahn",
        "objective": "Stell auf **deiner privaten Fortnite-Creative-Insel** Zielgeräte in drei Entfernungen und eine Waffenaufnahme am Start auf. **Speichere die Insel und teste, ob alle Ziele vom Startpunkt getroffen werden können**.",
        "gameObjective": "Stell auf **deiner privaten Fortnite-Creative-Insel** Zielgeräte in drei Entfernungen und eine Waffenaufnahme am Start auf. **Speichere die Insel und teste, ob alle Ziele vom Startpunkt getroffen werden können**."
      }
    },
    "experience": {
      "family": "target-range",
      "cardMetadata": { "genreIds": ["shooter", "sandbox"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["level-editor"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Eigene private Creative-Insel mit Zielgeräten und Waffenaufnahme",
          "en": "Own private Creative island with target devices and a weapon pickup",
          "chips": {"en": ["Private Creative", "Targets"], "de": ["Private Creative-Insel", "Ziele"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "private Creative"
        }
      ]
    },
    "gameGenreIds": ["shooter", "sandbox"],
    "rarity": "special"
  },
  {
    "id": "fortnite-duo-rescue-revive",
    "moodIds": ["connect"],
    "type": "objective",
    "tags": ["support", "full-match"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "fortnite",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Cover the Recovery",
        "objective": "Play **Fortnite Zero Build Duos with a friend**. If they are knocked, try using nearby cover to revive them. Otherwise keep supplies ready to share. **Play through the match result together**, whether a revive was needed or not.",
        "gameObjective": "Play **Fortnite Zero Build Duos with a friend**. If they are knocked, try using nearby cover to revive them. Otherwise keep supplies ready to share. **Play through the match result together**, whether a revive was needed or not."
      },
      "de": {
        "name": "Die Erholung decken",
        "objective": "Spiel **Fortnite Null Bauen Duos mit einem Freund**. Wird er niedergeschlagen, versuch ihn in naher Deckung wiederzubeleben. Halte sonst Vorräte zum Teilen bereit. **Spielt zusammen bis zum Match-Ergebnis**, auch wenn keine Wiederbelebung nötig war.",
        "gameObjective": "Spiel **Fortnite Null Bauen Duos mit einem Freund**. Wird er niedergeschlagen, versuch ihn in naher Deckung wiederzubeleben. Halte sonst Vorräte zum Teilen bereit. **Spielt zusammen bis zum Match-Ergebnis**, auch wenn keine Wiederbelebung nötig war."
      }
    },
    "experience": {
      "family": "teammate-rescue",
      "cardMetadata": { "genreIds": ["shooter", "survival"], "playStyleIds": ["co-op"] },
      "finish": "attempt",
      "activities": ["support"],
      "rules": ["full-match"],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "online",
          "people": "others",
          "participation": "co-op",
          "formation": "squad",
          "mode": "Duos"
        }
      ]
    },
    "gameGenreIds": ["shooter", "survival"]
  },
  {
    "id": "fortnite-storm-edge-walk",
    "moodIds": ["challenge"],
    "type": "challenge",
    "tags": ["one-life"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "fortnite",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Walk the Edge",
        "objective": "In Battle Royale, **reach the third safe zone without using a vehicle or launch item**. One match.",
        "gameObjective": "In Battle Royale, **reach the third safe zone without using a vehicle or launch item**. One match."
      },
      "de": {
        "name": "Am Sturmrand entlang",
        "objective": "Erreiche in Battle Royale **die dritte sichere Zone ohne Fahrzeug oder Sprung-Item**. Ein Match.",
        "gameObjective": "Erreiche in Battle Royale **die dritte sichere Zone ohne Fahrzeug oder Sprung-Item**. Ein Match."
      }
    },
    "experience": {
      "family": "storm-traversal",
      "cardMetadata": { "genreIds": ["shooter", "survival"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["one-life"],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "Solo Battle Royale"
        }
      ]
    },
    "gameGenreIds": ["shooter", "survival"]
  },
  {
    "id": "fortnite-build-to-escape",
    "moodIds": ["curious"],
    "type": "experiment",
    "tags": ["building"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "fortnite",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "One Useful Build",
        "objective": "During a fight in **Fortnite Solo Battle Royale with building enabled**, build a short route out of the line of fire. **Use your structure to reach cover or a new position**. Elimination ends the attempt.",
        "gameObjective": "During a fight in **Fortnite Solo Battle Royale with building enabled**, build a short route out of the line of fire. **Use your structure to reach cover or a new position**. Elimination ends the attempt."
      },
      "de": {
        "name": "Bauen zum Entkommen",
        "objective": "Bau in **Fortnite Solo Battle Royale mit Bauen** während eines Kampfes einen kurzen Weg aus der Schusslinie. **Nutze deine Konstruktion, um Deckung oder eine neue Position zu erreichen**. Eine Eliminierung beendet den Versuch.",
        "gameObjective": "Bau in **Fortnite Solo Battle Royale mit Bauen** während eines Kampfes einen kurzen Weg aus der Schusslinie. **Nutze deine Konstruktion, um Deckung oder eine neue Position zu erreichen**. Eine Eliminierung beendet den Versuch."
      }
    },
    "experience": {
      "family": "escape-building",
      "cardMetadata": { "genreIds": ["shooter", "survival"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["building"],
      "rules": [],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "Solo Battle Royale"
        }
      ]
    },
    "gameGenreIds": ["shooter", "survival"]
  },
  {
    "id": "fortnite-zero-build-cover",
    "moodIds": ["focused"],
    "type": "objective",
    "tags": ["traversal"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "fortnite",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Cover Without Walls",
        "objective": "In **Fortnite Solo Zero Build**, find an exposed area between you and your next safe position. **Cross it by moving between natural cover**. Elimination ends the attempt.",
        "gameObjective": "In **Fortnite Solo Zero Build**, find an exposed area between you and your next safe position. **Cross it by moving between natural cover**. Elimination ends the attempt."
      },
      "de": {
        "name": "Deckung ohne Wände",
        "objective": "Such in **Fortnite Solo Zero Build** ein offenes Gebiet zwischen dir und der nächsten sicheren Position. **Überquere es von natürlicher Deckung zu Deckung**. Eine Eliminierung beendet den Versuch.",
        "gameObjective": "Such in **Fortnite Solo Zero Build** ein offenes Gebiet zwischen dir und der nächsten sicheren Position. **Überquere es von natürlicher Deckung zu Deckung**. Eine Eliminierung beendet den Versuch."
      }
    },
    "experience": {
      "family": "cover-movement",
      "cardMetadata": { "genreIds": ["shooter", "survival"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["traversal"],
      "rules": [],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "Solo Zero Build"
        }
      ]
    },
    "gameGenreIds": ["shooter", "survival"]
  },
  {
    "id": "fortnite-reboot-a-mate",
    "moodIds": ["connect"],
    "type": "objective",
    "tags": ["support", "full-match"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "fortnite",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Bring Them Back",
        "objective": "In a **Fortnite Battle Royale squad match**, **collect an available teammate’s reboot card and revive them at a Reboot Van**. Stay with the squad through the match result.",
        "gameObjective": "In a **Fortnite Battle Royale squad match**, **collect an available teammate’s reboot card and revive them at a Reboot Van**. Stay with the squad through the match result."
      },
      "de": {
        "name": "Teammitglied zurückholen",
        "objective": "Sammle in einem **Fortnite-Battle-Royale-Squad-Match** **die verfügbare Neustartkarte eines Teammitglieds und hol es am Neustartbus zurück**. Bleib bis zum Match-Ergebnis beim Squad.",
        "gameObjective": "Sammle in einem **Fortnite-Battle-Royale-Squad-Match** **die verfügbare Neustartkarte eines Teammitglieds und hol es am Neustartbus zurück**. Bleib bis zum Match-Ergebnis beim Squad."
      }
    },
    "experience": {
      "family": "teammate-reboot",
      "cardMetadata": { "genreIds": ["shooter", "survival"], "playStyleIds": ["co-op"] },
      "finish": "attempt",
      "activities": ["support"],
      "rules": ["full-match"],
      "prerequisites": [
        {
          "en": "Squad match; teammate’s reboot card available",
          "de": "Squad-Match; Neustartkarte eines Teammitglieds verfügbar",
          "chips": {"en": ["Reboot card"], "de": ["Neustartkarte"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "others",
          "participation": "co-op",
          "formation": "squad",
          "mode": "Squads"
        }
      ]
    },
    "gameGenreIds": ["shooter", "survival"]
  },
  {
    "id": "fortnite-creative-short-course",
    "moodIds": ["curious"],
    "type": "experiment",
    "tags": [],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "fortnite",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Try a Creator's Rule",
        "objective": "Enter a player-made Creative island with an unusual rule and **finish its first playable objective**.",
        "gameObjective": "Enter a player-made Creative island with an unusual rule and **finish its first playable objective**."
      },
      "de": {
        "name": "Eine fremde Spielregel",
        "objective": "Besuche eine kreative Insel mit ungewöhnlicher Regel und **erledige ihr erstes spielbares Ziel**.",
        "gameObjective": "Besuche eine kreative Insel mit ungewöhnlicher Regel und **erledige ihr erstes spielbares Ziel**."
      }
    },
    "experience": {
      "family": "creative-rules",
      "cardMetadata": { "genreIds": ["shooter", "survival"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "de": "Creative-Insel mit erreichbarem ersten Ziel",
          "en": "Creative island with a reachable first objective",
          "chips": {"en": ["Creative island"], "de": ["Creative-Insel"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "Solo Creative discovery"
        }
      ]
    },
    "gameGenreIds": ["shooter", "survival"]
  },
  {
    "id": "fortnite-chest-only-loadout",
    "moodIds": ["challenge"],
    "type": "challenge",
    "tags": ["loadout", "one-life"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "fortnite",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Only What the Chest Gives",
        "objective": "In one Battle Royale match, **use weapons from chests only and survive to the third safe zone**. One attempt.",
        "gameObjective": "In one Battle Royale match, **use weapons from chests only and survive to the third safe zone**. One attempt."
      },
      "de": {
        "name": "Nur aus Truhen",
        "objective": "Nutze in einem Battle-Royale-Match **nur Waffen aus Truhen und überlebe bis zur dritten sicheren Zone**. Ein Versuch.",
        "gameObjective": "Nutze in einem Battle-Royale-Match **nur Waffen aus Truhen und überlebe bis zur dritten sicheren Zone**. Ein Versuch."
      }
    },
    "experience": {
      "family": "chest-loadout",
      "cardMetadata": { "genreIds": ["shooter", "survival"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["loadout"],
      "rules": ["one-life"],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "online",
          "people": "alone",
          "participation": "solo",
          "formation": "none",
          "mode": "Solo Battle Royale"
        }
      ]
    },
    "gameGenreIds": ["shooter", "survival"]
  },
  {
    "id": "fortnite-ping-the-route",
    "moodIds": ["connect"],
    "type": "objective",
    "tags": ["support", "full-match"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "fortnite",
      "installmentIds": []
    },
    "translations": {
      "en": {
        "name": "Call the Route",
        "objective": "In a squad match, **mark a landing spot and guide your squad toward its next safe rotation**. Stay for the match.",
        "gameObjective": "In a squad match, **mark a landing spot and guide your squad toward its next safe rotation**. Stay for the match."
      },
      "de": {
        "name": "Den Weg ansagen",
        "objective": "**Markiere in einem Squad-Match einen Landeplatz und führe deinen Squad in Richtung der nächsten sicheren Rotation**. Spiel das Match zu Ende.",
        "gameObjective": "**Markiere in einem Squad-Match einen Landeplatz und führe deinen Squad in Richtung der nächsten sicheren Rotation**. Spiel das Match zu Ende."
      }
    },
    "experience": {
      "family": "squad-navigation",
      "cardMetadata": { "genreIds": ["shooter", "survival"], "playStyleIds": ["co-op"] },
      "finish": "attempt",
      "activities": ["support"],
      "rules": ["full-match"],
      "prerequisites": [
        {
          "en": "Human squad match",
          "de": "Squad-Match mit menschlichen Mitspielern",
          "chips": {"en": [], "de": []},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "online",
          "people": "others",
          "participation": "co-op",
          "formation": "squad",
          "mode": "Squads"
        }
      ]
    },
    "gameGenreIds": ["shooter", "survival"]
  }
]);
