import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { MOODS } from "../data/moods";
import {
  englishUi,
  germanMoods,
  germanUi,
} from "./resources";

export const LANGUAGE_STORAGE_KEY = "sidequest.language";
export const SUPPORTED_LANGUAGES = ["en", "de"] as const;

export type AppLanguage = (typeof SUPPORTED_LANGUAGES)[number];

const englishMoods = Object.fromEntries(
  MOODS.map(({ id, title, subtitle }) => [id, { title, subtitle }]),
);

function readStoredLanguage(): AppLanguage {
  if (typeof window === "undefined") return "en";
  try {
    return normalizeLanguage(window.localStorage.getItem(LANGUAGE_STORAGE_KEY));
  } catch {
    return "en";
  }
}

export function normalizeLanguage(
  language: string | null | undefined,
): AppLanguage {
  return language?.toLowerCase().startsWith("de") ? "de" : "en";
}

function applyLanguage(language: string) {
  const normalized = normalizeLanguage(language);
  if (typeof document !== "undefined") {
    document.documentElement.lang = normalized;
  }
  if (typeof window !== "undefined") {
    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, normalized);
    } catch {
      // The app still works when storage is unavailable.
    }
  }
}

void i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        ui: englishUi,
        moods: englishMoods,
      },
    },
    de: {
      translation: {
        ui: germanUi,
        moods: germanMoods,
      },
    },
  },
  lng: readStoredLanguage(),
  fallbackLng: "en",
  supportedLngs: SUPPORTED_LANGUAGES,
  load: "languageOnly",
  initAsync: false,
  interpolation: { escapeValue: false },
  react: { useSuspense: false },
});

i18n.on("languageChanged", applyLanguage);
applyLanguage(i18n.resolvedLanguage ?? i18n.language);

export default i18n;
