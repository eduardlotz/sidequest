import type { AuthoredQuestDefinition } from "../questTypes";

export const reusableQuests = [
  {
    id: "a-little-walk",
    moodIds: ["relax", "low-energy", "nostalgic"],
    type: "inspiration",
    tags: ["free-roam", "on-foot"],
    minimumDurationMinutes: 3,
    suggestedDurationMinutes: 15,
    translations: {
      en: {
        name: "A Little Walk",
        objective:
          "Open a **freely explorable game**. Walk through a place you like and **follow the scenery instead of objectives**. Go wherever looks interesting.",
        gameObjective:
          "Open **{{game}}**. Walk through a place you like and **follow the scenery instead of objectives**. Go wherever looks interesting.",
      },
      de: {
        name: "Ein kleiner Spaziergang",
        objective:
          "Starte ein **Spiel mit offener Welt**. Geh an einen Ort, den du magst, und **schau dich dort um, statt einem Ziel zu folgen**. Lauf weiter, wenn dich etwas neugierig macht.",
        gameObjective:
          "Starte **{{game}}**. Geh an einen Ort, den du magst, und **schau dich dort um, statt einem Ziel zu folgen**. Lauf weiter, wenn dich etwas neugierig macht.",
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
    minimumDurationMinutes: 3,
    suggestedDurationMinutes: 20,
    translations: {
      en: {
        name: "Beyond the Map",
        objective:
          "Open a **freely explorable game**. Pick an unvisited landmark and **find your own way there and back**. Use the world around you to navigate.",
        gameObjective:
          "Open **{{game}}**. Pick an unvisited landmark and **find your own way there and back**. Use the world around you to navigate.",
      },
      de: {
        name: "Abseits der Karte",
        objective:
          "Starte ein **frei erkundbares Spiel**. Such dir einen Ort, an dem du noch nicht warst, und **find selbst einen Weg hin und zurück**. Orientier dich an dem, was du in der Spielwelt siehst.",
        gameObjective:
          "Starte **{{game}}**. Such dir einen Ort, an dem du noch nicht warst, und **find selbst einen Weg hin und zurück**. Orientier dich an dem, was du in der Spielwelt siehst.",
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
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 30,
    translations: {
      en: {
        name: "Move the Story",
        objective:
          "Open a **game with missions or levels**. Continue where you left off and **complete the next main objective**. Stop at the next save point.",
        gameObjective:
          "Open **{{game}}**. Continue where you left off and **complete the next main objective**. Stop at the next save point.",
      },
      de: {
        name: "Story weiterspielen",
        objective:
          "Starte ein **Spiel mit Missionen oder Leveln**. Mach dort weiter, wo du aufgehört hast, und **erledige das nächste Hauptziel**. Hör am nächsten Speicherpunkt auf.",
        gameObjective:
          "Starte **{{game}}**. Mach dort weiter, wo du aufgehört hast, und **erledige das nächste Hauptziel**. Hör am nächsten Speicherpunkt auf.",
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
    translations: {
      en: {
        name: "Straight to the Exit",
        objective:
          "Open a **game with short missions or levels**. Start a short mission or level and **follow the main route to the end**. Skip optional rooms and collectibles.",
      },
      de: {
        name: "Direkt zum Ausgang",
        objective:
          "Starte ein **Spiel mit kurzen Missionen oder Leveln**. Wähle eine kurze Mission oder ein Level und **bleib bis zum Ende auf dem Hauptweg**. Optionale Räume und Sammelobjekte lässt du aus.",
      },
    },
  },
  {
    id: "default-round",
    moodIds: ["overwhelmed", "low-energy"],
    type: "objective",
    tags: ["one-round"],
    minimumDurationMinutes: 2,
    suggestedDurationMinutes: 10,
    translations: {
      en: {
        name: "One Round",
        objective:
          "Open a **familiar game with short rounds**. Keep your setup and **play one full, standalone round**. Accept the result and stop there.",
        gameObjective:
          "Open **{{game}}**. Keep your setup and **play one full, standalone round**. Accept the result and stop there.",
      },
      de: {
        name: "Eine Runde",
        objective:
          "Starte ein **vertrautes Spiel mit kurzen Runden**. Behalte dein Setup und **spiel eine ganze Runde**. Nimm das Ergebnis an und hör danach auf.",
        gameObjective:
          "Starte **{{game}}**. Behalte dein Setup und **spiel eine ganze Runde**. Nimm das Ergebnis an und hör danach auf.",
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
    tags: ["two-rounds"],
    minimumDurationMinutes: 3,
    suggestedDurationMinutes: 15,
    translations: {
      en: {
        name: "Straight In",
        objective:
          "Open a **game with short rounds**. Pick a familiar mode and **play two standalone rounds back to back**. Keep the same setup.",
        gameObjective:
          "Open **{{game}}**. Pick a familiar mode and **play two standalone rounds back to back**. Keep the same setup.",
      },
      de: {
        name: "Direkt rein",
        objective:
          "Starte ein **Spiel mit kurzen Runden**. Nimm einen bekannten Modus und **spiel zwei Runden direkt hintereinander**. Behalte dasselbe Setup.",
        gameObjective:
          "Starte **{{game}}**. Nimm einen bekannten Modus und **spiel zwei Runden direkt hintereinander**. Behalte dasselbe Setup.",
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
    suggestedDurationMinutes: 15,
    translations: {
      en: {
        name: "One Weapon",
        objective:
          "Open a **game with selectable weapons**. Pick one weapon and **win a fight without switching**. Stop after success or three attempts.",
        gameObjective:
          "Open **{{game}}**. Pick one weapon and **win a fight without switching**. Stop after success or three attempts.",
      },
      de: {
        name: "Eine Waffe",
        objective:
          "Starte ein **Spiel mit wählbaren Waffen**. Nimm eine Waffe und **gewinne einen Kampf ohne Waffenwechsel**. Nach Erfolg oder drei Versuchen ist Schluss.",
        gameObjective:
          "Starte **{{game}}**. Nimm eine Waffe und **gewinne einen Kampf ohne Waffenwechsel**. Nach Erfolg oder drei Versuchen ist Schluss.",
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
    translations: {
      en: {
        name: "Weapon Swap",
        objective:
          "Open a **game with selectable weapons**. Equip a weapon you rarely use and **finish one fight with it**. Keep the rest of your gear.",
        gameObjective:
          "Open **{{game}}**. Equip a weapon you rarely use and **finish one fight with it**. Keep the rest of your gear.",
      },
      de: {
        name: "Waffenwechsel",
        objective:
          "Starte ein **Spiel mit wählbaren Waffen**. Rüste eine selten genutzte Waffe aus und **beende einen Kampf damit**. Behalte den Rest deiner Ausrüstung.",
        gameObjective:
          "Starte **{{game}}**. Rüste eine selten genutzte Waffe aus und **beende einen Kampf damit**. Behalte den Rest deiner Ausrüstung.",
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
    tags: ["spells", "three-attempts"],
    minimumDurationMinutes: 2,
    suggestedDurationMinutes: 15,
    translations: {
      en: {
        name: "One Spell Only",
        objective:
          "Open a **game with damage spells**. Pick one spell and **win a fight using only that spell for damage**. Stop after success or three attempts.",
        gameObjective:
          "Open **{{game}}**. Pick one spell and **win a fight using only that spell for damage**. Stop after success or three attempts.",
      },
      de: {
        name: "Nur ein Zauber",
        objective:
          "Starte ein **Spiel mit Schadenszaubern**. Wähle einen Zauber und **gewinn einen Kampf, indem du nur mit diesem Zauber Schaden machst**. Hör nach dem Sieg oder drei Versuchen auf.",
        gameObjective:
          "Starte **{{game}}**. Wähle einen Zauber und **gewinn einen Kampf, indem du nur mit diesem Zauber Schaden machst**. Hör nach dem Sieg oder drei Versuchen auf.",
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
    suggestedDurationMinutes: 10,
    translations: {
      en: {
        name: "A Different Spell",
        objective:
          "Open a **game with damage spells**. Equip a spell you rarely use and **open the next fight with it**. Finish the fight however you like.",
        gameObjective:
          "Open **{{game}}**. Equip a spell you rarely use and **open the next fight with it**. Finish the fight however you like.",
      },
      de: {
        name: "Ein anderer Zauber",
        objective:
          "Starte ein **Spiel mit Schadenszaubern**. Rüste einen selten genutzten Zauber aus und **beginne den nächsten Kampf damit**. Beende den Kampf, wie du möchtest.",
        gameObjective:
          "Starte **{{game}}**. Rüste einen selten genutzten Zauber aus und **beginne den nächsten Kampf damit**. Beende den Kampf, wie du möchtest.",
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
    minimumDurationMinutes: 3,
    suggestedDurationMinutes: 25,
    translations: {
      en: {
        name: "Two Worlds",
        objective:
          "Open a **space game with landable planets**. Walk around two different-looking planets and **take one screenshot on each**.",
        gameObjective:
          "Open **{{game}}**. Walk around two different-looking planets and **take one screenshot on each**.",
      },
      de: {
        name: "Zwei Welten",
        objective:
          "Starte ein **Weltraumspiel mit begehbaren Planeten**. Erkunde zwei unterschiedlich aussehende Planeten zu Fuß und **mach auf jedem einen Screenshot**.",
        gameObjective:
          "Starte **{{game}}**. Erkunde zwei unterschiedlich aussehende Planeten zu Fuß und **mach auf jedem einen Screenshot**.",
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
    minimumDurationMinutes: 3,
    suggestedDurationMinutes: 15,
    translations: {
      en: {
        name: "Under and Back",
        objective:
          "Open a **game with swimming and diving**. Pick a visible point across the water. **Swim there, dive, and return**.",
        gameObjective:
          "Open **{{game}}**. Pick a visible point across the water. **Swim there, dive, and return**.",
      },
      de: {
        name: "Hin, runter, zurück",
        objective:
          "Starte ein **Spiel mit Schwimmen und Tauchen**. Such dir einen Punkt auf der anderen Seite des Wassers. **Schwimm hin, tauch dort ab und kehr wieder zurück**.",
        gameObjective:
          "Starte **{{game}}**. Such dir einen Punkt auf der anderen Seite des Wassers. **Schwimm hin, tauch dort ab und kehr wieder zurück**.",
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
    minimumDurationMinutes: 3,
    suggestedDurationMinutes: 20,
    translations: {
      en: {
        name: "Read the Boss",
        objective:
          "Open a **game with repeatable boss fights**. Try a new response to an attack that often catches you. **Beat the boss or finish three attempts**.",
        gameObjective:
          "Open **{{game}}**. Try a new response to an attack that often catches you. **Beat the boss or finish three attempts**.",
      },
      de: {
        name: "Den Boss lesen",
        objective:
          "Starte ein **Spiel mit wiederholbaren Bosskämpfen**. Nimm dir einen Angriff vor, der dich oft trifft, und probier eine andere Reaktion darauf. **Besieg den Boss oder hör nach drei Versuchen auf**.",
        gameObjective:
          "Starte **{{game}}**. Nimm dir einen Angriff vor, der dich oft trifft, und probier eine andere Reaktion darauf. **Besieg den Boss oder hör nach drei Versuchen auf**.",
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
    suggestedDurationMinutes: 15,
    translations: {
      en: {
        name: "In and Out",
        objective:
          "Open a **game with stealth**. Pick a guarded doorway or passage. **Sneak there and back without attacking**. Stop after success or three attempts.",
        gameObjective:
          "Open **{{game}}**. Pick a guarded doorway or passage. **Sneak there and back without attacking**. Stop after success or three attempts.",
      },
      de: {
        name: "Rein und raus",
        objective:
          "Starte ein **Spiel mit Schleichen**. Wähle eine bewachte Tür oder Passage. **Schleich ungesehen hindurch und wieder zurück, ohne anzugreifen**. Nach Erfolg oder drei Versuchen ist Schluss.",
        gameObjective:
          "Starte **{{game}}**. Wähle eine bewachte Tür oder Passage. **Schleich ungesehen hindurch und wieder zurück, ohne anzugreifen**. Nach Erfolg oder drei Versuchen ist Schluss.",
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
    suggestedDurationMinutes: 10,
    translations: {
      en: {
        name: "Watch the Patrol",
        objective:
          "Open a **game with patrolling guards**. Watch a patrol from cover and find an opening. **Use it to sneak past unseen**.",
        gameObjective:
          "Open **{{game}}**. Watch a patrol from cover and find an opening. **Use it to sneak past unseen**.",
      },
      de: {
        name: "Die Patrouille",
        objective:
          "Starte ein **Spiel mit patrouillierenden Wachen**. Beobachte eine Patrouille aus der Deckung. Wenn sich eine Lücke auftut, **schleich ungesehen an ihr vorbei**.",
        gameObjective:
          "Starte **{{game}}**. Beobachte eine Patrouille aus der Deckung. Wenn sich eine Lücke auftut, **schleich ungesehen an ihr vorbei**.",
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
    translations: {
      en: {
        name: "No Hints",
        objective:
          "Open a **game with puzzles**. Pick an unfinished puzzle and **solve it without hints or a walkthrough**. Restarting and undo are allowed.",
        gameObjective:
          "Open **{{game}}**. Pick an unfinished puzzle and **solve it without hints or a walkthrough**. Restarting and undo are allowed.",
      },
      de: {
        name: "Ohne Hinweise",
        objective:
          "Starte ein **Spiel mit Rätseln**. Nimm ein offenes Rätsel und **löse es ohne Hinweise oder Komplettlösung**. Neustart und Rückgängig sind erlaubt.",
        gameObjective:
          "Starte **{{game}}**. Nimm ein offenes Rätsel und **löse es ohne Hinweise oder Komplettlösung**. Neustart und Rückgängig sind erlaubt.",
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
    translations: {
      en: {
        name: "One Puzzle",
        objective:
          "Open a **relaxed puzzle game**. Pick one untimed puzzle and **solve just that one**. Use hints whenever you like.",
        gameObjective:
          "Open **{{game}}**. Pick one untimed puzzle and **solve just that one**. Use hints whenever you like.",
      },
      de: {
        name: "Ein Rätsel",
        objective:
          "Starte ein **entspanntes Rätselspiel**. Nimm ein Rätsel ohne Zeitlimit und **löse nur dieses eine**. Nutze Hinweise, wann du möchtest.",
        gameObjective:
          "Starte **{{game}}**. Nimm ein Rätsel ohne Zeitlimit und **löse nur dieses eine**. Nutze Hinweise, wann du möchtest.",
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
    minimumDurationMinutes: 3,
    suggestedDurationMinutes: 20,
    translations: {
      en: {
        name: "Three Materials",
        objective:
          "Open a **building game**. Build a small shelter from three materials. **Add a roof and entrance**, then walk inside.",
        gameObjective:
          "Open **{{game}}**. Build a small shelter from three materials. **Add a roof and entrance**, then walk inside.",
      },
      de: {
        name: "Drei Materialien",
        objective:
          "Starte ein **Bauspiel**. Baue aus drei Materialien einen kleinen Unterstand. **Füge Dach und Eingang hinzu** und geh hinein.",
        gameObjective:
          "Starte **{{game}}**. Baue aus drei Materialien einen kleinen Unterstand. **Füge Dach und Eingang hinzu** und geh hinein.",
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
    minimumDurationMinutes: 3,
    suggestedDurationMinutes: 20,
    translations: {
      en: {
        name: "Room from Memory",
        objective:
          "Open a **game with free building**. Recreate the rough shape of a room you know. **Add its doorway and save the build**. Keep the details simple.",
        gameObjective:
          "Open **{{game}}**. Recreate the rough shape of a room you know. **Add its doorway and save the build**. Keep the details simple.",
      },
      de: {
        name: "Raum aus Erinnerung",
        objective:
          "Starte ein **Spiel mit freiem Bauen**. Bau einen Raum nach, an den du dich gut erinnerst. **Setz die Tür an die richtige Stelle und speichere den Bau**. Die kleinen Details können warten.",
        gameObjective:
          "Starte **{{game}}**. Bau einen Raum nach, an den du dich gut erinnerst. **Setz die Tür an die richtige Stelle und speichere den Bau**. Die kleinen Details können warten.",
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
    translations: {
      en: {
        name: "From Storage",
        objective:
          "Open a **game with crafting**. Pick a recipe you have all the materials for and **craft it once**. Gather and buy nothing.",
        gameObjective:
          "Open **{{game}}**. Pick a recipe you have all the materials for and **craft it once**. Gather and buy nothing.",
      },
      de: {
        name: "Aus dem Vorrat",
        objective:
          "Starte ein **Spiel mit Crafting**. Wähle ein Rezept mit vollständig vorhandenen Materialien und **stelle es einmal her**. Sammle und kaufe nichts dazu.",
        gameObjective:
          "Starte **{{game}}**. Wähle ein Rezept mit vollständig vorhandenen Materialien und **stelle es einmal her**. Sammle und kaufe nichts dazu.",
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
    minimumDurationMinutes: 3,
    suggestedDurationMinutes: 15,
    translations: {
      en: {
        name: "Unused Recipe",
        objective:
          "Open a **game with crafting**. Choose an unused recipe, get missing materials nearby, and **craft it once**.",
        gameObjective:
          "Open **{{game}}**. Choose an unused recipe, get missing materials nearby, and **craft it once**.",
      },
      de: {
        name: "Neues Rezept",
        objective:
          "Starte ein **Spiel mit Crafting**. Wähle ein ungenutztes Rezept, besorge fehlende Materialien in der Nähe und **stelle es einmal her**.",
        gameObjective:
          "Starte **{{game}}**. Wähle ein ungenutztes Rezept, besorge fehlende Materialien in der Nähe und **stelle es einmal her**.",
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
    suggestedDurationMinutes: 10,
    translations: {
      en: {
        name: "Three Fish",
        objective:
          "Open a **game with fishing**. Head to a fishing spot and **catch three fish** of any kind.",
        gameObjective:
          "Open **{{game}}**. Head to a fishing spot and **catch three fish** of any kind.",
      },
      de: {
        name: "Drei Fische",
        objective:
          "Starte ein **Spiel mit Angeln**. Geh zu einer Angelstelle und **fange drei beliebige Fische**.",
        gameObjective:
          "Starte **{{game}}**. Geh zu einer Angelstelle und **fange drei beliebige Fische**.",
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
    minimumDurationMinutes: 3,
    suggestedDurationMinutes: 15,
    translations: {
      en: {
        name: "Another Fishing Spot",
        objective:
          "Open a **game with several fishing spots**. Leave your usual fishing spot and **catch one fish somewhere different**.",
        gameObjective:
          "Open **{{game}}**. Leave your usual fishing spot and **catch one fish somewhere different**.",
      },
      de: {
        name: "Eine andere Angelstelle",
        objective:
          "Starte ein **Spiel mit mehreren Angelstellen**. Verlasse deinen üblichen Angelplatz und **fange an einer anderen Stelle einen Fisch**.",
        gameObjective:
          "Starte **{{game}}**. Verlasse deinen üblichen Angelplatz und **fange an einer anderen Stelle einen Fisch**.",
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
    translations: {
      en: {
        name: "From the Pantry",
        objective:
          "Open a **game with cooking**. Use ingredients you already have and **cook one portion of a known recipe**.",
        gameObjective:
          "Open **{{game}}**. Use ingredients you already have and **cook one portion of a known recipe**.",
      },
      de: {
        name: "Aus der Vorratskammer",
        objective:
          "Starte ein **Spiel mit Kochen**. Nutze vorhandene Zutaten und **koche eine Portion nach einem bekannten Rezept**.",
        gameObjective:
          "Starte **{{game}}**. Nutze vorhandene Zutaten und **koche eine Portion nach einem bekannten Rezept**.",
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
    minimumDurationMinutes: 3,
    suggestedDurationMinutes: 15,
    translations: {
      en: {
        name: "A New Dish",
        objective:
          "Open a **game with cooking**. Choose an unused recipe, find missing ingredients nearby, and **cook it once**.",
        gameObjective:
          "Open **{{game}}**. Choose an unused recipe, find missing ingredients nearby, and **cook it once**.",
      },
      de: {
        name: "Ein neues Gericht",
        objective:
          "Starte ein **Spiel mit Kochen**. Wähle ein ungenutztes Rezept, besorge fehlende Zutaten in der Nähe und **koche es einmal**.",
        gameObjective:
          "Starte **{{game}}**. Wähle ein ungenutztes Rezept, besorge fehlende Zutaten in der Nähe und **koche es einmal**.",
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
    minimumDurationMinutes: 3,
    suggestedDurationMinutes: 15,
    translations: {
      en: {
        name: "One Patch",
        objective:
          "Open a **game with farming**. Choose one planted patch. **Harvest its ripe crops and replant the empty spaces**. Leave the rest of the farm for later.",
        gameObjective:
          "Open **{{game}}**. Choose one planted patch. **Harvest its ripe crops and replant the empty spaces**. Leave the rest of the farm for later.",
      },
      de: {
        name: "Ein Beet",
        objective:
          "Starte ein **Spiel mit Landwirtschaft**. Wähle ein bepflanztes Beet. **Ernte alles Reife und säe freie Stellen neu ein**. Der Rest des Hofs kommt später.",
        gameObjective:
          "Starte **{{game}}**. Wähle ein bepflanztes Beet. **Ernte alles Reife und säe freie Stellen neu ein**. Der Rest des Hofs kommt später.",
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
    translations: {
      en: {
        name: "Feeding Time",
        objective:
          "Open a **game with animals in your care**. Visit your animals and **feed everyone who needs food**. Stop once they are all fed.",
        gameObjective:
          "Open **{{game}}**. Visit your animals and **feed everyone who needs food**. Stop once they are all fed.",
      },
      de: {
        name: "Fütterungszeit",
        objective:
          "Starte ein **Spiel mit Tieren in deiner Obhut**. Besuche deine Tiere und **füttere alle hungrigen Tiere**. Hör auf, wenn alle versorgt sind.",
        gameObjective:
          "Starte **{{game}}**. Besuche deine Tiere und **füttere alle hungrigen Tiere**. Hör auf, wenn alle versorgt sind.",
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
    minimumDurationMinutes: 3,
    suggestedDurationMinutes: 15,
    translations: {
      en: {
        name: "The Same Road",
        objective:
          "Open a **free-roam driving game**. Drive to a nearby landmark. **Take the same road back** and try to make the return smoother.",
        gameObjective:
          "Open **{{game}}**. Drive to a nearby landmark. **Take the same road back** and try to make the return smoother.",
      },
      de: {
        name: "Dieselbe Straße",
        objective:
          "Starte ein **Spiel mit freien Autofahrten**. Fahre zu einem Orientierungspunkt in der Nähe. **Nimm dieselbe Straße zurück** und versuche, ruhiger zu fahren.",
        gameObjective:
          "Starte **{{game}}**. Fahre zu einem Orientierungspunkt in der Nähe. **Nimm dieselbe Straße zurück** und versuche, ruhiger zu fahren.",
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
    tags: ["racing", "three-attempts"],
    minimumDurationMinutes: 3,
    suggestedDurationMinutes: 25,
    translations: {
      en: {
        name: "A Clean Race",
        objective:
          "Open a **racing game**. Pick a familiar track and **finish a race without hitting barriers or cars**. Stop after success or three races.",
        gameObjective:
          "Open **{{game}}**. Pick a familiar track and **finish a race without hitting barriers or cars**. Stop after success or three races.",
      },
      de: {
        name: "Ein sauberes Rennen",
        objective:
          "Starte ein **Rennspiel**. Nimm eine Strecke, die du kennst, und **fahr ein Rennen zu Ende, ohne Leitplanken oder andere Autos zu berühren**. Hör nach dem Erfolg oder drei Rennen auf.",
        gameObjective:
          "Starte **{{game}}**. Nimm eine Strecke, die du kennst, und **fahr ein Rennen zu Ende, ohne Leitplanken oder andere Autos zu berühren**. Hör nach dem Erfolg oder drei Rennen auf.",
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
    suggestedDurationMinutes: 10,
    translations: {
      en: {
        name: "A New Way Up",
        objective:
          "Open a **game with climbing or movement abilities**. Pick a reachable ledge or platform. **Find a new route there and return to the start**.",
        gameObjective:
          "Open **{{game}}**. Pick a reachable ledge or platform. **Find a new route there and return to the start**.",
      },
      de: {
        name: "Ein neuer Weg",
        objective:
          "Starte ein **Spiel mit Klettern oder Bewegungsfähigkeiten**. Wähle einen erreichbaren Vorsprung oder eine Plattform. **Finde einen neuen Weg dorthin und kehre zum Start zurück**.",
        gameObjective:
          "Starte **{{game}}**. Wähle einen erreichbaren Vorsprung oder eine Plattform. **Finde einen neuen Weg dorthin und kehre zum Start zurück**.",
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
    suggestedDurationMinutes: 10,
    translations: {
      en: {
        name: "Two Colors",
        objective:
          "Open a **game with appearance customization**. Create a look from owned items using **two main colors**. Equip it and see it in gameplay.",
        gameObjective:
          "Open **{{game}}**. Create a look from owned items using **two main colors**. Equip it and see it in gameplay.",
      },
      de: {
        name: "Zwei Farben",
        objective:
          "Starte ein **Spiel mit anpassbarem Aussehen**. Gestalte mit vorhandenen Items einen Look in **zwei Hauptfarben**. Rüste ihn aus und sieh ihn dir im Spiel an.",
        gameObjective:
          "Starte **{{game}}**. Gestalte mit vorhandenen Items einen Look in **zwei Hauptfarben**. Rüste ihn aus und sieh ihn dir im Spiel an.",
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
    minimumDurationMinutes: 3,
    suggestedDurationMinutes: 15,
    translations: {
      en: {
        name: "Three Angles",
        objective:
          "Open a **game with photo mode**. Photograph one subject close up, from below, and in a wide shot. **Save all three photos**.",
        gameObjective:
          "Open **{{game}}**. Photograph one subject close up, from below, and in a wide shot. **Save all three photos**.",
      },
      de: {
        name: "Drei Blickwinkel",
        objective:
          "Starte ein **Spiel mit Fotomodus**. Fotografiere ein Motiv nah, von unten und aus der Ferne. **Speichere alle drei Bilder**.",
        gameObjective:
          "Starte **{{game}}**. Fotografiere ein Motiv nah, von unten und aus der Ferne. **Speichere alle drei Bilder**.",
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
    translations: {
      en: {
        name: "A Small Detail",
        objective:
          "Open a **game with photo mode**. Find a small detail nearby and **take a close-up that fills the frame**.",
        gameObjective:
          "Open **{{game}}**. Find a small detail nearby and **take a close-up that fills the frame**.",
      },
      de: {
        name: "Ein kleines Detail",
        objective:
          "Starte ein **Spiel mit Fotomodus**. Such ein kleines Detail in deiner Nähe und **mach eine bildfüllende Nahaufnahme**.",
        gameObjective:
          "Starte **{{game}}**. Such ein kleines Detail in deiner Nähe und **mach eine bildfüllende Nahaufnahme**.",
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
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 45,
    translations: {
      en: {
        name: "Stay Together",
        objective:
          "Open an **online team game**. Join a teammate working on an objective. **Stay together and help until it or the round ends**.",
        gameObjective:
          "Open **{{game}}**. Join a teammate working on an objective. **Stay together and help until it or the round ends**.",
      },
      de: {
        name: "Zusammenbleiben",
        objective:
          "Starte ein **Online-Teamspiel**. Schließe dich einem Teammitglied am Ziel an. **Unterstütze dein Teammitglied, bis das Ziel geschafft oder die Runde vorbei ist**.",
        gameObjective:
          "Starte **{{game}}**. Schließe dich einem Teammitglied am Ziel an. **Unterstütze dein Teammitglied, bis das Ziel geschafft oder die Runde vorbei ist**.",
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
    minimumDurationMinutes: 3,
    suggestedDurationMinutes: 25,
    translations: {
      en: {
        name: "Three Turns Each",
        objective:
          "Open a **local multiplayer game**. With someone beside you, pick a short mode and **play three turns each**. Pass the controls after every turn.",
        gameObjective:
          "Open **{{game}}**. With someone beside you, pick a short mode and **play three turns each**. Pass the controls after every turn.",
      },
      de: {
        name: "Je drei Runden",
        objective:
          "Starte ein **lokales Mehrspielerspiel**. Wähle mit jemandem vor Ort einen kurzen Modus und **spielt je drei Runden**. Gebt die Steuerung nach jeder Runde weiter.",
        gameObjective:
          "Starte **{{game}}**. Wähle mit jemandem vor Ort einen kurzen Modus und **spielt je drei Runden**. Gebt die Steuerung nach jeder Runde weiter.",
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
    translations: {
      en: {
        name: "One Gap Less",
        objective:
          "Open a **game with collectibles**. Pick an item missing from your collection and **find it without guides or outside help**.",
        gameObjective:
          "Open **{{game}}**. Pick an item missing from your collection and **find it without guides or outside help**.",
      },
      de: {
        name: "Eine Lücke weniger",
        objective:
          "Starte ein **Spiel mit Sammelobjekten**. Wähle ein noch fehlendes Sammelobjekt und **finde es ohne Guides oder Hilfe von außen**.",
        gameObjective:
          "Starte **{{game}}**. Wähle ein noch fehlendes Sammelobjekt und **finde es ohne Guides oder Hilfe von außen**.",
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
    minimumDurationMinutes: 3,
    suggestedDurationMinutes: 15,
    translations: {
      en: {
        name: "Hear Them Out",
        objective:
          "Open a **game with optional dialogue or story entries**. Pick an unfinished conversation or entry and **read or listen to it all**.",
        gameObjective:
          "Open **{{game}}**. Pick an unfinished conversation or entry and **read or listen to it all**.",
      },
      de: {
        name: "Erst mal zuhören",
        objective:
          "Starte ein **Spiel mit optionalen Dialogen oder Storyeinträgen**. Such dir ein optionales Gespräch oder einen Storyeintrag, den du noch nicht kennst, und **hör oder lies ihn bis zum Ende**.",
        gameObjective:
          "Starte **{{game}}**. Such dir ein optionales Gespräch oder einen Storyeintrag, den du noch nicht kennst, und **hör oder lies ihn bis zum Ende**.",
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
    minimumDurationMinutes: 3,
    suggestedDurationMinutes: 15,
    translations: {
      en: {
        name: "Sell and Replace",
        objective:
          "Open a **game with merchants**. Visit a nearby merchant and **sell three unused items**. Spend the earnings on a new item at the next merchant you find.",
        gameObjective:
          "Open **{{game}}**. Visit a nearby merchant and **sell three unused items**. Spend the earnings on a new item at the next merchant you find.",
      },
      de: {
        name: "Verkaufen und ersetzen",
        objective:
          "Starte ein **Spiel mit Händlern**. Verkauf bei einem Händler **drei Items, die du nicht mehr brauchst**. Kauf dir vom Erlös bei einem anderen Händler etwas Neues.",
        gameObjective:
          "Starte **{{game}}**. Verkauf bei einem Händler **drei Items, die du nicht mehr brauchst**. Kauf dir vom Erlös bei einem anderen Händler etwas Neues.",
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
    minimumDurationMinutes: 3,
    suggestedDurationMinutes: 20,
    translations: {
      en: {
        name: "One Species",
        objective:
          "Open a **game with hunting**. Let the first huntable animal set the species. **Hunt two of that kind and collect their materials**.",
        gameObjective:
          "Open **{{game}}**. Let the first huntable animal set the species. **Hunt two of that kind and collect their materials**.",
      },
      de: {
        name: "Eine Tierart",
        objective:
          "Starte ein **Spiel mit Jagd**. Das erste Tier, das du jagen kannst, bestimmt die Art. **Erleg zwei Tiere dieser Art und sammle ihre Materialien**.",
        gameObjective:
          "Starte **{{game}}**. Das erste Tier, das du jagen kannst, bestimmt die Art. **Erleg zwei Tiere dieser Art und sammle ihre Materialien**.",
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
    suggestedDurationMinutes: 10,
    translations: {
      en: {
        name: "Let Them Lead",
        objective:
          "Open a **game with an animal combat companion**. Let your companion start the next fight, then join in. **Finish the fight together**.",
        gameObjective:
          "Open **{{game}}**. Let your companion start the next fight, then join in. **Finish the fight together**.",
      },
      de: {
        name: "Begleiter zuerst",
        objective:
          "Starte ein **Spiel mit einem Tierbegleiter im Kampf**. Lass deinen Tierbegleiter den nächsten Kampf eröffnen und greif danach ein. **Gewinnt den Kampf zusammen**.",
        gameObjective:
          "Starte **{{game}}**. Lass deinen Tierbegleiter den nächsten Kampf eröffnen und greif danach ein. **Gewinnt den Kampf zusammen**.",
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
    minimumDurationMinutes: 3,
    suggestedDurationMinutes: 20,
    translations: {
      en: {
        name: "Two Points Ahead",
        objective:
          "Open a **sports game with CPU opponents**. Play against the CPU and **win by two points**. Stop after success or three matches.",
        gameObjective:
          "Open **{{game}}**. Play against the CPU and **win by two points**. Stop after success or three matches.",
      },
      de: {
        name: "Zwei Punkte Vorsprung",
        objective:
          "Starte ein **Sportspiel mit CPU-Gegnern**. Spiele gegen die CPU und **gewinne mit zwei Punkten Vorsprung**. Nach Erfolg oder drei Matches ist Schluss.",
        gameObjective:
          "Starte **{{game}}**. Spiele gegen die CPU und **gewinne mit zwei Punkten Vorsprung**. Nach Erfolg oder drei Matches ist Schluss.",
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
    minimumDurationMinutes: 3,
    suggestedDurationMinutes: 25,
    translations: {
      en: {
        name: "Three Containers",
        objective:
          "Open a **solo extraction game**. Start with your usual gear. Loot only the **first three containers** and **extract with what you found**.",
        gameObjective:
          "Open **{{game}}**. Start with your usual gear. Loot only the **first three containers** and **extract with what you found**.",
      },
      de: {
        name: "Drei Behälter",
        objective:
          "Starte ein **Solo-Extraktionsspiel**. Geh mit deiner üblichen Ausrüstung in eine Runde. Plündere nur die **ersten drei Behälter**, die du findest, und **versuch mit dieser Beute zu extrahieren**.",
        gameObjective:
          "Starte **{{game}}**. Geh mit deiner üblichen Ausrüstung in eine Runde. Plündere nur die **ersten drei Behälter**, die du findest, und **versuch mit dieser Beute zu extrahieren**.",
      },
    },
    customGameCompatibility: {
      capabilityIds: ["extraction-runs"],
    },
  },

  // Additional activities and genre-aware sessions.
  {
    "id": "follow-the-water",
    "moodIds": [
      "relax",
      "explore"
    ],
    "type": "inspiration",
    "tags": [
      "free-roam",
      "on-foot"
    ],
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Along the Water",
        "objective": "Open a **freely explorable game**. Find a nearby river or shore and **follow the water on foot**. Take the bends and little paths without choosing a destination.",
        "gameObjective": "Open **{{game}}**. Find a nearby river or shore and **follow the water on foot**. Take the bends and little paths without choosing a destination."
      },
      "de": {
        "name": "Am Wasser entlang",
        "objective": "Starte ein **frei erkundbares Spiel**. Such einen nahen Fluss oder ein Ufer und **folge dem Wasser zu Fuß**. Nimm Biegungen und kleine Wege, ohne ein Ziel festzulegen.",
        "gameObjective": "Starte **{{game}}**. Such einen nahen Fluss oder ein Ufer und **folge dem Wasser zu Fuß**. Nimm Biegungen und kleine Wege, ohne ein Ziel festzulegen."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "open-world"
      ]
    }
  },
  {
    "id": "view-from-below",
    "moodIds": [
      "explore",
      "curious"
    ],
    "type": "experiment",
    "tags": [
      "exploration",
      "traversal"
    ],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Above and Below",
        "objective": "Open a **game with exploration and climbing**. Look around the foot of a climbable hill or structure. Climb up and **find a landmark hidden from below**.",
        "gameObjective": "Open **{{game}}**. Look around the foot of a climbable hill or structure. Climb up and **find a landmark hidden from below**."
      },
      "de": {
        "name": "Oben und unten",
        "objective": "Starte ein **Spiel mit Erkundung und Klettern**. Schau dich am Fuß eines Hügels oder Bauwerks um. Kletter hinauf und **find oben einen Ort, den du von unten nicht sehen konntest**.",
        "gameObjective": "Starte **{{game}}**. Schau dich am Fuß eines Hügels oder Bauwerks um. Kletter hinauf und **find oben einen Ort, den du von unten nicht sehen konntest**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "open-world",
        "advanced-traversal"
      ]
    }
  },
  {
    "id": "story-without-rushing",
    "moodIds": [
      "low-energy",
      "overwhelmed"
    ],
    "type": "inspiration",
    "tags": [
      "current-save",
      "story"
    ],
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 20,
    "translations": {
      "en": {
        "name": "Let It Unfold",
        "objective": "Open a **familiar story game**. Continue your current mission and **take time for its conversations**. Keep your difficulty and enjoy the quieter stretches without a chapter target.",
        "gameObjective": "Open **{{game}}**. Continue your current mission and **take time for its conversations**. Keep your difficulty and enjoy the quieter stretches without a chapter target."
      },
      "de": {
        "name": "In Ruhe weiterspielen",
        "objective": "Starte ein **vertrautes Storyspiel**. Spiel deine laufende Mission weiter und **nimm dir Zeit für die Gespräche**. Bleib auf deinem gewohnten Schwierigkeitsgrad. Du musst heute kein Kapitel beenden.",
        "gameObjective": "Starte **{{game}}**. Spiel deine laufende Mission weiter und **nimm dir Zeit für die Gespräche**. Bleib auf deinem gewohnten Schwierigkeitsgrad. Du musst heute kein Kapitel beenden."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "missions-or-levels"
      ],
      "genreIds": [
        "adventure",
        "rpg",
        "narrative"
      ]
    }
  },
  {
    "id": "replay-a-favorite-mission",
    "moodIds": [
      "nostalgic"
    ],
    "type": "objective",
    "tags": [
      "replay"
    ],
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 20,
    "translations": {
      "en": {
        "name": "That Mission Again",
        "objective": "Open a **game with replayable missions or levels**. Choose an unlocked favorite and **play it through to the end**. Use the route or approach you remember.",
        "gameObjective": "Open **{{game}}**. Choose an unlocked favorite and **play it through to the end**. Use the route or approach you remember."
      },
      "de": {
        "name": "Diese eine Mission",
        "objective": "Starte ein **Spiel mit wiederholbaren Missionen oder Leveln**. Wähle einen freigeschalteten Lieblingsabschnitt und **spiel ihn bis zum Ende**. Nimm den Weg, den du damals genommen hast.",
        "gameObjective": "Starte **{{game}}**. Wähle einen freigeschalteten Lieblingsabschnitt und **spiel ihn bis zum Ende**. Nimm den Weg, den du damals genommen hast."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "missions-or-levels"
      ]
    }
  },
  {
    "id": "one-mode-evening",
    "moodIds": [
      "overwhelmed",
      "restless"
    ],
    "type": "inspiration",
    "tags": [],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 25,
    "translations": {
      "en": {
        "name": "Stay in the Mode",
        "objective": "Open a **game with short standalone rounds**. Keep a familiar mode and setup and **spend the session playing**. Finish each round before deciding whether to start another.",
        "gameObjective": "Open **{{game}}**. Keep a familiar mode and setup and **spend the session playing**. Finish each round before deciding whether to start another."
      },
      "de": {
        "name": "Beim Modus bleiben",
        "objective": "Starte ein **Spiel mit kurzen eigenständigen Runden**. Such dir einen vertrauten Modus aus und **bleib für diese Session dabei**. Behalte dein Setup und spiel jede Runde zu Ende.",
        "gameObjective": "Starte **{{game}}**. Such dir einen vertrauten Modus aus und **bleib für diese Session dabei**. Behalte dein Setup und spiel jede Runde zu Ende."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "rounds-or-matches"
      ]
    }
  },
  {
    "id": "return-to-old-main",
    "moodIds": [
      "nostalgic"
    ],
    "type": "objective",
    "tags": [
      "abilities",
      "replay"
    ],
    "minimumDurationMinutes": 10,
    "suggestedDurationMinutes": 45,
    "translations": {
      "en": {
        "name": "Your Old Main",
        "objective": "Open a **game with selectable characters**. Choose a character you used to play and **finish one full match with them**. Keep your usual mode and accept the result.",
        "gameObjective": "Open **{{game}}**. Choose a character you used to play and **finish one full match with them**. Keep your usual mode and accept the result."
      },
      "de": {
        "name": "Dein alter Main",
        "objective": "Starte ein **Spiel mit wählbaren Figuren**. Wähle eine Figur, die früher dein Main war, und **spiel ein ganzes Match mit ihr**. Bleib bei deinem üblichen Modus, egal wie das Match ausgeht.",
        "gameObjective": "Starte **{{game}}**. Wähle eine Figur, die früher dein Main war, und **spiel ein ganzes Match mit ihr**. Bleib bei deinem üblichen Modus, egal wie das Match ausgeht."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "whole-matches",
        "character-abilities"
      ]
    }
  },
  {
    "id": "favorite-weapon-session",
    "moodIds": [
      "nostalgic",
      "restless"
    ],
    "type": "inspiration",
    "tags": [
      "loadout",
      "replay"
    ],
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Old Reliable",
        "objective": "Open a **game with selectable weapons**. Equip an old favorite from your save and **bring it back into ordinary fights**. Switch weapons when needed.",
        "gameObjective": "Open **{{game}}**. Equip an old favorite from your save and **bring it back into ordinary fights**. Switch weapons when needed."
      },
      "de": {
        "name": "Altbewährt",
        "objective": "Starte ein **Spiel mit wählbaren Waffen**. Rüste eine Lieblingswaffe aus einem früheren Spielabschnitt aus und **probier sie wieder in normalen Kämpfen aus**. Wechsle bei Bedarf.",
        "gameObjective": "Starte **{{game}}**. Rüste eine Lieblingswaffe aus einem früheren Spielabschnitt aus und **probier sie wieder in normalen Kämpfen aus**. Wechsle bei Bedarf."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "combat-loadouts"
      ]
    }
  },
  {
    "id": "weapon-distance-compare",
    "moodIds": [
      "curious",
      "focused"
    ],
    "type": "experiment",
    "tags": [
      "loadout",
      "vs-bots"
    ],
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 20,
    "translations": {
      "en": {
        "name": "Find Its Range",
        "objective": "Open a **game with selectable weapons**. Use one owned weapon in a close fight and a distant fight against bots or solo enemies. **Finish both and compare its handling**.",
        "gameObjective": "Open **{{game}}**. Use one owned weapon in a close fight and a distant fight against bots or solo enemies. **Finish both and compare its handling**."
      },
      "de": {
        "name": "Die passende Distanz",
        "objective": "Starte ein **Spiel mit wählbaren Waffen**. Nimm dieselbe Waffe in einen nahen und einen weiter entfernten Kampf gegen Bots oder Solo-Gegner. **Spiel beide zu Ende und achte darauf, auf welche Distanz sie dir besser liegt**.",
        "gameObjective": "Starte **{{game}}**. Nimm dieselbe Waffe in einen nahen und einen weiter entfernten Kampf gegen Bots oder Solo-Gegner. **Spiel beide zu Ende und achte darauf, auf welche Distanz sie dir besser liegt**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "combat-loadouts"
      ]
    }
  },
  {
    "id": "spell-follow-up",
    "moodIds": [
      "curious",
      "focused"
    ],
    "type": "experiment",
    "tags": [
      "spells",
      "new-approach"
    ],
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Two Spell Openers",
        "objective": "Open a **game with damage spells**. Use two unlocked spells to open separate solo fights against the same enemy type. **Finish both and compare range or casting time**.",
        "gameObjective": "Open **{{game}}**. Use two unlocked spells to open separate solo fights against the same enemy type. **Finish both and compare range or casting time**."
      },
      "de": {
        "name": "Zwei Zauber zum Start",
        "objective": "Starte ein **Spiel mit Schadenszaubern**. Beginne zwei Solo-Kämpfe gegen denselben Gegnertyp mit je einem anderen freigeschalteten Zauber. **Spiel beide zu Ende und vergleiche Reichweite und Zauberzeit**.",
        "gameObjective": "Starte **{{game}}**. Beginne zwei Solo-Kämpfe gegen denselben Gegnertyp mit je einem anderen freigeschalteten Zauber. **Spiel beide zu Ende und vergleiche Reichweite und Zauberzeit**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "combat-spells"
      ]
    }
  },
  {
    "id": "mage-back-in-action",
    "moodIds": [
      "restless",
      "nostalgic"
    ],
    "type": "inspiration",
    "tags": [
      "spells",
      "replay"
    ],
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Back to Magic",
        "objective": "Open a **game with damage spells**. Return to spells you know and **take them into the next fights**. Follow the encounters without rebuilding your character.",
        "gameObjective": "Open **{{game}}**. Return to spells you know and **take them into the next fights**. Follow the encounters without rebuilding your character."
      },
      "de": {
        "name": "Zurück zur Magie",
        "objective": "Starte ein **Spiel mit Schadenszaubern**. Kehre zu bekannten Zaubern zurück und **nutze sie in den nächsten Kämpfen**. Ändere sonst nichts an deinem Build, unabhängig von deinem Gegner.",
        "gameObjective": "Starte **{{game}}**. Kehre zu bekannten Zaubern zurück und **nutze sie in den nächsten Kämpfen**. Ändere sonst nichts an deinem Build, unabhängig von deinem Gegner."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "combat-spells"
      ]
    }
  },
  {
    "id": "stay-on-this-planet",
    "moodIds": [
      "relax",
      "overwhelmed"
    ],
    "type": "inspiration",
    "tags": [
      "space",
      "free-roam"
    ],
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 20,
    "translations": {
      "en": {
        "name": "Stay Planetside",
        "objective": "Open a **space game with landable planets**. Land somewhere peaceful or stay on your current planet. **Explore around the landing spot** and return to your ship whenever you like.",
        "gameObjective": "Open **{{game}}**. Land somewhere peaceful or stay on your current planet. **Explore around the landing spot** and return to your ship whenever you like."
      },
      "de": {
        "name": "Auf diesem Planeten",
        "objective": "Starte ein **Weltraumspiel mit begehbaren Planeten**. Lande an einem friedlichen Ort oder bleib auf deinem jetzigen Planeten. **Erkunde den Landeplatz** und kehre zum Schiff zurück, wann du möchtest.",
        "gameObjective": "Starte **{{game}}**. Lande an einem friedlichen Ort oder bleib auf deinem jetzigen Planeten. **Erkunde den Landeplatz** und kehre zum Schiff zurück, wann du möchtest."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "space-exploration"
      ]
    }
  },
  {
    "id": "planet-horizon-loop",
    "moodIds": [
      "explore",
      "focused"
    ],
    "type": "objective",
    "tags": [
      "space",
      "exploration"
    ],
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 20,
    "translations": {
      "en": {
        "name": "Beyond the Landing",
        "objective": "Open a **space game with landable planets**. On a safe planet, **walk to a nearby hill or rock formation and back**. Take another path home or return early if supplies run low.",
        "gameObjective": "Open **{{game}}**. On a safe planet, **walk to a nearby hill or rock formation and back**. Take another path home or return early if supplies run low."
      },
      "de": {
        "name": "Jenseits des Landeplatzes",
        "objective": "Starte ein **Weltraumspiel mit begehbaren Planeten**. Such dir einen sicheren Planeten und **geh zu einem Hügel oder Felsen in der Nähe und zurück**. Nimm einen anderen Rückweg oder kehre bei knappen Vorräten früher um.",
        "gameObjective": "Starte **{{game}}**. Such dir einen sicheren Planeten und **geh zu einem Hügel oder Felsen in der Nähe und zurück**. Nimm einen anderen Rückweg oder kehre bei knappen Vorräten früher um."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "space-exploration"
      ]
    }
  },
  {
    "id": "underwater-look",
    "moodIds": [
      "curious",
      "explore"
    ],
    "type": "objective",
    "tags": [
      "diving"
    ],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "translations": {
      "en": {
        "name": "Under the Surface",
        "objective": "Open a **game with swimming and diving**. Choose shallow water with a safe exit. **Inspect the bottom and return to shore** before your air runs low. Compare the terrain with the bank.",
        "gameObjective": "Open **{{game}}**. Choose shallow water with a safe exit. **Inspect the bottom and return to shore** before your air runs low. Compare the terrain with the bank."
      },
      "de": {
        "name": "Unter der Oberfläche",
        "objective": "Starte ein **Spiel mit Schwimmen und Tauchen**. Such dir flaches Wasser, aus dem du leicht wieder herauskommst. **Schau dich am Grund um und kehr ans Ufer zurück**, bevor dir die Luft ausgeht. Achte auf etwas, das du vom Ufer aus nicht sehen konntest.",
        "gameObjective": "Starte **{{game}}**. Such dir flaches Wasser, aus dem du leicht wieder herauskommst. **Schau dich am Grund um und kehr ans Ufer zurück**, bevor dir die Luft ausgeht. Achte auf etwas, das du vom Ufer aus nicht sehen konntest."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "swimming"
      ]
    }
  },
  {
    "id": "waterfront-break",
    "moodIds": [
      "relax",
      "low-energy"
    ],
    "type": "inspiration",
    "tags": [
      "diving",
      "free-roam"
    ],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "translations": {
      "en": {
        "name": "A Dip Nearby",
        "objective": "Open a **freely explorable game with swimming**. Visit safe water nearby and **swim along its edge**. Stay close to places where you can climb out.",
        "gameObjective": "Open **{{game}}**. Visit safe water nearby and **swim along its edge**. Stay close to places where you can climb out."
      },
      "de": {
        "name": "Kurz ins Wasser",
        "objective": "Starte ein **frei erkundbares Spiel mit Schwimmen**. Besuche eine sichere Wasserstelle in der Nähe und **schwimme am Rand entlang**. Bleib nah an erreichbaren Ausstiegen.",
        "gameObjective": "Starte **{{game}}**. Besuche eine sichere Wasserstelle in der Nähe und **schwimme am Rand entlang**. Bleib nah an erreichbaren Ausstiegen."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "swimming",
        "open-world"
      ]
    }
  },
  {
    "id": "boss-opening-window",
    "moodIds": [
      "challenge",
      "focused"
    ],
    "type": "challenge",
    "tags": [
      "boss",
      "three-attempts"
    ],
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 20,
    "translations": {
      "en": {
        "name": "After the Dodge",
        "objective": "Open a **game with repeatable boss fights**. Choose a solo boss you have reached. **Hit just after dodging one familiar attack**. Beat the boss or stop after three attempts.",
        "gameObjective": "Open **{{game}}**. Choose a solo boss you have reached. **Hit just after dodging one familiar attack**. Beat the boss or stop after three attempts."
      },
      "de": {
        "name": "Nach dem Ausweichen",
        "objective": "Starte ein **Spiel mit wiederholbaren Bosskämpfen**. Wähle einen bereits erreichten Solo-Boss. Weiche einem Angriff aus, den du schon kennst, und **triff den Boss direkt danach**. Besiege den Boss oder hör nach drei Versuchen auf.",
        "gameObjective": "Starte **{{game}}**. Wähle einen bereits erreichten Solo-Boss. Weiche einem Angriff aus, den du schon kennst, und **triff den Boss direkt danach**. Besiege den Boss oder hör nach drei Versuchen auf."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "boss-fights"
      ]
    }
  },
  {
    "id": "boss-comeback-session",
    "moodIds": [
      "challenge"
    ],
    "type": "inspiration",
    "tags": [
      "boss",
      "replay"
    ],
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 20,
    "translations": {
      "en": {
        "name": "The Rematch",
        "objective": "Open a **game with repeatable boss fights**. Return to an available boss that once gave you trouble. **Try the rematch with your current gear and skills**. Stop between attempts whenever you like.",
        "gameObjective": "Open **{{game}}**. Return to an available boss that once gave you trouble. **Try the rematch with your current gear and skills**. Stop between attempts whenever you like."
      },
      "de": {
        "name": "Das Wiedersehen",
        "objective": "Starte ein **Spiel mit wiederholbaren Bosskämpfen**. Kehre zu einem verfügbaren Boss zurück, der dir früher Probleme machte. **Stell dich ihm noch einmal mit deiner jetzigen Ausrüstung und Erfahrung**. Hör zwischen Versuchen auf, wann du möchtest.",
        "gameObjective": "Starte **{{game}}**. Kehre zu einem verfügbaren Boss zurück, der dir früher Probleme machte. **Stell dich ihm noch einmal mit deiner jetzigen Ausrüstung und Erfahrung**. Hör zwischen Versuchen auf, wann du möchtest."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "boss-fights"
      ]
    }
  },
  {
    "id": "stealth-second-passage",
    "moodIds": [
      "explore",
      "curious"
    ],
    "type": "experiment",
    "tags": [
      "stealth",
      "no-detection"
    ],
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Another Way Past",
        "objective": "Open a **game with patrolling guards**. In a replayable solo area, revisit a familiar patrol. **Sneak past unseen by a different route**.",
        "gameObjective": "Open **{{game}}**. In a replayable solo area, revisit a familiar patrol. **Sneak past unseen by a different route**."
      },
      "de": {
        "name": "Anders vorbeikommen",
        "objective": "Starte ein **Spiel mit patrouillierenden Wachen**. Besuche in einem wiederholbaren Solo-Bereich eine bekannte Patrouille. **Schleiche auf einem anderen Weg ungesehen vorbei**.",
        "gameObjective": "Starte **{{game}}**. Besuche in einem wiederholbaren Solo-Bereich eine bekannte Patrouille. **Schleiche auf einem anderen Weg ungesehen vorbei**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "stealth"
      ]
    }
  },
  {
    "id": "stealth-familiar-ground",
    "moodIds": [
      "nostalgic"
    ],
    "type": "inspiration",
    "tags": [
      "stealth",
      "replay"
    ],
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Old Hiding Places",
        "objective": "Open a **stealth game**. Return to a guarded area you remember. **Revisit your old hiding places and patrol gaps**. Let the route come back as you play.",
        "gameObjective": "Open **{{game}}**. Return to a guarded area you remember. **Revisit your old hiding places and patrol gaps**. Let the route come back as you play."
      },
      "de": {
        "name": "Alte Verstecke",
        "objective": "Starte ein **Schleichspiel**. Kehre in einen bewachten Bereich zurück, den du kennst. **Schleich an den Wachen vorbei und nutze dabei deine alten Verstecke**. Schau, an welche Wege du dich noch erinnerst.",
        "gameObjective": "Starte **{{game}}**. Kehre in einen bewachten Bereich zurück, den du kennst. **Schleich an den Wachen vorbei und nutze dabei deine alten Verstecke**. Schau, an welche Wege du dich noch erinnerst."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "stealth"
      ]
    }
  },
  {
    "id": "puzzle-use-the-hint",
    "moodIds": [
      "curious",
      "progress"
    ],
    "type": "objective",
    "tags": [
      "puzzles"
    ],
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Put the Hint to Work",
        "objective": "Open a **puzzle game with hints**. Read one hint for an unfinished puzzle and **use it to solve the puzzle**. Take more hints if needed.",
        "gameObjective": "Open **{{game}}**. Read one hint for an unfinished puzzle and **use it to solve the puzzle**. Take more hints if needed."
      },
      "de": {
        "name": "Den Hinweis nutzen",
        "objective": "Starte ein **Rätselspiel mit Hinweisen**. Lies einen Hinweis zu einem offenen Rätsel und **nutze ihn zum Lösen**. Weitere Hinweise sind erlaubt.",
        "gameObjective": "Starte **{{game}}**. Lies einen Hinweis zu einem offenen Rätsel und **nutze ihn zum Lösen**. Weitere Hinweise sind erlaubt."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "puzzles"
      ]
    }
  },
  {
    "id": "puzzle-familiar-rules",
    "moodIds": [
      "low-energy",
      "relax"
    ],
    "type": "inspiration",
    "tags": [
      "puzzles"
    ],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Rules You Know",
        "objective": "Open a **puzzle game**. Choose familiar rules and a comfortable difficulty. **Settle into solving**, using hints and undo freely. No puzzle count to reach.",
        "gameObjective": "Open **{{game}}**. Choose familiar rules and a comfortable difficulty. **Settle into solving**, using hints and undo freely. No puzzle count to reach."
      },
      "de": {
        "name": "Bekannte Regeln",
        "objective": "Starte ein **Rätselspiel**. Wähle vertraute Regeln und eine angenehme Schwierigkeit. **Löse Rätsel in deinem Tempo**. Nutze Hinweise und Rückgängig, wann du willst. Du musst keine bestimmte Anzahl schaffen.",
        "gameObjective": "Starte **{{game}}**. Wähle vertraute Regeln und eine angenehme Schwierigkeit. **Löse Rätsel in deinem Tempo**. Nutze Hinweise und Rückgängig, wann du willst. Du musst keine bestimmte Anzahl schaffen."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "puzzles"
      ]
    }
  },
  {
    "id": "build-a-landmark",
    "moodIds": [
      "create",
      "progress"
    ],
    "type": "creation",
    "tags": [
      "building"
    ],
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 20,
    "translations": {
      "en": {
        "name": "Your Waymarker",
        "objective": "Open a **game with free building**. Use owned materials to **build a marker beside a familiar path**. Walk down the path to check its visibility, then save.",
        "gameObjective": "Open **{{game}}**. Use owned materials to **build a marker beside a familiar path**. Walk down the path to check its visibility, then save."
      },
      "de": {
        "name": "Dein Wegzeichen",
        "objective": "Starte ein **Spiel mit freiem Bauen**. Baue mit vorhandenen Materialien **ein Wegzeichen an einem vertrauten Pfad**. Geh den Pfad entlang, prüfe die Sichtbarkeit und speichere.",
        "gameObjective": "Starte **{{game}}**. Baue mit vorhandenen Materialien **ein Wegzeichen an einem vertrauten Pfad**. Geh den Pfad entlang, prüfe die Sichtbarkeit und speichere."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "building"
      ]
    }
  },
  {
    "id": "build-doorway-view",
    "moodIds": [
      "create",
      "curious"
    ],
    "type": "experiment",
    "tags": [
      "building",
      "new-approach"
    ],
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Frame the View",
        "objective": "Open a **game with free building**. Frame a nearby view with a doorway or window. Look through it, move the frame once, and **compare both views in gameplay**.",
        "gameObjective": "Open **{{game}}**. Frame a nearby view with a doorway or window. Look through it, move the frame once, and **compare both views in gameplay**."
      },
      "de": {
        "name": "Die Aussicht rahmen",
        "objective": "Starte ein **Spiel mit freiem Bauen**. Rahme eine nahe Aussicht mit einer Tür oder einem Fenster. Schau hindurch, versetze den Rahmen einmal und **vergleiche beide Aussichten im Spiel**.",
        "gameObjective": "Starte **{{game}}**. Rahme eine nahe Aussicht mit einer Tür oder einem Fenster. Schau hindurch, versetze den Rahmen einmal und **vergleiche beide Aussichten im Spiel**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "building"
      ]
    }
  },
  {
    "id": "craft-and-use-tool",
    "moodIds": [
      "progress",
      "focused"
    ],
    "type": "objective",
    "tags": [
      "crafting"
    ],
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Made for a Job",
        "objective": "Open a **game with craftable tools or consumables**. Choose an unlocked recipe with owned materials and a use nearby. **Craft the item and use it once**.",
        "gameObjective": "Open **{{game}}**. Choose an unlocked recipe with owned materials and a use nearby. **Craft the item and use it once**."
      },
      "de": {
        "name": "Für einen Zweck",
        "objective": "Starte ein **Spiel mit herstellbaren Werkzeugen oder Verbrauchsitems**. Wähle ein Rezept für ein Werkzeug oder Verbrauchsitem, das du gleich in der Nähe brauchen kannst. **Stell es aus deinen Vorräten her und setz es einmal ein**.",
        "gameObjective": "Starte **{{game}}**. Wähle ein Rezept für ein Werkzeug oder Verbrauchsitem, das du gleich in der Nähe brauchen kannst. **Stell es aus deinen Vorräten her und setz es einmal ein**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "crafting"
      ]
    }
  },
  {
    "id": "crafting-bench-session",
    "moodIds": [
      "create"
    ],
    "type": "inspiration",
    "tags": [
      "crafting"
    ],
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "At the Workbench",
        "objective": "Open a **game with crafting**. Browse recipes using materials already in storage. **Let your supplies guide what you make** for the way you like to play.",
        "gameObjective": "Open **{{game}}**. Browse recipes using materials already in storage. **Let your supplies guide what you make** for the way you like to play."
      },
      "de": {
        "name": "An der Werkbank",
        "objective": "Starte ein **Spiel mit Crafting**. Schau dir Rezepte mit bereits vorhandenen Materialien an. **Stell etwas her, das du mit deinen Vorräten bauen kannst** und das zu deiner Spielweise passt.",
        "gameObjective": "Starte **{{game}}**. Schau dir Rezepte mit bereits vorhandenen Materialien an. **Stell etwas her, das du mit deinen Vorräten bauen kannst** und das zu deiner Spielweise passt."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "crafting"
      ]
    }
  },
  {
    "id": "fish-at-home",
    "moodIds": [
      "nostalgic",
      "relax"
    ],
    "type": "inspiration",
    "tags": [
      "fishing",
      "replay"
    ],
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Your Fishing Spot",
        "objective": "Open a **game with fishing**. Return to a fishing spot you remember. **Cast with your usual rod and bait** and take the catches as they come.",
        "gameObjective": "Open **{{game}}**. Return to a fishing spot you remember. **Cast with your usual rod and bait** and take the catches as they come."
      },
      "de": {
        "name": "Dein Angelplatz",
        "objective": "Starte ein **Spiel mit Angeln**. Kehre zu deinem vertrauten Angelplatz zurück und **wirf mit deiner üblichen Angel und deinem Köder aus**. Du musst keine bestimmte Fischart fangen.",
        "gameObjective": "Starte **{{game}}**. Kehre zu deinem vertrauten Angelplatz zurück und **wirf mit deiner üblichen Angel und deinem Köder aus**. Du musst keine bestimmte Fischart fangen."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "fishing"
      ]
    }
  },
  {
    "id": "fish-change-bait",
    "moodIds": [
      "curious",
      "focused"
    ],
    "type": "experiment",
    "tags": [
      "fishing",
      "new-approach"
    ],
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Two Baits",
        "objective": "Open a **fishing game with selectable bait**. At one spot, cast once with your usual bait and once with another owned bait. **Compare both casts**, even if nothing bites.",
        "gameObjective": "Open **{{game}}**. At one spot, cast once with your usual bait and once with another owned bait. **Compare both casts**, even if nothing bites."
      },
      "de": {
        "name": "Zwei Köder",
        "objective": "Starte ein **Angelspiel mit wählbaren Ködern**. Wirf an einem Ort einmal mit deinem üblichen und einmal mit einem anderen vorhandenen Köder aus. **Vergleiche beide Würfe**, auch wenn nichts anbeißt.",
        "gameObjective": "Starte **{{game}}**. Wirf an einem Ort einmal mit deinem üblichen und einmal mit einem anderen vorhandenen Köder aus. **Vergleiche beide Würfe**, auch wenn nichts anbeißt."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "fishing"
      ]
    }
  },
  {
    "id": "cook-for-the-road",
    "moodIds": [
      "progress",
      "focused"
    ],
    "type": "objective",
    "tags": [
      "cooking"
    ],
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Food for the Road",
        "objective": "Open a **game with cooking**. Use a known recipe and owned ingredients to **cook one edible portion**. Eat it during play when its effect helps.",
        "gameObjective": "Open **{{game}}**. Use a known recipe and owned ingredients to **cook one edible portion**. Eat it during play when its effect helps."
      },
      "de": {
        "name": "Proviant",
        "objective": "Starte ein **Spiel mit Kochen**. Koch aus vorhandenen Zutaten **eine Portion Proviant nach einem Rezept, das du kennst**. Iss sie unterwegs, wenn du ihre Wirkung gebrauchen kannst.",
        "gameObjective": "Starte **{{game}}**. Koch aus vorhandenen Zutaten **eine Portion Proviant nach einem Rezept, das du kennst**. Iss sie unterwegs, wenn du ihre Wirkung gebrauchen kannst."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "cooking"
      ]
    }
  },
  {
    "id": "favorite-dish-session",
    "moodIds": [
      "relax",
      "nostalgic"
    ],
    "type": "inspiration",
    "tags": [
      "cooking",
      "replay"
    ],
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Back in the Kitchen",
        "objective": "Open a **game with cooking**. Return to a familiar kitchen with ingredients already on hand. **Make old favorite dishes** without searching for new recipes.",
        "gameObjective": "Open **{{game}}**. Return to a familiar kitchen with ingredients already on hand. **Make old favorite dishes** without searching for new recipes."
      },
      "de": {
        "name": "Zurück in die Küche",
        "objective": "Starte ein **Spiel mit Kochen**. Kehre mit vorhandenen Zutaten in eine vertraute Küche zurück. **Koche Gerichte, die du früher gern gemacht hast**, ohne nach neuen Rezepten zu suchen.",
        "gameObjective": "Starte **{{game}}**. Kehre mit vorhandenen Zutaten in eine vertraute Küche zurück. **Koche Gerichte, die du früher gern gemacht hast**, ohne nach neuen Rezepten zu suchen."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "cooking"
      ]
    }
  },
  {
    "id": "plant-a-small-row",
    "moodIds": [
      "progress",
      "overwhelmed"
    ],
    "type": "objective",
    "tags": [
      "farming"
    ],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "translations": {
      "en": {
        "name": "One New Row",
        "objective": "Open a **game with crop planting**. Use owned seeds to **plant one small row**. Water it if needed. Leave the harvest for another session.",
        "gameObjective": "Open **{{game}}**. Use owned seeds to **plant one small row**. Water it if needed. Leave the harvest for another session."
      },
      "de": {
        "name": "Eine neue Reihe",
        "objective": "Starte ein **Spiel mit anbaubaren Nutzpflanzen**. Nutze vorhandene Samen und **bepflanze eine kleine Reihe**. Gieße bei Bedarf. Die Ernte kommt in einer anderen Session.",
        "gameObjective": "Starte **{{game}}**. Nutze vorhandene Samen und **bepflanze eine kleine Reihe**. Gieße bei Bedarf. Die Ernte kommt in einer anderen Session."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "grow-crops"
      ]
    }
  },
  {
    "id": "garden-pattern",
    "moodIds": [
      "create",
      "focused"
    ],
    "type": "creation",
    "tags": [
      "farming"
    ],
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Plant a Pattern",
        "objective": "Open a **game with crop planting**. Use owned seeds to **plant two crops in alternating rows or patches**. Tend them as needed and save the layout without waiting for growth.",
        "gameObjective": "Open **{{game}}**. Use owned seeds to **plant two crops in alternating rows or patches**. Tend them as needed and save the layout without waiting for growth."
      },
      "de": {
        "name": "Ein Muster pflanzen",
        "objective": "Starte ein **Spiel mit anbaubaren Nutzpflanzen**. Pflanze mit vorhandenen Samen **zwei Sorten in abwechselnden Reihen oder Beeten**. Versorge sie nach Bedarf und speichere die Anordnung, ohne auf Wachstum zu warten.",
        "gameObjective": "Starte **{{game}}**. Pflanze mit vorhandenen Samen **zwei Sorten in abwechselnden Reihen oder Beeten**. Versorge sie nach Bedarf und speichere die Anordnung, ohne auf Wachstum zu warten."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "grow-crops"
      ]
    }
  },
  {
    "id": "animals-off-the-clock",
    "moodIds": [
      "relax",
      "low-energy"
    ],
    "type": "inspiration",
    "tags": [
      "animals"
    ],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Around the Animals",
        "objective": "Open a **game with animals in your care**. Visit your settled animals and **take care of their everyday needs**. Enjoy their company without expanding or adopting more.",
        "gameObjective": "Open **{{game}}**. Visit your settled animals and **take care of their everyday needs**. Enjoy their company without expanding or adopting more."
      },
      "de": {
        "name": "Bei den Tieren",
        "objective": "Starte ein **Spiel mit Tieren in deiner Obhut**. Besuche deine Tiere und **kümmere dich um ihre Alltagsbedürfnisse**. Verbringe Zeit bei ihnen, ohne auszubauen oder neue Tiere aufzunehmen.",
        "gameObjective": "Starte **{{game}}**. Besuche deine Tiere und **kümmere dich um ihre Alltagsbedürfnisse**. Verbringe Zeit bei ihnen, ohne auszubauen oder neue Tiere aufzunehmen."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "animal-care"
      ]
    }
  },
  {
    "id": "drive-a-familiar-district",
    "moodIds": [
      "nostalgic",
      "relax"
    ],
    "type": "inspiration",
    "tags": [
      "driving",
      "replay"
    ],
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "The Old Neighborhood",
        "objective": "Open a **game with free driving**. Take an old favorite vehicle to a familiar district or road. **Drive the old routes again** and follow the turns you remember.",
        "gameObjective": "Open **{{game}}**. Take an old favorite vehicle to a familiar district or road. **Drive the old routes again** and follow the turns you remember."
      },
      "de": {
        "name": "Die alte Gegend",
        "objective": "Starte ein **Spiel mit freien Autofahrten**. Fahre mit einem Lieblingsfahrzeug von früher in eine vertraute Gegend. **Fahr noch einmal deine Wege von damals** und folge bekannten Abzweigungen.",
        "gameObjective": "Starte **{{game}}**. Fahre mit einem Lieblingsfahrzeug von früher in eine vertraute Gegend. **Fahr noch einmal deine Wege von damals** und folge bekannten Abzweigungen."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "free-driving"
      ]
    }
  },
  {
    "id": "drive-with-landmarks",
    "moodIds": [
      "explore",
      "focused"
    ],
    "type": "objective",
    "tags": [
      "driving",
      "exploration"
    ],
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "By Landmarks",
        "objective": "Open a **game with free driving**. Choose two nearby places visible from the road. **Drive between them without a navigation waypoint**. Find your way back from any wrong turns.",
        "gameObjective": "Open **{{game}}**. Choose two nearby places visible from the road. **Drive between them without a navigation waypoint**. Find your way back from any wrong turns."
      },
      "de": {
        "name": "Nach Orientierungspunkten",
        "objective": "Starte ein **Spiel mit freien Autofahrten**. Such dir zwei Orte in der Nähe, die du von der Straße erkennen kannst. **Fahr ohne Wegpunkt von einem zum anderen**. Wenn du falsch abbiegst, find selbst zurück.",
        "gameObjective": "Starte **{{game}}**. Such dir zwei Orte in der Nähe, die du von der Straße erkennen kannst. **Fahr ohne Wegpunkt von einem zum anderen**. Wenn du falsch abbiegst, find selbst zurück."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "free-driving"
      ]
    }
  },
  {
    "id": "race-another-car",
    "moodIds": [
      "curious"
    ],
    "type": "experiment",
    "tags": [
      "racing",
      "new-approach"
    ],
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Another Car",
        "objective": "Open a **racing game with selectable vehicles**. Take a rarely used, unlocked vehicle to a familiar solo or CPU race. **Finish and compare your braking points**. Leave the tuning unchanged.",
        "gameObjective": "Open **{{game}}**. Take a rarely used, unlocked vehicle to a familiar solo or CPU race. **Finish and compare your braking points**. Leave the tuning unchanged."
      },
      "de": {
        "name": "Ein anderer Wagen",
        "objective": "Starte ein **Rennspiel mit wählbaren Fahrzeugen**. Nimm ein selten genutztes, freigeschaltetes Fahrzeug in ein vertrautes Solo- oder CPU-Rennen. **Beende es und vergleiche deine Bremspunkte**. Lass das Tuning gleich.",
        "gameObjective": "Starte **{{game}}**. Nimm ein selten genutztes, freigeschaltetes Fahrzeug in ein vertrautes Solo- oder CPU-Rennen. **Beende es und vergleiche deine Bremspunkte**. Lass das Tuning gleich."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "racing"
      ]
    }
  },
  {
    "id": "race-from-the-back",
    "moodIds": [
      "challenge",
      "restless"
    ],
    "type": "challenge",
    "tags": [
      "racing",
      "vs-bots",
      "three-attempts"
    ],
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 20,
    "translations": {
      "en": {
        "name": "Make Up Ground",
        "objective": "Open a **racing game with CPU races**. Choose a CPU race with selectable starting positions. Start last in your usual car and **finish at least one place higher**. Stop after success or three races.",
        "gameObjective": "Open **{{game}}**. Choose a CPU race with selectable starting positions. Start last in your usual car and **finish at least one place higher**. Stop after success or three races."
      },
      "de": {
        "name": "Plätze gutmachen",
        "objective": "Starte ein **Rennspiel mit CPU-Rennen**. Wähle ein CPU-Rennen mit wählbaren Startplätzen. Starte mit deinem üblichen Wagen als Letzter und **beende es mindestens einen Platz weiter vorn**. Nach Erfolg oder drei Rennen ist Schluss.",
        "gameObjective": "Starte **{{game}}**. Wähle ein CPU-Rennen mit wählbaren Startplätzen. Starte mit deinem üblichen Wagen als Letzter und **beende es mindestens einen Platz weiter vorn**. Nach Erfolg oder drei Rennen ist Schluss."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "racing"
      ]
    }
  },
  {
    "id": "movement-find-a-flow",
    "moodIds": [
      "restless"
    ],
    "type": "inspiration",
    "tags": [
      "traversal"
    ],
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Keep the Flow",
        "objective": "Open a **game with climbing or movement abilities**. Visit an area suited to a move you enjoy. **Chain routes around that move** and follow the terrain instead of missions.",
        "gameObjective": "Open **{{game}}**. Visit an area suited to a move you enjoy. **Chain routes around that move** and follow the terrain instead of missions."
      },
      "de": {
        "name": "Im Bewegungsfluss",
        "objective": "Starte ein **Spiel mit Klettern oder Bewegungsfähigkeiten**. Geh an einen Ort, an dem du deine Lieblingsbewegung gut einsetzen kannst. **Beweg dich damit von einem Weg zum nächsten** und schau, wohin du kommst.",
        "gameObjective": "Starte **{{game}}**. Geh an einen Ort, an dem du deine Lieblingsbewegung gut einsetzen kannst. **Beweg dich damit von einem Weg zum nächsten** und schau, wohin du kommst."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "advanced-traversal"
      ]
    }
  },
  {
    "id": "movement-two-approaches",
    "moodIds": [
      "curious",
      "focused"
    ],
    "type": "experiment",
    "tags": [
      "traversal",
      "new-approach"
    ],
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Two Ways Up",
        "objective": "Open a **game with climbing or movement abilities**. Pick a ledge you can safely revisit. **Reach it by two different routes or moves** and compare the approaches.",
        "gameObjective": "Open **{{game}}**. Pick a ledge you can safely revisit. **Reach it by two different routes or moves** and compare the approaches."
      },
      "de": {
        "name": "Zwei Wege hinauf",
        "objective": "Starte ein **Spiel mit Klettern oder Bewegungsfähigkeiten**. Wähle einen sicher wiederholt erreichbaren Vorsprung. **Finde zwei verschiedene Wege oder Bewegungen, mit denen du ihn erreichst** und vergleiche beide.",
        "gameObjective": "Starte **{{game}}**. Wähle einen sicher wiederholt erreichbaren Vorsprung. **Finde zwei verschiedene Wege oder Bewegungen, mit denen du ihn erreichst** und vergleiche beide."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "advanced-traversal"
      ]
    }
  },
  {
    "id": "outfit-start-with-one",
    "moodIds": [
      "create",
      "overwhelmed"
    ],
    "type": "inspiration",
    "tags": [
      "outfit"
    ],
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "One Favorite Piece",
        "objective": "Open a **game with appearance customization**. Choose a cosmetic item you enjoy wearing. **Build a look around it** using only items you own.",
        "gameObjective": "Open **{{game}}**. Choose a cosmetic item you enjoy wearing. **Build a look around it** using only items you own."
      },
      "de": {
        "name": "Ein Lieblingsstück",
        "objective": "Starte ein **Spiel mit anpassbarem Aussehen**. Wähle ein Kosmetikitem, das du gern trägst. **Stelle einen Look darum zusammen**, nur mit vorhandenen Items.",
        "gameObjective": "Starte **{{game}}**. Wähle ein Kosmetikitem, das du gern trägst. **Stelle einen Look darum zusammen**, nur mit vorhandenen Items."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "customization"
      ]
    }
  },
  {
    "id": "outfit-for-the-place",
    "moodIds": [
      "create",
      "focused"
    ],
    "type": "creation",
    "tags": [
      "outfit"
    ],
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Dress for the Place",
        "objective": "Open a **game with appearance customization**. Use owned cosmetics to **make a look for a reachable place**. Equip it and play there.",
        "gameObjective": "Open **{{game}}**. Use owned cosmetics to **make a look for a reachable place**. Equip it and play there."
      },
      "de": {
        "name": "Passend zum Ort",
        "objective": "Starte ein **Spiel mit anpassbarem Aussehen**. Gestalte mit vorhandenen Kosmetikitems **einen Look für einen erreichbaren Ort**. Rüste ihn aus und spiele dort.",
        "gameObjective": "Starte **{{game}}**. Gestalte mit vorhandenen Kosmetikitems **einen Look für einen erreichbaren Ort**. Rüste ihn aus und spiele dort."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "customization"
      ]
    }
  },
  {
    "id": "photo-one-subject-two-moods",
    "moodIds": [
      "create",
      "curious"
    ],
    "type": "experiment",
    "tags": [
      "photography",
      "new-approach"
    ],
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Change the Mood",
        "objective": "Open a **game with photo mode**. Save a photo of one nearby subject. Change only the angle or lighting and **save a second photo with a different mood**.",
        "gameObjective": "Open **{{game}}**. Save a photo of one nearby subject. Change only the angle or lighting and **save a second photo with a different mood**."
      },
      "de": {
        "name": "Andere Stimmung",
        "objective": "Starte ein **Spiel mit Fotomodus**. Speichere ein Foto eines nahen Motivs. Ändere nur Winkel oder Licht und **speichere ein zweites Bild mit anderer Stimmung**.",
        "gameObjective": "Starte **{{game}}**. Speichere ein Foto eines nahen Motivs. Ändere nur Winkel oder Licht und **speichere ein zweites Bild mit anderer Stimmung**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "photo-mode"
      ]
    }
  },
  {
    "id": "photo-favorite-place",
    "moodIds": [
      "nostalgic"
    ],
    "type": "objective",
    "tags": [
      "photography",
      "replay"
    ],
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "A Place You Remember",
        "objective": "Open a **game with photo mode**. Return to a place from earlier in your playthrough. **Photograph the detail you remember most** and save the picture.",
        "gameObjective": "Open **{{game}}**. Return to a place from earlier in your playthrough. **Photograph the detail you remember most** and save the picture."
      },
      "de": {
        "name": "Ein vertrauter Ort",
        "objective": "Starte ein **Spiel mit Fotomodus**. Kehre an einen Ort aus einem früheren Spielabschnitt zurück. **Fotografiere dein einprägsamstes Detail** und speichere das Bild.",
        "gameObjective": "Starte **{{game}}**. Kehre an einen Ort aus einem früheren Spielabschnitt zurück. **Fotografiere dein einprägsamstes Detail** und speichere das Bild."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "photo-mode"
      ]
    }
  },
  {
    "id": "team-regular-role",
    "moodIds": [
      "connect",
      "overwhelmed"
    ],
    "type": "inspiration",
    "tags": [
      "co-op"
    ],
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 30,
    "translations": {
      "en": {
        "name": "Your Usual Role",
        "objective": "Open an **online team game**. Take your usual role in a familiar mode and **enjoy playing alongside the team**. Finish each match before deciding whether to continue.",
        "gameObjective": "Open **{{game}}**. Take your usual role in a familiar mode and **enjoy playing alongside the team**. Finish each match before deciding whether to continue."
      },
      "de": {
        "name": "Deine vertraute Rolle",
        "objective": "Starte ein **Online-Teamspiel**. Übernimm deine übliche Rolle in einem Modus, den du kennst, und **spiel ein Match gemeinsam mit deinem Team zu Ende**. Ein zusätzliches Punkteziel brauchst du nicht.",
        "gameObjective": "Starte **{{game}}**. Übernimm deine übliche Rolle in einem Modus, den du kennst, und **spiel ein Match gemeinsam mit deinem Team zu Ende**. Ein zusätzliches Punkteziel brauchst du nicht."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "online-teamplay"
      ]
    }
  },
  {
    "id": "couch-pick-for-each-other",
    "moodIds": [
      "connect",
      "curious"
    ],
    "type": "objective",
    "tags": [
      "local-play"
    ],
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "You Pick",
        "objective": "Open a **local game with short turns**. With someone beside you, choose each other’s available character, course, or scenario. **Play one full turn each with those choices**.",
        "gameObjective": "Open **{{game}}**. With someone beside you, choose each other’s available character, course, or scenario. **Play one full turn each with those choices**."
      },
      "de": {
        "name": "Du wählst",
        "objective": "Starte ein **lokales Spiel mit kurzen Zügen**. Wählt mit jemandem vor Ort gegenseitig eine verfügbare Figur, Strecke oder ein Szenario. **Spielt damit je einen vollständigen Zug**.",
        "gameObjective": "Starte **{{game}}**. Wählt mit jemandem vor Ort gegenseitig eine verfügbare Figur, Strecke oder ein Szenario. **Spielt damit je einen vollständigen Zug**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "local-multiplayer"
      ]
    }
  },
  {
    "id": "couch-old-rivalry",
    "moodIds": [
      "connect",
      "nostalgic"
    ],
    "type": "inspiration",
    "tags": [
      "local-play",
      "replay"
    ],
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 20,
    "translations": {
      "en": {
        "name": "The Old Rivalry",
        "objective": "Open a **local multiplayer game**. With an old gaming partner beside you, return to your shared mode. **Trade turns and revive the old rivalry**. Talk between rounds.",
        "gameObjective": "Open **{{game}}**. With an old gaming partner beside you, return to your shared mode. **Trade turns and revive the old rivalry**. Talk between rounds."
      },
      "de": {
        "name": "Die alte Rivalität",
        "objective": "Starte ein **lokales Mehrspielerspiel**. Spielt vor Ort noch einmal den Modus, den ihr früher zusammen gespielt habt. **Wechselt euch ab und beendet ein paar Runden**. Erzählt euch zwischendurch von damals.",
        "gameObjective": "Starte **{{game}}**. Spielt vor Ort noch einmal den Modus, den ihr früher zusammen gespielt habt. **Wechselt euch ab und beendet ein paar Runden**. Erzählt euch zwischendurch von damals."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "local-multiplayer"
      ]
    }
  },
  {
    "id": "collectible-new-corner",
    "moodIds": [
      "explore",
      "progress"
    ],
    "type": "objective",
    "tags": [
      "collectibles",
      "exploration"
    ],
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 20,
    "translations": {
      "en": {
        "name": "One Unvisited Corner",
        "objective": "Open a **freely explorable game with collectibles**. Pick a nearby area with gaps in its collection. Check its side paths and **find one new tracked item**.",
        "gameObjective": "Open **{{game}}**. Pick a nearby area with gaps in its collection. Check its side paths and **find one new tracked item**."
      },
      "de": {
        "name": "Eine neue Ecke",
        "objective": "Starte ein **frei erkundbares Spiel mit Sammelobjekten**. Wähle ein nahes Gebiet mit Lücken in seiner Sammlung. Suche an Seitenwegen und **finde ein Sammelobjekt, das dir noch fehlt**.",
        "gameObjective": "Starte **{{game}}**. Wähle ein nahes Gebiet mit Lücken in seiner Sammlung. Suche an Seitenwegen und **finde ein Sammelobjekt, das dir noch fehlt**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "collectibles",
        "open-world"
      ]
    }
  },
  {
    "id": "collection-on-the-way",
    "moodIds": [
      "relax"
    ],
    "type": "inspiration",
    "tags": [
      "collectibles"
    ],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Along the Way",
        "objective": "Open a **game with collectibles**. Play a familiar, forgiving area and **collect what you pass along the way**. Missed items can stay missed today.",
        "gameObjective": "Open **{{game}}**. Play a familiar, forgiving area and **collect what you pass along the way**. Missed items can stay missed today."
      },
      "de": {
        "name": "Am Wegesrand",
        "objective": "Starte ein **Spiel mit Sammelobjekten**. Spiel einen leichten Abschnitt, den du gut kennst, und **nimm die Sammelobjekte mit, die dir unterwegs begegnen**. Verpasste Items bleiben heute liegen.",
        "gameObjective": "Starte **{{game}}**. Spiel einen leichten Abschnitt, den du gut kennst, und **nimm die Sammelobjekte mit, die dir unterwegs begegnen**. Verpasste Items bleiben heute liegen."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "collectibles"
      ]
    }
  },
  {
    "id": "story-revisit-a-voice",
    "moodIds": [
      "nostalgic",
      "low-energy"
    ],
    "type": "inspiration",
    "tags": [
      "story",
      "replay"
    ],
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "A Familiar Voice",
        "objective": "Open a **game with replayable dialogue or story entries**. Revisit an old character or story thread. **Read or listen for forgotten details** without chasing the next objective.",
        "gameObjective": "Open **{{game}}**. Revisit an old character or story thread. **Read or listen for forgotten details** without chasing the next objective."
      },
      "de": {
        "name": "Eine vertraute Stimme",
        "objective": "Starte ein **Spiel mit wiederholbaren Dialogen oder Storyeinträgen**. Besuche eine Figur oder einen Erzählstrang von früher wieder. **Achte auf Details, die du vergessen hast**, ohne das nächste Ziel zu verfolgen.",
        "gameObjective": "Starte **{{game}}**. Besuche eine Figur oder einen Erzählstrang von früher wieder. **Achte auf Details, die du vergessen hast**, ohne das nächste Ziel zu verfolgen."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "choices-or-lore"
      ]
    }
  },
  {
    "id": "dialogue-follow-a-topic",
    "moodIds": [
      "curious",
      "explore"
    ],
    "type": "objective",
    "tags": [
      "dialogue"
    ],
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 10,
    "translations": {
      "en": {
        "name": "Follow the Topic",
        "objective": "Open a **game with optional dialogue**. Find an unread optional conversation topic. **Follow it through to the end**, including any available follow-up questions.",
        "gameObjective": "Open **{{game}}**. Find an unread optional conversation topic. **Follow it through to the end**, including any available follow-up questions."
      },
      "de": {
        "name": "Beim Thema bleiben",
        "objective": "Starte ein **Spiel mit optionalen Dialogen**. Such ein ungelesenes optionales Gesprächsthema. **Verfolge es bis zum Ende**, einschließlich verfügbarer Nachfragen.",
        "gameObjective": "Starte **{{game}}**. Such ein ungelesenes optionales Gesprächsthema. **Verfolge es bis zum Ende**, einschließlich verfügbarer Nachfragen."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "choices-or-lore"
      ]
    }
  },
  {
    "id": "merchant-clear-one-category",
    "moodIds": [
      "focused",
      "progress"
    ],
    "type": "objective",
    "tags": [
      "trading"
    ],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "translations": {
      "en": {
        "name": "One Shelf Clear",
        "objective": "Open a **game with merchants**. Choose one category at a merchant who buys your items. **Sell its unwanted supplies**, keeping equipment and quest items you still need.",
        "gameObjective": "Open **{{game}}**. Choose one category at a merchant who buys your items. **Sell its unwanted supplies**, keeping equipment and quest items you still need."
      },
      "de": {
        "name": "Ein Fach frei",
        "objective": "Starte ein **Spiel mit Händlern**. Wähle bei einem Händler eine Item-Kategorie, die er ankauft. **Verkaufe die Dinge aus dieser Kategorie, die du nicht mehr brauchst**. Behalte benötigte Ausrüstung und Questitems.",
        "gameObjective": "Starte **{{game}}**. Wähle bei einem Händler eine Item-Kategorie, die er ankauft. **Verkaufe die Dinge aus dieser Kategorie, die du nicht mehr brauchst**. Behalte benötigte Ausrüstung und Questitems."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "trading"
      ]
    }
  },
  {
    "id": "merchant-after-the-hunt",
    "moodIds": [
      "progress",
      "focused"
    ],
    "type": "objective",
    "tags": [
      "hunting",
      "trading"
    ],
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 25,
    "translations": {
      "en": {
        "name": "From Hunt to Market",
        "objective": "Open a **game with hunting and merchants**. Near a merchant who buys animal materials, hunt one spotted animal your gear can handle. **Collect and sell its materials**.",
        "gameObjective": "Open **{{game}}**. Near a merchant who buys animal materials, hunt one spotted animal your gear can handle. **Collect and sell its materials**."
      },
      "de": {
        "name": "Von der Jagd zum Markt",
        "objective": "Starte ein **Spiel mit Jagd und Händlern**. Such dir nahe einem Händler ein Tier, das du mit deiner Ausrüstung jagen kannst. **Erleg es, sammle die Materialien und verkauf sie**.",
        "gameObjective": "Starte **{{game}}**. Such dir nahe einem Händler ein Tier, das du mit deiner Ausrüstung jagen kannst. **Erleg es, sammle die Materialien und verkauf sie**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "hunting",
        "trading"
      ]
    }
  },
  {
    "id": "hunt-familiar-terrain",
    "moodIds": [
      "explore"
    ],
    "type": "inspiration",
    "tags": [
      "hunting",
      "exploration"
    ],
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 20,
    "translations": {
      "en": {
        "name": "Read the Terrain",
        "objective": "Open a **game with animal hunting**. Head into a hunting area you can already reach. **Look for how the terrain shelters its wildlife** and follow sightings while you play. You do not need a rare animal or a full bag.",
        "gameObjective": "In **{{game}}**: Head into a hunting area you can already reach. **Look for how the terrain shelters its wildlife** and follow sightings while you play. You do not need a rare animal or a full bag."
      },
      "de": {
        "name": "Das Gelände lesen",
        "objective": "Starte ein **Spiel mit Tierjagd**. Geh in ein bereits erreichbares Jagdgebiet. **Achte darauf, wo das Gelände Wildtieren Schutz bietet**, und folge Sichtungen beim Spielen. Seltene Tiere oder eine volle Tasche sind kein Ziel.",
        "gameObjective": "In **{{game}}**: Geh in ein bereits erreichbares Jagdgebiet. **Achte darauf, wo das Gelände Wildtieren Schutz bietet**, und folge Sichtungen beim Spielen. Seltene Tiere oder eine volle Tasche sind kein Ziel."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "hunting"
      ]
    }
  },
  {
    "id": "companion-cover-the-flank",
    "moodIds": [
      "curious",
      "focused"
    ],
    "type": "experiment",
    "tags": [
      "new-approach"
    ],
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Two Directions",
        "objective": "Open a **game with commandable animal combat companions**. In a solo encounter, send your companion toward an enemy while you approach from another direction. **Finish the fight and observe which way the enemy turned**.",
        "gameObjective": "In **{{game}}**: In a solo encounter, send your companion toward an enemy while you approach from another direction. **Finish the fight and observe which way the enemy turned**."
      },
      "de": {
        "name": "Zwei Richtungen",
        "objective": "Starte ein **Spiel mit befehligbaren Tierbegleitern im Kampf**. Schick deinen Tierbegleiter in einem Solo-Kampf von einer Seite auf einen Gegner zu und näher dich von der anderen. **Spiel den Kampf zu Ende und achte darauf, wen der Gegner angreift**.",
        "gameObjective": "In **{{game}}**: Schick deinen Tierbegleiter in einem Solo-Kampf von einer Seite auf einen Gegner zu und näher dich von der anderen. **Spiel den Kampf zu Ende und achte darauf, wen der Gegner angreift**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "animal-companions"
      ]
    }
  },
  {
    "id": "companion-usual-patrol",
    "moodIds": [
      "nostalgic"
    ],
    "type": "inspiration",
    "tags": [
      "replay"
    ],
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Your Old Companion",
        "objective": "Open a **game with an animal combat companion you have used before**. Bring that already available companion back into your party. **Return to ordinary encounters together** and use the commands you remember.",
        "gameObjective": "In **{{game}}**: Bring that already available companion back into your party. **Return to ordinary encounters together** and use the commands you remember."
      },
      "de": {
        "name": "Dein alter Begleiter",
        "objective": "Starte ein **Spiel, in dem du früher mit einem Tierbegleiter gekämpft hast**. Hol ihn zurück in dein Team und **setz ihn in normalen Kämpfen ein**. Nutze die Befehle, die du noch kennst.",
        "gameObjective": "In **{{game}}**: Hol deinen früheren Tiergefährten zurück ins Team und **setz ihn in normalen Kämpfen ein**. Nutze die Befehle, die du noch kennst."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "animal-companions"
      ]
    }
  },
  {
    "id": "skate-find-a-spot",
    "moodIds": [
      "explore",
      "restless"
    ],
    "type": "inspiration",
    "tags": [
      "skating"
    ],
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "A Spot to Skate",
        "objective": "Open a **skating game with grinds and flip tricks**. Find a ledge, rail, or bank you have not spent much time on. **Build your skating session around that spot** and try the approaches its shape suggests.",
        "gameObjective": "In **{{game}}**: Find a ledge, rail, or bank you have not spent much time on. **Build your skating session around that spot** and try the approaches its shape suggests."
      },
      "de": {
        "name": "Ein Spot zum Skaten",
        "objective": "Starte ein **Skatespiel mit Grinds und Flip-Tricks**. Such dir eine Kante, ein Geländer oder eine Schräge, an der du selten fährst. **Bleib für diese Session dort und probier verschiedene Anfahrten und Tricks aus**.",
        "gameObjective": "In **{{game}}**: Such dir eine Kante, ein Geländer oder eine Schräge, an der du selten fährst. **Bleib für diese Session dort und probier verschiedene Anfahrten und Tricks aus**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "skate-tricks"
      ]
    }
  },
  {
    "id": "skate-two-approaches",
    "moodIds": [
      "curious",
      "focused"
    ],
    "type": "experiment",
    "tags": [
      "skating",
      "new-approach"
    ],
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Other Direction",
        "objective": "Open a **skating game with grinds**. Choose a short rail you can approach from both ends. **Land a grind from each direction**, noticing how the approach changes your entry and landing.",
        "gameObjective": "In **{{game}}**: Choose a short rail you can approach from both ends. **Land a grind from each direction**, noticing how the approach changes your entry and landing."
      },
      "de": {
        "name": "Andere Richtung",
        "objective": "Starte ein **Skatespiel mit Grinds**. Wähle ein kurzes Geländer, das du von beiden Enden anfahren kannst. **Lande aus jeder Richtung einen Grind** und achte darauf, wie sich Einstieg und Landung ändern.",
        "gameObjective": "In **{{game}}**: Wähle ein kurzes Geländer, das du von beiden Enden anfahren kannst. **Lande aus jeder Richtung einen Grind** und achte darauf, wie sich Einstieg und Landung ändern."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "skate-tricks"
      ]
    }
  },
  {
    "id": "skate-flip-into-grind",
    "moodIds": [
      "challenge",
      "restless"
    ],
    "type": "challenge",
    "tags": [
      "skating",
      "three-attempts"
    ],
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Flip to Rail",
        "objective": "Open a **skating game with grinds and flip tricks**. At a familiar low rail, **link a flip trick into a grind and roll away without falling**. Stop after success or three attempts.",
        "gameObjective": "In **{{game}}**: At a familiar low rail, **link a flip trick into a grind and roll away without falling**. Stop after success or three attempts."
      },
      "de": {
        "name": "Flip aufs Rail",
        "objective": "Starte ein **Skatespiel mit Grinds und Flip-Tricks**. Verbinde an einem vertrauten niedrigen Geländer **einen Flip-Trick mit einem Grind und rolle ohne Sturz weiter**. Nach Erfolg oder drei Versuchen ist Schluss.",
        "gameObjective": "In **{{game}}**: Verbinde an einem vertrauten niedrigen Geländer **einen Flip-Trick mit einem Grind und rolle ohne Sturz weiter**. Nach Erfolg oder drei Versuchen ist Schluss."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "skate-tricks"
      ]
    }
  },
  {
    "id": "sports-familiar-fixture",
    "moodIds": [
      "relax",
      "overwhelmed"
    ],
    "type": "inspiration",
    "tags": [
      "vs-bots"
    ],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 20,
    "translations": {
      "en": {
        "name": "A Friendly Fixture",
        "objective": "Open a **sports game with CPU opponents**. Choose a familiar team and a comfortable CPU difficulty. **Play for the rhythm of the game**, taking scoring chances as they come without requiring a win.",
        "gameObjective": "In **{{game}}**: Choose a familiar team and a comfortable CPU difficulty. **Play for the rhythm of the game**, taking scoring chances as they come without requiring a win."
      },
      "de": {
        "name": "Ein lockeres Spiel",
        "objective": "Starte ein **Sportspiel mit CPU-Gegnern**. Wähle ein vertrautes Team und einen angenehmen CPU-Schwierigkeitsgrad. **Spiel eine Partie zu Ende und nutze die Torchancen, die sich ergeben**. Ein Sieg ist nicht nötig.",
        "gameObjective": "In **{{game}}**: Wähle ein vertrautes Team und einen angenehmen CPU-Schwierigkeitsgrad. **Spiel eine Partie zu Ende und nutze die Torchancen, die sich ergeben**. Ein Sieg ist nicht nötig."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "sports-goals"
      ]
    }
  },
  {
    "id": "sports-play-the-pass",
    "moodIds": [
      "curious",
      "focused"
    ],
    "type": "experiment",
    "tags": [
      "vs-bots",
      "new-approach"
    ],
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 20,
    "translations": {
      "en": {
        "name": "Pass Before the Shot",
        "objective": "Open a **sports game with controllable teammates and CPU opponents**. In a CPU match with controllable teammates, try setting up your shots with a pass. **Complete the match after using that approach**, regardless of how many shots score.",
        "gameObjective": "In **{{game}}**: In a CPU match with controllable teammates, try setting up your shots with a pass. **Complete the match after using that approach**, regardless of how many shots score."
      },
      "de": {
        "name": "Pass vor dem Schuss",
        "objective": "Starte ein **Sportspiel mit steuerbaren Mitspielern und CPU-Gegnern**. Bereite in einer Partie gegen die CPU mindestens einen Schuss mit einem Pass vor. **Spiel das Match zu Ende**. Die Zahl der Tore ist egal.",
        "gameObjective": "In **{{game}}**: Bereite in einer Partie gegen die CPU mindestens einen Schuss mit einem Pass vor. **Spiel das Match zu Ende**. Die Zahl der Tore ist egal."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "sports-goals"
      ]
    }
  },
  {
    "id": "extract-known-route",
    "moodIds": [
      "focused",
      "progress"
    ],
    "type": "objective",
    "tags": [
      "extraction"
    ],
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 25,
    "translations": {
      "en": {
        "name": "The Route You Know",
        "objective": "Open a **game with solo extraction runs**. Start a solo run on a map with an extraction route you know. Loot along that route and **reach extraction or finish the run if you are eliminated**. Avoid extending the route for extra loot.",
        "gameObjective": "In **{{game}}**: Start a solo run on a map with an extraction route you know. Loot along that route and **reach extraction or finish the run if you are eliminated**. Avoid extending the route for extra loot."
      },
      "de": {
        "name": "Die bekannte Route",
        "objective": "Starte ein **Spiel mit Solo-Extraktionsrunden**. Geh auf einer Karte ins Spiel, deren Extraktionsweg du kennst. Plündere unterwegs und **versuch über diesen Weg zu extrahieren**. Wenn du ausscheidest, ist die Runde vorbei. Für zusätzliche Beute machst du keinen Umweg.",
        "gameObjective": "In **{{game}}**: Geh auf einer Karte ins Spiel, deren Extraktionsweg du kennst. Plündere unterwegs und **versuch über diesen Weg zu extrahieren**. Wenn du ausscheidest, ist die Runde vorbei. Für zusätzliche Beute machst du keinen Umweg."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "extraction-runs"
      ]
    }
  },
  {
    "id": "extract-branch-and-return",
    "moodIds": [
      "explore",
      "curious"
    ],
    "type": "experiment",
    "tags": [
      "extraction",
      "exploration"
    ],
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 25,
    "translations": {
      "en": {
        "name": "One Side Route",
        "objective": "Open a **game with solo extraction runs**. On a solo map you already know, try one nearby side path away from your usual loot route. **Rejoin a known route and head for extraction**. Extraction or elimination ends the run.",
        "gameObjective": "In **{{game}}**: On a solo map you already know, try one nearby side path away from your usual loot route. **Rejoin a known route and head for extraction**. Extraction or elimination ends the run."
      },
      "de": {
        "name": "Ein Seitenweg",
        "objective": "Starte ein **Spiel mit Solo-Extraktionsrunden**. Probiere auf einer bekannten Solo-Karte einen nahen Seitenweg abseits deiner üblichen Beuteroute aus. **Kehre auf einen bekannten Weg zurück und geh zur Extraktion**. Extraktion oder Ausscheiden beendet die Runde.",
        "gameObjective": "In **{{game}}**: Probiere auf einer bekannten Solo-Karte einen nahen Seitenweg abseits deiner üblichen Beuteroute aus. **Kehre auf einen bekannten Weg zurück und geh zur Extraktion**. Extraktion oder Ausscheiden beendet die Runde."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "extraction-runs"
      ]
    }
  },
  {
    "id": "platform-next-checkpoint",
    "moodIds": [
      "progress",
      "overwhelmed"
    ],
    "type": "objective",
    "tags": [
      "traversal",
      "current-save"
    ],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "translations": {
      "en": {
        "name": "The Next Checkpoint",
        "objective": "Open a **platformer with checkpoints**. On a level with checkpoints, continue from your current position and **activate the next checkpoint**. Use retries and assists if needed. Leave the rest of the level for later.",
        "gameObjective": "In **{{game}}**: On a level with checkpoints, continue from your current position and **activate the next checkpoint**. Use retries and assists if needed. Leave the rest of the level for later."
      },
      "de": {
        "name": "Der nächste Checkpoint",
        "objective": "Starte ein **Plattformer mit Checkpoints**. Mach an deiner aktuellen Stelle weiter und **erreich den nächsten Checkpoint**. Wiederholungen und Hilfen sind erlaubt. Den Rest des Levels kannst du später spielen.",
        "gameObjective": "In **{{game}}**: Mach an deiner aktuellen Stelle weiter und **erreich den nächsten Checkpoint**. Wiederholungen und Hilfen sind erlaubt. Den Rest des Levels kannst du später spielen."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "platforming"
      ],
      "genreIds": [
        "platformer"
      ]
    }
  },
  {
    "id": "platform-clean-stretch",
    "moodIds": [
      "challenge",
      "focused"
    ],
    "type": "challenge",
    "tags": [
      "traversal",
      "three-attempts"
    ],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "translations": {
      "en": {
        "name": "One Clean Stretch",
        "objective": "Open a **game with platforming obstacles**. Choose a short obstacle section you can retry. **Cross it without falling or taking damage**, or finish three attempts. Keep the same route for each attempt.",
        "gameObjective": "In **{{game}}**: Choose a short obstacle section you can retry. **Cross it without falling or taking damage**, or finish three attempts. Keep the same route for each attempt."
      },
      "de": {
        "name": "Eine saubere Passage",
        "objective": "Starte ein **Spiel mit Sprunghindernissen**. Wähle eine kurze Hindernispassage, die du wiederholen kannst. **Durchquere sie ohne Sturz oder Schaden** oder beende drei Versuche. Bleib bei jedem Versuch auf derselben Route.",
        "gameObjective": "In **{{game}}**: Wähle eine kurze Hindernispassage, die du wiederholen kannst. **Durchquere sie ohne Sturz oder Schaden** oder beende drei Versuche. Bleib bei jedem Versuch auf derselben Route."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "platforming"
      ]
    }
  },
  {
    "id": "platform-pick-a-landing",
    "moodIds": [
      "curious",
      "focused"
    ],
    "type": "experiment",
    "tags": [
      "traversal",
      "new-approach"
    ],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "translations": {
      "en": {
        "name": "Pick Your Landing",
        "objective": "Open a **game with platforming obstacles**. Choose a jump you can safely repeat. Land near one edge of the destination platform, then repeat toward its middle. **Complete both landings and compare the room left for the next jump**.",
        "gameObjective": "In **{{game}}**: Choose a jump you can safely repeat. Land near one edge of the destination platform, then repeat toward its middle. **Complete both landings and compare the room left for the next jump**."
      },
      "de": {
        "name": "Den Landepunkt wählen",
        "objective": "Starte ein **Spiel mit Sprunghindernissen**. Such dir einen Sprung, den du leicht wiederholen kannst. Lande einmal nah am Rand und einmal in der Mitte der Plattform. **Schaff beide Landungen und schau, welche dir mehr Platz für den nächsten Sprung lässt**.",
        "gameObjective": "In **{{game}}**: Such dir einen Sprung, den du leicht wiederholen kannst. Lande einmal nah am Rand und einmal in der Mitte der Plattform. **Schaff beide Landungen und schau, welche dir mehr Platz für den nächsten Sprung lässt**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "platforming"
      ]
    }
  },
  {
    "id": "platform-look-for-branch",
    "moodIds": [
      "explore",
      "curious"
    ],
    "type": "objective",
    "tags": [
      "exploration",
      "traversal"
    ],
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Off the Main Line",
        "objective": "Open a **platformer with optional paths**. In a level with optional paths, follow a reachable ledge or side passage you usually skip. **Explore it to its end and return to the main route**.",
        "gameObjective": "In **{{game}}**: In a level with optional paths, follow a reachable ledge or side passage you usually skip. **Explore it to its end and return to the main route**."
      },
      "de": {
        "name": "Neben der Hauptroute",
        "objective": "Starte ein **Plattformer mit optionalen Wegen**. Folge in einem Level mit optionalen Wegen einem erreichbaren Vorsprung oder Seitengang, den du sonst auslässt. **Erkunde ihn bis zum Ende und kehre zur Hauptroute zurück**.",
        "gameObjective": "In **{{game}}**: Folge in einem Level mit optionalen Wegen einem erreichbaren Vorsprung oder Seitengang, den du sonst auslässt. **Erkunde ihn bis zum Ende und kehre zur Hauptroute zurück**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "platforming",
        "missions-or-levels"
      ],
      "genreIds": [
        "platformer"
      ]
    }
  },
  {
    "id": "platform-familiar-rhythm",
    "moodIds": [
      "relax",
      "nostalgic"
    ],
    "type": "inspiration",
    "tags": [
      "traversal",
      "replay"
    ],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "The Rhythm Returns",
        "objective": "Open a **game with familiar platforming areas**. Return to a forgiving level or route whose jumps you remember. **Enjoy moving through familiar terrain**, using retries or assists freely and ignoring completion percentages.",
        "gameObjective": "In **{{game}}**: Return to a forgiving level or route whose jumps you remember. **Enjoy moving through familiar terrain**, using retries or assists freely and ignoring completion percentages."
      },
      "de": {
        "name": "Der Rhythmus kommt zurück",
        "objective": "Starte ein **Spiel mit vertrauten Sprungpassagen**. Kehre zu einem leichten Abschnitt zurück, dessen Sprünge du noch kennst. **Spiel ihn in deinem Tempo durch**. Hilfen und neue Versuche sind okay; die Abschlussquote ist egal.",
        "gameObjective": "In **{{game}}**: Kehre zu einem leichten Abschnitt zurück, dessen Sprünge du noch kennst. **Spiel ihn in deinem Tempo durch**. Hilfen und neue Versuche sind okay; die Abschlussquote ist egal."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "platforming"
      ]
    }
  },
  {
    "id": "platform-collect-a-detour",
    "moodIds": [
      "progress",
      "explore"
    ],
    "type": "objective",
    "tags": [
      "collectibles",
      "traversal"
    ],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "translations": {
      "en": {
        "name": "Worth the Jump",
        "objective": "Open a **game with platforming and tracked collectibles**. Choose a visible, uncollected item reached by a short jumping detour. **Collect it and return to stable ground**. Skip items that need abilities you have not unlocked.",
        "gameObjective": "In **{{game}}**: Choose a visible, uncollected item reached by a short jumping detour. **Collect it and return to stable ground**. Skip items that need abilities you have not unlocked."
      },
      "de": {
        "name": "Den Sprung wert",
        "objective": "Starte ein **Spiel mit Sprungpassagen und erfassten Sammelobjekten**. Wähle ein sichtbares, noch nicht gesammeltes Item an einem kurzen Sprungabstecher. **Sammle es und kehre auf sicheren Boden zurück**. Lass Items aus, die noch gesperrte Fähigkeiten benötigen.",
        "gameObjective": "In **{{game}}**: Wähle ein sichtbares, noch nicht gesammeltes Item an einem kurzen Sprungabstecher. **Sammle es und kehre auf sicheren Boden zurück**. Lass Items aus, die noch gesperrte Fähigkeiten benötigen."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "platforming",
        "collectibles"
      ]
    }
  },
  {
    "id": "character-one-new-tool",
    "moodIds": [
      "curious",
      "focused"
    ],
    "type": "experiment",
    "tags": [
      "abilities",
      "new-approach",
      "vs-bots"
    ],
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "One New Tool",
        "objective": "Open a **game with selectable characters and abilities**. In solo, training, or bot play, choose an unlocked character you rarely use. **Use one of their unfamiliar abilities during a complete encounter**, then notice when it was useful.",
        "gameObjective": "In **{{game}}**: In solo, training, or bot play, choose an unlocked character you rarely use. **Use one of their unfamiliar abilities during a complete encounter**, then notice when it was useful."
      },
      "de": {
        "name": "Ein neues Werkzeug",
        "objective": "Starte ein **Spiel mit auswählbaren Figuren und Fähigkeiten**. Wähle im Solo-, Trainings- oder Bot-Spiel eine freigeschaltete Figur, die du selten spielst. **Setz eine ihrer ungewohnten Fähigkeiten in einem vollständigen Kampf oder einer Runde ein** und achte darauf, wann sie dir hilft.",
        "gameObjective": "In **{{game}}**: Wähle im Solo-, Trainings- oder Bot-Spiel eine freigeschaltete Figur, die du selten spielst. **Setz eine ihrer ungewohnten Fähigkeiten in einem vollständigen Kampf oder einer Runde ein** und achte darauf, wann sie dir hilft."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "character-abilities"
      ]
    }
  },
  {
    "id": "character-build-a-sequence",
    "moodIds": [
      "create",
      "focused"
    ],
    "type": "experiment",
    "tags": [
      "abilities",
      "new-approach",
      "vs-bots"
    ],
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Your Own Sequence",
        "objective": "Open a **game with selectable character abilities**. In solo or bot play, choose two available actions or abilities your character can chain. **Use your chosen sequence during one encounter and finish it**, adjusting the timing as you play.",
        "gameObjective": "In **{{game}}**: In solo or bot play, choose two available actions or abilities your character can chain. **Use your chosen sequence during one encounter and finish it**, adjusting the timing as you play."
      },
      "de": {
        "name": "Deine eigene Abfolge",
        "objective": "Starte ein **Spiel mit wählbaren Figurenfähigkeiten**. Wähle für deine Figur zwei Aktionen oder Fähigkeiten, die zusammenpassen. **Probier die Abfolge in einem Solo- oder Bot-Kampf aus und spiel ihn zu Ende**. Pass das Timing beim Spielen an.",
        "gameObjective": "In **{{game}}**: Wähle für deine Figur zwei Aktionen oder Fähigkeiten, die zusammenpassen. **Probier die Abfolge in einem Solo- oder Bot-Kampf aus und spiel ihn zu Ende**. Pass das Timing beim Spielen an."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "character-abilities"
      ]
    }
  },
  {
    "id": "character-comfort-pick",
    "moodIds": [
      "overwhelmed",
      "low-energy"
    ],
    "type": "inspiration",
    "tags": [
      "abilities"
    ],
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 30,
    "translations": {
      "en": {
        "name": "Comfort Pick",
        "objective": "Open a **game with selectable characters and a forgiving mode**. Choose your most familiar character in a forgiving mode you already use. **Play with the abilities you know**, without comparing the whole roster or chasing a performance target. Finish each match normally.",
        "gameObjective": "In **{{game}}**: Choose your most familiar character in a forgiving mode you already use. **Play with the abilities you know**, without comparing the whole roster or chasing a performance target. Finish each match normally."
      },
      "de": {
        "name": "Vertraute Wahl",
        "objective": "Starte ein **Spiel mit Figurenwahl und einem entspannten Modus**. Nimm eine Figur, die du gut kennst. **Spiel mit ihren vertrauten Fähigkeiten ein Match zu Ende**. Du musst keine anderen Figuren vergleichen oder eine bestimmte Leistung schaffen.",
        "gameObjective": "In **{{game}}**: Nimm eine Figur, die du gut kennst. **Spiel mit ihren vertrauten Fähigkeiten ein Match zu Ende**. Du musst keine anderen Figuren vergleichen oder eine bestimmte Leistung schaffen."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "character-abilities",
        "whole-matches"
      ]
    }
  },
  {
    "id": "character-support-a-friend",
    "moodIds": [
      "connect"
    ],
    "type": "objective",
    "tags": [
      "abilities",
      "support",
      "co-op"
    ],
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 45,
    "translations": {
      "en": {
        "name": "A Useful Ability",
        "objective": "Open a **online team game with character abilities**. Choose an unlocked character whose abilities can help a teammate, such as protection, healing, or information. **Use that help during one complete match**, playing toward the team’s objective throughout.",
        "gameObjective": "In **{{game}}**: Choose an unlocked character whose abilities can help a teammate, such as protection, healing, or information. **Use that help during one complete match**, playing toward the team’s objective throughout."
      },
      "de": {
        "name": "Eine hilfreiche Fähigkeit",
        "objective": "Starte ein **Online-Teamspiel mit Figurenfähigkeiten**. Wähle eine Figur, die Teammitglieder schützen, heilen oder mit Informationen versorgen kann. **Setz diese Hilfe in einem ganzen Match ein** und bleib beim Teamziel.",
        "gameObjective": "In **{{game}}**: Wähle eine Figur, die Teammitglieder schützen, heilen oder mit Informationen versorgen kann. **Setz diese Hilfe in einem ganzen Match ein** und bleib beim Teamziel."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "character-abilities",
        "online-teamplay"
      ]
    }
  },
  {
    "id": "shooter-hold-a-crossing",
    "moodIds": [
      "focused"
    ],
    "type": "objective",
    "tags": [
      "support"
    ],
    "minimumDurationMinutes": 10,
    "suggestedDurationMinutes": 45,
    "translations": {
      "en": {
        "name": "Watch the Crossing",
        "objective": "Open a **shooter with round-based matches**. During a match, choose a crossing relevant to your team’s objective. **Cover it from a useful position and adapt when the team moves**. Finish the match. You do not need a kill.",
        "gameObjective": "In **{{game}}**: During a match, choose a crossing relevant to your team’s objective. **Cover it from a useful position and adapt when the team moves**. Finish the match. You do not need a kill."
      },
      "de": {
        "name": "Den Durchgang sichern",
        "objective": "Starte ein **Shooter mit rundenbasierten Matches**. Such dir in einem Match einen Durchgang, der für euer Ziel wichtig ist. **Sichere ihn und rück mit deinem Team weiter, wenn sich der Kampf verlagert**. Spiel das Match zu Ende; du brauchst keinen Abschuss.",
        "gameObjective": "In **{{game}}**: Such dir in einem Match einen Durchgang, der für euer Ziel wichtig ist. **Sichere ihn und rück mit deinem Team weiter, wenn sich der Kampf verlagert**. Spiel das Match zu Ende; du brauchst keinen Abschuss."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "combat-loadouts",
        "whole-matches"
      ],
      "genreIds": [
        "shooter"
      ]
    }
  },
  {
    "id": "shooter-open-with-information",
    "moodIds": [
      "curious",
      "focused"
    ],
    "type": "experiment",
    "tags": [
      "gadgets",
      "scouting",
      "vs-bots",
      "new-approach"
    ],
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Look Before Breaching",
        "objective": "Open a **shooter with scouting tools and breaching gadgets**. In solo, training, or bot play where you can scout and open a route, inspect the other side first. **Use an available breaching gadget, move through the opening, and finish the encounter**.",
        "gameObjective": "In **{{game}}**: In solo, training, or bot play where you can scout and open a route, inspect the other side first. **Use an available breaching gadget, move through the opening, and finish the encounter**."
      },
      "de": {
        "name": "Vor dem Öffnen schauen",
        "objective": "Starte ein **Shooter mit Aufklärungswerkzeugen und Breach-Gadgets**. Späh in einem Solo-, Trainings- oder Bot-Modus erst auf die andere Seite eines Durchgangs. **Öffne ihn dann mit einem Breach-Gadget, geh hindurch und spiel den Kampf zu Ende**.",
        "gameObjective": "In **{{game}}**: Späh in einem Solo-, Trainings- oder Bot-Modus erst auf die andere Seite eines Durchgangs. **Öffne ihn dann mit einem Breach-Gadget, geh hindurch und spiel den Kampf zu Ende**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "tactical-gadgets",
        "scouting-tools"
      ],
      "genreIds": [
        "shooter"
      ]
    }
  },
  {
    "id": "gadget-protect-a-route",
    "moodIds": [
      "focused"
    ],
    "type": "objective",
    "tags": [
      "gadgets",
      "loadout"
    ],
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 20,
    "translations": {
      "en": {
        "name": "Protect the Route",
        "objective": "Open a **game with protective or route-blocking gadgets**. Where your loadout includes a protective or blocking gadget, place it to cover a route relevant to the objective. **Play out the encounter using that setup**, moving or replacing it only if the situation needs it.",
        "gameObjective": "In **{{game}}**: Where your loadout includes a protective or blocking gadget, place it to cover a route relevant to the objective. **Play out the encounter using that setup**, moving or replacing it only if the situation needs it."
      },
      "de": {
        "name": "Den Weg schützen",
        "objective": "Starte ein **Spiel mit schützenden oder wegsperrenden Gadgets**. Platziere ein schützendes oder wegsperrendes Gadget an einem wichtigen Zugang. **Spiel den Kampf oder die Runde damit zu Ende**. Wenn sich die Lage ändert, darfst du es versetzen.",
        "gameObjective": "In **{{game}}**: Platziere ein schützendes oder wegsperrendes Gadget an einem wichtigen Zugang. **Spiel den Kampf oder die Runde damit zu Ende**. Wenn sich die Lage ändert, darfst du es versetzen."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "tactical-gadgets"
      ]
    }
  },
  {
    "id": "gadget-try-another-position",
    "moodIds": [
      "create",
      "curious"
    ],
    "type": "experiment",
    "tags": [
      "gadgets",
      "new-approach",
      "vs-bots"
    ],
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 20,
    "translations": {
      "en": {
        "name": "Placement Matters",
        "objective": "Open a **game with placeable tactical gadgets**. In solo, training, or bot play with a placeable gadget, try it in two different positions. **Play an encounter from each setup and compare the space it protects or controls**.",
        "gameObjective": "In **{{game}}**: In solo, training, or bot play with a placeable gadget, try it in two different positions. **Play an encounter from each setup and compare the space it protects or controls**."
      },
      "de": {
        "name": "Der Platz zählt",
        "objective": "Starte ein **Spiel mit platzierbaren taktischen Gadgets**. Platziere dasselbe Gadget in zwei Solo-, Trainings- oder Bot-Kämpfen an verschiedenen Stellen. **Spiel beide Kämpfe zu Ende und vergleiche, welchen Bereich es jeweils schützt oder kontrolliert**.",
        "gameObjective": "In **{{game}}**: Platziere dasselbe Gadget in zwei Solo-, Trainings- oder Bot-Kämpfen an verschiedenen Stellen. **Spiel beide Kämpfe zu Ende und vergleiche, welchen Bereich es jeweils schützt oder kontrolliert**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "tactical-gadgets"
      ]
    }
  },
  {
    "id": "gadget-help-the-entry",
    "moodIds": [
      "connect"
    ],
    "type": "objective",
    "tags": [
      "gadgets",
      "support",
      "co-op"
    ],
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 45,
    "translations": {
      "en": {
        "name": "Help the Entry",
        "objective": "Open a **online game with tactical gadgets**. Choose an available gadget that can open, block, or protect a route for your team. **Use it to support the team’s approach and stay through the match**, adapting if the plan changes.",
        "gameObjective": "In **{{game}}**: Choose an available gadget that can open, block, or protect a route for your team. **Use it to support the team’s approach and stay through the match**, adapting if the plan changes."
      },
      "de": {
        "name": "Den Einstieg erleichtern",
        "objective": "Starte ein **Onlinespiel mit taktischen Gadgets**. Wähle ein Gadget, mit dem dein Team einen Weg öffnen, sperren oder sichern kann. **Setz es beim Vorrücken ein und spiel das Match zu Ende**. Wenn sich der Plan ändert, pass dich an.",
        "gameObjective": "In **{{game}}**: Wähle ein Gadget, mit dem dein Team einen Weg öffnen, sperren oder sichern kann. **Setz es beim Vorrücken ein und spiel das Match zu Ende**. Wenn sich der Plan ändert, pass dich an."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "tactical-gadgets",
        "online-teamplay"
      ]
    }
  },
  {
    "id": "scout-a-new-angle",
    "moodIds": [
      "explore",
      "curious"
    ],
    "type": "experiment",
    "tags": [
      "scouting",
      "exploration",
      "new-approach"
    ],
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "A Different View",
        "objective": "Open a **game with cameras or controllable scouting drones**. In a solo or training area with cameras or a controllable drone, inspect a room from two positions. **Find an approach visible from one view but hidden from the other, then try that approach**.",
        "gameObjective": "In **{{game}}**: In a solo or training area with cameras or a controllable drone, inspect a room from two positions. **Find an approach visible from one view but hidden from the other, then try that approach**."
      },
      "de": {
        "name": "Ein anderer Blick",
        "objective": "Starte ein **Spiel mit Kameras oder steuerbaren Aufklärungsdrohnen**. Sieh dir in einem Solo- oder Trainingsbereich denselben Raum mit Kamera oder Drohne aus zwei Blickwinkeln an. **Such einen Zugang, den du nur aus einer Perspektive erkennst, und probier ihn aus**.",
        "gameObjective": "In **{{game}}**: Sieh dir in einem Solo- oder Trainingsbereich denselben Raum mit Kamera oder Drohne aus zwei Blickwinkeln an. **Such einen Zugang, den du nur aus einer Perspektive erkennst, und probier ihn aus**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "scouting-tools"
      ],
      "genreIds": [
        "shooter",
        "stealth"
      ]
    }
  },
  {
    "id": "scout-then-communicate",
    "moodIds": [
      "connect",
      "focused"
    ],
    "type": "objective",
    "tags": [
      "scouting",
      "support",
      "co-op"
    ],
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 45,
    "translations": {
      "en": {
        "name": "Useful Information",
        "objective": "Open a **online team game with scouting tools**. Use an available camera, drone, or vision ward to check an objective route. **Share useful information through the game’s available team signals or chat**, then stay through the match.",
        "gameObjective": "In **{{game}}**: Use an available camera, drone, or vision ward to check an objective route. **Share useful information through the game’s available team signals or chat**, then stay through the match."
      },
      "de": {
        "name": "Nützliche Information",
        "objective": "Starte ein **Online-Teamspiel mit Kameras, Drohnen oder Wards**. Prüf mit Kamera, Drohne oder Ward einen Weg zum Ziel. **Sag deinem Team per Ping oder Chat, was du gesehen hast**, und bleib bis zum Matchende dabei.",
        "gameObjective": "In **{{game}}**: Prüf mit Kamera, Drohne oder Ward einen Weg zum Ziel. **Sag deinem Team per Ping oder Chat, was du gesehen hast**, und bleib bis zum Matchende dabei."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "scouting-tools",
        "online-teamplay"
      ]
    }
  },
  {
    "id": "ward-before-the-objective",
    "moodIds": [
      "focused",
      "progress"
    ],
    "type": "objective",
    "tags": [
      "scouting",
      "lanes",
      "support"
    ],
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 45,
    "translations": {
      "en": {
        "name": "Vision on the Way",
        "objective": "Open a **MOBA with placeable vision wards**. In a match where you have an available vision ward, place it along a relevant approach before joining your team’s next objective. **Play through that objective attempt and finish the match**, whether the team secures it or not.",
        "gameObjective": "In **{{game}}**: In a match where you have an available vision ward, place it along a relevant approach before joining your team’s next objective. **Play through that objective attempt and finish the match**, whether the team secures it or not."
      },
      "de": {
        "name": "Sicht auf dem Weg",
        "objective": "Starte ein **MOBA, in dem du Wards platzieren kannst**. Platziere einen Ward an einem wichtigen Zugangsweg, bevor du zum nächsten Teamziel gehst. **Hilf deinem Team beim Ziel und spiel das Match zu Ende**, unabhängig davon, ob ihr das Ziel bekommt.",
        "gameObjective": "In **{{game}}**: Platziere einen Ward an einem wichtigen Zugangsweg, bevor du zum nächsten Teamziel gehst. **Hilf deinem Team beim Ziel und spiel das Match zu Ende**, unabhängig davon, ob ihr das Ziel bekommt."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "scouting-tools",
        "lanes-and-towers"
      ],
      "genreIds": [
        "moba"
      ]
    }
  },
  {
    "id": "scout-cover-your-return",
    "moodIds": [
      "focused",
      "curious"
    ],
    "type": "experiment",
    "tags": [
      "scouting",
      "new-approach",
      "vs-bots"
    ],
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Check the Way Back",
        "objective": "Open a **game with scouting cameras or drones**. In a solo or training encounter with a scouting camera or drone, inspect a planned route in and a route back. **Travel in and back using what you observed**, then finish the encounter.",
        "gameObjective": "In **{{game}}**: In a solo or training encounter with a scouting camera or drone, inspect a planned route in and a route back. **Travel in and back using what you observed**, then finish the encounter."
      },
      "de": {
        "name": "Den Rückweg prüfen",
        "objective": "Starte ein **Spiel mit Aufklärungskameras oder Drohnen**. Späh mit Kamera oder Drohne einen Hin- und Rückweg aus. **Geh auf diesem Weg hinein und wieder zurück**. Spiel die Solo- oder Trainingsbegegnung zu Ende.",
        "gameObjective": "In **{{game}}**: Späh mit Kamera oder Drohne einen Hin- und Rückweg aus. **Geh auf diesem Weg hinein und wieder zurück**. Spiel die Solo- oder Trainingsbegegnung zu Ende."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "scouting-tools"
      ],
      "genreIds": [
        "shooter",
        "stealth"
      ]
    }
  },
  {
    "id": "lane-follow-your-wave",
    "moodIds": [
      "focused",
      "progress"
    ],
    "type": "objective",
    "tags": [
      "lanes",
      "vs-bots"
    ],
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 45,
    "translations": {
      "en": {
        "name": "With the Wave",
        "objective": "Open a **MOBA with minion lanes and towers**. In a bot match, move behind your allied minions when approaching a tower. **Contribute to destroying one enemy tower or finish the match if it ends first**. Back away when the minion cover is gone.",
        "gameObjective": "In **{{game}}**: In a bot match, move behind your allied minions when approaching a tower. **Contribute to destroying one enemy tower or finish the match if it ends first**. Back away when the minion cover is gone."
      },
      "de": {
        "name": "Mit der Wave",
        "objective": "Starte ein **MOBA mit Minion-Lanes und Türmen**. Geh in einem Bot-Match mit deinen Minions auf einen gegnerischen Turm zu. **Hilf beim Angriff auf den Turm** und zieh dich zurück, wenn deine Minions weg sind. Spiel das Match danach zu Ende.",
        "gameObjective": "In **{{game}}**: Geh in einem Bot-Match mit deinen Minions auf einen gegnerischen Turm zu. **Hilf beim Angriff auf den Turm** und zieh dich zurück, wenn deine Minions weg sind. Spiel das Match danach zu Ende."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "lanes-and-towers"
      ],
      "genreIds": [
        "moba"
      ]
    }
  },
  {
    "id": "lane-practice-last-hits",
    "moodIds": [
      "challenge",
      "focused"
    ],
    "type": "challenge",
    "tags": [
      "lanes",
      "vs-bots",
      "three-attempts"
    ],
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 10,
    "translations": {
      "en": {
        "name": "Last-Hit Streak",
        "objective": "Open a **MOBA with last-hit gold and a practice mode**. In a solo practice mode that rewards last hits, **secure the final hit on five lane minions in a row**. Stop after success or three streak attempts.",
        "gameObjective": "In **{{game}}**: In a solo practice mode that rewards last hits, **secure the final hit on five lane minions in a row**. Stop after success or three streak attempts."
      },
      "de": {
        "name": "Letzte Treffer",
        "objective": "Starte ein **MOBA, in dem Last Hits Gold geben und du solo üben kannst**. Versuch im Übungsmodus, **fünf Lane-Minions hintereinander den letzten Treffer zu geben**. Wenn die Serie reißt, fang neu an. Hör nach drei Versuchen auf.",
        "gameObjective": "In **{{game}}**: Versuch im Übungsmodus, **fünf Lane-Minions hintereinander den letzten Treffer zu geben**. Wenn die Serie reißt, fang neu an. Hör nach drei Versuchen auf."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "lanes-and-towers"
      ],
      "genreIds": [
        "moba"
      ]
    }
  },
  {
    "id": "lane-watch-the-wave",
    "moodIds": [
      "curious"
    ],
    "type": "experiment",
    "tags": [
      "lanes",
      "vs-bots",
      "new-approach"
    ],
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 10,
    "translations": {
      "en": {
        "name": "What Moves the Wave",
        "objective": "Open a **MOBA with a solo practice mode**. In solo practice, watch one minion wave meet without attacking. On the next wave, help your minions attack. **Compare where each wave meets the next enemy group**.",
        "gameObjective": "In **{{game}}**: In solo practice, watch one minion wave meet without attacking. On the next wave, help your minions attack. **Compare where each wave meets the next enemy group**."
      },
      "de": {
        "name": "Was die Wave bewegt",
        "objective": "Starte ein **MOBA mit Solo-Übungsmodus**. Beobachte im Solo-Übungsmodus eine Minion-Wave beim Zusammentreffen, ohne anzugreifen. Hilf deinen Minions bei der nächsten Wave. **Vergleiche, wo beide Waves auf die nächste Gegnergruppe treffen**.",
        "gameObjective": "In **{{game}}**: Beobachte im Solo-Übungsmodus eine Minion-Wave beim Zusammentreffen, ohne anzugreifen. Hilf deinen Minions bei der nächsten Wave. **Vergleiche, wo beide Waves auf die nächste Gegnergruppe treffen**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "lanes-and-towers"
      ],
      "genreIds": [
        "moba"
      ]
    }
  },
  {
    "id": "lane-return-to-your-role",
    "moodIds": [
      "nostalgic"
    ],
    "type": "inspiration",
    "tags": [
      "abilities",
      "lanes",
      "replay"
    ],
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 30,
    "translations": {
      "en": {
        "name": "Back to Your Lane",
        "objective": "Open a **MOBA with a lane and champion you used to play**. Return to a lane and an available champion you once played often, in a familiar mode. **Revisit the matchups and rhythms you remember**, adjusting to changes as you play. Finish each match normally.",
        "gameObjective": "In **{{game}}**: Return to a lane and an available champion you once played often, in a familiar mode. **Revisit the matchups and rhythms you remember**, adjusting to changes as you play. Finish each match normally."
      },
      "de": {
        "name": "Zurück auf deine Lane",
        "objective": "Starte ein **MOBA, in dem dein früherer Champion noch verfügbar ist**. Geh in einem vertrauten Modus auf deine alte Lane und nimm den Champion, den du früher oft gespielt hast. **Spiel ein Match mit dieser Kombination zu Ende** und schau, was sich verändert hat.",
        "gameObjective": "In **{{game}}**: Geh in einem vertrauten Modus auf deine alte Lane und nimm den Champion, den du früher oft gespielt hast. **Spiel ein Match mit dieser Kombination zu Ende** und schau, was sich verändert hat."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "lanes-and-towers",
        "character-abilities"
      ],
      "genreIds": [
        "moba"
      ]
    }
  },
  {
    "id": "time-trial-set-a-baseline",
    "moodIds": [
      "progress",
      "focused"
    ],
    "type": "objective",
    "tags": [
      "time-trial"
    ],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "translations": {
      "en": {
        "name": "Your Starting Time",
        "objective": "Open a **game with replayable time trials**. Choose a short, unlocked timed route with a result screen. **Finish one run and record its time in the game**. Mistakes are fine. Keep this time as a reference for later.",
        "gameObjective": "In **{{game}}**: Choose a short, unlocked timed route with a result screen. **Finish one run and record its time in the game**. Mistakes are fine. Keep this time as a reference for later."
      },
      "de": {
        "name": "Deine Ausgangszeit",
        "objective": "Starte ein **Spiel mit wiederholbaren Zeitrennen**. Such dir eine kurze freigeschaltete Strecke aus. **Fahr einmal ins Ziel und merk dir deine Zeit**. Fehler sind okay; die Zeit ist dein Ausgangspunkt für später.",
        "gameObjective": "In **{{game}}**: Such dir eine kurze freigeschaltete Strecke aus. **Fahr einmal ins Ziel und merk dir deine Zeit**. Fehler sind okay; die Zeit ist dein Ausgangspunkt für später."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "time-trials"
      ]
    }
  },
  {
    "id": "time-trial-compare-a-route",
    "moodIds": [
      "curious"
    ],
    "type": "experiment",
    "tags": [
      "time-trial",
      "new-approach"
    ],
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Where Time Goes",
        "objective": "Open a **game with timed routes and alternative paths**. On an unlocked short time-trial route with a branch, take one path and then the other using the same setup. **Finish both runs and compare the times**. Neither needs to set a record.",
        "gameObjective": "In **{{game}}**: On an unlocked short time-trial route with a branch, take one path and then the other using the same setup. **Finish both runs and compare the times**. Neither needs to set a record."
      },
      "de": {
        "name": "Wo die Zeit bleibt",
        "objective": "Starte ein **Spiel mit Zeitstrecken und alternativen Wegen**. Nimm auf einer freigeschalteten kurzen Zeitstrecke mit Abzweigung einmal den einen und einmal den anderen Weg mit demselben Setup. **Beende beide Läufe und vergleiche die Zeiten**. Keiner muss ein Rekord sein.",
        "gameObjective": "In **{{game}}**: Nimm auf einer freigeschalteten kurzen Zeitstrecke mit Abzweigung einmal den einen und einmal den anderen Weg mit demselben Setup. **Beende beide Läufe und vergleiche die Zeiten**. Keiner muss ein Rekord sein."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "time-trials"
      ]
    }
  },
  {
    "id": "time-trial-old-route",
    "moodIds": [
      "nostalgic",
      "restless"
    ],
    "type": "inspiration",
    "tags": [
      "time-trial",
      "replay"
    ],
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "That Fast Route",
        "objective": "Open a **game with a familiar time-trial route**. Return to an unlocked route you once practiced often. **Let your remembered shortcuts and timing come back in motion**, without needing to beat the old record.",
        "gameObjective": "In **{{game}}**: Return to an unlocked route you once practiced often. **Let your remembered shortcuts and timing come back in motion**, without needing to beat the old record."
      },
      "de": {
        "name": "Die schnelle Strecke",
        "objective": "Starte ein **Spiel mit einer vertrauten Zeitstrecke**. Kehre zu einer freigeschalteten Strecke zurück, die du früher oft geübt hast. **Lass dir Abkürzungen und Timing beim Spielen wieder einfallen**, ohne den alten Rekord schlagen zu müssen.",
        "gameObjective": "In **{{game}}**: Kehre zu einer freigeschalteten Strecke zurück, die du früher oft geübt hast. **Lass dir Abkürzungen und Timing beim Spielen wieder einfallen**, ohne den alten Rekord schlagen zu müssen."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "time-trials"
      ]
    }
  },
  {
    "id": "rhythm-comfort-set",
    "moodIds": [
      "relax",
      "low-energy"
    ],
    "type": "inspiration",
    "tags": [
      "rhythm"
    ],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "A Comfortable Tempo",
        "objective": "Open a **rhythm game with selectable difficulty**. Where you can choose difficulty, play songs you already enjoy on an easy setting or no-fail mode if available. **Play for the music and familiar patterns**, without a combo or score requirement.",
        "gameObjective": "In **{{game}}**: Where you can choose difficulty, play songs you already enjoy on an easy setting or no-fail mode if available. **Play for the music and familiar patterns**, without a combo or score requirement."
      },
      "de": {
        "name": "Angenehmes Tempo",
        "objective": "Starte ein **Rhythmusspiel mit wählbarem Schwierigkeitsgrad**. Spiel vertraute Lieblingssongs auf einer leichten Stufe oder, wenn möglich, ohne Scheitern. **Konzentrier dich auf die Musik und bekannte Muster**. Kombo und Punkte sind egal.",
        "gameObjective": "In **{{game}}**: Spiel vertraute Lieblingssongs auf einer leichten Stufe oder, wenn möglich, ohne Scheitern. **Konzentrier dich auf die Musik und bekannte Muster**. Kombo und Punkte sind egal."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "rhythm-play"
      ]
    }
  },
  {
    "id": "rhythm-one-unplayed-song",
    "moodIds": [
      "curious",
      "explore"
    ],
    "type": "objective",
    "tags": [
      "rhythm"
    ],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "A Song You Skipped",
        "objective": "Open a **rhythm game with unlocked songs**. Choose an unlocked song you have not played and a comfortable difficulty. **Play through to its result screen** without restarting to fix mistakes.",
        "gameObjective": "In **{{game}}**: Choose an unlocked song you have not played and a comfortable difficulty. **Play through to its result screen** without restarting to fix mistakes."
      },
      "de": {
        "name": "Ein übersehener Song",
        "objective": "Starte ein **Rhythmusspiel mit freigeschalteten Songs**. Wähle einen freigeschalteten, noch ungespielten Song und einen angenehmen Schwierigkeitsgrad. **Spiele bis zur Ergebnisanzeige**, ohne wegen Fehlern neu zu starten.",
        "gameObjective": "In **{{game}}**: Wähle einen freigeschalteten, noch ungespielten Song und einen angenehmen Schwierigkeitsgrad. **Spiele bis zur Ergebnisanzeige**, ohne wegen Fehlern neu zu starten."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "rhythm-play"
      ]
    }
  },
  {
    "id": "rhythm-cleaner-chorus",
    "moodIds": [
      "challenge",
      "focused"
    ],
    "type": "challenge",
    "tags": [
      "rhythm",
      "three-attempts"
    ],
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 20,
    "translations": {
      "en": {
        "name": "Fewer Misses",
        "objective": "Open a **rhythm game that counts misses**. Choose a short song with a result screen that counts missed notes. Play it once, then **finish a replay with fewer misses at the same difficulty within three attempts**, or stop after the third result.",
        "gameObjective": "In **{{game}}**: Choose a short song with a result screen that counts missed notes. Play it once, then **finish a replay with fewer misses at the same difficulty within three attempts**, or stop after the third result."
      },
      "de": {
        "name": "Weniger Fehler",
        "objective": "Starte ein **Rhythmusspiel mit Fehleranzeige**. Spiel einen kurzen Song einmal durch. Versuch danach auf derselben Schwierigkeit, **innerhalb von drei weiteren Durchläufen weniger Noten zu verpassen**. Hör nach dem dritten Ergebnis auf.",
        "gameObjective": "In **{{game}}**: Spiel einen kurzen Song einmal durch. Versuch danach auf derselben Schwierigkeit, **innerhalb von drei weiteren Durchläufen weniger Noten zu verpassen**. Hör nach dem dritten Ergebnis auf."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "rhythm-play"
      ]
    }
  },
  {
    "id": "rhythm-old-favorite",
    "moodIds": [
      "nostalgic",
      "restless"
    ],
    "type": "objective",
    "tags": [
      "rhythm",
      "replay"
    ],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 5,
    "translations": {
      "en": {
        "name": "Your Old Track",
        "objective": "Open a **rhythm game with a song you remember**. Pick an unlocked song you used to play repeatedly. **Finish it once at the difficulty you use today**, with no need to match an old score.",
        "gameObjective": "In **{{game}}**: Pick an unlocked song you used to play repeatedly. **Finish it once at the difficulty you use today**, with no need to match an old score."
      },
      "de": {
        "name": "Dein Song von damals",
        "objective": "Starte ein **Rhythmusspiel mit einem Song von früher**. Wähle einen freigeschalteten Song, den du früher immer wieder gespielt hast. **Beende ihn einmal auf deinem heutigen Schwierigkeitsgrad**, ohne einen alten Punktestand erreichen zu müssen.",
        "gameObjective": "In **{{game}}**: Wähle einen freigeschalteten Song, den du früher immer wieder gespielt hast. **Beende ihn einmal auf deinem heutigen Schwierigkeitsgrad**, ohne einen alten Punktestand erreichen zu müssen."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "rhythm-play"
      ]
    }
  },
  {
    "id": "deck-one-card-swap",
    "moodIds": [
      "curious",
      "focused"
    ],
    "type": "experiment",
    "tags": [
      "cards",
      "new-approach",
      "vs-bots"
    ],
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "One Card Different",
        "objective": "Open a **game with editable decks and card battles**. Swap one card in an existing legal deck for another available card. **Finish a solo or bot battle with the changed deck** and notice what choices the swap creates.",
        "gameObjective": "In **{{game}}**: Swap one card in an existing legal deck for another available card. **Finish a solo or bot battle with the changed deck** and notice what choices the swap creates."
      },
      "de": {
        "name": "Eine Karte anders",
        "objective": "Starte ein **Spiel mit bearbeitbaren Decks und Kartenkämpfen**. Tausche eine Karte in einem bestehenden gültigen Deck gegen eine andere verfügbare Karte. **Beende mit dem veränderten Deck einen Solo- oder Bot-Kampf** und achte auf neue Entscheidungsmöglichkeiten.",
        "gameObjective": "In **{{game}}**: Tausche eine Karte in einem bestehenden gültigen Deck gegen eine andere verfügbare Karte. **Beende mit dem veränderten Deck einen Solo- oder Bot-Kampf** und achte auf neue Entscheidungsmöglichkeiten."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "card-decks"
      ]
    }
  },
  {
    "id": "deck-build-around-effect",
    "moodIds": [
      "create",
      "focused"
    ],
    "type": "creation",
    "tags": [
      "cards",
      "vs-bots"
    ],
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 30,
    "translations": {
      "en": {
        "name": "Build Around It",
        "objective": "Open a **game with editable decks and card battles**. Choose one effect on a card you own. Adjust a legal deck to support that effect, then **save the deck and finish one solo or bot battle with it**.",
        "gameObjective": "In **{{game}}**: Choose one effect on a card you own. Adjust a legal deck to support that effect, then **save the deck and finish one solo or bot battle with it**."
      },
      "de": {
        "name": "Darum herum bauen",
        "objective": "Starte ein **Spiel mit bearbeitbaren Decks und Kartenkämpfen**. Wähle einen Effekt einer vorhandenen Karte. Passe ein gültiges Deck so an, dass es diesen Effekt unterstützt. **Speichere das Deck und beende damit einen Solo- oder Bot-Kampf**.",
        "gameObjective": "In **{{game}}**: Wähle einen Effekt einer vorhandenen Karte. Passe ein gültiges Deck so an, dass es diesen Effekt unterstützt. **Speichere das Deck und beende damit einen Solo- oder Bot-Kampf**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "card-decks"
      ]
    }
  },
  {
    "id": "deck-play-the-familiar",
    "moodIds": [
      "overwhelmed",
      "low-energy"
    ],
    "type": "inspiration",
    "tags": [
      "cards",
      "vs-bots"
    ],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 20,
    "translations": {
      "en": {
        "name": "The Deck You Know",
        "objective": "Open a **card game with a familiar saved deck**. Pick a saved deck you already understand and a forgiving solo or bot mode. **Enjoy its familiar combinations** without rebuilding it or studying new lists.",
        "gameObjective": "In **{{game}}**: Pick a saved deck you already understand and a forgiving solo or bot mode. **Enjoy its familiar combinations** without rebuilding it or studying new lists."
      },
      "de": {
        "name": "Dein vertrautes Deck",
        "objective": "Starte ein **Kartenspiel mit einem vertrauten gespeicherten Deck**. Nimm dein vertrautes Deck in einen entspannten Solo- oder Bot-Modus. **Spiel seine Kombinationen in einem Kampf aus**. Du musst das Deck nicht umbauen.",
        "gameObjective": "In **{{game}}**: Nimm dein vertrautes Deck in einen entspannten Solo- oder Bot-Modus. **Spiel seine Kombinationen in einem Kampf aus**. Du musst das Deck nicht umbauen."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "card-decks"
      ]
    }
  },
  {
    "id": "deck-use-the-combination",
    "moodIds": [
      "challenge",
      "focused"
    ],
    "type": "challenge",
    "tags": [
      "cards",
      "vs-bots",
      "three-attempts"
    ],
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 25,
    "translations": {
      "en": {
        "name": "Make It Connect",
        "objective": "Open a **card game with an existing combo deck**. In solo or bot battles, use an available legal deck containing a two-card interaction you already know. **Trigger that interaction during a battle and finish it**, or stop after three battles if the cards never come together.",
        "gameObjective": "In **{{game}}**: In solo or bot battles, use an available legal deck containing a two-card interaction you already know. **Trigger that interaction during a battle and finish it**, or stop after three battles if the cards never come together."
      },
      "de": {
        "name": "Die Kombination schaffen",
        "objective": "Starte ein **Kartenspiel mit einem vorhandenen Combo-Deck**. Nutze in Solo- oder Bot-Kämpfen ein verfügbares gültiges Deck mit einem bekannten Zusammenspiel zweier Karten. **Bring die beiden Karten in einem Kampf zusammen und spiel ihn zu Ende** oder hör nach drei Kämpfen auf, falls die Karten nie zusammenkommen.",
        "gameObjective": "In **{{game}}**: Nutze in Solo- oder Bot-Kämpfen ein verfügbares gültiges Deck mit einem bekannten Zusammenspiel zweier Karten. **Bring die beiden Karten in einem Kampf zusammen und spiel ihn zu Ende** oder hör nach drei Kämpfen auf, falls die Karten nie zusammenkommen."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "card-decks"
      ]
    }
  },
  {
    "id": "units-keep-them-together",
    "moodIds": [
      "focused",
      "progress"
    ],
    "type": "objective",
    "tags": [
      "units",
      "vs-bots"
    ],
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 20,
    "translations": {
      "en": {
        "name": "Move as a Group",
        "objective": "Open a **game with several commandable units**. In a short solo or CPU battle, choose a small group of available units. **Move them together toward one scenario objective and play until it resolves or the battle ends**.",
        "gameObjective": "In **{{game}}**: In a short solo or CPU battle, choose a small group of available units. **Move them together toward one scenario objective and play until it resolves or the battle ends**."
      },
      "de": {
        "name": "Als Gruppe vorrücken",
        "objective": "Starte ein **Spiel mit mehreren befehligbaren Einheiten**. Wähle in einem kurzen Solo- oder CPU-Kampf eine kleine Einheitengruppe. **Beweg sie zusammen zum Ziel und spiel den Kampf zu Ende**.",
        "gameObjective": "In **{{game}}**: Wähle in einem kurzen Solo- oder CPU-Kampf eine kleine Einheitengruppe. **Beweg sie zusammen zum Ziel und spiel den Kampf zu Ende**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "unit-command"
      ]
    }
  },
  {
    "id": "units-try-a-formation",
    "moodIds": [
      "create",
      "curious"
    ],
    "type": "experiment",
    "tags": [
      "units",
      "new-approach"
    ],
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Change the Formation",
        "objective": "Open a **tactics game with controllable unit positions**. In a solo scenario that lets you position units, put a durable unit ahead of a more vulnerable one. **Play an encounter with that arrangement and compare it with your usual deployment**.",
        "gameObjective": "In **{{game}}**: In a solo scenario that lets you position units, put a durable unit ahead of a more vulnerable one. **Play an encounter with that arrangement and compare it with your usual deployment**."
      },
      "de": {
        "name": "Anders aufstellen",
        "objective": "Starte ein **Taktikspiel, in dem du deine Einheiten selbst aufstellen kannst**. Stelle in einem Solo-Szenario mit frei platzierbaren Einheiten eine robuste Einheit vor eine empfindlichere. **Spiel mit dieser Aufstellung einen Kampf und vergleiche sie mit deiner üblichen Taktik**.",
        "gameObjective": "In **{{game}}**: Stelle in einem Solo-Szenario mit frei platzierbaren Einheiten eine robuste Einheit vor eine empfindlichere. **Spiel mit dieser Aufstellung einen Kampf und vergleiche sie mit deiner üblichen Taktik**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "unit-command"
      ],
      "genreIds": [
        "strategy"
      ]
    }
  },
  {
    "id": "units-one-survivor-more",
    "moodIds": [
      "challenge",
      "focused"
    ],
    "type": "challenge",
    "tags": [
      "units",
      "three-attempts"
    ],
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 25,
    "translations": {
      "en": {
        "name": "Keep the Group Alive",
        "objective": "Open a **tactics game with replayable solo battles**. Choose an available, short, replayable solo battle and a small group of units. **Win while keeping every unit in that group alive**, or finish three attempts. Other units can support them.",
        "gameObjective": "In **{{game}}**: Choose an available, short, replayable solo battle and a small group of units. **Win while keeping every unit in that group alive**, or finish three attempts. Other units can support them."
      },
      "de": {
        "name": "Die Gruppe erhalten",
        "objective": "Starte ein **Taktikspiel mit wiederholbaren Solo-Kämpfen**. Wähle einen kurzen Solo-Kampf, den du wiederholen kannst, und eine kleine Gruppe von Einheiten. **Gewinn, ohne jemanden aus dieser Gruppe zu verlieren**. Andere Einheiten dürfen helfen; hör nach drei Versuchen auf.",
        "gameObjective": "In **{{game}}**: Wähle einen kurzen Solo-Kampf, den du wiederholen kannst, und eine kleine Gruppe von Einheiten. **Gewinn, ohne jemanden aus dieser Gruppe zu verlieren**. Andere Einheiten dürfen helfen; hör nach drei Versuchen auf."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "unit-command"
      ],
      "genreIds": [
        "strategy"
      ]
    }
  },
  {
    "id": "units-old-army",
    "moodIds": [
      "nostalgic"
    ],
    "type": "inspiration",
    "tags": [
      "units",
      "replay"
    ],
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 25,
    "translations": {
      "en": {
        "name": "Your Old Army",
        "objective": "Open a **strategy game with a faction you used to play**. Return to an available faction you once used regularly. **Play a familiar solo scenario with the units you remember**, using your usual difficulty rather than relearning every alternative.",
        "gameObjective": "In **{{game}}**: Return to an available faction you once used regularly. **Play a familiar solo scenario with the units you remember**, using your usual difficulty rather than relearning every alternative."
      },
      "de": {
        "name": "Deine alte Armee",
        "objective": "Starte ein **Strategiespiel mit einer Fraktion von früher**. Kehre zu einer verfügbaren Fraktion zurück, die du früher regelmäßig gespielt hast. **Spiele ein vertrautes Solo-Szenario mit bekannten Einheiten** auf deinem üblichen Schwierigkeitsgrad, statt jede Alternative neu zu lernen.",
        "gameObjective": "In **{{game}}**: Kehre zu einer verfügbaren Fraktion zurück, die du früher regelmäßig gespielt hast. **Spiele ein vertrautes Solo-Szenario mit bekannten Einheiten** auf deinem üblichen Schwierigkeitsgrad, statt jede Alternative neu zu lernen."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "unit-command"
      ],
      "genreIds": [
        "strategy"
      ]
    }
  },
  {
    "id": "automation-one-working-chain",
    "moodIds": [
      "create",
      "progress"
    ],
    "type": "creation",
    "tags": [
      "automation"
    ],
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 25,
    "translations": {
      "en": {
        "name": "One Working Chain",
        "objective": "Open a **game with connected production machines**. With machines and inputs already available, connect one production step to the next. **Run the chain until its output produces three items**, then save.",
        "gameObjective": "In **{{game}}**: With machines and inputs already available, connect one production step to the next. **Run the chain until its output produces three items**, then save."
      },
      "de": {
        "name": "Eine funktionierende Kette",
        "objective": "Starte ein **Spiel mit verbundenen Produktionsmaschinen**. Verbinde mit vorhandenen Maschinen und Rohstoffen einen Produktionsschritt mit dem nächsten. **Lass die Kette laufen, bis am Ausgang drei Items entstehen**, und speichere.",
        "gameObjective": "In **{{game}}**: Verbinde mit vorhandenen Maschinen und Rohstoffen einen Produktionsschritt mit dem nächsten. **Lass die Kette laufen, bis am Ausgang drei Items entstehen**, und speichere."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "automation"
      ]
    }
  },
  {
    "id": "automation-follow-an-item",
    "moodIds": [
      "curious",
      "focused"
    ],
    "type": "experiment",
    "tags": [
      "automation"
    ],
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 10,
    "translations": {
      "en": {
        "name": "Follow One Item",
        "objective": "Open a **game with automated production lines**. Choose a working production line and follow one material from its input through the machines. **Identify the steps it passes and watch a finished item reach the output**.",
        "gameObjective": "In **{{game}}**: Choose a working production line and follow one material from its input through the machines. **Identify the steps it passes and watch a finished item reach the output**."
      },
      "de": {
        "name": "Einem Item folgen",
        "objective": "Starte ein **Spiel mit automatisierten Produktionsketten**. Wähle eine laufende Produktionskette und folge einem Material vom Eingang durch die Maschinen. **Schau zu, wie es verarbeitet wird und am Ende ein fertiges Item herauskommt**.",
        "gameObjective": "In **{{game}}**: Wähle eine laufende Produktionskette und folge einem Material vom Eingang durch die Maschinen. **Schau zu, wie es verarbeitet wird und am Ende ein fertiges Item herauskommt**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "automation"
      ]
    }
  },
  {
    "id": "automation-one-line-only",
    "moodIds": [
      "overwhelmed"
    ],
    "type": "inspiration",
    "tags": [
      "automation"
    ],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Stay With This Line",
        "objective": "Open a **automation game with an existing factory**. Return to one production line that already works. **Spend the session watching and tending that line**, leaving expansion plans and the rest of the factory for later.",
        "gameObjective": "In **{{game}}**: Return to one production line that already works. **Spend the session watching and tending that line**, leaving expansion plans and the rest of the factory for later."
      },
      "de": {
        "name": "Bei dieser Kette bleiben",
        "objective": "Starte ein **Automatisierungsspiel mit einer bestehenden Fabrik**. Kehre zu einer bereits funktionierenden Produktionskette zurück. **Schau der Kette beim Laufen zu und greif ein, wenn sie stockt**. Ausbaupläne und der Rest der Fabrik kommen später.",
        "gameObjective": "In **{{game}}**: Kehre zu einer bereits funktionierenden Produktionskette zurück. **Schau der Kette beim Laufen zu und greif ein, wenn sie stockt**. Ausbaupläne und der Rest der Fabrik kommen später."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "automation"
      ]
    }
  },
  {
    "id": "match-stay-to-the-result",
    "moodIds": [
      "progress",
      "overwhelmed"
    ],
    "type": "objective",
    "tags": [
      "full-match"
    ],
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 45,
    "translations": {
      "en": {
        "name": "Through the Result",
        "objective": "Open a **game with full matches**. Use your familiar mode and setup. **Play one whole match through its final result**, including every round. A win is not required. Allow enough time to finish even if it runs longer than expected.",
        "gameObjective": "In **{{game}}**: Use your familiar mode and setup. **Play one whole match through its final result**, including every round. A win is not required. Allow enough time to finish even if it runs longer than expected."
      },
      "de": {
        "name": "Bis zum Ergebnis",
        "objective": "Starte ein **Spiel mit vollständigen Matches**. Nimm deinen vertrauten Modus und dein übliches Setup. **Spiel alle Runden bis zum Ergebnisbildschirm**. Ein Sieg ist nicht nötig; nimm dir die Zeit dafür.",
        "gameObjective": "In **{{game}}**: Nimm deinen vertrauten Modus und dein übliches Setup. **Spiel alle Runden bis zum Ergebnisbildschirm**. Ein Sieg ist nicht nötig; nimm dir die Zeit dafür."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "whole-matches"
      ]
    }
  },
  {
    "id": "match-one-thread-to-follow",
    "moodIds": [
      "focused"
    ],
    "type": "inspiration",
    "tags": [
      "full-match"
    ],
    "minimumDurationMinutes": 10,
    "suggestedDurationMinutes": 45,
    "translations": {
      "en": {
        "name": "Follow the Match",
        "objective": "Open a **game with full matches**. Choose the mode you know best and **pay attention to how the match develops**, adjusting your usual play as the situation changes. Let this match hold the session and finish it before deciding what comes next.",
        "gameObjective": "In **{{game}}**: Choose the mode you know best and **pay attention to how the match develops**, adjusting your usual play as the situation changes. Let this match hold the session and finish it before deciding what comes next."
      },
      "de": {
        "name": "Dem Match folgen",
        "objective": "Starte ein **Spiel mit vollständigen Matches**. Nimm deinen vertrautesten Modus und **spiel ein ganzes Match aufmerksam zu Ende**. Wenn Gegner oder Team ihre Taktik ändern, pass deine Spielweise daran an.",
        "gameObjective": "In **{{game}}**: Nimm deinen vertrautesten Modus und **spiel ein ganzes Match aufmerksam zu Ende**. Wenn Gegner oder Team ihre Taktik ändern, pass deine Spielweise daran an."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "whole-matches"
      ]
    }
  },
  {
    "id": "match-with-your-regulars",
    "moodIds": [
      "connect",
      "nostalgic"
    ],
    "type": "inspiration",
    "tags": [
      "co-op",
      "full-match"
    ],
    "minimumDurationMinutes": 10,
    "suggestedDurationMinutes": 45,
    "translations": {
      "en": {
        "name": "Your Regular Group",
        "objective": "Open a **team game you share with regular teammates**. Join regular teammates in a mode you have played together before. **Enjoy the familiar teamwork and conversation** without setting an extra score target. Finish each match before anyone signs off.",
        "gameObjective": "In **{{game}}**: Join regular teammates in a mode you have played together before. **Enjoy the familiar teamwork and conversation** without setting an extra score target. Finish each match before anyone signs off."
      },
      "de": {
        "name": "Deine gewohnte Runde",
        "objective": "Starte ein **Teamspiel mit Leuten, mit denen du früher oft gespielt hast**. Wählt einen Modus, den ihr zusammen kennt, und **spielt ein Match zu Ende**. Redet dabei und lasst zusätzliche Punkteziele weg.",
        "gameObjective": "In **{{game}}**: Wählt einen Modus, den ihr zusammen kennt, und **spielt ein Match zu Ende**. Redet dabei und lasst zusätzliche Punkteziele weg."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "whole-matches",
        "online-teamplay"
      ]
    }
  },
  {
    "id": "match-one-unfamiliar-option",
    "moodIds": [
      "curious"
    ],
    "type": "experiment",
    "tags": [
      "abilities",
      "vs-bots"
    ],
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 30,
    "translations": {
      "en": {
        "name": "One New Choice",
        "objective": "Open a **game with selectable characters and full bot matches**. In a full bot match, choose an unlocked character you have not used recently. **Use their abilities throughout the match and reach its final result**, noticing one decision you make differently from your usual character.",
        "gameObjective": "In **{{game}}**: In a full bot match, choose an unlocked character you have not used recently. **Use their abilities throughout the match and reach its final result**, noticing one decision you make differently from your usual character."
      },
      "de": {
        "name": "Eine neue Wahl",
        "objective": "Starte ein **Spiel mit wählbaren Figuren und vollständigen Bot-Matches**. Nimm in einem Bot-Match eine freigeschaltete Figur, die du länger nicht gespielt hast. **Setz ihre Fähigkeiten ein und spiel bis zum Ergebnis**. Achte darauf, was du anders machst als mit deiner üblichen Figur.",
        "gameObjective": "In **{{game}}**: Nimm in einem Bot-Match eine freigeschaltete Figur, die du länger nicht gespielt hast. **Setz ihre Fähigkeiten ein und spiel bis zum Ergebnis**. Achte darauf, was du anders machst als mit deiner üblichen Figur."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "whole-matches",
        "character-abilities"
      ]
    }
  },
  {
    "id": "movement-stay-above-ground",
    "moodIds": [
      "challenge",
      "restless"
    ],
    "type": "challenge",
    "tags": [
      "traversal",
      "three-attempts"
    ],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Stay Above Ground",
        "objective": "Open a **game with climbing or movement abilities**. In a solo area, choose three nearby ledges or platforms you can reach with your available moves. **Link all three without dropping to the starting ground**, or finish three attempts.",
        "gameObjective": "In **{{game}}**: In a solo area, choose three nearby ledges or platforms you can reach with your available moves. **Link all three without dropping to the starting ground**, or finish three attempts."
      },
      "de": {
        "name": "Über dem Boden bleiben",
        "objective": "Starte ein **Spiel mit Klettern oder Bewegungsfähigkeiten**. Such dir im Solo-Spiel drei Vorsprünge oder Plattformen in der Nähe aus. **Verbinde sie, ohne wieder auf den Boden am Start zu fallen**. Wenn es nicht klappt, hör nach drei Versuchen auf.",
        "gameObjective": "In **{{game}}**: Such dir im Solo-Spiel drei Vorsprünge oder Plattformen in der Nähe aus. **Verbinde sie, ohne wieder auf den Boden am Start zu fallen**. Wenn es nicht klappt, hör nach drei Versuchen auf."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "advanced-traversal"
      ]
    }
  },
  {
    "id": "open-world-follow-the-edge",
    "moodIds": [
      "explore",
      "curious"
    ],
    "type": "objective",
    "tags": [
      "exploration",
      "on-foot"
    ],
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 20,
    "translations": {
      "en": {
        "name": "Follow the Edge",
        "objective": "Open a **game with a freely explorable district or region**. Choose a visible boundary such as a wall, coast, or cliff and follow it on foot. **Reach a landmark you have not approached from this direction**, then return to the map.",
        "gameObjective": "In **{{game}}**: Choose a visible boundary such as a wall, coast, or cliff and follow it on foot. **Reach a landmark you have not approached from this direction**, then return to the map."
      },
      "de": {
        "name": "Dem Rand folgen",
        "objective": "Starte ein **Spiel mit einem frei erkundbaren Gebiet**. Wähle eine sichtbare Grenze wie eine Mauer, Küste oder Klippe und folge ihr zu Fuß. **Erreiche einen Orientierungspunkt aus einer neuen Richtung** und kehre dann zur Karte zurück.",
        "gameObjective": "In **{{game}}**: Wähle eine sichtbare Grenze wie eine Mauer, Küste oder Klippe und folge ihr zu Fuß. **Erreiche einen Orientierungspunkt aus einer neuen Richtung** und kehre dann zur Karte zurück."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "open-world"
      ]
    }
  },
  {
    "id": "mission-change-the-approach",
    "moodIds": [
      "curious",
      "focused"
    ],
    "type": "experiment",
    "tags": [
      "new-approach",
      "loadout"
    ],
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 20,
    "translations": {
      "en": {
        "name": "Change the Approach",
        "objective": "Open a **game with replayable missions and selectable equipment**. Replay a short mission with an owned weapon or tool you did not use the first time. **Finish the mission and notice which encounter changed most**.",
        "gameObjective": "In **{{game}}**: Replay a short mission with an owned weapon or tool you did not use the first time. **Finish the mission and notice which encounter changed most**."
      },
      "de": {
        "name": "Anders herangehen",
        "objective": "Starte ein **Spiel mit wiederholbaren Missionen und wählbarer Ausrüstung**. Wiederhole eine kurze Mission mit einer Waffe oder einem Werkzeug, das du beim ersten Mal nicht benutzt hast. **Spiel sie zu Ende und achte darauf, bei welchem Kampf dir die andere Ausrüstung am meisten geholfen hat**.",
        "gameObjective": "In **{{game}}**: Wiederhole eine kurze Mission mit einer Waffe oder einem Werkzeug, das du beim ersten Mal nicht benutzt hast. **Spiel sie zu Ende und achte darauf, bei welchem Kampf dir die andere Ausrüstung am meisten geholfen hat**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "missions-or-levels",
        "combat-loadouts"
      ]
    }
  },
  {
    "id": "squad-shadow-one-teammate",
    "moodIds": [
      "connect",
      "focused"
    ],
    "type": "objective",
    "tags": [
      "co-op",
      "support"
    ],
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 30,
    "translations": {
      "en": {
        "name": "Stay as a Pair",
        "objective": "Open an **online team game with mission objectives**. Choose one squadmate and stay close enough to support each other through the next objective. **Reach its result together**, even if the wider squad takes another route.",
        "gameObjective": "In **{{game}}**: Choose one squadmate and stay close enough to support each other through the next objective. **Reach its result together**, even if the wider squad takes another route."
      },
      "de": {
        "name": "Als Duo zusammenbleiben",
        "objective": "Starte ein **Online-Teamspiel mit Missionszielen**. Bleib beim nächsten Ziel nah bei einem Squadmitglied, damit ihr euch helfen könnt. **Haltet zusammen, bis das Ziel erreicht oder verloren ist**, auch wenn der Rest des Squads woanders hinzieht.",
        "gameObjective": "In **{{game}}**: Bleib beim nächsten Ziel nah bei einem Squadmitglied, damit ihr euch helfen könnt. **Haltet zusammen, bis das Ziel erreicht oder verloren ist**, auch wenn der Rest des Squads woanders hinzieht."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "online-teamplay",
        "missions-or-levels"
      ]
    }
  },
  {
    "id": "round-role-swap",
    "moodIds": [
      "curious",
      "connect"
    ],
    "type": "objective",
    "tags": [
      "new-approach",
      "support"
    ],
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 20,
    "translations": {
      "en": {
        "name": "Swap Your Role",
        "objective": "Open an **online team game with short rounds**. For one full round, take an available role different from your usual one, such as support, defense, or initiation. **Finish the round while playing toward that role's job**, not your usual score pattern.",
        "gameObjective": "In **{{game}}**: For one full round, take an available role different from your usual one, such as support, defense, or initiation. **Finish the round while playing toward that role's job**, not your usual score pattern."
      },
      "de": {
        "name": "Rolle tauschen",
        "objective": "Starte ein **Online-Teamspiel mit kurzen Runden**. Übernimm für eine ganze Runde eine Rolle, die du sonst nicht spielst, etwa Support oder Verteidigung. **Kümmere dich um diese Aufgabe und spiel die Runde zu Ende**. Deine üblichen Punkte sind heute egal.",
        "gameObjective": "In **{{game}}**: Übernimm für eine ganze Runde eine Rolle, die du sonst nicht spielst, etwa Support oder Verteidigung. **Kümmere dich um diese Aufgabe und spiel die Runde zu Ende**. Deine üblichen Punkte sind heute egal."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "online-teamplay",
        "rounds-or-matches"
      ]
    }
  },
  {
    "id": "squad-call-one-plan",
    "moodIds": [
      "focused",
      "connect"
    ],
    "type": "objective",
    "tags": [
      "co-op",
      "full-match"
    ],
    "minimumDurationMinutes": 10,
    "suggestedDurationMinutes": 45,
    "translations": {
      "en": {
        "name": "One Shared Plan",
        "objective": "Open an **online squad game with full matches**. Before the match, agree on one simple team plan such as a route, opening, or defensive position. **Keep returning to that plan as the match changes** and finish the match together.",
        "gameObjective": "In **{{game}}**: Before the match, agree on one simple team plan such as a route, opening, or defensive position. **Keep returning to that plan as the match changes** and finish the match together."
      },
      "de": {
        "name": "Ein gemeinsamer Plan",
        "objective": "Starte ein **Online-Squadspiel mit vollständigen Matches**. Einigt euch vor dem Match auf einen einfachen Plan für Route, Eröffnung oder Verteidigung. **Setzt ihn gemeinsam um und spielt das Match zu Ende**. Sprecht euch ab, wenn ihr ihn ändern müsst.",
        "gameObjective": "In **{{game}}**: Einigt euch vor dem Match auf einen einfachen Plan für Route, Eröffnung oder Verteidigung. **Setzt ihn gemeinsam um und spielt das Match zu Ende**. Sprecht euch ab, wenn ihr ihn ändern müsst."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "online-teamplay",
        "whole-matches"
      ]
    }
  },
  {
    "id": "loadout-opposite-range",
    "moodIds": [
      "curious",
      "focused"
    ],
    "type": "experiment",
    "tags": [
      "loadout",
      "new-approach"
    ],
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 20,
    "translations": {
      "en": {
        "name": "Opposite Range",
        "objective": "Open a **game with selectable combat equipment**. Choose an owned weapon meant for a different range than your usual choice. In solo or bot play, **finish one encounter while adapting your position to that range**.",
        "gameObjective": "In **{{game}}**: Choose an owned weapon meant for a different range than your usual choice. In solo or bot play, **finish one encounter while adapting your position to that range**."
      },
      "de": {
        "name": "Andere Distanz",
        "objective": "Starte ein **Spiel mit wählbarer Kampfausrüstung**. Nimm eine vorhandene Waffe für eine andere Distanz als deine übliche Wahl. **Pass deine Position an die neue Reichweite an und beende damit einen Solo- oder Bot-Kampf**.",
        "gameObjective": "In **{{game}}**: Nimm eine vorhandene Waffe für eine andere Distanz als deine übliche Wahl. **Pass deine Position an die neue Reichweite an und beende damit einen Solo- oder Bot-Kampf**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "combat-loadouts"
      ]
    }
  },
  {
    "id": "spells-two-openers",
    "moodIds": [
      "curious",
      "focused"
    ],
    "type": "experiment",
    "tags": [
      "spells",
      "new-approach"
    ],
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 20,
    "translations": {
      "en": {
        "name": "Two Openers",
        "objective": "Open a **game with several unlocked combat spells**. Start two similar solo encounters with a different spell each time, then finish both however you like. **Compare which opener changed your next decision**.",
        "gameObjective": "In **{{game}}**: Start two similar solo encounters with a different unlocked spell each time, then finish both however you like. **Compare which opener changed your next decision**."
      },
      "de": {
        "name": "Zwei Eröffnungen",
        "objective": "Starte ein **Spiel mit mehreren freigeschalteten Kampfzaubern**. Eröffne zwei ähnliche Solo-Begegnungen jeweils mit einem anderen Zauber und beende beide frei. **Vergleiche, wie du nach den beiden Eröffnungen weiterspielst**.",
        "gameObjective": "In **{{game}}**: Eröffne zwei ähnliche Solo-Begegnungen jeweils mit einem anderen freigeschalteten Zauber und beende beide frei. **Vergleiche, wie du nach den beiden Eröffnungen weiterspielst**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "combat-spells"
      ]
    }
  },
  {
    "id": "space-neighboring-stop",
    "moodIds": [
      "explore",
      "low-energy"
    ],
    "type": "objective",
    "tags": [
      "space",
      "exploration"
    ],
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 20,
    "translations": {
      "en": {
        "name": "The Next Stop",
        "objective": "Open a **space game with discovered destinations**. Travel to one nearby destination you have not visited recently. **Land, dock, or enter orbit and inspect the view**, then save before choosing another trip.",
        "gameObjective": "In **{{game}}**: Travel to one nearby discovered destination you have not visited recently. **Land, dock, or enter orbit and inspect the view**, then save before choosing another trip."
      },
      "de": {
        "name": "Der nächste Halt",
        "objective": "Starte ein **Weltraumspiel, in dem du schon mehrere Reiseziele entdeckt hast**. Reise zu einem Ziel in der Nähe, das du länger nicht besucht hast. **Lande, docke an oder flieg in den Orbit und schau dich um**. Speichere, bevor du weiterreist.",
        "gameObjective": "In **{{game}}**: Reise zu einem Ziel in der Nähe, das du länger nicht besucht hast. **Lande, docke an oder flieg in den Orbit und schau dich um**. Speichere, bevor du weiterreist."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "space-exploration"
      ]
    }
  },
  {
    "id": "swim-surface-checkpoints",
    "moodIds": [
      "focused",
      "explore"
    ],
    "type": "objective",
    "tags": [
      "diving",
      "exploration"
    ],
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Three Breaths",
        "objective": "Open a **game with free underwater swimming**. Choose three visible underwater landmarks within safe reach. **Swim to each in one route, surfacing between landmarks**, then return to shore or your vessel.",
        "gameObjective": "In **{{game}}**: Choose three visible underwater landmarks within safe reach. **Swim to each in one route, surfacing between landmarks**, then return to shore or your vessel."
      },
      "de": {
        "name": "Drei Tauchstopps",
        "objective": "Starte ein **Spiel mit freiem Tauchen**. Such dir drei Stellen unter Wasser aus, die du sicher erreichen kannst. **Schwimm sie nacheinander ab und hol zwischen den Stellen Luft**. Kehr danach ans Ufer oder zu deinem Fahrzeug zurück.",
        "gameObjective": "In **{{game}}**: Such dir drei Stellen unter Wasser aus, die du sicher erreichen kannst. **Schwimm sie nacheinander ab und hol zwischen den Stellen Luft**. Kehr danach ans Ufer oder zu deinem Fahrzeug zurück."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "swimming"
      ]
    }
  },
  {
    "id": "boss-read-before-striking",
    "moodIds": [
      "curious",
      "focused"
    ],
    "type": "experiment",
    "tags": [
      "boss",
      "three-attempts"
    ],
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 20,
    "translations": {
      "en": {
        "name": "Read Before Striking",
        "objective": "Open a **game with a repeatable boss fight**. On your first attempt, avoid attacking until you have seen three different boss attacks. Then fight normally and **defeat the boss or finish three attempts**.",
        "gameObjective": "In **{{game}}**: On your first attempt, avoid attacking until you have seen three different boss attacks. Then fight normally and **defeat the boss or finish three attempts**."
      },
      "de": {
        "name": "Erst lesen, dann schlagen",
        "objective": "Starte ein **Spiel mit wiederholbarem Bosskampf**. Schau dir im ersten Versuch drei verschiedene Angriffe des Bosses an, bevor du selbst angreifst. **Kämpf danach normal weiter und besieg ihn**. Wenn es nicht klappt, hör nach drei Versuchen auf.",
        "gameObjective": "In **{{game}}**: Schau dir im ersten Versuch drei verschiedene Angriffe des Bosses an, bevor du selbst angreifst. **Kämpf danach normal weiter und besieg ihn**. Wenn es nicht klappt, hör nach drei Versuchen auf."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "boss-fights"
      ]
    }
  },
  {
    "id": "puzzle-explain-the-rule",
    "moodIds": [
      "focused",
      "curious"
    ],
    "type": "objective",
    "tags": [
      "puzzles"
    ],
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Name the Rule",
        "objective": "Open a **puzzle game with short, replayable puzzles**. Solve one puzzle, then replay or review it and **describe the rule that made the solution work** in one sentence.",
        "gameObjective": "In **{{game}}**: Solve one short puzzle, then replay or review it and **describe the rule that made the solution work** in one sentence."
      },
      "de": {
        "name": "Die Regel benennen",
        "objective": "Starte ein **Rätselspiel mit kurzen, wiederholbaren Rätseln**. Löse ein Rätsel, spiele es erneut oder sieh es dir noch einmal an und **beschreibe in einem Satz die Regel, die zur Lösung geführt hat**.",
        "gameObjective": "In **{{game}}**: Löse ein kurzes Rätsel, spiele es erneut oder sieh es dir noch einmal an und **beschreibe in einem Satz die Regel, die zur Lösung geführt hat**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "puzzles"
      ]
    }
  },
  {
    "id": "building-go-up",
    "moodIds": [
      "create",
      "progress"
    ],
    "type": "creation",
    "tags": [
      "building",
      "new-approach"
    ],
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 25,
    "translations": {
      "en": {
        "name": "Build Upward",
        "objective": "Open a **building game with an existing ground-level structure**. Add a reachable upper platform or small second floor using materials you already have. **Connect it with stairs, a ladder, or another usable route**, then save.",
        "gameObjective": "In **{{game}}**: Add a reachable upper platform or small second floor to an existing ground-level structure using materials you already have. **Connect it with a usable route**, then save."
      },
      "de": {
        "name": "In die Höhe bauen",
        "objective": "Starte ein **Bauspiel mit einem vorhandenen ebenerdigen Gebäude**. Ergänze mit vorhandenen Materialien eine erreichbare Plattform oder ein kleines Obergeschoss. **Verbinde es mit einer Treppe, Leiter oder einem anderen nutzbaren Weg** und speichere.",
        "gameObjective": "In **{{game}}**: Ergänze ein vorhandenes ebenerdiges Gebäude mit einer erreichbaren Plattform oder einem kleinen Obergeschoss aus vorhandenen Materialien. **Verbinde es mit einem nutzbaren Weg** und speichere."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "building"
      ]
    }
  },
  {
    "id": "cook-from-the-pantry",
    "moodIds": [
      "overwhelmed",
      "progress"
    ],
    "type": "objective",
    "tags": [
      "cooking"
    ],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 10,
    "translations": {
      "en": {
        "name": "Use What You Have",
        "objective": "Open a **game with cooking and stored ingredients**. Choose one available recipe you can make from your current storage. **Cook it and place, eat, or store the finished dish** without gathering extra ingredients.",
        "gameObjective": "In **{{game}}**: Choose one available recipe you can make from your current storage. **Cook it and place, eat, or store the finished dish** without gathering extra ingredients."
      },
      "de": {
        "name": "Nimm, was da ist",
        "objective": "Starte ein **Spiel mit Kochen und gelagerten Zutaten**. Wähle ein verfügbares Rezept, das du aus deinem Vorrat zubereiten kannst. **Koche es und stelle das fertige Gericht ab, iss es oder lagere es ein**, ohne weitere Zutaten zu sammeln.",
        "gameObjective": "In **{{game}}**: Wähle ein verfügbares Rezept, das du aus deinem Vorrat zubereiten kannst. **Koche es und stelle das fertige Gericht ab, iss es oder lagere es ein**, ohne weitere Zutaten zu sammeln."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "cooking"
      ]
    }
  },
  {
    "id": "sports-defend-first",
    "moodIds": [
      "focused",
      "curious"
    ],
    "type": "objective",
    "tags": [
      "new-approach"
    ],
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 25,
    "translations": {
      "en": {
        "name": "Defense First",
        "objective": "Open a **sports game with CPU opponents**. Play one full game or match with a familiar team, but prioritize marking, positioning, saves, or possession recovery before attacking. **Finish the game and accept the result**.",
        "gameObjective": "In **{{game}}**: Play one full game or match with a familiar team, but prioritize marking, positioning, saves, or possession recovery before attacking. **Finish the game and accept the result**."
      },
      "de": {
        "name": "Erst die Defensive",
        "objective": "Starte ein **Sportspiel mit CPU-Gegnern**. Spiel mit einem vertrauten Team gegen die CPU. Achte zuerst auf Deckung, Position und Ballgewinn, bevor du angreifst. **Bring die Partie zu Ende, egal wie sie ausgeht**.",
        "gameObjective": "In **{{game}}**: Spiel mit einem vertrauten Team gegen die CPU. Achte zuerst auf Deckung, Position und Ballgewinn, bevor du angreifst. **Bring die Partie zu Ende, egal wie sie ausgeht**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "sports-goals"
      ]
    }
  },
  {
    "id": "extract-share-one-goal",
    "moodIds": [
      "connect",
      "focused"
    ],
    "type": "objective",
    "tags": [
      "extraction",
      "co-op"
    ],
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 30,
    "translations": {
      "en": {
        "name": "One Squad Contract",
        "objective": "Open an **online extraction game with squad play**. Before deploying, choose one available contract, item, or location the squad will prioritize. **Work toward that shared goal and leave through extraction or finish the run if the squad is eliminated**.",
        "gameObjective": "In **{{game}}**: Before deploying, choose one available contract, item, or location the squad will prioritize. **Work toward that shared goal and leave through extraction or finish the run if the squad is eliminated**."
      },
      "de": {
        "name": "Ein Squad-Auftrag",
        "objective": "Starte ein **Online-Extraction-Spiel mit Squads**. Legt vor dem Einsatz fest, welchen Auftrag, Gegenstand oder Ort euer Squad zuerst angeht. **Arbeitet zusammen daran und versucht danach zu extrahieren**. Wenn der Squad ausscheidet, endet der Run dort.",
        "gameObjective": "In **{{game}}**: Legt vor dem Einsatz fest, welchen Auftrag, Gegenstand oder Ort euer Squad zuerst angeht. **Arbeitet zusammen daran und versucht danach zu extrahieren**. Wenn der Squad ausscheidet, endet der Run dort."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "extraction-runs",
        "online-teamplay"
      ]
    }
  },
  {
    "id": "photo-route-story",
    "moodIds": [
      "create",
      "relax"
    ],
    "type": "creation",
    "tags": [
      "photography",
      "exploration"
    ],
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 20,
    "translations": {
      "en": {
        "name": "Route in Three Frames",
        "objective": "Open a **freely explorable game with a photo mode**. Choose a short route and take one picture at its beginning, middle, and destination. **Keep the three images as a sequence that shows the journey**.",
        "gameObjective": "In **{{game}}**: Choose a short route and take one picture at its beginning, middle, and destination. **Keep the three images as a sequence that shows the journey**."
      },
      "de": {
        "name": "Drei Bilder vom Weg",
        "objective": "Starte ein **frei erkundbares Spiel mit Fotomodus**. Wähle eine kurze Route und mache je ein Bild am Anfang, in der Mitte und am Ziel. **Speichere die drei Bilder als kleine Geschichte deiner Route**.",
        "gameObjective": "In **{{game}}**: Wähle eine kurze Route und mache je ein Bild am Anfang, in der Mitte und am Ziel. **Speichere die drei Bilder als kleine Geschichte deiner Route**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "open-world",
        "photo-mode"
      ]
    }
  },
  {
    "id": "lore-follow-a-reference",
    "moodIds": [
      "curious",
      "explore"
    ],
    "type": "objective",
    "tags": [
      "story",
      "exploration"
    ],
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 20,
    "translations": {
      "en": {
        "name": "Follow the Reference",
        "objective": "Open a **game with readable lore and explorable locations**. Read one unlocked entry that names a person, place, or event, then **visit a related location or character in the game world**.",
        "gameObjective": "In **{{game}}**: Read one unlocked lore entry that names a person, place, or event, then **visit a related location or character in the game world**."
      },
      "de": {
        "name": "Der Erwähnung folgen",
        "objective": "Starte ein **Spiel mit lesbarer Lore und erkundbaren Orten**. Lies einen freigeschalteten Eintrag, der eine Person, einen Ort oder ein Ereignis erwähnt, und **besuche danach einen passenden Ort oder eine passende Figur in der Spielwelt**.",
        "gameObjective": "In **{{game}}**: Lies einen freigeschalteten Lore-Eintrag, der eine Person, einen Ort oder ein Ereignis erwähnt, und **besuche danach einen passenden Ort oder eine passende Figur in der Spielwelt**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "choices-or-lore",
        "open-world"
      ]
    }
  },
  {
    "id": "automation-remove-the-detour",
    "moodIds": [
      "focused",
      "curious"
    ],
    "type": "experiment",
    "tags": [
      "automation"
    ],
    "minimumDurationMinutes": 5,
    "suggestedDurationMinutes": 25,
    "translations": {
      "en": {
        "name": "Remove the Detour",
        "objective": "Open a **game with an existing automated production line**. Find one material that travels through an unnecessary loop or crossing. Reroute it more directly and **watch three finished items reach the output through the new route**.",
        "gameObjective": "In **{{game}}**: Find one material that travels through an unnecessary loop or crossing. Reroute it more directly and **watch three finished items reach the output through the new route**."
      },
      "de": {
        "name": "Den Umweg entfernen",
        "objective": "Starte ein **Spiel mit einer bestehenden automatisierten Produktionslinie**. Such ein Material, das auf dem Weg durch deine Produktionslinie unnötig im Kreis läuft. Leite es direkter und **prüf, ob danach drei fertige Items am Ausgang ankommen**.",
        "gameObjective": "In **{{game}}**: Such ein Material, das auf dem Weg durch deine Produktionslinie unnötig im Kreis läuft. Leite es direkter und **prüf, ob danach drei fertige Items am Ausgang ankommen**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "automation"
      ]
    }
  },
  {
    "id": "platform-take-the-safe-route",
    "moodIds": [
      "relax",
      "overwhelmed"
    ],
    "type": "objective",
    "tags": [
      "traversal",
      "no-timer"
    ],
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "The Safe Route",
        "objective": "Open a **platforming game with a familiar level**. Use the safest route you know, pause before difficult jumps, and **move through the level without chasing collectibles or a fast time**. Stop at the next checkpoint or exit.",
        "gameObjective": "In **{{game}}**: Use the safest route through a familiar level, pause before difficult jumps, and **move without chasing collectibles or a fast time**. Stop at the next checkpoint or exit."
      },
      "de": {
        "name": "Der sichere Weg",
        "objective": "Starte ein **Plattformspiel mit einem vertrauten Level**. Nimm den sichersten bekannten Weg, halte vor schwierigen Sprüngen kurz inne und **spiel, ohne auf Sammelobjekte oder Bestzeit zu achten**. Hör am nächsten Kontrollpunkt oder Ausgang auf.",
        "gameObjective": "In **{{game}}**: Nimm den sichersten Weg durch ein vertrautes Level, halte vor schwierigen Sprüngen kurz inne und **spiel, ohne auf Sammelobjekte oder Bestzeit zu achten**. Hör am nächsten Kontrollpunkt oder Ausgang auf."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "platforming"
      ]
    }
  },
  {
    "id": "deck-play-the-opening-hand",
    "moodIds": [
      "low-energy",
      "overwhelmed"
    ],
    "type": "objective",
    "tags": [
      "cards"
    ],
    "minimumDurationMinutes": 3,
    "suggestedDurationMinutes": 15,
    "translations": {
      "en": {
        "name": "Keep the Opening Hand",
        "objective": "Open a **card game with a familiar legal deck and solo or bot battles**. Start one battle and keep the first playable opening hand you receive. **Finish the battle without restarting for a better draw**.",
        "gameObjective": "In **{{game}}**: Use a familiar legal deck in a solo or bot battle and keep the first playable opening hand you receive. **Finish the battle without restarting for a better draw**."
      },
      "de": {
        "name": "Die Starthand behalten",
        "objective": "Starte ein **Kartenspiel mit einem vertrauten gültigen Deck und Solo- oder Bot-Kämpfen**. Beginne einen Kampf und behalte die erste spielbare Starthand. **Beende den Kampf, ohne für bessere Karten neu zu starten**.",
        "gameObjective": "In **{{game}}**: Nutze ein vertrautes gültiges Deck in einem Solo- oder Bot-Kampf und behalte die erste spielbare Starthand. **Beende den Kampf, ohne für bessere Karten neu zu starten**."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "card-decks"
      ]
    }
  },
] satisfies readonly AuthoredQuestDefinition[];
