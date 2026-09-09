import { defineGameQuests } from "../defineGameQuests";

export const skateQuests = defineGameQuests("skate", [
  {
    id: "three-street-tricks", installments: ["skate-3"], moods: ["focused", "nostalgic"], minutes: 20, sources: ["skate-realistic-lines"],
    en: { name: "One Street Line", objective: "In **Skate 3**, use Hardcore difficulty and set a session marker beside a low ledge. **Land a kickflip, a grind on the ledge, and a pop shove-it in one rolling line**. No grabs, speed glitches, or getting off the board; a bail restarts the line." },
    de: { name: "Eine Street-Line", objective: "Stelle in **Skate 3** Hardcore ein und setze neben einer niedrigen Kante einen Session-Marker. **Lande einen Kickflip, einen Grind auf der Kante und einen Pop Shove-it in einer durchgehenden Line**. Keine Grabs, Speed-Glitches oder Abstiege; bei einem Sturz startet die Line neu." },
  },
  {
    id: "own-the-spot", installments: ["skate-3"], moods: ["progress", "challenge"], minutes: 20,
    en: { name: "Own It Twice", objective: "In **Skate 3**, replay an unlocked Own the Spot challenge. **Beat its Own It score once with grinds and once with flip tricks**, banking each run without a bail. Use only the named trick type for points in each run; keep the same spot." },
    de: { name: "Zweimal dein Spot", objective: "Wiederhole in **Skate 3** eine freigeschaltete Own-the-Spot-Challenge. **Überbiete die Own-It-Punktzahl einmal nur mit Grinds und einmal nur mit Fliptricks**, jeweils ohne Sturz bis zur Wertung. Sammle pro Durchlauf nur mit der genannten Trickart Punkte und bleib am selben Spot." },
  },
  {
    id: "quick-drop-link", installments: ["skate-2025"], moods: ["create", "curious"], minutes: 20, sources: ["skate-diy-spots"],
    en: { name: "One Prop Spot", objective: "In **skate. (2025)**, with Quick Drop and a grindable prop unlocked, place one prop beside an existing low ledge without blocking a challenge. **Link a grind on the prop and a grind on the ledge in one line**, roll away without a bail, then remove your prop." },
    de: { name: "Ein Teil, ein Spot", objective: "Platziere in **skate. (2025)** mit freigeschaltetem Quick Drop ein grindbares Objekt neben einer niedrigen Kante, ohne eine Challenge zu blockieren. **Verbinde einen Grind auf dem Objekt mit einem auf der Kante in einer Line**, rolle ohne Sturz weiter und entferne dein Objekt wieder." },
  },
  {
    id: "san-van-switch", installments: ["skate-2025"], moods: ["explore", "challenge"], minutes: 20,
    en: { name: "Same Rail, Switch", objective: "In **skate. (2025)**, find the nearest low rail and set a session marker. **Land a 50-50 grind in your regular stance, then on the same rail in switch stance**. Roll away on the board after each landing; finish when both runs are landed without bailing." },
    de: { name: "Dasselbe Rail, Switch", objective: "Such in **skate. (2025)** das nächste niedrige Rail und setze einen Session-Marker. **Lande einen 50-50-Grind in deiner normalen Stellung und danach am selben Rail in Switch**. Rolle nach jeder Landung auf dem Board weiter; fertig bist du nach zwei Durchläufen ohne Sturz." },
  },
]);
