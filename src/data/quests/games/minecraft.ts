import { defineGameQuests } from "../defineGameQuests";

export const minecraftQuests = defineGameQuests("minecraft", [
  {
    "id": "working-fishing-pier",
    "moods": [
      "create",
      "relax"
    ],
    "type": "creation",
    "tags": [
      "building",
      "fishing"
    ],
    "minutes": 25,
    "minimum": 5,
    "en": {
      "name": "Open the Pier",
      "objective": "At a shore near home in **Minecraft**, build a small pier with a barrel and lighting. Leave open water in front of the casting spot, then **catch one fish from the pier and store it in the barrel**."
    },
    "de": {
      "name": "Der Steg ist offen",
      "objective": "Bau in **Minecraft** am Ufer nahe deinem Zuhause einen kleinen Steg mit Fass und Licht. Lass davor genug freies Wasser zum Angeln und **fang vom Steg einen Fisch, den du ins Fass legst**."
    }
  },
  {
    "id": "village-payday",
    "moods": [
      "progress",
      "relax"
    ],
    "type": "objective",
    "tags": [
      "farming",
      "trading"
    ],
    "minutes": 20,
    "minimum": 3,
    "en": {
      "name": "Village Payday",
      "objective": "In **Minecraft Survival**, use an established wheat field and a farmer who buys wheat. **Harvest enough for one trade, replant the harvested spaces, and earn the emeralds**. Leave the village’s hay bales alone."
    },
    "de": {
      "name": "Zahltag im Dorf",
      "objective": "Nutze in **Minecraft im Überlebensmodus** ein bestehendes Weizenfeld und einen Bauern, der Weizen kauft. **Ernte genug Weizen für einen Handel, säe die abgeernteten Stellen neu ein und tausch den Weizen gegen Smaragde**. Lass die Heuballen im Dorf stehen."
    }
  },
  {
    "id": "furnace-shift",
    "moods": [
      "create",
      "focused"
    ],
    "type": "creation",
    "tags": [
      "automation",
      "cooking"
    ],
    "minutes": 25,
    "minimum": 5,
    "en": {
      "name": "Furnace Shift",
      "objective": "In **Minecraft**, connect an input chest, fuel chest, and output chest to a furnace with hoppers. Load eight raw food items and enough fuel. **Collect all eight cooked items from the output chest** without moving them through the furnace by hand."
    },
    "de": {
      "name": "Ofendienst",
      "objective": "Verbinde in **Minecraft** eine Truhe für Zutaten, eine für Brennstoff und eine für die Ausgabe über Trichter mit einem Ofen. Fülle acht rohe Lebensmittel und genug Brennstoff ein. **Hole alle acht fertigen Lebensmittel aus der Ausgabetruhe**, ohne sie von Hand durch den Ofen zu bewegen."
    }
  },
  {
    "id": "note-block-doorbell",
    rarity: "special",
    "moods": [
      "create",
      "curious"
    ],
    "type": "experiment",
    "tags": [
      "automation"
    ],
    "minutes": 20,
    "minimum": 3,
    "en": {
      "name": "Someone's Home",
      "objective": "In **Minecraft**, build a three-note doorbell at your entrance using a button, note blocks and repeaters. Try two rhythms, keep your favorite, and **play the whole tune with one press from outside**."
    },
    "de": {
      "name": "Jemand zu Hause",
      "objective": "Bau in **Minecraft** mit Knopf, Notenblöcken und Verstärkern eine Dreiton-Klingel an deiner Eingangstür. Probiere zwei Rhythmen, behalte deinen Favoriten und **spiele die ganze Melodie mit einem Druck von draußen**."
    }
  },
  {
    "id": "smoke-and-honey",
    "moods": [
      "relax",
      "curious"
    ],
    "type": "objective",
    "tags": [
      "farming"
    ],
    "minutes": 10,
    "minimum": 2,
    "en": {
      "name": "Smoke and Honey",
      "objective": "Bring a glass bottle and campfire to a full bee nest in **Minecraft**. Put the lit campfire underneath so its smoke reaches the nest, then **collect one honey bottle without angering the bees**. Extinguish the fire afterward."
    },
    "de": {
      "name": "Rauch und Honig",
      "objective": "Bring in **Minecraft** eine Glasflasche und ein Lagerfeuer zu einem vollen Bienennest. Stelle das brennende Lagerfeuer darunter, sodass der Rauch das Nest erreicht, und **fülle eine Honigflasche, ohne die Bienen wütend zu machen**. Lösche danach das Feuer."
    }
  },
  {
    "id": "second-chance-villager",
    "moods": [
      "progress",
      "focused"
    ],
    "type": "objective",
    "tags": [
      "no-kills"
    ],
    "minutes": 10,
    "minimum": 3,
    "en": {
      "name": "Second Chance",
      "objective": "In **Minecraft Survival**, with a zombie villager, golden apple, and splash potion of Weakness ready, shelter the villager from sunlight. Apply Weakness, feed it the apple, and **keep it safe through the cure**."
    },
    "de": {
      "name": "Zweite Chance",
      "objective": "Wenn in **Minecraft im Überlebensmodus** ein Zombiedorfbewohner, ein goldener Apfel und ein Wurftrank der Schwäche bereit sind, schütze den Dorfbewohner vor Sonnenlicht. Wirf den Trank, gib ihm den Apfel und **halte ihn bis zum Ende der Heilung sicher**."
    }
  },
  {
    "id": "map-home",
    "moods": [
      "explore",
      "curious"
    ],
    "type": "objective",
    "tags": [
      "exploration",
      "on-foot"
    ],
    "minutes": 30,
    "minimum": 5,
    "en": {
      "name": "Map One Corner",
      "objective": "In **Minecraft**, open a new, unexpanded map at your base. Choose one reachable quadrant and **fill its blank patches on foot**. Return home and put the map in an item frame. Bring food before leaving."
    },
    "de": {
      "name": "Die Umgebung kartieren",
      "objective": "Öffne in **Minecraft** an deiner Basis eine neue, nicht vergrößerte Karte. Such dir darauf einen Bereich aus und **deck seine leeren Stellen zu Fuß auf**. Geh mit Essen los, kehr nach Hause zurück und häng die Karte in einen Rahmen."
    }
  },
  {
    id: "target-signal-range",
    moods: [
      "create",
      "focused"
    ],
    type: "creation",
    tags: [
      "automation"
    ],
    minutes: 25,
    minimum: 5,
    en: {
      name: "A Target That Answers",
      objective: "In **Minecraft**, build a target block connected to a line of redstone lamps. With a bow and arrows ready, **make an edge hit light fewer lamps than a center hit**."
    },
    de: {
      name: "Ein Ziel, das reagiert",
      objective: "**Minecraft**: Verbinde einen Zielblock mit einer Reihe Redstone-Lampen. Halte Bogen und Pfeile bereit und **lass einen Randtreffer weniger Lampen einschalten als einen Treffer in die Mitte**."
    }
  },
  {
    id: "copper-wax-scrape",
    moods: [
      "curious",
      "create"
    ],
    type: "experiment",
    tags: [
      "building"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Keep the Copper Color",
      objective: "In **Minecraft**, with oxidized copper blocks, honeycomb and an axe ready, **wax one block and scrape oxidation from another**. Place them beside each other to compare the finishes."
    },
    de: {
      name: "Die Kupferfarbe behalten",
      objective: "**Minecraft**: **Wachse einen oxidierten Kupferblock und schabst von einem anderen die Oxidation ab**, wenn Honigwabe und Axt bereitliegen. Stell beide nebeneinander und vergleiche die Oberflächen."
    }
  },
  {
    id: "loom-house-banner",
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
      name: "A Banner for Home",
      objective: "In **Minecraft**, with a loom, a banner and dyes ready, combine at least two patterns into a house banner. **Hang the finished banner at your entrance**."
    },
    de: {
      name: "Ein Banner fürs Haus",
      objective: "**Minecraft**: Kombiniere mit vorhandenem Webstuhl, Banner und Farbstoffen mindestens zwei Muster zu einem Hausbanner. **Häng das fertige Banner an deinen Eingang**."
    }
  },
  {
    id: "stonecutter-stair-comparison",
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "crafting"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Same Stone, More Stairs",
      objective: "In **Minecraft**, with twelve cobblestone ready, use six in a crafting-table stair recipe and the other six in a stonecutter. **Compare the stair counts and place both batches in a short staircase**."
    },
    de: {
      name: "Gleicher Stein, mehr Treppen",
      objective: "**Minecraft**: Nutze von zwölf vorhandenen Bruchsteinen sechs für Treppen an der Werkbank und sechs im Steinschneider. **Vergleiche die Treppenanzahl und verbaue beide Chargen in einer kleinen Treppe**."
    }
  },
  {
    id: "smithing-owned-trim",
    moods: [
      "create",
      "progress"
    ],
    type: "creation",
    tags: [
      "outfit",
      "crafting"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "A Trim You Choose",
      objective: "In **Minecraft**, with an armor-trim template, a color material and armor ready, use a smithing table to **apply the trim and wear the armor**. Use a template you can spare."
    },
    de: {
      name: "Dein Rüstungsmuster",
      objective: "**Minecraft**: **Verziere an einem Schmiedetisch ein Rüstungsteil und zieh es an**, wenn Verzierungsvorlage und Farbmaterial bereitliegen. Nutze eine Vorlage, die du nicht mehr brauchst."
    }
  },
  {
    id: "brush-known-ruin",
    moods: [
      "explore",
      "curious"
    ],
    type: "objective",
    tags: [
      "collectibles"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Brush, Don’t Break",
      objective: "In **Minecraft**, with a brush ready at a ruin where you have already spotted suspicious sand or gravel, **brush one block until its item comes free**. Keep it supported so it cannot fall."
    },
    de: {
      name: "Pinseln statt abbauen",
      objective: "**Minecraft**: **Pinsele mit vorhandenem Pinsel einen bereits entdeckten verdächtigen Sand- oder Kiesblock in einer Ruine frei, bis sein Gegenstand herauskommt**. Stütze den Block, damit er nicht herunterfällt."
    }
  },
  {
    id: "sherd-keepsake-pot",
    moods: [
      "create",
      "relax"
    ],
    type: "creation",
    tags: [
      "decorating",
      "collectibles"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "A Keepsake Pot",
      objective: "In **Minecraft**, with pottery sherds and bricks already owned, choose the four sides of a decorated pot. **Place it at home and put one keepsake item inside**."
    },
    de: {
      name: "Ein Topf mit Geschichte",
      objective: "**Minecraft**: Wähle mit vorhandenen Keramikscherben und Ziegeln die vier Seiten eines verzierten Topfs. **Stell ihn zu Hause auf und leg ein Erinnerungsstück hinein**."
    }
  },
  {
    id: "camel-two-riders",
    moods: [
      "connect",
      "explore"
    ],
    type: "objective",
    tags: [
      "co-op",
      "traversal"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Two on One Camel",
      objective: "In **Minecraft**, on a shared world with a friend already present and a saddled camel ready, **ride together to a nearby landmark and back on the same camel**. Let each person steer one leg."
    },
    de: {
      name: "Ein Kamel für zwei",
      objective: "**Minecraft**: **Reitet auf einer gemeinsamen Welt zu einer nahen Landmarke und auf demselben Kamel zurück**, wenn ein Freund schon da und ein gesatteltes Kamel bereit ist. Wechselt für den Rückweg den Fahrer."
    }
  },
  {
    id: "bubble-lift-to-roof",
    moods: [
      "create",
      "focused"
    ],
    type: "creation",
    tags: [
      "building",
      "automation"
    ],
    minutes: 25,
    minimum: 5,
    en: {
      name: "Up in Bubbles",
      objective: "In **Minecraft**, with soul sand, water and building blocks ready, **build a short upward bubble elevator between two floors and ride it**. Make the whole water column source blocks and add a safe landing."
    },
    de: {
      name: "Mit Blasen nach oben",
      objective: "**Minecraft**: **Bau mit vorhandenem Seelensand, Wasser und Baublöcken einen kurzen Blasenaufzug zwischen zwei Etagen und fährst damit hinauf**. Nutze in der ganzen Säule Wasserquellen und bau einen sicheren Ausstieg."
    }
  },
  {
    id: "snow-golem-workshop",
    moods: [
      "create",
      "progress"
    ],
    type: "creation",
    tags: [
      "crafting"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Snow on Demand",
      objective: "In **Minecraft**, in a biome where snow golems leave snow, make a roofed enclosure sheltered from rain. Build a golem inside and **collect eight snowballs from the snow it leaves**. Keep its standing block intact."
    },
    de: {
      name: "Schnee auf Vorrat",
      objective: "**Minecraft**: Bau in einem Biom, in dem Schneegolems Schnee hinterlassen, ein regengeschütztes Gehege mit Dach. Bau dort einen Golem und **sammle acht Schneebälle aus seinem Schnee**. Lass seinen Standblock stehen."
    }
  },
  {
    id: "minecart-station-brake",
    moods: [
      "create",
      "focused"
    ],
    type: "creation",
    tags: [
      "building",
      "automation"
    ],
    minutes: 25,
    minimum: 5,
    en: {
      name: "A Station That Stops",
      objective: "In **Minecraft**, with rails, powered rails and a minecart ready, build a short line with a button-controlled powered rail at each end. **Ride both ways and stop at each station without breaking the cart**."
    },
    de: {
      name: "Ein Halt, der klappt",
      objective: "**Minecraft**: Bau mit vorhandenen Schienen, Antriebsschienen und Lore eine kurze Strecke mit knopfgesteuerter Antriebsschiene an beiden Enden. **Fahr hin und zurück und halte an beiden Stationen, ohne die Lore abzubauen**."
    }
  },
  {
    id: "nether-portal-shelter",
    moods: [
      "create",
      "progress"
    ],
    type: "creation",
    tags: [
      "building"
    ],
    minutes: 25,
    minimum: 5,
    en: {
      name: "A Safer Arrival",
      objective: "In **Minecraft**, with an existing Nether portal and cobblestone ready, **enclose the Nether side in a roofed cobblestone shelter with a door**. Walk through the portal and check the entrance from inside."
    },
    de: {
      name: "Sicherer ankommen",
      objective: "**Minecraft**: **Umbaue die Nether-Seite eines vorhandenen Portals mit einer überdachten Bruchsteinhütte und Tür**. Halte Bruchstein bereit, geh durchs Portal und prüfe den Eingang von innen."
    }
  },
  {
    id: "lodestone-trail-home",
    moods: [
      "explore",
      "progress"
    ],
    type: "objective",
    tags: [
      "exploration"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "The Needle Points Home",
      objective: "In **Minecraft**, with a lodestone and compass ready, bind the compass to a lodestone at home. Visit a nearby unfamiliar spot and **return by following that compass within the same dimension**."
    },
    de: {
      name: "Die Nadel zeigt heim",
      objective: "**Minecraft**: Binde einen vorhandenen Kompass an einen Magnetstein zu Hause. Besuche eine unbekannte Stelle in der Nähe und **kehr in derselben Dimension mithilfe dieses Kompasses zurück**."
    }
  },
  {
    id: "slow-falling-descent",
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "crafting",
      "traversal"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "A Slower Descent",
      objective: "In **Minecraft**, with a Potion of Slow Falling already brewed, choose a known drop with safe ground below. Drink it and **descend while steering toward a marked landing spot**. Check that the effect is active before stepping off."
    },
    de: {
      name: "Langsamer nach unten",
      objective: "**Minecraft**: Wähle mit einem vorhandenen Trank des sanften Falls einen bekannten Abstieg mit sicherem Boden. Trink ihn und **lenke beim Sinken auf einen markierten Landeplatz zu**. Prüfe vor dem Absprung, ob der Effekt aktiv ist."
    }
  },
  {
    id: "amethyst-footstep-floor",
    moods: [
      "create",
      "relax"
    ],
    type: "creation",
    tags: [
      "building",
      "rhythm"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Steps That Ring",
      objective: "In **Minecraft**, with amethyst blocks already owned, **build a short walkway alternating amethyst and ordinary blocks, then walk across it**. Keep the sequence you like hearing."
    },
    de: {
      name: "Schritte, die klingen",
      objective: "**Minecraft**: **Bau mit vorhandenen Amethystblöcken einen kurzen Weg im Wechsel mit gewöhnlichen Blöcken und geh darüber**. Behalte die Folge, deren Klang dir gefällt."
    }
  },
  {
    id: "wool-vibration-test",
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "automation"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "What the Sensor Hears",
      objective: "In **Minecraft**, with a sculk sensor, lamp and wool ready, connect the sensor to the lamp. **Compare its response to nearby footsteps with and without wool between you and the sensor**. Keep other movement away."
    },
    de: {
      name: "Was der Sensor hört",
      objective: "**Minecraft**: Verbinde mit vorhandenem Sculk-Sensor, Lampe und Wolle den Sensor mit der Lampe. **Vergleiche seine Reaktion auf Schritte mit und ohne Wolle zwischen dir und dem Sensor**. Halte andere Bewegung fern."
    }
  },
  {
    id: "nether-respawn-stop",
    moods: [
      "progress",
      "focused"
    ],
    type: "objective",
    tags: [
      "building"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "A Nether Return Point",
      objective: "In **Minecraft**, with a Respawn Anchor and glowstone ready, place the anchor in a sheltered **Nether** room. **Charge it and set your respawn point there**. Use it only in the Nether."
    },
    de: {
      name: "Rückkehrpunkt im Nether",
      objective: "**Minecraft**: Stell mit vorhandenem Seelenanker und Leuchtstein den Anker in einen geschützten Raum im **Nether**. **Lade ihn auf und setze dort deinen Wiedereinstiegspunkt**. Nutze ihn nur im Nether."
    }
  },
  {
    id: "enchanting-shelf-test",
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "crafting"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "The Shelves Matter",
      objective: "In **Minecraft**, with an enchanting table, enough bookshelves and a spare tool ready, note its three enchantment offers. Block some bookshelf gaps with torches, then **compare the offered levels before and after and restore the gaps**. No enchantment purchase is needed."
    },
    de: {
      name: "Die Regale zählen",
      objective: "**Minecraft**: Notiere mit vorhandenem Zaubertisch, genug Bücherregalen und einem übrigen Werkzeug die drei Verzauberungsangebote. Blockiere einige Regalzwischenräume mit Fackeln, **vergleiche die angebotenen Stufen und mach die Zwischenräume wieder frei**. Verzaubern musst du nichts."
    }
  },
  {
    id: "night-firework-batch",
    moods: [
      "create",
      "relax"
    ],
    type: "creation",
    tags: [
      "crafting"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Your Own Fireworks",
      objective: "In **Minecraft**, with gunpowder, paper and dyes ready, make two firework stars with different colors and craft a rocket from each. **Launch both from safe ground after dark and compare their bursts**."
    },
    de: {
      name: "Dein eigenes Feuerwerk",
      objective: "**Minecraft**: Stell mit vorhandenem Schwarzpulver, Papier und Farbstoffen zwei verschiedenfarbige Feuerwerkssterne her und baust daraus je eine Rakete. **Starte beide nach Einbruch der Dunkelheit von sicherem Boden und vergleiche die Explosionen**."
    }
  },
  {
    id: "compost-back-to-crops",
    moods: [
      "progress",
      "relax"
    ],
    type: "objective",
    tags: [
      "farming"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Back into the Garden",
      objective: "In **Minecraft**, with a composter, surplus compostable plants and a growing crop ready, **make one bone meal in the composter and use it on that crop**. Bring enough spare plants to fill it."
    },
    de: {
      name: "Zurück ins Beet",
      objective: "**Minecraft**: **Stell im Komposter einmal Knochenmehl her und nutzt es auf einer wachsenden Feldfrucht**. Halte Komposter und genug übrige kompostierbare Pflanzen bereit."
    }
  }
]);
