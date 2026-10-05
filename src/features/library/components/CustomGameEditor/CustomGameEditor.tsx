import { EyesIcon } from "@phosphor-icons/react/dist/csr/Eyes";
import {
  ResponsiveNestedDrawerContent,
  ResponsiveNestedDrawerRoot,
} from "../../../../shared/ui/ResponsiveDrawer/ResponsiveDrawer";
import { Drawer } from "vaul";
import { LibraryDrawerFrame } from "../LibraryDrawerFrame/LibraryDrawerFrame";
import {
  useId,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type FormEvent,
  type ReactElement,
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
import { compatibilityUsesCapability, compatibilityRequirement, missingCapabilityRequirement, type CapabilityRequirement } from "../../../../data/gameCompatibility";
import {
  GAME_GENRES,
  GAME_GENRE_IDS,
  suggestedGameCapabilities,
  type GameGenreId,
} from "../../../../data/gameGenres";
import type {
  CustomGame,
  CustomGameInput,
} from "../../../../domain/library/model";
import {
  CUSTOM_GAME_QUESTS,
  AUTOMATIC_CUSTOM_GAME_QUESTS,
  customGameQuestIds,
  hasCustomGameActivities,
} from "../../../../domain/library/rules";
import { localizeQuest } from "../../../../localization/catalog";
import { normalizeLanguage } from "../../../../localization/i18n";
import { plainObjectiveText } from "../../../../shared/quest-card/QuestObjectiveText/QuestObjectiveText";
import { GameVisual } from "../../../../shared/ui/GameVisual/GameVisual";
import { SolidButton } from "../../../../shared/ui/SolidButton/SolidButton";
import { SelectionRow } from "../../../../shared/ui/SelectionRow/SelectionRow";
import { CountBadge } from "../../../../shared/ui/CountBadge/CountBadge";
import { FilterAccordion } from "../../../../shared/ui/FilterAccordion/FilterAccordion";
import { SegmentedControl } from "../../../../shared/ui/SegmentedControl/SegmentedControl";
import { FlowFrame } from "../../../../shared/ui/FlowFrame/FlowFrame";
import { CapabilityIcon, ChevronIcon, SearchIcon } from "../LibraryIcons";
import { InfoLabel } from "../../../../shared/ui/InfoLabel/InfoLabel";
import { LibraryStep } from "../LibraryStep";
import { LIBRARY_SELECTION_SPRING } from "../../../../shared/motion/transitions";
import styles from "./CustomGameEditor.module.css";

const ICONS_PER_PAGE = 10;
const ACTIVITY_QUEST_COUNTS = Object.fromEntries(GAME_CAPABILITY_IDS.map(id => [
  id,
  AUTOMATIC_CUSTOM_GAME_QUESTS.filter(quest => quest.customGameCompatibility
    && compatibilityUsesCapability(quest.customGameCompatibility, id)).length,
]));
export function CustomGameEditor({
  game,
  onCancel,
  onSave,
  presentation = "page",
}: {
  presentation?: "page" | "drawer";
  game?: CustomGame;
  onCancel: () => void;
  onSave: (input: CustomGameInput) => boolean | void;
}) {
  const { i18n, t } = useTranslation();
  const language = normalizeLanguage(i18n.resolvedLanguage ?? i18n.language);
  const formId = useId();
  const saveButtonRef = useRef<HTMLButtonElement>(null);
  const reduced = useReducedMotion();
  const identityRef = useRef<HTMLDivElement>(null);
  const iconGridRef = useRef<HTMLDivElement>(null);
  const pageScrollRef = useRef<HTMLDivElement>(null);
  const appearanceScrollRef = useRef<HTMLDivElement>(null);
  const colorScrollRef = useRef<HTMLFieldSetElement>(null);
  const [colorEdges, setColorEdges] = useState({ left: false, right: false });
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
  const [genreIds, setGenreIds] = useState<GameGenreId[]>(game?.genreIds ?? []);
  const [pendingGenres, setPendingGenres] = useState(genreIds);
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
    genreIds,
    questOverrides,
  };
  const automaticQuestIds = new Set(
    customGameQuestIds({
      ...draft,
      capabilityIds: pendingActivities,
      genreIds: pendingGenres,
      questOverrides: {},
    }),
  );
  const reviewedEnabled = new Set(
    customGameQuestIds({
      ...draft,
      capabilityIds: pendingActivities,
      genreIds: pendingGenres,
      questOverrides: pendingOverrides,
    }),
  );
  const savedQuestCount = customGameQuestIds(draft).length;
  const query = search.trim().toLocaleLowerCase(language);
  const suggestedActivities = useMemo(
    () => suggestedGameCapabilities(pendingGenres),
    [pendingGenres],
  );
  const genres = GAME_GENRE_IDS.filter((id) =>
    GAME_GENRES[id].title[language].toLocaleLowerCase(language).includes(query),
  );
  const activities = GAME_CAPABILITY_IDS.filter((id) =>
    t(`ui.library.capabilityLabels.${id}`)
      .toLocaleLowerCase(language)
      .includes(query),
  ).sort(
    (a, b) =>
      Number(suggestedActivities.has(b)) - Number(suggestedActivities.has(a)),
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
        return [{ id: q.id, name: localized.name, objective, compatibility: q.customGameCompatibility }];
      }),
    [language, name, t],
  );
  const filteredQuests = reviewed
    .filter((quest) =>
      `${quest.name} ${quest.objective}`
        .toLocaleLowerCase(language)
        .includes(query),
    );
  const questGroups = [
    { key: "automaticMatches", quests: filteredQuests.filter(q => automaticQuestIds.has(q.id) && reviewedEnabled.has(q.id)) },
    { key: "manualApprovals", quests: filteredQuests.filter(q => reviewedEnabled.has(q.id) && !automaticQuestIds.has(q.id)) },
    { key: "otherQuests", quests: filteredQuests.filter(q => !reviewedEnabled.has(q.id)) },
  ];
  function requirementText(requirement: CapabilityRequirement): string {
    if (typeof requirement === "string") return t(`ui.library.capabilityLabels.${requirement}`);
    const all = "all" in requirement;
    const children = all ? requirement.all : requirement.any;
    const text = children.map(requirementText).join(t(all ? "ui.library.requirementAnd" : "ui.library.requirementOr"));
    return children.length > 1 ? `(${text})` : text;
  }
  function mappingCopy(q: (typeof reviewed)[number]) {
    if (!q.compatibility) return <small>{t("ui.library.manualOnlyHint")}</small>;
    const requirement = compatibilityRequirement(q.compatibility);
    const missing = missingCapabilityRequirement(new Set(pendingActivities), requirement);
    const missingGenres = q.compatibility.genreIds?.length && !q.compatibility.genreIds.some(id => pendingGenres.includes(id));
    const matchedActivities = GAME_CAPABILITY_IDS.filter(id => pendingActivities.includes(id) && compatibilityUsesCapability(q.compatibility!, id));
    return <>
      {matchedActivities.length > 0 && <small>{t("ui.library.matchedActivities", { activities: matchedActivities.map(id => t(`ui.library.capabilityLabels.${id}`)).join(" · ") })}</small>}
      {missing && <small>{t("ui.library.missingActivities", { activities: requirementText(missing) })}</small>}
      {missingGenres && <small>{t("ui.library.missingGenre", { genres: q.compatibility.genreIds!.map(id => GAME_GENRES[id].title[language]).join(t("ui.library.requirementOr")) })}</small>}
      {pendingOverrides[q.id] === false && <small>{t("ui.library.manuallyExcluded")}</small>}
    </>;
  }
  function beginActivitySelection() {
    setPendingActivities(capabilityIds);
    setPendingGenres(genreIds);
    setPendingOverrides(questOverrides);
    changePage("activities");
  }
  function changePage(next: typeof page) {
    if (next === page) return;
    const currentScroll =
      presentation === "drawer" && page === "appearance"
        ? appearanceScrollRef.current
        : pageScrollRef.current;
    scrollPositions.current[page] =
      currentScroll?.scrollTop ?? scrollPositions.current[page];
    setSearch("");
    if (page === "appearance" && next === "activities")
      setPendingOverrides(questOverrides);
    setPage(next);
  }
  useEffect(() => {
    const node = colorScrollRef.current;
    if (!node) return;
    const update = () =>
      setColorEdges({
        left: node.scrollLeft > 4,
        right: node.scrollWidth - node.clientWidth - node.scrollLeft > 4,
      });
    const observer = new ResizeObserver(update);
    observer.observe(node);
    node.addEventListener("scroll", update, { passive: true });
    update();
    return () => {
      observer.disconnect();
      node.removeEventListener("scroll", update);
    };
  }, [page]);
  function showIconPage(nextPage: number) {
    const pageIndex = Math.max(0, Math.min(pageCount - 1, nextPage));
    setIconPage(pageIndex);
    const viewport = iconGridRef.current;
    viewport?.scrollTo({
      left: pageIndex * viewport.clientWidth,
      behavior: reduced ? "instant" : "smooth",
    });
  }
  function submit(event: FormEvent) {
    event.preventDefault();
    if (page !== "appearance") return;
    if (presentation === "drawer") saveButtonRef.current?.click();
    else saveGame();
  }
  function saveGame() {
    if (!name.trim() || !hasCustomGameActivities(draft)) return false;
    return (
      onSave({
        name: name.trim(),
        iconId,
        colorId,
        capabilityIds,
        genreIds,
        questOverrides,
      }) !== false
    );
  }
  function renderActivityTrigger(trigger: ReactElement) {
    return presentation === "drawer" ? (
      <Drawer.Trigger asChild>{trigger}</Drawer.Trigger>
    ) : (
      trigger
    );
  }
  const pageCount = Math.ceil(GAME_ICON_IDS.length / ICONS_PER_PAGE);
  const activityPage = page === "appearance" ? "activities" : page;
  const renderPage = (view: typeof page): ReactElement => {
    const page = view;
    const iconChoices = GAME_ICON_IDS.map((icon) => (
      <button
        key={icon}
        data-icon={icon}
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
          transition={reduced ? { duration: 0 } : LIBRARY_SELECTION_SPRING}
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
    ));
    const saveGameButton = (
      <SolidButton
        ref={saveButtonRef}
        size="large"
        variant="highlighted"
        type={presentation === "drawer" ? "button" : "submit"}
        form={formId}
        disabled={!name.trim() || !hasCustomGameActivities(draft)}
        onClick={
          presentation === "drawer"
            ? (event) => {
                if (!saveGame()) event.preventDefault();
              }
            : undefined
        }
      >
        {t("ui.library.saveGame")}
        <CountBadge label={t("ui.library.questCount", { count: savedQuestCount })} />
      </SolidButton>
    );
    const saveActivitiesButton = (
      <SolidButton
        size="large"
        type="button"
        variant="highlighted"
        onClick={() => {
          setCapabilityIds(pendingActivities);
          setGenreIds(pendingGenres);
          setQuestOverrides(pendingOverrides);
          if (presentation === "page") changePage("appearance");
        }}
      >
        {t("ui.library.saveActivities")}
        <CountBadge label={t("ui.library.questCount", { count: reviewedEnabled.size })} />
      </SolidButton>
    );
    const footer =
      page === "appearance" ? (
        <>
          {presentation === "drawer" ? (
            <Drawer.Close asChild>{saveGameButton}</Drawer.Close>
          ) : (
            saveGameButton
          )}
          {presentation !== "drawer" && (
            <SolidButton
              className={styles.back}
              // iconLeft={<ChevronIcon />}
              size="large"
              variant="ghost"
              onClick={onCancel}
            >
              {t("ui.library.cancel")}
            </SolidButton>
          )}
        </>
      ) : (
        <>
          {presentation === "drawer" ? (
            <Drawer.Close asChild>{saveActivitiesButton}</Drawer.Close>
          ) : (
            saveActivitiesButton
          )}
          {presentation !== "drawer" && (
            <SolidButton
              className={styles.back}
              // iconLeft={<ChevronIcon />}
              size="large"
              variant="ghost"
              onClick={() => changePage("appearance")}
            >
              {t("ui.library.back")}
            </SolidButton>
          )}
        </>
      );
    const activitiesSection = (
      <section className={styles.activities}>
        <div className={styles.sectionHeading}>
          <InfoLabel
            label={t("ui.library.possibleActivities")}
          />
          {capabilityIds.length
            ? renderActivityTrigger(
                <SolidButton
                  size="small"
                  variant="highlighted"
                  onClick={beginActivitySelection}
                >
                  {t("ui.library.adjust")}
                </SolidButton>,
              )
            : null}
        </div>
        {genreIds.length > 0 && (
          <div className={styles.summaryMetaRow}>
            {genreIds.map((id) => (
              <span key={id}>{GAME_GENRES[id].title[language]}</span>
            ))}
          </div>
        )}
        {hasCustomGameActivities(draft) && <p className={styles.summaryMetaRow}>{t("ui.library.questCount", { count: savedQuestCount })}</p>}
        {capabilityIds.length ? (
          capabilityIds.map((id) => (
            <div className={styles.summaryRow} key={id}>
              <CapabilityIcon capability={id} />
              <span>
                {t(`ui.library.capabilityLabels.${id}`)}
                <small>
                  {t("ui.library.questCount", {
                    count: ACTIVITY_QUEST_COUNTS[id],
                  })}
                </small>
              </span>
            </div>
          ))
        ) : (
          <div className={styles.emptyActivities}>
            <EyesIcon aria-hidden />
            <strong>{t("ui.library.chooseActivities")}</strong>
            {renderActivityTrigger(
              <SolidButton
                size="medium"
                variant="highlighted"
                onClick={beginActivitySelection}
              >
                {t("ui.library.selectActivities")}
              </SolidButton>,
            )}
          </div>
        )}
      </section>
    );
    return (
      <div
        className={styles.editor}
        style={{ "--custom-color": gameColor(colorId).color } as CSSProperties}
      >
        <FlowFrame
          keepScrollTopVisible={page !== "appearance"}
          titleInContent
          title={
            page === "appearance" ? (
              t("ui.library.editorIntro")
            ) : (
              <>
                {t("ui.library.drawerActivitiesIntro")}{" "}
                <span data-library-part="inlineGame">
                  <GameVisual
                    game={{ ...draft, source: "custom" }}
                    size="card"
                  />
                  <strong>{draft.name}</strong>
                </span>
                {t("ui.library.drawerActivitiesOutro")}
              </>
            )
          }
          footer={footer}
          initialScrollTop={scrollPositions.current[page]}
          scrollKey={page}
          scrollElementRef={
            presentation === "drawer" && page === "appearance"
              ? appearanceScrollRef
              : pageScrollRef
          }
          identityRef={page === "appearance" ? identityRef : undefined}
          floating={
            page === "appearance" ? (
              <span className={styles.badge}>
                <GameVisual game={{ ...draft, source: "custom" }} size="card" />
                <strong>{draft.name}</strong>
              </span>
            ) : undefined
          }
          selectionIndicator={
            page !== "appearance" ? t("ui.library.questCount", { count: reviewedEnabled.size }) : undefined
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
                    {Array.from({ length: pageCount }, (_, index) => (
                      <div
                        className={styles.iconPage}
                        key={index}
                        data-icon-page={index}
                      >
                        {iconChoices.slice(
                          index * ICONS_PER_PAGE,
                          (index + 1) * ICONS_PER_PAGE,
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <nav
                  className={styles.pagination}
                  aria-label={t("ui.library.gameIcon")}
                >
                  <SolidButton
                    data-direction="previous"
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
                    data-direction="next"
                    disabled={iconPage === pageCount - 1}
                    aria-label={t("ui.library.nextIcons")}
                    iconLeft={<ChevronIcon />}
                    size="small"
                    variant="soft"
                    onClick={() => showIconPage(iconPage + 1)}
                  />
                </nav>
              </fieldset>
              <div className={styles.colorPicker}>
                <fieldset className={styles.colors} ref={colorScrollRef}>
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
                {colorEdges.left && (
                  <SolidButton
                    className={styles.moreColors}
                    data-direction="previous"
                    size="small"
                    variant="soft"
                    aria-label={t("ui.library.previousColors")}
                    iconLeft={<ChevronIcon className={styles.previous} />}
                    onClick={() =>
                      colorScrollRef.current?.scrollBy({
                        left: -192,
                        behavior: reduced ? "instant" : "smooth",
                      })
                    }
                  />
                )}
                {colorEdges.right && (
                  <SolidButton
                    className={styles.moreColors}
                    data-direction="next"
                    size="small"
                    variant="soft"
                    aria-label={t("ui.library.moreColors")}
                    iconLeft={<ChevronIcon />}
                    onClick={() =>
                      colorScrollRef.current?.scrollBy({
                        left: 192,
                        behavior: reduced ? "instant" : "smooth",
                      })
                    }
                  />
                )}
              </div>
              {presentation === "drawer" ? (
                <ResponsiveNestedDrawerRoot
                  onAnimationEnd={(open) => {
                    if (!open) changePage("appearance");
                  }}
                >
                  {activitiesSection}
                  <ResponsiveNestedDrawerContent>
                    <LibraryDrawerFrame
                      title={t("ui.library.selectActivities")}
                    >
                      {renderPage(activityPage)}
                    </LibraryDrawerFrame>
                  </ResponsiveNestedDrawerContent>
                </ResponsiveNestedDrawerRoot>
              ) : (
                activitiesSection
              )}
            </form>
          ) : (
            <>
              <div className={styles.activitySection}>
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
                </label>
                <div className={styles.viewSwitch}>
                  <SegmentedControl equalWidth label={t("ui.library.activityView")} value={page}
                    options={(["activities", "quests"] as const).map(view => ({ value: view, label: `${t(view === "activities" ? "ui.library.activitiesView" : "ui.library.questsView")} ${view === "activities" ? GAME_CAPABILITY_IDS.length : reviewed.length}` }))}
                    onChange={changePage} />
                </div>
                {page === "activities" && (
                  <>
                    <FilterAccordion title={t("ui.library.genres")}
                      summary={t("ui.library.selectedActivities", { count: pendingGenres.length })} forceOpen={Boolean(query)}>
                    <div
                      className={styles.genreChoices}
                      role="group"
                      aria-label={t("ui.library.genres")}
                    >
                      {genres.map((id) => (
                        <SolidButton
                          key={id}
                          type="button"
                          size="small"
                          variant={
                            pendingGenres.includes(id) ? "primary" : "soft"
                          }
                          aria-pressed={pendingGenres.includes(id)}
                          onClick={() =>
                            setPendingGenres((ids) =>
                              ids.includes(id)
                                ? ids.filter((candidate) => candidate !== id)
                                : [...ids, id],
                            )
                          }
                        >
                          {GAME_GENRES[id].title[language]}
                        </SolidButton>
                      ))}
                    </div>
                    </FilterAccordion>
                    <div className={styles.sectionHeading}>
                      <InfoLabel
                        label={t("ui.library.activitiesView")}
                        hint={t("ui.library.activitySuggestionsHint")}
                      />
                      <span className={styles.mappingCount}>{t("ui.library.questCount", { count: reviewedEnabled.size })}</span>
                    </div>
                  </>
                )}
                <div className={styles.activityList}>
                  {page === "activities"
                    ? activities.map((id) => (
                        <SelectionRow
                          selected={pendingActivities.includes(id)}
                          icon={<CapabilityIcon capability={id} />}
                          key={id}
                          onClick={() =>
                            setPendingActivities((ids) =>
                              ids.includes(id)
                                ? ids.filter((candidate) => candidate !== id)
                                : [...ids, id],
                            )
                          }
                        >
                            {t(`ui.library.capabilityLabels.${id}`)}
                            <small>
                              {suggestedActivities.has(id) &&
                                `${t("ui.library.suggestedActivity")} · `}
                              <span className={styles.linkedCount}>{t("ui.library.activityMatchCount", {
                                count: ACTIVITY_QUEST_COUNTS[id],
                              })}</span>
                            </small>
                        </SelectionRow>
                      ))
                    : questGroups.filter(group => group.quests.length > 0).map(group => <section key={group.key} className={styles.questGroup} aria-label={t(`ui.library.${group.key}`)}>
                      <div className={styles.sectionHeading}><h3>{t(`ui.library.${group.key}`)}</h3><span className={styles.mappingCount}>{group.quests.length}</span></div>
                      {group.quests.map((q) => (
                        <SelectionRow
                          key={q.id}
                          selected={reviewedEnabled.has(q.id)}
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
                            {q.name}
                            <small>{q.objective}</small>
                            {mappingCopy(q)}
                        </SelectionRow>
                      ))}
                    </section>)}
                </div>
                {page === "activities" &&
                  !activities.length &&
                  !genres.length && (
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
                    variant="secondary"
                    onClick={() => setPendingOverrides({})}
                  >
                    {t("ui.library.resetMatches")}
                  </SolidButton>
                )}
              </div>
            </>
          )}
        </FlowFrame>
      </div>
    );
  };
  return presentation === "drawer" ? (
    renderPage("appearance")
  ) : (
    <AnimatePresence mode="wait" initial={false}>
      <LibraryStep key={page === "appearance" ? "appearance" : "activities"}>
        {renderPage(page)}
      </LibraryStep>
    </AnimatePresence>
  );
}
