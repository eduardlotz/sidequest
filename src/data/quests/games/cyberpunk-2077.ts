import { defineGameQuests } from "../defineGameQuests";

export const cyberpunkQuests = defineGameQuests("cyberpunk-2077", [
  {
    "id": "borrowed-eyes",
    "moods": [
      "challenge",
      "focused"
    ],
    "type": "challenge",
    "tags": [
      "stealth",
      "no-kills"
    ],
    "minutes": 30,
    "minimum": 5,
    "en": {
      "name": "Borrowed Eyes",
      "objective": "With a cyberdeck in **Cyberpunk 2077**, choose an open theft gig with accessible security cameras. Scout through the cameras, then **take the target and leave unseen without killing or knocking out guards**. Device distractions are allowed."
    },
    "de": {
      "name": "Fremde Augen",
      "objective": "Such dir in **Cyberpunk 2077** mit Cyberdeck einen offenen Diebstahl-Gig mit zugänglichen Kameras. Späh durch die Kameras und **stiehl den gesuchten Gegenstand ungesehen, ohne Wachen zu töten oder bewusstlos zu schlagen**. Du darfst Geräte zur Ablenkung hacken."
    }
  },
  {
    "id": "metro-postcards",
    "moods": [
      "relax",
      "explore"
    ],
    "type": "objective",
    "tags": [
      "free-roam",
      "photography"
    ],
    "minutes": 20,
    "minimum": 3,
    "en": {
      "name": "Metro Postcards",
      "objective": "After getting your NCART pass in **Cyberpunk 2077**, ride to a station you rarely use. Explore the streets around it and **save one photo of a view you found there**."
    },
    "de": {
      "name": "Postkarte aus der Metro",
      "objective": "Fahr in **Cyberpunk 2077** mit deinem NCART-Pass zu einer Station, an der du selten aussteigst. Erkunde die Straßen ringsum und **mach ein Foto von einer Aussicht, die du dort entdeckst**."
    }
  },
  {
    "id": "night-city-uniform",
    "moods": [
      "create",
      "relax"
    ],
    "type": "creation",
    "tags": [
      "outfit",
      "photography"
    ],
    "minutes": 25,
    "minimum": 5,
    "en": {
      "name": "District Uniform",
      "objective": "In **Cyberpunk 2077**, look at the clothes worn by three NPCs in your district. Borrow one color from them for an outfit made from your wardrobe, then **save the outfit and photograph V wearing it in that district**."
    },
    "de": {
      "name": "Outfit fürs Viertel",
      "objective": "Schau dir in **Cyberpunk 2077** die Kleidung von drei NPCs in einem Viertel an. Übernimm eine ihrer Farben für einen Look aus deinem Kleiderschrank. **Speichere den Look und fotografiere V damit im selben Viertel**."
    }
  },
  {
    "id": "reginas-patient",
    "moods": [
      "progress",
      "focused"
    ],
    "type": "objective",
    "tags": [
      "no-kills",
      "story"
    ],
    "minutes": 30,
    "minimum": 5,
    "en": {
      "name": "Alive for Regina",
      "objective": "Track an unfinished Cyberpsycho Sighting in **Cyberpunk 2077**. Stop attacking as soon as the target falls, read the clues, and **send Regina the closing report with the target alive**."
    },
    "de": {
      "name": "Lebend für Regina",
      "objective": "Verfolge in **Cyberpunk 2077** eine offene Cyberpsycho-Sichtung. Hör auf anzugreifen, sobald das Ziel fällt, lies die Hinweise und **sende Regina den Abschlussbericht, während das Ziel noch lebt**."
    }
  },
  {
    "id": "device-decoy",
    "moods": [
      "curious",
      "focused"
    ],
    "type": "experiment",
    "tags": [
      "stealth",
      "new-approach"
    ],
    "minutes": 10,
    "minimum": 2,
    "en": {
      "name": "Wrong Way",
      "objective": "With a cyberdeck in **Cyberpunk 2077**, find a guard watching a passage beside a hackable device. Trigger a distraction and **use the opening to pass unseen**, without hacking or attacking the guard."
    },
    "de": {
      "name": "Falsche Richtung",
      "objective": "Such in **Cyberpunk 2077** mit Cyberdeck eine Wache neben einem hackbaren Gerät. Lenk sie über das Gerät ab und **schleich vorbei, während sie abgelenkt ist**. Hack die Wache selbst nicht und greif sie nicht an."
    }
  },
  {
    "id": "air-dash-route",
    "moods": [
      "restless",
      "challenge"
    ],
    "type": "challenge",
    "tags": [
      "traversal",
      "three-attempts"
    ],
    "minutes": 10,
    "minimum": 2,
    "en": {
      "name": "One Rooftop Gap",
      "objective": "With Air Dash unlocked in **Cyberpunk 2077**, choose one rooftop gap whose landing side you can see and reach safely. **Air-dash across it and land on the far roof**. Stop after success or three attempts."
    },
    "de": {
      "name": "Eine Dachlücke",
      "objective": "Wähle in **Cyberpunk 2077** mit freigeschaltetem Luftsprint eine Dachlücke, deren sichere Landefläche du sehen und erreichen kannst. **Sprinte darüber und lande auf dem anderen Dach**. Nach Erfolg oder drei Versuchen ist Schluss."
    }
  }
]);
