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
    const media = window.matchMedia(DARK_THEME_MEDIA_QUERY);
    const applyTheme = () => applyThemeChoice(themeChoice, media.matches);

    applyTheme();
    media.addEventListener("change", applyTheme);
    return () => media.removeEventListener("change", applyTheme);
  }, [themeChoice]);

  function changeTheme(choice: ThemeChoice) {
    saveThemeChoice(choice);
    applyThemeChoice(choice);
    setThemeChoice(choice);
  }

  return { changeTheme, themeChoice };
}
