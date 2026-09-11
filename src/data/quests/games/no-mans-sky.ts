import { defineGameQuests } from "../defineGameQuests";

export const noMansSkyQuests = defineGameQuests("no-mans-sky", [
  {
    "id": "planet-field-card",
    "moods": [
      "create",
      "focused"
    ],
    "type": "creation",
    "tags": [
      "photography",
      "exploration"
    ],
    "minutes": 20,
    "minimum": 2,
    "en": {
      "name": "Planet Field Card",
      "objective": "On a planet with land animals in **No Man’s Sky**, scan an unfamiliar animal, plant, and mineral. **Save a photo of the animal in its habitat and upload the three discoveries**."
    },
    "de": {
      "name": "Steckbrief eines Planeten",
      "objective": "Scanne in **No Man’s Sky** auf einem Planeten mit Landtieren ein unbekanntes Tier, eine Pflanze und ein Mineral. **Fotografiere das Tier in seinem Lebensraum und lade die drei Entdeckungen hoch**."
    }
  },
  {
    "id": "salvage-repair",
    "moods": [
      "progress",
      "focused"
    ],
    "type": "objective",
    "tags": [
      "crafting"
    ],
    "minutes": 25,
    "minimum": 2,
    "en": {
      "name": "Back in Service",
      "objective": "Use a crashed ship you already claimed in **No Man’s Sky**. Pick one damaged slot with materials available nearby. **Gather or refine those materials and repair the slot**, buying no supplies."
    },
    "de": {
      "name": "Wieder einsatzbereit",
      "objective": "Nimm in **No Man’s Sky** ein bereits beanspruchtes Schiffswrack. Wähle einen beschädigten Platz, dessen Materialien in der Nähe verfügbar sind. **Sammle oder veredle sie und repariere den Platz**, ohne Vorräte zu kaufen."
    }
  },
  {
    "id": "new-companion",
    "moods": [
      "relax",
      "explore"
    ],
    "type": "inspiration",
    "tags": [
      "animals",
      "exploration"
    ],
    "minutes": 20,
    "minimum": 1,
    "en": {
      "name": "New Travel Buddy",
      "objective": "On a planet in **No Man’s Sky**, bring Creature Pellets and spend time with the animals you meet. Feed an approachable creature and see whether you want it along for your travels; adoption is optional."
    },
    "de": {
      "name": "Neue Reisebegleitung",
      "objective": "Nimm in **No Man’s Sky** Kreaturenpellets mit auf einen Planeten und beschäftige dich mit den Tieren, denen du begegnest. Füttere ein zutrauliches Wesen und schau, ob du es auf Reisen dabeihaben möchtest. Du musst es nicht adoptieren."
    }
  },
  {
    "id": "cronus-tasting",
    "moods": [
      "curious",
      "create"
    ],
    "type": "experiment",
    "tags": [
      "cooking"
    ],
    "minutes": 20,
    "minimum": 2,
    "en": {
      "name": "For the Cook",
      "objective": "With a Nutrient Processor and Anomaly access in **No Man’s Sky**, cook a dish from ingredients you already own. **Offer a serving to Cronus and hear his verdict**. No particular rating is required."
    },
    "de": {
      "name": "Für den Koch",
      "objective": "Koche in **No Man’s Sky** mit einem Nährstoffprozessor ein Gericht aus vorhandenen Zutaten; du brauchst Zugang zur Anomalie. **Gib Cronus eine Portion und hör dir sein Urteil an**. Eine bestimmte Bewertung ist nicht nötig."
    }
  },
  {
    "id": "seafood-supper",
    "moods": [
      "relax",
      "progress"
    ],
    "type": "objective",
    "tags": [
      "fishing",
      "cooking"
    ],
    "minutes": 20,
    "minimum": 2,
    "en": {
      "name": "Today's Catch",
      "objective": "Bring a Fishing Rig and Nutrient Processor to the coast in **No Man’s Sky**. Catch a fish the processor accepts, then **cook and eat one serving from that catch**."
    },
    "de": {
      "name": "Frisch gefangen",
      "objective": "Nimm in **No Man’s Sky** Angelausrüstung und Nährstoffprozessor mit zur Küste. Fange einen Fisch, den der Prozessor annimmt, und **koche und iss eine Portion aus diesem Fang**."
    }
  },
  {
    "id": "exocraft-recovery",
    "moods": [
      "restless",
      "explore"
    ],
    "type": "objective",
    "tags": [
      "driving",
      "exploration"
    ],
    "minutes": 20,
    "minimum": 2,
    "en": {
      "name": "Ground Crew",
      "objective": "With an Exocraft ready in **No Man’s Sky**, mark a nearby Buried Technology Module with your visor. Drive there, dig up the Salvaged Data, and **return to your ship in the same Exocraft** without summoning either vehicle."
    },
    "de": {
      "name": "Bodenteam",
      "objective": "Markiere in **No Man’s Sky** mit dem Visier ein nahes vergrabenes Technologiemodul; dein Exofahrzeug muss bereitstehen. Fahre hin, grabe die geborgenen Daten aus und **kehre im selben Exofahrzeug zum Schiff zurück**, ohne ein Fahrzeug herbeizurufen."
    }
  }
]);
