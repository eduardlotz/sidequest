import { defineGameQuests } from "../defineGameQuests";

export const skateQuests = defineGameQuests("skate", [
  {
    "id": "three-street-tricks",
    "moods": [
      "nostalgic",
      "restless"
    ],
    "type": "objective",
    "tags": [
      "skating"
    ],
    "minutes": 15,
    "minimum": 3,
    "en": {
      "name": "One Street Line",
      "objective": "In **Skate 3**, set a session marker by a familiar low ledge. **Land a kickflip, grind the ledge, and land a pop shove-it in one rolling line**. Use your usual difficulty and retry from the marker after a bail."
    },
    "de": {
      "name": "Eine Street-Line",
      "objective": "Setze in **Skate 3** eine Session-Markierung an einer bekannten niedrigen Kante. **Lande einen Kickflip, grinde die Kante und lande einen Pop Shove-it in einer rollenden Line**. Nutze deine übliche Schwierigkeit und beginne nach einem Sturz wieder an der Markierung."
    },
    "installments": [
      "skate-3"
    ]
  },
  {
    "id": "own-the-spot",
    "moods": [
      "challenge",
      "focused"
    ],
    "type": "challenge",
    "tags": [
      "skating",
      "three-attempts"
    ],
    "minutes": 15,
    "minimum": 2,
    "en": {
      "name": "Own the Spot",
      "objective": "In **Skate 3**, replay an unlocked Own the Spot challenge. **Beat its Own It score without repeating a scored trick in the same run**. Finish after success or three attempts."
    },
    "de": {
      "name": "Der Spot gehört dir",
      "objective": "Wiederhole in **Skate 3** eine freigeschaltete Own-the-Spot-Challenge. **Überbiete die Own-It-Punktzahl, ohne einen gewerteten Trick im selben Lauf zu wiederholen**. Nach Erfolg oder drei Versuchen ist Schluss."
    },
    "installments": [
      "skate-3"
    ]
  },
  {
    "id": "quick-drop-link",
    "moods": [
      "create",
      "focused"
    ],
    "type": "creation",
    "tags": [
      "skating",
      "building"
    ],
    "minutes": 20,
    "minimum": 3,
    "en": {
      "name": "One Prop Spot",
      "objective": "With Quick Drop unlocked in **skate. (2025)**, place a grindable prop beside a low ledge without blocking a challenge. **Link a grind on each in one line and roll away**. Remove the prop afterward."
    },
    "de": {
      "name": "Ein Teil, ein Spot",
      "objective": "Platziere in **skate. (2025)** mit freigeschaltetem Quick Drop ein grindbares Objekt neben einer niedrigen Kante, ohne eine Challenge zu blockieren. **Grinde erst an deinem Objekt, dann an der Kante und rolle ohne Sturz weiter**. Entferne das Objekt danach."
    },
    "installments": [
      "skate-2025"
    ]
  },
  {
    "id": "san-van-switch",
    "moods": [
      "curious",
      "explore"
    ],
    "type": "experiment",
    "tags": [
      "skating",
      "new-approach"
    ],
    "minutes": 15,
    "minimum": 3,
    "en": {
      "name": "Same Rail, Switch",
      "objective": "In **skate. (2025)**, set a session marker at an unfamiliar low rail. **Land a 50-50 grind in regular stance, then land it in switch** on the same rail. Roll away after each and compare the approach."
    },
    "de": {
      "name": "Dasselbe Rail, Switch",
      "objective": "Setz in **skate. (2025)** eine Session-Markierung an einer niedrigen Rail, die du noch nicht gefahren bist. **Lande dort einen 50-50-Grind erst normal und dann in Switch**. Rolle beide Male weiter und achte darauf, wie sich die Anfahrt ändert."
    },
    "installments": [
      "skate-2025"
    ]
  },
  {
    id: "s3-pump-the-bowl",
    installments: [
      "skate-3"
    ],
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "skating"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Speed from the Bowl",
      objective: "In a **Skate 3 bowl**, take a lap using pushes, then a lap gaining speed by pumping the transitions. **Try both laps** and compare where your speed comes from."
    },
    de: {
      name: "Tempo aus der Bowl",
      objective: "Fahr in einer **Skate-3-Bowl** eine Runde mit Anschieben und eine Runde mit Pumpen in den Übergängen. **Probier beide Runden** und vergleiche, wo du Tempo gewinnst."
    }
  },
  {
    id: "s3-footplant-return",
    installments: [
      "skate-3"
    ],
    moods: [
      "focused",
      "challenge"
    ],
    type: "challenge",
    tags: [
      "skating",
      "three-attempts"
    ],
    minutes: 15,
    minimum: 2,
    en: {
      name: "Foot on the Wall",
      objective: "At a low wall beside a bank in **Skate 3**, **land a footplant and return to the bank on your board**. Stop after three attempts."
    },
    de: {
      name: "Fuß an die Wand",
      objective: "Such in **Skate 3** eine niedrige Wand neben einer Schräge. **Lande einen Footplant und komm auf dem Brett zurück auf die Schräge**. Nach drei Versuchen ist Schluss."
    }
  },
  {
    id: "s3-hippy-jump",
    installments: [
      "skate-3"
    ],
    moods: [
      "challenge",
      "restless"
    ],
    type: "challenge",
    tags: [
      "skating",
      "three-attempts"
    ],
    minutes: 10,
    minimum: 2,
    en: {
      name: "Board Goes Under",
      objective: "Choose a low rail with space beneath it in **Skate 3**. **Hippy jump over the rail while your board passes underneath and roll away**, or stop after three tries."
    },
    de: {
      name: "Das Brett fährt unten",
      objective: "Such in **Skate 3** ein niedriges Geländer mit Platz darunter. **Spring im Hippy Jump darüber, während das Brett unten durchfährt, und roll weiter**. Nach drei Versuchen ist Schluss."
    }
  },
  {
    id: "s3-coffin-under",
    installments: [
      "skate-3"
    ],
    moods: [
      "curious"
    ],
    type: "experiment",
    tags: [
      "skating"
    ],
    minutes: 10,
    minimum: 2,
    en: {
      name: "Lie Down and Roll",
      objective: "Find a low overhead obstacle in **Skate 3** with a clear approach and exit. **Try rolling underneath in a coffin**, then compare the clearance with your usual crouched ride."
    },
    de: {
      name: "Hinlegen und durch",
      objective: "Such in **Skate 3** ein niedriges Hindernis über dem Weg mit freier Anfahrt und Auslauf. **Probier, im Coffin darunter durchzurollen**, und vergleiche den Platz mit deiner üblichen geduckten Fahrt."
    }
  },
  {
    id: "s3-bowl-transfer",
    installments: [
      "skate-3"
    ],
    moods: [
      "challenge",
      "focused"
    ],
    type: "challenge",
    tags: [
      "skating",
      "three-attempts"
    ],
    minutes: 15,
    minimum: 2,
    en: {
      name: "Between Two Bowls",
      objective: "At connected bowls in **Skate 3**, set a session marker and **land a transfer from one bowl into the other**. Stop after three runs."
    },
    de: {
      name: "Zwischen zwei Bowls",
      objective: "Setz in **Skate 3** bei verbundenen Bowls eine Session-Markierung und **lande einen Transfer von einer Bowl in die andere**. Nach drei Anläufen ist Schluss."
    }
  },
  {
    id: "s3-nollie-stair",
    installments: [
      "skate-3"
    ],
    moods: [
      "curious"
    ],
    type: "experiment",
    tags: [
      "skating"
    ],
    minutes: 10,
    minimum: 2,
    en: {
      name: "Pop from the Nose",
      objective: "At a small stair set in **Skate 3**, try an ollie and then a nollie with the same run-up. **Try both take-offs** and compare when you have to pop."
    },
    de: {
      name: "Absprung über die Nose",
      objective: "Probier in **Skate 3** an einer kleinen Treppe erst einen Ollie und dann einen Nollie mit derselben Anfahrt. **Probier beide Absprünge** und vergleiche den Zeitpunkt fürs Poppen."
    }
  },
  {
    id: "s3-fakie-bank-exit",
    installments: [
      "skate-3"
    ],
    moods: [
      "focused",
      "challenge"
    ],
    type: "challenge",
    tags: [
      "skating",
      "three-attempts"
    ],
    minutes: 10,
    minimum: 2,
    en: {
      name: "Fakie Bank Exit",
      objective: "In **Skate 3**, ride up a low bank and land back on it in fakie without turning around. **Roll down backward without a bail**, or stop after three attempts."
    },
    de: {
      name: "Rückwärts von der Schräge",
      objective: "Fahr in **Skate 3** eine niedrige Schräge hoch und lande ohne Umdrehen in Fakie wieder darauf. **Roll rückwärts ohne Sturz runter** oder hör nach drei Versuchen auf."
    }
  },
  {
    id: "s3-campus-return",
    installments: [
      "skate-3"
    ],
    moods: [
      "nostalgic",
      "relax"
    ],
    type: "inspiration",
    tags: [
      "free-roam"
    ],
    minutes: 15,
    minimum: 2,
    en: {
      name: "Back to Campus",
      objective: "Return to a **Skate 3 University spot you remember**. Follow the paths between the buildings, revisit a ledge you used to skate, and let the old route lead you."
    },
    de: {
      name: "Zurück auf den Campus",
      objective: "Kehre zu einem **University-Spot in Skate 3 zurück, den du noch kennst**. Fahr zwischen den Gebäuden entlang, schau bei einer früheren Lieblingskante vorbei und folge deiner alten Route."
    }
  },
  {
    id: "s3-film-assignment",
    installments: [
      "skate-3"
    ],
    moods: [
      "progress",
      "focused"
    ],
    type: "objective",
    tags: [
      "current-save"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Film for the Team",
      objective: "In your **Skate 3 career**, choose an unlocked film challenge with a short trick list. **Finish that film assignment** using its shown location and requirements."
    },
    de: {
      name: "Ein Film fürs Team",
      objective: "Wähl in deiner **Skate-3-Karriere** eine freigeschaltete Film-Challenge mit kurzer Trickliste. **Schließ den Filmauftrag** am angezeigten Ort mit seinen Bedingungen ab."
    }
  },
  {
    id: "s3-deathrace-line",
    installments: [
      "skate-3"
    ],
    moods: [
      "restless",
      "focused"
    ],
    type: "objective",
    tags: [
      "racing"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Follow the Race Line",
      objective: "Start an **unlocked Skate 3 Deathrace**. Follow its checkpoints and **finish one race**, letting the placing stand."
    },
    de: {
      name: "Der Rennlinie folgen",
      objective: "Starte ein **freigeschaltetes Deathrace in Skate 3**. Fahr durch die Checkpoints und **beende ein Rennen**, ohne für eine bessere Platzierung neu zu starten."
    }
  },
  {
    id: "s3-contest-round",
    installments: [
      "skate-3"
    ],
    moods: [
      "focused",
      "progress"
    ],
    type: "objective",
    tags: [
      "skating"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Inside the Transition",
      objective: "Enter an **unlocked Skate 3 transition contest**. Use the ramps to link airs with grinds and **finish the contest**, keeping your result."
    },
    de: {
      name: "In der Transition",
      objective: "Starte einen **freigeschalteten Transition-Contest in Skate 3**. Verbinde auf den Rampen Airs mit Grinds und **beende den Contest** mit deinem erzielten Ergebnis."
    }
  },
  {
    id: "s3-ai-line-guide",
    installments: [
      "skate-3"
    ],
    moods: [
      "curious",
      "explore"
    ],
    type: "inspiration",
    tags: [
      "free-roam"
    ],
    minutes: 15,
    minimum: 2,
    en: {
      name: "Follow a Pro",
      objective: "Call an **AI skater in Skate 3** at an unlocked plaza. Follow their ride through the area and use the obstacles they approach as starting points for your own skating."
    },
    de: {
      name: "Einem Pro folgen",
      objective: "Ruf an einem freigeschalteten Platz in **Skate 3 einen KI-Skater dazu**. Fahr ihm durch die Gegend hinterher und nutze seine angesteuerten Hindernisse als Ausgangspunkt für deine eigenen Tricks."
    }
  },
  {
    id: "s3-build-bowl-link",
    installments: [
      "skate-3"
    ],
    moods: [
      "create"
    ],
    type: "creation",
    tags: [
      "level-editor"
    ],
    minutes: 30,
    minimum: 5,
    en: {
      name: "A Connected Bowl",
      objective: "In **Skate 3 Skate.Park**, arrange transition pieces into a bowl with an entrance you can skate through. **Save the park and ride from the entrance into the bowl without stepping off**."
    },
    de: {
      name: "Eine verbundene Bowl",
      objective: "Bau in **Skate 3 Skate.Park** aus Transition-Teilen eine Bowl mit fahrbarem Eingang. **Speichere den Park und fahr durch den Eingang in die Bowl, ohne abzusteigen**."
    }
  },
  {
    id: "s3-object-stair-seat",
    installments: [
      "skate-3"
    ],
    moods: [
      "challenge",
      "focused"
    ],
    type: "challenge",
    tags: [
      "building",
      "three-attempts"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "A Street Bench",
      objective: "With **Skate 3 Object Drop**, place a bench at a quiet flat-ground spot. **Land a nose- or tailslide across it and roll away**, or stop after three tries. Remove the bench afterward."
    },
    de: {
      name: "Eine Bank zum Sliden",
      objective: "Stell mit **Skate 3 Object Drop** eine Bank an einen ruhigen ebenen Spot. **Lande einen Nose- oder Tailslide darüber und roll weiter** oder hör nach drei Versuchen auf. Entferne die Bank danach."
    }
  },
  {
    id: "s3-camera-follow-test",
    installments: [
      "skate-3"
    ],
    moods: [
      "curious",
      "create"
    ],
    type: "experiment",
    tags: [
      "photography"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Follow the Landing",
      objective: "In the **Skate 3 replay editor**, take a recording of a landed trick. **Preview it with a moving camera and with a fixed camera**, then compare which view keeps the landing visible."
    },
    de: {
      name: "Die Landung verfolgen",
      objective: "Nimm im **Replay-Editor von Skate 3** die Aufnahme eines gelandeten Tricks. **Sieh sie mit bewegter und mit fester Kamera an** und vergleiche, wo die Landung besser zu sehen ist."
    }
  },
  {
    id: "s3-carve-downhill",
    installments: [
      "skate-3"
    ],
    moods: [
      "relax",
      "restless"
    ],
    type: "inspiration",
    tags: [
      "free-roam"
    ],
    minutes: 15,
    minimum: 2,
    en: {
      name: "Carve the Hill",
      objective: "Start at a **Skate 3 downhill street with a clear run-out**. Carve across the slope and follow the pavement into the next area. Tricks and points can wait."
    },
    de: {
      name: "Den Hang entlang",
      objective: "Starte in **Skate 3 an einer abschüssigen Straße mit freiem Auslauf**. Fahr Kurven über den Hang und folge der Straße in die nächste Gegend. Tricks und Punkte können warten."
    }
  },
  {
    id: "s3-rail-entry-foot",
    installments: [
      "skate-3"
    ],
    moods: [
      "explore",
      "curious"
    ],
    type: "experiment",
    tags: [
      "on-foot",
      "skating"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Walk the Run-Up",
      objective: "Find a **Skate 3 rail whose run-up looks awkward**. Get off the board to inspect the approach, set a marker, and **try a grind from the route you found**."
    },
    de: {
      name: "Die Anfahrt ablaufen",
      objective: "Such in **Skate 3 eine Rail mit kniffliger Anfahrt**. Schau dir den Weg zu Fuß an, setz eine Markierung und **probier einen Grind von deinem gefundenen Startpunkt**."
    }
  },
  {
    id: "s3-hardcore-flat",
    installments: [
      "skate-3"
    ],
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "skating",
      "new-approach"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Feel Hardcore",
      objective: "At a **Skate 3 flat-ground spot**, try a kickflip on your usual difficulty, then on Hardcore. **Try both and compare the landing timing**, then restore your usual setting."
    },
    de: {
      name: "Hardcore spüren",
      objective: "Probier an einem **Flatground-Spot in Skate 3** einen Kickflip auf deiner üblichen Schwierigkeit und dann auf Hardcore. **Probier beide und vergleiche das Timing der Landung**. Stell danach wieder deine gewohnte Schwierigkeit ein."
    }
  },
  {
    id: "s3-skate-school-tip",
    installments: [
      "skate-3"
    ],
    moods: [
      "progress",
      "curious"
    ],
    type: "objective",
    tags: [
      "skating"
    ],
    minutes: 25,
    minimum: 3,
    en: {
      name: "Frank’s Next Tip",
      objective: "Choose an **unlocked Skate 3 Skate.School lesson** for a trick you rarely use. **Finish the lesson, then try its trick at an unlocked street spot**, using the nearby pavement for your run-up."
    },
    de: {
      name: "Franks nächster Tipp",
      objective: "Wähl eine **freigeschaltete Skate.School-Lektion in Skate 3** für einen selten genutzten Trick. **Beende die Lektion und probier ihren Trick an einem freigeschalteten Straßenspot**, mit der nahen Straße als Anfahrt."
    }
  },
  {
    id: "s3-local-skate-turns",
    installments: [
      "skate-3"
    ],
    moods: [
      "connect"
    ],
    type: "objective",
    tags: [
      "local-play",
      "skating"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Your Rail Turn",
      objective: "With another person sharing the controller in **Skate 3 free skate**, choose a low rail together. Take turns inventing a trick for the other to try and **finish after both have tried the other person’s trick**."
    },
    de: {
      name: "Dein Versuch am Geländer",
      objective: "Teilt euch in **Skate 3 im freien Skaten** einen Controller und wählt gemeinsam eine niedrige Rail. Denkt euch abwechselnd einen Trick für die andere Person aus und **hört auf, wenn beide den Trick der anderen ausprobiert haben**."
    }
  },
  {
    id: "s25-side-mission",
    installments: [
      "skate-2025"
    ],
    moods: [
      "progress",
      "focused"
    ],
    type: "objective",
    tags: [
      "story"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Izzy’s Side Route",
      objective: "In **skate. (2025)**, track an available Side Mission from the Hub. Follow its city waypoint and **finish its next displayed objective**."
    },
    de: {
      name: "Izzys Nebenweg",
      objective: "Verfolg in **skate. (2025)** im Hub eine verfügbare Nebenmission. Fahr zum Wegpunkt in der Stadt und **erledige ihr nächstes angezeigtes Ziel**."
    }
  },
  {
    id: "s25-speedline-try",
    installments: [
      "skate-2025"
    ],
    moods: [
      "restless",
      "challenge"
    ],
    type: "challenge",
    tags: [
      "skating",
      "three-attempts"
    ],
    minutes: 15,
    minimum: 2,
    en: {
      name: "Follow the Speedline",
      objective: "Choose an **unlocked Speedline Challenge in skate. (2025)**. **Reach its finish within the challenge’s time**, or stop after three runs."
    },
    de: {
      name: "Der Speedline folgen",
      objective: "Wähl in **skate. (2025) eine freigeschaltete Speedline-Challenge**. **Erreiche das Ziel innerhalb ihrer Zeit** oder hör nach drei Anläufen auf."
    }
  },
  {
    id: "s25-claim-partial",
    installments: [
      "skate-2025"
    ],
    moods: [
      "overwhelmed",
      "progress"
    ],
    type: "objective",
    tags: [
      "skating"
    ],
    minutes: 15,
    minimum: 2,
    en: {
      name: "Take What You Landed",
      objective: "Open a **skate. (2025) Challenge with a claimable completed objective**. Claim that progress without replaying for every bonus, then **try a familiar ollie on the approach to its spot** before free skating onward."
    },
    de: {
      name: "Den Fortschritt mitnehmen",
      objective: "Öffne in **skate. (2025) eine Challenge mit einem bereits erledigten, abholbaren Ziel**. Hol dir den Fortschritt, ohne für alle Extras neu zu starten, und **probier einen vertrauten Ollie auf der Anfahrt zum Spot**, bevor du frei weiterfährst."
    }
  },
  {
    id: "s25-crew-page",
    installments: [
      "skate-2025"
    ],
    moods: [
      "progress"
    ],
    type: "objective",
    tags: [
      "skating"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Ride for Your Crew",
      objective: "In **skate. (2025)**, select an available Crew Bounty that uses tricks you already know. **Complete its shown requirement and claim the reward** for that crew."
    },
    de: {
      name: "Für deine Crew fahren",
      objective: "Wähl in **skate. (2025)** eine verfügbare Crew-Bounty mit Tricks, die du schon kannst. **Erledige die angezeigte Bedingung und hol die Belohnung** für die Crew ab."
    }
  },
  {
    id: "s25-neighborhood-rep",
    installments: [
      "skate-2025"
    ],
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "skating"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Rep Another Neighborhood",
      objective: "In **skate. (2025)**, switch the neighborhood you represent to another unlocked one. **Complete a short available non-Crew Bounty** and see where its neighborhood progress goes."
    },
    de: {
      name: "Ein anderes Viertel vertreten",
      objective: "Wechsle in **skate. (2025)** zu einem anderen freigeschalteten Viertel, das du vertreten kannst. **Erledige eine kurze verfügbare Bounty außerhalb der Crew-Bounties** und schau, wo ihr Viertelfortschritt landet."
    }
  },
  {
    id: "s25-transit-discovery",
    installments: [
      "skate-2025"
    ],
    moods: [
      "explore"
    ],
    type: "objective",
    tags: [
      "exploration"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "A New Bus Stop",
      objective: "In **skate. (2025)**, take the San Van bus to an unlocked stop you have not skated around. **Land one trick on a nearby obstacle you find there**."
    },
    de: {
      name: "Eine neue Bushaltestelle",
      objective: "Fahr in **skate. (2025)** mit dem San-Van-Bus zu einer freigeschalteten Haltestelle, deren Gegend du noch nicht gefahren bist. **Lande dort einen Trick an einem neu gefundenen Hindernis**."
    }
  },
  {
    id: "s25-one-plaza-session",
    installments: [
      "skate-2025"
    ],
    moods: [
      "relax"
    ],
    type: "inspiration",
    tags: [
      "free-roam"
    ],
    minutes: 20,
    minimum: 2,
    en: {
      name: "Stay at This Plaza",
      objective: "Find a **skate. (2025) plaza with low ledges and room to roll**. Stay with that small area, try the approaches that catch your eye, and leave the next waypoint for another session."
    },
    de: {
      name: "Auf diesem Platz bleiben",
      objective: "Such in **skate. (2025)** einen Platz mit niedrigen Kanten und genug Raum zum Rollen. Bleib in dieser kleinen Gegend und probier Anfahrten aus, die dir auffallen. Der nächste Wegpunkt kann warten."
    }
  },
  {
    id: "s25-soft-favorite",
    installments: [
      "skate-2025"
    ],
    moods: [
      "low-energy",
      "overwhelmed"
    ],
    type: "inspiration",
    tags: [
      "free-roam"
    ],
    minutes: 10,
    minimum: 2,
    en: {
      name: "Your Usual Spot",
      objective: "In **skate. (2025)**, return to a familiar low ledge in San Van and use a session marker to stay with its easy approach. Roll with your usual setup and take whatever line comes easily."
    },
    de: {
      name: "Dein gewohnter Spot",
      objective: "Kehr in **skate. (2025)** zu einer vertrauten niedrigen Ledge in San Van zurück und bleib mit einem Session-Marker bei ihrer einfachen Anfahrt. Roll mit deinem gewohnten Setup und nimm die Line, die sich gerade leicht anfühlt."
    }
  },
  {
    id: "s25-session-checklist",
    installments: [
      "skate-2025"
    ],
    moods: [
      "focused",
      "progress"
    ],
    type: "objective",
    tags: [
      "skating"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "A Session to Finish",
      objective: "Pick a **skate. (2025) Session Challenge** with reachable requirements. **Complete its base objectives and claim the result**, without requiring Shut It Down."
    },
    de: {
      name: "Eine Session abschließen",
      objective: "Such in **skate. (2025)** eine Session-Challenge mit erreichbaren Bedingungen aus. **Erledige ihre Grundziele und hol das Ergebnis ab**. Shut It Down ist kein Muss."
    }
  },
  {
    id: "s25-stunt-one-try",
    installments: [
      "skate-2025"
    ],
    moods: [
      "curious"
    ],
    type: "experiment",
    tags: [
      "skating"
    ],
    minutes: 15,
    minimum: 2,
    en: {
      name: "See the Stunt",
      objective: "Select an **unlocked Stunt Challenge in skate. (2025)**. Read its requirement, **try the stunt once**, and notice which part of the approach launches you."
    },
    de: {
      name: "Den Stunt ausprobieren",
      objective: "Wähl in **skate. (2025) eine freigeschaltete Stunt-Challenge**. Lies ihre Bedingung, **probier den Stunt einmal** und achte darauf, welcher Teil der Anfahrt dich hochschickt."
    }
  },
  {
    id: "s25-coop-challenge",
    installments: [
      "skate-2025"
    ],
    moods: [
      "connect"
    ],
    type: "objective",
    tags: [
      "co-op"
    ],
    minutes: 25,
    minimum: 3,
    en: {
      name: "Share the Checklist",
      objective: "With a friend in **skate. (2025)**, enter a Challenge marked for co-op. Agree who will try which objective and **play until the base result can be claimed or you have each made three runs**."
    },
    de: {
      name: "Die Ziele aufteilen",
      objective: "Starte mit einem Freund in **skate. (2025)** eine als Koop markierte Challenge. Teilt die Ziele unter euch auf und **spielt bis zum abholbaren Grundergebnis oder bis beide drei Anläufe gemacht haben**."
    }
  },
  {
    id: "s25-ground-line-replay",
    installments: [
      "skate-2025"
    ],
    moods: [
      "create"
    ],
    type: "creation",
    tags: [
      "photography"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Keep the Whole Line",
      objective: "In **skate. (2025)**, record a line through one street spot. In the Replay Editor, **save a clip with the approach, every trick, and the roll-away in one uncut take**."
    },
    de: {
      name: "Die ganze Line behalten",
      objective: "Nimm in **skate. (2025)** eine Line an einem Street-Spot auf. **Speichere im Replay-Editor einen ungeschnittenen Clip mit Anfahrt, allen Tricks und Ausrollen**."
    }
  },
  {
    id: "s25-quickdrop-bank-in",
    installments: [
      "skate-2025"
    ],
    moods: [
      "create",
      "focused"
    ],
    type: "creation",
    tags: [
      "building"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "A Bank Approach",
      objective: "With **Quick Drop unlocked in skate. (2025)**, place a bank to turn a quiet flat approach into a ride up a nearby ledge. **Ride your built approach onto the ledge**, then remove the prop."
    },
    de: {
      name: "Eine Schräge zum Spot",
      objective: "Setz in **skate. (2025) mit freigeschaltetem Quick Drop** an einer ruhigen flachen Anfahrt eine Schräge zu einer nahen Kante. **Fahr über deine gebaute Anfahrt auf die Kante** und entferne das Objekt danach."
    }
  },
  {
    id: "s25-quickdrop-wall-ride",
    installments: [
      "skate-2025"
    ],
    moods: [
      "curious",
      "create"
    ],
    type: "experiment",
    tags: [
      "building",
      "skating"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Move the Take-Off",
      objective: "With **Quick Drop unlocked in skate. (2025)**, place a kicker near a quiet wall. **Try a wallride with the kicker close to the wall and again farther away**, then remove it."
    },
    de: {
      name: "Den Absprung versetzen",
      objective: "Stell in **skate. (2025) mit freigeschaltetem Quick Drop** einen Kicker an eine ruhige Wand. **Probier einen Wallride mit nah und weiter entfernt stehendem Kicker** und entferne ihn danach."
    }
  },
  {
    id: "s25-marker-two-approaches",
    installments: [
      "skate-2025"
    ],
    moods: [
      "focused",
      "curious"
    ],
    type: "experiment",
    tags: [
      "skating"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Two Ways In",
      objective: "At an **unfamiliar skate. (2025) stair set**, move your session marker from a straight run-up to a diagonal one. **Try the same ollie from both starts** and compare the space for landing."
    },
    de: {
      name: "Zwei Anfahrten",
      objective: "Versetz an einer **unbekannten Treppe in skate. (2025)** deine Session-Markierung von gerader zu schräger Anfahrt. **Probier denselben Ollie von beiden Starts** und vergleiche den Platz zum Landen."
    }
  },
  {
    id: "s25-water-feature",
    installments: [
      "skate-2025"
    ],
    moods: [
      "explore",
      "restless"
    ],
    type: "inspiration",
    tags: [
      "free-roam"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Around the Water",
      objective: "In **skate. (2025)**, head for an unlocked plaza with a water feature. Follow its edges on the board and look for ways its curves connect the surrounding ledges."
    },
    de: {
      name: "Rund ums Wasser",
      objective: "Fahr in **skate. (2025)** zu einem freigeschalteten Platz mit Wasserbecken. Folge seinen Rändern auf dem Brett und schau, wie die Kurven zu den Kanten rundherum führen."
    }
  },
  {
    id: "s25-spotlight-return",
    installments: [
      "skate-2025"
    ],
    moods: [
      "progress",
      "focused"
    ],
    type: "objective",
    tags: [
      "skating"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "A Spotlight Bonus",
      objective: "Choose a **skate. (2025) Spotlight Challenge you have already completed** with an available bonus objective. **Finish that bonus and claim its reward**."
    },
    de: {
      name: "Ein Spotlight-Extra",
      objective: "Wähl in **skate. (2025)** eine schon abgeschlossene Spotlight-Challenge mit verfügbarem Bonusziel. **Erledige den Bonus und hol die Belohnung ab**."
    }
  },
  {
    id: "s25-grab-spin-line",
    installments: [
      "skate-2025"
    ],
    moods: [
      "challenge",
      "focused"
    ],
    type: "challenge",
    tags: [
      "skating",
      "three-attempts"
    ],
    minutes: 15,
    minimum: 2,
    en: {
      name: "Turn with the Grab",
      objective: "At a **skate. (2025) ramp with a clear landing**, **land a 180 while holding a grab and roll away**. Stop after three runs."
    },
    de: {
      name: "Mit dem Grab drehen",
      objective: "Such in **skate. (2025)** eine Rampe mit freier Landung. **Lande eine 180 mit gehaltenem Grab und roll weiter**. Nach drei Anläufen ist Schluss."
    }
  },
  {
    id: "s25-watch-and-return",
    installments: [
      "skate-2025"
    ],
    moods: [
      "connect"
    ],
    type: "objective",
    tags: [
      "skating"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Trade a Line",
      objective: "Meet a friend at the same **skate. (2025) street spot**. Watch each other’s lines, then **each try one obstacle from the other person’s route**."
    },
    de: {
      name: "Eine Line tauschen",
      objective: "Trefft euch an einem **Street-Spot in skate. (2025)**. Schaut euch eure Lines an und **probiert beide ein Hindernis aus der Route der anderen Person**."
    }
  },
  {
    id: "s25-soundtrack-return",
    installments: [
      "skate-2025"
    ],
    moods: [
      "nostalgic"
    ],
    type: "inspiration",
    tags: [
      "free-roam"
    ],
    minutes: 15,
    minimum: 2,
    en: {
      name: "The Old Skate Habit",
      objective: "In **skate. (2025)**, pick a San Van spot that reminds you of somewhere you skated in an earlier Skate game. Let the shape of its rails and banks guide a session like the ones you remember."
    },
    de: {
      name: "Die alte Skate-Gewohnheit",
      objective: "Such in **skate. (2025)** einen San-Van-Spot, der dich an einen Ort aus einem früheren Skate-Spiel erinnert. Lass dich von seinen Rails und Schrägen zu einer Session wie damals führen."
    }
  }
]);
