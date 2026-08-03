import { useId } from "react";
import { useTranslation } from "react-i18next";
import styles from "../App.module.css";
import type { QuestTip } from "../data/questTypes";

type Props = {
  tips: readonly QuestTip[];
};

export function QuestTips({ tips }: Props) {
  const { t } = useTranslation();
  const titleId = useId();

  return (
    <section
      className={styles.questTipsSection}
      aria-labelledby={titleId}
    >
      <h3 className={styles.questTipsTitle} id={titleId}>
        {t("ui.quest.optionalTwists")}
      </h3>
      <ul className={styles.questTips}>
        {tips.map((tip) => (
          <li key={tip.title}>
            <strong>{tip.title}</strong>
            <small>{tip.description}</small>
          </li>
        ))}
      </ul>
    </section>
  );
}
