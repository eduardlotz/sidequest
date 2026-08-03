import type { MoodDefinition, QuestTip } from "../data/questTypes";

export const englishUi = {
  nav: {
    skipToContent: "Skip to content",
    mainNavigation: "Main navigation",
    about: "About",
    spinLogo: "Spin Sidequest logo",
    profileLabel: "Your profile, {{points}} points",
    points: "{{points}} points",
    switchLanguage: "Switch to {{language}}",
    english: "English",
    german: "German",
    task: "Task",
    history: "History",
  },
  toast: {
    completeLabel: "Quest complete: {{title}}",
    complete: "Quest complete",
  },
  about: {
    title: "Welcome to sidequest",
    description: "A small companion for choosing what to play.",
    step1: "Choose how you feel right now",
    step2: "Pick one of the three quests that brings a game to mind",
    step3: "Use the quest-specific tips and start the rope timer",
    step4: "Pause when you are ready to complete the quest",
    step5: "Spend earned points when you need a fresh set of cards",
    lessChoosing: "Less choosing, more playing",
    moodReset:
      "Your mood resets after four hours, while points and completed sessions stay in your local profile.",
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
      "Shuffle quest cards for {{cost}} points. {{available}} points available.",
    shuffleCards: "Shuffle cards",
    costsPoints: "costs {{points}} points",
    moodCards: "Mood cards",
  },
  offers: {
    deckLabel: "Choose one of three hidden quest cards",
    cardStatus: "Card {{current}} of {{total}}: hidden quest",
    opening: "Opening {{title}}",
    hiddenQuest: "quest",
    revealCard: "Reveal hidden quest card {{number}}",
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
    estimateMinutes: "~{{count}} min",
    minutes: "{{count}} min",
    tips: "Quest tips",
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
    completeQuest: "Complete quest",
    pullStart: "Pull the timer to start.",
    pullResume: "Pull the timer to resume.",
    pullPause: "Pull the timer to pause.",
    cutChooseAnother: "Cut the rope to choose another.",
    cutStop: "Cut the rope to stop.",
  },
  profile: {
    title: "Your profile",
    pointsLabel: "{{points}} points",
    points: "Points",
    description: "Your points and completed sidequests.",
  },
  history: {
    title: "Quest history",
    completedSessions_one: "completed session",
    completedSessions_other: "completed sessions",
    earlierLabel: "Earlier quest history",
    earlierCompletions_one: "completion from an earlier Sidequest version",
    earlierCompletions_other:
      "completions from an earlier Sidequest version",
    emptyTitle: "No completed sessions yet",
    emptyDescription:
      "Completed quests will appear here with their time and reward.",
    pointsAwarded: "+{{points}} points",
  },
} as const;

type TranslationShape<T> = {
  [Key in keyof T]: T[Key] extends string
    ? string
    : TranslationShape<T[Key]>;
};

export const germanUi = {
  nav: {
    skipToContent: "Zum Inhalt springen",
    mainNavigation: "Hauptnavigation",
    about: "Info",
    spinLogo: "Sidequest-Logo drehen",
    profileLabel: "Dein Profil, {{points}} Punkte",
    points: "{{points}} Punkte",
    switchLanguage: "Zu {{language}} wechseln",
    english: "Englisch",
    german: "Deutsch",
    task: "Quest",
    history: "Verlauf",
  },
  toast: {
    completeLabel: "Quest abgeschlossen: {{title}}",
    complete: "Quest abgeschlossen",
  },
  about: {
    title: "Willkommen bei sidequest",
    description: "Eine kleine Hilfe bei der Wahl deines nächsten Spiels.",
    step1: "Wähle, wie du dich gerade fühlst",
    step2: "Nimm eine der drei Quests, die dich an ein Spiel denken lässt",
    step3: "Nutze die Quest-Tipps und starte den Seil-Timer",
    step4: "Pausiere, wenn du die Quest abschließen möchtest",
    step5: "Gib verdiente Punkte für neue Karten aus",
    lessChoosing: "Weniger wählen, mehr spielen",
    moodReset:
      "Deine Stimmung wird nach vier Stunden zurückgesetzt. Punkte und abgeschlossene Sessions bleiben in deinem lokalen Profil.",
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
      "Quest-Karten für {{cost}} Punkte neu mischen. {{available}} Punkte verfügbar.",
    shuffleCards: "Karten mischen",
    costsPoints: "kostet {{points}} Punkte",
    moodCards: "Stimmungskarten",
  },
  offers: {
    deckLabel: "Wähle eine von drei verdeckten Quest-Karten",
    cardStatus: "Karte {{current}} von {{total}}: verdeckte Quest",
    opening: "{{title}} wird geöffnet",
    hiddenQuest: "Quest",
    revealCard: "Verdeckte Quest-Karte {{number}} aufdecken",
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
    estimateMinutes: "~{{count}} Min.",
    minutes: "{{count}} Min.",
    tips: "Quest-Tipps",
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
    completeQuest: "Quest abschließen",
    pullStart: "Ziehe den Timer, um zu starten.",
    pullResume: "Ziehe den Timer, um fortzufahren.",
    pullPause: "Ziehe den Timer, um zu pausieren.",
    cutChooseAnother: "Durchtrenne das Seil für eine andere Quest.",
    cutStop: "Durchtrenne das Seil zum Stoppen.",
  },
  profile: {
    title: "Dein Profil",
    pointsLabel: "{{points}} Punkte",
    points: "Punkte",
    description: "Deine Punkte und abgeschlossenen Sidequests.",
  },
  history: {
    title: "Quest-Verlauf",
    completedSessions_one: "abgeschlossene Session",
    completedSessions_other: "abgeschlossene Sessions",
    earlierLabel: "Früherer Quest-Verlauf",
    earlierCompletions_one:
      "Abschluss aus einer früheren Sidequest-Version",
    earlierCompletions_other:
      "Abschlüsse aus einer früheren Sidequest-Version",
    emptyTitle: "Noch keine Sessions abgeschlossen",
    emptyDescription:
      "Abgeschlossene Quests erscheinen hier mit Zeit und Belohnung.",
    pointsAwarded: "+{{points}} Punkte",
  },
} as const satisfies TranslationShape<typeof englishUi>;

export const germanMoods = {
  relax: { title: "Entspannung", subtitle: "Vertrautes, ruhiges Spielen" },
  explore: {
    title: "Entdeckung",
    subtitle: "Eine neue Welt oder Spielweise",
  },
  progress: {
    title: "Fortschritt",
    subtitle: "Ein offenes Spiel voranbringen",
  },
  create: {
    title: "Kreativität",
    subtitle: "Bauen, anpassen oder komponieren",
  },
  challenge: {
    title: "Herausforderung",
    subtitle: "Eine Fähigkeit auf die Probe stellen",
  },
  connect: {
    title: "Gemeinschaft",
    subtitle: "Mit oder neben anderen spielen",
  },
  nostalgic: {
    title: "Nostalgie",
    subtitle: "Zu einem alten Lieblingsspiel zurückkehren",
  },
  overwhelmed: {
    title: "Überforderung",
    subtitle: "Eine Regel trifft die Entscheidung",
  },
  restless: {
    title: "Unruhe",
    subtitle: "Die Energie in Bewegung bringen",
  },
  focused: {
    title: "Fokus",
    subtitle: "Bei einem klaren Ziel bleiben",
  },
  curious: {
    title: "Neugier",
    subtitle: "Eine unbekannte Idee ausprobieren",
  },
  "low-energy": {
    title: "Wenig Energie",
    subtitle: "Einfach anzufangen, einfach aufzuhören",
  },
} as const satisfies Record<string, Omit<MoodDefinition, "id">>;

export const germanTips = {
  oneTrack: {
    title: "Bleib bei einem Ziel",
    description: "Ignoriere andere Missionen und Marker, bis es geschafft ist.",
  },
  noOutsideHelp: {
    title: "Keine externe Hilfe",
    description: "Nutze keine Guides, Wikis, Lösungsvideos oder externen Karten.",
  },
  letItStand: {
    title: "Lass es gelten",
    description: "Akzeptiere das erste Ergebnis, ohne neu zu laden oder zu würfeln.",
  },
  minimalHud: {
    title: "Minimales HUD",
    description: "Blende optionale HUD-Elemente aus, die du nicht brauchst.",
  },
  noMap: {
    title: "Keine Karte",
    description: "Navigiere ohne Karte oder eingeblendete Route.",
  },
  longWay: {
    title: "Keine Schnellreise",
    description: "Reise durch die Welt statt über Menü-Abkürzungen.",
  },
  measuredPace: {
    title: "Ohne Eile",
    description: "Vermeide Sprinten, Boosts oder das Überspringen des Weges.",
  },
  fixedKit: {
    title: "Behalte dein Setup",
    description: "Wechsle weder Figur, Ausrüstung, Deck noch Fahrzeug.",
  },
  basicTools: {
    title: "Nutze einfache Ausrüstung",
    description: "Lass deine stärkste oder seltenste Option ungenutzt.",
  },
  noRecovery: {
    title: "Keine optionale Heilung",
    description: "Nutze keine optionalen Heil- oder Reparaturgegenstände.",
  },
  keepReserve: {
    title: "Behalte eine Reserve",
    description: "Beende mit einer übrigen Nutzung einer begrenzten Ressource.",
  },
  cleanExit: {
    title: "Sauber aufhören",
    description: "Höre an einem sicheren Ort auf, ohne ein neues Ziel zu starten.",
  },
  useWhatYouFind: {
    title: "Nutze deinen Fund",
    description: "Nutze etwas Nützliches, das du nach Questbeginn findest.",
  },
  helpFirst: {
    title: "Hilf zuerst",
    description: "Hilf, rette oder teile, bevor du dein eigenes Ziel verfolgst.",
  },
  holdYourRole: {
    title: "Bleib in deiner Rolle",
    description: "Erfülle eine Teamaufgabe bis zum vollständigen Ergebnis.",
  },
  oneMoreCorner: {
    title: "Nimm einen Umweg",
    description: "Erkunde eine optionale Abzweigung neben dem Hauptweg.",
  },
  noRestart: {
    title: "Spiel es zu Ende",
    description: "Spiele nach Fehlern weiter, statt neu zu starten oder zu laden.",
  },
  noUpgrades: {
    title: "Keine Upgrades",
    description: "Kaufe, schalte frei und rüste während der Quest nichts auf.",
  },
  spendTheGoodStuff: {
    title: "Nutze das Wertvolle",
    description: "Verbrauche eine wertvolle Ressource, die du sonst sparst.",
  },
  noCombat: {
    title: "Vermeide optionale Kämpfe",
    description: "Nutze Bewegung, Dialoge, Schleichen oder Geduld.",
  },
  firstInstinct: {
    title: "Erster Impuls",
    description: "Nimm die erste ehrliche Wahl, ohne Alternativen zu vergleichen.",
  },
  oppositeInstinct: {
    title: "Gegenteiliger Impuls",
    description: "Wähle die bedeutsame Option entgegen deiner Gewohnheit.",
  },
  landmarksOnly: {
    title: "Nur Orientierungspunkte",
    description: "Navigiere nach sichtbaren Orten statt nach Routenlinien.",
  },
  listenFirst: {
    title: "Hör zuerst zu",
    description: "Lass Dialoge und Weltgeräusche den nächsten Schritt bestimmen.",
  },
  followTheLocal: {
    title: "Folge einem Bewohner",
    description: "Lass einen Bewohner oder ein Wesen deine Route bestimmen.",
  },
  oneTool: {
    title: "Ein Hauptwerkzeug",
    description: "Nutze hauptsächlich ein Werkzeug oder eine Aktion als Lösung.",
  },
  localMaterials: {
    title: "Lokale Materialien",
    description: "Baue nur mit Materialien, die bereits vor Ort sind.",
  },
  onePalette: {
    title: "Eine Farbpalette",
    description: "Nutze eine Farbfamilie und einen kontrastierenden Akzent.",
  },
  noUndo: {
    title: "Kein Rückgängig",
    description: "Behalte jede platzierte, gemalte oder angepasste Entscheidung.",
  },
  firstTake: {
    title: "Behalte den ersten Versuch",
    description: "Behalte die erste vollständige Version ohne weitere Politur.",
  },
  oneRoom: {
    title: "Ein Bereich",
    description: "Beschränke alle Änderungen auf einen kleinen, klaren Bereich.",
  },
  photoProof: {
    title: "Bring ein Bild mit",
    description: "Mache einen Screenshot, der das fertige Ergebnis zeigt.",
  },
  leaveAGift: {
    title: "Hinterlasse ein Geschenk",
    description: "Hinterlasse eine nützliche Verbesserung oder Ressource für andere.",
  },
  stayTogether: {
    title: "Bleibt zusammen",
    description: "Bleibe in Sicht- oder Unterstützungsweite eines Mitspielers.",
  },
  quietLobby: {
    title: "Kein Mikrofon nötig",
    description: "Kommuniziere mit Pings, Bewegung, Emotes oder kurzem Text.",
  },
  borrowedStyle: {
    title: "Übernimm ihren Stil",
    description: "Kopiere eine sichtbare Route, Bauweise, Rhythmik oder Technik.",
  },
  threeAttempts: {
    title: "Drei Versuche",
    description: "Gib derselben Herausforderung drei vollständige Versuche.",
  },
  damageBudget: {
    title: "Schadensbudget",
    description: "Setze ein Schadenslimit und stoppe, wenn es aufgebraucht ist.",
  },
  underdogKit: {
    title: "Außenseiter-Option",
    description: "Nutze eine brauchbare Option unterhalb deines üblichen Favoriten.",
  },
  oneMove: {
    title: "Eine Technik tiefer",
    description: "Nutze eine Mechanik bewusst in drei Situationen.",
  },
  noShopping: {
    title: "Nicht einkaufen",
    description: "Kaufe nichts; nutze nur, was du besitzt oder findest.",
  },
  noLooting: {
    title: "Keine optionale Beute",
    description: "Lass optionale Beute und Inventarverwaltung liegen.",
  },
  noMarkers: {
    title: "Keine Marker",
    description: "Deaktiviere Marker und folge Hinweisen innerhalb der Welt.",
  },
  worldAudio: {
    title: "Geräusche der Welt",
    description: "Drehe die Musik leiser und höre auf die Umgebung.",
  },
  groundLevel: {
    title: "Auf Augenhöhe",
    description: "Halte die Kamera nah statt über dir oder weit entfernt.",
  },
} as const satisfies Record<string, QuestTip>;
