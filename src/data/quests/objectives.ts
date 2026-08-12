export type LocalizedQuestObjective = {
  en: string;
  de: string;
};

/** Explicit fixes for objectives whose legacy fragments lacked a visible end. */
export const QUEST_OBJECTIVES: Readonly<
  Record<string, LocalizedQuestObjective>
> = {
  "menu-music-door": {
    en: "Open a game whose menu theme you remember, listen until it repeats, then start its first level and reach the next checkpoint.",
    de: "Öffne ein Spiel, dessen Menüthema du erinnerst, höre bis zur Wiederholung zu, starte dann das erste Level und erreiche den nächsten Kontrollpunkt.",
  },
  "explore-follow-clue": {
    en: "Open a mystery game with an unresolved clue, inspect three connected pieces of evidence, and stop when the clue resolves or all three are recorded.",
    de: "Öffne ein Mystery-Spiel mit einer ungelösten Spur, untersuche drei verbundene Beweisstücke und höre auf, wenn die Spur gelöst oder alle drei festgehalten sind.",
  },
  "explore-small-world-big-idea": {
    en: "Open a short game with a strange premise, finish its first chapter or level, then state its central idea in one sentence.",
    de: "Öffne ein kurzes Spiel mit einer seltsamen Prämisse, beende das erste Kapitel oder Level und beschreibe die zentrale Idee in einem Satz.",
  },
  "explore-color-beacon": {
    en: "Pick the first installed cover dominated by one color, open it, enter an area dominated by that color, and reach its next checkpoint.",
    de: "Wähle das erste installierte Cover mit einer dominanten Farbe, öffne das Spiel, betrete einen Bereich mit dieser Farbe und erreiche den nächsten Kontrollpunkt.",
  },
  "explore-scale-shift": {
    en: "Open a game with enormous structures, choose one visible oversized landmark, travel to its base, and capture the full landmark in one image.",
    de: "Öffne ein Spiel mit riesigen Bauwerken, wähle ein sichtbares übergroßes Wahrzeichen, reise zu seinem Fuß und erfasse es vollständig auf einem Bild.",
  },
  "explore-rule-you-doubt": {
    en: "Open a game whose main mechanic sounds unconvincing, play its first level or round built around that mechanic, and finish it once.",
    de: "Öffne ein Spiel, dessen Hauptmechanik dich nicht überzeugt, spiele das erste darauf aufgebaute Level oder die erste Runde und beende sie einmal.",
  },
  "explore-archaeology-trail": {
    en: "Visit one ruin you never understood, inspect three details left behind, and capture the third detail before leaving the site.",
    de: "Besuche eine Ruine, die du nie verstanden hast, untersuche drei hinterlassene Details und fotografiere das dritte, bevor du den Ort verlässt.",
  },
  "progress-open-the-black-box": {
    en: "Return to a game with one intimidating system, use it during a tracked task, and stop when that action advances the task once.",
    de: "Kehre zu einem Spiel mit einem einschüchternden System zurück, nutze es in einer verfolgten Aufgabe und höre auf, sobald die Aktion die Aufgabe einmal voranbringt.",
  },
  "dormant-achievement": {
    en: "Open one unfinished achievement you once pursued, work only toward its requirement, and unlock it or complete three full attempts.",
    de: "Öffne eine unerledigte Errungenschaft, die du früher verfolgt hast, arbeite nur an ihrer Bedingung und schalte sie frei oder beende drei vollständige Versuche.",
  },
  "create-compose-a-place-theme": {
    en: "Open a game with a music editor, choose one familiar place as inspiration, create a short loop for it, and play the saved loop once.",
    de: "Öffne ein Spiel mit Musikeditor, wähle einen vertrauten Ort als Inspiration, erstelle eine kurze Schleife dafür und spiele die gespeicherte Schleife einmal ab.",
  },
  "create-sculpt-for-one-view": {
    en: "Choose one fixed viewpoint in a building game, change exactly three visible elements for that view, and save the build from that camera.",
    de: "Wähle einen festen Blickwinkel in einem Bauspiel, ändere genau drei sichtbare Elemente dafür und speichere den Bau aus dieser Kamera.",
  },
  "create-build-a-creatures-home": {
    en: "Choose one creature, build a habitat with one shelter, food source, and open route, then watch the creature use one placed feature.",
    de: "Wähle ein Wesen, baue einen Lebensraum mit Unterschlupf, Futterquelle und freiem Weg und beobachte, wie es ein platziertes Element benutzt.",
  },
  "create-design-for-the-smallest-user": {
    en: "Choose the smallest or slowest traveler in a building game, connect two useful places, and test the route from start to finish with them.",
    de: "Wähle die kleinste oder langsamste Figur in einem Bauspiel, verbinde zwei nützliche Orte und teste die Route mit ihr vom Anfang bis zum Ende.",
  },
  "create-accessible-route": {
    en: "Choose two useful places in a building game, connect them without stairs or narrow gaps, and test the route with the slowest available traveler.",
    de: "Wähle zwei nützliche Orte in einem Bauspiel, verbinde sie ohne Treppen oder enge Lücken und teste die Route mit der langsamsten verfügbaren Figur.",
  },
  "challenge-no-hint-hour": {
    en: "Choose one unsolved puzzle, inspect it without hints, and solve it or finish three complete attempts without changing puzzles.",
    de: "Wähle ein ungelöstes Rätsel, untersuche es ohne Hinweise und löse es oder beende drei vollständige Versuche, ohne das Rätsel zu wechseln.",
  },
  "deep-puzzle": {
    en: "Return to one puzzle that already resisted you, reconstruct what you know, and solve it or finish three complete attempts without changing puzzles.",
    de: "Kehre zu einem Rätsel zurück, das dir widerstanden hat, rekonstruiere dein Wissen und löse es oder beende drei vollständige Versuche ohne Rätselwechsel.",
  },
  "challenge-sports-comeback": {
    en: "Open a sports game with a comeback scenario, or load a saved match where you trail; play until the final result and win or draw.",
    de: "Öffne ein Sportspiel mit Comeback-Szenario oder lade ein gespeichertes Match mit Rückstand; spiele bis zum Endergebnis und gewinne oder erreiche ein Unentschieden.",
  },
  "connect-creator-signature": {
    en: "Open an unplayed game by a familiar creator, finish its first chapter or level, and name one recurring design detail you noticed there.",
    de: "Öffne ein ungespieltes Spiel eines vertrauten Schöpfers, beende das erste Kapitel oder Level und benenne ein wiederkehrendes Designdetail daraus.",
  },
  "connect-same-seed": {
    en: "Open a game with a shared seed from another player, start that seed unchanged, and reach its first checkpoint, completed objective, or successful save.",
    de: "Öffne ein Spiel mit einem geteilten Seed, starte ihn unverändert und erreiche seinen ersten Kontrollpunkt, sein erstes erfülltes Ziel oder seine erste erfolgreiche Speicherung.",
  },
  "connect-one-viewer-clip": {
    en: "Think of one viewer, play one complete round or scene for them, and capture one clip or screenshot before its result or scene break.",
    de: "Denk an eine Person, spiele für sie eine vollständige Runde oder Szene und nimm vor dem Ergebnis oder Szenenwechsel einen Clip oder Screenshot auf.",
  },
  "boss-study": {
    en: "Observe one boss until you can name three attack patterns, then finish the current attempt at victory or defeat.",
    de: "Beobachte einen Boss, bis du drei Angriffsmuster benennen kannst, und beende dann den aktuellen Versuch mit Sieg oder Niederlage.",
  },
  "genre-hybrid": {
    en: "Open a game combining two genres, finish its first level or round, and name one decision that used a mechanic from each genre.",
    de: "Öffne ein Spiel, das zwei Genres verbindet, beende das erste Level oder die erste Runde und benenne eine Entscheidung mit einer Mechanik aus jedem Genre.",
  },
  "object-history": {
    en: "Choose one object in a world with environmental storytelling, inspect exactly three nearby clues, and capture the third before leaving the object.",
    de: "Wähle ein Objekt in einer Welt mit Umgebungserzählung, untersuche genau drei Hinweise in der Nähe und fotografiere den dritten, bevor du das Objekt verlässt.",
  },
  "mechanic-without-tutorial": {
    en: "Open a game with an unexplained system, use that system successfully once through experimentation, and only then open its explanation.",
    de: "Öffne ein Spiel mit einem unerklärten System, nutze es durch Ausprobieren einmal erfolgreich und öffne erst danach seine Erklärung.",
  },
  "one-system-collision": {
    en: "Choose two systems that can interact, create one useful collision between them, trigger one visible effect, and capture the result.",
    de: "Wähle zwei Systeme, die interagieren können, erzeuge eine nützliche Kollision, löse einen sichtbaren Effekt aus und halte das Ergebnis fest.",
  },
  "familiar-save": {
    en: "Open a familiar save with one task you already understand, complete that task without checking the full quest log, and save after its completion notice.",
    de: "Öffne einen vertrauten Spielstand mit einer bekannten Aufgabe, erledige sie ohne das ganze Questlog zu prüfen und speichere nach ihrer Abschlussmeldung.",
  },
  "photo-stroll": {
    en: "Open a scenic world, walk to the first named landmark you can see, and keep one screenshot taken there.",
    de: "Öffne eine malerische Welt, gehe zum ersten sichtbaren benannten Wahrzeichen und behalte einen dort aufgenommenen Screenshot.",
  },
  "gentle-weather": {
    en: "Choose a familiar world with a visible day-night or weather cycle, sit in one safe place, and stay until the displayed state changes once.",
    de: "Wähle eine vertraute Welt mit sichtbarem Tages- oder Wetterzyklus, bleib an einem sicheren Ort sitzen und warte auf einen angezeigten Zustandswechsel.",
  },
  "strangest-installed": {
    en: "Scan the first visible row of installed covers, launch the strangest one without reading its description, and reach its first checkpoint, save, or result screen.",
    de: "Überfliege die erste sichtbare Reihe installierter Cover, starte das seltsamste ohne Beschreibung und erreiche den ersten Kontrollpunkt, Speicher- oder Ergebnisbildschirm.",
  },
};
