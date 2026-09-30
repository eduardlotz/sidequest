export type QuestRarity = "standard" | "special";

export const QUEST_COIN_MULTIPLIERS: Record<QuestRarity, number> = {
  standard: 1,
  special: 2,
};
