import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Drawer } from "vaul";
import { GAME_GENRES, GAME_GENRE_IDS } from "../../../../data/gameGenres";
import { QUEST_TYPES, type QuestTypeId } from "../../../../data/questTraits";
import { QUEST_PLAY_STYLES, QUEST_PLAY_STYLE_IDS } from "../../../../data/questPoolTraits";
import { useQuestStore } from "../../../../stores/useQuestStore";
import { normalizeLanguage } from "../../../../localization/i18n";
import { InfoLabel } from "../../../../shared/ui/InfoLabel/InfoLabel";
import { SolidButton } from "../../../../shared/ui/SolidButton/SolidButton";
import { ProfilePanel } from "../ProfileDrawer/ProfilePanel";
import styles from "./QuestPoolSettings.module.css";

export function QuestPoolSettings() {
  const { t, i18n } = useTranslation();
  const language = normalizeLanguage(i18n.resolvedLanguage ?? i18n.language);
  const preferences = useQuestStore(state => state.poolPreferences);
  const save = useQuestStore(state => state.savePoolPreferences);
  const [draft, setDraft] = useState(() => ({ genreIds: [...preferences.genreIds], typeIds: [...preferences.typeIds], styleIds: [...preferences.styleIds] }));
  return <ProfilePanel showBack title={t("ui.pool.title")} titleId="quest-pool-title" description={t("ui.pool.description")}>
    <div className={styles.settings}>
      <div className={styles.fields}>
        <ChoiceGroup title={t("ui.pool.genres")} hint={t("ui.pool.genreHint")} ids={GAME_GENRE_IDS} selected={draft.genreIds}
          label={id => GAME_GENRES[id].title[language]} onChange={genreIds => setDraft(current => ({ ...current, genreIds }))} />
        <ChoiceGroup title={t("ui.pool.styles")} hint={t("ui.pool.styleHint")} ids={QUEST_PLAY_STYLE_IDS} selected={draft.styleIds}
          label={id => QUEST_PLAY_STYLES[id][language]} onChange={styleIds => setDraft(current => ({ ...current, styleIds }))} />
        <ChoiceGroup title={t("ui.pool.types")} hint={t("ui.pool.typeHint")} ids={Object.keys(QUEST_TYPES) as QuestTypeId[]} selected={draft.typeIds}
          label={id => QUEST_TYPES[id].title[language]} onChange={typeIds => setDraft(current => ({ ...current, typeIds }))} />
      </div>
      <footer className={styles.footer}>
        <Drawer.Close asChild><SolidButton size="large" variant="primary" onClick={() => save(draft)}>{t("ui.pool.save")}</SolidButton></Drawer.Close>
        <Drawer.Close asChild><SolidButton size="large" variant="ghost">{t("ui.pool.cancel")}</SolidButton></Drawer.Close>
      </footer>
    </div>
  </ProfilePanel>;
}

function ChoiceGroup<T extends string>({ title, hint, ids, selected, label, onChange }: {
  title: string; hint: string; ids: readonly T[]; selected: readonly T[]; label: (id: T) => string; onChange: (ids: T[]) => void;
}) {
  return <section className={styles.group} aria-label={title}>
    <InfoLabel label={title} hint={hint} />
    <div className={styles.choices}>
      {ids.map(id => <SolidButton key={id} size="medium" variant={selected.includes(id) ? "primary" : "soft"}
        aria-pressed={selected.includes(id)} onClick={() => onChange(selected.includes(id) ? selected.filter(value => value !== id) : [...selected, id])}>
        {label(id)}
      </SolidButton>)}
    </div>
  </section>;
}
