import { useEffect, useState } from "react";
import {
  applyThemeChoice,
  DARK_THEME_MEDIA_QUERY,
  readThemeChoice,
  saveThemeChoice,
  type ThemeChoice,
} from "../../lib/theme";

export function useThemeChoice() {
  const [themeChoice, setThemeChoice] = useState<ThemeChoice>(readThemeChoice);

  useEffect(() => {
    applyThemeChoice(themeChoice);

    if (themeChoice !== "auto") return;
    const media = window.matchMedia(DARK_THEME_MEDIA_QUERY);
    const applyDeviceTheme = () => applyThemeChoice("auto");
    media.addEventListener("change", applyDeviceTheme);
    return () => media.removeEventListener("change", applyDeviceTheme);
  }, [themeChoice]);

  function changeTheme(choice: ThemeChoice) {
    saveThemeChoice(choice);
    applyThemeChoice(choice);
    setThemeChoice(choice);
  }

  return { changeTheme, themeChoice };
}
