import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { resolveGameVisual } from "../../../../data/gameVisuals";
import type { LibraryGame } from "../../../../domain/library/model";
import type { ArcCardBodyProps } from "../ArcDeck/ArcCard";
import styles from "./GameCard.module.css";
import arcStyles from "../ArcDeck/ArcDeck.module.css";

export type GameCardItem = {
  id: string;
  game: LibraryGame;
  installmentId?: string;
  title: string;
  subtitle: string;
  eligibleCount: number;
  totalCount: number;
};

export function GameCard({
  item, contentOpacity, centeredTiltEffects, illustrationX, illustrationY,
}: ArcCardBodyProps<GameCardItem>) {
  const { t } = useTranslation();
  const visual = resolveGameVisual(item.game);
  return (
    <span className={styles.card}>
      <span className={`${arcStyles.moodSelectionCardBody} ${styles.body}`}>
        {visual.kind === "artwork" && (
          <span className={styles.coverClip}>
            <motion.span className={styles.cover} style={{
              opacity: contentOpacity,
              x: centeredTiltEffects ? illustrationX : 0,
              y: centeredTiltEffects ? illustrationY : 0,
            }}>
              <img src={visual.src} alt="" draggable={false} decoding="async" loading="lazy" />
            </motion.span>
          </span>
        )}
        <span className={styles.gradient} />
      </span>
      <motion.span className={styles.content}
        style={{ opacity: contentOpacity, z: centeredTiltEffects ? 24 : 0 }}>
        <strong className={styles.title}>{item.title}</strong>
        <span className={styles.count}>{t("ui.arc.availableQuests", { count: item.eligibleCount })}</span>
        <span className={styles.total}>{t("ui.arc.totalGameQuests", { count: item.totalCount })}</span>
      </motion.span>
    </span>
  );
}
