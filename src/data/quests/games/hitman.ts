import { defineGameQuests } from "../defineGameQuests";

const trilogy = ["hitman-1", "hitman-2", "hitman-3"];

export const hitmanQuests = defineGameQuests("hitman", [
  {
    id: "empty-pockets", installments: trilogy, moods: ["curious", "challenge"], minutes: 30, sources: ["hitman-found-equipment"],
    en: { name: "Empty Pockets", objective: "In **HITMAN 1, 2, or 3**, replay a completed campaign mission from its default starting location. Empty all loadout and smuggled-item slots. **Eliminate the targets using only equipment found on the map and exit**, without killing non-targets. Choose a mission whose mandatory objectives need no imported gear." },
    de: { name: "Leere Taschen", objective: "Wiederhole in **HITMAN 1, 2 oder 3** eine abgeschlossene Kampagnenmission am Standard-Startpunkt. Leere Ausrüstung und Schmuggelplätze. **Erledige die Ziele nur mit vor Ort gefundenen Gegenständen und verlasse die Karte**, ohne Nicht-Ziele zu töten. Wähle eine Mission, deren Pflichtziele keine mitgebrachte Ausrüstung brauchen." },
  },
  {
    id: "spare-uniform", installments: trilogy, moods: ["focused", "explore"], minutes: 30, sources: ["hitman-player-rules"],
    en: { name: "Spare Uniform", objective: "In **HITMAN 1, 2, or 3**, replay a completed campaign mission. **Use only disguises found lying on the map**, never clothes taken from a body, and do not knock out non-targets. Eliminate the targets and exit without being compromised; being compromised restarts the attempt." },
    de: { name: "Uniform vom Haken", objective: "Wiederhole in **HITMAN 1, 2 oder 3** eine abgeschlossene Kampagnenmission. **Nutze nur herumliegende Verkleidungen**, keine Kleidung von Körpern, und schlage Nicht-Ziele nicht bewusstlos. Erledige die Ziele und entkomme, ohne enttarnt zu werden; sonst beginnt der Versuch neu." },
  },
  {
    id: "arranged-accidents", installments: trilogy, moods: ["create", "focused"], minutes: 30, sources: ["hitman-player-rules"],
    en: { name: "Looks Like an Accident", objective: "In **HITMAN 1, 2, or 3**, replay a completed campaign mission where each target can die in an accident. **Eliminate every target with a staged accident and exit without killing anyone else**. Use no gunshots to trigger the accidents; set them up by hand." },
    de: { name: "Sieht nach Unfall aus", objective: "Wiederhole in **HITMAN 1, 2 oder 3** eine abgeschlossene Kampagnenmission, in der jedes Ziel durch einen Unfall sterben kann. **Erledige alle Ziele durch vorbereitete Unfälle und entkomme, ohne andere zu töten**. Löse die Unfälle nicht mit Schüssen aus, sondern bereite sie von Hand vor." },
  },
]);
