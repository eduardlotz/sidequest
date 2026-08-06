import { useTranslation } from "react-i18next";
import { formatScore } from "../lib/format";
import { normalizeLanguage } from "../localization/i18n";
import {
  RED_ROPE_BUNDLE_COST,
  RED_ROPE_BUNDLE_SIZE,
} from "../stores/useQuestStore";
import styles from "../App.module.css";
import { CoinIcon } from "./Icons";

type Props = {
  coins: number;
  onPurchase: () => boolean;
  variant?: "neutral" | "black";
};

export function RopePurchaseRow({
  coins,
  onPurchase,
  variant = "neutral",
}: Props) {
  const { i18n, t } = useTranslation();
  const language = normalizeLanguage(i18n.resolvedLanguage ?? i18n.language);
  const canPurchase = coins >= RED_ROPE_BUNDLE_COST;

  return (
    <div className={styles.ropePurchaseRow} data-variant={variant}>
      <span className={styles.ropePurchaseCopy}>
        <strong>{t("ui.profile.buyRopeInline")}</strong>
        <span>
          {formatScore(RED_ROPE_BUNDLE_COST, language)}
          <CoinIcon />
        </span>
      </span>
      <button
        className={styles.drawerActionButton}
        data-variant={variant}
        type="button"
        disabled={!canPurchase}
        aria-label={t("ui.profile.buyRopesLabel", {
          count: RED_ROPE_BUNDLE_SIZE,
          points: formatScore(RED_ROPE_BUNDLE_COST, language),
          available: formatScore(coins, language),
        })}
        onClick={onPurchase}
      >
        {t("ui.profile.buy")}
      </button>
    </div>
  );
}
