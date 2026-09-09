import { defineGameQuests } from "../defineGameQuests";

export const rocketLeagueQuests = defineGameQuests("rocket-league", [
  {
    id: "small-pad-match", moods: ["focused", "challenge"], minutes: 15, sources: ["rocket-small-pads"],
    en: { name: "Small Pads Only", objective: "In **Rocket League**, play a Soccar exhibition against bots using normal boost settings. **Finish the match collecting only small boost pads and record at least one goal or save**. Kickoff boost is allowed; touching a large pad restarts the match." },
    de: { name: "Nur kleine Pads", objective: "Spiele in **Rocket League** ein Soccar-Freundschaftsspiel gegen Bots mit normalen Boost-Einstellungen. **Beende es nur mit kleinen Boost-Pads und mindestens einem gewerteten Tor oder einer Parade**. Anstoß-Boost ist erlaubt; ein großes Pad startet das Match neu." },
  },
  {
    id: "wall-bank-goal", moods: ["curious", "challenge"], minutes: 20,
    en: { name: "Off the Wall", objective: "In **Rocket League**, start a Soccar exhibition against bots at your usual difficulty. **Score a goal by bouncing your shot off a side wall**, then finish the match. The ball must touch the wall after your shot and before entering the goal; play at most three full matches trying." },
    de: { name: "Über die Wand", objective: "Starte in **Rocket League** ein Soccar-Freundschaftsspiel gegen Bots auf deiner üblichen Schwierigkeit. **Erziele ein Tor über die Seitenwand** und beende das Match. Der Ball muss nach deinem Schuss und vor dem Tor die Wand berühren; spiele höchstens drei ganze Matches für den Versuch." },
  },
  {
    id: "back-post-route", moods: ["connect", "focused"], minutes: 15, sources: ["rocket-small-pads"],
    en: { name: "Back Post Route", objective: "In **Rocket League**, play one Casual 2v2 Soccar match. After each attack, rotate toward **the goalpost farther from the ball, collecting small pads on the way**. Do not detour for corner boost. Finish the match after using this return route at least three times." },
    de: { name: "Zum hinteren Pfosten", objective: "Spiele in **Rocket League** ein lockeres 2v2-Soccar-Match. Rotiere nach jedem Angriff **zum Torpfosten weiter weg vom Ball und sammle unterwegs kleine Pads**. Keine Umwege zum Eck-Boost. Beende das Match, nachdem du diese Rückroute mindestens dreimal genutzt hast." },
  },
]);
