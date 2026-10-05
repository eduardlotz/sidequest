import { motion, useReducedMotion } from "motion/react";
import styles from "./SettingToggle.module.css";

export function SettingToggle({
  checked,
  label,
  onChange,
}: {
  checked: boolean;
  label: string;
  onChange: (checked: boolean) => void;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <button
      className={styles.settingToggle}
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onChange(!checked)}
    >
      <motion.span
        aria-hidden="true"
        layout="position"
        transition={
          reduceMotion
            ? { duration: 0 }
            : { type: "spring", stiffness: 420, damping: 30 }
        }
      />
    </button>
  );
}

