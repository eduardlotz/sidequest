export const THEME_STORAGE_KEY = "sidequest.theme";
export const DARK_THEME_MEDIA_QUERY = "(prefers-color-scheme: dark)";

export const THEME_CHOICES = ["light", "dark"] as const;

export type ThemeChoice = (typeof THEME_CHOICES)[number];
export type ResolvedTheme = Exclude<ThemeChoice, "auto">;

export function normalizeThemeChoice(value: unknown): ThemeChoice {
  return THEME_CHOICES.includes(value as ThemeChoice)
    ? (value as ThemeChoice)
    : "light";
}

export function resolveTheme(
  choice: ThemeChoice,
  prefersDark: boolean,
): ResolvedTheme {
  return choice;
}

export function readThemeChoice(): ThemeChoice {
  if (typeof window === "undefined") return "light";

  try {
    return normalizeThemeChoice(window.localStorage.getItem(THEME_STORAGE_KEY));
  } catch {
    return "light";
  }
}

export function saveThemeChoice(choice: ThemeChoice) {
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, choice);
  } catch {
    // The selected theme still applies for this session when storage is blocked.
  }
}

export function applyThemeChoice(
  choice: ThemeChoice,
  prefersDark = window.matchMedia(DARK_THEME_MEDIA_QUERY).matches,
) {
  const resolvedTheme = resolveTheme(choice, prefersDark);
  const root = document.documentElement;
  root.dataset.theme = resolvedTheme;
  root.dataset.themeChoice = choice;
  root.style.colorScheme = resolvedTheme;

  document
    .querySelector<HTMLMetaElement>('meta[name="theme-color"]')
    ?.setAttribute("content", resolvedTheme === "dark" ? "#111118" : "#F2F2F9");
}
