import { defineGameQuests } from "../defineGameQuests";

export const noMansSkyQuests = defineGameQuests("no-mans-sky", [
  {
    "id": "planet-field-card",
    "moods": [
      "create",
      "focused"
    ],
    "type": "creation",
    "tags": [
      "photography",
      "exploration"
    ],
    "minutes": 25,
    "minimum": 5,
    "en": {
      "name": "Planet Field Card",
      "objective": "On a planet with land animals in **No Man’s Sky**, scan one unfamiliar animal, plant, and mineral. **Save a photo of the animal in its habitat** and check that all three appear in Discoveries."
    },
    "de": {
      "name": "Steckbrief eines Planeten",
      "objective": "Scanne in **No Man’s Sky** auf einem Planeten mit Landtieren ein unbekanntes Tier, eine Pflanze und ein Mineral. **Speichere ein Foto des Tiers in seinem Lebensraum** und prüfe, ob alle drei unter Entdeckungen stehen."
    }
  },
  {
    "id": "salvage-repair",
    "moods": [
      "progress",
      "focused"
    ],
    "type": "objective",
    "tags": [
      "crafting"
    ],
    "minutes": 30,
    "minimum": 5,
    "en": {
      "name": "Back in Service",
      "objective": "Use a crashed ship you already claimed in **No Man’s Sky**. Pick one damaged slot with materials available nearby. **Gather or refine those materials and repair the slot**, buying no supplies."
    },
    "de": {
      "name": "Wieder einsatzbereit",
      "objective": "Such dir in **No Man’s Sky** ein Schiffswrack aus, das du schon beansprucht hast. Wähle ein beschädigtes Bauteil, für das du die Materialien in der Nähe findest. **Sammle oder veredle sie und repariere das Bauteil**, ohne Vorräte zu kaufen."
    }
  },
  {
    "id": "new-companion",
    "moods": [
      "relax",
      "explore"
    ],
    "type": "inspiration",
    "tags": [
      "animals",
      "exploration"
    ],
    "minutes": 20,
    "minimum": 3,
    "en": {
      "name": "Meet a Creature",
      "objective": "On a planet in **No Man’s Sky**, bring Creature Pellets and spend time with the animals you meet. Feed an approachable creature and see whether you want it along for your travels. Adoption is optional."
    },
    "de": {
      "name": "Tierbegegnung",
      "objective": "Nimm in **No Man’s Sky** Kreaturenpellets mit auf einen Planeten und schau dir die Tiere an, denen du begegnest. Füttere ein zutrauliches Wesen und schau, ob du es auf Reisen dabeihaben möchtest. Du musst es nicht adoptieren."
    }
  },
  {
    "id": "cronus-tasting",
    "moods": [
      "curious",
      "create"
    ],
    "type": "experiment",
    "tags": [
      "cooking"
    ],
    "minutes": 20,
    "minimum": 3,
    "en": {
      "name": "For the Cook",
      "objective": "With a Nutrient Processor and Anomaly access in **No Man’s Sky**, cook a dish from ingredients you already own. **Offer a serving to Cronus and hear his verdict**. No particular rating is required."
    },
    "de": {
      "name": "Für den Koch",
      "objective": "Koch in **No Man’s Sky** mit vorhandenen Zutaten ein Gericht im Nährstoffprozessor. Besuch danach Cronus in der Anomalie. **Gib ihm eine Portion und hör dir sein Urteil an**. Eine bestimmte Bewertung brauchst du nicht."
    }
  },
  {
    "id": "seafood-supper",
    "moods": [
      "relax",
      "progress"
    ],
    "type": "objective",
    "tags": [
      "fishing",
      "cooking"
    ],
    "minutes": 25,
    "minimum": 5,
    "en": {
      "name": "Today's Catch",
      "objective": "Bring a Fishing Rig and Nutrient Processor to the coast in **No Man’s Sky**. Catch a fish the processor accepts, then **cook and eat one serving from that catch**."
    },
    "de": {
      "name": "Frisch gefangen",
      "objective": "Nimm in **No Man’s Sky** Angelausrüstung und Nährstoffprozessor mit zur Küste. Fange einen Fisch, den du im Prozessor verarbeiten kannst, und **koche und iss eine Portion aus diesem Fang**."
    }
  },
  {
    "id": "exocraft-recovery",
    "moods": [
      "restless",
      "explore"
    ],
    "type": "objective",
    "tags": [
      "driving",
      "exploration"
    ],
    "minutes": 25,
    "minimum": 5,
    "en": {
      "name": "Ground Crew",
      "objective": "With an Exocraft ready in **No Man’s Sky**, mark a nearby Buried Technology Module with your visor. Drive there, dig up the Salvaged Data, and **return to your ship in the same Exocraft** without summoning either vehicle."
    },
    "de": {
      "name": "Bodenteam",
      "objective": "Markiere in **No Man’s Sky** ein vergrabenes Technologiemodul in der Nähe deines Schiffs. Fahr mit deinem Exofahrzeug hin, grab die Daten aus und **kehr mit demselben Fahrzeug zum Schiff zurück**. Ruf unterwegs kein anderes Fahrzeug."
    }
  },
  {
    id: "bytebeat-one-loop",
    moods: [
      "create",
      "curious"
    ],
    type: "experiment",
    tags: [
      "rhythm",
      "building"
    ],
    minutes: 25,
    minimum: 3,
    en: {
      name: "A ByteBeat Loop",
      objective: "In **No Man’s Sky**, with the ByteBeat blueprint and materials ready, power one device. **Try two melodies or rhythms, then leave your preferred loop playing**."
    },
    de: {
      name: "Ein ByteBeat-Loop",
      objective: "**No Man’s Sky**: Versorge mit vorhandenem ByteBeat-Bauplan und Material ein Gerät mit Strom. **Probier zwei Melodien oder Rhythmen aus und lass deinen bevorzugten Loop laufen**."
    }
  },
  {
    id: "mineral-hotspot-start",
    moods: [
      "create",
      "progress"
    ],
    type: "creation",
    tags: [
      "automation",
      "building"
    ],
    minutes: 30,
    minimum: 5,
    en: {
      name: "Your First Extractor",
      objective: "In **No Man’s Sky**, with a Survey Device, Mineral Extractor and Supply Depot blueprints ready, find a mineral hotspot near your base. **Power an extractor, connect a depot and collect its first stored minerals**. Have the building materials ready."
    },
    de: {
      name: "Dein erster Extraktor",
      objective: "**No Man’s Sky**: Such mit vorhandenem Analysegerät und Bauplänen für Mineralextraktor und Vorratsdepot einen Mineral-Hotspot nahe deiner Basis. **Versorge den Extraktor mit Strom, verbinde das Depot und hol die ersten gespeicherten Mineralien ab**. Halte Baumaterial bereit."
    }
  },
  {
    id: "short-range-home-link",
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
      name: "Across the Base",
      objective: "In **No Man’s Sky**, with short-range teleporter parts unlocked, **connect two powered pads in the same base with a teleport cable and travel both ways**. Keep them within cable range."
    },
    de: {
      name: "Quer durch die Basis",
      objective: "**No Man’s Sky**: **Verbinde zwei mit Strom versorgte Nahbereichsteleporter derselben Basis per Teleportkabel und reise in beide Richtungen**. Halte die freigeschalteten Bauteile und Materialien bereit und bleib in Kabelreichweite."
    }
  },
  {
    id: "guild-one-donation",
    moods: [
      "progress",
      "low-energy"
    ],
    type: "objective",
    tags: [
      "trading"
    ],
    minutes: 10,
    minimum: 2,
    en: {
      name: "For the Guild",
      objective: "In **No Man’s Sky**, at a space station guild envoy, check the accepted donations. With an accepted item already owned, **donate it and check your standing afterward**."
    },
    de: {
      name: "Für die Gilde",
      objective: "**No Man’s Sky**: Prüfe bei einem Gildenvertreter auf der Raumstation die gewünschten Spenden. Wenn du einen passenden Gegenstand schon hast, **spende ihn und prüfe danach deinen Gildenrang**."
    }
  },
  {
    id: "built-from-ship-parts",
    moods: [
      "create",
      "focused"
    ],
    type: "creation",
    tags: [
      "crafting",
      "space"
    ],
    minutes: 30,
    minimum: 5,
    en: {
      name: "Your Own Starship",
      objective: "In **No Man’s Sky**, with a reactor and three compatible salvaged parts already ready for the Starship Fabricator, choose their colors and **assemble the ship, then fly it out of the station**."
    },
    de: {
      name: "Dein eigenes Raumschiff",
      objective: "**No Man’s Sky**: Wähle mit vorhandenem Reaktor und drei zusammenpassenden geborgenen Teilen im Raumschiff-Konstruktor die Farben. **Bau das Schiff zusammen und flieg damit aus der Raumstation**."
    }
  },
  {
    id: "frigate-debrief",
    moods: [
      "progress",
      "low-energy"
    ],
    type: "objective",
    tags: [
      "space"
    ],
    minutes: 10,
    minimum: 2,
    en: {
      name: "Back from the Expedition",
      objective: "In **No Man’s Sky**, with a freighter and a completed frigate expedition waiting, visit its Fleet Command Room. **Read the expedition report and collect its rewards**."
    },
    de: {
      name: "Zurück von der Expedition",
      objective: "**No Man’s Sky**: Besuche auf deinem Frachter den Flottenkommandoraum, wenn eine Fregattenexpedition schon beendet ist. **Lies den Bericht und hol die Belohnungen ab**."
    }
  },
  {
    id: "submarine-coast-tour",
    moods: [
      "relax",
      "explore"
    ],
    type: "inspiration",
    tags: [
      "diving",
      "exploration"
    ],
    minutes: 25,
    minimum: 3,
    en: {
      name: "Below the Coast",
      objective: "In **No Man’s Sky**, with a fueled Nautilon and underwater protection ready, explore a coast from below. Follow the seabed, look through the submarine’s windows and surface wherever you want a new view."
    },
    de: {
      name: "Unter der Küste",
      objective: "**No Man’s Sky**: Erkunde mit aufgetanktem Nautilon und vorhandenem Unterwasserschutz eine Küste unter Wasser. Folge dem Meeresboden, schau durch die Fenster des U-Boots und tauch auf, wenn du eine neue Aussicht möchtest."
    }
  },
  {
    id: "egg-size-experiment",
    moods: [
      "curious",
      "create"
    ],
    type: "experiment",
    tags: [
      "animals"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Change the Next Generation",
      objective: "In **No Man’s Sky**, with a companion egg already owned and Anomaly access, use the Egg Sequencer. **Change its size setting with an available material and collect the altered egg**. Read the predicted change before committing. Hatching can wait."
    },
    de: {
      name: "Die nächste Generation",
      objective: "**No Man’s Sky**: Nutze mit vorhandenem Begleiter-Ei und Zugang zur Anomalie den Ei-Sequenzierer. **Ändere die Größen-Einstellung mit einem verfügbaren Material und hol das veränderte Ei ab**. Lies vorher die angezeigte Änderung. Das Schlüpfen kann warten."
    }
  },
  {
    id: "biodome-harvest-route",
    moods: [
      "create",
      "focused"
    ],
    type: "creation",
    tags: [
      "farming",
      "building"
    ],
    minutes: 25,
    minimum: 5,
    en: {
      name: "Under the Glass",
      objective: "In **No Man’s Sky**, with a powered biodome, crop blueprints and planting materials ready, **plant two different crops inside and keep access to its harvest control clear**. Leave the crops to grow."
    },
    de: {
      name: "Unter Glas",
      objective: "**No Man’s Sky**: **Pflanze in einer betriebenen Biokuppel zwei verschiedene Pflanzen und halte den Sammelschalter erreichbar**. Halte Pflanzenbaupläne und Material bereit. Die Pflanzen dürfen später wachsen."
    }
  },
  {
    id: "automatic-creature-feeding",
    moods: [
      "create",
      "relax"
    ],
    type: "creation",
    tags: [
      "animals",
      "automation"
    ],
    minutes: 25,
    minimum: 5,
    en: {
      name: "A Feeding Station",
      objective: "In **No Man’s Sky**, with Automated Feeder and Livestock Unit blueprints ready, build and power both near suitable land animals. Add Creature Pellets and **collect one product gathered by the Livestock Unit**."
    },
    de: {
      name: "Eine Futterstelle",
      objective: "**No Man’s Sky**: Bau mit vorhandenen Bauplänen eine Futtermaschine und eine Nutztierstation bei geeigneten Landtieren und versorge beide mit Strom. Fülle Kreaturenpellets ein und **hol ein gesammeltes Tierprodukt aus der Station**."
    }
  },
  {
    id: "one-economy-delivery",
    moods: [
      "curious",
      "progress"
    ],
    type: "objective",
    tags: [
      "trading",
      "space"
    ],
    minutes: 25,
    minimum: 3,
    en: {
      name: "Goods with a Destination",
      objective: "In **No Man’s Sky**, with an Economy Scanner and enough fuel and Units, buy one trade good and read which economy wants it. **Travel to a nearby system of that economy and sell the good at a trade terminal**. Profit is optional."
    },
    de: {
      name: "Ware mit Ziel",
      objective: "**No Man’s Sky**: Kauf mit Wirtschaftsscanner, genug Treibstoff und Units eine Handelsware und lies, welche Wirtschaft sie braucht. **Reise in ein nahes System dieser Wirtschaft und verkaufe sie am Handelsterminal**. Gewinn ist optional."
    }
  },
  {
    id: "harmonic-terminal-code",
    moods: [
      "curious",
      "focused"
    ],
    type: "objective",
    tags: [
      "puzzles"
    ],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Read the Harmonic Code",
      objective: "In **No Man’s Sky**, with an Echo Locator already owned on a dissonant planet, locate a Harmonic Camp. **Solve its terminal’s arithmetic clues and lift the lockdown**."
    },
    de: {
      name: "Den harmonischen Code lesen",
      objective: "**No Man’s Sky**: Such auf einem dissonanten Planeten mit einem vorhandenen Echo-Ortungsgerät ein harmonisches Lager. **Löse die Rechenhinweise am Terminal und hebe die Sperre auf**."
    }
  },
  {
    id: "interceptor-brain-ritual",
    moods: [
      "explore",
      "progress"
    ],
    type: "objective",
    tags: [
      "story",
      "space"
    ],
    minutes: 25,
    minimum: 3,
    en: {
      name: "The Brain’s Way",
      objective: "In **No Man’s Sky**, with a crashed Interceptor already marked and its Hyaline Brain collected, activate the brain and follow the monolith marker. **Turn it into a Harmonic Brain and bring it back to the Interceptor**. The other repairs can wait."
    },
    de: {
      name: "Der Weg des Gehirns",
      objective: "**No Man’s Sky**: Aktiviere das schon gesammelte Hyalin-Gehirn eines markierten Interceptor-Wracks und folge seiner Monolithenmarkierung. **Wandle es in ein harmonisches Gehirn um und bring es zum Interceptor zurück**. Die übrigen Reparaturen können warten."
    }
  },
  {
    id: "black-hole-jump",
    moods: [
      "explore",
      "restless"
    ],
    type: "inspiration",
    tags: [
      "space",
      "exploration"
    ],
    minutes: 25,
    minimum: 3,
    en: {
      name: "On the Other Side",
      objective: "In **No Man’s Sky**, with a black-hole system already reachable and a fueled ship, head into the black hole and explore where it leaves you. Keep your previous station in the teleporter list if you want an easy route back."
    },
    de: {
      name: "Auf der anderen Seite",
      objective: "**No Man’s Sky**: Flieg mit aufgetanktem Schiff zu einem bereits erreichbaren schwarzen Loch und erkunde, wohin es dich bringt. Behalte die vorherige Raumstation in deiner Teleporterliste, wenn du leicht zurückreisen möchtest."
    }
  },
  {
    id: "freighter-outdoor-lookout",
    moods: [
      "create",
      "relax"
    ],
    type: "creation",
    tags: [
      "building",
      "space"
    ],
    minutes: 25,
    minimum: 5,
    en: {
      name: "Outside the Freighter",
      objective: "In **No Man’s Sky**, with a freighter, exterior-platform parts and materials ready, **build a short outdoor walkway with a safe observation platform and walk out onto it**."
    },
    de: {
      name: "Draußen am Frachter",
      objective: "**No Man’s Sky**: **Bau auf deinem Frachter einen kurzen Außensteg mit sicherer Aussichtsplattform und geh hinaus**. Halte die freigeschalteten Außenbauteile und Materialien bereit."
    }
  },
  {
    id: "nexus-with-a-friend",
    moods: [
      "connect",
      "progress"
    ],
    type: "objective",
    tags: [
      "co-op",
      "support"
    ],
    minutes: 30,
    minimum: 5,
    en: {
      name: "One Nexus Crew",
      objective: "In **No Man’s Sky**, with a friend already in your multiplayer session and Anomaly access, choose a Nexus mission you can both do with your current gear. **Complete it together and collect its reward**."
    },
    de: {
      name: "Ein Nexus-Team",
      objective: "**No Man’s Sky**: Wähle mit einem Freund, der schon in deiner Mehrspielersitzung ist, an der Anomalie eine Nexus-Mission für eure vorhandene Ausrüstung. **Erledigt sie zusammen und holt die Belohnung ab**."
    }
  },
  {
    id: "ruin-keys-and-cache",
    moods: [
      "explore",
      "focused"
    ],
    type: "objective",
    tags: [
      "collectibles"
    ],
    minutes: 25,
    minimum: 5,
    en: {
      name: "Under the Ruins",
      objective: "In **No Man’s Sky**, at an ancient ruin already located with your Terrain Manipulator ready, use the visor to find buried keys. **Dig up three Ancient Keys and open the large artifact crate**."
    },
    de: {
      name: "Unter den Ruinen",
      objective: "**No Man’s Sky**: Such bei einer bereits gefundenen antiken Ruine mit dem Visier nach vergrabenen Schlüsseln. Halte den Terrain-Manipulator bereit, **grabe drei antike Schlüssel aus und öffne die große Artefaktkiste**."
    }
  },
  {
    id: "archive-artifact-exchange",
    moods: [
      "curious",
      "progress"
    ],
    type: "objective",
    tags: [
      "collectibles",
      "trading"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "An Archive Exchange",
      objective: "In **No Man’s Sky**, with a planetary archive already marked and an accepted artifact owned, **exchange it at the archive’s artifact vault and inspect the replacement**. No particular quality is required."
    },
    de: {
      name: "Ein Artefakt fürs Archiv",
      objective: "**No Man’s Sky**: **Tausch an einem markierten planetaren Archiv ein vorhandenes passendes Artefakt im Artefakttresor und sieh dir den Ersatz an**. Eine bestimmte Qualität brauchst du nicht."
    }
  },
  {
    id: "oxygen-refiner-comparison",
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
      name: "Two Refiner Recipes",
      objective: "In **No Man’s Sky**, with a Medium Refiner, Salt, Chlorine and Oxygen ready, refine a small amount of Salt on its own. Then **refine Chlorine with Oxygen and compare the two output amounts**."
    },
    de: {
      name: "Zwei Raffinerie-Rezepte",
      objective: "**No Man’s Sky**: Raffiniere mit vorhandener mittlerer Raffinerie, Salz, Chlor und Sauerstoff zuerst etwas Salz allein. **Raffiniere dann Chlor mit Sauerstoff und vergleiche die beiden Ausgabemengen**."
    }
  },
  {
    id: "scanner-supercharged-test",
    moods: [
      "curious",
      "focused"
    ],
    type: "experiment",
    tags: [
      "scouting",
      "loadout"
    ],
    minutes: 15,
    minimum: 3,
    en: {
      name: "Charge the Scanner",
      objective: "In **No Man’s Sky**, with a scanner upgrade and an unlocked supercharged Multi-Tool slot, scan one unfamiliar animal. Move the upgrade into that slot, then **scan another animal and compare the reward shown**. Species differences may also affect the result."
    },
    de: {
      name: "Den Scanner verstärken",
      objective: "**No Man’s Sky**: Scanne mit einem Scanner-Upgrade und einem freigeschalteten Supercharge-Platz im Multiwerkzeug ein unbekanntes Tier. Verschiebe das Upgrade dorthin, **scanne ein weiteres Tier und vergleiche die angezeigte Belohnung**. Auch die Tierarten können den Wert verändern."
    }
  }
]);
