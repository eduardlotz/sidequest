import { defineGameQuests } from "../defineGameQuests";

export const farCryQuests = defineGameQuests("far-cry", [
  {
    id: "primal-owl-opening",
    installments: ["fc-primal"],
    moods: ["challenge", "focused"],
    type: "challenge",
    tags: ["scouting", "no-detection"],
    minutes: 25,
    minimum: 5,
    en: {
      name: "Owl Goes First",
      objective:
        "In **Far Cry Primal**, with Owl: Attack unlocked, scout an uncaptured outpost through your owl. **Have the owl eliminate a horn blower, then capture the outpost without reinforcements being called**. If a horn sounds, finish the fight and stop the attempt.",
    },
    de: {
      name: "Die Eule beginnt",
      objective:
        "Schick in **Far Cry Primal** deine Eule über einen noch nicht eroberten Außenposten, um die Wachen auszukundschaften. **Lass sie einen Hornbläser ausschalten und erobere den Posten, bevor Verstärkung gerufen wird**. Geht ein Horn los, kämpf zu Ende und beende den Versuch.",
    },
  },
  {
    id: "fc3-tower-landmark",
    installments: ["fc-3"],
    moods: ["explore", "curious"],
    type: "objective",
    tags: ["exploration", "no-fast-travel"],
    minutes: 25,
    minimum: 5,
    en: {
      name: "From the Tower",
      objective:
        "In **Far Cry 3**, climb an unfinished radio tower and disable its scrambler. Pick a building visible from the top, then **reach that building without opening the map or placing a waypoint**.",
    },
    de: {
      name: "Vom Turm aus",
      objective:
        "Klettere in **Far Cry 3** auf einen unfertigen Funkturm und schalte den Störsender ab. Wähle von oben ein sichtbares Gebäude und **erreiche es, ohne die Karte zu öffnen oder einen Wegpunkt zu setzen**.",
    },
  },
  {
    id: "fc4-outpost-master",
    installments: ["fc-4"],
    moods: ["challenge", "focused"],
    type: "challenge",
    tags: ["stealth", "no-detection", "three-attempts"],
    minutes: 25,
    minimum: 5,
    en: {
      name: "One Silent Route",
      objective:
        "In **Far Cry 4 Outpost Master**, replay a familiar outpost and scout every guard before entering. Plan one route through the alarms and isolated guards, then **liberate the outpost without an alarm sounding**. Stop after success or three attempts.",
    },
    de: {
      name: "Eine lautlose Route",
      objective:
        "Wiederhole in **Far Cry 4 Outpost Master** einen Außenposten, den du kennst, und markiere alle Wachen. Plan einen Weg vorbei an Alarmanlagen und einzelnen Wachen und **erobere den Posten, ohne Alarm auszulösen**. Hör nach dem Erfolg oder drei Versuchen auf.",
    },
  },
  {
    id: "fc4-buzzer-tower",
    installments: ["fc-4"],
    moods: ["explore", "curious"],
    type: "objective",
    tags: ["exploration", "traversal"],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Buzzer to Bell",
      objective:
        "In **Far Cry 4**, take a Buzzer to an unliberated bell tower but land at the base instead of on top. **Climb the tower by its intended route and disable the broadcast**, then use the view to choose your next destination.",
    },
    de: {
      name: "Buzzer zum Turm",
      objective:
        "Fliege in **Far Cry 4** mit einem Buzzer zu einem noch nicht befreiten Glockenturm, lande aber an seinem Fuß statt oben. **Klettere auf dem vorgesehenen Weg hinauf und schalte die Übertragung ab**. Wähle von dort dein nächstes Ziel.",
    },
  },
  {
    id: "fc4-elephant-entry",
    installments: ["fc-4"],
    moods: ["curious", "focused"],
    type: "experiment",
    tags: ["new-approach", "abilities"],
    minutes: 25,
    minimum: 5,
    en: {
      name: "Elephant Entry",
      objective:
        "In **Far Cry 4**, with Elephant Rider unlocked, ride an elephant into an uncaptured outpost. **Defeat one guard from the saddle**, then finish the outpost on foot. Notice how that loud opening changed the fight.",
    },
    de: {
      name: "Angriff per Elefant",
      objective:
        "Reite in **Far Cry 4** mit freigeschaltetem Elefantenreiten in einen noch nicht eroberten Außenposten. **Besiege eine Wache vom Sattel aus** und erobere den Posten dann zu Fuß. Achte darauf, wie der laute Einstieg den Kampf verändert hat.",
    },
  },
  {
    id: "fc4-arena-scavenger",
    installments: ["fc-4"],
    moods: ["challenge", "restless"],
    type: "challenge",
    tags: ["loadout", "three-attempts"],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Arena Scavenger",
      objective:
        "In **Far Cry 4's Shanath Arena**, begin a battle with its supplied weapon. After that weapon runs dry, take one dropped enemy weapon and use no other firearm. **Win the battle with those two weapons only** or stop after three attempts.",
    },
    de: {
      name: "Arena-Plünderer",
      objective:
        "Beginne in der **Shanath-Arena von Far Cry 4** einen Kampf mit der bereitgestellten Waffe. Wenn sie leer ist, nimm genau eine fallengelassene Gegnerwaffe und keine weitere Schusswaffe. **Gewinne nur mit diesen beiden Waffen** oder hör nach drei Versuchen auf.",
    },
  },
  {
    id: "fc5-boomer-recon",
    installments: ["fc-5"],
    moods: ["curious", "focused"],
    type: "experiment",
    tags: ["scouting", "new-approach"],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Boomer Goes First",
      objective:
        "In **Far Cry 5**, with Boomer recruited, send him ahead to mark the guards at an enemy outpost. **Enter using only his marks, disable one alarm, and leave the outpost again without opening the binoculars**. Compare what you noticed through Boomer with your usual scouting.",
    },
    de: {
      name: "Boomer geht vor",
      objective:
        "Schicke in **Far Cry 5** den freigeschalteten Boomer voraus, damit er die Wachen eines feindlichen Außenpostens markiert. **Dringe nur mit seinen Markierungen ein, schalte einen Alarm aus und verlasse den Posten wieder, ohne das Fernglas zu öffnen**. Vergleiche Boomers Aufklärung mit deiner üblichen Vorgehensweise.",
    },
  },
  {
    id: "primal-grapple-crossing",
    installments: [
      "fc-primal"
    ],
    moods: [
      "curious",
      "explore"
    ],
    type: "experiment",
    tags: [
      "traversal"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Claw Across the Gap",
      objective: "With Wogah’s grappling claw in **Far Cry Primal**, find an accessible marked grapple point over a gap. **Swing across and reach the far path**, then look back at the ground route you skipped."
    },
    de: {
      name: "Mit der Klaue hinüber",
      objective: "Such in **Far Cry Primal** mit Wogahs Kletterklaue einen erreichbaren markierten Punkt über einer Lücke. **Schwing hinüber auf den anderen Weg** und schau auf die Bodenstrecke zurück."
    }
  },
  {
    id: "primal-cold-fire-route",
    installments: [
      "fc-primal"
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
    minutes: 20,
    minimum: 3,
    en: {
      name: "Between Two Fires",
      objective: "With winter clothing unlocked in **Far Cry Primal**, choose two nearby northern fires you have already located. **Reach the second before the cold meter empties**, or stop after three trips."
    },
    de: {
      name: "Zwischen zwei Feuern",
      objective: "Wähle in **Far Cry Primal** mit freigeschalteter Winterkleidung zwei nahe, bereits gefundene Feuer im Norden. **Erreiche das zweite, bevor der Kältebalken leer ist**, oder hör nach drei Strecken auf."
    }
  },
  {
    id: "primal-northern-shelter",
    installments: [
      "fc-primal"
    ],
    moods: [
      "explore"
    ],
    type: "inspiration",
    tags: [
      "exploration"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Shelter in the North",
      objective: "With winter clothing available in **Far Cry Primal**, explore the edge of the snowy north. Follow sheltered rock faces and caves where the cold landscape changes your usual route."
    },
    de: {
      name: "Schutz im Norden",
      objective: "Erkunde in **Far Cry Primal** mit verfügbarer Winterkleidung den Rand des verschneiten Nordens. Folge geschützten Felswänden und Höhlen, wo die Kälte deinen üblichen Weg verändert."
    }
  },
  {
    id: "primal-mammoth-ride",
    installments: [
      "fc-primal"
    ],
    moods: [
      "restless",
      "curious"
    ],
    type: "objective",
    tags: [
      "traversal"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Mammoth Crossing",
      objective: "With Mammoth Rider unlocked and a rideable mammoth already nearby in **Far Cry Primal**, **ride it across one shallow river and dismount on the far bank**."
    },
    de: {
      name: "Auf dem Mammut",
      objective: "Reite in **Far Cry Primal** mit freigeschaltetem Mammutreiten und einem bereits gefundenen reitbaren Mammut **durch einen flachen Fluss und steig am anderen Ufer ab**."
    }
  },
  {
    id: "primal-sabre-trail",
    installments: [
      "fc-primal"
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
      name: "Sabretooth Trail",
      objective: "With a tamed sabretooth and Beast Rider unlocked in **Far Cry Primal**, take the forest paths on its back. Follow the bends and slopes you normally cross on foot."
    },
    de: {
      name: "Pfad auf Säbelzähnen",
      objective: "Nimm in **Far Cry Primal** mit gezähmtem Säbelzahntiger und freigeschaltetem Tier-Reiten die Waldwege auf seinem Rücken. Folge Kurven und Hängen, die du sonst zu Fuß überquerst."
    }
  },
  {
    id: "primal-bear-forager",
    installments: [
      "fc-primal"
    ],
    moods: [
      "curious",
      "explore"
    ],
    type: "experiment",
    tags: [
      "collectibles"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "The Bear’s Finds",
      objective: "With a tamed brown bear in **Far Cry Primal**, walk past ordinary gatherable resources and leave it idle nearby. **Inspect one resource it gathers**, or stop after checking three resource patches."
    },
    de: {
      name: "Die Funde des Bären",
      objective: "Geh in **Far Cry Primal** mit einem gezähmten Braunbären an gewöhnlichen Sammelstellen vorbei und lass ihn daneben warten. **Prüfe eine von ihm gesammelte Ressource** oder hör nach drei Stellen auf."
    }
  },
  {
    id: "primal-jaguar-silent-command",
    installments: [
      "fc-primal"
    ],
    moods: [
      "challenge",
      "focused"
    ],
    type: "challenge",
    tags: [
      "stealth",
      "three-attempts"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Jaguar from the Brush",
      objective: "With a tamed jaguar in **Far Cry Primal**, stay crouched outside a small occupied camp. **Have it kill an isolated guard while you remain unseen**. Stop after success or three commands."
    },
    de: {
      name: "Jaguar aus dem Gebüsch",
      objective: "Bleib in **Far Cry Primal** mit gezähmtem Jaguar geduckt außerhalb eines kleinen besetzten Lagers. **Lass ihn eine einzelne Wache töten, ohne selbst entdeckt zu werden**. Hör nach dem Erfolg oder drei Befehlen auf."
    }
  },
  {
    id: "primal-sling-helmet",
    installments: [
      "fc-primal"
    ],
    moods: [
      "focused",
      "challenge"
    ],
    type: "challenge",
    tags: [
      "one-weapon",
      "three-attempts"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Stone Through the Helmet",
      objective: "With Precision Sling unlocked in **Far Cry Primal**, find an already spotted helmeted enemy. **Kill them with a sling headshot**, or stop after three shots."
    },
    de: {
      name: "Stein durch den Helm",
      objective: "Versuch in **Far Cry Primal** mit freigeschalteter Präzisionsschleuder gegen einen bereits gesichteten Gegner mit Helm, **ihn per Schleuder-Kopftreffer zu töten**. Hör nach dem Erfolg oder drei Schüssen auf."
    }
  },
  {
    id: "primal-trap-predator",
    installments: [
      "fc-primal"
    ],
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "hunting"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Let It Step In",
      objective: "With traps unlocked and a predator already nearby in **Far Cry Primal**, place a trap on its approach. **Try to catch it and observe the result**, ending after the trap triggers or three placements."
    },
    de: {
      name: "In die Falle",
      objective: "Leg in **Far Cry Primal** mit freigeschalteten Fallen und bereits nahem Raubtier eine Falle auf seinen Weg. **Teste die Falle und beobachte das Ergebnis**. Hör nach Auslösung oder drei Platzierungen auf."
    }
  },
  {
    id: "primal-fire-spread",
    installments: [
      "fc-primal"
    ],
    moods: [
      "curious",
      "create"
    ],
    type: "experiment",
    tags: [
      "new-approach"
    ],
    minutes: 10,
    minimum: 2,
    en: {
      name: "Watch the Dry Grass",
      objective: "In **Far Cry Primal**, choose an empty patch of dry grass away from the village. Ignite it with your weapon and **watch where the fire travels before moving back onto bare ground**."
    },
    de: {
      name: "Trockenes Gras",
      objective: "Wähle in **Far Cry Primal** eine freie Stelle mit trockenem Gras abseits des Dorfs. Entzünde sie mit deiner Waffe und **beobachte die Ausbreitung, bevor du auf freien Boden zurückgehst**."
    }
  },
  {
    id: "primal-extinguish-club",
    installments: [
      "fc-primal"
    ],
    moods: [
      "curious"
    ],
    type: "experiment",
    tags: [
      "one-weapon"
    ],
    minutes: 10,
    minimum: 2,
    en: {
      name: "Fire Meets Water",
      objective: "Beside a safe shallow stream in **Far Cry Primal**, ignite your club and wade into the water. **Check the flame afterward and relight the club on dry ground**."
    },
    de: {
      name: "Feuer trifft Wasser",
      objective: "Zünde in **Far Cry Primal** neben einem sicheren flachen Bach deine Keule an und geh ins Wasser. **Prüfe danach die Flamme und entzünde die Keule an Land erneut**."
    }
  },
  {
    id: "primal-owl-berserk-drop",
    installments: [
      "fc-primal"
    ],
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "gadgets",
      "scouting"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Confusion from Above",
      objective: "With Owl Weapon Drop and berserk bombs unlocked in **Far Cry Primal**, scout a small enemy group. **Drop one berserk bomb through the owl and observe the group’s reaction** before approaching."
    },
    de: {
      name: "Verwirrung von oben",
      objective: "Späh in **Far Cry Primal** mit freigeschaltetem Eulen-Waffenabwurf und Berserkerbomben eine kleine Gegnergruppe aus. **Wirf per Eule eine Berserkerbombe ab und beobachte die Reaktion**, bevor du hingehst."
    }
  },
  {
    id: "primal-hut-ready",
    installments: [
      "fc-primal"
    ],
    moods: [
      "create",
      "progress"
    ],
    type: "creation",
    tags: [
      "building"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "A Better Wenja Hut",
      objective: "In **Far Cry Primal**, pick a recruited specialist’s hut upgrade whose materials and population requirement you already meet. **Build the upgrade and inspect the changed hut**."
    },
    de: {
      name: "Eine bessere Wenja-Hütte",
      objective: "Wähle in **Far Cry Primal** bei einem angeworbenen Spezialisten eine Hüttenverbesserung, für die Material und Bevölkerung schon reichen. **Bau sie und schau dir die veränderte Hütte an**."
    }
  },
  {
    id: "primal-spirit-totem",
    installments: [
      "fc-primal"
    ],
    moods: [
      "explore",
      "progress"
    ],
    type: "objective",
    tags: [
      "collectibles"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Totem in Place",
      objective: "Follow an accessible unfilled Spirit Totem marker in **Far Cry Primal**. Find its placement point and **place the totem to activate that location**."
    },
    de: {
      name: "Totem aufstellen",
      objective: "Folge in **Far Cry Primal** einem erreichbaren, noch leeren Geistertotem-Marker. Such die Stelle und **stell das Totem dort auf**."
    }
  },
  {
    id: "primal-wenja-trail",
    installments: [
      "fc-primal"
    ],
    moods: [
      "focused",
      "explore"
    ],
    type: "objective",
    tags: [
      "story"
    ],
    minutes: 25,
    minimum: 5,
    en: {
      name: "The Missing Wenja",
      objective: "Choose an available Search and Rescue mission in **Far Cry Primal**. Follow the trail clues and **rescue the Wenja at the end of the trail**."
    },
    de: {
      name: "Der vermisste Wenja",
      objective: "Wähle in **Far Cry Primal** einen verfügbaren Such-und-Rettungsauftrag. Folge den Spuren und **rette den Wenja am Ende des Weges**."
    }
  },
  {
    id: "primal-escort-procession",
    installments: [
      "fc-primal"
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
    minimum: 5,
    en: {
      name: "Protect the Procession",
      objective: "Start an available Wenja Escort mission in **Far Cry Primal**. Stay with the group and **get the surviving Wenja to their marked destination**."
    },
    de: {
      name: "Den Zug beschützen",
      objective: "Starte in **Far Cry Primal** einen verfügbaren Wenja-Eskortauftrag. Bleib bei der Gruppe und **bring die überlebenden Wenja an ihr markiertes Ziel**."
    }
  },
  {
    id: "primal-tribal-destruction",
    installments: [
      "fc-primal"
    ],
    moods: [
      "restless",
      "progress"
    ],
    type: "objective",
    tags: [
      "story"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Break the Stockpile",
      objective: "Take an available Tribal Clash: Destroy mission in **Far Cry Primal**. Use fire or clubs on the marked supplies and **finish the destruction objective**."
    },
    de: {
      name: "Vorräte zerstören",
      objective: "Nimm in **Far Cry Primal** einen verfügbaren Stammeskonflikt mit Zerstörungsziel an. Benutze Feuer oder Keulen gegen die markierten Vorräte und **schließ das Zerstörungsziel ab**."
    }
  },
  {
    id: "primal-vision-return",
    installments: [
      "fc-primal"
    ],
    moods: [
      "curious",
      "nostalgic"
    ],
    type: "inspiration",
    tags: [
      "story"
    ],
    minutes: 25,
    minimum: 5,
    en: {
      name: "Tensay’s Other World",
      objective: "With an unplayed vision available from Tensay in **Far Cry Primal**, enter it and follow its unfamiliar animal perspective. Let this session stay inside that vision."
    },
    de: {
      name: "Tensays andere Welt",
      objective: "Betritt in **Far Cry Primal** eine noch offene Vision von Tensay und spiel mit ihrer ungewohnten Tierperspektive. Bleib für diese Session in dieser Vision."
    }
  },
  {
    id: "primal-village-evening",
    installments: [
      "fc-primal"
    ],
    moods: [
      "low-energy",
      "relax"
    ],
    type: "inspiration",
    tags: [
      "on-foot"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "The Village You Built",
      objective: "Return to the Wenja village in **Far Cry Primal** after recruiting several specialists. Walk between their huts and watch the tribe at work before heading back into Oros."
    },
    de: {
      name: "Das gewachsene Dorf",
      objective: "Kehre in **Far Cry Primal** nach der Anwerbung mehrerer Spezialisten ins Wenja-Dorf zurück. Geh zwischen ihren Hütten umher und schau dem Stamm bei der Arbeit zu."
    }
  },
  {
    id: "primal-takkar-bow-upgrade",
    installments: [
      "fc-primal"
    ],
    moods: [
      "progress"
    ],
    type: "objective",
    tags: [
      "crafting"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "A Stronger Bow",
      objective: "At Takkar’s crafting menu in **Far Cry Primal**, choose a bow upgrade whose materials and hut requirement are already met. **Craft it and use the upgraded bow on one hostile encounter**."
    },
    de: {
      name: "Ein stärkerer Bogen",
      objective: "Wähle in **Far Cry Primal** im Herstellungsmenü eine Bogenverbesserung, für die Material und Hüttenvoraussetzung schon passen. **Stell sie her und benutze den verbesserten Bogen in einer Gegnerbegegnung**."
    }
  },
  {
    id: "fc3-supply-delivery",
    installments: [
      "fc-3"
    ],
    moods: [
      "restless",
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
      name: "Medicine on the Clock",
      objective: "At an available Supply Drop vehicle in **Far Cry 3**, **complete its medicine route before the in-game timer runs out**. Stop after success or three runs."
    },
    de: {
      name: "Medizin gegen die Zeit",
      objective: "Versuch in **Far Cry 3** an einem verfügbaren Nachschub-Fahrzeug, **die Medizinroute vor Ablauf des Spieltimers zu schaffen**. Hör nach dem Erfolg oder drei Fahrten auf."
    }
  },
  {
    id: "fc3-wanted-knife",
    installments: [
      "fc-3"
    ],
    moods: [
      "focused",
      "progress"
    ],
    type: "objective",
    tags: [
      "stealth"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Rakyat’s Marked Target",
      objective: "Take an available Wanted Dead contract in **Far Cry 3**. Scout the marked leader and **complete the contract with the required knife kill**."
    },
    de: {
      name: "Ziel für die Rakyat",
      objective: "Nimm in **Far Cry 3** einen verfügbaren Kopfgeldauftrag mit Messerpflicht an. Späh den markierten Anführer aus und **schließ den Auftrag mit dem verlangten Messertod ab**."
    }
  },
  {
    id: "fc3-lost-letter",
    installments: [
      "fc-3"
    ],
    moods: [
      "explore",
      "curious"
    ],
    type: "objective",
    tags: [
      "collectibles",
      "story"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "A Soldier’s Letter",
      objective: "With a Letter of the Lost marker accessible in **Far Cry 3**, search the bunker or wreck around it. **Collect the letter and read the entry** before moving on."
    },
    de: {
      name: "Brief eines Soldaten",
      objective: "Such in **Far Cry 3** bei einem erreichbaren Marker für Briefe der Verlorenen im Bunker oder Wrack darum herum. **Sammle den Brief ein und lies ihn**, bevor du weitergehst."
    }
  },
  {
    id: "fc3-multi-death-above",
    installments: [
      "fc-3"
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
    minimum: 3,
    en: {
      name: "Two Below the Ledge",
      objective: "With Dual Death from Above unlocked in **Far Cry 3**, find two guards already close together below a reachable ledge. **Perform the double takedown**, or stop after three attempts."
    },
    de: {
      name: "Zwei unter der Kante",
      objective: "Such in **Far Cry 3** mit freigeschaltetem Doppel-Takedown von oben zwei bereits nebeneinander stehende Wachen unter einer erreichbaren Kante. **Führe den Doppel-Takedown aus** oder hör nach drei Versuchen auf."
    }
  },
  {
    id: "fc3-water-takedown",
    installments: [
      "fc-3"
    ],
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "stealth"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Below the Dock",
      objective: "With Death from Below unlocked in **Far Cry 3**, find a hostile standing beside reachable water. **Approach from the water and try the takedown**, stopping after it succeeds or three approaches."
    },
    de: {
      name: "Unter dem Steg",
      objective: "Such in **Far Cry 3** mit freigeschaltetem Takedown von unten einen Gegner neben erreichbarem Wasser. **Nähere dich schwimmend und probier den Takedown**. Hör nach dem Erfolg oder drei Anläufen auf."
    }
  },
  {
    id: "fc3-grenade-takedown",
    installments: [
      "fc-3"
    ],
    moods: [
      "restless",
      "curious"
    ],
    type: "objective",
    tags: [
      "abilities"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Borrow Their Grenade",
      objective: "With Grenade Takedown unlocked in **Far Cry 3**, start a takedown on an isolated enemy near a hostile group. **Use the grenade follow-up and retreat from the blast**."
    },
    de: {
      name: "Seine Granate nutzen",
      objective: "Starte in **Far Cry 3** mit freigeschaltetem Granaten-Takedown einen Takedown gegen einen einzelnen Gegner bei einer Gruppe. **Nutze die Granaten-Fortsetzung und zieh dich aus dem Explosionsbereich zurück**."
    }
  },
  {
    id: "fc3-gunslinger-followup",
    installments: [
      "fc-3"
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
      name: "Their Sidearm",
      objective: "With Gunslinger Takedown unlocked in **Far Cry 3**, approach two nearby enemies from behind. **Use the first enemy’s pistol in the takedown follow-up** and finish that encounter."
    },
    de: {
      name: "Seine Seitenwaffe",
      objective: "Nähere dich in **Far Cry 3** mit freigeschaltetem Pistolen-Takedown zwei nahen Gegnern von hinten. **Benutze die Pistole des ersten Gegners in der Takedown-Fortsetzung** und beende die Begegnung."
    }
  },
  {
    id: "fc3-heavy-takedown",
    installments: [
      "fc-3"
    ],
    moods: [
      "focused",
      "challenge"
    ],
    type: "challenge",
    tags: [
      "stealth",
      "three-attempts"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Behind the Heavy",
      objective: "With Heavy Beatdown unlocked in **Far Cry 3**, choose an already located heavy guard. **Defeat them with a rear takedown before detection**, or stop after three approaches."
    },
    de: {
      name: "Hinter dem Schweren",
      objective: "Versuch in **Far Cry 3** mit freigeschaltetem schweren Takedown gegen eine bereits gefundene schwere Wache, **sie vor der Entdeckung von hinten per Takedown auszuschalten**. Hör nach dem Erfolg oder drei Anläufen auf."
    }
  },
  {
    id: "fc3-rock-chain",
    installments: [
      "fc-3"
    ],
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "stealth"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Gather Them with Rocks",
      objective: "With Chain Takedown unlocked in **Far Cry 3**, throw rocks near two guards. **Try a chained takedown after repositioning them**, ending after the chain works or three setups."
    },
    de: {
      name: "Mit Steinen zusammenlocken",
      objective: "Wirf in **Far Cry 3** mit freigeschalteten verketteten Takedowns Steine neben zwei Wachen. **Probier nach dem Umlenken einen verketteten Takedown**. Hör nach dem Erfolg oder drei Aufbauten auf."
    }
  },
  {
    id: "fc3-fireline-test",
    installments: [
      "fc-3"
    ],
    moods: [
      "curious"
    ],
    type: "experiment",
    tags: [
      "new-approach"
    ],
    minutes: 10,
    minimum: 2,
    en: {
      name: "Fire Along the Grass",
      objective: "With a flamethrower in **Far Cry 3**, choose empty dry vegetation beside a cleared outpost. **Ignite one edge and watch the spread from the bare ground**."
    },
    de: {
      name: "Feuer im Gras",
      objective: "Wähle in **Far Cry 3** mit Flammenwerfer trockene, leere Vegetation neben einem befreiten Außenposten. **Entzünde einen Rand und beobachte die Ausbreitung vom freien Boden aus**."
    }
  },
  {
    id: "fc3-deep-dive-loot",
    installments: [
      "fc-3"
    ],
    moods: [
      "explore",
      "focused"
    ],
    type: "objective",
    tags: [
      "diving"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Under the Wreck",
      objective: "With a bought loot map showing an accessible underwater chest in **Far Cry 3**, plan your surface return. **Dive for that chest and return to air with its loot**."
    },
    de: {
      name: "Unter dem Wrack",
      objective: "Plane in **Far Cry 3** mit gekaufter Beutekarte und erreichbarer Unterwassertruhe den Weg zur Oberfläche. **Tauch zur Truhe und kehr mit der Beute an die Luft zurück**."
    }
  },
  {
    id: "fc3-deep-dive-syringe",
    installments: [
      "fc-3"
    ],
    moods: [
      "curious",
      "explore"
    ],
    type: "experiment",
    tags: [
      "diving"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "A Longer Breath",
      objective: "With a Deep Dive syringe already crafted in **Far Cry 3**, choose a safe coast. **Compare a short unboosted swim with one after the syringe**, surfacing before air runs out each time."
    },
    de: {
      name: "Länger Luft haben",
      objective: "Vergleiche in **Far Cry 3** mit bereits hergestellter Tiefentauch-Spritze an einer sicheren Küste **einen kurzen Tauchgang ohne Spritze mit einem danach**. Tauch beide Male auf, bevor die Luft ausgeht."
    }
  },
  {
    id: "fc3-hunter-instinct-check",
    installments: [
      "fc-3"
    ],
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "hunting"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Let the Jungle Glow",
      objective: "With Hunter’s Instinct unlocked and its ingredients owned in **Far Cry 3**, **craft and use a syringe at a hunting ground**, then locate an animal using the effect."
    },
    de: {
      name: "Leuchtender Dschungel",
      objective: "Stell in **Far Cry 3** mit freigeschaltetem Jagdinstinkt und vorhandenen Zutaten **eine Spritze her und benutze sie an einem Jagdplatz**. Finde mit ihrer Wirkung ein Tier."
    }
  },
  {
    id: "fc3-weapon-attachment",
    installments: [
      "fc-3"
    ],
    moods: [
      "create",
      "progress"
    ],
    type: "creation",
    tags: [
      "loadout"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "A Rook Islands Rifle",
      objective: "At a weapon shop in **Far Cry 3**, choose an owned weapon that supports attachments. **Apply a new sight or suppressor and use it in the next hostile encounter**."
    },
    de: {
      name: "Gewehr für die Inseln",
      objective: "Wähle in **Far Cry 3** im Waffenladen eine eigene Waffe mit Aufsätzen. **Baue ein neues Visier oder einen Schalldämpfer an und nutze es in der nächsten Gegnerbegegnung**."
    }
  },
  {
    id: "fc3-south-island-arrival",
    installments: [
      "fc-3"
    ],
    moods: [
      "explore",
      "curious"
    ],
    type: "inspiration",
    tags: [
      "free-roam"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Hoyt’s Island",
      objective: "Once the southern island is open in **Far Cry 3**, explore around your first safe hub there. Look for the differences between Hoyt’s mercenaries and the pirate territory you left behind."
    },
    de: {
      name: "Hoyts Insel",
      objective: "Erkunde in **Far Cry 3** nach Freischaltung der Südinsel die Gegend um deinen ersten sicheren Stützpunkt dort. Schau, wie sich Hoyts Söldnergebiet von den Piratenorten unterscheidet."
    }
  },
  {
    id: "fc3-citra-return",
    installments: [
      "fc-3"
    ],
    moods: [
      "nostalgic",
      "curious"
    ],
    type: "inspiration",
    tags: [
      "story"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Outside Citra’s Temple",
      objective: "After visiting Citra’s temple in **Far Cry 3**, return between story missions. Walk its approach and look at the Rakyat symbols with the story you now know."
    },
    de: {
      name: "Vor Citras Tempel",
      objective: "Kehre in **Far Cry 3** nach dem ersten Besuch zwischen Storymissionen zu Citras Tempel zurück. Geh den Weg dorthin und schau mit deinem neuen Storywissen auf die Rakyat-Zeichen."
    }
  },
  {
    id: "fc3-waterway-scout",
    installments: [
      "fc-3"
    ],
    moods: [
      "explore",
      "relax"
    ],
    type: "inspiration",
    tags: [
      "driving"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Around Rook by Boat",
      objective: "Take a boat from an already cleared shore in **Far Cry 3**. Follow the coast into an inlet you usually pass by on land, with no hunting or outpost target for this ride."
    },
    de: {
      name: "Per Boot um Rook",
      objective: "Nimm in **Far Cry 3** an einem bereits gesicherten Ufer ein Boot. Folge der Küste in eine Bucht, an der du zu Land meist vorbeikommst, ohne Jagd- oder Außenpostenziel."
    }
  },
  {
    id: "fc3-tatau-check",
    installments: [
      "fc-3"
    ],
    moods: [
      "curious",
      "progress"
    ],
    type: "objective",
    tags: [
      "abilities"
    ],
    minutes: 10,
    minimum: 2,
    en: {
      name: "New Ink in Action",
      objective: "With a usable unlocked Tatau skill you have not tried in **Far Cry 3**, read its effect. **Use that skill once against a hostile encounter**, then inspect the tattoo’s new markings."
    },
    de: {
      name: "Neue Tinte im Einsatz",
      objective: "Lies in **Far Cry 3** die Wirkung einer nutzbaren freigeschalteten Tatau-Fähigkeit, die du noch nicht ausprobiert hast. **Nutze sie einmal in einer Gegnerbegegnung** und schau dir die neuen Tattoo-Zeichen an."
    }
  },
  {
    id: "fc3-poker-fold-pressure",
    installments: [
      "fc-3"
    ],
    moods: [
      "focused",
      "challenge"
    ],
    type: "challenge",
    tags: [
      "cards",
      "three-attempts"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "No Easy Fold",
      objective: "At a low-stakes poker table in **Far Cry 3**, **win one hand without folding or reloading**. Stop after a win or three dealt hands."
    },
    de: {
      name: "Nicht sofort passen",
      objective: "Versuch in **Far Cry 3** an einem Pokertisch mit kleinem Einsatz, **eine Hand ohne Passen oder Neuladen zu gewinnen**. Hör nach einem Sieg oder drei ausgeteilten Händen auf."
    }
  },
  {
    id: "fc3-outpost-pistol",
    installments: [
      "fc-3"
    ],
    moods: [
      "focused",
      "challenge"
    ],
    type: "challenge",
    tags: [
      "one-weapon",
      "one-life"
    ],
    minutes: 25,
    minimum: 5,
    en: {
      name: "Pistol at the Post",
      objective: "With an uncaptured small outpost available in **Far Cry 3**, equip one pistol. **Capture it using only that pistol for damage**, with rocks for distraction allowed. One attempt, ending on capture or death."
    },
    de: {
      name: "Pistole am Posten",
      objective: "Rüste in **Far Cry 3** bei verfügbarem kleinem feindlichem Außenposten eine Pistole aus. **Erobere ihn mit Schaden nur aus dieser Pistole**. Ablenksteine sind erlaubt. Ein Versuch, bis zur Eroberung oder zum Tod."
    }
  },
  {
    id: "fc4-hostage-extraction",
    installments: [
      "fc-4"
    ],
    moods: [
      "focused",
      "progress"
    ],
    type: "objective",
    tags: [
      "stealth"
    ],
    minutes: 25,
    minimum: 5,
    en: {
      name: "Bring Them Out",
      objective: "Start an available Hostage Rescue mission in **Far Cry 4**. Scout which guards stand closest to the hostages, then **finish the rescue with surviving hostages**."
    },
    de: {
      name: "Geiseln herausholen",
      objective: "Starte in **Far Cry 4** einen verfügbaren Geiselrettungsauftrag. Späh die Wachen direkt bei den Geiseln aus und **schließ die Rettung mit überlebenden Geiseln ab**."
    }
  },
  {
    id: "fc4-bomb-route",
    installments: [
      "fc-4"
    ],
    moods: [
      "focused",
      "challenge"
    ],
    type: "challenge",
    tags: [
      "stealth",
      "three-attempts"
    ],
    minutes: 25,
    minimum: 5,
    en: {
      name: "Reach the Bombs",
      objective: "At an available Bomb Defusing mission in **Far Cry 4**, **defuse all marked bombs without being detected and leave the mission area**. Stop after success or three attempts."
    },
    de: {
      name: "Zu den Bomben",
      objective: "Versuch in **Far Cry 4** bei einem verfügbaren Bombenentschärfungsauftrag, **alle markierten Bomben unentdeckt zu entschärfen und das Missionsgebiet zu verlassen**. Hör nach dem Erfolg oder drei Versuchen auf."
    }
  },
  {
    id: "fc4-armed-escort",
    installments: [
      "fc-4"
    ],
    moods: [
      "restless",
      "progress"
    ],
    type: "objective",
    tags: [
      "support"
    ],
    minutes: 25,
    minimum: 5,
    en: {
      name: "Keep the Truck Moving",
      objective: "Take an available Armed Escort mission in **Far Cry 4**. Ride with the Golden Path supply truck and **protect it until the escort is complete**."
    },
    de: {
      name: "Den Laster schützen",
      objective: "Nimm in **Far Cry 4** einen verfügbaren bewaffneten Eskortauftrag an. Fahr mit dem Versorgungslaster des Goldenen Pfads und **beschütze ihn bis zum Ende des Auftrags**."
    }
  },
  {
    id: "fc4-eye-for-eye-photo",
    installments: [
      "fc-4"
    ],
    moods: [
      "focused",
      "progress"
    ],
    type: "objective",
    tags: [
      "photography"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Proof for Kyrat",
      objective: "Take an available Eye for an Eye mission in **Far Cry 4**. Use its specified weapon on the target and **photograph the body to finish the contract**."
    },
    de: {
      name: "Beweis für Kyrat",
      objective: "Nimm in **Far Cry 4** einen verfügbaren Auge-um-Auge-Auftrag an. Benutze die vorgeschriebene Waffe gegen das Ziel und **fotografiere den Leichnam zum Abschluss**."
    }
  },
  {
    id: "fc4-fashion-marked-hunt",
    installments: [
      "fc-4"
    ],
    moods: [
      "focused",
      "challenge"
    ],
    type: "challenge",
    tags: [
      "hunting",
      "three-attempts"
    ],
    minutes: 25,
    minimum: 5,
    en: {
      name: "Chiffon’s Commission",
      objective: "With a Kyrat Fashion Week mission unlocked in **Far Cry 4**, take its supplied weapon. **Finish that marked special hunt**, or stop after three hunt attempts."
    },
    de: {
      name: "Chiffons Bestellung",
      objective: "Nimm in **Far Cry 4** bei freigeschaltetem Kyrat-Fashion-Week-Auftrag die gestellte Waffe. **Beende die markierte Spezialjagd** oder hör nach drei Jagdversuchen auf."
    }
  },
  {
    id: "fc4-film-race",
    installments: [
      "fc-4"
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
      name: "Kyrat on Camera",
      objective: "At an available Kyrati Films Racing mission in **Far Cry 4**, **finish the stunt route before its timer runs out**. Stop after success or three runs."
    },
    de: {
      name: "Kyrat vor der Kamera",
      objective: "Versuch in **Far Cry 4** bei einem verfügbaren Kyrati-Films-Rennen, **die Stuntstrecke vor Ablauf des Timers zu schaffen**. Hör nach dem Erfolg oder drei Fahrten auf."
    }
  },
  {
    id: "fc4-propaganda-center",
    installments: [
      "fc-4"
    ],
    moods: [
      "progress",
      "restless"
    ],
    type: "objective",
    tags: [
      "story"
    ],
    minutes: 25,
    minimum: 5,
    en: {
      name: "Turn Off the Broadcast",
      objective: "Take an available Propaganda Center mission in **Far Cry 4**. **Destroy its marked broadcasting equipment and complete the mission**, keeping the facility as your only target."
    },
    de: {
      name: "Die Sendung beenden",
      objective: "Nimm in **Far Cry 4** einen verfügbaren Propagandazentrum-Auftrag an. **Zerstöre die markierte Sendeausrüstung und beende die Mission**. Die Anlage ist dein einziges Ziel."
    }
  },
  {
    id: "fc4-autodrive-ambush",
    installments: [
      "fc-4"
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
      name: "Let the Road Steer",
      objective: "In **Far Cry 4**, set a destination along an accessible road and enable auto-drive. **Use a sidearm during one already located roadside fight while auto-drive handles the road**, then end the drive safely."
    },
    de: {
      name: "Die Straße lenkt",
      objective: "Setz in **Far Cry 4** ein Ziel an einer erreichbaren Straße und aktiviere automatisches Fahren. **Benutze in einer schon gefundenen Straßenbegegnung eine Seitenwaffe, während der Wagen lenkt**. Beende die Fahrt sicher."
    }
  },
  {
    id: "fc4-mortar-angle",
    installments: [
      "fc-4"
    ],
    moods: [
      "curious"
    ],
    type: "experiment",
    tags: [
      "gadgets"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Kyrat’s Long Reach",
      objective: "Find an occupied position with an accessible mortar in **Far Cry 4**. **Fire one aimed mortar shell at a hostile position and observe the landing**, then leave the mortar."
    },
    de: {
      name: "Kyrats langer Arm",
      objective: "Such in **Far Cry 4** eine besetzte Stellung mit erreichbarem Mörser. **Schieß gezielt eine Granate auf eine Gegnerposition und beobachte den Einschlag**. Verlass danach den Mörser."
    }
  },
  {
    id: "fc4-grapple-lateral",
    installments: [
      "fc-4"
    ],
    moods: [
      "explore",
      "curious"
    ],
    type: "experiment",
    tags: [
      "traversal"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Across the Cliff",
      objective: "With the grapple unlocked in **Far Cry 4**, find a marked swing across a ravine. **Cross to the far ledge and follow the trail beyond it**, rather than returning down the road."
    },
    de: {
      name: "Quer über den Fels",
      objective: "Such in **Far Cry 4** mit freigeschaltetem Greifhaken einen markierten Schwung über eine Schlucht. **Erreiche den gegenüberliegenden Vorsprung und folge dem Weg dahinter**, statt zur Straße zurückzukehren."
    }
  },
  {
    id: "fc4-knife-followup",
    installments: [
      "fc-4"
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
    minimum: 3,
    en: {
      name: "Knife After Knife",
      objective: "With Knife Throw Takedown unlocked in **Far Cry 4**, approach two nearby guards. **Use one rear takedown followed by the thrown knife to defeat both**. Stop after success or three approaches."
    },
    de: {
      name: "Messer nach Messer",
      objective: "Nähere dich in **Far Cry 4** mit freigeschaltetem Messerwurf-Takedown zwei nahen Wachen. **Besiege beide mit einem Takedown von hinten und anschließendem Messerwurf**. Hör nach dem Erfolg oder drei Anläufen auf."
    }
  },
  {
    id: "fc4-moving-convoy",
    installments: [
      "fc-4"
    ],
    moods: [
      "restless",
      "focused"
    ],
    type: "objective",
    tags: [
      "driving"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Pagan’s Road Patrol",
      objective: "With a Pagan’s Wrath convoy already marked in **Far Cry 4**, choose an intercept point ahead of it. **Destroy all convoy vehicles and end the event**."
    },
    de: {
      name: "Pagans Straßenpatrouille",
      objective: "Wähle in **Far Cry 4** bei einem bereits markierten Pagan-Zorn-Konvoi einen Punkt vor seiner Route. **Zerstöre alle Konvoifahrzeuge und beende das Ereignis**."
    }
  },
  {
    id: "fc4-weakened-fortress",
    installments: [
      "fc-4"
    ],
    moods: [
      "focused",
      "challenge"
    ],
    type: "challenge",
    tags: [
      "one-life"
    ],
    minutes: 30,
    minimum: 5,
    en: {
      name: "Through the Fortress",
      objective: "With a fortress already weakened by story progress in **Far Cry 4**, enter through a side route. **Capture it without using a helicopter to skip its defenses**. One attempt, ending on capture or death."
    },
    de: {
      name: "Durch die Festung",
      objective: "Nimm in **Far Cry 4** eine bereits durch die Story geschwächte Festung über einen Seitenweg in Angriff. **Erobere sie ohne Hubschrauber, der ihre Verteidigung überspringt**. Ein Versuch, bis zur Eroberung oder zum Tod."
    }
  },
  {
    id: "fc4-yogi-colors",
    installments: [
      "fc-4"
    ],
    moods: [
      "curious"
    ],
    type: "inspiration",
    tags: [
      "story"
    ],
    minutes: 25,
    minimum: 5,
    en: {
      name: "Yogi’s Detour",
      objective: "If another Yogi and Reggie mission is available in **Far Cry 4**, follow their next strange detour. Stay with the altered movement and sights instead of chasing normal errands."
    },
    de: {
      name: "Yogis Umweg",
      objective: "Folge in **Far Cry 4** einer weiteren verfügbaren Mission von Yogi und Reggie. Lass dich auf das ungewohnte Movement und die veränderten Bilder ein, statt normale Aufträge abzuhaken."
    }
  },
  {
    id: "fc4-mohan-journal",
    installments: [
      "fc-4"
    ],
    moods: [
      "nostalgic",
      "curious"
    ],
    type: "objective",
    tags: [
      "collectibles",
      "story"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Mohan’s Page",
      objective: "With an accessible uncollected Mohan Ghale journal marker in **Far Cry 4**, **find the journal and read that entry**, tracing what Ajay’s father wrote about Kyrat."
    },
    de: {
      name: "Mohans Seite",
      objective: "Such in **Far Cry 4** bei einem erreichbaren offenen Marker **Mohans Tagebuch und lies den Eintrag**. Schau, was Ajays Vater über Kyrat geschrieben hat."
    }
  },
  {
    id: "fc4-mani-wheel",
    installments: [
      "fc-4"
    ],
    moods: [
      "explore",
      "relax"
    ],
    type: "objective",
    tags: [
      "collectibles"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "A Wayside Wheel",
      objective: "Follow an accessible uncollected Mani Wheel marker in **Far Cry 4**. Look for the shrine around it and **turn the wheel before leaving**."
    },
    de: {
      name: "Gebetsmühle am Weg",
      objective: "Folge in **Far Cry 4** einem erreichbaren offenen Gebetsmühlen-Marker. Such den Schrein darum herum und **dreh die Mühle, bevor du weitergehst**."
    }
  },
  {
    id: "fc4-banapur-home",
    installments: [
      "fc-4"
    ],
    moods: [
      "nostalgic",
      "relax"
    ],
    type: "inspiration",
    tags: [
      "on-foot"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Back to Banapur",
      objective: "Return to Banapur in **Far Cry 4** after its early battles. Walk between the houses and Golden Path meeting places that first gave Ajay a foothold in Kyrat."
    },
    de: {
      name: "Zurück nach Banapur",
      objective: "Kehre in **Far Cry 4** nach den frühen Kämpfen nach Banapur zurück. Geh zwischen den Häusern und Treffpunkten des Goldenen Pfads umher, an denen Ajay zuerst angekommen ist."
    }
  },
  {
    id: "fc4-buzzer-valley",
    installments: [
      "fc-4"
    ],
    moods: [
      "explore",
      "relax"
    ],
    type: "inspiration",
    tags: [
      "traversal"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Follow the Valley",
      objective: "Take an available Buzzer in **Far Cry 4** and stay below its altitude limit. Follow a river valley and look for settlements hidden by the road’s bends."
    },
    de: {
      name: "Dem Tal folgen",
      objective: "Nimm in **Far Cry 4** einen verfügbaren Buzzer und bleib unter seiner Höhengrenze. Folge einem Flusstal und such Orte, die hinter den Straßenkurven verborgen liegen."
    }
  },
  {
    id: "fc4-coop-fortress-plan",
    installments: [
      "fc-4"
    ],
    moods: [
      "connect"
    ],
    type: "objective",
    tags: [
      "co-op",
      "scouting"
    ],
    minutes: 30,
    minimum: 5,
    en: {
      name: "Two Sides of Kyrat",
      objective: "With co-op unlocked and a friend already joining **Far Cry 4**, choose one weakened fortress. Agree on separate entrances and **finish one capture together**, helping each other if either route fails."
    },
    de: {
      name: "Zwei Seiten von Kyrat",
      objective: "Wähle in **Far Cry 4** mit freigeschaltetem Koop und bereits mitspielendem Freund eine geschwächte Festung. Sprecht zwei Zugänge ab und **erobert sie gemeinsam**. Helft euch, wenn ein Weg nicht klappt."
    }
  },
  {
    id: "fc4-coop-elephant-ride",
    installments: [
      "fc-4"
    ],
    moods: [
      "connect",
      "relax"
    ],
    type: "inspiration",
    tags: [
      "co-op",
      "free-roam"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Company in Kyrat",
      objective: "With co-op unlocked and a friend already joining **Far Cry 4**, ride separate vehicles or elephants along Kyrat’s valley roads. Take the detours your friend spots and leave story missions for later."
    },
    de: {
      name: "Zusammen in Kyrat",
      objective: "Fahrt in **Far Cry 4** mit freigeschaltetem Koop und bereits mitspielendem Freund auf eigenen Fahrzeugen oder Elefanten durch die Täler. Nehmt die Umwege, die der andere entdeckt, und lasst Storymissionen warten."
    }
  },
  {
    id: "fc5-clutch-nixon-run",
    installments: [
      "fc-5"
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
      name: "Clutch’s Route",
      objective: "At an available Clutch Nixon memorial in **Far Cry 5**, **complete the stunt course through its checkpoints**. Stop after success or three runs."
    },
    de: {
      name: "Clutchs Strecke",
      objective: "Versuch in **Far Cry 5** an einem verfügbaren Clutch-Nixon-Denkmal, **den Stuntkurs durch alle Checkpoints zu schaffen**. Hör nach dem Erfolg oder drei Läufen auf."
    }
  },
  {
    id: "fc5-wolf-beacon",
    installments: [
      "fc-5"
    ],
    moods: [
      "progress",
      "explore"
    ],
    type: "objective",
    tags: [
      "exploration"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Silence the Beacon",
      objective: "With a wolf beacon already located in Jacob’s region in **Far Cry 5**, **destroy that beacon and leave its ruined site**, avoiding a search for all the others."
    },
    de: {
      name: "Sender abschalten",
      objective: "Zerstöre in **Far Cry 5** in Jacobs Region **einen bereits gefundenen Wolfssender und verlass seinen zerstörten Standort**. Die anderen Sender können warten."
    }
  },
  {
    id: "fc5-bliss-shrine",
    installments: [
      "fc-5"
    ],
    moods: [
      "progress",
      "restless"
    ],
    type: "objective",
    tags: [
      "exploration"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "A Shrine Less",
      objective: "With a cult shrine already located in Faith’s region in **Far Cry 5**, **destroy its Bliss container and confirm the shrine is counted as destroyed**."
    },
    de: {
      name: "Ein Schrein weniger",
      objective: "Zerstöre in **Far Cry 5** in Faiths Region **den Bliss-Behälter eines bereits gefundenen Sektenschreins und prüfe, ob er als zerstört zählt**."
    }
  },
  {
    id: "fc5-specialist-rescue",
    installments: [
      "fc-5"
    ],
    moods: [
      "progress",
      "focused"
    ],
    type: "objective",
    tags: [
      "story"
    ],
    minutes: 25,
    minimum: 5,
    en: {
      name: "Help Grace First",
      objective: "If Grace Armstrong’s recruitment mission is open in **Far Cry 5**, go to her church and **finish the defense that recruits her**."
    },
    de: {
      name: "Erst Grace helfen",
      objective: "Besuche in **Far Cry 5** bei offener Anwerbungsmission für Grace Armstrong ihre Kirche. **Beende die Verteidigung, durch die sie sich dir anschließt**."
    }
  },
  {
    id: "fc5-peaches-recruitment",
    installments: [
      "fc-5"
    ],
    moods: [
      "curious",
      "progress"
    ],
    type: "objective",
    tags: [
      "story"
    ],
    minutes: 25,
    minimum: 5,
    en: {
      name: "Peaches Comes Home",
      objective: "If Peaches’ recruitment mission is open in **Far Cry 5**, take the supplied treats and **bring Peaches back to Miss Mable to finish the mission**."
    },
    de: {
      name: "Peaches kommt heim",
      objective: "Nimm in **Far Cry 5** bei offener Anwerbungsmission für Peaches die bereitgestellten Leckerlis und **bring Peaches zum Missionsabschluss zu Miss Mable zurück**."
    }
  },
  {
    id: "fc5-chesseburger-recruitment",
    installments: [
      "fc-5"
    ],
    moods: [
      "progress",
      "explore"
    ],
    type: "objective",
    tags: [
      "fishing",
      "story"
    ],
    minutes: 25,
    minimum: 5,
    en: {
      name: "Dinner for Cheeseburger",
      objective: "If Cheeseburger’s recruitment mission is open in **Far Cry 5**, follow its fresh-salmon requirement. **Feed him the fish and complete his rescue**."
    },
    de: {
      name: "Essen für Cheeseburger",
      objective: "Folge in **Far Cry 5** bei offener Anwerbungsmission für Cheeseburger dem Auftrag für frischen Lachs. **Gib ihm den Fisch und schließ seine Rettung ab**."
    }
  },
  {
    id: "fc5-jess-flank",
    installments: [
      "fc-5"
    ],
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "stealth"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Jess Takes the Ridge",
      objective: "With Jess Black recruited in **Far Cry 5**, approach a small occupied camp. **Command her against an isolated guard while you move along a separate covered route**, then finish or leave the encounter."
    },
    de: {
      name: "Jess nimmt den Höhenweg",
      objective: "Nähere dich in **Far Cry 5** mit angeworbener Jess Black einem kleinen besetzten Lager. **Schick sie gegen eine einzelne Wache, während du einen anderen gedeckten Weg nimmst**. Beende oder verlass die Begegnung."
    }
  },
  {
    id: "fc5-hurk-roadblock",
    installments: [
      "fc-5"
    ],
    moods: [
      "restless",
      "curious"
    ],
    type: "objective",
    tags: [
      "abilities"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Hurk’s Loud Answer",
      objective: "With Hurk recruited and a cult vehicle already stopped nearby in **Far Cry 5**, **command him to attack that vehicle with his launcher and finish the encounter**. Keep civilians clear."
    },
    de: {
      name: "Hurks laute Antwort",
      objective: "Lass in **Far Cry 5** mit angeworbenem Hurk und einem bereits nahen, stehenden Sektenfahrzeug **Hurk den Wagen mit seinem Raketenwerfer angreifen und beende die Begegnung**. Halte Zivilisten fern."
    }
  },
  {
    id: "fc5-fishing-lure-match",
    installments: [
      "fc-5"
    ],
    moods: [
      "curious"
    ],
    type: "experiment",
    tags: [
      "fishing"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Match the Fly",
      objective: "With the Fisher King perk and its lures unlocked in **Far Cry 5**, choose a known fishing spot. **Catch one fish using the lure named for that fish type**."
    },
    de: {
      name: "Die passende Fliege",
      objective: "Fang in **Far Cry 5** mit freigeschaltetem Fischerkönig-Perk und seinen Ködern an einem bekannten Angelplatz **einen Fisch mit dem Köder für seine Fischart**."
    }
  },
  {
    id: "fc5-bow-extra-pelts",
    installments: [
      "fc-5"
    ],
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "hunting"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "A Bow’s Yield",
      objective: "With a bow and a common animal already found in **Far Cry 5**, **hunt and skin it with a bow kill**, then inspect the number of skins added."
    },
    de: {
      name: "Die Beute des Bogens",
      objective: "Jage in **Far Cry 5** mit Bogen ein bereits gefundenes häufiges Tier. **Erlege und häute es nach dem Bogenschuss** und prüfe, wie viele Felle dazukommen."
    }
  },
  {
    id: "fc5-binocular-labels",
    installments: [
      "fc-5"
    ],
    moods: [
      "curious",
      "explore"
    ],
    type: "experiment",
    tags: [
      "scouting"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Read the Valley",
      objective: "From a safe hill in **Far Cry 5**, use binoculars to identify a distant point of interest. **Mark it through the binoculars and reach that location on foot**."
    },
    de: {
      name: "Das Tal lesen",
      objective: "Markiere in **Far Cry 5** von einem sicheren Hügel aus einen entfernten interessanten Ort mit dem Fernglas. **Setz die Markierung darüber und erreiche den Ort zu Fuß**."
    }
  },
  {
    id: "fc5-safe-lockpick",
    installments: [
      "fc-5"
    ],
    moods: [
      "progress",
      "curious"
    ],
    type: "objective",
    tags: [
      "stealth"
    ],
    minutes: 10,
    minimum: 2,
    en: {
      name: "Open the Safe",
      objective: "With Locksmith unlocked in **Far Cry 5**, choose a safe you already found in a secured building. **Pick it open and take its contents**, without explosives."
    },
    de: {
      name: "Den Tresor öffnen",
      objective: "Öffne in **Far Cry 5** mit freigeschaltetem Schlosser-Perk einen bereits gefundenen Tresor in einem gesicherten Gebäude. **Knack ihn und nimm den Inhalt mit**, ohne Sprengstoff."
    }
  },
  {
    id: "fc5-blowtorch-fix",
    installments: [
      "fc-5"
    ],
    moods: [
      "curious"
    ],
    type: "experiment",
    tags: [
      "gadgets",
      "driving"
    ],
    minutes: 10,
    minimum: 2,
    en: {
      name: "Keep This Truck",
      objective: "With the Repair Torch perk and a damaged parked vehicle in **Far Cry 5**, **repair it with the torch and drive it to the next road junction**."
    },
    de: {
      name: "Der Laster bleibt",
      objective: "Repariere in **Far Cry 5** mit freigeschaltetem Reparaturbrenner ein beschädigtes geparktes Fahrzeug. **Benutze den Brenner und fahr den Wagen zur nächsten Straßenkreuzung**."
    }
  },
  {
    id: "fc5-patriot-paint",
    installments: [
      "fc-5"
    ],
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
      name: "Your Hope County Truck",
      objective: "At a garage in **Far Cry 5**, choose an owned vehicle with customization options. **Apply a different paint scheme and drive that vehicle out of the garage**."
    },
    de: {
      name: "Dein Hope-County-Laster",
      objective: "Wähle in **Far Cry 5** an einer Garage ein eigenes Fahrzeug mit Anpassungsoptionen. **Wende einen anderen Lack an und fahr den Wagen aus der Garage**."
    }
  },
  {
    id: "fc5-arcade-solo-discovery",
    installments: [
      "fc-5"
    ],
    moods: [
      "curious",
      "explore"
    ],
    type: "inspiration",
    tags: [
      "replay"
    ],
    minutes: 25,
    minimum: 5,
    en: {
      name: "Someone Else’s County",
      objective: "With Far Cry Arcade’s online map browser available in **Far Cry 5**, choose a player-made solo map with an exploration theme. Follow its setting and see how its creator uses familiar assets differently."
    },
    de: {
      name: "Ein fremdes Hope County",
      objective: "Wähle in **Far Cry 5** bei verfügbarem Online-Mapbrowser von Far Cry Arcade eine Solo-Map mit Erkundungsthema. Schau, wie ihr Ersteller die vertrauten Elemente anders verwendet."
    }
  },
  {
    id: "fc5-arcade-vista",
    installments: [
      "fc-5"
    ],
    moods: [
      "create",
      "relax"
    ],
    type: "creation",
    tags: [
      "level-editor"
    ],
    minutes: 25,
    minimum: 5,
    en: {
      name: "An Arcade Lake",
      objective: "In the Arcade editor of **Far Cry 5**, build a small lakeside scene with a spawn point, a pier, and a path. **Save it and walk from spawn to the pier in a playtest**."
    },
    de: {
      name: "Ein See zum Anschauen",
      objective: "Bau im Arcade-Editor von **Far Cry 5** eine kleine Seeszene mit Spawnpunkt, Steg und Weg. **Speichere sie und geh im Spieltest vom Spawn zum Steg**."
    }
  },
  {
    id: "fc5-arcade-cover-check",
    installments: [
      "fc-5"
    ],
    moods: [
      "create",
      "focused"
    ],
    type: "experiment",
    tags: [
      "level-editor",
      "scouting"
    ],
    minutes: 25,
    minimum: 5,
    en: {
      name: "Cover That Works",
      objective: "In the Arcade editor of **Far Cry 5**, place a spawn, one armed enemy, and two low cover objects. **Playtest whether both objects block the enemy’s fire and adjust them once**."
    },
    de: {
      name: "Deckung, die funktioniert",
      objective: "Platziere im Arcade-Editor von **Far Cry 5** einen Spawn, einen bewaffneten Gegner und zwei niedrige Deckungen. **Prüfe im Spieltest beide Deckungen gegen seine Schüsse und passe sie einmal an**."
    }
  },
  {
    id: "fc5-coop-river-fishing",
    installments: [
      "fc-5"
    ],
    moods: [
      "connect",
      "relax"
    ],
    type: "inspiration",
    tags: [
      "co-op",
      "fishing"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Two River Rods",
      objective: "With campaign co-op unlocked and a friend already joining **Far Cry 5**, find a riverbank where you can both fish. Chat and cast together without a catch target."
    },
    de: {
      name: "Zwei Angeln am Fluss",
      objective: "Such in **Far Cry 5** mit freigeschaltetem Kampagnen-Koop und bereits mitspielendem Freund ein Ufer, an dem ihr beide angeln könnt. Redet und werft die Angeln aus, ohne Fangziel."
    }
  },
  {
    id: "fc5-coop-pilot-passenger",
    installments: [
      "fc-5"
    ],
    moods: [
      "connect"
    ],
    type: "objective",
    tags: [
      "co-op",
      "traversal"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Pilot and Passenger",
      objective: "With campaign co-op unlocked, a friend present, and a two-seat helicopter available in **Far Cry 5**, choose a liberated outpost. **Fly there together and land with both players still aboard**."
    },
    de: {
      name: "Pilot und Passagier",
      objective: "Wählt in **Far Cry 5** mit freigeschaltetem Kampagnen-Koop, mitspielendem Freund und zweisitzigem Hubschrauber einen befreiten Außenposten. **Fliegt gemeinsam hin und landet, während ihr beide noch an Bord seid**."
    }
  },
  {
    id: "fc5-fallsend-after",
    installments: [
      "fc-5"
    ],
    moods: [
      "nostalgic",
      "low-energy"
    ],
    type: "inspiration",
    tags: [
      "on-foot"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Fall’s End Again",
      objective: "After liberating Fall’s End in **Far Cry 5**, return between missions and walk its main street. Spend a little time with the town you helped take back."
    },
    de: {
      name: "Wieder in Fall’s End",
      objective: "Kehre in **Far Cry 5** nach der Befreiung von Fall’s End zwischen Missionen zurück und geh die Hauptstraße entlang. Verbring etwas Zeit in dem Ort, den du zurückgeholt hast."
    }
  }
]);
