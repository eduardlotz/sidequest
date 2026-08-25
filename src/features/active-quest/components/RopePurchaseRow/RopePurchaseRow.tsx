import { useTranslation } from "react-i18next";
import { formatScore } from "../../../../lib/format";
import { normalizeLanguage } from "../../../../localization/i18n";
import {
  RED_ROPE_BUNDLE_COST,
  RED_ROPE_BUNDLE_SIZE,
} from "../../../../domain/quest/model";
import { CoinPriceButton } from "../../../../shared/ui/CoinPriceButton/CoinPriceButton";
import styles from "./RopePurchaseRow.module.css";

type Props = {
  coins: number;
  context?: "pause" | "profile" | "timer";
  onPurchase: () => boolean;
  tone?: "neutral" | "inverse";
};

export function RopePurchaseRow({
  coins,
  context = "profile",
  onPurchase,
  tone = "inverse",
}: Props) {
  const { i18n, t } = useTranslation();
  const language = normalizeLanguage(i18n.resolvedLanguage ?? i18n.language);
  const canPurchase = coins >= RED_ROPE_BUNDLE_COST;

  return (
    <div className={styles.ropePurchaseRow} data-context={context}>
      <CoinPriceButton
        type="button"
        disabled={!canPurchase}
        label={t("ui.profile.buyRopeInline")}
        price={formatScore(RED_ROPE_BUNDLE_COST, language)}
        tone={tone}
        aria-label={t("ui.profile.buyRopesLabel", {
          count: RED_ROPE_BUNDLE_SIZE,
          points: formatScore(RED_ROPE_BUNDLE_COST, language),
          available: formatScore(coins, language),
        })}
        onClick={onPurchase}
      />
    </div>
  );
}
