import { defineQuests } from "../defineQuests";

export const GamesGtaQuests = defineQuests([
  {
    "id": "gta-sa-road-signs",
    "moodIds": ["explore"],
    "type": "objective",
    "tags": ["driving", "no-fast-travel"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-sa"]
    },
    "translations": {
      "en": {
        "name": "Read the Road Signs",
        "objective": "In **GTA: San Andreas**, after the countryside unlocks, start at Grove Street with a car and turn the radar off. **Drive to the Blueberry town sign using road signs and landmarks**, staying on roads and keeping the same car.",
        "gameObjective": "In **GTA: San Andreas**, after the countryside unlocks, start at Grove Street with a car and turn the radar off. **Drive to the Blueberry town sign using road signs and landmarks**, staying on roads and keeping the same car."
      },
      "de": {
        "name": "Den Schildern nach",
        "objective": "Starte in **GTA: San Andreas** nach Freischaltung des Umlands mit einem Auto in der Grove Street und schalte das Radar aus. **Fahre anhand von Straßenschildern und Orientierungspunkten zum Ortsschild von Blueberry**. Bleib auf Straßen und nutze dasselbe Auto.",
        "gameObjective": "Starte in **GTA: San Andreas** nach Freischaltung des Umlands mit einem Auto in der Grove Street und schalte das Radar aus. **Fahre anhand von Straßenschildern und Orientierungspunkten zum Ortsschild von Blueberry**. Bleib auf Straßen und nutze dasselbe Auto."
      }
    },
    "experience": {
      "family": "road-navigation",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["driving"],
      "rules": ["no-fast-travel"],
      "prerequisites": [
        {
          "en": "Countryside unlocked; car available",
          "de": "Umland freigeschaltet; Auto verfügbar",
          "chips": {"en": ["Countryside", "Car"], "de": ["Umland", "Auto"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-iv-bowling-pickup",
    "moodIds": ["relax", "nostalgic"],
    "type": "objective",
    "tags": ["driving", "one-round"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-iv"]
    },
    "translations": {
      "en": {
        "name": "Pick Them Up",
        "objective": "In **GTA IV story mode**, call an available friend for bowling. Pick them up yourself, drive to the alley without gaining a wanted level, and **finish one full bowling game before driving them home**. Use no taxi skips.",
        "gameObjective": "In **GTA IV story mode**, call an available friend for bowling. Pick them up yourself, drive to the alley without gaining a wanted level, and **finish one full bowling game before driving them home**. Use no taxi skips."
      },
      "de": {
        "name": "Bowling mit Abholung",
        "objective": "Ruf im **Story-Modus von GTA IV** einen verfügbaren Freund zum Bowling an. Hol ihn selbst ab, fahr ohne Fahndungssterne zur Bahn und **spiel eine ganze Partie, bevor du ihn nach Hause bringst**. Überspring die Fahrt nicht mit einem Taxi.",
        "gameObjective": "Ruf im **Story-Modus von GTA IV** einen verfügbaren Freund zum Bowling an. Hol ihn selbst ab, fahr ohne Fahndungssterne zur Bahn und **spiel eine ganze Partie, bevor du ihn nach Hause bringst**. Überspring die Fahrt nicht mit einem Taxi."
      }
    },
    "experience": {
      "family": "bowling",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["driving"],
      "rules": ["one-round"],
      "prerequisites": [
        {
          "en": "Available bowling invitation",
          "de": "Verfügbare Bowling-Verabredung",
          "chips": {"en": ["Bowling invitation"], "de": ["Bowling-Verabredung"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-v-taxi-shift",
    "moodIds": ["focused", "challenge"],
    "type": "challenge",
    "tags": ["driving", "current-save"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-v"]
    },
    "translations": {
      "en": {
        "name": "Three Fares",
        "objective": "In **GTA V story mode**, start taxi work. **Deliver three fares in the same taxi without gaining a wanted level**. The shift ends after the third fare, a wanted level or the taxi becoming undriveable.",
        "gameObjective": "In **GTA V story mode**, start taxi work. **Deliver three fares in the same taxi without gaining a wanted level**. The shift ends after the third fare, a wanted level or the taxi becoming undriveable."
      },
      "de": {
        "name": "Drei Fahrgäste",
        "objective": "Steig im **Storymodus von GTA V** in ein Taxi und nimm Fahraufträge an. **Bring drei Fahrgäste im selben Wagen ans Ziel, ohne Fahndungssterne zu bekommen**. Die Schicht endet nach der dritten Fahrt, bei Fahndung oder wenn das Taxi fahruntüchtig ist.",
        "gameObjective": "Steig im **Storymodus von GTA V** in ein Taxi und nimm Fahraufträge an. **Bring drei Fahrgäste im selben Wagen ans Ziel, ohne Fahndungssterne zu bekommen**. Die Schicht endet nach der dritten Fahrt, bei Fahndung oder wenn das Taxi fahruntüchtig ist."
      }
    },
    "experience": {
      "family": "taxi-work",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["driving"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Taxi available in Story Mode",
          "de": "Taxi im Storymodus verfügbar",
          "chips": {"en": ["Taxi in Story Mode"], "de": ["Taxi im Storymodus"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-v-return-to-story",
    "moodIds": ["progress", "overwhelmed", "nostalgic"],
    "type": "inspiration",
    "tags": ["current-save", "story"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-v"]
    },
    "translations": {
      "en": {
        "name": "Back to Los Santos",
        "objective": "Return to a familiar unfinished **GTA V story save**. Stay with the protagonist you loaded and **follow their next available story marker**.",
        "gameObjective": "Return to a familiar unfinished **GTA V story save**. Stay with the protagonist you loaded and **follow their next available story marker**."
      },
      "de": {
        "name": "Zurück in Los Santos",
        "objective": "Lade einen vertrauten, noch nicht beendeten **GTA-V-Story-Spielstand**. Bleib bei der geladenen Hauptfigur und **folge ihrem nächsten verfügbaren Storymarker**.",
        "gameObjective": "Lade einen vertrauten, noch nicht beendeten **GTA-V-Story-Spielstand**. Bleib bei der geladenen Hauptfigur und **folge ihrem nächsten verfügbaren Storymarker**."
      }
    },
    "experience": {
      "family": "story-continuation",
      "cardMetadata": { "genreIds": [], "playStyleIds": [] },
      "finish": "open",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Familiar unfinished save with story marker",
          "de": "Vertrauter unfertiger Spielstand mit Storymarker",
          "chips": {"en": ["Story marker"], "de": ["Storymarker"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "narrative", "sandbox"]
  },
  {
    "id": "gta-sa-roboi-courier",
    "moodIds": ["restless", "progress"],
    "type": "objective",
    "tags": ["driving"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-sa"]
    },
    "translations": {
      "en": {
        "name": "Roboi’s Delivery",
        "objective": "At Roboi’s Food Mart in **GTA: San Andreas**, mount its courier bicycle. **Complete the first delivery level and return to the store** with the packages delivered.",
        "gameObjective": "At Roboi’s Food Mart in **GTA: San Andreas**, mount its courier bicycle. **Complete the first delivery level and return to the store** with the packages delivered."
      },
      "de": {
        "name": "Lieferung für Roboi",
        "objective": "Steig in **GTA: San Andreas** bei Roboi’s Food Mart auf das Kurierfahrrad. **Fahr die erste Lieferstufe zu Ende und kehr mit zugestellten Paketen zum Laden zurück**.",
        "gameObjective": "Steig in **GTA: San Andreas** bei Roboi’s Food Mart auf das Kurierfahrrad. **Fahr die erste Lieferstufe zu Ende und kehr mit zugestellten Paketen zum Laden zurück**."
      }
    },
    "experience": {
      "family": "courier",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["driving"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Roboi courier bicycle available",
          "de": "Roboi-Kurierfahrrad verfügbar",
          "chips": {"en": ["Roboi courier bicycle"], "de": ["Roboi-Kurierfahrrad"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-sa-night-burglary",
    "moodIds": ["focused", "challenge"],
    "type": "challenge",
    "tags": ["stealth", "one-life"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-sa"]
    },
    "translations": {
      "en": {
        "name": "One Quiet House",
        "objective": "During burglary hours in **GTA: San Andreas**, start the job in a suitable Boxville. **Steal two items from one house without waking its residents and deliver them to the lockup**. One attempt, ending if the alarm sounds.",
        "gameObjective": "During burglary hours in **GTA: San Andreas**, start the job in a suitable Boxville. **Steal two items from one house without waking its residents and deliver them to the lockup**. One attempt, ending if the alarm sounds."
      },
      "de": {
        "name": "Ein leises Haus",
        "objective": "Starte in **GTA: San Andreas** während der Einbruchszeit im passenden Boxville den Job. **Stiehl zwei Gegenstände aus einem Haus, ohne Bewohner zu wecken, und liefere sie im Lager ab**. Ein Versuch, bei Alarm ist Schluss.",
        "gameObjective": "Starte in **GTA: San Andreas** während der Einbruchszeit im passenden Boxville den Job. **Stiehl zwei Gegenstände aus einem Haus, ohne Bewohner zu wecken, und liefere sie im Lager ab**. Ein Versuch, bei Alarm ist Schluss."
      }
    },
    "experience": {
      "family": "burglary",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["stealth"],
      "rules": ["one-life"],
      "prerequisites": [
        {
          "en": "Burglary Boxville during burglary hours",
          "de": "Einbruchs-Boxville während der Einbruchszeit",
          "chips": {"en": ["Burglary Boxville"], "de": ["Einbruchs-Boxville"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"],
    "rarity": "special"
  },
  {
    "id": "gta-sa-freight-first-stop",
    "moodIds": ["focused", "challenge"],
    "type": "challenge",
    "tags": ["driving", "three-attempts"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-sa"]
    },
    "translations": {
      "en": {
        "name": "Brake for the Station",
        "objective": "Once all three cities are open in **GTA: San Andreas**, start Freight in a train. **Complete the first timed station delivery without derailing**, or stop after three runs.",
        "gameObjective": "Once all three cities are open in **GTA: San Andreas**, start Freight in a train. **Complete the first timed station delivery without derailing**, or stop after three runs."
      },
      "de": {
        "name": "Bremsen für den Bahnhof",
        "objective": "Starte in **GTA: San Andreas** bei drei freigeschalteten Städten den Frachtjob im Zug. **Schaff die erste zeitbegrenzte Bahnhofslieferung ohne Entgleisen** oder hör nach drei Fahrten auf.",
        "gameObjective": "Starte in **GTA: San Andreas** bei drei freigeschalteten Städten den Frachtjob im Zug. **Schaff die erste zeitbegrenzte Bahnhofslieferung ohne Entgleisen** oder hör nach drei Fahrten auf."
      }
    },
    "experience": {
      "family": "train-delivery",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["driving"],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "All three cities unlocked",
          "de": "Alle drei Städte freigeschaltet",
          "chips": {"en": ["All three cities"], "de": ["Alle drei Städte"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-sa-trucker-load",
    "moodIds": ["focused", "progress"],
    "type": "objective",
    "tags": ["driving"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-sa"]
    },
    "translations": {
      "en": {
        "name": "RS Haul’s Next Load",
        "objective": "With RS Haul trucking unlocked in **GTA: San Andreas**, take the next available delivery. **Deliver the trailer under that job’s stated conditions**, keeping it attached until the drop-off.",
        "gameObjective": "With RS Haul trucking unlocked in **GTA: San Andreas**, take the next available delivery. **Deliver the trailer under that job’s stated conditions**, keeping it attached until the drop-off."
      },
      "de": {
        "name": "Die nächste Ladung",
        "objective": "Nimm in **GTA: San Andreas** bei freigeschaltetem RS-Haul-Transport den nächsten verfügbaren Auftrag an. **Liefere den Anhänger nach den Bedingungen des Auftrags ab** und lass ihn bis dahin angehängt.",
        "gameObjective": "Nimm in **GTA: San Andreas** bei freigeschaltetem RS-Haul-Transport den nächsten verfügbaren Auftrag an. **Liefere den Anhänger nach den Bedingungen des Auftrags ab** und lass ihn bis dahin angehängt."
      }
    },
    "experience": {
      "family": "trucking",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["driving"],
      "rules": [],
      "prerequisites": [
        {
          "en": "RS Haul jobs unlocked",
          "de": "RS-Haul-Aufträge freigeschaltet",
          "chips": {"en": ["RS Haul jobs"], "de": ["RS-Haul-Aufträge"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-sa-quarry-next-task",
    "moodIds": ["restless", "progress"],
    "type": "objective",
    "tags": ["driving"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-sa"]
    },
    "translations": {
      "en": {
        "name": "Work the Quarry",
        "objective": "With quarry jobs unlocked in **GTA: San Andreas**, take the next job at Hunter Quarry. **Finish its marked vehicle task**, whether it calls for the dozer or dump truck.",
        "gameObjective": "With quarry jobs unlocked in **GTA: San Andreas**, take the next job at Hunter Quarry. **Finish its marked vehicle task**, whether it calls for the dozer or dump truck."
      },
      "de": {
        "name": "Arbeit im Steinbruch",
        "objective": "Nimm in **GTA: San Andreas** bei freigeschalteten Steinbruchjobs den nächsten Auftrag in Hunter Quarry an. **Erledige seine markierte Fahrzeugaufgabe** mit dem geforderten Bulldozer oder Muldenkipper.",
        "gameObjective": "Nimm in **GTA: San Andreas** bei freigeschalteten Steinbruchjobs den nächsten Auftrag in Hunter Quarry an. **Erledige seine markierte Fahrzeugaufgabe** mit dem geforderten Bulldozer oder Muldenkipper."
      }
    },
    "experience": {
      "family": "quarry-work",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["driving"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Quarry jobs unlocked",
          "de": "Steinbruchjobs freigeschaltet",
          "chips": {"en": ["Quarry jobs"], "de": ["Steinbruchjobs"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-sa-valet-level",
    "moodIds": ["focused", "challenge"],
    "type": "challenge",
    "tags": ["driving", "three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-sa"]
    },
    "translations": {
      "en": {
        "name": "Park Their Cars",
        "objective": "With valet work unlocked in **GTA: San Andreas**, wear the valet uniform at the Vank Hoff Hotel. **Pass one parking level without damaging a guest car**, or stop after three shifts.",
        "gameObjective": "With valet work unlocked in **GTA: San Andreas**, wear the valet uniform at the Vank Hoff Hotel. **Pass one parking level without damaging a guest car**, or stop after three shifts."
      },
      "de": {
        "name": "Ihre Wagen parken",
        "objective": "Trag in **GTA: San Andreas** bei freigeschaltetem Einparkjob am Vank-Hoff-Hotel die Parkservice-Uniform. **Schaff eine Stufe ohne Schaden an Gästewagen** oder hör nach drei Schichten auf.",
        "gameObjective": "Trag in **GTA: San Andreas** bei freigeschaltetem Einparkjob am Vank-Hoff-Hotel die Parkservice-Uniform. **Schaff eine Stufe ohne Schaden an Gästewagen** oder hör nach drei Schichten auf."
      }
    },
    "experience": {
      "family": "valet",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["driving"],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Valet job unlocked; valet uniform",
          "de": "Parkservice freigeschaltet; Parkservice-Uniform",
          "chips": {"en": ["Valet job", "Valet uniform"], "de": ["Parkservice", "Parkservice-Uniform"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-sa-vigilante-first-wave",
    "moodIds": ["restless", "focused"],
    "type": "objective",
    "tags": ["driving"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-sa"]
    },
    "translations": {
      "en": {
        "name": "First Pursuit",
        "objective": "Start Vigilante in an eligible law-enforcement vehicle in **GTA: San Andreas**. **Clear the first level’s marked criminals** before ending the job.",
        "gameObjective": "Start Vigilante in an eligible law-enforcement vehicle in **GTA: San Andreas**. **Clear the first level’s marked criminals** before ending the job."
      },
      "de": {
        "name": "Die erste Verfolgung",
        "objective": "Starte in **GTA: San Andreas** in einem passenden Polizeifahrzeug den Bürgerwehrjob. **Schalte die markierten Kriminellen der ersten Stufe aus**, bevor du den Job beendest.",
        "gameObjective": "Starte in **GTA: San Andreas** in einem passenden Polizeifahrzeug den Bürgerwehrjob. **Schalte die markierten Kriminellen der ersten Stufe aus**, bevor du den Job beendest."
      }
    },
    "experience": {
      "family": "pursuit",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["driving"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Eligible law-enforcement vehicle",
          "de": "Geeignetes Polizeifahrzeug",
          "chips": {"en": ["Law-enforcement vehicle"], "de": ["Polizeifahrzeug"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-sa-bmx-checkpoints",
    "moodIds": ["restless", "challenge"],
    "type": "challenge",
    "tags": ["traversal", "three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-sa"]
    },
    "translations": {
      "en": {
        "name": "Bunny-Hop the Park",
        "objective": "With enough cycling skill for the high checkpoints in **GTA: San Andreas**, enter the Glen Park BMX challenge. **Collect every checkpoint before the timer ends**, or stop after three runs.",
        "gameObjective": "With enough cycling skill for the high checkpoints in **GTA: San Andreas**, enter the Glen Park BMX challenge. **Collect every checkpoint before the timer ends**, or stop after three runs."
      },
      "de": {
        "name": "Sprünge im Skatepark",
        "objective": "Starte in **GTA: San Andreas** mit genug Radfahrfähigkeit für die hohen Checkpoints die BMX-Challenge in Glen Park. **Hol alle Checkpoints vor Ablauf des Timers** oder hör nach drei Läufen auf.",
        "gameObjective": "Starte in **GTA: San Andreas** mit genug Radfahrfähigkeit für die hohen Checkpoints die BMX-Challenge in Glen Park. **Hol alle Checkpoints vor Ablauf des Timers** oder hör nach drei Läufen auf."
      }
    },
    "experience": {
      "family": "bicycle-course",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["traversal"],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Enough cycling skill for BMX challenge",
          "de": "Genug Radfahrfähigkeit für die BMX-Challenge",
          "chips": {"en": ["BMX challenge"], "de": ["BMX-Challenge"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-sa-nrg-dock",
    "moodIds": ["focused", "challenge"],
    "type": "challenge",
    "tags": ["driving", "three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-sa"]
    },
    "translations": {
      "en": {
        "name": "Across the Dry Dock",
        "objective": "Once San Fierro is accessible in **GTA: San Andreas**, mount the NRG-500 challenge bike at Easter Basin. **Finish its dry-dock checkpoint course**, or stop after three runs.",
        "gameObjective": "Once San Fierro is accessible in **GTA: San Andreas**, mount the NRG-500 challenge bike at Easter Basin. **Finish its dry-dock checkpoint course**, or stop after three runs."
      },
      "de": {
        "name": "Über das Trockendock",
        "objective": "Steig in **GTA: San Andreas** bei zugänglichem San Fierro auf die NRG-500 der Challenge in Easter Basin. **Schaff den Checkpointkurs durchs Trockendock** oder hör nach drei Läufen auf.",
        "gameObjective": "Steig in **GTA: San Andreas** bei zugänglichem San Fierro auf die NRG-500 der Challenge in Easter Basin. **Schaff den Checkpointkurs durchs Trockendock** oder hör nach drei Läufen auf."
      }
    },
    "experience": {
      "family": "motorcycle-course",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["driving"],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "San Fierro accessible",
          "de": "San Fierro zugänglich",
          "chips": {"en": ["San Fierro"], "de": ["San Fierro"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-sa-basketball-three-spots",
    "moodIds": ["focused", "challenge"],
    "type": "challenge",
    "tags": ["three-attempts"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-sa"]
    },
    "translations": {
      "en": {
        "name": "Around the Hoop",
        "objective": "On a version of **GTA: San Andreas** with playable basketball, use a court near Grove Street. **Score from three different positions**, or stop after three shots at each position.",
        "gameObjective": "On a version of **GTA: San Andreas** with playable basketball, use a court near Grove Street. **Score from three different positions**, or stop after three shots at each position."
      },
      "de": {
        "name": "Rund um den Korb",
        "objective": "Spiel in einer Version von **GTA: San Andreas** mit Basketball auf einem Platz bei Grove Street. **Triff von drei unterschiedlichen Stellen** oder hör nach drei Würfen pro Stelle auf.",
        "gameObjective": "Spiel in einer Version von **GTA: San Andreas** mit Basketball auf einem Platz bei Grove Street. **Triff von drei unterschiedlichen Stellen** oder hör nach drei Würfen pro Stelle auf."
      }
    },
    "experience": {
      "family": "basketball",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Version with playable basketball",
          "de": "Version mit spielbarem Basketball",
          "chips": {"en": ["Basketball"], "de": ["Basketball"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-sa-arcade-space-monkey",
    "moodIds": ["low-energy"],
    "type": "inspiration",
    "tags": ["replay"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-sa"]
    },
    "translations": {
      "en": {
        "name": "Go Go Space Monkey",
        "objective": "Find a playable Go Go Space Monkey arcade cabinet in GTA: San Andreas. **Spend a little time with its tiny shooter** instead of CJ’s next mission.",
        "gameObjective": "Find a playable Go Go Space Monkey arcade cabinet in GTA: San Andreas. **Spend a little time with its tiny shooter** instead of CJ’s next mission."
      },
      "de": {
        "name": "Go Go Space Monkey",
        "objective": "Such in GTA: San Andreas einen spielbaren Go-Go-Space-Monkey-Automaten. **Verbring etwas Zeit mit dem kleinen Shooter** statt mit CJs nächster Mission.",
        "gameObjective": "Such in GTA: San Andreas einen spielbaren Go-Go-Space-Monkey-Automaten. **Verbring etwas Zeit mit dem kleinen Shooter** statt mit CJs nächster Mission."
      }
    },
    "experience": {
      "family": "arcade",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "open",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "en": "Playable arcade cabinet",
          "de": "Spielbarer Arcade-Automat",
          "chips": {"en": ["Arcade cabinet"], "de": ["Arcade-Automat"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-sa-tattoo-visible",
    "moodIds": ["create"],
    "type": "creation",
    "tags": ["outfit"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-sa"]
    },
    "translations": {
      "en": {
        "name": "Ink for CJ",
        "objective": "After tattoo shops unlock in **GTA: San Andreas**, choose a tattoo you can afford. **Apply it and put on clothes that leave it visible**.",
        "gameObjective": "After tattoo shops unlock in **GTA: San Andreas**, choose a tattoo you can afford. **Apply it and put on clothes that leave it visible**."
      },
      "de": {
        "name": "Tinte für CJ",
        "objective": "Wähle in **GTA: San Andreas** bei freigeschalteten Tattoo-Läden ein bezahlbares Tattoo. **Lass es stechen und zieh Kleidung an, die es zeigt**.",
        "gameObjective": "Wähle in **GTA: San Andreas** bei freigeschalteten Tattoo-Läden ein bezahlbares Tattoo. **Lass es stechen und zieh Kleidung an, die es zeigt**."
      }
    },
    "experience": {
      "family": "tattoo",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["outfit"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Tattoo shop unlocked; spare cash",
          "de": "Tattoo-Laden freigeschaltet; Geld verfügbar",
          "chips": {"en": ["Tattoo shop"], "de": ["Tattoo-Laden"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-sa-transfender-build",
    "moodIds": ["create", "progress"],
    "type": "creation",
    "tags": ["driving"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-sa"]
    },
    "translations": {
      "en": {
        "name": "Your TransFender Car",
        "objective": "With TransFender unlocked in **GTA: San Andreas**, bring a supported car and enough cash. **Fit a visual modification and keep the customized car in a safehouse garage**.",
        "gameObjective": "With TransFender unlocked in **GTA: San Andreas**, bring a supported car and enough cash. **Fit a visual modification and keep the customized car in a safehouse garage**."
      },
      "de": {
        "name": "Dein TransFender-Wagen",
        "objective": "Bring in **GTA: San Andreas** bei freigeschaltetem TransFender ein unterstütztes Auto und genug Geld mit. **Baue eine sichtbare Änderung ein und stell den Wagen in deine Garage**.",
        "gameObjective": "Bring in **GTA: San Andreas** bei freigeschaltetem TransFender ein unterstütztes Auto und genug Geld mit. **Baue eine sichtbare Änderung ein und stell den Wagen in deine Garage**."
      }
    },
    "experience": {
      "family": "car-customization",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["driving"],
      "rules": [],
      "prerequisites": [
        {
          "en": "TransFender unlocked; supported car and cash",
          "de": "TransFender freigeschaltet; geeignetes Auto und Geld",
          "chips": {"en": ["TransFender", "Car"], "de": ["TransFender", "Auto"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-sa-flight-loop",
    "moodIds": ["focused", "challenge"],
    "type": "challenge",
    "tags": ["traversal", "three-attempts"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-sa"]
    },
    "translations": {
      "en": {
        "name": "Loop over the Desert",
        "objective": "With flying school and its Loop-the-Loop lesson unlocked in **GTA: San Andreas**, **earn at least silver on that lesson**, or stop after three flights.",
        "gameObjective": "With flying school and its Loop-the-Loop lesson unlocked in **GTA: San Andreas**, **earn at least silver on that lesson**, or stop after three flights."
      },
      "de": {
        "name": "Looping über der Wüste",
        "objective": "Versuch in **GTA: San Andreas** bei freigeschalteter Flugschule und Looping-Lektion, **mindestens Silber in dieser Lektion zu holen**. Hör nach dem Erfolg oder drei Flügen auf.",
        "gameObjective": "Versuch in **GTA: San Andreas** bei freigeschalteter Flugschule und Looping-Lektion, **mindestens Silber in dieser Lektion zu holen**. Hör nach dem Erfolg oder drei Flügen auf."
      }
    },
    "experience": {
      "family": "flight-lesson",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["traversal"],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Loop-the-Loop flying lesson unlocked",
          "de": "Looping-Fluglektion freigeschaltet",
          "chips": {"en": ["Loop-the-Loop lesson"], "de": ["Looping-Fluglektion"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-sa-boat-school-air",
    "moodIds": ["curious"],
    "type": "experiment",
    "tags": ["driving"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-sa"]
    },
    "translations": {
      "en": {
        "name": "Boat in the Air",
        "objective": "With boat school accessible in **GTA: San Andreas**, take the Flying Fish lesson. **Complete one attempt and compare its landing with the displayed medal requirement**. A medal is optional.",
        "gameObjective": "With boat school accessible in **GTA: San Andreas**, take the Flying Fish lesson. **Complete one attempt and compare its landing with the displayed medal requirement**. A medal is optional."
      },
      "de": {
        "name": "Boot in der Luft",
        "objective": "Starte in **GTA: San Andreas** bei zugänglicher Bootsschule die Flying-Fish-Lektion. **Beende einen Versuch und vergleiche die Landung mit der angezeigten Medaillenanforderung**. Eine Medaille brauchst du nicht.",
        "gameObjective": "Starte in **GTA: San Andreas** bei zugänglicher Bootsschule die Flying-Fish-Lektion. **Beende einen Versuch und vergleiche die Landung mit der angezeigten Medaillenanforderung**. Eine Medaille brauchst du nicht."
      }
    },
    "experience": {
      "family": "boat-lesson",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["driving"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Boat school accessible",
          "de": "Bootsschule zugänglich",
          "chips": {"en": ["Boat school"], "de": ["Bootsschule"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-sa-chiliad-descent",
    "moodIds": ["restless", "explore"],
    "type": "inspiration",
    "tags": ["traversal"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-sa"]
    },
    "translations": {
      "en": {
        "name": "Down Mount Chiliad",
        "objective": "Once the countryside is accessible in GTA: San Andreas, take a mountain bike to Mount Chiliad’s summit. **Ride down its dirt tracks and enjoy the descent** without entering a race.",
        "gameObjective": "Once the countryside is accessible in GTA: San Andreas, take a mountain bike to Mount Chiliad’s summit. **Ride down its dirt tracks and enjoy the descent** without entering a race."
      },
      "de": {
        "name": "Den Mount Chiliad hinunter",
        "objective": "Bring in GTA: San Andreas bei freigeschaltetem Umland ein Mountainbike auf den Mount Chiliad. **Fahr über die Feldwege hinunter und genieß die Abfahrt** ohne Rennstart.",
        "gameObjective": "Bring in GTA: San Andreas bei freigeschaltetem Umland ein Mountainbike auf den Mount Chiliad. **Fahr über die Feldwege hinunter und genieß die Abfahrt** ohne Rennstart."
      }
    },
    "experience": {
      "family": "bicycle-roaming",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["traversal"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Countryside accessible; mountain bike",
          "de": "Umland zugänglich; Mountainbike",
          "chips": {"en": ["Countryside", "Mountain bike"], "de": ["Umland", "Mountainbike"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-sa-jetpack-airfield",
    "moodIds": ["explore", "curious"],
    "type": "inspiration",
    "tags": ["traversal"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-sa"]
    },
    "translations": {
      "en": {
        "name": "Above Verdant Meadows",
        "objective": "After the jetpack is unlocked in GTA: San Andreas, lift off at Verdant Meadows. **Explore the nearby desert from above** and settle where a rock formation catches your eye.",
        "gameObjective": "After the jetpack is unlocked in GTA: San Andreas, lift off at Verdant Meadows. **Explore the nearby desert from above** and settle where a rock formation catches your eye."
      },
      "de": {
        "name": "Über Verdant Meadows",
        "objective": "Starte in GTA: San Andreas mit freigeschaltetem Jetpack in Verdant Meadows. **Erkunde die Wüste von oben** und lande dort, wo dir eine Felsformation auffällt.",
        "gameObjective": "Starte in GTA: San Andreas mit freigeschaltetem Jetpack in Verdant Meadows. **Erkunde die Wüste von oben** und lande dort, wo dir eine Felsformation auffällt."
      }
    },
    "experience": {
      "family": "jetpack-roaming",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["traversal"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Jetpack unlocked",
          "de": "Jetpack freigeschaltet",
          "chips": {"en": ["Jetpack"], "de": ["Jetpack"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-sa-grove-recruits",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["support"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-sa"]
    },
    "translations": {
      "en": {
        "name": "Take the Grove Along",
        "objective": "With gang recruitment unlocked in **GTA: San Andreas**, recruit two available Grove Street members. **Fight alongside them in one small hostile gang encounter**. The attempt ends when the fight is over or CJ is defeated.",
        "gameObjective": "With gang recruitment unlocked in **GTA: San Andreas**, recruit two available Grove Street members. **Fight alongside them in one small hostile gang encounter**. The attempt ends when the fight is over or CJ is defeated."
      },
      "de": {
        "name": "Die Grove kommt mit",
        "objective": "Wirb in **GTA: San Andreas** mit freigeschalteter Gangrekrutierung zwei verfügbare Grove-Street-Mitglieder an. **Kämpf mit ihnen in einer kleinen feindlichen Gangbegegnung**. Der Versuch endet nach dem Kampf oder bei CJs Niederlage.",
        "gameObjective": "Wirb in **GTA: San Andreas** mit freigeschalteter Gangrekrutierung zwei verfügbare Grove-Street-Mitglieder an. **Kämpf mit ihnen in einer kleinen feindlichen Gangbegegnung**. Der Versuch endet nach dem Kampf oder bei CJs Niederlage."
      }
    },
    "experience": {
      "family": "companion-combat",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["support"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Gang recruitment unlocked",
          "de": "Gangrekrutierung freigeschaltet",
          "chips": {"en": ["Gang recruitment"], "de": ["Gangrekrutierung"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-sa-export-owned-car",
    "moodIds": ["progress", "focused"],
    "type": "objective",
    "tags": ["driving", "trading"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-sa"]
    },
    "translations": {
      "en": {
        "name": "Export Your Car",
        "objective": "With import/export unlocked in **GTA: San Andreas**, choose a requested vehicle already in your garage or nearby. **Deliver it to the Easter Basin ship and complete the export**.",
        "gameObjective": "With import/export unlocked in **GTA: San Andreas**, choose a requested vehicle already in your garage or nearby. **Deliver it to the Easter Basin ship and complete the export**."
      },
      "de": {
        "name": "Ein Wagen fürs Schiff",
        "objective": "Wähle in **GTA: San Andreas** mit freigeschaltetem Import/Export einen angefragten Wagen, den du schon in der Garage oder Nähe hast. **Liefere ihn am Schiff in Easter Basin ab und schließ den Export ab**.",
        "gameObjective": "Wähle in **GTA: San Andreas** mit freigeschaltetem Import/Export einen angefragten Wagen, den du schon in der Garage oder Nähe hast. **Liefere ihn am Schiff in Easter Basin ab und schließ den Export ab**."
      }
    },
    "experience": {
      "family": "vehicle-export",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["driving", "trading"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Import/export unlocked; requested car available",
          "de": "Import/Export freigeschaltet; gesuchtes Auto verfügbar",
          "chips": {"en": ["Import/export", "Requested car"], "de": ["Import/Export", "Gesuchtes Auto"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-sa-grove-bmx-return",
    "moodIds": ["nostalgic", "relax"],
    "type": "inspiration",
    "tags": ["free-roam"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-sa"]
    },
    "translations": {
      "en": {
        "name": "CJ’s First Bicycle",
        "objective": "Return to Grove Street with a BMX in GTA: San Andreas. **Ride the nearby streets from CJ’s first trip home** and let the old neighborhood set the pace.",
        "gameObjective": "Return to Grove Street with a BMX in GTA: San Andreas. **Ride the nearby streets from CJ’s first trip home** and let the old neighborhood set the pace."
      },
      "de": {
        "name": "CJs erstes Fahrrad",
        "objective": "Kehre in GTA: San Andreas mit einem BMX zur Grove Street zurück. **Fahr die Straßen von CJs erster Heimkehr entlang** und lass das alte Viertel das Tempo bestimmen.",
        "gameObjective": "Kehre in GTA: San Andreas mit einem BMX zur Grove Street zurück. **Fahr die Straßen von CJs erster Heimkehr entlang** und lass das alte Viertel das Tempo bestimmen."
      }
    },
    "experience": {
      "family": "familiar-neighborhood",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["free-roam"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Familiar Grove Street; BMX",
          "de": "Vertraute Grove Street; BMX",
          "chips": {"en": ["Grove Street", "BMX"], "de": ["Grove Street", "BMX"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-iv-pool-cushion",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": [],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-iv"]
    },
    "translations": {
      "en": {
        "name": "Read the Cushion",
        "objective": "At a playable pool table in **GTA IV story mode**, **try a bank shot**. Watch how the cushion changes the ball’s direction.",
        "gameObjective": "At a playable pool table in **GTA IV story mode**, **try a bank shot**. Watch how the cushion changes the ball’s direction."
      },
      "de": {
        "name": "Die Bande lesen",
        "objective": "Probier im **Storymodus von GTA IV** an einem spielbaren Billardtisch **einen Bandenstoß**. Beobachte, wie der Kontakt mit der Bande die Richtung der Kugel verändert.",
        "gameObjective": "Probier im **Storymodus von GTA IV** an einem spielbaren Billardtisch **einen Bandenstoß**. Beobachte, wie der Kontakt mit der Bande die Richtung der Kugel verändert."
      }
    },
    "experience": {
      "family": "pool",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "en": "Playable pool table",
          "de": "Spielbarer Billardtisch",
          "chips": {"en": ["Pool table"], "de": ["Billardtisch"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-iv-darts-double",
    "moodIds": ["focused", "challenge"],
    "type": "challenge",
    "tags": ["three-attempts"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-iv"]
    },
    "translations": {
      "en": {
        "name": "Finish on a Double",
        "objective": "At a darts table in **GTA IV story mode**, **win one game with the required double checkout**. Stop after success or three games.",
        "gameObjective": "At a darts table in **GTA IV story mode**, **win one game with the required double checkout**. Stop after success or three games."
      },
      "de": {
        "name": "Mit Doppel abschließen",
        "objective": "Versuch im **Storymodus von GTA IV** am Darttisch, **eine Partie mit dem nötigen Doppel-Finish zu gewinnen**. Hör nach dem Erfolg oder drei Partien auf.",
        "gameObjective": "Versuch im **Storymodus von GTA IV** am Darttisch, **eine Partie mit dem nötigen Doppel-Finish zu gewinnen**. Hör nach dem Erfolg oder drei Partien auf."
      }
    },
    "experience": {
      "family": "darts",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Playable darts board",
          "de": "Spielbares Dartboard",
          "chips": {"en": ["Darts board"], "de": ["Dartboard"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-iv-subway-platform",
    "moodIds": ["explore", "relax"],
    "type": "inspiration",
    "tags": ["on-foot"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-iv"]
    },
    "translations": {
      "en": {
        "name": "Liberty’s Underground",
        "objective": "With the subway available in GTA IV story mode, enter a station and ride a train without skipping the journey. **Step off where the neighborhood looks unfamiliar** and explore around that exit.",
        "gameObjective": "With the subway available in GTA IV story mode, enter a station and ride a train without skipping the journey. **Step off where the neighborhood looks unfamiliar** and explore around that exit."
      },
      "de": {
        "name": "Libertys Untergrund",
        "objective": "Steig im Storymodus von GTA IV bei verfügbarer U-Bahn in einen Zug und überspring die Fahrt nicht. **Steig in einem ungewohnten Viertel aus und erkunde die Straßen am Ausgang**.",
        "gameObjective": "Steig im Storymodus von GTA IV bei verfügbarer U-Bahn in einen Zug und überspring die Fahrt nicht. **Steig in einem ungewohnten Viertel aus und erkunde die Straßen am Ausgang**."
      }
    },
    "experience": {
      "family": "metro-exploration",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "open",
      "activities": [],
      "rules": ["on-foot"],
      "prerequisites": [
        {
          "en": "Subway available",
          "de": "U-Bahn verfügbar",
          "chips": {"en": ["Subway"], "de": ["U-Bahn"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-iv-perestroika-show",
    "moodIds": ["low-energy"],
    "type": "inspiration",
    "tags": ["story"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-iv"]
    },
    "translations": {
      "en": {
        "name": "Hove Beach Stage",
        "objective": "Visit Perestroika in Hove Beach in GTA IV story mode. **Sit through a cabaret show** and spend some time in the neighborhood where Niko first arrived.",
        "gameObjective": "Visit Perestroika in Hove Beach in GTA IV story mode. **Sit through a cabaret show** and spend some time in the neighborhood where Niko first arrived."
      },
      "de": {
        "name": "Bühne in Hove Beach",
        "objective": "Besuche im Storymodus von GTA IV die Perestroika in Hove Beach. **Schau dir eine Kabarettvorstellung an** und bleib noch im Viertel von Nikos Ankunft.",
        "gameObjective": "Besuche im Storymodus von GTA IV die Perestroika in Hove Beach. **Schau dir eine Kabarettvorstellung an** und bleib noch im Viertel von Nikos Ankunft."
      }
    },
    "experience": {
      "family": "stage-show",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Perestroika show available",
          "de": "Perestroika-Vorstellung verfügbar",
          "chips": {"en": ["Perestroika show"], "de": ["Perestroika-Vorstellung"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-iv-split-sides",
    "moodIds": ["relax", "low-energy"],
    "type": "inspiration",
    "tags": ["story"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-iv"]
    },
    "translations": {
      "en": {
        "name": "Split Sides Night",
        "objective": "Once Algonquin is accessible in GTA IV story mode, **enter Split Sides for a comedy show**. Leave the phone jobs alone while the comic takes the stage.",
        "gameObjective": "Once Algonquin is accessible in GTA IV story mode, **enter Split Sides for a comedy show**. Leave the phone jobs alone while the comic takes the stage."
      },
      "de": {
        "name": "Abend im Split Sides",
        "objective": "Besuche im Storymodus von GTA IV bei zugänglichem Algonquin **eine Comedyvorstellung im Split Sides**. Lass die Telefonaufträge warten, während der Comedian auftritt.",
        "gameObjective": "Besuche im Storymodus von GTA IV bei zugänglichem Algonquin **eine Comedyvorstellung im Split Sides**. Lass die Telefonaufträge warten, während der Comedian auftritt."
      }
    },
    "experience": {
      "family": "stage-show",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Algonquin and comedy club accessible",
          "de": "Algonquin und Comedyclub zugänglich",
          "chips": {"en": ["Comedy club"], "de": ["Comedyclub"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-iv-safehouse-tv",
    "moodIds": ["low-energy", "overwhelmed"],
    "type": "inspiration",
    "tags": ["story"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-iv"]
    },
    "translations": {
      "en": {
        "name": "Niko’s Television",
        "objective": "In GTA IV story mode, return to a safehouse with a working television. **Sit down and explore its channels**, letting Liberty City come to you for a change.",
        "gameObjective": "In GTA IV story mode, return to a safehouse with a working television. **Sit down and explore its channels**, letting Liberty City come to you for a change."
      },
      "de": {
        "name": "Nikos Fernseher",
        "objective": "Kehre im Storymodus von GTA IV in eine Unterkunft mit nutzbarem Fernseher zurück. **Setz dich hin und schau durch die Sender**. Lass Liberty City diesmal zu dir kommen.",
        "gameObjective": "Kehre im Storymodus von GTA IV in eine Unterkunft mit nutzbarem Fernseher zurück. **Setz dich hin und schau durch die Sender**. Lass Liberty City diesmal zu dir kommen."
      }
    },
    "experience": {
      "family": "television",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Safehouse with working television",
          "de": "Unterkunft mit nutzbarem Fernseher",
          "chips": {"en": ["Safehouse TV"], "de": ["Fernseher"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-iv-brucie-race",
    "moodIds": ["restless", "challenge"],
    "type": "challenge",
    "tags": ["racing", "three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-iv"]
    },
    "translations": {
      "en": {
        "name": "Brucie’s Starting Line",
        "objective": "With Brucie’s races unlocked in **GTA IV story mode**, call him for a race and take your chosen car. **Win one complete race**, or stop after three entries.",
        "gameObjective": "With Brucie’s races unlocked in **GTA IV story mode**, call him for a race and take your chosen car. **Win one complete race**, or stop after three entries."
      },
      "de": {
        "name": "Brucies Startlinie",
        "objective": "Ruf im **Storymodus von GTA IV** bei freigeschalteten Rennen Brucie an und nimm deinen ausgewählten Wagen. **Gewinne ein vollständiges Rennen** oder hör nach drei Starts auf.",
        "gameObjective": "Ruf im **Storymodus von GTA IV** bei freigeschalteten Rennen Brucie an und nimm deinen ausgewählten Wagen. **Gewinne ein vollständiges Rennen** oder hör nach drei Starts auf."
      }
    },
    "experience": {
      "family": "racing",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["racing"],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Brucie’s races unlocked",
          "de": "Brucies Rennen freigeschaltet",
          "chips": {"en": ["Brucie’s races"], "de": ["Brucies Rennen"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-iv-stevie-message",
    "moodIds": ["progress", "explore"],
    "type": "objective",
    "tags": ["driving"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-iv"]
    },
    "translations": {
      "en": {
        "name": "Stevie’s Photo Clue",
        "objective": "With an active Stevie car request in **GTA IV story mode**, use the photo and neighborhood named in his text. **Find that requested car and deliver it to his garage**.",
        "gameObjective": "With an active Stevie car request in **GTA IV story mode**, use the photo and neighborhood named in his text. **Find that requested car and deliver it to his garage**."
      },
      "de": {
        "name": "Stevies Fotohinweis",
        "objective": "Nutze im **Storymodus von GTA IV** bei aktiver Autoanfrage von Stevie das Foto und Viertel aus seiner Nachricht. **Finde den gesuchten Wagen und liefere ihn in seiner Garage ab**.",
        "gameObjective": "Nutze im **Storymodus von GTA IV** bei aktiver Autoanfrage von Stevie das Foto und Viertel aus seiner Nachricht. **Finde den gesuchten Wagen und liefere ihn in seiner Garage ab**."
      }
    },
    "experience": {
      "family": "vehicle-search",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["driving"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Active Stevie vehicle request",
          "de": "Aktive Autoanfrage von Stevie",
          "chips": {"en": ["Stevie's request"], "de": ["Stevies Autoanfrage"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-iv-tlad-gang-war",
    "moodIds": ["restless", "progress"],
    "type": "objective",
    "tags": ["story"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-iv"]
    },
    "translations": {
      "en": {
        "name": "Johnny’s Riders",
        "objective": "With The Lost and Damned expansion in **GTA IV** and gang wars unlocked for Johnny, **complete one available gang war alongside the Lost**, staying with the encounter until its result.",
        "gameObjective": "With The Lost and Damned expansion in **GTA IV** and gang wars unlocked for Johnny, **complete one available gang war alongside the Lost**, staying with the encounter until its result."
      },
      "de": {
        "name": "Johnnys Biker",
        "objective": "Beende in **GTA IV mit der Erweiterung The Lost and Damned** als Johnny bei freigeschalteten Gangkriegen **einen verfügbaren Gangkrieg an der Seite der Lost**. Bleib bis zum Ergebnis bei der Begegnung.",
        "gameObjective": "Beende in **GTA IV mit der Erweiterung The Lost and Damned** als Johnny bei freigeschalteten Gangkriegen **einen verfügbaren Gangkrieg an der Seite der Lost**. Bleib bis zum Ergebnis bei der Begegnung."
      }
    },
    "experience": {
      "family": "gang-war",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "The Lost and Damned; gang wars unlocked",
          "de": "The Lost and Damned; Gangkriege freigeschaltet",
          "chips": {"en": ["The Lost and Damned", "Gang wars"], "de": ["The Lost and Damned", "Gangkriege"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-iv-dwayne-backup",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["support"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-iv"]
    },
    "translations": {
      "en": {
        "name": "Dwayne’s Backup",
        "objective": "With Dwayne’s backup favor unlocked in **GTA IV story mode**, call it before a small hostile gang encounter. **Fight alongside the arriving helpers and finish or leave the encounter**.",
        "gameObjective": "With Dwayne’s backup favor unlocked in **GTA IV story mode**, call it before a small hostile gang encounter. **Fight alongside the arriving helpers and finish or leave the encounter**."
      },
      "de": {
        "name": "Dwaynes Verstärkung",
        "objective": "Ruf im **Storymodus von GTA IV** mit freigeschalteter Verstärkung von Dwayne vor einer kleinen feindlichen Gangbegegnung Hilfe. **Kämpf mit den ankommenden Helfern und beende oder verlass den Kampf**.",
        "gameObjective": "Ruf im **Storymodus von GTA IV** mit freigeschalteter Verstärkung von Dwayne vor einer kleinen feindlichen Gangbegegnung Hilfe. **Kämpf mit den ankommenden Helfern und beende oder verlass den Kampf**."
      }
    },
    "experience": {
      "family": "companion-combat",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["support"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Dwayne’s backup favor unlocked",
          "de": "Dwaynes Verstärkung freigeschaltet",
          "chips": {"en": ["Dwayne’s backup favor"], "de": ["Dwaynes Verstärkung"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-iv-kiki-wanted-call",
    "moodIds": ["curious"],
    "type": "experiment",
    "tags": ["dialogue"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-iv"]
    },
    "translations": {
      "en": {
        "name": "A Call to Kiki",
        "objective": "With Kiki’s wanted-level favor unlocked in **GTA IV story mode** and one to three stars already active outside a mission, **call her for help and see whether she clears the wanted level**.",
        "gameObjective": "With Kiki’s wanted-level favor unlocked in **GTA IV story mode** and one to three stars already active outside a mission, **call her for help and see whether she clears the wanted level**."
      },
      "de": {
        "name": "Ein Anruf bei Kiki",
        "objective": "Ruf im **Storymodus von GTA IV** Kiki an, wenn ihre Fahndungshilfe freigeschaltet ist und du außerhalb einer Mission bereits ein bis drei Sterne hast. **Probier ihre Hilfe und schau, ob sie die Fahndung beendet**.",
        "gameObjective": "Ruf im **Storymodus von GTA IV** Kiki an, wenn ihre Fahndungshilfe freigeschaltet ist und du außerhalb einer Mission bereits ein bis drei Sterne hast. **Probier ihre Hilfe und schau, ob sie die Fahndung beendet**."
      }
    },
    "experience": {
      "family": "wanted-favor",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["dialogue"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Kiki’s favor unlocked; active wanted level",
          "de": "Kikis Hilfe freigeschaltet; laufende Fahndung",
          "chips": {"en": ["Kiki’s favor", "Wanted level"], "de": ["Kikis Hilfe", "Fahndung"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-iv-change-car-escape",
    "moodIds": ["focused", "challenge"],
    "type": "challenge",
    "tags": ["driving", "one-life"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-iv"]
    },
    "translations": {
      "en": {
        "name": "Lose the Description",
        "objective": "With a wanted level already active outside a mission in **GTA IV story mode**, lose police sight and switch cars. **Escape the search zone without another crime**, or stop if Niko is arrested or killed. One attempt.",
        "gameObjective": "With a wanted level already active outside a mission in **GTA IV story mode**, lose police sight and switch cars. **Escape the search zone without another crime**, or stop if Niko is arrested or killed. One attempt."
      },
      "de": {
        "name": "Die Beschreibung wechseln",
        "objective": "Verlier im **Storymodus von GTA IV** bei laufender Fahndung außerhalb einer Mission den Sichtkontakt und wechsle das Auto. **Entkomme der Suchzone ohne weiteres Verbrechen**. Ein Versuch, bis zur Flucht, Festnahme oder zum Tod.",
        "gameObjective": "Verlier im **Storymodus von GTA IV** bei laufender Fahndung außerhalb einer Mission den Sichtkontakt und wechsle das Auto. **Entkomme der Suchzone ohne weiteres Verbrechen**. Ein Versuch, bis zur Flucht, Festnahme oder zum Tod."
      }
    },
    "experience": {
      "family": "police-escape",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["driving"],
      "rules": ["one-life"],
      "prerequisites": [
        {
          "en": "Active wanted level outside a mission",
          "de": "Laufende Fahndung außerhalb einer Mission",
          "chips": {"en": ["Wanted level"], "de": ["Fahndung"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-iv-paynspray-unseen",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["driving"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-iv"]
    },
    "translations": {
      "en": {
        "name": "Paint without Witnesses",
        "objective": "With an ordinary car and a wanted level already active in **GTA IV story mode**, lose police sight. **Enter a usable Pay ’n’ Spray unseen and check how the repaint affects the search**.",
        "gameObjective": "With an ordinary car and a wanted level already active in **GTA IV story mode**, lose police sight. **Enter a usable Pay ’n’ Spray unseen and check how the repaint affects the search**."
      },
      "de": {
        "name": "Lack ohne Zeugen",
        "objective": "Verlier im **Storymodus von GTA IV** mit normalem Auto und laufender Fahndung den Sichtkontakt. **Fahr ungesehen in ein nutzbares Pay ’n’ Spray und prüfe, was der neue Lack an der Suche ändert**.",
        "gameObjective": "Verlier im **Storymodus von GTA IV** mit normalem Auto und laufender Fahndung den Sichtkontakt. **Fahr ungesehen in ein nutzbares Pay ’n’ Spray und prüfe, was der neue Lack an der Suche ändert**."
      }
    },
    "experience": {
      "family": "repaint-escape",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["driving"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Wanted level; eligible car and repaint money",
          "de": "Fahndung; geeignetes Auto und Geld für Lackierung",
          "chips": {"en": ["Wanted level", "Car"], "de": ["Fahndung", "Auto"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-iv-carwash-return",
    "moodIds": ["relax", "overwhelmed"],
    "type": "objective",
    "tags": ["driving"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-iv"]
    },
    "translations": {
      "en": {
        "name": "Wash the City Off",
        "objective": "With a dirty car in **GTA IV story mode**, drive to an available car wash. **Have the car washed**.",
        "gameObjective": "With a dirty car in **GTA IV story mode**, drive to an available car wash. **Have the car washed**."
      },
      "de": {
        "name": "Die Stadt abwaschen",
        "objective": "Fahr im **Storymodus von GTA IV** mit einem schmutzigen Auto zu einer verfügbaren Waschanlage. **Lass den Wagen waschen**.",
        "gameObjective": "Fahr im **Storymodus von GTA IV** mit einem schmutzigen Auto zu einer verfügbaren Waschanlage. **Lass den Wagen waschen**."
      }
    },
    "experience": {
      "family": "car-wash",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["driving"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Dirty car and car-wash money",
          "de": "Schmutziger Wagen und Geld für die Wäsche",
          "chips": {"en": ["Dirty car"], "de": ["Schmutziger Wagen"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-iv-burger-health",
    "moodIds": ["low-energy", "overwhelmed"],
    "type": "objective",
    "tags": ["current-save"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-iv"]
    },
    "translations": {
      "en": {
        "name": "Burger Shot Break",
        "objective": "With Niko missing health in **GTA IV story mode**, visit an open Burger Shot. **Buy and eat a meal to restore his health**.",
        "gameObjective": "With Niko missing health in **GTA IV story mode**, visit an open Burger Shot. **Buy and eat a meal to restore his health**."
      },
      "de": {
        "name": "Pause bei Burger Shot",
        "objective": "Besuche im **Storymodus von GTA IV** mit verletztem Niko einen geöffneten Burger Shot. **Kauf und iss eine Mahlzeit, um seine Gesundheit aufzufüllen**.",
        "gameObjective": "Besuche im **Storymodus von GTA IV** mit verletztem Niko einen geöffneten Burger Shot. **Kauf und iss eine Mahlzeit, um seine Gesundheit aufzufüllen**."
      }
    },
    "experience": {
      "family": "healing-meal",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": [],
      "rules": [],
      "prerequisites": [
        {
          "en": "Missing health and meal money",
          "de": "Fehlende Gesundheit und Geld für eine Mahlzeit",
          "chips": {"en": ["Missing health"], "de": ["Fehlende Gesundheit"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-iv-internet-news",
    "moodIds": ["curious", "low-energy"],
    "type": "inspiration",
    "tags": ["story"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-iv"]
    },
    "translations": {
      "en": {
        "name": "Liberty City Headlines",
        "objective": "After a major story mission in GTA IV story mode, visit a TW@ computer and **browse the in-game news**. See what the city’s papers make of events Niko helped cause.",
        "gameObjective": "After a major story mission in GTA IV story mode, visit a TW@ computer and **browse the in-game news**. See what the city’s papers make of events Niko helped cause."
      },
      "de": {
        "name": "Schlagzeilen aus Liberty City",
        "objective": "Besuche im Storymodus von GTA IV nach einer großen Storymission einen TW@-Computer und **lies die Spielnachrichten**. Schau, was die Zeitungen aus Ereignissen machen, an denen Niko beteiligt war.",
        "gameObjective": "Besuche im Storymodus von GTA IV nach einer großen Storymission einen TW@-Computer und **lies die Spielnachrichten**. Schau, was die Zeitungen aus Ereignissen machen, an denen Niko beteiligt war."
      }
    },
    "experience": {
      "family": "city-news",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Recent major story mission",
          "de": "Kürzlich gespielte größere Storymission",
          "chips": {"en": ["Recent story mission"], "de": ["Letzte Storymission"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-iv-happiness-island",
    "moodIds": ["explore", "curious"],
    "type": "objective",
    "tags": ["exploration"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-iv"]
    },
    "translations": {
      "en": {
        "name": "The Other Liberty",
        "objective": "Once Happiness Island is accessible in **GTA IV story mode**, take a boat there and climb the statue’s accessible exterior steps. **Reach its viewing area and read the signs around the base**.",
        "gameObjective": "Once Happiness Island is accessible in **GTA IV story mode**, take a boat there and climb the statue’s accessible exterior steps. **Reach its viewing area and read the signs around the base**."
      },
      "de": {
        "name": "Die andere Freiheitsstatue",
        "objective": "Fahr im **Storymodus von GTA IV** bei zugänglicher Happiness Island mit einem Boot hin und geh die erreichbaren Außentreppen der Statue hoch. **Erreiche den Aussichtspunkt und lies die Schilder am Sockel**.",
        "gameObjective": "Fahr im **Storymodus von GTA IV** bei zugänglicher Happiness Island mit einem Boot hin und geh die erreichbaren Außentreppen der Statue hoch. **Erreiche den Aussichtspunkt und lies die Schilder am Sockel**."
      }
    },
    "experience": {
      "family": "landmark-exploration",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["exploration"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Boat; Happiness Island accessible",
          "de": "Boot; Happiness Island zugänglich",
          "chips": {"en": ["Boat", "Happiness Island"], "de": ["Boot", "Happiness Island"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-iv-ferry-docks-walk",
    "moodIds": ["explore", "relax"],
    "type": "inspiration",
    "tags": ["on-foot"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-iv"]
    },
    "translations": {
      "en": {
        "name": "Broker’s Waterfront",
        "objective": "Walk the Broker waterfront in GTA IV story mode, from Hove Beach toward the docks. **Look for the city’s working harbor** behind the streets you usually drive through.",
        "gameObjective": "Walk the Broker waterfront in GTA IV story mode, from Hove Beach toward the docks. **Look for the city’s working harbor** behind the streets you usually drive through."
      },
      "de": {
        "name": "Brokers Ufer",
        "objective": "Geh im Storymodus von GTA IV am Ufer von Broker von Hove Beach Richtung Hafen. **Schau hinter den sonst befahrenen Straßen auf den Arbeitshafen der Stadt**.",
        "gameObjective": "Geh im Storymodus von GTA IV am Ufer von Broker von Hove Beach Richtung Hafen. **Schau hinter den sonst befahrenen Straßen auf den Arbeitshafen der Stadt**."
      }
    },
    "experience": {
      "family": "waterfront-walk",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "open",
      "activities": [],
      "rules": ["on-foot"],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-iv-first-safehouse-return",
    "moodIds": ["nostalgic", "relax"],
    "type": "inspiration",
    "tags": ["free-roam"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-iv"]
    },
    "translations": {
      "en": {
        "name": "Roman’s Old Block",
        "objective": "Return to the street of Roman’s first apartment in GTA IV story mode after the story has moved on. **Walk the block and revisit the view** from Niko’s first days in Liberty City.",
        "gameObjective": "Return to the street of Roman’s first apartment in GTA IV story mode after the story has moved on. **Walk the block and revisit the view** from Niko’s first days in Liberty City."
      },
      "de": {
        "name": "Romans alter Block",
        "objective": "Besuche im Storymodus von GTA IV nach dem Storyfortschritt die Straße von Romans erster Wohnung. **Geh um den Block** und schau auf das Viertel von Nikos ersten Tagen.",
        "gameObjective": "Besuche im Storymodus von GTA IV nach dem Storyfortschritt die Straße von Romans erster Wohnung. **Geh um den Block** und schau auf das Viertel von Nikos ersten Tagen."
      }
    },
    "experience": {
      "family": "familiar-neighborhood",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["free-roam"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Story moved beyond Roman’s first apartment",
          "de": "Story über Romans erste Wohnung hinausgespielt",
          "chips": {"en": ["Later story save"], "de": ["Späterer Spielstand"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-iv-tbogt-cage-bout",
    "moodIds": ["focused", "challenge"],
    "type": "challenge",
    "tags": ["three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-iv"]
    },
    "translations": {
      "en": {
        "name": "Luis in the Cage",
        "objective": "With The Ballad of Gay Tony expansion in **GTA IV** and cage fighting available for Luis, **win the first round of three opponents**. Stop after success or three entries.",
        "gameObjective": "With The Ballad of Gay Tony expansion in **GTA IV** and cage fighting available for Luis, **win the first round of three opponents**. Stop after success or three entries."
      },
      "de": {
        "name": "Luis im Käfig",
        "objective": "Versuch in **GTA IV mit der Erweiterung The Ballad of Gay Tony** bei verfügbarem Käfigkampf als Luis, **die erste Runde mit drei Gegnern zu gewinnen**. Hör nach dem Erfolg oder drei Starts auf.",
        "gameObjective": "Versuch in **GTA IV mit der Erweiterung The Ballad of Gay Tony** bei verfügbarem Käfigkampf als Luis, **die erste Runde mit drei Gegnern zu gewinnen**. Hör nach dem Erfolg oder drei Starts auf."
      }
    },
    "experience": {
      "family": "cage-fight",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "The Ballad of Gay Tony; cage fighting unlocked",
          "de": "The Ballad of Gay Tony; Käfigkampf freigeschaltet",
          "chips": {"en": ["The Ballad of Gay Tony", "Cage fighting"], "de": ["The Ballad of Gay Tony", "Käfigkampf"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-v-golf-nine-holes",
    "moodIds": ["relax", "focused"],
    "type": "objective",
    "tags": ["full-match"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-v"]
    },
    "translations": {
      "en": {
        "name": "Nine Holes",
        "objective": "At Los Santos Golf Club in **GTA V story mode**, **finish a full nine-hole round**, choosing your clubs from the lie and wind. Your score can stay above par.",
        "gameObjective": "At Los Santos Golf Club in **GTA V story mode**, **finish a full nine-hole round**, choosing your clubs from the lie and wind. Your score can stay above par."
      },
      "de": {
        "name": "Neun Löcher",
        "objective": "Spiel im **Storymodus von GTA V** im Los Santos Golf Club **neun Löcher zu Ende**. Wähle die Schläger nach Lage und Wind. Dein Ergebnis darf über Par liegen.",
        "gameObjective": "Spiel im **Storymodus von GTA V** im Los Santos Golf Club **neun Löcher zu Ende**. Wähle die Schläger nach Lage und Wind. Dein Ergebnis darf über Par liegen."
      }
    },
    "experience": {
      "family": "golf",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": [],
      "rules": ["full-match"],
      "prerequisites": [
        {
          "en": "Golf club available",
          "de": "Golfclub verfügbar",
          "chips": {"en": ["Golf club"], "de": ["Golfclub"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-v-darts-checkout",
    "moodIds": ["focused", "challenge"],
    "type": "challenge",
    "tags": ["three-attempts"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-v"]
    },
    "translations": {
      "en": {
        "name": "Count Down in Darts",
        "objective": "At the Yellow Jack Inn darts board in **GTA V story mode**, **win one game with a double checkout**. Stop after success or three games.",
        "gameObjective": "At the Yellow Jack Inn darts board in **GTA V story mode**, **win one game with a double checkout**. Stop after success or three games."
      },
      "de": {
        "name": "Runterzählen im Gasthaus",
        "objective": "Versuch im **Storymodus von GTA V** am Dartboard des Yellow Jack Inn, **eine Partie mit Doppel-Finish zu gewinnen**. Hör nach dem Erfolg oder drei Partien auf.",
        "gameObjective": "Versuch im **Storymodus von GTA V** am Dartboard des Yellow Jack Inn, **eine Partie mit Doppel-Finish zu gewinnen**. Hör nach dem Erfolg oder drei Partien auf."
      }
    },
    "experience": {
      "family": "darts",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["three-attempts"],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-v-yoga-michael",
    "moodIds": ["relax", "low-energy"],
    "type": "inspiration",
    "tags": ["current-save"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-v"]
    },
    "translations": {
      "en": {
        "name": "Michael’s Mat",
        "objective": "After yoga unlocks for Michael in GTA V story mode, return to an available yoga spot. **Follow the breathing and poses** without turning the session into a score target.",
        "gameObjective": "After yoga unlocks for Michael in GTA V story mode, return to an available yoga spot. **Follow the breathing and poses** without turning the session into a score target."
      },
      "de": {
        "name": "Michaels Matte",
        "objective": "Kehre im Storymodus von GTA V mit Michael nach Freischaltung von Yoga an einen verfügbaren Yogaplatz zurück. **Folge Atmung und Haltungen**, ohne dir ein Punkteziel zu setzen.",
        "gameObjective": "Kehre im Storymodus von GTA V mit Michael nach Freischaltung von Yoga an einen verfügbaren Yogaplatz zurück. **Folge Atmung und Haltungen**, ohne dir ein Punkteziel zu setzen."
      }
    },
    "experience": {
      "family": "yoga",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["current-save"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Michael; yoga unlocked",
          "de": "Michael; Yoga freigeschaltet",
          "chips": {"en": ["Michael", "Yoga"], "de": ["Michael", "Yoga"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-v-shooting-range-timer",
    "moodIds": ["focused", "challenge"],
    "type": "challenge",
    "tags": ["three-attempts"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-v"]
    },
    "translations": {
      "en": {
        "name": "Ammu-Nation Targets",
        "objective": "At an Ammu-Nation shooting range in **GTA V story mode**, choose one handgun drill. **Earn at least silver**, or stop after three runs of that same drill.",
        "gameObjective": "At an Ammu-Nation shooting range in **GTA V story mode**, choose one handgun drill. **Earn at least silver**, or stop after three runs of that same drill."
      },
      "de": {
        "name": "Scheiben bei Ammu-Nation",
        "objective": "Wähle im **Storymodus von GTA V** am Ammu-Nation-Schießstand eine Pistolenübung. **Hol mindestens Silber** oder hör nach drei Läufen derselben Übung auf.",
        "gameObjective": "Wähle im **Storymodus von GTA V** am Ammu-Nation-Schießstand eine Pistolenübung. **Hol mindestens Silber** oder hör nach drei Läufen derselben Übung auf."
      }
    },
    "experience": {
      "family": "shooting-drill",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Shooting range available",
          "de": "Schießstand verfügbar",
          "chips": {"en": ["Shooting range"], "de": ["Schießstand"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-v-flight-school-landing",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["traversal"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-v"]
    },
    "translations": {
      "en": {
        "name": "Touch Down at LSIA",
        "objective": "With Flight School unlocked in **GTA V story mode**, take the Runway Landing lesson. **Complete one landing attempt and inspect its result**, noticing when you lowered the landing gear.",
        "gameObjective": "With Flight School unlocked in **GTA V story mode**, take the Runway Landing lesson. **Complete one landing attempt and inspect its result**, noticing when you lowered the landing gear."
      },
      "de": {
        "name": "Landung am LSIA",
        "objective": "Starte im **Storymodus von GTA V** bei freigeschalteter Flugschule die Landebahn-Lektion. **Beende einen Landeversuch und schau sein Ergebnis an**. Achte darauf, wann du das Fahrwerk ausgefahren hast.",
        "gameObjective": "Starte im **Storymodus von GTA V** bei freigeschalteter Flugschule die Landebahn-Lektion. **Beende einen Landeversuch und schau sein Ergebnis an**. Achte darauf, wann du das Fahrwerk ausgefahren hast."
      }
    },
    "experience": {
      "family": "flight-lesson",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["traversal"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Flight School unlocked",
          "de": "Flugschule freigeschaltet",
          "chips": {"en": ["Flight School"], "de": ["Flugschule"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-v-parachute-town",
    "moodIds": ["restless", "challenge"],
    "type": "challenge",
    "tags": ["traversal", "three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-v"]
    },
    "translations": {
      "en": {
        "name": "Land the City Jump",
        "objective": "After parachute activities unlock in **GTA V story mode**, choose an available urban jump. **Pass its checkpoints and land in the target area**, or stop after three jumps.",
        "gameObjective": "After parachute activities unlock in **GTA V story mode**, choose an available urban jump. **Pass its checkpoints and land in the target area**, or stop after three jumps."
      },
      "de": {
        "name": "Den Stadtsprung landen",
        "objective": "Wähle im **Storymodus von GTA V** nach Freischaltung der Fallschirmaktivitäten einen verfügbaren Stadtsprung. **Passiere die Checkpoints und lande im Zielbereich** oder hör nach drei Sprüngen auf.",
        "gameObjective": "Wähle im **Storymodus von GTA V** nach Freischaltung der Fallschirmaktivitäten einen verfügbaren Stadtsprung. **Passiere die Checkpoints und lande im Zielbereich** oder hör nach drei Sprüngen auf."
      }
    },
    "experience": {
      "family": "aerial-landing",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["traversal"],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Parachute activities unlocked",
          "de": "Fallschirmaktivitäten freigeschaltet",
          "chips": {"en": ["Parachute activities"], "de": ["Fallschirmaktivitäten"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-v-triathlon-vespucci",
    "moodIds": ["restless", "focused"],
    "type": "objective",
    "tags": ["racing"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-v"]
    },
    "translations": {
      "en": {
        "name": "Beach to Finish",
        "objective": "With the Vespucci Beach triathlon open in **GTA V story mode**, enter with a character you have available. **Finish its swim, bike, and running sections**, regardless of placement.",
        "gameObjective": "With the Vespucci Beach triathlon open in **GTA V story mode**, enter with a character you have available. **Finish its swim, bike, and running sections**, regardless of placement."
      },
      "de": {
        "name": "Vom Strand ins Ziel",
        "objective": "Nimm im **Storymodus von GTA V** am verfügbaren Vespucci-Beach-Triathlon mit einer verfügbaren Figur teil. **Beende Schwimm-, Rad- und Laufabschnitt**. Der Platz ist egal.",
        "gameObjective": "Nimm im **Storymodus von GTA V** am verfügbaren Vespucci-Beach-Triathlon mit einer verfügbaren Figur teil. **Beende Schwimm-, Rad- und Laufabschnitt**. Der Platz ist egal."
      }
    },
    "experience": {
      "family": "triathlon",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["racing"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Vespucci triathlon available",
          "de": "Vespucci-Triathlon verfügbar",
          "chips": {"en": ["Vespucci triathlon"], "de": ["Vespucci-Triathlon"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-v-tonya-tow",
    "moodIds": ["progress", "focused"],
    "type": "objective",
    "tags": ["driving"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-v"]
    },
    "translations": {
      "en": {
        "name": "Tonya’s Next Tow",
        "objective": "As Franklin in **GTA V story mode**, start an available towing job from Tonya. **Hook up the marked vehicle and deliver it to the impound lot**.",
        "gameObjective": "As Franklin in **GTA V story mode**, start an available towing job from Tonya. **Hook up the marked vehicle and deliver it to the impound lot**."
      },
      "de": {
        "name": "Tonyas nächster Abschlepper",
        "objective": "Starte im **Storymodus von GTA V** als Franklin einen verfügbaren Abschleppauftrag von Tonya. **Häng das markierte Fahrzeug an und bring es zum Abschleppplatz**.",
        "gameObjective": "Starte im **Storymodus von GTA V** als Franklin einen verfügbaren Abschleppauftrag von Tonya. **Häng das markierte Fahrzeug an und bring es zum Abschleppplatz**."
      }
    },
    "experience": {
      "family": "towing",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["driving"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Franklin; available Tonya job",
          "de": "Franklin; verfügbarer Tonya-Auftrag",
          "chips": {"en": ["Franklin", "Tonya job"], "de": ["Franklin", "Tonya-Auftrag"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-v-maude-alive",
    "moodIds": ["focused", "challenge"],
    "type": "challenge",
    "tags": ["three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-v"]
    },
    "translations": {
      "en": {
        "name": "Alive for Maude",
        "objective": "As Trevor with an open Maude bail-bond target in **GTA V story mode**, use her email’s location clue. **Make the target surrender and return them alive**, or stop after three capture attempts.",
        "gameObjective": "As Trevor with an open Maude bail-bond target in **GTA V story mode**, use her email’s location clue. **Make the target surrender and return them alive**, or stop after three capture attempts."
      },
      "de": {
        "name": "Lebend für Maude",
        "objective": "Nutze im **Storymodus von GTA V** als Trevor mit offenem Maude-Kopfgeld das Ortsbild ihrer Mail. **Bring das Ziel zur Aufgabe und liefere es lebend ab** oder hör nach drei Fangversuchen auf.",
        "gameObjective": "Nutze im **Storymodus von GTA V** als Trevor mit offenem Maude-Kopfgeld das Ortsbild ihrer Mail. **Bring das Ziel zur Aufgabe und liefere es lebend ab** oder hör nach drei Fangversuchen auf."
      }
    },
    "experience": {
      "family": "live-bounty",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Trevor; open Maude target",
          "de": "Trevor; offenes Ziel von Maude",
          "chips": {"en": ["Trevor", "Open Maude target"], "de": ["Trevor", "Ziel von Maude"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-v-cletus-hunt-photo",
    "moodIds": ["focused", "progress"],
    "type": "objective",
    "tags": ["hunting", "photography"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-v"]
    },
    "translations": {
      "en": {
        "name": "Trevor’s Field Report",
        "objective": "After Fair Game unlocks hunting for Trevor in **GTA V story mode**, visit the hunting area during open hours. **Kill an elk and send Cletus the required photo**.",
        "gameObjective": "After Fair Game unlocks hunting for Trevor in **GTA V story mode**, visit the hunting area during open hours. **Kill an elk and send Cletus the required photo**."
      },
      "de": {
        "name": "Trevors Jagdbericht",
        "objective": "Besuche im **Storymodus von GTA V** als Trevor nach Fair Game das Jagdgebiet während der offenen Jagdzeit. **Erlege einen Wapiti und sende Cletus das geforderte Foto**.",
        "gameObjective": "Besuche im **Storymodus von GTA V** als Trevor nach Fair Game das Jagdgebiet während der offenen Jagdzeit. **Erlege einen Wapiti und sende Cletus das geforderte Foto**."
      }
    },
    "experience": {
      "family": "hunting-report",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["hunting", "photography"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Trevor; Fair Game finished; hunting hours",
          "de": "Trevor; Fair Game beendet; Jagdzeit",
          "chips": {"en": ["Trevor", "Fair Game completed"], "de": ["Trevor", "Fair Game abgeschlossen"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-v-arms-buggy-run",
    "moodIds": ["restless", "progress"],
    "type": "objective",
    "tags": ["driving"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-v"]
    },
    "translations": {
      "en": {
        "name": "McKenzie’s Ground Run",
        "objective": "As Trevor with McKenzie Field Hangar owned in **GTA V story mode**, take an available ground arms-trafficking job. **Collect its marked cargo and bring the buggy home**.",
        "gameObjective": "As Trevor with McKenzie Field Hangar owned in **GTA V story mode**, take an available ground arms-trafficking job. **Collect its marked cargo and bring the buggy home**."
      },
      "de": {
        "name": "Bodenauftrag für McKenzie",
        "objective": "Nimm im **Storymodus von GTA V** als Trevor mit eigenem McKenzie-Hangar einen verfügbaren Bodentransport an. **Hol die markierte Fracht und bring den Buggy zurück**.",
        "gameObjective": "Nimm im **Storymodus von GTA V** als Trevor mit eigenem McKenzie-Hangar einen verfügbaren Bodentransport an. **Hol die markierte Fracht und bring den Buggy zurück**."
      }
    },
    "experience": {
      "family": "cargo-driving",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["driving"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Trevor owns McKenzie Field Hangar",
          "de": "Trevor besitzt den McKenzie-Hangar",
          "chips": {"en": ["McKenzie Hangar"], "de": ["McKenzie-Hangar"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-v-arms-air-drop",
    "moodIds": ["focused", "challenge"],
    "type": "challenge",
    "tags": ["traversal", "three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-v"]
    },
    "translations": {
      "en": {
        "name": "Cargo over the County",
        "objective": "As Trevor with McKenzie Field Hangar owned in **GTA V story mode**, start an air arms-trafficking job. **Complete its deliveries and land back at the hangar**, or stop after three flights.",
        "gameObjective": "As Trevor with McKenzie Field Hangar owned in **GTA V story mode**, start an air arms-trafficking job. **Complete its deliveries and land back at the hangar**, or stop after three flights."
      },
      "de": {
        "name": "Fracht über dem County",
        "objective": "Starte im **Storymodus von GTA V** als Trevor mit eigenem McKenzie-Hangar einen Lufttransport. **Schließ die Lieferungen ab und lande wieder am Hangar** oder hör nach drei Flügen auf.",
        "gameObjective": "Starte im **Storymodus von GTA V** als Trevor mit eigenem McKenzie-Hangar einen Lufttransport. **Schließ die Lieferungen ab und lande wieder am Hangar** oder hör nach drei Flügen auf."
      }
    },
    "experience": {
      "family": "cargo-flight",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["traversal"],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Trevor owns McKenzie Field Hangar",
          "de": "Trevor besitzt den McKenzie-Hangar",
          "chips": {"en": ["McKenzie Hangar"], "de": ["McKenzie-Hangar"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-v-lsc-custom-car",
    "moodIds": ["create"],
    "type": "creation",
    "tags": ["driving"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-v"]
    },
    "translations": {
      "en": {
        "name": "A Los Santos Build",
        "objective": "Bring a supported car to Los Santos Customs in **GTA V story mode**. Give it matching paint and wheels, then **store the customized car in your character’s garage**.",
        "gameObjective": "Bring a supported car to Los Santos Customs in **GTA V story mode**. Give it matching paint and wheels, then **store the customized car in your character’s garage**."
      },
      "de": {
        "name": "Ein Los-Santos-Build",
        "objective": "Bring im **Storymodus von GTA V** ein unterstütztes Auto zu Los Santos Customs. Wähle passenden Lack und Räder und **stell den angepassten Wagen in die Garage deiner Figur**.",
        "gameObjective": "Bring im **Storymodus von GTA V** ein unterstütztes Auto zu Los Santos Customs. Wähle passenden Lack und Räder und **stell den angepassten Wagen in die Garage deiner Figur**."
      }
    },
    "experience": {
      "family": "car-customization",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["driving"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Supported car, cash and garage space",
          "de": "Geeignetes Auto, Geld und Garagenplatz",
          "chips": {"en": ["Car", "Garage space"], "de": ["Auto", "Garagenplatz"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-v-snapmatic-framing",
    "moodIds": ["create", "relax"],
    "type": "creation",
    "tags": ["photography"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-v"]
    },
    "translations": {
      "en": {
        "name": "Vinewood in Frame",
        "objective": "At a safe viewpoint of the Vinewood sign in **GTA V story mode**, use the phone’s Snapmatic camera. **Save a shot with the sign and your parked vehicle in the same frame**.",
        "gameObjective": "At a safe viewpoint of the Vinewood sign in **GTA V story mode**, use the phone’s Snapmatic camera. **Save a shot with the sign and your parked vehicle in the same frame**."
      },
      "de": {
        "name": "Vinewood im Bild",
        "objective": "Benutze im **Storymodus von GTA V** an einem sicheren Blickpunkt zum Vinewood-Schild die Snapmatic-Kamera des Handys. **Speichere ein Foto mit Schild und geparktem Fahrzeug im selben Bild**.",
        "gameObjective": "Benutze im **Storymodus von GTA V** an einem sicheren Blickpunkt zum Vinewood-Schild die Snapmatic-Kamera des Handys. **Speichere ein Foto mit Schild und geparktem Fahrzeug im selben Bild**."
      }
    },
    "experience": {
      "family": "photography",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["photography"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Safe viewpoint and parked vehicle",
          "de": "Sicherer Aussichtspunkt und geparktes Fahrzeug",
          "chips": {"en": ["Viewpoint", "Vehicle"], "de": ["Aussichtspunkt", "Fahrzeug"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-v-chiliad-cable-car",
    "moodIds": ["explore", "low-energy"],
    "type": "inspiration",
    "tags": ["traversal"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-v"]
    },
    "translations": {
      "en": {
        "name": "Up by Cable Car",
        "objective": "Ride Mount Chiliad’s cable car in GTA V story mode. **Wander the summit paths and look over Blaine County** from the station instead of planning a stunt jump.",
        "gameObjective": "Ride Mount Chiliad’s cable car in GTA V story mode. **Wander the summit paths and look over Blaine County** from the station instead of planning a stunt jump."
      },
      "de": {
        "name": "Mit der Seilbahn hoch",
        "objective": "Fahr im Storymodus von GTA V mit der Seilbahn auf den Mount Chiliad. **Schlendere über die Gipfelwege** und schau von der Station auf Blaine County.",
        "gameObjective": "Fahr im Storymodus von GTA V mit der Seilbahn auf den Mount Chiliad. **Schlendere über die Gipfelwege** und schau von der Station auf Blaine County."
      }
    },
    "experience": {
      "family": "cable-car",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["traversal"],
      "rules": [],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-v-pier-rides",
    "moodIds": ["relax"],
    "type": "inspiration",
    "tags": ["free-roam"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-v"]
    },
    "translations": {
      "en": {
        "name": "Del Perro Fairground",
        "objective": "Visit Del Perro Pier in GTA V story mode and **take the fairground ride you are in the mood for**. Stay around the boardwalk and enjoy Los Santos at a slower pace.",
        "gameObjective": "Visit Del Perro Pier in GTA V story mode and **take the fairground ride you are in the mood for**. Stay around the boardwalk and enjoy Los Santos at a slower pace."
      },
      "de": {
        "name": "Jahrmarkt in Del Perro",
        "objective": "Besuche im Storymodus von GTA V den Del-Perro-Pier und **nimm die Jahrmarktfahrt, auf die du Lust hast**. Bleib noch auf der Promenade und erlebe Los Santos etwas langsamer.",
        "gameObjective": "Besuche im Storymodus von GTA V den Del-Perro-Pier und **nimm die Jahrmarktfahrt, auf die du Lust hast**. Bleib noch auf der Promenade und erlebe Los Santos etwas langsamer."
      }
    },
    "experience": {
      "family": "fairground",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["free-roam"],
      "rules": [],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-v-sea-race",
    "moodIds": ["restless", "challenge"],
    "type": "challenge",
    "tags": ["racing", "three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-v"]
    },
    "translations": {
      "en": {
        "name": "Race the Water",
        "objective": "With sea races available in **GTA V story mode**, enter one jet-ski race. **Finish in first place**, or stop after three entries on that same course.",
        "gameObjective": "With sea races available in **GTA V story mode**, enter one jet-ski race. **Finish in first place**, or stop after three entries on that same course."
      },
      "de": {
        "name": "Rennen auf dem Wasser",
        "objective": "Starte im **Storymodus von GTA V** bei verfügbaren Seerennen ein Jetski-Rennen. **Komm als Erster ins Ziel** oder hör nach drei Starts auf derselben Strecke auf.",
        "gameObjective": "Starte im **Storymodus von GTA V** bei verfügbaren Seerennen ein Jetski-Rennen. **Komm als Erster ins Ziel** oder hör nach drei Starts auf derselben Strecke auf."
      }
    },
    "experience": {
      "family": "water-racing",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["racing"],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Sea races available",
          "de": "Seerennen verfügbar",
          "chips": {"en": ["Sea races"], "de": ["Seerennen"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-v-michael-bullet-time",
    "moodIds": ["curious", "focused"],
    "type": "experiment",
    "tags": ["abilities"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-v"]
    },
    "translations": {
      "en": {
        "name": "Michael’s Extra Second",
        "objective": "As Michael in **GTA V story mode**, approach a small hostile gang encounter. **Use his slow-motion shooting ability to change targets during one activation**, then finish or leave the fight.",
        "gameObjective": "As Michael in **GTA V story mode**, approach a small hostile gang encounter. **Use his slow-motion shooting ability to change targets during one activation**, then finish or leave the fight."
      },
      "de": {
        "name": "Michaels Extra-Sekunde",
        "objective": "Nähere dich im **Storymodus von GTA V** als Michael einer kleinen feindlichen Ganggruppe. **Wechsle während einer Aktivierung seiner Schuss-Zeitlupe das Ziel**. Beende oder verlass den Kampf.",
        "gameObjective": "Nähere dich im **Storymodus von GTA V** als Michael einer kleinen feindlichen Ganggruppe. **Wechsle während einer Aktivierung seiner Schuss-Zeitlupe das Ziel**. Beende oder verlass den Kampf."
      }
    },
    "experience": {
      "family": "ability-combat",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["abilities"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Michael’s ability charged",
          "de": "Michaels Fähigkeit aufgeladen",
          "chips": {"en": ["Michael's ability"], "de": ["Michaels Fähigkeit"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-v-franklin-barber",
    "moodIds": ["create", "relax"],
    "type": "creation",
    "tags": ["outfit"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-v"]
    },
    "translations": {
      "en": {
        "name": "Franklin’s New Cut",
        "objective": "As Franklin in **GTA V story mode**, visit an available barber with enough cash. **Choose and apply a haircut that works with your current outfit**.",
        "gameObjective": "As Franklin in **GTA V story mode**, visit an available barber with enough cash. **Choose and apply a haircut that works with your current outfit**."
      },
      "de": {
        "name": "Franklins neuer Schnitt",
        "objective": "Besuche im **Storymodus von GTA V** als Franklin mit genug Geld einen verfügbaren Friseur. **Wähle einen Haarschnitt zu deinem aktuellen Outfit und lass ihn anwenden**.",
        "gameObjective": "Besuche im **Storymodus von GTA V** als Franklin mit genug Geld einen verfügbaren Friseur. **Wähle einen Haarschnitt zu deinem aktuellen Outfit und lass ihn anwenden**."
      }
    },
    "experience": {
      "family": "haircut",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["outfit"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Franklin; barber money",
          "de": "Franklin; Geld für den Friseur",
          "chips": {"en": ["Franklin"], "de": ["Franklin"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-v-film-afternoon",
    "moodIds": ["low-energy", "curious"],
    "type": "inspiration",
    "tags": ["story"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-v"]
    },
    "translations": {
      "en": {
        "name": "Los Santos Cinema",
        "objective": "Visit an open cinema in GTA V story mode and buy a ticket. **Let the in-game film play** while your next heist waits.",
        "gameObjective": "Visit an open cinema in GTA V story mode and buy a ticket. **Let the in-game film play** while your next heist waits."
      },
      "de": {
        "name": "Kino in Los Santos",
        "objective": "Besuche im Storymodus von GTA V ein geöffnetes Kino und kauf eine Karte. **Lass den Spielfilm laufen**, während der nächste Raubzug wartet.",
        "gameObjective": "Besuche im Storymodus von GTA V ein geöffnetes Kino und kauf eine Karte. **Lass den Spielfilm laufen**, während der nächste Raubzug wartet."
      }
    },
    "experience": {
      "family": "cinema",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Open cinema; ticket money",
          "de": "Geöffnetes Kino; Geld für eine Karte",
          "chips": {"en": ["Cinema"], "de": ["Kino"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-sa-gym-move",
    "moodIds": ["progress"],
    "type": "objective",
    "tags": ["abilities"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-sa"]
    },
    "translations": {
      "en": {
        "name": "Learn a Move",
        "objective": "Visit a San Andreas gym and **learn one fighting move from its trainer, then use it once outside**.",
        "gameObjective": "Visit a San Andreas gym and **learn one fighting move from its trainer, then use it once outside**."
      },
      "de": {
        "name": "Einen Griff lernen",
        "objective": "Besuche ein Fitnessstudio in San Andreas, **lerne beim Trainer einen Kampfgriff und nutze ihn danach einmal draußen**.",
        "gameObjective": "Besuche ein Fitnessstudio in San Andreas, **lerne beim Trainer einen Kampfgriff und nutze ihn danach einmal draußen**."
      }
    },
    "experience": {
      "family": "combat-lesson",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["abilities"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Gym trainer available; required physique",
          "de": "Fitnessstudio-Trainer verfügbar; nötige Fitness",
          "chips": {"en": ["Gym trainer", "Physique"], "de": ["Fitnessstudio-Trainer", "Fitness"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-sa-lowrider-rhythm",
    "moodIds": ["challenge"],
    "type": "challenge",
    "tags": ["rhythm", "three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-sa"]
    },
    "translations": {
      "en": {
        "name": "Lowrider Rhythm",
        "objective": "Enter a lowrider dance event in **GTA: San Andreas** and **outscore your opponent**. Finish after a win or three attempts.",
        "gameObjective": "Enter a lowrider dance event in **GTA: San Andreas** and **outscore your opponent**. Finish after a win or three attempts."
      },
      "de": {
        "name": "Lowrider im Takt",
        "objective": "Nimm in **GTA: San Andreas** an einem Lowrider-Wettbewerb teil und **überbiete die Punktzahl deines Gegners**. Hör nach einem Sieg oder drei Versuchen auf.",
        "gameObjective": "Nimm in **GTA: San Andreas** an einem Lowrider-Wettbewerb teil und **überbiete die Punktzahl deines Gegners**. Hör nach einem Sieg oder drei Versuchen auf."
      }
    },
    "experience": {
      "family": "lowrider-rhythm",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["rhythm"],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Lowrider event unlocked; eligible car",
          "de": "Lowrider-Event freigeschaltet; geeignetes Auto",
          "chips": {"en": ["Lowrider event", "Car"], "de": ["Lowrider-Event", "Auto"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-sa-gang-tag",
    "moodIds": ["explore"],
    "type": "objective",
    "tags": ["collectibles"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-sa"]
    },
    "translations": {
      "en": {
        "name": "Paint the Block",
        "objective": "Find a rival gang tag away from Grove Street and **spray over it, then leave the area without a wanted level**.",
        "gameObjective": "Find a rival gang tag away from Grove Street and **spray over it, then leave the area without a wanted level**."
      },
      "de": {
        "name": "Den Block markieren",
        "objective": "Finde abseits von Grove Street ein feindliches Gang-Graffiti, **übersprüh es und verlass das Gebiet ohne Fahndungssterne**.",
        "gameObjective": "Finde abseits von Grove Street ein feindliches Gang-Graffiti, **übersprüh es und verlass das Gebiet ohne Fahndungssterne**."
      }
    },
    "experience": {
      "family": "graffiti",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["collectibles"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Spray can and unpainted gang tag",
          "de": "Sprühdose und nicht übersprühtes Gang-Graffiti",
          "chips": {"en": ["Spray can", "Gang tag"], "de": ["Sprühdose", "Gang-Graffiti"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-sa-firetruck-call",
    "moodIds": ["restless"],
    "type": "objective",
    "tags": ["driving"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-sa"]
    },
    "translations": {
      "en": {
        "name": "Firefighter Shift",
        "objective": "Start the firetruck side job and **extinguish one full call, including any people who catch fire**.",
        "gameObjective": "Start the firetruck side job and **extinguish one full call, including any people who catch fire**."
      },
      "de": {
        "name": "Schicht bei der Feuerwehr",
        "objective": "Starte den Feuerwehr-Nebenjob und **lösche einen vollständigen Einsatz, auch brennende Personen**.",
        "gameObjective": "Starte den Feuerwehr-Nebenjob und **lösche einen vollständigen Einsatz, auch brennende Personen**."
      }
    },
    "experience": {
      "family": "firefighting",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["driving"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Firetruck available",
          "de": "Feuerwehrwagen verfügbar",
          "chips": {"en": ["Firetruck"], "de": ["Feuerwehrwagen"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-sa-driving-school",
    "moodIds": ["focused"],
    "type": "objective",
    "tags": ["driving"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-sa"]
    },
    "translations": {
      "en": {
        "name": "One School Lesson",
        "objective": "At driving school, **pass one lesson you have not cleared before**.",
        "gameObjective": "At driving school, **pass one lesson you have not cleared before**."
      },
      "de": {
        "name": "Eine Fahrstunde",
        "objective": "Bestehe in der Fahrschule **eine Lektion, die du bisher noch nicht geschafft hast**.",
        "gameObjective": "Bestehe in der Fahrschule **eine Lektion, die du bisher noch nicht geschafft hast**."
      }
    },
    "experience": {
      "family": "driving-lesson",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["driving"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Driving school unlocked; unfinished lesson",
          "de": "Fahrschule freigeschaltet; offene Lektion",
          "chips": {"en": ["Driving school", "Unfinished lesson"], "de": ["Fahrschule", "Lektion"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-sa-territory-defend",
    "moodIds": ["challenge"],
    "type": "challenge",
    "tags": ["one-life"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-sa"]
    },
    "translations": {
      "en": {
        "name": "Hold the Turf",
        "objective": "Once gang wars are unlocked, **defend one Grove Street territory without using a vehicle during the fight**. One attempt.",
        "gameObjective": "Once gang wars are unlocked, **defend one Grove Street territory without using a vehicle during the fight**. One attempt."
      },
      "de": {
        "name": "Revier halten",
        "objective": "Wenn Gangkriege freigeschaltet sind, **verteidige ein Grove-Street-Revier ohne Fahrzeug im Kampf**. Ein Versuch.",
        "gameObjective": "Wenn Gangkriege freigeschaltet sind, **verteidige ein Grove-Street-Revier ohne Fahrzeug im Kampf**. Ein Versuch."
      }
    },
    "experience": {
      "family": "territory-defense",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["one-life"],
      "prerequisites": [
        {
          "en": "Gang wars unlocked; territory under attack",
          "de": "Gangkriege freigeschaltet; angegriffenes Revier",
          "chips": {"en": ["Gang wars", "Territory under attack"], "de": ["Gangkriege", "Angegriffenes Revier"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-sa-clothes-reaction",
    "moodIds": ["create", "relax"],
    "type": "creation",
    "tags": ["outfit"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-sa"]
    },
    "translations": {
      "en": {
        "name": "Change CJ's Look",
        "objective": "At an unlocked clothing shop in **GTA: San Andreas**, **put together and buy an outfit for CJ** using clothes you can afford.",
        "gameObjective": "At an unlocked clothing shop in **GTA: San Andreas**, **put together and buy an outfit for CJ** using clothes you can afford."
      },
      "de": {
        "name": "CJs neuer Look",
        "objective": "Stell in **GTA: San Andreas** in einem freigeschalteten Kleiderladen **ein Outfit für CJ zusammen und kauf es** mit deinem vorhandenen Geld.",
        "gameObjective": "Stell in **GTA: San Andreas** in einem freigeschalteten Kleiderladen **ein Outfit für CJ zusammen und kauf es** mit deinem vorhandenen Geld."
      }
    },
    "experience": {
      "family": "outfit",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["outfit"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Clothing shop unlocked; spare cash",
          "de": "Kleiderladen freigeschaltet; Geld verfügbar",
          "chips": {"en": ["Clothing shop"], "de": ["Kleiderladen"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-sa-ambulance-round",
    "moodIds": ["progress"],
    "type": "objective",
    "tags": ["driving"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-sa"]
    },
    "translations": {
      "en": {
        "name": "One Paramedic Round",
        "objective": "Start the ambulance side job and **deliver the first group of patients to hospital**.",
        "gameObjective": "Start the ambulance side job and **deliver the first group of patients to hospital**."
      },
      "de": {
        "name": "Eine Sanitäter-Runde",
        "objective": "Starte den Krankenwagen-Nebenjob und **bring die erste Gruppe Verletzter ins Krankenhaus**.",
        "gameObjective": "Starte den Krankenwagen-Nebenjob und **bring die erste Gruppe Verletzter ins Krankenhaus**."
      }
    },
    "experience": {
      "family": "ambulance",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["driving"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Ambulance available",
          "de": "Krankenwagen verfügbar",
          "chips": {"en": ["Ambulance"], "de": ["Krankenwagen"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-sa-camera-landmark",
    "moodIds": ["explore"],
    "type": "objective",
    "tags": ["photography"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-sa"]
    },
    "translations": {
      "en": {
        "name": "San Fierro Snapshot",
        "objective": "Once San Fierro is open, **find and photograph one hidden snapshot marker** using the in-game camera.",
        "gameObjective": "Once San Fierro is open, **find and photograph one hidden snapshot marker** using the in-game camera."
      },
      "de": {
        "name": "Foto in San Fierro",
        "objective": "Wenn San Fierro offen ist, **finde einen versteckten Foto-Marker und fotografiere ihn mit der Spielkamera**.",
        "gameObjective": "Wenn San Fierro offen ist, **finde einen versteckten Foto-Marker und fotografiere ihn mit der Spielkamera**."
      }
    },
    "experience": {
      "family": "photography",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["photography"],
      "rules": [],
      "prerequisites": [
        {
          "en": "San Fierro unlocked; camera",
          "de": "San Fierro freigeschaltet; Kamera",
          "chips": {"en": ["San Fierro", "Camera"], "de": ["San Fierro", "Kamera"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-iv-police-computer",
    "moodIds": ["curious"],
    "type": "objective",
    "tags": ["story"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-iv"]
    },
    "translations": {
      "en": {
        "name": "A Case from the Car",
        "objective": "In a police car, use the computer to **find and complete one current-crime assignment**.",
        "gameObjective": "In a police car, use the computer to **find and complete one current-crime assignment**."
      },
      "de": {
        "name": "Ein Fall aus dem Streifenwagen",
        "objective": "Nutze den Computer eines Polizeiwagens und **erledige einen Auftrag zu einem aktuellen Verbrechen**.",
        "gameObjective": "Nutze den Computer eines Polizeiwagens und **erledige einen Auftrag zu einem aktuellen Verbrechen**."
      }
    },
    "experience": {
      "family": "police-job",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Police car with usable computer",
          "de": "Polizeiwagen mit nutzbarem Computer",
          "chips": {"en": ["Police computer"], "de": ["Polizeicomputer"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-iv-cab-ride",
    "moodIds": ["relax"],
    "type": "inspiration",
    "tags": ["driving"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-iv"]
    },
    "translations": {
      "en": {
        "name": "See Liberty City by Cab",
        "objective": "In GTA IV story mode, **call a taxi and ride without skipping** to a district you rarely visit. Wander from the drop-off and see Liberty City at street level.",
        "gameObjective": "In GTA IV story mode, **call a taxi and ride without skipping** to a district you rarely visit. Wander from the drop-off and see Liberty City at street level."
      },
      "de": {
        "name": "Liberty City per Taxi",
        "objective": "Ruf im Storymodus von GTA IV ein Taxi und **fahr ohne Überspringen in einen selten besuchten Stadtteil**. Schlendere vom Ausstieg aus weiter und schau dir Liberty City auf Straßenhöhe an.",
        "gameObjective": "Ruf im Storymodus von GTA IV ein Taxi und **fahr ohne Überspringen in einen selten besuchten Stadtteil**. Schlendere vom Ausstieg aus weiter und schau dir Liberty City auf Straßenhöhe an."
      }
    },
    "experience": {
      "family": "taxi-roaming",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["driving"],
      "rules": [],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-iv-stunt-jump",
    "moodIds": ["challenge"],
    "type": "challenge",
    "tags": ["driving", "three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-iv"]
    },
    "translations": {
      "en": {
        "name": "One Stunt Jump",
        "objective": "Find a stunt jump in Liberty City and **land it cleanly**. Stop after three attempts.",
        "gameObjective": "Find a stunt jump in Liberty City and **land it cleanly**. Stop after three attempts."
      },
      "de": {
        "name": "Ein Stunt-Sprung",
        "objective": "Finde in Liberty City einen Stunt-Sprung und **lande sauber**. Höre nach drei Versuchen auf.",
        "gameObjective": "Finde in Liberty City einen Stunt-Sprung und **lande sauber**. Höre nach drei Versuchen auf."
      }
    },
    "experience": {
      "family": "stunt-jump",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["driving"],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Car and accessible stunt jump",
          "de": "Auto und zugänglicher Stunt-Sprung",
          "chips": {"en": ["Car", "Stunt jump"], "de": ["Auto", "Stunt-Sprung"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-iv-friend-favorite",
    "moodIds": ["relax"],
    "type": "objective",
    "tags": ["story"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-iv"]
    },
    "translations": {
      "en": {
        "name": "A Friend's Invitation",
        "objective": "Accept a call from a friend and **finish the activity they suggest without cancelling**.",
        "gameObjective": "Accept a call from a friend and **finish the activity they suggest without cancelling**."
      },
      "de": {
        "name": "Eine Einladung annehmen",
        "objective": "Nimm den Anruf eines Freundes an und **mach seine vorgeschlagene Aktivität zu Ende, ohne abzusagen**.",
        "gameObjective": "Nimm den Anruf eines Freundes an und **mach seine vorgeschlagene Aktivität zu Ende, ohne abzusagen**."
      }
    },
    "experience": {
      "family": "friend-outing",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Available friend invitation",
          "de": "Verfügbare Einladung eines Freundes",
          "chips": {"en": ["Friend invitation"], "de": ["Freundeseinladung"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-iv-little-jacob",
    "moodIds": ["progress"],
    "type": "objective",
    "tags": ["trading"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-iv"]
    },
    "translations": {
      "en": {
        "name": "A Delivery for Jacob",
        "objective": "If Little Jacob's work is available, **complete one package delivery without abandoning the drop-off**.",
        "gameObjective": "If Little Jacob's work is available, **complete one package delivery without abandoning the drop-off**."
      },
      "de": {
        "name": "Lieferung für Jacob",
        "objective": "Wenn Little Jacobs Aufträge verfügbar sind, **erledige eine Paketlieferung bis zur Übergabe**.",
        "gameObjective": "Wenn Little Jacobs Aufträge verfügbar sind, **erledige eine Paketlieferung bis zur Übergabe**."
      }
    },
    "experience": {
      "family": "courier",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["trading"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Little Jacob’s work unlocked",
          "de": "Little Jacobs Aufträge freigeschaltet",
          "chips": {"en": ["Little Jacob’s work"], "de": ["Little Jacobs Aufträge"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-iv-pigeon-search",
    "moodIds": ["explore"],
    "type": "objective",
    "tags": ["collectibles"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-iv"]
    },
    "translations": {
      "en": {
        "name": "A Pigeon in Plain Sight",
        "objective": "Explore a block you have not searched and **find one hidden pigeon without using an external map**.",
        "gameObjective": "Explore a block you have not searched and **find one hidden pigeon without using an external map**."
      },
      "de": {
        "name": "Eine Taube entdecken",
        "objective": "Erkunde einen noch nicht abgesuchten Häuserblock und **finde eine versteckte Taube ohne externe Karte**.",
        "gameObjective": "Erkunde einen noch nicht abgesuchten Häuserblock und **finde eine versteckte Taube ohne externe Karte**."
      }
    },
    "experience": {
      "family": "collectible-search",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["collectibles"],
      "rules": [],
      "prerequisites": [],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-iv-internet-date",
    "moodIds": ["curious"],
    "type": "objective",
    "tags": ["dialogue"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-iv"]
    },
    "translations": {
      "en": {
        "name": "Meet Through the Web",
        "objective": "In **GTA IV story mode**, use an already confirmed invitation from in-game internet dating. **Pick up your date and do your chosen activity together**.",
        "gameObjective": "In **GTA IV story mode**, use an already confirmed invitation from in-game internet dating. **Pick up your date and do your chosen activity together**."
      },
      "de": {
        "name": "Treffen übers Netz",
        "objective": "Nutze im **Storymodus von GTA IV** eine bereits bestätigte Verabredung aus dem Internet-Dating. **Hol dein Date ab und macht die gewählte Aktivität zusammen**.",
        "gameObjective": "Nutze im **Storymodus von GTA IV** eine bereits bestätigte Verabredung aus dem Internet-Dating. **Hol dein Date ab und macht die gewählte Aktivität zusammen**."
      }
    },
    "experience": {
      "family": "dating",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["dialogue"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Bereits bestätigte Internet-Verabredung",
          "en": "Already confirmed internet date",
          "chips": {"en": ["Internet date"], "de": ["Internet-Verabredung"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-iv-bridge-crossing",
    "moodIds": ["focused"],
    "type": "challenge",
    "tags": ["driving", "three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-iv"]
    },
    "translations": {
      "en": {
        "name": "One Clean Crossing",
        "objective": "Drive from Broker to Algonquin **without a collision or a wanted star**. Stop after three trips.",
        "gameObjective": "Drive from Broker to Algonquin **without a collision or a wanted star**. Stop after three trips."
      },
      "de": {
        "name": "Eine saubere Überfahrt",
        "objective": "Fahr von Broker nach Algonquin **ohne Zusammenstoß und ohne Fahndungsstern**. Nach drei Fahrten ist Schluss.",
        "gameObjective": "Fahr von Broker nach Algonquin **ohne Zusammenstoß und ohne Fahndungsstern**. Nach drei Fahrten ist Schluss."
      }
    },
    "experience": {
      "family": "road-navigation",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["driving"],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Algonquin accessible; car",
          "de": "Algonquin zugänglich; Auto",
          "chips": {"en": ["Algonquin", "Car"], "de": ["Algonquin", "Auto"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-iv-helicopter-tour",
    "moodIds": ["nostalgic", "relax"],
    "type": "inspiration",
    "tags": ["exploration"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-iv"]
    },
    "translations": {
      "en": {
        "name": "Liberty from Above",
        "objective": "Take a helicopter tour over Liberty City in GTA IV story mode. **Look down on neighborhoods and places you remember** from Niko’s story.",
        "gameObjective": "Take a helicopter tour over Liberty City in GTA IV story mode. **Look down on neighborhoods and places you remember** from Niko’s story."
      },
      "de": {
        "name": "Liberty von oben",
        "objective": "Mach im Storymodus von GTA IV einen Hubschrauberrundflug über Liberty City. **Schau von oben auf Viertel und Orte**, die du aus Nikos Geschichte kennst.",
        "gameObjective": "Mach im Storymodus von GTA IV einen Hubschrauberrundflug über Liberty City. **Schau von oben auf Viertel und Orte**, die du aus Nikos Geschichte kennst."
      }
    },
    "experience": {
      "family": "aerial-sightseeing",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["exploration"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Helicopter tours available",
          "de": "Hubschrauberrundflüge verfügbar",
          "chips": {"en": ["Helicopter tours"], "de": ["Hubschrauberrundflüge"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-v-character-handoff",
    "moodIds": ["curious", "explore"],
    "type": "inspiration",
    "tags": ["story"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 30,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-v"]
    },
    "translations": {
      "en": {
        "name": "Three Lives, One Afternoon",
        "objective": "In GTA V story mode, switch between Michael, Franklin and Trevor. **Let each character’s surroundings lead you to an activity** that suits them.",
        "gameObjective": "In GTA V story mode, switch between Michael, Franklin and Trevor. **Let each character’s surroundings lead you to an activity** that suits them."
      },
      "de": {
        "name": "Drei Leben, ein Nachmittag",
        "objective": "Wechsle im Storymodus von GTA V zwischen Michael, Franklin und Trevor. Lass dich von ihrer jeweiligen Umgebung **zu einer Aktivität führen, die zu dieser Figur passt**.",
        "gameObjective": "Wechsle im Storymodus von GTA V zwischen Michael, Franklin und Trevor. Lass dich von ihrer jeweiligen Umgebung **zu einer Aktivität führen, die zu dieser Figur passt**."
      }
    },
    "experience": {
      "family": "character-activities",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "open",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "All three protagonists and unique activities unlocked",
          "de": "Alle drei Hauptfiguren und ihre Aktivitäten freigeschaltet",
          "chips": {"en": ["Three protagonists"], "de": ["Drei Hauptfiguren"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-v-franklin-focus",
    "moodIds": ["challenge"],
    "type": "challenge",
    "tags": ["driving", "abilities", "three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-v"]
    },
    "translations": {
      "en": {
        "name": "Franklin's Slow Motion",
        "objective": "As Franklin in **GTA V**, **overtake three cars in dense traffic during one driving-ability activation without touching them**. Finish after success or three activations.",
        "gameObjective": "As Franklin in **GTA V**, **overtake three cars in dense traffic during one driving-ability activation without touching them**. Finish after success or three activations."
      },
      "de": {
        "name": "Franklins Zeitlupe",
        "objective": "Nutze als Franklin in **GTA V** seine Fahr-Zeitlupe und **überhole in einer Aktivierung drei Autos im dichten Verkehr, ohne sie zu berühren**. Hör nach dem Erfolg oder drei Aktivierungen auf.",
        "gameObjective": "Nutze als Franklin in **GTA V** seine Fahr-Zeitlupe und **überhole in einer Aktivierung drei Autos im dichten Verkehr, ohne sie zu berühren**. Hör nach dem Erfolg oder drei Aktivierungen auf."
      }
    },
    "experience": {
      "family": "ability-driving",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["driving", "abilities"],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Franklin’s driving ability charged",
          "de": "Franklins Fahrfähigkeit aufgeladen",
          "chips": {"en": ["Franklin's ability"], "de": ["Franklins Fähigkeit"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-v-strangers-thread",
    "moodIds": ["focused"],
    "type": "objective",
    "tags": ["story"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-v"]
    },
    "translations": {
      "en": {
        "name": "A Stranger's Favor",
        "objective": "Choose a Strangers and Freaks marker and **finish one complete encounter for that character**.",
        "gameObjective": "Choose a Strangers and Freaks marker and **finish one complete encounter for that character**."
      },
      "de": {
        "name": "Gefallen für Fremde",
        "objective": "Wähle einen Fremde-und-Freaks-Marker und **spiele eine vollständige Begegnung für diese Figur**.",
        "gameObjective": "Wähle einen Fremde-und-Freaks-Marker und **spiele eine vollständige Begegnung für diese Figur**."
      }
    },
    "experience": {
      "family": "side-mission",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Available Strangers and Freaks encounter",
          "de": "Verfügbare Fremde-und-Freaks-Begegnung",
          "chips": {"en": ["Strangers and Freaks"], "de": ["Fremde und Freaks"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-v-heist-prep",
    "moodIds": ["progress"],
    "type": "objective",
    "tags": ["story"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-v"]
    },
    "translations": {
      "en": {
        "name": "One Heist Preparation",
        "objective": "In Story Mode, **complete one available heist setup and inspect what equipment or crew it changes**.",
        "gameObjective": "In Story Mode, **complete one available heist setup and inspect what equipment or crew it changes**."
      },
      "de": {
        "name": "Eine Raubzug-Vorbereitung",
        "objective": "Erledige im Story-Modus **eine verfügbare Raubzug-Vorbereitung und prüfe, was sich bei Ausrüstung oder Team ändert**.",
        "gameObjective": "Erledige im Story-Modus **eine verfügbare Raubzug-Vorbereitung und prüfe, was sich bei Ausrüstung oder Team ändert**."
      }
    },
    "experience": {
      "family": "heist-setup",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["story"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Available heist setup",
          "de": "Verfügbare Raubzug-Vorbereitung",
          "chips": {"en": ["Heist setup"], "de": ["Raubzug-Vorbereitung"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-v-tennis-set",
    "moodIds": ["challenge"],
    "type": "challenge",
    "tags": ["three-attempts"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-v"]
    },
    "translations": {
      "en": {
        "name": "Win at the Net",
        "objective": "Play tennis with an available character and **win one game using volleys at the net**. Stop after three games.",
        "gameObjective": "Play tennis with an available character and **win one game using volleys at the net**. Stop after three games."
      },
      "de": {
        "name": "Ein Spiel am Netz",
        "objective": "Spiel Tennis mit einer verfügbaren Figur und **gewinne ein Spiel mit Volleys am Netz**. Nach drei Spielen ist Schluss.",
        "gameObjective": "Spiel Tennis mit einer verfügbaren Figur und **gewinne ein Spiel mit Volleys am Netz**. Nach drei Spielen ist Schluss."
      }
    },
    "experience": {
      "family": "tennis",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": [],
      "rules": ["three-attempts"],
      "prerequisites": [
        {
          "en": "Character with tennis available",
          "de": "Figur mit verfügbarem Tennis",
          "chips": {"en": ["Tennis"], "de": ["Tennis"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-v-stock-ripple",
    "moodIds": ["curious"],
    "type": "experiment",
    "tags": ["trading"],
    "minimumDurationMinutes": 1,
    "suggestedDurationMinutes": 5,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-v"]
    },
    "translations": {
      "en": {
        "name": "Watch a Stock Move",
        "objective": "In **GTA V story mode**, buy a small holding in one stock. **Play a short available activity, then check how your investment has changed** before deciding whether to sell.",
        "gameObjective": "In **GTA V story mode**, buy a small holding in one stock. **Play a short available activity, then check how your investment has changed** before deciding whether to sell."
      },
      "de": {
        "name": "Eine Aktie beobachten",
        "objective": "Kauf im **Storymodus von GTA V** eine kleine Menge einer Aktie. **Spiel eine kurze verfügbare Aktivität und schau danach, wie sich dein Investment verändert hat**, bevor du über einen Verkauf entscheidest.",
        "gameObjective": "Kauf im **Storymodus von GTA V** eine kleine Menge einer Aktie. **Spiel eine kurze verfügbare Aktivität und schau danach, wie sich dein Investment verändert hat**, bevor du über einen Verkauf entscheidest."
      }
    },
    "experience": {
      "family": "stock-observation",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "attempt",
      "activities": ["trading"],
      "rules": [],
      "prerequisites": [
        {
          "de": "Aktienhandel und Geld; kurze verfügbare Aktivität",
          "en": "Stock trading and funds; short available activity",
          "chips": {"en": ["Stock trading"], "de": ["Aktienhandel"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-v-underwater-wreck",
    "moodIds": ["explore"],
    "type": "objective",
    "tags": ["diving"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-v"]
    },
    "translations": {
      "en": {
        "name": "A Wreck Below",
        "objective": "Take a boat or submersible to a visible offshore wreck and **inspect one object beneath the surface**.",
        "gameObjective": "Take a boat or submersible to a visible offshore wreck and **inspect one object beneath the surface**."
      },
      "de": {
        "name": "Ein Wrack unter Wasser",
        "objective": "Fahr mit Boot oder Tauchfahrzeug zu einem sichtbaren Wrack vor der Küste und **untersuche etwas unter der Oberfläche**.",
        "gameObjective": "Fahr mit Boot oder Tauchfahrzeug zu einem sichtbaren Wrack vor der Küste und **untersuche etwas unter der Oberfläche**."
      }
    },
    "experience": {
      "family": "diving-exploration",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["diving"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Offshore wreck and diving equipment",
          "de": "Wrack vor der Küste und Tauchausrüstung",
          "chips": {"en": ["Wreck", "Diving gear"], "de": ["Wrack", "Tauchausrüstung"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  },
  {
    "id": "gta-v-street-race",
    "moodIds": ["restless"],
    "type": "objective",
    "tags": ["racing"],
    "minimumDurationMinutes": 2,
    "suggestedDurationMinutes": 15,
    "universal": false,
    "curated": {
      "gameId": "gta",
      "installmentIds": ["gta-v"]
    },
    "translations": {
      "en": {
        "name": "Night Street Race",
        "objective": "If a street race is available, **finish one whole race in a car you chose before entering**.",
        "gameObjective": "If a street race is available, **finish one whole race in a car you chose before entering**."
      },
      "de": {
        "name": "Straßenrennen bei Nacht",
        "objective": "Wenn ein Straßenrennen verfügbar ist, **fahr es mit einem vorher ausgesuchten Auto bis ins Ziel**.",
        "gameObjective": "Wenn ein Straßenrennen verfügbar ist, **fahr es mit einem vorher ausgesuchten Auto bis ins Ziel**."
      }
    },
    "experience": {
      "family": "street-racing",
      "cardMetadata": { "genreIds": ["adventure", "sandbox"], "playStyleIds": [] },
      "finish": "outcome",
      "activities": ["racing"],
      "rules": [],
      "prerequisites": [
        {
          "en": "Franklin; street race available at night",
          "de": "Franklin; Straßenrennen nachts verfügbar",
          "chips": {"en": ["Franklin", "Street race"], "de": ["Franklin", "Straßenrennen"]},
          "critical": true
        }
      ],
      "contexts": [
        {
          "connection": "offline",
          "people": "alone",
          "participation": "solo",
          "formation": "none"
        }
      ]
    },
    "gameGenreIds": ["adventure", "sandbox"]
  }
]);
