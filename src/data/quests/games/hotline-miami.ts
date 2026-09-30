import { defineGameQuests } from "../defineGameQuests";

export const hotlineMiamiQuests = defineGameQuests("hotline-miami", [
  { id: "hm1-mask-run", installments: ["hotline-miami-1"], moods: ["focused"], type: "experiment", tags: ["loadout", "replay"], minutes: 15, minimum: 3,
    en: { name: "Mask for the Run", objective: "Choose an **unlocked mask** before an unlocked **Hotline Miami** chapter. Play the whole chapter with that mask and **reach its score screen**." },
    de: { name: "Maske für den Lauf", objective: "Wähl vor einem freigeschalteten **Hotline-Miami**-Kapitel eine **freigeschaltete Maske**. Spiel das Kapitel mit dieser Maske und **erreiche die Punkteübersicht**." } },
  { id: "hm1-melee-first", installments: ["hotline-miami-1"], moods: ["challenge", "focused"], type: "challenge", tags: ["one-weapon", "three-attempts"], minutes: 15, minimum: 3,
    en: { name: "Melee First", objective: "Start an unlocked **Hotline Miami** chapter with a melee weapon available. **Clear the chapter using no firearm**, or stop after three attempts." },
    de: { name: "Erst im Nahkampf", objective: "Starte in **Hotline Miami** ein freigeschaltetes Kapitel, in dem eine Nahkampfwaffe verfügbar ist. **Schaff das Kapitel ohne Schusswaffe** oder hör nach drei Versuchen auf." } },
  { id: "hm1-room-combo", installments: ["hotline-miami-1"], moods: ["challenge", "restless"], type: "challenge", tags: ["three-attempts"], minutes: 15, minimum: 3,
    en: { name: "Keep the Combo", objective: "In an unlocked **Hotline Miami** chapter, try to defeat three enemies in one combo. **Reach the score screen after a three-enemy combo**, or finish your third attempt." },
    de: { name: "Die Combo halten", objective: "Versuch in einem freigeschalteten **Hotline-Miami**-Kapitel, drei Gegner in einer Combo auszuschalten. **Erreiche nach einer Drei-Gegner-Combo die Punkteübersicht** oder beende deinen dritten Versuch." } },
  { id: "hm1-new-route", installments: ["hotline-miami-1"], moods: ["curious", "explore"], type: "experiment", tags: ["new-approach"], minutes: 15, minimum: 3,
    en: { name: "Change the Route", objective: "Replay a **Hotline Miami** chapter you have cleared before. Enter one room from a different doorway than last time and **finish the chapter**." },
    de: { name: "Anderer Weg durchs Haus", objective: "Spiel ein **Hotline-Miami**-Kapitel erneut, das du schon geschafft hast. Betritt einen Raum durch einen anderen Eingang als beim letzten Mal und **beende das Kapitel**." } },
  { id: "hm1-piece-hunt", installments: ["hotline-miami-1"], moods: ["explore"], type: "objective", tags: ["collectibles"], minutes: 15, minimum: 3,
    en: { name: "Find a Puzzle Piece", objective: "Choose an unlocked **Hotline Miami** chapter that still has a puzzle piece to find. Search the rooms and **collect one piece**, then reach the score screen." },
    de: { name: "Ein Puzzleteil finden", objective: "Wähl in **Hotline Miami** ein freigeschaltetes Kapitel, in dem noch ein Puzzleteil fehlt. Durchsuch die Räume, **sammle ein Teil ein** und geh danach zur Punkteübersicht." } },
  { id: "hm2-character-level", installments: ["hotline-miami-2"], moods: ["focused"], type: "objective", tags: ["story"], minutes: 20, minimum: 3,
    en: { name: "Their Chapter", objective: "Continue **Hotline Miami 2: Wrong Number** from an unlocked campaign chapter. **Finish the chapter with its assigned character** and reach the score screen." },
    de: { name: "Das Kapitel der Figur", objective: "Setz **Hotline Miami 2: Wrong Number** in einem freigeschalteten Kampagnenkapitel fort. **Beende das Kapitel mit der vorgegebenen Figur** und geh zur Punkteübersicht." } },
  { id: "hm2-sons-style", installments: ["hotline-miami-2"], moods: ["curious", "focused"], type: "experiment", tags: ["new-approach"], minutes: 20, minimum: 3,
    en: { name: "Try the Son’s Style", objective: "Choose an unlocked **Hotline Miami 2** chapter where you play as The Son. Select a fighting style you have not used in that chapter and **clear it**." },
    de: { name: "Der Stil des Sohnes", objective: "Wähl in **Hotline Miami 2** ein freigeschaltetes Kapitel, in dem du den Sohn spielst. Such einen Kampfstil aus, den du dort noch nicht genutzt hast, und **schaff das Kapitel**." } },
  { id: "hm2-tony-fists", installments: ["hotline-miami-2"], moods: ["challenge", "focused"], type: "challenge", tags: ["one-weapon", "three-attempts"], minutes: 20, minimum: 3,
    en: { name: "Tony Uses His Fists", objective: "In an unlocked Fans chapter, choose Tony and **clear one floor with his fists without picking up a weapon**. Stop after three attempts." },
    de: { name: "Tony boxt sich durch", objective: "Wähl in einem freigeschalteten Fans-Kapitel Tony und **räume eine Etage nur mit seinen Fäusten, ohne eine Waffe aufzuheben**. Höre nach drei Versuchen auf." } },
  { id: "hm2-find-a-piece", installments: ["hotline-miami-2"], moods: ["explore", "curious"], type: "objective", tags: ["collectibles"], minutes: 20, minimum: 3,
    en: { name: "Look Off the Route", objective: "Choose an unlocked **Hotline Miami 2** scene with an uncollected puzzle piece. Search beyond the most direct route and **pick up the piece** before reaching the score screen." },
    de: { name: "Neben der Route suchen", objective: "Wähl in **Hotline Miami 2** eine freigeschaltete Szene mit einem noch nicht gefundenen Puzzleteil. Such abseits des direkten Wegs und **sammle das Teil ein**, bevor du zur Punkteübersicht gehst." } },
  { id: "hm2-hard-mode", installments: ["hotline-miami-2"], moods: ["challenge", "focused"], type: "challenge", tags: ["three-attempts"], minutes: 25, minimum: 3,
    en: { name: "Hard Mode Run", objective: "Choose an unlocked **Hotline Miami 2** chapter where Hard mode is available and start it on Hard. **Clear the chapter, or stop after three attempts.**" },
    de: { name: "Lauf im schweren Modus", objective: "Wähl in **Hotline Miami 2** ein freigeschaltetes Kapitel, für das der schwere Modus verfügbar ist, und starte es damit. **Schaff das Kapitel oder hör nach drei Versuchen auf.**" } },
  {
    id: "hm1-richard-tony-fists",
    installments: [
      "hotline-miami-1"
    ],
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "abilities"
    ],
    minutes: 15,
    minimum: 2,
    en: {
      name: "What Tony Changes",
      objective: "With **Tony unlocked in Hotline Miami**, enter the same unlocked room once with Richard and once with Tony. **Punch an ordinary enemy on each attempt** and compare the knockdown with the lethal hit. Deaths end each attempt."
    },
    de: {
      name: "Was Tony ändert",
      objective: "Betritt in **Hotline Miami mit freigeschaltetem Tony** denselben freigeschalteten Raum einmal mit Richard und einmal mit Tony. **Schlag in beiden Versuchen einen normalen Gegner** und vergleiche Umwerfen und tödlichen Treffer. Ein Tod beendet den jeweiligen Versuch."
    }
  },
  {
    id: "hm1-don-juan-door",
    installments: [
      "hotline-miami-1"
    ],
    moods: [
      "focused",
      "challenge"
    ],
    type: "challenge",
    tags: [
      "abilities",
      "three-attempts"
    ],
    minutes: 15,
    minimum: 2,
    en: {
      name: "The Door Is Lethal",
      objective: "With **Don Juan unlocked in Hotline Miami**, choose a chapter with an enemy standing behind a door. **Kill that enemy by opening the door and escape that room alive**, or stop after three attempts."
    },
    de: {
      name: "Die Tür ist tödlich",
      objective: "Wähl in **Hotline Miami mit freigeschaltetem Don Juan** ein Kapitel mit einem Gegner hinter einer Tür. **Schalte ihn durch Öffnen der Tür aus und verlass den Raum lebend** oder hör nach drei Versuchen auf."
    }
  },
  {
    id: "hm1-ted-pass-the-dog",
    installments: [
      "hotline-miami-1"
    ],
    moods: [
      "explore",
      "curious"
    ],
    type: "experiment",
    tags: [
      "abilities"
    ],
    minutes: 15,
    minimum: 2,
    en: {
      name: "Walk Past the Dog",
      objective: "With **Ted unlocked in Hotline Miami**, choose an unlocked floor with a dog and another reachable room. **Try moving past the dog before attacking anyone**, and see which doorway becomes reachable. Stop if killed."
    },
    de: {
      name: "Am Hund vorbeigehen",
      objective: "Wähl in **Hotline Miami mit freigeschaltetem Ted** eine freigeschaltete Etage mit Hund und einem weiteren erreichbaren Raum. **Probier, am Hund vorbeizugehen, bevor du jemanden angreifst**, und schau nach erreichbaren Türen. Hör beim Tod auf."
    }
  },
  {
    id: "hm1-peter-quiet-shot",
    installments: [
      "hotline-miami-1"
    ],
    moods: [
      "focused",
      "curious"
    ],
    type: "experiment",
    tags: [
      "abilities"
    ],
    minutes: 15,
    minimum: 2,
    en: {
      name: "A Quiet Gunshot",
      objective: "With **Peter unlocked in Hotline Miami**, take one shot in an unlocked room, then repeat the entry with Richard. **Try both shots and compare which enemies react**, stopping each attempt if killed."
    },
    de: {
      name: "Ein leiser Schuss",
      objective: "Schieß in **Hotline Miami mit freigeschaltetem Peter** einmal in einem freigeschalteten Raum und wiederhole den Einstieg mit Richard. **Probier beide Schüsse und vergleiche die reagierenden Gegner**. Ein Tod beendet den jeweiligen Versuch."
    }
  },
  {
    id: "hm1-willem-weapon-steal",
    installments: [
      "hotline-miami-1"
    ],
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "abilities"
    ],
    minutes: 15,
    minimum: 2,
    en: {
      name: "Take Their Weapon",
      objective: "With **Willem unlocked in Hotline Miami**, approach an armed ordinary enemy without a weapon. **Try a standing execution that steals their weapon and use the stolen weapon on the next enemy**. Stop if killed."
    },
    de: {
      name: "Ihre Waffe nehmen",
      objective: "Nähere dich in **Hotline Miami mit freigeschaltetem Willem** unbewaffnet einem bewaffneten normalen Gegner. **Probier einen stehenden Finisher zum Waffenklau und nutze die Waffe gegen den nächsten Gegner**. Hör beim Tod auf."
    }
  },
  {
    id: "hm1-rami-ammo-room",
    installments: [
      "hotline-miami-1"
    ],
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "abilities"
    ],
    minutes: 15,
    minimum: 2,
    en: {
      name: "One Longer Magazine",
      objective: "With **Rami unlocked in Hotline Miami**, pick up a firearm in an unlocked room and use it in that encounter. Repeat with Richard and **compare the ammunition available on pickup**, stopping each attempt if killed."
    },
    de: {
      name: "Was ins Magazin passt",
      objective: "Heb in **Hotline Miami mit freigeschaltetem Rami** eine Schusswaffe in einem freigeschalteten Raum auf und nutze sie dort. Wiederhole das mit Richard und **vergleiche die Munition beim Aufheben**. Ein Tod beendet den jeweiligen Versuch."
    }
  },
  {
    id: "hm1-george-see-ahead",
    installments: [
      "hotline-miami-1"
    ],
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "scouting",
      "abilities"
    ],
    minutes: 15,
    minimum: 2,
    en: {
      name: "Look Past the Door",
      objective: "With **George unlocked in Hotline Miami**, look ahead into a room before entering and note an enemy outside your normal view. **Try the entry with George and Richard once each**, comparing what you could plan beforehand."
    },
    de: {
      name: "Hinter die Tür schauen",
      objective: "Schau in **Hotline Miami mit freigeschaltetem George** vor dem Betreten in einen Raum und such einen Gegner außerhalb des üblichen Blicks. **Probier den Einstieg je einmal mit George und Richard** und vergleiche deine Planung davor."
    }
  },
  {
    id: "hm1-brandon-fast-entry",
    installments: [
      "hotline-miami-1"
    ],
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "abilities",
      "traversal"
    ],
    minutes: 15,
    minimum: 2,
    en: {
      name: "Arrive before the Patrol",
      objective: "With **Brandon unlocked in Hotline Miami**, choose a cleared chapter with a patrolling enemy near the entrance. **Try that opening once with Brandon and once with Richard**, comparing where the patrol is when you arrive."
    },
    de: {
      name: "Vor der Patrouille ankommen",
      objective: "Wähl in **Hotline Miami mit freigeschaltetem Brandon** ein schon geschafftes Kapitel mit Patrouille am Eingang. **Probier den Auftakt je einmal mit Brandon und Richard** und vergleiche die Position des Gegners bei deiner Ankunft."
    }
  },
  {
    id: "hm1-jake-empty-throw",
    installments: [
      "hotline-miami-1"
    ],
    moods: [
      "challenge",
      "focused"
    ],
    type: "challenge",
    tags: [
      "abilities",
      "three-attempts"
    ],
    minutes: 15,
    minimum: 2,
    en: {
      name: "The Empty Gun Counts",
      objective: "With **Jake unlocked in Hotline Miami**, empty a firearm during an unlocked chapter. **Kill the next ordinary enemy by throwing that empty gun**, or stop after three attempts at the floor."
    },
    de: {
      name: "Die leere Waffe zählt",
      objective: "Leer in **Hotline Miami mit freigeschaltetem Jake** in einem freigeschalteten Kapitel eine Schusswaffe. **Schalte den nächsten normalen Gegner mit einem Wurf der leeren Waffe aus** oder hör nach drei Etagenversuchen auf."
    }
  },
  {
    id: "hm1-carl-drill-open",
    installments: [
      "hotline-miami-1"
    ],
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "abilities"
    ],
    minutes: 15,
    minimum: 2,
    en: {
      name: "Use the Drill",
      objective: "With **Carl unlocked in Hotline Miami**, enter an unlocked chapter with his starting drill. **Try a drill execution on a knocked-down enemy**, then continue that floor until cleared or killed."
    },
    de: {
      name: "Den Bohrer nutzen",
      objective: "Starte in **Hotline Miami mit freigeschaltetem Carl** ein freigeschaltetes Kapitel mit seinem Bohrer. **Probier einen Bohrer-Finisher an einem umgeworfenen Gegner** und spiel die Etage bis zum Abschluss oder Tod weiter."
    }
  },
  {
    id: "hm1-richter-quiet-opening",
    installments: [
      "hotline-miami-1"
    ],
    moods: [
      "focused"
    ],
    type: "objective",
    tags: [
      "abilities"
    ],
    minutes: 15,
    minimum: 2,
    en: {
      name: "The Starting Uzi",
      objective: "With **Richter unlocked in Hotline Miami**, use his starting silenced Uzi for the opening encounter of a cleared chapter. **Play that floor until cleared or killed**, looking for enemies you can reach before swapping weapons."
    },
    de: {
      name: "Die Uzi zum Start",
      objective: "Nutze in **Hotline Miami mit freigeschaltetem Richter** seine schallgedämpfte Start-Uzi für den Auftaktkampf eines schon geschafften Kapitels. **Spiel die Etage bis zum Abschluss oder Tod** und such erreichbare Gegner vor einem Waffenwechsel."
    }
  },
  {
    id: "hm1-oscar-dark-route",
    installments: [
      "hotline-miami-1"
    ],
    moods: [
      "challenge",
      "focused"
    ],
    type: "challenge",
    tags: [
      "abilities",
      "three-attempts"
    ],
    minutes: 20,
    minimum: 2,
    en: {
      name: "In the Dark",
      objective: "With **Oscar unlocked in Hotline Miami**, choose a short floor you already know. **Clear it with Oscar’s darkened view**, or stop after three attempts."
    },
    de: {
      name: "Im Dunkeln kennen",
      objective: "Wähl in **Hotline Miami mit freigeschaltetem Oscar** eine kurze Etage, die du schon kennst. **Schaff sie mit Oscars verdunkelter Sicht** oder hör nach drei Versuchen auf."
    }
  },
  {
    id: "hm1-full-house-sewer",
    installments: [
      "hotline-miami-1"
    ],
    moods: [
      "explore",
      "focused"
    ],
    type: "objective",
    tags: [
      "collectibles",
      "story"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Below Full House",
      objective: "With **Full House unlocked in Hotline Miami and its sewer mask still uncollected**, clear the chapter, take the first-floor crowbar outside, and **open the manhole to collect the mask below**."
    },
    de: {
      name: "Unter Full House",
      objective: "Spiel in **Hotline Miami mit freigeschaltetem Full House und noch fehlender Kanalisationsmaske** das Kapitel frei. Nimm die Brechstange aus Etage eins mit hinaus und **öffne den Gully, um unten die Maske einzusammeln**."
    }
  },
  {
    id: "hm1-password-resolution",
    installments: [
      "hotline-miami-1"
    ],
    moods: [
      "progress",
      "curious"
    ],
    type: "objective",
    tags: [
      "puzzles",
      "story"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Use the Password",
      objective: "With **all puzzle pieces collected and Resolution unlocked in Hotline Miami**, solve the collected letters into the computer password. **Enter it in Biker’s final chapter and follow the revealed dialogue**."
    },
    de: {
      name: "Das Passwort nutzen",
      objective: "Setz in **Hotline Miami mit allen gesammelten Puzzleteilen und freigeschaltetem Resolution** die Buchstaben zum Computerpasswort zusammen. **Gib es in Bikers letztem Kapitel ein und folge dem neuen Dialog**."
    }
  },
  {
    id: "hm1-overdose-hotwater",
    installments: [
      "hotline-miami-1"
    ],
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "new-approach"
    ],
    minutes: 15,
    minimum: 2,
    en: {
      name: "The Pot in Overdose",
      objective: "In **Hotline Miami’s unlocked Overdose chapter**, find the pot of boiling water. **Try throwing it at an ordinary enemy**, then continue the floor until cleared or killed."
    },
    de: {
      name: "Der Topf in Overdose",
      objective: "Such im **freigeschalteten Hotline-Miami-Kapitel Overdose** den Topf mit kochendem Wasser. **Probier einen Wurf auf einen normalen Gegner** und spiel die Etage bis zum Abschluss oder Tod weiter."
    }
  },
  {
    id: "hm1-brick-double",
    installments: [
      "hotline-miami-1"
    ],
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
      name: "Two with a Brick",
      objective: "Choose an **unlocked Hotline Miami floor with a brick available**. **Defeat two ordinary enemies with one brick throw**, or stop after three attempts at the floor."
    },
    de: {
      name: "Zwei mit einem Ziegel",
      objective: "Wähl in **Hotline Miami eine freigeschaltete Etage mit verfügbarem Ziegel**. **Schalte zwei normale Gegner mit einem Ziegelwurf aus** oder hör nach drei Versuchen auf der Etage auf."
    }
  },
  {
    id: "hm1-bouncing-weapon",
    installments: [
      "hotline-miami-1"
    ],
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "new-approach"
    ],
    minutes: 15,
    minimum: 2,
    en: {
      name: "Retrieve the Bounce",
      objective: "In an **unlocked Hotline Miami room with a throwable weapon**, throw it toward a wall from cover. **Try retrieving it after the bounce and use it in the encounter**, stopping if killed."
    },
    de: {
      name: "Den Abpraller zurückholen",
      objective: "Wirf in einem **freigeschalteten Hotline-Miami-Raum mit werfbarer Waffe** aus der Deckung auf eine Wand. **Probier, sie nach dem Abpraller aufzuheben und im Kampf zu nutzen**. Hör beim Tod auf."
    }
  },
  {
    id: "hm1-old-phone-call",
    installments: [
      "hotline-miami-1"
    ],
    moods: [
      "nostalgic"
    ],
    type: "inspiration",
    tags: [
      "replay"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "That Old Phone Call",
      objective: "Return to an **unlocked Hotline Miami chapter whose phone message you remember**. Follow the old instructions back into that building and rediscover the opening you used to rely on."
    },
    de: {
      name: "Der alte Anruf",
      objective: "Kehr zu einem **freigeschalteten Hotline-Miami-Kapitel zurück, dessen Anruf du noch kennst**. Folge den alten Anweisungen wieder in das Gebäude und schau nach deinem früheren Einstieg."
    }
  },
  {
    id: "hm1-one-building-flow",
    installments: [
      "hotline-miami-1"
    ],
    moods: [
      "focused",
      "challenge"
    ],
    type: "inspiration",
    tags: [
      "replay"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Stay with the Building",
      objective: "Choose an **unlocked Hotline Miami chapter with a layout you want to understand better**. Stay with its doors, patrols, and dropped weapons. Let each restart show you another way through the same building."
    },
    de: {
      name: "Bei dem Gebäude bleiben",
      objective: "Wähl ein **freigeschaltetes Hotline-Miami-Kapitel, dessen Aufbau du besser verstehen möchtest**. Bleib bei seinen Türen, Patrouillen und fallengelassenen Waffen und lass jeden Neustart einen anderen Weg zeigen."
    }
  },
  {
    id: "hm1-share-controller-entry",
    installments: [
      "hotline-miami-1"
    ],
    moods: [
      "connect"
    ],
    type: "objective",
    tags: [
      "local-play"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Show Me Your Entry",
      objective: "With another person sharing the controller in **Hotline Miami**, choose a cleared chapter and take one opening attempt each. **Compare which enemy each of you handled first**, whether either attempt survived."
    },
    de: {
      name: "Zeig mir deinen Einstieg",
      objective: "Teilt euch in **Hotline Miami** einen Controller, wählt ein schon geschafftes Kapitel und probiert beide einmal den Auftakt. **Vergleicht, welchen Gegner ihr zuerst angegangen seid**, auch wenn beide Versuche scheitern."
    }
  },
  {
    id: "hm2-corey-roll-entry",
    installments: [
      "hotline-miami-2"
    ],
    moods: [
      "challenge",
      "focused"
    ],
    type: "challenge",
    tags: [
      "abilities",
      "three-attempts"
    ],
    minutes: 15,
    minimum: 2,
    en: {
      name: "Roll through the Shot",
      objective: "In an **unlocked Corey scene in Hotline Miami 2**, **roll under a gunman’s fire and defeat that gunman after the roll**. Stop after three attempts at the floor."
    },
    de: {
      name: "Unter dem Schuss durchrollen",
      objective: "**Roll in einer freigeschalteten Corey-Szene in Hotline Miami 2 unter dem Beschuss eines Schützen durch und schalte ihn danach aus**. Nach drei Etagenversuchen ist Schluss."
    }
  },
  {
    id: "hm2-mark-spread-door",
    installments: [
      "hotline-miami-2"
    ],
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "abilities"
    ],
    minutes: 15,
    minimum: 2,
    en: {
      name: "Cover Both Sides",
      objective: "In an **unlocked Mark scene in Hotline Miami 2**, stand where enemies can approach from two sides. **Try his split-direction fire in that encounter**, then finish the floor or stop if killed."
    },
    de: {
      name: "Beide Seiten decken",
      objective: "Stell dich in einer **freigeschalteten Mark-Szene in Hotline Miami 2** so hin, dass Gegner von zwei Seiten kommen können. **Probier dort sein Feuer in entgegengesetzte Richtungen** und spiel bis zum Etagenabschluss oder Tod."
    }
  },
  {
    id: "hm2-jake-pickup-chain",
    installments: [
      "hotline-miami-2"
    ],
    moods: [
      "challenge",
      "focused"
    ],
    type: "challenge",
    tags: [
      "abilities",
      "three-attempts"
    ],
    minutes: 15,
    minimum: 2,
    en: {
      name: "Throw, Pick Up, Throw",
      objective: "In an **unlocked Jake scene in Hotline Miami 2**, use the default lethal-throw mask. **Defeat one enemy with a throw, pick up that enemy’s weapon, and defeat another with the next throw**, or stop after three floor attempts."
    },
    de: {
      name: "Werfen, nehmen, werfen",
      objective: "Nutze in einer **freigeschalteten Jake-Szene in Hotline Miami 2** die Standardmaske für tödliche Würfe. **Schalte einen Gegner per Wurf aus, nimm seine Waffe und erledige den nächsten per Wurf** oder hör nach drei Etagenversuchen auf."
    }
  },
  {
    id: "hm2-irvin-silent-route",
    installments: [
      "hotline-miami-2"
    ],
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "abilities"
    ],
    minutes: 15,
    minimum: 2,
    en: {
      name: "Keep the Nail Gun",
      objective: "With **Irvin unlocked for Jake in Hotline Miami 2**, enter an unlocked scene with his nail gun. **Try clearing one room before changing weapons**, comparing which neighbours react. Stop if killed."
    },
    de: {
      name: "Die Nagelpistole behalten",
      objective: "Starte in **Hotline Miami 2 mit freigeschaltetem Irvin für Jake** eine freigeschaltete Szene mit seiner Nagelpistole. **Probier, einen Raum vor dem Waffenwechsel zu räumen**, und schau auf die reagierenden Nachbarn. Hör beim Tod auf."
    }
  },
  {
    id: "hm2-dallas-safe-start",
    installments: [
      "hotline-miami-2"
    ],
    moods: [
      "challenge",
      "focused"
    ],
    type: "challenge",
    tags: [
      "abilities",
      "three-attempts"
    ],
    minutes: 15,
    minimum: 2,
    en: {
      name: "Find the Activation Gap",
      objective: "With **Dallas unlocked for Jake in Hotline Miami 2**, activate the nunchaku from cover before entering a nearby occupied room. **Defeat an enemy during the active rush and reach cover for its end**, or stop after three floor attempts."
    },
    de: {
      name: "Die Lücke zum Aktivieren",
      objective: "Aktivier in **Hotline Miami 2 mit freigeschaltetem Dallas für Jake** die Nunchaku aus der Deckung vor einem besetzten Raum. **Schalte im aktiven Lauf einen Gegner aus und erreiche Deckung vor dem Ende** oder hör nach drei Etagenversuchen auf."
    }
  },
  {
    id: "hm2-pardo-keep-gun",
    installments: [
      "hotline-miami-2"
    ],
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "abilities"
    ],
    minutes: 15,
    minimum: 2,
    en: {
      name: "The Gun Stays",
      objective: "In an **unlocked Pardo scene in Hotline Miami 2**, knock an ordinary enemy down while holding a firearm. **Use Pardo’s execution, then fire the retained gun at the next enemy**. Stop if killed."
    },
    de: {
      name: "Die Waffe bleibt",
      objective: "Wirf in einer **freigeschalteten Pardo-Szene in Hotline Miami 2** mit Schusswaffe in der Hand einen normalen Gegner um. **Nutze Pardos Finisher und schieß mit der behaltenen Waffe auf den nächsten Gegner**. Hör beim Tod auf."
    }
  },
  {
    id: "hm2-evan-unload-combo",
    installments: [
      "hotline-miami-2"
    ],
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "no-kills",
      "abilities"
    ],
    minutes: 15,
    minimum: 2,
    en: {
      name: "Unload the Pickup",
      objective: "In an **unlocked Evan scene in Hotline Miami 2**, knock an enemy out without executing them, then pick up their gun to unload it. **Try that sequence without killing**, watching its effect on the combo. Stop if killed."
    },
    de: {
      name: "Die aufgehobene Waffe entladen",
      objective: "Schlag in einer **freigeschalteten Evan-Szene in Hotline Miami 2** einen Gegner bewusstlos, ohne Finisher, und nimm seine Waffe zum Entladen. **Probier diese Folge ohne Töten** und schau auf die Combo. Hör beim Tod auf."
    }
  },
  {
    id: "hm2-evan-rage-change",
    installments: [
      "hotline-miami-2"
    ],
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "abilities"
    ],
    minutes: 15,
    minimum: 2,
    en: {
      name: "When Evan Changes",
      objective: "In an **unlocked Evan scene in Hotline Miami 2**, deliberately execute two enemies to trigger his rage state. **Try picking up and firing a weapon after the change**, then stop at floor clear or death."
    },
    de: {
      name: "Wenn Evan sich ändert",
      objective: "Führ in einer **freigeschalteten Evan-Szene in Hotline Miami 2** bewusst zwei Gegner-Finisher aus, um seinen Wutzustand auszulösen. **Probier danach, eine Waffe aufzuheben und abzufeuern**, und hör beim Etagenabschluss oder Tod auf."
    }
  },
  {
    id: "hm2-beard-gun-comparison",
    installments: [
      "hotline-miami-2"
    ],
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "loadout"
    ],
    minutes: 20,
    minimum: 2,
    en: {
      name: "Two Ways through Hawaii",
      objective: "In an **unlocked Beard scene in Hotline Miami 2 with both shotgun and rifle unlocked**, try its opening once with a shotgun and once with a rifle. **Compare the useful distance for each**, with one floor attempt per weapon."
    },
    de: {
      name: "Zwei Wege durch Hawaii",
      objective: "Probier in einer **freigeschalteten Beard-Szene in Hotline Miami 2 mit freigeschalteter Schrotflinte und freigeschaltetem Gewehr** den Auftakt einmal mit Schrotflinte und einmal mit Gewehr. **Vergleiche die passende Entfernung**, mit einem Etagenversuch pro Waffe."
    }
  },
  {
    id: "hm2-beard-flame-room",
    installments: [
      "hotline-miami-2"
    ],
    moods: [
      "challenge",
      "focused"
    ],
    type: "challenge",
    tags: [
      "one-weapon",
      "three-attempts"
    ],
    minutes: 20,
    minimum: 2,
    en: {
      name: "Wait for the Flame",
      objective: "With the **flamethrower unlocked for Beard in Hotline Miami 2**, choose a scene where it is selectable. **Clear one room using it without switching to the knife**, or stop after three floor attempts."
    },
    de: {
      name: "Auf die Flamme warten",
      objective: "Wähl in **Hotline Miami 2 mit freigeschaltetem Flammenwerfer für Beard** eine Szene, in der er verfügbar ist. **Räume damit einen Raum ohne Wechsel zum Messer** oder hör nach drei Etagenversuchen auf."
    }
  },
  {
    id: "hm2-henchman-pistol-chain",
    installments: [
      "hotline-miami-2"
    ],
    moods: [
      "challenge",
      "focused"
    ],
    type: "challenge",
    tags: [
      "one-weapon",
      "three-attempts"
    ],
    minutes: 20,
    minimum: 2,
    en: {
      name: "The Quiet Pistol",
      objective: "In **Hotline Miami 2’s unlocked No Mercy scene**, use the Henchman’s starting silenced pistol. **Defeat three enemies in one combo without changing weapons**, or stop after three floor attempts."
    },
    de: {
      name: "Die leise Pistole",
      objective: "Nutze in **Hotline Miami 2 im freigeschalteten No Mercy** die schallgedämpfte Startpistole des Handlangers. **Schalte drei Gegner in einer Combo ohne Waffenwechsel aus** oder hör nach drei Etagenversuchen auf."
    }
  },
  {
    id: "hm2-richter-release-read",
    installments: [
      "hotline-miami-2"
    ],
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "scouting"
    ],
    minutes: 20,
    minimum: 2,
    en: {
      name: "Read the Prison Floor",
      objective: "In **Hotline Miami 2’s unlocked Release scene**, look ahead at the prison floor before moving Richter from its opening. **Try one route that uses a dropped weapon before entering the next occupied room**, then stop at floor clear or death."
    },
    de: {
      name: "Die Gefängnisetage lesen",
      objective: "Schau dir in **Hotline Miami 2 im freigeschalteten Release** die Gefängnisetage an, bevor Richter losläuft. **Probier einen Weg mit aufgehobener Waffe vor dem nächsten besetzten Raum** und hör beim Etagenabschluss oder Tod auf."
    }
  },
  {
    id: "hm2-bar-phone-call",
    installments: [
      "hotline-miami-2"
    ],
    moods: [
      "curious",
      "focused"
    ],
    type: "objective",
    tags: [
      "story",
      "three-attempts"
    ],
    minutes: 30,
    minimum: 5,
    en: {
      name: "The Call before Subway",
      objective: "With **Subway unlocked in Hotline Miami 2**, answer the phone in Evan’s home during its intro. **Finish the scene and meet Biker in the hidden bar sequence**, or stop after three scene attempts."
    },
    de: {
      name: "Der Anruf vor Subway",
      objective: "Nimm mit **freigeschaltetem Subway in Hotline Miami 2** im Intro den Anruf in Evans Wohnung an. **Beende die Szene und triff Biker in der versteckten Barsequenz**, oder hör nach drei Szenenversuchen auf."
    }
  },
  {
    id: "hm2-hard-mirror-read",
    installments: [
      "hotline-miami-2"
    ],
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "replay"
    ],
    minutes: 20,
    minimum: 2,
    en: {
      name: "The Floor Is Reversed",
      objective: "With **Hard mode unlocked for a cleared Hotline Miami 2 scene**, try its first floor once on Normal and once on Hard. **Compare the mirrored layout and enemy sightlines**, with deaths ending each attempt."
    },
    de: {
      name: "Die Etage ist gespiegelt",
      objective: "Probier in **Hotline Miami 2 eine geschaffte Szene mit freigeschaltetem Hard-Modus** auf der ersten Etage je einmal auf Normal und Hard. **Vergleiche gespiegelten Aufbau und Sichtlinien**. Ein Tod beendet den jeweiligen Versuch."
    }
  },
  {
    id: "hm2-editor-door-room",
    installments: [
      "hotline-miami-2"
    ],
    moods: [
      "create",
      "focused"
    ],
    type: "creation",
    tags: [
      "level-editor"
    ],
    minutes: 30,
    minimum: 5,
    en: {
      name: "A Two-Door Room",
      objective: "In the **Hotline Miami 2 PC Level Editor**, build a small room with two entrances, one armed enemy, and a compatible melee weapon. **Save it and complete a test run through each entrance**, adjusting sightlines if needed."
    },
    de: {
      name: "Ein Raum, zwei Türen",
      objective: "Bau im **PC-Leveleditor von Hotline Miami 2** einen kleinen Raum mit zwei Eingängen, bewaffnetem Gegner und passender Nahkampfwaffe. **Speichere und schaff einen Testlauf durch jeden Eingang**. Passe bei Bedarf die Sichtlinien an."
    }
  },
  {
    id: "hm2-editor-patrol-choice",
    installments: [
      "hotline-miami-2"
    ],
    moods: [
      "create",
      "focused"
    ],
    type: "creation",
    tags: [
      "level-editor"
    ],
    minutes: 30,
    minimum: 5,
    en: {
      name: "Give Them a Patrol",
      objective: "In the **Hotline Miami 2 PC Level Editor**, take a small playable level you own and change one stationary enemy to a patrol. **Save the change and finish a test run**, checking that the patrol leaves an entry gap."
    },
    de: {
      name: "Eine Patrouille setzen",
      objective: "Ändere im **PC-Leveleditor von Hotline Miami 2** in einem eigenen kleinen spielbaren Level einen stehenden Gegner zur Patrouille. **Speichere und beende einen Testlauf**. Prüfe, ob die Patrouille eine Lücke zum Betreten lässt."
    }
  },
  {
    id: "hm2-editor-story-arrival",
    installments: [
      "hotline-miami-2"
    ],
    moods: [
      "create"
    ],
    type: "creation",
    tags: [
      "level-editor",
      "story"
    ],
    minutes: 30,
    minimum: 5,
    en: {
      name: "Before the Fighting",
      objective: "In the **Hotline Miami 2 PC Level Editor**, add a short noncombat arrival to a playable level you own. **Save and test the transition from arrival into the combat level**, keeping the story beat readable without extra dialogue."
    },
    de: {
      name: "Vor dem Kampf",
      objective: "Ergänz im **PC-Leveleditor von Hotline Miami 2** bei einem eigenen spielbaren Level eine kurze Ankunft ohne Kampf. **Speichere und teste den Übergang von der Ankunft ins Kampflevel**, mit verständlicher Szene ohne Zusatzdialog."
    }
  },
  {
    id: "hm2-workshop-new-author",
    installments: [
      "hotline-miami-2"
    ],
    moods: [
      "explore",
      "curious"
    ],
    type: "inspiration",
    tags: [
      "level-editor"
    ],
    minutes: 25,
    minimum: 3,
    en: {
      name: "Someone Else’s Miami",
      objective: "With **Hotline Miami 2 on Steam and Workshop access**, choose a short custom level by an author you have not played before. Follow their rooms and character choices and see what kind of Miami they made."
    },
    de: {
      name: "Das Miami eines anderen",
      objective: "Such in **Hotline Miami 2 auf Steam mit Workshop-Zugang** ein kurzes Custom-Level von jemandem, dessen Levels du noch nicht gespielt hast. Folge den Räumen und Figuren und schau, welches Miami dort entstanden ist."
    }
  },
  {
    id: "hm2-hawaii-return",
    installments: [
      "hotline-miami-2"
    ],
    moods: [
      "nostalgic",
      "focused"
    ],
    type: "inspiration",
    tags: [
      "replay",
      "story"
    ],
    minutes: 25,
    minimum: 3,
    en: {
      name: "Back to Hawaii",
      objective: "Return to an **unlocked Hotline Miami 2 Hawaii scene you remember playing**. Spend the session with Beard’s old squad and the combat route you recall, watching how the conversations fit your memory."
    },
    de: {
      name: "Zurück nach Hawaii",
      objective: "Kehr zu einer **freigeschalteten Hawaii-Szene in Hotline Miami 2 zurück, die du schon gespielt hast**. Verbring die Session bei Beards alter Truppe und deiner früheren Kampfroute und schau, wie die Gespräche dazu passen."
    }
  },
  {
    id: "hm2-floor-controller-pair",
    installments: [
      "hotline-miami-2"
    ],
    moods: [
      "connect"
    ],
    type: "objective",
    tags: [
      "local-play"
    ],
    minutes: 25,
    minimum: 3,
    en: {
      name: "One Floor Each",
      objective: "Share a controller with another person for an **unlocked Hotline Miami 2 Fans scene**. Take one floor attempt each with different available Fans and **compare the tools that changed your route**, whether either attempt survived."
    },
    de: {
      name: "Jeder eine Etage",
      objective: "Teilt euch für eine **freigeschaltete Fans-Szene in Hotline Miami 2** einen Controller. Probiert beide die Etage einmal mit unterschiedlichen verfügbaren Fans und **vergleicht die Werkzeuge für euren Weg**, auch wenn beide Versuche scheitern."
    }
  }
]);
