import type { QuestTranslation } from "../data/quests";
import { germanQuestNames } from "./questNames.de";

const germanQuestCopy = {
  "relax-soft-landing": {
    "title": "Spiele einen Kindheitsfavoriten",
    "objective": "Deine stärkste Spielerinnerung aus der Kindheit oder Jugend.",
    "completion": "Beende ein Level, ein Match oder eine Mission – oder höre nach der Mindestzeit sicher auf."
  },
  "relax-scenic-route": {
    "title": "Spiele aus dem Muskelgedächtnis",
    "objective": "Ein bekanntes Spiel, dessen Steuerung sich immer noch automatisch anfühlt.",
    "completion": "Beende eine bekannte Aktivität, ohne das Spiel zu wechseln."
  },
  "relax-care-shift": {
    "title": "Folge einem bekannten Soundtrack",
    "objective": "Ein Spiel, das du an der Musik, den Stimmen oder der Atmosphäre erkennst.",
    "completion": "Spiele einen vollständigen Musiktitel und höre dann an einem ruhigen Ort auf."
  },
  "relax-one-good-loop": {
    "title": "Besuche einen Lieblingsort noch einmal",
    "objective": "Ein Spiel mit einem Knotenpunkt, einer Stadt, einer Strecke oder einer Karte, die sich wie zu Hause anfühlt.",
    "completion": "Erreiche diesen Ort und beende dort eine Aktivität."
  },
  "relax-small-wonder": {
    "title": "Kehre zu einem vergessenen Lieblingsspiel zurück",
    "objective": "Ein ehemaliger Favorit, den du schon lange nicht mehr gespielt hast.",
    "completion": "Beende ein Level, eine Mission oder eine Runde – oder höre nach der Mindestzeit sicher auf."
  },
  "relax-three-loose-ends": {
    "title": "Kehre zu einer Lieblingsserie zurück",
    "objective": "Der am wenigsten besuchte Eintrag in einer Reihe, die du bereits liebst.",
    "completion": "Erreiche den nächsten Kontrollpunkt oder beende eine Runde."
  },
  "relax-next-save": {
    "title": "Setze deinen einfachsten Spielstand fort",
    "objective": "Ein laufendes Spiel, dessen nächste Aktion du bereits kennst.",
    "completion": "Erreiche den nächsten Speicherpunkt, Kontrollpunkt oder Ergebnisbildschirm."
  },
  "relax-gentlest-mode": {
    "title": "Senke den Druck",
    "objective": "Ein Spiel mit Vorlagen, Übung oder einem verzeihenden Modus.",
    "completion": "Beende ein Level, eine Runde oder eine Szene – oder höre nach der Mindestzeit sicher auf."
  },
  "relax-pause-anytime": {
    "title": "Spiele etwas Pausierbares",
    "objective": "Ein Solospiel, das du jederzeit pausieren oder unterbrechen kannst.",
    "completion": "Beende eine Aktivität oder höre nach der Mindestzeit sicher auf."
  },
  "relax-turn-by-turn": {
    "title": "Plane einen rundenbasierten Kampf",
    "objective": "Ein Taktik- oder Rollenspiel, bei dem sich nichts bewegt, bis du handelst.",
    "completion": "Schließe einen kompletten Kampf ab, ohne die Animationen zu beschleunigen."
  },
  "relax-easy-victory": {
    "title": "Hol dir einen einfachen Sieg",
    "objective": "Ein vertrauter Level, Modus oder Gegner, den du bequem besiegen kannst.",
    "completion": "Erziele einen klaren Sieg, ein Punkteziel oder ein erfolgreiches Ergebnis."
  },
  "relax-quietest-game": {
    "title": "Spiele dein leisestes Spiel",
    "objective": "Das Spiel erfordert die geringste Dringlichkeit, Präzision oder Verwaltung.",
    "completion": "Beende eine ruhige Aktivität oder höre nach der Mindestzeit sicher auf."
  },
  "relax-tend-one-thing": {
    "title": "Kümmere dich um etwas",
    "objective": "Ein Lebenssimulations-, Bauernhof-, Haustier-, Garten- oder Wartungsspiel.",
    "completion": "Beende einen Akt der Pflege und hinterlasse etwas sichtbar Besseres."
  },
  "relax-put-things-right": {
    "title": "Bringe einen Bereich in Ordnung",
    "objective": "Ein Reinigungs-, Sortier-, Reparatur-, Inventar- oder Organisationsspiel.",
    "completion": "Beende einen Raum, ein Set, eine Route oder ein Arrangement."
  },
  "relax-slow-journey": {
    "title": "Segle oder fahre langsam",
    "objective": "Ein Segel-, LKW-, Zug-, Flug- oder Geländespiel.",
    "completion": "Reise zwischen zwei Sehenswürdigkeiten ohne Rennen oder Schnellreisen."
  },
  "relax-story-carries-you": {
    "title": "Spiele ein sanftes Abenteuer",
    "objective": "Ein Point-and-Click-, Walking- oder Erzählabenteuer mit geringem Druck.",
    "completion": "Beende eine Szene, ein Rätsel, ein Gespräch oder ein Kapitel."
  },
  "relax-one-puzzle": {
    "title": "Löse ein ruhiges Rätsel",
    "objective": "Ein Puzzle-, Bau- oder Erkundungsspiel ohne strengen Timer.",
    "completion": "Löse ein vollständiges Problem oder erstelle eine funktionierende Lösung."
  },
  "relax-friendly-face": {
    "title": "Besuche einen freundlichen Charakter",
    "objective": "Ein Spiel mit einem Begleiter, Wesen oder Bewohner, den du magst.",
    "completion": "Finde diese Figur und beende eine Aktivität oder ein Gespräch in ihrer Nähe."
  },
  "relax-solo-room": {
    "title": "Spiele komplett alleine",
    "objective": "Ein Spiel ohne Matchmaking, Publikum oder Teamverpflichtung.",
    "completion": "Beende eine private Aktivität oder höre nach der Mindestzeit sicher auf."
  },
  "relax-forgiving-restart": {
    "title": "Versuche es mit einem verzeihenden Spiel",
    "objective": "Ein Spiel mit schnellen Wiederholungsversuchen, guten Kontrollpunkten oder geringen Fehlerkosten.",
    "completion": "Spiele einen Abschnitt bis zum nächsten Ergebnis durch."
  },
  "relax-soft-colors": {
    "title": "Folge der sanftesten Farbwelt",
    "objective": "Ein Spiel, dessen Cover oder Welt sanfte Farben hat.",
    "completion": "Erreiche diese visuelle Stimmung und beende dort eine Aktivität."
  },
  "relax-good-weather": {
    "title": "Finde besseres Wetter",
    "objective": "Eine Welt mit Sonnenlicht, Regen, Schnee, Nebel oder einer klaren Nacht.",
    "completion": "Erreiche das gewünschte Wetter und beende dort eine Aktivität."
  },
  "relax-small-routine": {
    "title": "Wiederhole eine Beruhigungsroutine",
    "objective": "Ein Spiel mit einer täglichen Besuchs-, Ernte-, Liefer- oder Vorbereitungsschleife.",
    "completion": "Führe diese kurze Routine einmal von Anfang bis Ende durch."
  },
  "relax-watch-and-wander": {
    "title": "Streife umher und beobachte",
    "objective": "Ein Foto-, Erkundungs- oder Wanderspiel, das das Schauen belohnt.",
    "completion": "Finde drei neue Details und bleibe an einem sicheren Ort stehen."
  },
  "relax-one-button-deeper": {
    "title": "Spiele ein Ein-Knopf-Spiel",
    "objective": "Ein Rhythmus-, Arcade-, Mobil- oder Partyspiel, das auf einer Eingabe basiert.",
    "completion": "Beende ein Level, Lied oder eine Runde – oder höre nach der Mindestzeit sicher auf."
  },
  "relax-safe-home-base": {
    "title": "Bleibe in der Heimatbasis",
    "objective": "Ein Rollenspiel, Überlebensspiel oder eine Simulation mit einem nützlichen sicheren Hub.",
    "completion": "Erledige dort eine Vorbereitungs-, Reparatur-, Gesprächs- oder Organisationsaufgabe."
  },
  "relax-low-volume": {
    "title": "Spiele mit geringer Lautstärke",
    "objective": "Ein Spiel, dem du leise, mit Untertiteln oder ohne Ton folgen kannst.",
    "completion": "Beende eine abgeschlossene Aktivität, ohne die Lautstärke zu erhöhen."
  },
  "relax-kindest-save-file": {
    "title": "Öffne deinen ruhigsten Spielstand",
    "objective": "Der aktive Spielstand mit den wenigsten dringenden Problemen.",
    "completion": "Nimm eine kleine Verbesserung vor und speichere an einem sicheren Ort."
  },
  "relax-comforting-repetition": {
    "title": "Wiederhole eine Lieblingsaktivität",
    "objective": "Ein Rennen, ein Level, ein Lied, ein Spiel, ein Puzzle oder eine Route, die dir bereits Spaß macht.",
    "completion": "Schließe diese Aktivität einmal ab, ohne einem Rekord oder einer Freischaltung nachzujagen."
  },
  "relax-clean-exit": {
    "title": "Beende eine klare Spielsession",
    "objective": "Ein Spiel mit einem klaren Kapitel, Tag, Lauf, Match oder Level.",
    "completion": "Beende genau eine Einheit und stoppe beim Schlussbildschirm."
  },
  "relax-cozy-corner": {
    "title": "Baue eine gemütliche Ecke",
    "objective": "Ein Bau-, Dekorations-, Landwirtschafts- oder Lebenssimulationsspiel.",
    "completion": "Schaffe einen kleinen, komfortablen und nutzbaren Raum."
  },
  "relax-fishing-break": {
    "title": "Gehe angeln",
    "objective": "Ein Angelspiel, eine Lebenssimulation, ein Rollenspiel oder eine offene Welt mit Angeln.",
    "completion": "Fange drei Fische oder beende einen Angelausflug."
  },
  "relax-quiet-drive": {
    "title": "Unternimm eine ruhige Fahrt",
    "objective": "Eine LKW-Simulation, ein Fahrspiel oder eine offene Welt mit langen Straßen.",
    "completion": "Erreiche eine Stadt oder ein Wahrzeichen, ohne Rennen zu fahren oder schnell zu reisen."
  },
  "relax-gentle-platformer": {
    "title": "Spiele einen entspannten Plattformer",
    "objective": "Ein fehlerverzeihendes Plattform- oder Puzzle-Plattformspiel mit einfachen Wiederholungsversuchen.",
    "completion": "Schließe ein Level, Kapitel oder eine Folge von Checkpoints ab."
  },
  "relax-solo-tabletop": {
    "title": "Spiele ein digitales Brettspiel",
    "objective": "Ein Solitär-, Brett-, Karten- oder rundenbasiertes Spiel, das du alleine spielen kannst.",
    "completion": "Beende ein Spiel, Szenario oder einen kurzen Lauf."
  },
  "relax-space-drift": {
    "title": "Treibe durch den Weltraum",
    "objective": "Ein Weltraumerkundungs-, Handels- oder Flugspiel ohne dringende Kämpfe.",
    "completion": "Besuche einen Planeten, eine Station oder einen neuen Sektor und docke sicher an."
  },
  "explore-wrong-turn": {
    "title": "Spiele das dritte Spiel deiner Bibliothek",
    "objective": "Das dritte Spiel in der ersten sichtbaren installierten Reihe.",
    "completion": "Beende die erste Aktivität oder höre nach der Mindestzeit sicher auf."
  },
  "explore-follow-the-signal": {
    "title": "Erkunde eine Welt jenseits der Erde",
    "objective": "Ein Weltraumspiel, das auf einem anderen Planeten, einer anderen Station oder einer anderen Galaxie spielt.",
    "completion": "Erreiche einen neuen Ort und beende dort eine Aktivität."
  },
  "explore-edge-of-known": {
    "title": "Betrete eine Fantasiewelt",
    "objective": "Ein Rollenspiel, Abenteuer oder Strategiespiel mit mythischen Orten.",
    "completion": "Erreiche eine benannte Siedlung, Ruine oder ein Wahrzeichen."
  },
  "explore-mechanic-safari": {
    "title": "Besuche eine Neonstadt",
    "objective": "Ein Cyberpunk-, Science-Fiction- oder Urban-Spiel mit einer lebendigen Stadt.",
    "completion": "Durchquere einen Stadtteil und beende eine Aktivität auf Straßenebene."
  },
  "explore-landmark-navigation": {
    "title": "Betrete die Wildnis",
    "objective": "Ein Überlebens-, Erkundungs- oder Open-World-Spiel mit wildem Gelände.",
    "completion": "Reise von der Unterkunft zu einem Naturdenkmal und kehre sicher zurück."
  },
  "explore-behind-the-obvious": {
    "title": "Durchquere eine Wüstenwelt",
    "objective": "Ein Erkundungs-, Überlebens-, Renn- oder Abenteuerspiel mit einer Wüste.",
    "completion": "Reise zwischen zwei Orientierungspunkten und erreiche einen Unterschlupf."
  },
  "explore-below-surface": {
    "title": "Gehe unter Wasser",
    "objective": "Ein Ozean-, Tauch-, U-Boot- oder Unterwasser-Erkundungsspiel.",
    "completion": "Erreiche einen untergetauchten Orientierungspunkt und kehre in die Luft oder in Sicherheit zurück."
  },
  "explore-world-underfoot": {
    "title": "Entdecke den Untergrund",
    "objective": "Ein Bergbau-, Höhlen-, Dungeon- oder Untergrund-Überlebensspiel.",
    "completion": "Erreiche eine neue Kammer und merke dir einen sicheren Rückweg."
  },
  "explore-borrowed-body": {
    "title": "Spiele als Tier",
    "objective": "Ein Spiel mit einem Vogel, einer Katze, einem Fuchs, einem Fisch, einem Insekt oder einem anderen Tier.",
    "completion": "Beende eine Aktivität mit der charakteristischen Bewegung dieses Tieres."
  },
  "explore-other-camera": {
    "title": "Spiele von oben",
    "objective": "Ein isometrisches Overhead-, Taktik-, Management- oder Strategiespiel.",
    "completion": "Beende eine Aktivität, während du den gesamten sichtbaren Raum steuerst."
  },
  "explore-genre-detour": {
    "title": "Versuche es mit einem vernachlässigten Genre",
    "objective": "Die Genrezeile in deiner Bibliothek, die du normalerweise überspringst.",
    "completion": "Beende eine komplette Aktivität, ohne zu einem Lieblingsgenre zurückzukehren."
  },
  "explore-physical-rule": {
    "title": "Versuche es mit einer ungewöhnlichen Steuerung",
    "objective": "Ein Spiel, das auf Berührung, Bewegung, Stimme, Zeichnen oder Rhythmus basiert.",
    "completion": "Beende eine Aktivität, bei der dieser körperliche Einsatz im Mittelpunkt steht."
  },
  "explore-follow-clue": {
    "title": "Folge einem Hinweis",
    "objective": "Ein Detektiv-, Mystery-, Deduktions- oder Ermittlungsspiel.",
    "completion": "Löse einen Hinweis oder formuliere eine durch Belege gestützte Theorie."
  },
  "explore-command-view": {
    "title": "Kommandiere das ganze Spielfeld",
    "objective": "Ein Taktik-, Management-, Strategie- oder Squad-Control-Spiel.",
    "completion": "Beende ein Szenario und leite dabei das gesamte verfügbare Team."
  },
  "explore-play-by-ear": {
    "title": "Spiele nach Gehör",
    "objective": "Ein Rhythmus-, Horror-, Stealth- oder Audiospiel.",
    "completion": "Verwende Ton, um ein Lied, einen Raum, eine Route oder eine Begegnung zu klären."
  },
  "explore-movement-language": {
    "title": "Probiere neue Bewegung aus",
    "objective": "Ein Spiel mit Klettern, Gleiten, Schwingen, Driften oder Teleportieren.",
    "completion": "Durchquere einen Bereich mit dem charakteristischen Bewegungssystem."
  },
  "explore-words-have-weight": {
    "title": "Verändere etwas mit Worten",
    "objective": "Ein Dialog-, Rollen- oder Verhandlungsspiel mit Konsequenzen.",
    "completion": "Beende ein Gespräch mit einer klaren Entscheidung."
  },
  "explore-small-world-big-idea": {
    "title": "Probiere ein kleines seltsames Spiel aus",
    "objective": "Ein kurzes oder einfach aussehendes Spiel mit einer ungewöhnlichen Prämisse.",
    "completion": "Erreiche die erste große Enthüllung oder höre nach der Mindestzeit sicher auf."
  },
  "explore-never-same-twice": {
    "title": "Starte einen neuen Run",
    "objective": "Ein Roguelike, Strategie-, Sandbox- oder prozedural generiertes Spiel.",
    "completion": "Beende einen generierten Lauf, eine Karte, ein Szenario oder einen Zyklus."
  },
  "explore-one-word-door": {
    "title": "Öffne den kürzesten Titel",
    "objective": "Das installierte Spiel mit dem kürzesten sichtbaren Namen.",
    "completion": "Beende die Eröffnungsaktivität oder höre nach der Mindestzeit sicher auf."
  },
  "explore-color-beacon": {
    "title": "Folge einer Coverfarbe",
    "objective": "Das Spielcover mit der Farbe, die dich zuerst anspricht.",
    "completion": "Erreiche eine Szene mit dieser Farbe und beende eine Aktivität."
  },
  "explore-earliest-release": {
    "title": "Spiele einen frühen Klassiker",
    "objective": "Eines der ältesten Spiele in deiner aktuellen Bibliothek.",
    "completion": "Beende ein Level, Match oder eine Etappe – oder höre nach der Mindestzeit sicher auf."
  },
  "explore-genre-collision": {
    "title": "Löse ein First-Person-Rätsel",
    "objective": "Ein Puzzle- oder Erkundungsspiel aus der Ego-Perspektive mit räumlichen Problemen.",
    "completion": "Löse einen kompletten Raum oder Mechanismus."
  },
  "explore-no-straight-line": {
    "title": "Wähle deine eigene Route",
    "objective": "Ein Open-World-, Erkundungs- oder Strategiespiel mit mehreren Pfaden.",
    "completion": "Erreiche ein Ziel über eine Route, die du noch nicht benutzt hast."
  },
  "explore-failure-teaches": {
    "title": "Lerne aus einer Niederlage",
    "objective": "Ein Roguelike-, Puzzle-, Strategie- oder Storyspiel, bei dem Scheitern mehr offenbart.",
    "completion": "Beende einen fehlgeschlagenen Versuch und nutze die Lektion einmal."
  },
  "explore-unusual-job": {
    "title": "Arbeite eine ungewöhnliche Schicht",
    "objective": "Eine Simulation oder ein Rollenspiel mit einer unbekannten Aufgabe.",
    "completion": "Beende eine Schicht, Lieferung, einen Fall, einen Service oder einen Arbeitstag."
  },
  "explore-without-combat": {
    "title": "Komme ohne Kämpfe voran",
    "objective": "Ein Stealth-, Dialog-, Puzzle- oder Erkundungsspiel mit friedlichen Routen.",
    "completion": "Erreiche ein Ziel, ohne einen optionalen Kampf zu beginnen."
  },
  "explore-scale-shift": {
    "title": "Ändere deinen Maßstab",
    "objective": "Ein Spiel, bei dem du dich winzig, riesig, mikroskopisch oder kosmisch fühlst.",
    "completion": "Erreiche eine Szene, die den Maßstab unverkennbar macht."
  },
  "explore-rule-you-doubt": {
    "title": "Teste die Kernprämisse",
    "objective": "Das Spielkonzept in deiner Bibliothek, das am wenigsten glaubwürdig klingt.",
    "completion": "Beende das Tutorial oder die erste Aktivität, die auf der Kernmechanik basiert."
  },
  "explore-opposite-choice": {
    "title": "Folge dem anderen Instinkt",
    "objective": "Ein Rollenspiel oder Strategiespiel mit sinnvollen Entscheidungen.",
    "completion": "Triff eine Wahl, die deiner Gewohnheit entgegengesetzt ist, und akzeptiere deren Ergebnis."
  },
  "explore-immersive-sim": {
    "title": "Probiere einen immersiven Sim aus",
    "objective": "Ein systemisches Stealth- oder Actionspiel mit mehreren gültigen Lösungen.",
    "completion": "Erreiche ein Ziel über eine Route, die von der Markierung nicht vorgeschlagen wurde."
  },
  "explore-metroidvania-shortcut": {
    "title": "Finde eine versteckte Abkürzung",
    "objective": "Ein Metroidvania, ein Plattformspiel, ein Dungeon oder eine vernetzte Welt.",
    "completion": "Öffne eine Abkürzung oder verbinde zwei zuvor getrennte Wege."
  },
  "explore-archaeology-trail": {
    "title": "Erkunde die Spuren eines alten Ortes",
    "objective": "Ein Archäologie-, Geschichts-, Fantasy- oder Erkundungsspiel mit Ruinen.",
    "completion": "Finde drei Details, die erklären, was dort passiert ist."
  },
  "explore-unfamiliar-cockpit": {
    "title": "Lerne ein unbekanntes Cockpit kennen",
    "objective": "Ein Flug-, Weltraum-, Zug-, LKW- oder Maschinensimulator.",
    "completion": "Führe eine sichere Fahrt mit einem unbekannten Fahrzeug durch."
  },
  "explore-tiny-world": {
    "title": "Entdecke eine kleine Welt",
    "objective": "Ein Miniatur-, Diorama-, Spielzeugmaßstabs- oder Einzelraumspiel.",
    "completion": "Untersuche jeden Rand eines kleinen Bereichs und finde ein Geheimnis."
  },
  "explore-wordless-world": {
    "title": "Versuche es mit einem wortlosen Spiel",
    "objective": "Ein Spiel, das von Form, Bewegung, Ton oder Umgebung statt von Text geleitet wird.",
    "completion": "Erreiche einen klaren Übergang, ohne externe Erklärungen einzuholen."
  },
  "progress-break-the-blocker": {
    "title": "Starte ein nicht gespieltes Spiel",
    "objective": "Ein Spiel, das du gekauft, aber nie gestartet hast.",
    "completion": "Erreiche den ersten Speicherpunkt, Kontrollpunkt oder Ergebnisbildschirm."
  },
  "progress-clean-finish": {
    "title": "Gib einem Spiel eine faire Chance",
    "objective": "Ein Spiel, das du abgetan hast, bevor du den eigentlichen Ablauf kennengelernt hast.",
    "completion": "Erreiche einen vollständigen Spielablauf oder höre nach der Mindestzeit sicher auf."
  },
  "progress-one-tier-better": {
    "title": "Setze einen aufgegebenen Spielstand fort",
    "objective": "Eine Kampagne, die du bereits nach wenigen Sitzungen verlassen hast.",
    "completion": "Erreiche den nächsten benannten Kontrollpunkt, das nächste Kapitel oder das nächste Missionsergebnis."
  },
  "progress-three-step-plan": {
    "title": "Schalte etwas in einem Shooter frei",
    "objective": "Ein Solo-Shooter mit einer nahen Waffen-, Fähigkeits- oder Ausrüstungsfreischaltung.",
    "completion": "Verdiene dir eine Freischaltung durch Kampagne, Herausforderung oder Solo-Fortschritt."
  },
  "progress-recovery-run": {
    "title": "Bringe die nächste Kampagne voran",
    "objective": "Dein unvollendetes Spiel steht kurz vor seinem Ende.",
    "completion": "Erreiche einen Meilenstein der Geschichte oder höre nach der Mindestzeit sicher auf."
  },
  "progress-two-birds": {
    "title": "Gib einem installierten Spiel eine Chance",
    "objective": "Ein Spiel, das du installiert lässt, aber immer wieder überspringst.",
    "completion": "Beende eine Mission, ein Kapitel, ein Spiel oder einen Lauf. Dann entscheide, ob es bleibt."
  },
  "progress-wake-the-sleeping-save": {
    "title": "Wecke deinen ältesten Spielstand",
    "objective": "Der aktive Spielstand, den du am längsten ignoriert hast.",
    "completion": "Finde deine Orientierung wieder und erreiche einen neuen Kontrollpunkt."
  },
  "progress-honor-the-oldest-promise": {
    "title": "Schließe die älteste Quest ab",
    "objective": "Die älteste erreichbare Aufgabe in einem Questprotokoll im Spiel.",
    "completion": "Schließe diese Quest ab oder erreiche ihren nächsten benannten Meilenstein."
  },
  "progress-open-the-black-box": {
    "title": "Verstehe ein schwieriges Spielsystem",
    "objective": "Ein gutes Spiel, das durch Handwerk, Kampf, Wirtschaft oder Kontrolle ins Stocken geraten ist.",
    "completion": "Nutze dieses System erfolgreich in einer realen Aktivität."
  },
  "progress-revisit-the-wall": {
    "title": "Löse ein festgefahrenes Rätsel",
    "objective": "Ein Rätsel, eine Route oder ein Systemproblem, das ein unvollendetes Spiel stoppt.",
    "completion": "Löse es oder teste drei wirklich unterschiedliche Ansätze."
  },
  "progress-clear-one-map-pocket": {
    "title": "Schließe einen Kartenbereich ab",
    "objective": "Eine vertraute Karte mit einem kleinen unerforschten oder unvollendeten Gebiet.",
    "completion": "Decke diesen Bereich auf und führe eine Aktivität darin aus."
  },
  "progress-open-the-expansion-door": {
    "title": "Starte eine nicht gespielte Erweiterung",
    "objective": "Eine eigene Erweiterung oder ein DLC-Kapitel, das du nie betreten hast.",
    "completion": "Erreiche den ersten einzigartigen Ort, die erste Mission oder die erste große Begegnung."
  },
  "progress-let-the-other-hero-grow": {
    "title": "Bringe eine vernachlässigte Figur voran",
    "objective": "Ein Rollenspiel, Roster-Spiel oder Fighting Game mit einer kaum genutzten Figur.",
    "completion": "Steige mit dieser Figur ein Level oder einen Rang auf oder beende eine Aktivität."
  },
  "progress-rebuild-muscle-memory": {
    "title": "Lerne die vergessene Steuerung neu",
    "objective": "Ein Spiel, das du wieder regelmäßig spielen möchtest, an das du dich aber nicht mehr erinnerst.",
    "completion": "Beende das Tutorial oder eine bekannte Aktivität ohne Anleitung."
  },
  "progress-follow-the-remembered-thread": {
    "title": "Setze die erinnerte Geschichte fort",
    "objective": "Ein unvollendetes Story-Spiel mit einer Frage, die dir noch im Kopf herumschwirrt.",
    "completion": "Erreiche die nächste Antwort, Enthüllung oder den nächsten Kapitelumbruch."
  },
  "progress-shake-off-the-rust": {
    "title": "Schüttle den Wettkampfrost ab",
    "objective": "Ein Kampf-, Renn-, Sport- oder Shooter-Spiel, das du einmal gut gespielt hast.",
    "completion": "Beende drei Spiele oder Rennen, ohne deinen alten Rang zu bewerten."
  },
  "progress-claim-the-nearby-feat": {
    "title": "Hol dir einen nahen Erfolg",
    "objective": "Eine Errungenschaft, die bereits nahe oder sofort anstrebbar ist.",
    "completion": "Schalte es frei oder beende drei vollständige Versuche."
  },
  "progress-return-to-the-gift": {
    "title": "Spiele ein geschenktes Spiel",
    "objective": "Ein begabtes Spiel, dem du keine faire Sitzung gegeben hast.",
    "completion": "Beende die Eröffnungsaktivität oder höre nach der Mindestzeit sicher auf."
  },
  "progress-choose-the-short-road": {
    "title": "Bringe die kürzeste Kampagne voran",
    "objective": "Die kürzeste unvollendete Kampagne in deiner Bibliothek.",
    "completion": "Beende ein Kapitel oder erreiche den nächsten großen Kontrollpunkt."
  },
  "progress-cross-the-middle": {
    "title": "Bringe eine Kampagne im Mittelteil voran",
    "objective": "Eine Kampagne, die weit von Anfang und Ende entfernt feststeckt.",
    "completion": "Schließe eine benannte Quest, ein Kapitel, einen Dungeon oder eine Operation ab."
  },
  "progress-unpack-and-move": {
    "title": "Behebe ein überlastetes Inventar",
    "objective": "Ein Rollenspiel oder Überlebensspiel, das durch Unordnung im Inventar blockiert wird.",
    "completion": "Rüste ein verwendbares Kit aus, mache Platz frei und verlasse das Menü."
  },
  "progress-prove-one-technique": {
    "title": "Mache eine Technik zuverlässig",
    "objective": "Ein Spiel mit einer halb erlernten Kombination, Route, Werkzeug oder Taktik.",
    "completion": "Wende die Technik dreimal erfolgreich im echten Spiel an."
  },
  "progress-play-the-missing-link": {
    "title": "Starte die fehlende Fortsetzung",
    "objective": "Ein ungespielter Eintrag, der eine Lücke in einer Serie füllt, die du kennst.",
    "completion": "Erreiche den ersten wichtigen Speicherpunkt oder Kapitelumbruch."
  },
  "progress-earn-the-specific-upgrade": {
    "title": "Verdiene ein nahes Upgrade",
    "objective": "Ein Spielstand mit einem nützlichen Upgrade in unmittelbarer Reichweite.",
    "completion": "Verdiene oder kaufe genau dieses Upgrade und nutze es einmal."
  },
  "progress-remove-one-barrier": {
    "title": "Entferne eine Spielhürde",
    "objective": "Ein gutes Spiel, das durch Schwierigkeit, Steuerung, Text oder Setup blockiert wird.",
    "completion": "Ändere eine relevante Einstellung und beende eine Aktivität."
  },
  "progress-finish-a-favorites-loose-end": {
    "title": "Erledige eine offene Aufgabe im Lieblingsspiel",
    "objective": "Ein Spiel, das du liebst, mit einer übersehenen Quest, einem Level oder einem Modus.",
    "completion": "Beende genau diese offene Aufgabe und speichere anschließend."
  },
  "progress-take-the-road-not-used": {
    "title": "Bringe den anderen Handlungszweig voran",
    "objective": "Ein Story- oder Strategiespiel mit einer Route, die du übersprungen hast.",
    "completion": "Erreiche ein Ergebnis oder einen Kontrollpunkt, der für diesen Zweig einzigartig ist."
  },
  "progress-rescue-the-secondary-save": {
    "title": "Rette einen zweiten Spielstand",
    "objective": "Ein alternativer Charakter, eine alternative Route oder ein alternativer Build, den du nicht mehr verwendest.",
    "completion": "Erreiche einen Meilenstein, für den du diesen Spielstand später noch einmal öffnen würdest."
  },
  "progress-transfer-a-strength": {
    "title": "Übertrage eine Fähigkeit",
    "objective": "Ein Spiel, bei dem Zielen, Timing, Planung oder Bewegung mit anderen geteilt werden.",
    "completion": "Benutze diese bekannte Fähigkeit, um ein Level, ein Spiel oder eine Begegnung zu beenden."
  },
  "progress-spend-the-hoarded-resource": {
    "title": "Nutze eine gehortete Ressource",
    "objective": "Ein Spielstand mit einem seltenen Gegenstand, einer Währung oder Fähigkeit, die du aufbewahrst.",
    "completion": "Setze diese Ressource für Fortschritt ein und beende die daraus entstehende Aktivität."
  },
  "progress-finish-the-tutorial": {
    "title": "Schließe ein verlassenes Tutorial ab",
    "objective": "Ein Strategie-, Kampf-, Simulations- oder Systemspiel, das du nie gelernt hast.",
    "completion": "Beende das Tutorial und verwende eine Lektion im normalen Spiel."
  },
  "progress-roguelike-meta-step": {
    "title": "Bringe einen Roguelike-Spielstand voran",
    "objective": "Ein Roguelike oder runbasiertes Spiel mit dauerhaftem Fortschritt.",
    "completion": "Schließe einen Lauf ab und kaufe eine dauerhafte Freischaltung."
  },
  "progress-complete-a-season": {
    "title": "Schließe eine In-Game-Saison ab",
    "objective": "Ein Sport-, Landwirtschafts-, Management- oder Lebenssimulationsspielstand kurz vor Saisonende.",
    "completion": "Rufe die nächste Saisonzusammenfassung, Tabelle oder Kalenderänderung auf."
  },
  "progress-open-the-endgame": {
    "title": "Erreiche das Endspiel",
    "objective": "Ein Rollenspiel, Loot-Spiel oder Strategiespiel, dem nur ein Meilenstein bis zum Endgame fehlt.",
    "completion": "Schalte die letzte Region, Schwierigkeit, Aktivität oder Kampagnenphase frei."
  },
  "progress-master-one-recipe": {
    "title": "Meistere ein Rezept",
    "objective": "Ein Bastel-, Koch-, Alchemie- oder Produktionsspiel mit einem unvollendeten Rezept.",
    "completion": "Sammle die Zutaten und stelle das fertige Produkt einmal her."
  },
  "progress-fix-one-crisis": {
    "title": "Behebe eine Managementkrise",
    "objective": "Eine Stadt, Kolonie, ein Unternehmen oder ein Team mit einem offensichtlichen Problem.",
    "completion": "Behebe dieses Problem für einen vollständigen Spielzyklus."
  },
  "create-new-build-old-parts": {
    "title": "Baue etwas von Grund auf",
    "objective": "Ein Sandbox- oder Aufbauspiel mit einem leeren Grundstück oder einem neuen Spielstand.",
    "completion": "Stelle einen nutzbaren Raum, eine Maschine, ein Fahrzeug oder eine kleine Struktur fertig."
  },
  "create-function-first": {
    "title": "Passe einen Charakter an",
    "objective": "Ein Spiel mit einem Charakter-, Outfit-, Fahrzeug-, Waffen- oder Raumeditor.",
    "completion": "Vervollständige einen Look, der auf einem einzigen klaren Thema basiert."
  },
  "create-rule-of-three": {
    "title": "Baue eine funktionierende Maschine",
    "objective": "Ein Spiel im Automatisierungs-, Ingenieurs-, Fabrik- oder Redstone-Stil.",
    "completion": "Erstelle eine Maschine, die eine Eingabe in eine nützliche Ausgabe umwandelt."
  },
  "create-strategy-remix": {
    "title": "Erfinde einen neuen Build",
    "objective": "Ein RPG, Deckbuilder, Taktikspiel oder Shooter mit Loadouts.",
    "completion": "Beende eine Aktivität mit einem Build, den du noch nie verwendet hast."
  },
  "create-make-a-landmark": {
    "title": "Entwerfe ein spielbares Level",
    "objective": "Ein Spiel mit einem Level-, Strecken-, Park-, Dungeon- oder Szenario-Editor.",
    "completion": "Erstellen und teste eine kurze Route vom Anfang bis zum Ziel."
  },
  "create-before-and-after": {
    "title": "Mach einen Fotospaziergang",
    "objective": "Die Spielwelt, die du heute am liebsten fotografieren möchtest.",
    "completion": "Nimm drei unterschiedliche Bilder auf und behalte das stärkste."
  },
  "create-tell-a-room-sized-story": {
    "title": "Erzähle eine Geschichte in einem Raum",
    "objective": "Ein Bau-, Dekorations- oder Lebenssimulationsspiel.",
    "completion": "Verwende maximal sieben Objekte, um den Tagesablauf eines Bewohners darzustellen."
  },
  "create-make-the-useful-prototype": {
    "title": "Baue einen nützlichen Prototyp",
    "objective": "Ein Sandbox-, Ingenieurs-, Fabrik- oder Fahrzeugbauspiel.",
    "completion": "Erstelle die gröbste Version, die eine benannte Aufgabe ausführt."
  },
  "create-build-around-the-flaw": {
    "title": "Baue um das Hindernis herum",
    "objective": "Ein Bauunternehmer mit belegtem, unebenem oder eingeschränktem Raum.",
    "completion": "Mache dieses unangenehme Element zum Mittelpunkt eines fertigen Designs."
  },
  "create-design-one-livable-block": {
    "title": "Baue einen lebenswerten Block",
    "objective": "Ein Stadt-, Kolonie-, Siedlungs- oder Nachbarschaftsbauer.",
    "completion": "Verbinde ein Zuhause, einen Dienst und einen Pfad innerhalb eines kompakten Blocks."
  },
  "create-shape-a-seasonal-garden": {
    "title": "Pflanze einen saisonalen Garten",
    "objective": "Ein Landwirtschafts-, Landschaftsbau-, Dekorations- oder Lebenssimulationsspiel.",
    "completion": "Gestalte einen kleinen Garten, der von der heutigen Jahreszeit oder dem Wetter inspiriert ist."
  },
  "create-dress-for-an-npc": {
    "title": "Kleide dich wie ein NPC",
    "objective": "Ein Spiel mit Anpassung von Kleidung, Rüstung, Fahrzeug oder Charakter.",
    "completion": "Erstelle einen Look, der von einem Nebencharakter oder einer Nebenfraktion inspiriert ist."
  },
  "create-take-an-honest-portrait": {
    "title": "Fotografiere eine Figur in einem ruhigen Moment",
    "objective": "Ein Spiel mit Fotomodus und einem sehenswerten Charakter.",
    "completion": "Halte diese Figur in einem ruhigen, alltäglichen oder unbeobachteten Moment fest."
  },
  "create-chase-one-kind-of-light": {
    "title": "Fotografiere eine Art Licht",
    "objective": "Eine offene Welt mit starkem Sonnenlicht, Neon, Nebel oder Schatten.",
    "completion": "Halte ein Bild dort, wo das Licht die Szene definiert."
  },
  "create-stage-a-three-frame-story": {
    "title": "Erzähle eine Geschichte mit drei Bildern",
    "objective": "Ein Spiel mit Fotomodus, Wiederholungen, Posen oder inszenierten Szenen.",
    "completion": "Erfasse einen Anfang, eine Veränderung und ein Ende in drei Bildern."
  },
  "create-curate-the-odd-shelf": {
    "title": "Kuratiere eine ungewöhnliche Sammlung",
    "objective": "Ein Spiel mit Vitrinen, Regalen, Museen oder Wohnungen.",
    "completion": "Ordne fünf übersehene Objekte um eine gemeinsame Idee herum an."
  },
  "create-build-a-creatures-home": {
    "title": "Baue einem Wesen ein Zuhause",
    "objective": "Ein Zoo-, Park-, Überlebens-, Kolonie- oder Aufbauspiel.",
    "completion": "Beende einen Lebensraum, der auf die Bedürfnisse einer einzelnen Kreatur zugeschnitten ist."
  },
  "create-embrace-one-sided-balance": {
    "title": "Gestalte bewusst asymmetrisch",
    "objective": "Ein Bau- oder Dekorationsspiel, Charaktereditor oder Fotomodus.",
    "completion": "Beende eine Komposition, deren zwei Seiten absichtlich ungleich sind."
  },
  "create-run-a-kind-economy": {
    "title": "Baue eine faire Wirtschaft",
    "objective": "Eine Stadt, eine Kolonie, eine Fabrik, ein Park oder ein Managementspiel.",
    "completion": "Beende einen Zyklus ohne dringende Warnung und mit einer freien Ressource."
  },
  "create-invent-a-team-identity": {
    "title": "Gib einem Team eine Identität",
    "objective": "Ein Sport-, Taktik-, Party- oder Squadbuilding-Spiel.",
    "completion": "Baue um ein Verb herum auf und beende ein Spiel oder eine Mission."
  },
  "create-roleplay-a-local": {
    "title": "Spiele einen gewöhnlichen Alltag",
    "objective": "Ein Rollenspiel, eine Lebenssimulation oder eine offene Welt mit alltäglichen Räumen.",
    "completion": "Besuche die Arbeit, ruhe dich irgendwo aus und kehre ohne formelle Aufgaben nach Hause zurück."
  },
  "create-solve-it-sideways": {
    "title": "Finde eine ungewöhnliche Lösung",
    "objective": "Ein systemisches Puzzle-, Stealth-, Taktik- oder Actionspiel.",
    "completion": "Erreiche ein Ziel mit einem Werkzeug, das du normalerweise ignorierst."
  },
  "create-draw-with-a-route": {
    "title": "Zeichne mit deiner Route",
    "objective": "Ein Fahr-, Flug-, Skate-, Wander- oder kartenbasiertes Spiel.",
    "completion": "Reise in einer Endlosschleife, Spirale, Welle oder einem Buchstaben."
  },
  "create-compose-a-place-theme": {
    "title": "Komponiere ein Thema für einen Ort",
    "objective": "Ein Musikmacher, eine Rhythmus-Sandbox oder ein Spiel mit bearbeitbaren Instrumenten.",
    "completion": "Mache einen kurzen Ton oder eine Schleife für einen bestimmten Ort."
  },
  "create-sculpt-for-one-view": {
    "title": "Baue für einen Blickwinkel",
    "objective": "Ein Gelände-, Stadt-, Park- oder Weltbauspiel.",
    "completion": "Gestalte eine Szene so, dass aus einem gewählten Blickwinkel ein vollständiges Bild entsteht."
  },
  "create-repair-with-a-new-idea": {
    "title": "Repariere eine alte Kreation",
    "objective": "Eine Sandbox oder ein Aufbauspiel mit etwas, das du früher erstellt hast.",
    "completion": "Baue den schwächsten Teil um eine neue Idee herum neu auf."
  },
  "create-stage-a-silent-scene": {
    "title": "Inszeniere eine stille Szene",
    "objective": "Ein Spiel mit Posieren, Dekorieren, Wiederholungen oder Fotomodus.",
    "completion": "Ordne einen Moment an, dessen Handlung ohne Dialog klar ist."
  },
  "create-design-for-the-smallest-user": {
    "title": "Baue für den langsamsten Reisenden",
    "objective": "Ein Stadt-, Park-, Transport- oder Basenbauspiel mit Wegen.",
    "completion": "Verbinde zwei Dienste über die sicherste oder flachste verfügbare Route."
  },
  "create-invent-a-personal-ritual": {
    "title": "Erfinde ein Spielritual",
    "objective": "Ein vertrautes Spiel mit einer Welt, die du bereits verstehst.",
    "completion": "Erstellen und führe eine wiederholbare dreistufige Zeremonie durch."
  },
  "create-leave-a-kind-trace": {
    "title": "Hinterlasse einen Ort besser",
    "objective": "Eine gemeinsame Welt, ein Survival- oder Aufbauspiel oder eine offene Welt.",
    "completion": "Füge einen nützlichen Unterschlupf, Weg, Licht, Reparatur oder Vorrat hinzu."
  },
  "create-boss-arena": {
    "title": "Entwerfe eine Boss-Arena",
    "objective": "Ein Leveleditor, eine Sandbox, ein Wrestling-Spiel oder ein Begegnungseditor.",
    "completion": "Bauen und teste eine Arena mit einer klaren Gefahrenquelle und einer sicheren Route."
  },
  "create-themed-deck": {
    "title": "Baue ein Themendeck",
    "objective": "Ein Kartenspiel oder Deckbuilder mit flexibler Konstruktion.",
    "completion": "Baue rund um ein Thema auf und beende ein Spiel oder einen Lauf."
  },
  "create-accessible-route": {
    "title": "Baue eine barrierefreie Route",
    "objective": "Ein Stadt-, Park-, Transit-, Fabrik- oder Stützpunktbauspiel.",
    "completion": "Verbinde zwei wichtige Orte ohne Treppen, Gefahren oder Engpässe."
  },
  "create-racing-livery": {
    "title": "Entwerfe eine Rennlackierung",
    "objective": "Ein Renn- oder Fahrzeugspiel mit Mal- und Aufkleberwerkzeugen.",
    "completion": "Stelle eine zweifarbige Lackierung fertig und fahr einmal damit."
  },
  "create-factory-blueprint": {
    "title": "Erstelle einen wiederverwendbaren Bauplan",
    "objective": "Ein Automatisierungs-, Fabrik-, Kolonie- oder Ingenieursspiel.",
    "completion": "Erstelle ein kompaktes Modul, das du woanders kopieren kannst."
  },
  "create-character-backstory": {
    "title": "Entwirf eine Hintergrundgeschichte",
    "objective": "Ein Rollenspiel, eine Lebenssimulation, ein Sportspiel oder ein Charakterersteller.",
    "completion": "Wähle drei sichtbare Details aus und spiele eine Szene ab, die diese unterstützt."
  },
  "challenge-first-try-counts": {
    "title": "Spiele ein Fighting-Game-Set",
    "objective": "Ein Kampfspiel und jeder Charakter, den du lernen möchtest.",
    "completion": "Beende ein Best-of-Five-Set oder einen Arcade-Run."
  },
  "challenge-one-step-harder": {
    "title": "Spiele drei Shooter-Matches",
    "objective": "Ein Competitive Shooter, dessen Bewegung oder Waffen dich am meisten reizen.",
    "completion": "Schließe drei vollständige PvP-Spiele ab, ohne das Spiel zu wechseln."
  },
  "challenge-beat-your-ghost": {
    "title": "Fahre drei Rennen",
    "objective": "Ein Rennspiel mit einem Auto, einer Strecke oder einem Stil, der dir gefällt.",
    "completion": "Beende drei Rennen oder zeichne ein gültiges Zeitfahren auf."
  },
  "challenge-pressure-proof": {
    "title": "Sei einem Gegner voraus",
    "objective": "Ein Strategie-, Taktik- oder Kartenspiel mit kompetitivem Spiel.",
    "completion": "Schließe ein vollständiges Spiel oder Szenario ab."
  },
  "challenge-thin-margin": {
    "title": "Spiele ein vollständiges Sportmatch",
    "objective": "Die Sportart, das Team oder der Athlet, die oder den du am liebsten kontrollieren möchtest.",
    "completion": "Schließe ein komplettes Spiel, Event oder eine Turnierrunde ab."
  },
  "challenge-adapt-on-contact": {
    "title": "Schlage deine persönliche Bestleistung",
    "objective": "Ein Spiel, das Zeiten, Ergebnisse, Ränge oder Streaks aufzeichnet.",
    "completion": "Schlage ein Ziel oder beende drei ehrliche Versuche."
  },
  "challenge-return-to-the-wall": {
    "title": "Wiederhole die schwierige Begegnung",
    "objective": "Ein Boss, eine Rasse, ein Rätsel, eine Mission oder eine Rangbarriere, die dich aufgehalten hat.",
    "completion": "Schaffe es oder beende drei absichtliche Versuche."
  },
  "challenge-one-notch-higher": {
    "title": "Erhöhe den Schwierigkeitsgrad einmal",
    "objective": "Ein bekanntes Spiel mit einstellbarem Schwierigkeitsgrad.",
    "completion": "Beende eine Aktivität genau einen Schritt über deiner üblichen Einstellung."
  },
  "challenge-three-life-window": {
    "title": "Nutze nur drei Leben",
    "objective": "Ein Arcade-, Plattform-, Action- oder Run-basiertes Spiel mit schnellen Wiederholungsversuchen.",
    "completion": "Notiere dein bestes Ergebnis nach genau drei Versuchen."
  },
  "challenge-neglected-tool": {
    "title": "Verwende das vernachlässigte Werkzeug",
    "objective": "Ein Spiel mit Waffen, Klassen, Karten oder Fähigkeiten, die du ignorierst.",
    "completion": "Beende eine Aktivität, wobei eine vernachlässigte Option im Mittelpunkt steht."
  },
  "challenge-silent-route": {
    "title": "Durchquere einen Bereich unentdeckt",
    "objective": "Ein Stealth-, Action- oder immersives Simulationsspiel mit bewachten Bereichen.",
    "completion": "Durchquere einen bewachten Bereich, ohne einen vollständigen Alarm auszulösen."
  },
  "challenge-rationed-run": {
    "title": "Komme mit halben Vorräten aus",
    "objective": "Ein Survival-, Shooter-, RPG- oder Taktikspiel mit begrenzten Ressourcen.",
    "completion": "Beende eine Aktivität mit nicht mehr als der Hälfte deines normalen Vorrats."
  },
  "challenge-boss-rematch": {
    "title": "Besiege einen Boss mit einfacher Ausrüstung",
    "objective": "Ein Spiel mit einem unvergesslichen, wiederholbaren Boss oder einer Arena.",
    "completion": "Besiege es mit normaler Ausrüstung oder beende drei gezielte Versuche."
  },
  "challenge-precision-passage": {
    "title": "Schließe eine Präzisionspassage ab",
    "objective": "Ein Plattform-, Rhythmus-, Action-, Puzzle- oder Simulationsspiel.",
    "completion": "Schließe eine anspruchsvolle Sequenz ab oder beende fünf komplette Versuche."
  },
  "challenge-no-hint-hour": {
    "title": "Löse es ohne Hinweise",
    "objective": "Ein Spiel mit einem ungelösten Rätsel, einer Route, einem Abzug oder einem System.",
    "completion": "Löse es oder halte vor dem Aufhören eine neue konkrete Theorie fest."
  },
  "challenge-weak-link-drill": {
    "title": "Trainiere deine schwächste Fähigkeit",
    "objective": "Ein Spiel, bei dem es um deine Verteidigung, dein Ziel, dein Timing, deine Wirtschaftlichkeit oder deine Navigation geht.",
    "completion": "Übe diese Fähigkeit und setze das Gelernte danach in einer vollständigen Aktivität ein."
  },
  "challenge-daily-trial": {
    "title": "Schließe die heutige Herausforderung ab",
    "objective": "Ein Spiel mit einer spielbaren täglichen oder wöchentlichen Herausforderung.",
    "completion": "Schließe diese Herausforderung ab oder reiche ein gültiges Ergebnis ein."
  },
  "challenge-underdog-kit": {
    "title": "Nutze die Underdog-Option",
    "objective": "Ein Spiel mit Teams, Decks, Charakteren, Fahrzeugen oder Builds.",
    "completion": "Beende drei kurze Runden oder eine Mission mit deiner schwächsten Option."
  },
  "challenge-no-restart-recovery": {
    "title": "Erhole dich ohne Neustart",
    "objective": "Ein Lauf-, Match-, Missions- oder Managementspiel, bei dem Fehler zählen.",
    "completion": "Spiele nach einem schweren Rückschlag weiter und erreiche trotzdem das nächste Ziel."
  },
  "challenge-pattern-reader": {
    "title": "Lerne ein Muster",
    "objective": "Ein Spiel mit sich wiederholenden Angriffen, Rhythmen, Routen oder Produktionszyklen.",
    "completion": "Nutze dieses Muster, um eine Begegnung oder einen Zyklus zu beenden."
  },
  "challenge-last-stand": {
    "title": "Halte drei Wellen",
    "objective": "Ein Verteidigungs-, Horde-, Belagerungs-, Turmverteidigungs- oder Überlebensmodus.",
    "completion": "Halte eine Position oder plane drei komplette Wellen."
  },
  "challenge-ranked-nerves": {
    "title": "Schließe ein Ranglistenspiel ab",
    "objective": "Ein kompetitives Spiel, dessen Ranglisten-Warteschlange dich zögern lässt.",
    "completion": "Beende genau ein gewertetes Spiel, Rennen, Event oder eine Platzierung."
  },
  "challenge-nearby-achievement": {
    "title": "Versuche einen schwierigen Erfolg",
    "objective": "Eine fähigkeitsbasierte Errungenschaft, deren Versuch du bisher vermieden hast.",
    "completion": "Schalte es frei oder beende drei vollständige Versuche von Anfang an."
  },
  "challenge-survival-shift": {
    "title": "Überlebe eine ganze Schicht",
    "objective": "Ein Überlebens-, Horror-, Extraktions-, Management- oder Actionspiel.",
    "completion": "Überlebe eine Nacht, eine Etage, eine Expedition, eine Schicht oder eine Evakuierung."
  },
  "challenge-one-mechanic-master": {
    "title": "Lerne eine fortgeschrittene Technik",
    "objective": "Ein Spiel mit einem Parade-, Drift-, Abbruch-, Konter- oder komplexen Befehl.",
    "completion": "Führe diese Bewegung dreimal erfolgreich in einer Aktivität aus."
  },
  "challenge-clean-combo": {
    "title": "Lande eine saubere Sequenz",
    "objective": "Ein Kampf-, Rhythmus-, Taktik- oder Produktionsspiel mit verketteten Aktionen.",
    "completion": "Führe eine geplante Sequenz dreimal sauber aus."
  },
  "challenge-damage-budget": {
    "title": "Bleibe unter einem Schadensbudget",
    "objective": "Ein Spiel mit sichtbarer Gesundheit, Verlusten, Integrität oder Defensivfehlern.",
    "completion": "Beende eine Begegnung, ohne mehr als ein Viertel zu verlieren."
  },
  "challenge-unknown-ruleset": {
    "title": "Beende einen neuen Modus",
    "objective": "Ein Spiel mit einer unberührten Variante, einem Szenario oder einem Regelsatz.",
    "completion": "Lies die Regeln einmal durch und beende danach eine vollständige Runde oder ein Match."
  },
  "challenge-audacious-route": {
    "title": "Gehe den riskanten Weg",
    "objective": "Ein Spiel mit verzweigter Gefahr, umstrittenen Zielen oder risikoreichen Belohnungen.",
    "completion": "Erreiche den Endpunkt der schwierigeren Route oder beende einen Versuch."
  },
  "challenge-tension-you-avoid": {
    "title": "Bleibe bei der Spannung",
    "objective": "Ein Horror- oder Spiel mit hohen Einsätzen, das du immer wieder meidest.",
    "completion": "Erreiche den nächsten sicheren Punkt oder höre nach der Mindestzeit sicher auf."
  },
  "challenge-platformer-no-fall": {
    "title": "Schaffe einen Abschnitt ohne Sturz",
    "objective": "Ein Plattformer mit einer kurzen Route, die du bereits verstehst.",
    "completion": "Erreiche einmal den nächsten Kontrollpunkt, ohne zu fallen oder zu sterben."
  },
  "challenge-tactics-iron-plan": {
    "title": "Schließe eine Taktikmission sauber ab",
    "objective": "Ein rundenbasiertes Taktik- oder Strategiespiel mit einer enthaltenen Mission.",
    "completion": "Schließe die Mission ab, ohne einen Zug neu zu laden oder eine Einheit zu verlieren."
  },
  "challenge-rhythm-clean-song": {
    "title": "Verbessere einen Song",
    "objective": "Ein Rhythmus- oder Musikspiel mit einem Lied nahe deiner Fähigkeitsgrenze.",
    "completion": "Verbessere seine Punktzahl oder Kombination in drei Versuchen."
  },
  "challenge-sports-comeback": {
    "title": "Schaffe ein Sport-Comeback",
    "objective": "Ein Sportspiel mit benutzerdefinierten Spielen oder steuerbaren Punkteeinstellungen.",
    "completion": "Beginne hinten und gewinnen oder ziehe ein komplettes Spiel unentschieden."
  },
  "challenge-extraction-one-haul": {
    "title": "Bringe eine nützliche Beute in Sicherheit",
    "objective": "Ein Extraktions-, Überlebens- oder Beutespiel mit einem sicheren Ausgang.",
    "completion": "Einmal betreten, eine benötigte Ressource sichern und lebendig extrahieren."
  },
  "challenge-speedrun-one-split": {
    "title": "Trainiere einen Speedrun-Split",
    "objective": "Ein bekanntes Action- oder Plattformspiel mit einem wiederholbaren kurzen Abschnitt.",
    "completion": "Stoppe den Abschnitt dreimal und behalte deinen schnellsten sauberen Run."
  },
  "connect-lift-the-lowest": {
    "title": "Kehre zum alten Squad-Spiel zurück",
    "objective": "Ein ehemaliges Spiel nur für Freunde, das auch alleine funktioniert.",
    "completion": "Beende eine Soloaktivität mit der Rolle, die du einmal gemeinsam ausgefüllt hast."
  },
  "connect-follow-their-lead": {
    "title": "Tritt einem neuen Team bei",
    "objective": "Ein altes Gruppenspiel, bei dem es immer noch öffentliches Matchmaking gibt.",
    "completion": "Bleibe über einen vollständigen Ergebnisbildschirm bei einem zufälligen Team."
  },
  "connect-share-the-upgrade": {
    "title": "Probiere die Empfehlung einer befreundeten Person",
    "objective": "Die Spielempfehlung eines Freundes ist dir am deutlichsten in Erinnerung.",
    "completion": "Beende die Eröffnungsaktivität oder höre nach der Mindestzeit sicher auf."
  },
  "connect-rescue-route": {
    "title": "Kooperiere mit Fremden",
    "objective": "Ein Koop-Spiel mit öffentlichem Matchmaking und klaren Teamrollen.",
    "completion": "Schließe eine vollständige Mission, ein Match, eine Expedition oder einen Lauf ab."
  },
  "connect-set-up-the-finish": {
    "title": "Tritt einer gemeinsamen Welt bei",
    "objective": "Ein MMO, eine soziale Welt, ein Survival-Server oder ein Shared-Space-Spiel.",
    "completion": "Beende eine öffentliche Veranstaltung oder eine nützliche gemeinsame Aufgabe."
  },
  "connect-trade-roles": {
    "title": "Lass eine Person wählen",
    "objective": "Das Spiel, das du am meisten mit einer bestimmten Person assoziierst.",
    "completion": "Beende eine Aktivität, die diese Person sofort wiedererkennen würde."
  },
  "connect-global-ghost": {
    "title": "Verfolge den Geist eines anderen Spielers",
    "objective": "Ein Renn-, Plattform-, Rhythmus- oder Punktespiel mit aufgezeichneten Läufen.",
    "completion": "Fahre drei Versuche gegen den Geist oder unterbiete dessen Zeit."
  },
  "connect-daily-crowd": {
    "title": "Nimm an einem offenen Turnier teil",
    "objective": "Ein Kampf-, Renn-, Sport-, Karten- oder Strategiespiel mit offenen Turnieren.",
    "completion": "Schließe eine Turnierrunde oder ein Platzierungsspiel ab."
  },
  "connect-player-made-door": {
    "title": "Spiele ein Community-Level",
    "objective": "Ein Spiel mit von Spielern erstellten Levels, Karten, Geschichten oder Szenarien.",
    "completion": "Beende eine kürzlich oder nur wenig gespielte Kreation."
  },
  "connect-leave-a-signal": {
    "title": "Hilf einem unbekannten Spieler",
    "objective": "Ein Spiel, in dem Botschaften, Geister, Geschenke oder Strukturen fortbestehen.",
    "completion": "Hinterlasse ein nützliches Signal oder eine nützliche Ressource für einen späteren Spieler."
  },
  "connect-shared-save-return": {
    "title": "Kehre zu einem gemeinsamen Spielstand zurück",
    "objective": "Eine Welt, ein Team oder einen Charakter, bei deren Gestaltung jemand anderes mitgeholfen hat.",
    "completion": "Füge ein nützliches Element hinzu, ohne die bestehende Arbeit rückgängig zu machen."
  },
  "connect-watched-first": {
    "title": "Spiele, was du einmal gesehen hast",
    "objective": "Ein Spiel, das du zum ersten Mal durch einen Freund, einen Stream oder ein Turnier kennengelernt hast.",
    "completion": "Beende die Aktivität, an die du dich am meisten erinnerst."
  },
  "connect-creator-signature": {
    "title": "Folge einem bekannten Kreativen",
    "objective": "Ein ungespieltes Spiel eines Designers, Autors, Studios oder Komponisten, den du kennst.",
    "completion": "Erreiche einen Moment, in dem der erkennbare Stil dieser Person zum Vorschein kommt."
  },
  "connect-showpiece-session": {
    "title": "Spiele dein Vorzeigespiel",
    "objective": "Das Spiel, das du einer neugierigen Person als Erstes zeigen würdest.",
    "completion": "Beende eine Szene, ein Level, ein Spiel oder eine Aktivität, die erklärt, warum."
  },
  "connect-community-mod": {
    "title": "Probiere einen Community-Remix aus",
    "objective": "Ein Spiel mit einer von Spielern erstellten Mod, einem Regelsatz, einer Karte oder einer Kampagne.",
    "completion": "Beende eine Aktivität, die die Veränderung in der Community deutlich zeigt."
  },
  "connect-same-seed": {
    "title": "Spiele mit einem geteilten Seed",
    "objective": "Ein Roguelike-, Strategie-, Aufbau- oder Survival-Spiel mit teilbaren Seeds.",
    "completion": "Beende einen Lauf oder Meilenstein mit einem veröffentlichten Startwert."
  },
  "connect-common-language": {
    "title": "Spiele den meistdiskutierten Modus",
    "objective": "Ein Spiel, über das die Leute wegen eines erkennbaren Modus oder einer erkennbaren Eröffnung diskutiert haben.",
    "completion": "Beende diese Eröffnung oder spiele einmal den prominenten Modus."
  },
  "connect-friends-leaderboard": {
    "title": "Fordere eine bekannte Punktzahl heraus",
    "objective": "Ein Spiel, dessen Bestenliste immer noch einen bekannten Namen enthält.",
    "completion": "Sende eine neue Punktzahl, Zeit, Distanz oder einen neuen Rang."
  },
  "connect-asynchronous-turn": {
    "title": "Mache einen asynchronen Zug",
    "objective": "Ein Brett-, Strategie-, Puzzle- oder Managementspiel mit verzögerten Runden.",
    "completion": "Nutze jede verfügbare Runde und schicke den Zug danach zurück."
  },
  "connect-community-build": {
    "title": "Ergänze ein gemeinsames Bauwerk",
    "objective": "Ein Spiel mit einem Community-Projekt, einem Serverziel oder einem dauerhaften Build.",
    "completion": "Trage einen sichtbaren und nützlichen Beitrag bei."
  },
  "connect-replay-company": {
    "title": "Lerne von einer Wiederholung",
    "objective": "Ein Strategie-, Renn-, Kampf- oder Actionspiel mit vollständigen Wiederholungen.",
    "completion": "Kopiere in deinem eigenen Versuch eine Entscheidung aus einer Wiederholung."
  },
  "connect-pass-it-on": {
    "title": "Bereite eine Empfehlung vor",
    "objective": "Ein Spiel, das dem Geschmack einer Person entspricht, die du kennst.",
    "completion": "Beende eine typische Aktivität und nenne danach einen Grund für deine Empfehlung."
  },
  "connect-quiet-lobby": {
    "title": "Kooperiere ohne Voice-Chat",
    "objective": "Ein Multiplayer-Spiel mit nützlichen Pings, Emotes oder Bewegungshinweisen.",
    "completion": "Beende ein Teamergebnis ohne Mikrofon."
  },
  "connect-borrow-their-style": {
    "title": "Übernimm den Stil eines anderen Spielers",
    "objective": "Ein Spiel, bei dem du dich an den Build, die Route oder den Rhythmus einer Person erinnerst.",
    "completion": "Beende eine Aktivität mit diesem Ansatz."
  },
  "connect-community-tactic": {
    "title": "Nutze eine Community-Taktik",
    "objective": "Ein Spiel mit einem vom Spieler entdeckten Build, einer Route, einer Formation oder einem Trick.",
    "completion": "Nutze diese Idee durch eine vollständige Begegnung oder ein Szenario."
  },
  "connect-fandom-doorway": {
    "title": "Tauche in ein gemeinsames Fandom ein",
    "objective": "Ein Spiel, das mit einer Sportart, einer Geschichte, einem Hobby oder einem Universum verknüpft ist, das Menschen teilen.",
    "completion": "Beende ein erkennbares Kapitel, Ereignis, Spiel, Fall oder eine Reise."
  },
  "connect-small-kindness": {
    "title": "Tu etwas Hilfreiches",
    "objective": "Ein Multiplayer-Spiel, bei dem Fremde sich gegenseitig helfen können.",
    "completion": "Rette oder begleite jemanden, teile Ressourcen oder übergib etwas Nützliches."
  },
  "connect-parallel-company": {
    "title": "Spiele in Begleitung einer Stimme",
    "objective": "Ein ruhiges Spiel, das nebenbei Platz für einen Podcast oder eine vertraute Aufnahme lässt.",
    "completion": "Beende eine Aktivität mit niedrigem Druck, während du zuhörst."
  },
  "connect-memory-reconstruction": {
    "title": "Baue eine gemeinsame Erinnerung nach",
    "objective": "Ein Spiel, das einen Ort oder Moment enthält, den du mit jemandem geteilt hast.",
    "completion": "Erstelle ein sichtbares Detail aus dieser Erinnerung neu."
  },
  "connect-one-viewer-clip": {
    "title": "Erzeuge einen teilbaren Moment",
    "objective": "Ein Spiel, dessen nächste Szene, Spielzug oder Entdeckung jemanden interessieren könnte.",
    "completion": "Nimm einen kurzen Clip oder Screenshot auf, der es wert ist, verschickt zu werden."
  },
  "connect-couch-handoff": {
    "title": "Teile dir einen Controller",
    "objective": "Ein Puzzle-, Jump'n'Run-, Story- oder Punktespiel, das sich zum Überholen von Runden eignet.",
    "completion": "Tausche den Controller nach jedem Fehler aus, bis ein Abschnitt gelöscht ist."
  },
  "connect-party-lobby": {
    "title": "Tritt einer Party-Game-Lobby bei",
    "objective": "Ein Party-, Quiz-, Zeichen-, Musik- oder soziales Deduktionsspiel.",
    "completion": "Schließe ein vollständiges öffentliches oder privates Set ab."
  },
  "connect-public-event": {
    "title": "Nimm an einem öffentlichen Event teil",
    "objective": "Ein MMO oder eine gemeinsame Welt mit sichtbaren offenen Ereignissen.",
    "completion": "Bleibe vom Start des Events über den Belohnungsbildschirm dabei."
  },
  "connect-trade-a-gift": {
    "title": "Verschenke etwas Nützliches",
    "objective": "Ein Gesellschafts-, Überlebens-, MMO- oder Handelsspiel mit Spielergeschenken.",
    "completion": "Gib einem anderen Spieler einen nützlichen Gegenstand, ohne ihn zu bezahlen."
  },
  "connect-coop-puzzle": {
    "title": "Löse ein Koop-Rätsel",
    "objective": "Ein kooperatives Puzzle-, Escape-Room-, Abenteuer- oder Kommunikationsspiel.",
    "completion": "Löse gemeinsam einen kompletten Raum oder ein mehrstufiges Rätsel."
  },
  "connect-support-the-lowest": {
    "title": "Unterstütze das schwächste Teammitglied",
    "objective": "Ein Teamspiel mit sichtbaren Ergebnissen, Rollen oder Leistungen.",
    "completion": "Hilf dem Teamkollegen mit der niedrigsten Punktzahl, einen erfolgreichen Spielzug abzuschließen."
  },
  "first-game-memory": {
    "title": "Erlebe deine erste Spielerinnerung erneut",
    "objective": "Das Spiel ist mit deiner frühesten klaren Erinnerung an das Spielen verknüpft.",
    "completion": "Erreiche den Ort oder die Aktivität aus deiner Erinnerung und schließe dort ein Ziel ab."
  },
  "menu-music-door": {
    "title": "Folge der Menümusik",
    "objective": "Ein Spiel, dessen Menümusik du noch aus der Erinnerung hören kannst.",
    "completion": "Bleibe im Menüthema und beende dann eine Aktivität."
  },
  "old-console-era": {
    "title": "Spiele einen Klassiker deiner früheren Konsole",
    "objective": "Ein Spiel mit Hardware, die du vor deinem aktuellen System verwendet hast.",
    "completion": "Beende ein Retro-Level, Match oder eine Etappe – oder höre nach der Mindestzeit auf."
  },
  "series-beginning": {
    "title": "Kehre zum ersten Kapitel zurück",
    "objective": "Der erste Eintrag einer Reihe, die du jahrelang verfolgt hast.",
    "completion": "Erreiche den ersten wichtigen Speicherpunkt oder das Kapitelende."
  },
  "forgotten-save": {
    "title": "Öffne einen Spielstand wie eine Zeitkapsel",
    "objective": "Ein alter Spielstand, dessen Figur, Datum oder Ort sich persönlich anfühlt.",
    "completion": "Überprüfe, was du noch übrig hast, nimm dann eine Änderung vor und speichere erneut."
  },
  "childhood-coop-solo": {
    "title": "Spiele ein altes Koop-Spiel",
    "objective": "Ein Spiel, das du einmal lokal mit jemand anderem geteilt hast.",
    "completion": "Schließe eine bekannte Phase oder ein bekanntes Spiel allein oder mit einem Bot ab."
  },
  "first-hard-win": {
    "title": "Erlebe einen alten Triumph erneut",
    "objective": "Eine Herausforderung, ein Boss, ein Rennen oder ein Level, das du mit Stolz gemeistert hast.",
    "completion": "Schließe es erneut ab oder beende drei vollständige Versuche."
  },
  "rental-weekend": {
    "title": "Kehre zu einem geliehenen Spiel zurück",
    "objective": "Ein Spiel, das du einmal gemietet, ausgeliehen oder bei jemand anderem zu Hause gespielt hast.",
    "completion": "Beende die erste Aktivität, an die du dich erinnerst."
  },
  "demo-memory": {
    "title": "Spiele einen vertrauten Anfang erneut",
    "objective": "Ein Spiel, dessen Demo oder erstes Level einst alles in sich trug, was es versprach.",
    "completion": "Beende den Eröffnungsabschnitt von Anfang bis Ende."
  },
  "old-avatar": {
    "title": "Besuche einen alten Charakter",
    "objective": "Ein Rollenspiel-, Lebenssimulations- oder Online-Charakter, den du vor Jahren erstellt hast.",
    "completion": "Rüste nichts Neues aus und beende eine Aktivität mit deiner vorhandenen Ausrüstung."
  },
  "lost-mode": {
    "title": "Spiele den Nachfolger eines verlorenen Modus",
    "objective": "Ein aktuelles Spiel oder eine Fortsetzung mit einem ähnlichen Modus wie der, den du vermisst.",
    "completion": "Schließe ein komplettes Spiel, eine Runde oder ein Szenario in der entsprechenden Version ab."
  },
  "remembered-map": {
    "title": "Navigiere die Karte aus der Erinnerung",
    "objective": "Eine Karte, ein Hub oder eine Strecke, die du früher ohne Wegbeschreibung kanntest.",
    "completion": "Erreiche drei gespeicherte Sehenswürdigkeiten, ohne die Karte zu öffnen."
  },
  "credits-memory": {
    "title": "Erlebe ein denkwürdiges Ende erneut",
    "objective": "Ein Spielende, das immer noch emotionales Gewicht hat.",
    "completion": "Spiele das letzte Kapitel oder die nächste verfügbare Schlussszene noch einmal ab."
  },
  "licensed-childhood": {
    "title": "Spiele einen Samstagmorgen-Klassiker",
    "objective": "Ein Spiel, das an einen Film, eine Show, ein Spielzeug, einen Comic oder eine Figur gebunden ist.",
    "completion": "Schließe ein Level oder eine Mission ab, die an den Ursprung der Serie erinnert."
  },
  "handheld-evening": {
    "title": "Kehre zu einem Handheld-Favoriten zurück",
    "objective": "Ein Spiel, das du zum ersten Mal auf einem tragbaren System gespielt hast.",
    "completion": "Schließe eine kompakte Etappe, ein Rennen, ein Spiel oder einen Spieltag ab."
  },
  "seasonal-memory": {
    "title": "Kehre zu einem saisonalen Spiel zurück",
    "objective": "Ein Spiel, das stark an Sommer, Winter, Feiertage oder eine Jahreszeit gebunden ist.",
    "completion": "Erreiche die erinnerte Atmosphäre und beende dort eine Aktivität."
  },
  "family-game": {
    "title": "Spiele den Familienklassiker erneut",
    "objective": "Eine Party, ein Sport, ein Rennen, ein Puzzle oder ein Brettspiel, das deine Familie geteilt hat.",
    "completion": "Beende ein Spiel, eine Runde, einen Pokal oder ein Brett."
  },
  "old-friend-pick": {
    "title": "Spiele den Favoriten eines Freundes",
    "objective": "Wähle ein Spiel, das den Geschmack eines Freundes oder einer Freundin am besten widerspiegelt.",
    "completion": "Beende eine Aktivität, die diese Person vermutlich auch gewählt hätte."
  },
  "retired-strategy": {
    "title": "Verwende deine alte Strategie wieder",
    "objective": "Ein Strategie-, Karten-, Sport- oder Wettkampfspiel, das du einmal gut kanntest.",
    "completion": "Nutze deine frühere Eröffnung bis zum Ende eines vollständigen Matches oder Szenarios."
  },
  "classic-roster": {
    "title": "Nutze eine vertraute Aufstellung",
    "objective": "Ein Sportspiel mit einer Mannschaft oder einem Athleten aus einer denkwürdigen Saison.",
    "completion": "Beende ein komplettes Spiel oder Event mit diesem Kader."
  },
  "old-racing-line": {
    "title": "Fahr eine Strecke aus deiner Erinnerung",
    "objective": "Ein Rennspiel mit einer Strecke, die deine Hände einst kannten.",
    "completion": "Beende ein Rennen mit der Linie, die du dir merkst, ohne Zeit zu jagen."
  },
  "first-rpg-town": {
    "title": "Besuche deine erste RPG-Stadt",
    "objective": "Ein früher Rollenspiel-Hub, der sich einst wie ein Zuhause anfühlte.",
    "completion": "Gehe die Hauptroute entlang und sprich mit drei Bewohnern."
  },
  "old-horror-courage": {
    "title": "Kehre zu einem alten Schrecken zurück",
    "objective": "Ein Horrorspiel, das du einmal gemieden, pausiert oder ertragen hast.",
    "completion": "Erreiche den nächsten sicheren Raum oder höre nach der Mindestzeit sicher auf."
  },
  "dated-save-name": {
    "title": "Folge dem ältesten Zeitstempel",
    "objective": "Das älteste lesbare Speicherdatum in einem Spiel, das du noch starten kannst.",
    "completion": "Öffne diesen Spielstand, beende eine kleine Aktion und speichere erneut."
  },
  "dormant-achievement": {
    "title": "Beende einen alten Beinahe-Erfolg",
    "objective": "Eine Errungenschaft oder Herausforderung, die vor Jahren fast vollendet wurde.",
    "completion": "Schalte den alten Erfolg frei oder beende drei vollständige Versuche."
  },
  "original-vs-remaster": {
    "title": "Kehre zu einem Remake oder Remaster zurück",
    "objective": "Eine neuere Version eines Spiels, das du zuvor gespielt hast.",
    "completion": "Beende einen bekannten Abschnitt und halte fest, wie er jetzt aussieht."
  },
  "original-settings": {
    "title": "Stelle deine alten Einstellungen wieder her",
    "objective": "Ein bekanntes Spiel mit einem Steuerungs- oder Kamera-Setup, das du einmal bevorzugt hast.",
    "completion": "Stelle dieses Setup wieder her und beende eine Aktivität damit."
  },
  "muscle-memory-mechanic": {
    "title": "Nutze die Bewegung aus der Erinnerung",
    "objective": "Ein Spiel mit einer Mechanik, die deine Hände vielleicht noch kennen.",
    "completion": "Setze diese Mechanik dreimal erfolgreich in einer Aktivität ein."
  },
  "legacy-character": {
    "title": "Spiele deinen früheren Main",
    "objective": "Ein Kämpfer-, Helden-, Renn- oder Klassenspiel mit einem alten Favoriten.",
    "completion": "Schließe drei Runden oder eine Mission mit genau dieser Option ab."
  },
  "one-last-revisit": {
    "title": "Kehre noch einmal zu einem alten Favoriten zurück",
    "objective": "Ein ehemaliger Favorit, den du seit Jahren nicht mehr geöffnet hast.",
    "completion": "Beende eine vollständige Aktivität und erfasse die Stelle, an der du aufgehört hast."
  },
  "nostalgic-arcade-credit": {
    "title": "Spiele mit einem Arcade-Credit",
    "objective": "Ein klassisches Arcade-, Score-Attack-, Shoot-'em-up- oder Beat-'em-up-Spiel.",
    "completion": "Spiele ein Guthaben, um das Spiel zu beenden, und notiere den Punktestand."
  },
  "nostalgic-cheat-code": {
    "title": "Verwende einen bekannten Cheat-Code",
    "objective": "Ein älteres Spiel mit einem Code- oder Geheimmodus, den du bereits kennst.",
    "completion": "Aktiviere es und beende ein Level oder kombiniere es mit dem Effekt."
  },
  "nostalgic-first-indie": {
    "title": "Kehre zu einem frühen Indie-Spiel zurück",
    "objective": "Eines der ersten Spiele für kleine Teams oder nur zum Herunterladen, das dir gefallen hat.",
    "completion": "Beende das Eröffnungskapitel oder die Etappe – oder höre nach der Mindestzeit auf."
  },
  "nostalgic-old-customization": {
    "title": "Stelle einen alten Look wieder her",
    "objective": "Ein Spiel, bei dem du dich an eine selbst erstellte Figur, ein Auto, einen Raum oder ein Emblem erinnerst.",
    "completion": "Erstelle drei prägende Details aus dem Gedächtnis neu."
  },
  "nostalgic-startup-sounds": {
    "title": "Folge einem Startsound",
    "objective": "Ein Spiel, das an eine Konsole, einen Launcher oder einen Studiosound gebunden ist, an den du dich erinnerst.",
    "completion": "Öffne das erste Matching-Spiel und beende eine Aktivität."
  },
  "nostalgic-old-guide-memory": {
    "title": "Finde ein Geheimnis aus der Erinnerung",
    "objective": "Ein älteres Spiel, dessen versteckten Raum, Abkürzung oder Code du einmal kanntest.",
    "completion": "Erreiche dieses Geheimnis, ohne es nachschlagen zu müssen."
  },
  "smallest-install": {
    "title": "Spiele das kleinste installierte Spiel",
    "objective": "Das installierte Spiel, das am wenigsten Speicherplatz benötigt.",
    "completion": "Beende eine kurze Aktivität oder höre nach der Mindestzeit sicher auf."
  },
  "shortest-promised-time": {
    "title": "Schließe die kürzeste Aktivität ab",
    "objective": "Ein Spiel mit einem kurzen Level, einer Runde, einem Lied, einem Puzzle oder einem Lauf.",
    "completion": "Schließe genau eine dieser Einheiten ab."
  },
  "no-setup-needed": {
    "title": "Spiele ohne Setup",
    "objective": "Das erste bekannte Spiel ohne Downloads, Tutorials oder Konfiguration.",
    "completion": "Starte die nächstgelegene Aktivität und schließe sie einmal ab."
  },
  "nearest-checkpoint": {
    "title": "Nimm den nächstgelegenen Kontrollpunkt",
    "objective": "Ein aktiver Spielstand mit einer offensichtlichen nächsten Aktion.",
    "completion": "Führe diese Aktion aus und halte am nächsten Kontrollpunkt an."
  },
  "fewest-buttons": {
    "title": "Benutze die wenigsten Tasten",
    "objective": "Ein Spiel oder Modus mit nur wenigen wesentlichen Steuerelementen.",
    "completion": "Beende eine einfache Einheit oder höre nach der Mindestzeit sicher auf."
  },
  "first-installed-row": {
    "title": "Wähle aus der ersten Reihe",
    "objective": "Nur die erste sichtbare Zeile deiner installierten Bibliothek.",
    "completion": "Öffne das erste akzeptable Spiel und beende eine Aktivität."
  },
  "one-letter-shelf": {
    "title": "Wähle einen Buchstaben",
    "objective": "Spiele, die mit dem ersten Buchstaben beginnen, der dir in den Sinn kommt.",
    "completion": "Öffne das erste akzeptable Spiel und beende eine Aktivität."
  },
  "single-cover-pull": {
    "title": "Wähle das erste blaue Cover",
    "objective": "Das erste installierte Spiel, dessen Cover sichtbar blau ist.",
    "completion": "Öffne es sofort und beende eine Aktivität."
  },
  "safe-mode": {
    "title": "Nutze den entspanntesten Modus",
    "objective": "Ein bekanntes Spiel mit Assists, Übung, Sandbox oder einfachem Modus.",
    "completion": "Beende eine Aktivität mit unverändertem Modus."
  },
  "no-inventory-session": {
    "title": "Ignoriere das Inventar",
    "objective": "Ein Spiel, das du mit deiner aktuellen Ausrüstung oder ganz ohne Ausrüstung spielen kannst.",
    "completion": "Beende eine Aktivität, ohne einen Inventarbildschirm zu öffnen."
  },
  "one-marker-only": {
    "title": "Folge einer Markierung in der Nähe",
    "objective": "Ein aktiver Spielstand mit einem deutlich sichtbaren Ziel in der Nähe.",
    "completion": "Erreiche diese Markierung, beende die Aufgabe und halte an."
  },
  "closest-completion": {
    "title": "Beende die kürzeste offene Aufgabe",
    "objective": "Ein aktiver Spielstand mit einer klar begrenzten Aufgabe, die du heute abschließen kannst.",
    "completion": "Beende diese Aufgabe und bleibe beim Ergebnis stehen."
  },
  "tutorial-free": {
    "title": "Nutze eine vertraute Steuerung",
    "objective": "Ein vertrautes Spiel, das kein Tutorial oder Umlernen erfordert.",
    "completion": "Beende eine bekannte Aktivität mit dem aktuellen Setup."
  },
  "single-screen-game": {
    "title": "Bleibe auf einem Bildschirm",
    "objective": "Ein Puzzle-, Brett-, Arcade- oder Taktikspiel mit einem enthaltenen Brett.",
    "completion": "Räume einen Bildschirm, ein Brett, ein Puzzle oder eine Runde ab."
  },
  "pause-guaranteed": {
    "title": "Vertraue dem nächsten Autosave",
    "objective": "Ein bekanntes Spiel mit häufigen automatischen Kontrollpunkten.",
    "completion": "Beende die aktuelle Aktivität und stoppe beim nächsten automatischen Speichern."
  },
  "no-dialogue-choice": {
    "title": "Lass die Geschichte entscheiden",
    "objective": "Ein lineares Story-Spiel mit wenigen Auswahlmöglichkeiten oder Build-Entscheidungen.",
    "completion": "Erreiche das Ende einer Szene oder eines Kapitels."
  },
  "one-match-contract": {
    "title": "Spiele genau ein Match",
    "objective": "Ein Sport-, Kampf-, Renn-, Shooter- oder Kartenspiel mit klaren Übereinstimmungen.",
    "completion": "Beende ein komplettes Spiel und gehe zum Ergebnisbildschirm."
  },
  "one-room-boundary": {
    "title": "Bleibe in einem Raum",
    "objective": "Ein Builder, eine Simulation, ein Puzzle oder ein Rollenspiel mit nützlicher Arbeit in einem Raum.",
    "completion": "Schließe eine sichtbare Änderung ab, ohne diesen Bereich zu verlassen."
  },
  "single-verb": {
    "title": "Wähle ein einfaches Verb",
    "objective": "Ein Spiel, bei dem es um Fahren, Bauen, Sprechen, Sortieren oder Gehen geht.",
    "completion": "Wiederhole diesen Vorgang, bis eine Aktivität endet."
  },
  "visible-timer": {
    "title": "Lege den Stopp vor dem Start fest",
    "objective": "Ein vertrautes Spiel mit einem offensichtlichen sicheren Haltepunkt.",
    "completion": "Spiele, bis der Timer abgelaufen ist, speichere dann und stoppe."
  },
  "platform-recent": {
    "title": "Verwende den Verlauf der letzten Spiele",
    "objective": "Nur die drei zuletzt auf deinem System gespielten Spiele.",
    "completion": "Öffne das erste passende und beende eine Aktivität."
  },
  "controller-ready": {
    "title": "Spiele von deinem Sitzplatz aus",
    "objective": "Ein Spiel, das vollständig spielbar ist, wenn der Controller oder das Gerät bereits in der Hand ist.",
    "completion": "Beende eine Aktivität, ohne dein Setup zu ändern."
  },
  "no-update-door": {
    "title": "Überspringe jeden Download",
    "objective": "Das erste passende installierte Spiel ist jetzt fertig.",
    "completion": "Beende eine Aktivität, ohne auf ein anderes Spiel zu warten."
  },
  "familiar-interface": {
    "title": "Verwende Menüs, die du kennst",
    "objective": "Ein Spiel, dessen Benutzeroberfläche und Speicherstruktur automatisch wirken.",
    "completion": "Erreiche ein Ergebnis, ohne unbekannte Menüs durchsuchen zu müssen."
  },
  "one-save-only": {
    "title": "Nutze einen bestehenden Spielstand",
    "objective": "Der erste aktuelle Spielstand mit einer eindeutigen Aktivität in der Nähe.",
    "completion": "Beende diese Aktivität, ohne einen weiteren Spielstand zu öffnen."
  },
  "finite-run": {
    "title": "Schließe ein Puzzle-Set ab",
    "objective": "Ein Puzzle-, Wort-, Zahlen- oder Kachelspiel mit gruppierten Phasen.",
    "completion": "Schließe ein sichtbares Set oder fünf kurze Rätsel ab."
  },
  "default-build": {
    "title": "Verwende das Standard-Loadout",
    "objective": "Ein Spiel mit Charakteren, Decks, Klassen, Fahrzeugen oder Ausrüstungsvoreinstellungen.",
    "completion": "Beende eine Aktivität mit der ersten Standardoption."
  },
  "default-difficulty": {
    "title": "Akzeptiere den empfohlenen Schwierigkeitsgrad",
    "objective": "Ein Spiel, das eine empfohlene oder Standardeinstellung bietet.",
    "completion": "Beende eine Aktivität, ohne diese Einstellung zu ändern."
  },
  "fewest-open-threads": {
    "title": "Öffne den ruhigsten Spielstand",
    "objective": "Der Spielstand mit den wenigsten sichtbaren Quests, Warnungen oder Problemen.",
    "completion": "Beende die nächste kleine Aufgabe und speichere danach erneut."
  },
  "stop-rule-first": {
    "title": "Lege zuerst den Ausstieg fest",
    "objective": "Ein Spiel mit einem klaren Kapitel, Spiel, Tag oder Kontrollpunkt.",
    "completion": "Nenne einen Haltepunkt, erreiche ihn und halte sofort an."
  },
  "overwhelmed-quick-resume": {
    "title": "Setze das bereits geöffnete Spiel fort",
    "objective": "Das unterbrochene oder schnell wiederaufgenommene Spiel, das einer Fortsetzung am nächsten kommt.",
    "completion": "Beende die aktuelle Aktivität, ohne die Bibliothek zu öffnen."
  },
  "overwhelmed-saved-preset": {
    "title": "Verwende eine gespeicherte Voreinstellung",
    "objective": "Ein Spiel mit einer vorhandenen Deck-, Ausrüstungs-, Team- oder Fahrzeugvoreinstellung.",
    "completion": "Erreiche mit der ersten gespeicherten Voreinstellung ein vollständiges Ergebnis."
  },
  "overwhelmed-last-level": {
    "title": "Wiederhole das zuletzt abgeschlossene Level",
    "objective": "Die letzte Kampagnenebene oder das letzte Kapitel, das du abgeschlossen hast.",
    "completion": "Spiele es noch einmal ab und stoppe am Ende."
  },
  "overwhelmed-first-tutorial": {
    "title": "Spiele ein Tutorial",
    "objective": "Ein Spiel mit einem kurzen Tutorial, einer Übungslektion oder einem Trainingskurs.",
    "completion": "Beende genau eine Lektion und höre auf."
  },
  "overwhelmed-shortest-description": {
    "title": "Spiele das Spiel in der Mitte",
    "objective": "Das Spiel in der Mitte der ersten sichtbaren Reihe deiner installierten Bibliothek.",
    "completion": "Öffne es und beende eine Aktivität, ohne Alternativen zu vergleichen."
  },
  "overwhelmed-featured-daily": {
    "title": "Nimm die hervorgehobene Tagesaufgabe an",
    "objective": "Ein bekanntes Spiel, das eine bestimmte tägliche Aktivität zeigt.",
    "completion": "Beende diese Aktivität einmal mit den vorgegebenen Standardregeln."
  },
  "instant-movement": {
    "title": "Bewege dich, bevor du nachdenkst",
    "objective": "Ein Action-, Plattform-, Renn- oder Open-World-Spiel mit sofortiger Bewegung.",
    "completion": "Beginne innerhalb von 60 Sekunden mit der Bewegung und erreiche einen Kontrollpunkt."
  },
  "speed-line": {
    "title": "Fahre eine schnelle Linie",
    "objective": "Ein Rennspiel mit einer kurzen bekannten Strecke.",
    "completion": "Fahr drei Runden und halte die schnellste Runde sauber."
  },
  "destruction-break": {
    "title": "Zerstöre etwas Großes",
    "objective": "Ein Zerstörungs-, Physik-, Action- oder Sandbox-Spiel mit reaktiven Objekten.",
    "completion": "Zerstöre eine Struktur, ein Fahrzeug, einen Raum oder ein großes Ziel."
  },
  "rhythm-release": {
    "title": "Spiele drei Rhythmus-Songs",
    "objective": "Ein Rhythmus-, Tanz-, Trommel- oder Musikspiel.",
    "completion": "Beende drei Songs oder ein vollständiges Set auf einem Schwierigkeitsgrad."
  },
  "short-rogue-run": {
    "title": "Spiele einen schnellen Roguelike-Run",
    "objective": "Ein Roguelike-, Arcade-, Survival- oder Punktespiel mit sauberen Resets.",
    "completion": "Spiele einen Lauf vom unmittelbaren Start bis zum natürlichen Ende."
  },
  "parkour-route": {
    "title": "Laufe eine Parkour-Route",
    "objective": "Ein Plattform- oder Actionspiel mit ausdrucksstarkem Durchqueren.",
    "completion": "Durchquere einen Bereich mit drei verschiedenen Bewegungstechniken."
  },
  "arena-sprint": {
    "title": "Betrete die schnellste Arena",
    "objective": "Ein Kampf-, Shooter-, Sport- oder Arenaspiel mit schneller Spielersuche.",
    "completion": "Erziele ein vollständiges Wettbewerbsergebnis."
  },
  "combo-chase": {
    "title": "Halte eine Combo am Leben",
    "objective": "Ein Action-, Kampf-, Rhythmus-, Skating- oder Punktespiel mit Combos.",
    "completion": "Schlage deine erste Combo-Anzahl in drei Versuchen."
  },
  "chase-sequence": {
    "title": "Schließe eine Verfolgungsjagd ab",
    "objective": "Ein Renn-, Horror-, Action- oder Stealth-Spiel, bei dem es um Verfolgung geht.",
    "completion": "Erreiche die Sicherheit oder fange das Ziel einmal."
  },
  "boss-now": {
    "title": "Gehe direkt zu einem Boss",
    "objective": "Ein Spiel mit einem nahegelegenen Boss, einer Arena oder einer wiederholbaren Begegnung.",
    "completion": "Besiege es oder beende drei komplette Versuche."
  },
  "sports-quarter": {
    "title": "Spiele einen Spielabschnitt",
    "objective": "Ein Sportspiel mit kurzen Vierteln, Perioden, Sätzen oder Innings.",
    "completion": "Beende eine Periode oder das kürzeste komplette Spiel."
  },
  "flight-loop": {
    "title": "Heb ab",
    "objective": "Ein Flug-, Weltraum-, Superhelden-, Segelflug- oder Luftkampfspiel.",
    "completion": "Starte, beende eine Route oder Begegnung und lande."
  },
  "vehicle-switch-off": {
    "title": "Bleibe in einem Fahrzeug",
    "objective": "Eine offene Welt zum Fahren, Rennen oder Fliegen mit mehreren Fahrzeugen.",
    "completion": "Beende eine komplette Fahrt, ohne das Fahrzeug zu verlassen."
  },
  "swarm-clear": {
    "title": "Räume einen Schwarm aus dem Weg",
    "objective": "Ein Horde-, Action-, Shooter-, Tower-Defense- oder Survival-Spiel.",
    "completion": "Schließe eine komplette Welle, einen Raum, einen Bildschirm oder eine Begegnung ab."
  },
  "timed-objective": {
    "title": "Schlage einen Countdown",
    "objective": "Ein Renn-, Puzzle-, Action- oder Herausforderungsspiel mit sichtbarem Timer.",
    "completion": "Erreiche ein zeitgesteuertes Ziel oder beende drei Versuche."
  },
  "movement-only-win": {
    "title": "Gewinne mit der Positionierung",
    "objective": "Ein Taktik-, Sport-, Stealth- oder Actionspiel, bei dem es auf Bewegung ankommt.",
    "completion": "Erreiche ein Ergebnis durch gute Positionierung statt durch höhere Geschwindigkeit."
  },
  "loudest-game": {
    "title": "Dreh den energiegeladensten Soundtrack auf",
    "objective": "Ein Rhythmus-, Renn-, Action- oder Sportspiel mit energiegeladener Musik.",
    "completion": "Beende einen Song, ein Rennen, ein Spiel oder eine Mission mit der Musikzentrale."
  },
  "quick-reaction": {
    "title": "Spiele nach Reflex",
    "objective": "Ein Arcade-, Shooter-, Rhythmus-, Kampf- oder Actionspiel mit schnellem Start.",
    "completion": "Beende eine komplette Runde, Etappe oder einen Lauf ohne Aufwärmen."
  },
  "vertical-climb": {
    "title": "Klettere, bis sich die Aussicht ändert",
    "objective": "Ein Kletter-, Plattform-, Open-World- oder Traversal-Spiel.",
    "completion": "Erreiche einen deutlich höheren Orientierungspunkt ohne Schnellfahrt."
  },
  "trick-session": {
    "title": "Lande einen neuen Trick",
    "objective": "Ein Skate-, Snowboard-, Fahrrad-, Fahr- oder Bewegungsspiel.",
    "completion": "Lande einen unbekannten Trick dreimal sauber."
  },
  "rapid-puzzle": {
    "title": "Löse ein Rätsel in Bewegung",
    "objective": "Ein Spiel mit fallenden Blöcken, Rhythmus-Puzzles, Action-Puzzles oder zeitgesteuerten Taktiken.",
    "completion": "Löse ein komplettes Brett, eine Stufe oder ein zeitgesteuertes Rätsel."
  },
  "aggressive-route": {
    "title": "Nimm den direkten Weg",
    "objective": "Ein Action-, Shooter-, Renn- oder Strategiespiel, das Druck belohnt.",
    "completion": "Erreiche ein Ziel, ohne dich auf eine Nebenaktivität zurückzuziehen."
  },
  "mech-weight": {
    "title": "Steuere eine schwere Maschine",
    "objective": "Ein Mech-, Panzer-, LKW-, Bau- oder Industriesimulationsspiel.",
    "completion": "Beende eine Mission oder einen Auftrag, ohne die Maschine zu wechseln."
  },
  "crowd-route": {
    "title": "Bewege dich durch eine Menschenmenge",
    "objective": "Ein Sport-, Stealth-, Action- oder Gesellschaftsspiel mit vielen beweglichen Körpern.",
    "completion": "Durchquere ein überfülltes Gebiet, ohne zusammenzustoßen oder in den Kampf zu geraten."
  },
  "streak-attempt": {
    "title": "Erziele drei Ergebnisse in Folge",
    "objective": "Ein Sport-, Kampf-, Renn-, Karten- oder Arcade-Spiel mit kurzen Ergebnissen.",
    "completion": "Gewinne oder räume drei Ergebnisse hintereinander ab."
  },
  "escape-the-hub": {
    "title": "Verlasse jetzt den Hub",
    "objective": "Ein Open-World-, RPG-, Survival- oder Abenteuerspielstand an einer sicheren Basis.",
    "completion": "Verlasse die Straße sofort und erreiche den ersten ungeplanten Orientierungspunkt."
  },
  "one-life-motion": {
    "title": "Bleibe in Bewegung, bis es zu Ende ist",
    "objective": "Ein endloses Läufer-, Überlebens-, Arcade- oder Verfolgungsspiel.",
    "completion": "Beende einen Lauf, ohne anzuhalten oder dich in Sicherheit zu verstecken."
  },
  "role-with-tempo": {
    "title": "Gib das Tempo des Teams vor",
    "objective": "Ein Squad-, Sport-, Renn- oder Multiplayer-Spiel mit Momentum-Rollen.",
    "completion": "Schließe eine Runde oder Mission als Initiator, Scout, Fahrer oder Support ab."
  },
  "physical-finish": {
    "title": "Spiele etwas Körperliches",
    "objective": "Ein Tanz-, Fitness-, Bewegungssteuerungs-, Rhythmus- oder aktives Partyspiel.",
    "completion": "Beende ein Lied, eine Routine oder eine Runde – oder höre nach der Mindestzeit auf."
  },
  "restless-landing": {
    "title": "Nutze den letzten Energieschub",
    "objective": "Ein schnelles Spiel, das an einem ruhigen Hub oder Ergebnisbildschirm enden kann.",
    "completion": "Beende eine intensive Aktivität und kehre an einen sicheren Ort zurück."
  },
  "restless-twin-stick": {
    "title": "Räume eine Twin-Stick-Arena",
    "objective": "Ein Twin-Stick-Shooter, Survivor-like oder Arena-Actionspiel.",
    "completion": "Schließe eine Arena, ein Wellenset oder einen kompletten Lauf ab."
  },
  "restless-hack-and-slash": {
    "title": "Räume einen Hack-and-Slash-Raum ab",
    "objective": "Ein Charakter-Action-, Action-RPG- oder Musou-Spiel.",
    "completion": "Schließe einen Kampfraum oder eine Mission ab, ohne die Waffen zu wechseln."
  },
  "restless-pinball-table": {
    "title": "Spiele an einem Flipper",
    "objective": "Ein Flipper- oder Punktejagdspiel mit kurzen Versuchen.",
    "completion": "Spiele drei Bälle oder Versuche und notiere das beste Ergebnis."
  },
  "restless-skate-line": {
    "title": "Baue eine Skate-Line",
    "objective": "Ein Spiel zum Skaten, Radfahren, Snowboarden oder Tricks.",
    "completion": "Verknüpfe drei Orientierungspunkte oder Tricks in einer klaren Linie."
  },
  "restless-beat-em-up": {
    "title": "Schließe eine Beat-'Em-Up-Etappe ab",
    "objective": "Ein Brawler-, Beat-’em-up- oder Crowd-Action-Spiel.",
    "completion": "Schließe eine komplette Stufe ab, ohne den Charakter zu wechseln."
  },
  "restless-rts-rush": {
    "title": "Starte einen Rush im Strategiespiel",
    "objective": "Ein Echtzeit-Strategiespiel mit Gefechts- oder Schnellspielmodus.",
    "completion": "Beende ein Spiel, das auf frühen Druck aufgebaut ist."
  },
  "single-campaign-thread": {
    "title": "Folge einem Handlungsstrang",
    "objective": "Eine Kampagne mit einer aktiven Haupt- oder Charakterquest.",
    "completion": "Schließe das nächste Kapitel, die nächste Mission oder den nächsten benannten Schritt ab."
  },
  "deep-puzzle": {
    "title": "Bleibe bei einem schwierigen Rätsel",
    "objective": "Ein Puzzle- oder Erkundungsspiel mit einem ungelösten Problem.",
    "completion": "Löse es oder halte vor dem Aufhören eine neue konkrete Theorie fest."
  },
  "boss-study": {
    "title": "Studiere einen Boss",
    "objective": "Ein Action-, RPG- oder Plattformspiel mit einem harten Boss in der Nähe.",
    "completion": "Besiege den Boss oder erkenne und beantworte drei Angriffsmuster."
  },
  "build-one-function": {
    "title": "Erstelle ein funktionierendes System",
    "objective": "Ein Fabrik-, Ingenieurs-, Sandbox- oder Automatisierungsspiel.",
    "completion": "Baue ein vollständiges Produktionssystem und lass einen stabilen Zyklus durchlaufen."
  },
  "achievement-line": {
    "title": "Verfolge einen Erfolg",
    "objective": "Ein Spiel mit einem nahegelegenen Erfolg, der mehrere klare Schritte erfordert.",
    "completion": "Schalte es frei oder beende jeden derzeit erreichbaren Schritt."
  },
  "chapter-with-notes": {
    "title": "Lies ein Kapitel der Geschichte",
    "objective": "Ein visueller Roman, ein Rollenspiel, ein Abenteuer oder ein Erzählspiel.",
    "completion": "Beende ein ganzes Kapitel, ohne den Dialog zu überspringen."
  },
  "one-deck-session": {
    "title": "Behalte ein Deck unverändert",
    "objective": "Ein Kartenspiel oder Deckbuilder mit einem fertigen Deck.",
    "completion": "Beende drei Spiele oder einen Lauf, ohne ihn zu bearbeiten."
  },
  "one-character-session": {
    "title": "Bleibe bei einem Charakter",
    "objective": "Ein Kampf-, Helden-, RPG- oder Kaderspiel mit Charakterauswahl.",
    "completion": "Schließe drei Runden oder eine Mission ab, ohne zu wechseln."
  },
  "collectible-set": {
    "title": "Vervollständige ein Sammelset",
    "objective": "Ein Spiel mit einem kleinen benannten Set, das bereits teilweise gefunden wurde.",
    "completion": "Finde alle verbleibenden Gegenstände in diesem Set."
  },
  "route-mastery": {
    "title": "Lerne eine Route",
    "objective": "Ein Renn-, Plattform-, Stealth- oder Geschwindigkeitsspiel mit wiederholbaren Routen.",
    "completion": "Durchlaufe dieselbe Strecke dreimal und verbessere dabei einen Abschnitt."
  },
  "skill-lab": {
    "title": "Übe einen Zug",
    "objective": "Ein Spiel mit einer Mechanik, die du im Training oder im sicheren Spiel isolieren kannst.",
    "completion": "Führe es zehnmal richtig aus und verwende es dann einmal im Kontext."
  },
  "one-city-block": {
    "title": "Schließe einen Stadtblock ab",
    "objective": "Ein Stadt-, Kolonie-, Park- oder Siedlungsbauer.",
    "completion": "Vervollständige einen begrenzten Block, ohne über seinen Rand hinaus zu expandieren."
  },
  "questline-only": {
    "title": "Folge einer benannten Questreihe",
    "objective": "Ein Rollenspiel oder Abenteuer mit einem benannten Charakter oder einer Fraktionsquestreihe.",
    "completion": "Schließe die nächsten beiden Schritte ab, ohne nicht damit zusammenhängende Quests anzunehmen."
  },
  "ranked-set": {
    "title": "Spiele ein bewusstes Wettkampfset",
    "objective": "Ein Kampf-, Shooter-, Karten-, Sport- oder Strategiespiel.",
    "completion": "Spiele drei vollständige Runden und verfolge dabei ein einziges Lernziel."
  },
  "craft-one-object": {
    "title": "Stelle ein vollständiges Objekt her",
    "objective": "Ein Überlebens-, Bastel-, Rollenspiel-, Koch- oder Ingenieursspiel.",
    "completion": "Sammle alle Teile, stelle den Gegenstand her und verwende ihn einmal."
  },
  "photo-one-subject": {
    "title": "Fotografiere ein Motiv",
    "objective": "Ein Spiel mit Fotomodus und einem starken visuellen Motiv.",
    "completion": "Erfasse fünf Ansichten und behalte ein letztes Bild."
  },
  "strategy-one-plan": {
    "title": "Verpflichte dich zu einer Strategie",
    "objective": "Ein Taktik-, Karten-, Sport- oder Strategiespiel mit vollständigen Spielen.",
    "completion": "Lege einen Plan fest und verfolge ihn bis zum Ende eines Matches oder Szenarios."
  },
  "language-immersion": {
    "title": "Höre auf jeden Hinweis",
    "objective": "Ein Dialog-, Mystery-, Deduktions- oder Erzählspiel.",
    "completion": "Beende einen Fall oder ein Kapitel, ohne gesprochene oder geschriebene Hinweise zu überspringen."
  },
  "save-rescue": {
    "title": "Verstehe einen aufgegebenen Spielstand",
    "objective": "Ein komplexes Rollenspiel, eine Strategie oder eine Simulation, die du vergessen hast.",
    "completion": "Verschaffe dir einen Überblick, erledige eine Aufgabe und speichere mit einem klaren nächsten Schritt."
  },
  "economy-balance": {
    "title": "Stabilisiere eine Wirtschaft",
    "objective": "Ein Stadt-, Kolonie-, Fabrik- oder Managementspiel mit Ressourcenfluss.",
    "completion": "Führe einen vollständigen Zyklus durch, ohne bei einer wichtigen Ressource ins Minus zu geraten."
  },
  "one-dungeon": {
    "title": "Schließe einen Dungeon ab",
    "objective": "Ein RPG-, Roguelike-, Action- oder Taktikspiel mit begrenzten Expeditionen.",
    "completion": "Betrete einen Dungeon und erreiche den Ausgang oder besiege den Boss."
  },
  "single-soundscape": {
    "title": "Höre dich durch einen Ort",
    "objective": "Ein Horror-, Erkundungs-, Stealth- oder Atmosphärenspiel.",
    "completion": "Überquere einen Ort und folge dabei den Umgebungsgeräuschen."
  },
  "one-conversation-tree": {
    "title": "Studiere einen Charakter",
    "objective": "Ein Rollenspiel oder Erzählspiel mit vielen Hintergrundgeschichten und Charakteraufzeichnungen.",
    "completion": "Lies die aktuellen Einträge über diese Figur und führe danach ein Gespräch mit ihr zu Ende."
  },
  "precision-score": {
    "title": "Verbessere eine Zahl",
    "objective": "Ein Spiel, bei dem Punkte, Zeit, Genauigkeit, Combo, Rang oder Effizienz gemessen werden.",
    "completion": "Mache drei Versuche und konzentriere dich nur auf die Verbesserung dieser Zahl."
  },
  "map-pocket": {
    "title": "Lerne eine kleine Region",
    "objective": "Ein Open-World- oder Erkundungsspiel mit einem begrenzten, unbekannten Gebiet.",
    "completion": "Finde seine Eingänge, einen Orientierungspunkt und einen sicheren Ausgang."
  },
  "system-experiment": {
    "title": "Ändere eine Variable",
    "objective": "Ein Simulations-, Strategie-, Sandbox- oder Build-Spiel mit sichtbaren Systemen.",
    "completion": "Ändere eine Eingabe und beobachte das Ergebnis während eines vollständigen Zyklus."
  },
  "one-room-makeover": {
    "title": "Schließe einen Raum ab",
    "objective": "Ein Bau-, Dekorations-, Lebenssimulations- oder Renovierungsspiel.",
    "completion": "Schließe einen Raum ab, ohne einen anderen Raum zu beginnen."
  },
  "credits-push": {
    "title": "Erreiche den Abschlussbildschirm",
    "objective": "Eine Kampagne, die höchstens noch eine Spielstunde vom Ende entfernt ist.",
    "completion": "Rufe den Bildschirm „Credits“ oder „Endergebnis“ auf."
  },
  "manual-mastery": {
    "title": "Lies über ein System und nutze es",
    "objective": "Ein Strategie-, Simulations-, Kampf- oder RPG-System, das im Spiel erklärt wird.",
    "completion": "Lies das Tutorial und verwende es einmal erfolgreich."
  },
  "focus-cooldown": {
    "title": "Beende die Spielsession sauber",
    "objective": "Eine Kampagne, ein Aufbauspiel oder ein Strategiespiel mit einer klar benannten Aufgabe.",
    "completion": "Beende diese Aufgabe, speichere an einem sicheren Punkt und notiere den nächsten Schritt."
  },
  "focused-grand-strategy-turn": {
    "title": "Plane einen Zug im Grand-Strategy-Spiel",
    "objective": "Ein Grand-Strategy- oder 4X-Spiel mit einer komplexen aktuellen Stellung.",
    "completion": "Löse eine Runde um ein einzelnes diplomatisches oder wirtschaftliches Ziel."
  },
  "focused-factory-bottleneck": {
    "title": "Behebe einen Fabrikengpass",
    "objective": "Ein Automatisierungs- oder Produktionsspiel mit einer blockierten Ressourcenlinie.",
    "completion": "Sorge dafür, dass diese Linie einen ganzen Zyklus lang ununterbrochen läuft."
  },
  "focused-flight-procedure": {
    "title": "Führe einen vollständigen Flug durch",
    "objective": "Ein Flug-, Zug-, LKW-, Schiffs- oder Maschinensimulator.",
    "completion": "Führe eine vollständige Abfahrt, Route und sichere Ankunft durch."
  },
  "focused-detective-case": {
    "title": "Schließe einen Detektivfall ab",
    "objective": "Ein Detektiv-, Deduktions-, Mystery- oder Ermittlungsspiel.",
    "completion": "Löse einen Fall oder reiche eine vollständige Anklage ein."
  },
  "focused-rhythm-set": {
    "title": "Beende ein Rhythmus-Set",
    "objective": "Ein Rhythmus- oder Musikspiel mit gruppierten Liedern oder einem Kampagnenset.",
    "completion": "Beende das gesamte Set mit einem unveränderten Schwierigkeitsgrad."
  },
  "focused-speedrun-segment": {
    "title": "Lerne ein Speedrun-Segment",
    "objective": "Ein bekanntes Plattform- oder Actionspiel mit einer kurzen, wiederholbaren Route.",
    "completion": "Übe einen Abschnitt, bis drei Läufe ohne Routenfehler beendet sind."
  },
  "strangest-installed": {
    "title": "Öffne das seltsamste Cover",
    "objective": "Das installierte Spiel, dessen Cover dir am wenigsten verrät.",
    "completion": "Erreiche das erste klare Ziel oder höre nach der Mindestzeit sicher auf."
  },
  "untried-mechanic": {
    "title": "Probiere eine ungewohnte Aktion",
    "objective": "Ein Spiel, das um eine Aktion herum aufgebaut ist, die du selten genutzt hast.",
    "completion": "Verwende diese Aktion, um eine vollständige Aktivität abzuschließen."
  },
  "genre-hybrid": {
    "title": "Teste eine Genre-Kollision",
    "objective": "Ein Spiel, das zwei Kategorien vermischt, die scheinbar unvereinbar sind.",
    "completion": "Erreiche eine Aktivität, bei der beide Genres wichtig sind."
  },
  "unknown-developer": {
    "title": "Versuche es mit einem unbekannten Entwickler",
    "objective": "Ein Spiel von einem Studio oder Entwickler, das du noch nie gespielt hast.",
    "completion": "Beende die Eröffnungsaktivität oder höre nach der Mindestzeit sicher auf."
  },
  "physics-question": {
    "title": "Stelle der Physik eine Frage",
    "objective": "Ein Sandbox-, Puzzle-, Immersive-Sim- oder Konstruktionsspiel mit interagierenden Systemen.",
    "completion": "Teste eine Was-wäre-wenn-Idee und beobachte ein wiederholbares Ergebnis."
  },
  "unread-lore-object": {
    "title": "Lies ein übersehenes Objekt",
    "objective": "Ein Spiel mit Gegenstandsbeschreibungen, Archiven, Museen oder Umweltgeschichten.",
    "completion": "Ordne das Objekt einer Person, einem Ort oder einem Ereignis zu."
  },
  "npc-routine": {
    "title": "Befolge die Routine eines NPCs",
    "objective": "Ein Open-World-, Simulations-, Stealth- oder Rollenspiel mit geplanten Charakteren.",
    "completion": "Folge einem NPC, bis sich seine Route wiederholt oder eindeutig endet."
  },
  "alternate-camera": {
    "title": "Wechsle die Perspektive",
    "objective": "Ein bekanntes Spiel mit einer anderen Kamera, einem anderen Charakter oder einer anderen Steuerungsperspektive.",
    "completion": "Beende eine Aktivität aus dieser ungewohnten Perspektive."
  },
  "procedural-surprise": {
    "title": "Erschaffe eine neue Welt",
    "objective": "Ein Roguelike-, Strategie-, Survival- oder Sandbox-Spiel mit Zufallsgenerierung.",
    "completion": "Beende einen Run oder erreiche einen für den Seed einzigartigen Meilenstein."
  },
  "community-mod": {
    "title": "Probiere eine Spielervariante",
    "objective": "Ein bekanntes Spiel mit Mods, benutzerdefinierten Karten oder Community-Regelsätzen.",
    "completion": "Beende eine Aktivität, die sich anders anfühlt als das Basisspiel."
  },
  "accessibility-transform": {
    "title": "Verändere die Spielausgabe",
    "objective": "Ein bekanntes Spiel mit guten Zugänglichkeits- oder Schnittstellenoptionen.",
    "completion": "Verwende eine Audio-, Bild-, Steuerungs- oder Navigationsoption während einer Aktivität."
  },
  "language-switch": {
    "title": "Höre es in einer anderen Sprache",
    "objective": "Ein bekanntes Story-Spiel mit einer anderen gesprochenen oder geschriebenen Sprache.",
    "completion": "Beende eine bekannte Szene mit aktivierter Sprache."
  },
  "oldest-untouched": {
    "title": "Öffne dein ältestes ungespieltes Spiel",
    "objective": "Das am längsten im Besitz befindliche Spiel zeigt immer noch null Spielzeit an.",
    "completion": "Erreiche den ersten Speicherpunkt oder höre nach der Mindestzeit sicher auf."
  },
  "one-star-review-question": {
    "title": "Hinterfrage einen schlechten ersten Eindruck",
    "objective": "Ein Spiel, das du nach einer verwirrenden oder frustrierenden Eröffnung abgebrochen hast.",
    "completion": "Erreiche eine Spielmechanik oder Szene hinter der Stelle, an der du aufgehört hast."
  },
  "unusual-protagonist": {
    "title": "Spiele einen ungewöhnlichen Protagonisten",
    "objective": "Ein Spiel, das von jemandem geleitet wird, der anders ist als die üblichen Helden.",
    "completion": "Beende eine Aktivität und nutze dabei gezielt die besondere Perspektive dieser Figur."
  },
  "side-system": {
    "title": "Erkunde ein übersehenes Nebensystem",
    "objective": "Ein Spiel mit Angeln, Kochen, Wohnen, Karten, Fotos oder einem anderen umfangreichen Nebensystem.",
    "completion": "Schließe einen vollständigen Ablauf innerhalb dieses bisher übersehenen Systems ab."
  },
  "soundtrack-before-cover": {
    "title": "Wähle nach Gehör",
    "objective": "Drei installierte Spiele, deren Musik oder Ambiente du in der Vorschau ansehen kannst.",
    "completion": "Öffne das erste Spiel, dessen Klang dich überrascht, und beende eine Aktivität."
  },
  "forgotten-demo": {
    "title": "Kehre zu einem früheren Testspiel zurück",
    "objective": "Ein vollständiges Spiel, das du früher nur aus einer Demo oder einem Gratiswochenende kanntest.",
    "completion": "Spiele über den Abschnitt hinaus, den du aus der Demo kanntest."
  },
  "mechanic-without-tutorial": {
    "title": "Probiere die Regel zuerst aus",
    "objective": "Ein System-, Puzzle-, Strategie- oder Simulationsspiel mit erkennbaren Regeln.",
    "completion": "Lerne eine Regel durch Interaktion, bevor du die Erklärung liest."
  },
  "map-edge": {
    "title": "Erkunde abseits der Route",
    "objective": "Ein Open-World-Spiel mit einem erreichbaren Ort außerhalb des hervorgehobenen Pfades.",
    "completion": "Erreiche diesen Ort und bringe einen Screenshot zurück."
  },
  "object-history": {
    "title": "Frage, wer das hier platziert hat",
    "objective": "Eine detaillierte Spielwelt mit einem unerklärlichen Objekt oder einer unerklärten Struktur.",
    "completion": "Finde in der Nähe drei Hinweise auf seinen Zweck oder seine Geschichte."
  },
  "ruleset-random": {
    "title": "Tritt ein, bevor du die Regeln beherrschst",
    "objective": "Ein Spiel mit einem unbekannten Modus, Szenario oder Regelsatz.",
    "completion": "Beende eine Runde oder ein Szenario und erkläre danach die wichtigste Regel."
  },
  "opposite-dialogue": {
    "title": "Sage, was du sonst nie sagst",
    "objective": "Ein dialoglastiges Spiel mit Entscheidungen, die du normalerweise meidest.",
    "completion": "Triff eine aufrichtige Gegenentscheidung und akzeptiere deren Ergebnis."
  },
  "small-studio": {
    "title": "Probiere eine Mikrospielsammlung aus",
    "objective": "Ein Spiel, das aus kurzen Minispielen, Skizzen oder Experimenten besteht.",
    "completion": "Schließe fünf Mikrospiele oder ein komplettes Sammlungsset ab."
  },
  "historical-setting": {
    "title": "Betritt eine unbekannte Epoche",
    "objective": "Ein historisches Spiel, das in einer Zeit spielt, über die du wenig weißt.",
    "completion": "Beende ein Szenario und identifiziere ein zeitraumspezifisches Detail."
  },
  "future-rule": {
    "title": "Teste eine unmögliche Technologie",
    "objective": "Ein Science-Fiction-Spiel, das auf einer spekulativen Technologie basiert.",
    "completion": "Nutze diese Technologie, um ein vollständiges Problem zu lösen."
  },
  "hidden-ending-door": {
    "title": "Öffne einen alternativen Ausgang",
    "objective": "Ein abgeschlossenes Spiel mit einem erreichbaren Ende oder Zweig, der unsichtbar bleibt.",
    "completion": "Erreiche eine Szene oder ein Ergebnis, das für diesen Pfad einzigartig ist."
  },
  "player-made-level": {
    "title": "Probiere einen Entwicklerkommentar",
    "objective": "Ein bekanntes Spiel mit Kommentarspur, Museum oder Blick hinter die Kulissen.",
    "completion": "Beende einen Abschnitt, während du dir jeden verfügbaren Hinweis ansiehst."
  },
  "one-system-collision": {
    "title": "Lass zwei Systeme kollidieren",
    "objective": "Ein Sandbox-, immersives Simulations-, Strategie- oder Physikspiel.",
    "completion": "Erzeuge eine nützliche Interaktion, die das Spiel nie ausdrücklich von dir verlangt hat."
  },
  "curiosity-souvenir": {
    "title": "Erreiche ein sichtbares Wahrzeichen",
    "objective": "Ein Erkundungsspiel mit einem sichtbaren, aber unerreichten Ort.",
    "completion": "Erreiche es und erfasse die Route oder die endgültige Ansicht."
  },
  "curious-non-euclidean": {
    "title": "Betritt unmögliche Geometrie",
    "objective": "Ein Puzzle- oder Erkundungsspiel mit Falten, Schleifen oder Verschieben von Räumen.",
    "completion": "Löse einen Raum, in dem die gewöhnliche Geometrie versagt."
  },
  "curious-ecology-sim": {
    "title": "Beobachte ein lebendes System",
    "objective": "Eine Ökologie-, Kolonie-, Evolutions-, Aquarium- oder Wildtiersimulation.",
    "completion": "Ändere eine Bedingung und beobachte einen vollständigen Reaktionszyklus."
  },
  "curious-programming-game": {
    "title": "Programmiere eine Lösung",
    "objective": "Ein Programmier-, Automatisierungs-, Logik- oder Schaltungsbauspiel.",
    "completion": "Erstelle eine funktionierende Lösung und lass das Programm ohne manuelle Korrektur durchlaufen."
  },
  "curious-fmv-game": {
    "title": "Versuche es mit einem interaktiven Film",
    "objective": "Ein FMV-, Live-Action- oder filmisches, entscheidungsgesteuertes Spiel.",
    "completion": "Beende eine Episode oder triff eine unumkehrbare Entscheidung."
  },
  "curious-text-experiment": {
    "title": "Spiele nur mit Worten",
    "objective": "Ein Textabenteuer, ein Parserspiel, eine interaktive Fiktion oder ein Worträtsel.",
    "completion": "Löse eine Szene, einen Raum oder ein komplettes Rätsel."
  },
  "curious-obscure-sport": {
    "title": "Lerne eine unbekannte Sportart",
    "objective": "Ein Sportspiel mit Regeln oder einem Ereignis, das du kaum kennst.",
    "completion": "Beende eine Veranstaltung und erkläre eine Regel, die du gelernt hast."
  },
  "bed-friendly": {
    "title": "Spiele von dort, wo du bist",
    "objective": "Ein Spiel, das mit deinem aktuellen Bildschirm, Controller und deiner Position komfortabel ist.",
    "completion": "Beende eine kurze Aktivität, ohne dein Setup zu ändern."
  },
  "turns-wait": {
    "title": "Lass jede Runde warten",
    "objective": "Ein rundenbasiertes Taktik-, Karten-, Brett-, Puzzle- oder RPG-Spiel.",
    "completion": "Beende eine Begegnung, ein Match oder ein Rätsel – oder höre nach der Mindestzeit auf."
  },
  "story-mode": {
    "title": "Lass die Geschichte wirken",
    "objective": "Ein Erzählspiel mit geringem Ausführungsdruck oder einem Story-Modus.",
    "completion": "Erreiche eine vollständige Szene, Konversation oder einen Kapitelumbruch."
  },
  "auto-support": {
    "title": "Nutze die Assists",
    "objective": "Ein Spiel mit Automatisierung, Assists, automatischem Kampf oder vereinfachter Steuerung.",
    "completion": "Beende eine Aktivität mit aktivierter hilfreicher Option."
  },
  "one-hand-loop": {
    "title": "Spiele mit minimaler Eingabe",
    "objective": "Ein Spiel, das bequem mit einer Hand oder wenigen Eingaben gesteuert werden kann.",
    "completion": "Beende eine Runde, Etappe oder einen Tag – oder höre nach der Mindestzeit auf."
  },
  "visual-novel-scene": {
    "title": "Lies eine Visual-Novel-Szene",
    "objective": "Ein visueller Roman, eine interaktive Geschichte oder ein dialoglastiges Abenteuer.",
    "completion": "Beende eine Szene, ohne Text oder Stimmen zu überspringen."
  },
  "easy-puzzle": {
    "title": "Löse ein gemütliches Rätsel",
    "objective": "Ein Puzzlespiel ohne Uhr, Feinde oder Ausführungsdruck.",
    "completion": "Löse ein komplettes Puzzle oder Brett."
  },
  "gentle-management": {
    "title": "Betreue ein kleines System",
    "objective": "Ein Landwirtschafts-, Lebens-, Park-, Laden- oder Managementspiel.",
    "completion": "Beende eine ruhige Routine, ohne den Vorgang zu verlängern."
  },
  "walking-only": {
    "title": "Gehe die ganze Session zu Fuß",
    "objective": "Ein Erkundungs- oder Open-World-Spiel mit sicherer, entspannter Reise.",
    "completion": "Gehe zwischen zwei Orientierungspunkten hin und her, ohne zu sprinten oder schnell zu reisen."
  },
  "familiar-save": {
    "title": "Öffne deinen vertrautesten Spielstand",
    "objective": "Dein bequemster aktueller Spielstand und Charakter.",
    "completion": "Beende eine bekannte Aufgabe und speichere an einem ruhigen Ort."
  },
  "photo-stroll": {
    "title": "Mache ein ruhiges Foto",
    "objective": "Ein Spiel, bei dem Gehen und Schauen die ganze Aktivität sein kann.",
    "completion": "Finde eine ansprechende Ansicht und behalte einen Screenshot."
  },
  "music-and-menu": {
    "title": "Bleibe für den Soundtrack",
    "objective": "Ein bekanntes Spiel, dessen Musik eine kurze Sitzung tragen kann.",
    "completion": "Beende eine Aktivität, während du von Anfang bis Ende zuhörst."
  },
  "no-failure-mode": {
    "title": "Spiele, ohne etwas zu verlieren",
    "objective": "Ein Kreativ-, Erkundungs-, Übungs- oder Gelegenheitsmodus mit geringen Fehlerkosten.",
    "completion": "Beende eine Aktivität und akzeptiere das erste Ergebnis, ohne es direkt verbessern zu wollen."
  },
  "one-day-sim": {
    "title": "Spiele einen Tag im Spiel",
    "objective": "Eine Landwirtschafts-, Lebens-, Laden- oder Gesellschaftssimulation mit täglichen Zyklen.",
    "completion": "Beende genau einen Spieltag und speichere ihn vor dem Schlafengehen."
  },
  "short-episode": {
    "title": "Schließe eine Story-Episode ab",
    "objective": "Ein Spiel, das in kurze Episoden, Fälle, Kapitel oder Szenen unterteilt ist.",
    "completion": "Beende genau eine komplette Story-Einheit."
  },
  "cozy-craft": {
    "title": "Mache eine nützliche Sache",
    "objective": "Ein Bastel-, Koch-, Landwirtschafts- oder Dekorationsspiel mit einfachen Rezepten.",
    "completion": "Sammle Materialien in der Nähe, stelle einen Gegenstand her und verwende oder platziere ihn."
  },
  "home-base-only": {
    "title": "Führe eine reine Menüaufgabe aus",
    "objective": "Ein RPG- oder Strategiespielstand mit einer klaren Aufgabe für Team, Upgrades oder Kodex.",
    "completion": "Beende diese Aufgabe, ohne eine Mission zu starten."
  },
  "ambient-company": {
    "title": "Lass dich von einer Welt begleiten",
    "objective": "Ein ruhiges Simulations-, Idle-, Fahr- oder Open-World-Spiel.",
    "completion": "Beende eine sanfte Aktivität, während du die Welt um dich herum weiterlaufen lässt."
  },
  "one-conversation": {
    "title": "Sprich mit einer Person",
    "objective": "Ein Erzähl-, Rollenspiel- oder Lebenssimulationsspiel mit bekannten Charakteren.",
    "completion": "Bleibe bei einem Charakter, bis das aktuelle Gespräch beendet ist."
  },
  "slow-vehicle": {
    "title": "Lass dich von einem Fahrzeug tragen",
    "objective": "Ein LKW-, Zug-, Schiffs-, Flug- oder entspanntes Fahrspiel.",
    "completion": "Beende eine Strecke, ohne zu schnell zu fahren, Rennen zu fahren oder schnell zu reisen."
  },
  "known-puzzle-type": {
    "title": "Verwende eine vertraute Rätselsprache",
    "objective": "Ein Puzzlespiel, dessen Regeln du bereits verstehst.",
    "completion": "Löse ein Brett, einen Raum, ein Gitter oder ein kurzes Set."
  },
  "supportive-role": {
    "title": "Hilf, ohne zu führen",
    "objective": "Ein Koop- oder Multiplayer-Spiel mit einer klaren Unterstützungsrolle.",
    "completion": "Schließe eine Runde oder Mission als Heiler, Baumeister, Transporter oder Verteidiger ab."
  },
  "collect-nearby": {
    "title": "Sammle nur, was in der Nähe ist",
    "objective": "Ein aktiver Spielstand mit einigen Sammelobjekten rund um deinen aktuellen Standort.",
    "completion": "Sammle drei Gegenstände in der Nähe, ohne in eine andere Region zu gelangen."
  },
  "default-everything": {
    "title": "Behalte alle aktuellen Einstellungen bei",
    "objective": "Ein bekanntes Spiel, bereits konfiguriert und bereit.",
    "completion": "Beende die nächstgelegene Aktivität, ohne Einstellungen, Ausrüstung oder Charakter zu ändern."
  },
  "replay-favorite-level": {
    "title": "Wiederhole ein einfaches Level",
    "objective": "Ein vertrautes Level oder ein Abschnitt, dessen Aufbau du noch kennst.",
    "completion": "Schließe es einmal ab, ohne Geheimnissen oder einer besseren Punktzahl nachzujagen."
  },
  "gentle-weather": {
    "title": "Setz dich an einen schönen Ort",
    "objective": "Eine vertraute Welt mit einem sicheren Aussichtspunkt, Ufer, Garten oder Lager.",
    "completion": "Erreiche es und bleibe durch einen kompletten Musik- oder Wetterwechsel hindurch."
  },
  "watch-systems": {
    "title": "Beobachte einen vollständigen Systemzyklus",
    "objective": "Ein Automatisierungs-, Simulations-, Kolonie- oder Managementspiel.",
    "completion": "Beobachte einen vollständigen Zyklus und nimm nur eine Einstellung vor."
  },
  "old-tutorial-area": {
    "title": "Kehre in ein vertrautes Startgebiet zurück",
    "objective": "Ein bekanntes Spiel, dessen Lernzone oder erste Stadt sich sicher anfühlt.",
    "completion": "Beende eine Aktivität in der Nähe, ohne diesen Bereich zu verlassen."
  },
  "low-reading": {
    "title": "Folge Formen statt Text",
    "objective": "Ein Plattform-, Rhythmus-, Puzzle- oder Erkundungsspiel mit wenig Lektüre.",
    "completion": "Beende ein Level oder eine Szene mithilfe von visuellen und Bewegungshinweisen."
  },
  "energy-honest-exit": {
    "title": "Lass genug auch genug sein",
    "objective": "Ein vertrautes Spiel mit einem nahen sicheren Haltepunkt.",
    "completion": "Spiele bis zu diesem Punkt, speichere und höre auf, ohne das Ziel zu verlängern."
  },
  "low-energy-idle-check-in": {
    "title": "Schau kurz in ein Idle Game",
    "objective": "Ein Idle Game, inkrementelles Spiel oder eine Aquarium-, Garten- oder Hintergrundsimulation.",
    "completion": "Sammle den Fortschritt ein, führe ein Upgrade durch und lass das Spiel weiterlaufen oder speichere."
  },
  "low-energy-hidden-object": {
    "title": "Schließe eine Wimmelbildszene ab",
    "objective": "Ein Wimmelbild-, Differenz-Finde- oder ruhiges Beobachtungsspiel.",
    "completion": "Finde jedes benötigte Objekt in einer Szene."
  },
  "low-energy-solitaire": {
    "title": "Spiele eine Runde Solitaire",
    "objective": "Ein Solitär-, Mahjong-, Kachel-, Karten- oder digitales Tischspiel.",
    "completion": "Beende eine Runde, ein Brett oder ein Match unabhängig vom Ergebnis."
  },
  "low-energy-auto-battler": {
    "title": "Sieh einem Auto-Battle zu",
    "objective": "Ein Autobattler-, Taktik-, Management- oder Teambuilding-Spiel.",
    "completion": "Lege eine Aufstellung fest und beende damit eine Runde, ohne mitten im Kampf etwas zu ändern."
  },
  "low-energy-walking-story": {
    "title": "Schließe ein Walking-Story-Kapitel ab",
    "objective": "Ein Walking-Simulator oder narratives Erkundungsspiel mit wenig Gefahr.",
    "completion": "Erreiche das nächste Kapitel, den nächsten Ortswechsel oder die nächste Schlussszene."
  },
  "low-energy-jrpg-turns": {
    "title": "Schließe eine rundenbasierte Begegnung ab",
    "objective": "Ein rundenbasierter JRPG- oder RPG-Spielstand mit einer Begegnung in der Nähe.",
    "completion": "Beende einen Kampf und speichere am nächsten sicheren Punkt."
  }
} as const satisfies Record<string, Omit<QuestTranslation, "name">>;

export const germanQuestTranslations = Object.fromEntries(
  Object.entries(germanQuestCopy).map(([id, copy]) => {
    const name = germanQuestNames[id as keyof typeof germanQuestNames];
    if (!name) throw new Error(`Missing German quest name: ${id}`);
    return [id, { name, ...copy }];
  }),
) as Record<string, QuestTranslation>;
