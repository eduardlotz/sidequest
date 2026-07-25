import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import {
  applySoundEnabled,
  bindSounds,
  readSoundEnabled,
} from "./lib/sound";
import "./styles/global.css";

applySoundEnabled(readSoundEnabled());
bindSounds();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
