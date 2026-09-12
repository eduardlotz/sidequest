import type { MoodId } from "./questTypes";

export const QUEST_PACK_PRICE = 50;
export const QUEST_PACK_SIZE = 9;
export type QuestPack = { id: string; title: Record<"en" | "de", string>; icon: "coffee" | "compass" | "target" | "lightning" | "heart" | "paint" | "sparkle" | "timer" | "flag"; questIds: readonly string[] };

export const CORE_QUEST_IDS_BY_MOOD = {
  "low-energy": [
    "auto-read-chapter",
    "five-exhibits",
    "one-solitaire-hand",
    "small-jigsaw",
    "hidden-object-browse",
    "a-little-walk",
    "default-round",
    "puzzle-small-step",
    "going-fishing"
  ],
  "relax": [
    "scenic-drive",
    "space-drift",
    "three-small-puzzles",
    "familiar-level",
    "small-town-routine",
    "a-little-walk",
    "puzzle-small-step",
    "build-a-memory",
    "going-fishing"
  ],
  "explore": [
    "a-side-street",
    "deep-dive",
    "unmapped-door",
    "rooftop-route",
    "follow-the-transit",
    "beyond-the-map",
    "planet-compare",
    "swim-return-trip",
    "movement-new-line"
  ],
  "progress": [
    "oldest-unfinished",
    "smallest-quest",
    "final-piece",
    "next-unlock",
    "unfinished-small-adventure",
    "main-mission",
    "one-level-no-detours",
    "craft-from-storage",
    "craft-unused-recipe"
  ],
  "challenge": [
    "one-life",
    "full-combo-try",
    "three-fast-laps",
    "match-combo",
    "precision-platformer-session",
    "starter-gear",
    "spell-single-school",
    "boss-practice",
    "quiet-entry-exit"
  ],
  "restless": [
    "keep-moving",
    "flat-out-race",
    "three-songs",
    "five-trick-line",
    "arcade-brawler-burst",
    "quick-matches",
    "swim-return-trip",
    "movement-new-line",
    "sports-answer-back"
  ],
  "connect": [
    "co-op-check-in",
    "pass-the-controller",
    "public-event",
    "team-signals",
    "shared-puzzle-table",
    "follow-a-teammate",
    "couch-three-rounds",
    "team-regular-role",
    "couch-pick-for-each-other"
  ],
  "focused": [
    "headphones-on",
    "one-build",
    "fix-the-bottleneck",
    "one-lead",
    "turn-based-one-front",
    "main-mission",
    "one-level-no-detours",
    "starter-gear",
    "one-slot-swap"
  ],
  "nostalgic": [
    "childhood-save",
    "back-then",
    "screenshot-return",
    "classic-route",
    "return-to-first-character",
    "a-little-walk",
    "couch-three-rounds",
    "replay-a-favorite-mission",
    "return-to-old-main"
  ],
  "create": [
    "tiny-home",
    "one-room",
    "short-course",
    "eight-bars",
    "workshop-inspiration",
    "build-with-three-materials",
    "build-a-memory",
    "two-color-look",
    "photo-three-angles"
  ],
  "overwhelmed": [
    "ten-minute-save",
    "tutorial-return",
    "todays-puzzle",
    "one-corner",
    "one-known-bot-mode",
    "default-round",
    "puzzle-small-step",
    "craft-from-storage",
    "trade-three-kinds"
  ],
  "curious": [
    "genre-swap",
    "same-era",
    "least-used-character",
    "one-variable",
    "different-viewpoint-session",
    "beyond-the-map",
    "one-slot-swap",
    "spell-new-opener",
    "planet-compare"
  ]
} as const satisfies Record<MoodId, readonly string[]>;

const standardPacks: readonly QuestPack[] = [
  {
    "id": "quiet-1",
    "title": {
      "en": "Quiet Moments 1",
      "de": "Ruhige Momente 1"
    },
    "icon": "coffee",
    "questIds": [
      "first-recipe",
      "one-patch-at-a-time",
      "care-first",
      "photo-small-detail",
      "follow-the-water",
      "story-without-rushing",
      "one-mode-evening",
      "stay-on-this-planet",
      "waterfront-break"
    ]
  },
  {
    "id": "quiet-2",
    "title": {
      "en": "Quiet Moments 2",
      "de": "Ruhige Momente 2"
    },
    "icon": "coffee",
    "questIds": [
      "puzzle-familiar-rules",
      "favorite-dish-session",
      "animals-off-the-clock",
      "collection-on-the-way",
      "sports-familiar-fixture",
      "platform-familiar-rhythm",
      "character-comfort-pick",
      "rhythm-comfort-set",
      "deck-play-the-familiar"
    ]
  },
  {
    "id": "quiet-3",
    "title": {
      "en": "Quiet Moments 3",
      "de": "Ruhige Momente 3"
    },
    "icon": "coffee",
    "questIds": [
      "automation-one-line-only",
      "no-mans-sky-new-companion",
      "no-mans-sky-seafood-supper",
      "minecraft-smoke-and-honey",
      "cyberpunk-2077-metro-postcards",
      "red-dead-redemption-rdr2-camp-coffee",
      "red-dead-redemption-catch-and-release",
      "kingdom-come-deliverance-kcd2-ordinary-dice",
      "skyrim-roadside-blessing"
    ]
  },
  {
    "id": "discovery-1",
    "title": {
      "en": "Discoveries 1",
      "de": "Entdeckungen 1"
    },
    "icon": "compass",
    "questIds": [
      "watch-one-patrol",
      "fish-two-waters",
      "cook-a-new-dish",
      "follow-one-character",
      "view-from-below",
      "weapon-distance-compare",
      "spell-follow-up",
      "planet-horizon-loop",
      "underwater-look"
    ]
  },
  {
    "id": "discovery-2",
    "title": {
      "en": "Discoveries 2",
      "de": "Entdeckungen 2"
    },
    "icon": "compass",
    "questIds": [
      "stealth-second-passage",
      "puzzle-use-the-hint",
      "fish-change-bait",
      "drive-with-landmarks",
      "race-another-car",
      "movement-two-approaches",
      "collectible-new-corner",
      "dialogue-follow-a-topic",
      "hunt-familiar-terrain"
    ]
  },
  {
    "id": "discovery-3",
    "title": {
      "en": "Discoveries 3",
      "de": "Entdeckungen 3"
    },
    "icon": "compass",
    "questIds": [
      "companion-cover-the-flank",
      "skate-find-a-spot",
      "skate-two-approaches",
      "sports-play-the-pass",
      "extract-branch-and-return",
      "platform-pick-a-landing",
      "platform-look-for-branch",
      "character-one-new-tool",
      "shooter-open-with-information"
    ]
  },
  {
    "id": "discovery-4",
    "title": {
      "en": "Discoveries 4",
      "de": "Entdeckungen 4"
    },
    "icon": "compass",
    "questIds": [
      "scout-a-new-angle",
      "lane-watch-the-wave",
      "time-trial-compare-a-route",
      "rhythm-one-unplayed-song",
      "deck-one-card-swap",
      "automation-follow-an-item",
      "match-one-unfamiliar-option",
      "no-mans-sky-cronus-tasting",
      "minecraft-map-home"
    ]
  },
  {
    "id": "discovery-5",
    "title": {
      "en": "Discoveries 5",
      "de": "Entdeckungen 5"
    },
    "icon": "compass",
    "questIds": [
      "cyberpunk-2077-device-decoy",
      "red-dead-redemption-liars-table",
      "red-dead-redemption-wild-horse-home",
      "red-dead-redemption-field-naturalist",
      "kingdom-come-deliverance-treasure-by-landmarks",
      "kingdom-come-deliverance-fresh-and-dried",
      "rocket-league-wall-bank-goal",
      "skate-san-van-switch",
      "fortnite-overshield-reset"
    ]
  },
  {
    "id": "momentum-1",
    "title": {
      "en": "Make Progress 1",
      "de": "Vorankommen 1"
    },
    "icon": "target",
    "questIds": [
      "drive-one-route-twice",
      "drive-clean",
      "one-missing-collectible",
      "hunt-single-species",
      "companion-first-strike",
      "extract-one-container",
      "craft-and-use-tool",
      "cook-for-the-road",
      "plant-a-small-row"
    ]
  },
  {
    "id": "momentum-2",
    "title": {
      "en": "Make Progress 2",
      "de": "Vorankommen 2"
    },
    "icon": "target",
    "questIds": [
      "merchant-clear-one-category",
      "merchant-after-the-hunt",
      "extract-known-route",
      "platform-next-checkpoint",
      "platform-collect-a-detour",
      "shooter-hold-a-crossing",
      "gadget-protect-a-route",
      "ward-before-the-objective",
      "scout-cover-your-return"
    ]
  },
  {
    "id": "momentum-3",
    "title": {
      "en": "Make Progress 3",
      "de": "Vorankommen 3"
    },
    "icon": "target",
    "questIds": [
      "lane-follow-your-wave",
      "time-trial-set-a-baseline",
      "units-keep-them-together",
      "match-stay-to-the-result",
      "match-one-thread-to-follow",
      "no-mans-sky-salvage-repair",
      "minecraft-village-payday",
      "minecraft-second-chance-villager",
      "cyberpunk-2077-reginas-patient"
    ]
  },
  {
    "id": "challenge-1",
    "title": {
      "en": "Fresh Challenges 1",
      "de": "Neue Herausforderungen 1"
    },
    "icon": "lightning",
    "questIds": [
      "puzzle-no-hints",
      "mage-back-in-action",
      "boss-opening-window",
      "boss-comeback-session",
      "race-from-the-back",
      "movement-find-a-flow",
      "skate-flip-into-grind",
      "platform-clean-stretch",
      "lane-practice-last-hits"
    ]
  },
  {
    "id": "challenge-2",
    "title": {
      "en": "Fresh Challenges 2",
      "de": "Neue Herausforderungen 2"
    },
    "icon": "lightning",
    "questIds": [
      "rhythm-cleaner-chorus",
      "deck-use-the-combination",
      "units-one-survivor-more",
      "movement-stay-above-ground",
      "no-mans-sky-exocraft-recovery",
      "cyberpunk-2077-borrowed-eyes",
      "cyberpunk-2077-air-dash-route",
      "red-dead-redemption-bring-them-in",
      "kingdom-come-deliverance-bernhard-counter"
    ]
  },
  {
    "id": "together-1",
    "title": {
      "en": "Familiar Company 1",
      "de": "Vertraute Gesellschaft 1"
    },
    "icon": "heart",
    "questIds": [
      "favorite-weapon-session",
      "stealth-familiar-ground",
      "fish-at-home",
      "drive-a-familiar-district",
      "photo-favorite-place",
      "couch-old-rivalry",
      "story-revisit-a-voice",
      "companion-usual-patrol",
      "character-support-a-friend"
    ]
  },
  {
    "id": "together-2",
    "title": {
      "en": "Familiar Company 2",
      "de": "Vertraute Gesellschaft 2"
    },
    "icon": "heart",
    "questIds": [
      "gadget-help-the-entry",
      "scout-then-communicate",
      "lane-return-to-your-role",
      "time-trial-old-route",
      "rhythm-old-favorite",
      "units-old-army",
      "match-with-your-regulars",
      "rocket-league-back-post-route",
      "skate-three-street-tricks"
    ]
  },
  {
    "id": "creative-1",
    "title": {
      "en": "Creative Sessions 1",
      "de": "Kreative Sessions 1"
    },
    "icon": "paint",
    "questIds": [
      "build-a-landmark",
      "build-doorway-view",
      "crafting-bench-session",
      "garden-pattern",
      "outfit-start-with-one",
      "outfit-for-the-place",
      "photo-one-subject-two-moods",
      "character-build-a-sequence",
      "gadget-try-another-position"
    ]
  },
  {
    "id": "creative-2",
    "title": {
      "en": "Creative Sessions 2",
      "de": "Kreative Sessions 2"
    },
    "icon": "paint",
    "questIds": [
      "deck-build-around-effect",
      "units-try-a-formation",
      "automation-one-working-chain",
      "no-mans-sky-planet-field-card",
      "minecraft-working-fishing-pier",
      "minecraft-furnace-shift",
      "minecraft-note-block-doorbell",
      "cyberpunk-2077-night-city-uniform",
      "kingdom-come-deliverance-forge-and-equip"
    ]
  },
  {
    "id": "side-trips-1",
    "title": {
      "en": "Side Trips 1",
      "de": "Abstecher 1"
    },
    "icon": "sparkle",
    "questIds": [
      "red-dead-redemption-pearsons-delivery",
      "kingdom-come-deliverance-an-honest-night",
      "skyrim-soul-to-steel",
      "skyrim-field-medicine",
      "fortnite-timber-cover",
      "rocket-league-small-pad-match",
      "skate-own-the-spot",
      "fortnite-first-gun-stays",
      "skate-quick-drop-link"
    ]
  }
];
const countdownIds = ["pocket-shelter", "five-colors", "clean-inventory", "three-puzzles", "fish-trio", "rooftop", "cook-three", "secret-route", "small-garden"];
const speedrunIds = ["first-level", "one-lap", "village-loop", "training-targets", "known-puzzle", "boss-rematch", "resource-stack", "practice-course", "clear-room"];
export const QUEST_PACKS: readonly QuestPack[] = [
  { id: "countdown", title: { en: "Countdown", de: "Countdown" }, icon: "timer", questIds: countdownIds.map(id => `countdown-${id}`) },
  { id: "speedrun", title: { en: "Speedrun", de: "Speedrun" }, icon: "flag", questIds: speedrunIds.map(id => `speedrun-${id}`) },
  ...standardPacks,
];
export const QUEST_PACKS_BY_ID = Object.fromEntries(QUEST_PACKS.map(pack => [pack.id, pack]));
export const QUEST_PACK_BY_QUEST_ID = Object.fromEntries(QUEST_PACKS.flatMap(pack => pack.questIds.map(id => [id, pack])));
export function isQuestUnlocked(questId: string, moodId: MoodId, ownedPackIds: readonly string[]) {
  return (CORE_QUEST_IDS_BY_MOOD[moodId] as readonly string[]).includes(questId) ||
    ownedPackIds.some(id => QUEST_PACKS_BY_ID[id]?.questIds.includes(questId));
}
