import { useMemo, useRef, useState } from "react";
import { BookOpenIcon, ShuffleIcon, WifiHighIcon, PlugsIcon, UserIcon, UsersIcon, UsersThreeIcon, GameControllerIcon, HandshakeIcon, TimerIcon, SpeedometerIcon, LightbulbIcon, TargetIcon, FlaskIcon, PaintBrushIcon, TrophyIcon } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";
import { Drawer } from "vaul";
import { useShallow } from "zustand/react/shallow";
import { GAME_GENRES } from "../../../../data/gameGenres";
import { QUEST_TYPES } from "../../../../data/questTraits";
import { QUEST_CORES } from "../../../../data/quests";
import { QUEST_CONNECTION_MODES } from "../../../../data/questPoolTraits";
import { QUEST_ORIGINS, QUEST_PEOPLE, QUEST_PARTICIPATION, QUEST_FORMATIONS } from "../../../../data/questContexts";
import { useQuestStore } from "../../../../stores/useQuestStore";
import { useLibraryStore } from "../../../../stores/useLibraryStore";
import { libraryGamesFromState } from "../../../../domain/library/rules";
import { POOL_OPTIONS, defaultPoolPreferences, invalidPoolGroups, matchesPoolPreferences, type PoolGroup } from "../../../../domain/quest/pool";
import { preparePoolPreview, questGamesForSelection } from "../../../../domain/quest/rules";
import type { QuestPoolPreferences } from "../../../../domain/quest/model";
import { normalizeLanguage } from "../../../../localization/i18n";
import { SettingToggle } from "../../../../shared/ui/SettingToggle/SettingToggle";
import { SelectionRow } from "../../../../shared/ui/SelectionRow/SelectionRow";
import { CountBadge } from "../../../../shared/ui/CountBadge/CountBadge";
import { FilterAccordion } from "../../../../shared/ui/FilterAccordion/FilterAccordion";
import { GameGenreIcon } from "../../../../shared/ui/Icons/GameGenreIcon";
import type { GameGenreId } from "../../../../data/gameGenres";
import { InfoLabel } from "../../../../shared/ui/InfoLabel/InfoLabel";
import { SolidButton } from "../../../../shared/ui/SolidButton/SolidButton";
import { FlowFrame } from "../../../../shared/ui/FlowFrame/FlowFrame";
import { LibraryStep } from "../../../library/components/LibraryStep";
import { LibraryDrawerFrame } from "../../../library/components/LibraryDrawerFrame/LibraryDrawerFrame";
import styles from "./QuestPoolSettings.module.css";

const GROUP_LABELS: Record<PoolGroup, string> = {
  originIds: "questSource", genreIds: "genres", typeIds: "types", connectionModeIds: "connectionModes",
  peopleIds: "people", participationIds: "participation", formationIds: "formation",
};
// Option counts describe the full catalog, independently of the user's draft,
// mood, library selection, and exclusions. The footer retains the live total.
const OPTION_COUNTS = Object.fromEntries(Object.entries(POOL_OPTIONS).map(([group, ids]) => [
  group,
  Object.fromEntries(ids.map(id => {
    const preferences = { ...defaultPoolPreferences(), [group]: [id] };
    return [id, QUEST_CORES.filter(quest => matchesPoolPreferences(quest, preferences)).length];
  })),
]));
function optionIcon(group: PoolGroup, id: string) {
  if (group === "genreIds") return <GameGenreIcon genre={id as GameGenreId} />;
  const icons = {
    curated: BookOpenIcon, flexible: ShuffleIcon, online: WifiHighIcon, offline: PlugsIcon,
    alone: UserIcon, others: UsersIcon, solo: GameControllerIcon, "co-op": HandshakeIcon,
    none: UserIcon, squad: UsersThreeIcon, team: UsersIcon,
    countdown: TimerIcon, speedrun: SpeedometerIcon, inspiration: LightbulbIcon,
    objective: TargetIcon, experiment: FlaskIcon, creation: PaintBrushIcon, challenge: TrophyIcon,
  };
  const Icon = icons[id as keyof typeof icons];
  return <Icon weight="bold" aria-hidden />;
}
export function QuestPoolSettings() {
  const { t, i18n } = useTranslation();
  const language = normalizeLanguage(i18n.resolvedLanguage ?? i18n.language);
  const overviewScroll = useRef(0);
  const overviewScrollRef = useRef<HTMLDivElement>(null);
  const preferences = useQuestStore((state) => state.poolPreferences);
  const save = useQuestStore((state) => state.savePoolPreferences);
  const moodId = useQuestStore((state) => state.selectedMoodId);
  const selection = useQuestStore((state) => state.gameSelection);
  const bannedIds = useQuestStore((state) => state.blacklistedQuestIds);
  const library = useLibraryStore(useShallow(({ selectedCuratedGameIds, curatedGamePreferences, customGames }) => ({ selectedCuratedGameIds, curatedGamePreferences, customGames })));
  const [draft, setDraft] = useState<QuestPoolPreferences>(() => structuredClone(preferences));
  const games = useMemo(() => {
    const all = libraryGamesFromState(library);
    return selection ? questGamesForSelection(selection, all) : all;
  }, [library, selection]);
  const banned = useMemo(() => new Set(bannedIds), [bannedIds]);
  const count = useMemo(() => preparePoolPreview(games, moodId, banned, Boolean(selection)), [games, moodId, banned, selection]);
  const totals = useMemo(() => count(draft), [count, draft]);
  const invalid = invalidPoolGroups(draft);
  const defaults = defaultPoolPreferences();
  function change(group: PoolGroup, ids: string[]) {
    setDraft((current) => ({
      ...current, [group]: ids,
      allGroups: ids.length === POOL_OPTIONS[group].length ? [...new Set([...current.allGroups, group])] : current.allGroups.filter((id) => id !== group),
      ...(group === "peopleIds" || group === "participationIds" || group === "formationIds" ? { legacyStyleIds: undefined } : {}),
    }));
  }
  function label(group: PoolGroup, id: string) {
    switch (group) {
      case "originIds": return QUEST_ORIGINS[id as keyof typeof QUEST_ORIGINS][language];
      case "genreIds": return GAME_GENRES[id as keyof typeof GAME_GENRES].title[language];
      case "typeIds": return QUEST_TYPES[id as keyof typeof QUEST_TYPES].title[language];
      case "connectionModeIds": return QUEST_CONNECTION_MODES[id as keyof typeof QUEST_CONNECTION_MODES][language];
      case "peopleIds": return QUEST_PEOPLE[id as keyof typeof QUEST_PEOPLE][language];
      case "participationIds": return QUEST_PARTICIPATION[id as keyof typeof QUEST_PARTICIPATION][language];
      case "formationIds": return QUEST_FORMATIONS[id as keyof typeof QUEST_FORMATIONS][language];
    }
  }
  function choices(group: PoolGroup) {
    return <div className={styles.choices}>
      {POOL_OPTIONS[group].map((id) => {
        const selected = (draft[group] as string[]).includes(id);
        return <SelectionRow
          key={id} selected={selected} icon={optionIcon(group, id)}
          count={<span aria-label={t("ui.library.questCount", { count: OPTION_COUNTS[group][id] })}>{OPTION_COUNTS[group][id]}</span>}
          onClick={() => change(group, selected ? (draft[group] as string[]).filter((value) => value !== id) : [...draft[group], id])}
        >
          {label(group, id)}{group === "typeIds" && <small>{t(`ui.pool.typeDescription.${id}`)}</small>}
        </SelectionRow>;
      })}
    </div>;
  }
  function groupContent(group: PoolGroup) {
    const title = t(`ui.pool.${GROUP_LABELS[group]}`);
    const hint = group === "genreIds" || group === "connectionModeIds" ? undefined
      : t(`ui.pool.${({ typeIds: "typeHint", peopleIds: "peopleHint", participationIds: "participationHint", formationIds: "formationHint", originIds: "sourceHint" } as const)[group]}`);
    const validation = invalid.includes(group) && <p className={styles.validation} role="alert">{t("ui.pool.required", { group: title })}</p>;
    if (group === "genreIds" || group === "typeIds") return <FilterAccordion
      title={title} hint={hint} summary={`${draft[group].length} / ${POOL_OPTIONS[group].length}`}
      forceOpen={invalid.includes(group)}
    ><div className={styles.selectAll}><span>{t("ui.pool.selectAll")}</span>
        <SettingToggle checked={draft[group].length === POOL_OPTIONS[group].length}
          label={`${t("ui.pool.selectAll")}: ${title}`}
          onChange={(checked) => change(group, checked ? [...POOL_OPTIONS[group]] : [])} />
      </div>
      {choices(group)}{validation}</FilterAccordion>;
    return <><div className={styles.groupHeader}><InfoLabel label={title} hint={hint} /></div>{choices(group)}{validation}</>;
  }
  return <LibraryDrawerFrame title={t("ui.pool.title")}><LibraryStep><FlowFrame
    titleInContent title={t("ui.pool.description")}
    initialScrollTop={overviewScroll.current} scrollElementRef={overviewScrollRef}
    footer={<><Drawer.Close asChild><SolidButton size="large" variant="highlighted" disabled={invalid.length > 0} onClick={() => save(draft)}>{t("ui.pool.save")}<CountBadge label={t("ui.library.questCount", { count: totals.quests })} /></SolidButton></Drawer.Close><Drawer.Close asChild><SolidButton size="large" variant="ghost">{t("ui.pool.cancel")}</SolidButton></Drawer.Close></>}
  ><div className={styles.fields}>
    {draft.legacyStyleIds && <p className={styles.hint}>{t("ui.pool.legacyContext")}</p>}
    {!totals.quests && !invalid.length && <p className={styles.hint} role="status">{t("ui.pool.zeroHelp")}</p>}
    {(["originIds", "genreIds", "connectionModeIds", "peopleIds", "participationIds", "formationIds", "typeIds"] as PoolGroup[]).map((group) => <section key={group} className={styles.group} aria-label={t(`ui.pool.${GROUP_LABELS[group]}`)}>
      {groupContent(group)}
    </section>)}
    <SolidButton size="medium" variant="soft" onClick={() => setDraft(defaults)}>{t("ui.pool.reset")}</SolidButton>
  </div></FlowFrame></LibraryStep></LibraryDrawerFrame>;
}
