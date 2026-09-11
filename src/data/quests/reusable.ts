import type { AuthoredQuestDefinition } from "../questTypes";

export const reusableQuests = [
  {
    id: "a-little-walk",
    moodIds: ["relax", "low-energy", "nostalgic"],
    type: "inspiration",
    tags: ["free-roam", "on-foot"],
    minimumDurationMinutes: 1,
    suggestedDurationMinutes: 15,
    genres: [],
    translations: {
      en: {
        name: "A Little Walk",
        objective:
          "Open a **freely explorable game** and take a walk through a place you like. **Follow the scenery instead of objectives**. Go wherever looks interesting.",
        gameObjective:
          "In **{{game}}**: Take a walk through a place you like. **Follow the scenery instead of objectives**. Go wherever looks interesting.",
      },
      de: {
        name: "Ein kleiner Spaziergang",
        objective:
          "Starte ein **frei erkundbares Spiel** und spaziere durch einen Ort, den du magst. **Folge der Umgebung statt Zielen**. Geh einfach dorthin, wo es interessant aussieht.",
        gameObjective:
          "In **{{game}}**: Spaziere durch einen Ort, den du magst. **Folge der Umgebung statt Zielen**. Geh einfach dorthin, wo es interessant aussieht.",
      },
    },
    customGameCompatibility: {
      capabilityIds: ["open-world"],
    },
  },
  {
    id: "beyond-the-map",
    moodIds: ["explore", "curious"],
    type: "objective",
    tags: ["exploration", "on-foot"],
    minimumDurationMinutes: 2,
    suggestedDurationMinutes: 20,
    genres: [],
    translations: {
      en: {
        name: "Beyond the Map",
        objective:
          "Open a **freely explorable game** and pick a landmark you have not visited. **Find your own way there and back** using the world around you.",
        gameObjective:
          "In **{{game}}**: Pick a landmark you have not visited. **Find your own way there and back** using the world around you.",
      },
      de: {
        name: "Hinter der Karte",
        objective:
          "Starte ein **frei erkundbares Spiel** und wähle eine Landmarke, die du noch nicht besucht hast. **Finde selbst einen Weg hin und zurück** und orientiere dich an der Umgebung.",
        gameObjective:
          "In **{{game}}**: Wähle eine Landmarke, die du noch nicht besucht hast. **Finde selbst einen Weg hin und zurück** und orientiere dich an der Umgebung.",
      },
    },
    customGameCompatibility: {
      capabilityIds: ["open-world"],
    },
  },
  {
    id: "main-mission",
    moodIds: ["progress", "focused"],
    type: "objective",
    tags: ["current-save"],
    minimumDurationMinutes: 2,
    suggestedDurationMinutes: 20,
    genres: [],
    translations: {
      en: {
        name: "Move the Story",
        objective:
          "Open a **game with a current mission or level**. Continue where you left off and **complete the next main objective**. Stop at the next good save point.",
        gameObjective:
          "In **{{game}}**: Continue where you left off and **complete the next main objective**. Stop at the next good save point.",
      },
      de: {
        name: "Story weiter",
        objective:
          "Starte ein **Spiel mit einer laufenden Mission oder einem Level**. Mach dort weiter und **erledige das nächste Hauptziel**. Hör bei der nächsten guten Speichermöglichkeit auf.",
        gameObjective:
          "In **{{game}}**: Mach dort weiter und **erledige das nächste Hauptziel**. Hör bei der nächsten guten Speichermöglichkeit auf.",
      },
    },
    customGameCompatibility: {
      capabilityIds: ["missions-or-levels"],
    },
  },
  {
    id: "one-level-no-detours",
    moodIds: ["focused", "progress"],
    type: "objective",
    tags: ["current-save"],
    minimumDurationMinutes: 2,
    suggestedDurationMinutes: 15,
    genres: [],
    translations: {
      en: {
        name: "Straight to the Exit",
        objective:
          "Open a **game with short missions or levels**. Start one and **follow the main route to the end**. Ignore optional rooms and collectibles.",
        gameObjective:
          "In **{{game}}**: Start a short mission or level and **follow the main route to the end**. Ignore optional rooms and collectibles.",
      },
      de: {
        name: "Direkt zum Ausgang",
        objective:
          "Starte ein **Spiel mit kurzen Missionen oder Leveln**. Beginne einen Abschnitt und **folge dem Hauptweg bis zum Ende**. Lass optionale Räume und Sammelobjekte aus.",
        gameObjective:
          "In **{{game}}**: Beginne eine kurze Mission oder ein Level und **folge dem Hauptweg bis zum Ende**. Lass optionale Räume und Sammelobjekte aus.",
      },
    },
    customGameCompatibility: {
      capabilityIds: ["missions-or-levels"],
    },
  },
  {
    id: "default-round",
    moodIds: ["overwhelmed", "low-energy"],
    type: "objective",
    tags: ["one-round"],
    minimumDurationMinutes: 2,
    suggestedDurationMinutes: 10,
    genres: [],
    translations: {
      en: {
        name: "One Round",
        objective:
          "Open a **familiar game with short rounds**. Keep your current setup and **play one full round**. Accept the result and stop there.",
        gameObjective:
          "In **{{game}}**: Keep your current setup and **play one full round**. Accept the result and stop there.",
      },
      de: {
        name: "Eine Runde",
        objective:
          "Starte ein **bekanntes Spiel mit kurzen Runden**. Behalte dein aktuelles Setup und **spiele eine volle Runde**. Nimm das Ergebnis so an.",
        gameObjective:
          "In **{{game}}**: Behalte dein aktuelles Setup und **spiele eine volle Runde**. Nimm das Ergebnis so an.",
      },
    },
    customGameCompatibility: {
      capabilityIds: ["rounds-or-matches"],
    },
  },
  {
    id: "quick-matches",
    moodIds: ["restless"],
    type: "objective",
    tags: ["one-round"],
    minimumDurationMinutes: 2,
    suggestedDurationMinutes: 15,
    genres: [],
    translations: {
      en: {
        name: "Straight In",
        objective:
          "Open a **game with short rounds or matches**. Pick a mode you already know and **play two rounds back to back**. Keep the same setup.",
        gameObjective:
          "In **{{game}}**: Pick a mode you already know and **play two rounds back to back**. Keep the same setup.",
      },
      de: {
        name: "Direkt rein",
        objective:
          "Starte ein **Spiel mit kurzen Runden oder Matches**. Nimm einen bekannten Modus und **spiele zwei Runden direkt hintereinander**. Behalte dasselbe Setup.",
        gameObjective:
          "In **{{game}}**: Nimm einen bekannten Modus und **spiele zwei Runden direkt hintereinander**. Behalte dasselbe Setup.",
      },
    },
    customGameCompatibility: {
      capabilityIds: ["rounds-or-matches"],
    },
  },
  {
    id: "starter-gear",
    moodIds: ["challenge", "focused"],
    type: "challenge",
    tags: ["one-weapon", "three-attempts"],
    minimumDurationMinutes: 2,
    suggestedDurationMinutes: 20,
    genres: [],
    translations: {
      en: {
        name: "One Weapon",
        objective:
          "Open a **game with selectable weapons**. Pick one weapon and **win a fight without switching**. Give yourself up to three attempts.",
        gameObjective:
          "In **{{game}}**: Pick one weapon and **win a fight without switching**. Give yourself up to three attempts.",
      },
      de: {
        name: "Eine Waffe",
        objective:
          "Starte ein **Spiel mit auswählbaren Waffen**. Nimm eine Waffe und **gewinne einen Kampf ohne zu wechseln**. Du hast bis zu drei Versuche.",
        gameObjective:
          "In **{{game}}**: Nimm eine Waffe und **gewinne einen Kampf ohne zu wechseln**. Du hast bis zu drei Versuche.",
      },
    },
    customGameCompatibility: {
      capabilityIds: ["combat-loadouts"],
    },
  },
  {
    id: "one-slot-swap",
    moodIds: ["curious", "focused"],
    type: "experiment",
    tags: ["loadout", "new-approach"],
    minimumDurationMinutes: 2,
    suggestedDurationMinutes: 15,
    genres: [],
    translations: {
      en: {
        name: "One Slot Different",
        objective:
          "Open a **game with selectable weapons**. Swap your usual weapon for one you rarely use and **finish one fight with it**. Keep the rest of your gear.",
        gameObjective:
          "In **{{game}}**: Swap your usual weapon for one you rarely use and **finish one fight with it**. Keep the rest of your gear.",
      },
      de: {
        name: "Ein Platz anders",
        objective:
          "Starte ein **Spiel mit auswählbaren Waffen**. Tausche deine übliche Waffe gegen eine selten genutzte und **beende einen Kampf damit**. Behalte den Rest deiner Ausrüstung.",
        gameObjective:
          "In **{{game}}**: Tausche deine übliche Waffe gegen eine selten genutzte und **beende einen Kampf damit**. Behalte den Rest deiner Ausrüstung.",
      },
    },
    customGameCompatibility: {
      capabilityIds: ["combat-loadouts"],
    },
  },
  {
    id: "spell-single-school",
    moodIds: ["challenge", "focused"],
    type: "challenge",
    tags: ["spells", "one-weapon"],
    minimumDurationMinutes: 2,
    suggestedDurationMinutes: 15,
    genres: [],
    translations: {
      en: {
        name: "One Spell Only",
        objective:
          "Open a **game with damage spells**. Pick one spell and **win a fight using only that spell for damage**. Try up to three times.",
        gameObjective:
          "In **{{game}}**: Pick one damage spell and **win a fight using only that spell for damage**. Try up to three times.",
      },
      de: {
        name: "Nur ein Zauber",
        objective:
          "Starte ein **Spiel mit Schadenszaubern**. Wähle einen Zauber und **gewinne einen Kampf nur mit diesem Zauber als Schadensquelle**. Versuche es bis zu dreimal.",
        gameObjective:
          "In **{{game}}**: Wähle einen Schadenszauber und **gewinne einen Kampf nur mit diesem Zauber als Schadensquelle**. Versuche es bis zu dreimal.",
      },
    },
    customGameCompatibility: {
      capabilityIds: ["combat-spells"],
    },
  },
  {
    id: "spell-new-opener",
    moodIds: ["curious"],
    type: "experiment",
    tags: ["spells", "new-approach"],
    minimumDurationMinutes: 2,
    suggestedDurationMinutes: 15,
    genres: [],
    translations: {
      en: {
        name: "A Different Spell",
        objective:
          "Open a **game with damage spells**. Equip one you rarely use and **start the next fight with it**. Finish the fight however you like.",
        gameObjective:
          "In **{{game}}**: Equip a damage spell you rarely use and **start the next fight with it**. Finish the fight however you like.",
      },
      de: {
        name: "Ein anderer Zauber",
        objective:
          "Starte ein **Spiel mit Schadenszaubern**. Rüste einen selten genutzten Zauber aus und **beginne den nächsten Kampf damit**. Danach kannst du frei weiterspielen.",
        gameObjective:
          "In **{{game}}**: Rüste einen selten genutzten Schadenszauber aus und **beginne den nächsten Kampf damit**. Danach kannst du frei weiterspielen.",
      },
    },
    customGameCompatibility: {
      capabilityIds: ["combat-spells"],
    },
  },
  {
    id: "planet-compare",
    moodIds: ["explore", "curious"],
    type: "experiment",
    tags: ["space", "exploration"],
    minimumDurationMinutes: 2,
    suggestedDurationMinutes: 25,
    genres: [],
    translations: {
      en: {
        name: "Two Worlds",
        objective:
          "Open a **space game with landable planets**. Visit two different-looking planets and walk around both. **Take one screenshot on each planet**.",
        gameObjective:
          "In **{{game}}**: Visit two different-looking planets and walk around both. **Take one screenshot on each planet**.",
      },
      de: {
        name: "Zwei Welten",
        objective:
          "Starte ein **Weltraumspiel mit begehbaren Planeten**. Besuche zwei unterschiedlich aussehende Planeten und erkunde beide zu Fuß. **Mach auf jedem ein Bildschirmfoto**.",
        gameObjective:
          "In **{{game}}**: Besuche zwei unterschiedlich aussehende Planeten und erkunde beide zu Fuß. **Mach auf jedem ein Bildschirmfoto**.",
      },
    },
    customGameCompatibility: {
      capabilityIds: ["space-exploration"],
    },
  },
  {
    id: "swim-return-trip",
    moodIds: ["explore", "restless"],
    type: "objective",
    tags: ["diving"],
    minimumDurationMinutes: 2,
    suggestedDurationMinutes: 15,
    genres: [],
    translations: {
      en: {
        name: "Under and Back",
        objective:
          "Open a **game with swimming and diving**. Pick a visible point across the water and **swim there, dive, and return**.",
        gameObjective:
          "In **{{game}}**: Pick a visible point across the water and **swim there, dive, and return**.",
      },
      de: {
        name: "Unter Wasser und zurück",
        objective:
          "Starte ein **Spiel mit Schwimmen und Tauchen**. Wähle einen sichtbaren Punkt am Wasser und **schwimme hin, tauche ab und kehre zurück**.",
        gameObjective:
          "In **{{game}}**: Wähle einen sichtbaren Punkt am Wasser und **schwimme hin, tauche ab und kehre zurück**.",
      },
    },
    customGameCompatibility: {
      capabilityIds: ["swimming"],
    },
  },
  {
    id: "boss-practice",
    moodIds: ["challenge", "focused"],
    type: "challenge",
    tags: ["boss", "three-attempts"],
    minimumDurationMinutes: 2,
    suggestedDurationMinutes: 20,
    genres: [],
    translations: {
      en: {
        name: "Read the Boss",
        objective:
          "Open a **game with repeatable boss fights**. Focus on one attack that keeps catching you and try a different response. **Beat the boss or finish three attempts**.",
        gameObjective:
          "In **{{game}}**: Focus on one boss attack that keeps catching you and try a different response. **Beat the boss or finish three attempts**.",
      },
      de: {
        name: "Den Boss lesen",
        objective:
          "Starte ein **Spiel mit wiederholbaren Bosskämpfen**. Achte auf einen Angriff, der dich oft trifft, und probiere eine andere Reaktion. **Besiege den Boss oder beende drei Versuche**.",
        gameObjective:
          "In **{{game}}**: Achte auf einen Bossangriff, der dich oft trifft, und probiere eine andere Reaktion. **Besiege den Boss oder beende drei Versuche**.",
      },
    },
    customGameCompatibility: {
      capabilityIds: ["boss-fights"],
    },
  },
  {
    id: "quiet-entry-exit",
    moodIds: ["challenge", "focused"],
    type: "challenge",
    tags: ["stealth", "no-detection"],
    minimumDurationMinutes: 2,
    suggestedDurationMinutes: 20,
    genres: [],
    translations: {
      en: {
        name: "In and Out",
        objective:
          "Open a **game with stealth** and pick a guarded doorway or passage. **Sneak there and back without attacking anyone**. Try up to three times.",
        gameObjective:
          "In **{{game}}**: Pick a guarded doorway or passage. **Sneak there and back without attacking anyone**. Try up to three times.",
      },
      de: {
        name: "Rein und raus",
        objective:
          "Starte ein **Spiel mit Stealth** und wähle eine bewachte Tür oder Passage. **Schleich dich hin und zurück, ohne jemanden anzugreifen**. Du hast bis zu drei Versuche.",
        gameObjective:
          "In **{{game}}**: Wähle eine bewachte Tür oder Passage. **Schleich dich hin und zurück, ohne jemanden anzugreifen**. Du hast bis zu drei Versuche.",
      },
    },
    customGameCompatibility: {
      capabilityIds: ["stealth"],
    },
  },
  {
    id: "watch-one-patrol",
    moodIds: ["curious", "explore"],
    type: "experiment",
    tags: ["stealth", "new-approach"],
    minimumDurationMinutes: 2,
    suggestedDurationMinutes: 15,
    genres: [],
    translations: {
      en: {
        name: "Watch the Patrol",
        objective:
          "Open a **stealth game with patrolling guards**. Watch one patrol from cover and find an opening. **Use it to sneak past unseen**.",
        gameObjective:
          "In **{{game}}**: Watch one patrol from cover and find an opening. **Use it to sneak past unseen**.",
      },
      de: {
        name: "Die Patrouille",
        objective:
          "Starte ein **Schleichspiel mit patrouillierenden Wachen**. Beobachte eine Patrouille aus der Deckung und finde eine Lücke. **Nutze sie, um ungesehen vorbeizukommen**.",
        gameObjective:
          "In **{{game}}**: Beobachte eine Patrouille aus der Deckung und finde eine Lücke. **Nutze sie, um ungesehen vorbeizukommen**.",
      },
    },
    customGameCompatibility: {
      capabilityIds: ["stealth"],
    },
  },
  {
    id: "puzzle-no-hints",
    moodIds: ["challenge", "focused"],
    type: "challenge",
    tags: ["puzzles", "no-hints"],
    minimumDurationMinutes: 2,
    suggestedDurationMinutes: 20,
    genres: [],
    translations: {
      en: {
        name: "No Hints",
        objective:
          "Open a **game with puzzles** and pick one unfinished puzzle. **Solve it without hints or a walkthrough**. Restarting and undo are fine.",
        gameObjective:
          "In **{{game}}**: Pick one unfinished puzzle and **solve it without hints or a walkthrough**. Restarting and undo are fine.",
      },
      de: {
        name: "Ohne Hinweise",
        objective:
          "Starte ein **Spiel mit Rätseln** und nimm ein offenes Rätsel. **Löse es ohne Hinweise oder Komplettlösung**. Neustart und Rückgängig sind erlaubt.",
        gameObjective:
          "In **{{game}}**: Nimm ein offenes Rätsel und **löse es ohne Hinweise oder Komplettlösung**. Neustart und Rückgängig sind erlaubt.",
      },
    },
    customGameCompatibility: {
      capabilityIds: ["puzzles"],
    },
  },
  {
    id: "puzzle-small-step",
    moodIds: ["relax", "low-energy", "overwhelmed"],
    type: "objective",
    tags: ["puzzles", "no-timer"],
    minimumDurationMinutes: 2,
    suggestedDurationMinutes: 10,
    genres: [],
    translations: {
      en: {
        name: "One Puzzle",
        objective:
          "Open a **relaxed puzzle game**. Pick one untimed puzzle and **solve just that one**. Use hints whenever you want.",
        gameObjective:
          "In **{{game}}**: Pick one untimed puzzle and **solve just that one**. Use hints whenever you want.",
      },
      de: {
        name: "Ein Rätsel",
        objective:
          "Starte ein **entspanntes Rätselspiel**. Nimm ein Rätsel ohne Zeitlimit und **löse nur dieses eine**. Nutze Hinweise, wann du möchtest.",
        gameObjective:
          "In **{{game}}**: Nimm ein Rätsel ohne Zeitlimit und **löse nur dieses eine**. Nutze Hinweise, wann du möchtest.",
      },
    },
    customGameCompatibility: {
      capabilityIds: ["puzzles"],
    },
  },
  {
    id: "build-with-three-materials",
    moodIds: ["create", "focused"],
    type: "creation",
    tags: ["building"],
    minimumDurationMinutes: 2,
    suggestedDurationMinutes: 25,
    genres: [],
    translations: {
      en: {
        name: "Three Materials",
        objective:
          "Open a **building game** and make a small shelter from three materials. **Add a roof and entrance**, then walk inside.",
        gameObjective:
          "In **{{game}}**: Build a small shelter from three materials. **Add a roof and entrance**, then walk inside.",
      },
      de: {
        name: "Drei Materialien",
        objective:
          "Starte ein **Bauspiel** und baue aus drei Materialien einen kleinen Unterstand. **Füge Dach und Eingang hinzu** und geh hinein.",
        gameObjective:
          "In **{{game}}**: Baue aus drei Materialien einen kleinen Unterstand. **Füge Dach und Eingang hinzu** und geh hinein.",
      },
    },
    customGameCompatibility: {
      capabilityIds: ["building"],
    },
  },
  {
    id: "build-a-memory",
    moodIds: ["create", "relax"],
    type: "creation",
    tags: ["building"],
    minimumDurationMinutes: 2,
    suggestedDurationMinutes: 25,
    genres: [],
    translations: {
      en: {
        name: "A Place from Memory",
        objective:
          "Open a **game with free building** and recreate the rough shape of a room you know. **Add the doorway and save it**. Keep the details simple.",
        gameObjective:
          "In **{{game}}**: Recreate the rough shape of a room you know. **Add the doorway and save it**. Keep the details simple.",
      },
      de: {
        name: "Ein Raum aus Erinnerung",
        objective:
          "Starte ein **Spiel mit freiem Bauen** und baue grob einen Raum nach, den du kennst. **Füge die Türöffnung hinzu und speichere den Bau**. Details dürfen einfach bleiben.",
        gameObjective:
          "In **{{game}}**: Baue grob einen Raum nach, den du kennst. **Füge die Türöffnung hinzu und speichere den Bau**. Details dürfen einfach bleiben.",
      },
    },
    customGameCompatibility: {
      capabilityIds: ["building"],
    },
  },
  {
    id: "craft-from-storage",
    moodIds: ["progress", "overwhelmed"],
    type: "objective",
    tags: ["crafting"],
    minimumDurationMinutes: 2,
    suggestedDurationMinutes: 10,
    genres: [],
    translations: {
      en: {
        name: "From Storage",
        objective:
          "Open a **game with crafting**. Pick a recipe you already have all materials for and **craft it once**. Do not gather or buy anything.",
        gameObjective:
          "In **{{game}}**: Pick a recipe you already have all materials for and **craft it once**. Do not gather or buy anything.",
      },
      de: {
        name: "Aus dem Vorrat",
        objective:
          "Starte ein **Spiel mit Crafting**. Nimm ein Rezept, für das du schon alle Materialien hast, und **stelle es einmal her**. Sammle und kaufe nichts dazu.",
        gameObjective:
          "In **{{game}}**: Nimm ein Rezept, für das du schon alle Materialien hast, und **stelle es einmal her**. Sammle und kaufe nichts dazu.",
      },
    },
    customGameCompatibility: {
      capabilityIds: ["crafting"],
    },
  },
  {
    id: "craft-unused-recipe",
    moodIds: ["curious", "progress"],
    type: "objective",
    tags: ["crafting", "new-approach"],
    minimumDurationMinutes: 2,
    suggestedDurationMinutes: 20,
    genres: [],
    translations: {
      en: {
        name: "Unused Recipe",
        objective:
          "Open a **game with crafting** and find a recipe you have never made. Get any nearby materials you need and **craft it once**.",
        gameObjective:
          "In **{{game}}**: Find a recipe you have never made. Get any nearby materials you need and **craft it once**.",
      },
      de: {
        name: "Neues Rezept",
        objective:
          "Starte ein **Spiel mit Crafting** und suche ein Rezept, das du noch nie hergestellt hast. Besorge fehlende Materialien in der Nähe und **stelle es einmal her**.",
        gameObjective:
          "In **{{game}}**: Suche ein Rezept, das du noch nie hergestellt hast. Besorge fehlende Materialien in der Nähe und **stelle es einmal her**.",
      },
    },
    customGameCompatibility: {
      capabilityIds: ["crafting"],
    },
  },
  {
    id: "going-fishing",
    moodIds: ["relax", "low-energy"],
    type: "objective",
    tags: ["fishing"],
    minimumDurationMinutes: 2,
    suggestedDurationMinutes: 15,
    genres: [],
    translations: {
      en: {
        name: "Three Fish",
        objective:
          "Open a **game with fishing** and head to any fishing spot. **Catch three fish** of any kind.",
        gameObjective:
          "In **{{game}}**: Head to any fishing spot and **catch three fish** of any kind.",
      },
      de: {
        name: "Drei Fische",
        objective:
          "Starte ein **Spiel mit Angeln** und geh zu einer beliebigen Angelstelle. **Fange drei Fische** deiner Wahl.",
        gameObjective:
          "In **{{game}}**: Geh zu einer beliebigen Angelstelle und **fange drei Fische** deiner Wahl.",
      },
    },
    customGameCompatibility: {
      capabilityIds: ["fishing"],
    },
  },
  {
    id: "fish-two-waters",
    moodIds: ["explore"],
    type: "objective",
    tags: ["fishing", "exploration"],
    minimumDurationMinutes: 2,
    suggestedDurationMinutes: 20,
    genres: [],
    translations: {
      en: {
        name: "Another Fishing Spot",
        objective:
          "Open a **game with several fishing spots**. Leave your usual spot and find somewhere different. **Catch one fish there**.",
        gameObjective:
          "In **{{game}}**: Leave your usual fishing spot and find somewhere different. **Catch one fish there**.",
      },
      de: {
        name: "Eine andere Angelstelle",
        objective:
          "Starte ein **Spiel mit mehreren Angelstellen**. Verlasse deinen üblichen Platz und such dir einen anderen. **Fange dort einen Fisch**.",
        gameObjective:
          "In **{{game}}**: Verlasse deinen üblichen Angelplatz und such dir einen anderen. **Fange dort einen Fisch**.",
      },
    },
    customGameCompatibility: {
      capabilityIds: ["fishing"],
    },
  },
  {
    id: "first-recipe",
    moodIds: ["relax", "low-energy"],
    type: "objective",
    tags: ["cooking"],
    minimumDurationMinutes: 2,
    suggestedDurationMinutes: 10,
    genres: [],
    translations: {
      en: {
        name: "From the Pantry",
        objective:
          "Open a **game with cooking**. Pick a recipe you already have the ingredients for and **cook one portion**.",
        gameObjective:
          "In **{{game}}**: Pick a recipe you already have the ingredients for and **cook one portion**.",
      },
      de: {
        name: "Aus der Vorratskammer",
        objective:
          "Starte ein **Spiel mit Kochen**. Nimm ein Rezept, für das du schon alle Zutaten hast, und **koche eine Portion**.",
        gameObjective:
          "In **{{game}}**: Nimm ein Rezept, für das du schon alle Zutaten hast, und **koche eine Portion**.",
      },
    },
    customGameCompatibility: {
      capabilityIds: ["cooking"],
    },
  },
  {
    id: "cook-a-new-dish",
    moodIds: ["curious", "progress"],
    type: "objective",
    tags: ["cooking", "new-approach"],
    minimumDurationMinutes: 2,
    suggestedDurationMinutes: 20,
    genres: [],
    translations: {
      en: {
        name: "A New Dish",
        objective:
          "Open a **game with cooking** and choose a recipe you have never made. Get any missing ingredients nearby and **cook it once**.",
        gameObjective:
          "In **{{game}}**: Choose a recipe you have never made. Get any missing ingredients nearby and **cook it once**.",
      },
      de: {
        name: "Ein neues Gericht",
        objective:
          "Starte ein **Spiel mit Kochen** und wähle ein Rezept, das du noch nie gemacht hast. Besorge fehlende Zutaten in der Nähe und **koche es einmal**.",
        gameObjective:
          "In **{{game}}**: Wähle ein Rezept, das du noch nie gemacht hast. Besorge fehlende Zutaten in der Nähe und **koche es einmal**.",
      },
    },
    customGameCompatibility: {
      capabilityIds: ["cooking"],
    },
  },
  {
    id: "one-patch-at-a-time",
    moodIds: ["relax", "progress", "low-energy"],
    type: "objective",
    tags: ["farming"],
    minimumDurationMinutes: 2,
    suggestedDurationMinutes: 15,
    genres: [],
    translations: {
      en: {
        name: "One Patch",
        objective:
          "Open a **game with farming** and choose one planted patch. **Harvest everything that is ready and replant it**. Leave the rest of the farm alone.",
        gameObjective:
          "In **{{game}}**: Choose one planted patch. **Harvest everything that is ready and replant it**. Leave the rest of the farm alone.",
      },
      de: {
        name: "Ein Beet",
        objective:
          "Starte ein **Spiel mit Landwirtschaft** und wähle ein bepflanztes Beet. **Ernte alles Reife und säe die freien Stellen neu ein**. Lass den Rest des Hofs in Ruhe.",
        gameObjective:
          "In **{{game}}**: Wähle ein bepflanztes Beet. **Ernte alles Reife und säe die freien Stellen neu ein**. Lass den Rest des Hofs in Ruhe.",
      },
    },
    customGameCompatibility: {
      capabilityIds: ["grow-crops"],
    },
  },
  {
    id: "care-first",
    moodIds: ["relax", "low-energy"],
    type: "objective",
    tags: ["animals"],
    minimumDurationMinutes: 2,
    suggestedDurationMinutes: 10,
    genres: [],
    translations: {
      en: {
        name: "Feeding Time",
        objective:
          "Open a **game with animals in your care**. Visit them and **feed every animal that needs food**. Stop when everyone is taken care of.",
        gameObjective:
          "In **{{game}}**: Visit your animals and **feed every one that needs food**. Stop when everyone is taken care of.",
      },
      de: {
        name: "Fütterungszeit",
        objective:
          "Starte ein **Spiel mit Tieren in deiner Obhut**. Besuch sie und **füttere jedes Tier, das Futter braucht**. Hör auf, wenn alle versorgt sind.",
        gameObjective:
          "In **{{game}}**: Besuch deine Tiere und **füttere jedes, das Futter braucht**. Hör auf, wenn alle versorgt sind.",
      },
    },
    customGameCompatibility: {
      capabilityIds: ["animal-care"],
    },
  },
  {
    id: "drive-one-route-twice",
    moodIds: ["focused", "curious"],
    type: "experiment",
    tags: ["driving", "new-approach"],
    minimumDurationMinutes: 2,
    suggestedDurationMinutes: 20,
    genres: [],
    translations: {
      en: {
        name: "The Same Road",
        objective:
          "Open a **free-roam driving game** and drive to a nearby landmark. **Take the same road back** and try to make the return smoother.",
        gameObjective:
          "In **{{game}}**: Drive to a nearby landmark. **Take the same road back** and try to make the return smoother.",
      },
      de: {
        name: "Dieselbe Straße",
        objective:
          "Starte ein **Spiel mit freien Autofahrten** und fahr zu einer Landmarke in der Nähe. **Nimm dieselbe Strecke zurück** und versuch, die Rückfahrt ruhiger zu fahren.",
        gameObjective:
          "In **{{game}}**: Fahr zu einer Landmarke in der Nähe. **Nimm dieselbe Strecke zurück** und versuch, die Rückfahrt ruhiger zu fahren.",
      },
    },
    customGameCompatibility: {
      capabilityIds: ["free-driving"],
    },
  },
  {
    id: "drive-clean",
    moodIds: ["focused"],
    type: "challenge",
    tags: ["racing"],
    minimumDurationMinutes: 2,
    suggestedDurationMinutes: 15,
    genres: [],
    translations: {
      en: {
        name: "A Clean Race",
        objective:
          "Open a **racing game** and pick a familiar track. **Finish one race without hitting barriers or other cars**. Try up to three races.",
        gameObjective:
          "In **{{game}}**: Pick a familiar track and **finish one race without hitting barriers or other cars**. Try up to three races.",
      },
      de: {
        name: "Ein sauberes Rennen",
        objective:
          "Starte ein **Rennspiel** und nimm eine bekannte Strecke. **Beende ein Rennen ohne Begrenzungen oder andere Autos zu berühren**. Du hast bis zu drei Rennen.",
        gameObjective:
          "In **{{game}}**: Nimm eine bekannte Strecke und **beende ein Rennen ohne Begrenzungen oder andere Autos zu berühren**. Du hast bis zu drei Rennen.",
      },
    },
    customGameCompatibility: {
      capabilityIds: ["racing"],
    },
  },
  {
    id: "movement-new-line",
    moodIds: ["explore", "restless"],
    type: "objective",
    tags: ["traversal", "new-approach"],
    minimumDurationMinutes: 2,
    suggestedDurationMinutes: 15,
    genres: [],
    translations: {
      en: {
        name: "A New Way Up",
        objective:
          "Open a **game with advanced movement** and pick a reachable ledge or platform. **Find a new route there and return to where you started**.",
        gameObjective:
          "In **{{game}}**: Pick a reachable ledge or platform. **Find a new route there and return to where you started**.",
      },
      de: {
        name: "Ein neuer Weg",
        objective:
          "Starte ein **Spiel mit besonderen Bewegungsmöglichkeiten** und wähle einen erreichbaren Vorsprung oder eine Plattform. **Finde einen neuen Weg dorthin und kehre zum Start zurück**.",
        gameObjective:
          "In **{{game}}**: Wähle einen erreichbaren Vorsprung oder eine Plattform. **Finde einen neuen Weg dorthin und kehre zum Start zurück**.",
      },
    },
    customGameCompatibility: {
      capabilityIds: ["advanced-traversal"],
    },
  },
  {
    id: "two-color-look",
    moodIds: ["create", "relax"],
    type: "creation",
    tags: ["outfit", "two-colors"],
    minimumDurationMinutes: 2,
    suggestedDurationMinutes: 15,
    genres: [],
    translations: {
      en: {
        name: "Two Colors",
        objective:
          "Open a **game with appearance customization**. Make a look from items you own using **two main colors**. Equip it and see it in gameplay.",
        gameObjective:
          "In **{{game}}**: Make a look from items you own using **two main colors**. Equip it and see it in gameplay.",
      },
      de: {
        name: "Zwei Farben",
        objective:
          "Starte ein **Spiel mit Aussehensanpassung**. Erstelle aus vorhandenen Dingen einen Look mit **zwei Hauptfarben**. Zieh ihn an und sieh ihn dir im Spiel an.",
        gameObjective:
          "In **{{game}}**: Erstelle aus vorhandenen Dingen einen Look mit **zwei Hauptfarben**. Zieh ihn an und sieh ihn dir im Spiel an.",
      },
    },
    customGameCompatibility: {
      capabilityIds: ["customization"],
    },
  },
  {
    id: "photo-three-angles",
    moodIds: ["create", "focused"],
    type: "creation",
    tags: ["photography"],
    minimumDurationMinutes: 2,
    suggestedDurationMinutes: 15,
    genres: [],
    translations: {
      en: {
        name: "Three Angles",
        objective:
          "Open a **game with photo mode** and pick one subject. Take a close-up, a low-angle shot, and a wide shot. **Save all three photos**.",
        gameObjective:
          "In **{{game}}**: Pick one subject. Take a close-up, a low-angle shot, and a wide shot. **Save all three photos**.",
      },
      de: {
        name: "Drei Blickwinkel",
        objective:
          "Starte ein **Spiel mit Fotomodus** und wähle ein Motiv. Fotografiere es nah, von unten und in einer weiten Ansicht. **Speichere alle drei Bilder**.",
        gameObjective:
          "In **{{game}}**: Wähle ein Motiv. Fotografiere es nah, von unten und in einer weiten Ansicht. **Speichere alle drei Bilder**.",
      },
    },
    customGameCompatibility: {
      capabilityIds: ["photo-mode"],
    },
  },
  {
    id: "photo-small-detail",
    moodIds: ["relax", "create"],
    type: "creation",
    tags: ["photography"],
    minimumDurationMinutes: 2,
    suggestedDurationMinutes: 10,
    genres: [],
    translations: {
      en: {
        name: "A Small Detail",
        objective:
          "Open a **game with photo mode** and look for a small detail nearby. **Take a close-up that fills the frame**.",
        gameObjective:
          "In **{{game}}**: Look for a small detail nearby and **take a close-up that fills the frame**.",
      },
      de: {
        name: "Ein kleines Detail",
        objective:
          "Starte ein **Spiel mit Fotomodus** und such nach einem kleinen Detail in deiner Nähe. **Mach eine Nahaufnahme, die das Bild ausfüllt**.",
        gameObjective:
          "In **{{game}}**: Such nach einem kleinen Detail in deiner Nähe und **mach eine Nahaufnahme, die das Bild ausfüllt**.",
      },
    },
    customGameCompatibility: {
      capabilityIds: ["photo-mode"],
    },
  },
  {
    id: "follow-a-teammate",
    moodIds: ["connect"],
    type: "objective",
    tags: ["co-op", "support"],
    minimumDurationMinutes: 2,
    suggestedDurationMinutes: 20,
    genres: [],
    translations: {
      en: {
        name: "Stay Together",
        objective:
          "Open an **online team game** and join a teammate working on an objective. **Stay with them and help until the objective or round ends**.",
        gameObjective:
          "In **{{game}}**: Join a teammate working on an objective. **Stay with them and help until the objective or round ends**.",
      },
      de: {
        name: "Zusammenbleiben",
        objective:
          "Starte ein **Online-Teamspiel** und schließ dich einem Teammitglied mit einem Ziel an. **Bleib dabei und hilf, bis das Ziel oder die Runde endet**.",
        gameObjective:
          "In **{{game}}**: Schließ dich einem Teammitglied mit einem Ziel an. **Bleib dabei und hilf, bis das Ziel oder die Runde endet**.",
      },
    },
    customGameCompatibility: {
      capabilityIds: ["online-teamplay"],
    },
  },
  {
    id: "couch-three-rounds",
    moodIds: ["connect", "nostalgic"],
    type: "objective",
    tags: ["local-play"],
    minimumDurationMinutes: 2,
    suggestedDurationMinutes: 20,
    genres: [],
    translations: {
      en: {
        name: "Three Turns Each",
        objective:
          "Open a **local multiplayer game** with someone beside you. Pick a short mode and **play three turns each**. Pass the controls after every turn.",
        gameObjective:
          "In **{{game}}**: Pick a short mode and **play three turns each**. Pass the controls after every turn.",
      },
      de: {
        name: "Drei Runden pro Person",
        objective:
          "Starte mit jemandem ein **lokales Mehrspielerspiel**. Wählt einen kurzen Modus und **spielt je drei Runden**. Gebt die Steuerung nach jeder Runde weiter.",
        gameObjective:
          "In **{{game}}**: Wählt einen kurzen Modus und **spielt je drei Runden**. Gebt die Steuerung nach jeder Runde weiter.",
      },
    },
    customGameCompatibility: {
      capabilityIds: ["local-multiplayer"],
    },
  },
  {
    id: "one-missing-collectible",
    moodIds: ["progress", "focused"],
    type: "objective",
    tags: ["collectibles"],
    minimumDurationMinutes: 2,
    suggestedDurationMinutes: 20,
    genres: [],
    translations: {
      en: {
        name: "One Gap Less",
        objective:
          "Start a **game with collectibles** and pick a collectible that you can find on your own. Get the item **without using any guidelines or external aids**.",
        gameObjective:
          "In **{{game}}**: Pick a **collectible** that you can find on your own. Get the item **without using any guidelines or external aids**.",
      },
      de: {
        name: "Eine Lücke weniger",
        objective:
          "Starte ein **Spiel mit Sammelobjekten** und wähle ein Item, das du ohne Hilfe finden kannst. Sammle das Collectible ein, **ohne Guidelines oder externe Hilfsmittel** zu benutzen.",
        gameObjective:
          "In **{{game}}**: Wähl ein **Sammelobjekt** aus, das dir noch fehlt und du ohne Hilfe finden kannst. Sammle das Collectible ein, **ohne Guidelines oder externe Hilfsmittel** zu benutzen.",
      },
    },
    customGameCompatibility: {
      capabilityIds: ["collectibles"],
    },
  },
  {
    id: "follow-one-character",
    moodIds: ["curious", "low-energy"],
    type: "objective",
    tags: ["dialogue", "story"],
    minimumDurationMinutes: 2,
    suggestedDurationMinutes: 15,
    genres: [],
    translations: {
      en: {
        name: "Hear Them Out",
        objective:
          "Open a **game with optional conversations or story entries**. Pick one you have not finished and **read or listen to it all the way through**.",
        gameObjective:
          "In **{{game}}**: Pick one unfinished conversation or story entry and **read or listen to it all the way through**.",
      },
      de: {
        name: "Erst mal zuhören",
        objective:
          "Starte ein **Spiel mit optionalen Gesprächen oder Storyeinträgen**. Wähle einen ungelesenen Eintrag und **lies oder hör ihn bis zum Ende**.",
        gameObjective:
          "In **{{game}}**: Wähle ein ungelesenes Gespräch oder einen Storyeintrag und **lies oder hör ihn bis zum Ende**.",
      },
    },
    customGameCompatibility: {
      capabilityIds: ["choices-or-lore"],
    },
  },
  {
    id: "trade-three-kinds",
    moodIds: ["overwhelmed", "low-energy", "progress"],
    type: "objective",
    tags: ["trading"],
    minimumDurationMinutes: 2,
    suggestedDurationMinutes: 10,
    genres: [],
    translations: {
      en: {
        name: "Three Things Less",
        objective:
          "Open a **game with merchants** and visit one nearby. **Sell three items you do not use** and buy a new item with your earned money at the next merchant you can find.",
        gameObjective:
          "In **{{game}}**: Visit a merchant and **sell three items you do not use**. Buy a new item with your earned money at the next merchant you can find.",
      },
      de: {
        name: "Drei Dinge weniger",
        objective:
          "Starte ein **Spiel mit Händlern** und besuch einen in der Nähe. **Verkaufe drei Gegenstände, die du nicht nutzt** und kauf dir von dem Geld ein neues Item bei dem nächsten Händler, den du finden kannst.",
        gameObjective:
          "In **{{game}}**: Besuch einen Händler und **verkaufe drei Gegenstände, die du nicht nutzt**. Kauf dir von dem Geld ein neues Item bei dem nächsten Händler, den du finden kannst.",
      },
    },
    customGameCompatibility: {
      capabilityIds: ["trading"],
    },
  },
  {
    id: "hunt-single-species",
    moodIds: ["focused", "progress"],
    type: "objective",
    tags: ["hunting"],
    minimumDurationMinutes: 2,
    suggestedDurationMinutes: 20,
    genres: [],
    translations: {
      en: {
        name: "One Species",
        objective:
          "Open a **game with hunting**. Let the first huntable animal you find set the species. **Hunt two of that species and collect their materials**.",
        gameObjective:
          "In **{{game}}**: Let the first huntable animal you find set the species. **Hunt two of that species and collect their materials**.",
      },
      de: {
        name: "Eine Tierart",
        objective:
          "Starte ein **Spiel mit Jagd**. Das erste jagdbare Tier bestimmt die Art. **Erlege zwei Tiere dieser Art und sammle ihre Materialien**.",
        gameObjective:
          "In **{{game}}**: Das erste jagdbare Tier bestimmt die Art. **Erlege zwei Tiere dieser Art und sammle ihre Materialien**.",
      },
    },
    customGameCompatibility: {
      capabilityIds: ["hunting"],
    },
  },
  {
    id: "companion-first-strike",
    moodIds: ["focused", "curious"],
    type: "experiment",
    tags: ["new-approach"],
    minimumDurationMinutes: 2,
    suggestedDurationMinutes: 15,
    genres: [],
    translations: {
      en: {
        name: "Let Them Lead",
        objective:
          "Open a **game with a combat companion**. Let your companion start the next fight, then join in. **Finish the fight together**.",
        gameObjective:
          "In **{{game}}**: Let your companion start the next fight, then join in. **Finish the fight together**.",
      },
      de: {
        name: "Begleiter zuerst",
        objective:
          "Starte ein **Spiel mit einem Begleiter im Kampf**. Lass deinen Begleiter den nächsten Kampf beginnen und greif danach ein. **Beendet den Kampf zusammen**.",
        gameObjective:
          "In **{{game}}**: Lass deinen Begleiter den nächsten Kampf beginnen und greif danach ein. **Beendet den Kampf zusammen**.",
      },
    },
    customGameCompatibility: {
      capabilityIds: ["animal-companions"],
    },
  },
  // {
  //   id: "skate-three-flips",
  //   moodIds: ["curious"],
  //   type: "experiment",
  //   tags: ["skating", "new-approach"],
  //   minimumDurationMinutes: 2,
  //   suggestedDurationMinutes: 15,
  //   genres: [],
  //   translations: {
  //     en: {
  //       name: "Three Flips",
  //       objective:
  //         "Open a **skating game** and find a flat spot. Pick three different flip tricks and **land each one once**.",
  //       gameObjective:
  //         "In **{{game}}**: Find a flat spot. Pick three different flip tricks and **land each one once**.",
  //     },
  //     de: {
  //       name: "Drei Flips",
  //       objective:
  //         "Starte ein **Skatespiel** und such eine flache Stelle. Wähle drei verschiedene Flip-Tricks und **lande jeden einmal**.",
  //       gameObjective:
  //         "In **{{game}}**: Such eine flache Stelle. Wähle drei verschiedene Flip-Tricks und **lande jeden einmal**.",
  //     },
  //   },
  //   customGameCompatibility: {
  //     capabilityIds: ["skate-tricks"],
  //   },
  // },
  {
    id: "sports-answer-back",
    moodIds: ["challenge", "restless"],
    type: "challenge",
    tags: ["vs-bots", "three-attempts"],
    minimumDurationMinutes: 2,
    suggestedDurationMinutes: 20,
    genres: [],
    translations: {
      en: {
        name: "Answer Back",
        objective:
          "Open a **sports game against the CPU** and **win with a two-point lead**. Try up to three matches.",
        gameObjective:
          "In **{{game}}**: Start a match against the CPU and **win with a two-point lead**. Try up to three matches.",
      },
      de: {
        name: "Antworten",
        objective:
          "Starte ein **Sportspiel gegen den Computer** und gewinne mit *zwei Punkten in Führung**. Du hast drei Versuche.",
        gameObjective:
          "In **{{game}}**: Starte ein Match gegen den Computer und gewinne mit **zwei Punkten in Führung**. Du hast drei Versuche.",
      },
    },
    customGameCompatibility: {
      capabilityIds: ["sports-goals"],
    },
  },
  {
    id: "extract-one-container",
    moodIds: ["focused", "challenge"],
    type: "challenge",
    tags: ["extraction"],
    minimumDurationMinutes: 2,
    suggestedDurationMinutes: 20,
    genres: [],
    translations: {
      en: {
        name: "One Container",
        objective:
          "Open a **solo extraction game** and start a run with your usual gear. Loot only the **first three containers** you reach and **extract with what you found**.",
        gameObjective:
          "In **{{game}}**: Start a solo run with your usual gear. Loot only the **first three containers** you reach and **extract with what you found**.",
      },
      de: {
        name: "Ein Behälter",
        objective:
          "Starte ein **Extraktionsspiel im Solo-Modus** mit deiner üblichen Ausrüstung. Plündere nur die **ersten drei Behälter** und **extrahiere mit deiner Beute**.",
        gameObjective:
          "In **{{game}}**: Starte einen Solo-Durchlauf mit deiner üblichen Ausrüstung. Plündere nur die **ersten drei Behälter** und **extrahiere mit deiner Beute**.",
      },
    },
    customGameCompatibility: {
      capabilityIds: ["extraction-runs"],
    },
  },
] satisfies readonly AuthoredQuestDefinition[];
