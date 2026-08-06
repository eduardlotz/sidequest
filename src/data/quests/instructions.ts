export type QuestInstruction = {
  objective: string;
  completion: string;
};

export type QuestPrompt = QuestInstruction & {
  title: string;
};

export function buildQuestPrompt(instruction: QuestInstruction): QuestPrompt {
  const sentences = instruction.objective.match(/[^.!?]+[.!?]+/g);
  if (!sentences || sentences.length !== 2) {
    throw new Error(
      `Quest objective must contain one setting and one action: ${instruction.objective}`,
    );
  }

  return {
    title: sentences[1].trim().replace(/[.!?]+$/, ""),
    objective: sentences[0].trim(),
    completion: instruction.completion,
  };
}

type LocalizedQuestInstruction = {
  en: QuestInstruction;
  de: QuestInstruction;
};

export const QUEST_INSTRUCTIONS: Record<
  string,
  LocalizedQuestInstruction
> = {
  "relax-soft-landing": {
    en: {
      objective: "Think of the game you loved most as a child or teenager. Start the part you remember best.",
      completion: "Reach the next checkpoint you still recognize.",
    },
    de: {
      objective: "Denk an das Spiel, das du als Kind oder Teenager am meisten geliebt hast. Starte den Abschnitt, an den du dich am besten erinnerst.",
      completion: "Erreiche den nächsten Kontrollpunkt, den du noch wiedererkennst.",
    },
  },
  "relax-scenic-route": {
    en: {
      objective: "Open a familiar game whose controls still live in your hands. Continue the save that needs the least explanation.",
      completion: "Reach its next clear stopping point.",
    },
    de: {
      objective: "Öffne ein vertrautes Spiel, dessen Steuerung noch in deinen Händen steckt. Setze den Spielstand fort, der keine Erklärung braucht.",
      completion: "Erreiche den nächsten klaren Haltepunkt.",
    },
  },
  "relax-care-shift": {
    en: {
      objective: "Open a game whose soundtrack you know immediately. Let one full track play while you stay somewhere calm.",
      completion: "Listen to the track from start to finish.",
    },
    de: {
      objective: "Öffne ein Spiel, dessen Soundtrack du sofort erkennst. Bleib an einem ruhigen Ort und lass ein ganzes Stück laufen.",
      completion: "Höre das Stück von Anfang bis Ende.",
    },
  },
  "relax-one-good-loop": {
    en: {
      objective: "Think of a place in a game that feels like home. Travel there and do the most familiar activity nearby.",
      completion: "Finish that activity and stop somewhere that still feels like home.",
    },
    de: {
      objective: "Denk an einen Ort in einem Spiel, der sich wie Zuhause anfühlt. Reise dorthin und erledige die vertrauteste Aktivität in der Nähe.",
      completion: "Beende die Aktivität und halte an einem vertrauten Ort an.",
    },
  },
  "relax-small-wonder": {
    en: {
      objective: "Pick a former favorite you have not opened in a long time. Resume it without trying to catch up on everything.",
      completion: "Reach one new checkpoint.",
    },
    de: {
      objective: "Nimm einen früheren Favoriten, den du lange nicht geöffnet hast. Spiele weiter, ohne sofort alles nachholen zu wollen.",
      completion: "Erreiche einen neuen Kontrollpunkt.",
    },
  },
  "relax-three-loose-ends": {
    en: {
      objective: "Choose the entry you revisit least from a series you love. Continue its nearest available save.",
      completion: "Finish one section and save at its closing point.",
    },
    de: {
      objective: "Wähle den Teil einer Lieblingsreihe, zu dem du am seltensten zurückkehrst. Setze seinen nächsten verfügbaren Spielstand fort.",
      completion: "Beende einen Abschnitt.",
    },
  },
  "relax-next-save": {
    en: {
      objective: "Open the save whose next step you already know. Do that step before looking at anything else.",
      completion: "Reach the next save point.",
    },
    de: {
      objective: "Öffne den Spielstand, dessen nächsten Schritt du schon kennst. Erledige ihn, bevor du dir etwas anderes ansiehst.",
      completion: "Erreiche den nächsten Speicherpunkt.",
    },
  },
  "relax-gentlest-mode": {
    en: {
      objective: "Pick a game that lets you lower the pressure. Turn on its easiest useful setting and start one level.",
      completion: "Reach the level's next checkpoint.",
    },
    de: {
      objective: "Nimm ein Spiel, bei dem du den Druck senken kannst. Aktiviere die einfachste sinnvolle Einstellung und starte ein Level.",
      completion: "Erreiche mit der einfacheren Einstellung den nächsten Kontrollpunkt.",
    },
  },
  "relax-pause-anytime": {
    en: {
      objective: "Choose a solo game you can pause at any moment. Start the nearest self-contained activity.",
      completion: "Finish it or pause safely.",
    },
    de: {
      objective: "Wähle ein Solospiel, das du jederzeit pausieren kannst. Starte die nächste überschaubare Aktivität.",
      completion: "Beende sie oder pausiere an einem sicheren Punkt.",
    },
  },
  "relax-turn-by-turn": {
    en: {
      objective: "Open a turn-based game where nothing moves until you decide. Start one battle and take every turn without rushing.",
      completion: "Finish the battle with no rushed turns.",
    },
    de: {
      objective: "Öffne ein rundenbasiertes Spiel, in dem ohne deine Entscheidung nichts passiert. Starte einen Kampf und nimm dir für jeden Zug Zeit.",
      completion: "Beende den Kampf ohne einen überstürzten Zug.",
    },
  },
  "relax-easy-victory": {
    en: {
      objective: "Return to a challenge you can beat comfortably. Win that familiar challenge cleanly without chasing a record.",
      completion: "Earn one clean win.",
    },
    de: {
      objective: "Kehre zu einer Herausforderung zurück, die du sicher schaffst. Gewinne diese vertraute Herausforderung sauber, ohne einem Rekord nachzujagen.",
      completion: "Hol einen Sieg.",
    },
  },
  "relax-quietest-game": {
    en: {
      objective: "Choose the calmest game you own. Do the least urgent thing available and ignore every optional demand.",
      completion: "Reach a safe stopping point.",
    },
    de: {
      objective: "Wähle das ruhigste Spiel, das du besitzt. Tu das Unaufgeregteste, was gerade möglich ist, und ignoriere alle optionalen Forderungen.",
      completion: "Erreiche einen sicheren Haltepunkt.",
    },
  },
  "relax-tend-one-thing": {
    en: {
      objective: "Think of a game where something depends on your care. Pick the first thing already waiting and look after it.",
      completion: "Leave it visibly better.",
    },
    de: {
      objective: "Denk an ein Spiel, in dem etwas deine Fürsorge braucht. Kümmere dich um das Erste, das bereits auf dich wartet.",
      completion: "Hinterlasse es sichtbar besser.",
    },
  },
  "relax-put-things-right": {
    en: {
      objective: "Open a game where you can clean up a messy space. Choose one room and put it in order.",
      completion: "Finish that room and work on it.",
    },
    de: {
      objective: "Öffne ein Spiel, in dem du einen unordentlichen Ort aufräumen kannst. Nimm dir genau einen Raum vor.",
      completion: "Bringe ihn zu Ende daran.",
    },
  },
  "relax-slow-journey": {
    en: {
      objective: "Pick a game with a vehicle you enjoy controlling. Travel from your current position to one visible landmark without hurrying.",
      completion: "Arrive safely and stop the vehicle there.",
    },
    de: {
      objective: "Wähle ein Spiel mit einem Fahrzeug, das du gern steuerst. Reise ohne Eile von deinem aktuellen Ort zu einem sichtbaren Ziel.",
      completion: "Komm sicher an und halte das Fahrzeug dort an.",
    },
  },
  "relax-story-carries-you": {
    en: {
      objective: "Choose a gentle story game with little pressure. Continue the current scene and let the story choose your pace.",
      completion: "Reach the next scene break.",
    },
    de: {
      objective: "Wähle ein ruhiges Story-Spiel mit wenig Druck. Setze die aktuelle Szene fort und lass die Geschichte das Tempo bestimmen.",
      completion: "Erreiche den nächsten Szenenwechsel.",
    },
  },
  "relax-one-puzzle": {
    en: {
      objective: "Open a puzzle game without a running clock. Choose one unsolved puzzle and stay with only that problem.",
      completion: "Solve it or leave one promising move ready.",
    },
    de: {
      objective: "Öffne ein Rätselspiel ohne laufende Uhr. Wähle ein ungelöstes Rätsel und bleib nur bei diesem Problem.",
      completion: "Löse es oder hinterlasse einen vielversprechenden nächsten Zug.",
    },
  },
  "relax-friendly-face": {
    en: {
      objective: "Think of a game character whose company you enjoy. Find them and spend the session nearby.",
      completion: "Finish one interaction with them.",
    },
    de: {
      objective: "Denk an eine Spielfigur, deren Gesellschaft du magst. Finde sie und verbringe die Session in ihrer Nähe.",
      completion: "Beende eine Interaktion mit ihr.",
    },
  },
  "relax-solo-room": {
    en: {
      objective: "Choose a game where nobody else depends on you. Start one private activity on your own terms.",
      completion: "Finish it or stop safely.",
    },
    de: {
      objective: "Wähle ein Spiel, in dem niemand von dir abhängt. Starte eine private Aktivität zu deinen Bedingungen.",
      completion: "Beende sie oder höre sicher auf.",
    },
  },
  "relax-forgiving-restart": {
    en: {
      objective: "Open a game that lets you recover quickly from mistakes. Start one section and keep going after every failure.",
      completion: "Reach its next result.",
    },
    de: {
      objective: "Öffne ein Spiel, das Fehler schnell verzeiht. Starte einen Abschnitt und spiele nach jedem Scheitern einfach weiter.",
      completion: "Erreiche das nächste Ergebnis.",
    },
  },
  "relax-soft-colors": {
    en: {
      objective: "Choose the game whose colors feel gentlest today. Enter the area that best matches that palette.",
      completion: "Finish one activity there.",
    },
    de: {
      objective: "Wähle das Spiel, dessen Farben sich heute am sanftesten anfühlen. Geh in den Bereich, der am besten zu dieser Palette passt.",
      completion: "Beende dort eine Aktivität.",
    },
  },
  "relax-good-weather": {
    en: {
      objective: "Open a world with weather you would enjoy right now. Travel until you find that sky and stay in the area.",
      completion: "Finish one nearby activity.",
    },
    de: {
      objective: "Öffne eine Spielwelt mit einem Wetter, das dir gerade guttun würde. Reise, bis du diesen Himmel findest, und bleib dort.",
      completion: "Beende eine Aktivität in der Nähe.",
    },
  },
  "relax-small-routine": {
    en: {
      objective: "Think of a game with a short routine you know by heart. Perform that routine once without adding extra chores.",
      completion: "Complete the loop from start to finish.",
    },
    de: {
      objective: "Denk an ein Spiel mit einer kurzen Routine, die du auswendig kennst. Führe sie einmal aus, ohne neue Aufgaben anzuhängen.",
      completion: "Schließe den Ablauf von Anfang bis Ende ab.",
    },
  },
  "relax-watch-and-wander": {
    en: {
      objective: "Open a world that rewards careful looking. Wander without a destination and notice three details you have missed before.",
      completion: "Find all three and explore.",
    },
    de: {
      objective: "Öffne eine Spielwelt, die genaues Hinsehen belohnt. Laufe ohne Ziel umher und entdecke drei Details, die dir bisher entgangen sind.",
      completion: "Finde alle drei und erkunde.",
    },
  },
  "relax-one-button-deeper": {
    en: {
      objective: "Pick a game built around one main input. Start one level and focus on its rhythm instead of perfect results.",
      completion: "Reach the end of the level or its next checkpoint.",
    },
    de: {
      objective: "Wähle ein Spiel, das auf einer einzigen Hauptaktion aufbaut. Starte ein Level und achte auf den Rhythmus statt auf Perfektion.",
      completion: "Erreiche den nächsten Kontrollpunkt des Levels.",
    },
  },
  "relax-safe-home-base": {
    en: {
      objective: "Open a save with a safe home base. Stay there and improve the one thing that currently bothers you most.",
      completion: "Finish that improvement.",
    },
    de: {
      objective: "Öffne einen Spielstand mit einer sicheren Heimatbasis. Bleib dort und verbessere genau das, was dich gerade am meisten stört.",
      completion: "Schließe diese Verbesserung ab.",
    },
  },
  "relax-low-volume": {
    en: {
      objective: "Choose a game you can follow quietly. Lower the volume, turn on captions if needed, and start one activity.",
      completion: "Reach the activity's ending without raising the volume.",
    },
    de: {
      objective: "Wähle ein Spiel, dem du leise folgen kannst. Senke die Lautstärke, aktiviere bei Bedarf Untertitel und starte eine Aktivität.",
      completion: "Erreiche ihr Ende, ohne die Lautstärke zu erhöhen.",
    },
  },
  "relax-kindest-save-file": {
    en: {
      objective: "Open the save with the fewest urgent problems. Make one small improvement and ignore every larger project.",
      completion: "Save somewhere safe.",
    },
    de: {
      objective: "Öffne den Spielstand mit den wenigsten dringenden Problemen. Verbessere eine Kleinigkeit und ignoriere jedes größere Projekt.",
      completion: "Speichere an einem sicheren Ort.",
    },
  },
  "relax-comforting-repetition": {
    en: {
      objective: "Think of an activity you already love repeating. Complete that favorite loop once without chasing a score.",
      completion: "Complete one repetition and stop before it becomes a grind.",
    },
    de: {
      objective: "Denk an eine Spielaktivität, die du gern wiederholst. Schließe diese Lieblingsschleife einmal ab, ohne einer Wertung nachzujagen.",
      completion: "Schließe eine Wiederholung ab.",
    },
  },
  "relax-clean-exit": {
    en: {
      objective: "Choose a game with a clearly defined chapter. Start exactly one chapter and do not begin anything else.",
      completion: "Finish it and stop at the closing screen.",
    },
    de: {
      objective: "Wähle ein Spiel mit einem klar abgegrenzten Kapitel. Starte genau dieses Kapitel und beginne nichts anderes.",
      completion: "Beende es und höre am Abschlussbildschirm auf.",
    },
  },
  "relax-cozy-corner": {
    en: {
      objective: "Open a game where you can decorate a small space. Turn one unused corner into somewhere you would want to sit.",
      completion: "Finish that corner.",
    },
    de: {
      objective: "Öffne ein Spiel, in dem du einen kleinen Bereich gestalten kannst. Mach aus einer ungenutzten Ecke einen Ort, an dem du gern sitzen würdest.",
      completion: "Stelle diese Ecke fertig.",
    },
  },
  "relax-fishing-break": {
    en: {
      objective: "Think of one game where you can fish. Go to the nearest fishing spot and cast your line.",
      completion: "Catch three fish and keep the one you like best.",
    },
    de: {
      objective: "Denk an ein Spiel, in dem du angeln kannst. Geh zum nächsten Angelplatz und wirf die Leine aus.",
      completion: "Fange drei Fische dort.",
    },
  },
  "relax-quiet-drive": {
    en: {
      objective: "Open a game with a road you enjoy driving. Choose one destination and take the unhurried route there.",
      completion: "Arrive without racing.",
    },
    de: {
      objective: "Öffne ein Spiel mit einer Straße, auf der du gern fährst. Wähle ein Ziel und nimm den entspannten Weg dorthin.",
      completion: "Komm ohne Rennen an.",
    },
  },
  "relax-gentle-platformer": {
    en: {
      objective: "Choose a platform game with forgiving checkpoints. Start one level and let every failed jump be just another try.",
      completion: "Reach the level's next checkpoint.",
    },
    de: {
      objective: "Wähle ein Plattformspiel mit großzügigen Kontrollpunkten. Starte ein Level und behandle jeden Fehlversuch nur als neuen Anlauf.",
      completion: "Erreiche den nächsten Kontrollpunkt des Levels.",
    },
  },
  "relax-solo-tabletop": {
    en: {
      objective: "Open a digital tabletop game you can play alone. Deal one game and accept the first setup you receive.",
      completion: "Play it to the result.",
    },
    de: {
      objective: "Öffne ein digitales Brett- oder Kartenspiel, das du allein spielen kannst. Starte eine Partie und akzeptiere die erste Ausgangslage.",
      completion: "Spiele sie bis zum Ergebnis.",
    },
  },
  "relax-space-drift": {
    en: {
      objective: "Think of a game that lets you travel peacefully through space. Set course for the nearest station.",
      completion: "Dock safely at the station you chose.",
    },
    de: {
      objective: "Denk an ein Spiel, in dem du friedlich durchs All reisen kannst. Setze Kurs auf die nächste Station.",
      completion: "Docke sicher an der gewählten Station an.",
    },
  },
  "explore-wrong-turn": {
    en: {
      objective: "Look at the first visible row of installed games and count to the third one. Launch the third installed game without comparing alternatives.",
      completion: "Reach its first clear stopping point.",
    },
    de: {
      objective: "Schau auf die erste sichtbare Reihe deiner installierten Spiele und zähle bis zum dritten. Starte das dritte installierte Spiel, ohne Alternativen zu vergleichen.",
      completion: "Erreiche den ersten klaren Haltepunkt.",
    },
  },
  "explore-follow-the-signal": {
    en: {
      objective: "Think of a game set beyond Earth. Travel to a place you have not visited in that world.",
      completion: "Finish one activity there.",
    },
    de: {
      objective: "Denk an ein Spiel, das jenseits der Erde spielt. Reise zu einem Ort, den du in dieser Welt noch nicht besucht hast.",
      completion: "Beende dort eine Aktivität.",
    },
  },
  "explore-edge-of-known": {
    en: {
      objective: "Choose a fantasy world that still has an unknown place on its map. Set out for that place directly.",
      completion: "Reach a named landmark.",
    },
    de: {
      objective: "Wähle eine Fantasywelt mit einem Ort auf der Karte, den du noch nicht kennst. Brich direkt dorthin auf.",
      completion: "Erreiche einen benannten Orientierungspunkt.",
    },
  },
  "explore-mechanic-safari": {
    en: {
      objective: "Open a game with a neon-lit city. Cross one district on foot and pay attention to street-level details.",
      completion: "Finish one local activity.",
    },
    de: {
      objective: "Öffne ein Spiel mit einer neonbeleuchteten Stadt. Durchquere ein Viertel zu Fuß und achte auf die Details der Straße.",
      completion: "Beende eine Aktivität vor Ort.",
    },
  },
  "explore-landmark-navigation": {
    en: {
      objective: "Choose a game with open wilderness. Leave your shelter and head toward one natural landmark you can already see.",
      completion: "Reach it and return safely.",
    },
    de: {
      objective: "Wähle ein Spiel mit offener Wildnis. Verlasse deinen Unterschlupf und geh zu einem natürlichen Orientierungspunkt, den du schon sehen kannst.",
      completion: "Erreiche ihn und kehre sicher zurück.",
    },
  },
  "explore-behind-the-obvious": {
    en: {
      objective: "Think of a game with a desert you have not crossed. Pick a landmark on the far side and travel toward it.",
      completion: "Reach shelter again.",
    },
    de: {
      objective: "Denk an ein Spiel mit einer Wüste, die du noch nicht durchquert hast. Wähle ein Ziel auf der anderen Seite und reise dorthin.",
      completion: "Erreiche wieder einen sicheren Ort.",
    },
  },
  "explore-below-surface": {
    en: {
      objective: "Open a game that lets you dive underwater. Find one submerged landmark you have not inspected before.",
      completion: "Return to air or safety.",
    },
    de: {
      objective: "Öffne ein Spiel, in dem du unter Wasser tauchen kannst. Finde einen versunkenen Ort, den du bisher nicht untersucht hast.",
      completion: "Kehre zu Luft oder Sicherheit zurück.",
    },
  },
  "explore-world-underfoot": {
    en: {
      objective: "Choose a game with an underground area still hidden from you. Enter the hidden underground area and keep a clear route back.",
      completion: "Discover one new chamber.",
    },
    de: {
      objective: "Wähle ein Spiel mit einem unterirdischen Bereich, den du noch nicht kennst. Betritt den verborgenen Untergrund und halte den Rückweg frei.",
      completion: "Entdecke eine neue Kammer.",
    },
  },
  "explore-borrowed-body": {
    en: {
      objective: "Think of a game where you play as an animal. Use the way that animal moves to complete one task.",
      completion: "Finish the task.",
    },
    de: {
      objective: "Denk an ein Spiel, in dem du ein Tier spielst. Nutze seine besondere Fortbewegung, um eine Aufgabe zu erledigen.",
      completion: "Beende die Aufgabe.",
    },
  },
  "explore-other-camera": {
    en: {
      objective: "Open a game played from above. Direct the whole visible space instead of following a single character closely.",
      completion: "Finish one scenario.",
    },
    de: {
      objective: "Öffne ein Spiel aus der Vogelperspektive. Steuere den ganzen sichtbaren Bereich, statt nur einer Figur zu folgen.",
      completion: "Beende ein Szenario.",
    },
  },
  "explore-genre-detour": {
    en: {
      objective: "Open the genre in your library you usually scroll past. Pick its first installed game and start immediately.",
      completion: "Reach one complete result.",
    },
    de: {
      objective: "Öffne das Genre in deiner Bibliothek, an dem du sonst vorbeiscrollst. Nimm das erste installierte Spiel und starte sofort.",
      completion: "Erreiche ein endgültiges Ergebnis und akzeptiere es.",
    },
  },
  "explore-physical-rule": {
    en: {
      objective: "Choose a game controlled in a way that feels unusual to you. Start the activity built most clearly around that input.",
      completion: "Use the input successfully to clear one obstacle.",
    },
    de: {
      objective: "Wähle ein Spiel mit einer Steuerung, die sich für dich ungewöhnlich anfühlt. Starte die Aktivität, die diese Eingabe am deutlichsten nutzt.",
      completion: "Überwinde mit der Eingabe erfolgreich ein Hindernis.",
    },
  },
  "explore-follow-clue": {
    en: {
      objective: "Open a mystery game with an unresolved clue. Follow only that clue and inspect the evidence connected to it.",
      completion: "Resolve it or write one solid theory.",
    },
    de: {
      objective: "Öffne ein Detektivspiel mit einem ungelösten Hinweis. Verfolge nur diesen Hinweis und untersuche die zugehörigen Beweise.",
      completion: "Löse ihn oder formuliere eine belastbare Theorie.",
    },
  },
  "explore-command-view": {
    en: {
      objective: "Choose a game where you command a whole team at once. Start one scenario and give every unit a clear job.",
      completion: "Finish the scenario.",
    },
    de: {
      objective: "Wähle ein Spiel, in dem du ein ganzes Team gleichzeitig befehligst. Starte ein Szenario und gib jeder Einheit eine klare Aufgabe.",
      completion: "Beende das Szenario.",
    },
  },
  "explore-play-by-ear": {
    en: {
      objective: "Open a game where sound can guide you. Turn your attention away from markers and follow one audible cue.",
      completion: "Let that cue lead you to a result.",
    },
    de: {
      objective: "Öffne ein Spiel, in dem Geräusche dich führen können. Ignoriere Marker und folge einem hörbaren Hinweis.",
      completion: "Lass dich von ihm zu einem Ergebnis führen.",
    },
  },
  "explore-movement-language": {
    en: {
      objective: "Think of a game whose movement still feels unfamiliar. Cross one area using its signature move on purpose.",
      completion: "Reach the other side.",
    },
    de: {
      objective: "Denk an ein Spiel, dessen Fortbewegung sich noch ungewohnt anfühlt. Durchquere einen Bereich bewusst mit seiner wichtigsten Bewegung.",
      completion: "Erreiche die andere Seite.",
    },
  },
  "explore-words-have-weight": {
    en: {
      objective: "Choose a game where a conversation can change what happens next. Enter one dialogue and answer by instinct.",
      completion: "Accept the outcome of play.",
    },
    de: {
      objective: "Wähle ein Spiel, in dem ein Gespräch den weiteren Verlauf verändert. Geh in einen Dialog und antworte aus dem Bauch heraus.",
      completion: "Akzeptiere das Ergebnis Spielzeit.",
    },
  },
  "explore-small-world-big-idea": {
    en: {
      objective: "Open a short game with a premise that sounds strange in one sentence. Play until its central idea becomes clear.",
      completion: "Reach the moment when you can explain the game's strange idea.",
    },
    de: {
      objective: "Öffne ein kurzes Spiel mit einer Prämisse, die in einem Satz seltsam klingt. Spiele, bis seine zentrale Idee verständlich wird.",
      completion: "Erreiche den Moment, in dem du die seltsame Spielidee erklären kannst.",
    },
  },
  "explore-never-same-twice": {
    en: {
      objective: "Start a game that generates a different world each time. Accept the first seed and adapt to what it gives you.",
      completion: "Finish one run.",
    },
    de: {
      objective: "Starte ein Spiel, das jedes Mal eine andere Welt erzeugt. Akzeptiere den ersten Seed und passe dich an seine Vorgaben an.",
      completion: "Beende einen Run.",
    },
  },
  "explore-one-word-door": {
    en: {
      objective: "Find the installed game with the shortest visible title. Launch the shortest-titled game before reading reviews.",
      completion: "Reach its first clear stopping point.",
    },
    de: {
      objective: "Finde das installierte Spiel mit dem kürzesten sichtbaren Titel. Starte das Spiel mit dem kürzesten Titel, ohne Rezensionen zu lesen.",
      completion: "Erreiche den ersten klaren Haltepunkt.",
    },
  },
  "explore-color-beacon": {
    en: {
      objective: "Look at your installed covers and pick the first color that catches you. Open the first game dominated by that color.",
      completion: "Reach a matching scene.",
    },
    de: {
      objective: "Schau auf deine installierten Cover und nimm die erste Farbe, die dir auffällt. Öffne das erste Spiel, das von ihr bestimmt wird.",
      completion: "Erreiche eine passende Szene.",
    },
  },
  "explore-earliest-release": {
    en: {
      objective: "Find one of the oldest games you currently have installed. Start its first level and notice what its design expects from you.",
      completion: "Reach the end of the level or its next checkpoint.",
    },
    de: {
      objective: "Finde eines der ältesten Spiele, die du gerade installiert hast. Starte das erste Level und achte darauf, was sein Design von dir erwartet.",
      completion: "Erreiche das Ende des Levels oder seinen nächsten Kontrollpunkt.",
    },
  },
  "explore-genre-collision": {
    en: {
      objective: "Open a first-person game built around spatial puzzles. Choose one unsolved room and inspect how its pieces connect.",
      completion: "Solve the room or leave one tested theory behind.",
    },
    de: {
      objective: "Öffne ein First-Person-Spiel mit räumlichen Rätseln. Wähle einen ungelösten Raum und untersuche, wie seine Teile zusammenhängen.",
      completion: "Löse den Raum oder hinterlasse eine geprüfte Theorie.",
    },
  },
  "explore-no-straight-line": {
    en: {
      objective: "Open a world where one objective has several routes. Reach the objective by a route you have never used.",
      completion: "Arrive without returning to your usual route.",
    },
    de: {
      objective: "Öffne eine Welt, in der mehrere Wege zu einem Ziel führen. Erreiche das Ziel über eine Route, die du noch nie genommen hast.",
      completion: "Komm an, ohne auf den gewohnten Weg zurückzukehren.",
    },
  },
  "explore-failure-teaches": {
    en: {
      objective: "Choose a game where losing reveals useful information. Finish one honest failed attempt and identify what it taught you.",
      completion: "Use that lesson to survive the same mistake once.",
    },
    de: {
      objective: "Wähle ein Spiel, in dem eine Niederlage nützliche Informationen liefert. Beende einen ehrlichen Fehlversuch und benenne seine Lektion.",
      completion: "Nutze diese Lektion, um denselben Fehler einmal zu überleben.",
    },
  },
  "explore-unusual-job": {
    en: {
      objective: "Think of a game that lets you perform a job you know little about. Start one shift and follow its basic routine.",
      completion: "Finish the shift.",
    },
    de: {
      objective: "Denk an ein Spiel, in dem du einen dir fremden Beruf ausübst. Starte eine Schicht und folge ihrem grundlegenden Ablauf.",
      completion: "Beende die Schicht.",
    },
  },
  "explore-without-combat": {
    en: {
      objective: "Open a game that normally allows combat. Pick one nearby objective and reach it without starting a fight.",
      completion: "Complete the objective peacefully.",
    },
    de: {
      objective: "Öffne ein Spiel, das normalerweise Kämpfe erlaubt. Wähle ein nahes Ziel und erreiche es, ohne einen Kampf zu beginnen.",
      completion: "Schließe das Ziel friedlich ab.",
    },
  },
  "explore-scale-shift": {
    en: {
      objective: "Choose a game that makes you feel impossibly small. Travel until that difference in scale becomes unmistakable.",
      completion: "Reach one such scene.",
    },
    de: {
      objective: "Wähle ein Spiel, in dem du dich unmöglich klein fühlst. Reise, bis dieser Maßstab unübersehbar wird.",
      completion: "Erreiche eine solche Szene.",
    },
  },
  "explore-rule-you-doubt": {
    en: {
      objective: "Open the game whose main idea sounds least convincing to you. Try the first activity built entirely around that idea.",
      completion: "Finish it or test the idea.",
    },
    de: {
      objective: "Öffne das Spiel, dessen Hauptidee dich am wenigsten überzeugt. Probiere die erste Aktivität, die vollständig auf dieser Idee aufbaut.",
      completion: "Beende sie oder teste die Idee.",
    },
  },
  "explore-opposite-choice": {
    en: {
      objective: "Open a game with a meaningful choice ahead. Choose the option opposite to your usual instinct and do not reload.",
      completion: "Accept its result.",
    },
    de: {
      objective: "Öffne ein Spiel mit einer bedeutsamen Entscheidung vor dir. Wähle das Gegenteil deines üblichen Impulses und lade nicht neu.",
      completion: "Akzeptiere das Ergebnis.",
    },
  },
  "explore-immersive-sim": {
    en: {
      objective: "Choose a game where one objective has several systemic solutions. Ignore the marked entrance and invent another route.",
      completion: "Reach the objective.",
    },
    de: {
      objective: "Wähle ein Spiel, in dem ein Ziel mehrere systemische Lösungen hat. Ignoriere den markierten Eingang und erfinde einen anderen Weg.",
      completion: "Erreiche das Ziel.",
    },
  },
  "explore-metroidvania-shortcut": {
    en: {
      objective: "Open an interconnected map with a route that still feels too long. Search its nearby walls and doors for a shortcut.",
      completion: "Open one shortcut.",
    },
    de: {
      objective: "Öffne eine zusammenhängende Karte mit einem Weg, der noch zu lang wirkt. Suche an nahen Wänden und Türen nach einer Abkürzung.",
      completion: "Öffne eine Abkürzung.",
    },
  },
  "explore-archaeology-trail": {
    en: {
      objective: "Think of a game with ruins whose story you never understood. Visit one site and inspect three details left behind.",
      completion: "Explain what happened there.",
    },
    de: {
      objective: "Denk an ein Spiel mit Ruinen, deren Geschichte du nie verstanden hast. Besuche einen Ort und untersuche drei hinterlassene Details.",
      completion: "Erkläre, was dort passiert ist.",
    },
  },
  "explore-unfamiliar-cockpit": {
    en: {
      objective: "Open a simulator with a vehicle you have never learned. Use its basic controls to begin one safe trip.",
      completion: "Arrive safely.",
    },
    de: {
      objective: "Öffne einen Simulator mit einem Fahrzeug, das du noch nie gelernt hast. Beginne mit den Grundfunktionen eine sichere Fahrt.",
      completion: "Komm sicher an.",
    },
  },
  "explore-tiny-world": {
    en: {
      objective: "Choose a game built around one tiny area. Inspect every edge of that area before moving on.",
      completion: "Find one hidden detail.",
    },
    de: {
      objective: "Wähle ein Spiel, das um einen winzigen Bereich gebaut ist. Untersuche jeden Rand dieses Ortes, bevor du weitergehst.",
      completion: "Finde ein verborgenes Detail.",
    },
  },
  "explore-wordless-world": {
    en: {
      objective: "Open a game that explains itself without dialogue. Follow its shapes, movement, and sound without looking anything up.",
      completion: "Reach one clear transition.",
    },
    de: {
      objective: "Öffne ein Spiel, das sich ohne Dialog erklärt. Folge seinen Formen, Bewegungen und Geräuschen, ohne etwas nachzuschlagen.",
      completion: "Erreiche einen klaren Übergang.",
    },
  },
  "progress-break-the-blocker": {
    en: { objective: "Think of a game you bought but never started. Begin a new save in that untouched game.", completion: "Reach the first save point." },
    de: { objective: "Denk an ein Spiel, das du gekauft, aber nie begonnen hast. Beginne einen neuen Spielstand in diesem unberührten Spiel.", completion: "Erreiche den ersten Speicherpunkt." },
  },
  "progress-clean-finish": {
    en: { objective: "Choose a game you dismissed before understanding its main loop. Start over and give that loop your full attention.", completion: "Complete the main loop once and decide whether it deserves another session." },
    de: { objective: "Wähle ein Spiel, das du abgebrochen hast, bevor du seine Hauptschleife verstanden hattest. Starte neu und gib ihr deine volle Aufmerksamkeit.", completion: "Schließe die Hauptschleife einmal ab und entscheide, ob sie eine weitere Session verdient." },
  },
  "progress-one-tier-better": {
    en: { objective: "Open a campaign you abandoned after only a few sessions. Resume the latest save and follow its main objective.", completion: "Reach the next named checkpoint." },
    de: { objective: "Öffne eine Kampagne, die du nach wenigen Sessions liegen gelassen hast. Setze den letzten Spielstand fort und folge dem Hauptziel.", completion: "Erreiche den nächsten benannten Kontrollpunkt." },
  },
  "progress-three-step-plan": {
    en: { objective: "Open a solo shooter with an unlock already in reach. Check its requirement and work only toward that reward.", completion: "Earn the unlock or complete its next named requirement." },
    de: { objective: "Öffne einen Solo-Shooter mit einer Freischaltung in Reichweite. Prüfe ihre Bedingung und arbeite nur auf diese Belohnung hin.", completion: "Schalte sie frei oder verfolge sie." },
  },
  "progress-recovery-run": {
    en: { objective: "Choose the unfinished campaign closest to its ending. Continue its main story without taking side quests.", completion: "Reach the next story milestone." },
    de: { objective: "Wähle die unfertige Kampagne, die ihrem Ende am nächsten ist. Setze die Hauptgeschichte ohne Nebenquests fort.", completion: "Erreiche den nächsten Story-Meilenstein." },
  },
  "progress-two-birds": {
    en: { objective: "Pick a game you keep installed but repeatedly skip. Start its nearest meaningful activity now.", completion: "Finish it, then decide whether the game stays installed." },
    de: { objective: "Nimm ein Spiel, das installiert bleibt, obwohl du es ständig überspringst. Starte jetzt die nächste sinnvolle Aktivität.", completion: "Beende sie und entscheide dann, ob das Spiel installiert bleibt." },
  },
  "progress-wake-the-sleeping-save": {
    en: { objective: "Open the active save you have ignored the longest. Read the current goal and move toward it immediately.", completion: "Reach one new checkpoint." },
    de: { objective: "Öffne den aktiven Spielstand, den du am längsten ignoriert hast. Lies das aktuelle Ziel und geh sofort darauf zu.", completion: "Erreiche einen neuen Kontrollpunkt." },
  },
  "progress-honor-the-oldest-promise": {
    en: { objective: "Open a quest log and find its oldest reachable task. Ignore newer entries and follow only that one.", completion: "Finish it or complete its next named step." },
    de: { objective: "Öffne ein Questlog und finde die älteste erreichbare Aufgabe. Ignoriere neuere Einträge und verfolge nur diese eine.", completion: "Beende sie oder bringe sie voran." },
  },
  "progress-open-the-black-box": {
    en: { objective: "Return to a good game you paused because one system felt intimidating. Use that system in real play instead of reading about it.", completion: "Make it work once." },
    de: { objective: "Kehre zu einem guten Spiel zurück, das du wegen eines einschüchternden Systems pausiert hast. Nutze es im Spiel, statt nur darüber zu lesen.", completion: "Bring es einmal zum Funktionieren." },
  },
  "progress-revisit-the-wall": {
    en: { objective: "Open the puzzle that blocked an unfinished game. Reconstruct the problem and test one new approach at a time.", completion: "Solve it or test three approaches." },
    de: { objective: "Öffne das Rätsel, das ein unfertiges Spiel blockiert. Rekonstruiere das Problem und teste jeweils einen neuen Ansatz.", completion: "Löse es oder teste drei Ansätze." },
  },
  "progress-clear-one-map-pocket": {
    en: { objective: "Open a familiar map with one small unfinished pocket. Enter that pocket and follow its nearest marker.", completion: "Reveal the area and finish its task." },
    de: { objective: "Öffne eine vertraute Karte mit einem kleinen unfertigen Bereich. Betritt ihn und folge seinem nächsten Marker.", completion: "Decke den Bereich auf und beende seine Aufgabe." },
  },
  "progress-open-the-expansion-door": {
    en: { objective: "Choose an expansion you own but never entered. Start its first quest without revisiting the base game first.", completion: "Reach its first unique location." },
    de: { objective: "Wähle eine Erweiterung, die du besitzt, aber nie betreten hast. Starte ihre erste Quest, ohne vorher ins Hauptspiel zurückzukehren.", completion: "Erreiche ihren ersten eigenen Ort." },
  },
  "progress-let-the-other-hero-grow": {
    en: { objective: "Pick a playable character you have neglected. Use only that character for the next available activity.", completion: "Earn one level or unlock." },
    de: { objective: "Wähle eine spielbare Figur, die du vernachlässigt hast. Nutze nur diese Figur für die nächste verfügbare Aktivität.", completion: "Verdiene einen Levelaufstieg oder eine Freischaltung." },
  },
  "progress-rebuild-muscle-memory": {
    en: { objective: "Open a game you want to remember how to play. Run its tutorial and repeat the most important action.", completion: "Use that action successfully." },
    de: { objective: "Öffne ein Spiel, dessen Steuerung du wieder lernen möchtest. Spiele das Tutorial und wiederhole die wichtigste Aktion.", completion: "Nutze diese Aktion erfolgreich." },
  },
  "progress-follow-the-remembered-thread": {
    en: { objective: "Return to an unfinished story whose unanswered question still bothers you. Follow the main thread toward that answer.", completion: "Reach the next reveal." },
    de: { objective: "Kehre zu einer unfertigen Geschichte zurück, deren offene Frage dich noch beschäftigt. Folge dem Hauptstrang in Richtung Antwort.", completion: "Erreiche die nächste Enthüllung." },
  },
  "progress-shake-off-the-rust": {
    en: { objective: "Open a competitive game you once played well. Play three honest rounds without comparing yourself to your old rank.", completion: "Finish all three rounds." },
    de: { objective: "Öffne ein kompetitives Spiel, das du früher gut konntest. Spiele drei ehrliche Runden, ohne dich mit deinem alten Rang zu vergleichen.", completion: "Beende alle drei Runden." },
  },
  "progress-claim-the-nearby-feat": {
    en: { objective: "Open a game with an achievement that is already close. Read its exact requirement and work only toward it.", completion: "Unlock it or make three full attempts." },
    de: { objective: "Öffne ein Spiel mit einem Achievement, das fast erreicht ist. Lies die genaue Bedingung und arbeite nur darauf hin.", completion: "Schalte es frei oder unternimm drei vollständige Versuche." },
  },
  "progress-return-to-the-gift": {
    en: { objective: "Think of a game someone gave you that never received a fair session. Start the gifted game with its giver in mind.", completion: "Reach its first clear stopping point." },
    de: { objective: "Denk an ein Spiel, das dir jemand geschenkt hat und dem du nie eine faire Session gegeben hast. Starte das geschenkte Spiel mit der schenkenden Person im Kopf.", completion: "Erreiche den ersten klaren Haltepunkt." },
  },
  "progress-choose-the-short-road": {
    en: { objective: "Choose the shortest unfinished campaign in your library. Continue its main path and ignore optional content.", completion: "Finish one chapter." },
    de: { objective: "Wähle die kürzeste unfertige Kampagne in deiner Bibliothek. Folge ihrem Hauptweg und ignoriere optionale Inhalte.", completion: "Beende ein Kapitel." },
  },
  "progress-cross-the-middle": {
    en: { objective: "Open a campaign stranded in its middle. Pick the current main quest and follow it without detours.", completion: "Finish that quest." },
    de: { objective: "Öffne eine Kampagne, die in ihrer Mitte feststeckt. Wähle die aktuelle Hauptquest und folge ihr ohne Umwege.", completion: "Beende diese Quest." },
  },
  "progress-unpack-and-move": {
    en: { objective: "Open a save blocked by an overloaded inventory. Equip one usable kit and store everything else.", completion: "Leave the menu with free space." },
    de: { objective: "Öffne einen Spielstand, der an einem überfüllten Inventar hängt. Rüste ein brauchbares Set aus und lagere alles andere ein.", completion: "Verlasse das Menü mit freiem Platz." },
  },
  "progress-prove-one-technique": {
    en: { objective: "Choose one move you only half understand. Practice it briefly, then use it during real play.", completion: "Land it three times." },
    de: { objective: "Wähle eine Technik, die du nur halb beherrschst. Übe sie kurz und nutze sie dann im echten Spiel.", completion: "Führe sie dreimal erfolgreich aus." },
  },
  "progress-play-the-missing-link": {
    en: { objective: "Find the unplayed entry that fills a gap in a series you know. Start the missing sequel without replaying earlier entries.", completion: "Reach its first major save point." },
    de: { objective: "Finde den ungespielten Teil, der eine Lücke in einer bekannten Reihe schließt. Starte den fehlenden Nachfolger, ohne frühere Teile zu wiederholen.", completion: "Erreiche den ersten großen Speicherpunkt." },
  },
  "progress-earn-the-specific-upgrade": {
    en: { objective: "Open a save with one useful upgrade already in reach. Check its cost and pursue that upgrade alone.", completion: "Earn and use it." },
    de: { objective: "Öffne einen Spielstand mit einem nützlichen Upgrade in Reichweite. Prüfe seine Kosten und verfolge nur dieses Upgrade.", completion: "Verdiene und nutze es." },
  },
  "progress-remove-one-barrier": {
    en: { objective: "Return to a good game blocked by one annoying setting. Change that setting once and resume immediately.", completion: "Reach one activity's ending." },
    de: { objective: "Kehre zu einem guten Spiel zurück, das an einer störenden Einstellung hängt. Ändere sie einmal und spiele sofort weiter.", completion: "Erreiche das Ende einer Aktivität." },
  },
  "progress-finish-a-favorites-loose-end": {
    en: { objective: "Open a favorite game with one overlooked task. Select that exact task and ignore everything around it.", completion: "Finish it and save." },
    de: { objective: "Öffne ein Lieblingsspiel mit einer übersehenen Aufgabe. Wähle genau diese Aufgabe und ignoriere alles drumherum.", completion: "Beende sie und speichere." },
  },
  "progress-take-the-road-not-used": {
    en: { objective: "Open a story save with a branch you skipped. Enter that branch and accept its first meaningful choice.", completion: "Reach one unique outcome." },
    de: { objective: "Öffne einen Story-Spielstand mit einem Weg, den du ausgelassen hast. Betritt ihn und akzeptiere seine erste bedeutsame Entscheidung.", completion: "Erreiche ein einzigartiges Ergebnis." },
  },
  "progress-rescue-the-secondary-save": {
    en: { objective: "Open a secondary save you stopped using. Choose its nearest milestone and make that save useful again.", completion: "Reach the milestone." },
    de: { objective: "Öffne einen zweiten Spielstand, den du nicht mehr nutzt. Wähle seinen nächsten Meilenstein und mach ihn wieder sinnvoll.", completion: "Erreiche den Meilenstein." },
  },
  "progress-transfer-a-strength": {
    en: { objective: "Choose a game that shares one skill with a game you know well. Use that familiar skill deliberately.", completion: "Finish one challenge with it." },
    de: { objective: "Wähle ein Spiel, das eine Fähigkeit mit einem vertrauten Spiel teilt. Setze diese bekannte Stärke bewusst ein.", completion: "Beende damit eine Herausforderung." },
  },
  "progress-spend-the-hoarded-resource": {
    en: { objective: "Open a save holding a rare resource you always save for later. Spend it on the nearest useful improvement.", completion: "Use that improvement." },
    de: { objective: "Öffne einen Spielstand mit einer seltenen Ressource, die du immer für später sparst. Gib sie für die nächste nützliche Verbesserung aus.", completion: "Nutze diese Verbesserung." },
  },
  "progress-finish-the-tutorial": {
    en: { objective: "Return to a game whose tutorial you abandoned. Start the tutorial from the beginning and follow every required step.", completion: "Finish it and use one lesson." },
    de: { objective: "Kehre zu einem Spiel zurück, dessen Tutorial du abgebrochen hast. Starte es neu und folge jedem erforderlichen Schritt.", completion: "Beende es und nutze eine Lektion daraus." },
  },
  "progress-roguelike-meta-step": {
    en: { objective: "Open a run-based game with permanent upgrades. Start one run and spend its rewards immediately afterward.", completion: "Buy one lasting unlock." },
    de: { objective: "Öffne ein Run-basiertes Spiel mit dauerhaften Upgrades. Starte einen Run und gib seine Belohnung direkt danach aus.", completion: "Kaufe eine dauerhafte Freischaltung." },
  },
  "progress-complete-a-season": {
    en: { objective: "Open a save that is close to the end of its current season. Advance the calendar without starting new long projects.", completion: "Reach the season summary." },
    de: { objective: "Öffne einen Spielstand kurz vor dem Ende seiner aktuellen Saison. Bringe den Kalender voran, ohne neue Großprojekte zu beginnen.", completion: "Erreiche die Saisonübersicht." },
  },
  "progress-open-the-endgame": {
    en: { objective: "Choose a save that is one milestone away from its endgame. Follow the requirement for that milestone only.", completion: "Unlock the endgame." },
    de: { objective: "Wähle einen Spielstand, dem nur ein Meilenstein bis zum Endgame fehlt. Verfolge ausschließlich dessen Bedingung.", completion: "Schalte das Endgame frei." },
  },
  "progress-master-one-recipe": {
    en: { objective: "Open a game with one unfinished recipe. Gather exactly what it needs and make it once.", completion: "Produce the finished item." },
    de: { objective: "Öffne ein Spiel mit einem unfertigen Rezept. Sammle genau die benötigten Zutaten und stelle es einmal her.", completion: "Produziere den fertigen Gegenstand." },
  },
  "progress-fix-one-crisis": {
    en: { objective: "Open a management save with one obvious crisis. Change only the systems directly responsible for that problem.", completion: "Keep it stable for one full cycle." },
    de: { objective: "Öffne einen Management-Spielstand mit einer offensichtlichen Krise. Ändere nur die Systeme, die direkt dafür verantwortlich sind.", completion: "Halte sie einen ganzen Zyklus lang stabil." },
  },
  "create-new-build-old-parts": {
    en: { objective: "Open an empty building plot and decide what it must do. Build the smallest version that serves that purpose.", completion: "Finish and test it." },
    de: { objective: "Öffne ein leeres Baugrundstück und bestimme seinen Zweck. Baue die kleinste Version, die diesen Zweck erfüllt.", completion: "Stelle und teste sie fertig." },
  },
  "create-function-first": {
    en: { objective: "Choose one character you can customize. Give them a new look based on a single clear theme.", completion: "Finish the look." },
    de: { objective: "Wähle eine Figur, die du anpassen kannst. Gib ihr einen neuen Look mit genau einem klaren Thema.", completion: "Stelle den Look fertig." },
  },
  "create-rule-of-three": {
    en: { objective: "Open a game where parts can automate a task. Build one machine with a clear input and useful output.", completion: "Run one stable cycle." },
    de: { objective: "Öffne ein Spiel, in dem Bauteile eine Aufgabe automatisieren können. Baue eine Maschine mit klarem Eingang und nützlichem Ausgang.", completion: "Lass einen stabilen Zyklus laufen." },
  },
  "create-strategy-remix": {
    en: { objective: "Open a game with flexible equipment and invent a build you have never used. Commit to its central idea.", completion: "Finish one activity with it." },
    de: { objective: "Öffne ein Spiel mit flexibler Ausrüstung und erfinde einen Build, den du noch nie genutzt hast. Bleib bei seiner zentralen Idee.", completion: "Beende damit eine Aktivität." },
  },
  "create-make-a-landmark": {
    en: { objective: "Open a level editor and design one short route with a visible destination. Place only what that route needs.", completion: "Build and test it." },
    de: { objective: "Öffne einen Level-Editor und entwirf eine kurze Route mit sichtbarem Ziel. Platziere nur, was dieser Weg braucht.", completion: "Baue und teste sie." },
  },
  "create-before-and-after": {
    en: { objective: "Open the game world you most want to photograph today. Take three different pictures of one place.", completion: "Keep the strongest image." },
    de: { objective: "Öffne die Spielwelt, die du heute am liebsten fotografieren möchtest. Mache drei unterschiedliche Bilder von einem Ort.", completion: "Behalte das stärkste Bild." },
  },
  "create-tell-a-room-sized-story": {
    en: { objective: "Choose one empty room and imagine who lives there. Tell that person's daily routine with no more than seven objects.", completion: "Finish the room." },
    de: { objective: "Wähle einen leeren Raum und stell dir vor, wer dort lebt. Erzähle den Alltag dieser Person mit höchstens sieben Objekten.", completion: "Stelle den Raum fertig." },
  },
  "create-make-the-useful-prototype": {
    en: { objective: "Name one job a new creation should perform. Build the roughest version that can already do it.", completion: "Prove it works." },
    de: { objective: "Benenne eine Aufgabe, die eine neue Konstruktion erfüllen soll. Baue die gröbste Version, die sie bereits schafft.", completion: "Beweise, dass sie funktioniert." },
  },
  "create-build-around-the-flaw": {
    en: { objective: "Find an awkward feature on a building site. Make that obstacle the central idea instead of removing it.", completion: "Finish the design." },
    de: { objective: "Finde eine störende Besonderheit auf einem Bauplatz. Mach dieses Hindernis zur zentralen Idee, statt es zu entfernen.", completion: "Stelle den Entwurf fertig." },
  },
  "create-design-one-livable-block": {
    en: { objective: "Choose one compact city block. Add one home, one service, and a path connecting them.", completion: "Make the block usable." },
    de: { objective: "Wähle einen kompakten Stadtblock. Ergänze ein Zuhause, einen Service und einen Weg, der beide verbindet.", completion: "Mach den Block nutzbar." },
  },
  "create-shape-a-seasonal-garden": {
    en: { objective: "Open a place where you can plant a garden. Design one small bed around today's weather.", completion: "Finish the bed." },
    de: { objective: "Öffne einen Ort, an dem du einen Garten pflanzen kannst. Gestalte ein kleines Beet passend zum heutigen Wetter.", completion: "Stelle das Beet fertig." },
  },
  "create-dress-for-an-npc": {
    en: { objective: "Pick one minor character with a recognizable style. Dress your character as if they belonged beside them.", completion: "Finish the outfit." },
    de: { objective: "Wähle eine Nebenfigur mit erkennbarem Stil. Kleide deine Figur so, als würde sie zu ihr gehören.", completion: "Stelle das Outfit fertig." },
  },
  "create-take-an-honest-portrait": {
    en: { objective: "Choose a character worth observing and follow them off duty. Photograph one quiet moment without staging a heroic pose.", completion: "Keep one portrait." },
    de: { objective: "Wähle eine interessante Figur und beobachte sie abseits ihrer Aufgabe. Fotografiere einen ruhigen Moment ohne Heldenpose.", completion: "Behalte ein Porträt." },
  },
  "create-chase-one-kind-of-light": {
    en: { objective: "Choose one kind of light in an open world. Follow one kind of light until it shapes the scene.", completion: "Keep one photograph." },
    de: { objective: "Wähle eine bestimmte Lichtstimmung in einer offenen Welt. Folge ihr, bis sie eine Szene vollständig prägt.", completion: "Behalte ein Foto." },
  },
  "create-stage-a-three-frame-story": {
    en: { objective: "Tell a tiny story with exactly three screenshots. Capture a beginning, a change, and an ending.", completion: "Finish the sequence." },
    de: { objective: "Erzähle eine kleine Geschichte mit genau drei Screenshots. Halte einen Anfang, eine Veränderung und ein Ende fest.", completion: "Stelle die Sequenz fertig." },
  },
  "create-curate-the-odd-shelf": {
    en: { objective: "Find five overlooked objects that share one strange idea. Arrange them together as a deliberate collection.", completion: "Finish the display." },
    de: { objective: "Finde fünf übersehene Gegenstände mit einer gemeinsamen seltsamen Idee. Ordne sie als bewusste Sammlung an.", completion: "Stelle die Ausstellung fertig." },
  },
  "create-build-a-creatures-home": {
    en: { objective: "Choose one creature and study what it needs. Build a habitat designed only around those needs.", completion: "Make the habitat usable." },
    de: { objective: "Wähle ein Wesen und prüfe, was es braucht. Baue einen Lebensraum, der nur auf diese Bedürfnisse ausgelegt ist.", completion: "Mach den Lebensraum nutzbar." },
  },
  "create-embrace-one-sided-balance": {
    en: { objective: "Open a design you can still change. Make its two sides deliberately unequal while keeping the whole composition balanced.", completion: "Finish the composition." },
    de: { objective: "Öffne einen Entwurf, den du noch verändern kannst. Gestalte seine Seiten bewusst ungleich und halte die Komposition trotzdem ausgewogen.", completion: "Stelle die Komposition fertig." },
  },
  "create-run-a-kind-economy": {
    en: { objective: "Open a management save and choose one resource everyone needs. Make one scarce resource affordable while keeping a reserve.", completion: "Run a stable cycle." },
    de: { objective: "Öffne einen Management-Spielstand und wähle eine Ressource, die alle brauchen. Mach eine knappe Ressource bezahlbar und behalte eine Reserve.", completion: "Lass einen stabilen Zyklus laufen." },
  },
  "create-invent-a-team-identity": {
    en: { objective: "Choose one verb your team should embody. Build the entire lineup around doing that action well.", completion: "Reach one final result and accept it." },
    de: { objective: "Wähle ein Verb, das dein Team verkörpern soll. Baue die ganze Aufstellung darauf auf, diese Aktion gut auszuführen.", completion: "Erreiche ein endgültiges Ergebnis und akzeptiere es." },
  },
  "create-roleplay-a-local": {
    en: { objective: "Open a familiar world and role-play one ordinary resident. Go to work, rest somewhere, and return home.", completion: "Complete the day." },
    de: { objective: "Öffne eine vertraute Welt und spiele einen gewöhnlichen Bewohner. Geh zur Arbeit, ruh dich aus und kehre nach Hause zurück.", completion: "Schließe den Tag ab." },
  },
  "create-solve-it-sideways": {
    en: { objective: "Choose one objective you normally solve the same way. Clear it with a tool you usually ignore.", completion: "Reach the result." },
    de: { objective: "Wähle ein Ziel, das du sonst immer gleich löst. Schließe es mit einem Werkzeug ab, das du normalerweise ignorierst.", completion: "Erreiche das Ergebnis." },
  },
  "create-draw-with-a-route": {
    en: { objective: "Open a game that records your path. Travel one continuous route shaped like a letter of your choice.", completion: "Complete the shape." },
    de: { objective: "Öffne ein Spiel, das deinen Weg aufzeichnet. Reise eine durchgehende Route in Form eines Buchstabens deiner Wahl.", completion: "Vollende die Form." },
  },
  "create-compose-a-place-theme": {
    en: { objective: "Choose one place in a game and imagine its musical theme. Create a short loop that belongs there.", completion: "Finish and play the loop." },
    de: { objective: "Wähle einen Ort in einem Spiel und stell dir sein musikalisches Thema vor. Erstelle einen kurzen Loop, der dorthin gehört.", completion: "Stelle und spiele den Loop fertig." },
  },
  "create-sculpt-for-one-view": {
    en: { objective: "Choose one fixed viewpoint in a building game. Shape the scene until it looks complete from exactly there.", completion: "Finish that view." },
    de: { objective: "Wähle einen festen Blickwinkel in einem Bauspiel. Forme die Szene, bis sie genau von dort vollständig aussieht.", completion: "Stelle diese Ansicht fertig." },
  },
  "create-repair-with-a-new-idea": {
    en: { objective: "Open something you built long ago and identify its weakest part. Rebuild only that part around one new idea.", completion: "Test the repair." },
    de: { objective: "Öffne etwas, das du vor langer Zeit gebaut hast, und finde seine schwächste Stelle. Baue nur diesen Teil mit einer neuen Idee um.", completion: "Teste die Reparatur." },
  },
  "create-stage-a-silent-scene": {
    en: { objective: "Stage one scene whose action is understandable without words. Use poses and objects to make the moment clear.", completion: "Capture the final scene." },
    de: { objective: "Inszeniere eine Szene, deren Handlung ohne Worte verständlich ist. Nutze Posen und Objekte, um den Moment klarzumachen.", completion: "Halte die fertige Szene fest." },
  },
  "create-design-for-the-smallest-user": {
    en: { objective: "Choose two useful places in a built world. Connect them with the safest route for its slowest traveler.", completion: "Make the route usable." },
    de: { objective: "Wähle zwei wichtige Orte in einer gebauten Welt. Verbinde sie mit der sichersten Route für den langsamsten Reisenden.", completion: "Mach die Route nutzbar." },
  },
  "create-invent-a-personal-ritual": {
    en: { objective: "Choose a familiar game and invent a three-step ritual for beginning a session. Perform each step in order.", completion: "Complete the ritual, then begin the session it was made for." },
    de: { objective: "Wähle ein vertrautes Spiel und erfinde ein Ritual aus drei Schritten für den Start einer Session. Führe sie der Reihe nach aus.", completion: "Schließe das Ritual ab und beginne dann die passende Session." },
  },
  "create-leave-a-kind-trace": {
    en: { objective: "Find one shared place that could help its next visitor. Add one useful improvement without claiming the space.", completion: "Finish the improvement." },
    de: { objective: "Finde einen geteilten Ort, der seinem nächsten Besucher helfen könnte. Ergänze eine nützliche Verbesserung, ohne den Platz zu beanspruchen.", completion: "Stelle die Verbesserung fertig." },
  },
  "create-boss-arena": {
    en: { objective: "Open an editor and build one compact boss arena. Give it one obvious hazard and one readable safe route.", completion: "Test a full encounter." },
    de: { objective: "Öffne einen Editor und baue eine kompakte Bossarena. Gib ihr eine klare Gefahr und einen erkennbaren sicheren Weg.", completion: "Teste einen vollständigen Kampf." },
  },
  "create-themed-deck": {
    en: { objective: "Choose one theme for a new card deck. Add only cards that clearly support that idea.", completion: "Finish one match with it." },
    de: { objective: "Wähle ein Thema für ein neues Kartendeck. Nimm nur Karten auf, die diese Idee klar unterstützen.", completion: "Beende damit ein Match." },
  },
  "create-accessible-route": {
    en: { objective: "Choose two important places in a built world. Connect them with a route its slowest traveler can use.", completion: "Make the route work." },
    de: { objective: "Wähle zwei wichtige Orte in einer gebauten Welt. Verbinde sie mit einer Route für den langsamsten Reisenden.", completion: "Bring die Route zum Funktionieren." },
  },
  "create-racing-livery": {
    en: { objective: "Pick one vehicle and design a livery using exactly two colors. Keep every decal consistent with that scheme.", completion: "Finish the design and race it." },
    de: { objective: "Wähle ein Fahrzeug und entwirf eine Lackierung mit genau zwei Farben. Halte jeden Aufkleber in diesem Schema.", completion: "Stelle den Entwurf fertig und fahre ihn." },
  },
  "create-factory-blueprint": {
    en: { objective: "Choose one factory task you often rebuild. Make a compact module that solves it and can be copied elsewhere.", completion: "Run one stable cycle." },
    de: { objective: "Wähle eine Fabrikaufgabe, die du oft neu baust. Erstelle ein kompaktes Modul, das sie löst und kopiert werden kann.", completion: "Lass einen stabilen Zyklus laufen." },
  },
  "create-character-backstory": {
    en: { objective: "Choose one playable character and give them a simple past. Express it through three visible details, then enter one scene.", completion: "Finish the scene in character." },
    de: { objective: "Wähle eine spielbare Figur und gib ihr eine einfache Vergangenheit. Zeige sie durch drei sichtbare Details und starte dann eine Szene.", completion: "Beende die Szene in dieser Rolle." },
  },
  "challenge-first-try-counts": {
    en: { objective: "Open a fighting game and choose one character you want to learn. Keep that character for a best-of-five set.", completion: "Finish the set." },
    de: { objective: "Öffne ein Fighting Game und wähle eine Figur, die du lernen möchtest. Bleib für ein Best-of-five-Set bei ihr.", completion: "Beende das Set." },
  },
  "challenge-one-step-harder": {
    en: { objective: "Open the competitive shooter whose movement interests you most. Queue for three PvP matches without changing your loadout.", completion: "Finish all three matches." },
    de: { objective: "Öffne den kompetitiven Shooter, dessen Bewegung dich am meisten reizt. Spiele drei PvP-Matches mit demselben Loadout.", completion: "Beende alle drei Matches." },
  },
  "challenge-beat-your-ghost": {
    en: { objective: "Choose one familiar track in a racing game. Drive three clean attempts with the same vehicle.", completion: "Record your best valid time." },
    de: { objective: "Wähle eine vertraute Strecke in einem Rennspiel. Fahre drei saubere Versuche mit demselben Fahrzeug.", completion: "Halte deine beste gültige Zeit fest." },
  },
  "challenge-pressure-proof": {
    en: { objective: "Open a competitive strategy game and face one opponent. Read their plan before committing to your own.", completion: "Finish the match." },
    de: { objective: "Öffne ein kompetitives Strategiespiel und tritt gegen einen Gegner an. Lies seinen Plan, bevor du dich auf deinen festlegst.", completion: "Beende das Match." },
  },
  "challenge-thin-margin": {
    en: { objective: "Choose one sports game and play with the team you care about most. Keep the default match length.", completion: "Finish the full match." },
    de: { objective: "Wähle ein Sportspiel und spiele mit dem Team, das dir am wichtigsten ist. Behalte die voreingestellte Matchlänge.", completion: "Beende das vollständige Match." },
  },
  "challenge-adapt-on-contact": {
    en: { objective: "Open a game that records one personal best. Choose a single score and make three honest attempts to beat it.", completion: "Improve the score or finish all attempts." },
    de: { objective: "Öffne ein Spiel mit einem persönlichen Rekord. Wähle genau einen Wert und versuche dreimal ehrlich, ihn zu schlagen.", completion: "Verbessere ihn oder beende alle Versuche." },
  },
  "challenge-return-to-the-wall": {
    en: { objective: "Return to the encounter that stopped you before. Review what went wrong and begin a deliberate new attempt.", completion: "Clear it or finish three attempts." },
    de: { objective: "Kehre zu der Begegnung zurück, die dich früher gestoppt hat. Prüfe deinen letzten Fehler und starte einen bewussten neuen Versuch.", completion: "Schaffe sie oder beende drei Versuche." },
  },
  "challenge-one-notch-higher": {
    en: { objective: "Open a familiar game and raise its difficulty by exactly one step. Start an activity you already understand.", completion: "Reach the activity's ending." },
    de: { objective: "Öffne ein vertrautes Spiel und erhöhe den Schwierigkeitsgrad um genau eine Stufe. Starte eine Aktivität, die du bereits kennst.", completion: "Erreiche das Ende der Aktivität." },
  },
  "challenge-three-life-window": {
    en: { objective: "Choose a game with quick retries and give yourself exactly three lives. Play each attempt through without restarting early.", completion: "Record the best result." },
    de: { objective: "Wähle ein Spiel mit schnellen Neustarts und gib dir genau drei Leben. Spiele jeden Versuch ohne vorzeitigen Neustart zu Ende.", completion: "Halte das beste Ergebnis fest." },
  },
  "challenge-neglected-tool": {
    en: { objective: "Open a game with one useful option you always ignore. Keep that option central for the next activity.", completion: "Reach the activity's ending." },
    de: { objective: "Öffne ein Spiel mit einer nützlichen Option, die du immer ignorierst. Nutze sie als Kern der nächsten Aktivität.", completion: "Erreiche das Ende der Aktivität." },
  },
  "challenge-silent-route": {
    en: { objective: "Choose one guarded area in a stealth game. Cross it without causing a full alarm.", completion: "Reach the other side." },
    de: { objective: "Wähle einen bewachten Bereich in einem Stealth-Spiel. Durchquere ihn, ohne einen vollständigen Alarm auszulösen.", completion: "Erreiche die andere Seite." },
  },
  "challenge-rationed-run": {
    en: { objective: "Open a game where supplies matter and take half your usual amount. Start one contained activity with that limit.", completion: "Finish it without exceeding the ration." },
    de: { objective: "Öffne ein Spiel, in dem Vorräte wichtig sind, und nimm nur die Hälfte deiner üblichen Menge. Starte damit eine begrenzte Aktivität.", completion: "Beende sie innerhalb des Limits." },
  },
  "challenge-boss-rematch": {
    en: { objective: "Return to one memorable boss and equip ordinary gear. Fight cleanly instead of relying on your strongest setup.", completion: "Win or finish three attempts." },
    de: { objective: "Kehre zu einem einprägsamen Boss zurück und rüste gewöhnliche Ausrüstung aus. Kämpfe sauber statt mit deinem stärksten Setup.", completion: "Gewinne oder beende drei Versuche." },
  },
  "challenge-precision-passage": {
    en: { objective: "Choose one short sequence that demands precise input. Repeat the whole sequence instead of drilling only its easiest part.", completion: "Clear it or make five attempts." },
    de: { objective: "Wähle eine kurze Passage, die präzise Eingaben verlangt. Wiederhole die ganze Sequenz statt nur ihren leichtesten Teil.", completion: "Schaffe sie oder unternimm fünf Versuche." },
  },
  "challenge-no-hint-hour": {
    en: { objective: "Open one unresolved puzzle and turn off every hint. Inspect the problem and commit to your own reasoning.", completion: "Solve it or leave one concrete theory." },
    de: { objective: "Öffne ein ungelöstes Rätsel und schalte alle Hinweise aus. Untersuche das Problem und vertraue deiner eigenen Logik.", completion: "Löse es oder hinterlasse eine konkrete Theorie." },
  },
  "challenge-weak-link-drill": {
    en: { objective: "Name the skill that costs you the most results in one game. Practice only that weakness, then enter real play.", completion: "Use it successfully." },
    de: { objective: "Benenne die Fähigkeit, die dich in einem Spiel die meisten Ergebnisse kostet. Übe nur diese Schwäche und geh dann ins echte Spiel.", completion: "Nutze sie erfolgreich." },
  },
  "challenge-daily-trial": {
    en: { objective: "Open a game with a challenge dated today. Accept its default rules and make one valid attempt.", completion: "Submit a result." },
    de: { objective: "Öffne ein Spiel mit einer heutigen Challenge. Akzeptiere die Standardregeln und starte einen gültigen Versuch.", completion: "Reiche ein Ergebnis ein." },
  },
  "challenge-underdog-kit": {
    en: { objective: "Choose the weakest option you still consider viable. Keep the underdog option for the entire activity.", completion: "Reach one final result and accept it." },
    de: { objective: "Wähle die schwächste Option, die du noch für brauchbar hältst. Behalte die Außenseiteroption für die gesamte Aktivität.", completion: "Erreiche ein endgültiges Ergebnis und akzeptiere es." },
  },
  "challenge-no-restart-recovery": {
    en: { objective: "Start an activity where mistakes matter and promise not to restart. Recover from the first serious setback in play.", completion: "Reach a natural result." },
    de: { objective: "Starte eine Aktivität, in der Fehler zählen, und verzichte auf Neustarts. Fange den ersten ernsten Rückschlag im Spiel auf.", completion: "Erreiche ein natürliches Ergebnis." },
  },
  "challenge-pattern-reader": {
    en: { objective: "Choose one encounter with a repeating signal. Watch until you can predict it, then act on that prediction.", completion: "Clear the encounter." },
    de: { objective: "Wähle eine Begegnung mit einem wiederkehrenden Signal. Beobachte es, bis du es vorhersagen kannst, und handle danach.", completion: "Schaffe die Begegnung." },
  },
  "challenge-last-stand": {
    en: { objective: "Choose one defensive position and commit to holding it. Prepare before the first wave instead of moving later.", completion: "Survive three full waves." },
    de: { objective: "Wähle eine Verteidigungsposition und halte an ihr fest. Bereite sie vor der ersten Welle vor, statt später auszuweichen.", completion: "Überstehe drei vollständige Wellen." },
  },
  "challenge-ranked-nerves": {
    en: { objective: "Open the ranked queue you keep avoiding. Enter once with no target beyond finishing the result.", completion: "Complete one rated match." },
    de: { objective: "Öffne die Ranglisten-Warteschlange, die du immer vermeidest. Tritt einmal an, ohne ein anderes Ziel als den Abschluss.", completion: "Beende ein gewertetes Match." },
  },
  "challenge-nearby-achievement": {
    en: { objective: "Open a game with a skill-based achievement you have avoided. Read the requirement and start from its exact beginning.", completion: "Unlock it or make three full attempts." },
    de: { objective: "Öffne ein Spiel mit einem schwierigen Achievement, das du bisher vermieden hast. Lies die Bedingung und starte genau an ihrem Anfang.", completion: "Schalte es frei oder unternimm drei vollständige Versuche." },
  },
  "challenge-survival-shift": {
    en: { objective: "Choose one survival scenario with a defined end. Enter the survival mode prepared to reach its endpoint.", completion: "Survive the full scenario." },
    de: { objective: "Wähle ein Überlebensszenario mit einem klaren Ende. Betritt den Überlebensmodus mit dem Ziel, seinen Endpunkt zu erreichen.", completion: "Überstehe das ganze Szenario." },
  },
  "challenge-one-mechanic-master": {
    en: { objective: "Pick one advanced move you cannot yet use reliably. Practice it, then attempt it during real play.", completion: "Land it three times." },
    de: { objective: "Wähle eine fortgeschrittene Technik, die du noch nicht zuverlässig kannst. Übe sie und versuche sie dann im echten Spiel.", completion: "Führe sie dreimal erfolgreich aus." },
  },
  "challenge-clean-combo": {
    en: { objective: "Choose one short sequence of linked actions. Perform the full sequence without improvising between steps.", completion: "Execute it cleanly three times." },
    de: { objective: "Wähle eine kurze Abfolge verbundener Aktionen. Führe die ganze Sequenz aus, ohne zwischen den Schritten zu improvisieren.", completion: "Schaffe sie dreimal sauber." },
  },
  "challenge-damage-budget": {
    en: { objective: "Choose one encounter with visible health and set a loss limit of one quarter. Start with that budget fixed.", completion: "Finish within the limit." },
    de: { objective: "Wähle eine Begegnung mit sichtbarer Gesundheit und setze ein Verlustlimit von einem Viertel. Starte mit diesem festen Budget.", completion: "Beende sie innerhalb des Limits." },
  },
  "challenge-unknown-ruleset": {
    en: { objective: "Open a mode you have never played and read its rules once. Start before you feel fully prepared.", completion: "Finish one full result." },
    de: { objective: "Öffne einen Modus, den du noch nie gespielt hast, und lies seine Regeln einmal. Starte, bevor du dich vollständig vorbereitet fühlst.", completion: "Erreiche ein endgültiges Ergebnis und akzeptiere es." },
  },
  "challenge-audacious-route": {
    en: { objective: "Choose an objective with a clearly riskier route. Take that route and accept its consequences without reloading.", completion: "Reach its endpoint." },
    de: { objective: "Wähle ein Ziel mit einer deutlich riskanteren Route. Nimm diesen Weg und akzeptiere seine Folgen, ohne neu zu laden.", completion: "Erreiche seinen Endpunkt." },
  },
  "challenge-tension-you-avoid": {
    en: { objective: "Open the tense game you keep postponing. Continue from your latest save without lowering the atmosphere.", completion: "Reach the next safe point." },
    de: { objective: "Öffne das angespannte Spiel, das du immer wieder aufschiebst. Spiele vom letzten Spielstand weiter, ohne die Atmosphäre abzuschwächen.", completion: "Erreiche den nächsten sicheren Punkt." },
  },
  "challenge-platformer-no-fall": {
    en: { objective: "Choose a short platforming section you already understand. Attempt the whole route without falling once.", completion: "Reach the next checkpoint without a fall." },
    de: { objective: "Wähle eine kurze Plattformpassage, die du bereits verstehst. Versuche die ganze Route ohne einen einzigen Sturz.", completion: "Erreiche den nächsten Kontrollpunkt ohne einen Sturz." },
  },
  "challenge-tactics-iron-plan": {
    en: { objective: "Open one contained tactics mission and make a plan before moving. Keep every decision even when it hurts.", completion: "Win without reloading or losing a unit." },
    de: { objective: "Öffne eine begrenzte Taktikmission und plane vor dem ersten Zug. Behalte jede Entscheidung, auch wenn sie wehtut.", completion: "Gewinne ohne Neuladen oder Einheitenverlust." },
  },
  "challenge-rhythm-clean-song": {
    en: { objective: "Choose one song near your current limit. Play the same rhythm song three times and focus on one weak section.", completion: "Improve its score or combo." },
    de: { objective: "Wähle einen Song nahe deiner aktuellen Grenze. Spiele denselben Rhythmus-Song dreimal und fokussiere eine schwache Passage.", completion: "Verbessere Wertung oder Kombo." },
  },
  "challenge-sports-comeback": {
    en: { objective: "Start one sports match from behind and keep the normal rules. Play aggressively enough to create a real comeback.", completion: "Win or draw." },
    de: { objective: "Starte ein Sportmatch mit Rückstand und behalte die normalen Regeln. Spiele mutig genug für ein echtes Comeback.", completion: "Gewinne oder erreiche ein Unentschieden." },
  },
  "challenge-extraction-one-haul": {
    en: { objective: "Enter one extraction run with a single needed resource in mind. Take it and head for the exit immediately.", completion: "Extract alive." },
    de: { objective: "Betritt einen Extraction-Run mit genau einer benötigten Ressource im Kopf. Hol sie und geh sofort zum Ausgang.", completion: "Extrahiere lebend." },
  },
  "challenge-speedrun-one-split": {
    en: { objective: "Choose one short section you know well and time it three times. Restart only after completing the full section.", completion: "Keep the fastest clean run." },
    de: { objective: "Wähle eine kurze vertraute Passage und stoppe dreimal ihre Zeit. Starte erst nach dem vollständigen Abschnitt neu.", completion: "Behalte den schnellsten sauberen Run." },
  },
  "connect-lift-the-lowest": {
    en: { objective: "Open the game your old group once played together. Enter a solo activity using the role you filled for them.", completion: "Reach the activity's ending." },
    de: { objective: "Öffne das Spiel, das deine frühere Gruppe zusammen gespielt hat. Starte solo mit der Rolle, die du damals übernommen hast.", completion: "Erreiche das Ende der Aktivität." },
  },
  "connect-follow-their-lead": {
    en: { objective: "Return to an old group game with public matchmaking. Join one random team and follow their pace.", completion: "Stay through the full result." },
    de: { objective: "Kehre zu einem alten Gruppenspiel mit öffentlichem Matchmaking zurück. Tritt einem zufälligen Team bei und folge seinem Tempo.", completion: "Bleib bis zum vollständigen Ergebnis." },
  },
  "connect-share-the-upgrade": {
    en: { objective: "Think of the clearest game recommendation a friend ever gave you. Open that game and start its first activity.", completion: "Reach a clear stopping point." },
    de: { objective: "Denk an die deutlichste Spielempfehlung, die dir ein Freund gegeben hat. Öffne dieses Spiel und starte seine erste Aktivität.", completion: "Erreiche einen klaren Haltepunkt." },
  },
  "connect-rescue-route": {
    en: { objective: "Open a co-op game with public matchmaking. Join strangers and choose the team role they still need.", completion: "Finish one mission." },
    de: { objective: "Öffne ein Koop-Spiel mit öffentlichem Matchmaking. Tritt Fremden bei und übernimm die Rolle, die dem Team noch fehlt.", completion: "Beende eine Mission." },
  },
  "connect-set-up-the-finish": {
    en: { objective: "Enter a persistent shared world and find one public task already underway. Contribute to that exact task.", completion: "Stay until its reward appears." },
    de: { objective: "Betritt eine beständige geteilte Welt und finde eine laufende öffentliche Aufgabe. Trage genau zu dieser Aufgabe bei.", completion: "Bleib bis zu ihrer Belohnung." },
  },
  "connect-trade-roles": {
    en: { objective: "Think of one person and the game you associate with them most. Play the activity they would recognize immediately.", completion: "Reach the activity's ending." },
    de: { objective: "Denk an eine Person und das Spiel, das du am stärksten mit ihr verbindest. Spiele die Aktivität, die sie sofort erkennen würde.", completion: "Erreiche das Ende der Aktivität." },
  },
  "connect-global-ghost": {
    en: { objective: "Choose one recorded ghost from another player. Chase the player ghost three times and study where it gains time.", completion: "Finish all attempts." },
    de: { objective: "Wähle einen aufgezeichneten Ghost eines anderen Spielers. Jage den Spielergeist dreimal und beobachte, wo er Zeit gewinnt.", completion: "Beende alle Versuche." },
  },
  "connect-daily-crowd": {
    en: { objective: "Enter one open tournament that is available now. Accept the first match it assigns you.", completion: "Finish one tournament result." },
    de: { objective: "Tritt einem offenen Turnier bei, das gerade verfügbar ist. Akzeptiere das erste Match, das dir zugewiesen wird.", completion: "Beende ein Turnierergebnis." },
  },
  "connect-player-made-door": {
    en: { objective: "Open a game with community levels and choose one recent creation. Play the community level without checking ratings first.", completion: "Finish the level." },
    de: { objective: "Öffne ein Spiel mit Community-Leveln und wähle eine neue Kreation. Spiele das Community-Level, ohne vorher Bewertungen anzusehen.", completion: "Beende das Level." },
  },
  "connect-leave-a-signal": {
    en: { objective: "Enter a game where your actions can persist for later players. Leave one clear piece of help on their path.", completion: "Finish placing it." },
    de: { objective: "Betritt ein Spiel, in dem deine Handlungen für spätere Spieler bestehen bleiben. Hinterlasse eine klare Hilfe auf ihrem Weg.", completion: "Platziere sie vollständig." },
  },
  "connect-shared-save-return": {
    en: { objective: "Open a save another person helped shape. Add one useful thing while preserving everything they made.", completion: "Save the addition." },
    de: { objective: "Öffne einen Spielstand, den eine andere Person mitgestaltet hat. Ergänze etwas Nützliches und bewahre ihre Arbeit.", completion: "Speichere die Ergänzung." },
  },
  "connect-watched-first": {
    en: { objective: "Choose a game you first discovered by watching someone else. Play the exact kind of scene you remember.", completion: "Finish that activity." },
    de: { objective: "Wähle ein Spiel, das du zuerst bei jemand anderem gesehen hast. Spiele genau die Art von Szene, an die du dich erinnerst.", completion: "Beende diese Aktivität." },
  },
  "connect-creator-signature": {
    en: { objective: "Open an unplayed game by a creator whose style you know. Continue until you recognize one of their signatures.", completion: "Reach that moment." },
    de: { objective: "Öffne ein ungespieltes Werk eines Entwicklers, dessen Stil du kennst. Spiele, bis du eine typische Handschrift erkennst.", completion: "Erreiche diesen Moment." },
  },
  "connect-showpiece-session": {
    en: { objective: "Choose the first game you would show a curious visitor. Play the one section that best explains your choice.", completion: "Finish the section." },
    de: { objective: "Wähle das erste Spiel, das du einem neugierigen Besucher zeigen würdest. Spiele den Abschnitt, der deine Wahl am besten erklärt.", completion: "Beende den Abschnitt." },
  },
  "connect-community-mod": {
    en: { objective: "Open a familiar game with one community-made modification installed. Start the activity where its change is most obvious.", completion: "Reach the activity's ending." },
    de: { objective: "Öffne ein vertrautes Spiel mit einer installierten Community-Mod. Starte die Aktivität, in der ihre Änderung am deutlichsten ist.", completion: "Erreiche das Ende der Aktivität." },
  },
  "connect-same-seed": {
    en: { objective: "Find one published seed for a game you own. Start the shared seed unchanged and adapt to its world.", completion: "Reach one milestone." },
    de: { objective: "Finde einen veröffentlichten Seed für ein Spiel, das du besitzt. Starte den geteilten Seed unverändert und passe dich seiner Welt an.", completion: "Erreiche einen Meilenstein." },
  },
  "connect-common-language": {
    en: { objective: "Open the game mode people discussed most when it launched. Play the fandom's defining game to understand the shared reference.", completion: "Finish one full result." },
    de: { objective: "Öffne den Spielmodus, über den beim Erscheinen alle gesprochen haben. Spiele das prägende Spiel des Fandoms, um die gemeinsame Referenz zu verstehen.", completion: "Erreiche ein endgültiges Ergebnis und akzeptiere es." },
  },
  "connect-friends-leaderboard": {
    en: { objective: "Open a leaderboard that still shows a familiar name. Make one honest attempt to answer that score.", completion: "Submit a valid result." },
    de: { objective: "Öffne eine Rangliste, in der noch ein vertrauter Name steht. Unternimm einen ehrlichen Versuch, auf diesen Wert zu antworten.", completion: "Reiche ein gültiges Ergebnis ein." },
  },
  "connect-asynchronous-turn": {
    en: { objective: "Open an asynchronous game with a turn waiting for you. Make that move now without overanalyzing it.", completion: "Send the turn back." },
    de: { objective: "Öffne ein asynchrones Spiel, in dem ein Zug auf dich wartet. Führe ihn jetzt aus, ohne ihn zu zerdenken.", completion: "Schicke den Zug zurück." },
  },
  "connect-community-build": {
    en: { objective: "Find one active community build in a shared game. Add a visible piece that directly supports its purpose.", completion: "Finish the contribution." },
    de: { objective: "Finde ein aktives Community-Bauprojekt in einem geteilten Spiel. Ergänze ein sichtbares Teil, das seinen Zweck direkt unterstützt.", completion: "Stelle den Beitrag fertig." },
  },
  "connect-replay-company": {
    en: { objective: "Choose one full replay from a stronger player. Copy one visible decision from it in your own attempt.", completion: "Use that decision successfully." },
    de: { objective: "Wähle ein vollständiges Replay eines stärkeren Spielers. Übernimm eine sichtbare Entscheidung daraus in deinen eigenen Versuch.", completion: "Nutze diese Entscheidung erfolgreich." },
  },
  "connect-pass-it-on": {
    en: { objective: "Think of one person and choose a game that fits their taste. Play the section you would use to recommend it.", completion: "Finish it and name one reason." },
    de: { objective: "Denk an eine Person und wähle ein Spiel, das zu ihrem Geschmack passt. Spiele den Abschnitt, mit dem du es empfehlen würdest.", completion: "Beende ihn und nenne einen Grund." },
  },
  "connect-quiet-lobby": {
    en: { objective: "Join one multiplayer match with your microphone off. Communicate only through the tools the game provides.", completion: "Finish the team result." },
    de: { objective: "Tritt einem Multiplayer-Match mit ausgeschaltetem Mikrofon bei. Kommuniziere nur mit den Werkzeugen des Spiels.", completion: "Beende das Teamergebnis." },
  },
  "connect-borrow-their-style": {
    en: { objective: "Think of one player's style you still remember. Copy that approach for a complete activity before changing it.", completion: "Reach the activity's ending." },
    de: { objective: "Denk an den Stil eines Spielers, an den du dich noch erinnerst. Kopiere diesen Ansatz für eine ganze Aktivität, bevor du ihn änderst.", completion: "Erreiche das Ende der Aktivität." },
  },
  "connect-community-tactic": {
    en: { objective: "Choose one tactic discovered by the game's community. Use the community tactic exactly as described in one encounter.", completion: "Finish the encounter." },
    de: { objective: "Wähle eine Taktik, die von der Community des Spiels entdeckt wurde. Nutze die Community-Taktik genau wie beschrieben in einer Begegnung.", completion: "Beende die Begegnung." },
  },
  "connect-fandom-doorway": {
    en: { objective: "Open a game tied to a fandom you share with others. Play the scene every fan would immediately recognize.", completion: "Finish that scene." },
    de: { objective: "Öffne ein Spiel aus einem Fandom, das du mit anderen teilst. Spiele die Szene, die jeder Fan sofort erkennen würde.", completion: "Beende diese Szene." },
  },
  "connect-small-kindness": {
    en: { objective: "Join a multiplayer game where strangers can help each other. Find one player in trouble and assist them first.", completion: "Complete the handoff." },
    de: { objective: "Tritt einem Multiplayer-Spiel bei, in dem Fremde einander helfen können. Finde einen Spieler in Schwierigkeiten und hilf zuerst.", completion: "Schließe die Hilfe ab." },
  },
  "connect-parallel-company": {
    en: { objective: "Choose a calm game that leaves room for listening. Start one low-pressure activity alongside a familiar voice recording.", completion: "Reach the activity's ending." },
    de: { objective: "Wähle ein ruhiges Spiel, das Platz zum Zuhören lässt. Starte eine entspannte Aktivität neben einer vertrauten Sprachaufnahme.", completion: "Erreiche das Ende der Aktivität." },
  },
  "connect-memory-reconstruction": {
    en: { objective: "Return to a place in a game you shared with someone. Recreate one visible detail from that memory.", completion: "Finish the detail." },
    de: { objective: "Kehre zu einem Spielort zurück, den du mit jemandem geteilt hast. Stelle ein sichtbares Detail dieser Erinnerung nach.", completion: "Stelle das Detail fertig." },
  },
  "connect-one-viewer-clip": {
    en: { objective: "Think of one person who might enjoy your next game moment. Play until something worth sending happens.", completion: "Capture one clip or screenshot." },
    de: { objective: "Denk an eine Person, der dein nächster Spielmoment gefallen könnte. Spiele, bis etwas Teilenswertes passiert.", completion: "Nimm einen Clip oder Screenshot auf." },
  },
  "connect-couch-handoff": {
    en: { objective: "Choose one short section suited to passing a controller. Switch players after each failure and continue from there.", completion: "Clear the section together." },
    de: { objective: "Wähle eine kurze Passage, die sich zum Weiterreichen des Controllers eignet. Wechselt nach jedem Scheitern und spielt weiter.", completion: "Schafft den Abschnitt gemeinsam." },
  },
  "connect-party-lobby": {
    en: { objective: "Join one available party-game lobby. Accept the first ruleset and stay with the same group.", completion: "Finish one full set." },
    de: { objective: "Tritt einer verfügbaren Partyspiel-Lobby bei. Akzeptiere das erste Regelset und bleib bei derselben Gruppe.", completion: "Beende ein vollständiges Set." },
  },
  "connect-public-event": {
    en: { objective: "Enter a shared world and join the next visible public event. Arrive before it begins and stay involved.", completion: "Reach the reward screen." },
    de: { objective: "Betritt eine geteilte Welt und nimm am nächsten sichtbaren öffentlichen Event teil. Komm vor dem Start an und bleib beteiligt.", completion: "Erreiche den Belohnungsbildschirm." },
  },
  "connect-trade-a-gift": {
    en: { objective: "Find one useful item you can spare in a social game. Give it to another player without asking for payment.", completion: "Complete the gift." },
    de: { objective: "Finde in einem sozialen Spiel einen nützlichen Gegenstand, den du entbehren kannst. Schenke ihn einem anderen Spieler ohne Gegenleistung.", completion: "Übergib das Geschenk." },
  },
  "connect-coop-puzzle": {
    en: { objective: "Open a co-op puzzle game with one unsolved room. Agree on roles before touching the first mechanism.", completion: "Solve the room together." },
    de: { objective: "Öffne ein Koop-Rätselspiel mit einem ungelösten Raum. Verteilt die Rollen, bevor ihr den ersten Mechanismus berührt.", completion: "Löst den Raum gemeinsam." },
  },
  "connect-support-the-lowest": {
    en: { objective: "Join a team game with visible scores and identify the lowest-scoring teammate. Support their next attempt directly.", completion: "Help them complete one successful play." },
    de: { objective: "Tritt einem Teamspiel mit sichtbaren Punkten bei und finde den Mitspieler mit dem niedrigsten Wert. Unterstütze seinen nächsten Versuch direkt.", completion: "Hilf ihm zu einer erfolgreichen Aktion." },
  },
  "first-game-memory": {
    en: { objective: "Think of your earliest clear memory of playing a game. Open that game and return to the place you remember.", completion: "Finish one activity there." },
    de: { objective: "Denk an deine früheste klare Spielerinnerung. Öffne dieses Spiel und kehre an den Ort zurück, an den du dich erinnerst.", completion: "Beende dort eine Aktivität." },
  },
  "menu-music-door": {
    en: { objective: "Open a game whose menu theme you can still hear from memory. Stay until the full theme has played.", completion: "Finish one activity while the remembered theme is still in mind." },
    de: { objective: "Öffne ein Spiel, dessen Menüthema du noch auswendig hörst. Bleib, bis das ganze Stück gelaufen ist.", completion: "Beende eine Aktivität, solange das erinnerte Thema noch im Kopf ist." },
  },
  "old-console-era": {
    en: { objective: "Choose a game from a console generation you used before your current system. Start its first familiar level.", completion: "Finish the level." },
    de: { objective: "Wähle ein Spiel aus einer Konsolengeneration vor deinem aktuellen System. Starte das erste vertraute Level.", completion: "Beende das Level." },
  },
  "series-beginning": {
    en: { objective: "Return to the first entry in a series you followed for years. Begin from chapter one without skipping the opening.", completion: "Reach the first major save point." },
    de: { objective: "Kehre zum ersten Teil einer Reihe zurück, die du jahrelang verfolgt hast. Beginne mit Kapitel eins und überspringe den Anfang nicht.", completion: "Erreiche den ersten großen Speicherpunkt." },
  },
  "forgotten-save": {
    en: { objective: "Open an old save whose date feels personal. Inspect what your past self left behind before changing anything.", completion: "Make one change and save again." },
    de: { objective: "Öffne einen alten Spielstand, dessen Datum persönlich wirkt. Sieh dir an, was dein früheres Ich hinterlassen hat.", completion: "Ändere eine Sache und speichere erneut." },
  },
  "childhood-coop-solo": {
    en: { objective: "Think of a game you once shared on one screen. Play the stage you remember most, even if the second controller stays empty.", completion: "Finish the stage." },
    de: { objective: "Denk an ein Spiel, das du früher an einem Bildschirm geteilt hast. Spiele die vertrauteste Strecke, auch wenn der zweite Controller leer bleibt.", completion: "Beende den Abschnitt." },
  },
  "first-hard-win": {
    en: { objective: "Return to a challenge you were once proud to beat. Attempt it again with the skills you have now.", completion: "Win or make three full attempts." },
    de: { objective: "Kehre zu einer Herausforderung zurück, auf deren Sieg du früher stolz warst. Versuche sie mit deinen heutigen Fähigkeiten erneut.", completion: "Gewinne oder unternimm drei vollständige Versuche." },
  },
  "rental-weekend": {
    en: { objective: "Think of a game you once borrowed for a weekend. Revisit the first activity you remember.", completion: "Reach the activity's ending." },
    de: { objective: "Denk an ein Spiel, das du früher für ein Wochenende ausgeliehen hast. Besuche die erste erinnerte Aktivität erneut.", completion: "Erreiche das Ende der Aktivität." },
  },
  "demo-memory": {
    en: { objective: "Open a game whose demo once sold you its whole promise. Replay that exact opening from the beginning.", completion: "Finish the opening." },
    de: { objective: "Öffne ein Spiel, dessen Demo dir damals das ganze Versprechen verkauft hat. Spiele genau diesen Anfang noch einmal.", completion: "Beende den Anfang." },
  },
  "old-avatar": {
    en: { objective: "Visit a character you created years ago. Keep their old appearance and equipment exactly as you find them.", completion: "Finish one activity as they are." },
    de: { objective: "Besuche eine Figur, die du vor Jahren erstellt hast. Behalte ihr altes Aussehen und ihre Ausrüstung genau so bei.", completion: "Beende mit ihr eine Aktivität." },
  },
  "lost-mode": {
    en: { objective: "Think of a retired mode you still miss and find its closest modern successor. Play that version without comparing menus.", completion: "Finish one full result." },
    de: { objective: "Denk an einen eingestellten Modus, den du vermisst, und finde seinen nächsten modernen Nachfolger. Spiele diese Version ohne Menüvergleich.", completion: "Erreiche ein endgültiges Ergebnis und akzeptiere es." },
  },
  "remembered-map": {
    en: { objective: "Open a map you once knew by heart. Put the map away and visit three landmarks from memory.", completion: "Reach all three." },
    de: { objective: "Öffne eine Karte, die du früher auswendig kanntest. Schließe sie und besuche drei Orte aus der Erinnerung.", completion: "Erreiche alle drei." },
  },
  "credits-memory": {
    en: { objective: "Return to a game ending that still matters to you. Start its final available chapter and let every scene play.", completion: "Reach the closing scene." },
    de: { objective: "Kehre zu einem Spielende zurück, das dir noch etwas bedeutet. Starte das letzte verfügbare Kapitel und lass jede Szene laufen.", completion: "Erreiche die Schlussszene." },
  },
  "licensed-childhood": {
    en: { objective: "Choose a childhood game based on a character you already knew elsewhere. Play the level that best captures that source.", completion: "Reach the activity's ending." },
    de: { objective: "Wähle ein Kindheitsspiel über eine Figur, die du schon aus einem anderen Medium kanntest. Spiele das Level, das diese Vorlage am besten trifft.", completion: "Erreiche das Ende der Aktivität." },
  },
  "handheld-evening": {
    en: { objective: "Return to a game you first played on a handheld. Choose one compact activity that fits that old rhythm.", completion: "Reach the activity's ending." },
    de: { objective: "Kehre zu einem Spiel zurück, das du zuerst auf einem Handheld gespielt hast. Wähle eine kurze Aktivität im damaligen Rhythmus.", completion: "Erreiche das Ende der Aktivität." },
  },
  "seasonal-memory": {
    en: { objective: "Think of a game tied strongly to one season in your memory. Visit the place that brings that feeling back.", completion: "Finish one activity there." },
    de: { objective: "Denk an ein Spiel, das in deiner Erinnerung fest mit einer Jahreszeit verbunden ist. Besuche den Ort, der dieses Gefühl zurückbringt.", completion: "Beende dort eine Aktivität." },
  },
  "family-game": {
    en: { objective: "Choose the game most associated with your family room. Play one round with the rules you used back then.", completion: "Finish the round." },
    de: { objective: "Wähle das Spiel, das du am stärksten mit deinem Familienzimmer verbindest. Spiele eine Runde nach den damaligen Regeln.", completion: "Beende die Runde." },
  },
  "old-friend-pick": {
    en: { objective: "Think of an old friend and choose the game that best matches their taste. Play the activity they would have picked.", completion: "Reach the activity's ending." },
    de: { objective: "Denk an einen alten Freund und wähle das Spiel, das am besten zu seinem Geschmack passt. Spiele die Aktivität, die er gewählt hätte.", completion: "Erreiche das Ende der Aktivität." },
  },
  "retired-strategy": {
    en: { objective: "Open a game where you once had a reliable opening. Use that old plan unchanged from the first move.", completion: "Reach one final result and accept it." },
    de: { objective: "Öffne ein Spiel, in dem du früher eine verlässliche Eröffnung hattest. Nutze diesen alten Plan ab dem ersten Zug unverändert.", completion: "Erreiche ein endgültiges Ergebnis und akzeptiere es." },
  },
  "classic-roster": {
    en: { objective: "Choose a sports game with a roster from a season you remember. Play as that exact team.", completion: "Finish one full match." },
    de: { objective: "Wähle ein Sportspiel mit einem Kader aus einer Saison, an die du dich erinnerst. Spiele genau dieses Team.", completion: "Beende ein vollständiges Match." },
  },
  "old-racing-line": {
    en: { objective: "Return to a racing track your hands once knew. Drive the line from memory without chasing a record.", completion: "Finish one race." },
    de: { objective: "Kehre zu einer Rennstrecke zurück, die deine Hände früher kannten. Fahre die Linie aus der Erinnerung ohne Rekordjagd.", completion: "Beende ein Rennen." },
  },
  "first-rpg-town": {
    en: { objective: "Visit the first role-playing town that once felt like home. Walk its main street and greet three residents.", completion: "Speak to all three." },
    de: { objective: "Besuche die erste Rollenspielstadt, die sich früher wie Zuhause anfühlte. Geh ihre Hauptstraße entlang und begrüße drei Bewohner.", completion: "Sprich mit allen drei." },
  },
  "old-horror-courage": {
    en: { objective: "Return to a horror game you once paused out of fear. Continue from that save without skipping the tense route.", completion: "Reach the next safe room." },
    de: { objective: "Kehre zu einem Horrorspiel zurück, das du früher aus Angst pausiert hast. Spiele von dort weiter, ohne den angespannten Weg zu umgehen.", completion: "Erreiche den nächsten sicheren Raum." },
  },
  "dated-save-name": {
    en: { objective: "Find the oldest readable save date in a game you can still open. Load it and inspect your exact situation.", completion: "Do one small task and save again." },
    de: { objective: "Finde das älteste lesbare Speicherdatum in einem Spiel, das du noch öffnen kannst. Lade es und prüfe deine genaue Lage.", completion: "Erledige eine kleine Aufgabe und speichere erneut." },
  },
  "dormant-achievement": {
    en: { objective: "Think of a game where you once tried to earn every achievement. Open its unfinished achievement list and choose one.", completion: "Unlock it or record the exact requirement still standing." },
    de: { objective: "Denk an ein Spiel, in dem du früher alle Achievements holen wolltest. Öffne die Liste der noch offenen Errungenschaften und wähle eine.", completion: "Schalte sie frei oder halte die noch offene Bedingung genau fest." },
  },
  "original-vs-remaster": {
    en: { objective: "Open a remake of a game you played in its original form. Revisit one section you remember clearly.", completion: "Finish it and capture the new look." },
    de: { objective: "Öffne das Remake eines Spiels, das du im Original gespielt hast. Besuche einen Abschnitt, an den du dich klar erinnerst.", completion: "Beende ihn und halte die neue Optik fest." },
  },
  "original-settings": {
    en: { objective: "Choose a game whose opening challenge you once knew by heart. Replay that opening from memory before checking a guide.", completion: "Reach the first checkpoint and name one detail you remembered." },
    de: { objective: "Wähle ein Spiel, dessen erste Herausforderung du früher auswendig kanntest. Spiele diesen Anfang aus der Erinnerung, bevor du in einen Guide schaust.", completion: "Erreiche den ersten Kontrollpunkt und benenne ein Detail, an das du dich erinnert hast." },
  },
  "muscle-memory-mechanic": {
    en: { objective: "Return to one move your hands may still remember. Attempt it before opening any tutorial or move list.", completion: "Land it three times." },
    de: { objective: "Kehre zu einer Bewegung zurück, an die sich deine Hände vielleicht noch erinnern. Versuche sie vor jedem Tutorial oder Moveset.", completion: "Führe sie dreimal erfolgreich aus." },
  },
  "legacy-character": {
    en: { objective: "Open a game with the character you once considered your main. Pick that exact character without checking the current meta.", completion: "Reach one activity's ending." },
    de: { objective: "Öffne ein Spiel mit der Figur, die früher dein Main war. Wähle genau sie, ohne die aktuelle Meta zu prüfen.", completion: "Erreiche das Ende einer Aktivität." },
  },
  "one-last-revisit": {
    en: { objective: "Choose a former favorite you have not opened in years. Give it one honest return without expecting the old feeling.", completion: "Reach one activity's ending." },
    de: { objective: "Wähle einen früheren Favoriten, den du seit Jahren nicht geöffnet hast. Gib ihm eine ehrliche Rückkehr, ohne das alte Gefühl zu erwarten.", completion: "Erreiche das Ende einer Aktivität." },
  },
  "nostalgic-arcade-credit": {
    en: { objective: "Open a classic arcade game and treat the next start as one paid credit. Do not continue after game over.", completion: "Record the score." },
    de: { objective: "Öffne ein klassisches Arcade-Spiel und behandle den nächsten Start wie einen bezahlten Credit. Setze nach Game Over nicht fort.", completion: "Halte den Punktestand fest." },
  },
  "nostalgic-cheat-code": {
    en: { objective: "Return to an old game with a cheat code you still know. Enter the remembered cheat code and play with its effect.", completion: "Finish one level." },
    de: { objective: "Kehre zu einem alten Spiel mit einem Cheatcode zurück, den du noch kennst. Gib den erinnerten Cheatcode ein und spiele mit seiner Wirkung.", completion: "Beende ein Level." },
  },
  "nostalgic-first-indie": {
    en: { objective: "Think of one of the first indie games you loved. Replay its opening without checking how it was reviewed later.", completion: "Finish the opening." },
    de: { objective: "Denk an eines der ersten Indie-Spiele, die du geliebt hast. Spiele den Anfang erneut, ohne spätere Rezensionen anzusehen.", completion: "Beende den Anfang." },
  },
  "nostalgic-old-customization": {
    en: { objective: "Think of a custom look you once made in a game. Rebuild its three most distinctive details from memory.", completion: "Finish the recreation." },
    de: { objective: "Denk an einen eigenen Look, den du früher in einem Spiel gebaut hast. Stelle seine drei markantesten Details aus der Erinnerung nach.", completion: "Beende die Rekonstruktion." },
  },
  "nostalgic-startup-sounds": {
    en: { objective: "Think of a console startup sound you remember instantly. Open the first game you associate with it.", completion: "Reach one activity's ending." },
    de: { objective: "Denk an den Startklang einer Konsole, den du sofort erkennst. Öffne das erste Spiel, das du damit verbindest.", completion: "Erreiche das Ende einer Aktivität." },
  },
  "nostalgic-old-guide-memory": {
    en: { objective: "Return to an old game with a secret you once knew by heart. Find it again without looking up the route.", completion: "Reach the secret." },
    de: { objective: "Kehre zu einem alten Spiel mit einem Geheimnis zurück, das du früher auswendig kanntest. Finde es ohne nachzuschlagen erneut.", completion: "Erreiche das Geheimnis." },
  },
  "smallest-install": {
    en: { objective: "Sort your installed games by storage size and open the smallest one. Start its first available activity immediately.", completion: "Reach a clear stop." },
    de: { objective: "Sortiere deine installierten Spiele nach Speichergröße und öffne das kleinste. Starte sofort seine erste verfügbare Aktivität.", completion: "Erreiche einen klaren Haltepunkt." },
  },
  "shortest-promised-time": {
    en: { objective: "Choose the shortest clearly labeled activity you can see in one game. Start exactly that unit.", completion: "Reach the activity's ending." },
    de: { objective: "Wähle die kürzeste klar benannte Aktivität, die du in einem Spiel sehen kannst. Starte genau diese Einheit.", completion: "Erreiche das Ende der Aktivität." },
  },
  "no-setup-needed": {
    en: { objective: "Open the first familiar game that is ready right now. Skip downloads, tutorials, and settings screens.", completion: "Reach one activity's ending." },
    de: { objective: "Öffne das erste vertraute Spiel, das sofort bereit ist. Überspringe Downloads, Tutorials und Einstellungsmenüs.", completion: "Erreiche das Ende einer Aktivität." },
  },
  "nearest-checkpoint": {
    en: { objective: "Open the save with the most obvious next action. Do only that action and ignore everything revealed afterward.", completion: "Stop at the next checkpoint." },
    de: { objective: "Öffne den Spielstand mit der offensichtlichsten nächsten Aktion. Erledige nur sie und ignoriere alles, was danach erscheint.", completion: "Höre am nächsten Kontrollpunkt auf." },
  },
  "fewest-buttons": {
    en: { objective: "Choose a game that needs only a few controls. Start one low-input activity without changing its setup.", completion: "Reach the activity's natural ending." },
    de: { objective: "Wähle ein Spiel, das nur wenige Eingaben braucht. Starte eine einfache Aktivität, ohne das Setup zu ändern.", completion: "Erreiche das natürliche Ende der Aktivität." },
  },
  "first-installed-row": {
    en: { objective: "Look only at the first visible row of installed games. Open its first game that works right now.", completion: "Reach one activity's ending." },
    de: { objective: "Schau nur auf die erste sichtbare Reihe deiner installierten Spiele. Öffne das erste Spiel darin, das gerade funktioniert.", completion: "Erreiche das Ende einer Aktivität." },
  },
  "one-letter-shelf": {
    en: { objective: "Say the first letter that comes to mind and filter your library by it. Open the first installed result.", completion: "Reach one activity's ending." },
    de: { objective: "Nenne den ersten Buchstaben, der dir einfällt, und filtere deine Bibliothek danach. Öffne das erste installierte Ergebnis.", completion: "Erreiche das Ende einer Aktivität." },
  },
  "single-cover-pull": {
    en: { objective: "Scan your installed covers once and stop at the first one containing blue. Launch the first blue-covered game without comparing another.", completion: "Reach one activity's ending." },
    de: { objective: "Überfliege deine installierten Cover einmal und stoppe beim ersten mit Blau. Starte das erste Spiel mit blauem Cover, ohne ein anderes zu vergleichen.", completion: "Erreiche das Ende einer Aktivität." },
  },
  "safe-mode": {
    en: { objective: "Open a familiar game and choose its lowest-stakes mode. Keep every helpful default exactly as offered.", completion: "Reach one activity's ending." },
    de: { objective: "Öffne ein vertrautes Spiel und wähle seinen entspanntesten Modus. Behalte jede hilfreiche Voreinstellung genau wie angeboten.", completion: "Erreiche das Ende einer Aktivität." },
  },
  "no-inventory-session": {
    en: { objective: "Open a game you can play with your current gear. Start the nearest activity without opening the inventory.", completion: "Reach the activity's ending." },
    de: { objective: "Öffne ein Spiel, das du mit deiner aktuellen Ausrüstung spielen kannst. Starte die nächste Aktivität, ohne das Inventar zu öffnen.", completion: "Erreiche das Ende der Aktivität." },
  },
  "one-marker-only": {
    en: { objective: "Open an active save and choose the nearest visible objective marker. Go straight to it without checking the full map.", completion: "Finish its task." },
    de: { objective: "Öffne einen aktiven Spielstand und wähle den nächsten sichtbaren Zielmarker. Geh direkt dorthin, ohne die ganze Karte zu prüfen.", completion: "Beende seine Aufgabe." },
  },
  "closest-completion": {
    en: { objective: "Open the save with the clearest nearly finished task. Select that task and do nothing else.", completion: "Reach the activity's ending." },
    de: { objective: "Öffne den Spielstand mit der klarsten fast fertigen Aufgabe. Wähle diese Aufgabe und tu nichts anderes.", completion: "Erreiche das Ende der Aktivität." },
  },
  "tutorial-free": {
    en: { objective: "Choose the game whose controls you know best. Start one familiar activity without opening help or training.", completion: "Reach the activity's ending." },
    de: { objective: "Wähle das Spiel, dessen Steuerung du am besten kennst. Starte eine vertraute Aktivität ohne Hilfe oder Training.", completion: "Erreiche das Ende der Aktivität." },
  },
  "single-screen-game": {
    en: { objective: "Open a game whose whole challenge fits on one screen. Start the first available board and stay there.", completion: "Clear it." },
    de: { objective: "Öffne ein Spiel, dessen ganze Herausforderung auf einen Bildschirm passt. Starte das erste verfügbare Feld und bleib dort.", completion: "Schließe es ab." },
  },
  "pause-guaranteed": {
    en: { objective: "Open a familiar game with frequent autosaves. Continue the current activity and trust the next automatic checkpoint.", completion: "Stop there." },
    de: { objective: "Öffne ein vertrautes Spiel mit häufigen Autosaves. Setze die aktuelle Aktivität fort und vertraue dem nächsten automatischen Kontrollpunkt.", completion: "Höre dort auf." },
  },
  "no-dialogue-choice": {
    en: { objective: "Choose a linear story game that makes few demands on you. Continue the current scene without searching for alternate choices.", completion: "Reach the scene ending." },
    de: { objective: "Wähle ein lineares Story-Spiel, das wenig von dir verlangt. Setze die aktuelle Szene fort, ohne nach alternativen Entscheidungen zu suchen.", completion: "Erreiche das Szenenende." },
  },
  "one-match-contract": {
    en: { objective: "Open a game with clearly bounded matches. Queue for exactly one match and decline every rematch.", completion: "Reach its result screen." },
    de: { objective: "Öffne ein Spiel mit klar abgegrenzten Matches. Starte genau eines und lehne jede Revanche ab.", completion: "Erreiche seinen Ergebnisbildschirm." },
  },
  "one-room-boundary": {
    en: { objective: "Choose one room where useful work is already waiting. Stay inside it and complete one visible change.", completion: "Finish the change." },
    de: { objective: "Wähle einen Raum, in dem bereits eine sinnvolle Aufgabe wartet. Bleib darin und vollende eine sichtbare Veränderung.", completion: "Stelle die Veränderung fertig." },
  },
  "single-verb": {
    en: { objective: "Choose a game whose main action you can name with one verb. Repeat only that action until one unit ends.", completion: "Finish the unit." },
    de: { objective: "Wähle ein Spiel, dessen Hauptaktion du mit einem Verb benennen kannst. Wiederhole nur diese Aktion, bis eine Einheit endet.", completion: "Beende die Einheit." },
  },
  "visible-timer": {
    en: { objective: "Choose a familiar game and name one safe stopping point before starting. Play only toward that point.", completion: "Save and stop at the point you named." },
    de: { objective: "Wähle ein vertrautes Spiel und benenne vor dem Start einen sicheren Haltepunkt. Spiele nur auf diesen Punkt hin.", completion: "Speichere und höre an dem Punkt auf, den du benannt hast." },
  },
  "platform-recent": {
    en: { objective: "Open your recent-play history and look only at the top three games. Start the first one that is ready.", completion: "Reach one activity's ending." },
    de: { objective: "Öffne deinen Spielverlauf und schau nur auf die drei neuesten Spiele. Starte das erste, das bereit ist.", completion: "Erreiche das Ende einer Aktivität." },
  },
  "controller-ready": {
    en: { objective: "Use the controller already in your hands and open the first compatible game. Do not change devices or seating.", completion: "Reach one activity's ending." },
    de: { objective: "Nutze den Controller, den du bereits in der Hand hältst, und öffne das erste passende Spiel. Wechsle weder Gerät noch Platz.", completion: "Erreiche das Ende einer Aktivität." },
  },
  "no-update-door": {
    en: { objective: "Skip every game asking for a download and open the first ready install. Start immediately.", completion: "Reach one activity's ending." },
    de: { objective: "Überspringe jedes Spiel mit einem Download und öffne die erste fertige Installation. Starte sofort.", completion: "Erreiche das Ende einer Aktivität." },
  },
  "familiar-interface": {
    en: { objective: "Choose a game whose menus you can navigate without thought. Continue the nearest save without browsing other screens.", completion: "Reach one final result and accept it." },
    de: { objective: "Wähle ein Spiel, dessen Menüs du ohne Nachdenken bedienen kannst. Setze den nächsten Spielstand fort, ohne andere Seiten zu durchsuchen.", completion: "Erreiche ein Ergebnis." },
  },
  "one-save-only": {
    en: { objective: "Open the first current save with an obvious nearby task. Keep that save open and follow only that task.", completion: "Reach the activity's ending." },
    de: { objective: "Öffne den ersten aktuellen Spielstand mit einer offensichtlichen nahen Aufgabe. Bleib in diesem Spielstand und verfolge nur sie.", completion: "Erreiche das Ende der Aktivität." },
  },
  "finite-run": {
    en: { objective: "Open a puzzle game with visibly grouped stages. Choose the smallest unfinished set and begin its first puzzle.", completion: "Finish the set." },
    de: { objective: "Öffne ein Rätselspiel mit sichtbar gruppierten Stufen. Wähle das kleinste unfertige Set und beginne sein erstes Rätsel.", completion: "Beende das Set." },
  },
  "default-build": {
    en: { objective: "Open a game with a ready default loadout. Select the first default and change nothing.", completion: "Reach one activity's ending." },
    de: { objective: "Öffne ein Spiel mit einem fertigen Standard-Loadout. Wähle die erste Voreinstellung und ändere nichts.", completion: "Erreiche das Ende einer Aktivität." },
  },
  "default-difficulty": {
    en: { objective: "Open a game with a recommended difficulty. Accept that setting without researching whether it is right for you.", completion: "Reach one activity's ending." },
    de: { objective: "Öffne ein Spiel mit einem empfohlenen Schwierigkeitsgrad. Akzeptiere ihn, ohne vorher zu recherchieren.", completion: "Erreiche das Ende einer Aktivität." },
  },
  "fewest-open-threads": {
    en: { objective: "Choose the save with the fewest visible alerts. Complete its nearest small task and ignore every new notification.", completion: "Save again." },
    de: { objective: "Wähle den Spielstand mit den wenigsten sichtbaren Hinweisen. Beende seine nächste kleine Aufgabe und ignoriere jede neue Meldung.", completion: "Speichere erneut." },
  },
  "stop-rule-first": {
    en: { objective: "Open a familiar game and state the exact screen where you will stop. Play directly toward it.", completion: "Reach that screen and stop." },
    de: { objective: "Öffne ein vertrautes Spiel und benenne genau den Bildschirm, an dem du aufhörst. Spiele direkt darauf zu.", completion: "Erreiche ihn und höre auf." },
  },
  "overwhelmed-quick-resume": {
    en: { objective: "Resume the game already suspended on your system. Continue its current activity without opening the library.", completion: "Reach the activity's ending." },
    de: { objective: "Setze das Spiel fort, das auf deinem System bereits pausiert ist. Beende seine aktuelle Aktivität, ohne die Bibliothek zu öffnen.", completion: "Schließe sie ab." },
  },
  "overwhelmed-saved-preset": {
    en: { objective: "Open a game with saved presets and select the first one listed. Use the first saved preset unchanged.", completion: "Reach one final result and accept it." },
    de: { objective: "Öffne ein Spiel mit gespeicherten Presets und wähle das erste in der Liste. Nutze das erste gespeicherte Preset unverändert.", completion: "Erreiche ein endgültiges Ergebnis und akzeptiere es." },
  },
  "overwhelmed-last-level": {
    en: { objective: "Open the last campaign level you completed. Replay the last completed level without searching for extras.", completion: "Reach its ending." },
    de: { objective: "Öffne das letzte Kampagnenlevel, das du abgeschlossen hast. Spiele das zuletzt abgeschlossene Level ohne Suche nach Extras erneut.", completion: "Erreiche sein Ende." },
  },
  "overwhelmed-first-tutorial": {
    en: { objective: "Open a game with a short training lesson. Choose the first lesson and follow every prompt.", completion: "Reach the activity's ending." },
    de: { objective: "Öffne ein Spiel mit einer kurzen Trainingslektion. Wähle die erste Lektion und folge jeder Anweisung.", completion: "Erreiche das Ende der Aktivität." },
  },
  "overwhelmed-shortest-description": {
    en: { objective: "Look at the first visible row of installed games and open the one in the middle. Do not compare its neighbors.", completion: "Reach one activity's ending." },
    de: { objective: "Schau auf die erste sichtbare Reihe deiner installierten Spiele und öffne das Spiel in der Mitte. Vergleiche seine Nachbarn nicht.", completion: "Erreiche das Ende einer Aktivität." },
  },
  "overwhelmed-featured-daily": {
    en: { objective: "Open a familiar game showing one featured daily activity. Accept its default rules and start it.", completion: "Finish the daily." },
    de: { objective: "Öffne ein vertrautes Spiel mit einer hervorgehobenen Tagesaufgabe. Akzeptiere ihre Standardregeln und starte sie.", completion: "Beende die Tagesaufgabe." },
  },
  "instant-movement": {
    en: { objective: "Open a game that lets you move immediately. Start running before you can reconsider and choose the first visible checkpoint.", completion: "Touch the checkpoint you chose." },
    de: { objective: "Öffne ein Spiel, in dem du dich sofort bewegen kannst. Lauf los, bevor du es zerdenkst, und wähle den ersten sichtbaren Kontrollpunkt.", completion: "Berühre den gewählten Kontrollpunkt." },
  },
  "speed-line": {
    en: { objective: "Choose one short racing track you know. Drive three laps with the same vehicle and no setup changes.", completion: "Keep the fastest clean lap." },
    de: { objective: "Wähle eine kurze Rennstrecke, die du kennst. Fahre drei Runden mit demselben Fahrzeug und ohne Setup-Änderungen.", completion: "Behalte die schnellste saubere Runde." },
  },
  "destruction-break": {
    en: { objective: "Open a game with a large destructible object in reach. Commit to bringing that one target down.", completion: "Destroy it." },
    de: { objective: "Öffne ein Spiel mit einem großen zerstörbaren Objekt in Reichweite. Konzentriere dich darauf, genau dieses Ziel zu Fall zu bringen.", completion: "Zerstöre es." },
  },
  "rhythm-release": {
    en: { objective: "Open a rhythm game and choose one difficulty you can sustain. Play three tracks without changing it.", completion: "Finish all three." },
    de: { objective: "Öffne ein Rhythmusspiel und wähle einen Schwierigkeitsgrad, den du halten kannst. Spiele drei Songs, ohne ihn zu ändern.", completion: "Beende alle drei." },
  },
  "short-rogue-run": {
    en: { objective: "Start a fresh run in a game with clean resets. Accept the first build you receive and keep moving.", completion: "Play to the natural end." },
    de: { objective: "Starte einen frischen Run in einem Spiel mit klaren Neustarts. Akzeptiere den ersten Build und bleib in Bewegung.", completion: "Spiele bis zum natürlichen Ende." },
  },
  "parkour-route": {
    en: { objective: "Choose one area built for expressive movement. Cross it while deliberately using three different traversal moves.", completion: "Reach the other side." },
    de: { objective: "Wähle einen Bereich für ausdrucksstarke Bewegung. Durchquere ihn bewusst mit drei unterschiedlichen Fortbewegungstechniken.", completion: "Erreiche die andere Seite." },
  },
  "arena-sprint": {
    en: { objective: "Open the game with the fastest available competitive queue. Enter the first match without warming up elsewhere.", completion: "Finish the result." },
    de: { objective: "Öffne das Spiel mit der schnellsten verfügbaren Wettkampf-Warteschlange. Tritt ohne Aufwärmen dem ersten Match bei.", completion: "Beende das Ergebnis." },
  },
  "combo-chase": {
    en: { objective: "Choose a game that counts combos and record your first attempt. Try to beat that exact count twice.", completion: "Finish three attempts." },
    de: { objective: "Wähle ein Spiel mit Kombo-Zähler und notiere deinen ersten Versuch. Versuche diesen Wert zweimal zu schlagen.", completion: "Beende drei Versuche." },
  },
  "chase-sequence": {
    en: { objective: "Open a game with a chase you can reach quickly. Enter the chase and commit until it resolves.", completion: "Escape or catch the target." },
    de: { objective: "Öffne ein Spiel mit einer schnell erreichbaren Verfolgungsjagd. Starte die Verfolgung und bleib bis zur Entscheidung dabei.", completion: "Entkomme oder fange das Ziel." },
  },
  "boss-now": {
    en: { objective: "Open a save with a boss already nearby. Go directly to the arena without changing your build first.", completion: "Win or make three full attempts." },
    de: { objective: "Öffne einen Spielstand mit einem Boss in der Nähe. Geh direkt zur Arena, ohne vorher deinen Build zu ändern.", completion: "Gewinne oder unternimm drei vollständige Versuche." },
  },
  "sports-quarter": {
    en: { objective: "Open one sports game and start its shortest complete format. Keep the normal clock and current roster.", completion: "Finish the period or match." },
    de: { objective: "Öffne ein Sportspiel und starte sein kürzestes vollständiges Format. Behalte die normale Uhr und den aktuellen Kader.", completion: "Beende den Abschnitt oder das Match." },
  },
  "flight-loop": {
    en: { objective: "Choose a game that lets you take off immediately. Plan one short route and leave the ground.", completion: "Land safely." },
    de: { objective: "Wähle ein Spiel, in dem du sofort abheben kannst. Plane eine kurze Route und verlasse den Boden.", completion: "Lande sicher." },
  },
  "vehicle-switch-off": {
    en: { objective: "Pick one vehicle and set a destination you can reach with it. Stay inside that vehicle for the whole journey.", completion: "Arrive." },
    de: { objective: "Wähle ein Fahrzeug und setze ein Ziel, das du damit erreichen kannst. Bleib während der ganzen Reise darin.", completion: "Komm an." },
  },
  "swarm-clear": {
    en: { objective: "Open a game with a full enemy wave ready. Enter the encounter and clear every target on screen.", completion: "Finish the wave." },
    de: { objective: "Öffne ein Spiel mit einer vollständigen Gegnerwelle. Betritt die Begegnung und beseitige jedes Ziel auf dem Bildschirm.", completion: "Beende die Welle." },
  },
  "timed-objective": {
    en: { objective: "Choose one challenge with a visible countdown. Start the timed objective immediately and follow its clock to the result.", completion: "Clear it or make three attempts." },
    de: { objective: "Wähle eine Herausforderung mit sichtbarem Countdown. Starte die zeitbegrenzte Aufgabe sofort und folge ihrer Uhr bis zum Ergebnis.", completion: "Schaffe sie oder unternimm drei Versuche." },
  },
  "movement-only-win": {
    en: { objective: "Choose one activity where positioning matters. Keep your current gear and solve the problem through movement alone.", completion: "Finish the result." },
    de: { objective: "Wähle eine Aktivität, in der Positionierung zählt. Behalte deine Ausrüstung und löse das Problem nur durch Bewegung.", completion: "Erreiche ein endgültiges Ergebnis und akzeptiere es." },
  },
  "loudest-game": {
    en: { objective: "Open the game with the soundtrack that feels most physical. Make the music central and start one energetic activity.", completion: "Reach the activity's ending." },
    de: { objective: "Öffne das Spiel mit dem körperlichsten Soundtrack. Stell die Musik in den Mittelpunkt und starte eine energiegeladene Aktivität.", completion: "Erreiche das Ende der Aktivität." },
  },
  "quick-reaction": {
    en: { objective: "Choose a fast game and enter its first challenge without warming up. Trust your first reactions.", completion: "Finish one full result." },
    de: { objective: "Wähle ein schnelles Spiel und geh ohne Aufwärmen in die erste Herausforderung. Vertraue deinen ersten Reaktionen.", completion: "Erreiche ein endgültiges Ergebnis und akzeptiere es." },
  },
  "vertical-climb": {
    en: { objective: "Open a world with a high landmark you can already see. Climb toward it without using fast travel.", completion: "Reach the higher view." },
    de: { objective: "Öffne eine Welt mit einem hohen Orientierungspunkt, den du schon sehen kannst. Klettere ohne Schnellreise dorthin.", completion: "Erreiche die höhere Aussicht." },
  },
  "trick-session": {
    en: { objective: "Choose one trick you have never landed cleanly. Practice it in the same spot until it becomes repeatable.", completion: "Land it three times." },
    de: { objective: "Wähle einen Trick, den du noch nie sauber geschafft hast. Übe ihn am selben Ort, bis er wiederholbar wird.", completion: "Lande ihn dreimal." },
  },
  "rapid-puzzle": {
    en: { objective: "Open a puzzle game that keeps moving while you think. Start one board and commit to its pace.", completion: "Clear the board." },
    de: { objective: "Öffne ein Rätselspiel, das sich während des Denkens weiterbewegt. Starte ein Feld und akzeptiere sein Tempo.", completion: "Schließe das Feld ab." },
  },
  "aggressive-route": {
    en: { objective: "Choose one objective that rewards forward pressure. Take the direct route and refuse every optional detour.", completion: "Reach the objective." },
    de: { objective: "Wähle ein Ziel, das Vorwärtsdruck belohnt. Nimm den direkten Weg und lehne jeden optionalen Umweg ab.", completion: "Erreiche das Ziel." },
  },
  "mech-weight": {
    en: { objective: "Choose the heaviest machine you can control in one game. Use the heavy vehicle for one complete job without switching.", completion: "Finish the job." },
    de: { objective: "Wähle die schwerste Maschine, die du in einem Spiel steuern kannst. Nutze das schwere Fahrzeug für einen ganzen Auftrag ohne Wechsel.", completion: "Beende den Auftrag." },
  },
  "crowd-route": {
    en: { objective: "Choose one crowded area and cross it on foot. Avoid collisions and do not start a fight.", completion: "Reach the far side." },
    de: { objective: "Wähle einen überfüllten Bereich und durchquere ihn zu Fuß. Vermeide Zusammenstöße und beginne keinen Kampf.", completion: "Erreiche die andere Seite." },
  },
  "streak-attempt": {
    en: { objective: "Open a game with short results and aim for a streak of three. Keep the same option between attempts.", completion: "Win or clear three in a row." },
    de: { objective: "Öffne ein Spiel mit kurzen Ergebnissen und ziele auf eine Dreierserie. Behalte zwischen den Versuchen dieselbe Option.", completion: "Gewinne oder schaffe drei in Folge." },
  },
  "escape-the-hub": {
    en: { objective: "Open a save currently sitting at its safe hub. Leave immediately and follow the first unplanned landmark you notice.", completion: "Reach the unplanned landmark." },
    de: { objective: "Öffne einen Spielstand an seiner sicheren Basis. Verlasse sie sofort und folge dem ersten ungeplanten Orientierungspunkt, der dir auffällt.", completion: "Erreiche den ungeplanten Orientierungspunkt." },
  },
  "one-life-motion": {
    en: { objective: "Start one run that ends when you stop moving. Keep going without pausing or hiding in a safe spot.", completion: "Reach the natural end." },
    de: { objective: "Starte einen Run, der endet, wenn du nicht weiterkommst. Bleib ohne Pause oder Versteck in Bewegung.", completion: "Erreiche das natürliche Ende." },
  },
  "role-with-tempo": {
    en: { objective: "Join one team activity and choose the role that sets its pace. Initiate each clear opportunity instead of waiting.", completion: "Finish the team result." },
    de: { objective: "Tritt einer Teamaktivität bei und wähle die Rolle, die ihr Tempo bestimmt. Eröffne jede klare Gelegenheit, statt zu warten.", completion: "Beende das Teamergebnis." },
  },
  "physical-finish": {
    en: { objective: "Open a game that asks you to move your body. Start one complete routine at a comfortable intensity.", completion: "Finish the routine and notice how your body feels afterward." },
    de: { objective: "Öffne ein Spiel, das deinen Körper in Bewegung bringt. Starte eine vollständige Routine mit angenehmer Intensität.", completion: "Beende die Routine und achte darauf, wie sich dein Körper danach anfühlt." },
  },
  "restless-landing": {
    en: { objective: "Choose one fast activity that ends at a calm screen. Spend your energy on it without starting a second one.", completion: "Return somewhere safe." },
    de: { objective: "Wähle eine schnelle Aktivität, die an einem ruhigen Bildschirm endet. Gib deine Energie dafür aus und starte keine zweite.", completion: "Kehre an einen sicheren Ort zurück." },
  },
  "restless-twin-stick": {
    en: { objective: "Open a twin-stick game and enter one arena. Keep moving around its outer edge while clearing enemies.", completion: "Clear the arena." },
    de: { objective: "Öffne ein Twin-Stick-Spiel und betritt eine Arena. Bleib am äußeren Rand in Bewegung, während du Gegner beseitigst.", completion: "Säubere die Arena." },
  },
  "restless-hack-and-slash": {
    en: { objective: "Choose one combat room in a hack-and-slash game. Keep the same weapon until every enemy is gone.", completion: "Clear the room." },
    de: { objective: "Wähle einen Kampfraum in einem Hack-and-Slash-Spiel. Behalte dieselbe Waffe, bis jeder Gegner besiegt ist.", completion: "Säubere den Raum." },
  },
  "restless-pinball-table": {
    en: { objective: "Choose one pinball table and play exactly three balls. Learn its main shot instead of switching tables.", completion: "Record the best score." },
    de: { objective: "Wähle einen Flippertisch und spiele genau drei Kugeln. Lerne seinen wichtigsten Schuss, statt den Tisch zu wechseln.", completion: "Halte den besten Punktestand fest." },
  },
  "restless-skate-line": {
    en: { objective: "Choose three nearby landmarks in a trick game. Link them into one continuous line without stopping.", completion: "Land the full line." },
    de: { objective: "Wähle drei nahe Orientierungspunkte in einem Trickspiel. Verbinde sie ohne Pause zu einer durchgehenden Linie.", completion: "Lande die ganze Linie." },
  },
  "restless-beat-em-up": {
    en: { objective: "Open a beat-'em-up and choose one stage. Keep the same character from its opening to the boss.", completion: "Clear the stage." },
    de: { objective: "Öffne ein Beat-'em-up und wähle eine Stage. Behalte vom Anfang bis zum Boss dieselbe Figur.", completion: "Schließe die Stage ab." },
  },
  "restless-rts-rush": {
    en: { objective: "Start one real-time strategy skirmish with an early attack in mind. Build only what that pressure plan needs.", completion: "Finish the match." },
    de: { objective: "Starte ein Echtzeitstrategie-Gefecht mit einem frühen Angriff im Kopf. Baue nur, was dieser Druckplan braucht.", completion: "Beende das Match." },
  },
  "single-campaign-thread": {
    en: { objective: "Open a campaign with an active main quest. Follow that quest alone and ignore every new side marker.", completion: "Finish its next named step." },
    de: { objective: "Öffne eine Kampagne mit einer aktiven Hauptquest. Folge nur ihr und ignoriere jeden neuen Nebenmarker.", completion: "Beende ihren nächsten benannten Schritt." },
  },
  "deep-puzzle": {
    en: { objective: "Return to one hard puzzle you have not solved. Reconstruct what you know and test one idea at a time.", completion: "Solve it or leave one new theory." },
    de: { objective: "Kehre zu einem schweren ungelösten Rätsel zurück. Rekonstruiere dein Wissen und teste jeweils eine Idee.", completion: "Löse es oder hinterlasse eine neue Theorie." },
  },
  "boss-study": {
    en: { objective: "Choose one nearby boss and spend the first attempts observing. Name three attack patterns before chasing the win.", completion: "Answer all three or win." },
    de: { objective: "Wähle einen nahen Boss und beobachte in den ersten Versuchen. Benenne drei Angriffsmuster, bevor du den Sieg jagst.", completion: "Beantworte alle drei oder gewinne." },
  },
  "build-one-function": {
    en: { objective: "Open a building game and name one output you need. Build a complete system that produces only that output.", completion: "Run one stable cycle." },
    de: { objective: "Öffne ein Bauspiel und benenne einen benötigten Ausgang. Baue ein vollständiges System, das nur dieses Ergebnis erzeugt.", completion: "Lass einen stabilen Zyklus laufen." },
  },
  "achievement-line": {
    en: { objective: "Open a game with one achievement that has several clear steps. Follow its checklist without pursuing other rewards.", completion: "Unlock it or finish all reachable steps." },
    de: { objective: "Öffne ein Spiel mit einem Achievement aus mehreren klaren Schritten. Folge seiner Liste und ignoriere andere Belohnungen.", completion: "Schalte es frei oder erledige alle erreichbaren Schritte." },
  },
  "chapter-with-notes": {
    en: { objective: "Open a story game at the start of a chapter. Read every line and keep your attention on that chapter alone.", completion: "Reach its ending." },
    de: { objective: "Öffne ein Story-Spiel am Anfang eines Kapitels. Lies jede Zeile und bleib nur bei diesem Kapitel.", completion: "Erreiche sein Ende." },
  },
  "one-deck-session": {
    en: { objective: "Choose one ready card deck and lock it before playing. Learn from its weaknesses instead of editing between results.", completion: "Finish three matches or one run." },
    de: { objective: "Wähle ein fertiges Kartendeck und sperre es vor dem Spiel. Lerne aus seinen Schwächen, statt es zwischen Ergebnissen zu ändern.", completion: "Beende drei Matches oder einen Run." },
  },
  "one-character-session": {
    en: { objective: "Pick one playable character before entering the next activity. Keep that character for every round.", completion: "Reach the activity's ending." },
    de: { objective: "Wähle vor der nächsten Aktivität genau eine spielbare Figur. Behalte sie für jede Runde.", completion: "Erreiche das Ende der Aktivität." },
  },
  "collectible-set": {
    en: { objective: "Open a save with one small collectible set already partly complete. Search only for the missing items in that set.", completion: "Find them all." },
    de: { objective: "Öffne einen Spielstand mit einem kleinen, teilweise vollständigen Sammelset. Suche nur nach den fehlenden Teilen dieses Sets.", completion: "Finde sie alle." },
  },
  "route-mastery": {
    en: { objective: "Choose one repeatable route and run it three times. Focus each attempt on improving the same weak section.", completion: "Complete all three." },
    de: { objective: "Wähle eine wiederholbare Route und spiele sie dreimal. Verbessere bei jedem Versuch dieselbe schwache Passage.", completion: "Beende alle drei." },
  },
  "skill-lab": {
    en: { objective: "Choose one move you can isolate in training. Perform it correctly ten times, then enter real play.", completion: "Use it once in context." },
    de: { objective: "Wähle eine Technik, die du im Training isolieren kannst. Führe sie zehnmal korrekt aus und geh dann ins echte Spiel.", completion: "Nutze sie einmal im Kontext." },
  },
  "one-city-block": {
    en: { objective: "Choose one bounded city block and define its purpose. Complete that block without expanding beyond its edge.", completion: "Make it functional." },
    de: { objective: "Wähle einen klar begrenzten Stadtblock und bestimme seinen Zweck. Stelle ihn fertig, ohne über seinen Rand hinauszubauen.", completion: "Mach ihn funktionsfähig." },
  },
  "questline-only": {
    en: { objective: "Choose one named questline and pin its next step. Follow only that thread, even when new quests appear.", completion: "Finish two steps." },
    de: { objective: "Wähle eine benannte Questreihe und markiere ihren nächsten Schritt. Folge nur diesem Strang, auch wenn neue Quests erscheinen.", completion: "Beende zwei Schritte." },
  },
  "ranked-set": {
    en: { objective: "Choose one learning goal before entering competitive play. Keep that goal through three complete results.", completion: "Finish all three." },
    de: { objective: "Wähle ein Lernziel, bevor du kompetitiv spielst. Behalte dieses Ziel über drei vollständige Ergebnisse hinweg.", completion: "Beende alle drei." },
  },
  "craft-one-object": {
    en: { objective: "Choose one useful object you can craft from start to finish. Gather only its required parts.", completion: "Craft and use it." },
    de: { objective: "Wähle einen nützlichen Gegenstand, den du vollständig herstellen kannst. Sammle nur seine benötigten Teile.", completion: "Stelle und nutze ihn." },
  },
  "photo-one-subject": {
    en: { objective: "Choose one visual subject and photograph it from five distinct angles. Do not switch subjects halfway through.", completion: "Keep one final image." },
    de: { objective: "Wähle ein visuelles Motiv und fotografiere es aus fünf unterschiedlichen Winkeln. Wechsle das Motiv nicht.", completion: "Behalte ein finales Bild." },
  },
  "strategy-one-plan": {
    en: { objective: "State one strategy before the next complete match. Follow that plan through setbacks instead of changing direction.", completion: "Reach the result." },
    de: { objective: "Benenne vor dem nächsten vollständigen Match eine Strategie. Folge diesem Plan trotz Rückschlägen, statt die Richtung zu wechseln.", completion: "Erreiche das Ergebnis." },
  },
  "language-immersion": {
    en: { objective: "Open one story case and commit to every spoken and written clue. Pause when needed instead of skipping.", completion: "Finish the case." },
    de: { objective: "Öffne einen Story-Fall und konzentriere dich auf jeden gesprochenen und geschriebenen Hinweis. Pausiere bei Bedarf, statt zu überspringen.", completion: "Beende den Fall." },
  },
  "save-rescue": {
    en: { objective: "Open one complex save you no longer understand. Identify your location, resources, and immediate goal before acting.", completion: "Finish one task and save a next step." },
    de: { objective: "Öffne einen komplexen Spielstand, den du nicht mehr verstehst. Bestimme Ort, Ressourcen und nächstes Ziel, bevor du handelst.", completion: "Beende eine Aufgabe und speichere einen nächsten Schritt." },
  },
  "economy-balance": {
    en: { objective: "Open one economy with a resource currently running short. Fix that flow without expanding the system.", completion: "Keep every critical resource nonnegative for a full cycle." },
    de: { objective: "Öffne eine Wirtschaft mit einer aktuell knappen Ressource. Repariere diesen Fluss, ohne das System zu vergrößern.", completion: "Halte alle wichtigen Ressourcen einen Zyklus lang positiv." },
  },
  "one-dungeon": {
    en: { objective: "Choose one bounded dungeon and prepare before entering. Stay inside until you reach its designed endpoint.", completion: "Reach the exit or boss result." },
    de: { objective: "Wähle einen klar begrenzten Dungeon und bereite dich vor dem Eintritt vor. Bleib darin bis zu seinem vorgesehenen Endpunkt.", completion: "Erreiche Ausgang oder Bossergebnis." },
  },
  "single-soundscape": {
    en: { objective: "Choose one atmospheric location and turn your attention to environmental sound. Cross it without using music as a cue.", completion: "Reach the far side." },
    de: { objective: "Wähle einen atmosphärischen Ort und konzentriere dich auf Umgebungsgeräusche. Durchquere ihn, ohne Musik als Hinweis zu nutzen.", completion: "Erreiche die andere Seite." },
  },
  "one-conversation-tree": {
    en: { objective: "Choose one character you want to understand better. Read their current record, then start the next available conversation.", completion: "Finish that conversation." },
    de: { objective: "Wähle eine Figur, die du besser verstehen möchtest. Lies ihren aktuellen Eintrag und starte dann das nächste verfügbare Gespräch.", completion: "Beende dieses Gespräch." },
  },
  "precision-score": {
    en: { objective: "Choose one number the game measures and ignore every other statistic. Make three attempts focused only on that value.", completion: "Improve it." },
    de: { objective: "Wähle einen Messwert des Spiels und ignoriere jede andere Statistik. Unternimm drei Versuche nur für diesen Wert.", completion: "Verbessere ihn." },
  },
  "map-pocket": {
    en: { objective: "Choose one small unfamiliar region on a map. Find its entrances, one landmark, and a safe exit.", completion: "Map all three." },
    de: { objective: "Wähle eine kleine unbekannte Region auf einer Karte. Finde ihre Eingänge, einen Orientierungspunkt und einen sicheren Ausgang.", completion: "Kartiere alle drei." },
  },
  "system-experiment": {
    en: { objective: "Choose one visible system and change a single input. Leave every other variable untouched while it runs.", completion: "Observe one full response cycle." },
    de: { objective: "Wähle ein sichtbares System und ändere genau einen Eingang. Lass jede andere Variable unverändert, während es läuft.", completion: "Beobachte einen vollständigen Reaktionszyklus." },
  },
  "one-room-makeover": {
    en: { objective: "Choose one unfinished room and define what it should feel like. Complete it without touching another space.", completion: "Finish the room." },
    de: { objective: "Wähle einen unfertigen Raum und bestimme, wie er sich anfühlen soll. Stelle ihn fertig, ohne einen anderen Bereich anzufassen.", completion: "Beende den Raum." },
  },
  "credits-push": {
    en: { objective: "Open a campaign already close to its ending. Follow the main path and refuse every new optional task.", completion: "Reach the credits." },
    de: { objective: "Öffne eine Kampagne, die ihrem Ende bereits nahe ist. Folge dem Hauptweg und lehne jede neue optionale Aufgabe ab.", completion: "Erreiche die Credits." },
  },
  "manual-mastery": {
    en: { objective: "Choose one system explained inside the game. Read its full tutorial, then use it without reopening the instructions.", completion: "Make it work once." },
    de: { objective: "Wähle ein System, das im Spiel erklärt wird. Lies das ganze Tutorial und nutze es danach ohne erneutes Nachschlagen.", completion: "Bring es einmal zum Funktionieren." },
  },
  "focus-cooldown": {
    en: { objective: "Choose one named task before opening your save. Finish only that task, then write down the next action.", completion: "Save and close." },
    de: { objective: "Wähle eine benannte Aufgabe, bevor du den Spielstand öffnest. Beende nur sie und notiere danach die nächste Aktion.", completion: "Speichere und schließe." },
  },
  "focused-grand-strategy-turn": {
    en: { objective: "Open a complex strategy position and choose one economic goal. Resolve the next turn entirely around that goal.", completion: "Finish the turn." },
    de: { objective: "Öffne eine komplexe Strategieposition und wähle ein wirtschaftliches Ziel. Richte den nächsten Zug vollständig danach aus.", completion: "Beende den Zug." },
  },
  "focused-factory-bottleneck": {
    en: { objective: "Find one factory line that keeps stopping. Trace it backward to the first shortage and fix only that bottleneck.", completion: "Run a full continuous cycle." },
    de: { objective: "Finde eine Fabriklinie, die immer wieder stoppt. Verfolge sie bis zum ersten Mangel zurück und behebe nur diesen Engpass.", completion: "Lass einen vollständigen Zyklus ohne Stopp laufen." },
  },
  "focused-flight-procedure": {
    en: { objective: "Choose one complete vehicle route and follow its normal procedure. Perform every step from departure to safe arrival.", completion: "Finish the route." },
    de: { objective: "Wähle eine vollständige Fahrzeugroute und folge ihrem normalen Verfahren. Führe jeden Schritt vom Start bis zur sicheren Ankunft aus.", completion: "Beende die Route." },
  },
  "focused-detective-case": {
    en: { objective: "Open one unresolved detective case and review its evidence once. Follow the strongest lead without changing cases.", completion: "Submit one accusation." },
    de: { objective: "Öffne einen ungelösten Detektivfall und prüfe seine Beweise einmal. Folge der stärksten Spur, ohne den Fall zu wechseln.", completion: "Reiche eine Beschuldigung ein." },
  },
  "focused-rhythm-set": {
    en: { objective: "Choose one grouped set in a rhythm game. Lock one difficulty and play every song in order.", completion: "Finish the full set." },
    de: { objective: "Wähle ein zusammengehöriges Set in einem Rhythmusspiel. Lege eine Schwierigkeit fest und spiele jeden Song der Reihe nach.", completion: "Beende das ganze Set." },
  },
  "focused-speedrun-segment": {
    en: { objective: "Choose one short speedrun segment and define its correct route. Repeat the whole segment without changing the plan.", completion: "Finish three clean runs." },
    de: { objective: "Wähle ein kurzes Speedrun-Segment und lege seine richtige Route fest. Wiederhole den ganzen Abschnitt ohne Planänderung.", completion: "Beende drei saubere Runs." },
  },
  "strangest-installed": {
    en: { objective: "Find the installed game whose cover explains the least. Launch the strangest-covered game without reading its store description.", completion: "Reach its first clear goal." },
    de: { objective: "Finde das installierte Spiel, dessen Cover am wenigsten erklärt. Starte das Spiel mit dem seltsamsten Cover ohne Shop-Beschreibung.", completion: "Erreiche sein erstes klares Ziel." },
  },
  "untried-mechanic": {
    en: { objective: "Choose a game built around an action you rarely use. Start the activity that teaches that action directly.", completion: "Use it to finish the activity." },
    de: { objective: "Wähle ein Spiel mit einer Aktion, die du selten nutzt. Starte die Aktivität, die diese Aktion direkt vermittelt.", completion: "Beende damit die Aktivität." },
  },
  "genre-hybrid": {
    en: { objective: "Open a game that combines two ideas you would not normally pair. Play until both affect the same decision.", completion: "Reach that moment." },
    de: { objective: "Öffne ein Spiel, das zwei normalerweise getrennte Ideen verbindet. Spiele, bis beide dieselbe Entscheidung beeinflussen.", completion: "Erreiche diesen Moment." },
  },
  "unknown-developer": {
    en: { objective: "Choose one installed game from a developer you have never played. Start that unknown developer's game without checking their other work.", completion: "Reach a clear stopping point." },
    de: { objective: "Wähle ein installiertes Spiel eines Entwicklers, den du noch nie gespielt hast. Starte das Spiel des unbekannten Studios, ohne weitere Werke anzusehen.", completion: "Erreiche einen klaren Haltepunkt." },
  },
  "physics-question": {
    en: { objective: "Open a game with interacting physics and ask one specific 'what if' question. Build a repeatable test for it.", completion: "Observe the result." },
    de: { objective: "Öffne ein Spiel mit interagierender Physik und stelle eine konkrete Was-wäre-wenn-Frage. Baue dafür einen wiederholbaren Test.", completion: "Beobachte das Ergebnis." },
  },
  "unread-lore-object": {
    en: { objective: "Find one object whose description you previously skipped. Read it and trace its link to one named person.", completion: "Confirm the connection." },
    de: { objective: "Finde einen Gegenstand, dessen Beschreibung du bisher übersprungen hast. Lies sie und verfolge die Verbindung zu einer benannten Person.", completion: "Bestätige die Verbindung." },
  },
  "npc-routine": {
    en: { objective: "Choose one non-player character with a visible routine. Follow them without interfering until their route repeats.", completion: "Observe the full loop." },
    de: { objective: "Wähle eine Nichtspielerfigur mit sichtbarer Routine. Folge ihr ohne Eingriff, bis sich ihr Weg wiederholt.", completion: "Beobachte den ganzen Ablauf." },
  },
  "alternate-camera": {
    en: { objective: "Open a familiar game and switch to a viewpoint you never use. Keep the alternate camera for one complete activity.", completion: "Reach the activity's ending." },
    de: { objective: "Öffne ein vertrautes Spiel und wechsle zu einer Perspektive, die du nie nutzt. Behalte die ungewohnte Kamera für eine ganze Aktivität.", completion: "Erreiche das Ende der Aktivität." },
  },
  "procedural-surprise": {
    en: { objective: "Generate a new world and accept the first seed. Follow the first unusual feature you notice.", completion: "Reach one unique landmark." },
    de: { objective: "Erzeuge eine neue Welt und akzeptiere den ersten Seed. Folge der ersten ungewöhnlichen Besonderheit, die dir auffällt.", completion: "Erreiche einen einzigartigen Ort." },
  },
  "community-mod": {
    en: { objective: "Choose one community-made variation for a familiar game. Start where its change is easiest to notice.", completion: "Finish one changed activity." },
    de: { objective: "Wähle eine Community-Variante für ein vertrautes Spiel. Starte dort, wo ihre Änderung am leichtesten zu erkennen ist.", completion: "Beende eine veränderte Aktivität." },
  },
  "accessibility-transform": {
    en: { objective: "Open a familiar game and enable one accessibility option you have never tried. Keep the unfamiliar accessibility option active for one activity.", completion: "Reach the activity's ending." },
    de: { objective: "Öffne ein vertrautes Spiel und aktiviere eine Barrierefreiheitsoption, die du noch nie probiert hast. Behalte die ungewohnte Bedienungshilfe für eine Aktivität.", completion: "Erreiche das Ende der Aktivität." },
  },
  "language-switch": {
    en: { objective: "Open a familiar story scene and switch it to another available language. Follow the scene without switching back.", completion: "Reach its ending." },
    de: { objective: "Öffne eine vertraute Story-Szene und stelle sie auf eine andere verfügbare Sprache. Folge ihr, ohne zurückzuwechseln.", completion: "Erreiche ihr Ende." },
  },
  "oldest-untouched": {
    en: { objective: "Find the game you have owned longest with no recorded playtime. Launch the oldest untouched game before reading about it.", completion: "Reach the first save point." },
    de: { objective: "Finde das Spiel, das du am längsten ohne Spielzeit besitzt. Starte das älteste unberührte Spiel, bevor du darüber liest.", completion: "Erreiche den ersten Speicherpunkt." },
  },
  "one-star-review-question": {
    en: { objective: "Return to a game you quit after a bad opening. Continue beyond the exact point where you stopped.", completion: "Reach one new mechanic." },
    de: { objective: "Kehre zu einem Spiel zurück, das du nach einem schlechten Anfang abgebrochen hast. Spiele über deinen damaligen Haltepunkt hinaus.", completion: "Erreiche eine neue Mechanik." },
  },
  "unusual-protagonist": {
    en: { objective: "Choose a game led by someone unlike your usual heroes. Follow one activity from that character's perspective.", completion: "Reach the activity's ending." },
    de: { objective: "Wähle ein Spiel mit einer Hauptfigur außerhalb deiner üblichen Heldenbilder. Folge einer Aktivität aus ihrer Perspektive.", completion: "Erreiche das Ende der Aktivität." },
  },
  "side-system": {
    en: { objective: "Open a familiar game with one deep side system you ignore. Enter that system and complete its basic loop.", completion: "Finish the loop." },
    de: { objective: "Öffne ein vertrautes Spiel mit einem tiefen Nebensystem, das du ignorierst. Betritt es und schließe seinen Grundablauf ab.", completion: "Beende den Ablauf." },
  },
  "soundtrack-before-cover": {
    en: { objective: "Preview the audio from three installed games without looking at their covers. Open the first sound that surprises you.", completion: "Reach one activity's ending." },
    de: { objective: "Höre in drei installierte Spiele hinein, ohne ihre Cover anzusehen. Öffne den ersten Klang, der dich überrascht.", completion: "Erreiche das Ende einer Aktivität." },
  },
  "forgotten-demo": {
    en: { objective: "Open a full game you once knew only as a demo. Start at the beginning and continue beyond the sampled section.", completion: "Reach new material." },
    de: { objective: "Öffne ein vollständiges Spiel, das du früher nur als Demo kanntest. Beginne am Anfang und spiele über den Demoabschnitt hinaus.", completion: "Erreiche neue Inhalte." },
  },
  "mechanic-without-tutorial": {
    en: { objective: "Choose one system whose rules can be discovered through play. Touch it before opening its explanation.", completion: "Learn one rule by experiment." },
    de: { objective: "Wähle ein System, dessen Regeln sich im Spiel entdecken lassen. Probiere es aus, bevor du seine Erklärung öffnest.", completion: "Lerne eine Regel durch Experimentieren." },
  },
  "map-edge": {
    en: { objective: "Open a world with a reachable place beyond the highlighted route. Leave the path and travel there directly.", completion: "Reach it and take a screenshot." },
    de: { objective: "Öffne eine Welt mit einem erreichbaren Ort abseits der markierten Route. Verlasse den Weg und reise direkt dorthin.", completion: "Erreiche ihn und mache einen Screenshot." },
  },
  "object-history": {
    en: { objective: "Choose one unexplained object in a detailed world. Search its immediate surroundings for three clues about its purpose.", completion: "Form one explanation." },
    de: { objective: "Wähle ein unerklärtes Objekt in einer detaillierten Welt. Suche in seiner direkten Umgebung nach drei Hinweisen auf seinen Zweck.", completion: "Formuliere eine Erklärung." },
  },
  "ruleset-random": {
    en: { objective: "Enter one unfamiliar mode before mastering its rules. Play the first result without restarting to optimize.", completion: "Finish and name the key rule." },
    de: { objective: "Betritt einen unbekannten Modus, bevor du seine Regeln meisterst. Spiele das erste Ergebnis ohne optimierenden Neustart.", completion: "Beende es und benenne die wichtigste Regel." },
  },
  "opposite-dialogue": {
    en: { objective: "Open a dialogue choice and identify your usual answer. Choose its sincere opposite and do not reload.", completion: "Accept the outcome." },
    de: { objective: "Öffne eine Dialogentscheidung und erkenne deine übliche Antwort. Wähle ihr ehrliches Gegenteil und lade nicht neu.", completion: "Akzeptiere das Ergebnis." },
  },
  "small-studio": {
    en: { objective: "Open a collection of tiny game experiments. Play the first five entries in their listed order.", completion: "Finish all five." },
    de: { objective: "Öffne eine Sammlung kleiner Spielexperimente. Spiele die ersten fünf Einträge in ihrer gelisteten Reihenfolge.", completion: "Beende alle fünf." },
  },
  "historical-setting": {
    en: { objective: "Choose a game set in a period you know little about. Start one scenario and watch for a detail unique to that era.", completion: "Identify one detail." },
    de: { objective: "Wähle ein Spiel aus einer Epoche, über die du wenig weißt. Starte ein Szenario und achte auf ein zeittypisches Detail.", completion: "Benenne ein Detail." },
  },
  "future-rule": {
    en: { objective: "Choose one science-fiction game built around impossible technology. Use that technology to solve its nearest problem.", completion: "Finish the solution." },
    de: { objective: "Wähle ein Science-Fiction-Spiel mit einer unmöglichen Technologie. Nutze sie, um das nächste Problem zu lösen.", completion: "Schließe die Lösung ab." },
  },
  "hidden-ending-door": {
    en: { objective: "Open a completed game with one reachable ending still unseen. Enter the branch leading toward that outcome.", completion: "Reach one unique scene." },
    de: { objective: "Öffne ein abgeschlossenes Spiel mit einem noch ungesehenen erreichbaren Ende. Betritt den Weg zu diesem Ergebnis.", completion: "Erreiche eine einzigartige Szene." },
  },
  "player-made-level": {
    en: { objective: "Open a familiar game with developer commentary. Start one section and listen to every note before moving on.", completion: "Finish the section." },
    de: { objective: "Öffne ein vertrautes Spiel mit Entwicklerkommentar. Starte einen Abschnitt und höre jede Notiz an, bevor du weitergehst.", completion: "Beende den Abschnitt." },
  },
  "one-system-collision": {
    en: { objective: "Choose two game systems that normally stay separate. Create one useful situation where they affect each other.", completion: "Make the interaction work." },
    de: { objective: "Wähle zwei Spielsysteme, die normalerweise getrennt bleiben. Erzeuge eine nützliche Situation, in der sie einander beeinflussen.", completion: "Bring die Interaktion zum Funktionieren." },
  },
  "curiosity-souvenir": {
    en: { objective: "Choose one visible landmark you have never reached. Travel there without changing the destination halfway.", completion: "Arrive and capture the view." },
    de: { objective: "Wähle einen sichtbaren Ort, den du noch nie erreicht hast. Reise dorthin, ohne unterwegs das Ziel zu wechseln.", completion: "Komm an und halte die Aussicht fest." },
  },
  "curious-non-euclidean": {
    en: { objective: "Open a game with space that loops impossibly. Choose one room and learn its spatial rule.", completion: "Solve the room." },
    de: { objective: "Öffne ein Spiel mit einem unmöglich wiederholten Raum. Wähle einen Raum und lerne seine räumliche Regel.", completion: "Löse den Raum." },
  },
  "curious-ecology-sim": {
    en: { objective: "Open a simulation with a living population. Change one environmental condition and leave everything else alone.", completion: "Observe a full response cycle." },
    de: { objective: "Öffne eine Simulation mit einer lebenden Population. Ändere eine Umweltbedingung und lass alles andere unverändert.", completion: "Beobachte einen vollständigen Reaktionszyklus." },
  },
  "curious-programming-game": {
    en: { objective: "Choose one problem in a programming game. Build the smallest automated solution and run it without manual correction.", completion: "Produce a correct result." },
    de: { objective: "Wähle ein Problem in einem Programmierspiel. Baue die kleinste automatische Lösung und führe sie ohne manuellen Eingriff aus.", completion: "Erzeuge ein korrektes Ergebnis." },
  },
  "curious-fmv-game": {
    en: { objective: "Open one interactive live-action story and accept its first choices. Continue without rewinding for a preferred scene.", completion: "Reach one irreversible choice." },
    de: { objective: "Öffne eine interaktive Realfilmgeschichte und akzeptiere ihre ersten Entscheidungen. Spiele ohne Zurückspulen zur Wunschszene weiter.", completion: "Erreiche eine unumkehrbare Entscheidung." },
  },
  "curious-text-experiment": {
    en: { objective: "Open a game that expresses its world mainly through words. Enter one scene and work only with the text it gives you.", completion: "Resolve the scene." },
    de: { objective: "Öffne ein Spiel, das seine Welt hauptsächlich durch Worte ausdrückt. Betritt eine Szene und arbeite nur mit ihrem Text.", completion: "Löse die Szene." },
  },
  "curious-obscure-sport": {
    en: { objective: "Choose a sports game whose rules you barely know. Play one event and watch for the rule that changes your strategy.", completion: "Finish and explain that rule." },
    de: { objective: "Wähle ein Sportspiel, dessen Regeln du kaum kennst. Spiele einen Wettbewerb und achte auf die Regel, die deine Strategie verändert.", completion: "Beende ihn und erkläre diese Regel." },
  },
  "bed-friendly": {
    en: { objective: "Choose a game comfortable with the screen and controller already in place. Start without changing your position.", completion: "Finish one short activity." },
    de: { objective: "Wähle ein Spiel, das mit deinem aktuellen Bildschirm und Controller bequem ist. Starte, ohne deine Position zu verändern.", completion: "Beende eine kurze Aktivität." },
  },
  "turns-wait": {
    en: { objective: "Open a turn-based game and choose one contained encounter. Let every turn wait until your decision feels simple.", completion: "Finish the encounter." },
    de: { objective: "Öffne ein rundenbasiertes Spiel und wähle eine begrenzte Begegnung. Lass jeden Zug warten, bis deine Entscheidung einfach wirkt.", completion: "Beende die Begegnung." },
  },
  "story-mode": {
    en: { objective: "Choose a narrative game with little execution pressure. Continue one scene and let the story carry the session.", completion: "Reach the next scene break." },
    de: { objective: "Wähle ein narratives Spiel mit wenig Ausführungsdruck. Setze eine Szene fort und lass die Geschichte die Session tragen.", completion: "Erreiche den nächsten Szenenwechsel." },
  },
  "auto-support": {
    en: { objective: "Open a game with one helpful assist and enable it without apology. Start the nearest activity.", completion: "Reach the activity's ending." },
    de: { objective: "Öffne ein Spiel mit einer hilfreichen Assistenz und aktiviere sie ohne Rechtfertigung. Starte die nächste Aktivität.", completion: "Erreiche das Ende der Aktivität." },
  },
  "one-hand-loop": {
    en: { objective: "Choose a game you can comfortably control with one hand. Start one short activity with that simple input.", completion: "Reach the activity's natural ending." },
    de: { objective: "Wähle ein Spiel, das du bequem mit einer Hand steuern kannst. Starte eine kurze Aktivität mit dieser einfachen Eingabe.", completion: "Erreiche das natürliche Ende der Aktivität." },
  },
  "visual-novel-scene": {
    en: { objective: "Open a visual novel at the start of one scene. Read every line without skipping text or voices.", completion: "Reach the scene ending." },
    de: { objective: "Öffne eine Visual Novel am Anfang einer Szene. Lies jede Zeile, ohne Text oder Stimmen zu überspringen.", completion: "Erreiche das Szenenende." },
  },
  "easy-puzzle": {
    en: { objective: "Open a puzzle game with no clock or enemies. Choose one unsolved board and take your time.", completion: "Solve it." },
    de: { objective: "Öffne ein Rätselspiel ohne Uhr oder Gegner. Wähle ein ungelöstes Feld und nimm dir Zeit.", completion: "Löse es." },
  },
  "gentle-management": {
    en: { objective: "Open one small system that already works. Perform its normal routine without expanding or optimizing it.", completion: "Finish the routine." },
    de: { objective: "Öffne ein kleines System, das bereits funktioniert. Führe seine normale Routine aus, ohne es zu erweitern oder zu optimieren.", completion: "Beende die Routine." },
  },
  "walking-only": {
    en: { objective: "Choose two safe landmarks in a familiar world. Walk between them without sprinting or fast travel.", completion: "Arrive." },
    de: { objective: "Wähle zwei sichere Orientierungspunkte in einer vertrauten Welt. Geh ohne Sprint oder Schnellreise von einem zum anderen.", completion: "Komm an." },
  },
  "familiar-save": {
    en: { objective: "Open the current save that feels most comfortable. Do one task you already understand without checking the full quest log.", completion: "Save somewhere calm." },
    de: { objective: "Öffne den aktuellen Spielstand, der sich am vertrautesten anfühlt. Erledige eine bekannte Aufgabe, ohne das ganze Questlog zu prüfen.", completion: "Speichere an einem ruhigen Ort." },
  },
  "photo-stroll": {
    en: { objective: "Open a world where looking can be the whole activity. Walk until one view makes you want to stop.", completion: "Keep one screenshot." },
    de: { objective: "Öffne eine Welt, in der Hinsehen die ganze Aktivität sein kann. Geh, bis eine Aussicht dich anhalten lässt.", completion: "Behalte einen Screenshot." },
  },
  "music-and-menu": {
    en: { objective: "Open a familiar game whose music can carry the session. Start one activity and listen to its track without interruption.", completion: "Reach the activity's ending." },
    de: { objective: "Öffne ein vertrautes Spiel, dessen Musik die Session tragen kann. Starte eine Aktivität und höre ihr Stück ohne Unterbrechung.", completion: "Erreiche das Ende der Aktivität." },
  },
  "no-failure-mode": {
    en: { objective: "Choose a mode where failure costs almost nothing. Start one activity and accept the first honest result.", completion: "Reach the activity's ending." },
    de: { objective: "Wähle einen Modus, in dem Scheitern fast nichts kostet. Starte eine Aktivität und akzeptiere das erste ehrliche Ergebnis.", completion: "Erreiche das Ende der Aktivität." },
  },
  "one-day-sim": {
    en: { objective: "Open a simulation with daily cycles and begin a fresh morning. Follow the day's normal routine without adding projects.", completion: "Save at bedtime." },
    de: { objective: "Öffne eine Simulation mit Tageszyklen und beginne einen neuen Morgen. Folge der normalen Routine, ohne Projekte hinzuzufügen.", completion: "Speichere zur Schlafenszeit." },
  },
  "short-episode": {
    en: { objective: "Choose a story game divided into short episodes. Start the next unfinished episode and nothing else.", completion: "Reach its ending." },
    de: { objective: "Wähle ein Story-Spiel mit kurzen Episoden. Starte nur die nächste unfertige Episode.", completion: "Erreiche ihr Ende." },
  },
  "cozy-craft": {
    en: { objective: "Choose one useful item with a simple recipe. Gather only nearby materials and make that item.", completion: "Use or place it." },
    de: { objective: "Wähle einen nützlichen Gegenstand mit einem einfachen Rezept. Sammle nur nahe Materialien und stelle ihn her.", completion: "Nutze oder platziere ihn." },
  },
  "home-base-only": {
    en: { objective: "Open a save with one useful task available entirely from its home menu. Complete it without entering a mission.", completion: "Leave the menu finished." },
    de: { objective: "Öffne einen Spielstand mit einer nützlichen Aufgabe direkt im Basismenü. Erledige sie, ohne eine Mission zu betreten.", completion: "Verlasse das Menü fertig." },
  },
  "ambient-company": {
    en: { objective: "Open a calm world that can run around you. Choose one gentle activity and let the background systems continue.", completion: "Reach the activity's ending." },
    de: { objective: "Öffne eine ruhige Welt, die um dich herum weiterlaufen kann. Wähle eine sanfte Aktivität und lass die Hintergrundsysteme arbeiten.", completion: "Erreiche das Ende der Aktivität." },
  },
  "one-conversation": {
    en: { objective: "Choose one familiar character with something new to say. Stay in that conversation without opening another quest.", completion: "Reach its natural close." },
    de: { objective: "Wähle eine vertraute Figur mit etwas Neuem zu sagen. Bleib in diesem Gespräch, ohne eine andere Quest zu öffnen.", completion: "Erreiche seinen natürlichen Abschluss." },
  },
  "slow-vehicle": {
    en: { objective: "Choose one vehicle that can carry you at a steady pace. Set one destination and avoid every speed boost.", completion: "Arrive." },
    de: { objective: "Wähle ein Fahrzeug, das dich in gleichmäßigem Tempo trägt. Setze ein Ziel und vermeide jeden Geschwindigkeitsschub.", completion: "Komm an." },
  },
  "known-puzzle-type": {
    en: { objective: "Open a puzzle whose rules you already know. Choose the first unsolved board and trust your familiar method.", completion: "Solve it." },
    de: { objective: "Öffne ein Rätsel, dessen Regeln du bereits kennst. Wähle das erste ungelöste Feld und vertraue deiner vertrauten Methode.", completion: "Löse es." },
  },
  "supportive-role": {
    en: { objective: "Join one team activity and choose its clearest support role. Help teammates succeed without taking the lead.", completion: "Finish the team result." },
    de: { objective: "Tritt einer Teamaktivität bei und wähle ihre klarste Unterstützungsrolle. Hilf Mitspielern zum Erfolg, ohne die Führung zu übernehmen.", completion: "Beende das Teamergebnis." },
  },
  "collect-nearby": {
    en: { objective: "Open a save with collectibles near your current position. Gather the nearest three without entering another region.", completion: "Collect all three." },
    de: { objective: "Öffne einen Spielstand mit Sammelobjekten nahe deiner Position. Hole die nächsten drei, ohne eine andere Region zu betreten.", completion: "Sammle alle drei." },
  },
  "default-everything": {
    en: { objective: "Open a familiar game exactly as it is configured. Start the nearest activity without changing settings or gear.", completion: "Reach the activity's ending." },
    de: { objective: "Öffne ein vertrautes Spiel genau mit seiner aktuellen Konfiguration. Starte die nächste Aktivität ohne Änderungen an Einstellungen oder Ausrüstung.", completion: "Erreiche das Ende der Aktivität." },
  },
  "replay-favorite-level": {
    en: { objective: "Choose one easy level whose layout you remember. Replay the familiar level without hunting secrets or a better score.", completion: "Reach its ending." },
    de: { objective: "Wähle ein leichtes Level, dessen Aufbau du kennst. Spiele das vertraute Level ohne Geheimnis- oder Rekordjagd erneut.", completion: "Erreiche sein Ende." },
  },
  "gentle-weather": {
    en: { objective: "Choose one safe scenic place in a familiar world. Sit there and let the environment change around you.", completion: "Stay through one full change." },
    de: { objective: "Wähle einen sicheren schönen Ort in einer vertrauten Welt. Bleib dort sitzen und lass die Umgebung sich verändern.", completion: "Bleib durch eine vollständige Veränderung." },
  },
  "watch-systems": {
    en: { objective: "Open one working simulation and observe it before touching anything. Make only the single adjustment it most clearly needs.", completion: "Watch one full cycle." },
    de: { objective: "Öffne eine laufende Simulation und beobachte sie, bevor du etwas berührst. Nimm nur die eine klar nötige Anpassung vor.", completion: "Beobachte einen vollständigen Zyklus." },
  },
  "old-tutorial-area": {
    en: { objective: "Return to the safest opening area in a familiar game. Stay inside its boundary and do one nearby task.", completion: "Finish the task." },
    de: { objective: "Kehre zum sichersten Anfangsbereich eines vertrauten Spiels zurück. Bleib innerhalb seiner Grenze und erledige eine nahe Aufgabe.", completion: "Beende die Aufgabe." },
  },
  "low-reading": {
    en: { objective: "Choose a game you can read through shapes and movement. Start one level and follow only its visual cues.", completion: "Finish the level." },
    de: { objective: "Wähle ein Spiel, das du über Formen und Bewegung lesen kannst. Starte ein Level und folge nur seinen visuellen Hinweisen.", completion: "Beende das Level." },
  },
  "energy-honest-exit": {
    en: { objective: "Open any familiar game and choose the nearest safe stopping point. Make that point enough for today.", completion: "Save and stop." },
    de: { objective: "Öffne ein vertrautes Spiel und wähle den nächsten sicheren Haltepunkt. Lass diesen Punkt für heute genug sein.", completion: "Speichere und höre auf." },
  },
  "low-energy-idle-check-in": {
    en: { objective: "Open one idle game that has progressed without you. Collect what is waiting and buy one useful upgrade.", completion: "Leave it running or saved." },
    de: { objective: "Öffne ein Idle Game, das ohne dich weitergelaufen ist. Sammle den wartenden Fortschritt ein und kaufe ein nützliches Upgrade.", completion: "Lass es weiterlaufen oder speichere." },
  },
  "low-energy-hidden-object": {
    en: { objective: "Open one hidden-object scene and inspect it from edge to edge. Work through the required list in order.", completion: "Find every object." },
    de: { objective: "Öffne eine Wimmelbildszene und untersuche sie von Rand zu Rand. Arbeite die benötigte Liste der Reihe nach ab.", completion: "Finde jedes Objekt." },
  },
  "low-energy-solitaire": {
    en: { objective: "Open one digital solitaire game and accept the first deal. Play the hand without restarting for a better layout.", completion: "Reach its result." },
    de: { objective: "Öffne ein digitales Solitaire-Spiel und akzeptiere die erste Verteilung. Spiele sie ohne Neustart für eine bessere Lage.", completion: "Erreiche ihr Ergebnis." },
  },
  "low-energy-auto-battler": {
    en: { objective: "Open an auto-battler and set one lineup before combat. Let it resolve without changing the team mid-fight.", completion: "Finish the round." },
    de: { objective: "Öffne einen Auto-Battler und stelle vor dem Kampf eine Aufstellung fest. Lass ihn ohne Teamwechsel im Kampf laufen.", completion: "Beende die Runde." },
  },
  "low-energy-walking-story": {
    en: { objective: "Open a walking story with little danger. Continue the current path and let the next scene come to you.", completion: "Reach the next chapter break." },
    de: { objective: "Öffne eine Walking Story mit wenig Gefahr. Folge dem aktuellen Weg und lass die nächste Szene zu dir kommen.", completion: "Erreiche den nächsten Kapitelwechsel." },
  },
  "low-energy-jrpg-turns": {
    en: { objective: "Open a turn-based role-playing save with a nearby encounter. Take each turn without speeding through animations.", completion: "Win and save safely." },
    de: { objective: "Öffne einen rundenbasierten Rollenspielstand mit einer nahen Begegnung. Nimm jeden Zug, ohne Animationen zu beschleunigen.", completion: "Gewinne und speichere sicher." },
  },
};
