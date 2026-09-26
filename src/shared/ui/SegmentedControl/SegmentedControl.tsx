import type { ReactNode } from "react";
import styles from "./SegmentedControl.module.css";

export function SegmentedControl<Value extends string>({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: Value;
  options: readonly { value: Value; label: string; icon?: ReactNode }[];
  onChange: (value: Value) => void;
}) {
  return (
    <div
      className={styles.control}
      role="group"
      aria-label={label}
    >
      {options.map((option) => (
        <button
          type="button"
          aria-pressed={value === option.value}
          aria-label={option.label}
          title={option.icon ? option.label : undefined}
          key={option.value}
          onClick={() => onChange(option.value)}
        >
          {option.icon ?? option.label}
        </button>
      ))}
    </div>
  );
}

