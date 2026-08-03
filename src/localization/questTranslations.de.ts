import type { QuestTranslation } from "../data/quests";
import { QUEST_INSTRUCTIONS } from "../data/quests/instructions";
import { germanQuestNames } from "./questNames.de";

const germanQuestCopy = {
  "relax-soft-landing": {
    "title": "Spiele einen Kindheitsfavoriten",
  },
  "relax-scenic-route": {
    "title": "Spiele aus dem Muskelgedächtnis",
  },
  "relax-care-shift": {
    "title": "Folge einem bekannten Soundtrack",
  },
  "relax-one-good-loop": {
    "title": "Besuche einen Lieblingsort noch einmal",
  },
  "relax-small-wonder": {
    "title": "Kehre zu einem vergessenen Lieblingsspiel zurück",
  },
  "relax-three-loose-ends": {
    "title": "Kehre zu einer Lieblingsserie zurück",
  },
  "relax-next-save": {
    "title": "Setze deinen einfachsten Spielstand fort",
  },
  "relax-gentlest-mode": {
    "title": "Senke den Druck",
  },
  "relax-pause-anytime": {
    "title": "Spiele etwas Pausierbares",
  },
  "relax-turn-by-turn": {
    "title": "Plane einen rundenbasierten Kampf",
  },
  "relax-easy-victory": {
    "title": "Hol dir einen einfachen Sieg",
  },
  "relax-quietest-game": {
    "title": "Spiele dein leisestes Spiel",
  },
  "relax-tend-one-thing": {
    "title": "Kümmere dich um etwas",
  },
  "relax-put-things-right": {
    "title": "Bringe einen Bereich in Ordnung",
  },
  "relax-slow-journey": {
    "title": "Segle oder fahre langsam",
  },
  "relax-story-carries-you": {
    "title": "Spiele ein sanftes Abenteuer",
  },
  "relax-one-puzzle": {
    "title": "Löse ein ruhiges Rätsel",
  },
  "relax-friendly-face": {
    "title": "Besuche einen freundlichen Charakter",
  },
  "relax-solo-room": {
    "title": "Spiele komplett alleine",
  },
  "relax-forgiving-restart": {
    "title": "Versuche es mit einem verzeihenden Spiel",
  },
  "relax-soft-colors": {
    "title": "Folge der sanftesten Farbwelt",
  },
  "relax-good-weather": {
    "title": "Finde besseres Wetter",
  },
  "relax-small-routine": {
    "title": "Wiederhole eine Beruhigungsroutine",
  },
  "relax-watch-and-wander": {
    "title": "Streife umher und beobachte",
  },
  "relax-one-button-deeper": {
    "title": "Spiele ein Ein-Knopf-Spiel",
  },
  "relax-safe-home-base": {
    "title": "Bleibe in der Heimatbasis",
  },
  "relax-low-volume": {
    "title": "Spiele mit geringer Lautstärke",
  },
  "relax-kindest-save-file": {
    "title": "Öffne deinen ruhigsten Spielstand",
  },
  "relax-comforting-repetition": {
    "title": "Wiederhole eine Lieblingsaktivität",
  },
  "relax-clean-exit": {
    "title": "Beende eine klare Spielsession",
  },
  "relax-cozy-corner": {
    "title": "Baue eine gemütliche Ecke",
  },
  "relax-fishing-break": {
    "title": "Gehe angeln",
  },
  "relax-quiet-drive": {
    "title": "Unternimm eine ruhige Fahrt",
  },
  "relax-gentle-platformer": {
    "title": "Spiele einen entspannten Plattformer",
  },
  "relax-solo-tabletop": {
    "title": "Spiele ein digitales Brettspiel",
  },
  "relax-space-drift": {
    "title": "Treibe durch den Weltraum",
  },
  "explore-wrong-turn": {
    "title": "Spiele das dritte Spiel deiner Bibliothek",
  },
  "explore-follow-the-signal": {
    "title": "Erkunde eine Welt jenseits der Erde",
  },
  "explore-edge-of-known": {
    "title": "Betrete eine Fantasiewelt",
  },
  "explore-mechanic-safari": {
    "title": "Besuche eine Neonstadt",
  },
  "explore-landmark-navigation": {
    "title": "Betrete die Wildnis",
  },
  "explore-behind-the-obvious": {
    "title": "Durchquere eine Wüstenwelt",
  },
  "explore-below-surface": {
    "title": "Gehe unter Wasser",
  },
  "explore-world-underfoot": {
    "title": "Entdecke den Untergrund",
  },
  "explore-borrowed-body": {
    "title": "Spiele als Tier",
  },
  "explore-other-camera": {
    "title": "Spiele von oben",
  },
  "explore-genre-detour": {
    "title": "Versuche es mit einem vernachlässigten Genre",
  },
  "explore-physical-rule": {
    "title": "Versuche es mit einer ungewöhnlichen Steuerung",
  },
  "explore-follow-clue": {
    "title": "Folge einem Hinweis",
  },
  "explore-command-view": {
    "title": "Kommandiere das ganze Spielfeld",
  },
  "explore-play-by-ear": {
    "title": "Spiele nach Gehör",
  },
  "explore-movement-language": {
    "title": "Probiere neue Bewegung aus",
  },
  "explore-words-have-weight": {
    "title": "Verändere etwas mit Worten",
  },
  "explore-small-world-big-idea": {
    "title": "Probiere ein kleines seltsames Spiel aus",
  },
  "explore-never-same-twice": {
    "title": "Starte einen neuen Run",
  },
  "explore-one-word-door": {
    "title": "Öffne den kürzesten Titel",
  },
  "explore-color-beacon": {
    "title": "Folge einer Coverfarbe",
  },
  "explore-earliest-release": {
    "title": "Spiele einen frühen Klassiker",
  },
  "explore-genre-collision": {
    "title": "Löse ein First-Person-Rätsel",
  },
  "explore-no-straight-line": {
    "title": "Wähle deine eigene Route",
  },
  "explore-failure-teaches": {
    "title": "Lerne aus einer Niederlage",
  },
  "explore-unusual-job": {
    "title": "Arbeite eine ungewöhnliche Schicht",
  },
  "explore-without-combat": {
    "title": "Komme ohne Kämpfe voran",
  },
  "explore-scale-shift": {
    "title": "Ändere deinen Maßstab",
  },
  "explore-rule-you-doubt": {
    "title": "Teste die Kernprämisse",
  },
  "explore-opposite-choice": {
    "title": "Folge dem anderen Instinkt",
  },
  "explore-immersive-sim": {
    "title": "Probiere einen immersiven Sim aus",
  },
  "explore-metroidvania-shortcut": {
    "title": "Finde eine versteckte Abkürzung",
  },
  "explore-archaeology-trail": {
    "title": "Erkunde die Spuren eines alten Ortes",
  },
  "explore-unfamiliar-cockpit": {
    "title": "Lerne ein unbekanntes Cockpit kennen",
  },
  "explore-tiny-world": {
    "title": "Entdecke eine kleine Welt",
  },
  "explore-wordless-world": {
    "title": "Versuche es mit einem wortlosen Spiel",
  },
  "progress-break-the-blocker": {
    "title": "Starte ein nicht gespieltes Spiel",
  },
  "progress-clean-finish": {
    "title": "Gib einem Spiel eine faire Chance",
  },
  "progress-one-tier-better": {
    "title": "Setze einen aufgegebenen Spielstand fort",
  },
  "progress-three-step-plan": {
    "title": "Schalte etwas in einem Shooter frei",
  },
  "progress-recovery-run": {
    "title": "Bringe die nächste Kampagne voran",
  },
  "progress-two-birds": {
    "title": "Gib einem installierten Spiel eine Chance",
  },
  "progress-wake-the-sleeping-save": {
    "title": "Wecke deinen ältesten Spielstand",
  },
  "progress-honor-the-oldest-promise": {
    "title": "Schließe die älteste Quest ab",
  },
  "progress-open-the-black-box": {
    "title": "Verstehe ein schwieriges Spielsystem",
  },
  "progress-revisit-the-wall": {
    "title": "Löse ein festgefahrenes Rätsel",
  },
  "progress-clear-one-map-pocket": {
    "title": "Schließe einen Kartenbereich ab",
  },
  "progress-open-the-expansion-door": {
    "title": "Starte eine nicht gespielte Erweiterung",
  },
  "progress-let-the-other-hero-grow": {
    "title": "Bringe eine vernachlässigte Figur voran",
  },
  "progress-rebuild-muscle-memory": {
    "title": "Lerne die vergessene Steuerung neu",
  },
  "progress-follow-the-remembered-thread": {
    "title": "Setze die erinnerte Geschichte fort",
  },
  "progress-shake-off-the-rust": {
    "title": "Schüttle den Wettkampfrost ab",
  },
  "progress-claim-the-nearby-feat": {
    "title": "Schalte ein nahes Achievement frei",
  },
  "progress-return-to-the-gift": {
    "title": "Spiele ein geschenktes Spiel",
  },
  "progress-choose-the-short-road": {
    "title": "Bringe die kürzeste Kampagne voran",
  },
  "progress-cross-the-middle": {
    "title": "Bringe eine Kampagne im Mittelteil voran",
  },
  "progress-unpack-and-move": {
    "title": "Behebe ein überlastetes Inventar",
  },
  "progress-prove-one-technique": {
    "title": "Mache eine Technik zuverlässig",
  },
  "progress-play-the-missing-link": {
    "title": "Starte die fehlende Fortsetzung",
  },
  "progress-earn-the-specific-upgrade": {
    "title": "Verdiene ein nahes Upgrade",
  },
  "progress-remove-one-barrier": {
    "title": "Entferne eine Spielhürde",
  },
  "progress-finish-a-favorites-loose-end": {
    "title": "Erledige eine offene Aufgabe im Lieblingsspiel",
  },
  "progress-take-the-road-not-used": {
    "title": "Bringe den anderen Handlungszweig voran",
  },
  "progress-rescue-the-secondary-save": {
    "title": "Rette einen zweiten Spielstand",
  },
  "progress-transfer-a-strength": {
    "title": "Übertrage eine Fähigkeit",
  },
  "progress-spend-the-hoarded-resource": {
    "title": "Nutze eine gehortete Ressource",
  },
  "progress-finish-the-tutorial": {
    "title": "Schließe ein verlassenes Tutorial ab",
  },
  "progress-roguelike-meta-step": {
    "title": "Bringe einen Roguelike-Spielstand voran",
  },
  "progress-complete-a-season": {
    "title": "Schließe eine In-Game-Saison ab",
  },
  "progress-open-the-endgame": {
    "title": "Erreiche das Endspiel",
  },
  "progress-master-one-recipe": {
    "title": "Meistere ein Rezept",
  },
  "progress-fix-one-crisis": {
    "title": "Behebe eine Managementkrise",
  },
  "create-new-build-old-parts": {
    "title": "Baue etwas von Grund auf",
  },
  "create-function-first": {
    "title": "Passe einen Charakter an",
  },
  "create-rule-of-three": {
    "title": "Baue eine funktionierende Maschine",
  },
  "create-strategy-remix": {
    "title": "Erfinde einen neuen Build",
  },
  "create-make-a-landmark": {
    "title": "Entwerfe ein spielbares Level",
  },
  "create-before-and-after": {
    "title": "Mach einen Fotospaziergang",
  },
  "create-tell-a-room-sized-story": {
    "title": "Erzähle eine Geschichte in einem Raum",
  },
  "create-make-the-useful-prototype": {
    "title": "Baue einen nützlichen Prototyp",
  },
  "create-build-around-the-flaw": {
    "title": "Baue um das Hindernis herum",
  },
  "create-design-one-livable-block": {
    "title": "Baue einen lebenswerten Block",
  },
  "create-shape-a-seasonal-garden": {
    "title": "Pflanze einen saisonalen Garten",
  },
  "create-dress-for-an-npc": {
    "title": "Kleide dich wie ein NPC",
  },
  "create-take-an-honest-portrait": {
    "title": "Fotografiere eine Figur in einem ruhigen Moment",
  },
  "create-chase-one-kind-of-light": {
    "title": "Fotografiere eine Art Licht",
  },
  "create-stage-a-three-frame-story": {
    "title": "Erzähle eine Geschichte mit drei Bildern",
  },
  "create-curate-the-odd-shelf": {
    "title": "Kuratiere eine ungewöhnliche Sammlung",
  },
  "create-build-a-creatures-home": {
    "title": "Baue einem Wesen ein Zuhause",
  },
  "create-embrace-one-sided-balance": {
    "title": "Gestalte bewusst asymmetrisch",
  },
  "create-run-a-kind-economy": {
    "title": "Baue eine faire Wirtschaft",
  },
  "create-invent-a-team-identity": {
    "title": "Gib einem Team eine Identität",
  },
  "create-roleplay-a-local": {
    "title": "Spiele einen gewöhnlichen Alltag",
  },
  "create-solve-it-sideways": {
    "title": "Finde eine ungewöhnliche Lösung",
  },
  "create-draw-with-a-route": {
    "title": "Zeichne mit deiner Route",
  },
  "create-compose-a-place-theme": {
    "title": "Komponiere ein Thema für einen Ort",
  },
  "create-sculpt-for-one-view": {
    "title": "Baue für einen Blickwinkel",
  },
  "create-repair-with-a-new-idea": {
    "title": "Repariere eine alte Kreation",
  },
  "create-stage-a-silent-scene": {
    "title": "Inszeniere eine stille Szene",
  },
  "create-design-for-the-smallest-user": {
    "title": "Baue für den langsamsten Reisenden",
  },
  "create-invent-a-personal-ritual": {
    "title": "Erfinde ein Spielritual",
  },
  "create-leave-a-kind-trace": {
    "title": "Hinterlasse einen Ort besser",
  },
  "create-boss-arena": {
    "title": "Entwerfe eine Boss-Arena",
  },
  "create-themed-deck": {
    "title": "Baue ein Themendeck",
  },
  "create-accessible-route": {
    "title": "Baue eine barrierefreie Route",
  },
  "create-racing-livery": {
    "title": "Entwerfe eine Rennlackierung",
  },
  "create-factory-blueprint": {
    "title": "Erstelle einen wiederverwendbaren Bauplan",
  },
  "create-character-backstory": {
    "title": "Entwirf eine Hintergrundgeschichte",
  },
  "challenge-first-try-counts": {
    "title": "Spiele ein Fighting-Game-Set",
  },
  "challenge-one-step-harder": {
    "title": "Spiele drei Shooter-Matches",
  },
  "challenge-beat-your-ghost": {
    "title": "Fahre drei Rennen",
  },
  "challenge-pressure-proof": {
    "title": "Sei einem Gegner voraus",
  },
  "challenge-thin-margin": {
    "title": "Spiele ein vollständiges Sportmatch",
  },
  "challenge-adapt-on-contact": {
    "title": "Schlage deine persönliche Bestleistung",
  },
  "challenge-return-to-the-wall": {
    "title": "Wiederhole die schwierige Begegnung",
  },
  "challenge-one-notch-higher": {
    "title": "Erhöhe den Schwierigkeitsgrad einmal",
  },
  "challenge-three-life-window": {
    "title": "Nutze nur drei Leben",
  },
  "challenge-neglected-tool": {
    "title": "Verwende das vernachlässigte Werkzeug",
  },
  "challenge-silent-route": {
    "title": "Durchquere einen Bereich unentdeckt",
  },
  "challenge-rationed-run": {
    "title": "Komme mit halben Vorräten aus",
  },
  "challenge-boss-rematch": {
    "title": "Besiege einen Boss mit einfacher Ausrüstung",
  },
  "challenge-precision-passage": {
    "title": "Schließe eine Präzisionspassage ab",
  },
  "challenge-no-hint-hour": {
    "title": "Löse es ohne Hinweise",
  },
  "challenge-weak-link-drill": {
    "title": "Trainiere deine schwächste Fähigkeit",
  },
  "challenge-daily-trial": {
    "title": "Schließe die heutige Herausforderung ab",
  },
  "challenge-underdog-kit": {
    "title": "Nutze die Underdog-Option",
  },
  "challenge-no-restart-recovery": {
    "title": "Erhole dich ohne Neustart",
  },
  "challenge-pattern-reader": {
    "title": "Lerne ein Muster",
  },
  "challenge-last-stand": {
    "title": "Halte drei Wellen",
  },
  "challenge-ranked-nerves": {
    "title": "Schließe ein Ranglistenspiel ab",
  },
  "challenge-nearby-achievement": {
    "title": "Versuche einen schwierigen Erfolg",
  },
  "challenge-survival-shift": {
    "title": "Überlebe eine ganze Schicht",
  },
  "challenge-one-mechanic-master": {
    "title": "Lerne eine fortgeschrittene Technik",
  },
  "challenge-clean-combo": {
    "title": "Lande eine saubere Sequenz",
  },
  "challenge-damage-budget": {
    "title": "Bleibe unter einem Schadensbudget",
  },
  "challenge-unknown-ruleset": {
    "title": "Beende einen neuen Modus",
  },
  "challenge-audacious-route": {
    "title": "Gehe den riskanten Weg",
  },
  "challenge-tension-you-avoid": {
    "title": "Bleibe bei der Spannung",
  },
  "challenge-platformer-no-fall": {
    "title": "Schaffe einen Abschnitt ohne Sturz",
  },
  "challenge-tactics-iron-plan": {
    "title": "Schließe eine Taktikmission sauber ab",
  },
  "challenge-rhythm-clean-song": {
    "title": "Verbessere einen Song",
  },
  "challenge-sports-comeback": {
    "title": "Schaffe ein Sport-Comeback",
  },
  "challenge-extraction-one-haul": {
    "title": "Bringe eine nützliche Beute in Sicherheit",
  },
  "challenge-speedrun-one-split": {
    "title": "Trainiere einen Speedrun-Split",
  },
  "connect-lift-the-lowest": {
    "title": "Kehre zum alten Squad-Spiel zurück",
  },
  "connect-follow-their-lead": {
    "title": "Tritt einem neuen Team bei",
  },
  "connect-share-the-upgrade": {
    "title": "Probiere die Empfehlung einer befreundeten Person",
  },
  "connect-rescue-route": {
    "title": "Kooperiere mit Fremden",
  },
  "connect-set-up-the-finish": {
    "title": "Tritt einer gemeinsamen Welt bei",
  },
  "connect-trade-roles": {
    "title": "Lass eine Person wählen",
  },
  "connect-global-ghost": {
    "title": "Verfolge den Geist eines anderen Spielers",
  },
  "connect-daily-crowd": {
    "title": "Nimm an einem offenen Turnier teil",
  },
  "connect-player-made-door": {
    "title": "Spiele ein Community-Level",
  },
  "connect-leave-a-signal": {
    "title": "Hilf einem unbekannten Spieler",
  },
  "connect-shared-save-return": {
    "title": "Kehre zu einem gemeinsamen Spielstand zurück",
  },
  "connect-watched-first": {
    "title": "Spiele, was du einmal gesehen hast",
  },
  "connect-creator-signature": {
    "title": "Folge einem bekannten Kreativen",
  },
  "connect-showpiece-session": {
    "title": "Spiele dein Vorzeigespiel",
  },
  "connect-community-mod": {
    "title": "Probiere einen Community-Remix aus",
  },
  "connect-same-seed": {
    "title": "Spiele mit einem geteilten Seed",
  },
  "connect-common-language": {
    "title": "Spiele den meistdiskutierten Modus",
  },
  "connect-friends-leaderboard": {
    "title": "Fordere eine bekannte Punktzahl heraus",
  },
  "connect-asynchronous-turn": {
    "title": "Mache einen asynchronen Zug",
  },
  "connect-community-build": {
    "title": "Ergänze ein gemeinsames Bauwerk",
  },
  "connect-replay-company": {
    "title": "Lerne von einer Wiederholung",
  },
  "connect-pass-it-on": {
    "title": "Bereite eine Empfehlung vor",
  },
  "connect-quiet-lobby": {
    "title": "Kooperiere ohne Voice-Chat",
  },
  "connect-borrow-their-style": {
    "title": "Übernimm den Stil eines anderen Spielers",
  },
  "connect-community-tactic": {
    "title": "Nutze eine Community-Taktik",
  },
  "connect-fandom-doorway": {
    "title": "Tauche in ein gemeinsames Fandom ein",
  },
  "connect-small-kindness": {
    "title": "Tu etwas Hilfreiches",
  },
  "connect-parallel-company": {
    "title": "Spiele in Begleitung einer Stimme",
  },
  "connect-memory-reconstruction": {
    "title": "Baue eine gemeinsame Erinnerung nach",
  },
  "connect-one-viewer-clip": {
    "title": "Erzeuge einen teilbaren Moment",
  },
  "connect-couch-handoff": {
    "title": "Teile dir einen Controller",
  },
  "connect-party-lobby": {
    "title": "Tritt einer Party-Game-Lobby bei",
  },
  "connect-public-event": {
    "title": "Nimm an einem öffentlichen Event teil",
  },
  "connect-trade-a-gift": {
    "title": "Verschenke etwas Nützliches",
  },
  "connect-coop-puzzle": {
    "title": "Löse ein Koop-Rätsel",
  },
  "connect-support-the-lowest": {
    "title": "Unterstütze das schwächste Teammitglied",
  },
  "first-game-memory": {
    "title": "Erlebe deine erste Spielerinnerung erneut",
  },
  "menu-music-door": {
    "title": "Folge der Menümusik",
  },
  "old-console-era": {
    "title": "Spiele einen Klassiker deiner früheren Konsole",
  },
  "series-beginning": {
    "title": "Kehre zum ersten Kapitel zurück",
  },
  "forgotten-save": {
    "title": "Öffne einen Spielstand wie eine Zeitkapsel",
  },
  "childhood-coop-solo": {
    "title": "Spiele ein altes Koop-Spiel",
  },
  "first-hard-win": {
    "title": "Erlebe einen alten Triumph erneut",
  },
  "rental-weekend": {
    "title": "Kehre zu einem geliehenen Spiel zurück",
  },
  "demo-memory": {
    "title": "Spiele einen vertrauten Anfang erneut",
  },
  "old-avatar": {
    "title": "Besuche einen alten Charakter",
  },
  "lost-mode": {
    "title": "Spiele den Nachfolger eines verlorenen Modus",
  },
  "remembered-map": {
    "title": "Navigiere die Karte aus der Erinnerung",
  },
  "credits-memory": {
    "title": "Erlebe ein denkwürdiges Ende erneut",
  },
  "licensed-childhood": {
    "title": "Spiele einen Samstagmorgen-Klassiker",
  },
  "handheld-evening": {
    "title": "Kehre zu einem Handheld-Favoriten zurück",
  },
  "seasonal-memory": {
    "title": "Kehre zu einem saisonalen Spiel zurück",
  },
  "family-game": {
    "title": "Spiele den Familienklassiker erneut",
  },
  "old-friend-pick": {
    "title": "Spiele den Favoriten eines Freundes",
  },
  "retired-strategy": {
    "title": "Verwende deine alte Strategie wieder",
  },
  "classic-roster": {
    "title": "Nutze eine vertraute Aufstellung",
  },
  "old-racing-line": {
    "title": "Fahr eine Strecke aus deiner Erinnerung",
  },
  "first-rpg-town": {
    "title": "Besuche deine erste RPG-Stadt",
  },
  "old-horror-courage": {
    "title": "Kehre zu einem alten Schrecken zurück",
  },
  "dated-save-name": {
    "title": "Folge dem ältesten Zeitstempel",
  },
  "dormant-achievement": {
    "title": "Hol ein altes Achievement nach",
  },
  "original-vs-remaster": {
    "title": "Kehre zu einem Remake oder Remaster zurück",
  },
  "original-settings": {
    "title": "Stelle deine alten Einstellungen wieder her",
  },
  "muscle-memory-mechanic": {
    "title": "Nutze die Bewegung aus der Erinnerung",
  },
  "legacy-character": {
    "title": "Spiele deinen früheren Main",
  },
  "one-last-revisit": {
    "title": "Kehre noch einmal zu einem alten Favoriten zurück",
  },
  "nostalgic-arcade-credit": {
    "title": "Spiele einen Arcade-Credit",
  },
  "nostalgic-cheat-code": {
    "title": "Verwende einen bekannten Cheat-Code",
  },
  "nostalgic-first-indie": {
    "title": "Kehre zu einem frühen Indie-Spiel zurück",
  },
  "nostalgic-old-customization": {
    "title": "Stelle einen alten Look wieder her",
  },
  "nostalgic-startup-sounds": {
    "title": "Folge einem Startsound",
  },
  "nostalgic-old-guide-memory": {
    "title": "Finde ein Geheimnis aus der Erinnerung",
  },
  "smallest-install": {
    "title": "Spiele das kleinste installierte Spiel",
  },
  "shortest-promised-time": {
    "title": "Schließe die kürzeste Aktivität ab",
  },
  "no-setup-needed": {
    "title": "Spiele ohne Setup",
  },
  "nearest-checkpoint": {
    "title": "Nimm den nächstgelegenen Kontrollpunkt",
  },
  "fewest-buttons": {
    "title": "Benutze die wenigsten Tasten",
  },
  "first-installed-row": {
    "title": "Wähle aus der ersten Reihe",
  },
  "one-letter-shelf": {
    "title": "Wähle einen Buchstaben",
  },
  "single-cover-pull": {
    "title": "Wähle das erste blaue Cover",
  },
  "safe-mode": {
    "title": "Nutze den entspanntesten Modus",
  },
  "no-inventory-session": {
    "title": "Ignoriere das Inventar",
  },
  "one-marker-only": {
    "title": "Folge einer Markierung in der Nähe",
  },
  "closest-completion": {
    "title": "Beende die kürzeste offene Aufgabe",
  },
  "tutorial-free": {
    "title": "Nutze eine vertraute Steuerung",
  },
  "single-screen-game": {
    "title": "Bleibe auf einem Bildschirm",
  },
  "pause-guaranteed": {
    "title": "Vertraue dem nächsten Autosave",
  },
  "no-dialogue-choice": {
    "title": "Lass die Geschichte entscheiden",
  },
  "one-match-contract": {
    "title": "Spiele genau ein Match",
  },
  "one-room-boundary": {
    "title": "Bleibe in einem Raum",
  },
  "single-verb": {
    "title": "Wähle ein einfaches Verb",
  },
  "visible-timer": {
    "title": "Lege den Stopp vor dem Start fest",
  },
  "platform-recent": {
    "title": "Verwende den Verlauf der letzten Spiele",
  },
  "controller-ready": {
    "title": "Spiele von deinem Sitzplatz aus",
  },
  "no-update-door": {
    "title": "Überspringe jeden Download",
  },
  "familiar-interface": {
    "title": "Verwende Menüs, die du kennst",
  },
  "one-save-only": {
    "title": "Nutze einen bestehenden Spielstand",
  },
  "finite-run": {
    "title": "Schließe ein Puzzle-Set ab",
  },
  "default-build": {
    "title": "Verwende das Standard-Loadout",
  },
  "default-difficulty": {
    "title": "Akzeptiere den empfohlenen Schwierigkeitsgrad",
  },
  "fewest-open-threads": {
    "title": "Öffne den ruhigsten Spielstand",
  },
  "stop-rule-first": {
    "title": "Lege zuerst den Ausstieg fest",
  },
  "overwhelmed-quick-resume": {
    "title": "Setze das bereits geöffnete Spiel fort",
  },
  "overwhelmed-saved-preset": {
    "title": "Verwende eine gespeicherte Voreinstellung",
  },
  "overwhelmed-last-level": {
    "title": "Wiederhole das zuletzt abgeschlossene Level",
  },
  "overwhelmed-first-tutorial": {
    "title": "Spiele ein Tutorial",
  },
  "overwhelmed-shortest-description": {
    "title": "Spiele das Spiel in der Mitte",
  },
  "overwhelmed-featured-daily": {
    "title": "Nimm die hervorgehobene Tagesaufgabe an",
  },
  "instant-movement": {
    "title": "Bewege dich, bevor du nachdenkst",
  },
  "speed-line": {
    "title": "Fahre eine schnelle Linie",
  },
  "destruction-break": {
    "title": "Zerstöre etwas Großes",
  },
  "rhythm-release": {
    "title": "Spiele drei Rhythmus-Songs",
  },
  "short-rogue-run": {
    "title": "Spiele einen schnellen Roguelike-Run",
  },
  "parkour-route": {
    "title": "Laufe eine Parkour-Route",
  },
  "arena-sprint": {
    "title": "Betrete die schnellste Arena",
  },
  "combo-chase": {
    "title": "Halte eine Combo am Leben",
  },
  "chase-sequence": {
    "title": "Schließe eine Verfolgungsjagd ab",
  },
  "boss-now": {
    "title": "Gehe direkt zu einem Boss",
  },
  "sports-quarter": {
    "title": "Spiele einen Spielabschnitt",
  },
  "flight-loop": {
    "title": "Heb ab",
  },
  "vehicle-switch-off": {
    "title": "Bleibe in einem Fahrzeug",
  },
  "swarm-clear": {
    "title": "Räume einen Schwarm aus dem Weg",
  },
  "timed-objective": {
    "title": "Schlage einen Countdown",
  },
  "movement-only-win": {
    "title": "Gewinne mit der Positionierung",
  },
  "loudest-game": {
    "title": "Dreh den energiegeladensten Soundtrack auf",
  },
  "quick-reaction": {
    "title": "Spiele nach Reflex",
  },
  "vertical-climb": {
    "title": "Klettere, bis sich die Aussicht ändert",
  },
  "trick-session": {
    "title": "Lande einen neuen Trick",
  },
  "rapid-puzzle": {
    "title": "Löse ein Rätsel in Bewegung",
  },
  "aggressive-route": {
    "title": "Nimm den direkten Weg",
  },
  "mech-weight": {
    "title": "Steuere eine schwere Maschine",
  },
  "crowd-route": {
    "title": "Bewege dich durch eine Menschenmenge",
  },
  "streak-attempt": {
    "title": "Erziele drei Ergebnisse in Folge",
  },
  "escape-the-hub": {
    "title": "Verlasse jetzt den Hub",
  },
  "one-life-motion": {
    "title": "Bleibe in Bewegung, bis es zu Ende ist",
  },
  "role-with-tempo": {
    "title": "Gib das Tempo des Teams vor",
  },
  "physical-finish": {
    "title": "Spiele etwas Körperliches",
  },
  "restless-landing": {
    "title": "Nutze den letzten Energieschub",
  },
  "restless-twin-stick": {
    "title": "Räume eine Twin-Stick-Arena",
  },
  "restless-hack-and-slash": {
    "title": "Räume einen Hack-and-Slash-Raum ab",
  },
  "restless-pinball-table": {
    "title": "Spiele an einem Flipper",
  },
  "restless-skate-line": {
    "title": "Baue eine Skate-Line",
  },
  "restless-beat-em-up": {
    "title": "Schließe eine Beat-'Em-Up-Etappe ab",
  },
  "restless-rts-rush": {
    "title": "Starte einen frühen RTS-Angriff",
  },
  "single-campaign-thread": {
    "title": "Folge einem Handlungsstrang",
  },
  "deep-puzzle": {
    "title": "Bleibe bei einem schwierigen Rätsel",
  },
  "boss-study": {
    "title": "Studiere einen Boss",
  },
  "build-one-function": {
    "title": "Erstelle ein funktionierendes System",
  },
  "achievement-line": {
    "title": "Verfolge einen Erfolg",
  },
  "chapter-with-notes": {
    "title": "Lies ein Kapitel der Geschichte",
  },
  "one-deck-session": {
    "title": "Behalte ein Deck unverändert",
  },
  "one-character-session": {
    "title": "Bleibe bei einem Charakter",
  },
  "collectible-set": {
    "title": "Vervollständige ein Sammelset",
  },
  "route-mastery": {
    "title": "Lerne eine Route",
  },
  "skill-lab": {
    "title": "Übe einen Zug",
  },
  "one-city-block": {
    "title": "Schließe einen Stadtblock ab",
  },
  "questline-only": {
    "title": "Folge einer benannten Questreihe",
  },
  "ranked-set": {
    "title": "Spiele ein bewusstes Wettkampfset",
  },
  "craft-one-object": {
    "title": "Stelle ein vollständiges Objekt her",
  },
  "photo-one-subject": {
    "title": "Fotografiere ein Motiv",
  },
  "strategy-one-plan": {
    "title": "Verpflichte dich zu einer Strategie",
  },
  "language-immersion": {
    "title": "Höre auf jeden Hinweis",
  },
  "save-rescue": {
    "title": "Verstehe einen aufgegebenen Spielstand",
  },
  "economy-balance": {
    "title": "Stabilisiere eine Wirtschaft",
  },
  "one-dungeon": {
    "title": "Schließe einen Dungeon ab",
  },
  "single-soundscape": {
    "title": "Höre dich durch einen Ort",
  },
  "one-conversation-tree": {
    "title": "Studiere einen Charakter",
  },
  "precision-score": {
    "title": "Verbessere eine Zahl",
  },
  "map-pocket": {
    "title": "Lerne eine kleine Region",
  },
  "system-experiment": {
    "title": "Ändere eine Variable",
  },
  "one-room-makeover": {
    "title": "Schließe einen Raum ab",
  },
  "credits-push": {
    "title": "Erreiche den Abschlussbildschirm",
  },
  "manual-mastery": {
    "title": "Lies über ein System und nutze es",
  },
  "focus-cooldown": {
    "title": "Beende die Spielsession sauber",
  },
  "focused-grand-strategy-turn": {
    "title": "Bleib bei einem Strategie-Zug",
  },
  "focused-factory-bottleneck": {
    "title": "Behebe einen Fabrikengpass",
  },
  "focused-flight-procedure": {
    "title": "Führe einen vollständigen Flug durch",
  },
  "focused-detective-case": {
    "title": "Schließe einen Detektivfall ab",
  },
  "focused-rhythm-set": {
    "title": "Beende ein Rhythmus-Set",
  },
  "focused-speedrun-segment": {
    "title": "Lerne ein Speedrun-Segment",
  },
  "strangest-installed": {
    "title": "Öffne das seltsamste Cover",
  },
  "untried-mechanic": {
    "title": "Probiere eine ungewohnte Aktion",
  },
  "genre-hybrid": {
    "title": "Teste eine Genre-Kollision",
  },
  "unknown-developer": {
    "title": "Versuche es mit einem unbekannten Entwickler",
  },
  "physics-question": {
    "title": "Stelle der Physik eine Frage",
  },
  "unread-lore-object": {
    "title": "Lies ein übersehenes Objekt",
  },
  "npc-routine": {
    "title": "Befolge die Routine eines NPCs",
  },
  "alternate-camera": {
    "title": "Wechsle die Perspektive",
  },
  "procedural-surprise": {
    "title": "Erschaffe eine neue Welt",
  },
  "community-mod": {
    "title": "Probiere eine Spielervariante",
  },
  "accessibility-transform": {
    "title": "Verändere die Spielausgabe",
  },
  "language-switch": {
    "title": "Höre es in einer anderen Sprache",
  },
  "oldest-untouched": {
    "title": "Öffne dein ältestes ungespieltes Spiel",
  },
  "one-star-review-question": {
    "title": "Hinterfrage einen schlechten ersten Eindruck",
  },
  "unusual-protagonist": {
    "title": "Spiele einen ungewöhnlichen Protagonisten",
  },
  "side-system": {
    "title": "Erkunde ein übersehenes Nebensystem",
  },
  "soundtrack-before-cover": {
    "title": "Wähle nach Gehör",
  },
  "forgotten-demo": {
    "title": "Kehre zu einem früheren Testspiel zurück",
  },
  "mechanic-without-tutorial": {
    "title": "Probiere die Regel zuerst aus",
  },
  "map-edge": {
    "title": "Erkunde abseits der Route",
  },
  "object-history": {
    "title": "Frage, wer das hier platziert hat",
  },
  "ruleset-random": {
    "title": "Tritt ein, bevor du die Regeln beherrschst",
  },
  "opposite-dialogue": {
    "title": "Sage, was du sonst nie sagst",
  },
  "small-studio": {
    "title": "Probiere eine Mikrospielsammlung aus",
  },
  "historical-setting": {
    "title": "Betritt eine unbekannte Epoche",
  },
  "future-rule": {
    "title": "Teste eine unmögliche Technologie",
  },
  "hidden-ending-door": {
    "title": "Öffne einen alternativen Ausgang",
  },
  "player-made-level": {
    "title": "Probiere einen Entwicklerkommentar",
  },
  "one-system-collision": {
    "title": "Lass zwei Systeme kollidieren",
  },
  "curiosity-souvenir": {
    "title": "Erreiche ein sichtbares Wahrzeichen",
  },
  "curious-non-euclidean": {
    "title": "Betritt unmögliche Geometrie",
  },
  "curious-ecology-sim": {
    "title": "Beobachte ein lebendes System",
  },
  "curious-programming-game": {
    "title": "Programmiere eine Lösung",
  },
  "curious-fmv-game": {
    "title": "Versuche es mit einem interaktiven Film",
  },
  "curious-text-experiment": {
    "title": "Spiele nur mit Worten",
  },
  "curious-obscure-sport": {
    "title": "Lerne eine unbekannte Sportart",
  },
  "bed-friendly": {
    "title": "Spiele von dort, wo du bist",
  },
  "turns-wait": {
    "title": "Lass jede Runde warten",
  },
  "story-mode": {
    "title": "Lass die Geschichte wirken",
  },
  "auto-support": {
    "title": "Nutze die Assists",
  },
  "one-hand-loop": {
    "title": "Spiele mit minimaler Eingabe",
  },
  "visual-novel-scene": {
    "title": "Lies eine Visual-Novel-Szene",
  },
  "easy-puzzle": {
    "title": "Löse ein gemütliches Rätsel",
  },
  "gentle-management": {
    "title": "Betreue ein kleines System",
  },
  "walking-only": {
    "title": "Gehe die ganze Session zu Fuß",
  },
  "familiar-save": {
    "title": "Öffne deinen vertrautesten Spielstand",
  },
  "photo-stroll": {
    "title": "Mache ein ruhiges Foto",
  },
  "music-and-menu": {
    "title": "Bleibe für den Soundtrack",
  },
  "no-failure-mode": {
    "title": "Spiele, ohne etwas zu verlieren",
  },
  "one-day-sim": {
    "title": "Spiele einen Tag im Spiel",
  },
  "short-episode": {
    "title": "Schließe eine Story-Episode ab",
  },
  "cozy-craft": {
    "title": "Mache eine nützliche Sache",
  },
  "home-base-only": {
    "title": "Führe eine reine Menüaufgabe aus",
  },
  "ambient-company": {
    "title": "Lass dich von einer Welt begleiten",
  },
  "one-conversation": {
    "title": "Sprich mit einer Person",
  },
  "slow-vehicle": {
    "title": "Lass dich von einem Fahrzeug tragen",
  },
  "known-puzzle-type": {
    "title": "Verwende eine vertraute Rätselsprache",
  },
  "supportive-role": {
    "title": "Hilf, ohne zu führen",
  },
  "collect-nearby": {
    "title": "Sammle nur, was in der Nähe ist",
  },
  "default-everything": {
    "title": "Behalte alle aktuellen Einstellungen bei",
  },
  "replay-favorite-level": {
    "title": "Wiederhole ein einfaches Level",
  },
  "gentle-weather": {
    "title": "Setz dich an einen schönen Ort",
  },
  "watch-systems": {
    "title": "Beobachte einen vollständigen Systemzyklus",
  },
  "old-tutorial-area": {
    "title": "Kehre in ein vertrautes Startgebiet zurück",
  },
  "low-reading": {
    "title": "Folge Formen statt Text",
  },
  "energy-honest-exit": {
    "title": "Lass genug auch genug sein",
  },
  "low-energy-idle-check-in": {
    "title": "Schau kurz in ein Idle Game",
  },
  "low-energy-hidden-object": {
    "title": "Schließe eine Wimmelbildszene ab",
  },
  "low-energy-solitaire": {
    "title": "Spiele eine Runde Solitaire",
  },
  "low-energy-auto-battler": {
    "title": "Sieh einem Auto-Battle zu",
  },
  "low-energy-walking-story": {
    "title": "Schließe ein Walking-Story-Kapitel ab",
  },
  "low-energy-jrpg-turns": {
    "title": "Schließe eine rundenbasierte Begegnung ab",
  }
} as const satisfies Record<string, Pick<QuestTranslation, "title">>;

export const germanQuestTranslations = Object.fromEntries(
  Object.entries(germanQuestCopy).map(([id, copy]) => {
    const name = germanQuestNames[id as keyof typeof germanQuestNames];
    if (!name) throw new Error(`Missing German quest name: ${id}`);
    const instruction = QUEST_INSTRUCTIONS[id];
    if (!instruction) {
      throw new Error(`Missing localized quest instruction: ${id}`);
    }
    return [id, { name, ...copy, ...instruction.de }];
  }),
) as Record<string, QuestTranslation>;
