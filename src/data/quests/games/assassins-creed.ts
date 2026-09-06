import { defineGameQuests } from "../defineGameQuests";

export const assassinsCreedQuests = defineGameQuests("assassins-creed", [
  {
    id: "haystack-exit", installments: ["ac-ii"], moods: ["focused", "challenge"], minutes: 15, sources: ["ac-stealth-rules"],
    en: { name: "Haystack Exit", objective: "In **Assassin's Creed II**, with the Hidden Blade unlocked, hide in a haystack beside a guard's route. **Pull one guard into the hay, then blend into a crowd and leave unseen**. Drawing a weapon in open combat restarts the attempt." },
    de: { name: "Aus dem Heu", objective: "Verstecke dich in **Assassin's Creed II** mit freigeschalteter versteckter Klinge in einem Heuhaufen an der Route einer Wache. **Zieh eine Wache ins Heu und verschwinde ungesehen in der Menge**. Offener Kampf startet den Versuch neu." },
  },
  {
    id: "recruit-first-outing", installments: ["ac-brotherhood"], moods: ["progress", "connect"], minutes: 25,
    en: { name: "First Assignment", objective: "In **Assassin's Creed Brotherhood**, after recruitment unlocks, rescue one marked citizen and recruit them. Once Assassin assistance is ready, **call a recruit to take down a guard while you stay hidden**, then leave the area." },
    de: { name: "Erster Einsatz", objective: "Rette in **Assassin's Creed Brotherhood** nach Freischaltung der Rekrutierung einen markierten Bürger und wirb ihn an. Sobald Unterstützung bereit ist, **lass einen Rekruten eine Wache ausschalten, während du versteckt bleibst**. Verlasse danach den Bereich." },
  },
  {
    id: "hookblade-circuit", installments: ["ac-revelations"], moods: ["restless", "nostalgic"], minutes: 15,
    en: { name: "Hookblade Circuit", objective: "In **Assassin's Creed Revelations**, with the Hookblade unlocked, link two rooftop ziplines into one route. **Ride both and return to your starting roof without touching the street**. Use climbing and roof jumps to join the route." },
    de: { name: "Runde mit Hakenklinge", objective: "Verbinde in **Assassin's Creed Revelations** mit freigeschalteter Hakenklinge zwei Seilrutschen auf den Dächern zu einer Strecke. **Nutze beide und kehre zum Startdach zurück, ohne die Straße zu berühren**. Klettern und Dachsprünge verbinden den Weg." },
  },
  {
    id: "frontier-shadow", installments: ["ac-iii"], moods: ["explore", "focused"], minutes: 20,
    en: { name: "Through the Trees", objective: "As Connor in **Assassin's Creed III**, find a Frontier patrol beside climbable trees. **Follow it past three trees from above without being seen**, then drop into dense bushes and leave without starting a fight." },
    de: { name: "Durch die Bäume", objective: "Such als Connor in **Assassin's Creed III** eine Patrouille im Grenzland neben erkletterbaren Bäumen. **Folge ihr von oben an drei Bäumen vorbei, ohne entdeckt zu werden**. Spring danach ins dichte Gebüsch und verschwinde ohne Kampf." },
  },
  {
    id: "deck-to-deck", installments: ["ac-black-flag"], moods: ["restless", "challenge"], minutes: 25,
    en: { name: "Deck to Deck", objective: "In **Assassin's Creed IV: Black Flag**, with the Jackdaw unlocked, disable one enemy schooner. Swing aboard on a rope and **finish its boarding goals using swords and the Hidden Blade only**. Do not use swivel guns or pistols during boarding." },
    de: { name: "Von Deck zu Deck", objective: "Setze in **Assassin's Creed IV: Black Flag** mit freigeschalteter Jackdaw einen feindlichen Schoner außer Gefecht. Schwing dich am Seil an Bord und **erfülle die Enterziele nur mit Schwertern und versteckter Klinge**. Keine Drehbassen oder Pistolen beim Entern." },
  },
  {
    id: "phantom-distraction", installments: ["ac-unity"], moods: ["curious", "focused"], minutes: 15, sources: ["ac-stealth-rules"],
    en: { name: "Their Problem", objective: "In **Assassin's Creed Unity**, with berserk blades unlocked, hit one guard in a guarded courtyard with a berserk blade. **Cross the courtyard during the distraction and leave unseen**, without attacking anyone else." },
    de: { name: "Ihr Problem", objective: "Triff in **Assassin's Creed Unity** mit freigeschalteten Berserkerklingen eine Wache in einem bewachten Hof. **Durchquere den Hof während der Ablenkung und verschwinde ungesehen**, ohne weitere Gegner anzugreifen." },
  },
  {
    id: "walking-arrest", installments: ["ac-syndicate"], moods: ["challenge", "focused"], minutes: 25,
    en: { name: "Just Keep Walking", objective: "In **Assassin's Creed Syndicate**, start an available Bounty Hunt with kidnapping unlocked. **Walk the target into a carriage without alarming nearby people**, then deliver them alive. If the escort turns into a fight, restart the attempt." },
    de: { name: "Einfach weitergehen", objective: "Starte in **Assassin's Creed Syndicate** mit freigeschalteter Entführung eine verfügbare Kopfgeldjagd. **Führe das Ziel zu einer Kutsche, ohne Leute in der Nähe zu alarmieren**, und liefere es lebend ab. Wird die Begleitung zum Kampf, starte den Versuch neu." },
  },
  {
    id: "oil-and-arrow", installments: ["ac-origins"], moods: ["curious", "challenge"], minutes: 20,
    en: { name: "Oil and Arrow", objective: "In **Assassin's Creed Origins**, find an enemy camp with an oil jar you can move. Place it on a guard's path, light an arrow at a flame, and **use the burning oil to defeat that guard**, without hitting them directly." },
    de: { name: "Öl und Pfeil", objective: "Such in **Assassin's Creed Origins** ein feindliches Lager mit einem beweglichen Ölkrug. Stelle ihn auf den Weg einer Wache, entzünde einen Pfeil an einer Flamme und **besiege die Wache mit dem brennenden Öl**, ohne sie direkt zu treffen." },
  },
  {
    id: "wolf-company", installments: ["ac-odyssey"], moods: ["explore", "relax"], minutes: 20,
    en: { name: "Wolf Company", objective: "In **Assassin's Creed Odyssey**, with Beast Master unlocked and no animal companion, find an ordinary wolf. Knock it out without killing it, **tame it and pet it**, then walk together to the nearest road." },
    de: { name: "Mit dem Wolf", objective: "Such in **Assassin's Creed Odyssey** mit freigeschalteter Tierzähmung und ohne Tierbegleiter einen gewöhnlichen Wolf. Schlage ihn bewusstlos, ohne ihn zu töten, **zähme und streichle ihn**. Gehe danach mit ihm zur nächsten Straße." },
  },
  {
    id: "cairn-builder", installments: ["ac-valhalla"], moods: ["create", "focused"], minutes: 20,
    en: { name: "Stone by Stone", objective: "In **Assassin's Creed Valhalla**, visit the nearest unfinished cairn. **Stack the stones to the required height and confirm the cairn**, without opening a guide. If the stack falls, build again from the stones you have." },
    de: { name: "Stein für Stein", objective: "Besuche in **Assassin's Creed Valhalla** das nächste unfertige Steinmännchen. **Stapele die Steine bis zur geforderten Höhe und bestätige den Aufbau**, ohne einen Guide zu öffnen. Fällt der Stapel um, baue mit denselben Steinen neu." },
  },
  {
    id: "baghdad-purses", installments: ["ac-mirage"], moods: ["focused", "restless"], minutes: 15, sources: ["ac-stealth-rules"],
    en: { name: "Light Pockets", objective: "In **Assassin's Creed Mirage**, pickpocket three marked purses in one crowded district. **Leave with all three thefts unnoticed**, using crowds to move between targets. Being caught restarts the count; keep your usual accessibility settings." },
    de: { name: "Leichte Taschen", objective: "Stiehl in **Assassin's Creed Mirage** drei markierte Geldbeutel in einem belebten Viertel. **Verschwinde, ohne bei einem der drei Diebstähle aufzufliegen**, und bewege dich dazwischen in der Menge. Erwischtwerden setzt den Zähler zurück; behalte deine gewohnten Bedienhilfen." },
  },
  {
    id: "lights-out-naoe", installments: ["ac-shadows"], moods: ["focused", "challenge"], minutes: 20,
    en: { name: "Lights Out", objective: "As Naoe at night in **Assassin's Creed Shadows**, find a guarded courtyard with lights you can put out. **Darken a path and cross the courtyard unseen**, then climb out. Do not kill or knock out guards." },
    de: { name: "Licht aus", objective: "Such als Naoe nachts in **Assassin's Creed Shadows** einen bewachten Hof mit Lichtern, die du löschen kannst. **Verdunkle einen Weg und durchquere den Hof ungesehen**, dann klettere hinaus. Töte keine Wachen und schlage niemanden bewusstlos." },
  },
]);
