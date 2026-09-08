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
import { matchesGameCapabilities } from "../../../../data/gameCompatibility";
import type {
  CustomGame,
  CustomGameInput,
} from "../../../../domain/library/model";
import {
  CUSTOM_GAME_QUESTS,
  customGameQuestIds,
} from "../../../../domain/library/rules";
import { localizeQuest } from "../../../../localization/catalog";
import { normalizeLanguage } from "../../../../localization/i18n";
import { plainObjectiveText } from "../../../../shared/quest-card/QuestObjectiveText/QuestObjectiveText";
import { GameVisual } from "../../../../shared/ui/GameVisual/GameVisual";
import { SolidButton } from "../../../../shared/ui/SolidButton/SolidButton";
import { SelectionMark } from "../../../../shared/ui/SelectionMark/SelectionMark";
import { FlowFrame } from "../../../../shared/ui/FlowFrame/FlowFrame";
import { CapabilityIcon, ChevronIcon, SearchIcon } from "../LibraryIcons";
import { InfoLabel } from "../../../../shared/ui/InfoLabel/InfoLabel";
import { LibraryStep } from "../LibraryStep";
import { LIBRARY_SELECTION_SPRING } from "../../../../shared/motion/transitions";
import styles from "./CustomGameEditor.module.css";

const ICONS_PER_PAGE = 10;
const activityCounts = Object.fromEntries(
  GAME_CAPABILITY_IDS.map((id) => [
    id,
    CUSTOM_GAME_QUESTS.filter(
      (q) =>
        q.customGameCompatibility?.capabilityIds.length &&
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
  const iconGridRef = useRef<HTMLDivElement>(null);
  const pageScrollRef = useRef<HTMLDivElement>(null);
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
    Math.floor(
      GAME_ICON_IDS.indexOf(game?.iconId ?? "sports") / ICONS_PER_PAGE,
    ),
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
  const automaticQuestIds = new Set(
    customGameQuestIds({ ...draft, questOverrides: {} }),
  );
  const reviewedEnabled = new Set(
    customGameQuestIds({ ...draft, questOverrides: pendingOverrides }),
  );
  const query = search.trim().toLocaleLowerCase(language);
  const activities = GAME_CAPABILITY_IDS.filter((id) =>
    t(`ui.library.capabilityLabels.${id}`)
      .toLocaleLowerCase(language)
      .includes(query),
  );
  const reviewed = useMemo(
    () =>
      CUSTOM_GAME_QUESTS.flatMap((q) => {
        const localized = localizeQuest(q.id, language);
        if (!localized?.gameObjective) return [];
        const objective = plainObjectiveText(
          localized.gameObjective.replaceAll(
            "{{game}}",
            () => name.trim() || t("ui.library.untitledGame"),
          ),
        );
        return [{ id: q.id, name: localized.name, objective }];
      }),
    [language, name, t],
  );
  const filteredQuests = reviewed.filter((quest) =>
    `${quest.name} ${quest.objective}`
      .toLocaleLowerCase(language)
      .includes(query),
  );
  function changePage(next: typeof page) {
    scrollPositions.current[page] =
      pageScrollRef.current?.scrollTop ?? scrollPositions.current[page];
    setSearch("");
    if (next !== "appearance") scrollPositions.current[next] = 0;
    if (next === "quests") setPendingOverrides(questOverrides);
    setPage(next);
  }
  function showIconPage(nextPage: number) {
    const pageIndex = Math.max(0, Math.min(pageCount - 1, nextPage));
    setIconPage(pageIndex);
    const icon = GAME_ICON_IDS[pageIndex * ICONS_PER_PAGE];
    iconGridRef.current
      ?.querySelector<HTMLElement>(`[data-icon="${icon}"]`)
      ?.scrollIntoView({
        behavior: reduced ? "instant" : "smooth",
        block: "nearest",
        inline: "start",
      });
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
  const pageCount = Math.ceil(GAME_ICON_IDS.length / ICONS_PER_PAGE);
  const footer =
    page === "appearance" ? (
      <>
        <SolidButton
          size="large"
          variant="primary"
          type="submit"
          form={formId}
          disabled={!name.trim()}
        >
          {t("ui.library.saveGame")}
        </SolidButton>
        <SolidButton
          className={styles.back}
          iconLeft={<ChevronIcon />}
          size="large"
          variant="ghost"
          onClick={onCancel}
        >
          {t("ui.library.back")}
        </SolidButton>
      </>
    ) : (
      <>
        <SolidButton
          size="large"
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
        <SolidButton
          className={styles.back}
          iconLeft={<ChevronIcon />}
          size="large"
          variant="ghost"
          onClick={() => changePage("appearance")}
        >
          {t("ui.library.back")}
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
            scrollElementRef={pageScrollRef}
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
            selectionIndicator={
              page === "activities"
                ? t("ui.library.selectedActivities", {
                    count: pendingActivities.length,
                  })
                : page === "quests"
                  ? t("ui.library.selectedQuests", {
                      count: reviewedEnabled.size,
                    })
                  : undefined
            }
          >
            {page === "appearance" ? (
              <form className={styles.appearance} id={formId} onSubmit={submit}>
                <div className={styles.identity}>
                  <div className={styles.identityVisual} ref={identityRef}>
                    <GameVisual
                      colorTransitionKey={colorId}
                      game={{ ...draft, source: "custom" }}
                      iconTransitionKey={iconId}
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
                  <div
                    className={styles.iconViewport}
                    ref={iconGridRef}
                    onScroll={(event) => {
                      const node = event.currentTarget;
                      const available = node.scrollWidth - node.clientWidth;
                      if (available <= 0) return;
                      setIconPage(
                        Math.round(
                          (node.scrollLeft / available) * (pageCount - 1),
                        ),
                      );
                    }}
                  >
                    <div className={styles.iconGrid}>
                      {GAME_ICON_IDS.map((icon, index) => (
                        <button
                          key={icon}
                          data-icon={icon}
                          data-page-start={
                            index % ICONS_PER_PAGE === 0 || undefined
                          }
                          type="button"
                          aria-label={t("ui.library.iconChoice", {
                            icon: t(`ui.library.icons.${icon}`),
                          })}
                          aria-pressed={iconId === icon}
                          onClick={() => setIconId(icon)}
                        >
                          <motion.span
                            className={styles.iconChoiceVisual}
                            initial={false}
                            animate={{ scale: iconId === icon ? 0.82 : 1 }}
                            transition={
                              reduced
                                ? { duration: 0 }
                                : LIBRARY_SELECTION_SPRING
                            }
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
                          </motion.span>
                        </button>
                      ))}
                    </div>
                  </div>
                  <nav
                    className={styles.pagination}
                    aria-label={t("ui.library.gameIcon")}
                  >
                    <SolidButton
                      disabled={iconPage === 0}
                      aria-label={t("ui.library.previousIcons")}
                      iconLeft={<ChevronIcon className={styles.previous} />}
                      size="small"
                      variant="soft"
                      onClick={() => showIconPage(iconPage - 1)}
                    />
                    {Array.from({ length: pageCount }, (_, p) => (
                      <button
                        type="button"
                        key={p}
                        aria-label={t("ui.library.iconPage", { page: p + 1 })}
                        aria-current={p === iconPage ? "page" : undefined}
                        onClick={() => showIconPage(p)}
                      />
                    ))}
                    <SolidButton
                      disabled={iconPage === pageCount - 1}
                      aria-label={t("ui.library.nextIcons")}
                      iconLeft={<ChevronIcon />}
                      size="small"
                      variant="soft"
                      onClick={() => showIconPage(iconPage + 1)}
                    />
                  </nav>
                </fieldset>
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
                    >
                      <motion.span
                        className={styles.colorChoiceVisual}
                        initial={false}
                        animate={{ scale: colorId === color ? 0.84 : 1 }}
                        transition={
                          reduced ? { duration: 0 } : LIBRARY_SELECTION_SPRING
                        }
                      />
                    </button>
                  ))}
                </fieldset>
                <section className={styles.activities}>
                  <div className={styles.sectionHeading}>
                    <InfoLabel
                      label={t("ui.library.possibleActivities")}
                      hint={t("ui.library.capabilitiesHint")}
                    />
                    {capabilityIds.length ? (
                      <SolidButton
                        size="small"
                        variant="soft"
                        onClick={() => {
                          setPendingActivities(capabilityIds);
                          changePage("activities");
                        }}
                      >
                        {t("ui.library.adjust")}
                      </SolidButton>
                    ) : null}
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
                    <div className={styles.emptyActivities}>
                      <CapabilityIcon capability="rounds-or-matches" />
                      <strong>{t("ui.library.chooseActivities")}</strong>
                      <SolidButton
                        size="small"
                        variant="highContrast"
                        onClick={() => {
                          setPendingActivities(capabilityIds);
                          changePage("activities");
                        }}
                      >
                        {t("ui.library.addActivities")}
                      </SolidButton>
                    </div>
                  )}
                </section>
                <div className={styles.reviewAction}>
                  <SolidButton
                    size="small"
                    variant="soft"
                    onClick={() => changePage("quests")}
                  >
                    {t("ui.library.reviewQuests")} · {enabled.size}
                  </SolidButton>
                </div>
              </form>
            ) : (
              <>
                <div
                  className={
                    page === "activities" ? styles.activitySection : undefined
                  }
                >
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
                        : filteredQuests.length}
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
                      : filteredQuests.map((q) => (
                          <button
                            key={q.id}
                            className={styles.activityRow}
                            type="button"
                            aria-pressed={reviewedEnabled.has(q.id)}
                            onClick={() =>
                              setPendingOverrides((current) => {
                                const next = { ...current };
                                const automatic = automaticQuestIds.has(q.id);
                                const selected = !(current[q.id] ?? automatic);
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
                  {page === "quests" && !filteredQuests.length && (
                    <p className={styles.empty}>
                      {t("ui.library.noQuestResults")}
                    </p>
                  )}
                  {page === "quests" && (
                    <SolidButton
                      size="small"
                      variant="soft"
                      onClick={() => setPendingOverrides({})}
                    >
                      {t("ui.library.resetMatches")}
                    </SolidButton>
                  )}
                </div>
              </>
            )}
          </FlowFrame>
        </LibraryStep>
      </AnimatePresence>
    </div>
  );
}
