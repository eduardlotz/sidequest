import { defineGameQuests } from "../defineGameQuests";

export const animalCrossingQuests = defineGameQuests("animal-crossing", [
  {
    id: "new-horizons-diy-outdoors",
    moods: ["progress", "curious"],
    type: "objective",
    tags: ["crafting", "decorating"],
    minutes: 20,
    minimum: 3,
    en: {
      name: "Made for Outside",
      objective: "In **Animal Crossing: New Horizons**, choose a known DIY recipe for furniture you can place outside. Gather any missing materials on your island, **craft the item and place it near your home**.",
    },
    de: {
      name: "Für draußen gemacht",
      objective: "Wähle in **Animal Crossing: New Horizons** eine bekannte Bastelanleitung für ein Möbelstück, das draußen stehen kann. Sammle fehlende Materialien auf deiner Insel, **stell das Stück her und platziere es in der Nähe deines Hauses**.",
    },
  },
  {
    id: "new-horizons-path-home",
    moods: ["create", "focused"],
    type: "creation",
    tags: ["building", "decorating"],
    minutes: 25,
    minimum: 5,
    en: {
      name: "A Path Home",
      objective: "In **Animal Crossing: New Horizons**, with Island Designer unlocked, pick two nearby places you visit often. **Lay a path connecting them and walk its full length**. Keep the route short enough to finish in one session.",
    },
    de: {
      name: "Ein Weg nach Hause",
      objective: "Wähle in **Animal Crossing: New Horizons** mit freigeschalteter Insel-Designer-App zwei nahe Orte, die du oft besuchst. **Verlege einen Weg zwischen ihnen und geh ihn komplett ab**. Halte die Strecke kurz genug für eine Sitzung.",
    },
  },
  {
    id: "new-horizons-mystery-island-find",
    moods: ["explore", "curious"],
    type: "objective",
    tags: ["exploration", "collectibles"],
    minutes: 25,
    minimum: 5,
    en: {
      name: "Island Souvenir",
      objective: "In **Animal Crossing: New Horizons**, with a house and a Nook Miles Ticket you already have, fly to a mystery island. Explore it, **bring home some materials gathered there, and put them in home storage**.",
    },
    de: {
      name: "Souvenir von der Insel",
      objective: "Wenn du in **Animal Crossing: New Horizons** schon ein Haus und ein Meilenticket hast, flieg auf eine Überraschungsinsel. Erkunde sie, **bring ein paar dort gesammelte Materialien nach Hause und verstaue sie im Haus**.",
    },
  },
]);
