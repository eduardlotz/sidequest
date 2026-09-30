import { defineGameQuests } from "../defineGameQuests";

export const eaSportsFcQuests = defineGameQuests("ea-sports-fc", [
  { id: "fc25-kickoff-build", installments: ["fc-25"], moods: ["focused"], type: "experiment", tags: ["vs-bots", "full-match"], minutes: 20, minimum: 3,
    en: { name: "Pass Through Midfield", objective: "In an **EA SPORTS FC 25 Kick Off** match against the CPU, build one attack with at least three passes before shooting. **Finish the match** and see how often the extra pass opened space." },
    de: { name: "Durchs Mittelfeld spielen", objective: "Spiel in **EA SPORTS FC 25 Kick Off** gegen die CPU einen Angriff mit mindestens drei Pässen, bevor du schießt. **Beende das Match** und achte darauf, ob der zusätzliche Pass Raum geöffnet hat." } },
  { id: "fc25-career-fixture", installments: ["fc-25"], moods: ["progress", "nostalgic"], type: "inspiration", tags: ["story"], minutes: 20, minimum: 3,
    en: { name: "Next Career Match", objective: "Load your **EA SPORTS FC 25 Career** save and play its next scheduled fixture. Let the season story set the pace; stop when the final whistle arrives." },
    de: { name: "Das nächste Karrierematch", objective: "Lad deinen **EA SPORTS FC 25 Karriere**-Spielstand und spiel das nächste angesetzte Match. Lass die Saison den Ton angeben und hör beim Schlusspfiff auf." } },
  { id: "fc25-cross-finish", installments: ["fc-25"], moods: ["challenge", "focused"], type: "challenge", tags: ["three-attempts", "full-match"], minutes: 25, minimum: 5,
    en: { name: "Finish a Cross", objective: "In **EA SPORTS FC 25 Kick Off** against the CPU, score from a cross delivered during open play. **Finish the match after the goal**, or stop after three full matches without one." },
    de: { name: "Nach einer Flanke treffen", objective: "Erziel in **EA SPORTS FC 25 Kick Off** gegen die CPU nach einer Flanke aus dem laufenden Spiel ein Tor. **Beende das Match nach dem Treffer** oder hör nach drei ganzen Matches ohne Tor auf." } },
  { id: "fc25-save-a-shape", installments: ["fc-25"], moods: ["create", "focused"], type: "creation", tags: ["loadout"], minutes: 10, minimum: 2,
    en: { name: "Set Your Shape", objective: "Open Team Management in **EA SPORTS FC 25 Kick Off** and change your starting formation to one you want to try. **Save the team sheet and start a match with it.**" },
    de: { name: "Deine Formation", objective: "Ändere in der Teamverwaltung von **EA SPORTS FC 25 Kick Off** deine Startformation zu einer, die du ausprobieren willst. **Speichere den Spielplan und starte damit ein Match.**" } },
  { id: "fc26-authentic-match", installments: ["fc-26"], moods: ["relax", "focused"], type: "objective", tags: ["vs-bots", "full-match"], minutes: 25, minimum: 5,
    en: { name: "Play the Authentic Game", objective: "Set **EA SPORTS FC 26 Kick Off** to the Authentic gameplay preset and play against the CPU. **Finish the full match** and notice how the slower tempo shapes your attacks." },
    de: { name: "Authentisch spielen", objective: "Stell **EA SPORTS FC 26 Kick Off** auf den Authentisch-Spielstil und spiel gegen die CPU. **Beende das ganze Match** und achte darauf, wie das langsamere Tempo deine Angriffe verändert." } },
  { id: "fc26-preset-compare", installments: ["fc-26"], moods: ["curious", "focused"], type: "experiment", tags: ["vs-bots", "full-match"], minutes: 40, minimum: 5,
    en: { name: "Two Match Presets", objective: "Play one **EA SPORTS FC 26 Kick Off** match against the CPU with Competitive and a second with Authentic, keeping the teams the same. **Finish both matches and compare the pace.**" },
    de: { name: "Zwei Spielstile testen", objective: "Spiel in **EA SPORTS FC 26 Kick Off** erst mit Kompetitiv und dann mit Authentisch gegen die CPU, immer mit denselben Teams. **Beende beide Matches und vergleiche das Tempo.**" } },
  { id: "fc26-corner-routine", installments: ["fc-26"], moods: ["progress", "focused"], type: "objective", tags: ["vs-bots", "full-match"], minutes: 25, minimum: 5,
    en: { name: "Use a Corner Routine", objective: "Before an **EA SPORTS FC 26 Kick Off** match against the CPU, assign a corner routine in the set-piece menu. **Use that routine at a corner and finish the match.**" },
    de: { name: "Eine Ecke einstudieren", objective: "Leg vor einem **EA SPORTS FC 26 Kick Off**-Match gegen die CPU im Standards-Menü eine Eckballvariante fest. **Führ sie bei einer Ecke aus und beende das Match.**" } },
  { id: "fc27-grounds-tour", installments: ["fc-27"], moods: ["explore", "restless"], type: "inspiration", tags: ["free-roam"], minutes: 15, minimum: 3,
    en: { name: "Step into The Grounds", objective: "Open **The Grounds in EA SPORTS FC 27** and explore its football spaces at your own pace. Try a pitch or activity that catches your eye, then choose when you have had enough." },
    de: { name: "Auf zu The Grounds", objective: "Geh in **EA SPORTS FC 27** zu The Grounds und erkunde die Fußballplätze in deinem Tempo. Probier einen Platz oder eine Aktivität aus, die dir auffällt, und entscheide selbst, wann es reicht." } },
  { id: "fc27-career-rivalry", installments: ["fc-27"], moods: ["progress"], type: "objective", tags: ["story", "full-match"], minutes: 25, minimum: 5,
    en: { name: "A Rivalry Begins", objective: "In **EA SPORTS FC 27 Player Career**, choose an available Rivalry objective and **finish its next match while working toward that objective**." },
    de: { name: "Eine Rivalität beginnt", objective: "Wähl in der **EA SPORTS FC 27 Spielerkarriere** ein verfügbares Rivalitätsziel und **beende das nächste Match mit diesem Ziel im Blick**." } },
  { id: "fc27-no-slide-defense", installments: ["fc-27"], moods: ["challenge", "focused"], type: "challenge", tags: ["three-attempts", "full-match"], minutes: 25, minimum: 5,
    en: { name: "Stay on Your Feet", objective: "In **EA SPORTS FC 27 Kick Off** against the CPU, **win the ball three times through positioning without a slide tackle**. Stop after three full matches." },
    de: { name: "Auf den Beinen bleiben", objective: "Erobere in **EA SPORTS FC 27 Anstoß** gegen die CPU **dreimal den Ball durch Stellungsspiel ohne Grätsche**. Nach drei ganzen Matches ist Schluss." } },
  {
    id: "fc25-role-scout-plan",
    installments: [
      "fc-25"
    ],
    moods: [
      "progress",
      "focused"
    ],
    type: "objective",
    tags: [
      "loadout",
      "story"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Scout the Missing Role",
      objective: "In **FC 25 Manager Career**, identify a position where your tactic lacks a familiar Role. **Send a scout instruction for that position and Role**, then play the next fixture with your current squad."
    },
    de: {
      name: "Die fehlende Rolle scouten",
      objective: "Such in der **FC-25-Managerkarriere** eine Position, auf der für deine Taktik eine vertraute Rolle fehlt. **Schick einen Scout mit dieser Position und Rolle los** und spiel das nächste Match mit deinem jetzigen Team."
    }
  },
  {
    id: "fc25-academy-role-growth",
    installments: [
      "fc-25"
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
      name: "Grow into the Role",
      objective: "In **FC 25 Manager Career**, assign an existing academy player a Development Plan for the Role you want them to learn. **Save the plan and play the next senior fixture**, without waiting for a rating increase."
    },
    de: {
      name: "In eine Rolle hineinwachsen",
      objective: "Gib einem vorhandenen Nachwuchsspieler in der **FC-25-Managerkarriere** einen Entwicklungsplan für die gewünschte Rolle. **Speichere den Plan und spiel das nächste Match der ersten Mannschaft**, ohne auf einen Wertungsanstieg zu warten."
    }
  },
  {
    id: "fc25-wind-long-ball",
    installments: [
      "fc-25"
    ],
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "full-match",
      "vs-bots"
    ],
    minutes: 25,
    minimum: 3,
    en: {
      name: "Playing with the Wind",
      objective: "Enable wind in **FC 25 offline Match settings** and play Kick Off against the CPU. **Try long passes in both halves and finish the match**, comparing the ball’s flight after the sides change."
    },
    de: {
      name: "Mit dem Wind spielen",
      objective: "Aktiviere den Wind in den **Offline-Partieeinstellungen von FC 25** und spiel Anstoß gegen die CPU. **Probier in beiden Halbzeiten lange Pässe und beende das Match**. Vergleiche nach dem Seitenwechsel die Flugbahn des Balls."
    }
  },
  {
    id: "fc25-womens-career-opening",
    installments: [
      "fc-25"
    ],
    moods: [
      "explore",
      "progress"
    ],
    type: "objective",
    tags: [
      "story",
      "full-match"
    ],
    minutes: 30,
    minimum: 3,
    en: {
      name: "Manage the Women’s Team",
      objective: "Start a **FC 25 Women’s Manager Career** with a club you already follow or recognise. Set the first team sheet and **play the opening fixture through the final whistle**."
    },
    de: {
      name: "Das Frauenteam übernehmen",
      objective: "Starte in **FC 25 eine Frauen-Managerkarriere** mit einem Verein, den du kennst oder dem du folgst. Leg die erste Aufstellung fest und **spiel das Auftaktmatch bis zum Schlusspfiff**."
    }
  },
  {
    id: "fc25-live-start-rescue",
    installments: [
      "fc-25"
    ],
    moods: [
      "explore",
      "curious"
    ],
    type: "inspiration",
    tags: [
      "story"
    ],
    minutes: 30,
    minimum: 3,
    en: {
      name: "Take Over Midseason",
      objective: "If **FC 25 Live Start Points are available**, pick a supported club at a point in the 2024/25 season you remember. Inherit its injuries and league position, and see where you want to take that unfinished season."
    },
    de: {
      name: "Mitten in die Saison",
      objective: "Such in **FC 25, wenn Live Start Points verfügbar sind**, einen unterstützten Verein zu einem Zeitpunkt der Saison 2024/25, an den du dich erinnerst. Übernimm Verletzungen und Tabellenplatz und schau, wohin du die offene Saison führen magst."
    }
  },
  {
    id: "fc25-morale-match",
    installments: [
      "fc-25"
    ],
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "story",
      "full-match"
    ],
    minutes: 25,
    minimum: 3,
    en: {
      name: "Watch the Morale",
      objective: "In **FC 25 Manager Career**, check a starter’s morale before an available press conference. Answer without automatically praising everyone, **play the next match**, and compare that player’s morale afterward."
    },
    de: {
      name: "Auf die Moral schauen",
      objective: "Prüf in der **FC-25-Managerkarriere** vor einer verfügbaren Pressekonferenz die Moral eines Stammspielers. Lobe nicht automatisch alle, **spiel das nächste Match** und vergleiche danach seine Moral."
    }
  },
  {
    id: "fc25-wingback-lane",
    installments: [
      "fc-25"
    ],
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "full-match",
      "vs-bots"
    ],
    minutes: 25,
    minimum: 3,
    en: {
      name: "Watch the Wing-Back",
      objective: "In **FC 25 Kick Off against the CPU**, give a full-back the Wingback Role with a supported focus. **Finish the match after looking for their forward runs**, and compare the flank with your usual full-back."
    },
    de: {
      name: "Den Wingback beobachten",
      objective: "Gib in **FC 25 Anstoß gegen die CPU** einem Außenverteidiger die Wingback-Rolle mit verfügbarem Fokus. **Achte auf seine Vorstöße und beende das Match**. Vergleiche die Seite mit deinem üblichen Außenverteidiger."
    }
  },
  {
    id: "fc25-false-nine-link",
    installments: [
      "fc-25"
    ],
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "full-match",
      "vs-bots"
    ],
    minutes: 25,
    minimum: 3,
    en: {
      name: "The Striker Drops",
      objective: "In **FC 25 Kick Off against the CPU**, use a False 9 Role for a compatible striker. **Try passing to them as they drop into midfield and finish the match**, comparing the space behind them."
    },
    de: {
      name: "Die Spitze fällt zurück",
      objective: "Nutze in **FC 25 Anstoß gegen die CPU** bei einer passenden Spitze die False-9-Rolle. **Probier einen Pass beim Zurückfallen ins Mittelfeld und beende das Match**. Schau auf den Raum dahinter."
    }
  },
  {
    id: "fc25-tactic-shortcut",
    installments: [
      "fc-25"
    ],
    moods: [
      "focused",
      "curious"
    ],
    type: "experiment",
    tags: [
      "full-match"
    ],
    minutes: 25,
    minimum: 3,
    en: {
      name: "Switch without the Pause",
      objective: "Create two **FC 25 Kick Off tactics** with different defensive line heights. Against the CPU, use the in-match tactical switch after half-time and **finish the match with both tactics tried**."
    },
    de: {
      name: "Wechsel ohne Pause",
      objective: "Leg für **FC 25 Anstoß** zwei Taktiken mit unterschiedlicher Abwehrhöhe an. Wechsle gegen die CPU nach der Halbzeit über die Spiel-Taktiksteuerung und **beende das Match mit beiden ausprobiert**."
    }
  },
  {
    id: "fc25-sharing-tactic-code",
    installments: [
      "fc-25"
    ],
    moods: [
      "create",
      "focused"
    ],
    type: "creation",
    tags: [
      "loadout"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "A Tactic to Share",
      objective: "In **FC 25 Team Management**, build a tactic around two complementary Player Roles. **Save it, generate its tactic code, and play a CPU Kick Off match with it**. Keep the code for later."
    },
    de: {
      name: "Eine Taktik zum Teilen",
      objective: "Bau in der **FC-25-Teamverwaltung** eine Taktik um zwei sich ergänzende Spielerrollen. **Speichere sie, erzeuge ihren Taktikcode und spiel damit ein Anstoßmatch gegen die CPU**. Heb den Code für später auf."
    }
  },
  {
    id: "fc25-rush-third-line",
    installments: [
      "fc-25"
    ],
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "full-match",
      "vs-bots"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "The Dotted Line",
      objective: "In **FC 25 Kick Off Rush against the CPU**, time forward runs around the attacking-third offside line. **Try one pass as a runner crosses the line and finish the match**, even if it is called offside."
    },
    de: {
      name: "An der Linie warten",
      objective: "Stimm in **FC 25 Anstoß-Rush gegen die CPU** Vorstöße auf die Abseitslinie im Angriffsdrittel ab. **Probier einen Pass beim Überqueren der Linie und beende das Match**, auch wenn Abseits gepfiffen wird."
    }
  },
  {
    id: "fc25-rush-width",
    installments: [
      "fc-25"
    ],
    moods: [
      "focused",
      "curious"
    ],
    type: "experiment",
    tags: [
      "full-match",
      "vs-bots"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Use the Whole Pitch",
      objective: "In **FC 25 Kick Off Rush against the CPU**, move an attack from one side of the wide pitch to the other before shooting. **Try the switch and finish the match**, comparing it with carrying the ball straight upfield."
    },
    de: {
      name: "Das ganze Feld nutzen",
      objective: "Verlager in **FC 25 Anstoß-Rush gegen die CPU** einen Angriff von einer Seite des breiten Felds zur anderen, bevor du schießt. **Probier die Verlagerung und beende das Match**. Vergleiche sie mit einem geraden Vorstoß."
    }
  },
  {
    id: "fc25-rush-duo-role",
    installments: [
      "fc-25"
    ],
    moods: [
      "connect"
    ],
    type: "objective",
    tags: [
      "local-play",
      "full-match"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "One Covers, One Goes",
      objective: "Play **FC 25 Kick Off Rush locally with another person on your team against the CPU**. Agree who covers behind the ball and who joins attacks, swap jobs at the halfway point, and **finish the match together**."
    },
    de: {
      name: "Einer sichert, einer geht",
      objective: "Spiel **FC 25 Anstoß-Rush vor Ort mit einer Person im selben Team gegen die CPU**. Teilt Absicherung und Angriff auf, tauscht zur Hälfte die Aufgaben und **beendet das Match zusammen**."
    }
  },
  {
    id: "fc25-manager-opponent-preview",
    installments: [
      "fc-25"
    ],
    moods: [
      "focused"
    ],
    type: "objective",
    tags: [
      "story",
      "full-match"
    ],
    minutes: 25,
    minimum: 3,
    en: {
      name: "Read Their Shape",
      objective: "Before your next **FC 25 Manager Career fixture**, read the opposition’s tactical preview. Choose a side of the pitch to attack based on that setup and **play the full fixture with that route in mind**."
    },
    de: {
      name: "Ihre Formation lesen",
      objective: "Lies vor dem nächsten **FC-25-Managerkarrierematch** die Taktikvorschau des Gegners. Wähl danach eine Seite für deine Angriffe und **spiel das ganze Match mit diesem Weg im Kopf**."
    }
  },
  {
    id: "fc25-precision-through",
    installments: [
      "fc-25"
    ],
    moods: [
      "challenge",
      "focused"
    ],
    type: "challenge",
    tags: [
      "full-match",
      "three-attempts"
    ],
    minutes: 25,
    minimum: 3,
    en: {
      name: "Slip It through",
      objective: "In **FC 25 Kick Off against the CPU**, **score after a precision through ball splits the defence**. Finish that match, or stop after three complete matches without the goal."
    },
    de: {
      name: "Durch die Lücke",
      objective: "**Triff in FC 25 Anstoß gegen die CPU nach einem präzisen Steilpass durch die Abwehr**. Beende das Match nach dem Tor oder hör nach drei ganzen Matches ohne diesen Treffer auf."
    }
  },
  {
    id: "fc25-player-skill-point",
    installments: [
      "fc-25"
    ],
    moods: [
      "progress"
    ],
    type: "objective",
    tags: [
      "abilities",
      "full-match"
    ],
    minutes: 25,
    minimum: 3,
    en: {
      name: "Spend It on Passing",
      objective: "In an **existing FC 25 Player Career with an unspent skill point**, improve a passing attribute. **Complete the next match while looking for passes that use it**, without needing an assist."
    },
    de: {
      name: "Auf dem Platz ausgeben",
      objective: "Verbessere in einer **bestehenden FC-25-Spielerkarriere mit freiem Skillpunkt** einen Passwert. **Spiel das nächste Match und such Pässe, für die er hilft**, ohne dass eine Vorlage nötig ist."
    }
  },
  {
    id: "fc25-jockey-clean-sheet",
    installments: [
      "fc-25"
    ],
    moods: [
      "challenge",
      "focused"
    ],
    type: "challenge",
    tags: [
      "full-match",
      "three-attempts"
    ],
    minutes: 25,
    minimum: 3,
    en: {
      name: "Hold the Channel",
      objective: "In **FC 25 Kick Off against the CPU**, use jockeying to defend and avoid slide tackles. **Finish a match without conceding**, or stop after three full matches."
    },
    de: {
      name: "Den Weg zustellen",
      objective: "Verteidige in **FC 25 Anstoß gegen die CPU** mit Jockeying und ohne Grätschen. **Beende ein Match ohne Gegentor** oder hör nach drei ganzen Matches auf."
    }
  },
  {
    id: "fc25-local-rival-clubs",
    installments: [
      "fc-25"
    ],
    moods: [
      "connect",
      "nostalgic"
    ],
    type: "inspiration",
    tags: [
      "local-play"
    ],
    minutes: 25,
    minimum: 3,
    en: {
      name: "Your Old Derby",
      objective: "Play **FC 25 local Kick Off with someone you used to play football games with**. Pick the clubs you always chose against each other and let that old derby return with the current squads."
    },
    de: {
      name: "Euer altes Derby",
      objective: "Spiel **FC 25 Anstoß vor Ort mit jemandem, mit dem du früher Fußballspiele gespielt hast**. Wählt die Vereine, die immer gegeneinander antraten, und lasst euer altes Derby mit den heutigen Teams wiederkommen."
    }
  },
  {
    id: "fc25-coach-role-test",
    installments: [
      "fc-25"
    ],
    moods: [
      "progress",
      "focused"
    ],
    type: "objective",
    tags: [
      "story",
      "full-match"
    ],
    minutes: 25,
    minimum: 3,
    en: {
      name: "Coach the Role",
      objective: "In **FC 25 Manager Career with room and budget for a coach**, hire one who fits your tactical vision and a Role in your starting eleven. **Play the next match with that Role assigned**."
    },
    de: {
      name: "Der Coach zur Rolle",
      objective: "Hol in der **FC-25-Managerkarriere mit freiem Platz und Budget für einen Coach** jemanden, der zu deiner Taktik und einer Rolle deiner Startelf passt. **Spiel das nächste Match mit dieser Rolle vergeben**."
    }
  },
  {
    id: "fc25-realistic-evening",
    installments: [
      "fc-25"
    ],
    moods: [
      "relax"
    ],
    type: "inspiration",
    tags: [
      "story"
    ],
    minutes: 25,
    minimum: 3,
    en: {
      name: "Let the Match Breathe",
      objective: "Use **FC 25 Career’s Simulation gameplay preset** on a difficulty you find comfortable. Move the ball around with your familiar squad and let the gaps open at the match’s own pace."
    },
    de: {
      name: "Das Match laufen lassen",
      objective: "Nutze in der **FC-25-Karriere die Simulationseinstellung** auf einer angenehmen Schwierigkeit. Lass den Ball mit deinem vertrauten Team laufen und die Lücken im Tempo des Matches entstehen."
    }
  },
  {
    id: "fc26-event-response-fixture",
    installments: [
      "fc-26"
    ],
    moods: [
      "progress",
      "focused"
    ],
    type: "objective",
    tags: [
      "story",
      "full-match"
    ],
    minutes: 25,
    minimum: 3,
    en: {
      name: "Play the Consequence",
      objective: "In **FC 26 Manager Career with an Unexpected Event already active**, adjust your team sheet to its injury, fatigue, or squad change. **Play the next fixture with that adjustment**, keeping the result."
    },
    de: {
      name: "Die Folgen spielen",
      objective: "Passe in der **FC-26-Managerkarriere mit bereits aktivem unerwartetem Ereignis** die Aufstellung an Verletzungen, Müdigkeit oder die Kaderänderung an. **Spiel das nächste Match mit dieser Anpassung** und behalte das Ergebnis."
    }
  },
  {
    id: "fc26-manager-new-tactic",
    installments: [
      "fc-26"
    ],
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "story",
      "full-match"
    ],
    minutes: 25,
    minimum: 3,
    en: {
      name: "A New Manager Opposite",
      objective: "In an **FC 26 Manager Career where your next opponent has changed manager**, read their new tactical setup. **Play that fixture and compare their movement with the previous meeting**, without needing a win."
    },
    de: {
      name: "Ein neuer Coach gegenüber",
      objective: "Lies in einer **FC-26-Managerkarriere, in der der nächste Gegner den Coach gewechselt hat**, die neue Taktik. **Spiel das Match und vergleiche die Laufwege mit der letzten Begegnung**, ohne Siegpflicht."
    }
  },
  {
    id: "fc26-simulation-signing",
    installments: [
      "fc-26"
    ],
    moods: [
      "focused",
      "progress"
    ],
    type: "objective",
    tags: [
      "story"
    ],
    minutes: 25,
    minimum: 3,
    en: {
      name: "Scout by the Numbers",
      objective: "In **FC 26 Manager Career with Deeper Simulation enabled**, use simulated-league statistics to select a reachable transfer target rather than overall rating alone. **Shortlist that player and play your next fixture**."
    },
    de: {
      name: "Nach Zahlen scouten",
      objective: "Wähl in der **FC-26-Managerkarriere mit aktivierter tieferer Simulation** anhand von Ligastatistiken statt nur nach GES einen erreichbaren Transferkandidaten. **Setz ihn auf die Liste und spiel dein nächstes Match**."
    }
  },
  {
    id: "fc26-retro-icon-session",
    installments: [
      "fc-26"
    ],
    moods: [
      "nostalgic"
    ],
    type: "inspiration",
    tags: [
      "story"
    ],
    minutes: 30,
    minimum: 3,
    en: {
      name: "Your Season’s Icon",
      objective: "In an **FC 26 Manager Career with an ICON or Hero already available in your squad**, build a matchday around a player you remember watching. Let their position and style shape the football you want to play."
    },
    de: {
      name: "Deine Saison mit Ikone",
      objective: "Gestalte in einer **FC-26-Managerkarriere mit bereits verfügbarem ICON oder Hero im Kader** einen Spieltag um jemanden, dem du früher zugeschaut hast. Lass Position und Stil bestimmen, welchen Fußball du heute spielen magst."
    }
  },
  {
    id: "fc26-shortlist-job-style",
    installments: [
      "fc-26"
    ],
    moods: [
      "curious"
    ],
    type: "objective",
    tags: [
      "story"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Where Your Tactic Fits",
      objective: "In **FC 26 Manager Career**, inspect the Manager Market and shortlist an available job compatible with your Tactical Vision. **Play one fixture for your current club**, then check the shortlisted job’s status again."
    },
    de: {
      name: "Wo deine Taktik passt",
      objective: "Schau in der **FC-26-Managerkarriere** auf den Trainermarkt und merk dir einen verfügbaren Job, der zu deiner Taktik passt. **Spiel ein Match für deinen jetzigen Verein** und prüf den Job danach erneut."
    }
  },
  {
    id: "fc26-transfer-embargo-start",
    installments: [
      "fc-26"
    ],
    moods: [
      "challenge",
      "focused"
    ],
    type: "challenge",
    tags: [
      "story",
      "full-match"
    ],
    minutes: 30,
    minimum: 3,
    en: {
      name: "Start under the Embargo",
      objective: "Choose an **available FC 26 Manager Live challenge with a transfer embargo**. **Win its first fixture using the inherited squad**, or stop after that fixture’s result."
    },
    de: {
      name: "Start mit Transfersperre",
      objective: "Wähl eine **verfügbare FC-26-Manager-Live-Aufgabe mit Transfersperre**. **Gewinne das erste Match mit dem übernommenen Kader** oder hör nach seinem Ergebnis auf."
    }
  },
  {
    id: "fc26-womens-league-phase",
    installments: [
      "fc-26"
    ],
    moods: [
      "focused",
      "create"
    ],
    type: "creation",
    tags: [
      "full-match"
    ],
    minutes: 30,
    minimum: 3,
    en: {
      name: "Your League Phase",
      objective: "In **FC 26 Tournaments**, set up the Women’s Champions League with its 18-team League Phase. **Save your tournament and play its opening match**, using a women’s club you want to follow."
    },
    de: {
      name: "Deine Ligaphase",
      objective: "Leg in **FC 26 Turniere** die Women’s Champions League mit ihrer Ligaphase für 18 Teams an. **Speichere dein Turnier und spiel sein Auftaktmatch**, mit einem Frauenverein, dem du folgen möchtest."
    }
  },
  {
    id: "fc26-archetype-attribute",
    installments: [
      "fc-26"
    ],
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "abilities",
      "full-match"
    ],
    minutes: 25,
    minimum: 3,
    en: {
      name: "Another Archetype Job",
      objective: "In **FC 26 Player Career with Archetype points available**, put them into a skill outside your usual strength, such as passing for a scorer. **Play a complete match looking for that new job**, without requiring a stat increase."
    },
    de: {
      name: "Eine andere Archetyp-Aufgabe",
      objective: "Steck in der **FC-26-Spielerkarriere mit verfügbaren Archetyp-Punkten** Punkte außerhalb deiner üblichen Stärke hinein, etwa in Pässe als Torjäger. **Spiel ein vollständiges Match mit dieser neuen Aufgabe im Blick**, ohne geforderten Statistikzuwachs."
    }
  },
  {
    id: "fc26-sub-fatigue",
    installments: [
      "fc-26"
    ],
    moods: [
      "focused",
      "progress"
    ],
    type: "objective",
    tags: [
      "full-match"
    ],
    minutes: 25,
    minimum: 3,
    en: {
      name: "Use the Fresh Legs",
      objective: "In **FC 26 Manager Career on Authentic gameplay**, replace your most fatigued outfield starter with a fit substitute during the second half. **Finish the match and check the substitute’s match rating**."
    },
    de: {
      name: "Frische Beine nutzen",
      objective: "Ersetz in der **FC-26-Managerkarriere mit authentischem Spielstil** in Hälfte zwei den müdesten Feldspieler der Startelf durch einen fitten Ersatz. **Beende das Match und schau auf dessen Spielnote**."
    }
  },
  {
    id: "fc26-weather-crossing",
    installments: [
      "fc-26"
    ],
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "full-match",
      "vs-bots"
    ],
    minutes: 25,
    minimum: 3,
    en: {
      name: "Cross in the Wind",
      objective: "In **FC 26 Kick Off on Authentic gameplay with windy weather available**, try a high cross and a low cross from the same flank against the CPU. **Finish the match** and compare their paths."
    },
    de: {
      name: "Flanken im Wind",
      objective: "Probier in **FC 26 Anstoß mit authentischem Spielstil und verfügbarem windigem Wetter** gegen die CPU eine hohe und eine flache Flanke von derselben Seite. **Beende das Match** und vergleiche ihre Wege."
    }
  },
  {
    id: "fc26-close-control-turn",
    installments: [
      "fc-26"
    ],
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "full-match",
      "vs-bots"
    ],
    minutes: 25,
    minimum: 3,
    en: {
      name: "Turn before the Sprint",
      objective: "In **FC 26 Kick Off against the CPU**, receive the ball with a winger and make a close-control turn before sprinting into space. **Try that approach and finish the match**, comparing it with sprinting immediately."
    },
    de: {
      name: "Erst drehen, dann sprinten",
      objective: "Nimm in **FC 26 Anstoß gegen die CPU** den Ball mit einem Flügelspieler an und dreh eng, bevor du in den Raum sprintest. **Probier das und beende das Match**. Vergleiche es mit sofortigem Sprinten."
    }
  },
  {
    id: "fc26-keeper-playstyle",
    installments: [
      "fc-26"
    ],
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "abilities",
      "full-match"
    ],
    minutes: 25,
    minimum: 3,
    en: {
      name: "Play to the Keeper",
      objective: "In **FC 26 Kick Off**, choose a goalkeeper with a visible PlayStyle and read its effect. **Play a CPU match with that keeper and look for the stated situation**, without forcing a goal against you."
    },
    de: {
      name: "Für den Keeper spielen",
      objective: "Wähl in **FC 26 Anstoß** einen Torwart mit sichtbarem PlayStyle und lies seine Wirkung. **Spiel mit ihm gegen die CPU und achte auf die genannte Situation**, ohne ein Gegentor zu erzwingen."
    }
  },
  {
    id: "fc26-shield-and-release",
    installments: [
      "fc-26"
    ],
    moods: [
      "challenge",
      "focused"
    ],
    type: "challenge",
    tags: [
      "full-match",
      "three-attempts"
    ],
    minutes: 25,
    minimum: 3,
    en: {
      name: "Hold, Then Release",
      objective: "In **FC 26 Kick Off against the CPU**, **score after shielding the ball with your striker and laying it off to a teammate**. Finish that match, or stop after three full matches."
    },
    de: {
      name: "Halten und ablegen",
      objective: "**Triff in FC 26 Anstoß gegen die CPU, nachdem deine Spitze den Ball abgeschirmt und einem Mitspieler abgelegt hat**. Beende das Match nach dem Tor oder hör nach drei ganzen Matches auf."
    }
  },
  {
    id: "fc26-clubs-archetype-pair",
    installments: [
      "fc-26"
    ],
    moods: [
      "connect"
    ],
    type: "objective",
    tags: [
      "support",
      "full-match"
    ],
    minutes: 30,
    minimum: 3,
    en: {
      name: "Two Jobs for Clubs",
      objective: "With a friend in **FC 26 Clubs**, choose complementary unlocked Archetypes, such as Creator and Finisher. **Play one full Clubs match together**, looking for passes between your two roles."
    },
    de: {
      name: "Zwei Aufgaben im Club",
      objective: "Wählt mit einem Freund in **FC 26 Clubs** ergänzende freigeschaltete Archetypen, etwa Creator und Finisher. **Spielt ein ganzes Clubs-Match zusammen** und sucht Pässe zwischen euren beiden Rollen."
    }
  },
  {
    id: "fc26-rush-pass-signal",
    installments: [
      "fc-26"
    ],
    moods: [
      "connect"
    ],
    type: "objective",
    tags: [
      "support",
      "full-match"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Call the Pass",
      objective: "Play **FC 26 Clubs Rush with a friend** and agree on a call for passing into space. Use it when a run opens and **finish the match together**, whether the pass connects or not."
    },
    de: {
      name: "Den Pass ansagen",
      objective: "Spiel **FC 26 Clubs Rush mit einem Freund** und vereinbart einen Ruf für den Pass in den freien Raum. Nutzt ihn bei einer freien Laufbahn und **beendet das Match zusammen**, auch wenn der Pass nicht ankommt."
    }
  },
  {
    id: "fc26-evolve-owned-keeper",
    installments: [
      "fc-26"
    ],
    moods: [
      "progress"
    ],
    type: "objective",
    tags: [
      "cards",
      "full-match"
    ],
    minutes: 25,
    minimum: 3,
    en: {
      name: "Your Keeper’s Evolution",
      objective: "With an **available FC 26 Ultimate Team goalkeeper Evolution and an eligible owned keeper**, activate it. **Play one full match in its required mode with that keeper**, without spending on a new item."
    },
    de: {
      name: "Die Evolution deines Keepers",
      objective: "Aktivier in **FC 26 Ultimate Team eine verfügbare Torwart-Evolution mit einem passenden vorhandenen Keeper**. **Spiel mit ihm ein ganzes Match im geforderten Modus**, ohne ein neues Item zu kaufen."
    }
  },
  {
    id: "fc26-squad-battle-roles",
    installments: [
      "fc-26"
    ],
    moods: [
      "focused",
      "create"
    ],
    type: "creation",
    tags: [
      "cards",
      "vs-bots"
    ],
    minutes: 25,
    minimum: 3,
    en: {
      name: "Roles for the Squad",
      objective: "In **FC 26 Ultimate Team**, build and save a squad from owned items with familiar Roles for your midfield. **Complete one Squad Battles match with that squad**, keeping the difficulty comfortable."
    },
    de: {
      name: "Rollen für dein Team",
      objective: "Bau und speichere in **FC 26 Ultimate Team** aus vorhandenen Items ein Team mit vertrauten Rollen fürs Mittelfeld. **Beende damit ein Squad-Battles-Match** auf angenehmer Schwierigkeit."
    }
  },
  {
    id: "fc26-gauntlet-first-match",
    installments: [
      "fc-26"
    ],
    moods: [
      "challenge"
    ],
    type: "inspiration",
    tags: [
      "cards"
    ],
    minutes: 30,
    minimum: 3,
    en: {
      name: "Into the Gauntlet",
      objective: "If **FC 26 Ultimate Team Gauntlet is available and you already have eligible squads**, enter with the squad you trust first. Let the mode’s squad changes make you rethink which players you want ready next."
    },
    de: {
      name: "In den Gauntlet",
      objective: "Starte **FC 26 Ultimate Team Gauntlet, wenn er verfügbar ist und du schon passende Teams besitzt**, mit deinem vertrautesten Team. Lass die Teamwechsel des Modus bestimmen, wen du als Nächstes bereithalten magst."
    }
  },
  {
    id: "fc26-authentic-sliders",
    installments: [
      "fc-26"
    ],
    moods: [
      "create",
      "focused"
    ],
    type: "creation",
    tags: [
      "loadout",
      "full-match"
    ],
    minutes: 30,
    minimum: 3,
    en: {
      name: "Your Authentic Pace",
      objective: "In **FC 26**, start custom gameplay sliders from the Authentic values and change one setting that affects passing. **Save them and play a complete CPU Kick Off match**, then decide whether to keep the change."
    },
    de: {
      name: "Dein authentisches Tempo",
      objective: "Nimm in **FC 26** die authentischen Werte als Basis eigener Spielregler und ändere einen Wert fürs Passspiel. **Speichere sie und spiel ein ganzes Anstoßmatch gegen die CPU**. Entscheide danach, ob du die Änderung behältst."
    }
  },
  {
    id: "fc26-familiar-home-game",
    installments: [
      "fc-26"
    ],
    moods: [
      "relax",
      "overwhelmed"
    ],
    type: "inspiration",
    tags: [
      "story"
    ],
    minutes: 25,
    minimum: 3,
    en: {
      name: "The Home Fixture",
      objective: "Load an **FC 26 Manager Career you already know**, with Authentic gameplay on a comfortable difficulty. Stay with your usual lineup for a home fixture and let the familiar stadium set the session’s pace."
    },
    de: {
      name: "Das Heimspiel",
      objective: "Lad eine **vertraute FC-26-Managerkarriere** mit authentischem Spielstil auf angenehmer Schwierigkeit. Bleib fürs Heimspiel bei deiner gewohnten Elf und lass das bekannte Stadion das Tempo der Session setzen."
    }
  },
  {
    id: "fc27-bocce-ring-choice",
    installments: [
      "fc-27"
    ],
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [],
    minutes: 15,
    minimum: 2,
    en: {
      name: "Ring or Target",
      objective: "In **FC 27 The Grounds on PS5, Xbox Series, PC, or Switch 2**, play Bocce Ball. **Try sending a ball through a ring and placing another inside a target, then finish all rounds** and compare the scoring routes."
    },
    de: {
      name: "Ring oder Ziel",
      objective: "Spiel in **FC 27 The Grounds auf PS5, Xbox Series, PC oder Switch 2** Bocce Ball. **Probier einen Ball durch einen Ring und einen ins Zielfeld und beende alle Runden**. Vergleiche die Punktewege."
    }
  },
  {
    id: "fc27-keepaway-one-touch",
    installments: [
      "fc-27"
    ],
    moods: [
      "connect"
    ],
    type: "objective",
    tags: [
      "support",
      "full-match"
    ],
    minutes: 15,
    minimum: 2,
    en: {
      name: "Keep It Moving",
      objective: "With a friend in **FC 27 The Grounds on PS5, Xbox Series, PC, or Switch 2**, play Team Keepaway. Try returning a pass first-time and **complete the match together**, even if intercepted."
    },
    de: {
      name: "Den Ball laufen lassen",
      objective: "Spiel mit einem Freund in **FC 27 The Grounds auf PS5, Xbox Series, PC oder Switch 2** Team Keepaway. Probier einen direkten Rückpass und **beendet das Match zusammen**, auch bei einem abgefangenen Pass."
    }
  },
  {
    id: "fc27-big-race-track",
    installments: [
      "fc-27"
    ],
    moods: [
      "restless",
      "focused"
    ],
    type: "objective",
    tags: [
      "racing"
    ],
    minutes: 15,
    minimum: 2,
    en: {
      name: "Dribble the Course",
      objective: "In **FC 27 The Grounds on PS5, Xbox Series, PC, or Switch 2**, enter The Big Race. Follow the gates with the ball and **play all three races through the results**, whatever your placing."
    },
    de: {
      name: "Den Kurs dribbeln",
      objective: "Starte in **FC 27 The Grounds auf PS5, Xbox Series, PC oder Switch 2** The Big Race. Dribbel durch die Tore und **spiel alle drei Rennen bis zum Ergebnis**, unabhängig von der Platzierung."
    }
  },
  {
    id: "fc27-bucket-lob",
    installments: [
      "fc-27"
    ],
    moods: [
      "curious"
    ],
    type: "experiment",
    tags: [
      "new-approach",
      "full-match"
    ],
    minutes: 15,
    minimum: 2,
    en: {
      name: "Lob toward the Hoop",
      objective: "In **FC 27 The Grounds on PS5, Xbox Series, PC, or Switch 2**, play Bucket Ball. **Try a precision lob toward the opponent’s hoop and finish the match**, comparing the arc with an ordinary football shot."
    },
    de: {
      name: "Ein Lob zum Korb",
      objective: "Spiel in **FC 27 The Grounds auf PS5, Xbox Series, PC oder Switch 2** Bucket Ball. **Probier einen gezielten Lob zum gegnerischen Korb und beende das Match**. Vergleiche den Bogen mit einem normalen Fußballschuss."
    }
  },
  {
    id: "fc27-balloon-bank",
    installments: [
      "fc-27"
    ],
    moods: [
      "challenge",
      "restless"
    ],
    type: "challenge",
    tags: [
      "three-attempts"
    ],
    minutes: 15,
    minimum: 2,
    en: {
      name: "Pop from Cover",
      objective: "In **FC 27 The Grounds on PS5, Xbox Series, PC, or Switch 2**, play Balloon Ball and **pop an opponent’s balloon while shooting from beside an obstacle**. Finish the game, or stop after three complete games."
    },
    de: {
      name: "Aus der Deckung platzen",
      objective: "Spiel in **FC 27 The Grounds auf PS5, Xbox Series, PC oder Switch 2** Balloon Ball und **lass beim Schuss neben einem Hindernis einen gegnerischen Ballon platzen**. Beende das Spiel oder hör nach drei ganzen Spielen auf."
    }
  },
  {
    id: "fc27-goal-control-switch",
    installments: [
      "fc-27"
    ],
    moods: [
      "focused",
      "curious"
    ],
    type: "experiment",
    tags: [
      "full-match"
    ],
    minutes: 15,
    minimum: 2,
    en: {
      name: "Turn Their Goal",
      objective: "In **FC 27 The Grounds on PS5, Xbox Series, PC, or Switch 2**, play Goal Control. Look for an opponent-owned goal to take over and **finish all rounds**, whether your shot changed its colour or not."
    },
    de: {
      name: "Ihr Tor übernehmen",
      objective: "Spiel in **FC 27 The Grounds auf PS5, Xbox Series, PC oder Switch 2** Goal Control. Such ein gegnerisches Tor zum Übernehmen und **beende alle Runden**, auch wenn dein Schuss die Farbe nicht ändert."
    }
  },
  {
    id: "fc27-world-target-tour",
    installments: [
      "fc-27"
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
      name: "Targets in the Street",
      objective: "In **FC 27 The Grounds on PS5, Xbox Series, PC, or Switch 2**, walk from the Terrace into an unfamiliar district. **Find an in-world Drop Kick Target and try a shot at it**, without buying anything."
    },
    de: {
      name: "Ziele in der Straße",
      objective: "Lauf in **FC 27 The Grounds auf PS5, Xbox Series, PC oder Switch 2** von der Terrace in ein unbekanntes Viertel. **Finde ein Drop-Kick-Ziel in der Welt und probier einen Schuss darauf**, ohne etwas zu kaufen."
    }
  },
  {
    id: "fc27-scenario-duo",
    installments: [
      "fc-27"
    ],
    moods: [
      "connect",
      "focused"
    ],
    type: "objective",
    tags: [
      "co-op",
      "full-match"
    ],
    minutes: 15,
    minimum: 2,
    en: {
      name: "Read the Scenario Together",
      objective: "With a friend in **FC 27 The Grounds on PS5, Xbox Series, PC, or Switch 2**, enter Attacking Scenarios. Read each round’s scoring rule together and **play the full match**, including a tiebreak if needed."
    },
    de: {
      name: "Das Szenario zusammen lesen",
      objective: "Startet mit einem Freund in **FC 27 The Grounds auf PS5, Xbox Series, PC oder Switch 2** Attacking Scenarios. Lest die Torregel jeder Runde zusammen und **spielt das ganze Match**, samt nötigem Entscheidungsspiel."
    }
  },
  {
    id: "fc27-two-versus-space",
    installments: [
      "fc-27"
    ],
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "full-match"
    ],
    minutes: 15,
    minimum: 2,
    en: {
      name: "The Keeper Is Missing",
      objective: "In **FC 27 The Grounds on PS5, Xbox Series, PC, or Switch 2**, enter a 2v2 Small-sided match. Try a pass across the keeperless goal before shooting and **finish the match**, comparing the space with 11v11."
    },
    de: {
      name: "Der Keeper fehlt",
      objective: "Starte in **FC 27 The Grounds auf PS5, Xbox Series, PC oder Switch 2** ein 2-gegen-2-Small-sided-Match. Probier vor dem Schuss einen Querpass vor dem Tor ohne Keeper und **beende das Match**. Vergleiche den Raum mit 11 gegen 11."
    }
  },
  {
    id: "fc27-street-outfit",
    installments: [
      "fc-27"
    ],
    moods: [
      "create",
      "relax"
    ],
    type: "creation",
    tags: [
      "outfit"
    ],
    minutes: 15,
    minimum: 2,
    en: {
      name: "Street and Stadium",
      objective: "In **FC 27 The Grounds on PS5, Xbox Series, PC, or Switch 2**, use owned clothing to make different street and stadium looks. **Save both and walk into your Clubhouse wearing the street look**."
    },
    de: {
      name: "Straße und Stadion",
      objective: "Bau in **FC 27 The Grounds auf PS5, Xbox Series, PC oder Switch 2** mit vorhandener Kleidung unterschiedliche Straßen- und Stadionoutfits. **Speichere beide und geh im Straßenoutfit ins Clubhouse**."
    }
  },
  {
    id: "fc27-archetype-small-tweak",
    installments: [
      "fc-27"
    ],
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "abilities",
      "full-match"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Move One Attribute",
      objective: "In **FC 27 Clubs on PS5, Xbox Series, PC, or Switch 2**, use the free Archetype adjustment to move one attribute allocation toward passing. **Finish a Rush match with the change** and compare your passes."
    },
    de: {
      name: "Einen Wert verschieben",
      objective: "Verschieb in **FC 27 Clubs auf PS5, Xbox Series, PC oder Switch 2** mit der kostenlosen Archetyp-Anpassung eine Werteverteilung Richtung Pässe. **Beende damit ein Rush-Match** und vergleiche dein Passspiel."
    }
  },
  {
    id: "fc27-owned-amp-test",
    installments: [
      "fc-27"
    ],
    moods: [
      "focused",
      "curious"
    ],
    type: "experiment",
    tags: [
      "abilities",
      "full-match"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Try Your Amp",
      objective: "With an **owned Amp in FC 27 Clubs on PS5, Xbox Series, PC, or Switch 2**, read its effect and equip it. **Play a Stadium or in-world Rush match where it applies**, looking for that effect without buying another."
    },
    de: {
      name: "Den vorhandenen Amp nutzen",
      objective: "Lies die Wirkung eines **vorhandenen Amps in FC 27 Clubs auf PS5, Xbox Series, PC oder Switch 2** und rüste ihn aus. **Spiel ein Stadion- oder In-World-Rush-Match, in dem er wirkt**, ohne einen weiteren zu kaufen."
    }
  },
  {
    id: "fc27-create-recovery-scenario",
    installments: [
      "fc-27"
    ],
    moods: [
      "create",
      "focused"
    ],
    type: "creation",
    tags: [
      "story"
    ],
    minutes: 30,
    minimum: 5,
    en: {
      name: "Build a Recovery Challenge",
      objective: "In **FC 27 Manager Live Creator**, set a club, a short timeline, and a table-position objective for a recovery scenario. **Save the challenge and play its opening fixture**, keeping it private for now."
    },
    de: {
      name: "Eine Aufholaufgabe bauen",
      objective: "Leg in **FC 27 Manager Live Creator** Verein, kurzen Zeitraum und Tabellenziel für ein Aufholszenario fest. **Speichere die Aufgabe und spiel ihr Auftaktmatch**. Behalte sie vorerst privat."
    }
  },
  {
    id: "fc27-reserves-practice",
    installments: [
      "fc-27"
    ],
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "full-match",
      "vs-bots"
    ],
    minutes: 25,
    minimum: 3,
    en: {
      name: "First Team, Meet Reserves",
      objective: "Open the **FC 27 Manager Career Practice Arena** and use your starting eleven against the reserves. **Finish an 11v11 practice match with one reserve moved into the first team** and see where they fit."
    },
    de: {
      name: "Erste Elf gegen Reserve",
      objective: "Öffne die **Trainingsarena der FC-27-Managerkarriere** und lass Startelf gegen Reserve spielen. **Beende ein 11-gegen-11-Trainingsmatch mit einem Reservespieler in der Startelf** und schau, wo er passt."
    }
  },
  {
    id: "fc27-future-transfer-plan",
    installments: [
      "fc-27"
    ],
    moods: [
      "focused",
      "curious"
    ],
    type: "experiment",
    tags: [
      "trading"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Spread the Fee",
      objective: "In **FC 27 Manager Career with a transfer negotiation already open**, propose installments instead of paying the whole fee now. **Submit one proposal and inspect its future costs**, whether accepted or rejected."
    },
    de: {
      name: "Die Ablöse verteilen",
      objective: "Biete in der **FC-27-Managerkarriere mit bereits offener Transferverhandlung** Raten statt der vollen sofortigen Ablöse an. **Reich einen Vorschlag ein und prüf seine späteren Kosten**, auch bei Ablehnung."
    }
  },
  {
    id: "fc27-contract-role-fixture",
    installments: [
      "fc-27"
    ],
    moods: [
      "progress",
      "focused"
    ],
    type: "objective",
    tags: [
      "story",
      "full-match"
    ],
    minutes: 25,
    minimum: 3,
    en: {
      name: "Keep the Squad Promise",
      objective: "In **FC 27 Manager Career**, read an existing player’s contract squad role and select one whose promised playing time you can honour. **Start that player in the next fixture and complete the match**."
    },
    de: {
      name: "Das Kaderversprechen halten",
      objective: "Lies in der **FC-27-Managerkarriere** die vertragliche Kaderrolle eines vorhandenen Spielers und wähl jemanden, dessen Spielzeitversprechen du erfüllen kannst. **Lass ihn im nächsten Match starten und spiel es zu Ende**."
    }
  },
  {
    id: "fc27-form-last-season",
    installments: [
      "fc-27"
    ],
    moods: [
      "focused",
      "curious"
    ],
    type: "experiment",
    tags: [
      "story",
      "full-match"
    ],
    minutes: 25,
    minimum: 3,
    en: {
      name: "This Season, Last Season",
      objective: "In an **FC 27 Manager Career with a previous season recorded in Deeper Simulation**, compare a transfer target’s old and current-season statistics. **Shortlist them or remove them, then play your next fixture**."
    },
    de: {
      name: "Diese und letzte Saison",
      objective: "Vergleiche in einer **FC-27-Managerkarriere mit erfasster Vorsaison in der tieferen Simulation** alte und aktuelle Saisonstatistiken eines Transferkandidaten. **Setz ihn auf die Liste oder streich ihn und spiel dein nächstes Match**."
    }
  },
  {
    id: "fc27-renewal-budget",
    installments: [
      "fc-27"
    ],
    moods: [
      "overwhelmed",
      "progress"
    ],
    type: "objective",
    tags: [
      "story"
    ],
    minutes: 15,
    minimum: 2,
    en: {
      name: "The Next Contract",
      objective: "Open **FC 27 Manager Career Contracts & Clauses** and find an expiring deal in your current squad. **Make one renewal offer within your wage budget**, then leave the menu without reviewing the entire squad."
    },
    de: {
      name: "Der nächste Vertrag",
      objective: "Such in **Verträgen und Klauseln der FC-27-Managerkarriere** einen auslaufenden Vertrag im aktuellen Kader. **Mach ein Verlängerungsangebot innerhalb deines Gehaltsbudgets** und verlass das Menü, ohne den ganzen Kader durchzugehen."
    }
  },
  {
    id: "fc27-hunter-return",
    installments: [
      "fc-27"
    ],
    moods: [
      "nostalgic"
    ],
    type: "inspiration",
    tags: [
      "story"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Alex Hunter Again",
      objective: "On **FC 27 The Grounds for PS5, Xbox Series, PC, or Switch 2**, revisit Alex Hunter if you remember The Journey. Let his challenges and the streets nearby bring back that early-career football feeling."
    },
    de: {
      name: "Wieder Alex Hunter",
      objective: "Besuch in **FC 27 The Grounds auf PS5, Xbox Series, PC oder Switch 2** Alex Hunter, wenn du The Journey noch kennst. Lass seine Aufgaben und die Straßen drumherum das Gefühl der frühen Fußballkarriere zurückbringen."
    }
  },
  {
    id: "fc27-football-park",
    installments: [
      "fc-27"
    ],
    moods: [
      "relax",
      "explore"
    ],
    type: "inspiration",
    tags: [
      "free-roam"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "The Parkside Walk",
      objective: "In **FC 27 The Grounds on PS5, Xbox Series, PC, or Switch 2**, spend the session around Parkside’s streets and park. Follow the football spaces that look inviting and drop into a kickabout whenever you feel like it."
    },
    de: {
      name: "Rundgang durch Parkside",
      objective: "Verbring in **FC 27 The Grounds auf PS5, Xbox Series, PC oder Switch 2** die Session in Parksides Straßen und Park. Folge den Fußballplätzen, die dich ansprechen, und steig bei Lust in einen Kickabout ein."
    }
  }
]);
