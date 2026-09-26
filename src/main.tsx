import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./localization/i18n";
import { App } from "./App";
import { AppErrorBoundary } from "./app/AppErrorBoundary";
import {
  applySoundEnabled,
  bindSounds,
  readSoundEnabled,
} from "./lib/sound";
import { applyThemeChoice, readThemeChoice } from "./lib/theme";
import "./styles/global.css";

applyThemeChoice(readThemeChoice());
applySoundEnabled(readSoundEnabled());
bindSounds();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppErrorBoundary><App /></AppErrorBoundary>
  </StrictMode>,
);
