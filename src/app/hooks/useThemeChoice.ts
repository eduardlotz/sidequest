import { useEffect, useState } from "react";
import {
  applyThemeChoice,
  readThemeChoice,
  saveThemeChoice,
  type ThemeChoice,
} from "../../lib/theme";

export function useThemeChoice() {
  const [themeChoice, setThemeChoice] = useState<ThemeChoice>(readThemeChoice);

  useEffect(() => {
    applyThemeChoice(themeChoice);
  }, [themeChoice]);

  function changeTheme(choice: ThemeChoice) {
    saveThemeChoice(choice);
    applyThemeChoice(choice);
    setThemeChoice(choice);
  }

  return { changeTheme, themeChoice };
}
