import { useId, useState, type CSSProperties, type FormEvent } from "react";
import { useTranslation } from "react-i18next";
import {
  GAME_CAPABILITY_IDS,
  GAME_ICON_IDS,
  type GameCapabilityId,
  type GameColorId,
  type GameIconId,
} from "../../../../data/gameTypes";
import { GAME_COLOR_IDS, gameColor } from "../../../../data/gameVisuals";
import { QUEST_CORES } from "../../../../data/quests";
import type {
  CustomGame,
  CustomGameInput,
  QuestOverrides,
} from "../../../../domain/library/model";
import { customGameQuestIds } from "../../../../domain/library/rules";
import { localizeQuest } from "../../../../localization/catalog";
import { normalizeLanguage } from "../../../../localization/i18n";
import { plainObjectiveText } from "../../../../shared/quest-card/QuestObjectiveText/QuestObjectiveText";
import { GameVisual } from "../../../../shared/ui/GameVisual/GameVisual";
import { CheckIcon } from "../../../../shared/ui/Icons/Icons";
import { GameIcon } from "../../../../shared/ui/Icons/GameIcon";
import { SolidButton } from "../../../../shared/ui/SolidButton/SolidButton";
import { CapabilityIcon, ChevronIcon, SearchIcon } from "../LibraryIcons";
import { SectionLabel } from "../SectionLabel/SectionLabel";
import styles from "./CustomGameEditor.module.css";

type Props = {
  game?: CustomGame;
  onCancel: () => void;
  onSave: (input: CustomGameInput) => void;
};
type ColorStyle = CSSProperties & {
  "--swatch-color"?: string;
  "--custom-color"?: string;
};
export function CustomGameEditor({ game, onCancel, onSave }: Props) {
  const { i18n, t } = useTranslation();
  const language = normalizeLanguage(i18n.resolvedLanguage ?? i18n.language);
  const id = useId();
  const [name, setName] = useState(game?.name ?? "");
  const [iconId, setIconId] = useState<GameIconId>(game?.iconId ?? "adventure");
  const [colorId, setColorId] = useState<GameColorId>(
    game?.colorId ?? "explore",
  );
  const [capabilityIds, setCapabilityIds] = useState<GameCapabilityId[]>(
    game?.capabilityIds ?? [],
  );
  const [questOverrides, setQuestOverrides] = useState<QuestOverrides>(
    game?.questOverrides ?? {},
  );
  const [appearanceOpen, setAppearanceOpen] = useState(false);
  const [reviewOpen, setReviewOpen] = useState(false);
  const [reviewAll, setReviewAll] = useState(false);
  const [questSearch, setQuestSearch] = useState("");
  const draftGame: CustomGame = {
    id: game?.id ?? "custom-game-preview",
    name: name.trim() || t("ui.library.untitledGame"),
    iconId,
    colorId,
    capabilityIds,
    questOverrides,
  };
  const automaticQuestIds = new Set(
    customGameQuestIds({ ...draftGame, questOverrides: {} }),
  );
  const enabledQuestIds = new Set(customGameQuestIds(draftGame));
  const reviewQuests = QUEST_CORES.filter(
    (quest) => quest.gameBindable && quest.customGameCompatibility,
  )
    .filter(
      (quest) =>
        reviewAll ||
        automaticQuestIds.has(quest.id) ||
        questOverrides[quest.id] !== undefined,
    )
    .flatMap((quest) => {
      const localized = localizeQuest(quest.id, language);
      if (!localized) return [];
      const objective = plainObjectiveText(
        localized.gameObjective!.replaceAll("{{game}}", draftGame.name),
      );
      return `${localized.name} ${objective}`
        .toLocaleLowerCase()
        .includes(questSearch.trim().toLocaleLowerCase())
        ? [{ ...localized, objective }]
        : [];
    });

  function toggleCapability(capabilityId: GameCapabilityId) {
    setCapabilityIds((current) =>
      current.includes(capabilityId)
        ? current.filter((candidate) => candidate !== capabilityId)
        : [...current, capabilityId],
    );
  }
  function toggleQuest(questId: string) {
    const nextEnabled = !enabledQuestIds.has(questId);
    setQuestOverrides((current) => {
      const next = { ...current };
      if (nextEnabled === automaticQuestIds.has(questId)) delete next[questId];
      else next[questId] = nextEnabled;
      return next;
    });
  }
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (name.trim())
      onSave({
        name: name.trim(),
        iconId,
        colorId,
        capabilityIds,
        questOverrides,
      });
  }

  return (
    <form
      className={styles.editor}
      onSubmit={submit}
      style={{ "--custom-color": gameColor(colorId).color } as ColorStyle}
    >
      <header className={styles.editorHeader}>
        <button type="button" className={styles.backButton} onClick={onCancel}>
          <ChevronIcon />
          {t("ui.library.backToLibrary")}
        </button>
        <span aria-live="polite">
          {t("ui.library.questCount", { count: enabledQuestIds.size })}
        </span>
      </header>
      <label className={styles.nameField}>
        <span>{t("ui.library.gameName")}</span>
        <span className={styles.inputRow}>
          <GameVisual game={{ ...draftGame, source: "custom" }} />
          <input
            autoFocus
            required
            maxLength={80}
            autoComplete="off"
            placeholder={t("ui.library.gameNamePlaceholder")}
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </span>
      </label>
      <section className={styles.section}>
        <button
          className={styles.disclosure}
          type="button"
          aria-expanded={appearanceOpen}
          aria-controls={`${id}-appearance`}
          onClick={() => setAppearanceOpen((open) => !open)}
        >
          <span>{t("ui.library.appearance")}</span>
          <span className={styles.disclosureDetail}>
            {t(`ui.library.icons.${iconId}`)} ·{" "}
            {t(`ui.library.colorNames.${colorId}`)}
          </span>
          <ChevronIcon />
        </button>
        {appearanceOpen ? (
          <div id={`${id}-appearance`} className={styles.appearance}>
            <fieldset className={styles.pickerFieldset}>
              <legend>{t("ui.library.gameIcon")}</legend>
              <div className={styles.iconGrid}>
                {GAME_ICON_IDS.map((candidate) => (
                  <button
                    key={candidate}
                    type="button"
                    title={t(`ui.library.icons.${candidate}`)}
                    aria-label={t("ui.library.iconChoice", {
                      icon: t(`ui.library.icons.${candidate}`),
                    })}
                    aria-pressed={iconId === candidate}
                    onClick={() => setIconId(candidate)}
                  >
                    <GameIcon icon={candidate} />
                  </button>
                ))}
              </div>
            </fieldset>
            <fieldset className={styles.pickerFieldset}>
              <legend>{t("ui.library.gameColor")}</legend>
              <div className={styles.colorGrid}>
                {GAME_COLOR_IDS.map((candidate) => (
                  <button
                    key={candidate}
                    type="button"
                    title={t(`ui.library.colorNames.${candidate}`)}
                    aria-label={t("ui.library.colorChoice", {
                      color: t(`ui.library.colorNames.${candidate}`),
                    })}
                    aria-pressed={colorId === candidate}
                    onClick={() => setColorId(candidate)}
                  >
                    <span
                      style={
                        {
                          "--swatch-color": gameColor(candidate).color,
                        } as ColorStyle
                      }
                    >
                      {colorId === candidate ? <CheckIcon /> : null}
                    </span>
                  </button>
                ))}
              </div>
            </fieldset>
          </div>
        ) : null}
      </section>
      <fieldset className={styles.capabilityFieldset}>
        <legend>
          <SectionLabel
            label={t("ui.library.capabilities")}
            hint={t("ui.library.capabilitiesHint")}
          />
        </legend>
        <div className={styles.capabilityList}>
          {GAME_CAPABILITY_IDS.map((capabilityId) => (
            <label key={capabilityId} className={styles.capabilityRow}>
              <CapabilityIcon capability={capabilityId} />
              <span>{t(`ui.library.capabilityLabels.${capabilityId}`)}</span>
              <input
                type="checkbox"
                checked={capabilityIds.includes(capabilityId)}
                onChange={() => toggleCapability(capabilityId)}
              />
              <span className={styles.checkbox} aria-hidden="true">
                <CheckIcon />
              </span>
            </label>
          ))}
        </div>
      </fieldset>
      <section className={styles.section}>
        <button
          className={styles.disclosure}
          type="button"
          aria-expanded={reviewOpen}
          aria-controls={`${id}-review`}
          onClick={() => setReviewOpen((open) => !open)}
        >
          <span>{t("ui.library.reviewQuests")}</span>
          <span className={styles.disclosureDetail} aria-live="polite">
            {t("ui.library.questCount", { count: enabledQuestIds.size })}
          </span>
          <ChevronIcon />
        </button>
        {reviewOpen ? (
          <div className={styles.questReview} id={`${id}-review`}>
            <SectionLabel
              label={t("ui.library.reviewSelection")}
              hint={t("ui.library.reviewQuestsHint")}
            />
            <label className={styles.searchField}>
              <SearchIcon />
              <input
                type="search"
                onKeyDown={(event) => {
                  if (event.key === "Enter") event.preventDefault();
                }}
                value={questSearch}
                onChange={(event) => setQuestSearch(event.target.value)}
                placeholder={t("ui.library.searchQuests")}
                aria-label={t("ui.library.searchQuests")}
              />
            </label>
            <div className={styles.reviewTools}>
              <button
                type="button"
                aria-pressed={reviewAll}
                onClick={() => setReviewAll((all) => !all)}
              >
                {t(
                  reviewAll
                    ? "ui.library.showMatched"
                    : "ui.library.showAllReusable",
                )}
              </button>
              {Object.keys(questOverrides).length ? (
                <button type="button" onClick={() => setQuestOverrides({})}>
                  {t("ui.library.resetMatches")}
                </button>
              ) : null}
            </div>
            <div className={styles.questList}>
              {reviewQuests.map((quest) => (
                <label key={quest.id} className={styles.questRow}>
                  <span>
                    <strong>{quest.name}</strong>
                    <span>{quest.objective}</span>
                  </span>
                  <input
                    type="checkbox"
                    checked={enabledQuestIds.has(quest.id)}
                    onChange={() => toggleQuest(quest.id)}
                  />
                  <span className={styles.checkbox} aria-hidden="true">
                    <CheckIcon />
                  </span>
                </label>
              ))}
              {reviewQuests.length === 0 ? (
                <p className={styles.emptyState}>
                  {t("ui.library.noQuestResults")}
                </p>
              ) : null}
            </div>
          </div>
        ) : null}
      </section>
      <footer className={styles.actions}>
        <button className={styles.cancel} type="button" onClick={onCancel}>
          {t("ui.library.cancel")}
        </button>
        <SolidButton type="submit" disabled={!name.trim()}>
          {t(game ? "ui.library.saveGame" : "ui.library.addGame")}
        </SolidButton>
      </footer>
    </form>
  );
}
