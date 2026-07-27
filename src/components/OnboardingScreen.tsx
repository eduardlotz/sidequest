import { motion } from "motion/react";
import { useState, type FormEvent } from "react";
import {
  QUEST_GENRES,
  type QuestGenre,
} from "../data/questTaxonomy";
import type {
  ProfileInput,
  UserProfile,
} from "../stores/useQuestStore";
import styles from "../App.module.css";
import { CheckIcon } from "./Icons";

type Props = {
  initialProfile?: UserProfile;
  mode?: "onboarding" | "preferences";
  reduceMotion: boolean;
  onCancel?: () => void;
  onSubmit: (profile: ProfileInput) => boolean;
};

export function OnboardingScreen({
  initialProfile,
  mode = "onboarding",
  reduceMotion,
  onCancel,
  onSubmit,
}: Props) {
  const [selectedGenres, setSelectedGenres] = useState<QuestGenre[]>(
    initialProfile?.selectedGenres ?? [],
  );
  const [onlineEnabled, setOnlineEnabled] = useState(
    initialProfile?.onlinePreference === "include",
  );
  const embedded = mode === "preferences";

  function toggleGenre(genre: QuestGenre) {
    setSelectedGenres((current) =>
      current.includes(genre)
        ? current.filter((item) => item !== genre)
        : [...current, genre],
    );
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit({
      selectedGenres,
      onlinePreference: onlineEnabled ? "include" : "exclude",
      avatarTheme: initialProfile?.avatarTheme ?? "default",
    });
  }

  return (
    <motion.section
      className={
        embedded ? styles.preferencesPanel : styles.onboardingScreen
      }
      aria-labelledby={embedded ? "preferences-title" : "onboarding-title"}
      initial={
        reduceMotion || embedded ? false : { opacity: 0, y: 12 }
      }
      animate={{ opacity: 1, y: 0 }}
      transition={
        reduceMotion
          ? { duration: 0 }
          : { type: "spring", stiffness: 280, damping: 28, mass: 0.82 }
      }
    >
      <form className={styles.onboardingForm} onSubmit={handleSubmit}>
        <header className={styles.onboardingIntro}>
          {embedded ? (
            <h3 className={styles.srOnly} id="preferences-title">
              Game preferences
            </h3>
          ) : (
            <h1 className={styles.srOnly} id="onboarding-title">
              Game preferences
            </h1>
          )}
          <p>Pick all types of games you feel like playing</p>
        </header>

        <fieldset className={styles.genreFieldset}>
          <legend className={styles.srOnly}>Game genres</legend>
          <div className={styles.genreGrid}>
            {QUEST_GENRES.map((genre) => {
              const selected = selectedGenres.includes(genre);
              return (
                <button
                  className={styles.genreChoice}
                  data-selected={selected || undefined}
                  type="button"
                  aria-pressed={selected}
                  key={genre}
                  onClick={() => toggleGenre(genre)}
                >
                  <span className={styles.genreCheck} aria-hidden="true">
                    {selected && <CheckIcon />}
                  </span>
                  <span className={styles.genreChoiceLabel}>
                    {PROFILE_GENRE_LABELS[genre]}
                  </span>
                  <span className={styles.genreChoiceHints} aria-hidden="true">
                    {PROFILE_GENRE_HINTS[genre].map((hint) => (
                      <span key={hint}>{hint}</span>
                    ))}
                  </span>
                </button>
              );
            })}
          </div>
        </fieldset>

        <label className={styles.onlinePreference}>
          <span>Allow online quests</span>
          <input
            checked={onlineEnabled}
            className={styles.srOnly}
            type="checkbox"
            onChange={(event) => setOnlineEnabled(event.currentTarget.checked)}
          />
          <span
            className={styles.preferenceSwitch}
            data-checked={onlineEnabled || undefined}
            aria-hidden="true"
          >
            <span />
          </span>
        </label>

        <div className={styles.onboardingActions}>
          {embedded && onCancel && (
            <button
              className={styles.secondaryAction}
              type="button"
              onClick={onCancel}
            >
              Cancel
            </button>
          )}
          <button
            className={styles.saveAction}
            type="submit"
            disabled={selectedGenres.length === 0}
          >
            Save your preferences
          </button>
        </div>
      </form>
    </motion.section>
  );
}

const PROFILE_GENRE_LABELS: Record<QuestGenre, string> = {
  rpg: "RPG",
  roguelike: "Roguelike",
  shooter: "Shooter",
  sports: "Sports",
  survival: "Survival",
  building: "Building",
  simulation: "Simulation",
  action: "Action",
  platformer: "Platformer",
  puzzle: "Puzzle",
};

const PROFILE_GENRE_HINTS: Record<QuestGenre, readonly string[]> = {
  rpg: ["Online", "Fantasy"],
  roguelike: ["Roguelite"],
  shooter: ["Online"],
  sports: ["Party"],
  survival: ["Horror"],
  building: ["Automation"],
  simulation: [],
  action: [],
  platformer: [],
  puzzle: [],
};
