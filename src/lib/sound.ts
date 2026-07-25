import { bind, play, setEnabled, type SoundName } from "cuelume";

const SOUND_ENABLED_STORAGE_KEY = "sidequest.sound.enabled.v1";

export function readSoundEnabled() {
  try {
    return window.localStorage.getItem(SOUND_ENABLED_STORAGE_KEY) !== "false";
  } catch {
    return true;
  }
}

export function bindSounds() {
  bind();
}

export function applySoundEnabled(enabled: boolean) {
  setEnabled(enabled);
  try {
    window.localStorage.setItem(
      SOUND_ENABLED_STORAGE_KEY,
      String(enabled),
    );
  } catch {
    // Sound still works when storage is unavailable.
  }
}

export function playSound(sound: SoundName) {
  play(sound);
}
