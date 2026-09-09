import { defineGameQuests } from "../defineGameQuests";

export const arcRaidersQuests = defineGameQuests("arc-raiders", [
  {
    id: "free-kit-home", moods: ["overwhelmed", "challenge"], minutes: 25, sources: ["arc-free-kit"],
    en: { name: "Keep the Free Kit", objective: "In **ARC Raiders**, select a map condition that currently allows a Free Loadout. Search the first building you reach and **extract with at least three looted items and your starting gun**. Do not visit a second building for loot. Extraction completes the quest; a lost kit starts a new attempt." },
    de: { name: "Gratis-Kit behalten", objective: "Wähle in **ARC Raiders** eine Kartenbedingung, die aktuell ein Gratis-Loadout erlaubt. Durchsuche das erste erreichte Gebäude und **extrahiere mit mindestens drei erbeuteten Gegenständen und deiner Startwaffe**. Kein zweites Gebäude zum Plündern. Die Extraktion beendet die Quest; bei Kit-Verlust beginnt ein neuer Versuch." },
  },
  {
    id: "arc-salvage", moods: ["focused", "progress"], minutes: 25,
    en: { name: "Machine Parts", objective: "In **ARC Raiders**, take your current kit to the surface and destroy one Wasp with it. **Loot the Wasp and extract with at least one item from its wreck**. Leave unopened containers alone until extraction; losing the salvage restarts the attempt." },
    de: { name: "Maschinenteile", objective: "Gehe in **ARC Raiders** mit deinem aktuellen Kit an die Oberfläche und zerstöre eine Wasp. **Plündere sie und extrahiere mit mindestens einem Gegenstand aus ihrem Wrack**. Lass ungeöffnete Behälter bis zur Extraktion in Ruhe; verlierst du die Beute, beginnt der Versuch neu." },
  },
  {
    id: "quiet-salvager", moods: ["explore", "focused"], minutes: 25, sources: ["arc-free-kit"],
    en: { name: "Quiet Salvager", objective: "In **ARC Raiders**, enter a solo raid with your usual kit. Loot three containers without firing your weapon, then **extract with their loot without firing a shot all raid**. Use cover and a different route to avoid ARC; being forced to shoot starts a new attempt." },
    de: { name: "Leise auf Beutezug", objective: "Starte in **ARC Raiders** einen Solo-Raid mit deinem üblichen Kit. Plündere drei Behälter, ohne zu schießen, und **extrahiere mit der Beute ohne einen einzigen Schuss im ganzen Raid**. Umgehe ARC mit Deckung und Umwegen; musst du schießen, beginnt ein neuer Versuch." },
  },
]);
