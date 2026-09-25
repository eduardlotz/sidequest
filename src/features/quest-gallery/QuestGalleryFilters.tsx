import { useEffect, useState, type ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { Drawer } from "vaul";
import { FunnelIcon } from "@phosphor-icons/react";
import { MOODS, type MoodId } from "../../data/moods";
import { GAME_GENRES, GAME_GENRE_IDS, type GameGenreId } from "../../data/gameGenres";
import { QUEST_TAGS, QUEST_TYPES, type QuestTagId, type QuestTypeId } from "../../data/questTraits";
import {
  QUEST_CONNECTION_MODES,
  QUEST_CONNECTION_MODE_IDS,
  QUEST_PLAY_STYLES,
  QUEST_PLAY_STYLE_IDS,
} from "../../data/questPoolTraits";
import { localizeMood } from "../../localization/catalog";
import { normalizeLanguage } from "../../localization/i18n";
import { LibraryDrawerFrame } from "../library/components/LibraryDrawerFrame/LibraryDrawerFrame";
import { LibraryStep } from "../library/components/LibraryStep";
import { FlowFrame } from "../../shared/ui/FlowFrame/FlowFrame";
import { InfoLabel } from "../../shared/ui/InfoLabel/InfoLabel";
import {
  ResponsiveDrawer,
  ResponsiveDrawerContainer,
} from "../../shared/ui/ResponsiveDrawer/ResponsiveDrawer";
import { SolidButton } from "../../shared/ui/SolidButton/SolidButton";
import type { GalleryFilter, QuestGalleryView } from "./QuestGallery";
import styles from "./QuestGalleryFilters.module.css";

export type GalleryGameOption = { id: string; name: string };

const TAG_IDS = Object.keys(QUEST_TAGS) as QuestTagId[];
const TYPE_IDS = Object.keys(QUEST_TYPES) as QuestTypeId[];
const STATUS_FILTERS: readonly GalleryFilter[] = [
  "all",
  "found",
  "favorites",
  "completed",
  "uncompleted",
];

export function QuestGalleryFilters({
  games,
  view,
  onApply,
}: {
  games: readonly GalleryGameOption[];
  view: QuestGalleryView;
  onApply: (filters: Omit<QuestGalleryView, "query" | "focusedId">) => void;
}) {
  const { i18n, t } = useTranslation();
  const language = normalizeLanguage(i18n.resolvedLanguage ?? i18n.language);
  const [mobileContainer, setMobileContainer] =
    useState<HTMLDivElement | null>(null);
  const [draft, setDraft] = useState(() => filterDraft(view));

  useEffect(() => setDraft(filterDraft(view)), [view]);

  const activeCount =
    Number(view.filter !== "all") +
    view.moodIds.length +
    view.genreIds.length +
    view.connectionModeIds.length +
    view.playStyleIds.length +
    view.typeIds.length +
    view.tagIds.length +
    Number(Boolean(view.gameId));

  function clear() {
    setDraft({
      filter: "all",
      moodIds: [],
      genreIds: [],
      connectionModeIds: [],
      playStyleIds: [],
      typeIds: [],
      gameId: null,
      tagIds: [],
    });
  }

  return (
    <>
      <ResponsiveDrawer
        desktopDirection="right"
        mobileContainer={mobileContainer}
        variant="profile"
        trigger={
          <SolidButton
            className={styles.trigger}
            size="medium"
            type="button"
            variant="secondary"
            iconLeft={<FunnelIcon weight="bold" />}
            onClick={() => setDraft(filterDraft(view))}
          >
            {t("ui.gallery.filters")}
            {activeCount > 0 ? (
              <span className={styles.count}>{activeCount}</span>
            ) : null}
          </SolidButton>
        }
      >
        <LibraryDrawerFrame title={t("ui.gallery.filtersTitle")}>
          <LibraryStep>
            <FlowFrame
              titleInContent
              title={t("ui.gallery.filtersDescription")}
              footer={
                <>
                  <Drawer.Close asChild>
                    <SolidButton
                      size="large"
                      variant="highlighted"
                      onClick={() => onApply(draft)}
                    >
                      {t("ui.gallery.applyFilters")}
                    </SolidButton>
                  </Drawer.Close>
                  <SolidButton size="large" variant="ghost" onClick={clear}>
                    {t("ui.gallery.clearFilters")}
                  </SolidButton>
                </>
              }
            >
              <div className={styles.groups}>
              <FilterGroup title={t("ui.gallery.statusFilter")}>
                {STATUS_FILTERS.map((filter) => (
                  <FilterChoice
                    key={filter}
                    active={draft.filter === filter}
                    label={t(`ui.gallery.${filter}`)}
                    onClick={() => setDraft((current) => ({ ...current, filter }))}
                  />
                ))}
              </FilterGroup>

              <FilterGroup title={t("ui.gallery.moodFilter")}>
                {MOODS.map((mood) => {
                  const localized = localizeMood(mood.id, language);
                  return (
                    <FilterChoice
                      key={mood.id}
                      active={draft.moodIds.includes(mood.id)}
                      label={localized?.title ?? mood.id}
                      onClick={() =>
                        setDraft((current) => ({
                          ...current,
                          moodIds: toggle(current.moodIds, mood.id),
                        }))
                      }
                    />
                  );
                })}
              </FilterGroup>

              <FilterGroup title={t("ui.gallery.genreFilter")}>
                {GAME_GENRE_IDS.map((genreId) => (
                  <FilterChoice
                    key={genreId}
                    active={draft.genreIds.includes(genreId)}
                    label={GAME_GENRES[genreId].title[language]}
                    onClick={() =>
                      setDraft((current) => ({
                        ...current,
                        genreIds: toggle(current.genreIds, genreId),
                      }))
                    }
                  />
                ))}
              </FilterGroup>

              <FilterGroup title={t("ui.gallery.connectionModeFilter")}>
                {QUEST_CONNECTION_MODE_IDS.map((modeId) => (
                  <FilterChoice
                    key={modeId}
                    active={draft.connectionModeIds.includes(modeId)}
                    label={QUEST_CONNECTION_MODES[modeId][language]}
                    onClick={() =>
                      setDraft((current) => ({
                        ...current,
                        connectionModeIds: toggle(current.connectionModeIds, modeId),
                      }))
                    }
                  />
                ))}
              </FilterGroup>

              <FilterGroup title={t("ui.gallery.playStyleFilter")}>
                {QUEST_PLAY_STYLE_IDS.map((styleId) => (
                  <FilterChoice
                    key={styleId}
                    active={draft.playStyleIds.includes(styleId)}
                    label={QUEST_PLAY_STYLES[styleId][language]}
                    onClick={() =>
                      setDraft((current) => ({
                        ...current,
                        playStyleIds: toggle(
                          current.playStyleIds,
                          styleId,
                        ),
                      }))
                    }
                  />
                ))}
              </FilterGroup>

              <FilterGroup title={t("ui.gallery.typeFilter")}>
                {TYPE_IDS.map((typeId) => (
                  <FilterChoice
                    key={typeId}
                    active={draft.typeIds.includes(typeId)}
                    label={QUEST_TYPES[typeId].title[language]}
                    onClick={() =>
                      setDraft((current) => ({
                        ...current,
                        typeIds: toggle(current.typeIds, typeId),
                      }))
                    }
                  />
                ))}
              </FilterGroup>

              {games.length > 0 ? (
                <FilterGroup title={t("ui.gallery.gameFilter")}>
                  <FilterChoice
                    active={draft.gameId === null}
                    label={t("ui.gallery.anyGameFilter")}
                    onClick={() =>
                      setDraft((current) => ({ ...current, gameId: null }))
                    }
                  />
                  {games.map((game) => (
                    <FilterChoice
                      key={game.id}
                      active={draft.gameId === game.id}
                      label={game.name}
                      onClick={() =>
                        setDraft((current) => ({
                          ...current,
                          gameId: current.gameId === game.id ? null : game.id,
                        }))
                      }
                    />
                  ))}
                </FilterGroup>
              ) : null}

              <FilterGroup title={t("ui.gallery.tagFilter")}>
                {TAG_IDS.map((tagId) => (
                  <FilterChoice
                    key={tagId}
                    active={draft.tagIds.includes(tagId)}
                    label={QUEST_TAGS[tagId][language]}
                    onClick={() =>
                      setDraft((current) => ({
                        ...current,
                        tagIds: toggle(current.tagIds, tagId),
                      }))
                    }
                  />
                ))}
              </FilterGroup>
              </div>
            </FlowFrame>
          </LibraryStep>
        </LibraryDrawerFrame>
      </ResponsiveDrawer>
      <ResponsiveDrawerContainer setContainer={setMobileContainer} />
    </>
  );
}

function filterDraft(view: QuestGalleryView) {
  return {
    filter: view.filter,
    moodIds: [...view.moodIds],
    genreIds: [...view.genreIds],
    connectionModeIds: [...view.connectionModeIds],
    playStyleIds: [...view.playStyleIds],
    typeIds: [...view.typeIds],
    gameId: view.gameId,
    tagIds: [...view.tagIds],
  };
}

function toggle<T>(values: readonly T[], value: T): T[] {
  return values.includes(value)
    ? values.filter((candidate) => candidate !== value)
    : [...values, value];
}

function FilterGroup({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  return (
    <section className={styles.group} aria-label={title}>
      <InfoLabel label={title} />
      <div className={styles.choices}>{children}</div>
    </section>
  );
}

function FilterChoice({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <SolidButton
      size="medium"
      type="button"
      variant={active ? "primary" : "soft"}
      aria-pressed={active}
      onClick={onClick}
    >
      {label}
    </SolidButton>
  );
}
