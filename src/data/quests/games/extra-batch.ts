import type { GameGenreId } from "../../gameGenres";
import type { QuestTagId, QuestTypeId } from "../../questTraits";
import type { QuestPoolPlayId, QuestPoolTraits } from "../../questPoolTraits";
import type { MoodId, AuthoredQuestDefinition } from "../../questTypes";
import { defineGameQuests } from "../defineGameQuests";

// Each row is one authored session, never a template applied to several games.
// Series rows name one installment, so each installment has its own ten quests.
export type Row = readonly [
  id: string,
  installment: string | null,
  mood: MoodId,
  type: QuestTypeId,
  tags: readonly QuestTagId[],
  enName: string,
  enObjective: string,
  deName: string,
  deObjective: string,
  minutes?: number,
  styles?: readonly QuestPoolPlayId[],
];

export type Batch = {
  quests: AuthoredQuestDefinition[];
  traits: Record<string, QuestPoolTraits>;
};

export function batch(
  gameId: string,
  genreIds: readonly GameGenreId[],
  styleIds: readonly QuestPoolPlayId[],
  rows: readonly Row[],
): Batch {
  return {
    quests: defineGameQuests(gameId, rows.map(([
      id, installment, mood, type, tags, enName, enObjective, deName,
      deObjective, minutes = 20,
    ]) => ({
      id,
      installments: installment ? [installment] : [],
      moods: [mood],
      type,
      tags,
      minutes,
      minimum: minutes <= 15 ? 2 : 3,
      en: { name: enName, objective: enObjective },
      de: { name: deName, objective: deObjective },
    }))),
    traits: Object.fromEntries(rows.map((row) => [
      `${gameId}-${row[0]}`,
      { genreIds, styleIds: row[10] ?? styleIds },
    ])),
  };
}
