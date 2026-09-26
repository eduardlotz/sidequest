import { defineGameQuests } from "../defineGameQuests";

export const animalCrossingQuests = defineGameQuests("animal-crossing", [
  {
    id: "new-leaf-town-project",
    moods: ["progress", "overwhelmed"],
    type: "objective",
    tags: ["current-save"],
    minutes: 10,
    minimum: 2,
    installments: ["new-leaf"],
    en: {
      name: "Town Project",
      objective: "In **Animal Crossing: New Leaf**, play as the mayor with a public works project already underway. Take Bells you have, **donate some to the project, and check its new remaining cost**. You can finish before the whole project is funded.",
    },
    de: {
      name: "Etwas für die Stadt",
      objective: "Spiele in **Animal Crossing: New Leaf** als Bürgermeister mit einer laufenden Stadtverschönerung. Nimm Sternis, die du schon hast, **spende etwas dafür und prüfe den neuen Restbetrag**. Der Bau muss heute nicht fertig werden.",
    },
  },
  {
    id: "new-leaf-island-tour",
    moods: ["challenge", "restless"],
    type: "challenge",
    tags: ["three-attempts"],
    minutes: 20,
    minimum: 3,
    installments: ["new-leaf"],
    en: {
      name: "Island Tour",
      objective: "In **Animal Crossing: New Leaf**, with Tortimer Island unlocked, choose an available island tour. **Earn a medal on that tour**, or stop after three attempts at the same tour. Let its own rules set the challenge.",
    },
    de: {
      name: "Inseltour",
      objective: "Wähle in **Animal Crossing: New Leaf** nach Freischaltung der Insel eine verfügbare Inseltour. **Verdiene dabei eine Medaille** oder hör nach drei Versuchen bei derselben Tour auf. Die Regeln der Tour sind deine Herausforderung.",
    },
  },
  {
    id: "new-leaf-letter-with-gift",
    moods: ["relax", "low-energy"],
    type: "objective",
    tags: ["no-timer"],
    minutes: 10,
    minimum: 2,
    installments: ["new-leaf"],
    en: {
      name: "Letter and Gift",
      objective: "In **Animal Crossing: New Leaf**, with stationery and a spare item in hand, choose a villager you have not written to lately. Write a short letter, attach the item, and **send it from the post office**.",
    },
    de: {
      name: "Brief mit Geschenk",
      objective: "Nimm in **Animal Crossing: New Leaf** Briefpapier und einen Gegenstand, den du entbehren kannst. Wähle einen Bewohner, dem du länger nicht geschrieben hast, schreib ihm einen kurzen Brief, häng den Gegenstand an und **schick den Brief von der Post aus ab**.",
    },
  },
  {
    id: "new-horizons-diy-outdoors",
    moods: ["progress", "curious"],
    type: "objective",
    tags: ["crafting", "decorating"],
    minutes: 20,
    minimum: 3,
    installments: ["new-horizons"],
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
    installments: ["new-horizons"],
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
    installments: ["new-horizons"],
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
