import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { Drawer } from "vaul";
import type {
  CompletedQuest,
  UserProfile,
} from "../stores/useQuestStore";
import styles from "../App.module.css";
import { formatScore } from "../lib/format";
import { normalizeLanguage } from "../localization/i18n";
import { HistoryScreen } from "./HistoryScreen";

type Props = {
  completedQuests: CompletedQuest[];
  legacyCompletionCount: number;
  open: boolean;
  profile: UserProfile;
  reduceMotion: boolean;
};

export function ProfileDrawer({
  completedQuests,
  legacyCompletionCount,
  open,
  profile,
  reduceMotion,
}: Props) {
  const { i18n, t } = useTranslation();
  const language = normalizeLanguage(i18n.resolvedLanguage ?? i18n.language);
  const formattedPoints = formatScore(profile.points, language);

  return (
    <section
      className={styles.profileDrawer}
      data-open={open || undefined}
      aria-labelledby="profile-title"
    >
      <header className={styles.profileDrawerHeader}>
        <div className={styles.profileDrawerTitleRow}>
          <Drawer.Title asChild>
            <h2 id="profile-title">{t("ui.profile.title")}</h2>
          </Drawer.Title>
          <p
            className={styles.profilePointBalance}
            aria-label={t("ui.profile.pointsLabel", {
              points: formattedPoints,
            })}
          >
            <span>{t("ui.profile.points")}</span>
            <strong>{formattedPoints}</strong>
          </p>
        </div>
        <Drawer.Description>
          {t("ui.profile.description")}
        </Drawer.Description>
      </header>

      <div className={styles.profileDrawerBody}>
        <motion.div
          className={styles.profileHistoryPanel}
          id="profile-history-panel"
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: 8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.16 }}
        >
          <HistoryScreen
            completedQuests={completedQuests}
            legacyCompletionCount={legacyCompletionCount}
            reduceMotion={reduceMotion}
          />
        </motion.div>
      </div>
    </section>
  );
}
