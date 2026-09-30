import { defineGameQuests } from "../defineGameQuests";

export const gtaQuests = defineGameQuests("gta", [
  {
    id: "sa-road-signs",
    installments: ["gta-sa"],
    moods: ["explore", "nostalgic"],
    type: "objective",
    tags: ["driving", "no-fast-travel"],
    minutes: 25,
    minimum: 5,
    en: {
      name: "Read the Road Signs",
      objective:
        "In **GTA: San Andreas**, after the countryside unlocks, start at Grove Street with a car and turn the radar off. **Drive to the Blueberry town sign using road signs and landmarks**, staying on roads and keeping the same car.",
    },
    de: {
      name: "Den Schildern nach",
      objective:
        "Starte in **GTA: San Andreas** nach Freischaltung des Umlands mit einem Auto in der Grove Street und schalte das Radar aus. **Fahre anhand von Straßenschildern und Orientierungspunkten zum Ortsschild von Blueberry**. Bleib auf Straßen und nutze dasselbe Auto.",
    },
  },
  {
    id: "iv-bowling-pickup",
    installments: ["gta-iv"],
    moods: ["relax", "nostalgic"],
    type: "objective",
    tags: ["driving", "one-round"],
    minutes: 25,
    minimum: 5,
    en: {
      name: "Pick Them Up",
      objective:
        "In **GTA IV story mode**, call an available friend for bowling. Pick them up yourself, drive to the alley without gaining a wanted level, and **finish one full bowling game before driving them home**. Use no taxi skips.",
    },
    de: {
      name: "Bowling mit Abholung",
      objective:
        "Ruf im **Story-Modus von GTA IV** einen verfügbaren Freund zum Bowling an. Hol ihn selbst ab, fahr ohne Fahndungssterne zur Bahn und **spiel eine ganze Partie, bevor du ihn nach Hause bringst**. Überspring die Fahrt nicht mit einem Taxi.",
    },
  },
  {
    id: "v-taxi-shift",
    installments: ["gta-v"],
    moods: ["focused", "challenge"],
    type: "challenge",
    tags: ["driving", "current-save"],
    minutes: 25,
    minimum: 5,
    en: {
      name: "Three Fares",
      objective:
        "In **GTA V story mode**, start taxi work in a taxi. **Deliver three fares in the same car without disabling it or gaining a wanted level**. Stop fully at each destination before the passenger exits. End the shift after success or when the taxi can no longer continue.",
    },
    de: {
      name: "Drei Fahrgäste",
      objective:
        "Steig im **Story-Modus von GTA V** in ein Taxi und nimm Fahraufträge an. **Bring drei Fahrgäste im selben Wagen ans Ziel, ohne Fahndungssterne zu bekommen oder das Taxi fahruntüchtig zu machen**. Halt an jedem Ziel vollständig an. Danach ist deine Schicht vorbei.",
    },
  },
  {
    id: "v-return-to-story",
    installments: ["gta-v"],
    moods: ["progress", "overwhelmed", "nostalgic"],
    type: "inspiration",
    tags: ["current-save", "story"],
    minutes: 30,
    minimum: 5,
    en: {
      name: "Back to Los Santos",
      objective:
        "Return to an unfinished **GTA V story save where character switching is unlocked**. Check in with each available protagonist, then **follow one story lead that interests you**.",
    },
    de: {
      name: "Zurück in Los Santos",
      objective:
        "Lade einen noch nicht beendeten **GTA-V-Story-Spielstand mit freigeschaltetem Figurenwechsel**. Schau bei allen verfügbaren Hauptfiguren vorbei und **spiel dann die Story-Mission weiter, auf die du am meisten Lust hast**.",
    },
  },
  {
    id: "sa-roboi-courier",
    installments: [
      "gta-sa"
    ],
    moods: [
      "restless",
      "progress"
    ],
    type: "objective",
    tags: [
      "driving"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Roboi’s Delivery",
      objective: "At Roboi’s Food Mart in **GTA: San Andreas**, mount its courier bicycle. **Complete the first delivery level and return to the store** with the packages delivered."
    },
    de: {
      name: "Lieferung für Roboi",
      objective: "Steig in **GTA: San Andreas** bei Roboi’s Food Mart auf das Kurierfahrrad. **Fahr die erste Lieferstufe zu Ende und kehr mit zugestellten Paketen zum Laden zurück**."
    }
  },
  {
    id: "sa-night-burglary",
    installments: [
      "gta-sa"
    ],
    moods: [
      "focused",
      "challenge"
    ],
    type: "challenge",
    tags: [
      "stealth",
      "one-life"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "One Quiet House",
      objective: "During burglary hours in **GTA: San Andreas**, start the job in a suitable Boxville. **Steal two items from one house without waking its residents and deliver them to the lockup**. One attempt, ending if the alarm sounds."
    },
    de: {
      name: "Ein leises Haus",
      objective: "Starte in **GTA: San Andreas** während der Einbruchszeit im passenden Boxville den Job. **Stiehl zwei Gegenstände aus einem Haus, ohne Bewohner zu wecken, und liefere sie im Lager ab**. Ein Versuch, bei Alarm ist Schluss."
    }
  },
  {
    id: "sa-freight-first-stop",
    installments: [
      "gta-sa"
    ],
    moods: [
      "focused",
      "challenge"
    ],
    type: "challenge",
    tags: [
      "driving",
      "three-attempts"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Brake for the Station",
      objective: "Once all three cities are open in **GTA: San Andreas**, start Freight in a train. **Complete the first timed station delivery without derailing**, or stop after three runs."
    },
    de: {
      name: "Bremsen für den Bahnhof",
      objective: "Starte in **GTA: San Andreas** bei drei freigeschalteten Städten den Frachtjob im Zug. **Schaff die erste zeitbegrenzte Bahnhofslieferung ohne Entgleisen** oder hör nach drei Fahrten auf."
    }
  },
  {
    id: "sa-trucker-load",
    installments: [
      "gta-sa"
    ],
    moods: [
      "focused",
      "progress"
    ],
    type: "objective",
    tags: [
      "driving"
    ],
    minutes: 25,
    minimum: 5,
    en: {
      name: "RS Haul’s Next Load",
      objective: "With RS Haul trucking unlocked in **GTA: San Andreas**, take the next available delivery. **Deliver the trailer under that job’s stated conditions**, keeping it attached until the drop-off."
    },
    de: {
      name: "Die nächste Ladung",
      objective: "Nimm in **GTA: San Andreas** bei freigeschaltetem RS-Haul-Transport den nächsten verfügbaren Auftrag an. **Liefere den Anhänger nach den Bedingungen des Auftrags ab** und lass ihn bis dahin angehängt."
    }
  },
  {
    id: "sa-quarry-next-task",
    installments: [
      "gta-sa"
    ],
    moods: [
      "restless",
      "progress"
    ],
    type: "objective",
    tags: [
      "driving"
    ],
    minutes: 25,
    minimum: 5,
    en: {
      name: "Work the Quarry",
      objective: "With quarry jobs unlocked in **GTA: San Andreas**, take the next job at Hunter Quarry. **Finish its marked vehicle task**, whether it calls for the dozer or dump truck."
    },
    de: {
      name: "Arbeit im Steinbruch",
      objective: "Nimm in **GTA: San Andreas** bei freigeschalteten Steinbruchjobs den nächsten Auftrag in Hunter Quarry an. **Erledige seine markierte Fahrzeugaufgabe** mit dem geforderten Bulldozer oder Muldenkipper."
    }
  },
  {
    id: "sa-valet-level",
    installments: [
      "gta-sa"
    ],
    moods: [
      "focused",
      "challenge"
    ],
    type: "challenge",
    tags: [
      "driving",
      "three-attempts"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Park Their Cars",
      objective: "With valet work unlocked in **GTA: San Andreas**, wear the valet uniform at the Vank Hoff Hotel. **Pass one parking level without damaging a guest car**, or stop after three shifts."
    },
    de: {
      name: "Ihre Wagen parken",
      objective: "Trag in **GTA: San Andreas** bei freigeschaltetem Einparkjob am Vank-Hoff-Hotel die Parkservice-Uniform. **Schaff eine Stufe ohne Schaden an Gästewagen** oder hör nach drei Schichten auf."
    }
  },
  {
    id: "sa-vigilante-first-wave",
    installments: [
      "gta-sa"
    ],
    moods: [
      "restless",
      "focused"
    ],
    type: "objective",
    tags: [
      "driving"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "First Pursuit",
      objective: "Start Vigilante in an eligible law-enforcement vehicle in **GTA: San Andreas**. **Clear the first level’s marked criminals** before ending the job."
    },
    de: {
      name: "Die erste Verfolgung",
      objective: "Starte in **GTA: San Andreas** in einem passenden Polizeifahrzeug den Bürgerwehrjob. **Schalte die markierten Kriminellen der ersten Stufe aus**, bevor du den Job beendest."
    }
  },
  {
    id: "sa-bmx-checkpoints",
    installments: [
      "gta-sa"
    ],
    moods: [
      "restless",
      "challenge"
    ],
    type: "challenge",
    tags: [
      "traversal",
      "three-attempts"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Bunny-Hop the Park",
      objective: "With enough cycling skill for the high checkpoints in **GTA: San Andreas**, enter the Glen Park BMX challenge. **Collect every checkpoint before the timer ends**, or stop after three runs."
    },
    de: {
      name: "Sprünge im Skatepark",
      objective: "Starte in **GTA: San Andreas** mit genug Radfahrfähigkeit für die hohen Checkpoints die BMX-Challenge in Glen Park. **Hol alle Checkpoints vor Ablauf des Timers** oder hör nach drei Läufen auf."
    }
  },
  {
    id: "sa-nrg-dock",
    installments: [
      "gta-sa"
    ],
    moods: [
      "focused",
      "challenge"
    ],
    type: "challenge",
    tags: [
      "driving",
      "three-attempts"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Across the Dry Dock",
      objective: "Once San Fierro is accessible in **GTA: San Andreas**, mount the NRG-500 challenge bike at Easter Basin. **Finish its dry-dock checkpoint course**, or stop after three runs."
    },
    de: {
      name: "Über das Trockendock",
      objective: "Steig in **GTA: San Andreas** bei zugänglichem San Fierro auf die NRG-500 der Challenge in Easter Basin. **Schaff den Checkpointkurs durchs Trockendock** oder hör nach drei Läufen auf."
    }
  },
  {
    id: "sa-basketball-three-spots",
    installments: [
      "gta-sa"
    ],
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
      name: "Around the Hoop",
      objective: "On a version of **GTA: San Andreas** with playable basketball, use a court near Grove Street. **Score from three different positions**, or stop after three shots at each position."
    },
    de: {
      name: "Rund um den Korb",
      objective: "Spiel in einer Version von **GTA: San Andreas** mit Basketball auf einem Platz bei Grove Street. **Triff von drei unterschiedlichen Stellen** oder hör nach drei Würfen pro Stelle auf."
    }
  },
  {
    id: "sa-arcade-space-monkey",
    installments: [
      "gta-sa"
    ],
    moods: [
      "nostalgic",
      "low-energy"
    ],
    type: "inspiration",
    tags: [
      "replay"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Go Go Space Monkey",
      objective: "Find a playable Go Go Space Monkey arcade cabinet in **GTA: San Andreas**. Spend a little time with its tiny shooter instead of CJ’s next mission."
    },
    de: {
      name: "Go Go Space Monkey",
      objective: "Such in **GTA: San Andreas** einen spielbaren Go-Go-Space-Monkey-Automaten. Verbring etwas Zeit mit dem kleinen Shooter statt mit CJs nächster Mission."
    }
  },
  {
    id: "sa-tattoo-visible",
    installments: [
      "gta-sa"
    ],
    moods: [
      "create"
    ],
    type: "creation",
    tags: [
      "outfit"
    ],
    minutes: 10,
    minimum: 2,
    en: {
      name: "Ink for CJ",
      objective: "After tattoo shops unlock in **GTA: San Andreas**, choose a tattoo you can afford. **Apply it and put on clothes that leave it visible**."
    },
    de: {
      name: "Tinte für CJ",
      objective: "Wähle in **GTA: San Andreas** bei freigeschalteten Tattoo-Läden ein bezahlbares Tattoo. **Lass es stechen und zieh Kleidung an, die es zeigt**."
    }
  },
  {
    id: "sa-transfender-build",
    installments: [
      "gta-sa"
    ],
    moods: [
      "create",
      "progress"
    ],
    type: "creation",
    tags: [
      "driving"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Your TransFender Car",
      objective: "With TransFender unlocked in **GTA: San Andreas**, bring a supported car and enough cash. **Fit a visual modification and keep the customized car in a safehouse garage**."
    },
    de: {
      name: "Dein TransFender-Wagen",
      objective: "Bring in **GTA: San Andreas** bei freigeschaltetem TransFender ein unterstütztes Auto und genug Geld mit. **Baue eine sichtbare Änderung ein und stell den Wagen in deine Garage**."
    }
  },
  {
    id: "sa-flight-loop",
    installments: [
      "gta-sa"
    ],
    moods: [
      "focused",
      "challenge"
    ],
    type: "challenge",
    tags: [
      "traversal",
      "three-attempts"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Loop over the Desert",
      objective: "With flying school and its Loop-the-Loop lesson unlocked in **GTA: San Andreas**, **earn at least silver on that lesson**, or stop after three flights."
    },
    de: {
      name: "Looping über der Wüste",
      objective: "Versuch in **GTA: San Andreas** bei freigeschalteter Flugschule und Looping-Lektion, **mindestens Silber in dieser Lektion zu holen**. Hör nach dem Erfolg oder drei Flügen auf."
    }
  },
  {
    id: "sa-boat-school-air",
    installments: [
      "gta-sa"
    ],
    moods: [
      "curious"
    ],
    type: "experiment",
    tags: [
      "driving"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Boat in the Air",
      objective: "With boat school accessible in **GTA: San Andreas**, take the Flying Fish lesson. **Complete one attempt and compare its landing with the displayed medal requirement**. A medal is optional."
    },
    de: {
      name: "Boot in der Luft",
      objective: "Starte in **GTA: San Andreas** bei zugänglicher Bootsschule die Flying-Fish-Lektion. **Beende einen Versuch und vergleiche die Landung mit der angezeigten Medaillenanforderung**. Eine Medaille brauchst du nicht."
    }
  },
  {
    id: "sa-chiliad-descent",
    installments: [
      "gta-sa"
    ],
    moods: [
      "restless",
      "explore"
    ],
    type: "inspiration",
    tags: [
      "traversal"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Down Mount Chiliad",
      objective: "Once the countryside is accessible in **GTA: San Andreas**, take a mountain bike to Mount Chiliad’s summit. Ride down its dirt tracks and enjoy the descent without entering a race."
    },
    de: {
      name: "Den Mount Chiliad hinunter",
      objective: "Bring in **GTA: San Andreas** bei freigeschaltetem Umland ein Mountainbike auf den Mount Chiliad. Fahr über die Feldwege hinunter und genieß die Abfahrt ohne Rennstart."
    }
  },
  {
    id: "sa-jetpack-airfield",
    installments: [
      "gta-sa"
    ],
    moods: [
      "explore",
      "curious"
    ],
    type: "inspiration",
    tags: [
      "traversal"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Above Verdant Meadows",
      objective: "After the jetpack is unlocked in **GTA: San Andreas**, lift off at Verdant Meadows. Explore the nearby desert from above and settle where a rock formation catches your eye."
    },
    de: {
      name: "Über Verdant Meadows",
      objective: "Starte in **GTA: San Andreas** mit freigeschaltetem Jetpack in Verdant Meadows. Erkunde die Wüste von oben und lande dort, wo dir eine Felsformation auffällt."
    }
  },
  {
    id: "sa-grove-recruits",
    installments: [
      "gta-sa"
    ],
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "support"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Take the Grove Along",
      objective: "With gang recruitment unlocked in **GTA: San Andreas**, recruit two available Grove Street members. **Take them to a small hostile gang encounter and fight alongside them**, then return any survivors to Grove Street."
    },
    de: {
      name: "Die Grove kommt mit",
      objective: "Wirb in **GTA: San Andreas** mit freigeschalteter Gangrekrutierung zwei verfügbare Grove-Street-Mitglieder an. **Nimm sie zu einer kleinen feindlichen Gangbegegnung mit und kämpf mit ihnen**. Bring Überlebende zur Grove Street zurück."
    }
  },
  {
    id: "sa-export-owned-car",
    installments: [
      "gta-sa"
    ],
    moods: [
      "progress",
      "focused"
    ],
    type: "objective",
    tags: [
      "driving",
      "trading"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Export Your Car",
      objective: "With import/export unlocked in **GTA: San Andreas**, choose a requested vehicle already in your garage or nearby. **Deliver it to the Easter Basin ship and complete the export**."
    },
    de: {
      name: "Ein Wagen fürs Schiff",
      objective: "Wähle in **GTA: San Andreas** mit freigeschaltetem Import/Export einen angefragten Wagen, den du schon in der Garage oder Nähe hast. **Liefere ihn am Schiff in Easter Basin ab und schließ den Export ab**."
    }
  },
  {
    id: "sa-grove-bmx-return",
    installments: [
      "gta-sa"
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
    minimum: 3,
    en: {
      name: "CJ’s First Bicycle",
      objective: "Return to Grove Street with a BMX in **GTA: San Andreas**. Ride the nearby streets from CJ’s first trip home and let the old neighborhood set the pace."
    },
    de: {
      name: "CJs erstes Fahrrad",
      objective: "Kehre in **GTA: San Andreas** mit einem BMX zur Grove Street zurück. Fahr die Straßen von CJs erster Heimkehr entlang und lass das alte Viertel das Tempo bestimmen."
    }
  },
  {
    id: "iv-pool-cushion",
    installments: [
      "gta-iv"
    ],
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "one-round"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Read the Cushion",
      objective: "At a playable pool table in **GTA IV story mode**, **try one bank shot and finish the game**, regardless of who wins. Watch the cue ball’s path after the cushion."
    },
    de: {
      name: "Die Bande lesen",
      objective: "Versuch im **Storymodus von GTA IV** an einem spielbaren Billardtisch **einen Bandenstoß und spiel die Partie zu Ende**. Wer gewinnt, ist egal. Beobachte den Lauf der weißen Kugel."
    }
  },
  {
    id: "iv-darts-double",
    installments: [
      "gta-iv"
    ],
    moods: [
      "focused",
      "challenge"
    ],
    type: "challenge",
    tags: [
      "three-attempts"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Finish on a Double",
      objective: "At a darts table in **GTA IV story mode**, **win one game with the required double checkout**. Stop after success or three games."
    },
    de: {
      name: "Mit Doppel abschließen",
      objective: "Versuch im **Storymodus von GTA IV** am Darttisch, **eine Partie mit dem nötigen Doppel-Finish zu gewinnen**. Hör nach dem Erfolg oder drei Partien auf."
    }
  },
  {
    id: "iv-subway-platform",
    installments: [
      "gta-iv"
    ],
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
      name: "Liberty’s Underground",
      objective: "With the subway available in **GTA IV story mode**, enter a station and ride a train without skipping the journey. Step off where the neighborhood looks unfamiliar and explore around that exit."
    },
    de: {
      name: "Libertys Untergrund",
      objective: "Steig im **Storymodus von GTA IV** bei verfügbarer U-Bahn in einen Zug und überspring die Fahrt nicht. Steig in einem ungewohnten Viertel aus und erkunde die Straßen am Ausgang."
    }
  },
  {
    id: "iv-perestroika-show",
    installments: [
      "gta-iv"
    ],
    moods: [
      "low-energy",
      "nostalgic"
    ],
    type: "inspiration",
    tags: [
      "story"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Hove Beach Stage",
      objective: "Visit Perestroika in Hove Beach in **GTA IV story mode**. Sit through a cabaret show and spend some time in the neighborhood where Niko first arrived."
    },
    de: {
      name: "Bühne in Hove Beach",
      objective: "Besuche im **Storymodus von GTA IV** die Perestroika in Hove Beach. Schau dir eine Kabarettvorstellung an und bleib noch im Viertel von Nikos Ankunft."
    }
  },
  {
    id: "iv-split-sides",
    installments: [
      "gta-iv"
    ],
    moods: [
      "relax",
      "low-energy"
    ],
    type: "inspiration",
    tags: [
      "story"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Split Sides Night",
      objective: "Once Algonquin is accessible in **GTA IV story mode**, enter Split Sides for a comedy show. Leave the phone jobs alone while the comic takes the stage."
    },
    de: {
      name: "Abend im Split Sides",
      objective: "Besuche im **Storymodus von GTA IV** bei zugänglichem Algonquin eine Comedyvorstellung im Split Sides. Lass die Telefonaufträge warten, während der Comedian auftritt."
    }
  },
  {
    id: "iv-safehouse-tv",
    installments: [
      "gta-iv"
    ],
    moods: [
      "low-energy",
      "overwhelmed"
    ],
    type: "inspiration",
    tags: [
      "story"
    ],
    minutes: 10,
    minimum: 2,
    en: {
      name: "Niko’s Television",
      objective: "In **GTA IV story mode**, return to a safehouse with a working television. Sit down and explore its channels, letting Liberty City come to you for a change."
    },
    de: {
      name: "Nikos Fernseher",
      objective: "Kehre im **Storymodus von GTA IV** in eine Unterkunft mit nutzbarem Fernseher zurück. Setz dich hin und schau durch die Sender. Lass Liberty City diesmal zu dir kommen."
    }
  },
  {
    id: "iv-brucie-race",
    installments: [
      "gta-iv"
    ],
    moods: [
      "restless",
      "challenge"
    ],
    type: "challenge",
    tags: [
      "racing",
      "three-attempts"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Brucie’s Starting Line",
      objective: "With Brucie’s races unlocked in **GTA IV story mode**, call him for a race and take your chosen car. **Win one complete race**, or stop after three entries."
    },
    de: {
      name: "Brucies Startlinie",
      objective: "Ruf im **Storymodus von GTA IV** bei freigeschalteten Rennen Brucie an und nimm deinen ausgewählten Wagen. **Gewinne ein vollständiges Rennen** oder hör nach drei Starts auf."
    }
  },
  {
    id: "iv-stevie-message",
    installments: [
      "gta-iv"
    ],
    moods: [
      "progress",
      "explore"
    ],
    type: "objective",
    tags: [
      "driving"
    ],
    minutes: 25,
    minimum: 5,
    en: {
      name: "Stevie’s Photo Clue",
      objective: "With an active Stevie car request in **GTA IV story mode**, use the photo and neighborhood named in his text. **Find that requested car and deliver it to his garage**."
    },
    de: {
      name: "Stevies Fotohinweis",
      objective: "Nutze im **Storymodus von GTA IV** bei aktiver Autoanfrage von Stevie das Foto und Viertel aus seiner Nachricht. **Finde den gesuchten Wagen und liefere ihn in seiner Garage ab**."
    }
  },
  {
    id: "iv-tlad-gang-war",
    installments: [
      "gta-iv"
    ],
    moods: [
      "restless",
      "progress"
    ],
    type: "objective",
    tags: [
      "story"
    ],
    minutes: 25,
    minimum: 5,
    en: {
      name: "Johnny’s Riders",
      objective: "With The Lost and Damned expansion in **GTA IV** and gang wars unlocked for Johnny, **complete one available gang war alongside the Lost**, staying with the encounter until its result."
    },
    de: {
      name: "Johnnys Biker",
      objective: "Beende in **GTA IV mit der Erweiterung The Lost and Damned** als Johnny bei freigeschalteten Gangkriegen **einen verfügbaren Gangkrieg an der Seite der Lost**. Bleib bis zum Ergebnis bei der Begegnung."
    }
  },
  {
    id: "iv-dwayne-backup",
    installments: [
      "gta-iv"
    ],
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "support"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Dwayne’s Backup",
      objective: "With Dwayne’s backup favor unlocked in **GTA IV story mode**, call it before a small hostile gang encounter. **Fight alongside the arriving helpers and finish or leave the encounter**."
    },
    de: {
      name: "Dwaynes Verstärkung",
      objective: "Ruf im **Storymodus von GTA IV** mit freigeschalteter Verstärkung von Dwayne vor einer kleinen feindlichen Gangbegegnung Hilfe. **Kämpf mit den ankommenden Helfern und beende oder verlass den Kampf**."
    }
  },
  {
    id: "iv-kiki-wanted-call",
    installments: [
      "gta-iv"
    ],
    moods: [
      "curious"
    ],
    type: "experiment",
    tags: [
      "dialogue"
    ],
    minutes: 10,
    minimum: 2,
    en: {
      name: "A Call to Kiki",
      objective: "With Kiki’s wanted-level favor unlocked in **GTA IV story mode**, wait until you already have a one- to three-star wanted level outside a mission. **Call her and observe whether she clears it**, ending the call either way."
    },
    de: {
      name: "Ein Anruf bei Kiki",
      objective: "Ruf im **Storymodus von GTA IV** mit freigeschalteter Fahndungshilfe von Kiki an, wenn du außerhalb einer Mission schon ein bis drei Sterne hast. **Prüfe, ob sie die Fahndung beendet**, und beende den Anruf in jedem Fall."
    }
  },
  {
    id: "iv-change-car-escape",
    installments: [
      "gta-iv"
    ],
    moods: [
      "focused",
      "challenge"
    ],
    type: "challenge",
    tags: [
      "driving",
      "one-life"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Lose the Description",
      objective: "With a wanted level already active outside a mission in **GTA IV story mode**, lose police sight and switch cars. **Escape the search zone without another crime**, or stop if Niko is arrested or killed. One attempt."
    },
    de: {
      name: "Die Beschreibung wechseln",
      objective: "Verlier im **Storymodus von GTA IV** bei laufender Fahndung außerhalb einer Mission den Sichtkontakt und wechsle das Auto. **Entkomme der Suchzone ohne weiteres Verbrechen**. Ein Versuch, bis zur Flucht, Festnahme oder zum Tod."
    }
  },
  {
    id: "iv-paynspray-unseen",
    installments: [
      "gta-iv"
    ],
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "driving"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Paint without Witnesses",
      objective: "With an ordinary car and a wanted level already active in **GTA IV story mode**, lose police sight. **Enter a usable Pay ’n’ Spray unseen and check how the repaint affects the search**."
    },
    de: {
      name: "Lack ohne Zeugen",
      objective: "Verlier im **Storymodus von GTA IV** mit normalem Auto und laufender Fahndung den Sichtkontakt. **Fahr ungesehen in ein nutzbares Pay ’n’ Spray und prüfe, was der neue Lack an der Suche ändert**."
    }
  },
  {
    id: "iv-carwash-return",
    installments: [
      "gta-iv"
    ],
    moods: [
      "relax",
      "overwhelmed"
    ],
    type: "objective",
    tags: [
      "driving"
    ],
    minutes: 10,
    minimum: 2,
    en: {
      name: "Wash the City Off",
      objective: "With a dirty car in **GTA IV story mode**, drive to an available car wash. **Complete the wash and park the cleaned car at your safehouse**."
    },
    de: {
      name: "Die Stadt abwaschen",
      objective: "Fahr im **Storymodus von GTA IV** mit schmutzigem Auto zu einer verfügbaren Waschanlage. **Lass es waschen und park den sauberen Wagen bei deiner Unterkunft**."
    }
  },
  {
    id: "iv-burger-health",
    installments: [
      "gta-iv"
    ],
    moods: [
      "low-energy",
      "overwhelmed"
    ],
    type: "objective",
    tags: [
      "current-save"
    ],
    minutes: 5,
    minimum: 2,
    en: {
      name: "Burger Shot Break",
      objective: "If Niko is missing health in **GTA IV story mode**, walk into an open Burger Shot. **Buy and eat a meal that restores health** before returning outside."
    },
    de: {
      name: "Pause bei Burger Shot",
      objective: "Geh im **Storymodus von GTA IV** bei fehlender Gesundheit in einen geöffneten Burger Shot. **Kauf und iss eine Mahlzeit, die Gesundheit zurückgibt**, bevor du wieder rausgehst."
    }
  },
  {
    id: "iv-internet-news",
    installments: [
      "gta-iv"
    ],
    moods: [
      "curious",
      "low-energy"
    ],
    type: "inspiration",
    tags: [
      "story"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Liberty City Headlines",
      objective: "After a major story mission in **GTA IV story mode**, visit a TW@ computer and browse the in-game news. See what the city’s papers make of events Niko helped cause."
    },
    de: {
      name: "Schlagzeilen aus Liberty City",
      objective: "Besuche im **Storymodus von GTA IV** nach einer großen Storymission einen TW@-Computer und lies die Spielnachrichten. Schau, was die Zeitungen aus Ereignissen machen, an denen Niko beteiligt war."
    }
  },
  {
    id: "iv-happiness-island",
    installments: [
      "gta-iv"
    ],
    moods: [
      "explore",
      "curious"
    ],
    type: "objective",
    tags: [
      "exploration"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "The Other Liberty",
      objective: "Once Happiness Island is accessible in **GTA IV story mode**, take a boat there and climb the statue’s accessible exterior steps. **Reach its viewing area and read the signs around the base**."
    },
    de: {
      name: "Die andere Freiheitsstatue",
      objective: "Fahr im **Storymodus von GTA IV** bei zugänglicher Happiness Island mit einem Boot hin und geh die erreichbaren Außentreppen der Statue hoch. **Erreiche den Aussichtspunkt und lies die Schilder am Sockel**."
    }
  },
  {
    id: "iv-ferry-docks-walk",
    installments: [
      "gta-iv"
    ],
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
      name: "Broker’s Waterfront",
      objective: "Walk the Broker waterfront in **GTA IV story mode**, from Hove Beach toward the docks. Look for the city’s working harbor behind the streets you usually drive through."
    },
    de: {
      name: "Brokers Ufer",
      objective: "Geh im **Storymodus von GTA IV** am Ufer von Broker von Hove Beach Richtung Hafen. Schau hinter den sonst befahrenen Straßen auf den Arbeitshafen der Stadt."
    }
  },
  {
    id: "iv-first-safehouse-return",
    installments: [
      "gta-iv"
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
    minimum: 3,
    en: {
      name: "Roman’s Old Block",
      objective: "Return to the street of Roman’s first apartment in **GTA IV story mode** after the story has moved on. Walk the block and revisit the view from Niko’s first days in Liberty City."
    },
    de: {
      name: "Romans alter Block",
      objective: "Besuche im **Storymodus von GTA IV** nach dem Storyfortschritt die Straße von Romans erster Wohnung. Geh um den Block und schau auf das Viertel von Nikos ersten Tagen."
    }
  },
  {
    id: "iv-tbogt-cage-bout",
    installments: [
      "gta-iv"
    ],
    moods: [
      "focused",
      "challenge"
    ],
    type: "challenge",
    tags: [
      "three-attempts"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Luis in the Cage",
      objective: "With The Ballad of Gay Tony expansion in **GTA IV** and cage fighting available for Luis, **win the first round of three opponents**. Stop after success or three entries."
    },
    de: {
      name: "Luis im Käfig",
      objective: "Versuch in **GTA IV mit der Erweiterung The Ballad of Gay Tony** bei verfügbarem Käfigkampf als Luis, **die erste Runde mit drei Gegnern zu gewinnen**. Hör nach dem Erfolg oder drei Starts auf."
    }
  },
  {
    id: "v-golf-nine-holes",
    installments: [
      "gta-v"
    ],
    moods: [
      "relax",
      "focused"
    ],
    type: "objective",
    tags: [
      "full-match"
    ],
    minutes: 25,
    minimum: 5,
    en: {
      name: "Nine Holes",
      objective: "At Los Santos Golf Club in **GTA V story mode**, **finish a full nine-hole round**, choosing your clubs from the lie and wind. Your score can stay above par."
    },
    de: {
      name: "Neun Löcher",
      objective: "Spiel im **Storymodus von GTA V** im Los Santos Golf Club **neun Löcher zu Ende**. Wähle die Schläger nach Lage und Wind. Dein Ergebnis darf über Par liegen."
    }
  },
  {
    id: "v-darts-checkout",
    installments: [
      "gta-v"
    ],
    moods: [
      "focused",
      "challenge"
    ],
    type: "challenge",
    tags: [
      "three-attempts"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Count Down in Darts",
      objective: "At the Yellow Jack Inn darts board in **GTA V story mode**, **win one game with a double checkout**. Stop after success or three games."
    },
    de: {
      name: "Runterzählen im Gasthaus",
      objective: "Versuch im **Storymodus von GTA V** am Dartboard des Yellow Jack Inn, **eine Partie mit Doppel-Finish zu gewinnen**. Hör nach dem Erfolg oder drei Partien auf."
    }
  },
  {
    id: "v-yoga-michael",
    installments: [
      "gta-v"
    ],
    moods: [
      "relax",
      "low-energy"
    ],
    type: "inspiration",
    tags: [
      "abilities"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Michael’s Mat",
      objective: "After yoga unlocks for Michael in **GTA V story mode**, return to an available yoga spot. Follow the breathing and poses without turning the session into a score target."
    },
    de: {
      name: "Michaels Matte",
      objective: "Kehre im **Storymodus von GTA V** mit Michael nach Freischaltung von Yoga an einen verfügbaren Yogaplatz zurück. Folge Atmung und Haltungen, ohne dir ein Punkteziel zu setzen."
    }
  },
  {
    id: "v-shooting-range-timer",
    installments: [
      "gta-v"
    ],
    moods: [
      "focused",
      "challenge"
    ],
    type: "challenge",
    tags: [
      "three-attempts"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Ammu-Nation Targets",
      objective: "At an Ammu-Nation shooting range in **GTA V story mode**, choose one handgun drill. **Earn at least silver**, or stop after three runs of that same drill."
    },
    de: {
      name: "Scheiben bei Ammu-Nation",
      objective: "Wähle im **Storymodus von GTA V** am Ammu-Nation-Schießstand eine Pistolenübung. **Hol mindestens Silber** oder hör nach drei Läufen derselben Übung auf."
    }
  },
  {
    id: "v-flight-school-landing",
    installments: [
      "gta-v"
    ],
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "traversal"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Touch Down at LSIA",
      objective: "With Flight School unlocked in **GTA V story mode**, take the Runway Landing lesson. **Complete one landing attempt and inspect its result**, noticing when you lowered the landing gear."
    },
    de: {
      name: "Landung am LSIA",
      objective: "Starte im **Storymodus von GTA V** bei freigeschalteter Flugschule die Landebahn-Lektion. **Beende einen Landeversuch und schau sein Ergebnis an**. Achte darauf, wann du das Fahrwerk ausgefahren hast."
    }
  },
  {
    id: "v-parachute-town",
    installments: [
      "gta-v"
    ],
    moods: [
      "restless",
      "challenge"
    ],
    type: "challenge",
    tags: [
      "traversal",
      "three-attempts"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Land the City Jump",
      objective: "After parachute activities unlock in **GTA V story mode**, choose an available urban jump. **Pass its checkpoints and land in the target area**, or stop after three jumps."
    },
    de: {
      name: "Den Stadtsprung landen",
      objective: "Wähle im **Storymodus von GTA V** nach Freischaltung der Fallschirmaktivitäten einen verfügbaren Stadtsprung. **Passiere die Checkpoints und lande im Zielbereich** oder hör nach drei Sprüngen auf."
    }
  },
  {
    id: "v-triathlon-vespucci",
    installments: [
      "gta-v"
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
    minimum: 3,
    en: {
      name: "Beach to Finish",
      objective: "With the Vespucci Beach triathlon open in **GTA V story mode**, enter with a character you have available. **Finish its swim, bike, and running sections**, regardless of placement."
    },
    de: {
      name: "Vom Strand ins Ziel",
      objective: "Nimm im **Storymodus von GTA V** am verfügbaren Vespucci-Beach-Triathlon mit einer verfügbaren Figur teil. **Beende Schwimm-, Rad- und Laufabschnitt**. Der Platz ist egal."
    }
  },
  {
    id: "v-tonya-tow",
    installments: [
      "gta-v"
    ],
    moods: [
      "progress",
      "focused"
    ],
    type: "objective",
    tags: [
      "driving"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Tonya’s Next Tow",
      objective: "As Franklin in **GTA V story mode**, start an available towing job from Tonya. **Hook up the marked vehicle and deliver it to the impound lot**."
    },
    de: {
      name: "Tonyas nächster Abschlepper",
      objective: "Starte im **Storymodus von GTA V** als Franklin einen verfügbaren Abschleppauftrag von Tonya. **Häng das markierte Fahrzeug an und bring es zum Abschleppplatz**."
    }
  },
  {
    id: "v-maude-alive",
    installments: [
      "gta-v"
    ],
    moods: [
      "focused",
      "challenge"
    ],
    type: "challenge",
    tags: [
      "no-kills",
      "three-attempts"
    ],
    minutes: 25,
    minimum: 5,
    en: {
      name: "Alive for Maude",
      objective: "As Trevor with an open Maude bail-bond target in **GTA V story mode**, use her email’s location clue. **Make the target surrender and return them alive**, or stop after three capture attempts."
    },
    de: {
      name: "Lebend für Maude",
      objective: "Nutze im **Storymodus von GTA V** als Trevor mit offenem Maude-Kopfgeld das Ortsbild ihrer Mail. **Bring das Ziel zur Aufgabe und liefere es lebend ab** oder hör nach drei Fangversuchen auf."
    }
  },
  {
    id: "v-cletus-hunt-photo",
    installments: [
      "gta-v"
    ],
    moods: [
      "focused",
      "progress"
    ],
    type: "objective",
    tags: [
      "hunting"
    ],
    minutes: 25,
    minimum: 5,
    en: {
      name: "Trevor’s Field Report",
      objective: "After Fair Game unlocks hunting for Trevor in **GTA V story mode**, visit its hunting area during open hours. **Kill one elk and send Cletus the required photo**, then end the hunt."
    },
    de: {
      name: "Trevors Jagdbericht",
      objective: "Besuche im **Storymodus von GTA V** als Trevor nach Fair Game das Jagdgebiet während der offenen Jagdzeit. **Erlege einen Wapiti und sende Cletus das geforderte Foto**. Beende danach die Jagd."
    }
  },
  {
    id: "v-arms-buggy-run",
    installments: [
      "gta-v"
    ],
    moods: [
      "restless",
      "progress"
    ],
    type: "objective",
    tags: [
      "driving"
    ],
    minutes: 25,
    minimum: 5,
    en: {
      name: "McKenzie’s Ground Run",
      objective: "As Trevor with McKenzie Field Hangar owned in **GTA V story mode**, take an available ground arms-trafficking job. **Collect its marked cargo and bring the buggy home**."
    },
    de: {
      name: "Bodenauftrag für McKenzie",
      objective: "Nimm im **Storymodus von GTA V** als Trevor mit eigenem McKenzie-Hangar einen verfügbaren Bodentransport an. **Hol die markierte Fracht und bring den Buggy zurück**."
    }
  },
  {
    id: "v-arms-air-drop",
    installments: [
      "gta-v"
    ],
    moods: [
      "focused",
      "challenge"
    ],
    type: "challenge",
    tags: [
      "traversal",
      "three-attempts"
    ],
    minutes: 25,
    minimum: 5,
    en: {
      name: "Cargo over the County",
      objective: "As Trevor with McKenzie Field Hangar owned in **GTA V story mode**, start an air arms-trafficking job. **Complete its deliveries and land back at the hangar**, or stop after three flights."
    },
    de: {
      name: "Fracht über dem County",
      objective: "Starte im **Storymodus von GTA V** als Trevor mit eigenem McKenzie-Hangar einen Lufttransport. **Schließ die Lieferungen ab und lande wieder am Hangar** oder hör nach drei Flügen auf."
    }
  },
  {
    id: "v-lsc-custom-car",
    installments: [
      "gta-v"
    ],
    moods: [
      "create"
    ],
    type: "creation",
    tags: [
      "driving"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "A Los Santos Build",
      objective: "Bring a supported car to Los Santos Customs in **GTA V story mode**. Give it matching paint and wheels, then **store the customized car in your character’s garage**."
    },
    de: {
      name: "Ein Los-Santos-Build",
      objective: "Bring im **Storymodus von GTA V** ein unterstütztes Auto zu Los Santos Customs. Wähle passenden Lack und Räder und **stell den angepassten Wagen in die Garage deiner Figur**."
    }
  },
  {
    id: "v-snapmatic-framing",
    installments: [
      "gta-v"
    ],
    moods: [
      "create",
      "relax"
    ],
    type: "creation",
    tags: [
      "photography"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Vinewood in Frame",
      objective: "At a safe viewpoint of the Vinewood sign in **GTA V story mode**, use the phone’s Snapmatic camera. **Save a shot with the sign and your parked vehicle in the same frame**."
    },
    de: {
      name: "Vinewood im Bild",
      objective: "Benutze im **Storymodus von GTA V** an einem sicheren Blickpunkt zum Vinewood-Schild die Snapmatic-Kamera des Handys. **Speichere ein Foto mit Schild und geparktem Fahrzeug im selben Bild**."
    }
  },
  {
    id: "v-chiliad-cable-car",
    installments: [
      "gta-v"
    ],
    moods: [
      "explore",
      "low-energy"
    ],
    type: "inspiration",
    tags: [
      "traversal"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Up by Cable Car",
      objective: "Ride Mount Chiliad’s cable car in **GTA V story mode**. Wander the summit paths and look over Blaine County from the station instead of planning a stunt jump."
    },
    de: {
      name: "Mit der Seilbahn hoch",
      objective: "Fahr im **Storymodus von GTA V** mit der Seilbahn auf den Mount Chiliad. Schlendere über die Gipfelwege und schau von der Station auf Blaine County."
    }
  },
  {
    id: "v-pier-rides",
    installments: [
      "gta-v"
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
    minimum: 3,
    en: {
      name: "Del Perro Fairground",
      objective: "Visit Del Perro Pier in **GTA V story mode** and take the fairground ride you are in the mood for. Stay around the boardwalk and enjoy Los Santos at a slower pace."
    },
    de: {
      name: "Jahrmarkt in Del Perro",
      objective: "Besuche im **Storymodus von GTA V** den Del-Perro-Pier und nimm die Jahrmarktfahrt, auf die du Lust hast. Bleib noch auf der Promenade und erlebe Los Santos etwas langsamer."
    }
  },
  {
    id: "v-sea-race",
    installments: [
      "gta-v"
    ],
    moods: [
      "restless",
      "challenge"
    ],
    type: "challenge",
    tags: [
      "racing",
      "three-attempts"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Race the Water",
      objective: "With sea races available in **GTA V story mode**, enter one jet-ski race. **Finish in first place**, or stop after three entries on that same course."
    },
    de: {
      name: "Rennen auf dem Wasser",
      objective: "Starte im **Storymodus von GTA V** bei verfügbaren Seerennen ein Jetski-Rennen. **Komm als Erster ins Ziel** oder hör nach drei Starts auf derselben Strecke auf."
    }
  },
  {
    id: "v-michael-bullet-time",
    installments: [
      "gta-v"
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
    minimum: 3,
    en: {
      name: "Michael’s Extra Second",
      objective: "As Michael in **GTA V story mode**, approach a small hostile gang encounter. **Use his slow-motion shooting ability to change targets during one activation**, then finish or leave the fight."
    },
    de: {
      name: "Michaels Extra-Sekunde",
      objective: "Nähere dich im **Storymodus von GTA V** als Michael einer kleinen feindlichen Ganggruppe. **Wechsle während einer Aktivierung seiner Schuss-Zeitlupe das Ziel**. Beende oder verlass den Kampf."
    }
  },
  {
    id: "v-franklin-barber",
    installments: [
      "gta-v"
    ],
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
      name: "Franklin’s New Cut",
      objective: "As Franklin in **GTA V story mode**, visit an available barber with enough cash. **Choose and apply a haircut that works with your current outfit**."
    },
    de: {
      name: "Franklins neuer Schnitt",
      objective: "Besuche im **Storymodus von GTA V** als Franklin mit genug Geld einen verfügbaren Friseur. **Wähle einen Haarschnitt zu deinem aktuellen Outfit und lass ihn anwenden**."
    }
  },
  {
    id: "v-film-afternoon",
    installments: [
      "gta-v"
    ],
    moods: [
      "low-energy",
      "curious"
    ],
    type: "inspiration",
    tags: [
      "story"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Los Santos Cinema",
      objective: "Visit an open cinema in **GTA V story mode** and buy a ticket. Let the in-game film play while your next heist waits."
    },
    de: {
      name: "Kino in Los Santos",
      objective: "Besuche im **Storymodus von GTA V** ein geöffnetes Kino und kauf eine Karte. Lass den Spielfilm laufen, während der nächste Raubzug wartet."
    }
  }
]);
