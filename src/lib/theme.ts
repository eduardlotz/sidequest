export const THEME_STORAGE_KEY = "sidequest.theme";
export const DARK_THEME_MEDIA_QUERY = "(prefers-color-scheme: dark)";

export const THEME_CHOICES = ["light", "dark"] as const;

export type ThemeChoice = (typeof THEME_CHOICES)[number];

export function deviceTheme(prefersDark = false): ThemeChoice {
  return prefersDark ? "dark" : "light";
}

export function normalizeThemeChoice(
  value: unknown,
  fallback: ThemeChoice,
): ThemeChoice {
  return THEME_CHOICES.includes(value as ThemeChoice)
    ? (value as ThemeChoice)
    : fallback;
}

export function readThemeChoice(): ThemeChoice {
  if (typeof window === "undefined") return "light";

  const fallback = deviceTheme(
    window.matchMedia(DARK_THEME_MEDIA_QUERY).matches,
  );

  try {
    return normalizeThemeChoice(
      window.localStorage.getItem(THEME_STORAGE_KEY),
      fallback,
    );
  } catch {
    return fallback;
  }
}

export function saveThemeChoice(choice: ThemeChoice) {
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, choice);
  } catch {
    // The selected theme still applies for this session when storage is blocked.
  }
}

export function applyThemeChoice(choice: ThemeChoice) {
  const root = document.documentElement;
  root.dataset.theme = choice;
  root.dataset.themeChoice = choice;
  root.style.colorScheme = choice;

  document
    .querySelector<HTMLMetaElement>('meta[name="theme-color"]')
    ?.setAttribute("content", choice === "dark" ? "#111118" : "#F2F2F9");
}
