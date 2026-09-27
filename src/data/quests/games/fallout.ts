import { defineGameQuests } from "../defineGameQuests";

export const falloutQuests = defineGameQuests("fallout", [
  { id: "fallout4-supply-line", installments: ["fallout-4"], moods: ["progress"], type: "objective", tags: ["building"], minutes: 20, minimum: 3,
    en: { name: "Link Two Settlements", objective: "If Local Leader is unlocked, **assign a provisioner between two Fallout 4 settlements and confirm that their workshop materials are shared**." },
    de: { name: "Zwei Siedlungen verbinden", objective: "Wenn Lokaler Anführer freigeschaltet ist, **weise einen Versorger zwischen zwei Fallout-4-Siedlungen zu und prüfe, ob sie Werkstattmaterial teilen**." } },
  { id: "fallout4-suppressed-test", installments: ["fallout-4"], moods: ["curious", "focused"], type: "experiment", tags: ["crafting", "stealth"], minutes: 20, minimum: 3,
    en: { name: "Test a Suppressor", objective: "If you can craft a suppressor, **fit it to a weapon and use it in one encounter without alerting the next enemy**. Compare the noise with your usual weapon." },
    de: { name: "Schalldämpfer testen", objective: "Wenn du einen Schalldämpfer bauen kannst, **montiere ihn und nutze die Waffe in einer Begegnung, ohne den nächsten Gegner aufzuschrecken**. Vergleiche sie mit deiner üblichen Waffe." } },
  { id: "fallout4-companion-reaction", installments: ["fallout-4"], moods: ["curious"], type: "objective", tags: ["story", "dialogue"], minutes: 20, minimum: 3,
    en: { name: "What Does Your Companion Think?", objective: "Take a companion into a quest conversation and **notice one approval or disapproval reaction to the choice you make**." },
    de: { name: "Was denkt dein Begleiter?", objective: "Nimm einen Begleiter zu einem Questgespräch mit und **achte auf eine zustimmende oder ablehnende Reaktion auf deine Entscheidung**." } },
  { id: "fallout76-public-event", installments: ["fallout-76"], moods: ["restless"], type: "objective", tags: [], minutes: 20, minimum: 3,
    en: { name: "Join a Public Event", objective: "Join an active **Fallout 76 Public Event** from its map marker and help with the displayed objective. **Stay until the event result appears**, whether it succeeds or fails." },
    de: { name: "Bei einem Event mitmachen", objective: "Nimm über den Kartenmarker an einem laufenden **Fallout-76-Öffentlichen Event** teil und hilf beim angezeigten Ziel. **Bleib, bis das Event-Ergebnis erscheint**, egal ob es gelingt." } },
  { id: "fallout76-vendor-stall", installments: ["fallout-76"], moods: ["create"], type: "creation", tags: ["building", "trading"], minutes: 15, minimum: 3,
    en: { name: "Open a CAMP Stall", objective: "At your **Fallout 76 CAMP**, **place a vending machine and list one surplus item at a price you choose**." },
    de: { name: "Verkauf im CAMP", objective: "Stell in deinem **Fallout-76-CAMP** **einen Verkaufsautomaten auf und biete einen übrigen Gegenstand zu einem selbst gewählten Preis an**." } },
  { id: "fallout76-scrap-to-learn", installments: ["fallout-76"], moods: ["curious"], type: "experiment", tags: ["crafting"], minutes: 15, minimum: 3,
    en: { name: "What Scrapping Teaches", objective: "At a Fallout 76 workbench, **scrap a spare weapon and check whether it teaches a new mod** before replacing your usual gear." },
    de: { name: "Was beim Zerlegen bleibt", objective: "Zerlege an einer Fallout-76-Werkbank **eine übrige Waffe und prüfe, ob du dadurch einen neuen Aufsatz lernst**, bevor du deine Ausrüstung änderst." } },
]);
