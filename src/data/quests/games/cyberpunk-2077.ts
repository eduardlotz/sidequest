import { defineGameQuests } from "../defineGameQuests";

export const cyberpunkQuests = defineGameQuests("cyberpunk-2077", [
  {
    "id": "borrowed-eyes",
    rarity: "special",
    "moods": [
      "challenge",
      "focused"
    ],
    "type": "challenge",
    "tags": [
      "stealth",
      "no-kills"
    ],
    "minutes": 30,
    "minimum": 5,
    "en": {
      "name": "Borrowed Eyes",
      "objective": "With a cyberdeck in **Cyberpunk 2077**, choose an open theft gig with accessible security cameras. Plan your route through their feeds, then **steal the target and leave unseen with every guard untouched**. Use device distractions to open a path."
    },
    "de": {
      "name": "Fremde Augen",
      "objective": "Such dir in **Cyberpunk 2077** mit Cyberdeck einen offenen Diebstahl-Gig mit zugänglichen Kameras. Plane deinen Weg über ihre Bilder und **stiehl den Gegenstand ungesehen, ohne eine Wache anzugreifen**. Lenke Wachen über Geräte ab, um dir einen Weg zu öffnen."
    }
  },
  {
    "id": "metro-postcards",
    "moods": [
      "relax",
      "explore"
    ],
    "type": "objective",
    "tags": [
      "free-roam",
      "photography"
    ],
    "minutes": 20,
    "minimum": 3,
    "en": {
      "name": "Metro Postcards",
      "objective": "After getting your NCART pass in **Cyberpunk 2077**, ride to a station you rarely use. Explore the streets around it and **save one photo of a view you found there**."
    },
    "de": {
      "name": "Postkarte aus der Metro",
      "objective": "Fahr in **Cyberpunk 2077** mit deinem NCART-Pass zu einer Station, an der du selten aussteigst. Erkunde die Straßen ringsum und **mach ein Foto von einer Aussicht, die du dort entdeckst**."
    }
  },
  {
    "id": "night-city-uniform",
    "moods": [
      "create",
      "relax"
    ],
    "type": "creation",
    "tags": [
      "outfit",
      "photography"
    ],
    "minutes": 25,
    "minimum": 5,
    "en": {
      "name": "District Uniform",
      "objective": "In **Cyberpunk 2077**, look at the clothes worn by three NPCs in your district. Borrow one color from them for an outfit made from your wardrobe, then **save the outfit and photograph V wearing it in that district**."
    },
    "de": {
      "name": "Outfit fürs Viertel",
      "objective": "Schau dir in **Cyberpunk 2077** die Kleidung von drei NPCs in einem Viertel an. Übernimm eine ihrer Farben für einen Look aus deinem Kleiderschrank. **Speichere den Look und fotografiere V damit im selben Viertel**."
    }
  },
  {
    "id": "reginas-patient",
    "moods": [
      "progress",
      "focused"
    ],
    "type": "objective",
    "tags": [
      "no-kills",
      "story"
    ],
    "minutes": 30,
    "minimum": 5,
    "en": {
      "name": "Alive for Regina",
      "objective": "Track an unfinished Cyberpsycho Sighting in **Cyberpunk 2077**. Stop attacking as soon as the target falls, read the clues, and **send Regina the closing report with the target alive**."
    },
    "de": {
      "name": "Lebend für Regina",
      "objective": "Verfolge in **Cyberpunk 2077** eine offene Cyberpsycho-Sichtung. Hör auf anzugreifen, sobald das Ziel fällt, lies die Hinweise und **sende Regina den Abschlussbericht, während das Ziel noch lebt**."
    }
  },
  {
    "id": "device-decoy",
    "moods": [
      "curious",
      "focused"
    ],
    "type": "experiment",
    "tags": [
      "stealth",
      "new-approach"
    ],
    "minutes": 10,
    "minimum": 2,
    "en": {
      "name": "Wrong Way",
      "objective": "With a cyberdeck in **Cyberpunk 2077**, find a guard watching a passage beside a hackable device. Trigger a distraction and **use the opening to pass unseen**, without hacking or attacking the guard."
    },
    "de": {
      "name": "Falsche Richtung",
      "objective": "Such in **Cyberpunk 2077** mit Cyberdeck eine Wache neben einem hackbaren Gerät. Lenk sie über das Gerät ab und **schleich vorbei, während sie abgelenkt ist**. Hack die Wache selbst nicht und greif sie nicht an."
    }
  },
  {
    "id": "air-dash-route",
    "moods": [
      "restless",
      "challenge"
    ],
    "type": "challenge",
    "tags": [
      "traversal",
      "three-attempts"
    ],
    "minutes": 10,
    "minimum": 2,
    "en": {
      "name": "One Rooftop Gap",
      "objective": "With Air Dash unlocked in **Cyberpunk 2077**, choose one rooftop gap whose landing side you can see and reach safely. **Air-dash across it and land on the far roof**. Stop after success or three attempts."
    },
    "de": {
      "name": "Eine Dachlücke",
      "objective": "Wähle in **Cyberpunk 2077** mit freigeschaltetem Luftsprint eine Dachlücke, deren sichere Landefläche du sehen und erreichen kannst. **Sprinte darüber und lande auf dem anderen Dach**. Nach Erfolg oder drei Versuchen ist Schluss."
    }
  },
  {
    id: "radioport-walk",
    moods: [
      "relax",
      "low-energy"
    ],
    type: "inspiration",
    tags: [
      "on-foot"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Your Own Soundtrack",
      objective: "With update 2.1 or later in **Cyberpunk 2077**, turn on Radioport and wander the streets around Japantown with a station you rarely hear. Let the music set the route."
    },
    de: {
      name: "Dein Soundtrack",
      objective: "Schalte in **Cyberpunk 2077** ab Update 2.1 das Radioport ein und schlendere mit einem selten gehörten Sender durch Japantown. Lass die Musik deinen Weg bestimmen."
    }
  },
  {
    id: "apartment-hangout",
    moods: [
      "relax",
      "nostalgic"
    ],
    type: "inspiration",
    tags: [
      "dialogue"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Stay In Tonight",
      objective: "After finishing a romance in **Cyberpunk 2077** on update 2.1 or later, invite your partner to an apartment. Spend the evening together away from fixer calls."
    },
    de: {
      name: "Heute zu Hause",
      objective: "Lade in **Cyberpunk 2077** ab Update 2.1 nach einer abgeschlossenen Romanze deinen Partner oder deine Partnerin in eine Wohnung ein. Verbring dort einen Abend abseits der Fixer-Aufträge."
    }
  },
  {
    id: "scenic-binoculars",
    moods: [
      "explore",
      "low-energy"
    ],
    type: "inspiration",
    tags: [
      "exploration"
    ],
    minutes: 10,
    minimum: 2,
    en: {
      name: "City Through Glass",
      objective: "On update 2.1 or later in **Cyberpunk 2077**, seek out sightseeing binoculars at a scenic spot. Look across the skyline and linger over the districts you normally drive past."
    },
    de: {
      name: "Stadt durchs Fernglas",
      objective: "Such in **Cyberpunk 2077** ab Update 2.1 ein Aussichtsfernglas an einem Aussichtspunkt. Schau über die Skyline und lass den Blick über Viertel wandern, durch die du sonst nur fährst."
    }
  },
  {
    id: "wheelie-stretch",
    moods: [
      "restless",
      "challenge"
    ],
    type: "challenge",
    tags: [
      "driving",
      "three-attempts"
    ],
    minutes: 10,
    minimum: 2,
    en: {
      name: "Front Wheel Up",
      objective: "With update 2.1 or later in **Cyberpunk 2077**, take a motorcycle to an empty straight road. **Keep a wheelie going between two nearby lampposts**. Stop after success or three runs."
    },
    de: {
      name: "Vorderrad hoch",
      objective: "Fahr in **Cyberpunk 2077** ab Update 2.1 mit einem Motorrad auf eine leere, gerade Straße. **Fahr auf dem Hinterrad von einer Straßenlaterne zur nächsten**. Hör nach dem Erfolg oder drei Fahrten auf."
    }
  },
  {
    id: "repeat-race-peaceful",
    moods: [
      "focused",
      "challenge"
    ],
    type: "challenge",
    tags: [
      "racing",
      "no-kills"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Race, Don’t Shoot",
      objective: "After The Beast in Me in **Cyberpunk 2077** on update 2.1 or later, enter a repeatable street race. **Finish in the top three without shooting or quickhacking rivals**. Stop after one race."
    },
    de: {
      name: "Fahren statt schießen",
      objective: "Starte in **Cyberpunk 2077** ab Update 2.1 nach The Beast in Me ein wiederholbares Straßenrennen. **Komm unter die ersten drei, ohne auf Rivalen zu schießen oder sie zu hacken**. Ein Rennen."
    }
  },
  {
    id: "twintone-borrowed-colors",
    moods: [
      "create"
    ],
    type: "creation",
    tags: [
      "driving"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Borrowed Paint",
      objective: "With update 2.2 or later in **Cyberpunk 2077**, scan a compatible parked car’s paint using TWINTONE. **Buy that scheme and apply it to a compatible car you own**."
    },
    de: {
      name: "Geliehener Lack",
      objective: "Scanne in **Cyberpunk 2077** ab Update 2.2 mit TWINTONE den Lack eines passenden geparkten Autos. **Kauf das Farbschema und wende es auf ein kompatibles eigenes Auto an**."
    }
  },
  {
    id: "smartframe-home",
    moods: [
      "create",
      "relax"
    ],
    type: "creation",
    tags: [
      "photography",
      "decorating"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "A Wall for V",
      objective: "With update 2.2 or later in **Cyberpunk 2077**, take a photo of V beside a favorite vehicle. **Display the saved shot in a SmartFrame in your apartment**."
    },
    de: {
      name: "Ein Bild für V",
      objective: "Fotografiere V in **Cyberpunk 2077** ab Update 2.2 neben einem Lieblingsfahrzeug. **Zeig das gespeicherte Foto in einem SmartFrame deiner Wohnung**."
    }
  },
  {
    id: "nibbles-portrait",
    moods: [
      "create",
      "relax"
    ],
    type: "creation",
    tags: [
      "photography"
    ],
    minutes: 10,
    minimum: 2,
    en: {
      name: "Nibbles in Frame",
      objective: "Once you have adopted Nibbles in **Cyberpunk 2077**, add the cat to a Photo Mode scene with V. **Save a portrait where both faces are visible**."
    },
    de: {
      name: "Nibbles im Bild",
      objective: "Wenn du Nibbles in **Cyberpunk 2077** aufgenommen hast, füge die Katze im Fotomodus einer Szene mit V hinzu. **Speichere ein Porträt, auf dem beide Gesichter zu sehen sind**."
    }
  },
  {
    id: "pacifica-coaster-repair",
    moods: [
      "curious",
      "explore"
    ],
    type: "objective",
    tags: [
      "traversal"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Power the Coaster",
      objective: "Visit Pacifica’s rollercoaster in **Cyberpunk 2077**. If it still needs power, scan the car and repair its power box, then **ride the coaster to the end**."
    },
    de: {
      name: "Strom für die Achterbahn",
      objective: "Besuche in **Cyberpunk 2077** die Achterbahn in Pacifica. Fehlt noch Strom, scanne den Wagen und repariere den Stromkasten. **Fahr dann eine Runde bis zum Ende mit**."
    }
  },
  {
    id: "roach-race-run",
    moods: [
      "nostalgic",
      "restless"
    ],
    type: "objective",
    tags: [
      "rhythm"
    ],
    minutes: 10,
    minimum: 2,
    en: {
      name: "Roach’s Day Out",
      objective: "Find a playable Roach Race cabinet in **Cyberpunk 2077**. **Play one run until you lose all lives**, collecting apples when they lie on your route."
    },
    de: {
      name: "Roachs Ausflug",
      objective: "Such in **Cyberpunk 2077** einen spielbaren Roach-Race-Automaten. **Spiel einen Lauf, bis alle Leben weg sind**, und sammle die Äpfel auf deinem Weg ein."
    }
  },
  {
    id: "trauma-drama-stage",
    moods: [
      "challenge",
      "focused"
    ],
    type: "challenge",
    tags: [
      "three-attempts"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Arcade Rescue",
      objective: "At a Trauma Drama cabinet in **Cyberpunk 2077** on update 2.0 or later, **clear the first stage without losing a life**. Stop after success or three fresh runs."
    },
    de: {
      name: "Rettung am Automaten",
      objective: "Versuch in **Cyberpunk 2077** ab Update 2.0 an einem Trauma-Drama-Automaten, **die erste Stage ohne verlorenes Leben zu schaffen**. Hör nach dem Erfolg oder drei neuen Läufen auf."
    }
  },
  {
    id: "breach-access-point",
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "puzzles"
    ],
    minutes: 10,
    minimum: 2,
    en: {
      name: "Follow the Buffer",
      objective: "With a cyberdeck and an accessible access point in **Cyberpunk 2077**, plan the sequence before selecting the first code. **Finish one breach and check which rewards uploaded**."
    },
    de: {
      name: "Dem Puffer nach",
      objective: "Plane in **Cyberpunk 2077** mit Cyberdeck an einem zugänglichen Zugangspunkt die Folge, bevor du den ersten Code auswählst. **Beende einen Breach und prüfe, welche Belohnungen übertragen wurden**."
    }
  },
  {
    id: "tech-cover-shot",
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "one-weapon"
    ],
    minutes: 10,
    minimum: 2,
    en: {
      name: "Through Thin Cover",
      objective: "With a charged Tech weapon in **Cyberpunk 2077**, mark a hostile behind thin cover. **Test a charged shot through that cover and compare it with an exposed shot**. Success through every material is not required."
    },
    de: {
      name: "Durch dünne Deckung",
      objective: "Markiere in **Cyberpunk 2077** mit einer aufladbaren Tech-Waffe einen Gegner hinter dünner Deckung. **Teste einen aufgeladenen Schuss durch die Deckung und vergleiche ihn mit einem freien Schuss**. Nicht jedes Material muss durchlässig sein."
    }
  },
  {
    id: "smart-lock-angle",
    moods: [
      "curious"
    ],
    type: "experiment",
    tags: [
      "loadout"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Let the Lock Finish",
      objective: "With a Smart weapon and Smart Link installed in **Cyberpunk 2077**, face a hostile group from cover. **Fire once before full target lock and once after it**, then finish or leave the encounter. Compare the hits."
    },
    de: {
      name: "Erst die Zielerfassung",
      objective: "Stell dich in **Cyberpunk 2077** mit Smart-Waffe und installiertem Smart Link einer Gegnergruppe aus der Deckung. **Schieß einmal vor und einmal nach vollständiger Zielerfassung**. Beende oder verlass den Kampf und vergleiche die Treffer."
    }
  },
  {
    id: "gig-mail-trail",
    moods: [
      "focused",
      "curious"
    ],
    type: "objective",
    tags: [
      "story"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "The Terminal’s Version",
      objective: "Choose an unfinished gig in **Cyberpunk 2077** with a readable computer. Read its messages before taking the target, then **finish the gig with that background in mind**."
    },
    de: {
      name: "Die Sicht des Terminals",
      objective: "Wähle in **Cyberpunk 2077** einen offenen Gig mit lesbarem Computer. Lies vor dem eigentlichen Ziel seine Nachrichten und **beende den Gig mit diesem Hintergrundwissen**."
    }
  },
  {
    id: "iconic-stash-display",
    moods: [
      "create",
      "progress"
    ],
    type: "creation",
    tags: [
      "decorating"
    ],
    minutes: 10,
    minimum: 2,
    en: {
      name: "An Icon’s Place",
      objective: "At V’s apartment in **Cyberpunk 2077**, choose an owned Iconic weapon with a stash-wall display slot. **Put it in the stash and check it on the wall**."
    },
    de: {
      name: "Platz für eine Ikone",
      objective: "Wähle in Vs Wohnung in **Cyberpunk 2077** eine eigene ikonische Waffe mit Platz an der Waffenwand. **Leg sie ins Lager und schau sie dir an der Wand an**."
    }
  },
  {
    id: "pl-delivery-contract",
    moods: [
      "progress",
      "restless"
    ],
    type: "objective",
    tags: [
      "driving"
    ],
    minutes: 25,
    minimum: 5,
    en: {
      name: "Muamar’s Pickup",
      objective: "With Phantom Liberty and vehicle contracts unlocked in **Cyberpunk 2077**, choose a contract car already marked nearby. **Deliver it to Muamar’s handoff point**, accepting the contract’s extra conditions as they appear."
    },
    de: {
      name: "Abholung für Muamar",
      objective: "Wähle in **Cyberpunk 2077** mit Phantom Liberty und freigeschalteten Fahrzeugaufträgen einen bereits markierten Wagen in der Nähe. **Liefere ihn an Muamars Übergabepunkt ab** und beachte die zusätzlichen Bedingungen des Auftrags."
    }
  },
  {
    id: "pl-terminal-beacon",
    moods: [
      "explore",
      "progress"
    ],
    type: "objective",
    tags: [
      "collectibles"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Dogtown’s Signal",
      objective: "With Phantom Liberty in **Cyberpunk 2077** and Dogtown accessible, follow the nearby signal from an unclaimed Militech data terminal. **Reach it and take its Relic point**."
    },
    de: {
      name: "Dogtowns Signal",
      objective: "Folge in **Cyberpunk 2077** mit Phantom Liberty und zugänglichem Dogtown dem Signal eines ungenutzten Militech-Datenterminals in der Nähe. **Erreiche es und hol den Relic-Punkt ab**."
    }
  },
  {
    id: "market-afterlife",
    moods: [
      "explore",
      "relax"
    ],
    type: "inspiration",
    tags: [
      "on-foot"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Under the Stadium",
      objective: "With Phantom Liberty in **Cyberpunk 2077** and Dogtown accessible, wander the stadium market on foot. Look at the stalls and the improvised homes tucked into the old structure."
    },
    de: {
      name: "Unter dem Stadion",
      objective: "Schlendere in **Cyberpunk 2077** mit Phantom Liberty und zugänglichem Dogtown zu Fuß durch den Stadionmarkt. Schau dir die Stände und die Behausungen im alten Bauwerk an."
    }
  },
  {
    id: "bar-seat",
    moods: [
      "relax",
      "overwhelmed"
    ],
    type: "inspiration",
    tags: [
      "dialogue"
    ],
    minutes: 10,
    minimum: 2,
    en: {
      name: "Your Bar Seat",
      objective: "On update 2.1 or later in **Cyberpunk 2077**, step into a bar with an available seat and order from its vendor. Stay for the music and let the gigs wait a little."
    },
    de: {
      name: "Dein Platz am Tresen",
      objective: "Setz dich in **Cyberpunk 2077** ab Update 2.1 in eine Bar mit freiem Sitzplatz und bestell beim Barkeeper. Bleib für die Musik und lass die Gigs noch etwas warten."
    }
  }
]);
