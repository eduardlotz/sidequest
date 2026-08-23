import type { AuthoredQuestDefinition } from "../questTypes";

export const curatedQuests: readonly AuthoredQuestDefinition[] = [
  {
    moodId: "explore",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 20,
    genres: ["Open World", "Adventure"],
    translations: {
      en: {
        name: "Beyond the Map",
        objective:
          "Open an open-world game with an **unvisited marker** on the map. Travel there **without fast travel**, look around, and stop after the location name appears.",
      },
      de: {
        name: "Hinter der Karte",
        objective:
          "Öffne ein Open-World-Spiel mit einem **unbesuchten Marker** auf der Karte. Reise **ohne Schnellreise** dorthin, sieh dich um und höre auf, sobald der Ortsname erscheint.",
      },
    },
  },
  {
    moodId: "explore",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 15,
    genres: ["Urban", "Open World"],
    translations: {
      en: {
        name: "A Side Street",
        objective:
          "Choose a game with a city you can roam. Leave the main route, follow **three side streets**, and enter or inspect **one place** you have never noticed before.",
      },
      de: {
        name: "Eine Nebenstraße",
        objective:
          "Nimm ein Spiel mit einer frei begehbaren Stadt. Verlasse die Hauptroute, folge **drei Nebenstraßen** und betrete oder untersuche **einen Ort**, den du bisher übersehen hast.",
      },
    },
  },
  {
    moodId: "explore",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 20,
    genres: ["Underwater", "Adventure"],
    translations: {
      en: {
        name: "Deep Dive",
        objective:
          "Open a game with underwater exploration and dive below your usual route. Discover **one named place** or scan **five different creatures** before returning to the surface.",
      },
      de: {
        name: "Tauchgang",
        objective:
          "Öffne ein Spiel mit Unterwasser-Erkundung und tauche tiefer als auf deiner üblichen Route. Entdecke **einen benannten Ort** oder scanne **fünf verschiedene Lebewesen**, bevor du auftauchst.",
      },
    },
  },
  {
    moodId: "explore",
    minimumDurationMinutes: 8,
    suggestedDurationMinutes: 25,
    genres: ["Sci-Fi", "Space"],
    translations: {
      en: {
        name: "New Planet",
        objective:
          "Choose a space game with planets you can visit. Land on the **nearest unexplored world**, scan or collect **three things**, and leave only after you can name what makes the place different.",
      },
      de: {
        name: "Neuer Planet",
        objective:
          "Nimm ein Weltraumspiel mit besuchbaren Planeten. Lande auf der **nächsten unerforschten Welt**, scanne oder sammle **drei Dinge** und fliege erst weiter, wenn du ihren Unterschied benennen kannst.",
      },
    },
  },
  {
    moodId: "explore",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 20,
    genres: ["Puzzle", "Adventure"],
    translations: {
      en: {
        name: "Hidden Room",
        objective:
          "Open an adventure or puzzle game with optional spaces. Search one familiar area for a **hidden door, room, or path** and follow it until you find **one reward or story detail**.",
      },
      de: {
        name: "Versteckter Raum",
        objective:
          "Öffne ein Adventure oder Rätselspiel mit optionalen Bereichen. Suche in einem vertrauten Gebiet nach **einer versteckten Tür, einem Raum oder Weg** und folge ihm bis zu **einer Belohnung oder Geschichte**.",
      },
    },
  },
  {
    moodId: "explore",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 15,
    genres: ["Photography", "Open World"],
    translations: {
      en: {
        name: "Photo Safari",
        objective:
          "Pick a game with a camera or photo mode and visit a place with movement. Capture **five different subjects** without photographing the same creature, character, or landmark twice.",
      },
      de: {
        name: "Fotosafari",
        objective:
          "Nimm ein Spiel mit Kamera oder Fotomodus und besuche einen belebten Ort. Fotografiere **fünf verschiedene Motive**, ohne dasselbe Wesen, dieselbe Figur oder dasselbe Wahrzeichen zweimal aufzunehmen.",
      },
    },
  },

  {
    moodId: "progress",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 20,
    genres: ["Story", "Adventure"],
    translations: {
      en: {
        name: "Next Checkpoint",
        objective:
          "Open an unfinished story save and continue the goal already in front of you. Reach the **next checkpoint or save point**, save, and stop there.",
      },
      de: {
        name: "Nächster Speicherpunkt",
        objective:
          "Öffne einen unfertigen Story-Spielstand und verfolge das Ziel direkt vor dir. Erreiche den **nächsten Kontroll- oder Speicherpunkt**, speichere und höre dort auf.",
      },
    },
  },
  {
    moodId: "progress",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 20,
    genres: ["Platformer", "Arcade"],
    translations: {
      en: {
        name: "Two More Levels",
        objective:
          "Choose a game with short separate stages and continue from your current position. Finish the **next two levels** without replaying an older one for a better score.",
      },
      de: {
        name: "Zwei Level weiter",
        objective:
          "Nimm ein Spiel mit kurzen einzelnen Abschnitten und spiele an deiner aktuellen Stelle weiter. Beende die **nächsten zwei Level**, ohne ein altes für mehr Punkte zu wiederholen.",
      },
    },
  },
  {
    moodId: "progress",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 20,
    genres: ["RPG", "Open World"],
    translations: {
      en: {
        name: "Smallest Quest",
        objective:
          "Open a save with several quests in its log. Choose the **shortest nearby quest**, complete only that one, and ignore every new marker it creates.",
      },
      de: {
        name: "Kleinste Quest",
        objective:
          "Öffne einen Spielstand mit mehreren Aufgaben im Logbuch. Wähle die **kürzeste Quest in der Nähe**, beende nur diese und ignoriere alle neuen Marker, die dabei entstehen.",
      },
    },
  },
  {
    moodId: "progress",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 20,
    genres: ["RPG", "Strategy"],
    translations: {
      en: {
        name: "Upgrade Time",
        objective:
          "Open a game where your next useful upgrade is already visible. Earn the **remaining currency or materials**, buy **one upgrade**, and test it once.",
      },
      de: {
        name: "Zeit fürs Upgrade",
        objective:
          "Öffne ein Spiel, in dem dein nächstes sinnvolles Upgrade schon sichtbar ist. Verdiene die **fehlende Währung oder Materialien**, kaufe **ein Upgrade** und teste es einmal.",
      },
    },
  },
  {
    moodId: "progress",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 25,
    genres: ["Action", "RPG"],
    translations: {
      en: {
        name: "Boss Practice",
        objective:
          "Return to a boss that stopped your progress. Give it **three honest attempts** using the same setup; finish early if you win, otherwise stop after attempt three with one thing learned.",
      },
      de: {
        name: "Boss-Training",
        objective:
          "Kehre zu einem Boss zurück, der deinen Fortschritt gestoppt hat. Gib ihm mit demselben Setup **drei ehrliche Versuche**; höre nach einem Sieg oder nach Versuch drei mit einer Erkenntnis auf.",
      },
    },
  },
  {
    moodId: "progress",
    minimumDurationMinutes: 10,
    suggestedDurationMinutes: 30,
    genres: ["Story", "Adventure"],
    translations: {
      en: {
        name: "Oldest Unfinished",
        objective:
          "Pick the **oldest unfinished game** you still have installed. Continue its current save until you complete **one mission, chapter, or level**, then save before opening anything else.",
      },
      de: {
        name: "Ältestes offenes Spiel",
        objective:
          "Nimm das **älteste unfertige Spiel**, das noch installiert ist. Spiele den aktuellen Stand bis zum Ende **einer Mission, eines Kapitels oder Levels** und speichere, bevor du etwas anderes öffnest.",
      },
    },
  },

  {
    moodId: "create",
    minimumDurationMinutes: 8,
    suggestedDurationMinutes: 25,
    genres: ["Building", "Sandbox"],
    translations: {
      en: {
        name: "Tiny Home",
        objective:
          "Open a building game and make a home small enough to see in one view. Give it **a bed, a light, and storage**, then walk a character through it once.",
      },
      de: {
        name: "Kleines Zuhause",
        objective:
          "Öffne ein Bauspiel und errichte ein Zuhause, das in eine Ansicht passt. Gib ihm **ein Bett, ein Licht und Stauraum** und führe danach einmal eine Figur hindurch.",
      },
    },
  },
  {
    moodId: "create",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 20,
    genres: ["Fashion", "Character Creator"],
    translations: {
      en: {
        name: "New Outfit",
        objective:
          "Choose a game with clothing or character customization. Build **one complete outfit** around an item you never use and limit the whole look to **three colors**.",
      },
      de: {
        name: "Neues Outfit",
        objective:
          "Nimm ein Spiel mit Kleidung oder Charaktergestaltung. Baue **ein vollständiges Outfit** um ein selten genutztes Teil und beschränke den ganzen Look auf **drei Farben**.",
      },
    },
  },
  {
    moodId: "create",
    minimumDurationMinutes: 8,
    suggestedDurationMinutes: 25,
    genres: ["Decoration", "Life Sim"],
    translations: {
      en: {
        name: "One Room",
        objective:
          "Open a game with a room you can decorate and choose one object already inside it. Redesign **only that room** around the object, moving or adding at least **seven items**.",
      },
      de: {
        name: "Ein Raum",
        objective:
          "Öffne ein Spiel mit einem dekorierbaren Raum und wähle ein vorhandenes Objekt darin. Gestalte **nur diesen Raum** darum herum neu und bewege oder ergänze mindestens **sieben Dinge**.",
      },
    },
  },
  {
    moodId: "create",
    minimumDurationMinutes: 8,
    suggestedDurationMinutes: 20,
    genres: ["Music", "Creative"],
    translations: {
      en: {
        name: "Eight Bars",
        objective:
          "Open a game or tool inside a game where you can make music. Create an **eight-bar loop** with a beat, a bass part, and one melody, then play it from start to finish.",
      },
      de: {
        name: "Acht Takte",
        objective:
          "Öffne ein Spiel oder ein Werkzeug im Spiel, mit dem du Musik machen kannst. Erstelle einen **Loop aus acht Takten** mit Beat, Bass und einer Melodie und spiele ihn ganz ab.",
      },
    },
  },
  {
    moodId: "create",
    minimumDurationMinutes: 10,
    suggestedDurationMinutes: 30,
    genres: ["Level Editor", "Platformer"],
    translations: {
      en: {
        name: "Short Course",
        objective:
          "Use a level editor to build a course with **a start, three obstacles, and a finish**. Complete one clean test run without changing the course midway.",
      },
      de: {
        name: "Kurzer Parcours",
        objective:
          "Baue in einem Leveleditor einen Parcours mit **Start, drei Hindernissen und Ziel**. Schließe einen sauberen Testlauf ab, ohne den Kurs unterwegs zu verändern.",
      },
    },
  },
  {
    moodId: "create",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 20,
    genres: ["Farming", "Cozy"],
    translations: {
      en: {
        name: "A Little Garden",
        objective:
          "Choose a farming or sandbox game with plants. Make a **three-by-three garden**, use at least **three different plants**, and add one path or border around it.",
      },
      de: {
        name: "Ein kleiner Garten",
        objective:
          "Nimm ein Farming- oder Sandbox-Spiel mit Pflanzen. Lege einen **Garten aus drei mal drei Feldern** mit mindestens **drei Pflanzenarten** und einem Weg oder Rand an.",
      },
    },
  },

  {
    moodId: "challenge",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 20,
    genres: ["Competitive", "Multiplayer"],
    translations: {
      en: {
        name: "Three Wins",
        objective:
          "Open a competitive game with short rounds. Play until you earn **three round wins** or finish **five rounds**, whichever happens first.",
      },
      de: {
        name: "Drei Siege",
        objective:
          "Öffne ein kompetitives Spiel mit kurzen Runden. Spiele bis zu **drei Rundensiegen** oder bis **fünf Runden** beendet sind – je nachdem, was zuerst eintritt.",
      },
    },
  },
  {
    moodId: "challenge",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 20,
    genres: ["Action", "Survival"],
    translations: {
      en: {
        name: "No Healing",
        objective:
          "Choose an action game with a level or encounter you already know. Finish **one full section without healing**; defensive abilities are allowed, reloading after damage is not.",
      },
      de: {
        name: "Ohne Heilung",
        objective:
          "Nimm ein Actionspiel mit einem bekannten Level oder Kampf. Beende **einen ganzen Abschnitt ohne Heilung**; defensive Fähigkeiten sind erlaubt, Neuladen nach Schaden nicht.",
      },
    },
  },
  {
    moodId: "challenge",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 20,
    genres: ["Shooter", "Action"],
    translations: {
      en: {
        name: "Starter Gear",
        objective:
          "Open a game with selectable equipment and equip only its **starter or common gear**. Complete **one mission or match** without switching to a stronger item.",
      },
      de: {
        name: "Startausrüstung",
        objective:
          "Öffne ein Spiel mit wählbarer Ausrüstung und nutze nur **Start- oder gewöhnliche Ausrüstung**. Beende **eine Mission oder ein Match**, ohne zu einem stärkeren Gegenstand zu wechseln.",
      },
    },
  },
  {
    moodId: "challenge",
    minimumDurationMinutes: 8,
    suggestedDurationMinutes: 25,
    genres: ["Roguelike", "Action"],
    translations: {
      en: {
        name: "One Life",
        objective:
          "Start a fresh run in a game built around repeated attempts. Clear **one complete area with one life** and no revive; the quest ends on the clear or on your first defeat.",
      },
      de: {
        name: "Ein Leben",
        objective:
          "Starte einen neuen Run in einem Spiel mit wiederholten Versuchen. Räume **ein vollständiges Gebiet mit einem Leben** und ohne Wiederbelebung; die Quest endet beim Erfolg oder der ersten Niederlage.",
      },
    },
  },
  {
    moodId: "challenge",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 20,
    genres: ["Racing", "Time Trial"],
    translations: {
      en: {
        name: "Three Fast Laps",
        objective:
          "Pick a racing game and a track you know. Drive **three timed laps** with the same vehicle and finish every lap, even after a mistake; keep the fastest clean time.",
      },
      de: {
        name: "Drei schnelle Runden",
        objective:
          "Nimm ein Rennspiel und eine bekannte Strecke. Fahre mit demselben Fahrzeug **drei gezeitete Runden** zu Ende, auch nach Fehlern, und behalte die schnellste saubere Zeit.",
      },
    },
  },
  {
    moodId: "challenge",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 15,
    genres: ["Rhythm", "Arcade"],
    translations: {
      en: {
        name: "Full Combo Try",
        objective:
          "Choose a rhythm stage you can nearly complete cleanly. Give it **three attempts** at the same difficulty and play through every mistake; stop after a full combo or attempt three.",
      },
      de: {
        name: "Full-Combo-Versuch",
        objective:
          "Wähle einen Rhythmus-Abschnitt, den du fast fehlerfrei schaffst. Gib ihm auf demselben Grad **drei Versuche** und spiele nach Fehlern weiter; höre nach der Full Combo oder Versuch drei auf.",
      },
    },
  },

  {
    moodId: "connect",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 25,
    genres: ["Co-op", "Multiplayer"],
    translations: {
      en: {
        name: "Co-op Check-In",
        objective:
          "Invite someone you have not played with recently to a game you both know. Complete **three rounds or one co-op mission** together before choosing another mode.",
      },
      de: {
        name: "Co-op-Check-in",
        objective:
          "Lade jemanden, mit dem du lange nicht gespielt hast, in ein vertrautes Spiel ein. Beendet zusammen **drei Runden oder eine Co-op-Mission**, bevor ihr den Modus wechselt.",
      },
    },
  },
  {
    moodId: "connect",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 20,
    genres: ["Online", "Co-op"],
    translations: {
      en: {
        name: "Help a Stranger",
        objective:
          "Open an online game where players can assist each other. Help **one unfamiliar player** finish a fight, delivery, puzzle, or objective, and stay until their result is confirmed.",
      },
      de: {
        name: "Hilf jemandem",
        objective:
          "Öffne ein Onlinespiel, in dem Spielende einander helfen können. Hilf **einer unbekannten Person** bei Kampf, Lieferung, Rätsel oder Ziel und bleib, bis ihr Ergebnis bestätigt ist.",
      },
    },
  },
  {
    moodId: "connect",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 20,
    genres: ["Local Multiplayer", "Party"],
    translations: {
      en: {
        name: "Pass the Controller",
        objective:
          "Choose a local game that works in short turns. Play a **best-of-three** with someone nearby and pass the controller after every round, regardless of the result.",
      },
      de: {
        name: "Controller weitergeben",
        objective:
          "Nimm ein lokales Spiel mit kurzen Runden. Spielt ein **Best-of-three** und gebt den Controller nach jeder Runde weiter, unabhängig vom Ergebnis.",
      },
    },
  },
  {
    moodId: "connect",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 20,
    genres: ["Social", "RPG"],
    translations: {
      en: {
        name: "One Good Trade",
        objective:
          "Open a game where players can exchange items. Give or trade **one useful crafted, spare, or duplicate item** to another player and make sure they accept it.",
      },
      de: {
        name: "Ein guter Tausch",
        objective:
          "Öffne ein Spiel, in dem Gegenstände getauscht werden können. Gib oder tausche **einen nützlichen hergestellten, übrigen oder doppelten Gegenstand** und warte, bis er angenommen wird.",
      },
    },
  },
  {
    moodId: "connect",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 20,
    genres: ["Team", "Competitive"],
    translations: {
      en: {
        name: "Support Round",
        objective:
          "Choose a team game with a support role and play **one complete match** in it. Create **five assists, heals, saves, or team opportunities** instead of chasing the final hit.",
      },
      de: {
        name: "Support-Runde",
        objective:
          "Nimm ein Teamspiel mit Support-Rolle und spiele darin **ein vollständiges Match**. Erzeuge **fünf Assists, Heilungen, Rettungen oder Teamchancen**, statt dem letzten Treffer nachzujagen.",
      },
    },
  },
  {
    moodId: "connect",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 25,
    genres: ["Multiplayer", "Nostalgic"],
    translations: {
      en: {
        name: "Old Rival",
        objective:
          "Open a game you used to play against a friend and invite that same person if you can. Play **one full match or three short rounds** with the rules you used back then.",
      },
      de: {
        name: "Alte Rivalität",
        objective:
          "Öffne ein Spiel, das du früher gegen eine befreundete Person gespielt hast, und lade sie wenn möglich ein. Spielt **ein ganzes Match oder drei kurze Runden** nach euren damaligen Regeln.",
      },
    },
  },

  {
    moodId: "nostalgic",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 20,
    genres: ["Retro", "Story"],
    translations: {
      en: {
        name: "Childhood Save",
        objective:
          "Open a game you played often as a child and continue any save you can still access. Reach **one new checkpoint** without looking up what you used to do next.",
      },
      de: {
        name: "Kindheitsspielstand",
        objective:
          "Öffne ein Spiel, das du als Kind oft gespielt hast, und setze einen noch erreichbaren Spielstand fort. Erreiche **einen neuen Speicherpunkt**, ohne den nächsten Schritt nachzuschlagen.",
      },
    },
  },
  {
    moodId: "nostalgic",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 15,
    genres: ["Retro", "Platformer"],
    translations: {
      en: {
        name: "First Console",
        objective:
          "Choose a game from the earliest console or device you remember using. Start from its beginning and finish **the first level, race, or match**.",
      },
      de: {
        name: "Erste Konsole",
        objective:
          "Nimm ein Spiel von der frühesten Konsole oder dem ersten Gerät, an das du dich erinnerst. Starte von vorn und beende **das erste Level, Rennen oder Match**.",
      },
    },
  },
  {
    moodId: "nostalgic",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 15,
    genres: ["Racing", "Retro"],
    translations: {
      en: {
        name: "Classic Route",
        objective:
          "Open an older racing game with a track you remember. Drive **one full race** using the car or vehicle you chose most often back then.",
      },
      de: {
        name: "Klassische Strecke",
        objective:
          "Öffne ein älteres Rennspiel mit einer Strecke, an die du dich erinnerst. Fahre **ein vollständiges Rennen** mit dem Fahrzeug, das du damals am häufigsten gewählt hast.",
      },
    },
  },
  {
    moodId: "nostalgic",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 20,
    genres: ["Arcade", "Retro"],
    translations: {
      en: {
        name: "Old High Score",
        objective:
          "Return to an arcade-style game whose scoring you still understand. Make **three complete attempts** and keep the best score without restarting a weak run.",
      },
      de: {
        name: "Alter Highscore",
        objective:
          "Kehre zu einem Arcade-Spiel zurück, dessen Punkte du noch verstehst. Spiele **drei vollständige Versuche** und behalte das beste Ergebnis, ohne einen schwachen Lauf neu zu starten.",
      },
    },
  },
  {
    moodId: "nostalgic",
    minimumDurationMinutes: 8,
    suggestedDurationMinutes: 25,
    genres: ["Story", "Adventure"],
    translations: {
      en: {
        name: "The Movie Years",
        objective:
          "Choose a game that takes place in **the same time period as a movie you have watched**. Complete one scene, mission, or chapter that could belong beside that movie.",
      },
      de: {
        name: "Wie im Film",
        objective:
          "Nimm ein Spiel, das **zur selben Zeit wie ein Film spielt, den du gesehen hast**. Beende eine Szene, Mission oder ein Kapitel, das neben diesen Film passen könnte.",
      },
    },
  },
  {
    moodId: "nostalgic",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 20,
    genres: ["Multiplayer", "Retro"],
    translations: {
      en: {
        name: "Back Then",
        objective:
          "Open a game tied to a person you used to play with, even if you play alone today. Recreate **one mode, map, or rule set** you both chose and finish one round.",
      },
      de: {
        name: "Wie damals",
        objective:
          "Öffne ein Spiel, das du mit einer bestimmten Person verbindest, auch wenn du heute allein spielst. Stelle **einen damaligen Modus, eine Karte oder Regel** nach und beende eine Runde.",
      },
    },
  },

  {
    moodId: "overwhelmed",
    minimumDurationMinutes: 2,
    suggestedDurationMinutes: 10,
    genres: ["Open World", "Adventure"],
    translations: {
      en: {
        name: "First Icon",
        objective:
          "Open the game you played most recently and ignore the whole map except for the **nearest visible objective icon**. Reach it, complete what starts there, and stop.",
      },
      de: {
        name: "Erstes Symbol",
        objective:
          "Öffne dein zuletzt gespieltes Spiel und ignoriere die ganze Karte bis auf das **nächste sichtbare Zielsymbol**. Erreiche es, beende die dort startende Aufgabe und höre auf.",
      },
    },
  },
  {
    moodId: "overwhelmed",
    minimumDurationMinutes: 2,
    suggestedDurationMinutes: 10,
    genres: ["Casual", "Adventure"],
    translations: {
      en: {
        name: "Ten-Minute Save",
        objective:
          "Choose a familiar game that can save almost anywhere. Do **one small action you can finish in ten minutes** and save immediately when it is done.",
      },
      de: {
        name: "Zehn-Minuten-Spielstand",
        objective:
          "Nimm ein vertrautes Spiel, das fast überall speichern kann. Erledige **eine kleine Aufgabe für höchstens zehn Minuten** und speichere direkt danach.",
      },
    },
  },
  {
    moodId: "overwhelmed",
    minimumDurationMinutes: 3,
    suggestedDurationMinutes: 15,
    genres: ["Building", "Cozy"],
    translations: {
      en: {
        name: "One Corner",
        objective:
          "Open a building or life game with a messy space. Choose **one corner that fits on screen**, move or remove **ten things**, and leave every other area untouched.",
      },
      de: {
        name: "Eine Ecke",
        objective:
          "Öffne ein Bau- oder Lebensspiel mit einem unordentlichen Bereich. Wähle **eine Ecke, die auf den Bildschirm passt**, bewege oder entferne **zehn Dinge** und lass alles andere unberührt.",
      },
    },
  },
  {
    moodId: "overwhelmed",
    minimumDurationMinutes: 3,
    suggestedDurationMinutes: 15,
    genres: ["Arcade", "Multiplayer"],
    translations: {
      en: {
        name: "Default Round",
        objective:
          "Open the first suitable game in your recently played list. Accept the **first mode, first map, and default loadout**, then finish one complete round without changing setup.",
      },
      de: {
        name: "Standardrunde",
        objective:
          "Öffne das erste passende Spiel in deiner Zuletzt-gespielt-Liste. Nimm **den ersten Modus, die erste Karte und das Standard-Setup** und beende eine Runde ohne Änderungen.",
      },
    },
  },
  {
    moodId: "overwhelmed",
    minimumDurationMinutes: 3,
    suggestedDurationMinutes: 15,
    genres: ["RPG", "Open World"],
    translations: {
      en: {
        name: "One Tracked Quest",
        objective:
          "Open a save that already has a quest tracked. Follow **only that quest**, ignore optional loot and new markers, and stop when the game marks it complete.",
      },
      de: {
        name: "Eine verfolgte Quest",
        objective:
          "Öffne einen Spielstand mit einer bereits verfolgten Aufgabe. Folge **nur dieser Quest**, ignoriere optionale Beute und neue Marker und höre auf, wenn das Spiel sie abschließt.",
      },
    },
  },
  {
    moodId: "overwhelmed",
    minimumDurationMinutes: 2,
    suggestedDurationMinutes: 10,
    genres: ["Platformer", "Adventure"],
    translations: {
      en: {
        name: "Tutorial Return",
        objective:
          "Choose a game you already understand but have not opened recently. Replay **its tutorial or first level** from start to finish and make no other decisions today.",
      },
      de: {
        name: "Zurück ins Tutorial",
        objective:
          "Nimm ein Spiel, das du verstehst, aber lange nicht geöffnet hast. Wiederhole **sein Tutorial oder erstes Level** vollständig und triff heute keine weitere Spielentscheidung.",
      },
    },
  },

  {
    moodId: "restless",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 15,
    genres: ["Movement", "Open World"],
    translations: {
      en: {
        name: "Keep Moving",
        objective:
          "Open a game built around movement and pick a route through **five named places or landmarks**. Keep moving between them without fast travel and finish at the fifth.",
      },
      de: {
        name: "Immer weiter",
        objective:
          "Öffne ein Spiel mit viel Bewegung und plane eine Route durch **fünf benannte Orte oder Wahrzeichen**. Bleib ohne Schnellreise in Bewegung und höre am fünften auf.",
      },
    },
  },
  {
    moodId: "restless",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 20,
    genres: ["Online", "Competitive"],
    translations: {
      en: {
        name: "Quick Matches",
        objective:
          "Choose an online game with rounds under ten minutes. Play **three complete rounds** using the same mode and accept every result without queue-hopping.",
      },
      de: {
        name: "Schnelle Matches",
        objective:
          "Nimm ein Onlinespiel mit Runden unter zehn Minuten. Spiele im selben Modus **drei vollständige Runden** und akzeptiere jedes Ergebnis, ohne die Warteschlange zu wechseln.",
      },
    },
  },
  {
    moodId: "restless",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 15,
    genres: ["Parkour", "Platformer"],
    translations: {
      en: {
        name: "Parkour Line",
        objective:
          "Find a game with climbing, jumping, or parkour and choose a visible destination. Reach it by chaining **five different movement actions** without stopping on the ground between them.",
      },
      de: {
        name: "Parkour-Linie",
        objective:
          "Nimm ein Spiel mit Klettern, Springen oder Parkour und wähle ein sichtbares Ziel. Erreiche es mit **fünf verschiedenen Bewegungsaktionen**, ohne dazwischen am Boden stehen zu bleiben.",
      },
    },
  },
  {
    moodId: "restless",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 15,
    genres: ["Racing", "Arcade"],
    translations: {
      en: {
        name: "Flat-Out Race",
        objective:
          "Open a racing game, choose a short track, and use the fastest vehicle you can control. Finish **one full race of at least three laps** without rewinding.",
      },
      de: {
        name: "Vollgasrennen",
        objective:
          "Öffne ein Rennspiel, wähle eine kurze Strecke und das schnellste kontrollierbare Fahrzeug. Beende **ein Rennen mit mindestens drei Runden** ohne Zurückspulen.",
      },
    },
  },
  {
    moodId: "restless",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 20,
    genres: ["Action", "Horde"],
    translations: {
      en: {
        name: "Twenty Enemies",
        objective:
          "Choose an action game with waves or dense encounters. Defeat **twenty enemies** in one continuous session and stop as soon as the twentieth is down.",
      },
      de: {
        name: "Zwanzig Gegner",
        objective:
          "Nimm ein Actionspiel mit Wellen oder dichten Kämpfen. Besiege in einer zusammenhängenden Session **zwanzig Gegner** und höre direkt nach dem zwanzigsten auf.",
      },
    },
  },
  {
    moodId: "restless",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 20,
    genres: ["Rhythm", "Music"],
    translations: {
      en: {
        name: "Three Songs",
        objective:
          "Open a rhythm game and choose **three songs**: one easy, one comfortable, and one difficult. Finish all three in that order without repeating a song.",
      },
      de: {
        name: "Drei Songs",
        objective:
          "Öffne ein Rhythmusspiel und wähle **drei Songs**: einen leichten, einen vertrauten und einen schwierigen. Beende alle drei in dieser Reihenfolge ohne Wiederholung.",
      },
    },
  },

  {
    moodId: "focused",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 20,
    genres: ["Action", "Platformer"],
    translations: {
      en: {
        name: "Clean Run",
        objective:
          "Choose a level you know well enough to finish. Complete it **without pausing, restarting, or opening a menu**, and accept the first final result.",
      },
      de: {
        name: "Sauberer Lauf",
        objective:
          "Wähle ein Level, das du sicher beenden kannst. Spiele es **ohne Pause, Neustart oder Menü** zu Ende und akzeptiere das erste Ergebnis.",
      },
    },
  },
  {
    moodId: "focused",
    minimumDurationMinutes: 10,
    suggestedDurationMinutes: 30,
    genres: ["Strategy", "Turn-Based"],
    translations: {
      en: {
        name: "Twenty Turns",
        objective:
          "Open a turn-based strategy save and state one goal before moving. Spend **exactly twenty turns** working only toward that goal, then save at the end of turn twenty.",
      },
      de: {
        name: "Zwanzig Züge",
        objective:
          "Öffne einen rundenbasierten Strategie-Spielstand und lege vor dem ersten Zug ein Ziel fest. Arbeite **genau zwanzig Züge** nur daran und speichere nach Zug zwanzig.",
      },
    },
  },
  {
    moodId: "focused",
    minimumDurationMinutes: 8,
    suggestedDurationMinutes: 25,
    genres: ["Deckbuilder", "RPG"],
    translations: {
      en: {
        name: "One Build",
        objective:
          "Choose a game with builds, decks, or loadouts and commit to **one clear setup** before starting. Finish one mission or run without swapping its core pieces.",
      },
      de: {
        name: "Ein Build",
        objective:
          "Nimm ein Spiel mit Builds, Decks oder Ausrüstungen und lege vor dem Start **ein klares Setup** fest. Beende eine Mission oder einen Run, ohne seine Kernteile zu wechseln.",
      },
    },
  },
  {
    moodId: "focused",
    minimumDurationMinutes: 8,
    suggestedDurationMinutes: 25,
    genres: ["Narrative", "Puzzle"],
    translations: {
      en: {
        name: "Headphones On",
        objective:
          "Choose a narrative or puzzle game whose sound matters. Put on headphones, silence outside notifications, and complete **one whole chapter or puzzle sequence** without switching apps.",
      },
      de: {
        name: "Kopfhörer auf",
        objective:
          "Nimm ein narratives Spiel oder Rätselspiel, bei dem Ton wichtig ist. Setze Kopfhörer auf, schalte Benachrichtigungen stumm und beende **ein ganzes Kapitel oder eine Rätselsequenz** ohne App-Wechsel.",
      },
    },
  },
  {
    moodId: "focused",
    minimumDurationMinutes: 10,
    suggestedDurationMinutes: 30,
    genres: ["Story", "Action"],
    translations: {
      en: {
        name: "Main Mission",
        objective:
          "Open a story game with a main mission ready. Start and finish **that one mission** without side activities, inventory cleanup, or collectible detours.",
      },
      de: {
        name: "Hauptmission",
        objective:
          "Öffne ein Story-Spiel mit einer verfügbaren Hauptmission. Starte und beende **genau diese Mission** ohne Nebenaktivitäten, Inventararbeit oder Sammel-Umwege.",
      },
    },
  },
  {
    moodId: "focused",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 20,
    genres: ["Arcade", "Score Attack"],
    translations: {
      en: {
        name: "Score Block",
        objective:
          "Choose one score-based challenge and lock its difficulty and character. Make **three uninterrupted attempts**, record the highest result, and stop after the third.",
      },
      de: {
        name: "Punkteblock",
        objective:
          "Wähle eine Punkte-Herausforderung und lege Schwierigkeit und Figur fest. Spiele **drei ununterbrochene Versuche**, behalte das höchste Ergebnis und höre nach dem dritten auf.",
      },
    },
  },

  {
    moodId: "curious",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 20,
    genres: ["Puzzle", "Simulation"],
    translations: {
      en: {
        name: "Strange Mechanic",
        objective:
          "Open a game you own but do not know well and find one mechanic that surprises you. Use that **same mechanic five times** and notice what changes each time.",
      },
      de: {
        name: "Seltsame Mechanik",
        objective:
          "Öffne ein Spiel, das du besitzt, aber kaum kennst, und finde eine Mechanik, die dich überrascht. Nutze **dieselbe Mechanik fünfmal** und beobachte, was sich jeweils verändert.",
      },
    },
  },
  {
    moodId: "curious",
    minimumDurationMinutes: 8,
    suggestedDurationMinutes: 25,
    genres: ["Indie", "Adventure"],
    translations: {
      en: {
        name: "First Save",
        objective:
          "Choose an installed game you have never opened. Start with its defaults and play until you reach **the first real save point or completed objective**, then stop before the next one.",
      },
      de: {
        name: "Erster Spielstand",
        objective:
          "Nimm ein installiertes Spiel, das du noch nie geöffnet hast. Starte mit den Vorgaben und spiele bis zum **ersten echten Speicherpunkt oder abgeschlossenen Ziel**, dann höre vor dem nächsten auf.",
      },
    },
  },
  {
    moodId: "curious",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 20,
    genres: ["Historical", "Story"],
    translations: {
      en: {
        name: "Same Era",
        objective:
          "Pick a game that takes place in **the same historical era as a film or series you watched**. Complete one mission or scene and compare one detail the two portray differently.",
      },
      de: {
        name: "Gleiche Epoche",
        objective:
          "Nimm ein Spiel aus **derselben historischen Epoche wie ein Film oder eine Serie, die du gesehen hast**. Beende eine Mission oder Szene und vergleiche ein unterschiedlich dargestelltes Detail.",
      },
    },
  },
  {
    moodId: "curious",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 20,
    genres: ["Indie", "Strategy"],
    translations: {
      en: {
        name: "Genre Swap",
        objective:
          "Choose an installed game from a genre you rarely play. Finish **its tutorial and first challenge** without changing the default difficulty.",
      },
      de: {
        name: "Genrewechsel",
        objective:
          "Nimm ein installiertes Spiel aus einem Genre, das du selten spielst. Beende **sein Tutorial und die erste Herausforderung**, ohne den vorgegebenen Schwierigkeitsgrad zu ändern.",
      },
    },
  },
  {
    moodId: "curious",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 20,
    genres: ["Roster", "Multiplayer"],
    translations: {
      en: {
        name: "Least-Used Character",
        objective:
          "Open a game with a roster and choose the character you have used least. Play **three complete rounds or one mission** without switching away from them.",
      },
      de: {
        name: "Seltenste Figur",
        objective:
          "Öffne ein Spiel mit Figuren-Auswahl und nimm die von dir am seltensten gespielte Figur. Beende mit ihr **drei Runden oder eine Mission**, ohne zu wechseln.",
      },
    },
  },
  {
    moodId: "curious",
    minimumDurationMinutes: 5,
    suggestedDurationMinutes: 20,
    genres: ["Lore", "RPG"],
    translations: {
      en: {
        name: "Follow the Lore",
        objective:
          "Open a game with a codex, journal, or archive and read **three related entries**. Then visit one place, person, or object mentioned in them inside the game.",
      },
      de: {
        name: "Der Geschichte folgen",
        objective:
          "Öffne ein Spiel mit Kodex, Journal oder Archiv und lies **drei zusammengehörige Einträge**. Besuche danach im Spiel einen darin erwähnten Ort, Menschen oder Gegenstand.",
      },
    },
  },

  {
    moodId: "low-energy",
    minimumDurationMinutes: 2,
    suggestedDurationMinutes: 10,
    genres: ["Idle", "Management"],
    translations: {
      en: {
        name: "Idle Check-In",
        objective:
          "Open an idle game that has progressed without you. Collect **everything waiting**, buy **one useful upgrade**, and leave the rest for next time.",
      },
      de: {
        name: "Idle-Check-in",
        objective:
          "Öffne ein Idle Game, das ohne dich weitergelaufen ist. Sammle **alles Wartende** ein, kaufe **ein sinnvolles Upgrade** und lass den Rest fürs nächste Mal liegen.",
      },
    },
  },
  {
    moodId: "low-energy",
    minimumDurationMinutes: 2,
    suggestedDurationMinutes: 10,
    genres: ["Card Game", "Casual"],
    translations: {
      en: {
        name: "One Solitaire Hand",
        objective:
          "Open a digital solitaire game and accept the first deal. Play **one complete hand** without restarting for a better layout and accept its result.",
      },
      de: {
        name: "Eine Solitaire-Runde",
        objective:
          "Öffne ein digitales Solitaire-Spiel und akzeptiere die erste Verteilung. Spiele **eine vollständige Runde** ohne Neustart für eine bessere Lage und akzeptiere das Ergebnis.",
      },
    },
  },
  {
    moodId: "low-energy",
    minimumDurationMinutes: 2,
    suggestedDurationMinutes: 12,
    genres: ["Narrative", "Cozy"],
    translations: {
      en: {
        name: "One Conversation",
        objective:
          "Choose a narrative game with a conversation ready in your current save. Listen through **one complete conversation or scene**, choose by first instinct, and save afterward.",
      },
      de: {
        name: "Ein Gespräch",
        objective:
          "Nimm ein narratives Spiel mit einem anstehenden Gespräch im aktuellen Spielstand. Erlebe **ein vollständiges Gespräch oder eine Szene**, entscheide nach Gefühl und speichere danach.",
      },
    },
  },
  {
    moodId: "low-energy",
    minimumDurationMinutes: 3,
    suggestedDurationMinutes: 15,
    genres: ["Auto Battler", "Strategy"],
    translations: {
      en: {
        name: "Auto-Battle",
        objective:
          "Open an auto-battler and set **one lineup** before combat. Let it resolve without changing the team mid-fight and finish the round.",
      },
      de: {
        name: "Auto-Battle",
        objective:
          "Öffne einen Auto-Battler und stelle vor dem Kampf **eine Aufstellung** fest. Lass den Kampf ohne Teamwechsel laufen und beende die Runde.",
      },
    },
  },
  {
    moodId: "low-energy",
    minimumDurationMinutes: 3,
    suggestedDurationMinutes: 15,
    genres: ["Farming", "Cozy"],
    translations: {
      en: {
        name: "Three Cozy Chores",
        objective:
          "Open a farming or life-sim save and stay close to home. Finish **three small daily chores** such as watering, feeding, cooking, or collecting, then go to bed or save.",
      },
      de: {
        name: "Drei gemütliche Aufgaben",
        objective:
          "Öffne einen Farming- oder Lebenssimulations-Spielstand und bleib in der Nähe deines Zuhauses. Erledige **drei kleine Tagesaufgaben** wie Gießen, Füttern, Kochen oder Sammeln und schlafe oder speichere danach.",
      },
    },
  },
  {
    moodId: "low-energy",
    minimumDurationMinutes: 3,
    suggestedDurationMinutes: 15,
    genres: ["Hidden Object", "Puzzle"],
    translations: {
      en: {
        name: "Hidden-Object Scene",
        objective:
          "Open one hidden-object scene and work from one edge to the other. Find **every object on the required list** without switching to another scene.",
      },
      de: {
        name: "Wimmelbildszene",
        objective:
          "Öffne eine Wimmelbildszene und arbeite von einem Rand zum anderen. Finde **jeden Gegenstand auf der benötigten Liste**, ohne die Szene zu wechseln.",
      },
    },
  },
];
