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
    "minutes": 25,
    "minimum": 5,
    "en": {
      "name": "Planet Field Card",
      "objective": "On a planet with land animals in **No Man’s Sky**, scan one unfamiliar animal, plant, and mineral. **Save a photo of the animal in its habitat** and check that all three appear in Discoveries."
    },
    "de": {
      "name": "Steckbrief eines Planeten",
      "objective": "Scanne in **No Man’s Sky** auf einem Planeten mit Landtieren ein unbekanntes Tier, eine Pflanze und ein Mineral. **Speichere ein Foto des Tiers in seinem Lebensraum** und prüfe, ob alle drei unter Entdeckungen stehen."
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
    "minutes": 30,
    "minimum": 5,
    "en": {
      "name": "Back in Service",
      "objective": "Use a crashed ship you already claimed in **No Man’s Sky**. Pick one damaged slot with materials available nearby. **Gather or refine those materials and repair the slot**, buying no supplies."
    },
    "de": {
      "name": "Wieder einsatzbereit",
      "objective": "Such dir in **No Man’s Sky** ein Schiffswrack aus, das du schon beansprucht hast. Wähle ein beschädigtes Bauteil, für das du die Materialien in der Nähe findest. **Sammle oder veredle sie und repariere das Bauteil**, ohne Vorräte zu kaufen."
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
    "minimum": 3,
    "en": {
      "name": "Meet a Creature",
      "objective": "On a planet in **No Man’s Sky**, bring Creature Pellets and spend time with the animals you meet. Feed an approachable creature and see whether you want it along for your travels. Adoption is optional."
    },
    "de": {
      "name": "Tierbegegnung",
      "objective": "Nimm in **No Man’s Sky** Kreaturenpellets mit auf einen Planeten und schau dir die Tiere an, denen du begegnest. Füttere ein zutrauliches Wesen und schau, ob du es auf Reisen dabeihaben möchtest. Du musst es nicht adoptieren."
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
    "minimum": 3,
    "en": {
      "name": "For the Cook",
      "objective": "With a Nutrient Processor and Anomaly access in **No Man’s Sky**, cook a dish from ingredients you already own. **Offer a serving to Cronus and hear his verdict**. No particular rating is required."
    },
    "de": {
      "name": "Für den Koch",
      "objective": "Koch in **No Man’s Sky** mit vorhandenen Zutaten ein Gericht im Nährstoffprozessor. Besuch danach Cronus in der Anomalie. **Gib ihm eine Portion und hör dir sein Urteil an**. Eine bestimmte Bewertung brauchst du nicht."
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
    "minutes": 25,
    "minimum": 5,
    "en": {
      "name": "Today's Catch",
      "objective": "Bring a Fishing Rig and Nutrient Processor to the coast in **No Man’s Sky**. Catch a fish the processor accepts, then **cook and eat one serving from that catch**."
    },
    "de": {
      "name": "Frisch gefangen",
      "objective": "Nimm in **No Man’s Sky** Angelausrüstung und Nährstoffprozessor mit zur Küste. Fange einen Fisch, den du im Prozessor verarbeiten kannst, und **koche und iss eine Portion aus diesem Fang**."
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
    "minutes": 25,
    "minimum": 5,
    "en": {
      "name": "Ground Crew",
      "objective": "With an Exocraft ready in **No Man’s Sky**, mark a nearby Buried Technology Module with your visor. Drive there, dig up the Salvaged Data, and **return to your ship in the same Exocraft** without summoning either vehicle."
    },
    "de": {
      "name": "Bodenteam",
      "objective": "Markiere in **No Man’s Sky** ein vergrabenes Technologiemodul in der Nähe deines Schiffs. Fahr mit deinem Exofahrzeug hin, grab die Daten aus und **kehr mit demselben Fahrzeug zum Schiff zurück**. Ruf unterwegs kein anderes Fahrzeug."
    }
  }
]);
