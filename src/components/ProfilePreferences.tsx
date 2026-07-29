import { useState, type FormEvent } from "react";
import type {
  ProfileInput,
  UserProfile,
} from "../stores/useQuestStore";
import styles from "../App.module.css";

type Props = {
  profile: UserProfile;
  onSubmit: (profile: ProfileInput) => boolean;
};

export function ProfilePreferences({ profile, onSubmit }: Props) {
  const [onlineEnabled, setOnlineEnabled] = useState(
    profile.onlinePreference !== "exclude",
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit({
      onlinePreference: onlineEnabled ? "include" : "exclude",
      avatarTheme: profile.avatarTheme,
    });
  }

  return (
    <section
      className={styles.preferencesPanel}
      aria-labelledby="preferences-title"
    >
      <form className={styles.onboardingForm} onSubmit={handleSubmit}>
        <header className={styles.onboardingIntro}>
          <h3 id="preferences-title">Quest preferences</h3>
          <p>Choose whether online-only objectives can appear.</p>
        </header>

        <label className={styles.onlinePreference}>
          <span>Allow online objectives</span>
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
          <button className={styles.saveAction} type="submit">
            Save preferences
          </button>
        </div>
      </form>
    </section>
  );
}
