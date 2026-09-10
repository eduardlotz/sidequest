import { useId, type ButtonHTMLAttributes, type ReactNode } from "react";
import { SolidButton } from "../SolidButton/SolidButton";
import styles from "./FloatingIconButton.module.css";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: ReactNode;
  tooltip?: string;
};

export function FloatingIconButton({ icon, tooltip, ...props }: Props) {
  const tooltipId = useId();
  return (
    <div className={styles.control}>
      <SolidButton
        {...props}
        className={styles.button}
        aria-describedby={tooltip ? tooltipId : props["aria-describedby"]}
        iconLeft={icon}
        size="medium"
        variant="secondary"
      />
      {tooltip && (
        <span className={styles.tooltip} id={tooltipId} role="tooltip">
          {tooltip}
        </span>
      )}
    </div>
  );
}
