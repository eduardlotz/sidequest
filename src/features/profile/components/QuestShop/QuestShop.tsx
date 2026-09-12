import { useTranslation } from "react-i18next";
import { useShallow } from "zustand/react/shallow";
import { CoffeeIcon, CompassIcon, TargetIcon, LightningIcon, HeartIcon, PaintBrushIcon, SparkleIcon, TimerIcon, FlagCheckeredIcon } from "@phosphor-icons/react";
import { QUEST_PACKS, QUEST_PACK_PRICE, QUEST_PACK_SIZE } from "../../../../data/questPacks";
import { useQuestStore } from "../../../../stores/useQuestStore";
import { normalizeLanguage } from "../../../../localization/i18n";
import { SolidButton } from "../../../../shared/ui/SolidButton/SolidButton";
import { CoinIcon } from "../../../../shared/ui/Icons/Icons";
import { InfoText } from "../../../../shared/ui/InfoText/InfoText";
import { ProfilePanel } from "../ProfileDrawer/ProfilePanel";
import styles from "./QuestShop.module.css";

const icons = { coffee: CoffeeIcon, compass: CompassIcon, target: TargetIcon, lightning: LightningIcon, heart: HeartIcon, paint: PaintBrushIcon, sparkle: SparkleIcon, timer: TimerIcon, flag: FlagCheckeredIcon };
export function QuestShop() {
  const { t, i18n } = useTranslation();
  const language = normalizeLanguage(i18n.resolvedLanguage ?? i18n.language);
  const { owned, points, purchase } = useQuestStore(useShallow(state => ({ owned: state.ownedPackIds, points: state.profile.points, purchase: state.purchaseQuestPack })));
  return <ProfilePanel showBack title={t("ui.shop.title")} titleId="quest-shop-title" description={t("ui.shop.description")}>
    <div className={styles.shop}>
      <InfoText>{t("ui.shop.description")}</InfoText>
      <div className={styles.grid}>
        {QUEST_PACKS.map(pack => {
          const Icon = icons[pack.icon];
          const purchased = owned.includes(pack.id);
          return <article key={pack.id} className={styles.pack}>
            <Icon weight="duotone" className={styles.icon} aria-hidden />
            <h3>{pack.title[language]}</h3>
            <p>{t("ui.shop.questCount", { count: QUEST_PACK_SIZE })}</p>
            <SolidButton size="medium" variant="primary" disabled={purchased || points < QUEST_PACK_PRICE}
              aria-label={purchased ? t("ui.shop.ownedPack", { pack: pack.title[language] }) : t("ui.shop.buyPack", { pack: pack.title[language], price: QUEST_PACK_PRICE })}
              onClick={() => purchase(pack.id)}>
              {purchased ? t("ui.shop.owned") : <>{QUEST_PACK_PRICE} <CoinIcon /></>}
            </SolidButton>
          </article>;
        })}
      </div>
    </div>
  </ProfilePanel>;
}
