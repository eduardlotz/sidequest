import { defineGameQuests } from "../defineGameQuests";

export const cyberpunkQuests = defineGameQuests("cyberpunk-2077", [
  {
    id: "borrowed-eyes", moods: ["focused", "challenge"], minutes: 25, sources: ["cyberpunk-ghost"],
    en: { name: "Borrowed Eyes", objective: "In **Cyberpunk 2077**, with a cyberdeck, choose an open theft gig with usable cameras. Scout through them, then **steal the target and get out unseen**, using devices to distract guards. No kills or knockouts; being spotted or hurting a guard restarts the attempt." },
    de: { name: "Fremde Augen", objective: "Nimm in **Cyberpunk 2077** mit einem Cyberdeck einen offenen Diebstahl-Auftrag mit nutzbaren Kameras. Spähe durch sie aus, lenke Wachen mit Geräten ab und **stiehl das Ziel und verschwinde ungesehen**. Keine Tötungen oder K.-o.-Schläge; Entdeckung oder verletzte Wachen starten den Versuch neu." },
  },
  {
    id: "turret-shift", moods: ["challenge", "restless"], minutes: 20, sources: ["cyberpunk-ghost"],
    en: { name: "Turret Shift", objective: "In **Cyberpunk 2077**, find a hostile site with a turret your cyberdeck can control. Stay behind cover and **defeat three enemies using only the turret**, then leave its camera view and get out. Do not fire your own weapons." },
    de: { name: "Geschützdienst", objective: "Such in **Cyberpunk 2077** einen feindlichen Ort mit einem Geschütz, das dein Cyberdeck steuern kann. Bleib in Deckung und **besiege drei Gegner nur mit dem Geschütz**. Verlasse danach die Kameraansicht und verschwinde. Deine eigenen Waffen bleiben weg." },
  },
  {
    id: "roach-race-evening", moods: ["nostalgic", "low-energy"], minutes: 15,
    en: { name: "One More Credit", objective: "In **Cyberpunk 2077**, sit down at a Roach Race arcade machine. Play one run to set today's score, then **finish two more runs trying to beat it**. End at the third game-over screen, even if the first score still wins." },
    de: { name: "Noch eine Runde", objective: "Setz dich in **Cyberpunk 2077** an einen Roach-Race-Automaten. Spiele einen Run für deinen heutigen Punktestand und **beende zwei weitere Runs, um ihn zu schlagen**. Nach dem dritten Game-over ist Schluss, auch wenn der erste Punktestand vorne bleibt." },
  },
  {
    id: "nibbles-portrait", moods: ["create", "low-energy"], minutes: 10,
    en: { name: "Nibbles Gets a Shot", objective: "In **Cyberpunk 2077**, once Nibbles has moved into your apartment, add the cat in Photo Mode. Frame V and Nibbles together with a Night City sign in the background, then **save the photo with both faces visible**." },
    de: { name: "Nibbles im Bild", objective: "Sobald Nibbles in **Cyberpunk 2077** bei dir eingezogen ist, füge die Katze im Fotomodus hinzu. Nimm V und Nibbles mit einem Schild aus Night City im Hintergrund auf. **Speichere das Foto so, dass beide Gesichter zu sehen sind**." },
  },
  {
    id: "metro-postcards", moods: ["explore", "relax"], minutes: 20,
    en: { name: "Metro Postcards", objective: "In **Cyberpunk 2077**, after getting your NCART pass, ride the metro for two stops without skipping the ride. Leave at the second stop and **save a street-level photo showing the station you arrived at**." },
    de: { name: "Postkarte aus der Metro", objective: "Fahre in **Cyberpunk 2077** mit freigeschaltetem NCART-Pass zwei Haltestellen mit der Metro, ohne die Fahrt zu überspringen. Steige am zweiten Halt aus und **speichere ein Foto von der Straße, auf dem die Station zu sehen ist**." },
  },
  {
    id: "night-city-uniform", moods: ["create", "relax"], minutes: 15,
    en: { name: "District Uniform", objective: "In **Cyberpunk 2077**, look at three NPC outfits in your current district. Use your apartment wardrobe to build an outfit that shares a color with all three, then **save it and photograph V back in that district**." },
    de: { name: "Outfit fürs Viertel", objective: "Schau dir in **Cyberpunk 2077** drei NPC-Outfits in deinem Viertel an. Stelle am Kleiderschrank ein Outfit zusammen, das mit allen dreien eine Farbe teilt. **Speichere es und fotografiere V damit wieder im Viertel**." },
  },
  {
    id: "return-to-sender", moods: ["challenge", "focused"], minutes: 20,
    en: { name: "Return to Sender", objective: "In **Cyberpunk 2077**, with Bullet Deflect unlocked and a blade equipped, **defeat three gun-carrying enemies using only their reflected bullets**. Do not swing, shoot, or use damage quickhacks. Dealing damage another way restarts the count." },
    de: { name: "Zurück an Absender", objective: "Wenn du in **Cyberpunk 2077** Kugeln mit einer Klinge zurücklenken kannst, **besiege drei Gegner mit Schusswaffen nur mit ihren zurückgelenkten Kugeln**. Keine Schläge, Schüsse oder Schadens-Quickhacks. Schaden auf andere Weise setzt den Zähler zurück." },
  },
  {
    id: "reginas-patient", moods: ["progress", "focused"], minutes: 25,
    en: { name: "Alive for Regina", objective: "In **Cyberpunk 2077**, track an unfinished Cyberpsycho Sighting. Keep the target alive, stop attacking as soon as they fall, and read the clues at the scene. **Send Regina the report that closes the job**." },
    de: { name: "Lebend für Regina", objective: "Verfolge in **Cyberpunk 2077** eine offene Cyberpsycho-Sichtung. Lass das Ziel am Leben, höre sofort auf anzugreifen, sobald es fällt, und lies die Hinweise am Ort. **Schicke Regina den Bericht, der den Auftrag abschließt**." },
  },
  {
    id: "air-dash-route", moods: ["restless", "challenge"], minutes: 15,
    en: { name: "Above the Traffic", objective: "In **Cyberpunk 2077**, with Air Dash unlocked, find three nearby rooftop gaps you can safely cross. **Cross all three with air dashes and return over the same gaps**. Touching the street restarts the route." },
    de: { name: "Über dem Verkehr", objective: "Such in **Cyberpunk 2077** mit freigeschaltetem Luft-Dash drei nahe Dachlücken, die du sicher überqueren kannst. **Überwinde alle drei mit Luft-Dashes und kehre über dieselben Lücken zurück**. Berührst du die Straße, beginnt die Strecke neu." },
  },
  {
    id: "clean-car-contract", moods: ["focused", "progress"], minutes: 20,
    en: { name: "Not a Scratch", objective: "In **Cyberpunk 2077: Phantom Liberty**, once vehicle contracts are unlocked, take one of El Capitan's marked cars. **Deliver it without hitting another vehicle or using vehicle weapons**. Lose any pursuers before approaching the drop-off." },
    de: { name: "Kein Kratzer", objective: "Sobald Fahrzeugaufträge in **Cyberpunk 2077: Phantom Liberty** freigeschaltet sind, nimm eines von El Capitans markierten Autos. **Liefere es ohne Zusammenstoß mit anderen Fahrzeugen und ohne Fahrzeugwaffen ab**. Hänge Verfolger vor dem Ziel ab." },
  },
  {
    id: "device-decoy", moods: ["curious", "focused"], minutes: 15, sources: ["cyberpunk-ghost"],
    en: { name: "Wrong Way", objective: "In **Cyberpunk 2077**, use your cyberdeck's device distractions to move three different guards away from the doors they watch. **Walk through each cleared doorway unseen**, without hacking the guards themselves or taking them down." },
    de: { name: "Falsche Richtung", objective: "Lenke in **Cyberpunk 2077** mit deinem Cyberdeck drei verschiedene Wachen durch Geräte von ihren bewachten Türen weg. **Gehe ungesehen durch jede frei gewordene Tür**, ohne die Wachen selbst zu hacken oder auszuschalten." },
  },
  {
    id: "tarot-on-foot", moods: ["curious", "explore"], minutes: 20,
    en: { name: "Cards on the Wall", objective: "In **Cyberpunk 2077**, once tarot graffiti appears on your map, walk to the nearest unscanned card. Scan it, read its entry, then **save a photo that includes the whole mural and V**. Use no vehicle or fast travel." },
    de: { name: "Karten an der Wand", objective: "Sobald Tarot-Graffiti in **Cyberpunk 2077** auf der Karte erscheint, gehe zur nächsten noch nicht gescannten Karte. Scanne sie und lies den Eintrag. **Speichere ein Foto mit dem ganzen Graffiti und V**, ohne Fahrzeug oder Schnellreise zu nutzen." },
  },
]);
