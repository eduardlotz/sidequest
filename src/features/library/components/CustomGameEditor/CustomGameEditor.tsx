import {
  useId,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type FormEvent,
} from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useTranslation } from "react-i18next";
import {
  GAME_CAPABILITY_IDS,
  GAME_ICON_IDS,
  type GameCapabilityId,
  type GameColorId,
  type GameIconId,
} from "../../../../data/gameTypes";
import { GAME_PICKER_COLOR_IDS, gameColor } from "../../../../data/gameVisuals";
import { QUEST_CORES } from "../../../../data/quests";
import { matchesGameCapabilities } from "../../../../data/gameCompatibility";
import type {
  CustomGame,
  CustomGameInput,
} from "../../../../domain/library/model";
import { customGameQuestIds } from "../../../../domain/library/rules";
import { localizeQuest } from "../../../../localization/catalog";
import { normalizeLanguage } from "../../../../localization/i18n";
import { plainObjectiveText } from "../../../../shared/quest-card/QuestObjectiveText/QuestObjectiveText";
import { GameVisual } from "../../../../shared/ui/GameVisual/GameVisual";
import { SolidButton } from "../../../../shared/ui/SolidButton/SolidButton";
import { PillButton } from "../../../../shared/ui/PillButton/PillButton";
import { SelectionMark } from "../../../../shared/ui/SelectionMark/SelectionMark";
import { FlowFrame } from "../../../../shared/ui/FlowFrame/FlowFrame";
import { CapabilityIcon, ChevronIcon, SearchIcon } from "../LibraryIcons";
import { SectionLabel } from "../SectionLabel/SectionLabel";
import { LibraryStep } from "../LibraryStep";
import styles from "./CustomGameEditor.module.css";

const bindableQuests = QUEST_CORES.filter(
  (q) => q.gameBindable && q.customGameCompatibility,
);
const activityCounts = Object.fromEntries(
  GAME_CAPABILITY_IDS.map((id) => [
    id,
    bindableQuests.filter(
      (q) =>
        q.customGameCompatibility!.capabilityIds.length &&
        matchesGameCapabilities(new Set([id]), q.customGameCompatibility),
    ).length,
  ]),
);
export function CustomGameEditor({
  game,
  onCancel,
  onSave,
}: {
  game?: CustomGame;
  onCancel: () => void;
  onSave: (input: CustomGameInput) => void;
}) {
  const { i18n, t } = useTranslation();
  const language = normalizeLanguage(i18n.resolvedLanguage ?? i18n.language);
  const formId = useId();
  const reduced = useReducedMotion();
  const identityRef = useRef<HTMLDivElement>(null);
  const scrollPositions = useRef({ appearance: 0, activities: 0, quests: 0 });
  const [name, setName] = useState(game?.name ?? "");
  const [iconId, setIconId] = useState<GameIconId>(game?.iconId ?? "sports");
  const [colorId, setColorId] = useState<GameColorId>(
    game?.colorId ?? "challenge",
  );
  const [capabilityIds, setCapabilityIds] = useState<GameCapabilityId[]>(
    game?.capabilityIds ?? [],
  );
  const [pendingActivities, setPendingActivities] = useState(capabilityIds);
  const [questOverrides, setQuestOverrides] = useState(
    game?.questOverrides ?? {},
  );
  const [page, setPage] = useState<"appearance" | "activities" | "quests">(
    "appearance",
  );
  const [iconPage, setIconPage] = useState(() =>
    Math.floor(GAME_ICON_IDS.indexOf(game?.iconId ?? "sports") / 10),
  );
  const [pendingOverrides, setPendingOverrides] = useState(questOverrides);
  const [search, setSearch] = useState("");
  const draft: CustomGame = {
    id: game?.id ?? "preview",
    name: name.trim() || t("ui.library.untitledGame"),
    iconId,
    colorId,
    capabilityIds,
    questOverrides,
  };
  const enabled = new Set(customGameQuestIds(draft));
  const reviewedEnabled = new Set(
    customGameQuestIds({ ...draft, questOverrides: pendingOverrides }),
  );
  const pendingCount = customGameQuestIds({
    ...draft,
    capabilityIds: pendingActivities,
  }).length;
  const query = search.trim().toLocaleLowerCase(language);
  const activities = GAME_CAPABILITY_IDS.filter((id) =>
    t(`ui.library.capabilityLabels.${id}`)
      .toLocaleLowerCase(language)
      .includes(query),
  );
  const reviewed = useMemo(
    () =>
      bindableQuests.flatMap((q) => {
        const localized = localizeQuest(q.id, language);
        if (!localized) return [];
        const objective = plainObjectiveText(
          localized.gameObjective!.replaceAll(
            "{{game}}",
            name.trim() || t("ui.library.untitledGame"),
          ),
        );
        return [{ id: q.id, name: localized.name, objective }];
      }),
    [language, name, t],
  );
  function changePage(next: typeof page) {
    setSearch("");
    if (next !== "appearance") scrollPositions.current[next] = 0;
    if (next === "quests") setPendingOverrides(questOverrides);
    setPage(next);
  }
  function submit(event: FormEvent) {
    event.preventDefault();
    if (page === "appearance" && name.trim())
      onSave({
        name: name.trim(),
        iconId,
        colorId,
        capabilityIds,
        questOverrides,
      });
  }
  const pageCount = Math.ceil(GAME_ICON_IDS.length / 10);
  const footer =
    page === "appearance" ? (
      <>
        <PillButton className={styles.back} onClick={onCancel}>
          <ChevronIcon />
          {t("ui.library.cancel")}
        </PillButton>
        <SolidButton
          variant="primary"
          type="submit"
          form={formId}
          disabled={!name.trim()}
        >
          {t("ui.library.saveGame")}
        </SolidButton>
      </>
    ) : (
      <>
        <PillButton
          className={styles.back}
          onClick={() => changePage("appearance")}
        >
          <ChevronIcon />
          {t("ui.library.back")}
        </PillButton>
        <SolidButton
          type="button"
          variant="primary"
          onClick={() => {
            if (page === "activities") setCapabilityIds(pendingActivities);
            else setQuestOverrides(pendingOverrides);
            changePage("appearance");
          }}
        >
          {t(
            page === "activities"
              ? "ui.library.saveActivities"
              : "ui.library.done",
          )}
        </SolidButton>
      </>
    );
  return (
    <div
      className={styles.editor}
      style={{ "--custom-color": gameColor(colorId).color } as CSSProperties}
    >
      <AnimatePresence mode="wait" initial={false}>
        <LibraryStep key={page}>
          <FlowFrame
            title={
              page === "appearance" ? (
                t("ui.library.editorIntro")
              ) : page === "activities" ? (
                <>
                  {t("ui.library.activitiesIntro")}
                  <br />
                  <strong>{draft.name}</strong>
                  {language === "de" ? " machen kann" : ""}
                </>
              ) : (
                t("ui.library.reviewQuests")
              )
            }
            footer={footer}
            initialScrollTop={scrollPositions.current[page]}
            onScrollPositionChange={(top) => {
              scrollPositions.current[page] = top;
            }}
            identityRef={page === "appearance" ? identityRef : undefined}
            floating={
              page === "appearance" ? (
                <span className={styles.badge}>
                  <GameVisual
                    game={{ ...draft, source: "custom" }}
                    size="card"
                  />
                  <strong>{draft.name}</strong>
                </span>
              ) : undefined
            }
          >
            {page === "appearance" ? (
              <form id={formId} onSubmit={submit}>
                <div className={styles.identity}>
                  <div ref={identityRef}>
                    <GameVisual
                      game={{ ...draft, source: "custom" }}
                      size="hero"
                    />
                  </div>
                  <input
                    required
                    maxLength={80}
                    aria-label={t("ui.library.gameName")}
                    placeholder={t("ui.library.gameNamePlaceholder")}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoComplete="off"
                  />
                </div>
                <fieldset className={styles.picker}>
                  <legend>{t("ui.library.gameIcon")}</legend>
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={iconPage}
                      className={styles.iconGrid}
                      initial={{ opacity: 0, x: reduced ? 0 : 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: reduced ? 0 : -10 }}
                      transition={{ duration: reduced ? 0 : 0.15 }}
                    >
                      {GAME_ICON_IDS.slice(
                        iconPage * 10,
                        iconPage * 10 + 10,
                      ).map((icon) => (
                        <button
                          key={icon}
                          type="button"
                          aria-label={t("ui.library.iconChoice", {
                            icon: t(`ui.library.icons.${icon}`),
                          })}
                          aria-pressed={iconId === icon}
                          onClick={() => setIconId(icon)}
                        >
                          <GameVisual
                            size="picker"
                            game={{
                              id: "preview",
                              name: "",
                              source: "custom",
                              iconId: icon,
                              colorId,
                            }}
                          />
                        </button>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </fieldset>
                <nav
                  className={styles.pagination}
                  aria-label={t("ui.library.gameIcon")}
                >
                  <PillButton
                    disabled={iconPage === 0}
                    aria-label={t("ui.library.previousIcons")}
                    onClick={() => setIconPage((p) => p - 1)}
                  >
                    <ChevronIcon className={styles.previous} />
                  </PillButton>
                  {Array.from({ length: pageCount }, (_, p) => (
                    <button
                      type="button"
                      key={p}
                      aria-label={t("ui.library.iconPage", { page: p + 1 })}
                      aria-current={p === iconPage ? "page" : undefined}
                      onClick={() => setIconPage(p)}
                    />
                  ))}
                  <PillButton
                    disabled={iconPage === pageCount - 1}
                    aria-label={t("ui.library.nextIcons")}
                    onClick={() => setIconPage((p) => p + 1)}
                  >
                    <ChevronIcon />
                  </PillButton>
                </nav>
                <fieldset className={styles.colors}>
                  <legend>{t("ui.library.gameColor")}</legend>
                  {[
                    ...GAME_PICKER_COLOR_IDS,
                    ...(!GAME_PICKER_COLOR_IDS.includes(colorId)
                      ? [colorId]
                      : []),
                  ].map((color) => (
                    <button
                      key={color}
                      type="button"
                      style={
                        { "--swatch": gameColor(color).color } as CSSProperties
                      }
                      aria-label={t("ui.library.colorChoice", {
                        color: t(`ui.library.colorNames.${color}`),
                      })}
                      aria-pressed={colorId === color}
                      onClick={() => setColorId(color)}
                    />
                  ))}
                </fieldset>
                <section className={styles.activities}>
                  <div className={styles.sectionHeading}>
                    <SectionLabel
                      label={t("ui.library.possibleActivities")}
                      hint={t("ui.library.capabilitiesHint")}
                    />
                    <PillButton
                      onClick={() => {
                        setPendingActivities(capabilityIds);
                        changePage("activities");
                      }}
                    >
                      {t("ui.library.adjust")}
                    </PillButton>
                  </div>
                  {capabilityIds.length ? (
                    capabilityIds.map((id) => (
                      <div className={styles.summaryRow} key={id}>
                        <CapabilityIcon capability={id} />
                        <span>
                          {t(`ui.library.capabilityLabels.${id}`)}
                          <small>
                            {t("ui.library.questCount", {
                              count: activityCounts[id],
                            })}
                          </small>
                        </span>
                      </div>
                    ))
                  ) : (
                    <button
                      type="button"
                      className={styles.empty}
                      onClick={() => {
                        setPendingActivities(capabilityIds);
                        changePage("activities");
                      }}
                    >
                      {t("ui.library.chooseActivities")}
                    </button>
                  )}
                  <PillButton onClick={() => changePage("quests")}>
                    {t("ui.library.reviewQuests")} · {enabled.size}
                  </PillButton>
                </section>
              </form>
            ) : (
              <>
                <div className={styles.stats}>
                  <strong>
                    {page === "activities"
                      ? t("ui.library.selectedActivities", {
                          count: pendingActivities.length,
                        })
                      : t("ui.library.reviewQuests")}
                  </strong>
                  <span aria-live="polite">
                    {page === "activities"
                      ? pendingCount
                      : reviewedEnabled.size}
                    /{bindableQuests.length} sidequests
                  </span>
                </div>
                <label className={styles.search}>
                  <SearchIcon />
                  <input
                    type="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder={t(
                      page === "activities"
                        ? "ui.library.searchActivities"
                        : "ui.library.searchQuests",
                    )}
                    aria-label={t(
                      page === "activities"
                        ? "ui.library.searchActivities"
                        : "ui.library.searchQuests",
                    )}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") e.preventDefault();
                    }}
                  />
                  <span>
                    {page === "activities"
                      ? activities.length
                      : reviewed.filter((q) =>
                          `${q.name} ${q.objective}`
                            .toLocaleLowerCase(language)
                            .includes(query),
                        ).length}
                  </span>
                </label>
                <div className={styles.activityList}>
                  {page === "activities"
                    ? activities.map((id) => (
                        <button
                          type="button"
                          className={styles.activityRow}
                          key={id}
                          aria-pressed={pendingActivities.includes(id)}
                          onClick={() =>
                            setPendingActivities((ids) =>
                              ids.includes(id)
                                ? ids.filter((candidate) => candidate !== id)
                                : [...ids, id],
                            )
                          }
                        >
                          <CapabilityIcon capability={id} />
                          <span>
                            {t(`ui.library.capabilityLabels.${id}`)}
                            <small>
                              {t("ui.library.questCount", {
                                count: activityCounts[id],
                              })}
                            </small>
                          </span>
                          <SelectionMark
                            selected={pendingActivities.includes(id)}
                          />
                        </button>
                      ))
                    : reviewed
                        .filter((q) =>
                          `${q.name} ${q.objective}`
                            .toLocaleLowerCase(language)
                            .includes(query),
                        )
                        .map((q) => (
                          <button
                            key={q.id}
                            className={styles.activityRow}
                            type="button"
                            aria-pressed={reviewedEnabled.has(q.id)}
                            onClick={() =>
                              setPendingOverrides((current) => {
                                const next = { ...current };
                                const selected = !reviewedEnabled.has(q.id);
                                const automatic = customGameQuestIds({
                                  ...draft,
                                  questOverrides: {},
                                }).includes(q.id);
                                if (selected === automatic) delete next[q.id];
                                else next[q.id] = selected;
                                return next;
                              })
                            }
                          >
                            <span>
                              {q.name}
                              <small>{q.objective}</small>
                            </span>
                            <SelectionMark
                              selected={reviewedEnabled.has(q.id)}
                            />
                          </button>
                        ))}
                </div>
                {page === "activities" && !activities.length && (
                  <p className={styles.empty}>
                    {t("ui.library.noActivityResults")}
                  </p>
                )}
                {page === "quests" &&
                  !reviewed.some((q) =>
                    `${q.name} ${q.objective}`
                      .toLocaleLowerCase(language)
                      .includes(query),
                  ) && (
                    <p className={styles.empty}>
                      {t("ui.library.noQuestResults")}
                    </p>
                  )}
                {page === "quests" && (
                  <PillButton onClick={() => setPendingOverrides({})}>
                    {t("ui.library.resetMatches")}
                  </PillButton>
                )}
              </>
            )}
          </FlowFrame>
        </LibraryStep>
      </AnimatePresence>
    </div>
  );
}
