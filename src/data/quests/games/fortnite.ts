import { defineGameQuests } from "../defineGameQuests";

export const fortniteQuests = defineGameQuests("fortnite", [
  {
    "id": "first-gun-stays",
    "moods": [
      "challenge",
      "focused"
    ],
    "type": "challenge",
    "tags": [
      "one-weapon",
      "full-match"
    ],
    "minutes": 30,
    "minimum": 2,
    "en": {
      "name": "First Gun Stays",
      "objective": "In **Fortnite Solo Zero Build**, keep your first firearm as your only damage-dealing item. **Play through the match result without replacing it**, even with a better version. Healing, shields, and mobility are allowed. Use the pickaxe only for harvesting."
    },
    "de": {
      "name": "Die erste bleibt",
      "objective": "Behalte in **Fortnite Solo Zero Build** deine erste Schusswaffe als einzige Waffe, mit der du Schaden machst. **Spiel das Match zu Ende, ohne sie auszutauschen**, auch nicht gegen eine bessere Version. Heilung, Schilde und Fortbewegung sind erlaubt; die Spitzhacke nutzt du nur zum Abbauen."
    }
  },
  {
    "id": "overshield-reset",
    "moods": [
      "curious",
      "focused"
    ],
    "type": "experiment",
    "tags": [
      "new-approach"
    ],
    "minutes": 30,
    "minimum": 2,
    "en": {
      "name": "Let It Recharge",
      "objective": "In **Fortnite Solo Zero Build**, after an opponent damages your Overshield, break line of sight. **Let it recharge fully before firing again, then finish the match**. Notice whether waiting changed your next fight. Elimination ends the attempt."
    },
    "de": {
      "name": "Erst wieder aufladen",
      "objective": "Brich in **Fortnite Solo Zero Build** den Sichtkontakt ab, nachdem ein Gegner deinen Extraschild beschädigt hat. **Lass ihn vollständig aufladen, bevor du wieder schießt, und beende das Match**. Achte darauf, ob das Warten den nächsten Kampf verändert hat. Wirst du eliminiert, endet der Versuch."
    }
  },
  {
    "id": "timber-cover",
    "moods": [
      "focused",
      "restless"
    ],
    "type": "challenge",
    "tags": [
      "building",
      "full-match"
    ],
    "minutes": 30,
    "minimum": 2,
    "en": {
      "name": "Timber Cover",
      "objective": "In **Fortnite Solo Battle Royale with building enabled**, gather wood before fighting. After taking fire, **build a wall and ramp, land a shot from that cover, and finish the match**. Build only with wood during this attempt."
    },
    "de": {
      "name": "Deckung aus Holz",
      "objective": "Sammle in **Fortnite Solo Battle Royale mit Bauen** vor dem Kampf Holz. **Bau nach dem ersten Beschuss eine Wand und eine Rampe, treff aus dieser Deckung einen Gegner und spiel das Match zu Ende**. Für diesen Versuch baust du nur mit Holz."
    }
  },
  {
    id: "fish-before-rotation",
    moods: [
      "curious",
      "explore"
    ],
    type: "inspiration",
    tags: [
      "fishing"
    ],
    minutes: 20,
    minimum: 2,
    en: {
      name: "Fish by the Shore",
      objective: "In **Fortnite Solo Zero Build with fishing rods in the current loot pool**, land near water and try the nearby fishing spots. Keep the storm in view and make fishing your starting direction rather than chasing a win."
    },
    de: {
      name: "Am Ufer angeln",
      objective: "Lande in **Fortnite Solo Null Bauen, wenn Angelruten im aktuellen Loot-Pool liegen**, am Wasser und probier die nahen Angelstellen aus. Behalt den Sturm im Blick und lass das Angeln deine Session starten, statt einem Sieg hinterherzujagen."
    }
  },
  {
    id: "mantle-supply-route",
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "traversal",
      "full-match"
    ],
    minutes: 25,
    minimum: 2,
    en: {
      name: "Loot from Above",
      objective: "In **Fortnite Solo Zero Build**, approach a building by mantling onto a low roof instead of entering at ground level. **Search the route for loot and play through the match result**. Elimination ends the attempt."
    },
    de: {
      name: "Loot von oben",
      objective: "Nähere dich in **Fortnite Solo Null Bauen** einem Gebäude über ein niedriges Dach, auf das du kletterst, statt unten hineinzugehen. **Such auf dem Weg nach Loot und spiel bis zum Match-Ergebnis**. Eine Eliminierung beendet den Versuch."
    }
  },
  {
    id: "slide-reposition",
    moods: [
      "focused",
      "curious"
    ],
    type: "experiment",
    tags: [
      "traversal",
      "full-match"
    ],
    minutes: 25,
    minimum: 2,
    en: {
      name: "Slide to Another Angle",
      objective: "In **Fortnite Solo Zero Build**, use a downhill slide to change your shooting angle during an encounter. **Try the reposition and play through the match result**, even if you are eliminated before firing again."
    },
    de: {
      name: "Rutsch zum neuen Winkel",
      objective: "Nutze in **Fortnite Solo Null Bauen** während einer Begegnung einen Hang zum Rutschen und ändere damit deinen Schusswinkel. **Probier den Positionswechsel und spiel bis zum Match-Ergebnis**, auch wenn du vorher eliminiert wirst."
    }
  },
  {
    id: "late-bus-map",
    moods: [
      "explore"
    ],
    type: "inspiration",
    tags: [
      "exploration"
    ],
    minutes: 25,
    minimum: 2,
    en: {
      name: "The Far End",
      objective: "In **Fortnite Solo Battle Royale**, stay on the bus until the far end of its route. Drop toward a place you rarely visit and let the first safe zone guide your way across that side of the island."
    },
    de: {
      name: "Am anderen Ende",
      objective: "Bleib in **Fortnite Solo Battle Royale** bis zum hinteren Ende der Busroute sitzen. Lande an einem Ort, den du selten besuchst, und lass die erste sichere Zone deinen Weg über diese Inselseite bestimmen."
    }
  },
  {
    id: "private-shockwave-angle",
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "gadgets",
      "traversal"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Aim Your Own Launch",
      objective: "On your **own private Fortnite Creative island with Shockwave Grenades available**, start on a flat patch with room to land. **Throw one beside you and another behind you, then compare your landing points**. Reset to the same starting spot for each throw."
    },
    de: {
      name: "Deinen Absprung steuern",
      objective: "Starte auf deiner **eigenen privaten Fortnite-Creative-Insel mit verfügbaren Schockwellengranaten** auf einer ebenen Fläche mit Platz zum Landen. **Wirf eine neben dich und eine hinter dich und vergleiche deine Landepunkte**. Starte für beide Würfe an derselben Stelle."
    }
  },
  {
    id: "share-found-shields",
    moods: [
      "connect"
    ],
    type: "objective",
    tags: [
      "support",
      "full-match"
    ],
    minutes: 25,
    minimum: 2,
    en: {
      name: "Shield for Your Duo",
      objective: "Queue **Fortnite Battle Royale Duos with a friend**. Share spare shields when either of you finds them and **play through the match result together**, even if neither finds spare shields."
    },
    de: {
      name: "Schild fürs Duo",
      objective: "Starte **Fortnite Battle Royale Duos mit einem Freund**. Teilt überschüssige Schilditems, sobald jemand welche findet, und **spielt zusammen bis zum Match-Ergebnis**, auch wenn keine übrig bleiben."
    }
  },
  {
    id: "reload-second-route",
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "new-approach",
      "full-match"
    ],
    minutes: 25,
    minimum: 2,
    en: {
      name: "Another Reboot Route",
      objective: "In **Fortnite Solo Reload**, if you reboot, land away from the place you were eliminated and take a new route for supplies. **Play through the match result** and compare the second start. A match without a reboot counts too."
    },
    de: {
      name: "Nach dem Neustart anders",
      objective: "Lande in **Fortnite Solo Reload** nach einem Neustart abseits deines Eliminierungsorts und nimm einen neuen Weg zur Ausrüstung. **Spiel bis zum Match-Ergebnis** und vergleiche den zweiten Start. Ein Match ohne Neustart zählt ebenfalls."
    }
  },
  {
    id: "build-edit-door",
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "building"
    ],
    minutes: 15,
    minimum: 2,
    en: {
      name: "A Wall Becomes Door",
      objective: "On your **own private Fortnite Creative island**, build a wall and edit a door into it. Fire through the opening, reset the wall, and **try shooting through a window edit instead**, comparing the angles from the same position."
    },
    de: {
      name: "Die Wand bekommt Türen",
      objective: "Bau auf **deiner privaten Fortnite-Creative-Insel** eine Wand und bearbeite sie zu einer Tür. Schieß durch die Öffnung, setz die Wand zurück und **probier stattdessen einen Schuss durch einen Fenster-Edit**. Vergleiche die Winkel von derselben Position."
    }
  },
  {
    id: "creative-roof-course",
    moods: [
      "create"
    ],
    type: "creation",
    tags: [
      "building",
      "level-editor"
    ],
    minutes: 25,
    minimum: 3,
    en: {
      name: "A Rooftop Route",
      objective: "On your **own private Fortnite Creative island**, arrange three low building roofs with gaps you can cross by jumping or mantling. **Save the island and cross the route from first roof to last**."
    },
    de: {
      name: "Ein Weg über Dächer",
      objective: "Stell auf **deiner privaten Fortnite-Creative-Insel** drei niedrige Gebäudedächer mit spring- oder kletterbaren Lücken auf. **Speichere die Insel und komm vom ersten bis zum letzten Dach**."
    }
  },
  {
    id: "creative-air-vent-loop",
    moods: [
      "create",
      "focused"
    ],
    type: "creation",
    tags: [
      "level-editor"
    ],
    minutes: 25,
    minimum: 3,
    en: {
      name: "A Vent Back Up",
      objective: "In your **own private Fortnite Creative island**, place an Air Vent below a platform you can land on. **Save and test a loop from the platform down to the vent and back up**."
    },
    de: {
      name: "Vom Vent wieder hoch",
      objective: "Platziere auf **deiner privaten Fortnite-Creative-Insel** einen Air Vent unter einer Plattform mit Platz zum Landen. **Speichere und teste eine Runde von der Plattform zum Vent und wieder hinauf**."
    }
  },
  {
    id: "private-edit-duel",
    moods: [
      "connect"
    ],
    type: "objective",
    tags: [
      "co-op",
      "building"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Learn Their Edit",
      objective: "On a **private Fortnite Creative island with a friend**, each build and demonstrate a wall edit that creates a firing angle. **Swap places and try each other’s edit**, with no score target."
    },
    de: {
      name: "Ein Edit voneinander",
      objective: "Baut und zeigt euch auf einer **privaten Fortnite-Creative-Insel mit einem Freund** je ein Wand-Edit für einen Schusswinkel. **Tauscht die Plätze und probiert das Edit der anderen Person**, ohne Punkteziel."
    }
  },
  {
    id: "old-poi-creative",
    moods: [
      "nostalgic"
    ],
    type: "inspiration",
    tags: [
      "exploration"
    ],
    minutes: 20,
    minimum: 2,
    en: {
      name: "An Old Landing Spot",
      objective: "Find a **Fortnite Creative island recreating a landing spot you remember from an earlier season**. Walk its old loot route and explore the details you still recognise."
    },
    de: {
      name: "Dein alter Landeort",
      objective: "Such eine **Fortnite-Creative-Insel mit einem Landeort, den du aus einer früheren Saison kennst**. Lauf die alte Loot-Route ab und erkunde die Ecken, die du noch wiedererkennst."
    }
  },
  {
    id: "festival-bass-switch",
    moods: [
      "curious"
    ],
    type: "experiment",
    tags: [
      "rhythm"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Hear the Bass",
      objective: "In **Fortnite Festival Main Stage**, choose an available song and play it on vocals, then bass, at your usual difficulty. **Finish both performances** and compare the rhythm each part follows."
    },
    de: {
      name: "Den Bass hören",
      objective: "Wähl in **Fortnite Festival Main Stage** einen verfügbaren Song und spiel ihn erst auf Gesang, dann auf Bass in deiner üblichen Schwierigkeit. **Beende beide Durchgänge** und vergleiche den Rhythmus der Stimmen."
    }
  },
  {
    id: "festival-familiar-song",
    moods: [
      "relax",
      "low-energy"
    ],
    type: "inspiration",
    tags: [
      "rhythm"
    ],
    minutes: 15,
    minimum: 2,
    en: {
      name: "A Song You Know",
      objective: "Open **Fortnite Festival Main Stage** and choose an available song you already know on an easy difficulty. Follow the part you enjoy hearing and let the music carry the session."
    },
    de: {
      name: "Dein vertrauter Song",
      objective: "Starte **Fortnite Festival Main Stage** und wähl auf leichter Schwierigkeit einen verfügbaren Song, den du schon kennst. Spiel die Stimme, die du gern hörst, und lass die Musik die Session tragen."
    }
  },
  {
    id: "locker-season-memory",
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
      name: "Dress for That Season",
      objective: "In your **Fortnite Locker**, use owned cosmetics to make a preset around a season you remember. **Save it and load into your own Creative island with it equipped**."
    },
    de: {
      name: "Outfit für die Saison",
      objective: "Bau in deinem **Fortnite-Spind** mit vorhandenen Cosmetics ein Preset zu einer Saison, an die du dich erinnerst. **Speichere es und betritt damit deine eigene Creative-Insel**."
    }
  },
  {
    id: "one-quest-landmark",
    moods: [
      "progress",
      "focused"
    ],
    type: "objective",
    tags: [
      "exploration",
      "full-match"
    ],
    minutes: 25,
    minimum: 2,
    en: {
      name: "Follow the Quest Marker",
      objective: "Choose an **available Fortnite Battle Royale quest that asks you to visit a marked location**. Land toward that marker and **visit it before playing through the match result**. Elimination ends the attempt."
    },
    de: {
      name: "Dem Questmarker folgen",
      objective: "Wähl eine **verfügbare Fortnite-Battle-Royale-Quest für einen markierten Ort**. Lande in Richtung des Markers und **besuch ihn, bevor du bis zum Match-Ergebnis weiterspielst**. Eine Eliminierung beendet den Versuch."
    }
  },
  {
    id: "private-three-materials",
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "building"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Feel the Three Materials",
      objective: "On your **own private Fortnite Creative island**, build the same small box from wood, brick, and metal. **Break one wall from each with the same weapon** and compare how they hold up."
    },
    de: {
      name: "Drei Baumaterialien",
      objective: "Bau auf **deiner privaten Fortnite-Creative-Insel** dieselbe kleine Box aus Holz, Stein und Metall. **Zerstör von jeder eine Wand mit derselben Waffe** und vergleiche, was sie aushalten."
    }
  },
  {
    id: "storm-map-plan",
    moods: [
      "focused",
      "curious"
    ],
    type: "experiment",
    tags: [
      "scouting",
      "full-match"
    ],
    minutes: 25,
    minimum: 2,
    en: {
      name: "Pick the Crossing",
      objective: "In **Fortnite Solo Zero Build**, when the first circle appears, choose a route that crosses a bridge or another visible crossing into it. **Try that route and play through the match result**, even if eliminated on the way."
    },
    de: {
      name: "Den Übergang wählen",
      objective: "Wähl in **Fortnite Solo Null Bauen** beim ersten Kreis einen Weg über eine Brücke oder einen anderen sichtbaren Übergang hinein. **Probier den Weg und spiel bis zum Match-Ergebnis**, auch wenn du unterwegs eliminiert wirst."
    }
  },
  {
    id: "private-headshot-range",
    moods: [
      "create",
      "focused"
    ],
    type: "creation",
    tags: [
      "level-editor"
    ],
    minutes: 25,
    minimum: 3,
    en: {
      name: "A Shooting Lane",
      objective: "In your **own private Fortnite Creative island**, set up target devices at three distances and a weapon pickup at the start. **Save the island and test that all targets can be hit from the pickup spot**."
    },
    de: {
      name: "Eine Schussbahn",
      objective: "Stell auf **deiner privaten Fortnite-Creative-Insel** Zielgeräte in drei Entfernungen und eine Waffenaufnahme am Start auf. **Speichere die Insel und teste, ob alle Ziele vom Startpunkt getroffen werden können**."
    }
  },
  {
    id: "duo-rescue-revive",
    moods: [
      "connect"
    ],
    type: "objective",
    tags: [
      "support",
      "full-match"
    ],
    minutes: 25,
    minimum: 2,
    en: {
      name: "Cover the Recovery",
      objective: "Play **Fortnite Zero Build Duos with a friend**. If they are knocked, try using nearby cover to revive them. Otherwise keep supplies ready to share. **Play through the match result together**, whether a revive was needed or not."
    },
    de: {
      name: "Die Erholung decken",
      objective: "Spiel **Fortnite Null Bauen Duos mit einem Freund**. Wird er niedergeschlagen, versuch ihn in naher Deckung wiederzubeleben. Halte sonst Vorräte zum Teilen bereit. **Spielt zusammen bis zum Match-Ergebnis**, auch wenn keine Wiederbelebung nötig war."
    }
  }
]);
