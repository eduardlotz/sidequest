import { InfoIcon } from "@phosphor-icons/react/dist/csr/Info";
import { Tooltip } from "../Tooltip/Tooltip";
import styles from "./InfoLabel.module.css";

export function InfoLabel({ label, hint }: { label: string; hint?: string }) {
  return (
    <span className={styles.label}>
      <span>{label}</span>
      {hint ? (
        <Tooltip content={hint} openOnClick>
          <button className={styles.trigger} type="button" aria-label={label}>
            <InfoIcon weight="bold" />
          </button>
        </Tooltip>
      ) : null}
    </span>
  );
}
