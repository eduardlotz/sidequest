import { defineGameQuests } from "../defineGameQuests";

export const noMansSkyQuests = defineGameQuests("no-mans-sky", [
  {
    id: "salvage-repair", moods: ["progress", "focused"], minutes: 30, sources: ["nms-player-rules"],
    en: { name: "Back in Service", objective: "In **No Man's Sky**, use a crashed ship you have already claimed. Pick one damaged slot whose materials you can gather nearby. **Repair that slot using only materials gathered or refined this trip**, without buying supplies." },
    de: { name: "Wieder einsatzbereit", objective: "Nimm in **No Man's Sky** ein bereits beanspruchtes Schiffswrack. Wähle einen beschädigten Platz, dessen Materialien du in der Nähe sammeln kannst. **Repariere ihn nur mit auf diesem Ausflug gesammelten oder veredelten Materialien**, ohne Vorräte zu kaufen." },
  },
  {
    id: "buried-freighter", moods: ["explore", "curious"], minutes: 25, sources: ["nms-player-rules"],
    en: { name: "Under the Wreck", objective: "At a crashed freighter you have found in **No Man's Sky**, use the Terrain Manipulator to uncover a buried cargo container. Gather its needed repair materials nearby, then **open the container and bring its contents back to your ship**." },
    de: { name: "Unter dem Wrack", objective: "Lege bei einem entdeckten Frachterwrack in **No Man's Sky** mit dem Terrainmanipulator einen vergrabenen Frachtbehälter frei. Sammle die nötigen Reparaturmaterialien in der Nähe. **Öffne den Behälter und bring seinen Inhalt zu deinem Schiff**." },
  },
  {
    id: "new-companion", moods: ["relax", "explore"], minutes: 20,
    en: { name: "New Travel Buddy", objective: "In **No Man's Sky**, with Creature Pellets and a free companion slot, feed a land animal that offers adoption. **Adopt it, give it a name, and save a photo of you together beside your ship**. Leave the other animals alone." },
    de: { name: "Neue Reisebegleitung", objective: "Füttere in **No Man's Sky** mit Kreaturenpellets ein Landtier, das du adoptieren kannst; du brauchst einen freien Begleiterplatz. **Adoptiere es, gib ihm einen Namen und speichere ein gemeinsames Foto neben deinem Schiff**. Lass die anderen Tiere in Ruhe." },
  },
  {
    id: "cronus-tasting", moods: ["curious", "create"], minutes: 25,
    en: { name: "For the Cook", objective: "In **No Man's Sky**, with a Nutrient Processor and Anomaly access, gather ingredients for one cooking recipe you know. Cook it yourself, then **take one serving to Cronus on the Anomaly and have him judge it**." },
    de: { name: "Für den Koch", objective: "Wenn du in **No Man's Sky** einen Nährstoffprozessor und Zugang zur Anomalie hast, sammle Zutaten für ein bekanntes Kochrezept. Koche es selbst und **lass Cronus auf der Anomalie eine Portion bewerten**." },
  },
  {
    id: "night-power", moods: ["create", "focused"], minutes: 30,
    en: { name: "After Sunset", objective: "At a base in **No Man's Sky**, with solar panels, batteries, and a teleporter unlocked, build a solar-powered teleporter with battery storage. Charge it during daylight, then **use it after sunset and teleport back to your base**." },
    de: { name: "Nach Sonnenuntergang", objective: "Baue an einer Basis in **No Man's Sky** mit freigeschalteten Solarmodulen, Batterien und Teleporter einen solarbetriebenen Teleporter mit Batteriespeicher. Lade ihn tagsüber auf. **Nutze ihn nach Sonnenuntergang und teleportiere zurück zur Basis**." },
  },
  {
    id: "alien-conversation", moods: ["curious", "low-energy"], minutes: 15,
    en: { name: "Try the New Words", objective: "On a space station in **No Man's Sky**, ask three aliens of the same race for a new word. Then find one who offers language practice and **finish one practice conversation using the words you can now recognize**." },
    de: { name: "Neue Wörter testen", objective: "Bitte auf einer Raumstation in **No Man's Sky** drei Aliens derselben Spezies um ein neues Wort. Suche danach jemanden, der Sprachübungen anbietet, und **beende ein Übungsgespräch mit den Wörtern, die du jetzt erkennst**." },
  },
  {
    id: "buried-blueprint", moods: ["progress", "explore"], minutes: 25,
    en: { name: "Dig to Build", objective: "In **No Man's Sky**, pin a building blueprint you can buy with Salvaged Data. Dig up enough Buried Technology Modules to buy it, then **unlock the blueprint and build its first copy at your base**. Use no stored Salvaged Data." },
    de: { name: "Graben und Bauen", objective: "Markiere in **No Man's Sky** einen Bauplan, den du mit geborgenen Daten kaufen kannst. Grabe genug vergrabene Technologiemodule aus. **Schalte den Plan frei und baue das erste Exemplar an deiner Basis**. Nutze keine gelagerten geborgenen Daten." },
  },
  {
    id: "trade-manifest", moods: ["focused", "curious"], minutes: 25,
    en: { name: "One Cargo Run", objective: "In **No Man's Sky**, with warp travel ready, buy one stack of trade goods whose description names a buyer economy. Find a system with that economy and **sell the stack there for more than you paid**. Carry only that trade cargo." },
    de: { name: "Eine Frachtfahrt", objective: "Kaufe in **No Man's Sky** mit einsatzbereitem Warpantrieb einen Stapel Handelswaren, dessen Beschreibung eine Käuferwirtschaft nennt. Finde ein System mit dieser Wirtschaft und **verkaufe den Stapel dort teurer als beim Einkauf**. Nimm keine andere Handelsfracht mit." },
  },
  {
    id: "derelict-records", moods: ["challenge", "curious"], minutes: 30,
    en: { name: "The Crew's Story", objective: "In **No Man's Sky**, use a derelict freighter you can already access. Recover its Crew Manifest and Captain's Log while reading the crew records along the way. **Turn both documents in to a Guild Envoy** after leaving the wreck." },
    de: { name: "Geschichte der Crew", objective: "Betritt in **No Man's Sky** einen bereits zugänglichen verlassenen Frachter. Berge Mannschaftsliste und Kapitänslogbuch und lies unterwegs die Aufzeichnungen der Crew. **Gib beide Dokumente nach der Rückkehr bei einem Gildengesandten ab**." },
  },
  {
    id: "seafood-supper", moods: ["relax", "progress"], minutes: 25,
    en: { name: "Today's Catch", objective: "In **No Man's Sky**, bring your fishing rig and Nutrient Processor to the coast. Catch a fish accepted by a seafood recipe you know, then **cook and eat one serving made from that catch**. Do not use fish from storage." },
    de: { name: "Frisch gefangen", objective: "Nimm in **No Man's Sky** deine Angelausrüstung und den Nährstoffprozessor mit zur Küste. Fange einen Fisch für ein bekanntes Fischrezept. **Koche und iss eine Portion aus diesem Fang**. Fische aus dem Lager zählen nicht." },
  },
  {
    id: "exocraft-recovery", moods: ["restless", "explore"], minutes: 25, sources: ["nms-player-rules"],
    en: { name: "Ground Crew", objective: "In **No Man's Sky**, with an Exocraft ready, mark a Buried Technology Module at least 500 units from your ship. Drive there, recover its Salvaged Data, and **return to the ship by Exocraft without summoning either vehicle**." },
    de: { name: "Bodenteam", objective: "Markiere in **No Man's Sky** mit einsatzbereitem Exofahrzeug ein vergrabenes Technologiemodul mindestens 500 Einheiten vom Schiff entfernt. Fahre hin, berge die Daten und **kehre im Exofahrzeug zurück, ohne ein Fahrzeug herbeizurufen**." },
  },
  {
    id: "farm-module", moods: ["create", "overwhelmed"], minutes: 20,
    en: { name: "One Crop Room", objective: "In **No Man's Sky**, with indoor farming unlocked, build a small room at your base for four powered Hydroponic Trays. **Plant the same unlocked crop in all four trays**, add a light, and leave the rest of the base as it is." },
    de: { name: "Ein Pflanzraum", objective: "Baue in **No Man's Sky** mit freigeschaltetem Innenanbau einen kleinen Raum für vier mit Strom versorgte Hydrokulturtröge. **Pflanze in alle vier dieselbe freigeschaltete Pflanze**, bring Licht an und lass den Rest der Basis so, wie er ist." },
  },
]);
