import { defineGameQuests } from "../defineGameQuests";

// Inspired by small-day and town-errand ideas from r/StardewValley:
// https://www.reddit.com/r/StardewValley/comments/1tvq6xm/fun_challenge/
// https://www.reddit.com/r/StardewValley/comments/1ukq17k/fun_things_to_do_that_dont_progress_the_community/
export const stardewValleyQuests = defineGameQuests("stardew-valley", [
  {
    id: "one-skill-day",
    moods: ["challenge", "focused"],
    type: "challenge",
    tags: ["new-approach"],
    minutes: 25,
    minimum: 5,
    en: {
      name: "One-Skill Day",
      objective: "In **Stardew Valley**, choose fishing, farming, foraging, or mining when you wake up. Do any urgent animal or crop care, then spend the rest of the day on **only your chosen skill**. Sleep to finish the day.",
    },
    de: {
      name: "Ein Tag, ein Talent",
      objective: "Wähle in **Stardew Valley** nach dem Aufwachen Angeln, Feldarbeit, Sammeln oder Bergbau. Kümmere dich um dringende Tiere und Pflanzen. Verbringe den Rest des Tages **mit dieser einen Tätigkeit** und geh dann schlafen.",
    },
  },
  {
    id: "town-errand",
    moods: ["progress", "curious"],
    type: "objective",
    tags: ["trading", "current-save"],
    minutes: 25,
    minimum: 3,
    en: {
      name: "Town Errand",
      objective: "In **Stardew Valley**, on a day when Pierre’s Help Wanted board has a doable request, **accept and finish that one request** before its deadline.",
    },
    de: {
      name: "Auftrag im Dorf",
      objective: "Wenn in **Stardew Valley** an Pierres Schwarzem Brett ein machbarer Auftrag hängt, **nimm ihn an und erfülle genau diesen Auftrag** vor Ablauf der Frist.",
    },
  },
  {
    id: "themed-corner",
    moods: ["create", "relax"],
    type: "creation",
    tags: ["decorating"],
    minutes: 30,
    minimum: 5,
    en: {
      name: "A Little Corner",
      objective: "In **Stardew Valley**, choose one room or small farm corner. Use furniture and objects you already own to give it **one clear color or theme**, then leave the finished space in place.",
    },
    de: {
      name: "Eine kleine Ecke",
      objective: "Such dir in **Stardew Valley** ein Zimmer oder eine kleine Ecke auf dem Hof aus. **Richte sie mit vorhandenen Möbeln in einer Farbe oder einem Thema ein** und lass den Rest unverändert.",
    },
  },
  {
    id: "market-morning",
    moods: ["low-energy", "progress"],
    type: "objective",
    tags: ["farming", "trading"],
    minutes: 15,
    minimum: 2,
    en: {
      name: "Market Morning",
      objective: "In **Stardew Valley**, on a day with at least two ready crops, harvest them. Keep one crop and **sell the rest through the shipping bin**, then sleep to see the earnings.",
    },
    de: {
      name: "Marktmorgen",
      objective: "Ernte in **Stardew Valley** an einem Tag, an dem mindestens zwei Pflanzen reif sind. Behalte eine und **verkauf den Rest über die Versandkiste**. Geh schlafen und schau dir den Erlös an.",
    },
  },
]);
