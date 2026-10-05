import { LayoutGroup, motion, useReducedMotion } from "motion/react";
import { useId, type ReactNode } from "react";
import { NAV_ENTRY_SPRING } from "../../motion/transitions";
import styles from "./SegmentedControl.module.css";

export function SegmentedControl<Value extends string>({
  label,
  value,
  options,
  onChange,
  equalWidth = false,
}: {
  label: string;
  value: Value;
  options: readonly { value: Value; label: string; icon?: ReactNode }[];
  onChange: (value: Value) => void;
  equalWidth?: boolean;
}) {
  const layoutGroupId = useId();
  const reduceMotion = useReducedMotion();
  const transition = reduceMotion ? { duration: 0 } : NAV_ENTRY_SPRING;

  return (
    <LayoutGroup id={layoutGroupId}>
      <motion.div
        className={styles.control}
        role="group"
        aria-label={label}
        data-equal-width={equalWidth || undefined}
        layout={!equalWidth}
        transition={transition}
      >
        {equalWidth && (
          <motion.span
            className={styles.slidingIndicator}
            style={{ width: `calc((100% - 6px) / ${options.length})` }}
            initial={false}
            animate={{ x: `${Math.max(0, options.findIndex(option => option.value === value)) * 100}%` }}
            transition={transition}
            aria-hidden="true"
          />
        )}
        {options.map((option) => (
          <motion.button
            type="button"
            layout={equalWidth ? false : "position"}
            transition={transition}
            aria-pressed={value === option.value}
            aria-label={option.label}
            title={option.icon ? option.label : undefined}
            key={option.value}
            onClick={() => onChange(option.value)}
          >
            {!equalWidth && value === option.value && (
              <motion.span
                className={styles.indicator}
                layoutId="selected-segment"
                transition={transition}
                aria-hidden="true"
              />
            )}
            <span className={styles.buttonLabel}>
              {option.icon ?? option.label}
            </span>
          </motion.button>
        ))}
      </motion.div>
    </LayoutGroup>
  );
}
