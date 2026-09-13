import {
  animate,
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useVelocity,
  type MotionValue,
} from "motion/react";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useShallow } from "zustand/react/shallow";
import { Drawer } from "vaul";
import {
  ArrowLeftIcon,
  HeartIcon,
  MagnifyingGlassIcon,
} from "@phosphor-icons/react";
import { QUESTS } from "../../data/quests";
import { QUEST_PACK_BY_QUEST_ID } from "../../data/questPacks";
import { getMoodAccentStyle } from "../../data/questColors";
import { hydrateQuest } from "../../localization/catalog";
import { normalizeLanguage } from "../../localization/i18n";
import { formatRunningDuration } from "../../lib/format";
import type { Quest, QuestProgress } from "../../domain/quest/model";
import { useQuestStore } from "../../stores/useQuestStore";
import {
  DESKTOP_VIEWPORT_QUERY,
  useMediaQuery,
} from "../../shared/hooks/useMediaQuery";
import { InteractiveQuestCard } from "../../shared/quest-card/InteractiveQuestCard/InteractiveQuestCard";
import { QuestCard } from "../../shared/quest-card/QuestCard/QuestCard";
import cardStyles from "../../shared/quest-card/QuestCard/QuestCard.module.css";
import { SolidButton } from "../../shared/ui/SolidButton/SolidButton";
import { InfoText } from "../../shared/ui/InfoText/InfoText";
import { CoinIcon } from "../../shared/ui/Icons/Icons";
import { visuallyHiddenClassName } from "../../shared/ui/VisuallyHidden/VisuallyHidden";
import styles from "./QuestGallery.module.css";

type Filter = "all" | "favorites" | "completed" | "uncompleted";
const INFO_SNAP_POINTS = [0.5];
const DRAG_SLOP = 8;
const DISMISS_DISTANCE = 96;
const WHEEL_SPEED = 1.35;

export function QuestGallery({
  reduceMotion,
  onClose,
  onRepeat,
}: {
  reduceMotion: boolean;
  onClose: () => void;
  onRepeat: () => void;
}) {
  const { t, i18n } = useTranslation();
  const language = normalizeLanguage(i18n.resolvedLanguage ?? i18n.language);
  const desktop = useMediaQuery(DESKTOP_VIEWPORT_QUERY);
  const {
    progress,
    counts,
    toggleFavorite,
    repeatQuest,
    currentSession,
    ownedPackIds,
  } = useQuestStore(
    useShallow((state) => ({
      ownedPackIds: state.ownedPackIds,
      progress: state.questProgressById,
      counts: state.stats.completionCountsByQuestId,
      toggleFavorite: state.toggleQuestFavorite,
      repeatQuest: state.repeatQuest,
      currentSession: state.currentSession,
    })),
  );
  const [filter, setFilter] = useState<Filter>("all");
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [focusedId, setFocusedId] = useState<string | null>(null);
  const [snapPoint, setSnapPoint] = useState<number | string | null>(
    INFO_SNAP_POINTS[0],
  );
  const [width, setWidth] = useState(() => window.innerWidth);
  const viewport = useRef<HTMLDivElement>(null);

  const wheelDismissDistance = useRef(0);
  const wheelDismissReset = useRef<number | null>(null);

  const position = useMotionValue(0);
  const drag = useRef<{
    id: number;
    x: number;
    y: number;
    position: number;
    moved: boolean;
    axis: "x" | "y" | null;
    dismissing: boolean;
  } | null>(null);

  const dismissX = useMotionValue(0);
  const dismissY = useMotionValue(0);

  function resetDismissOffset() {
    const transition = {
      type: "spring" as const,
      stiffness: 650,
      damping: 42,
      mass: 0.45,
    };

    animate(dismissX, 0, transition);
    animate(dismissY, 0, transition);
  }

  const suppressClick = useRef(false);

  const normalizedQuery = query.trim().toLocaleLowerCase(language);

  const items = useMemo(
    () =>
      QUESTS.flatMap((definition) => {
        const known = progress[definition.id];
        const completed = (counts[definition.id] ?? 0) > 0;

        if (
          (filter === "favorites" && !known?.favorite) ||
          (filter === "completed" && !completed) ||
          (filter === "uncompleted" && completed)
        ) {
          return [];
        }

        const identity = known?.lastCompletion ?? known?.seenOffer;

        const quest = hydrateQuest(
          definition.id,
          identity?.moodId ?? definition.moodIds[0],
          identity?.game ?? null,
          language,
        );

        if (!quest) return [];

        if (
          normalizedQuery &&
          (!known ||
            !`${quest.name} ${quest.objective}`
              .toLocaleLowerCase(language)
              .includes(normalizedQuery))
        ) {
          return [];
        }

        return [quest];
      }),
    [counts, filter, language, normalizedQuery, progress],
  );

  const cardWidth = Math.min(desktop ? 300 : width * 0.76, 300);
  const step = cardWidth * 0.76;
  const maxPosition = Math.max(
    0,
    (items.length - 1) * step + cardWidth + 64 - width,
  );
  const focusedIndex = items.findIndex((item) => item.id === focusedId);
  const focusedQuest = items[focusedIndex];

  useLayoutEffect(() => {
    const element = viewport.current;
    if (!element) return;
    const observer = new ResizeObserver(([entry]) =>
      setWidth(entry.contentRect.width),
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    position.set(Math.min(position.get(), maxPosition));
  }, [maxPosition, position]);

  useEffect(() => {
    const element = viewport.current;
    if (!element) return;

    const wheel = (event: WheelEvent) => {
      if (event.ctrlKey) return;

      event.preventDefault();

      const delta =
        Math.abs(event.deltaX) > Math.abs(event.deltaY)
          ? event.deltaX
          : event.deltaY;

      const pixels =
        delta *
        (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? width : 1);

      if (focusedId) {
        if (Math.abs(pixels) > 2) {
          setFocusedId(null);
          resetDismissOffset();
        }

        return;
      }

      position.set(
        Math.max(
          0,
          Math.min(maxPosition, position.get() + pixels * WHEEL_SPEED),
        ),
      );
    };

    element.addEventListener("wheel", wheel, { passive: false });

    return () => element.removeEventListener("wheel", wheel);
  }, [focusedId, maxPosition, position, width]);

  useEffect(() => {
    if (focusedId && focusedIndex < 0) setFocusedId(null);
  }, [focusedId, focusedIndex]);

  function focus(id: string) {
    if (suppressClick.current) return;

    dismissX.jump(0);
    dismissY.jump(0);

    setFocusedId((current) => (current === id ? null : id));
    setSnapPoint(INFO_SNAP_POINTS[0]);
  }

  const info = focusedQuest && (
    <QuestInfo
      packTitle={
        QUEST_PACK_BY_QUEST_ID[focusedQuest.id] &&
        !ownedPackIds.includes(QUEST_PACK_BY_QUEST_ID[focusedQuest.id].id)
          ? QUEST_PACK_BY_QUEST_ID[focusedQuest.id].title[language]
          : undefined
      }
      quest={focusedQuest}
      progress={progress[focusedQuest.id]}
      count={counts[focusedQuest.id] ?? 0}
      active={Boolean(currentSession)}
      onFavorite={() => toggleFavorite(focusedQuest.id)}
      onRepeat={() => {
        if (repeatQuest(focusedQuest.id)) onRepeat();
      }}
    />
  );

  return (
    <section className={styles.gallery} aria-label={t("ui.gallery.title")}>
      <header className={styles.header}>
        <SolidButton
          className={styles.back}
          variant="soft"
          size="small"
          onClick={onClose}
          iconLeft={<ArrowLeftIcon />}
        >
          {t("ui.gallery.back")}
        </SolidButton>
        <h1>{t("ui.gallery.title")}</h1>
        <div className={styles.filters}>
          <SolidButton
            variant="soft"
            size="medium"
            aria-label={t("ui.gallery.search")}
            aria-expanded={searchOpen}
            onClick={() => setSearchOpen((value) => !value)}
          >
            <MagnifyingGlassIcon weight="duotone" />
          </SolidButton>
          {searchOpen && (
            <input
              autoFocus
              type="search"
              value={query}
              placeholder={t("ui.gallery.search")}
              aria-label={t("ui.gallery.search")}
              onChange={(event) => {
                setQuery(event.target.value);
                position.set(0);
                setFocusedId(null);
              }}
            />
          )}
          <select
            aria-label={t("ui.gallery.filter")}
            value={filter}
            onChange={(event) => {
              setFilter(event.target.value as Filter);
              setFocusedId(null);
              position.set(0);
            }}
          >
            {(["all", "favorites", "completed", "uncompleted"] as const).map(
              (value) => (
                <option value={value} key={value}>
                  {t(`ui.gallery.${value}`)}
                </option>
              ),
            )}
          </select>
        </div>
      </header>
      <div
        className={styles.viewport}
        ref={viewport}
        style={{
          touchAction: focusedId ? "none" : "pan-y",
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

          suppressClick.current = false;

          const target = event.target instanceof Element ? event.target : null;

          const focusedCard = target?.closest('[data-focused="true"]');

          if (focusedId && !focusedCard) {
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
            moved: false,
            axis: null,
            dismissing: Boolean(focusedCard),
          };
        }}
        onPointerMove={(event) => {
          const start = drag.current;
          if (!start || start.id !== event.pointerId) return;

          const dx = event.clientX - start.x;
          const dy = event.clientY - start.y;
          const distance = Math.hypot(dx, dy);

          if (start.dismissing) {
            if (distance < DRAG_SLOP) return;

            start.moved = true;
            suppressClick.current = true;

            if (!event.currentTarget.hasPointerCapture(event.pointerId)) {
              event.currentTarget.setPointerCapture(event.pointerId);
            }

            dismissX.set(dx);
            dismissY.set(dy);

            if (distance >= DISMISS_DISTANCE) {
              drag.current = null;

              if (event.currentTarget.hasPointerCapture(event.pointerId)) {
                event.currentTarget.releasePointerCapture(event.pointerId);
              }

              setFocusedId(null);
              resetDismissOffset();
            }

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

          position.set(Math.max(0, Math.min(maxPosition, start.position - dx)));
        }}
        onPointerUp={(event) => {
          const start = drag.current;
          drag.current = null;

          if (event.currentTarget.hasPointerCapture(event.pointerId)) {
            event.currentTarget.releasePointerCapture(event.pointerId);
          }

          if (!start?.dismissing) return;

          const distance = Math.hypot(dismissX.get(), dismissY.get());
          const velocity = Math.hypot(
            dismissX.getVelocity(),
            dismissY.getVelocity(),
          );

          if (distance >= DISMISS_DISTANCE || velocity >= 850) {
            setFocusedId(null);
          }

          resetDismissOffset();
        }}
        onPointerCancel={() => {
          drag.current = null;
          suppressClick.current = true;
          resetDismissOffset();
        }}
      >
        {items.map((quest, index) => (
          <GalleryCard
            key={quest.id}
            quest={quest}
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
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: reduceMotion ? 0 : 10 }}
              transition={{ duration: reduceMotion ? 0 : 0.2 }}
            >
              {info}
            </motion.aside>
          )}
        </AnimatePresence>
      )}
      {!desktop && (
        <Drawer.Root
          open={Boolean(focusedQuest)}
          onOpenChange={(open) => {
            if (!open) {
              setFocusedId(null);
              resetDismissOffset();
            }
          }}
          closeThreshold={0.2}
          modal={true}
          snapPoints={INFO_SNAP_POINTS}
          activeSnapPoint={snapPoint}
          // setActiveSnapPoint={setSnapPoint}
          snapToSequentialPoint
          shouldScaleBackground={false}
        >
          <Drawer.Portal>
            <Drawer.Content
              className={styles.mobileInfo}
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
  const focused = index === focusedIndex;
  // const target = useTransform(position, (value) =>
  //   focusedIndex < 0
  //     ? 32 + index * step - value
  //     : focused
  //       ? desktop
  //         ? width / 2 - cardWidth * 0.8
  //         : (width - cardWidth) / 2
  //       : index < focusedIndex
  //         ? -cardWidth * 0.7 - (focusedIndex - index - 1) * step
  //         : width - cardWidth * 0.25 + (index - focusedIndex - 1) * step,
  // );
  const browseTarget = useTransform(
    position,
    (value) => 32 + index * step - value,
  );

  const scrollVelocity = useVelocity(position);

  const trailTarget = useTransform(() => {
    const currentPosition = position.get();
    const velocity = scrollVelocity.get();

    if (Math.abs(velocity) < 20) return 0;

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

  const focusOffsetTarget = useMotionValue(0);

  useLayoutEffect(() => {
    if (focusedIndex < 0) {
      focusOffsetTarget.set(0);
      return;
    }

    const browsePosition = 32 + index * step - position.get();

    const focusedPosition = focused
      ? desktop
        ? width / 2 - cardWidth * 0.8
        : (width - cardWidth) / 2
      : index < focusedIndex
        ? -cardWidth * 0.7 - (focusedIndex - index - 1) * step
        : width - cardWidth * 0.25 + (index - focusedIndex - 1) * step;

    focusOffsetTarget.set(focusedPosition - browsePosition);
  }, [
    cardWidth,
    desktop,
    focusOffsetTarget,
    focused,
    focusedIndex,
    index,
    position,
    step,
    width,
  ]);

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

  const visible = useTransform(x, (value) =>
    value > -cardWidth * 1.5 && value < width + cardWidth
      ? "visible"
      : "hidden",
  );

  return (
    <motion.div
      layoutId={`gallery-card-${quest.id}`}
      layoutCrossfade={false}
      className={`${cardStyles.questCardFrame} ${styles.card}`}
      data-focused={focused || undefined}
      data-uncompleted={!completed || undefined}
      style={{
        ...getMoodAccentStyle(quest.mood.id),
        width: cardWidth,
        x: draggedX,
        y: draggedY,
        visibility: visible,
        zIndex: focused ? 3 : 1,
        ...(!progress
          ? { "--accent": "#89898e", "--accent-rgb": "137 137 142" }
          : {}),
      }}
      animate={{
        rotate: focused ? -2 : [-4, 4, -3, 3][index % 4],
        // opacity: focusedIndex >= 0 && !focused ? 0.3 : 1,
      }}
      transition={{ duration: reduceMotion ? 0 : 0.24 }}
    >
      <InteractiveQuestCard
        label={progress ? quest.name : t("ui.gallery.unknown")}
        onActivate={onActivate}
        reduceMotion={reduceMotion}
        // hoverEnabled={focusedIndex < 0 || focused}
        // hoverEnabled={focused}
        hoverEnabled
        showBack={false}
        // floating={focused}
      >
        <QuestCard
          unknown={!progress}
          completed={completed}
          bestTimeMs={progress?.bestTimeMs}
          game={quest.game}
          genres={quest.genres}
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
  );
}

function QuestInfo({
  progress,
  count,
  active,
  onFavorite,
  onRepeat,
  packTitle,
}: {
  quest: Quest;
  progress?: QuestProgress;
  count: number;
  active: boolean;
  onFavorite: () => void;
  onRepeat: () => void;
  packTitle?: string;
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
    <div className={styles.info}>
      <InfoText completed={count > 0}>
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
          disabled={!count || active}
          onClick={onRepeat}
        >
          {t("ui.gallery.repeat")}
        </SolidButton>
      </div>
      {active && <InfoText>{t("ui.gallery.activeQuest")}</InfoText>}
      {progress && (
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
      {!count && progress && (
        <InfoText>{t("ui.gallery.unlockRepeat")}</InfoText>
      )}
      {packTitle && !count && (
        <InfoText>{t("ui.gallery.packLocked", { pack: packTitle })}</InfoText>
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
