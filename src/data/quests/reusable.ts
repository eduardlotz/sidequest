import type { AuthoredQuestDefinition } from "../questTypes";

export const reusableQuests = [
  {
    id: "a-little-walk",
    moodIds: ["relax", "low-energy", "nostalgic"],
    type: "inspiration",
    tags: ["free-roam", "on-foot"],
    minimumDurationMinutes: 3,
    suggestedDurationMinutes: 15,
    genres: [],
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
          "Starte ein **frei erkundbares Spiel**. Spaziere durch einen Ort, den du magst, und **folge der Umgebung statt Zielen**. Geh dorthin, wo es interessant aussieht.",
        gameObjective:
          "Starte **{{game}}**. Spaziere durch einen Ort, den du magst, und **folge der Umgebung statt Zielen**. Geh dorthin, wo es interessant aussieht.",
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
    genres: [],
    translations: {
      en: {
        name: "Beyond the Map",
        objective:
          "Open a **freely explorable game**. Pick an unvisited landmark and **find your own way there and back**. Use the world around you to navigate.",
        gameObjective:
          "Open **{{game}}**. Pick an unvisited landmark and **find your own way there and back**. Use the world around you to navigate.",
      },
      de: {
        name: "Hinter der Karte",
        objective:
          "Starte ein **frei erkundbares Spiel**. Wähle einen unbekannten Orientierungspunkt und **finde selbst einen Weg hin und zurück**. Orientiere dich an der Umgebung.",
        gameObjective:
          "Starte **{{game}}**. Wähle einen unbekannten Orientierungspunkt und **finde selbst einen Weg hin und zurück**. Orientiere dich an der Umgebung.",
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
    genres: [],
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
    genres: [],
    translations: {
      en: {
        name: "Straight to the Exit",
        objective:
          "Open a **game with short missions or levels**. Start a short mission or level and **follow the main route to the end**. Skip optional rooms and collectibles.",
        gameObjective:
          "Open **{{game}}**. Start a short mission or level and **follow the main route to the end**. Skip optional rooms and collectibles.",
      },
      de: {
        name: "Direkt zum Ausgang",
        objective:
          "Starte ein **Spiel mit kurzen Missionen oder Leveln**. Starte eine kurze Mission oder ein Level und **folge dem Hauptweg bis zum Ende**. Lass optionale Räume und Sammelobjekte aus.",
        gameObjective:
          "Starte **{{game}}**. Starte eine kurze Mission oder ein Level und **folge dem Hauptweg bis zum Ende**. Lass optionale Räume und Sammelobjekte aus.",
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
          "Open a **familiar game with short rounds**. Keep your setup and **play one full, standalone round**. Accept the result and stop there.",
        gameObjective:
          "Open **{{game}}**. Keep your setup and **play one full, standalone round**. Accept the result and stop there.",
      },
      de: {
        name: "Eine Runde",
        objective:
          "Starte ein **vertrautes Spiel mit kurzen Runden**. Behalte dein Setup und **spiele eine volle, eigenständige Runde**. Nimm das Ergebnis an und hör danach auf.",
        gameObjective:
          "Starte **{{game}}**. Behalte dein Setup und **spiele eine volle, eigenständige Runde**. Nimm das Ergebnis an und hör danach auf.",
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
    minimumDurationMinutes: 3,
    suggestedDurationMinutes: 15,
    genres: [],
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
          "Starte ein **Spiel mit kurzen Runden**. Nimm einen bekannten Modus und **spiele zwei eigenständige Runden direkt hintereinander**. Behalte dasselbe Setup.",
        gameObjective:
          "Starte **{{game}}**. Nimm einen bekannten Modus und **spiele zwei eigenständige Runden direkt hintereinander**. Behalte dasselbe Setup.",
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
    genres: [],
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
    genres: [],
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
    tags: ["spells", "one-weapon"],
    minimumDurationMinutes: 2,
    suggestedDurationMinutes: 15,
    genres: [],
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
          "Starte ein **Spiel mit Schadenszaubern**. Wähle einen Zauber und **gewinne einen Kampf nur mit dessen Schaden**. Nach Erfolg oder drei Versuchen ist Schluss.",
        gameObjective:
          "Starte **{{game}}**. Wähle einen Zauber und **gewinne einen Kampf nur mit dessen Schaden**. Nach Erfolg oder drei Versuchen ist Schluss.",
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
    genres: [],
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
    genres: [],
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
    genres: [],
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
          "Starte ein **Spiel mit Schwimmen und Tauchen**. Wähle einen sichtbaren Punkt auf der anderen Wasserseite. **Schwimme hin, tauche ab und kehre zurück**.",
        gameObjective:
          "Starte **{{game}}**. Wähle einen sichtbaren Punkt auf der anderen Wasserseite. **Schwimme hin, tauche ab und kehre zurück**.",
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
    genres: [],
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
          "Starte ein **Spiel mit wiederholbaren Bosskämpfen**. Probiere eine neue Reaktion auf einen Angriff, der dich oft trifft. **Besiege den Boss oder beende drei Versuche**.",
        gameObjective:
          "Starte **{{game}}**. Probiere eine neue Reaktion auf einen Angriff, der dich oft trifft. **Besiege den Boss oder beende drei Versuche**.",
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
    genres: [],
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
          "Starte ein **Spiel mit Schleichen**. Wähle eine bewachte Tür oder Passage. **Schleiche hin und zurück, ohne anzugreifen**. Nach Erfolg oder drei Versuchen ist Schluss.",
        gameObjective:
          "Starte **{{game}}**. Wähle eine bewachte Tür oder Passage. **Schleiche hin und zurück, ohne anzugreifen**. Nach Erfolg oder drei Versuchen ist Schluss.",
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
    genres: [],
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
          "Starte ein **Spiel mit patrouillierenden Wachen**. Beobachte eine Patrouille aus der Deckung und suche eine Lücke. **Schleiche durch sie ungesehen vorbei**.",
        gameObjective:
          "Starte **{{game}}**. Beobachte eine Patrouille aus der Deckung und suche eine Lücke. **Schleiche durch sie ungesehen vorbei**.",
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
    genres: [],
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
    genres: [],
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
    genres: [],
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
          "Starte ein **Spiel mit freiem Bauen**. Baue grob einen Raum nach, den du kennst. **Füge die Türöffnung hinzu und speichere den Bau**. Halte die Details einfach.",
        gameObjective:
          "Starte **{{game}}**. Baue grob einen Raum nach, den du kennst. **Füge die Türöffnung hinzu und speichere den Bau**. Halte die Details einfach.",
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
    genres: [],
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
    genres: [],
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
    genres: [],
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
    genres: [],
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
    genres: [],
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
    genres: [],
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
    genres: [],
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
    genres: [],
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
    tags: ["racing"],
    minimumDurationMinutes: 3,
    suggestedDurationMinutes: 25,
    genres: [],
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
          "Starte ein **Rennspiel**. Wähle eine vertraute Strecke und **beende ein Rennen ohne Berührung von Begrenzungen oder Autos**. Nach Erfolg oder drei Rennen ist Schluss.",
        gameObjective:
          "Starte **{{game}}**. Wähle eine vertraute Strecke und **beende ein Rennen ohne Berührung von Begrenzungen oder Autos**. Nach Erfolg oder drei Rennen ist Schluss.",
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
    genres: [],
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
    genres: [],
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
    genres: [],
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
    genres: [],
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
    genres: [],
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
          "Starte ein **Online-Teamspiel**. Schließe dich einem Teammitglied am Ziel an. **Hilf gemeinsam bis zum Zielabschluss oder Rundenende**.",
        gameObjective:
          "Starte **{{game}}**. Schließe dich einem Teammitglied am Ziel an. **Hilf gemeinsam bis zum Zielabschluss oder Rundenende**.",
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
    genres: [],
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
    genres: [],
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
    genres: [],
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
          "Starte ein **Spiel mit optionalen Dialogen oder Storyeinträgen**. Wähle ein ungelesenes Gespräch oder einen offenen Storyeintrag und **lies oder hör bis zum Ende**.",
        gameObjective:
          "Starte **{{game}}**. Wähle ein ungelesenes Gespräch oder einen offenen Storyeintrag und **lies oder hör bis zum Ende**.",
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
    genres: [],
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
          "Starte ein **Spiel mit Händlern**. Besuche einen nahen Händler und **verkaufe drei ungenutzte Items**. Kaufe von dem Erlös ein neues Item beim nächsten Händler.",
        gameObjective:
          "Starte **{{game}}**. Besuche einen nahen Händler und **verkaufe drei ungenutzte Items**. Kaufe von dem Erlös ein neues Item beim nächsten Händler.",
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
    genres: [],
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
          "Starte ein **Spiel mit Jagd**. Das erste jagdbare Tier bestimmt die Art. **Erlege zwei Tiere dieser Art und sammle ihr Material**.",
        gameObjective:
          "Starte **{{game}}**. Das erste jagdbare Tier bestimmt die Art. **Erlege zwei Tiere dieser Art und sammle ihr Material**.",
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
    genres: [],
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
          "Starte ein **Spiel mit einem Tierbegleiter im Kampf**. Lass deinen Tierbegleiter den nächsten Kampf beginnen und greife danach ein. **Beendet den Kampf gemeinsam**.",
        gameObjective:
          "Starte **{{game}}**. Lass deinen Tierbegleiter den nächsten Kampf beginnen und greife danach ein. **Beendet den Kampf gemeinsam**.",
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
    minimumDurationMinutes: 3,
    suggestedDurationMinutes: 20,
    genres: [],
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
    genres: [],
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
          "Starte ein **Solo-Extraktionsspiel**. Starte mit deiner üblichen Ausrüstung. Plündere nur die **ersten drei Behälter** und **extrahiere mit deiner Beute**.",
        gameObjective:
          "Starte **{{game}}**. Starte mit deiner üblichen Ausrüstung. Plündere nur die **ersten drei Behälter** und **extrahiere mit deiner Beute**.",
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
    "genres": [],
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
    "genres": [],
    "translations": {
      "en": {
        "name": "Above and Below",
        "objective": "Open a **game with exploration and climbing**. Look around the foot of a climbable hill or structure. Climb up and **find a landmark hidden from below**.",
        "gameObjective": "Open **{{game}}**. Look around the foot of a climbable hill or structure. Climb up and **find a landmark hidden from below**."
      },
      "de": {
        "name": "Oben und unten",
        "objective": "Starte ein **Spiel mit Erkundung und Klettern**. Schau dich am Fuß eines erkletterbaren Hügels oder Bauwerks um. Steig hinauf und **suche einen von unten verdeckten Orientierungspunkt**.",
        "gameObjective": "Starte **{{game}}**. Schau dich am Fuß eines erkletterbaren Hügels oder Bauwerks um. Steig hinauf und **suche einen von unten verdeckten Orientierungspunkt**."
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
    "genres": [],
    "translations": {
      "en": {
        "name": "Let It Unfold",
        "objective": "Open a **familiar story game**. Continue your current mission and **take time for its conversations**. Keep your difficulty and enjoy the quieter stretches without a chapter target.",
        "gameObjective": "Open **{{game}}**. Continue your current mission and **take time for its conversations**. Keep your difficulty and enjoy the quieter stretches without a chapter target."
      },
      "de": {
        "name": "In Ruhe weiterspielen",
        "objective": "Starte ein **vertrautes Storyspiel**. Setze deine laufende Mission fort und **nimm dir Zeit für die Gespräche**. Behalte den Schwierigkeitsgrad und genieße ruhigere Abschnitte ohne Kapitelziel.",
        "gameObjective": "Starte **{{game}}**. Setze deine laufende Mission fort und **nimm dir Zeit für die Gespräche**. Behalte den Schwierigkeitsgrad und genieße ruhigere Abschnitte ohne Kapitelziel."
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
    "genres": [],
    "translations": {
      "en": {
        "name": "That Mission Again",
        "objective": "Open a **game with replayable missions or levels**. Choose an unlocked favorite and **play it through to the end**. Use the route or approach you remember.",
        "gameObjective": "Open **{{game}}**. Choose an unlocked favorite and **play it through to the end**. Use the route or approach you remember."
      },
      "de": {
        "name": "Diese eine Mission",
        "objective": "Starte ein **Spiel mit wiederholbaren Missionen oder Leveln**. Wähle einen freigeschalteten Lieblingsabschnitt und **spiele ihn bis zum Ende**. Nutze den Weg oder die Vorgehensweise von damals.",
        "gameObjective": "Starte **{{game}}**. Wähle einen freigeschalteten Lieblingsabschnitt und **spiele ihn bis zum Ende**. Nutze den Weg oder die Vorgehensweise von damals."
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
    "genres": [],
    "translations": {
      "en": {
        "name": "Stay in the Mode",
        "objective": "Open a **game with short standalone rounds**. Keep a familiar mode and setup and **spend the session playing**. Finish each round before deciding whether to start another.",
        "gameObjective": "Open **{{game}}**. Keep a familiar mode and setup and **spend the session playing**. Finish each round before deciding whether to start another."
      },
      "de": {
        "name": "Beim Modus bleiben",
        "objective": "Starte ein **Spiel mit kurzen eigenständigen Runden**. Behalte einen vertrauten Modus und dein Setup und **verbringe die Session im Spiel**. Beende jede Runde, bevor du eine weitere beginnst.",
        "gameObjective": "Starte **{{game}}**. Behalte einen vertrauten Modus und dein Setup und **verbringe die Session im Spiel**. Beende jede Runde, bevor du eine weitere beginnst."
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
    "genres": [],
    "translations": {
      "en": {
        "name": "Your Old Main",
        "objective": "Open a **game with selectable characters**. Choose a character you used to play and **finish one full match with them**. Keep your usual mode and accept the result.",
        "gameObjective": "Open **{{game}}**. Choose a character you used to play and **finish one full match with them**. Keep your usual mode and accept the result."
      },
      "de": {
        "name": "Dein alter Main",
        "objective": "Starte ein **Spiel mit wählbaren Figuren**. Wähle eine Figur von früher und **beende ein ganzes Match mit ihr**. Bleib bei deinem üblichen Modus und nimm das Ergebnis an.",
        "gameObjective": "Starte **{{game}}**. Wähle eine Figur von früher und **beende ein ganzes Match mit ihr**. Bleib bei deinem üblichen Modus und nimm das Ergebnis an."
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
    "genres": [],
    "translations": {
      "en": {
        "name": "Old Reliable",
        "objective": "Open a **game with selectable weapons**. Equip an old favorite from your save and **bring it back into ordinary fights**. Switch weapons when needed.",
        "gameObjective": "Open **{{game}}**. Equip an old favorite from your save and **bring it back into ordinary fights**. Switch weapons when needed."
      },
      "de": {
        "name": "Altbewährt",
        "objective": "Starte ein **Spiel mit wählbaren Waffen**. Rüste eine Lieblingswaffe aus einem früheren Spielabschnitt aus und **nimm sie wieder mit in normale Kämpfe**. Wechsle bei Bedarf.",
        "gameObjective": "Starte **{{game}}**. Rüste eine Lieblingswaffe aus einem früheren Spielabschnitt aus und **nimm sie wieder mit in normale Kämpfe**. Wechsle bei Bedarf."
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
    "genres": [],
    "translations": {
      "en": {
        "name": "Find Its Range",
        "objective": "Open a **game with selectable weapons**. Use one owned weapon in a close fight and a distant fight against bots or solo enemies. **Finish both and compare its handling**.",
        "gameObjective": "Open **{{game}}**. Use one owned weapon in a close fight and a distant fight against bots or solo enemies. **Finish both and compare its handling**."
      },
      "de": {
        "name": "Die passende Distanz",
        "objective": "Starte ein **Spiel mit wählbaren Waffen**. Nutze eine vorhandene Waffe in einem nahen und einem entfernten Kampf gegen Bots oder Solo-Gegner. **Beende beide und vergleiche die Handhabung**.",
        "gameObjective": "Starte **{{game}}**. Nutze eine vorhandene Waffe in einem nahen und einem entfernten Kampf gegen Bots oder Solo-Gegner. **Beende beide und vergleiche die Handhabung**."
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
    "genres": [],
    "translations": {
      "en": {
        "name": "Two Spell Openers",
        "objective": "Open a **game with damage spells**. Use two unlocked spells to open separate solo fights against the same enemy type. **Finish both and compare range or casting time**.",
        "gameObjective": "Open **{{game}}**. Use two unlocked spells to open separate solo fights against the same enemy type. **Finish both and compare range or casting time**."
      },
      "de": {
        "name": "Zwei Zaubereinstiege",
        "objective": "Starte ein **Spiel mit Schadenszaubern**. Eröffne mit zwei freigeschalteten Zaubern je einen Solo-Kampf gegen denselben Gegnertyp. **Beende beide und vergleiche Reichweite oder Zauberzeit**.",
        "gameObjective": "Starte **{{game}}**. Eröffne mit zwei freigeschalteten Zaubern je einen Solo-Kampf gegen denselben Gegnertyp. **Beende beide und vergleiche Reichweite oder Zauberzeit**."
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
    "genres": [],
    "translations": {
      "en": {
        "name": "Back to Magic",
        "objective": "Open a **game with damage spells**. Return to spells you know and **take them into the next fights**. Follow the encounters without rebuilding your character.",
        "gameObjective": "Open **{{game}}**. Return to spells you know and **take them into the next fights**. Follow the encounters without rebuilding your character."
      },
      "de": {
        "name": "Zurück zur Magie",
        "objective": "Starte ein **Spiel mit Schadenszaubern**. Kehre zu bekannten Zaubern zurück und **nutze sie in den nächsten Kämpfen**. Richte dich nach den Begegnungen, ohne deine Figur umzubauen.",
        "gameObjective": "Starte **{{game}}**. Kehre zu bekannten Zaubern zurück und **nutze sie in den nächsten Kämpfen**. Richte dich nach den Begegnungen, ohne deine Figur umzubauen."
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
    "genres": [],
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
    "genres": [],
    "translations": {
      "en": {
        "name": "Beyond the Landing",
        "objective": "Open a **space game with landable planets**. On a safe planet, **walk to a nearby hill or rock formation and back**. Take another path home or return early if supplies run low.",
        "gameObjective": "Open **{{game}}**. On a safe planet, **walk to a nearby hill or rock formation and back**. Take another path home or return early if supplies run low."
      },
      "de": {
        "name": "Jenseits des Landeplatzes",
        "objective": "Starte ein **Weltraumspiel mit begehbaren Planeten**. Auf einem sicheren Planeten **gehe zu einem nahen Hügel oder Felsen und zurück**. Nimm einen anderen Rückweg oder kehre bei knappen Vorräten früher um.",
        "gameObjective": "Starte **{{game}}**. Auf einem sicheren Planeten **gehe zu einem nahen Hügel oder Felsen und zurück**. Nimm einen anderen Rückweg oder kehre bei knappen Vorräten früher um."
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
    "genres": [],
    "translations": {
      "en": {
        "name": "Under the Surface",
        "objective": "Open a **game with swimming and diving**. Choose shallow water with a safe exit. **Inspect the bottom and return to shore** before your air runs low. Compare the terrain with the bank.",
        "gameObjective": "Open **{{game}}**. Choose shallow water with a safe exit. **Inspect the bottom and return to shore** before your air runs low. Compare the terrain with the bank."
      },
      "de": {
        "name": "Unter der Oberfläche",
        "objective": "Starte ein **Spiel mit Schwimmen und Tauchen**. Wähle flaches Wasser mit sicherem Ausstieg. **Erkunde den Grund und kehre ans Ufer zurück**, bevor die Luft knapp wird. Vergleiche das Gelände mit dem Ufer.",
        "gameObjective": "Starte **{{game}}**. Wähle flaches Wasser mit sicherem Ausstieg. **Erkunde den Grund und kehre ans Ufer zurück**, bevor die Luft knapp wird. Vergleiche das Gelände mit dem Ufer."
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
    "genres": [],
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
    "genres": [],
    "translations": {
      "en": {
        "name": "After the Dodge",
        "objective": "Open a **game with repeatable boss fights**. Choose a solo boss you have reached. **Hit just after dodging one familiar attack**. Beat the boss or stop after three attempts.",
        "gameObjective": "Open **{{game}}**. Choose a solo boss you have reached. **Hit just after dodging one familiar attack**. Beat the boss or stop after three attempts."
      },
      "de": {
        "name": "Nach dem Ausweichen",
        "objective": "Starte ein **Spiel mit wiederholbaren Bosskämpfen**. Wähle einen bereits erreichten Solo-Boss. **Triff direkt nach dem Ausweichen vor einem bekannten Angriff**. Besiege den Boss oder hör nach drei Versuchen auf.",
        "gameObjective": "Starte **{{game}}**. Wähle einen bereits erreichten Solo-Boss. **Triff direkt nach dem Ausweichen vor einem bekannten Angriff**. Besiege den Boss oder hör nach drei Versuchen auf."
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
    "genres": [],
    "translations": {
      "en": {
        "name": "The Rematch",
        "objective": "Open a **game with repeatable boss fights**. Return to an available boss that once gave you trouble. **Try the rematch with your current gear and skills**. Stop between attempts whenever you like.",
        "gameObjective": "Open **{{game}}**. Return to an available boss that once gave you trouble. **Try the rematch with your current gear and skills**. Stop between attempts whenever you like."
      },
      "de": {
        "name": "Das Wiedersehen",
        "objective": "Starte ein **Spiel mit wiederholbaren Bosskämpfen**. Kehre zu einem verfügbaren Boss zurück, der dir früher Probleme machte. **Probiere ihn mit deiner heutigen Ausrüstung und Erfahrung**. Hör zwischen Versuchen auf, wann du möchtest.",
        "gameObjective": "Starte **{{game}}**. Kehre zu einem verfügbaren Boss zurück, der dir früher Probleme machte. **Probiere ihn mit deiner heutigen Ausrüstung und Erfahrung**. Hör zwischen Versuchen auf, wann du möchtest."
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
    "genres": [],
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
    "genres": [],
    "translations": {
      "en": {
        "name": "Old Hiding Places",
        "objective": "Open a **stealth game**. Return to a guarded area you remember. **Revisit your old hiding places and patrol gaps**. Let the route come back as you play.",
        "gameObjective": "Open **{{game}}**. Return to a guarded area you remember. **Revisit your old hiding places and patrol gaps**. Let the route come back as you play."
      },
      "de": {
        "name": "Alte Verstecke",
        "objective": "Starte ein **Schleichspiel**. Kehre in einen vertrauten bewachten Bereich zurück. **Besuche alte Verstecke und Lücken in den Patrouillen**. Lass dir den Weg beim Spielen wieder einfallen.",
        "gameObjective": "Starte **{{game}}**. Kehre in einen vertrauten bewachten Bereich zurück. **Besuche alte Verstecke und Lücken in den Patrouillen**. Lass dir den Weg beim Spielen wieder einfallen."
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
    "genres": [],
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
    "genres": [],
    "translations": {
      "en": {
        "name": "Rules You Know",
        "objective": "Open a **puzzle game**. Choose familiar rules and a comfortable difficulty. **Settle into solving**, using hints and undo freely. No puzzle count to reach.",
        "gameObjective": "Open **{{game}}**. Choose familiar rules and a comfortable difficulty. **Settle into solving**, using hints and undo freely. No puzzle count to reach."
      },
      "de": {
        "name": "Bekannte Regeln",
        "objective": "Starte ein **Rätselspiel**. Wähle vertraute Regeln und eine angenehme Schwierigkeit. **Löse in Ruhe**, mit Hinweisen und Rückgängig nach Bedarf. Keine feste Rätselanzahl.",
        "gameObjective": "Starte **{{game}}**. Wähle vertraute Regeln und eine angenehme Schwierigkeit. **Löse in Ruhe**, mit Hinweisen und Rückgängig nach Bedarf. Keine feste Rätselanzahl."
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
    "genres": [],
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
    "genres": [],
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
    "genres": [],
    "translations": {
      "en": {
        "name": "Made for a Job",
        "objective": "Open a **game with craftable tools or consumables**. Choose an unlocked recipe with owned materials and a use nearby. **Craft the item and use it once**.",
        "gameObjective": "Open **{{game}}**. Choose an unlocked recipe with owned materials and a use nearby. **Craft the item and use it once**."
      },
      "de": {
        "name": "Für einen Zweck",
        "objective": "Starte ein **Spiel mit herstellbaren Werkzeugen oder Verbrauchsitems**. Wähle ein freigeschaltetes Rezept mit vorhandenen Materialien und einem Einsatzzweck in der Nähe. **Stelle das Item her und nutze es einmal**.",
        "gameObjective": "Starte **{{game}}**. Wähle ein freigeschaltetes Rezept mit vorhandenen Materialien und einem Einsatzzweck in der Nähe. **Stelle das Item her und nutze es einmal**."
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
    "genres": [],
    "translations": {
      "en": {
        "name": "At the Workbench",
        "objective": "Open a **game with crafting**. Browse recipes using materials already in storage. **Let your supplies guide what you make** for the way you like to play.",
        "gameObjective": "Open **{{game}}**. Browse recipes using materials already in storage. **Let your supplies guide what you make** for the way you like to play."
      },
      "de": {
        "name": "An der Werkbank",
        "objective": "Starte ein **Spiel mit Crafting**. Schau dir Rezepte mit bereits vorhandenen Materialien an. **Lass deine Vorräte bestimmen, was du herstellst**, passend zu deiner Spielweise.",
        "gameObjective": "Starte **{{game}}**. Schau dir Rezepte mit bereits vorhandenen Materialien an. **Lass deine Vorräte bestimmen, was du herstellst**, passend zu deiner Spielweise."
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
    "genres": [],
    "translations": {
      "en": {
        "name": "Your Fishing Spot",
        "objective": "Open a **game with fishing**. Return to a fishing spot you remember. **Cast with your usual rod and bait** and take the catches as they come.",
        "gameObjective": "Open **{{game}}**. Return to a fishing spot you remember. **Cast with your usual rod and bait** and take the catches as they come."
      },
      "de": {
        "name": "Dein Angelplatz",
        "objective": "Starte ein **Spiel mit Angeln**. Kehre zu einem vertrauten Angelplatz zurück. **Wirf mit deiner üblichen Angel und deinem Köder aus** und nimm die Fänge, wie sie kommen.",
        "gameObjective": "Starte **{{game}}**. Kehre zu einem vertrauten Angelplatz zurück. **Wirf mit deiner üblichen Angel und deinem Köder aus** und nimm die Fänge, wie sie kommen."
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
    "genres": [],
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
    "genres": [],
    "translations": {
      "en": {
        "name": "Food for the Road",
        "objective": "Open a **game with cooking**. Use a known recipe and owned ingredients to **cook one edible portion**. Eat it during play when its effect helps.",
        "gameObjective": "Open **{{game}}**. Use a known recipe and owned ingredients to **cook one edible portion**. Eat it during play when its effect helps."
      },
      "de": {
        "name": "Proviant",
        "objective": "Starte ein **Spiel mit Kochen**. Koche mit einem bekannten Rezept und vorhandenen Zutaten **eine essbare Portion**. Iss sie beim Spielen, wenn ihre Wirkung hilft.",
        "gameObjective": "Starte **{{game}}**. Koche mit einem bekannten Rezept und vorhandenen Zutaten **eine essbare Portion**. Iss sie beim Spielen, wenn ihre Wirkung hilft."
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
    "genres": [],
    "translations": {
      "en": {
        "name": "Back in the Kitchen",
        "objective": "Open a **game with cooking**. Return to a familiar kitchen with ingredients already on hand. **Make old favorite dishes** without searching for new recipes.",
        "gameObjective": "Open **{{game}}**. Return to a familiar kitchen with ingredients already on hand. **Make old favorite dishes** without searching for new recipes."
      },
      "de": {
        "name": "Zurück in die Küche",
        "objective": "Starte ein **Spiel mit Kochen**. Kehre mit vorhandenen Zutaten in eine vertraute Küche zurück. **Koche alte Lieblingsgerichte**, ohne nach neuen Rezepten zu suchen.",
        "gameObjective": "Starte **{{game}}**. Kehre mit vorhandenen Zutaten in eine vertraute Küche zurück. **Koche alte Lieblingsgerichte**, ohne nach neuen Rezepten zu suchen."
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
    "genres": [],
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
    "genres": [],
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
    "genres": [],
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
    "genres": [],
    "translations": {
      "en": {
        "name": "The Old Neighborhood",
        "objective": "Open a **game with free driving**. Take an old favorite vehicle to a familiar district or road. **Drive the old routes again** and follow the turns you remember.",
        "gameObjective": "Open **{{game}}**. Take an old favorite vehicle to a familiar district or road. **Drive the old routes again** and follow the turns you remember."
      },
      "de": {
        "name": "Die alte Gegend",
        "objective": "Starte ein **Spiel mit freien Autofahrten**. Fahre mit einem Lieblingsfahrzeug von früher in eine vertraute Gegend. **Fahr die alten Wege wieder** und folge bekannten Abzweigungen.",
        "gameObjective": "Starte **{{game}}**. Fahre mit einem Lieblingsfahrzeug von früher in eine vertraute Gegend. **Fahr die alten Wege wieder** und folge bekannten Abzweigungen."
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
    "genres": [],
    "translations": {
      "en": {
        "name": "By Landmarks",
        "objective": "Open a **game with free driving**. Choose two nearby places visible from the road. **Drive between them without a navigation waypoint**. Find your way back from any wrong turns.",
        "gameObjective": "Open **{{game}}**. Choose two nearby places visible from the road. **Drive between them without a navigation waypoint**. Find your way back from any wrong turns."
      },
      "de": {
        "name": "Nach Orientierungspunkten",
        "objective": "Starte ein **Spiel mit freien Autofahrten**. Wähle zwei nahe, von der Straße erkennbare Orte. **Fahre ohne Navigationspunkt von einem zum anderen**. Finde nach falschen Abzweigungen selbst wieder zurück.",
        "gameObjective": "Starte **{{game}}**. Wähle zwei nahe, von der Straße erkennbare Orte. **Fahre ohne Navigationspunkt von einem zum anderen**. Finde nach falschen Abzweigungen selbst wieder zurück."
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
    "genres": [],
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
    "genres": [],
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
    "genres": [],
    "translations": {
      "en": {
        "name": "Keep the Flow",
        "objective": "Open a **game with climbing or movement abilities**. Visit an area suited to a move you enjoy. **Chain routes around that move** and follow the terrain instead of missions.",
        "gameObjective": "Open **{{game}}**. Visit an area suited to a move you enjoy. **Chain routes around that move** and follow the terrain instead of missions."
      },
      "de": {
        "name": "Im Bewegungsfluss",
        "objective": "Starte ein **Spiel mit Klettern oder Bewegungsfähigkeiten**. Besuche einen Bereich für eine Bewegung, die du magst. **Verbinde Wege mit dieser Bewegung** und folge dem Gelände statt Missionen.",
        "gameObjective": "Starte **{{game}}**. Besuche einen Bereich für eine Bewegung, die du magst. **Verbinde Wege mit dieser Bewegung** und folge dem Gelände statt Missionen."
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
    "genres": [],
    "translations": {
      "en": {
        "name": "Two Ways Up",
        "objective": "Open a **game with climbing or movement abilities**. Pick a ledge you can safely revisit. **Reach it by two different routes or moves** and compare the approaches.",
        "gameObjective": "Open **{{game}}**. Pick a ledge you can safely revisit. **Reach it by two different routes or moves** and compare the approaches."
      },
      "de": {
        "name": "Zwei Wege hinauf",
        "objective": "Starte ein **Spiel mit Klettern oder Bewegungsfähigkeiten**. Wähle einen sicher wiederholt erreichbaren Vorsprung. **Erreiche ihn mit zwei verschiedenen Wegen oder Bewegungen** und vergleiche beide.",
        "gameObjective": "Starte **{{game}}**. Wähle einen sicher wiederholt erreichbaren Vorsprung. **Erreiche ihn mit zwei verschiedenen Wegen oder Bewegungen** und vergleiche beide."
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
    "genres": [],
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
    "genres": [],
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
    "genres": [],
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
    "genres": [],
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
    "genres": [],
    "translations": {
      "en": {
        "name": "Your Usual Role",
        "objective": "Open an **online team game**. Take your usual role in a familiar mode and **enjoy playing alongside the team**. Finish each match before deciding whether to continue.",
        "gameObjective": "Open **{{game}}**. Take your usual role in a familiar mode and **enjoy playing alongside the team**. Finish each match before deciding whether to continue."
      },
      "de": {
        "name": "Deine vertraute Rolle",
        "objective": "Starte ein **Online-Teamspiel**. Übernimm deine übliche Rolle in einem vertrauten Modus und **genieße das gemeinsame Spielen**. Beende jedes Match, bevor du weitermachst.",
        "gameObjective": "Starte **{{game}}**. Übernimm deine übliche Rolle in einem vertrauten Modus und **genieße das gemeinsame Spielen**. Beende jedes Match, bevor du weitermachst."
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
    "genres": [],
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
    "genres": [],
    "translations": {
      "en": {
        "name": "The Old Rivalry",
        "objective": "Open a **local multiplayer game**. With an old gaming partner beside you, return to your shared mode. **Trade turns and revive the old rivalry**. Talk between rounds.",
        "gameObjective": "Open **{{game}}**. With an old gaming partner beside you, return to your shared mode. **Trade turns and revive the old rivalry**. Talk between rounds."
      },
      "de": {
        "name": "Die alte Rivalität",
        "objective": "Starte ein **lokales Mehrspielerspiel**. Besuche mit einer früheren Spielbegleitung vor Ort euren gemeinsamen Modus. **Wechselt euch ab und belebt die alte Rivalität wieder**. Redet zwischen den Runden.",
        "gameObjective": "Starte **{{game}}**. Besuche mit einer früheren Spielbegleitung vor Ort euren gemeinsamen Modus. **Wechselt euch ab und belebt die alte Rivalität wieder**. Redet zwischen den Runden."
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
    "genres": [],
    "translations": {
      "en": {
        "name": "One Unvisited Corner",
        "objective": "Open a **freely explorable game with collectibles**. Pick a nearby area with gaps in its collection. Check its side paths and **find one new tracked item**.",
        "gameObjective": "Open **{{game}}**. Pick a nearby area with gaps in its collection. Check its side paths and **find one new tracked item**."
      },
      "de": {
        "name": "Eine neue Ecke",
        "objective": "Starte ein **frei erkundbares Spiel mit Sammelobjekten**. Wähle ein nahes Gebiet mit Lücken in seiner Sammlung. Suche an Seitenwegen und **finde ein neues erfasstes Item**.",
        "gameObjective": "Starte **{{game}}**. Wähle ein nahes Gebiet mit Lücken in seiner Sammlung. Suche an Seitenwegen und **finde ein neues erfasstes Item**."
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
    "genres": [],
    "translations": {
      "en": {
        "name": "Along the Way",
        "objective": "Open a **game with collectibles**. Play a familiar, forgiving area and **collect what you pass along the way**. Missed items can stay missed today.",
        "gameObjective": "Open **{{game}}**. Play a familiar, forgiving area and **collect what you pass along the way**. Missed items can stay missed today."
      },
      "de": {
        "name": "Am Wegesrand",
        "objective": "Starte ein **Spiel mit Sammelobjekten**. Spiele einen vertrauten, verzeihenden Bereich und **sammle mit, was dir unterwegs begegnet**. Verpasste Items dürfen heute liegen bleiben.",
        "gameObjective": "Starte **{{game}}**. Spiele einen vertrauten, verzeihenden Bereich und **sammle mit, was dir unterwegs begegnet**. Verpasste Items dürfen heute liegen bleiben."
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
    "genres": [],
    "translations": {
      "en": {
        "name": "A Familiar Voice",
        "objective": "Open a **game with replayable dialogue or story entries**. Revisit an old character or story thread. **Read or listen for forgotten details** without chasing the next objective.",
        "gameObjective": "Open **{{game}}**. Revisit an old character or story thread. **Read or listen for forgotten details** without chasing the next objective."
      },
      "de": {
        "name": "Eine vertraute Stimme",
        "objective": "Starte ein **Spiel mit wiederholbaren Dialogen oder Storyeinträgen**. Besuche eine Figur oder einen Erzählstrang von früher wieder. **Lies oder hör auf vergessene Details**, ohne das nächste Ziel zu verfolgen.",
        "gameObjective": "Starte **{{game}}**. Besuche eine Figur oder einen Erzählstrang von früher wieder. **Lies oder hör auf vergessene Details**, ohne das nächste Ziel zu verfolgen."
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
    "genres": [],
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
    "genres": [],
    "translations": {
      "en": {
        "name": "One Shelf Clear",
        "objective": "Open a **game with merchants**. Choose one category at a merchant who buys your items. **Sell its unwanted supplies**, keeping equipment and quest items you still need.",
        "gameObjective": "Open **{{game}}**. Choose one category at a merchant who buys your items. **Sell its unwanted supplies**, keeping equipment and quest items you still need."
      },
      "de": {
        "name": "Ein Fach frei",
        "objective": "Starte ein **Spiel mit Händlern**. Wähle bei einem Händler eine Item-Kategorie, die er ankauft. **Verkaufe ihre überflüssigen Vorräte**. Behalte benötigte Ausrüstung und Questitems.",
        "gameObjective": "Starte **{{game}}**. Wähle bei einem Händler eine Item-Kategorie, die er ankauft. **Verkaufe ihre überflüssigen Vorräte**. Behalte benötigte Ausrüstung und Questitems."
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
    "genres": [],
    "translations": {
      "en": {
        "name": "From Hunt to Market",
        "objective": "Open a **game with hunting and merchants**. Near a merchant who buys animal materials, hunt one spotted animal your gear can handle. **Collect and sell its materials**.",
        "gameObjective": "Open **{{game}}**. Near a merchant who buys animal materials, hunt one spotted animal your gear can handle. **Collect and sell its materials**."
      },
      "de": {
        "name": "Von der Jagd zum Markt",
        "objective": "Starte ein **Spiel mit Jagd und Händlern**. Erlege nahe einem Händler für Tiermaterialien ein gesichtetes Tier, das du mit deiner Ausrüstung bewältigen kannst. **Sammle und verkaufe sein Material**.",
        "gameObjective": "Starte **{{game}}**. Erlege nahe einem Händler für Tiermaterialien ein gesichtetes Tier, das du mit deiner Ausrüstung bewältigen kannst. **Sammle und verkaufe sein Material**."
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
    "genres": [],
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
    "genres": [],
    "translations": {
      "en": {
        "name": "Two Directions",
        "objective": "Open a **game with commandable animal combat companions**. In a solo encounter, send your companion toward an enemy while you approach from another direction. **Finish the fight and observe which way the enemy turned**.",
        "gameObjective": "In **{{game}}**: In a solo encounter, send your companion toward an enemy while you approach from another direction. **Finish the fight and observe which way the enemy turned**."
      },
      "de": {
        "name": "Zwei Richtungen",
        "objective": "Starte ein **Spiel mit befehligbaren Tierbegleitern im Kampf**. Schicke deinen Tierbegleiter in einer Solo-Begegnung auf einen Gegner zu, während du dich aus einer anderen Richtung näherst. **Beende den Kampf und beobachte, wohin sich der Gegner wendet**.",
        "gameObjective": "In **{{game}}**: Schicke deinen Tierbegleiter in einer Solo-Begegnung auf einen Gegner zu, während du dich aus einer anderen Richtung näherst. **Beende den Kampf und beobachte, wohin sich der Gegner wendet**."
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
    "genres": [],
    "translations": {
      "en": {
        "name": "Your Old Companion",
        "objective": "Open a **game with an animal combat companion you have used before**. Bring that already available companion back into your party. **Return to ordinary encounters together** and use the commands you remember.",
        "gameObjective": "In **{{game}}**: Bring that already available companion back into your party. **Return to ordinary encounters together** and use the commands you remember."
      },
      "de": {
        "name": "Dein alter Begleiter",
        "objective": "Starte ein **Spiel mit einem Tierkampfgefährten, den du früher genutzt hast**. Nimm diesen bereits verfügbaren Tiergefährten wieder mit. **Kehre mit ihm in normale Begegnungen zurück** und nutze die Befehle, die du noch kennst.",
        "gameObjective": "In **{{game}}**: Nimm diesen bereits verfügbaren Tiergefährten wieder mit. **Kehre mit ihm in normale Begegnungen zurück** und nutze die Befehle, die du noch kennst."
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
    "genres": [],
    "translations": {
      "en": {
        "name": "A Spot to Skate",
        "objective": "Open a **skating game with grinds and flip tricks**. Find a ledge, rail, or bank you have not spent much time on. **Build your skating session around that spot** and try the approaches its shape suggests.",
        "gameObjective": "In **{{game}}**: Find a ledge, rail, or bank you have not spent much time on. **Build your skating session around that spot** and try the approaches its shape suggests."
      },
      "de": {
        "name": "Ein Spot zum Skaten",
        "objective": "Starte ein **Skatespiel mit Grinds und Flip-Tricks**. Such eine Kante, ein Geländer oder eine Schräge, an der du selten gefahren bist. **Mach diesen Spot zum Mittelpunkt deiner Session** und probiere Anfahrten aus, die seine Form nahelegt.",
        "gameObjective": "In **{{game}}**: Such eine Kante, ein Geländer oder eine Schräge, an der du selten gefahren bist. **Mach diesen Spot zum Mittelpunkt deiner Session** und probiere Anfahrten aus, die seine Form nahelegt."
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
    "genres": [],
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
    "genres": [],
    "translations": {
      "en": {
        "name": "Flip to Rail",
        "objective": "Open a **skating game with grinds and flip tricks**. At a familiar low rail, **link a flip trick into a grind and roll away without falling**. Give yourself three attempts; the third attempt also ends the session.",
        "gameObjective": "In **{{game}}**: At a familiar low rail, **link a flip trick into a grind and roll away without falling**. Give yourself three attempts; the third attempt also ends the session."
      },
      "de": {
        "name": "Flip aufs Rail",
        "objective": "Starte ein **Skatespiel mit Grinds und Flip-Tricks**. Verbinde an einem vertrauten niedrigen Geländer **einen Flip-Trick mit einem Grind und rolle ohne Sturz weiter**. Du hast drei Versuche; der dritte beendet die Session ebenfalls.",
        "gameObjective": "In **{{game}}**: Verbinde an einem vertrauten niedrigen Geländer **einen Flip-Trick mit einem Grind und rolle ohne Sturz weiter**. Du hast drei Versuche; der dritte beendet die Session ebenfalls."
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
    "genres": [],
    "translations": {
      "en": {
        "name": "A Friendly Fixture",
        "objective": "Open a **sports game with CPU opponents**. Choose a familiar team and a comfortable CPU difficulty. **Play for the rhythm of the game**, taking scoring chances as they come without requiring a win.",
        "gameObjective": "In **{{game}}**: Choose a familiar team and a comfortable CPU difficulty. **Play for the rhythm of the game**, taking scoring chances as they come without requiring a win."
      },
      "de": {
        "name": "Ein lockeres Spiel",
        "objective": "Starte ein **Sportspiel mit CPU-Gegnern**. Wähle ein vertrautes Team und einen angenehmen CPU-Schwierigkeitsgrad. **Lass dich auf den Spielrhythmus ein** und nutze Torchancen, ohne einen Sieg vorauszusetzen.",
        "gameObjective": "In **{{game}}**: Wähle ein vertrautes Team und einen angenehmen CPU-Schwierigkeitsgrad. **Lass dich auf den Spielrhythmus ein** und nutze Torchancen, ohne einen Sieg vorauszusetzen."
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
    "genres": [],
    "translations": {
      "en": {
        "name": "Pass Before the Shot",
        "objective": "Open a **sports game with controllable teammates and CPU opponents**. In a CPU match with controllable teammates, try setting up your shots with a pass. **Complete the match after using that approach**, regardless of how many shots score.",
        "gameObjective": "In **{{game}}**: In a CPU match with controllable teammates, try setting up your shots with a pass. **Complete the match after using that approach**, regardless of how many shots score."
      },
      "de": {
        "name": "Pass vor dem Schuss",
        "objective": "Starte ein **Sportspiel mit steuerbaren Mitspielern und CPU-Gegnern**. Versuche in einem CPU-Match mit steuerbaren Mitspielern, deine Schüsse durch einen Pass vorzubereiten. **Beende das Match, nachdem du diesen Ansatz genutzt hast**, unabhängig von der Zahl der Tore.",
        "gameObjective": "In **{{game}}**: Versuche in einem CPU-Match mit steuerbaren Mitspielern, deine Schüsse durch einen Pass vorzubereiten. **Beende das Match, nachdem du diesen Ansatz genutzt hast**, unabhängig von der Zahl der Tore."
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
    "genres": [],
    "translations": {
      "en": {
        "name": "The Route You Know",
        "objective": "Open a **game with solo extraction runs**. Start a solo run on a map with an extraction route you know. Loot along that route and **reach extraction or finish the run if you are eliminated**. Avoid extending the route for extra loot.",
        "gameObjective": "In **{{game}}**: Start a solo run on a map with an extraction route you know. Loot along that route and **reach extraction or finish the run if you are eliminated**. Avoid extending the route for extra loot."
      },
      "de": {
        "name": "Die bekannte Route",
        "objective": "Starte ein **Spiel mit Solo-Extraktionsrunden**. Starte eine Solo-Runde auf einer Karte mit einem bekannten Extraktionsweg. Plündere entlang dieser Route und **erreiche die Extraktion oder beende die Runde, falls du ausscheidest**. Verlängere den Weg nicht für zusätzliche Beute.",
        "gameObjective": "In **{{game}}**: Starte eine Solo-Runde auf einer Karte mit einem bekannten Extraktionsweg. Plündere entlang dieser Route und **erreiche die Extraktion oder beende die Runde, falls du ausscheidest**. Verlängere den Weg nicht für zusätzliche Beute."
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
    "genres": [],
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
    "genres": [],
    "translations": {
      "en": {
        "name": "The Next Checkpoint",
        "objective": "Open a **platformer with checkpoints**. On a level with checkpoints, continue from your current position and **activate the next checkpoint**. Use retries and available assists; leave the rest of the level for later.",
        "gameObjective": "In **{{game}}**: On a level with checkpoints, continue from your current position and **activate the next checkpoint**. Use retries and available assists; leave the rest of the level for later."
      },
      "de": {
        "name": "Der nächste Checkpoint",
        "objective": "Starte ein **Plattformer mit Checkpoints**. Setze ein Level mit Checkpoints an deiner aktuellen Position fort und **aktiviere den nächsten Checkpoint**. Wiederholungen und verfügbare Hilfen sind erlaubt; der Rest des Levels kommt später.",
        "gameObjective": "In **{{game}}**: Setze ein Level mit Checkpoints an deiner aktuellen Position fort und **aktiviere den nächsten Checkpoint**. Wiederholungen und verfügbare Hilfen sind erlaubt; der Rest des Levels kommt später."
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
    "genres": [],
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
    "genres": [],
    "translations": {
      "en": {
        "name": "Pick Your Landing",
        "objective": "Open a **game with platforming obstacles**. Choose a jump you can safely repeat. Land near one edge of the destination platform, then repeat toward its middle. **Complete both landings and compare the room left for the next jump**.",
        "gameObjective": "In **{{game}}**: Choose a jump you can safely repeat. Land near one edge of the destination platform, then repeat toward its middle. **Complete both landings and compare the room left for the next jump**."
      },
      "de": {
        "name": "Den Landepunkt wählen",
        "objective": "Starte ein **Spiel mit Sprunghindernissen**. Wähle einen sicher wiederholbaren Sprung. Lande einmal nahe am Rand der Zielplattform und einmal eher in ihrer Mitte. **Schaffe beide Landungen und vergleiche den Platz für den nächsten Sprung**.",
        "gameObjective": "In **{{game}}**: Wähle einen sicher wiederholbaren Sprung. Lande einmal nahe am Rand der Zielplattform und einmal eher in ihrer Mitte. **Schaffe beide Landungen und vergleiche den Platz für den nächsten Sprung**."
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
    "genres": [],
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
    "genres": [],
    "translations": {
      "en": {
        "name": "The Rhythm Returns",
        "objective": "Open a **game with familiar platforming areas**. Return to a forgiving level or route whose jumps you remember. **Enjoy moving through familiar terrain**, using retries or assists freely and ignoring completion percentages.",
        "gameObjective": "In **{{game}}**: Return to a forgiving level or route whose jumps you remember. **Enjoy moving through familiar terrain**, using retries or assists freely and ignoring completion percentages."
      },
      "de": {
        "name": "Der Rhythmus kommt zurück",
        "objective": "Starte ein **Spiel mit vertrauten Sprungpassagen**. Kehre zu einem verzeihenden Level oder Weg zurück, dessen Sprünge du noch kennst. **Genieße die Bewegung durch vertrautes Gelände**, mit Wiederholungen oder Hilfen und ohne auf Abschlussprozente zu achten.",
        "gameObjective": "In **{{game}}**: Kehre zu einem verzeihenden Level oder Weg zurück, dessen Sprünge du noch kennst. **Genieße die Bewegung durch vertrautes Gelände**, mit Wiederholungen oder Hilfen und ohne auf Abschlussprozente zu achten."
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
    "genres": [],
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
    "genres": [],
    "translations": {
      "en": {
        "name": "One New Tool",
        "objective": "Open a **game with selectable characters and abilities**. In solo, training, or bot play, choose an unlocked character you rarely use. **Use one of their unfamiliar abilities during a complete encounter**, then notice when it was useful.",
        "gameObjective": "In **{{game}}**: In solo, training, or bot play, choose an unlocked character you rarely use. **Use one of their unfamiliar abilities during a complete encounter**, then notice when it was useful."
      },
      "de": {
        "name": "Ein neues Werkzeug",
        "objective": "Starte ein **Spiel mit auswählbaren Figuren und Fähigkeiten**. Wähle im Solo-, Trainings- oder Bot-Spiel eine freigeschaltete Figur, die du selten nutzt. **Setze in einer vollständigen Begegnung eine ihrer ungewohnten Fähigkeiten ein** und achte darauf, wann sie geholfen hat.",
        "gameObjective": "In **{{game}}**: Wähle im Solo-, Trainings- oder Bot-Spiel eine freigeschaltete Figur, die du selten nutzt. **Setze in einer vollständigen Begegnung eine ihrer ungewohnten Fähigkeiten ein** und achte darauf, wann sie geholfen hat."
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
    "genres": [],
    "translations": {
      "en": {
        "name": "Your Own Sequence",
        "objective": "Open a **game with selectable character abilities**. In solo or bot play, choose two available actions or abilities your character can chain. **Use your chosen sequence during one encounter and finish it**, adjusting the timing as you play.",
        "gameObjective": "In **{{game}}**: In solo or bot play, choose two available actions or abilities your character can chain. **Use your chosen sequence during one encounter and finish it**, adjusting the timing as you play."
      },
      "de": {
        "name": "Deine eigene Abfolge",
        "objective": "Starte ein **Spiel mit wählbaren Figurenfähigkeiten**. Wähle im Solo-Spiel oder gegen Bots zwei Aktionen oder Fähigkeiten, die deine Figur verbinden kann. **Setze deine Abfolge in einer Begegnung ein und beende sie**. Passe das Timing beim Spielen an.",
        "gameObjective": "In **{{game}}**: Wähle im Solo-Spiel oder gegen Bots zwei Aktionen oder Fähigkeiten, die deine Figur verbinden kann. **Setze deine Abfolge in einer Begegnung ein und beende sie**. Passe das Timing beim Spielen an."
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
    "genres": [],
    "translations": {
      "en": {
        "name": "Comfort Pick",
        "objective": "Open a **game with selectable characters and a forgiving mode**. Choose your most familiar character in a forgiving mode you already use. **Play with the abilities you know**, without comparing the whole roster or chasing a performance target. Finish each match normally.",
        "gameObjective": "In **{{game}}**: Choose your most familiar character in a forgiving mode you already use. **Play with the abilities you know**, without comparing the whole roster or chasing a performance target. Finish each match normally."
      },
      "de": {
        "name": "Vertraute Wahl",
        "objective": "Starte ein **Spiel mit wählbaren Figuren und einem verzeihenden Modus**. Wähle deine vertrauteste Figur in einem bereits bekannten, verzeihenden Modus. **Spiele mit den Fähigkeiten, die du kennst**, ohne den ganzen Kader zu vergleichen oder ein Leistungsziel zu verfolgen. Beende jedes Match regulär.",
        "gameObjective": "In **{{game}}**: Wähle deine vertrauteste Figur in einem bereits bekannten, verzeihenden Modus. **Spiele mit den Fähigkeiten, die du kennst**, ohne den ganzen Kader zu vergleichen oder ein Leistungsziel zu verfolgen. Beende jedes Match regulär."
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
    "genres": [],
    "translations": {
      "en": {
        "name": "A Useful Ability",
        "objective": "Open a **online team game with character abilities**. Choose an unlocked character whose abilities can help a teammate, such as protection, healing, or information. **Use that help during one complete match**, playing toward the team’s objective throughout.",
        "gameObjective": "In **{{game}}**: Choose an unlocked character whose abilities can help a teammate, such as protection, healing, or information. **Use that help during one complete match**, playing toward the team’s objective throughout."
      },
      "de": {
        "name": "Eine hilfreiche Fähigkeit",
        "objective": "Starte ein **Online-Teamspiel mit Figurenfähigkeiten**. Wähle eine freigeschaltete Figur, deren Fähigkeiten einem Mitspieler helfen können, etwa durch Schutz, Heilung oder Informationen. **Setze diese Hilfe in einem vollständigen Match ein** und spiele durchgehend für das Teamziel.",
        "gameObjective": "In **{{game}}**: Wähle eine freigeschaltete Figur, deren Fähigkeiten einem Mitspieler helfen können, etwa durch Schutz, Heilung oder Informationen. **Setze diese Hilfe in einem vollständigen Match ein** und spiele durchgehend für das Teamziel."
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
    "genres": [],
    "translations": {
      "en": {
        "name": "Watch the Crossing",
        "objective": "Open a **shooter with round-based matches**. During a match, choose a crossing relevant to your team’s objective. **Cover it from a useful position and adapt when the team moves**. Finish the match; a kill is not required.",
        "gameObjective": "In **{{game}}**: During a match, choose a crossing relevant to your team’s objective. **Cover it from a useful position and adapt when the team moves**. Finish the match; a kill is not required."
      },
      "de": {
        "name": "Den Durchgang sichern",
        "objective": "Starte ein **Shooter mit rundenbasierten Matches**. Wähle in einem Match einen für euer Ziel wichtigen Durchgang. **Sichere ihn aus einer geeigneten Position und passe dich an, wenn dein Team weiterzieht**. Beende das Match; ein Abschuss ist nicht nötig.",
        "gameObjective": "In **{{game}}**: Wähle in einem Match einen für euer Ziel wichtigen Durchgang. **Sichere ihn aus einer geeigneten Position und passe dich an, wenn dein Team weiterzieht**. Beende das Match; ein Abschuss ist nicht nötig."
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
    "genres": [],
    "translations": {
      "en": {
        "name": "Look Before Breaching",
        "objective": "Open a **shooter with scouting tools and breaching gadgets**. In solo, training, or bot play where you can scout and open a route, inspect the other side first. **Use an available breaching gadget, move through the opening, and finish the encounter**.",
        "gameObjective": "In **{{game}}**: In solo, training, or bot play where you can scout and open a route, inspect the other side first. **Use an available breaching gadget, move through the opening, and finish the encounter**."
      },
      "de": {
        "name": "Vor dem Öffnen schauen",
        "objective": "Starte ein **Shooter mit Aufklärungswerkzeugen und Breach-Gadgets**. In einem Solo-, Trainings- oder Bot-Modus, in dem du einen Weg aufklären und öffnen kannst: Schau zuerst auf die andere Seite. **Nutze ein verfügbares Breach-Gadget, geh durch die Öffnung und beende die Begegnung**.",
        "gameObjective": "In **{{game}}**: In einem Solo-, Trainings- oder Bot-Modus, in dem du einen Weg aufklären und öffnen kannst: Schau zuerst auf die andere Seite. **Nutze ein verfügbares Breach-Gadget, geh durch die Öffnung und beende die Begegnung**."
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
    "genres": [],
    "translations": {
      "en": {
        "name": "Protect the Route",
        "objective": "Open a **game with protective or route-blocking gadgets**. Where your loadout includes a protective or blocking gadget, place it to cover a route relevant to the objective. **Play out the encounter using that setup**, moving or replacing it only if the situation needs it.",
        "gameObjective": "In **{{game}}**: Where your loadout includes a protective or blocking gadget, place it to cover a route relevant to the objective. **Play out the encounter using that setup**, moving or replacing it only if the situation needs it."
      },
      "de": {
        "name": "Den Weg schützen",
        "objective": "Starte ein **Spiel mit schützenden oder wegsperrenden Gadgets**. Wenn dein Loadout ein schützendes oder wegsperrendes Gadget enthält, platziere es an einem für das Ziel wichtigen Weg. **Spiele die Begegnung mit diesem Aufbau zu Ende**. Versetze oder ersetze es, wenn die Situation es verlangt.",
        "gameObjective": "In **{{game}}**: Wenn dein Loadout ein schützendes oder wegsperrendes Gadget enthält, platziere es an einem für das Ziel wichtigen Weg. **Spiele die Begegnung mit diesem Aufbau zu Ende**. Versetze oder ersetze es, wenn die Situation es verlangt."
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
    "genres": [],
    "translations": {
      "en": {
        "name": "Placement Matters",
        "objective": "Open a **game with placeable tactical gadgets**. In solo, training, or bot play with a placeable gadget, try it in two different positions. **Play an encounter from each setup and compare the space it protects or controls**.",
        "gameObjective": "In **{{game}}**: In solo, training, or bot play with a placeable gadget, try it in two different positions. **Play an encounter from each setup and compare the space it protects or controls**."
      },
      "de": {
        "name": "Der Platz zählt",
        "objective": "Starte ein **Spiel mit platzierbaren taktischen Gadgets**. Probiere im Solo-, Trainings- oder Bot-Spiel ein platzierbares Gadget an zwei Positionen aus. **Spiele mit jedem Aufbau eine Begegnung und vergleiche den geschützten oder kontrollierten Bereich**.",
        "gameObjective": "In **{{game}}**: Probiere im Solo-, Trainings- oder Bot-Spiel ein platzierbares Gadget an zwei Positionen aus. **Spiele mit jedem Aufbau eine Begegnung und vergleiche den geschützten oder kontrollierten Bereich**."
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
    "genres": [],
    "translations": {
      "en": {
        "name": "Help the Entry",
        "objective": "Open a **online game with tactical gadgets**. Choose an available gadget that can open, block, or protect a route for your team. **Use it to support the team’s approach and stay through the match**, adapting if the plan changes.",
        "gameObjective": "In **{{game}}**: Choose an available gadget that can open, block, or protect a route for your team. **Use it to support the team’s approach and stay through the match**, adapting if the plan changes."
      },
      "de": {
        "name": "Den Einstieg erleichtern",
        "objective": "Starte ein **Onlinespiel mit taktischen Gadgets**. Wähle ein verfügbares Gadget, das deinem Team einen Weg öffnen, sperren oder schützen kann. **Unterstütze damit euer Vorgehen und bleib bis zum Matchende dabei**. Passe dich an, wenn sich der Plan ändert.",
        "gameObjective": "In **{{game}}**: Wähle ein verfügbares Gadget, das deinem Team einen Weg öffnen, sperren oder schützen kann. **Unterstütze damit euer Vorgehen und bleib bis zum Matchende dabei**. Passe dich an, wenn sich der Plan ändert."
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
    "genres": [],
    "translations": {
      "en": {
        "name": "A Different View",
        "objective": "Open a **game with cameras or controllable scouting drones**. In a solo or training area with cameras or a controllable drone, inspect a room from two positions. **Find an approach visible from one view but hidden from the other, then try that approach**.",
        "gameObjective": "In **{{game}}**: In a solo or training area with cameras or a controllable drone, inspect a room from two positions. **Find an approach visible from one view but hidden from the other, then try that approach**."
      },
      "de": {
        "name": "Ein anderer Blick",
        "objective": "Starte ein **Spiel mit Kameras oder steuerbaren Aufklärungsdrohnen**. Untersuche in einem Solo- oder Trainingsbereich mit Kameras oder einer steuerbaren Drohne einen Raum aus zwei Positionen. **Suche einen nur aus einer Sicht erkennbaren Zugang und probiere ihn aus**.",
        "gameObjective": "In **{{game}}**: Untersuche in einem Solo- oder Trainingsbereich mit Kameras oder einer steuerbaren Drohne einen Raum aus zwei Positionen. **Suche einen nur aus einer Sicht erkennbaren Zugang und probiere ihn aus**."
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
    "genres": [],
    "translations": {
      "en": {
        "name": "Useful Information",
        "objective": "Open a **online team game with scouting tools**. Use an available camera, drone, or vision ward to check an objective route. **Share useful information through the game’s available team signals or chat**, then stay through the match.",
        "gameObjective": "In **{{game}}**: Use an available camera, drone, or vision ward to check an objective route. **Share useful information through the game’s available team signals or chat**, then stay through the match."
      },
      "de": {
        "name": "Nützliche Information",
        "objective": "Starte ein **Online-Teamspiel mit Aufklärungswerkzeugen**. Prüfe mit einer verfügbaren Kamera, Drohne oder einem Sicht-Totem einen Weg zum Ziel. **Teile nützliche Informationen über die verfügbaren Teamsignale oder den Chat** und bleib bis zum Matchende dabei.",
        "gameObjective": "In **{{game}}**: Prüfe mit einer verfügbaren Kamera, Drohne oder einem Sicht-Totem einen Weg zum Ziel. **Teile nützliche Informationen über die verfügbaren Teamsignale oder den Chat** und bleib bis zum Matchende dabei."
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
    "genres": [],
    "translations": {
      "en": {
        "name": "Vision on the Way",
        "objective": "Open a **MOBA with placeable vision wards**. In a match where you have an available vision ward, place it along a relevant approach before joining your team’s next objective. **Play through that objective attempt and finish the match**, whether the team secures it or not.",
        "gameObjective": "In **{{game}}**: In a match where you have an available vision ward, place it along a relevant approach before joining your team’s next objective. **Play through that objective attempt and finish the match**, whether the team secures it or not."
      },
      "de": {
        "name": "Sicht auf dem Weg",
        "objective": "Starte ein **MOBA mit platzierbaren Sicht-Totems**. Platziere in einem Match mit verfügbarem Sicht-Totem dieses an einem wichtigen Zugangsweg, bevor du zum nächsten Teamziel gehst. **Spiele den Versuch mit und beende das Match**, unabhängig davon, ob ihr das Ziel bekommt.",
        "gameObjective": "In **{{game}}**: Platziere in einem Match mit verfügbarem Sicht-Totem dieses an einem wichtigen Zugangsweg, bevor du zum nächsten Teamziel gehst. **Spiele den Versuch mit und beende das Match**, unabhängig davon, ob ihr das Ziel bekommt."
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
    "genres": [],
    "translations": {
      "en": {
        "name": "Check the Way Back",
        "objective": "Open a **game with scouting cameras or drones**. In a solo or training encounter with a scouting camera or drone, inspect a planned route in and a route back. **Travel in and back using what you observed**, then finish the encounter.",
        "gameObjective": "In **{{game}}**: In a solo or training encounter with a scouting camera or drone, inspect a planned route in and a route back. **Travel in and back using what you observed**, then finish the encounter."
      },
      "de": {
        "name": "Den Rückweg prüfen",
        "objective": "Starte ein **Spiel mit Aufklärungskameras oder Drohnen**. Prüfe in einer Solo- oder Trainingsbegegnung mit Kamera oder Drohne einen Hin- und einen Rückweg. **Gehe anhand deiner Beobachtungen hinein und wieder zurück** und beende die Begegnung.",
        "gameObjective": "In **{{game}}**: Prüfe in einer Solo- oder Trainingsbegegnung mit Kamera oder Drohne einen Hin- und einen Rückweg. **Gehe anhand deiner Beobachtungen hinein und wieder zurück** und beende die Begegnung."
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
    "genres": [],
    "translations": {
      "en": {
        "name": "With the Wave",
        "objective": "Open a **MOBA with minion lanes and towers**. In a bot match, move behind your allied minions when approaching a tower. **Contribute to destroying one enemy tower or finish the match if it ends first**. Back away when the minion cover is gone.",
        "gameObjective": "In **{{game}}**: In a bot match, move behind your allied minions when approaching a tower. **Contribute to destroying one enemy tower or finish the match if it ends first**. Back away when the minion cover is gone."
      },
      "de": {
        "name": "Mit der Wave",
        "objective": "Starte ein **MOBA mit Minion-Lanes und Türmen**. Gehe in einem Bot-Match hinter deinen eigenen Minions auf einen Turm zu. **Hilf, einen gegnerischen Turm zu zerstören, oder beende das Match, falls es vorher endet**. Zieh dich zurück, wenn die Minions als Deckung fehlen.",
        "gameObjective": "In **{{game}}**: Gehe in einem Bot-Match hinter deinen eigenen Minions auf einen Turm zu. **Hilf, einen gegnerischen Turm zu zerstören, oder beende das Match, falls es vorher endet**. Zieh dich zurück, wenn die Minions als Deckung fehlen."
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
    "genres": [],
    "translations": {
      "en": {
        "name": "Last-Hit Streak",
        "objective": "Open a **MOBA with last-hit gold and a practice mode**. In a solo practice mode that rewards last hits, **secure the final hit on five lane minions in a row**. Give yourself three streak attempts; the third attempt also ends the session.",
        "gameObjective": "In **{{game}}**: In a solo practice mode that rewards last hits, **secure the final hit on five lane minions in a row**. Give yourself three streak attempts; the third attempt also ends the session."
      },
      "de": {
        "name": "Letzte Treffer",
        "objective": "Starte ein **MOBA mit Gold für letzte Treffer und einem Übungsmodus**. Sichere dir in einem Solo-Übungsmodus mit Belohnungen für letzte Treffer **bei fünf Lane-Minions in Folge den letzten Treffer**. Du hast drei Versuche für die Serie; der dritte beendet die Session ebenfalls.",
        "gameObjective": "In **{{game}}**: Sichere dir in einem Solo-Übungsmodus mit Belohnungen für letzte Treffer **bei fünf Lane-Minions in Folge den letzten Treffer**. Du hast drei Versuche für die Serie; der dritte beendet die Session ebenfalls."
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
    "genres": [],
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
    "genres": [],
    "translations": {
      "en": {
        "name": "Back to Your Lane",
        "objective": "Open a **MOBA with a lane and champion you used to play**. Return to a lane and an available champion you once played often, in a familiar mode. **Revisit the matchups and rhythms you remember**, adjusting to changes as you play. Finish each match normally.",
        "gameObjective": "In **{{game}}**: Return to a lane and an available champion you once played often, in a familiar mode. **Revisit the matchups and rhythms you remember**, adjusting to changes as you play. Finish each match normally."
      },
      "de": {
        "name": "Zurück auf deine Lane",
        "objective": "Starte ein **MOBA mit einer Lane und einem Champion von früher**. Kehre in einem vertrauten Modus zu einer Lane und einem verfügbaren Champion zurück, die du früher oft gespielt hast. **Entdecke vertraute Matchups und Abläufe wieder** und passe dich an Änderungen an. Beende jedes Match regulär.",
        "gameObjective": "In **{{game}}**: Kehre in einem vertrauten Modus zu einer Lane und einem verfügbaren Champion zurück, die du früher oft gespielt hast. **Entdecke vertraute Matchups und Abläufe wieder** und passe dich an Änderungen an. Beende jedes Match regulär."
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
    "genres": [],
    "translations": {
      "en": {
        "name": "Your Starting Time",
        "objective": "Open a **game with replayable time trials**. Choose a short, unlocked timed route with a result screen. **Finish one run and record its time in the game**. Accept mistakes; this run is a reference for later.",
        "gameObjective": "In **{{game}}**: Choose a short, unlocked timed route with a result screen. **Finish one run and record its time in the game**. Accept mistakes; this run is a reference for later."
      },
      "de": {
        "name": "Deine Ausgangszeit",
        "objective": "Starte ein **Spiel mit wiederholbaren Zeitrennen**. Wähle eine kurze, freigeschaltete Zeitstrecke mit Ergebnisanzeige. **Beende einen Lauf und lass seine Zeit im Spiel erfassen**. Fehler sind erlaubt; der Lauf dient später als Vergleich.",
        "gameObjective": "In **{{game}}**: Wähle eine kurze, freigeschaltete Zeitstrecke mit Ergebnisanzeige. **Beende einen Lauf und lass seine Zeit im Spiel erfassen**. Fehler sind erlaubt; der Lauf dient später als Vergleich."
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
    "genres": [],
    "translations": {
      "en": {
        "name": "Where Time Goes",
        "objective": "Open a **game with timed routes and alternative paths**. On an unlocked short time-trial route with a branch, take one path and then the other using the same setup. **Finish both runs and compare the times**; neither has to set a record.",
        "gameObjective": "In **{{game}}**: On an unlocked short time-trial route with a branch, take one path and then the other using the same setup. **Finish both runs and compare the times**; neither has to set a record."
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
    "genres": [],
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
    "genres": [],
    "translations": {
      "en": {
        "name": "A Comfortable Tempo",
        "objective": "Open a **rhythm game with selectable difficulty**. Where you can choose difficulty, play songs you already enjoy on an easy setting or no-fail mode if available. **Play for the music and familiar patterns**, without a combo or score requirement.",
        "gameObjective": "In **{{game}}**: Where you can choose difficulty, play songs you already enjoy on an easy setting or no-fail mode if available. **Play for the music and familiar patterns**, without a combo or score requirement."
      },
      "de": {
        "name": "Angenehmes Tempo",
        "objective": "Starte ein **Rhythmusspiel mit wählbarem Schwierigkeitsgrad**. Wenn du den Schwierigkeitsgrad wählen kannst, spiele vertraute Lieblingssongs auf einer leichten Stufe oder, falls vorhanden, ohne Scheitern. **Spiele für die Musik und bekannte Muster**, ohne Combo- oder Punkteziel.",
        "gameObjective": "In **{{game}}**: Wenn du den Schwierigkeitsgrad wählen kannst, spiele vertraute Lieblingssongs auf einer leichten Stufe oder, falls vorhanden, ohne Scheitern. **Spiele für die Musik und bekannte Muster**, ohne Combo- oder Punkteziel."
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
    "genres": [],
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
    "genres": [],
    "translations": {
      "en": {
        "name": "Fewer Misses",
        "objective": "Open a **rhythm game that counts misses**. Choose a short song with a result screen that counts missed notes. Play it once, then **finish a replay with fewer misses at the same difficulty within three attempts**, or stop after the third result.",
        "gameObjective": "In **{{game}}**: Choose a short song with a result screen that counts missed notes. Play it once, then **finish a replay with fewer misses at the same difficulty within three attempts**, or stop after the third result."
      },
      "de": {
        "name": "Weniger Fehler",
        "objective": "Starte ein **Rhythmusspiel mit Fehleranzeige**. Wähle einen kurzen Song mit einer Ergebnisanzeige für verpasste Noten. Spiele ihn einmal und **schaffe dann bei gleichem Schwierigkeitsgrad innerhalb von drei Wiederholungen weniger Fehler** oder hör nach dem dritten Ergebnis auf.",
        "gameObjective": "In **{{game}}**: Wähle einen kurzen Song mit einer Ergebnisanzeige für verpasste Noten. Spiele ihn einmal und **schaffe dann bei gleichem Schwierigkeitsgrad innerhalb von drei Wiederholungen weniger Fehler** oder hör nach dem dritten Ergebnis auf."
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
    "genres": [],
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
    "genres": [],
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
    "genres": [],
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
    "genres": [],
    "translations": {
      "en": {
        "name": "The Deck You Know",
        "objective": "Open a **card game with a familiar saved deck**. Pick a saved deck you already understand and a forgiving solo or bot mode. **Enjoy its familiar combinations** without rebuilding it or studying new lists.",
        "gameObjective": "In **{{game}}**: Pick a saved deck you already understand and a forgiving solo or bot mode. **Enjoy its familiar combinations** without rebuilding it or studying new lists."
      },
      "de": {
        "name": "Dein vertrautes Deck",
        "objective": "Starte ein **Kartenspiel mit einem vertrauten gespeicherten Deck**. Wähle ein gespeichertes Deck, das du bereits verstehst, und einen verzeihenden Solo- oder Bot-Modus. **Genieße seine vertrauten Kombinationen**, ohne es umzubauen oder neue Listen zu studieren.",
        "gameObjective": "In **{{game}}**: Wähle ein gespeichertes Deck, das du bereits verstehst, und einen verzeihenden Solo- oder Bot-Modus. **Genieße seine vertrauten Kombinationen**, ohne es umzubauen oder neue Listen zu studieren."
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
    "genres": [],
    "translations": {
      "en": {
        "name": "Make It Connect",
        "objective": "Open a **card game with an existing combo deck**. In solo or bot battles, use an available legal deck containing a two-card interaction you already know. **Trigger that interaction during a battle and finish it**, or stop after three battles if the cards never come together.",
        "gameObjective": "In **{{game}}**: In solo or bot battles, use an available legal deck containing a two-card interaction you already know. **Trigger that interaction during a battle and finish it**, or stop after three battles if the cards never come together."
      },
      "de": {
        "name": "Die Kombination schaffen",
        "objective": "Starte ein **Kartenspiel mit einem vorhandenen Combo-Deck**. Nutze in Solo- oder Bot-Kämpfen ein verfügbares gültiges Deck mit einem bekannten Zusammenspiel zweier Karten. **Löse es während eines Kampfes aus und beende ihn** oder hör nach drei Kämpfen auf, falls die Karten nie zusammenkommen.",
        "gameObjective": "In **{{game}}**: Nutze in Solo- oder Bot-Kämpfen ein verfügbares gültiges Deck mit einem bekannten Zusammenspiel zweier Karten. **Löse es während eines Kampfes aus und beende ihn** oder hör nach drei Kämpfen auf, falls die Karten nie zusammenkommen."
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
    "genres": [],
    "translations": {
      "en": {
        "name": "Move as a Group",
        "objective": "Open a **game with several commandable units**. In a short solo or CPU battle, choose a small group of available units. **Move them together toward one scenario objective and play until it resolves or the battle ends**.",
        "gameObjective": "In **{{game}}**: In a short solo or CPU battle, choose a small group of available units. **Move them together toward one scenario objective and play until it resolves or the battle ends**."
      },
      "de": {
        "name": "Als Gruppe vorrücken",
        "objective": "Starte ein **Spiel mit mehreren befehligbaren Einheiten**. Wähle in einem kurzen Solo- oder CPU-Kampf eine kleine Gruppe verfügbarer Einheiten. **Bewege sie gemeinsam zu einem Szenarioziel und spiele, bis es entschieden ist oder der Kampf endet**.",
        "gameObjective": "In **{{game}}**: Wähle in einem kurzen Solo- oder CPU-Kampf eine kleine Gruppe verfügbarer Einheiten. **Bewege sie gemeinsam zu einem Szenarioziel und spiele, bis es entschieden ist oder der Kampf endet**."
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
    "genres": [],
    "translations": {
      "en": {
        "name": "Change the Formation",
        "objective": "Open a **tactics game with controllable unit positions**. In a solo scenario that lets you position units, put a durable unit ahead of a more vulnerable one. **Play an encounter with that arrangement and compare it with your usual deployment**.",
        "gameObjective": "In **{{game}}**: In a solo scenario that lets you position units, put a durable unit ahead of a more vulnerable one. **Play an encounter with that arrangement and compare it with your usual deployment**."
      },
      "de": {
        "name": "Anders aufstellen",
        "objective": "Starte ein **Taktikspiel mit steuerbaren Einheitenpositionen**. Stelle in einem Solo-Szenario mit frei platzierbaren Einheiten eine robuste Einheit vor eine empfindlichere. **Spiele eine Begegnung mit dieser Anordnung und vergleiche sie mit deiner üblichen Aufstellung**.",
        "gameObjective": "In **{{game}}**: Stelle in einem Solo-Szenario mit frei platzierbaren Einheiten eine robuste Einheit vor eine empfindlichere. **Spiele eine Begegnung mit dieser Anordnung und vergleiche sie mit deiner üblichen Aufstellung**."
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
    "genres": [],
    "translations": {
      "en": {
        "name": "Keep the Group Alive",
        "objective": "Open a **tactics game with replayable solo battles**. Choose an available, short, replayable solo battle and a small group of units. **Win while keeping every unit in that group alive**, or finish three attempts. Other units can support them.",
        "gameObjective": "In **{{game}}**: Choose an available, short, replayable solo battle and a small group of units. **Win while keeping every unit in that group alive**, or finish three attempts. Other units can support them."
      },
      "de": {
        "name": "Die Gruppe erhalten",
        "objective": "Starte ein **Taktikspiel mit wiederholbaren Solo-Kämpfen**. Wähle einen verfügbaren, kurzen, wiederholbaren Solo-Kampf und eine kleine Einheitengruppe. **Gewinne, ohne eine Einheit dieser Gruppe zu verlieren**, oder beende drei Versuche. Andere Einheiten dürfen helfen.",
        "gameObjective": "In **{{game}}**: Wähle einen verfügbaren, kurzen, wiederholbaren Solo-Kampf und eine kleine Einheitengruppe. **Gewinne, ohne eine Einheit dieser Gruppe zu verlieren**, oder beende drei Versuche. Andere Einheiten dürfen helfen."
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
    "genres": [],
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
    "genres": [],
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
    "genres": [],
    "translations": {
      "en": {
        "name": "Follow One Item",
        "objective": "Open a **game with automated production lines**. Choose a working production line and follow one material from its input through the machines. **Identify the steps it passes and watch a finished item reach the output**.",
        "gameObjective": "In **{{game}}**: Choose a working production line and follow one material from its input through the machines. **Identify the steps it passes and watch a finished item reach the output**."
      },
      "de": {
        "name": "Einem Item folgen",
        "objective": "Starte ein **Spiel mit automatisierten Produktionsketten**. Wähle eine laufende Produktionskette und folge einem Material vom Eingang durch die Maschinen. **Erkenne seine Verarbeitungsschritte und beobachte, wie ein fertiges Item den Ausgang erreicht**.",
        "gameObjective": "In **{{game}}**: Wähle eine laufende Produktionskette und folge einem Material vom Eingang durch die Maschinen. **Erkenne seine Verarbeitungsschritte und beobachte, wie ein fertiges Item den Ausgang erreicht**."
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
    "genres": [],
    "translations": {
      "en": {
        "name": "Stay With This Line",
        "objective": "Open a **automation game with an existing factory**. Return to one production line that already works. **Spend the session watching and tending that line**, leaving expansion plans and the rest of the factory for later.",
        "gameObjective": "In **{{game}}**: Return to one production line that already works. **Spend the session watching and tending that line**, leaving expansion plans and the rest of the factory for later."
      },
      "de": {
        "name": "Bei dieser Kette bleiben",
        "objective": "Starte ein **Automatisierungsspiel mit einer bestehenden Fabrik**. Kehre zu einer bereits funktionierenden Produktionskette zurück. **Verbringe die Session damit, diese Kette zu beobachten und zu betreuen**. Ausbaupläne und der Rest der Fabrik kommen später.",
        "gameObjective": "In **{{game}}**: Kehre zu einer bereits funktionierenden Produktionskette zurück. **Verbringe die Session damit, diese Kette zu beobachten und zu betreuen**. Ausbaupläne und der Rest der Fabrik kommen später."
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
    "genres": [],
    "translations": {
      "en": {
        "name": "Through the Result",
        "objective": "Open a **game with full matches**. Use your familiar mode and setup. **Play one whole match through its final result**, including every round; a win is not required. Allow enough time to finish even if it runs longer than expected.",
        "gameObjective": "In **{{game}}**: Use your familiar mode and setup. **Play one whole match through its final result**, including every round; a win is not required. Allow enough time to finish even if it runs longer than expected."
      },
      "de": {
        "name": "Bis zum Ergebnis",
        "objective": "Starte ein **Spiel mit vollständigen Matches**. Nutze deinen vertrauten Modus und dein übliches Setup. **Spiele ein ganzes Match bis zum Endergebnis**, einschließlich aller Runden; ein Sieg ist nicht nötig. Plane genug Zeit ein, auch wenn es länger dauert als erwartet.",
        "gameObjective": "In **{{game}}**: Nutze deinen vertrauten Modus und dein übliches Setup. **Spiele ein ganzes Match bis zum Endergebnis**, einschließlich aller Runden; ein Sieg ist nicht nötig. Plane genug Zeit ein, auch wenn es länger dauert als erwartet."
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
    "genres": [],
    "translations": {
      "en": {
        "name": "Follow the Match",
        "objective": "Open a **game with full matches**. Choose the mode you know best and **pay attention to how the match develops**, adjusting your usual play as the situation changes. Let this match hold the session and finish it before deciding what comes next.",
        "gameObjective": "In **{{game}}**: Choose the mode you know best and **pay attention to how the match develops**, adjusting your usual play as the situation changes. Let this match hold the session and finish it before deciding what comes next."
      },
      "de": {
        "name": "Dem Match folgen",
        "objective": "Starte ein **Spiel mit vollständigen Matches**. Wähle deinen vertrautesten Modus und **achte darauf, wie sich das Match entwickelt**. Passe deine gewohnte Spielweise an Veränderungen an. Widme die Session diesem Match und beende es, bevor du über den nächsten Schritt entscheidest.",
        "gameObjective": "In **{{game}}**: Wähle deinen vertrautesten Modus und **achte darauf, wie sich das Match entwickelt**. Passe deine gewohnte Spielweise an Veränderungen an. Widme die Session diesem Match und beende es, bevor du über den nächsten Schritt entscheidest."
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
    "genres": [],
    "translations": {
      "en": {
        "name": "Your Regular Group",
        "objective": "Open a **team game you share with regular teammates**. Join regular teammates in a mode you have played together before. **Enjoy the familiar teamwork and conversation** without setting an extra score target. Finish each match before anyone signs off.",
        "gameObjective": "In **{{game}}**: Join regular teammates in a mode you have played together before. **Enjoy the familiar teamwork and conversation** without setting an extra score target. Finish each match before anyone signs off."
      },
      "de": {
        "name": "Deine gewohnte Runde",
        "objective": "Starte ein **Teamspiel, das du mit vertrauten Mitspielern teilst**. Spiele mit vertrauten Mitspielern einen Modus, den ihr schon gemeinsam kennt. **Genießt das eingespielte Zusammenspiel und eure Gespräche**, ohne zusätzliches Punkteziel. Beendet jedes Match, bevor jemand aufhört.",
        "gameObjective": "In **{{game}}**: Spiele mit vertrauten Mitspielern einen Modus, den ihr schon gemeinsam kennt. **Genießt das eingespielte Zusammenspiel und eure Gespräche**, ohne zusätzliches Punkteziel. Beendet jedes Match, bevor jemand aufhört."
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
    "genres": [],
    "translations": {
      "en": {
        "name": "One New Choice",
        "objective": "Open a **game with selectable characters and full bot matches**. In a full bot match, choose an unlocked character you have not used recently. **Use their abilities throughout the match and reach its final result**, noticing one decision you make differently from your usual character.",
        "gameObjective": "In **{{game}}**: In a full bot match, choose an unlocked character you have not used recently. **Use their abilities throughout the match and reach its final result**, noticing one decision you make differently from your usual character."
      },
      "de": {
        "name": "Eine neue Wahl",
        "objective": "Starte ein **Spiel mit wählbaren Figuren und vollständigen Bot-Matches**. Wähle in einem vollständigen Bot-Match eine freigeschaltete Figur, die du länger nicht benutzt hast. **Nutze ihre Fähigkeiten im Match und erreiche das Endergebnis**. Achte auf eine Entscheidung, die du anders triffst als mit deiner üblichen Figur.",
        "gameObjective": "In **{{game}}**: Wähle in einem vollständigen Bot-Match eine freigeschaltete Figur, die du länger nicht benutzt hast. **Nutze ihre Fähigkeiten im Match und erreiche das Endergebnis**. Achte auf eine Entscheidung, die du anders triffst als mit deiner üblichen Figur."
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
    "genres": [],
    "translations": {
      "en": {
        "name": "Stay Above Ground",
        "objective": "Open a **game with climbing or movement abilities**. In a solo area, choose three nearby ledges or platforms you can reach with your available moves. **Link all three without dropping to the starting ground**, or finish three attempts.",
        "gameObjective": "In **{{game}}**: In a solo area, choose three nearby ledges or platforms you can reach with your available moves. **Link all three without dropping to the starting ground**, or finish three attempts."
      },
      "de": {
        "name": "Über dem Boden bleiben",
        "objective": "Starte ein **Spiel mit Klettern oder Bewegungsfähigkeiten**. Wähle in einem Solo-Bereich drei nahe Vorsprünge oder Plattformen, die du mit deinen verfügbaren Bewegungen erreichen kannst. **Verbinde alle drei, ohne auf den Ausgangsboden zurückzufallen**, oder beende drei Versuche.",
        "gameObjective": "In **{{game}}**: Wähle in einem Solo-Bereich drei nahe Vorsprünge oder Plattformen, die du mit deinen verfügbaren Bewegungen erreichen kannst. **Verbinde alle drei, ohne auf den Ausgangsboden zurückzufallen**, oder beende drei Versuche."
      }
    },
    "customGameCompatibility": {
      "capabilityIds": [
        "advanced-traversal"
      ]
    }
  },
] satisfies readonly AuthoredQuestDefinition[];
