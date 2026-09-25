export const englishPool = {
  title: "Quest pool",
  description: "Choose which quests can appear. Pick at least one choice in each group.",
  genres: "Genre",
  connectionModes: "Connection",
  styles: "Play style",
  types: "Quest type",
  genreHint:
    "Only quests for your selected genres can appear. General quests work with any selected genre.",
  connectionModeHint: "Choose online, offline, or both.",
  styleHint:
    "Choose who you want to play with. Quests must also match your connection choice.",
  typeHint: "Choose the quest types you want to draw.",
  save: "Save",
  cancel: "Cancel",
  empty: "No quests match these settings. Change your pool settings.",
};
export const germanPool: Record<keyof typeof englishPool, string> = {
  title: "Quest-Pool",
  description: "Wähle, welche Quests erscheinen dürfen. Wähle in jeder Gruppe mindestens eine Option.",
  genres: "Genre",
  connectionModes: "Verbindung",
  styles: "Spielweise",
  types: "Quest-Typ",
  genreHint:
    "Nur Quests für deine gewählten Genres erscheinen. Allgemeine Quests passen zu jedem gewählten Genre.",
  connectionModeHint: "Wähle online, offline oder beides.",
  styleHint:
    "Wähle, mit wem du spielen möchtest. Quests müssen auch zur gewählten Verbindung passen.",
  typeHint: "Wähle die Quest-Typen, die du ziehen möchtest.",
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
  countdownExpired: "Zeit abgelaufen. Kostenlos wiederholen oder abbrechen.",
  repeatCountdown: "Wiederholen",
  cancelCountdown: "Abbrechen",
  countdownReady:
    "Ziehe zum Starten. Pausiere und schließe die Quest ab, bevor die {{minutes}} Minuten ablaufen.",
  speedrunReady:
    "Ziehe zum Starten. Pausiere direkt am Ziel und speichere deine Zeit.",
  countdownLimit: "{{minutes}} Min Zeitlimit",
  stopwatch: "Stoppuhr",
};
