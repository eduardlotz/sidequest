import {
  defineSequence,
  defineSound,
  ensureReady,
  setMasterVolume,
  type SoundDefinition,
} from "@web-kits/audio";
import { core, organic } from "../../.web-kits";

const SOUND_ENABLED_STORAGE_KEY = "sidequest.sound.enabled.v1";
const HOVER_GAP_MS = 110;
const MASTER_VOLUME = 1.5;

export type SoundName =
  | "accordionClose"
  | "accordionOpen"
  | "buttonClick"
  | "buttonHover"
  | "cardHover"
  | "cardSelect"
  | "coinHit"
  | "completion"
  | "cut"
  | "drawerClose"
  | "drawerOpen"
  | "dropdownClose"
  | "dropdownOpen"
  | "inputFocus"
  | "modalClose"
  | "modalOpen"
  | "moodStep"
  | "shuffle"
  | "slide"
  | "tabSwitch"
  | "timerGrab"
  | "toggleOff"
  | "toggleOn";

const bloom: SoundDefinition = {
  layers: [
    {
      source: { type: "sine", frequency: 528 },
      envelope: { attack: 0.06, decay: 0.32, sustain: 0, release: 0.04 },
      gain: 0.03,
    },
    {
      source: { type: "sine", frequency: 528, detune: 12 },
      envelope: { attack: 0.06, decay: 0.34, sustain: 0, release: 0.04 },
      gain: 0.025,
    },
  ],
  effects: [
    {
      type: "delay",
      time: 0.15,
      feedback: 0.2,
      feedbackFilter: { type: "lowpass", frequency: 2500 },
      mix: 0.12,
    },
  ],
};

const cut: SoundDefinition = {
  source: { type: "noise", color: "white" },
  filter: { type: "lowpass", frequency: 1200, resonance: 0.7 },
  envelope: { attack: 0.04, decay: 0.16, sustain: 0, release: 0.02 },
  gain: 0.06,
};

// Matches the WebKits Minimal patch click without installing the patch.
const minimalClick: SoundDefinition = {
  source: { type: "sine", frequency: 800 },
  envelope: { attack: 0, decay: 0.015, sustain: 0, release: 0.005 },
  gain: 0.1,
};

const coinHitFrequencies = [880, 914, 948, 986, 1028, 1072] as const;
const playCoinHits = coinHitFrequencies.map((frequency, index) =>
  defineSound({
    layers: [
      {
        source: { type: "sine", frequency },
        envelope: { attack: 0, decay: 0.075, sustain: 0, release: 0.025 },
        gain: 0.045,
      },
      {
        source: {
          type: "sine",
          frequency: frequency * 2.48,
          detune: index % 2 === 0 ? -4 : 5,
        },
        envelope: { attack: 0, decay: 0.045, sustain: 0, release: 0.018 },
        gain: 0.018,
      },
    ],
  }),
);

const playPause = defineSound(core.slideDown);
const playResume = defineSound(core.toggleOn);
const playTimerGrab = defineSound(core.select);
const playButtonClick = defineSound(minimalClick);
const playCompletion = defineSound(organic.notification);
const playMoodStep = defineSound(core.tap);
const playShuffle = defineSequence([
  { sound: organic.tap, at: 0, volume: 0.42 },
  { sound: organic.tap, at: 0.045, volume: 0.3 },
  { sound: organic.tap, at: 0.09, volume: 0.48 },
]);
let nextCoinHit = 0;

const sounds: Record<SoundName, () => unknown> = {
  accordionClose: defineSound(core.collapse),
  accordionOpen: defineSound(core.expand),
  buttonClick: playButtonClick,
  buttonHover: defineSound(core.hover),
  cardHover: defineSound(core.hover),
  cardSelect: defineSound(bloom),
  coinHit: () => {
    const playCoin = playCoinHits[nextCoinHit % playCoinHits.length];
    nextCoinHit += 1;
    return playCoin({ volume: 0.62 });
  },
  completion: playCompletion,
  cut: defineSound(cut),
  drawerClose: defineSound(core.drawerClose),
  drawerOpen: defineSound(core.drawerOpen),
  dropdownClose: defineSound(core.dropdownClose),
  dropdownOpen: defineSound(core.dropdownOpen),
  inputFocus: defineSound(core.click),
  modalClose: defineSound(core.modalClose),
  modalOpen: defineSound(core.modalOpen),
  moodStep: () => playMoodStep({ volume: 0.15 }),
  shuffle: playShuffle,
  slide: defineSound(core.slide),
  tabSwitch: defineSound(core.tabSwitch),
  timerGrab: () => playTimerGrab({ volume: 0.5 }),
  toggleOff: () => playPause({ volume: 0.9 }),
  toggleOn: () => playResume({ volume: 0.35 }),
};

let enabled = true;
let bound = false;
let masterVolumeSet = false;
let lastHoverAt = -Infinity;

export function readSoundEnabled() {
  try {
    return window.localStorage.getItem(SOUND_ENABLED_STORAGE_KEY) !== "false";
  } catch {
    return true;
  }
}

export function bindSounds() {
  if (bound || typeof document === "undefined") return;
  bound = true;

  document.addEventListener(
    "pointerover",
    (event) => {
      if (
        !(event instanceof PointerEvent) ||
        event.pointerType !== "mouse" ||
        !window.matchMedia("(hover: hover) and (pointer: fine)").matches
      ) {
        return;
      }

      const target = event.target instanceof Element ? event.target : null;
      const card = target?.closest<HTMLElement>("[data-sound-card]");
      const button = target?.closest<HTMLButtonElement>("button");
      const soundTarget = card ?? button;
      if (
        !soundTarget ||
        soundTarget.closest("[data-sound-skip]") ||
        (button?.disabled ?? false) ||
        (event.relatedTarget instanceof Node &&
          soundTarget.contains(event.relatedTarget))
      ) {
        return;
      }

      const now = performance.now();
      if (now - lastHoverAt < HOVER_GAP_MS) return;
      lastHoverAt = now;
      playSound(card ? "cardHover" : "buttonHover");
    },
    true,
  );

  document.addEventListener(
    "click",
    (event) => {
      const target = event.target instanceof Element ? event.target : null;
      const button = target?.closest<HTMLButtonElement>("button");
      if (
        !button ||
        button.disabled ||
        button.closest(
          "[data-sound-card], [data-sound-skip], [data-sound-click-skip]",
        )
      ) {
        return;
      }
      playSound("buttonClick");
    },
    true,
  );

  document.addEventListener(
    "pointerdown",
    (event) => {
      const target = event.target instanceof Element ? event.target : null;
      const input = target?.closest<HTMLInputElement>(
        'input:not([type]), input[type="text"]',
      );
      if (input && !input.disabled && !input.closest("[data-sound-skip]")) {
        playSound("inputFocus");
      }
    },
    true,
  );
}

export function applySoundEnabled(value: boolean) {
  enabled = value;
  try {
    window.localStorage.setItem(SOUND_ENABLED_STORAGE_KEY, String(value));
  } catch {
    // Sound still works when storage is unavailable.
  }
}

export function playSound(sound: SoundName) {
  if (
    !enabled ||
    typeof window === "undefined" ||
    navigator.userActivation?.hasBeenActive === false
  ) {
    return;
  }

  void ensureReady().then(
    () => {
      if (!enabled) return;
      if (!masterVolumeSet) {
        setMasterVolume(MASTER_VOLUME);
        masterVolumeSet = true;
      }
      sounds[sound]();
    },
    () => undefined,
  );
}
