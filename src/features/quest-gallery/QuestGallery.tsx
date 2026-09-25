import {
  animate,
  AnimatePresence,
  motion,
  useIsPresent,
  useMotionValue,
  useMotionValueEvent,
  useSpring,
  useTransform,
  useVelocity,
  type MotionValue,
} from "motion/react";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import { useTranslation } from "react-i18next";
import { useShallow } from "zustand/react/shallow";
import { Drawer } from "vaul";
import { HeartIcon, MagnifyingGlassIcon } from "@phosphor-icons/react";
import { QUESTS } from "../../data/quests";
import type { MoodId } from "../../data/moods";
import type { GameGenreId } from "../../data/gameGenres";
import type { QuestTagId, QuestTypeId } from "../../data/questTraits";
import type { QuestConnectionModeId, QuestPlayStyleId } from "../../data/questPoolTraits";
import { CURATED_GAMES_BY_ID } from "../../data/games";
import { getMoodAccentStyle } from "../../data/questColors";
import { hydrateQuest } from "../../localization/catalog";
import { normalizeLanguage } from "../../localization/i18n";
import { formatRunningDuration } from "../../lib/format";
import type { Quest, QuestProgress } from "../../domain/quest/model";
import { questOfferId } from "../../domain/quest/rules";
import {
  CARD_LAYOUT_TRANSITION,
  CARD_RETURN_LAYOUT_TRANSITION,
  CARD_RETURN_TRANSITION,
  questCardLayoutId,
  type CardReturnPose,
} from "../../lib/cardMotion";
import { SELECTION_HANDOFF_EASE } from "../../shared/motion/transitions";
import { playSound } from "../../lib/sound";
import { useQuestStore } from "../../stores/useQuestStore";
import {
  DESKTOP_VIEWPORT_QUERY,
  useMediaQuery,
} from "../../shared/hooks/useMediaQuery";
import { InteractiveQuestCard } from "../../shared/quest-card/InteractiveQuestCard/InteractiveQuestCard";
import { QuestCard } from "../../shared/quest-card/QuestCard/QuestCard";
import cardStyles from "../../shared/quest-card/QuestCard/QuestCard.module.css";
import { SolidButton } from "../../shared/ui/SolidButton/SolidButton";
import buttonStyles from "../../shared/ui/SolidButton/SolidButton.module.css";
import { InfoText } from "../../shared/ui/InfoText/InfoText";
import { ChevronLeftIcon, CoinIcon } from "../../shared/ui/Icons/Icons";
import { visuallyHiddenClassName } from "../../shared/ui/VisuallyHidden/VisuallyHidden";
import {
  QuestGalleryFilters,
  type GalleryGameOption,
} from "./QuestGalleryFilters";
import styles from "./QuestGallery.module.css";
import unknownIllustration from "./assets/unknown-quest.svg";
import unfinishedIllustration from "./assets/unfinished-quest.svg";
import unknownStatusIcon from "./assets/unknown-status.svg";
import unfinishedStatusIcon from "./assets/unfinished-status.svg";

const GALLERY_FILTERS = [
  "all",
  "found",
  "favorites",
  "completed",
  "uncompleted",
] as const;
export type GalleryFilter = (typeof GALLERY_FILTERS)[number];
export type QuestGalleryView = {
  filter: GalleryFilter;
  query: string;
  focusedId: string | null;
  moodIds: MoodId[];
  genreIds: GameGenreId[];
  connectionModeIds: QuestConnectionModeId[];
  playStyleIds: QuestPlayStyleId[];
  typeIds: QuestTypeId[];
  gameId: string | null;
  tagIds: QuestTagId[];
};
const INFO_SNAP_POINTS = [0.24, 0.55, 1];
const INFO_DEFAULT_SNAP_POINT = INFO_SNAP_POINTS[0];
const DRAG_SLOP = 8;
const FOCUS_SWIPE_DISTANCE = 64;
const FOCUS_SWIPE_VELOCITY = 0.45;
const WHEEL_SPEED = 1.35;
const MOMENTUM_PROJECTION_MS = 240;
const RENDER_CHUNK_SIZE = 3;
const RENDER_OVERSCAN = 2;

type FilterReset = { sequence: number };

export function QuestGallery({
  view,
  onViewChange,
  position,
  layoutSessionId,
  returnPose,
  returningQuestId,
  returning,
  reduceMotion,
  onClose,
  onSelectionStart,
  onRepeat,
}: {
  view: QuestGalleryView;
  onViewChange: Dispatch<SetStateAction<QuestGalleryView>>;
  position: MotionValue<number>;
  layoutSessionId: string;
  returnPose?: CardReturnPose;
  returningQuestId?: string;
  returning: boolean;
  reduceMotion: boolean;
  onClose: () => void;
  onSelectionStart: (rotation: number) => void;
  onRepeat: (questId: string) => boolean;
}) {
  const { t, i18n } = useTranslation();
  const language = normalizeLanguage(i18n.resolvedLanguage ?? i18n.language);
  const desktop = useMediaQuery(DESKTOP_VIEWPORT_QUERY);
  const isPresent = useIsPresent();
  const { progress, counts, toggleFavorite, currentSession } = useQuestStore(
    useShallow((state) => ({
      progress: state.questProgressById,
      counts: state.stats.completionCountsByQuestId,
      toggleFavorite: state.toggleQuestFavorite,
      currentSession: state.currentSession,
    })),
  );
  const { filter, query, focusedId } = view;
  const setFocusedId = useCallback(
    (update: SetStateAction<string | null>) =>
      onViewChange((view) => ({
        ...view,
        focusedId:
          typeof update === "function" ? update(view.focusedId) : update,
      })),
    [onViewChange],
  );
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectionFrameRef = useRef<number | null>(null);
  const [filterReset, setFilterReset] = useState<FilterReset>({ sequence: 0 });
  const [width, setWidth] = useState(() => window.innerWidth);
  const viewport = useRef<HTMLDivElement>(null);

  const drag = useRef<{
    id: number;
    x: number;
    y: number;
    position: number;
    lastX: number;
    lastAt: number;
    velocityX: number;
    moved: boolean;
    axis: "x" | "y" | null;
    dismissing: boolean;
  } | null>(null);

  const suppressClick = useRef(false);
  const dismissX = useMotionValue(0);
  const dismissY = useMotionValue(0);
  const dismissAnimations = useRef<ReturnType<typeof animate>[]>([]);
  const positionAnimation = useRef<ReturnType<typeof animate> | null>(null);
  const filtering = useMotionValue(false);
  const filterFrameRef = useRef<number | null>(null);
  const wheelMomentumRef = useRef<{
    lastAt: number;
    velocity: number;
    timeout: number | null;
  }>({ lastAt: 0, velocity: 0, timeout: null });
  const [snapPoint, setSnapPoint] = useState<number | string | null>(
    INFO_DEFAULT_SNAP_POINT,
  );

  const stopDismissAnimation = useCallback(() => {
    dismissAnimations.current.forEach((controls) => controls.stop());
    dismissAnimations.current = [];
  }, []);

  const stopPositionAnimation = useCallback(() => {
    positionAnimation.current?.stop();
    positionAnimation.current = null;
  }, []);

  const resetDismissOffset = useCallback(() => {
    stopDismissAnimation();

    if (reduceMotion) {
      dismissX.jump(0);
      dismissY.jump(0);
      return;
    }

    const transition = {
      type: "spring" as const,
      stiffness: 520,
      damping: 38,
      mass: 0.55,
    };

    dismissAnimations.current = [
      animate(dismissX, 0, transition),
      animate(dismissY, 0, transition),
    ];
  }, [dismissX, dismissY, reduceMotion, stopDismissAnimation]);

  const stopFilterScroll = useCallback(() => {
    if (filterFrameRef.current !== null) {
      window.cancelAnimationFrame(filterFrameRef.current);
      filterFrameRef.current = null;
    }

    filtering.set(false);
  }, [filtering]);

  const normalizedQuery = query.trim().toLocaleLowerCase(language);

  const catalog = useMemo(
    () =>
      QUESTS.flatMap((definition) => {
        const known = progress[definition.id];
        const identity = known?.lastCompletion ?? known?.seenOffer;

        const quest = hydrateQuest(
          definition.id,
          identity?.moodId ?? definition.moodIds[0],
          identity?.game ?? null,
          language,
        );

        return quest ? [quest] : [];
      }),
    [language, progress],
  );
  const items = useMemo(
    () =>
      catalog.filter((quest) => {
        const known = progress[quest.id];
        const completed = (counts[quest.id] ?? 0) > 0;
        const genres = quest.gameGenreIds;
        if (
          (filter === "found" && !known) ||
          (filter === "favorites" && !known?.favorite) ||
          (filter === "completed" && !completed) ||
          (filter === "uncompleted" && completed) ||
          (view.moodIds.length > 0 &&
            !quest.moodIds.some((id) => view.moodIds.includes(id))) ||
          (view.genreIds.length > 0 &&
            genres.length > 0 &&
            !genres.some((id) => view.genreIds.includes(id))) ||
          (view.connectionModeIds.length > 0 &&
            !quest.connectionModeIds.some((id) => view.connectionModeIds.includes(id))) ||
          (view.playStyleIds.length > 0 &&
            !quest.playStyleIds.some((id) =>
              view.playStyleIds.includes(id),
            )) ||
          (view.gameId !== null &&
            (quest.game?.id ?? quest.curated?.gameId) !== view.gameId) ||
          (view.typeIds.length > 0 && !view.typeIds.includes(quest.type)) ||
          (view.tagIds.length > 0 &&
            !quest.tags.some((id) => view.tagIds.includes(id)))
        )
          return false;
        return (
          !normalizedQuery ||
          Boolean(
            known &&
            `${quest.name} ${quest.objective}`
              .toLocaleLowerCase(language)
              .includes(normalizedQuery),
          )
        );
      }),
    [catalog, counts, filter, language, normalizedQuery, progress, view],
  );

  const gameOptions = useMemo<GalleryGameOption[]>(() => {
    const games = new Map<string, GalleryGameOption>();
    for (const quest of catalog) {
      if (quest.game) {
        games.set(quest.game.id, quest.game);
      } else if (quest.curated) {
        const game = CURATED_GAMES_BY_ID[quest.curated.gameId];
        if (game) games.set(game.id, { id: game.id, name: game.name });
      }
    }
    return [...games.values()].sort((a, b) =>
      a.name.localeCompare(b.name, language),
    );
  }, [catalog, language]);

  const cardWidth = Math.min(desktop ? 300 : width * 0.76, 300);
  const step = cardWidth * 0.76;
  const maxPosition = Math.max(
    0,
    (items.length - 1) * step + cardWidth + 64 - width,
  );
  const focusedIndex = items.findIndex((item) => item.id === focusedId);
  const focusedQuest = items[focusedIndex];
  const [browseChunk, setBrowseChunk] = useState(() =>
    Math.floor(position.get() / step / RENDER_CHUNK_SIZE),
  );
  useMotionValueEvent(position, "change", (latest) => {
    const chunk = Math.floor(latest / step / RENDER_CHUNK_SIZE);
    setBrowseChunk((current) => (current === chunk ? current : chunk));
  });
  const firstRenderedIndex = Math.max(
    0,
    focusedIndex >= 0
      ? focusedIndex - RENDER_OVERSCAN
      : browseChunk * RENDER_CHUNK_SIZE - RENDER_OVERSCAN,
  );
  const lastRenderedIndex =
    focusedIndex >= 0
      ? focusedIndex + RENDER_OVERSCAN
      : (browseChunk + 1) * RENDER_CHUNK_SIZE +
        Math.ceil(width / step) +
        RENDER_OVERSCAN;
  const renderedItems = items
    .slice(firstRenderedIndex, lastRenderedIndex + 1)
    .map((quest, offset) => ({
      quest,
      index: firstRenderedIndex + offset,
    }));

  function changeFilters(update: Partial<Omit<QuestGalleryView, "focusedId">>) {
    stopFilterScroll();
    stopPositionAnimation();
    filtering.set(true);
    resetDismissOffset();

    setFilterReset((reset) => ({ sequence: reset.sequence + 1 }));
    setBrowseChunk(0);
    onViewChange((view) => ({ ...view, ...update, focusedId: null }));
  }

  function setQuery(nextQuery: string) {
    changeFilters({ query: nextQuery });
  }

  function applyFilters(
    filters: Omit<QuestGalleryView, "query" | "focusedId">,
  ) {
    changeFilters(filters);
  }

  const clampPosition = useCallback(
    (value: number) => Math.max(0, Math.min(maxPosition, value)),
    [maxPosition],
  );

  const continueWithMomentum = useCallback(
    (velocityPxPerMs: number) => {
      stopPositionAnimation();
      const target = clampPosition(
        position.get() + velocityPxPerMs * MOMENTUM_PROJECTION_MS,
      );
      if (reduceMotion) {
        position.jump(target);
        return;
      }
      positionAnimation.current = animate(position, target, {
        type: "spring",
        stiffness: 170,
        damping: 25,
        mass: 0.82,
        restDelta: 0.5,
        restSpeed: 4,
        onComplete: () => {
          positionAnimation.current = null;
        },
      });
    },
    [clampPosition, position, reduceMotion, stopPositionAnimation],
  );

  useLayoutEffect(() => {
    if (filterReset.sequence === 0) return;

    position.jump(0);
    filterFrameRef.current = window.requestAnimationFrame(() => {
      filterFrameRef.current = null;
      filtering.set(false);
    });

    return () => {
      if (filterFrameRef.current !== null) {
        window.cancelAnimationFrame(filterFrameRef.current);
        filterFrameRef.current = null;
      }
    };
  }, [filterReset.sequence, filtering, position]);

  useEffect(
    () => () => {
      if (selectionFrameRef.current !== null) {
        window.cancelAnimationFrame(selectionFrameRef.current);
      }
      if (filterFrameRef.current !== null) {
        window.cancelAnimationFrame(filterFrameRef.current);
      }
      if (wheelMomentumRef.current.timeout !== null) {
        window.clearTimeout(wheelMomentumRef.current.timeout);
      }
      dismissAnimations.current.forEach((controls) => controls.stop());
      positionAnimation.current?.stop();
    },
    [],
  );

  useLayoutEffect(() => {
    const element = viewport.current;
    if (!element) return;
    const observer = new ResizeObserver(([entry]) =>
      setWidth(entry.contentRect.width),
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useLayoutEffect(() => {
    position.set(Math.min(position.get(), maxPosition));
    setBrowseChunk(Math.floor(position.get() / step / RENDER_CHUNK_SIZE));
  }, [maxPosition, position, step]);

  useEffect(() => {
    const element = viewport.current;
    if (!element) return;

    const wheel = (event: WheelEvent) => {
      if (event.ctrlKey || !isPresent || returning || selectedId || focusedId)
        return;

      event.preventDefault();

      const delta =
        Math.abs(event.deltaX) > Math.abs(event.deltaY)
          ? event.deltaX
          : event.deltaY;

      const pixels =
        delta *
        (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? width : 1);
      const now = performance.now();
      const elapsed = Math.max(8, now - wheelMomentumRef.current.lastAt);
      const movement = pixels * WHEEL_SPEED;
      stopPositionAnimation();
      position.set(clampPosition(position.get() + movement));
      wheelMomentumRef.current.lastAt = now;
      wheelMomentumRef.current.velocity = movement / elapsed;
      if (wheelMomentumRef.current.timeout !== null) {
        window.clearTimeout(wheelMomentumRef.current.timeout);
      }
      wheelMomentumRef.current.timeout = window.setTimeout(() => {
        wheelMomentumRef.current.timeout = null;
        continueWithMomentum(wheelMomentumRef.current.velocity);
      }, 72);
    };

    element.addEventListener("wheel", wheel, { passive: false });

    return () => element.removeEventListener("wheel", wheel);
  }, [
    focusedId,
    isPresent,
    clampPosition,
    continueWithMomentum,
    position,
    returning,
    selectedId,
    stopPositionAnimation,
    width,
  ]);

  useEffect(() => {
    if (focusedId && focusedIndex < 0) setFocusedId(null);
  }, [focusedId, focusedIndex]);

  useEffect(() => {
    if (focusedId) setSnapPoint(INFO_DEFAULT_SNAP_POINT);
  }, [focusedId]);

  useEffect(() => {
    if (isPresent) return;
    setFocusedId(null);
    stopPositionAnimation();
  }, [isPresent, setFocusedId, stopPositionAnimation]);

  useEffect(() => {
    if (!focusedId || !isPresent || returning || selectedId) return;
    const dismissOutside = (event: MouseEvent) => {
      if (suppressClick.current) return;
      const target = event.target instanceof Element ? event.target : null;
      if (target?.closest("[data-gallery-card], [data-gallery-details]"))
        return;
      setFocusedId(null);
    };
    document.addEventListener("click", dismissOutside);
    return () => document.removeEventListener("click", dismissOutside);
  }, [focusedId, isPresent, returning, selectedId, setFocusedId]);

  const focus = useCallback(
    (id: string) => {
      if (suppressClick.current || !isPresent || returning || selectedId)
        return;
      setFocusedId((current) => (current === id ? current : id));
    },
    [isPresent, returning, selectedId, setFocusedId],
  );

  function repeatFocusedQuest() {
    if (
      !focusedQuest ||
      !isPresent ||
      returning ||
      selectedId ||
      currentSession
    ) {
      return;
    }
    const questId = focusedQuest.id;
    playSound("cardSelect");
    onSelectionStart(-2);
    setSelectedId(questId);
    const reveal = () => {
      if (!onRepeat(questId)) setSelectedId(null);
    };
    if (reduceMotion) {
      reveal();
      return;
    }
    selectionFrameRef.current = window.requestAnimationFrame(() => {
      selectionFrameRef.current = null;
      reveal();
    });
  }

  const info = focusedQuest && (
    <QuestInfo
      quest={focusedQuest}
      progress={progress[focusedQuest.id]}
      count={counts[focusedQuest.id] ?? 0}
      active={Boolean(currentSession)}
      onFavorite={() => toggleFavorite(focusedQuest.id)}
      onRepeat={repeatFocusedQuest}
    />
  );

  return (
    <section
      className={styles.gallery}
      data-selecting={selectedId !== null || undefined}
      inert={!isPresent || returning || selectedId !== null}
    >
      <header className={styles.header}>
        <h1 className={visuallyHiddenClassName}>{t("ui.gallery.title")}</h1>
        <SolidButton
          className={styles.back}
          variant="highlighted"
          size="medium"
          onClick={() => {
            setFocusedId(null);
            onClose();
          }}
          iconLeft={<ChevronLeftIcon />}
        >
          {t("ui.gallery.back")}
        </SolidButton>

        <div className={styles.filters}>
          <label
            className={`${buttonStyles.button} ${styles.search}`}
            data-size="medium"
            data-variant="secondary"
          >
            <MagnifyingGlassIcon aria-hidden weight="bold" />
            <input
              type="search"
              value={query}
              placeholder={t("ui.gallery.search")}
              aria-label={t("ui.gallery.search")}
              onChange={(event) => {
                setQuery(event.target.value);
                setFocusedId(null);
              }}
            />
          </label>
          <QuestGalleryFilters
            games={gameOptions}
            view={view}
            onApply={applyFilters}
          />
        </div>
      </header>
      <div
        className={styles.viewport}
        ref={viewport}
        style={{
          touchAction: "pan-y",
        }}
        tabIndex={0}
        aria-label={t("ui.gallery.browse")}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ")
            suppressClick.current = false;
          if (event.key === "Escape") setFocusedId(null);
          if (
            !focusedId &&
            ["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)
          ) {
            event.preventDefault();
            stopFilterScroll();
            position.set(
              event.key === "Home"
                ? 0
                : event.key === "End"
                  ? maxPosition
                  : Math.max(
                      0,
                      Math.min(
                        maxPosition,
                        position.get() +
                          (event.key === "ArrowLeft" ? -step : step),
                      ),
                    ),
            );
          }
        }}
        onPointerDown={(event) => {
          if (event.button !== 0) return;
          stopFilterScroll();
          stopDismissAnimation();
          stopPositionAnimation();
          if (wheelMomentumRef.current.timeout !== null) {
            window.clearTimeout(wheelMomentumRef.current.timeout);
            wheelMomentumRef.current.timeout = null;
          }

          suppressClick.current = false;

          const target = event.target instanceof Element ? event.target : null;

          const focusedCard = target?.closest('[data-focused="true"]');

          if (focusedId && focusedCard) {
            suppressClick.current = true;
            drag.current = null;

            setFocusedId(null);
            resetDismissOffset();

            return;
          }

          drag.current = {
            id: event.pointerId,
            x: event.clientX,
            y: event.clientY,
            position: position.get(),
            lastX: event.clientX,
            lastAt: performance.now(),
            velocityX: 0,
            moved: false,
            axis: null,
            dismissing: Boolean(focusedId && focusedCard),
          };
        }}
        onPointerMove={(event) => {
          const start = drag.current;
          if (!start || start.id !== event.pointerId) return;

          const dx = event.clientX - start.x;
          const dy = event.clientY - start.y;
          const distance = Math.hypot(dx, dy);
          const now = performance.now();
          const elapsed = Math.max(1, now - start.lastAt);
          start.velocityX = (event.clientX - start.lastX) / elapsed;
          start.lastX = event.clientX;
          start.lastAt = now;

          if (start.dismissing) {
            if (!start.axis && distance >= DRAG_SLOP) {
              start.axis = Math.abs(dx) > Math.abs(dy) ? "x" : "y";
              start.moved = true;
            }
            if (start.axis !== "x") return;

            suppressClick.current = true;

            if (!event.currentTarget.hasPointerCapture(event.pointerId)) {
              event.currentTarget.setPointerCapture(event.pointerId);
            }

            dismissX.set(dx);
            dismissY.set(0);

            return;
          }

          // A focused card is open, but the pointer started somewhere else.
          // Do not steal that gesture from native scrolling / the drawer.
          if (focusedId) return;

          if (!start.axis && distance >= DRAG_SLOP) {
            start.axis = Math.abs(dx) > Math.abs(dy) ? "x" : "y";
            start.moved = true;

            if (start.axis === "x") {
              suppressClick.current = true;
            }
          }

          if (start.axis !== "x") return;

          if (!event.currentTarget.hasPointerCapture(event.pointerId)) {
            event.currentTarget.setPointerCapture(event.pointerId);
          }

          position.set(clampPosition(start.position - dx));
        }}
        onPointerUp={(event) => {
          const start = drag.current;
          drag.current = null;

          if (event.currentTarget.hasPointerCapture(event.pointerId)) {
            event.currentTarget.releasePointerCapture(event.pointerId);
          }

          if (!start) return;

          if (start.dismissing) {
            const dx = dismissX.get();
            if (
              start.axis === "x" &&
              (Math.abs(dx) >= FOCUS_SWIPE_DISTANCE ||
                Math.abs(start.velocityX) >= FOCUS_SWIPE_VELOCITY)
            ) {
              const nextIndex = Math.max(
                0,
                Math.min(items.length - 1, focusedIndex + (dx < 0 ? 1 : -1)),
              );
              setFocusedId(items[nextIndex]?.id ?? null);
            }
            resetDismissOffset();
          } else if (start.axis === "x") {
            continueWithMomentum(-start.velocityX);
          }
        }}
        onPointerCancel={() => {
          drag.current = null;
          suppressClick.current = true;
          resetDismissOffset();
        }}
      >
        <AnimatePresence
          initial={Boolean(returnPose)}
          propagate
          custom={isPresent ? "filter" : "screen"}
        >
          {renderedItems.map(({ quest, index }) => (
            <GalleryCard
              key={quest.id}
              quest={quest}
              layoutSessionId={layoutSessionId}
              selected={selectedId === quest.id}
              selecting={selectedId !== null}
              returnPose={
                questOfferId(
                  quest.mood.id,
                  quest.id,
                  quest.game?.id ?? null,
                ) === returningQuestId
                  ? returnPose
                  : undefined
              }
              returning={returning}
              filtering={filtering}
              index={index}
              position={position}
              dismissY={dismissY}
              dismissX={dismissX}
              width={width}
              cardWidth={cardWidth}
              step={step}
              focusedIndex={focusedIndex}
              desktop={desktop}
              progress={progress[quest.id]}
              completed={(counts[quest.id] ?? 0) > 0}
              reduceMotion={reduceMotion}
              onActivate={() => focus(quest.id)}
            />
          ))}
        </AnimatePresence>
        {!items.length && (
          <div className={styles.empty}>
            <InfoText>{t("ui.gallery.empty")}</InfoText>
          </div>
        )}
      </div>
      {desktop && (
        <AnimatePresence initial={false}>
          {focusedQuest && (
            <motion.aside
              key={focusedQuest.id}
              className={styles.infoPanel}
              initial={{ opacity: 0, x: reduceMotion ? 0 : 16 }}
              animate={{ opacity: selectedId ? 0 : 1, x: 0 }}
              exit={{ opacity: 0, x: reduceMotion ? 0 : 10 }}
              transition={{ duration: reduceMotion ? 0 : 0.2 }}
            >
              {info}
            </motion.aside>
          )}
        </AnimatePresence>
      )}
      {!desktop && isPresent && (
        <Drawer.Root
          open={isPresent && selectedId === null && Boolean(focusedQuest)}
          onOpenChange={(open) => {
            if (!isPresent || selectedId || returning) return;
            if (!open) {
              setFocusedId(null);
              resetDismissOffset();
            }
          }}
          closeThreshold={0.2}
          modal={false}
          snapPoints={INFO_SNAP_POINTS}
          activeSnapPoint={snapPoint}
          setActiveSnapPoint={setSnapPoint}
          snapToSequentialPoint
          shouldScaleBackground={false}
        >
          <Drawer.Portal>
            <Drawer.Content
              className={styles.mobileInfo}
              inert={returning || !isPresent || selectedId !== null}
              aria-describedby="gallery-info-description"
            >
              <Drawer.Handle />
              <Drawer.Title className={visuallyHiddenClassName}>
                {progress[focusedId ?? ""]
                  ? focusedQuest?.name
                  : t("ui.gallery.unknown")}
              </Drawer.Title>
              <Drawer.Description
                id="gallery-info-description"
                className={visuallyHiddenClassName}
              >
                {t("ui.gallery.details")}
              </Drawer.Description>
              <div className={styles.mobileInfoBody}>{info}</div>
            </Drawer.Content>
          </Drawer.Portal>
        </Drawer.Root>
      )}
    </section>
  );
}

function GalleryCard({
  quest,
  layoutSessionId,
  selected,
  selecting,
  returnPose,
  returning,
  filtering,
  index,
  position,
  dismissY,
  dismissX,
  width,
  cardWidth,
  step,
  focusedIndex,
  desktop,
  progress,
  completed,
  reduceMotion,
  onActivate,
}: {
  quest: Quest;
  layoutSessionId: string;
  selected: boolean;
  selecting: boolean;
  returnPose?: CardReturnPose;
  returning: boolean;
  filtering: MotionValue<boolean>;
  index: number;
  position: MotionValue<number>;
  dismissY: MotionValue<number>;
  dismissX: MotionValue<number>;
  width: number;
  cardWidth: number;
  step: number;
  focusedIndex: number;
  desktop: boolean;
  progress?: QuestProgress;
  completed: boolean;
  reduceMotion: boolean;
  onActivate: () => void;
}) {
  const { t } = useTranslation();
  const isPresent = useIsPresent();
  const focused = index === focusedIndex;
  const slotPosition = useMotionValue(index * step);
  useLayoutEffect(() => {
    if (reduceMotion) {
      slotPosition.jump(index * step);
      return;
    }
    const controls = animate(slotPosition, index * step, {
      type: "spring",
      stiffness: 330,
      damping: 32,
      mass: 0.7,
    });
    return () => controls.stop();
  }, [index, reduceMotion, slotPosition, step]);
  const browseTarget = useTransform(
    () => 32 + slotPosition.get() - position.get(),
  );

  const scrollVelocity = useVelocity(position);

  const trailTarget = useTransform(() => {
    const currentPosition = position.get();
    const velocity = scrollVelocity.get();

    if (filtering.get() || Math.abs(velocity) < 20) return 0;

    const currentSlot = currentPosition / step;
    const visibleSlots = width / step + 1;

    const depth =
      velocity >= 0 ? index - currentSlot : currentSlot + visibleSlots - index;

    const clampedDepth = Math.max(0, Math.min(5, depth));

    return Math.max(-110, Math.min(110, velocity * 0.0065 * clampedDepth));
  });

  const trail = useSpring(trailTarget, {
    stiffness: 850,
    damping: 60,
    mass: 0.22,
  });

  const browseX = useTransform(() => browseTarget.get() + trail.get());

  const focusedPosition = focused
    ? desktop
      ? width / 2 - cardWidth * 0.8
      : (width - cardWidth) / 2
    : index < focusedIndex
      ? -cardWidth * 0.7 - (focusedIndex - index - 1) * step
      : width - cardWidth * 0.25 + (index - focusedIndex - 1) * step;
  const focusOffsetTarget = useMotionValue(
    focusedIndex < 0
      ? 0
      : focusedPosition - (32 + index * step - position.get()),
  );

  useLayoutEffect(() => {
    if (focusedIndex < 0) {
      focusOffsetTarget.set(0);
      return;
    }

    const browsePosition = 32 + index * step - position.get();

    focusOffsetTarget.set(focusedPosition - browsePosition);
  }, [focusOffsetTarget, focusedIndex, focusedPosition, index, position, step]);

  const focusOffset = useSpring(focusOffsetTarget, {
    stiffness: 520,
    damping: 40,
    mass: 0.55,
  });

  const x = useTransform(() => {
    return (
      browseX.get() +
      (reduceMotion ? focusOffsetTarget.get() : focusOffset.get())
    );
  });

  const wasFocused = useRef(false);

  if (focused) {
    wasFocused.current = true;
  } else if (focusedIndex >= 0) {
    wasFocused.current = false;
  }

  const ownsDismissOffset = focused || (focusedIndex < 0 && wasFocused.current);

  const draggedX = useTransform(() => {
    return x.get() + (ownsDismissOffset ? dismissX.get() : 0);
  });

  const draggedY = useTransform(() => {
    return ownsDismissOffset ? dismissY.get() : 0;
  });

  const visible = useTransform(x, (value): "visible" | "hidden" =>
    value > -cardWidth * 1.5 && value < width + cardWidth
      ? "visible"
      : "hidden",
  );
  // Removed cards finish fading from their last position while the remaining slots move.
  const departureRef = useRef<{
    x: number;
    y: number;
    visibility: "visible" | "hidden";
  } | null>(null);
  if (isPresent) {
    departureRef.current = null;
  } else if (!departureRef.current) {
    departureRef.current = {
      x: draggedX.get(),
      y: draggedY.get(),
      visibility: visible.get(),
    };
  }

  return (
    <motion.div
      className={`${cardStyles.questCardFrame} ${styles.card}`}
      data-gallery-card
      data-selected={selected || undefined}
      data-focused={focused || undefined}
      data-uncompleted={!completed || undefined}
      inert={!isPresent}
      style={{
        ...getMoodAccentStyle(quest.mood.id),
        width: cardWidth,
        x: departureRef.current?.x ?? draggedX,
        y: departureRef.current?.y ?? draggedY,
        visibility: departureRef.current?.visibility ?? visible,
        zIndex: focused ? 3 : 1,
        ...(!progress
          ? { "--accent": "#89898e", "--accent-rgb": "137 137 142" }
          : {}),
      }}
    >
      <motion.div
        className={styles.cardPresence}
        initial={
          reduceMotion || returnPose
            ? false
            : { opacity: 0, y: 10, scale: 0.985 }
        }
        animate={{ opacity: selecting && !selected ? 0 : 1, y: 0, scale: 1 }}
        exit="filterExit"
        variants={{
          filterExit: (reason: "filter" | "screen") => ({
            opacity: reason === "screen" && selected ? 1 : 0,
            y: reduceMotion || reason === "screen" ? 0 : 12,
            scale: reduceMotion || reason === "screen" ? 1 : 0.985,
          }),
        }}
        transition={{
          duration: reduceMotion ? 0 : 0.26,
          ease: SELECTION_HANDOFF_EASE,
        }}
      >
        <motion.div
          className={styles.cardProjection}
          layoutId={questCardLayoutId(
            layoutSessionId,
            questOfferId(quest.mood.id, quest.id, quest.game?.id ?? null),
          )}
          layoutCrossfade={false}
          initial={false}
          data-selected={selected || undefined}
          transition={
            reduceMotion
              ? { duration: 0 }
              : {
                  layout: returnPose
                    ? CARD_RETURN_LAYOUT_TRANSITION
                    : CARD_LAYOUT_TRANSITION,
                }
          }
        >
          <motion.div
            className={styles.cardDisplay}
            initial={
              reduceMotion || !returnPose
                ? false
                : { scale: returnPose.scale, rotate: returnPose.rotate }
            }
            animate={{
              scale: 1,
              rotate: focused ? -2 : [-4, 4, -3, 3][index % 4],
            }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : returnPose
                  ? CARD_RETURN_TRANSITION
                  : { duration: 0.24 }
            }
          >
            <motion.div
              className={styles.cardSurface}
              initial={reduceMotion || !returnPose ? false : returnPose.surface}
              animate={{ y: 0, rotateX: 0, rotateY: 0, scale: 1 }}
              transition={
                reduceMotion ? { duration: 0 } : CARD_RETURN_TRANSITION
              }
            >
              <InteractiveQuestCard
                label={progress ? quest.name : t("ui.gallery.unknown")}
                onActivate={onActivate}
                reduceMotion={reduceMotion}
                hoverEnabled={!returning && !selected}
                disabled={returning || selected}
                showBack={false}
              >
                <QuestCard
                  unknown={!progress}
                  completed={completed}
                  bestTimeMs={progress?.bestTimeMs}
                  game={quest.game}
                  type={quest.type}
                  tags={quest.tags}
                  minimumDurationMinutes={quest.minimumDurationMinutes}
                  suggestedDurationMinutes={quest.suggestedDurationMinutes}
                  moodTitle={quest.mood.title}
                  name={quest.name}
                  objective={quest.objective}
                  showWordmarkLogo={focused}
                />
              </InteractiveQuestCard>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

function QuestInfo({
  progress,
  count,
  active,
  onFavorite,
  onRepeat,
}: {
  quest: Quest;
  progress?: QuestProgress;
  count: number;
  active: boolean;
  onFavorite: () => void;
  onRepeat: () => void;
}) {
  const { t, i18n } = useTranslation();
  const language = normalizeLanguage(i18n.resolvedLanguage ?? i18n.language);
  const time = (ms: number) => {
    const minutes = Math.floor(ms / 60_000);
    return minutes >= 60
      ? t("ui.profile.timePlayedHours", {
          hours: Math.floor(minutes / 60),
          minutes: minutes % 60,
        })
      : t("ui.profile.timePlayedMinutes", { minutes });
  };
  return (
    <div className={styles.info} data-gallery-details>
      <InfoText
        completed={count > 0}
        icon={
          count > 0 ? undefined : (
            <img
              src={progress ? unfinishedStatusIcon : unknownStatusIcon}
              alt=""
            />
          )
        }
      >
        {t(
          count > 0
            ? "ui.gallery.questCompleted"
            : progress
              ? "ui.gallery.notCompleted"
              : "ui.gallery.unknownCard",
        )}
      </InfoText>
      <div className={styles.actions}>
        <SolidButton
          size="medium"
          variant="secondary"
          disabled={!progress}
          aria-pressed={progress?.favorite ?? false}
          onClick={onFavorite}
          iconLeft={
            <HeartIcon
              weight={progress?.favorite ? "fill" : "bold"}
              style={progress?.favorite ? { color: "#fc3131" } : undefined}
            />
          }
        >
          {t("ui.gallery.favorite")}
        </SolidButton>
        <SolidButton
          size="medium"
          variant="highlighted"
          disabled={!progress || active}
          onClick={onRepeat}
        >
          {t(count > 0 ? "ui.gallery.repeat" : "ui.gallery.start")}
        </SolidButton>
      </div>
      {active && <InfoText>{t("ui.gallery.activeQuest")}</InfoText>}
      {count === 0 && (
        <div className={styles.statusData}>
          <img
            className={styles.statusIllustration}
            src={progress ? unfinishedIllustration : unknownIllustration}
            alt=""
          />
          <p>
            {t(
              progress
                ? "ui.gallery.unfinishedDescription"
                : "ui.gallery.unknownCard",
            )}
          </p>
        </div>
      )}
      {count > 0 && progress && (
        <dl className={styles.metrics}>
          <Metric label={t("ui.profile.timePlayed")}>
            {time(progress.totalPlayedMs)}
          </Metric>
          <Metric label={t("ui.gallery.repeated")}>
            {Math.max(0, count - 1)}×
          </Metric>
          <Metric label={t("ui.gallery.coinsEarned")}>
            {progress.coinsEarned} <CoinIcon />
          </Metric>
          <Metric label={t("ui.gallery.lastPlayed")}>
            {progress.lastCompletion
              ? new Intl.DateTimeFormat(language, {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                }).format(progress.lastCompletion.completedAt)
              : "—"}
          </Metric>
          <Metric label={t("ui.gallery.longest")}>
            {time(progress.longestSessionMs)}
          </Metric>
          {progress.bestTimeMs != null && (
            <Metric label={t("ui.gallery.personalBest")}>
              {formatRunningDuration(progress.bestTimeMs)}
            </Metric>
          )}
        </dl>
      )}
    </div>
  );
}

function Metric({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <dt>{label}</dt>
      <dd>{children}</dd>
    </div>
  );
}
