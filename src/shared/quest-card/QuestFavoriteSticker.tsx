import { HeartIcon } from "@phosphor-icons/react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useTranslation } from "react-i18next";
import styles from "./QuestCard/QuestCard.module.css";

const HEART_PARTICLES = [[-8, -7, -24], [-3, -11, 16], [5, -10, -12], [9, -3, 30], [6, 6, -18], [-7, 5, 22]] as const;

export function QuestFavoriteSticker({ favorite, particles = false }: { favorite: boolean; particles?: boolean }) {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();
  return (
    <AnimatePresence initial={false}>
      {favorite && (
        <motion.span
          className={styles.favoriteSticker}
          role="img"
          aria-label={t("ui.gallery.favorite")}
          initial={reduceMotion ? false : { scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: reduceMotion ? 0 : 0.18, ease: "easeOut" } }}
          transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 550, damping: 20, mass: 0.6 }}
        >
          <HeartIcon weight="fill" aria-hidden="true" />
          {particles && !reduceMotion && (
            <span className={styles.favoriteParticles} aria-hidden="true">
              {HEART_PARTICLES.map(([x, y, rotate], index) => (
                <motion.span
                  className={styles.favoriteParticle}
                  key={index}
                  initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
                  animate={{ x: `${x}cqw`, y: `${y}cqw`, rotate, scale: [0, 1, 0.65], opacity: [0, 1, 0] }}
                  transition={{ duration: 0.5, delay: index * 0.025, ease: "easeOut" }}
                >
                  <HeartIcon weight="fill" />
                </motion.span>
              ))}
            </span>
          )}
        </motion.span>
      )}
    </AnimatePresence>
  );
}
