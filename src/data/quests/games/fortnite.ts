import { defineGameQuests } from "../defineGameQuests";

export const fortniteQuests = defineGameQuests("fortnite", [
  {
    id: "first-gun-stays", moods: ["challenge", "overwhelmed"], minutes: 25, sources: ["fortnite-player-rules"],
    en: { name: "First Gun Stays", objective: "In **Fortnite Solo Zero Build**, keep the first firearm you pick up as your only damage-dealing item for the match. Healing, shields, ammo, and non-damaging mobility are allowed. **Reach the match result without replacing that gun**, even with a higher-rarity version; use the pickaxe only for harvesting." },
    de: { name: "Die erste bleibt", objective: "Behalte in **Fortnite Solo Null Bauen** die erste aufgesammelte Schusswaffe als einzigen Gegenstand, mit dem du Schaden verursachst. Heilung, Schilde, Munition und Fortbewegung ohne Schaden sind erlaubt. **Erreiche das Matchergebnis ohne Waffenwechsel**, auch nicht zu höherer Seltenheit; nutze die Spitzhacke nur zum Abbauen." },
  },
  {
    id: "overshield-reset", moods: ["focused", "progress"], minutes: 25,
    en: { name: "Let It Recharge", objective: "In **Fortnite Solo Zero Build**, after an opponent damages your Overshield, break line of sight and **let it fully recharge before you shoot again**. Do this once and finish the match. If eliminated before a full recharge, try again next match." },
    de: { name: "Erst wieder aufladen", objective: "Brich in **Fortnite Solo Null Bauen** den Sichtkontakt ab, sobald ein Gegner deinen Zusatzschild beschädigt. **Lass ihn vollständig aufladen, bevor du wieder schießt**. Schaffe das einmal und beende das Match. Wirst du vorher eliminiert, versuche es im nächsten Match erneut." },
  },
  {
    id: "timber-cover", moods: ["create", "focused"], minutes: 25,
    en: { name: "Timber Cover", objective: "In **Fortnite Solo Battle Royale with building enabled**, harvest wood before seeking a fight. After an opponent first shoots at you, **build a wooden wall and ramp, then land a shot from behind that cover**. Finish the match using only wood for your builds; no stone or metal structures." },
    de: { name: "Deckung aus Holz", objective: "Sammle in **Fortnite Solo Battle Royale mit Bauen** Holz, bevor du einen Kampf suchst. Sobald ein Gegner auf dich schießt, **baue eine Holzwand mit Rampe und lande einen Treffer aus dieser Deckung**. Beende das Match und baue dabei nur mit Holz; keine Stein- oder Metallbauten." },
  },
]);
