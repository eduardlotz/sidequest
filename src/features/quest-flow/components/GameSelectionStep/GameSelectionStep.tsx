import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { CURATED_GAMES_BY_ID } from "../../../../data/games";
import { sortGamesByName } from "../../../../data/games/sort";
import type { LibraryGame } from "../../../../domain/library/model";
import { countGameQuests, gameForInstallment } from "../../../../domain/quest/rules";
import { useLibraryStore } from "../../../../stores/useLibraryStore";
import { useQuestStore } from "../../../../stores/useQuestStore";
import { normalizeLanguage } from "../../../../localization/i18n";
import { SolidButton } from "../../../../shared/ui/SolidButton/SolidButton";
import { ArcCarousel } from "../ArcDeck/ArcCarousel";
import { GameCard, type GameCardItem } from "../GameCard/GameCard";
import styles from "./GameSelectionStep.module.css";

export function GameSelectionStep({
  games, onSelect, onOpenLibrary, layerPresent, layoutSessionId,
  reduceMotion, returningFromQuests, initialItemId,
}: {
  games: readonly LibraryGame[];
  onSelect: (gameId: string, installmentId?: string) => boolean;
  onOpenLibrary: () => void;
  layerPresent: boolean;
  layoutSessionId: number | string;
  reduceMotion: boolean;
  returningFromQuests: boolean;
  initialItemId?: string;
}) {
  const { i18n, t } = useTranslation();
  const language = normalizeLanguage(i18n.resolvedLanguage ?? i18n.language);
  const preferences = useLibraryStore((state) => state.curatedGamePreferences);
  const poolPreferences = useQuestStore((state) => state.poolPreferences);
  const items = useMemo(() => sortGamesByName(games.flatMap<GameCardItem>((game) => {
    const curated = CURATED_GAMES_BY_ID[game.id];
    const entries = curated?.installments.length
      ? curated.installments.filter((entry) => preferences[game.id]?.installmentIds.includes(entry.id))
        .flatMap((entry) => {
          const installment = gameForInstallment(game, entry.id);
          return installment ? [{ game: installment, installmentId: entry.id }] : [];
        })
      : [{ game, installmentId: undefined }];
    return entries.map(({ game: entryGame, installmentId }) => {
      const eligibleCount = countGameQuests(entryGame, poolPreferences);
      const totalCount = countGameQuests(entryGame);
      return {
        id: gamePickerItemId(game.id, installmentId),
        game: entryGame, installmentId, title: entryGame.name, eligibleCount, totalCount,
        subtitle: `${t("ui.arc.availableQuests", { count: eligibleCount })}. ${t("ui.arc.totalGameQuests", { count: totalCount })}`,
      };
    });
  }), language, (item) => item.title), [games, language, preferences, poolPreferences, t]);

  if (!items.length) return (
    <div className={styles.empty}>
      <strong>{t("ui.task.noLibraryGamesTitle")}</strong>
      <p>{t("ui.task.noLibraryGamesBody")}</p>
      <SolidButton type="button" size="medium" variant="soft" onClick={onOpenLibrary}>
        {t("ui.task.openLibrary")}
      </SolidButton>
    </div>
  );

  return <ArcCarousel items={items} initialItemId={initialItemId}
    label={t("ui.arc.gameCards")} cardShape="portrait"
    layerPresent={layerPresent} layoutSessionId={layoutSessionId}
    reduceMotion={reduceMotion} returningFromQuests={returningFromQuests}
    renderCardBody={(props) => <GameCard {...props} />}
    onSelect={(id) => {
      const item = items.find((entry) => entry.id === id);
      return item ? onSelect(item.game.id, item.installmentId) : false;
    }} />;
}

export function gamePickerItemId(gameId: string, installmentId?: string | null) {
  return JSON.stringify([gameId, installmentId ?? null]);
}
