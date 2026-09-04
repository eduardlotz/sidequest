import { useState, type CSSProperties } from "react";
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
import { localizeMood, localizeQuest } from "../../../../localization/catalog";
import { normalizeLanguage } from "../../../../localization/i18n";
import { GameVisual } from "../../../../shared/ui/GameVisual/GameVisual";
import { GameGenreIcon } from "../../../../shared/ui/Icons/Icons";
import { SolidButton } from "../../../../shared/ui/SolidButton/SolidButton";
import styles from "./CustomGameEditor.module.css";

type Props = {
  game?: CustomGame;
  onCancel: () => void;
  onSave: (input: CustomGameInput) => void;
};

type ColorStyle = CSSProperties & {
  "--swatch-color": string;
};

export function CustomGameEditor({ game, onCancel, onSave }: Props) {
  const { i18n, t } = useTranslation();
  const language = normalizeLanguage(i18n.resolvedLanguage ?? i18n.language);
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
  const [reviewOpen, setReviewOpen] = useState(false);

  const draftGame: CustomGame = {
    id: game?.id ?? "custom-game-preview",
    name: name.trim() || t("ui.library.untitledGame"),
    iconId,
    colorId,
    capabilityIds,
    questOverrides,
  };
  const automaticQuestIds = new Set(
    customGameQuestIds({
      ...draftGame,
      questOverrides: {},
    }),
  );
  const enabledQuestIds = new Set(customGameQuestIds(draftGame));
  const reviewQuests = QUEST_CORES.filter(
    (quest) => quest.gameBindable && quest.customGameCompatibility,
  );

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
      if (nextEnabled === automaticQuestIds.has(questId)) {
        delete next[questId];
      } else {
        next[questId] = nextEnabled;
      }
      return next;
    });
  }

  function submit() {
    const trimmedName = name.trim();
    if (!trimmedName) return;
    onSave({
      name: trimmedName,
      iconId,
      colorId,
      capabilityIds,
      questOverrides,
    });
  }

  return (
    <div className={styles.editor}>
      <div className={styles.previewRow}>
        <GameVisual game={{ ...draftGame, source: "custom" }} />
        <label className={styles.nameField}>
          <span>{t("ui.library.gameName")}</span>
          <input
            autoFocus
            maxLength={80}
            placeholder={t("ui.library.gameNamePlaceholder")}
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
      </div>

      <fieldset className={styles.pickerFieldset}>
        <legend>{t("ui.library.gameIcon")}</legend>
        <div className={styles.iconGrid}>
          {GAME_ICON_IDS.map((candidate) => (
            <button
              key={candidate}
              type="button"
              aria-label={t("ui.library.iconChoice", {
                icon: t(`ui.library.icons.${candidate}`),
              })}
              aria-pressed={iconId === candidate}
              onClick={() => setIconId(candidate)}
            >
              <GameGenreIcon icon={candidate} />
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className={styles.pickerFieldset}>
        <legend>{t("ui.library.gameColor")}</legend>
        <div className={styles.colorGrid}>
          {GAME_COLOR_IDS.map((candidate) => {
            const color = gameColor(candidate);
            return (
              <button
                key={candidate}
                type="button"
                aria-label={t("ui.library.colorChoice", {
                  color: localizeMood(candidate, language)?.title ?? candidate,
                })}
                aria-pressed={colorId === candidate}
                onClick={() => setColorId(candidate)}
              >
                <span style={{ "--swatch-color": color.color } as ColorStyle} />
              </button>
            );
          })}
        </div>
      </fieldset>

      <fieldset className={styles.capabilityFieldset}>
        <legend>{t("ui.library.capabilities")}</legend>
        <p>{t("ui.library.capabilitiesHint")}</p>
        <div className={styles.capabilityGrid}>
          {GAME_CAPABILITY_IDS.map((capabilityId) => (
            <button
              key={capabilityId}
              type="button"
              aria-pressed={capabilityIds.includes(capabilityId)}
              onClick={() => toggleCapability(capabilityId)}
            >
              {t(`ui.library.capabilityLabels.${capabilityId}`)}
            </button>
          ))}
        </div>
      </fieldset>

      {/* <div className={styles.reviewSection}>
        <button
          className={styles.reviewTrigger}
          type="button"
          aria-expanded={reviewOpen}
          onClick={() => setReviewOpen((current) => !current)}
        >
          <span>{t("ui.library.reviewQuests")}</span>
          <strong>
            {t("ui.library.questCount", { count: enabledQuestIds.size })}
          </strong>
        </button>
        {reviewOpen ? (
          <div className={styles.questReview}>
            <p>{t("ui.library.reviewQuestsHint")}</p>
            {reviewQuests.map((quest) => {
              const localizedQuest = localizeQuest(quest.id, language);
              if (!localizedQuest) return null;
              return (
                <button
                  key={quest.id}
                  type="button"
                  role="switch"
                  aria-checked={enabledQuestIds.has(quest.id)}
                  onClick={() => toggleQuest(quest.id)}
                >
                  <span>{localizedQuest.name}</span>
                  <span aria-hidden="true" />
                </button>
              );
            })}
          </div>
        ) : null}
      </div> */}

      <div className={styles.actions}>
        <SolidButton type="button" onClick={onCancel}>
          {t("ui.library.cancel")}
        </SolidButton>
        <SolidButton
          type="button"
          variant="soft"
          disabled={!name.trim()}
          onClick={submit}
        >
          {t(game ? "ui.library.saveGame" : "ui.library.addGame")}
        </SolidButton>
      </div>
    </div>
  );
}
