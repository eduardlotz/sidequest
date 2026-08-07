import type { MoodDefinition, QuestTip } from "../data/questTypes";

export const englishUi = {
  nav: {
    skipToContent: "Skip to content",
    mainNavigation: "Main navigation",
    about: "About",
    spinLogo: "Spin Sidequest logo",
    profileLabel: "Your profile, {{points}} coins",
    points: "{{points}} coins",
    switchLanguage: "Switch to {{language}}",
    english: "English",
    german: "German",
    task: "Task",
    history: "History",
  },
  about: {
    title: "Welcome to sidequest",
    description: "A small companion for choosing what to play.",
    step1: "Choose how you feel right now",
    step2: "Pick one of the three quests that brings a game to mind",
    step3: "Use the quest-specific tips and start the rope timer",
    step4: "Pause when you are ready to complete the quest",
    step5: "Spend earned coins on red ropes or a fresh set of cards",
    lessChoosing: "Less choosing, more playing",
    moodReset:
      "Your mood resets after four hours, while coins and completed sessions stay in your local profile.",
    madeBy: "Made by",
  },
  task: {
    currentQuest: "Current quest",
    chooseMoodQuest: "Choose a {{mood}} quest",
    selectMood: "Select your mood",
    choosePrefix: "Choose a ",
    chooseSuffix: " sidequest",
    changeMood: "Change Mood",
    shuffleLabel:
      "Shuffle quest cards for {{cost}} coins. {{available}} coins available.",
    shuffleCards: "Shuffle cards",
    costsPoints: "costs {{points}}",
    shufflePricePrefix: "costs",
    moodCards: "Mood cards",
  },
  offers: {
    deckLabel: "Choose one of three quest cards",
    cardStatus: "Card {{current}} of {{total}}: {{name}}. {{title}}",
    opening: "Opening {{title}}",
    hiddenQuest: "quest",
    revealCard: "Reveal hidden quest card {{number}}",
    selectQuest: "Select {{name}}: {{title}}",
  },
  arc: {
    choose: "Choose",
    center: "Center",
    cardLabel: "{{action}} {{title}}. {{subtitle}}",
    dragOrScroll: "Drag or Scroll",
    status: "{{current}} of {{total}}: {{title}}. {{subtitle}}",
    noCards: "No cards available",
  },
  quest: {
    minimumMinutes: "{{count}} min minimum",
    suggestedMinutes: "{{count}} min suggested",
    durationRange: "{{minimum}}–{{suggested}} min",
    durationRangeLong: "{{minimum}}–{{suggested}} minutes",
    durationSingle: "{{count}} min",
    durationSingleLong_one: "{{count}} minute",
    durationSingleLong_other: "{{count}} minutes",
    optionalTwists: "Optional twists",
    activeLabel: "Active {{mood}} quest: {{title}}",
    focusCard: "Focus quest card: {{title}}",
    closeFocusedCard: "Close focused quest card",
  },
  timer: {
    elapsed: "Elapsed time {{time}}",
    start: "Start quest timer",
    resume: "Resume quest timer",
    pause: "Pause quest timer",
    unavailable: "Quest timer unavailable",
    ready: "Ready",
    paused: "Paused",
    gameTitleLabel: "Game title",
    addGameTitle: "Game title",
    completeQuest: "Complete quest",
    completeAvailableIn:
      "You can complete this quest in <strong>{{time}}</strong>.",
    lessThanMinute: "less than a minute",
    completeOrCancel:
      "You need to finish this quest or cancel it by cutting the rope.",
    noRedRopes: "No red ropes left. Complete this quest first.",
    previousCompletions: "You have completed this quest before",
    coinsEarned: "You receive",
    coinsEarnedLabel: "You receive {{points}} coins",
    completionPreviewPrompt: "Add the <strong>game title</strong>",
    yourTime: "Your time",
    saveCompletion: "Save",
    pullContinue: "Pull the timer to continue.",
    redRopesRemaining_one: "You have {{count}} red rope left to cancel.",
    redRopesRemaining_other: "You have {{count}} red ropes left to cancel.",
    noRopesRemaining: "You have no red ropes left to cancel.",
    pullStart: "Pull the timer to start.",
    readyInstructions:
      "Pull the timer to start.<br/>Minimum duration: <strong>{{time}}</strong>",
    pullResume: "Pull the timer to resume.",
    pullPause: "Pull the timer to pause.",
    backToSelection: "Back to selection screen",
    backToSelectionTooltip: "This quest stays open.",
    cutStop: "Cut the rope to stop.",
  },
  profile: {
    title: "Your profile",
    pointsLabel: "{{points}} coins",
    points: "Coins",
    description: "Your coins, settings, and completed sidequests.",
    redRopes: "Red ropes",
    owned: "Owned",
    buyRopeInline: "Buy rope",
    buy: "Buy",
    redRopesAvailable_one: "{{count}} red rope available",
    redRopesAvailable_other: "{{count}} red ropes available",
    buyRopes_one: "Buy {{count}} red rope",
    buyRopes_other: "Buy {{count}} red ropes",
    buyRopesLabel_one:
      "Buy {{count}} red rope for {{points}} coins. {{available}} coins available.",
    buyRopesLabel_other:
      "Buy {{count}} red ropes for {{points}} coins. {{available}} coins available.",
    statistics: "Statistics",
    completedQuests: "Completed quests",
    timePlayed: "Time played",
    timePlayedMinutes: "{{minutes}} min",
    timePlayedHours: "{{hours}}h {{minutes}}m",
    coinsCollected: "Coins collected",
    cancelledQuests: "Cancelled quests",
    repeatedQuests: "Repeated quests",
    favoriteMood: "Favorite mood",
    noFavoriteMood: "None yet",
    debugMode: "Debug mode",
    debugModeDescription:
      "No completion minimums. Cancelling never spends red ropes.",
    debugModeLabel: "Toggle local debug mode",
    debugModeInfoLabel: "About developer mode",
    debugModeOn: "On",
    debugModeOff: "Off",
    openHistory: "View quest history",
    settings: "Settings",
    theme: "Theme",
    themeLight: "Light",
    themeDark: "Dark",
    themeAuto: "Auto",
    sound: "Sound",
    soundLabel: "Toggle sound",
  },
  history: {
    title: "Quest history",
    close: "Close history",
    completedQuestSummary_one: "1 quest completed",
    completedQuestSummary_other: "{{count}} quests completed",
    completedSessionSummary_one: "1 play session",
    completedSessionSummary_other: "{{count}} play sessions",
    completedSessions_one: "completed session",
    completedSessions_other: "completed sessions",
    questSessions_one: "Completed once",
    questSessions_other: "Completed {{count}} times",
    repeatQuest: "Repeat this quest",
    repeatQuestLabel: "Repeat {{title}}",
    repeatQuestUnavailable: "Complete your current quest first",
    completionDetails: "Completed quest sessions",
    game: "Game",
    completedAt: "Completed",
    mood: "Mood",
    timePlayed: "Time",
    noGameTitle: "-",
    earlierLabel: "Earlier quest history",
    earlierCompletions_one:
      "One earlier completion has no quest details to display.",
    earlierCompletions_other:
      "{{count}} earlier completions have no quest details to display.",
    emptyTitle: "No quest milestones yet",
    emptyDescription:
      "Complete a quest and it will appear here with every play session.",
    pointsAwarded: "+{{points}} coins",
  },
} as const;

type TranslationShape<T> = {
  [Key in keyof T]: T[Key] extends string ? string : TranslationShape<T[Key]>;
};

export const germanUi = {
  nav: {
    skipToContent: "Zum Inhalt springen",
    mainNavigation: "Hauptnavigation",
    about: "Info",
    spinLogo: "Sidequest-Logo drehen",
    profileLabel: "Dein Profil, {{points}} Münzen",
    points: "{{points}} Münzen",
    switchLanguage: "Zu {{language}} wechseln",
    english: "Englisch",
    german: "Deutsch",
    task: "Quest",
    history: "Verlauf",
  },
  about: {
    title: "Willkommen bei sidequest",
    description: "Eine kleine Hilfe bei der Wahl deines nächsten Spiels.",
    step1: "Wähle, wie du dich gerade fühlst",
    step2: "Nimm eine der drei Quests, die dich an ein Spiel denken lässt",
    step3: "Nutze die Quest-Tipps und starte den Seil-Timer",
    step4: "Pausiere, wenn du die Quest abschließen möchtest",
    step5: "Gib verdiente Münzen für rote Seile oder neue Karten aus",
    lessChoosing: "Weniger wählen, mehr spielen",
    moodReset:
      "Deine Stimmung wird nach vier Stunden zurückgesetzt. Münzen und abgeschlossene Sessions bleiben in deinem lokalen Profil.",
    madeBy: "Von",
  },
  task: {
    currentQuest: "Aktuelle Quest",
    chooseMoodQuest: "Wähle eine Quest für {{mood}}",
    selectMood: "Wähle deine Stimmung",
    choosePrefix: "Wähle eine ",
    chooseSuffix: "-Sidequest",
    changeMood: "Stimmung ändern",
    shuffleLabel:
      "Quest-Karten für {{cost}} Münzen neu mischen. {{available}} Münzen verfügbar.",
    shuffleCards: "Karten mischen",
    costsPoints: "kostet {{points}}",
    shufflePricePrefix: "kostet",
    moodCards: "Stimmungskarten",
  },
  offers: {
    deckLabel: "Wähle eine von drei Quest-Karten",
    cardStatus: "Karte {{current}} von {{total}}: {{name}}. {{title}}",
    opening: "{{title}} wird geöffnet",
    hiddenQuest: "Quest",
    revealCard: "Verdeckte Quest-Karte {{number}} aufdecken",
    selectQuest: "{{name}} wählen: {{title}}",
  },
  arc: {
    choose: "Wählen",
    center: "Zentrieren",
    cardLabel: "{{action}}: {{title}}. {{subtitle}}",
    dragOrScroll: "Ziehen oder scrollen",
    status: "{{current}} von {{total}}: {{title}}. {{subtitle}}",
    noCards: "Keine Karten verfügbar",
  },
  quest: {
    minimumMinutes: "mindestens {{count}} Min.",
    suggestedMinutes: "{{count}} Min. empfohlen",
    durationRange: "{{minimum}}–{{suggested}} Min.",
    durationRangeLong: "{{minimum}}–{{suggested}} Minuten",
    durationSingle: "{{count}} Min.",
    durationSingleLong_one: "{{count}} Minute",
    durationSingleLong_other: "{{count}} Minuten",
    optionalTwists: "Optionale Spielvarianten",
    activeLabel: "Aktive Quest für {{mood}}: {{title}}",
    focusCard: "Quest-Karte fokussieren: {{title}}",
    closeFocusedCard: "Fokussierte Quest-Karte schließen",
  },
  timer: {
    elapsed: "Vergangene Zeit {{time}}",
    start: "Quest-Timer starten",
    resume: "Quest-Timer fortsetzen",
    pause: "Quest-Timer pausieren",
    unavailable: "Quest-Timer nicht verfügbar",
    ready: "Bereit",
    paused: "Pausiert",
    gameTitleLabel: "Spieltitel",
    addGameTitle: "Titel des Spiels",
    completeQuest: "Quest abschließen",
    completeAvailableIn:
      "Du kannst die Quest erst in <strong>{{time}}</strong> abschließen.",
    lessThanMinute: "weniger als einer Minute",
    completeOrCancel:
      "Du musst diese Quest abschließen oder sie durch Durchtrennen des Seils abbrechen.",
    noRedRopes: "Keine roten Seile mehr. Schließe zuerst diese Quest ab.",
    previousCompletions: "Du hast diese Quest schon mal abgeschlossen",
    coinsEarned: "Du erhältst",
    coinsEarnedLabel: "Du erhältst {{points}} Münzen",
    completionPreviewPrompt: "Trage den <strong>Titel des Spiels</strong> ein",
    yourTime: "Deine Zeit",
    saveCompletion: "Speichern",
    pullContinue: "Zieh am Timer, um fortzufahren.",
    redRopesRemaining_one: "Du hast noch {{count}} rotes Seil zum Abbrechen.",
    redRopesRemaining_other: "Du hast noch {{count}} rote Seile zum Abbrechen.",
    noRopesRemaining: "Du hast keine roten Seile mehr, um abzubrechen.",
    pullStart: "Ziehe den Timer, um zu starten.",
    readyInstructions:
      "Zieh am Timer, um zu starten.<br/>Mindestlaufzeit: <strong>{{time}}</strong>",
    pullResume: "Ziehe den Timer, um fortzufahren.",
    pullPause: "Ziehe den Timer, um zu pausieren.",
    backToSelection: "Zurück zur Auswahl",
    backToSelectionTooltip: "Die Quest bleibt offen.",
    cutStop: "Durchtrenne das Seil zum Stoppen.",
  },
  profile: {
    title: "Dein Profil",
    pointsLabel: "{{points}} Münzen",
    points: "Münzen",
    description: "Deine Münzen, Einstellungen und abgeschlossenen Sidequests.",
    redRopes: "Rote Seile",
    owned: "Im Besitz",
    buyRopeInline: "Seil kaufen",
    buy: "Kaufen",
    redRopesAvailable_one: "{{count}} rotes Seil verfügbar",
    redRopesAvailable_other: "{{count}} rote Seile verfügbar",
    buyRopes_one: "{{count}} Seil kaufen",
    buyRopes_other: "{{count}} Seile kaufen",
    buyRopesLabel_one:
      "{{count}} rotes Seil für {{points}} Münzen kaufen. {{available}} Münzen verfügbar.",
    buyRopesLabel_other:
      "{{count}} rote Seile für {{points}} Münzen kaufen. {{available}} Münzen verfügbar.",
    statistics: "Statistiken",
    completedQuests: "Abgeschlossene Quests",
    timePlayed: "Spielzeit",
    timePlayedMinutes: "{{minutes}} Min.",
    timePlayedHours: "{{hours}} Std {{minutes}} Min",
    coinsCollected: "Münzen gesammelt",
    cancelledQuests: "Abgebrochene Quests",
    repeatedQuests: "Wiederholte Quests",
    favoriteMood: "Lieblingsstimmung",
    noFavoriteMood: "Noch keine",
    debugMode: "Debug-Modus",
    debugModeDescription:
      "Keine Mindestzeit. Abbrüche verbrauchen keine roten Seile.",
    debugModeLabel: "Lokalen Debug-Modus umschalten",
    debugModeInfoLabel: "Über den Developer Mode",
    debugModeOn: "An",
    debugModeOff: "Aus",
    openHistory: "Quest-Verlauf ansehen",
    settings: "Einstellungen",
    theme: "Theme",
    themeLight: "Hell",
    themeDark: "Dunkel",
    themeAuto: "Auto",
    sound: "Sound",
    soundLabel: "Sound umschalten",
  },
  history: {
    title: "Quest-Verlauf",
    close: "Verlauf schließen",
    completedQuestSummary_one: "1 Quest abgeschlossen",
    completedQuestSummary_other: "{{count}} Quests abgeschlossen",
    completedSessionSummary_one: "1 Spielsession",
    completedSessionSummary_other: "{{count}} Spielsessions",
    completedSessions_one: "abgeschlossene Session",
    completedSessions_other: "abgeschlossene Sessions",
    questSessions_one: "Einmal abgeschlossen",
    questSessions_other: "{{count}}-mal abgeschlossen",
    repeatQuest: "Diese Quest wiederholen",
    repeatQuestLabel: "{{title}} wiederholen",
    repeatQuestUnavailable: "Schließe zuerst deine aktuelle Quest ab",
    completionDetails: "Abgeschlossene Quest-Sessions",
    game: "Spiel",
    completedAt: "Abgeschlossen",
    mood: "Stimmung",
    timePlayed: "Zeit",
    noGameTitle: "-",
    earlierLabel: "Früherer Quest-Verlauf",
    earlierCompletions_one:
      "Für einen früheren Abschluss sind keine Quest-Details verfügbar.",
    earlierCompletions_other:
      "Für {{count}} frühere Abschlüsse sind keine Quest-Details verfügbar.",
    emptyTitle: "Noch keine Quest-Meilensteine",
    emptyDescription:
      "Schließe eine Quest ab. Danach erscheint sie hier mit jeder Spielsession.",
    pointsAwarded: "+{{points}} Münzen",
  },
} as const satisfies TranslationShape<typeof englishUi>;

export const germanMoods = {
  relax: {
    title: "Entspannung",
    subtitle: "Ich möchte bei etwas Vertrautem abschalten und zur Ruhe kommen",
  },
  explore: {
    title: "Entdeckung",
    subtitle: "Ich möchte ein Spiel entdecken, das mich noch überraschen kann",
  },
  progress: {
    title: "Fortschritt",
    subtitle: "Ich möchte endlich ein liegen gelassenes Spiel voranbringen",
  },
  create: {
    title: "Kreativität",
    subtitle: "Ich möchte etwas Eigenes erschaffen, das sich nach mir anfühlt",
  },
  challenge: {
    title: "Herausforderung",
    subtitle: "Ich möchte Widerstand spüren und sehen, was ich schaffen kann",
  },
  connect: {
    title: "Gemeinschaft",
    subtitle: "Ich möchte mich beim Spielen anderen Menschen verbunden fühlen",
  },
  nostalgic: {
    title: "Nostalgie",
    subtitle:
      "Ich möchte zu einem Spiel mit einer guten Erinnerung zurückkehren",
  },
  overwhelmed: {
    title: "Überforderung",
    subtitle: "Ich möchte spielen, kann aber gerade keine Auswahl vertragen",
  },
  restless: {
    title: "Unruhe",
    subtitle: "Ich habe zu viel Energie und muss sie in Bewegung bringen",
  },
  focused: {
    title: "Fokus",
    subtitle: "Ich möchte ganz in ein klares Ziel eintauchen",
  },
  curious: {
    title: "Neugier",
    subtitle: "Ich möchte etwas Unbekanntes ausprobieren und verstehen",
  },
  "low-energy": {
    title: "Wenig Energie",
    subtitle: "Ich möchte ohne viel Aufmerksamkeit oder Anstrengung spielen",
  },
} as const satisfies Record<string, Omit<MoodDefinition, "id">>;

export const germanTips = {
  oneTrack: {
    title: "Bleib bei einem Ziel",
    description:
      "Ignoriere Nebenmissionen und Kartenmarker, damit die Quest bei einem klaren Ziel bleibt.",
  },
  noOutsideHelp: {
    title: "Keine externe Hilfe",
    description:
      "Verlasse dich nur auf das Spiel: keine Guides, Wikis, Lösungsvideos oder externen Karten.",
  },
  letItStand: {
    title: "Lass es gelten",
    description:
      "Akzeptiere das erste ehrliche Ergebnis, auch wenn Neuladen oder Neuwürfeln es verbessern könnte.",
  },
  minimalHud: {
    title: "Minimales HUD",
    description:
      "Blende optionale HUD-Elemente aus und behalte nur die Informationen, die diese Quest braucht.",
  },
  noMap: {
    title: "Keine Karte",
    description:
      "Navigiere mit Orientierungspunkten und Erinnerung, ohne Karte oder eingeblendete Route.",
  },
  longWay: {
    title: "Keine Schnellreise",
    description:
      "Reise durch die spielbare Welt, statt den Weg über ein Menü zu überspringen.",
  },
  measuredPace: {
    title: "Ohne Eile",
    description:
      "Vermeide Sprinten, Boosts und Abkürzungen; lass den Weg das Tempo bestimmen.",
  },
  fixedKit: {
    title: "Behalte dein Setup",
    description:
      "Behalte die aktuelle Figur, Ausrüstung, das Deck oder Fahrzeug während der ganzen Quest.",
  },
  basicTools: {
    title: "Nutze einfache Ausrüstung",
    description:
      "Lass deine stärkste oder seltenste Option ungenutzt und löse die Quest mit gewöhnlicher Ausrüstung.",
  },
  noRecovery: {
    title: "Keine optionale Heilung",
    description:
      "Nutze keine optionalen Heil- oder Reparaturgegenstände; erhole dich nur, wenn das Spiel es verlangt.",
  },
  keepReserve: {
    title: "Behalte eine Reserve",
    description:
      "Beende die Quest mit mindestens einer übrigen Nutzung einer begrenzten Ressource.",
  },
  cleanExit: {
    title: "Sauber aufhören",
    description:
      "Höre an einem sicheren Speicherpunkt oder Ergebnisbildschirm auf, ohne etwas Neues zu starten.",
  },
  useWhatYouFind: {
    title: "Nutze deinen Fund",
    description:
      "Mach einen nützlichen Gegenstand, ein Werkzeug oder eine Ressource aus der Quest zum Teil deines Plans.",
  },
  helpFirst: {
    title: "Hilf zuerst",
    description:
      "Hilf, rette oder teile mit jemandem, bevor du dein eigenes Ergebnis verfolgst.",
  },
  holdYourRole: {
    title: "Bleib in deiner Rolle",
    description:
      "Wähle eine Teamaufgabe und erfülle sie bis zum vollständigen Ergebnis.",
  },
  oneMoreCorner: {
    title: "Nimm einen Umweg",
    description:
      "Nimm eine optionale Abzweigung neben dem Hauptweg und kehre danach zur Quest zurück.",
  },
  noRestart: {
    title: "Spiel es zu Ende",
    description:
      "Spiele nach Fehlern weiter und passe dich an, statt neu zu starten oder zu laden.",
  },
  noUpgrades: {
    title: "Keine Upgrades",
    description:
      "Kaufe, schalte frei und rüste nichts auf, bis die aktuelle Quest beendet ist.",
  },
  spendTheGoodStuff: {
    title: "Nutze das Wertvolle",
    description:
      "Verbrauche einen wertvollen Gegenstand, eine Fähigkeit oder Währung, die du sonst für später sparst.",
  },
  noCombat: {
    title: "Vermeide optionale Kämpfe",
    description:
      "Vermeide unnötige Kämpfe und nutze stattdessen Bewegung, Dialoge, Schleichen oder Geduld.",
  },
  firstInstinct: {
    title: "Erster Impuls",
    description:
      "Nimm die erste ehrliche Wahl, die sich richtig anfühlt, ohne alle Alternativen zu vergleichen.",
  },
  oppositeInstinct: {
    title: "Gegenteiliger Impuls",
    description:
      "Wähle eine bedeutsame Option entgegen deiner Gewohnheit und akzeptiere ihr Ergebnis.",
  },
  landmarksOnly: {
    title: "Nur Orientierungspunkte",
    description:
      "Navigiere nach sichtbaren Orten, Schildern und Gelände statt nach Routenlinien.",
  },
  listenFirst: {
    title: "Hör zuerst zu",
    description:
      "Halte für Dialoge und Weltgeräusche inne und lass sie den nächsten Schritt bestimmen.",
  },
  followTheLocal: {
    title: "Folge einem Bewohner",
    description:
      "Folge einem Bewohner oder Wesen und lass seine Bewegung dein nächstes Ziel bestimmen.",
  },
  oneTool: {
    title: "Ein Hauptwerkzeug",
    description:
      "Wähle ein Werkzeug oder eine Aktion als deine Hauptlösung für die ganze Quest.",
  },
  localMaterials: {
    title: "Lokale Materialien",
    description:
      "Baue nur mit Materialien, die bereits vor Ort oder in einem nahen Lager sind.",
  },
  onePalette: {
    title: "Eine Farbpalette",
    description:
      "Beschränke das Ergebnis auf eine Farbfamilie und einen einzelnen kontrastierenden Akzent.",
  },
  noUndo: {
    title: "Kein Rückgängig",
    description:
      "Behalte jede platzierte, gemalte oder angepasste Entscheidung und arbeite um Fehler herum.",
  },
  firstTake: {
    title: "Behalte den ersten Versuch",
    description:
      "Behalte die erste vollständige Version und widerstehe einer zweiten Überarbeitungsrunde.",
  },
  oneRoom: {
    title: "Ein Bereich",
    description:
      "Beschränke jede Aktion und Änderung auf einen kleinen, klar abgegrenzten Bereich.",
  },
  photoProof: {
    title: "Bring ein Bild mit",
    description:
      "Mache einen Screenshot, der das fertige Ergebnis oder den endgültigen Haltepunkt klar zeigt.",
  },
  leaveAGift: {
    title: "Hinterlasse ein Geschenk",
    description:
      "Hinterlasse eine nützliche Verbesserung, Route, ein Werkzeug oder eine Ressource für andere.",
  },
  stayTogether: {
    title: "Bleibt zusammen",
    description:
      "Bleibe während der Aktivität in Sicht-, Kommunikations- oder Unterstützungsweite eines Mitspielers.",
  },
  quietLobby: {
    title: "Kein Mikrofon nötig",
    description:
      "Lass das Mikrofon aus und kommuniziere mit Pings, Bewegung, Emotes oder kurzem Text.",
  },
  borrowedStyle: {
    title: "Übernimm ihren Stil",
    description:
      "Kopiere eine sichtbare Route, Bauweise, Rhythmik oder Technik, bevor du sie selbst anpasst.",
  },
  threeAttempts: {
    title: "Drei Versuche",
    description:
      "Gib derselben Herausforderung drei vollständige Versuche, ohne das Ziel dazwischen zu wechseln.",
  },
  damageBudget: {
    title: "Schadensbudget",
    description:
      "Lege vor dem Start ein klares Schadenslimit fest und stoppe, wenn es aufgebraucht ist.",
  },
  underdogKit: {
    title: "Außenseiter-Option",
    description:
      "Nutze eine brauchbare Figur, ein Werkzeug oder einen Build unterhalb deines üblichen Favoriten.",
  },
  oneMove: {
    title: "Eine Technik tiefer",
    description:
      "Wähle eine Mechanik und nutze sie bewusst in drei unterschiedlichen Situationen.",
  },
  noShopping: {
    title: "Nicht einkaufen",
    description:
      "Kaufe während der Quest nichts; nutze nur, was du bereits besitzt oder findest.",
  },
  noLooting: {
    title: "Keine optionale Beute",
    description:
      "Ignoriere optionale Beute und beschränke Inventarverwaltung auf das, was der Fortschritt verlangt.",
  },
  noMarkers: {
    title: "Keine Marker",
    description:
      "Deaktiviere optionale Marker und folge Richtungen, Schildern und Hinweisen innerhalb der Welt.",
  },
  worldAudio: {
    title: "Geräusche der Welt",
    description:
      "Drehe die Musik so weit herunter, dass du Umgebung, Stimmen und entfernte Aktivität wahrnimmst.",
  },
  groundLevel: {
    title: "Auf Augenhöhe",
    description:
      "Halte die Kamera nah an Figur oder Welt statt über dir oder weit entfernt.",
  },
} as const satisfies Record<string, QuestTip>;
