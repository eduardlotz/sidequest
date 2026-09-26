import type { AppLanguage } from "../../localization/i18n";

export function sortGamesByName<T>(
  games: readonly T[],
  language: AppLanguage,
  nameOf: (game: T) => string,
): T[] {
  const collator = new Intl.Collator(language, {
    numeric: true,
    sensitivity: "base",
  });
  return [...games].sort((a, b) => collator.compare(nameOf(a), nameOf(b)));
}
