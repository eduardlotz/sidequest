export const THEME_STORAGE_KEY = "sidequest.theme";
export const DARK_THEME_MEDIA_QUERY = "(prefers-color-scheme: dark)";

export const THEME_CHOICES = ["auto", "light", "dark"] as const;

export type ThemeChoice = (typeof THEME_CHOICES)[number];

export type ResolvedTheme = "light" | "dark";

export function deviceTheme(prefersDark = false): ResolvedTheme {
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
  if (typeof window === "undefined") return "auto";

  try {
    return normalizeThemeChoice(
      window.localStorage.getItem(THEME_STORAGE_KEY),
      "auto",
    );
  } catch {
    return "auto";
  }
}

export function saveThemeChoice(choice: ThemeChoice) {
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, choice);
  } catch {
    // The selected theme still applies for this session when storage is blocked.
  }
}

export function resolveThemeChoice(
  choice: ThemeChoice,
  prefersDark = window.matchMedia(DARK_THEME_MEDIA_QUERY).matches,
): ResolvedTheme {
  return choice === "auto" ? deviceTheme(prefersDark) : choice;
}

export function applyThemeChoice(choice: ThemeChoice) {
  const root = document.documentElement;
  const resolved = resolveThemeChoice(choice);
  root.dataset.theme = resolved;
  root.dataset.themeChoice = choice;
  root.style.colorScheme = resolved;

  document
    .querySelector<HTMLMetaElement>('meta[name="theme-color"]')
    ?.setAttribute("content", resolved === "dark" ? "#111118" : "#F2F2F9");
}
