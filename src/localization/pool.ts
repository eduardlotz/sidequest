export const englishPool = {
  sourceHint:
    "Curated quests fit specific games; flexible quests match through activities.",
  typeDescription: {
    inspiration: "A direction to explore, with no required finish.",
    objective: "A specific task with a clear result.",
    experiment: "Try an approach or mechanic and see what happens.",
    creation: "Make or change something in the game.",
    challenge: "Attempt a goal under a meaningful restriction.",
    countdown: "Complete a task before the time limit.",
    speedrun: "Finish a fixed task and record your time.",
  },
  title: "Quest pool",
  legacyContext:
    "Your previous play-style restriction is preserved. Editing People, Participation, or Formation replaces it with your new choices.",
  zeroHelp:
    "No sessions fit this combination. Broaden the selected groups below or choose another mood or library game.",
  libraryCount_one:
    "{{quests}} quests across {{games}} playable game in your library",
  libraryCount_other:
    "{{quests}} quests across {{games}} playable games in your library",
  liveCount: "{{quests}} eligible quests for this selection",
  required: "Select at least one option in {{group}}.",
  reset: "Reset pool settings",
  selectAll: "Select all",
  formationHint:
    "Your group structure: no fixed group, a coordinated squad, or a team side.",
  participationHint:
    "Solo is individual play. Co-op means working toward a shared goal.",
  peopleHint: "Alone means no human teammates. Opponents and bots are fine.",
  formation: "Formation",
  participation: "Participation",
  people: "People",
  description:
    "Choose which quests can appear. Pick at least one choice in each group.",
  questSource: "Quest source",
  all: "All",
  curated: "Curated",
  flexible: "Flexible",
  genres: "Genre",
  connectionModes: "Connection",
  styles: "Play style",
  types: "Quest type",
  genreHint:
    "Only quests for your selected genres can appear. General quests work with any selected genre.",
  connectionModeHint: "Choose online, offline, or both.",
  styleHint:
    "Choose who you want to play with. Quests must also match your connection choice.",
  typeHint: "Types describe a quest’s goal or format.",
  save: "Save",
  cancel: "Cancel",
  empty: "No quests match these settings. Change your pool settings.",
};
export const germanPool: {
  [K in keyof typeof englishPool]: (typeof englishPool)[K] extends string
    ? string
    : Record<keyof (typeof englishPool)[K], string>;
} = {
  sourceHint:
    "Kuratierte Quests passen zu bestimmten Spielen; flexible Quests zu deren Aktivitäten.",
  typeDescription: {
    inspiration: "Eine Richtung zum Erkunden, ohne festes Ziel.",
    objective: "Eine konkrete Aufgabe mit erkennbarem Ergebnis.",
    experiment: "Probiere eine Herangehensweise oder Mechanik aus.",
    creation: "Gestalte oder verändere etwas im Spiel.",
    challenge: "Versuche ein Ziel mit einer sinnvollen Einschränkung.",
    countdown: "Erledige eine Aufgabe vor Ablauf des Zeitlimits.",
    speedrun: "Schließe eine feste Aufgabe ab und speichere deine Zeit.",
  },
  title: "Quest-Pool",
  legacyContext:
    "Deine bisherige Spielweisen-Einschränkung bleibt erhalten. Eine Änderung an Mit wem, Teilnahme oder Formation ersetzt sie durch deine neue Auswahl.",
  zeroHelp:
    "Keine Session passt zu dieser Kombination. Öffne die Gruppen unten weiter oder wähle eine andere Stimmung oder ein anderes Spiel.",
  libraryCount_one:
    "{{quests}} Quests in {{games}} spielbarem Spiel deiner Sammlung",
  libraryCount_other:
    "{{quests}} Quests in {{games}} spielbaren Spielen deiner Sammlung",
  liveCount: "{{quests}} passende Quests für diese Auswahl",
  required: "Wähle in {{group}} mindestens eine Option.",
  reset: "Pool-Einstellungen zurücksetzen",
  selectAll: "Alle auswählen",
  formationHint:
    "Deine Gruppenstruktur: keine feste Gruppe, ein koordinierter Squad oder eine Teamseite.",
  participationHint:
    "Solo ist individuelles Spielen. Koop bedeutet Zusammenarbeit an einem gemeinsamen Ziel.",
  peopleHint:
    "Allein heißt ohne menschliche Teammitglieder. Gegner und Bots sind möglich.",
  formation: "Formation",
  participation: "Teilnahme",
  people: "Mit wem",
  description:
    "Wähle, welche Quests erscheinen dürfen. Wähle in jeder Gruppe mindestens eine Option.",
  questSource: "Quest-Herkunft",
  all: "Alle",
  curated: "Kuratiert",
  flexible: "Flexibel",
  genres: "Genre",
  connectionModes: "Verbindung",
  styles: "Spielweise",
  types: "Quest-Typ",
  genreHint:
    "Nur Quests für deine gewählten Genres erscheinen. Allgemeine Quests passen zu jedem gewählten Genre.",
  connectionModeHint: "Wähle online, offline oder beides.",
  styleHint:
    "Wähle, mit wem du spielen möchtest. Quests müssen auch zur gewählten Verbindung passen.",
  typeHint: "Typen beschreiben das Ziel oder Format einer Quest.",
  save: "Speichern",
  cancel: "Abbrechen",
  empty: "Keine Quests passen zu diesen Einstellungen. Passe deinen Pool an.",
};
export const englishTimed = {
  countdownExpired: "Time's up. Repeat or cancel for free.",
  repeatCountdown: "Repeat",
  cancelCountdown: "Cancel",
  countdownReady:
    "Pull to start. Pause and complete before the {{minutes}} minutes run out.",
  speedrunReady:
    "Pull to start. Pause as soon as you finish, then save your time.",
  countdownLimit: "{{minutes}} min limit",
  stopwatch: "Stopwatch",
};
export const germanTimed: Record<keyof typeof englishTimed, string> = {
  countdownExpired: "Zeit abgelaufen.",
  repeatCountdown: "Wiederholen",
  cancelCountdown: "Abbrechen",
  countdownReady:
    "Ziehe zum Starten. Pausiere und schließe die Quest ab, bevor die {{minutes}} Minuten ablaufen.",
  speedrunReady:
    "Ziehe zum Starten. Pausiere direkt am Ziel und speichere deine Zeit.",
  countdownLimit: "{{minutes}} Min Zeitlimit",
  stopwatch: "Stoppuhr",
};
