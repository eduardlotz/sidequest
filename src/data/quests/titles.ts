export type LocalizedQuestTitle = {
  en: string;
  de: string;
};

/**
 * Explicit titles are used when the action title should differ from the final
 * sentence of the legacy instruction source. Other quests currently derive
 * their title from that final action sentence.
 */
export const QUEST_TITLES: Record<string, LocalizedQuestTitle> = {
  "explore-follow-the-signal": {
    en: "Travel somewhere new beyond Earth",
    de: "Reise zu einem neuen Ort jenseits der Erde",
  },
  "explore-mechanic-safari": {
    en: "Cross one neon district on foot",
    de: "Durchquere ein Neonviertel zu Fuß",
  },
  "explore-landmark-navigation": {
    en: "Reach one visible landmark from your shelter",
    de: "Erreiche einen sichtbaren Orientierungspunkt von deinem Unterschlupf",
  },
  "explore-other-camera": {
    en: "Direct the whole space from above",
    de: "Steuere den ganzen Bereich aus der Vogelperspektive",
  },
  "explore-earliest-release": {
    en: "Notice what an old level expects",
    de: "Erkenne, was ein altes Level von dir erwartet",
  },
  "explore-no-straight-line": {
    en: "Reach one goal by an unused route",
    de: "Erreiche ein Ziel über eine ungenutzte Route",
  },
  "explore-without-combat": {
    en: "Reach one nearby goal without fighting",
    de: "Erreiche ein nahes Ziel ohne Kampf",
  },
  "explore-opposite-choice": {
    en: "Choose against your instinct without reloading",
    de: "Entscheide gegen deinen Impuls ohne Neuladen",
  },
  "progress-shake-off-the-rust": {
    en: "Play three rounds without comparing old ranks",
    de: "Spiele drei Runden ohne Vergleich zum alten Rang",
  },
  "create-embrace-one-sided-balance": {
    en: "Balance one deliberately uneven composition",
    de: "Halte eine bewusst ungleiche Komposition im Gleichgewicht",
  },
  "create-factory-blueprint": {
    en: "Build one compact reusable factory module",
    de: "Baue ein kompaktes wiederverwendbares Fabrikmodul",
  },
  "challenge-adapt-on-contact": {
    en: "Try three times to beat one score",
    de: "Versuche dreimal einen Wert zu schlagen",
  },
  "challenge-rhythm-clean-song": {
    en: "Play one rhythm song three focused times",
    de: "Spiele einen Rhythmus-Song dreimal mit Fokus",
  },
  "connect-rescue-route": {
    en: "Fill the role a stranger team needs",
    de: "Übernimm die fehlende Rolle in einem fremden Team",
  },
  "connect-global-ghost": {
    en: "Chase one player ghost three times",
    de: "Jage einen Spielergeist dreimal",
  },
  "connect-common-language": {
    en: "Play the game that defines one fandom",
    de: "Spiele das prägende Spiel eines Fandoms",
  },
  "first-game-memory": {
    en: "Return to the place from your first game memory",
    de: "Kehre zum Ort deiner ersten Spielerinnerung zurück",
  },
  "childhood-coop-solo": {
    en: "Replay one shared stage without player two",
    de: "Spiele eine gemeinsame Strecke ohne zweiten Spieler",
  },
  "original-settings": {
    en: "Replay one opening from memory without a guide",
    de: "Spiele einen Anfang ohne Guide aus der Erinnerung",
  },
  "single-cover-pull": {
    en: "Launch the first blue-covered game you see",
    de: "Starte das erste Spiel mit blauem Cover",
  },
  "no-update-door": {
    en: "Start one ready game without updates",
    de: "Starte ein bereites Spiel ohne Updates",
  },
  "instant-movement": {
    en: "Run toward the first visible checkpoint",
    de: "Lauf zum ersten sichtbaren Kontrollpunkt",
  },
  "timed-objective": {
    en: "Follow one countdown to its result",
    de: "Folge einem Countdown bis zum Ergebnis",
  },
  "escape-the-hub": {
    en: "Leave the hub for one unplanned landmark",
    de: "Verlasse den Treffpunkt für einen ungeplanten Orientierungspunkt",
  },
  "focused-factory-bottleneck": {
    en: "Trace and fix one factory bottleneck",
    de: "Finde und behebe einen Fabrikengpass",
  },
  "historical-setting": {
    en: "Find one era-specific detail in a scenario",
    de: "Finde ein zeittypisches Detail in einem Szenario",
  },
  "curious-programming-game": {
    en: "Build the smallest fully automated solution",
    de: "Baue die kleinste vollständig automatische Lösung",
  },
  "curious-text-experiment": {
    en: "Resolve one scene using only its text",
    de: "Löse eine Szene nur mit ihrem Text",
  },
  "curious-obscure-sport": {
    en: "Find the rule that changes your strategy",
    de: "Finde die Regel, die deine Strategie verändert",
  },
  "gentle-management": {
    en: "Follow one routine without expanding or optimizing",
    de: "Folge einer Routine ohne Ausbau oder Optimierung",
  },
  "familiar-save": {
    en: "Finish one familiar task without the quest log",
    de: "Erledige eine bekannte Aufgabe ohne Questlog",
  },
  "low-energy-walking-story": {
    en: "Follow one quiet path to the next scene",
    de: "Folge einem ruhigen Weg zur nächsten Szene",
  },
  "relax-soft-landing": {
    en: "Revisit the game you loved growing up",
    de: "Kehre zu deinem liebsten Kindheitsspiel zurück",
  },
  "relax-scenic-route": {
    en: "Follow the first goal you already know",
    de: "Folge dem ersten Ziel, das du kennst",
  },
  "relax-care-shift": {
    en: "Listen to one familiar track somewhere quiet",
    de: "Höre ein vertrautes Stück an einem ruhigen Ort",
  },
  "relax-one-good-loop": {
    en: "Complete one task from your favorite hub",
    de: "Erledige eine Aufgabe an deinem Lieblingstreffpunkt",
  },
  "relax-small-wonder": {
    en: "Continue an old favorite to the next checkpoint",
    de: "Spiele einen alten Favoriten bis zum nächsten Kontrollpunkt",
  },
  "relax-three-loose-ends": {
    en: "Finish one part of a favorite series",
    de: "Beende einen Abschnitt deiner Lieblingsreihe",
  },
  "relax-next-save": {
    en: "Complete the next step you remember",
    de: "Erledige den nächsten erinnerten Schritt",
  },
  "relax-gentlest-mode": {
    en: "Lower one setting and reach a checkpoint",
    de: "Senke eine Einstellung und erreiche einen Kontrollpunkt",
  },
  "relax-pause-anytime": {
    en: "Pause halfway through one level or round",
    de: "Pausiere ein Level oder eine Runde zur Halbzeit",
  },
  "relax-turn-by-turn": {
    en: "Take your time with one turn-based battle",
    de: "Nimm dir Zeit für einen rundenbasierten Kampf",
  },
  "relax-easy-victory": {
    en: "Play one familiar challenge without chasing a record",
    de: "Spiele eine vertraute Herausforderung ohne Rekordjagd",
  },
  "relax-quietest-game": {
    en: "Complete one optional goal without a timer",
    de: "Erfülle ein optionales Ziel ohne Zeitdruck",
  },
  "relax-tend-one-thing": {
    en: "Complete the first care task waiting",
    de: "Erledige die erste wartende Fürsorgeaufgabe",
  },
  "relax-put-things-right": {
    en: "Put one unfinished room in order",
    de: "Bringe einen unfertigen Raum in Ordnung",
  },
  "relax-slow-journey": {
    en: "Travel to one landmark without fast travel",
    de: "Reise ohne Schnellreise zu einem Orientierungspunkt",
  },
  "relax-story-carries-you": {
    en: "Follow one story scene to its break",
    de: "Folge einer Story-Szene bis zum Wechsel",
  },
  "relax-one-puzzle": {
    en: "Solve the first untimed puzzle without hints",
    de: "Löse das erste Rätsel ohne Timer oder Hinweise",
  },
  "relax-friendly-face": {
    en: "Finish one conversation with a favorite character",
    de: "Beende ein Gespräch mit deiner Lieblingsfigur",
  },
  "relax-solo-room": {
    en: "Complete one guided exercise on your own",
    de: "Schließe allein eine angeleitete Übung ab",
  },
  "relax-forgiving-restart": {
    en: "Finish one run and spend its reward",
    de: "Beende einen Run und nutze seine Belohnung",
  },
  "relax-soft-colors": {
    en: "Explore one softly colored area to a checkpoint",
    de: "Erkunde einen sanften Bereich bis zum Kontrollpunkt",
  },
  "relax-good-weather": {
    en: "Choose your weather and travel through it",
    de: "Wähle dein Wetter und reise hindurch",
  },
  "relax-small-routine": {
    en: "Complete one familiar routine without extra chores",
    de: "Führe eine vertraute Routine ohne Zusatzaufgaben aus",
  },
  "relax-watch-and-wander": {
    en: "Find three details while wandering without markers",
    de: "Finde beim Umherstreifen drei Details ohne Marker",
  },
  "relax-one-button-deeper": {
    en: "Play one level for rhythm instead of perfection",
    de: "Spiele ein Level nach Rhythmus statt Perfektion",
  },
  "relax-safe-home-base": {
    en: "Finish one corner of your home base",
    de: "Richte eine Ecke deiner Basis fertig ein",
  },
  "relax-low-volume": {
    en: "Follow one dialogue scene quietly with captions",
    de: "Folge einer Dialogszene leise mit Untertiteln",
  },
  "relax-kindest-save-file": {
    en: "Complete the first task in a no-rush save",
    de: "Erledige die erste Aufgabe ohne Zeitdruck",
  },
  "relax-comforting-repetition": {
    en: "Complete one favorite loop and stop",
    de: "Schließe eine Lieblingsrunde ab und höre auf",
  },
  "relax-clean-exit": {
    en: "Finish exactly one chapter and stop",
    de: "Beende genau ein Kapitel und höre auf",
  },
  "relax-cozy-corner": {
    en: "Build one cozy corner your character can use",
    de: "Baue eine gemütliche Ecke für deine Figur",
  },
  "relax-fishing-break": {
    en: "Catch three fish at the nearest spot",
    de: "Fange drei Fische am nächsten Angelplatz",
  },
  "relax-quiet-drive": {
    en: "Take a drive without any hurry",
    de: "Fahre eine Runde ganz ohne Eile",
  },
  "relax-gentle-platformer": {
    en: "Reach one checkpoint without restarting the level",
    de: "Erreiche einen Kontrollpunkt ohne das Level neu zu starten",
  },
  "relax-solo-tabletop": {
    en: "Play one solo game from its first setup",
    de: "Spiele eine Solopartie mit der ersten Ausgangslage",
  },
  "relax-space-drift": {
    en: "Fly to the nearest station without fast travel",
    de: "Fliege ohne Schnellreise zur nächsten Station",
  },
};
