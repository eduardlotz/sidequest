export const englishPool = {
  title: "Settings", description: "Choose which quests can appear in your pool.", genres: "Genre", styles: "Play style", types: "Quest type",
  genreHint: "Only quests for your selected genres can appear. General quests work with any selected genre.",
  styleHint: "Choose the ways you want to play. Quests must match at least one selected play style.",
  typeHint: "Choose the quest types you want to draw. Extension quests also require their pack.",
  save: "Save", cancel: "Cancel", empty: "No quests match these settings. Change your pool settings or unlock another pack.",
};
export const germanPool: Record<keyof typeof englishPool, string> = {
  title: "Einstellungen", description: "Wähle, welche Quests in deinem Pool erscheinen dürfen.", genres: "Genre", styles: "Modus", types: "Quest-Typ",
  genreHint: "Es erscheinen nur Quests für deine gewählten Genres. Allgemeine Quests passen zu jedem gewählten Genre.",
  styleHint: "Wähle, wie du spielen möchtest. Quests müssen zu mindestens einem gewählten Modus passen.",
  typeHint: "Wähle die Quest-Typen, die du ziehen möchtest. Erweiterungsquests benötigen zusätzlich ihr Paket.",
  save: "Speichern", cancel: "Abbrechen", empty: "Keine Quests passen zu diesen Einstellungen. Passe deinen Pool an oder schalte ein weiteres Paket frei.",
};
export const englishShop = {
  title: "Quest shop", description: "Expand your moods with new quests. Every pack costs 50 coins and unlocks 9 quests permanently.",
  questCount: "{{count}} quests", owned: "Owned", ownedPack: "{{pack}} is already unlocked", buyPack: "Buy {{pack}} for {{price}} coins",
};
export const germanShop: Record<keyof typeof englishShop, string> = {
  title: "Quest-Shop", description: "Erweitere deine Stimmungen mit neuen Quests. Jedes Paket kostet 50 Münzen und schaltet dauerhaft 9 Quests frei.",
  questCount: "{{count}} Quests", owned: "Gekauft", ownedPack: "{{pack}} ist bereits freigeschaltet", buyPack: "{{pack}} für {{price}} Münzen kaufen",
};
export const englishTimed = {
  countdownExpired: "Time's up. Repeat or cancel for free.", repeatCountdown: "Repeat", cancelCountdown: "Cancel",
  countdownReady: "Pull to start. Pause and complete before the {{minutes}} minutes run out.",
  speedrunReady: "Pull to start. Pause as soon as you finish, then save your time.",
  countdownLimit: "{{minutes}} min limit", stopwatch: "Stopwatch",
};
export const germanTimed: Record<keyof typeof englishTimed, string> = {
  countdownExpired: "Zeit abgelaufen. Kostenlos wiederholen oder abbrechen.", repeatCountdown: "Wiederholen", cancelCountdown: "Abbrechen",
  countdownReady: "Ziehe zum Starten. Pausiere und schließe die Quest ab, bevor die {{minutes}} Minuten ablaufen.",
  speedrunReady: "Ziehe zum Starten. Pausiere direkt am Ziel und speichere deine Zeit.",
  countdownLimit: "{{minutes}} Min Zeitlimit", stopwatch: "Stoppuhr",
};
