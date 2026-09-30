import { defineGameQuests } from "../defineGameQuests";

export const crimsonDesertQuests = defineGameQuests("crimson-desert", [
  { id: "skybridge-gate", moods: ["explore"], type: "objective", tags: ["puzzles", "exploration"], minutes: 25, minimum: 3,
    en: { name: "Open an Abyss Gate", objective: "Find an unrestored **Abyss Skybridge Gate** in Crimson Desert. **Solve its local mechanism, restore the gate, and travel through it once.**" },
    de: { name: "Ein Tor im Abyss öffnen", objective: "Finde in Crimson Desert ein noch nicht aktiviertes **Abyss-Skybridge-Tor**. **Löse seinen Mechanismus, stelle das Tor wieder her und reise einmal hindurch.**" } },
  { id: "abyss-refinement", moods: ["progress"], type: "objective", tags: ["crafting", "loadout"], minutes: 20, minimum: 3,
    en: { name: "An Artifact in the Blade", objective: "Take a favorite weapon and an **Abyss Artifact** to a refinement station. **Use the artifact for its next refinement and test the weapon in one fight.**" },
    de: { name: "Ein Artefakt für die Klinge", objective: "Bring eine Lieblingswaffe und ein **Abyss-Artefakt** zu einer Verbesserungsstation. **Nutze das Artefakt für die nächste Stufe und teste die Waffe in einem Kampf.**" } },
  { id: "fish-pond", moods: ["relax"], type: "objective", tags: ["fishing"], minutes: 10, minimum: 2,
    en: { name: "A Fish at Home", objective: "Use a fishing rod you already have in **Crimson Desert**. **Catch one fish and add it to your fish pond.**" },
    de: { name: "Ein Fisch für den Teich", objective: "Angel in **Crimson Desert** mit einer Angel, die du schon besitzt. **Fang einen Fisch und setz ihn in deinen Fischteich.**" } },
  { id: "pet-break", moods: ["low-energy", "relax"], type: "inspiration", tags: ["animals"], minutes: 10, minimum: 2,
    en: { name: "Walk with a Pet", objective: "Spend this **Crimson Desert** session with a pet you have already registered. Take it along while you explore nearby, then follow whatever catches your eye." },
    de: { name: "Mit dem Tier unterwegs", objective: "Nimm in **Crimson Desert** ein Tier mit, das du bereits als Haustier hast. Erkunde mit ihm die nähere Umgebung und folge einfach dem, was dir auffällt." } },
  { id: "abyss-puzzle", moods: ["curious", "focused"], type: "objective", tags: ["puzzles"], minutes: 15, minimum: 3,
    en: { name: "Abyss Mechanism", objective: "Choose an **Abyss puzzle** already marked on your **Crimson Desert** map. Work through its mechanism and **activate the marked exit or reward** to finish." },
    de: { name: "Mechanismus im Abyss", objective: "Such dir in **Crimson Desert** ein bereits markiertes **Abyss-Rätsel** auf der Karte aus. Löse den Mechanismus und **aktiviere den markierten Ausgang oder die Belohnung**." } },
  { id: "boss-rematch", moods: ["challenge", "focused"], type: "challenge", tags: ["boss", "three-attempts"], minutes: 20, minimum: 3,
    en: { name: "One More Round", objective: "Open an available Crimson Desert boss Memory Fragment and choose **Resonate**, where the boss scales to your progress. **Win the rematch or finish your third attempt.**" },
    de: { name: "Noch eine Runde", objective: "Öffne ein verfügbares Boss-Erinnerungsfragment in Crimson Desert und wähle **Resonanz**, damit der Boss mit dir skaliert. **Gewinne den Rückkampf oder beende deinen dritten Versuch.**" } },
  { id: "pinball-break", moods: ["relax"], type: "objective", tags: [], minutes: 10, minimum: 2,
    en: { name: "Pywel Pinball", objective: "Find an available **pinball table in Crimson Desert** and **play one full round**, letting the score stand without restarting." },
    de: { name: "Flipperpause in Pywel", objective: "Such einen verfügbaren **Flipper in Crimson Desert** und **spiel eine ganze Runde**, ohne den Punktestand durch Neustarten zu ändern." } },
  { id: "save-a-view", moods: ["create"], type: "creation", tags: ["photography"], minutes: 10, minimum: 2,
    en: { name: "Pywel in Frame", objective: "Find a view in **Crimson Desert** that includes both a landmark and its surroundings. Open Photo Mode, adjust the camera, and **save one screenshot**." },
    de: { name: "Pywel im Bild", objective: "Such dir in **Crimson Desert** einen Ausblick mit einem markanten Ort und seiner Umgebung. Öffne den Fotomodus, richte die Kamera aus und **speichere einen Screenshot**." } },
  { id: "new-combat-chain", moods: ["curious", "focused"], type: "experiment", tags: ["abilities"], minutes: 15, minimum: 3,
    en: { name: "Link Two Skills", objective: "In a **Crimson Desert** fight against ordinary enemies, use two different unlocked skills one after the other. **Land both skills in the same encounter**, then finish the fight." },
    de: { name: "Zwei Skills verbinden", objective: "Setz in **Crimson Desert** in einem Kampf gegen normale Gegner zwei verschiedene freigeschaltete Skills nacheinander ein. **Triff mit beiden im selben Gefecht** und beende den Kampf." } },
  { id: "house-layout", moods: ["create", "relax"], type: "creation", tags: ["decorating"], minutes: 20, minimum: 3,
    en: { name: "Choose a Greymane Home", objective: "At the Greymane Camp, **switch to an unlocked house layout and arrange two owned furnishings to fit its new space**. Save the layout." },
    de: { name: "Ein Zuhause für die Graumähnen", objective: "Wechsle im Lager der Graumähnen **zu einem freigeschalteten Haustyp und richte zwei vorhandene Möbel passend zum neuen Grundriss ein**. Speichere die Änderung." } },
  {
    id: "cook-before-departure",
    moods: [
      "progress",
      "focused"
    ],
    type: "objective",
    tags: [
      "cooking"
    ],
    minutes: 15,
    minimum: 2,
    en: {
      name: "Cook for the Road",
      objective: "At an **available Crimson Desert cooking fire**, choose a known recipe whose ingredients you already have. **Cook one serving and put it in a quick slot** before leaving camp."
    },
    de: {
      name: "Essen für den Weg",
      objective: "Wähl an einem **verfügbaren Kochfeuer in Crimson Desert** ein bekanntes Rezept, dessen Zutaten du schon hast. **Koch eine Portion und leg sie in einen Schnellzugriff**, bevor du das Lager verlässt."
    }
  },
  {
    id: "dye-one-piece",
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
      name: "One Colour to Keep",
      objective: "With the **Dyehouse unlocked in Crimson Desert** and dye already owned, recolour one equipped armour piece. **Apply the dye and leave the menu wearing it**."
    },
    de: {
      name: "Eine Farbe behalten",
      objective: "Färb in **Crimson Desert mit freigeschaltetem Färber und vorhandener Farbe** ein getragenes Rüstungsteil um. **Übernimm die Farbe und verlass das Menü mit dem Teil ausgerüstet**."
    }
  },
  {
    id: "log-for-camp",
    moods: [
      "progress"
    ],
    type: "objective",
    tags: [
      "crafting"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Timber for the Camp",
      objective: "In **Crimson Desert**, choose an available Greymane Camp request that needs timber and has a nearby source. **Chop the missing timber and hand in that request**."
    },
    de: {
      name: "Holz fürs Lager",
      objective: "Wähl in **Crimson Desert** einen verfügbaren Lagerauftrag der Graumähnen, für den Holz fehlt und eine Quelle in der Nähe liegt. **Fäll das fehlende Holz und gib den Auftrag ab**."
    }
  },
  {
    id: "loom-house-item",
    moods: [
      "create",
      "progress"
    ],
    type: "creation",
    tags: [
      "crafting",
      "decorating"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Made at the Loom",
      objective: "At a **Crimson Desert loom**, use a known furnishing recipe with materials you already own. **Craft it and place it in your unlocked house**."
    },
    de: {
      name: "Am Webstuhl gemacht",
      objective: "Nutz an einem **Webstuhl in Crimson Desert** ein bekanntes Möbelrezept mit vorhandenen Materialien. **Stell das Stück her und platziere es in deinem freigeschalteten Haus**."
    }
  },
  {
    id: "outside-lamp-path",
    moods: [
      "create",
      "relax"
    ],
    type: "creation",
    tags: [
      "decorating"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Light the Doorway",
      objective: "With **outdoor housing decoration unlocked in Crimson Desert**, arrange owned lights along the path to your door. **Save the arrangement and walk the path to check the spacing**."
    },
    de: {
      name: "Licht vor der Tür",
      objective: "Stell in **Crimson Desert mit freigeschalteter Außendekoration** vorhandene Leuchten entlang des Wegs zu deiner Tür auf. **Speichere die Anordnung und geh den Weg ab, um die Abstände zu prüfen**."
    }
  },
  {
    id: "read-a-memory",
    moods: [
      "curious",
      "focused"
    ],
    type: "objective",
    tags: [
      "story"
    ],
    minutes: 15,
    minimum: 2,
    en: {
      name: "Look through Visiones",
      objective: "With **Visiones available in Crimson Desert**, choose a reachable unread memory already on your route. **Watch that memory through to its end** and see whose past it shows."
    },
    de: {
      name: "Durch Visiones schauen",
      objective: "Such in **Crimson Desert mit verfügbaren Visiones** eine erreichbare ungelesene Erinnerung auf deinem Weg. **Sieh die Erinnerung bis zum Ende an** und schau, wessen Vergangenheit sie zeigt."
    }
  },
  {
    id: "observe-and-use",
    moods: [
      "curious",
      "progress"
    ],
    type: "objective",
    tags: [
      "abilities"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Learn by Watching",
      objective: "In **Crimson Desert**, find a nearby character offering an unlearned observable skill. **Learn it through observation and use it once in a suitable encounter or puzzle**."
    },
    de: {
      name: "Beim Zuschauen lernen",
      objective: "Such in **Crimson Desert** eine nahe Figur mit einem noch ungelernten beobachtbaren Skill. **Lern ihn durch Beobachten und nutze ihn einmal in einer passenden Begegnung oder einem Rätsel**."
    }
  },
  {
    id: "glide-between-hills",
    moods: [
      "explore"
    ],
    type: "inspiration",
    tags: [
      "traversal"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Between the Hills",
      objective: "With **gliding unlocked in Crimson Desert**, start from a reachable high point. Read the valleys and rooftops below, glide toward a place you have not visited, and let the next climb choose your route."
    },
    de: {
      name: "Zwischen den Hügeln",
      objective: "Starte in **Crimson Desert mit freigeschaltetem Gleiten** an einem erreichbaren hohen Punkt. Schau auf die Täler und Dächer darunter, gleite zu einem noch unbekannten Ort und lass den nächsten Aufstieg deinen Weg bestimmen."
    }
  },
  {
    id: "horse-without-map",
    moods: [
      "relax"
    ],
    type: "inspiration",
    tags: [
      "free-roam"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Follow the Road",
      objective: "Mount a **horse you already own in Crimson Desert** outside a safe settlement. Follow a road through familiar countryside and take the turn that looks inviting, without planning a destination."
    },
    de: {
      name: "Der Straße folgen",
      objective: "Steig außerhalb einer sicheren Siedlung in **Crimson Desert auf ein vorhandenes Pferd**. Folge einer Straße durch vertraute Landschaft und nimm die Abzweigung, die dich anspricht, ohne vorher ein Ziel festzulegen."
    }
  },
  {
    id: "arm-wrestle-attempt",
    moods: [
      "restless",
      "focused"
    ],
    type: "objective",
    tags: [],
    minutes: 10,
    minimum: 2,
    en: {
      name: "Take a Seat",
      objective: "Find an **available arm-wrestling table in Crimson Desert**. **Play one contest through its result**, win or lose, then leave the table."
    },
    de: {
      name: "An den Tisch",
      objective: "Such in **Crimson Desert einen verfügbaren Tisch zum Armdrücken**. **Spiel einen Wettkampf bis zum Ergebnis**, ob Sieg oder Niederlage, und verlass den Tisch danach."
    }
  },
  {
    id: "archery-steady-shot",
    moods: [
      "focused",
      "challenge"
    ],
    type: "challenge",
    tags: [
      "three-attempts"
    ],
    minutes: 15,
    minimum: 2,
    en: {
      name: "Hold for the Target",
      objective: "Enter an **available Crimson Desert Archery Contest**. **Beat its posted target score while waiting for a clear aim before each shot**, or finish your third contest."
    },
    de: {
      name: "Auf das Ziel warten",
      objective: "Starte einen **verfügbaren Bogenschießwettbewerb in Crimson Desert**. **Überbiete die angezeigte Zielpunktzahl und warte vor jedem Schuss auf ein klares Ziel** oder beende deinen dritten Wettkampf."
    }
  },
  {
    id: "marksmanship-first",
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
      name: "Try the Other Range",
      objective: "At an **available Marksmanship minigame in Crimson Desert**, **play once using aimed shots and keep the result**. Compare its targets with the bow contests you may know."
    },
    de: {
      name: "Den anderen Schießstand testen",
      objective: "**Spiel das verfügbare Marksmanship-Minigame in Crimson Desert einmal mit gezielten Schüssen und behalte das Ergebnis**. Vergleiche seine Ziele mit den Bogenschießwettbewerben, die du vielleicht schon kennst."
    }
  },
  {
    id: "ore-force-current",
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "abilities",
      "crafting"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Mine from a Distance",
      objective: "With **Force Current unlocked for Kliff in Crimson Desert**, find a reachable ore vein. **Try mining it through Axiom Force and Force Current**, then compare the reach with your usual tool."
    },
    de: {
      name: "Aus der Ferne abbauen",
      objective: "Such in **Crimson Desert mit freigeschaltetem Force Current für Kliff** eine erreichbare Erzader. **Probier den Abbau über Axiom Force und Force Current** und vergleiche die Reichweite mit deinem üblichen Werkzeug."
    }
  },
  {
    id: "palm-socket-range",
    moods: [
      "focused",
      "curious"
    ],
    type: "experiment",
    tags: [
      "puzzles",
      "abilities"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Seat the Core Remotely",
      objective: "At an **unfinished Crimson Desert puzzle with a movable power core**, and with Kliff’s Force Current unlocked, **try seating the core through Axiom Force from a distance**. Stop after the socket activates or three placements."
    },
    de: {
      name: "Den Kern fern einsetzen",
      objective: "Probier an einem **offenen Crimson-Desert-Rätsel mit beweglichem Energiekern** und freigeschaltetem Force Current für Kliff, **den Kern aus der Ferne mit Axiom Force einzusetzen**. Hör nach aktivem Sockel oder drei Platzierungen auf."
    }
  },
  {
    id: "slide-chain-combat",
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
      name: "Attack from the Slide",
      objective: "With a **sliding chain attack unlocked in Crimson Desert**, enter a fight against ordinary enemies. **Try the chain from a slide**, then finish the encounter or stop if defeated."
    },
    de: {
      name: "Aus dem Rutschen angreifen",
      objective: "Starte in **Crimson Desert mit freigeschaltetem Kettenangriff beim Rutschen** einen Kampf gegen normale Gegner. **Probier die Kette aus dem Rutschen** und beende die Begegnung oder hör bei einer Niederlage auf."
    }
  },
  {
    id: "storage-adventure-kit",
    moods: [
      "overwhelmed",
      "progress"
    ],
    type: "objective",
    tags: [
      "loadout"
    ],
    minutes: 10,
    minimum: 2,
    en: {
      name: "Pack One Small Kit",
      objective: "At **Crimson Desert private storage in Hernand or camp**, keep your usual weapon and food on you. **Store one spare armour piece and leave for the camp path**, with that item out of your carried inventory."
    },
    de: {
      name: "Ein kleines Set packen",
      objective: "Lass an **Crimson Deserts privatem Lager in Hernand oder im Camp** deine übliche Waffe und dein Essen im Gepäck. **Lagere ein übriges Rüstungsteil ein und geh zum Campweg**, mit diesem Teil aus deinem mitgeführten Inventar."
    }
  },
  {
    id: "fountain-workstation",
    moods: [
      "create",
      "focused"
    ],
    type: "creation",
    tags: [
      "crafting"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "A Garden Fountain",
      objective: "With **outdoor housing decoration unlocked in Crimson Desert**, use an available workstation and a known fountain recipe with materials already owned. **Craft the fountain and place it outside your house** beside its entrance path."
    },
    de: {
      name: "Ein Gartenbrunnen",
      objective: "Nutze mit **freigeschalteter Außendekoration fürs Haus in Crimson Desert** eine verfügbare Werkstation und ein bekanntes Brunnenrezept mit vorhandenen Materialien. **Stell den Brunnen her und platzier ihn draußen am Haus** neben dem Weg zur Tür."
    }
  },
  {
    id: "damiane-memory-walk",
    moods: [
      "curious",
      "explore"
    ],
    type: "inspiration",
    tags: [
      "story"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Pywel as Damiane",
      objective: "With **Damiane and Visiones unlocked in Crimson Desert**, travel through a familiar area as her. Look for memories along the way and explore how her movement changes the route you usually take as Kliff."
    },
    de: {
      name: "Pywel als Damiane",
      objective: "Reise in **Crimson Desert mit freigeschalteter Damiane und Visiones** als sie durch eine vertraute Gegend. Schau unterwegs nach Erinnerungen und erkunde, wie ihr Movement deinen gewohnten Weg als Kliff verändert."
    }
  },
  {
    id: "climb-town-roof",
    moods: [
      "explore",
      "focused"
    ],
    type: "objective",
    tags: [
      "traversal"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Above Hernand",
      objective: "With **climbing available in Crimson Desert**, pick a reachable roof in Hernand you have not stood on. **Climb onto it and find a safe way back to the street**, without fast travel."
    },
    de: {
      name: "Über Hernand",
      objective: "Such in **Crimson Desert mit verfügbarer Kletterfunktion** ein erreichbares Dach in Hernand, auf dem du noch nicht warst. **Kletter hinauf und finde einen sicheren Weg zurück zur Straße**, ohne Schnellreise."
    }
  },
  {
    id: "camp-food-familiar",
    moods: [
      "relax",
      "low-energy"
    ],
    type: "inspiration",
    tags: [
      "cooking"
    ],
    minutes: 15,
    minimum: 2,
    en: {
      name: "Stay by the Campfire",
      objective: "Return to the **Greymane Camp in Crimson Desert with cooking unlocked**. Work with recipes and ingredients you already know, wander between the kitchen and your lodgings, and leave the next battle for later."
    },
    de: {
      name: "Am Lagerfeuer bleiben",
      objective: "Kehr in **Crimson Desert mit freigeschaltetem Kochen** ins Lager der Graumähnen zurück. Beschäftige dich mit vertrauten Rezepten und Zutaten, schlendere zwischen Küche und Unterkunft und lass den nächsten Kampf noch warten."
    }
  }
]);
