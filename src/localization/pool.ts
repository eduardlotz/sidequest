export const englishPool = {
  title: "Settings",
  description: "Choose which quests can appear in your pool.",
  genres: "Genre",
  types: "Quest type",
  genreHint:
    "Only quests for your selected genres can appear. General quests work with any selected genre.",
  typeHint: "Choose the quest types you want to draw.",
  save: "Save",
  cancel: "Cancel",
  empty: "No quests match these settings. Change your pool settings.",
};
export const germanPool: Record<keyof typeof englishPool, string> = {
  title: "Einstellungen",
  description: "Wähle, welche Quests in deinem Pool erscheinen dürfen.",
  genres: "Genre",
  types: "Quest-Typ",
  genreHint:
    "Du bekommst nur Quests angezeigt, die zu deinen Einstellungen passen.",
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
