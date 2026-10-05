export const QUEST_PEOPLE = {
  alone: { en: "Alone", de: "Allein" },
  others: { en: "With others", de: "Mit anderen" },
} as const;
export const QUEST_PARTICIPATION = {
  solo: { en: "Solo", de: "Solo" },
  "co-op": { en: "Co-op", de: "Koop" },
} as const;
export const QUEST_FORMATIONS = {
  none: { en: "No fixed formation", de: "Keine feste Formation" },
  squad: { en: "Squad", de: "Squad" },
  team: { en: "Team", de: "Team" },
} as const;
export const QUEST_ORIGINS = {
  curated: { en: "Curated", de: "Kuratiert" },
  flexible: { en: "Flexible", de: "Flexibel" },
} as const;
export type QuestPeopleId = keyof typeof QUEST_PEOPLE;
export type QuestParticipationId = keyof typeof QUEST_PARTICIPATION;
export type QuestFormationId = keyof typeof QUEST_FORMATIONS;
export type QuestOriginId = keyof typeof QUEST_ORIGINS;
export type QuestPlayContext = {
  connection: "online" | "offline";
  people: QuestPeopleId;
  participation: QuestParticipationId;
  formation: QuestFormationId;
  /** A mode/unlock the player must choose; localized through prerequisites. */
  mode?: string;
};

export type ContextSelections = {
  connectionModeIds: readonly ("online" | "offline")[];
  peopleIds: readonly QuestPeopleId[];
  participationIds: readonly QuestParticipationId[];
  formationIds: readonly QuestFormationId[];
};

export function matchesPlayContext(context: QuestPlayContext, selected: ContextSelections) {
  return selected.connectionModeIds.includes(context.connection)
    && selected.peopleIds.includes(context.people)
    && selected.participationIds.includes(context.participation)
    && selected.formationIds.includes(context.formation);
}
