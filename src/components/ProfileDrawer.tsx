import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { Drawer } from "vaul";
import type {
  ProfileInput,
  Quest,
  UserProfile,
} from "../stores/useQuestStore";
import styles from "../App.module.css";
import { HistoryScreen } from "./HistoryScreen";
import { SettingsIcon } from "./Icons";
import { OnboardingScreen } from "./OnboardingScreen";

type ProfileView = "preferences" | "history";

type Props = {
  completedQuests: Quest[];
  open: boolean;
  profile: UserProfile;
  reduceMotion: boolean;
  totalQuestCount: number;
  onSaveProfile: (profile: ProfileInput) => boolean;
};

export function ProfileDrawer({
  completedQuests,
  open,
  profile,
  reduceMotion,
  totalQuestCount,
  onSaveProfile,
}: Props) {
  const [activeView, setActiveView] = useState<ProfileView>("history");

  useEffect(() => {
    if (open) setActiveView("history");
  }, [open]);

  function handleSaveProfile(input: ProfileInput) {
    const saved = onSaveProfile(input);
    if (saved) setActiveView("history");
    return saved;
  }

  return (
    <section className={styles.profileDrawer} aria-labelledby="profile-title">
      <header className={styles.profileDrawerHeader}>
        <div className={styles.profileDrawerTitleRow}>
          <Drawer.Title asChild>
            <h2 id="profile-title">Your profile</h2>
          </Drawer.Title>
          <button
            className={styles.profileSettingsButton}
            data-active={activeView === "preferences" || undefined}
            type="button"
            aria-label={
              activeView === "preferences"
                ? "Show quest history"
                : "Edit game preferences"
            }
            aria-pressed={activeView === "preferences"}
            onClick={() =>
              setActiveView((current) =>
                current === "history" ? "preferences" : "history",
              )
            }
          >
            <SettingsIcon />
          </button>
        </div>
        <Drawer.Description>
          {activeView === "history"
            ? "Your completed sidequests and completion counts."
            : "Choose the games you want quests for."}
        </Drawer.Description>
      </header>

      <div className={styles.profileDrawerBody}>
        <AnimatePresence initial={false} mode="wait">
          {activeView === "preferences" ? (
            <motion.div
              id="profile-preferences-panel"
              key="preferences"
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: -8 }}
              transition={{ duration: reduceMotion ? 0 : 0.16 }}
            >
              <OnboardingScreen
                initialProfile={profile}
                mode="preferences"
                reduceMotion={reduceMotion}
                onSubmit={handleSaveProfile}
              />
            </motion.div>
          ) : (
            <motion.div
              id="profile-history-panel"
              key="history"
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: 8 }}
              transition={{ duration: reduceMotion ? 0 : 0.16 }}
            >
              <HistoryScreen
                completedQuests={completedQuests}
                reduceMotion={reduceMotion}
                totalQuestCount={totalQuestCount}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
