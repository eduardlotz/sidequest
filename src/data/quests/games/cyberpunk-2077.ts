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
      "objective": "Wähle in **Cyberpunk 2077** mit Cyberdeck einen offenen Diebstahl-Gig mit zugänglichen Überwachungskameras. Spähe durch die Kameras und **hole das Ziel ungesehen, ohne Wachen zu töten oder bewusstlos zu schlagen**. Ablenkung über Geräte ist erlaubt."
    }
  },
  {
    "id": "metro-postcards",
    "moods": [
      "relax",
      "explore"
    ],
    "type": "inspiration",
    "tags": [
      "free-roam",
      "photography"
    ],
    "minutes": 20,
    "minimum": 3,
    "en": {
      "name": "Metro Postcards",
      "objective": "After getting your NCART pass in **Cyberpunk 2077**, ride the metro through Night City. Get off at a station you rarely use and wander its surrounding streets. Take a photo if a view catches your eye."
    },
    "de": {
      "name": "Postkarte aus der Metro",
      "objective": "Fahre in **Cyberpunk 2077** mit deinem NCART-Pass durch Night City. Steige an einer selten genutzten Station aus und erkunde die Straßen darum. Mach ein Foto, wenn dir ein Ausblick gefällt."
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
      "objective": "Schau dir in **Cyberpunk 2077** die Kleidung von drei NPCs im Viertel an. Übernimm eine ihrer Farben für ein Outfit aus deinem Kleiderschrank und **speichere es und fotografiere V damit im selben Viertel**."
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
      "objective": "Suche in **Cyberpunk 2077** mit Cyberdeck eine Wache an einem Durchgang neben einem hackbaren Gerät. Löse eine Ablenkung aus und **gehe im richtigen Moment ungesehen vorbei**, ohne die Wache zu hacken oder anzugreifen."
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
      "name": "Above the Traffic",
      "objective": "With Air Dash unlocked in **Cyberpunk 2077**, choose two nearby rooftop gaps you can cross. **Air-dash over both and return without touching the street**. Give the route three attempts."
    },
    "de": {
      "name": "Über dem Verkehr",
      "objective": "Suche in **Cyberpunk 2077** mit freigeschaltetem Luftsprint zwei überquerbare Dachlücken in der Nähe. **Überquere beide mit Luftsprints und kehre zurück, ohne die Straße zu berühren**. Du hast drei Versuche."
    }
  }
]);
